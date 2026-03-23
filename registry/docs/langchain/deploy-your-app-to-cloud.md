# Deploy your app to cloud

Source: https://docs.langchain.com/langsmith/deployment-quickstart

Deploy your first application to LangSmith Cloud using the LangGraph CLI.

This quickstart shows you how to deploy an application to LangSmith Cloud using the [`langgraph deploy`](/langsmith/cli#deploy) command.

For a comprehensive Cloud deployment guide including GitHub-based deployments and all configuration options, refer to the [Cloud deployment setup guide](/langsmith/deploy-to-cloud).

The `langgraph deploy` command is in **beta**.

## Prerequisites

Before you begin, ensure you have:

- A [LangSmith account](https://smith.langchain.com/) on the [Plus plan or above](https://www.langchain.com/pricing) and an [API key](/langsmith/create-account-api-key).
- [Docker](https://docs.docker.com/get-docker/) installed and running. Verify with `docker ps`.
- On Apple Silicon (M1/M2/M3): [Docker Buildx](https://docs.docker.com/build/install-buildx/) for cross-compiling to `linux/amd64`.
- The [LangGraph CLI](/langsmith/cli):

  ```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv tool install langgraph-cli
  ```

## 1. Create a LangGraph app

Create a new app from the [`new-langgraph-project-python` template](https://github.com/langchain-ai/new-langgraph-project):

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph new path/to/your/app --template new-langgraph-project-python
cd path/to/your/app
```

Run `langgraph new` without `--template` for an interactive menu of available templates.

## 2. Set your API key

Add your LangSmith API key to a `.env` file in your project root:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LANGSMITH_API_KEY=lsv2_...
```

The `langgraph deploy` command reads this automatically. Alternatively, pass it inline:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
LANGSMITH_API_KEY=lsv2_... langgraph deploy
```

## 3. Deploy

Run the deploy command from your project directory:

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph deploy
```

This creates a `dev` deployment named after your project directory by default. Use `--name` or `--deployment-type prod` to override.

To update an existing deployment after making code changes, re-run `langgraph deploy`. It finds the existing deployment by name and updates it in place.

You can also use `langgraph deploy list` to see all deployments, `langgraph deploy logs` to tail runtime logs, and `langgraph deploy delete <ID>` to remove a deployment. For details, refer to the [CLI reference](/langsmith/cli#deploy).

## 4. Test in Studio

[Studio](/langsmith/studio) is an interactive agent IDE connected directly to your deployment. Use it to send messages, inspect intermediate state at each node, edit state mid-run, and replay from any prior checkpoint without writing code.

Once the deployment is ready:

1. Go to [LangSmith](https://smith.langchain.com/) and select **Deployments** in the left sidebar.
2. Select your deployment to view its details.
3. Click **Studio** in the top right corner to open [Studio](/langsmith/studio).

## 5. Test the API

Copy the **API URL** from the deployment details view, then use it to call your application:

````
1. Install the LangGraph Python SDK:
   ```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   pip install langgraph-sdk
   ```
2. Send a message to the assistant (stateless run):
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



1. Install the LangGraph JS SDK:
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
    --header "X-Api-Key: " \
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

```
Deploy the same graph with different models, prompts, or tools per assistant.



Persist state across multiple runs so your agent remembers context between interactions.



Kick off background runs for long-running jobs and stream results back to your client.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/deployment-quickstart.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
