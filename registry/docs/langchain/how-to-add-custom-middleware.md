# How to add custom middleware

Source: https://docs.langchain.com/langsmith/custom-middleware

When deploying agents to LangSmith, you can add custom middleware to your server to handle concerns like logging request metrics, injecting or checking headers, and enforcing security policies without modifying core server logic. This works the same way as [adding custom routes](/langsmith/custom-routes). You just need to provide your own [`Starlette`](https://www.starlette.io/applications/) app (including [`FastAPI`](https://fastapi.tiangolo.com/), [`FastHTML`](https://fastht.ml/) and other compatible apps).

Adding middleware lets you intercept and modify requests and responses globally across your deployment, whether they're hitting your custom endpoints or the built-in LangSmith APIs.

Below is an example using FastAPI.

"Python only"
We currently only support custom middleware in Python deployments with `langgraph-api>=0.0.26`.

## Create app

Starting from an **existing** LangSmith application, add the following middleware code to your `webapp.py` file. If you are starting from scratch, you can create a new app from a template using the CLI.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph new --template=new-langgraph-project-python my_new_project
```

Once you have a LangGraph project, add the following app code:

```python {highlight={5}} theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# ./src/agent/webapp.py
from fastapi import FastAPI, Request
from starlette.middleware.base import BaseHTTPMiddleware

app = FastAPI()

class CustomHeaderMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        response.headers['X-Custom-Header'] = 'Hello from middleware!'
        return response

# Add the middleware to the app
app.add_middleware(CustomHeaderMiddleware)
```

## Configure `langgraph.json`

Add the following to your `langgraph.json` configuration file. Make sure the path points to the `webapp.py` file you created above.

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
    "agent": "./src/agent/graph.py:graph"
  },
  "env": ".env",
  "http": {
    "app": "./src/agent/webapp.py:app"
  }
  // Other configuration options like auth, store, etc.
}
```

### Customize middleware ordering

By default, custom middleware runs before authentication logic. To run custom middleware *after* authentication, set `middleware_order` to `auth_first` in your `http` configuration. (This customization is supported starting with API server v0.4.35 and later.)

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "dependencies": ["."],
  "graphs": {
    "agent": "./src/agent/graph.py:graph"
  },
  "env": ".env",
  "http": {
    "app": "./src/agent/webapp.py:app",
    "middleware_order": "auth_first"
  },
  "auth": {
    "path": "./auth.py:my_auth"
  }
}
```

## Start server

Test the server out locally:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langgraph dev --no-browser
```

Now any request to your server will include the custom header `X-Custom-Header` in its response.

## Deploying

You can deploy this app as-is to cloud or to your self-hosted platform.

## Next steps

Now that you've added custom middleware to your deployment, you can use similar techniques to add [custom routes](/langsmith/custom-routes) or define [custom lifespan events](/langsmith/custom-lifespan) to further customize your server's behavior.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/custom-middleware.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Connect to an OpenAI compliant model provider/proxy

Source: https://docs.langchain.com/langsmith/custom-openai-compliant-model

The LangSmith playground allows you to use any model that is compliant with the OpenAI API. You can utilize your model by setting the Proxy Provider for  in the playground.

## Deploy an OpenAI compliant model

Many providers offer OpenAI compliant models or proxy services. Some examples of this include:

- [LiteLLM Proxy](https://github.com/BerriAI/litellm?tab=readme-ov-file#quick-start-proxy---cli)
- [Ollama](https://ollama.com/)

You can use these providers to deploy your model and get an API endpoint that is compliant with the OpenAI API.

Take a look at the full [specification](https://platform.openai.com/docs/api-reference/chat) for more information.

## Use the model in the LangSmith Playground

Once you have deployed a model server, you can use it in the LangSmith [Playground](/langsmith/prompt-engineering-concepts#prompt-playground).

To access the **Prompt Settings** menu:

1. Under the **Prompts** heading select the gear  icon next to the model name.
2. In the **Model Configuration** tab, select the model to edit in the dropdown.
3. For the **Provider** dropdown, select **OpenAI Compatible Endpoint**.
4. Add your OpenAI Compatible Endpoint to the **Base URL** input.

If everything is set up correctly, you should see the model's response in the playground. You can also use this functionality to invoke downstream pipelines.

For information on how to store your model configuration , refer to [Configure prompt settings](/langsmith/managing-model-configurations).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/custom-openai-compliant-model.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
