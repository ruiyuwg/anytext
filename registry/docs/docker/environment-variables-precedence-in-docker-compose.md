Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Environment variables precedence in Docker Compose

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

When the same environment variable is set in multiple sources, Docker Compose follows a precedence rule to determine the value for that variable in your container's environment.

This page explains how Docker Compose determines the final value of an environment variable when it's defined in multiple locations.

The order of precedence (highest to lowest) is as follows:

1. Set using [`docker compose run -e` in the CLI](https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/#set-environment-variables-with-docker-compose-run---env).
2. Set with either the `environment` or `env_file` attribute but with the value interpolated from your [shell](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/#substitute-from-the-shell) or an environment file. (either your default [`.env` file](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/#env-file), or with the [`--env-file` argument](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/#substitute-with---env-file) in the CLI).
3. Set using just the [`environment` attribute](https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/#use-the-environment-attribute) in the Compose file.
4. Use of the [`env_file` attribute](https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/#use-the-env_file-attribute) in the Compose file.
5. Set in a container image in the [ENV directive](https://docs.docker.com/reference/dockerfile/#env). Having any `ARG` or `ENV` setting in a `Dockerfile` evaluates only if there is no Docker Compose entry for `environment`, `env_file` or `run --env`.

## [Simple example](#simple-example)

In the following example, a different value for the same environment variable in an `.env` file and with the `environment` attribute in the Compose file:

```console
$ cat ./webapp.env
NODE_ENV=test

$ cat compose.yaml
services:
  webapp:
    image: 'webapp'
    env_file:
     - ./webapp.env
    environment:
     - NODE_ENV=production
```

The environment variable defined with the `environment` attribute takes precedence.

```console
$ docker compose run webapp env | grep NODE_ENV
NODE_ENV=production
```

## [Advanced example](#advanced-example)

The following table uses `VALUE`, an environment variable defining the version for an image, as an example.

### [How the table works](#how-the-table-works)

Each column represents a context from where you can set a value, or substitute in a value for `VALUE`.

The columns `Host OS environment` and `.env` file is listed only for illustration purposes. In reality, they don't result in a variable in the container by itself, but in conjunction with either the `environment` or `env_file` attribute.

Each row represents a combination of contexts where `VALUE` is set, substituted, or both. The **Result** column indicates the final value for `VALUE` in each scenario.

#

`docker compose run`

`environment` attribute

`env_file` attribute

Image `ENV`

`Host OS` environment

`.env` file

Result

1

\-

\-

\-

\-

`VALUE=1.4`

`VALUE=1.3`

\-

2

\-

\-

`VALUE=1.6`

`VALUE=1.5`

`VALUE=1.4`

\-

**`VALUE=1.6`**

3

\-

`VALUE=1.7`

\-

`VALUE=1.5`

`VALUE=1.4`

\-

**`VALUE=1.7`**

4

\-

\-

\-

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.5`**

5

`--env VALUE=1.8`

\-

\-

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.8`**

6

`--env VALUE`

\-

\-

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.4`**

7

`--env VALUE`

\-

\-

`VALUE=1.5`

\-

`VALUE=1.3`

**`VALUE=1.3`**

8

\-

\-

`VALUE`

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.4`**

9

\-

\-

`VALUE`

`VALUE=1.5`

\-

`VALUE=1.3`

**`VALUE=1.3`**

10

\-

`VALUE`

\-

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.4`**

11

\-

`VALUE`

\-

`VALUE=1.5`

\-

`VALUE=1.3`

**`VALUE=1.3`**

12

`--env VALUE`

`VALUE=1.7`

\-

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.4`**

13

`--env VALUE=1.8`

`VALUE=1.7`

\-

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.8`**

14

`--env VALUE=1.8`

\-

`VALUE=1.6`

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.8`**

15

`--env VALUE=1.8`

`VALUE=1.7`

`VALUE=1.6`

`VALUE=1.5`

`VALUE=1.4`

`VALUE=1.3`

**`VALUE=1.8`**

### [Understanding precedence results](#understanding-precedence-results)

Result 1: The local environment takes precedence, but the Compose file is not set to replicate this inside the container, so no such variable is set.

Result 2: The `env_file` attribute in the Compose file defines an explicit value for `VALUE` so the container environment is set accordingly.

Result 3: The `environment` attribute in the Compose file defines an explicit value for `VALUE`, so the container environment is set accordingly.

Result 4: The image's `ENV` directive declares the variable `VALUE`, and since the Compose file is not set to override this value, this variable is defined by image

Result 5: The `docker compose run` command has the `--env` flag set with an explicit value, and overrides the value set by the image.

Result 6: The `docker compose run` command has the `--env` flag set to replicate the value from the environment. Host OS value takes precedence and is replicated into the container's environment.

Result 7: The `docker compose run` command has the `--env` flag set to replicate the value from the environment. Value from `.env` file is selected to define the container's environment.

Result 8: The `env_file` attribute in the Compose file is set to replicate `VALUE` from the local environment. Host OS value takes precedence and is replicated into the container's environment.

Result 9: The `env_file` attribute in the Compose file is set to replicate `VALUE` from the local environment. Value from `.env` file is selected to define the container's environment.

Result 10: The `environment` attribute in the Compose file is set to replicate `VALUE` from the local environment. Host OS value takes precedence and is replicated into the container's environment.

Result 11: The `environment` attribute in the Compose file is set to replicate `VALUE` from the local environment. Value from `.env` file is selected to define the container's environment.

Result 12: The `--env` flag has higher precedence than the `environment` and `env_file` attributes and is to set to replicate `VALUE` from the local environment. Host OS value takes precedence and is replicated into the container's environment.

Results 13 to 15: The `--env` flag has higher precedence than the `environment` and `env_file` attributes and so sets the value.

## [Next steps](#next-steps)

- [Set environment variables in Compose](https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/)
- [Use variable interpolation in Compose files](https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/compose/how-tos/environment-variables/envvars-precedence.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fcompose%2fhow-tos%2fenvironment-variables%2fenvvars-precedence%2f\&labels=status%2Ftriage)

Table of contents
