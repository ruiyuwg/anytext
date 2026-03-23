When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker context show

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Print the name of the current context

Usage

`docker context show`

## [Description](#description)

Print the name of the current context, possibly set by `DOCKER_CONTEXT` environment variable or `--context` global option.

## [Examples](#examples)

### [Print the current context](#print-the-current-context)

The following example prints the currently used [`docker context`](/reference/cli/docker/context/):

```console
$ docker context show'
default
```

As an example, this output can be used to dynamically change your shell prompt to indicate your active context. The example below illustrates how this output could be used when using Bash as your shell.

Declare a function to obtain the current context in your `~/.bashrc`, and set this command as your `PROMPT_COMMAND`

```console
function docker_context_prompt() {
        PS1="context: $(docker context show)> "
}

PROMPT_COMMAND=docker_context_prompt
```

After reloading the `~/.bashrc`, the prompt now shows the currently selected `docker context`:

```console
$ source ~/.bashrc
context: default> docker context create --docker host=unix:///var/run/docker.sock my-context
my-context
Successfully created context "my-context"
context: default> docker context use my-context
my-context
Current context is now "my-context"
context: my-context> docker context use default
default
Current context is now "default"
context: default>
```

Table of contents
