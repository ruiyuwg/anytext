Call the Qwen model using the OpenAI-compatible Responses API.

**Advantages over the OpenAI Chat Completions API**:

-   **Built-in tools**: Includes web search, web scraping, code interpreter, text-to-image search, image-to-image search, and knowledge base search — delivering better results for complex tasks. For more information, see [Tool calling](/help/en/model-studio/tool-calls/).
    
-   **More flexible input**: Supports passing a string directly as model input and is also compatible with message arrays in Chat format.
    
-   **Simplified context management**: Pass `previous_response_id` instead of manually constructing the message history array.
    

## Compatibility notes and limitations

This API is OpenAI-compatible to reduce migration costs, but differences exist in parameters, features, and behaviors.

**Core principle**: Only explicitly documented parameters are processed. Unlisted OpenAI parameters are ignored.

The following are key differences to help you adapt quickly:

-   **Unsupported parameters**: Some OpenAI Responses API parameters are not supported, such as `background`. Currently, only synchronous calls are supported.
    
-   **Additional parameters**: This API supports extra parameters, such as `enable_thinking`. For specific usage, see the description of the corresponding parameter.
    

## **Singapore**

`base_url` for SDK: `https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1`

HTTP endpoint: `POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses`

## **China (Beijing)**

`base_url` for SDK: `https://dashscope.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1`

HTTP endpoint: `POST https://dashscope.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses`

## US (Virginia)

`base_url` for SDK: `https://dashscope-us.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1`

HTTP endpoint: `POST https://dashscope-us.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses`

## **Request body**

## Basic call

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If environment variable is not set, replace with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
)

response = client.responses.create(
    model="qwen3.5-plus",
    input="What can you do?"
)

# Get model response
print(response.output_text)
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    // If environment variable is not set, replace with: apiKey: "sk-xxx"
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    const response = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "What can you do?"
    });

    // Get model response
    console.log(response.output_text);
}

main();
```

## curl

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "What can you do?"
}'
```

## Streaming output

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
)

stream = client.responses.create(
    model="qwen3.5-plus",
    input="Please briefly introduce artificial intelligence.",
    stream=True
)

print("Receiving stream output:")
for event in stream:
    if event.type == 'response.output_text.delta':
        print(event.delta, end='', flush=True)
    elif event.type == 'response.completed':
        print("\nStream completed")
        print(f"Total tokens: {event.response.usage.total_tokens}")
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    const stream = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "Please briefly introduce artificial intelligence.",
        stream: true
    });

    console.log("Receiving stream output:");
    for await (const event of stream) {
        if (event.type === 'response.output_text.delta') {
            process.stdout.write(event.delta);
        } else if (event.type === 'response.completed') {
            console.log("\nStream completed");
            console.log(`Total tokens: ${event.response.usage.total_tokens}`);
        }
    }
}

main();
```

## curl

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
--no-buffer \
-d '{
    "model": "qwen3.5-plus",
    "input": "Please briefly introduce artificial intelligence.",
    "stream": true
}'
```

## Multi-turn conversation

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
)

# First round
response1 = client.responses.create(
    model="qwen3.5-plus",
    input="My name is John, please remember it."
)
print(f"First response: {response1.output_text}")

# Second round - use previous_response_id to link context
# The response id expires in 7 days
response2 = client.responses.create(
    model="qwen3.5-plus",
    input="Do you remember my name?",
    previous_response_id=response1.id
)
print(f"Second response: {response2.output_text}")
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    // First round
    const response1 = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "My name is John, please remember it."
    });
    console.log(`First response: ${response1.output_text}`);

    // Second round - use previous_response_id to link context
    // The response id expires in 7 days
    const response2 = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "Do you remember my name?",
        previous_response_id: response1.id
    });
    console.log(`Second response: ${response2.output_text}`);
}

main();
```

## Call built-in tools

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
)

response = client.responses.create(
    model="qwen3.5-plus",
    input="Find the Alibaba Cloud website and extract key information",
    # For best results, enable the built-in tools
    tools=[
        {"type": "web_search"},
        {"type": "code_interpreter"},
        {"type": "web_extractor"}
    ],
    extra_body={"enable_thinking": True}
)

# Uncomment the line below to see the intermediate output
# print(response.output)
print(response.output_text)
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    const response = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "Find the Alibaba Cloud website and extract key information",
        tools: [
            { type: "web_search" },
            { type: "code_interpreter" },
            { type: "web_extractor" }
        ],
        enable_thinking: true
    });

    for (const item of response.output) {
        if (item.type === "reasoning") {
            console.log("Model is thinking...");
        } else if (item.type === "web_search_call") {
            console.log(`Search query: ${item.action.query}`);
        } else if (item.type === "web_extractor_call") {
            console.log("Extracting web content...");
        } else if (item.type === "message") {
            console.log(`Response: ${item.content[0].text}`);
        }
    }
}

main();
```

## curl

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "Find the Alibaba Cloud website and extract key information",
    "tools": [
        {
            "type": "web_search"
        },
        {
            "type": "code_interpreter"
        },
        {
            "type": "web_extractor"
        }
    ],
    "enable_thinking": true
}'
```

## Custom function calling

## Python

```
from openai import OpenAI
import json
import os
import random

# Initialize the client
client = OpenAI(
    # If the environment variable is not set, provide your key directly: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
)
# Simulate a user question
USER_QUESTION = "What's the weather like in Beijing?"
# Define the list of tools
tools = [
    {
        "type": "function",
        "name": "get_current_weather",
        "description": "Queries the weather for a specified city.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District.",
                }
            },
            "required": ["location"],
        },
    }
]


# Simulate the weather query tool
def get_current_weather(arguments):
    weather_conditions = ["sunny", "cloudy", "rainy"]
    random_weather = random.choice(weather_conditions)
    location = arguments["location"]
    return f"Today in {location}, the weather is {random_weather}."


# Define a function to get the model's response
def get_response(input_data):
    response = client.responses.create(
        model="qwen3.5-plus",  # Options: qwen3.5-flash, qwen3.5-flash-2026-02-23
        input=input_data,
        tools=tools,
    )
    return response


# Maintain the conversation context
conversation = [{"role": "user", "content": USER_QUESTION}]

response = get_response(conversation)
function_calls = [item for item in response.output if item.type == "function_call"]
# If no tool call is needed, output the content directly
if not function_calls:
    print(f"Final assistant response: {response.output_text}")
else:
    # Enter the tool call loop
    while function_calls:
        for fc in function_calls:
            func_name = fc.name
            arguments = json.loads(fc.arguments)
            print(f"Calling tool [{func_name}], arguments: {arguments}")
            # Execute the tool
            tool_result = get_current_weather(arguments)
            print(f"Tool returned: {tool_result}")
            # Append the tool call and its result as a pair to the context
            conversation.append(
                {
                    "type": "function_call",
                    "name": fc.name,
                    "arguments": fc.arguments,
                    "call_id": fc.call_id,
                }
            )
            conversation.append(
                {
                    "type": "function_call_output",
                    "call_id": fc.call_id,
                    "output": tool_result,
                }
            )
        # Call the model again with the complete context
        response = get_response(conversation)
        function_calls = [
            item for item in response.output if item.type == "function_call"
        ]
    print(f"Final assistant response: {response.output_text}")
```

## Node.js

```
import OpenAI from "openai";

// Initialize the client
const openai = new OpenAI({
  // If the environment variable is not set, provide your key directly: apiKey: "sk-xxx"
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL:
    "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
});

// Define the list of tools
const tools = [
  {
    type: "function",
    name: "get_current_weather",
    description: "Queries the weather for a specified city.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "A city or district, such as Beijing, Hangzhou, or Yuhang District.",
        },
      },
      required: ["location"],
    },
  },
];

// Simulate the weather query tool
const getCurrentWeather = (args) => {
  const weatherConditions = ["sunny", "cloudy", "rainy"];
  const randomWeather =
    weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const location = args.location;
  return `Today in ${location}, the weather is ${randomWeather}.`;
};

// Define a function to get the model's response
const getResponse = async (inputData) => {
  const response = await openai.responses.create({
    model: "qwen3.5-plus",  // Options: qwen3.5-flash, qwen3.5-flash-2026-02-23
    input: inputData,
    tools: tools,
  });
  return response;
};

const main = async () => {
  const userQuestion = "What's the weather like in Beijing?";

  // Maintain the conversation context
  const conversation = [{ role: "user", content: userQuestion }];

  let response = await getResponse(conversation);
  let functionCalls = response.output.filter(
    (item) => item.type === "function_call"
  );
  // If no tool call is needed, output the content directly
  if (functionCalls.length === 0) {
    console.log(`Final assistant response: ${response.output_text}`);
  } else {
    // Enter the tool call loop
    while (functionCalls.length > 0) {
      for (const fc of functionCalls) {
        const funcName = fc.name;
        const args = JSON.parse(fc.arguments);
        console.log(`Calling tool [${funcName}], arguments:`, args);
        // Execute the tool
        const toolResult = getCurrentWeather(args);
        console.log(`Tool returned: ${toolResult}`);
        // Append the tool call and its result as a pair to the context
        conversation.push({
          type: "function_call",
          name: fc.name,
          arguments: fc.arguments,
          call_id: fc.call_id,
        });
        conversation.push({
          type: "function_call_output",
          call_id: fc.call_id,
          output: toolResult,
        });
      }
      // Call the model again with the complete context
      response = await getResponse(conversation);
      functionCalls = response.output.filter(
        (item) => item.type === "function_call"
      );
    }
    console.log(`Final assistant response: ${response.output_text}`);
  }
};

// Start the program
main().catch(console.error);
```

**model** `_string_` (Required)

Supported models

## International

`qwen3-max`, `qwen3-max-2026-01-23`, `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`, `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`, `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`, `qwen-plus`, `qwen-flash`, `qwen3-coder-plus`, `qwen3-coder-flash`

## Global

US (Virginia) region: `qwen3-max`, `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`, `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`, `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`, `qwen-plus`, `qwen-flash`, `qwen3-coder-plus`, `qwen3-coder-flash`

## Chinese mainland

`qwen3-max`, `qwen3-max-2026-01-23`, `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`, `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`, `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`, `qwen-plus`, `qwen-flash`, `qwen3-coder-plus`, `qwen3-coder-flash`

**input** `_string or array_` (Required)

The model input. The following formats are supported:

-   `string`: Plain text input, such as `"Hello"`.
    
-   `array`: A message array arranged in conversational order.
    

**Array message types**

**System Message** `_object_` (Optional)

Sets the model's role, tone, objectives, or constraints.

**Properties**

**role** `_string_` (Required)

The role of the message. The value must be `system`.

**content** `_string_` (Required)

The system instruction defining the model's role, behavior, response style, and constraints.

**Developer Message** `_object_` (Optional)

Functions the same as a system message — sets the model's role and behavior.

**Properties**

**role** `_string_` (Optional)

The role of the message. The value must be `developer`.

**content** `_string_` (Optional)

The developer instruction defining the model's role, behavior, response style, and constraints.

**User Message** `_object_` (Required)

Passes questions, instructions, or context to the model.

**Properties**

**role** `_string_` (Required)

The role of the message. The value must be `user`.

**content** `_string or array_` (Required)

The message content. String for text-only input; array for images or explicit caching.

> The Responses API does not support video or audio input. Use the [Chat Completions API](/help/en/model-studio/qwen-api-via-openai-chat-completions) or [DashScope API](/help/en/model-studio/qwen-api-via-dashscope) instead.

**Properties**

**type** `_string_` (Required)

Valid values:

-   `text`
    
    Set to `text` for text input.
    
-   `image_url`
    
    Set to `image_url` for image input.
    

**text** `_string_`

The input text. Required when `type` is `text`.

**image\_url** `_string_`

The public URL or Base64-encoded data of the input image. Required when `type` is `image_url`. To upload a local file, see [Image and video understanding](/help/en/model-studio/vision#647c6397db430).

**Assistant Message** `_object_` (Optional)

Contains previous model responses for multi-turn conversation context.

**Properties**

**role** `_string_` (Required)

The role of the message. The value must be `assistant`.

**content** `_string_` (Required)

The text content of the assistant's reply.

**instructions** `_string_` (Optional)

A system instruction inserted at the beginning of the context. When using `previous_response_id`, previous `instructions` are not carried over.

**previous\_response\_id** `_string_` (Optional)

The previous response's unique ID (valid for 7 days). Use this for multi-turn conversations — the server automatically retrieves and combines that turn's input and output as context. If both `input` array and `previous_response_id` are provided, new messages are appended to historical context. Cannot be used with `conversation`.

**conversation** `_string_` (Optional)

The conversation ID for the current response. Historical items are automatically passed as context, and the current request's input/output are added after completion. Cannot be used with `previous_response_id`.

**stream** `_boolean_` (Optional) Defaults to `false`

Enable streaming output. If `true`, model responses stream back in real time.

**tools** `_array_` (Optional)

Tools the model can call when generating a response. Supports built-in and user-defined function tools.

> For best results, enable `code_interpreter`, `web_search`, and `web_extractor` together.

**Properties**

**web\_search**

Allows the model to search for the latest information online. For more information, see [Web search](/help/en/model-studio/web-search).

**Properties**

**type** `_string_` (Required)

The value must be `web_search`.

Example: `[{"type": "web_search"}]`

**web\_extractor**

Allows the model to extract web page content. Must be used with `web_search`. The `qwen3-max` and `qwen3-max-2026-01-23` models require thinking mode. For more information, see [Web extractor](/help/en/model-studio/web-extractor).

**Properties**

**type** `_string_` (Required)

The value must be `web_extractor`.

Example: `[{"type": "web_search"}, {"type": "web_extractor"}]`

**code\_interpreter**

Allows the model to execute code and return results for data analytics. The `qwen3-max` and `qwen3-max-2026-01-23` models require thinking mode. For more information, see [Code interpreter](/help/en/model-studio/qwen-code-interpreter).

**Properties**

**type** `_string_` (Required)

The value must be `code_interpreter`.

Example: `[{"type": "code_interpreter"}]`

**web\_search\_image**

Searches for images based on a text description. For more information, see [Text-to-image search](/help/en/model-studio/web-search-image).

**Properties**

**type** `_string_` (Required)

The value must be `web_search_image`.

Example: `[{"type": "web_search_image"}]`

**image\_search**

Searches for similar or related images based on an image. The input must contain the image URL. For more information, see [Image search](/help/en/model-studio/image-search).

**Properties**

**type** `_string_` (Required)

The value must be `image_search`.

Example: `[{"type": "image_search"}]`

**file\_search**

Searches in uploaded or associated knowledge bases. For more information, see [Knowledge retrieval](/help/en/model-studio/file-search).

**Properties**

**type** `_string_` (Required)

The value must be `file_search`.

**vector\_store\_ids** `_array_` (Required)

The ID of the knowledge base to retrieve. **Currently, only one knowledge base ID is supported.**

Example: `[{"type": "file_search", "vector_store_ids": ["your_knowledge_base_id"]}]`

**MCP call**

Calls external services through the Model Context Protocol (MCP). For more information, see [MCP](/help/en/model-studio/mcp).

**Properties**

**type** `_string_` (Required)

The value must be `mcp`.

**server\_protocol** `_string_` (Required)

The communication protocol with the MCP service, such as `"sse"`.

**server\_label** `_string_` (Required)

The service label that identifies the MCP service.

**server\_description** `_string_` (Optional)

A description of the service that helps the model understand its function and scenarios.

**server\_url** `_string_` (Required)

The URL of the MCP service endpoint.

**headers** `_object_` (Optional)

Request headers used to carry information such as identity verification, for example, `Authorization`.

Example:

```
mcp_tool = {
    "type": "mcp",
    "server_protocol": "sse",
    "server_label": "amap-maps",
    "server_description": "AMAP MCP Server now covers 15 core APIs, providing a full range of geographic information services, including generating exclusive maps, navigating to destinations, hailing rides, geocoding, reverse geocoding, IP locating, weather querying, and planning cycling, walking, driving, and public transit routes, distance measurement, keyword search, nearby search, and details search.",
    "server_url": "https://dashscope.aliyuncs.com/api/v1/mcps/amap-maps/sse",
    "headers": {
        "Authorization": "Bearer <your-mcp-server-token>"
    }
}
```

**Custom tool** **function**

A user-defined function tool that allows the model to call functions you define. When the model decides to call a tool, the response returns a `function_call` type output. For more information, see [Function calling](/help/en/model-studio/qwen-function-calling).

**Properties**

**type** `_string_` (Required)

The value must be `function`.

**name** `_string_` (Required)

The tool name. The name can contain only letters, numbers, underscores (`_`), and hyphens (`-`). The maximum length is 64 tokens.

**description** `_string_` (Required)

A description of the tool that helps the model decide when and how to call it.

**parameters** `_object_` (Optional)

A description of the tool's parameters. The description must be a valid [JSON Schema](https://json-schema.org/understanding-json-schema). If the `parameters` parameter is empty, the tool has no input parameters, such as a time query tool.

> To improve the accuracy of tool calls, we recommend that you pass `parameters`.

Example:

```
[{
  "type": "function",
  "name": "get_weather",
  "description": "Get weather information for a specified city",
  "parameters": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "The name of the city"
      }
    },
    "required": ["city"]
  }
}]
```

**tool\_choice** `_string or object_` (Optional) Defaults to `auto`

Controls how the model selects and calls tools. Supports string or object format.

**String pattern**

-   `auto`: The model automatically decides whether to call a tool.
    
-   `none`: Prevents the model from calling any tool.
    
-   `required`: Forces the model to call a tool. Available only when there is a single tool in the `tools` list.
    

**Object format**

Specifies the range of available tools for the model. The model can select and call tools only from the predefined list.

**Properties**

**mode** `_string_` (Required)

-   `auto`: The model automatically decides whether to call a tool.
    
-   `required`: Forces the model to call a tool. Available only when there is a single tool in the `tools` list.
    

**tools** `_array_` (Required)

A list of tool definitions that the model is allowed to call.

```
[
  { "type": "function", "name": "get_weather" }
]
```

**type** `_string_` (Required)

The type of allowed tool configuration. The value must be `allowed_tools`.

**temperature** `_float_` (Optional)

Sampling temperature controlling text diversity. Higher values = more diverse; lower values = more deterministic. Range: \[0, 2). Set only temperature OR top\_p, not both. For more information, see [Text generation model overview](/help/en/model-studio/text-generation#ad7b336bec5fw).

**top\_p** `_float_` (Optional)

Probability threshold for nucleus sampling controlling text diversity. Higher values = more diverse; lower values = more deterministic. Range: (0, 1.0\]. Set only temperature OR top\_p, not both. For more information, see [Text generation model overview](/help/en/model-studio/text-generation#ad7b336bec5fw).

**enable\_thinking** `_boolean_` (Optional)

Enable thinking mode. If `true`, the model thinks before replying (thinking content returned via `reasoning` output item). When enabled, we recommend enabling built-in tools for best performance on complex tasks.

Valid values:

-   `true`
    
-   `false`
    

Default values by model: [Supported models](/help/en/model-studio/deep-thinking#78286fdc35hlw)

> Not a standard OpenAI parameter. Python SDK: use `extra_body={"enable_thinking": True}`. Node.js SDK and curl: use `enable_thinking: true` as a top-level parameter.

## **Response object (non-streaming output)**

```
{
    "created_at": 1771165900.0,
    "id": "f75c28fb-4064-48ed-90da-4d2cc4362xxx",
    "model": "qwen3.5-plus",
    "object": "response",
    "output": [
        {
            "content": [
                {
                    "annotations": [],
                    "text": "Hello! I am Qwen3.5, a large language model developed by Alibaba Cloud with knowledge up to 2026, designed to assist you with complex reasoning, creative tasks, and multilingual conversations.",
                    "type": "output_text"
                }
            ],
            "id": "msg_89ad23e6-f128-4d4c-b7a1-a786e7880xxx",
            "role": "assistant",
            "status": "completed",
            "type": "message"
        }
    ],
    "parallel_tool_calls": false,
    "status": "completed",
    "tool_choice": "auto",
    "tools": [],
    "usage": {
        "input_tokens": 57,
        "input_tokens_details": {
            "cached_tokens": 0
        },
        "output_tokens": 44,
        "output_tokens_details": {
            "reasoning_tokens": 0
        },
        "total_tokens": 101,
        "x_details": [
            {
                "input_tokens": 57,
                "output_tokens": 44,
                "total_tokens": 101,
                "x_billing_type": "response_api"
            }
        ]
    }
}
```

**id** `_string_`

The unique response ID (valid for 7 days). Use in `previous_response_id` for multi-turn conversations.

**created\_at** `_integer_`

The Unix timestamp in seconds for this request.

**object** `_string_`

The object type. The value is `response`.

**status** `_string_`

The status of the response generation. Valid values:

-   `completed`
    
-   `failed`
    
-   `in_progress`
    
-   `cancelled`
    
-   `queued`
    
-   `incomplete`
    

**model** `_string_`

The ID of the model that is used to generate the response.

**output** `_array_`

Output items generated by the model. Type and order depend on the model's response.

**Array element properties**

**type** `_string_`

The type of the output item. Valid values:

-   `message`: Message type. Contains the final reply content generated by the model.
    
-   `reasoning`: Returned when thinking mode (`enable_thinking: true`) is enabled. Reasoning tokens are counted in `output_tokens_details.reasoning_tokens` and billed accordingly.
    
-   `function_call`: Function call type. This type is returned when a user-defined `function` tool is used. You need to handle the function call and return the result.
    
-   `web_search_call`: Search call type. This type is returned when the `web_search` tool is used.
    
-   `code_interpreter_call`: Code execution type. This type is returned when the `code_interpreter` tool is used.
    
-   `web_extractor_call`: Web page extraction type. This type is returned when the `web_extractor` tool is used. It must be used with the `web_search` tool.
    
-   `web_search_image_call`: Text-to-image search call type. This type is returned when the `web_search_image` tool is used. It contains a list of searched images.
    
-   `image_search_call`: Image-to-image search call type. This type is returned when the `image_search` tool is used. It contains a list of similar images.
    
-   `mcp_call`: MCP call type. This type is returned when the `mcp` tool is used. It contains the result of the MCP service call.
    
-   `file_search_call`: Knowledge base search call type. This type is returned when the `file_search` tool is used. It contains the search query and results from the knowledge base.
    

**id** `_string_`

The unique identifier for the output item. This field is included in all types of output items.

**role** `_string_`

Message role (value: `assistant`). Only present when `type` is `message`.

**status** `_string_`

The status of the output item. Valid values: `completed`, `in_progress`. Present when `type` is `message`.

**name** `_string_`

The tool or function name. This field exists when the `type` is `function_call`, `web_search_image_call`, `image_search_call`, or `mcp_call`.

For `web_search_image_call` and `image_search_call`, the values are fixed as `"web_search_image"` and `"image_search"`, respectively.

For `mcp_call`, the value is the specific function name called in the MCP service, such as `amap-maps-maps_geo`.

**arguments** `_string_`

Tool call arguments (JSON string). Present for `function_call`, `web_search_image_call`, `image_search_call`, or `mcp_call`. Parse with `JSON.parse()` before use. Arguments by tool type:

-   `web_search_image_call`: `{"queries": ["search term 1", "search term 2"]}`, where `queries` is a list of search terms auto-generated by the model based on user input.
    
-   `image_search_call`: `{"img_idx": 0, "bbox": [0, 0, 1000, 1000]}`, where `img_idx` is the index of the input image (starting from 0), and `bbox` is the bounding box coordinates \[x1, y1, x2, y2\] for the search area, with a range of 0–1000.
    
-   `function_call`: An argument object generated according to the schema of the user-defined function parameters.
    
-   `mcp_call`: An argument object for the function called in the MCP service.
    

**call\_id** `_string_`

Unique function call identifier. Only present when `type` is `function_call`. Use this ID to associate request and response when returning results.

**content** `_array_`

An array of message content. This field exists only when the `type` is `message`.

**Array element properties**

**type** `_string_`

The content type. The value is `output_text`.

**text** `_string_`

The text content that is generated by the model.

**annotations** `_array_`

An array of text annotations. This is usually an empty array.

**summary** `_array_`

An array of reasoning summaries. This field exists only when the `type` is `reasoning`. Each element contains a `type` field with a value of `summary_text` and a `text` field that contains the summary text.

**action** `_object_`

The search action information. This field exists only when the `type` is `web_search_call`.

**Properties**

**query** `_string_`

The search query keyword.

**type** `_string_`

The search type. The value is `search`.

**sources** `_array_`

A list of search sources. Each element contains a `type` field and a `url` field.

**code** `_string_`

The code that is generated and executed by the model. This field exists only when the `type` is `code_interpreter_call`.

**outputs** `_array_`

An array of code execution outputs. This field exists only when the `type` is `code_interpreter_call`. Each element contains a `type` field with a value of `logs` and a `logs` field that contains the code execution log.

**container\_id** `_string_`

The identifier for the code interpreter container. This field exists only when the `type` is `code_interpreter_call`. It is used to associate multiple code executions within the same session.

**goal** `_string_`

A description of the extraction goal that explains what information needs to be extracted from the web page. This field exists only when the `type` is `web_extractor_call`.

**output** `_string_`

The output result of the tool call, in string format.

-   When `type` is `web_extractor_call`, this is the summary of the extracted web content.
    
-   When `type` is `web_search_image_call` or `image_search_call`, this is a JSON string containing an array of image search results. Each element contains a `title` field (image title), a `url` field (image URL), and an `index` field (sequence number).
    
-   When `type` is `mcp_call`, this is the JSON string result returned by the MCP service.
    

**urls** `_array_`

A list of URLs of the extracted web pages. This field exists only when the `type` is `web_extractor_call`.

**server\_label** `_string_`

The MCP service label. This field exists only when the `type` is `mcp_call`. It identifies the MCP service used for this call.

**queries** `_array_`

The list of queries used for knowledge base retrieval. This field exists only when the `type` is `file_search_call`. Array elements are strings representing search queries generated by the model.

**results** `_array_`

An array of knowledge base retrieval results. This field exists only when the `type` is `file_search_call`.

**Array element properties**

**file\_id** `_string_`

The file ID of the matching document.

**filename** `_string_`

The filename of the matching document.

**score** `_float_`

The relevance score of the match, ranging from 0 to 1. A higher value indicates greater relevance.

**text** `_string_`

A snippet of the matched document content.

**usage** `_object_`

Token consumption for this request.

**Properties**

**input\_tokens** `_integer_`

The number of input tokens.

**output\_tokens** `_integer_`

The number of tokens that are output by the model.

**total\_tokens** `_integer_`

Total tokens consumed (input\_tokens + output\_tokens).

**input\_tokens\_details** `_object_`

The fine-grained categorization of input tokens.

**Properties**

**cached\_tokens** `_integer_`

The number of tokens that hit the cache. For more information, see [Context cache](/help/en/model-studio/context-cache).

**output\_tokens\_details** `_object_`

The fine-grained categorization of output tokens.

**Properties**

**reasoning\_tokens** `_integer_`

The number of tokens in the thinking process.

**x\_details** `_object_`

**Properties**

**input\_tokens** `_integer_`

The number of input tokens.

**output\_tokens** `_integer_`

The number of tokens that are output by the model.

**total\_tokens** `_integer_`

Total tokens consumed (input\_tokens + output\_tokens).

**x\_billing\_type** `_string_`

The value is `response_api`.

**x\_tools** `_object_`

Tool usage statistics. Includes call counts for built-in tools.

Example: `{"web_search": {"count": 1}}`

**error** `_object_`

Error object returned on failure (`null` on success).

**tools** `_array_`

Echoes the `tools` parameter from the request (same structure as request body).

**tool\_choice** `_string_`

The value of the `tool_choice` parameter from the echo request. Valid values are `auto`, `none`, and `required`.

## **Response chunk object (streaming output)**

## Basic call

```
// response.created - Response created
{"response":{"id":"428c90e9-9cd6-90a6-9726-c02b08ebexxx","created_at":1769082930,"object":"response","status":"queued",...},"sequence_number":0,"type":"response.created"}

// response.in_progress - Response in progress
{"response":{"id":"428c90e9-9cd6-90a6-9726-c02b08ebexxx","status":"in_progress",...},"sequence_number":1,"type":"response.in_progress"}

// response.output_item.added - New output item added
{"item":{"id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","content":[],"role":"assistant","status":"in_progress","type":"message"},"output_index":0,"sequence_number":2,"type":"response.output_item.added"}

// response.content_part.added - New content block added
{"content_index":0,"item_id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","output_index":0,"part":{"annotations":[],"text":"","type":"output_text","logprobs":null},"sequence_number":3,"type":"response.content_part.added"}

// response.output_text.delta - Incremental text (triggered multiple times)
{"content_index":0,"delta":"Artificial intelligence","item_id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","logprobs":[],"output_index":0,"sequence_number":4,"type":"response.output_text.delta"}
{"content_index":0,"delta":"(AI) refers to the technology and science","item_id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","logprobs":[],"output_index":0,"sequence_number":6,"type":"response.output_text.delta"}

// response.output_text.done - Text completed
{"content_index":0,"item_id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","logprobs":[],"output_index":0,"sequence_number":53,"text":"Artificial intelligence (AI) refers to the technology and science that simulates human intelligent behavior by computer systems...","type":"response.output_text.done"}

// response.content_part.done - Content block completed
{"content_index":0,"item_id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","output_index":0,"part":{"annotations":[],"text":"...full text...","type":"output_text","logprobs":null},"sequence_number":54,"type":"response.content_part.done"}

// response.output_item.done - Output item completed
{"item":{"id":"msg_bcb45d66-fc34-46a2-bb56-714a51e8exxx","content":[{"annotations":[],"text":"...full text...","type":"output_text","logprobs":null}],"role":"assistant","status":"completed","type":"message"},"output_index":0,"sequence_number":55,"type":"response.output_item.done"}

// response.completed - Response completed (includes full response and usage)
{"response":{"id":"428c90e9-9cd6-90a6-9726-c02b08ebexxx","created_at":1769082930,"model":"qwen3-max-2026-01-23","object":"response","output":[...],"status":"completed","usage":{"input_tokens":37,"output_tokens":243,"total_tokens":280,...}},"sequence_number":56,"type":"response.completed"}
```

## Web scraping

```
id:1
event:response.created
:HTTP_STATUS/200
data:{"sequence_number":0,"type":"response.created","response":{"output":[],"parallel_tool_calls":false,"created_at":1769435906,"tool_choice":"auto","model":"","id":"863df8d9-cb29-4239-a54f-3e15a2427xxx","tools":[],"object":"response","status":"queued"}}

id:2
event:response.in_progress
:HTTP_STATUS/200
data:{"sequence_number":1,"type":"response.in_progress","response":{"output":[],"parallel_tool_calls":false,"created_at":1769435906,"tool_choice":"auto","model":"","id":"863df8d9-cb29-4239-a54f-3e15a2427xxx","tools":[],"object":"response","status":"in_progress"}}

id:3
event:response.output_item.added
:HTTP_STATUS/200
data:{"sequence_number":2,"item":{"summary":[],"type":"reasoning","id":"msg_5bd0c6df-19b8-4a04-bc00-8042a224exxx"},"output_index":0,"type":"response.output_item.added"}

id:4
event:response.reasoning_summary_text.delta
:HTTP_STATUS/200
data:{"delta":"The user wants me to:\n1. Search for the Alibaba Cloud official website.\n2. Extract key information from the home page.\n\nI need to first search for the URL of the Alibaba Cloud website, then use the web_extractor tool to access the site and extract key information.","sequence_number":3,"output_index":0,"type":"response.reasoning_summary_text.delta","item_id":"msg_5bd0c6df-19b8-4a04-bc00-8042a224exxx","summary_index":0}

id:14
event:response.reasoning_summary_text.done
:HTTP_STATUS/200
data:{"sequence_number":13,"text":"The user wants me to:\n1. Search for the Alibaba Cloud official website.\n2. Extract key information from the home page.\n\nI need to first search for the URL of the Alibaba Cloud website, then use the web_extractor tool to access the site and extract key information.","output_index":0,"type":"response.reasoning_summary_text.done","item_id":"msg_5bd0c6df-19b8-4a04-bc00-8042a224exxx","summary_index":0}

id:15
event:response.output_item.done
:HTTP_STATUS/200
data:{"sequence_number":14,"item":{"summary":[{"type":"summary_text","text":"The user wants me to:\n1. Search for the Alibaba Cloud official website.\n2. Extract key information from the home page.\n\nI need to first search for the URL of the Alibaba Cloud website, then use the web_extractor tool to access the site and extract key information."}],"type":"reasoning","id":"msg_5bd0c6df-19b8-4a04-bc00-8042a224exxx"},"output_index":1,"type":"response.output_item.done"}

id:16
event:response.output_item.added
:HTTP_STATUS/200
data:{"sequence_number":15,"item":{"action":{"type":"search","query":"Web search"},"id":"msg_a8a686b1-0a57-40e1-bb55-049a89cd4xxx","type":"web_search_call","status":"in_progress"},"output_index":1,"type":"response.output_item.added"}

id:17
event:response.web_search_call.in_progress
:HTTP_STATUS/200
data:{"sequence_number":16,"output_index":1,"type":"response.web_search_call.in_progress","item_id":"msg_a8a686b1-0a57-40e1-bb55-049a89cd4xxx"}

id:19
event:response.web_search_call.completed
:HTTP_STATUS/200
data:{"sequence_number":18,"output_index":1,"type":"response.web_search_call.completed","item_id":"msg_a8a686b1-0a57-40e1-bb55-049a89cd4xxx"}

id:20
event:response.output_item.done
:HTTP_STATUS/200
data:{"sequence_number":19,"item":{"action":{"sources":[{"type":"url","url":"https://cn.aliyun.com/"},{"type":"url","url":"https://www.aliyun.com/"}],"type":"search","query":"Web search"},"id":"msg_a8a686b1-0a57-40e1-bb55-049a89cd4xxx","type":"web_search_call","status":"completed"},"output_index":1,"type":"response.output_item.done"}

id:33
event:response.output_item.added
:HTTP_STATUS/200
data:{"sequence_number":32,"item":{"urls":["https://cn.aliyun.com/"],"goal":"Extract key information from the Alibaba Cloud home page, including the following: company positioning/profile, core products and services, main business sections, special features/solutions, latest news/events, free trial/promotional information, navigation menu structure, etc.","id":"msg_8c2cf651-48a5-460c-aa7a-bea5b09b4xxx","type":"web_extractor_call","status":"in_progress"},"output_index":3,"type":"response.output_item.added"}

id:34
event:response.output_item.done
:HTTP_STATUS/200
data:{"sequence_number":33,"item":{"output":"The useful information in https://cn.aliyun.com/ for user goal Extract key information from the Alibaba Cloud home page, including the following: company positioning/profile, core products and services, main business sections, special features/solutions, latest news/events, free trial/promotional information, navigation menu structure, etc. as follows: \n\nEvidence in page: \n## Tongyi large model, the first choice for enterprises to embrace the AI era\n\n## A complete product system to create a cloud of technological innovation for enterprises\n\nAll cloud products## Relying on the coordinated development of large models and cloud computing to make AI within reach\n\nAll AI solutions\n\nSummary: \nAlibaba Cloud positions itself as a leading enterprise AI solution provider centered around the Tongyi large model...","urls":["https://cn.aliyun.com/"],"goal":"Extract key information from the Alibaba Cloud home page, including the following: company positioning/profile, core products and services, main business sections, special features/solutions, latest news/events, free trial/promotional information, navigation menu structure, etc.","id":"msg_8c2cf651-48a5-460c-aa7a-bea5b09b4xxx","type":"web_extractor_call","status":"completed"},"output_index":3,"type":"response.output_item.done"}

id:50
event:response.output_item.added
:HTTP_STATUS/200
data:{"sequence_number":50,"item":{"content":[{"type":"text","text":""}],"type":"message","id":"msg_final","role":"assistant"},"output_index":5,"type":"response.output_item.added"}

id:51
event:response.output_text.delta
:HTTP_STATUS/200
data:{"delta":"I have found the Alibaba Cloud official website and extracted the key information from the home page:\n\n","sequence_number":51,"output_index":5,"type":"response.output_text.delta"}

id:60
event:response.completed
:HTTP_STATUS/200
data:{"type":"response.completed","response":{"id":"863df8d9-cb29-4239-a54f-3e15a2427xxx","status":"completed","usage":{"input_tokens":45,"output_tokens":320,"total_tokens":365}}}
```

## Text-to-image search

```
// 1. response.created - Response created
id:1
event:response.created
data:{"sequence_number":0,"type":"response.created","response":{"output":[],"status":"queued",...}}

// 2. response.in_progress - Response in progress
id:2
event:response.in_progress
data:{"sequence_number":1,"type":"response.in_progress","response":{"status":"in_progress",...}}

// 3. response.output_item.added - Reasoning starts (reasoning)
id:3
event:response.output_item.added
data:{"sequence_number":2,"item":{"summary":[],"type":"reasoning","id":"msg_xxx"},"output_index":0,"type":"response.output_item.added"}

// 4. response.reasoning_summary_text.delta - Reasoning summary delta
id:4
event:response.reasoning_summary_text.delta
data:{"delta":"The user wants to find a picture of a cat. I need to use the web_search_image tool to search...","sequence_number":3,"output_index":0,"type":"response.reasoning_summary_text.delta","item_id":"msg_xxx","summary_index":0}

// 5. response.reasoning_summary_text.done - Reasoning summary done
id:10
event:response.reasoning_summary_text.done
data:{"sequence_number":9,"text":"The user wants to find a picture of a cat. I need to use the web_search_image tool to search for cat pictures.","output_index":0,"type":"response.reasoning_summary_text.done","item_id":"msg_xxx","summary_index":0}

// 6. response.output_item.done - Reasoning item done
id:11
event:response.output_item.done
data:{"sequence_number":10,"item":{"summary":[{"type":"summary_text","text":"..."}],"type":"reasoning","id":"msg_xxx"},"output_index":0,"type":"response.output_item.done"}

// 7. response.output_item.added - Text-to-image search tool call starts (status: in_progress, with name and arguments)
id:12
event:response.output_item.added
data:{"sequence_number":11,"item":{"name":"web_search_image","arguments":"{\"queries\": [\"cat picture\", \"cute cat\"]}","id":"msg_xxx","type":"web_search_image_call","status":"in_progress"},"output_index":1,"type":"response.output_item.added"}

// 8. response.output_item.done - Text-to-image search tool call done (with full output search results)
id:13
event:response.output_item.done
data:{"sequence_number":12,"item":{"name":"web_search_image","output":"[{\"title\": \"Cute kitten...\", \"url\": \"https://example.com/cat.jpg\", \"index\": 1}, ...]","arguments":"{\"queries\": [\"cat picture\", \"cute cat\"]}","id":"msg_xxx","type":"web_search_image_call","status":"completed"},"output_index":1,"type":"response.output_item.done"}

// 9-12. Second round of reasoning + final message output (same as basic call)
// response.output_item.added (reasoning) → reasoning_summary_text.delta/done → response.output_item.done (reasoning)
// response.output_item.added (message) → response.content_part.added → response.output_text.delta → response.output_text.done → response.content_part.done → response.output_item.done (message)

// 13. response.completed - Response completed
id:118
event:response.completed
data:{"sequence_number":117,"type":"response.completed","response":{"output":[...],"status":"completed","usage":{"input_tokens":7895,"output_tokens":318,"total_tokens":8213,"x_tools":{"web_search_image":{"count":1}}}}}
```

## Image search

```
// 1-6. Reasoning phase (same as text-to-image search)

// 7. response.output_item.added - Image search tool call starts
// Note: arguments contains img_idx (image index) and bbox (bounding box for search area)
id:29
event:response.output_item.added
data:{"sequence_number":29,"item":{"name":"image_search","arguments":"{\"img_idx\": 0, \"bbox\": [0, 0, 1000, 1000]}","id":"msg_xxx","type":"image_search_call","status":"in_progress"},"output_index":1,"type":"response.output_item.added"}

// 8. response.output_item.done - Image search tool call done
id:30
event:response.output_item.done
data:{"sequence_number":30,"item":{"name":"image_search","output":"[{\"title\": \"Landscape background...\", \"url\": \"https://example.com/landscape.jpg\", \"index\": 1}, ...]","arguments":"{\"img_idx\": 0, \"bbox\": [0, 0, 1000, 1000]}","id":"msg_xxx","type":"image_search_call","status":"completed"},"output_index":1,"type":"response.output_item.done"}

// 9-12. Second round of reasoning + final message output (same as basic call)

// 13. response.completed
id:408
event:response.completed
data:{"sequence_number":407,"type":"response.completed","response":{"output":[...],"status":"completed","usage":{"input_tokens":8371,"output_tokens":417,"total_tokens":8788,"x_tools":{"image_search":{"count":1}}}}}
```

## MCP

```
// 1-6. Reasoning phase (same as other tools)

// 7. response.mcp_call_arguments.delta - MCP arguments delta (MCP-specific event)
id:27
event:response.mcp_call_arguments.delta
data:{"delta":"{\"city\": \"Beijing\"}","sequence_number":26,"output_index":1,"type":"response.mcp_call_arguments.delta","item_id":"msg_xxx"}

// 8. response.mcp_call_arguments.done - MCP arguments done (MCP-specific event)
id:28
event:response.mcp_call_arguments.done
data:{"sequence_number":27,"arguments":"{\"city\": \"Beijing\"}","output_index":1,"type":"response.mcp_call_arguments.done","item_id":"msg_xxx"}

// 9. response.output_item.added - MCP tool call starts (with name, server_label, arguments)
id:29
event:response.output_item.added
data:{"sequence_number":28,"item":{"name":"amap-maps-maps_weather","server_label":"MCP Server","arguments":"{\"city\": \"Beijing\"}","id":"msg_xxx","type":"mcp_call","status":"in_progress"},"output_index":1,"type":"response.output_item.added"}

// 10. response.mcp_call.completed - MCP call completed (MCP-specific event)
id:30
event:response.mcp_call.completed
data:{"sequence_number":29,"output_index":1,"type":"response.mcp_call.completed","item_id":"msg_xxx"}

// 11. response.output_item.done - MCP output item done (with full output)
id:31
event:response.output_item.done
data:{"sequence_number":30,"item":{"output":"{\"city\":\"Beijing\",\"forecasts\":[...]}","name":"amap-maps-maps_weather","server_label":"MCP Server","arguments":"{\"city\": \"Beijing\"}","id":"msg_xxx","type":"mcp_call","status":"completed"},"output_index":1,"type":"response.output_item.done"}

// 12-15. Second round of reasoning + final message output

// 16. response.completed
id:172
event:response.completed
data:{"sequence_number":171,"type":"response.completed","response":{"output":[...],"status":"completed","usage":{"input_tokens":5019,"output_tokens":539,"total_tokens":5558}}}
```

## Knowledge base search

```
// 1-6. Reasoning phase (same as other tools)

// 7. response.output_item.added - Knowledge base search starts (with queries, no results)
id:19
event:response.output_item.added
data:{"sequence_number":18,"item":{"id":"msg_xxx","type":"file_search_call","queries":["Alibaba Cloud Bailian X1 phone","Alibaba Cloud Bailian X1 phone","Bailian X1"],"status":"in_progress"},"output_index":1,"type":"response.output_item.added"}

// 8. response.file_search_call.in_progress - Search in progress (file_search-specific event)
id:20
event:response.file_search_call.in_progress
data:{"sequence_number":19,"output_index":1,"type":"response.file_search_call.in_progress","item_id":"msg_xxx"}

// 9. response.file_search_call.searching - Searching (file_search-specific event)
id:21
event:response.file_search_call.searching
data:{"sequence_number":20,"output_index":1,"type":"response.file_search_call.searching","item_id":"msg_xxx"}

// 10. response.file_search_call.completed - Search completed (file_search-specific event)
id:22
event:response.file_search_call.completed
data:{"sequence_number":21,"output_index":1,"type":"response.file_search_call.completed","item_id":"msg_xxx"}

// 11. response.output_item.done - Output item done (with queries + results)
id:23
event:response.output_item.done
data:{"sequence_number":22,"item":{"id":"msg_xxx","type":"file_search_call","queries":["Alibaba Cloud Bailian X1 phone","Alibaba Cloud Bailian X1 phone","Bailian X1"],"results":[{"score":0.7519,"filename":"Introduction to Alibaba Cloud Bailian Series Phones","text":"Alibaba Cloud Bailian X1 — Enjoy an ultimate visual experience...","file_id":"file_xxx"}],"status":"completed"},"output_index":1,"type":"response.output_item.done"}

// 12-15. Second round of reasoning + final message output

// 16. response.completed
id:146
event:response.completed
data:{"sequence_number":145,"type":"response.completed","response":{"output":[...],"status":"completed","usage":{"input_tokens":1576,"output_tokens":722,"total_tokens":2298,"x_tools":{"file_search":{"count":1}}}}}
```

Streaming returns JSON objects with `type` (event type) and `sequence_number` (event order). The `response.completed` event marks stream end.

**type** `_string_`

The event type identifier. Valid values:

-   `response.created`: Response created (status: `queued`).
    
-   `response.in_progress`: Processing begins (status: `in_progress`).
    
-   `response.output_item.added`: New output item added (message, `web_extractor_call`, etc.). If `item.type` is `web_extractor_call`, the tool call has started.
    
-   `response.content_part.added`: New content block added to output item.
    
-   `response.output_text.delta`: Incremental text generation (triggered multiple times). The `delta` field contains new text fragments.
    
-   `response.output_text.done`: Text generation complete. The `text` field contains complete text.
    
-   `response.content_part.done`: Content block complete. The `part` object contains the complete block.
    
-   `response.output_item.done`: Output item generation complete. The `item` object contains the complete item. If `item.type` is `web_extractor_call`, the tool call is complete.
    
-   `response.reasoning_summary_text.delta`: (Thinking mode) Incremental reasoning summary text. The `delta` field contains new fragments.
    
-   `response.reasoning_summary_text.done`: (Thinking mode) Reasoning summary complete. The `text` field contains complete summary.
    
-   `response.web_search_call.in_progress` / `searching` / `completed`: (If you use the web\_search tool) Search status change events.
    
-   `response.code_interpreter_call.in_progress` / `interpreting` / `completed`: (If you use the code\_interpreter tool) Code execution status change events.
    
-   **Note:** The `web_extractor` tool has no dedicated event type. Tool calls use `response.output_item.added` and `response.output_item.done` events (identified by `item.type` = `web_extractor_call`).
    
-   `response.mcp_call_arguments.delta` / `response.mcp_call_arguments.done`: (If you use the mcp tool) Incremental and completion events for MCP call arguments.
    
-   `response.mcp_call.completed`: (If you use the mcp tool) MCP service call completed.
    
-   `response.file_search_call.in_progress` / `searching` / `completed`: (If you use the file\_search tool) Knowledge base search status change events.
    
-   **Note:** The `web_search_image` and `image_search` tools have no intermediate state events. Tool calls use `response.output_item.added` (start) and `response.output_item.done` (completion).
    
-   `response.completed`: Response generation complete. The `response` object contains complete response and usage information. Marks stream end.
    

**sequence\_number** `_integer_`

Event serial number (starts at 0, increments). Use to ensure correct client-side event processing order.

**response** `_object_`

The response object (appears in `response.created`, `response.in_progress`, `response.completed`). In `response.completed`, contains complete data (`output`, `usage`). Structure matches non-streaming responses.

**item** `_object_`

Output item object (appears in `response.output_item.added`, `response.output_item.done`). In `added`: skeleton with empty content array. In `done`: complete object.

**Properties**

**id** `_string_`

The unique identifier for the output item, such as `msg_xxx`.

**type** `_string_`

The type of the output item. Valid values: `message`, `reasoning`, `web_search_call` (search), `web_search_image_call` (text-to-image search), `image_search_call` (image-to-image search), `mcp_call`, and `file_search_call` (knowledge base search).

**role** `_string_`

The role of the message. The value is `assistant`. This field exists only when the type is `message`.

**status** `_string_`

Generation status: `in_progress` in `added` events, `completed` in `done` events.

**content** `_array_`

Message content array. In `added`: empty `[]`. In `done`: complete content blocks (same structure as `part`).

**part** `_object_`

The content block object. It appears in the `response.content_part.added` and `response.content_part.done` events.

**Properties**

**type** `_string_`

The content block type. The value is `output_text`.

**text** `_string_`

Text content: empty string in `added`, complete text in `done`.

**annotations** `_array_`

An array of text annotations. This is usually an empty array.

**logprobs** `_object | null_`

The log probability information for tokens. Currently, this is `null`.

**delta** `_string_`

Incremental text content in `response.output_text.delta` events (contains new fragments). Concatenate all `delta` fragments for complete text.

**text** `_string_`

Complete text content in `response.output_text.done` events. Use to verify concatenated `delta` results.

**item\_id** `_string_`

The unique identifier for the output item. It is used to associate related events for the same output item.

**output\_index** `_integer_`

The index position of the output item in the `output` array.

**content\_index** `_integer_`

The index position of the content block in the `content` array.

**summary\_index** `_integer_`

The index of the summary array. It appears in the `response.reasoning_summary_text.delta` and `response.reasoning_summary_text.done` events.

## **FAQ**

**Q: How to pass context for a multi-turn conversation?**

A: Pass the previous response's `id` as the `previous_response_id` parameter.

**Q: Why are some fields in the response examples not described in this document?**

A: The official OpenAI SDK may output additional fields (usually `null`) based on its model structure. These are defined by OpenAI protocol but not currently supported. Focus only on documented fields.
