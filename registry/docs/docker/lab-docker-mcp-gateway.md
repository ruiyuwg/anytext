When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Lab: Docker MCP Gateway](https://docs.docker.com/guides/lab-mcp-gateway/)

Hands-on lab: Configure, secure, and connect MCP servers to your agentic applications using the Docker MCP Gateway.

AI Labs

20 minutes

Resources:

- [Docker MCP Gateway docs](/ai/mcp-gateway/)
- [MCP Gateway GitHub](https://github.com/docker/mcp-gateway)
- [Labspace repository](https://github.com/dockersamples/labspace-mcp-gateway)

[« Back to all guides](/guides/)

# Lab: Docker MCP Gateway

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

This lab provides a comprehensive, hands-on overview of the Docker MCP Gateway, which enables you to run containerized MCP servers safely and securely. Learn how to configure, secure, and connect MCP servers to your agentic applications.

## [What you'll learn](#what-youll-learn)

- Learn about the Docker MCP Gateway and its architecture
- Run the MCP Gateway with a simple MCP server
- Inject secrets securely into MCP servers
- Filter tools to reduce noise and save tokens
- Connect the MCP Gateway to your application using popular agentic frameworks
- Configure and use custom MCP servers

## [Modules](#modules)

#

Module

Description

1

Introduction

Overview of the MCP Gateway and why it matters

2

Adding a Simple MCP Server

Get started with a basic MCP server configuration

3

Adding a Complex MCP Server

Configure MCP servers with secrets and advanced options

4

Filtering Available Tools

Reduce noise and save tokens by filtering tool availability

5

Connecting MCP Gateway to Your App

Integrate the MCP Gateway with agentic frameworks

6

Using a Custom MCP Server

Build and run your own custom MCP server

7

Conclusion

Summary and next steps

## [Prerequisites](#prerequisites)

- The latest version of Docker Desktop with Docker Model Runner enabled
- Basic familiarity with Docker and Docker Compose

## [Launch the lab](#launch-the-lab)

Start the labspace:

```console
$ docker compose -f oci://dockersamples/labspace-mcp-gateway up -d
```

Then open your browser to <http://localhost:3030>.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/lab-mcp-gateway.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2flab-mcp-gateway%2f\&labels=status%2Ftriage)

Table of contents
