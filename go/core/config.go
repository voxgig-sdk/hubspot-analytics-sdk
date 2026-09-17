package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotAnalytics",
			"slug": "hubspot-analytics",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"clone": map[string]any{},
				"dashboard": map[string]any{},
				"report": map[string]any{},
				"reporting_batch_response_public_dashboard": map[string]any{},
				"reporting_batch_response_public_report": map[string]any{},
				"reporting_collection_response_with_total_public_dashboard": map[string]any{},
				"widget": map[string]any{},
			},
		},
		"entity": map[string]any{
			"clone": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "Whether the dashboard is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cloneReports",
						"req": true,
						"short": "Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdByUserId",
						"short": "The ID of the user who created the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastViewedAt",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"short": "The ID of the user who last viewed the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerUserId",
						"short": "The ID of the user who owns the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedByUserId",
						"short": "The ID of the user who last updated the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "widgets",
						"short": "An array of objects representing the widgets on the dashboard.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "clone",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "dashboard_id",
									},
									map[string]any{
										"lit": "clone",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"clone",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"dashboard",
						},
					},
				},
			},
			"dashboard": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the dashboard is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdByUserId",
						"short": "The ID of the user who created the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "Array of report or dashboard IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastViewedAt",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"short": "The ID of the user who last viewed the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerUserId",
						"short": "The ID of the user who owns the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "reportIdsToAdd",
						"short": "Array of IDs of reports that should be added to the dashboard after creation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedByUserId",
						"short": "The ID of the user who last updated the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "widgets",
						"short": "An array of objects representing the widgets on the dashboard.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dashboard",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"select": map[string]any{
									"$action": "export",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{id}",
									"export",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/batch/archive",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"batch",
									"archive",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"report": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether the report is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "If the report is archived, the date and time when the report was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "The ID of the business unit that the report is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the report was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdByUserId",
						"short": "The ID of the user who created the report.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the report.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the report.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "Array of report or dashboard IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastViewedAt",
						"short": "The date and time when the report was last viewed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"short": "The ID of the user who last viewed the report.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the report.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerUserId",
						"short": "The ID of the user who owns the report.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of objects representing the tags that the report is tagged with.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the report was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedByUserId",
						"short": "The ID of the user who last updated the report.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "report_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/reports/{reportId}/export",
								"rename": map[string]any{
									"param": map[string]any{
										"reportId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"select": map[string]any{
									"$action": "export",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"{id}",
									"export",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/reports/batch/archive",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "archive",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"batch",
									"archive",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_before",
											"orig": "created_before",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "on_dashboard",
											"orig": "on_dashboard",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "only_favorite",
											"orig": "only_favorite",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "owner_user_id",
											"orig": "owner_user_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "tag_id",
											"orig": "tag_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/reporting/2027-03-beta/reports",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"updated_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "report_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/reporting/2027-03-beta/reports/{reportId}",
								"rename": map[string]any{
									"param": map[string]any{
										"reportId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"property",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "report_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/analytics/reporting/2027-03-beta/reports/{reportId}",
								"rename": map[string]any{
									"param": map[string]any{
										"reportId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reporting_batch_response_public_dashboard": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "Array of report or dashboard IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A map of link names to associated URIs, providing additional information related to the batch operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ownerId",
						"req": true,
						"short": "The ID of the user to change the owner to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of dashboard objects representing the successful results of the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation.",
						"type": "`$STRING`",
					},
				},
				"name": "reporting_batch_response_public_dashboard",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/batch/restore",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "restore",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"batch",
									"restore",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/owners/batch/update",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "owners",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"owners",
									"batch",
									"update",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/permissions/batch/update",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"lit": "permissions",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"permissions",
									"batch",
									"update",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reporting_batch_response_public_report": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "Array of report or dashboard IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ownerId",
						"req": true,
						"short": "The ID of the user to change the owner to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of report objects representing the successful results of the batch operation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch operation.",
						"type": "`$STRING`",
					},
				},
				"name": "reporting_batch_response_public_report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/reports/batch/restore",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "restore",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"batch",
									"restore",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/reports/owners/batch/update",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"lit": "owners",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"owners",
									"batch",
									"update",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/reports/permissions/batch/update",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"lit": "permissions",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"permissions",
									"batch",
									"update",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reporting_collection_response_with_total_public_dashboard": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "Whether the dashboard is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdByUserId",
						"short": "The ID of the user who created the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastViewedAt",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"short": "The ID of the user who last viewed the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerUserId",
						"short": "The ID of the user who owns the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedByUserId",
						"short": "The ID of the user who last updated the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "widgets",
						"short": "An array of objects representing the widgets on the dashboard.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reporting_collection_response_with_total_public_dashboard",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "created_before",
											"orig": "created_before",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "only_favorite",
											"orig": "only_favorite",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "owner_user_id",
											"orig": "owner_user_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "tag_id",
											"orig": "tag_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/reporting/2027-03-beta/dashboards",
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"updated_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"widget": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "Whether the dashboard is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "archivedAt",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "businessUnitId",
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdByUserId",
						"short": "The ID of the user who created the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "Array of report or dashboard IDs.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "lastViewedAt",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"short": "The ID of the user who last viewed the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerUserId",
						"short": "The ID of the user who owns the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tags",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedByUserId",
						"short": "The ID of the user who last updated the dashboard.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "widgets",
						"short": "An array of objects representing the widgets on the dashboard.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "widget",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "dashboard_id",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "widgets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"batch",
									"widgets",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "report_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
										"reportId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "dashboard_id",
									},
									map[string]any{
										"lit": "widgets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"widgets",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "report_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}",
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
										"reportId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "analytics",
									},
									map[string]any{
										"lit": "reporting",
									},
									map[string]any{
										"lit": "2027-03-beta",
									},
									map[string]any{
										"lit": "dashboards",
									},
									map[string]any{
										"var": "dashboard_id",
									},
									map[string]any{
										"lit": "widgets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"widgets",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"dashboard",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
