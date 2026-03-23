This topic describes how to view the consumption records of Simple Log Service, storage usage of a Logstore, and how to stop being billed for a Logstore.

## How do I view the storage usage and consumption records of Simple Log Service?

You can use [CloudLens for SLS](/help/en/sls/usage-notes-45) or [Cost Manager](/help/en/sls/use-the-new-version-of-cost-manager) to view the storage usage in a visualized manner.

**Important**

If **Cost Manager** or **CloudLens for SLS** is recently enabled, you cannot view historical bills. You must [query historical bills](/help/en/sls/query-resource-usage) in the Expenses and Costs console.

### **CloudLens for SLS**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
2.  Click **Usage Details** in the upper-right corner of the page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5424817071/p762197.png)
    
3.  View the resource usage on the **Billing Resource Monitoring** report. For more information, see [Billable Resource Monitoring](/help/en/sls/view-data-reports-2#section-c8u-qgd-tpb).
    
    ![计费资源监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366625961/p555682.png)
    

### **Cost Manager**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
2.  On the **Business Analysis** tab, click **Cost Manager**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5424817071/p762241.png)
    
3.  In the left-side navigation pane, choose **Dashboard** > **Log Service Bill Self-service Analysis**. For more information about the FAQ about Cost Manager, see [FAQ about Cost Manager](/help/en/sls/faq-12).
    

## How do I delete a specific log from a Logstore? How do I reduce log storage costs?

-   **Delete a specific log:** You can delete logs only by [changing the data retention period](/help/en/sls/how-do-i-delete-logs) of a Logstore. After the retention period of a log ends, the log is automatically deleted.
    
-   **Reduce log storage costs:**
    
    -   You can query Simple Log Service bills. For more information, see [How do I query the storage usage and consumption records of Simple Log Service?](/help/en/sls/how-to-view-the-storage-capacity-and-consumption-records-of-log-service)
        
    -   You can shorten the data retention period of a Logstore. For more information, see [How do I delete logs?](/help/en/sls/how-do-i-delete-logs)
        
    -   You can enable the tiered storage feature and transfer data from the hot storage tier to the Infrequent Access (IA) storage tier or Archive storage tier. For more information, see [Overview of tiered storage](/help/en/sls/data-tiered-storage-overview).
        
    -   You can download logs to your computer or ship logs to Object Storage Service (OSS) for storage. For more information, see [Download logs](/help/en/sls/download-logs) and [Create an OSS data shipping job (new version)](/help/en/sls/create-oss-shipping-tasks-new-version).
        

## How do I stop being billed for a Logstore?

If a Logstore exists, you are charged for active shards regardless of whether the Logstore is used. For more information, see [Why am I charged for active shards?](/help/en/sls/why-am-i-charged-for-active-shards) For more information about how to stop being billed for Simple Log Service, see [How do I deactivate Simple Log Service or stop being billed for Simple Log Service?](/help/en/sls/stop-billing)
