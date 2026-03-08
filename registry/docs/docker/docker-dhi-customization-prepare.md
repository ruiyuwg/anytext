Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker dhi customization prepare

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Prepare a new customization YAML file from a DHI base image tag

Usage

`docker dhi customization prepare <dhi-repository> <tag>`

## [Description](#description)

Prepare a new customization YAML file by fetching tag details from a Docker Hardened Images repository. This creates a scaffold YAML file that can be used with the create command.

The repository argument must be a DHI source repository name, not a mirrored destination repository. Supported formats:

- golang
- dhi/golang
- dhi.io/golang

## [Options](#options)

Option

Default

Description

`-d, --destination`

Destination repository (e.g. myorg/dhi-golang)

`-n, --name`

Name for the customization

`-o, --output`

Output file path (if not specified, outputs to stdout)

`-t, --tag-suffix`

Tag suffix for the customized image

Table of contents
