package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCloneEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

var NewDashboardEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

var NewReportEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

var NewReportingBatchResponsePublicDashboardEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

var NewReportingBatchResponsePublicReportEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

var NewReportingCollectionResponseWithTotalPublicDashboardEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

var NewWidgetEntityFunc func(client *HubspotAnalyticsSDK, entopts map[string]any) HubspotAnalyticsEntity

