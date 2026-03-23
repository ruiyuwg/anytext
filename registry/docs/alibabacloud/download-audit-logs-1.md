This topic describes how to download audit logs of an ApsaraDB for MongoDB instance to your computer. You can archive, filter, and analyze the downloaded audit logs.

## Prerequisites

The audit log feature is enabled. For more information, see [Enable the audit log feature](/help/en/mongodb/user-guide/enable-the-audit-log-feature#task-2488775).

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/cn-hangzhou/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/cn-hangzhou/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, choose **Data Security** > **Audit Logs**.
    
3.  In the chart section, download audit logs based on your business requirements.
    
    -   Download audit logs from a specified chart.
        
        Click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the upper-right corner of the chart that you want to view, and select **Download Chart Data** or **Download Chart**.
        
        **Note**
        
        You can filter the log entries of a chart by using the following methods and download only the log entries that you require.
        
        -   Filter log entries based on conditions such as keyword, operation type, and client IP address. For more information, see [View audit logs](/help/en/mongodb/user-guide/view-audit-logs-1#task-2491602).
            
        -   Filter log entries based on the time when they were generated. Click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the upper-right corner of the chart that you want to view and select **Select Time Range** to specify a time range.
            
        
        -   After you click **Download Chart Data**, the log entries that meet the specified conditions are downloaded in the web browser and saved as a .csv file to your computer. You can view the file by using tools such as Excel.
            
        -   After you click **Download Chart**, the log entries that meet the specified conditions are downloaded in the web browser and saved as a .png file to your computer. You can view the file by using tools such as Microsoft Paint.
            
        
    -   Download all audit logs.
        
        -   The total number of audit log entries that you want to download does not exceed 2,000.
            
            Click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the upper-right corner of the **Audit Log Details** section and select **Download Chart Data**.
            
            **Note**
            
            You can click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the upper-right corner of the **Audit Log Details** section and select **Select Time Range** to specify a time range. Then, you can download audit logs that meet your requirements.
            
            After you click **Download Chart Data**, the log entries that meet the specified conditions are downloaded in the web browser and saved as a .csv file to your computer. You can view the file by using tools such as Excel.
            
        -   The total number of audit log entries that you want to download exceeds 2,000.
            
            Download all audit logs in the Log Service console. For more information, see [Download logs](/help/en/sls/download-logs#task-qf4-cf4-fhb).
            
            **Important**
            
            To download all audit logs, take note of the following items:
            
            -   You must specify the `mongodb_audit_log_standard` Logstore and specify the project name in the following format: `nosql-{ID of your Alibaba Cloud account}-{Region}`. Example: `nosql-17649847257****-cn-hangzhou`.
                
            -   You must select Download All Logs with Cloud Shell or Download All Logs Using Command Line Tool. If you select Download Log in Current Page, you can download only the audit logs that are displayed on the current page.
