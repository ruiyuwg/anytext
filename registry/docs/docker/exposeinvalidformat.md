When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# ExposeInvalidFormat

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
EXPOSE instruction should not define an IP address or host-port mapping, found '127.0.0.1:80:80'
```

## [Description](#description)

The [`EXPOSE`](https://docs.docker.com/reference/dockerfile/#expose) instruction in a Dockerfile is used to indicate which ports the container listens on at runtime. It should not include an IP address or host-port mapping, as this is not the intended use of the `EXPOSE` instruction. Instead, it should only specify the port number and optionally the protocol (TCP or UDP).

> Important
>
> This will become an error in a future release.

## [Examples](#examples)

❌ Bad: IP address and host-port mapping used.

```dockerfile
FROM alpine
EXPOSE 127.0.0.1:80:80
```

✅ Good: only the port number is specified.

```dockerfile
FROM alpine
EXPOSE 80
```

❌ Bad: Host-port mapping used.

```dockerfile
FROM alpine
EXPOSE 80:80
```

✅ Good: only the port number is specified.

```dockerfile
FROM alpine
EXPOSE 80
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fexpose-invalid-format%2f\&labels=status%2Ftriage)

Table of contents
