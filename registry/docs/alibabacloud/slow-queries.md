Slow requests decrease the stability of Tair (Redis OSS-compatible) instances. You can monitor and analyze slow requests by viewing the details of slow query logs in CloudDBA.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the left-side navigation pane, click **CloudDBA** > **Slow Queries** to go to the slow query analysis page.
    
3.  On the **Slow Logs** page, specify a time range and view the trends, event distribution, and details of the slow query logs within the specified time range.
    
    **Note**
    
    When you specify the time range, the end time must be later than the start time, and the interval between the start time and the end time cannot exceed 24 hours. You can query slow query logs within the previous month.
    
    -   In the **Slow Log Trend** section, you can select a point in time in the trend chart and view the details of slow query logs at the point in time.
        
        **Note**
        
        For cluster instances and read/write splitting instances, the following information is displayed: the details of the slow query logs for **data nodes** and **proxy nodes**, and the **number of slow queries** on each node.
        
    -   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5338825471/p944481.png) icon to download slow query logs to your computer.
        
    -   Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2164500571/p968949.png) to populate the selected and entered parameters to the OpenAPI console for API debugging.
        
    -   In the **Event Distribution** section, perform the following operation:
        
        You can query slow query log events within the specified time range. Click an event to view its details.
        
    -   By default, the **Slow Log Details** section displays the following information of all slow query logs: **Execution End Time**, **Database Name**, **Slow Query Statement**, **Execution Duration (ms)**, and **Host Address**. You can click **Set** to filter the information.
        
        **Note**
        
        By default, the **Host Address** column displays the IP address of the proxy node for cluster instances and read/write splitting instances. To obtain the IP address of a specific client, perform the following operations:
        
        -   Tair (Enterprise Edition) performance-enhanced instances that use local disks: On the **Parameter Settings** tab of the instance details page, set the ptod\_enabled parameter to `1`. For more information, see [Configure parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).
            
        -   Redis Open-Source Edition instances: Enable the audit log feature and view the client IP address in specific events of the audit logs for the proxy node. For more information, see [Audit logs](/help/en/redis/user-guide/enable-the-new-audit-log-feature/#concept-ddc-ydr-3gb).
