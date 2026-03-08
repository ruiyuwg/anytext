Version: Next

On this page

* * *

## Methods[​](#methods "Direct link to Methods")

### dispose[​](#page-agent-dispose "Direct link to dispose")

Added in: v1.58 pageAgent.dispose

Dispose this agent.

**Usage**

```
await pageAgent.dispose();
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-agent-dispose-return)

* * *

### expect[​](#page-agent-expect "Direct link to expect")

Added in: v1.58 pageAgent.expect

Expect certain condition to be met.

**Usage**

```
await agent.expect('"0 items" to be reported');
```

**Arguments**

-   `expectation` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-agent-expect-option-expectation)
    
    Expectation to assert.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `cacheKey` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-agent-expect-option-cache-key)
        
        All the agentic actions are converted to the Playwright calls and are cached. By default, they are cached globally with the `task` as a key. This option allows controlling the cache key explicitly.
        
    -   `maxActionRetries` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-expect-option-max-action-retries)
        
        Maximum number of retries when generating each action, defaults to context-wide value specified in `agent` property.
        
    -   `maxActions` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-expect-option-max-actions)
        
        Maximum number of agentic actions to generate, defaults to context-wide value specified in `agent` property.
        
    -   `maxTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-expect-option-max-tokens)
        
        Maximum number of tokens to consume. The agentic loop will stop after input + output tokens exceed this value. Defaults to context-wide value specified in `agent` property.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-expect-option-timeout)
        
        Expect timeout in milliseconds. Defaults to `5000`. The default value can be changed via `expect.timeout` option in the config, or by specifying the `expect` property of the [expect](/docs/next/api/class-page#page-agent-option-expect) option. Pass `0` to disable timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void")\>[#](#page-agent-expect-return)

* * *

### extract[​](#page-agent-extract "Direct link to extract")

Added in: v1.58 pageAgent.extract

Extract information from the page using the agentic loop, return it in a given Zod format.

**Usage**

```
await agent.extract('List of items in the cart', z.object({  title: z.string().describe('Item title to extract'),  price: z.string().describe('Item price to extract'),}).array());
```

**Arguments**

-   `query` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-agent-extract-option-query)
    
    Task to perform using agentic loop.
    
-   `schema` \[z.ZodSchema\][#](#page-agent-extract-option-schema)
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `cacheKey` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-agent-extract-option-cache-key)
        
        All the agentic actions are converted to the Playwright calls and are cached. By default, they are cached globally with the `task` as a key. This option allows controlling the cache key explicitly.
        
    -   `maxActionRetries` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-extract-option-max-action-retries)
        
        Maximum number of retries when generating each action, defaults to context-wide value specified in `agent` property.
        
    -   `maxActions` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-extract-option-max-actions)
        
        Maximum number of agentic actions to generate, defaults to context-wide value specified in `agent` property.
        
    -   `maxTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-extract-option-max-tokens)
        
        Maximum number of tokens to consume. The agentic loop will stop after input + output tokens exceed this value. Defaults to context-wide value specified in `agent` property.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-extract-option-timeout)
        
        Extract timeout in milliseconds. Defaults to `5000`. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/next/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/next/api/class-page#page-set-default-timeout) methods. Pass `0` to disable timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-agent-extract-return)
    -   `result` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
        
    -   `usage` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
        
        -   `turns` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `inputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `outputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            

* * *

### perform[​](#page-agent-perform "Direct link to perform")

Added in: v1.58 pageAgent.perform

Perform action using agentic loop.

**Usage**

```
await agent.perform('Click submit button');
```

**Arguments**

-   `task` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#page-agent-perform-option-task)
    
    Task to perform using agentic loop.
    
-   `options` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
    
    -   `cacheKey` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") _(optional)_[#](#page-agent-perform-option-cache-key)
        
        All the agentic actions are converted to the Playwright calls and are cached. By default, they are cached globally with the `task` as a key. This option allows controlling the cache key explicitly.
        
    -   `maxActionRetries` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-perform-option-max-action-retries)
        
        Maximum number of retries when generating each action, defaults to context-wide value specified in `agent` property.
        
    -   `maxActions` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-perform-option-max-actions)
        
        Maximum number of agentic actions to generate, defaults to context-wide value specified in `agent` property.
        
    -   `maxTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-perform-option-max-tokens)
        
        Maximum number of tokens to consume. The agentic loop will stop after input + output tokens exceed this value. Defaults to context-wide value specified in `agent` property.
        
    -   `timeout` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#page-agent-perform-option-timeout)
        
        Perform timeout in milliseconds. Defaults to `5000`. The default value can be changed via `actionTimeout` option in the config, or by using the [browserContext.setDefaultTimeout()](/docs/next/api/class-browsercontext#browser-context-set-default-timeout) or [page.setDefaultTimeout()](/docs/next/api/class-page#page-set-default-timeout) methods. Pass `0` to disable timeout.
        

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-agent-perform-return)
    -   `usage` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
        -   `turns` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `inputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `outputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            

* * *

### usage[​](#page-agent-usage "Direct link to usage")

Added in: v1.58 pageAgent.usage

Returns the current token usage for this agent.

**Usage**

```
const usage = await agent.usage();console.log(`Tokens used: ${usage.inputTokens} in, ${usage.outputTokens} out`);
```

**Returns**

-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#page-agent-usage-return)
    -   `turns` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `inputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        
    -   `outputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
        

* * *

## Events[​](#events "Direct link to Events")

### on('turn')[​](#page-agent-event-turn "Direct link to on('turn')")

Added in: v1.58 pageAgent.on('turn')

Emitted when the agent makes a turn.

**Usage**

```
pageAgent.on('turn', data => {});
```

**Event data**

-   [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")
    -   `role` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
    -   `message` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")
        
    -   `usage` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_
        
        -   `inputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
            
        -   `outputTokens` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")
