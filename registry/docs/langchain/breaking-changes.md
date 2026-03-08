## Breaking changes

### Dropped Python 3.9 support

All LangChain packages now require **Python 3.10 or higher**. Python 3.9 reaches [end of life](https://devguide.python.org/versions/) in October 2025.

### Updated return type for chat models

The return type signature for chat model invocation has been fixed from [`BaseMessage`](https://reference.langchain.com/python/langchain-core/messages/base/BaseMessage) to [`AIMessage`](https://reference.langchain.com/python/langchain-core/messages/ai/AIMessage). Custom chat models implementing [`bind_tools`](https://reference.langchain.com/python/langchain-core/language_models/chat_models/BaseChatModel/bind_tools) should update their return signature:

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def bind_tools(
        ...
    ) -> Runnable[LanguageModelInput, AIMessage]:
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def bind_tools(
        ...
    ) -> Runnable[LanguageModelInput, BaseMessage]:
```

### Default message format for OpenAI responses API

When interacting with the Responses API, `langchain-openai` now defaults to storing response items in message `content`. To restore previous behavior, set the `LC_OUTPUT_VERSION` environment variable to `v0`, or specify `output_version="v0"` when instantiating [`ChatOpenAI`](https://reference.langchain.com/python/langchain-openai/chat_models/base/ChatOpenAI).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Enforce previous behavior with output_version flag
model = ChatOpenAI(model="gpt-4.1-mini", output_version="v0")
```

### Default `max_tokens` in `langchain-anthropic`

The `max_tokens` parameter in `langchain-anthropic` now defaults to higher values based on the model chosen, rather than the previous default of `1024`. If you relied on the old default, explicitly set `max_tokens=1024`.

### Legacy code moved to `langchain-classic`

Existing functionality outside the focus of standard interfaces and agents has been moved to the [`langchain-classic`](https://pypi.org/project/langchain-classic) package. See the [Simplified namespace](#simplified-package) section for details on what's available in the core `langchain` package and what moved to `langchain-classic`.

### Removal of deprecated APIs

Methods, functions, and other objects that were already deprecated and slated for removal in 1.0 have been deleted. Check the [deprecation notices](https://python.langchain.com/docs/versions/migrating_chains) from previous versions for replacement APIs.

### Text property

Use of the `.text()` method on message objects should drop the parentheses, as it is now a property:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Property access
text = response.text

# Deprecated method call
text = response.text()
```

Existing usage patterns (i.e., `.text()`) will continue to function but now emit a warning. The method form will be removed in v2.

### `example` parameter removed from `AIMessage`

The `example` parameter has been removed from [`AIMessage`](https://reference.langchain.com/python/langchain-core/messages/ai/AIMessage) objects. We recommend migrating to use `additional_kwargs` for passing extra metadata as needed.

## Minor changes

- `AIMessageChunk` objects now include a `chunk_position` attribute with position `'last'` to indicate the final chunk in a stream. This allows for clearer handling of streamed messages. If the chunk is not the final one, `chunk_position` will be `None`.
- `LanguageModelOutputVar` is now typed to [`AIMessage`](https://reference.langchain.com/python/langchain-core/messages/ai/AIMessage) instead of [`BaseMessage`](https://reference.langchain.com/python/langchain-core/messages/base/BaseMessage).
- The logic for merging message chunks (`AIMessageChunk.add`) has been updated with more sophisticated selection handling for the final id for the merged chunk. It prioritizes provider-assigned IDs over LangChain-generated IDs.
- We now open files with `utf-8` encoding by default.
- Standard tests now use multimodal content blocks.

## Archived docs

Old docs are archived for reference:

- [v0.3 docs content](https://github.com/langchain-ai/langchain/tree/v0.3/docs/docs)
- [v0.3 API reference](https://reference.langchain.com/v0.3/python/)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/migrate/langchain-v1.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
