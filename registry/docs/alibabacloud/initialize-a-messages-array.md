The Qwen API is stateless. To implement multi-turn conversations, pass conversation history in each request. Use truncation, summarization, or retrieval to manage context and reduce token consumption.

> This topic covers OpenAI-compatible Chat Completion and DashScope interfaces. For a simpler alternative, see [OpenAI compatible - Responses](/help/en/model-studio/compatibility-with-openai-responses-api).

## **How it works**

To implement multi-turn conversations, maintain a `messages` array. After each round, append the user's question and model's response and then use the updated array for the next request.

The following example shows how the state of the `messages` array changes during a multi-turn conversation:

1.  **First round**
    
    Add the user's question to the `messages` array.
    
    ```
    // Use a text model
    [
        {"role": "user", "content": "Recommend a sci-fi movie about space exploration."}
    ]
    
    // Use a multimodal model, for example, Qwen-VL
    // {"role": "user",
    //       "content": [{"type": "image_url","image_url": {"url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"}},
    //                   {"type": "text", "text": "What products are shown in the image?"}]
    // }
    ```
    
2.  **Second round**
    
    Add the model's response and the user's latest question to the `messages` array.
    
    ```
    // Use a text model
    [
        {"role": "user", "content": "Recommend a sci-fi movie about space exploration."},
        {"role": "assistant", "content": "I recommend 'XXX'. It is a classic sci-fi work."},
        {"role": "user", "content": "Who is the director of this movie?"}
    ]
    
    // Use a multimodal model, for example, Qwen-VL
    //[
    //    {"role": "user", "content": [
    //                    {"type": "image_url","image_url": {"url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"}},
    //                   {"type": "text", "text": "What products are shown in the image?"}]},
    //    {"role": "assistant", "content": "The image shows three items: a pair of light blue overalls, a blue and white striped short-sleeve shirt, and a pair of white sneakers."},
    //    {"role": "user", "content": "What style are they?"}
    //]
    ```
    

## **Getting started**

## OpenAI compatible

## Python

```
import os
from openai import OpenAI


def get_response(messages):
    client = OpenAI(
        # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    )
    # For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
    completion = client.chat.completions.create(model="qwen-plus", messages=messages)
    return completion

# Initialize a messages array
messages = [
    {
        "role": "system",
        "content": """You are a salesperson at the Bailian phone store. You are responsible for recommending phones to users. The phones have two parameters: screen size (including 6.1-inch, 6.5-inch, and 6.7-inch) and resolution (including 2K and 4K).
        You can only ask the user for one parameter at a time. If the user does not provide complete information, you need to ask a follow-up question to get the missing parameter. When all parameters are collected, you must say: I have understood your purchase intention. Please wait.""",
    }
]
assistant_output = "Welcome to the Bailian phone store. What screen size are you looking for?"
print(f"Model output: {assistant_output}\n")
while "I have understood your purchase intention" not in assistant_output:
    user_input = input("Please enter: ")
    # Add the user's question to the messages list
    messages.append({"role": "user", "content": user_input})
    assistant_output = get_response(messages).choices[0].message.content
    # Add the model's response to the messages list
    messages.append({"role": "assistant", "content": assistant_output})
    print(f"Model output: {assistant_output}")
    print("\n")
```

## Node.js

```
import OpenAI from "openai";
import { createInterface } from 'readline/promises';

// If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
const BASE_URL = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1";
// API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: BASE_URL
});

async function getResponse(messages) {
    try {
        const completion = await openai.chat.completions.create({
            // For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
            model: "qwen-plus",
            messages: messages,
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching response:", error);
        throw error;  // Re-throw the exception for handling by the upper layer
    }
}

// Initialize the messages array
const messages = [
    {
        "role": "system",
        "content": `You are a salesperson at the Bailian phone store. You are responsible for recommending phones to users. The phones have two parameters: screen size (including 6.1-inch, 6.5-inch, and 6.7-inch) and resolution (including 2K and 4K).
        You can only ask the user for one parameter at a time. If the user does not provide complete information, you need to ask a follow-up question to get the missing parameter. When all parameters are collected, you must say: I have understood your purchase intention. Please wait.`,
    }
];

let assistant_output = "Welcome to the Bailian phone store. What screen size are you looking for?";
console.log(assistant_output);


const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    while (!assistant_output.includes("I have understood your purchase intention")) {
        const user_input = await readline.question("Please enter: ");
        messages.push({ role: "user", content: user_input});
        try {
            const response = await getResponse(messages);
            assistant_output = response;
            messages.push({ role: "assistant", content: assistant_output });
            console.log(assistant_output);
            console.log("\n");
        } catch (error) {
            console.error("An error occurred while fetching the response:", error);
        }
    }
    readline.close();
})();
```

## curl

```
# ======= Important =======
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
    "messages":[      
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Hello"
        },
        {
            "role": "assistant",
            "content": "Hello, I am Qwen."
        },
        {
            "role": "user",
            "content": "What can you do?"
        }
    ]
}'
```

## DashScope

## Python

The sample code provides an example of a mobile phone store salesperson who engages in a multi-turn conversation with a customer to determine their purchase intentions and then ends the session.

```
import os
from dashscope import Generation
import dashscope
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

def get_response(messages):
    response = Generation.call(
        # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        model="qwen-plus",
        messages=messages,
        result_format="message",
    )
    return response


messages = [
    {
        "role": "system",
        "content": """You are a salesperson at the Bailian phone store. You are responsible for recommending phones to users. The phones have two parameters: screen size (including 6.1-inch, 6.5-inch, and 6.7-inch) and resolution (including 2K and 4K).
        You can only ask the user for one parameter at a time. If the user does not provide complete information, you need to ask a follow-up question to get the missing parameter. When all parameters are collected, you must say: I have understood your purchase intention. Please wait.""",
    }
]

assistant_output = "Welcome to the Bailian phone store. What screen size are you looking for?"
print(f"Model output: {assistant_output}\n")
while "I have understood your purchase intention" not in assistant_output:
    user_input = input("Please enter: ")
    # Add the user's question to the messages list
    messages.append({"role": "user", "content": user_input})
    assistant_output = get_response(messages).output.choices[0].message.content
    # Add the model's response to the messages list
    messages.append({"role": "assistant", "content": assistant_output})
    print(f"Model output: {assistant_output}")
    print("\n")
```

## Java

```
import java.util.ArrayList;
import java.util.List;
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import java.util.Scanner;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    public static GenerationParam createGenerationParam(List<Message> messages) {
        return GenerationParam.builder()
                // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
                // If you have not configured the environment variable, replace the following line with your Model Studio API key: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
                .model("qwen-plus")
                .messages(messages)
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .build();
    }
    public static GenerationResult callGenerationWithMessages(GenerationParam param) throws ApiException, NoApiKeyException, InputRequiredException {
        // If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
        Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
        return gen.call(param);
    }
    public static void main(String[] args) {
        try {
            List<Message> messages = new ArrayList<>();
            messages.add(createMessage(Role.SYSTEM, "You are a helpful assistant."));
            for (int i = 0; i < 3;i++) {
                Scanner scanner = new Scanner(System.in);
                System.out.print("Please enter: ");
                String userInput = scanner.nextLine();
                if ("exit".equalsIgnoreCase(userInput)) {
                    break;
                }
                messages.add(createMessage(Role.USER, userInput));
                GenerationParam param = createGenerationParam(messages);
                GenerationResult result = callGenerationWithMessages(param);
                System.out.println("Model output: "+result.getOutput().getChoices().get(0).getMessage().getContent());
                messages.add(result.getOutput().getChoices().get(0).getMessage());
            }
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            e.printStackTrace();
        }
        System.exit(0);
    }
    private static Message createMessage(Role role, String content) {
        return Message.builder().role(role.getValue()).content(content).build();
    }
}
```

## curl

```
# ======= Important =======
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
    "input":{
        "messages":[      
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Hello"
            },
            {
                "role": "assistant",
                "content": "Hello, I am Qwen."
            },
            {
                "role": "user",
                "content": "What can you do?"
            }
        ]
    }
}'
```

## **For multimodal models**

**Note**

-   This section applies to Qwen-VL and Kimi-K2.5. For `Qwen-Omni`, see [omni-modal](/help/en/model-studio/qwen-omni).
    
-   Qwen-VL-OCR and Qwen3-Omni-Captioner are designed for specific single-turn tasks and do not support multi-turn conversations.
    

Multimodal models support images and audio in conversations. Implementation differs from text models as follows:

-   **Construction of user messages**: User messages for multimodal models can contain multimodal information, such as images and audio, in addition to text.
    
-   **DashScope SDK interface:** When you use the DashScope Python SDK, call the `MultiModalConversation` interface. When you use the DashScope Java SDK, call the `MultiModalConversation` class.
    

## OpenAI compatible

## Python

```
from openai import OpenAI
import os

client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)
messages = [
        {"role": "user",
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
    model="qwen3-vl-plus",  #  You can replace this with other multimodal models and modify the messages as needed
    messages=messages,
    )
print(f"First round output: {completion.choices[0].message.content}")

assistant_message = completion.choices[0].message
messages.append(assistant_message.model_dump())
messages.append({
        "role": "user",
        "content": [
        {
            "type": "text",
            "text": "What style are they?"
        }
        ]
    })
completion = client.chat.completions.create(
    model="qwen3-vl-plus",
    messages=messages,
    )
    
print(f"Second round output: {completion.choices[0].message.content}")
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI(
    {
        // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        // If you have not configured the environment variable, replace the following line with your Model Studio API key: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);

let messages = [
    {
    role: "user", content: [
        { type: "image_url", image_url: { "url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png" } },
        { type: "text", text: "What products are shown in the image?" },
    ]
}]
async function main() {
    let response = await openai.chat.completions.create({
        model: "qwen3-vl-plus",   // You can replace this with other multimodal models and modify the messages as needed
        messages: messages
    });
    console.log(`First round output: ${response.choices[0].message.content}`);
    messages.push(response.choices[0].message);
    messages.push({"role": "user", "content": "Write a poem describing this scene"});
    response = await openai.chat.completions.create({
        model: "qwen3-vl-plus",
        messages: messages
    });
    console.log(`Second round output: ${response.choices[0].message.content}`);
}

main()
```

## curl

```
# ======= Important =======
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
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
            "url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"
          }
        },
        {
          "type": "text",
          "text": "What products are shown in the image?"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "The image shows three items: a pair of light blue overalls, a blue and white striped short-sleeve shirt, and a pair of white sneakers."
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "What style are they?"
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
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
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
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model='qwen3-vl-plus',  #  You can replace this with other multimodal models and modify the messages as needed
    messages=messages
    )
    
print(f"Model first round output {response.output.choices[0].message.content[0]['text']}")
messages.append(response['output']['choices'][0]['message'])
user_msg = {"role": "user", "content": [{"text": "What style are they?"}]}
messages.append(user_msg)
response = MultiModalConversation.call(
    # If the environment variable is not configured, please replace the following line with: api_key="sk-xxx",
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    model='qwen3-vl-plus',
    messages=messages
    )
    
print(f"Model second round output {response.output.choices[0].message.content[0]['text']}")
```

## Java

```
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
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
        // If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    private static final String modelName = "qwen3-vl-plus";  //  You can replace this with other multimodal models and modify the messages as needed
    public static void MultiRoundConversationCall() throws ApiException, NoApiKeyException, UploadFileException {
        MultiModalConversation conv = new MultiModalConversation();
        MultiModalMessage userMessage = MultiModalMessage.builder().role(Role.USER.getValue())
                .content(Arrays.asList(Collections.singletonMap("image", "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"),
                        Collections.singletonMap("text", "What products are shown in the image?"))).build();
        List<MultiModalMessage> messages = new ArrayList<>();
        messages.add(userMessage);
        MultiModalConversationParam param = MultiModalConversationParam.builder()
                // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
                // If you have not configured the environment variable, replace the following line with your Model Studio API key: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))                
                .model(modelName)
                .messages(messages)
                .build();
        MultiModalConversationResult result = conv.call(param);
        System.out.println("First round output: "+result.getOutput().getChoices().get(0).getMessage().getContent().get(0).get("text"));        // add the result to conversation
        messages.add(result.getOutput().getChoices().get(0).getMessage());
        MultiModalMessage msg = MultiModalMessage.builder().role(Role.USER.getValue())
                .content(Arrays.asList(Collections.singletonMap("text", "What style are they?"))).build();
        messages.add(msg);
        param.setMessages((List)messages);
        result = conv.call(param);
        System.out.println("Second round output: "+result.getOutput().getChoices().get(0).getMessage().getContent().get(0).get("text"));    }

    public static void main(String[] args) {
        try {
            MultiRoundConversationCall();
        } catch (ApiException | NoApiKeyException | UploadFileException e) {
            System.out.println(e.getMessage());
        }
        System.exit(0);
    }
}
```

## curl

```
# ======= Important =======
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H 'Content-Type: application/json' \
-d '{
    "model": "qwen3-vl-plus",
    "input":{
        "messages":[
            {
                "role": "user",
                "content": [
                    {"image": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251031/ownrof/f26d201b1e3f4e62ab4a1fc82dd5c9bb.png"},
                    {"text": "What products are shown in the image?"}
                ]
            },
            {
                "role": "assistant",
                "content": [
                    {"text": "The image shows three items: a pair of light blue overalls, a blue and white striped short-sleeve shirt, and a pair of white sneakers."}
                ]
            },
            {
                "role": "user",
                "content": [
                    {"text": "What style are they?"}
                ]
            }
        ]
    }
}'
```

## **For thinking models**

Thinking models return `reasoning_content` (thinking process) and `content` (response). When updating messages, retain only `content` and ignore `reasoning_content`.

```
[
    {"role": "user", "content": "Recommend a sci-fi movie about space exploration."},
    {"role": "assistant", "content": "I recommend 'XXX'. It is a classic sci-fi work."}, # Do not add the reasoning_content field when you add to the context
    {"role": "user", "content": "Who is the director of this movie?"}
]
```

> For more information about thinking models, see [Deep thinking](/help/en/model-studio/deep-thinking), [Image and video understanding](/help/en/model-studio/vision), and [Visual reasoning](/help/en/model-studio/visual-reasoning).

> For more information about implementing multi-turn conversations with Qwen3-Omni-Flash (thinking mode), see [omni-modal](/help/en/model-studio/qwen-omni#76b04b353ds7i).

## OpenAI compatible

## Python

### **Sample code**

```
from openai import OpenAI
import os

# Initialize the OpenAI client
client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
    api_key = os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)


messages = []
conversation_idx = 1
while True:
    reasoning_content = ""  # Define the complete thinking process
    answer_content = ""     # Define the complete response
    is_answering = False   # Determine whether to end the thinking process and start responding
    print("="*20+f"Conversation Round {conversation_idx}"+"="*20)
    conversation_idx += 1
    user_msg = {"role": "user", "content": input("Enter your message: ")}
    messages.append(user_msg)
    # Create a chat completion request
    completion = client.chat.completions.create(
        # You can replace this with other deep thinking models as needed
        model="qwen-plus",
        messages=messages,
        extra_body={"enable_thinking": True},
        stream=True,
        # stream_options={
        #     "include_usage": True
        # }
    )
    print("\n" + "=" * 20 + "Thinking Process" + "=" * 20 + "\n")
    for chunk in completion:
        # If chunk.choices is empty, print usage
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
                    print("\n" + "=" * 20 + "Complete Response" + "=" * 20 + "\n")
                    is_answering = True
                # Print the response process
                print(delta.content, end='', flush=True)
                answer_content += delta.content
    # Add the content of the model's response to the context
    messages.append({"role": "assistant", "content": answer_content})
    print("\n")
```

## Node.js

### **Sample code**

```
import OpenAI from "openai";
import process from 'process';
import readline from 'readline/promises';

// Initialize the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize the openai client
const openai = new OpenAI({
    // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    apiKey: process.env.DASHSCOPE_API_KEY, // Read from environment variables
    baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1'
});

let reasoningContent = '';
let answerContent = '';
let isAnswering = false;
let messages = [];
let conversationIdx = 1;

async function main() {
    while (true) {
        console.log("=".repeat(20) + `Conversation Round ${conversationIdx}` + "=".repeat(20));
        conversationIdx++;
        
        // Read user input
        const userInput = await rl.question("Enter your message: ");
        messages.push({ role: 'user', content: userInput });

        // Reset state
        reasoningContent = '';
        answerContent = '';
        isAnswering = false;

        try {
            const stream = await openai.chat.completions.create({
                // You can replace this with other deep thinking models as needed
                model: 'qwen-plus',
                messages: messages,
                enable_thinking: true,
                stream: true,
                // stream_options:{
                //     include_usage: true
                // }
            });

            console.log("\n" + "=".repeat(20) + "Thinking Process" + "=".repeat(20) + "\n");

            for await (const chunk of stream) {
                if (!chunk.choices?.length) {
                    console.log('\nUsage:');
                    console.log(chunk.usage);
                    continue;
                }

                const delta = chunk.choices[0].delta;
                
                // Process the thinking process
                if (delta.reasoning_content) {
                    process.stdout.write(delta.reasoning_content);
                    reasoningContent += delta.reasoning_content;
                }
                
                // Process the formal response
                if (delta.content) {
                    if (!isAnswering) {
                        console.log('\n' + "=".repeat(20) + "Complete Response" + "=".repeat(20) + "\n");
                        isAnswering = true;
                    }
                    process.stdout.write(delta.content);
                    answerContent += delta.content;
                }
            }
            
            // Add the complete response to the message history
            messages.push({ role: 'assistant', content: answerContent });
            console.log("\n");
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

// Start the program
main().catch(console.error);
```

## HTTP

### **Sample code**

## curl

```
# ======= Important =======
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# === Delete this comment before execution ===

curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
    "messages": [
        {
            "role": "user", 
            "content": "Hello"
        },
        {
            "role": "assistant",
            "content": "Hello! Nice to meet you. Is there anything I can help you with?"
        },
        {
            "role": "user",
            "content": "Who are you?"
        }
    ],
    "stream": true,
    "stream_options": {
        "include_usage": true
    },
    "enable_thinking": true
}'
```

## DashScope

## Python

### **Sample code**

```
import os
import dashscope
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1/"

messages = []
conversation_idx = 1
while True:
    print("=" * 20 + f"Conversation Round {conversation_idx}" + "=" * 20)
    conversation_idx += 1
    user_msg = {"role": "user", "content": input("Enter your message: ")}
    messages.append(user_msg)
    response = dashscope.Generation.call(
        # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
        api_key=os.getenv('DASHSCOPE_API_KEY'),
         # This example uses qwen-plus. You can replace it with other deep thinking models as needed
        model="qwen-plus", 
        messages=messages,
        enable_thinking=True,
        result_format="message",
        stream=True,
        incremental_output=True
    )
    # Define the complete thinking process
    reasoning_content = ""
    # Define the complete response
    answer_content = ""
    # Determine whether to end the thinking process and start responding
    is_answering = False
    print("=" * 20 + "Thinking Process" + "=" * 20)
    for chunk in response:
        # If both the thinking process and the response are empty, ignore
        if (chunk.output.choices[0].message.content == "" and 
            chunk.output.choices[0].message.reasoning_content == ""):
            pass
        else:
            # If it is currently the thinking process
            if (chunk.output.choices[0].message.reasoning_content != "" and 
                chunk.output.choices[0].message.content == ""):
                print(chunk.output.choices[0].message.reasoning_content, end="",flush=True)
                reasoning_content += chunk.output.choices[0].message.reasoning_content
            # If it is currently the response
            elif chunk.output.choices[0].message.content != "":
                if not is_answering:
                    print("\n" + "=" * 20 + "Complete Response" + "=" * 20)
                    is_answering = True
                print(chunk.output.choices[0].message.content, end="",flush=True)
                answer_content += chunk.output.choices[0].message.content
    # Add the content of the model's response to the context
    messages.append({"role": "assistant", "content": answer_content})
    print("\n")
    # To print the complete thinking process and complete response, uncomment and run the following code
    # print("=" * 20 + "Complete Thinking Process" + "=" * 20 + "\n")
    # print(f"{reasoning_content}")
    # print("=" * 20 + "Complete Response" + "=" * 20 + "\n")
    # print(f"{answer_content}")
```

## Java

### **Sample code**

```
// DashScope SDK version >= 2.19.4
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
import io.reactivex.Flowable;
import java.lang.System;
import java.util.List;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private static StringBuilder reasoningContent = new StringBuilder();
    private static StringBuilder finalContent = new StringBuilder();
    private static boolean isFirstPrint = true;

    private static void handleGenerationResult(GenerationResult message) {
        if (message != null && message.getOutput() != null 
            && message.getOutput().getChoices() != null 
            && !message.getOutput().getChoices().isEmpty() 
            && message.getOutput().getChoices().get(0) != null
            && message.getOutput().getChoices().get(0).getMessage() != null) {
            
            String reasoning = message.getOutput().getChoices().get(0).getMessage().getReasoningContent();
            String content = message.getOutput().getChoices().get(0).getMessage().getContent();
            
            if (reasoning != null && !reasoning.isEmpty()) {
                reasoningContent.append(reasoning);
                if (isFirstPrint) {
                    System.out.println("====================Thinking Process====================");
                    isFirstPrint = false;
                }
                System.out.print(reasoning);
            }

            if (content != null && !content.isEmpty()) {
                finalContent.append(content);
                if (!isFirstPrint) {
                    System.out.println("\n====================Complete Response====================");
                    isFirstPrint = true;
                }
                System.out.print(content);
            }
        }
    }
    
    private static GenerationParam buildGenerationParam(List<Message> messages) {
        return GenerationParam.builder()
                // If you have not configured the environment variable, replace the following line with your Model Studio API key: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // This example uses qwen-plus. You can replace it with other model names as needed.
                .model("qwen-plus")
                .enableThinking(true)
                .messages(messages)
                .incrementalOutput(true)
                .resultFormat("message")
                .build();
    }
    
    public static void streamCallWithMessage(Generation gen, List<Message> messages)
            throws NoApiKeyException, ApiException, InputRequiredException {
        GenerationParam param = buildGenerationParam(messages);
        Flowable<GenerationResult> result = gen.streamCall(param);
        result.doOnError(throwable -> logger.error("Error occurred in stream processing: {}", throwable.getMessage(), throwable))
              .blockingForEach(Main::handleGenerationResult);
    }

    public static void main(String[] args) {
        try {
            // If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
            Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
            Message userMsg1 = Message.builder()
                    .role(Role.USER.getValue())
                    .content("Hello")
                    .build();
            Message assistantMsg = Message.builder()
                    .role(Role.ASSISTANT.getValue())
                    .content("Hello! Nice to meet you. Is there anything I can help you with?")
                    .build();
            Message userMsg2 = Message.builder()
                    .role(Role.USER.getValue())
                    .content("Who are you")
                    .build();
            List<Message> messages = Arrays.asList(userMsg1, assistantMsg, userMsg2);
            streamCallWithMessage(gen, messages);
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            logger.error("An exception occurred: {}", e.getMessage(), e);
        } catch (Exception e) {
            logger.error("Unexpected error occurred: {}", e.getMessage(), e);
        } finally {
            // Ensure the program exits normally
            System.exit(0);
        }
    }
}
```

## HTTP

### **Sample code**

## curl

```
# ======= Important =======
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
# If you use a model in the China (Beijing) region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation
# === Delete this comment before execution ===
curl -X POST "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text-generation/generation" \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-H "X-DashScope-SSE: enable" \
-d '{
    "model": "qwen-plus",
    "input":{
        "messages":[      
            {
                "role": "user",
                "content": "Hello"
            },
            {
                "role": "assistant",
                "content": "Hello! Nice to meet you. Is there anything I can help you with?"
            },
            {
                "role": "user",
                "content": "Who are you?"
            }
        ]
    },
    "parameters":{
        "enable_thinking": true,
        "incremental_output": true,
        "result_format": "message"
    }
}'
```

## **Going live**

Multi-turn conversations can consume many tokens and exceed the model's context length, causing errors. Use these strategies to manage context and control costs.

### **1\. Context management**

The `messages` array grows with each round and may exceed the model's token limit. Use these methods to manage context length:

#### **1.1. Context truncation**

Keep only the most recent N rounds when history becomes too long. This is simple to implement but loses earlier conversation information.

#### **1.2. Rolling summary**

Summarize context as the conversation progresses to compress history and control length without losing core information:

a. When history reaches 70% of max context length, extract an earlier part (such as the first half) and make a separate API call to generate a "memory summary".

b. In the next request, replace the lengthy history with the "memory summary" and append recent rounds.

#### **1.3. Vectorized retrieval**

Rolling summaries can lose some information. To let the model recall relevant information from large conversation histories, use on-demand retrieval instead of linear context passing:

a. After each conversation round, store the conversation in a vector database.

b. When a user asks a question, retrieve relevant conversation records based on similarity.

c. Combine the retrieved conversation records with the most recent user input and send the combined content to the model.  

### **2\. Cost control**

Input tokens increase with each round, significantly raising costs. Use these cost management strategies:

#### **2.1. Reduce input tokens**

Use the context management strategies described previously to reduce input tokens and lower costs.

#### **2.2. Use models that support context cache**

In multi-turn requests, the `messages` array is repeatedly processed and billed. Model Studio provides [context cache](/help/en/model-studio/context-cache) for models like `qwen-max` and `qwen-plus`, which reduces costs and improves response speed. Prioritize models that support context cache.

> Context cache is enabled automatically—no code changes required.

## Error codes

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.
