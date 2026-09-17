package core

type HubspotAnalyticsError struct {
	IsHubspotAnalyticsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotAnalyticsError(code string, msg string, ctx *Context) *HubspotAnalyticsError {
	return &HubspotAnalyticsError{
		IsHubspotAnalyticsError: true,
		Sdk:              "HubspotAnalytics",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotAnalyticsError) Error() string {
	return e.Msg
}
