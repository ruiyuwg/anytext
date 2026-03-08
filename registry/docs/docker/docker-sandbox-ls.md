Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox ls

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

List VMs

Usage

`docker sandbox ls [OPTIONS]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker sandbox list`

## [Description](#description)

List all VMs managed by sandboxd with their sandboxes

## [Options](#options)

Option

Default

Description

`--json`

Output in JSON format

[`-q, --quiet`](#quiet)

Only display VM names

## [Examples](#examples)

### [List all VMs](#list-all-vms)

```console
$ docker sandbox ls
VM ID         NAME       STATUS    WORKSPACE                    SOCKET PATH                           SANDBOXES    AGENTS
abc123def     claude-vm  running   /home/user/my-project        /Users/.../docker-1764682554072.sock  2           claude
def456ghi     gemini-vm  stopped   /home/user/ml-projects
```

### [Show only VM names (--quiet)](#quiet)

```text
--quiet
```

Output only VM names:

```console
$ docker sandbox ls --quiet
claude-vm
gemini-vm
```

### [JSON output (--json)](#json-output---json)

```text
--json
```

Output detailed VM information in JSON format:

```console
$ docker sandbox ls --json
{
  "vms": [
    {
      "name": "claude-vm",
      "agent": "claude",
      "status": "running",
      "socket_path": "/Users/user/.docker/sandboxes/vm/claude-vm/docker-1234567890.sock",
      "sandbox_count": 2,
      "workspaces": [
        "/home/user/my-project",
        "/home/user/another-project"
      ]
    },
    {
      "name": "gemini-vm",
      "agent": "gemini",
      "status": "stopped",
      "sandbox_count": 0
    }
  ]
}
```

Table of contents
