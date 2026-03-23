Describes how to call Qwen models using the DashScope API — request/response parameters and code examples.

## Singapore

HTTP endpoint:

-   Text-only models (for example, qwen-plus): `POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation`
    
-   Multimodal models (for example, qwen3.5-plus or qwen3-vl-plus): `POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation`
    

SDK `base_url`:

## **Python**

```
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
```

## **Java**

-   **Method 1:**
    
    ```
    import com.alibaba.dashscope.protocol.Protocol;
    Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
    ```
    
-   **Method 2:**
    
    ```
    import com.alibaba.dashscope.utils.Constants;
    Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    ```
    

## US (Virginia)

HTTP endpoint:

-   Text-only models: `POST https://dashscope-us.aliyuncs.com/api/v1/services/aigc/text-generation/generation`
    
-   Qwen-VL models: `POST https://dashscope-us.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation`
    

SDK `base_url`:

## **Python**

```
dashscope.base_http_api_url = 'https://dashscope-us.aliyuncs.com/api/v1'
```

## **Java**

-   **Method 1:**
    
    ```
    import com.alibaba.dashscope.protocol.Protocol;
    Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-us.aliyuncs.com/api/v1");
    ```
    
-   **Method 2:**
    
    ```
    import com.alibaba.dashscope.utils.Constants;
    Constants.baseHttpApiUrl="https://dashscope-us.aliyuncs.com/api/v1";
    ```
    

## China (Beijing)

HTTP endpoint:

-   Text-only models (for example, qwen-plus): `POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation`
    
-   Multimodal models (for example, qwen3.5-plus or qwen3-vl-plus): `POST https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation`
    

No `base_url` configuration is needed when using the SDK.

## China (Hong Kong)

HTTP endpoint:

-   Text-only models (for example, qwen-plus): `POST https://cn-hongkong.dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation`
    
-   Multimodal models (for example, qwen3.5-plus or qwen3-vl-plus): `POST https://cn-hongkong.dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation`
    

SDK `base_url`:

## **Python**

```
dashscope.base_http_api_url = 'https://cn-hongkong.dashscope.aliyuncs.com/api/v1'
```

## **Java**

-   **Method 1:**
    
    ```
    import com.alibaba.dashscope.protocol.Protocol;
    Generation gen = new Generation(Protocol.HTTP.getValue(), "https://cn-hongkong.dashscope.aliyuncs.com/api/v1");
    ```
    
-   **Method 2:**
    
    ```
    import com.alibaba.dashscope.utils.Constants;
    Constants.baseHttpApiUrl="https://cn-hongkong.dashscope.aliyuncs.com/api/v1";
    ```
    

> Before you begin, you must [get an API key](/help/en/model-studio/get-api-key) and [set it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). If you use the DashScope SDK, [install the SDK](/help/en/model-studio/install-sdk#f3e80b21069aa).

## **Request body**

## Text input

## Python

```
import os
import dashscope

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
# This is the base URL for the Singapore region.
messages = [
    {'role': 'system', 'content': 'You are a helpful assistant.'},
    {'role': 'user', 'content': 'Who are you?'}
]
response = dashscope.Generation.call(
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen-plus", # Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
    messages=messages,
    result_format='message'
    )
print(response)
```

## Java

```
// DashScope SDK version 2.12.0 or later is required.
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
import com.alibaba.dashscope.utils.JsonUtils;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    public static GenerationResult callWithMessage() throws ApiException, NoApiKeyException, InputRequiredException {
        Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
        // This is the base URL for the Singapore region.
        Message systemMsg = Message.builder()
                .role(Role.SYSTEM.getValue())
                .content("You are a helpful assistant.")
                .build();
        Message userMsg = Message.builder()
                .role(Role.USER.getValue())
                .content("Who are you?")
                .build();
        GenerationParam param = GenerationParam.builder()
                // No DASHSCOPE_API_KEY set? Use .apiKey("sk-xxx") instead.
                // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
                .model("qwen-plus")
                .messages(Arrays.asList(systemMsg, userMsg))
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .build();
        return gen.call(param);
    }
    public static void main(String[] args) {
        try {
            GenerationResult result = callWithMessage();
            System.out.println(JsonUtils.toJson(result));
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            // Log the exception.
            System.err.println("Generation service error: " + e.getMessage());
        }
        System.exit(0);
    }
}
```

## PHP (HTTP)

```
<?php
$url = "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation";
// API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
$apiKey = getenv('DASHSCOPE_API_KEY');

$data = [
    // Replace qwen-plus with another model as needed. For a list of models, see https://www.alibabacloud.com/help/zh/model-studio/getting-started/models.
    "model" => "qwen-plus",
    "input" => [
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
    ],
    "parameters" => [
        "result_format" => "message"
    ]
];

$jsonData = json_encode($data);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $apiKey",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($httpCode == 200) {
    echo "Response: " . $response;
} else {
    echo "Error: " . $httpCode . " - " . $response;
}

curl_close($ch);
?>
```

## Node.js (HTTP)

DashScope does not provide an SDK for Node.js. To use the OpenAI Node.js SDK, see the [OpenAI](/help/en/model-studio/qwen-api-reference/#8dac1cd9832yb) section.

```
import fetch from 'node-fetch';
// API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
$apiKey = getenv('DASHSCOPE_API_KEY');
const apiKey = process.env.DASHSCOPE_API_KEY;

const data = {
    model: "qwen-plus", // Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
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

fetch('https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(JSON.stringify(data));
})
.catch(error => {
    console.error('Error:', error);
});
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
        // No DASHSCOPE_API_KEY set? Use string? apiKey = "sk-xxx" instead.
        // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
$apiKey = getenv('DASHSCOPE_API_KEY');
        string? apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY");

        if (string.IsNullOrEmpty(apiKey))
        {
            Console.WriteLine("The API Key is not set. Set the DASHSCOPE_API_KEY environment variable.");
            return;
        }

        string url = "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation";
        // Replace qwen-plus with another model as needed. For a list of models, see https://www.alibabacloud.com/help/zh/model-studio/getting-started/models.
        string jsonContent = @"{
            ""model"": ""qwen-plus"", 
            ""input"": {
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
            },
            ""parameters"": {
                ""result_format"": ""message""
            }
        }";

        // Send the request and get the response.
        string result = await SendPostRequestAsync(url, jsonContent, apiKey);

        // Output the result.
        Console.WriteLine(result);
    }

    private static async Task<string> SendPostRequestAsync(string url, string jsonContent, string apiKey)
    {
        using (var content = new StringContent(jsonContent, Encoding.UTF8, "application/json"))
        {
            // Set the request header.
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            // Send the request and get the response.
            HttpResponseMessage response = await httpClient.PostAsync(url, content);

            // Process the response.
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

## Go (HTTP)

DashScope does not provide an SDK for Go. To use the OpenAI Go SDK, see the [OpenAI-Go](/help/en/model-studio/qwen-api-reference/#06ff532594vo9) section.

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

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type Input struct {
	Messages []Message `json:"messages"`
}

type Parameters struct {
	ResultFormat string `json:"result_format"`
}

type RequestBody struct {
	Model      string     `json:"model"`
	Input      Input      `json:"input"`
	Parameters Parameters `json:"parameters"`
}

func main() {
	// Create an HTTP client.
	client := &http.Client{}

	// Build the request body.
	requestBody := RequestBody{
		// Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
		Model: "qwen-plus",
		Input: Input{
			Messages: []Message{
				{
					Role:    "system",
					Content: "You are a helpful assistant.",
				},
				{
					Role:    "user",
					Content: "Who are you?",
				},
			},
		},
		Parameters: Parameters{
			ResultFormat: "message",
		},
	}

	jsonData, err := json.Marshal(requestBody)
	if err != nil {
		log.Fatal(err)
	}

	// Create a POST request.
	req, err := http.NewRequest("POST", "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation", bytes.NewBuffer(jsonData))
	if err != nil {
		log.Fatal(err)
	}

	// Set the request header.
	// No DASHSCOPE_API_KEY set? Use apiKey := "sk-xxx" instead.
	// API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	// Send the request.
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	// Read the response body.
	bodyText, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	// Print the response.
	fmt.Printf("%s\n", bodyText)
}
```

## curl

> API keys are region-specific. [Get an API key](/help/en/model-studio/get-api-key)

```
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

## Streaming output

> See [Streaming output](/help/en/model-studio/stream).

## **Text generation models**

## Python

```
import os
import dashscope

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
messages = [
    {'role':'system','content':'you are a helpful assistant'},
    {'role': 'user','content': 'Who are you?'}
]
responses = dashscope.Generation.call(
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    # Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
    model="qwen-plus",
    messages=messages,
    result_format='message',
    stream=True,
    incremental_output=True
    )
for response in responses:
    print(response)  
```

## Java

```
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import io.reactivex.Flowable;
import java.lang.System;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private static void handleGenerationResult(GenerationResult message) {
        System.out.println(JsonUtils.toJson(message));
    }
    public static void streamCallWithMessage(Generation gen, Message userMsg)
            throws NoApiKeyException, ApiException, InputRequiredException {
        GenerationParam param = buildGenerationParam(userMsg);
        Flowable<GenerationResult> result = gen.streamCall(param);
        result.blockingForEach(message -> handleGenerationResult(message));
    }
    private static GenerationParam buildGenerationParam(Message userMsg) {
        return GenerationParam.builder()
                // No DASHSCOPE_API_KEY set? Use .apiKey("sk-xxx") instead.
                // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
                .model("qwen-plus")
                .messages(Arrays.asList(userMsg))
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .incrementalOutput(true)
                .build();
    }
    public static void main(String[] args) {
        try {
            Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
            Message userMsg = Message.builder().role(Role.USER.getValue()).content("Who are you?").build();
            streamCallWithMessage(gen, userMsg);
        } catch (ApiException | NoApiKeyException | InputRequiredException  e) {
            logger.error("An exception occurred: {}", e.getMessage());
        }
        System.exit(0);
    }
}
```

## curl

```
curl --location "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--header "X-DashScope-SSE: enable" \
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
        "result_format": "message",
        "incremental_output":true
    }
}'
```

## **Multimodal models**

## Python

```
import os
from dashscope import MultiModalConversation
import dashscope

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

messages = [
    {
        "role": "user",
        "content": [
            {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"},
            {"text": "What does the image show?"}
        ]
    }
]

responses = MultiModalConversation.call(
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    model='qwen3-vl-plus',  # Replace with another multimodal model as needed, and update the corresponding messages.
    messages=messages,
    stream=True,
    incremental_output=True)
    
full_content = ""
print("Streaming output:")
for response in responses:
    if response["output"]["choices"][0]["message"].content:
        print(response.output.choices[0].message.content[0]['text'])
        full_content += response.output.choices[0].message.content[0]['text']
print(f"Full content: {full_content}")
```

## Java

```
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
import io.reactivex.Flowable;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void streamCall()
            throws ApiException, NoApiKeyException, UploadFileException {
        MultiModalConversation conv = new MultiModalConversation();
        // Must create mutable map.
        MultiModalMessage userMessage = MultiModalMessage.builder().role(Role.USER.getValue())
                .content(Arrays.asList(Collections.singletonMap("image", "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"),
                        Collections.singletonMap("text", "What does the image show?"))).build();
        MultiModalConversationParam param = MultiModalConversationParam.builder()
                // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
                // No DASHSCOPE_API_KEY set? Use .apiKey("sk-xxx") instead.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen3-vl-plus")  // Replace with another multimodal model as needed, and update the corresponding messages.
                .messages(Arrays.asList(userMessage))
                .incrementalOutput(true)
                .build();
        Flowable<MultiModalConversationResult> result = conv.streamCall(param);
        result.blockingForEach(item -> {
            try {
                var content = item.getOutput().getChoices().get(0).getMessage().getContent();
                    // Check whether content exists and is not empty.
                if (content != null &&  !content.isEmpty()) {
                    System.out.println(content.get(0).get("text"));
                    }
            } catch (Exception e){
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        try {
            streamCall();
        } catch (ApiException | NoApiKeyException | UploadFileException e) {
            System.out.println(e.getMessage());
        }
        System.exit(0);
    }
}
```

## curl

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-H 'X-DashScope-SSE: enable' \
-d '{
    "model": "qwen3-vl-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"},
                    {"text": "What does the image show?"}
                ]
            }
        ]
    },
    "parameters": {
        "incremental_output": true
    }
}'
```

## Image input

> For more ways to use large language models to analyze images, see [Image and video understanding](/help/en/model-studio/vision).

## Python

```
import os
import dashscope

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'  
messages = [
    {
        "role": "user",
        "content": [
            {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"},
            {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/tiger.png"},
            {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/rabbit.png"},
            {"text": "What are these?"}
        ]
    }
]
response = dashscope.MultiModalConversation.call(
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    # Replace qwen-vl-max with another model as needed. For a list of models, see https://www.alibabacloud.com/help/zh/model-studio/getting-started/models.
    model='qwen-vl-max',
    messages=messages
    )
print(response)
```

## Java

```
// Copyright (c) Alibaba, Inc. and its affiliates.

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
import com.alibaba.dashscope.utils.JsonUtils;
import com.alibaba.dashscope.utils.Constants;
public class Main {
    static {
     Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1"; 
    }
    public static void simpleMultiModalConversationCall()
            throws ApiException, NoApiKeyException, UploadFileException {
        MultiModalConversation conv = new MultiModalConversation();
        MultiModalMessage userMessage = MultiModalMessage.builder().role(Role.USER.getValue())
                .content(Arrays.asList(
                        Collections.singletonMap("image", "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"),
                        Collections.singletonMap("image", "https://dashscope.oss-cn-beijing.aliyuncs.com/images/tiger.png"),
                        Collections.singletonMap("image", "https://dashscope.oss-cn-beijing.aliyuncs.com/images/rabbit.png"),
                        Collections.singletonMap("text", "What are these?"))).build();
        MultiModalConversationParam param = MultiModalConversationParam.builder()
                // No DASHSCOPE_API_KEY set? Use .apiKey("sk-xxx") instead.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Replace qwen-vl-plus with another model as needed. For a list of models, see https://www.alibabacloud.com/help/zh/model-studio/getting-started/models.
                .model("qwen-vl-plus")
                .message(userMessage)
                .build();
        MultiModalConversationResult result = conv.call(param);
        System.out.println(JsonUtils.toJson(result));
    }

    public static void main(String[] args) {
        try {
            simpleMultiModalConversationCall();
        } catch (ApiException | NoApiKeyException | UploadFileException e) {
            System.out.println(e.getMessage());
        }
        System.exit(0);
    }
}
```

## curl

> API keys are region-specific. [Get an API key](/help/en/model-studio/get-api-key)

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model": "qwen-vl-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"},
                    {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/tiger.png"},
                    {"image": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/rabbit.png"},
                    {"text": "What are these?"}
                ]
            }
        ]
    }
}'
```

## Video input

> The following example shows how to pass video frames. For other methods, such as passing video files, see [Visual understanding](/help/en/model-studio/vision#80dbf6ca8fh6s).

## Python

```
import os
# DashScope SDK version 1.20.10 or later is required.
import dashscope

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
messages = [{"role": "user",
             "content": [
                  # For Qwen2.5-VL series models, if you pass a list of images, set fps to indicate that the images were extracted from the original video at intervals of 1/fps seconds.
                 {"video":["https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/xzsgiz/football1.jpg",
                           "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/tdescd/football2.jpg",
                           "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/zefdja/football3.jpg",
                           "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/aedbqh/football4.jpg"],
                   "fps":2},
                 {"text": "Describe the specific process in this video"}]}]
response = dashscope.MultiModalConversation.call(
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    model='qwen2.5-vl-72b-instruct',  # Replace qwen2.5-vl-72b-instruct with another model as needed. For a list of models, see https://www.alibabacloud.com/help/zh/model-studio/models.
    messages=messages
)
print(response["output"]["choices"][0]["message"].content[0]["text"])
```

## Java

```
// Use DashScope SDK version 2.18.3 or later.
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;

import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversation;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationParam;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationResult;
import com.alibaba.dashscope.common.MultiModalMessage;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.exception.UploadFileException;
import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    private static final String MODEL_NAME = "qwen2.5-vl-72b-instruct"; // Replace qwen2.5-vl-72b-instruct with another model as needed. For a list of models, see https://www.alibabacloud.com/help/zh/model-studio/models.
    public static void videoImageListSample() throws ApiException, NoApiKeyException, UploadFileException {
        MultiModalConversation conv = new MultiModalConversation();
        MultiModalMessage systemMessage = MultiModalMessage.builder()
                .role(Role.SYSTEM.getValue())
                .content(Arrays.asList(Collections.singletonMap("text", "You are a helpful assistant.")))
                .build();
        // For Qwen2.5-VL series models, if you pass a list of images, set fps to indicate that the images were extracted from the original video at intervals of 1/fps seconds.
        Map<String, Object> params = Map.of(
                "video", Arrays.asList("https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/xzsgiz/football1.jpg",
                        "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/tdescd/football2.jpg",
                        "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/zefdja/football3.jpg",
                        "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/aedbqh/football4.jpg"),
                "fps",2);
        MultiModalMessage userMessage = MultiModalMessage.builder()
                .role(Role.USER.getValue())
                .content(Arrays.asList(
                        params,
                        Collections.singletonMap("text", "Describe the specific process in this video")))
                .build();
        MultiModalConversationParam param = MultiModalConversationParam.builder()
                // No DASHSCOPE_API_KEY set? Use .apiKey("sk-xxx") instead.
                // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model(MODEL_NAME)
                .messages(Arrays.asList(systemMessage, userMessage)).build();
        MultiModalConversationResult result = conv.call(param);
        System.out.print(result.getOutput().getChoices().get(0).getMessage().getContent().get(0).get("text"));
    }
    public static void main(String[] args) {
        try {
            videoImageListSample();
        } catch (ApiException | NoApiKeyException | UploadFileException e) {
            System.out.println(e.getMessage());
        }
        System.exit(0);
    }
}
```

## curl

> API keys are region-specific. [Get an API key](/help/en/model-studio/get-api-key)

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
  "model": "qwen2.5-vl-72b-instruct",
  "input": {
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "video": [
              "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/xzsgiz/football1.jpg",
              "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/tdescd/football2.jpg",
              "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/zefdja/football3.jpg",
              "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241108/aedbqh/football4.jpg"
            ],
            "fps":2
                 
          },
          {
            "text": "Describe the specific process in this video"
          }
        ]
      }
    ]
  }
}'
```

## Tool calling

> For the complete function calling workflow, see [Overview of text generation models](/help/en/model-studio/text-generation#b5e1375f75n6f).

## Python

```
import os
import dashscope

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
tools = [
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
            "description": "Useful when you want to query the weather for a specified city.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city or county, for example, Beijing, Hangzhou, or Yuhang District."
                    }
                }
            },
            "required": [
                "location"
            ]
        }
    }
]
messages = [{"role": "user", "content": "How is the weather in Hangzhou?"}]
response = dashscope.Generation.call(
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    # Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
    model='qwen-plus',
    messages=messages,
    tools=tools,
    result_format='message'
)
print(response)
```

## Java

```
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.alibaba.dashscope.aigc.conversation.ConversationParam.ResultFormat;
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.tools.FunctionDefinition;
import com.alibaba.dashscope.tools.ToolFunction;
import com.alibaba.dashscope.utils.JsonUtils;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.victools.jsonschema.generator.Option;
import com.github.victools.jsonschema.generator.OptionPreset;
import com.github.victools.jsonschema.generator.SchemaGenerator;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfig;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfigBuilder;
import com.github.victools.jsonschema.generator.SchemaVersion;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    public class GetWeatherTool {
        private String location;
        public GetWeatherTool(String location) {
            this.location = location;
        }
        public String call() {
            return location+" has clear skies today.";
        }
    }
    public class GetTimeTool {
        public GetTimeTool() {
        }
        public String call() {
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            String currentTime = "Current time: " + now.format(formatter) + ".";
            return currentTime;
        }
    }
    public static void SelectTool()
            throws NoApiKeyException, ApiException, InputRequiredException {
        SchemaGeneratorConfigBuilder configBuilder =
                new SchemaGeneratorConfigBuilder(SchemaVersion.DRAFT_2020_12, OptionPreset.PLAIN_JSON);
        SchemaGeneratorConfig config = configBuilder.with(Option.EXTRA_OPEN_API_FORMAT_VALUES)
                .without(Option.FLATTENED_ENUMS_FROM_TOSTRING).build();
        SchemaGenerator generator = new SchemaGenerator(config);
        ObjectNode jsonSchema_weather = generator.generateSchema(GetWeatherTool.class);
        ObjectNode jsonSchema_time = generator.generateSchema(GetTimeTool.class);
        FunctionDefinition fdWeather = FunctionDefinition.builder().name("get_current_weather").description("Get the weather for a specified location")
                .parameters(JsonUtils.parseString(jsonSchema_weather.toString()).getAsJsonObject()).build();
        FunctionDefinition fdTime = FunctionDefinition.builder().name("get_current_time").description("Get the current time")
                .parameters(JsonUtils.parseString(jsonSchema_time.toString()).getAsJsonObject()).build();
        Message systemMsg = Message.builder().role(Role.SYSTEM.getValue())
                .content("You are a helpful assistant. When asked a question, use tools wherever possible.")
                .build();
        Message userMsg = Message.builder().role(Role.USER.getValue()).content("Hangzhou weather").build();
        List<Message> messages = new ArrayList<>();
        messages.addAll(Arrays.asList(systemMsg, userMsg));
        GenerationParam param = GenerationParam.builder()
                // API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
                .model("qwen-plus")
                .messages(messages)
                .resultFormat(ResultFormat.MESSAGE)
                .tools(Arrays.asList(
                        ToolFunction.builder().function(fdWeather).build(),
                        ToolFunction.builder().function(fdTime).build()))
                .build();
        Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
        // This is the base URL for the Singapore region.
        GenerationResult result = gen.call(param);
        System.out.println(JsonUtils.toJson(result));
    }
    public static void main(String[] args) {
        try {
            SelectTool();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.out.println(String.format("Exception %s", e.getMessage()));
        }
        System.exit(0);
    }
}
```

## curl

> API keys are region-specific. [Get an API key](/help/en/model-studio/get-api-key)

> The URL in this example is for the Singapore region.

```
curl --location "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-plus",
    "input": {
        "messages": [{
            "role": "user",
            "content": "How is the weather in Hangzhou?"
        }]
    },
    "parameters": {
        "result_format": "message",
        "tools": [{
            "type": "function",
            "function": {
                "name": "get_current_time",
                "description": "Useful when you want to know the current time.",
                "parameters": {}
            }
        },{
            "type": "function",
            "function": {
                "name": "get_current_weather",
                "description": "Useful when you want to query the weather for a specified city.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {
                            "type": "string",
                            "description": "The city or county, for example, Beijing, Hangzhou, or Yuhang District."
                        }
                    }
                },
                "required": ["location"]
            }
        }]
    }
}'
```

## Asynchronous invocation

```
# Use DashScope Python SDK version 1.19.0 or later.
import asyncio
import platform
import os
import dashscope
from dashscope.aigc.generation import AioGeneration

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
# This is the base URL for the Singapore region.
async def main():
    response = await AioGeneration.call(
        # If you have not set the DASHSCOPE_API_KEY environment variable,
        # replace the line below with api_key="sk-xxx".
        # API keys differ by region. Get an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key.
        api_key=os.getenv('DASHSCOPE_API_KEY'),
        # Replace qwen-plus as needed — model list: https://www.alibabacloud.com/help/zh/model-studio/getting-started/models
        model="qwen-plus",
        messages=[{"role": "user", "content": "Who are you?"}],
        result_format="message",
    )
    print(response)

if platform.system() == "Windows":
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
asyncio.run(main())
```

## Document understanding

## Python

```
import os
import dashscope

# Only the China (Beijing) region supports the qwen-long-latest model.
dashscope.base_http_api_url = 'https://dashscope.aliyuncs.com/api/v1'
messages = [
        {'role': 'system', 'content': 'you are a helpful assisstant'},
        # Replace {FILE_ID} with the actual file ID used in your conversation.
        {'role':'system','content':f'fileid://{FILE_ID}'},
        {'role': 'user', 'content': 'What is this article about?'}]
response = dashscope.Generation.call(
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen-long-latest",
    messages=messages,
    result_format='message'
)
print(response)
```

## Java

```
import os
import dashscope

# Only the China (Beijing) region supports the qwen-long-latest model.
dashscope.base_http_api_url = 'https://dashscope.aliyuncs.com/api/v1'
messages = [
        {'role': 'system', 'content': 'you are a helpful assisstant'},
        # Replace {FILE_ID} with the actual file ID used in your conversation.
        {'role':'system','content':f'fileid://{FILE_ID}'},
        {'role': 'user', 'content': 'What is this article about?'}]
response = dashscope.Generation.call(
    # No DASHSCOPE_API_KEY set? Use api_key="sk-xxx" instead.
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model="qwen-long-latest",
    messages=messages,
    result_format='message'
)
print(response)
```

## curl

> Document understanding models are supported only in the China (Beijing) region.

> Replace {FILE\_ID} with the actual file ID used in your conversation.

```
curl --location "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header "Content-Type: application/json" \
--data '{
    "model": "qwen-long-latest",
    "input":{
        "messages":[      
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "system",
                "content": "fileid://{FILE_ID}"
            },
            {
                "role": "user",
                "content": "What is this article about?"
            }
        ]
    },
    "parameters": {
        "result_format": "message"
    }
}'
```

**model** `_string_` **(Required)**

The name of the model to use.

Supported models include Qwen large language models (commercial and open source), Qwen-VL, Qwen-Coder, and Qwen-Math.

**For specific model names and billing information, see** [Text generation-Qwen](/help/en/model-studio/models#9f8890ce29g5u).

**messages** `_array_` **(Required)**

The conversation history for the model, listed in chronological order.

> For HTTP requests, place **messages** inside the **input** object.

**Message types**

System Message `_object_` **(Optional)**

A system message that defines the role, tone, task objectives, or constraints for the large language model. Place it at the beginning of the `messages` array.

> Do not set a system message for QwQ models. System messages have no effect on QVQ models.

**Properties**

**content** `_string_`**(Required)**

A system instruction that defines the model's role, behavior, response style, and task constraints.

**role** `_string_` **(Required)**

The role for a system message. The value is fixed as `system`.

User Message `_object_` **(Required)**

A user message that passes questions, instructions, or context to the model.

**Properties**

**content** `_string or array_`**(Required)**

The message content. This is a string for text-only input. It is an array for multimodal input, such as images, or if explicit caching is enabled.

**Properties**

**text** `_string_`**(Required)**

The input text.

**image** `_string_` (Optional)

The image file for image understanding. You can pass the image in one of the following ways:

-   Public URL: A publicly accessible image link.
    
-   A Base64-encoded image in the format `data:image/<format>;base64,<data>`
    
-   Local file: The absolute path of the local file.
    

Applicable models: [Qwen-VL](/help/en/model-studio/vision#f18fc2bb52wxo), [QVQ](/help/en/model-studio/visual-reasoning#f18fc2bb52wxo)

Example: `{"image":"https://xxxx.jpeg"}`

**video** `_array or string_` (Optional)

The video input for the [Qwen-VL model](/help/en/model-studio/vision) or [QVQ model](/help/en/model-studio/visual-reasoning).

-   If passing a list of images, the type is `_array_`.
    
-   If passing a video file, the type is `_string_`_._
    

To pass a local file, see [Local file (Qwen-VL)](/help/en/model-studio/vision#f18fc2bb52wxo) or [Local file (QVQ)](/help/en/model-studio/visual-reasoning#f18fc2bb52wxo).

Example:

-   Image list: `{"video":["https://xx1.jpg",...,"https://xxn.jpg"]}`
    
-   Video file: `{"video":"https://xxx.mp4"}`
    

**fps** `_float_` (Optional)

Frames per second. The value range is \[0.1, 10\], and the default is 2.0.

**Functionality**

The fps parameter has two functions:

-   When inputting a video file, it controls the frame extraction frequency, extracting one frame every fps1​ seconds.
    
    > Applicable to the [Qwen-VL model](/help/en/model-studio/vision) and [QVQ model](/help/en/model-studio/visual-reasoning).
    
-   It informs the model of the time interval between adjacent frames, helping it better understand the video's temporal dynamics. This applies to both video file and image list inputs, and is suitable for scenarios such as event time localization or segmented content summarization.
    
    > Supported by Qwen3.5, `Qwen3-VL`, `Qwen2.5-VL`, and QVQ models.
    

A larger `fps` is suitable for high-speed motion scenarios (such as sports events or action movies), while a smaller `fps` is suitable for long videos or content with static scenes.

**Example**

-   Passing an image list: `{"video":["https://xx1.jpg",...,"https://xxn.jpg"], "fps":2}`
    
-   Passing a video file: `{"video": "https://xx1.mp4", "fps":2}`
    

**max\_frames** `_integer_` (Optional)

The maximum number of frames to extract from a video. If the number of frames calculated by `fps` exceeds `max_frames`, the system automatically adjusts to sample frames evenly within the `max_frames` limit, ensuring the total number of frames does not exceed the limit.

**Value range**

-   qwen3.5 series, `qwen3-vl-plus` series, `qwen3-vl-flash` series, `qwen3-vl-235b-a22b-thinking`, `qwen3-vl-235b-a22b-instruct`: The maximum and default value is 2000.
    
-   `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The maximum and default value is 512.
    

**Example**

`{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"max_frame": 2000}`

> When using the OpenAI-compatible API, you cannot customize the `max_frames` parameter. The API automatically uses the default value for each model.

**min\_pixels** `_integer_` (Optional)

Sets the minimum pixel threshold for input images or video frames. If the pixels of an input image or video frame are less than `min_pixels`, it will be enlarged until the total pixels are greater than `min_pixels`.

**Value range**

-   **Input image:**
    
    -   `Qwen3.5`, `Qwen3-VL`: The default and minimum value is `65536`.
        
    -   `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default and minimum value is `4096`.
        
    -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, `Qwen2.5-VL` open source series, and `QVQ` series models: The default and minimum value is `3136`.
        
-   **Input video file or image list:**
    
    -   `Qwen3.5`, Qwen3-VL (commercial and open source), `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default value is `65536`, and the minimum is `4096`.
        
    -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, `Qwen2.5-VL` open source series, and `QVQ` series models: The default value is `50176`, and the minimum is `3136`.
        

**Example**

-   Input image: `{"type": "image_url","image_url": {"url":"https://xxxx.jpg"},"min_pixels": 65536}`
    
-   Input video file: `{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"min_pixels": 65536}`
    
-   Input image list: `{"type": "video","video": ["https://xx1.jpg",...,"https://xxn.jpg"],"min_pixels": 65536}`
    

**max\_pixels** `_integer_` (Optional)

Sets the maximum pixel threshold for input images or video frames. When the pixels of an input image or video are within the `[min_pixels, max_pixels]` range, the model recognizes the original image. If the input image pixels are greater than `max_pixels`, the image is scaled down until the total pixels are below `max_pixels`.

**Value range**

-   **Input image:**
    
    `max_pixels`’s value depends on whether the `[vl_high_resolution_images](/help/en/model-studio/qwen-api-reference/#0edad44583knr)` parameter is enabled.
    
    -   When `vl_high_resolution_images` is `False`:
        
        -   `Qwen3.5`, `Qwen3-VL`: The default value is `2621440`, and the maximum is `16777216`.
            
        -   `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default value is `1310720`, and the maximum is `16777216`.
            
        -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, `Qwen2.5-VL` open source series, and `QVQ` series models: The default value is `1003520`, and the maximum is `12845056`.
            
    
    -   When `vl_high_resolution_images` is `True`:
        
        -   `Qwen3.5`, Qwen3-VL, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: `max_pixels` is invalid, and the maximum pixels for input images is fixed at `16777216`.
            
        -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, `Qwen2.5-VL` open source series, and `QVQ` series models: `max_pixels` is invalid, and the maximum pixels for input images is fixed at `12845056`.
            
-   **Input video file or image list:**
    
    -   `qwen3.5 series, qwen3-vl-plus` series, `qwen3-vl-flash` series, `qwen3-vl-235b-a22b-thinking`, `qwen3-vl-235b-a22b-instruct`: The default value is `655360`, and the maximum is `2048000`.
        
    -   Other `Qwen3-VL` open source models, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default value is `655360`, and the maximum is `786432`.
        
    -   Other `qwen-vl-plus` models, other `qwen-vl-max` models, `Qwen2.5-VL` open source series, and `QVQ` series models: The default value is `501760`, and the maximum is `602112`.
        

**Example**

-   Input image: `{"type": "image_url","image_url": {"url":"https://xxxx.jpg"},"max_pixels": 8388608}`
    
-   Input video file: `{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"max_pixels": 655360}`
    
-   Input image list: `{"type": "video","video": ["https://xx1.jpg",...,"https://xxn.jpg"],"max_pixels": 655360}`
    

**total\_pixels** `_integer_` (Optional)

Limits the total pixels of all frames extracted from a video (pixels per frame × total frames). If the total pixels of the video exceed this limit, the system scales down the video frames but ensures that the pixel value of a single frame remains within the `[min_pixels, max_pixels]` range. Applicable to Qwen-VL and QVQ models.

For long videos with many extracted frames, you can reduce this value to decrease token consumption and processing time, but this may result in loss of image detail.

**Value range**

-   qwen3.5 series, `qwen3-vl-plus` series, `qwen3-vl-flash` series, `qwen3-vl-235b-a22b-thinking`, `qwen3-vl-235b-a22b-instruct`: The default and minimum value is 134217728, which corresponds to `131072` image tokens (1 image token per 32×32 pixels).
    
-   Other `Qwen3-VL` open source models, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: The default and minimum value is `67108864`, which corresponds to `65536` image tokens (1 image token per 32×32 pixels).
    
-   Other `qwen-vl-plus` models, other `qwen-vl-max` models, `Qwen2.5-VL` open source series, and `QVQ` series models: The default and minimum value is `51380224`, which corresponds to `65536` image tokens (1 image token per 28×28 pixels).
    

**Example**

-   Input video file: `{"type": "video_url","video_url": {"url":"https://xxxx.mp4"},"total_pixels": 134217728}`
    
-   Input image list: `{"type": "video","video": ["https://xx1.jpg",...,"https://xxn.jpg"],"total_pixels": 134217728}`
    

**cache\_control** `_object_` **(Optional)**

Enables explicit caching. Only supported by models that support [explicit caching](/help/en/model-studio/context-cache#825f201c5fy6o).

**Properties**

**type** `_string_`**(Required)**

Fixed value: `ephemeral`.

**role** `_string_` **(Required)**

The role for a user message. The value is fixed as `user`.

Assistant Message `_object_` **(Optional)**

The model's response to the user's message.

**Properties**

**content** `_string_` (Optional)

The message content. Not required if the `tool_calls` parameter is specified in the assistant message.

**role** `_string_` **(Required)**

The value is fixed as `assistant`.

**partial** `_boolean_` (Optional)

Whether to enable prefix continuation. For more information, see [Partial mode](/help/en/model-studio/partial-mode).

**tool\_calls** `_array_` (Optional)

The tool call information returned after function calling. Contains one or more objects, obtained from the `tool_calls` field of the previous model response.

**Properties**

**id** `_string_`

The ID of the tool response.

**type** `_string_`

Tool type. Currently, only `function` is supported.

**function** `_object_`

Tool and input parameter information.

**Properties**

**name** `_string_`

Tool name.

**arguments** `_string_`

Input parameter information, in JSON string format.

**index** `_integer_`

The index of the current tool information in the `tool_calls` array.

Tool Message `_object_` **(Optional)**

The tool's output information.

**Properties**

**content** `_string_` **(Required)**

The output content of the tool function. Must be in string format.

**role** `_string_` **(Required)**

The value is fixed as `tool`.

**tool\_call\_id** `_string_` **(Optional)**

The ID returned after function calling. Obtained from `response.output.choices[0].message.tool_calls[$index]["id"]`. Used to identify the tool corresponding to this tool message.

**temperature** `_float_` (Optional)

Sampling temperature, which controls the diversity of the text generated by the model.

A higher temperature results in more diverse text, while a lower temperature results in more deterministic text.

Value range: \[0, 2)

> When using HTTP, place **temperature** inside the **parameters** object.

> Do not modify the default temperature value for QVQ models.

**top\_p** `_float_` (Optional)

The probability threshold for nucleus sampling, which controls the diversity of the text generated by the model.

A higher top\_p results in more diverse text. A lower top\_p results in more deterministic text.

Value range: (0, 1.0\].

**Default top\_p**

Qwen3.5 (non-thinking mode), Qwen3 (non-thinking mode), Qwen3-Instruct series, Qwen3-Coder series, qwen-max series, qwen-plus series (non-thinking mode), qwen-flash series (non-thinking mode), qwen-turbo series (non-thinking mode), qwen open source series, qwen-vl-max-2025-08-13, Qwen3-VL (non-thinking mode): 0.8

qwen-vl-plus series, qwen-vl-max, qwen-vl-max-latest, qwen-vl-max-2025-04-08, qwen2.5-vl-3b-instruct, qwen2.5-vl-7b-instruct, qwen2.5-vl-32b-instruct, qwen2.5-vl-72b-instruct: 0.001

QVQ series, qwen-vl-plus-2025-07-10, qwen-vl-plus-2025-08-15: 0.5

qwen3-max-preview (thinking mode), Qwen3-Omni-Flash series: 1.0

Qwen3.5 (thinking mode), Qwen3 (thinking mode), Qwen3-VL (thinking mode), Qwen3-Thinking, QwQ series, Qwen3-Omni-Captioner: 0.95

> In the Java SDK, this is **topP**_._ When using HTTP, place **top\_p** inside the **parameters** object.

> Do not modify the default top\_p value for QVQ models.

**top\_k** `_integer_` (Optional)

The size of the candidate set for sampling during generation. For example, if the value is 50, only the 50 tokens with the highest scores in a single generation are used to form the random sampling candidate set. A larger value results in higher randomness, while a smaller value results in higher determinism. A value of None or when top\_k is greater than 100 indicates that the top\_k strategy is not enabled, and only the top\_p strategy takes effect.

The value must be greater than or equal to 0.

**Default top\_k**

QVQ series, qwen-vl-plus-2025-07-10, qwen-vl-plus-2025-08-15: 10

QwQ series: 40

Other qwen-vl-plus series, models before qwen-vl-max-2025-08-13, qwen2.5-omni-7b: 1

Qwen3-Omni-Flash series: 50

All other models: 20

> In the Java SDK, this is **topK**_._ When using HTTP, place **top\_k** inside the **parameters** object.

> Do not modify the default top\_k value for QVQ models.

**enable\_thinking** `_boolean_` (Optional)

When using a hybrid thinking model, this enables thinking mode. Applicable to Qwen3.5, Qwen3, and Qwen3-VL models. For more information, see [Deep thinking](/help/en/model-studio/deep-thinking).

Possible values:

-   `true`
    
    > When enabled, the thinking content is returned in the `reasoning_content` field.
    
-   `false`
    

For default values of different models, see [Supported models](/help/en/model-studio/deep-thinking#78286fdc35hlw).

> In the Java SDK, this is enableThinking. When using HTTP, place **enable\_thinking** inside the **parameters** object.

**thinking\_budget** `_integer_` (Optional)

The maximum length of the thinking process. Applicable to the commercial and open source versions of Qwen3.5, Qwen3-VL, and Qwen3 models. For more information, see [Limit thinking length](/help/en/model-studio/deep-thinking#e7c0002fe4meu).

The default value is the model's maximum chain-of-thought length. For more information, see [Model list](/help/en/model-studio/models).

> In the Java SDK, this is thinkingBudget. When using HTTP, place **thinking\_budget** inside the **parameters** object.

> The default value is the model's maximum chain-of-thought length.

**enable\_code\_interpreter** `_boolean_` (Optional) Default: `false`

Enables the code interpreter feature. Only supported for qwen3.5, and for qwen3-max, qwen3-max-2026-01-23, and qwen3-max-preview in thinking mode. For more information, see [Code interpreter](/help/en/model-studio/qwen-code-interpreter).

Possible values:

-   `true`
    
-   `false`
    

> Not supported by the Java SDK. When using HTTP, place **enable\_code\_interpreter** inside the **parameters** object.

**repetition\_penalty** `_float_` (Optional)

The repetition penalty for consecutive sequences during model generation. Increasing repetition\_penalty can reduce the model's repetition. A value of 1.0 means no penalty. There is no strict value range, as long as it is greater than 0.

> In the Java SDK, this is **repetitionPenalty**_._ When using HTTP, place **repetition\_penalty** inside the **parameters** object.

> When using the qwen-vl-plus\_2025-01-25 model for text extraction, set repetition\_penalty to 1.0.

> Do not modify the default repetition\_penalty value for QVQ models.

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

> This parameter is not supported by the Java SDK_._ When using HTTP, place **presence\_penalty** inside the **parameters** object.

**vl\_high\_resolution\_images** `_boolean_` (Optional. Defaults to `false`.)

Increases the maximum pixel limit for input images to the pixel value corresponding to 16384 tokens. See [Process high-resolution images](/help/en/model-studio/vision#e7e2db755f9h7).

-   `vl_high_resolution_images: true`: Uses a fixed-resolution strategy and ignores the `max_pixels` setting. If an image exceeds this resolution, its total pixel count is downscaled to meet the limit.
    
    **Click to view the pixel limits for each model**
    
    When `vl_high_resolution_images` is `true`, different models have different pixel limits:
    
    -   `qwen3.5 series`, `Qwen3-VL series`, `qwen-vl-max`, `qwen-vl-max-latest`, `qwen-vl-max-0813`, `qwen-vl-plus`, `qwen-vl-plus-latest`, `qwen-vl-plus-0815`: `16,777,216` (each `Token` corresponds to `32×32` pixels, i.e., `16,384×32×32`)
        
    -   `QVQ series` and other `Qwen2.5-VL series` models: `12,845,056` (each `Token` corresponds to `28×28` pixels, i.e., `16,384×28×28`)
        
    
-   If `vl_high_resolution_images` is `false`, the actual pixel limit is determined by `max_pixels`. If an input image exceeds `max_pixels`, it is downscaled to fit within `max_pixels`. The default pixel limits for models match the default value of `max_pixels`.
    

> The Java SDK supports **vlHighResolutionImages** (minimum version 2.20.8**)**_._ When making HTTP calls, include **vl\_high\_resolution\_images** in the **parameters** object.

**vl\_enable\_image\_hw\_output** `_boolean_` (Optional) Default: `false`

Specifies whether to return the height and width of the input image after it is scaled by the model. If you set this parameter to true, the dimensions are returned in the output. If streaming is enabled, this information is returned in the last chunk. This parameter is supported by the [Qwen-VL model](/help/en/model-studio/vision).

> In the Java SDK, this parameter is named **vlEnableImageHwOutput** and requires version 2.20.8 or later. For HTTP requests, place **vl\_enable\_image\_hw\_output** inside the **parameters** object.

**max\_tokens** `_integer_` (Optional)

The maximum number of tokens in the response. Generation stops when this limit is reached, and the `finish_reason` field in the response is set to `length`.

The default and maximum values correspond to the model’s maximum output length. See [Text Generation - Qwen](/help/en/model-studio/models#9f8890ce29g5u).

You can use this parameter to control output length in scenarios such as generating summaries or keywords, or to reduce costs and shorten response time.

When `max_tokens` is triggered, the `finish_reason` field in the response is set to `length`.

> `max_tokens` does not limit the length of the chain-of-thought.

> In the Java SDK, this is **maxTokens** (for Qwen-VL models, it is **maxLength**. After version 2.18.4, it can also be set as maxTokens). When using HTTP, place **max\_tokens** inside the **parameters** object.

**seed** `_integer_` (Optional)

The random number seed. This parameter ensures that results are reproducible. If you use the same `seed` value in a call and the other parameters remain unchanged, the model returns the same result whenever possible.

Valid values: `[0,231-1]`.

> When using HTTP, place **seed** inside the **parameters** object.

**stream** `_boolean_` (Optional). Default: `false`

Streams the response. Possible values:

-   false: The model returns the result after generating all content.
    
-   true: The model generates and outputs content simultaneously, immediately outputting a chunk for each part of the content generated.
    

> This parameter is only supported by the Python SDK. To implement streaming output with the Java SDK, use the `streamCall` interface. To implement streaming output with HTTP, specify `X-DashScope-SSE` as `enable` in the header.

> Qwen3 commercial edition (thinking mode), Qwen3 open source edition, QwQ, and QVQ only support streaming output.

**incremental\_output** `_boolean_` (Optional). Default: `false`. For Qwen3-Max, Qwen3-VL, [Qwen3 open source](/help/en/model-studio/models#9d516d17965af), [QwQ](/help/en/model-studio/deep-thinking), and [QVQ](/help/en/model-studio/visual-reasoning) models, the default is `true`.

You can enable incremental output in streaming mode by setting this parameter to `true`.

Possible values:

-   false: Each output contains the full sequence generated so far. The final output is the complete result.
    
    ```
    I
    I like
    I like apple
    I like apple.
    ```
    
-   true (recommended): Outputs are incremental. Subsequent outputs do not include content from previous outputs. You must read these chunks in real time to reconstruct the complete result.
    
    ```
    I
    like
    apple
    .
    ```
    

> In the Java SDK, use **incrementalOutput**_._ When making an HTTP call, place **incremental\_output** in the **parameters** object.

> For the QwQ and Qwen3 models, the \`thinking mode\` parameter can only be set to `true`. The Qwen3 commercial model defaults to `false`, so you must manually set this parameter to `true` when you use thinking mode.

> Qwen3 open source models do not support `false`.

**response\_format** `_object_` (Optional) Default: `{"type": "text"}`

The format of the response. Possible values:

-   `{"type": "text"}`: Returns plain text.
    
-   `{"type": "json_object"}`: Returns a standard JSON string.
    
-   `{"type": "json_schema","json_schema": {...}}`: Returns a JSON string that conforms to the specified schema.
    

> See [Structured output](/help/en/model-studio/qwen-structured-output).

> For supported models, see [Supported models](/help/en/model-studio/qwen-structured-output#7a8e438e89xeq).

> If you specify `{"type": "json_object"}`, you must explicitly instruct the model to return JSON in the prompt, such as "Please output in JSON format". Otherwise, an error occurs.

> For the Java SDK, use **responseFormat**. When invoking the API over HTTP, include **response\_format** in the **parameters**

**Properties**

**type** `_string_` **(Required)**

The format of the response. Possible values:

-   `text`: Returns plain text.
    
-   `json_object`: Returns a standard JSON string.
    
-   `json_schema`: Returns a JSON string that conforms to the specified schema.
    

**json\_schema** `_object_`

This field is required when type is set to json\_schema and defines the configuration for structured output.

**Properties**

**name** `_string_` **(Required)**

The unique identifier for the schema. Only letters (case-insensitive), numbers, underscores, and hyphens are allowed. Maximum length is 64 characters.

**description** `_string_` (Optional)

A description of the schema’s purpose, helping the model understand the semantic context of the output.

**schema** `_object_` (Optional)

An object that follows the JSON Schema standard and defines the data structure of the model’s output.

> For how to build a JSON Schema, see [JSON Schema](https://json-schema.org/)

**strict** `_boolean_` (Optional) Default: `false`

Specifies whether the model must strictly adhere to all schema constraints.

-   **true (recommended)**
    
    The model enforces all constraints, such as field types, required fields, and formats, ensuring fully compliant output.
    
-   **false (not recommended)**
    
    The model only loosely follows the schema and may generate output that violates the specification, causing validation failure.
    

**result\_format** `_string_` (Optional). Default: `text` (The default for Qwen3-Max, Qwen3-VL, [QwQ](/help/en/model-studio/deep-thinking) models, Qwen3 open source models (except qwen3-next-80b-a3b-instruct) is message.)

The format of the returned data. Set this to `message`, which is more convenient for [multi-turn conversations](/help/en/model-studio/multi-round-conversation).

> The platform will later unify the default value to `message`.

> The parameter is **resultFormat**_._ For HTTP calls, add **result\_format** to the **parameters** object.

> When the model is Qwen-VL/QVQ, setting `text` has no effect.

> Qwen3-Max, Qwen3-VL, and Qwen3 models in thinking mode can only be set to `message`. Because the default for Qwen3 commercial models is `text`, you need to set it to `message`.

> If you use the Java SDK to call a Qwen3 open source model and pass `text`, the response will still be in `message` format.

**logprobs** `_boolean_` (Optional). Default: `false`.

Returns the log probability of the output tokens. Possible values:

-   `true`
    
-   `false`
    

Supported models:

-   Snapshot of the qwen-plus series, excluding stable versions.
    
-   Snapshot of the qwen-turbo series, excluding stable versions.
    
-   qwen3-vl-plus series, including stable versions.
    
-   qwen3-vl-flash series, including stable versions.
    
-   Qwen3 open source models.
    

> When using HTTP, place **logprobs** inside the **parameters** object.

**top\_logprobs** `_integer_` (Optional) Default: 0

Specifies the number of most likely candidate tokens to return at each generation step.

Value range: \[0, 5\]

This is only effective when `logprobs` is `true`.

> In the Java SDK, this is **topLogprobs**_._ When using HTTP, place **top\_logprobs** inside the **parameters** object.

**n** `_integer_` (Optional) Default: 1

The number of responses to generate. The value must be in the range `1-4`. For scenarios that require multiple responses, such as creative writing or ad copy, you can set a higher value.

> This parameter is currently supported only by the [Qwen3 (non-thinking mode)](/help/en/model-studio/deep-thinking#be9890136awsc) models, and its value is fixed at 1 if the tools parameter is passed.

> Setting a higher value for n does not increase input token consumption, but it increases output token consumption.

> When using HTTP, place **n** inside the **parameters** object.

**stop** `_string or array_` (Optional)

This parameter specifies stop words. If a string or `token_id` specified in `stop` appears in the text generated by the model, generation stops immediately.

Pass sensitive words to control the model's output.

> If stop is an array, do not use a `token_id` or a string as elements simultaneously. For example, `["Hello",104307]` is not a valid value.

> When using HTTP, place **stop** inside the **parameters** object.

**tools** `_array_` (Optional)

An array that contains one or more tool objects for the model to use in function calls. For more information, see [Function calling](/help/en/model-studio/qwen-function-calling).

When you use `tools`, you must set `result_format` to `message`.

When you initiate a function call or submit tool execution results, you must set the `tools` parameter.

**Properties**

**type** `_string_` **(Required)**

The type of the tool. Currently, only `function` is supported.

**function** `_object_` **(Required)**

**Properties**

**name** `_string_` **(Required)**

The name of the tool function. The name can contain only letters, numbers, underscores, and hyphens, and can be up to 64 characters long.

**description** `_string_` **(Required)**

A description of the tool function. The model uses this description to determine when and how to call the function.

**parameters** `_object_` (Optional) Default: `{}`

A description of the tool's parameters, which must be in a valid JSON Schema format. For more information about JSON Schema, see this [link](https://json-schema.org/understanding-json-schema). If the `parameters` object is empty, the tool has no input parameters, such as a time query tool.

> To improve the accuracy of tool calls, we recommend that you provide the `parameters`.

> When using HTTP, place **tools** inside the **parameters** object. This is temporarily not supported for qwen-vl series models.

**tool\_choice** `_string or object_` (Optional). Default: `auto`.

Specifies the tool selection strategy. You can set this parameter to force a specific tool call method for a given problem type, such as always using a particular tool or disabling all tools.

-   `auto`
    
    The large language model autonomously selects the tool strategy.
    
-   `none`
    
    To temporarily disable tool calls for a specific request, set the `tool_choice` parameter to `none`.
    
-   `{"type": "function", "function": {"name": "the_function_to_call"}}`
    
    To force a call to a specific tool, set the `tool_choice` parameter to `{"type": "function", "function": {"name": "the_function_to_call"}}`, where `the_function_to_call` is the name of the specified tool function.
    
    > Thinking mode models do not support forcing a call to a specific tool.
    

> In the Java SDK, the parameter is named **toolChoice**_._ For HTTP calls, include **tool\_choice** in the **parameters** object.

**parallel\_tool\_calls** `_boolean_` (Optional). Default: `false`.

This parameter enables parallel tool calls.

Possible values:

-   `true`
    
-   `false`
    

For more information, see [Parallel tool calls](/help/en/model-studio/qwen-function-calling#cb6b5c484bt4x).

> In the Java SDK, the parameter is **parallelToolCalls**_._ When making an HTTP call, include **parallel\_tool\_calls** in the **parameters** object.

## **Chat response object (streaming and non-streaming formats are consistent)**

```
{
  "status_code": 200,
  "request_id": "902fee3b-f7f0-9a8c-96a1-6b4ea25af114",
  "code": "",
  "message": "",
  "output": {
    "text": null,
    "finish_reason": null,
    "choices": [
      {
        "finish_reason": "stop",
        "message": {
          "role": "assistant",
          "content": "I am a large-scale language model developed by Alibaba Cloud. My name is Qwen."
        }
      }
    ]
  },
  "usage": {
    "input_tokens": 22,
    "output_tokens": 17,
    "total_tokens": 39
  }
}
```

**status\_code** `_string_`

The status code for this request. A value of 200 indicates success. Any other value indicates failure.

> The Java SDK does not return this parameter. If the call fails, an exception is thrown that includes the **status\_code** and **message**.

**request\_id** `_string_`

The unique identifier for this call.

> The Java SDK returns this parameter as **requestId**

**code** `_string_`

The error code. This field is empty upon success.

> Only the Python SDK returns this parameter.

**output** `_object_`

The call result information.

**Properties**

**text** `_string_`

The response generated by the model. When the input parameter **result\_format** is set to **text**, the response content is returned in this field.

**finish\_reason** `_string_`

This parameter is not empty when the input parameter **result\_format** is set to **text**.

Possible values:

-   The value is null during generation.
    
-   stop: The model's output ended naturally or triggered a stop condition specified in the input parameters.
    
-   length: The generation length exceeded the maximum limit.
    
-   tool\_calls: A tool call occurred.
    

**choices** `_array_`

The model's output. Returned when `result_format` is set to `message`.

**Properties**

**finish\_reason** `_string_`

Possible values:

-   null: The value is null while the resource is being generated.
    
-   stop: The model's output ended naturally or triggered a stop condition specified in the input parameters.
    
-   length: The generation length exceeded the maximum limit.
    
-   tool\_calls: A tool call occurred.
    

**message** `_object_`

The message object output by the model.

**Properties**

**role** `_string_`

The role of the output message. The value is fixed as assistant.

**content** `_string or array_`

The content of the output message. When using Qwen-VL or Qwen-Audio series models, it is an `array`. Otherwise, it is a `string`.

> If a function call is initiated, this value is empty.

**Properties**

**text** `_string_`

The content of the output message when using Qwen-VL or Qwen-Audio series models.

**image\_hw** `_array_`

When the Qwen-VL series model enables the vl\_enable\_image\_hw\_output parameter, there are two cases:

-   Image input: Returns the height and width of the image (in pixels).
    
-   Video input: Returns an empty array.
    

**reasoning\_content** `_string_`

The model's deep thinking content.

**tool\_calls** `_array_`

If the model needs to call a tool, the tool\_calls parameter is generated.

**Properties**

**function** `object`

The name of the tool to call and its input parameters.

**Properties**

**name** `_string_`

The name of the tool to call.

**arguments** `_string_`

The parameters to be input into the tool, as a JSON string.

> Because of the randomness of large language model responses, the output JSON string may not always satisfy your function. Validate the parameters before passing them to the function.

**index** `_integer_`

The index of the current tool\_calls object within the **tool\_calls** array.

**id** `_string_`

The ID of this tool response.

**type** `_string_`

The tool type. The fixed value is `function`.

**logprobs** `_object_`

The probability information for the current choices object.

**Properties**

**content** `_array_`

An array of tokens, including their log probability information.

**Properties**

**token** `_string_`

The current token.

**bytes** `_array_`

A list of the current token's original UTF-8 bytes, used to accurately restore the output content. This is helpful when processing emojis and Chinese characters.

**logprob** `_float_`

The log probability of the current token. A null value indicates an extremely low probability.

**top\_logprobs** `_array_`

The most likely tokens at the current token position and their log probabilities. The number of elements is consistent with the `top_logprobs` input parameter.

**Properties**

**token** `_string_`

The current token.

**bytes** `_array_`

A list of the current token's original UTF-8 bytes, used to accurately restore the output content. This is helpful when processing emojis and Chinese characters.

**logprob** `_float_`

The log probability of the current token. A null value indicates an extremely low probability.

**usage** `_map_`

Token information used in this chat request.

**Properties**

**input\_tokens** `_integer_`

The length of the user's input content after conversion to tokens.

**output\_tokens** `_integer_`

The length of the model's output content after conversion to tokens.

**input\_tokens\_details** `_integer_`

When using the [Qwen-VL model](/help/en/model-studio/vision) or [QVQ model](/help/en/model-studio/visual-reasoning), this is the detailed length of the input content after conversion to tokens.

**Properties**

**text\_tokens** `_integer_`

When using the [Qwen-VL model](/help/en/model-studio/vision) or [QVQ model](/help/en/model-studio/visual-reasoning), this is the length of the input text after conversion to tokens.

**image\_tokens** `_integer_`

The length of the input image after conversion to tokens.

**video\_tokens** `_integer_`

The length of the input video file or image list after conversion to tokens.

**total\_tokens** `_integer_`

This field is returned when the input is plain text. It is the sum of **input\_tokens** and **output\_tokens**.

**image\_tokens** `_integer_`

This field is returned when the input content includes an `image`. It represents the length of the user's input image content after conversion to tokens.

**video\_tokens** `_integer_`

This field is returned when the input content includes a `video`. It represents the length of the user's input video content after conversion to tokens.

**audio\_tokens** `_integer_`

This field is returned when the input content includes an `audio`. It represents the length of the user's input audio content after conversion to tokens.

**output\_tokens\_details** `_integer_`

The detailed length of the output content after conversion to tokens.

**Properties**

**text\_tokens** `_integer_`

The length of the output text after conversion to tokens.

**reasoning\_tokens** `_integer_`

The length of the thinking process after conversion to tokens.

**prompt\_tokens\_details** `_object_`

A fine-grained classification of input tokens.

**Properties**

**cached\_tokens** `_integer_`

The number of tokens that hit the cache. For details on context cache, see [Context cache](/help/en/model-studio/context-cache).

**cache\_creation** `_object_`

Information about [explicit cache](/help/en/model-studio/context-cache#825f201c5fy6o) creation.

**Properties**

**ephemeral\_5m\_input\_tokens** `_integer_`

The length of tokens used to create a 5-minute explicit cache.

**cache\_creation\_input\_tokens** `_integer_`

The length of tokens used to create the explicit cache.

**cache\_type** `_string_`

When using [explicit cache](/help/en/model-studio/context-cache#825f201c5fy6o), the parameter value is `ephemeral`. Otherwise, this parameter is not present.

## **Error codes**

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) to resolve the issue.
