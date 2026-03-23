CloudDBA provides the performance trends feature that allows you to monitor the basic performance metrics and corresponding performance trends of a Tair (Redis OSS-compatible) instance within a specified period of time. The performance metrics include the CPU utilization, memory usage, queries per second (QPS), total number of connections, response time, network traffic, and key hit ratio.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the left-side navigation pane, choose **CloudDBA** > **Performance Trends**.
    
3.  Use the following methods to view performance trends.
    
    ![redis-clouddba-性能趋势查看方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659045361/p147914.png)
    
    -   **Performance Trends**
        
        On the **Performance Trends** tab, specify a time range, select desired metrics, and then click **Search**.
        
        **Note**
        
        -   You can select a specific node for a read/write splitting or cluster instance.
            
        -   By default, **Correlation** is enabled. If you move the pointer over the CPU chart to view the CPU metric of the instance at 09:00, other charts also display other metrics of the instance at 09:00.
            
        -   Click the ![含义](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0340559361/p367759.png) icon in the upper-left corner of each metric chart to view the definition of the metric. Click **Details** in the upper-right corner of each metric chart to obtain a larger view of the metric chart.
            
        
    -   **Performance Trend Comparison**
        
        To compare the performance trends within two periods of time, click the **Performance Trend Comparison** tab, specify two periods of time, select desired metrics, and then click **Search**.
        
    -   **Custom Charts**
        
        The preceding two methods display the basic performance metrics of an instance. If you want to display only some basic metrics, you can configure custom performance trend charts. For more information, see [Add a custom performance trend chart](/help/en/redis/user-guide/add-a-custom-performance-trend-chart#task-1940534).
