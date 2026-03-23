When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker model run

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Run a model and interact with it using a submitted prompt or chat mode

Usage

`docker model run MODEL [PROMPT]`

## [Description](#description)

When you run a model, Docker calls an inference server API endpoint hosted by the Model Runner through Docker Desktop. The model stays in memory until another model is requested, or until a pre-defined inactivity timeout is reached (currently 5 minutes).

You do not have to use Docker model run before interacting with a specific model from a host process or from within a container. Model Runner transparently loads the requested model on-demand, assuming it has been pulled and is locally available.

You can also use chat mode in the Docker Desktop Dashboard when you select the model in the **Models** tab.

## [Options](#options)

Option

Default

Description

`--color`

`no`

Use colored output (auto|yes|no)

`--debug`

Enable debug logging

`-d, --detach`

Load the model in the background without interaction

`--openaiurl`

OpenAI-compatible API endpoint URL to chat with

## [Examples](#examples)

### [One-time prompt](#one-time-prompt)

```console
docker model run ai/smollm2 "Hi"
```

Output:

```console
Hello! How can I assist you today?
```

### [Interactive chat](#interactive-chat)

```console
docker model run ai/smollm2
```

Output:

```console
> Hi
Hi there! It's SmolLM, AI assistant. How can I help you today?
> /bye
```

### [Pre-load a model](#pre-load-a-model)

```console
docker model run --detach ai/smollm2
```

This loads the model into memory without interaction, ensuring maximum performance for subsequent requests.

Table of contents
