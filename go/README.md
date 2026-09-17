# HubspotAnalytics Golang SDK



The Golang SDK for the HubspotAnalytics API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Clone(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-analytics-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-analytics-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-analytics-sdk/go=../hubspot-analytics-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-analytics-sdk/go"
)

func main() {
    client := sdk.NewHubspotAnalyticsSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_ANALYTICS_APIKEY"),
    })

    // Create a clone.
    created, err := client.Clone(nil).Create(map[string]any{"dashboard_id": 1, "archived": true, "businessUnitId": "example_businessUnitId", "cloneReports": true, "createdAt": "example_createdAt", "id": "example_id", "name": "example_name", "permissions": map[string]any{}, "updatedAt": "example_updatedAt"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
dashboard, err := client.Dashboard(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    // handle err
    return
}
_ = dashboard
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

dashboard, err := client.Dashboard(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(dashboard) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotAnalyticsSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewHubspotAnalyticsSDK

```go
func NewHubspotAnalyticsSDK(options map[string]any) *HubspotAnalyticsSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotAnalyticsSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotAnalyticsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Clone` | `(data map[string]any) HubspotAnalyticsEntity` | Create a Clone entity instance. |
| `Dashboard` | `(data map[string]any) HubspotAnalyticsEntity` | Create a Dashboard entity instance. |
| `Report` | `(data map[string]any) HubspotAnalyticsEntity` | Create a Report entity instance. |
| `ReportingBatchResponsePublicDashboard` | `(data map[string]any) HubspotAnalyticsEntity` | Create a ReportingBatchResponsePublicDashboard entity instance. |
| `ReportingBatchResponsePublicReport` | `(data map[string]any) HubspotAnalyticsEntity` | Create a ReportingBatchResponsePublicReport entity instance. |
| `ReportingCollectionResponseWithTotalPublicDashboard` | `(data map[string]any) HubspotAnalyticsEntity` | Create a ReportingCollectionResponseWithTotalPublicDashboard entity instance. |
| `Widget` | `(data map[string]any) HubspotAnalyticsEntity` | Create a Widget entity instance. |

### Entity interface (HubspotAnalyticsEntity)

All entities implement the `HubspotAnalyticsEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    clone, err := client.Clone(nil).Create(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // clone is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Clone

| Field | Description |
| --- | --- |
| `"archived"` | Whether the dashboard is archived. |
| `"archivedAt"` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `"businessUnitId"` | The ID of the business unit that the dashboard is associated with. |
| `"cloneReports"` | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `"createdAt"` | The date and time when the dashboard was created, in ISO 8601 format. |
| `"createdByUserId"` | The ID of the user who created the dashboard. |
| `"description"` | A description of the dashboard. |
| `"id"` | The ID of the dashboard. |
| `"lastViewedAt"` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `"lastViewedByUserId"` | The ID of the user who last viewed the dashboard. |
| `"name"` | The name of the dashboard. |
| `"ownerUserId"` | The ID of the user who owns the dashboard. |
| `"permissions"` |  |
| `"tags"` | Array of objects representing the tags that the dashboard is tagged with. |
| `"updatedAt"` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `"updatedByUserId"` | The ID of the user who last updated the dashboard. |
| `"widgets"` | An array of objects representing the widgets on the dashboard. |

Operations: Create.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone`

#### Dashboard

| Field | Description |
| --- | --- |
| `"archived"` | Whether the dashboard is archived. |
| `"archivedAt"` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `"businessUnitId"` | The ID of the business unit that the dashboard is associated with. |
| `"createdAt"` | The date and time when the dashboard was created, in ISO 8601 format. |
| `"createdByUserId"` | The ID of the user who created the dashboard. |
| `"description"` | A description of the dashboard. |
| `"id"` | The ID of the dashboard. |
| `"inputs"` | Array of report or dashboard IDs. |
| `"lastViewedAt"` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `"lastViewedByUserId"` | The ID of the user who last viewed the dashboard. |
| `"name"` | The name of the dashboard. |
| `"ownerUserId"` | The ID of the user who owns the dashboard. |
| `"permissions"` |  |
| `"reportIdsToAdd"` | Array of IDs of reports that should be added to the dashboard after creation. |
| `"tags"` | Array of objects representing the tags that the dashboard is tagged with. |
| `"updatedAt"` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `"updatedByUserId"` | The ID of the user who last updated the dashboard. |
| `"widgets"` | An array of objects representing the widgets on the dashboard. |

Operations: Create, Load, Update.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export`

#### Report

| Field | Description |
| --- | --- |
| `"archived"` | Whether the report is archived. |
| `"archivedAt"` | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `"businessUnitId"` | The ID of the business unit that the report is associated with. |
| `"createdAt"` | The date and time when the report was created, in ISO 8601 format. |
| `"createdByUserId"` | The ID of the user who created the report. |
| `"description"` | A description of the report. |
| `"id"` | The ID of the report. |
| `"inputs"` | Array of report or dashboard IDs. |
| `"lastViewedAt"` | The date and time when the report was last viewed, in ISO 8601 format. |
| `"lastViewedByUserId"` | The ID of the user who last viewed the report. |
| `"name"` | The name of the report. |
| `"ownerUserId"` | The ID of the user who owns the report. |
| `"permissions"` |  |
| `"tags"` | Array of objects representing the tags that the report is tagged with. |
| `"updatedAt"` | The date and time when the report was last updated, in ISO 8601 format. |
| `"updatedByUserId"` | The ID of the user who last updated the report. |

Operations: Create, List, Load, Update.

API path: `/analytics/reporting/2027-03-beta/reports/{reportId}/export`

#### ReportingBatchResponsePublicDashboard

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `"inputs"` | Array of report or dashboard IDs. |
| `"links"` | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `"ownerId"` | The ID of the user to change the owner to. |
| `"permissions"` |  |
| `"requestedAt"` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `"results"` | An array of dashboard objects representing the successful results of the batch operation. |
| `"startedAt"` | The date and time when the batch operation started, in ISO 8601 format. |
| `"status"` | The current status of the batch operation. |

Operations: Create.

API path: `/analytics/reporting/2027-03-beta/dashboards/batch/restore`

#### ReportingBatchResponsePublicReport

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `"inputs"` | Array of report or dashboard IDs. |
| `"links"` | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `"ownerId"` | The ID of the user to change the owner to. |
| `"permissions"` |  |
| `"requestedAt"` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `"results"` | An array of report objects representing the successful results of the batch operation. |
| `"startedAt"` | The date and time when the batch operation started, in ISO 8601 format. |
| `"status"` | The current status of the batch operation. |

Operations: Create.

API path: `/analytics/reporting/2027-03-beta/reports/batch/restore`

#### ReportingCollectionResponseWithTotalPublicDashboard

| Field | Description |
| --- | --- |
| `"archived"` | Whether the dashboard is archived. |
| `"archivedAt"` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `"businessUnitId"` | The ID of the business unit that the dashboard is associated with. |
| `"createdAt"` | The date and time when the dashboard was created, in ISO 8601 format. |
| `"createdByUserId"` | The ID of the user who created the dashboard. |
| `"description"` | A description of the dashboard. |
| `"id"` | The ID of the dashboard. |
| `"lastViewedAt"` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `"lastViewedByUserId"` | The ID of the user who last viewed the dashboard. |
| `"name"` | The name of the dashboard. |
| `"ownerUserId"` | The ID of the user who owns the dashboard. |
| `"permissions"` |  |
| `"tags"` | Array of objects representing the tags that the dashboard is tagged with. |
| `"updatedAt"` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `"updatedByUserId"` | The ID of the user who last updated the dashboard. |
| `"widgets"` | An array of objects representing the widgets on the dashboard. |

Operations: List.

API path: `/analytics/reporting/2027-03-beta/dashboards`

#### Widget

| Field | Description |
| --- | --- |
| `"archived"` | Whether the dashboard is archived. |
| `"archivedAt"` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `"businessUnitId"` | The ID of the business unit that the dashboard is associated with. |
| `"createdAt"` | The date and time when the dashboard was created, in ISO 8601 format. |
| `"createdByUserId"` | The ID of the user who created the dashboard. |
| `"description"` | A description of the dashboard. |
| `"id"` | The ID of the dashboard. |
| `"inputs"` | Array of report or dashboard IDs. |
| `"lastViewedAt"` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `"lastViewedByUserId"` | The ID of the user who last viewed the dashboard. |
| `"name"` | The name of the dashboard. |
| `"ownerUserId"` | The ID of the user who owns the dashboard. |
| `"permissions"` |  |
| `"tags"` | Array of objects representing the tags that the dashboard is tagged with. |
| `"updatedAt"` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `"updatedByUserId"` | The ID of the user who last updated the dashboard. |
| `"widgets"` | An array of objects representing the widgets on the dashboard. |

Operations: Create, Remove, Update.

API path: `/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets`



## Entities


### Clone

Create an instance: `clone := client.Clone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `cloneReports` | `bool` | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `map[string]any` |  |
| `tags` | `[]any` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

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


### Dashboard

Create an instance: `dashboard := client.Dashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `inputs` | `[]any` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `map[string]any` |  |
| `reportIdsToAdd` | `[]any` | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `[]any` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | An array of objects representing the widgets on the dashboard. |

#### Example: Load

```go
dashboard, err := client.Dashboard(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dashboard) // the loaded record
```

#### Example: Create

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


### Report

Create an instance: `report := client.Report(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the report is archived. |
| `archivedAt` | `string` | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the report is associated with. |
| `createdAt` | `string` | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the report. |
| `description` | `string` | A description of the report. |
| `id` | `string` | The ID of the report. |
| `inputs` | `[]any` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the report. |
| `name` | `string` | The name of the report. |
| `ownerUserId` | `string` | The ID of the user who owns the report. |
| `permissions` | `map[string]any` |  |
| `tags` | `[]any` | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | `string` | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the report. |

#### Example: Load

```go
report, err := client.Report(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(report) // the loaded record
```

#### Example: List

```go
reports, err := client.Report(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reports) // the array of records
```

#### Example: Create

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


### ReportingBatchResponsePublicDashboard

Create an instance: `reportingBatchResponsePublicDashboard := client.ReportingBatchResponsePublicDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Array of report or dashboard IDs. |
| `links` | `map[string]any` | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `map[string]any` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

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


### ReportingBatchResponsePublicReport

Create an instance: `reportingBatchResponsePublicReport := client.ReportingBatchResponsePublicReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `[]any` | Array of report or dashboard IDs. |
| `links` | `map[string]any` | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `map[string]any` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `[]any` | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

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


### ReportingCollectionResponseWithTotalPublicDashboard

Create an instance: `reportingCollectionResponseWithTotalPublicDashboard := client.ReportingCollectionResponseWithTotalPublicDashboard(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the dashboard is archived. |
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
| `permissions` | `map[string]any` |  |
| `tags` | `[]any` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | An array of objects representing the widgets on the dashboard. |

#### Example: List

```go
reportingCollectionResponseWithTotalPublicDashboards, err := client.ReportingCollectionResponseWithTotalPublicDashboard(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportingCollectionResponseWithTotalPublicDashboards) // the array of records
```


### Widget

Create an instance: `widget := client.Widget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived` | `bool` | Whether the dashboard is archived. |
| `archivedAt` | `string` | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `string` | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the dashboard. |
| `description` | `string` | A description of the dashboard. |
| `id` | `string` | The ID of the dashboard. |
| `inputs` | `[]any` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `map[string]any` |  |
| `tags` | `[]any` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `[]any` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-analytics-sdk/go/
├── hubspot-analytics.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-analytics-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
dashboard := client.Dashboard(nil)
dashboard.Load(map[string]any{"id": 1}, nil)

// dashboard.Data() now returns the dashboard data from the last load
// dashboard.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
