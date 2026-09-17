# Typed models for the HubspotAnalytics SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CloneRequired(TypedDict):
    archived: bool
    businessUnitId: str
    cloneReports: bool
    createdAt: str
    id: str
    name: str
    permissions: dict
    updatedAt: str


class Clone(CloneRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str
    widgets: list


class CloneCreateDataRequired(TypedDict):
    dashboard_id: int
    archived: bool
    businessUnitId: str
    cloneReports: bool
    createdAt: str
    id: str
    name: str
    permissions: dict
    updatedAt: str


class CloneCreateData(CloneCreateDataRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str
    widgets: list


class DashboardRequired(TypedDict):
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    inputs: list
    name: str
    permissions: dict
    updatedAt: str


class Dashboard(DashboardRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    reportIdsToAdd: list
    tags: list
    updatedByUserId: str
    widgets: list


class DashboardLoadMatchRequired(TypedDict):
    id: int


class DashboardLoadMatch(DashboardLoadMatchRequired, total=False):
    archived: bool
    property: list


class DashboardCreateDataRequired(TypedDict):
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    inputs: list
    name: str
    permissions: dict
    updatedAt: str


class DashboardCreateData(DashboardCreateDataRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    reportIdsToAdd: list
    tags: list
    updatedByUserId: str
    widgets: list


class DashboardUpdateDataRequired(TypedDict):
    id: int


class DashboardUpdateData(DashboardUpdateDataRequired, total=False):
    archived: bool
    archivedAt: str
    businessUnitId: str
    createdAt: str
    createdByUserId: str
    description: str
    inputs: list
    lastViewedAt: str
    lastViewedByUserId: str
    name: str
    ownerUserId: str
    permissions: dict
    reportIdsToAdd: list
    tags: list
    updatedAt: str
    updatedByUserId: str
    widgets: list


class ReportRequired(TypedDict):
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    inputs: list
    name: str
    permissions: dict
    updatedAt: str


class Report(ReportRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str


class ReportLoadMatchRequired(TypedDict):
    id: int


class ReportLoadMatch(ReportLoadMatchRequired, total=False):
    archived: bool
    property: list


class ReportListMatch(TypedDict, total=False):
    after: str
    archived: bool
    business_unit_id: list
    created_after: str
    created_before: str
    dashboard_id: str
    ids: list
    limit: int
    on_dashboard: bool
    only_favorite: bool
    owner_user_id: list
    property: list
    q: str
    sort: list
    tag_id: list
    updated_after: str
    updated_before: str


class ReportCreateDataRequired(TypedDict):
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    inputs: list
    name: str
    permissions: dict
    updatedAt: str


class ReportCreateData(ReportCreateDataRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str


class ReportUpdateDataRequired(TypedDict):
    id: int


class ReportUpdateData(ReportUpdateDataRequired, total=False):
    archived: bool
    archivedAt: str
    businessUnitId: str
    createdAt: str
    createdByUserId: str
    description: str
    inputs: list
    lastViewedAt: str
    lastViewedByUserId: str
    name: str
    ownerUserId: str
    permissions: dict
    tags: list
    updatedAt: str
    updatedByUserId: str


class ReportingBatchResponsePublicDashboardRequired(TypedDict):
    completedAt: str
    inputs: list
    ownerId: str
    permissions: dict
    results: list
    startedAt: str
    status: str


class ReportingBatchResponsePublicDashboard(ReportingBatchResponsePublicDashboardRequired, total=False):
    links: dict
    requestedAt: str


class ReportingBatchResponsePublicDashboardCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    ownerId: str
    permissions: dict
    results: list
    startedAt: str
    status: str


class ReportingBatchResponsePublicDashboardCreateData(ReportingBatchResponsePublicDashboardCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class ReportingBatchResponsePublicReportRequired(TypedDict):
    completedAt: str
    inputs: list
    ownerId: str
    permissions: dict
    results: list
    startedAt: str
    status: str


class ReportingBatchResponsePublicReport(ReportingBatchResponsePublicReportRequired, total=False):
    links: dict
    requestedAt: str


class ReportingBatchResponsePublicReportCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    ownerId: str
    permissions: dict
    results: list
    startedAt: str
    status: str


class ReportingBatchResponsePublicReportCreateData(ReportingBatchResponsePublicReportCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class ReportingCollectionResponseWithTotalPublicDashboardRequired(TypedDict):
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    name: str
    permissions: dict
    updatedAt: str


class ReportingCollectionResponseWithTotalPublicDashboard(ReportingCollectionResponseWithTotalPublicDashboardRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str
    widgets: list


class ReportingCollectionResponseWithTotalPublicDashboardListMatch(TypedDict, total=False):
    after: str
    archived: bool
    business_unit_id: list
    created_after: str
    created_before: str
    ids: list
    limit: int
    only_favorite: bool
    owner_user_id: list
    property: list
    q: str
    sort: list
    tag_id: list
    updated_after: str
    updated_before: str


class WidgetRequired(TypedDict):
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    inputs: list
    name: str
    permissions: dict
    updatedAt: str


class Widget(WidgetRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str
    widgets: list


class WidgetCreateDataRequired(TypedDict):
    dashboard_id: int
    archived: bool
    businessUnitId: str
    createdAt: str
    id: str
    inputs: list
    name: str
    permissions: dict
    updatedAt: str


class WidgetCreateData(WidgetCreateDataRequired, total=False):
    archivedAt: str
    createdByUserId: str
    description: str
    lastViewedAt: str
    lastViewedByUserId: str
    ownerUserId: str
    tags: list
    updatedByUserId: str
    widgets: list


class WidgetUpdateDataRequired(TypedDict):
    dashboard_id: int
    id: int


class WidgetUpdateData(WidgetUpdateDataRequired, total=False):
    archived: bool
    archivedAt: str
    businessUnitId: str
    createdAt: str
    createdByUserId: str
    description: str
    inputs: list
    lastViewedAt: str
    lastViewedByUserId: str
    name: str
    ownerUserId: str
    permissions: dict
    tags: list
    updatedAt: str
    updatedByUserId: str
    widgets: list


class WidgetRemoveMatch(TypedDict):
    dashboard_id: int
    id: int
