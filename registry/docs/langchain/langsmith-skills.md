# LangSmith skills

Source: https://docs.langchain.com/langsmith/skills

Use Agent Skills to work with LangSmith traces, datasets, and evaluators from your coding agent.

Agent Skills are reusable, on‑demand capabilities that bundle instructions plus optional helper scripts. This page summarizes the LangSmith‑oriented skills you can add to a compatible coding agent to query traces, generate datasets, and define evaluators. To work with the same LangSmith data directly from the terminal, use the [LangSmith CLI](/langsmith/langsmith-cli).

These skills follow the Agent Skills specification and are maintained in the [`langsmith-skills` GitHub repository](https://github.com/langchain-ai/langsmith-skills). You can copy the `SKILL.md` and any referenced `scripts/` into your agent’s skills directory. The installers below only install the LangSmith skills (trace, dataset, evaluator).

## Quick install

Install only the LangSmith skills (trace, dataset, evaluator) using `npx skills`:

```bash Local (current project) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx skills add langchain-ai/langsmith-skills --skill '*' --yes
```

```bash Global (all projects) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx skills add langchain-ai/langsmith-skills --skill '*' --yes --global
```

```bash Link to a specific agent (e.g., Claude Code) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npx skills add langchain-ai/langsmith-skills --agent claude-code --skill '*' --yes --global
```

To update, re‑run the command. If target skill folders already exist, remove them first (e.g., `rm -rf ~/.claude/skills/langsmith-*`).

## Configure environment

After installing the skills, set environment variables used by all LangSmith skills, helper scripts, and the [LangSmith CLI](/langsmith/langsmith-cli):

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_API_KEY=<your-key>
# Optional defaults
export LANGSMITH_PROJECT=<default-project>
# Advanced: multi-workspace or certain self-hosted setups only
# export LANGSMITH_WORKSPACE_ID=<workspace-id>
```

## What these skills cover

- [Traces](/langsmith/observability-concepts#traces): Add tracing to apps; list, filter, inspect, and export traces for debugging and analysis.
- [Datasets](/langsmith/evaluation-concepts#datasets): Turn traces into evaluation datasets (final\_response, single\_step, trajectory, RAG) and optionally upload to LangSmith.
- [Evaluators](/langsmith/evaluation-concepts#evaluators): Define code or LLM‑as‑judge evaluators and attach them to datasets (offline) or projects (online).

Each skill directory ships with a `SKILL.md` plus optional `scripts/` helpers you can run or adapt. These skills are designed to plug into compatible coding agents (such as Claude Code or DeepAgents CLI), though you can also reuse the helper scripts directly if you prefer not to wire up a full agent. For heavier querying, exports, or automation, you can pair these skills with the [LangSmith CLI](/langsmith/langsmith-cli) to script against the same projects, datasets, and evaluators from your terminal.

## Manual install

Clone the repo and run the install script for more options:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git clone https://github.com/langchain-ai/langsmith-skills.git
cd langsmith-skills

# Install for Claude Code in current directory (default)
./install.sh

# Install for Claude Code globally
./install.sh --global

# Install for DeepAgents CLI in current directory
./install.sh --deepagents

# Install for DeepAgents CLI globally (includes agent persona)
./install.sh --deepagents --global

# Install only LangSmith skills (any target)
./install.sh --langsmith
```

If you prefer to copy only specific skills, copy the desired directory from `config/skills/` into your agent’s skills folder.

Included LangSmith skills:

- langsmith-trace — Traces (query/export)
- langsmith-dataset — Datasets (generate/upload)
- langsmith-evaluator — Evaluators (create/attach)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/skills.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith API reference

Source: https://docs.langchain.com/langsmith/smith-api-ref

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/smith-api-ref.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Deployment SDK

Source: https://docs.langchain.com/langsmith/smith-deployments-sdk

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/smith-deployments-sdk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Go SDK

Source: https://docs.langchain.com/langsmith/smith-go-sdk

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/smith-go-sdk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Java SDK

Source: https://docs.langchain.com/langsmith/smith-java-sdk

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/smith-java-sdk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith JS/TS SDK

Source: https://docs.langchain.com/langsmith/smith-js-ts-sdk

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/smith-js-ts-sdk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Python SDK

Source: https://docs.langchain.com/langsmith/smith-python-sdk

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/smith-python-sdk.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
