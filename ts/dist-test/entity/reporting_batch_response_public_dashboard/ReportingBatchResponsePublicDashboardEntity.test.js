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
(0, node_test_1.describe)('ReportingBatchResponsePublicDashboardEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_ANALYTICS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_ANALYTICS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotAnalyticsSDK.test();
        const ent = testsdk.ReportingBatchResponsePublicDashboard();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_ANALYTICS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'reporting_batch_response_public_dashboard.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completedAt": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completedAt", "r": true, "sh": "The date and time when the batch operation was completed, in ISO 8601 format.", "t": "`$STRING`", "key$": "completedAt", "index$": 0 }, "inputs": { "a": true, "h": "Inputs", "n": "inputs", "r": true, "sh": "Array of report or dashboard IDs.", "t": "`$ARRAY`", "key$": "inputs", "index$": 1 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "sh": "A map of link names to associated URIs, providing additional information related to the batch operation.", "t": "`$OBJECT`", "key$": "links", "index$": 2 }, "ownerId": { "a": true, "h": "Owner Id", "n": "ownerId", "r": true, "sh": "The ID of the user to change the owner to.", "t": "`$STRING`", "key$": "ownerId", "index$": 3 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": true, "t": "`$OBJECT`", "key$": "permissions", "index$": 4 }, "requestedAt": { "a": true, "fo": "date-time", "h": "Requested At", "n": "requestedAt", "r": false, "sh": "The date and time when the batch operation was requested, in ISO 8601 format.", "t": "`$STRING`", "key$": "requestedAt", "index$": 5 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "sh": "An array of dashboard objects representing the successful results of the batch operation.", "t": "`$ARRAY`", "key$": "results", "index$": 6 }, "startedAt": { "a": true, "fo": "date-time", "h": "Started At", "n": "startedAt", "r": true, "sh": "The date and time when the batch operation started, in ISO 8601 format.", "t": "`$STRING`", "key$": "startedAt", "index$": 7 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of the batch operation.", "t": "`$STRING`", "key$": "status", "index$": 8 } }, "name": "reporting_batch_response_public_dashboard", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/batch/restore", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/batch/restore", "q": {}, "r": {}, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "lit": "batch" }, { "lit": "restore" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/owners/batch/update", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/owners/batch/update", "q": {}, "r": {}, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "lit": "owners" }, { "lit": "batch" }, { "lit": "update" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /analytics/reporting/2027-03-beta/dashboards/permissions/batch/update", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/analytics/reporting/2027-03-beta/dashboards/permissions/batch/update", "q": {}, "r": {}, "s": [{ "lit": "analytics" }, { "lit": "reporting" }, { "lit": "2027-03-beta" }, { "lit": "dashboards" }, { "lit": "permissions" }, { "lit": "batch" }, { "lit": "update" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "reporting_batch_response_public_dashboard", "name__orig": "reporting_batch_response_public_dashboard", "Name": "ReportingBatchResponsePublicDashboard", "name_": "reporting_batch_response_public_dashboard", "name-": "reporting-batch-response-public-dashboard", "NAME": "REPORTING_BATCH_RESPONSE_PUBLIC_DASHBOARD", "index$": 3 }, { "active": true, "entity": "reporting_batch_response_public_dashboard", "key$": "BasicReportingBatchResponsePublicDashboardFlow", "kind": "basic", "name": "BasicReportingBatchResponsePublicDashboardFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "reporting_batch_response_public_dashboard_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ReportingBatchResponsePublicDashboard', { "POST /analytics/reporting/2027-03-beta/dashboards/batch/restore": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs"], "type": "object", "properties": { "inputs": { "type": "array", "description": "Array of report or dashboard IDs.", "example": null, "items": { "type": "string", "example": null }, "key$": "inputs" } }, "example": null, "x-ref": "#/components/schemas/ReportingBatchInputString", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "POST /analytics/reporting/2027-03-beta/dashboards/owners/batch/update": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs", "ownerId"], "type": "object", "properties": { "inputs": { "type": "array", "description": "Array of report or dashboard IDs.", "example": null, "items": { "type": "string", "example": null }, "key$": "inputs" }, "ownerId": { "type": "string", "description": "The ID of the user to change the owner to.", "example": null, "key$": "ownerId" } }, "example": null, "x-ref": "#/components/schemas/ReportingBatchInputWithOwnerId", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] }, "POST /analytics/reporting/2027-03-beta/dashboards/permissions/batch/update": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "required": ["inputs", "permissions"], "type": "object", "properties": { "inputs": { "type": "array", "description": "Array of dashboard IDs.", "example": null, "items": { "type": "string", "example": null }, "key$": "inputs" }, "permissions": { "required": ["permissionType"], "type": "object", "properties": { "permissionType": { "description": "The type of permission to apply to the report. Valid values are:\n- PRIVATE: The report is only accessible to its owner and administrators.\n- EVERYONE_VIEW: The report is viewable by everyone.\n- EVERYONE_EDIT: The report is viewable and editable by everyone.\n- SPECIFIC: In addition to the owner, specific users and/or teams are granted VIEW or EDIT permissions. The `specificPermissions` field must also be present.", "enum": ["EVERYONE_EDIT", "EVERYONE_VIEW", "PRIVATE", "SPECIFIC"], "example": null, "type": "string" }, "specificPermissions": { "description": "Array of specific permission grants. Must be present when `permissionType` is set to `SPECIFIC`, ignored otherwise.\n\nDashboards can have one or two specific permission configurations: one for VIEW grants and/or one for EDIT grants. Specific users and/or teams receive either VIEW or EDIT permissions based on which configuration they appear in. A given user or team cannot appear in both VIEW and EDIT configurations.", "example": null, "items": { "example": null, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ReportingPublicSpecificPermissionConfig" }, "type": "array" } }, "example": null, "x-ref": "#/components/schemas/ReportingPublicDashboardPermissions", "key$": "permissions" } }, "example": null, "x-ref": "#/components/schemas/ReportingBatchInputWithDashboardPermissions", "index$": 1 }, "example": null } }, "required": true }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const reporting_batch_response_public_dashboard_ref01_ent = client.ReportingBatchResponsePublicDashboard();
        let reporting_batch_response_public_dashboard_ref01_data = setup.data.new.reporting_batch_response_public_dashboard['reporting_batch_response_public_dashboard_ref01'];
        reporting_batch_response_public_dashboard_ref01_data = (await reporting_batch_response_public_dashboard_ref01_ent.create(reporting_batch_response_public_dashboard_ref01_data)).data();
        (0, node_assert_1.default)(null != reporting_batch_response_public_dashboard_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reporting_batch_response_public_dashboard/ReportingBatchResponsePublicDashboardTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotAnalyticsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reporting_batch_response_public_dashboard01', 'reporting_batch_response_public_dashboard02', 'reporting_batch_response_public_dashboard03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_DASHBOARD_ENTID': idmap,
        'HUBSPOT_ANALYTICS_TEST_LIVE': 'FALSE',
        'HUBSPOT_ANALYTICS_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_ANALYTICS_APIKEY': '',
    });
    idmap = env['HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_DASHBOARD_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_ANALYTICS_TEST_REPORTING_BATCH_RESPONSE_PUBLIC_DASHBOARD_ENTID'];
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
//# sourceMappingURL=ReportingBatchResponsePublicDashboardEntity.test.js.map