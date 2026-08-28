---
title: Tools Reference - Adobe Status MCP Server
description: Reference for all tools exposed by the Adobe Status MCP server
---

# Tools Reference

The MCP server exposes only tools (no MCP resources or prompts). Each tool returns a JSON string.

We recommend calling `get_status_summary` first to get a high-level view before drilling into `get_events` with filters.

## get_status_summary

High-level dashboard: open incident counts by impact/cloud/product/region, plus active and scheduled maintenance counts. No parameters.

**Example call:**

```python
get_status_summary()
```

**Example response:**

```json
{
  "data_as_of": "2026-07-24T10:00:00Z",
  "open_incidents": {
    "count": 2,
    "by_impact": { "major": 1, "minor": 1 },
    "clouds_affected": ["Document Cloud", "Experience Cloud"],
    "products_affected": ["Adobe Acrobat Sign", "Adobe Experience Manager"],
    "regions_affected": ["Americas", "EMEA"]
  },
  "active_maintenance": {
    "count": 1,
    "products_affected": ["Adobe Analytics"]
  },
  "scheduled_maintenance": {
    "count": 3
  }
}
```

## get_services_info

The Adobe Status services registry — the clouds → products → offerings → services → environments → regions hierarchy.

| Parameter | Description |
|---|---|
| `cloud_id` / `cloud_name` | Filter by cloud |
| `product_id` / `product_name` | Filter by product |
| `offering_id` / `offering_name` | Filter by offering |
| `service_id` / `service_name` | Filter by service |
| `environment_id` / `environment_name` | Filter by environment. `environment_id` is the only environment identifier you need — pass it straight into `create_subscription`'s `environments` list to subscribe. |
| `region_id` | Filter by region |
| `show_environment` | Boolean |
| `entity_type` | `clouds`/`products`/`product_offerings`/`services`/`environments`/`regions`/`all` |
| `include_hierarchy` | Default `true` |

**Example call:**

```python
get_services_info(product_name="Adobe Experience Manager")
```

**Example response:**

```json
{
  "clouds": {
    "503461": { "name": "Experience Cloud", "cloudProducts": ["503472"] }
  },
  "products": {
    "503472": {
      "name": "Adobe Experience Manager",
      "showEnvironment": true,
      "productOfferings": ["512801"],
      "productServices": ["301"]
    }
  },
  "offerings": {
    "512801": { "name": "AEM as a Cloud Service", "services": ["301"] }
  },
  "services": {
    "301": { "name": "Author Service", "regionId": ["EMEA", "Americas"], "environments": ["4001"] }
  },
  "environments": {
    "4001": { "name": "Production" }
  },
  "regions": {
    "EMEA": { "name": "EMEA" },
    "Americas": { "name": "Americas" }
  },
  "metadata": {
    "clouds_count": 1,
    "products_count": 1,
    "offerings_count": 1,
    "services_count": 1,
    "environments_count": 1,
    "regions_count": 2
  }
}
```

<InlineAlert slots="text"/>

`bso_id`, `group_id`, and `include_bso_mappings` are internal parameters used to resolve Adobe's internal Business Service Offering (BSO) records — they're implementation details you don't need to know about or pass. `environment_id` is the only environment identifier that matters for filtering here and for subscribing via `create_subscription`; any internal ID translation happens automatically.

## get_events

Public Adobe Status incidents and maintenance events, with filtering. Use `get_services_info` to look up `cloud_id`/`product_id` values to filter by.

| Parameter | Description |
|---|---|
| `event_id` | Filter by a specific event |
| `event_type` | `incident`, `maintenance`, or `announcement` |
| `cloud_id` / `cloud_name` | Filter by cloud |
| `product_id` / `product_name` | Filter by product |
| `status` | Maintenance: `scheduled`/`started`/`completed`. Incidents: `opened`/`closed`/`dismissed` |
| `start_time_from` / `start_time_to` | ISO 8601 range |
| `end_time_from` / `end_time_to` | ISO 8601 range |
| `impact` | Incidents: `potential`/`major`/`minor`/`trivial`. Maintenance: `normal`/`urgent` |
| `impact_scope` | `high`/`medium`/`low` |
| `services_impacted` | Substring match |
| `environments_impacted` | Substring match |
| `regions_impacted` | Substring match |
| `iscfs` | Boolean — Customer Facing Service flag |
| `limit` | Default `100`, max `1000` |

**Example call:**

```python
get_events(
    event_type="incident",
    product_name="Adobe Experience Manager",
    status="opened",
    regions_impacted="EMEA",
    limit=10
)
```

**Example response:**

```json
{
  "events": [
    {
      "event_id": "202601150042",
      "event_type": "incident",
      "cloud_id": "503461",
      "cloud_name": "Experience Cloud",
      "product_id": "503472",
      "product_name": "Adobe Experience Manager",
      "status": "opened",
      "impact": "major",
      "impact_scope": "high",
      "services_impacted": "Author Service, Publish Service",
      "environments_impacted": "Production",
      "regions_impacted": "EMEA",
      "iscfs": true,
      "start_time": "2026-07-24T09:12:00Z",
      "end_time": null
    }
  ],
  "total": 1,
  "filtered": 1,
  "data_as_of": "2026-07-24T10:00:00Z"
}
```

## get_subscriptions

Returns the authenticated user's current Adobe Status subscriptions (product, cloud name, event type, regions, product offerings, environments, notification settings). No parameters besides the request context. Requires an IMS bearer token — see [Authentication](/adobe-status/mcp/authentication/).

**Example call:**

```python
get_subscriptions()
```

**Example response:**

```json
{
  "subscriptions": [
    {
      "product": { "id": "503491", "name": "Adobe Marketo Engage" },
      "cloudName": "Experience Cloud",
      "eventType": ["1", "2", "4"],
      "event_type_names": ["Major Service Issue", "Minor Service Issue", "Service Maintenance"],
      "regions": [],
      "productOfferings": [],
      "environments": [{ "id": "4001", "name": "Production" }]
    }
  ],
  "slackNotificationEnabled": true,
  "teamsNotificationEnabled": false,
  "timeZone": "America/Los_Angeles",
  "language": "English (United States)"
}
```

<InlineAlert slots="text"/>

`environments[].id`/`.name` always reflect the same `environment_id`/environment name you'd get from `get_services_info` — i.e. what you actually subscribed with. Internally these are resolved through Adobe's Business Service Offering (BSO) mapping, but that's transparent — you'll never see a `group_id`/`bso_id` here.

## create_subscription

Adds or updates subscriptions. Requires an IMS bearer token.

| Parameter | Description |
|---|---|
| `subscriptions` | List of `{product: {id, name}, eventType, regions, productOfferings, environments}`. `eventType` is a list of codes: `1`=major, `2`=minor, `4`=maintenance, `5`=announcements. `environments`/`productOfferings[].environments` (for BSO-managed products like Marketo and Sign) are `{id, name}` — use the `environment_id` returned by `get_services_info` directly as `id`; it's translated to Adobe's internal subscription ID automatically. |
| `replace` | Boolean — `true` replaces matched subscriptions, `false` unions with existing ones |
| `time_zone` | User's time zone |
| `language` | Notification language |
| `slack_notification_enabled` / `teams_notification_enabled` | Booleans |

**Example call:**

```python
create_subscription(
    subscriptions=[
        {
            "product": { "id": "503472", "name": "Adobe Experience Manager" },
            "eventType": ["1", "2", "4"],
            "regions": [{ "id": "Americas" }],
            "productOfferings": [],
            "environments": []
        }
    ],
    replace=False
)
```

**Example call — subscribing to a specific environment** (e.g. Marketo, Sign):

```python
create_subscription(
    subscriptions=[
        {
            "product": { "id": "503491", "name": "Adobe Marketo Engage" },
            "eventType": ["1", "2", "4"],
            "regions": [],
            "productOfferings": [],
            "environments": [{ "id": "4001", "name": "Production" }]
        }
    ],
    replace=False
)
```

**Example response:**

```json
{
  "success": true,
  "status_code": 200,
  "total": 4,
  "response": {
    "message": "Subscriptions updated successfully"
  }
}
```

## delete_subscription

Removes subscriptions — a whole product, specific offerings, or all subscriptions. Requires an IMS bearer token.

| Parameter | Description |
|---|---|
| `subscriptions` | List of subscriptions to remove. Omit this parameter to delete all subscriptions instead |
| `confirm_delete_all` | Must be `true` if `subscriptions` is omitted |

**Example call:**

```python
delete_subscription(
    subscriptions=[
        { "product": { "id": "503472" } }
    ]
)
```

**Example response:**

```json
{
  "success": true,
  "status_code": 200,
  "entries_removed": 1,
  "total": 3,
  "response": {
    "message": "Subscriptions updated successfully"
  }
}
```

<InlineAlert slots="text"/>

Deleting all subscriptions requires an explicit confirmation: call `delete_subscription(confirm_delete_all=True)` with no `subscriptions` argument. Omitting both returns an error: `{"error": "Set confirm_delete_all=True to delete all subscriptions."}`.
