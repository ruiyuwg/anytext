# Provider Filtering & Ordering

By default, AI Gateway dynamically chooses providers based on recent uptime and latency. You can override this behavior to control which providers handle your requests and in what order using `order` and `only` in `providerOptions.gateway`.

## Provider ordering

Use the `order` array to specify the sequence in which providers should be attempted. Providers are specified using their `slug` string. You can find the slugs in the [table of available providers](/docs/ai-gateway/models-and-providers/provider-options#available-providers).

You can also copy the provider slug using the copy button next to a provider's name on a model's detail page:

**Through the Vercel Dashboard:**

1. Click the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) tab
2. Click [**Model List**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fmodels\&title=Go+to+Model+List) on the left
3. Click a model entry in the list

**Through the AI Gateway site:**

Visit a model's page on the [AI Gateway models page](https://vercel.com/ai-gateway/models) (e.g., [Claude Sonnet 4.5](https://vercel.com/ai-gateway/models/anthropic-claude-sonnet-4-5)).

The bottom section of the page lists the available providers for that model. The copy button next to a provider's name will copy their slug for pasting.

### Getting started

- ### Install the AI SDK package
  First, ensure you have the necessary package installed:
  ```bash filename="Terminal"
  pnpm install ai
  ```

- ### Configure the provider order in your request
  Use the `providerOptions.gateway.order` configuration:
  ```typescript filename="app/api/chat/route.ts" {7-11}
  import { streamText } from 'ai';

  export async function POST(request: Request) {
    const { prompt } = await request.json();

    const result = streamText({
      model: 'anthropic/claude-sonnet-4.6',
      prompt,
      providerOptions: {
        gateway: {
          order: ['bedrock', 'anthropic'], // Try Amazon Bedrock first, then Anthropic
        },
      },
    });

    return result.toUIMessageStreamResponse();
  }
  ```
  In this example:
  - The gateway will first attempt to use Amazon Bedrock to serve the Claude 4 Sonnet model
  - If Amazon Bedrock is unavailable or fails, it will fall back to Anthropic
  - Other providers (like Vertex AI) are still available but will only be used after the specified providers

- ### Test the routing behavior
  You can monitor which provider you used by checking the provider metadata in the response.
  ```typescript filename="app/api/chat/route.ts" {16-17}
  import { streamText } from 'ai';

  export async function POST(request: Request) {
    const { prompt } = await request.json();

    const result = streamText({
      model: 'anthropic/claude-sonnet-4.6',
      prompt,
      providerOptions: {
        gateway: {
          order: ['bedrock', 'anthropic'],
        },
      },
    });

    // Log which provider was actually used
    console.log(JSON.stringify(await result.providerMetadata, null, 2));

    return result.toUIMessageStreamResponse();
  }
  ```

### Provider metadata output

```json
{
  "anthropic": {},
  "gateway": {
    "routing": {
      "originalModelId": "anthropic/claude-sonnet-4.6",
      "resolvedProvider": "anthropic",
      "resolvedProviderApiModelId": "claude-sonnet-4.6",
      "internalResolvedModelId": "anthropic:claude-sonnet-4.6",
      "fallbacksAvailable": ["bedrock", "vertex"],
      "internalReasoning": "Selected anthropic as preferred provider for claude-sonnet-4.6. 2 fallback(s) available: bedrock, vertex",
      "planningReasoning": "System credentials planned for: anthropic. Total execution order: anthropic(system)",
      "canonicalSlug": "anthropic/claude-sonnet-4.6",
      "finalProvider": "anthropic",
      "attempts": [
        {
          "provider": "anthropic",
          "internalModelId": "anthropic:claude-sonnet-4.6",
          "providerApiModelId": "claude-sonnet-4.6",
          "credentialType": "system",
          "success": true,
          "startTime": 458753.407267,
          "endTime": 459891.705775
        }
      ],
      "modelAttemptCount": 1,
      "modelAttempts": [
        {
          "modelId": "anthropic/claude-sonnet-4.6",
          "canonicalSlug": "anthropic/claude-sonnet-4.6",
          "success": true,
          "providerAttemptCount": 1,
          "providerAttempts": [
            {
              "provider": "anthropic",
              "internalModelId": "anthropic:claude-sonnet-4.6",
              "providerApiModelId": "claude-sonnet-4.6",
              "credentialType": "system",
              "success": true,
              "startTime": 458753.407267,
              "endTime": 459891.705775
            }
          ]
        }
      ],
      "totalProviderAttemptCount": 1
    },
    "cost": "0.0045405",
    "marketCost": "0.0045405",
    "generationId": "gen_01K8KPJ0FZA7172X6CSGNZGDWY"
  }
}
```

The `gateway.cost` value is the amount debited from your AI Gateway Credits balance for this request. It is returned as a decimal string. The `gateway.marketCost` represents the market rate cost for the request. The `gateway.generationId` is a unique identifier for this generation that can be used with the [Generation Lookup API](/docs/ai-gateway/capabilities/usage#generation-lookup). For more on pricing see .

In cases where your request encounters issues with one or more providers or if your BYOK credentials fail, you'll find error detail in the `attempts` field of the provider metadata:

```json
"attempts": [
  {
    "provider": "novita",
    "internalModelId": "novita:zai-org/glm-4.5",
    "providerApiModelId": "zai-org/glm-4.5",
    "credentialType": "byok",
    "success": false,
    "error": "Unauthorized",
    "startTime": 1754639042520,
    "endTime": 1754639042710
  },
  {
    "provider": "novita",
    "internalModelId": "novita:zai-org/glm-4.5",
    "providerApiModelId": "zai-org/glm-4.5",
    "credentialType": "system",
    "success": true,
    "startTime": 1754639042710,
    "endTime": 1754639043353
  }
]
```

## Provider filtering

### Restrict providers with the `only` filter

Use the `only` array to restrict routing to a specific subset of providers. Providers are specified by their slug and are matched against the model's available providers.

```typescript filename="app/api/chat/route.ts" {9-12}
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    prompt,
    providerOptions: {
      gateway: {
        only: ['bedrock', 'anthropic'], // Only consider these providers.
        // This model is also available via 'vertex', but it won't be considered.
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this example:

- **Restriction**: Only `bedrock` and `anthropic` will be considered for routing and fallbacks.
- **Error on mismatch**: If none of the specified providers are available for the model, the request fails with an error indicating the allowed providers.

### Using `only` together with `order`

When both `only` and `order` are provided, the `only` filter is applied first to define the allowed set, and then `order` defines the priority within that filtered set. Practically, the end result is the same as taking your `order` list and intersecting it with the `only` list.

```typescript filename="app/api/chat/route.ts" {9-12}
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    prompt,
    providerOptions: {
      gateway: {
        only: ['anthropic', 'vertex'],
        order: ['vertex', 'bedrock', 'anthropic'],
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

The final order will be `vertex → anthropic` (providers listed in `order` but not in `only` are ignored).

## Quick reference

| Option  | Type       | Description                                          |
| ------- | ---------- | ---------------------------------------------------- |
| `order` | `string[]` | Provider slugs in the order they should be attempted |
| `only`  | `string[]` | Restrict routing to only these provider slugs        |

Both options are set under `providerOptions.gateway` in the AI SDK or `providerOptions` in the REST API. See [Available Providers](/docs/ai-gateway/models-and-providers/provider-options#available-providers) for the full list of provider slugs.

title: "Provider Options"
description: "Configure provider routing, ordering, and fallback behavior in Vercel AI Gateway"
last\_updated: "2026-03-23T09:40:04.586Z"
source: "https://vercel.com/docs/ai-gateway/models-and-providers/provider-options"
