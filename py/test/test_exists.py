# HubspotAnalytics SDK exists test

import pytest
from hubspotanalytics_sdk import HubspotAnalyticsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HubspotAnalyticsSDK.test(None, None)
        assert testsdk is not None
