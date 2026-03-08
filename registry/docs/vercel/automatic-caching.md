# Automatic Caching

Some providers like Anthropic and MiniMax require explicit cache control markers to enable prompt caching, while others like OpenAI, Google, and DeepSeek cache automatically (sometimes called "implicit caching"). Use `caching: 'auto'` to let AI Gateway handle this for you. It applies the appropriate caching strategy based on the provider.

## How it works

When you set `caching: 'auto'` and the request routes to a provider that requires explicit cache markers (Anthropic or MiniMax), AI Gateway adds a `cache_control` breakpoint at the end of your static content. For providers with implicit caching (OpenAI, Google, DeepSeek), no modification is needed and caching works automatically.

**Default behavior**: When `caching` is not set, AI Gateway passes your request through without modification. Providers with implicit caching still cache automatically. For Anthropic, you'll need to set `caching: 'auto'` or manually add cache markers to your messages.

> **💡 Note:** **Supported providers:** Automatic caching works with Anthropic (direct and
> Vertex) and MiniMax. Bedrock is not yet supported for automatic caching.

## Examples

#### AI SDK

```typescript filename="app/api/chat/route.ts"
import { streamText } from 'ai';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    system: 'You are a helpful assistant with access to a large knowledge base...',
    prompt,
    providerOptions: {
      gateway: {
        caching: 'auto',
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

#### Chat Completions

#### TypeScript

```typescript filename="auto-caching.ts"
import OpenAI from 'openai';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const openai = new OpenAI({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

// @ts-expect-error - providerOptions is a gateway extension
const response = await openai.chat.completions.create({
  model: 'anthropic/claude-sonnet-4.6',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant with access to a large knowledge base...',
    },
    {
      role: 'user',
      content: 'What is the capital of France?',
    },
  ],
  providerOptions: {
    gateway: {
      caching: 'auto',
    },
  },
});

console.log(response.choices[0].message.content);
```

#### Python

```python filename="auto-caching.py"
import os
from openai import OpenAI

api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')

client = OpenAI(
    api_key=api_key,
    base_url='https://ai-gateway.vercel.sh/v1'
)

response = client.chat.completions.create(
    model='anthropic/claude-sonnet-4.6',
    messages=[
        {
            'role': 'system',
            'content': 'You are a helpful assistant with access to a large knowledge base...'
        },
        {
            'role': 'user',
            'content': 'What is the capital of France?'
        }
    ],
    extra_body={
        'providerOptions': {
            'gateway': {
                'caching': 'auto'
            }
        }
    }
)

print(response.choices[0].message.content)
```

#### OpenAI Responses

```typescript filename="auto-caching.ts"
const response = await fetch('https://ai-gateway.vercel.sh/v1/responses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: 'anthropic/claude-sonnet-4.6',
    caching: 'auto',
    instructions: 'You are a helpful assistant with access to a large knowledge base...',
    input: [{ type: 'message', role: 'user', content: 'What is the capital of France?' }],
  }),
});
```

#### Anthropic Messages

#### TypeScript

```typescript filename="auto-caching.ts"
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_OIDC_TOKEN;

const anthropic = new Anthropic({
  apiKey,
  baseURL: 'https://ai-gateway.vercel.sh',
});

const message = await anthropic.messages.create({
  model: 'anthropic/claude-sonnet-4.6',
  max_tokens: 2048,
  system: 'You are a helpful assistant with access to a large knowledge base...',
  messages: [
    {
      role: 'user',
      content: 'What is the capital of France?',
    },
  ],
  // @ts-expect-error - providerOptions is a gateway extension
  providerOptions: {
    gateway: {
      caching: 'auto',
    },
  },
});

console.log(message.content[0].type === 'text' ? message.content[0].text : '');
```

#### Python

```python filename="auto-caching.py"
import os
import anthropic

api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')

client = anthropic.Anthropic(
    api_key=api_key,
    base_url='https://ai-gateway.vercel.sh'
)

message = client.messages.create(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=2048,
    system='You are a helpful assistant with access to a large knowledge base...',
    messages=[
        {
            'role': 'user',
            'content': 'What is the capital of France?'
        }
    ],
    extra_body={
        'providerOptions': {
            'gateway': {
                'caching': 'auto'
            }
        }
    }
)

print(message.content[0].text)
```

## Manual caching

For fine-grained control over what gets cached, you can manually add cache markers instead of using `caching: 'auto'`. This gives you control over exactly which parts of your prompt are cached.

- **Anthropic Messages API**: Add `cache_control: { type: 'ephemeral' }` to specific messages. See the [Anthropic prompt caching docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) for details.
- **AI SDK**: Use the `cacheControl` property on messages. See the [AI SDK Anthropic provider docs](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#cache-control) for details.
- **OpenAI Chat Completions API**: See [prompt caching](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/advanced#prompt-caching) in the advanced guide.

## Provider behavior

| Provider               | Caching type  | `caching: 'auto'` effect                          |
| ---------------------- | ------------- | ------------------------------------------------- |
| OpenAI                 | Implicit      | No change needed. Caching happens automatically.  |
| Google                 | Implicit      | No change needed. Caching happens automatically.  |
| DeepSeek               | Implicit      | No change needed. Caching happens automatically.  |
| Anthropic              | Explicit      | Adds `cache_control` breakpoint to static content |
| Anthropic (via Vertex) | Explicit      | Adds `cache_control` breakpoint to static content |
| MiniMax                | Explicit      | Adds cache markers to static content              |
| Bedrock                | Not supported | No effect                                         |

title: "Model Fallbacks"
description: "Configure model-level failover to try backup models when the primary model is unavailable"
last\_updated: "2026-03-08T05:03:10.507Z"
source: "https://vercel.com/docs/ai-gateway/models-and-providers/model-fallbacks"
