# HubspotAnalytics SDK feature factory

from hubspotanalytics_sdk.feature.base_feature import HubspotAnalyticsBaseFeature
from hubspotanalytics_sdk.feature.debug_feature import HubspotAnalyticsDebugFeature
from hubspotanalytics_sdk.feature.idempotency_feature import HubspotAnalyticsIdempotencyFeature
from hubspotanalytics_sdk.feature.metrics_feature import HubspotAnalyticsMetricsFeature
from hubspotanalytics_sdk.feature.paging_feature import HubspotAnalyticsPagingFeature
from hubspotanalytics_sdk.feature.ratelimit_feature import HubspotAnalyticsRatelimitFeature
from hubspotanalytics_sdk.feature.retry_feature import HubspotAnalyticsRetryFeature
from hubspotanalytics_sdk.feature.test_feature import HubspotAnalyticsTestFeature
from hubspotanalytics_sdk.feature.timeout_feature import HubspotAnalyticsTimeoutFeature


_FEATURES = {
    "base": lambda: HubspotAnalyticsBaseFeature(),
    "debug": lambda: HubspotAnalyticsDebugFeature(),
    "idempotency": lambda: HubspotAnalyticsIdempotencyFeature(),
    "metrics": lambda: HubspotAnalyticsMetricsFeature(),
    "paging": lambda: HubspotAnalyticsPagingFeature(),
    "ratelimit": lambda: HubspotAnalyticsRatelimitFeature(),
    "retry": lambda: HubspotAnalyticsRetryFeature(),
    "test": lambda: HubspotAnalyticsTestFeature(),
    "timeout": lambda: HubspotAnalyticsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
