package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestWidgetEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Widget(nil)
		if ent == nil {
			t.Fatal("expected non-nil WidgetEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := widgetBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "widget." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		widgetRef01Ent := client.Widget(nil)
		widgetRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "widget"}), "widget_ref01"))
		widgetRef01Data["dashboard_id"] = setup.idmap["dashboard01"]

		widgetRef01DataResult, err := widgetRef01Ent.Create(widgetRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		widgetRef01Data = core.ToMapAny(entityData(widgetRef01DataResult))
		if widgetRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if widgetRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		widgetRef01DataUp0Up := map[string]any{
			"id": widgetRef01Data["id"],
			"dashboard_id": setup.idmap["dashboard_id"],
		}

		widgetRef01MarkdefUp0Name := "archivedAt"
		widgetRef01MarkdefUp0Value := fmt.Sprintf("Mark01-widget_ref01_%d", setup.now)
		widgetRef01DataUp0Up[widgetRef01MarkdefUp0Name] = widgetRef01MarkdefUp0Value

		widgetRef01ResdataUp0Result, err := widgetRef01Ent.Update(widgetRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		widgetRef01ResdataUp0 := core.ToMapAny(entityData(widgetRef01ResdataUp0Result))
		if widgetRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if widgetRef01ResdataUp0["id"] != widgetRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if widgetRef01ResdataUp0[widgetRef01MarkdefUp0Name] != widgetRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", widgetRef01MarkdefUp0Name, widgetRef01ResdataUp0[widgetRef01MarkdefUp0Name])
		}

		// REMOVE
		widgetRef01MatchRm0 := map[string]any{
			"id": widgetRef01Data["id"],
		}
		_, err = widgetRef01Ent.Remove(widgetRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func widgetBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "widget", "WidgetTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read widget test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse widget test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"widget01", "widget02", "widget03", "dashboard01", "dashboard02", "dashboard03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID": idmap,
		"HUBSPOT_ANALYTICS_TEST_LIVE":      "FALSE",
		"HUBSPOT_ANALYTICS_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_ANALYTICS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add dashboard_id alias for update test.
	if idmapResolved["dashboard_id"] == nil {
		idmapResolved["dashboard_id"] = idmapResolved["dashboard01"]
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
