# HubspotAnalytics Lua SDK



The Lua SDK for the HubspotAnalytics API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Clone()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-analytics-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("hubspot-analytics_sdk")

local client = sdk.new({
  apikey = os.getenv("HUBSPOT_ANALYTICS_APIKEY"),
})
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Clone():create({ dashboard_id = 1, archived = true, businessUnitId = "example_businessUnitId", cloneReports = true, createdAt = "example_createdAt", id = "example_id", name = "example_name", permissions = {}, updatedAt = "example_updatedAt" })
if err then error(err) end

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local dashboard, err = client:Dashboard():load({ id = 1 })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Dashboard():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
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
cd lua && busted test/
```


## Reference

### HubspotAnalyticsSDK

```lua
local sdk = require("hubspot-analytics_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotAnalyticsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Clone` | `(data) -> CloneEntity` | Create a Clone entity instance. |
| `Dashboard` | `(data) -> DashboardEntity` | Create a Dashboard entity instance. |
| `Report` | `(data) -> ReportEntity` | Create a Report entity instance. |
| `ReportingBatchResponsePublicDashboard` | `(data) -> ReportingBatchResponsePublicDashboardEntity` | Create a ReportingBatchResponsePublicDashboard entity instance. |
| `ReportingBatchResponsePublicReport` | `(data) -> ReportingBatchResponsePublicReportEntity` | Create a ReportingBatchResponsePublicReport entity instance. |
| `ReportingCollectionResponseWithTotalPublicDashboard` | `(data) -> ReportingCollectionResponseWithTotalPublicDashboardEntity` | Create a ReportingCollectionResponseWithTotalPublicDashboard entity instance. |
| `Widget` | `(data) -> WidgetEntity` | Create a Widget entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local dashboard, err = client:Dashboard():load({ id = "example_id" })
    if err then error(err) end
    -- dashboard is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Operations: Create.

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

Operations: Create, Load, Update.

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

Operations: Create, List, Load, Update.

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

Operations: Create.

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

Operations: Create.

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

Operations: List.

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

Operations: Create, Remove, Update.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets`



## Entities


### Clone

Create an instance: `local clone = client:Clone(nil)`

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
| `permissions` | `table` |  |
| `tags` | `table` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

```lua
local clone, err = client:Clone():create({
  dashboard_id = 1, -- number
  archived = true, -- boolean
  businessUnitId = "example_businessUnitId", -- string
  cloneReports = true, -- boolean
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  permissions = {}, -- table
  updatedAt = "example_updatedAt", -- string
})
```


### Dashboard

Create an instance: `local dashboard = client:Dashboard(nil)`

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
| `inputs` | `table` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `table` |  |
| `reportIdsToAdd` | `table` | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `table` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | An array of objects representing the widgets on the dashboard. |

#### Example: Load

```lua
local dashboard, err = client:Dashboard():load({ id = 1 })
```

#### Example: Create

```lua
local dashboard, err = client:Dashboard():create({
  archived = true, -- boolean
  businessUnitId = "example_businessUnitId", -- string
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  inputs = {}, -- table
  name = "example_name", -- string
  permissions = {}, -- table
  updatedAt = "example_updatedAt", -- string
})
```


### Report

Create an instance: `local report = client:Report(nil)`

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
| `inputs` | `table` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the report. |
| `name` | `string` | The name of the report. |
| `ownerUserId` | `string` | The ID of the user who owns the report. |
| `permissions` | `table` |  |
| `tags` | `table` | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | `string` | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the report. |

#### Example: Load

```lua
local report, err = client:Report():load({ id = 1 })
```

#### Example: List

```lua
local reports, err = client:Report():list()
```

#### Example: Create

```lua
local report, err = client:Report():create({
  archived = true, -- boolean
  businessUnitId = "example_businessUnitId", -- string
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  inputs = {}, -- table
  name = "example_name", -- string
  permissions = {}, -- table
  updatedAt = "example_updatedAt", -- string
})
```


### ReportingBatchResponsePublicDashboard

Create an instance: `local reporting_batch_response_public_dashboard = client:ReportingBatchResponsePublicDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | Array of report or dashboard IDs. |
| `links` | `table` | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `table` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```lua
local reporting_batch_response_public_dashboard, err = client:ReportingBatchResponsePublicDashboard():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  ownerId = "example_ownerId", -- string
  permissions = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### ReportingBatchResponsePublicReport

Create an instance: `local reporting_batch_response_public_report = client:ReportingBatchResponsePublicReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `table` | Array of report or dashboard IDs. |
| `links` | `table` | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `table` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `table` | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```lua
local reporting_batch_response_public_report, err = client:ReportingBatchResponsePublicReport():create({
  completedAt = "example_completedAt", -- string
  inputs = {}, -- table
  ownerId = "example_ownerId", -- string
  permissions = {}, -- table
  results = {}, -- table
  startedAt = "example_startedAt", -- string
  status = "example_status", -- string
})
```


### ReportingCollectionResponseWithTotalPublicDashboard

Create an instance: `local reporting_collection_response_with_total_public_dashboard = client:ReportingCollectionResponseWithTotalPublicDashboard(nil)`

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
| `permissions` | `table` |  |
| `tags` | `table` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | An array of objects representing the widgets on the dashboard. |

#### Example: List

```lua
local reporting_collection_response_with_total_public_dashboards, err = client:ReportingCollectionResponseWithTotalPublicDashboard():list()
```


### Widget

Create an instance: `local widget = client:Widget(nil)`

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
| `inputs` | `table` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `table` |  |
| `tags` | `table` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `table` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

```lua
local widget, err = client:Widget():create({
  dashboard_id = 1, -- number
  archived = true, -- boolean
  businessUnitId = "example_businessUnitId", -- string
  createdAt = "example_createdAt", -- string
  id = "example_id", -- string
  inputs = {}, -- table
  name = "example_name", -- string
  permissions = {}, -- table
  updatedAt = "example_updatedAt", -- string
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── hubspot-analytics_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`hubspot-analytics_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local dashboard = client:Dashboard()
dashboard:load({ id = 1 })

-- dashboard:data_get() now returns the dashboard data from the last load
-- dashboard:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
