Large language models (LLMs) can struggle with real-time information and mathematical calculations. Function calling allows LLMs to use external tools to answer questions that they could not otherwise answer.

## **How it works**

Function calling enables LLMs to use external tools through multi-step interactions between your application and the model.

1.  **Make the first model call**
    
    Send a request to the LLM with the user's question and a list of available tools.
    
2.  **Receive the model's tool call instruction (tool name and input parameters)**
    
    If the model determines that an external tool is needed, it returns a JSON instruction that specifies the function to execute and its input parameters.
    
    > If the model determines that no tool is needed, it returns a response in natural language.
    
3.  **Run the tool in your application**
    
    After your application receives the tool instruction, run the tool to get the output.
    
4.  **Make the second model call**
    
    Add the tool output to the model's context (messages) and make another model call.
    
5.  **Receive the final response from the model**
    
    The model combines the tool output with the user's question to generate a response in natural language.
    

The following diagram shows the workflow:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8565283771/CAEQVBiBgMCfh7H95xkiIGZkN2Q4ZDIwYTM5YjQyOWZhYzA4NmY5MTkxNjliMWEx4358988_20240409160230.951.svg)

## **Supported models**

## Qwen

-   **Text generation models**
    
    -   [Qwen-Max](/help/en/model-studio/models#qwen-max-intl-sp)
        
    -   [Qwen-Plus](/help/en/model-studio/models#1e0e75495dyvu)
        
    -   [Qwen-Flash](/help/en/model-studio/models#qwenflashintl)
        
    -   [Qwen-Turbo](/help/en/model-studio/models#5169965cbfeyp)
        
    -   [Qwen3.5](/help/en/model-studio/models#568c06efe4440)
        
    -   [Qwen3](/help/en/model-studio/models#c5414da58bjgj)
        
    -   [Qwen2.5](/help/en/model-studio/models#cae1159e00ixp)
        
-   **Multimodal models**
    
    -   [Qwen-VL](/help/en/model-studio/models#11b9e47081cwz) (qwen3-vl-plus and qwen3-vl-flash series only)
        
    -   [Qwen-Omni](/help/en/model-studio/models#92d9861245f73) (qwen3-omni-flash series only)
        
    -   [Qwen3-VL](/help/en/model-studio/models#5587bad74fn1g)
        

## DeepSeek

-   deepseek-v3.2
    
-   deepseek-v3.2-exp (non-thinking mode)
    
-   deepseek-v3.1 (non-thinking mode)
    
-   deepseek-r1
    
-   deepseek-r1-0528
    
-   deepseek-v3
    

## GLM

-   glm-4.7
    
-   glm-4.6
    

## Kimi

-   kimi-k2.5
    
-   kimi-k2-thinking
    
-   Moonshot-Kimi-K2-Instruct
    

## **Getting started**

You must [get an API key](/help/en/model-studio/get-api-key) and [set the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). If you call the model using the OpenAI SDK or DashScope SDK, you must [install the SDK](/help/en/model-studio/install-sdk#210ee28162bs7).

This section uses a weather query scenario as an example to show you how to get started with function calling.

## OpenAI compatible

Python

```
from openai import OpenAI
from datetime import datetime
import json
import os
import random

client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the China (Beijing) region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
)
# Simulate a user question.
USER_QUESTION = "What's the weather like in Singapore?"
# Define the tool list.
tools = [
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
                        "description": "A city or county, such as Singapore or New York.",
                    }
                },
                "required": ["location"],
            },
        },
    },
]


# Simulate a weather query tool.
def get_current_weather(arguments):
    weather_conditions = ["sunny", "cloudy", "rainy"]
    random_weather = random.choice(weather_conditions)
    location = arguments["location"]
    return f"{location} is {random_weather} today."


# Encapsulate the model response function.
def get_response(messages):
    completion = client.chat.completions.create(
        model="qwen-plus",
        messages=messages,
        tools=tools,
    )
    return completion


messages = [{"role": "user", "content": USER_QUESTION}]
response = get_response(messages)
assistant_output = response.choices[0].message
if assistant_output.content is None:
    assistant_output.content = ""
messages.append(assistant_output)
# If no tool is required, directly output the content.
if assistant_output.tool_calls is None:
    print(f"No weather query tool is required. Direct reply: {assistant_output.content}")
else:
    # Enter the tool calling loop.
    while assistant_output.tool_calls is not None:
        tool_call = assistant_output.tool_calls[0]
        tool_call_id = tool_call.id
        func_name = tool_call.function.name
        arguments = json.loads(tool_call.function.arguments)
        print(f"Calling tool [{func_name}], parameters: {arguments}")
        # Run the tool.
        tool_result = get_current_weather(arguments)
        # Construct the tool return message.
        tool_message = {
            "role": "tool",
            "tool_call_id": tool_call_id,
            "content": tool_result,  # Keep the original tool output.
        }
        print(f"Tool returned: {tool_message['content']}")
        messages.append(tool_message)
        # Call the model again to obtain a summarized reply in natural language.
        response = get_response(messages)
        assistant_output = response.choices[0].message
        if assistant_output.content is None:
            assistant_output.content = ""
        messages.append(assistant_output)
    print(f"Final assistant reply: {assistant_output.content}")
```

Node.js

```
import OpenAI from 'openai';  
  
// Initialize the client  
const openai = new OpenAI({  
  apiKey: process.env.DASHSCOPE_API_KEY,  
  // If you use a model in the Beijing region, replace baseURL with: https://dashscope.aliyuncs.com/compatible-mode/v1
  baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",  
});  
  
// Define the tool list  
const tools = [  
  {  
    type: "function",  
    function: {  
      name: "get_current_weather",  
      description: "Useful when you want to query the weather for a specified city.",  
      parameters: {  
        type: "object",  
        properties: {  
          location: {  
            type: "string",  
            description: "The city or county, such as Singapore or New York.",  
          },  
        },  
        required: ["location"],  
      },  
    },  
  },  
];  
  
// Simulate the weather query tool  
const getCurrentWeather = (args) => {  
  const weatherConditions = ["sunny", "cloudy", "rainy"];  
  const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];  
  const location = args.location;  
  return `${location} is ${randomWeather} today.`;  
};  
  
// Wrap the model response function  
const getResponse = async (messages) => {  
  const response = await openai.chat.completions.create({  
    model: "qwen-plus",  
    messages: messages,  
    tools: tools,  
  });  
  return response;  
};  

const main = async () => {  
  const input = "What's the weather like in Singapore?";

  let messages = [  
    {  
      role: "user",  
      content: input,  
    }  
  ];  
  let response = await getResponse(messages);  
  let assistantOutput = response.choices[0].message;  
  // Ensure that content is not null  
  if (!assistantOutput.content) assistantOutput.content = "";  
  messages.push(assistantOutput);  
  // Determine whether to call a tool  
  if (!assistantOutput.tool_calls) {  
    console.log(`No need to call the weather query tool. Direct reply: ${assistantOutput.content}`);  
  } else {  
    // Enter the tool-calling loop  
    while (assistantOutput.tool_calls) {  
      const toolCall = assistantOutput.tool_calls[0];  
      const toolCallId = toolCall.id;  
      const funcName = toolCall.function.name;  
      const funcArgs = JSON.parse(toolCall.function.arguments);  
      console.log(`Calling the tool [${funcName}] with arguments:`, funcArgs);  
      // Execute the tool  
      const toolResult = getCurrentWeather(funcArgs);  
      // Construct the tool response  
      const toolMessage = {  
        role: "tool",  
        tool_call_id: toolCallId,  
        content: toolResult,  
      };  
      console.log(`Tool response: ${toolMessage.content}`);  
      messages.push(toolMessage);  
      // Call the model again to obtain a natural language summary  
      response = await getResponse(messages);  
      assistantOutput = response.choices[0].message;  
      if (!assistantOutput.content) assistantOutput.content = "";  
      messages.push(assistantOutput);  
    }  
    console.log(`Final assistant response: ${assistantOutput.content}`);  
  }  
};  
  
// Start the program  
main().catch(console.error);
```

## DashScope

Python

```
import os
from dashscope import Generation
import dashscope
import json
import random

# If you use a model in the China (Beijing) region, replace the base_http_api_url with https://dashscope.aliyuncs.com/api/v1.
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

# 1. Define the tool list.
tools = [
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
                        "description": "A city or county, such as Singapore or New York.",
                    }
                },
                "required": ["location"],
            },
        },
    }
]

# 2. Simulate a weather query tool.
def get_current_weather(arguments):
    weather_conditions = ["sunny", "cloudy", "rainy"]
    random_weather = random.choice(weather_conditions)
    location = arguments["location"]
    return f"{location} is {random_weather} today."

# 3. Encapsulate the model response function.
def get_response(messages):
    response = Generation.call(
        # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
        # If you have not configured the environment variable, replace the following line with api_key="sk-xxx".
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        model="qwen-plus",
        messages=messages,
        tools=tools,
        result_format="message",
    )
    return response

# 4. Initialize the conversation history.
messages = [
    {
        "role": "user",
        "content": "What's the weather like in Singapore?"
    }
]

# 5. Make the first model call.
response = get_response(messages)
assistant_output = response.output.choices[0].message
messages.append(assistant_output)

# 6. Determine whether to call a tool.
if "tool_calls" not in assistant_output or not assistant_output["tool_calls"]:
    print(f"No tool is required. Direct reply: {assistant_output['content']}")
else:
    # 7. Enter the tool calling loop.
    # Loop condition: As long as the latest model reply contains a tool call request.
    while "tool_calls" in assistant_output and assistant_output["tool_calls"]:
        tool_call = assistant_output["tool_calls"][0]
        # Parse the tool calling information.
        func_name = tool_call["function"]["name"]
        arguments = json.loads(tool_call["function"]["arguments"])
        tool_call_id = tool_call.get("id")  # Obtain the tool_call_id.
        print(f"Calling tool [{func_name}], parameters: {arguments}")
        # Run the corresponding tool function.
        tool_result = get_current_weather(arguments)
        # Construct the tool return message.
        tool_message = {
            "role": "tool",
            "content": tool_result,
            "tool_call_id": tool_call_id
        }
        print(f"Tool returned: {tool_message['content']}")
        messages.append(tool_message)
        # Call the model again to allow the model to reply based on the tool result.
        response = get_response(messages)
        assistant_output = response.output.choices[0].message
        messages.append(assistant_output)
    # 8. Output the final reply in natural language.
    print(f"Final assistant reply: {assistant_output['content']}")
```

Java

```
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.protocol.Protocol;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.tools.FunctionDefinition;
import com.alibaba.dashscope.tools.ToolCallBase;
import com.alibaba.dashscope.tools.ToolCallFunction;
import com.alibaba.dashscope.tools.ToolFunction;
import com.alibaba.dashscope.utils.JsonUtils;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class Main {

    /**
     * Define the local implementation of the tool.
     * @param arguments A JSON string that contains the tool parameters passed by the model.
     * @return The string result after the tool is run.
     */
    public static String getCurrentWeather(String arguments) {
        try {
            // The parameters provided by the model are in JSON format and need to be manually parsed.
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode argsNode = objectMapper.readTree(arguments);
            String location = argsNode.get("location").asText();

            // Use a random result to simulate a real API call or business logic.
            List<String> weatherConditions = Arrays.asList("sunny", "cloudy", "rainy");
            String randomWeather = weatherConditions.get(new Random().nextInt(weatherConditions.size()));

            return location + " is " + randomWeather + " today.";
        } catch (Exception e) {
            // Handle exceptions to ensure program robustness.
            return "Failed to parse the location parameter.";
        }
    }

    public static void main(String[] args) {
        try {
            // Describe (register) our tool to the model.
            String weatherParamsSchema =
                    "{\"type\":\"object\",\"properties\":{\"location\":{\"type\":\"string\",\"description\":\"A city or county, such as Singapore or New York.\"}},\"required\":[\"location\"]}";

            FunctionDefinition weatherFunction = FunctionDefinition.builder()
                    .name("get_current_weather") // The unique identifier of the tool, which must correspond to the local implementation.
                    .description("Useful when you want to query the weather for a specified city.") // A clear description helps the model better decide when to use the tool.
                    .parameters(JsonUtils.parseString(weatherParamsSchema).getAsJsonObject())
                    .build();
            // If you use a model in the China (Beijing) region, replace the url with https://dashscope.aliyuncs.com/api/v1.        
            Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
            String userInput = "What's the weather like in Singapore?";

            List<Message> messages = new ArrayList<>();
            messages.add(Message.builder().role(Role.USER.getValue()).content(userInput).build());

            // Make the first model call. Send the user request and the defined tool list to the model.
            GenerationParam param = GenerationParam.builder()
                    .model("qwen-plus") // Specify the model to be called.
                    .apiKey(System.getenv("DASHSCOPE_API_KEY")) // Obtain the API key from the environment variable. API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
                    .messages(messages) // Pass the current conversation history.
                    .tools(Arrays.asList(ToolFunction.builder().function(weatherFunction).build())) // Pass the list of available tools.
                    .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                    .build();

            GenerationResult result = gen.call(param);
            Message assistantOutput = result.getOutput().getChoices().get(0).getMessage();
            messages.add(assistantOutput); // Add the first reply of the model to the conversation history.

            // Check the model's reply to determine whether it requests a tool call.
            if (assistantOutput.getToolCalls() == null || assistantOutput.getToolCalls().isEmpty()) {
                // Case A: The model does not call a tool, but provides a direct answer.
                System.out.println("No weather query tool is required. Direct reply: " + assistantOutput.getContent());
            } else {
                // Case B: The model decides to call a tool.
                // Use a while loop to handle scenarios where the model continuously calls tools multiple times.
                while (assistantOutput.getToolCalls() != null && !assistantOutput.getToolCalls().isEmpty()) {
                    ToolCallBase toolCall = assistantOutput.getToolCalls().get(0);

                    // Parse the specific information of the tool call (the name of the function to be called and parameters) from the model's reply.
                    ToolCallFunction functionCall = (ToolCallFunction) toolCall;
                    String funcName = functionCall.getFunction().getName();
                    String arguments = functionCall.getFunction().getArguments();
                    System.out.println("Calling tool [" + funcName + "], parameters: " + arguments);

                    // Run the corresponding Java method locally based on the tool name.
                    String toolResult = getCurrentWeather(arguments);

                    // Construct a message with the role "tool", which contains the execution result of the tool.
                    Message toolMessage = Message.builder()
                            .role("tool")
                            .toolCallId(toolCall.getId())
                            .content(toolResult)
                            .build();
                    System.out.println("Tool returned: " + toolMessage.getContent());
                    messages.add(toolMessage); // Add the return result of the tool to the conversation history.

                    // Call the model again.
                    param.setMessages(messages);
                    result = gen.call(param);
                    assistantOutput = result.getOutput().getChoices().get(0).getMessage();
                    messages.add(assistantOutput);
                }

                // Print the final reply generated by the model after summarization.
                System.out.println("Final assistant reply: " + assistantOutput.getContent());
            }

        } catch (NoApiKeyException | InputRequiredException e) {
            System.err.println("Error: " + e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

The following output is returned:

```
Calling tool [get_current_weather], parameters: {'location': 'Singapore'}
Tool returned: Singapore is cloudy today.
Final assistant reply: The weather in Singapore is cloudy today.
```

## **Usage**

Function calling supports two ways to pass tool information:

-   Method 1: Pass information using the tools parameter (recommended)
    
    See [Usage](#038e24005c1vt). call the model by following these steps: **Define tools**, **Create the messages array**, **Initiate function calling**, **Run tool functions**, and **Use the LLM to summarize tool function outputs**.
    
-   Method 2: Pass information using a System Message
    
    When you pass information using the \`tools\` parameter, the server-side automatically adapts and assembles a suitable prompt template based on the model. Therefore, we recommend that you use the \`tools\` parameter. If you do not want to use the \`tools\` parameter when you use a Qwen model, see [Pass tool information using a System Message](#afa52dfc56tqq).
    

The following content uses the OpenAI-compatible calling method as an example. It passes tool information using the \`tools\` parameter to provide a step-by-step guide on how to use function calling.

Assume a scenario that involves two types of questions: weather queries and time queries.

### **1\. Define tools**

Tools are the bridge between LLMs and the external world. First, you need to define the tools.

#### **1.1. Create tool functions**

You can create two tool functions: a weather query tool and a time query tool.

-   **Weather query tool**
    
    This tool receives the `arguments` parameter. The format of `arguments` is `{"location": "query location"}`. The tool's output is a string in the format: `"{location} is {weather} today"`.
    
    > For demonstration purposes, the weather query tool defined here does not query the weather. It randomly selects from sunny, cloudy, or rainy. In a real-world application, you can replace it with tools such as [Amap Weather Query](https://lbs.amap.com/api/webservice/guide/api/weatherinfo).
    
-   **Time query tool**
    
    The time query tool does not require input parameters. The tool's output is a string in the format: `"Current time: {queried time}."`.
    
    > If you are using Node.js, you can run `npm install date-fns` to install the date-fns tool package to get the time.
    

Python

```
## Step 1: Define tool functions

# Add the import for the random module
import random
from datetime import datetime

# Simulate a weather query tool. Example return: "Beijing is rainy today."
def get_current_weather(arguments):
    # Define a list of alternative weather conditions
    weather_conditions = ["sunny", "cloudy", "rainy"]
    # Randomly select a weather condition
    random_weather = random.choice(weather_conditions)
    # Extract location information from JSON
    location = arguments["location"]
    # Return formatted weather information
    return f"{location} is {random_weather} today."

# A tool to query the current time. Example return: "Current time: 2024-04-15 17:15:18."
def get_current_time():
    # Get the current date and time
    current_datetime = datetime.now()
    # Format the current date and time
    formatted_time = current_datetime.strftime('%Y-%m-%d %H:%M:%S')
    # Return the formatted current time
    return f"Current time: {formatted_time}."

# Test the tool functions and output the results. You can remove the following four lines of test code when running subsequent steps.
print("Testing tool output:")
print(get_current_weather({"location": "Shanghai"}))
print(get_current_time())
print("\n")
```

Node.js

```
// Step 1: Define tool functions

// Import the time query tool
import { format } from 'date-fns';

function getCurrentWeather(args) {
    // Define a list of alternative weather conditions
    const weatherConditions = ["sunny", "cloudy", "rainy"];
    // Randomly select a weather condition
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    // Extract location information from JSON
    const location = args.location;
    // Return formatted weather information
    return `${location} is ${randomWeather} today.`;
}

function getCurrentTime() {
    // Get the current date and time
    const currentDatetime = new Date();
    // Format the current date and time
    const formattedTime = format(currentDatetime, 'yyyy-MM-dd HH:mm:ss');
    // Return the formatted current time
    return `Current time: ${formattedTime}.`;
}

// Test the tool functions and output the results. You can remove the following four lines of test code when running subsequent steps.
console.log("Testing tool output:")
console.log(getCurrentWeather({location:"Shanghai"}));
console.log(getCurrentTime());
console.log("\n")
```

After you run the tool, the following output is returned:

```
Testing tool output:
Shanghai is cloudy today.
Current time: 2025-01-08 20:21:45.
```

#### **1.2 Create the tools array**

Before humans select a tool, they need a comprehensive understanding of it, including its function, when to use it, and its input parameters. LLMs also need this information to select tools more accurately. You must provide this information to the LLM in the following JSON format.

-   The `type` field must be `"function"`.
    
-   The `function` field is an object.
    
    -   The `name` field is a custom tool function name. We recommend that you use the same name as the function, such as `get_current_weather` or `get_current_time`.
        
    -   The `description` field describes the function of the tool. The LLM refers to this field to decide whether to use the tool function.
        
    -   The `parameters` field, which is an object, describes the input parameters of the tool function. The LLM uses this field to extract input parameters. If the tool function does not require input parameters, you can omit the `parameters` field.
        
        -   The `type` field must be `"object"`.
            
        -   The `properties` field is an object that describes the name, data type, and description of each input parameter. The key is the parameter name, and the value is an object containing the parameter's data type and description.
            
        -   The `required` field is an array that specifies which parameters are required.
            

For the weather query tool, the format of the tool description information is as follows:

```
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
                    "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                }
            },
            "required": ["location"]
        }
    }
}
```

Before you initiate function calling, you must define an array of tools in your code. This array includes the function name, description, and parameter definitions for each tool and is passed as a parameter in subsequent requests.

Python

```
# Paste the following code after the code in Step 1.

## Step 2: Create the tools array

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
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District.",
                    }
                },
                "required": ["location"]
            }
        }
    }
]
tool_name = [tool["function"]["name"] for tool in tools]
print(f"Created {len(tools)} tools: {tool_name}\n")
```

Node.js

```
// Paste the following code after the code in Step 1.

// Step 2: Create the tools array

const tools = [
    {
      type: "function",
      function: {
        name: "get_current_time",
        description: "Useful when you want to know the current time.",
        parameters: {}
      }
    },
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Useful when you want to query the weather for a specified city.",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "A city or district, such as Beijing, Hangzhou, or Yuhang District.",
            }
          },
          required: ["location"]
        }
      }
    }
  ];
  
const toolNames = tools.map(tool => tool.function.name);
console.log(`Created ${tools.length} tools: ${toolNames.join(', ')}\n`);
```

### **2\. Create the messages array**

Function calling uses the \`messages\` array to pass instructions and context to the LLM. Before you initiate function calling, the \`messages\` array must include a System Message and a User Message.

#### **System Message**

Although the function and usage of the tools have been described in [Create the tools array](#b7c8a0e72a9d0), emphasizing when to call the tools in the System Message usually improves the accuracy of tool calls. In this scenario, you can set the System Prompt to:

```
You are a helpful assistant. If the user asks about the weather, call the 'get_current_weather' function;
If the user asks about the time, call the 'get_current_time' function.
Please answer in a friendly tone.
```

#### **User Message**

The User Message passes the user's question to the model. For example, if the user asks "Shanghai weather", the \`messages\` array is as follows:

Python

```
# Step 3: Create the messages array
# Paste the following code after the code in Step 2.
# User Message example for text generation models
messages = [
    {
        "role": "system",
        "content": """You are a helpful assistant. If the user asks about the weather, call the 'get_current_weather' function;
     If the user asks about the time, call the 'get_current_time' function.
     Please answer in a friendly tone.""",
    },
    {
        "role": "user",
        "content": "Shanghai weather"
    }
]

# User Message example for multimodal models
# messages=[
#  {
#         "role": "system",
#         "content": """You are a helpful assistant. If the user asks about the weather, call the 'get_current_weather' function;
#      If the user asks about the time, call the 'get_current_time' function.
#      Please answer in a friendly tone.""",
#     },
#     {"role": "user",
#      "content": [{"type": "image_url","image_url": {"url": "https://img.alicdn.com/imgextra/i2/O1CN01FbTJon1ErXVGMRdsN_!!6000000000405-0-tps-1024-683.jpg"}},
#                  {"type": "text", "text": "Based on the location in the image, query the current weather for that location"}]},
# ]

print("messages array created\n") 
```

Node.js

```
// Step 3: Create the messages array
// Paste the following code after the code in Step 2.
const messages = [
    {
        role: "system",
        content: "You are a helpful assistant. If the user asks about the weather, call the 'get_current_weather' function; If the user asks about the time, call the 'get_current_time' function. Please answer in a friendly tone.",
    },
    {
        role: "user",
        content: "Shanghai weather"
    }
];
// User Message example for multimodal models,
// const messages: [{
//     role: "user",
//     content: [{type: "image_url", image_url: {"url": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241022/emyrja/dog_and_girl.jpeg"}},
//               {type: "text", text: "What scene is depicted in the image?"}]
//   }];

console.log("messages array created\n");
```

> Because the available tools include weather and time queries, you can also ask about the current time.

### **3\. Initiate function calling**

Pass the created `tools` and `messages` to the LLM to initiate a function call. The LLM will then determine whether to call a tool. If a tool is called, the LLM returns its function name and parameters.

> For more information about supported models, see [Supported models](#c8feada2328us).

Python

```
# Step 4: Initiate function calling
# Paste the following code after the code in Step 3.
from openai import OpenAI
import os

client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the China (Beijing) region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

def function_calling():
    completion = client.chat.completions.create(
        # This example uses qwen-plus. You can replace it with another model name as needed. For a list of models, see https://www.alibabacloud.com/help/document_detail/2751232.html
        model="qwen-plus",
        messages=messages,
        tools=tools
    )
    print("Returned object:")
    print(completion.choices[0].message.model_dump_json())
    print("\n")
    return completion

print("Initiating function calling...")
completion = function_calling()
```

Node.js

```
// Step 4: Initiate function calling
// Paste the following code after the code in Step 3.
import OpenAI from "openai";
const openai = new OpenAI(
    {
        // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
        // If you have not configured the environment variable, replace the following line with your Model Studio API key: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // If you use a model in the China (Beijing) region, replace the baseURL with https://dashscope.aliyuncs.com/compatible-mode/v1.
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);

async function functionCalling() {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",  // This example uses qwen-plus. You can replace it with another model name as needed. For a list of models, see https://www.alibabacloud.com/help/document_detail/2751232.html
        messages: messages,
        tools: tools
    });
    console.log("Returned object:");
    console.log(JSON.stringify(completion.choices[0].message));
    console.log("\n");
    return completion;
}

const completion = await functionCalling();
```

Because the user asked about the weather in Shanghai, the LLM specifies `"get_current_weather"` as the tool function and `"{\"location\": \"Shanghai\"}"` as the input parameter.

```
{
    "content": "",
    "refusal": null,
    "role": "assistant",
    "audio": null,
    "function_call": null,
    "tool_calls": [
        {
            "id": "call_6596dafa2a6a46f7a217da",
            "function": {
                "arguments": "{\"location\": \"Shanghai\"}",
                "name": "get_current_weather"
            },
            "type": "function",
            "index": 0
        }
    ]
}
```

Note that if the LLM determines that a tool is not required, it replies directly using the `content` parameter. For example, if you input "Hello", the `tool_calls` parameter is empty, and the returned object has the following format:

```
{
    "content": "Hello! How can I help you? If you have questions about weather or time, I'm particularly good at answering them.",
    "refusal": null,
    "role": "assistant",
    "audio": null,
    "function_call": null,
    "tool_calls": null
}
```

> If the `tool_calls` parameter is empty, your program can return the `content` directly and skip the following steps.

> If you want the LLM to select a specified tool for every function call, see [Forced tool calling](#b0910669927j7).

### **4\. Run tool functions**

Running the tool function is the key step that turns the LLM's decision into an actual operation.

> Your computing environment, not the LLM, runs the tool function.

Because the LLM can only output content as a string, you need to parse the tool function name and input parameters from the string response before you can run the tool function.

-   Tool function
    
    Create a mapping `function_mapper` from a **tool function name** to a **tool function entity** to resolve a returned tool function string to its corresponding entity.
    
-   Input parameters
    
    The input parameters are returned as a JSON string. You must parse this string into a JSON object to extract the parameter information.
    

After parsing is complete, pass the parameters to the tool function and execute it to get the output.

Python

```
# Step 5: Run the tool function
# Paste the following code after the code in Step 4.
import json

print("Running the tool function...")
# Get the function name and input parameters from the returned result
function_name = completion.choices[0].message.tool_calls[0].function.name
arguments_string = completion.choices[0].message.tool_calls[0].function.arguments

# Use the json module to parse the parameter string
arguments = json.loads(arguments_string)
# Create a function mapping table
function_mapper = {
    "get_current_weather": get_current_weather,
    "get_current_time": get_current_time
}
# Get the function entity
function = function_mapper[function_name]
# If the input parameter is empty, call the function directly
if arguments == {}:
    function_output = function()
# Otherwise, call the function with the input parameter
else:
    function_output = function(arguments)
# Print the tool's output
print(f"Tool function output: {function_output}\n")
```

Node.js

```
// Step 5: Run the tool function
// Paste the following code after the code in Step 4.

console.log("Running the tool function...");
const function_name = completion.choices[0].message.tool_calls[0].function.name;
const arguments_string = completion.choices[0].message.tool_calls[0].function.arguments;

// Use the JSON module to parse the parameter string
const args = JSON.parse(arguments_string);

// Create a function mapping table
const functionMapper = {
    "get_current_weather": getCurrentWeather,
    "get_current_time": getCurrentTime
};

// Get the function entity
const func = functionMapper[function_name];

// If the input parameter is empty, call the function directly
let functionOutput;
if (Object.keys(args).length === 0) {
    functionOutput = func();
} else {
    // Otherwise, call the function with the input parameter
    functionOutput = func(args);
}

// Print the tool's output
console.log(`Tool function output: ${functionOutput}\n`);
```

The following output is returned:

```
Shanghai is cloudy today.
```

**Note**

In real-world applications, the core function of many tools is to perform specific operations, such as sending emails or uploading files, rather than querying data. These tools might not output a string after execution. To help the LLM understand the tool's execution status, we recommend that you design such tools to return status information, such as "Email sent" or "Operation failed".

### **5\. Have the LLM summarize tool function outputs**

The output from a tool function is often structured and not conversational. To generate a natural language response, send the tool's output back to the model along with the previous context. The model will then synthesize the information to create a user-friendly reply.

1.  Add Assistant Message
    
    After you [initiate function calling](#9f478b2e76wrk), you can retrieve the Assistant Message from `completion.choices[0].message` and add it to the \`messages\` array.
    
2.  Add Tool Message
    
    add the tool's output to the \`messages\` array using the format `{"role": "tool", "content": "tool's output","tool_call_id": completion.choices[0].message.tool_calls[0].id}`.
    
    **Note**
    
    -   Ensure that the tool's output is a string.
        
    -   `tool_call_id` is a **unique identifier** that the system generates for each tool call request. The model might request to call multiple tools at once. When you return multiple tool results to the model, `tool_call_id` ensures that each tool's output is matched with its corresponding request.
        
    

Python

```
# Step 6: Submit the tool output to the LLM
# Paste the following code after the code in Step 5.

messages.append(completion.choices[0].message)
print("Added assistant message")
messages.append({"role": "tool", "content": function_output, "tool_call_id": completion.choices[0].message.tool_calls[0].id})
print("Added tool message\n")
```

Node.js

```
// Step 6: Submit the tool output to the LLM
// Paste the following code after the code in Step 5.

messages.push(completion.choices[0].message);
console.log("Added assistant message")
messages.push({
    "role": "tool",
    "content": functionOutput,
    "tool_call_id": completion.choices[0].message.tool_calls[0].id
});
console.log("Added tool message\n");
```

The \`messages\` array is now:

```
[
  System Message -- Guides the model's tool calling strategy
  User Message -- The user's question
  Assistant Message -- Tool call information returned by the model
  Tool Message -- The tool's output information (if using parallel tool calling as described below, there may be multiple Tool Messages)
]
```

After you update the \`messages\` array, run the following code.

Python

```
# Step 7: Have the LLM summarize the tool output
# Paste the following code after the code in Step 6.
print("Summarizing tool output...")
completion = function_calling()
```

Node.js

```
// Step 7: Have the LLM summarize the tool output
// Paste the following code after the code in Step 6.

console.log("Summarizing tool output...");
const completion_1 = await functionCalling();
```

You can retrieve the final reply from the `content` field: "The weather in Shanghai today is cloudy. If you have any other questions, feel free to ask."

```
{
    "content": "The weather in Shanghai today is cloudy. If you have any other questions, feel free to ask.",
    "refusal": null,
    "role": "assistant",
    "audio": null,
    "function_call": null,
    "tool_calls": null
}
```

This completes the function calling process.

## **Advanced usage**

### **Specify tool calling behavior**

#### **Parallel tool calling**

A weather query for a single city requires only one tool call. However, if a question requires multiple tool calls, such as "What is the weather like in Beijing and Shanghai?" or "What is the weather in Hangzhou, and what time is it now?", the model might return only one tool call after you [initiate function calling](#9f478b2e76wrk). For example, for the question "What is the weather like in Beijing and Shanghai?", the model might return the following:

```
{
    "content": "",
    "refusal": null,
    "role": "assistant",
    "audio": null,
    "function_call": null,
    "tool_calls": [
        {
            "id": "call_61a2bbd82a8042289f1ff2",
            "function": {
                "arguments": "{\"location\": \"Beijing\"}",
                "name": "get_current_weather"
            },
            "type": "function",
            "index": 0
        }
    ]
}
```

The result contains information for Beijing only. To resolve this, you can set the `parallel_tool_calls` request parameter to `true` when you [initiate function calling](#9f478b2e76wrk). The returned object will then contain all the required tool functions and their input parameters.

**Note**

Parallel tool calling is suitable for tasks that are independent of each other. If tasks are dependent, for example, the input of tool A depends on the output of tool B, you must implement serial tool calling. See [Getting started](#dd5a3dca390k9) and implement serial tool calling using a \`while\` loop.

Python

```
def function_calling():
    completion = client.chat.completions.create(
        model="qwen-plus",  # This example uses qwen-plus. You can replace it with another model name as needed.
        messages=messages,
        tools=tools,
        # New parameter
        parallel_tool_calls=True
    )
    print("Returned object:")
    print(completion.choices[0].message.model_dump_json())
    print("\n")
    return completion

print("Initiating function calling...")
completion = function_calling()
```

Node.js

```
async function functionCalling() {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",  // This example uses qwen-plus. You can replace it with another model name as needed.
        messages: messages,
        tools: tools,
        parallel_tool_calls: true
    });
    console.log("Returned object:");
    console.log(JSON.stringify(completion.choices[0].message));
    console.log("\n");
    return completion;
}

const completion = await functionCalling();
```

The `tool_calls` array in the returned object now contains the input parameters for both Beijing and Shanghai:

```
{
    "content": "",
    "role": "assistant",
    "tool_calls": [
        {
            "function": {
                "name": "get_current_weather",
                "arguments": "{\"location\": \"Beijing\"}"
            },
            "index": 0,
            "id": "call_c2d8a3a24c4d4929b26ae2",
            "type": "function"
        },
        {
            "function": {
                "name": "get_current_weather",
                "arguments": "{\"location\": \"Shanghai\"}"
            },
            "index": 1,
            "id": "call_dc7f2f678f1944da9194cd",
            "type": "function"
        }
    ]
}
```

#### **Forced tool calling**

The content that LLMs generate is non-deterministic, and they might sometimes choose the wrong tool. If you want the LLM to use a specific strategy for a certain type of question, such as forcing it to use a specific tool or no tool at all, you can set the `tool_choice` parameter. The default value of `tool_choice` is `"auto"`, which allows the LLM to decide whether to call a tool and which tool to call.

> When you ask the LLM to summarize the tool function output, remove the `tool_choice` parameter. Otherwise, the API will return tool call information again.

-   **Force the use of a specific tool**
    
    If you want to force the model to call a specific tool for a certain type of question, you can set the `tool_choice` parameter to `{"type": "function", "function": {"name": "the_function_to_call"}}`. The LLM will not select a tool and will only output the input parameters for the specified function.
    
    For example, if the current scenario involves only weather queries, you can modify the function calling code as follows:
    
    Python
    
    ```
    def function_calling():
        completion = client.chat.completions.create(
            model="qwen-plus",
            messages=messages,
            tools=tools,
            tool_choice={"type": "function", "function": {"name": "get_current_weather"}}
        )
        print(completion.model_dump_json())
    
    function_calling()
    ```
    
    Node.js
    
    ```
    async function functionCalling() {
        const response = await openai.chat.completions.create({
            model: "qwen-plus",
            messages: messages,
            tools: tools,
            tool_choice: {"type": "function", "function": {"name": "get_current_weather"}}
        });
        console.log("Returned object:");
        console.log(JSON.stringify(response.choices[0].message));
        console.log("\n");
        return response;
    }
    
    const response = await functionCalling();
    ```
    
    No matter what question is input, the tool function in the returned object will always be `get_current_weather`.
    
    > Before you use this strategy, ensure that the user's question is related to the selected tool. Otherwise, the model might return unexpected results.
    
-   **Force no tool to be used**
    
    If you want function calling to never perform a tool call for any input question—that is, the returned object contains reply content in the `content` field and the `tool_calls` parameter is empty—you can set the `tool_choice` parameter to `"none"` or omit the `tools` parameter. In this case, the `tool_calls` parameter returned by function calling is always empty.
    
    For example, if no questions in the current scenario require tool calls, you can modify the function calling code as follows:
    
    Python
    
    ```
    def function_calling():
        completion = client.chat.completions.create(
            model="qwen-plus",
            messages=messages,
            tools=tools,
            tool_choice="none"
        )
        print(completion.model_dump_json())
    
    function_calling()
    ```
    
    Node.js
    
    ```
    async function functionCalling() {
        const completion = await openai.chat.completions.create({
            model: "qwen-plus",
            messages: messages,
            tools: tools,
            tool_choice: "none"
        });
        console.log("Returned object:");
        console.log(JSON.stringify(completion.choices[0].message));
        console.log("\n");
        return completion;
    }
    
    const completion = await functionCalling();
    ```
    

### **Multi-turn conversations**

A user might ask, "What's the weather in Beijing?" and then follow up with, "What about Shanghai?" If the model's context does not include the first question, it cannot determine which tool to call for the second question. For multi-turn conversations, we recommend that you maintain the \`messages\` array throughout the conversation. add the new User Message to the existing array before you [initiate function calling](#9f478b2e76wrk) and perform the subsequent steps. The \`messages\` structure is as follows:

```
[
  System Message -- Guides the model's tool calling strategy
  User Message -- The user's question
  Assistant Message -- Tool call information returned by the model
  Tool Message -- The tool's output information
  Assistant Message -- The model's summary of the tool call information
  User Message -- The user's second-round question
]
```

### **Streaming output**

To improve the user experience and reduce waiting time, use streaming output to retrieve the tool function name and input parameters in real time. In this case:

-   Tool call parameters are returned in chunks as a data stream.
    
-   The tool function name is returned in the first data block of the streaming response.
    

Python

```
from openai import OpenAI
import os

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the China (Beijing) region, replace it with https://dashscope.aliyuncs.com/compatible-mode/v1.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
tools = [
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
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District.",
                    }
                },
                "required": ["location"],
            },
        },
    },
]

stream = client.chat.completions.create(
    model="qwen-plus",
    messages=[{"role": "user", "content": "Hangzhou weather?"}],
    tools=tools,
    stream=True
)

for chunk in stream:
    delta = chunk.choices[0].delta
    print(delta.tool_calls)
```

Node.js

```
import { OpenAI } from "openai";

const openai = new OpenAI(
    {
        // API keys vary by region. Obtain an API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
        // If you have not configured an environment variable, replace the following line with your Model Studio API key: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // If you use a model in the Beijing region, replace the baseURL with: https://dashscope.aliyuncs.com/compatible-mode/v1
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
);
const tools = [
    {
        "type": "function",
        "function": {
            "name": "getCurrentWeather",
            "description": "This function is useful when you want to query the weather for a specified city.",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city or county-level district, such as Beijing, Hangzhou, or Yuhang District."
                    }
                },
                "required": ["location"]
            }
        }
    }
];

const stream = await openai.chat.completions.create({
    model: "qwen-plus",
    messages: [{ role: "user", content: "Beijing weather" }],
    tools: tools,
    stream: true,
});

for await (const chunk of stream) {
    const delta = chunk.choices[0].delta;
    console.log(delta.tool_calls);
}
```

The following output is returned:

```
[ChoiceDeltaToolCall(index=0, id='call_8f08d2b0fc0c4d8fab7123', function=ChoiceDeltaToolCallFunction(arguments='{"location":', name='get_current_weather'), type='function')]
[ChoiceDeltaToolCall(index=0, id='', function=ChoiceDeltaToolCallFunction(arguments=' "Hangzhou"}', name=None), type='function')]
None
```

You can run the following code to assemble the input parameters (`arguments`):

Python

```
tool_calls = {}
for response_chunk in stream:
    delta_tool_calls = response_chunk.choices[0].delta.tool_calls
    if delta_tool_calls:
        for tool_call_chunk in delta_tool_calls:
            call_index = tool_call_chunk.index
            tool_call_chunk.function.arguments = tool_call_chunk.function.arguments or ""
            if call_index not in tool_calls:
                tool_calls[call_index] = tool_call_chunk
            else:
                tool_calls[call_index].function.arguments += tool_call_chunk.function.arguments
print(tool_calls[0].model_dump_json())
```

Node.js

```
const toolCalls = {};
for await (const responseChunk of stream) {
  const deltaToolCalls = responseChunk.choices[0]?.delta?.tool_calls;
  if (deltaToolCalls) {
    for (const toolCallChunk of deltaToolCalls) {
      const index = toolCallChunk.index;
      toolCallChunk.function.arguments = toolCallChunk.function.arguments || "";
      if (!toolCalls[index]) {
        toolCalls[index] = { ...toolCallChunk };
        if (!toolCalls[index].function) {
            toolCalls[index].function = { name: '', arguments: '' };
        }
      } 
      else if (toolCallChunk.function?.arguments) {
        toolCalls[index].function.arguments += toolCallChunk.function.arguments;
      }
    }
  }
}
console.log(JSON.stringify(toolCalls[0]));
```

The following output is returned:

```
{"index":0,"id":"call_16c72bef988a4c6c8cc662","function":{"arguments":"{\"location\": \"Hangzhou\"}","name":"get_current_weather"},"type":"function"}
```

In the step where the LLM summarizes the tool function output, the Assistant Message that you add must conform to the following format. You only need to replace the elements in `tool_calls` with the content from the previous step.

```
{
    "content": "",
    "refusal": None,
    "role": "assistant",
    "audio": None,
    "function_call": None,
    "tool_calls": [
        {
            "id": "call_xxx",
            "function": {
                "arguments": '{"location": "xx"}',
                "name": "get_current_weather",
            },
            "type": "function",
            "index": 0,
        }
    ],
}
```

### **With the Responses API**

The preceding examples implement tool calling using the OpenAI Chat Completions and DashScope APIs. If you use the OpenAI Responses API, the overall process is the same, but the interface format has the following differences:

**Dimension**

**Chat Completions**

**Responses API**

base\_url

https://dashscope\-intl.aliyuncs.com/compatible-mode/v1

https://dashscope\-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1

Tool definition format

```
{
    "type": "function",
    "function": {
        "name":...,
        "parameters":...
    }
}
```

```
{
    "type": "function",
    "name":...,
    "parameters":...
}
```

Tool call output

response.choices\[0\].message.tool\_calls

Items in response.output where type is function\_call

Tool result feedback

```
{
    "role": "tool",
    "tool_call_id":...,
    "content":...
}
```

```
{
    "type": "function_call_output",
    "call_id":...,
    "output":...
}
```

Final response

response.choices\[0\].message.content

response.output\_text

Python

```
from openai import OpenAI
import json
import os
import random

# Initialize the client.
client = OpenAI(
    # If you have not configured the environment variable, replace the following line with your Alibaba Cloud Model Studio API key: api_key="sk-xxx",
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
)
# Simulate a user question.
USER_QUESTION = "What's the weather like in Singapore?"
# Define the tool list.
tools = [
    {
        "type": "function",
        "name": "get_current_weather",
        "description": "Useful when you want to query the weather for a specified city.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "A city or county, such as Singapore or London.",
                }
            },
            "required": ["location"],
        },
    }
]


# Simulate a weather query tool.
def get_current_weather(arguments):
    weather_conditions = ["sunny", "cloudy", "rainy"]
    random_weather = random.choice(weather_conditions)
    location = arguments["location"]
    return f"{location} is {random_weather} today."


# Encapsulate the model response function.
def get_response(input_data):
    response = client.responses.create(
        model="qwen3.5-plus",  # Options: qwen3.5-flash, qwen3.5-flash-2026-02-23
        input=input_data,
        tools=tools,
    )
    return response


# Maintain the conversation context.
conversation = [{"role": "user", "content": USER_QUESTION}]

response = get_response(conversation)
function_calls = [item for item in response.output if item.type == "function_call"]
# If no tool is required, directly output the content.
if not function_calls:
    print(f"Final assistant reply: {response.output_text}")
else:
    # Enter the tool calling loop.
    while function_calls:
        for fc in function_calls:
            func_name = fc.name
            arguments = json.loads(fc.arguments)
            print(f"Calling tool [{func_name}], parameters: {arguments}")
            # Run the tool.
            tool_result = get_current_weather(arguments)
            print(f"Tool returned: {tool_result}")
            # Append the tool call and result to the context in pairs.
            conversation.append(
                {
                    "type": "function_call",
                    "name": fc.name,
                    "arguments": fc.arguments,
                    "call_id": fc.call_id,
                }
            )
            conversation.append(
                {
                    "type": "function_call_output",
                    "call_id": fc.call_id,
                    "output": tool_result,
                }
            )
        # Call the model again with the full context.
        response = get_response(conversation)
        function_calls = [
            item for item in response.output if item.type == "function_call"
        ]
    print(f"Final assistant reply: {response.output_text}")
```

Node.js

```
import OpenAI from "openai";

// Initialize the client
const openai = new OpenAI({
  // API keys vary by region. Obtain your API key: https://www.alibabacloud.com/help/zh/model-studio/get-api-key
  // If you have not configured the environment variable, replace the following line with your Alibaba Cloud Model Studio API key: apiKey: "sk-xxx",
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseURL:
    "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
});

// Define the list of tools
const tools = [
  {
    type: "function",
    name: "get_current_weather",
    description: "Useful when you want to query the weather for a specified city.",
    parameters: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The city or county, such as Singapore or London.",
        },
      },
      required: ["location"],
    },
  },
];

// Simulate the weather query tool
const getCurrentWeather = (args) => {
  const weatherConditions = ["sunny", "cloudy", "rainy"];
  const randomWeather =
    weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  const location = args.location;
  return `${location} is ${randomWeather} today.`;
};

// Wrap the model response function
const getResponse = async (inputData) => {
  const response = await openai.responses.create({
    model: "qwen3.5-plus",  // Options: qwen3.5-flash, qwen3.5-flash-2026-02-23
    input: inputData,
    tools: tools,
  });
  return response;
};

const main = async () => {
  const userQuestion = "Singapore weather";

  // Maintain the conversation context
  const conversation = [{ role: "user", content: userQuestion }];

  let response = await getResponse(conversation);
  let functionCalls = response.output.filter(
    (item) => item.type === "function_call"
  );
  // If no tools need to be called, output the content directly
  if (functionCalls.length === 0) {
    console.log(`Final assistant response: ${response.output_text}`);
  } else {
    // Enter the tool-calling loop
    while (functionCalls.length > 0) {
      for (const fc of functionCalls) {
        const funcName = fc.name;
        const args = JSON.parse(fc.arguments);
        console.log(`Calling the tool [${funcName}], parameters:`, args);
        // Execute the tool
        const toolResult = getCurrentWeather(args);
        console.log(`Tool output: ${toolResult}`);
        // Append each tool call and its result to the conversation context as a pair
        conversation.push({
          type: "function_call",
          name: fc.name,
          arguments: fc.arguments,
          call_id: fc.call_id,
        });
        conversation.push({
          type: "function_call_output",
          call_id: fc.call_id,
          output: toolResult,
        });
      }
      // Call the model again with the complete conversation context
      response = await getResponse(conversation);
      functionCalls = response.output.filter(
        (item) => item.type === "function_call"
      );
    }
    console.log(`Final assistant response: ${response.output_text}`);
  }
};

// Run the program
main().catch(console.error);
```

### **For Qwen3-Omni-Flash**

In the **tool information retrieval phase**, the usage of `Qwen3-Omni-Flash` differs from other models in the following ways:

-   **Streaming output is required:** `Qwen3-Omni-Flash` supports only streaming output. When you retrieve tool information, you must set `stream=True`.
    
-   **Text-only output is recommended:** The model needs only text information to retrieve the function name and parameters. To avoid generating unnecessary audio, we recommend that you set `modalities=["text"]`. If the output includes both text and audio modalities, you must skip the audio data blocks when you retrieve tool information.
    

> For more information about Qwen3-Omni-Flash, see [Asynchronous (Qwen-Omni)](/help/en/model-studio/qwen-omni).

Python

```
from openai import OpenAI
import os

client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the China (Beijing) region, replace it with https://dashscope.aliyuncs.com/compatible-mode/v1.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)
tools = [
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
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District.",
                    }
                },
                "required": ["location"],
            },
        },
    },
]

completion = client.chat.completions.create(
    model="qwen3-omni-flash",
    messages=[{"role": "user", "content": "Hangzhou weather?"}],

    # Set the modality of the output data. Valid values: ["text"], ["text","audio"]. We recommend setting it to ["text"].
    modalities=["text"],

    # stream must be set to True, otherwise an error will be reported.
    stream=True,
    tools=tools
)

for chunk in completion:
    # If the output includes the audio modality, change the following condition to: if chunk.choices and not hasattr(chunk.choices[0].delta, "audio"): 
    if chunk.choices:
        delta = chunk.choices[0].delta
        print(delta.tool_calls)
```

Node.js

```
import { OpenAI } from "openai";

const openai = new OpenAI(
    {
        // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
        // If you have not configured the environment variable, replace the following line with your Model Studio API key: apiKey: "sk-xxx",
        apiKey: process.env.DASHSCOPE_API_KEY,
        // If you use a model in the China (Beijing) region, replace the baseURL with https://dashscope.aliyuncs.com/compatible-mode/v1.
        baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
    }
);
const tools = [
    {
        "type": "function",
        "function": {
            "name": "getCurrentWeather",
            "description": "Useful when you want to query the weather for a specified city.",
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

const stream = await openai.chat.completions.create({
    model: "qwen3-omni-flash",
    messages: [
        {
            "role": "user",
            "content": "Hangzhou weather"
        }],
    stream: true,
    // Set the modality of the output data. Valid values: ["text"], ["text","audio"]. We recommend setting it to ["text"].
    modalities: ["text"],
    tools:tools
});


for await (const chunk of stream) {
    // If the output includes audio, replace the conditional statement with: if (chunk.choices?.length && chunk.choices[0].delta && !('audio' in chunk.choices[0].delta)) 
    if (chunk.choices?.length){
    const delta = chunk.choices[0].delta;
    console.log(delta.tool_calls);
}}
```

The following output is returned.

```
[ChoiceDeltaToolCall(index=0, id='call_391c8e5787bc4972a388aa', function=ChoiceDeltaToolCallFunction(arguments=None, name='get_current_weather'), type='function')]
[ChoiceDeltaToolCall(index=0, id='call_391c8e5787bc4972a388aa', function=ChoiceDeltaToolCallFunction(arguments=' {"location": "Hangzhou"}', name=None), type='function')]
None
```

For the code that assembles the input parameter information (`arguments`, see [Streaming output](#ee24b4ca07c53).

### **For deep thinking models**

Deep thinking models reason before they output tool call information, which can improve the interpretability and reliability of their decisions.

1.  **Reasoning process**
    
    The model progressively analyzes the user's intent, identifies the required tools, verifies the validity of parameters, and plans the calling strategy.
    
2.  **Tool calling**
    
    The model outputs one or more function call requests in a structured format.
    
    > Parallel tool calling is supported.
    

The following example shows streaming tool calls for a deep thinking model.

> For text generation thinking models, see [Deep thinking](/help/en/model-studio/deep-thinking). For multimodal thinking models, see [Image and video understanding](/help/en/model-studio/vision) and [Asynchronous (Qwen-Omni)](/help/en/model-studio/qwen-omni).

> `tool_choice` parameter supports only `"auto"` (the default value, which allows the model to select tools) or `"none"` (which forces the model not to select tools).

## OpenAI compatible

## Python

### **Example code**

```
import os
from openai import OpenAI

# Initialize the OpenAI client and configure the Alibaba Cloud DashScope service.
client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    # If you have not configured the environment variable, replace the following line with your Alibaba Cloud Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),  # Read the API key from the environment variable.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# Define the list of available tools.
tools = [
    # Tool 1: Get the current time.
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            "parameters": {}  # No parameters required.
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
                    "location": {
                        "type": "string",
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                    }
                },
                "required": ["location"]  # Required parameter.
            }
        }
    }
]

messages = [{"role": "user", "content": input("Please enter your question: ")}]

# message example for multimodal models
# messages = [{
#     "role": "user",
#     "content": [
#              {"type": "image_url","image_url": {"url": "https://img.alicdn.com/imgextra/i4/O1CN014CJhzi20NOzo7atOC_!!6000000006837-2-tps-2048-1365.png"}},
#              {"type": "text", "text": "Based on the location in the image, what is the current weather at that location?"}]
#     }]

completion = client.chat.completions.create(
    # This example uses qwen-plus. You can replace it with other deep thinking models.
    model="qwen-plus",
    messages=messages,
    extra_body={
        # Enable deep thinking. This parameter is invalid for qwen3-30b-a3b-thinking-2507, qwen3-235b-a22b-thinking-2507, and QwQ models.
        "enable_thinking": True
    },
    tools=tools,
    parallel_tool_calls=True,
    stream=True,
    # Uncomment to get token consumption information.
    # stream_options={
    #     "include_usage": True
    # }
)

reasoning_content = ""  # Define the complete reasoning process.
answer_content = ""     # Define the complete reply.
tool_info = []          # Store tool call information.
is_answering = False   # Determine whether to end the reasoning process and start replying.
print("="*20+"Reasoning process"+"="*20)
for chunk in completion:
    if not chunk.choices:
        # Process usage statistics.
        print("\n"+"="*20+"Usage"+"="*20)
        print(chunk.usage)
    else:
        delta = chunk.choices[0].delta
        # Process the AI's reasoning process (chain of thought).
        if hasattr(delta, 'reasoning_content') and delta.reasoning_content is not None:
            reasoning_content += delta.reasoning_content
            print(delta.reasoning_content,end="",flush=True)  # Stream the reasoning process in real time.
            
        # Process the final reply content.
        else:
            if not is_answering:  # Print the title when first entering the reply phase.
                is_answering = True
                print("\n"+"="*20+"Reply content"+"="*20)
            if delta.content is not None:
                answer_content += delta.content
                print(delta.content,end="",flush=True)  # Stream the reply content.
            
            # Process tool call information (supports parallel tool calling).
            if delta.tool_calls is not None:
                for tool_call in delta.tool_calls:
                    index = tool_call.index  # Tool call index for parallel calls.
                    
                    # Dynamically expand the tool information storage list.
                    while len(tool_info) <= index:
                        tool_info.append({})
                    
                    # Collect the tool call ID (for subsequent function calls).
                    if tool_call.id:
                        tool_info[index]['id'] = tool_info[index].get('id', '') + tool_call.id
                    
                    # Collect the function name (for subsequent routing to a specific function).
                    if tool_call.function and tool_call.function.name:
                        tool_info[index]['name'] = tool_info[index].get('name', '') + tool_call.function.name
                    
                    # Collect function parameters (in JSON string format, requiring subsequent parsing).
                    if tool_call.function and tool_call.function.arguments:
                        tool_info[index]['arguments'] = tool_info[index].get('arguments', '') + tool_call.function.arguments
            
print(f"\n"+"="*19+"Tool call information"+"="*19)
if not tool_info:
    print("No tool calls")
else:
    print(tool_info)
```

### **Returned result**

If you enter "Weather in the four municipalities", the following result is returned:

```
====================Reasoning process====================
Okay, the user is asking for the weather in the four municipalities. First, I need to identify which four municipalities they are. According to China's administrative divisions, the municipalities include Beijing, Shanghai, Tianjin, and Chongqing. So the user wants to know the weather conditions in these four cities.

Next, I need to check the available tools. The provided tools include the get_current_weather function, with a 'location' parameter of type string. Each city needs to be queried separately because the function can only check one location at a time. Therefore, I need to call this function once for each municipality.

Then, I need to consider how to generate the correct tool calls. Each call should include the city name as a parameter. For example, the first call is for Beijing, the second for Shanghai, and so on. I need to ensure the parameter name is 'location' and the value is the correct city name.

Additionally, the user probably wants to get the weather information for each city, so I need to ensure that each function call is correct. It might be necessary to make four consecutive calls, one for each city. However, according to the tool usage rules, it might be necessary to handle them in multiple steps, or generate multiple calls at once. But based on the example, it seems only one function is called at a time, so I might need to proceed step by step.

Finally, I'll confirm if there are any other factors to consider, such as whether the parameters are correct, the city names are accurate, and whether I need to handle potential error situations, like a city not existing or the API being unavailable. But for now, the four municipalities are clear, so it should be fine.
====================Reply content====================

===================Tool call information===================
[{'id': 'call_767af2834c12488a8fe6e3', 'name': 'get_current_weather', 'arguments': '{"location": "Beijing"}'}, {'id': 'call_2cb05a349c89437a947ada', 'name': 'get_current_weather', 'arguments': '{"location": "Shanghai"}'}, {'id': 'call_988dd180b2ca4b0a864ea7', 'name': 'get_current_weather', 'arguments': '{"location": "Tianjin"}'}, {'id': 'call_4e98c57ea96a40dba26d12', 'name': 'get_current_weather', 'arguments': '{"location": "Chongqing"}'}]
```

## Node.js

### **Example code**

```
import OpenAI from "openai";
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const openai = new OpenAI({
    // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
});

const tools = [
    {
        type: "function",
        function: {
            name: "get_current_time",
            description: "Useful when you want to know the current time.",
            parameters: {}
        }
    },
    {
        type: "function",
        function: {
            name: "get_current_weather",
            description: "Useful when you want to query the weather for a specified city.",
            parameters: {
                type: "object",
                properties: {
                    location: {
                        type: "string",
                        description: "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                    }
                },
                required: ["location"]
            }
        }
    }
];

async function main() {
    const rl = readline.createInterface({ input, output });
    const question = await rl.question("Please enter your question: "); 
    rl.close();
    
    const messages = [{ role: "user", content: question }];
    // message example for multimodal models
    // const messages= [{
    //     role: "user",
    //     content: [{type: "image_url", image_url: {url: "https://img.alicdn.com/imgextra/i2/O1CN01FbTJon1ErXVGMRdsN_!!6000000000405-0-tps-1024-683.jpg"}},
    //               {type: "text", text: "What's the weather at the location in the image?"}]
    //   }];
    let reasoningContent = "";
    let answerContent = "";
    const toolInfo = [];
    let isAnswering = false;

    console.log("=".repeat(20) + "Reasoning process" + "=".repeat(20));
    
    try {
        const stream = await openai.chat.completions.create({
            // This example uses qwen-plus. You can replace it with other deep thinking models.
            model: "qwen-plus",
            messages,
            // Enable deep thinking. This parameter is invalid for qwen3-30b-a3b-thinking-2507, qwen3-235b-a22b-thinking-2507, and QwQ models.
            enable_thinking: true,
            tools,
            stream: true,
            parallel_tool_calls: true
        });

        for await (const chunk of stream) {
            if (!chunk.choices?.length) {
                console.log("\n" + "=".repeat(20) + "Usage" + "=".repeat(20));
                console.log(chunk.usage);
                continue;
            }

            const delta = chunk.choices[0]?.delta;
            if (!delta) continue;

            // Process the reasoning process.
            if (delta.reasoning_content) {
                reasoningContent += delta.reasoning_content;
                process.stdout.write(delta.reasoning_content);
            }
            // Process the reply content.
            else {
                if (!isAnswering) {
                    isAnswering = true;
                    console.log("\n" + "=".repeat(20) + "Reply content" + "=".repeat(20));
                }
                if (delta.content) {
                    answerContent += delta.content;
                    process.stdout.write(delta.content);
                }
                // Process tool calls.
                if (delta.tool_calls) {
                    for (const toolCall of delta.tool_calls) {
                        const index = toolCall.index;
                        
                        // Ensure the array length is sufficient.
                        while (toolInfo.length <= index) {
                            toolInfo.push({});
                        }
                        
                        // Update the tool ID.
                        if (toolCall.id) {
                            toolInfo[index].id = (toolInfo[index].id || "") + toolCall.id;
                        }
                        
                        // Update the function name.
                        if (toolCall.function?.name) {
                            toolInfo[index].name = (toolInfo[index].name || "") + toolCall.function.name;
                        }
                        
                        // Update the parameters.
                        if (toolCall.function?.arguments) {
                            toolInfo[index].arguments = (toolInfo[index].arguments || "") + toolCall.function.arguments;
                        }
                    }
                }
            }
        }

        console.log("\n" + "=".repeat(19) + "Tool call information" + "=".repeat(19));
        console.log(toolInfo.length ? toolInfo : "No tool calls");

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main(); 
```

### **Returned result**

If you enter "Weather in the four municipalities", the following result is returned:

```
Please enter your question: Weather in the four municipalities
====================Reasoning process====================
Okay, the user is asking about the weather in the four municipalities. First, I need to clarify which four municipalities in China they are. Beijing, Shanghai, Tianjin, and Chongqing, right? Next, I need to call the weather query function for each city.

But the user's question might require me to get the weather conditions for these four cities separately. Each city needs a call to the get_current_weather function, with its respective city name as the parameter. I need to ensure the parameters are correct, for example, the full names of the municipalities, such as "Beijing", "Shanghai", "Tianjin", and "Chongqing".

Then, I need to call the weather interfaces for these four cities in sequence. Each call requires a separate tool_call. The user probably wants to get the current weather information for each city, so I need to ensure each call is correct. I might need to pay attention to the correct spelling and name of each city to avoid errors. For example, Chongqing is sometimes abbreviated, so the full name should be used in the parameter.

Now, I need to generate four tool_calls, each corresponding to a municipality. I'll check if each parameter is correct and then arrange them in order. This way, the user will get the weather data for the four municipalities.
====================Reply content====================

===================Tool call information===================
[
  {
    id: 'call_21dc802e717f491298d1b2',
    name: 'get_current_weather',
    arguments: '{"location": "Beijing"}'
  },
  {
    id: 'call_2cd3be1d2f694c4eafd4e5',
    name: 'get_current_weather',
    arguments: '{"location": "Shanghai"}'
  },
  {
    id: 'call_48cf3f78e02940bd9085e4',
    name: 'get_current_weather',
    arguments: '{"location": "Tianjin"}'
  },
  {
    id: 'call_e230a2b4c64f4e658d223e',
    name: 'get_current_weather',
    arguments: '{"location": "Chongqing"}'
  }
]
```

## HTTP

### **Example code**

## curl

```
curl -X POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-d '{
    "model": "qwen-plus",
    "messages": [
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
            "description": "Useful when you want to query the weather for a specified city.",
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
  ],
  "enable_thinking": true,
  "stream": true
}'
```

## DashScope

## Python

### **Example code**

```
import dashscope
dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1/"
tools = [
    # Tool 1: Get the current time.
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            "parameters": {}  # Because no input parameters are required to get the current time, parameters is an empty dictionary.
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
                    # A location is required to query the weather, so the parameter is set to location.
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

# Define the question.
messages = [{"role": "user", "content": input("Please enter your question: ")}]

# message example for multimodal models
# messages = [
# {
#     "role": "user",
#     "content": [
#     {"image": "https://img.alicdn.com/imgextra/i2/O1CN01FbTJon1ErXVGMRdsN_!!6000000000405-0-tps-1024-683.jpg"},
#     {"text": "What's the weather at the location in the image?"}]
# }]

# If you use a multimodal model, replace Generation with the MultiModalConversation interface.
completion = dashscope.Generation.call(
    # This example uses qwen-plus. You can replace it with other deep thinking models.
    model="qwen-plus", 
    messages=messages,
    enable_thinking=True,
    tools=tools,
    parallel_tool_calls=True,
    stream=True,
    incremental_output=True,
    result_format="message"
)

reasoning_content = ""
answer_content = ""
tool_info = []
is_answering = False
print("="*20+"Reasoning process"+"="*20)

for chunk in completion:
    if chunk.status_code == 200:
        msg = chunk.output.choices[0].message
        
        # Process the reasoning process.
        if 'reasoning_content' in msg and msg.reasoning_content:
            reasoning_content += msg.reasoning_content
            print(msg.reasoning_content, end="", flush=True)
        
        # Process the reply content.
        if 'content' in msg and msg.content:
            if not is_answering:
                is_answering = True
                print("\n"+"="*20+"Reply content"+"="*20)
            answer_content += msg.content
            print(msg.content, end="", flush=True)
        
        # Process tool calls.
        if 'tool_calls' in msg and msg.tool_calls:
            for tool_call in msg.tool_calls:
                index = tool_call['index']
                
                while len(tool_info) <= index:
                    tool_info.append({'id': '', 'name': '', 'arguments': ''})  # Initialize all fields.
                
                # Incrementally update the tool ID.
                if 'id' in tool_call:
                    tool_info[index]['id'] += tool_call.get('id', '')
                
                # Incrementally update the function information.
                if 'function' in tool_call:
                    func = tool_call['function']
                    # Incrementally update the function name.
                    if 'name' in func:
                        tool_info[index]['name'] += func.get('name', '')
                    # Incrementally update the parameters.
                    if 'arguments' in func:
                        tool_info[index]['arguments'] += func.get('arguments', '')

print(f"\n"+"="*19+"Tool call information"+"="*19)
if not tool_info:
    print("No tool calls")
else:
    print(tool_info)
```

### **Returned result**

When you enter "Weather in the four municipalities", the following result is returned:

```
Please enter your question: Weather in the four municipalities
====================Reasoning process====================
Okay, the user is asking about the weather in the four municipalities. First, I need to confirm which four municipalities in China they are. Beijing, Shanghai, Tianjin, and Chongqing, right? Next, the user needs the weather conditions for each city, so I need to call the weather query function.

But wait, the user didn't specify the city names, just "four municipalities". I might need to clarify the name of each municipality and then query them separately. For example, Beijing, Shanghai, Tianjin, and Chongqing. I need to make sure each city is correct.

Then, I'll check the available tools. The user has provided the get_current_weather function with a 'location' parameter. Therefore, I need to call this function for each municipality, passing the corresponding city name as the parameter. For example, the first call's location is Beijing, the second is Shanghai, the third is Tianjin, and the fourth is Chongqing.

However, I might need to be careful. For municipalities like Chongqing, sometimes a more specific district is needed, but the user probably just wants the city-level weather. So using the municipality name directly should be fine. Next, I need to generate four separate function calls, one for each municipality. This way, the user will get the weather information for all four cities.

Finally, I'll make sure the parameters for each call are correct and that none are missed. This will ensure the user's question is fully answered.
===================Tool call information===================
[{'id': 'call_2f774ed97b0e4b24ab10ec', 'name': 'get_current_weather', 'arguments': '{"location": "Beijing"}'}, {'id': 'call_dc3b05b88baa48c58bc33a', 'name': 'get_current_weather', 'arguments': '{"location": "Shanghai"}}'}, {'id': 'call_249b2de2f73340cdb46cbc', 'name': 'get_current_weather', 'arguments': '{"location": "Tianjin"}'}, {'id': 'call_833333634fda49d1b39e87', 'name': 'get_current_weather', 'arguments': '{"location": "Chongqing"}}'}]
```

## Java

### **Example code**

```
// dashscope SDK version >= 2.19.4
import java.util.Arrays;

import com.alibaba.dashscope.exception.UploadFileException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversation;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationParam;
import com.alibaba.dashscope.aigc.multimodalconversation.MultiModalConversationResult;
import com.alibaba.dashscope.common.MultiModalMessage;
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.Constants;
import com.alibaba.dashscope.utils.JsonUtils;
import com.alibaba.dashscope.tools.ToolFunction;
import com.alibaba.dashscope.tools.FunctionDefinition;
import io.reactivex.Flowable;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.lang.System;
import com.github.victools.jsonschema.generator.Option;
import com.github.victools.jsonschema.generator.OptionPreset;
import com.github.victools.jsonschema.generator.SchemaGenerator;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfig;
import com.github.victools.jsonschema.generator.SchemaGeneratorConfigBuilder;
import com.github.victools.jsonschema.generator.SchemaVersion;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private static ObjectNode jsonSchemaWeather;
    private static ObjectNode jsonSchemaTime;
    
    static {Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";}

    static class TimeTool {
        public String call() {
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            return "Current time: " + now.format(formatter) + ".";
        }
    }

    static class WeatherTool {
        private String location;

        public WeatherTool(String location) {
            this.location = location;
        }

        public String call() {
            return location + " is sunny today";
        }
    }

    static {
        SchemaGeneratorConfigBuilder configBuilder = new SchemaGeneratorConfigBuilder(
                SchemaVersion.DRAFT_2020_12, OptionPreset.PLAIN_JSON);
        SchemaGeneratorConfig config = configBuilder
                .with(Option.EXTRA_OPEN_API_FORMAT_VALUES)
                .without(Option.FLATTENED_ENUMS_FROM_TOSTRING)
                .build();
        SchemaGenerator generator = new SchemaGenerator(config);
        jsonSchemaWeather = generator.generateSchema(WeatherTool.class);
        jsonSchemaTime = generator.generateSchema(TimeTool.class);
    }
    private static void handleGenerationResult(GenerationResult message) {
        System.out.println(JsonUtils.toJson(message));
    }
    
    // Create a tool calling method for text generation models.
    public static void streamCallWithMessage(Generation gen, Message userMsg)
            throws NoApiKeyException, ApiException, InputRequiredException {
        GenerationParam param = buildGenerationParam(userMsg);
        Flowable<GenerationResult> result = gen.streamCall(param);
        result.blockingForEach(message -> handleGenerationResult(message));
    }
    // Build text generation model parameters that support tool calling.
    private static GenerationParam buildGenerationParam(Message userMsg) {
        FunctionDefinition fdWeather = buildFunctionDefinition(
                "get_current_weather", "Get the weather for a specified region", jsonSchemaWeather);
        FunctionDefinition fdTime = buildFunctionDefinition(
                "get_current_time", "Get the current time", jsonSchemaTime);

        return GenerationParam.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen-plus")
                .enableThinking(true)
                .messages(Arrays.asList(userMsg))
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .incrementalOutput(true)
                .tools(Arrays.asList(
                        ToolFunction.builder().function(fdWeather).build(),
                        ToolFunction.builder().function(fdTime).build()))
                .build();
    }

    // Create a tool calling method for multimodal models.
    public static void streamCallWithMultiModalMessage(MultiModalConversation conv, MultiModalMessage userMsg)
            throws NoApiKeyException, ApiException, UploadFileException {
        MultiModalConversationParam param = buildMultiModalConversationParam(userMsg);
        Flowable<MultiModalConversationResult> result = conv.streamCall(param);
        result.blockingForEach(message -> System.out.println(JsonUtils.toJson(message)));
    }

    // Build multimodal model parameters that support tool calling.
    private static MultiModalConversationParam buildMultiModalConversationParam(MultiModalMessage userMsg) {
        FunctionDefinition fdWeather = buildFunctionDefinition(
                "get_current_weather", "Get the weather for a specified region", jsonSchemaWeather);
        FunctionDefinition fdTime = buildFunctionDefinition(
                "get_current_time", "Get the current time", jsonSchemaTime);

        return MultiModalConversationParam.builder()
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .model("qwen3-vl-plus")  // Use the multimodal model Qwen3-VL.
                .enableThinking(true)
                .messages(Arrays.asList(userMsg))
                .tools(Arrays.asList(  // Configure the tool list.
                        ToolFunction.builder().function(fdWeather).build(),
                        ToolFunction.builder().function(fdTime).build()))
                .build();
    }

    private static FunctionDefinition buildFunctionDefinition(
            String name, String description, ObjectNode schema) {
        return FunctionDefinition.builder()
                .name(name)
                .description(description)
                .parameters(JsonUtils.parseString(schema.toString()).getAsJsonObject())
                .build();
    }

    public static void main(String[] args) {
        try {
            Generation gen = new Generation();
            Message userMsg = Message.builder()
                    .role(Role.USER.getValue())
                    .content("Please tell me the weather in Hangzhou")
                    .build();
            try {
                streamCallWithMessage(gen, userMsg);
            } catch (InputRequiredException e) {
                throw new RuntimeException(e);
            }
//             If you use a multimodal model for tool calling, uncomment the following lines.
//            MultiModalConversation conv = new MultiModalConversation();
//            MultiModalMessage userMessage = MultiModalMessage.builder().role(Role.USER.getValue())
//                    .content(Arrays.asList(Collections.singletonMap("image", "https://img.alicdn.com/imgextra/i2/O1CN01FbTJon1ErXVGMRdsN_!!6000000000405-0-tps-1024-683.jpg"),
//                            Collections.singletonMap("text", "What's the weather at the location in the image?"))).build();
//            try {
//                streamCallWithMultiModalMessage(conv,userMessage);
//            } catch (UploadFileException e) {
//                throw new RuntimeException(e);
//            }
        } catch (ApiException | NoApiKeyException e) {
            logger.error("An exception occurred: {}", e.getMessage());
        }
        System.exit(0);
    }
}
```

### **Returned result**

```
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":6,"total_tokens":244},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"Okay, the user wants me"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":12,"total_tokens":250},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"to tell them the weather in Hangzhou. I"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":16,"total_tokens":254},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"need to first determine if there are"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":22,"total_tokens":260},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"any relevant tools available. Looking at the provided"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":28,"total_tokens":266},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"tools, I see a get_current"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":34,"total_tokens":272},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"_weather function with a location parameter"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":38,"total_tokens":276},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":". So I should call"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":43,"total_tokens":281},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"this function, with the parameter"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":48,"total_tokens":286},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"set to Hangzhou. No other"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":52,"total_tokens":290},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"tools are needed, because"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":56,"total_tokens":294},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"the user only asked about"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":60,"total_tokens":298},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"the weather. Next, I'll construct"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":64,"total_tokens":302},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"the tool_call, filling in"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":68,"total_tokens":306},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"the name and parameters"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":73,"total_tokens":311},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":". I'll make sure the parameter is a"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":78,"total_tokens":316},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"JSON object, and location is a"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":82,"total_tokens":320},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"string. After checking for errors"}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":88,"total_tokens":326},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":", I'll return."}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":106,"total_tokens":344},"output":{"choices":[{"finish_reason":"null","message":{"role":"assistant","content":"","reasoning_content":"","tool_calls":[{"type":"function","id":"call_ecc41296dccc47baa01567","function":{"name":"get_current_weather","arguments":"{\"location\": \"Hangzhou"}}]}}]}}
{"requestId":"4edb81cd-4647-9d5d-88f9-a4f30bc6d8dd","usage":{"input_tokens":238,"output_tokens":108,"total_tokens":346},"output":{"choices":[{"finish_reason":"tool_calls","message":{"role":"assistant","content":"","reasoning_content":"","tool_calls":[{"type":"function","id":"","function":{"arguments":"\"}"}}]}}]}}
```

## HTTP

### **Example code**

## curl

```
# ======= Important note =======
# If you use a multimodal model, modify the message parameter and replace the url with https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation.
# API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
# If you use a model in the China (Beijing) region, replace the url with https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation.
# === Delete this comment before running ===

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
                "content": "Hangzhou weather"
            }
        ]
    },
    "parameters": {
        "enable_thinking": true,
        "incremental_output": true,
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
                            "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                        }
                    },
                    "required": ["location"]
                }
            }
        }]
    }
}'
```

## **Going live**

### **Test tool call accuracy**

-   **Establish an evaluation system**:
    
    Build a test dataset that is representative of real business scenarios and define clear evaluation metrics, such as tool selection accuracy, parameter extraction accuracy, and end-to-end success rate.
    
-   **Optimize prompts**
    
    Based on the specific problems identified during testing (incorrect tool selection or parameter errors), targeted optimization of system prompts, tool descriptions, and parameter descriptions serves as the core tuning method.
    
-   **Upgrade the model**
    
    When prompt engineering tuning fails to improve performance, upgrading to a more capable model version (such as `qwen3-max-preview`) is the most direct and effective way to improve metrics.
    

### **Dynamically control the number of tools**

When the number of tools integrated into an application exceeds dozens or even hundreds, providing the entire tool library to the model can lead to the following problems:

-   **Performance degradation**: The difficulty for the model to select the correct tool from an enormous toolset increases dramatically.
    
-   **Cost and latency**: Many tool descriptions will consume an enormous amount of input tokens, leading to increased costs and slower responses.
    

The solution involves adding a tool routing/retrieval layer before calling the model. Based on the user's current query, quickly and accurately filter a small, relevant subset of tools from the complete tool library, and then provide this subset to the model.

**Several mainstream methods for implementing tool routing:**

-   **Semantic retrieval**
    
    Pre-convert the description information (`description`) of all tools into vectors using an Embedding model and store them in a vector database. When a user queries, perform vector similarity search on the query vector to recall the most relevant Top-K tools.
    
-   **Hybrid retrieval**
    
    Combine the "fuzzy match" capability of semantic retrieval with the "exact match" capability of traditional keywords or metadata tags. Add `tags` or `keywords` fields to tools. Performing vector search and keyword filtering simultaneously during retrieval can greatly improve the precision of recall for high-frequency or specific scenarios.
    
-   **Lightweight LLM router**
    
    For more complex routing logic, use a smaller, faster, and cheaper model (such as Qwen-Flash) as a pre-routing model. Its task is to output a list of relevant tool names based on the user's question.
    

**Practical advice**

-   **Keep the candidate set concise**: Regardless of the method used, the number of tools provided to the main model should ideally be **no more than 20**. This is the best balance between model cognitive load, cost, latency, and accuracy.
    
-   **Layered filtering strategy**: build a funnel-style routing policy. For example, first, use extremely low-cost keyword/rule matching for the initial screening round to filter out obviously irrelevant tools. Then, perform semantic retrieval on the remaining tools to improve efficiency and quality.
    

### **Tool security principles**

When exposing tool execution capabilities to LLMs, security must be the top priority. The core principles are "least privilege" and "human confirmation".

-   **Least privilege principle**: The toolset provided to the model should strictly adhere to the least privilege principle. By default, tools should be read-only (such as querying weather, searching documents), and avoid directly providing any "write" permissions that involve state changes or resource operations.
    
-   **Isolate dangerous tools**: Do not directly provide dangerous tools to the LLM, such as executing arbitrary code (`code interpreter`), operating on the file system (`fs.delete`), performing database deletion or update operations (`db.drop_table`), or tools involving financial transactions (`payment.transfer`).
    
-   **Human involvement**: For all high-privilege or irreversible operations, a manual review and confirmation process must be introduced. The model can generate an operation request, but the final execution "button" must be clicked by a human user. For example, the model can prepare an email, but the sending operation requires user confirmation.
    

### **User experience optimization**

The function calling process is lengthy, and a problem in any part of this process can lead to a degradation in user experience.

#### **Handle tool run failures**

Tool run failures are common. The following strategies can be employed:

-   **Maximum retry count**: Set a reasonable retry limit (for example, 3 times) to avoid prolonged user waits or wasted system resources due to continuous failures.
    
-   **Provide fallback wording**: When retries are exhausted or an unresolvable error is encountered, a clear and friendly prompt should be returned to the user, for example: "Sorry, I am temporarily unable to query the relevant information. The service may be busy. Please try again later."
    

#### **Cope with processing delays**

High latency will reduce user satisfaction and requires improvement through frontend interaction and backend optimization.

-   **Set a timeout**: Set an independent and reasonable timeout for each step of function calling. Once a timeout occurs, the operation should be immediately interrupted and feedback provided.
    
-   **Provide immediate feedback**: When starting function calling, it is recommended to provide a prompt on the interface, such as "Looking up weather for you..." or "Searching for related information...", to provide users with real-time feedback on processing progress.
    

## **Billing details**

In addition to tokens in the messages array, tool descriptions are also counted as input tokens and are billed with the prompt.

## **Pass tool information using a System Message**

Pass tool information to the model using the tools parameter. See the [Usage](#038e24005c1vt) section. To pass tool information using a system message, use the prompt template shown in the following code examples:

## OpenAI compatible

## Python

### **Example code**

```
import os
from openai import OpenAI
import json

client = OpenAI(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the China (Beijing) region, replace the base_url with https://dashscope.aliyuncs.com/compatible-mode/v1.
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# Custom System prompt. Modify as needed.
custom_prompt = "You are an intelligent assistant specialized in calling various tools to help users solve problems. You can select and correctly call appropriate tools based on user needs."

tools = [
    # Tool 1: Get the current time.
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
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

# Iterate over the tools list to build a description for each tool.
tools_descriptions = []
for tool in tools:
    tool_json = json.dumps(tool, ensure_ascii=False)
    tools_descriptions.append(tool_json)

# Join all tool descriptions into a single string.
tools_content = "\n".join(tools_descriptions)

system_prompt = f"""{custom_prompt}

# Tools

You may call one or more functions to assist with the user query.

You are provided with function signatures within <tools></tools> XML tags:
<tools>
{tools_content}
</tools>

For each function call, return a JSON object with function name and arguments within <tool_call></tool_call> XML tags:
<tool_call>
{{"name": <function-name>, "arguments": <args-json-object>}}
</tool_call>"""

messages = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": "What time is it?"}
]

completion = client.chat.completions.create(
    model="qwen-plus",
    messages=messages,
)
print(completion.model_dump_json())
```

## Node.js

### Example code

```
import OpenAI from "openai";

const client = new OpenAI({
    // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    // If you have not configured the environment variable, replace the following line with your Model Studio API key: apiKey: "sk-xxx",
    apiKey: process.env.DASHSCOPE_API_KEY,
    // If you use a model in the China (Beijing) region, replace the baseURL with https://dashscope.aliyuncs.com/compatible-mode/v1.
    baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
});

// Custom System prompt.
const customPrompt = "You are an intelligent assistant specialized in calling various tools to help users solve problems. You can select and correctly call appropriate tools based on user needs.";

const tools = [
    // Tool 1: Get the current time.
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            "parameters": {}
        }
    },
    // Tool 2: Get the weather for a specified city.
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
                        "description": "A city or district, such as Beijing, Hangzhou, or Yuhang District."
                    }
                },
                "required": ["location"]
            }
        }
    }
];

// Iterate over the tools list to build a description for each tool.
const toolsDescriptions = [];
for (const tool of tools) {
    const toolJson = JSON.stringify(tool, null, 2);
    toolsDescriptions.push(toolJson);
}

// Join all tool descriptions into a single string.
const toolsContent = toolsDescriptions.join("\n");

const systemPrompt = `${customPrompt}

# Tools

You may call one or more functions to assist with the user query.

You are provided with function signatures within <tools></tools> XML tags:
<tools>
${toolsContent}
</tools>

For each function call, return a JSON object with function name and arguments within <tool_call></tool_call> XML tags:
<tool_call>
{"name": <function-name>, "arguments": <args-json-object>}
</tool_call>`;

const messages = [
    {"role": "system", "content": systemPrompt},
    {"role": "user", "content": "What time is it?"}
];

async function main() {
    try {
        const completion = await client.chat.completions.create({
            model: "qwen-plus",
            messages: messages,
        });
        
        console.log(JSON.stringify(completion, null, 2));
    } catch (error) {
        console.error("Error:", error);
    }
}

main(); 
```

## DashScope

## Python

### **Example code**

```
import os
from dashscope import Generation
import json
# If you use a model in the China (Beijing) region, replace the base_http_api_url with https://dashscope.aliyuncs.com/api/v1.
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

# Custom System prompt.
custom_prompt = "You are an intelligent assistant specialized in calling various tools to help users solve problems. You can select and correctly call appropriate tools based on user needs."

tools = [
    # Tool 1: Get the current time.
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "Useful when you want to know the current time.",
            "parameters": {}  # Because no input parameters are required to get the current time, parameters is an empty dictionary.
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
                    # A location is required to query the weather, so set the parameter to location.
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

# Iterate over the tools list to build a description for each tool.
tools_descriptions = []
for tool in tools:
    tool_json = json.dumps(tool, ensure_ascii=False)
    tools_descriptions.append(tool_json)

# Join all tool descriptions into a single string.
tools_content = "\n".join(tools_descriptions)

system_prompt = f"""{custom_prompt}

# Tools

You may call one or more functions to assist with the user query.

You are provided with function signatures within <tools></tools> XML tags:
<tools>
{tools_content}
</tools>

For each function call, return a JSON object with function name and arguments within <tool_call></tool_call> XML tags:
<tool_call>
{{"name": <function-name>, "arguments": <args-json-object>}}
</tool_call>"""

messages = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": "What time is it?"}
]

response = Generation.call(
    # API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
    # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    model="qwen-plus",
    messages=messages,
    result_format="message",  # Set the output format to message.
)

print(response)
```

## Java

### Example code

```
// Copyright (c) Alibaba, Inc. and its affiliates.
// version >= 2.12.0

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
import com.alibaba.dashscope.utils.JsonUtils;
import com.alibaba.dashscope.protocol.Protocol;

public class Main {
    public static void main(String[] args) {
        try {
            callToolWithCustomPrompt();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.out.println(String.format("Exception: %s", e.getMessage()));
        } catch (Exception e) {
            System.out.println(String.format("Exception: %s", e.getMessage()));
        }
        System.exit(0);
    }

    public static void callToolWithCustomPrompt()
            throws NoApiKeyException, ApiException, InputRequiredException {

        // Custom System prompt.
        String customPrompt = "You are an intelligent assistant specialized in calling various tools to help users solve problems. You can select and correctly call appropriate tools based on user needs.";

        // Build tool descriptions.
        String[] toolsDescriptions = {
                // Tool 1: Get the current time.
                "{\n" +
                        "    \"type\": \"function\",\n" +
                        "    \"function\": {\n" +
                        "        \"name\": \"get_current_time\",\n" +
                        "        \"description\": \"Useful when you want to know the current time.\",\n" +
                        "        \"parameters\": {}\n" +
                        "    }\n" +
                        "}",
                // Tool 2: Get the weather for a specified city.
                "{\n" +
                        "    \"type\": \"function\",\n" +
                        "    \"function\": {\n" +
                        "        \"name\": \"get_current_weather\",\n" +
                        "        \"description\": \"Useful when you want to query the weather for a specified city.\",\n" +
                        "        \"parameters\": {\n" +
                        "            \"type\": \"object\",\n" +
                        "            \"properties\": {\n" +
                        "                \"location\": {\n" +
                        "                    \"type\": \"string\",\n" +
                        "                    \"description\": \"A city or district, such as Beijing, Hangzhou, or Yuhang District.\"\n" +
                        "                }\n" +
                        "            },\n" +
                        "            \"required\": [\"location\"]\n" +
                        "        }\n" +
                        "    }\n" +
                        "}"
        };

        // Join all tool descriptions into a single string.
        String toolsContent = String.join("\n", toolsDescriptions);

        // Build the system prompt.
        String systemPrompt = String.format("%s\n\n" +
                        "# Tools\n\n" +
                        "You may call one or more functions to assist with the user query.\n\n" +
                        "You are provided with function signatures within <tools></tools> XML tags:\n" +
                        "<tools>\n%s\n</tools>\n\n" +
                        "For each function call, return a JSON object with function name and arguments within <tool_call></tool_call> XML tags:\n"
                        +
                        "<tool_call>\n" +
                        "{\"name\": <function-name>, \"arguments\": <args-json-object>}\n" +
                        "</tool_call>",
                customPrompt, toolsContent);

        // Build the message list.
        Message systemMsg = Message.builder()
                .role(Role.SYSTEM.getValue())
                .content(systemPrompt)
                .build();

        Message userMsg = Message.builder()
                .role(Role.USER.getValue())
                .content("What time is it?")
                .build();

        List<Message> messages = new ArrayList<>(Arrays.asList(systemMsg, userMsg));

        // Build request parameters.
        GenerationParam param = GenerationParam.builder()
                .model("qwen-plus")
                // API keys vary by region. To obtain an API key, see https://www.alibabacloud.com/help/document_detail/2613999.html
                // If you have not configured the environment variable, replace the following line with: .apiKey("sk-xxx")
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .messages(messages)
                .resultFormat(ResultFormat.MESSAGE)
                .build();

        // Call the generation interface. If you use a model in the China (Beijing) region, replace the url with https://dashscope.aliyuncs.com/api/v1.
        Generation gen = new Generation(Protocol.HTTP.getValue(), "https://dashscope-intl.aliyuncs.com/api/v1");
        GenerationResult result = gen.call(param);

        // Output the result.
        System.out.println(JsonUtils.toJson(result));
    }
}
```

> After you run the preceding code, use an XML parser to extract tool call information—including the function name and input parameters—from the content between the <tool\_call> and </tool\_call> tags.

## Error codes

If the model call fails and returns an error message, see [Error messages](/help/en/model-studio/error-code) for resolution.
