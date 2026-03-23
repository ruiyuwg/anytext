When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Use the DHI CLI

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

`dhictl` is a command-line interface (CLI) tool for managing Docker Hardened Images:

- Browse the catalog of available DHI images and their metadata
- Mirror DHI images to your Docker Hub organization
- Create and manage customizations of DHI images
- Generate authentication for enterprise package repositories
- Monitor customization builds

## [Installation](#installation)

`dhictl` will be available by default on [Docker Desktop](https://docs.docker.com/desktop/) soon. In the meantime, you can install `dhictl` manually as a Docker CLI plugin or as a standalone binary.

### [Docker CLI Plugin](#docker-cli-plugin)

1. Download the `dhictl` binary for your platform from the [releases](https://github.com/docker-hardened-images/dhictl/releases) page.
2. Rename the binary:
   - `docker-dhi` on *Linux* and *macOS*
   - `docker-dhi.exe` on *Windows*
3. Copy it to the CLI plugins directory:
   - `$HOME/.docker/cli-plugins` on *Linux* and *macOS*
   - `%USERPROFILE%\.docker\cli-plugins` on *Windows*
4. Make it executable on *Linux* and *macOS*:
   - `chmod +x $HOME/.docker/cli-plugins/docker-dhi`
5. Run `docker dhi` to verify the installation.

### [Standalone Binary](#standalone-binary)

1. Download the `dhictl` binary for your platform from the [releases](https://github.com/docker-hardened-images/dhictl/releases) page.
2. Move it to a directory in your `PATH`:
   - `mv dhictl /usr/local/bin/` on *Linux* and *macOS*
   - Move `dhictl.exe` to a directory in your `PATH` on *Windows*

## [Usage](#usage)

> Note
>
> The following examples use `dhictl` to reference the CLI tool. Depending on your installation, you may need to replace `dhictl` with `docker dhi`.

Every command has built-in help accessible with the `--help` flag:

```bash
dhictl --help
dhictl catalog list --help
```

### [Browse the DHI Catalog](#browse-the-dhi-catalog)

List all available DHI images:

```bash
dhictl catalog list
```

Filter by type, name, or compliance:

```bash
dhictl catalog list --type image
dhictl catalog list --filter golang
dhictl catalog list --fips
```

Get details of a specific image, including available tags and CVE counts:

```bash
dhictl catalog get <image-name>
```

### [Mirror DHI Images](#mirror-dhi-images) DHI Select & DHI Enterprise

Start mirroring one or more DHI images to your Docker Hub organization:

```bash
dhictl mirror start --org my-org \
  -r dhi/golang,my-org/dhi-golang \
  -r dhi/nginx,my-org/dhi-nginx \
  -r dhi/prometheus-chart,my-org/dhi-prometheus-chart
```

List mirrored images in your organization:

```bash
dhictl mirror list --org my-org
```

Stop mirroring an image:

```bash
dhictl mirror stop --org my-org dhi-golang
```

### [Customize DHI Images](#customize-dhi-images) DHI Select & DHI Enterprise

The CLI can be used to create and manage DHI image customizations. For detailed instructions on creating customizations, including the YAML syntax and available options, see [Customize a Docker Hardened Image](https://docs.docker.com/dhi/how-to/customize/).

Quick reference for CLI commands:

```bash
# Prepare a customization scaffold
dhictl customization prepare --org my-org golang 1.25 \
  --destination my-org/dhi-golang \
  --name "golang with git" \
  --tag-suffix "_git" \
  --output my-customization.yaml

# Create a customization
dhictl customization create --org my-org my-customization.yaml

# List customizations
dhictl customization list --org my-org

# Get a customization
dhictl customization get --org my-org my-org/dhi-golang "golang with git" --output my-customization.yaml

# Update a customization
dhictl customization edit --org my-org my-customization.yaml

# Delete a customization
dhictl customization delete --org my-org my-org/dhi-golang "golang with git"
```

### [Enterprise Package Authentication](#enterprise-package-authentication) DHI Enterprise

Generate authentication credentials for accessing the enterprise hardened package repository. This is used when configuring your package manager to install compliance-specific packages in your own images. For detailed instructions, see [Enterprise repository](https://docs.docker.com/dhi/how-to/hardened-packages/#enterprise-repository).

```bash
dhictl auth apk
```

### [Monitor Customization Builds](#monitor-customization-builds) DHI Select & DHI Enterprise

List builds for a customization:

```bash
dhictl customization build list --org my-org my-org/dhi-golang "golang with git"
```

Get details of a specific build:

```bash
dhictl customization build get --org my-org my-org/dhi-golang "golang with git" <build-id>
```

View build logs:

```bash
dhictl customization build logs --org my-org my-org/dhi-golang "golang with git" <build-id>
```

### [JSON Output](#json-output)

Most list and get commands support a `--json` flag for machine-readable output:

```bash
dhictl catalog list --json
dhictl mirror list --org my-org --json
dhictl customization list --org my-org --json
```

## [Configuration](#configuration)

`dhictl` can be configured with a YAML file located at:

- `$HOME/.config/dhictl/config.yaml` on *Linux* and *macOS*
- `%USERPROFILE%\.config\dhictl\config.yaml` on *Windows*

If `$XDG_CONFIG_HOME` is set, the configuration file is located at `$XDG_CONFIG_HOME/dhictl/config.yaml` (see the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir/spec/latest/)).

Available configuration options:

Option

Environment Variable

Description

`org`

`DHI_ORG`

Default Docker Hub organization for mirror and customization commands.

`api_token`

`DHI_API_TOKEN`

Docker token for authentication. You can generate a token in your [Docker Hub account settings](https://hub.docker.com/).

Environment variables take precedence over configuration file values.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/dhi/how-to/cli.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fdhi%2fhow-to%2fcli%2f\&labels=status%2Ftriage)

Table of contents
