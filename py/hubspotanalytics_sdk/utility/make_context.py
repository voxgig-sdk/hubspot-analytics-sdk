# HubspotAnalytics SDK utility: make_context

from hubspotanalytics_sdk.core.context import HubspotAnalyticsContext


def make_context_util(ctxmap, basectx):
    return HubspotAnalyticsContext(ctxmap, basectx)
