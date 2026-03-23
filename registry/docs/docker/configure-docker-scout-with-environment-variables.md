When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Configure Docker Scout with environment variables

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The following environment variables are available to configure the Docker Scout CLI commands, and the corresponding `docker/scout-cli` container image:

Name

Format

Description

DOCKER\_SCOUT\_CACHE\_FORMAT

String

Format of the local image cache; can be `oci` or `tar` (default: `oci`)

DOCKER\_SCOUT\_CACHE\_DIR

String

Directory where the local SBOM cache is stored (default: `$HOME/.docker/scout`)

DOCKER\_SCOUT\_NO\_CACHE

Boolean

When set to `true`, disables the use of local SBOM cache

DOCKER\_SCOUT\_OFFLINE

Boolean

Use [offline mode](#offline-mode) when indexing SBOM

DOCKER\_SCOUT\_REGISTRY\_TOKEN

String

Token for authenticating to a registry when pulling images

DOCKER\_SCOUT\_REGISTRY\_USER

String

Username for authenticating to a registry when pulling images

DOCKER\_SCOUT\_REGISTRY\_PASSWORD

String

Password or personal access token for authenticating to a registry when pulling images

DOCKER\_SCOUT\_HUB\_USER

String

Docker Hub username for authenticating to the Docker Scout backend

DOCKER\_SCOUT\_HUB\_PASSWORD

String

Docker Hub password or personal access token for authenticating to the Docker Scout backend

DOCKER\_SCOUT\_NEW\_VERSION\_WARN

Boolean

Warn about new versions of the Docker Scout CLI

DOCKER\_SCOUT\_EXPERIMENTAL\_WARN

Boolean

Warn about experimental features

DOCKER\_SCOUT\_EXPERIMENTAL\_POLICY\_OUTPUT

Boolean

Disable experimental output for policy evaluation

## [Offline mode](#offline-mode)

Under normal operation, Docker Scout cross-references external systems, such as npm, NuGet, or proxy.golang.org, to retrieve additional information about packages found in your image.

When `DOCKER_SCOUT_OFFLINE` is set to `true`, Docker Scout image analysis runs in offline mode. Offline mode means Docker Scout doesn't make outbound requests to external systems.

To use offline mode:

```console
$ export DOCKER_SCOUT_OFFLINE=true
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/scout/how-tos/configure-cli.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fscout%2fhow-tos%2fconfigure-cli%2f\&labels=status%2Ftriage)

Table of contents
