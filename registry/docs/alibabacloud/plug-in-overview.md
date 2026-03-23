Plug-ins extend LLM applications with external capabilities like web search, calculations, and data processing. Each plug-in wraps one or more API tools the LLM calls at runtime.

Model Studio provides ready-to-use official plug-ins and supports custom plug-ins for your own APIs or third-party services.

## How plug-ins work

The model evaluates each request against available tool names and descriptions to decide whether to call a tool.

### Agent applications

In [agent applications](/help/en/model-studio/single-agent-application), the LLM autonomously decides which tools to call:

**Step**

**Actor**

**Action**

1

User

Sends a request to the application

2

LLM

Evaluates the request against available tool names and descriptions

3

LLM

Selects a tool and generates the required parameters. If no tool is needed, responds directly.

4

Application

Calls the tool and receives the output

5

LLM

Combines the tool output with the original request and generates the final response

### Workflow applications

In [workflow applications](/help/en/model-studio/workflow-application/), plug-ins run as predefined nodes you configure upfront (not LLM-decided at runtime).

## Official plug-ins

The Plug-in Gallery provides pre-installed plug-ins ready to use — no configuration required. For the full list, see [Official plug-ins](/help/en/model-studio/plugins#00edef12dc50q).

**Name**

**Tool ID**

**What it does**

**Billing**

[Python Code Interpreter](/help/en/model-studio/plugins#f8658b5c70a93)

`code_interpreter`

Executes Python code for calculations, data analysis, and visualization

Free

[Calculator](/help/en/model-studio/plugins#12e61be838qub)

`calculator`

Performs mathematical calculations like `12313 * 13232`

Free

[Image Generation](/help/en/model-studio/plugins#da38f8a429lso)

`text_to_image`

Generates images from text prompts such as "draw a smiling puppy"

Free for a limited period. Apply for access first.

### Plug-in in action

Ask "What is 12313 x 13232?" Without a plug-in, the model may return an incorrect answer. With the Calculator plug-in, it delegates the calculation and returns the exact result: 162,925,616.

**Without a plug-in**

**With a plug-in**

The model attempts the calculation on its own and may produce an incorrect answer.

The model calls the Calculator tool and returns the exact result.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7832357371/p904991.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7832357371/p904997.png)

## Custom plug-ins

Create custom plug-ins for features specific to your use case.

For instructions, see [Create custom plug-ins](/help/en/model-studio/custom-plug-ins).

## Supported models

**Model**

**Model identifier**

Qwen-Turbo

`qwen-turbo`

Qwen-Plus

`qwen-plus`

Qwen-Max

`qwen-max`

Qwen VL-Max

`qwen-vl-max`

Qwen VL-Plus

`qwen-vl-plus`

Qwen2-57B-A14B-Instruct

`qwen2-57b-a14b-instruct`

Qwen2-72B-Instruct

`qwen2-72b-instruct`

**Note**

Open-source Qwen2 models do not support Image Generation. Check the console for the latest compatibility.

For the complete model catalog, see [List of models](/help/en/model-studio/models).

## What's next

-   [Official plug-ins](/help/en/model-studio/plugins#00edef12dc50q) -- Browse available plug-ins and their capabilities
    
-   [Create custom plug-ins](/help/en/model-studio/custom-plug-ins) -- Build plug-ins tailored to your use case
    
-   [Agent applications](/help/en/model-studio/single-agent-application) -- Build applications where the LLM autonomously selects and calls tools
    
-   [Workflow applications](/help/en/model-studio/workflow-application/) -- Design applications with predefined tool execution sequences
