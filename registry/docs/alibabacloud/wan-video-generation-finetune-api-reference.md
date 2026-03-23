Fine-tune Wan image-to-video models through the Model Studio API. This reference covers each API operation in the fine-tuning workflow -- from dataset upload through model deployment.

## Workflow overview

A typical fine-tuning workflow follows this sequence:

1.  **Upload a dataset** -- Upload training data (`.zip`) and get a file ID.
    
2.  **Create a fine-tuning job** -- Start training with a base model and the uploaded dataset.
    
3.  **Query job status** -- Poll until training completes (several hours).
    
4.  **Deploy the model** -- Publish the fine-tuned model as an API service.
    
5.  **Query deployment status** -- Poll until deployment is ready (5–10 minutes).
    
6.  **Generate videos** -- Call the deployed model.
    

Optional operations:

-   **Manage checkpoints** -- List, preview, and export specific training checkpoints.
    
-   **Manage jobs** -- List, cancel, or delete fine-tuning jobs.
    
-   **Delete deployments** -- Take a deployed model offline.
    

## Before you begin

**Region:** Only the Singapore region is supported under the [international deployment mode](/help/en/model-studio/regions/). Use an [API key](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/api-key) from this region.

**API key:** [Create an API key](/help/en/model-studio/get-api-key) and [set it as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables).

**Background reading:** Read the [fine-tuning overview](/help/en/model-studio/wan-video-generation-finetune-guide) to understand supported models, data format, fine-tuning steps, and billing.

**Sample datasets:**

**Mode**

**Training set**

**Validation set**

Image-to-video (first frame)

[Download](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251208/kkbfoc/wan-i2v-training-dataset.zip)

[Download](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20251208/orzmbx/wan-i2v-valid-dataset.zip)

Image-to-video (first and last frames)

[Download](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20260113/tumtay/wan-kf2v-training-dataset.zip)

[Download](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20260113/xfwyiq/wan-kf2v-valid-dataset.zip)

### Supported base models

**Mode**

**Model ID**

Image-to-video (first frame)

`wan2.6-i2v`, `wan2.5-i2v-preview`, `wan2.2-i2v-flash`

Image-to-video (first and last frames)

`wan2.2-kf2v-flash`

## Upload a dataset

**Note**

When using the API, the zip package size must be ≤ 1GB.

Upload a `.zip` dataset and get a file ID to create fine-tuning jobs.

### Request

```
POST https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files
Content-Type: multipart/form-data
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`file`

Body (form-data)

file

Yes

Local `.zip` dataset. Pass as `files=@"<file_path>"`.

`@"./wan-i2v-training-dataset.zip"`

`purpose`

Body (form-data)

string

Yes

Fixed to `fine-tune`.

`fine-tune`

### Response

**Field**

**Type**

**Description**

**Example**

`id`

string

File ID for creating fine-tuning jobs.

`file-ft-b2416bacc4d742xxxx`

`object`

string

Upload type.

`file`

`bytes`

integer

File size in bytes.

`73310369`

`filename`

string

File name.

`wan-i2v-training-dataset.zip`

`purpose`

string

Fixed to `fine-tune`.

`fine-tune`

`status`

string

Upload status. `processed` means the upload succeeded.

`processed`

`created_at`

integer

Creation time as a UNIX timestamp.

`1766127125`

### Example

**Request**

```
curl --location --request POST 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1/files' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--form 'file=@"./wan-i2v-training-dataset.zip"' \
--form 'purpose="fine-tune"'
```

**Response**

Copy the `id` value for the next step.

```
{
    "id": "file-ft-b2416bacc4d742xxxx",
    "object": "file",
    "bytes": 73310369,
    "filename": "wan-i2v-training-dataset.zip",
    "purpose": "fine-tune",
    "status": "processed",
    "created_at": 1766127125
}
```

**Next step:** Use the file ID to [create a fine-tuning job](#03af17bea7l1w).

## Create a fine-tuning job

Start training with a base model and uploaded dataset.

### Request

```
POST https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes
Content-Type: application/json
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`model`

Body

string

Yes

Base model ID (see [Supported base models](#a242dac535nqt)).

`wan2.5-i2v-preview`

`training_file_ids`

Body

array\[string\]

Yes

Training set file IDs. Accepts multiple IDs.

`["file-ft-b2416bacc4d742xxxx"]`

`validation_file_ids`

Body

array\[string\]

No

Validation set file IDs (if omitted, training set is auto-split).

\-

`training_type`

Body

string

Yes

Fine-tuning method. Only `efficient_sft` (LoRA) is supported.

`efficient_sft`

`hyper_parameters`

Body

object

No

Hyperparameter settings. See [Hyperparameters](#5f391e4b3cezf).

See below

### Hyperparameters

Defaults work well for first runs. Adjust `n_epochs` or `learning_rate` if needed.

#### Quick-start defaults

**Model**

**`batch_size`**

**`n_epochs`**

**`learning_rate`**

**`max_pixels`**

**`eval_epochs`**

wan2.6-i2v

2

400

2e-5

36864

50

wan2.5-i2v-preview

2

400

2e-5

36864

50

wan2.2-i2v-flash

4

400

2e-5

262144

50

wan2.2-kf2v-flash

4

400

2e-5

262144

50

#### Full parameter reference

**Parameter**

**Type**

**Required**

**Description**

**Default**

`batch_size`

int

Yes

Samples per training step (use model default above).

2 or 4

`n_epochs`

int

Yes

Training epochs. Total steps = `n_epochs` × `ceil(dataset_size / batch_size)` (minimum 800 steps required). For 5 samples with `batch_size=2`: `ceil(5/2)=3` steps/epoch, so minimum `n_epochs = ceil(800/3) = 267`.

400

`learning_rate`

float

Yes

Weight update magnitude (too high degrades model; too low has minimal effect).

2e-5

`eval_epochs`

int

Yes

Epochs between evaluations (must be ≥ `n_epochs / 10`).

50

`max_pixels`

int

Yes

Maximum pixels (width × height). Videos exceeding this are downscaled. wan2.6/2.5: 16384–36864; wan2.2: 65536–262144.

36864 or 262144

`split`

float

No

Training-validation split ratio. Takes effect only when `validation_file_ids` is not provided. `0.9` means 90% training, 10% validation.

0.9

`max_split_val_dataset_sample`

int

No

Maximum validation samples when auto-splitting. `Validation size = min(total * (1 - split), max_split_val_dataset_sample)`. For example, 100 samples with `split=0.9` and this value set to 5: calculated validation = 10, capped to 5.

5

`save_total_limit`

int

No

Maximum number of checkpoints to keep. Only the last N checkpoints are retained.

20

`lora_rank`

int

No

LoRA low-rank matrix dimension. Larger values increase fitting capacity but slow training. Must be a power of 2 (16, 32, 64).

32

`lora_alpha`

int

No

LoRA weight scaling factor. Adjusts how much the fine-tuned parameters influence the base model weights. Must be a power of 2 (16, 32, 64).

32

### Response

**Field**

**Type**

**Description**

**Example**

`request_id`

string

Request ID.

`0eb05b0c-02ba-414a-9d0c-xxxxxxxxx`

`output.job_id`

string

Fine-tuning job ID. Required to query job status.

`ft-202511111122-xxxx`

`output.job_name`

string

Job name.

`ft-202511111122-xxxx`

`output.status`

string

Job status. See [Job status values](#977caa6c1for9).

`PENDING`

`output.finetuned_output`

string

Fine-tuned model name. Required for deployment.

`wan2.5-i2v-preview-ft-202511111122-xxxx`

`output.model`

string

Base model used.

`wan2.5-i2v-preview`

`output.base_model`

string

Base model used.

`wan2.5-i2v-preview`

`output.training_file_ids`

array

Training set file IDs.

`["file-ft-b2416bacc4d742xxxx"]`

`output.validation_file_ids`

array

Validation set file IDs. Empty if none were uploaded.

`[]`

`output.hyper_parameters`

object

Hyperparameters applied to this job.

`{...}`

`output.training_type`

string

Fixed to `efficient_sft`.

`efficient_sft`

`output.create_time`

string

Job creation time.

`2025-11-11 11:22:22`

`output.workspace_id`

string

Workspace ID. See [Get a workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#d3eb3cd37b7fu).

`llm-xxxxxxxxx`

`output.user_identity`

string

Alibaba Cloud account ID.

`12xxxxxxx`

`output.modifier`

string

Account ID of the last modifier.

`12xxxxxxx`

`output.creator`

string

Account ID of the creator.

`12xxxxxxx`

`output.group`

string

Job group.

`llm`

`output.max_output_cnt`

integer

Maximum checkpoints to save. Equals `save_total_limit`.

`20`

#### Job status values

**Status**

**Meaning**

`PENDING`

Pending.

`QUEUING`

Queued (one job at a time).

`RUNNING`

In progress.

`CANCELING`

Canceling.

`SUCCEEDED`

Completed.

`FAILED`

Failed.

`CANCELED`

Canceled.

### Examples

Replace `<training-dataset-file-id>` with the file ID from the [Upload a dataset](#03af17bea7l1w) response.

#### wan2.6-i2v

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model":"wan2.6-i2v",
    "training_file_ids":[
        "<training-dataset-file-id>"
    ],
    "training_type":"efficient_sft",
    "hyper_parameters":{
        "n_epochs":400,
        "batch_size":2,
        "learning_rate":2e-5,
        "split":0.9,
        "eval_epochs": 50,
        "max_pixels": 36864
    }
}'
```

#### wan2.5-i2v-preview

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model":"wan2.5-i2v-preview",
    "training_file_ids":[
        "<training-dataset-file-id>"
    ],
    "training_type":"efficient_sft",
    "hyper_parameters":{
        "n_epochs":400,
        "batch_size":2,
        "learning_rate":2e-5,
        "split":0.9,
        "eval_epochs": 50,
        "max_pixels": 36864
    }
}'
```

#### wan2.2-i2v-flash

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model":"wan2.2-i2v-flash",
    "training_file_ids":[
        "<training-dataset-file-id>"
    ],
    "training_type":"efficient_sft",
    "hyper_parameters":{
        "n_epochs":400,
        "batch_size":4,
        "learning_rate":2e-5,
        "split":0.9,
        "eval_epochs": 50,
        "max_pixels": 262144
    }
}'
```

#### wan2.2-kf2v-flash (first and last frames)

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model":"wan2.2-kf2v-flash",
    "training_file_ids":[
        "<training-dataset-file-id>"
    ],
    "training_type":"efficient_sft",
    "hyper_parameters":{
        "n_epochs":400,
        "batch_size":4,
        "learning_rate":2e-5,
        "split":0.9,
        "eval_epochs": 50,
        "max_pixels": 262144
    }
}'
```

#### Multiple training and validation sets

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model":"wan2.5-i2v-preview",
    "training_file_ids":[
        "<training-set-file-id-1>",
        "<training-set-file-id-2>"
    ],
    "validation_file_ids":[
         "<validation-set-file-id-1>",
         "<validation-set-file-id-2>"
    ],
    "training_type":"efficient_sft",
    "hyper_parameters":{
        "n_epochs":400,
        "batch_size":2,
        "learning_rate":2e-5,
        "split":0.9,
        "eval_epochs": 50,
        "max_pixels": 36864
    }
}'
```

#### Response

Copy `output.job_id` (to query status) and `output.finetuned_output` (to deploy the model).

```
{
    "request_id": "0eb05b0c-02ba-414a-9d0c-xxxxxxxxx",
    "output": {
        "job_id": "ft-202511111122-xxxx",
        "job_name": "ft-202511111122-xxxx",
        "status": "PENDING",
        "finetuned_output": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "model": "wan2.5-i2v-preview",
        "base_model": "wan2.5-i2v-preview",
        "training_file_ids": [
            "xxxxxxxxxxxx"
        ],
        "validation_file_ids": [],
        "hyper_parameters": {
            "n_epochs": 400,
            "batch_size": 2,
            "learning_rate": 2.0E-5,
            "split": 0.9,
            "eval_epochs": 50
        },
        "training_type": "efficient_sft",
        "create_time": "2025-11-11 11:22:22",
        "workspace_id": "llm-xxxxxxxxx",
        "user_identity": "12xxxxxxx",
        "modifier": "12xxxxxxx",
        "creator": "12xxxxxxx",
        "group": "llm",
        "max_output_cnt": 20
    }
}
```

**Next step:** [Query the job status](#a242dac535nqt) and wait for training to complete.

## Query job status

Check job progress. Poll until `status` is `SUCCEEDED`.

> Training takes several hours (varies by model and dataset size).

### Request

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`job_id`

Path

string

Yes

Fine-tuning job ID from the [create job](#03af17bea7l1w) response.

`ft-202511111122-xxxx`

### Response

All fields from the [create job](#03af17bea7l1w) response are returned, plus:

**Field**

**Type**

**Description**

**Example**

`output.end_time`

string

Job completion time.

`2025-11-11 16:49:01`

`output.output_cnt`

integer

Actual number of saved checkpoints.

`8`

`output.usage`

integer

Total training tokens (for billing).

`432000`

### Example

Replace `<fine-tuning-job-id>` with the `job_id` from the create job response.

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json'
```

**Response**

When `status` is `SUCCEEDED`, training is complete. The `usage` field shows total tokens consumed for billing.

```
{
    "request_id": "9bbb953c-bef2-4b59-9fc5-xxxxxxxxx",
    "output": {
        "job_id": "ft-202511111122-xxxx",
        "job_name": "ft-202511111122-xxxx",
        "status": "SUCCEEDED",
        "finetuned_output": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "model": "wan2.5-i2v-preview",
        "base_model": "wan2.5-i2v-preview",
        "training_file_ids": [
            "xxxxxxxxxxxx"
        ],
        "validation_file_ids": [],
        "hyper_parameters": {
            "n_epochs": 400,
            "batch_size": 2,
            "learning_rate": 2.0E-5,
            "split": 0.9,
            "eval_epochs": 50
        },
        "training_type": "efficient_sft",
        "create_time": "2025-11-11 11:22:22",
        "workspace_id": "llm-xxxxxxxxx",
        "user_identity": "xxxxxxxxx",
        "modifier": "xxxxxxxxx",
        "creator": "xxxxxxxxx",
        "end_time": "2025-11-11 16:49:01",
        "group": "llm",
        "usage": 432000,
        "max_output_cnt": 8,
        "output_cnt": 8
    }
}
```

**Next step:** [Deploy the model](#836890b48brgk) or [manage checkpoints](#0056d52af0alb) to select a specific checkpoint.

## Deploy a model

Publish a fine-tuned model as an API service after job status is `SUCCEEDED`.

### Request

```
POST https://dashscope-intl.aliyuncs.com/api/v1/deployments
Content-Type: application/json
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`model_name`

Body

string

Yes

Model to deploy (`output.finetuned_output` from job response or `output[].model_name` from checkpoint).

`wan2.5-i2v-preview-ft-202511111122-xxxx`

`capacity`

Body

integer

Yes

Model instances (set to `1`).

`1`

`plan`

Body

string

Yes

Fixed to `lora`.

`lora`

`aigc_config`

Body

object

Yes

Prompt configuration. See below.

\-

### Prompt configuration (aigc\_config)

**Parameter**

**Type**

**Required**

**Description**

`use_input_prompt`

boolean

Yes

`false` (default): The system ignores the prompt in API requests and auto-generates one from the image and the templates below. `true`: The system uses the prompt from the API request directly, and ignores the template parameters.

`prompt`

string

Yes

Preset prompt template (active when `use_input_prompt=false`). System analyzes input image, fills subject/environment descriptions, and appends effect instructions. **Overrides** prompts from invocation API.

`lora_prompt_default`

string

Yes

Fallback template (active when `use_input_prompt=false` and `prompt` generation fails).

How to write the prompt template

When `use_input_prompt=false`, the system auto-generates a complete prompt from the input image. Configure the `prompt` parameter so callers only need to upload an image.

**Structure:** Instruction + Output template + Example

```
Provide a video description based on the image content. The description must
include "Then the s86b5p money rain effect begins, and countless enormous US
dollar bills (beige with dark green patterns) pour down like a torrential rain,
densely hitting and surrounding her (him). The bills continue to fall as the
camera slowly zooms in. She (he) stretches her (his) arms upward, neck slightly
tilted back, with a surprised expression, completely immersed in this wild
money rain".

Output template:
The video begins by showing [subject description]. [Environment description].
Then the s86b5p money rain effect begins, and countless enormous US dollar bills
(beige with dark green patterns) pour down like a torrential rain, densely
hitting and surrounding her (him). The bills continue to fall as the camera
slowly zooms in. She (he) stretches her (his) arms upward, neck slightly tilted
back, with a surprised expression, completely immersed in this wild money rain.

Example:
The video begins by showing a young woman on a beach. Her hair is wet, dark
brown, curly, and slightly messy. She has a bright smile on her face. The
background shows rough waves and distant mountains. Then the s86b5p money rain
effect begins, and countless enormous US dollar bills (beige with dark green
patterns) pour down like a torrential rain, densely hitting and surrounding her.
The bills continue to fall as the camera slowly zooms in. She stretches her arms
upward, neck slightly tilted back, with a surprised expression, completely
immersed in this wild money rain.
```

> For details on writing video prompts, see [Video annotation: Write prompts for videos](/help/en/model-studio/wan-video-generation-finetune-guide#102ebee9f3dtq).

### Response

**Field**

**Type**

**Description**

**Example**

`request_id`

string

Request ID.

`0eb05b0c-02ba-414a-9d0c-xxxxxxxxx`

`output.deployed_model`

string

Deployed model ID. Required to query deployment status and call the model.

`wan2.5-i2v-preview-ft-202511111122-xxxx`

`output.model_name`

string

Model ID name.

`wan2.5-i2v-preview-ft-202511111122-xxxx`

`output.status`

string

Deployment status. See [Deployment status values](#848bf20229erb).

`PENDING`

`output.base_model`

string

Base model used.

`wan2.5-i2v-preview`

`output.gmt_create`

string

Task creation time.

`2025-11-11T17:46:53.294`

`output.gmt_modified`

string

Task update time.

`2025-11-11T17:46:53.294`

`output.workspace_id`

string

Workspace ID. See [Get a workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id#d3eb3cd37b7fu).

`llm-xxxxxxxxx`

`output.charge_type`

string

Billing method. `post_paid` = pay-as-you-go.

`post_paid`

`output.creator`

string

Creator's account ID.

`12xxxxxxx`

`output.modifier`

string

Modifier's account ID.

`12xxxxxxx`

`output.plan`

string

Deployment method.

`lora`

### Examples

Replace `<model-name>` with the `finetuned_output` value from the create job response (or the `model_name` from an exported checkpoint).

#### Image-to-video (first frame)

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/deployments' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model_name": "<model-name>",
    "aigc_config": {
        "use_input_prompt": false,
        "prompt": "Provide a video description based on the image content. The description must include the phrase \"Then the s86b5p money rain effect begins, countless huge-sized US dollar bills (beige background/dark green patterns) pour down like a torrential rain, densely hitting and surrounding her. The bills continue to fall, she/he stretches her/his arms upward, neck slightly tilted back, expression surprised, completely immersed in this wild money rain.\"\nOutput Template:\nThe video begins with a shot of [subject description]. [Environment description]. Then the s86b5p money rain effect begins, countless huge-sized US dollar bills (beige background/dark green patterns) pour down like a torrential rain, densely hitting and surrounding her. The bills continue to fall, she/he stretches her/his arms upward, neck slightly tilted back, expression surprised, completely immersed in this wild money rain.\nExample:\nThe video begins showing a young woman standing in front of a brick wall covered with ivy. She has long, smooth reddish-brown hair, wearing a white sleeveless dress, a shiny silver necklace, and a smile on her face. The brick wall in the background is covered with green vines, appearing rustic and natural. Then the s86b5p money rain effect begins, countless huge-sized US dollar bills (beige background/dark green patterns) pour down like a torrential rain, densely hitting and surrounding her. The bills continue to fall, she stretches her arms upward, neck slightly tilted back, expression surprised, completely immersed in this wild money rain.",
        "lora_prompt_default": "Then the s86b5p money rain effect begins, countless huge-sized US dollar bills (beige background/dark green patterns) pour down like a torrential rain, densely hitting and surrounding her. The bills continue to fall, she/he stretches her/his arms upward, neck slightly tilted back, expression surprised, completely immersed in this wild money rain."
    },
    "capacity": 1,
    "plan": "lora"
}'
```

#### Image-to-video (first and last frames)

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/deployments' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "model_name": "<model-name>",
    "aigc_config": {
        "use_input_prompt": false,
        "prompt": "Provide a video description based on the image content. The description must include the phrase \"Then she/he begins the s86b5p transformation.\"\nOutput Template:\nThe video begins with a shot of [subject description]. [Environment description]. Then she/he begins the s86b5p transformation.\nExample:\nThe video begins with a young woman in an outdoor setting. She has short, curly dark brown hair and a friendly smile. She is wearing a black Polo shirt with colorful floral embroidery. The background features green vegetation and distant mountains. Then she begins the s86b5p transformation.",
        "lora_prompt_default": "Then she/he begins the s86b5p transformation."
    },
    "capacity": 1,
    "plan": "lora"
}'
```

#### Response

`output.status` of `PENDING` means deployment is in progress.

```
{
    "request_id": "96020b2e-9072-4c8a-9981-xxxxxxxxx",
    "output": {
        "deployed_model": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "gmt_create": "2025-11-11T17:46:53.294",
        "gmt_modified": "2025-11-11T17:46:53.294",
        "status": "PENDING",
        "model_name": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "base_model": "wan2.5-i2v-preview",
        "workspace_id": "llm-xxxxxxxxx",
        "charge_type": "post_paid",
        "creator": "12xxxxxxx",
        "modifier": "12xxxxxxx",
        "plan": "lora"
    }
}
```

**Next step:** [Query deployment status](#836890b48brgk) and wait for `status` to become `RUNNING`.

## Query deployment status

Check if a deployed model is ready. Poll until `status` is `RUNNING`.

> Deployment takes 5–10 minutes.

### Request

```
GET https://dashscope-intl.aliyuncs.com/api/v1/deployments/{deployed_model}
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`deployed_model`

Path

string

Yes

Deployed model ID from the [deploy model](#836890b48brgk) response.

`wan2.5-i2v-preview-ft-202511111122-xxxx`

### Response

Same fields as the [deploy model](#836890b48brgk) response, plus additional status values.

#### Deployment status values

**Status**

**Meaning**

`PENDING`

Deploying.

`RUNNING`

Ready to accept requests.

`ARREARS_DOWN`

Stopped due to overdue payment.

`ARREARS_RECOVERING`

Resuming after overdue payment.

`FAILED`

Deployment failed.

`OFFLINING`

Taking service offline.

`UPDATING`

Upgrading or downgrading.

`UPDATING_FAILED`

Upgrade or downgrade failed.

### Example

Replace `<deployed-model>` with `output.deployed_model` from the deploy response.

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/deployments/<deployed-model>' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json'
```

**Response**

When `status` is `RUNNING`, the model is deployed and ready for requests.

```
{
    "request_id": "66d15f35-0772-409f-bc70-xxxxxxxxx",
    "output": {
        "deployed_model": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "gmt_create": "2025-11-11T17:46:53",
        "gmt_modified": "2025-11-11T18:02:24",
        "status": "RUNNING",
        "model_name": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "base_model": "wan2.5-i2v-preview",
        "workspace_id": "llm-xxxxxxxxx",
        "charge_type": "post_paid",
        "creator": "12xxxxxxx",
        "modifier": "12xxxxxxxx",
        "plan": "lora"
    }
}
```

**Next step:** [Call the model to generate a video](/help/en/model-studio/wan-video-generation-finetune-guide#543cc07530gl2).

## Checkpoint management

After training, list checkpoints, preview validation results, export checkpoints, and deploy them.

### List checkpoints

Returns checkpoints with successful validation previews (failed checkpoints excluded).

> Available only after training completes.

#### Request

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}/validation-results
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`job_id`

Path

string

Yes

Fine-tuning job ID.

`ft-202511111122-xxxx`

#### Response

**Field**

**Type**

**Description**

**Example**

`request_id`

string

Request ID.

`0eb05b0c-02ba-414a-9d0c-xxxxxxxxx`

`output`

array\[object\]

List of checkpoints.

\-

`output[].checkpoint`

string

Checkpoint name.

`checkpoint-160`

#### Example

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>/validation-results' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json'
```

**Response**

```
{
    "request_id": "da1310f5-5a21-4e29-99d4-xxxxxx",
    "output": [
        {
            "checkpoint": "checkpoint-160"
        },
        {
            "checkpoint": "checkpoint-20"
        },
        {
            "checkpoint": "checkpoint-40"
        },
        {
            "checkpoint": "checkpoint-60"
        }
    ]
}
```

### Get validation details for a checkpoint

Return validation video for a specific checkpoint.

#### Request

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}/validation-details/{checkpoint}?page_no=1&page_size=10
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`job_id`

Path

string

Yes

Fine-tuning job ID.

`ft-202511111122-xxxx`

`checkpoint`

Path

string

Yes

Checkpoint name.

`checkpoint-160`

`page_no`

Query

integer

No

Page number. Default: `1`.

`1`

`page_size`

Query

integer

No

Results per page. Default: `10`.

`10`

#### Response

**Field**

**Type**

**Description**

**Example**

`request_id`

string

Request ID.

`375b3ad0-d3fa-451f-b629-xxxxxxx`

`output.page_no`

integer

Page number.

`1`

`output.page_size`

integer

Results per page.

`10`

`output.total`

integer

Total validation entries.

`1`

`output.list[].video_path`

string

Video URL (valid 24 hours—download promptly).

`https://finetune-swap-wulanchabu.oss-cn-wulanchabu.aliyuncs.com/xxx.mp4?Expires=xxxx`

`output.list[].prompt`

string

Prompt from the `data.jsonl` annotation file.

`The video begins with a young man...`

`output.list[].first_frame_path`

string

Validation image URL.

`https://finetune-swap-wulanchabu.oss-cn-wulanchabu.aliyuncs.com/xxx.jpeg`

#### Example

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>/validation-details/<checkpoint>?page_no=1&page_size=10' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Response**

> Download within 24 hours before `video_path` expires.

```
{
    "request_id": "375b3ad0-d3fa-451f-b629-xxxxxxx",
    "output": {
        "page_no": 1,
        "page_size": 10,
        "total": 1,
        "list": [
            {
                "video_path": "https://finetune-swap-wulanchabu.oss-cn-wulanchabu.aliyuncs.com/xxx.mp4?Expires=xxxx",
                "prompt": "The video begins with a young man sitting in a cafe. He is wearing a beige Polo shirt, looking focused and slightly contemplative, with his fingers gently touching his chin. In front of him is a cup of hot coffee. The background is a wall with wooden stripes and a decorative sign. Then the s86b5p money rain effect begins, and countless enormous US dollar bills (beige with dark green patterns) pour down like a torrential rain, densely hitting and surrounding him. The bills continue to fall as he stretches his arms upward, neck slightly tilted back, with a surprised expression, completely immersed in this wild money rain.",
                "first_frame_path": "https://finetune-swap-wulanchabu.oss-cn-wulanchabu.aliyuncs.com/xxx.jpeg"
            }
        ]
    }
}
```

### Export a checkpoint

Export a checkpoint as a deployable model.

#### Request

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}/export/{checkpoint}?model_name={model_name}
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`job_id`

Path

string

Yes

Fine-tuning job ID.

`ft-202511111122-xxxx`

`checkpoint`

Path

string

Yes

Checkpoint name.

`checkpoint-160`

`model_name`

Query

string

Yes

Console display name (must be globally unique). Use Chinese characters, letters, digits, underscores, or hyphens. For deployment, use `output[].model_name` from the [exported model details](#18e0fbf9cadde) response.

`my-checkpoint-160`

#### Response

**Field**

**Type**

**Description**

**Example**

`request_id`

string

Request ID.

`0eb05b0c-02ba-414a-9d0c-xxxxxxxxx`

`output`

boolean

`true`: request submitted; `false`: failed (retry).

`true`

#### Example

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>/export/<checkpoint>?model_name=<console-display-name>' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Response**

```
{
    "request_id": "0817d1ed-b6b6-4383-9650-xxxxx",
    "output": true
}
```

**Next step:** [Get exported model details](#18e0fbf9cadde) to retrieve the `model_name` for deployment.

### Get exported model details

Return export status and `model_name` for deployment.

#### Request

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}/checkpoints
```

**Parameter**

**Location**

**Type**

**Required**

**Description**

**Example**

`job_id`

Path

string

Yes

Fine-tuning job ID.

`ft-202511111122-xxxx`

#### Response

**Field**

**Type**

**Description**

**Example**

`request_id`

string

Request ID.

`0eb05b0c-02ba-414a-9d0c-xxxxxxxxx`

`output`

array\[object\]

Checkpoint details.

\-

`output[].create_time`

string

Creation time.

`2025-11-11T13:27:29`

`output[].job_id`

string

Fine-tuning job ID.

`ft-202511111122-xxxx`

`output[].checkpoint`

string

Checkpoint name.

`checkpoint-160`

`output[].full_name`

string

Full checkpoint ID.

`ft-202511111122-496e-checkpoint-160`

`output[].model_name`

string

Model name for deployment (returned when `status` is `SUCCEEDED`).

`wan2.5-i2v-preview-ft-202511111122-xxxx-c160`

`output[].model_display_name`

string

Display name.

`wan2.5-i2v-preview-ft-202511111122-xxxx`

`output[].status`

string

Export status. See below.

`SUCCEEDED`

#### Export status values

**Status**

**Meaning**

`PENDING`

Queued for export.

`PROCESSING`

Exporting.

`SUCCEEDED`

Export completed.

`FAILED`

Export failed.

`UNSUPPORTED`

Export not supported.

#### Example

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>/checkpoints' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Response**

When target checkpoint `status` is `SUCCEEDED`, save its `model_name` for deployment.

```
{
    "request_id": "b0e33c6e-404b-4524-87ac-xxxxxx",
    "output": [
        {
            "create_time": "2025-11-11T13:42:31",
            "full_name": "ft-202511111122-496e-checkpoint-180",
            "job_id": "ft-202511111122-496e",
            "checkpoint": "checkpoint-180",
            "status": "PENDING"
        },
        {
            "create_time": "2025-11-11T13:27:29",
            "full_name": "ft-202511111122-496e-checkpoint-160",
            "job_id": "ft-202511111122-496e",
            "checkpoint": "checkpoint-160",
            "model_name": "wan2.5-i2v-preview-ft-202511111122-xxxx-c160",
            "model_display_name": "wan2.5-i2v-preview-ft-202511111122-xxxx",
            "status": "SUCCEEDED"
        }
    ]
}
```

### Deploy and call an exported checkpoint

After exporting a checkpoint and getting its `model_name`:

1.  [Deploy the model](#836890b48brgk) -- pass the exported `model_name` as the `model_name` parameter.
    
2.  [Query deployment status](#836890b48brgk) -- wait for `RUNNING`.
    
3.  [Call the model to generate a video](/help/en/model-studio/wan-video-generation-finetune-guide#543cc07530gl2).
    

## Fine-tuning job management

### Query job logs

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}/logs
```

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>/logs' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Response**

```
{
    "request_id": "b7ecb456-6dd1-4f35-a581-xxxxxx",
    "output": {
        "total": 25,
        "logs": [
            "2025-11-11 11:23:37,315 - INFO - data process succeeded, start to fine-tune",
            " Actual number of consumed tokens is 215040 !",
            " Actual number of consumed tokens is 419840 !",
            " Actual number of consumed tokens is 624640 !",
            "2025-11-11 16:31:40,760 - INFO - fine-tuned output got, start to transfer it for inference",
            "2025-11-11 16:32:29,162 - INFO - transfer for inference succeeded, start to deliver it for inference",
            "2025-11-11 16:40:28,784 - INFO - start to save checkpoint",
            "2025-11-11 16:49:01,738 - INFO - finetune-job succeeded",
            "2025-11-11 16:49:02,234 - INFO - ##FT_COMPLETE##"
        ]
    }
}
```

### List fine-tuning jobs

```
GET https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes
```

**Request**

```
curl --location 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

**Response**

```
{
    "request_id": "bf4d3475-f50c-42e2-a263-xxxxxxxxx",
    "output": {
        "page_no": 1,
        "page_size": 10,
        "total": 1,
        "jobs": [
            {
                "job_id": "ft-202511111122-xxxx",
                "job_name": "ft-202511111122-xxxx",
                "status": "SUCCEEDED",
                "finetuned_output": "wan2.5-i2v-preview-ft-202511111122-xxxx",
                "model": "wan2.5-i2v-preview",
                "base_model": "wan2.5-i2v-preview",
                "training_file_ids": [
                    "xxxxxxxxx"
                ],
                "validation_file_ids": [],
                "hyper_parameters": {
                    "n_epochs": 400,
                    "batch_size": 2,
                    "learning_rate": 2.0E-5,
                    "split": 0.9,
                    "eval_epochs": 50
                },
                "training_type": "efficient_sft",
                "create_time": "2025-11-11 11:22:22",
                "workspace_id": "llm-xxxxxxxxx",
                "user_identity": "xxxxxxxxx",
                "modifier": "xxxxxxxxx",
                "creator": "xxxxxxxxx",
                "end_time": "2025-11-11 16:49:01",
                "group": "llm",
                "usage": 432000,
                "max_output_cnt": 8,
                "output_cnt": 8
            }
        ]
    }
}
```

### Cancel a fine-tuning job

```
POST https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}/cancel
```

**Request**

```
curl --location --request POST 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>/cancel' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json'
```

**Response**

```
{
    "request_id": "d8dab938-e32e-40bf-83ab-xxxxxx",
    "output": {
        "status": "success"
    }
}
```

### Delete a fine-tuning job

```
DELETE https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/{job_id}
```

**Request**

```
curl --location --request DELETE 'https://dashscope-intl.aliyuncs.com/api/v1/fine-tunes/<fine-tuning-job-id>' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json'
```

**Response**

```
{
    "request_id": "1301136c-12f2-4504-880a-xxxxxx",
    "output": {
        "status": "success"
    }
}
```

## Deployed model management

### Delete a deployed model

```
DELETE https://dashscope-intl.aliyuncs.com/api/v1/deployments/{deployed_model}
```

**Important**

Immediately takes model offline (**cannot be undone**). Model becomes unavailable and billing stops.

**Request**

```
curl --request DELETE 'https://dashscope-intl.aliyuncs.com/api/v1/deployments/<deployed-model>' \
    --header "Authorization: Bearer $DASHSCOPE_API_KEY" \
    --header 'Content-Type: application/json'
```

**Response**

`status: DELETING` confirms deletion accepted.

```
{
    "request_id": "c2ed2aa2-39b8-4a86-b79e-xxxxxx",
    "output": {
        "deployed_model": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "gmt_create": "2025-11-11T17:46:53",
        "gmt_modified": "2025-12-22T11:18:27.532",
        "status": "DELETING",
        "model_name": "wan2.5-i2v-preview-ft-202511111122-xxxx",
        "base_model": "wan2.5-i2v-preview",
        "workspace_id": "llm-xxxxxx",
        "charge_type": "post_paid",
        "creator": "xxxxxx",
        "modifier": "xxxxxx",
        "plan": "lora"
    }
}
```

Verify deletion by [querying status](#836890b48brgk). `NotFound` confirms removal:

```
{
    "request_id": "eb619064-0c4f-4d29-aa49-xxxxxx",
    "message": "Not found.",
    "code": "NotFound"
}
```
