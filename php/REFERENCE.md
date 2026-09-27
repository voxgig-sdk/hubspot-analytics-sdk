# HubspotAnalytics PHP SDK Reference

Complete API reference for the HubspotAnalytics PHP SDK.


## HubspotAnalyticsSDK

### Constructor

```php
require_once __DIR__ . '/hubspotanalytics_sdk.php';

$client = new HubspotAnalyticsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotAnalyticsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotAnalyticsSDK::test();
```


### Instance Methods

#### `Clone($data = null)`

Create a new `CloneEntity` instance. Pass `null` for no initial data.

#### `Dashboard($data = null)`

Create a new `DashboardEntity` instance. Pass `null` for no initial data.

#### `Report($data = null)`

Create a new `ReportEntity` instance. Pass `null` for no initial data.

#### `ReportingBatchResponsePublicDashboard($data = null)`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance. Pass `null` for no initial data.

#### `ReportingBatchResponsePublicReport($data = null)`

Create a new `ReportingBatchResponsePublicReportEntity` instance. Pass `null` for no initial data.

#### `ReportingCollectionResponseWithTotalPublicDashboard($data = null)`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance. Pass `null` for no initial data.

#### `Widget($data = null)`

Create a new `WidgetEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotAnalyticsUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CloneEntity

```php
$clone = $client->Clone();
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
| `permissions` | `array` | Yes |  |
| `tags` | `array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Clone()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CloneEntity`

Create a new `CloneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DashboardEntity

```php
$dashboard = $client->Dashboard();
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
| `inputs` | `array` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `array` | Yes |  |
| `reportIdsToAdd` | `array` | No | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | No | An array of objects representing the widgets on the dashboard. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dashboard()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dashboard()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Dashboard()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DashboardEntity`

Create a new `DashboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportEntity

```php
$report = $client->Report();
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
| `inputs` | `array` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the report. |
| `name` | `string` | Yes | The name of the report. |
| `ownerUserId` | `string` | No | The ID of the user who owns the report. |
| `permissions` | `array` | Yes |  |
| `tags` | `array` | No | Array of objects representing the tags that the report is tagged with. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Report()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Report()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Report()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Report()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportEntity`

Create a new `ReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportingBatchResponsePublicDashboardEntity

```php
$reporting_batch_response_public_dashboard = $client->ReportingBatchResponsePublicDashboard();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Yes | Array of report or dashboard IDs. |
| `links` | `array` | No | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `array` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | Yes | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReportingBatchResponsePublicDashboard()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "ownerId" => null, // string
  "permissions" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportingBatchResponsePublicDashboardEntity`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportingBatchResponsePublicReportEntity

```php
$reporting_batch_response_public_report = $client->ReportingBatchResponsePublicReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `array` | Yes | Array of report or dashboard IDs. |
| `links` | `array` | No | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `string` | Yes | The ID of the user to change the owner to. |
| `permissions` | `array` | Yes |  |
| `requestedAt` | `string` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `array` | Yes | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `string` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `string` | Yes | The current status of the batch operation. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReportingBatchResponsePublicReport()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "ownerId" => null, // string
  "permissions" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportingBatchResponsePublicReportEntity`

Create a new `ReportingBatchResponsePublicReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReportingCollectionResponseWithTotalPublicDashboardEntity

```php
$reporting_collection_response_with_total_public_dashboard = $client->ReportingCollectionResponseWithTotalPublicDashboard();
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
| `permissions` | `array` | Yes |  |
| `tags` | `array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReportingCollectionResponseWithTotalPublicDashboard()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReportingCollectionResponseWithTotalPublicDashboardEntity`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WidgetEntity

```php
$widget = $client->Widget();
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
| `inputs` | `array` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `string` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `string` | No | The ID of the user who last viewed the dashboard. |
| `name` | `string` | Yes | The name of the dashboard. |
| `ownerUserId` | `string` | No | The ID of the user who owns the dashboard. |
| `permissions` | `array` | Yes |  |
| `tags` | `array` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `string` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `string` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `array` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Widget()->create([
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

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Widget()->remove(["dashboard_id" => 1, "id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Widget()->update([
  "dashboard_id" => 1,
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WidgetEntity`

Create a new `WidgetEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new HubspotAnalyticsSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

