# Remote setup

The remote version of the MCP server is available at `https://mcp.svelte.dev/mcp`.

Here's how to set it up in some common MCP clients:

## Claude Code

To include the remote MCP version in Claude Code, simply run the following command:

```bash
claude mcp add -t http -s [scope] svelte https://mcp.svelte.dev/mcp
```

You can choose your preferred `scope` (it must be `user`, `project` or `local`) and `name`.

If you prefer you can also install the `svelte` plugin in [the Svelte Claude Code Marketplace](plugin) that will give you both the remote server and useful [skills](skills).

## Claude Desktop

- Open Settings > Connectors
- Click on Add Custom Connector
- When prompted for a name, enter `svelte`
- Under the Remote MCP server URL input, use `https://mcp.svelte.dev/mcp`
- Click Add

## Codex CLI

Add the following to your `config.toml` (which defaults to `~/.codex/config.toml`, but refer to [the configuration documentation](https://github.com/openai/codex/blob/main/docs/config.md) for more advanced setups):

```toml
experimental_use_rmcp_client = true
[mcp_servers.svelte]
url = "https://mcp.svelte.dev/mcp"
```

## Copilot CLI

Use the Copilot CLI to interactively add the MCP server:

```bash
/mcp add
```

Alternatively, create or edit `~/.copilot/mcp-config.json` and add the following configuration:

```json
{
	"mcpServers": {
		"svelte": {
			"url": "https://mcp.svelte.dev/mcp"
		}
	}
}
```

## Gemini CLI

To use the remote MCP server with Gemini CLI, simply run the following command:

```bash
gemini mcp add -t http -s [scope] svelte https://mcp.svelte.dev/mcp
```

The `[scope]` must be `user` or `project`.

## OpenCode

You can automatically configure the MCP server using the [OpenCode plugin](opencode-plugin) (recommended). If you prefer to configure the MCP server manually, run:

```bash
opencode mcp add
```

and follow the instructions, selecting 'Remote' under the 'Select MCP server type' prompt:

```bash
opencode mcp add

┌  Add MCP server
│
◇  Enter MCP server name
│  svelte
│
◇  Select MCP server type
│  Remote
│
◇  Enter MCP server URL
│  https://mcp.svelte.dev/mcp
```

## VS Code

- Open the command palette
- Select "MCP: Add Server..."
- Select "HTTP (HTTP or Server-Sent-Events)"
- Insert `https://mcp.svelte.dev/mcp` in the input and press `Enter`
- Insert your preferred name
- Select if you want to add it as a `Global` or `Workspace` MCP server

## Cursor

- Open the command palette
- Select "View: Open MCP Settings"
- Click on "Add custom MCP"

It will open a file with your MCP servers where you can add the following configuration:

```json
{
	"mcpServers": {
		"svelte": {
			"url": "https://mcp.svelte.dev/mcp"
		}
	}
}
```

## GitHub Coding Agent

- Open your repository in GitHub
- Go to Settings
- Open Copilot > Coding agent
- Edit the MCP configuration

```json
{
	"mcpServers": {
		"svelte": {
			"type": "http",
			"url": "https://mcp.svelte.dev/mcp",
			"tools": ["*"]
		}
	}
}
```

- Click *Save MCP configuration*

## Other clients

If we didn't include the MCP client you are using, refer to their documentation for `remote` servers and use `https://mcp.svelte.dev/mcp` as the URL.

# Tools

The following tools are provided by the MCP server to the model you are using, which can decide to call one or more of them during a session:

## list-sections

Provides a list of all the available documentation sections.

## get-documentation

Allows the model to get the full (and up-to-date) documentation for the requested sections directly from [svelte.dev/docs](/docs).

## svelte-autofixer

Uses static analysis to provide suggestions for code that your LLM generates. It can be invoked in an agentic loop by your model until all issues and suggestions are resolved.

## playground-link

Generates an ephemeral playground link with the generated code. It's useful when the generated code is not written to a file in your project and you want to quickly test the generated solution. The code is not stored anywhere except the URL itself (which will often, as a consequence, be quite large).

# Resources

This is the list of available resources provided by the MCP server. Resources are included by the user (not by the LLM) and are useful if you want to include specific knowledge in your session. For example, if you know that the component will need to use transitions you can include the transition documentation directly without asking the LLM to do it for you.

## doc-section

This dynamic resource allows you to add every section of the Svelte documentation as a resource. The URI looks like this `svelte://slug-of-the-docs.md` and the returned resource will contain the `llms.txt` version of the specific page you selected.
