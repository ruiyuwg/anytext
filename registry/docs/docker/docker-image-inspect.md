When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker image inspect

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Display detailed information on one or more images

Usage

`docker image inspect [OPTIONS] IMAGE [IMAGE...]`

## [Description](#description)

Display detailed information on one or more images

## [Options](#options)

Option

Default

Description

`-f, --format`

Format output using a custom template:\
'json': Print in JSON format\
'TEMPLATE': Print output using the given Go template.\
Refer to <https://docs.docker.com/go/formatting/> for more information about formatting output with templates

`--platform`

API 1.49+ Inspect a specific platform of the multi-platform image.\
If the image or the server is not multi-platform capable, the command will error out if the platform does not match.\
'os\[/arch\[/variant]]': Explicit platform (eg. linux/amd64)

Table of contents
