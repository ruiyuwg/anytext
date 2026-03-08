# Getting started with AI Gateway using a coding agent

If you use a coding agent like
[Claude Code](/docs/agent-resources/coding-agents/claude-code),
[Cursor](https://cursor.com), or
[Cline](/docs/agent-resources/coding-agents/cline),
you can get started with AI Gateway by prompting your agent directly
instead of writing each file by hand.

For step-by-step manual setup, see the [manual quickstart](/docs/ai-gateway/getting-started).

## Before you begin

Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys\&title=AI+Gateway+API+Keys)
in your Vercel dashboard and click **Create key** to generate a new API key.
Save the key as `AI_GATEWAY_API_KEY` in your environment.

## Install the AI SDK skill

Give your agent up-to-date knowledge of the [AI SDK](https://ai-sdk.dev) by
installing the [AI SDK skill](https://skills.sh/vercel/ai/ai-sdk):

```bash filename="Terminal"
npx skills add vercel/ai --skill ai-sdk
```

This works with Claude Code, Cursor, Cline, and
[18+ other agents](https://skills.sh). The skill ensures your agent uses
current AI SDK APIs rather than outdated patterns.

## Verify AI Gateway works

The fastest way to confirm your API key is working is to have your agent
make a single request. Copy this prompt into your agent:

```txt filename="Prompt"
Make a request to the Vercel AI Gateway to verify my API key works.

- Use cURL to POST to https://ai-gateway.vercel.sh/v1/responses
- Authenticate with a Bearer token using my AI_GATEWAY_API_KEY env var
- Use the model "anthropic/claude-sonnet-4.6"
- Send the prompt: "Invent a new holiday and describe its traditions."
- Run it and show me the response.
```

Your agent will run something like:

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

If you see a model response, your API key and AI Gateway are working.

## Scaffold a new project

To create a full project that uses AI Gateway with the AI SDK, prompt
your agent:

```txt filename="Prompt"
Create a TypeScript project that uses the AI SDK to stream a response
from Vercel AI Gateway.

- Initialize with pnpm and install the `ai` package, dotenv,
  @types/node, tsx, and typescript
- Store the API key in .env.local as AI_GATEWAY_API_KEY
- Use streamText with the model "openai/gpt-5.4"
- Stream the output to stdout, then log token usage and finish reason
- Run it with tsx to verify it works
```

Your agent will create the project, install dependencies, write the code,
and run it.

## Integrate into an existing app

If you already have a project, prompt your agent to add AI Gateway:

```txt filename="Prompt"
Add AI Gateway to this project using the AI SDK.

- Install the `ai` package if not already installed
- Use my AI_GATEWAY_API_KEY from .env.local
- Models use the format "provider/model", for example "openai/gpt-5.4"
```

Your agent will determine where and how to integrate based on your
project's structure and framework.

> **💡 Note:** See [available models](/docs/ai-gateway/models-and-providers) for the full
> list of supported model strings.

## Endpoints and authentication

| Detail                                                                                   | Value                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **[OpenResponses](/docs/ai-gateway/sdks-and-apis/openresponses) endpoint**               | `https://ai-gateway.vercel.sh/v1/responses`                              |
| **[OpenAI Responses](/docs/ai-gateway/sdks-and-apis/responses) endpoint**                | `https://ai-gateway.vercel.sh/v1`                                        |
| **[Chat Completions](/docs/ai-gateway/sdks-and-apis/openai-chat-completions) endpoint**  | `https://ai-gateway.vercel.sh/v1`                                        |
| **[Anthropic Messages](/docs/ai-gateway/sdks-and-apis/anthropic-messages-api) endpoint** | `https://ai-gateway.vercel.sh`                                           |
| **[Auth](/docs/ai-gateway/authentication-and-byok/authentication) header**               | `Authorization: Bearer <AI_GATEWAY_API_KEY>`                             |
| **[Model format](/docs/ai-gateway/models-and-providers)**                                | `provider/model` (e.g., `openai/gpt-5.4`, `anthropic/claude-sonnet-4.6`) |
| **Env variable**                                                                         | `AI_GATEWAY_API_KEY`                                                     |
| **AI SDK package**                                                                       | `ai` (uses AI Gateway automatically with model strings)                  |

## Next steps

- [Provider and model routing with fallbacks](/docs/ai-gateway/models-and-providers/provider-options)
- [Configure your coding agent](/docs/agent-resources/coding-agents) to route all requests through AI Gateway
- [AI SDK documentation](https://ai-sdk.dev/getting-started) for advanced patterns
- Browse [skills.sh](https://skills.sh) for more agent skills

title: "Authentication"
description: "Learn how to authenticate with the AI Gateway using API keys and OIDC tokens."
last\_updated: "2026-03-08T05:03:10.104Z"
source: "https://vercel.com/docs/ai-gateway/authentication-and-byok/authentication"
