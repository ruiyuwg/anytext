Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout recommendations

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Display available base image updates and remediation recommendations

Usage

`docker scout recommendations [IMAGE|DIRECTORY|ARCHIVE]`

## [Description](#description)

The `docker scout recommendations` command display recommendations for base images updates. It analyzes the image and display recommendations to refresh or update the base image. For each recommendation it shows a list of benefits, such as fewer vulnerabilities or smaller image size.

If no image is specified, the most recently built image is used.

The following artifact types are supported:

- Images
- OCI layout directories
- Tarball archives, as created by `docker save`
- Local directory or file

By default, the tool expects an image reference, such as:

- `redis`
- `curlimages/curl:7.87.0`
- `mcr.microsoft.com/dotnet/runtime:7.0`

If the artifact you want to analyze is an OCI directory, a tarball archive, a local file or directory, or if you want to control from where the image will be resolved, you must prefix the reference with one of the following:

- `image://` (default) use a local image, or fall back to a registry lookup
- `local://` use an image from the local image store (don't do a registry lookup)
- `registry://` use an image from a registry (don't use a local image)
- `oci-dir://` use an OCI layout directory
- `archive://` use a tarball archive, as created by `docker save`
- `fs://` use a local directory or file

## [Options](#options)

Option

Default

Description

`--only-refresh`

Only display base image refresh recommendations

`--only-update`

Only display base image update recommendations

`--org`

Namespace of the Docker organization

`-o, --output`

Write the report to a file

`--platform`

Platform of image to analyze

`--ref`

Reference to use if the provided tarball contains multiple references.\
Can only be used with archive

`--tag`

Specify tag

## [Examples](#examples)

### [Display base image update recommendations](#display-base-image-update-recommendations)

```console
$ docker scout recommendations golang:1.19.4
```

### [Display base image refresh only recommendations](#display-base-image-refresh-only-recommendations)

```console
$ docker scout recommendations --only-refresh golang:1.19.4
```

### [Display base image update only recommendations](#display-base-image-update-only-recommendations)

```console
$ docker scout recommendations --only-update golang:1.19.4
```

Table of contents
