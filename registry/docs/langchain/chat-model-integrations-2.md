# Chat model integrations

Source: https://docs.langchain.com/oss/python/integrations/chat/index

Integrate with chat models using LangChain Python.

[Chat models](/oss/python/langchain/models) are language models that use a sequence of [messages](/oss/python/langchain/messages) as inputs and return messages as outputs (as opposed to traditional, plaintext LLMs).

## Featured models

**While these LangChain classes support the indicated advanced feature**, you may need to refer to provider-specific documentation to learn which hosted models or backends support the feature.

| Model                                                                          | [Tool calling](/oss/python/langchain/tools) | [Structured output](/oss/python/langchain/structured-output/) | [Multimodal](/oss/python/langchain/messages#multimodal) |
| ------------------------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| [`ChatOpenAI`](/oss/python/integrations/chat/openai)                           | ✅                                           | ✅                                                             | ✅                                                       |
| [`ChatAnthropic`](/oss/python/integrations/chat/anthropic)                     | ✅                                           | ✅                                                             | ✅                                                       |
| [`ChatVertexAI`](/oss/python/integrations/chat/google_vertex_ai) (deprecated)  | ✅                                           | ✅                                                             | ✅                                                       |
| [`ChatGoogleGenerativeAI`](/oss/python/integrations/chat/google_generative_ai) | ✅                                           | ✅                                                             | ✅                                                       |
| [`AzureChatOpenAI`](/oss/python/integrations/chat/azure_chat_openai)           | ✅                                           | ✅                                                             | ✅                                                       |
| [`ChatGroq`](/oss/python/integrations/chat/groq)                               | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatBedrock`](/oss/python/integrations/chat/bedrock)                         | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatAmazonNova`](/oss/python/integrations/chat/amazon_nova)                  | ✅                                           | ❌                                                             | ✅                                                       |
| [`ChatHuggingFace`](/oss/python/integrations/chat/huggingface)                 | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatOllama`](/oss/python/integrations/chat/ollama)                           | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatWatsonx`](/oss/python/integrations/chat/ibm_watsonx)                     | ✅                                           | ✅                                                             | ✅                                                       |
| [`ChatXAI`](/oss/python/integrations/chat/xai)                                 | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatNVIDIA`](/oss/python/integrations/chat/nvidia_ai_endpoints)              | ✅                                           | ✅                                                             | ✅                                                       |
| [`ChatCohere`](/oss/python/integrations/chat/cohere)                           | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatMistralAI`](/oss/python/integrations/chat/mistralai)                     | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatTogether`](/oss/python/integrations/chat/together)                       | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatFireworks`](/oss/python/integrations/chat/fireworks)                     | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatLlamaCpp`](/oss/python/integrations/chat/llamacpp)                       | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatDeepSeek`](/oss/python/integrations/chat/deepseek)                       | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatDatabricks`](/oss/python/integrations/chat/databricks)                   | ✅                                           | ✅                                                             | ❌                                                       |
| [`ChatPerplexity`](/oss/python/integrations/chat/perplexity)                   | ❌                                           | ✅                                                             | ✅                                                       |
| [`ChatOpenRouter`](/oss/python/integrations/chat/openrouter)                   | ✅                                           | ✅                                                             | ✅                                                       |

### Routers & proxies

Routers and proxies give you access to models from multiple providers through a single API and credential. They can simplify billing, let you switch between models without changing integrations, and offer features like automatic fallbacks.

| Provider                             | Integration                                                  | Description                                                             |
| ------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| [OpenRouter](https://openrouter.ai/) | [`ChatOpenRouter`](/oss/python/integrations/chat/openrouter) | Unified access to models from OpenAI, Anthropic, Google, Meta, and more |

## Chat Completions API

Certain model providers offer endpoints that are compatible with OpenAI's [Chat Completions API](https://platform.openai.com/docs/api-reference/chat). In such cases, you can use [`ChatOpenAI`](/oss/python/integrations/chat/openai) with a custom `base_url` to connect to these endpoints for basic chat functionality.

`ChatOpenAI` targets [official OpenAI API specifications](https://github.com/openai/openai-openapi) only. Non-standard response fields from third-party providers (e.g., `reasoning_content`, `reasoning`, `reasoning_details`) **are not extracted or preserved**. Use a provider-specific package when you need access to non-standard features.

For instance, OpenRouter has a dedicated LangChain integration. See the [`ChatOpenRouter` guide](/oss/python/integrations/chat/openrouter) for setup and usage.

## All chat models

If you'd like to contribute an integration, see [Contributing integrations](/oss/python/contributing#add-a-new-integration).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/integrations/chat/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
