# LangSmith Deployment

Source: https://docs.langchain.com/langsmith/deployment

Deploy and manage agents with durable execution, real-time streaming, and horizontal scaling.

LangSmith Deployment is a workflow orchestration runtime purpose-built for agent workloads. It provides the managed infrastructure agents need to run reliably in production at scale, supporting the full lifecycle from local development to deployment. LangSmith Deployment is framework-agnostic: you can deploy agents built with LangGraph or [other frameworks](/langsmith/deploy-other-frameworks).

LangSmith Deployment requires a [Plus plan or above](https://www.langchain.com/pricing).

**Get started building in minutes with the [Cloud agent deployment quickstart](/langsmith/deployment-quickstart).**

```
Agent Server's durable execution engine powers the core primitives: **assistants** to manage configurations, **threads** to persist state, and **runs** to execute workloads.



Stream output to users, pause for human review, handle concurrent input, and connect agents via MCP and A2A—all available in Agent Server.



Guided examples to build production-ready agents for your use case.



Authentication, encryption, custom routes, and short- and long-term memory stores.
```

## Agent deployment workflow

**Start here if you're building or operating agent applications.** This section is about deploying **your application**. If you need to set up LangSmith infrastructure, the [Platform setup section](/langsmith/platform-setup) covers infrastructure options.

```
Run your app on a local development server.



Set up dependencies, project structure, and environment config.



Select Cloud, Hybrid, or Self-hosted, then deploy via git push, Docker image, or standalone server.



Track traces, alerts, and dashboards.
```

## Capabilities

### Studio

[Studio](/langsmith/studio) connects to any Agent Server (local or deployed) and gives you an interactive environment for developing and debugging agents. Visualize execution graphs, inspect state at any checkpoint, step through runs, modify state mid-execution, and branch to explore alternative paths.

### Agent composition

Agents don't run in isolation. [RemoteGraph](/langsmith/use-remote-graph) lets any agent call other deployed agents using the same interface you use locally: a research agent delegates to a search agent on a different deployment, a routing agent dispatches to specialized sub-agents. The agents don't need to know whether they're calling something local or remote.

Native support for [MCP](/langsmith/server-mcp) and [A2A](/langsmith/server-a2a) means your deployed agents can expose and consume tool interfaces and agent-to-agent protocols alongside the broader ecosystem.

### Deployment options

- **[Cloud](/langsmith/deploy-to-cloud)**: Fully managed. Push from a git repo or use [`langgraph deploy`](/langsmith/cli#deploy).
- **[Hybrid](/langsmith/deploy-with-control-plane)**: Runs in your cloud, managed by the LangSmith [control plane](/langsmith/control-plane).
- **[Self-hosted](/langsmith/self-hosted)**: Fully self-managed in your own infrastructure.

Same runtime, same APIs. What changes is who manages the infrastructure. For a comparison, refer to [Platform setup](/langsmith/platform-setup).

### Reference & operations

#### Securing and customizing your server

- [Custom auth](/langsmith/auth): Authentication and multi-tenant access control
- [Server customization](/langsmith/custom-routes): Custom routes, [middleware](/langsmith/custom-middleware), [lifespan hooks](/langsmith/custom-lifespan), [encryption](/langsmith/encryption)

#### Operations

- [CI/CD pipelines](/langsmith/cicd-pipeline-example)
- [TTL configuration](/langsmith/configure-ttl) for state and thread management
- [Semantic search](/langsmith/semantic-search)

#### Reference

- [Agent Server](/langsmith/agent-server): Runtime architecture reference

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/deployment.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
