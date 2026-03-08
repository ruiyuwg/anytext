# Model Fallbacks

You can configure model failover to specify backups that are tried in order if the primary model fails or is unavailable.

## Using the `models` option

Use the `models` array in `providerOptions.gateway` to specify fallback models:

```typescript filename="app/api/chat/route.ts" {7,11}
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.4', // Primary model
    prompt,
    providerOptions: {
      gateway: {
        models: ['anthropic/claude-sonnet-4.6', 'google/gemini-3-flash'], // Fallback models
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

In this example:

- The gateway first attempts the primary model (`openai/gpt-5.4`)
- If that fails, it tries `anthropic/claude-sonnet-4.6`
- If that also fails, it tries `google/gemini-3-flash`
- The response comes from the first model that succeeds

## Combining with provider routing

You can use `models` together with `order` to control both model failover and provider preference:

```typescript filename="app/api/chat/route.ts" {12}
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'openai/gpt-5.4',
    prompt,
    providerOptions: {
      gateway: {
        models: ['openai/gpt-5-nano', 'anthropic/claude-sonnet-4.6'],
        order: ['azure', 'openai'], // Provider preference for each model
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

This configuration:

1. Tries `openai/gpt-5.4` via Azure, then OpenAI
2. If both fail, tries `openai/gpt-5-nano` via Azure first, then OpenAI
3. If those fail, tries `anthropic/claude-sonnet-4.6` via available providers

## How failover works

When processing a request with model fallbacks:

1. The gateway routes the request to the primary model (the `model` parameter)
2. For each model, provider routing rules apply (using `order` or `only` if specified)
3. If all providers for a model fail, the gateway tries the next model in the `models` array
4. The response comes from the first successful model/provider combination

> **💡 Note:** Failover happens automatically. To see which model and provider served your
> request, check the [provider
> metadata](/docs/ai-gateway/models-and-providers/provider-options#example-provider-metadata-output).

title: "Model Variants"
description: "Enable provider-specific capabilities via headers when calling models through AI Gateway."
last\_updated: "2026-03-08T05:03:10.525Z"
source: "https://vercel.com/docs/ai-gateway/models-and-providers/model-variants"

# Model Variants

Some AI inference providers offer special variants of models. These models can
have different features such as a larger context size. They may incur different
costs associated with requests as well.

When AI Gateway makes these models available they will be highlighted on the
model detail page with a **Model Variants** section in the relevant provider
card providing an overview of the feature set and linking to more detail.

Model variants sometimes rely on preview or beta features offered by the
inference provider. Their ongoing availability can therefore be less predictable
than that of a stable model feature. Check the provider's site for the latest
information.

### Anthropic Claude models: 1M token context

AI Gateway automatically enables the 1M token context window for Claude Opus 4.6,
Sonnet 4.6, Sonnet 4.5, and Sonnet 4 models. No configuration is required.

- **Learn more**:
  [Announcement](https://www.anthropic.com/news/1m-context),
  [Context windows docs](https://platform.claude.com/docs/en/build-with-claude/context-windows#1-m-token-context-window)
- **Pricing**: Requests that exceed 200K tokens are charged at premium rates. See
  [pricing details](https://docs.anthropic.com/en/about-claude/pricing#long-context-pricing).

title: "Models & Providers"
description: "Learn about models and providers for the AI Gateway."
last\_updated: "2026-03-08T05:03:10.600Z"
source: "https://vercel.com/docs/ai-gateway/models-and-providers"
