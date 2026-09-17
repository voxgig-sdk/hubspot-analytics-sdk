// Typed models for the HubspotAnalytics SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Clone
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {boolean} cloneReports
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} CloneCreateData
 * @property {number} dashboard_id
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {boolean} cloneReports
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} Dashboard
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} inputs
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [reportIdsToAdd]
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} DashboardLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 * @property {Array} [property]
 */

/**
 * @typedef {Object} DashboardCreateData
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} inputs
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [reportIdsToAdd]
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} DashboardUpdateData
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [businessUnitId]
 * @property {string} [createdAt]
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {Array} [inputs]
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} [name]
 * @property {string} [ownerUserId]
 * @property {Object} [permissions]
 * @property {Array} [reportIdsToAdd]
 * @property {Array} [tags]
 * @property {string} [updatedAt]
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} Report
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} inputs
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 */

/**
 * @typedef {Object} ReportLoadMatch
 * @property {number} id
 * @property {boolean} [archived]
 * @property {Array} [property]
 */

/**
 * @typedef {Object} ReportListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {Array} [business_unit_id]
 * @property {string} [created_after]
 * @property {string} [created_before]
 * @property {string} [dashboard_id]
 * @property {Array} [ids]
 * @property {number} [limit]
 * @property {boolean} [on_dashboard]
 * @property {boolean} [only_favorite]
 * @property {Array} [owner_user_id]
 * @property {Array} [property]
 * @property {string} [q]
 * @property {Array} [sort]
 * @property {Array} [tag_id]
 * @property {string} [updated_after]
 * @property {string} [updated_before]
 */

/**
 * @typedef {Object} ReportCreateData
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} inputs
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 */

/**
 * @typedef {Object} ReportUpdateData
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [businessUnitId]
 * @property {string} [createdAt]
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {Array} [inputs]
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} [name]
 * @property {string} [ownerUserId]
 * @property {Object} [permissions]
 * @property {Array} [tags]
 * @property {string} [updatedAt]
 * @property {string} [updatedByUserId]
 */

/**
 * @typedef {Object} ReportingBatchResponsePublicDashboard
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} ownerId
 * @property {Object} permissions
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ReportingBatchResponsePublicDashboardCreateData
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} ownerId
 * @property {Object} permissions
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ReportingBatchResponsePublicReport
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} ownerId
 * @property {Object} permissions
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ReportingBatchResponsePublicReportCreateData
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} ownerId
 * @property {Object} permissions
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} ReportingCollectionResponseWithTotalPublicDashboard
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} ReportingCollectionResponseWithTotalPublicDashboardListMatch
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {Array} [business_unit_id]
 * @property {string} [created_after]
 * @property {string} [created_before]
 * @property {Array} [ids]
 * @property {number} [limit]
 * @property {boolean} [only_favorite]
 * @property {Array} [owner_user_id]
 * @property {Array} [property]
 * @property {string} [q]
 * @property {Array} [sort]
 * @property {Array} [tag_id]
 * @property {string} [updated_after]
 * @property {string} [updated_before]
 */

/**
 * @typedef {Object} Widget
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} inputs
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} WidgetCreateData
 * @property {number} dashboard_id
 * @property {boolean} archived
 * @property {string} [archivedAt]
 * @property {string} businessUnitId
 * @property {string} createdAt
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {string} id
 * @property {Array} inputs
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} name
 * @property {string} [ownerUserId]
 * @property {Object} permissions
 * @property {Array} [tags]
 * @property {string} updatedAt
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} WidgetUpdateData
 * @property {number} dashboard_id
 * @property {number} id
 * @property {boolean} [archived]
 * @property {string} [archivedAt]
 * @property {string} [businessUnitId]
 * @property {string} [createdAt]
 * @property {string} [createdByUserId]
 * @property {string} [description]
 * @property {Array} [inputs]
 * @property {string} [lastViewedAt]
 * @property {string} [lastViewedByUserId]
 * @property {string} [name]
 * @property {string} [ownerUserId]
 * @property {Object} [permissions]
 * @property {Array} [tags]
 * @property {string} [updatedAt]
 * @property {string} [updatedByUserId]
 * @property {Array} [widgets]
 */

/**
 * @typedef {Object} WidgetRemoveMatch
 * @property {number} dashboard_id
 * @property {number} id
 */

