# HubSpot Analytics API

HubSpot Analytics API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 7 entities and 21 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Clone](docs/api/clone.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `archived`: Whether the dashboard is archived.
- `archivedAt`: If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. Absent if the dashboard is not archived.
- `businessUnitId`: The ID of the business unit that the dashboard is associated with.
- `cloneReports`: Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`).
- `createdAt`: The date and time when the dashboard was created, in ISO 8601 format.

### [Dashboard](docs/api/dashboard.html)

Results: No content; successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `archived`: Whether the dashboard is archived.
- `archivedAt`: If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. Absent if the dashboard is not archived.
- `businessUnitId`: The ID of the business unit that the dashboard is associated with.
- `createdAt`: The date and time when the dashboard was created, in ISO 8601 format.
- `createdByUserId`: The ID of the user who created the dashboard. May be absent.

### [Report](docs/api/report.html)

Results: No content; successful operation.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `archived`: Whether the report is archived.
- `archivedAt`: If the report is archived, the date and time when the report was archived, in ISO 8601 format. Absent if the report is not archived.
- `businessUnitId`: The ID of the business unit that the report is associated with.
- `createdAt`: The date and time when the report was created, in ISO 8601 format.
- `createdByUserId`: The ID of the user who created the report. May be absent.

### [ReportingBatchResponsePublicDashboard](docs/api/reporting_batch_response_public_dashboard.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed, in ISO 8601 format.
- `inputs`: Array of report or dashboard IDs.
- `links`: A map of link names to associated URIs, providing additional information related to the batch operation.
- `ownerId`: The ID of the user to change the owner to.
- `requestedAt`: The date and time when the batch operation was requested, in ISO 8601 format.

### [ReportingBatchResponsePublicReport](docs/api/reporting_batch_response_public_report.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch operation was completed, in ISO 8601 format.
- `inputs`: Array of report or dashboard IDs.
- `links`: A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.
- `ownerId`: The ID of the user to change the owner to.
- `requestedAt`: The date and time when the batch operation was requested, in ISO 8601 format.

### [ReportingCollectionResponseWithTotalPublicDashboard](docs/api/reporting_collection_response_with_total_public_dashboard.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `archived`: Whether the dashboard is archived.
- `archivedAt`: If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. Absent if the dashboard is not archived.
- `businessUnitId`: The ID of the business unit that the dashboard is associated with.
- `createdAt`: The date and time when the dashboard was created, in ISO 8601 format.
- `createdByUserId`: The ID of the user who created the dashboard. May be absent.

### [Widget](docs/api/widget.html)

Results: successful operation.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `archived`: Whether the dashboard is archived.
- `archivedAt`: If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format. Absent if the dashboard is not archived.
- `businessUnitId`: The ID of the business unit that the dashboard is associated with.
- `createdAt`: The date and time when the dashboard was created, in ISO 8601 format.
- `createdByUserId`: The ID of the user who created the dashboard. May be absent.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Clone](docs/api/clone.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone` | Required |
| [Dashboard](docs/api/dashboard.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export` | Required |
| [Dashboard](docs/api/dashboard.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards` | Required |
| [Dashboard](docs/api/dashboard.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/batch/archive` | Required |
| [Dashboard](docs/api/dashboard.html) | `load` | `GET /analytics/reporting/2027-03-beta/dashboards/{dashboardId}` | Required |
| [Dashboard](docs/api/dashboard.html) | `update` | `PATCH /analytics/reporting/2027-03-beta/dashboards/{dashboardId}` | Required |
| [Report](docs/api/report.html) | `create` | `POST /analytics/reporting/2027-03-beta/reports/{reportId}/export` | Required |
| [Report](docs/api/report.html) | `create` | `POST /analytics/reporting/2027-03-beta/reports/batch/archive` | Required |
| [Report](docs/api/report.html) | `list` | `GET /analytics/reporting/2027-03-beta/reports` | Required |
| [Report](docs/api/report.html) | `load` | `GET /analytics/reporting/2027-03-beta/reports/{reportId}` | Required |
| [Report](docs/api/report.html) | `update` | `PATCH /analytics/reporting/2027-03-beta/reports/{reportId}` | Required |
| [ReportingBatchResponsePublicDashboard](docs/api/reporting_batch_response_public_dashboard.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/batch/restore` | Required |
| [ReportingBatchResponsePublicDashboard](docs/api/reporting_batch_response_public_dashboard.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/owners/batch/update` | Required |
| [ReportingBatchResponsePublicDashboard](docs/api/reporting_batch_response_public_dashboard.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/permissions/batch/update` | Required |
| [ReportingBatchResponsePublicReport](docs/api/reporting_batch_response_public_report.html) | `create` | `POST /analytics/reporting/2027-03-beta/reports/batch/restore` | Required |
| [ReportingBatchResponsePublicReport](docs/api/reporting_batch_response_public_report.html) | `create` | `POST /analytics/reporting/2027-03-beta/reports/owners/batch/update` | Required |
| [ReportingBatchResponsePublicReport](docs/api/reporting_batch_response_public_report.html) | `create` | `POST /analytics/reporting/2027-03-beta/reports/permissions/batch/update` | Required |
| [ReportingCollectionResponseWithTotalPublicDashboard](docs/api/reporting_collection_response_with_total_public_dashboard.html) | `list` | `GET /analytics/reporting/2027-03-beta/dashboards` | Required |
| [Widget](docs/api/widget.html) | `create` | `POST /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets` | Required |
| [Widget](docs/api/widget.html) | `remove` | `DELETE /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}` | Required |
| [Widget](docs/api/widget.html) | `update` | `PUT /analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `hapikey` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-analytics_list`: List records for an entity. Supported entities: `report`, `reporting_collection_response_with_total_public_dashboard`.
- `hubspot-analytics_load`: Load one record for an entity. Supported entities: `dashboard`, `report`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

