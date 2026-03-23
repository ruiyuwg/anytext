When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose events

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Receive real time events from containers

Usage

`docker compose events [OPTIONS] [SERVICE...]`

## [Description](#description)

Stream container events for every container in the project.

With the `--json` flag, a json object is printed one per line with the format:

```json
{
    "time": "2015-11-20T18:01:03.615550",
    "type": "container",
    "action": "create",
    "id": "213cf7...5fc39a",
    "service": "web",
    "attributes": {
      "name": "application_web_1",
      "image": "alpine:edge"
    }
}
```

The events that can be received using this can be seen [here](/reference/cli/docker/system/events/#object-types).

## [Options](#options)

Option

Default

Description

`--json`

Output events as a stream of json objects

`--since`

Show all events created since timestamp

`--until`

Stream events until this timestamp

Table of contents
