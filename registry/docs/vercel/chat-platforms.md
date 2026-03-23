# Chat Platforms

AI chat platforms provide conversational interfaces for interacting with AI models. Route these platforms through AI Gateway to access hundreds of models, track spend across all conversations, and monitor usage from a single dashboard.

## Why route chat platforms here?

| Benefit            | Without                              | With                            |
| ------------------ | ------------------------------------ | ------------------------------- |
| **Spend tracking** | Separate dashboards per provider     | Single unified view             |
| **Model access**   | Limited to platform defaults         | 200+ models from all providers  |
| **Billing**        | Multiple invoices, multiple accounts | One Vercel invoice              |
| **Observability**  | Limited or no visibility             | Full request traces and metrics |

## Supported platforms

### LibreChat

[LibreChat](https://librechat.ai) is an open-source, self-hosted AI chat platform. Configure it through the `librechat.yaml` file:

```yaml filename="librechat.yaml"
endpoints:
  custom:
    - name: "Vercel"
      apiKey: "${AI_GATEWAY_API_KEY}"
      baseURL: "https://ai-gateway.vercel.sh/v1"
      models:
        fetch: true
```

Add your API key to `.env` and LibreChat will automatically fetch all available models.

See the [LibreChat documentation](/docs/ai-gateway/chat-platforms/librechat) for Docker setup.

### OpenClaw (Clawdbot)

[OpenClaw (Clawdbot)](https://openclaw.ai) is a personal AI assistant that runs on your computer and connects to messaging platforms. It features a skills platform, browser control, and multi-agent support. Configure it through the onboarding wizard:

```bash
openclaw onboard --install-daemon
# Select "Vercel AI Gateway" as your provider and enter your API key
```

See the [OpenClaw (Clawdbot) documentation](/docs/ai-gateway/chat-platforms/openclaw) for installation and capabilities.

### Open WebUI

[Open WebUI](https://openwebui.com) is a self-hosted web interface for interacting with LLMs, supporting multiple users and collaborative workspaces. Integration with AI Gateway uses a custom function that routes requests through the gateway.

You can install the function through the one-click installer or manually configure it. Once set up, all your models from AI Gateway become available in the Open WebUI interface.

See the [Open WebUI documentation](/docs/ai-gateway/chat-platforms/open-webui) for installation and function setup.

### Chatbox

[Chatbox](https://chatboxai.app) is a cross-platform desktop AI assistant for macOS, Windows, and Linux. Add AI Gateway as an OpenAI API compatible provider in **Settings > Model Provider**:

- **API Host**: `https://ai-gateway.vercel.sh/v1`
- **API Key**: your AI Gateway API key

Click **Fetch** to load all available models from AI Gateway.

See the [Chatbox documentation](/docs/ai-gateway/chat-platforms/chatbox) for full setup instructions.

## Getting started

1. **Get an API key**: Create one in the [AI Gateway page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway\&title=AI+Gateway)
2. **Choose your platform**: Pick from LibreChat, OpenClaw (Clawdbot), Open WebUI, or Chatbox
3. **Configure the connection**: Point the platform to `https://ai-gateway.vercel.sh`
4. **Start chatting**: Use the platform as normal - all requests route through the gateway

## Monitoring usage

Once your chat platforms are connected, view usage in the [Observability section in the sidebar](https://vercel.com/dashboard/observability):

- **Spend by platform**: See how much each tool costs
- **Model usage**: Track which models are used most
- **Request traces**: Debug issues with full request/response logs

## Next steps

- [Configure LibreChat](/docs/ai-gateway/chat-platforms/librechat) for self-hosted AI chat
- [Set up OpenClaw (Clawdbot)](/docs/ai-gateway/chat-platforms/openclaw) for messaging platforms
- [Configure Open WebUI](/docs/ai-gateway/chat-platforms/open-webui) for a self-hosted web interface
- [Set up Chatbox](/docs/ai-gateway/chat-platforms/chatbox) for a cross-platform desktop assistant

title: "App Attribution"
description: "Attribute your requests so Vercel can identify and feature your app on AI Gateway pages"
last\_updated: "2026-03-23T09:40:04.280Z"
source: "https://vercel.com/docs/ai-gateway/ecosystem/app-attribution"
