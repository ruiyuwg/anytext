# Claude Code and Claude Agent SDK

AI Gateway provides [Anthropic-compatible API endpoints](/docs/ai-gateway/sdks-and-apis/anthropic-compat) so you can use [Claude Code](https://www.claude.com/product/claude-code) and the [Claude Agent SDK](https://docs.anthropic.com/en/docs/agent-sdk/overview) through a unified gateway.

> **💡 Note:** If you're routing through Bedrock or Vertex AI providers, set
> `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` in your environment. Claude Code
> and the Agent SDK automatically add Anthropic-specific beta headers that
> Bedrock and Vertex AI don't support, which can cause errors.

## Configuring Claude Code

[Claude Code](https://code.claude.com/docs) is Anthropic's agentic coding tool. You can configure it to use Vercel AI Gateway, enabling you to:

- Monitor traffic and token usage in your AI Gateway Overview

- View detailed traces in Vercel Observability under AI

- ### Configure environment variables
  First, log out if you're already logged in:
  ```bash
  claude /logout
  ```
  Next, ensure you have your AI Gateway API key handy, and configure Claude Code to use the AI Gateway by adding this to your shell configuration file, for example in `~/.zshrc` or `~/.bashrc`:
  ```bash
  export ANTHROPIC_BASE_URL="https://ai-gateway.vercel.sh"
  export ANTHROPIC_AUTH_TOKEN="your-ai-gateway-api-key"
  export ANTHROPIC_API_KEY=""
  ```
  > **💡 Note:** Setting `ANTHROPIC_API_KEY` to an empty string is important. Claude Code
  > checks this variable first, and if it's set to a non-empty value, it will use
  > that instead of `ANTHROPIC_AUTH_TOKEN`.

- ### Run Claude Code
  Run `claude` to start Claude Code with AI Gateway:
  ```bash
  claude
  ```
  Your requests will now be routed through Vercel AI Gateway.

- ### (Optional) macOS: Secure token storage with Keychain
  If you're on a Mac and would like to manage your API key through a keychain for improved security, set your API key in the keystore with:
  ```bash
  security add-generic-password -a "$USER" -s "ANTHROPIC_AUTH_TOKEN" \
    -w "your-ai-gateway-api-key"
  ```
  and edit the `ANTHROPIC_AUTH_TOKEN` line above to:
  ```bash
  export ANTHROPIC_AUTH_TOKEN=$(
    security find-generic-password -a "$USER" -s "ANTHROPIC_AUTH_TOKEN" -w
  )
  ```
  If you need to update the API key value later, you can do it with:
  ```bash
  security add-generic-password -U -a "$USER" -s "ANTHROPIC_AUTH_TOKEN" \
    -w "new-ai-gateway-api-key"
  ```

## With Claude Code Max

If you have a [Claude Code Max subscription](https://www.anthropic.com/claude/claude-code), you can use your subscription through the AI Gateway. This allows you to leverage your existing Claude subscription while still benefiting from the gateway's observability, monitoring, and routing features.

- ### Set up environment variables
  Add the following to your shell configuration file (e.g., `~/.zshrc` or `~/.bashrc`):
  ```bash
  export ANTHROPIC_BASE_URL="https://ai-gateway.vercel.sh"
  export ANTHROPIC_CUSTOM_HEADERS="x-ai-gateway-api-key: Bearer your-ai-gateway-api-key"
  ```
  Replace `your-ai-gateway-api-key` with your actual AI Gateway API key.

- ### Start Claude Code
  Start Claude Code:
  ```bash
  claude
  ```

- ### Log in with your Claude subscription
  If you're not already logged in, Claude Code will prompt you to authenticate. Choose **Option 1 - Claude account with subscription** and log in as normal with your Anthropic account.
  > **💡 Note:** If you encounter issues, try logging out with `claude /logout` and logging in
  > again.

Your requests will now be routed through Vercel AI Gateway using your Claude Code Max subscription. You'll be able to monitor usage and view traces in your Vercel dashboard while using your Anthropic subscription for model access.

## With the Claude Agent SDK

The [Claude Agent SDK](https://docs.anthropic.com/en/docs/agent-sdk/overview) (`@anthropic-ai/claude-agent-sdk`) lets you build AI agents that use the same tools and agentic loop that power Claude Code. You can route Agent SDK requests through AI Gateway by setting environment variables in the `env` option:

```ts filename="agent.ts"
import { query } from '@anthropic-ai/claude-agent-sdk';

for await (const message of query({
  prompt: 'Find and fix the bug in auth.py',
  options: {
    model: 'anthropic/claude-sonnet-4.5',
    allowedTools: ['Read', 'Edit', 'Bash'],
    env: {
      ...process.env,
      ANTHROPIC_BASE_URL: 'https://ai-gateway.vercel.sh',
      ANTHROPIC_AUTH_TOKEN: 'your-ai-gateway-api-key',
      ANTHROPIC_API_KEY: '',
    },
  },
})) {
  if ('result' in message) console.log(message.result);
}
```

The Agent SDK spawns Claude Code as a subprocess, so the same environment variables apply. All requests, including messages and token counting, route through AI Gateway.

title: "Cline"
description: "Use Cline with the AI Gateway."
last\_updated: "2026-03-23T09:40:03.129Z"
source: "https://vercel.com/docs/agent-resources/coding-agents/cline"
