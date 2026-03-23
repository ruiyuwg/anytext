# Application structure

Source: https://docs.langchain.com/langsmith/application-structure

To deploy on LangSmith, an application must consist of one or more graphs, a configuration file (`langgraph.json`), a file that specifies dependencies, and an optional `.env` file that specifies environment variables.

This page explains how a LangSmith application is organized and how to provide the configuration details required for deployment.

## Key concepts

To deploy using LangSmith, provide the following information:

1. A [configuration file](#configuration-file-concepts) (`langgraph.json`) that specifies the dependencies, graphs, and environment variables to use for the application.
2. The [graphs](#graphs) that implement the logic of the application.
3. A file that specifies [dependencies](#dependencies) required to run the application.
4. [Environment variables](#environment-variables) that are required for the application to run.

**Framework agnostic**

LangSmith Deployment supports deploying a [LangGraph](/oss/python/langgraph/overview) *graph*. However, the implementation of a *node* of a graph can contain arbitrary code. This means any framework can be implemented within a node and deployed on LangSmith Deployment. This lets you implement your core application logic without using additional LangGraph OSS APIs while still using LangSmith for [deployment](/langsmith/deployment), scaling, and [observability](/langsmith/observability). For more details, refer to [Use any framework with LangSmith Deployment](/langsmith/application-structure#use-any-framework-with-langsmith-deployment).

## File structure

The following are examples of directory structures for Python and JavaScript applications:

````
```plaintext theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
my-app/
├── my_agent # all project code lies within here
│   ├── utils # utilities for your graph
│   │   ├── __init__.py
│   │   ├── tools.py # tools for your graph
│   │   ├── nodes.py # node functions for your graph
│   │   └── state.py # state definition of your graph
│   ├── __init__.py
│   └── agent.py # code for constructing your graph
├── .env # environment variables
├── requirements.txt # package dependencies
└── langgraph.json # configuration file for LangGraph
```



```plaintext theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
my-app/
├── my_agent # all project code lies within here
│   ├── utils # utilities for your graph
│   │   ├── __init__.py
│   │   ├── tools.py # tools for your graph
│   │   ├── nodes.py # node functions for your graph
│   │   └── state.py # state definition of your graph
│   ├── __init__.py
│   └── agent.py # code for constructing your graph
├── .env # environment variables
├── langgraph.json  # configuration file for LangGraph
└── pyproject.toml # dependencies for your project
```



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
````

The directory structure of an application can vary depending on the programming language and the package manager used.

## Configuration file

The `langgraph.json` file is a JSON file that specifies the dependencies, graphs, environment variables, and other settings required to deploy an application.

For details on all supported keys in the JSON file, refer to the [LangGraph configuration file reference](/langsmith/cli#configuration-file).

The [LangGraph CLI](/langsmith/cli) defaults to using the configuration file `langgraph.json` in the current directory.

### Examples

````
* The dependencies involve a custom local package and the `langchain_openai` package.
* A single graph will be loaded from the file `./your_package/your_file.py` with the variable `agent`.
* The environment variables are loaded from the `.env` file.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
    "dependencies": [
        "langchain_openai",
        "./your_package"
    ],
    "graphs": {
        "my_agent": "./your_package/your_file.py:agent"
    },
    "env": "./.env"
}
```



* The dependencies will be loaded from a dependency file in the local directory (e.g., `package.json`).
* A single graph will be loaded from the file `./your_package/your_file.js` with the function `agent`.
* The environment variable `OPENAI_API_KEY` is set inline.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
    "dependencies": [
        "."
    ],
    "graphs": {
        "my_agent": "./your_package/your_file.js:agent"
    },
    "env": {
        "OPENAI_API_KEY": "secret-key"
    }
}
```
````

## Dependencies

An application may depend on other Python packages or JavaScript libraries (depending on the programming language in which the application is written).

You will generally need to specify the following information for dependencies to be set up correctly:

1. A file in the directory that specifies the dependencies (e.g., `requirements.txt`, `pyproject.toml`, or `package.json`).
2. A `dependencies` key in the [configuration file](#configuration-file-concepts) that specifies the dependencies required to run the application.
3. Any additional binaries or system libraries can be specified using `dockerfile_lines` key in the [LangGraph configuration file](#configuration-file-concepts).

## Graphs

Use the `graphs` key in the [configuration file](#configuration-file-concepts) to specify which graphs will be available in the deployed application.

You can specify one or more graphs in the configuration file. Each graph is identified by a unique name and a path to either (1) a compiled graph or (2) a function that defines a graph.

### Use any framework with LangSmith Deployment

While LangSmith Deployment requires applications to be structured as a LangGraph graph, individual nodes within that graph can contain arbitrary code. This means you can use any framework or library within your nodes while still benefiting from LangSmith's deployment infrastructure.

The graph structure serves as a deployment interface, but your core application logic can use whichever tools and frameworks best suit your needs.

To deploy with LangSmith, you need:

````
1. **A LangGraph graph structure**: Define a graph using [`StateGraph`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph) with [`add_node`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_node) and [`add_edge`](https://reference.langchain.com/python/langgraph/pregel/_draw/add_edge).
2. **Node functions with arbitrary logic**: Your node functions can call any framework or library.
3. **A compiled graph**: [Compile](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/compile) the graph to create a deployable application.

The following example shows how to wrap your existing application logic within a minimal LangGraph structure:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import StateGraph, START, END
from typing import TypedDict

# Your existing application logic using any framework
from app_logic import process_data
from app_logic import fetch_data

class State(TypedDict):
    input: str
    result: str

def my_app_node(state: State) -> State:
    """Node containing arbitrary framework code."""
    # Use any framework or library here
    raw_data = fetch_data(state["input"])
    processed = process_data(raw_data)
    return {"result": processed}

# Define the graph structure
graph = StateGraph(State)
graph.add_node("process", my_app_node)  # Add node with your logic
graph.add_edge(START, "process")  # Connect start to your node
graph.add_edge("process", END)  # Connect your node to end

# Compile for deployment
app = graph.compile()
```



1. **A LangGraph graph structure**: Define a graph using [`StateGraph`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html) with [`addNode`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#addnode) and [`addEdge`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#addedge).
2. **Node functions with arbitrary logic**: Your node functions can call any framework or library.
3. **A compiled graph**: [Compile](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#compile) the graph to create a deployable application.

The following example shows how to wrap your existing application logic within a minimal LangGraph structure:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, START, END } from "@langchain/langgraph";
import { Annotation } from "@langchain/langgraph";

// Your existing application logic using any framework
import { processData } from "./app-logic";
import { fetchData } from "./app-logic";

const State = Annotation.Root({
  input: Annotation,
  result: Annotation
});

async function myAppNode(state: typeof State.State) {
  // Use any framework or library here
  const rawData = await fetchData(state.input);
  const processed = await processData(rawData);
  return { result: processed };
}

// Define the graph structure
const graph = new StateGraph(State)
  .addNode("process", myAppNode)  // Add node with your logic
  .addEdge(START, "process")  // Connect start to your node
  .addEdge("process", END);  // Connect your node to end

// Compile for deployment
export const app = graph.compile();
```
````

In this example, the node functions (`my_app_node` for Python and `myAppNode` for JavaScript) can contain calls to any framework or library. The LangGraph structure simply provides the deployment interface and orchestration layer.

## Environment variables

If you're working with a deployed LangGraph application [locally](/langsmith/local-dev-testing), you can configure environment variables in the `env` key of the [configuration file](#configuration-file-concepts).

For a production deployment, you will typically want to configure the environment variables in the deployment environment.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/application-structure.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
