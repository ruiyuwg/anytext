Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# CopyIgnoredFile

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
Attempting to Copy file "./tmp/Dockerfile" that is excluded by .dockerignore
```

## [Description](#description)

When you use the Add or Copy instructions from within a Dockerfile, you should ensure that the files to be copied into the image do not match a pattern present in `.dockerignore`.

Files which match the patterns in a `.dockerignore` file are not present in the context of the image when it is built. Trying to copy or add a file which is missing from the context will result in a build error.

## [Examples](#examples)

With the given `.dockerignore` file:

```text
*/tmp/*
```

❌ Bad: Attempting to Copy file "./tmp/Dockerfile" that is excluded by .dockerignore

```dockerfile
FROM scratch
COPY ./tmp/helloworld.txt /helloworld.txt
```

✅ Good: Copying a file which is not excluded by .dockerignore

```dockerfile
FROM scratch
COPY ./forever/helloworld.txt /helloworld.txt
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fcopy-ignored-file%2f\&labels=status%2Ftriage)

Table of contents
