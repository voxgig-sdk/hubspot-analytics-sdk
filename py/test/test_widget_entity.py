# Widget entity test

import json
import os
import time

import pytest

from hubspotanalytics_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotanalytics_sdk import HubspotAnalyticsSDK
from hubspotanalytics_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestWidgetEntity:

    def test_should_create_instance(self):
        testsdk = HubspotAnalyticsSDK.test(None, None)
        ent = testsdk.Widget(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _widget_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "widget." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        widget_ref01_ent = client.Widget(None)
        widget_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.widget"), "widget_ref01"))
        widget_ref01_data["dashboard_id"] = setup["idmap"]["dashboard01"]

        widget_ref01_data = helpers.to_map(runner.entity_data(widget_ref01_ent.create(widget_ref01_data, None)))
        assert widget_ref01_data is not None
        assert widget_ref01_data["id"] is not None

        # UPDATE
        widget_ref01_data_up0_up = {
            "id": widget_ref01_data["id"],
            "dashboard_id": setup["idmap"]["dashboard_id"],
        }

        widget_ref01_markdef_up0_name = "archivedAt"
        widget_ref01_markdef_up0_value = "Mark01-widget_ref01_" + str(setup["now"])
        widget_ref01_data_up0_up[widget_ref01_markdef_up0_name] = widget_ref01_markdef_up0_value

        widget_ref01_resdata_up0 = helpers.to_map(runner.entity_data(widget_ref01_ent.update(widget_ref01_data_up0_up, None)))
        assert widget_ref01_resdata_up0 is not None
        assert widget_ref01_resdata_up0["id"] == widget_ref01_data_up0_up["id"]
        assert widget_ref01_resdata_up0[widget_ref01_markdef_up0_name] == widget_ref01_markdef_up0_value

        # REMOVE
        widget_ref01_match_rm0 = {
            "id": widget_ref01_data["id"],
        }
        widget_ref01_ent.remove(widget_ref01_match_rm0, None)



def _widget_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/widget/WidgetTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotAnalyticsSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["widget01", "widget02", "widget03", "dashboard01", "dashboard02", "dashboard03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID": idmap,
        "HUBSPOT_ANALYTICS_TEST_LIVE": "FALSE",
        "HUBSPOT_ANALYTICS_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_ANALYTICS_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("dashboard_id") is None:
        idmap_resolved["dashboard_id"] = idmap_resolved.get("dashboard01")

    if env.get("HUBSPOT_ANALYTICS_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("HUBSPOT_ANALYTICS_APIKEY"),
            },
            extra or {},
        ])
        client = HubspotAnalyticsSDK(helpers.to_map(merged_opts))

    _live = env.get("HUBSPOT_ANALYTICS_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("HUBSPOT_ANALYTICS_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
