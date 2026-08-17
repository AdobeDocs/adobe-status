---
title: MCP Server - Adobe Status API
description: Overview of the Adobe Status MCP server
---

<Hero slots="heading, text"/>

# Adobe Status MCP Server

Query and act on Adobe Status data conversationally, using the [Model Context Protocol](https://modelcontextprotocol.io).

<Resources slots="heading, links"/>

#### Resources

* [Get Started](/adobe-status/mcp/get-started/)
* [Tools Reference](/adobe-status/mcp/tools/)
* [Authentication](/adobe-status/mcp/authentication/)

## Overview

The Adobe Status MCP server exposes Adobe Status data — public incidents and maintenance, the services registry, and per-user subscription management — as MCP tools, so an LLM client like Claude Desktop, Cursor, or a Slack bot can query and act on Adobe Status data.

It uses the same data that powers status.adobe.com and the Adobe Status API, and makes it available as callable tools instead of REST endpoints.

Adobe Status MCP server supports two transports:

* **stdio** — for local clients such as Claude Desktop or Cursor, run as a subprocess.
* **streamable-http** — mounted at `/mcp` inside a FastAPI app, for shared/hosted deployments.


See [Get Started](/adobe-status/mcp/get-started/) for installation and running the server, [Tools Reference](/adobe-status/mcp/tools/) for the full list of tools and parameters, and [Authentication](/adobe-status/mcp/authentication/) for how the subscription tools authenticate.

<div style={{ height: '24px' }} />
