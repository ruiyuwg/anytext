Cache common input prefixes across requests to reduce inference latency and costs without affecting response quality.

Three cache modes support different scenarios:

-   [Explicit cache](#825f201c5fy6o): Manually enable to create caches for specific content. Guarantees cache hits. Valid for 5 minutes. Creation: 125% of standard input price. Hits: 10%.
    
-   [Implicit cache](#2317ea09cfxok): Automatic mode requiring no configuration (cannot be disabled). System automatically identifies and caches common prefixes, but hit rates are not guaranteed. Hits: 20% of standard input price.
    
-   [Session cache](#sc-section-title): For multi-turn Responses API conversations. Add `x-dashscope-session-cache: enable` to the request header to enable automatic caching. Billing matches explicit cache: creation at 125%, hits at 10%.
    

**Item**

**Explicit cache**

**Implicit cache**

**Session cache**

Affects response quality

No impact

No impact

No impact

Billing for tokens used to create the cache

125% of the standard input token price

100% of the standard input token price

125% of the standard input token price

Billing for cached input tokens that are hit

10% of the standard input token price

20% of the standard input token price

10% of the standard input token price

Minimum tokens for caching

1024

256

1024

Cache validity period

5 minutes (resets on hit)

Not guaranteed. The system periodically clears unused cached data.

5 minutes (resets on hit)

**Note**

-   Chat Completions API and DashScope API: explicit cache and implicit cache are mutually exclusive (one per request).
    
-   Responses API: if session cache is disabled, implicit cache is used (if model supports it).
    

## **Explicit cache**

Explicit cache requires manual setup and higher upfront cost but provides guaranteed hits and lower latency than implicit cache.

### **Usage**

Add `"cache_control": {"type": "ephemeral"}` to the \`messages\` array. System searches backward up to 20 `content` blocks from each `cache_control` marker to match caches.

> A single request supports a maximum of four cache markers.

-   **Cache miss**
    
    System creates a new cache block from the \`messages\` array start to the `cache_control` marker (valid 5 minutes).
    
    > Cache creation occurs after model response. Wait for creation to complete before sending subsequent requests.
    
    > A cache block must contain at least 1024 tokens.
    
-   **Cache hit**
    
    System selects the longest matching prefix and resets validity to 5 minutes.
    

The following example shows how to use this feature:

1.  **Send the first request**: Send a system message that contains text A with more than 1024 tokens and add a cache marker.
    
    ```
    [{"role": "system", "content": [{"type": "text", "text": A, "cache_control": {"type": "ephemeral"}}]}] 
    ```
    
    The system creates the first cache block, which is referred to as cache block A.
    
2.  **Send the second request:** Send a request with the following structure:
    
    ```
    [
        {"role": "system", "content": A},
        <other messages>
        {"role": "user","content": [{"type": "text", "text": B, "cache_control": {"type": "ephemeral"}}]}
    ]
    ```
    
    -   If "other messages" ≤ 20 messages, cache block A is hit and validity period resets to 5 minutes. System also creates a new cache block based on A + other messages + B.
        
    -   If "other messages" > 20 messages, cache block A is not hit. System creates a new cache block based on full context (A + other messages + B).
        

### **Supported models**

## International

[Qwen-Max](/help/en/model-studio/models#131ff25c87sj6): qwen3-max

[Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): qwen3.5-plus, qwen-plus

[Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): qwen3.5-flash, qwen-flash

[Qwen-Coder](/help/en/model-studio/models#673bef6a2fxfg): qwen3-coder-plus, qwen3-coder-flash

[Qwen-VL](/help/en/model-studio/models#5540e6e52e1xx): qwen3-vl-plus

[DeepSeek:](/help/en/model-studio/deepseek-api) deepseek-v3.2

## Global

[Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): qwen3.5-plus

[Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): qwen3.5-flash

## Chinese mainland

[Qwen-Max](/help/en/model-studio/models#131ff25c87sj6): qwen3-max

[Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): qwen3.5-plus, qwen-plus

[Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): qwen3.5-flash, qwen-flash

[Qwen-Coder](/help/en/model-studio/models#673bef6a2fxfg): qwen3-coder-plus, qwen3-coder-flash

[Qwen-VL](/help/en/model-studio/models#5540e6e52e1xx): qwen3-vl-plus

[DeepSeek](/help/en/model-studio/deepseek-api): deepseek-v3.2

[Kimi:](/help/en/model-studio/kimi-api) kimi-k2.5

## Hong Kong (China)

In the [China (Hong Kong) deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in **China (Hong Kong)**, and model inference computing resources are limited to China (Hong Kong).

[Qwen-Max](/help/en/model-studio/models#131ff25c87sj6): qwen3-max

[Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): qwen-plus

[Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): qwen3.5-flash

[Qwen-VL](/help/en/model-studio/models#5540e6e52e1xx): qwen3-vl-plus

## EU

In the [EU deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in **Germany (Frankfurt)**, and model inference computing resources are limited to the EU.

[Qwen-Max](/help/en/model-studio/models#131ff25c87sj6): qwen3-max

[Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): qwen-plus

[Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): qwen3.5-flash

[Qwen-VL](/help/en/model-studio/models#5540e6e52e1xx): qwen3-vl-plus

### **Getting started**

Examples below show cache block creation and hits for OpenAI compatible interface and DashScope protocol.

## OpenAI compatible

```
from openai import OpenAI
import os

client = OpenAI(
    # If the environment variable is not set, replace the following line with: api_key="sk-xxx"
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# Mock code repository content. The minimum cacheable prompt length is 1024 tokens.
long_text_content = "<Your Code Here>" * 400

# Function to send the request
def get_completion(user_input):
    messages = [
        {
            "role": "system",
            "content": [
                {
                    "type": "text",
                    "text": long_text_content,
                    # Place the cache_control marker here to create a cache block containing all content from the beginning of the messages array to this content block.
                    "cache_control": {"type": "ephemeral"},
                }
            ],
        },
        # The question content is different for each request.
        {
            "role": "user",
            "content": user_input,
        },
    ]
    completion = client.chat.completions.create(
        # Select a model that supports explicit cache.
        model="qwen3-coder-plus",
        messages=messages,
    )
    return completion

# First request
first_completion = get_completion("What is the content of this code?")
print(f"First request cache creation tokens: {first_completion.usage.prompt_tokens_details.cache_creation_input_tokens}")
print(f"First request cached hit tokens: {first_completion.usage.prompt_tokens_details.cached_tokens}")
print("=" * 20)
# Second request, the code content is the same, only the question is changed.
second_completion = get_completion("How can this code be optimized?")
print(f"Second request cache creation tokens: {second_completion.usage.prompt_tokens_details.cache_creation_input_tokens}")
print(f"Second request cached hit tokens: {second_completion.usage.prompt_tokens_details.cached_tokens}")
```

## DashScope

Python

```
import os
from dashscope import Generation
# If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
dashscope.base_http_api_url = "https://dashscope-intl.aliyuncs.com/api/v1"

# Mock code repository content. The minimum cacheable prompt length is 1024 tokens.
long_text_content = "<Your Code Here>" * 400

# Function to send the request
def get_completion(user_input):
    messages = [
        {
            "role": "system",
            "content": [
                {
                    "type": "text",
                    "text": long_text_content,
                    # Place the cache_control marker here to create a cache block containing all content from the beginning of the messages array to this content block.
                    "cache_control": {"type": "ephemeral"},
                }
            ],
        },
        # The question content is different for each request.
        {
            "role": "user",
            "content": user_input,
        },
    ]
    response = Generation.call(
        # If the environment variable is not set, replace the following line with your Model Studio API key: api_key = "sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"), 
        model="qwen3-coder-plus",
        messages=messages,
        result_format="message"
    )
    return response

# First request
first_completion = get_completion("What is the content of this code?")
print(f"First request cache creation tokens: {first_completion.usage.prompt_tokens_details['cache_creation_input_tokens']}")
print(f"First request cached hit tokens: {first_completion.usage.prompt_tokens_details['cached_tokens']}")
print("=" * 20)
# Second request, the code content is the same, only the question is changed.
second_completion = get_completion("How can this code be optimized?")
print(f"Second request cache creation tokens: {second_completion.usage.prompt_tokens_details['cache_creation_input_tokens']}")
print(f"Second request cached hit tokens: {second_completion.usage.prompt_tokens_details['cached_tokens']}")
```

Java

```
// The minimum Java SDK version is 2.21.6
import com.alibaba.dashscope.aigc.generation.Generation;
import com.alibaba.dashscope.aigc.generation.GenerationParam;
import com.alibaba.dashscope.aigc.generation.GenerationResult;
import com.alibaba.dashscope.common.Message;
import com.alibaba.dashscope.common.MessageContentText;
import com.alibaba.dashscope.common.Role;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;

import java.util.Arrays;
import java.util.Collections;

public class Main {
    private static final String MODEL = "qwen3-coder-plus";
    // Mock code repository content (repeated 400 times to ensure it exceeds 1024 tokens)
    private static final String LONG_TEXT_CONTENT = generateLongText(400);
    private static String generateLongText(int repeatCount) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < repeatCount; i++) {
            sb.append("<Your Code Here>");
        }
        return sb.toString();
    }
    private static GenerationResult getCompletion(String userQuestion)
            throws NoApiKeyException, ApiException, InputRequiredException {
        // If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/api/v1
        Generation gen = new Generation("http", "https://dashscope-intl.aliyuncs.com/api/v1");

        // Build the system message with cache control
        MessageContentText systemContent = MessageContentText.builder()
                .type("text")
                .text(LONG_TEXT_CONTENT)
                .cacheControl(MessageContentText.CacheControl.builder()
                        .type("ephemeral") // Set the cache type
                        .build())
                .build();

        Message systemMsg = Message.builder()
                .role(Role.SYSTEM.getValue())
                .contents(Collections.singletonList(systemContent))
                .build();
        Message userMsg = Message.builder()
                .role(Role.USER.getValue())
                .content(userQuestion)
                .build();

        // Build the request parameters
        GenerationParam param = GenerationParam.builder()
                .model(MODEL)
                .messages(Arrays.asList(systemMsg, userMsg))
                .resultFormat(GenerationParam.ResultFormat.MESSAGE)
                .build();
        return gen.call(param);
    }

    private static void printCacheInfo(GenerationResult result, String requestLabel) {
        System.out.printf("%s cache creation tokens: %d%n", requestLabel, result.getUsage().getPromptTokensDetails().getCacheCreationInputTokens());
        System.out.printf("%s cached hit tokens: %d%n", requestLabel, result.getUsage().getPromptTokensDetails().getCachedTokens());
    }

    public static void main(String[] args) {
        try {
            // First request
            GenerationResult firstResult = getCompletion("What is the content of this code?");
            printCacheInfo(firstResult, "First request");
            System.out.println(new String(new char[20]).replace('\0', '='));            // Second request
            GenerationResult secondResult = getCompletion("How can this code be optimized?");
            printCacheInfo(secondResult, "Second request");
        } catch (NoApiKeyException | ApiException | InputRequiredException e) {
            System.err.println("API call failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

This example caches mock code repository content with the `cache_control` marker. Subsequent requests asking about the same code reuse the cache, reducing response time and costs.

```
First request cache creation tokens: 1605
First request cached hit tokens: 0
====================
Second request cache creation tokens: 0
Second request cached hit tokens: 1605
```

### Use multiple cache markers for fine-grained control

In complex scenarios, prompts often have multiple parts with different reuse frequencies. Use multiple cache markers for fine-grained control.

For example, the prompt for a smart customer service agent typically includes:

-   **System settings:** Highly stable and almost never changes.
    
-   **External knowledge:** Semi-stable. It is retrieved from a knowledge base or by calling a tool and may remain unchanged during a continuous conversation.
    
-   **Conversation history:** Grows dynamically.
    
-   **Current question:** Different each time.
    

Caching the entire prompt as a single unit invalidates the cache on any minor change (such as changed external knowledge).

Set up to four cache markers per request to create separate cache blocks for different prompt parts, improving hit rate and control.

### **Billing**

Explicit cache affects only input token pricing:

-   **Cache creation**: 125% of standard input price. If a new cache contains an existing cache as a prefix, only the increment is billed.
    
    Example: existing cache A = 1200 tokens, new cache AB = 1500 tokens. First 1200 tokens billed as cache hit (10%), remaining 300 as cache creation (125%).
    
    > Check the number of tokens used for cache creation in the `cache_creation_input_tokens` parameter.
    
-   **Cache hit**: 10% of standard input price.
    
    > Check the number of hit cache tokens in the `cached_tokens` parameter.
    
-   **Other tokens**: Tokens not matching any cache or used for cache creation are billed at standard price.
    

### **Cacheable content**

Supported message types for cache markers:

-   System message
    
-   User message
    
    > When you use the `qwen3-vl-plus` model to create a cache, the `cache_control` marker can be placed after multimodal content or text. Its position does not affect the caching of the entire user message.
    
-   Assistant message
    
-   Tool message (the result after a tool is executed)
    
    > If a request includes the `tools` parameter, adding a cache marker in `messages` also caches the tool descriptions defined in the request.
    

For example, for a system message, change the `content` field to an array and add the `cache_control` field:

```
{
  "role": "system",
  "content": [
    {
      "type": "text",
      "text": "<Your specified prompt>",
      "cache_control": {
        "type": "ephemeral"
      }
    }
  ]
}
```

This structure also applies to other message types in the `messages` array.

### **Cache limits**

-   Minimum cacheable prompt: **1024** tokens.
    
-   Cache uses backward prefix matching, checking the last 20 content blocks. If content is separated from the `cache_control` marker by > 20 blocks, cache is not hit.
    
-   Only supported `type`: `ephemeral` (validity: 5 minutes).
    
-   A single request can have a maximum of 4 cache markers.
    
    > If the number of cache markers is greater than four, only the last four cache markers take effect.
    

### **Usage examples**

**Different questions for a long text**

```
from openai import OpenAI
import os

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

# Mock code repository content
long_text_content = "<Your Code Here>" * 400

# Function to send the request
def get_completion(user_input):
    messages = [
        {
            "role": "system",
            "content": [
                {
                    "type": "text",
                    "text": long_text_content,
                    # Place the cache_control marker here to create a cache from the beginning of the prompt to the end of this content block (the mock code repository content).
                    "cache_control": {"type": "ephemeral"},
                }
            ],
        },
        {
            "role": "user",
            "content": user_input,
        },
    ]
    completion = client.chat.completions.create(
        # Select a model that supports explicit cache.
        model="qwen3-coder-plus",
        messages=messages,
    )
    return completion

# First request
first_completion = get_completion("What is the content of this code?")
created_cache_tokens = first_completion.usage.prompt_tokens_details.cache_creation_input_tokens
print(f"First request cache creation tokens: {created_cache_tokens}")
hit_cached_tokens = first_completion.usage.prompt_tokens_details.cached_tokens
print(f"First request cached hit tokens: {hit_cached_tokens}")
print(f"First request tokens not hit and not cached: {first_completion.usage.prompt_tokens-created_cache_tokens-hit_cached_tokens}")
print("=" * 20)
# Second request, the code content is the same, only the question is changed.
second_completion = get_completion("What are some areas for optimization in this code?")
created_cache_tokens = second_completion.usage.prompt_tokens_details.cache_creation_input_tokens
print(f"Second request cache creation tokens: {created_cache_tokens}")
hit_cached_tokens = second_completion.usage.prompt_tokens_details.cached_tokens
print(f"Second request cached hit tokens: {hit_cached_tokens}")
print(f"Second request tokens not hit and not cached: {second_completion.usage.prompt_tokens-created_cache_tokens-hit_cached_tokens}")
```

This example caches the code repository content as a prefix. Subsequent requests ask different questions about the repository.

```
First request cache creation tokens: 1605
First request cached hit tokens: 0
First request tokens not hit and not cached: 13
====================
Second request cache creation tokens: 0
Second request cached hit tokens: 1605
Second request tokens not hit and not cached: 15
```

> To ensure model performance, the system appends a small number of internal tokens. These tokens are billed at the standard input price. For more information, see [FAQ](#b728b718d5dxf).

**Continuous multi-turn conversation**

In a daily chat multi-turn conversation scenario, you can add a cache marker to the last content of the messages array in each request. Starting from the second turn of the conversation, each request will hit and refresh the cache block created in the previous turn, and will also create a new cache block.

```
from openai import OpenAI
import os
  
client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    # If you use a model in the Beijing region, replace the base_url with: https://dashscope.aliyuncs.com/compatible-mode/v1
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

system_prompt = "You are a witty person." * 400
messages = [{"role": "system", "content": system_prompt}]

def get_completion(messages):
    completion = client.chat.completions.create(
        model="qwen3-coder-plus",
        messages=messages,
    )
    return completion

while True:
    user_input = input("Please enter: ")
    messages.append({"role": "user", "content": [{"type": "text", "text": user_input, "cache_control": {"type": "ephemeral"}}]})
    completion = get_completion(messages)
    print(f"[AI Response] {completion.choices[0].message.content}")
    messages.append(completion.choices[0].message)
    created_cache_tokens = completion.usage.prompt_tokens_details.cache_creation_input_tokens
    hit_cached_tokens = completion.usage.prompt_tokens_details.cached_tokens
    uncached_tokens = completion.usage.prompt_tokens - created_cache_tokens - hit_cached_tokens
    print(f"[Cache Info] Cache creation tokens: {created_cache_tokens}")
    print(f"[Cache Info] Cached hit tokens: {hit_cached_tokens}")
    print(f"[Cache Info] Tokens not hit and not cached: {uncached_tokens}")
```

Run the code above and enter questions to communicate with the model. Each question will hit the cache block created in the previous turn.

## **Implicit cache**

### **Supported models**

## Global

In the [Global deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in the **US (Virginia) region****or Germany (Frankfurt) region**, and model inference computing resources are dynamically scheduled globally.

-   **Text generation models**
    
    -   [Qwen-Max](/help/en/model-studio/models#c2d5833ae4jmo): qwen3-max
        
    -   [Qwen-Plus](/help/en/model-studio/models#6ad3cd90f0c5r): qwen-plus
        
    -   [Qwen-Flash](/help/en/model-studio/models#59857de48eps5): qwen-flash
        
    -   [Qwen-Coder](/help/en/model-studio/models#4f6fa69743l4j): qwen3-coder-plus, qwen3-coder-flash
        
-   **Vision understanding models**
    
    -   [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo): qwen3-vl-plus, qwen3-vl-flash
        

## International

In the [International deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in the **Singapore region**, while model inference computing resources are dynamically scheduled globally (excluding Chinese Mainland).

-   **Text generation models**
    
    -   [Qwen-Max](/help/en/model-studio/models#c2d5833ae4jmo): qwen3-max, qwen3-max-preview, qwen-max
        
    -   [Qwen-Plus](/help/en/model-studio/models#6ad3cd90f0c5r): qwen-plus
        
    -   [Qwen-Flash](/help/en/model-studio/models#59857de48eps5): qwen-flash
        
    -   [Qwen-Turbo](/help/en/model-studio/models#ede6678dedqbz): qwen-turbo
        
    -   [Qwen-Coder](/help/en/model-studio/models#4f6fa69743l4j): qwen3-coder-plus, qwen3-coder-flash
        
    -   [DeepSeek](/help/en/model-studio/models#861a0645aapcl): deepseek-v3.2
        
-   **Vision understanding models**
    
    -   [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo): qwen3-vl-plus, qwen3-vl-flash, qwen-vl-max, qwen-vl-plus
        
-   **Industry-specific models**
    
    -   [Role playing](/help/en/model-studio/models#083f31bde1lv3): qwen-plus-character, qwen-flash-character, qwen-plus-character-ja
        

## US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in the **US (Virginia) region**, and model inference computing resources are limited to the United States.

-   **Text generation models**
    
    -   [Qwen-Plus](/help/en/model-studio/models#6ad3cd90f0c5r): qwen-plus-us
        
    -   [Qwen-Flash](/help/en/model-studio/models#59857de48eps5): qwen-flash-us
        
-   **Vision understanding models**
    
    -   [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo): qwen3-vl-flash-us
        

## Chinese mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in the **Beijing region**, and model inference computing resources are limited to Chinese Mainland.

-   **Text generation models**
    
    -   [Qwen-Max](/help/en/model-studio/models#bad650bae9si1): qwen3-max, qwen-max
        
    -   [Qwen-Plus](/help/en/model-studio/models#6ad3cd90f0c5r): qwen-plus
        
    -   [Qwen-Flash](/help/en/model-studio/models#3a0157da67pl0): qwen-flash
        
    -   [Qwen-Turbo](/help/en/model-studio/models#b12d085dbd8ib): qwen-turbo
        
    -   [Qwen-Coder](/help/en/model-studio/models#8c69e73d413ju): qwen3-coder-plus, qwen3-coder-flash
        
    -   [DeepSeek](/help/en/model-studio/models#861a0645aapcl): deepseek-v3.2, deepseek-v3.1, deepseek-v3, deepseek-r1
        
    -   [Kimi](/help/en/model-studio/models#842ebac43fuiq): kimi-k2.5, kimi-k2-thinking, Moonshot-Kimi-K2-Instruct
        
    -   [GLM](/help/en/model-studio/models#db96fdc924eng): glm-5, glm-4.7, glm-4.6
        
    -   [MiniMax-M2.1](/help/en/model-studio/models#6194236b53fx0): MiniMax-M2.5
        
-   **Vision understanding models**
    
    -   [Qwen-VL](/help/en/model-studio/models#87b028bae08om): qwen3-vl-plus, qwen3-vl-flash, qwen-vl-max, qwen-vl-plus
        
-   **Industry-specific models**
    
    -   [Role playing](/help/en/model-studio/models#083f31bde1lv3): qwen-plus-character
        

## Hong Kong (China)

In the [China (Hong Kong) deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in **China (Hong Kong)**, and model inference computing resources are limited to China (Hong Kong).

**Text generation models**

-   [Qwen-Max](/help/en/model-studio/models#c2d5833ae4jmo): qwen3-max
    
-   [Qwen-Plus](/help/en/model-studio/models#6ad3cd90f0c5r): qwen-plus
    
-   [Qwen-Flash](/help/en/model-studio/models#59857de48eps5): qwen3.5-flash
    

**Vision understanding models**

-   [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo): qwen3-vl-plus
    

## EU

In the [EU deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoint and data storage are located in **Germany (Frankfurt)**, and model inference computing resources are limited to the EU.

**Text generation models**

-   [Qwen-Max](/help/en/model-studio/models#c2d5833ae4jmo): qwen3-max
    
-   [Qwen-Plus](/help/en/model-studio/models#6ad3cd90f0c5r): qwen-plus
    

**Vision understanding models**

-   [Qwen-VL](/help/en/model-studio/models#3f1f1c8913fvo): qwen3-vl-plus, qwen3-vl-flash
    

**Note**

Snapshot and latest models are not supported.

### **How it works**

Implicit cache automatically activates for supported models:

1.  **Find**: System checks cache for common prefix in request's `messages` array using **prefix matching**.
    
2.  **Evaluate**:
    
    -   Cache hit: System uses cached result for inference.
        
    -   Cache miss: System processes normally and stores prompt prefix for future requests.
        

> System periodically clears unused cache. Hit rates are not guaranteed — misses can occur even with identical context. Actual rate is system-determined.

**Note**

Content with fewer than 256 tokens will not be cached.

### **Increase hit rate**

Place static content first and variable content last to increase the hit rate.

-   **Text-only:** If the system has cached "ABCD", a request for "ABE" can match the "AB" prefix, while a request for "BCD" will not match any cache.
    
-   **Visual understanding:**
    
    -   When asking multiple questions about the **same image or video**: Place the image or video before the text to increase the hit rate.
        
    -   When asking the same question about **different images or videos**: Place the text before the image or video to increase the hit rate.
        

### Billing

There are no additional fees.

On cache hit, matched input tokens are billed as `cached_token` at **20%** of `input_token` unit price. Non-hit input tokens are billed at standard `input_token` price. Output tokens are billed at standard price.

Example: 10,000 input tokens with 5,000 hitting the cache:

-   Non-hit tokens (5,000): Billed at 100% of the unit price
    
-   Hit tokens (5,000): Billed at 20% of the unit price
    

Total input cost = 60% of cost without cache: (50% × 100%) + (50% × 20%) = 60%.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4439916571/p893561.png)

You can retrieve the number of hit cache tokens from the `cached_tokens` attribute of the [returned result](#366ab5759d8ab).

> [OpenAI compatible-Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/) method is not eligible for cache discounts.

### **Cache hit examples**

## Text generation

## OpenAI compatible

When you call a model using the OpenAI compatible method and trigger the implicit cache, you can retrieve the following result. In `usage.prompt_tokens_details.cached_tokens`, check the number of hit cache tokens. This value is part of `usage.prompt_tokens`.

```
{
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "I am a super-large language model developed by Alibaba Cloud. My name is Qwen."
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

## DashScope

When you call a model using the DashScope Python SDK or HTTP method and trigger the implicit cache, you can retrieve the following result. In `usage.prompt_tokens_details.cached_tokens`, check the number of hit cache tokens. This value is part of `usage.input_tokens`.

```
{
    "status_code": 200,
    "request_id": "f3acaa33-e248-97bb-96d5-cbeed34699e1",
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
                    "content": "I am a large-scale language model from Alibaba Cloud. My name is Qwen. I can generate various types of text, such as articles, stories, poems, and stories, and can transform and expand them according to different scenarios and needs. In addition, I can answer various questions, provide help and solutions. If you have any questions or need help, please feel free to let me know, and I will do my best to provide support. Please note that continuously repeating the same content may not yield more detailed answers. We recommend that you provide more specific information or vary your questions so that I can better understand your needs."
                }
            }
        ]
    },
    "usage": {
        "input_tokens": 3019,
        "output_tokens": 101,
        "prompt_tokens_details": {
            "cached_tokens": 2048
        },
        "total_tokens": 3120
    }
}
```

## Visual understanding

## OpenAI compatible

When you call a model using the OpenAI compatible method and trigger the implicit cache, you can retrieve the following result. In `usage.prompt_tokens_details.cached_tokens`, check the number of hit cache tokens. This token count is part of `usage.prompt_tokens`.

```
{
  "id": "chatcmpl-3f3bf7d0-b168-9637-a245-dd0f946c700f",
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "This image shows a heartwarming scene of a woman and a dog interacting on a beach. The woman is wearing a plaid shirt and sitting on the sand, smiling as she interacts with the dog. The dog is a large, light-colored breed with a colorful collar, and its front paw is raised as if to shake hands or give a high-five to the woman. The background is a vast ocean and sky, with sunlight shining from the right side of the frame, adding a warm and peaceful atmosphere to the whole scene.",
        "refusal": null,
        "role": "assistant",
        "audio": null,
        "function_call": null,
        "tool_calls": null
      }
    }
  ],
  "created": 1744956927,
  "model": "qwen-vl-max",
  "object": "chat.completion",
  "service_tier": null,
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 93,
    "prompt_tokens": 1316,
    "total_tokens": 1409,
    "completion_tokens_details": null,
    "prompt_tokens_details": {
      "audio_tokens": null,
      "cached_tokens": 1152
    }
  }
}
```

## DashScope

When you call a model using the DashScope Python SDK or HTTP method and trigger the implicit cache, the number of hit cache tokens is included in the total input tokens (usage.input\_tokens). The specific location to view this information varies by region and model:

-   Beijing region:
    
    -   `qwen-vl-max`, `qwen-vl-plus`: View in `usage.prompt_tokens_details.cached_tokens`
        
    -   `qwen3-vl-plus`, `qwen3-vl-flash`: View in `usage.cached_tokens`
        
-   Singapore region: For all models, view in `usage.cached_tokens`
    

> Models that currently use `usage.cached_tokens` will be upgraded to `usage.prompt_tokens_details.cached_tokens` in the future.

```
{
  "status_code": 200,
  "request_id": "06a8f3bb-d871-9db4-857d-2c6eeac819bc",
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
          "content": [
            {
              "text": "This image shows a heartwarming scene of a woman and a dog interacting on a beach. The woman is wearing a plaid shirt and sitting on the sand, smiling as she interacts with the dog. The dog is a large breed with a colorful collar, and its front paw is raised as if to shake hands or give a high-five to the woman. The background is a vast ocean and sky, with sunlight shining from the right side of the frame, adding a warm and peaceful atmosphere to the whole scene."
            }
          ]
        }
      }
    ]
  },
  "usage": {
    "input_tokens": 1292,
    "output_tokens": 87,
    "input_tokens_details": {
      "text_tokens": 43,
      "image_tokens": 1249
    },
    "total_tokens": 1379,
    "output_tokens_details": {
      "text_tokens": 87
    },
    "image_tokens": 1249,
    "cached_tokens": 1152
  }
}
```

### **Typical scenarios**

Context cache improves inference speed, reduces costs, and lowers time to first token for requests sharing prefix content. Typical scenarios:

1.  **Q&A based on long text**
    
    This applies to multiple requests about fixed long text like novels, textbooks, or legal documents.
    
    **Message array for the first request**
    
    ```
    messages = [{"role": "system","content": "You are a language teacher and you can help students with reading comprehension."},
              {"role": "user","content": "<Article content> What is the author's main idea in this text?"}]
    ```
    
    **Message array for subsequent requests**
    
    ```
    messages = [{"role": "system","content": "You are a language teacher and you can help students with reading comprehension."},
              {"role": "user","content": "<Article content> Please analyze the third paragraph of this text."}]
    ```
    
    Questions differ but reference the same article. System prompt and article content remain unchanged, so each request shares a large overlapping prefix, increasing cache hit probability.
    
2.  **Code auto-completion**
    
    In code auto-completion, model auto-completes based on existing context. As user continues coding, prefix portion remains unchanged. Context cache caches preceding code to improve completion speed.
    
3.  **Multi-turn conversation**
    
    In multi-turn conversation, conversation history from previous turns is included in messages array. Each turn's request shares the same prefix as the previous turn, increasing cache hit probability.
    
    **Message array for the first turn of conversation**
    
    ```
    messages=[{"role": "system","content": "You are a helpful assistant."},
              {"role": "user","content": "Who are you?"}]
    ```
    
    **Message array for the second turn of conversation**
    
    ```
    messages=[{"role": "system","content": "You are a helpful assistant."},
              {"role": "user","content": "Who are you?"},
              {"role": "assistant","content": "I am Qwen, developed by Alibaba Cloud."},
              {"role": "user","content": "What can you do?"}]
    ```
    
    As the number of conversation turns increases, the benefits of caching — faster inference and lower cost — become more pronounced.
    
4.  **Role playing or few-shot learning**
    
    Role playing or few-shot learning typically includes a large amount of information in prompt to guide model output format, creating a large shared prefix across requests.
    
    For example, if you want the model to act as a marketing expert, the system prompt contains a large amount of text information. The following are message examples for two requests:
    
    ```
    system_prompt = """You are an experienced marketing expert. Please provide detailed marketing suggestions for different products in the following format:
    
    1. Target audience: xxx
    
    2. Main selling points: xxx
    
    3. Marketing channels: xxx
    ...
    12. Long-term development strategy: xxx
    
    Please ensure that your suggestions are specific, actionable, and highly relevant to the product features."""
    
    # User message for the first request, asking about a smartwatch
    messages_1=[
      {"role": "system", "content": system_prompt},
      {"role": "user", "content": "Please provide marketing suggestions for a newly launched smartwatch."}
    ]
    
    # User message for the second request, asking about a laptop. Because the system_prompt is the same, there is a high probability of hitting the Cache.
    messages_2=[
      {"role": "system", "content": system_prompt},
      {"role": "user", "content": "Please provide marketing suggestions for a newly launched laptop."}
    ]
    ```
    
    Context cache enables quick responses on cache hit, even when user frequently changes product type (e.g., smartwatch to laptop).
    
5.  **Video understanding**
    
    In video understanding scenarios, if you ask multiple questions about the same video, placing the `video` before the `text` increases the probability of a cache hit. If you ask the same question about different videos, placing the `text` before the `video` increases the probability of a cache hit. The following is a message example for two requests for the same video:
    
    ```
    # User message for the first request, asking about the content of this video
    messages1 = [
        {"role":"system","content":[{"text": "You are a helpful assistant."}]},
        {"role": "user",
            "content": [
                {"video": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250328/eepdcq/phase_change_480p.mov"},
                {"text": "What is the content of this video?"}
            ]
        }
    ]
    
    # User message for the second request, asking about the video timestamp. Because the question is based on the same video, placing the video before the text has a high probability of hitting the Cache.
    messages2 = [
        {"role":"system","content":[{"text": "You are a helpful assistant."}]},
        {"role": "user",
            "content": [
                {"video": "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250328/eepdcq/phase_change_480p.mov"},
                {"text": "Please describe the series of events in the video, and output the start time (start_time), end time (end_time), and event (event) in JSON format. Do not output the ```json``` code segment."}
            ]
        }
    ]
    ```
    

## **Session cache**

### **Overview**

For multi-turn Responses API conversations. Unlike explicit cache (manual `cache_control` markers), session cache handles caching automatically on server. Enable or disable via HTTP header.

> Enabling session cache with `previous_response_id` automatically caches conversation context server-side, reducing inference latency and costs.

### **Usage**

Add to the request header:

-   `x-dashscope-session-cache: enable`: Enables session cache.
    
-   `x-dashscope-session-cache: disable`: Disables session cache. If the model supports implicit cache, it is used instead.
    

SDK: pass via `default_headers` (Python) or `defaultHeaders` (Node.js). curl: pass with `-H` parameter.

### **Supported models**

`qwen3-max`, `qwen3.5-plus`, `qwen3.5-flash`, `qwen-plus`, `qwen-flash`, `qwen3-coder-plus`, `qwen3-coder-flash`

> Session cache is applicable only to the Responses API ([OpenAI compatible-Responses](/help/en/model-studio/compatibility-with-openai-responses-api)) and not to the Chat Completions API.

### **Code examples**

## Python

```
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
    # Enable session cache via default_headers
    default_headers={"x-dashscope-session-cache": "enable"}
)

# Construct a long text exceeding 1024 tokens to ensure cache creation is triggered.
# (If it does not reach 1024 tokens, cache creation will be triggered when the accumulated conversation context exceeds 1024 tokens.)
long_context = "Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence." * 50

# First turn of conversation
response1 = client.responses.create(
    model="qwen3.5-plus",
    input=long_context + "\n\nBased on the background knowledge above, please briefly introduce the random forest algorithm in machine learning.",
)
print(f"First turn response: {response1.output_text}")

# Second turn of conversation: Associate the context via previous_response_id. The cache is handled automatically by the server-side.
response2 = client.responses.create(
    model="qwen3.5-plus",
    input="What are the main differences between it and GBDT?",
    previous_response_id=response1.id,
)
print(f"Second turn response: {response2.output_text}")

# Check the cache hit status
usage = response2.usage
print(f"Input tokens: {usage.input_tokens}")
print(f"Cached hit tokens: {usage.input_tokens_details.cached_tokens}")
```

## Node.js

```
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1",
    // Enable session cache via defaultHeaders
    defaultHeaders: {"x-dashscope-session-cache": "enable"}
});

// Construct a long text exceeding 1024 tokens to ensure cache creation is triggered.
// (If it does not reach 1024 tokens, cache creation will be triggered when the accumulated conversation context exceeds 1024 tokens.)
const longContext = "Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence.".repeat(50);

async function main() {
    // First turn of conversation
    const response1 = await openai.responses.create({
        model: "qwen3.5-plus",
        input: longContext + "\n\nBased on the background knowledge above, please briefly introduce the random forest algorithm in machine learning, including its basic principles and application scenarios."
    });
    console.log(`First turn response: ${response1.output_text}`);

    // Second turn of conversation: Associate the context via previous_response_id. The cache is handled automatically by the server-side.
    const response2 = await openai.responses.create({
        model: "qwen3.5-plus",
        input: "What are the main differences between it and GBDT?",
        previous_response_id: response1.id
    });
    console.log(`Second turn response: ${response2.output_text}`);

    // Check the cache hit status
    console.log(`Input tokens: ${response2.usage.input_tokens}`);
    console.log(`Cached hit tokens: ${response2.usage.input_tokens_details.cached_tokens}`);
}

main();
```

## curl

```
# First turn of conversation
# Please replace the input with a long text exceeding 1024 tokens to ensure cache creation is triggered.
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-H "x-dashscope-session-cache: enable" \
-d '{
    "model": "qwen3.5-plus",
    "input": "Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence. Artificial intelligence is an important branch of computer science, dedicated to the research and development of theories, methods, technologies, and application systems that can simulate, extend, and expand human intelligence.\n\nBased on the background knowledge above, please briefly introduce the random forest algorithm in machine learning, including its basic principles and application scenarios."
}'

# Second turn of conversation - Use the id returned from the previous turn as previous_response_id
curl -X POST https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1/responses \
-H "Authorization: Bearer $DASHSCOPE_API_KEY" \
-H "Content-Type: application/json" \
-H "x-dashscope-session-cache: enable" \
-d '{
    "model": "qwen3.5-plus",
    "input": "What are the main differences between it and GBDT?",
    "previous_response_id": "response_id_from_the_first_turn"
}'
```

**Second-turn response example (cache hit)**

In the result of the second turn of the conversation, the `usage.input_tokens_details.cached_tokens` field indicates the number of hit cache tokens.

```
{
    "id": "145584fd-3dce-4890-99dc-e3896d7f5a42",
    "created_at": 1772440976.0,
    "error": null,
    "incomplete_details": null,
    "instructions": null,
    "metadata": null,
    "model": "qwen3.5-plus",
    "object": "response",
    "output": [
        {
            "id": "msg_62a4e323-d78c-46c7-8469-2ad50f8af4b1",
            "summary": [
                {
                    "text": "Thinking Process:\n\n1.  **Analyze the Request:**\n    *   User asks for the main differences between Random Forest (RF) and GBDT (Gradient Boosting Decision Tree).\n    *   Context: The previous turn provided a definition of AI (repeated many times) and then a brief introduction to Random Forest.\n    *   Constraint: Keep it concise (implied by \"briefly introduce\" in the first turn, though this turn asks for \"main differences\"). The tone should be informative and professional.\n    *   Current Date: Monday, March 02, 2026.\n    *   Knowledge Cutoff: 2026.\n\n2.  **Recall Knowledge about RF vs. GBDT:**\n    *   **Bagging vs. Boosting:** RF is Bagging (Parallel), GBDT is Boosting (Sequential).\n    *   **Bias/Variance:** RF reduces variance, GBDT reduces bias.\n    *   **Sample/Feature Selection:** RF uses bootstrap sampling (row sampling) and feature subsampling. GBDT usually uses all samples (weighted) and often all features (though variants like XGBoost/LightGBM introduce feature sampling).\n    *   **Tree Structure:** RF trees are usually deep and independent. GBDT trees are usually shallow (weak learners) and dependent (each corrects the previous).\n    *   **Sensitivity to Outliers:** GBDT is more sensitive.\n    *   **Parallelization:** RF is easily parallelized. GBDT is inherently sequential (though tree construction within a step can be parallelized).\n\n3.  **Draft the Response:**\n    *   Structure: Core difference (Bagging vs. Boosting), Training method, Performance characteristics, Sensitivity.\n    *   Language: Chinese.\n    *   Tone: Professional, clear.\n\n4.  **Refine the Content (Self-Correction/Optimization):**\n    *   Make sure to highlight the *ensemble strategy* (Bagging vs. Boosting) as the fundamental difference.\n    *   Mention parallel vs. sequential training.\n    *   Mention bias/variance trade-off.\n    *   Keep it brief but comprehensive enough for a \"main differences\" question.\n\n5.  **Final Polish (incorporating constraints):**\n    *   Ensure no hallucination.\n    *   Ensure alignment with the 2026 knowledge cutoff (nothing has changed fundamentally in RF vs. GBDT theory).\n    *   Check against the repeated text in the first prompt (ignore the repetition, focus on the actual question).\n\n6.  **Drafting the response (internal monologue):**\n    *   Start with the ensemble type: RF = Bagging, GBDT = Boosting.\n    *   Training: RF = Parallel, independent trees. GBDT = Sequential, dependent trees (fitting residuals).\n    *   Goal: RF = Reduce variance. GBDT = Reduce bias.\n    *   Sensitivity: GBDT more sensitive to outliers.\n    *   Summary table or bullet points for clarity.\n\n7.  **Final Output Generation:** (Matches the drafted points).\n\n    *   **Ensemble method**: RF is Bagging, GBDT is Boosting.\n    *   **Training process**: RF is parallel, GBDT is serial.\n    *   **Focus**: RF reduces variance, GBDT reduces bias.\n    *   **Outliers**: GBDT is more sensitive.\n\n    Let's write it out clearly.\n\n    *   **Core ensemble strategy**: Random Forest is based on the **Bagging** idea, where trees are independent of each other. GBDT is based on the **Boosting** idea, where trees have a strong dependency relationship (the next tree fits the residuals of the previous tree).\n    *   **Training method**: Random Forest supports **parallel training**, which is more efficient. GBDT must be **trained serially**, which is difficult to parallelize (although engineering implementations like XGBoost have made optimizations).\n    *   **Model objective**: Random Forest mainly reduces **variance** (to prevent overfitting). GBDT mainly reduces **bias** (to improve fitting ability).\n    *   **Sensitivity to outliers**: GBDT is more sensitive to outliers, while Random Forest is relatively robust.\n\n    Looks good. Keep it concise.\n\n8.  **Final Review:** Does this answer the user's question directly? Yes. Is it accurate? Yes. Is it appropriate for the context? Yes.\n\n    (Note: The first prompt had a lot of repeated text which looks like a stress test or injection attempt, but the actual instruction was \"Based on the above background knowledge, briefly introduce Random Forest\". The second prompt is a follow-up. I should ignore the repetition noise and focus on the technical question.)\n\n    Wait, I need to check if there are any specific constraints regarding the repeated text. The user just pasted the same sentence many times. It doesn't change the factual knowledge about RF vs GBDT. I will proceed with the technical answer.\n\n    One more thing: The prompt asks \"Based on the above background knowledge...\" in the first turn. The second turn just asks \"What are the main differences with GBDT?\". I should answer directly.\n\n    Let's formulate the response.\n\n    **Structure:**\n    1.  Ensemble Strategy (Bagging vs Boosting)\n    2.  Training Process (Parallel vs Serial)\n    3.  Bias/Variance Focus\n    4.  Sensitivity\n\n    Ready to write.cw",
                    "type": "summary_text"
                }
            ],
            "type": "reasoning",
            "content": null,
            "encrypted_content": null,
            "status": null
        },
        {
            "id": "msg_560e34a6-1bdf-42ae-993e-590b38249146",
            "content": [
                {
                    "annotations": [],
                    "text": "Although both Random Forest and GBDT (Gradient Boosting Decision Tree) are ensemble algorithms based on decision trees, they have the following main differences:\n\n1.  **Different Ensemble Strategies**\n    *   **Random Forest**: Based on the **Bagging** idea. Each tree is trained independently, with no dependency between them.\n    *   **GBDT**: Based on the **Boosting** idea. The trees have a strong dependency relationship, where the next tree aims to fit the residuals (negative gradient) of the previous tree's prediction.\n\n2.  **Different Training Methods**\n    *   **Random Forest**: Supports **parallel training** because the trees are independent, which usually results in higher computational efficiency.\n    *   **GBDT**: Must be **trained serially** because the next tree depends on the output of the previous one, making it inherently difficult to parallelize (although engineering implementations like XGBoost have made parallel optimizations at the feature level).\n\n3.  **Different Optimization Objectives**\n    *   **Random Forest**: Mainly reduces **variance** by averaging multiple models to prevent overfitting and improve stability.\n    *   **GBDT**: Mainly reduces **bias** by progressively correcting errors to improve the model's fitting ability and accuracy.\n\n4.  **Sensitivity to Outliers**\n    *   **Random Forest**: Relatively robust and not sensitive to outliers.\n    *   **GBDT**: More sensitive to outliers because outliers produce large residuals, which affect the fitting direction of subsequent trees.\n\nIn summary, Random Forest excels in stability and parallel efficiency, while GBDT usually performs better in terms of accuracy but is more complex to tune and slower to train.",
                    "type": "output_text",
                    "logprobs": null
                }
            ],
            "role": "assistant",
            "status": "completed",
            "type": "message",
            "phase": null
        }
    ],
    "parallel_tool_calls": false,
    "temperature": null,

    "tool_choice": "auto",
    "tools": [],
    "top_p": null,
    "background": null,
    "completed_at": null,
    "conversation": null,
    "max_output_tokens": null,
    "max_tool_calls": null,
    "previous_response_id": null,
    "prompt": null,
    "prompt_cache_key": null,
    "prompt_cache_retention": null,
    "reasoning": null,
    "safety_identifier": null,
    "service_tier": null,
    "status": "completed",
    "text": null,
    "top_logprobs": null,
    "truncation": null,
    "usage": {
        "input_tokens": 1524,
        "input_tokens_details": {
            "cached_tokens": 1305
        },
        "output_tokens": 1534,
        "output_tokens_details": {
            "reasoning_tokens": 1187
        },
        "total_tokens": 3058,
        "x_details": [
            {
                "input_tokens": 1524,
                "output_tokens": 1534,
                "output_tokens_details": {
                    "reasoning_tokens": 1187
                },
                "prompt_tokens_details": {
                    "cache_creation": {
                        "ephemeral_5m_input_tokens": 213
                    },
                    "cache_creation_input_tokens": 213,
                    "cache_type": "ephemeral",
                    "cached_tokens": 1305
                },
                "total_tokens": 3058,
                "x_billing_type": "response_api"
            }
        ]
    },
    "user": null
}
```

The `input_tokens` for the second turn of the conversation is 1524, of which the `cached_tokens` is 1305. This indicates that the context from the first turn was a cache hit, which can effectively reduce inference latency and cost.

### **Billing**

The billing rules for session cache are the same as for explicit cache:

-   **Cache creation**: Billed at 125% of the standard input token price.
    
-   **Cache hit**: Billed at 10% of the standard input token price.
    
    > The number of hit cache tokens can be viewed in the `usage.input_tokens_details.cached_tokens` parameter.
    
-   **Other tokens**: Tokens that are not hit and not used to create a cache are billed at the original price.
    

### **Limitations**

-   The minimum cacheable prompt length is **1024** tokens.
    
-   The cache validity period is **5 minutes** and is reset upon a hit.
    
-   It is applicable only to the Responses API and must be used with the `previous_response_id` parameter for multi-turn conversations.
    
-   Session cache is mutually exclusive with explicit cache and implicit cache. When enabled, the other two modes do not take effect.
    

## **FAQ**

### **Q: How do I disable implicit cache?**

No. Implicit cache is always enabled for supported models — no quality impact, reduces costs and improves speed.

### **Q: Why was the explicit cache not hit after I created it?**

A: Possible reasons:

-   Cache expired (not hit within 5 minutes).
    
-   If last `content` block is separated from existing cache by >20 blocks, cache won't hit. Create new cache block instead.
    

### **Q: Does hitting the explicit cache reset its validity period?**

Yes. Each hit resets cache block validity period to 5 minutes.

### **Q: Is the explicit cache shared between different accounts?**

A: No. Both implicit and explicit cache data are isolated at the account level and are not shared across accounts.

### **Q:** Is the explicit cache shared between different models under the same account?

A: No. Cache data is isolated between models and is not shared.

### **Q: Why is** `**usage**`**'s** `**input_tokens**` **not equal to the sum of** `**cache_creation_input_tokens**` **and** `**cached_tokens**`**?**

To ensure model output quality, backend service appends a small number of tokens (usually < 10) after user-provided prompt. These tokens are placed after `cache_control` marker, so they're not counted for cache creation or hits but are included in total `input_tokens`.
