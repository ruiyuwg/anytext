### PII detection

Detect and handle Personally Identifiable Information (PII) in conversations using configurable strategies. PII detection is useful for the following:

- Healthcare and financial applications with compliance requirements.
- Customer service agents that need to sanitize logs.
- Any application handling sensitive user data.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, piiMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [],
  middleware: [
    piiMiddleware("email", { strategy: "redact", applyToInput: true }),
    piiMiddleware("credit_card", { strategy: "mask", applyToInput: true }),
  ],
});
```

#### Custom PII types

You can create custom PII types by providing a `detector` parameter. This allows you to detect patterns specific to your use case beyond the built-in types.

**Three ways to create custom detectors:**

1. **Regex pattern string** - Simple pattern matching

2. **RegExp object** - More control over regex flags

3. **Custom function** - Complex detection logic with validation

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, piiMiddleware, type PIIMatch } from "langchain";

// Method 1: Regex pattern string
const agent1 = createAgent({
  model: "gpt-4.1",
  tools: [],
  middleware: [
    piiMiddleware("api_key", {
      detector: "sk-[a-zA-Z0-9]{32}",
      strategy: "block",
    }),
  ],
});

// Method 2: RegExp object
const agent2 = createAgent({
  model: "gpt-4.1",
  tools: [],
  middleware: [
    piiMiddleware("phone_number", {
      detector: /\+?\d{1,3}[\s.-]?\d{3,4}[\s.-]?\d{4}/,
      strategy: "mask",
    }),
  ],
});

// Method 3: Custom detector function
function detectSSN(content: string): PIIMatch[] {
  const matches: PIIMatch[] = [];
  const pattern = /\d{3}-\d{2}-\d{4}/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(content)) !== null) {
    const ssn = match[0];
    // Validate: first 3 digits shouldn't be 000, 666, or 900-999
    const firstThree = parseInt(ssn.substring(0, 3), 10);
    if (firstThree !== 0 && firstThree !== 666 && !(firstThree >= 900 && firstThree <= 999)) {
      matches.push({
        text: ssn,
        start: match.index ?? 0,
        end: (match.index ?? 0) + ssn.length,
      });
    }
  }
  return matches;
}

const agent3 = createAgent({
  model: "gpt-4.1",
  tools: [],
  middleware: [
    piiMiddleware("ssn", {
      detector: detectSSN,
      strategy: "hash",
    }),
  ],
});
```

**Custom detector function signature:**

The detector function must accept a string (content) and return matches:

Returns an array of `PIIMatch` objects:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
interface PIIMatch {
  text: string;    // The matched text
  start: number;   // Start index in content
  end: number;      // End index in content
}

function detector(content: string): PIIMatch[] {
  return [
    { text: "matched_text", start: 0, end: 12 },
    // ... more matches
  ];
}
```

For custom detectors:

- Use regex strings for simple patterns
- Use RegExp objects when you need flags (e.g., case-insensitive matching)
- Use custom functions when you need validation logic beyond pattern matching
- Custom functions give you full control over detection logic and can implement complex validation rules

  Type of PII to detect. Can be a built-in type (`email`, `credit_card`, `ip`, `mac_address`, `url`) or a custom type name.

  How to handle detected PII. Options:

  - `'block'` - Throw error when detected
  - `'redact'` - Replace with `[REDACTED_TYPE]`
  - `'mask'` - Partially mask (e.g., `****-****-****-1234`)
  - `'hash'` - Replace with deterministic hash (e.g., `<email_hash:a1b2c3d4>`)

  Custom detector. Can be:

  - `RegExp` - Regex pattern for matching
  - `string` - Regex pattern string (e.g., `"sk-[a-zA-Z0-9]{32}"`)
  - `function` - Custom detector function `(content: string) => PIIMatch[]`

  If not provided, uses built-in detector for the PII type.

  Check user messages before model call

  Check AI messages after model call

  Check tool result messages after execution

### To-do list

Equip agents with task planning and tracking capabilities for complex multi-step tasks. To-do lists are useful for the following:

- Complex multi-step tasks requiring coordination across multiple tools.
- Long-running operations where progress visibility is important.

  This middleware automatically provides agents with a `write_todos` tool and system prompts to guide effective task planning.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, todoListMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [readFile, writeFile, runTests],
  middleware: [todoListMiddleware()],
});
```

Watch this [video guide](https://www.youtube.com/watch?v=dwvhZ1z_Pas) demonstrating To-do List middleware behavior.

No configuration options available (uses defaults).

### LLM tool selector

Use an LLM to intelligently select relevant tools before calling the main model. LLM tool selectors are useful for the following:

- Agents with many tools (10+) where most aren't relevant per query.
- Reducing token usage by filtering irrelevant tools.
- Improving model focus and accuracy.

This middleware uses structured output to ask an LLM which tools are most relevant for the current query. The structured output schema defines the available tool names and descriptions. Model providers often add this structured output information to the system prompt behind the scenes.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, llmToolSelectorMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [tool1, tool2, tool3, tool4, tool5, ...],
  middleware: [
    llmToolSelectorMiddleware({
      model: "gpt-4.1-mini",
      maxTools: 3,
      alwaysInclude: ["search"],
    }),
  ],
});
```

```
Model for tool selection. Can be a model identifier string (e.g., `'openai:gpt-4.1-mini'`) or a `BaseChatModel` instance. Defaults to the agent's main model.



Instructions for the selection model. Uses built-in prompt if not specified.



Maximum number of tools to select. If the model selects more, only the first maxTools will be used. No limit if not specified.



Tool names to always include regardless of selection. These do not count against the maxTools limit.
```
