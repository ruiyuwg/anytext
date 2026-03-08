Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Local file logging driver

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

The `local` logging driver captures output from container's stdout/stderr and writes them to an internal storage that's optimized for performance and disk use.

By default, the `local` driver preserves 100MB of log messages per container and uses automatic compression to reduce the size on disk. The 100MB default value is based on a 20M default size for each file and a default count of 5 for the number of such files (to account for log rotation).

> Warning
>
> The `local` logging driver uses file-based storage. These files are designed to be exclusively accessed by the Docker daemon. Interacting with these files with external tools may interfere with Docker's logging system and result in unexpected behavior, and should be avoided.

## [Usage](#usage)

To use the `local` driver as the default logging driver, set the `log-driver` and `log-opt` keys to appropriate values in the `daemon.json` file, which is located in `/etc/docker/` on Linux hosts or `C:\ProgramData\docker\config\daemon.json` on Windows Server. For more about configuring Docker using `daemon.json`, see [daemon.json](https://docs.docker.com/reference/cli/dockerd/#daemon-configuration-file).

The following example sets the log driver to `local` and sets the `max-size` option.

```json
{
  "log-driver": "local",
  "log-opts": {
    "max-size": "10m"
  }
}
```

Restart Docker for the changes to take effect for newly created containers. Existing containers don't use the new logging configuration automatically.

You can set the logging driver for a specific container by using the `--log-driver` flag to `docker container create` or `docker run`:

```console
$ docker run \
      --log-driver local --log-opt max-size=10m \
      alpine echo hello world
```

Note that `local` is a bash reserved keyword, so you may need to quote it in scripts.

### [Options](#options)

The `local` logging driver supports the following logging options:

Option

Description

Example value

`max-size`

The maximum size of the log before it's rolled. A positive integer plus a modifier representing the unit of measure (`k`, `m`, or `g`). Defaults to 20m.

`--log-opt max-size=10m`

`max-file`

The maximum number of log files that can be present. If rolling the logs creates excess files, the oldest file is removed. A positive integer. Defaults to 5.

`--log-opt max-file=3`

`compress`

Toggle compression of rotated log files. Enabled by default.

`--log-opt compress=false`

### [Examples](#examples)

This example starts an `alpine` container which can have a maximum of 3 log files no larger than 10 megabytes each.

```console
$ docker run -it --log-driver local --log-opt max-size=10m --log-opt max-file=3 alpine ash
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/engine/logging/drivers/local.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fengine%2flogging%2fdrivers%2flocal%2f\&labels=status%2Ftriage)

Table of contents
