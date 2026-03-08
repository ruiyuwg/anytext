Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker model search

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Search for models on Docker Hub and HuggingFace

Usage

`docker model search [OPTIONS] [TERM]`

## [Description](#description)

Search for models from Docker Hub (ai/ namespace) and HuggingFace.

When no search term is provided, lists all available models. When a search term is provided, filters models by name/description.

Examples: docker model search # List available models from Docker Hub docker model search llama # Search for models containing "llama" docker model search --source=all # Search both Docker Hub and HuggingFace docker model search --source=huggingface # Only search HuggingFace docker model search --limit=50 phi # Search with custom limit docker model search --json llama # Output as JSON

## [Options](#options)

Option

Default

Description

`--json`

Output results as JSON

`-n, --limit`

`32`

Maximum number of results to show

`--source`

`all`

Source to search: all, dockerhub, huggingface

Table of contents
