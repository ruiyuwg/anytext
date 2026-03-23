When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker dhi mirror list

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

List all mirrored Docker Hardened Images

Usage

`docker dhi mirror list`

## [Description](#description)

List all Docker Hardened Images currently being mirrored to your organization's registry.

Shows the source repositories, destination repositories, and mirroring status.

Examples:

# [List all mirrored repositories](#list-all-mirrored-repositories)

dhictl mirror list --org myorg

# [List only image repositories](#list-only-image-repositories)

dhictl mirror list --org myorg --type image

# [List only helm chart repositories](#list-only-helm-chart-repositories)

dhictl mirror list --org myorg --type helm-chart

# [Search for a specific repository by name](#search-for-a-specific-repository-by-name)

dhictl mirror list --org myorg --filter dhi-python

# [Output in JSON format](#output-in-json-format)

dhictl mirror list --org myorg --json

## [Options](#options)

Option

Default

Description

`-f, --filter`

Filter by repository name (partial match)

`--json`

Output in JSON format

`--type`

Filter by repository type (image or helm-chart)

Table of contents
