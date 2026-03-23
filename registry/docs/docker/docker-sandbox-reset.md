When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox reset

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Reset all VM sandboxes and clean up state

Usage

`docker sandbox reset [OPTIONS]`

## [Description](#description)

Reset all VM sandboxes and permanently delete all VM data.

This command will:

- Stop all running VMs gracefully (30s timeout)
- Delete all VM state directories in ~/.docker/sandboxes/vm/
- Clear image cache in ~/.docker/sandboxes/image-cache/
- Clear all internal registries

The daemon will continue running with fresh state after reset.

⚠️ WARNING: This is a destructive operation that cannot be undone! All running agents will be forcefully terminated and their work will be lost. Cached image tars will be deleted and will need to be recreated on next use.

By default, you will be prompted to confirm (y/N). Use --force to skip the confirmation prompt.

## [Options](#options)

Option

Default

Description

[`-f, --force`](#force)

Skip confirmation prompt

## [Examples](#examples)

### [Reset with confirmation prompt](#reset-with-confirmation-prompt)

```console
$ docker sandbox reset
⚠️  WARNING: This will permanently delete all VM data and stop all running agents!
Are you sure you want to continue? (y/N): y
All VMs reset successfully
```

### [Force reset without confirmation (-f, --force)](#force)

Skip the confirmation prompt:

```console
$ docker sandbox reset --force
All VMs reset successfully
```

> Caution
>
> This is a destructive operation that cannot be undone! All running agents will be terminated and their work will be lost.

Table of contents
