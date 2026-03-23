# Changelog

Source: https://docs.langchain.com/oss/python/releases/changelog

Log of updates and improvements to our Python packages

**Subscribe**: Our changelog includes an [RSS feed](https://docs.langchain.com/oss/python/releases/changelog/rss.xml) that can integrate with [Slack](https://slack.com/help/articles/218688467-Add-RSS-feeds-to-Slack), [email](https://zapier.com/apps/email/integrations/rss/1441/send-new-rss-feed-entries-via-email), Discord bots like [Readybot](https://readybot.io/) or [RSS Feeds to Discord Bot](https://rss.app/en/bots/rssfeeds-discord-bot), and other subscription tools.

## `langgraph` v1.1

- **Type-safe streaming (`version="v2"`)**: Pass `version="v2"` to `stream()` / `astream()` for unified `StreamPart` output with `type`, `ns`, and `data` keys on every chunk. Each mode has its own `TypedDict`, all importable from `langgraph.types`. See [streaming docs](/oss/python/langgraph/streaming#stream-output-format-v2).

- **Type-safe invoke (`version="v2"`)**: Pass `version="v2"` to `invoke()` / `ainvoke()` to get a `GraphOutput` object with `.value` and `.interrupts` attributes. See [invoke docs](/oss/python/langgraph/streaming#v2-invoke-format).

- **Pydantic and dataclass coercion**: With `version="v2"`, `invoke()` and `values`-mode stream output are automatically coerced to your declared Pydantic model or dataclass type.

- **Fixed time travel with interrupts and subgraphs**: Replays no longer reuse stale `RESUME` values, and subgraphs correctly restore the checkpoint for the parent's historical state.

- **Fully backwards compatible**: `version="v2"` is opt-in. `GraphOutput` supports deprecated dict-style access for gradual migration.

## `deepagents` v0.4

- New integration packages for pluggable sandboxes: [langchain-modal](https://pypi.org/project/langchain-modal/), [langchain-daytona](https://pypi.org/project/langchain-daytona/), and [langchain-runloop](https://pypi.org/project/langchain-daytona/). See [sandboxes guide](/oss/python/deepagents/sandboxes) and example [data analysis tutorial](/oss/python/deepagents/data-analysis).
- Changes to [conversation history summarization](/oss/python/deepagents/harness#conversation-history-summarization):
  - Summarization now happens in the model node via `wrap_model_call` events. Due to this we retain the full message history in the graph state.
  - More accurate token counting.
  - Summarization will now automatically trigger if a chat model raises a `ContextOverflowError` (defined in `langchain-core`). Currently `langchain-anthropic` and `langchain-openai` support this.
- We now default to the Responses API for model strings prefixed with `"openai:"`.

  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  from langchain.chat_models import init_chat_model

  agent = create_deep_agent(
      model=init_chat_model(
          "openai:...",
          use_responses_api=True,
          store=False,
          include=["reasoning.encrypted_content"],
      )
  )
  ```

## `langchain` v1.2.0

- [`create_agent`](/oss/python/langchain/agents): Simplified support for provider-specific tool parameters and definitions via a new [`extras`](https://reference.langchain.com/python/langchain/tools/#langchain.tools.BaseTool.extras) attribute on [tools](/oss/python/langchain/tools). Examples:
  - Provider-specific configuration such as Anthropic's [programmatic tool calling](/oss/python/integrations/chat/anthropic#programmatic-tool-calling) and [tool search](/oss/python/integrations/chat/anthropic#tool-search).
  - Built-in tools that are executed client-side, as supported by [Anthropic](/oss/python/integrations/chat/anthropic#built-in-tools), [OpenAI](/oss/python/integrations/chat/openai#responses-api), and other providers.
- Support for strict schema-adherence in agent `response_format` (see [`ProviderStrategy`](/oss/python/langchain/structured-output#provider-strategy) docs).

## `langchain-google-genai` v4.0.0

We've re-written the Google GenAI integration to use Google's consolidated Generative AI SDK, which provides access to the Gemini API and Vertex AI Platform under the same interface. This includes minimal breaking changes as well as deprecated packages in `langchain-google-vertexai`.

See the full [release notes and migration guide](https://github.com/langchain-ai/langchain-google/discussions/1422) for details.

## `langchain` v1.1.0

- [Model profiles](/oss/python/langchain/models#model-profiles): Chat models now expose supported features and capabilities through a `.profile` attribute. These data are derived from [models.dev](https://models.dev), an open source project providing model capability data.
- [Summarization middleware](/oss/python/langchain/middleware/built-in#summarization): Updated to support flexible trigger points using model profiles for context-aware summarization.
- [Structured output](/oss/python/langchain/structured-output): `ProviderStrategy` support (native structured output) can now be inferred from model profiles.
- [`SystemMessage` for `create_agent`](/oss/python/langchain/middleware/custom#working-with-system-messages): Support for passing `SystemMessage` instances directly to `create_agent`'s `system_prompt` parameter, enabling advanced features like cache control and structured content blocks.
- [Model retry middleware](/oss/python/langchain/middleware/built-in#model-retry): New middleware for automatically retrying failed model calls with configurable exponential backoff.
- [Content moderation middleware](/oss/python/langchain/middleware/built-in#content-moderation): OpenAI content moderation middleware for detecting and handling unsafe content in agent interactions. Supports checking user input, model output, and tool results.

## v1.0.0

### `langchain`

- [Release notes](/oss/python/releases/langchain-v1)
- [Migration guide](/oss/python/migrate/langchain-v1)

### `langgraph`

- [Release notes](/oss/python/releases/langgraph-v1)
- [Migration guide](/oss/python/migrate/langgraph-v1)

  If you encounter any issues or have feedback, please [open an issue](https://github.com/langchain-ai/docs/issues/new?template=01-langchain.yml) so we can improve. To view v0.x documentation, [go to the archived content](https://github.com/langchain-ai/langchain/tree/v0.3/docs/docs) and [API reference](https://reference.langchain.com/v0.3/python/).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/python/releases/changelog.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
