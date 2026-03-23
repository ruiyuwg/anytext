Key Management Service (KMS) provides the Simple Log Service for KMS feature. This topic describes how to enable the Simple Log Service for KMS feature and how to query and analyze logs.

## **Usage notes**

-   After the Simple Log Service for KMS feature is enabled, logs are stored for a continuous period of 180 days from the first day you use the feature. On the 181st day, the logs that are stored on the first day are overwritten. This ensures that only the most recent 180 days of logs are retained.
    
    **Important**
    
    If the log storage capacity is exhausted before the 180 days, logs cannot be stored. To address this issue, you must increase the log storage capacity.
    
-   If the following message is displayed in the KMS console, submit a ticket and contact technical support to upgrade your KMS instance.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3844423171/p729813.png)
    

## **Step 1: Enable the Simple Log Service for KMS feature**

You can enable the feature when you purchase a KMS instance. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance). If you purchased a KMS instance, you can enable the feature by performing the following steps:

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Security Operations** > **Simple Log Service for KMS**.
    
2.  Select an instance ID and click **Buy Now**. Then, select **Enable** for **Log Analysis** and specify a value for **Log Storage Capacity**.
    
3.  Read and select **Terms of Service**, click **Buy Now**, and then complete the payment.
    

After you enable the feature, the following operations are automatically performed:

-   RAM creates the **AliyunServiceRoleForSLSSecurityLens** service-linked role to authorize Simple Log Service to access KMS resources.
    
-   Simple Log Service creates a project for the KMS instance. The project name is in the `kms-log-{KMS instance ID}` format. You can view the project on the homepage of the [Simple Log Service console](https://sls.console.alibabacloud.com). For more information about projects, see [Project](/help/en/sls/project#concept-t3x-hqn-vdb). Simple Log Service also creates a Logstore named `kms_audit_log` in the project to manage the logs of the KMS instance. For more information about Logstores, see [Logstore](/help/en/sls/logstore#concept-btb-4qn-vdb).
    

## Step 2: Query and analyze logs

1.  On the **Simple Log Service for KMS** page, select an instance ID.
    
2.  Optional. Enter the required key ID, secret ID, HTTP status code, or request ID, and click **Search** to query logs.
    
3.  Specify a query time range.
    
    **Note**
    
    -   Logs are stored for 180 days. Logs that are stored 180 days ago are deleted. Therefore, you can query only the logs within the previous 180 days.
        
    -   The query results may contain the logs that are generated 1 minute earlier or later than the specified time range.
        
    
4.  Enter a query statement in the search box and click **Search & Analyze**. For more information, see [Log search overview](/help/en/sls/log-search-overview) and [Overview of log query and analysis](/help/en/sls/log-analysis-overview).
    
    **Note**
    
    No additional fees are generated for query and analysis operations.
    
    You can also configure alert rules based on the charts in a dashboard to monitor service status in real time. For more information, see [Configure an alert monitoring rule in Simple Log Service](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service).
    

## **Related operations**

### **Increase log storage capacity**

You can only increase the log storage capacity. You cannot reduce the log storage capacity.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Resource** > **Instances**.
    
2.  Find your KMS instance and click **Upgrade** in the **Actions** column.
    
3.  In the **KMS (International) | Upgrade/Downgrade** page, configure **Log Storage Capacity** and click Buy Now. Then, read and select **Terms of Service**.
    
4.  Click **Subscribe** and complete the payment.
    

## **FAQ**

### **How do I renew the Simple Log Service for KMS feature?**

The feature does not support separate renewal. You can only renew the feature together with your KMS instance. For more information about how to renew a KMS instance, see [Billing](/help/en/kms/key-management-service/product-overview/kms-billing#section-3tt-br5-7gg).
