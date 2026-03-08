# Provider Options

AI Gateway can route your AI model requests across multiple AI providers. Each provider offers different models, pricing, and performance characteristics. By default, Vercel AI Gateway dynamically chooses the default providers to give you the best experience based on a combination of recent uptime and latency.

With the Gateway Provider Options however, you have control over the routing order and fallback behavior of the models.

> **💡 Note:** If you want to customize individual AI model provider settings rather than
> general AI Gateway behavior, please refer to the model-specific provider
> options in the [AI SDK
> documentation](https://ai-sdk.dev/docs/foundations/prompts#provider-options).

## Provider filtering and ordering

You can use `order` and `only` in `providerOptions.gateway` to control which providers handle your requests and in what order.

```typescript
providerOptions: {
  gateway: {
    order: ['bedrock', 'anthropic'], // Try Bedrock first, then Anthropic
    only: ['bedrock', 'anthropic'],  // Only allow these two providers
  },
},
```

For full details, examples, and provider metadata output, see [Provider Filtering & Ordering](/docs/ai-gateway/models-and-providers/provider-filtering-and-ordering).

## Automatic caching

You can use `caching: 'auto'` in `providerOptions.gateway` to let AI Gateway automatically apply the appropriate caching strategy based on the provider. This is useful for providers like Anthropic and MiniMax that require explicit cache markers.

```typescript
providerOptions: {
  gateway: {
    caching: 'auto',
  },
},
```

For full details, supported providers, and examples across all APIs, see [Automatic Caching](/docs/ai-gateway/models-and-providers/automatic-caching).

## Provider timeouts

You can set per-provider timeouts to trigger fast failover when a provider is slow to respond. See the dedicated [Provider Timeouts](/docs/ai-gateway/models-and-providers/provider-timeouts) documentation.

## Model fallbacks

For model-level failover strategies that try backup models when your primary model fails or is unavailable, see the dedicated [Model Fallbacks](/docs/ai-gateway/models-and-providers/model-fallbacks) documentation.

## Advanced configuration

### Combining AI Gateway provider options with provider-specific options

You can combine AI Gateway provider options with provider-specific options. This allows you to control both the routing behavior and provider-specific settings in the same request:

```typescript filename="app/api/chat/route.ts"
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    prompt,
    providerOptions: {
      anthropic: {
        thinkingBudget: 0.001,
      },
      gateway: {
        order: ['vertex'],
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this example:

- We're using an Anthropic model (e.g. Claude 4 Sonnet) but accessing it through Vertex AI
- The Anthropic-specific options still apply to the model:
  - `thinkingBudget` sets a cost limit of $0.001 per request for the Claude model
- You can read more about provider-specific options in the [AI SDK documentation](https://ai-sdk.dev/docs/foundations/prompts#provider-options)

### Request-scoped BYOK

You can pass your own provider credentials on a per-request basis using the `byok` option in `providerOptions.gateway`. This allows you to use your existing provider accounts for specific requests without configuring credentials in the dashboard.

```typescript filename="app/api/chat/route.ts" {9-13}
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    prompt,
    providerOptions: {
      gateway: {
        byok: {
          anthropic: [{ apiKey: process.env.ANTHROPIC_API_KEY }],
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

For detailed information about credential structures, multiple credentials, and usage with the Chat Completions API, see the [BYOK documentation](/docs/ai-gateway/authentication-and-byok/byok#request-scoped-byok).

### Reasoning

For models that support reasoning (also known as "thinking"), you can use
`providerOptions` to configure reasoning behavior. The example below shows
how to control the computational effort and summary detail level when using OpenAI's `gpt-oss-120b` model.

For more details on reasoning support across different models and providers, see the [AI SDK providers documentation](https://ai-sdk.dev/providers/ai-sdk-providers), including [OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai#reasoning), [DeepSeek](https://ai-sdk.dev/providers/ai-sdk-providers/deepseek#reasoning), and [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#reasoning).

```typescript filename="app/api/chat/route.ts" {9-12}
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-oss-120b',
    prompt,
    providerOptions: {
      openai: {
        reasoningEffort: 'high',
        reasoningSummary: 'detailed',
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

**Note:** For `openai/gpt-5` and `openai/gpt-5.1` models, you must set both `reasoningEffort` and `reasoningSummary` in `providerOptions` to receive reasoning output.

```typescript
providerOptions: {
  openai: {
    reasoningEffort: 'high', // or 'minimal', 'low', 'medium', 'none'
    reasoningSummary: 'detailed', // or 'auto', 'concise'
  },
}
```

## Available providers

You can view the available models for a provider
in the [**Model List**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fmodels\&title=Go+to+Model+List) section under
the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) section in your Vercel dashboard sidebar
or in the public [models page](https://vercel.com/ai-gateway/models).

| **Slug**     | **Name**                                                                             | **Website**                                                      |
| ------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `alibaba`    | Alibaba Cloud                                                                        | [alibabacloud.com](https://www.alibabacloud.com)                 |
| `anthropic`  | [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic)                 | [anthropic.com](https://anthropic.com)                           |
| `arcee-ai`   | Arcee AI                                                                             | [arcee.ai](https://arcee.ai)                                     |
| `azure`      | [Azure](https://ai-sdk.dev/providers/ai-sdk-providers/azure)                         | [ai.azure.com](https://ai.azure.com/)                            |
| `baseten`    | [Baseten](https://ai-sdk.dev/providers/openai-compatible-providers/baseten)          | [baseten.co](https://www.baseten.co/)                            |
| `bedrock`    | [Amazon Bedrock](https://ai-sdk.dev/providers/ai-sdk-providers/amazon-bedrock)       | [aws.amazon.com/bedrock](https://aws.amazon.com/bedrock)         |
| `bfl`        | [Black Forest Labs](https://ai-sdk.dev/providers/ai-sdk-providers/black-forest-labs) | [bfl.ai](https://bfl.ai/)                                        |
| `bytedance`  | ByteDance                                                                            | [byteplus.com](https://www.byteplus.com/en)                      |
| `cerebras`   | [Cerebras](https://ai-sdk.dev/providers/ai-sdk-providers/cerebras)                   | [cerebras.net](https://www.cerebras.net)                         |
| `cohere`     | [Cohere](https://ai-sdk.dev/providers/ai-sdk-providers/cohere)                       | [cohere.com](https://cohere.com)                                 |
| `crusoe`     | Crusoe                                                                               | [crusoe.ai](https://crusoe.ai)                                   |
| `deepinfra`  | [DeepInfra](https://ai-sdk.dev/providers/ai-sdk-providers/deepinfra)                 | [deepinfra.com](https://deepinfra.com)                           |
| `deepseek`   | [DeepSeek](https://ai-sdk.dev/providers/ai-sdk-providers/deepseek)                   | [deepseek.ai](https://deepseek.ai)                               |
| `fireworks`  | [Fireworks](https://ai-sdk.dev/providers/ai-sdk-providers/fireworks)                 | [fireworks.ai](https://fireworks.ai)                             |
| `google`     | [Google](https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai)         | [ai.google.dev](https://ai.google.dev/)                          |
| `groq`       | [Groq](https://ai-sdk.dev/providers/ai-sdk-providers/groq)                           | [groq.com](https://groq.com)                                     |
| `inception`  | Inception                                                                            | [inceptionlabs.ai](https://inceptionlabs.ai)                     |
| `klingai`    | [Kling AI](https://ai-sdk.dev/providers/ai-sdk-providers/klingai)                    | [klingai.com/](http://klingai.com/)                              |
| `meituan`    | Meituan                                                                              | [longcat.ai](https://longcat.ai/)                                |
| `minimax`    | MiniMax                                                                              | [minimax.io](https://www.minimax.io/)                            |
| `mistral`    | [Mistral](https://ai-sdk.dev/providers/ai-sdk-providers/mistral)                     | [mistral.ai](https://mistral.ai)                                 |
| `moonshotai` | Moonshot AI                                                                          | [moonshot.ai](https://www.moonshot.ai)                           |
| `morph`      | Morph                                                                                | [morphllm.com](https://morphllm.com)                             |
| `nebius`     | Nebius                                                                               | [nebius.com](https://nebius.com)                                 |
| `novita`     | Novita                                                                               | [novita.ai](https://novita.ai/)                                  |
| `openai`     | [OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai)                       | [openai.com](https://openai.com)                                 |
| `parasail`   | Parasail                                                                             | [parasail.com](https://www.parasail.io)                          |
| `perplexity` | [Perplexity](https://ai-sdk.dev/providers/ai-sdk-providers/perplexity)               | [perplexity.ai](https://www.perplexity.ai)                       |
| `prodia`     | Prodia                                                                               | [prodia.com](https://www.prodia.com)                             |
| `recraft`    | Recraft                                                                              | [recraft.ai](https://www.recraft.ai)                             |
| `sambanova`  | SambaNova                                                                            | [sambanova.ai](https://sambanova.ai/)                            |
| `streamlake` | StreamLake                                                                           | [streamlake.ai](https://streamlake.ai/)                          |
| `togetherai` | [Together AI](https://ai-sdk.dev/providers/ai-sdk-providers/togetherai)              | [together.ai](https://together.ai/)                              |
| `vercel`     | [Vercel](https://ai-sdk.dev/providers/ai-sdk-providers/vercel)                       | [v0.app](https://v0.app/docs/api/model)                          |
| `vertex`     | [Vertex AI](https://ai-sdk.dev/providers/ai-sdk-providers/google-vertex)             | [cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai) |
| `voyage`     | [Voyage AI](https://ai-sdk.dev/providers/community-providers/voyage-ai)              | [voyageai.com](https://www.voyageai.com)                         |
| `xai`        | [xAI](https://ai-sdk.dev/providers/ai-sdk-providers/xai)                             | [x.ai](https://x.ai)                                             |
| `zai`        | Z.ai                                                                                 | [z.ai](https://z.ai/model-api)                                   |

> **💡 Note:** Provider availability may vary by model. Some models may only be available
> through specific providers or may have different capabilities depending on the
> provider used.

title: "Provider Timeouts"
description: "Configure per-provider timeouts for fast failover when a provider is slow to respond."
last\_updated: "2026-03-08T05:03:10.554Z"
source: "https://vercel.com/docs/ai-gateway/models-and-providers/provider-timeouts"
