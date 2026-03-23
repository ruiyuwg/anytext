Deploy large language models like DeepSeek and Qwen on EAS with automatic environment setup, performance tuning, and cost management.

## Quick start: Deploy an open source model

This section uses **Qwen3-8B** as an example. The same process applies to other supported models.

### Prerequisites

Before deploying an LLM service, ensure:

-   Model file prepared in supported format (ONNX, PyTorch, TensorFlow SavedModel)
    
-   Model uploaded to OSS bucket in the same region as EAS. For regional availability, see [Regions and zones](/help/en/pai/product-overview/regions-and-zones).
    
-   OSS bucket accessible (test download: `ossutil64 cp oss://bucket/path/model.onnx ./`)
    
-   Account has sufficient balance for selected instance type
    
-   AccessKey configured with AliyunPAIFullAccess permission
    
-   RAM role (if using) has OSS read permission
    

Estimated time: 10-15 minutes (first-time setup: 30 minutes)

### Step 1: Create a service

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  Click **Deploy Service**. In the **Scenario-based Model Deployment** area, click **LLM Deployment**.
    
3.  Configure these parameters:
    
    **Parameter**
    
    **Value**
    
    **Model Settings**
    
    Select **Public Model**. Search for and select **Qwen3-8B**.
    
    **Inference Engine**
    
    Select **vLLM**, which is recommended and compatible with OpenAI API.
    
    **Deployment Template**
    
    Select **Single Machine** to automatically fill in recommended instance type, runtime image, and other parameters.
    
4.  Click **Deploy**. Deployment takes about 5 minutes. Service status changes to **Running** when complete.
    
    **Note**
    
    If deployment fails, see [Service deployment and status issues](/help/en/pai/faq-about-eas#7ae03619d69hr).
    
    **Verification**:
    
    -   Service status should change from "Pending" → "Running" within 5-10 minutes
        
    -   If stuck in "Pending" for more than 15 minutes, check Troubleshooting section
        

### Step 2: Verify deployment

After deployment, verify the service runs correctly using online debugging.

1.  Click the service name to go to the service details page. Switch to the **Online Debugging** tab.
    
2.  Configure request parameters:
    
    **Parameter**
    
    **Value**
    
    **Request Method**
    
    POST
    
    **URL Path**
    
    Append `/v1/chat/completions` to your service URL. For example: `/api/predict/llm_qwen3_8b_test/v1/chat/completions`.
    
    **Body**
    
    ```
    {
      "model": "Qwen3-8B",
      "messages": [
        {"role": "user", "content": "Hello!"}
      ],
      "max_tokens": 1024
    }
    ```
    
    **Headers**
    
    Include `Content-Type: application/json`.
    
3.  Click **Send Request** to receive a response containing the model's reply.
    
    **Verification**:
    
    -   API response should return HTTP 200 OK
        
    -   Response time should be less than 30 seconds for first request (model loading)
        
    -   Subsequent requests should be less than 5 seconds
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0586046571/p1001738.png)

## Call using an API

Before making calls, go to the Overview tab on the service details page. Click **View Endpoint Information** to [obtain endpoint and token](/help/en/pai/user-guide/call-a-service-over-a-public-endpoint#7938832e87pj1).

Call the service using this code:

#### cURL

```
curl -X POST /v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: " \
    -d '{
        "model": "",
        "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "hello"
        }
        ],
        "max_tokens":1024,
        "temperature": 0.7,
        "top_p": 0.8,
        "stream":true
    }'
```

Where:

-   Replace `<EAS_ENDPOINT>` and `<EAS_TOKEN>` with the endpoint and token of your deployed service.
    
-   Replace `<model_name>` with the model name. For vLLM/SGLang, you can retrieve the model name from the model list API at `/v1/models`.
    
    ```
    curl -X GET /v1/models -H "Authorization: "
    ```
    

#### OpenAI SDK

Install the OpenAI SDK: `pip install openai`. Use it to interact with the service.

```
from openai import OpenAI

# 1. Configure the client
# Replace  with the token of your deployed service
openai_api_key = ""
# Replace  with the endpoint of your deployed service
openai_api_base = "/v1"

client = OpenAI(
    api_key=openai_api_key,
    base_url=openai_api_base,
)

# 2. Get the model name
# For BladeLLM, set model = "". BladeLLM does not require the model parameter and does not support client.models.list(). Set it to an empty string to meet the OpenAI SDK's mandatory parameter requirement.
models = client.models.list()
model = models.data[0].id
print(model)

# 3. Send a chat request
# Supports streaming (stream=True) and non-streaming (stream=False) output
stream = True
chat_completion = client.chat.completions.create(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "hello"},
    ],
    model=model,
    top_p=0.8,
    temperature=0.7,
    max_tokens=1024,
    stream=stream,
)

if stream:
    for chunk in chat_completion:
        print(chunk.choices[0].delta.content, end="")
else:
    result = chat_completion.choices[0].message.content
    print(result)
```

#### Python requests library

For scenarios without OpenAI SDK dependency, use the `requests` library.

```
import json
import requests

# Replace with your deployed service endpoint
EAS_ENDPOINT = ""
# Replace with your deployed service token
EAS_TOKEN = ""
# Replace with model name from /v1/models API
# For BladeLLM: Omit "model" field or set to ""
model = ""

# Construct API endpoint URL
url = f"{EAS_ENDPOINT}/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": EAS_TOKEN,
}

# Enable streaming for real-time responses
stream = True
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "hello"},
]

# Build request payload
req = {
    "messages": messages,
    "stream": stream,
    "temperature": 0.7,  # Controls randomness (0.0-2.0)
    "top_p": 0.8,        # Controls diversity (0.0-1.0)
    "max_tokens": 1024,  # Maximum response length
    "model": model,
}

# Send POST request with timeout and error handling
try:
    response = requests.post(
        url,
        json=req,
        headers=headers,
        stream=stream,
        timeout=30  # Prevent hanging on slow model
    )
    response.raise_for_status()  # Raise error for 4xx/5xx

    # Process response based on streaming mode
    if stream:
        # Handle Server-Sent Events (SSE) format
        for chunk in response.iter_lines(chunk_size=8192, decode_unicode=False):
            msg = chunk.decode("utf-8")
            if msg.startswith("data:"):
                info = msg[6:]
                if info == "[DONE]":
                    break
                else:
                    resp = json.loads(info)
                    if resp["choices"][0]["delta"].get("content") is not None:
                        print(resp["choices"][0]["delta"]["content"], end="", flush=True)
    else:
        # Handle non-streaming response
        resp = json.loads(response.text)
        print(resp["choices"][0]["message"]["content"])

except requests.exceptions.Timeout:
    print("Error: Request timeout - model may be loading or overloaded")
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error {response.status_code}: {response.text}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

## Build a local Web UI with Gradio

Gradio is a Python library for creating interactive machine learning interfaces. Follow these steps to run the Gradio WebUI locally.

1.  **Download the code**
    
    [GitHub link](https://github.com/aliyun/pai-examples/blob/master/model-gallery/deploy/llm/vLLM/webui_client.py) | [OSS link](https://pai-quickstart-predeploy-hangzhou.oss-cn-hangzhou.aliyuncs.com/example_codes/model-gallery/deploy/llm/vLLM/webui_client.py)
    
2.  **Prepare the environment**
    
    Requires Python 3.10 or later. Install the dependencies: `pip install openai gradio`.
    
3.  **Start the web application**
    
    Run the following command in your terminal. Replace `<EAS_ENDPOINT>` and `<EAS_TOKEN>` with the endpoint and token of your deployed service.
    
    ```
    python webui_client.py --eas_endpoint "" --eas_token ""
    ```
    
4.  After the application starts successfully, a local URL is displayed, usually `http://127.0.0.1:7860`. Open this URL in a browser to access the UI.
    

## Integrate with third-party applications

Integrate EAS services with clients and development tools that support the OpenAI API using [service endpoint, token](/help/en/pai/user-guide/call-a-service-over-a-public-endpoint#7938832e87pj1), and model name.

#### **Dify**

1.  **Install the OpenAI-API-compatible model provider**
    
    Click your profile picture in the upper-right corner and select **Settings**. In the navigation pane on the left, select **Model Providers**. If **OpenAI-API-compatible** is not in the **Model List**, find it in the list below and click **Install**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003042.png)
    
2.  **Add a model**
    
    Click **Add Model** in the lower-right corner of **OpenAI-API-compatible** card and configure these parameters:
    
    -   Model Type: Select **LLM**.
        
    -   **Model Name**: For vLLM deployments, send a GET request to `/v1/models` API to retrieve name. For example, enter **Qwen3-8B**.
        
    -   **API Key**: Enter EAS service token.
        
    -   **API endpoint URL:** Enter Internet endpoint of EAS service. **Note: Append /v1 to end.**
        
3.  **Usage**
    
    1.  On the Dify main page, click Create Blank App. Select the **Chatflow** type, enter the application name and other information, and then click **Create**.
        
    2.  Click the LLM node, select the model you added, and set the context and prompt.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003076.png)
        
    3.  Click Preview in the upper-right corner and enter a question.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003078.png)
        

#### **Chatbox**

1.  Go to [Chatbox](https://chatboxai.app/zh). Download and install the version for your device, or click **Launch Web App** to use the web version. This example uses macOS on an M3 chip.
    
2.  Add a model provider. Click Settings, add a model provider, enter a name, such as **pai**, and select **OpenAI API Compatible** for the API Mode.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003080.png)
    
3.  Select pai model provider and configure these parameters.
    
    -   **API Key**: Enter EAS service token.
        
    -   **API Host**: Enter Internet endpoint of EAS service. **Note: Append /v1 to end.**
        
    -   **API Path**: Leave empty.
        
    -   Model: Click Get to add a model. If inference engine is BladeLLM, which does not support retrieval through API, click **New** to enter model name.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003084.png)
    
4.  Test the conversation. Click **New Chat**. In the lower-right corner of the text input box, select the model service.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003087.png)
    

#### **Cherry Studio**

1.  **Install the client**
    
    Visit [Cherry Studio](https://docs.cherry-ai.com/cherry-studio/download) to download and install the client.
    
    > You can also download it from `https://github.com/CherryHQ/cherry-studio/releases`.
    
2.  **Configure the model service.**
    
    1.  Click Settings button in lower-left corner. In Model Service section, click **Add**. For **Provider Name**, enter a custom name, such as **PAI**. Set **Provider Type** to **OpenAI**. Click **OK**.
        
    2.  For **API Key**, enter EAS service token. For **API Address**, enter Internet endpoint of EAS service.
        
    3.  Click **Add**. For **Model ID**, enter model name. For vLLM deployments, send a GET request to `/v1/models` API to retrieve name. For example, enter `Qwen3-8B`. Note that name is case-sensitive.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003088.png)
        
    4.  Next to the **API Key** input box, click **Test** to confirm connectivity.
        
3.  **Quickly test model**
    
    Return to dialog box. At top, select model and start a conversation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5589386571/p1003090.png)
    

## Billing

The following items are billable. For more information, see [Billing of Elastic Algorithm Service (EAS)](/help/en/pai/billing-of-eas).

-   **Compute fees**: These fees are the primary cost. When creating an EAS service, choose pay-as-you-go or subscription resources based on your needs.
    
-   **Storage fees**: If you use a custom model, the model files are stored in Object Storage Service (OSS). You will be charged for OSS storage based on your usage.
    

## Production deployment

### Choose model

1.  **Define your application scenario**:
    
    -   **General-purpose conversation**: Choose an instruction-tuned model, not a foundation model. This ensures the model can understand and follow your instructions.
        
    -   **Code generation**: Choose a specialized code model, such as the `Qwen3-Coder` series. They typically perform much better on code-related tasks than general-purpose models.
        
    -   **Domain-specific tasks**: If the task is highly specialized, such as in finance or law, consider finding a model that has been fine-tuned for that domain. You can also fine-tune a general-purpose model yourself.
        
2.  **Performance and cost**: Generally, models with more parameters are more capable. However, they require more compute resources to deploy, which increases inference costs. Start with a smaller model, such as a 7B model, for validation. If performance does not meet your needs, gradually try larger models.
    
3.  **Consult authoritative benchmarks**: Refer to industry-recognized leaderboards such as OpenCompass and LMSys Chatbot Arena. These leaderboards provide objective evaluations of models across multiple dimensions, such as reasoning, coding, and math. They offer valuable guidance for model selection.
    

### Choose inference engine

-   **vLLM/SGLang**: Mainstream choices in the open source community. They offer broad model support and extensive community documentation and examples. Easy to integrate and troubleshoot.
    
-   **BladeLLM**: Inference engine developed by Alibaba Cloud PAI team. Deeply optimized for specific models, especially Qwen series. Provides higher performance and lower GPU memory usage.
    

### Inference optimization

-   [Deploy an LLM intelligent router](/help/en/pai/user-guide/use-llm-intelligent-router-to-improve-inference-efficiency): Dynamically distributes requests based on real-time metrics such as token throughput and GPU memory usage. Balances computing power and memory allocation across inference instances. Suitable for scenarios where you deploy multiple inference instances and expect load imbalance. Improves cluster resource utilization and system stability.
    
-   [Deploy MoE models using expert parallelism and PD separation](/help/en/pai/user-guide/deployment-moe-model-based-on-expert-parallel-and-pd-separation): For Mixture-of-Experts (MoE) models, uses techniques such as expert parallelism (EP) and Prefill-Decode (PD) separation to increase inference throughput and reduce deployment costs.
    

## Troubleshooting

### Model not visible in dropdown after deployment

**Root cause**: Model deployment incomplete or UI cache issue.

**Solution**:

1.  Verify deployment status. Go to service details page and check if status shows **Running**. If status is **Pending** or **Starting**, wait until deployment completes.
    
2.  Refresh the browser page. Press F5 or click the browser refresh button to clear the UI cache.
    
3.  Check service logs. On the service details page, click **Logs** tab to view deployment progress and error messages.
    

**Prevention**: Wait for **Running** status (approximately 5-10 minutes) before attempting to access the model in applications.

### Deployment failed - insufficient resources

**Root cause**: Selected instance type unavailable in the current region. For regional availability, see [Regions and zones](/help/en/pai/product-overview/regions-and-zones).

**Solution**:

1.  Choose a different instance type. Return to deployment page and select an alternative GPU model (e.g., switch from A10 to T4).
    
2.  Try a different region. Some regions have higher resource availability. Common regions: cn-hangzhou, cn-beijing, cn-shanghai.
    
3.  Use dedicated resource groups. Configure **Resource Type** as **EAS Resource Group** to bypass public resource limitations.
    

**Prevention**: Check resource availability before deployment. Contact support to confirm instance availability in your target region.

### Model loading timeout

**Root cause**: Model file too large, OSS access permissions missing, or network latency.

**Solution**:

1.  Check OSS permissions. Verify that the service account has read access to the OSS bucket containing the model file. Test by downloading a sample file from the bucket.
    
2.  Use a smaller model. If the model exceeds 50GB, consider using a quantized version (INT8 or INT4) to reduce file size and loading time.
    
3.  Increase timeout settings. In the deployment configuration, set a longer initialization timeout (e.g., 600 seconds for large models).
    

**Prevention**: Test OSS access before deployment. Estimate loading time based on model size (approximately 1-2 minutes per 10GB on standard instances).

## FAQ

### Q: What should I do if the service is stuck in the Pending state and won't start?

Follow these steps to troubleshoot the issue:

1.  **Check the instance status**: On the service list page, click the service name to go to the service details page. In the **Service Instance** section, check the instance status. If it shows **Out of Stock**, this indicates that the public resource group has insufficient resources.
    
2.  **Solutions** (in order of priority):
    
    1.  Solution 1: **Change the instance type**. Return to the deployment page and select a different GPU model.
        
    2.  Solution 2: Use dedicated resources. Set **Resource Type** to **EAS Resource Group** to use dedicated resources. You must create the resource group in advance.
        
3.  **Preventive measures**:
    
    1.  To avoid being limited by public resources, enterprise users should create dedicated resource groups.
        
    2.  During peak hours, we recommend testing in multiple regions.
        

### Q: Call errors

1.  **Error:** `**Unsupported Media Type: Only 'application/json' is allowed**`
    
    Ensure request headers include `Content-Type: application/json`.
    
2.  **Error:** `**The model '<model_name>' does not exist.**`
    
    The vLLM inference engine requires the model field to be completed correctly. Retrieve the model name by calling the `/v1/models` API with a GET request.
    
3.  **Error:** `**403 Forbidden - Disable the 'use free tier only' mode**`
    
    This error occurs when calling Model Studio API models (such as Qwen2.5-VL via DashScope) with the free quota exhausted. To resolve, disable the "use free tier only" setting in Model Studio console. For detailed instructions, see [Model Studio free quota management](/help/en/model-studio/new-free-quota). Note that PAI-EAS deployed models do not have this limitation and bill through standard EAS pricing.
    

For more information, see the [EAS FAQ](/help/en/pai/faq-about-eas).
