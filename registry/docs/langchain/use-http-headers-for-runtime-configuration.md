# Use HTTP headers for runtime configuration

Source: https://docs.langchain.com/langsmith/configurable-headers

LangGraph allows runtime configuration to modify agent behavior and permissions dynamically. When using [LangSmith Deployment](/langsmith/deployment-quickstart), you can pass this configuration in the request body (`config`) or specific request headers. This enables adjustments based on user identity or other requests.

For privacy, control which headers are passed to the runtime configuration via the `http.configurable_headers` section in your [`langgraph.json`](/langsmith/application-structure#configuration-file) file.

Here's how to customize the included and excluded headers:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "http": {
    "configurable_headers": {
      "includes": ["x-user-id", "x-organization-id", "my-prefix-*"],
      "excludes": ["authorization", "x-api-key"]
    }
  }
}
```

The `includes` and `excludes` lists accept exact header names or patterns using `*` to match any number of characters. For your security, no other regex patterns are supported.

## Using within your graph

You can access the included headers in your graph using the `config` argument of any node.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def my_node(state, config):
  organization_id = config["configurable"].get("x-organization-id")
  ...
```

Or by fetching from context (useful in tools and or within other nested functions).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.config import get_config

def search_everything(query: str):
  organization_id = get_config()["configurable"].get("x-organization-id")
  ...
```

You can even use this to dynamically compile the graph.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# my_graph.py.
import contextlib

@contextlib.asynccontextmanager
async def generate_agent(config):
  organization_id = config["configurable"].get("x-organization-id")
  if organization_id == "org1":
    graph = ...
    yield graph
  else:
    graph = ...
    yield graph

```

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "graphs": {"agent": "my_grph.py:generate_agent"}
}
```

### Opt-out of configurable headers

If you'd like to opt-out of configurable headers, you can simply set a wildcard pattern in the `s` list:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "http": {
    "configurable_headers": {
      "excludes": ["*"]
    }
  }
}
```

This will exclude all headers from being added to your run's configuration.

Note that exclusions take precedence over inclusions.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/configurable-headers.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Include HTTP headers in server logs

Source: https://docs.langchain.com/langsmith/configurable-logs

By default, the [Agent Server](/langsmith/agent-server) omits HTTP headers from server logs for privacy reasons. However, logging request and correlation IDs can help you debug issues and trace requests across distributed systems. You can opt-in to logging headers for all API calls by modifying the `logging_headers` section in your [`langgraph.json`](/langsmith/application-structure#configuration-file) file.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "$schema": "https://langgra.ph/schema.json",
  "http": {
    "logging_headers": {
      "includes": ["request-id", "x-purchase-id", "*-trace-*"],
      "excludes": ["authorization", "x-api-key", "x-organization-id", "x-user-id"]
    }
  }
}
```

The `includes` and `excludes` lists accept exact header names or glob patterns using `*` as a wildcard to match any number of characters (case-insensitive). For your security, no other pattern types are supported.

Note that exclusions take precedence over inclusions. For example, if you include `*-id` but exclude `x-user-id`, the `x-user-id` header will not be logged.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/configurable-logs.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
