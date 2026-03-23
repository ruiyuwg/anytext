CPU utilization is a key metric to monitor an ApsaraDB for MongoDB instance. If the CPU utilization of the instance is excessively high, the instance may respond slowly and even fail to provide services. This topic describes how to view the CPU utilization of an ApsaraDB for MongoDB instance and troubleshoot high CPU utilization issues on the instance.

## Access method

**View CPU utilization in monitoring charts**: On the **Monitoring Data** page of an ApsaraDB for MongoDB instance in the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/), you can view the CPU utilization of the instance in monitoring charts. For more information about the monitoring interval and procedure, see [Basic monitoring](/help/en/mongodb/user-guide/basic-monitoring).

ApsaraDB for MongoDB provides a variety of node combinations for instance architectures. You can select a node to view its CPU utilization.

-   Replica set instances A replica set instance consists of a primary node, one or more secondary nodes, a hidden node, and one or more optional read-only nodes.
    
-   Sharded cluster instances A sharded cluster instance consists of one or more shard components, a ConfigServer component, and one or more mongos components. The CPU consumption of a shard component is the same as that of a replica set instance. The ConfigServer component is immune to most CPU bottlenecks because it only stores configuration metadata. The CPU utilization of a mongos component depends on aggregation result sets and the number of concurrent requests.
    

**Note**

CPU utilization also depends on instance specifications. For example, if an instance is equipped with 8 CPU cores and 16 GB of memory and has a CPU utilization of 100%, 8 CPU cores are exhausted. In this example, the CPU utilization is displayed as 100% instead of 800%.

## Common causes

### **Excessive documents scanned**

ApsaraDB for MongoDB supports multi-threading. If a single query needs to scan large numbers of documents, the thread that executes the query occupies CPU resources for a longer period of time. If the pending requests or the queries that need to scan large numbers of documents are in high concurrency, high CPU utilization occurs on the instance on which the queries are executed. The CPU utilization of an instance is positively related to the total number of scanned documents in the instance. Queries that often need to scan large numbers of documents are common in the following scenarios:

-   **Full collection scan**
    
    If you find the `COLLSCAN` keyword in slow query logs or a collection named system.profile, a full collection scan is executed in a query. The system automatically creates the collection only if you enable the database profiling. For more information about how to view slow query logs and configure the database profiling, see [Slow query logs](#e63a2dd183yhu).
    
    For more information about how to query execution plans, see [Explain Results](https://www.mongodb.com/docs/manual/reference/explain-results/) and [Cursor Methods](https://www.mongodb.com/docs/manual/reference/method/js-cursor/).
    
-   **Unreasonable index design and usage**
    
    If the value of the `docsExamined` keyword is greater than 1,000 in a query and the query is frequently executed, you must focus on the query. The keyword indicates the number of documents scanned in a query. In addition to the full collection scan, the following scenarios lead to a large value for the `docsExamined` keyword:
    
    -   When multiple filter conditions are used, a compound index is not used or the prefix matching principle is not satisfied.
        
    -   The query is complex or involves large numbers of aggregate operations, which can result in invalid parsing policies or indexes that cannot be optimized.
        
    -   The data selectivity of a data field is unbalanced with the selection frequency.
        

### **Excessive concurrency**

If large numbers of service requests are sent and the concurrency is excessively high, the CPU utilization is high. To solve this high CPU utilization issue, you can add CPU cores if you confirm that no query issues occur.

### Other causes

-   **Large numbers of short-lived connections are established.** In versions later than MongoDB 3.X, the default identity authentication mechanism is SCRAM-SHA1 that requires CPU-intensive operations such as hash calculation. If short-lived connections are in high concurrency, hash calculation consumes multifold CPU resources and even exhausts CPU resources. In this case, operational logs contain large numbers of saslStart error messages. To optimize PHP short-lived connections in high concurrency scenarios, ApsaraDB for MongoDB optimizes the method to rewrite built-in random functions at the kernel layer. This helps reduce the CPU utilization on an instance.
    
-   **Time-to-live (TTL) indexes cause the higher CPU utilization of a secondary node than the primary node.** In this case, we recommend that you ignore the high CPU utilization of the node.
    
    MongoDB 3.2 and later support multi-threaded replication. The rollback concurrency of oplogs is determined by the replWriterThreadCount parameter. The default value of this parameter is 16. Secondary nodes do not handle business-critical write workloads. However, the CPU utilization of a secondary node may be higher than that of the primary node. For example, if you use TTL to delete data in a collection when the data expires, the system can efficiently delete large amounts of data at a time based on the indexes on the time column. The system transforms the delete operation into multiple delete operations and then sends the operations to a secondary node. On the secondary node, the rollback of oplogs is less efficient. The multi-threaded rollback of oplogs may increase CPU utilization of the node.
    

## Troubleshooting

### **View and terminate active sessions**

The surging sessions of an instance in the Running state may consume 100% of CPU resources. In this case, high CPU utilization may be caused by the changes in business traffic. Other possible causes include scans involving large numbers of documents, data sorting and aggregation, and surges in business traffic. You can use one of the following methods to troubleshoot the high CPU utilization:

-   In the [ApsaraDB for MongoDB](https://mongodb.console.alibabacloud.com/) console, click the ID of the instance that you want to manage. In the left-side navigation pane, choose **CloudDBA** > **Sessions**. On the page that appears, view current active sessions, analyze the query operations that are not completed within the expected execution period, and then terminate active sessions that are abnormal. You can also use additional methods to solve the high CPU utilization issue.
    
-   To view and analyze the details of active sessions, run the db.currentOp() command provided by MongoDB. If necessary, run the db.killOp() command to actively terminate slow queries that are not completed within the expected execution period. For more information, see [db.currentOp()](https://docs.mongodb.com/manual/reference/method/db.currentOp/) and [db.killOp()](https://docs.mongodb.com/manual/reference/method/db.killOp/).
    

### **Record and view logs**

If the CPU utilization abnormally increases, you can use audit logs or slow query logs to analyze abnormal requests. View keywords such as `COLLSCAN` and `docsExamined` to check whether the number of scanned documents is excessively large.

-   **Audit logs**
    
    Go to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/) and then choose **Data Security** > **Audit Logs** to enable the audit log feature. For more information about how to enable and use the feature, see [Enable the audit log feature](/help/en/sls/enable-the-log-audit-feature#task-1936227).
    
-   **Slow query logs**
    
    **Important**
    
    -   The retention period of slow query logs is seven days.
        
    -   If your instance was purchased after June 6, 2021 and you want to view the slow query logs of the instance, you must enable the audit log feature and select the **admin** and **slow** operation types that you want to audit. You can view only slow query logs that are generated after the audit log feature is enabled.
        
    
    1.  Go to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/) and then choose **Parameters** > **Parameter List**. You can configure the operationProfiling.mode and the operationProfiling.slowOpThresholdMs parameters on the Parameter List tab. The operationProfiling.mode parameter specifies the profiling level. The operationProfiling.slowOpThresholdMs parameter specifies the threshold of slow queries.
        
        ApsaraDB for MongoDB allows you to use the following profiling levels:
        
        -   Profiling is disabled and no data is collected.
            
        -   Profiling is enabled for all requests. The execution data of all requests is recorded in the system.profile collection.
            
        -   Profiling is enabled for slow queries. Queries that take longer than the specified threshold are recorded in the system.profile collection.
            
        
        For more information about the profiling parameters, see [Database Profiler](https://docs.mongodb.com/manual/tutorial/manage-the-database-profiler/).
        
    2.  Choose **Logs** > **Slow Query Logs** to view slow query logs.
        

## Optimization policies

### **Optimize indexes**

Index optimization is the best solution to reduce the number of documents that a single query needs to scan. In the underlying architecture, ApsaraDB for MongoDB uses an index design similar to MySQL and provides richer categories and features than MySQL. Therefore, most index optimization policies that apply to MySQL also apply to ApsaraDB for MongoDB.

For more information about how to create and use indexes, see [Best practices for creating indexes in ApsaraDB for MongoDB](/help/en/mongodb/use-cases/best-practices-of-creating-indexes-in-apsaradb-for-mongodb) or the following official documents:

-   For more information about compound indexes, see [Compound Indexes](https://www.mongodb.com/docs/v7.0/core/indexes/index-types/index-compound/).
    
-   For more information about how to use indexes to sort query results, see [Use Indexes to Sort Query Results](https://www.mongodb.com/docs/manual/tutorial/sort-results-with-indexes/).
    
-   For more information about hints, see [Cursor Methods](https://www.mongodb.com/docs/manual/reference/method/js-cursor/) and [cursor.hint()](https://www.mongodb.com/docs/manual/reference/method/cursor.hint/).
    
-   For more information about how to balance the data selectivity of a data field with the selection frequency, see [Create Queries that Ensure Selectivity](https://www.mongodb.com/docs/manual/tutorial/create-queries-that-ensure-selectivity/).
    

### **Add CPU cores**

If you confirm that no query issues occur, the high CPU utilization is caused by the high number of service requests and the high concurrency. You can add CPU cores to solve the high CPU utilization issue. In most case, you can use one of the following methods to add CPU cores:

-   Scale up a single instance for more read and write workloads.
    
-   Configure read/write splitting for a replica set instance or add read-only nodes to the instance.
    
-   Upgrade the problematic instance to a sharded cluster instance for linear scale-out.
    
-   If the CPU resources of the mongos node are exhausted, you must add mongos nodes and configure load balancing for the nodes. For more information, see the [Balancer](/help/en/mongodb/use-cases/introduction-to-apsaradb-for-mongodb-sharded-cluster-instances#section-xqc-44b-ky2) section of the "Introduction to ApsaraDB for MongoDB sharded cluster instances" topic.
    

For more information about how to change the configurations of an ApsaraDB for MongoDB instance, see [Change the configurations of a standalone instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-standalone-instance#task-1580779), [Change the configurations of a replica set instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-replica-set-instance#task-pwm-cfm-qfb), and [Change the configurations of a sharded cluster instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-sharded-cluster-instance/#task-1580394).

### **Scope the collection quantity and execution frequency**

We recommend that you add indexes to optimize full collection scans. If this method does not work well, we recommend that you scope the data volume of collections and the execution frequency of full collection scans on the business side.

### Minimize the number of short-lived connections

We recommend that you use persistent connections.
