# HubspotAnalytics Python SDK Reference

Complete API reference for the HubspotAnalytics Python SDK.


## HubspotAnalyticsSDK

### Constructor

```python
from hubspotanalytics_sdk import HubspotAnalyticsSDK

client = HubspotAnalyticsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotAnalyticsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HubspotAnalyticsSDK.test()
```


### Instance Methods

#### `Clone(data=None)`

Create a new `CloneEntity` instance. Pass `None` for no initial data.

#### `Dashboard(data=None)`

Create a new `DashboardEntity` instance. Pass `None` for no initial data.

#### `Report(data=None)`

Create a new `ReportEntity` instance. Pass `None` for no initial data.

#### `ReportingBatchResponsePublicDashboard(data=None)`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance. Pass `None` for no initial data.

#### `ReportingBatchResponsePublicReport(data=None)`

Create a new `ReportingBatchResponsePublicReportEntity` instance. Pass `None` for no initial data.

#### `ReportingCollectionResponseWithTotalPublicDashboard(data=None)`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance. Pass `None` for no initial data.

#### `Widget(data=None)`

Create a new `WidgetEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CloneEntity

```python
clone = client.Clone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `str` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `str` | Yes | The ID of the business unit that the dashboard is associated with. |
| `cloneReports` | `bool` | Yes | Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`). |
| `createdAt` | `str` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `str` | No | The ID of the user who created the dashboard. |
| `description` | `str` | No | A description of the dashboard. |
| `id` | `str` | Yes | The ID of the dashboard. |
| `lastViewedAt` | `str` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `str` | No | The ID of the user who last viewed the dashboard. |
| `name` | `str` | Yes | The name of the dashboard. |
| `ownerUserId` | `str` | No | The ID of the user who owns the dashboard. |
| `permissions` | `dict` | Yes |  |
| `tags` | `list` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `str` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `str` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `list` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Clone().create({
    "dashboard_id": 1,  # int
    "archived": True,  # bool
    "businessUnitId": "example_businessUnitId",  # str
    "cloneReports": True,  # bool
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "permissions": {},  # dict
    "updatedAt": "example_updatedAt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CloneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DashboardEntity

```python
dashboard = client.Dashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `str` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `str` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `str` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `str` | No | The ID of the user who created the dashboard. |
| `description` | `str` | No | A description of the dashboard. |
| `id` | `str` | Yes | The ID of the dashboard. |
| `inputs` | `list` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `str` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `str` | No | The ID of the user who last viewed the dashboard. |
| `name` | `str` | Yes | The name of the dashboard. |
| `ownerUserId` | `str` | No | The ID of the user who owns the dashboard. |
| `permissions` | `dict` | Yes |  |
| `reportIdsToAdd` | `list` | No | Array of IDs of reports that should be added to the dashboard after creation. |
| `tags` | `list` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `str` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `str` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `list` | No | An array of objects representing the widgets on the dashboard. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dashboard().create({
    "archived": True,  # bool
    "businessUnitId": "example_businessUnitId",  # str
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "inputs": [],  # list
    "name": "example_name",  # str
    "permissions": {},  # dict
    "updatedAt": "example_updatedAt",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Dashboard().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Dashboard().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DashboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportEntity

```python
report = client.Report()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the report is archived. |
| `archivedAt` | `str` | No | If the report is archived, the date and time when the report was archived, in ISO 8601 format. |
| `businessUnitId` | `str` | Yes | The ID of the business unit that the report is associated with. |
| `createdAt` | `str` | Yes | The date and time when the report was created, in ISO 8601 format. |
| `createdByUserId` | `str` | No | The ID of the user who created the report. |
| `description` | `str` | No | A description of the report. |
| `id` | `str` | Yes | The ID of the report. |
| `inputs` | `list` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `str` | No | The date and time when the report was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `str` | No | The ID of the user who last viewed the report. |
| `name` | `str` | Yes | The name of the report. |
| `ownerUserId` | `str` | No | The ID of the user who owns the report. |
| `permissions` | `dict` | Yes |  |
| `tags` | `list` | No | Array of objects representing the tags that the report is tagged with. |
| `updatedAt` | `str` | Yes | The date and time when the report was last updated, in ISO 8601 format. |
| `updatedByUserId` | `str` | No | The ID of the user who last updated the report. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Report().create({
    "archived": True,  # bool
    "businessUnitId": "example_businessUnitId",  # str
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "inputs": [],  # list
    "name": "example_name",  # str
    "permissions": {},  # dict
    "updatedAt": "example_updatedAt",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Report().list()
for report in results:
    print(report)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Report().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Report().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportingBatchResponsePublicDashboardEntity

```python
reporting_batch_response_public_dashboard = client.ReportingBatchResponsePublicDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | Yes | Array of report or dashboard IDs. |
| `links` | `dict` | No | A map of link names to associated URIs, providing additional information related to the batch operation. |
| `ownerId` | `str` | Yes | The ID of the user to change the owner to. |
| `permissions` | `dict` | Yes |  |
| `requestedAt` | `str` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | Yes | An array of dashboard objects representing the successful results of the batch operation. |
| `startedAt` | `str` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReportingBatchResponsePublicDashboard().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "ownerId": "example_ownerId",  # str
    "permissions": {},  # dict
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingBatchResponsePublicDashboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportingBatchResponsePublicReportEntity

```python
reporting_batch_response_public_report = client.ReportingBatchResponsePublicReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch operation was completed, in ISO 8601 format. |
| `inputs` | `list` | Yes | Array of report or dashboard IDs. |
| `links` | `dict` | No | A map of link names to associated URIs, providing additional resources or documentation related to the batch operation. |
| `ownerId` | `str` | Yes | The ID of the user to change the owner to. |
| `permissions` | `dict` | Yes |  |
| `requestedAt` | `str` | No | The date and time when the batch operation was requested, in ISO 8601 format. |
| `results` | `list` | Yes | An array of report objects representing the successful results of the batch operation. |
| `startedAt` | `str` | Yes | The date and time when the batch operation started, in ISO 8601 format. |
| `status` | `str` | Yes | The current status of the batch operation. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReportingBatchResponsePublicReport().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "ownerId": "example_ownerId",  # str
    "permissions": {},  # dict
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingBatchResponsePublicReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportingCollectionResponseWithTotalPublicDashboardEntity

```python
reporting_collection_response_with_total_public_dashboard = client.ReportingCollectionResponseWithTotalPublicDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `str` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `str` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `str` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `str` | No | The ID of the user who created the dashboard. |
| `description` | `str` | No | A description of the dashboard. |
| `id` | `str` | Yes | The ID of the dashboard. |
| `lastViewedAt` | `str` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `str` | No | The ID of the user who last viewed the dashboard. |
| `name` | `str` | Yes | The name of the dashboard. |
| `ownerUserId` | `str` | No | The ID of the user who owns the dashboard. |
| `permissions` | `dict` | Yes |  |
| `tags` | `list` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `str` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `str` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `list` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReportingCollectionResponseWithTotalPublicDashboard().list()
for reporting_collection_response_with_total_public_dashboard in results:
    print(reporting_collection_response_with_total_public_dashboard)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingCollectionResponseWithTotalPublicDashboardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WidgetEntity

```python
widget = client.Widget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived` | `bool` | Yes | Whether the dashboard is archived. |
| `archivedAt` | `str` | No | If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. |
| `businessUnitId` | `str` | Yes | The ID of the business unit that the dashboard is associated with. |
| `createdAt` | `str` | Yes | The date and time when the dashboard was created, in ISO 8601 format. |
| `createdByUserId` | `str` | No | The ID of the user who created the dashboard. |
| `description` | `str` | No | A description of the dashboard. |
| `id` | `str` | Yes | The ID of the dashboard. |
| `inputs` | `list` | Yes | Array of report or dashboard IDs. |
| `lastViewedAt` | `str` | No | The date and time when the dashboard was last viewed, in ISO 8601 format. |
| `lastViewedByUserId` | `str` | No | The ID of the user who last viewed the dashboard. |
| `name` | `str` | Yes | The name of the dashboard. |
| `ownerUserId` | `str` | No | The ID of the user who owns the dashboard. |
| `permissions` | `dict` | Yes |  |
| `tags` | `list` | No | Array of objects representing the tags that the dashboard is tagged with. |
| `updatedAt` | `str` | Yes | The date and time when the dashboard was last updated, in ISO 8601 format. |
| `updatedByUserId` | `str` | No | The ID of the user who last updated the dashboard. |
| `widgets` | `list` | No | An array of objects representing the widgets on the dashboard. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Widget().create({
    "dashboard_id": 1,  # int
    "archived": True,  # bool
    "businessUnitId": "example_businessUnitId",  # str
    "createdAt": "example_createdAt",  # str
    "id": "example_id",  # str
    "inputs": [],  # list
    "name": "example_name",  # str
    "permissions": {},  # dict
    "updatedAt": "example_updatedAt",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Widget().remove({"dashboard_id": 1, "id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Widget().update({
    "dashboard_id": 1,
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WidgetEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = HubspotAnalyticsSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

