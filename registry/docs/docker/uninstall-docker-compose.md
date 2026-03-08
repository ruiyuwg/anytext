Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Uninstall Docker Compose

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

How you uninstall Docker Compose depends on how it was installed. This guide covers uninstallation instructions for:

- Docker Compose installed via Docker Desktop
- Docker Compose installed as a CLI plugin

## [Uninstalling Docker Compose with Docker Desktop](#uninstalling-docker-compose-with-docker-desktop)

If you want to uninstall Docker Compose and you have installed Docker Desktop, see [Uninstall Docker Desktop](https://docs.docker.com/desktop/uninstall/).

> Warning
>
> Unless you have other Docker instances installed on that specific environment, uninstalling Docker Desktop removes all Docker components, including Docker Engine, Docker CLI, and Docker Compose.

## [Uninstalling the Docker Compose CLI plugin](#uninstalling-the-docker-compose-cli-plugin)

If you installed Docker Compose via a package manager, run:

On Ubuntu or Debian:

```console
$ sudo apt-get remove docker-compose-plugin
```

On RPM-based distributions:

```console
$ sudo yum remove docker-compose-plugin
```

### [Manually installed](#manually-installed)

If you installed Docker Compose manually (using curl), remove it by deleting the binary:

```console
$ rm $DOCKER_CONFIG/cli-plugins/docker-compose
```

### [Remove for all users](#remove-for-all-users)

If installed for all users, remove it from the system directory:

```console
$ rm /usr/local/lib/docker/cli-plugins/docker-compose
```

> Note
>
> If you get a **Permission denied** error using either of the previous methods, you do not have the permissions needed to remove Docker Compose. To force the removal, prepend `sudo` to either of the previous instructions and run it again.

### [Inspect the location of the Compose CLI plugin](#inspect-the-location-of-the-compose-cli-plugin)

To check where Compose is installed, use:

```console
$ docker info --format '{{range .ClientInfo.Plugins}}{{if eq .Name "compose"}}{{.Path}}{{end}}{{end}}'
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/compose/install/uninstall.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fcompose%2finstall%2funinstall%2f\&labels=status%2Ftriage)

Table of contents
