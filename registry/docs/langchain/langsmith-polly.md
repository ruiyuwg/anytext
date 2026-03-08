# LangSmith Polly

Source: https://docs.langchain.com/langsmith/polly

**Polly is in beta.** Your [feedback](https://forum.langchain.com) on Polly is invaluable as the team refines its capabilities.

**LangSmith Polly** is an AI assistant embedded directly in your LangSmith [workspace](/langsmith/administration-overview#workspaces) to help you analyze and understand your application data.

Polly helps you gain insight from your traces, conversation threads, and prompts without having to dig through data manually. By asking natural language questions, you can quickly understand agent performance, debug issues, and analyze user sentiment.

Polly appears in the right-hand bottom corner of the following locations within [LangSmith UI](https://smith.langchain.com):

**Observability & Debugging:**

- [Trace pages](#trace-pages): Analyze individual runs and execution traces.
- [Thread views](#thread-views): Understand conversation threads and user interactions.

**Prompt Engineering:**

- [Prompt Playground](#prompt-playground): Edit and optimize prompts.
- [Prompt Hub pages](#prompt-hub-pages): Explore and understand shared prompts.

**Evaluation & Testing:**

- [Dataset Experiments](#dataset-experiments): Analyze experiment results and compare runs.
- [Dataset Examples](#dataset-examples): Browse and understand dataset structure.
- [Annotation Queues](#annotation-queues): Review runs and make informed annotation decisions.

## Get started

Before you start using Polly, you need to add an API key for the model you're using:

In the [LangSmith UI](https://smith.langchain.com), ensure that your API key is set as a [workspace secret](/langsmith/administration-overview#workspace-secrets).

1. Navigate to  **Settings** and then move to the **Secrets** tab.
2. Select **Add secret** and enter the key environment variable (e.g.,`OPENAI_API_KEY` or `ANTHROPIC_API_KEY`) and your API key as the **Value**.
3. Select **Save secret**.

When adding workspace secrets in the LangSmith UI, make sure the secret keys match the environment variable names expected by your model provider.

## Observability

### Trace pages

On an individual [trace](/langsmith/observability-concepts#traces), Polly analyzes the [run](/langsmith/observability-concepts#runs) data and execution trajectory. Polly examines the full trace context, including [run metadata](/langsmith/observability-concepts#metadata), inputs, outputs, intermediate steps, and configuration to help you understand what happened and identify areas for improvement.

**Example questions:**

- "Is there anything that the agent could have done better here?"
- "Why did this run fail?"
- "What took the most time in this trace?"
- "Summarize what happened in this trace"

### Thread views

Under the **Threads** tab, Polly analyzes conversation [threads](/langsmith/observability-concepts#threads) to help you understand user sentiment, conversation outcomes, and interaction patterns. Use Polly to identify user pain points and understand whether issues were resolved.

**Example questions:**

- "Did the user seem frustrated?"
- "What issues is the user experiencing?"
- "Was the user's problem solved?"
- "What was the main topic of this thread?"

## Prompt engineering

### Prompt Playground

In the [Playground](/langsmith/prompt-engineering-concepts#prompt-playground), Polly helps you edit and optimize your [prompts](/langsmith/prompt-engineering-concepts#prompt-in-langsmith). Use automated options like **Optimize prompt**, **Generate a tool**, or **Generate an output schema**, or give Polly custom instructions for editing your prompt.

**Example questions:**

- "Make it respond in Italian"
- "Add more context about the user's role"
- "Make the tone more professional"
- "Simplify the instructions"

### Prompt Hub pages

When viewing a prompt in the [LangSmith Hub](/langsmith/prompt-engineering-concepts#langsmith-hub), Polly helps you understand the prompt's structure, messages, tools, and configuration. This is useful for exploring and learning from shared prompts.

**Example questions:**

- "What does this prompt do?"
- "What tools does this prompt use?"
- "Explain the structure of this prompt"
- "What are the key instructions in this prompt?"

## Evaluation

### Dataset Experiments

On the **Datasets** page under the **Experiments** tab, Polly analyzes experiment results and helps you compare runs across different experiments. Polly can identify patterns, summarize performance, and help you understand which approaches work best.

**Example questions:**

- "Which experiment performed best?"
- "What are the main differences between these runs?"
- "Summarize the results of this experiment"
- "What patterns do you see in the failures?"

### Dataset Examples

On the **Datasets** page under the **Examples** tab, Polly helps you understand your dataset structure, browse examples, and identify data patterns. This is useful for understanding what data you're working with and preparing datasets for experiments.

**Example questions:**

- "What type of data is in this dataset?"
- "Show me examples with errors"
- "What patterns do you see in the inputs?"
- "How many examples are in this dataset?"

### Annotation Queues

In **Annotation Queues**, Polly helps you analyze runs before making annotation decisions. Whether you're reviewing runs individually or comparing them pairwise, Polly provides insights into run behavior, errors, and execution patterns to inform your scoring.

**Example questions:**

- "What went wrong in this run?"
- "Summarize what happened in this run"
- "Compare these two runs"
- "What should I consider when scoring this?"

## What's next

Learn more about the features that Polly helps you explore:

```
Learn more about tracing and monitoring your LLM applications



Understand how threads work in LangSmith



Create and iterate on prompts in the playground



Evaluate and test your applications systematically
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/polly.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Polly

Source: https://docs.langchain.com/langsmith/polly-evaluation

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/polly-evaluation.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Polly

Source: https://docs.langchain.com/langsmith/polly-observability

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/polly-observability.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# LangSmith Polly

Source: https://docs.langchain.com/langsmith/polly-prompt-engineering

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/polly-prompt-engineering.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
