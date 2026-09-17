<?php
declare(strict_types=1);

// HubspotAnalytics SDK utility: result_body

class HubspotAnalyticsResultBody
{
    public static function call(HubspotAnalyticsContext $ctx): ?HubspotAnalyticsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
