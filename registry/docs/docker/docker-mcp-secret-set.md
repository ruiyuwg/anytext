Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker mcp secret set

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Set a secret in the local OS Keychain

Usage

`docker mcp secret set key[=value]`

## [Description](#description)

Set a secret in the local OS Keychain

## [Examples](#examples)

### [Pass the secret via STDIN](#pass-the-secret-via-stdin)

```console
echo my-secret-password > pwd.txt
cat pwd.txt | docker mcp secret set postgres_password
```

Table of contents
