---
title: Get Started - Adobe Status MCP Server
description: How to install, configure, and run the Adobe Status MCP server
---

# Get Started with the Adobe Status MCP Server

The MCP server is a Python project managed with [uv](https://docs.astral.sh/uv/) (Python `>=3.13,<3.14`). It is not published as an npm package.

## Install

```bash
uv venv
source .venv/bin/activate
cp env.example .env
```

Fill in the placeholder values in `.env` before running the server — see [Configuration](#configuration) below.

## Running the server

Two entry points are defined via the project's `Makefile`:

### stdio transport (local clients)

```bash
make run-mcp-stdio
# equivalent to: uv run python -m mcp_server
```

Use this mode for local clients such as Claude Desktop or Cursor, which launch the server as a subprocess and communicate over stdio.

### streamable-http transport (hosted/shared)

```bash
make run-api-server
# equivalent to: uvicorn api_server.server:app
```

Runs a FastAPI app on port 8081 with the MCP server mounted at `/mcp`, plus `/ping` and `/health` endpoints. Use this mode for shared deployments (Docker, Adobe's Ethos platform).

### Docker

```bash
make build
make run-docker
# or: make run-dc   (docker compose)
```

## Client configuration examples

**Cursor, HTTP transport:**

```json
{
  "statusmcp": {
    "url": "http://localhost:8080/mcp",
    "transport": "streamable-http"
  }
}
```

**Cursor, Docker:**

```json
{
  "statusmcp": {
    "command": "docker",
    "args": ["run", "-i", "--rm", "--name", "statusmcp", "statusmcp"]
  }
}
```

**Cursor, stdio:**

```json
{
  "statusmcp": {
    "command": "uv",
    "args": ["run", "--directory", "{ROOT_OF_YOUR_REPO}", "python", "-m", "mcp_server"]
  }
}
```

**Debugging with MCP Inspector:**

```bash
npx @modelcontextprotocol/inspector uv run mcp-server
```

## Configuration

All configuration is via environment variables (see `env.example`):

| Variable | Default | Description |
|---|---|---|
| `PORT` | `8080` | HTTP server port |
| `LOG_LEVEL` | `INFO` | Logging verbosity |
| `CACHE_TTL_SECONDS` | `300` | In-memory cache TTL for the underlying event and services data |
| `DATA_FRESHNESS_THRESHOLD_HOURS` | `4` | Age threshold before data is flagged as stale |

**Auth:**

| Variable | Default | Description |
|---|---|---|
| `IMS_ACCESS_TOKEN` | — | Static IMS bearer token fallback for stdio clients — see [Authentication](/adobe-status/mcp/authentication/) |

<InlineAlert slots="text"/>

`README.md` in the source repo describes this as "a basic MCP server implementation... use it as a starting point" — that's boilerplate left over from the project template. The server is a fully built, Adobe Status–specific implementation named `adobe-status`.
