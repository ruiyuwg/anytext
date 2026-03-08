Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker stack config

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Outputs the final config file, after doing merges and interpolations

Usage

`docker stack config [OPTIONS]`

Swarm This command works with the Swarm orchestrator.

## [Description](#description)

Outputs the final Compose file, after doing the merges and interpolations of the input Compose files.

## [Options](#options)

Option

Default

Description

`-c, --compose-file`

Path to a Compose file, or `-` to read from stdin

`--skip-interpolation`

Skip interpolation and output only merged config

## [Examples](#examples)

The following command outputs the result of the merge and interpolation of two Compose files.

```console
$ docker stack config --compose-file docker-compose.yml --compose-file docker-compose.prod.yml
```

The Compose file can also be provided as standard input with `--compose-file -`:

```console
$ cat docker-compose.yml | docker stack config --compose-file -
```

### [Skipping interpolation](#skipping-interpolation)

In some cases, it might be useful to skip interpolation of environment variables. For example, when you want to pipe the output of this command back to `stack deploy`.

If you have a regex for a redirect route in an environment variable for your webserver you would use two `$` signs to prevent `stack deploy` from interpolating `${1}`.

```yaml
  service: webserver
  environment:
    REDIRECT_REGEX=http://host/redirect/$${1}
```

With interpolation, the `stack config` command will replace the environment variable in the Compose file with `REDIRECT_REGEX=http://host/redirect/${1}`, but then when piping it back to the `stack deploy` command it will be interpolated again and result in undefined behavior. That is why, when piping the output back to `stack deploy` one should always prefer the `--skip-interpolation` option.

```console
$ docker stack config --compose-file web.yml --compose-file web.prod.yml --skip-interpolation | docker stack deploy --compose-file -
```

Table of contents
