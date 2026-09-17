-- HubspotAnalytics SDK exists test

local sdk = require("hubspot-analytics_sdk")

describe("HubspotAnalyticsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
