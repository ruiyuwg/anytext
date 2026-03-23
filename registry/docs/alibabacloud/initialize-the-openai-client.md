Visual reasoning models output their thinking process before answering. Use them for complex visual tasks: math problems, chart analysis, or video understanding.

## **Showcase**

![QVQ Logo](https://assets.alicdn.com/g/qwenweb/qwen-webui-fe/0.0.54/static/favicon.png)

Visual Reasoning

Show thought process ▼

![](https://img.alicdn.com/imgextra/i3/O1CN015BcsAj1LqLn7Cws8E_!!6000000001350-0-tps-5671-3781.jpg) Relative to your current position, which object is farthest away in the image? Options: A. Chair B. Painting on the wall C. Coffee table D. Sofa. Output only the letter of the correct answer (for example, A).

Send Virtual Request

> The component above is for demonstration purposes only and does not send a real request.

## **Availability**

### **Supported regions**

-   Singapore: Use the [API key](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key) for this region.
    
-   US (Virginia): Use the [API key](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key) for this region.
    
-   Beijing: Use the [API key](https://modelstudio.console.alibabacloud.com/?tab=model#/api-key) for this region.
    
-   Hong Kong (China): Use the [API key](https://modelstudio.console.alibabacloud.com/cn-hongkong?tab=globalset#/efm/api_key) for this region.
    

### **Supported models**

-   **Qwen3.5**
    
    -   **Hybrid-thinking models:** qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen3.5-flash, qwen3.5-flash-2026-02-23, qwen3.5-397b-a17b, qwen3.5-122b-a10b, qwen3.5-27b, qwen3.5-35b-a3b
        
-   **Qwen3-VL**
    
    -   **Hybrid-thinking models:** qwen3-vl-plus, qwen3-vl-plus-2025-12-19, qwen3-vl-plus-2025-09-23, qwen3-vl-flash, qwen3-vl-flash-2025-10-15
        
    -   **Thinking-only models:** qwen3-vl-235b-a22b-thinking**,** qwen3-vl-32b-thinking**,** qwen3-vl-30b-a3b-thinking**,** qwen3-vl-8b-thinking
        
-   **QVQ**
    
    **Thinking-only models:** qvq-max series, qvq-plus series
    
-   **Kimi**
    
    **Hybrid-thinking model:** kimi-k2.5
    

## **Usage guide**

-   **Thinking process:** Model Studio provides two types of visual reasoning models: hybrid-thinking and thinking-only.
    
    -   **Hybrid-thinking models:** Control thinking with the `enable_thinking` parameter:
        
        -   Set to `true`: outputs thinking process first, then the final response (default for `qwen3.5-plus` series).
            
        -   Set to `false`: outputs response directly (default for `qwen3-vl-plus`, `qwen3-vl-flash` series).
            
    -   **Thinking-only models:** These models always generate a thinking process before providing a response, and this behavior cannot be disabled.
        
-   **Output method:** Use streaming to prevent timeouts from long thinking processes.
    
    -   Qwen3.5, Qwen3-VL, and kimi-k2.5 support both **streaming and non-streaming** methods.
        
    -   The QVQ series supports only **streaming output.**
        
-   **System prompt recommendations:**
    
    -   **Single-turn/simple conversations:** Do not set `System Message`. Pass instructions (such as role, format) through `User Message` for best inference results.
        
    -   **Complex applications (agents, tool calls):** Use `System Message` to define model role, capabilities, and behavioral framework.
        

## **Getting started**

**Prerequisites**

-   [API key created](/help/en/model-studio/get-api-key) and [exported as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).
    
-   SDK users: install the [latest version](/help/en/model-studio/install-sdk) (DashScope Python SDK ≥1.24.6, DashScope Java SDK ≥2.21.10).
    

The following examples call `qvq-max` to solve a math problem from an image. These examples use streaming to print the thinking process and the final response separately.

## OpenAI compatible

## Python

```
from openai import OpenAI
import os

# Initialize the OpenAI client
client = OpenAI(
    # API keys differ by region. To obtain one, see https://bailian.console.alibabacloud.com/?tab=model#/api-key
    # If not configured, replace with: api_key="sk-xxx"
    api_key = os.getenv("DASHSCOPE_API_KEY"),
    # Singapore base URL. Beijing: https://dashscope.aliyuncs.com/compatible-mode/v1       
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

reasoning_content = ""  # Define the full thinking process
answer_content = ""     # Define the full response
is_answering = False   # Check if the thinking process has ended and the response has started

# Create a chat completion request
completion = client.chat.completions.create(
    model="qvq-max",  # Example uses qvq-max. Replace with other model names as needed.
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"
                    },
                },
                {"type": "text", "text": "How do I solve this problem?"},
            ],
        },
    ],
    stream=True,
    # Uncomment the following to return token usage in the last chunk
    # stream_options={
    #     "include_usage": True
    # }
)

print("\n" + "=" * 20 + "Thinking process" + "=" * 20 + "\n")

for chunk in completion:
    # If chunk.choices is empty, print the usage
    if not chunk.choices:
        print("\nUsage:")
        print(chunk.usage)
    else:
        delta = chunk.choices[0].delta
        # Print the thinking process
        if hasattr(delta, 'reasoning_content') and delta.reasoning_content != None:
            print(delta.reasoning_content, end='', flush=True)
            reasoning_content += delta.reasoning_content
        else:
            # Start responding
            if delta.content != "" and is_answering is False:
                print("\n" + "=" * 20 + "Full response" + "=" * 20 + "\n")
                is_answering = True
            # Print the response process
            print(delta.content, end='', flush=True)
            answer_content += delta.content

# print("=" * 20 + "Full thinking process" + "=" * 20 + "\n")
# print(reasoning_content)
# print("=" * 20 + "Full response" + "=" * 20 + "\n")
# print(answer_content)
```

## Node.js

```
import OpenAI from "openai";
import process from 'process';

// Initialize the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY, // Read from environment variable. API keys differ by region. To obtain one, see https://bailian.console.alibabacloud.com/?tab=model#/api-key
    // The following is the base URL for the Singapore region. If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1       
    baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1'
});

let reasoningContent = '';
let answerContent = '';
let isAnswering = false;

let messages = [
    {
        role: "user",
        content: [
        { type: "image_url", image_url: { "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg" } },
        { type: "text", text: "Solve this problem" },
    ]
}]

async function main() {
    try {
        const stream = await openai.chat.completions.create({
            model: 'qvq-max',
            messages: messages,
            stream: true
        });

        console.log('\n' + '='.repeat(20) + 'Thinking process' + '='.repeat(20) + '\n');

        for await (const chunk of stream) {
            if (!chunk.choices?.length) {
                console.log('\nUsage:');
                console.log(chunk.usage);
                continue;
            }

            const delta = chunk.choices[0].delta;

            // Handle the thinking process
            if (delta.reasoning_content) {
                process.stdout.write(delta.reasoning_content);
                reasoningContent += delta.reasoning_content;
            }
            // Handle the formal response
            else if (delta.content) {
                if (!isAnswering) {
                    console.log('\n' + '='.repeat(20) + 'Full response' + '='.repeat(20) + '\n');
                    isAnswering = true;
                }
                process.stdout.write(delta.content);
                answerContent += delta.content;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

**Click to view the thinking process and full response**

```
====================Thinking process====================

Okay, I need to solve this problem about the surface area and volume of a rectangular prism and a cube. First, I need to carefully look at the problem to make sure I understand the requirements for each part.

The problem asks to calculate the surface area and volume of two shapes separately. The first shape is a rectangular prism, and the second is a cube. The units are all in centimeters, and each question is worth 6 points, for a total of 12 points. This looks like a math homework problem, possibly from elementary or middle school geometry.

First, I need to recall the formulas for the surface area and volume of a rectangular prism and a cube. For a rectangular prism, the formula for surface area is: \( 2(ab + bc + ac) \), where a, b, and c are the length, width, and height, respectively. The volume is \( abc \). For a cube, because all side lengths are equal, the surface area is \( 6a^2 \), and the volume is \( a^3 \).

Now, let's look at the first shape, a rectangular prism with given dimensions of length 4 cm, width 3 cm, and height 2 cm. I need to calculate its surface area first. Plugging the values into the formula:

Surface Area = \( 2(4×3 + 3×2 + 4×2) \)
        = \( 2(12 + 6 + 8) \)
        = \( 2×26 \)
        = 52 cm²

Next is the volume, again plugging in the values:

Volume = \( 4×3×2 \)
      = 24 cm³

Then, for the second shape, a cube with a side length of 3 cm. The surface area is calculated as follows:

Surface Area = \( 6×3^2 \)
        = \( 6×9 \)
        = 54 cm²

And the volume is:

Volume = \( 3^3 \)
      = 27 cm³

However, I need to check for any potential mistakes. For example, in calculating the surface area of the rectangular prism, did I miscalculate the area of any face? Or did I make a mistake in the multiplication?

For instance, the three different faces of the rectangular prism are 4×3, 3×2, and 4×2. The areas of these faces are 12, 6, and 8. Adding them up gives 26, and multiplying by 2 gives 52, which should be correct. For the volume, 4×3=12, and then multiplying by 2 is 24, which is also correct.

For the cube, each face is 3×3=9, and with six faces, the total is 54. The volume is 3×3×3=27, which is also correct.

So the final answers should be:

1. The surface area of the rectangular prism is 52 square centimeters, and the volume is 24 cubic centimeters.
2. The surface area of the cube is 54 square centimeters, and the volume is 27 cubic centimeters.

However, I need to confirm if there is any other hidden information or potential traps in the figures in the problem. For example, sometimes problems might include dashed lines or shaded areas, but in this case, the rectangular prism and cube in the image look standard, with no special markings. Therefore, I believe my calculations are correct.

====================Full response====================

### Solution:

**1. Rectangular Prism (length 4 cm, width 3 cm, height 2 cm)**
- **Surface Area**:
  \[
  2 \times (4 \times 3 + 3 \times 2 + 4 \times 2) = 2 \times (12 + 6 + 8) = 2 \times 26 = 52 \, \text{cm}^2
  \]
- **Volume**:
  \[
  4 \times 3 \times 2 = 24 \, \text{cm}^3
  \]

**2. Cube (side length 3 cm)**
- **Surface Area**:
  \[
  6 \times 3^2 = 6 \times 9 = 54 \, \text{cm}^2
  \]
- **Volume**:
  \[
  3^3 = 27 \, \text{cm}^3
  \]

**Answer:**
1. The surface area of the rectangular prism is \(52 \, \text{cm}^2\), and its volume is \(24 \, \text{cm}^3\).
2. The surface area of the cube is \(54 \, \text{cm}^2\), and its volume is \(27 \, \text{cm}^3\).
```

## HTTP

```
# ======= IMPORTANT =======
# The following is the base URL for the Singapore region. If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions    
# API keys differ by region. To obtain one, see https://bailian.console.alibabacloud.com/?tab=model#/api-key
# === Delete this comment before execution ===

curl --location 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model": "qvq-max",
    "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"
          }
        },
        {
          "type": "text",
          "text": "Solve this problem"
        }
      ]
    }
  ],
    "stream":true,
    "stream_options":{"include_usage":true}
}'
```

**Click to view the thinking process and full response**

```
data: {"choices":[{"delta":{"content":null,"role":"assistant","reasoning_content":""},"index":0,"logprobs":null,"finish_reason":null}],"object":"chat.completion.chunk","usage":null,"created":1742983020,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-ab4f3963-2c2a-9291-bda2-65d5b325f435"}

data: {"choices":[{"finish_reason":null,"delta":{"content":null,"reasoning_content":"Okay"},"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983020,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-ab4f3963-2c2a-9291-bda2-65d5b325f435"}

data: {"choices":[{"delta":{"content":null,"reasoning_content":","},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983020,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-ab4f3963-2c2a-9291-bda2-65d5b325f435"}

data: {"choices":[{"delta":{"content":null,"reasoning_content":" I am now"},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983020,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-ab4f3963-2c2a-9291-bda2-65d5b325f435"}

data: {"choices":[{"delta":{"content":null,"reasoning_content":" going to"},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983020,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-ab4f3963-2c2a-9291-bda2-65d5b325f435"}

data: {"choices":[{"delta":{"content":null,"reasoning_content":" solve"},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983020,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-ab4f3963-2c2a-9291-bda2-65d5b325f435"}
.....
data: {"choices":[{"delta":{"content":"square "},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983095,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-23d30959-42b4-9f24-b7ab-1bb0f72ce265"}

data: {"choices":[{"delta":{"content":"centimeters"},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983095,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-23d30959-42b4-9f24-b7ab-1bb0f72ce265"}

data: {"choices":[{"finish_reason":"stop","delta":{"content":"","reasoning_content":null},"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1742983095,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-23d30959-42b4-9f24-b7ab-1bb0f72ce265"}

data: {"choices":[],"object":"chat.completion.chunk","usage":{"prompt_tokens":544,"completion_tokens":590,"total_tokens":1134,"completion_tokens_details":{"text_tokens":590},"prompt_tokens_details":{"text_tokens":24,"image_tokens":520}},"created":1742983095,"system_fingerprint":null,"model":"qvq-max","id":"chatcmpl-23d30959-42b4-9f24-b7ab-1bb0f72ce265"}

data: [DONE]
```

## DashScope

**Note**

QVQ model via DashScope:

-   `incremental_output` defaults to `true` (cannot disable; streaming only).
    
-   `result_format` defaults to `"message"` (cannot be set to `"text"`).
    

## Python

```
import os
import dashscope
from dashscope import MultiModalConversation

# The following is the base URL for the Singapore region. If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1      
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
messages = [
    {
        "role": "user",
        "content": [
            {"image": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"},
            {"text": "How do I solve this problem?"}
        ]
    }
]

response = MultiModalConversation.call(
    # API keys differ by region. To obtain one, see https://bailian.console.alibabacloud.com/?tab=model#/api-key
    # If the environment variable is not configured, replace the following line with your Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qvq-max",  # Example uses qvq-max. Replace with other model names as needed.
    messages=messages,
    stream=True,
)

# Define the full thinking process
reasoning_content = ""
# Define the full response
answer_content = ""
# Check if the thinking process has ended and the response has started
is_answering = False

print("=" * 20 + "Thinking process" + "=" * 20)

for chunk in response:
    # If both the thinking process and the response are empty, ignore
    message = chunk.output.choices[0].message
    reasoning_content_chunk = message.get("reasoning_content", None)
    if (chunk.output.choices[0].message.content == [] and
        reasoning_content_chunk == ""):
        pass
    else:
        # If it is currently the thinking process
        if reasoning_content_chunk != None and chunk.output.choices[0].message.content == []:
            print(chunk.output.choices[0].message.reasoning_content, end="")
            reasoning_content += chunk.output.choices[0].message.reasoning_content
        # If it is currently the response
        elif chunk.output.choices[0].message.content != []:
            if not is_answering:
                print("\n" + "=" * 20 + "Full response" + "=" * 20)
                is_answering = True
            print(chunk.output.choices[0].message.content[0]["text"], end="")
            answer_content += chunk.output.choices[0].message.content[0]["text"]

# To print the full thinking process and response, uncomment and run the following code
# print("=" * 20 + "Full thinking process" + "=" * 20 + "\n")
# print(f"{reasoning_content}")
# print("=" * 20 + "Full response" + "=" * 20 + "\n")
# print(f"{answer_content}")
```

**Click to view the thinking process and full response**

```
====================Thinking process====================
Okay, I need to solve this problem about the surface area and volume of a rectangular prism and a cube. First, I need to carefully look at the problem to make sure I understand the requirements for each part.

The problem asks to calculate the surface area and volume of two shapes separately. The first shape is a rectangular prism, and the second is a cube. The units are all in centimeters, and each question is worth 6 points, for a total of 12 points. This looks like a math homework problem, possibly from elementary or middle school geometry.

First, I need to recall the formulas for the surface area and volume of a rectangular prism and a cube. For a rectangular prism, the formula for surface area is: \( Area = 2(ab + bc + ac) \), where a, b, and c are the length, width, and height, respectively. The volume is: \( Volume = abc \). For a cube, because all side lengths are equal, the surface area is: \( Area = 6a^2 \), and the volume is: \( Volume = a^3 \).

Now, let's look at the first shape, a rectangular prism with given dimensions of length 4 cm, width 3 cm, and height 2 cm. I need to first confirm that these values correspond correctly to the variables in the formula. Usually, the three dimensions of a rectangular prism can be named arbitrarily, but for convenience, we can consider the longest side as the length, the middle one as the width, and the shortest as the height. However, in this case, the problem has clearly labeled the lengths of each side, so I can use them directly.

Next, I'll calculate the surface area of the first rectangular prism. Plugging the values into the formula:

\( Area = 2(4×3 + 3×2 + 4×2) \)

First, calculate each term inside the parentheses:

\( 4×3 = 12 \)
\( 3×2 = 6 \)
\( 4×2 = 8 \)

Then, add these results together:

\( 12 + 6 + 8 = 26 \)

And multiply by 2:

\( 2 × 26 = 52 \)

So, the surface area of the first rectangular prism is 52 square centimeters.

Next, calculate the volume:

\( Volume = 4 × 3 × 2 = 24 \)

So, the volume is 24 cubic centimeters.

Now, let's look at the second shape, a cube with all side lengths of 3 cm. Therefore, the surface area calculation is:

\( Area = 6 × 3^2 = 6 × 9 = 54 \)

And the volume is:

\( Volume = 3^3 = 27 \)

So, the surface area of the cube is 54 square centimeters, and the volume is 27 cubic centimeters.

During the calculation, I need to pay attention to the consistency of units. The unit given in the problem is centimeters, so the final results should be in square centimeters and cubic centimeters. Also, I need to ensure there are no calculation errors, such as the order of multiplication and addition, especially when calculating the surface area of the rectangular prism, where it's easy to miss a term or make a calculation mistake.

Additionally, I'll check for any other possible misunderstandings, such as whether the length, width, and height are correctly identified. But in this problem, because the lengths of each side are clearly labeled, this should not be an issue. Also, for the cube, all side lengths are equal, so there's no complexity from different side lengths.

To summarize, the surface area of the first rectangular prism is 52 square centimeters, and its volume is 24 cubic centimeters. The surface area of the second cube is 54 square centimeters, and its volume is 27 cubic centimeters.

====================Full response====================
### Solution:

**1. Rectangular Prism (length 4 cm, width 3 cm, height 2 cm)**

- **Surface Area**:
  \[
  Area = 2(ab + bc + ac) = 2(4×3 + 3×2 + 4×2) = 2(12 + 6 + 8) = 2×26 = 52 \, \text{cm}^2
  \]

- **Volume**:
  \[
  Volume = abc = 4×3×2 = 24 \, \text{cm}^3
  \]

**2. Cube (side length 3 cm)**

- **Surface Area**:
  \[
  Area = 6a^2 = 6×3^2 = 6×9 = 54 \, \text{cm}^2
  \]

- **Volume**:
  \[
  Volume = a^3 = 3^3 = 27 \, \text{cm}^3
  \]

**Answer:**
1. The surface area of the rectangular prism is \(52 \, \text{cm}^2\), and its volume is \(24 \, \text{cm}^3\).
2. The surface area of the cube is \(54 \, \text{cm}^2\), and its volume is \(27 \, \text{cm}^3\).
```

## Java

```
// DashScope SDK version >= 2.19.0
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import io.reactivex.Flowable;

import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversation;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationParam;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationResult;
import com.alibaba.dashscope.common.MultiModalMessage;
import com.alibaba.dashscope.exception.UploadFileException;
import com.alibaba.dashscope.exception.InputRequiredException;
import java.lang.System;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
       // The following is the base URL for the Singapore region. If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1      
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private static StringBuilder reasoningContent = new StringBuilder();
    private static StringBuilder finalContent = new StringBuilder();
    private static boolean isFirstPrint = true;

    private static void handleGenerationResult(MultiModalConversationResult message) {
        String re = message.getOutput().getChoices().get(0).getMessage().getReasoningContent();
        String reasoning = Objects.isNull(re)?"":re; // Default value

        List<Map<String, Object>> content = message.getOutput().getChoices().get(0).getMessage().getContent();
        if (!reasoning.isEmpty()) {
            reasoningContent.append(reasoning);
            if (isFirstPrint) {
                System.out.println("====================Thinking process====================");
                isFirstPrint = false;
            }
            System.out.print(reasoning);
        }

        if (Objects.nonNull(content) && !content.isEmpty()) {
            Object text = content.get(0).get("text");
            finalContent.append(content.get(0).get("text"));
            if (!isFirstPrint) {
                System.out.println("\n====================Full response====================");
                isFirstPrint = true;
            }
            System.out.print(text);
        }
    }
    public static MultiModalConversationParam buildMultiModalConversationParam(MultiModalMessage Msg)  {
        return MultiModalConversationParam.builder()
                // API keys differ by region. To obtain one, see https://bailian.console.alibabacloud.com/?tab=model#/api-key
                // If not configured, replace with: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Example uses qvq-max. Replace with other model names as needed.
                .model("qvq-max")
                .messages(Arrays.asList(Msg))
                .incrementalOutput(true)
                .build();
    }

    public static void streamCallWithMessage(MultiModalConversation conv, MultiModalMessage Msg)
            throws NoApiKeyException, ApiException, InputRequiredException, UploadFileException {
        MultiModalConversationParam param = buildMultiModalConversationParam(Msg);
        Flowable<MultiModalConversationResult> result = conv.streamCall(param);
        result.blockingForEach(message -> {
            handleGenerationResult(message);
        });
    }
    public static void main(String[] args) {
        try {
            MultiModalConversation conv = new MultiModalConversation();
            MultiModalMessage userMsg = MultiModalMessage.builder()
                    .role(Role.USER.getValue())
                    .content(Arrays.asList(Collections.singletonMap("image", "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"),
                            Collections.singletonMap("text", "Solve this problem")))
                    .build();
            streamCallWithMessage(conv, userMsg);
//             Print the final result
//            if (reasoningContent.length() > 0) {
//                System.out.println("\n====================Full response====================");
//                System.out.println(finalContent.toString());
//            }
        } catch (ApiException | NoApiKeyException | UploadFileException | InputRequiredException e) {
            logger.error("An exception occurred: {}", e.getMessage());
        }
        System.exit(0);
    }
}
```

**Click to view the thinking process and full response**

```
====================Thinking process====================
Hmm, I need to solve this problem, which is to calculate the surface area and volume of two shapes. First, I need to carefully examine the image provided in the problem. The first shape is a rectangular prism, and the second is a cube. The problem asks to calculate their surface area and volume separately, with units in centimeters.

Let's look at the first shape, the rectangular prism. Its dimensions should be length, width, and height. According to the labels on the image, the length is 4 cm, the width is 3 cm, and the height is 2 cm. Right? I remember the formula for the surface area of a rectangular prism is 2 times (length × width + length × height + width × height). And the volume is length times width times height. Let me double-check if the formula is correct. Yes, the surface area is indeed the sum of the areas of the six faces, and because opposite faces have equal areas, this formula is correct.

So, plugging in the values, the surface area should be 2×(4×3 + 4×2 + 3×2). First, calculate the terms inside the parentheses: 4×3=12, 4×2=8, 3×2=6. Adding them up gives 12+8+6=26. Then multiplying by 2 gives 52 square centimeters. For the volume, 4×3×2=24 cubic centimeters. This part should be correct.

Next is the second shape, the cube. All its side lengths are 3 cm. The surface area of a cube is 6 times the square of the side length, because it has six identical square faces. The volume is the cube of the side length. So the surface area should be 6×3²=6×9=54 square centimeters. The volume is 3³=27 cubic centimeters. I need to pay attention to the units here. The problem states the unit is cm, so the results should be written in square centimeters and cubic centimeters.

However, I should double-check if I made any mistakes. For example, are the sides of the rectangular prism correctly identified? In the image, the length of the rectangular prism does look longer than its width, so length is 4, width is 3, and height is 2. For the cube, all three dimensions are 3, which is fine. Did I make any calculation errors? For example, in the surface area calculation for the rectangular prism, are the products correct, and is the addition correct? For instance, 4×3=12, 4×2=8, 3×2=6, adding up to 26, and multiplying by 2 is 52, which is correct. The volume 4×3×2=24 is also correct. For the cube, the surface area 6×9=54 and volume 27 are also correct.

One thing to note is the units. The problem clearly states the unit is cm, so I should add the correct unit symbols to the answers. Also, the problem states that each question is worth 6 points, for a total of 12 points, but there are only two questions, so each is worth 6 points. This doesn't affect the calculation process, but it's a reminder not to miss any steps or units.

To summarize, the surface area of the first shape is 52 square centimeters, and its volume is 24 cubic centimeters; the surface area of the second shape is 54 square centimeters, and its volume is 27 cubic centimeters. That should be it.

====================Full response====================
**Answer:**

1. **Rectangular Prism**  
   - **Surface Area**: \(2 \times (4 \times 3 + 4 \times 2 + 3 \times 2) = 2 \times 26 = 52\) square centimeters  
   - **Volume**: \(4 \times 3 \times 2 = 24\) cubic centimeters  

2. **Cube**  
   - **Surface Area**: \(6 \times 3^2 = 6 \times 9 = 54\) square centimeters  
   - **Volume**: \(3^3 = 27\) cubic centimeters  

**Explanation:**  
- The surface area of a rectangular prism is obtained by calculating the total area of its six faces, and its volume is the product of its length, width, and height.  
- The surface area of a cube is the sum of the areas of its six identical square faces, and its volume is the cube of its side length.  
- All units are in centimeters, as required by the problem.
```

## HTTP

## curl

```
# ======= IMPORTANT =======
# The following is the base URL for the Singapore region. If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation       
# API keys differ by region. To obtain one, see https://bailian.console.alibabacloud.com/?tab=model#/api-key
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-H 'X-DashScope-SSE: enable' \
-d '{
    "model": "qvq-max",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"},
                    {"text": "Solve this problem"}
                ]
            }
        ]
    }
}'
```

**Click to view the thinking process and full response**

```
id:1
event:result
:HTTP_STATUS/200
data:{"output":{"choices":[{"message":{"content":[],"reasoning_content":"Okay","role":"assistant"},"finish_reason":"null"}]},"usage":{"total_tokens":547,"input_tokens_details":{"image_tokens":520,"text_tokens":24},"output_tokens":3,"input_tokens":544,"output_tokens_details":{"text_tokens":3},"image_tokens":520},"request_id":"f361ae45-fbef-9387-9f35-1269780e0864"}

id:2
event:result
:HTTP_STATUS/200
data:{"output":{"choices":[{"message":{"content":[],"reasoning_content":",","role":"assistant"},"finish_reason":"null"}]},"usage":{"total_tokens":548,"input_tokens_details":{"image_tokens":520,"text_tokens":24},"output_tokens":4,"input_tokens":544,"output_tokens_details":{"text_tokens":4},"image_tokens":520},"request_id":"f361ae45-fbef-9387-9f35-1269780e0864"}

id:3
event:result
:HTTP_STATUS/200
data:{"output":{"choices":[{"message":{"content":[],"reasoning_content":" I am now","role":"assistant"},"finish_reason":"null"}]},"usage":{"total_tokens":549,"input_tokens_details":{"image_tokens":520,"text_tokens":24},"output_tokens":5,"input_tokens":544,"output_tokens_details":{"text_tokens":5},"image_tokens":520},"request_id":"f361ae45-fbef-9387-9f35-1269780e0864"}
.....
id:566
event:result
:HTTP_STATUS/200
data:{"output":{"choices":[{"message":{"content":[{"text":"square"}],"role":"assistant"},"finish_reason":"null"}]},"usage":{"total_tokens":1132,"input_tokens_details":{"image_tokens":520,"text_tokens":24},"output_tokens":588,"input_tokens":544,"output_tokens_details":{"text_tokens":588},"image_tokens":520},"request_id":"758b0356-653b-98ac-b4d3-f812437ba1ec"}

id:567
event:result
:HTTP_STATUS/200
data:{"output":{"choices":[{"message":{"content":[{"text":"centimeters"}],"role":"assistant"},"finish_reason":"null"}]},"usage":{"total_tokens":1133,"input_tokens_details":{"image_tokens":520,"text_tokens":24},"output_tokens":589,"input_tokens":544,"output_tokens_details":{"text_tokens":589},"image_tokens":520},"request_id":"758b0356-653b-98ac-b4d3-f812437ba1ec"}

id:568
event:result
:HTTP_STATUS/200
data:{"output":{"choices":[{"message":{"content":[],"role":"assistant"},"finish_reason":"stop"}]},"usage":{"total_tokens":1134,"input_tokens_details":{"image_tokens":520,"text_tokens":24},"output_tokens":590,"input_tokens":544,"output_tokens_details":{"text_tokens":590},"image_tokens":520},"request_id":"758b0356-653b-98ac-b4d3-f812437ba1ec"}
```

## **Core capabilities**

### **Enable or disable the thinking process**

For scenarios requiring detailed thinking (problem-solving, report analysis), enable thinking mode using the `enable_thinking` parameter as shown below.

**Important**

The `enable_thinking` parameter is supported by `qwen3.5-plus`, `qwen3-vl-plus`, `qwen3-vl-flash`, and `kimi-k2.5` series. `qwen3.5-plus` enables thinking by default (`enable_thinking`\=`true`).

## OpenAI compatible

`enable_thinking` and `thinking_budget` are non-standard OpenAI parameters. The parameter passing method varies by language:

-   **Python SDK:** You must pass them through the `extra_body` dictionary.
    
-   **Node.js SDK:** You can pass them directly as top-level parameters.
    

Python

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/compatible-mode/v1
    # If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

reasoning_content = ""  # Define the full thinking process
answer_content = ""     # Define the full response
is_answering = False   # Check if the thinking process has ended and the response has started
enable_thinking = True
# Create a chat completion request
completion = client.chat.completions.create(
    model="qwen3.5-plus",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"
                    },
                },
                {"type": "text", "text": "How do I solve this problem?"},
            ],
        },
    ],
    stream=True,
    # The enable_thinking parameter enables the thinking process. The thinking_budget parameter sets the maximum number of tokens for the reasoning process.
    # For qwen3.5-plus, qwen3-vl-plus, and qwen3-vl-flash, you can use enable_thinking to enable or disable thinking (qwen3.5-plus is enabled by default). For models with the 'thinking' suffix, such as qwen3-vl-235b-a22b-thinking, enable_thinking can only be set to true. This parameter does not apply to other Qwen-VL models.
    extra_body={
        'enable_thinking': enable_thinking
        },

    # Uncomment the following to return token usage in the last chunk
    # stream_options={
    #     "include_usage": True
    # }
)

if enable_thinking:
    print("\n" + "=" * 20 + "Thinking process" + "=" * 20 + "\n")

for chunk in completion:
    # If chunk.choices is empty, print the usage
    if not chunk.choices:
        print("\nUsage:")
        print(chunk.usage)
    else:
        delta = chunk.choices[0].delta
        # Print the thinking process
        if hasattr(delta, 'reasoning_content') and delta.reasoning_content != None:
            print(delta.reasoning_content, end='', flush=True)
            reasoning_content += delta.reasoning_content
        else:
            # Start responding
            if delta.content != "" and is_answering is False:
                print("\n" + "=" * 20 + "Full response" + "=" * 20 + "\n")
                is_answering = True
            # Print the response process
            print(delta.content, end='', flush=True)
            answer_content += delta.content

# print("=" * 20 + "Full thinking process" + "=" * 20 + "\n")
# print(reasoning_content)
# print("=" * 20 + "Full response" + "=" * 20 + "\n")
# print(answer_content)
```

Node.js

```
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  // API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
  // If no environment variable configured: apiKey: "sk-xxx"
  apiKey: process.env.DASHSCOPE_API_KEY,
 // The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/compatible-mode/v1
 //  If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1
  baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

let reasoningContent = '';
let answerContent = '';
let isAnswering = false;
let enableThinking = true;

let messages = [
    {
        role: "user",
        content: [
        { type: "image_url", image_url: { "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg" } },
        { type: "text", text: "Solve this problem" },
    ]
}]

async function main() {
    try {
        const stream = await openai.chat.completions.create({
            model: 'qwen3.5-plus',
            messages: messages,
            stream: true,
          // Note: In Node.js SDK, non-standard parameters (like enableThinking) pass as top-level properties, not in extra_body.
          enable_thinking: enableThinking

        });

        if (enableThinking){console.log('\n' + '='.repeat(20) + 'Thinking process' + '='.repeat(20) + '\n');}

        for await (const chunk of stream) {
            if (!chunk.choices?.length) {
                console.log('\nUsage:');
                console.log(chunk.usage);
                continue;
            }

            const delta = chunk.choices[0].delta;

            // Handle the thinking process
            if (delta.reasoning_content) {
                process.stdout.write(delta.reasoning_content);
                reasoningContent += delta.reasoning_content;
            }
            // Handle the formal response
            else if (delta.content) {
                if (!isAnswering) {
                    console.log('\n' + '='.repeat(20) + 'Full response' + '='.repeat(20) + '\n');
                    isAnswering = true;
                }
                process.stdout.write(delta.content);
                answerContent += delta.content;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

curl

```
# ======= IMPORTANT =======
# The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/compatible-mode/v1/chat/completions
# If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# === Delete this comment before execution ===

curl --location 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model": "qwen3.5-plus",
    "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"
          }
        },
        {
          "type": "text",
          "text": "Solve this problem"
        }
      ]
    }
  ],
    "stream":true,
    "stream_options":{"include_usage":true},
    "enable_thinking": true
}'
```

## DashScope

Python

```
import os
import dashscope
from dashscope import MultiModalConversation

# The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/api/v1
# If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1"

enable_thinking = True

messages = [
    {
        "role": "user",
        "content": [
            {"image": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"},
            {"text": "How do I solve this problem?"}
        ]
    }
]

response = MultiModalConversation.call(
    # If not configured, replace with: api_key="sk-xxx",
    # API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen3.5-plus",  
    messages=messages,
    stream=True,
    # The enable_thinking parameter enables the thinking process.
    # For qwen3.5-plus, qwen3-vl-plus, and qwen3-vl-flash, you can use enable_thinking to enable or disable thinking (qwen3.5-plus is enabled by default). For models with the 'thinking' suffix, such as qwen3-vl-235b-a22b-thinking, enable_thinking can only be set to true. This parameter does not apply to other Qwen-VL models.
    enable_thinking=enable_thinking

)

# Define the full thinking process
reasoning_content = ""
# Define the full response
answer_content = ""
# Check if the thinking process has ended and the response has started
is_answering = False

if enable_thinking:
    print("=" * 20 + "Thinking process" + "=" * 20)

for chunk in response:
    # If both the thinking process and the response are empty, ignore
    message = chunk.output.choices[0].message
    reasoning_content_chunk = message.get("reasoning_content", None)
    if (chunk.output.choices[0].message.content == [] and
        reasoning_content_chunk == ""):
        pass
    else:
        # If it is currently the thinking process
        if reasoning_content_chunk != None and chunk.output.choices[0].message.content == []:
            print(chunk.output.choices[0].message.reasoning_content, end="")
            reasoning_content += chunk.output.choices[0].message.reasoning_content
        # If it is currently the response
        elif chunk.output.choices[0].message.content != []:
            if not is_answering:
                print("\n" + "=" * 20 + "Full response" + "=" * 20)
                is_answering = True
            print(chunk.output.choices[0].message.content[0]["text"], end="")
            answer_content += chunk.output.choices[0].message.content[0]["text"]

# To print the full thinking process and response, uncomment and run the following code
# print("=" * 20 + "Full thinking process" + "=" * 20 + "\n")
# print(f"{reasoning_content}")
# print("=" * 20 + "Full response" + "=" * 20 + "\n")
# print(f"{answer_content}")
```

Java

```
// DashScope SDK version >= 2.21.10
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import io.reactivex.Flowable;

import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversation;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationParam;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationResult;
import com.alibaba.dashscope.common.MultiModalMessage;
import com.alibaba.dashscope.exception.UploadFileException;
import com.alibaba.dashscope.exception.InputRequiredException;
import java.lang.System;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    // The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/api/v1
    // If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1
    static {Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";}

    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private static StringBuilder reasoningContent = new StringBuilder();
    private static StringBuilder finalContent = new StringBuilder();
    private static boolean isFirstPrint = true;

    private static void handleGenerationResult(MultiModalConversationResult message) {
        String re = message.getOutput().getChoices().get(0).getMessage().getReasoningContent();
        String reasoning = Objects.isNull(re)?"":re; // Default value

        List<Map<String, Object>> content = message.getOutput().getChoices().get(0).getMessage().getContent();
        if (!reasoning.isEmpty()) {
            reasoningContent.append(reasoning);
            if (isFirstPrint) {
                System.out.println("====================Thinking process====================");
                isFirstPrint = false;
            }
            System.out.print(reasoning);
        }

        if (Objects.nonNull(content) && !content.isEmpty()) {
            Object text = content.get(0).get("text");
            finalContent.append(content.get(0).get("text"));
            if (!isFirstPrint) {
                System.out.println("\n====================Full response====================");
                isFirstPrint = true;
            }
            System.out.print(text);
        }
    }
    public static MultiModalConversationParam buildMultiModalConversationParam(MultiModalMessage Msg)  {
        return MultiModalConversationParam.builder()
                // If not configured, replace with: .apiKey("sk-xxx")
                // API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen3.5-plus")
                .messages(Arrays.asList(Msg))
                .enableThinking(true)
                .incrementalOutput(true)
                .build();
    }

    public static void streamCallWithMessage(MultiModalConversation conv, MultiModalMessage Msg)
            throws NoApiKeyException, ApiException, InputRequiredException, UploadFileException {
        MultiModalConversationParam param = buildMultiModalConversationParam(Msg);
        Flowable<MultiModalConversationResult> result = conv.streamCall(param);
        result.blockingForEach(message -> {
            handleGenerationResult(message);
        });
    }
    public static void main(String[] args) {
        try {
            MultiModalConversation conv = new MultiModalConversation();
            MultiModalMessage userMsg = MultiModalMessage.builder()
                    .role(Role.USER.getValue())
                    .content(Arrays.asList(Collections.singletonMap("image", "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"),
                            Collections.singletonMap("text", "Solve this problem")))
                    .build();
            streamCallWithMessage(conv, userMsg);
//             Print the final result
//            if (reasoningContent.length() > 0) {
//                System.out.println("\n====================Full response====================");
//                System.out.println(finalContent.toString());
//            }
        } catch (ApiException | NoApiKeyException | UploadFileException | InputRequiredException e) {
            logger.error("An exception occurred: {}", e.getMessage());
        }
        System.exit(0);
    }
}
```

curl

```
# ======= IMPORTANT =======
# API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-H 'X-DashScope-SSE: enable' \
-d '{
    "model": "qwen3.5-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"},
                    {"text": "Solve this problem"}
                ]
            }
        ]
    },
    "parameters":{
        "enable_thinking": true,
        "incremental_output": true
    }
}'
```

### **Limit thinking length**

Use the `thinking_budget` parameter to limit thinking process token length. If exceeded, the content is truncated and the model immediately generates the final answer. The default value is the model's maximum chain-of-thought length. For more information, see [Model list](/help/en/model-studio/models).

**Important**

The `thinking_budget` parameter is supported by Qwen3-VL (thinking mode) and kimi-k2.5 (thinking mode).

## OpenAI compatible

`thinking_budget` is a non-standard OpenAI parameter. When using the OpenAI Python SDK, pass it through `extra_body`.

Python

```
import os
from openai import OpenAI

client = OpenAI(
    # API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/compatible-mode/v1
    # If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)

reasoning_content = ""  # Define the full thinking process
answer_content = ""     # Define the full response
is_answering = False   # Check if the thinking process has ended and the response has started
enable_thinking = True
# Create a chat completion request
completion = client.chat.completions.create(
    model="qwen3.5-plus",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"
                    },
                },
                {"type": "text", "text": "How do I solve this problem?"},
            ],
        },
    ],
    stream=True,
    # The enable_thinking parameter enables the thinking process. The thinking_budget parameter sets the maximum number of tokens for the reasoning process.
    # For qwen3.5-plus, qwen3-vl-plus, and qwen3-vl-flash, you can use enable_thinking to enable or disable thinking (qwen3.5-plus is enabled by default). For models with the 'thinking' suffix, such as qwen3-vl-235b-a22b-thinking, enable_thinking can only be set to true. This parameter does not apply to other Qwen-VL models.
    extra_body={
        'enable_thinking': enable_thinking,
        "thinking_budget": 81920},

    # Uncomment the following to return token usage in the last chunk
    # stream_options={
    #     "include_usage": True
    # }
)

if enable_thinking:
    print("\n" + "=" * 20 + "Thinking process" + "=" * 20 + "\n")

for chunk in completion:
    # If chunk.choices is empty, print the usage
    if not chunk.choices:
        print("\nUsage:")
        print(chunk.usage)
    else:
        delta = chunk.choices[0].delta
        # Print the thinking process
        if hasattr(delta, 'reasoning_content') and delta.reasoning_content != None:
            print(delta.reasoning_content, end='', flush=True)
            reasoning_content += delta.reasoning_content
        else:
            # Start responding
            if delta.content != "" and is_answering is False:
                print("\n" + "=" * 20 + "Full response" + "=" * 20 + "\n")
                is_answering = True
            # Print the response process
            print(delta.content, end='', flush=True)
            answer_content += delta.content

# print("=" * 20 + "Full thinking process" + "=" * 20 + "\n")
# print(reasoning_content)
# print("=" * 20 + "Full response" + "=" * 20 + "\n")
# print(answer_content)
```

Node.js

```
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  // API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
  // If no environment variable configured: apiKey: "sk-xxx"
  apiKey: process.env.DASHSCOPE_API_KEY,
  // The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/compatible-mode/v1
  // If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1
  baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

let reasoningContent = '';
let answerContent = '';
let isAnswering = false;
let enableThinking = true;

let messages = [
    {
        role: "user",
        content: [
        { type: "image_url", image_url: { "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg" } },
        { type: "text", text: "Solve this problem" },
    ]
}]

async function main() {
    try {
        const stream = await openai.chat.completions.create({
            model: 'qwen3.5-plus',
            messages: messages,
            stream: true,
          // Note: In Node.js SDK, non-standard parameters (like enableThinking) pass as top-level properties, not in extra_body.
          enable_thinking: enableThinking,
          thinking_budget: 81920

        });

        if (enableThinking){console.log('\n' + '='.repeat(20) + 'Thinking process' + '='.repeat(20) + '\n');}

        for await (const chunk of stream) {
            if (!chunk.choices?.length) {
                console.log('\nUsage:');
                console.log(chunk.usage);
                continue;
            }

            const delta = chunk.choices[0].delta;

            // Handle the thinking process
            if (delta.reasoning_content) {
                process.stdout.write(delta.reasoning_content);
                reasoningContent += delta.reasoning_content;
            }
            // Handle the formal response
            else if (delta.content) {
                if (!isAnswering) {
                    console.log('\n' + '='.repeat(20) + 'Full response' + '='.repeat(20) + '\n');
                    isAnswering = true;
                }
                process.stdout.write(delta.content);
                answerContent += delta.content;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

curl

```
# ======= IMPORTANT =======
# The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/compatible-mode/v1/chat/completions
# If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# === Delete this comment before execution ===

curl --location 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model": "qwen3.5-plus",
    "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"
          }
        },
        {
          "type": "text",
          "text": "Solve this problem"
        }
      ]
    }
  ],
    "stream":true,
    "stream_options":{"include_usage":true},
    "enable_thinking": true,
    "thinking_budget": 81920
}'
```

## DashScope

Python

```
import os
import dashscope
from dashscope import MultiModalConversation

# The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/api/v1
# If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1"

enable_thinking = True

messages = [
    {
        "role": "user",
        "content": [
            {"image": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"},
            {"text": "How do I solve this problem?"}
        ]
    }
]

response = MultiModalConversation.call(
    # If not configured, replace with: api_key="sk-xxx",
    # API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen3.5-plus",  
    messages=messages,
    stream=True,
    # The enable_thinking parameter enables the thinking process.
    # For qwen3.5-plus, qwen3-vl-plus, and qwen3-vl-flash, you can use enable_thinking to enable or disable thinking (qwen3.5-plus is enabled by default). For models with the 'thinking' suffix, such as qwen3-vl-235b-a22b-thinking, enable_thinking can only be set to true. This parameter does not apply to other Qwen-VL models.
    enable_thinking=enable_thinking,
    # The thinking_budget parameter sets the maximum number of tokens for the reasoning process.
    thinking_budget=81920,

)

# Define the full thinking process
reasoning_content = ""
# Define the full response
answer_content = ""
# Check if the thinking process has ended and the response has started
is_answering = False

if enable_thinking:
    print("=" * 20 + "Thinking process" + "=" * 20)

for chunk in response:
    # If both the thinking process and the response are empty, ignore
    message = chunk.output.choices[0].message
    reasoning_content_chunk = message.get("reasoning_content", None)
    if (chunk.output.choices[0].message.content == [] and
        reasoning_content_chunk == ""):
        pass
    else:
        # If it is currently the thinking process
        if reasoning_content_chunk != None and chunk.output.choices[0].message.content == []:
            print(chunk.output.choices[0].message.reasoning_content, end="")
            reasoning_content += chunk.output.choices[0].message.reasoning_content
        # If it is currently the response
        elif chunk.output.choices[0].message.content != []:
            if not is_answering:
                print("\n" + "=" * 20 + "Full response" + "=" * 20)
                is_answering = True
            print(chunk.output.choices[0].message.content[0]["text"], end="")
            answer_content += chunk.output.choices[0].message.content[0]["text"]

# To print the full thinking process and response, uncomment and run the following code
# print("=" * 20 + "Full thinking process" + "=" * 20 + "\n")
# print(f"{reasoning_content}")
# print("=" * 20 + "Full response" + "=" * 20 + "\n")
# print(f"{answer_content}")
```

Java

```
// DashScope SDK version >= 2.21.10
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import io.reactivex.Flowable;

import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversation;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationParam;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationResult;
import com.alibaba.dashscope.common.MultiModalMessage;
import com.alibaba.dashscope.exception.UploadFileException;
import com.alibaba.dashscope.exception.InputRequiredException;
import java.lang.System;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    // The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/api/v1
    // If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1
    static {Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";}

    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private static StringBuilder reasoningContent = new StringBuilder();
    private static StringBuilder finalContent = new StringBuilder();
    private static boolean isFirstPrint = true;

    private static void handleGenerationResult(MultiModalConversationResult message) {
        String re = message.getOutput().getChoices().get(0).getMessage().getReasoningContent();
        String reasoning = Objects.isNull(re)?"":re; // Default value

        List<Map<String, Object>> content = message.getOutput().getChoices().get(0).getMessage().getContent();
        if (!reasoning.isEmpty()) {
            reasoningContent.append(reasoning);
            if (isFirstPrint) {
                System.out.println("====================Thinking process====================");
                isFirstPrint = false;
            }
            System.out.print(reasoning);
        }

        if (Objects.nonNull(content) && !content.isEmpty()) {
            Object text = content.get(0).get("text");
            finalContent.append(content.get(0).get("text"));
            if (!isFirstPrint) {
                System.out.println("\n====================Full response====================");
                isFirstPrint = true;
            }
            System.out.print(text);
        }
    }
    public static MultiModalConversationParam buildMultiModalConversationParam(MultiModalMessage Msg)  {
        return MultiModalConversationParam.builder()
                // If not configured, replace with: .apiKey("sk-xxx")
                // API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen3.5-plus")
                .messages(Arrays.asList(Msg))
                .enableThinking(true)
                .thinkingBudget(81920)
                .incrementalOutput(true)
                .build();
    }

    public static void streamCallWithMessage(MultiModalConversation conv, MultiModalMessage Msg)
            throws NoApiKeyException, ApiException, InputRequiredException, UploadFileException {
        MultiModalConversationParam param = buildMultiModalConversationParam(Msg);
        Flowable<MultiModalConversationResult> result = conv.streamCall(param);
        result.blockingForEach(message -> {
            handleGenerationResult(message);
        });
    }
    public static void main(String[] args) {
        try {
            MultiModalConversation conv = new MultiModalConversation();
            MultiModalMessage userMsg = MultiModalMessage.builder()
                    .role(Role.USER.getValue())
                    .content(Arrays.asList(Collections.singletonMap("image", "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"),
                            Collections.singletonMap("text", "Solve this problem")))
                    .build();
            streamCallWithMessage(conv, userMsg);
//             Print the final result
//            if (reasoningContent.length() > 0) {
//                System.out.println("\n====================Full response====================");
//                System.out.println(finalContent.toString());
//            }
        } catch (ApiException | NoApiKeyException | UploadFileException | InputRequiredException e) {
            logger.error("An exception occurred: {}", e.getMessage());
        }
        System.exit(0);
    }
}
```

curl

```
# ======= IMPORTANT =======
# API keys differ by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# The following is the base URL for the Singapore region. If you are using a model in the US (Virginia) region, replace the base_url with https://dashscope-us.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# If you are using a model in the Beijing region, replace the base_url with https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-H 'X-DashScope-SSE: enable' \
-d '{
    "model": "qwen3.5-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://img.alicdn.com/imgextra/i1/O1CN01gDEY8M1W114Hi3XcN_!!6000000002727-0-tps-1024-406.jpg"},
                    {"text": "Solve this problem"}
                ]
            }
        ]
    },
    "parameters":{
        "enable_thinking": true,
        "incremental_output": true,
        "thinking_budget": 81920
    }
}'
```

### **More examples**

Visual reasoning models support all visual understanding features for complex scenarios such as:

-   [Multi-image understanding](/help/en/model-studio/vision#32a707ea691qg)
    
-   [Video understanding](/help/en/model-studio/vision#e888120b96oaj)
    
-   [Processing high-resolution images](/help/en/model-studio/vision#e7e2db755f9h7)
    
-   [Pass local files (Base64 encoding or file path)](/help/en/model-studio/vision#a63fbac15a8s8)
    

## Billing

Total cost = (Input tokens × Input price per token) + (Output tokens × Output price per token).

-   Thinking process (`reasoning_content`) is billed as **output tokens**. If there is no thinking output, the non-thinking mode price applies.
    
-   For token calculation for images/videos, see [Image and video understanding](/help/en/model-studio/vision#c88f7244e4t6v).
    

## API reference

For the input and output parameters, see [Qwen](/help/en/model-studio/qwen-api-reference/).

## Error codes

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.
