<?php
declare(strict_types=1);

// HubspotAnalytics SDK configuration

class HubspotAnalyticsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HubspotAnalytics",
                "slug" => "hubspot-analytics",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "debug" => [
          'options' => [
            'active' => false,
            'max' => 100,
            'redact' => [
              'authorization',
              'cookie',
              'set-cookie',
              'api-key',
              'apikey',
              'x-api-key',
              'idempotency-key',
            ],
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'onEntry' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "idempotency" => [
          'options' => [
            'active' => false,
            'header' => 'Idempotency-Key',
            'methods' => [
              'POST',
              'PUT',
              'PATCH',
              'DELETE',
            ],
            'ops' => [
              'create',
              'update',
              'remove',
            ],
          ],
          'optspec' => [
            'keygen' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "metrics" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "paging" => [
          'options' => [
            'active' => false,
            'afterVar' => 'after',
            'cursorParam' => 'cursor',
            'firstVar' => 'first',
            'limitParam' => 'limit',
            'pageParam' => 'page',
            'startPage' => 1,
          ],
          'optspec' => [
            'limit' => '`$NUMBER`',
            'ops' => '`$LIST`',
          ],
          'strict' => false,
          'transport' => 'none',
        ],
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.hubapi.com",
                "auth" => [
                    "prefix" => "",
                    "in" => "query",
                    "name" => "hapikey",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "clone" => [],
                    "dashboard" => [],
                    "report" => [],
                    "reporting_batch_response_public_dashboard" => [],
                    "reporting_batch_response_public_report" => [],
                    "reporting_collection_response_with_total_public_dashboard" => [],
                    "widget" => [],
                ],
            ],
            "entity" => [
        'clone' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the dashboard is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the business unit that the dashboard is associated with.',
            ],
            [
              'name' => 'cloneReports',
              'title' => 'Clone Reports',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`).',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdByUserId',
              'title' => 'Created By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who created the dashboard.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the dashboard.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the dashboard.',
            ],
            [
              'name' => 'lastViewedAt',
              'title' => 'Last Viewed At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the dashboard was last viewed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'lastViewedByUserId',
              'title' => 'Last Viewed By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last viewed the dashboard.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the dashboard.',
            ],
            [
              'name' => 'ownerUserId',
              'title' => 'Owner User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who owns the dashboard.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Array of objects representing the tags that the dashboard is tagged with.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'updatedByUserId',
              'title' => 'Updated By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last updated the dashboard.',
            ],
            [
              'name' => 'widgets',
              'title' => 'Widgets',
              'type' => '`$ARRAY`',
              'short' => 'An array of objects representing the widgets on the dashboard.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'clone',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'dashboard_id',
                    ],
                    [
                      'lit' => 'clone',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{dashboard_id}',
                    'clone',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'dashboard_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dashboard_id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dashboard_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.dashboard',
              ],
            ],
          ],
        ],
        'dashboard' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Whether the dashboard is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'create' => [
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The ID of the business unit that the dashboard is associated with.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdByUserId',
              'title' => 'Created By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who created the dashboard.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the dashboard.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the dashboard.',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of report or dashboard IDs.',
            ],
            [
              'name' => 'lastViewedAt',
              'title' => 'Last Viewed At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the dashboard was last viewed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'lastViewedByUserId',
              'title' => 'Last Viewed By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last viewed the dashboard.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The name of the dashboard.',
            ],
            [
              'name' => 'ownerUserId',
              'title' => 'Owner User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who owns the dashboard.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'reportIdsToAdd',
              'title' => 'Report Ids To Add',
              'type' => '`$ARRAY`',
              'short' => 'Array of IDs of reports that should be added to the dashboard after creation.',
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Array of objects representing the tags that the dashboard is tagged with.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'updatedByUserId',
              'title' => 'Updated By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last updated the dashboard.',
            ],
            [
              'name' => 'widgets',
              'title' => 'Widgets',
              'type' => '`$ARRAY`',
              'short' => 'An array of objects representing the widgets on the dashboard.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dashboard',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{id}',
                    'export',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'export',
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/batch/archive',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'archive',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    'batch',
                    'archive',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'report' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'short' => 'Whether the report is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'If the report is archived, the date and time when the report was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$OBJECT`',
                ],
              ],
              'short' => 'The ID of the business unit that the report is associated with.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the report was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdByUserId',
              'title' => 'Created By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who created the report.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the report.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the report.',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of report or dashboard IDs.',
            ],
            [
              'name' => 'lastViewedAt',
              'title' => 'Last Viewed At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the report was last viewed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'lastViewedByUserId',
              'title' => 'Last Viewed By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last viewed the report.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'op' => [
                'update' => [
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The name of the report.',
            ],
            [
              'name' => 'ownerUserId',
              'title' => 'Owner User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who owns the report.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Array of objects representing the tags that the report is tagged with.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the report was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'updatedByUserId',
              'title' => 'Updated By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last updated the report.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'report',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/{reportId}/export',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    '{id}',
                    'export',
                  ],
                  'rename' => [
                    'param' => [
                      'reportId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'report_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'export',
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/batch/archive',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'archive',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    'batch',
                    'archive',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/analytics/reporting/2027-03-beta/reports',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'business_unit_id',
                        'orig' => 'business_unit_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_after',
                        'orig' => 'created_after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_before',
                        'orig' => 'created_before',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'dashboard_id',
                        'orig' => 'dashboard_id',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'ids',
                        'orig' => 'ids',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'on_dashboard',
                        'orig' => 'on_dashboard',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'only_favorite',
                        'orig' => 'only_favorite',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'owner_user_id',
                        'orig' => 'owner_user_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'tag_id',
                        'orig' => 'tag_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_after',
                        'orig' => 'updated_after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_before',
                        'orig' => 'updated_before',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'business_unit_id',
                      'created_after',
                      'created_before',
                      'dashboard_id',
                      'ids',
                      'limit',
                      'on_dashboard',
                      'only_favorite',
                      'owner_user_id',
                      'property',
                      'q',
                      'sort',
                      'tag_id',
                      'updated_after',
                      'updated_before',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/{reportId}',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'reportId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'report_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'archived',
                      'id',
                      'property',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/{reportId}',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'reportId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'report_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'reporting_batch_response_public_dashboard' => [
          'fields' => [
            [
              'name' => 'completedAt',
              'title' => 'Completed At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the batch operation was completed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of report or dashboard IDs.',
            ],
            [
              'name' => 'links',
              'title' => 'Links',
              'type' => '`$OBJECT`',
              'short' => 'A map of link names to associated URIs, providing additional information related to the batch operation.',
            ],
            [
              'name' => 'ownerId',
              'title' => 'Owner Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the user to change the owner to.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'requestedAt',
              'title' => 'Requested At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the batch operation was requested, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of dashboard objects representing the successful results of the batch operation.',
            ],
            [
              'name' => 'startedAt',
              'title' => 'Started At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the batch operation started, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the batch operation.',
            ],
          ],
          'name' => 'reporting_batch_response_public_dashboard',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/batch/restore',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'restore',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    'batch',
                    'restore',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/owners/batch/update',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'lit' => 'owners',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'update',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    'owners',
                    'batch',
                    'update',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/permissions/batch/update',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'lit' => 'permissions',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'update',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    'permissions',
                    'batch',
                    'update',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'reporting_batch_response_public_report' => [
          'fields' => [
            [
              'name' => 'completedAt',
              'title' => 'Completed At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the batch operation was completed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of report or dashboard IDs.',
            ],
            [
              'name' => 'links',
              'title' => 'Links',
              'type' => '`$OBJECT`',
              'short' => 'A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.',
            ],
            [
              'name' => 'ownerId',
              'title' => 'Owner Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the user to change the owner to.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'requestedAt',
              'title' => 'Requested At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the batch operation was requested, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'results',
              'title' => 'Results',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'An array of report objects representing the successful results of the batch operation.',
            ],
            [
              'name' => 'startedAt',
              'title' => 'Started At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the batch operation started, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The current status of the batch operation.',
            ],
          ],
          'name' => 'reporting_batch_response_public_report',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/batch/restore',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'restore',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    'batch',
                    'restore',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/owners/batch/update',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'lit' => 'owners',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'update',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    'owners',
                    'batch',
                    'update',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/reports/permissions/batch/update',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'reports',
                    ],
                    [
                      'lit' => 'permissions',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'update',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'reports',
                    'permissions',
                    'batch',
                    'update',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'reporting_collection_response_with_total_public_dashboard' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the dashboard is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the business unit that the dashboard is associated with.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdByUserId',
              'title' => 'Created By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who created the dashboard.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the dashboard.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the dashboard.',
            ],
            [
              'name' => 'lastViewedAt',
              'title' => 'Last Viewed At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the dashboard was last viewed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'lastViewedByUserId',
              'title' => 'Last Viewed By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last viewed the dashboard.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the dashboard.',
            ],
            [
              'name' => 'ownerUserId',
              'title' => 'Owner User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who owns the dashboard.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Array of objects representing the tags that the dashboard is tagged with.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'updatedByUserId',
              'title' => 'Updated By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last updated the dashboard.',
            ],
            [
              'name' => 'widgets',
              'title' => 'Widgets',
              'type' => '`$ARRAY`',
              'short' => 'An array of objects representing the widgets on the dashboard.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'reporting_collection_response_with_total_public_dashboard',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'archived',
                        'orig' => 'archived',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'business_unit_id',
                        'orig' => 'business_unit_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_after',
                        'orig' => 'created_after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'created_before',
                        'orig' => 'created_before',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'ids',
                        'orig' => 'ids',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'only_favorite',
                        'orig' => 'only_favorite',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'owner_user_id',
                        'orig' => 'owner_user_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'property',
                        'orig' => 'property',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'tag_id',
                        'orig' => 'tag_id',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_after',
                        'orig' => 'updated_after',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                      [
                        'name' => 'updated_before',
                        'orig' => 'updated_before',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'archived',
                      'business_unit_id',
                      'created_after',
                      'created_before',
                      'ids',
                      'limit',
                      'only_favorite',
                      'owner_user_id',
                      'property',
                      'q',
                      'sort',
                      'tag_id',
                      'updated_after',
                      'updated_before',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'widget' => [
          'fields' => [
            [
              'name' => 'archived',
              'title' => 'Archived',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the dashboard is archived.',
            ],
            [
              'name' => 'archivedAt',
              'title' => 'Archived At',
              'type' => '`$STRING`',
              'short' => 'If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'businessUnitId',
              'title' => 'Business Unit Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the business unit that the dashboard is associated with.',
            ],
            [
              'name' => 'createdAt',
              'title' => 'Created At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was created, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'createdByUserId',
              'title' => 'Created By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who created the dashboard.',
            ],
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'A description of the dashboard.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The ID of the dashboard.',
            ],
            [
              'name' => 'inputs',
              'title' => 'Inputs',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'Array of report or dashboard IDs.',
            ],
            [
              'name' => 'lastViewedAt',
              'title' => 'Last Viewed At',
              'type' => '`$STRING`',
              'short' => 'The date and time when the dashboard was last viewed, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'lastViewedByUserId',
              'title' => 'Last Viewed By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last viewed the dashboard.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The name of the dashboard.',
            ],
            [
              'name' => 'ownerUserId',
              'title' => 'Owner User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who owns the dashboard.',
            ],
            [
              'name' => 'permissions',
              'title' => 'Permissions',
              'type' => '`$OBJECT`',
              'req' => true,
            ],
            [
              'name' => 'tags',
              'title' => 'Tags',
              'type' => '`$ARRAY`',
              'short' => 'Array of objects representing the tags that the dashboard is tagged with.',
            ],
            [
              'name' => 'updatedAt',
              'title' => 'Updated At',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The date and time when the dashboard was last updated, in ISO 8601 format.',
              'format' => 'date-time',
            ],
            [
              'name' => 'updatedByUserId',
              'title' => 'Updated By User Id',
              'type' => '`$STRING`',
              'short' => 'The ID of the user who last updated the dashboard.',
            ],
            [
              'name' => 'widgets',
              'title' => 'Widgets',
              'type' => '`$ARRAY`',
              'short' => 'An array of objects representing the widgets on the dashboard.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'widget',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'dashboard_id',
                    ],
                    [
                      'lit' => 'batch',
                    ],
                    [
                      'lit' => 'widgets',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{dashboard_id}',
                    'batch',
                    'widgets',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'dashboard_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dashboard_id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dashboard_id',
                    ],
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'dashboard_id',
                    ],
                    [
                      'lit' => 'widgets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{dashboard_id}',
                    'widgets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'dashboard_id',
                      'reportId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dashboard_id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'report_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dashboard_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}',
                  'segments' => [
                    [
                      'lit' => 'analytics',
                    ],
                    [
                      'lit' => 'reporting',
                    ],
                    [
                      'lit' => '2027-03-beta',
                    ],
                    [
                      'lit' => 'dashboards',
                    ],
                    [
                      'var' => 'dashboard_id',
                    ],
                    [
                      'lit' => 'widgets',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'analytics',
                    'reporting',
                    '2027-03-beta',
                    'dashboards',
                    '{dashboard_id}',
                    'widgets',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'dashboardId' => 'dashboard_id',
                      'reportId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'dashboard_id',
                        'orig' => 'dashboard_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                      [
                        'name' => 'id',
                        'orig' => 'report_id',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => null,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dashboard_id',
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.dashboard',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HubspotAnalyticsFeatures::make_feature($name);
    }
}
