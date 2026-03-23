When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker scout sbom

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Generate or display SBOM of an image

Usage

`docker scout sbom [IMAGE|DIRECTORY|ARCHIVE]`

## [Description](#description)

The `docker scout sbom` command analyzes a software artifact to generate a Software Bill Of Materials (SBOM).

The SBOM contains a list of all packages in the image. You can use the `--format` flag to filter the output of the command to display only packages of a specific type.

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

`--format`

`json`

Output format:\
\- list: list of packages of the image\
\- json: json representation of the SBOM\
\- spdx: spdx representation of the SBOM\
\- cyclonedx: cyclone dx representation of the SBOM

`--only-package-type`

Comma separated list of package types (like apk, deb, rpm, npm, pypi, golang, etc)\
Can only be used with --format list

`-o, --output`

Write the report to a file

`--platform`

Platform of image to analyze

`--ref`

Reference to use if the provided tarball contains multiple references.\
Can only be used with archive

## [Examples](#examples)

### [Display the list of packages](#display-the-list-of-packages)

```console
$ docker scout sbom --format list alpine
```

### [Only display packages of a specific type](#only-display-packages-of-a-specific-type)

```console
 $ docker scout sbom --format list --only-package-type apk alpine
```

### [Display the full SBOM in JSON format](#display-the-full-sbom-in-json-format)

```console
$ docker scout sbom alpine
```

### [Display the full SBOM of the most recently built image](#display-the-full-sbom-of-the-most-recently-built-image)

```console
$ docker scout sbom
```

### [Write SBOM to a file](#write-sbom-to-a-file)

```console
$ docker scout sbom --output alpine.sbom alpine
```

Table of contents
