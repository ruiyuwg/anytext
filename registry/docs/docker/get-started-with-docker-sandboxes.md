When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Get started with Docker Sandboxes

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.58](https://docs.docker.com/desktop/release-notes/#4580) or later

This guide shows how to run an AI coding agent in an isolated sandbox for the first time, using Claude Code as an example. The same concepts apply to [other supported agents](https://docs.docker.com/ai/sandboxes/agents/).

> Note
>
> Upgrading from an earlier version of Docker Desktop? See the [migration guide](https://docs.docker.com/ai/sandboxes/migration/) for information about the new microVM architecture.

## [Prerequisites](#prerequisites)

Before you begin, ensure you have:

- Docker Desktop 4.58 or later
- macOS or Windows Experimental
- A Claude API key (can be provided via environment variable or interactively)

## [Run your first sandbox](#run-your-first-sandbox)

Follow these steps to run a sandbox with Claude Code:

1. (Optional but recommended) Set your Anthropic API key as an environment variable.

   Add the API key to your shell configuration file:

   \~/.bashrc or ~/.zshrc

   ```plaintext
   export ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
   ```

   Docker Sandboxes use a daemon process that runs independently of your current shell session. This means setting the environment variable inline or in your current session will not work. You must set it globally in your shell configuration file to ensure the daemon can access it.

   Apply the changes:

   1. Source your shell configuration.
   2. Restart Docker Desktop so the daemon picks up the new environment variable.

   Alternatively, you can skip this step and authenticate interactively when Claude Code starts. Interactive authentication is less secure and requires you to re-authenticate for each workspace. See [Credential security](https://docs.docker.com/ai/sandboxes/workflows/#credential-security) for details.

2. Create and run a sandbox for Claude Code for your workspace:

   ```console
   $ docker sandbox run claude [PATH]
   ```

   This creates a microVM sandbox. Docker assigns it a name automatically based on the agent and workspace directory (`claude-somedir`). If that name is already in use, Docker appends a number.

   The workspace parameter is optional and defaults to your current directory if omitted:

   ```console
   $ cd ~/my-project
   $ docker sandbox run claude
   ```

   You can also mount multiple workspaces. Append `:ro` for read-only access:

   ```console
   $ docker sandbox run claude ~/my-project ~/docs:ro
   ```

3. Claude Code starts and you can begin working. The first run takes longer while Docker initializes the microVM and pulls the template image.

## [What just happened?](#what-just-happened)

When you ran `docker sandbox run`:

- Docker created a lightweight microVM with a private Docker daemon
- The sandbox was assigned a name based on the workspace path
- Your workspace synced into the VM
- Docker started the Claude Code agent as a container inside the sandbox VM

The sandbox persists until you remove it. Installed packages and configuration remain available. Run `docker sandbox run <sandbox-name>` again to reconnect.

> Note
>
> Agents can modify files in your workspace. Review changes before executing code or performing actions that auto-run scripts. See [Security considerations](https://docs.docker.com/ai/sandboxes/workflows/#security-considerations) for details.

## [Basic commands](#basic-commands)

Here are essential commands to manage your sandboxes:

### [List sandboxes](#list-sandboxes)

```console
$ docker sandbox ls
```

Shows all your sandboxes with their IDs, names, status, workspace paths, and creation time. Workspace paths are shown for both running and stopped sandboxes.

> Note
>
> Sandboxes don't appear in `docker ps` because they're microVMs, not containers. Use `docker sandbox ls` to see them.

### [Access a running sandbox](#access-a-running-sandbox)

```console
$ docker sandbox exec -it <sandbox-name> bash
```

Executes a command inside the container in the sandbox. Use `-it` to open an interactive shell for debugging or installing additional tools.

### [Remove a sandbox](#remove-a-sandbox)

```console
$ docker sandbox rm <sandbox-name>
```

Deletes the sandbox VM and all installed packages inside it. You can remove multiple sandboxes at once by specifying multiple names:

```console
$ docker sandbox rm <sandbox-1> <sandbox-2>
```

### [Recreate a sandbox](#recreate-a-sandbox)

To start fresh with a clean environment, remove and recreate the sandbox:

```console
$ docker sandbox rm <sandbox-name>
$ docker sandbox run claude [PATH]
```

Configuration like custom templates and workspace paths are set when you create the sandbox. To change these settings, remove and recreate.

For a complete list of commands and options, see the [CLI reference](/reference/cli/docker/sandbox/).

## [Next steps](#next-steps)

Now that you have an agent running in a sandbox, learn more about:

- [Supported agents](https://docs.docker.com/ai/sandboxes/agents/)
- [Using sandboxes effectively](https://docs.docker.com/ai/sandboxes/workflows/)
- [Custom templates](https://docs.docker.com/ai/sandboxes/templates/)
- [Network policies](https://docs.docker.com/ai/sandboxes/network-policies/)
- [Troubleshooting](https://docs.docker.com/ai/sandboxes/troubleshooting/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/get-started.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fget-started%2f\&labels=status%2Ftriage)

Table of contents
