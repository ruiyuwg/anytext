Process large volumes of requests asynchronously at 50% the cost of real-time inference. Batch inference is OpenAI-compatible and ideal for model evaluation, data labeling, and other bulk workloads.

## **Workflow**

Workflow:

1.  Submit a task: Upload a file with multiple requests.
    
2.  Process asynchronously: The system processes tasks in a background queue. You can monitor task progress and status through the console or API.
    
3.  Download results: When the task completes, the system generates a result file containing successful responses and an error file with details of any failures.
    

## **Availability**

### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), both the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled across global regions, excluding the Chinese mainland.

**Supported models**: qwen-max, qwen-plus, qwen-flash, qwen-turbo.

### Chinese mainland

In the [Chinese mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), both the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are available only in the Chinese mainland.

**Supported models**:

-   **Text generation models**: Stable versions of Qwen-Max, Plus, Flash, and Long, and some `latest` versions. QwQ series (qwq-plus) and some third-party models (deepseek-r1, deepseek-v3) are also supported.
    
-   **Multimodal models**: Stable versions of Qwen-VL-Max, Plus, and Flash, plus some `latest` versions. Also supported is the Qwen-OCR model.
    
-   **Text embedding models**: text-embedding-v4.
    

Supported model names

-   **Text generation**
    
    -   [Qwen-Max](/help/en/model-studio/models#cfc131abafghw): qwen3-max, qwen-max, qwen-max-latest
        
    -   [Qwen-Plus](/help/en/model-studio/models#6c45e49509gtr): qwen3.5-plus, qwen-plus, qwen-plus-latest
        
    -   [Qwen-Flash](/help/en/model-studio/models#d617df95f1g9h): qwen3.5-flash, qwen-flash
        
    -   [Qwen-Long](/help/en/model-studio/models#27b2b3a15d5c6): qwen-long-latest
        
    -   [QwQ](/help/en/model-studio/models#874b221f2cx9k): qwq-plus
        
    -   Third-party models: deepseek-r1, deepseek-v3
        
-   **Multimodal**
    
    -   [Image and video understanding](/help/en/model-studio/vision): qwen3.5-plus, qwen3.5-flash, qwen3-vl-plus, qwen3-vl-flash, qwen-vl-max, qwen-vl-max-latest, qwen-vl-plus, qwen-vl-plus-latest
        
    -   [Text extraction](/help/en/model-studio/qwen-vl-ocr): qwen-vl-ocr
        
-   [**Text embedding models**](https://www.alibabacloud.com/help/zh/model-studio/user-guide/embedding)**:** text-embedding-v4
    

**Important**

-   Some models support thinking mode. When enabled, this mode generates thinking `tokens` and increases costs.
    
-   The `qwen3.5` series (such as `qwen3.5-plus` and `qwen3.5-flash`) enable thinking mode by default. When using hybrid-thinking models, explicitly set the `enable_thinking` parameter (`true` or `false`).
    

## **Usage steps**

### **Step 1: Prepare the input file**

Before creating a task, prepare a file that meets the following requirements:

-   **Format**: UTF-8 encoded JSONL (one independent JSON object per line).
    
-   **Scale limits**: Up to 50,000 requests per file, max 500 MB.
    
    > Split larger datasets into separate tasks.
    
-   **Per-request limit**: Up to 6 MB per JSON object, within the model context window.
    
-   **Consistency**: All requests must use the same model.
    
-   **Unique identifier**: Each request must include a unique \`custom\_id\` field within the file. This identifier is used to match requests with their results.
    

#### **Sample file**

```
{"custom_id":"1","method":"POST","url":"/v1/chat/completions","body":{"model":"qwen-max","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Hello!"}]}}
{"custom_id":"2","method":"POST","url":"/v1/chat/completions","body":{"model":"qwen-max","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"What is 2+2?"}]}}
```

**JSONL batch generation tool**

Use this tool to quickly generate JSONL files.

 JSONL batch generation tool

**Select a mode:**

Chinese Mainland (Beijing) International

**Select a model series:** Text generation model Multimodal model General text embedding model

**Select a specific model:** qwen3-max qwen-max qwen-max-latest qwen-flash (thinking mode) qwen-flash (non-thinking mode) qwen-plus (thinking mode) qwen-plus (non-thinking mode) qwen-plus-latest (thinking mode) qwen-plus-latest (non-thinking mode) qwen-turbo (thinking mode) qwen-turbo (non-thinking mode) qwen-turbo-latest (thinking mode) qwen-turbo-latest (non-thinking mode) qwen-long qwen-long-latest qwq-plus qwq-32b-preview deepseek-r1 deepseek-v3

**Enter your requests (one request per line):** Hello! How can I help you? What is 2+2?

**Paste your media URLs (one or more per line, separated by commas):** **Enter your questions about the media:**

Generate

**Select a mode:**

Chinese Mainland (Beijing) International

**Select a model series:** Text generation model

**Select a specific model:** qwen-max qwen-plus qwen-flash (thinking mode) qwen-flash (non-thinking mode) qwen-turbo

**Enter your requests (one request per line):** Hello! How can I help you? What is 2+2?

Generate

### **Step 2: Submit and view results**

#### **(1) Create a task**

1.  On the **[Batch inference](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-batch)** page, click **Create Batch**.
    
2.  In the dialog box, enter a **Task Name** and **Description**, set the **Maximum Waiting Time** (1 to 14 days), and upload your JSONL file.
    
    > Click **Download Sample File** to download a template.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8235936671/p1014111.png)
    
3.  When ready, click **Confirm**.
    

#### **View and manage tasks**

-   **View**:
    
    -   On the task list page, view the **Progress** (processed/total requests) and **Status** for each task.
        
    -   Search by task name or ID, or filter by workspace to quickly locate a specific task.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6149999571/p1014066.png)
        
-   **Manage**:
    
    -   Cancel: Cancel a running task from the **Actions** column.
        
    -   Troubleshoot: For failed tasks, hover over the status to view an error summary and download the error file for detailed information.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6149999571/p924094.png)
        

#### **Download and analyze results**

When a task completes, click **View Results** to download the output files:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6149999571/p1014076.png)

-   **Result file**: Contains all successful requests and their `response` results.
    
-   **Error file (if any)**: Contains all failed requests and their `error` details.
    

Both files include `custom_id` for matching results with input requests.

### **Step 3: View usage statistics (optional)**

On the [Model Monitoring](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) page, filter and view usage statistics for batch inference.

-   **View data overview**: Select a **Time** (up to 30 days) and set **Inference Type** to **Batches** to display:
    
    -   **Monitoring data**: Summary statistics for all models in the selected period, including total calls and failures.
        
    -   **Model list**: Detailed metrics for each model, including total calls, failure rate, and average call duration.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8235936671/p1023707.png)
    
    > To view inference data older than 30 days, go to the [Bills](https://billing-cost.console.alibabacloud.com/finance/month-bill/account) page.
    
-   **View model details**: In the **Models**, click **Actions** for a specific model, then select **Monitor** to view **Call Statistics** such as call count and usage volume.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8235936671/p1023709.png)
    

**Important**

-   Call data is recorded when tasks complete. Running tasks show no call data until finished.
    
-   Monitoring data has a 1 to 2 hour delay.
    

## **API reference**

Use the OpenAI-compatible API to automate batch task creation and management. Core workflow:

1.  [**Upload a file**](/help/en/model-studio/batch-interfaces-compatible-with-openai/#fdd1a4b6d86id)
    
    Call `POST /v1/files` to upload your file and record the returned file ID.
    
2.  [**Create a task**](/help/en/model-studio/batch-interfaces-compatible-with-openai/#fdd1a4b6d86id)  
    Call `POST /v1/batches` with the file ID from step 1 , and record the returned `batch_id`.  
    
3.  [**Poll status**](/help/en/model-studio/batch-interfaces-compatible-with-openai/#fdd1a4b6d86id)  
    Use the `batch_id` to poll `GET /v1/batches/{batch_id}`. When `status` becomes `completed`, record the `output_file_id` and stop polling.  
    
4.  [**Download results**](/help/en/model-studio/batch-interfaces-compatible-with-openai/#fdd1a4b6d86id)  
    Use the `output_file_id` to call `GET /v1/files/{output_file_id}/content` and download the result file.  
    

For complete Batch API definitions and examples, see [OpenAI compatible - Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/).

## **Task lifecycle**

-   **validating:** The system is verifying file format (JSONL) and request validity.
    
-   **in\_progress:** The system is processing requests.
    
-   **completed:** Result and error files are ready for download.
    
-   **failed:** Validation failed (incorrect format or oversized file). No requests were executed.
    
-   **expired:** The task exceeded the maximum wait time. Create a new task with longer timeout to retry.
    
-   **cancelled:** The task was manually cancelled. Unstarted requests were terminated.
    

## Billing

-   **Unit price:** The input and output tokens for all successful requests are charged at **50%** of the real-time inference price for the corresponding model. For more information, see [Model list](/help/en/model-studio/models#9f8890ce29g5u).
    
-   **Billing scope:**
    
    -   Only requests successfully executed within a task are billed.
        
    -   Requests that fail because of file parsing errors, task execution failures, or row-level errors **do not incur charges**.
        
    -   For canceled tasks, requests successfully completed before the cancellation are still billed as normal.
        

**Note**

-   Batch inference is a separate billing item. It is not eligible for discounts, such as [subscription](https://common-buy-intl.alibabacloud.com/?commodityCode=sfm_llminference_spn_intl) (Savings Plan) or [free quotas for new users](/help/en/model-studio/new-free-quota). It also does not support features such as [context cache](/help/en/model-studio/context-cache).
    
-   Some models, such as qwen3.5-plus and qwen3.5-flash, have thinking mode enabled by default. This mode generates additional thinking tokens, which are billed at the output token price and increase costs. To control costs, set the \`enable\_thinking\` parameter based on task complexity. For more information, see [Deep thinking](/help/en/model-studio/deep-thinking).
    

## FAQ

1.  **Do I need to purchase or enable anything extra?**
    
    No additional setup required. Activate Model Studio and pay as you go.
    
2.  **Why does my task fail immediately after submission (status changes to** `**failed**`**)?**
    
    This typically indicates a file-level error. The task does not execute any inference requests. Check the following:
    
    -   **File format**: Verify it uses strict JSONL format with one complete JSON object per line.
        
    -   **File scale:** Ensure the file size and line count do not exceed limits. For details, see [Prepare the input file](#cdb5ab7b74k2t).
        
    -   **Model consistency:** Verify that the `body.model` field is identical across all requests and that the model is available in your region.
        
3.  **How long does a batch task take?**
    
    Processing time depends on system load. Tasks may queue during peak hours. Results return within the specified timeout.
    

## Error codes

If a call fails with an error message, see [Error messages](/help/en/model-studio/error-code).
