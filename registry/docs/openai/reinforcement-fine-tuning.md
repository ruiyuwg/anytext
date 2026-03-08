# Reinforcement fine-tuning

Reinforcement fine-tuning (RFT) adapts an OpenAI reasoning model with a feedback signal you define. Like [supervised fine-tuning](https://developers.openai.com/api/docs/guides/supervised-fine-tuning), it tailors the model to your task. The difference is that instead of training on fixed “correct” answers, it relies on a programmable grader that scores every candidate response. The training algorithm then shifts the model’s weights, so high-scoring outputs become more likely and low-scoring ones fade.

How it works
Best for
Use with

Generate a response for a prompt, provide an expert grade for the result, and reinforce the model's chain-of-thought for higher-scored responses.

Requires expert graders to agree on the ideal output from the model.

- Complex domain-specific tasks that require advanced reasoning
- Medical diagnoses based on history and diagnostic guidelines
- Determining relevant passages from legal case law

`o4-mini-2025-04-16`

**Reasoning models only**.

This optimization lets you align the model with nuanced objectives like style, safety, or domain accuracy—with many [practical use cases](https://developers.openai.com/api/docs/guides/rft-use-cases) emerging. Run RFT in five steps:

1. Implement a [grader](https://developers.openai.com/api/docs/guides/graders) that assigns a numeric reward to each model response.
2. Upload your prompt dataset and designate a validation split.
3. Start the fine-tune job.
4. Monitor and [evaluate](https://developers.openai.com/api/docs/guides/evals) checkpoints; revise data or grader if needed.
5. Deploy the resulting model through the standard API.

During training, the platform cycles through the dataset, samples several responses per prompt, scores them with the grader, and applies policy-gradient updates based on those rewards. The loop continues until we hit the end of your training data or you stop the job at a chosen checkpoint, producing a model optimized for the metric that matters to you.

When should I use reinforcement fine-tuning?

It's useful to understand the strengths and weaknesses of reinforcement fine-tuning to identify opportunities and to avoid wasted effort.

- **RFT works best with unambiguous tasks**. Check whether qualified human experts agree on the answers. If conscientious experts working independently (with access only to the same instructions and information as the model) do not converge on the same answers, the task may be too ambiguous and may benefit from revision or reframing.
- **Your task must be compatible with the grading options**. Review [grading options in the API](https://developers.openai.com/api/docs/api-reference/graders) first and verify it's possible to grade your task with them.
- **Your eval results must be variable enough to improve**. Run [evals](https://developers.openai.com/api/docs/guides/evals) before using RFT. If your eval scores between minimum and maximum possible scores, you'll have enough data to work with to reinforce positive answers. If the model you want to fine-tune scores at either the absolute minimum or absolute maximum score, RFT won't be useful to you.
- **Your model must have some success at the desired task**. Reinforcement fine-tuning makes gradual changes, sampling many answers and choosing the best ones. If a model has a 0% success rate at a given task, you cannot bootstrap to higher performance levels through RFT.
- **Your task should be guess-proof**. If the model can get a higher reward from a lucky guess, the training signal is too noisy, as the model can get the right answer with an incorrect reasoning process. Reframe your task to make guessing more difficult—for example, by expanding classes into subclasses or revising a multiple choice problem to take open-ended answers.

See common use cases, specific implementations, and grader examples in the [reinforcement fine-tuning use case guide](https://developers.openai.com/api/docs/guides/rft-use-cases).

What is reinforcement learning?

Reinforcement learning is a branch of machine learning in which a model learns by acting, receiving feedback, and readjusting itself to maximise future feedback. Instead of memorising one “right” answer per example, the model explores many possible answers, observes a numeric reward for each, and gradually shifts its behaviour so the high-reward answers become more likely and the low-reward ones disappear. Over repeated rounds, the model converges on a policy—a rule for choosing outputs—that best satisfies the reward signal you define.

In reinforcement fine-tuning (RFT), that reward signal comes from a custom grader that you define for your task. For every prompt in your dataset, the platform samples multiple candidate answers, runs your grader to score them, and applies a policy-gradient update that nudges the model toward answers with higher scores. This cycle—sample, grade, update—continues across the dataset (and successive epochs) until the model reliably optimizes for your grader’s understanding of quality. The grader encodes whatever you care about—accuracy, style, safety, or any metric—so the resulting fine-tuned model reflects those priorities and you don't have to manage reinforcement learning infrastructure.

Reinforcement fine-tuning is supported on o-series reasoning models only, and
currently only for [o4-mini](https://developers.openai.com/api/docs/models/o4-mini).

## Example: LLM-powered security review

To demonstrate reinforcement fine-tuning below, we'll fine-tune an [o4-mini](https://developers.openai.com/api/docs/models/o4-mini) model to provide expert answers about a fictional company's security posture, based on an internal company policy document. We want the model to return a JSON object that conforms to a specific schema with [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs).

Example input question:

```
Do you have a dedicated security team?
```

Using the internal policy document, we want the model to respond with JSON that has two keys:

- `compliant`: A string `yes`, `no`, or `needs review`, indicating whether the company's policy covers the question.
- `explanation`: A string of text that briefly explains, based on the policy document, why the question is covered in the policy or why it's not covered.

Example desired output from the model:

```json
{
  "compliant": "yes",
  "explanation": "A dedicated security team follows strict protocols for handling incidents."
}
```

Let's fine-tune a model with RFT to perform well at this task.

## Define a grader

To perform RFT, define a [grader](https://developers.openai.com/api/docs/guides/graders) to score the model's output during training, indicating the quality of its response. RFT uses the same set of graders as [evals](https://developers.openai.com/api/docs/guides/evals), which you may already be familiar with.

In this example, we define [multiple graders](https://developers.openai.com/api/docs/api-reference/graders/multi) to examine the properties of the JSON returned by our fine-tuned model:

- The [`string_check`](https://developers.openai.com/api/docs/api-reference/graders/string-check) grader to ensure the proper `compliant` property has been set
- The [`score_model`](https://developers.openai.com/api/docs/api-reference/graders/score-model) grader to provide a score between zero and one for the explanation text, using another evaluator model

We weight the output of each property equally in the `calculate_output` expression.

Below is the JSON payload data we'll use for this grader in API requests. In both graders, we use `{{ }}` template syntax to refer to the relevant properties of both the `item` (the row of test data being used for evaluation) and `sample` (the model output generated during the training run).

```
Grader configuration


Grading prompt
```
