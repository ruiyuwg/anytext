Text generation models create clear and coherent text based on input prompts.

Text generation models accept input ranging from keywords to complex instructions. Common uses:

-   **Content creation**: Generating news reports, product descriptions, and short video scripts.
    
-   **Customer service**: Powering chatbots to provide 24/7 support and answer common questions.
    
-   **Text translation**: Enabling fast and accurate cross-language conversion.
    
-   **Summary generation**: Extracting the core content from long articles, reports, and emails.
    
-   **Legal document drafting**: Generating basic frameworks for contract templates and legal opinions.
    

## **Model selection recommendations**

### **Service regions**

Alibaba Cloud Model Studio provides model services in the [Singapore](https://modelstudio.console.alibabacloud.com/?tab=doc#/doc/?type=model&url=2840914), [US (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=doc#/doc/?type=model&url=2840914), [China (Beijing)](https://bailian.console.alibabacloud.com/?tab=model#/model-market), [China (Hong Kong)](https://modelstudio.console.alibabacloud.com/cn-hongkong?tab=doc#/doc/?type=model&url=2840914), and [Germany (Frankfurt)](https://modelstudio.console.alibabacloud.com/eu-central-1?tab=doc#/doc/?type=model&url=2840914) regions. Each region requires a separate API key. Use a nearby region to reduce latency. For more information, see [Select a region and deployment mode](/help/en/model-studio/regions/).

### **General-purpose models**

Qwen text generation models are [OpenAI compatible](/help/en/model-studio/compatibility-of-openai-with-dashscope#28f6fd00cfp2q). They are suitable for intelligent customer service, text creation, content polishing, and summarization.

-   [Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): Balances performance, speed, and cost, making it the **recommended choice** for most scenarios.
    
    > Delivers strong performance in language understanding, logical reasoning, code generation, agent tasks, image/video understanding, and GUI interactions. Supports [tool calling](/help/en/model-studio/tool-calls/) and matches Qwen3-Max text capabilities.
    
-   [Qwen-Max](/help/en/model-studio/models#131ff25c87sj6): The best-performing model in the Qwen3 series, suitable for handling complex, multi-step tasks.
    
-   [Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): The fastest and most cost-effective model in the Qwen3 series, suitable for performing simple jobs.
    
-   **Open-source Qwen3.5:** `qwen3.5-397b-a17b`, `qwen3.5-122b-a10b`, `qwen3.5-27b`, `qwen3.5-35b-a3b`.
    

### **Scenario-specific models**

For specific business needs, Model Studio offers specialized and optimized models for [code](/help/en/model-studio/models#4f6fa69743l4j), [long context](/help/en/model-studio/models#af20ce1633zut), [translation](/help/en/model-studio/models#a794de0a15ajo), [data mining](/help/en/model-studio/models#55013b0caagpp), [intention recognition](/help/en/model-studio/models#4f2054106eh3l), [role-playing](/help/en/model-studio/models#269738a1dc6k1), and [deep search](/help/en/model-studio/models#250ba55f81j2k).

### **Multimodal models**

-   [Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty) (Text + Image/Video → Text): Qwen3.5-Plus supports visual and text inputs, delivering outstanding performance in language understanding, logical reasoning, code generation, agent tasks, image/video understanding, and GUI interactions, with significant visual reasoning improvements over the [Qwen-VL](/help/en/model-studio/models#5540e6e52e1xx) series.
    
-   [Qwen-Omni](/help/en/model-studio/models#d77d57d3436d2) (Omni-modal → Text + Audio): Supports various data inputs, including video, audio, images, and text, and generates text and speech outputs to handle complex cross-modality tasks.
    
-   [Speech recognition models](/help/en/model-studio/models#f79e90076dram) (Audio → Text): Recognize and transcribe speech from audio. They support languages such as Chinese (including various dialects such as Cantonese), English, Japanese, and Korean.
    

### **Third-party models**

Model Studio provides well-known third-party large language models, including [DeepSeek](/help/en/model-studio/kimi-api) and [Kimi](/help/en/model-studio/models#82d3721d122dy). For a complete list of models, see [Text generation – Third-party](/help/en/model-studio/models#e0c090751drei).

## Core concepts

The input for a text generation model is a prompt, which consists of one or more message objects. Each message has a role and content:

-   **System message**: Defines the model's role or behavior instructions. Default: "You are a helpful assistant".
    
-   **User message**: Question or instruction from the user.
    
-   **Assistant message**: Model's reply.
    

When calling the model, construct an array of these message objects named `messages`. A typical request consists of a `system` message that defines the code of conduct and a `user` message that provides the instruction.

> `system` message is optional, but it is recommended to set the model's role and behavior for more stable and consistent output.

```
[
    {"role": "system", "content": "You are a helpful assistant who provides accurate, efficient, and insightful responses. You are ready to help users with any task or question."},
    {"role": "user", "content": "Who are you?"}
]
```

The output response object contains the model's reply as an `assistant` message.

```
{
    "role": "assistant",
    "content": "Hello! I am Qwen, a large-scale language model developed by the Tongyi Lab of Alibaba Group. I can help you answer questions, create text, perform logical reasoning, and program. I can understand and generate multiple languages, and I support multi-turn conversations and complex task processing. If you need any help, just let me know!"}
}
```

## Getting started

Prerequisites: [Get an API key](/help/en/model-studio/get-api-key) and [set the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). To use the SDK, [install the OpenAI or DashScope SDK](/help/en/model-studio/install-sdk#8833b9274f4v8).

## OpenAI Compatible – Responses API

The Responses API is an evolution of the Chat Completions API. For usage notes, code examples, and migration guidance, see [OpenAI compatible - Responses](/help/en/model-studio/compatibility-with-openai-responses-api).

## Python

```
import os
from openai import OpenAI

try:
    client = OpenAI(
        # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
        # If you have not set an environment variable, replace the next line with your Model Studio API key: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # Configuration varies by region. Update the URL for your region.
        base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
    )

    response = client.responses.create(
        model="qwen3.5-plus", 
        input="Briefly introduce what you can do?"
    )

    print(response)
except Exception as e:
    print(f"Error message: {e}")
    print("See documentation: https://www.alibabacloud.com/help/zh/model-studio/error-code")
```

#### **Response**

The response includes these main fields:

-   `id`: The response ID.
    
-   `output`: The output list. Includes `reasoning` and `message`.
    
    > `reasoning` field appears only when [deep thinking](/help/en/model-studio/deep-thinking) is enabled (for example, it is enabled by default in the Qwen3.5 series).
    
-   `usage`: Token usage statistics.
    

The following is an example response. For the full response, see [curl](#responses-api-curl-h2).

```
Hello! I'm an AI assistant with knowledge current up to 2026. Here's a brief overview of what I can do:

*   **Content Creation:** Write emails, articles, stories, scripts, and more.
*   **Coding & Tech:** Generate, debug, and explain code across various programming languages.
*   **Analysis & Summarization:** Process documents, interpret data, and extract key insights.
*   **Problem Solving:** Assist with math, logic, reasoning, and strategic planning.
*   **Learning & Translation:** Explain complex topics simply or translate between multiple languages.

Feel free to ask me anything or give me a task to get started!
```

## Node.js

```
// Requires Node.js v18+. Run in an ES Module environment.
import OpenAI from "openai";

const openai = new OpenAI({
    // API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    // If you have not set an environment variable, replace the next line with your Model Studio API key: apiKey: "sk-xxx",
    apiKey: process.env.DASHSCOPE_API_KEY,
    // Configuration varies by region. Update the URL for your region.
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
    try {
        const response = await openai.responses.create({
            model: "qwen3.5-plus",
            input: "Briefly introduce what you can do?"
        });

        // Get model response
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
```

### **Response**

The response includes these main fields:

-   `id`: The response ID.
    
-   `output`: The output list. Includes `reasoning` and `message`.
    
    > `reasoning` field appears only when [deep thinking](/help/en/model-studio/deep-thinking) is enabled (for example, it is enabled by default in the Qwen3.5 series).
    
-   `usage`: Token usage statistics.
    

The following is an example response. For the full response, see [curl](#responses-api-curl-h2).

```
Hello! I'm an AI assistant with knowledge current up to 2026. Here's a brief overview of what I can do:

*   **Content Creation:** Write emails, articles, stories, scripts, and more.
*   **Coding & Tech:** Generate, debug, and explain code across various programming languages.
*   **Analysis & Summarization:** Process documents, interpret data, and extract key insights.
*   **Problem Solving:** Assist with math, logic, reasoning, and strategic planning.
*   **Learning & Translation:** Explain complex topics simply or translate between multiple languages.

Feel free to ask me anything or give me a task to get started!
```

## curl

```
# Configuration varies by region. Update the URL for your region.
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "input": "Briefly introduce what you can do?",
    "enable_thinking": true
}'
```

#### **Response**

```
{
    "created_at": 1772249518,
    "id": "7ad48c6b-3cc4-904f-9284-5f419c6c5xxx",
    "model": "qwen3.5-plus",
    "object": "response",
    "output": [
        {
            "id": "msg_94805179-2801-45da-ac1c-a87e8ea20xxx",
            "summary": [
                {
                    "text": "Okay, the user is asking me to briefly introduce what I can do. Let me start by recalling the capabilities listed in the system message. I need to make sure I cover the main points without getting too detailed.\n\nFirst, I should mention my enhanced language foundation and architecture efficiency. Then, the upgraded logical reasoning and mathematical capabilities. Visual analysis is another key point, including charts and formulas. Autonomous agent planning and code generation are important too. Human alignment optimization for better interaction, long-context handling up to 256K, and multilingual support with OCR.\n\nWait, the user said \"briefly,\" so I need to keep it concise. Maybe group some points together. Let me check the examples given in the system message. They have sections like Enhanced Language Foundation, Advanced Logical Reasoning, etc. But since it's a brief intro, I should summarize each capability in a sentence or two.\n\nAlso, the user might be looking for practical applications. Maybe highlight how these features help in real tasks. For example, handling long documents, solving math problems, analyzing images, writing code, etc.\n\nI should avoid technical jargon where possible. Make it clear and straightforward. Let me structure it as a list of key capabilities with short explanations. Start with a greeting, then list the main points, and end with an offer to help with specific tasks.\n\nWait, the system message says \"You are Qwen3.5,\" so I need to introduce myself as such. But the user just asked what I can do, so maybe start with \"I'm Qwen3.5...\" and then list the capabilities.\n\nCheck if all the upgraded features from Qwen3 to Qwen3.5 are covered. The main upgrades are in language foundation, reasoning, visual analysis, agent planning, code, alignment, context length, and multilingual OCR.\n\nMake sure not to mention the knowledge cutoff unless relevant. The user's current time is 2026, but since my knowledge is up to 2026, that's covered.\n\nOkay, let me draft a concise response highlighting each capability briefly. Keep it friendly and inviting for the user to ask for specific help.\n",
                    "type": "summary_text"
                }
            ],
            "type": "reasoning"
        },
        {
            "content": [
                {
                    "annotations": [],
                    "text": "I'm **Qwen3.5**, a large language model designed to assist with a wide range of tasks. Here's what I can do:  \n\n- **Understand & Generate Text**: Handle complex instructions, creative writing, and multi-step tasks with improved accuracy.  \n- **Solve Problems**: Tackle advanced math, logic puzzles, and scientific reasoning with step-by-step clarity.  \n- **Analyze Visuals**: Interpret charts, diagrams, formulas, and even extract text from images (OCR).  \n- **Plan & Execute**: Break down goals into actionable steps, run code, or interact with tools autonomously.  \n- **Code & Debug**: Write, explain, or fix code in multiple programming languages.  \n- **Long-Context Mastery**: Process documents, books, or videos up to **256K tokens** without losing key details.  \n- **Multilingual Support**: Communicate fluently in **100+ languages**, including low-resource ones.  \n\nNeed help with something specific? Just ask!",
                    "type": "output_text"
                }
            ],
            "id": "msg_35be06c6-ca4d-4f2b-9677-7897e488dxxx",
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
        "input_tokens": 54,
        "input_tokens_details": {
            "cached_tokens": 0
        },
        "output_tokens": 662,
        "output_tokens_details": {
            "reasoning_tokens": 447
        },
        "total_tokens": 716,
        "x_details": [
            {
                "input_tokens": 54,
                "output_tokens": 662,
                "output_tokens_details": {
                    "reasoning_tokens": 447
                },
                "total_tokens": 716,
                "x_billing_type": "response_api"
            }
        ]
    }
}
```

## OpenAI Compatible – Chat Completions API

## Python

```
import os
from openai import OpenAI

try:
    client = OpenAI(
        # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
        # If you have not set an environment variable, replace the next line with your Model Studio API key: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # Configuration varies by region. Update the URL for your region.
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    )

    completion = client.chat.completions.create(
        model="qwen3.5-plus",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who are you?"},
        ],
    )
    print(completion.choices[0].message.content)
except Exception as e:
    print(f"Error message: {e}")
    print("See documentation: https://www.alibabacloud.com/help/zh/model-studio/error-code")
```

#### **Response**

```
I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!
```

## Node.js

```
// Requires Node.js v18+. Run in an ES Module environment.
import OpenAI from "openai";

const openai = new OpenAI(
    {
        // API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
        // If you have not set an environment variable, replace the next line with: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // Configuration varies by region. Update the URL for your region.
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"

    }
);
const completion = await openai.chat.completions.create({
    model: "qwen3.5-plus",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Who are you?" }
    ],
});
console.log(completion.choices[0].message.content);
```

#### **Response**

```
I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!
```

## curl

Base URLs and API keys differ by region. For more information, see [OpenAI Chat](/help/en/model-studio/qwen-api-via-openai-chat-completions) and [Get an API key](/help/en/model-studio/get-api-key).

```
# Configuration varies by region. Update the URL for your region.
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3.5-plus",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user", 
            "content": "Who are you?"
        }
    ]
}'
```

#### **Response**

```
{
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!"
            },
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null
        }
    ],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 26,
        "completion_tokens": 66,
        "total_tokens": 92
    },
    "created": 1726127645,
    "system_fingerprint": null,
    "model": "qwen3.5-plus",
    "id": "chatcmpl-81951b98-28b8-9659-ab07-xxxxxx"
}
```

## DashScope

**Important**

The DashScope API for the Qwen3.5 series uses a multimodal interface. The following examples will return a `url error`. For correct usage, see [Image and video processing](#270b260cb6or2).

## Python

```
import json
import os
from dashscope import Generation
import dashscope

# Configuration varies by region. Update the URL for your region.
dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1"

messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Who are you?"},
]
response = Generation.call(
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    # If you have not set an environment variable, replace the next line with: api_key = "sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The Qwen3.5 series uses a multimodal interface. Simply replacing the model will cause an error
    model="qwen-plus",
    messages=messages,
    result_format="message",
)

if response.status_code == 200:
    print(response.output.choices[0].message.content)
else:
    print(f"HTTP status code: {response.status_code}")
    print(f"Error code: {response.code}")
    print(f"Error message: {response.message}")
    print("See documentation: https://www.alibabacloud.com/help/zh/model-studio/error-code")
```

#### **Response**

```
I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!
```

## Node.js (HTTP)

```
// Requires Node.js v18+
// If you have not set an environment variable, replace the next line with: const apiKey = "sk-xxx";
const apiKey = process.env.DASHSCOPE_API_KEY;

const data = {
    // The Qwen3.5 series uses a multimodal interface. Simply replacing the model will cause an error
    model: "qwen-plus",
    input: {
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant."
            },
            {
                role: "user",
                content: "Who are you?"
            }
        ]
    },
    parameters: {
        result_format: "message"
    }
};

async function callApi() {
    try {
            // Configuration varies by region. Update the URL for your region.
            const response = await fetch('https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result.output.choices[0].message.content);
    } catch (error) {
        // For more error info, see: https://www.alibabacloud.com/help/zh/model-studio/error-code
        console.error('Call failed:', error.message);
    }
}

callApi();
```

#### **Response**

```
I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!
```

## Go (HTTP)

```
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

func main() {
	requestBody := map[string]interface{}{
		// The Qwen3.5 series uses a multimodal interface. Simply replacing the model will cause an error
		"model": "qwen-plus",
		"input": map[string]interface{}{
			"messages": []map[string]string{
				{
					"role":    "system",
					"content": "You are a helpful assistant.",
				},
				{
					"role":    "user",
					"content": "Who are you?",
				},
			},
		},
		"parameters": map[string]string{
			"result_format": "message",
		},
	}

	// Serialize to JSON
	jsonData, _ := json.Marshal(requestBody)

	// Create HTTP client and request
	client := &http.Client{}
	// Configuration varies by region. Update the URL for your region.
	req, _ := http.NewRequest("POST", "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation", bytes.NewBuffer(jsonData))

	// Set request headers
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	// Send request
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	// Read response body
	bodyText, _ := io.ReadAll(resp.Body)

	// Parse JSON and output content
	var result map[string]interface{}
	json.Unmarshal(bodyText, &result)
	content := result["output"].(map[string]interface{})["choices"].([]interface{})[0].(map[string]interface{})["message"].(map[string]interface{})["content"].(string)
	fmt.Println(content)
}
```

#### **Response**

```
I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!
```

## curl

Base URLs and API keys differ by region. For more information, see [DashScope](/help/en/model-studio/qwen-api-via-dashscope) and [Get an API key](/help/en/model-studio/get-api-key).

```
# Configuration varies by region. Update the URL for your region.
curl --location "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-plus",
    "input":{
        "messages":[      
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Who are you?"
            }
        ]
    },
    "parameters": {
        "result_format": "message"
    }
}'
```

#### **Response**

```
{
    "output": {
        "choices": [
            {
                "finish_reason": "stop",
                "message": {
                    "role": "assistant",
                    "content": "I'm Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can help you answer questions, create text, write stories, official documents, emails, scripts, do logical reasoning, code, express opinions, play games, and more. If you have any questions or need help, feel free to ask!"
                }
            }
        ]
    },
    "usage": {
        "total_tokens": 92,
        "output_tokens": 66,
        "input_tokens": 26
    },
    "request_id": "09dceb20-ae2e-999b-85f9-xxxxxx"
}
```

## **Image and video processing**

Multimodal models accept non-text data such as images and videos and support tasks such as visual question answering and event detection. Their usage differs from text-only models in two main ways:

-   **How to construct user messages**: User messages for multimodal models include text along with images, audio, or other modalities.
    
-   **DashScope SDK interfaces**: When using the DashScope Python SDK, call the `MultiModalConversation` interface. When using the DashScope Java SDK, call the `MultiModalConversation` class.
    

> For image and video file limits, see [Image and video understanding](/help/en/model-studio/vision#430cb5ea4cety).

## OpenAI Compatible – Chat Completions API

## Python

```
from openai import OpenAI
import os

client = OpenAI(
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/model-studio/get-api-key
    # If you have not set an environment variable, replace the line below with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Configuration varies by region. Update the URL for your region.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)
messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "image_url",
                "image_url": {
                    "url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"
                },
            },
            {"type": "text", "text": "What products are shown in the image?"},
        ],
    }
]
completion = client.chat.completions.create(
    model="qwen3.5-plus",  
    messages=messages,
)
print(completion.choices[0].message.content)
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI(
    {
        // API keys differ by region. Get your API key: https://www.alibabacloud.com/help/model-studio/get-api-key
        // If you have not set an environment variable, replace the line below with: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // Configuration varies by region. Update the URL for your region.
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);

let messages = [
    {
        role: "user",
        content: [
            { type: "image_url", image_url: { "url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png" } },
            { type: "text", text: "What products are shown in the image?" },
        ]
    }]
async function main() {
    let response = await openai.chat.completions.create({
        model: "qwen3.5-plus",   // Replace with another multimodal model as needed, and update the messages accordingly
        messages: messages
    });
    console.log(response.choices[0].message.content);
}

main()
```

## curl

Base URLs and API keys differ by region. For more information, see [OpenAI Chat](/help/en/model-studio/qwen-api-via-openai-chat-completions) and [Get an API key](/help/en/model-studio/get-api-key).

```
# Configuration varies by region. Update the URL for your region.
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
  "model": "qwen3.5-plus",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"
          }
        },
        {
          "type": "text",
          "text": "What products are shown in the image?"
        }
      ]
    }
  ]
}'
```

## DashScope

## Python

```
import os
from dashscope import MultiModalConversation
import dashscope
# Configuration varies by region. Update the URL for your region.
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

messages = [
    {
        "role": "user",
        "content": [
            {
                "image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"
            },
            {"text": "What products are shown in the image?"},
        ],
    }
]
response = MultiModalConversation.call(
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/model-studio/get-api-key
    # If you have not set an environment variable, replace the line below with: api_key="sk-xxx",
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model='qwen3.5-plus',  
    messages=messages
)

print(response.output.choices[0].message.content[0]['text'])
```

## curl

Base URLs and API keys differ by region. For more information, see [DashScope](/help/en/model-studio/qwen-api-via-dashscope) and [Get an API key](/help/en/model-studio/get-api-key).

```
# Configuration varies by region. Update the URL for your region.
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "qwen3.5-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"},
                    {"text": "What products are shown in the image?"}
                ]
            }
        ]
    }
}'
```

## **Asynchronous**

Asynchronous APIs improve throughput for high-concurrency requests.

## OpenAI Compatible – Chat Completions API

## Python

```
import os
import asyncio
from openai import AsyncOpenAI
import platform

# Create an asynchronous client instance
client = AsyncOpenAI(
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/model-studio/get-api-key
    # If you have not set an environment variable, replace the line below with: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # Configuration varies by region. Update the URL for your region.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

# Define an asynchronous task list
async def task(question):
    print(f"Send question: {question}")
    response = await client.chat.completions.create(
        messages=[
            {"role": "user", "content": question}
        ],
        model="qwen-plus",  
    )
    print(f"Model response: {response.choices[0].message.content}")

# Main asynchronous function
async def main():
    questions = ["Who are you?", "What can you do?", "What is the weather like?"]
    tasks = [task(q) for q in questions]
    await asyncio.gather(*tasks)

if __name__ == '__main__':
    # Set event loop policy
    if platform.system() == 'Windows':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    # Run the main coroutine
    asyncio.run(main(), debug=False)
    
```

## DashScope

The DashScope SDK supports asynchronous text generation calls only in Python.

```
# DashScope Python SDK version must be at least 1.19.0
import asyncio
import platform
from dashscope.aigc.generation import AioGeneration
import os
import dashscope
# Configuration varies by region. Update the URL for your region.
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

# Define an asynchronous task list
async def task(question):
    print(f"Send question: {question}")
    response = await AioGeneration.call(
        # If you have not set an environment variable, replace the line below with: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        model="qwen-plus",  
        messages=[{"role": "system", "content": "You are a helpful assistant."},
                  {"role": "user", "content": question}],
        result_format="message",
    )
    print(f"Model response: {response.output.choices[0].message.content}")

# Main asynchronous function
async def main():
    questions = ["Who are you?", "What can you do?", "What is the weather like?"]
    tasks = [task(q) for q in questions]
    await asyncio.gather(*tasks)

if __name__ == '__main__':
    # Set event loop policy
    if platform.system() == 'Windows':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    # Run the main coroutine
    asyncio.run(main(), debug=False)
```

**Response**

> Because the call is asynchronous, the order of the responses may differ from the example.

```
Send question: Who are you?
Send question: What can you do?
Send question: What is the weather like?
Model response: Hello! I am Qwen, a large language model developed by Tongyi Lab at Alibaba Group. I can answer questions, create text such as stories, official documents, emails, scripts, logical reasoning, and code. I can also express opinions and play games. If you have any questions or need help, feel free to ask!
Model response: I cannot access real-time weather information. Please tell me your city or region, and I will try to provide general weather advice. Or check a weather app for live conditions.
Model response: I have many skills, such as:

1. **Answer questions**: I can help with academic, everyday, or professional questions.
2. **Create text**: I can write stories, official documents, emails, scripts, and more.
3. **Logical reasoning**: I can solve math problems, riddles, and logic puzzles.
4. **Programming**: I can help write, debug, and optimize code.
5. **Multilingual support**: I support Chinese, English, French, Spanish, and more.
6. **Express opinions**: I can provide views and suggestions to help you decide.
7. **Play games**: We can play word games like riddles or idiom chains.

Let me know if you need help with anything specific!
```

## Going live

### **Build high-quality context**

Raw data fed directly to models increases costs and reduces quality. Context engineering improves both by dynamically loading precise knowledge:

-   **Prompt engineering**: Design and refine text instructions to guide the model toward desired outputs. For more information, see [Text-to-text prompt guide](/help/en/model-studio/prompt-engineering-guide)
    
-   [Retrieval-augmented generation (RAG)](/help/en/model-studio/rag-knowledge-base): Use when the model must answer questions using external knowledge bases like product documentation or technical manuals.
    
-   [Tool calling](/help/en/model-studio/tool-calls/): Allows the model to fetch real-time data, such as weather or traffic, or perform actions, such as calling an API or sending an email.
    
-   **Memory mechanisms**: Provide the model with short-term and long-term memory to understand conversation history.
    

### **Control response diversity**

The `temperature` and `top_p` parameters control text diversity. Higher values increase diversity; lower values increase predictability. When testing, adjust only one parameter at a time.

-   `**temperature**`: A value in the range of \[0, 2) that adjusts randomness.
    
-   `**top_p**`: A value in the range of \[0, 1\] that filters responses by a probability threshold.
    

The following examples show how different settings affect the output. The prompt is: "Write a three-sentence story starring a cat and a sunbeam."

-   **High diversity** (`temperature`\=0.9): Use for creative writing, brainstorming, or marketing copy where novelty matters.
    
    ```
    Sunlight sliced through the window, and the ginger cat crept toward the glowing square, its fur instantly gilded like molten honey.  
    It tapped the light with a paw, sinking into warmth as if stepping into a sunlit pool, and the golden tide flowed up its spine.  
    The afternoon grew heavy—the cat curled in liquid gold, hearing time melt softly in its purr.
    ```
    
-   **High predictability** (`temperature`\=0.1): Use for factual Q&A, code generation, or legal text where accuracy and consistency are critical.
    
    ```
    An old cat napped on the windowsill, counting sunbeams.  
    The sunlight hopped across its mottled back like pages turning in an old photo album.  
    Dust rose and settled, whispering: you were young once, and I burned bright.
    ```
    

**How it works**

**temperature**: Controls randomness by adjusting the probability distribution. Higher values flatten the distribution (more randomness). Lower values sharpen it (more predictability).

**top\_p**: Selects from the smallest set of tokens whose cumulative probability exceeds a threshold. Higher values consider more tokens (more diversity). Lower values consider fewer tokens (more focus).

**Parameter settings for common scenarios**

```
# Recommended parameter settings for different scenarios
SCENARIO_CONFIGS = {
    # Creative writing
    "creative_writing": {
        "temperature": 0.9,
        "top_p": 0.95
    },
    # Code generation
    "code_generation": {
        "temperature": 0.2,
        "top_p": 0.8
    },
    # Factual Q&A
    "factual_qa": {
        "temperature": 0.1,
        "top_p": 0.7
    },
    # Translation
    "translation": {
        "temperature": 0.3,
        "top_p": 0.8
    }
}

# OpenAI usage example
# completion = client.chat.completions.create(
#     model="qwen-plus",
#     messages=[{"role": "user", "content": "Write a poem about the moon"}],
#     **SCENARIO_CONFIGS["creative_writing"]
# )
# DashScope usage example
# response = Generation.call(
#     # If you have not set an environment variable, replace the line below with: api_key = "sk-xxx",
#     api_key=os.getenv("DASHSCOPE_API_KEY"),
#     model="qwen-plus",
#     messages=[{"role": "user", "content": "Write a Python function that checks if input n is prime. Output only code."}],
#     result_format="message",
#     **SCENARIO_CONFIGS["code_generation"]
# )
```

### **Other features**

For advanced scenarios:

-   [Multi-turn conversations](/help/en/model-studio/multi-round-conversation): Use for follow-up questions or information gathering requiring continuous dialogue.
    
-   [Streaming output](/help/en/model-studio/stream): Use for chatbots or real-time code generation to improve user experience and avoid timeouts from long responses.
    
-   [Deep thinking](/help/en/model-studio/deep-thinking): Use for complex reasoning or policy analysis requiring high-quality, structured answers.
    
-   [Structured output](/help/en/model-studio/qwen-structured-output): Use when the model must reply in stable JSON format for programmatic use or data parsing.
    
-   [Partial mode](/help/en/model-studio/partial-mode): Use for code completion or long-form writing where the model continues from existing text.
    

## API reference

For a complete list of model invocation parameters, see [OpenAI Compatible API Reference](/help/en/model-studio/qwen-api-reference/#d397bcc41eu3q) and [DashScope API Reference](/help/en/model-studio/qwen-api-reference/#69cac67a477k2).

## **FAQ**

### **Q: Why can't the Qwen API analyze web links?**

A: The Qwen API cannot access web links. Use [Function calling](/help/en/model-studio/qwen-function-calling), or web scraping tools (like Beautiful Soup) to read webpage content.

### **Q: Why do responses from the** [**Qwen web app**](https://tongyi.aliyun.com/qianwen/) **differ from those of the Qwen API?**

A: The Qwen web app includes engineering optimizations beyond the API, enabling webpage parsing, web search, image drawing, and PPT creation. These capabilities aren't part of the core large language model API. Replicate them using [Function calling](/help/en/model-studio/qwen-function-calling) to enhance model performance.

### **Q: Can the model directly generate Word, Excel, PDF, or PPT files?**

A: No. Model Studio text generation models output only plain text. Convert text to your desired format using code, third-party libraries.
