# HubspotAnalytics Lua SDK Reference

Complete API reference for the HubspotAnalytics Lua SDK.


## HubspotAnalyticsSDK

### Constructor

```lua
local sdk = require("hubspot-analytics_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Clone(data)`

Create a new `Clone` entity instance. Pass `nil` for no initial data.

#### `Dashboard(data)`

Create a new `Dashboard` entity instance. Pass `nil` for no initial data.

#### `Report(data)`

Create a new `Report` entity instance. Pass `nil` for no initial data.

#### `ReportingBatchResponsePublicDashboard(data)`

Create a new `ReportingBatchResponsePublicDashboard` entity instance. Pass `nil` for no initial data.

#### `ReportingBatchResponsePublicReport(data)`

Create a new `ReportingBatchResponsePublicReport` entity instance. Pass `nil` for no initial data.

#### `ReportingCollectionResponseWithTotalPublicDashboard(data)`

Create a new `ReportingCollectionResponseWithTotalPublicDashboard` entity instance. Pass `nil` for no initial data.

#### `Widget(data)`

Create a new `Widget` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CloneEntity

```lua
local clone = client:Clone(nil)
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
| `permissions` | `table` | Yes |  |
| `tags` | `table` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Clone():create({
  dashboard_id = --[[ number ]],
  archived = --[[ boolean ]],
  businessUnitId = --[[ string ]],
  cloneReports = --[[ boolean ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  permissions = --[[ table ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DashboardEntity

```lua
local dashboard = client:Dashboard(nil)
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
| `inputs` | `table` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `table` | Yes |  |
| `reportIdsToAdd` | `table` | No | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `table` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | No | An array of objects representing the widgets on the dashboard. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dashboard():create({
  archived = --[[ boolean ]],
  businessUnitId = --[[ string ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  inputs = --[[ table ]],
  name = --[[ string ]],
  permissions = --[[ table ]],
  updatedAt = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dashboard():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Dashboard():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DashboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportEntity

```lua
local report = client:Report(nil)
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
| `inputs` | `table` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the report. |
| `name` | `string` | Yes | The name of the report. |
| `ownerUserId` | `string` | No | The ID of the user who owns the report. |
| `permissions` | `table` | Yes |  |
| `tags` | `table` | No | Array of objects representing the tags that the report is tagged with. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Report():create({
  archived = --[[ boolean ]],
  businessUnitId = --[[ string ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  inputs = --[[ table ]],
  name = --[[ string ]],
  permissions = --[[ table ]],
  updatedAt = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Report():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Report():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Report():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportingBatchResponsePublicDashboardEntity

```lua
local reporting_batch_response_public_dashboard = client:ReportingBatchResponsePublicDashboard(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | Yes | Array of report or dashboard IDs. |
| `links` | `table` | No | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `table` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | Yes | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReportingBatchResponsePublicDashboard():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  ownerId = --[[ string ]],
  permissions = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportingBatchResponsePublicReportEntity

```lua
local reporting_batch_response_public_report = client:ReportingBatchResponsePublicReport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | Yes | Array of report or dashboard IDs. |
| `links` | `table` | No | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `table` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | Yes | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReportingBatchResponsePublicReport():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  ownerId = --[[ string ]],
  permissions = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingBatchResponsePublicReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportingCollectionResponseWithTotalPublicDashboardEntity

```lua
local reporting_collection_response_with_total_public_dashboard = client:ReportingCollectionResponseWithTotalPublicDashboard(nil)
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
| `permissions` | `table` | Yes |  |
| `tags` | `table` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReportingCollectionResponseWithTotalPublicDashboard():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WidgetEntity

```lua
local widget = client:Widget(nil)
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
| `inputs` | `table` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `table` | Yes |  |
| `tags` | `table` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Widget():create({
  dashboard_id = --[[ number ]],
  archived = --[[ boolean ]],
  businessUnitId = --[[ string ]],
  createdAt = --[[ string ]],
  id = --[[ string ]],
  inputs = --[[ table ]],
  name = --[[ string ]],
  permissions = --[[ table ]],
  updatedAt = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Widget():remove({ dashboard_id = 1, id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Widget():update({
  dashboard_id = 1,
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WidgetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
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

Debug capture.

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

Idempotency.

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

Metrics.

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

Paging.

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

Rate limiting.

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

Retry.

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

Test transport.

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

Timeout.

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

