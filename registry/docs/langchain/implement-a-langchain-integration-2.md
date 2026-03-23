# Implement a LangChain integration

Source: https://docs.langchain.com/oss/python/contributing/implement-langchain

Integration packages are Python packages that users can install for use in their projects. They implement one or more components that adhere to the LangChain interface standards.

LangChain components are subclasses of base classes in [`langchain-core`](https://github.com/langchain-ai/langchain/tree/master/libs/core). Examples include [chat models](/oss/python/integrations/chat), [tools](/oss/python/integrations/tools), [retrievers](/oss/python/integrations/retrievers), and more.

Your integration package will typically implement a subclass of at least one of these components. Expand the tabs below to see details on each.

```
Chat models are subclasses of the [`BaseChatModel`](https://reference.langchain.com/python/langchain-core/language_models/chat_models/BaseChatModel) class. They implement methods for generating chat completions, handling message formatting, and managing model parameters.


  The chat model integration guide is currently WIP. In the meantime, read the [chat model conceptual guide](/oss/python/langchain/models) for details on how LangChain chat models function. You may also refer to existing integrations in the [LangChain repo](https://github.com/langchain-ai/langchain/tree/master/libs/partners)




Embedding models are subclasses of the [`Embeddings`](https://reference.langchain.com/python/langchain-core/embeddings/embeddings/Embeddings) class.


  The embedding model integration guide is currently WIP. In the meantime, read the [embedding model conceptual guide](/oss/python/integrations/embeddings) for details on how LangChain embedding models function.




Tools are used in 2 main ways:

1. To define an "input schema" or "args schema" to pass to a chat model's tool calling feature along with a text request, such that the chat model can generate a "tool call", or parameters to call the tool with.
2. To take a "tool call" as generated above, and take some action and return a response that can be passed back to the chat model as a ToolMessage.

The Tools class must inherit from the [`BaseTool`](https://reference.langchain.com/python/langchain-core/tools/base/BaseTool) base class. This interface has 3 properties and 2 methods that should be implemented in a subclass.


  The tools integration guide is currently WIP. In the meantime, read the [tools conceptual guide](/oss/python/langchain/tools) for details on how LangChain tools function.




[Middleware](/oss/python/langchain/middleware/overview) lets you customize agent behavior by hooking into model calls, tool calls, and agent lifecycle events. Middleware classes subclass the [`AgentMiddleware`](https://reference.langchain.com/python/langchain/agents/middleware/types/AgentMiddleware) base class.

See the [custom middleware guide](/oss/python/langchain/middleware/custom#class) for details on implementing a class-based middleware integration.



Checkpointers enable [persistence](/oss/python/langgraph/persistence) in LangGraph, allowing agents to save and resume state across interactions.

See existing checkpointer integrations in the [LangGraph repo](https://github.com/langchain-ai/langgraph/tree/main/libs) for implementation examples.



Sandbox integrations enable [Deep Agents](/oss/python/deepagents/overview) to run code in isolated environments.

**Reference implementation:** See the [Daytona partner integration](https://github.com/langchain-ai/deepagents/tree/main/libs/partners/daytona) for structure and patterns.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/implement-langchain.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
