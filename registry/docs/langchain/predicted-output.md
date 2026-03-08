## Predicted output

Some OpenAI models (such as their `gpt-4o` and `gpt-4o-mini` series) support [Predicted Outputs](https://platform.openai.com/docs/guides/latency-optimization#use-predicted-outputs), which allow you to pass in a known portion of the LLM's expected output ahead of time to reduce latency. This is useful for cases such as editing text or code, where only a small part of the model's output will change.

Here's an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const modelWithPredictions = new ChatOpenAI({
  model: "gpt-4.1-mini",
});

const codeSample = `
/// <summary>
/// Represents a user with a first name, last name, and username.
/// </summary>
public class User
{
/// <summary>
/// Gets or sets the user's first name.
/// </summary>
public string FirstName { get; set; }

/// <summary>
/// Gets or sets the user's last name.
/// </summary>
public string LastName { get; set; }

/// <summary>
/// Gets or sets the user's username.
/// </summary>
public string Username { get; set; }
}
`;

// Can also be attached ahead of time
// using `model.bind({ prediction: {...} })`;
await modelWithPredictions.invoke(
  [
    {
      role: "user",
      content:
        "Replace the Username property with an Email property. Respond only with code, and with no markdown formatting.",
    },
    {
      role: "user",
      content: codeSample,
    },
  ],
  {
    prediction: {
      type: "content",
      content: codeSample,
    },
  }
);
```

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
AIMessage {
  "id": "chatcmpl-AQLyQKnazr7lEV7ejLTo1UqhzHDBl",
  "content": "/// <summary>\n/// Represents a user with a first name, last name, and email.\n/// </summary>\npublic class User\n{\n/// <summary>\n/// Gets or sets the user's first name.\n/// </summary>\npublic string FirstName { get; set; }\n\n/// <summary>\n/// Gets or sets the user's last name.\n/// </summary>\npublic string LastName { get; set; }\n\n/// <summary>\n/// Gets or sets the user's email.\n/// </summary>\npublic string Email { get; set; }\n}",
  "additional_kwargs": {},
  "response_metadata": {
    "tokenUsage": {
      "promptTokens": 148,
      "completionTokens": 217,
      "totalTokens": 365
    },
    "finish_reason": "stop",
    "usage": {
      "prompt_tokens": 148,
      "completion_tokens": 217,
      "total_tokens": 365,
      "prompt_tokens_details": {
        "cached_tokens": 0
      },
      "completion_tokens_details": {
        "reasoning_tokens": 0,
        "accepted_prediction_tokens": 36,
        "rejected_prediction_tokens": 116
      }
    },
    "system_fingerprint": "fp_0ba0d124f1"
  },
  "tool_calls": [],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "output_tokens": 217,
    "input_tokens": 148,
    "total_tokens": 365,
    "input_token_details": {
      "cache_read": 0
    },
    "output_token_details": {
      "reasoning": 0
    }
  }
}
```

Note that currently predictions are billed as additional tokens and will increase your usage and costs in exchange for this reduced latency.
