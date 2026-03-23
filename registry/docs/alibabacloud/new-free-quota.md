Activate Model Studio in the Singapore region to receive free quota for each model.

**Note**

Free quota is only available for models in the **Singapore** region. Other regions do not offer free quota.

## **Rules**

### **Validity period**

Free quota is valid for 30 to 90 days from activation or model approval. After expiration or depletion, continued inference [incurs charges](/help/en/model-studio/billing-for-model-studio).

**Important**

Starting from **3:00 UTC on September 8, 2025**, the validity period for first-time activations is adjusted to 90 days. Users who activated the service before this date are not affected. For more information, see [Validity period change for new user free quota](/help/en/model-studio/new-free-quota-validity-adjustment).

### **Scope**

Free quota only offsets real-time inference costs. It does not offset fees for:

-   [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/)
    
-   [Context cache](/help/en/model-studio/context-cache)
    
-   [Fine-tuning](/help/en/model-studio/wan-video-generation-finetune-guide)
    
-   [Deployment](/help/en/model-studio/model-deployment-introduction)
    
-   Custom models (fine-tuned and deployed models)
    

### **Notes**

Free quota is shared across the account and all RAM users.

> Example: Total quota for qwen-max is 1,000,000 tokens. If the account uses 100,000 tokens and a RAM user uses 200,000 tokens, the remaining quota is 700,000 tokens.

## Get your free quota

Go to the [Model Studio console - Singapore region](https://modelstudio.console.alibabacloud.com/ap-southeast-1). Accept Terms of Service to activate and receive your **free quota**. Free quota is only available for the Singapore region. Other regions do not offer free quota.

> If Terms of Service don't appear, you've already activated and received free quota.

**Check the first activation time for Model Studio**

On the **[My Order](https://usercenter2-intl.console.alibabacloud.com/order/list)** page, search for **Alibaba Cloud Model Studio** in the **Commodity Name** field, **delete** the time range, and click **Search**.

In the search results, the order with the **earliest** payment or activation time is your first activation time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0956850671/p928584.png)

## View remaining quota

View remaining free quota using either method.

#### **Method 1: Usage page**

On the **[Model Usage](https://modelstudio.console.alibabacloud.com/?tab=model#/model-usage/free-quota)** page, click the **Free Quota** tab to view remaining quota and validity period for all models.

#### **Method 2: Models page**

1.  After you activate Model Studio, go to the Models page ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=doc#/doc/?type=model&url=2840914)) in the console. Click the target model to view the remaining quota on its product page.
    
    **24,098/1,000,000**: 24,098 tokens remaining of 1,000,000 total.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7143235471/p946295.png)
    

## **Use your quota**

Real-time calls (Singapore region) automatically use free quota. For more information, see [Get started with Model Studio](/help/en/model-studio/what-is-model-studio#1b7e9bceeb486).

### **Prevent overage charges**

By default, calls continue after quota exhaustion and incur charges. Enable **Free Quota Only** to block calls when quota depletes, returning error `AllocationQuota.FreeTierOnly`.

#### **How to enable**

##### **Method 1: Usage page**

**For a single model:**

1.  On the [Model Usage](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/model-usage/free-quota) page in the console, click the **Free Quota** tab.
    
2.  Find the target model in the list and turn on the **Free Quota Only** switch in the Actions column. (This switch is only available for models that still have a free quota.)
    

**In batch**:

1.  On the [Model Usage](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/model-usage/free-quota) page in the console, click the **Free Quota** tab.
    
2.  Click **Free Quota Only Batch Operation** and select **Batch Enable** from the drop-down menu.
    
3.  Check the target models and click **Batch Enable**. To enable this feature for all eligible models that do not have it enabled, click **Enable for All Models**.
    
4.  In the confirmation dialog box, click **Enable Free Quota Only**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7151862771/p1056972.png)
    

##### **Method 2: Enable on the Models page**

Take Qwen3-Coder-Plus as an example. Go to the [Qwen3-Coder-Plus product page (Singapore region)](https://modelstudio.console.alibabacloud.com/?tab=doc#/doc/?type=model&url=2840914_2&modelId=qwen3-coder-plus) and turn on the **Free Quota Only** switch.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3057454571/p994732.png)

If the switch isn't displayed, the quota is exhausted, expired, or the model doesn't offer free quota.

#### **How to disable**

This feature defaults to disabled. Once enabled, you can disable **Free Quota Only** only when the console shows **quota exhausted**.

> Console quota updates hourly (not real-time).

## **FAQ**

### **Are there notifications when the free quota runs out?**

No, there is no alert when quota runs out.

### **What happens when the free quota is used up?**

If [Free quota only](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=dashboard#/model-usage/free-quota) is not enabled, calls continue and excess tokens are billed per [Models](/help/en/model-studio/models) pricing. Charges deduct from your account and may cause overdue status.

Overdue status blocks all calls, even with remaining quota.

Before calling models, check quota and set up [budget management](/help/en/user-center/how-to-manage-a-budget).

### **Why am I being charged?**

**Possible reasons:**

-   You used a model without free quota (e.g., qwen-max and qwen-max-latest have separate quotas).
    
-   Free quota doesn't cover [OpenAI compatible - Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/) fees.
    
-   Console updates hourly, so displayed quota may lag actual usage. Check again later for current status.
    

To confirm billing, see [How can I check which model incurred charges?](#3bfa8283d0tc2) and [How can I view model call records?](#ab6ba5c538rn3).

### **How can I check which model incurred charges?**

One hour after calling a model, on the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page, select Billing Month, set **Commodity Name** to **Model Studio Foundation Model Inference**, and click **Search**. View charged models in the Instance ID column.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1955008571/p899900.png)

### **How can I view model call records?**

**One hour after** you call a model, go to the Monitoring ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) or [Beijing](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry)) page. Set the query conditions, such as the time range and workspace. Then, in the **Models** area, find the target model and click **Monitor** in the **Actions** column to view the model's call statistics. For more information, see the [Monitoring](/help/en/model-studio/model-telemetry/) document.

> Data is updated hourly. During peak periods, there may be an hour-level latency.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8821934571/p992753.png)

### **How to avoid** unexpected **charges?**

After quota exhaustion, charges deduct from your balance. To reduce unexpected charges:

-   Go to the [API-Key (Singapore)](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?tab=globalset#/efm/api_key) or [API-Key (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing/?tab=globalset#/efm/api_key) page and delete all API keys to prevent further calls and charges.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7143235471/p943678.png)
    
-   Set a [spending limit alert](https://usercenter2-intl.console.alibabacloud.com/billing/?spm=0.0.0.i1#/account/overview) to receive email notifications when monthly spending exceeds the threshold.
    
-   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0956850671/p928888.png)
    

### **Why did my call fail even though I have remaining quota?**

An [overdue balance](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) blocks all calls, even with remaining quota.

### **Why can't I see my free quota and its validity period?**

If the quota column shows **No free quota** or the **Free Quota** area is missing, the quota has expired.

> The Beijing region does not offer a free quota.
