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
(0, node_test_1.describe)('DashboardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_ANALYTICS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_ANALYTICS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotAnalyticsSDK.test();
        const ent = testsdk.Dashboard();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_ANALYTICS_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'dashboard.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "op": { "update": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Whether the dashboard is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "archivedAt": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archivedAt", "r": false, "sh": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.", "t": "`$STRING`", "key$": "archivedAt", "index$": 1 }, "businessUnitId": { "a": true, "h": "Business Unit Id", "n": "businessUnitId", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "The ID of the business unit that the dashboard is associated with.", "t": "`$STRING`", "key$": "businessUnitId", "index$": 2 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "The date and time when the dashboard was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 3 }, "createdByUserId": { "a": true, "h": "Created By User Id", "n": "createdByUserId", "r": false, "sh": "The ID of the user who created the dashboard.", "t": "`$STRING`", "key$": "createdByUserId", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of the dashboard.", "t": "`$STRING`", "key$": "description", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The ID of the dashboard.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "inputs": { "a": true, "h": "Inputs", "n": "inputs", "r": true, "sh": "Array of report or dashboard IDs.", "t": "`$ARRAY`", "key$": "inputs", "index$": 7 }, "lastViewedAt": { "a": true, "fo": "date-time", "h": "Last Viewed At", "n": "lastViewedAt", "r": false, "sh": "The date and time when the dashboard was last viewed, in ISO 8601 format.", "t": "`$STRING`", "key$": "lastViewedAt", "index$": 8 }, "lastViewedByUserId": { "a": true, "h": "Last Viewed By User Id", "n": "lastViewedByUserId", "r": false, "sh": "The ID of the user who last viewed the dashboard.", "t": "`$STRING`", "key$": "lastViewedByUserId", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The name of the dashboard.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "ownerUserId": { "a": true, "h": "Owner User Id", "n": "ownerUserId", "r": false, "sh": "The ID of the user who owns the dashboard.", "t": "`$STRING`", "key$": "ownerUserId", "index$": 11 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": true, "t": "`$OBJECT`", "key$": "permissions", "index$": 12 }, "reportIdsToAdd": { "a": true, "h": "Report Ids To Add", "n": "reportIdsToAdd", "r": false, "sh": "Array of IDs of reports that should be added to the dashboard after creation.", "t": "`$ARRAY`", "key$": "reportIdsToAdd", "index$": 13 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Array of objects representing the tags that the dashboard is tagged with.", "t": "`$ARRAY`", "key$": "tags", "index$": 14 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The date and time when the dashboard was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 15 }, "updatedByUserId": { "a": true, "h": "Updated By User Id", "n": "updatedByUserId", "r": false, "sh": "The ID of the user who last updated the dashboard.", "t": "`$STRING`", "key$": "updatedByUserId", "index$": 16 }, "widgets": { "a": true, "h": "Widgets", "n": "widgets", "r": false, "sh": "An array of objects representing the widgets on the dashboard.", "t": "`$ARRAY`", "key$": "widgets", "index$": 17 } }, "id": { "field": "id", "name": "id" }, "name": "dashboard", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export", "q": { "$action": "export", "exist": ["id"] }, "r": { "param": { "dashboardId": "id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "id" }, { "lit": "export" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards", "q": {}, "r": {}, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/batch/archive", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/batch/archive", "q": {}, "r": {}, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "lit": "batch" }, { "lit": "archive" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /analytics/reporting/2027-03-beta/dashboards/{dashboardId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": null, "k": "query", "n": "archived", "or": "archived", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": null, "k": "query", "n": "property", "or": "property", "r": false, "t": "`$ARRAY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}", "q": { "exist": ["archived", "id", "property"] }, "r": { "param": { "dashboardId": "id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /analytics/reporting/2027-03-beta/dashboards/{dashboardId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}", "q": { "exist": ["id"] }, "r": { "param": { "dashboardId": "id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "dashboard", "name__orig": "dashboard", "Name": "Dashboard", "name_": "dashboard", "name-": "dashboard", "NAME": "DASHBOARD", "index$": 1 }, { "active": true, "entity": "dashboard", "key$": "BasicDashboardFlow", "kind": "basic", "name": "BasicDashboardFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "dashboard_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "dashboard_ref01", "srcdatavar": "dashboard_ref01_data", "suffix": "_up0", "textfield": "archivedAt" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dashboard_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "dashboard_ref01", "srcdatavar": "dashboard_ref01_data", "suffix": "_dt0" }, "m": { "id": "dashboard01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-dashboard_ref01" } }], "index$": 2 }] }, 'Dashboard', { "POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["exportType"], "type": "object", "properties": { "exportType": { "type": "string", "description": "The type of export to perform. Valid values are:\n- `SCREENSHOT`: Individual report screenshots.\n- `PDF`: PDF with individual report screenshots.\n- `PPTX` PPTX with individual report screenshots.\n- `ZIP`: ZIP of individual report screenshots.\n- `CSV`: ZIP with one or more CSV files per report.\n- `XLS`: ZIP with one or more XLS files per report.\n- `XLSX: ZIP with one or more XLSX files per report.", "example": null, "enum": ["CSV", "PDF", "PPTX", "SCREENSHOT", "XLS", "XLSX", "ZIP"] }, "message": { "type": "string", "description": "The message to include with the export. Optional, empty by default.", "example": null }, "recipientUserIds": { "type": "array", "description": "Array of user IDs to send the export to. If absent or empty, the requesting user is used as the sole recipient; otherwise, this exact set of users is used.", "example": null, "items": { "type": "string", "example": null } }, "reportIds": { "type": "array", "description": "Array of IDs of reports to optionally narrow the export to. IDs of reports that are not on the dashboard are ignored. If absent or empty, all reports on the dashboard are included.", "example": null, "items": { "type": "string", "example": null } }, "subject": { "type": "string", "description": "The subject line to use for the export. If absent, the name of the requested report will be used. Max length of 100 characters.", "example": null } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardExportRequest" }, "example": null } }, "required": true }, "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to export.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] }, "POST /analytics/reporting/2027-03-beta/dashboards": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["name", "permissions"], "type": "object", "properties": { "businessUnitId": { "type": "string", "description": "The ID of the business unit to associate the new dashboard with. Optional, the account's default is used by default.", "example": null, "key$": "businessUnitId" }, "description": { "type": "string", "description": "A description of the new dashboard. Optional.", "example": null, "key$": "description" }, "name": { "type": "string", "description": "The name of the new dashboard.", "example": null, "key$": "name" }, "permissions": { "required": ["permissionType"], "type": "object", "properties": { "permissionType": { "description": "The type of permission to apply to the report. Valid values are:\n- PRIVATE: The report is only accessible to its owner and administrators.\n- EVERYONE_VIEW: The report is viewable by everyone.\n- EVERYONE_EDIT: The report is viewable and editable by everyone.\n- SPECIFIC: In addition to the owner, specific users and/or teams are granted VIEW or EDIT permissions. The `specificPermissions` field must also be present.", "enum": ["EVERYONE_EDIT", "EVERYONE_VIEW", "PRIVATE", "SPECIFIC"], "example": null, "type": "string" }, "specificPermissions": { "description": "Array of specific permission grants. Must be present when `permissionType` is set to `SPECIFIC`, ignored otherwise.\n\nDashboards can have one or two specific permission configurations: one for VIEW grants and/or one for EDIT grants. Specific users and/or teams receive either VIEW or EDIT permissions based on which configuration they appear in. A given user or team cannot appear in both VIEW and EDIT configurations.", "example": null, "items": { "example": null, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ReportingPublicSpecificPermissionConfig" }, "type": "array" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardPermissions", "key$": "permissions" }, "reportIdsToAdd": { "type": "array", "description": "Array of IDs of reports that should be added to the dashboard after creation. Optional.", "example": null, "items": { "type": "string", "example": null }, "key$": "reportIdsToAdd" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardCreateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "POST /analytics/reporting/2027-03-beta/dashboards/batch/archive": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs"], "type": "object", "properties": { "inputs": { "type": "array", "description": "Array of report or dashboard IDs.", "example": null, "items": { "type": "string", "example": null }, "key$": "inputs" } }, "example": null, "x-ref": "#/components/schemas/ReportingBatchInputString", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "GET /analytics/reporting/2027-03-beta/dashboards/{dashboardId}": { "protocol": "http", "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to retrieve.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }, { "name": "archived", "in": "query", "description": "Whether to retrieve an archived dashboard instead of an active one. Default false.", "required": false, "style": "form", "explode": true, "schema": { "type": "boolean", "example": null, "default": false }, "index$": 1 }, { "name": "properties", "in": "query", "description": "Additionally properties to include in the response. Refer to the response details for available fields.", "required": false, "style": "form", "explode": true, "schema": { "type": "array", "example": null, "items": { "type": "string", "example": null } }, "index$": 2 }] }, "PATCH /analytics/reporting/2027-03-beta/dashboards/{dashboardId}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "archived": { "type": "boolean", "description": "Whether to archive (`true`) or restore (`false`) the dashboard. Cannot be combined with any other fields.", "example": null, "key$": "archived" }, "businessUnitId": { "type": "object", "properties": {}, "description": "The new business unit ID to use for the dashboard. Set to `null` to reset to the account's default business unit. Omit to leave unchanged.", "example": null, "key$": "businessUnitId" }, "description": { "type": "object", "properties": {}, "description": "The new description to use for the dashboard. Set to `null` to clear the description. Omit to leave unchanged.", "example": null, "key$": "description" }, "name": { "type": "string", "description": "The new name to use for the dashboard. Omit to leave unchanged.", "example": null, "key$": "name" }, "ownerUserId": { "type": "string", "description": "The ID of the user to change the dashboard's owner to. Omit to leave unchanged.", "example": null, "key$": "ownerUserId" }, "permissions": { "required": ["permissionType"], "type": "object", "properties": { "permissionType": { "description": "The type of permission to apply to the report. Valid values are:\n- PRIVATE: The report is only accessible to its owner and administrators.\n- EVERYONE_VIEW: The report is viewable by everyone.\n- EVERYONE_EDIT: The report is viewable and editable by everyone.\n- SPECIFIC: In addition to the owner, specific users and/or teams are granted VIEW or EDIT permissions. The `specificPermissions` field must also be present.", "enum": ["EVERYONE_EDIT", "EVERYONE_VIEW", "PRIVATE", "SPECIFIC"], "example": null, "type": "string" }, "specificPermissions": { "description": "Array of specific permission grants. Must be present when `permissionType` is set to `SPECIFIC`, ignored otherwise.\n\nDashboards can have one or two specific permission configurations: one for VIEW grants and/or one for EDIT grants. Specific users and/or teams receive either VIEW or EDIT permissions based on which configuration they appear in. A given user or team cannot appear in both VIEW and EDIT configurations.", "example": null, "items": { "example": null, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ReportingPublicSpecificPermissionConfig" }, "type": "array" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardPermissions", "key$": "permissions" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardUpdateRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to update.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const dashboard_ref01_ent = client.Dashboard();
        let dashboard_ref01_data = setup.data.new.dashboard['dashboard_ref01'];
        dashboard_ref01_data = (await dashboard_ref01_ent.create(dashboard_ref01_data)).data();
        (0, node_assert_1.default)(null != dashboard_ref01_data.id);
        // UPDATE
        const dashboard_ref01_data_up0 = {};
        dashboard_ref01_data_up0.id = dashboard_ref01_data.id;
        const dashboard_ref01_markdef_up0 = { name: 'archivedAt', value: 'Mark01-dashboard_ref01_' + setup.now };
        dashboard_ref01_data_up0[dashboard_ref01_markdef_up0.name] = dashboard_ref01_markdef_up0.value;
        const dashboard_ref01_resdata_up0 = (await dashboard_ref01_ent.update(dashboard_ref01_data_up0)).data();
        (0, node_assert_1.default)(dashboard_ref01_resdata_up0.id === dashboard_ref01_data_up0.id);
        (0, node_assert_1.default)(dashboard_ref01_resdata_up0[dashboard_ref01_markdef_up0.name] === dashboard_ref01_markdef_up0.value);
        // LOAD
        const dashboard_ref01_match_dt0 = {};
        dashboard_ref01_match_dt0.id = dashboard_ref01_data.id;
        const dashboard_ref01_data_dt0 = (await dashboard_ref01_ent.load(dashboard_ref01_match_dt0)).data();
        (0, node_assert_1.default)(dashboard_ref01_data_dt0.id === dashboard_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/dashboard/DashboardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotAnalyticsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['dashboard01', 'dashboard02', 'dashboard03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_ANALYTICS_TEST_DASHBOARD_ENTID': idmap,
        'HUBSPOT_ANALYTICS_TEST_LIVE': 'FALSE',
        'HUBSPOT_ANALYTICS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_ANALYTICS_APIKEY': '',
    });
    idmap = env['HUBSPOT_ANALYTICS_TEST_DASHBOARD_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_ANALYTICS_TEST_DASHBOARD_ENTID'];
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
//# sourceMappingURL=DashboardEntity.test.js.map