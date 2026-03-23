When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker dhi mirror start

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Start mirroring Docker Hardened Images

Usage

`docker dhi mirror start`

## [Description](#description)

Start mirroring one or more Docker Hardened Images to your organization's registry.

Repository mappings are specified using the -r flag. The following formats are supported:

source Only the source repository; destination is auto-generated as /dhi- source,destination Source and destination; namespaces are filled from config if omitted ns/source,ns/dest Fully qualified source and destination

The source namespace defaults to "dhi" when not specified. The destination namespace defaults to the configured organization (--org or config).

Examples:

# [These are all equivalent (assuming --org myorg):](#these-are-all-equivalent-assuming---org-myorg)

dhictl mirror start --org myorg -r dhi/golang,myorg/dhi-golang dhictl mirror start --org myorg -r golang,dhi-golang dhictl mirror start --org myorg -r golang

# [Mirror multiple repositories](#mirror-multiple-repositories)

dhictl mirror start --org myorg -r golang -r python

## [Options](#options)

Option

Default

Description

`-d, --dependencies`

Mirrors any existing dependencies

`--json`

Output in JSON format

`-r, --repo`

Repository mapping in format source,destination (can be specified multiple times)

Table of contents
