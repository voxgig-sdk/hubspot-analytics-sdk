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
(0, node_test_1.describe)('CloneEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_ANALYTICS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_ANALYTICS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotAnalyticsSDK.test();
        const ent = testsdk.Clone();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_ANALYTICS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'clone.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived": { "a": true, "h": "Archived", "n": "archived", "r": true, "sh": "Whether the dashboard is archived.", "t": "`$BOOLEAN`", "key$": "archived", "index$": 0 }, "archivedAt": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archivedAt", "r": false, "sh": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.", "t": "`$STRING`", "key$": "archivedAt", "index$": 1 }, "businessUnitId": { "a": true, "h": "Business Unit Id", "n": "businessUnitId", "r": true, "sh": "The ID of the business unit that the dashboard is associated with.", "t": "`$STRING`", "key$": "businessUnitId", "index$": 2 }, "cloneReports": { "a": true, "h": "Clone Reports", "n": "cloneReports", "r": true, "sh": "Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`).", "t": "`$BOOLEAN`", "key$": "cloneReports", "index$": 3 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "sh": "The date and time when the dashboard was created, in ISO 8601 format.", "t": "`$STRING`", "key$": "createdAt", "index$": 4 }, "createdByUserId": { "a": true, "h": "Created By User Id", "n": "createdByUserId", "r": false, "sh": "The ID of the user who created the dashboard.", "t": "`$STRING`", "key$": "createdByUserId", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "A description of the dashboard.", "t": "`$STRING`", "key$": "description", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The ID of the dashboard.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "lastViewedAt": { "a": true, "fo": "date-time", "h": "Last Viewed At", "n": "lastViewedAt", "r": false, "sh": "The date and time when the dashboard was last viewed, in ISO 8601 format.", "t": "`$STRING`", "key$": "lastViewedAt", "index$": 8 }, "lastViewedByUserId": { "a": true, "h": "Last Viewed By User Id", "n": "lastViewedByUserId", "r": false, "sh": "The ID of the user who last viewed the dashboard.", "t": "`$STRING`", "key$": "lastViewedByUserId", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the dashboard.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "ownerUserId": { "a": true, "h": "Owner User Id", "n": "ownerUserId", "r": false, "sh": "The ID of the user who owns the dashboard.", "t": "`$STRING`", "key$": "ownerUserId", "index$": 11 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": true, "t": "`$OBJECT`", "key$": "permissions", "index$": 12 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "Array of objects representing the tags that the dashboard is tagged with.", "t": "`$ARRAY`", "key$": "tags", "index$": 13 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "sh": "The date and time when the dashboard was last updated, in ISO 8601 format.", "t": "`$STRING`", "key$": "updatedAt", "index$": 14 }, "updatedByUserId": { "a": true, "h": "Updated By User Id", "n": "updatedByUserId", "r": false, "sh": "The ID of the user who last updated the dashboard.", "t": "`$STRING`", "key$": "updatedByUserId", "index$": 15 }, "widgets": { "a": true, "h": "Widgets", "n": "widgets", "r": false, "sh": "An array of objects representing the widgets on the dashboard.", "t": "`$ARRAY`", "key$": "widgets", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "clone", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "dashboard_id", "or": "dashboard_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone", "q": { "exist": ["dashboard_id"] }, "r": { "param": { "dashboardId": "dashboard_id" } }, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "var": "dashboard_id" }, { "lit": "clone" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.dashboard"]] }, "key$": "clone", "name__orig": "clone", "Name": "Clone", "name_": "clone", "name-": "clone", "NAME": "CLONE", "index$": 0 }, { "active": true, "entity": "clone", "key$": "BasicCloneFlow", "kind": "basic", "name": "BasicCloneFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "clone_ref01" }, "m": { "dashboard_id": "dashboard01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Clone', { "POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["cloneReports", "name", "permissions"], "type": "object", "properties": { "cloneReports": { "type": "boolean", "description": "Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). Optional, defaults to `true`.", "example": null, "key$": "cloneReports" }, "name": { "type": "string", "description": "The name of the cloned dashboard.", "example": null, "key$": "name" }, "permissions": { "required": ["permissionType"], "type": "object", "properties": { "permissionType": { "description": "The type of permission to apply to the report. Valid values are:\n- PRIVATE: The report is only accessible to its owner and administrators.\n- EVERYONE_VIEW: The report is viewable by everyone.\n- EVERYONE_EDIT: The report is viewable and editable by everyone.\n- SPECIFIC: In addition to the owner, specific users and/or teams are granted VIEW or EDIT permissions. The `specificPermissions` field must also be present.", "enum": ["EVERYONE_EDIT", "EVERYONE_VIEW", "PRIVATE", "SPECIFIC"], "example": null, "type": "string" }, "specificPermissions": { "description": "Array of specific permission grants. Must be present when `permissionType` is set to `SPECIFIC`, ignored otherwise.\n\nDashboards can have one or two specific permission configurations: one for VIEW grants and/or one for EDIT grants. Specific users and/or teams receive either VIEW or EDIT permissions based on which configuration they appear in. A given user or team cannot appear in both VIEW and EDIT configurations.", "example": null, "items": { "example": null, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ReportingPublicSpecificPermissionConfig" }, "type": "array" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardPermissions", "key$": "permissions" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardCloneRequest", "index$": 1 }, "example": null } }, "required": true }, "parameters": [{ "name": "dashboardId", "in": "path", "description": "The ID of the dashboard to clone.", "required": true, "style": "simple", "explode": false, "schema": { "type": "integer", "format": "int64", "example": null }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const clone_ref01_ent = client.Clone();
        let clone_ref01_data = setup.data.new.clone['clone_ref01'];
        clone_ref01_data['dashboard_id'] = setup.idmap['dashboard01'];
        clone_ref01_data = (await clone_ref01_ent.create(clone_ref01_data)).data();
        (0, node_assert_1.default)(null != clone_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/clone/CloneTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotAnalyticsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['clone01', 'clone02', 'clone03', 'dashboard01', 'dashboard02', 'dashboard03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_ANALYTICS_TEST_CLONE_ENTID': idmap,
        'HUBSPOT_ANALYTICS_TEST_LIVE': 'FALSE',
        'HUBSPOT_ANALYTICS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_ANALYTICS_APIKEY': '',
    });
    idmap = env['HUBSPOT_ANALYTICS_TEST_CLONE_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_ANALYTICS_TEST_CLONE_ENTID'];
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
//# sourceMappingURL=CloneEntity.test.js.map