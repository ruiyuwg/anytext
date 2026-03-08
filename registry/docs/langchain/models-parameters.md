## Parameters

A chat model takes parameters that can be used to configure its behavior. The full set of supported parameters varies by model and provider, but standard ones include:

The name or identifier of the specific model you want to use with a provider. You can also specify both the model and its provider in a single argument using the ':' format, for example, 'openai:o1'.

The key required for authenticating with the model's provider. This is usually issued when you sign up for access to the model. Often accessed by setting an environment variable.

Controls the randomness of the model's output. A higher number makes responses more creative; lower ones make them more deterministic.

Limits the total number of tokens in the response, effectively controlling how long the output can be.

The maximum time (in seconds) to wait for a response from the model before canceling the request.

The maximum number of attempts the system will make to resend a request if it fails due to issues like network timeouts or rate limits. Retries use exponential backoff with jitter. Network errors, rate limits (429), and server errors (5xx) are retried automatically. Client errors such as 401 (unauthorized) or 404 are not retried. For long-running [agent](/oss/python/deepagents/overview) tasks on unreliable networks, consider increasing this to 10–15.

Using [`init_chat_model`](https://reference.langchain.com/python/langchain/chat_models/base/init_chat_model), pass these parameters as inline `**kwargs`:

```python Initialize using model parameters theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
model = init_chat_model(
    "claude-sonnet-4-6",
    # Kwargs passed to the model:
    temperature=0.7,
    timeout=30,
    max_tokens=1000,
    max_retries=6,  # Default; increase for unreliable networks
)
```

Each chat model integration may have additional params used to control provider-specific functionality.

For example, [`ChatOpenAI`](https://reference.langchain.com/python/langchain-openai/chat_models/base/ChatOpenAI) has `use_responses_api` to dictate whether to use the OpenAI Responses or Completions API.

To find all the parameters supported by a given chat model, head to the [chat model integrations](/oss/python/integrations/chat) page.

***
