# SDKs & APIs

AI Gateway provides drop-in compatible APIs that let you switch by changing a base URL. No code rewrites required. Use the same SDKs and tools you already know, with access to 200+ models from every major provider.

## Quick start

Point your existing SDK to the gateway:

#### AI SDK

```bash package-manager
npm i ai
```

```typescript
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'anthropic/claude-sonnet-4.6',
  prompt: 'Hello!',
});
```

#### Chat Completions

```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const response = await client.chat.completions.create({
  model: 'anthropic/claude-sonnet-4.6',
  messages: [{ role: 'user', content: 'Hello!' }],
});
```

#### OpenAI Responses

```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const response = await client.responses.create({
  model: 'anthropic/claude-sonnet-4.6',
  input: 'Hello!',
});
```

#### Anthropic Messages

```typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh',
});

const message = await client.messages.create({
  model: 'anthropic/claude-sonnet-4.6',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hello!' }],
});
```

#### OpenResponses

```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/openresponses/v1',
});

const response = await client.responses.create({
  model: 'anthropic/claude-sonnet-4.6',
  input: 'Hello!',
});
```

## Why use these APIs?

- **No vendor lock-in**: Switch between Claude, GPT, Gemini, and other models without changing your code
- **Unified billing**: One invoice for all providers instead of managing multiple accounts
- **Built-in fallbacks**: Automatic retry with alternative providers if one fails
- **Streaming support**: Real-time responses with SSE across all compatible endpoints
- **Full feature parity**: Tool calling, structured outputs, vision, and embeddings work exactly as documented

## Available APIs

| API                                                                                   | Best for                                                             | Documentation                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AI SDK](/docs/ai-gateway/sdks-and-apis/ai-sdk) (recommended)                         | Normalizes provider differences, works with AI Gateway automatically | [Streaming](/docs/ai-gateway/sdks-and-apis/ai-sdk#streaming), [Structured outputs](/docs/ai-gateway/sdks-and-apis/ai-sdk#structured-outputs), [Tools](/docs/ai-gateway/sdks-and-apis/ai-sdk#tool-calling)                                    |
| [OpenAI Responses API](/docs/ai-gateway/sdks-and-apis/responses)                      | OpenAI Responses API users                                           | [Streaming](/docs/ai-gateway/sdks-and-apis/responses#streaming), [Tools](/docs/ai-gateway/sdks-and-apis/responses#tool-calling), [Structured output](/docs/ai-gateway/sdks-and-apis/responses#structured-output)                             |
| [OpenAI Chat Completions API](/docs/ai-gateway/sdks-and-apis/openai-chat-completions) | Existing OpenAI integrations, broad language support                 | [Chat](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/chat-completions), [Tools](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/tool-calls), [Embeddings](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/embeddings) |
| [Anthropic Messages API](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api)       | Claude Code, Anthropic SDK users                                     | [Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/messages), [Tools](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/tool-calls), [Files](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/file-attachments)       |
| [OpenResponses](/docs/ai-gateway/sdks-and-apis/openresponses)                         | New projects, provider-agnostic design                               | [Streaming](/docs/ai-gateway/sdks-and-apis/openresponses/streaming), [Tools](/docs/ai-gateway/sdks-and-apis/openresponses/tool-calling), [Vision](/docs/ai-gateway/sdks-and-apis/openresponses/image-input)                                  |
| [Python](/docs/ai-gateway/sdks-and-apis/python)                                       | Python developers                                                    | [Async](/docs/ai-gateway/sdks-and-apis/python#async-support), [Streaming](/docs/ai-gateway/sdks-and-apis/python#streaming), [Frameworks](/docs/ai-gateway/sdks-and-apis/python#framework-integrations)                                       |

## Choosing an API

- **New project?** Use [AI SDK](/docs/ai-gateway/sdks-and-apis/ai-sdk). It handles provider differences for you and supports streaming, structured outputs, tool calling, and reasoning across all providers.
- **Using the OpenAI SDK?** The [OpenAI Responses API](/docs/ai-gateway/sdks-and-apis/responses) and [Chat Completions API](/docs/ai-gateway/sdks-and-apis/openai-chat-completions) both work by changing your base URL.
- **Using Claude Code or the Anthropic SDK?** Use the [Anthropic Messages API](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api) for native feature support.
- **Want a provider-agnostic REST API?** Use [OpenResponses](/docs/ai-gateway/sdks-and-apis/openresponses).

## Next steps

- [Get your API key](/docs/ai-gateway/authentication-and-byok/authentication) to start making requests
- [Browse available models](/docs/ai-gateway/models-and-providers) to find the right model for your use case
- [Set up observability](/docs/ai-gateway/capabilities/observability) to monitor usage and debug requests

title: "Python"
description: "Use the AI Gateway with Python through OpenAI or Anthropic SDKs with full streaming, tool calling, and async support."
last\_updated: "2026-03-23T09:40:04.955Z"
source: "https://vercel.com/docs/ai-gateway/sdks-and-apis/python"
