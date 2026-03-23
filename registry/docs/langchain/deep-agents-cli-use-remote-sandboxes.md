## Use remote sandboxes

The CLI uses the [sandbox as tool](/oss/python/deepagents/sandboxes#sandbox-as-tool-pattern) pattern: the CLI process (LLM loop, memory, tool dispatch) runs on your machine, but agent tool calls (`read_file`, `write_file`, `execute`, etc.) target the remote sandbox, not your local filesystem. To get files into the sandbox, use a [setup script](#setup-scripts) or the provider's file transfer APIs (see [Working with files](/oss/python/deepagents/sandboxes#working-with-files)).

For a deeper look at sandbox architecture, integration patterns, and security best practices, see [Sandboxes](/oss/python/deepagents/sandboxes).

LangSmith sandbox support is included with the CLI by default. Modal, Daytona, and Runloop require installing extras.

````
    Included by default when installing `deepagents-cli`. No extra installation needed.
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    uv tool upgrade deepagents-cli --with langchain-daytona
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    uv tool upgrade deepagents-cli --with langchain-runloop
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    uv tool upgrade deepagents-cli --with langchain-modal
    ```
  





  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export LANGSMITH_API_KEY="your-key"
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export DAYTONA_API_KEY="your-key"
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export RUNLOOP_API_KEY="your-key"
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    modal setup
    ```
  





  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    deepagents --sandbox langsmith
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    deepagents --sandbox daytona
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    deepagents --sandbox runloop
    ```
  

  
    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    deepagents --sandbox modal
    ```
  






| Flag                   | Description                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `--sandbox TYPE`       | Sandbox provider to use: `langsmith`, `modal`, `daytona`, or `runloop` (default: `none`)                                                |
| `--sandbox-id ID`      | Reuse an existing sandbox by ID instead of creating a new one. Skips creation and cleanup. Refer to your sandbox documentation for more |
| `--sandbox-setup PATH` | Path to a setup script to run inside the sandbox upon creation                                                                          |

Examples:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Create a new Daytona sandbox
deepagents --sandbox daytona

# Reuse an existing sandbox (skips creation and cleanup)
deepagents --sandbox runloop --sandbox-id dbx_abc123

# Run a setup script after sandbox creation
deepagents --sandbox modal --sandbox-setup ./setup.sh
```



Use `--sandbox-setup` to run a shell script inside the sandbox after creation. This is useful for cloning repos, installing dependencies, and configuring environment variables.

```bash title="setup.sh" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
#!/bin/bash
set -e

# Clone repository using GitHub token
git clone https://x-access-token:${GITHUB_TOKEN}@github.com/username/repo.git $HOME/workspace
cd $HOME/workspace

# Make environment variables persistent
cat >> ~/.bashrc <<'EOF'
export GITHUB_TOKEN="${GITHUB_TOKEN}"
export OPENAI_API_KEY="${OPENAI_API_KEY}"
cd $HOME/workspace
EOF
source ~/.bashrc
```

The CLI expands `${VAR}` references in setup scripts using your local environment variables. Store secrets in a local `.env` file for the setup script to access.
````

Sandboxes isolate code execution, but agents remain vulnerable to prompt injection with untrusted inputs. Use human-in-the-loop approval, short-lived secrets, and trusted setup scripts only. See [Security considerations](/oss/python/deepagents/sandboxes#security-considerations) for details.

## Tracing with LangSmith

Enable LangSmith tracing to see agent operations in a LangSmith project:

1. Enable LangSmith tracing:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   export LANGCHAIN_TRACING=true
   export LANGCHAIN_API_KEY="your-api-key"
   ```

2. Configure agent tracing for deep agent operations such as tool calls and agent decisions:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   export DEEPAGENTS_LANGSMITH_PROJECT="my-deep-agent-execution"
   ```

3. If you are building a LangChain app with Deep Agents, and want to separate agent traces from your app's traces, also configure `LANGSMITH_PROJECT`:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   export LANGSMITH_PROJECT="my-app-calls-to-langchain"
   ```

When configured, the CLI displays:

```sh theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
✓ LangSmith tracing: 'my-project'
```
