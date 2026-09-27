

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


describe('ReportingCollectionResponseWithTotalPublicDashboardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_ANALYTICS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_ANALYTICS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAnalyticsSDK.test()
    const ent = testsdk.ReportingCollectionResponseWithTotalPublicDashboard()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_ANALYTICS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'reporting_collection_response_with_total_public_dashboard.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived":{"a":true,"h":"Archived","n":"archived","r":true,"sh":"Whether the dashboard is archived.","t":"`$BOOLEAN`","key$":"archived","index$":0},"archivedAt":{"a":true,"fo":"date-time","h":"Archived At","n":"archivedAt","r":false,"sh":"If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.","t":"`$STRING`","key$":"archivedAt","index$":1},"businessUnitId":{"a":true,"h":"Business Unit Id","n":"businessUnitId","r":true,"sh":"The ID of the business unit that the dashboard is associated with.","t":"`$STRING`","key$":"businessUnitId","index$":2},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"sh":"The date and time when the dashboard was created, in ISO 8601 format.","t":"`$STRING`","key$":"createdAt","index$":3},"createdByUserId":{"a":true,"h":"Created By User Id","n":"createdByUserId","r":false,"sh":"The ID of the user who created the dashboard.","t":"`$STRING`","key$":"createdByUserId","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A description of the dashboard.","t":"`$STRING`","key$":"description","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of the dashboard.","t":"`$STRING`","key$":"id","index$":6},"lastViewedAt":{"a":true,"fo":"date-time","h":"Last Viewed At","n":"lastViewedAt","r":false,"sh":"The date and time when the dashboard was last viewed, in ISO 8601 format.","t":"`$STRING`","key$":"lastViewedAt","index$":7},"lastViewedByUserId":{"a":true,"h":"Last Viewed By User Id","n":"lastViewedByUserId","r":false,"sh":"The ID of the user who last viewed the dashboard.","t":"`$STRING`","key$":"lastViewedByUserId","index$":8},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the dashboard.","t":"`$STRING`","key$":"name","index$":9},"ownerUserId":{"a":true,"h":"Owner User Id","n":"ownerUserId","r":false,"sh":"The ID of the user who owns the dashboard.","t":"`$STRING`","key$":"ownerUserId","index$":10},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":true,"t":"`$OBJECT`","key$":"permissions","index$":11},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Array of objects representing the tags that the dashboard is tagged with.","t":"`$ARRAY`","key$":"tags","index$":12},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"sh":"The date and time when the dashboard was last updated, in ISO 8601 format.","t":"`$STRING`","key$":"updatedAt","index$":13},"updatedByUserId":{"a":true,"h":"Updated By User Id","n":"updatedByUserId","r":false,"sh":"The ID of the user who last updated the dashboard.","t":"`$STRING`","key$":"updatedByUserId","index$":14},"widgets":{"a":true,"h":"Widgets","n":"widgets","r":false,"sh":"An array of objects representing the widgets on the dashboard.","t":"`$ARRAY`","key$":"widgets","index$":15}},"id":{"field":"id","name":"id"},"name":"reporting_collection_response_with_total_public_dashboard","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /analytics/reporting/2027-03-beta/dashboards","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":null,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":null,"k":"query","n":"archived","or":"archived","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":null,"k":"query","n":"business_unit_id","or":"business_unit_id","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":null,"k":"query","n":"created_after","or":"created_after","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":null,"k":"query","n":"created_before","or":"created_before","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":null,"k":"query","n":"ids","or":"ids","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"ex":null,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":null,"k":"query","n":"only_favorite","or":"only_favorite","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":null,"k":"query","n":"owner_user_id","or":"owner_user_id","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"ex":null,"k":"query","n":"property","or":"property","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"ex":null,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":null,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ARRAY`","index$":11},{"a":true,"ex":null,"k":"query","n":"tag_id","or":"tag_id","r":false,"t":"`$ARRAY`","index$":12},{"a":true,"ex":null,"k":"query","n":"updated_after","or":"updated_after","r":false,"t":"`$STRING`","index$":13},{"a":true,"ex":null,"k":"query","n":"updated_before","or":"updated_before","r":false,"t":"`$STRING`","index$":14}]},"k":"http","m":"GET","o":"/analytics/reporting/2027-03-beta/dashboards","q":{"exist":["after","archived","business_unit_id","created_after","created_before","ids","limit","only_favorite","owner_user_id","property","q","sort","tag_id","updated_after","updated_before"]},"r":{},"s":[{"lit":"analytics"},{"lit":"reporting"},{"lit":"2027-03-beta"},{"lit":"dashboards"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"reporting_collection_response_with_total_public_dashboard","name__orig":"reporting_collection_response_with_total_public_dashboard","Name":"ReportingCollectionResponseWithTotalPublicDashboard","name_":"reporting_collection_response_with_total_public_dashboard","name-":"reporting-collection-response-with-total-public-dashboard","NAME":"REPORTING_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_DASHBOARD","index$":5}, {"active":true,"entity":"reporting_collection_response_with_total_public_dashboard","key$":"BasicReportingCollectionResponseWithTotalPublicDashboardFlow","kind":"basic","name":"BasicReportingCollectionResponseWithTotalPublicDashboardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"reporting_collection_response_with_total_public_dashboard_ref01"}}],"index$":0}]}, 'ReportingCollectionResponseWithTotalPublicDashboard', {"GET /analytics/reporting/2027-03-beta/dashboards":{"protocol":"http","parameters":[{"name":"after","in":"query","description":"A cursor token for pagination. Use the value from the previous response's paging.next.after field.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":0},{"name":"archived","in":"query","description":"Whether to retrieve archived dashboards only. Default false.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":1},{"name":"businessUnitIds","in":"query","description":"Filter to dashboards that are a part of the specified business units.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":2},{"name":"createdAfter","in":"query","description":"Filter to dashboards created after the specified date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":3},{"name":"createdBefore","in":"query","description":"Filter to dashboards created before the specified date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":4},{"name":"ids","in":"query","description":"Filter to dashboards with the specified IDs.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":5},{"name":"limit","in":"query","description":"The maximum number of results to display per page. Default 25, max 100.","required":false,"style":"form","explode":true,"schema":{"type":"integer","format":"int32","example":null},"index$":6},{"name":"onlyFavorites","in":"query","description":"Filter to only dashboards that are favorited by the requesting user. Default false.","required":false,"style":"form","explode":true,"schema":{"type":"boolean","example":null},"index$":7},{"name":"ownerUserIds","in":"query","description":"Filter to dashboards owned by the specified users.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":8},{"name":"properties","in":"query","description":"Additionally properties to include in the response. Refer to the response details for available fields.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":9},{"name":"q","in":"query","description":"Filter to dashboards whose name or description contains the search string.","required":false,"style":"form","explode":true,"schema":{"type":"string","example":null},"index$":10},{"name":"sort","in":"query","description":"Sort field and direction. Supported fields are `name`, `updatedAt`, and `lastViewedAt`. Defaults to `-updatedAt`","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":11},{"name":"tagIds","in":"query","description":"Filter to dashboards tagged with the specified tags.","required":false,"style":"form","explode":true,"schema":{"type":"array","example":null,"items":{"type":"string","example":null}},"index$":12},{"name":"updatedAfter","in":"query","description":"Filter to dashboards updated after the specified date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":13},{"name":"updatedBefore","in":"query","description":"Filter to dashboards updated before the specified date and time.","required":false,"style":"form","explode":true,"schema":{"type":"string","format":"date-time","example":null},"index$":14}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let reporting_collection_response_with_total_public_dashboard_ref01_data = Object.values(setup.data.existing.reporting_collection_response_with_total_public_dashboard)[0] as any

    // LIST
    const reporting_collection_response_with_total_public_dashboard_ref01_ent = client.ReportingCollectionResponseWithTotalPublicDashboard()
    const reporting_collection_response_with_total_public_dashboard_ref01_match: any = {}

    const reporting_collection_response_with_total_public_dashboard_ref01_list = (await reporting_collection_response_with_total_public_dashboard_ref01_ent.list(reporting_collection_response_with_total_public_dashboard_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reporting_collection_response_with_total_public_dashboard/ReportingCollectionResponseWithTotalPublicDashboardTestData.json')

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
    ['reporting_collection_response_with_total_public_dashboard01','reporting_collection_response_with_total_public_dashboard02','reporting_collection_response_with_total_public_dashboard03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_ANALYTICS_TEST_REPORTING_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_DASHBOARD_ENTID': idmap,
    'HUBSPOT_ANALYTICS_TEST_LIVE': 'FALSE',
    'HUBSPOT_ANALYTICS_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_ANALYTICS_APIKEY': '',
  })

  idmap = env['HUBSPOT_ANALYTICS_TEST_REPORTING_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_DASHBOARD_ENTID']

  const live = 'TRUE' === env.HUBSPOT_ANALYTICS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_ANALYTICS_TEST_REPORTING_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_DASHBOARD_ENTID']
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
  
