To optimize resource usage and ensure access to the latest and most effective models, Alibaba Cloud Model Studio periodically deprecates older models based on their iteration and upgrade cycles. This topic describes the model deprecation policy.

## **Notifications**

### **Timeline**

-   **Snapshot models** (model names contain a specific date, such as qwen-max-2025-01-25): A notice is published **30 days before** the official deprecation date.
    
-   **Stable models** (core versions of model series): A notice is published **3 months before** the official deprecation date.
    

### **Methods**

Notifications are sent through emails, internal messages, and official website announcements.

> Emails, and internal messages are sent only to users who have called a scheduled model within the last three months.

## Impacts of deprecation

-   **From the date the notice is published**, the queries per minute (QPM) and tokens per minute (TPM) limits for the model will be gradually reduced. For models with a requested quota increase, the quota is first restored to the [default limit](/help/en/model-studio/rate-limit) and then reduced. During this process, the model's API operations and related console features remain available.
    
-   **From the retire date**:
    
    -   **Inference**: Support for model inference is discontinued. Applications and services that call the retired model will no longer return results.
        
    -   **Fine-tuning and deployment**: New fine-tuning and deployment operations that use the deprecated model are no longer supported. Some models, if otherwise specified in deprecation notice, may still support fine-tuning and deployment after retirement. Existing trained and deployed models are not affected.
        
    -   **Console features and documentation**: Related console features, such as the Models page and Playground, and the documentation are deprecated at the same time.
        

## Recommended actions

1.  Go to the [Model Observation](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) page of the Singapore region, and check whether your account is using models scheduled for deprecation.
    
    > [Model Observation](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry) page for China (Beijing).
    
2.  If you are using these models, test the performance of the alternative models and then switch to them.
    

## Retired models

### **Retired on January 30, 2026**

**Category**

**Model**

**Date**

**Alternative models**

Qwen-Plus

qwen-plus-2024-11-27

January 30, 2026, 00:00:00

[qwen-plus-2025-12-01](/help/en/model-studio/models#bb1e0794618ty)

qwen-plus-2024-11-25

qwen-plus-2024-09-19

qwen-plus-2024-08-06

Qwen-Turbo

qwen-turbo-2024-09-19

[qwen-flash-2025-07-28](/help/en/model-studio/models#c299c2b53eyoh)

Qwen-VL

qwen-vl-max-2024-10-30

[qwen3-vl-plus-2025-12-19](/help/en/model-studio/models#5540e6e52e1xx)

qwen-vl-max-2024-08-09

qwen-vl-plus-2024-08-09

[qwen3-vl-flash-2025-10-15](/help/en/model-studio/models#5540e6e52e1xx)

### **Retired on August 20, 2025**

**Category**

**Model**

**Date**

**Alternative models**

Text generation - Qwen - Open Source

qwen2-72b-instruct

August 20, 2025, 00:00:00 (UTC+08:00)

Qwen large language models: [Model List](/help/en/model-studio/models#7d449533fbngw), [Model List](/help/en/model-studio/models#c2d5833ae4jmo), [Model List](/help/en/model-studio/models#6ad3cd90f0c5r), [Model List](/help/en/model-studio/models#ede6678dedqbz), [Model List](/help/en/model-studio/models#ef4a28489135w)

qwen2-57b-a14b-instruct

qwen2-7b-instruct

qwen1.5-110b-chat

qwen1.5-72b-chat

qwen1.5-32b-chat

qwen1.5-14b-chat

qwen1.5-7b-chat
