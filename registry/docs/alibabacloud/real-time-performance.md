This topic describes how to view the real-time monitoring statistics of an ApsaraDB for MongoDB instance, such as read/write latency, queries per second (QPS), operations, connections, and network traffic.

## Prerequisites

The instance is a replica set instance or a sharded cluster instance that uses the MongoDB protocol.

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, choose **CloudDBA** > **Real-time Performance**.
    
3.  On the page that appears, view the real-time running trends of performance metrics and the mongostat command outputs.
    
    **Note**
    
    When you refresh or access the **Real-time Performance** page again, the real-time charts and the mongostat command outputs are recorded again, and the **Available Refreshes** in the upper-right corner is reset.
    
    -   **Real-time Charts**
        
        On the Real-time Charts tab, line charts are refreshed every 5 seconds to provide up-to-date performance trends.
        
        **Note**
        
        You can move the pointer over ![2023-05-11_18-24-58..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001083861/p670236.png) to view the detailed information of performance metrics.
        
    -   **Mongostat**
        
        On the Mongostat tab, you can view mongostat command outputs. A new line of real-time performance data is added every 5 seconds. The tab can display up to 999 lines of data. ApsaraDB for MongoDB uses mongostat v0.1. For more information about mongostat command outputs, see the [Fields](https://www.mongodb.com/docs/database-tools/mongostat/#fields) section in the mongostat topic.
