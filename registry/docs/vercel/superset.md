# Superset

[Superset](https://superset.sh) is a terminal-first AI coding agent that works with CLI agents like Claude Code, Codex, and Cursor Agents. Here's how to use Superset with Vercel AI Gateway.

## Terminal configuration

- ### Download Superset
  Download and install Superset by following the [installation guide](https://docs.superset.sh/installation). If you already have Superset installed, continue to the next step.

- ### Create an API key
  Go to the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar and click **API keys** to create a new API key.

- ### Configure environment variables
  Terminal-based agents in Superset work automatically when you configure your environment. Add the following to your shell configuration file, for example in `~/.zshrc` or `~/.bashrc`:
  ```bash
  export ANTHROPIC_BASE_URL="https://ai-gateway.vercel.sh"
  export ANTHROPIC_AUTH_TOKEN="your-ai-gateway-api-key"
  export ANTHROPIC_API_KEY=""
  ```
  > **💡 Note:** Setting `ANTHROPIC_API_KEY` to an empty string is important. This prevents
  > direct Anthropic authentication and ensures requests route through AI Gateway.

- ### Restart your terminal session

  Open a new terminal window or run `source ~/.zshrc` or `source ~/.bashrc` to apply the changes.

  Your terminal-based Superset agents now route requests through Vercel AI Gateway.

## Chat UI configuration

For the Superset Chat UI, configure AI Gateway through the settings panel:

- ### Download Superset
  Download and install Superset by following the [installation guide](https://docs.superset.sh/installation).

- ### Open Superset
  Open the Superset app.

- ### Open the model picker
  Open the model picker at the bottom of the chat interface.

- ### Open provider settings
  Click the **key icon** next to **Anthropic**, then select **Use API key**.

- ### Create an API key
  Go to the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) section in the Vercel dashboard sidebar and click **API keys** to create a new API key.

- ### Add environment variables
  Enter the following environment variables (one per line, `VAR_NAME=value` format):
  ```bash
  ANTHROPIC_BASE_URL=https://ai-gateway.vercel.sh
  ANTHROPIC_AUTH_TOKEN=your-ai-gateway-api-key
  ANTHROPIC_API_KEY=
  ```

- ### Save settings

  Click **Save settings** to apply your configuration.

  Your Superset requests now route through Vercel AI Gateway.

## Workspace-specific configuration

You can also set environment variables per workspace through **Settings > Env** in Superset. This is useful when you need different configurations for different projects.

## Monitoring usage

Once configured, view your usage in the [**AI Gateway**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=Go+to+AI+Gateway) section of the Vercel dashboard:

- **Spend tracking**: See costs across all your Superset sessions
- **Model usage**: Track which models your agents use
- **Request traces**: Debug issues with full request and response logs

See the [observability documentation](/docs/ai-gateway/capabilities/observability) for more details.

title: "Build with AI agents on Vercel"
description: "Install AI agents and services through the Vercel Marketplace to automate workflows and build custom AI systems."
last\_updated: "2026-03-23T09:40:03.236Z"
source: "https://vercel.com/docs/agent-resources/integrations-for-agents"
