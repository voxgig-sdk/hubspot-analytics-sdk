<?php
declare(strict_types=1);

// HubspotAnalytics SDK base feature

class HubspotAnalyticsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotAnalyticsContext $ctx, array $options): void {}
    public function PostConstruct(HubspotAnalyticsContext $ctx): void {}
    public function PostConstructEntity(HubspotAnalyticsContext $ctx): void {}
    public function SetData(HubspotAnalyticsContext $ctx): void {}
    public function GetData(HubspotAnalyticsContext $ctx): void {}
    public function GetMatch(HubspotAnalyticsContext $ctx): void {}
    public function SetMatch(HubspotAnalyticsContext $ctx): void {}
    public function PrePoint(HubspotAnalyticsContext $ctx): void {}
    public function PreSpec(HubspotAnalyticsContext $ctx): void {}
    public function PreRequest(HubspotAnalyticsContext $ctx): void {}
    public function PreResponse(HubspotAnalyticsContext $ctx): void {}
    public function PreResult(HubspotAnalyticsContext $ctx): void {}
    public function PreDone(HubspotAnalyticsContext $ctx): void {}
    public function PreUnexpected(HubspotAnalyticsContext $ctx): void {}
}
