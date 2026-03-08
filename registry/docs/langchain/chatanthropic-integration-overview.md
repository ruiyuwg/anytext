## Overview

### Integration details

| Class                                                                                        | Package                                                                      | Serializable | [PY support](https://python.langchain.com/docs/integrations/chat/anthropic/) |                                               Downloads                                              |                                              Version                                              |
| :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :----------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| [ChatAnthropic](https://api.js.langchain.com/classes/langchain_anthropic.ChatAnthropic.html) | [`@langchain/anthropic`](https://www.npmjs.com/package/@langchain/anthropic) |       ✅      |                                       ✅                                      | ![NPM - Downloads](https://img.shields.io/npm/dm/@langchain/anthropic?style=flat-square\&label=%20&) | ![NPM - Version](https://img.shields.io/npm/v/@langchain/anthropic?style=flat-square\&label=%20&) |

### Model features

See the links in the table headers below for guides on how to use specific features.

| [Tool calling](/oss/javascript/langchain/tools) | [Structured output](/oss/javascript/langchain/structured-output) | [Image input](/oss/javascript/langchain/messages#multimodal) | Audio input | Video input | [Token-level streaming](/oss/javascript/langchain/streaming/) | [Token usage](/oss/javascript/langchain/models#token-usage) | [Logprobs](/oss/javascript/langchain/models#log-probabilities) |
| :---------------------------------------------: | :--------------------------------------------------------------: | :----------------------------------------------------------: | :---------: | :---------: | :-----------------------------------------------------------: | :---------------------------------------------------------: | :------------------------------------------------------------: |
|                        ✅                        |                                 ✅                                |                               ✅                              |      ❌      |      ❌      |                               ✅                               |                              ✅                              |                                ❌                               |

## Setup

You'll need to sign up and obtain an [Anthropic API key](https://www.anthropic.com/), and install the `@langchain/anthropic` integration package.

### Credentials

Head to [Anthropic's website](https://www.anthropic.com/) to sign up to Anthropic and generate an API key. Once you've done this set the `ANTHROPIC_API_KEY` environment variable:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export ANTHROPIC_API_KEY="your-api-key"
```

If you want to get automated tracing of your model calls you can also set your [LangSmith](/langsmith/home) API key by uncommenting below:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# export LANGSMITH_TRACING="true"
# export LANGSMITH_API_KEY="your-api-key"
```

### Installation

The LangChain `ChatAnthropic` integration lives in the `@langchain/anthropic` package:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/anthropic @langchain/core
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/anthropic @langchain/core
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/anthropic @langchain/core
```

## Instantiation

Now we can instantiate our model object and generate chat completions:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic"

const llm = new ChatAnthropic({
    model: "claude-haiku-4-5-20251001",
    temperature: 0,
    maxTokens: undefined,
    maxRetries: 2,
    // other params...
});
```

## Invocation

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const aiMsg = await llm.invoke([
    [
        "system",
        "You are a helpful assistant that translates English to French. Translate the user sentence.",
    ],
    ["human", "I love programming."],
])
aiMsg
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
AIMessage {
  "id": "msg_013WBXXiggy6gMbAUY6NpsuU",
  "content": "Voici la traduction en français :\n\nJ'adore la programmation.",
  "additional_kwargs": {
    "id": "msg_013WBXXiggy6gMbAUY6NpsuU",
    "type": "message",
    "role": "assistant",
    "model": "claude-haiku-4-5-20251001",
    "stop_reason": "end_turn",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 29,
      "output_tokens": 20
    }
  },
  "response_metadata": {
    "id": "msg_013WBXXiggy6gMbAUY6NpsuU",
    "model": "claude-haiku-4-5-20251001",
    "stop_reason": "end_turn",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 29,
      "output_tokens": 20
    },
    "type": "message",
    "role": "assistant"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "input_tokens": 29,
    "output_tokens": 20,
    "total_tokens": 49
  }
}
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(aiMsg.content)
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Voici la traduction en français :

J'adore la programmation.
```
