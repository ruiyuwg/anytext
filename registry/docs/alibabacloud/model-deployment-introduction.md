Deploy a model on dedicated inference resources to meet performance requirements such as high concurrency, low latency, and predictable traffic.

**Important**

This document applies only to the China (Beijing) region.

## Supported models and pricing

Deployment uses **Provisioned Throughput**, billed by usage duration and Provisioned Throughput Unit (PTU).

Before you deploy, check the estimated hourly cost for each model in the [Deployment console (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/efm/model_deploy).

****Model****

****Type****

****Context window (input + output)****

****Max input tokens****

****Pay-as-you-go (hourly)****

****Subscription (daily)****

**Input (per 10k TPM)**

**Output (per 1k TPM)**

**Input (per 10k TPM)**

**Output (per 1k TPM)**

Qwen3-Max-2025-09-23

Instruct

128,000

128,000

$1.11

$0.45

$13.32

$5.40

Qwen-Plus-2025-12-01

Instruct

$0.28

$0.07

$3.36

$0.84

Qwen-Plus-2025-12-01

Thinking

$0.28

$3.36

Qwen-Flash-2025-07-28

Instruct/Thinking

$0.06

$0.06

$0.72

$0.72

Qwen3-VL-Plus-2025-09-23

Instruct/Thinking

$0.35

$0.35

$4.20

$4.20

DeepSeek-v3.2

Instruct/Thinking

64,000

$1.04

$0.16

$12.48

$1.92

**Model types:**

-   **Instruct**: The model runs in non-thinking mode after deployment.
    
-   **Thinking**: The model runs in thinking mode after deployment.
    

To deploy models beyond this list, see available options in this [deployment solution](https://www.alibabacloud.com/solution/tech-solution/deepseek-r1-for-platforms).

View token usage and call statistics for individual invocations in the [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/model-telemetry) console.

## Deploy a model

**Note**

If you get a permission error, see [What to do if I get a permission error during deployment](#5c1c099745drz) in the FAQ section.

1.  Go to the [Deployment console (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/efm/model_deploy).
    
    ![Deployment console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472002771/p1054716.png)
    
2.  Select a model and billing method. Keep other settings at their defaults. Set a model name and start the deployment.
    
3.  When the deployment status shows **Running**, the model is ready.
    

**Important**

Billing starts as soon as the model is deployed.

## Invoke a deployed model

After deployment, invoke the model through one of these APIs:

-   [OpenAI compatible API](/help/en/model-studio/qwen-api-reference/#d397bcc41eu3q)
    
-   [DashScope API](/help/en/model-studio/qwen-api-reference/#69cac67a477k2)
    
-   [Assistant SDK](/help/en/model-studio/assistant#87b4aacb4bsww)
    

Set the `model` parameter to the **Model Code** shown in the [Deployment console (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/efm/model_deploy).

![Model Code in the deployment console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7472002771/p1051901.png)

### OpenAI compatible

```
import os
from openai import OpenAI

client = OpenAI(
    # If you haven't configured an environment variable, replace the next line with: api_key="sk-xxx",
    api_key=os.getenv('DASHSCOPE_API_KEY'),
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

completion = client.chat.completions.create(
    model="<your-deployed-model-code>",  # Replace with your Model Code from the deployment console
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who are you?"},
    ],
    extra_body={"enable_thinking": False},
)
print(completion)
```

### DashScope

```
import os
import dashscope

messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Who are you?"},
]
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
response = dashscope.Generation.call(
    # If you haven't configured an environment variable, replace the next line with: api_key="sk-xxx",
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    model="<your-deployed-model-code>",  # Replace with your Model Code from the deployment console
    messages=messages,
    result_format="message",
    enable_thinking=False,
)
print(response)
```

Replace `<your-deployed-model-code>` with the **Model Code** from the deployment console.

## Scale a deployed service

Click **Scaling** in the [Deployment console (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/efm/model_deploy) to manually adjust the number of instances.

## Deactivate a deployed service

1.  Go to the [Deployment console (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/efm/model_deploy).
    
2.  Find the service and click **Deactivate**, then confirm.
    

Billing stops after deactivation.

![Deactivate a deployed service](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7472002771/p1051902.png)

## Billing

### Billing methods

**Important**

You cannot change the billing method after you create the service. To switch, deactivate the deployed model and redeploy it.

****Pay-as-you-go****

****Subscription****

**Minimum billing unit**

Per minute

Per day

**Scaling**

Self-service throughput adjustment

Self-service throughput adjustment

**Advantages**

Stable throughput capacity, lower latency, and stronger resource certainty for high-load production environments

Stable throughput capacity, lower latency, and stronger resource certainty for high-load production environments. Supports auto-renewal.

**Early termination**

N/A

Days already used are charged at **1.5x** the standard rate

**Overdue payment**

Resources remain active and billed for **24 hours**, then released automatically

N/A

### Billing formula

```
Cost = Usage duration x (Input TPM unit price x Input TPM + Output TPM unit price x Output TPM)
```

### Subscription lifecycle

-   Orders take effect immediately after payment and expire at **23:59 on day N**. Orders placed after 22:00 have the expiration extended by one day.
    
-   After expiration, the service stops after a **2-hour grace period**. Resources are retained for **14 hours** before release.
    
-   Subscription orders cannot be terminated early.
    

### Overflow handling

If input exceeds the maximum input token limit or the purchased TPM quota, calls automatically fall back to Model Studio's standard [model invocation](/help/en/model-studio/model-pricing) service. When this happens:

-   Inference performance may degrade.
    
-   [Rate limiting](/help/en/model-studio/rate-limit) applies to your workspace.
    
-   Costs are calculated at standard [pay-as-you-go invocation rates](/help/en/model-studio/model-pricing).
    
-   The API response includes the header `x-dashscope-ptu-overflow:true`.
    

Monitor TPM statistics in the [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/model-telemetry) console.

## FAQ

### Can I deploy my own models?

Not currently. Model Studio does not support uploading and deploying custom models at this time. Check the latest announcements for updates.

To deploy your own models, use [Platform for AI (PAI)](/help/en/pai/user-guide/deploy-an-llm/).

### What to do if I get a permission error during deployment

**"Lack permissions for this module"**

Grant the **ModelDeploy-FullAccess** permission to your account in the workspace's Permissions page.

![Workspace permissions page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7472002771/p1030122.png)

If you cannot proceed, contact your organization or IT administrator.

**"Workspace xx does not have deployment privilege for model xx"**

Go to the [Workspaces](https://bailian.console.alibabacloud.com/cn-beijing/?tab=globalset#/efm/business_management) page and add deployment permissions for the model to the workspace.

> API error message: `Workspace xxx does not have deployment privilege for model xxxx`.

![Workspace deployment privilege error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7472002771/p1030115.png)![Add model permissions to workspace](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7472002771/p1030118.png)

If you cannot resolve the error, contact your organization or IT administrator.
