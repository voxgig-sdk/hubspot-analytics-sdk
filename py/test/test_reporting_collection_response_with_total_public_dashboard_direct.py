# ReportingCollectionResponseWithTotalPublicDashboard direct test

import json
import pytest

from hubspotanalytics_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotanalytics_sdk import HubspotAnalyticsSDK
from hubspotanalytics_sdk.core import helpers
from test import runner


class TestReportingCollectionResponseWithTotalPublicDashboardDirect:

    def test_should_direct_list_reporting_collection_response_with_total_public_dashboard(self):
        setup = _reporting_collection_response_with_total_public_dashboard_direct_setup([
            {"id": "direct01"},
            {"id": "direct02"},
        ])
        _skip, _reason = runner.is_control_skipped("direct", "direct-list-reporting_collection_response_with_total_public_dashboard", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        client = setup["client"]


        result = client.direct({
            "path": "analytics/reporting/2027-03-beta/dashboards",
            "method": "GET",
            "params": {},
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx and the
            # list-response shape varies wildly across public APIs. Skip
            # rather than fail when the call doesn't return a usable list.
            if result.get("err") is not None:
                pytest.skip(f"list call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("list call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert isinstance(result["data"], list)
            assert len(result["data"]) == 2
            assert len(setup["calls"]) == 1



def _reporting_collection_response_with_total_public_dashboard_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "HUBSPOT_ANALYTICS_TEST_REPORTING_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_DASHBOARD_ENTID": {},
        "HUBSPOT_ANALYTICS_TEST_LIVE": "FALSE",
        "HUBSPOT_ANALYTICS_APIKEY": "",
    })

    live = env.get("HUBSPOT_ANALYTICS_TEST_LIVE") == "TRUE"

    if live:
        # sdk-test-control.json's test.client.options seeds the live
        # client; the generated fields below overwrite anything they name.
        merged_opts = dict(runner.live_client_options())
        merged_opts.update({
            "apikey": env.get("HUBSPOT_ANALYTICS_APIKEY"),
        })
        client = HubspotAnalyticsSDK(merged_opts)
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = HubspotAnalyticsSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
