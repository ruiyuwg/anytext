Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose push

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Push service images

Usage

`docker compose push [OPTIONS] [SERVICE...]`

## [Description](#description)

Pushes images for services to their respective registry/repository.

The following assumptions are made:

- You are pushing an image you have built locally
- You have access to the build key

Examples

```yaml
services:
  service1:
    build: .
    image: localhost:5000/yourimage  ## goes to local registry

  service2:
    build: .
    image: your-dockerid/yourimage  ## goes to your repository on Docker Hub
```

## [Options](#options)

Option

Default

Description

`--ignore-push-failures`

Push what it can and ignores images with push failures

`--include-deps`

Also push images of services declared as dependencies

`-q, --quiet`

Push without printing progress information

Table of contents
