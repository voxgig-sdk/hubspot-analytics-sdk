# HubspotAnalytics PHP SDK



The PHP SDK for the HubspotAnalytics API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Clone()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-analytics-sdk/releases](https://github.com/voxgig-sdk/hubspot-analytics-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'hubspotanalytics_sdk.php';

$client = new HubspotAnalyticsSDK([
    "apikey" => getenv("HUBSPOT_ANALYTICS_APIKEY"),
]);
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Clone record.
$created = $client->Clone()->create(["dashboard_id" => 1, "archived" => true, "businessUnitId" => "example_businessUnitId", "cloneReports" => true, "createdAt" => "example_createdAt", "id" => "example_id", "name" => "example_name", "permissions" => [], "updatedAt" => "example_updatedAt"]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $dashboard = $client->Dashboard()->load(["id" => 1]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = HubspotAnalyticsSDK::test([
    "entity" => ["dashboard" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$dashboard = $client->Dashboard()->load(["id" => "test01"]);
print_r($dashboard->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new HubspotAnalyticsSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_ANALYTICS_TEST_LIVE=TRUE
HUBSPOT_ANALYTICS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### HubspotAnalyticsSDK

```php
require_once 'hubspotanalytics_sdk.php';
$client = new HubspotAnalyticsSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = HubspotAnalyticsSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### HubspotAnalyticsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Clone` | `($data): CloneEntity` | Create a Clone entity instance. |
| `Dashboard` | `($data): DashboardEntity` | Create a Dashboard entity instance. |
| `Report` | `($data): ReportEntity` | Create a Report entity instance. |
| `ReportingBatchResponsePublicDashboard` | `($data): ReportingBatchResponsePublicDashboardEntity` | Create a ReportingBatchResponsePublicDashboard entity instance. |
| `ReportingBatchResponsePublicReport` | `($data): ReportingBatchResponsePublicReportEntity` | Create a ReportingBatchResponsePublicReport entity instance. |
| `ReportingCollectionResponseWithTotalPublicDashboard` | `($data): ReportingCollectionResponseWithTotalPublicDashboardEntity` | Create a ReportingCollectionResponseWithTotalPublicDashboard entity instance. |
| `Widget` | `($data): WidgetEntity` | Create a Widget entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$clone = $client->Clone();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

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
| `permissions` | `array` |  |
| `tags` | `array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

```php
$clone = $client->Clone()->create([
    "dashboard_id" => null, // int
    "archived" => null, // bool
    "businessUnitId" => null, // string
    "cloneReports" => null, // bool
    "createdAt" => null, // string
    "id" => null, // string
    "name" => null, // string
    "permissions" => null, // array
    "updatedAt" => null, // string
]);
```


### Dashboard

Create an instance: `$dashboard = $client->Dashboard();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

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
| `inputs` | `array` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `array` |  |
| `reportIdsToAdd` | `array` | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | An array of objects representing the widgets on the dashboard. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Dashboard record (throws on error).
$dashboard = $client->Dashboard()->load(["id" => 1]);
```

#### Example: Create

```php
$dashboard = $client->Dashboard()->create([
    "archived" => null, // bool
    "businessUnitId" => null, // string
    "createdAt" => null, // string
    "id" => null, // string
    "inputs" => null, // array
    "name" => null, // string
    "permissions" => null, // array
    "updatedAt" => null, // string
]);
```


### Report

Create an instance: `$report = $client->Report();`

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
| `archived` | `bool` | Whether the report is archived. |
| `archivedAt` | `string` | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | `string` | The ID of the business unit that the report is associated with. |
| `createdAt` | `string` | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | `string` | The ID of the user who created the report. |
| `description` | `string` | A description of the report. |
| `id` | `string` | The ID of the report. |
| `inputs` | `array` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the report. |
| `name` | `string` | The name of the report. |
| `ownerUserId` | `string` | The ID of the user who owns the report. |
| `permissions` | `array` |  |
| `tags` | `array` | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | `string` | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the report. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Report record (throws on error).
$report = $client->Report()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Report records (throws on error).
$reports = $client->Report()->list();
```

#### Example: Create

```php
$report = $client->Report()->create([
    "archived" => null, // bool
    "businessUnitId" => null, // string
    "createdAt" => null, // string
    "id" => null, // string
    "inputs" => null, // array
    "name" => null, // string
    "permissions" => null, // array
    "updatedAt" => null, // string
]);
```


### ReportingBatchResponsePublicDashboard

Create an instance: `$reporting_batch_response_public_dashboard = $client->ReportingBatchResponsePublicDashboard();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Array of report or dashboard IDs. |
| `links` | `array` | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `array` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```php
$reporting_batch_response_public_dashboard = $client->ReportingBatchResponsePublicDashboard()->create([
    "completedAt" => null, // string
    "inputs" => null, // array
    "ownerId" => null, // string
    "permissions" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### ReportingBatchResponsePublicReport

Create an instance: `$reporting_batch_response_public_report = $client->ReportingBatchResponsePublicReport();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Array of report or dashboard IDs. |
| `links` | `array` | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | The ID of the user to change the owner to. |
| `permissions` | `array` |  |
| `requestedAt` | `string` | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | The current status of the batch operation. |

#### Example: Create

```php
$reporting_batch_response_public_report = $client->ReportingBatchResponsePublicReport()->create([
    "completedAt" => null, // string
    "inputs" => null, // array
    "ownerId" => null, // string
    "permissions" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### ReportingCollectionResponseWithTotalPublicDashboard

Create an instance: `$reporting_collection_response_with_total_public_dashboard = $client->ReportingCollectionResponseWithTotalPublicDashboard();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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
| `permissions` | `array` |  |
| `tags` | `array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | An array of objects representing the widgets on the dashboard. |

#### Example: List

```php
// list() returns an array of ReportingCollectionResponseWithTotalPublicDashboard records (throws on error).
$reporting_collection_response_with_total_public_dashboards = $client->ReportingCollectionResponseWithTotalPublicDashboard()->list();
```


### Widget

Create an instance: `$widget = $client->Widget();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

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
| `inputs` | `array` | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | The ID of the user who last viewed the dashboard. |
| `name` | `string` | The name of the dashboard. |
| `ownerUserId` | `string` | The ID of the user who owns the dashboard. |
| `permissions` | `array` |  |
| `tags` | `array` | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | An array of objects representing the widgets on the dashboard. |

#### Example: Create

```php
$widget = $client->Widget()->create([
    "dashboard_id" => null, // int
    "archived" => null, // bool
    "businessUnitId" => null, // string
    "createdAt" => null, // string
    "id" => null, // string
    "inputs" => null, // array
    "name" => null, // string
    "permissions" => null, // array
    "updatedAt" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
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

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── hubspotanalytics_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`hubspotanalytics_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$dashboard = $client->Dashboard();
$dashboard->load(["id" => 1]);

// $dashboard->data_get() now returns the dashboard data from the last load
// $dashboard->match_get() returns the last match criteria
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
