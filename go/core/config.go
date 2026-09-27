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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the dashboard is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
					},
					map[string]any{
						"name": "cloneReports",
						"title": "Clone Reports",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether to create clones of the reports from the original dashboard to use on the cloned dashboard (`true`), or reference the same report objects as the original dashboard (`false`).",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdByUserId",
						"title": "Created By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who created the dashboard.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the dashboard.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the dashboard.",
					},
					map[string]any{
						"name": "lastViewedAt",
						"title": "Last Viewed At",
						"type": "`$STRING`",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"title": "Last Viewed By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last viewed the dashboard.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the dashboard.",
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who owns the dashboard.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "updatedByUserId",
						"title": "Updated By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last updated the dashboard.",
					},
					map[string]any{
						"name": "widgets",
						"title": "Widgets",
						"type": "`$ARRAY`",
						"short": "An array of objects representing the widgets on the dashboard.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/clone",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"clone",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.dashboard",
						},
					},
				},
			},
			"dashboard": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the dashboard is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The ID of the business unit that the dashboard is associated with.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdByUserId",
						"title": "Created By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who created the dashboard.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the dashboard.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the dashboard.",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of report or dashboard IDs.",
					},
					map[string]any{
						"name": "lastViewedAt",
						"title": "Last Viewed At",
						"type": "`$STRING`",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"title": "Last Viewed By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last viewed the dashboard.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the dashboard.",
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who owns the dashboard.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "reportIdsToAdd",
						"title": "Report Ids To Add",
						"type": "`$ARRAY`",
						"short": "Array of IDs of reports that should be added to the dashboard after creation.",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "updatedByUserId",
						"title": "Updated By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last updated the dashboard.",
					},
					map[string]any{
						"name": "widgets",
						"title": "Widgets",
						"type": "`$ARRAY`",
						"short": "An array of objects representing the widgets on the dashboard.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/export",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{id}",
									"export",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"$action": "export",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"batch",
									"archive",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"property",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the report is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "If the report is archived, the date and time when the report was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "The ID of the business unit that the report is associated with.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the report was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdByUserId",
						"title": "Created By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who created the report.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the report.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the report.",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of report or dashboard IDs.",
					},
					map[string]any{
						"name": "lastViewedAt",
						"title": "Last Viewed At",
						"type": "`$STRING`",
						"short": "The date and time when the report was last viewed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"title": "Last Viewed By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last viewed the report.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The name of the report.",
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who owns the report.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Array of objects representing the tags that the report is tagged with.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the report was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "updatedByUserId",
						"title": "Updated By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last updated the report.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/reports/{reportId}/export",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"{id}",
									"export",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"reportId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "report_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"$action": "export",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"batch",
									"archive",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_after",
											"orig": "created_after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_before",
											"orig": "created_before",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "on_dashboard",
											"orig": "on_dashboard",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "only_favorite",
											"orig": "only_favorite",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "owner_user_id",
											"orig": "owner_user_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "tag_id",
											"orig": "tag_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/analytics/reporting/2027-03-beta/reports/{reportId}",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"reportId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "report_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"id",
										"property",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/analytics/reporting/2027-03-beta/reports/{reportId}",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"reportId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "report_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of report or dashboard IDs.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "A map of link names to associated URIs, providing additional information related to the batch operation.",
					},
					map[string]any{
						"name": "ownerId",
						"title": "Owner Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the user to change the owner to.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of dashboard objects representing the successful results of the batch operation.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the batch operation.",
					},
				},
				"name": "reporting_batch_response_public_dashboard",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"batch",
									"restore",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"owners",
									"batch",
									"update",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"permissions",
									"batch",
									"update",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"name": "completedAt",
						"title": "Completed At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation was completed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of report or dashboard IDs.",
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"short": "A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.",
					},
					map[string]any{
						"name": "ownerId",
						"title": "Owner Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the user to change the owner to.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "requestedAt",
						"title": "Requested At",
						"type": "`$STRING`",
						"short": "The date and time when the batch operation was requested, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$ARRAY`",
						"req": true,
						"short": "An array of report objects representing the successful results of the batch operation.",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the batch operation started, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The current status of the batch operation.",
					},
				},
				"name": "reporting_batch_response_public_report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"batch",
									"restore",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"owners",
									"batch",
									"update",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"reports",
									"permissions",
									"batch",
									"update",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the dashboard is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdByUserId",
						"title": "Created By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who created the dashboard.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the dashboard.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the dashboard.",
					},
					map[string]any{
						"name": "lastViewedAt",
						"title": "Last Viewed At",
						"type": "`$STRING`",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"title": "Last Viewed By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last viewed the dashboard.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the dashboard.",
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who owns the dashboard.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "updatedByUserId",
						"title": "Updated By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last updated the dashboard.",
					},
					map[string]any{
						"name": "widgets",
						"title": "Widgets",
						"type": "`$ARRAY`",
						"short": "An array of objects representing the widgets on the dashboard.",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "business_unit_id",
											"orig": "business_unit_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_after",
											"orig": "created_after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "created_before",
											"orig": "created_before",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "only_favorite",
											"orig": "only_favorite",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "owner_user_id",
											"orig": "owner_user_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "property",
											"orig": "property",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "tag_id",
											"orig": "tag_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
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
						"title": "Archived",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the dashboard is archived.",
					},
					map[string]any{
						"name": "archivedAt",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "If the dashboard is archived, the date and time when the dashboard was archived, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "businessUnitId",
						"title": "Business Unit Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the business unit that the dashboard is associated with.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was created, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "createdByUserId",
						"title": "Created By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who created the dashboard.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A description of the dashboard.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The ID of the dashboard.",
					},
					map[string]any{
						"name": "inputs",
						"title": "Inputs",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of report or dashboard IDs.",
					},
					map[string]any{
						"name": "lastViewedAt",
						"title": "Last Viewed At",
						"type": "`$STRING`",
						"short": "The date and time when the dashboard was last viewed, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "lastViewedByUserId",
						"title": "Last Viewed By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last viewed the dashboard.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the dashboard.",
					},
					map[string]any{
						"name": "ownerUserId",
						"title": "Owner User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who owns the dashboard.",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "Array of objects representing the tags that the dashboard is tagged with.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time when the dashboard was last updated, in ISO 8601 format.",
						"format": "date-time",
					},
					map[string]any{
						"name": "updatedByUserId",
						"title": "Updated By User Id",
						"type": "`$STRING`",
						"short": "The ID of the user who last updated the dashboard.",
					},
					map[string]any{
						"name": "widgets",
						"title": "Widgets",
						"type": "`$ARRAY`",
						"short": "An array of objects representing the widgets on the dashboard.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/batch/widgets",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"batch",
									"widgets",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"widgets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
										"reportId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "report_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/analytics/reporting/2027-03-beta/dashboards/{dashboardId}/widgets/{reportId}",
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
								"parts": []any{
									"analytics",
									"reporting",
									"2027-03-beta",
									"dashboards",
									"{dashboard_id}",
									"widgets",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dashboardId": "dashboard_id",
										"reportId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "dashboard_id",
											"orig": "dashboard_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
										map[string]any{
											"name": "id",
											"orig": "report_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": nil,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dashboard_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.dashboard",
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
