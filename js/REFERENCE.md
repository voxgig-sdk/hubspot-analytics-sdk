# HubspotAnalytics JavaScript SDK Reference

Complete API reference for the HubspotAnalytics JavaScript SDK.


## HubspotAnalyticsSDK

### Constructor

```ts
new HubspotAnalyticsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotAnalyticsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotAnalyticsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotAnalyticsSDK` instance in test mode.


### Instance Methods

#### `Clone(data?: object)`

Create a new `Clone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CloneEntity` instance.

#### `Dashboard(data?: object)`

Create a new `Dashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DashboardEntity` instance.

#### `Report(data?: object)`

Create a new `Report` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportEntity` instance.

#### `ReportingBatchResponsePublicDashboard(data?: object)`

Create a new `ReportingBatchResponsePublicDashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingBatchResponsePublicDashboardEntity` instance.

#### `ReportingBatchResponsePublicReport(data?: object)`

Create a new `ReportingBatchResponsePublicReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingBatchResponsePublicReportEntity` instance.

#### `ReportingCollectionResponseWithTotalPublicDashboard(data?: object)`

Create a new `ReportingCollectionResponseWithTotalPublicDashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance.

#### `Widget(data?: object)`

Create a new `Widget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WidgetEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotAnalyticsSDK.test()`.

**Returns:** `HubspotAnalyticsSDK` instance in test mode.


---

## CloneEntity

```ts
const clone = client.Clone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `cloneReports` | `boolean` | Yes | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `Object` | Yes |  |
| `tags` | `Array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Clone().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CloneEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DashboardEntity

```ts
const dashboard = client.Dashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `inputs` | `Array` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `Object` | Yes |  |
| `reportIdsToAdd` | `Array` | No | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `Array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | No | An array of objects representing the widgets on the dashboard. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `archived` | - | - | Yes |
| `archivedAt` | - | - | - |
| `businessUnitId` | - | Yes | Yes |
| `createdAt` | - | - | - |
| `createdByUserId` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `inputs` | - | - | - |
| `lastViewedAt` | - | - | - |
| `lastViewedByUserId` | - | - | - |
| `name` | - | - | Yes |
| `ownerUserId` | - | - | - |
| `permissions` | - | - | - |
| `reportIdsToAdd` | - | - | - |
| `tags` | - | - | - |
| `updatedAt` | - | - | - |
| `updatedByUserId` | - | - | - |
| `widgets` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dashboard().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Dashboard().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Dashboard().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportEntity

```ts
const report = client.Report()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether the report is archived. |
| `archivedAt` | `string` | No | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the report is associated with. |
| `createdAt` | `string` | Yes | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the report. |
| `description` | `string` | No | A description of the report. |
| `id` | `string` | Yes | The ID of the report. |
| `inputs` | `Array` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the report. |
| `name` | `string` | Yes | The name of the report. |
| `ownerUserId` | `string` | No | The ID of the user who owns the report. |
| `permissions` | `Object` | Yes |  |
| `tags` | `Array` | No | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the report. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `archived` | - | - | - | Yes |
| `archivedAt` | - | - | - | - |
| `businessUnitId` | - | - | - | Yes |
| `createdAt` | - | - | - | - |
| `createdByUserId` | - | - | - | - |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `inputs` | - | - | - | - |
| `lastViewedAt` | - | - | - | - |
| `lastViewedByUserId` | - | - | - | - |
| `name` | - | - | - | Yes |
| `ownerUserId` | - | - | - | - |
| `permissions` | - | - | - | - |
| `tags` | - | - | - | - |
| `updatedAt` | - | - | - | - |
| `updatedByUserId` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Report().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Report().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Report().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Report().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingBatchResponsePublicDashboardEntity

```ts
const reporting_batch_response_public_dashboard = client.ReportingBatchResponsePublicDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `Array` | Yes | Array of report or dashboard IDs. |
| `links` | `Object` | No | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `Object` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | Yes | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReportingBatchResponsePublicDashboard().create({
  completedAt: 'example_completedAt',
  inputs: [],
  ownerId: 'example_ownerId',
  permissions: {},
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingBatchResponsePublicReportEntity

```ts
const reporting_batch_response_public_report = client.ReportingBatchResponsePublicReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `Array` | Yes | Array of report or dashboard IDs. |
| `links` | `Object` | No | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `Object` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `Array` | Yes | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReportingBatchResponsePublicReport().create({
  completedAt: 'example_completedAt',
  inputs: [],
  ownerId: 'example_ownerId',
  permissions: {},
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingBatchResponsePublicReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingCollectionResponseWithTotalPublicDashboardEntity

```ts
const reporting_collection_response_with_total_public_dashboard = client.ReportingCollectionResponseWithTotalPublicDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `Object` | Yes |  |
| `tags` | `Array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReportingCollectionResponseWithTotalPublicDashboard().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WidgetEntity

```ts
const widget = client.Widget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `boolean` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `inputs` | `Array` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `Object` | Yes |  |
| `tags` | `Array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `Array` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Widget().create({
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

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Widget().remove({ dashboard_id: 1, id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Widget().update({
  dashboard_id: 1,
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WidgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAnalyticsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new HubspotAnalyticsSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

