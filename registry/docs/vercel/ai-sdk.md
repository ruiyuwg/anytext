# AI SDK

The [AI SDK](https://ai-sdk.dev/) is the recommended way to build AI-powered TypeScript applications with AI Gateway. Pass a model string like `'anthropic/claude-sonnet-4.6'` directly to AI SDK functions and requests route through AI Gateway automatically.

## Installation

Install the `ai` package:

#### npm

```bash filename="Terminal"
npm install ai
```

#### yarn

```bash filename="Terminal"
yarn add ai
```

#### pnpm

```bash filename="Terminal"
pnpm add ai
```

#### bun

```bash filename="Terminal"
bun add ai
```

## Quick start

Generate text by passing a plain string model ID. AI Gateway resolves the provider and routes the request automatically.

```typescript filename="index.ts"
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'anthropic/claude-sonnet-4.6',
  prompt: 'Explain quantum computing in one paragraph.',
});

console.log(text);
```

## Streaming

Stream responses token-by-token for real-time output:

```typescript filename="stream.ts"
import { streamText } from 'ai';

const result = streamText({
  model: 'openai/gpt-5.4',
  prompt: 'Write a short story about a robot discovering music.',
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}
```

## Structured outputs

Generate type-safe structured data with `generateObject` and a [Zod](https://zod.dev/) schema:

```typescript filename="structured.ts"
import { generateObject } from 'ai';
import { z } from 'zod';

const { object } = await generateObject({
  model: 'anthropic/claude-sonnet-4.6',
  schema: z.object({
    name: z.string(),
    age: z.number(),
    city: z.string(),
  }),
  prompt: 'Extract: John is 30 years old and lives in NYC.',
});

console.log(object); // { name: 'John', age: 30, city: 'NYC' }
```

## Tool calling

Define tools that models can invoke to interact with external systems:

```typescript filename="tools.ts"
import { generateText, tool } from 'ai';
import { z } from 'zod';

const { text, toolResults } = await generateText({
  model: 'anthropic/claude-sonnet-4.6',
  tools: {
    getWeather: tool({
      description: 'Get the current weather for a location',
      parameters: z.object({
        location: z.string().describe('City name, e.g. San Francisco'),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72,
        condition: 'sunny',
      }),
    }),
  },
  prompt: "What's the weather in Tokyo?",
});

console.log(text);
```

## Version compatibility

AI Gateway works with both AI SDK v5 and v6. All core features (text generation, streaming, structured outputs, tool calling) work across both versions.

AI SDK v6 adds support for additional capabilities:

| Feature            | v5  | v6  |
| ------------------ | --- | --- |
| Text generation    | Yes | Yes |
| Streaming          | Yes | Yes |
| Structured outputs | Yes | Yes |
| Tool calling       | Yes | Yes |
| Image generation   | Yes | Yes |
| Video generation   | No  | Yes |

> **💡 Note:** Check your installed version with `npm list ai`. To upgrade, run `npm install ai@latest`. See the [AI SDK v6 migration guide](https://ai-sdk.dev/docs/migration-guides/migration-guide-6-0) for upgrade details.

## Authentication

The AI SDK uses the `AI_GATEWAY_API_KEY` environment variable by default. Set it in your `.env.local` file:

```bash filename=".env.local"
AI_GATEWAY_API_KEY=your_ai_gateway_api_key
```

On Vercel deployments, you can also authenticate with [OIDC tokens](/docs/ai-gateway/authentication-and-byok/authentication#oidc-token) for keyless authentication.

See [Authentication](/docs/ai-gateway/authentication-and-byok/authentication) for more details.

## Next steps

- Explore the full [AI SDK documentation](https://ai-sdk.dev/getting-started) for advanced patterns
- Learn about [model routing and fallbacks](/docs/ai-gateway/models-and-providers/provider-options)
- Try other APIs: [OpenAI Chat Completions](/docs/ai-gateway/sdks-and-apis/openai-chat-completions), [OpenAI Responses](/docs/ai-gateway/sdks-and-apis/responses), [Anthropic Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api), or [OpenResponses](/docs/ai-gateway/sdks-and-apis/openresponses)

title: "Advanced Features"
description: "Advanced Anthropic API features including extended thinking, web search, and automatic caching."
last\_updated: "2026-03-08T05:03:10.620Z"
source: "https://vercel.com/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/advanced"
