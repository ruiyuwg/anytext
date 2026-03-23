Describes how to call Qwen models using the OpenAI-compatible Chat API, including input and output parameter descriptions and code examples.

## Singapore

`base_url` for SDK: `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`

HTTP endpoint: `POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions`

## US (Virginia)

`base_url` for SDK: `https://dashscope-us.aliyuncs.com/compatible-mode/v1`

HTTP endpoint: `POST https://dashscope-us.aliyuncs.com/compatible-mode/v1/chat/completions`

## China (Beijing)

`base_url` for SDK: `https://dashscope.aliyuncs.com/compatible-mode/v1`

HTTP endpoint: `POST https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`

## China (Hong Kong)

`base_url` for SDK: `https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1`

HTTP endpoint: `POST https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`

> Prerequisites: Get an [API key](/help/en/model-studio/get-api-key) and [set it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). If you use the OpenAI SDK, [install the SDK](/help/en/model-studio/install-sdk).

**Note**

**Regional API keys**: API keys differ by region (Beijing vs Singapore/Virginia). See [Get an API key](/help/en/model-studio/get-api-key) for details. In code examples, replace `DASHSCOPE_API_KEY` with your actual key if not using environment variables.

## **Request body**

POST /chat/completions Debug

## OpenAI-compatible API online debugging

×

 International (Singapore) Chinese Mainland (Beijing)

POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions

API Key Bearer Token

[Get API Key for International (Singapore) region](https://modelstudio.console.alibabacloud.com/&tab=dashboard?tab=dashboard#/api-key)

Request body

Default Deep thinking Image input Tool calling Structured output

{ "model": "qwen-plus", "messages": \[ { "role": "system", "content": "You are a helpful assistant." }, { "role": "user", "content": "Who are you?" } \] }

Send request Clear response

Response result

Raw response Parsed content

## Text input

## Python

```
import os
from openai import OpenAI


client = OpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the base_url for the Singapore region.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)

completion = client.chat.completions.create(
    model="qwen-plus",  # Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who are you?"},
    ],
    # extra_body={"enable_thinking": False},
)
print(completion.model_dump_json())
```

## Java

```
// This code uses OpenAI SDK version 2.6.0
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.chat.completions.ChatCompletion;
import com.openai.models.chat.completions.ChatCompletionCreateParams;

public class Main {
    public static void main(String[] args) {
        OpenAIClient client = OpenAIOkHttpClient.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // The following is the base_url for the Singapore region.
                .baseUrl("https://dashscope-intl.aliyuncs.com/compatible-mode/v1") 
                .build();

        ChatCompletionCreateParams params = ChatCompletionCreateParams.builder()
                .addUserMessage("Who are you?")
                .model("qwen-plus")
                .build();

        try {
            ChatCompletion chatCompletion = client.chat().completions().create(params);
            System.out.println(chatCompletion);
        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI(
    {
        // If the environment variable is not set, replace the following line with: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // The following is the base_url for the Singapore region.
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1" 
    }
);

async function main() {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",  //Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Who are you?" }
        ],
    });
    console.log(JSON.stringify(completion))
}

main();
```

## Go

```
package main

import (
	"context"
	"os"

	"github.com/openai/openai-go"
	"github.com/openai/openai-go/option"
)

func main() {
	client := openai.NewClient(
		option.WithAPIKey(os.Getenv("DASHSCOPE_API_KEY")), // defaults to os.LookupEnv("OPENAI_API_KEY")
		// The following is the base_url for the Singapore region.
		option.WithBaseURL("https://dashscope-intl.aliyuncs.com/compatible-mode/v1/"), 
	)
	chatCompletion, err := client.Chat.Completions.New(
		context.TODO(), openai.ChatCompletionNewParams{
			Messages: openai.F(
				[]openai.ChatCompletionMessageParamUnion{
					openai.UserMessage("Who are you?"),
				},
			),
			Model: openai.F("qwen-plus"),
		},
	)

	if err != nil {
		panic(err.Error())
	}

	println(chatCompletion.Choices[0].Message.Content)
}
```

## C# (HTTP)

```
using System.Net.Http.Headers;
using System.Text;

class Program
{
    private static readonly HttpClient httpClient = new HttpClient();

    static async Task Main(string[] args)
    {
        // If the environment variable is not set, replace the following line with: string? apiKey = "sk-xxx";
        string? apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY");

        if (string.IsNullOrEmpty(apiKey))
        {
            Console.WriteLine("API Key is not set. Make sure the 'DASHSCOPE_API_KEY' environment variable is set.");
            return;
        }

        // Set the request URL and content
        // The following is the base_url for the Singapore region.
        string url = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions";
        // Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        string jsonContent = @"{
            ""model"": ""qwen-plus"",
            ""messages"": [
                {
                    ""role"": ""system"",
                    ""content"": ""You are a helpful assistant.""
                },
                {
                    ""role"": ""user"", 
                    ""content"": ""Who are you?""
                }
            ]
        }";

        string result = await SendPostRequestAsync(url, jsonContent, apiKey);
        Console.WriteLine(result);
    }

    private static async Task<string> SendPostRequestAsync(string url, string jsonContent, string apiKey)
    {
        using (var content = new StringContent(jsonContent, Encoding.UTF8, "application/json"))
        {
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = await httpClient.PostAsync(url, content);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsStringAsync();
            }
            else
            {
                return $"Request failed: {response.StatusCode}";
            }
        }
    }
}
```

## PHP (HTTP)

```
<?php
// Set the request URL
// The following is the base_url for the Singapore region.
$url = 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions';
// If the environment variable is not set, replace the following line with: $apiKey = "sk-xxx";
$apiKey = getenv('DASHSCOPE_API_KEY');
$headers = [
    'Authorization: Bearer '.$apiKey,
    'Content-Type: application/json'
];
$data = [
    // Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
    "model" => "qwen-plus",
    "messages" => [
        [
            "role" => "system",
            "content" => "You are a helpful assistant."
        ],
        [
            "role" => "user",
            "content" => "Who are you?"
        ]
    ]
];
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}
curl_close($ch);
echo $response;
?>
```

## curl

> API keys differ by region. For Beijing region, use `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`. See Get an API key.

```
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
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

## Streaming output

> See [Streaming output](/help/en/model-studio/stream#793de1c84d6cb).

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
completion = client.chat.completions.create(
    model="qwen-plus",  # Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
    messages=[{'role': 'system', 'content': 'You are a helpful assistant.'},
                {'role': 'user', 'content': 'Who are you?'},],
    stream=True,
    stream_options={"include_usage": True}
    )
for chunk in completion:
    print(chunk.model_dump_json())
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI(
    {
        apiKey: process.env.DASHSCOPE_API_KEY,
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);

async function main() {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus", // Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who are you?"}
        ],
        stream: true,
    });
    for await (const chunk of completion) {
        console.log(JSON.stringify(chunk));
    }
}

main();
```

## curl

> API keys differ by region. For Beijing region, use `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`. See Get an API key.

```
curl --location "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions" \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-plus",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user", 
            "content": "Who are you?"
        }
    ],
    "stream":true
}'
```

## Image input

> For more image analysis options, see [Image and video understanding](/help/en/model-studio/vision).

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
completion = client.chat.completions.create(
    model="qwen-vl-plus",  # Model list: https://www.alibabacloud.com/help/en/model-studio/models
    messages=[{"role": "user","content": [
            {"type": "image_url",
             "image_url": {"url": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"}},
            {"type": "text", "text": "What is this?"},
            ]}]
    )
print(completion.model_dump_json())
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI(
    {
        apiKey: process.env.DASHSCOPE_API_KEY,
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);

async function main() {
    const response = await openai.chat.completions.create({
        model: "qwen-vl-max", // Model list: https://www.alibabacloud.com/help/en/model-studio/models
        messages: [{role: "user",content: [
            { type: "image_url",image_url: {"url": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"}},
            { type: "text", text: "What is this?" },
        ]}]
    });
    console.log(JSON.stringify(response));
}

main();
```

## curl

> API keys differ by region. For Beijing region, use `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`. See Get an API key.

```
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
  "model": "qwen-vl-plus",
  "messages": [{
      "role": "user",
      "content": [
       {"type": "image_url","image_url": {"url": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"}},
       {"type": "text","text": "What is this?"}
       ]}]
}'
```

## Video input

> Example: Using an image list as video input. For other methods (video files), see [Visual understanding](/help/en/model-studio/vision#80dbf6ca8fh6s).

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)
completion = client.chat.completions.create(
    # Model list: https://www.alibabacloud.com/help/en/model-studio/models
    model="qwen-vl-max",
    messages=[{
        "role": "user",
        "content": [
            {
                "type": "video",
                "video": [
                    "https://img.alicdn.com/imgextra/i3/O1CN01K3SgGo1eqmlUgeE9b_!!6000000003923-0-tps-3840-2160.jpg",
                    "https://img.alicdn.com/imgextra/i4/O1CN01BjZvwg1Y23CF5qIRB_!!6000000003000-0-tps-3840-2160.jpg",
                    "https://img.alicdn.com/imgextra/i4/O1CN01Ib0clU27vTgBdbVLQ_!!6000000007859-0-tps-3840-2160.jpg",
                    "https://img.alicdn.com/imgextra/i1/O1CN01aygPLW1s3EXCdSN4X_!!6000000005710-0-tps-3840-2160.jpg"]
            },
            {
                "type": "text",
                "text": "Describe the process in this video."
            }]}]
)
print(completion.model_dump_json())
```

## Node.js

```
// Make sure you have specified "type": "module" in package.json.
import OpenAI from "openai"; 

const openai = new OpenAI({
    // If the environment variable is not set, replace the following line with: apiKey: "sk-xxx",
    // API keys for the Singapore/Virginia and Beijing regions are different. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    apiKey: process.env.DASHSCOPE_API_KEY, 
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"    
});

async function main() {
    const response = await openai.chat.completions.create({
        // Model list: https://www.alibabacloud.com/help/en/model-studio/models 
        model: "qwen-vl-max",
        messages: [{
            role: "user",
            content: [
                {
                    type: "video",
                    video: [
                        "https://img.alicdn.com/imgextra/i3/O1CN01K3SgGo1eqmlUgeE9b_!!6000000003923-0-tps-3840-2160.jpg",
                        "https://img.alicdn.com/imgextra/i4/O1CN01BjZvwg1Y23CF5qIRB_!!6000000003000-0-tps-3840-2160.jpg",
                        "https://img.alicdn.com/imgextra/i4/O1CN01Ib0clU27vTgBdbVLQ_!!6000000007859-0-tps-3840-2160.jpg",
                        "https://img.alicdn.com/imgextra/i1/O1CN01aygPLW1s3EXCdSN4X_!!6000000005710-0-tps-3840-2160.jpg"
                    ]
                },
                {
                    type: "text",
                    text: "Describe the process in this video."
                }
        ]}]
    });
    console.log(JSON.stringify(response));
}

main();
```

## curl

> The API keys for the Singapore/Virginia and Beijing regions are different. [Get an API key](/help/en/model-studio/get-api-key). The following is the base\_url for the Singapore region.

```
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "qwen-vl-max",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "video",
                    "video": [
                        "https://img.alicdn.com/imgextra/i3/O1CN01K3SgGo1eqmlUgeE9b_!!6000000003923-0-tps-3840-2160.jpg",
                        "https://img.alicdn.com/imgextra/i4/O1CN01BjZvwg1Y23CF5qIRB_!!6000000003000-0-tps-3840-2160.jpg",
                        "https://img.alicdn.com/imgextra/i4/O1CN01Ib0clU27vTgBdbVLQ_!!6000000007859-0-tps-3840-2160.jpg",
                        "https://img.alicdn.com/imgextra/i1/O1CN01aygPLW1s3EXCdSN4X_!!6000000005710-0-tps-3840-2160.jpg"
                    ]
                },
                {
                    "type": "text",
                    "text": "Describe the process in this video."
                }
            ]
        }
    ]
}'
```

## Tool calling

> For the complete Function calling workflow code, see [Function calling](/help/en/model-studio/qwen-function-calling).

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)

tools = [
    # Tool 1: Get current time (no parameters needed)
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            "parameters": {}
        }
    },  
    # Tool 2: Get weather (requires location parameter)
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Useful when you want to check the weather in a specific city.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                    }
                },
                "required": ["location"]
            }
        }
    }
]
messages = [{"role": "user", "content": "What is the weather like in Hangzhou?"}]
completion = client.chat.completions.create(
    model="qwen-plus",  # Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
    messages=messages,
    tools=tools
)

print(completion.model_dump_json())
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI(
    {
        // If the environment variable is not set, replace the following line with: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);

const messages = [{"role": "user", "content": "What is the weather like in Hangzhou?"}];
const tools = [
// Tool 1: Get current time (no parameters needed)
{
    "type": "function",
    "function": {
        "name": "get_current_time",
        "description": "Useful when you want to know the current time.",
        "parameters": {}
    }
},  
// Tool 2: Get weather (requires location parameter)
{
    "type": "function",
    "function": {
        "name": "get_current_weather",
        "description": "Useful when you want to check the weather in a specific city.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                }
            },
            "required": ["location"]
        }
    }
}
];

async function main() {
    const response = await openai.chat.completions.create({
        model: "qwen-plus", // Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        messages: messages,
        tools: tools,
    });
    console.log(JSON.stringify(response));
}

main();
```

## curl

> The API keys for the Singapore/Virginia and Beijing regions are different. [Get an API key](/help/en/model-studio/get-api-key). The following is the base\_url for the Singapore region.

```
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user", 
            "content": "What is the weather like in Hangzhou?"
        }
    ],
    "tools": [
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            "parameters": {}
        }
    },
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Useful when you want to check the weather in a specific city.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location":{
                        "type": "string",
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                    }
                },
                "required": ["location"]
            }
        }
    }
  ]
}'
```

## Asynchronous invocation

```
import os
import asyncio
from openai import AsyncOpenAI
import platform

client = AsyncOpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    # If you use a model in the China (Beijing) region, you need to use an API KEY for that region. Get it here: https://bailian.console.alibabacloud.com/?tab=model#/api-key
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

async def main():
    response = await client.chat.completions.create(
        messages=[{"role": "user", "content": "Who are you?"}],
        model="qwen-plus",  # Model list: https://www.alibabacloud.com/help/en/model-studio/getting-started/models
    )
    print(response.model_dump_json())

if platform.system() == "Windows":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
asyncio.run(main())
```

**model** `_string_` **(Required)**

The name of the model to use.

Supported models include Qwen large language models (commercial and open source), Qwen-VL, Qwen-Coder, Qwen-Omni, and Qwen-Math.

**For specific model names and billing information, see** [Text Generation - Qwen](/help/en/model-studio/models#9f8890ce29g5u).

**messages** `_array_` **(Required)**

The conversation history for the model, listed in chronological order.

**Message types**

System Message `_object_` **(Optional)**

A system message that defines the role, tone, task objectives, or constraints for the large language model. Place it at the beginning of the `messages` array.

> Do not set a System Message for the QwQ model. A System Message has no effect on the QVQ model.

**Properties**

**content** `_string_` **(Required)**

A system instruction that defines the model’s role, behavior, response style, and task constraints.

**role** `_string_` **(Required)**

The role for a system message. The value is fixed as `system`.

User Message `_object_` **(Required)**

A user message that passes questions, instructions, or context to the model.

**Properties**

**content** `_string or array_` **(Required)**

The message content. This is a string for text-only input. It is an array for multi-modal input, such as images, or if explicit caching is enabled.

**Properties for multi-modal models or when explicit caching is enabled**

**type** `_string_` **(Required)**

Valid values:

-   `text`
    
    Set to `text` for text input.
    
-   `image_url`
    
    Set to `image_url` for image input.
    
-   `input_audio`
    
    Set to `input_audio` for audio input.
    
-   `video`
    
    Set to `video` when the video input is an image list.
    
-   `video_url`
    
    Set to `video_url` for video file input.
    
    > Only some Qwen-VL models accept video files as input. See [Video understanding (Qwen-VL)](/help/en/model-studio/vision#80dbf6ca8fh6s). The QVQ and Qwen-Omni models support direct video file input.
    

**text** `_string_`

The input text. This parameter is required when `type` is `text`.

**image\_url** `_object_`

The input image information. This parameter is required when `type` is `image_url`.

**Properties**

**url** `_string_` **(Required)**

The URL or Base64 Data URL of the image. To pass a local file, see [Image and video understanding](/help/en/model-studio/vision#647c6397db430).

**input\_audio** `_object_`

The input audio information. This parameter is required when `type` is `input_audio`.

**Properties**

**data** `_string_` **(Required)**

The URL or Base64 Data URL of the audio. To pass a local file, see [Input Base64-encoded local files](/help/en/model-studio/qwen-omni#c516d1e824x03).

**format** `_string_` **(Required)**

The format of the input audio, such as `mp3` or `wav`.

**video** `_array_`

The video information represented as an image list. This parameter is required when `type` is `video`. For usage instructions, see [Video understanding (Qwen-VL)](/help/en/model-studio/vision#80dbf6ca8fh6s), [Video understanding (QVQ)](/help/en/model-studio/visual-reasoning#e6df293d5565g), or [Video understanding (Qwen-Omni)](/help/en/model-studio/qwen-omni#0f4360d63a8nk).

Example value:

```
[
    "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/xzsgiz/football1.jpg",
    "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/tdescd/football2.jpg",
    "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/zefdja/football3.jpg",
    "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/aedbqh/football4.jpg"
]
```

**video\_url** `_object_`

The input video file information. This parameter is required when `type` is `video_url`.

Qwen-VL can only understand the visual information in video files. Qwen-Omni can understand both the visual and audio information.

**Properties**

**url** `_string_` **(Required)**

The public network URL or Base64 Data URL of the video file. To input a local video file, see [Input Base64-encoded local files](/help/en/model-studio/qwen-omni#c516d1e824x03).

**fps** `_float_` **(Optional)**

The number of frames to extract per second. The value must be in the range of \[0.1, 10\]. The default value is 2.0.

**Function description**

Fps provides the following features:

-   For video file input, it controls the frame extraction frequency. One frame is extracted every fps1​ seconds.
    
    > Applicable to [Qwen-VL](/help/en/model-studio/vision) and [QVQ models](/help/en/model-studio/visual-reasoning).
    
-   It informs the model of the time interval between adjacent frames. This helps the model better understand the temporal dynamics of the video. This function applies to both video file and image list inputs. It is suitable for scenarios such as event time localization or segment content summarization.
    
    > Supports the `Qwen3.5`, `Qwen3-VL`, `Qwen2.5-VL`, and `QVQ` models.
    

A larger `fps` value is suitable for high-speed motion scenarios, such as sports events or action movies. A smaller `fps` value is suitable for long videos or content with static scenes.

**Example values**

-   For image list input: `{"video":["https://xx1.jpg",...,"https://xxn.jpg"],"fps":2}`
    
-   For video file input: `{"video": "https://xx1.mp4","fps":2}`
    

**min\_pixels** `_integer_` **(Optional)**

Sets the minimum pixel threshold for an input image or video frame. If an input image or video frame has a pixel count less than `min_pixels`, it is scaled up until the total pixel count exceeds `min_pixels`. Applicable to Qwen-VL and QVQ models.

**Value range**

-   **For image input:**
    
    -   `Qwen3.5` and `Qwen3-VL`: The default and minimum value is `65536`.
        
    -   `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default and minimum value is `4096`.
        
    -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, open source `Qwen2.5-VL` series, and `QVQ` series models: The default and minimum value is `3136`.
        
-   **For video file or image list input:**
    
    -   Qwen3.5, Qwen3-VL (including commercial and open source versions), `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default value is `65536`. The minimum value is `4096`.
        
    -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, open source `Qwen2.5-VL` series, and `QVQ` series models: The default value is `50176`. The minimum value is `3136`.
        

**Example values**

-   For image input: `{"type": "image_url","image_url": {"url":"https://xxxx.jpg"},"min_pixels": 65536}`
    
-   For video file input: `{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"min_pixels": 65536}`
    
-   For image list input: `{"type": "video","video": ["https://xx1.jpg",...,"https://xxn.jpg"],"min_pixels": 65536}`
    

**max\_pixels** `_integer_` **(Optional)**

Sets the maximum pixel threshold for an input image or video frame. If an input image or video has a pixel count within the `[min_pixels, max_pixels]` range, the model processes the original image. If the pixel count exceeds `max_pixels`, the image is scaled down until its total pixel count is less than `max_pixels`. Applicable to Qwen-VL and QVQ models.

**Value range**

-   **For image input:**
    
    `max_pixels` is related to whether the `[vl_high_resolution_images](/help/en/model-studio/qwen-api-reference/#0edad44583knr)` parameter is enabled.
    
    -   If `vl_high_resolution_images` is `False`:
        
        -   `Qwen3.5` and `Qwen3-VL`: The default value is `2621440`. The maximum value is `16777216`.
            
        -   `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default value is `1310720`. The maximum value is `16777216`.
            
        -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, open source `Qwen2.5-VL` series, and `QVQ` series models: The default value is `1003520`. The maximum value is `12845056`.
            
    
    -   If `vl_high_resolution_images` is `True`:
        
        -   `Qwen3.5`, `Qwen3-VL`, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: `max_pixels` is invalid. The maximum pixel count for an input image is fixed at `16777216`.
            
        -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, open source `Qwen2.5-VL` series, and `QVQ` series models: `max_pixels` is invalid. The maximum pixel count for an input image is fixed at `12845056`.
            
-   **For video file or image list input:**
    
    -   `qwen3.5` series, `qwen3-vl-plus` series, `qwen3-vl-flash` series, `qwen3-vl-235b-a22b-thinking`, and `qwen3-vl-235b-a22b-instruct`: The default value is `655360`. The maximum value is `2048000`.
        
    -   Other `Qwen3-VL` open source models, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default value is `655360`. The maximum value is `786432`.
        
    -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, open source `Qwen2.5-VL` series, and `QVQ` series models: The default value is `501760`. The maximum value is `602112`.
        

**Example values**

-   For image input: `{"type": "image_url","image_url": {"url":"https://xxxx.jpg"},"max_pixels": 8388608}`
    
-   For video file input: `{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"max_pixels": 655360}`
    
-   For image list input: `{"type": "video","video": ["https://xx1.jpg",...,"https://xxn.jpg"],"max_pixels": 655360}`
    

**total\_pixels** `_integer_` **(Optional)**

Limits the total number of pixels for all frames extracted from a video (pixels per frame × total number of frames). If the video’s total pixel count exceeds this limit, the system scales down the video frames. However, it ensures that the pixel count of any single frame remains within the `[min_pixels, max_pixels]` range. Applicable to Qwen-VL and QVQ models.

For long videos with many extracted frames, lower this value to reduce token consumption and processing time. However, this may cause a loss of image detail.

**Value range**

-   `qwen3.5` series, `qwen3-vl-plus` series, `qwen3-vl-flash` series, `qwen3-vl-235b-a22b-thinking`, and `qwen3-vl-235b-a22b-instruct`: The default and minimum value is 134217728. This value corresponds to `131072` image tokens (1 image token per 32×32 pixels).
    
-   Other `Qwen3-VL` open source models, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default and minimum value is `67108864`. This value corresponds to `65536` image tokens (1 image token per 32×32 pixels).
    
-   Other `qwen-vl-plus` models, other `qwen-vl-max` models, open source `Qwen2.5-VL` series, and `QVQ` series models: The default and minimum value is `51380224`. This value corresponds to `65536` image tokens (1 image token per 28×28 pixels).
    

**Example values**

-   For video file input: `{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"total_pixels": 134217728}`
    
-   For image list input: `{"type": "video","video": ["https://xx1.jpg",...,"https://xxn.jpg"],"total_pixels": 134217728}`
    

**cache\_control** `_object_` **(Optional)**

Enables explicit caching. See [Explicit cache](/help/en/model-studio/context-cache#825f201c5fy6o).

**Properties**

**type** `_string_` **(Required)**

Only `ephemeral` is supported.

**role** `_string_` **(Required)**

The role for a user message. The value is fixed as `user`.

Assistant Message `_object_` **(Optional)**

The model’s reply. This is typically sent back to the model as context in a multi-turn conversation.

**Properties**

**content** `_string_` **(Optional)**

The text content of the model’s reply. If `tool_calls` is included, `content` can be empty. Otherwise, `content` is required.

**role** `_string_` **(Required)**

The role for an assistant message. The value is fixed as `assistant`.

**partial** `_boolean_` **(Optional)** Defaults to: `false`

Specifies whether to enable partial mode.

Valid values:

-   true
    
-   false
    

See [partial mode](/help/en/model-studio/partial-mode).

**tool\_calls** `_array_` **(Optional)**

The tool and input parameter information returned after a function call is initiated. It contains one or more objects and is retrieved from the `tool_calls` field of the previous model response.

**Properties**

**id** `_string_` **(Required)**

The ID of the tool response.

**type** `_string_` **(Required)**

The tool type. Currently, only `function` is supported.

**function** `_object_` **(Required)**

The tool and input parameter information.

**Properties**

**name** `_string_` **(Required)**

The tool name.

**arguments** `_string_` **(Required)**

The input parameter information, formatted as a JSON string.

**index** `_integer_` **(Required)**

The index of the current tool information in the `tool_calls` array.

Tool Message `_object_` **(Optional)**

The output information of the tool.

**Properties**

**content** `_string_` **(Required)**

The output content of the tool function. It must be a string. If the tool returns structured data, such as JSON, serialize it into a string.

**role** `_string_` **(Required)**

The value is fixed as `tool`.

**tool\_call\_id** `_string_` **(Required)**

The ID returned after a function call is initiated. Retrieve it from completion.choices\[0\].message.tool\_calls\[$index\].id. This ID marks the tool corresponding to the Tool Message.

**stream** `_boolean_` (Optional. Defaults to `false`.)

Enables streaming output mode. See [Streaming output](/help/en/model-studio/stream).

Valid values:

-   `false`: The model returns the complete content at once after generation.
    
-   `true`: The model generates and sends output incrementally. A data block (chunk) is returned as soon as part of the content is generated. You can read these chunks in real time to assemble the full reply.
    

You can set this parameter to `true` to improve the reading experience and reduce the risk of timeouts.

**stream\_options** `_object_` (Optional)

Configuration options for streaming output. This parameter is effective only when `stream` is set to `true`.

**Properties**

**include\_usage** `_boolean_` (Optional. Defaults to `false`)

Specifies whether to include token consumption information in the **last data block** of the response.

Valid values:

-   `true`
    
-   `false`
    

> For streaming output, token consumption information is included only in the last data block of the response.

**modalities** `array` (Optional) Default: `["text"]`

Specifies the modalities of the output data. This parameter applies only to Qwen-Omni models. See [Qwen-Omni](/help/en/model-studio/qwen-omni).

Valid values:

-   `["text","audio"]`
    
-   `["text"]`
    

**audio** `_object_` (Optional)

The voice and format of the output audio. This parameter applies only to Qwen-Omni models, and you must set the `modalities` parameter to `["text","audio"]`. See [Qwen-Omni](/help/en/model-studio/qwen-omni).

**Properties**

**voice** `_string_` (Required)

The voice used for the output audio. See [Voice list](/help/en/model-studio/qwen-omni#a447c4fbf5ul0).

**format** `_string_` (Required)

The format of the output audio. Only `wav` is supported.

**temperature** `_float_` (Optional)

The sampling temperature controls the diversity of the generated text.

Higher values increase diversity, while lower values make the output more deterministic.

The value must be greater than or equal to 0 and less than 2.

Both the temperature and top\_p parameters control the diversity of the generated text. Set only one of them. See [Text generation overview](/help/en/model-studio/text-generation#ad7b336bec5fw).

> Do not modify the default temperature value for QVQ models.

**top\_p** `_float_` (Optional)

The probability threshold for nucleus sampling. This parameter controls the diversity of the text that the model generates.

A higher \`top\_p\` value produces more diverse text. A lower \`top\_p\` value produces more deterministic text.

Value range: (0, 1.0\]

Both \`temperature\` and \`top\_p\` control the diversity of the generated text. Set only one of these parameters. See [Text generation overview](/help/en/model-studio/text-generation#ad7b336bec5fw).

> Do not modify the default \`top\_p\` value for QVQ models.

**top\_k** `_integer_` (Optional)

Specifies the number of candidate tokens to use for sampling during generation. A larger value produces more random output, whereas a smaller value produces more deterministic output. If set to `null` or a value greater than 100, the `top_k` strategy is disabled and only the `top_p` strategy takes effect. The value must be an integer greater than or equal to 0.

**Default top\_k values**

QVQ series, qwen-vl-plus-2025-07-10, and qwen-vl-plus-2025-08-15: 10.

QwQ series: 40.

Other qwen-vl-plus series, models before qwen-vl-max-2025-08-13, qwen2.5-omni-7b: 1.

Qwen3-Omni-Flash series: 50.

All other models: 20.

> This parameter is not a standard OpenAI parameter. When using the Python SDK, include it in the **extra\_body** object. Configure it as follows: extra\_body={"top\_k":xxx}.

> You must not change the default top\_k value for QVQ models.

**presence\_penalty** `_float_` (Optional)

Controls how strongly the model avoids repeating content.

Valid values: -2.0 to 2.0. Positive values reduce repetition. Negative values increase it.

For scenarios that require diversity and creativity, such as creative writing or brainstorming, increase this value. For scenarios that require consistency and terminological accuracy, such as technical documents or formal text, decrease this value.

**Default presence\_penalty values**

Qwen3.5 (non-thinking mode), qwen3-max-preview (thinking mode), Qwen3 (non-thinking mode), Qwen3-Instruct series, qwen3-0.6b/1.7b/4b (thinking mode), QVQ series, qwen-max, qwen-max-latest, qwen-max-latest, qwen2.5-vl series, qwen-vl-max series, qwen-vl-plus, Qwen3-VL (non-thinking): 1.5.

qwen-vl-plus-latest, qwen-vl-plus-2025-08-15: 1.2.

qwen-vl-plus-2025-01-25: 1.0.

qwen3-8b/14b/32b/30b-a3b/235b-a22b (thinking mode), qwen-plus/qwen-plus-latest/2025-04-28 (thinking mode), qwen-turbo/qwen-turbo/2025-04-28 (thinking mode): 0.5.

All other models: 0.0.

**How it works**

When the parameter value is positive, the model penalizes tokens that already appear in the generated text. The penalty does not depend on how many times a token appears. This reduces the likelihood of those tokens reappearing, which decreases repetition and increases lexical diversity.

**Example**

Prompt: Translate this sentence into English: "Esta película es buena. La trama es buena, la actuación es buena, la música es buena, y en general, toda la película es simplemente buena. Es realmente buena, de hecho. La trama es tan buena, y la actuación es tan buena, y la música es tan buena."

Parameter value 2.0: This movie is very good. The plot is great, the acting is great, the music is also very good, and overall, the whole movie is incredibly good. In fact, it is truly excellent. The plot is very exciting, the acting is outstanding, and the music is so beautiful.

Parameter value 0.0: This movie is good. The plot is good, the acting is good, the music is also good, and overall, the whole movie is very good. In fact, it is really great. The plot is very good, the acting is also very outstanding, and the music is also excellent.

Parameter value -2.0: This movie is very good. The plot is very good, the acting is very good, the music is also very good, and overall, the whole movie is very good. In fact, it is really great. The plot is very good, the acting is also very good, and the music is also very good.

> When using the qwen-vl-plus-2025-01-25 model for text extraction, set presence\_penalty to 1.5.

> Do not modify the default presence\_penalty value for QVQ models.

**response\_format** `_object_` (Optional. Defaults to `{"type": "text"}`)

The format of the response content. Valid values:

-   `{"type": "text"}`: Returns a plain text response.
    
-   `{"type": "json_object"}`: Returns a JSON string that conforms to standard JSON syntax.
    
-   `{"type": "json_schema","json_schema": {...}}`: Returns a JSON string that conforms to a custom schema.
    

> See [Structured output](/help/en/model-studio/qwen-structured-output).

> If you specify `{"type": "json_object"}`, explicitly instruct the model to output JSON in the prompt, such as by adding “Please output in JSON format.” Otherwise, an error occurs.

> For supported models, see [Structured output](/help/en/model-studio/qwen-structured-output).

**Properties**

**type** `_string_` **(Required)**

The format of the response content. Valid values:

-   `text`: Returns a plain text response.
    
-   `json_object`: Returns a JSON string that conforms to standard JSON syntax.
    
-   `json_schema`: Returns a JSON string that conforms to a custom schema.
    

**json\_schema** `_object_`

Defines the configuration for structured output.

**Properties**

**name** `_string_` **(Required)**

A unique name for the schema. The name can contain only letters (case-insensitive), numbers, underscores (\_), and hyphens (-). Maximum length is 64 characters.

**description** `_string_` (Optional)

A description of the schema’s purpose. This helps the model understand the semantic context of the output.

**schema** `_object_` (Optional)

An object that conforms to the JSON Schema standard. It defines the data structure for the model output.

> To learn how to build a JSON Schema, see [JSON Schema](https://json-schema.org/)

**strict** `_boolean_` (Optional. Defaults to `false`)

Specifies whether the model must strictly follow all schema constraints.

-   **true** (Recommended)
    
    The model strictly follows all constraints, such as field types, required items, and formats. This ensures full compliance of the output.
    
-   **false** (Not recommended)
    
    The model loosely follows the schema. The output may not conform to the specification and can result in validation failure.
    

**max\_tokens** `_integer_` (Optional)

The maximum number of tokens in the response. Generation stops when this limit is reached, and the `finish_reason` field in the response is set to `length`.

The default and maximum values correspond to the model’s maximum output length. See [Text Generation - Qwen](/help/en/model-studio/models#9f8890ce29g5u).

You can use this parameter to control output length in scenarios such as generating summaries or keywords, or to reduce costs and shorten response time.

When `max_tokens` is triggered, the `finish_reason` field in the response is set to `length`.

> `max_tokens` does not limit the length of the chain-of-thought.

**vl\_high\_resolution\_images** `_boolean_` (Optional. Defaults to `false`.)

Increases the maximum pixel limit for input images to the pixel value corresponding to 16384 tokens. See [Process high-resolution images](/help/en/model-studio/vision#e7e2db755f9h7).

-   `vl_high_resolution_images: true`: Uses a fixed-resolution strategy and ignores the `max_pixels` setting. If an image exceeds this resolution, its total pixel count is downscaled to meet the limit.
    
    **Click to view the pixel limits for each model**
    
    When `vl_high_resolution_images` is `true`, different models have different pixel limits:
    
    -   `qwen3.5 series`, `Qwen3-VL series`, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: `16,777,216` (each `Token` corresponds to `32×32` pixels, i.e., `16,384×32×32`)
        
    -   `QVQ series` and other `Qwen2.5-VL series` models: `12,845,056` (each `Token` corresponds to `28×28` pixels, i.e., `16,384×28×28`)
        
    
-   If `vl_high_resolution_images` is `false`, the actual pixel limit is determined by `max_pixels`. If an input image exceeds `max_pixels`, it is downscaled to fit within `max_pixels`. The default pixel limits for models match the default value of `max_pixels`.
    

> This parameter is not a standard OpenAI parameter. When making calls with the Python SDK, include this parameter in the **extra\_body** object. The configuration is as follows: extra\_body={"vl\_high\_resolution\_images":xxx}.

**n** `_integer_` (Optional. Defaults to 1)

The number of responses to generate must be an integer in the range of `1-4`. This is useful for scenarios that require multiple candidate responses, such as creative writing or ad copy.

> This parameter is supported only by the [Qwen3 (non-thinking mode)](/help/en/model-studio/deep-thinking#be9890136awsc) models.

> If you pass the `tools` parameter, set `n` to 1.

> Increasing n increases output token consumption but does not affect input token consumption.

**enable\_thinking** `_boolean_` (Optional)

Enables the thinking mode for hybrid thinking models. This mode is available for the Qwen3.5, Qwen3, Qwen3-Omni-Flash, and Qwen3-VL models. See [Deep thinking](/help/en/model-studio/deep-thinking).

Valid values:

-   `true`
    
    > When enabled, the thinking content is returned in the `reasoning_content` field.
    
-   `false`
    

Default values for different models: [Supported models](/help/en/model-studio/deep-thinking#78286fdc35hlw)

> This parameter is not a standard OpenAI parameter. When you make a call using the Python SDK, place it in the **extra\_body** object. It is configured as follows: `extra_body={"enable_thinking": xxx}`.

**thinking\_budget** `_integer_` (Optional)

The maximum number of tokens for the thinking process. This applies to Qwen3.5, Qwen3-VL, and the commercial and open source versions of Qwen3 models. See [Limit thinking process length](/help/en/model-studio/deep-thinking#e7c0002fe4meu).

The default value is the model's maximum chain-of-thought length. See [Model List](/help/en/model-studio/models)

> This parameter is not a standard OpenAI parameter. When you use the Python SDK, place this parameter in the **extra\_body** object. Configure the parameter as follows: `extra_body={"thinking_budget": xxx}`.

**enable\_code\_interpreter** `_boolean_` (Optional. Defaults to `false`.)

Specifies whether to enable the code interpreter feature. See [Code interpreter](/help/en/model-studio/qwen-code-interpreter).

Valid values:

-   `true`
    
-   `false`
    

> This parameter is not a standard OpenAI parameter. When you make calls using the Python SDK, include this parameter in the **extra\_body** object. The configuration is as follows: `extra_body={"enable_code_interpreter": xxx}`.

**seed** `_integer_` (Optional)

The random number seed. This parameter ensures that results are reproducible. If you use the same `seed` value in a call and the other parameters remain unchanged, the model returns the same result whenever possible.

Valid values: `[0,231-1]`.

**logprobs** `_boolean_` (Optional) Defaults to `false`

Specifies whether to return the log probabilities of the output tokens. Valid values:

-   `true`
    
-   `false`
    

> Content generated during the thinking phase (`reasoning_content`) does not include log probabilities.

**Supported models**

-   Qwen-plus series snapshots (excluding the stable model)
    
-   Qwen-turbo series snapshots (excluding the stable model)
    
-   Qwen3-vl-plus models (including the stable model)
    
-   Qwen3-vl-flash models (including the stable model)
    
-   Qwen3 open source models
    

**top\_logprobs** `_integer_` (Optional. Defaults to 0)

You can specify the number of most likely candidate tokens to return at each generation step.

Valid values: 0 to 5

This parameter applies only if `logprobs` is set to `true`.

**stop** `_string or array_` (Optional)

This parameter specifies stop words. If a string or `token_id` specified in `stop` appears in the text generated by the model, generation stops immediately.

Pass sensitive words to control the model's output.

> If stop is an array, do not use a `token_id` or a string as elements simultaneously. For example, `["Hello",104307]` is not a valid value.

**tools** `_array_` (Optional)

An array of one or more tool objects that the model can call in function calling. See [Function calling](/help/en/model-studio/qwen-function-calling).

When tools is set and the model determines that a tool needs to be called, the response returns tool information in the tool\_calls field.

**Properties**

**type** `_string_` **(Required)**

Tool type. Currently supports only `function`.

**function** `_object_` **(Required)**

**Properties**

**name** `_string_` **(Required)**

The tool name. It must contain only letters, digits, underscores (`_`), and hyphens (`-`). The name can be up to 64 tokens long.

**description** `_string_` **(Required)**

A description of the tool. This helps the model determine when and how to call the tool.

**parameters** `_object_` (Optional) Defaults to `{}`

The tool's parameters must be described using a valid JSON Schema. For more information about JSON Schema, see this [link](https://json-schema.org/understanding-json-schema). If the `parameters` parameter is empty, this indicates that the tool has no input parameters, such as a time query tool.

> To improve the accuracy of tool calling, we recommend passing `parameters`.

**tool\_choice** `_string or object_` (Optional. Defaults to `auto`.)

The tool selection policy. Use this parameter to force a tool call for certain types of questions, such as always using a specific tool or disabling all tools.

Valid values:

-   `auto`
    
    The model automatically selects a tool.
    
-   `none`
    
    To disable tool calling, set the `tool_choice` parameter to `none`.
    
-   `{"type": "function", "function": {"name": "the_function_to_call"}}`
    
    To force a call to a specific tool, set the `tool_choice` parameter to `{"type": "function", "function": {"name": "the_function_to_call"}}`, where `the_function_to_call` is the name of the specified tool function.
    
    > Models in thinking mode do not support forcing a call to a specific tool.
    

**parallel\_tool\_calls** `_boolean_` (Optional. Defaults to `false`.)

Specifies whether to enable parallel tool calling. See [Parallel tool calling](/help/en/model-studio/qwen-function-calling#cb6b5c484bt4x).

Valid values:

-   `true`
    
-   `false`
    

**enable\_search** `_boolean_` (Optional) Defaults to: `false`

Enables web search. See [Web search](/help/en/model-studio/web-search).

Valid values:

-   `true`
    
    > If web search is not triggered after enabling this parameter, optimize the prompt or set the `forced_search` parameter in `search_options` to enable forced search.
    
-   `false`
    

> Enabling the web search feature may increase token consumption.

> This parameter is not a standard OpenAI parameter. When calling with the Python SDK, include it in the **extra\_body** object. Configure it as follows: `extra_body={"enable_search": True}`.

**search\_options** `_object_` (Optional)

The web search strategy. See [Web search](/help/en/model-studio/web-search).

**Properties**

**forced\_search** `_boolean_` (Optional) Default: `false`

Forces web search. This parameter takes effect only when `enable_search` is `true`.

Valid values:

-   true: Forcefully enables the feature.
    
-   false: Lets the model decide whether to perform a web search.
    

**search\_strategy** `_string_` (Optional) Default: `turbo`

The search scale strategy. This parameter takes effect only when `enable_search` is `true`.

Valid values:

-   `turbo` (default): Balances response speed and search effectiveness. Suitable for most scenarios.
    
-   `max`: Uses a more comprehensive search strategy and calls multiple search engines to retrieve more detailed results. Response time may be longer.
    
-   `agent`: Calls the web search tool and the Large Language Model (LLM) multiple times to retrieve and integrate information across multiple rounds.
    
    > Applicable only to qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen3.5-flash, qwen3.5-flash-2026-02-23, qwen3-max, qwen3-max-2026-01-23, and qwen3-max-2025-09-23.
    
    > When enabled, this strategy supports only **return search sources** (`enable_source: true`). All other web search features are unavailable.
    
-   `agent_max`: Adds web extraction support to the `agent` strategy. See [Web extractor](/help/en/model-studio/web-extractor).
    
    > Applicable only to qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen3.5-flash, qwen3.5-flash-2026-02-23, and the thinking mode of qwen3-max and qwen3-max-2026-01-23.
    
    > When enabled, this strategy supports only **return search sources** (`enable_source: true`). All other web search features are unavailable.
    

**enable\_search\_extension** `_boolean_` (Optional) Default: `false`

Enables domain-specific search. This parameter takes effect only when `enable_search` is `true`.

Valid values:

-   `true`
    
-   `false`
    

> This parameter is not a standard OpenAI parameter. When you call it using the Python SDK, include it in the **extra\_body** object.Configure it as follows: `extra_body={"search_options": xxx}`.

## **Chat response object (non-streaming output)**

```
{
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "I am a large-scale language model developed by Alibaba Cloud. My name is Qwen."
            },
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null
        }
    ],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 3019,
        "completion_tokens": 104,
        "total_tokens": 3123,
        "prompt_tokens_details": {
            "cached_tokens": 2048
        }
    },
    "created": 1735120033,
    "system_fingerprint": null,
    "model": "qwen-plus",
    "id": "chatcmpl-6ada9ed2-7f33-9de2-8bb0-78bd4035025a"
}
```

**id** `_string_`

The unique identifier for this request.

**choices** `_array_`

An array of generated content from the model.

**Properties**

**finish\_reason** `_string_`

The reason the model stopped generating output.

The following scenarios apply:

-   `stop`: The model stopped naturally or because the `stop` input parameter was triggered.
    
-   `length`: The generation stopped because the output reached the maximum length.
    
-   `tool_calls`: The model stopped to call a tool.
    

**index** `_integer_`

The index of this object in the `choices` array.

**logprobs** `_object_`

Log probability information for tokens in the model's output.

**Properties**

**content** `_array_`

An array of tokens and their corresponding log probabilities.

**Properties**

**token** `_string_`

The text of the current token.

**bytes** `_array_`

A list of raw UTF-8 bytes for the current token. This list enables accurate reconstruction of output content, such as emojis or Chinese characters.

**logprob** `_float_`

The log probability of the current token. A return value of `null` indicates an extremely low probability.

**top\_logprobs** `_array_`

The most likely candidate tokens for the current token position. The number of candidates matches the `top_logprobs` request parameter. Each element contains:

**Properties**

**token** `_string_`

The candidate token text.

**bytes** `_array_`

A list of raw UTF-8 bytes for the current token. This list enables accurate reconstruction of output content, such as emojis or Chinese characters.

**logprob** `_float_`

The log probability of this candidate token. A return value of null indicates an extremely low probability.

**message** `_object_`

The message generated by the model.

**Properties**

**content** `_string_`

The content of the model's response.

**reasoning\_content** `_string_`

The content of the model's chain-of-thought reasoning.

**refusal** `_string_`

This field is always `null`.

**role** `_string_`

The role of the message. The value is always `assistant`.

**audio** `_object_`

This field is always `null`.

**function\_call** (to be deprecated) `_object_`

This field is always `null`. For function calls, use the `tool_calls` parameter instead.

**tool\_calls** `_array_`

Information about tools and their input parameters that the model generates after initiating a function call.

**Properties**

**id** `_string_`

The unique identifier for this tool response.

**type** `_string_`

The type of the tool. Currently, only `function` is supported.

**function** `_object_`

Information about the tool.

**Properties**

**name** `_string_`

The name of the tool.

**arguments** `_string_`

The input parameters, formatted as a JSON string.

> Model outputs are non-deterministic. The output parameters might not match the function signature. Validate the parameters before calling the function.

**index** `_integer_`

The index of this tool in the `tool_calls` array.

**created** `_integer_`

The Unix timestamp, in seconds, when the request was created.

**model** `_string_`

The model used for this request.

**object** `_string_`

The value is always `chat.completion`.

**service\_tier** `_string_`

This field is currently fixed as `null`.

**system\_fingerprint** `_string_`

This field is currently fixed as `null`.

**usage** `_object_`

Token consumption details for this request.

**Properties**

**completion\_tokens** `_integer_`

The number of tokens in the model's output.

**prompt\_tokens** `_integer_`

The number of tokens in the input.

**total\_tokens** `_integer_`

The total number of tokens consumed, equal to the sum of `prompt_tokens` and `completion_tokens`.

**completion\_tokens\_details** `_object_`

A fine-grained breakdown of output tokens when using a [Qwen-VL model](/help/en/model-studio/vision).

**Properties**

**audio\_tokens** `_integer_`

This field is currently set to `null`.

**reasoning\_tokens** `_integer_`

This field is currently set to `null`.

**text\_tokens** `_integer_`

The number of text tokens in the output of a [Qwen-VL model](/help/en/model-studio/vision).

**prompt\_tokens\_details** `_object_`

A fine-grained breakdown of input tokens.

**Properties**

**audio\_tokens** `_integer_`

This field is currently set to `null`.

**cached\_tokens** `_integer_`

The number of tokens that hit the cache. See [context cache](/help/en/model-studio/context-cache).

**text\_tokens** `_integer_`

The number of text tokens in the input of a [Qwen-VL model](/help/en/model-studio/vision).

**image\_tokens** `_integer_`

The number of image tokens in the input of a [Qwen-VL model](/help/en/model-studio/vision).

**video\_tokens** `_integer_`

The number of tokens for the input video file or image list in a [Qwen-VL model](/help/en/model-studio/vision).

**cache\_creation** `_object_`

Information about the creation of an [explicit cache](/help/en/model-studio/context-cache#825f201c5fy6o).

**Properties**

**ephemeral\_5m\_input\_tokens** `_integer_`

The number of tokens used to create the explicit cache.

**cache\_creation\_input\_tokens** `_integer_`

The number of tokens used to create the explicit cache.

**cache\_type** `_string_`

When you use an [explicit cache](/help/en/model-studio/context-cache#825f201c5fy6o), the value is `ephemeral`. Otherwise, this field does not exist.

## **Chat response chunk object (streaming output)**

```
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"","function_call":null,"refusal":null,"role":"assistant","tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"I am a ","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"large-scale ","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"language model ","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"from Alibaba Cloud. My name ","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"is Qwen","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":".","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[{"delta":{"content":"","function_call":null,"refusal":null,"role":null,"tool_calls":null},"finish_reason":"stop","index":0,"logprobs":null}],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":null}
{"id":"chatcmpl-e30f5ae7-3063-93c4-90fe-beb5f900bd57","choices":[],"created":1735113344,"model":"qwen-plus","object":"chat.completion.chunk","service_tier":null,"system_fingerprint":null,"usage":{"completion_tokens":17,"prompt_tokens":22,"total_tokens":39,"completion_tokens_details":null,"prompt_tokens_details":{"audio_tokens":null,"cached_tokens":0}}}
```

**id** `_string_`

The unique identifier for this request. All chunks in the same response share the same id.

**choices** `_array_`

An array of generated content objects. This array contains one or more objects. If you set the `include_usage` parameter to `true`, the `choices` array is empty in the final chunk.

**Properties**

**delta** `_object_`

The incremental content object for this chunk.

**Properties**

**content** `_string_`

The incremental message content.

**reasoning\_content** `_string_`

The incremental chain-of-thought content.

**function\_call** `_object_`

This value defaults to `null`. See the `tool_calls` parameter.

**audio** `_object_`

The response generated by the [Qwen-Omni](/help/en/model-studio/qwen-omni) model.

**Properties**

**data** `_string_`

The incremental Base64-encoded audio data.

**expires\_at** `_integer_`

The UNIX timestamp when the request was created.

**refusal** `_object_`

This parameter is always `null`.

**role** `_string_`

The role of the incremental message object. This property appears only in the first chunk.

**tool\_calls** `_array_`

Information about tools and input parameters that the model generates after a function call.

**Properties**

**index** `_integer_`

The index of the current tool in the `tool_calls` array.

**id** `_string_`

The unique ID for this tool response.

**function** `_object_`

Information about the invoked tool.

**Properties**

**arguments** `_string_`

Incremental information about the input parameters. Concatenate the `arguments` from all chunks to obtain the complete input parameters.

> Because large model responses have a degree of randomness, the output parameter information may not conform to the function signature. Validate the parameters before you call the function.

**name** `_string_`

The tool name. This property appears only in the first chunk.

**type** `_string_`

The tool type. Currently, only `function` is supported.

**finish\_reason** `_string_`

The model stops generating for one of the following reasons:

-   `stop`: The `stop` input parameter was triggered or output stopped naturally.
    
-   Before generation is complete, it is `null`.
    
-   `length`: The maximum output length was reached.
    
-   `tool_calls`: The model stopped to make a tool call.
    

**index** `_integer_`

The index of the current response in the `choices` array. If the input parameter n is greater than 1, use this parameter to reconstruct the complete content for each response.

**logprobs** `_object_`

Probability information for the current object.

**Properties**

**content** `_array_`

An array of tokens with associated log probability information.

**Properties**

**token** `_string_`

The current token.

**bytes** `_array_`

A list of the raw UTF-8 bytes of the current token. This is used to accurately restore the output content and is helpful when you handle emojis and Chinese characters.

**logprob** `_float_`

The log probability of the current token. A return value of null indicates an extremely low probability.

**top\_logprobs** `_array_`

The most likely tokens at the current position and their log probabilities. The number of elements matches the `top_logprobs` input parameter.

**Properties**

**token** `_string_`

The current token.

**bytes** `_array_`

A list of the raw UTF-8 bytes of the current token. This is used to accurately restore the output content and is helpful when you handle emojis and Chinese characters.

**logprob** `_float_`

The log probability of the current token. A return value of null indicates an extremely low probability.

**created** `_integer_`

The UNIX timestamp when this request was created. All chunks in the same response share the same created timestamp.

**model** `_string_`

The model used for this request.

**object** `_string_`

The value is always `chat.completion.chunk`.

**service\_tier** `_string_`

This parameter is currently fixed as `null`.

**system\_fingerprint** `_string_`

This parameter is currently fixed as `null`.

**usage** `_object_`

Token usage statistics for this request. This object appears only in the final chunk when `include_usage` is `true`.

**Properties**

**completion\_tokens** `_integer_`

The number of tokens in the model's output.

**prompt\_tokens** `_integer_`

The number of input tokens.

**total\_tokens** `_integer_`

The total number of tokens, equal to the sum of `prompt_tokens` and `completion_tokens`.

**completion\_tokens\_details** `_object_`

Detailed breakdown of output tokens.

**Properties**

**audio\_tokens** `_integer_`

The number of audio tokens in the output of a [Qwen-Omni model](/help/en/model-studio/qwen-omni).

**reasoning\_tokens** `_integer_`

The number of tokens in the thinking process.

**text\_tokens** `_integer_`

The number of output text tokens.

**prompt\_tokens\_details** `_object_`

A fine-grained breakdown of input tokens.

**Properties**

**audio\_tokens** `_integer_`

The number of tokens in the input audio.

> The number of audio tokens in a video file is returned in this parameter.

**text\_tokens** `_integer_`

The number of tokens in the input text.

**video\_tokens** `_integer_`

The number of tokens for the input video, which can be an image list or a video file.

**image\_tokens** `_integer_`

The number of tokens in the input image.

**cached\_tokens** `_integer_`

The number of tokens that hit the cache. See [Context cache](/help/en/model-studio/context-cache).

**cache\_creation** `_object_`

Information about the creation of an [explicit cache](/help/en/model-studio/context-cache#825f201c5fy6o).

**Properties**

**ephemeral\_5m\_input\_tokens** `_integer_`

The number of tokens used to create the explicit cache.

**cache\_creation\_input\_tokens** `_integer_`

The number of tokens used to create the explicit cache.

**cache\_type** `_string_`

The cache type. The value is fixed as `ephemeral`.
