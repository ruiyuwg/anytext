# Sandbox auth proxy

Source: https://docs.langchain.com/langsmith/sandbox-auth-proxy

Inject credentials into outbound API requests from sandboxes without hardcoding secrets.

Sandboxes are in private preview. APIs and features may change as we iterate. [Sign up for the waitlist](https://www.langchain.com/langsmith-sandboxes-waitlist?ref=docs.langchain.com) to get access.

The auth proxy lets sandbox code call external APIs (OpenAI, Anthropic, GitHub, etc.) without hardcoding credentials. When configured on a [template](/langsmith/sandbox-templates), a proxy sidecar automatically injects authentication headers into matching outbound requests using your tenant secrets.

You must configure your secrets (e.g., `OPENAI_API_KEY`) in your LangSmith [workspace](/langsmith/administration-overview#workspaces) settings before creating a template that references them.

## Configure auth proxy rules

Add a `proxy_config` when creating a template. Each rule specifies:

| Field            | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `match_hosts`    | Hosts to intercept (supports globs like `*.github.com`)           |
| `match_paths`    | Paths to match (empty = all paths)                                |
| `inject_headers` | Headers to add, using `${SECRET_KEY}` to reference tenant secrets |
| `no_proxy`       | Hosts to bypass the proxy entirely (e.g. `localhost`)             |

## Single API example

Create a template that automatically injects an OpenAI API key into outbound requests:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
curl -X POST "$LANGSMITH_ENDPOINT/api/v2/sandboxes/templates" \
  -H "x-api-key: $LANGSMITH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "openai-sandbox",
    "image": "python:3.12-slim",
    "resources": {"cpu": "500m", "memory": "512Mi", "storage": "2Gi"},
    "proxy_config": {
      "rules": [
        {
          "name": "openai-api",
          "match_hosts": ["api.openai.com"],
          "inject_headers": {
            "Authorization": "Bearer ${OPENAI_API_KEY}"
          }
        }
      ]
    }
  }'
```

Sandboxes created from this template can call OpenAI with no API key setup—the proxy injects it automatically.

## Multiple API example

Add multiple rules to authenticate with several services at once:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
curl -X POST "$LANGSMITH_ENDPOINT/api/v2/sandboxes/templates" \
  -H "x-api-key: $LANGSMITH_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "multi-api-sandbox",
    "image": "python:3.12-slim",
    "resources": {"cpu": "500m", "memory": "512Mi", "storage": "2Gi"},
    "proxy_config": {
      "rules": [
        {
          "name": "openai-api",
          "match_hosts": ["api.openai.com"],
          "inject_headers": {"Authorization": "Bearer ${OPENAI_API_KEY}"}
        },
        {
          "name": "anthropic-api",
          "match_hosts": ["api.anthropic.com"],
          "inject_headers": {
            "x-api-key": "${ANTHROPIC_API_KEY}",
            "anthropic-version": "2023-06-01"
          }
        },
        {
          "name": "github-api",
          "match_hosts": ["api.github.com"],
          "match_paths": ["/repos/*", "/user"],
          "inject_headers": {"Authorization": "Bearer ${GITHUB_TOKEN}"}
        }
      ],
      "no_proxy": ["localhost", "127.0.0.1"]
    }
  }'
```

## Configure via SDK

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langsmith.sandbox import SandboxClient

client = SandboxClient()

client.create_template(
    name="openai-sandbox",
    image="python:3.12-slim",
    proxy_config={
        "rules": [
            {
                "name": "openai-api",
                "match_hosts": ["api.openai.com"],
                "inject_headers": {
                    "Authorization": "Bearer ${OPENAI_API_KEY}"
                },
            }
        ]
    },
)
```

```ts TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { SandboxClient } from "langsmith/experimental/sandbox";

const client = new SandboxClient();

await client.createTemplate("openai-sandbox", {
  image: "python:3.12-slim",
  proxyConfig: {
    rules: [
      {
        name: "openai-api",
        matchHosts: ["api.openai.com"],
        injectHeaders: {
          Authorization: "Bearer ${OPENAI_API_KEY}",
        },
      },
    ],
  },
});
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/sandbox-auth-proxy.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
