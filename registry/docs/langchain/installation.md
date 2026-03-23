## Installation

1. Ensure Docker is installed (e.g., `docker --version`).

2. Install the CLI:

   ```bash [Python (pip)] theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   pip install langgraph-cli
   ```

   ```bash JavaScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   # Use latest on demand
   npx @langchain/langgraph-cli

   # Or install globally (available as `langgraphjs`)
   npm install -g @langchain/langgraph-cli
   ```

3. Verify the install

   ```bash [Python (pip)] theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   langgraph --help
   ```

   ```bash JavaScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   npx @langchain/langgraph-cli --help
   ```

### Quick commands

| Command                               | What it does                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`langgraph dev`](#dev)               | Starts a lightweight local dev server (no Docker required), ideal for rapid testing.                                                 |
| [`langgraph build`](#build)           | Builds a Docker image of your LangGraph API server for deployment.                                                                   |
| [`langgraph deploy`](#deploy)         | Builds and deploys a LangGraph image directly to LangSmith Deployments in a single step.                                             |
| [`langgraph dockerfile`](#dockerfile) | Emits a Dockerfile derived from your config for custom builds.                                                                       |
| [`langgraph up`](#up)                 | Starts the LangGraph API server locally in Docker. Requires Docker running; LangSmith API key for local dev; license for production. |

For JS, use `npx @langchain/langgraph-cli <command>` (or `langgraphjs` if installed globally).
