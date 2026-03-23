After the number of connections to an ApsaraDB for MongoDB instance reaches the upper limit, new connection requests cannot be responded. This topic describes how to troubleshoot failed database connections after the number of connections reaches the upper limit.

## Symptoms

The maximum number of connections to an ApsaraDB for MongoDB instance varies based on the instance type. For more information, see [Overview](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb). The following issues may occur when the number of connections to an ApsaraDB for MongoDB instance reaches the upper limit:

-   Your application fails to connect to databases in the instance.
    
-   A whitelist has been properly configured for the instance. However, the following error message is returned when you use the mongo shell to connect to the databases in the instance:
    
    ```
    2019-07-10T10:30:43.597+0800 E QUERY    [js] Error: network error while attempting to run command 'isMaster' on host 'dds-bpxxxxxxxx.mongodb.rds.aliyuncs.com:3717'  :
    connect@src/mongo/shell/mongo.js:328:13
    @(connect):1:6
    exception: connect failed
    ```
    
-   A whitelist has been properly configured for the instance. However, the following error message is returned when you use Data Management (DMS) to connect to the databases in the instance.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0157297751/p51168.png)
    

## Check whether the number of connections has reached the upper limit

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance that you want to manage and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, click **Monitoring Data**.
    
3.  On the **Monitoring Data** tab of the page that appears, view the **Connection Utilization(%)** metric.
    
    **Note**
    
    If the instance is a sharded cluster instance, you must select the mongos node in use in the upper-right corner on the Basic Monitoring tab.
    
    For more information about the maximum number of connections of different instance types, see [Instance types](/help/en/mongodb/instance-types).
    

## Solutions

You can restart an instance or a node to temporarily release all connections to the instance. For more information, see [Restart an ApsaraDB for MongoDB instance or a node](/help/en/mongodb/user-guide/restart-an-apsaradb-for-mongodb-instance#concept-yzz-dgl-j2b). To prevent this issue from reoccurring, we recommend that you use one of the following methods after you restart the instance.

**Note**

If you restart the instance, all instance nodes are restarted one by one. Each node has a transient disconnection of about 30 seconds. If the instance has more than 10,000 nodes, the transient disconnections last longer. Before you restart the instance, arrange your business and ensure that your application can automatically reconnect to the instance.

-   Properly configure a connection pool. For more information, see [Limit the number of connections](/help/en/mongodb/how-do-i-query-and-limit-the-number-of-connections#section-rzd-wyd-lfb).
    
-   Query the source IP addresses of the current connections. If your workloads exhaust all connections, you must upgrade the instance. For more information, see [Query the source IP addresses of the current connections](/help/en/mongodb/how-do-i-query-and-limit-the-number-of-connections#section-iqk-ryd-lfb) and [Overview](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302).
