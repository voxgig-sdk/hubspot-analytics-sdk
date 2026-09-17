export interface Clone {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    cloneReports: boolean;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface CloneCreateData {
    dashboard_id: number;
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    cloneReports: boolean;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface Dashboard {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    inputs: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    reportIdsToAdd?: any[];
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface DashboardLoadMatch {
    id: number;
    archived?: boolean;
    property?: any[];
}
export interface DashboardCreateData {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    inputs: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    reportIdsToAdd?: any[];
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
    $action?: string;
    [action: string]: any;
}
export interface DashboardUpdateData {
    id: number;
    archived?: boolean;
    archivedAt?: string;
    businessUnitId?: string;
    createdAt?: string;
    createdByUserId?: string;
    description?: string;
    inputs?: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name?: string;
    ownerUserId?: string;
    permissions?: Record<string, any>;
    reportIdsToAdd?: any[];
    tags?: any[];
    updatedAt?: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface Report {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    inputs: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
}
export interface ReportLoadMatch {
    id: number;
    archived?: boolean;
    property?: any[];
}
export interface ReportListMatch {
    after?: string;
    archived?: boolean;
    business_unit_id?: any[];
    created_after?: string;
    created_before?: string;
    dashboard_id?: string;
    ids?: any[];
    limit?: number;
    on_dashboard?: boolean;
    only_favorite?: boolean;
    owner_user_id?: any[];
    property?: any[];
    q?: string;
    sort?: any[];
    tag_id?: any[];
    updated_after?: string;
    updated_before?: string;
}
export interface ReportCreateData {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    inputs: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    $action?: string;
    [action: string]: any;
}
export interface ReportUpdateData {
    id: number;
    archived?: boolean;
    archivedAt?: string;
    businessUnitId?: string;
    createdAt?: string;
    createdByUserId?: string;
    description?: string;
    inputs?: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name?: string;
    ownerUserId?: string;
    permissions?: Record<string, any>;
    tags?: any[];
    updatedAt?: string;
    updatedByUserId?: string;
}
export interface ReportingBatchResponsePublicDashboard {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    ownerId: string;
    permissions: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ReportingBatchResponsePublicDashboardCreateData {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    ownerId: string;
    permissions: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ReportingBatchResponsePublicReport {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    ownerId: string;
    permissions: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ReportingBatchResponsePublicReportCreateData {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    ownerId: string;
    permissions: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface ReportingCollectionResponseWithTotalPublicDashboard {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface ReportingCollectionResponseWithTotalPublicDashboardListMatch {
    after?: string;
    archived?: boolean;
    business_unit_id?: any[];
    created_after?: string;
    created_before?: string;
    ids?: any[];
    limit?: number;
    only_favorite?: boolean;
    owner_user_id?: any[];
    property?: any[];
    q?: string;
    sort?: any[];
    tag_id?: any[];
    updated_after?: string;
    updated_before?: string;
}
export interface Widget {
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    inputs: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface WidgetCreateData {
    dashboard_id: number;
    archived: boolean;
    archivedAt?: string;
    businessUnitId: string;
    createdAt: string;
    createdByUserId?: string;
    description?: string;
    id: string;
    inputs: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name: string;
    ownerUserId?: string;
    permissions: Record<string, any>;
    tags?: any[];
    updatedAt: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface WidgetUpdateData {
    dashboard_id: number;
    id: number;
    archived?: boolean;
    archivedAt?: string;
    businessUnitId?: string;
    createdAt?: string;
    createdByUserId?: string;
    description?: string;
    inputs?: any[];
    lastViewedAt?: string;
    lastViewedByUserId?: string;
    name?: string;
    ownerUserId?: string;
    permissions?: Record<string, any>;
    tags?: any[];
    updatedAt?: string;
    updatedByUserId?: string;
    widgets?: any[];
}
export interface WidgetRemoveMatch {
    dashboard_id: number;
    id: number;
}
