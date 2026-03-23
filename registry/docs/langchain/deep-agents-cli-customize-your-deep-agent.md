## Customize your deep agent

There are two primary ways to customize any agent:

- **Memory**: Global and project-specific `AGENTS.md` files which are loaded in full at session start.
  Use memory for general coding style and preferences.

- **Skills**: Global and project-specific context, conventions, guidelines, or instructions.
  Use skills for context that is only required when performing specific tasks.

### Provide project or user context

[`AGENTS.md` files](https://agents.md/) provide persistent memory that is always loaded at session start.

- **Global**: `~/.deepagents/<agent_name>/AGENTS.md` — loaded every session.
- **Project**: `.deepagents/AGENTS.md` in any git project root — loaded when the CLI is run from within that project.

Both files are appended to the system prompt at startup. Use `/remember` to explicitly prompt the agent to update its memory and skills from the current conversation.

```
The agent may also read its memory files when answering project-specific questions or when you reference past work or patterns.

The agent will update `AGENTS.md` as you provide information on how it should behave, feedback on its work, or instructions to remember something.
It will also update its memory if it identifies patterns or preferences from your interactions.

To add more structured project knowledge in additional memory files, add them in `.deepagents/` and reference them in the `AGENTS.md` file.
You must reference additional files in the `AGENTS.md` file for the agent to be aware of them.
The additional files will not be read on startup but the agent can reference and update them when needed.



**Global `AGENTS.md`** (`~/.deepagents/agent/AGENTS.md`)

* Your personality, style, and universal coding preferences
* General tone and communication style
* Universal coding preferences (formatting, type hints, etc.)
* Tool usage patterns that apply everywhere
* Workflows and methodologies that don't change per-project

**Project `AGENTS.md`** (`.deepagents/AGENTS.md` in project root)

* Project-specific context and conventions
* Project architecture and design patterns
* Coding conventions specific to this codebase
* Testing strategies and deployment processes
* Team guidelines and project structure
```
