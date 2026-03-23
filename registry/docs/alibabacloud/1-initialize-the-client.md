For scenarios like code completion and text continuation, you can generate new content starting from an existing text fragment (prefix). Partial Mode ensures the model's output connects seamlessly with your prefix for improved accuracy and control.

## **How it works**

To use Partial Mode, configure the `messages` array. In the last message of the array, set the `role` to `assistant` and provide the prefix in the `content` field. You must also set the `"partial": true` parameter in that message. The `messages` format is as follows:

```
[
    {
        "role": "user",
        "content": "Complete this Fibonacci function. Do not add anything else."
    },
    {
        "role": "assistant",
        "content": "def calculate_fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n",
        "partial": true
    }
]
```

The model then starts generating text from the specified prefix.

## **Supported models**

-   **Qwen-Max series**
    
    qwen3-max, qwen3-max-2025-09-23, qwen3-max-preview (non-thinking mode), qwen-max, qwen-max-latest, qwen-max-2025-01-25, and later snapshots
    
-   **Qwen-Plus series (non-thinking mode)**
    
    qwen3.5-plus, qwen3.5-plus-2026-02-15 and later snapshots, qwen-plus, qwen-plus-latest, qwen-plus-2025-01-25, and later snapshots
    
-   **Qwen-Flash series (non-thinking mode)**
    
    qwen3.5-flash, qwen3.5-flash-2026-02-23 and later snapshots, qwen-flash, qwen-flash-2025-07-28
    
-   **Qwen-Coder series**
    
    qwen3-coder-plus, qwen3-coder-flash, qwen3-coder-480b-a35b-instruct, qwen3-coder-30b-a3b-instruct
    
-   **Qwen-VL series**
    
    -   **qwen3-vl-plus series (non-thinking mode)**
        
        qwen3-vl-plus, qwen3-vl-plus-2025-09-23, and later snapshots
        
    -   **qwen3-vl-flash series (non-thinking mode)**
        
        qwen3-vl-flash, qwen3-vl-flash-2025-10-15, and later snapshots
        
    -   **qwen-vl-max series**
        
        qwen-vl-max, qwen-vl-max-latest, qwen-vl-max-2025-04-08, and later snapshots
        
    -   **qwen-vl-plus series**
        
        qwen-vl-plus, qwen-vl-plus-latest, qwen-vl-plus-2025-01-25, and later snapshots
        
-   **Qwen-Turbo series (non-thinking mode)**
    
    qwen-turbo, qwen-turbo-latest, qwen-turbo-2024-11-01, and later snapshots
    
-   **Qwen open source series**
    
    qwen3.5-397b-a17b, qwen3.5-122b-a10b, qwen3.5-27b, qwen3.5-35b-a3b (non-thinking mode), Qwen3 open source models (non-thinking mode), Qwen2.5 text models, Qwen3-VL open source models (non-thinking mode)
    

**Important**

The thinking mode model currently does not support the prefix continuation feature.

## **Getting Started**

### **Prerequisites**

Before you begin, [get an API key](/help/en/model-studio/get-api-key) and [set the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). If you call the service using the OpenAI SDK or DashScope SDK, you must [install the SDK](/help/en/model-studio/install-sdk#210ee28162bs7). If you are a member of a sub-workspace, ensure that the super administrator has [granted model access to your workspace](/help/en/model-studio/model-authentication-instructions).

**Note**

The DashScope Java SDK is not supported.

### **Sample code**

Code completion is the core use case for Partial Mode. The following example shows how to use the `qwen3-coder-plus` model to complete a Python function.

## OpenAI compatible

## Python

```
import os
from openai import OpenAI

# 1. Initialize the client
client = OpenAI(
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    # If not set in environment, replace here with your API key
    api_key=os.getenv("DASHSCOPE_API_KEY"), 
    # For Beijing region use: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)
# 2. Define the code prefix to complete
prefix = """def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
"""

# 3. Make a Partial Mode request
# Note: The last message in the messages array must have role "assistant" and include "partial": True
completion = client.chat.completions.create(
    model="qwen3-coder-plus",
    messages=[
        {"role": "user", "content": "Complete this Fibonacci function. Do not add anything else."},
        {"role": "assistant", "content": prefix, "partial": True},
    ],
)

# 4. Manually join the prefix and the model's generated content
generated_code = completion.choices[0].message.content
complete_code = prefix + generated_code

print(complete_code)
```

### **Response**

```
def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    // If not set in environment, replace the next line with: apiKey: "sk-xxx"
    apiKey: process.env.DASHSCOPE_API_KEY,
    // For Beijing region use: https://dashscope.aliyuncs.com/compatible-mode/v1
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

// Define the code prefix to complete
const prefix = `def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
`;

const completion = await openai.chat.completions.create({
    model: "qwen3-coder-plus",  // Use a code model
    messages: [
        { role: "user", content: "Complete this Fibonacci function. Do not add anything else." },
        { role: "assistant", content: prefix, partial: true }
    ],
});

// Manually join the prefix and the model's generated content
const generatedCode = completion.choices[0].message.content;
const completeCode = prefix + generatedCode;

console.log(completeCode);
```

## curl

```
# ======= Important notice =======
# API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# For Beijing region use: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# === Remove this comment before running ===

curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3-coder-plus",
    "messages": [
        {
            "role": "user", 
            "content": "Complete this Fibonacci function. Do not add anything else."
        },
        {
            "role": "assistant",
            "content": "def calculate_fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n",
            "partial": true
        }
    ]
}'
```

### **Response**

```
{
    "choices": [
        {
            "message": {
                "content": "        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)",
                "role": "assistant"
            },
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null
        }
    ],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 48,
        "completion_tokens": 19,
        "total_tokens": 67,
        "prompt_tokens_details": {
            "cache_type": "implicit",
            "cached_tokens": 0
        }
    },
    "created": 1756800231,
    "system_fingerprint": null,
    "model": "qwen3-coder-plus",
    "id": "chatcmpl-d103b1cf-4bda-942f-92d6-d7ecabfeeccb"
}
```

## DashScope

## Python

```
import os
import dashscope

# If you use a model in the Beijing region, replace the URL with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

# Define the code prefix to be completed
prefix = """def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
"""

messages = [
    {
        "role": "user", 
        "content": "Complete this Fibonacci function. Do not add any other content."
    },
    {
        "role": "assistant",
        "content": prefix,
        "partial": True
    }
]

response = dashscope.Generation.call(
    # The API key varies by region. To obtain an API key, visit: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    # If the environment variable is not configured, replace the following line with api_key="sk-xxx", and use your Alibaba Cloud Model Studio API key.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    model='qwen3-coder-plus',  # Use a code model
    messages=messages,
    result_format='message',  
)

# Manually concatenate the prefix and the content generated by the model
generated_code = response.output.choices[0].message.content
complete_code = prefix + generated_code

print(complete_code)
```

### **Response**

```
def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)
```

## curl

```
# ======= Important notice =======
# API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# For Beijing region use: https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation
# === Remove this comment before running ===

curl -X POST "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen3-coder-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": "Complete this Fibonacci function. Do not add anything else."
            },
            {
                "role": "assistant",
                "content": "def calculate_fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n",
                "partial": true
            }
        ]
    },
    "parameters": {
        "result_format": "message"
    }
}'
```

### **Response**

```
{
    "output": {
        "choices": [
            {
                "message": {
                    "content": "        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)",
                    "role": "assistant"
                },
                "finish_reason": "stop"
            }
        ]
    },
    "usage": {
        "total_tokens": 67,
        "output_tokens": 19,
        "input_tokens": 48,
        "prompt_tokens_details": {
            "cached_tokens": 0
        }
    },
    "request_id": "c61c62e5-cf97-90bc-a4ee-50e5e117b93f"
}
```

## **Use cases**

### **Pass images or videos**

Qwen-VL models support Partial Mode with image or video data, which is useful for scenarios such as product descriptions, social posts, news articles, and creative copywriting.

## OpenAI compatible

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If not set in environment, replace the next line with: api_key="sk-xxx",
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # For Beijing region use: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

completion = client.chat.completions.create(
    model="qwen3-vl-plus",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://img.alicdn.com/imgextra/i3/O1CN01zFX2Bs1Q0f9pESgPC_!!6000000001914-2-tps-450-450.png"
                    },
                },
                {"type": "text", "text": "I want to post this on social media. Help me write a caption."},
            ],
        },
        {
            "role": "assistant",
            "content": "Today I discovered a hidden-gem café",
            "partial": True,
        },
    ],
)
print(completion.choices[0].message.content)
```

### **Response**

```
— the tiramisu here is pure bliss! Every bite delivers perfect harmony between coffee and cream. Pure joy! #FoodShare #Tiramisu #CoffeeTime

Hope you like this caption! Let me know if you need any changes.
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
  // API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
  // If you have not set the environment variable, replace the next line with: apiKey: "sk-xxx"
  apiKey: process.env.DASHSCOPE_API_KEY,
  // For Beijing region models, replace baseURL with: https://dashscope.aliyuncs.com/compatible-mode/v1
  baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

async function main() {
    const response = await openai.chat.completions.create({
        model: "qwen3-vl-plus",  
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "image_url",
                        image_url: {
                            "url": "https://img.alicdn.com/imgextra/i3/O1CN01zFX2Bs1Q0f9pESgPC_!!6000000001914-2-tps-450-450.png"
                        }
                    },
                    {
                        type: "text",
                        text: "I want to post this on social media. Help me write a caption."
                    }
                ]
            },
            {
                role: "assistant",
                content: "Today I discovered a hidden-gem café",
                "partial": true
            }
        ]
    });
    console.log(response.choices[0].message.content);
}

main();
```

## curl

```
# ======= Important notice =======
# For Beijing region models, replace base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# === Remove this comment before running ===

curl -X POST 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions' \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
  "model": "qwen3-vl-plus",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "https://img.alicdn.com/imgextra/i3/O1CN01zFX2Bs1Q0f9pESgPC_!!6000000001914-2-tps-450-450.png"
          }
        },
        {
          "type": "text",
          "text": "I want to post this on social media. Help me write a caption."
        }
      ]
    },
    {
      "role": "assistant",
      "content": "Today I discovered a hidden-gem café",
      "partial": true
    }
  ]
}'
```

### **Response**

```
{
    "choices": [
        {
            "message": {
                "content": "— the tiramisu here is pure bliss! Every bite delivers perfect harmony between coffee and cream. Pure joy! #FoodShare #Tiramisu #CoffeeTime\n\nHope you like this caption! Let me know if you need any changes.",
                "role": "assistant"
            },
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null
        }
    ],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 282,
        "completion_tokens": 56,
        "total_tokens": 338,
        "prompt_tokens_details": {
            "cached_tokens": 0
        }
    },
    "created": 1756802933,
    "system_fingerprint": null,
    "model": "qwen3-vl-plus",
    "id": "chatcmpl-5780cbb7-ebae-9c63-b098-f8cc49e321f0"
}
```

## DashScope

## Python

```
import os
import dashscope

# For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

messages = [
    {
        "role": "user",
        "content": [
            {
                "image": "https://img.alicdn.com/imgextra/i3/O1CN01zFX2Bs1Q0f9pESgPC_!!6000000001914-2-tps-450-450.png"
            },
            {"text": "I want to post this on social media. Help me write a caption."},
        ],
    },
    {"role": "assistant", "content": "Today I discovered a hidden-gem café", "partial": True},
]

response = dashscope.MultiModalConversation.call(
    # If you have not set the environment variable, replace the next line with: api_key ="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"), 
    model="qwen3-vl-plus", 
    messages=messages
)

print(response.output.choices[0].message.content[0]["text"])
```

### **Response**

```
— the tiramisu here is pure bliss! Every bite delivers perfect harmony between coffee and cream. Pure joy! #FoodShare #Tiramisu #CoffeeTime

Hope you like this caption! Let me know if you need any changes.
```

## curl

```
# ======= Important notice =======
# For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# === Remove this comment before running ===

curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "qwen3-vl-plus",
    "input":{
        "messages":[
            {"role": "user",
             "content": [
               {"image": "https://img.alicdn.com/imgextra/i3/O1CN01zFX2Bs1Q0f9pESgPC_!!6000000001914-2-tps-450-450.png"},
               {"text": "I want to post this on social media. Help me write a caption."}]
            },
            {"role": "assistant",
             "content": "Today I discovered a hidden-gem café",
             "partial": true
            }
        ]
    }
}'
```

### **Response**

```
{
    "output": {
        "choices": [
            {
                "message": {
                    "content": [
                        {
                            "text": "— the tiramisu here is pure bliss! Every bite delivers perfect harmony between coffee and cream. Pure joy! #FoodShare #Tiramisu #CoffeeTime\n\nHope you like this caption! Let me know if you need any changes."
                        }
                    ],
                    "role": "assistant"
                },
                "finish_reason": "stop"
            }
        ]
    },
    "usage": {
        "total_tokens": 339,
        "input_tokens_details": {
            "image_tokens": 258,
            "text_tokens": 24
        },
        "output_tokens": 57,
        "input_tokens": 282,
        "output_tokens_details": {
            "text_tokens": 57
        },
        "image_tokens": 258
    },
    "request_id": "c741328c-23dc-9286-bfa7-626a4092ca09"
}
```

### **Continue from incomplete output**

If the `max_tokens` value is too small, the LLM may return incomplete content. Use Partial Mode to continue from that point and ensure the output is semantically complete.

## OpenAI compatible

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    # If not set in environment, replace here with your API key
    api_key=os.getenv("DASHSCOPE_API_KEY"), 
    # For Beijing region use: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)

def chat_completion(messages,max_tokens=None):
    response = client.chat.completions.create(
        model="qwen-plus",
        messages=messages,
        max_tokens=max_tokens
    )
    print(f"### Reason generation stopped: {response.choices[0].finish_reason}")
    
    return response.choices[0].message.content

# Example usage
messages = [{"role": "user", "content": "Write a short sci-fi story"}]

# First call with max_tokens set to 40
first_content = chat_completion(messages, max_tokens=40)
print(first_content)
# Add the first response as an assistant message and set partial=True
messages.append({"role": "assistant", "content": first_content, "partial": True})

# Second call
second_content = chat_completion(messages)
print("### Complete content:")
print(first_content+second_content)
```

### **Response**

`length`: The `max_tokens` limit was reached. `stop`: The model finished naturally or hit a stop word from the `stop` parameter.

```
### Reason generation stopped: length
**"The End of Memory"**

In the distant future, Earth is no longer fit for human life. The atmosphere is polluted, oceans are dry, and cities lie in ruins. Humans migrated to a habitable planet named "Eden," with blue skies, fresh air, and endless resources.

However, Eden is not a true paradise. It holds no human history, no past, and no memory.

...
**"If we forget who we are, are we still human?"**

— End —
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    // API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    // If not set in environment, replace the next line with: apiKey: "sk-xxx"
    apiKey: process.env.DASHSCOPE_API_KEY,
    // For Beijing region use: https://dashscope.aliyuncs.com/compatible-mode/v1
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

async function chatCompletion(messages, maxTokens = null) {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",
        messages: messages,
        max_tokens: maxTokens
    });
    
    console.log(`### Reason generation stopped: ${completion.choices[0].finish_reason}`);
    return completion.choices[0].message.content;
}

// Example usage
async function main() {
    let messages = [{"role": "user", "content": "Write a short sci-fi story"}];

    try {
        // First call with max_tokens set to 40
        const firstContent = await chatCompletion(messages, 40);
        console.log(firstContent);
        
        // Add the first response as an assistant message and set partial=true
        messages.push({"role": "assistant", "content": firstContent, "partial": true});

        // Second call
        const secondContent = await chatCompletion(messages);
        console.log("### Complete content:");
        console.log(firstContent + secondContent);
        
    } catch (error) {
        console.error('Execution error:', error);
    }
}

// Run the example
main();
```

## DashScope

## Python

### **Sample code**

```
import os
import dashscope
# For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

def chat_completion(messages, max_tokens=None):
    response = dashscope.Generation.call(
        # API keys differ by region. Get your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
        # If not set in environment, replace the next line with: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        model='qwen-plus',
        messages=messages,
        max_tokens=max_tokens,
        result_format='message',  
    )
    
    print(f"### Reason generation stopped: {response.output.choices[0].finish_reason}")
    return response.output.choices[0].message.content

# Example usage
messages = [{"role": "user", "content": "Write a short sci-fi story"}]

# First call with max_tokens set to 40
first_content = chat_completion(messages, max_tokens=40)
print(first_content)

# Add the first response as an assistant message and set partial=True
messages.append({"role": "assistant", "content": first_content, "partial": True})

# Second call
second_content = chat_completion(messages)
print("### Complete content:")
print(first_content + second_content)
```

### **Response**

```
### Reason generation stopped: length
Title: **"Origami Time"**

---

In 2179, humanity finally mastered time travel. But this technology did not rely on massive machines or complex energy fields. It relied on paper.

A single sheet of paper.

It was called "Origami Time," made from an unknown alien material. Scientists could not explain how it worked. They only knew that drawing a scene on the paper and folding it in a specific way opened a door to the past or future.

...

"You are not the key to time. You are just a reminder that our future is always in our hands."

Then I tore it into pieces.

---

**(End)**
```

## **Billing**

Billing covers input and output tokens. The prefix counts as part of the input tokens.

## **Error codes**

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.
