Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker dhi mirror stop

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Stop mirroring a Docker Hardened Image

Usage

`docker dhi mirror stop <repository>`

## [Description](#description)

Stop mirroring a Docker Hardened Image repository.

The repository can be specified as:

- Just the repository name (e.g., dhi-python) - uses --org flag or config
- Full path with org (e.g., myorg/dhi-python) - org must match --org flag or config

Examples:

# [Stop mirroring using --org flag](#stop-mirroring-using---org-flag)

dhictl mirror stop dhi-python --org myorg

# [Stop mirroring with full path (org must match)](#stop-mirroring-with-full-path-org-must-match)

dhictl mirror stop myorg/dhi-python --org myorg

# [Stop mirroring and delete the repository](#stop-mirroring-and-delete-the-repository)

dhictl mirror stop dhi-python --org myorg --delete

## [Options](#options)

Option

Default

Description

`--delete`

Delete the repository after stopping mirroring

Table of contents
