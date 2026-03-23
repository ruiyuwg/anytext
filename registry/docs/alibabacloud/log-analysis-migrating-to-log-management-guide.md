This guide explains how to smoothly migrate from the Log Analysis service of Security Center to the more powerful Log Management service. The migration uses a parallel write, verify, and switch process to ensure zero data loss for incremental logs and to complete the service upgrade.

## **Why migrate to Log Management?**

The **Log Management** service helps overcome the limitations of **Log Analysis** in data storage, cross-region delivery, and complex analysis. The following table compares the features of the two services.

**Comparison**

**Log Analysis**

**Log Management**

**Core features**

Basic log collection, query, and alerting.

Full feature coverage. Supports standard SQL for complex join queries and statistics. Provides enhanced retrieval and analysis capabilities, such as support for SQL-92 and intelligent clustering.

**Delivery region**

The system specifies a default region. Custom regions are not supported.

Supports custom delivery regions.

**Multi-account**

Not supported.

Supported.

**Storage period**

Fixed at 180 days.

Supports custom TTL (1 to 3,650 days or permanent).

## **Migration plan**

### **Migration flow**

The core of the migration plan is to establish a parallel log data stream. After you confirm that the new data stream is stable and reliable, you can switch the traffic and disable the old data stream.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6431358671/CAEQTxiBgID4pNbX1BkiIDM2Y2Q1MmUyZDA1ZTQxNjI5NWEzNTllMTFkZGIyNmRm5878083_20251114105551.483.svg)

1.  **Parallel write**: Enable both the **Log Management** and **Log Analysis** services to write incremental logs to both services in parallel.
    
2.  **Data validation**: Compare the data in the **Log Management** and **Log Analysis** services to ensure that the data received by **Log Management** is complete and accurate.
    
3.  **Switch to single write**: After you confirm data consistency, turn off the delivery switch for **Log Analysis**. Incremental logs are then written only to the **Log Management** service.
    
4.  **Process historical data**: Process historical data in **Log Analysis** as needed. You can archive the data to OSS or allow it to expire and be deleted.
    
5.  **Resource cleanup**: Unsubscribe from the **Log Analysis** service to stop billing and complete the migration.
    

### **Key risks and compatibility notes**

**Warning**

Before migration, assess and implement data backup and code refactoring.

-   **Risk of historical data loss**: If you clear data and unsubscribe from the **Log Analysis** service without backing up your historical data, the data will be permanently lost.
    
-   **SQL query incompatibility**: The SQL search statements for **Log Analysis** (by topic) and **Log Management** (by Logstore) are not interchangeable because the services use different storage structures.
    
-   **Management API incompatibility**: The API fields and returned results for some management APIs, such as those for modifying the delivery switch or for exclusive features, are incompatible between **Log Analysis** and **Log Management**. You must adapt them separately. For more information, see [Log Management API](/help/en/security-center/developer-reference/api-cloud-siem-2024-12-12-dir-log-management/) and [Log Analysis API](/help/en/security-center/developer-reference/api-sas-2018-12-03-dir-log-analysis/).
    

### **Cost assessment**

-   **Costs during parallel write**: During the parallel write phase, you will incur double charges for write traffic and storage.
    
-   **Costs for historical data processing**:
    
    -   If you export data to OSS, you will incur OSS storage fees.
        
    -   If you let the data expire naturally, you must continue to pay storage fees for the Log Analysis service for up to 180 days.
        

## **Implementation steps**

### **Step 1: Enable and configure Log Management**

1.  **Log on to the console**
    
    Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the navigation pane on the left, choose **Detection and Response** > **Log Management**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
    **Note**
    
    If you have enabled **Agentic SOC**, navigate to **Agentic SOC** > **Log Management**.
    
2.  **Enable the service**
    
    On the **Log Management** page, select **Activate Subscription** or **Activate Pay-as-you-go** and follow the on-screen instructions to enable the service. For more information, see [Enable or disable the Log Management service](/help/en/security-center/user-guide/log-management-2-0#3e85675e25pfd).
    
    -   **Subscription**:
        
        -   Set the **Purchase or Not** configuration item for **Agentic SOC** to **Yes**.
            
        -   Enter the log storage capacity as needed, click **Order Now**, and complete the payment. For information about how to estimate the capacity, see Agentic SOC [purchase instructions](/help/en/security-center/user-guide/purchase-security-center#b801edf51fu10).
            
    -   **Pay-as-you-go**: Select a storage region and click **Activate and Authorize**.
        
3.  **Turn on the delivery switch**
    
    1.  On the **Log Management** page, click the **Log Settings** button in the upper-right corner.
        
    2.  In the **Log Storage Management** section, on the **Security Center Logs** tab, you can view and set the delivery status for each log type.
        
        **Note**
        
        -   By default, Agentic SOC automatically enables the delivery switches for all Security Center log types within 30 minutes.
            
        -   If you have not purchased value-added services such as Application Protection or Malicious File Detection, the delivery switches for the corresponding log types are disabled by default.
            
        

### **Step 2: Verify data writing for Log Management**

1.  **Query logs**
    
    On the **Log Management** page, from the **Log Type** drop-down list in the upper-left corner, select a product log under **Security Center Logs** and click **Search & Analyze**.
    
    **Important**
    
    Log writing may have a data latency of approximately 1 minute. Wait for the data to become available.
    
2.  **Check data**
    
    Verify at least the following information for the queried data:
    
    -   **Real-time data**: Confirm that the timestamp of the latest log is close to the current time.
        
    -   **Completeness**: Sample and compare the logs in Log Management and Log Analysis. Confirm that all fields are present and that no data is missing.
        
    -   **Data volume**: Observe the log volume per unit of time. It should be roughly the same as the incremental volume in the Log Analysis service.
        

### **Step 3: Stop data writing for Log Analysis**

**Warning**

Perform this step only after you complete Step 2 and confirm that the Log Management service is working as expected.

1.  On the **Log Analysis** service page, find the corresponding log delivery switch and set it to off.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6126543671/p1026200.png)
    
2.  After you turn off the switch, incremental logs are no longer written to the Log Analysis service. They are written only to the Log Management service.
    

### **Step 4: Process historical data**

For historical data that is still in the Log Analysis service and has not exceeded the 180-day retention period, you can process it using one of the following methods:

-   **Method 1: Export historical data to OSS for archiving**
    
    This method is suitable for scenarios where you need long-term retention of historical data to meet compliance audit or future retrospective analysis requirements.
    
    -   **Instructions**:
        
        1.  On the **Log Analysis** page, click **Advanced Management of Simple Log Service** to go to the Simple Log Service (SLS) console.
            
        2.  On the sas-log Logstore details page, in the navigation pane on the left, click **Data Processing** > ****Export**** > ****Object Storage Service****.
            
        3.  Click **+** to create an OSS data shipping job. For more information about how to configure the job, see [Create an OSS data shipping job (New)](/help/en/sls/create-oss-shipping-tasks-new-version).
            
        4.  After the historical data is saved, on the **Log Analysis** page, click **Clear**.
            
            **Warning**
            
            This operation is irreversible. Make sure that data is being written to Log Management as expected and that all historical data is saved.
            
    -   **Note**: The data can be stored permanently. You can use tools such as MaxCompute and Data Lake Analytics to analyze the data when needed.
        
-   **Method 2: Wait for historical data to expire naturally**
    
    This method is simple and suitable for scenarios where you do not need to archive historical data for a long time.
    
    -   **Instructions**: No operation is required. After you complete the incremental data migration, keep the Log Analysis service enabled. Wait for the stored log data to reach the end of its 180-day lifecycle, after which the system automatically deletes it.
        
    -   **Note**: During this period, you must continue to pay storage fees for the data stored in the Log Analysis service until the data is completely cleared.
        

### **Step 5: Unsubscribe from the Log Analysis service**

After you process the historical data and clear the storage, you can unsubscribe from the Log Analysis service and stop billing. For more information, see [Downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).

## FAQ

-   **Why can't I see any logs on the query page after I enable the Log Management service?**
    
    You can troubleshoot the issue as follows:
    
    1.  **Check the delivery switch**: In **Log Settings**, confirm that the delivery switch for the required log type is enabled.
        
    2.  **Wait for data latency**: There is a data latency of approximately 1 minute before written logs are available for queries. Wait for a moment and then refresh the page.
        
    3.  **Check authorization**: Make sure that you have granted the required permissions to the relevant Alibaba Cloud services when you enabled the service.
        
-   **Why are there differences between the logs queried from the old and new services for the same time period?**
    
    Slight differences in quantity (usually within 1%) are normal and may be caused by the following:
    
    -   **Query time window**: There may be a millisecond-level difference between the exact start and end times of the two queries.
        
    -   **Data latency**: The data writing latency differs between the old and new services. This can cause slight differences in the logs at the boundaries of the query time window.
