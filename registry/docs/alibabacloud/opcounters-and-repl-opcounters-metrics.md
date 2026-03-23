ApsaraDB for MongoDB provides the Opcounters and Repl Opcounters metrics. This topic describes the metrics and provides answers to some FAQs.

For more information about the instance architectures supported by the Opcounters and Repl Opcounters metrics, see [Monitoring items and metrics](/help/en/mongodb/user-guide/metrics).

## **Opcounters**

The Opcounters metric is displayed in the monitoring data and performance modules of the ApsaraDB for MongoDB console, as shown in the following figures.

-   **QPS** metric in the Monitoring Data module. For more information, see [Monitoring information](/help/en/mongodb/user-guide/monitoring-information/).![QPS-zh.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5232296371/p885716.png)
    
-   **Opcounters** metric for the Performance module. For more information, see [Performance trends](/help/en/mongodb/user-guide/performance-trends).![性能趋势-Opcounters.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5232296371/p885705.png)
    

The Opcounters metric tracks insert, query, update, delete, getMore, and command operations. This metric also counts the number of these database operations performed on a mongod or mongos since the last startup.

**Tracked item**

**Unit**

**Description**

insert

Count/second

The number of insert operations per second in ApsaraDB for MongoDB.

query

Count/second

The number of query operations per second in ApsaraDB for MongoDB.

update

Count/second

The number of update operations per second in ApsaraDB for MongoDB.

delete

Count/second

The number of delete operations per second in ApsaraDB for MongoDB.

getmore

Count/second

The number of getMore operations per second in ApsaraDB for MongoDB.

command

Count/second

The number of command operations per second in ApsaraDB for MongoDB.

In addition to operations initiated by a client, the Opcounters metric also records internal operations performed on your databases.

**Tracked item**

**Description**

insert

-   During chunk migration, the primary node that serves as the destination shard in an instance records these insertion operations.
    
-   The nodes of a replica set instance persist sessions in memory to a collection named `config.system.sessions` every 5 minutes. In this case, insert operations occur. If you want to change the session persistence interval, you can adjust the [logicalSessionRefreshMillis](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.logicalSessionRefreshMillis) parameter.
    

query

-   If you enable the image reading feature for an instance, the system synchronizes query operations to the secondary nodes of the instance. By default, the feature is automatically enabled for instances that run versions later than MongoDB 4.4. For more information about the feature, see [Mirrored Reads](https://www.mongodb.com/docs/manual/replication/#mirrored-reads).
    
-   If you set the changeStream parameter to `fullDocument: "updateLookup"` for ApsaraDB for MongoDB, additional query operations occur.
    

update

Similar to `insert` operations, `update` operations are recorded when sessions in memory are refreshed.

delete

-   Delete operations caused by TTL indexes **are not recorded**.
    
-   After a chunk is migrated, delete operations performed on orphaned documents **are not recorded.**
    

getmore

During primary/secondary synchronization, getMore operations that databases perform on a collection named `local.oplog.rs` are recorded.

command

-   All commands except write commands such as `insert`, `update`, and `delete`, and the `query` and `getmore` commands are recorded.
    
-   The `isMaster` and `hello` commands used for internal detection are recorded.
    
-   Commands used for primary/secondary synchronization, such as `replSetUpdatePosition`, are recorded.
    
-   Commands used for monitoring, such as `serverStatus`, `listCollections`, `collStats`, and `replSetGetStatus`, are recorded.
    

For more information about other commands, see [Command](https://www.mongodb.com/docs/manual/reference/command/).

## **Repl Opcounters**

The monitoring data module of ApsaraDB for MongoDB provides the items tracked by the Repl Opcounters metric. In most cases, you need only to focus on the metric value of a secondary node in your instance. For more information about the module, see [Monitoring information](/help/en/mongodb/user-guide/monitoring-information/).

![Repl Opcounters-cn.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5232296371/p885711.png)

You can also view the Opcounters metric for the secondary node. The metric mainly tracks the following operations:

-   Client query operations that are performed on secondary nodes. You can configure readPreference to specify the node role on which query operations are performed.
    
-   All write operations that are performed on a database named local. The operations are implemented by the primary/secondary synchronization.
    

Similar to the Opcounters metric, the Repl Opcounters metric also tracks insert, query, update, delete, getMore, and command operations. The Repl Opcounters metric shows database replication operations aggregated by different types since mongod was last started.

**Tracked item**

**Unit**

**Description**

insert

Count/second

The number of insert operations per second in ApsaraDB for MongoDB.

query

Count/second

The number of query operations per second in ApsaraDB for MongoDB.

update

Count/second

The number of update operations per second in ApsaraDB for MongoDB.

delete

Count/second

The number of delete operations per second in ApsaraDB for MongoDB.

getmore

Count/second

The number of getMore operations per second in ApsaraDB for MongoDB.

command

Count/second

The number of command operations per second in ApsaraDB for MongoDB.

The Repl Opcounters metric counts all write operations performed on a secondary node. In addition to the operations described in the [Opcounters](#c6808682daaj4) section, the metric also tracks the following operations:

-   The insert and update operations triggered by refreshing sessions.
    
-   The delete operations caused by TTL indexes.
    
-   Delete actions triggered by the deletion of orphaned documents. In most cases, a latency occurs after chunk migration.
    
-   Related operations to write data into a system collection. For example, retryable writes allow MongoDB drivers to automatically retry certain write operations on a collection named `config.transactions`. For more information about retryable writes, see [Retryable Writes](https://www.mongodb.com/docs/manual/core/retryable-writes/).
    

ApsaraDB for MongoDB serializes data in different ways during primary/secondary replication. Therefore, the value of the Repl Opcounters metric for a secondary node in an instance is different from that for the primary node in the instance.

## **FAQ**

### **Why is the value of the Repl Opcounters metric for a secondary node in an instance much greater than the value of the Opcounters metric for the primary node in the instance?**

Operations that affect multiple documents, such as batch inserts, multiple updates, or multiple deletes, are interpreted as a single operation. When operations that affect multiple documents are replicated to a secondary node in an instance, the value of the Repl Opcounters metric for a secondary node in an instance may be greater than the value of the Opcounters metric for the primary node in the instance because primary/secondary replication is executed on a document.

Example:

1.  View the Opcounters metric before the update.
    
    -   The value of the Opcounters metric for the primary node in an instance is displayed as 13.
        
        ```
        > db.serverStatus().opcounters.update
        NumberLong(13)
        ```
        
    -   The value of the Repl Opcounters metric on a secondary node in an instance is displayed as 11.
        
        ```
        > db.serverStatus().opcountersRepl.update
        NumberLong(11)
        ```
        
2.  Execute a batch update on the primary node in the instance. The returned `modifiedCount` field indicates that four documents are modified in the batch update.
    
    ```
    > db.coll.updateMany({x:2},{$set:{x:3}})
    { "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
    ```
    
3.  View the Opcounters metric again after the update.
    
    -   The value of the Opcounters metric for the primary node is displayed as 14.
        
        ```
        > db.serverStatus().opcounters.update
        NumberLong(14)
        ```
        
    -   The value of the Repl Opcounters metric for the secondary node in an instance is displayed as 15.
        
        ```
        > db.serverStatus().opcountersRepl.update
        NumberLong(15)
        ```
        

### **Why does the Repl Opcounters metric of a secondary node show many insert operations when I perform only update operations?**

This issue may occur when you specify the `{upsert:true}` option for update operations. If the documents on which you want to perform `update` operations do not exist, `insert` operations are performed instead. If `insert` operations are recorded in the oplog collection of an instance, `insert` operations are synchronized to the secondary nodes of the instance by using primary/secondary replication. Therefore, `insert` operations are recorded in the Repl Opcounters metric.

Example:

1.  View the Opcounters metric before the update.
    
    -   In the Opcounters metric of the primary node in an instance, the number of update operations is displayed as 33, and the number of insert operations is displayed as 1516.
        
        ```
        > db.serverStatus().opcounters
        {
          "insert" : NumberLong(1516),
          "query" : NumberLong(70),
          "update" : NumberLong(33),
          "delete" : NumberLong(1043),
          "getmore" : NumberLong(2662),
          "command" : NumberLong(4000)
        }
        ```
        
    -   In the Repl Opcounters metric of a secondary node in the instance, the number of update operations is displayed as 24, and the number of insert operations is displayed as 1539.
        
        ```
        > db.serverStatus().opcountersRepl
        {
          "insert" : NumberLong(1539),
          "query" : NumberLong(0),
          "update" : NumberLong(24),
          "delete" : NumberLong(6),
          "getmore" : NumberLong(0),
          "command" : NumberLong(26)
        }
        ```
        
2.  Perform update operations with the `{upsert:true}` option enabled on the primary node. The returned `upsertedId` field indicates that a document is inserted.
    
    ```
    > db.coll.updateOne({x:"a"}, {$set:{x:"b"}}, {upsert:true})
    {
      "acknowledged" : true,
      "matchedCount" : 0,
      "modifiedCount" : 0,
      "upsertedId" : ObjectId("64bf72b829907f52b4b363ea")
    }
    ```
    
3.  View the Opcounters metric again after the update.
    
    -   In the Opcounters metric of the primary node, the number of update operations is displayed as 34, and the number of insert operations is still displayed as 1516.
        
        ```
        > db.serverStatus().opcounters
        {
          "insert" : NumberLong(1516),
          "query" : NumberLong(70),
          "update" : NumberLong(34), // Note the change of the metric value here.
          "delete" : NumberLong(1043),
          "getmore" : NumberLong(2706),
          "command" : NumberLong(4286)
        }
        ```
        
    -   In the Repl Opcounters metric of a secondary node, the number of update operations is still displayed as 24, and the number of Insert operations is displayed as 1540.
        
        ```
        > db.serverStatus().opcountersRepl
        {
          "insert" : NumberLong(1540), // Note the change of the metric value here.
          "query" : NumberLong(0),
          "update" : NumberLong(24),
          "delete" : NumberLong(6),
          "getmore" : NumberLong(0),
          "command" : NumberLong(26)
        }
        ```
        

### Why is the number of update operations on the primary node of an instance much greater the number of update operations replicated to the secondary nodes of the instance?

This issue may occur when your business logic contains duplicate `update` operations. The duplicate `update` operations are not replicated to secondary nodes because no actual changes occur. Therefore, the number of `update` operations replicated to the secondary nodes is smaller.

Example:

1.  View the Opcounters metric before the update.
    
    -   In the Opcounters metric of the primary node in an instance, the number of updates operations is displayed as 34.
        
        ```
        > db.serverStatus().opcounters
        {
          "insert" : NumberLong(1516),
          "query" : NumberLong(70),
          "update" : NumberLong(34),
          "delete" : NumberLong(1043),
          "getmore" : NumberLong(2760),
          "command" : NumberLong(4609)
        }
        ```
        
    -   In the Repl Opcounters metric of a secondary node in the instance, the number of updates operations is displayed as 24.
        
        ```
        > db.serverStatus().opcountersRepl
        {
          "insert" : NumberLong(1540),
          "query" : NumberLong(0),
          "update" : NumberLong(24),
          "delete" : NumberLong(6),
          "getmore" : NumberLong(0),
          "command" : NumberLong(26)
        }
        ```
        
2.  Perform update operations on the primary node. The returned result shows that no actual changes occur.
    
    ```
    > db.coll.updateMany({x:"ab"},{$set:{x:"cd"}})
    { "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
    ```
    
3.  View the Opcounters metric again after the update.
    
    -   In the Opcounters metric of the primary node, the number of update operations is displayed as 35.
        
        ```
        > db.serverStatus().opcounters
        {
          "insert" : NumberLong(1516),
          "query" : NumberLong(70),
          "update" : NumberLong(35), // Note the change of the metric value here.
          "delete" : NumberLong(1043),
          "getmore" : NumberLong(2778),
          "command" : NumberLong(4729)
        }
        ```
        
    -   In the Repl Opcounters metric of the secondary node, the number of updates operations is still displayed as 24.
        
        ```
        > db.serverStatus().opcountersRepl
        {
          "insert" : NumberLong(1540),
          "query" : NumberLong(0),
          "update" : NumberLong(24),
          "delete" : NumberLong(6),
          "getmore" : NumberLong(0),
          "command" : NumberLong(26)
        }
        ```
        

### Why do I still view various types of operations tracked by the Opcounters metric when I do not use a database?

If no business access occurs, operations displayed in a monitoring chart include the following types:

-   Basic internal operations performed to maintain the normal operation of ApsaraDB for MongoDB databases, such as replica set heartbeat, primary/secondary synchronization, and session refresh.
    
-   Daily operations performed by the management and control components around ApsaraDB for MongoDB databases, such as detection, monitoring, and listening.
    

### **Why do the items tracked by the Opcounters metric differ from those aggregated by the op field in the oplog collection of an instance?**

In the oplog collection, you can use the `op` field to distinguish specific operation types. Valid values of the field:

```
kCommand: "c"
kInsert: "i"
kUpdate: "u"
kDelete: "d"
kNoop: "n"
```

All operations in a transaction are of the `op:c` type, and all `insert`, `update`, and `delete` operations in the transaction are stored only in `o.applyOps`. If you perform aggregation based on only the `op` fields of the oplog collection, the results obtained in scenarios where transactions exist are inconsistent with those displayed in the Opcounters metric. For more information about the oplog format, see [Parse oplog fields](https://github.com/alibaba/MongoShake/wiki/oplog%E5%90%84%E5%AD%97%E6%AE%B5%E7%9A%84%E8%A7%A3%E6%9E%90).

If you want to count the number of specific operations in a transaction, you can use the mongo shell client to connect to ApsaraDB for MongoDB and then run the following command:

```
use local
db.oplog.rs.aggregate([{$match:{"op":"c","ts":{"$gte": Timestamp(1733849400,0)},"o.applyOps":{$exists:true},"o.applyOps.0.op":"u"}},{$count:"count"}])
```

Parameters:

-   `Timestamp(1733849400,0)`: the lower boundary of the ts timestamp when you want to query oplog entries. You need to replace it with the desired query time. You can read the timestamp from `local.oplog.rs` or use the UNIX timestamp.
    
-   `"o.applyOps. 0.op":"u"`: the first operation type in the transaction oplog. If the first operation type in the transaction oplog is update, you can replace it with another operation type. For example, if the first operation type is insert, you can replace it with `"o.applyOps. 0.op":"i"`.
    
-   `{$count:"count"}`: the number of oplog entries that meet requirements. You can use other operators of the aggregate statement for other analysis.
    

If you want to view transaction-related metrics, you can view the **Transaction operations** metric in the **Monitoring Data** module of the ApsaraDB for MongoDB console. For more information, see [Monitoring items and metrics](/help/en/mongodb/user-guide/metrics).

Example:

1.  View the Opcounters metric before the update.
    
    ```
    > db.serverStatus().opcounters
    {
      "insert" : NumberLong(4), 
      "query" : NumberLong(6723),
      "update" : NumberLong(110489),
      "delete" : NumberLong(3065),
      "getmore" : NumberLong(222670),
      "command" : NumberLong(1917525)
    }
    ```
    
2.  Perform an intra-transaction write operation on the primary node of an instance:
    
    ```
    // Start a session.
    session = db.getMongo().startSession( { readPreference: { mode: "primary" } } );
    coll1 = session.getDatabase("mydb1").foo;
    coll2 = session.getDatabase("mydb2").bar;
    // Start a transaction.
    session.startTransaction( { readConcern: { level: "local" }, writeConcern: { w: "majority" } } );
    // Perform two insert operations in the transaction.
    try {
       coll1.insertOne( { abc: 1 } );
       coll2.insertOne( { xyz: 999 } );
    } catch (error) {
       // Abort the transaction when an error occurs.
       session.abortTransaction();
       throw error;
    }
    // Commit the transaction.
    session.commitTransaction();
    session.endSession();
    ```
    
3.  View the Opcounters metric again after the update. In the Opcounters metric, the number of insert operations changes from 4 to 6.
    
    ```
    > db.serverStatus().opcounters
    {
      "insert" : NumberLong(6), // Note the change of the metric value here.
      "query" : NumberLong(6728),
      "update" : NumberLong(110532),
      "delete" : NumberLong(3067),
      "getmore" : NumberLong(222823),
      "command" : NumberLong(1918887)
    }
    ```
