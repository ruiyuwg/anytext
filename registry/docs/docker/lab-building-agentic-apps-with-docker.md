When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Lab: Building Agentic Apps with Docker](https://docs.docker.com/guides/lab-agentic-apps/)

Hands-on lab: Build agentic apps with Docker Model Runner, MCP Gateway, and Compose. Learn about models, tools, and agentic frameworks.

AI Labs

20 minutes

Resources:

- [Docker Model Runner docs](/ai/model-runner/)
- [Docker MCP Gateway docs](/ai/mcp-gateway/)
- [Labspace repository](https://github.com/dockersamples/labspace-agentic-apps-with-docker)

[« Back to all guides](/guides/)

# Lab: Building Agentic Apps with Docker

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Get up and running with building agentic applications using Compose, Docker Model Runner, and the Docker MCP Gateway. This hands-on lab takes you from understanding AI models to building complete agentic applications.

## [What you'll learn](#what-youll-learn)

This lab covers three core areas of agentic application development:

**Models**: What models are, how to interact with them, configuring Docker Model Runner in Compose, and writing code that connects to the Model Runner

**Tools**: Understanding tools and how they work, how MCP (Model Context Protocol) fits in, configuring the Docker MCP Gateway, and connecting to the MCP Gateway in code

**Code**: What agentic frameworks are, defining models and tools in a Compose file, and configuring your app to use those models and tools

## [Modules](#modules)

#

Module

Description

1

Introduction

Overview of agentic applications and the Docker AI stack

2

Understanding Model Interactions

Learn how to interact with AI models

3

The Docker Model Runner

Configure and use Docker Model Runner with Compose

4

Understanding Tools and MCP

Deep dive into tools, tool calling, and MCP

5

The Docker MCP Gateway

Set up and configure the MCP Gateway

6

Putting It All Together

Build a complete agentic application

7

Conclusion

Summary and next steps

## [Prerequisites](#prerequisites)

- Install the latest version of Docker Desktop
- Enable **Docker Model Runner** by going into Settings in Docker Desktop, choosing AI, then selecting Docker Model Runner
- Pull the Gemma 3 model before launching by running this command:

```console
$ docker model pull ai/gemma3
```

## [Launch the lab](#launch-the-lab)

Start the labspace:

```console
$ docker compose -f oci://dockersamples/labspace-agentic-apps-with-docker up -d
```

Then open your browser to <http://localhost:3030>.

> Note
>
> It may take a little while to start due to the AI model download.

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/lab-agentic-apps.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2flab-agentic-apps%2f\&labels=status%2Ftriage)

Table of contents
