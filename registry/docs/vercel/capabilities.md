# Capabilities

In addition to text generation, you can use AI Gateway to enable reasoning, generate images, generate videos, search the web, track requests with observability, monitor usage, and enforce data retention policies. These features work across providers through a unified API, so you don't need separate integrations for each provider.

## What you can build

- **Complex problem solving**: Enable models to think step-by-step for coding, math, and analysis with [Reasoning](/docs/ai-gateway/capabilities/reasoning)
- **Visual content apps**: Generate product images, marketing assets, or UI mockups with [Image Generation](/docs/ai-gateway/capabilities/image-generation)
- **Video content**: Create videos from text prompts, images, or video input with [Video Generation](/docs/ai-gateway/capabilities/video-generation)
- **Research assistants**: Give models access to current information with [Web Search](/docs/ai-gateway/capabilities/web-search)
- **Production dashboards**: Monitor costs, latency, and usage across all your AI requests with [Observability](/docs/ai-gateway/capabilities/observability)
- **Compliant applications**: Meet data privacy requirements with [Zero Data Retention](/docs/ai-gateway/capabilities/zdr)
- **Usage tracking**: Check credit balances and look up generation details with the [Usage API](/docs/ai-gateway/capabilities/usage)

## Capabilities overview

| Capability                                                         | What it does                              | Key features                                                                   |
| ------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------ |
| [Reasoning](/docs/ai-gateway/capabilities/reasoning)               | Enable step-by-step thinking              | OpenAI, Anthropic, Google, Vertex, Bedrock; normalized across providers        |
| [Image Generation](/docs/ai-gateway/capabilities/image-generation) | Create images from text prompts           | Multi-provider support, edit existing images, multiple output formats          |
| [Video Generation](/docs/ai-gateway/capabilities/video-generation) | Create videos from text, images, or video | Text-to-video, image-to-video, video-to-video, resolution and duration control |
| [Web Search](/docs/ai-gateway/capabilities/web-search)             | Access real-time web information          | Perplexity search for any model, native provider search tools                  |
| [Observability](/docs/ai-gateway/capabilities/observability)       | Monitor and debug AI requests             | Request traces, token counts, latency metrics, spend tracking                  |
| [Zero Data Retention](/docs/ai-gateway/capabilities/zdr)           | Ensure data privacy compliance            | Default ZDR policy, per-request enforcement, provider agreements               |
| [Usage & Billing](/docs/ai-gateway/capabilities/usage)             | Track credits and generations             | Credit balance API, generation lookup, cost tracking                           |

## Reasoning

Reasoning models can think through problems before responding, producing higher-quality answers for complex tasks. AI Gateway supports reasoning across OpenAI, Anthropic, Google, Vertex AI, and Amazon Bedrock, normalizing the different formats so you can switch providers without rewriting your code.

```typescript
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const { text, reasoning } = await generateText({
  model: openai('openai/gpt-5'),
  prompt: 'Explain the Monty Hall problem step by step.',
  providerOptions: {
    openai: { reasoningSummary: 'detailed' },
  },
});
```

Each provider has its own configuration. See the [Reasoning docs](/docs/ai-gateway/capabilities/reasoning) for provider-specific setup and examples.

## Image generation

Generate images using AI models through a single API. Requests route to the best available provider, with authentication and response formatting handled automatically.

```typescript
import { gateway } from '@ai-sdk/gateway';
import { experimental_generateImage as generateImage } from 'ai';

const { image } = await generateImage({
  model: gateway.imageModel('openai/dall-e-3'),
  prompt: 'A serene mountain landscape at sunset',
});
```

Supported providers include OpenAI (DALL-E), Google (Imagen), and multimodal LLMs with image capabilities. See the [Image Generation docs](/docs/ai-gateway/capabilities/image-generation) for implementation details.

## Video generation

Generate videos from text prompts, images, or video input using AI models through a single API. Control resolution, duration, aspect ratio, and audio generation across providers.

```typescript
import { experimental_generateVideo as generateVideo } from 'ai';

const { videos } = await generateVideo({
  model: 'google/veo-3.1-generate-001',
  prompt: 'A serene mountain landscape at sunset with clouds drifting by',
  aspectRatio: '16:9',
  resolution: '1920x1080',
  duration: 8,
});
```

Supported providers include Google (Veo 3.1), KlingAI (motion control), and Wan. See the [Video Generation docs](/docs/ai-gateway/capabilities/video-generation) for implementation details.

## Web search

Enable AI models to search the web during conversations. This capability helps answer questions about current events, recent developments, or any topic requiring up-to-date information.

Two approaches are supported:

- **[Perplexity Search](/docs/ai-gateway/capabilities/web-search#using-perplexity-search)**: Add web search to any model, regardless of provider
- **Native provider tools**: Use search capabilities built into [Anthropic](/docs/ai-gateway/capabilities/web-search#anthropic-web-search), [OpenAI](/docs/ai-gateway/capabilities/web-search#openai-web-search), and [Google](/docs/ai-gateway/capabilities/web-search#google-web-search) models

## Observability

AI Gateway automatically logs every request with metrics you can view in the Vercel dashboard:

- **Requests by model**: See which models your application uses most
- **Time to first token (TTFT)**: Monitor response latency
- **Token counts**: Track input and output token usage
- **Spend**: View costs broken down by model and time period

Access these metrics from the [Observability tab](/docs/ai-gateway/capabilities/observability#observability-tab) at both team and project levels.

## Zero data retention

AI Gateway uses zero data retention by default—it permanently deletes your prompts and responses after requests complete. For applications with strict compliance requirements, you can also enforce ZDR at the provider level:

```typescript
const result = await streamText({
  model: 'anthropic/claude-sonnet-4.6',
  prompt: 'Analyze this sensitive data...',
  providerOptions: {
    gateway: { zeroDataRetention: true },
  },
});
```

When `zeroDataRetention` is enabled, requests only route to providers with verified ZDR agreements. See the [ZDR documentation](/docs/ai-gateway/capabilities/zdr) for the list of compliant providers.

## Next steps

- [Enable reasoning](/docs/ai-gateway/capabilities/reasoning) for complex problem solving
- [Generate your first image](/docs/ai-gateway/capabilities/image-generation)
- [Generate your first video](/docs/ai-gateway/capabilities/video-generation)
- [Enable web search](/docs/ai-gateway/capabilities/web-search) in your AI application
- [View your observability dashboard](/docs/ai-gateway/capabilities/observability) to monitor usage

title: "Amazon Bedrock Reasoning"
description: "Configure reasoning for models hosted on Amazon Bedrock with the AI SDK and AI Gateway."
last\_updated: "2026-03-08T05:03:10.188Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/reasoning/amazon-bedrock"
