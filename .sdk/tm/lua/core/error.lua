-- HubspotAnalytics SDK error

local HubspotAnalyticsError = {}
HubspotAnalyticsError.__index = HubspotAnalyticsError


function HubspotAnalyticsError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotAnalyticsError)
  self.is_sdk_error = true
  self.sdk = "HubspotAnalytics"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotAnalyticsError:error()
  return self.msg
end


function HubspotAnalyticsError:__tostring()
  return self.msg
end


return HubspotAnalyticsError
