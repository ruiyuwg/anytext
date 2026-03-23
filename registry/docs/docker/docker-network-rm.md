When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker network rm

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Remove one or more networks

Usage

`docker network rm NETWORK [NETWORK...]`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker network remove`

## [Description](#description)

Removes one or more networks by name or identifier. To remove a network, you must first disconnect any containers connected to it.

## [Options](#options)

Option

Default

Description

`-f, --force`

Do not error if the network does not exist

## [Examples](#examples)

### [Remove a network](#remove-a-network)

To remove the network named 'my-network':

```console
$ docker network rm my-network
```

### [Remove multiple networks](#remove-multiple-networks)

To delete multiple networks in a single `docker network rm` command, provide multiple network names or ids. The following example deletes a network with id `3695c422697f` and a network named `my-network`:

```console
$ docker network rm 3695c422697f my-network
```

When you specify multiple networks, the command attempts to delete each in turn. If the deletion of one network fails, the command continues to the next on the list and tries to delete that. The command reports success or failure for each deletion.

Table of contents
