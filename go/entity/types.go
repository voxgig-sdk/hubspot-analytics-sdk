// Typed models for the HubspotAnalytics SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-analytics-sdk/go/core"
)

// Clone is the typed data model for the clone entity.
type Clone struct {
}

// CloneCreateData is the typed request payload for Clone.CreateTyped.
type CloneCreateData struct {
	DashboardId int `json:"dashboard_id"`
	Archived bool `json:"archived"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId string `json:"businessUnitId"`
	CloneReports bool `json:"cloneReports"`
	CreatedAt string `json:"createdAt"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name string `json:"name"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions map[string]any `json:"permissions"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
	Widgets *[]any `json:"widgets,omitempty"`
}

// Dashboard is the typed data model for the dashboard entity.
type Dashboard struct {
}

// DashboardLoadMatch is the typed request payload for Dashboard.LoadTyped.
type DashboardLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	Property *[]any `json:"property,omitempty"`
}

// DashboardCreateData is the typed request payload for Dashboard.CreateTyped.
type DashboardCreateData struct {
	Archived bool `json:"archived"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId string `json:"businessUnitId"`
	CreatedAt string `json:"createdAt"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Inputs []any `json:"inputs"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name string `json:"name"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions map[string]any `json:"permissions"`
	ReportIdsToAdd *[]any `json:"reportIdsToAdd,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
	Widgets *[]any `json:"widgets,omitempty"`
}

// DashboardUpdateData is the typed request payload for Dashboard.UpdateTyped.
type DashboardUpdateData struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Inputs *[]any `json:"inputs,omitempty"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	ReportIdsToAdd *[]any `json:"reportIdsToAdd,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
	Widgets *[]any `json:"widgets,omitempty"`
}

// Report is the typed data model for the report entity.
type Report struct {
}

// ReportLoadMatch is the typed request payload for Report.LoadTyped.
type ReportLoadMatch struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	Property *[]any `json:"property,omitempty"`
}

// ReportListMatch is the typed request payload for Report.ListTyped.
type ReportListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BusinessUnitId *[]any `json:"business_unit_id,omitempty"`
	CreatedAfter *string `json:"created_after,omitempty"`
	CreatedBefore *string `json:"created_before,omitempty"`
	DashboardId *string `json:"dashboard_id,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OnDashboard *bool `json:"on_dashboard,omitempty"`
	OnlyFavorite *bool `json:"only_favorite,omitempty"`
	OwnerUserId *[]any `json:"owner_user_id,omitempty"`
	Property *[]any `json:"property,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
	TagId *[]any `json:"tag_id,omitempty"`
	UpdatedAfter *string `json:"updated_after,omitempty"`
	UpdatedBefore *string `json:"updated_before,omitempty"`
}

// ReportCreateData is the typed request payload for Report.CreateTyped.
type ReportCreateData struct {
	Archived bool `json:"archived"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId string `json:"businessUnitId"`
	CreatedAt string `json:"createdAt"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Inputs []any `json:"inputs"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name string `json:"name"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions map[string]any `json:"permissions"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
}

// ReportUpdateData is the typed request payload for Report.UpdateTyped.
type ReportUpdateData struct {
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Inputs *[]any `json:"inputs,omitempty"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
}

// ReportingBatchResponsePublicDashboard is the typed data model for the reporting_batch_response_public_dashboard entity.
type ReportingBatchResponsePublicDashboard struct {
}

// ReportingBatchResponsePublicDashboardCreateData is the typed request payload for ReportingBatchResponsePublicDashboard.CreateTyped.
type ReportingBatchResponsePublicDashboardCreateData struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	OwnerId string `json:"ownerId"`
	Permissions map[string]any `json:"permissions"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// ReportingBatchResponsePublicReport is the typed data model for the reporting_batch_response_public_report entity.
type ReportingBatchResponsePublicReport struct {
}

// ReportingBatchResponsePublicReportCreateData is the typed request payload for ReportingBatchResponsePublicReport.CreateTyped.
type ReportingBatchResponsePublicReportCreateData struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	OwnerId string `json:"ownerId"`
	Permissions map[string]any `json:"permissions"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// ReportingCollectionResponseWithTotalPublicDashboard is the typed data model for the reporting_collection_response_with_total_public_dashboard entity.
type ReportingCollectionResponseWithTotalPublicDashboard struct {
}

// ReportingCollectionResponseWithTotalPublicDashboardListMatch is the typed request payload for ReportingCollectionResponseWithTotalPublicDashboard.ListTyped.
type ReportingCollectionResponseWithTotalPublicDashboardListMatch struct {
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	BusinessUnitId *[]any `json:"business_unit_id,omitempty"`
	CreatedAfter *string `json:"created_after,omitempty"`
	CreatedBefore *string `json:"created_before,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OnlyFavorite *bool `json:"only_favorite,omitempty"`
	OwnerUserId *[]any `json:"owner_user_id,omitempty"`
	Property *[]any `json:"property,omitempty"`
	Q *string `json:"q,omitempty"`
	Sort *[]any `json:"sort,omitempty"`
	TagId *[]any `json:"tag_id,omitempty"`
	UpdatedAfter *string `json:"updated_after,omitempty"`
	UpdatedBefore *string `json:"updated_before,omitempty"`
}

// Widget is the typed data model for the widget entity.
type Widget struct {
}

// WidgetCreateData is the typed request payload for Widget.CreateTyped.
type WidgetCreateData struct {
	DashboardId int `json:"dashboard_id"`
	Archived bool `json:"archived"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId string `json:"businessUnitId"`
	CreatedAt string `json:"createdAt"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	Inputs []any `json:"inputs"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name string `json:"name"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions map[string]any `json:"permissions"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt string `json:"updatedAt"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
	Widgets *[]any `json:"widgets,omitempty"`
}

// WidgetUpdateData is the typed request payload for Widget.UpdateTyped.
type WidgetUpdateData struct {
	DashboardId int `json:"dashboard_id"`
	Id int `json:"id"`
	Archived *bool `json:"archived,omitempty"`
	ArchivedAt *string `json:"archivedAt,omitempty"`
	BusinessUnitId *string `json:"businessUnitId,omitempty"`
	CreatedAt *string `json:"createdAt,omitempty"`
	CreatedByUserId *string `json:"createdByUserId,omitempty"`
	Description *string `json:"description,omitempty"`
	Inputs *[]any `json:"inputs,omitempty"`
	LastViewedAt *string `json:"lastViewedAt,omitempty"`
	LastViewedByUserId *string `json:"lastViewedByUserId,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerUserId *string `json:"ownerUserId,omitempty"`
	Permissions *map[string]any `json:"permissions,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UpdatedByUserId *string `json:"updatedByUserId,omitempty"`
	Widgets *[]any `json:"widgets,omitempty"`
}

// WidgetRemoveMatch is the typed request payload for Widget.RemoveTyped.
type WidgetRemoveMatch struct {
	DashboardId int `json:"dashboard_id"`
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
