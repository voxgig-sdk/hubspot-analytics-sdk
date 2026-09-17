<?php
declare(strict_types=1);

// HubspotAnalytics SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotAnalyticsMakeContext
{
    public static function call(array $ctxmap, ?HubspotAnalyticsContext $basectx): HubspotAnalyticsContext
    {
        return new HubspotAnalyticsContext($ctxmap, $basectx);
    }
}
