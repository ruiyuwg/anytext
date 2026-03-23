When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker sandbox network log

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Show network logs

Usage

`docker sandbox network log`

## [Description](#description)

Show network logs

## [Options](#options)

Option

Default

Description

[`--json`](#json)

Output in JSON format

[`--limit`](#limit)

Maximum number of log entries to show

[`-q, --quiet`](#quiet)

Only display log entries

## [Examples](#examples)

### [Show network logs](#show-network-logs)

```console
$ docker sandbox network log
2026-01-29T10:15:23Z sandbox=my-sandbox request GET https://api.example.com/data allowed
2026-01-29T10:15:24Z sandbox=my-sandbox request POST https://api.example.com/submit allowed
2026-01-29T10:15:25Z sandbox=my-sandbox request GET https://blocked.example.com/ denied
```

### [Show only log entries (--quiet)](#quiet)

```text
--quiet
```

Suppress headers and only show log entries:

```console
$ docker sandbox network log --quiet
2026-01-29T10:15:23Z sandbox=my-sandbox request GET https://api.example.com/data allowed
2026-01-29T10:15:24Z sandbox=my-sandbox request POST https://api.example.com/submit allowed
```

### [Limit number of entries (--limit)](#limit)

```text
--limit N
```

Show only the last N log entries:

```console
$ docker sandbox network log --limit 10
```

### [JSON output (--json)](#json)

Output logs in JSON format for parsing:

```console
$ docker sandbox network log --json
{
  "entries": [
    {
      "timestamp": "2026-01-29T10:15:23Z",
      "sandbox": "my-sandbox",
      "type": "request",
      "method": "GET",
      "url": "https://api.example.com/data",
      "action": "allowed"
    }
  ]
}
```

Table of contents
