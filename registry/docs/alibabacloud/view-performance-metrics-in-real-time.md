CloudDBA allows you to view the performance metrics of a Tair (Redis OSS-compatible) instance in real time. The performance metrics include memory usage, queries per second (QPS), network traffic, server information, key information, and connection information.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, choose **CloudDBA** > **Real-time Performance**.
    
3.  You can view the **Global Real-time Node Performance** and **Real-time Performance** tabs.
    
    -   **Global Real-time Node Performance**
        
        This tab displays metrics such as the memory usage, QPS, network traffic, and keys of each node in the instance in real time.
        
        **Note**
        
        Only read/write splitting instances and cluster instances support this feature.
        
    -   **Real-time Performance**
        
        **Note**
        
        -   For a read/write splitting instance or cluster instance, you can select a specific node that you want to view.
            
        -   To allow you to view performance changes in real time, the system refreshes the metrics every 5 seconds. The available refreshes are displayed in the upper-right corner. To stop refreshing the performance metrics, you can click **Pause**.
            
        
        In the upper part of the page, the performance metrics of the instance are displayed in real time, including the server information, key information, memory information, and connection information.
        
        ![redis-clouddba-实时趋势1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4343217171/p144321.png)
        
        The **Real-time Charts** and **Real-time Tables** tabs display the detailed performance metrics.
        
        **Tab**
        
        **Description**
        
        **Real-time Charts**
        
        Displays the real-time performance metrics of the instance in curve charts, such as the key information, key hit information, key hit ratio, memory information, QPS, and network traffic.
        
        ![redis-clouddba-实时趋势-实时图表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5619996161/p148083.png)
        
        **Real-time Tables**
        
        Displays the performance metrics of the instance in a table, such as the key hit information, key hit ratio, QPS, memory information, CPU utilization, network traffic, client information, and connection information. The table can display up to 999 records. A new record is added to the table every 5 seconds.
        
        ![redis-clouddba-实时趋势-实时表格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5619996161/p146878.png)
