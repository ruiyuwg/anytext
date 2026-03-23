Select two key configs for Model Studio:

-   **Region**: Defines where the model service is accessed and where your static data is stored.
    
-   **Deployment mode**: Defines where inference is executed.
    

These two configurations are independent, but **you must use them in predefined combinations**. Together, they affect **latency, cost, available models, and default rate limits**. Regardless of which deployment mode you choose, **your static data** (including inputs and outputs) is always stored in the selected region.

> **Tip**: Region controls "where your data resides." Deployment mode controls "where inference runs." Use both to balance performance, cost, and compliance requirements.

## **Region selection**

The region for the model service is the physical location of its endpoints. When selecting a region, consider the following factors:

-   **Access latency:** Physical distance is the primary factor affecting response time. Choose a region that is geographically close to you and your end users to minimize network latency.
    
-   **Compliance requirements:** Select a region that meets your data residency requirements. Your deployment must comply with local laws and regulations.
    
-   **Feature availability:** The available features and models differ by region. For details, refer to [feature availability by region](#798c325740yek) and the [list of available models](/help/en/model-studio/models).
    

Currently supported regions: Singapore, US (Virginia), China (Beijing), China (Hong Kong), Germany (Frankfurt)

> All your static data is stored in your selected region to meet data residency requirements.

## Deployment modes

The deployment mode determines the region for model inference. Each Deployment mode is bound to a specific region, and you cannot create custom combinations.

To reduce network latency and improve model response speed, select the Deployment mode corresponding to the region closest to your primary users and business applications:

**Deployment mode**

**Bound region (data storage)**

**Inference scope**

**Global**

US (Virginia) or Germany (Frankfurt)

Global dynamic scheduling

**International**

Singapore

Global dynamic scheduling (excluding the Chinese Mainland)

**United States**

US (Virginia)

Limited to the United States

**Chinese Mainland**

China (Beijing)

Limited to the Chinese Mainland

**Hong Kong (China)**

Hong Kong (China)

Limited to Hong Kong (China)

**European Union**

Germany (Frankfurt)

Limited to the EU

-   **Global mode**: Ideal for workloads requiring high availability for users worldwide. This mode leverages globally distributed computing resources to ensure high availability.
    
-   **International mode**: Ideal for serving users outside the Chinese Mainland (such as in the Asia-Pacific and the United States) when business or compliance requirements mandate excluding computing resources from the Chinese Mainland.
    
-   **Chinese Mainland mode**: Ideal for applications that primarily serve users within the Chinese Mainland and must strictly comply with local regulations.
    
-   **United States mode**: Ideal for organizations based in the United States, or regulated by U.S. law, requiring all data processing and model inference to remain strictly within the United States.
    
-   **Hong Kong (China) mode**: Ideal for serving users primarily in Hong Kong (China) when data storage and model inference must be strictly confined to that region.
    
-   **EU mode**: Ideal for serving users in the European Union, or for organizations regulated by EU law, requiring all data processing and model inference to remain strictly within the EU.
    

**Important**

In the **Global** and **International** deployment modes, which involve **cross-border computation**, you must ensure that your cross-border data processing complies with all applicable laws and regulations. The endpoint in your selected region receives cross-region inference requests. Static data generated during model calls, such as prompt inputs and model outputs, is processed only transiently during model inference and is not written to persistent storage in the region where the computing resources are located. Encryption protects all data in transit.

## **Usage**

### **Using** **International** **deployment mode models**

Configure the request address, API key, and model name:

-   **Request address (Base URL)**: For the International deployment mode, which is hosted in the Singapore region, use the `dashscope-intl.aliyuncs.com` domain name. For other APIs, see the corresponding documentation.
    
    -   OpenAI Chat Completions API: `https://dashscope-intl.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://dashscope-intl.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Singapore)](https://modelstudio.console.alibabacloud.com/?tab=playground#/api-key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model that supports this deployment mode.
    

### **Using** **United States** **deployment mode models**

Configure the request address, API key, and model name:

-   **Request address (Base URL)**: For the US deployment mode in the US (Virginia) region, use the`dashscope-us.aliyuncs.com` domain name. For other APIs, see the corresponding documentation.
    
    -   OpenAI Chat Completions API: `https://dashscope-us.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://dashscope-us.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=globalset#/efm/api_key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model for the US deployment mode (with the `-us` suffix).
    

### **Using** **Global** **deployment mode models**

The global deployment mode supports multiple regions. Select a region based on your business requirements.

#### **US (Virginia) region**

Before you begin, configure the request address, API key, and model name:

-   **Request address (Base URL)**: For the US (Virginia) region, use the `dashscope-us.aliyuncs.com` domain name. For other APIs, see the relevant documentation:
    
    -   OpenAI Chat Completions API: `https://dashscope-us.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://dashscope-us.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=globalset#/efm/api_key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model that supports the Global deployment mode.
    

#### **Germany (Frankfurt) region**

Go to the [Model Studio console](https://modelstudio.console.alibabacloud.com/eu-central-1?tab=doc#/doc/?type=model&url=2840914), switch to the Germany (Frankfurt) region, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2196204771/p1061404.png) icon in the upper-right corner, and copy the **Workspace ID**. Then, configure the request address, API key, and model name.

-   **Request address (Base URL)**: For the Germany (Frankfurt) region, use the `{WorkspaceId}.eu-central-1.maas.aliyuncs.com` domain name. When you make an API call, replace `{WorkspaceId}` with your actual Workspace ID. The following are some example request addresses. For other APIs, see the corresponding documentation.
    
    -   OpenAI Chat Completions API: `https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Frankfurt)](https://modelstudio.console.alibabacloud.com/eu-central-1?tab=globalset#/efm/api_key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model that supports the Global deployment mode.
    

### **Using** **Chinese Mainland** **deployment mode models**

Configure the request address, API key, and model name:

-   **Request address (Base URL)**: The Chinese mainland deployment mode uses the China (Beijing) region and the `dashscope.aliyuncs.com` service domain name. For other APIs, see the corresponding documentation:
    
    -   OpenAI Chat Completions API: `https://dashscope.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://dashscope.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Beijing)](https://bailian.console.alibabacloud.com/?tab=model#/api-key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model that supports this deployment mode.
    

### **Using** **Hong Kong (China)** **deployment mode models**

Configure the request address, API key, and model name:

-   **Request address (Base URL)**: For the Hong Kong (China) deployment mode, use the `cn-hongkong.dashscope.aliyuncs.com` domain name in the Hong Kong region. The following are some example request addresses. For other APIs, see the corresponding documentation.
    
    -   OpenAI Chat Completions API: `https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://cn-hongkong.dashscope.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Hong Kong (China))](https://modelstudio.console.alibabacloud.com/cn-hongkong?tab=globalset#/efm/api_key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model that supports the Hong Kong (China) deployment mode.
    

### **Using** **European Union** **deployment mode models**

Go to the [Alibaba Cloud console](https://modelstudio.console.alibabacloud.com/eu-central-1?tab=doc#/doc/?type=model&url=2840914), switch to the Germany (Frankfurt) region, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2196204771/p1061404.png) icon in the upper-right corner, and copy the **Workspace ID**. Then, configure the request address, API key, and model name.

-   **Request address (Base URL)**: The EU deployment mode is bound to the Germany (Frankfurt) region. Use the `{WorkspaceId}.eu-central-1.maas.aliyuncs.com` domain. When you make a call, replace `{WorkspaceId}` with your actual Workspace ID. The following are some example request addresses. For other APIs, see the corresponding documentation:
    
    -   OpenAI Chat Completions API: `https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1`
        
    -   DashScope: `https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/api/v1`
        
-   **API key**: Go to the [Key Management (Frankfurt)](https://modelstudio.console.alibabacloud.com/eu-central-1?tab=globalset#/efm/api_key) page to get your API key.
    
-   **Model name**: From the [Model list](/help/en/model-studio/models), select a model that supports the EU deployment mode.
    

### **Asynchronous tasks**

For an asynchronous task, such as image or video generation, all subsequent operations must use the same service domain name and API key that you used to create the task. Otherwise, the request will fail.

Example for Global deployment mode (US region). For Germany region, use `{WorkspaceId}.eu-central-1.maas.aliyuncs.com`:

```
# Create a task in the Global deployment mode (US region) with the service domain name dashscope-us.aliyuncs.com
curl --location 'https://dashscope-us.aliyuncs.com/api/v1/services/aigc/image-generation/generation' \
--header 'Content-Type: application/json' \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'X-DashScope-Async: enable' \
--data '{
    "model": "wan2.6-t2i",
    "input": {
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "text": "A flower shop with exquisite windows, a beautiful wooden door, and flowers on display"
                    }
                ]
            }
        ]
    },
    "parameters": {
        "n": 1
    }
}'

# Sample response: {"output":{"task_id":"abc123..."},"request_id":"..."}

# Query the task status. You must use the same service domain name.
curl -X GET https://dashscope-us.aliyuncs.com/api/v1/tasks/{task_id} \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"

# [Error] Using a different service domain name for the query will cause an error.
curl -X GET https://dashscope.aliyuncs.com/api/v1/tasks/{task_id} \
--header "Authorization: Bearer $DASHSCOPE_API_KEY"
```

## **Feature availability by region**

Feature availability varies by region:

**Category**

**Feature**

**Singapore**

**US (Virginia)**

**China (Beijing)**

**Hong Kong (China)**

**Germany (Frankfurt)**

**Use**

**Real-time inference**

Supported

Supported

Supported

Supported

Supported

**Batch inference**

Supported

Not supported

Supported

Not supported

Not supported

**Playground**

Supported

Supported

Supported

Supported

Supported

**Management**

**Monitoring (Standard)**

Supported

Supported

Supported

Supported

Supported

**Monitoring (Advanced)**

Supported

Supported

Supported

Not supported

Not supported

**Model alerting**

Supported

Not supported

Supported

Not supported

Not supported

**Transmission security**

Supported

Supported

Supported

Supported

Supported

**Permission management**

Supported

Supported

Supported

Supported

Supported

**Optimization**

**Fine-tuning**

API only

Not supported

Not supported

Not supported

Not supported

## **References**

-   [Data processing and cross-border transfer terms](/help/en/legal/latest/fe2cxg)
    
-   [Qwen API reference](/help/en/model-studio/qwen-api-reference/)
    
-   [Model list](/help/en/model-studio/models): Supported models and specifications.
    
-   [Model invocation pricing](/help/en/model-studio/model-pricing): Pricing by deployment mode.
    
-   [Rate limits](/help/en/model-studio/rate-limit): RPM and TPM limits.
    
-   [Get an API key](/help/en/model-studio/get-api-key): Create and manage API keys.
