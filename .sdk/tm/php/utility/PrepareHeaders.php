<?php
declare(strict_types=1);

// HubspotAnalytics SDK utility: prepare_headers

class HubspotAnalyticsPrepareHeaders
{
    public static function call(HubspotAnalyticsContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
