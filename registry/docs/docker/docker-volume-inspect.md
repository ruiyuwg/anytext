When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker volume inspect

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Display detailed information on one or more volumes

Usage

`docker volume inspect [OPTIONS] VOLUME [VOLUME...]`

## [Description](#description)

Returns information about a volume. By default, this command renders all results in a JSON array. You can specify an alternate format to execute a given template for each result. Go's [text/template](https://pkg.go.dev/text/template) package describes all the details of the format.

## [Options](#options)

Option

Default

Description

[`-f, --format`](#format)

Format output using a custom template:\
'json': Print in JSON format\
'TEMPLATE': Print output using the given Go template.\
Refer to <https://docs.docker.com/go/formatting/> for more information about formatting output with templates

## [Examples](#examples)

```console
$ docker volume create myvolume

myvolume
```

Use the `docker volume inspect` comment to inspect the configuration of the volume:

```console
$ docker volume inspect myvolume
```

The output is in JSON format, for example:

```json
[
  {
    "CreatedAt": "2020-04-19T11:00:21Z",
    "Driver": "local",
    "Labels": {},
    "Mountpoint": "/var/lib/docker/volumes/8140a838303144125b4f54653b47ede0486282c623c3551fbc7f390cdc3e9cf5/_data",
    "Name": "myvolume",
    "Options": {},
    "Scope": "local"
  }
]
```

### [Format the output (--format)](#format)

Use the `--format` flag to format the output using a Go template, for example, to print the `Mountpoint` property:

```console
$ docker volume inspect --format '{{ .Mountpoint }}' myvolume

/var/lib/docker/volumes/myvolume/_data
```

Table of contents
