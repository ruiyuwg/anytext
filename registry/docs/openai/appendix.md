## Appendix

### Training metrics

Reinforcement fine-tuning jobs publish per-step training metrics as [fine-tuning events](https://developers.openai.com/api/docs/api-reference/fine-tuning/event-object). Pull these metrics through the [API](https://developers.openai.com/api/docs/api-reference/fine-tuning/list-events) or view them as graphs and charts in the [fine-tuning dashboard](https://platform.openai.com/finetune).

Learn more about training metrics below.

Full example training metrics

Below is an example metric event from a real reinforcement fine-tuning job. The various fields in this payload will be discussed in the following sections.

```json
{
      "object": "fine_tuning.job.event",
      "id": "ftevent-Iq5LuNLDsac1C3vzshRBuBIy",
      "created_at": 1746679539,
      "level": "info",
      "message": "Step 10/20 , train mean reward=0.42, full validation mean reward=0.68, full validation mean parse error=0.00",
      "data": {
        "step": 10,
        "usage": {
          "graders": [
            {
              "name": "basic_model_grader",
              "type": "score_model",
              "model": "gpt-4o-2024-08-06",
              "train_prompt_tokens_mean": 241.0,
              "valid_prompt_tokens_mean": 241.0,
              "train_prompt_tokens_count": 120741.0,
              "valid_prompt_tokens_count": 4820.0,
              "train_completion_tokens_mean": 138.52694610778443,
              "valid_completion_tokens_mean": 140.5,
              "train_completion_tokens_count": 69402.0,
              "valid_completion_tokens_count": 2810.0
            }
          ],
          "samples": {
            "train_reasoning_tokens_mean": 3330.017964071856,
            "valid_reasoning_tokens_mean": 1948.9,
            "train_reasoning_tokens_count": 1668339.0,
            "valid_reasoning_tokens_count": 38978.0
          }
        },
        "errors": {
          "graders": [
            {
              "name": "basic_model_grader",
              "type": "score_model",
              "train_other_error_mean": 0.0,
              "valid_other_error_mean": 0.0,
              "train_other_error_count": 0.0,
              "valid_other_error_count": 0.0,
              "train_sample_parse_error_mean": 0.0,
              "valid_sample_parse_error_mean": 0.0,
              "train_sample_parse_error_count": 0.0,
              "valid_sample_parse_error_count": 0.0,
              "train_invalid_variable_error_mean": 0.0,
              "valid_invalid_variable_error_mean": 0.0,
              "train_invalid_variable_error_count": 0.0,
              "valid_invalid_variable_error_count": 0.0
            }
          ]
        },
        "scores": {
          "graders": [
            {
              "name": "basic_model_grader",
              "type": "score_model",
              "train_reward_mean": 0.4471057884231537,
              "valid_reward_mean": 0.675
            }
          ],
          "train_reward_mean": 0.4215686274509804,
          "valid_reward_mean": 0.675
        },
        "timing": {
          "step": {
            "eval": 101.69386267662048,
            "sampling": 226.82190561294556,
            "training": 402.43121099472046,
            "full_iteration": 731.5038568973541
          },
          "graders": [
            {
              "name": "basic_model_grader",
              "type": "score_model",
              "train_execution_latency_mean": 2.6894934929297594,
              "valid_execution_latency_mean": 4.141402995586395
            }
          ]
        },
        "total_steps": 20,
        "train_mean_reward": 0.4215686274509804,
        "reasoning_tokens_mean": 3330.017964071856,
        "completion_tokens_mean": 3376.0019607843137,
        "full_valid_mean_reward": 0.675,
        "mean_unresponsive_rewards": 0.0,
        "model_graders_token_usage": {
          "gpt-4o-2024-08-06": {
            "eval_cached_tokens": 0,
            "eval_prompt_tokens": 4820,
            "train_cached_tokens": 0,
            "train_prompt_tokens": 120741,
            "eval_completion_tokens": 2810,
            "train_completion_tokens": 69402
          }
        },
        "full_valid_mean_parse_error": 0.0,
        "valid_reasoning_tokens_mean": 1948.9
      },
      "type": "metrics"
    },
```

Score metrics

The top-level metrics to watch are `train_reward_mean` and `valid_reward_mean`, which indicate the average reward assigned by your graders across all samples in the training and validation datasets, respectively.

Additionally, if you use a [multi-grader](https://developers.openai.com/api/docs/api-reference/graders/multi) configuration, per-grader train and validation reward metrics will be published as well. These metrics are included under the `event.data.scores` object in the fine-tuning events object, with one entry per grader. The per-grader metrics are useful for understanding how the model is performing on each individual grader, and can help you identify if the model is overfitting to one grader or another.

From the fine-tuning dashboard, the individual grader metrics will be displayed in their own graph below the overall `train_reward_mean` and `valid_reward_mean` metrics.

![Per-Grader Reward Metric Graph](https://cdn.openai.com/API/images/guides/RFT_MultiReward_Chart.png)

Usage metrics

An important characteristic of a reasoning model is the number of reasoning tokens it uses before responding to a prompt. Often, during training, the model will drastically change the average number of reasoning tokens it uses to respond to a prompt. This is a sign that the model is changing its behavior in response to the reward signal. The model may learn to use fewer reasoning tokens to achieve the same reward, or it may learn to use more reasoning tokens to achieve a higher reward.

You can monitor the `train_reasoning_tokens_mean` and `valid_reasoning_tokens_mean` metrics to see how the model is changing its behavior over time. These metrics are the average number of reasoning tokens used by the model to respond to a prompt in the training and validation datasets, respectively. You can also view the mean reasoning token count in the fine-tuning dashboard under the "Reasoning Tokens" chart.

![Reasoning Tokens Metric Graph](https://cdn.openai.com/API/images/guides/RFT_ReasoningTokens_Chart.png)

If you are using [model graders](https://developers.openai.com/api/docs/guides/graders#model-graders), you will likely want to monitor the token usage of these graders. Per-grader token usage statistics are available under the `event.data.usage.graders` object, and are broken down into:

- `train_prompt_tokens_mean`
- `train_prompt_tokens_count`
- `train_completion_tokens_mean`
- `train_completion_tokens_count`.

The `_mean` metrics represent the average number of tokens used by the grader to process all prompts in the current step, while the `_count` metrics represent the total number of tokens used by the grader across all samples in the current step. The per-step token usage is also displayed on the fine-tuning dashboard under the "Grading Token Usage" chart.

![Model Grader Token Usage](https://cdn.openai.com/API/images/guides/RFT_ModelGraderTokenUsage.png)

Timing metrics

We include various metrics that help you understand how long each step of the training process is taking and how different parts of the training process are contributing to the per-step timing.

These metrics are available under the `event.data.timing` object, and are broken down into `step` and `graders` fields.

The `step` field contains the following metrics:

- `sampling`: The time taken to sample the model outputs (rollouts) for the current step.
- `training`: The time taken to train the model (backpropagation) for the current step.
- `eval`: The time taken to evaluate the model on the full validation set.
- `full_iteration`: The total time taken for the current step, including the above 3 metrics plus any additional overhead.

The step timing metrics are also displayed on the fine-tuning dashboard under the "Per Step Duration" chart.

![Per Step Duration Graph](https://cdn.openai.com/API/images/guides/RFT_PerStepDuration2.png)

The `graders` field contains timing information that details the time taken to execute each grader for the current step. Each grader will have its own timing under the `train_execution_latency_mean` and `valid_execution_latency_mean` metrics, which represent the average time taken to execute the grader on the training and validation datasets, respectively.

Graders are executed in parallel with a concurrency limit, so it is not always clear how individual grader latency adds up to the total time taken for grading. However, it is generally true that graders which take longer to execute individually will cause a job to execute more slowly. This means that slower model graders will cause the job to take longer to complete, and more expensive python code will do the same. The fastest graders generally are `string_check` and `text_similarity` as those are executed local to the training loop.

### Evals integration details

Reinforcement fine-tuning jobs are directly integrated with our [evals product](https://developers.openai.com/api/docs/guides/evals). When you make a reinforcement fine-tuning job, a new eval is automatically created and associated with the job.

As validation steps are performed, the input prompts, model samples, grader outputs, and more metadata will be combined to make a new [eval run](https://developers.openai.com/api/docs/guides/evals#creating-an-eval-run) for that step. At the end of the job, you will have one run for each validation step. This allows you to compare the performance of the model at different steps, and to see how the model's behavior has changed over the course of training.

You can find the eval associated with your fine-tuning job by viewing your job on the fine-tuning dashboard, or by finding the `eval_id` field on the [fine-tuning job object](https://developers.openai.com/api/docs/api-reference/fine-tuning/object).

The evals product is useful for inspecting the outputs of the model on specific datapoints, to get an understanding for how the model is behaving in different scenarios. It can help you figure out which slice of your dataset the model is performing poorly on which can help you identify areas for improvement in your training data.

The evals product can also help you find areas of improvement for your graders by finding areas where the grader is either overly lenient or overly harsh on the model outputs.

### Pausing and resuming jobs

You can pause a fine-tuning job at any time by using the [fine-tuning jobs API](https://developers.openai.com/api/docs/api-reference/fine-tuning/pause). Calling the pause API will tell the training process to create a new model snapshot, stop training, and put the job into a "Paused" state. The model snapshot will go through a normal safety screening process after which it will be available for you to use throughout the OpenAI platform as a normal fine-tuned model.

If you wish to continue the training process for a paused job, you can do so by using the [fine-tuning jobs API](https://developers.openai.com/api/docs/api-reference/fine-tuning/resume). This will resume the training process from the last checkpoint created when the job was paused and will continue training until the job is either completed or paused again.

### Grading with Tools

If you are training your model to [perform tool calls](https://developers.openai.com/api/docs/guides/function-calling), you will need to:

1. Provide the set of tools available for your model to call on each datapoint in the RFT training dataset. More info here in the [dataset API reference](https://developers.openai.com/api/docs/api-reference/fine-tuning/reinforcement-input).
2. Configure your grader to assign rewards based on the contents of the tool calls made by the model. Information on grading tools calls can be found [here in the grading docs](https://developers.openai.com/api/docs/guides/graders/#sample-namespace)

### Billing details

Reinforcement fine-tuning jobs are billed based on the amount of time spent training, as well as the number of tokens used by the model during training. We only bill for time spent in the core training loop, not for time spent preparing the training data, validating datasets, waiting in queues, running safety evals, or other overhead.

Details on exactly how we bill for reinforcement fine-tuning jobs can be found in this [help center article](https://help.openai.com/en/articles/11323177-billing-guide-for-the-reinforcement-fine-tuning-api).

### Training errors

Reinforcement fine-tuning is a complex process with many moving parts, and there are many places where things can go wrong. We publish various error metrics to help you understand what is going wrong in your job, and how to fix it. In general, we try to avoid failing a job entirely unless a very serious error occurs. When errors do occur, they often happen during the grading step. Errors during grading often happen either to the model outputting a sample that the grader doesn't know how to handle, the grader failing to execute properly due to some sort of system error, or due to a bug in the grading logic itself.

The error metrics are available under the `event.data.errors` object, and are aggregated into counts and rates rolled up per-grader. We also display rates and counts of errors on the fine-tuning dashboard.

Grader errors

#### Generic grading errors

The grader errors are broken down into the following categories, and they exist in both `train_` (for training data) and `valid_` (for validation data) versions:

- `sample_parse_error_mean`: The average number of samples that failed to parse correctly. This often happens when the model fails to output valid JSON or adhere to a provided response format correctly. A small percentage of these errors, especially early in the training process, is normal. If you see a large number of these errors, it is likely that the response format of the model is not configured correctly or that your graders are misconfigured and looking for incorrect fields.
- `invalid_variable_error_mean`: These errors occur when you attempt to reference a variable via a template that cannot be found either in the current datapoint or in the current model sample. This can happen if the model fails to provide output in the correct response format, or if your grader is misconfigured.
- `other_error_mean`: This is a catch-all for any other errors that occur during grading. These errors are often caused by bugs in the grading logic itself, or by system errors that occur during grading.

#### Python grading errors

- `python_grader_server_error_mean`: These errors occur when our system for executing python graders in a remote sandbox experiences system errors. This normally happens due to reasons outside of your control, like networking failures or system outages. If you see a large number of these errors, it is likely that there is a system issue that is causing the errors. You can check the [OpenAI status page](https://status.openai.com/) for more information on any ongoing issues.
- `python_grader_runtime_error_mean`: These errors occur when the python grader itself fails to execute properly. This can happen for a variety of reasons, including bugs in the grading logic, or if the grader is trying to access a variable that doesn't exist in the current context. If you see a large number of these errors, it is likely that there is a bug in your grading logic that needs to be fixed. If a large enough number of these errors occur, the job will fail and we will show you a sampling of tracebacks from the failed graders.

#### Model grading errors

- `model_grader_server_error_mean`: These errors occur when we fail to sample from a model grader. This can happen for a variety of reasons, but generally means that either the model grader was misconfigured, that you are attempting to use a model that is not available to your organization, or that there is a system issue that is happening at OpenAI.

***
