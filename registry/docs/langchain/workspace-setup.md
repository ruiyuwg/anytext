# Workspace setup

Source: https://docs.langchain.com/langsmith/fleet/setup

Add required workspace secrets for models and tools used by Fleet.

This page lists the workspace secrets you need to add before using LangSmith Fleet. Add these in your LangSmith workspace settings under Secrets. Keep values scoped to your workspace and avoid placing credentials in prompts or code.

## Add workspace secrets

In the [LangSmith UI](https://smith.langchain.com), ensure that you have an LLM API key set as a [workspace secret](/langsmith/set-up-hierarchy#configure-workspace-settings) (either Anthropic or OpenAI API key).

1. Navigate to  **Settings** and then move to the **Secrets** tab.
2. Select **Add secret** and enter either `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` as the **name**, and your API key as the **value**.
3. Select **Save secret**.

When adding workspace secrets in the LangSmith UI, make sure the secret keys match the environment variable names expected by your model provider.

## Secret types

### Required model key

For Fleet to make API calls to LLMs, you need to set an OpenAI or Anthropic API key as a workspace secret. The agent graphs load this key from workspace secrets for inference.

Fleet supports custom models per agent. See [Custom models](/langsmith/fleet/essentials#custom-models) for more information.

### Agent builder specific secrets

Secrets prefixed with `FLEET_` are prioritized over workspace secrets within Fleet. This way, you can better track the usage of Fleet vs other parts of LangSmith which use the same secrets.

If you have both `OPENAI_API_KEY` and `FLEET_OPENAI_API_KEY`, the `FLEET_OPENAI_API_KEY` secret will be used.

### Optional tool keys

Add keys for any tools you enable. These are read from workspace secrets at runtime.

- `EXA_API_KEY`: Required for Exa search tools (general web and LinkedIn profile search).
- `TAVILY_API_KEY`: Required for Tavily web search.
- `TWITTER_API_KEY` and `TWITTER_API_KEY_SECRET`: Required for Twitter/X read operations (app-only bearer). Posting/media upload is not enabled.

### MCP server configuration

Fleet can pull tools from one or more remote [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers. Configure MCP servers and headers in your [workspace](/langsmith/administration-overview#workspaces) settings. Fleet automatically discovers tools and applies the configured headers when calling them.

For more information, refer to the [Remote MCP servers](/langsmith/fleet/remote-mcp-servers) page.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/fleet/setup.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
