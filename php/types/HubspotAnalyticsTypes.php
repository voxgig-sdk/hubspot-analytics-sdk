<?php
declare(strict_types=1);

// Typed models for the HubspotAnalytics SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Clone entity data model. */
class CloneType
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public bool $cloneReports;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for Clone#create. */
class CloneCreateData
{
    public int $dashboard_id;
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public bool $cloneReports;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Dashboard entity data model. */
class Dashboard
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public array $inputs;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $reportIdsToAdd = null;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for Dashboard#load. */
class DashboardLoadMatch
{
    public int $id;
    public ?bool $archived = null;
    public ?array $property = null;
}

/** Request payload for Dashboard#create. */
class DashboardCreateData
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public array $inputs;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $reportIdsToAdd = null;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for Dashboard#update. */
class DashboardUpdateData
{
    public int $id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $businessUnitId = null;
    public ?string $createdAt = null;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public ?array $inputs = null;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public ?string $name = null;
    public ?string $ownerUserId = null;
    public ?array $permissions = null;
    public ?array $reportIdsToAdd = null;
    public ?array $tags = null;
    public ?string $updatedAt = null;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Report entity data model. */
class Report
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public array $inputs;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
}

/** Request payload for Report#load. */
class ReportLoadMatch
{
    public int $id;
    public ?bool $archived = null;
    public ?array $property = null;
}

/** Request payload for Report#list. */
class ReportListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?array $business_unit_id = null;
    public ?string $created_after = null;
    public ?string $created_before = null;
    public ?string $dashboard_id = null;
    public ?array $ids = null;
    public ?int $limit = null;
    public ?bool $on_dashboard = null;
    public ?bool $only_favorite = null;
    public ?array $owner_user_id = null;
    public ?array $property = null;
    public ?string $q = null;
    public ?array $sort = null;
    public ?array $tag_id = null;
    public ?string $updated_after = null;
    public ?string $updated_before = null;
}

/** Request payload for Report#create. */
class ReportCreateData
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public array $inputs;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
}

/** Request payload for Report#update. */
class ReportUpdateData
{
    public int $id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $businessUnitId = null;
    public ?string $createdAt = null;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public ?array $inputs = null;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public ?string $name = null;
    public ?string $ownerUserId = null;
    public ?array $permissions = null;
    public ?array $tags = null;
    public ?string $updatedAt = null;
    public ?string $updatedByUserId = null;
}

/** ReportingBatchResponsePublicDashboard entity data model. */
class ReportingBatchResponsePublicDashboard
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public string $ownerId;
    public array $permissions;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for ReportingBatchResponsePublicDashboard#create. */
class ReportingBatchResponsePublicDashboardCreateData
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public string $ownerId;
    public array $permissions;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** ReportingBatchResponsePublicReport entity data model. */
class ReportingBatchResponsePublicReport
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public string $ownerId;
    public array $permissions;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for ReportingBatchResponsePublicReport#create. */
class ReportingBatchResponsePublicReportCreateData
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public string $ownerId;
    public array $permissions;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** ReportingCollectionResponseWithTotalPublicDashboard entity data model. */
class ReportingCollectionResponseWithTotalPublicDashboard
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for ReportingCollectionResponseWithTotalPublicDashboard#list. */
class ReportingCollectionResponseWithTotalPublicDashboardListMatch
{
    public ?string $after = null;
    public ?bool $archived = null;
    public ?array $business_unit_id = null;
    public ?string $created_after = null;
    public ?string $created_before = null;
    public ?array $ids = null;
    public ?int $limit = null;
    public ?bool $only_favorite = null;
    public ?array $owner_user_id = null;
    public ?array $property = null;
    public ?string $q = null;
    public ?array $sort = null;
    public ?array $tag_id = null;
    public ?string $updated_after = null;
    public ?string $updated_before = null;
}

/** Widget entity data model. */
class Widget
{
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public array $inputs;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for Widget#create. */
class WidgetCreateData
{
    public int $dashboard_id;
    public bool $archived;
    public ?string $archivedAt = null;
    public string $businessUnitId;
    public string $createdAt;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public string $id;
    public array $inputs;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public string $name;
    public ?string $ownerUserId = null;
    public array $permissions;
    public ?array $tags = null;
    public string $updatedAt;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for Widget#update. */
class WidgetUpdateData
{
    public int $dashboard_id;
    public int $id;
    public ?bool $archived = null;
    public ?string $archivedAt = null;
    public ?string $businessUnitId = null;
    public ?string $createdAt = null;
    public ?string $createdByUserId = null;
    public ?string $description = null;
    public ?array $inputs = null;
    public ?string $lastViewedAt = null;
    public ?string $lastViewedByUserId = null;
    public ?string $name = null;
    public ?string $ownerUserId = null;
    public ?array $permissions = null;
    public ?array $tags = null;
    public ?string $updatedAt = null;
    public ?string $updatedByUserId = null;
    public ?array $widgets = null;
}

/** Request payload for Widget#remove. */
class WidgetRemoveMatch
{
    public int $dashboard_id;
    public int $id;
}

