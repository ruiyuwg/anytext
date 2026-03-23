Use the monitoring feature to:

-   View call records
    
-   Monitor and set alerts for metrics such as time to first token, call duration, requests per minute (RPM), tokens per minute (TPM), and failure rate.
    
-   Track token consumption.
    

## Supported models

-   **Basic monitoring:** Supports all models in the [Model list](/help/en/model-studio/models). **Advanced monitoring** supports all models in the China (Beijing), Singapore, and US (Virginia) regions.
    
-   **Alerting feature:** Supports all models in the China (Beijing) and Singapore regions.
    
-   **Logging feature:** The following models are currently supported:
    
    ## Beijing
    
    -   qwen3-max, qwen3-max-2025-09-23, qwen3-max-2026-01-23, qwen3-max-preview
        
    -   qwen-max, qwen-max-0919, qwen-max-2025-01-25, qwen-max-latest
        
    -   qwen-plus, qwen-plus-2025-04-28, qwen-plus-2025-07-14, qwen-plus-2025-07-28, qwen-plus-2025-09-11, qwen-plus-2025-12-01, qwen-plus-latest
        
    -   qwen-flash, qwen-flash-2025-07-28
        
    -   qwen-turbo, qwen-turbo-2025-07-15, qwen-turbo-2025-04-28, qwen-turbo-latest
        
    -   deepseek-v3.1, deepseek-v3.2, deepseek-v3.2-exp
        
    -   qwen3-235b-a22b, qwen3-235b-a22b-instruct-2507, qwen3-235b-a22b-thinking-2507, qwen3-30b-a3b, qwen3-30b-a3b-instruct-2507, qwen3-30b-a3b-thinking-2507, qwen3-next-80b-a3b-instruct, qwen3-next-80b-a3b-thinking
        
    -   qwen3-coder-480b-a35b-instruct, qwen3-coder-flash, qwen3-coder-flash-2025-07-28, qwen3-coder-plus, qwen3-coder-plus-2025-07-22, qwen3-coder-plus-2025-09-23
        
    
    ## Singapore
    
    -   qwen3-max, qwen3-max-2025-09-23, qwen3-max-2026-01-23, qwen3-max-preview
        
    -   qwen-max, qwen-max-2025-01-25, qwen-max-latest
        
    -   qwen-plus, qwen-plus-2025-04-28, qwen-plus-2025-07-14, qwen-plus-2025-07-28, qwen-plus-2025-09-11, qwen-plus-2025-12-01, qwen-plus-latest
        
    -   qwen-flash, qwen-flash-2025-07-28
        
    -   qwen-turbo, qwen-turbo-2025-04-28, qwen-turbo-latest
        
    -   qwen3-235b-a22b, qwen3-235b-a22b-instruct-2507, qwen3-235b-a22b-thinking-2507, qwen3-30b-a3b, qwen3-30b-a3b-instruct-2507, qwen3-30b-a3b-thinking-2507, qwen3-next-80b-a3b-instruct, qwen3-next-80b-a3b-thinking
        
    -   qwen3-coder-480b-a35b-instruct, qwen3-coder-flash, qwen3-coder-flash-2025-07-28, qwen3-coder-plus, qwen3-coder-plus-2025-07-22, qwen3-coder-plus-2025-09-23
        
    

## **Monitor model runs**

Model call data from all models under your Alibaba Cloud account is automatically collected and synchronized to the [Monitoring](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) list in each workspace after a [direct or indirect](#0806932be6woi) model call.

> Records are grouped by model and workspace. A new model appears in the list after its first data synchronization. Basic monitoring has an hourly data latency. For minute-level insights, use [advanced monitoring](#2e5f2f0dffijg).

> Members of the default workspace can view model calls across all workspaces. Members of a sub-workspace can only view data for their current workspace and cannot switch to other workspaces.

Find the target model in the list and click **Monitor** in the **Actions** column to view the following metric categories:

-   **Security:** Tracks content policy violations, such as `Content Moderation Error Count`.
    
-   **Cost:** Tracks cost-related metrics such as `Average Usage per Request`.
    
-   **Performance:** Tracks response speed metrics such as `Call Duration` and `Time to First Token`.
    
-   **Error:** Tracks reliability metrics such as `Failures` and `Failure Rate`.
    

You can then create [alerts](#b8fcd646d5avf) based on these metrics to promptly detect and handle anomalies.

**Call statistics**

This tab displays metrics related to **security, cost, and errors**, such as call count and failure count. Filter by [API key](/help/en/model-studio/apikey), [inference type](#f131611173sdx), and time range.

-   **Rate Limiting Error Count:** Call failures caused by a [429 status code](/help/en/model-studio/error-code#5ed5532c85ckv).
    
-   **Content Moderation Error Count:** Triggered when input or output contains suspected sensitive or high-risk content (such as pornography, political, or advertisements) and is blocked by the [Content Moderation Service](https://www.alibabacloud.com/product/ai_guardrails).
    

**Performance metrics**

This tab displays **performance**\-related metrics such as RPM, TPM, call duration, and time to first token.

## **View token consumption**

Track and manage token consumption costs with the following monitoring features:

-   **Summary:** Aggregates historical token consumption by model and workspace. Further filter by time range and API key.
    
-   **Tracking:** Records the token consumption for each model call.
    
-   **Alerting:** Sets consumption thresholds and sends alerts when a model exceeds them.
    

#### **View historical token consumption**

-   To view token consumption for the last **30 days**:
    
    1.  When the model appears in the [Monitoring](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) list, click **Monitor** in the **Actions** column on its right.
        
    2.  On the Call Statistics tab, view the token consumption data in the **Calls** section.
        
-   To view earlier usage, check the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=MONTHLY_SUMMARY) page.
    

#### **View token consumption for a specific call**

> This feature is currently available only for [some models](#7f2491defbdpt) in the **China (Beijing)**

1.  Log on with your Alibaba Cloud account ([or a RAM user with sufficient permissions](#f9d06146c0xe0)) and go to the [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing/?tab=model#/model-telemetry) page in the target workspace. Click **Monitoring Configuration** in the upper-right corner and follow the prompts to enable audit logs and inference logs.
    
    > After you enable this feature, the system records the input and output of every model call in the workspace. Logs may take up to a few minutes to appear after a call.
    
2.  Find the target model in the monitoring list, click **Logs** in the **Actions** column.
    
3.  The **Logs** tab displays the [real-time inference](#f131611173sdx) call records for the model. The **Usage** field shows the token consumption for the call.
    

#### **Create an alert for abnormal consumption**

-   See [Set up proactive alerts](#b8fcd646d5avf).
    

## **View conversation history (model logs)**

**Important**

This feature is currently limited to [some models](#7f2491defbdpt) in the **China (Beijing)** region.

View full input, output, and timing details for every model call. Useful for troubleshooting and content auditing.

#### **Step 1: Enable logging**

Log on with an Alibaba Cloud account ([or a RAM user with sufficient permissions](#f9d06146c0xe0)). On the [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing/?tab=model#/model-telemetry) page of the target workspace, click **Monitoring Configuration** in the upper-right corner, and follow the instructions to enable audit logs and inference logs.

> After you enable this feature, the system records the input and output of every model call in the workspace. Logs may take up to a few minutes to appear after a call.

> To stop recording, disable inference logging in the monitoring configuration.

#### **Step 2: View conversation history**

1.  Find the target model in the monitoring list, click **Logs** in the **Actions** column.
    
2.  The **Logs** tab displays the [real-time inference](#f131611173sdx) call records for the model. The **Request and Response** fields correspond to the input and output of the call.
    

## **Set up proactive alerts**

**Important**

This feature is currently available only in the Singapore and China (Beijing) regions.

Set alerts for metrics like cost, failure rate, and response latency to detect silent failures (timeouts, consumption spikes) that application logs miss. Alerts are sent immediately when metrics become abnormal.

#### **Step 1: Enable advanced monitoring**

1.  Log on with your Alibaba Cloud account ([or a RAM user with sufficient permissions](#54ea9ba526ovz)). Go to the Monitoring ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry) or [Beijing](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry)) page in the target workspace. Click **Monitoring Configuration** in the upper-right corner.
    
2.  In the Advanced Monitoring section, manually turn on **Performance and usage metrics monitoring**.
    

#### **Step 2: Create an alert rule**

1.  On the Alerts ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-alert) or [Beijing](https://bailian.console.alibabacloud.com/?tab=dashboard#/model-alert)) page, click **Create Alert Rule** in the top-right corner.
    
2.  In the dialog box, select the model and monitoring template, then click **Create**. When a specified metric becomes abnormal, the system notifies your team.
    
    -   **Notification method:** Supports text message, email, phone, DingTalk group robot, WeCom Robot, and Webhook.
        
    -   **Alert level:** Levels include **General**, **Warning**, **Error**, and **Urgent**. You cannot add or modify these levels. Relationship between levels and notification channels:
        
        -   Urgent: Phone, text message, email
            
        -   Error: Text message, email
            
        -   Warning: Text message, email
            
        -   General: Email
            

## **Connect to Grafana and custom applications**

Monitoring data is stored in a private Prometheus instance that supports the standard HTTP API. Connect to Grafana or custom applications for visual analytics.

#### **Step 1: Get the data source HTTP API address**

1.  Make sure you have [enabled advanced monitoring](#c6d515ccdeunl) first.
    
2.  On the [Monitoring (Singapore)](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry), [Monitoring (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/model-telemetry), or [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry) page, click **Monitoring Configuration** in the upper-right corner. Click **View Details** to the right of the CloudMonitor Prometheus instance.
    
3.  On the **Settings** page, copy the corresponding HTTP API address based on your client's network environment (public network or VPC access).
    
    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4975324671/p1028669.jpg)
    

#### **Step 2: Connect to Grafana or a custom application**

## Connect to a custom application

The following example shows how to retrieve monitoring data using the Prometheus HTTP API. For complete API usage, see the [Prometheus HTTP API documentation](https://prometheus.io/docs/prometheus/latest/querying/api/).

-   **Example 1:** Query the token consumption for all models across all workspaces in an Alibaba Cloud account on November 20, 2025 (UTC), with the query set to `model_usage` and the step size set to `step=60 s`.
    
    **Example**
    
    **Parameter description**
    
    ```
    GET {HTTP API}/api/v1/query_range?query=model_usage&start=2025-11-20T00:00:00Z&end=2025-11-20T23:59:59Z&step=60s
    
    Accept: application/json
    Content-Type: application/json
    Authorization: Basic base64Encode(AccessKey:AccessKeySecret)
    ```
    
    -   **query:** The value of `query` can be replaced with any metric name from the **Monitoring metrics** list below.
        
        **Expand to view monitoring metrics**
        
        **Type**
        
        **Metric name**
        
        **Description**
        
        **Call count**
        
        model\_call\_count
        
        Total number of model calls
        
        **Call duration**
        
        model\_call\_duration\_total
        
        Total model call duration
        
        model\_call\_duration
        
        Average model call duration
        
        model\_call\_duration\_p50
        
        p50 model call duration
        
        model\_call\_duration\_p99
        
        p99 model call duration
        
        model\_first\_token\_duration\_total
        
        Total time to first token
        
        model\_first\_token\_duration
        
        Average time to first token
        
        model\_first\_token\_duration\_p50
        
        p50 time to first token
        
        model\_first\_token\_duration\_p99
        
        p99 time to first token
        
        **Time per non-first token**
        
        model\_generation\_duration\_per\_token\_total
        
        Total time per non-first token
        
        model\_generation\_duration\_per\_token
        
        Average time per non-first token
        
        model\_generation\_duration\_per\_token\_p50
        
        p50 time per non-first token
        
        model\_generation\_duration\_per\_token\_p99
        
        p99 time per non-first token
        
        **Usage**
        
        model\_usage
        
        Total model usage
        
    -   **HTTP API:** Replace `{HTTP API}` with the HTTP API address you got in [Step 1](#title-tkb-ds1-4p5).
        
    -   **Authorization:** Concatenate the AccessKey and AccessKey secret of your Alibaba Cloud account in the format `AccessKey:AccessKeySecret`, encode the string in Base64, and provide it in the format `Basic encoded_string`.
        
        > **Example value:** Basic TFRBSTV3OWlid0U4XXXXU0xb1dZMFVodmRsNw==
        
        > **Note:**[AccessKey](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems) and [AccessKey secret](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems) must belong to the same Alibaba Cloud account as the Prometheus instance from Step 1.
        
    
-   **Example 2:** Building on **Example 1**, add filters to retrieve token consumption only for a specific model (`qwen-plus`) in a specific workspace (`llm-nymssti2mzww****`).
    
    **Example**
    
    **Description**
    
    ```
    GET {HTTP API}/api/v1/query_range?query=model_usage{workspace_id="llm-nymssti2mzww****",model="qwen-plus"}&start=2025-11-20T00:00:00Z&end=2025-11-20T23:59:59Z&step=60s
    
    Accept: application/json
    Content-Type: application/json
    Authorization: Basic base64Encode(AccessKey:AccessKeySecret)
    ```
    
    -   **query:** Enclose multiple filter conditions in `{}` and separate them with commas. For example: `{workspace_id="value1",model="value2"}`. The following is a list of supported filter conditions (LabelKey).
        
        **Expand to view supported filter conditions**
        
        **LabelKey**
        
        **Description**
        
        **user\_id**
        
        Alibaba Cloud account ID.
        
        > For a RAM user, this is the UID. For more information, see [the referenced document](/help/en/ram/user-guide/view-the-basic-information-about-a-ram-user)
        
        **apikey\_id**
        
        Get the API Key ID (not the API key) on the **Key Management** ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=playground#/api-key) | [US](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/api-key) | [Beijing](https://bailian.console.alibabacloud.com/?tab=model#/api-key)) page.
        
        ![56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4975324671/p1028878.jpg)
        
        **Note**
        
        An apikey\_id value of -1 indicates that the call originated from the Alibaba Cloud Model Studio console, not through an API.
        
        **workspace\_id**
        
        Workspace ID. For more information, see [the referenced document](/help/en/model-studio/use-workspace#c5222ec081sbo).
        
        **model**
        
        Model.
        
        **protocol**
        
        Protocol type. Possible values:
        
        -   **HTTP:** Non-streaming HTTP
            
        -   **SSE:** Streaming HTTP
            
        -   **WS:** WebSocket protocol
            
        
        **sub\_protocol**
        
        Sub-protocol. Possible values:
        
        -   **DEFAULT:** Synchronous call
            
        -   **ASYNC:** Asynchronous call
            
            > Commonly used for image generation models. [Text-to-image generation](/help/en/model-studio/text-to-image)
            
        
        **status\_code**
        
        HTTP status code.
        
        > Only the `model_call_count` metric supports this LabelKey.
        
        **error\_code**
        
        Error code.
        
        > Only the `model_call_count` metric supports this LabelKey.
        
        **usage\_type**
        
        Usage type.
        
        > Only the `model_usage` metric supports this LabelKey.
        
        Possible values:
        
        -   total\_tokens
            
        -   input\_tokens
            
        -   output\_tokens
            
        -   cache\_tokens
            
        -   image\_tokens
            
        -   audio\_tokens
            
        -   video\_tokens
            
        -   image\_count
            
        -   audio\_count
            
        -   video\_count
            
        -   duration
            
        -   characters
            
        -   audio\_tts
            
        -   times
            
        
    

## Connect to Grafana

Add a monitoring data source in Grafana (self-managed or Alibaba Cloud Grafana service). This example uses Grafana 10.x (English version). The procedure for other versions is similar. For more information, see the [official Grafana documentation](https://grafana.com/docs/grafana/latest/datasources/prometheus/configure/).

1.  **Add a data source:**
    
    1.  Log on to Grafana with an administrator account. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7106352371/p864738.png) icon in the upper-left corner and select **Administration** > **Data sources**. Click **\+ Add new data source** and select **Prometheus** as the data source type.
        
    2.  On the **Settings** tab, configure the data source information:
        
        -   **Name:** Enter a custom name.
            
        -   **Prometheus server URL:** Enter the HTTP API address you got in [Step 1](#title-tkb-ds1-4p5).
            
        -   **Auth:** Enable **Basic auth** and set **User** to the [AccessKey](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems) of your Alibaba Cloud account and **Password** to the [AccessKey secret](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems) of your Alibaba Cloud account.
            
            > The AccessKey and AccessKey secret must belong to the same Alibaba Cloud account as the Prometheus instance from Step 1.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4975324671/p1028673.png)
        
    3.  Click **Save & Test** at the bottom of the tab.
        
2.  **Query metrics:**
    
    1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1078238171/p785190.png) icon in the upper-left corner of the Grafana page, then click **Dashboards** in the navigation pane on the left.
        
    2.  On the **Dashboards** page, click **New** > **New dashboard** on the right to create a new dashboard.
        
    3.  Click **\+ Add visualization** and select the data source that you just created.
        
    4.  On the **Edit Panel** page, click the **Query** tab. In the **A** section, select **\_name\_** and the metric name from the **Label filters** field. The following example shows how to query model token consumption using the `model_usage` metric:
        
        **Example**
        
        **Description**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4975324671/p1028714.png)
        
        In the figure, replace the value for `_name_` (`model_usage`) with any metric name from the **Monitoring metrics** list below.
        
        **Expand to view monitoring metrics**
        
        **Type**
        
        **Metric name**
        
        **Description**
        
        **Call count**
        
        model\_call\_count
        
        Total number of model calls
        
        **Call duration**
        
        model\_call\_duration\_total
        
        Total model call duration
        
        model\_call\_duration
        
        Average model call duration
        
        model\_call\_duration\_p50
        
        p50 model call duration
        
        model\_call\_duration\_p99
        
        p99 model call duration
        
        model\_first\_token\_duration\_total
        
        Total time to first token
        
        model\_first\_token\_duration
        
        Average time to first token
        
        model\_first\_token\_duration\_p50
        
        p50 time to first token
        
        model\_first\_token\_duration\_p99
        
        p99 time to first token
        
        **Time per non-first token**
        
        model\_generation\_duration\_per\_token\_total
        
        Total time per non-first token
        
        model\_generation\_duration\_per\_token
        
        Average time per non-first token
        
        model\_generation\_duration\_per\_token\_p50
        
        p50 time per non-first token
        
        model\_generation\_duration\_per\_token\_p99
        
        p99 time per non-first token
        
        **Usage**
        
        model\_usage
        
        Total model usage
        
        Add the following label filters to further refine your query:
        
        **Expand to view supported filter conditions**
        
        **LabelKey**
        
        **Description**
        
        **user\_id**
        
        Alibaba Cloud account ID.
        
        > For a RAM user, this is the UID. For more information, see [the referenced document](/help/en/ram/user-guide/view-the-basic-information-about-a-ram-user)
        
        **apikey\_id**
        
        Get the API Key ID (not the API key) on the **Key Management** ([Singapore](https://modelstudio.console.alibabacloud.com/?tab=playground#/api-key) | [US](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/api-key) | [Beijing](https://bailian.console.alibabacloud.com/?tab=model#/api-key)) page.
        
        ![56](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4975324671/p1028878.jpg)
        
        **Note**
        
        An apikey\_id value of -1 indicates that the call originated from the Alibaba Cloud Model Studio console, not through an API.
        
        **workspace\_id**
        
        Workspace ID. For more information, see [the referenced document](/help/en/model-studio/use-workspace#c5222ec081sbo).
        
        **model**
        
        Model.
        
        **protocol**
        
        Protocol type. Possible values:
        
        -   **HTTP:** Non-streaming HTTP
            
        -   **SSE:** Streaming HTTP
            
        -   **WS:** WebSocket protocol
            
        
        **sub\_protocol**
        
        Sub-protocol. Possible values:
        
        -   **DEFAULT:** Synchronous call
            
        -   **ASYNC:** Asynchronous call
            
            > Commonly used for image generation models. [Text-to-image generation](/help/en/model-studio/text-to-image)
            
        
        **status\_code**
        
        HTTP status code.
        
        > Only the `model_call_count` metric supports this LabelKey.
        
        **error\_code**
        
        Error code.
        
        > Only the `model_call_count` metric supports this LabelKey.
        
        **usage\_type**
        
        Usage type.
        
        > Only the `model_usage` metric supports this LabelKey.
        
        Possible values:
        
        -   total\_tokens
            
        -   input\_tokens
            
        -   output\_tokens
            
        -   cache\_tokens
            
        -   image\_tokens
            
        -   audio\_tokens
            
        -   video\_tokens
            
        -   image\_count
            
        -   audio\_count
            
        -   video\_count
            
        -   duration
            
        -   characters
            
        -   audio\_tts
            
        -   times
            
        
    5.  Click **Run queries** to execute the query.
        
        > If the chart displays data successfully, the configuration is correct. Otherwise, verify the following: 1. The HTTP API address, AccessKey, and AccessKey secret are correct. 2. Monitoring data exists in the Prometheus instance from [Step 1](#title-tkb-ds1-4p5).
        

## **Compare monitoring modes**

Model monitoring offers two modes: **Basic Monitoring** and **Advanced Monitoring**.

> **Basic Monitoring****:** It is automatically enabled when you activate Model Studio and cannot be disabled.

> **Advanced Monitoring**: Requires manual activation by Alibaba Cloud account ([or a RAM user with sufficient permissions](#54ea9ba526ovz)) on the [Monitoring (Singapore)](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry), [Monitoring (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/model-telemetry), or [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry) page. You can disable advanced monitoring at any time. It records data only after you enable it.

**Item**

**Basic Monitoring** **(Default)**

**Advanced Monitoring** **(Manual activation required)**

**Data latency**

Hourly

Minute-level

**Call statistics**

Supported

Supported

**Failed call details**

Not supported

Supported

**Performance metrics**

Supported

Supported

**Applicable scope**

All workspaces under the Alibaba Cloud account

Effective only in the workspace where it is enabled

**Billing**

Free

Paid

## **Quotas and limits**

-   **Data retention period:** Monitoring data is retained for **30 days** by default. For earlier periods, use the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance?statisticItem=DEFAULT_CHARGE_ITEM&statisticCycle=MONTHLY_SUMMARY) page.
    
-   **Alert template limit:** You can create up to **100** alert templates for each workspace.
    
-   **API limit:** You can query monitoring metrics using the [Prometheus HTTP API](#1f0d765b83nwb).
    
    -   **Alternative:** To retrieve token consumption for a single call, extract the data from the `usage` field in the response. See the [Qwen API reference](/help/en/model-studio/qwen-api-reference/).
        
        ```
        {
          "prompt_tokens": 3019,
          "completion_tokens": 104,
          "total_tokens": 3123,
          "prompt_tokens_details": {
            "cached_tokens": 2048
          }
        }
        ```
        

## **Billing description**

-   **Basic monitoring:** Free.
    
-   **Advanced monitoring:** When enabled, minute-level monitoring data is written to the [Cloud Monitor CMS](https://cloudmonitor.console.alibabacloud.com/newOverview) service and incurs fees. See [Cloud Monitor CMS billing](/help/en/cms/cloudmonitor-1-0/product-overview/billing-overview-1).
    
-   **Inference logs:** When enabled, minute-level log data is written to [Simple Log Service (SLS)](https://sls.console.alibabacloud.com/). This action incurs fees. For more information, see [Simple Log Service billing](/help/en/sls/billing-overview).
    

## **FAQ**

**Why can't I find the call count and token consumption after calling a model?**

Follow these steps to troubleshoot:

1.  **Data latency:** Basic monitoring has hourly latency. Advanced monitoring has minute-level latency.
    
2.  **Workspace:** If you are in a sub-workspace, you can view data for that workspace only. To view all data, switch to the **default workspace**.
    

**What causes timeouts when calling a model?**

Common reasons include the following:

-   **Excessively long output:** The model generates too much content, causing the response time to exceed the client timeout. Use [streaming output](/help/en/model-studio/stream) to receive the first token faster.
    
-   **Network issues:** Check that the network connection between the client and Alibaba Cloud is stable.
    

**How do I configure permissions for a RAM user to enable advanced monitoring?**

Procedure:

1.  Grant the `AliyunBailianFullAccess` [global management permission](/help/en/model-studio/member-management#cd0f1152d50hj) to the RAM user.
    
2.  Grant the `ModelMonitoring-FullAccess` (or `Administrator`) [page permission](/help/en/model-studio/member-management#febd776ce5lbx) to the RAM user to allow write operations on the monitoring page.
    
3.  [Grant the AliyunCloudMonitorFullAccess system policy](/help/en/cms/cloudmonitor-1-0/user-guide/grant-permissions-to-a-ram-user) to the RAM user.
    
4.  Create and grant a **create service-linked role** policy to the RAM user.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the navigation pane on the left, choose **Permissions** > **Policies**, and then click **Create Policy**.
        
    2.  Click **JSON**. Paste the following content into the policy input box, and click **OK**.
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": "ram:CreateServiceLinkedRole",
                    "Resource": "*",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        
    3.  Enter the policy name `CreateServiceLinkedRole` and click **OK**.
        
    4.  In the left navigation pane, choose **Identities** > **Users**. Find the RAM user in the list and click **Add Permission** in the **Actions** column.
        
    5.  From the Policies list, select the **CreateServiceLinkedRole** policy that you created and click **Grant permissions**.
        
5.  After you configure all the required permissions, return to the [Monitoring (Singapore)](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/model-telemetry), [Monitoring (Virginia)](https://modelstudio.console.alibabacloud.com/us-east-1?tab=dashboard#/model-telemetry), or [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/?tab=model#/model-telemetry) page and use the RAM user to retry enabling **Advanced Monitoring**.
    

**How do I configure permissions for a RAM user to enable logging?**

Procedure:

1.  Grant the `AliyunBailianFullAccess` [global management permission](/help/en/model-studio/member-management#cd0f1152d50hj) to the RAM user.
    
2.  You can configure `Model Monitoring – Operations` (or `administrator`) [page permissions](/help/en/model-studio/member-management#febd776ce5lbx) for the RAM user to allow them to perform write operations on the Model Monitoring page.
    
3.  [Grant the AliyunLogFullAccess system policy](/help/en/cms/cloudmonitor-1-0/user-guide/grant-permissions-to-a-ram-user) to the RAM user.
    
4.  Create and grant a **create service-linked role** policy to the RAM user.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the navigation pane on the left, choose **Permissions** > **Policy**, and then click **Create Policy**.
        
    2.  Click **JSON**. Paste the following content into the policy input box, and click **OK**.
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": "ram:CreateServiceLinkedRole",
                    "Resource": "*",
                    "Effect": "Allow"
                }
            ]
        }
        ```
        
    3.  Enter `CreateServiceLinkedRole` as the policy name and click **OK**.
        
    4.  In the navigation pane on the left, choose **Identities** > **Users**. Find the RAM user in the list, click **Add Permission** in the **Actions** column.
        
    5.  From the Policies list, select the **CreateServiceLinkedRole** policy that you created and click **Grant permissions**.
        
5.  After you configure all the required permissions, return to the [Monitoring (Beijing)](https://bailian.console.alibabacloud.com/cn-beijing/?tab=model#/model-telemetry) page, and use the RAM user to retry enabling **Inference Logs**.
    

## **Appendix**

#### **Glossary**

**Term**

**Explanation**

**Real-time**

All direct and indirect model calls, including:

-   API calls made through the DashScope SDK or OpenAI compatible interfaces
    
-   Playground
    
-   Test and published states of [Model Studio applications](/help/en/model-studio/application-introduction), including agents, workflows, agent orchestration applications, and nodes that involve model calls, such as LLM nodes, intent classification nodes, and agent group nodes
    
-   [Assistant API](/help/en/model-studio/assistant-api/) calls
    
-   [Application calls](/help/en/model-studio/application-calling-guide)
    

**Batches**

Large-scale offline data processing (non-real-time scenarios) using the [OpenAI compatible Batch (file input)](/help/en/model-studio/batch-interfaces-compatible-with-openai/) API.
