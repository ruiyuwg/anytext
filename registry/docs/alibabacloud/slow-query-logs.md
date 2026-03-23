ApsaraDB for MongoDB lets you view the slow query logs of an instance. You can use these logs to find, analyze, and diagnose slow queries. This helps you optimize index building and improve resource utilization.

## Prerequisites

The instance must be a replica set instance or a sharded cluster instance.

## Notes

The maximum length of a slow query log is 32 KB. Content that exceeds this limit is truncated.

## Procedure

1.  Go to the [ApsaraDB for MongoDB Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page or the [ApsaraDB for MongoDB Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. At the top of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left, click **CloudDBA** > **Slow Query Log Analysis**.
    
3.  Specify a time range and view the **Slow Query Log Trends**, **Event Distribution**, **Slow Query Log Statistics,** and **Slow Query Log Details** within the specified time range.
    
    **Note**
    
    When you specify the time range, the end time must be later than the start time, and the interval between the start time and the end time cannot exceed 24 hours. You can query slow query logs within the previous month.
    
    -   In the **Slow Query Log Trends** section, you can click a point in time in the trend chart and view the statistics and details of the slow query logs at the point in time.
        
        **Note**
        
        If the content of an SQL statement is not completely displayed due to the length limits of the GUI, you can move the pointer over the SQL statement to view the complete content.
        
    -   If an ApsaraDB for MongoDB sharded cluster instance is used, select the desired node from the **Node ID** drop-down list to view the number of slow queries on the node.
        
    -   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5338825471/p944481.png) icon to download slow query logs to your computer.
        
    -   Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2164500571/p968949.png) to populate the selected and entered parameters to the OpenAPI console for API debugging.
        
    -   In the **Event Distribution** section, perform the following operation:
        
        You can query slow query log events within the specified time range. Click an event to view its details.
        
    -   On the **Slow Query Log Statistics** tab, find the SQL template that you want to manage and click **Details** in the **Actions** column. In the **Slow Log Sample** dialog box, view the slow query log sample of the SQL template.
        
    

## References

-   For more information, see [Troubleshoot high CPU utilization in ApsaraDB for MongoDB](/help/en/mongodb/use-cases/troubleshoot-the-high-cpu-utilization-of-apsaradb-for-mongodb#concept-62224-zh).
