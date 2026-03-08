## Simplified package

The `langchain` package namespace has been significantly reduced in v1 to focus on essential building blocks for agents. The streamlined package makes it easier to discover and use the core functionality.

### Namespace

| Module                                                                                | What's available                                                                                                                                                                                                            | Notes                             |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`langchain.agents`](https://reference.langchain.com/python/langchain/agents)         | [`create_agent`](https://reference.langchain.com/python/langchain/agents/factory/create_agent), [`AgentState`](https://reference.langchain.com/python/langchain/agents/middleware/types/AgentState)                         | Core agent creation functionality |
| [`langchain.messages`](https://reference.langchain.com/python/langchain/messages)     | Message types, [content blocks](https://reference.langchain.com/python/langchain-core/messages/content/ContentBlock), [`trim_messages`](https://reference.langchain.com/python/langchain-core/messages/utils/trim_messages) | Re-exported from `langchain-core` |
| [`langchain.tools`](https://reference.langchain.com/python/langchain/tools)           | [`@tool`](https://reference.langchain.com/python/langchain-core/tools/convert/tool), [`BaseTool`](https://reference.langchain.com/python/langchain-core/tools/base/BaseTool), injection helpers                             | Re-exported from `langchain-core` |
| [`langchain.chat_models`](https://reference.langchain.com/python/langchain/models)    | [`init_chat_model`](https://reference.langchain.com/python/langchain/chat_models/base/init_chat_model), [`BaseChatModel`](https://reference.langchain.com/python/langchain-core/language_models/chat_models/BaseChatModel)  | Unified model initialization      |
| [`langchain.embeddings`](https://reference.langchain.com/python/langchain/embeddings) | [`init_embeddings`](https://reference.langchain.com/python/langchain/embeddings/base/init_embeddings), [`Embeddings`](https://reference.langchain.com/python/langchain-core/embeddings/embeddings/Embeddings)               | Embedding models                  |

### `langchain-classic`

If you were using any of the following from the `langchain` package, you'll need to install [`langchain-classic`](https://pypi.org/project/langchain-classic/) and update your imports:

- Legacy chains (`LLMChain`, `ConversationChain`, etc.)
- Retrievers (e.g. `MultiQueryRetriever` or anything from the previous `langchain.retrievers` module)
- The indexing API
- The hub module (for managing prompts programmatically)
- Embeddings modules (e.g. `CacheBackedEmbeddings` and community embeddings)
- [`langchain-community`](https://pypi.org/project/langchain-community) re-exports
- Other deprecated functionality

  ```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  # Chains
  from langchain_classic.chains import LLMChain

  # Retrievers
  from langchain_classic.retrievers import ...

  # Indexing
  from langchain_classic.indexes import ...

  # Hub
  from langchain_classic import hub
  ```

  ```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  # Chains
  from langchain_classic.chains import LLMChain

  # Retrievers
  from langchain.retrievers import ...

  # Indexing
  from langchain.indexes import ...

  # Hub
  from langchain import hub
  ```

Install with:

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langchain-classic
```

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langchain-classic
```

***
