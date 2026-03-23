## Interactive mode

Type naturally as you would in a chat interface.
The agent will use its built-in tools, skills, and memory to help you with tasks.

````
Use these commands within the CLI session:

* `/model` - Switch models or open the interactive model selector. See [Switch models](#switch-models) for details
* `/remember [context]` - Review conversation and update memory and skills. Optionally pass additional context
* `/offload` - Free up context window space by offloading messages to backend storage with a summary placeholder in the conversation. The agent can retrieve the full history from the offloaded file if needed.
* `/tokens` - Display current context window token usage breakdown
* `/clear` - Clear conversation history and start a new thread
* `/threads` - Browse and resume previous conversation threads
* `/reload` - Refresh runtime configuration (API keys, `.env` changes, shell allow-list) without restarting. Conversation state is preserved
* `/trace` - Open the current thread in LangSmith (requires `LANGSMITH_API_KEY`)
* `/editor` - Open the current prompt in your external editor (`$VISUAL` / `$EDITOR`). See [External editor](/oss/javascript/deepagents/cli/configuration#external-editor)
* `/changelog` - Open the CLI changelog in your browser
* `/docs` - Open the documentation in your browser
* `/feedback` - Open the GitHub issues page to file a bug report or feature request
* `/version` - Show installed `deepagents-cli` and SDK versions
* `/help` - Show help and available commands
* `/quit` - Exit the CLI



Type `!` to enter shell mode, then type your command.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git status
npm test
ls -la
```



**General**

| Shortcut                                              | Action                                      |
| ----------------------------------------------------- | ------------------------------------------- |
| `Enter`                                               | Submit prompt                               |
| `Shift+Enter`, `Ctrl+J`, `Alt+Enter`, or `Ctrl+Enter` | Insert newline                              |
| `Ctrl+A`                                              | Select all text in input                    |
| `@filename`                                           | Auto-complete files and inject content      |
| `Shift+Tab` or `Ctrl+T`                               | Toggle auto-approve                         |
| `Ctrl+U`                                              | Delete the current line                     |
| `Ctrl+X`                                              | Open prompt in external editor              |
| `Ctrl+E`                                              | Expand/collapse the most recent tool output |
| `Escape`                                              | Interrupt current operation                 |
| `Ctrl+C`                                              | Interrupt or quit                           |
| `Ctrl+D`                                              | Exit                                        |
````
