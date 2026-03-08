### Shell tool

Expose a persistent shell session to agents for command execution. Shell tool middleware is useful for the following:

- Agents that need to execute system commands
- Development and deployment automation tasks
- Testing and validation workflows
- File system operations and script execution

  **Security consideration**: Use appropriate execution policies (`HostExecutionPolicy`, `DockerExecutionPolicy`, or `CodexSandboxExecutionPolicy`) to match your deployment's security requirements.

  **Limitation**: Persistent shell sessions do not currently work with interrupts (human-in-the-loop). We anticipate adding support for this in the future.

**API reference:** [`ShellToolMiddleware`](https://reference.langchain.com/python/langchain/agents/middleware/shell_tool/ShellToolMiddleware)

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import (
    ShellToolMiddleware,
    HostExecutionPolicy,
)

agent = create_agent(
    model="gpt-4.1",
    tools=[search_tool],
    middleware=[
        ShellToolMiddleware(
            workspace_root="/workspace",
            execution_policy=HostExecutionPolicy(),
        ),
    ],
)
```

```
Base directory for the shell session. If omitted, a temporary directory is created when the agent starts and removed when it ends.



Optional commands executed sequentially after the session starts



Optional commands executed before the session shuts down



Execution policy controlling timeouts, output limits, and resource configuration. Options:

* `HostExecutionPolicy` - Full host access (default); best for trusted environments where the agent already runs inside a container or VM
* `DockerExecutionPolicy` - Launches a separate Docker container for each agent run, providing harder isolation
* `CodexSandboxExecutionPolicy` - Reuses the Codex CLI sandbox for additional syscall/filesystem restrictions



Optional redaction rules to sanitize command output before returning it to the model.


  Redaction rules are applied post execution and do not prevent exfiltration of secrets or sensitive data when using `HostExecutionPolicy`.




Optional override for the registered shell tool description



Optional shell executable (string) or argument sequence used to launch the persistent session. Defaults to `/bin/bash`.



Optional environment variables to supply to the shell session. Values are coerced to strings before command execution.
```

The middleware provides a single persistent shell session that agents can use to execute commands sequentially.

**Execution policies:**

- `HostExecutionPolicy` (default) - Native execution with full host access
- `DockerExecutionPolicy` - Isolated Docker container execution
- `CodexSandboxExecutionPolicy` - Sandboxed execution via Codex CLI

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import (
    ShellToolMiddleware,
    HostExecutionPolicy,
    DockerExecutionPolicy,
    RedactionRule,
)


# Basic shell tool with host execution
agent = create_agent(
    model="gpt-4.1",
    tools=[search_tool],
    middleware=[
        ShellToolMiddleware(
            workspace_root="/workspace",
            execution_policy=HostExecutionPolicy(),
        ),
    ],
)

# Docker isolation with startup commands
agent_docker = create_agent(
    model="gpt-4.1",
    tools=[],
    middleware=[
        ShellToolMiddleware(
            workspace_root="/workspace",
            startup_commands=["pip install requests", "export PYTHONPATH=/workspace"],
            execution_policy=DockerExecutionPolicy(
                image="python:3.11-slim",
                command_timeout=60.0,
            ),
        ),
    ],
)

# With output redaction (applied post execution)
agent_redacted = create_agent(
    model="gpt-4.1",
    tools=[],
    middleware=[
        ShellToolMiddleware(
            workspace_root="/workspace",
            redaction_rules=[
                RedactionRule(pii_type="api_key", detector=r"sk-[a-zA-Z0-9]{32}"),
            ],
        ),
    ],
)
```
