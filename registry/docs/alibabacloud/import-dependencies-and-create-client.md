Large language models lack access to private data. The knowledge retrieval tool queries your knowledge base and provides results to the model for more accurate answers.

## Usage

Add the `file_search` tool in the `tools` parameter and specify your knowledge base ID in `vector_store_ids`.

> Before using this feature, [create a knowledge base](/help/en/model-studio/rag-knowledge-base) and obtain its ID (only one ID is currently supported).

```
# Import dependencies and create client...
response = client.responses.create(
    model="qwen3.5-plus",
    input="Introduce Bailian X1 phone",
    tools=[
        {
            "type": "file_search",
            # Replace with your knowledge base ID. Only one is supported currently.
            "vector_store_ids": ["your_knowledge_base_id"]
        }
    ]
)

print(response.output_text)
```

## Supported models

-   Qwen-Plus: `qwen3.5-plus`, `qwen3.5-plus-2026-02-15`
    
-   Qwen-Flash: `qwen3.5-flash`, `qwen3.5-flash-2026-02-23`
    
-   Open source Qwen: `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`
    
-   Available through the Responses API only. Models in the Hong Kong region are not supported.
    

## Prerequisites

1.  Get an [API key](/help/en/model-studio/get-api-key) and [configure it as an environment variable (to be deprecated)](/help/en/model-studio/configure-api-key-through-environment-variables).
    
2.  Create a knowledge base and obtain its ID using one of the following methods:
    
    -   **Console creation**: Create a knowledge base on the knowledge base page of the [Model Studio console](https://modelstudio.console.alibabacloud.com/#/knowledge-base). See [the detailed steps](/help/en/model-studio/rag-knowledge-base).
        
    -   **API creation**: Create a knowledge base using the SDK. See [Knowledge Base API guide](/help/en/model-studio/rag-knowledge-base-api-guide).
        
        > Document search and data query types are supported. Image responses are not supported.
        
    
    View the knowledge base ID on the knowledge base details page of the [console](https://modelstudio.console.alibabacloud.com/#/knowledge-base).
    

## Getting started

The code below invokes the knowledge retrieval tool using the Responses API, which queries the specified knowledge base and generates an answer.

> Replace `vector_store_ids` with your knowledge base ID.

Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable, use: api_key="sk-xxx" (not recommended).
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
)

response = client.responses.create(
    model="qwen3.5-plus",
    input="Introduce Bailian X1 phone",
    tools=[
        {
            "type": "file_search",
            # Replace with your knowledge base ID. Only one is supported currently.
            "vector_store_ids": ["your_knowledge_base_id"]
        }
    ]
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
    const response = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "Introduce Bailian X1 phone",
        tools: [
            {
                type: "file_search",
                // Replace with your knowledge base ID. Only one is supported currently.
                vector_store_ids: ["your_knowledge_base_id"]
            }
        ]
    });

    console.log("[Model Response]");
    console.log(response.output_text);

    const usage = response.usage;
    console.log(`\n[Token Usage] Input: ${usage.input_tokens}, Output: ${usage.output_tokens}, Total: ${usage.total_tokens}`);
}

main();
```

curl

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "Introduce Bailian X1 phone",
    "tools": [
        {
            "type": "file_search",
            "vector_store_ids": ["your_knowledge_base_id"]
        }
    ]
}'
```

Running the code above yields the following response:

```
[Model Response]
Based on the content in the knowledge base, the key product features include the following:

1. **Core features**: The product provides...
2. **Scenarios**: Applicable to...
3. **Technical attributes**: Based on...

...

[Token Usage] Input: 1568, Output: 1724, Total: 3292
```

## Streaming output

Knowledge retrieval performs semantic searches within the knowledge base, which may take time. Enable streaming for real-time intermediate results.

Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If no environment variable, use: api_key="sk-xxx" (not recommended).
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
)

stream = client.responses.create(
    model="qwen3.5-plus",
    input="Introduce Bailian X1 phone",
    tools=[
        {
            "type": "file_search",
            # Replace with your knowledge base ID. Only one is supported currently.
            "vector_store_ids": ["your_knowledge_base_id"]
        }
    ],
    stream=True
)

for event in stream:
    # Model response starts
    if event.type == "response.content_part.added":
        print("[Model Response]")
    # Stream print model response
    elif event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
    # Response complete, print Token usage
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
    const stream = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "Introduce Bailian X1 phone",
        tools: [
            {
                type: "file_search",
                // Replace with your knowledge base ID. Only one is supported currently.
                vector_store_ids: ["your_knowledge_base_id"]
            }
        ],
        stream: true
    });

    for await (const event of stream) {
        // Model response starts
        if (event.type === "response.content_part.added") {
            console.log("[Model Response]");
        }
        // Stream print model response
        else if (event.type === "response.output_text.delta") {
            process.stdout.write(event.delta);
        }
        // Response complete, print Token usage
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
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "Introduce the Alibaba Cloud Bailian X1 phone.",
    "tools": [
        {
            "type": "file_search",
            "vector_store_ids": ["your_knowledge_base_id"]
        }
    ],
    "stream": true
}'
```

## Parameters

`file_search` tool parameters:

**Parameter**

**Required**

**Description**

`type`

Yes

Must be `"file_search"`.

`vector_store_ids`

Yes

List of knowledge base IDs (only **one** currently supported). View the ID on the knowledge base details page of the [console](https://modelstudio.console.alibabacloud.com/#/knowledge-base) or obtain it during API creation.

## Billing

Billing includes:

-   Model call fees: Retrieved content is appended to the prompt, increasing input tokens. Billing follows standard model pricing (see [Model list](/help/en/model-studio/models)).
    
-   Tool calling fees: Knowledge base feature is currently free.
