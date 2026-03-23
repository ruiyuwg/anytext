When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker container diff

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Inspect changes to files or directories on a container's filesystem

Usage

`docker container diff CONTAINER`

Aliases

An alias is a short or memorable alternative for a longer command.

`docker diff`

## [Description](#description)

List the changed files and directories in a container᾿s filesystem since the container was created. Three different types of change are tracked:

Symbol

Description

`A`

A file or directory was added

`D`

A file or directory was deleted

`C`

A file or directory was changed

You can use the full or shortened container ID or the container name set using `docker run --name` option.

## [Examples](#examples)

Inspect the changes to an `nginx` container:

```console
$ docker diff 1fdfd1f54c1b

C /dev
C /dev/console
C /dev/core
C /dev/stdout
C /dev/fd
C /dev/ptmx
C /dev/stderr
C /dev/stdin
C /run
A /run/nginx.pid
C /var/lib/nginx/tmp
A /var/lib/nginx/tmp/client_body
A /var/lib/nginx/tmp/fastcgi
A /var/lib/nginx/tmp/proxy
A /var/lib/nginx/tmp/scgi
A /var/lib/nginx/tmp/uwsgi
C /var/log/nginx
A /var/log/nginx/access.log
A /var/log/nginx/error.log
```

Table of contents
