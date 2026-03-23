When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Model providers

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

To run Docker Agent, you need a model provider. You can either use a cloud provider with an API key or run models locally with [Docker Model Runner](https://docs.docker.com/ai/docker-agent/local-models/).

This guide covers cloud providers. For the local alternative, see [Local models with Docker Model Runner](https://docs.docker.com/ai/docker-agent/local-models/).

## [Supported providers](#supported-providers)

Docker Agent supports these cloud model providers:

- Anthropic - Claude models
- OpenAI - GPT models
- Google - Gemini models

## [Anthropic](#anthropic)

Anthropic provides the Claude family of models, including Claude Sonnet and Claude Opus.

To get an API key:

1. Go to [console.anthropic.com](https://console.anthropic.com/).
2. Sign up or sign in to your account.
3. Navigate to the API Keys section.
4. Create a new API key.
5. Copy the key.

Set your API key as an environment variable:

```console
$ export ANTHROPIC_API_KEY=your_key_here
```

Use Anthropic models in your agent configuration:

```yaml
agents:
  root:
    model: anthropic/claude-sonnet-4-5
    instruction: You are a helpful coding assistant
```

Available models include:

- `anthropic/claude-sonnet-4-5`
- `anthropic/claude-opus-4-5`
- `anthropic/claude-haiku-4-5`

## [OpenAI](#openai)

OpenAI provides the GPT family of models, including GPT-5 and GPT-5 mini.

To get an API key:

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys).
2. Sign up or sign in to your account.
3. Navigate to the API Keys section.
4. Create a new API key.
5. Copy the key.

Set your API key as an environment variable:

```console
$ export OPENAI_API_KEY=your_key_here
```

Use OpenAI models in your agent configuration:

```yaml
agents:
  root:
    model: openai/gpt-5
    instruction: You are a helpful coding assistant
```

Available models include:

- `openai/gpt-5`
- `openai/gpt-5-mini`

## [Google Gemini](#google-gemini)

Google provides the Gemini family of models.

To get an API key:

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
2. Sign in with your Google account.
3. Create an API key.
4. Copy the key.

Set your API key as an environment variable:

```console
$ export GOOGLE_API_KEY=your_key_here
```

Use Gemini models in your agent configuration:

```yaml
agents:
  root:
    model: google/gemini-2.5-flash
    instruction: You are a helpful coding assistant
```

Available models include:

- `google/gemini-2.5-flash`
- `google/gemini-2.5-pro`

## [OpenAI-compatible providers](#openai-compatible-providers)

You can use the `openai` provider type to connect to any model or provider that implements the OpenAI API specification. This includes services like Azure OpenAI, local inference servers, and other compatible endpoints.

Configure an OpenAI-compatible provider by specifying the base URL:

```yaml
agents:
  root:
    model: openai/your-model-name
    instruction: You are a helpful coding assistant
    provider:
      base_url: https://your-provider.example.com/v1
```

By default, Docker Agent uses the `OPENAI_API_KEY` environment variable for authentication. If your provider uses a different variable, specify it with `token_key`:

```yaml
agents:
  root:
    model: openai/your-model-name
    instruction: You are a helpful coding assistant
    provider:
      base_url: https://your-provider.example.com/v1
      token_key: YOUR_PROVIDER_API_KEY
```

## [What's next](#whats-next)

- Follow the [tutorial](https://docs.docker.com/ai/docker-agent/tutorial/) to build your first agent
- Learn about [local models with Docker Model Runner](https://docs.docker.com/ai/docker-agent/local-models/) as an alternative to cloud providers
- Review the [configuration reference](https://docs.docker.com/ai/docker-agent/reference/config/) for advanced model settings

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/docker-agent/model-providers.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fdocker-agent%2fmodel-providers%2f\&labels=status%2Ftriage)

Table of contents
