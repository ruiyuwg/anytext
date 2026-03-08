# LangSmith Deployment

Source: https://docs.langchain.com/oss/javascript/langgraph/deploy

This guide shows you how to deploy your agent to **[LangSmith Cloud](/langsmith/deploy-to-cloud)**, a fully managed hosting platform designed for agent workloads. With Cloud deployment, you can deploy directly from your GitHub repository—LangSmith handles the infrastructure, scaling, and operational concerns.

Traditional hosting platforms are built for stateless, short-lived web applications. LangSmith Cloud is **purpose-built for stateful, long-running agents** that require persistent state and background execution.

LangSmith offers multiple deployment options beyond Cloud, including deploying with a [control plane (hybrid/self-hosted)](/langsmith/deploy-with-control-plane) or as [standalone servers](/langsmith/deploy-standalone-server). For more information, refer to the [Deployment overview](/langsmith/deployments).

## Prerequisites

Before you begin, ensure you have the following:

- A [GitHub account](https://github.com/)
- A [LangSmith account](https://smith.langchain.com/) (free to sign up)

## Deploy your agent

### 1. Create a repository on GitHub

Your application's code must reside in a GitHub repository to be deployed on LangSmith. Both public and private repositories are supported. For this quickstart, first make sure your app is LangGraph-compatible by following the [local server setup guide](/oss/javascript/langgraph/studio#setup-local-agent-server). Then, push your code to the repository.

### 2. Deploy to LangSmith

```
Log in to [LangSmith](https://smith.langchain.com/). In the left sidebar, select **Deployments**.



Click the **+ New Deployment** button. A pane will open where you can fill in the required fields.



If you are a first time user or adding a private repository that has not been previously connected, click the **Add new account** button and follow the instructions to connect your GitHub account.



Select your application's repository. Click **Submit** to deploy. This may take about 15 minutes to complete. You can check the status in the **Deployment details** view.
```

### 3. Test your application in Studio

Once your application is deployed:

1. Select the deployment you just created to view more details.
2. Click the **Studio** button in the top right corner. Studio will open to display your graph.

### 4. Get the API URL for your deployment

1. In the **Deployment details** view in LangGraph, click the **API URL** to copy it to your clipboard.
2. Click the `URL` to copy it to the clipboard.

### 5. Test the API

You can now test the API:

````
1. Install LangGraph SDK:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/langgraph-sdk
```

2. Send a message to the agent:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Client } from "@langchain/langgraph-sdk";

const client = new Client({ apiUrl: "your-deployment-url", apiKey: "your-langsmith-api-key" });

const streamResponse = client.runs.stream(
  null,    // Threadless run
  "agent", // Name of agent. Defined in langgraph.json.
  {
    input: {
      "messages": [
        { "role": "user", "content": "What is LangGraph?"}
      ]
    },
    streamMode: "messages",
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
    --url <DEPLOYMENT_URL>/runs/stream \
    --header 'Content-Type: application/json' \
    --header "X-Api-Key:  \
    --data "{
        \"assistant_id\": \"agent\", `# Name of agent. Defined in langgraph.json.`
        \"input\": {
            \"messages\": [
                {
                    \"role\": \"human\",
                    \"content\": \"What is LangGraph?\"
                }
            ]
        },
        \"stream_mode\": \"updates\"
    }"
```
````

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/deploy.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
