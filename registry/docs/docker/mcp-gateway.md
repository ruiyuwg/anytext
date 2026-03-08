Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# MCP Gateway

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The MCP Gateway is Docker's open source solution for orchestrating Model Context Protocol (MCP) servers. It acts as a centralized proxy between clients and servers, managing configuration, credentials, and access control.

When using MCP servers without the MCP Gateway, you need to configure applications individually for each AI application. With the MCP Gateway, you configure applications to connect to the Gateway. The Gateway then handles server lifecycle, routing, and authentication across all servers in your [profiles](https://docs.docker.com/ai/mcp-catalog-and-toolkit/profiles/).

> Note
>
> If you use Docker Desktop with MCP Toolkit enabled, the Gateway runs automatically in the background. You don't need to start or configure it manually. This documentation is for users who want to understand how the Gateway works or run it directly for advanced use cases.

> Tip
>
> E2B sandboxes now include direct access to the Docker MCP Catalog, giving developers access to over 200 tools and services to seamlessly build and run AI agents. For more information, see [E2B Sandboxes](https://docs.docker.com/ai/sandboxes/).

## [How it works](#how-it-works)

MCP Gateway runs MCP servers in isolated Docker containers with restricted privileges, network access, and resource usage. It includes built-in logging and call-tracing capabilities to ensure full visibility and governance of AI tool activity.

The MCP Gateway manages the server's entire lifecycle. When an AI application needs to use a tool, it sends a request to the Gateway. The Gateway identifies which server handles that tool and, if the server isn't already running, starts it as a Docker container. The Gateway then injects any required credentials, applies security restrictions, and forwards the request to the server. The server processes the request and returns the result through the Gateway back to the AI application.

The MCP Gateway solves a fundamental problem: MCP servers are just programs that need to run somewhere. Running them directly on your machine means dealing with installation, dependencies, updates, and security risks. By running them as containers managed by the Gateway, you get isolation, consistent environments, and centralized control.

The Gateway works with profiles to determine which servers are available. When you run the Gateway, you specify which profile to use with the `--profile` flag to determine which servers are made available to clients.

## [Usage](#usage)

To use the MCP Gateway, you'll need Docker Desktop with MCP Toolkit enabled. Follow the [MCP Toolkit guide](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) to enable and configure servers through the Docker Desktop interface, or see [Use MCP Toolkit from the CLI](https://docs.docker.com/ai/mcp-catalog-and-toolkit/cli/) for terminal-based workflows.

### [Install the MCP Gateway manually](#install-the-mcp-gateway-manually)

For Docker Engine without Docker Desktop, you'll need to download and install the MCP Gateway separately before you can run it.

1. Download the latest binary from the [GitHub releases page](https://github.com/docker/mcp-gateway/releases/latest).

2. Move or symlink the binary to the destination matching your OS:

   OS

   Binary destination

   Linux

   `~/.docker/cli-plugins/docker-mcp`

   macOS

   `~/.docker/cli-plugins/docker-mcp`

   Windows

   `%USERPROFILE%\.docker\cli-plugins`

3. Make the binaries executable:

   ```bash
   $ chmod +x ~/.docker/cli-plugins/docker-mcp
   ```

You can now use the `docker mcp` command:

```bash
docker mcp --help
```

## [Additional information](#additional-information)

For more details on how the MCP Gateway works and available customization options, see the complete documentation [on GitHub](https://github.com/docker/mcp-gateway).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/mcp-catalog-and-toolkit/mcp-gateway.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fmcp-catalog-and-toolkit%2fmcp-gateway%2f\&labels=status%2Ftriage)

Table of contents
