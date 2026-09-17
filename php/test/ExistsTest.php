<?php
declare(strict_types=1);

// HubspotAnalytics SDK exists test

require_once __DIR__ . '/../hubspotanalytics_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HubspotAnalyticsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
