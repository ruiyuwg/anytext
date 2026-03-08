## Overview

### Integration details

| Class                                                                               | Package                                                                | Serializable | [PY support](https://python.langchain.com/docs/integrations/chat/openai) |                                             Downloads                                             |                                             Version                                            |
| :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| [ChatOpenAI](https://api.js.langchain.com/classes/langchain_openai.ChatOpenAI.html) | [`@langchain/openai`](https://www.npmjs.com/package/@langchain/openai) |       ✅      |                                     ✅                                    | ![NPM - Downloads](https://img.shields.io/npm/dm/@langchain/openai?style=flat-square\&label=%20&) | ![NPM - Version](https://img.shields.io/npm/v/@langchain/openai?style=flat-square\&label=%20&) |

### Model features

See the links in the table headers below for guides on how to use specific features.

| [Tool calling](/oss/javascript/langchain/tools) | [Structured output](/oss/javascript/langchain/structured-output) | [Image input](/oss/javascript/langchain/messages#multimodal) | Audio input | Video input | [Token-level streaming](/oss/javascript/langchain/streaming/) | [Token usage](/oss/javascript/langchain/models#token-usage) | [Logprobs](/oss/javascript/langchain/models#log-probabilities) |
| :---------------------------------------------: | :--------------------------------------------------------------: | :----------------------------------------------------------: | :---------: | :---------: | :-----------------------------------------------------------: | :---------------------------------------------------------: | :------------------------------------------------------------: |
|                        ✅                        |                                 ✅                                |                               ✅                              |      ❌      |      ❌      |                               ✅                               |                              ✅                              |                                ✅                               |

## Setup

To access OpenAI chat models you'll need to create an OpenAI account, get an API key, and install the `@langchain/openai` integration package.

### Credentials

Head to [OpenAI's website](https://platform.openai.com/) to sign up for OpenAI and generate an API key. Once you've done this set the `OPENAI_API_KEY` environment variable:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export OPENAI_API_KEY="your-api-key"
```

If you want to get automated tracing of your model calls you can also set your [LangSmith](/langsmith/home) API key by uncommenting below:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# export LANGSMITH_TRACING="true"
# export LANGSMITH_API_KEY="your-api-key"
```

### Installation

The LangChain [`ChatOpenAI`](https://reference.langchain.com/javascript/langchain-openai/ChatOpenAI) integration lives in the `@langchain/openai` package:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/openai @langchain/core
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/openai @langchain/core
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/openai @langchain/core
```

## Instantiation

Now we can instantiate our model object and generate chat completions:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai"

const llm = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0,
  // other params...
})
```

## Invocation

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const aiMsg = await llm.invoke([
  {
    role: "system",
    content: "You are a helpful assistant that translates English to French. Translate the user sentence.",
  },
  {
    role: "user",
    content: "I love programming."
  },
])
aiMsg
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
AIMessage {
  "id": "chatcmpl-ADItECqSPuuEuBHHPjeCkh9wIO1H5",
  "content": "J'adore la programmation.",
  "additional_kwargs": {},
  "response_metadata": {
    "tokenUsage": {
      "completionTokens": 5,
      "promptTokens": 31,
      "totalTokens": 36
    },
    "finish_reason": "stop",
    "system_fingerprint": "fp_5796ac6771"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "input_tokens": 31,
    "output_tokens": 5,
    "total_tokens": 36
  }
}
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(aiMsg.content)
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
J'adore la programmation.
```

## Custom URLs

You can customize the base URL the SDK sends requests to by passing a `configuration` parameter like this:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llmWithCustomURL = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0.9,
  configuration: {
    baseURL: "https://your_custom_url.com",
  },
});

await llmWithCustomURL.invoke("Hi there!");
```

The `configuration` field also accepts other `ClientOptions` parameters accepted by the official SDK.

If you are hosting on Azure OpenAI, see the [dedicated page instead](/oss/javascript/integrations/chat/azure).

## Custom headers

You can specify custom headers in the same `configuration` field:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llmWithCustomHeaders = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0.9,
  configuration: {
    defaultHeaders: {
      "Authorization": `Bearer SOME_CUSTOM_VALUE`,
    },
  },
});

await llmWithCustomHeaders.invoke("Hi there!");
```

## Disabling streaming usage metadata

Some proxies or third-party providers present largely the same API interface as OpenAI, but don't support the more recently added `stream_options` parameter to return streaming usage. You can use [`ChatOpenAI`](https://reference.langchain.com/javascript/langchain-openai/ChatOpenAI) to access these providers by disabling streaming usage like this:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const llmWithoutStreamUsage = new ChatOpenAI({
  model: "gpt-4.1",
  temperature: 0.9,
  streamUsage: false,
  configuration: {
    baseURL: "https://proxy.com",
  },
});

await llmWithoutStreamUsage.invoke("Hi there!");
```

## Calling fine-tuned models

You can call fine-tuned OpenAI models by passing in your corresponding `modelName` parameter.

This generally takes the form of `ft:{OPENAI_MODEL_NAME}:{ORG_NAME}::{MODEL_ID}`. For example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const fineTunedLlm = new ChatOpenAI({
  temperature: 0.9,
  model: "ft:gpt-3.5-turbo-0613:{ORG_NAME}::{MODEL_ID}",
});

await fineTunedLlm.invoke("Hi there!");
```

## Generation metadata

If you need additional information like logprobs or token usage, these will be returned directly in the `invoke` response within the `response_metadata` field on the message.

**Requires `@langchain/core` version >=0.1.48.**

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

// See https://cookbook.openai.com/examples/using_logprobs for details
const llmWithLogprobs = new ChatOpenAI({
  model: "gpt-4.1",
  logprobs: true,
  // topLogprobs: 5,
});

const responseMessageWithLogprobs = await llmWithLogprobs.invoke("Hi there!");
console.dir(responseMessageWithLogprobs.response_metadata.logprobs, { depth: null });
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  content: [
    {
      token: 'Hello',
      logprob: -0.0004740447,
      bytes: [ 72, 101, 108, 108, 111 ],
      top_logprobs: []
    },
    {
      token: '!',
      logprob: -0.00004334534,
      bytes: [ 33 ],
      top_logprobs: []
    },
    {
      token: ' How',
      logprob: -0.000030113732,
      bytes: [ 32, 72, 111, 119 ],
      top_logprobs: []
    },
    {
      token: ' can',
      logprob: -0.0004797665,
      bytes: [ 32, 99, 97, 110 ],
      top_logprobs: []
    },
    {
      token: ' I',
      logprob: -7.89631e-7,
      bytes: [ 32, 73 ],
      top_logprobs: []
    },
    {
      token: ' assist',
      logprob: -0.114006,
      bytes: [
         32,  97, 115,
        115, 105, 115,
        116
      ],
      top_logprobs: []
    },
    {
      token: ' you',
      logprob: -4.3202e-7,
      bytes: [ 32, 121, 111, 117 ],
      top_logprobs: []
    },
    {
      token: ' today',
      logprob: -0.00004501419,
      bytes: [ 32, 116, 111, 100, 97, 121 ],
      top_logprobs: []
    },
    {
      token: '?',
      logprob: -0.000010206721,
      bytes: [ 63 ],
      top_logprobs: []
    }
  ],
  refusal: null
}
```
