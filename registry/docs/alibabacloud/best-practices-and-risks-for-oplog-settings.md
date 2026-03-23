Improperly configured oplog parameters for an ApsaraDB for MongoDB instance can cause issues with primary-secondary replication and prevent point-in-time restores. This topic describes how to configure oplog parameters and explains the associated risks.

## Overview

ApsaraDB for MongoDB replica set instances use the operations log (oplog) for primary-secondary replication. The oplog table, `local.oplog.rs`, is a special `capped collection` that stores all operations that modify documents in the database. The oplog has the following basic attributes:

-   In a replica set, write operations occur only on the primary node and generate corresponding oplog entries. Secondary nodes then asynchronously replicate and replay these entries to maintain the replication status.
    
-   If an operation does not modify any documents or fails for any reason, it does not generate an oplog record.
    
-   An oplog record is identical across all nodes in a replica set. Replaying an entry does not change the record in the oplog table.
    
-   Every operation in the oplog table is idempotent. This means the result is the same whether an oplog record is replayed once or multiple times.
    
-   Oplog records are time-sensitive. Each operation in the oplog has a unique timestamp (ts) field, which consists of a UNIX timestamp and a counter. This lets you determine the order of any two oplog records.
    
-   The `oplog window` is the time difference between the oldest and newest records in the oplog table. Primary-secondary replication depends on this window. A secondary node can synchronize properly only if it finds the required oplog record within the oplog window of the synchronization source.
    
-   When a secondary node restarts or a new node is added, it relies on oplog records to confirm whether it can successfully join the replica set. If it cannot find the required oplog record in the synchronization source, it enters an abnormal [RECOVERING](https://www.mongodb.com/docs/manual/reference/replica-states/) state and reports a `too stale to catch up` error.
    

### **Oplog size**

In ApsaraDB for MongoDB, the default oplog size is **10%** of the instance's disk space. For example, if your instance has 500 GB of disk space, the oplog size is 50 GB. The oplog size automatically adjusts when you expand the disk space.

You can adjust the oplog size by modifying the `replication.oplogSizeMB` parameter in the console. The change takes effect immediately after you submit it and does not require a restart. For more information about how to modify configuration parameters, see [Set database parameters](/help/en/mongodb/user-guide/configure-database-parameters-for-an-apsaradb-for-mongodb-instance).

You can check the actual size of the oplog table in two ways:

-   You can check the **Disk Usage** metric on the monitoring information page in the console. For more information, see [Node Monitoring (formerly Basic Monitoring)](/help/en/mongodb/user-guide/basic-monitoring).
    
-   Connect to the instance using a client tool, such as mongo shell or mongosh. Then, you can run the following command to view the oplog table size and the oplog window.
    
    ```
    rs.printReplicationInfo()
    ```
    
    The following is an example of the output:
    
    ```
    configured oplog size:   192MB
    log length start to end: 65422secs (18.17hrs)
    oplog first event time:  Mon Jun 23 2014 17:47:18 GMT-0400 (EDT)
    oplog last event time:   Tue Jun 24 2014 11:57:40 GMT-0400 (EDT)
    now:                     Thu Jun 26 2014 14:24:39 GMT-0400 (EDT)
    ```
    
    In the example, the oplog size is about 192 MB, and the oplog window is about 18 hours.
    

### **Minimum oplog retention period**

Starting from MongoDB 4.4, the [storage.oplogMinRetentionHours](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.oplogMinRetentionHours) configuration item is supported. This item lets you directly control the oplog retention period to ensure a sufficient oplog window.

By default, this configuration item is set to 0, which means no minimum oplog retention period is set. In this case, oplog cleanup is controlled by the oplog size. If you set this configuration item, oplog cleanup occurs only when both of the following conditions are met:

-   The oplog exceeds the configured `oplogSizeMB`.
    
-   The oplog timestamp is older than the minimum oplog retention period.
    

If the oplog has not reached the configured `oplogSizeMB`, for example, when an instance is newly initialized and has not had much data written to it, the actual oplog window may exceed the configured minimum retention period. In this case, the oplog table size is limited only by `oplogSizeMB`. After the configured `oplogSizeMB` is reached, the oplog table size is then limited by the minimum retention period. If oplog entries are generated quickly, the total oplog size may become much larger than the configured `oplogSizeMB`.

You can adjust the oplog retention period by modifying the `storage.oplogMinRetentionHours` parameter in the console. The change takes effect immediately after you submit it and does not require a restart. For more information about how to modify configuration parameters, see [Set database parameters](/help/en/mongodb/user-guide/configure-database-parameters-for-an-apsaradb-for-mongodb-instance).

To view the oplog retention period, you can check the **Retention Period of Oplogs** metric on the monitoring page in the console. For more information, see [Node Monitoring (formerly Basic Monitoring)](/help/en/mongodb/user-guide/basic-monitoring).

### **ApsaraDB for MongoDB log backup**

Log backup for all ApsaraDB for MongoDB instances is based on the oplog. A control service process continuously pulls the latest oplog records from the instance and performs a streaming upload to OSS. This process creates a series of log backup files. During a point-in-time restore, these log backup files are used to replay the oplog.

In special cases, **holes** may occur in log backups, which can prevent point-in-time restores. For more information, see [Risks](#5ee7ff5a034wv).

**Note**

The log backup hole mentioned in this topic is not the same as the [oplog hole](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-oplog-hole) term in MongoDB.

## **Best practices**

### Configure oplog size and retention

You can usually keep the default oplog size. However, for workloads in the following scenarios, you should increase the oplog size:

-   **Frequent batch updates to documents**
    
    Each batch update operation generates multiple update operations for individual documents. This produces many oplog records.
    
-   **Repeated inserts and deletes**
    
    If documents are deleted some time after being inserted, the database disk space does not increase significantly, but the oplog will contain many related records.
    
-   **Numerous in-place updates to the same documents**
    
    If most operations in your business scenario are updates that do not increase document size, these updates will generate many oplog records, but the data volume on the disk will not change significantly.
    

If your workload is one of the following types, you can also reduce the oplog size as needed to make better use of disk space:

-   Read-heavy, write-light workloads.
    
-   Storing cold data.
    

Whether you set the oplog size or the oplog retention period, you should keep the oplog window of your MongoDB instance at 24 hours or more. In some scenarios that require an additional [initial sync](https://www.mongodb.com/docs/manual/core/replica-set-sync/#initial-sync), the oplog window must cover the time it takes for a node to complete data synchronization. This time usually depends on factors such as the total data volume of the instance, the total number of databases and collections, and the instance type. In these cases, the oplog window may need to be longer.

### Monitor replication lag and set alerts

If replication latency occurs on secondary nodes and increases until it exceeds the configured oplog window, the nodes enter an abnormal state and cannot be recovered. Therefore, you must monitor the latency of secondary nodes in your MongoDB instance. If the latency continues to increase, promptly [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request assistance from Alibaba Cloud technical support.

There are many reasons for secondary node delay, including the following:

-   Network latency, packet loss, or interruptions.
    
-   The disk throughput of the secondary node has reached a bottleneck.
    
-   A write concern of `{w:1}` with a heavy write workload.
    
-   Certain kernel bugs block primary-secondary replication on the secondary node.
    
-   Other reasons.
    

You can check the secondary node delay in two ways:

-   You can check the **Primary/Secondary Replication Latency** metric on the monitoring page in the console. For more information, see [Node Monitoring (formerly Basic Monitoring)](/help/en/mongodb/user-guide/basic-monitoring).
    
-   Connect to the instance using a client tool, such as mongo shell or mongosh. Then, you can run the following command to view the secondary node delay.
    
    ```
    rs.printSecondaryReplicationInfo()
    ```
    
    The following is an example of the output:
    
    ```
    source: m1.example.net:27017
        syncedTo: Thu Apr 10 2014 10:27:47 GMT-0400 (EDT)
        0 secs (0 hrs) behind the primary
    source: m2.example.net:27017
        syncedTo: Thu Apr 10 2014 10:27:47 GMT-0400 (EDT)
        0 secs (0 hrs) behind the primary
    ```
    
    In this example, neither of the two secondary nodes has any delay.
    

In the console, you can use the **Alert Rules** feature to create a CloudMonitor alert for **ReplicationLag** with a threshold of 10 seconds or more. For more information, see [Set a threshold-based alert rule](/help/en/mongodb/user-guide/configure-threshold-triggered-alert-rules-for-an-apsaradb-for-mongodb-instance).

## **Risks**

The following sections describe the two main reasons why holes may appear in log backups.

### **MongoDB version < 3.4**

Periodic no-op operations were introduced in MongoDB major version 3.4 to support the `maxStalenessSeconds` parameter for readPreference. For more information, see [SERVER-23892](https://jira.mongodb.org/browse/SERVER-23892). The main purpose of this no-op is to ensure that the oplog continues to advance even when there are no business writes. This helps determine how far behind the secondary nodes are in a replica set.

If the database's major engine version is earlier than 3.4, the oplog does not advance if there are no business writes for a long time. As a result, the instance's log backup cannot retrieve new oplog data, which causes a log backup hole. This in turn prevents the instance from being restored to a specific point in time.

### **High write speed with short oplog window**

Based on historical log backup data from ApsaraDB for MongoDB instances, if an instance's oplog generation speed reaches approximately **125 GB/h to 165 GB/h**, it is highly likely that the log backup process will not be able to keep up, which results in a log backup hole.

You can estimate the oplog generation speed using the oplog size and oplog window mentioned earlier. For example, if an instance has an oplog size of 20 GB and an oplog window of 0.06 hours, its oplog generation speed is approximately 333.3 GB/h.

Such workloads typically occur in the following scenarios:

-   Data is being synchronized using DTS, mongoShake, or other data synchronization tools.
    
-   Many batch INSERT or UPDATE operations are loaded in a short period.
    
-   Data seeding (importing a large amount of data into the database quickly).
    
-   Stress testing.
    

To prevent log backup holes caused by excessively high write speeds, you can consider the following optimization measures:

-   When you use synchronization tools, apply appropriate rate limiting, such as for concurrency and batch size.
    
-   Use a write concern of `{w:"majority"}` instead of `{w:1}`.
    

If your workload inherently has a high oplog generation speed, you can consider the following optimization approaches instead:

-   Use a sharded cluster instance or increase the number of shards to reduce the oplog generation speed on a single shard.
    
-   Increase the oplog size or minimum oplog retention period as needed for your business scenario. This provides a longer buffer time for the log backup process. This allows the log backup process to catch up on previously lagged oplog records when the workload decreases.
    

## **References**

-   [Replica Set Oplog](https://www.mongodb.com/docs/manual/core/replica-set-oplog/)
    
-   [rs.printReplicationInfo()](https://www.mongodb.com/docs/manual/reference/method/rs.printReplicationInfo/#mongodb-method-rs.printReplicationInfo)
    
-   [rs.printSecondaryReplicationInfo()](https://www.mongodb.com/docs/manual/reference/method/rs.printSecondaryReplicationInfo/#mongodb-method-rs.printSecondaryReplicationInfo)
