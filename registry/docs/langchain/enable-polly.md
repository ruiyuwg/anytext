# Enable Polly

Source: https://docs.langchain.com/langsmith/polly-self-hosted

[Polly](/langsmith/polly) provides an AI assistant embedded in your LangSmith workspace to help you analyze traces, threads, prompts, and experiment results. This page explains how to enable Polly on a [self-hosted LangSmith instance](/langsmith/self-hosted).

Self-hosted LangSmith is an add-on to the Enterprise plan. For more details, refer to [Pricing](https://www.langchain.com/pricing). [Contact our sales team](https://www.langchain.com/contact-sales) if you want to get a license key to trial LangSmith in your environment.

## Prerequisites

Before enabling Polly, complete the following setup steps:

1. Install the base LangSmith platform:
   - [Install on Kubernetes](/langsmith/kubernetes).
   - [Install on Docker](/langsmith/docker).
2. [Enable LangSmith Deployment](/langsmith/deploy-self-hosted-full-platform) (agent deployment capabilities).

## Components

Polly consists of two main components:

- `agentBootstrap`: Job that deploys the [LangSmith Deployment](/langsmith/deployment) (agent) needed for Polly.
- `polly` (agent): The main agent that powers Polly across LangSmith (observability, threads, prompt playground, experiments).

## Enable Polly

Add the following to your `values.yaml`:

```yaml theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
backend:
  agentBootstrap:
    enabled: true

config:
  polly:
    enabled: true
    encryptionKey: "<your-encryption-key>"
```

### Generate an encryption key

Polly requires a Fernet encryption key to securely store secrets. Generate one using Python:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
python -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())"
```

You can store the encryption key in a predefined Kubernetes secret using the `polly_encryption_key` parameter. See [Use an existing secret](/langsmith/self-host-using-an-existing-secret#parameters) for details.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/polly-self-hosted.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
