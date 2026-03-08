# Python

To get started with Python and AI Gateway, you can either call the
[OpenAI Chat Completions](/docs/ai-gateway/sdks-and-apis/openai-chat-completions), [OpenAI Responses](/docs/ai-gateway/sdks-and-apis/responses), or [Anthropic Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api) API directly, or use the
official [OpenAI](https://github.com/openai/openai-python) and [Anthropic](https://github.com/anthropics/anthropic-sdk-python) Python SDKs,
which are covered below.

## Installation

Install your preferred SDK:

#### Chat Completions

```bash
pip install openai
```

#### OpenAI Responses

```bash
pip install openai
```

#### Anthropic Messages

```bash
pip install anthropic
```

## Quick start

#### Chat Completions

```python filename="quickstart.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

response = client.chat.completions.create(
    model='anthropic/claude-sonnet-4.6',
    messages=[
        {'role': 'user', 'content': 'Explain quantum computing in one paragraph.'}
    ]
)

print(response.choices[0].message.content)
```

#### OpenAI Responses

```python filename="quickstart.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1',
)

response = client.responses.create(
    model='anthropic/claude-sonnet-4.6',
    input='Explain quantum computing in one paragraph.',
)

print(response.output_text)
```

#### Anthropic Messages

```python filename="quickstart.py"
import os
import anthropic

client = anthropic.Anthropic(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh'
)

message = client.messages.create(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=1024,
    messages=[
        {'role': 'user', 'content': 'Explain quantum computing in one paragraph.'}
    ]
)

print(message.content[0].text)
```

## Authentication

All SDKs support the same authentication methods. Use an [API key](/docs/ai-gateway/authentication-and-byok/authentication#api-key) for local development or [OIDC tokens](/docs/ai-gateway/authentication-and-byok/authentication#oidc-token) for Vercel deployments.

```python filename="auth.py"
import os

# Option 1: API key (recommended for local development)
api_key = os.getenv('AI_GATEWAY_API_KEY')

# Option 2: OIDC token (automatic on Vercel deployments)
api_key = os.getenv('VERCEL_OIDC_TOKEN')

# Fallback pattern for code that runs both locally and on Vercel
api_key = os.getenv('AI_GATEWAY_API_KEY') or os.getenv('VERCEL_OIDC_TOKEN')
```

## Streaming

Stream responses for real-time output in chat applications or long-running generations.

#### Chat Completions

```python filename="streaming.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

stream = client.chat.completions.create(
    model='anthropic/claude-sonnet-4.6',
    messages=[
        {'role': 'user', 'content': 'Write a short story about a robot.'}
    ],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end='', flush=True)
```

#### OpenAI Responses

```python filename="streaming.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1',
)

stream = client.responses.create(
    model='anthropic/claude-sonnet-4.6',
    input='Write a short story about a robot.',
    stream=True,
)

for event in stream:
    if event.type == 'response.output_text.delta':
        print(event.delta, end='', flush=True)
```

#### Anthropic Messages

```python filename="streaming.py"
import os
import anthropic

client = anthropic.Anthropic(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh'
)

with client.messages.stream(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=1024,
    messages=[
        {'role': 'user', 'content': 'Write a short story about a robot.'}
    ]
) as stream:
    for text in stream.text_stream:
        print(text, end='', flush=True)
```

## Async support

Both the OpenAI and Anthropic SDKs provide async clients for use with `asyncio`.

#### Chat Completions

```python filename="async_client.py"
import os
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

async def main():
    response = await client.chat.completions.create(
        model='anthropic/claude-sonnet-4.6',
        messages=[
            {'role': 'user', 'content': 'Hello!'}
        ]
    )
    print(response.choices[0].message.content)

asyncio.run(main())
```

#### OpenAI Responses

```python filename="async_client.py"
import os
import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1',
)

async def main():
    response = await client.responses.create(
        model='anthropic/claude-sonnet-4.6',
        input='Hello!',
    )
    print(response.output_text)

asyncio.run(main())
```

#### Anthropic Messages

```python filename="async_client.py"
import os
import asyncio
import anthropic

client = anthropic.AsyncAnthropic(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh'
)

async def main():
    message = await client.messages.create(
        model='anthropic/claude-sonnet-4.6',
        max_tokens=1024,
        messages=[
            {'role': 'user', 'content': 'Hello!'}
        ]
    )
    print(message.content[0].text)

asyncio.run(main())
```

## Tool calling

Enable models to call functions you define. This example shows a weather tool that the model can invoke.

#### Chat Completions

```python filename="tools.py"
import os
import json
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

tools = [{
    'type': 'function',
    'function': {
        'name': 'get_weather',
        'description': 'Get the current weather for a location',
        'parameters': {
            'type': 'object',
            'properties': {
                'location': {
                    'type': 'string',
                    'description': 'City name, e.g. San Francisco'
                }
            },
            'required': ['location']
        }
    }
}]

response = client.chat.completions.create(
    model='anthropic/claude-sonnet-4.6',
    messages=[
        {'role': 'user', 'content': "What's the weather in Tokyo?"}
    ],
    tools=tools
)

# Check if the model wants to call a tool
if response.choices[0].message.tool_calls:
    tool_call = response.choices[0].message.tool_calls[0]
    args = json.loads(tool_call.function.arguments)
    print(f"Model wants to call: {tool_call.function.name}")
    print(f"With arguments: {args}")
```

#### OpenAI Responses

```python filename="tools.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1',
)

response = client.responses.create(
    model='openai/gpt-5.4',
    input='What is the weather in Tokyo?',
    tools=[
        {
            'type': 'function',
            'name': 'get_weather',
            'description': 'Get the current weather for a location',
            'parameters': {
                'type': 'object',
                'properties': {
                    'location': {'type': 'string'},
                },
                'required': ['location'],
            },
        },
    ],
)

for item in response.output:
    if item.type == 'function_call':
        print(f'Call: {item.name}({item.arguments})')
```

#### Anthropic Messages

```python filename="tools.py"
import os
import anthropic

client = anthropic.Anthropic(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh'
)

tools = [{
    'name': 'get_weather',
    'description': 'Get the current weather for a location',
    'input_schema': {
        'type': 'object',
        'properties': {
            'location': {
                'type': 'string',
                'description': 'City name, e.g. San Francisco'
            }
        },
        'required': ['location']
    }
}]

message = client.messages.create(
    model='anthropic/claude-sonnet-4.6',
    max_tokens=1024,
    messages=[
        {'role': 'user', 'content': "What's the weather in Tokyo?"}
    ],
    tools=tools
)

# Check if the model wants to call a tool
for block in message.content:
    if block.type == 'tool_use':
        print(f"Model wants to call: {block.name}")
        print(f"With arguments: {block.input}")
```

See [Chat Completions tool calls](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/tool-calls), [OpenAI Responses API tool calling](/docs/ai-gateway/sdks-and-apis/responses#tool-calling), or [Anthropic Messages tool calls](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api/tool-calls) for more examples.

## Structured outputs

Generate responses that conform to a JSON schema for reliable parsing.

```python filename="structured.py"
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv('AI_GATEWAY_API_KEY'),
    base_url='https://ai-gateway.vercel.sh/v1'
)

response = client.chat.completions.create(
    model='anthropic/claude-sonnet-4.6',
    messages=[
        {'role': 'user', 'content': 'Extract: John is 30 years old and lives in NYC'}
    ],
    response_format={
        'type': 'json_schema',
        'json_schema': {
            'name': 'person',
            'schema': {
                'type': 'object',
                'properties': {
                    'name': {'type': 'string'},
                    'age': {'type': 'integer'},
                    'city': {'type': 'string'}
                },
                'required': ['name', 'age', 'city']
            }
        }
    }
)

import json
data = json.loads(response.choices[0].message.content)
print(data)  # {'name': 'John', 'age': 30, 'city': 'NYC'}
```

See [structured outputs](/docs/ai-gateway/sdks-and-apis/openai-chat-completions/structured-outputs) for more details.

## Framework integrations

Python frameworks with dedicated AI Gateway support:

| Framework                                                                    | Integration                                  |
| ---------------------------------------------------------------------------- | -------------------------------------------- |
| [Pydantic AI](/docs/ai-gateway/ecosystem/framework-integrations/pydantic-ai) | Native `VercelProvider` for type-safe agents |
| [LlamaIndex](/docs/ai-gateway/ecosystem/framework-integrations/llamaindex)   | `llama-index-llms-vercel-ai-gateway` package |
| [LiteLLM](/docs/ai-gateway/ecosystem/framework-integrations/litellm)         | Use `vercel_ai_gateway/` model prefix        |
| [LangChain](/docs/ai-gateway/ecosystem/framework-integrations/langchain)     | Configure via Chat Completions endpoint      |

See [Framework Integrations](/docs/ai-gateway/ecosystem/framework-integrations) for the complete list and setup guides.

## API reference

For complete API documentation, see:

- **[OpenAI Chat Completions API](/docs/ai-gateway/sdks-and-apis/openai-chat-completions)** — Chat completions, embeddings, streaming, tool calls, structured outputs, image inputs, and provider routing
- **[OpenAI Responses API](/docs/ai-gateway/sdks-and-apis/responses)** — Streaming, tool calling, structured output, and reasoning
- **[Anthropic Messages API](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api)** — Streaming, tool calls, extended thinking, web search, and file attachments

title: "OpenAI Responses API"
description: "Use the OpenAI Responses API with AI Gateway to generate text, call tools, stream tokens, and more across any supported provider."
last\_updated: "2026-03-08T05:03:10.855Z"
source: "https://vercel.com/docs/ai-gateway/sdks-and-apis/responses"
