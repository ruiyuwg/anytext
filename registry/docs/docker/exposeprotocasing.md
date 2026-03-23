When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# ExposeProtoCasing

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
Defined protocol '80/TcP' in EXPOSE instruction should be lowercase
```

## [Description](#description)

Protocol names in the [`EXPOSE`](https://docs.docker.com/reference/dockerfile/#expose) instruction should be specified in lowercase to maintain consistency and readability. This rule checks for protocols that are not in lowercase and reports them.

## [Examples](#examples)

❌ Bad: protocol is not in lowercase.

```dockerfile
FROM alpine
EXPOSE 80/TcP
```

✅ Good: protocol is in lowercase.

```dockerfile
FROM alpine
EXPOSE 80/tcp
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fexpose-proto-casing%2f\&labels=status%2Ftriage)

Table of contents
