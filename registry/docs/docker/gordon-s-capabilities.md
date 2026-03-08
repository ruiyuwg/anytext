Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Gordon's capabilities

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Beta

Requires: Docker Desktop [4.61.0](https://docs.docker.com/desktop/release-notes/#4610) or later

Gordon combines multiple capabilities to handle Docker workflows. This page explains what Gordon can do and the tools it uses.

## [Core capabilities](#core-capabilities)

Gordon uses five capabilities to take action on your behalf:

- Specialized sub-agents for specific Docker tasks
- Shell access to run commands
- Filesystem access to read and write files
- Knowledge base of Docker documentation and best practices
- Web access to fetch external resources

## [Internal architecture](#internal-architecture)

Gordon uses a primary agent that handles most tasks, with a specialized sub-agent for specific workflows:

- **Main agent**: Handles all Docker operations, software development, containerization, and general development tasks
- **DHI migration sub-agent**: Specialized handler for migrating Dockerfiles to Docker Hardened Images

The main agent handles:

- Creating Docker assets (Dockerfile, compose.yaml, .dockerignore)
- Optimizing Dockerfiles to reduce image size and improve build performance
- Running Docker commands (ps, logs, exec, build, compose)
- Debugging container issues and analyzing configurations
- Writing and reviewing code across multiple programming languages
- General development questions and tasks

When you request DHI migration, Gordon automatically delegates to the DHI migration sub-agent.

## [Shell access](#shell-access)

Gordon executes shell commands in your environment after you approve them. This includes Docker CLI commands, system utilities, and application-specific tools.

Example commands Gordon might run:

```console
$ docker ps
$ docker logs container-name
$ docker exec -it container-name bash
$ grep "error" app.log
```

Commands run with your user permissions. Gordon cannot access `sudo` unless you've explicitly granted it.

## [Filesystem access](#filesystem-access)

Gordon reads and writes files on your system. It can analyze Dockerfiles, read configuration files, scan directories, and parse logs without approval. Writing files requires your approval.

The working directory sets the default context for file operations, but Gordon can access files outside this directory when needed.

## [Knowledge base](#knowledge-base)

Gordon uses retrieval-augmented generation to access Docker documentation, best practices, troubleshooting procedures, and security recommendations. This lets Gordon answer questions accurately, explain errors, and suggest solutions that follow Docker's guidelines.

## [Web access](#web-access)

Gordon fetches external web resources to look up error messages, package versions, and framework documentation. This helps when debugging issues that require context outside Docker's own documentation.

Gordon cannot access authenticated or private resources, and external requests are rate-limited.

## [Working with other tools](#working-with-other-tools)

Gordon complements general-purpose AI coding assistants by focusing on Docker workflows. Use tools like Cursor or GitHub Copilot for application code and refactoring, and use Gordon for containerization, deployment configuration, and Docker operations. They work well together.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/gordon/concepts/capabilities.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fgordon%2fconcepts%2fcapabilities%2f\&labels=status%2Ftriage)

Table of contents
