

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotAnalyticsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ReportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_ANALYTICS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_ANALYTICS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAnalyticsSDK.test()
    const ent = testsdk.Report()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_ANALYTICS_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'report.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the report is archived.","t":"`$BOOLEAN`","key$":"archived","index$":0},"archivedAt":{"a":true,"fo":"date-time","h":"Archived At","n":"archivedAt","r":false,"sh":"If the report is archived, the date and time when the report was archived, in ISO 8601 format.","t":"`$STRING`","key$":"archivedAt","index$":1},"businessUnitId":{"a":true,"h":"Business Unit Id","n":"businessUnitId","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"The ID of the business unit that the report is associated with.","t":"`$STRING`","key$":"businessUnitId","index$":2},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date and time when the report was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":3},"createdByUserId":{"a":true,"h":"Created By User Id","n":"createdByUserId","r":false,"sh":"The ID of the user who created the report.","t":"`$STRING`","key$":"createdByUserId","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A description of the report.","t":"`$STRING`","key$":"description","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the report.","t":"`$STRING`","key$":"id","index$":6},"inputs":{"a":true,"h":"Inputs","n":"inputs","r":true,"sh":"Array of report or dashboard IDs.","t":"`$ARRAY`","key$":"inputs","index$":7},"lastViewedAt":{"a":true,"fo":"date-time","h":"Last Viewed At","n":"lastViewedAt","r":false,"sh":"The date and time when the report was last viewed, in ISO 8601 format.","t":"`$STRING`","key$":"lastViewedAt","index$":8},"lastViewedByUserId":{"a":true,"h":"Last Viewed By User Id","n":"lastViewedByUserId","r":false,"sh":"The ID of the user who last viewed the report.","t":"`$STRING`","key$":"lastViewedByUserId","index$":9},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the report.","t":"`$STRING`","key$":"name","index$":10},"ownerUserId":{"a":true,"h":"Owner User Id","n":"ownerUserId","r":false,"sh":"The ID of the user who owns the report.","t":"`$STRING`","key$":"ownerUserId","index$":11},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":true,"t":"`$OBJECT`","key$":"permissions","index$":12},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Array of objects representing the tags that the report is tagged with.","t":"`$ARRAY`","key$":"tags","index$":13},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date and time when the report was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":14},"updatedByUserId":{"a":true,"h":"Updated By User Id","n":"updatedByUserId","r":false,"sh":"The ID of the user who last updated the report.","t":"`$STRING`","key$":"updatedByUserId","index$":15}},"id":{"field":"id","name":"id"},"name":"report","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /analytics/reporting/2027-03-beta/reports/{reportId}/export","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"report_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/analytics/reporting/2027-03-beta/reports/{reportId}/export","q":{"$action":"export","exist":["id"]},"r":{"param":{"reportId":"id"}},"s":[{"lit":"analytics"},{"lit":"reporting"},{"lit":"2027-03-beta"},{"lit":"reports"},{"var":"id"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /analytics/reporting/2027-03-beta/reports/batch/archive","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/analytics/reporting/2027-03-beta/reports/batch/archive","q":{},"r":{},"s":[{"lit":"analytics"},{"lit":"reporting"},{"lit":"2027-03-beta"},{"lit":"reports"},{"lit":"batch"},{"lit":"archive"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /analytics/reporting/2027-03-beta/reports","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":null,"k":"query","n":"business_unit_id","or":"business_unit_id","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":null,"k":"query","n":"created_after","or":"created_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":null,"k":"query","n":"created_before","or":"created_before","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":null,"k":"query","n":"dashboard_id","or":"dashboard_id","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":null,"k":"query","n":"ids","or":"ids","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"ex":null,"k":"query","n":"on_dashboard","or":"on_dashboard","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"ex":null,"k":"query","n":"only_favorite","or":"only_favorite","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"ex":null,"k":"query","n":"owner_user_id","or":"owner_user_id","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$ARRAY`","index$":11},{"a":true,"ex":null,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":12},{"a":true,"ex":null,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":13},{"a":true,"ex":null,"k":"query","n":"tag_id","or":"tag_id","r":false,"t":"`$ARRAY`","index$":14},{"a":true,"ex":null,"k":"query","n":"updated_after","or":"updated_after","r":false,"t":"`$STRING`","index$":15},{"a":true,"ex":null,"k":"query","n":"updated_before","or":"updated_before","r":false,"t":"`$STRING`","index$":16}]},"k":"http","m":"GET","o":"/analytics/reporting/2027-03-beta/reports","q":{"exist":["after","archived","business_unit_id","created_after","created_before","dashboard_id","ids","limit","on_dashboard","only_favorite","owner_user_id","property","q","sort","tag_id","updated_after","updated_before"]},"r":{},"s":[{"lit":"analytics"},{"lit":"reporting"},{"lit":"2027-03-beta"},{"lit":"reports"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /analytics/reporting/2027-03-beta/reports/{reportId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"report_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$ARRAY`","index$":1}]},"k":"http","m":"GET","o":"/analytics/reporting/2027-03-beta/reports/{reportId}","q":{"exist":["archived","id","property"]},"r":{"param":{"reportId":"id"}},"s":[{"lit":"analytics"},{"lit":"reporting"},{"lit":"2027-03-beta"},{"lit":"reports"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /analytics/reporting/2027-03-beta/reports/{reportId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"id","or":"report_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/analytics/reporting/2027-03-beta/reports/{reportId}","q":{"exist":["id"]},"r":{"param":{"reportId":"id"}},"s":[{"lit":"analytics"},{"lit":"reporting"},{"lit":"2027-03-beta"},{"lit":"reports"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"report","name__orig":"report","Name":"Report","name_":"report","name-":"report","NAME":"REPORT","index$":2}, {"active":true,"entity":"report","key$":"BasicReportFlow","kind":"basic","name":"BasicReportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"report_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"report_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"report_ref01","srcdatavar":"report_ref01_data","suffix":"_up0","textfield":"archivedAt"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-report_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"report_ref01","srcdatavar":"report_ref01_data","suffix":"_dt0"},"m":{"id":"report01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-report_ref01"}}],"index$":3}]}, 'Report', {"POST /analytics/reporting/2027-03-beta/reports/{reportId}/export":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["exportType"],"type":"object","properties":{"exportType":{"type":"string","description":"The type of export to perform. Valid values are:\n- `SCREENSHOT`: Screenshot of the report.\n- `CSV`: ZIP with one or more CSV files.\n- `XLS`: ZIP with one or more XLS files.\n- `XLSX: ZIP with one or more XLSX files.","example":null,"enum":["CSV","SCREENSHOT","XLS","XLSX"]},"message":{"type":"string","description":"The message to include with the export. Optional, empty by default.","example":null},"recipientUserIds":{"type":"array","description":"Array of user IDs to send the export to. If absent or empty, the requesting user is used as the sole recipient; otherwise, this exact set of users is used.","example":null,"items":{"type":"string","example":null}},"subject":{"type":"string","description":"The subject line to use for the export. If absent, the name of the requested report will be used. Max length of 100 characters.","example":null}},"example":null,"x-ref":"#/components/schemas/ReportingPublicReportExportRequest"},"example":null}},"required":true},"parameters":[{"name":"reportId","in":"path","description":"The ID of the report to export.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]},"POST /analytics/reporting/2027-03-beta/reports/batch/archive":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"required":["inputs"],"type":"object","properties":{"inputs":{"type":"array","description":"Array of report or dashboard IDs.","example":null,"items":{"type":"string","example":null},"key$":"inputs"}},"example":null,"x-ref":"#/components/schemas/ReportingBatchInputString","index$":1},"example":null}},"required":true},"parameters":[]},"GET /analytics/reporting/2027-03-beta/reports":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"A cursor token for pagination. Use the value from the previous response's paging.next.after field.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to retrieve archived reports only. Default false.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":1},{"name":"businessUnitIds","in":"query","description":"Filter to reports that are a part of the specified business units.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":2},{"name":"createdAfter","in":"query","description":"Filter to reports created after a specific date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":3},{"name":"createdBefore","in":"query","description":"Filter to reports created before a specific date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":4},{"name":"dashboardId","in":"query","description":"Filter to reports on the specified dashboard.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":5},{"name":"ids","in":"query","description":"Filter to reports with the specified IDs.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":6},{"name":"limit","in":"query","description":"The maximum number of results to display per page. Default 25, max 100.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":7},{"name":"onDashboard","in":"query","description":"Filter to reports that are on, or not on, any dashboard. Unset by default.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":8},{"name":"onlyFavorites","in":"query","description":"Filter to only reports that are favorited by the requesting user. Default false.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":9},{"name":"ownerUserIds","in":"query","description":"Filter to reports owned by the specified users.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":10},{"name":"properties","in":"query","description":"Additionally properties to include in the response. Refer to the response details for available fields.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":11},{"name":"q","in":"query","description":"Filter to reports whose name or description contains the search string.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":12},{"name":"sort","in":"query","description":"Sort field and direction. Supported fields are `name`, `updatedAt`, and `lastViewedAt`. Defaults to `-updatedAt`","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":13},{"name":"tagIds","in":"query","description":"Filter to reports tagged with the specified tags.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":14},{"name":"updatedAfter","in":"query","description":"Filter to reports updated after a specific date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":15},{"name":"updatedBefore","in":"query","description":"Filter to reports updated before a specific date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":16}]},"GET /analytics/reporting/2027-03-beta/reports/{reportId}":{"protocol":"http","parameters":[{"name":"reportId","in":"path","description":"The ID of the report to retrieve.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to retrieve an archived dashboard instead of an active one. Default false.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null,"default":false},"index$":1},{"name":"properties","in":"query","description":"Additionally properties to include in the response. Refer to the response details for available fields.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":2}]},"PATCH /analytics/reporting/2027-03-beta/reports/{reportId}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"archived":{"type":"boolean","description":"Whether to archive (`true`) or restore (`false`) the report. Cannot be combined with any other fields.","example":null,"key$":"archived"},"businessUnitId":{"type":"object","properties":{},"description":"The new business unit ID to use for the report. Set to `null` to reset to the account's default business unit. Omit to leave unchanged.","example":"string","key$":"businessUnitId"},"description":{"type":"object","properties":{},"description":"The new description to use for the report. Set to `null` to clear the description. Omit to leave unchanged.","example":"string","key$":"description"},"name":{"type":"string","description":"The new name to use for the report. Omit to leave unchanged.","example":null,"key$":"name"},"ownerUserId":{"type":"string","description":"The ID of the user to change the report's owner to. Omit to leave unchanged.","example":null,"key$":"ownerUserId"},"permissions":{"required":["permissionType"],"type":"object","properties":{"permissionType":{"description":"The type of permission to apply to the report. Valid values are:\n- PRIVATE: The report is only accessible to its owner and administrators.\n- EVERYONE_VIEW: The report is viewable by everyone.\n- EVERYONE_EDIT: The report is viewable and editable by everyone.\n- SPECIFIC: In addition to the owner, specific users and/or teams are granted VIEW or EDIT permissions. The `specificPermissions` field must also be present.","enum":["EVERYONE_EDIT","EVERYONE_VIEW","PRIVATE","SPECIFIC"],"example":null,"type":"string"},"specificPermissions":{"example":null,"properties":{"grants":{},"permissionType":{}},"required":["permissionType"],"type":"object","x-ref":"#/components/schemas/ReportingPublicSpecificPermissionConfig"}},"example":null,"x-ref":"#/components/schemas/ReportingPublicReportPermissions","key$":"permissions"}},"example":null,"x-ref":"#/components/schemas/ReportingPublicReportUpdateRequest","index$":1},"example":null}},"required":true},"parameters":[{"name":"reportId","in":"path","description":"The ID of the report to update.","required":true,"style":"simple","explode":false,"schema":{"type":"integer","format":"int64","example":null},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const report_ref01_ent = client.Report()
    let report_ref01_data = setup.data.new.report['report_ref01']

    report_ref01_data = (await report_ref01_ent.create(report_ref01_data)).data()
    assert(null != report_ref01_data.id)


    // LIST
    const report_ref01_match: any = {}

    const report_ref01_list = (await report_ref01_ent.list(report_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(report_ref01_list, { id: report_ref01_data.id })))


    // UPDATE
    const report_ref01_data_up0: any = {}
    report_ref01_data_up0.id = report_ref01_data.id

    const report_ref01_markdef_up0 = { name: 'archivedAt', value: 'Mark01-report_ref01_' + setup.now }
    ;(report_ref01_data_up0 as any)[report_ref01_markdef_up0.name] = report_ref01_markdef_up0.value

    const report_ref01_resdata_up0 = (await report_ref01_ent.update(report_ref01_data_up0)).data()
    assert(report_ref01_resdata_up0.id === report_ref01_data_up0.id)

    assert((report_ref01_resdata_up0 as any)[report_ref01_markdef_up0.name] === report_ref01_markdef_up0.value)


    // LOAD
    const report_ref01_match_dt0: any = {}
    report_ref01_match_dt0.id = report_ref01_data.id
    const report_ref01_data_dt0 = (await report_ref01_ent.load(report_ref01_match_dt0)).data()
    assert(report_ref01_data_dt0.id === report_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/report/ReportTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotAnalyticsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['report01','report02','report03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_ANALYTICS_TEST_REPORT_ENTID': idmap,
    'HUBSPOT_ANALYTICS_TEST_LIVE': 'FALSE',
    'HUBSPOT_ANALYTICS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_ANALYTICS_APIKEY': '',
  })

  idmap = env['HUBSPOT_ANALYTICS_TEST_REPORT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_ANALYTICS_TEST_REPORT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotAnalyticsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
