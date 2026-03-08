# Studio troubleshooting

Source: https://docs.langchain.com/langsmith/troubleshooting-studio

## Safari connection issues

Safari blocks plain-HTTP traffic on localhost. When running Studio with `langgraph dev`, you may see "Failed to load assistants" errors.

### Solution 1: Use Cloudflare Tunnel

````
```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langgraph-cli>=0.2.6
langgraph dev --tunnel
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Requires @langchain/langgraph-cli>=0.0.26
npx @langchain/langgraph-cli dev --tunnel
```
````

The command outputs a tunnel URL. To connect Studio:

1. Copy the tunnel URL (e.g., `https://hamilton-praise-heart-costumes.trycloudflare.com`)
2. Open Studio at `https://smith.langchain.com/studio/`
3. Click **Connect to a local server**
4. Paste the tunnel URL and add it to **Allowed Origins**
5. Click **Connect**

This manual step is required for security - Studio requires explicit user confirmation before connecting to external URLs.

Cloudflare tunnels can be unreliable and may intermittently disconnect.

### Solution 2: Use Chromium browser

Chrome and other Chromium browsers allow HTTP on localhost. Use `langgraph dev` without additional configuration.

## Chrome connection issues

Starting with Chrome version 142, you may experience "Failed to initialize Studio" errors with "TypeError: Failed to fetch" when trying to connect [LangSmith Studio](/langsmith/studio) to your local development server via [`langgraph dev`](/langsmith/cli). This occurs even when the API server at `http://127.0.0.1:2024/docs` loads successfully.

**Root Cause:** Chrome 142 fully enforces the Private Network Access (PNA) specification with no fallback, which blocks HTTPS sites (like `https://smith.langchain.com`) from accessing HTTP localhost servers by default.

### Symptoms

- Running `langgraph dev` starts the server successfully.
- Navigating to `http://127.0.0.1:2024/docs` shows the API documentation correctly.
- LangSmith Studio at `https://smith.langchain.com` shows: "Failed to initialize Studio - Please verify if the API server is running or accessible from the browser. TypeError: Failed to fetch".
- Browser console shows errors like: `Permission was denied for this request to access the 'unknown' address space`.

### Solution: Allow local network access in Chrome

1. Open LangSmith Studio at `https://smith.langchain.com` in Chrome.
2. Click the **lock icon** (or site information icon) to the left of the address bar.
3. Look for the **"Local network access"** option in the dropdown.
4. Change the setting from **"Ask (default)"** or **"Block"** to **"Allow"**.
5. Reload the page.

Studio should now connect to your local development server successfully.

### Additional troubleshooting

**Check for browser extension conflicts**

Browser extensions (especially Ollama Chrome extension or AI model extensions) can interfere with localhost connections:

1. Disable all browser extensions temporarily.
2. Restart Chrome.
3. Try connecting to Studio again.
4. If it works, re-enable extensions one by one to identify the culprit.

**Verify dependencies are up to date**

```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U "langgraph-cli[inmem]"
```

**Clear browser cache and site data**

1. In Chrome, go to **Settings** > **Privacy and Security** > **Site Settings**.
2. Find `https://smith.langchain.com` in the list.
3. Click **Clear data**.
4. Restart Chrome and try again.

## Brave connection issues

Brave blocks plain-HTTP traffic on localhost when Brave Shields are enabled. When running Studio with `langgraph dev`, you may see "Failed to load assistants" errors.

### Solution 1: Disable Brave shields

Disable Brave Shields for LangSmith using the Brave icon in the URL bar.

### Solution 2: Use Cloudflare Tunnel

````
```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langgraph-cli>=0.2.6
langgraph dev --tunnel
```



```shell theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Requires @langchain/langgraph-cli>=0.0.26
npx @langchain/langgraph-cli dev --tunnel
```
````

The command outputs a tunnel URL. To connect Studio:

1. Copy the tunnel URL (e.g., `https://hamilton-praise-heart-costumes.trycloudflare.com`)
2. Open Studio at `https://smith.langchain.com/studio/`
3. Click **Connect to a local server**
4. Paste the tunnel URL and add it to **Allowed Origins**
5. Click **Connect**

This manual step is required for security - Studio requires explicit user confirmation before connecting to external URLs.

## Graph edge issues

Undefined conditional edges may show unexpected connections in your graph. This is
because without proper definition, Studio assumes the conditional edge could access all other nodes. To address this, explicitly define the routing paths using one of these methods:

### Solution 1: Path map

Define a mapping between router outputs and target nodes:

````
```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.add_conditional_edges("node_a", routing_function, {True: "node_b", False: "node_c"})
```



```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.addConditionalEdges("node_a", routingFunction, { true: "node_b", false: "node_c" });
```
````

### Solution 2: Router type definition

Specify possible routing destinations using Python's `Literal` type:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def routing_function(state: GraphState) -> Literal["node_b","node_c"]:
    if state['some_condition'] == True:
        return "node_b"
    else:
        return "node_c"
```

## Experiment troubleshooting in Studio

### **Run experiment** button is disabled

Check the following:

- **Deployed application**: If your application is deployed on LangSmith, you may need to create a new revision to enable this feature.
- **Local development server**: If you are running your application locally, make sure you have upgraded to the latest version of the `langgraph-cli` (`pip install -U langgraph-cli`). Additionally, ensure you have tracing enabled by setting the `LANGSMITH_API_KEY` in your project's `.env` file.

### Evaluator results are missing

When you run an experiment, any attached evaluators are scheduled for execution in a queue. If you don't see results immediately, it likely means they are still pending.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/troubleshooting-studio.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Troubleshoot variable caching

Source: https://docs.langchain.com/langsmith/troubleshooting-variable-caching

If you're not seeing traces in your tracing project or notice traces logged to the wrong project/workspace, the issue might be due to LangSmith's default environment variable caching. This is especially common when running LangSmith within a Jupyter notebook. Follow these steps to diagnose and resolve the issue:

## 1. Verify your environment variables

First, check that the environment variables are set correctly by running:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import os
print(os.getenv("LANGSMITH_PROJECT"))
print(os.getenv("LANGSMITH_TRACING"))
print(os.getenv("LANGSMITH_ENDPOINT"))
print(os.getenv("LANGSMITH_API_KEY"))
```

If the output does not match what's defined in your .env file, it's likely due to environment variable caching.

## 2. Clear the cache

Clear the cached environment variables with the following command:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
utils.get_env_var.cache_clear()
```

## 3. Reload the environment variables

Reload your environment variables from the .env file by executing:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from dotenv import load_dotenv
import os
load_dotenv(<path to .env file>, override=True)
```

After reloading, your environment variables should be set correctly.

If you continue to experience issues, please reach out to us via a shared Slack channel or email support (available for Plus and Enterprise plans), or in the [LangChain Forum](https://forum.langchain.com/).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/troubleshooting-variable-caching.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
