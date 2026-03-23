When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Docker Hub MCP server

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The Docker Hub MCP Server is a Model Context Protocol (MCP) server that interfaces with Docker Hub APIs to make rich image metadata accessible to LLMs, enabling intelligent content discovery and repository management.

For more information about MCP concepts and how MCP servers work, see the [Docker MCP Catalog and Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/) overview page.

## [Key features](#key-features)

- Advanced LLM context: Docker's MCP Server provides LLMs with detailed, structured context for Docker Hub images, enabling smarter, more relevant recommendations for developers, whether they're choosing a base image or automating CI/CD workflows.
- Natural language image discovery: Developers can find the right container image using natural language, no need to remember tags or repository names. Just describe what you need, and Docker Hub will return images that match your intent.
- Simplified repository management: Hub MCP Server enables agents to manage repositories through natural language fetching image details, viewing stats, searching content, and performing key operations quickly and easily.

## [Install Docker Hub MCP server](#install-docker-hub-mcp-server)

1. From the **MCP Toolkit** menu, select the **Catalog** tab and search for **Docker Hub** and select the plus icon to add the Docker Hub MCP server.

2. In the server's **Configuration** tab, insert your Docker Hub username and personal access token (PAT).

3. In the **Clients** tab in MCP Toolkit, ensure Gordon is connected.

4. From the **Gordon** menu, you can now send requests related to your Docker Hub account, in accordance to the tools provided by the Docker Hub MCP server. To test it, ask Gordon:

   ```text
   What repositories are in my namespace?
   ```

> Tip
>
> By default, the Gordon [client](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/#install-an-mcp-client) is enabled, which means Gordon can automatically interact with your MCP servers.

## [Use Claude Desktop as a client](#use-claude-desktop-as-a-client)

1. Add the Docker Hub MCP Server configuration to your `claude_desktop_config.json`:

   For public repositories only For authenticated access

   ```json
   {
     "mcpServers": {
       "docker-hub": {
         "command": "node",
         "args": ["/FULL/PATH/TO/YOUR/docker-hub-mcp-server/dist/index.js", "--transport=stdio"]
       }
     }
   }
   ```

   Where :

   - `/FULL/PATH/TO/YOUR/docker-hub-mcp-server` is the complete path to where you cloned the repository

   ```json
   {
     "mcpServers": {
       "docker-hub": {
         "command": "node",
         "args": ["/FULL/PATH/TO/YOUR/docker-hub-mcp-server/dist/index.js", "--transport=stdio", "--username=YOUR_DOCKER_HUB_USERNAME"],
         "env": {
           "HUB_PAT_TOKEN": "YOUR_DOCKER_HUB_PERSONAL_ACCESS_TOKEN"
         }
       }
     }
   }
   ```

   Where :

   - `YOUR_DOCKER_HUB_USERNAME` is your Docker Hub username.
   - `YOUR_DOCKER_HUB_PERSONAL_ACCESS_TOKEN` is Docker Hub personal access token
   - `/FULL/PATH/TO/YOUR/docker-hub-mcp-server` is the complete path to where you cloned the repository

2. Save the configuration file and completely restart Claude Desktop for the changes to take effect.

## [Usage with Visual Studio Code](#usage-with-visual-studio-code)

1. Add the Docker Hub MCP Server configuration to your User Settings (JSON) file in Visual Studio Code. You can do this by opening the `Command Palette` and typing `Preferences: Open User Settings (JSON)`.

   For public repositories only For authenticated access

   ```json
   {
     "mcpServers": {
       "docker-hub": {
         "command": "node",
         "args": ["/FULL/PATH/TO/YOUR/docker-hub-mcp-server/dist/index.js", "--transport=stdio"]
       }
     }
   }
   ```

   Where :

   - `/FULL/PATH/TO/YOUR/docker-hub-mcp-server` is the complete path to where you cloned the repository

   ```json
   {
     "mcpServers": {
       "docker-hub": {
         "command": "node",
         "args": ["/FULL/PATH/TO/YOUR/docker-hub-mcp-server/dist/index.js", "--transport=stdio"],
         "env": {
           "HUB_USERNAME": "YOUR_DOCKER_HUB_USERNAME",
           "HUB_PAT_TOKEN": "YOUR_DOCKER_HUB_PERSONAL_ACCESS_TOKEN"
         }
       }
     }
   }
   ```

   Where :

   - `YOUR_DOCKER_HUB_USERNAME` is your Docker Hub username.
   - `YOUR_DOCKER_HUB_PERSONAL_ACCESS_TOKEN` is Docker Hub personal access token
   - `/FULL/PATH/TO/YOUR/docker-hub-mcp-server` is the complete path to where you cloned the repository

2. Open the `Command Palette` and type `MCP: List Servers`.

3. Select `docker-hub` and select `Start Server`.

## [Using other clients](#using-other-clients)

To integrate the Docker Hub MCP Server into your own development environment, see the source code and installation instructions on the [`hub-mcp` GitHub repository](https://github.com/docker/hub-mcp).

## [Usage examples](#usage-examples)

This section provides task-oriented examples for common operations with Docker Hub tools.

### [Finding images](#finding-images)

```console
# Search for official images
$ docker ai "Search for official nginx images on Docker Hub"

# Search for lightweight images to reduce deployment size and improve performance
$ docker ai "Search for minimal Node.js images with small footprint"

# Get the most recent tag of a base image
$ docker ai "Show me the latest tag details for go"

# Find a production-ready database with enterprise features and reliability
$ docker ai "Search for production ready database images"

# Compare Ubuntu versions to choose the right one for my project
$ docker ai "Help me find the right Ubuntu version for my project"
```

### [Repository management](#repository-management)

```console
# Create a repository
$ docker ai "Create a repository in my namespace"

# List all repositories in my namespace
$ docker ai "List all repositories in my namespace"

# Find the largest repository in my namespace
$ docker ai "Which of my repositories takes up the most space?"

# Find repositories that haven't been updated recently
$ docker ai "Which of my repositories haven't had any pushes in the last 60 days?"

# Find which repositories are currently active and being used
$ docker ai "Show me my most recently updated repositories"

# Get details about a repository
$ docker ai "Show me information about my '<repository-name>' repository"
```

### [Pull/push images](#pullpush-images)

```console
# Pull latest PostgreSQL version
$ docker ai "Pull the latest postgres image"

# Push image to your Docker Hub repository
$ docker ai "Push my <image-name> to my <repository-name> repository"
```

### [Tag management](#tag-management)

```console
# List all tags for a repository
$ $ docker ai "Show me all tags for my '<repository-name>' repository"

# Find the most recently pushed tag
$ docker ai "What's the most recent tag pushed to my '<repository-name>' repository?"

# List tags with architecture filtering
$ docker ai "List tags for in the '<repository-name>' repository that support amd64 architecture"

# Get detailed information about a specific tag
$ docker ai "Show me details about the '<tag-name>' tag in the '<repository-name>' repository"

# Check if a specific tag exists
$ docker ai "Check if version 'v1.2.0' exists for my 'my-web-app' repository"
```

### [Docker Hardened Images](#docker-hardened-images)

```console
# List available hardened images
$ docker ai "What is the most secure image I can use to run a node.js application?"

# Convert Dockerfile to use a hardened image
$ docker ai "Can you help me update my Dockerfile to use a docker hardened image instead of the current one"
```

> Note
>
> To access Docker Hardened Images, a subscription is required. If you're interested in using Docker Hardened Images, visit [Docker Hardened Images](https://www.docker.com/products/hardened-images/).

## [Reference](#reference)

This section provides a comprehensive listing of the tools you can find in the Docker Hub MCP Server.

### [Docker Hub MCP server tools](#docker-hub-mcp-server-tools)

Tools to interact with your Docker repositories and discover content on Docker Hub.

Name

Description

`check-repository`

Check repository

`check-repository-tag`

Check repository tag

`check-repository-tags`

Check repository tags

`create-repository`

Creates a new repository

`docker-hardened-images`

Lists available [Docker Hardened Images](https://www.docker.com/products/hardened-images/) in specified namespace

`get-namespaces`

Get organizations/namespaces for a user

`get-repository-dockerfile`

Gets Dockerfile for repository

`get-repository-info`

Gets repository info

`list-repositories-by-namespace`

Lists repositories under namespace

`list-repository-tags`

List repository tags

`read-repository-tag`

Read repository tag

`search`

Search content on Docker Hub

`set-repository-dockerfile`

Sets Dockerfile for repository

`update-repository-info`

Updates repository info

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/mcp-catalog-and-toolkit/hub-mcp.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fmcp-catalog-and-toolkit%2fhub-mcp%2f\&labels=status%2Ftriage)

Table of contents
