# Run a local server

Source: https://docs.langchain.com/oss/javascript/langgraph/local-server

This guide shows you how to run a LangGraph application locally.

## Prerequisites

Before you begin, ensure you have the following:

- An API key for [LangSmith](https://smith.langchain.com/settings) - free to sign up

## 1. Install the LangGraph CLI

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install --save-dev @langchain/langgraph-cli
```

## 2. Create a LangGraph app

Create a new app from the [`new-langgraph-project-js` template](https://github.com/langchain-ai/new-langgraphjs-project). This template demonstrates a single-node application you can extend with your own logic.

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm create langgraph
```

If you have an existing project with LangGraph agents, you can automatically generate a `langgraph.json` configuration file using the `config` command:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm create langgraph config
```

This command scans your project for LangGraph agents (such as `createAgent()`, `StateGraph.compile()`, or `workflow.compile()` patterns) and generates a configuration file with all exported agents.

Example output:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "node_version": "24",
  "graphs": {
    "agent": "./src/agent.ts:agent",
    "searchAgent": "./src/search.ts:searchAgent"
  },
  "env": ".env"
}
```

```
Only **exported** agents are included in the configuration. If an agent is not exported, the command will warn you so you can add the `export` keyword.
```

## 3. Install dependencies

In the root of your new LangGraph app, install the dependencies in `edit` mode so your local changes are used by the server:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
cd path/to/your/app
npm install
```

## 4. Create a `.env` file

You will find a `.env.example` in the root of your new LangGraph app. Create a `.env` file in the root of your new LangGraph app and copy the contents of the `.env.example` file into it, filling in the necessary API keys:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LANGSMITH_API_KEY=lsv2...
```

## 5. Launch Agent server

Start the LangGraph API server locally:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx @langchain/langgraph-cli dev
```

Sample output:

```
INFO:langgraph_api.cli:

        Welcome to

╦  ┌─┐┌┐┌┌─┐╔═╗┬─┐┌─┐┌─┐┬ ┬
║  ├─┤││││ ┬║ ╦├┬┘├─┤├─┘├─┤
╩═╝┴ ┴┘└┘└─┘╚═╝┴└─┴ ┴┴  ┴ ┴

- 🚀 API: http://127.0.0.1:2024
- 🎨 Studio UI: https://smith.langchain.com/studio/?baseUrl=http://127.0.0.1:2024
- 📚 API Docs: http://127.0.0.1:2024/docs

This in-memory server is designed for development and testing.
For production use, please use LangSmith Deployment.
```

The `langgraph dev` command starts Agent Server in an in-memory mode. This mode is suitable for development and testing purposes. For production use, deploy Agent Server with access to a persistent storage backend. For more information, see the [Platform setup overview](/langsmith/platform-setup).

## 6. Test your application in Studio

[Studio](/langsmith/studio) is a specialized UI that you can connect to LangGraph API server to visualize, interact with, and debug your application locally. Test your graph in Studio by visiting the URL provided in the output of the `langgraph dev` command:

```
>    - LangGraph Studio Web UI: https://smith.langchain.com/studio/?baseUrl=http://127.0.0.1:2024
```

For an Agent Server running on a custom host/port, update the `baseUrl` query parameter in the URL. For example, if your server is running on `http://myhost:3000`:

```
https://smith.langchain.com/studio/?baseUrl=http://myhost:3000
```

Use the `--tunnel` flag with your command to create a secure tunnel, as Safari has limitations when connecting to localhost servers:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph dev --tunnel
```

## 7. Test the API

````
1. Install the LangGraph JS SDK:
   ```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   npm install @langchain/langgraph-sdk
   ```
2. Send a message to the assistant (threadless run):

```js theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Client } from "@langchain/langgraph-sdk";

// only set the apiUrl if you changed the default port when calling langgraph dev
const client = new Client({ apiUrl: "http://localhost:2024"});

const streamResponse = client.runs.stream(
  null, // Threadless run
  "agent", // Assistant ID
  {
    input: {
      "messages": [
        { "role": "user", "content": "What is LangGraph?"}
      ]
    },
    streamMode: "messages-tuple",
  }
);

for await (const chunk of streamResponse) {
  console.log(`Receiving new event of type: ${chunk.event}...`);
  console.log(JSON.stringify(chunk.data));
  console.log("\n\n");
}
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
curl -s --request POST \
    --url "http://localhost:2024/runs/stream" \
    --header 'Content-Type: application/json' \
    --data "{
        \"assistant_id\": \"agent\",
        \"input\": {
            \"messages\": [
                {
                    \"role\": \"human\",
                    \"content\": \"What is LangGraph?\"
                }
            ]
        },
        \"stream_mode\": \"messages-tuple\"
    }"
```
````

## Next steps

Now that you have a LangGraph app running locally, take your journey further by exploring deployment and advanced features:

- [Deployment quickstart](/langsmith/deployment-quickstart): Deploy your LangGraph app using LangSmith.

- [LangSmith](/langsmith/home): Learn about foundational LangSmith concepts.

- [SDK Reference](https://reference.langchain.com/javascript/modules/_langchain_langgraph-sdk.html): Explore the SDK API Reference.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/local-server.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
