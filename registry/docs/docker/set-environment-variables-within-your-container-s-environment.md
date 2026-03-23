When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Set environment variables within your container's environment

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

A container's environment is not set until there's an explicit entry in the service configuration to make this happen. With Compose, there are two ways you can set environment variables in your containers with your Compose file.

> Tip
>
> Don't use environment variables to pass sensitive information, such as passwords, in to your containers. Use [secrets](https://docs.docker.com/compose/how-tos/use-secrets/) instead.

## [Use the `environment` attribute](#use-the-environment-attribute)

You can set environment variables directly in your container's environment with the [`environment` attribute](https://docs.docker.com/reference/compose-file/services/#environment) in your `compose.yaml`.

It supports both list and mapping syntax:

```yaml
services:
  webapp:
    environment:
      DEBUG: "true"
```

is equivalent to

```yaml
services:
  webapp:
    environment:
      - DEBUG=true
```

See [`environment` attribute](https://docs.docker.com/reference/compose-file/services/#environment) for more examples on how to use it.

### [Additional information](#additional-information)

- You can choose not to set a value and pass the environment variables from your shell straight through to your containers. It works in the same way as `docker run -e VARIABLE ...`:

  ```yaml
  web:
    environment:
      - DEBUG
  ```

The value of the `DEBUG` variable in the container is taken from the value for the same variable in the shell in which Compose is run. Note that in this case no warning is issued if the `DEBUG` variable in the shell environment is not set.

- You can also take advantage of [interpolation](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/#interpolation-syntax). In the following example, the result is similar to the one above but Compose gives you a warning if the `DEBUG` variable is not set in the shell environment or in an `.env` file in the project directory.

  ```yaml
  web:
    environment:
      - DEBUG=${DEBUG}
  ```

## [Use the `env_file` attribute](#use-the-env_file-attribute)

A container's environment can also be set using [`.env` files](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/#env-file) along with the [`env_file` attribute](https://docs.docker.com/reference/compose-file/services/#env_file).

```yaml
services:
  webapp:
    env_file: "webapp.env"
```

Using an `.env` file lets you use the same file for use by a plain `docker run --env-file ...` command, or to share the same `.env` file within multiple services without the need to duplicate a long `environment` YAML block.

It can also help you keep your environment variables separate from your main configuration file, providing a more organized and secure way to manage sensitive information, as you do not need to place your `.env` file in the root of your project's directory.

The [`env_file` attribute](https://docs.docker.com/reference/compose-file/services/#env_file) also lets you use multiple `.env` files in your Compose application.

The paths to your `.env` file, specified in the `env_file` attribute, are relative to the location of your `compose.yaml` file.

> Important
>
> Interpolation in `.env` files is a Docker Compose CLI feature.
>
> It is not supported when running `docker run --env-file ...`.

### [Additional information](#additional-information-1)

- If multiple files are specified, they are evaluated in order and can override values set in previous files.

- As of Docker Compose version 2.24.0, you can set your `.env` file, defined by the `env_file` attribute, to be optional by using the `required` field. When `required` is set to `false` and the `.env` file is missing, Compose silently ignores the entry.

  ```yaml
  env_file:
    - path: ./default.env
      required: true # default
    - path: ./override.env
      required: false
  ```

- As of Docker Compose version 2.30.0, you can use an alternative file format for the `env_file` with the `format` attribute. For more information, see [`format`](https://docs.docker.com/reference/compose-file/services/#format).

- Values in your `.env` file can be overridden from the command line by using [`docker compose run -e`](#set-environment-variables-with-docker-compose-run---env).

## [Set environment variables with `docker compose run --env`](#set-environment-variables-with-docker-compose-run---env)

Similar to `docker run --env`, you can set environment variables temporarily with `docker compose run --env` or its short form `docker compose run -e`:

```console
$ docker compose run -e DEBUG=1 web python console.py
```

### [Additional information](#additional-information-2)

- You can also pass a variable from the shell or your environment files by not giving it a value:

  ```console
  $ docker compose run -e DEBUG web python console.py
  ```

The value of the `DEBUG` variable in the container is taken from the value for the same variable in the shell in which Compose is run or from the environment files.

## [Further resources](#further-resources)

- [Understand environment variable precedence](https://docs.docker.com/compose/how-tos/environment-variables/envvars-precedence/).
- [Set or change predefined environment variables](https://docs.docker.com/compose/how-tos/environment-variables/envvars/)
- [Explore best practices](https://docs.docker.com/compose/how-tos/environment-variables/best-practices/)
- [Understand interpolation](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/compose/how-tos/environment-variables/set-environment-variables.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fcompose%2fhow-tos%2fenvironment-variables%2fset-environment-variables%2f\&labels=status%2Ftriage)

Table of contents
