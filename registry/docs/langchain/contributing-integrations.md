# Contributing integrations

Source: https://docs.langchain.com/oss/javascript/contributing/integrations-langchain

**Integrations are a core component of LangChain.**

LangChain provides standard interfaces for several different components (language models, vector stores, etc) that are crucial when building LLM applications. Implementing a new integration helps expand LangChain's ecosystem and makes your service discoverable to millions of developers.

## Why implement a LangChain integration?

LangChain is the most used framework for building LLM applications, with over 200 million monthly downloads.

LangChain components expose a standard interface, allowing developers to easily swap them for each other. If you implement a LangChain integration, any developer using a different component will easily be able to swap yours in.

Through their standard interface, LangChain components encourage and facilitate best practices (streaming, async, etc.) that improve developer experience and application performance.

## Components to integrate

While any component can be integrated into LangChain, there are specific types of integrations we encourage more:

**Integrate these ✅**:

- [**Chat Models**](/oss/javascript/integrations/chat): Most actively used component type
- [**Tools/Toolkits**](/oss/javascript/integrations/tools): Enable agent capabilities
- [**Retrievers**](/oss/javascript/integrations/retrievers): Core to RAG applications
- [**Embedding Models**](/oss/javascript/integrations/embeddings): Foundation for vector operations
- [**Vector Stores**](/oss/javascript/integrations/vectorstores): Essential for semantic search
- [**Middleware**](/oss/javascript/integrations/middleware): Extend agent behavior with hooks
- [**Sandboxes**](/oss/javascript/deepagents/sandboxes): Run code safely with Deep Agents

  Be aware that we feature third-party sandbox integrations only when:

  - The integration is authored and maintained by the company that provides the sandbox.
  - **Or** the integration is widely used, meaning the integration must have a minimum of 10,000 daily downloads on PyPI or npm to be considered for featuring.

**Not these ❌**:

- **LLMs (Text-Completion Models)**: Deprecated in favor of [Chat Models](/oss/javascript/integrations/chat)
- [**Document Loaders**](/oss/javascript/integrations/document_loaders): High maintenance burden
- [**Key-Value Stores**](/oss/javascript/integrations/stores): Limited usage
- **Document Transformers**: Niche use cases
- **Model Caches**: Infrastructure concerns
- **Graphs**: Complex abstractions
- **Message Histories**: Storage abstractions
- **Callbacks**: System-level components
- **Chat Loaders**: Limited demand
- **Adapters**: Edge case utilities

## How to contribute an integration

```
If applicable, implement support for LangChain's [standard test](/oss/javascript/contributing/standard-tests-langchain) suite for your integration and successfully run them.







Open a PR to add documentation for your integration to the official LangChain docs.


  An integration is only as useful as its documentation. To ensure a consistent experience for users, docs are required for all new integrations. We have a standard starting-point template for each type of integration for you to copy and modify.

  In a new PR to the LangChain [docs repo](https://github.com/langchain-ai/docs), create a new file in the relevant directory under `src/oss/python/integrations/<component_type>/integration_name.mdx` using the appropriate template file:

  * [Chat models](https://github.com/langchain-ai/docs/blob/main/src/oss/python/integrations/chat/TEMPLATE.mdx)
  * [Tools and toolkits](https://github.com/langchain-ai/docs/blob/main/src/oss/python/integrations/tools/TEMPLATE.mdx)
  * Retrievers - Coming soon
  * Text splitters - Coming soon
  * Embedding models - Coming soon
  * [Vector stores](https://github.com/langchain-ai/docs/blob/main/src/oss/python/integrations/vectorstores/TEMPLATE.mdx)
  * Document loaders - Coming soon
  * Key-value stores - Coming soon




(Optional) Engage with the LangChain team for joint [co-marketing](/oss/javascript/contributing/comarketing).
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/contributing/integrations-langchain.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
