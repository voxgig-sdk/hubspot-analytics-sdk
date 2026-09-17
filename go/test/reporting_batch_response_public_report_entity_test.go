package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-analytics-sdk/go"
	"github.com/voxgig-sdk/hubspot-analytics-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-analytics-sdk/go/utility/struct"
)

func TestReportingBatchResponsePublicReportEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ReportingBatchResponsePublicReport(nil)
		if ent == nil {
			t.Fatal("expected non-nil ReportingBatchResponsePublicReportEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := reporting_batch_response_public_reportBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "reporting_batch_response_public_report." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_REPORT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		reportingBatchResponsePublicReportRef01Ent := client.ReportingBatchResponsePublicReport(nil)
		reportingBatchResponsePublicReportRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "reporting_batch_response_public_report"}), "reporting_batch_response_public_report_ref01"))

		reportingBatchResponsePublicReportRef01DataResult, err := reportingBatchResponsePublicReportRef01Ent.Create(reportingBatchResponsePublicReportRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		reportingBatchResponsePublicReportRef01Data = core.ToMapAny(entityData(reportingBatchResponsePublicReportRef01DataResult))
		if reportingBatchResponsePublicReportRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func reporting_batch_response_public_reportBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "reporting_batch_response_public_report", "ReportingBatchResponsePublicReportTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read reporting_batch_response_public_report test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse reporting_batch_response_public_report test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"reporting_batch_response_public_report01", "reporting_batch_response_public_report02", "reporting_batch_response_public_report03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_REPORT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_REPORT_ENTID": idmap,
		"HUBSPOT_ANALYTICS_TEST_LIVE":      "FALSE",
		"HUBSPOT_ANALYTICS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_ANALYTICS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_REPORT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HUBSPOT_ANALYTICS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_ANALYTICS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotAnalyticsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_ANALYTICS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_ANALYTICS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
