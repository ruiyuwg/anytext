## Create a fine-tune job

Create a fine-tune job using either the [API](https://developers.openai.com/api/docs/api-reference/fine-tuning) or [fine-tuning dashboard](https://platform.openai.com/finetune). To do this, you need:

- File IDs for both your training and test datasets
- The grader configuration we created earlier
- The model ID you want to use as a base for fine-tuning (we'll use `o4-mini-2025-04-16`)
- If you're fine-tuning a model that will return JSON data as a structured output, you need the JSON schema for the returned object as well (see below)
- Optionally, any hyperparameters you want to configure for the fine-tune
- To qualify for [data sharing inference pricing](https://developers.openai.com/api/docs/pricing#fine-tuning), you need to first [share evaluation and fine-tuning data](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai#h_c93188c569) with OpenAI before creating the job

### Structured Outputs JSON schema

If you're fine-tuning a model to return [Structured Outputs](https://developers.openai.com/api/docs/guides/structured-outputs), provide the JSON schema being used to format the output. See a valid JSON schema for our security interview use case:

```json
{
  "type": "json_schema",
  "json_schema": {
    "name": "security_assistant",
    "strict": true,
    "schema": {
      "type": "object",
      "properties": {
        "compliant": { "type": "string" },
        "explanation": { "type": "string" }
      },
      "required": ["compliant", "explanation"],
      "additionalProperties": false
    }
  }
}
```

Generating a JSON schema from a Pydantic model

To simplify JSON schema generation, start from a Pydantic BaseModel class:

1. Define your class
2. Use `to_strict_json_schema` from the OpenAI library to generate a valid schema
3. Wrap the schema in a dictionary with `type` and `name` keys, and set `strict` to true
4. Take the resulting object and supply it as the `response_format` in your RFT job

```python
from openai.lib._pydantic import to_strict_json_schema
from pydantic import BaseModel

class MyCustomClass(BaseModel):
    name: str
    age: int

# Note: Do not use MyCustomClass.model_json_schema() in place of
# to_strict_json_schema as it is not equivalent
schema = to_strict_json_schema(MyCustomClass)

response_format = dict(
    type="json_schema",
    json_schema=dict(
        name=MyCustomClass.__name__,
        strict=True,
        schema=schema
    )
)
```

### Create a job with the API

Configuring a job with the API has a lot of moving parts, so many users prefer to configure them in the [fine-tuning dashboard UI](https://platform.openai.com/finetune). However, here's a complete API request to kick off a fine-tune job with all the configuration we've set up in this guide so far:

```bash
curl https://api.openai.com/v1/fine_tuning/jobs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "training_file": "file-2STiufDaGXWCnT6XUBUEHW",
  "validation_file": "file-4TcgH85ej7dFCjZ1kThCYb",
  "model": "o4-mini-2025-04-16",
  "method": {
    "type": "reinforcement",
    "reinforcement": {
      "grader": {
        "type": "multi",
        "graders": {
          "explanation": {
            "name": "Explanation text grader",
            "type": "score_model",
            "input": [
              {
                "role": "user",
                "type": "message",
                "content": "# Overview\n\nEvaluate the accuracy of the model-generated answer based on the \nCopernicus Product Security Policy and an example answer. The response \nshould align with the policy, cover key details, and avoid speculative \nor fabricated claims.\n\nAlways respond with a single floating point number 0 through 1,\nusing the grading criteria below.\n\n## Grading Criteria:\n- **1.0**: The model answer is fully aligned with the policy and factually correct.\n- **0.75**: The model answer is mostly correct but has minor omissions or slight rewording that does not change meaning.\n- **0.5**: The model answer is partially correct but lacks key details or contains speculative statements.\n- **0.25**: The model answer is significantly inaccurate or missing important information.\n- **0.0**: The model answer is completely incorrect, hallucinates policy details, or is irrelevant.\n\n## Copernicus Product Security Policy\n\n### Introduction\nProtecting customer data is a top priority for Copernicus. Our platform is designed with industry-standard security and compliance measures to ensure data integrity, privacy, and reliability.\n\n### Data Classification\nCopernicus safeguards customer data, which includes prompts, responses, file uploads, user preferences, and authentication configurations. Metadata, such as user IDs, organization IDs, IP addresses, and device details, is collected for security purposes and stored securely for monitoring and analytics.\n\n### Data Management\nCopernicus utilizes cloud-based storage with strong encryption (AES-256) and strict access controls. Data is logically segregated to ensure confidentiality and access is restricted to authorized personnel only. Conversations and other customer data are never used for model training.\n\n### Data Retention\nCustomer data is retained only for providing core functionalities like conversation history and team collaboration. Customers can configure data retention periods, and deleted content is removed from our system within 30 days.\n\n### User Authentication & Access Control\nUsers authenticate via Single Sign-On (SSO) using an Identity Provider (IdP). Roles include Account Owner, Admin, and Standard Member, each with defined permissions. User provisioning can be automated through SCIM integration.\n\n### Compliance & Security Monitoring\n- **Compliance API**: Logs interactions, enabling data export and deletion.\n- **Audit Logging**: Ensures transparency for security audits.\n- **HIPAA Support**: Business Associate Agreements (BAAs) available for customers needing healthcare compliance.\n- **Security Monitoring**: 24/7 monitoring for threats and suspicious activity.\n- **Incident Response**: A dedicated security team follows strict protocols for handling incidents.\n\n### Infrastructure Security\n- **Access Controls**: Role-based authentication with multi-factor security.\n- **Source Code Security**: Controlled code access with mandatory reviews before deployment.\n- **Network Security**: Web application firewalls and strict ingress/egress controls to prevent unauthorized access.\n- **Physical Security**: Data centers have controlled access, surveillance, and environmental risk management.\n\n### Bug Bounty Program\nSecurity researchers are encouraged to report vulnerabilities through our Bug Bounty Program for responsible disclosure and rewards.\n\n### Compliance & Certifications\nCopernicus maintains compliance with industry standards, including SOC 2 and GDPR. Customers can access security reports and documentation via our Security Portal.\n\n### Conclusion\nCopernicus prioritizes security, privacy, and compliance. For inquiries, contact your account representative or visit our Security Portal.\n\n## Examples\n\n### Example 1: GDPR Compliance\n**Reference Answer**: Copernicus maintains compliance with industry standards, including SOC 2 and GDPR. Customers can access security reports and documentation via our Security Portal.\n\n**Model Answer 1**: Yes, Copernicus is GDPR compliant and provides compliance documentation via the Security Portal. \n**Score: 1.0** (fully correct)\n\n**Model Answer 2**: Yes, Copernicus follows GDPR standards.\n**Score: 0.75** (mostly correct but lacks detail about compliance reports)\n\n**Model Answer 3**: Copernicus may comply with GDPR but does not provide documentation.\n**Score: 0.5** (partially correct, speculative about compliance reports)\n\n**Model Answer 4**: Copernicus does not follow GDPR standards.\n**Score: 0.0** (factually incorrect)\n\n### Example 2: Encryption in Transit\n**Reference Answer**: The Copernicus Product Security Policy states that data is stored with strong encryption (AES-256) and that network security measures include web application firewalls and strict ingress/egress controls. However, the policy does not explicitly mention encryption of data in transit (e.g., TLS encryption). A review is needed to confirm whether data transmission is encrypted.\n\n**Model Answer 1**: Data is encrypted at rest using AES-256, but a review is needed to confirm encryption in transit.\n**Score: 1.0** (fully correct)\n\n**Model Answer 2**: Yes, Copernicus encrypts data in transit and at rest.\n**Score: 0.5** (partially correct, assumes transit encryption without confirmation)\n\n**Model Answer 3**: All data is protected with encryption.\n**Score: 0.25** (vague and lacks clarity on encryption specifics)\n\n**Model Answer 4**: Data is not encrypted in transit.\n**Score: 0.0** (factually incorrect)\n\nReference Answer: {{item.explanation}}\nModel Answer: {{sample.output_json.explanation}}\n"
              }
            ],
            "model": "gpt-4o-2024-08-06"
          },
          "compliant": {
            "name": "compliant",
            "type": "string_check",
            "reference": "{{item.compliant}}",
            "operation": "eq",
            "input": "{{sample.output_json.compliant}}"
          }
        },
        "calculate_output": "0.5 * compliant + 0.5 * explanation"
      },
      "response_format": {
        "type": "json_schema",
        "json_schema": {
          "name": "security_assistant",
          "strict": true,
          "schema": {
            "type": "object",
            "properties": {
              "compliant": {
                "type": "string"
              },
              "explanation": {
                "type": "string"
              }
            },
            "required": [
              "compliant",
              "explanation"
            ],
            "additionalProperties": false
          }
        }
      },
      "hyperparameters": {
        "reasoning_effort": "medium"
      }
    }
  }
}'
```

This request returns a [fine-tuning job object](https://developers.openai.com/api/docs/api-reference/fine-tuning/object), which includes a job `id`. Use this ID to monitor the progress of your job and retrieve the fine-tuned model when the job is complete.

To qualify for [data sharing inference pricing](https://developers.openai.com/api/docs/pricing#fine-tuning), make sure to [share evaluation and fine-tuning data](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai#h_c93188c569) with OpenAI before creating the job. You can verify the job was marked as shared by confirming `shared_with_openai` is set to `true`.

### Monitoring your fine-tune job

Fine-tuning jobs take some time to complete, and RFT jobs tend to take longer than SFT or DPO jobs. To monitor the progress of your fine-tune job, use the [fine-tuning dashboard](https://platform.openai.com/finetune) or the [API](https://developers.openai.com/api/docs/api-reference/fine-tuning).

#### Reward metrics

For reinforcement fine-tuning jobs, the primary metrics are the per-step **reward** metrics. These metrics indicate how well your model is performing on the training data. They're calculated by the graders you defined in your job configuration. These are two separate top-level reward metrics:

- `train_reward_mean`: The average reward across the samples taken from all datapoints in the current step. Because the specific datapoints in a batch change with each step, `train_reward_mean` values across different steps are not directly comparable and the specific values can fluctuate drastically from step to step.
- `valid_reward_mean`: The average reward across the samples taken from all datapoints in the validation set, which is a more stable metric.

![Reward Metric Graph](https://cdn.openai.com/API/images/guides/RFT_Reward_Chart.png)

Find a full description of all training metrics in the [training metrics](#training-metrics) section.

#### Pausing and resuming jobs

To evaluate the current state of the model when your job is only partially finished, **pause** the job to stop the training process and produce a checkpoint at the current step. You can use this checkpoint to evaluate the model on a held-out test set. If the results look good, **resume** the job to continue training from that checkpoint. Learn more in [pausing and resuming jobs](#pausing-and-resuming-jobs).

#### Evals integration

Reinforcement fine-tuning jobs are integrated with our [evals product](https://developers.openai.com/api/docs/guides/evals). When you make a reinforcement fine-tuning job, a new eval is automatically created and associated with the job. As validation steps are performed, we combine the input prompts, model samples, and grader outputs to make a new [eval run](https://developers.openai.com/api/docs/guides/evals#creating-an-eval-run) for that step.

Learn more about the evals integration in the [appendix](#evals-integration-details) section below.

## Evaluate the results

By the time your fine-tuning job finishes, you should have a decent idea of how well the model is performing based on the mean reward value on the validation set. However, it's possible that the model has either *overfit* to the training data or has learned to [reward hack](https://en.wikipedia.org/wiki/Reward_hacking) your grader, which allows it to produce high scores without actually being correct. Before deploying your model, inspect its behavior on a representative set of prompts to ensure it behaves how you expect.

Understanding the model's behavior can be done quickly by inspecting the evals associated with the fine-tuning job. Specifically, pay close attention to the run made for the final training step to see the end model's behavior. You can also use the evals product to compare the final run to earlier runs and see how the model's behavior has changed over the course of training.

### Try using your fine-tuned model

Evaluate your newly optimized model by using it! When the fine-tuned model finishes training, use its ID in either the [Responses](https://developers.openai.com/api/docs/api-reference/responses) or [Chat Completions](https://developers.openai.com/api/docs/api-reference/chat) API, just as you would an OpenAI base model.

```
Use your model in the Playground


Use your model with an API call
```

### Use checkpoints if needed

Checkpoints are models you can use that are created before the final step of the training process. For RFT, OpenAI creates a full model checkpoint at each validation step and keeps the three with the highest `valid_reward_mean` scores. Checkpoints are useful for evaluating the model at different points in the training process and comparing performance at different steps.

```
Find checkpoints in the dashboard


Query the API for checkpoints
```
