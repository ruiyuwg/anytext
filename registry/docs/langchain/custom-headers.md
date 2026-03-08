## Custom headers

You can pass custom headers in your requests like this:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";

const llmWithCustomHeaders = new ChatAnthropic({
  model: "claude-sonnet-4-6",
  maxTokens: 1024,
  clientOptions: {
    defaultHeaders: {
      "X-Api-Key": process.env.ANTHROPIC_API_KEY,
    },
  },
});

await llmWithCustomHeaders.invoke("Why is the sky blue?");
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
AIMessage {
  "id": "msg_019z4nWpShzsrbSHTWXWQh6z",
  "content": "The sky appears blue due to a phenomenon called Rayleigh scattering. Here's a brief explanation:\n\n1) Sunlight is made up of different wavelengths of visible light, including all the colors of the rainbow.\n\n2) As sunlight passes through the atmosphere, the gases (mostly nitrogen and oxygen) cause the shorter wavelengths of light, such as violet and blue, to be scattered more easily than the longer wavelengths like red and orange.\n\n3) This scattering of the shorter blue wavelengths occurs in all directions by the gas molecules in the atmosphere.\n\n4) Our eyes are more sensitive to the scattered blue light than the scattered violet light, so we perceive the sky as having a blue color.\n\n5) The scattering is more pronounced for light traveling over longer distances through the atmosphere. This is why the sky appears even darker blue when looking towards the horizon.\n\nSo in essence, the selective scattering of the shorter blue wavelengths of sunlight by the gases in the atmosphere is what causes the sky to appear blue to our eyes during the daytime.",
  "additional_kwargs": {
    "id": "msg_019z4nWpShzsrbSHTWXWQh6z",
    "type": "message",
    "role": "assistant",
    "model": "claude-3-sonnet-20240229",
    "stop_reason": "end_turn",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 13,
      "output_tokens": 236
    }
  },
  "response_metadata": {
    "id": "msg_019z4nWpShzsrbSHTWXWQh6z",
    "model": "claude-3-sonnet-20240229",
    "stop_reason": "end_turn",
    "stop_sequence": null,
    "usage": {
      "input_tokens": 13,
      "output_tokens": 236
    },
    "type": "message",
    "role": "assistant"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "input_tokens": 13,
    "output_tokens": 236,
    "total_tokens": 249
  }
}
```
