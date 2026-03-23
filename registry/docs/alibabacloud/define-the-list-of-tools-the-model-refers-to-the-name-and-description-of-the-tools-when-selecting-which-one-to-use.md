The Qwen models in Alibaba Cloud Model Studio support an OpenAI compatible interface. To migrate your existing OpenAI code to the Model Studio service, adjust the API key, BASE\_URL, and model name.

## **Information for OpenAI compatibility**

### **BASE\_URL**

The BASE\_URL is the network endpoint for the model service. You can use this address to access the service's features. When you use the OpenAI compatible interface to call Model Studio services, you must configure the BASE\_URL.

-   When you make calls using the OpenAI SDK or other OpenAI compatible SDKs, configure the BASE\_URL as follows:
    
    ```
    Singapore: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
    US (Virginia): https://dashscope-us.aliyuncs.com/compatible-mode/v1
    China (Beijing): https://dashscope.aliyuncs.com/compatible-mode/v1
    Hong Kong (China): https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1
    ```
    
-   When you make calls using HTTP requests, configure the full access endpoint as follows:
    
    ```
    Singapore: POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
    US (Virginia): POST https://dashscope-us.aliyuncs.com/compatible-mode/v1/chat/completions
    China (Beijing): POST https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
    Hong Kong (China): https://cn-hongkong.aliyuncs.com/compatible-mode/v1/chat/completions
    ```
    

### **Supported model list**

The following table lists the Qwen series models that are supported by the OpenAI compatible interface.

## Global

-   **Commercial**
    
    -   **Qwen-Max series**: qwen3-max, qwen3-max-preview, qwen3-max-2025-09-23 and later snapshot versions
        
    -   **Qwen-Plus series**: qwen-plus, qwen-plus-latest, qwen-plus-2025-01-25 and later snapshot versions
        
    -   **Qwen-Flash series**: qwen-flash, qwen-flash-2025-07-28 and later snapshot versions
        
-   **Open source**
    
    -   qwen3-next-80b-a3b-thinking, qwen3-next-80b-a3b-instruct, qwen3-235b-a22b-thinking-2507, qwen3-235b-a22b-instruct-2507, qwen3-30b-a3b-thinking-2507, qwen3-30b-a3b-instruct-2507, qwen3-235b-a22b, qwen3-32b, qwen3-30b-a3b, qwen3-14b, qwen3-8b
        

## International

-   **Commercial Edition**
    
    -   **Qwen-Max series**: qwen3-max, qwen3-max-preview, qwen3-max-2025-09-23 and later snapshot versions, qwen-max, qwen-max-latest, qwen-max-2025-01-25 and later snapshot versions
        
    -   **Qwen-Plus series**: qwen3.5-plus, qwen3.5-plus-2026-02-15 and later snapshot versions, qwen-plus, qwen-plus-latest, qwen-plus-2025-01-25 and later snapshot versions
        
    -   **Qwen-Flash series**: qwen3.5-flash, qwen3.5-flash-2026-02-23 and later snapshot versions, qwen-flash, qwen-flash-2025-07-28
        
    -   **Qwen-Turbo series**: qwen-turbo, qwen-turbo-latest, qwen-turbo-2024-11-01 and later snapshot versions
        
    -   **Qwen-Coder series**: qwen3-coder-plus, qwen3-coder-plus-2025-07-22 and later snapshot versions, qwen3-coder-flash, qwen3-coder-flash-2025-07-28 and later snapshot versions
        
    -   **QwQ series**: qwq-plus
        
-   **Open source**
    
    -   qwen3.5-397b-a17b, qwen3.5-120b-a10b, qwen3.5-27b, qwen3.5-35b-a3b
        
    -   qwen3-next-80b-a3b-thinking, qwen3-next-80b-a3b-instruct, qwen3-235b-a22b-thinking-2507, qwen3-235b-a22b-instruct-2507, qwen3-30b-a3b-thinking-2507, qwen3-30b-a3b-instruct-2507, qwen3-235b-a22b, qwen3-32b, qwen3-30b-a3b, qwen3-14b, qwen3-8b, qwen3-4b, qwen3-1.7b, qwen3-0.6b
        
    -   qwen2.5-14b-instruct-1m, qwen2.5-7b-instruct-1m, qwen2.5-72b-instruct, qwen2.5-32b-instruct, qwen2.5-14b-instruct, qwen2.5-7b-instruct
        

## US

-   **Commercial**
    
    -   **Qwen-Plus series**: qwen-plus-us, qwen-plus-2025-12-01-us and later snapshot versions
        
    -   **Qwen-Flash series**: qwen-flash-us, qwen-flash-2025-07-28-us
        

## Chinese mainland

-   **Commercial**
    
    -   **Qwen-Max series**: qwen3-max, qwen3-max-preview, qwen3-max-2025-09-23 and later snapshot versions, qwen-max, qwen-max-latest, qwen-max-2024-09-19 and later snapshot versions
        
    -   **Qwen-Plus series**: qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen3.5-flash, qwen3.5-flash-2026-02-23 and later snapshot versions, qwen-plus, qwen-plus-latest, qwen-plus-2024-12-20 and later snapshot versions
        
    -   **Qwen-Flash series**: qwen-flash, qwen-flash-2025-07-28 and later snapshot versions
        
    -   **Qwen-Turbo series**: qwen-turbo, qwen-turbo-latest, qwen-turbo-2025-04-28 and later snapshot versions
        
    -   **Qwen-Coder series**: qwen3-coder-plus, qwen3-coder-plus-2025-07-22 and later snapshot versions, qwen3-coder-flash, qwen3-coder-flash-2025-07-28 and later snapshot versions, qwen-coder-plus, qwen-coder-plus-latest, qwen-coder-plus-2024-11-06, qwen-coder-turbo, qwen-coder-turbo-latest, qwen-coder-turbo-2024-09-19
        
    -   **QwQ series**: qwq-plus, qwq-plus-latest, qwq-plus-2025-03-05
        
    -   **Qwen-Math models**: qwen-math-plus, qwen-math-plus-latest, qwen-math-plus-2024-08-16 and later snapshot versions, qwen-math-turbo, qwen-math-turbo-latest, qwen-math-turbo-2024-09-19
        
-   **Open source**
    
    -   qwen3.5-397b-a17b, qwen3.5-120b-a10b, qwen3.5-27b, qwen3.5-35b-a3b
        
    -   qwen3-next-80b-a3b-thinking, qwen3-next-80b-a3b-instruct, qwen3-235b-a22b-thinking-2507, qwen3-235b-a22b-instruct-2507, qwen3-30b-a3b-thinking-2507, qwen3-30b-a3b-instruct-2507, qwen3-235b-a22b, qwen3-32b, qwen3-30b-a3b, qwen3-14b, qwen3-8b, qwen3-4b, qwen3-1.7b, qwen3-0.6b
        
    -   qwen2.5-14b-instruct-1m, qwen2.5-7b-instruct-1m, qwen2.5-72b-instruct, qwen2.5-32b-instruct, qwen2.5-14b-instruct, qwen2.5-7b-instruct, qwen2.5-3b-instruct, qwen2.5-1.5b-instruct, qwen2.5-0.5b-instruct
        

## Hong Kong (China)

-   **Qwen-Max series**: qwen3-max, qwen3-max-2026-01-23 and later snapshot versions
    
-   **Qwen-Plus series**: qwen-plus, qwen-plus-2025-01-25 and later snapshot versions
    
-   **Qwen-Flash series**: qwen3.5-flash, qwen3.5-flash-2026-02-23 and later snapshot versions
    

## Use the OpenAI SDK

### **Prerequisites**

-   Make sure that a Python environment is installed on your computer.
    

-   Install the latest version of the OpenAI SDK.
    
    ```
    # If the following command fails, replace pip with pip3.
    pip install -U openai
    ```
    
-   You must activate Model Studio and get an API key. See [Get an API key](/help/en/model-studio/get-api-key).
    

-   We recommend that you configure the API key as an environment variable to reduce the risk of exposure. See [Configure the API key as an environment variable (This method is being deprecated and will be merged into Configure API Key)](/help/en/model-studio/configure-api-key-through-environment-variables). You can also configure the API key in your code, **but this increases the risk of exposure**.
    
-   Select a model to use. See [Supported model list](#eadfc13038jd5).
    

### **Usage**

You can use the following examples to call Qwen models in Model Studio with the OpenAI SDK.

#### **Non-streaming call example**

```
from openai import OpenAI
import os

def get_response():
    client = OpenAI(
        # API keys differ by region. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace this line with your Model Studio API key: api_key="sk-xxx"
        # The following is the base_url for the Singapore region.
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
    )
    completion = client.chat.completions.create(
        model="qwen-plus",  # This example uses qwen-plus. You can change the model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        messages=[{'role': 'system', 'content': 'You are a helpful assistant.'},
                  {'role': 'user', 'content': 'Who are you?'}]
        )
    print(completion.model_dump_json())

if __name__ == '__main__':
    get_response()
```

Running the code produces the following result:

```
{
    "id": "chatcmpl-xxx",
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null,
            "message": {
                "content": "I am a large-scale pre-trained model from Alibaba Cloud. My name is Qwen.",
                "role": "assistant",
                "function_call": null,
                "tool_calls": null
            }
        }
    ],
    "created": 1716430652,
    "model": "qwen-plus",
    "object": "chat.completion",
    "system_fingerprint": null,
    "usage": {
        "completion_tokens": 18,
        "prompt_tokens": 22,
        "total_tokens": 40
    }
}
```

#### **Streaming call example**

```
from openai import OpenAI
import os

def get_response():
    client = OpenAI(
        # API keys differ by region. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        # If you have not configured an environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx"
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # The following is the base_url for the Singapore region.
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
        
    )
    completion = client.chat.completions.create(
        model="qwen-plus",  # This example uses qwen-plus. You can change the model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        messages=[{'role': 'system', 'content': 'You are a helpful assistant.'},
                  {'role': 'user', 'content': 'Who are you?'}],
        stream=True,
        # The following setting displays token usage information in the last line of the streaming output.
        stream_options={"include_usage": True}
        )
    for chunk in completion:
        print(chunk.model_dump_json())


if __name__ == '__main__':
    get_response()
```

Running the code produces the following result:

```
{"id":"chatcmpl-xxx","choices":[{"delta":{"content":"","function_call":null,"role":"assistant","tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":null}
{"id":"chatcmpl-xxx","choices":[{"delta":{"content":"I am","function_call":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":null}
{"id":"chatcmpl-xxx","choices":[{"delta":{"content":" a large language model","function_call":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":null}
{"id":"chatcmpl-xxx","choices":[{"delta":{"content":" from Alibaba","function_call":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":null}
{"id":"chatcmpl-xxx","choices":[{"delta":{"content":" Cloud. My name is Qwen.","function_call":null,"role":null,"tool_calls":null},"finish_reason":null,"index":0,"logprobs":null}],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":null}
{"id":"chatcmpl-xxx","choices":[{"delta":{"content":"","function_call":null,"role":null,"tool_calls":null},"finish_reason":"stop","index":0,"logprobs":null}],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":null}
{"id":"chatcmpl-xxx","choices":[],"created":1719286190,"model":"qwen-plus","object":"chat.completion.chunk","system_fingerprint":null,"usage":{"completion_tokens":16,"prompt_tokens":22,"total_tokens":38}}
```

#### **Function call example**

This example uses weather and time query tools to demonstrate how to implement function calls through the OpenAI compatible interface. The sample code can perform multi-round tool calls.

```
from openai import OpenAI
from datetime import datetime
import json
import os

client = OpenAI(
    # API keys differ by region. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
    # If you have not configured an environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # The following is the base_url for the Singapore region.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)

# Define the list of tools. The model refers to the name and description of the tools when selecting which one to use.
tools = [
    # Tool 1: Get the current time.
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            # Because getting the current time requires no input parameters, parameters is an empty dictionary.
            "parameters": {}
        }
    },  
    # Tool 2: Get the weather for a specified city.
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Useful when you want to query the weather for a specified city.",
            "parameters": {  
                "type": "object",
                "properties": {
                    # A location must be provided to query the weather, so the parameter is set to location.
                    "location": {
                        "type": "string",
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang."
                    }
                }
            },
            "required": [
                "location"
            ]
        }
    }
]

# Impersonate a weather query tool. Example result: "It is rainy in Beijing today."
def get_current_weather(location):
    return f"It is rainy in {location} today. "

# Tool to query the current time. Example result: "Current time: 2024-04-15 17:15:18."
def get_current_time():
    # Get the current date and time.
    current_datetime = datetime.now()
    # Format the current date and time.
    formatted_time = current_datetime.strftime('%Y-%m-%d %H:%M:%S')
    # Return the formatted current time.
    return f"Current time: {formatted_time}."

# Encapsulate the model response function.
def get_response(messages):
    completion = client.chat.completions.create(
        model="qwen-plus",  # This example uses qwen-plus. You can change the model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        messages=messages,
        tools=tools
        )
    return completion.model_dump()

def call_with_messages():
    print('\n')
    messages = [
            {
                "content": input('Please enter: '),  # Example questions: "What time is it now?" "What time will it be in an hour?" "What is the weather like in Beijing?"
                "role": "user"
            }
    ]
    print("-"*60)
    # First round of model call.
    i = 1
    first_response = get_response(messages)
    assistant_output = first_response['choices'][0]['message']
    print(f"\nLLM output in round {i}: {first_response}\n")
    if  assistant_output['content'] is None:
        assistant_output['content'] = ""
    messages.append(assistant_output)
    # If no tool call is needed, return the final answer directly.
    if assistant_output['tool_calls'] == None:  # If the model determines that no tool call is needed, print the assistant's reply directly without a second model call.
        print(f"No tool call is needed. I can reply directly: {assistant_output['content']}")
        return
    # If a tool call is needed, perform multiple rounds of model calls until the model determines that no tool call is needed.
    while assistant_output['tool_calls'] != None:
        # If the model determines that the weather query tool needs to be called, run the weather query tool.
        if assistant_output['tool_calls'][0]['function']['name'] == 'get_current_weather':
            tool_info = {"name": "get_current_weather", "role":"tool"}
            # Fetch the location parameter information.
            location = json.loads(assistant_output['tool_calls'][0]['function']['arguments'])['location']
            tool_info['content'] = get_current_weather(location)
        # If the model determines that the time query tool needs to be called, run the time query tool.
        elif assistant_output['tool_calls'][0]['function']['name'] == 'get_current_time':
            tool_info = {"name": "get_current_time", "role":"tool"}
            tool_info['content'] = get_current_time()
        print(f"Tool output: {tool_info['content']}\n")
        print("-"*60)
        messages.append(tool_info)
        assistant_output = get_response(messages)['choices'][0]['message']
        if  assistant_output['content'] is None:
            assistant_output['content'] = ""
        messages.append(assistant_output)
        i += 1
        print(f"LLM output in round {i}: {assistant_output}\n")
    print(f"Final answer: {assistant_output['content']}")

if __name__ == '__main__':
    call_with_messages()
```

When you enter `What is the weather in Singapore?`, the program produces the following output:

![2024-06-26_10-04-56 (1).gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5070052271/p814524.gif)

### **Input parameters**

The input parameters are aligned with those of the OpenAI interface. The currently supported parameters are as follows:

**Parameter**

**Type**

**Default**

**Description**

model

_string_

\-

Use the model parameter to specify the model. For a list of available models, see [Supported model list](#eadfc13038jd5).

messages

_array_

\-

The conversation history between the user and the model. Each element in the array has the format `{"role": Role, "content": Content}`. The current available roles are system, user, and assistant. The system role is supported only in `messages[0]`. In most cases, the user and assistant roles must alternate, and the role of the last element in messages must be user.

top\_p (optional)

_float_

\-

The probability threshold for nucleus sampling during the generation process. For example, if you set this parameter to 0.8, the system retains the smallest possible set of tokens whose cumulative probability is 0.8 or higher as the candidate set. Valid values are in the range of (0, 1.0). A larger value results in higher randomness, and a smaller value results in higher determinism.

temperature (optional)

_float_

\-

Controls the randomness and diversity of the model's responses. Specifically, the temperature value controls the degree of smoothing applied to the probability distribution of each candidate word during text generation. A higher temperature value reduces the peak of the probability distribution, allowing more low-probability words to be selected and making the generation results more diverse. A lower temperature value enhances the peak of the probability distribution, making high-probability words more likely to be selected and the generation results more deterministic.

Valid values are in the range of \[0, 2). We recommend that you do not set this parameter to 0, as it is meaningless.

presence\_penalty

(optional)

_float_

\-

Controls the repetition of the entire sequence during model generation. Increasing the presence\_penalty can reduce the repetition of the model's generated content. Valid values are in the range of \[-2.0, 2.0\].

**Note**

This parameter is currently supported only on Qwen commercial models and open source models from qwen1.5 onwards.

n (optional)

_integer_

1

The number of responses to generate. Valid values are in the range of `1-4`. For scenarios that require multiple responses, such as creative writing or ad copy, you can set a larger value for n.

> Setting a larger value for n does not increase input token consumption but does increase output token consumption.

> This is currently supported only for the qwen-plus model and is fixed to 1 when the tools parameter is passed.

max\_tokens (optional)

_integer_

\-

Specifies the maximum number of tokens that the model can generate. For example, if the model's maximum output length is 2k, you can set this to 1k to prevent the model from generating excessively long content.

Different models have different output limits. For details, see the model list.

seed (optional)

_integer_

\-

The random number seed used for generation, which controls the randomness of the model's generated content. The seed supports unsigned 64-bit integers.

stream (optional)

_boolean_

False

Controls whether to use streaming output. When results are output in stream mode, the interface returns a generator. You need to iterate to get the results. Each output is the incremental sequence generated at that time.

stop (optional)

_string or array_

None

The stop parameter provides precise control over the content generation process. It automatically stops generation when the model is about to include a specified string or token ID. The stop parameter can be a string or an array.

-   string type
    
    Stops when the model is about to generate the specified stop word.
    
    For example, if stop is set to "hello", the model will stop when it is about to generate "hello".
    
-   array type
    
    The elements in the array can be token IDs, strings, or an array of token IDs. When the token to be generated or its corresponding token ID is in the stop list, the model generation will stop. The following are examples of stop as an array (the tokenizer corresponds to the qwen-turbo model):
    
    1\. Elements are token IDs:
    
    The token IDs 108386 and 104307 correspond to the tokens "hello" and "weather" respectively. If stop is set to `[108386,104307]`, the model will stop when it is about to generate "hello" or "weather".
    
    2\. Elements are strings:
    
    If stop is set to `["hello","weather"]`, the model will stop when it is about to generate "hello" or "weather".
    
    3\. Elements are arrays:
    
    The token IDs 108386 and 103924 correspond to the tokens "hello" and "ah", and the token IDs 35946 and 101243 correspond to the tokens "I" and "am fine". If stop is set to `[[108386, 103924],[35946, 101243]]`, the model will stop when it is about to generate "hello ah" or "I am fine".
    
    **Note**
    
    When stop is an array, its elements must be either all token IDs or all strings. For example, you cannot specify stop as `["hello", 104307]`.
    

tools (optional)

_array_

None

Specifies a library of tools that the model can call. In a function call flow, the model selects one tool from this library. Each tool in the tools array has the following structure:

-   type: string, indicates the type of tools. Currently, only function is supported.
    
-   function: object, with keys including name, description, and parameters:
    
    -   name: string, indicates the name of the tool function. It must consist of letters, numbers, and can include underscores and hyphens, with a maximum length of 64.
        
    -   description: string, indicates the description of the tool function, for the model to decide when and how to call the tool function.
        
    -   parameters: object, indicates the parameter description of the tool, which needs to be a valid JSON Schema. For a description of JSON Schema, see this [link](https://json-schema.org/understanding-json-schema). If the parameters parameter is empty, it means the function has no input parameters.
        

In the function call flow, the tools parameter must be set, whether it is for initiating a function call round or submitting the execution result of a tool function to the model. Currently supported models include qwen-turbo, qwen-plus, and qwen-max.

**Note**

The tools parameter cannot be used with stream=True at the same time.

stream\_options (optional)

_object_

None

This parameter is used to configure whether to display the number of tokens used during streaming output. This parameter is only active when stream is set to True. To count the number of tokens in streaming output mode, you can configure this parameter as `stream_options={"include_usage":True}`.

### **Response parameters**

**Parameter**

**Data type**

**Description**

**Remarks**

id

_string_

The system-generated ID for this call.

\-

model

_string_

The name of the model used for this call.

\-

system\_fingerprint

_string_

The configuration version used by the model at runtime. This is not currently supported and returns an empty string "".

\-

choices

_array_

Details of the content generated by the model.

\-

choices\[i\].finish\_reason

_string_

There are three cases:

-   null: While generating;
    
-   stop: Gneration ended due to a stop condition in the input parameters;
    
-   length: Generation ended due to excessive length.
    

choices\[i\].message

_object_

The message output by the model.

choices\[i\].message.role

_string_

The role of the model, fixed as assistant.

choices\[i\].message.content

_string_

The text generated by the model.

choices\[i\].index

_integer_

The sequence number of the generated result, default is 0.

created

_integer_

The UNIX timestamp (in seconds) of the current generated result.

\-

usage

_object_

Metering information, indicating the token data consumed by this request.

\-

usage.prompt\_tokens

_integer_

The length of the user input text after being converted to tokens.

\-

usage.completion\_tokens

_integer_

The length of the model-generated reply after being converted to tokens.

\-

usage.total\_tokens

_integer_

The sum of usage.prompt\_tokens and usage.completion\_tokens.

\-

## Use the langchain\_openai SDK

### **Prerequisites**

-   Ensure a Python environment is installed on your computer.
    

-   Install the langchain\_openai SDK by running the following command.
    
    ```
    # If the following command fails, replace pip with pip3.
    pip install -U langchain_openai
    ```
    

-   You must activate Model Studio and get an API key. See [Get an API key](/help/en/model-studio/get-api-key).
    
-   We recommend configuring the API key as an environment variable to reduce the risk of key leakage. See [Configure the API key as an environment variable (This method is being deprecated and will be merged into Configure API Key)](/help/en/model-studio/configure-api-key-through-environment-variables). You can also configure the API key in your code, **but this increases the risk of leakage**.
    
-   Select a model to use. See [Supported model list](#eadfc13038jd5).
    

### **Usage**

Use the following examples to access Qwen models in Model Studio with the langchain\_openai SDK.

#### **Non-streaming output**

Use the invoke method for non-streaming output. The following code example demonstrates this:

```
from langchain_openai import ChatOpenAI
import os

def get_response():
    llm = ChatOpenAI(
        # API keys differ by region. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace this line with your Model Studio API key: api_key="sk-xxx"
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1", # This is the base_url for the Singapore region.
        model="qwen-plus"  # This example uses qwen-plus. You can change the model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        )
    messages = [
        {"role":"system","content":"You are a helpful assistant."},
        {"role":"user","content":"Who are you?"}
    ]
    response = llm.invoke(messages)
    print(response.json())

if __name__ == "__main__":
    get_response()
```

Running the code produces the following result:

```
{
    "content": "I am a large language model from Alibaba Cloud. My name is Qwen.",
    "additional_kwargs": {},
    "response_metadata": {
        "token_usage": {
            "completion_tokens": 16,
            "prompt_tokens": 22,
            "total_tokens": 38
        },
        "model_name": "qwen-plus",
        "system_fingerprint": "",
        "finish_reason": "stop",
        "logprobs": null
    },
    "type": "ai",
    "name": null,
    "id": "run-xxx",
    "example": false,
    "tool_calls": [],
    "invalid_tool_calls": []
}
```

#### **Streaming output**

Use the stream method for streaming output. You do not need to configure a stream parameter.

```
from langchain_openai import ChatOpenAI
import os

def get_response():
    llm = ChatOpenAI(
        # API keys differ by region. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        api_key=os.getenv("DASHSCOPE_API_KEY"),  # If you have not configured an environment variable, replace this line with your Model Studio API key: api_key="sk-xxx"
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",   # This is the base_url for the Singapore region.
        model="qwen-plus",   # This example uses qwen-plus. You can change the model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
        stream_usage=True
        )
    messages = [
        {"role":"system","content":"You are a helpful assistant."}, 
        {"role":"user","content":"Who are you?"},
    ]
    response = llm.stream(messages)
    for chunk in response:
        print(chunk.model_dump_json())

if __name__ == "__main__":
    get_response()
```

Running the code produces the following result:

```
{"content": "", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": "I am", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": " a large language model", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": " from Alibaba", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": " Cloud", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": ". My name is Tongyi", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": " Qwen.", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": "", "additional_kwargs": {}, "response_metadata": {"finish_reason": "stop"}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": null, "tool_call_chunks": []}
{"content": "", "additional_kwargs": {}, "response_metadata": {}, "type": "AIMessageChunk", "name": null, "id": "run-xxx", "example": false, "tool_calls": [], "invalid_tool_calls": [], "usage_metadata": {"input_tokens": 22, "output_tokens": 16, "total_tokens": 38}, "tool_call_chunks": []}
```

For information about input parameter configuration, see [Input parameters](#d553cbbee6mxk). The relevant parameters are defined in the ChatOpenAI object.

## **Use the HTTP API**

Call the service through an HTTP interface and receive a response with a structure identical to that of an HTTP call to the OpenAI service.

### **Prerequisites**

-   You must activate Model Studio and get an API key. See [Get an API key](/help/en/model-studio/get-api-key).
    
-   We recommend that you configure the API key as an environment variable to reduce the risk of key leakage. See [Configure the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). You can also configure the API key in your code, **but this increases the risk of leakage**.
    

### **Submit an API call**

```
Singapore: POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions
US (Virginia): POST https://dashscope-us.aliyuncs.com/compatible-mode/v1/chat/completions
China (Beijing): POST https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
China (Hong Kong): POST https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
```

### **Request example**

The following example shows how to call the API using a `cURL` command.

**Note**

If you have not configured the API key as an environment variable, replace $DASHSCOPE\_API\_KEY with your API key_._

#### **Non-streaming output**

curl

```
# This is the base_url for the Singapore region.
curl --location 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
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
    ]
}'
```

The command returns the following output:

```
{
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "I am a large language model from Alibaba Cloud. My name is Qwen."
            },
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null
        }
    ],
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 11,
        "completion_tokens": 16,
        "total_tokens": 27
    },
    "created": 1715252778,
    "system_fingerprint": "",
    "model": "qwen-plus",
    "id": "chatcmpl-xxx"
}
```

#### **Streaming output**

To use streaming output, set the stream parameter to true in the request body.

```
# This is the base_url for the Singapore region.
curl --location 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
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

The command returns the following output:

```
data: {"choices":[{"delta":{"content":"","role":"assistant"},"index":0,"logprobs":null,"finish_reason":null}],"object":"chat.completion.chunk","usage":null,"created":1715931028,"system_fingerprint":null,"model":"qwen-plus","id":"chatcmpl-3bb05cf5cd819fbca5f0b8d67a025022"}

data: {"choices":[{"finish_reason":null,"delta":{"content":"I am"},"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1715931028,"system_fingerprint":null,"model":"qwen-plus","id":"chatcmpl-3bb05cf5cd819fbca5f0b8d67a025022"}

data: {"choices":[{"delta":{"content":" a large language model"},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1715931028,"system_fingerprint":null,"model":"qwen-plus","id":"chatcmpl-3bb05cf5cd819fbca5f0b8d67a025022"}

data: {"choices":[{"delta":{"content":" from Alibaba"},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1715931028,"system_fingerprint":null,"model":"qwen-plus","id":"chatcmpl-3bb05cf5cd819fbca5f0b8d67a025022"}

data: {"choices":[{"delta":{"content":" Cloud. My name is Qwen."},"finish_reason":null,"index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1715931028,"system_fingerprint":null,"model":"qwen-plus","id":"chatcmpl-3bb05cf5cd819fbca5f0b8d67a025022"}

data: {"choices":[{"delta":{"content":""},"finish_reason":"stop","index":0,"logprobs":null}],"object":"chat.completion.chunk","usage":null,"created":1715931028,"system_fingerprint":null,"model":"qwen-plus","id":"chatcmpl-3bb05cf5cd819fbca5f0b8d67a025022"}

data: [DONE]
```

For more information about the input parameters, see [Input parameters](#d553cbbee6mxk).

### **Error response example**

If a request fails, the output includes a code and message that indicate the reason for the error.

```
{
    "error": {
        "message": "Incorrect API key provided. ",
        "type": "invalid_request_error",
        "param": null,
        "code": "invalid_api_key"
    }
}
```

## **Status code description**

**Error code**

**Description**

400 - Invalid Request Error

Invalid request. See the error message for details.

401 - Incorrect API key provided

Incorrect API key.

429 - Rate limit reached for requests

Rate limit exceeded, such as queries per second (QPS) or queries per minute (QPM).

429 - You exceeded your current quota, please check your plan and billing details

Quota exceeded or account has an overdue payment.

500 - The server had an error while processing your request

A server-side error occurred.

503 - The engine is currently overloaded, please try again later

The server is overloaded. Try again later.
