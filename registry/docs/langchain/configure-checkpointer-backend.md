# Configure checkpointer backend

Source: https://docs.langchain.com/langsmith/configure-checkpointer

Configure Agent Server to use PostgreSQL, MongoDB, or a custom implementation for checkpoint storage.

[Agent Server](/langsmith/agent-server) persists graph state using a checkpointer backend. By default, LangSmith stores checkpoints in PostgreSQL alongside other server data. You can switch to MongoDB or provide a custom implementation.

Regardless of the checkpointer backend, LangSmith always requires PostgreSQL for threads, runs, assistants, crons, and the [memory store](/oss/python/langgraph/persistence#memory-store). The checkpointer backend only controls where checkpoint data is stored.

## Available backends

| Backend   | Storage       | Configuration                                                 | Use case                                                                            |
| --------- | ------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `default` | PostgreSQL    | None (built-in)                                               | Standard deployments                                                                |
| `mongo`   | MongoDB       | `langgraph.json` or `LS_DEFAULT_CHECKPOINTER_BACKEND` env var | Teams with existing MongoDB infrastructure                                          |
| `custom`  | User-provided | `langgraph.json`                                              | Custom storage backends (see [custom checkpointer](/langsmith/custom-checkpointer)) |

## Set up MongoDB checkpointing

Requires Agent Server v0.7.64 or later.

### Prerequisites

- A MongoDB **replica set** (standalone `mongod` is not supported). This can be a self-managed replica set, a `mongos` router, or a managed service like MongoDB Atlas.
- A connection URI that includes the database name in the path (e.g., `/langgraph`).

### Select the backend

Set the backend to `"mongo"` using one of these methods:

**In `langgraph.json`** (app-level—bundled with your application code):

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
    "agent": "./agent.py:graph"
  },
  "checkpointer": {
    "backend": "mongo",
    "ttl": {
      "strategy": "delete",
      "default_ttl": 43200,
      "sweep_interval_minutes": 10
    }
  }
}
```

**Via environment variable** (platform-level—for operators managing standalone deployments):

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LS_DEFAULT_CHECKPOINTER_BACKEND=mongo
```

The environment variable sets the default backend for agent servers that don't specify one in `langgraph.json`. If `langgraph.json` includes a `backend` value, it takes precedence.

### Provide the MongoDB URI

Set the `LS_MONGODB_URI` environment variable at deploy time:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LS_MONGODB_URI="mongodb://user:password@host:27017/langgraph?replicaSet=rs0"
```

### Connection URI requirements

The URI must:

- Point to a replica set member or `mongos` router
- Include the target database name in the path

Valid examples:

```
mongodb://user:password@host:27017/langgraph?replicaSet=rs0
mongodb://host1:27017,host2:27017,host3:27017/mydb?replicaSet=prod-rs
mongodb+srv://user:password@cluster.example.net/langgraph
```

### Deploy by environment

````
The [langgraph-cloud Helm chart](https://github.com/langchain-ai/helm/blob/main/charts/langgraph-cloud/README.md) (v0.2.6+) has built-in MongoDB support. Enable it in your values file:

**Bundled MongoDB** (development and testing):

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mongo:
  enabled: true
  resources:
    requests:
      cpu: 500m
      memory: 1Gi
  persistence:
    size: 8Gi
```

The chart deploys a single-node MongoDB replica set and automatically configures the server to use it.

**External MongoDB** (production):

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mongo:
  enabled: true
  external:
    enabled: true
    connectionUrl: "mongodb://user:password@mongo.example.net:27017/langgraph?replicaSet=rs0"
```

Or reference an existing Kubernetes secret:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mongo:
  enabled: true
  external:
    enabled: true
    existingSecretName: "my-mongo-secret"
```

The secret must contain a `mongodb_connection_url` key.



If your `langgraph.json` already sets `backend` to `"mongo"`, you only need to provide the URI. Otherwise, set both environment variables:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
docker run \
    --env-file .env \
    -p 8123:8000 \
    -e REDIS_URI="redis://redis:6379" \
    -e DATABASE_URI="postgres://postgres:postgres@postgres:5432/postgres" \
    -e LS_DEFAULT_CHECKPOINTER_BACKEND=mongo \
    -e LS_MONGODB_URI="mongodb://mongo:27017/langgraph?replicaSet=rs0" \
    -e LANGSMITH_API_KEY="..." \
    my-image
```

See the [standalone server guide](/langsmith/deploy-standalone-server) for a full Docker Compose example with MongoDB.



Set `backend` to `"mongo"` in your `langgraph.json`, then add `LS_MONGODB_URI` as an environment variable in your deployment settings in the LangSmith UI.

Your MongoDB instance must be reachable from the Cloud data plane. A managed service like [MongoDB Atlas](https://www.mongodb.com/atlas) works well for this.

PostgreSQL is still auto-provisioned for non-checkpoint data.
````

## Default (PostgreSQL)

PostgreSQL is the default checkpointer backend. No configuration is needed. To use a custom PostgreSQL instance, set the [`POSTGRES_URI_CUSTOM`](/langsmith/env-var#postgres_uri_custom) environment variable.

## Custom checkpointer

To use a storage backend other than PostgreSQL or MongoDB, implement a custom [BaseCheckpointSaver](https://reference.langchain.com/python/langgraph/checkpoints/#langgraph.checkpoint.base.BaseCheckpointSaver). See [Add custom checkpointer](/langsmith/custom-checkpointer) for details.

## Related

- [Configure TTLs](/langsmith/configure-ttl) for checkpoint and store item expiration
- [Persistence concepts](/oss/python/langgraph/persistence) in LangGraph
- [Data plane](/langsmith/data-plane) architecture
- [Environment variables](/langsmith/env-var) reference

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/configure-checkpointer.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
