# Service Tiers

OpenAI offers different processing tiers that trade off between latency, availability, and cost. You can pass the `service_tier` parameter through AI Gateway to control which tier OpenAI uses for your request. AI Gateway automatically adjusts pricing based on the tier used.

> **💡 Note:** Service tiers are currently only supported for OpenAI models routed through the OpenAI provider. If you set `service_tier` for a non-OpenAI model, the parameter is ignored.

## Supported values

| Value      | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `default`  | Standard processing tier                                    |
| `priority` | Higher availability and faster processing at increased cost |
| `flex`     | Lower cost with potentially higher latency                  |

If you don't specify `service_tier`, requests use the standard tier by default.

## Examples

#### AI SDK v6

```typescript filename="app/api/chat/route.ts"
import { generateText } from 'ai';

const { text, usage, providerMetadata } = await generateText({
  model: 'openai/gpt-5',
  prompt: 'Explain quantum computing in two sentences.',
  providerOptions: {
    openai: {
      serviceTier: 'flex',
    },
  },
});

console.log(text);
console.log('Service tier:', providerMetadata?.openai?.serviceTier);
console.log('Usage:', usage);
```

#### AI SDK v5

```typescript filename="app/api/chat/route.ts"
import { gateway } from '@ai-sdk/gateway';
import { generateText } from 'ai';

const { text, usage, providerMetadata } = await generateText({
  model: gateway('openai/gpt-5'),
  prompt: 'Explain quantum computing in two sentences.',
  providerOptions: {
    openai: {
      serviceTier: 'flex',
    },
  },
});

console.log(text);
console.log('Service tier:', providerMetadata?.openai?.serviceTier);
console.log('Usage:', usage);
```

#### Chat Completions

#### TypeScript

```typescript filename="service-tier.ts"
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const response = await client.chat.completions.create({
  model: 'openai/gpt-5',
  messages: [
    {
      role: 'user',
      content: 'Explain quantum computing in two sentences.',
    },
  ],
  service_tier: 'flex',
});

console.log(response.choices[0].message.content);
console.log('Service tier:', response.service_tier);
console.log('Usage:', response.usage);
```

#### Python

```python filename="service-tier.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

response = client.chat.completions.create(
    model='openai/gpt-5',
    messages=[
        {
            'role': 'user',
            'content': 'Explain quantum computing in two sentences.'
        }
    ],
    service_tier='flex'
)

print(response.choices[0].message.content)
print('Service tier:', response.service_tier)
print('Usage:', response.usage)
```

#### OpenAI Responses

#### TypeScript

```typescript filename="service-tier.ts"
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const response = await client.responses.create({
  model: 'openai/gpt-5',
  input: 'Explain quantum computing in two sentences.',
  service_tier: 'flex',
});

console.log(response.output_text);
console.log('Service tier:', response.service_tier);
console.log('Usage:', response.usage);
```

#### Python

```python filename="service-tier.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

response = client.responses.create(
    model='openai/gpt-5',
    input='Explain quantum computing in two sentences.',
    service_tier='flex'
)

print(response.output_text)
print('Service tier:', response.service_tier)
print('Usage:', response.usage)
```

## Streaming

Service tiers work with streaming requests. The `service_tier` field appears in the response:

#### AI SDK v6

```typescript filename="app/api/chat/route.ts"
import { streamText } from 'ai';

const result = streamText({
  model: 'openai/gpt-5',
  prompt: 'Explain quantum computing in two sentences.',
  providerOptions: {
    openai: {
      serviceTier: 'priority',
    },
  },
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}

const { usage, providerMetadata } = await result;
console.log('Service tier:', providerMetadata?.openai?.serviceTier);
console.log('Usage:', usage);
```

#### AI SDK v5

```typescript filename="app/api/chat/route.ts"
import { gateway } from '@ai-sdk/gateway';
import { streamText } from 'ai';

const result = streamText({
  model: gateway('openai/gpt-5'),
  prompt: 'Explain quantum computing in two sentences.',
  providerOptions: {
    openai: {
      serviceTier: 'priority',
    },
  },
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}

const { usage, providerMetadata } = await result;
console.log('Service tier:', providerMetadata?.openai?.serviceTier);
console.log('Usage:', usage);
```

#### Chat Completions

#### TypeScript

```typescript filename="service-tier-streaming.ts"
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const stream = await client.chat.completions.create({
  model: 'openai/gpt-5',
  messages: [
    {
      role: 'user',
      content: 'Explain quantum computing in two sentences.',
    },
  ],
  stream: true,
  service_tier: 'priority',
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) process.stdout.write(content);
}
```

#### Python

```python filename="service-tier-streaming.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

stream = client.chat.completions.create(
    model='openai/gpt-5',
    messages=[
        {
            'role': 'user',
            'content': 'Explain quantum computing in two sentences.'
        }
    ],
    stream=True,
    service_tier='priority'
)

for chunk in stream:
    content = chunk.choices[0].delta.content
    if content:
        print(content, end='', flush=True)
```

#### OpenAI Responses

#### TypeScript

```typescript filename="service-tier-streaming.ts"
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

const stream = await client.responses.create({
  model: 'openai/gpt-5',
  input: 'Explain quantum computing in two sentences.',
  stream: true,
  service_tier: 'priority',
});

for await (const event of stream) {
  if (event.type === 'response.output_text.delta') {
    process.stdout.write(event.delta);
  }
}
```

#### Python

```python filename="service-tier-streaming.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

stream = client.responses.create(
    model='openai/gpt-5',
    input='Explain quantum computing in two sentences.',
    stream=True,
    service_tier='priority'
)

for event in stream:
    if event.type == 'response.output_text.delta':
        print(event.delta, end='', flush=True)
```

## Pricing

AI Gateway adjusts pricing based on the service tier used. The tables below show per-million-token rates.

> **💡 Note:** For the most up-to-date pricing, refer to the [OpenAI pricing page](https://platform.openai.com/docs/pricing).

#### Priority

| Model             | Input | Output | Cached input |
| ----------------- | ----- | ------ | ------------ |
| gpt-5.4           | $5.00 | $30.00 | $0.50        |
| gpt-5.2           | $3.50 | $28.00 | $0.35        |
| gpt-5.1           | $2.50 | $20.00 | $0.25        |
| gpt-5             | $2.50 | $20.00 | $0.25        |
| gpt-5-mini        | $0.45 | $3.60  | $0.045       |
| gpt-5.3-codex     | $3.50 | $28.00 | $0.35        |
| gpt-5.2-codex     | $3.50 | $28.00 | $0.35        |
| gpt-5.1-codex-max | $2.50 | $20.00 | $0.25        |
| gpt-5.1-codex     | $2.50 | $20.00 | $0.25        |
| gpt-5-codex       | $2.50 | $20.00 | $0.25        |
| gpt-4.1           | $3.50 | $14.00 | $0.875       |
| gpt-4.1-mini      | $0.70 | $2.80  | $0.175       |
| gpt-4.1-nano      | $0.20 | $0.80  | $0.05        |
| gpt-4o            | $4.25 | $17.00 | $2.125       |
| gpt-4o-2024-05-13 | $8.75 | $26.25 | —            |
| gpt-4o-mini       | $0.25 | $1.00  | $0.125       |
| o3                | $3.50 | $14.00 | $0.875       |
| o4-mini           | $2.00 | $8.00  | $0.50        |

#### Flex

| Model        | Input  | Output | Cached input |
| ------------ | ------ | ------ | ------------ |
| gpt-5.4      | $1.25  | $7.50  | $0.13        |
| gpt-5.4-pro  | $15.00 | $90.00 | —            |
| gpt-5.4-mini | $0.375 | $2.25  | $0.0375      |
| gpt-5.4-nano | $0.10  | $0.625 | $0.01        |
| gpt-5.2      | $0.875 | $7.00  | $0.0875      |
| gpt-5.1      | $0.625 | $5.00  | $0.0625      |
| gpt-5        | $0.625 | $5.00  | $0.0625      |
| gpt-5-mini   | $0.125 | $1.00  | $0.0125      |
| gpt-5-nano   | $0.025 | $0.20  | $0.0025      |
| o3           | $1.00  | $4.00  | $0.25        |
| o4-mini      | $0.55  | $2.20  | $0.138       |

title: "Usage & Billing"
description: "Monitor your AI Gateway credit balance, usage, and generation details."
last\_updated: "2026-03-23T09:40:04.001Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/usage"
