When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout push

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Push an image or image index to Docker Scout

Usage

`docker scout push IMAGE`

## [Description](#description)

The `docker scout push` command lets you push an image or analysis result to Docker Scout.

## [Options](#options)

Option

Default

Description

`--author`

Name of the author of the image

`--dry-run`

Do not push the image but process it

`--org`

Namespace of the Docker organization to which image will be pushed

`-o, --output`

Write the report to a file

`--platform`

Platform of image to be pushed

`--sbom`

Create and upload SBOMs

`--secrets`

Scan for secrets in the image

`--timestamp`

Timestamp of image or tag creation

## [Examples](#examples)

### [Push an image to Docker Scout](#push-an-image-to-docker-scout)

```console
$ docker scout push --org my-org registry.example.com/repo:tag
```

Table of contents
