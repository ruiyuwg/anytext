Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Local models with Docker Model Runner

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Model Runner lets you run AI models locally on your machine. No API keys, no recurring costs, and your data stays private.

## [Why use local models](#why-use-local-models)

Docker Model Runner lets you run models locally without API keys or recurring costs. Your data stays on your machine, and you can work offline once models are downloaded. This is an alternative to [cloud model providers](https://docs.docker.com/ai/docker-agent/model-providers/).

## [Prerequisites](#prerequisites)

You need Docker Model Runner installed and running:

- Docker Desktop (macOS/Windows) - Enable Docker Model Runner in **Settings > AI > Enable Docker Model Runner**. See [Get started with DMR](https://docs.docker.com/ai/model-runner/get-started/#enable-docker-model-runner) for detailed instructions.
- Docker Engine (Linux) - Install with `sudo apt-get install docker-model-plugin` or `sudo dnf install docker-model-plugin`. See [Get started with DMR](https://docs.docker.com/ai/model-runner/get-started/#docker-engine).

Verify Docker Model Runner is available:

```console
$ docker model version
```

If the command returns version information, you're ready to use local models.

## [Using models with DMR](#using-models-with-dmr)

Docker Model Runner can run any compatible model. Models can come from:

- Docker Hub repositories (`docker.io/namespace/model-name`)
- Your own OCI artifacts packaged and pushed to any registry
- HuggingFace models directly (`hf.co/org/model-name`)
- The Docker Model catalog in Docker Desktop

To see models available to the local Docker catalog, run:

```console
$ docker model list --openai
```

To use a model, reference it in your configuration. DMR automatically pulls models on first use if they're not already local.

## [Configuration](#configuration)

Configure your agent to use Docker Model Runner with the `dmr` provider:

```yaml
agents:
  root:
    model: dmr/ai/qwen3
    instruction: You are a helpful assistant
    toolsets:
      - type: filesystem
```

When you first run your agent, Docker Agent prompts you to pull the model if it's not already available locally:

```console
$ docker agent run agent.yaml
Model not found locally. Do you want to pull it now? ([y]es/[n]o)
```

## [How it works](#how-it-works)

When you configure an agent to use DMR, Docker Agent automatically connects to your local Docker Model Runner and routes inference requests to it. If a model isn't available locally, Docker Agent prompts you to pull it on first use. No API keys or authentication are required.

## [Advanced configuration](#advanced-configuration)

For more control over model behavior, define a model configuration:

```yaml
models:
  local-qwen:
    provider: dmr
    model: ai/qwen3:14B
    temperature: 0.7
    max_tokens: 8192

agents:
  root:
    model: local-qwen
    instruction: You are a helpful coding assistant
```

### [Faster inference with speculative decoding](#faster-inference-with-speculative-decoding)

Speed up model responses using speculative decoding with a smaller draft model:

```yaml
models:
  fast-qwen:
    provider: dmr
    model: ai/qwen3:14B
    provider_opts:
      speculative_draft_model: ai/qwen3:0.6B-Q4_K_M
      speculative_num_tokens: 16
      speculative_acceptance_rate: 0.8
```

The draft model generates token candidates, and the main model validates them. This can significantly improve throughput for longer responses.

### [Runtime flags](#runtime-flags)

Pass engine-specific flags to optimize performance:

```yaml
models:
  optimized-qwen:
    provider: dmr
    model: ai/qwen3
    provider_opts:
      runtime_flags: ["--ngl=33", "--threads=8"]
```

Common flags:

- `--ngl` - Number of GPU layers
- `--threads` - CPU thread count
- `--repeat-penalty` - Repetition penalty

## [Using DMR for RAG](#using-dmr-for-rag)

Docker Model Runner supports both embeddings and reranking for RAG workflows.

### [Embedding with DMR](#embedding-with-dmr)

Use local embeddings for indexing your knowledge base:

```yaml
rag:
  codebase:
    docs: [./src]
    strategies:
      - type: chunked-embeddings
        embedding_model: dmr/ai/embeddinggemma
        database: ./code.db
```

### [Reranking with DMR](#reranking-with-dmr)

DMR provides native reranking for improved RAG results:

```yaml
models:
  reranker:
    provider: dmr
    model: hf.co/ggml-org/qwen3-reranker-0.6b-q8_0-gguf

rag:
  docs:
    docs: [./documentation]
    strategies:
      - type: chunked-embeddings
        embedding_model: dmr/ai/embeddinggemma
        limit: 20
    results:
      reranking:
        model: reranker
        threshold: 0.5
      limit: 5
```

Native DMR reranking is the fastest option for reranking RAG results.

## [Troubleshooting](#troubleshooting)

If Docker Agent can't find Docker Model Runner:

1. Verify Docker Model Runner status:

   ```console
   $ docker model status
   ```

2. Check available models:

   ```console
   $ docker model list
   ```

3. Check model logs for errors:

   ```console
   $ docker model logs
   ```

4. Ensure Docker Desktop has Model Runner enabled in settings (macOS/Windows)

## [What's next](#whats-next)

- Follow the [tutorial](https://docs.docker.com/ai/docker-agent/tutorial/) to build your first agent with local models
- Learn about [RAG](https://docs.docker.com/ai/docker-agent/rag/) to give your agents access to codebases and documentation
- See the [configuration reference](https://docs.docker.com/ai/docker-agent/reference/config/#docker-model-runner-dmr) for all DMR options

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/docker-agent/local-models.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fdocker-agent%2flocal-models%2f\&labels=status%2Ftriage)

Table of contents
