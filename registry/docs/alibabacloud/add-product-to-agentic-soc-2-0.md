When logs are scattered across different cloud services, third-party tools, or self-managed applications, it is difficult to perform unified threat detection and security analysis. Agentic SOC provides a unified integration center to help you centrally collect, standardize, and analyze log data from any source. This lets you apply consistent detection rules across your entire technical environment, providing a comprehensive security view and enabling an efficient threat response.

## **How it works**

Agentic SOC uses a modular configuration system to automate the integration and standardization of raw logs. The core principle relies on the following key components working together:

-   **Data Source**: Specifies the storage location for raw logs, such as the Project and Logstore in Alibaba Cloud Simple Log Service (SLS).
    
    **Note**
    
    Agentic SOC supports **Agentic SOC Dedicated Collection Channel**, **User Log Service**, and **Security Center Log Service**. For more information, see [Data Source Type Comparison](#1da0ee1c99tvi).
    
-   **Standardized Rule**:
    
    -   A set of parsing instructions based on [SPL syntax](/help/en/sls/spl-overview/) that extracts key fields, such as the source IP and destination port, from various types of raw logs and converts them into the unified Agentic SOC structured format.
        
    -   Each **Standardized Rule** is associated with a **Dataset**, which is a predefined model of standard fields. The dataset determines the standard fields that are available for log analysis. For more information, see [Datasets](/help/en/security-center/user-guide/standardized-log-access-rules#240159cc284ut).
        
-   **Standardization Method**: Specifies the technical pattern for processing and accessing logs after they are standardized.
    
    **Note**
    
    The supported methods are **Real-time Consumption** and **Scan Query**. For more information, see [Comparison of standardization methods](#560345584c6o4).
    
-   **Access Policy**: The core configuration of the log ingestion flow. It associates the **Data Source**, **Standardization Method**, and **Standardized Rule** configurations to specify how logs are read, parsed, and processed. This enables automatic log ingestion and standardization.
    

## **Integrate Alibaba Cloud products**

This process applies to Alibaba Cloud products that already deliver logs to your SLS Logstores, such as Web Application Firewall (WAF), Cloud Firewall (CFW), and ActionTrail.

### **Integration flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3101098671/CAEQTxiBgMD52uLo1BkiIDdmM2RiOGRhOTdjNjQyYTM5MjExMjQzZDI0NDFjNmY15034171_20250610143547.413.svg)

### **Step 1: Enable product log delivery**

Before you can integrate logs, you must enable the log audit feature for the target cloud product and deliver its logs to SLS. This allows Agentic SOC to read the data.

**Important**

For alert logs from Alibaba Cloud security products in the central Logstore, the data is automatically delivered to Agentic SOC. You can complete the integration without enabling the cloud product's log service. Examples include WAF alert logs and **Cloud Firewall alert logs**.

1.  Go to the console of the cloud product, such as WAF or CFW, and find the entry point for Log Management or Simple Log Service. For more information, see [References for integrating Alibaba Cloud product logs into SLS](#9608fda556dfp).
    
2.  Follow the product documentation to enable log delivery. This operation usually creates a **Project** and one or more **Logstores** in SLS automatically.
    
    **Note**
    
    You can log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view the **Project** and **Logstore** for logs delivered by the product. For example, the project name for WAF logs is usually `wafnew-logstore`.
    

### **Step 2: Enable built-in access policies**

## Enable in batches automatically

Agentic SOC supports batch integration of logs from Alibaba Cloud products. This feature can automatically enable access policies and discover data sources. The procedure is as follows:

1.  **Log on to the console**
    
    Go to [Security Center console - Agentic SOC - Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  **Configure batch integration**
    
    Click **Batch Associate Settings** and follow the instructions to complete the configuration.
    
    -   **Access Settings**:
        
        -   **Increment Access**: Retains all enabled access policies and adds only the data sources and policies from the current configuration.
            
        -   **Full Access**: Overwrites and replaces all existing access settings. Any policies that are not selected in the current configuration will be disabled.
            
            **Warning**
            
            This is an overwrite operation that may accidentally disable running policies and lead to data integration interruptions. Proceed with caution.
            
    -   **Accessible Account**: Select the current account and its [member accounts](/help/en/security-center/user-guide/multi-account-management).
        
    -   **Alibaba Cloud Services**: Select the cloud products to connect and their corresponding data sources.
        
        **Note**
        
        To simplify the configuration, Agentic SOC includes a recommended access policy. If you click **Use Recommended Policy**, the system automatically selects the data sources with the most analytical value for the selected cloud products based on best practices. This helps you quickly enable data analytics.
        
    -   **Auto-Add New Data Sources**: If you enable this option, the system automatically includes new Logstores in the collection scope of the current data source. You do not need to add them manually.
        
3.  **Confirm and start data integration**
    
    After you complete the configuration, click **OK**. The system automatically performs the following operations:
    
    -   **Full integration:** Automatically integrates all enabled Logstores that are associated with the selected cloud product data sources within the selected accounts in SLS.
        
    -   **Policy activation:** Automatically enables the access policies that correspond to the selected data sources.
        
        **Important**
        
        New access policies may take some time to be deployed and initialized. Please wait for the process to complete.
        
4.  **Confirm the enabled status**
    
    1.  Return to the access list, select the product to access, and click **Access Settings** in the Actions column.
        
        **Note**
        
        For member accounts, on the Access Policy tab in **Multi-account Access Settings**, click **Multi-account Access** in the Actions column for the target data source.
        
    2.  You can view the access state on the Access Policy list page. If the state is abnormal, check the status of the data source. For more information, see [Check data source connection status](#2d7628377f0qm).
        

## **Enable manually**

1.  **Configure the data source**
    
    Agentic SOC has preconfigured data sources for major Alibaba Cloud products. You must check these configurations to ensure that they match your Logstore information.
    
    1.  **Find the cloud product**
        
        1.  Log on to the [Security Center console and go to Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
            
        2.  On the **Service Integration** tab, set the **Service Provider** filter to **Alibaba Cloud**, select a product to integrate, such as Web Application Firewall, and click **Access Settings** in the Actions column.
            
    2.  **Check the data source status**
        
        1.  Click the name of the data source that is associated with the product. The page redirects to the **Data Source** tab.
            
        2.  Locate the data source and check its connection status:
            
            -   **Normal**: Indicates that Agentic SOC can access the Logstore. You can proceed to the next step.
                
            -   **Abnormal**: Indicates that the configuration is incorrect. Click **Edit** in the **Actions** column of the data source and verify the following information:
                
                -   **Instance information**: Check whether the **Region**, **Project**, and **Logstore** that you recorded in **Step 1** match exactly.
                    
                -   **Source log service**: Confirm that the SLS Logstore service is running. For example, the Project is not disabled and logs are still being written.
                    
            -   **Not connected**: Indicates that the data source is not configured.
                
                -   Click **Edit** in the **Actions** column of the data source.
                    
                -   Click **Create Instance** and select the Logstore information that was automatically created in **Step 1** (**Region ID**, **Project**, and **Logstore**).
                    
2.  **Enable the built-in access policy**
    
    Start the log processing pipeline to allow Agentic SOC to automatically analyze product logs.
    
    1.  Return to the **Service Integration** tab and go to the **Access Settings** page for the product again.
        
    2.  **Modify the standardization method (optional)**
        
        For some product policies, you can modify the **Standardization Method** on the edit page. The supported methods are **Real-time Consumption** and **Scan Query**. For more information, see [Standardization Method Comparison](#560345584c6o4).
        
        **Important**
        
        -   If the data source type is **Security Center Log Service** or alert logs, the standardization method is **Real-time Consumption** and cannot be changed.
            
        -   If the dataset (StoreView) associated with **Standardization Category or Structure** already has five access policies of the "**Scan Query**" pattern attached, you must select "**Real-time Consumption**" for the current policy. Otherwise, the access policy cannot be enabled.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7008402571/p940687.png)
        
    3.  **Log standardization test**
        
        If you modified the standardization method, you must perform a log standardization test.
        
        **Warning**
        
        Make sure that the **Logstore** for the **Data Source** contains data. The log standardization test cannot be performed if the Logstore is empty.
        
        1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7008402571/p942881.png) button. The system parses the log data using SPL syntax and returns the result.
            
        2.  Select an item from the results drop-down list to use as test data and then click **Parse and Test**.
            
        3.  After the test passes, click **Complete**.
            
            **Note**
            
            If the test fails, see [What do I do if the log standardization test fails or data cannot be parsed?](#c57ef2d257orz) for a solution.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7008402571/p941471.png)
        
    4.  **Enable the policy**
        
        Turn on the switch in the **Enabling Status** column of the policy.
        
        **Important**
        
        If you enabled the recommended access policy when you purchased Agentic SOC, the built-in policies for Security Center, WAF, **Cloud Firewall**, and **ActionTrail** are enabled by default. To enable the recommended access policy, see [Enable access policies for subscription](/help/en/security-center/user-guide/buy-agentic-soc#bd020116f7il6) and [Enable log access policies for pay-as-you-go](/help/en/security-center/user-guide/buy-agentic-soc#1aca02917c6nj).
        

### **Step 3: Add a new access policy (optional)**

Some products support custom access policies. The procedure to add a custom access policy is as follows:

1.  In the access policy list, click **Create Access Policy**.
    
    **Note**
    
    If the **Create Access Policy** button is not displayed, the product does not support this feature.
    
2.  On the Create Access Policy page, select the **Data Source**, **Standardized Rule**, and **Standardization Method**. If no suitable data sources or standardization rules are available, you can create [a new data source](/help/en/security-center/user-guide/set-up-data-sources#bfb9b251876pi) and [a custom standardization rule](/help/en/security-center/user-guide/standardized-log-access-rules#987a3b402asbj).
    
    **Important**
    
    You can select only data sources that belong to the current account. Data sources from member accounts are not supported.
    
3.  Complete the **Test Log Standardization** and enable the policy.
    

## **Integrate third-party logs**

Agentic SOC supports the integration of logs from third-party clouds, such as Fortinet, Chaitin, Microsoft, Sangfor, Tencent Cloud, Huawei Cloud, Hillstone Networks, Knownsec, and Microsoft Cloud, and custom product applications. The procedure is as follows:

## **Integrate logs from third-party cloud products**

## Logs not in SLS

For WAF and CFW products from Tencent Cloud and Huawei Cloud, Agentic SOC provides a data import feature to help you integrate logs.

### **Scope**

**Cloud provider**

**Product**

**Log type**

**Tencent Cloud**

Web Application Firewall (WAF)

Attack log, access log

Cloud Firewall (CFW)

Alert log

**HUAWEI CLOUD**

Web Application Firewall (WAF)

Attack log, access log

Cloud Firewall (CFW)

Alert log

### **Integration flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3101098671/CAEQUxiBgICxzO7q3hkiIDAwYjgxOTgyOTc3OTRhMmViNGUwMmU5M2E3YjcyNThm5034171_20250610143547.413.svg)

### **Procedure**

1.  **Create a data source**
    
    Create a dedicated Agentic SOC data source for the third-party cloud log data. If you already created one, you can skip this step.
    
    1.  Go to [Security Center console - Threat Analysis and Response - Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the region for the Assets that you want to protect: **Chinese Mainland** or **Outside Chinese Mainland**.
        
    2.  On the **Data Source** tab, create a data source to receive Tencent Cloud logs. For more information, see [Create a data source: Logs not in](/help/en/security-center/user-guide/set-up-data-sources#e870f3a8640ft) SLS.
        
        -   **Source Data Source Type**: Select **User Log Service** or **Agentic SOC Dedicated Collection Channel**. For more information, see [Data source type comparison](#1da0ee1c99tvi).
            
        -   **Add Instances**: We recommend that you create a new **Logstore** to isolate the data.
            
2.  **Import data**
    
    Refer to [Import Huawei Cloud log data](/help/en/security-center/user-guide/access-log-data-on-huawei-cloud) and [Import Tencent Cloud log data](/help/en/security-center/user-guide/access-tencent-cloud-log-data) and import the third-party cloud data into the data source that you created in Step 1.
    
3.  **Configure an access policy**
    
    1.  Return to the **Service Integration** tab and set the **Service Provider** filter to a third-party manufacturer, such as Huawei Cloud.
        
    2.  In the Actions column for the target product, click **Access Settings**. On the access policy details page, click **Create Access Policy**.
        
    3.  Configure the data source as described below:
        
        -   **Data Source Name**: Select the data source that you created in Step 1.
            
        -   **Standardized Rule**: We recommend that you select the built-in standardization rules provided by Agentic SOC that are compatible with Huawei Cloud or Tencent Cloud.
            
            **Note**
            
            You can also refer to [Standardization Rules and Datasets](/help/en/security-center/user-guide/standardized-log-access-rules) to create custom standardization rules.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7250582671/p1021390.png)
            
        -   **Standardization Method**: Only **Real-time Consumption** is supported. **Scan Query** is not supported.
            
    4.  On the **Test Log Standardization** page, click **Parse and Test**. For more information, see [Log Standardization Test](#04cf99b09fzba).
        
        **Warning**
        
        Ensure that the **Logstore** that corresponds to the **Data Source** contains data. Otherwise, you cannot perform the log standardization test.
        
    5.  After the test passes, click **Finish**. Then, enable the policy.
        

## Logs in SLS

If you already collected logs from third-party products, such as Fortinet, Chaitin, and Sangfor, into an SLS Logstore using methods such as Logtail or Syslog-ng, the ingestion flow is as follows. For information about how to ingest data into SLS, see [Data collection overview](/help/en/sls/data-collection-overview).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3101098671/CAEQTxiBgMDag6fr1BkiIDQ5ODNlYjA3MzNiNzQ4ODhhMTQwYzUzNzdhNGE0ZWU55034171_20250610143547.413.svg)

1.  **Configure the data source**
    
    1.  **Find the integration product**
        
        1.  Go to [Security Center console > Agentic SOC > Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the region where the assets that you want to protect are located: **Chinese Mainland** or **Outside Chinese Mainland**.
            
        2.  Set the **Service Provider** filter to Third-party vendor (such as Huawei Cloud). Select a product to integrate (such as Web Application Firewall) and click **Integration Settings** on the right.
            
    2.  **Modify the data source**
        
        1.  Click the name of the data source that is associated with the product. You are redirected to the **Data Source** tab. Then, click **Edit** in the **Actions** column of the data source.
            
        2.  Click **Create Instance** and select the **Region ID**, **Project**, and **Logstore** where the third-party product logs are stored.
            
            **Note**
            
            You can log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view the Logstore information for the cloud product.
            
2.  **Enable the built-in access policy**
    
    1.  Return to the **Service Integration** tab and go to the **Access Settings** page for the product again.
        
    2.  Click the **Edit** button in the Actions column for the target built-in access policy. On the **Test Log Standardization** page, click **Parse and Test**. For more information, see [Log Standardization Test](#04cf99b09fzba).
        
    3.  After the test passes, click **Complete**. Then, enable the policy.
        

## **Integrate logs from custom product applications**

### **Integration flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3101098671/CAEQTxiBgMCvkpDo1BkiIDIyZDBlMTYwM2Y1ODRiMzRiNzljYmNjZmZmMzc2NWI45034171_20250610144722.601.svg)

1.  **Add a product**
    
    1.  Go to [Security Center console - Agentic SOC - Integration Center](https://yundun.console.alibabacloud.com/?p=sas#/accessCenter/productAccess/ap-southeast-1). In the upper-left corner of the page, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
        
    2.  On the **Service Integration** tab, in the **Multi-cloud Service Access** area, click **Add Service** and enter the **Vendor Name** and **Service Name**.
        
2.  **Add a data source**
    
    On the **Data Source** tab, click **Add Data Source**. For more information, see [Data Source](/help/en/security-center/user-guide/set-up-data-sources#bfb9b251876pi). Configure the following parameters:
    
    -   If product logs are already collected in SLS, set the **Data Source Type** to **User Log Service** and select the corresponding Logstore.
        
        **Note**
        
        You can log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view the product's Logstore information.
        
    -   If the product logs are not collected in SLS:
        
        -   If you set **Data Source Type** to **Agentic SOC Dedicated Data Collection Channel**, Agentic SOC creates a dedicated Project (aliyun-cloudsiem-channel-AlibabaCloudUID-cn-RegionID) and a dedicated Logstore in SLS.
            
            Agentic SOC creates a dedicated Project (aliyun-cloudsiem-channel-AlibabaCloudUID-cn-RegionID) and a dedicated Logstore in SLS.
            
        -   If you set **Data Source Type** to **User Log Service**, you must first go to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and create the corresponding Logstore.
            
        
        **Important**
        
        After the data source is configured, refer to [Data Collection Overview](/help/en/sls/data-collection-overview) or contact the SLS helpdesk to collect product logs and send them to the corresponding SLS Logstore.
        
3.  **Add a standardization rule**
    
    On the **Standardized Rule** tab, click **Create Custom Rule**. For more information, see [Create a custom standardization rule](/help/en/security-center/user-guide/standardized-log-access-rules#987a3b402asbj).
    
    **Note**
    
    Make sure the vendor and product match the product that you added in Step 1.
    
4.  **Add and enable an access policy**
    
    1.  Return to the **Service Integration** tab, find the product you added in **Step 1**, and click **Access Settings** in the Actions column.
        
    2.  On the Ingestion Settings page, click **Create Access Policy**. On the Create Ingestion Policy page, configure the following parameters for **Data Source** and **Standardized Log**:
        
        **Data Source**: Select the data source that you configured in **Step 2**.
        
        **Standardized Rule**: Select the rule that you configured in **Step 3**.
        
        **Standardization Method**: The supported methods are **Real-time Consumption** and **Scan Query**. For more information, see [Comparison of standardization methods](#560345584c6o4).
        
        **Important**
        
        If the data source type is **Agentic SOC Dedicated Data Collection Channel**, select **Real-time Consumption**.
        
    3.  On the **Test Log Standardization** page, click **Parse and Test**. For more information, see [Log Standardization Test](#04cf99b09fzba).
        
        **Warning**
        
        Make sure that your **Data Source** has data in the corresponding **Logstore**. If the Logstore is empty, you cannot perform the log standardization test.
        
    4.  After the test passes, click **Complete**. Then, enable the policy.
        

## **Analyze integrated data**

After the product logs are integrated, you must configure threat detection rules to analyze the logs, generate alerts and security events, and help you respond to and handle cloud security risks. For more information, see [Configure threat detection rules](/help/en/security-center/user-guide/detection-rules).

## Quotas and limits

-   **Scan Query mode limit**: A [dataset](/help/en/security-center/user-guide/standardized-log-access-rules#240159cc284ut) (associated with a **Standardized Rule**) can be attached to a maximum of five access policies in "**Scan Query**" mode.
    
-   **Multi-account integration limits**:
    
    -   Logs from member accounts can be ingested only using the **Real-time Consumption** mode. **Scan Query** is not supported. For more information, see [Multi-account management feature](/help/en/security-center/user-guide/multi-account-management).
        
    -   You cannot add custom access policies for data sources that belong to member accounts.
        
-   **Limitations on the standardization method**: If the data source type is **Agentic SOC Dedicated Collection Channel** or the ingested log type is "alert logs," only **Real-time Consumption** is supported.
    

## Billing information

Integrating logs using Agentic SOC may incur the following fees, depending on the data source type that you choose:

**Note**

-   Billing for Agentic SOC [subscription](/help/en/security-center/product-overview/billing-overview#1ed355c216zzc) and Agentic SOC [Pay-as-you-go](/help/en/security-center/product-overview/billing-overview#79d5b155140q6).
    
-   [SLS Billing Overview](/help/en/security-center/product-overview/billing-overview).
    

**Data source type**

**Agentic SOC billing items**

**SLS billing items**

**Note**

**Agentic SOC Dedicated Collection Channel**

-   Log ingestion fees
    
-   Log storage and write fees
    

**Note**

These items consume **Log Ingestion Traffic**.

Fees for services other than log storage and writes, such as Internet traffic.

Agentic SOC creates and manages SLS resources. Therefore, Logstore storage and write fees are billed by Agentic SOC.

**User Log Service**

Log ingestion incurs fees and consumes **Log Ingestion Traffic**.

All costs for logs, including storage, writes, and data transfer.

SLS manages all log resources. SLS bills all fees for these resources.

**Security Center Log Service**

Log ingestion consumes **Log Ingestion Traffic**.

None

This is an internal Security Center log. No SLS fees apply.

## **References**

### **Standardization Method** **comparison**

**Comparison dimension**

**Real-time Consumption**

**Scan Query**

**How it works**

Write-time standardization: Agentic SOC consumes logs from data sources, standardizes the logs, and then stores them in the Agentic SOC log space.

Schema-on-read: Reads logs directly from the data source instance without storing replicas.

**Core advantages**

High query performance and fast analysis.

Lightweight deployment and lower cost.

**Log storage and fees**

If you purchase **Log Storage Capacity**, standardized logs are automatically delivered to Log Management in Agentic SOC. This delivery consumes your Agentic SOC **Log Storage Capacity** and cannot be disabled.

Log replicas are not stored. The source, such as SLS, is billed for raw log storage.

**Applicable data source types**

-   **Security Center Log Service**
    
-   **User Log Service**
    
-   **Agentic SOC Dedicated Collection Channel**
    

**User Log Service** (excluding alert logs)

**Performance and quota**

No limit on the number of access policies.

-   **Policy limits**: Each [dataset](/help/en/security-center/user-guide/standardized-log-access-rules#240159cc284ut) supports a maximum of five scan-and-query policies.
    
-   **Performance limits**: Full indexes are not available. Query performance decreases as the volume of scanned data increases.
    
-   **Operator limits**: Some parsing and processing SPL operators, such as `parse-json`, `parse-kv`, `parse-regexp`, `parse-csv`, `expand-values`, and `let`, are not available.
    

**Multi-account access**

Supported.

Not supported.

**Scenario limitations**

You must select this pattern if the data source is the **Agentic SOC dedicated data collection channel** or the log type is **alert log**.

None

### **Data Source** **Type Comparison**

**Comparison dimension**

**User Log Service**

**Agentic SOC Dedicated Collection Channel**

**Security Center Log Service**

**Log storage and management**

You manage your own SLS projects and Logstores.

Agentic SOC automatically creates and manages dedicated SLS projects and Logstores.

Security Center does not store its internal logs in your SLS.

**Supported standardization methods**

**Real-time Consumption**, **Scan Query** (excluding alert logs)

**Real-time Consumption**

**Real-time Consumption**

**Use cases**

-   Ingest logs delivered to SLS from Alibaba Cloud products such as WAF and CFW.
    
-   Ingest logs collected to SLS from third-party products using tools such as Logtail.
    

-   Collect logs from third-party clouds, such as Tencent Cloud and Huawei Cloud, that are not already in SLS.
    
-   Collect custom application logs that do not have an existing delivery method to SLS.
    

Analyze the internal logs of Security Center.

### References for integrating Alibaba Cloud product logs into SLS

-   Web Application Firewall: [WAF 3.0 logs](/help/en/sls/waf-3-0-logs/).
    
-   Cloud Firewall: [Cloud Firewall logs](/help/en/sls/cloud-firewall-logs-usage-notes/).
    
-   Bastionhost: [Archive audit logs to Simple Log Service](/help/en/bh/bastionhost/user-guide/archive-audit-logs-in-log-service).
    
-   ActionTrail: [Platform operation logs](/help/en/sls/inner-actiontrail-usage-notes/).
    
-   Anti-DDoS: [Get started with full log analysis](/help/en/anti-ddos/anti-ddos-pro-and-premium/user-guide/use-the-log-analysis-feature).
    
-   CDN: [Best practices for delivering CDN real-time logs to SLS to analyze user access data](/help/en/cdn/user-guide/best-practices-for-shipping-and-analyzing-alibaba-cloud-cdn-real-time-logs-in-log-service#section-pyv-ifv-lgz).
    
-   DCDN: [Global Accelerator access log](/help/en/sls/global-acceleration-access-log-notice-before-use/).
    
-   API Gateway: [API Gateway access logs](/help/en/sls/api-gateway-access-logs-usage-notes/).
    
-   Container Service for Kubernetes: [Log Management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/log-management-2/).
    
-   PolarDB: [Log Analysis](/help/en/polardb/polardb-for-xscale/log-analysis-1).
    
-   ApsaraDB for MongoDB: [MongoDB logs](/help/en/sls/mongodb-logs-usage-notes/).
    
-   RDS: [RDS SQL Audit Log](/help/en/sls/rds-sql-execution-logs-usage-notes/), [Deliver RDS MySQL logs to Simple Log Service](/help/en/rds/apsaradb-rds-for-mysql/collect-the-audit-logs-of-an-apsaradb-rds-for-mysql-instance-by-using-log-service).
    
-   VPC: [VPC flow logs](/help/en/sls/usage-notes-34/), [Elastic IP Address logs](/help/en/sls/eip-logs-usage-notes/).
    
-   Server Load Balancer (SLB): [ALB access logs](/help/en/slb/application-load-balancer/user-guide/access-logs), [Access logs](/help/en/slb/classic-load-balancer/user-guide/clb-access-logs), [Layer-7 access logs for Classic Load Balancer (CLB)](/help/en/sls/layer-7-access-logs-for-clb-usage-notes/), and [second-level Layer-4 monitoring metrics for Classic Load Balancer (CLB)](/help/en/sls/layer-4-monitoring-metrics-for-clb-usage-notes/).
    
-   Object Storage Service: [OSS access log](/help/en/sls/usage-notes-of-oss-access-log/).
    
-   File Storage NAS: [Log analysis based on SLS](/help/en/nas/user-guide/log-analysis-based-on-sls01/).
    
-   CloudConfig: [Configuration Audit Log](/help/en/sls/configure-audit-logs-usage-notes/).
    

## **FAQ**

-   **Why does the data source connection status show "Abnormal" or "Not connected"?**
    
    Check the following items in order:
    
    1.  **RAM permission**: Check whether the service-linked role `AliyunServiceRoleForSas` for Agentic SOC has the permissions to access the SLS Logstore (at least `AliyunLogReadOnlyAccess`). This is the most common cause.
        
    2.  **Configuration information**: On the data source edit page in Agentic SOC, check whether the SLS **Region**, **Project**, and **Logstore** names are correct. Make sure that there are no spelling errors or extra spaces.
        
    3.  **Source Logstore status**: Log on to the SLS console and confirm that the Project is not disabled and that new data is being written to the Logstore.
        
-   **Why does the access policy fail to enable?**
    
    A single dataset StoreView (determined by **Standardization Category or Structure** in **Standardized Rule**) can be attached to a maximum of five access policies in 'Scan Query' mode. If you exceed this limit, the access policy fails to enable. For a solution, see [Access policy fails to be enabled](/help/en/security-center/user-guide/faq-on-how-to-add-service-to-agentic-soc-2-0#1454b0411agy6).
    
-   **What can I do if the log standardization test fails or data cannot be parsed?**
    
    -   **Check whether the source Logstore contains data**: Make sure that new logs have been written to the SLS Logstore, preferably within the last hour. If the Logstore is empty, the test cannot proceed.
        
    -   **Check whether the standardization rule matches**: If you use a custom rule, confirm that the SPL statement can correctly parse the raw log format. You can debug the SPL statement on the query and analysis page in the SLS console.
