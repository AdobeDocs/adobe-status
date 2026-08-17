---
title: Authentication - Adobe Status MCP Server
description: How the Adobe Status MCP server authenticates subscription tool calls
---

# Authentication

Most tools ([get_events](/adobe-status/mcp/tools/#get_events), [get_services_info](/adobe-status/mcp/tools/#get_services_info), [get_status_summary](/adobe-status/mcp/tools/#get_status_summary)) read data the server manages itself and require no per-caller credentials.

The three subscription tools — [get_subscriptions](/adobe-status/mcp/tools/#get_subscriptions), [create_subscription](/adobe-status/mcp/tools/#create_subscription), and [delete_subscription](/adobe-status/mcp/tools/#delete_subscription) — act on behalf of a specific Adobe user, so each call must carry that user's Adobe IMS bearer token.

## How the token is supplied

* **streamable-http transport** — the token is read from the `Authorization: Bearer <token>` header on each request.
* **stdio transport** — since a local stdio client can't send HTTP headers, the token instead comes from the static `IMS_ACCESS_TOKEN` environment variable set when the server starts.

If neither is present, the subscription tools return a JSON error:

```json
{
  "error": "No IMS token available. HTTP: send Authorization: Bearer <token>. STDIO: set IMS_ACCESS_TOKEN env var."
}
```

<InlineAlert slots="text"/>

Because a stdio server only has one static `IMS_ACCESS_TOKEN`, every call it makes acts as that one identity. Don't run a stdio deployment with a personal IMS token in a shared or multi-user context — use the streamable-http transport instead, so each caller supplies their own token via the `Authorization` header.

## Subscription API

Behind the scenes, the subscription tools call Adobe's live subscription REST API with the caller's IMS bearer token. That API is "replace-all," so `create_subscription` and `delete_subscription` do a read-merge-write (or read-filter-write) under the hood rather than a simple PATCH.
