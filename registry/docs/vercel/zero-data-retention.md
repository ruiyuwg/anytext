# Zero Data Retention

Zero data retention (ZDR) is available on AI Gateway. Set `zeroDataRetention: true` in `providerOptions` for individual requests to ensure they are only routed to [ZDR-compliant providers](#zdr-providers-and-policies).

> **💡 Note:** If you're using [BYOK (Bring Your Own Key)](/docs/ai-gateway/byok) with AI
> Gateway, please be aware that AI Gateway cannot verify whether the provider is
> ZDR compliant since the request uses your own API key, your configuration, and
> agreement with the provider.

## Vercel

AI Gateway has a ZDR policy and does not retain prompts, outputs, or sensitive data. User data is immediately and permanently deleted after requests are completed. No action is needed on the user side.

## Providers

AI Gateway has agreements in place to offer ZDR with specific providers. A provider's default policy may not match with the status that AI Gateway has in place due to these agreements.

By default, AI Gateway does not route based on the data retention policy of providers.

> **💡 Note:** If we do not know a provider's ZDR stance or have not yet established an
> agreement with them, they are treated as non-ZDR-enabled. If ZDR is enabled
> for a request, it will not be routed through this provider.

## Per-request zero data retention

You can enforce ZDR on individual requests using the `zeroDataRetention` parameter in `providerOptions`. Set `zeroDataRetention` to `true` to ensure requests are only routed to providers that have zero data retention policies.

If no ZDR-compliant providers are available for the requested model, the request fails with an error:

```json
{
  "error": "No ZDR (Zero Data Retention) providers available for model: example/model-name. \
            Providers considered: provider-a, provider-b",
  "type": "no_providers_available",
  "statusCode": 400
}
```

When ZDR is enabled, the routing metadata in successful responses shows how AI Gateway filtered providers. The `planningReasoning` field indicates which providers were considered:

```json
{
  "gateway": {
    "routing": {
      "planningReasoning": "ZDR requested: 5 attempts → 2 ZDR attempts. \
                            ZDR execution order: anthropic(system) → bedrock(system)"
    }
  }
}
```

ZDR enforcement also applies to any fallback providers.

This per-request ZDR enforcement only applies for requests routed directly through AI Gateway (not BYOK). Since BYOK requests will go through your own API key, they fall under your current agreement with the respective provider, not the AI Gateway configuration with that AI provider.

### Using AI SDK

Set `zeroDataRetention` to `true` in `providerOptions`:

#### streamText

```typescript filename="zdr.ts" {9-13}
import type { GatewayProviderOptions } from '@ai-sdk/gateway';
import { streamText } from 'ai';

export async function POST(request: Request) {
  const result = streamText({
    model: 'zai/glm-4.7',
    prompt: 'Analyze this sensitive business data and provide insights.',
    providerOptions: {
      gateway: {
        zeroDataRetention: true,
      } satisfies GatewayProviderOptions,
    },
  });

  return result.toDataStreamResponse();
}
```

#### generateText

```typescript filename="zdr.ts" {9-13}
import type { GatewayProviderOptions } from '@ai-sdk/gateway';
import { generateText } from 'ai';

export async function POST(request: Request) {
  const { text } = await generateText({
    model: 'zai/glm-4.7',
    prompt: 'Analyze this sensitive business data and provide insights.',
    providerOptions: {
      gateway: {
        zeroDataRetention: true,
      } satisfies GatewayProviderOptions,
    },
  });

  return Response.json({ text });
}
```

### Using the Chat Completions API

Set `zeroDataRetention` to `true` in `providerOptions`:

#### TypeScript

```typescript filename="zdr.ts" {19-23}
import OpenAI from 'openai';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const openai = new OpenAI({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const completion = await openai.chat.completions.create({
  model: 'zai/glm-4.7',
  messages: [
    {
      role: 'user',
      content:
        'Tell me the history of the San Francisco Mission-style burrito in two paragraphs.',
    },
  ],
  providerOptions: {
    gateway: {
      zeroDataRetention: true, // Request only ZDR compliant providers
    },
  },
});
```

#### Python

```python filename="zdr.py" {16-20}
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("AI_GATEWAY_API_KEY"),
    base_url="https://ai-gateway.vercel.sh/v1",
)

completion = client.chat.completions.create(
    model="zai/glm-4.7",
    messages=[
        {
            "role": "user",
            "content": "Tell me the history of the San Francisco Mission-style burrito in two paragraphs.",
        }
    ],
    extra_body={
        "providerOptions": {
            "gateway": {"zeroDataRetention": True}  # Request only ZDR compliant providers
        }
    },
)
```

## ZDR providers and policies

Only the following providers offer ZDR on AI Gateway. Please review each provider's ZDR policy and terms carefully. A provider's default policy may not match with the status that AI Gateway has in place due to negotiated agreements. We are constantly coordinating and revising agreements to be able to enforce stricter retention policies for customers. The full terms of service are available for each provider on the [model pages](/ai-gateway/models).

In special cases where certain models or functionalities are excluded from a provider's ZDR policy, AI Gateway will return an error explaining why the request cannot be completed with ZDR enabled. See the table below for exclusions and special cases.

| Provider       | Details                                                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Amazon Bedrock | Zero data retention                                                                                                                                                                                                                                                                 |
| Anthropic      | Zero data retention                                                                                                                                                                                                                                                                 |
| Baseten        | Zero data retention                                                                                                                                                                                                                                                                 |
| Cerebras       | Zero data retention                                                                                                                                                                                                                                                                 |
| DeepInfra      | Zero data retention                                                                                                                                                                                                                                                                 |
| Fireworks      | Zero data retention                                                                                                                                                                                                                                                                 |
| Google Vertex  | Zero data retention. Excludes [Google Web Search](/docs/ai-gateway/web-search#google-web-search) (use [Enterprise Web Search](/docs/ai-gateway/web-search#enterprise-web-search) instead) and [Google Maps Grounding](https://ai-sdk.dev/providers/ai-sdk-providers/google-vertex). |
| Groq           | Zero data retention                                                                                                                                                                                                                                                                 |
| Mistral        | Zero data retention                                                                                                                                                                                                                                                                 |
| Parasail       | Zero data retention                                                                                                                                                                                                                                                                 |
| Together       | Zero data retention                                                                                                                                                                                                                                                                 |

title: "Chatbox"
description: "Use Chatbox with the AI Gateway."
last\_updated: "2026-03-23T09:40:04.206Z"
source: "https://vercel.com/docs/ai-gateway/chat-platforms/chatbox"

# Chatbox

[Chatbox](https://chatboxai.app) is a cross-platform desktop AI assistant. You can configure it to use AI Gateway for unified model access and spend monitoring.

## Configuring Chatbox

- ### Create an API key
  Go to the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar and click **API keys** to create a new API key.

- ### Install Chatbox
  Download and install [Chatbox](https://chatboxai.app) for your platform (macOS, Windows, or Linux).

- ### Configure AI Gateway
  1. Go to **Settings**, then **Model Provider**
  2. Click **Add** and add **AI Gateway** with the **OpenAI API Compatible** option
  3. Set the **API Host** to `https://ai-gateway.vercel.sh/v1`, and leave the **API Path** field empty
  4. Add your AI Gateway API Key in the **API Key** field
  5. (Optional) Click **Check** next to the API Key field to validate your connection
  6. Click **Fetch** to retrieve all available models from AI Gateway
  7. Select models from the populated list

- ### Start using models
  Your requests will now be routed through AI Gateway. You can verify this by checking your [AI Gateway Overview](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) in the Vercel dashboard.

- ### (Optional) Monitor usage and spend
  View your usage, spend, and request activity in the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar. See the [observability documentation](/docs/ai-gateway/capabilities/observability) for more details.

title: "LibreChat"
description: "Use LibreChat with the AI Gateway."
last\_updated: "2026-03-23T09:40:04.224Z"
source: "https://vercel.com/docs/ai-gateway/chat-platforms/librechat"
