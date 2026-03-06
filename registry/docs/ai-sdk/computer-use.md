## Computer Use

Via Anthropic, Amazon Bedrock provides three provider-defined tools that can be used to interact with external systems:

1. **Bash Tool**: Allows running bash commands.
2. **Text Editor Tool**: Provides functionality for viewing and editing text files.
3. **Computer Tool**: Enables control of keyboard and mouse actions on a computer.

They are available via the `tools` property of the provider instance.

### Bash Tool

The Bash Tool allows running bash commands. Here's how to create and use it:

```ts
const bashTool = bedrock.tools.bash_20241022({
  execute: async ({ command, restart }) => {
    // Implement your bash command execution logic here
    // Return the result of the command execution
  },
});
```

Parameters:

- `command` (string): The bash command to run. Required unless the tool is being restarted.
- `restart` (boolean, optional): Specifying true will restart this tool.

### Text Editor Tool

The Text Editor Tool provides functionality for viewing and editing text files.

**For Claude 4 models (Opus & Sonnet):**

```ts
const textEditorTool = bedrock.tools.textEditor_20250429({
  execute: async ({
    command,
    path,
    file_text,
    insert_line,
    new_str,
    insert_text,
    old_str,
    view_range,
  }) => {
    // Implement your text editing logic here
    // Return the result of the text editing operation
  },
});
```

**For Claude 3.5 Sonnet and earlier models:**

```ts
const textEditorTool = bedrock.tools.textEditor_20241022({
  execute: async ({
    command,
    path,
    file_text,
    insert_line,
    new_str,
    insert_text,
    old_str,
    view_range,
  }) => {
    // Implement your text editing logic here
    // Return the result of the text editing operation
  },
});
```

Parameters:

- `command` ('view' | 'create' | 'str_replace' | 'insert' | 'undo_edit'): The command to run. Note: `undo_edit` is only available in Claude 3.5 Sonnet and earlier models.
- `path` (string): Absolute path to file or directory, e.g. `/repo/file.py` or `/repo`.
- `file_text` (string, optional): Required for `create` command, with the content of the file to be created.
- `insert_line` (number, optional): Required for `insert` command. The line number after which to insert the new string.
- `new_str` (string, optional): New string for `str_replace` command.
- `insert_text` (string, optional): Required for `insert` command, containing the text to insert.
- `old_str` (string, optional): Required for `str_replace` command, containing the string to replace.
- `view_range` (number\[], optional): Optional for `view` command to specify line range to show.

When using the Text Editor Tool, make sure to name the key in the tools object correctly:

- **Claude 4 models**: Use `str_replace_based_edit_tool`
- **Claude 3.5 Sonnet and earlier**: Use `str_replace_editor`

```ts
// For Claude 4 models
const response = await generateText({
  model: bedrock("us.anthropic.claude-sonnet-4-20250514-v1:0"),
  prompt:
    "Create a new file called example.txt, write 'Hello World' to it, and run 'cat example.txt' in the terminal",
  tools: {
    str_replace_based_edit_tool: textEditorTool, // Claude 4 tool name
  },
});

// For Claude 3.5 Sonnet and earlier
const response = await generateText({
  model: bedrock("anthropic.claude-3-5-sonnet-20241022-v2:0"),
  prompt:
    "Create a new file called example.txt, write 'Hello World' to it, and run 'cat example.txt' in the terminal",
  tools: {
    str_replace_editor: textEditorTool, // Earlier models tool name
  },
});
```

### Computer Tool

The Computer Tool enables control of keyboard and mouse actions on a computer:

```ts
const computerTool = bedrock.tools.computer_20241022({
  displayWidthPx: 1920,
  displayHeightPx: 1080,
  displayNumber: 0, // Optional, for X11 environments

  execute: async ({ action, coordinate, text }) => {
    // Implement your computer control logic here
    // Return the result of the action

    // Example code:
    switch (action) {
      case "screenshot": {
        // multipart result:
        return {
          type: "image",
          data: fs
            .readFileSync("./data/screenshot-editor.png")
            .toString("base64"),
        };
      }
      default: {
        console.log("Action:", action);
        console.log("Coordinate:", coordinate);
        console.log("Text:", text);
        return `executed ${action}`;
      }
    }
  },

  // map to tool result content for LLM consumption:
  toModelOutput({ output }) {
    return typeof output === "string"
      ? [{ type: "text", text: output }]
      : [{ type: "image", data: output.data, mediaType: "image/png" }];
  },
});
```

Parameters:

- `action` ('key' | 'type' | 'mouse_move' | 'left_click' | 'left_click_drag' | 'right_click' | 'middle_click' | 'double_click' | 'screenshot' | 'cursor_position'): The action to perform.
- `coordinate` (number\[], optional): Required for `mouse_move` and `left_click_drag` actions. Specifies the (x, y) coordinates.
- `text` (string, optional): Required for `type` and `key` actions.

These tools can be used in conjunction with the `anthropic.claude-3-5-sonnet-20240620-v1:0` model to enable more complex interactions and tasks.

### Model Capabilities

| Model                                          | Image Input | Object Generation | Tool Usage | Tool Streaming |
| ---------------------------------------------- | ----------- | ----------------- | ---------- | -------------- |
| `amazon.titan-tg1-large`                       |             |                   |            |                |
| `amazon.titan-text-express-v1`                 |             |                   |            |                |
| `amazon.titan-text-lite-v1`                    |             |                   |            |                |
| `us.amazon.nova-premier-v1:0`                  |             |                   |            |                |
| `us.amazon.nova-pro-v1:0`                      |             |                   |            |                |
| `us.amazon.nova-lite-v1:0`                     |             |                   |            |                |
| `us.amazon.nova-micro-v1:0`                    |             |                   |            |                |
| `anthropic.claude-haiku-4-5-20251001-v1:0`     |             |                   |            |                |
| `anthropic.claude-sonnet-4-20250514-v1:0`      |             |                   |            |                |
| `anthropic.claude-sonnet-4-5-20250929-v1:0`    |             |                   |            |                |
| `anthropic.claude-opus-4-20250514-v1:0`        |             |                   |            |                |
| `anthropic.claude-opus-4-1-20250805-v1:0`      |             |                   |            |                |
| `anthropic.claude-3-5-sonnet-20241022-v2:0`    |             |                   |            |                |
| `anthropic.claude-3-5-sonnet-20240620-v1:0`    |             |                   |            |                |
| `anthropic.claude-3-opus-20240229-v1:0`        |             |                   |            |                |
| `anthropic.claude-3-sonnet-20240229-v1:0`      |             |                   |            |                |
| `anthropic.claude-3-haiku-20240307-v1:0`       |             |                   |            |                |
| `us.anthropic.claude-sonnet-4-20250514-v1:0`   |             |                   |            |                |
| `us.anthropic.claude-sonnet-4-5-20250929-v1:0` |             |                   |            |                |
| `us.anthropic.claude-opus-4-20250514-v1:0`     |             |                   |            |                |
| `us.anthropic.claude-opus-4-1-20250805-v1:0`   |             |                   |            |                |
| `us.anthropic.claude-3-5-sonnet-20241022-v2:0` |             |                   |            |                |
| `us.anthropic.claude-3-5-sonnet-20240620-v1:0` |             |                   |            |                |
| `us.anthropic.claude-3-sonnet-20240229-v1:0`   |             |                   |            |                |
| `us.anthropic.claude-3-opus-20240229-v1:0`     |             |                   |            |                |
| `us.anthropic.claude-3-haiku-20240307-v1:0`    |             |                   |            |                |
| `anthropic.claude-v2`                          |             |                   |            |                |
| `anthropic.claude-v2:1`                        |             |                   |            |                |
| `anthropic.claude-instant-v1`                  |             |                   |            |                |
| `cohere.command-text-v14`                      |             |                   |            |                |
| `cohere.command-light-text-v14`                |             |                   |            |                |
| `cohere.command-r-v1:0`                        |             |                   |            |                |
| `cohere.command-r-plus-v1:0`                   |             |                   |            |                |
| `us.deepseek.r1-v1:0`                          |             |                   |            |                |
| `meta.llama3-8b-instruct-v1:0`                 |             |                   |            |                |
| `meta.llama3-70b-instruct-v1:0`                |             |                   |            |                |
| `meta.llama3-1-8b-instruct-v1:0`               |             |                   |            |                |
| `meta.llama3-1-70b-instruct-v1:0`              |             |                   |            |                |
| `meta.llama3-1-405b-instruct-v1:0`             |             |                   |            |                |
| `meta.llama3-2-1b-instruct-v1:0`               |             |                   |            |                |
| `meta.llama3-2-3b-instruct-v1:0`               |             |                   |            |                |
| `meta.llama3-2-11b-instruct-v1:0`              |             |                   |            |                |
| `meta.llama3-2-90b-instruct-v1:0`              |             |                   |            |                |
| `us.meta.llama3-2-1b-instruct-v1:0`            |             |                   |            |                |
| `us.meta.llama3-2-3b-instruct-v1:0`            |             |                   |            |                |
| `us.meta.llama3-2-11b-instruct-v1:0`           |             |                   |            |                |
| `us.meta.llama3-2-90b-instruct-v1:0`           |             |                   |            |                |
| `us.meta.llama3-1-8b-instruct-v1:0`            |             |                   |            |                |
| `us.meta.llama3-1-70b-instruct-v1:0`           |             |                   |            |                |
| `us.meta.llama3-3-70b-instruct-v1:0`           |             |                   |            |                |
| `us.meta.llama4-scout-17b-instruct-v1:0`       |             |                   |            |                |
| `us.meta.llama4-maverick-17b-instruct-v1:0`    |             |                   |            |                |
| `mistral.mistral-7b-instruct-v0:2`             |             |                   |            |                |
| `mistral.mixtral-8x7b-instruct-v0:1`           |             |                   |            |                |
| `mistral.mistral-large-2402-v1:0`              |             |                   |            |                |
| `mistral.mistral-small-2402-v1:0`              |             |                   |            |                |
| `us.mistral.pixtral-large-2502-v1:0`           |             |                   |            |                |
| `openai.gpt-oss-120b-1:0`                      |             |                   |            |                |
| `openai.gpt-oss-20b-1:0`                       |             |                   |            |                |

The table above lists popular models. Please see the [Amazon Bedrock
docs](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html)
for a full list of available models. You can also pass any available provider
model ID as a string if needed.
