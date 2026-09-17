# HubspotAnalytics JavaScript SDK



The JavaScript SDK for the HubspotAnalytics API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Clone()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install hubspot-analytics
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { HubspotAnalyticsSDK } = require('@voxgig-sdk/hubspot-analytics-js')

const client = new HubspotAnalyticsSDK({
  apikey: process.env.HUBSPOT_ANALYTICS_APIKEY,
})
```

### Create a Clone

```js
const created = await client.Clone().create({
  dashboard_id: 1,
  archived: true,
  businessUnitId: 'example_businessUnitId',
  cloneReports: true,
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  permissions: {},
  updatedAt: 'example_updatedAt',
})
console.log(created)
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const dashboard = await client.Dashboard().load({ id: 1 })
  console.log(dashboard)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = HubspotAnalyticsSDK.test()

const dashboard = await client.Dashboard().load({ id: 1 })
// dashboard is the entity, populated with mock response data
// — call dashboard.data() for the record itself
console.log(dashboard)
```

You can also use the instance method:

```js
const client = new HubspotAnalyticsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.Dashboard()

// First call runs the operation and stores its result
await entity.load({ id: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new HubspotAnalyticsSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_ANALYTICS_TEST_LIVE=TRUE
HUBSPOT_ANALYTICS_APIKEY=<your-key>
```

Then run:

```bash
cd js && npm test
```


## Reference

### HubspotAnalyticsSDK

#### Constructor

```js
new HubspotAnalyticsSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Clone(data?)` | `CloneEntity` | Create a Clone entity instance. |
| `Dashboard(data?)` | `DashboardEntity` | Create a Dashboard entity instance. |
| `Report(data?)` | `ReportEntity` | Create a Report entity instance. |
| `ReportingBatchResponsePublicDashboard(data?)` | `ReportingBatchResponsePublicDashboardEntity` | Create a ReportingBatchResponsePublicDashboard entity instance. |
| `ReportingBatchResponsePublicReport(data?)` | `ReportingBatchResponsePublicReportEntity` | Create a ReportingBatchResponsePublicReport entity instance. |
| `ReportingCollectionResponseWithTotalPublicDashboard(data?)` | `ReportingCollectionResponseWithTotalPublicDashboardEntity` | Create a ReportingCollectionResponseWithTotalPublicDashboard entity instance. |
| `Widget(data?)` | `WidgetEntity` | Create a Widget entity instance. |
| `tester(testopts?, sdkopts?)` | `HubspotAnalyticsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `HubspotAnalyticsSDK.test(testopts?, sdkopts?)` | `HubspotAnalyticsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): HubspotAnalyticsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### Clone

| Field | Description |
| --- | --- |
| `archived` | Whether the dashboard is archived. |
| `archivedAt` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | The ID of the business unit that the dashboard is associated with. |
| `cloneReports` | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `createdAt` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | The ID of the user who created the dashboard. |
| `description` | A description of the dashboard. |
| `id` | The ID of the dashboard. |
| `lastViewedAt` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | The ID of the user who last viewed the dashboard. |
| `name` | The name of the dashboard. |
| `ownerUserId` | The ID of the user who owns the dashboard. |
| `permissions` |  |
| `tags` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | The ID of the user who last updated the dashboard. |
| `widgets` | An array of objects representing the widgets on the dashboard. |

Operations: create.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone`

#### Dashboard

| Field | Description |
| --- | --- |
| `archived` | Whether the dashboard is archived. |
| `archivedAt` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | The ID of the user who created the dashboard. |
| `description` | A description of the dashboard. |
| `id` | The ID of the dashboard. |
| `inputs` | Array of report or dashboard IDs. |
| `lastViewedAt` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | The ID of the user who last viewed the dashboard. |
| `name` | The name of the dashboard. |
| `ownerUserId` | The ID of the user who owns the dashboard. |
| `permissions` |  |
| `reportIdsToAdd` | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | The ID of the user who last updated the dashboard. |
| `widgets` | An array of objects representing the widgets on the dashboard. |

Operations: create, load, update.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export`

#### Report

| Field | Description |
| --- | --- |
| `archived` | Whether the report is archived. |
| `archivedAt` | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | The ID of the business unit that the report is associated with. |
| `createdAt` | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | The ID of the user who created the report. |
| `description` | A description of the report. |
| `id` | The ID of the report. |
| `inputs` | Array of report or dashboard IDs. |
| `lastViewedAt` | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | The ID of the user who last viewed the report. |
| `name` | The name of the report. |
| `ownerUserId` | The ID of the user who owns the report. |
| `permissions` |  |
| `tags` | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | The ID of the user who last updated the report. |

Operations: create, list, load, update.

API path: `/analytics/reporting/2027-03-beta/reports/{reportId}/export`

#### ReportingBatchResponsePublicDashboard

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | Array of report or dashboard IDs. |
| `links` | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | The ID of the user to change the owner to. |
| `permissions` |  |
| `requestedAt` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | The current status of the batch operation. |

Operations: create.

API path: `/analytics/reporting/2027-03-beta/dashboards/batch/restore`

#### ReportingBatchResponsePublicReport

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | Array of report or dashboard IDs. |
| `links` | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | The ID of the user to change the owner to. |
| `permissions` |  |
| `requestedAt` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | The current status of the batch operation. |

Operations: create.

API path: `/analytics/reporting/2027-03-beta/reports/batch/restore`

#### ReportingCollectionResponseWithTotalPublicDashboard

| Field | Description |
| --- | --- |
| `archived` | Whether the dashboard is archived. |
| `archivedAt` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | The ID of the user who created the dashboard. |
| `description` | A description of the dashboard. |
| `id` | The ID of the dashboard. |
| `lastViewedAt` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | The ID of the user who last viewed the dashboard. |
| `name` | The name of the dashboard. |
| `ownerUserId` | The ID of the user who owns the dashboard. |
| `permissions` |  |
| `tags` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | The ID of the user who last updated the dashboard. |
| `widgets` | An array of objects representing the widgets on the dashboard. |

Operations: list.

API path: `/analytics/reporting/2027-03-beta/dashboards`

#### Widget

| Field | Description |
| --- | --- |
| `archived` | Whether the dashboard is archived. |
| `archivedAt` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | The ID of the user who created the dashboard. |
| `description` | A description of the dashboard. |
| `id` | The ID of the dashboard. |
| `inputs` | Array of report or dashboard IDs. |
| `lastViewedAt` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | The ID of the user who last viewed the dashboard. |
| `name` | The name of the dashboard. |
| `ownerUserId` | The ID of the user who owns the dashboard. |
| `permissions` |  |
| `tags` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | The ID of the user who last updated the dashboard. |
| `widgets` | An array of objects representing the widgets on the dashboard. |

Operations: create, remove, update.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets`



## Entities


### Clone

Create an instance: `const clone = client.Clone()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `cloneReports` | `boolean` | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `Object` |  |
| `tags` | `Array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

```ts
const clone = await client.Clone().create({
  dashboard_id: 1,
  archived: true,
  businessUnitId: 'example_businessUnitId',
  cloneReports: true,
  createdAt: 'example_createdAt',
  id: 'example_id',
  name: 'example_name',
  permissions: {},
  updatedAt: 'example_updatedAt',
})
```


### Dashboard

Create an instance: `const dashboard = client.Dashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `inputs` | `Array` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `Object` |  |
| `reportIdsToAdd` | `Array` | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `Array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | An array of objects representing the widgets on the dashboard. |

#### Example: Load

```ts
const dashboard = await client.Dashboard().load({ id: 1 })
```

#### Example: Create

```ts
const dashboard = await client.Dashboard().create({
  archived: true,
  businessUnitId: 'example_businessUnitId',
  createdAt: 'example_createdAt',
  id: 'example_id',
  inputs: [],
  name: 'example_name',
  permissions: {},
  updatedAt: 'example_updatedAt',
})
```


### Report

Create an instance: `const report = client.Report()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the report is archived. |
| `archivedAt` | `string` | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the report is associated with. |
| `createdAt` | `string` | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the report. |
| `description` | `string` | A description of the report. |
| `id` | `string` | The ID of the report. |
| `inputs` | `Array` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the report. |
| `name` | `string` | The name of the report. |
| `ownerUserId` | `string` | The ID of the user who owns the report. |
| `permissions` | `Object` |  |
| `tags` | `Array` | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | `string` | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the report. |

#### Example: Load

```ts
const report = await client.Report().load({ id: 1 })
```

#### Example: List

```ts
const reports = await client.Report().list()
```

#### Example: Create

```ts
const report = await client.Report().create({
  archived: true,
  businessUnitId: 'example_businessUnitId',
  createdAt: 'example_createdAt',
  id: 'example_id',
  inputs: [],
  name: 'example_name',
  permissions: {},
  updatedAt: 'example_updatedAt',
})
```


### ReportingBatchResponsePublicDashboard

Create an instance: `const reporting_batch_response_public_dashboard = client.ReportingBatchResponsePublicDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `Array` | Array of report or dashboard IDs. |
| `links` | `Object` | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `Object` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```ts
const reporting_batch_response_public_dashboard = await client.ReportingBatchResponsePublicDashboard().create({
  completedAt: 'example_completedAt',
  inputs: [],
  ownerId: 'example_ownerId',
  permissions: {},
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### ReportingBatchResponsePublicReport

Create an instance: `const reporting_batch_response_public_report = client.ReportingBatchResponsePublicReport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `Array` | Array of report or dashboard IDs. |
| `links` | `Object` | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `Object` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```ts
const reporting_batch_response_public_report = await client.ReportingBatchResponsePublicReport().create({
  completedAt: 'example_completedAt',
  inputs: [],
  ownerId: 'example_ownerId',
  permissions: {},
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```


### ReportingCollectionResponseWithTotalPublicDashboard

Create an instance: `const reporting_collection_response_with_total_public_dashboard = client.ReportingCollectionResponseWithTotalPublicDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `Object` |  |
| `tags` | `Array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | An array of objects representing the widgets on the dashboard. |

#### Example: List

```ts
const reporting_collection_response_with_total_public_dashboards = await client.ReportingCollectionResponseWithTotalPublicDashboard().list()
```


### Widget

Create an instance: `const widget = client.Widget()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `boolean` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `inputs` | `Array` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `Object` |  |
| `tags` | `Array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

```ts
const widget = await client.Widget().create({
  dashboard_id: 1,
  archived: true,
  businessUnitId: 'example_businessUnitId',
  createdAt: 'example_createdAt',
  id: 'example_id',
  inputs: [],
  name: 'example_name',
  permissions: {},
  updatedAt: 'example_updatedAt',
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
hubspot-analytics/
├── src/
│   ├── HubspotAnalyticsSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { HubspotAnalyticsSDK } = require('@voxgig-sdk/hubspot-analytics-js')
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const dashboard = client.Dashboard()
await dashboard.load({ id: 1 })

// dashboard.data() now returns the dashboard data from the last `load`
// dashboard.match() returns { id: 1 }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
