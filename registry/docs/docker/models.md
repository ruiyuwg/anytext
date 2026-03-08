Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# Models

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Requires: Docker Compose [2.38.0](https://github.com/docker/compose/releases/tag/v2.38.0) and later

The top-level `models` section declares AI models that are used by your Compose application. These models are typically pulled as OCI artifacts, run by a model runner, and exposed as an API that your service containers can consume.

Services can only access models when explicitly granted by a [`models` attribute](https://docs.docker.com/reference/compose-file/services/#models) within the `services` top-level element.

## [Examples](#examples)

### [Example 1](#example-1)

```yaml
services:
  app:
    image: app
    models:
      - ai_model


models:
  ai_model:
    model: ai/model
```

In this basic example:

- The app service uses the `ai_model`.
- The `ai_model` is defined as an OCI artifact (`ai/model`) that is pulled and served by the model runner.
- Docker Compose injects connection info, for example `AI_MODEL_URL`, into the container.

### [Example 2](#example-2)

```yaml
services:
  app:
    image: app
    models:
      my_model:
        endpoint_var: MODEL_URL

models:
  my_model:
    model: ai/model
    context_size: 1024
    runtime_flags: 
      - "--a-flag"
      - "--another-flag=42"
```

In this advanced setup:

- The service app references `my_model` using the long syntax.
- Compose injects the model runner's URL as the environment variable `MODEL_URL`.

## [Attributes](#attributes)

- `model` (required): The OCI artifact identifier for the model. This is what Compose pulls and runs via the model runner.
- `context_size`: Defines the maximum token context size for the model.
- `runtime_flags`: A list of raw command-line flags passed to the inference engine when the model is started.

## [Additional resources](#additional-resources)

For more examples and information on using `model`, see [Use AI models in Compose](https://docs.docker.com/ai/compose/models-and-compose/)

[Edit this page](https://github.com/docker/docs/edit/main/content/reference/compose-file/models.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2freference%2fcompose-file%2fmodels%2f\&labels=status%2Ftriage)

Table of contents
