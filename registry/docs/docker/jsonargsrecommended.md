Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# JSONArgsRecommended

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Output](#output)

```text
JSON arguments recommended for ENTRYPOINT/CMD to prevent unintended behavior related to OS signals
```

## [Description](#description)

`ENTRYPOINT` and `CMD` instructions both support two different syntaxes for arguments:

- Shell form: `CMD my-cmd start`
- Exec form: `CMD ["my-cmd", "start"]`

When you use shell form, the executable runs as a child process to a shell, which doesn't pass signals. This means that the program running in the container can't detect OS signals like `SIGTERM` and `SIGKILL` and respond to them correctly.

## [Examples](#examples)

❌ Bad: the `ENTRYPOINT` command doesn't receive OS signals.

```dockerfile
FROM alpine
ENTRYPOINT my-program start
# entrypoint becomes: /bin/sh -c my-program start
```

To make sure the executable can receive OS signals, use the exec form for `CMD` and `ENTRYPOINT`, which lets you run the executable as the main process (`PID 1`) in the container, avoiding a shell parent process.

✅ Good: the `ENTRYPOINT` receives OS signals.

```dockerfile
FROM alpine
ENTRYPOINT ["my-program", "start"]
# entrypoint becomes: my-program start
```

Note that running programs as PID 1 means the program now has the special responsibilities and behaviors associated with PID 1 in Linux, such as reaping child processes.

### [Workarounds](#workarounds)

There might still be cases when you want to run your containers under a shell. When using exec form, shell features such as variable expansion, piping (`|`) and command chaining (`&&`, `||`, `;`), are not available. To use such features, you need to use shell form.

Here are some ways you can achieve that. Note that this still means that executables run as child-processes of a shell.

#### [Create a wrapper script](#create-a-wrapper-script)

You can create an entrypoint script that wraps your startup commands, and execute that script with a JSON-formatted `ENTRYPOINT` command.

✅ Good: the `ENTRYPOINT` uses JSON format.

```dockerfile
FROM alpine
RUN apk add bash
COPY --chmod=755 <<EOT /entrypoint.sh
#!/usr/bin/env bash
set -e
my-background-process &
my-program start
EOT
ENTRYPOINT ["/entrypoint.sh"]
```

#### [Explicitly specify the shell](#explicitly-specify-the-shell)

You can use the [`SHELL`](https://docs.docker.com/reference/dockerfile/#shell) Dockerfile instruction to explicitly specify a shell to use. This will suppress the warning since setting the `SHELL` instruction indicates that using shell form is a conscious decision.

✅ Good: shell is explicitly defined.

```dockerfile
FROM alpine
RUN apk add bash
SHELL ["/bin/bash", "-c"]
ENTRYPOINT echo "hello world"
```

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fbuild-checks%2fjson-args-recommended%2f\&labels=status%2Ftriage)

Table of contents
