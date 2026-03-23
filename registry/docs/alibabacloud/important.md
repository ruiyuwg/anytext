When you perform information extraction or structured data generation tasks, the large language model (LLM) might return extra text, such as ` ```json `. This can cause downstream parsing to fail. Use structured output to ensure that the LLM returns a standard JSON string. With JSON Schema mode, you can also precisely control the output structure and types, which eliminates the need for extra validation or retries.

## Usage

Structured output supports two modes: JSON Object and JSON Schema.

-   **JSON Object mode**: Ensures the output is a standard JSON string, but does not guarantee a specific structure. To use this mode:
    

1.  **Set** `**response_format**`: In the request body, set the `response_format` parameter to `{"type": "json_object"}`.
    
2.  **Include the JSON keyword in the prompt**: The system message or user message must contain the "JSON" keyword (case-insensitive). Otherwise, the model returns the following error: `'messages' must contain the word 'json' in some form, to use 'response_format' of type 'json_object'.`
    

-   **JSON Schema mode**: Ensures the output conforms to a specified structure. To use this mode, set the `response_format` parameter to `{"type": "json_schema", "json_schema": {"strict": true, ...}}`.
    
    **Note**
    
    The prompt does not need to include the JSON keyword.
    

## **Supported models**

## Qwen

-   **Text generation models**
    
    -   Qwen Max series: qwen3-max, qwen3-max-2026-01-23 (non-thinking mode), qwen3-max-2025-09-23, qwen3-max-preview (non-thinking mode), qwen-max, qwen-max-latest, qwen-max-2025-01-25 and later snapshot models
        
    -   Qwen Plus series (non-thinking mode): qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen-plus, qwen-plus-latest, qwen-plus-2024-12-20 and later snapshot models
        
    -   Qwen Flash series (non-thinking mode): qwen3.5-flash, qwen3.5-flash-2026-02-23 and later snapshot models, qwen-flash, qwen-flash-2025-07-28 and later snapshot models
        
    -   Qwen Turbo series (non-thinking mode): qwen-turbo, qwen-turbo-latest, qwen-turbo-2024-11-01 and later snapshot models
        
    -   Qwen Coder series: qwen3-coder-plus, qwen3-coder-plus-2025-07-22, qwen3-coder-flash, qwen3-coder-flash-2025-07-28
        
    -   Qwen Long series: qwen-long-latest, qwen-long-2025-01-25
        
-   **Open source text generation models**
    
    -   Qwen3.5 (non-thinking mode): qwen3.5-397b-a17b, qwen3.5-122b-a10b, qwen3.5-27b, qwen3.5-35b-a3b
        
    -   Qwen3 (non-thinking mode)
        
    -   Qwen3-Coder
        
    -   Qwen2.5 series text models (excluding math and coder models)
        
-   **Multimodal models**
    
    -   Qwen3-VL-Plus series (non-thinking mode): qwen3-vl-plus, qwen3-vl-plus-2025-09-23 and later snapshot models
        
    -   Qwen3-VL-Flash series (non-thinking mode): qwen3-vl-flash, qwen3-vl-flash-2025-10-15 and later snapshot models
        
    -   Qwen VL-Max series: qwen-vl-max (excluding latest and snapshot models)
        
    -   Qwen VL-Plus series: qwen-vl-plus (excluding latest and snapshot models)
        
-   **Open source multimodal models**
    
    -   Qwen3-VL (non-thinking mode)
        

**Note**

Models in thinking mode do not support structured output.

## Kimi

kimi-k2-thinking

## GLM

Non-thinking mode: glm-5, glm-4.7, glm-4.6

For model context window, pricing, and snapshot versions, see [Model list](/help/en/model-studio/models).

## **Getting started**

This example extracts information from a personal profile.

[Get an API key](/help/en/model-studio/get-api-key) and [export the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). If you use the OpenAI SDK or DashScope SDK to make calls, [install the SDK](/help/en/model-studio/install-sdk).

## OpenAI compatible

## Python

```
from openai import OpenAI
import os

client = OpenAI(
    # API keys differ by region. If you haven't configured an environment variable, replace the next line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use Beijing region models, replace base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

completion = client.chat.completions.create(
    model="qwen-flash",
    messages=[
        {
            "role": "system",
            "content": "Extract the user's name and age, and return them in JSON format"
        },
        {
            "role": "user",
            "content": "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling", 
        },
    ],
    response_format={"type": "json_object"}
)

json_string = completion.choices[0].message.content
print(json_string)
```

### **Response**

```
{
  "Name": "Alex Brown",
  "Age": 34
}
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    // If you haven't configured an environment variable, replace the next line with: apiKey: "sk-xxx"
    apiKey: process.env.DASHSCOPE_API_KEY,
    // For Beijing region models, replace baseURL with: https://dashscope.aliyuncs.com/compatible-mode/v1
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

const completion = await openai.chat.completions.create({
    model: "qwen-flash",
    messages: [
        {
            role: "system",
            content: "Extract the user's name and age, and return them in JSON format"
        },
        {
            role: "user",
            content: "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling"
        }
    ],
    response_format: {
        type: "json_object"
    }
});

const jsonString = completion.choices[0].message.content;
console.log(jsonString);
```

### **Response**

```
{
  "name": "Alex Brown",
  "age": 34
}
```

## curl

```
# ======= Important =======
# API keys differ by region. To obtain an API key, visit: https://www.alibabacloud.com/help/en/model-studio/get-api-key
# If you use a model in the Beijing region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# === Delete this comment before execution ===
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
    "messages": [
        {
            "role": "system",
            "content": "You need to extract the name (string), age (string), and email (string). Output the result as a JSON string. Do not include any other irrelevant content.\nExamples:\nQ: My name is Zhang San, I am 25 years old, and my email is zhangsan@example.com\nA: {\"name\":\"Zhang San\",\"age\":\"25 years old\",\"email\":\"zhangsan@example.com\"}\nQ: My name is Li Si, I am 30 years old, and my email is lisi@example.com\nA: {\"name\":\"Li Si\",\"age\":\"30 years old\",\"email\":\"lisi@example.com\"}\nQ: My name is Wang Wu, my email is wangwu@example.com, and I am 40 years old\nA: {\"name\":\"Wang Wu\",\"age\":\"40 years old\",\"email\":\"wangwu@example.com\"}"
        },
        {
            "role": "user", 
            "content": "Hello everyone, my name is Alex Brown, I am 34 years old, and my email is alexbrown@example.com"
        }
    ],
    "response_format": {
        "type": "json_object"
    }
}'
```

### **Response**

```
{
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "{\"name\":\"Alex Brown\",\"age\":\"34 years old\"}"
            },
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null
        }
    ],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 207,
        "completion_tokens": 20,
        "total_tokens": 227,
        "prompt_tokens_details": {
            "cached_tokens": 0
        }
    },
    "created": 1756455080,
    "system_fingerprint": null,
    "model": "qwen-plus",
    "id": "chatcmpl-624b665b-fb93-99e7-9ebd-bb6d86d314d2"
}
```

## DashScope

## Python

```
import os
import dashscope
# For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

messages=[
    {
        "role": "system",
        "content": "Extract the user's name and age, and return them in JSON format"
    },
    {
        "role": "user",
        "content": "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling", 
    },
]
response = dashscope.Generation.call(
    # If you haven't configured an environment variable, replace the next line with: api_key="sk-xxx" (Alibaba Cloud Model Studio API key),
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen-flash", 
    messages=messages,
    result_format='message',
    response_format={'type': 'json_object'}
    )
json_string = response.output.choices[0].message.content
print(json_string)
```

### **Response**

```
{
  "name": "Alex Brown",
  "age": 34
}
```

## Java

DashScope Java SDK version must be 2.18.4 or higher.

```
// DashScope Java SDK version must be 2.18.4 or higher

import java.util.Arrays;
import java.lang.System;
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.common.ResponseFormat;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    public static GenerationResult callWithMessage() throws ApiException, NoApiKeyException, InputRequiredException {
        // For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1
        Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
        Message systemMsg = Message.builder()
                .role(Role.SYSTEM.getValue())
                .content("Extract the user's name and age, and return them in JSON format")
                .build();
        Message userMsg = Message.builder()
                .role(Role.USER.getValue())
                .content("Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling")
                .build();
        ResponseFormat jsonMode = ResponseFormat.builder().type("json_object").build();
        GenerationParam param = GenerationParam.builder()
                // If you haven't configured an environment variable, replace the next line with: .apiKey("sk-xxx") (Alibaba Cloud Model Studio API key)
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen-flash")
                .messages(Arrays.asList(systemMsg, userMsg))
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .responseFormat(jsonMode)
                .build();
        return gen.call(param);
    }

    public static void main(String[] args) {
        try {
            GenerationResult result = callWithMessage();
            System.out.println(result.getOutput().getChoices().get(0).getMessage().getContent());
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            // Log the exception using a logging framework
            System.err.println("An error occurred while calling the generation service: " + e.getMessage());
        }
    }
}
```

### **Response**

```
{
  "name": "Alex Brown",
  "age": 34
}
```

## curl

```
# ======= Important notes =======
# For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation
# API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# === Delete this comment before running ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-flash",
    "input": {
        "messages": [
            {
                "role": "system",
                "content": "Extract the user's name and age, and return them in JSON format"
            },
            {
                "role": "user", 
                "content": "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling"
            }
        ]
    },
    "parameters": {
        "result_format": "message",
        "response_format": {
            "type": "json_object"
        }
    }
}'
```

### **Response**

```
{
  "name": "Alex Brown",
  "age": 34
}
```

## **Image and video data processing**

In addition to text, multimodal models support structured output for images and videos, enabling visual information extraction, object localization, and event detection.

> For image and video file limits, see [Image and video understanding](/help/en/model-studio/vision#430cb5ea4cety).

## OpenAI compatible

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # For Beijing region models, replace base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

completion = client.chat.completions.create(
    model="qwen3-vl-plus",
    messages=[
        {
            "role": "system",
            "content": [{"type": "text", "text": "You are a helpful assistant."}],
        },
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "http://duguang-labelling.oss-cn-shanghai.aliyuncs.com/demo_ocr/receipt_zh_demo.jpg"
                    },
                },
                {"type": "text", "text": "Extract ticket (array type, including travel_date, trains, seat_num, arrival_site, price) and invoice information (array type, including invoice_code and invoice_number) from the image. Output a JSON containing both ticket and invoice arrays"},
            ],
        },
    ],
    response_format={"type": "json_object"}
)
json_string = completion.choices[0].message.content
print(json_string)
```

### **Response**

```
{
  "ticket": [
    {
      "travel_date": "2013-06-29",
      "trains": "stream",
      "seat_num": "371",
      "arrival_site": "Development Zone",
      "price": "8.00"
    }
  ],
  "invoice": [
    {
      "invoice_code": "221021325353",
      "invoice_number": "10283819"
    }
  ]
}
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
  // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
  // If you haven't configured an environment variable, replace the next line with: apiKey: "sk-xxx" (Model Studio API key)
  apiKey: process.env.DASHSCOPE_API_KEY,
  // For Beijing region models, replace base_url with https://dashscope.aliyuncs.com/compatible-mode/v1
  baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "qwen3-vl-plus",
    messages: [{
        role: "system",
        content: [{
          type: "text",
          text: "You are a helpful assistant."
        }]
      },
      {
        role: "user",
        content: [{
            type: "image_url",
            image_url: {
              "url": "http://duguang-labelling.oss-cn-shanghai.aliyuncs.com/demo_ocr/receipt_zh_demo.jpg"
            }
          },
          {
            type: "text",
            text: "Extract ticket (array type, including travel_date, trains, seat_num, arrival_site, price) and invoice information (array type, including invoice_code and invoice_number) from the image. Output a JSON containing both ticket and invoice arrays"
          }
        ]
      }
    ],
    response_format: {type: "json_object"}
  });
  console.log(response.choices[0].message.content);
}

main()
```

### **Response**

```
{
  "ticket": [
    {
      "travel_date": "2013-06-29",
      "trains": "stream",
      "seat_num": "371",
      "arrival_site": "Development Zone",
      "price": "8.00"
    }
  ],
  "invoice": [
    {
      "invoice_code": "221021325353",
      "invoice_number": "10283819"
    }
  ]
}
```

## curl

```
# ======= Important notes =======
# For Beijing region models, replace base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# === Delete this comment before running ===

curl --location 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
  "model": "qwen3-vl-plus",
  "messages": [
  {"role":"system",
  "content":[
    {"type": "text", "text": "You are a helpful assistant."}]},
  {
    "role": "user",
    "content": [
      {"type": "image_url", "image_url": {"url": "http://duguang-labelling.oss-cn-shanghai.aliyuncs.com/demo_ocr/receipt_zh_demo.jpg"}},
      {"type": "text", "text": "Extract ticket (array type, including travel_date, trains, seat_num, arrival_site, price) and invoice information (array type, including invoice_code and invoice_number) from the image. Output a JSON containing both ticket and invoice arrays"}
    ]
  }],
  "response_format":{"type": "json_object"}
}'
```

### **Response**

```
{
  "ticket": [
    {
      "travel_date": "2013-06-29",
      "trains": "stream",
      "seat_num": "371",
      "arrival_site": "Development Zone",
      "price": "8.00"
    }
  ],
  "invoice": [
    {
      "invoice_code": "221021325353",
      "invoice_number": "10283819"
    }
  ]
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
    "role": "system",
    "content": [
    {"text": "You are a helpful assistant."}]
},
{
    "role": "user",
    "content": [
    {"image": "http://duguang-labelling.oss-cn-shanghai.aliyuncs.com/demo_ocr/receipt_zh_demo.jpg"},
    {"text": "Extract ticket (array type, including travel_date, trains, seat_num, arrival_site, price) and invoice information (array type, including invoice_code and invoice_number) from the image. Output a JSON containing both ticket and invoice arrays"}]
}]
response = dashscope.MultiModalConversation.call(
    # If you haven't configured an environment variable, replace the next line with: api_key ="sk-xxx" (Model Studio API key)
    api_key = os.getenv('DASHSCOPE_API_KEY'),
    model = 'qwen3-vl-plus',
    messages = messages,
    response_format={'type': 'json_object'}
)
json_string = response.output.choices[0].message.content[0]["text"]
print(json_string)
```

### **Response**

```
{
  "ticket": [
    {
      "travel_date": "2013-06-29",
      "trains": "Liushui",
      "seat_num": "371",
      "arrival_site": "Development Zone",
      "price": "8.00"
    }
  ],
  "invoice": [
    {
      "invoice_code": "221021325353",
      "invoice_number": "10283819"
    }
  ]
}
```

## Java

```
// DashScope Java SDK version must be 2.21.4 or higher

import java.util.Arrays;
import java.util.Collections;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversation;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationParam;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationResult;
import com.alibaba.dashscope.common.MultiModalMessage;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.exception.UploadFileException;
import com.alibaba.dashscope.common.ResponseFormat;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    
    // For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void simpleMultiModalConversationCall()
            throws ApiException, NoApiKeyException, UploadFileException {
        MultiModalConversation conv = new MultiModalConversation();
        MultiModalMessage systemMessage = MultiModalMessage.builder().role(Role.SYSTEM.getValue())
                .content(Arrays.asList(
                        Collections.singletonMap("text", "You are a helpful assistant."))).build();
        MultiModalMessage userMessage = MultiModalMessage.builder().role(Role.USER.getValue())
                .content(Arrays.asList(
                        Collections.singletonMap("image", "http://duguang-labelling.oss-cn-shanghai.aliyuncs.com/demo_ocr/receipt_zh_demo.jpg"),
                        Collections.singletonMap("text", "Extract ticket (array type, including travel_date, trains, seat_num, arrival_site, price) and invoice information (array type, including invoice_code and invoice_number) from the image. Output a JSON containing both ticket and invoice arrays"))).build();
        ResponseFormat jsonMode = ResponseFormat.builder().type("json_object").build();
        MultiModalConversationParam param = MultiModalConversationParam.builder()
                // If you haven't configured an environment variable, replace the next line with: .apiKey("sk-xxx") (Model Studio API key)
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen3-vl-plus")
                .messages(Arrays.asList(systemMessage, userMessage))
                .responseFormat(jsonMode)
                .build();
        MultiModalConversationResult result = conv.call(param);
        System.out.println(result.getOutput().getChoices().get(0).getMessage().getContent().get(0).get("text"));
    }
    public static void main(String[] args) {
        try {
            simpleMultiModalConversationCall();
        } catch (ApiException | NoApiKeyException | UploadFileException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

### **Response**

```
{
  "ticket": [
    {
      "travel_date": "2013-06-29",
      "trains": "stream",
      "seat_num": "371",
      "arrival_site": "Development Zone",
      "price": "8.00"
    }
  ],
  "invoice": [
    {
      "invoice_code": "221021325353",
      "invoice_number": "10283819"
    }
  ]
}
```

## curl

```
# ======= Important notes =======
# For Beijing region models, replace the URL with: https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
# === Delete this comment before running ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "qwen3-vl-plus",
    "input": {
        "messages": [
            {
                "role": "system",
                "content": [
                    {
                        "text": "You are a helpful assistant."
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "image": "http://duguang-labelling.oss-cn-shanghai.aliyuncs.com/demo_ocr/receipt_zh_demo.jpg"
                    },
                    {
                        "text": "Extract ticket (array type, including travel_date, trains, seat_num, arrival_site, price) and invoice information (array type, including invoice_code and invoice_number) from the image. Output a JSON containing both ticket and invoice arrays"
                    }
                ]
            }
        ]
    },
    "parameters": {
        "response_format": {
            "type": "json_object"
        }
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
              "text": "{\n  \"ticket\": [\n    {\n      \"travel_date\": \"2013-06-29\",\n      \"trains\": \"train number\",\n      \"seat_num\": \"371\",\n      \"arrival_site\": \"Development Zone\",\n      \"price\": \"8.00\"\n    }\n  ],\n  \"invoice\": [\n    {\n      \"invoice_code\": \"221021325353\",\n      \"invoice_number\": \"10283819\"\n    }\n  ]\n}"
            }
          ],
          "role": "assistant"
        },
        "finish_reason": "stop"
      }
    ]
  },
  "usage": {
    "total_tokens": 598,
    "input_tokens_details": {
      "image_tokens": 418,
      "text_tokens": 68
    },
    "output_tokens": 112,
    "input_tokens": 486,
    "output_tokens_details": {
      "text_tokens": 112
    },
    "image_tokens": 418
  },
  "request_id": "b129dce1-0d5d-4772-b8b5-bd3a1d5cde63"
}
```

## **Optimize prompts**

Ambiguous prompts (such as "return user information") can cause models to generate unexpected results. Describe the expected schema accurately in your prompt, including field types, required status, format requirements (such as date format), and examples.

## OpenAI compatible

## Python

```
from openai import OpenAI
import os
import json
import textwrap  # Handles indentation for multi-line strings to improve code readability

# Predefined example responses to show the model the expected output format
# Example 1: Complete response with all fields
example1_response = json.dumps(
    {
        "info": {"name": "Zhang San", "age": "25 years old", "email": "zhangsan@example.com"},
        "hobby": ["singing"]
    },
    ensure_ascii=False
)
# Example 2: Response with multiple hobbies
example2_response = json.dumps(
    {
        "info": {"name": "Li Si", "age": "30 years old", "email": "lisi@example.com"},
        "hobby": ["dancing", "swimming"]
    },
    ensure_ascii=False
)
# Example 3: Response without hobby field (hobby is optional)
example3_response = json.dumps(
    {
        "info": {"name": "Zhao Liu", "age": "28 years old", "email": "zhaoliu@example.com"}
    },
    ensure_ascii=False
)
# Example 4: Another response without hobby field
example4_response = json.dumps(
    {
        "info": {"name": "Sun Qi", "age": "35 years old", "email": "sunqi@example.com"}
    },
    ensure_ascii=False
)

# Initialize the OpenAI client
client = OpenAI(
    # If you haven't configured an environment variable, replace the next line with: api_key="sk-xxx"
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # This is the Beijing region base_url. If you use Singapore region models, replace base_url with: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

# dedent removes common leading whitespace from each line, allowing the string to be indented nicely in code without including extra spaces at runtime
system_prompt = textwrap.dedent(f"""\
    Extract personal information from the user input and output it in the specified JSON Schema format:

    [Output format requirements]
    The output must strictly follow this JSON structure:
    {{
      "info": {{
        "name": "string type, required field, user's name",
        "age": "string type, required field, format 'number years old', e.g., '25 years old'",
        "email": "string type, required field, standard email format, e.g., 'user@example.com'"
      }},
      "hobby": ["string array type, optional field, contains all user hobbies; omit entirely if not mentioned"]
    }}

    [Field extraction rules]
    1. name: Identify the user's name from the text, must extract
    2. age: Identify age information, convert to 'number years old' format, must extract
    3. email: Identify email address, keep original format, must extract
    4. hobby: Identify user hobbies, output as string array; omit hobby field entirely if hobbies are not mentioned

    [Reference examples]
    Example 1 (with hobby):
    Q: My name is Zhang San, I'm 25 years old, my email is zhangsan@example.com, and my hobby is singing
    A: {example1_response}

    Example 2 (with multiple hobbies):
    Q: My name is Li Si, I'm 30 years old, my email is lisi@example.com, and I enjoy dancing and swimming
    A: {example2_response}

    Example 3 (without hobby):
    Q: My name is Zhao Liu, I'm 28 years old, and my email is zhaoliu@example.com
    A: {example3_response}

    Example 4 (without hobby):
    Q: I'm Sun Qi, 35 years old, and my email is sunqi@example.com
    A: {example4_response}

    Extract information and output JSON strictly according to the above format and rules. Do not include the hobby field if the user doesn't mention hobbies.\
""")

# Call the LLM API for information extraction
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[
        {
            "role": "system",
            "content": system_prompt
        },
        {
            "role": "user",
            "content": "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling", 
        },
    ],
    response_format={"type": "json_object"},  # Specify JSON format return
)

# Extract and print the model-generated JSON result
json_string = completion.choices[0].message.content
print(json_string)
```

### **Response**

```
{
  "info": {
    "name": "Alex Brown",
    "age": "34 years old",
    "email": "alexbrown@example.com"
  },
  "hobby": ["Basketball", "Traveling"]  
}
```

## Node.js

```
import OpenAI from "openai";

// Predefined example responses (to show the model the expected output format)
// Example 1: Complete response with all fields
const example1Response = JSON.stringify({
    info: { name: "Zhang San", age: "25 years old", email: "zhangsan@example.com" },
    hobby: ["singing"]
}, null, 2);

// Example 2: Response with multiple hobbies
const example2Response = JSON.stringify({
    info: { name: "Li Si", age: "30 years old", email: "lisi@example.com" },
    hobby: ["dancing", "swimming"]
}, null, 2);

// Example 3: Response without hobby field (hobby is optional)
const example3Response = JSON.stringify({
    info: { name: "Zhao Liu", age: "28 years old", email: "zhaoliu@example.com" }
}, null, 2);

// Example 4: Another response without hobby field
const example4Response = JSON.stringify({
    info: { name: "Sun Qi", age: "35 years old", email: "sunqi@example.com" }
}, null, 2);

// Initialize OpenAI client configuration
const openai = new OpenAI({
    // If you haven't configured an environment variable, replace the next line with: apiKey: "sk-xxx" (Alibaba Cloud Model Studio API key),
    // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
    apiKey: process.env.DASHSCOPE_API_KEY,
    // This is the Beijing region base_url. If you use Singapore region models, replace base_url with: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});

// Create chat completion request using structured prompts to improve output accuracy
const completion = await openai.chat.completions.create({
    model: "qwen-plus",
    messages: [
        {
            role: "system",
            content: `Extract personal information from the user input and output it in the specified JSON Schema format:

[Output format requirements]
The output must strictly follow this JSON structure:
{
  "info": {
    "name": "string type, required field, user's name",
    "age": "string type, required field, format 'number years old', e.g., '25 years old'",
    "email": "string type, required field, standard email format, e.g., 'user@example.com'"
  },
  "hobby": ["string array type, optional field, contains all user hobbies; omit entirely if not mentioned"]
}

[Field extraction rules]
1. name: Identify the user's name from the text, must extract
2. age: Identify age information, convert to 'number years old' format, must extract
3. email: Identify email address, keep original format, must extract
4. hobby: Identify user hobbies, output as string array; omit hobby field entirely if hobbies are not mentioned

[Reference examples]
Example 1 (with hobby):
Q: My name is Zhang San, I'm 25 years old, my email is zhangsan@example.com, and my hobby is singing
A: ${example1Response}

Example 2 (with multiple hobbies):
Q: My name is Li Si, I'm 30 years old, my email is lisi@example.com, and I enjoy dancing and swimming
A: ${example2Response}

Example 3 (without hobby):
Q: My name is Zhao Liu, I'm 28 years old, and my email is zhaoliu@example.com
A: ${example3Response}

Example 4 (without hobby):
Q: I'm Sun Qi, 35 years old, and my email is sunqi@example.com
A: ${example4Response}

Extract information and output JSON strictly according to the above format and rules. Do not include the hobby field if the user doesn't mention hobbies.`
        },
        {
            role: "user",
            content: "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling"
        }
    ],
    response_format: {
        type: "json_object"
    }
});

// Extract and print the model-generated JSON result
const jsonString = completion.choices[0].message.content;
console.log(jsonString);
```

### **Response**

```
{
  "info": {
    "name": "Alex Brown",
    "age": "34 years old",
    "email": "alexbrown@example.com"
  },
  "hobby": [
    "playing basketball",
    "traveling"
  ]
}
```

## DashScope

## Python

```
import os
import json
import dashscope

# If you use Singapore region models, uncomment the following line
# dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1"

# Predefined example responses (to show the model the expected output format)
example1_response = json.dumps(
    {
        "info": {"name": "Zhang San", "age": "25 years old", "email": "zhangsan@example.com"},
        "hobby": ["singing"]
    },
    ensure_ascii=False
)
example2_response = json.dumps(
    {
        "info": {"name": "Li Si", "age": "30 years old", "email": "lisi@example.com"},
        "hobby": ["dancing", "swimming"]
    },
    ensure_ascii=False
)
example3_response = json.dumps(
    {
        "info": {"name": "Wang Wu", "age": "40 years old", "email": "wangwu@example.com"},
        "hobby": ["Rap", "basketball"]
    },
    ensure_ascii=False
)

messages=[
        {
            "role": "system",
            "content": f"""Extract personal information from the user input and output it in the specified JSON Schema format:

[Output format requirements]
The output must strictly follow this JSON structure:
{{
  "info": {{
    "name": "string type, required field, user's name",
    "age": "string type, required field, format 'number years old', e.g., '25 years old'",
    "email": "string type, required field, standard email format, e.g., 'user@example.com'"
  }},
  "hobby": ["string array type, optional field, contains all user hobbies; omit entirely if not mentioned"]
}}

[Field extraction rules]
1. name: Identify the user's name from the text, must extract
2. age: Identify age information, convert to 'number years old' format, must extract
3. email: Identify email address, keep original format, must extract
4. hobby: Identify user hobbies, output as string array; omit hobby field entirely if hobbies are not mentioned

[Reference examples]
Example 1 (with hobby):
Q: My name is Zhang San, I'm 25 years old, my email is zhangsan@example.com, and my hobby is singing
A: {example1_response}

Example 2 (with multiple hobbies):
Q: My name is Li Si, I'm 30 years old, my email is lisi@example.com, and I enjoy dancing and swimming
A: {example2_response}

Example 3 (with multiple hobbies):
Q: My email is wangwu@example.com, I'm 40 years old, my name is Wang Wu, and I can Rap and play basketball
A: {example3_response}

Extract information and output JSON strictly according to the above format and rules. Do not include the hobby field if the user doesn't mention hobbies."""
        },
        {
            "role": "user",
            "content": "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling", 
        },
    ]
response = dashscope.Generation.call(
    # If you haven't configured an environment variable, replace the next line with: api_key="sk-xxx" (Alibaba Cloud Model Studio API key),
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen-plus", 
    messages=messages,
    result_format='message',
    response_format={'type': 'json_object'}
    )
json_string = response.output.choices[0].message.content
print(json_string)
```

### **Response**

```
{
  "info": {
    "name": "Alex Brown",
    "age": "34 years old",
    "email": "alexbrown@example.com"
  },
  "hobby": [
    "playing basketball",
    "traveling"
  ]
}
```

## Java

```
import java.util.Arrays;
import java.lang.System;
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.common.ResponseFormat;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    public static GenerationResult callWithMessage() throws ApiException, NoApiKeyException, InputRequiredException {
        // If you use a model in the Beijing region, you must replace the URL with: https://dashscope.aliyuncs.com/api/v1
        Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
        Message systemMsg = Message.builder()
                .role(Role.SYSTEM.getValue())
                .content("""
                Extract personal information from the user input and output it in the specified JSON Schema format:

[Output Format Requirements]
The output must strictly follow the JSON structure below:
{
  "info": {
    "name": "String type, required field, user's name",
    "age": "String type, required field, in the format of 'Number years old', for example, '25 years old'",
    "email": "String type, required field, standard email format, for example, 'user@example.com'"
  },
  "hobby": ["String array type, optional field, contains all of the user's hobbies. If no hobbies are mentioned, do not include this field in the output."]
}

[Field Extraction Rules]
1. name: Identify the user's name from the text. This is a required field.
2. age: Identify the age information and transform it into the 'Number years old' format. This is a required field.
3. email: Identify the email address and keep its original format. This is a required field.
4. hobby: Identify the user's hobbies and output them as a string array. If no hobbies are mentioned, completely omit the hobby field.

[Examples]
Example 1 (with a hobby):
Q: My name is Zhang San, I am 25 years old, my email is zhangsan@example.com, and my hobby is singing.
A: {"info":{"name":"Zhang San","age":"25 years old","email":"zhangsan@example.com"},"hobby":["singing"]}

Example 2 (with multiple hobbies):
Q: My name is Li Si, I am 30 years old, my email is lisi@example.com, and I like dancing and swimming.
A: {"info":{"name":"Li Si","age":"30 years old","email":"lisi@example.com"},"hobby":["dancing","swimming"]}

Example 3 (without hobbies):
Q: My name is Wang Wu, my email is wangwu@example.com, and I am 40 years old.
A: {"info":{"name":"Wang Wu","age":"40 years old","email":"wangwu@example.com"}}""")
                .build();
        Message userMsg = Message.builder()
                .role(Role.USER.getValue())
                .content("Hello everyone, my name is Alex Brown, I am 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling.")
                .build();
        ResponseFormat jsonMode = ResponseFormat.builder().type("json_object").build();
        GenerationParam param = GenerationParam.builder()
                // If you use a model in the Beijing region, you need to use an API key for the Beijing region. Obtain the key from: https://bailian.console.alibabacloud.com/?tab=model#/api-key
                // If you have not configured environment variables, replace the following line with your Alibaba Cloud Model Studio API key: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen-plus")
                .messages(Arrays.asList(systemMsg, userMsg))
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .responseFormat(jsonMode)
                .build();
        return gen.call(param);
    }
    public static void main(String[] args) {
        try {
            GenerationResult result = callWithMessage();
            System.out.println(result.getOutput().getChoices().get(0).getMessage().getContent());
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            // Use a logging framework to record the exception.
            System.err.println("An error occurred while calling the generation service: " + e.getMessage());
        }
    }
}
```

### **Response**

```
{
  "info": {
    "name": "Alex Brown",
    "age": "34 years old",
    "email": "alexbrown@example.com"
  },
  "hobby": [
    "Playing basketball",
    "Traveling"
  ]
}
```

## **Going live**

-   **Validation**
    
    Before passing the output to downstream services, validate it with tools such as jsonschema (Python), Ajv (JavaScript), or Everit (Java). This prevents parsing failures caused by missing fields, type errors, or format issues. On failure, retry or rewrite the output with an LLM.
    
-   **Disable** `**max_tokens**`
    
    Do not set `max_tokens` when structured output is enabled. This parameter limits output tokens and defaults to the model’s maximum. Setting it may truncate the JSON string and cause parsing failures.
    

## **FAQ**

### **Q: How does Qwen's thinking mode model produce structured output?**

A: Qwen's thinking mode models do not support structured output. To get a standard JSON string in thinking mode, use a model that supports JSON Mode to fix the output if JSON parsing fails.

1.  **Get output from thinking mode**
    
    Call the thinking mode model to get high-quality output, which might not be a standard JSON string.
    
    > Do not set the `response_format` parameter to `{"type": "json_object"}` when enabling thinking mode, or you will encounter an error.
    
    ```
    completion = client.chat.completions.create(
        model="qwen-plus",
        messages=[
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": "Hi everyone, my name is Alex Brown, I'm 34 years old, my email is alexbrown@example.com, and I enjoy playing basketball and traveling",
            },
        ],
        # Enable thinking mode; do not set response_format parameter to {"type": "json_object"}, or you will get an error
        extra_body={"enable_thinking": True},
        # Streaming output is required in thinking mode
        stream=True
    )
    # Extract and print the model-generated JSON result
    json_string = ""
    for chunk in completion:
        if chunk.choices[0].delta.content is not None:
            json_string += chunk.choices[0].delta.content
    ```
    
2.  **Validate and fix output**
    
    Try to parse the `json_string` from the previous step:
    
    -   If the model generated a standard JSON string, parse and return it directly.
        
    -   If the model generated a non-standard JSON string, call a model that supports structured output (preferably a fast, low-cost model such as qwen-flash in non-thinking mode) to fix the format.
        
    
    ```
    import json
    from openai import OpenAI
    import os
    
    # Initialize the OpenAI client (if the client variable isn't defined in the previous code block, uncomment the lines below)
    # client = OpenAI(
    #     api_key=os.getenv("DASHSCOPE_API_KEY"),
    #     base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
    # )
    
    try:
        json_object_from_thinking_model = json.loads(json_string)
        print("Generated standard JSON string")
    except json.JSONDecodeError:
        print("Did not generate standard JSON string; fixing with a model that supports structured output")
        completion = client.chat.completions.create(
            model="qwen-flash",
            messages=[
                {
                    "role": "system",
                    "content": "You are a JSON format expert. Fix the user's JSON string to standard format",
                },
                {
                    "role": "user",
                    "content": json_string,
                },
            ],
            response_format={"type": "json_object"},
        )
        json_object_from_thinking_model = json.loads(completion.choices[0].message.content)
    ```
    

## Error codes

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.
