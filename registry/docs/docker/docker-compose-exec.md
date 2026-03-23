When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker compose exec

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Execute a command in a running container

Usage

`docker compose exec [OPTIONS] SERVICE COMMAND [ARGS...]`

## [Description](#description)

This is the equivalent of `docker exec` targeting a Compose service.

With this subcommand, you can run arbitrary commands in your services. Commands allocate a TTY by default, so you can use a command such as `docker compose exec web sh` to get an interactive prompt.

By default, Compose will enter container in interactive mode and allocate a TTY, while the equivalent `docker exec` command requires passing `--interactive --tty` flags to get the same behavior. Compose also support those two flags to offer a smooth migration between commands, whenever they are no-op by default. Still, `interactive` can be used to force disabling interactive mode (`--interactive=false`), typically when `docker compose exec` command is used inside a script.

## [Options](#options)

Option

Default

Description

`-d, --detach`

Detached mode: Run command in the background

`-e, --env`

Set environment variables

`--index`

Index of the container if service has multiple replicas

`-T, --no-tty`

`true`

Disable pseudo-TTY allocation. By default 'docker compose exec' allocates a TTY.

`--privileged`

Give extended privileges to the process

`-u, --user`

Run the command as this user

`-w, --workdir`

Path to workdir directory for this command

Table of contents
