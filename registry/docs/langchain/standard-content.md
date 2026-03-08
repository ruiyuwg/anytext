## Standard content

In v1, messages gain provider-agnostic standard content blocks. Access them via [`message.content_blocks`](https://reference.langchain.com/python/langchain_core/language_models/#langchain_core.messages.BaseMessage.content_blocks) for a consistent, typed view across providers. The existing [`message.content`](https://reference.langchain.com/python/langchain-core/messages/base/BaseMessage) field remains unchanged for strings or provider-native structures.

### What changed

- New [`content_blocks`](https://reference.langchain.com/python/langchain-core/messages/base/BaseMessage) property on messages for normalized content
- Standardized block shapes, documented in [Messages](/oss/python/langchain/messages#standard-content-blocks)
- Optional serialization of standard blocks into `content` via `LC_OUTPUT_VERSION=v1` or `output_version="v1"`

### Read standardized content

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model

model = init_chat_model("gpt-5-nano")
response = model.invoke("Explain AI")

for block in response.content_blocks:
    if block["type"] == "reasoning":
        print(block.get("reasoning"))
    elif block["type"] == "text":
        print(block.get("text"))
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Provider-native formats vary; you needed per-provider handling
response = model.invoke("Explain AI")
for item in response.content:
    if item.get("type") == "reasoning":
        ...  # OpenAI-style reasoning
    elif item.get("type") == "thinking":
        ...  # Anthropic-style thinking
    elif item.get("type") == "text":
        ...  # Text
```

### Create multimodal messages

```python v1 (new) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.messages import HumanMessage

message = HumanMessage(content_blocks=[
    {"type": "text", "text": "Describe this image."},
    {"type": "image", "url": "https://example.com/image.jpg"},
])
res = model.invoke([message])
```

```python v0 (old) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.messages import HumanMessage

message = HumanMessage(content=[
    # Provider-native structure
    {"type": "text", "text": "Describe this image."},
    {"type": "image_url", "image_url": {"url": "https://example.com/image.jpg"}},
])
res = model.invoke([message])
```

### Example block shapes

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Text block
text_block = {
    "type": "text",
    "text": "Hello world",
}

# Image block
image_block = {
    "type": "image",
    "url": "https://example.com/image.png",
    "mime_type": "image/png",
}
```

See the content blocks [reference](/oss/python/langchain/messages#content-block-reference) for more details.

### Serialize standard content

Standard content blocks are **not serialized** into the `content` attribute by default. If you need to access standard content blocks in the `content` attribute (e.g., when sending messages to a client), you can opt-in to serializing them into `content`.

```bash Environment variable theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LC_OUTPUT_VERSION=v1
```

```python Initialization parameter theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model

model = init_chat_model(
    "gpt-5-nano",
    output_version="v1",
)
```

Learn more: [Messages](/oss/python/langchain/messages#message-content), [Standard content blocks](/oss/python/langchain/messages#standard-content-blocks), and [Multimodal](/oss/python/langchain/messages#multimodal).

***
