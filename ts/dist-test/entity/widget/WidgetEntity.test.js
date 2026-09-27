"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WidgetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_ANALYTICS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_ANALYTICS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotAnalyticsSDK.test();
        const ent = testsdk.Widget();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_ANALYTICS_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'widget.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": true, "sh": "Whether the dashboard is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "archivedAt": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archivedAt", "r": false, "sh": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.", "t": "`$STRING`", "key$": "archivedAt", "index$": 1 }, "businessUnitId": { "a": true, "h": "Business Unit Id", "n": "businessUnitId", "r": true, "sh": "The ID of the business unit that the dashboard is associated with.", "t": "`$STRING`", "key$": "businessUnitId", "index$": 2 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "The date and time when the dashboard was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 3 }, "createdByUserId": { "a": true, "h": "Created By User Id", "n": "createdByUserId", "r": false, "sh": "The ID of the user who created the dashboard.", "t": "`$STRING`", "key$": "createdByUserId", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of the dashboard.", "t": "`$STRING`", "key$": "description", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The ID of the dashboard.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "inputs": { "a": true, "h": "Inputs", "n": "inputs", "r": true, "sh": "Array of report or dashboard IDs.", "t": "`$ARRAY`", "key$": "inputs", "index$": 7 }, "lastViewedAt": { "a": true, "fo": "date-time", "h": "Last Viewed At", "n": "lastViewedAt", "r": false, "sh": "The date and time when the dashboard was last viewed, in ISO 8601 format.", "t": "`$STRING`", "key$": "lastViewedAt", "index$": 8 }, "lastViewedByUserId": { "a": true, "h": "Last Viewed By User Id", "n": "lastViewedByUserId", "r": false, "sh": "The ID of the user who last viewed the dashboard.", "t": "`$STRING`", "key$": "lastViewedByUserId", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the dashboard.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "ownerUserId": { "a": true, "h": "Owner User Id", "n": "ownerUserId", "r": false, "sh": "The ID of the user who owns the dashboard.", "t": "`$STRING`", "key$": "ownerUserId", "index$": 11 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": true, "t": "`$OBJECT`", "key$": "permissions", "index$": 12 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Array of objects representing the tags that the dashboard is tagged with.", "t": "`$ARRAY`", "key$": "tags", "index$": 13 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The date and time when the dashboard was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 14 }, "updatedByUserId": { "a": true, "h": "Updated By User Id", "n": "updatedByUserId", "r": false, "sh": "The ID of the user who last updated the dashboard.", "t": "`$STRING`", "key$": "updatedByUserId", "index$": 15 }, "widgets": { "a": true, "h": "Widgets", "n": "widgets", "r": false, "sh": "An array of objects representing the widgets on the dashboard.", "t": "`$ARRAY`", "key$": "widgets", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "widget", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "dashboard_id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets", "q": { "exist": ["dashboard_id"] }, "r": { "param": { "dashboardId": "dashboard_id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "dashboard_id" }, { "lit": "batch" }, { "lit": "widgets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "dashboard_id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": null, "k": "param", "n": "id", "or": "report_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}", "q": { "exist": ["dashboard_id", "id"] }, "r": { "param": { "dashboardId": "dashboard_id", "reportId": "id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "dashboard_id" }, { "lit": "widgets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "dashboard_id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": null, "k": "param", "n": "id", "or": "report_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}", "q": { "exist": ["dashboard_id", "id"] }, "r": { "param": { "dashboardId": "dashboard_id", "reportId": "id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "dashboard_id" }, { "lit": "widgets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.dashboard"]] }, "key$": "widget", "name__orig": "widget", "Name": "Widget", "name_": "widget", "name-": "widget", "NAME": "WIDGET", "index$": 6 }, { "active": true, "entity": "widget", "key$": "BasicWidgetFlow", "kind": "basic", "name": "BasicWidgetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "widget_ref01" }, "m": { "dashboard_id": "dashboard01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "dashboard_id": "dashboard01" }, "i": { "ref": "widget_ref01", "srcdatavar": "widget_ref01_data", "suffix": "_up0", "textfield": "archivedAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-widget_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "widget_ref01", "suffix": "_rm0" }, "m": { "dashboard_id": "dashboard01", "id": "widget01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'Widget', { "POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs"], "type": "object", "properties": { "inputs": { "type": "array", "description": "Array of report or dashboard IDs.", "example": null, "items": { "type": "string", "example": null }, "key$": "inputs" } }, "example": null, "x-ref": "#/components/schemas/ReportingBatchInputString", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to add reports to.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] }, "DELETE /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}": { "protocol": "http", "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to modify.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }, { "name": "reportId", "in": "path", "description": "The ID of the report to remove from the dashboard.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 1 }] }, "PUT /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}": { "protocol": "http", "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to modify", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }, { "name": "reportId", "in": "path", "description": "The ID of the report to add to the dashboard.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const widget_ref01_ent = client.Widget();
        let widget_ref01_data = setup.data.new.widget['widget_ref01'];
        widget_ref01_data['dashboard_id'] = setup.idmap['dashboard01'];
        widget_ref01_data = (await widget_ref01_ent.create(widget_ref01_data)).data();
        (0, node_assert_1.default)(null != widget_ref01_data.id);
        // UPDATE
        const widget_ref01_data_up0 = {};
        widget_ref01_data_up0.id = widget_ref01_data.id;
        widget_ref01_data_up0['dashboard_id'] = setup.idmap['dashboard_id'];
        const widget_ref01_markdef_up0 = { name: 'archivedAt', value: 'Mark01-widget_ref01_' + setup.now };
        widget_ref01_data_up0[widget_ref01_markdef_up0.name] = widget_ref01_markdef_up0.value;
        const widget_ref01_resdata_up0 = (await widget_ref01_ent.update(widget_ref01_data_up0)).data();
        (0, node_assert_1.default)(widget_ref01_resdata_up0.id === widget_ref01_data_up0.id);
        (0, node_assert_1.default)(widget_ref01_resdata_up0[widget_ref01_markdef_up0.name] === widget_ref01_markdef_up0.value);
        // REMOVE
        const widget_ref01_match_rm0 = { id: widget_ref01_data.id };
        await widget_ref01_ent.remove(widget_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/widget/WidgetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotAnalyticsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['widget01', 'widget02', 'widget03', 'dashboard01', 'dashboard02', 'dashboard03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID': idmap,
        'HUBSPOT_ANALYTICS_TEST_LIVE': 'FALSE',
        'HUBSPOT_ANALYTICS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_ANALYTICS_APIKEY': '',
    });
    idmap = env['HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_ANALYTICS_TEST_WIDGET_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotAnalyticsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.HUBSPOT_ANALYTICS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WidgetEntity.test.js.map