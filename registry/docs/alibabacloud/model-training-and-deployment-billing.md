This topic describes the billing rules and pricing for model training and model deployment on Alibaba Cloud Model Studio.

## Training billing

### Text generation models – Qwen

**Note**

For the training workflow, see [Qwen model fine-tuning](/help/en/model-studio/text-generation-model-tuning). After training completes, deploy the new model before evaluating or calling it.

**Method**

Billed by training tokens

**Formula**

Model training fee = (Total tokens in training data + Total tokens in mixed training data) × Number of epochs × Training unit price (Minimum billing unit: 1 token)

> View the estimated training fee at the bottom of the [model training console](https://modelstudio.console.alibabacloud.com/#/efm/model_manager/create), and click **Computing Details** to view the total number of training tokens, number of epochs, and training unit price**.**

**Unit price for training**

The following table lists the unit prices for training pre-trained models. The unit price for training a custom model matches that of the corresponding pre-trained model.

#### Qwen

**Service**

**Code**

**Price**

Qwen3-32B

qwen3-32b

$0.008/1,000 tokens

Qwen3-14B

qwen3-14b

$0.0016/1,000 tokens

#### Qwen-VL

**Service**

**Code**

**Price**

Qwen3-VL-8B-Instruct

qwen3-vl-8b-instruct

$0.002/1,000 tokens

Qwen3-VL-8B-Thinking

qwen3-vl-8b-thinking

$0.002/1,000 tokens

### Video generation models – Wan

**Note**

For the training workflow, see [Model fine-tuning](/help/en/model-studio/wan-video-generation-finetune-guide). After training completes, deploy the new model before calling it.

**Method**

Billed by training tokens

**Formula**

Model training fee = Total training tokens × Training unit price (Billing unit: per 1,000 tokens)

**Formula for total training tokens**

TrainingTokensTotal\=(i\=1∑N​billing duration of videoi​)×1024max\_pixels​×n\_epochs

Where:

-   N: Total number of videos in the training set.
    
-   max\_pixels: A hyperparameter specified during training, representing the maximum number of pixels for a video (configured when creating a fine-tuning job).
    
-   n\_epochs: A hyperparameter specified during training, representing the number of loops (configured when creating a fine-tuning job).
    
-   Billing duration calculation rule for a single video: First, round the original video duration (in seconds) to the nearest integer, then determine the final value based on model limits.
    
    -   wan2.6 model: `Billing duration=min(10, rounded duration)`, meaning a single video is billed for a maximum of 10 seconds.
        
    -   wan2.5 model: `Billing duration=min(10, rounded duration)`, meaning a single video is billed for a maximum of 10 seconds.
        
    -   wan2.2 model: `Billing duration=min(5, rounded duration)`, meaning a single video is billed for a maximum of 5 seconds.
        

**Model**

**Code**

**Training price (per 1K tokens)**

Image-to-video (first frame)

wan2.6-i2v

$0.08

wan2.5-i2v-preview

$0.05

wan2.2-i2v-flash

$0.03

Image-to-video (first and last frames)

wan2.2-kf2v-flash

$0.03

**Billing example**

Suppose you fine-tune the **wan2.5 model**. The training set contains two videos: 3.4 seconds and 11.5 seconds. The parameters are max\_pixels = 36864 and n\_epochs = 400. The unit training price is $0.05 per 1,000 tokens.

-   Duration calculation:
    
    -   Video 1: 3.4 seconds is rounded to 3. Billable duration: min(10, 3) = 3 seconds.
        
    -   Video 2: 11.5 seconds is rounded to 11. Billable duration: min(10, 11) = 10 seconds.
        
    -   Total billable duration: 3 + 10 = 13 seconds.
        
-   Total training tokens = 13 × (36864 / 1024) × 400 = 187,200 = 187.2 thousand tokens.
    
-   Model training fee = 187.2 × 0.05 = $9.36.
    

## **Deployment billing**

### **Text generation models: Qwen**

#### Billing by usage duration (PTU)

`**Cost = Usage duration × (Input Tokens Per Minute (TPM) unit price × Input TPM + Output TPM unit price × Output TPM)**`

-   Subscription orders take effect immediately and expire at 23:59 on day N (orders placed after 22:00 extend to day N+1).
    
-   After a subscription order expires, the service stops after a 2-hour grace period. Resources are retained for 14 hours before release.
    
-   Subscription orders cannot be terminated early.
    
-   For pay-as-you-go, if your account has an overdue payment, deployed resources remain active and continue to be billed for 24 hours before they are automatically released.
    

When input exceeds max token limit or purchased TPM quota, calls automatically switch to pay-as-you-go. Performance may degrade, workspace [rate limits](/help/en/model-studio/rate-limit) apply, and [costs](/help/en/model-studio/model-pricing) follow standard pay-as-you-go rates.

-   In this case, the API response header includes: `x-dashscope-ptu-overflow:true`.
    
-   View TPM statistics: [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing?tab=model#/model-telemetry).
    

**Model**

**Type**

**Context window**

**(Input + output tokens)**

**Max input tokens**

**Pay-as-you-go - hourly**

**Subscription - daily**

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

Model types:

-   Instruct: The model runs in **non-thinking mode** after deployment.
    
-   Thinking: The model runs in thinking mode after deployment.
    

## FAQ

#### **Q:** When does billing for model deployment start?

A: Billing starts when the model status changes to **Running**. No charges apply during **Deploying**, **Overdue Payment**, or **Deployment Failed**.

#### **Q:** Am I charged if I cancel a training job?

A: **Yes**. If you cancel training manually, you are charged for all tokens processed before cancellation. Training jobs interrupted by system errors or other non-user causes are not charged.

#### **Q:** How do I view invocation statistics for a deployed model?

A: Visit the [Model Monitoring (Singapore)](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry), [Model Monitoring (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/model-telemetry), or [Model Monitoring (Beijing)](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry) page.
