# Remote MCP servers

Source: https://docs.langchain.com/langsmith/agent-builder-remote-mcp-servers

Connect Agent Builder to popular remote MCP servers

You can connect Agent Builder to remote MCP servers to extend your agents with additional tools and integrations. This page covers how to add custom MCP servers and provides configuration details for popular remote servers.

An [*MCP (Model Context Protocol) server*](https://modelcontextprotocol.io/docs/getting-started/intro) exposes tools that an agent can call at runtime.

A remote MCP server:

- Runs outside of LangSmith (usually over HTTPS).
- Owns its own authentication and authorization.
- Acts as a bridge between your agent and an external system.

LangSmith Agent Builder doesn't execute these tools itself, it forwards requests to the MCP server and returns the results to the agent.

### How it works

- Agent Builder discovers tools from remote MCP servers via the standard MCP protocol.
- Headers configured in your workspace are automatically attached when fetching tools or calling them. Headers are key-value pairs sent with every HTTP request to your MCP server. They're commonly used for authentication (like API keys or bearer tokens), but can also provide configuration information, content types, or custom metadata.
- Tools from remote servers are available alongside built-in tools in Agent Builder.

**Runtime**: Agent Builder automatically connects to your MCP server and uses its tools.

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
sequenceDiagram
    participant Agent as Agent Builder
    participant MCP as Remote MCP Server

    Agent->>MCP: Discover available tools<br/>(with configured headers)
    MCP-->>Agent: Return tool list

    Note over Agent,MCP: Later, when agent needs a tool...

    Agent->>MCP: Call tool<br/>(with configured headers)
    MCP-->>Agent: Return result
```

The following sections show you how to connect a remote MCP server to Agent Builder:

- [General configuration](#general-configuration): Step-by-step instructions for connecting any remote MCP server with authentication headers. Use this if you're familiar with MCP servers and want a quick reference.
- [Example: Connecting a custom MCP server](#example-connecting-a-custom-mcp-server): A detailed walkthrough using a GitHub-based MCP server as an example. Use this if you want to see a complete end-to-end example with specific authentication details.

## Add a remote MCP server

You can add MCP servers directly from your agent or from workspace settings.

Adding MCP servers requires **admin** permissions.

### Add from the agent editor

To add a remote MCP server to a specific agent:

```
Open your agent in the [Agent Builder](https://smith.langchain.com/agents) inbox. Next to the agent name, click the  **Edit Agent** icon.



In the **Toolbox** section, click **MCP**. Enter the server name and URL, then configure authentication (see [authentication types](#authentication-types)).



Click **Save changes**. Agent Builder will discover available tools from your MCP server and make them available in this agent.
```

### Add from workspace settings

To add a remote MCP server to all agents in the workspace:

```
In the LangSmith UI, navigate to the [Settings > MCP servers](https://smith.langchain.com/settings/workspaces/mcp-servers) tab.



Click **Add server** and enter the server name and URL, then configure authentication (see [authentication types](#authentication-types)).



Click **Save server**. Agent Builder will automatically discover available tools from your MCP server and make them available in your agents. The configured headers are applied to both tool discovery requests and tool execution requests.
```

### Authentication types

Select an authentication type based on the server's requirements:

- **Headers**: Add key-value pairs sent with every request. The most common pattern is using an Authorization bearer token:

  - **Key**: `Authorization`
  - **Value**: `Bearer API_KEY`

    You can add multiple headers if your MCP server requires additional authentication or configuration parameters. Each header key-value pair is sent with every request to the server.

- **OAuth 2.1 (Auto)**: Select this for servers that support OAuth via dynamic client registration. You'll be prompted to log in with your account for that service.

- **OAuth 2.1 (Manual)**: Select this for servers that support OAuth, but require specifying the client ID/secret beforehand. OAuth providers used in this flow must have **PKCE** enabled.

  For specific authentication details, see the configuration details for each [supported server](#supported-servers).

## Update your MCP server URL

Changing the URL of a custom MCP server will break any agents that use tools from that server.

Agent Builder stores tool references by MCP server URL. If you update the URL of a custom MCP server, existing agents will fail when attempting to call those tools because the stored URL no longer matches.

To update an MCP server URL:

1. Update your MCP server URL in the workspace settings.
2. For each agent using tools from that server:
   - Remove the affected tools from the agent configuration.
   - Re-add the tools (they will now reference the new URL).
3. Test the agent to confirm tools work correctly.

## Example: Connect a custom MCP server

Here's a practical example of connecting Agent Builder to a GitHub MCP server that requires authentication:

````
The MCP server needs permission to access GitHub on your behalf. You'll do this using a **GitHub Personal Access Token (PAT)**.

1. Go to **GitHub → Settings → Developer settings**.
2. Open **Personal access tokens**.
3. Create a **Fine-grained token** (recommended).

Grant **read-only** permissions:

* **Contents**: Read
* **Issues**: Read
* **Pull requests**: Read

Once created, **copy the token**. You won't be able to see it again.

Treat this token like a password. You can rotate or revoke it at any time without changing your agent.



Remote MCP servers typically authenticate using HTTP headers.

For the GitHub MCP server, the required headers look like this:

```http theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Authorization: Bearer ghp_xxxxxxxxxxxxxxxxxxxx
Content-Type: application/json
User-Agent: langsmith-agent-builder
```

* Authorization proves who you are.
* The MCP server validates the token.
* Every tool call from the agent includes these headers.

Agent Builder will attach these headers automatically once configured.



In the [LangSmith UI](https://smith.langchain.com):

1. Navigate to **Settings** > **Workspaces** > **Secrets**.
2. Click **Add secret**.
3. Name: `GITHUB_TOKEN` (or any descriptive name).
4. Value: Your authentication token.
5. Save the secret.



In **Settings** > **MCP Servers**:

1. Click **Add server**.
2. Add a **Name** for the MCP server.
3. **URL**: Enter your MCP server URL (e.g., `https://mcp-github.example.com`)
4. Add authentication header:
   * Key: `Authorization`
   * Value: `Bearer {{GITHUB_TOKEN}}`
5. Save the configuration.



The tools from your MCP server are now available in Agent Builder. When you create or edit an agent, you'll see these tools alongside the built-in tools. All requests to your MCP server will include the authentication header automatically.

Once connected, the workflow for this example looks like this:

1. The agent decides it needs GitHub data.
2. It selects a tool exposed by the MCP server.
3. LangSmith forwards the request to the remote MCP server.
4. The server authenticates using your token.
5. GitHub data is fetched and returned.
6. The agent receives structured results and continues reasoning.
````

Different MCP servers may use different authentication methods:

- `Authorization: Bearer {{TOKEN}}` (most common)
- `X-API-Key: {{API_KEY}}`
- Custom headers specific to your implementation
- Multiple headers for authentication

Always check your MCP server's documentation for the correct authentication header format.

## Supported servers

### Arcade

[Arcade](https://arcade.dev) provides a gateway for connecting to various tools and services.

**Configuration details**

| Setting       | Value                                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **URL**       | Dynamic. Create an MCP gateway in your [Arcade dashboard](https://arcade.dev), select the tools you want, then copy the generated URL. |
| **Auth type** | Headers or OAuth 2.1 (Auto). See below for specific details.                                                                           |

**Option 1: Headers authentication**

Add the following headers:

| Header           | Value                   |
| ---------------- | ----------------------- |
| `Authorization`  | `Bearer ARCADE_API_KEY` |
| `Arcade-User-Id` | Your email address      |

**Option 2: OAuth authentication**

1. Select **OAuth 2.1 (Auto)** as the auth type when adding the server.
2. Log in with your Arcade account when prompted.

To learn more about Arcade MCP integration, see the [Arcade documentation](https://docs.arcade.dev/en/resources/integrations).

### Parallel

[Parallel](https://parallel.ai) provides search and task automation tools.

**Configuration details**

| Setting       | Value                                |
| ------------- | ------------------------------------ |
| **URL**       | `https://search-mcp.parallel.ai/mcp` |
| **Auth type** | Headers                              |

Add the following header:

| Header          | Value                     |
| --------------- | ------------------------- |
| `Authorization` | `Bearer PARALLEL_API_KEY` |

For more information, see the [Parallel documentation for search MCP](https://docs.parallel.ai/integrations/mcp/search-mcp) and [task MCP](https://docs.parallel.ai/integrations/mcp/task-mcp).

### Notion

[Notion](https://notion.com) provides tools for interacting with your Notion workspace.

**Configuration details**

| Setting       | Value                        |
| ------------- | ---------------------------- |
| **URL**       | `https://mcp.notion.com/mcp` |
| **Auth type** | OAuth 2.1 (Auto)             |

1. Select **OAuth 2.1 (Auto)** as the auth type when adding the server.
2. Log in with your Notion account when prompted.

For more information, see the [Notion MCP documentation](https://developers.notion.com/docs/mcp).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/agent-builder-remote-mcp-servers.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
