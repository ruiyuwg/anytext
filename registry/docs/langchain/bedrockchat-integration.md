# BedrockChat integration

Source: https://docs.langchain.com/oss/javascript/integrations/chat/bedrock

Integrate with the BedrockChat chat model using LangChain JavaScript.

[Amazon Bedrock](https://aws.amazon.com/bedrock/) is a fully managed service that offers a choice of high-performing foundation models (FMs) from leading AI companies like AI21 Labs, Anthropic, Cohere, Meta, Stability AI, and Amazon via a single API, along with a broad set of capabilities you need to build generative AI applications with security, privacy, and responsible AI.

This will help you getting started with Amazon Bedrock [chat models](/oss/javascript/langchain/models). For detailed documentation of all `BedrockChat` features and configurations head to the [API reference](https://api.js.langchain.com/classes/langchain_community_chat_models_bedrock.BedrockChat.html).

The newer [`ChatBedrockConverse` chat model is now available via the dedicated `@langchain/aws`](/oss/javascript/integrations/chat/bedrock_converse) integration package. Use [tool calling](/oss/javascript/langchain/tools) with more models with this package.

## Overview

### Integration details

| Class                                                                                                          | Package                                                          | Serializable | [PY support](https://python.langchain.com/docs/integrations/chat/bedrock/) |                                               Downloads                                              |                                              Version                                              |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- | :----------: | :------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| [`BedrockChat`](https://api.js.langchain.com/classes/langchain_community_chat_models_bedrock.BedrockChat.html) | [`@langchain/community`](https://npmjs.com/@langchain/community) |       ✅      |                                      ✅                                     | ![NPM - Downloads](https://img.shields.io/npm/dm/@langchain/community?style=flat-square\&label=%20&) | ![NPM - Version](https://img.shields.io/npm/v/@langchain/community?style=flat-square\&label=%20&) |

### Model features

See the links in the table headers below for guides on how to use specific features.

| [Tool calling](/oss/javascript/langchain/tools) | [Structured output](/oss/javascript/langchain/structured-output) | [Image input](/oss/javascript/langchain/messages#multimodal) | Audio input | Video input | [Token-level streaming](/oss/javascript/langchain/streaming/) | [Token usage](/oss/javascript/langchain/models#token-usage) | [Logprobs](/oss/javascript/langchain/models#log-probabilities) |
| :---------------------------------------------: | :--------------------------------------------------------------: | :----------------------------------------------------------: | :---------: | :---------: | :-----------------------------------------------------------: | :---------------------------------------------------------: | :------------------------------------------------------------: |
|                        ✅                        |                                 ✅                                |                               ✅                              |      ❌      |      ❌      |                               ✅                               |                              ✅                              |                                ❌                               |

## Setup

To access Bedrock models you'll need to create an AWS account, set up the Bedrock API service, get an access key ID and secret key, and install the `@langchain/community` integration package.

### Credentials

Head to the [AWS docs](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html) to sign up for AWS and setup your credentials. You'll also need to turn on model access for your account, which you can do by [following these instructions](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html).

If you want to get automated tracing of your model calls you can also set your [LangSmith](/langsmith/home) API key by uncommenting below:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# export LANGSMITH_TRACING="true"
# export LANGSMITH_API_KEY="your-api-key"
```

### Installation

The LangChain `BedrockChat` integration lives in the `@langchain/community` package. You'll also need to install several official AWS packages as peer dependencies:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/community @langchain/core @aws-crypto/sha256-js @aws-sdk/credential-provider-node @smithy/protocol-http @smithy/signature-v4 @smithy/eventstream-codec @smithy/util-utf8 @aws-sdk/types
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/community @langchain/core @aws-crypto/sha256-js @aws-sdk/credential-provider-node @smithy/protocol-http @smithy/signature-v4 @smithy/eventstream-codec @smithy/util-utf8 @aws-sdk/types
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/community @langchain/core @aws-crypto/sha256-js @aws-sdk/credential-provider-node @smithy/protocol-http @smithy/signature-v4 @smithy/eventstream-codec @smithy/util-utf8 @aws-sdk/types
```

You can also use BedrockChat in web environments such as Edge functions or Cloudflare Workers by omitting the @aws-sdk/credential-provider-node dependency and using the web entrypoint:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/community @langchain/core @aws-crypto/sha256-js @smithy/protocol-http @smithy/signature-v4 @smithy/eventstream-codec @smithy/util-utf8 @aws-sdk/types
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/community @langchain/core @aws-crypto/sha256-js @smithy/protocol-http @smithy/signature-v4 @smithy/eventstream-codec @smithy/util-utf8 @aws-sdk/types
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/community @langchain/core @aws-crypto/sha256-js @smithy/protocol-http @smithy/signature-v4 @smithy/eventstream-codec @smithy/util-utf8 @aws-sdk/types
```

## Instantiation

Currently, only Anthropic, Cohere, and Mistral models are supported with the chat model integration. For foundation models from AI21 or Amazon, see the [text generation Bedrock variant](/oss/javascript/integrations/llms/bedrock/).

There are a few different ways to authenticate with AWS - the below examples rely on an access key, secret access key and region set in your environment variables:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { BedrockChat } from "@langchain/community/chat_models/bedrock";

const llm = new BedrockChat({
  model: "anthropic.claude-3-5-sonnet-20240620-v1:0",
  region: process.env.BEDROCK_AWS_REGION,
  credentials: {
    accessKeyId: process.env.BEDROCK_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY!,
  },
  // endpointUrl: "custom.amazonaws.com",
  // modelKwargs: {
  //   anthropic_version: "bedrock-2023-05-31",
  // },
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
  "content": "J'adore la programmation.",
  "additional_kwargs": {
    "id": "msg_bdrk_01RwhfuWkLLcp7ks1X3u8bwd"
  },
  "response_metadata": {
    "type": "message",
    "role": "assistant",
    "model": "claude-3-5-sonnet-20240620",
    "stop_reason": "end_turn",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 29,
      "output_tokens": 11
    }
  },
  "tool_calls": [],
  "invalid_tool_calls": []
}
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(aiMsg.content)
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
J'adore la programmation.
```

## Tool calling

Tool calling with Bedrock models works in a similar way to [other models](/oss/javascript/langchain/tools), but note that not all Bedrock models support tool calling. Please refer to the [AWS model documentation](https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html) for more information.

***

## API reference

For detailed documentation of all `BedrockChat` features and configurations head to the [API reference](https://api.js.langchain.com/classes/langchain_community_chat_models_bedrock.BedrockChat.html).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/chat/bedrock.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
