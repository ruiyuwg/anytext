# Enable Insights

Source: https://docs.langchain.com/langsmith/insights-self-hosted

[Insights](/langsmith/insights) provides AI-powered analysis of your traces and application data within LangSmith. This page explains how to enable Insights on a [self-hosted LangSmith instance](/langsmith/self-hosted).

Self-hosted LangSmith is an add-on to the Enterprise plan. For more details, refer to [Pricing](https://www.langchain.com/pricing). [Contact our sales team](https://www.langchain.com/contact-sales) if you want to get a license key to trial LangSmith in your environment.

## Prerequisites

Before enabling Insights, you must complete the following setup steps:

1. Install the base LangSmith platform:
   - [Install on Kubernetes](/langsmith/kubernetes).
   - [Install on Docker](/langsmith/docker).
2. [Enable LangSmith Deployment](/langsmith/deploy-self-hosted-full-platform) (agent deployment capabilities).

## Components

Insights consists of two main components:

- `agentBootstrap`: Job that deploys the LangSmith Deployment (agent) needed for Insights.
- `insightsAgent`: The main agent that will handle insights generation.

## Enable Insights

To enable Insights, add the following to your `values.yaml`:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
backend:
  agentBootstrap:
    enabled: true

config:
  insights:
    enabled: true
    encryptionKey: "<your-encryption-key>"
```

### Generate an encryption key

Insights requires a Fernet encryption key to securely store secrets. Generate one using Python:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
python -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())"
```

You can store the encryption key in a predefined Kubernetes secret using the `insights_encryption_key` parameter. See [Use an existing secret](/langsmith/self-host-using-an-existing-secret#parameters) for details.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/insights-self-hosted.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Integrations

Source: https://docs.langchain.com/langsmith/integrations

[LangSmith](https://smith.langchain.com/) provides integrations with for a growing set of popular [LLM providers](#llm-providers) and [agent frameworks](#agent-frameworks) as well as [Deep Agents](/oss/python/deepagents/overview), [LangChain](/oss/python/langchain/overview), and [LangGraph](/oss/python/langgraph/overview). For setup and usage, refer to the guides listed on this page.

## LLM providers

```
Amazon Bedrock







Anthropic







DeepSeek







Google Gemini





LangChain







Mistral







OpenAI
```

**Using Langchain?** LangChain provides a unified interface to 100+ LLM providers, which allows you to switch between models by setting environment variables. [Initialize a model](/oss/python/langchain/models#initialize-a-model) and LangSmith will automatically trace your application.

## Agent frameworks

```
AutoGen







Claude Agent SDK







CrewAI





Deep Agents







Google ADK





LangGraph







Mastra







Microsoft Agent Framework







OpenAI Agents







OpenTelemetry







PydanticAI







Semantic Kernel







Vercel AI SDK
```

## Voice AI frameworks

```
Livekit







Pipecat
```

## Developer tools

```
Claude Code







Instructor







Temporal
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/integrations.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
