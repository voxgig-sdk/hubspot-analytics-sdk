package voxgighubspotanalyticssdk

import (
	"github.com/voxgig-sdk/hubspot-analytics-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-analytics-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-analytics-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-analytics-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotAnalyticsSDK = core.HubspotAnalyticsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotAnalyticsEntity = core.HubspotAnalyticsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotAnalyticsError = core.HubspotAnalyticsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCloneEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewCloneEntity(client, entopts)
	}
	core.NewDashboardEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewDashboardEntity(client, entopts)
	}
	core.NewReportEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewReportEntity(client, entopts)
	}
	core.NewReportingBatchResponsePublicDashboardEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewReportingBatchResponsePublicDashboardEntity(client, entopts)
	}
	core.NewReportingBatchResponsePublicReportEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewReportingBatchResponsePublicReportEntity(client, entopts)
	}
	core.NewReportingCollectionResponseWithTotalPublicDashboardEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewReportingCollectionResponseWithTotalPublicDashboardEntity(client, entopts)
	}
	core.NewWidgetEntityFunc = func(client *core.HubspotAnalyticsSDK, entopts map[string]any) core.HubspotAnalyticsEntity {
		return entity.NewWidgetEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotAnalyticsSDK = core.NewHubspotAnalyticsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotAnalyticsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotAnalyticsSDK  { return NewHubspotAnalyticsSDK(nil) }
func Test() *HubspotAnalyticsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
