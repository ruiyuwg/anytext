# MCP setup and introduction

The Sanity Model Context Protocol (MCP) server enables AI assistants like Claude Code and Cursor to interact directly with your Sanity projects.

With the MCP server, agents can go beyond code generation and perform advanced content management operations in your Sanity projects—execute GROQ queries, manage releases, and patch documents with full awareness of your schema, eliminating the need to manually supply context.

## Installation

The Sanity MCP server is hosted on Sanity's own infrastructure on `https://mcp.sanity.io`. It follows Anthropic's official MCP specification and works with any MCP-compatible client. It supports authentication through both OAuth (default) and token-based authentication.

**Prerequisites:**

- An MCP-compatible client, such as [Claude Code](https://docs.anthropic.com/en/docs/claude-code/mcp), [Cursor](https://docs.cursor.com/context/mcp#installing-mcp-servers), [VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers), [Lovable](https://docs.lovable.dev/integrations/mcp-servers), or [v0](https://v0.app/docs/MCP).
- A Sanity account.

### Quick install via Sanity CLI

The easiest way to get started is using the [Sanity CLI](https://www.sanity.io/docs/apis-and-sdks/cli). It detects the most common AI-powered editors (Cursor, VS Code, Claude Code) and automatically configures the MCP server for you.

**Terminal**

```sh
npx sanity@latest mcp configure
```

This command uses your logged-in CLI user for authentication, so you don't need to manually authenticate or manage API tokens.

### Claude Code

Run the following command in your terminal to add the Sanity MCP server. The next time you run Claude Code, it will have access to the MCP and you can authenticate with OAuth.

```sh
claude mcp add Sanity -t http https://mcp.sanity.io --scope user
```

### Cursor

Use the link below to directly install the Sanity MCP server in Cursor. Once installed, you'll be prompted to authorize access.

[Add to Cursor →](https://www.sanity.iocursor://anysphere.cursor-deeplink/mcp/install?name=Sanity\&config=eyJ1cmwiOiJodHRwczovL21jcC5zYW5pdHkuaW8iLCJ0eXBlIjoiaHR0cCJ9Cg==)

You can confirm the server is running by opening the **Command Palette** (`Cmd+Shift+P` / `Ctrl+Shift+P`) and running **View: Open MCP Settings**.

Alternatively, you can manually update your configuration:

1. Open the **Command Palette** and run **View: Open MCP Settings**.
2. Select **+ New MCP Server** in the settings pane. This will open your `mcp.json` file.
3. Add the following configuration:

**mcp.json**

```json
{
  "mcpServers": {
    "Sanity": {
      "type": "http",
      "url": "https://mcp.sanity.io"
    }
  }
}
```

Once you save the file, Cursor detects the new server and prompts you to authenticate via OAuth to complete the connection.

### VS Code

1. Open Visual Studio Code.
2. In the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`), run: **MCP: Open User Configuration**.
3. Update the `mcp.json` file with the following configuration and save the file:

**mcp.json**

```json
{
  "servers": {
    "Sanity": {
      "type": "http",
      "url": "https://mcp.sanity.io"
    }
  }
}
```

Once you save the file, VS Code detects the new server and prompts you to authenticate via OAuth to complete the connection.

### OpenCode

You can add Sanity as a remote MCP server in your OpenCode configuration.

1. Open your OpenCode config file.
2. Add the following configuration to the `mcp` section:

**opencode.json**

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "sanity": {
      "type": "remote",
      "url": "https://mcp.sanity.io",
      "oauth": {}
    }
  }
}
```

Save the file and authenticate with Sanity by running: `opencode mcp auth sanity`

Once authenticated, you can use Sanity tools in your prompts by mentioning `sanity`. For more details, see the [OpenCode MCP documentation](https://opencode.ai/docs/mcp-servers/).

### v0

[v0](https://v0.app) is an AI agent from Vercel that helps anyone create real code and full-stack apps. Ship features, refine designs, update copy, and create live prototypes – all with a prompt. Here’s how you add the Sanity MCP:

1. In the v0 prompt input field, click **Prompt Tools** (bottom left).
2. Select **MCPs**, then click **Add New**.
3. Select **Sanity**.
4. Click **Authorize**.
5. Follow the prompt to authenticate with your Sanity account via OAuth.

### Lovable

You can add Sanity as a "Personal connector" in Lovable.

1. In Lovable, go to **Settings** > **Connectors** > **Personal connectors**.
2. Click **New MCP server**.
3. Enter `Sanity` as the name and `https://mcp.sanity.io` as the Server URL.
4. Click **Add & authorize**.
5. Follow the prompt to authenticate with your Sanity account via OAuth.

For more details on managing connectors, see the [Lovable MCP documentation](https://docs.lovable.dev/integrations/mcp-servers).

### Replit

You can add Sanity as a custom MCP server in Replit Agent.

1. Go to the [Integrations Page](https://replit.com/integrations), then scroll down to **MCP Servers for Replit Agent**.
2. Click **Add MCP server**.
3. Enter `Sanity` as the name and `https://mcp.sanity.io` as the Server URL.
4. Click **Test & Save**.
5. Follow the prompt to authenticate with your Sanity account via OAuth.

Once saved, you can ask Replit Agent to use Sanity by mentioning it in your chat. For more details, see the [Replit MCP documentation](https://docs.replit.com/replitai/mcp/overview).

### Other clients

If your client does not support remote MCP servers, you may be able to use a proxy such as `mcp-remote`.

```json
{
  "mcpServers": {
    "Sanity": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp.sanity.io",
        "--transport",
        "http-only"
      ]
    }
  }
}
```

### Authorization

The Sanity MCP server uses OAuth by default to perform operations on your behalf. You may instead provide an API token by setting the `Authorization` header in your MCP config. When configured with the header, the server will not use OAuth. Tool calls will use the API token in accordance with its role and scoped to its permissions.

**mcp.json**

```json
{
  "mcpServers": {
    "Sanity": {
      "url": "https://mcp.sanity.io",
      "headers": {
        "Authorization": "Bearer sk..."
      }
    }
  }
}
```

You can create [API tokens](https://www.sanity.io/docs/content-lake/http-auth) from [sanity.io/manage](https://www.sanity.io/manage) or with the `sanity` CLI's\*\* \*\*[tokens command](https://www.sanity.io/docs/cli-reference/tokens). You can also provide a personal token, which will share your role and permissions, as well as link you to any changes in the revision history.

## Run commands (or tools)

Once configured and started, authenticate with your Sanity credentials if prompted. You can then use natural language to work with Sanity development tasks, such as:

- Help me migrate this project to Sanity.
- Run a GROQ query for all articles written by Mark.
- Add localization to my article document type.
- Help me migrate existing content to a new schema shape.
- List all releases in this dataset.

`mcp.sanity.io` provides both editorial and development-focused tools for content operations, schema exploration, GROQ query execution, project management tasks such as creating and managing resources like datasets and API keys, and migration assistance. These tools allow your AI assistant to interact with your Sanity data directly.

### Available tools

The following is a list of available tools and their uses:

#### Properties

| Property | Description |
| --- | --- |
| get\_schema | Get the full schema of the current Sanity workspace |
| list\_workspace\_schemas | Get a list of all available workspace schema names |
| deploy\_schema | Directly deploy schema types to the cloud. |
| create\_documents\_from\_json | Create one or more draft documents by directly providing JSON content. Creates drafts (drafts.\* prefix) unless releaseId is specified for version creation. |
| create\_documents\_from\_markdown | Create one or more draft documents from Markdown content. Creates drafts (drafts.\* prefix) unless releaseId is specified for version creation. |
| create\_version | Create a version document (versions.{releaseId}.\* prefix) for a specific release. Versions are separate from drafts and published documents, and are used for scheduled release workflows. |
| patch\_document\_from\_json | Apply precise modifications to document fields. When targeting a published document, this creates or updates a draft with the changes (published document remains unchanged). When targeting a draft or version, updates it in place. |
| patch\_document\_from\_markdown | Patch a specific field in a document using Markdown content |
| query\_documents | Query documents from Sanity using GROQ query language |
| generate\_image | Trigger async AI image generation for a document field. |
| transform\_image | Trigger async AI transformation of an existing image. |
| get\_document | Fetch a single document by its exact ID. This is a direct ID lookup only - it does not search, filter, or query. Use when you have a specific document ID and need its full content. |
| publish\_documents | Publish one or more draft documents to make them live |
| unpublish\_documents | Unpublish one or more published documents (moves them back to drafts) |
| version\_replace\_document | Replace the contents of a document version with contents from another document |
| discard\_drafts | Discard one or more draft documents (deletes drafts while keeping published documents intact) |
| version\_discard | Discard one or more document versions from a release |
| version\_unpublish\_document | Mark a document to be unpublished when the release is run |
| list\_organizations | Lists all organizations the user has access to in Sanity |
| list\_projects | Lists all Sanity projects associated with your account |
| get\_project\_studios | Retrieves all studio applications linked to a specific Sanity project |
| create\_project | Creates a new Sanity project and initializes it with a dataset and API tokens |
| add\_cors\_origin | Adds CORS origin(s) to allow client-side requests to a Sanity project |
| list\_datasets | Lists all datasets in your Sanity project |
| create\_dataset | Creates a new dataset with specified name and access settings |
| update\_dataset | Modifies a dataset's name or access control settings |
| list\_embeddings\_indices | List all available embeddings indices for a dataset |
| semantic\_search | Perform a semantic search on an embeddings index |
| migration\_guide | Retrieve guides for migrating schemas and content from other CMS platforms. |
| search\_docs | Search Sanity docs |
| read\_docs | Fetch a specific documentation article. |
| list\_sanity\_rules | List available best-practice development rules. |
| get\_sanity\_rules | Load specific best-practice development rules. |

## Troubleshooting

### Authentication issues

If you encounter authentication errors (e.g., `401 Unauthorized`), the solution depends on how you installed the server:

**Installed via CLI (using token auth)**

If you installed the MCP via the Sanity CLI, your authentication relies on a generated token that may have expired or been revoked. To fix this, simply run the configuration command again and re-select your code editor with `space`:

**Terminal**

```sh
npx sanity@latest mcp configure
```

This will generate a fresh auth token and update your editor's configuration file automatically.

**Manually configured (using OAuth)**

If you configured the server manually, you are likely using OAuth. Sessions typically expire after 7 days. Your client should prompt you to re-authenticate, but if it gets stuck:

- **VS Code:** Run `Authentication: Remove Dynamic Authentication Providers` from the Command Palette, select the Sanity provider, and restart the server.
- **Cursor:** Run `Cursor: Clear All MCP Tokens` from the Command Palette to reset your session.

### Tool availability

If specific tools (like `query_documents`) are missing or failing, verify that your account has the correct permissions for the project and dataset you are trying to access. The set of available tools may also vary as we release updates to the MCP server.

### Markdown to Portable Text results in incorrect elements

Some models may struggle to map markdown (the text format many AI tools use) onto complex Portable Text schemas. If you’re experiencing issues with the MCP server writing to Portable Text (Block) fields, try disabling the following tools:

- `create_documents_from_markdown`
- `patch_document_from_markdown`

You can do this manually in your AI tool of choice, or by instructing the agent not to use them as part of your prompt.

## Support

[Join us in the Sanity community](https://snty.link/community) to ask questions and discuss our MCP server with other developers in the [#mcp-server](https://discord.com/channels/1304483263171264613/1446564219423035533) channel.
