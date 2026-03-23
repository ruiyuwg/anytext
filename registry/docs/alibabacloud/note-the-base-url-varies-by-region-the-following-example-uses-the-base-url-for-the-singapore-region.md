Alibaba Cloud Model Studio is a fully managed service that provides access to the complete Qwen series and other mainstream Large Language Models (LLMs). It offers both official Qwen APIs and OpenAI-compatible APIs. You can use a wide range of multimodal capabilities—including text, image, and audio/video—for use cases like code generation, translation, data mining, and intent understanding. Use these models on demand without managing the underlying infrastructure, reducing your operational overhead.

![api](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1347659271/p824099.png) Call models with APIs

Chat with LLMs using just a few lines of code to generate content and summaries.

> Alibaba Cloud Model Studio is compatible with the OpenAI API. You can migrate your existing OpenAI applications by changing the API Key, base URL, and model name.

```
import os
from openai import OpenAI

# Note: The base URL varies by Region. The following example uses the base URL for the Singapore Region.
# - Singapore: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
# - US (Virginia): https://dashscope-us.aliyuncs.com/compatible-mode/v1
# - China (Beijing): https://dashscope.aliyuncs.com/compatible-mode/v1
# - China (Hong Kong): https://dashscope.aliyuncs.com/compatible-mode/v1
# - Germany (Frankfurt): https://{WorkspaceId}.eu-central-1.maas.aliyuncs.com/compatible-mode/v1. Replace {WorkspaceId} with your workspace ID.
client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"), 
    base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
)
completion = client.chat.completions.create(
    model="qwen-plus",
    messages=[{"role": "user", "content": "Who are you?"}]
)
print(completion.choices[0].message.content)
```

## **Model services**

Alibaba Cloud Model Studio provides ready-to-use model services, allowing you to directly call the entire series of proprietary Qwen Large Language Models (LLMs), as well as third-party models like [DeepSeek](/help/en/model-studio/models#861a0645aapcl) and [Kimi](/help/en/model-studio/models#82d3721d122dy), without needing to manage deployment or operations. For a complete list, see [Model list](/help/en/model-studio/models).

-   **Qwen flagship models**:
    
    -   [Qwen-Max](/help/en/model-studio/models#131ff25c87sj6): The most powerful model in the Qwen series, ideal for complex, multi-step tasks.
        
    -   [Qwen-Plus](/help/en/model-studio/models#bb1e0794618ty): A balanced model in terms of performance, speed, and cost, making it the **recommended choice** for most scenarios.
        
        > The latest Qwen3.5-Plus series excels in a wide range of tasks, including language understanding, logical reasoning, code generation, Agent tasks, image comprehension, and video analysis. We highly recommend it for your projects.
        
    -   [Qwen-Flash](/help/en/model-studio/models#c299c2b53eyoh): A cost-effective, low-latency model designed for simple tasks that require rapid responses.
        
    -   [Qwen-Coder](/help/en/model-studio/models#673bef6a2fxfg): Specializes in tool calling and environmental interaction for code generation and comprehension.
        
-   **Multimodal capabilities**: Includes [text generation](/help/en/model-studio/models#74502d60f4wy5), [visual understanding](/help/en/model-studio/models#5540e6e52e1xx), [image generation](/help/en/model-studio/models#9fe27e73efius), [video generation](/help/en/model-studio/models#d0997c3335sjz), [speech recognition](/help/en/model-studio/models#b65bcd10fdn71) and [synthesis](/help/en/model-studio/models#26219b47e7fs8), and [embedding vectors](/help/en/model-studio/models#cff6607866tsg).
    
-   **Domain-specific models**: Provides models for specific industries and tasks, such as [long-text processing](/help/en/model-studio/models#af20ce1633zut), [translation](/help/en/model-studio/models#a794de0a15ajo), [data mining](/help/en/model-studio/models#55013b0caagpp), [intent understanding](/help/en/model-studio/models#4f2054106eh3l), [role-playing](/help/en/model-studio/models#269738a1dc6k1), and [in-depth research](/help/en/model-studio/models#250ba55f81j2k).
    

## **Billing**

Activating Alibaba Cloud Model Studio is free. You incur costs when you call models. For more information, see [Billable items](/help/en/model-studio/billing-for-model-studio) and [Model list](/help/en/model-studio/models).

### **Free quota for new users**

New users receive an exclusive Free Quota in the Singapore Region to test model calls. Once your free quota is depleted, services are billed on a pay-as-you-go basis. To prevent unexpected charges, you can enable the [Free Quota only](/help/en/model-studio/new-free-quota#d1cb80ac11i92) feature, which automatically stops the service when the quota is depleted. For more information, see [Free Quota for new users](/help/en/model-studio/new-free-quota).

### **Payment methods**

Model calls are automatically billed on an hourly basis. For information about supported payment methods, see [Payment Methods](/help/en/user-center/instruction-of-payment-management/).

### **View bills and usage**

-   **Consumption details:** Visit the [Billing Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) and [Cost Analysis](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-analyze) pages.
    
-   **Call statistics**: Approximately **one hour** after a model call, go to the [Alibaba Cloud Model Studio Console](https://modelstudio.console.alibabacloud.com/). Select the target region in the upper-right corner, and then navigate to the [Model Monitoring](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) page. Set the query conditions and click **Actions** in the **Monitor** column for the target model. You can view statistics like call volume, token consumption, and success rate. For more information, see [Model Monitoring](/help/en/model-studio/model-telemetry/).
    
-   **Coding Plan usage:** If you are subscribed to a Coding Plan, you can view your request usage on the [Coding Plan page](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/coding_plan). The Coding Plan is a subscription-based service with a fixed monthly fee that provides a monthly request quota for use in AI coding tools. For more information, see [Coding Plan overview](/help/en/model-studio/coding-plan).
    

## **Getting started**

-   Try models online:
    
    -   Access the [Alibaba Cloud Model Studio Console](https://modelstudio.console.alibabacloud.com/), and select your region in the upper-right corner.
        
    -   Go to the [Playground](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/efm/model_experience_center/text) page and select a model to try.
        
-   Make your first API call: [Make the first call to a Qwen API](/help/en/model-studio/first-api-call-to-qwen)
    

## FAQ

**Data security and privacy**

A: We are committed to protecting your data privacy and will never use your data to train our models. All data transmitted during application building or model training is encrypted to ensure its security. For more details, see the [Privacy Notice](/help/en/model-studio/privacy-notice).

**Available regions and differences**

A: Alibaba Cloud Model Studio provides model services in the following regions:

[**Singapore**](https://modelstudio.console.alibabacloud.com/?tab=doc#/doc/?type=model&url=2840914), [**US (Virginia)**](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/efm/model_experience_center/text), [**China (Beijing)**](https://bailian.console.alibabacloud.com/cn-beijing/?tab=model#/efm/model_experience_center/text), [**China (Hong Kong)**](https://modelstudio.console.alibabacloud.com/cn-hongkong?tab=doc#/doc/?type=model&url=2840914), and [**Germany (Frankfurt)**](https://modelstudio.console.alibabacloud.com/eu-central-1?tab=doc#/doc/?type=model&url=2840914)

Choosing a nearby region can reduce network latency. Each region has a different service endpoint (base URL), and API Keys are not interchangeable between regions. Supported models, platform features, and pricing may also vary by region. For more information, see the [Model list](/help/en/model-studio/models).

**Avoiding unexpected charges**

A: Alibaba Cloud Model Studio uses a pay-as-you-go model and does **not** offer a feature to disable automatic payments. To prevent charges, take the following actions:

-   **Delete an API Key**: Go to the [Alibaba Cloud Model Studio Console](https://modelstudio.console.alibabacloud.com/), select the target region in the upper-right corner of the page, go to the [**API-KEY**](https://modelstudio.console.alibabacloud.com/?tab=app#/api-key) page, and delete all API Keys to completely stop incurring charges.
    
-   **Stop all calls**: Stop model calls in applications, Agents, and workflows, and troubleshoot scheduled tasks or background processes.
    
-   **Enable "**[Stop Service When Free Quota Is Exhausted](/help/en/model-studio/new-free-quota#d1cb80ac11i92)**" (For new users during the free quota period only)**: On the model details page, enable this switch. When your Free Quota is exhausted, the service stops automatically to prevent charges. This option is available only for Singapore models.
    
-   **Set up cost monitoring and alerts**: View [**Billing Details**](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) and [**Model Monitoring**](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry), and set up [**high-spending alerts**](https://billing-cost.console.alibabacloud.com/expense-manage/cost-warning/alarm-threshold) to promptly address unusual charges.
    
-   **Subscribe to a Coding Plan**: This plan offers a monthly request quota for a fixed monthly fee, with no risk of pay-as-you-go charges. Use the Base URL and API Key specific to the Coding Plan for your calls. Otherwise, model calls are charged on a pay-as-you-go basis. For more information, see [Coding Plan overview](/help/en/model-studio/coding-plan).
    

**Q: How do I use Qwen3 series models or DeepSeek?**

A:

1.  **Online trial**: Go to the [Alibaba Cloud Model Studio Console](https://modelstudio.console.alibabacloud.com/). In the upper-right corner of the page, select the target Region. Go to the [**Model Square**](https://modelstudio.console.alibabacloud.com/?tab=doc#/doc/?type=model&url=2840914) page and click a model to try it. (DeepSeek is only supported in the Beijing Region).
    
2.  **Call models using an API**: For the calling process, see [Make your first call to the Qwen API](/help/en/model-studio/first-api-call-to-qwen). For a list of supported models, see [Model list](/help/en/model-studio/models).
    
3.  **Call models using development tools (such as Claude Code)**: For more information, see [Connect to clients/development tools](/help/en/model-studio/use-chat-client-or-development-tool/).
