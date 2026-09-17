<?php
declare(strict_types=1);

// HubspotAnalytics SDK utility: result_headers

class HubspotAnalyticsResultHeaders
{
    public static function call(HubspotAnalyticsContext $ctx): ?HubspotAnalyticsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
