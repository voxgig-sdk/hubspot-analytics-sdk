# HubspotAnalytics Golang SDK Reference

Complete API reference for the HubspotAnalytics Golang SDK.


## HubspotAnalyticsSDK

### Constructor

```go
func NewHubspotAnalyticsSDK(options map[string]any) *HubspotAnalyticsSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HubspotAnalyticsSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HubspotAnalyticsSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Clone(data map[string]any) HubspotAnalyticsEntity`

Create a new `Clone` entity instance. Pass `nil` for no initial data.

#### `Dashboard(data map[string]any) HubspotAnalyticsEntity`

Create a new `Dashboard` entity instance. Pass `nil` for no initial data.

#### `Report(data map[string]any) HubspotAnalyticsEntity`

Create a new `Report` entity instance. Pass `nil` for no initial data.

#### `ReportingBatchResponsePublicDashboard(data map[string]any) HubspotAnalyticsEntity`

Create a new `ReportingBatchResponsePublicDashboard` entity instance. Pass `nil` for no initial data.

#### `ReportingBatchResponsePublicReport(data map[string]any) HubspotAnalyticsEntity`

Create a new `ReportingBatchResponsePublicReport` entity instance. Pass `nil` for no initial data.

#### `ReportingCollectionResponseWithTotalPublicDashboard(data map[string]any) HubspotAnalyticsEntity`

Create a new `ReportingCollectionResponseWithTotalPublicDashboard` entity instance. Pass `nil` for no initial data.

#### `Widget(data map[string]any) HubspotAnalyticsEntity`

Create a new `Widget` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CloneEntity

```go
clone := client.Clone(nil)
fmt.Println(clone.GetName()) // "clone"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `cloneReports` | `bool` | Yes | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `map[string]any` | Yes |  |
| `tags` | `[]any` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Clone(nil).Create(map[string]any{
    "dashboard_id": 1,
    "archived": true,
    "businessUnitId": "example_businessUnitId",
    "cloneReports": true,
    "createdAt": "example_createdAt",
    "id": "example_id",
    "name": "example_name",
    "permissions": map[string]any{},
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CloneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DashboardEntity

```go
dashboard := client.Dashboard(nil)
fmt.Println(dashboard.GetName()) // "dashboard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `inputs` | `[]any` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `map[string]any` | Yes |  |
| `reportIdsToAdd` | `[]any` | No | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `[]any` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | No | An array of objects representing the widgets on the dashboard. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Dashboard(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Dashboard(nil).Create(map[string]any{
    "archived": true,
    "businessUnitId": "example_businessUnitId",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "inputs": []any{},
    "name": "example_name",
    "permissions": map[string]any{},
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Dashboard(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DashboardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportEntity

```go
report := client.Report(nil)
fmt.Println(report.GetName()) // "report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the report is archived. |
| `archivedAt` | `string` | No | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the report is associated with. |
| `createdAt` | `string` | Yes | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the report. |
| `description` | `string` | No | A description of the report. |
| `id` | `string` | Yes | The ID of the report. |
| `inputs` | `[]any` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the report. |
| `name` | `string` | Yes | The name of the report. |
| `ownerUserId` | `string` | No | The ID of the user who owns the report. |
| `permissions` | `map[string]any` | Yes |  |
| `tags` | `[]any` | No | Array of objects representing the tags that the report is tagged with. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Report(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Report(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Report(nil).Create(map[string]any{
    "archived": true,
    "businessUnitId": "example_businessUnitId",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "inputs": []any{},
    "name": "example_name",
    "permissions": map[string]any{},
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Report(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportingBatchResponsePublicDashboardEntity

```go
reportingBatchResponsePublicDashboard := client.ReportingBatchResponsePublicDashboard(nil)
fmt.Println(reportingBatchResponsePublicDashboard.GetName()) // "reporting_batch_response_public_dashboard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Yes | Array of report or dashboard IDs. |
| `links` | `map[string]any` | No | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `map[string]any` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | Yes | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReportingBatchResponsePublicDashboard(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "ownerId": "example_ownerId",
    "permissions": map[string]any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportingBatchResponsePublicReportEntity

```go
reportingBatchResponsePublicReport := client.ReportingBatchResponsePublicReport(nil)
fmt.Println(reportingBatchResponsePublicReport.GetName()) // "reporting_batch_response_public_report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Yes | Array of report or dashboard IDs. |
| `links` | `map[string]any` | No | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `map[string]any` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | Yes | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReportingBatchResponsePublicReport(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "ownerId": "example_ownerId",
    "permissions": map[string]any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportingBatchResponsePublicReportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportingCollectionResponseWithTotalPublicDashboardEntity

```go
reportingCollectionResponseWithTotalPublicDashboard := client.ReportingCollectionResponseWithTotalPublicDashboard(nil)
fmt.Println(reportingCollectionResponseWithTotalPublicDashboard.GetName()) // "reporting_collection_response_with_total_public_dashboard"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
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
| `permissions` | `map[string]any` | Yes |  |
| `tags` | `[]any` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReportingCollectionResponseWithTotalPublicDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WidgetEntity

```go
widget := client.Widget(nil)
fmt.Println(widget.GetName()) // "widget"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `string` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | No | The ID of the user who created the dashboard. |
| `description` | `string` | No | A description of the dashboard. |
| `id` | `string` | Yes | The ID of the dashboard. |
| `inputs` | `[]any` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `map[string]any` | Yes |  |
| `tags` | `[]any` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Widget(nil).Create(map[string]any{
    "dashboard_id": 1,
    "archived": true,
    "businessUnitId": "example_businessUnitId",
    "createdAt": "example_createdAt",
    "id": "example_id",
    "inputs": []any{},
    "name": "example_name",
    "permissions": map[string]any{},
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Widget(nil).Update(map[string]any{
    "dashboard_id": 1,
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Widget(nil).Remove(map[string]any{"dashboard_id": 1, "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WidgetEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewHubspotAnalyticsSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

