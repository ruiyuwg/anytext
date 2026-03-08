### Examples

````
#### Basic configuration

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "chat.graph:graph"
  }
}
```

#### Using Wolfi base images

You can specify the Linux distribution for your base image using the `image_distro` field. Valid options are `debian`, `wolfi`, `bookworm`, or `bullseye`. Wolfi is the recommended option as it provides smaller and more secure images. This is available in `langgraph-cli>=0.2.11`.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "chat.graph:graph"
  },
  "image_distro": "wolfi"
}
```

#### Adding semantic search to the store

All deployments come with a DB-backed BaseStore. Adding an "index" configuration to your `langgraph.json` will enable [semantic search](/langsmith/semantic-search) within the BaseStore of your deployment.

The `index.fields` configuration determines which parts of your documents to embed:

* If omitted or set to `["$"]`, the entire document will be embedded
* To embed specific fields, use JSON path notation: `["metadata.title", "content.text"]`
* Documents missing specified fields will still be stored but won't have embeddings for those fields
* You can still override which fields to embed on a specific item at `put` time using the `index` parameter

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
    "memory_agent": "./agent/graph.py:graph"
  },
  "store": {
    "index": {
      "embed": "openai:text-embedding-3-small",
      "dims": 1536,
      "fields": ["$"]
    }
  }
}
```


  **Common model dimensions**

  * `openai:text-embedding-3-large`: 3072
  * `openai:text-embedding-3-small`: 1536
  * `openai:text-embedding-ada-002`: 1536
  * `cohere:embed-english-v3.0`: 1024
  * `cohere:embed-english-light-v3.0`: 384
  * `cohere:embed-multilingual-v3.0`: 1024
  * `cohere:embed-multilingual-light-v3.0`: 384


#### Semantic search with a custom embedding function

If you want to use semantic search with a custom embedding function, you can pass a path to a custom embedding function:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
    "memory_agent": "./agent/graph.py:graph"
  },
  "store": {
    "index": {
      "embed": "./embeddings.py:embed_texts",
      "dims": 768,
      "fields": ["text", "summary"]
    }
  }
}
```

The `embed` field in store configuration can reference a custom function that takes a list of strings and returns a list of embeddings. Example implementation:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# embeddings.py
def embed_texts(texts: list[str]) -> list[list[float]]:
    """Custom embedding function for semantic search."""
    # Implementation using your preferred embedding model
    return [[0.1, 0.2, ...] for _ in texts]  # dims-dimensional vectors
```

#### Adding custom authentication

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "chat.graph:graph"
  },
  "auth": {
    "path": "./auth.py:auth",
    "openapi": {
      "securitySchemes": {
        "apiKeyAuth": {
          "type": "apiKey",
          "in": "header",
          "name": "X-API-Key"
        }
      },
      "security": [{ "apiKeyAuth": [] }]
    },
    "disable_studio_auth": false
  }
}
```

See the [authentication conceptual guide](/langsmith/auth) for details, and the [setting up custom authentication](/langsmith/set-up-custom-auth) guide for a practical walk through of the process.



#### Configuring store item Time-to-Live

You can configure default data expiration for items/memories in the BaseStore using the `store.ttl` key. This determines how long items are retained after they are last accessed (with reads potentially refreshing the timer based on `refresh_on_read`). Note that these defaults can be overwritten on a per-call basis by modifying the corresponding arguments in `get`, `search`, etc.

The `ttl` configuration is an object containing optional fields:

* `refresh_on_read`: If `true` (the default), accessing an item via `get` or `search` resets its expiration timer. Set to `false` to only refresh TTL on writes (`put`).
* `default_ttl`: The default lifespan of an item in **minutes**. Applies only to newly created items; existing items are not modified. If not set, items do not expire by default.
* `sweep_interval_minutes`: How frequently (in minutes) the system should run a background process to delete expired items. If not set, sweeping does not occur automatically.

Here is an example enabling a 7-day TTL (10080 minutes), refreshing on reads, and sweeping every hour:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "memory_agent": "./agent/graph.py:graph"
  },
  "store": {
    "ttl": {
      "refresh_on_read": true,
      "sweep_interval_minutes": 60,
      "default_ttl": 10080
    }
  }
}
```



#### Configuring checkpoint Time-to-Live

You can configure the time-to-live (TTL) for checkpoints using the `checkpointer` key. This determines how long checkpoint data is retained before being automatically handled according to the specified strategy (e.g., deletion). Two optional sub-objects are supported:

* `ttl`: Includes `strategy`, `sweep_interval_minutes`, and `default_ttl`, which collectively set how checkpoints expire.
* `serde` *(Agent server 0.5+)* : Lets you control deserialization behavior for checkpoint payloads.

Here's an example setting a default TTL of 30 days (43200 minutes):

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "chat.graph:graph"
  },
  "checkpointer": {
    "ttl": {
      "strategy": "delete",
      "sweep_interval_minutes": 10,
      "default_ttl": 43200
    }
  }
}
```

In this example, checkpoints older than 30 days will be deleted, and the check runs every 10 minutes.

#### Configuring checkpointer serde

The `checkpointer.serde` object shapes deserialization:

* `allowed_json_modules` defines an allow list for custom Python objects you want the server to be able to deserialize from payloads saved in "json" mode. This is a list of `[path, to, module, file, symbol]` sequences. If omitted, only LangChain-safe defaults are allowed. You can unsafely set to `true` to allow any module to be deserialized.
* `pickle_fallback`: Whether to fall back to pickle deserialization when JSON decoding fails.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "checkpointer": {
    "serde": {
      "allowed_json_modules": [
        ["my_agent", "auth", "SessionState"]
      ]
    }
  }
}
```

#### Customizing HTTP middleware and headers

The `http` block lets you fine-tune request handling:

* `middleware_order`: Choose `"auth_first"` to run authentication before your middleware, or `"middleware_first"` (default) to invert that order.
* `enable_custom_route_auth`: Extend authentication to routes you mount through `http.app`.
* `configurable_headers` / `logging_headers`: Each accepts an object with optional `includes` and `excludes` arrays; wildcards are supported and exclusions run before inclusions.
* `cors`: Customize your server's CORS (Cross-Origin Resource Sharing) configuration. Example `langgraph.json` file for configuring CORS:

  ```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  {
    ...
    "http": {
      "cors": {
        "allow_origins": ["https://example.com", "https://app.example.com"],
        "allow_methods": ["GET", "POST"],
        "allow_headers": ["Authorization", "Content-Type"],
        "allow_credentials": true,
        "allow_origin_regex": "^https://.*\\.example\\.com$",
        "expose_headers": ["x-pagination-total", "x-pagination-next", "x-request-id"],
        "max_age": 600
      }
    },
    ...
  }
  ```

  
    Customizing your server's CORS configuration will override the functionality of setting the [`CORS_ALLOW_ORIGINS` environment variable](/langsmith/env-var#cors_allow_origins).
  

#### Configuring webhooks

You can configure custom headers and URL restrictions for outbound webhook requests:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "chat.graph:graph"
  },
  "webhooks": {
    "headers": {
      "Authorization": "Bearer ${{ env.LG_WEBHOOK_TOKEN }}"
    },
    "url": {
      "allowed_domains": ["*.mycompany.com"],
      "require_https": true
    }
  }
}
```

See [Use webhooks](/langsmith/use-webhooks#add-headers-to-webhook-requests) for details on header configuration, environment variable templating, and URL restrictions.



#### Pinning API version

*(Added in v0.3.7)*

You can pin the API version of the Agent Server by using the `api_version` key. This is useful if you want to ensure that your server uses a specific version of the API.
By default, builds in Cloud deployments use the latest stable version of the server. This can be pinned by setting the `api_version` key to a specific version.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "chat.graph:graph"
  },
  "api_version": "0.2"
}
```



#### Basic configuration

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "graphs": {
    "chat": "./src/graph.ts:graph"
  }
}
```



#### Pinning API version

*(Added in v0.3.7)*

You can pin the API version of the Agent Server by using the `api_version` key. This is useful if you want to ensure that your server uses a specific version of the API.
By default, builds in Cloud deployments use the latest stable version of the server. This can be pinned by setting the `api_version` key to a specific version.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "./src/chat/graph.ts:graph"
  },
  "api_version": "0.2"
}
```
````
