The Model Context Protocol (MCP) enables large language models to use external tools and data. Compared with function calling, MCP offers greater flexibility and ease of use. This topic describes how to connect to MCP using the Responses API.

## Usage

Add MCP server information in the `tools` parameter when using the Responses API.

> Get the Server-Sent Events (SSE) endpoint and authentication information for the MCP service from platforms such as [ModelScope](https://modelscope.ai/mcp/servers).

> Only MCP servers using the SSE protocol are supported.

> Maximum 10 MCP servers.

```
# Import dependencies and create a client...
mcp_tool = {
    "type": "mcp",
    "server_protocol": "sse",
    "server_label": "my-mcp-service",
    "server_description": "A description of the MCP server's features to help the model understand its use cases.",
    "server_url": "https://your-mcp-server-endpoint/sse",
    "headers": {
        "Authorization": "Bearer YOUR_TOKEN"
    }
}

response = client.responses.create(
    model="qwen3.5-plus",
    input="Your question...",
    tools=[mcp_tool]
)

print(response.output_text)
```

## Supported models

## International

-   Qwen-Plus: `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`
    
-   Qwen-Flash: `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`
    
-   Open-source Qwen: `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`
    

## Global

-   Qwen-Plus: `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`
    
-   Qwen-Flash: `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`
    
-   Open-source Qwen: `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`
    

## Chinese mainland

-   Qwen-Plus: `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`
    
-   Qwen-Flash: `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`
    
-   Open-source Qwen: `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`
    

Available through the Responses API only.

## Getting started

This example uses the [Fetch web scraping](https://modelscope.ai/mcp/servers/@modelcontextprotocol/fetch) MCP service from ModelScope. You can get the SSE Endpoint and authentication information for the service from the Service configuration section on the right.

Get an [API key](/help/en/model-studio/get-api-key) and [configure it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

> Replace `server_url` with the SSE endpoint from the MCP service platform. Replace the authentication in `headers` with the token provided by that platform.

Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable, use: api_key="sk-xxx" (not recommended).
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
)

# MCP tool configuration
# Replace server_url with the SSE Endpoint that you got from a platform such as ModelScope
# If authentication is required, add the token from the corresponding platform to the headers
mcp_tool = {
    "type": "mcp",
    "server_protocol": "sse",
    "server_label": "fetch",
    "server_description": "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
    "server_url": "https://mcp.api-inference.modelscope.net/xxx/sse",
}

response = client.responses.create(
    model="qwen3.5-plus",
    input="https://news.aibase.com/zh/news, what is the AI news today?",
    tools=[mcp_tool]
)

print("[Model Response]")
print(response.output_text)
print(f"\n[Token Usage] Input: {response.usage.input_tokens}, Output: {response.usage.output_tokens}, Total: {response.usage.total_tokens}")
```

Node.js

```
import OpenAI from "openai";
import process from 'process';

const openai = new OpenAI({
    // If no environment variable, use: apiKey: "sk-xxx" (not recommended).
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    // MCP tool configuration
    // Replace server_url with the SSE Endpoint that you got from a platform such as ModelScope
    // If authentication is required, add the token from the corresponding platform to the headers
    const mcpTool = {
        type: "mcp",
        server_protocol: "sse",
        server_label: "fetch",
        server_description: "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
        server_url: "https://mcp.api-inference.modelscope.net/xxx/sse",
    };

    const response = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "https://news.aibase.com/zh/news, what is the AI news today?",
        tools: [mcpTool]
    });

    console.log("[Model Response]");
    console.log(response.output_text);
    console.log(`\n[Token Usage] Input: ${response.usage.input_tokens}, Output: ${response.usage.output_tokens}, Total: ${response.usage.total_tokens}`);
}

main();
```

curl

```
# Replace server_url with the SSE Endpoint that you got from a platform such as ModelScope
# If authentication is required, add the token from the corresponding platform to the headers
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "https://news.aibase.com/zh/news, what is the AI news today?",
    "tools": [
        {
            "type": "mcp",
            "server_protocol": "sse",
            "server_label": "fetch",
            "server_description": "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
            "server_url": "https://mcp.api-inference.modelscope.net/xxx/sse"
        }
    ]
}'
```

After you run the code, the following response is returned:

```
[Model Response]
To drive from Beijing to Shanghai, you can choose one of the following routes:

1. Recommended route (G2 Beijing-Shanghai Expressway)
   - Drive south on the G2 Beijing-Shanghai Expressway through provinces and cities such as Hebei, Tianjin, Shandong, and Jiangsu.
   - The total distance is about 1,200 km, and the estimated driving time is 13 to 15 hours.

2. Alternative route (G3 Beijing-Taipei Expressway to G60 Shanghai-Kunming Expressway)
   - Drive south on the G3 Beijing-Taipei Expressway. After entering Anhui, switch to the G60 Shanghai-Kunming Expressway to Shanghai.
   - The total distance is about 1,250 km, and the estimated driving time is 14 to 16 hours.

...

[Token Usage] Input: 55, Output: 195, Total: 250
```

## Streaming output

MCP tool calls may involve multiple interactions with external services. Enable streaming for real-time intermediate results.

Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable, use: api_key="sk-xxx" (not recommended).
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
)

# Replace server_url with the SSE Endpoint that you got from a platform such as ModelScope
# If authentication is required, add the token from the corresponding platform to the headers
mcp_tool = {
    "type": "mcp",
    "server_protocol": "sse",
    "server_label": "fetch",
    "server_description": "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
    "server_url": "https://mcp.api-inference.modelscope.net/xxx/sse",
}

stream = client.responses.create(
    model="qwen3.5-plus",
    input="https://news.aibase.com/zh/news, what is the AI news today?",
    tools=[mcp_tool],
    stream=True
)

for event in stream:
    # The model response starts
    if event.type == "response.content_part.added":
        print("[Model Response]")
    # Streaming text output
    elif event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
    # The response is complete, output the usage
    elif event.type == "response.completed":
        usage = event.response.usage
        print(f"\n\n[Token Usage] Input: {usage.input_tokens}, Output: {usage.output_tokens}, Total: {usage.total_tokens}")
```

Node.js

```
import OpenAI from "openai";
import process from 'process';

const openai = new OpenAI({
    // If no environment variable, use: apiKey: "sk-xxx" (not recommended).
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    // Replace server_url with the SSE Endpoint that you got from a platform such as ModelScope
    // If authentication is required, add the token from the corresponding platform to the headers
    const mcpTool = {
        type: "mcp",
        server_protocol: "sse",
        server_label: "fetch",
        server_description": "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
        server_url": "https://mcp.api-inference.modelscope.net/xxx/sse",
    };

    const stream = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "https://news.aibase.com/zh/news, what is the AI news today?",
        tools: [mcpTool],
        stream: true
    });

    for await (const event of stream) {
        // The model response starts
        if (event.type === "response.content_part.added") {
            console.log("[Model Response]");
        }
        // Streaming text output
        else if (event.type === "response.output_text.delta") {
            process.stdout.write(event.delta);
        }
        // The response is complete, output the usage
        else if (event.type === "response.completed") {
            const usage = event.response.usage;
            console.log(`\n\n[Token Usage] Input: ${usage.input_tokens}, Output: ${usage.output_tokens}, Total: ${usage.total_tokens}`);
        }
    }
}

main();
```

curl

```
# Replace server_url with the SSE Endpoint that you got from a platform such as ModelScope
# If authentication is required, add the token from the corresponding platform to the headers
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "https://news.aibase.com/zh/news, what is the AI news today?",
    "tools": [
        {
            "type": "mcp",
            "server_protocol": "sse",
            "server_label": "fetch",
            "server_description": "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
            "server_url": "https://mcp.api-inference.modelscope.net/xxx/sse"
        }
    ],
    "stream": true
}'
```

After you run the code, the following response is returned:

```
[Model Response]
To drive from Beijing to Shanghai, you can choose one of the following routes:

1. Recommended route (G2 Beijing-Shanghai Expressway)
   - Drive south on the G2 Beijing-Shanghai Expressway through provinces and cities such as Hebei, Tianjin, Shandong, and Jiangsu.
   - The total distance is about 1,200 km, and the estimated driving time is 13 to 15 hours.

...

[Token Usage] Input: 55, Output: 195, Total: 250
```

## Parameters

The `mcp` tool supports the following parameters:

**Parameter**

**Required**

**Description**

`type`

Yes

Set to `"mcp"`.

`server_protocol`

Yes

The communication protocol with the MCP server. Currently, only `"sse"` is supported.

`server_label`

Yes

The label name of the MCP server, used to identify the service.

`server_description`

No

A description of the MCP server's features. This helps the model understand the service's capabilities and scenarios. Filling in this parameter is recommended to improve the accuracy of model calls.

`server_url`

Yes

The endpoint URL of the MCP server.

`headers`

No

The request headers to include when connecting to the MCP server, such as authentication information like `Authorization`.

Example:

```
{
    "type": "mcp",
    "server_protocol": "sse",
    "server_label": "fetch",
    "server_description": "Fetch MCP Server that provides web scraping capabilities. It can scrape the content of a specified URL and return it as text.",
    "server_url": "https://mcp.api-inference.modelscope.net/xxx/sse"
}
```

## Billing

Billing includes:

-   **Model inference fees:** Billed based on the model's token usage.
    
-   **MCP server fees:** Subject to the billing rules of each MCP server.
