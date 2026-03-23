When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Get started with DMR

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Model Runner (DMR) lets you run and manage AI models locally using Docker. This page shows you how to enable DMR, pull and run a model, configure model settings, and publish custom models.

## [Enable Docker Model Runner](#enable-docker-model-runner)

You can enable DMR using Docker Desktop or Docker Engine. Follow the instructions below based on your setup.

### [Docker Desktop](#docker-desktop)

1. In the settings view, go to the **AI** tab.
2. Select the **Enable Docker Model Runner** setting.
3. If you use Windows with a supported NVIDIA GPU, you also see and can select **Enable GPU-backed inference**.
4. Optional: To enable TCP support, select **Enable host-side TCP support**.
   1. In the **Port** field, type the port you want to use.
   2. If you interact with Model Runner from a local frontend web app, in **CORS Allows Origins**, select the origins that Model Runner should accept requests from. An origin is the URL where your web app runs, for example `http://localhost:3131`.

You can now use the `docker model` command in the CLI and view and interact with your local models in the **Models** tab in the Docker Desktop Dashboard.

> Important
>
> For Docker Desktop versions 4.45 and earlier, this setting was under the **Beta features** tab.

### [Docker Engine](#docker-engine)

1. Ensure you have installed [Docker Engine](/engine/install/).

2. Docker Model Runner is available as a package. To install it, run:

   Ubuntu/Debian RPM-base distributions

   ```bash
   $ sudo apt-get update
   $ sudo apt-get install docker-model-plugin
   ```

   ```bash
   $ sudo dnf update
   $ sudo dnf install docker-model-plugin
   ```

3. Test the installation:

   ```bash
   $ docker model version
   $ docker model run ai/smollm2
   ```

> Note
>
> TCP support is enabled by default for Docker Engine on port `12434`.

### [Update DMR in Docker Engine](#update-dmr-in-docker-engine)

To update Docker Model Runner in Docker Engine, uninstall it with [`docker model uninstall-runner`](/reference/cli/docker/model/uninstall-runner/) then reinstall it:

```bash
docker model uninstall-runner --images && docker model install-runner
```

> Note
>
> With the above command, local models are preserved. To delete the models during the upgrade, add the `--models` option to the `uninstall-runner` command.

## [Pull a model](#pull-a-model)

Models are cached locally.

> Note
>
> When you use the Docker CLI, you can also pull models directly from [HuggingFace](https://huggingface.co/).

From Docker Desktop From the Docker CLI

1. Select **Models** and select the **Docker Hub** tab.
2. Find the model you want and select **Pull**.

![Screenshot showing the Docker Hub view.](https://docs.docker.com/ai/model-runner/images/dmr-catalog.png)

Use the [`docker model pull` command](/reference/cli/docker/model/pull/). For example:

Pulling from Docker Hub

```bash
docker model pull ai/smollm2:360M-Q4_K_M
```

Pulling from HuggingFace

```bash
docker model pull hf.co/bartowski/Llama-3.2-1B-Instruct-GGUF
```

## [Run a model](#run-a-model)

From Docker Desktop From the Docker CLI

1. Select **Models** and select the **Local** tab.
2. Select the play button. The interactive chat screen opens.

![Screenshot showing the Local view.](https://docs.docker.com/ai/model-runner/images/dmr-run.png)

Use the [`docker model run` command](/reference/cli/docker/model/run/).

## [Configure a model](#configure-a-model)

You can configure a model, such as its maximum token limit and more, use Docker Compose. See [Models and Compose - Model configuration options](https://docs.docker.com/ai/compose/models-and-compose/#model-configuration-options).

## [Publish a model](#publish-a-model)

> Note
>
> This works for any Container Registry supporting OCI Artifacts, not only Docker Hub.

You can tag existing models with a new name and publish them under a different namespace and repository:

```bash
# Tag a pulled model under a new name
$ docker model tag ai/smollm2 myorg/smollm2

# Push it to Docker Hub
$ docker model push myorg/smollm2
```

For more details, see the [`docker model tag`](/reference/cli/docker/model/tag) and [`docker model push`](/reference/cli/docker/model/push) command documentation.

You can also package a model file in GGUF format as an OCI Artifact and publish it to Docker Hub.

```bash
# Download a model file in GGUF format, for example from HuggingFace
$ curl -L -o model.gguf https://huggingface.co/TheBloke/Mistral-7B-v0.1-GGUF/resolve/main/mistral-7b-v0.1.Q4_K_M.gguf

# Package it as OCI Artifact and push it to Docker Hub
$ docker model package --gguf "$(pwd)/model.gguf" --push myorg/mistral-7b-v0.1:Q4_K_M
```

For more details, see the [`docker model package`](/reference/cli/docker/model/package/) command documentation.

## [Troubleshooting](#troubleshooting)

### [Display the logs](#display-the-logs)

To troubleshoot issues, display the logs:

From Docker Desktop From the Docker CLI

Select **Models** and select the **Logs** tab.

![Screenshot showing the Models view.](https://docs.docker.com/ai/model-runner/images/dmr-logs.png)

Use the [`docker model logs` command](/reference/cli/docker/model/logs/).

### [Inspect requests and responses](#inspect-requests-and-responses)

Inspecting requests and responses helps you diagnose model-related issues. For example, you can evaluate context usage to verify you stay within the model's context window or display the full body of a request to control the parameters you are passing to your models when developing with a framework.

In Docker Desktop, to inspect the requests and responses for each model:

1. Select **Models** and select the **Requests** tab. This view displays all the requests to all models:
   - The time the request was sent.
   - The model name and version
   - The prompt/request
   - The context usage
   - The time it took for the response to be generated.
2. Select one of the requests to display further details:
   - In the **Overview** tab, view the token usage, response metadata and generation speed, and the actual prompt and response.
   - In the **Request** and **Response** tabs, view the full JSON payload of the request and the response.

> Note
>
> You can also display the requests for a specific model when you select a model and then select the **Requests** tab.

## [Related pages](#related-pages)

- [API reference](https://docs.docker.com/ai/model-runner/api-reference/) - OpenAI and Ollama-compatible API documentation
- [Configuration options](https://docs.docker.com/ai/model-runner/configuration/) - Context size and runtime parameters
- [Inference engines](https://docs.docker.com/ai/model-runner/inference-engines/) - llama.cpp and vLLM details
- [IDE integrations](https://docs.docker.com/ai/model-runner/ide-integrations/) - Connect Cline, Continue, Cursor, and more
- [Open WebUI integration](https://docs.docker.com/ai/model-runner/openwebui-integration/) - Set up a web chat interface
- [Models and Compose](https://docs.docker.com/ai/compose/models-and-compose/) - Use models in Compose applications
- [Docker Model Runner CLI reference](/reference/cli/docker/model) - Complete CLI documentation

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/model-runner/get-started.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fmodel-runner%2fget-started%2f\&labels=status%2Ftriage)

Table of contents
