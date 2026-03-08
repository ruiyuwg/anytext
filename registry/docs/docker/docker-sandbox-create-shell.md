Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox create shell

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Create a sandbox for shell

Usage

`docker sandbox create shell WORKSPACE [EXTRA_WORKSPACE...]`

## [Description](#description)

Create a sandbox with access to a host workspace for shell.

The workspace path is required and will be exposed inside the sandbox at the same path as on the host. Additional workspaces can be provided as extra arguments. Append ":ro" to mount them read-only.

Use 'docker sandbox run SANDBOX' to start shell after creation.

Table of contents
