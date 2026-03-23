# OpenAI Codex

[OpenAI Codex](https://github.com/openai/codex) is OpenAI's agentic coding tool. You can configure it to use Vercel AI Gateway, enabling you to:

- Route requests through multiple AI providers
- Monitor traffic and spend in your AI Gateway Overview
- View detailed traces in Vercel Observability under AI
- Use any model available through the gateway

## Configure OpenAI Codex

Configure Codex to use AI Gateway through its configuration file for persistent settings.

- ### Install OpenAI Codex CLI
  Follow the [installation instructions on the OpenAI Codex repository](https://github.com/openai/codex) to install the Codex CLI tool.

- ### Configure environment variables
  Set your [AI Gateway API key](/docs/ai-gateway/authentication-and-byok/authentication) in your shell configuration file, for example in `~/.zshrc` or `~/.bashrc`:
  ```bash
  export AI_GATEWAY_API_KEY="your-ai-gateway-api-key"
  ```
  After adding this, reload your shell configuration:
  ```bash
  source ~/.zshrc  # or source ~/.bashrc
  ```

- ### Set up the Codex config file
  Open `~/.codex/config.toml` and add the following:
  ```toml filename="~/.codex/config.toml"
  [model_providers.vercel]
  name = "Vercel AI Gateway"
  base_url = "https://ai-gateway.vercel.sh/v1"
  env_key = "AI_GATEWAY_API_KEY"
  wire_api = "responses"

  [profiles.vercel]
  model_provider = "vercel"
  model = "openai/gpt-5.2-codex"
  ```
  The configuration above:
  - Sets up a model provider named `vercel` that points to the AI Gateway
  - References your `AI_GATEWAY_API_KEY` environment variable
  - Creates a `vercel` profile that uses the Vercel provider
  - Specifies `openai/gpt-5.2-codex` as the default model
  - Uses `wire_api = "responses"` for the OpenAI Responses API format

- ### Run Codex
  Start Codex with the `vercel` profile:
  ```bash
  codex --profile vercel
  ```
  Vercel AI Gateway routes your requests. To confirm, check your [AI Gateway Overview](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) in the Vercel dashboard.

- ### (Optional) Use a different model
  To use a different model, update the `model` field in your config:
  ```toml filename="~/.codex/config.toml"
  [profiles.vercel]
  model_provider = "vercel"
  model = "anthropic/claude-sonnet-4.5"
  # Or try other models:
  # model = "google/gemini-3-flash"
  # model = "openai/o3"
  ```
  > **💡 Note:** When using non-OpenAI models through the gateway, you may see warnings about
  > model metadata not being found. These warnings are safe to ignore since the
  > gateway handles model routing.

- ### (Optional) Define multiple profiles
  Add each profile to your config file:
  ```toml filename="~/.codex/config.toml"
  [model_providers.vercel]
  name = "Vercel AI Gateway"
  base_url = "https://ai-gateway.vercel.sh/v1"
  env_key = "AI_GATEWAY_API_KEY"
  wire_api = "responses"

  [profiles.vercel]
  model_provider = "vercel"
  model = "openai/gpt-5.2-codex"

  [profiles.fast]
  model_provider = "vercel"
  model = "openai/gpt-4o-mini"

  [profiles.reasoning]
  model_provider = "vercel"
  model = "openai/o3"

  [profiles.claude]
  model_provider = "vercel"
  model = "anthropic/claude-sonnet-4.5"
  ```
  Switch between profiles using the `--profile` flag:
  ```bash
  codex --profile vercel
  codex --profile claude
  ```

title: "OpenCode"
description: "Use OpenCode with the AI Gateway."
last\_updated: "2026-03-23T09:40:03.171Z"
source: "https://vercel.com/docs/agent-resources/coding-agents/opencode"
