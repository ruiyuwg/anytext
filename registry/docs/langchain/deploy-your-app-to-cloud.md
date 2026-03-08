# Deploy your app to Cloud

Source: https://docs.langchain.com/langsmith/deployment-quickstart

This is a quickstart guide for deploying your first application to LangSmith Cloud.

For a comprehensive Cloud deployment guide with all configuration options, refer to the [Cloud deployment setup guide](/langsmith/deploy-to-cloud).

## Prerequisites

Before you begin, ensure you have the following:

- A [GitHub account](https://github.com/)
- A [LangSmith account](https://smith.langchain.com/) (free to sign up)

## 1. Create a repository on GitHub

To deploy an application to **LangSmith**, your application code must reside in a GitHub repository. Both public and private repositories are supported. For this quickstart, use the [`new-langgraph-project` template](https://github.com/langchain-ai/react-agent) for your application:

1. Go to the [`new-langgraph-project` repository](https://github.com/langchain-ai/new-langgraph-project) or [`new-langgraphjs-project` template](https://github.com/langchain-ai/new-langgraphjs-project).
2. Click the `Fork` button in the top right corner to fork the repository to your GitHub account.
3. Click **Create fork**.

## 2. Deploy to LangSmith

1. Log in to [LangSmith](https://smith.langchain.com/).
2. In the left sidebar, select **Deployments**.
3. Click the **+ New Deployment** button. A pane will open where you can fill in the required fields.
4. If you are a first time user or adding a private repository that has not been previously connected, click the **Import from GitHub** button and follow the instructions to connect your GitHub account.
5. Select your New LangGraph Project repository.
6. Click **Submit** to deploy.
   This may take about 15 minutes to complete. You can check the status in the **Deployment details** view.

## 3. Test your application in Studio

Once your application is deployed:

1. Select the deployment you just created to view more details.
2. Click the **Studio** button in the top right corner. [Studio](/langsmith/studio) will open to display your graph.

## 4. Get the API URL for your deployment

1. In the **Deployment details** view, click the **API URL** to copy it to your clipboard.
2. Click the `URL` to copy it to the clipboard.

## 5. Test the API

You can now test the API:

````
1. Install the LangGraph Python SDK:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langgraph-sdk
```

2. Send a message to the assistant (threadless run):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph_sdk import get_client

client = get_client(url="your-deployment-url", api_key="your-langsmith-api-key")

async for chunk in client.runs.stream(
    None,  # Threadless run
    "agent", # Name of assistant. Defined in langgraph.json.
    input={
        "messages": [{
            "role": "human",
            "content": "What is LangGraph?",
        }],
    },
    stream_mode="updates",
):
    print(f"Receiving new event of type: {chunk.event}...")
    print(chunk.data)
    print("\n\n")
```



1. Install the LangGraph Python SDK:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install langgraph-sdk
```

2. Send a message to the assistant (threadless run):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph_sdk import get_sync_client

client = get_sync_client(url="your-deployment-url", api_key="your-langsmith-api-key")

for chunk in client.runs.stream(
    None,  # Threadless run
    "agent", # Name of assistant. Defined in langgraph.json.
    input={
        "messages": [{
            "role": "human",
            "content": "What is LangGraph?",
        }],
    },
    stream_mode="updates",
):
    print(f"Receiving new event of type: {chunk.event}...")
    print(chunk.data)
    print("\n\n")
```



1. Install the LangGraph JS SDK

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/langgraph-sdk
```

2. Send a message to the assistant (threadless run):

```js theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const { Client } = await import("@langchain/langgraph-sdk");

const client = new Client({ apiUrl: "your-deployment-url", apiKey: "your-langsmith-api-key" });

const streamResponse = client.runs.stream(
    null, // Threadless run
    "agent", // Assistant ID
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
        \"assistant_id\": \"agent\",
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

## Next steps

You've successfully deployed your application to LangSmith Cloud. Here are some next steps:

- **Explore Studio**: Use [Studio](/langsmith/studio) to visualize and debug your graph interactively.
- **Monitor your app**: Set up [observability](/langsmith/observability) with traces, dashboards, and alerts.
- **Learn more about Cloud**: See the [complete Cloud setup guide](/langsmith/deploy-to-cloud) for all configuration options.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/deployment-quickstart.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
