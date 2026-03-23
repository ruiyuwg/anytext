# LangSmith CLI

Source: https://docs.langchain.com/langsmith/langsmith-cli

Query and manage LangSmith projects, traces, runs, datasets, evaluators, experiments, and threads from the terminal

The LangSmith CLI is a fast, agent-friendly command-line tool for working with your LangSmith data and workflows directly from the terminal. It’s designed for both humans and AI coding agents to list, filter, retrieve, and export data—with predictable JSON output by default and a pretty table mode for humans.

Built for agents and scripts: defaults to JSON, supports clean stdout/stderr separation, and offers `--yes` flags for non-interactive use.

## Installation

Use one of the follow methods for installation:

```bash Install script (recommended) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
curl -sSL https://raw.githubusercontent.com/langchain-ai/langsmith-cli/main/scripts/install.sh | sh
```

```bash Install to a custom directory theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
INSTALL_DIR=$HOME/.local/bin \
  curl -sSL https://raw.githubusercontent.com/langchain-ai/langsmith-cli/main/scripts/install.sh | sh
```

```bash GitHub Releases theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Download the latest binary for your platform
# https://github.com/langchain-ai/langsmith-cli/releases
```

```bash Go install theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
go install github.com/langchain-ai/langsmith-cli/cmd/langsmith@latest
```

## Authentication

Set your [API key](/langsmith/create-account-api-key) as an environment variable:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_API_KEY="lsv2_..."
```

Optional defaults:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_ENDPOINT="https://api.smith.langchain.com"  # self-hosted/hybrid
export LANGSMITH_PROJECT="my-default-project"                 # default project for queries
```

Or pass them as flags when running commands:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith --api-key lsv2_... trace list --project my-app
```

## Quickstart

The following commands cover the core resource types—projects, traces, runs, datasets, experiments, and threads:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# List tracing projects (sessions)
langsmith project list

# List recent traces in a project
langsmith trace list --project my-app --limit 5

# Get a specific trace with full detail
langsmith trace get <trace-id> --project my-app --full

# List LLM runs with token counts
langsmith run list --project my-app --run-type llm --include-metadata

# Datasets and experiments
langsmith dataset list
langsmith experiment list --dataset my-eval-set

# Conversation threads in a project
langsmith thread list --project my-chatbot
```

## Output formats

- Default: JSON to stdout for easy piping and scripting
- Pretty tables: `--format pretty` for human-readable tables and trees
- Write to file: `-o <path>`

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith trace list --project my-app                  # JSON array to stdout
langsmith --format pretty trace list --project my-app  # tables/trees
langsmith trace list --project my-app -o traces.json   # write JSON to file
```

## Commands overview

The CLI groups functionality by resource. Each command supports filters like `--limit`, `--last-n-minutes`, and more.

### project—list tracing projects

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith project list                    # default limit: 20
langsmith project list --name-contains chatbot
langsmith --format pretty project list
```

### trace—query and export traces

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith trace list --project my-app --limit 50 --last-n-minutes 60
langsmith trace list --project my-app --error --include-metadata
langsmith trace get <trace-id> --project my-app --full
langsmith trace export ./traces --project my-app --limit 20 --full
```

### run—query individual runs

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith run list --project my-app --run-type llm
langsmith run list --project my-app --run-type tool --name search
langsmith run get <run-id> --full
langsmith run export llm_calls.jsonl --project my-app --run-type llm --full
```

### thread—query conversation threads

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith thread list --project my-chatbot --last-n-minutes 120
langsmith thread get <thread-id> --project my-chatbot --full
```

### dataset—manage evaluation datasets

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith dataset list --name-contains eval
langsmith dataset get my-dataset
langsmith dataset create --name my-eval-set --description "QA pairs for v2"
langsmith dataset export my-dataset ./data.json --limit 500
```

### evaluator—manage evaluators

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith evaluator list
langsmith evaluator upload evals.py --name accuracy --function check_accuracy --dataset my-eval-set
langsmith evaluator delete accuracy --yes
```

### experiment—results and summaries

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
langsmith experiment list --dataset my-eval-set
langsmith experiment get my-experiment-2024-01-15
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/langsmith-cli.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Configure your collector for LangSmith telemetry

Source: https://docs.langchain.com/langsmith/langsmith-collector

The various services in a LangSmith deployment emit telemetry data in the form of logs, metrics, and traces. You may already have telemetry collectors set up in your Kubernetes cluster, or would like to deploy one to monitor your application.

This page describes how to configure an [OTel Collector](https://opentelemetry.io/docs/collector/configuration/) to gather telemetry data from LangSmith. Note that all of the concepts discussed below can be translated to other collectors such as [Fluentd](https://www.fluentd.org/) or [FluentBit](https://fluentbit.io/).

**This section is only applicable for Kubernetes deployments.**
