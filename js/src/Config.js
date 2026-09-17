
const { BaseFeature } = require('./feature/base/BaseFeature')
const { DebugFeature } = require('./feature/debug/DebugFeature')
const { IdempotencyFeature } = require('./feature/idempotency/IdempotencyFeature')
const { MetricsFeature } = require('./feature/metrics/MetricsFeature')
const { PagingFeature } = require('./feature/paging/PagingFeature')
const { RatelimitFeature } = require('./feature/ratelimit/RatelimitFeature')
const { RetryFeature } = require('./feature/retry/RetryFeature')
const { TestFeature } = require('./feature/test/TestFeature')
const { TimeoutFeature } = require('./feature/timeout/TimeoutFeature')



const FEATURE_CLASS = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named requires above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
//
// Read by SecretsFeature through a DEFERRED require of this module: the
// requires above make the pair circular, and this file replaces
// module.exports at the end of its body, so anything reading the map at
// module load would get undefined. See tm/js/src/feature/secrets.
const FEATURE_PLUGINS = {
  
}


class Config {

  makeFeature(fn) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(fn) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'HubspotAnalytics',
        slug: "hubspot-analytics",
    version: "0.0.1",
    target: "js",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.hubapi.com",

    auth: {
      prefix: '',
      in: 'query',
      name: 'hapikey',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        clone: {
        },
  
        dashboard: {
        },
  
        report: {
        },
  
        reporting_batch_response_public_dashboard: {
        },
  
        reporting_batch_response_public_report: {
        },
  
        reporting_collection_response_with_total_public_dashboard: {
        },
  
        widget: {
        },
  
    }
  }


  entity = {
    "clone": {
      "fields": [
        {
          "name": "archived",
          "req": true,
          "short": "Whether the dashboard is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "req": true,
          "short": "The ID of the business unit that the dashboard is associated with.",
          "type": "`$STRING`"
        },
        {
          "name": "cloneReports",
          "req": true,
          "short": "Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`).",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date and time when the dashboard was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "createdByUserId",
          "short": "The ID of the user who created the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "A description of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The ID of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "lastViewedAt",
          "short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "lastViewedByUserId",
          "short": "The ID of the user who last viewed the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "ownerUserId",
          "short": "The ID of the user who owns the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "tags",
          "short": "Array of objects representing the tags that the dashboard is tagged with.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "updatedByUserId",
          "short": "The ID of the user who last updated the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "widgets",
          "short": "An array of objects representing the widgets on the dashboard.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "clone",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "dashboard_id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone",
              "rename": {
                "param": {
                  "dashboardId": "dashboard_id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "dashboard_id"
                },
                {
                  "lit": "clone"
                }
              ],
              "select": {
                "exist": [
                  "dashboard_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{dashboard_id}",
                "clone"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "dashboard"
          ]
        ]
      }
    },
    "dashboard": {
      "fields": [
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether the dashboard is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "The ID of the business unit that the dashboard is associated with.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date and time when the dashboard was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "createdByUserId",
          "short": "The ID of the user who created the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "A description of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The ID of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "Array of report or dashboard IDs.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "lastViewedAt",
          "short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "lastViewedByUserId",
          "short": "The ID of the user who last viewed the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "ownerUserId",
          "short": "The ID of the user who owns the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "reportIdsToAdd",
          "short": "Array of IDs of reports that should be added to the dashboard after creation.",
          "type": "`$ARRAY`"
        },
        {
          "name": "tags",
          "short": "Array of objects representing the tags that the dashboard is tagged with.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "updatedByUserId",
          "short": "The ID of the user who last updated the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "widgets",
          "short": "An array of objects representing the widgets on the dashboard.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "dashboard",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export",
              "rename": {
                "param": {
                  "dashboardId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "export"
                }
              ],
              "select": {
                "$action": "export",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{id}",
                "export"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/batch/archive",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "archive"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "batch",
                "archive"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "property",
                    "orig": "property",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}",
              "rename": {
                "param": {
                  "dashboardId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "archived",
                  "id",
                  "property"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}",
              "rename": {
                "param": {
                  "dashboardId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "report": {
      "fields": [
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether the report is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "If the report is archived, the date and time when the report was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "The ID of the business unit that the report is associated with.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date and time when the report was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "createdByUserId",
          "short": "The ID of the user who created the report.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "A description of the report.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The ID of the report.",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "Array of report or dashboard IDs.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "lastViewedAt",
          "short": "The date and time when the report was last viewed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "lastViewedByUserId",
          "short": "The ID of the user who last viewed the report.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the report.",
          "type": "`$STRING`"
        },
        {
          "name": "ownerUserId",
          "short": "The ID of the user who owns the report.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "tags",
          "short": "Array of objects representing the tags that the report is tagged with.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date and time when the report was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "updatedByUserId",
          "short": "The ID of the user who last updated the report.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "report",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "report_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/reports/{reportId}/export",
              "rename": {
                "param": {
                  "reportId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "export"
                }
              ],
              "select": {
                "$action": "export",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "{id}",
                "export"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/reports/batch/archive",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "archive"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "batch",
                "archive"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "business_unit_id",
                    "orig": "business_unit_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_after",
                    "orig": "created_after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_before",
                    "orig": "created_before",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "dashboard_id",
                    "orig": "dashboard_id",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "on_dashboard",
                    "orig": "on_dashboard",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "only_favorite",
                    "orig": "only_favorite",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "owner_user_id",
                    "orig": "owner_user_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "property",
                    "orig": "property",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "tag_id",
                    "orig": "tag_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_after",
                    "orig": "updated_after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_before",
                    "orig": "updated_before",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/analytics/reporting/2027-03-beta/reports",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                }
              ],
              "select": {
                "exist": [
                  "after",
                  "archived",
                  "business_unit_id",
                  "created_after",
                  "created_before",
                  "dashboard_id",
                  "ids",
                  "limit",
                  "on_dashboard",
                  "only_favorite",
                  "owner_user_id",
                  "property",
                  "q",
                  "sort",
                  "tag_id",
                  "updated_after",
                  "updated_before"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "report_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "property",
                    "orig": "property",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/analytics/reporting/2027-03-beta/reports/{reportId}",
              "rename": {
                "param": {
                  "reportId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "archived",
                  "id",
                  "property"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "report_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PATCH",
              "orig": "/analytics/reporting/2027-03-beta/reports/{reportId}",
              "rename": {
                "param": {
                  "reportId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "reporting_batch_response_public_dashboard": {
      "fields": [
        {
          "format": "date-time",
          "name": "completedAt",
          "req": true,
          "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "Array of report or dashboard IDs.",
          "type": "`$ARRAY`"
        },
        {
          "name": "links",
          "short": "A map of link names to associated URIs, providing additional information related to the batch operation.",
          "type": "`$OBJECT`"
        },
        {
          "name": "ownerId",
          "req": true,
          "short": "The ID of the user to change the owner to.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "requestedAt",
          "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "short": "An array of dashboard objects representing the successful results of the batch operation.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "startedAt",
          "req": true,
          "short": "The date and time when the batch operation started, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the batch operation.",
          "type": "`$STRING`"
        }
      ],
      "name": "reporting_batch_response_public_dashboard",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/batch/restore",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "restore"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "batch",
                "restore"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/owners/batch/update",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "lit": "owners"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "update"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "owners",
                "batch",
                "update"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/permissions/batch/update",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "lit": "permissions"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "update"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "permissions",
                "batch",
                "update"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "reporting_batch_response_public_report": {
      "fields": [
        {
          "format": "date-time",
          "name": "completedAt",
          "req": true,
          "short": "The date and time when the batch operation was completed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "Array of report or dashboard IDs.",
          "type": "`$ARRAY`"
        },
        {
          "name": "links",
          "short": "A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.",
          "type": "`$OBJECT`"
        },
        {
          "name": "ownerId",
          "req": true,
          "short": "The ID of the user to change the owner to.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "requestedAt",
          "short": "The date and time when the batch operation was requested, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "results",
          "req": true,
          "short": "An array of report objects representing the successful results of the batch operation.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "startedAt",
          "req": true,
          "short": "The date and time when the batch operation started, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The current status of the batch operation.",
          "type": "`$STRING`"
        }
      ],
      "name": "reporting_batch_response_public_report",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/reports/batch/restore",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "restore"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "batch",
                "restore"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/reports/owners/batch/update",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "lit": "owners"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "update"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "owners",
                "batch",
                "update"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/reports/permissions/batch/update",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "reports"
                },
                {
                  "lit": "permissions"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "update"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "reports",
                "permissions",
                "batch",
                "update"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "reporting_collection_response_with_total_public_dashboard": {
      "fields": [
        {
          "name": "archived",
          "req": true,
          "short": "Whether the dashboard is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "req": true,
          "short": "The ID of the business unit that the dashboard is associated with.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date and time when the dashboard was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "createdByUserId",
          "short": "The ID of the user who created the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "A description of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The ID of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "lastViewedAt",
          "short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "lastViewedByUserId",
          "short": "The ID of the user who last viewed the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "ownerUserId",
          "short": "The ID of the user who owns the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "tags",
          "short": "Array of objects representing the tags that the dashboard is tagged with.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "updatedByUserId",
          "short": "The ID of the user who last updated the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "widgets",
          "short": "An array of objects representing the widgets on the dashboard.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "reporting_collection_response_with_total_public_dashboard",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": null,
                    "kind": "query",
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "archived",
                    "orig": "archived",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "business_unit_id",
                    "orig": "business_unit_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_after",
                    "orig": "created_after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "created_before",
                    "orig": "created_before",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "only_favorite",
                    "orig": "only_favorite",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "owner_user_id",
                    "orig": "owner_user_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "property",
                    "orig": "property",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "tag_id",
                    "orig": "tag_id",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_after",
                    "orig": "updated_after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": null,
                    "kind": "query",
                    "name": "updated_before",
                    "orig": "updated_before",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/analytics/reporting/2027-03-beta/dashboards",
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                }
              ],
              "select": {
                "exist": [
                  "after",
                  "archived",
                  "business_unit_id",
                  "created_after",
                  "created_before",
                  "ids",
                  "limit",
                  "only_favorite",
                  "owner_user_id",
                  "property",
                  "q",
                  "sort",
                  "tag_id",
                  "updated_after",
                  "updated_before"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "widget": {
      "fields": [
        {
          "name": "archived",
          "req": true,
          "short": "Whether the dashboard is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "archivedAt",
          "short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "businessUnitId",
          "req": true,
          "short": "The ID of the business unit that the dashboard is associated with.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "req": true,
          "short": "The date and time when the dashboard was created, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "createdByUserId",
          "short": "The ID of the user who created the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "A description of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "The ID of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "inputs",
          "req": true,
          "short": "Array of report or dashboard IDs.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "lastViewedAt",
          "short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "lastViewedByUserId",
          "short": "The ID of the user who last viewed the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "ownerUserId",
          "short": "The ID of the user who owns the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "permissions",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "tags",
          "short": "Array of objects representing the tags that the dashboard is tagged with.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "req": true,
          "short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
          "type": "`$STRING`"
        },
        {
          "name": "updatedByUserId",
          "short": "The ID of the user who last updated the dashboard.",
          "type": "`$STRING`"
        },
        {
          "name": "widgets",
          "short": "An array of objects representing the widgets on the dashboard.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "widget",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "dashboard_id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets",
              "rename": {
                "param": {
                  "dashboardId": "dashboard_id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "dashboard_id"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "widgets"
                }
              ],
              "select": {
                "exist": [
                  "dashboard_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{dashboard_id}",
                "batch",
                "widgets"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "dashboard_id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "report_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}",
              "rename": {
                "param": {
                  "dashboardId": "dashboard_id",
                  "reportId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "dashboard_id"
                },
                {
                  "lit": "widgets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "dashboard_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{dashboard_id}",
                "widgets",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": null,
                    "kind": "param",
                    "name": "dashboard_id",
                    "orig": "dashboard_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": null,
                    "kind": "param",
                    "name": "id",
                    "orig": "report_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}",
              "rename": {
                "param": {
                  "dashboardId": "dashboard_id",
                  "reportId": "id"
                }
              },
              "segments": [
                {
                  "lit": "analytics"
                },
                {
                  "lit": "reporting"
                },
                {
                  "lit": "2027-03-beta"
                },
                {
                  "lit": "dashboards"
                },
                {
                  "var": "dashboard_id"
                },
                {
                  "lit": "widgets"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "dashboard_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "analytics",
                "reporting",
                "2027-03-beta",
                "dashboards",
                "{dashboard_id}",
                "widgets",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "dashboard"
          ]
        ]
      }
    }
  }
}


const config = new Config()

module.exports = {
  config,
  FEATURE_PLUGINS,
}

