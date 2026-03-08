# How to define a summary evaluator

Source: https://docs.langchain.com/langsmith/summary

Some metrics can only be defined on the entire experiment level as opposed to the individual runs of the experiment. For example, you may want to compute the overall pass rate or f1 score of your evaluation target across all examples in the dataset. These are called summary evaluators.

## Basic example

Here, we'll compute the f1-score, which is a combination of precision and recall.

This sort of metric can only be computed over all of the examples in our experiment, so our evaluator takes in a list of outputs, and a list of reference\_outputs.

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def f1_score_summary_evaluator(outputs: list[dict], reference_outputs: list[dict]) -> dict:
    true_positives = 0
    false_positives = 0
    false_negatives = 0

    for output_dict, reference_output_dict in zip(outputs, reference_outputs):
        output = output_dict["class"]
        reference_output = reference_output_dict["class"]

        if output == "Toxic" and reference_output == "Toxic":
            true_positives += 1
        elif output == "Toxic" and reference_output == "Not toxic":
            false_positives += 1
        elif output == "Not toxic" and reference_output == "Toxic":
            false_negatives += 1

    if true_positives == 0:
        return {"key": "f1_score", "score": 0.0}

    precision = true_positives / (true_positives + false_positives)
    recall = true_positives / (true_positives + false_negatives)
    f1_score = 2 * (precision * recall) / (precision + recall)

    return {"key": "f1_score", "score": f1_score}
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function f1ScoreSummaryEvaluator({ outputs, referenceOutputs }: {
    outputs: Record<string, any>[],
    referenceOutputs: Record<string, any>[]
}) {
    let truePositives = 0;
    let falsePositives = 0;
    let falseNegatives = 0;

    for (let i = 0; i < outputs.length; i++) {
        const output = outputs[i]["class"];
        const referenceOutput = referenceOutputs[i]["class"];

        if (output === "Toxic" && referenceOutput === "Toxic") {
            truePositives += 1;
        } else if (output === "Toxic" && referenceOutput === "Not toxic") {
            falsePositives += 1;
        } else if (output === "Not toxic" && referenceOutput === "Toxic") {
            falseNegatives += 1;
        }
    }

    if (truePositives === 0) {
        return { key: "f1_score", score: 0.0 };
    }

    const precision = truePositives / (truePositives + falsePositives);
    const recall = truePositives / (truePositives + falseNegatives);
    const f1Score = 2 * (precision * recall) / (precision + recall);

    return { key: "f1_score", score: f1Score };
}
```

You can then pass this evaluator to the `evaluate` method as follows:

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langsmith import Client

ls_client = Client()
dataset = ls_client.clone_public_dataset(
    "https://smith.langchain.com/public/3d6831e6-1680-4c88-94df-618c8e01fc55/d"
)

def bad_classifier(inputs: dict) -> dict:
    return {"class": "Not toxic"}

def correct(outputs: dict, reference_outputs: dict) -> bool:
    """Row-level correctness evaluator."""
    return outputs["class"] == reference_outputs["label"]

results = ls_client.evaluate(
    bad_classified,
    data=dataset,
    evaluators=[correct],
    summary_evaluators=[pass_50],
)
```

```typescript TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Client } from "langsmith";
import { evaluate } from "langsmith/evaluation";
import type { EvaluationResult } from "langsmith/evaluation";

const client = new Client();
const datasetName = "Toxic queries";
const dataset = await client.clonePublicDataset(
    "https://smith.langchain.com/public/3d6831e6-1680-4c88-94df-618c8e01fc55/d",
    { datasetName: datasetName }
);

function correct({ outputs, referenceOutputs }: {
    outputs: Record<string, any>,
    referenceOutputs?: Record<string, any>
}): EvaluationResult {
    const score = outputs["class"] === referenceOutputs?.["label"];
    return { key: "correct", score };
}

function badClassifier(inputs: Record<string, any>): { class: string } {
    return { class: "Not toxic" };
}

await evaluate(badClassifier, {
    data: datasetName,
    evaluators: [correct],
    summaryEvaluators: [summaryEval],
    experimentPrefix: "Toxic Queries",
});
```

In the LangSmith UI, you'll the summary evaluator's score displayed with the corresponding key.

## Summary evaluator args

Summary evaluator functions must have specific argument names. They can take any subset of the following arguments:

- `inputs: list[dict]`: A list of the inputs corresponding to a single example in a dataset.
- `outputs: list[dict]`: A list of the dict outputs produced by each experiment on the given inputs.
- `reference_outputs/referenceOutputs: list[dict]`: A list of the reference outputs associated with the example, if available.
- `runs: list[Run]`: A list of the full [Run](/langsmith/run-data-format) objects generated by the two experiments on the given example. Use this if you need access to intermediate steps or metadata about each run.
- `examples: list[Example]`: All of the dataset [Example](/langsmith/example-data-format) objects, including the example inputs, outputs (if available), and metadata (if available).

## Summary evaluator output

Summary evaluators are expected to return one of the following types:

Python and JS/TS

- `dict`: dicts of the form `{"score": ..., "name": ...}` allow you to pass a numeric or boolean score and metric name.

Currently Python only

- `int | float | bool`: this is interepreted as an continuous metric that can be averaged, sorted, etc. The function name is used as the name of the metric.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/summary.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Test a ReAct agent with Pytest/Vitest and LangSmith

Source: https://docs.langchain.com/langsmith/test-react-agent-pytest

This tutorial will show you how to use LangSmith's integrations with popular testing tools (Pytest, Vitest, and Jest) to evaluate your LLM application. We will create a ReAct agent that answers questions about publicly traded stocks and write a comprehensive test suite for it.

## Setup

This tutorial uses [LangGraph](https://langchain-ai.github.io/langgraph/tutorials/introduction/) for agent orchestration, [OpenAI's GPT-4o](https://platform.openai.com/docs/models#gpt-4o), [Tavily](https://tavily.com/) for search, [E2B's](https://e2b.dev/) code interpreter, and [Polygon](https://polygon.io/stocks) to retrieve stock data but it can be adapted for other frameworks, models and tools with minor modifications. Tavily, E2B and Polygon are free to sign up for.

### Installation

First, install the packages required for making the agent:

```bash Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langgraph langchain[openai] langchain-community e2b-code-interpreter
```

```bash TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/openai @langchain/community @langchain/langgraph @langchain/core @e2b/code-interpreter @polygon.io/client-js openai zod
```

Next, install the testing framework:

```bash Pytest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Make sure you have langsmith>=0.3.1
pip install -U "langsmith[pytest]"
```

```bash Vitest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add -D langsmith vitest
```

```bash Jest theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add -D langsmith jest
```

### Environment variables

Set the following environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY=<YOUR_LANGSMITH_API_KEY>
export OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
export TAVILY_API_KEY=<YOUR_TAVILY_API_KEY>
export E2B_API_KEY=<YOUR_E2B_API_KEY>
export POLYGON_API_KEY=<YOUR_POLYGON_API_KEY>
```
