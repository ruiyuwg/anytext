# Set up LangSmith

Source: https://docs.langchain.com/langsmith/platform-setup

This section covers how to host and manage LangSmith infrastructure. You can set up LangSmith for [observability](/langsmith/observability), [evaluation](/langsmith/evaluation), and [prompt engineering](/langsmith/prompt-engineering), or use the full platform experience with [LangSmith Deployment](/langsmith/deployments) to also deploy and manage your applications through the UI.

**Start here if you're setting up or maintaining LangSmith infrastructure.**

If you want to deploy an agent application, the [Deployment section](/langsmith/deployments) covers application structure and deployment configuration.

## Choose how to set up LangSmith

You can deploy LangSmith in one of three modes:

- [**Cloud**](/langsmith/cloud): fully managed by LangChain
- [**Hybrid**](/langsmith/hybrid): LangChain manages the control plane; you host the data plane
- [**Self-hosted**](/langsmith/self-hosted): you manage the full stack within your infrastructure

  Fully managed observability, evaluation, prompt engineering, and application deployment. Deploy from GitHub with automated CI/CD.

  **(Enterprise)** Observability, evaluation, prompt engineering, and application deployment with your applications running in your infrastructure.

  **(Enterprise)** Full control with observability, evaluation, and prompt engineering. Enable the full platform experience with LangSmith Deployment or run standalone servers.

### Comparison

Refer to the following table for a comparison:

| Feature                                        | **Cloud**                           | **Hybrid**                                                        | **Self-Hosted**                           |
| ---------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| **Infrastructure location**                    | LangChain's cloud                   | Split: Control plane in LangChain cloud, data plane in your cloud | Your cloud                                |
| **Who manages updates**                        | LangChain                           | LangChain (control plane), You (data plane)                       | You                                       |
| **Who manages CI/CD for your apps**            | LangChain                           | You                                                               | You                                       |
| **Can deploy applications?**                   | ✅ Yes                               | ✅ Yes                                                             | ✅ Yes (with LangSmith Deployment enabled) |
| **Observability data location**                | LangChain cloud                     | LangChain cloud                                                   | Your cloud                                |
| **[Pricing](https://www.langchain.com/plans)** | Plus tier                           | Enterprise                                                        | Enterprise                                |
| **Best for**                                   | Quick setup, managed infrastructure | Data residency requirements + managed control plane               | Full control, data isolation              |

You can [run an Agent Server locally for free](/langsmith/local-server) for testing and development.

### Related

- [Plans](https://langchain.com/pricing)
- [Pricing](https://www.langchain.com/plans)
- [Observability](/langsmith/observability)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/platform-setup.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
