# Application structure

Source: https://docs.langchain.com/oss/javascript/langgraph/application-structure

A LangGraph application consists of one or more graphs, a configuration file (`langgraph.json`), a file that specifies dependencies, and an optional `.env` file that specifies environment variables.

This guide shows a typical structure of an application and shows you how to provide the required configuration to deploy an application with [LangSmith Deployment](/langsmith/deployments).

LangSmith Deployment is a managed hosting platform for deploying and scaling LangGraph agents. It handles the infrastructure, scaling, and operational concerns so you can deploy your stateful, long-running agents directly from your repository. Learn more in the [Deployment documentation](/langsmith/deployments).

## Key concepts

To deploy using the LangSmith, the following information should be provided:

1. A [LangGraph configuration file](#configuration-file-concepts) (`langgraph.json`) that specifies the dependencies, graphs, and environment variables to use for the application.
2. The [graphs](#graphs) that implement the logic of the application.
3. A file that specifies [dependencies](#dependencies) required to run the application.
4. [Environment variables](#environment-variables) that are required for the application to run.

## File structure

Below are examples of directory structures for applications:

```plaintext theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
my-app/
├── src # all project code lies within here
│   ├── utils # optional utilities for your graph
│   │   ├── tools.ts # tools for your graph
│   │   ├── nodes.ts # node functions for your graph
│   │   └── state.ts # state definition of your graph
│   └── agent.ts # code for constructing your graph
├── package.json # package dependencies
├── .env # environment variables
└── langgraph.json # configuration file for LangGraph
```

The directory structure of a LangGraph application can vary depending on the programming language and the package manager used.

## Configuration file

The `langgraph.json` file is a JSON file that specifies the dependencies, graphs, environment variables, and other settings required to deploy a LangGraph application.

See the [LangGraph configuration file reference](/langsmith/cli#configuration-file) for details on all supported keys in the JSON file.

The [LangGraph CLI](/langsmith/cli) defaults to using the configuration file `langgraph.json` in the current directory.

### Examples

- The dependencies will be loaded from a dependency file in the local directory (e.g., `package.json`).
- A single graph will be loaded from the file `./your_package/your_file.js` with the function `agent`.
- The environment variable `OPENAI_API_KEY` is set inline.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
    "my_agent": "./your_package/your_file.js:agent"
  },
  "env": {
    "OPENAI_API_KEY": "secret-key"
  }
}
```

## Dependencies

A LangGraph application may depend on other TypeScript/JavaScript libraries.

You will generally need to specify the following information for dependencies to be set up correctly:

1. A file in the directory that specifies the dependencies (e.g. `package.json`).

2. A `dependencies` key in the [LangGraph configuration file](#configuration-file-concepts) that specifies the dependencies required to run the LangGraph application.

3. Any additional binaries or system libraries can be specified using `dockerfile_lines` key in the [LangGraph configuration file](#configuration-file-concepts).

## Graphs

Use the `graphs` key in the [LangGraph configuration file](#configuration-file-concepts) to specify which graphs will be available in the deployed LangGraph application.

You can specify one or more graphs in the configuration file. Each graph is identified by a name (which should be unique) and a path for either: (1) the compiled graph or (2) a function that makes a graph is defined.

## Environment variables

If you're working with a deployed LangGraph application locally, you can configure environment variables in the `env` key of the [LangGraph configuration file](#configuration-file-concepts).

For a production deployment, you will typically want to configure the environment variables in the deployment environment.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/application-structure.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
