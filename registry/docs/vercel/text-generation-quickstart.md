# Text Generation Quickstart

This quickstart walks you through making your first text generation request with AI Gateway.

- ### Set up your project
  Create a new directory and initialize a Node.js project:
  ```bash filename="Terminal"
  mkdir ai-text-demo
  cd ai-text-demo
  pnpm init
  ```

- ### Install dependencies
  Install the AI SDK and development dependencies:
  #### npm
  ```bash filename="Terminal"
  npm install ai dotenv @types/node tsx typescript
  ```
  #### yarn
  ```bash filename="Terminal"
  yarn add ai dotenv @types/node tsx typescript
  ```
  #### pnpm
  ```bash filename="Terminal"
  pnpm add ai dotenv @types/node tsx typescript
  ```
  #### bun
  ```bash filename="Terminal"
  bun add ai dotenv @types/node tsx typescript
  ```

- ### Set up your API key

  Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys\&title=AI+Gateway+API+Keys) in your Vercel dashboard and click **Create key** to generate a new API key.

  Create a `.env.local` file and save your API key:

  ```bash filename=".env.local"
  AI_GATEWAY_API_KEY=your_ai_gateway_api_key
  ```

  > **💡 Note:** Instead of using an API key, you can use [OIDC
  > tokens](/docs/ai-gateway/authentication-and-byok#oidc-token-authentication) to
  > authenticate your requests.

- ### Create and run your script
  Create an `index.ts` file:
  ```typescript filename="index.ts"
  import { streamText } from 'ai';
  import 'dotenv/config';

  async function main() {
    const result = streamText({
      model: 'openai/gpt-5.4',
      prompt: 'Invent a new holiday and describe its traditions.',
    });

    for await (const textPart of result.textStream) {
      process.stdout.write(textPart);
    }

    console.log();
    console.log('Token usage:', await result.usage);
    console.log('Finish reason:', await result.finishReason);
  }

  main().catch(console.error);
  ```
  Run your script:
  ```bash filename="Terminal"
  pnpm tsx index.ts
  ```
  You should see the AI model's response stream to your terminal.

- ### Next steps
  - Learn about [provider and model routing with fallbacks](/docs/ai-gateway/models-and-providers/provider-options)
  - Explore the [AI SDK documentation](https://ai-sdk.dev/getting-started) for more configuration options
  - Try other APIs: [OpenAI Chat Completions](/docs/ai-gateway/sdks-and-apis/openai-chat-completions), [OpenAI Responses](/docs/ai-gateway/sdks-and-apis/responses), [Anthropic Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api), or [OpenResponses](/docs/ai-gateway/sdks-and-apis/openresponses)

## Compatible APIs

### OpenAI Chat Completions API

Use any OpenAI SDK or HTTP client with AI Gateway:

#### TypeScript

```typescript filename="index.ts"
import OpenAI from 'openai';
import 'dotenv/config';

const client = new OpenAI({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh/v1',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'anthropic/claude-sonnet-4.6',
    messages: [
      {
        role: 'user',
        content: 'Invent a new holiday and describe its traditions.',
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);
```

#### Python

```python filename="main.py"
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1',
)

response = client.chat.completions.create(
    model='anthropic/claude-sonnet-4.6',
    messages=[
        {
            'role': 'user',
            'content': 'Invent a new holiday and describe its traditions.',
        },
    ],
)

print(response.choices[0].message.content)
```

Learn more in the [OpenAI Chat Completions API docs](/docs/ai-gateway/sdks-and-apis/openai-chat-completions).

### Anthropic Messages API

Use any Anthropic SDK or HTTP client with AI Gateway:

#### TypeScript

```typescript filename="index.ts"
import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const client = new Anthropic({
  apiKey: process.env.AI_GATEWAY_API_KEY,
  baseURL: 'https://ai-gateway.vercel.sh',
});

async function main() {
  const message = await client.messages.create({
    model: 'anthropic/claude-sonnet-4.6',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: 'Invent a new holiday and describe its traditions.',
      },
    ],
  });

  console.log(message.content[0].text);
}

main().catch(console.error);
```

#### Python

```python filename="main.py"
import os
import anthropic
from dotenv import load_dotenv

load_dotenv()

client = anthropic.Anthropic(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh',
)

message = client.messages.create(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=1024,
    messages=[
        {
            'role': 'user',
            'content': 'Invent a new holiday and describe its traditions.',
        },
    ],
)

print(message.content[0].text)
```

Learn more in the [Anthropic Messages API docs](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api).

### OpenResponses API

Use the [OpenResponses API](https://openresponses.org), an open standard for AI model interactions:

#### TypeScript

```typescript filename="index.ts"
import 'dotenv/config';

async function main() {
  const response = await fetch('https://ai-gateway.vercel.sh/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.AI_GATEWAY_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'anthropic/claude-sonnet-4.6',
      input: [
        {
          type: 'message',
          role: 'user',
          content: 'Invent a new holiday and describe its traditions.',
        },
      ],
    }),
  });

  const result = await response.json();
  console.log(result.output[0].content[0].text);
}

main().catch(console.error);
```

#### Python

```python filename="main.py"
import os
import requests
from dotenv import load_dotenv

load_dotenv()

response = requests.post(
    'https://ai-gateway.vercel.sh/v1/responses',
    headers={
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {os.getenv("AI_GATEWAY_API_KEY")}',
    },
    json={
        'model': 'anthropic/claude-sonnet-4.6',
        'input': [
            {
                'type': 'message',
                'role': 'user',
                'content': 'Invent a new holiday and describe its traditions.',
            },
        ],
    },
)

result = response.json()
print(result['output'][0]['content'][0]['text'])
```

#### cURL

```bash filename="Terminal"
curl -X POST "https://ai-gateway.vercel.sh/v1/responses" \
  -H "Authorization: Bearer $AI_GATEWAY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "anthropic/claude-sonnet-4.6",
    "input": [
      {
        "type": "message",
        "role": "user",
        "content": "Invent a new holiday and describe its traditions."
      }
    ]
  }'
```

Learn more in the [OpenResponses API docs](/docs/ai-gateway/sdks-and-apis/openresponses).

title: "Video Generation Quickstart"
description: "Generate videos from text prompts, images, or video input using AI Gateway."
last\_updated: "2026-03-23T09:40:04.441Z"
source: "https://vercel.com/docs/ai-gateway/getting-started/video"
