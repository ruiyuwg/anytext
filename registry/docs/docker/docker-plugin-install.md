When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker plugin install

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Install a plugin

Usage

`docker plugin install [OPTIONS] PLUGIN [KEY=VALUE...]`

## [Description](#description)

Installs and enables a plugin. Docker looks first for the plugin on your Docker host. If the plugin does not exist locally, then the plugin is pulled from the registry. Note that the minimum required registry version to distribute plugins is 2.3.0.

## [Options](#options)

Option

Default

Description

`--alias`

Local name for plugin

`--disable`

Do not enable the plugin on install

`--grant-all-permissions`

Grant all permissions necessary to run the plugin

## [Examples](#examples)

The following example installs `vieus/sshfs` plugin and [sets](/reference/cli/docker/plugin/set/) its `DEBUG` environment variable to `1`. To install, `pull` the plugin from Docker Hub and prompt the user to accept the list of privileges that the plugin needs, set the plugin's parameters and enable the plugin.

```console
$ docker plugin install vieux/sshfs DEBUG=1

Plugin "vieux/sshfs" is requesting the following privileges:
 - network: [host]
 - device: [/dev/fuse]
 - capabilities: [CAP_SYS_ADMIN]
Do you grant the above permissions? [y/N] y
vieux/sshfs
```

After the plugin is installed, it appears in the list of plugins:

```console
$ docker plugin ls

ID             NAME                  DESCRIPTION                ENABLED
69553ca1d123   vieux/sshfs:latest    sshFS plugin for Docker    true
```

Table of contents
