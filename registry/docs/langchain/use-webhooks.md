# Use webhooks

Source: https://docs.langchain.com/langsmith/use-webhooks

Webhooks enable event-driven communication from your LangSmith application to external services. For example, you may want to issue an update to a separate service once an API call to LangSmith has finished running.

Many LangSmith endpoints accept a `webhook` parameter. If this parameter is specified by an endpoint that can accept POST requests, LangSmith will send a request at the completion of a run.

When working with LangSmith, you may want to use webhooks to receive updates after an API call completes. Webhooks are useful for triggering actions in your service once a run has finished processing. To implement this, you need to expose an endpoint that can accept `POST` requests and pass this endpoint as a `webhook` parameter in your API request.

Currently, the SDK does not provide built-in support for defining webhook endpoints, but you can specify them manually using API requests.

## Supported endpoints

The following API endpoints accept a `webhook` parameter:

| Operation            | HTTP Method | Endpoint                          |
| -------------------- | ----------- | --------------------------------- |
| Create Run           | `POST`      | `/thread/{thread_id}/runs`        |
| Create Thread Cron   | `POST`      | `/thread/{thread_id}/runs/crons`  |
| Stream Run           | `POST`      | `/thread/{thread_id}/runs/stream` |
| Wait Run             | `POST`      | `/thread/{thread_id}/runs/wait`   |
| Create Cron          | `POST`      | `/runs/crons`                     |
| Stream Run Stateless | `POST`      | `/runs/stream`                    |
| Wait Run Stateless   | `POST`      | `/runs/wait`                      |

In this guide, we’ll show how to trigger a webhook after streaming a run.

## Set up your assistant and thread

Before making API calls, set up your assistant and thread.

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph_sdk import get_client

client = get_client(url=<DEPLOYMENT_URL>)
assistant_id = "agent"
thread = await client.threads.create()
print(thread)
```



```js theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Client } from "@langchain/langgraph-sdk";

const client = new Client({ apiUrl: <DEPLOYMENT_URL> });
const assistantID = "agent";
const thread = await client.threads.create();
console.log(thread);
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
curl --request POST \
    --url <DEPLOYMENT_URL>/assistants/search \
    --header 'Content-Type: application/json' \
    --data '{ "limit": 10, "offset": 0 }' | jq -c 'map(select(.config == null or .config == {})) | .[0]' && \
curl --request POST \
    --url <DEPLOYMENT_URL>/threads \
    --header 'Content-Type: application/json' \
    --data '{}'
```
````

Example response:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
    "thread_id": "9dde5490-2b67-47c8-aa14-4bfec88af217",
    "created_at": "2024-08-30T23:07:38.242730+00:00",
    "updated_at": "2024-08-30T23:07:38.242730+00:00",
    "metadata": {},
    "status": "idle",
    "config": {},
    "values": null
}
```

## Use a webhook with a graph run

To use a webhook, specify the `webhook` parameter in your API request. When the run completes, LangSmith sends a `POST` request to the specified webhook URL.

For example, if your server listens for webhook events at `https://my-server.app/my-webhook-endpoint`, include this in your request:

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
input = { "messages": [{ "role": "user", "content": "Hello!" }] }

async for chunk in client.runs.stream(
    thread_id=thread["thread_id"],
    assistant_id=assistant_id,
    input=input,
    stream_mode="events",
    webhook="https://my-server.app/my-webhook-endpoint"
):
    pass
```



```js theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const input = { messages: [{ role: "human", content: "Hello!" }] };

const streamResponse = client.runs.stream(
  thread["thread_id"],
  assistantID,
  {
    input: input,
    webhook: "https://my-server.app/my-webhook-endpoint"
  }
);

for await (const chunk of streamResponse) {
  // Handle stream output
}
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
curl --request POST \
    --url <DEPLOYMENT_URL>/threads/<THREAD_ID>/runs/stream \
    --header 'Content-Type: application/json' \
    --data '{
        "assistant_id": <ASSISTANT_ID>,
        "input": {"messages": [{"role": "user", "content": "Hello!"}]},
        "webhook": "https://my-server.app/my-webhook-endpoint"
    }'
```
````

## Webhook payload

LangSmith sends webhook notifications in the format of a [Run](/langsmith/assistants#execution). See the [API Reference](https://docs.langchain.com/langsmith/server-api-ref#tag/assistants) for details. The request payload includes run input, configuration, and other metadata in the `kwargs` field.

## Secure webhooks

To ensure only authorized requests hit your webhook endpoint, consider adding a security token as a query parameter:

```
https://my-server.app/my-webhook-endpoint?token=YOUR_SECRET_TOKEN
```

Your server should extract and validate this token before processing requests.

## Add headers to webhook requests

Available in `langgraph-api>=0.5.36`.

You can configure static headers to include with all outbound webhook requests. This is useful for authentication, routing, or passing metadata to your webhook endpoint.

Add a `webhooks.headers` configuration to your `langgraph.json` file:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "webhooks": {
    "headers": {
      "X-Custom-Header": "my-value",
      "X-Environment": "production"
    }
  }
}
```

### Use environment variables in headers

To include secrets or environment-specific values without checking them into your configuration file, use the `${{ env.VAR }}` template syntax:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "webhooks": {
    "headers": {
      "Authorization": "Bearer ${{ env.LG_WEBHOOK_TOKEN }}"
    }
  }
}
```

For security, only environment variables starting with `LG_WEBHOOK_` can be referenced by default. This prevents accidentally leaking unrelated environment variables. You can customize this prefix using `env_prefix`:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "webhooks": {
    "env_prefix": "MY_APP_",
    "headers": {
      "Authorization": "Bearer ${{ env.MY_APP_SECRET }}"
    }
  }
}
```

Missing required environment variables will block server startup, ensuring you don't deploy with incomplete configuration.

## Restrict webhook destinations

Available in `langgraph-api>=0.5.36`.

For security or compliance purposes, you can restrict which URLs are valid webhook destinations using the `webhooks.url` configuration:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "webhooks": {
    "url": {
      "allowed_domains": ["*.mycompany.com", "api.trusted-service.com"],
      "require_https": true
    }
  }
}
```

Available options:

| Option             | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `allowed_domains`  | Hostname allowlist. Supports wildcards for subdomains (e.g., `*.mycompany.com`). |
| `require_https`    | Reject `http://` URLs when `true`.                                               |
| `allowed_ports`    | Explicit port allowlist. Defaults to 443 (https) and 80 (http).                  |
| `disable_loopback` | Disallow relative URLs (internal loopback calls) when `true`.                    |
| `max_url_length`   | Maximum permitted URL length in characters.                                      |

## Disable webhooks

As of `langgraph-api>=0.2.78`, developers can disable webhooks in the `langgraph.json` file:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "http": {
    "disable_webhooks": true
  }
}
```

This feature is primarily intended for self-hosted deployments, where platform administrators or developers may prefer to disable webhooks to simplify their security posture—especially if they are not configuring firewall rules or other network controls. Disabling webhooks helps prevent untrusted payloads from being sent to internal endpoints.

For full configuration details, refer to the [configuration file reference](/langsmith/cli?h=disable_webhooks#configuration-file).

## Test webhooks

You can test your webhook using online services like:

- **[Beeceptor](https://beeceptor.com/)** – Quickly create a test endpoint and inspect incoming webhook payloads.
- **[Webhook.site](https://webhook.site/)** – View, debug, and log incoming webhook requests in real time.

These tools help you verify that LangSmith is correctly triggering and sending webhooks to your service.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/use-webhooks.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
