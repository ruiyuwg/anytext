MySQL Group Replication (MGR) is a distributed replication mode that is provided by MySQL based on the existing binary logging mechanism and the Paxos protocol. The MGR mode is supported for RDS Cluster Edition for ApsaraDB RDS for MySQL. An ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition is referred to as an RDS cluster. This topic describes how to set the replication mode of an RDS cluster to MGR.

## **Background information**

RDS clusters that use the MGR mode can implement self-management based on the Paxos protocol. This helps ensure high data reliability and strong data consistency. Compared with the primary/secondary replication mode, the MGR mode provides the following advantages:

-   Strong data consistency: RDS clusters that use the MGR mode can implement self-management. If the primary node of an RDS cluster is faulty, the system automatically removes the faulty node and performs a primary/secondary switchover. After the switchover is complete, the data on the primary node and secondary node remains consistent.
    
-   High data reliability: In MGR mode, if you want to commit a transaction on the primary node of an RDS cluster, make sure that the system sends the data of the transaction to secondary nodes and the majority of secondary nodes receive the data. This prevents data loss.
    
-   Strong global transaction consistency: The MGR mode provides global consistency for read and write operations among nodes. You can use the group\_replication\_consistency parameter to specify the consistency levels for read and write operations based on your business requirements.
    
    **Note**
    
    -   Global read consistency: You can set the group\_replication\_consistency parameter to BEFORE for sessions on the secondary node of your RDS cluster. In this case, if you run a query on the secondary node, the query is run only after the required transactions are applied on the primary node. The required transactions indicate the transactions that involve queries run before the query to be run on the secondary node.
        
    -   Global write consistency: You can set the group\_replication\_consistency parameter to AFTER for sessions on the primary node of your RDS cluster. Then, you can commit a write transaction to the primary node. The system prompts that the transaction is successfully committed to the primary node after the transaction is applied to all nodes in the RDS cluster.
        
    -   Majority: specifies more than half of the nodes in an RDS cluster.
        
    

## **Scenarios**

MGR is suitable for business scenarios that require strong data consistency and high data reliability, such as finance, e-commerce, and core transaction systems.

## **Prerequisites**

Your RDS instance meets the following requirements:

-   RDS edition: The RDS instance runs RDS Cluster Edition.
    
    **Note**
    
    For more information about how to upgrade your RDS instance from RDS High-availability Edition to RDS Cluster Edition, see [Upgrade the RDS edition from RDS High-availability Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-rds-high-availability-edition-to-rds-cluster-edition).
    
-   Engine versions: The major engine version of the RDS cluster is MySQL 8.0, and the minor engine version of the RDS cluster is 20221231 or later. For more information about how to update the minor engine version, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance).
    
-   Storage engine: The storage engine is InnoDB.
    
-   Memory capacity: The memory capacity of the RDS cluster is greater than or equal to 8 GB. For more information about how to upgrade the specifications, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).
    
-   Number of nodes: The number of nodes in the RDS cluster is an odd number greater than or equal to 3.
    
-   Node specifications: The specifications of each node must be the same.
    
-   Database proxy version: If the database proxy feature is enabled for the RDS cluster, the database proxy version is Maxscale\_MySQL\_2.2.12\_20230302 or later. For more information about how to upgrade the database proxy version, see [Upgrade the database proxy version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance).
    
-   Product type: The product type of the RDS cluster is standard.
    

**Note**

You can log on to the ApsaraDB RDS console and go to the **Basic Information** page of the RDS cluster to view information such as the RDS edition, major engine version, and instance type.

## **Limits**

-   The MGR mode cannot be used for RDS clusters that contain X-Engine tables.
    
    You can execute the following SQL statement to check whether an X-Engine table exists in your RDS cluster. If the value 0 is returned, no X-Engine table exists in the RDS cluster.
    
    ```
    SELECT 
      COUNT(1) 
    FROM 
      information_schema.TABLES 
    WHERE 
      ENGINE = 'xengine' 
      AND table_schema NOT IN(
        'information_schema', 'performance_schema', 
        'mysql', 'test', 'sys', '__recycle_bin__'
      );
    ```
    
-   The MGR mode cannot be used for RDS clusters that contain tables without primary keys.
    
    You can execute the following SQL statement to check whether a table without primary keys exists in your RDS cluster. A query result of 0 indicates that all tables in your RDS cluster contain primary keys.
    
    ```
    SELECT 
      COUNT(1) AS count 
    FROM 
      information_schema.TABLES t1 
      LEFT OUTER JOIN information_schema.columns t2 ON t1.table_schema = t2.TABLE_SCHEMA 
      AND t1.table_name = t2.TABLE_NAME 
      AND t2.COLUMN_KEY = 'PRI' 
    WHERE 
      t2.table_name IS NULL 
      AND t1.table_type = 'BASE TABLE' 
      AND t1.TABLE_SCHEMA NOT IN(
        'information_schema', 'performance_schema', 
        'mysql', 'sys'
      );
    ```
    
-   For more information about the limits on the MGR mode, see [Requirements and Limitations](https://dev.mysql.com/doc/refman/8.0/en/group-replication-requirements-and-limitations.html) on the official website.
    

## **Impacts**

When you change the data replication mode from asynchronous or semi-synchronous to MGR, an instance switchover occurs. We recommend that you change the data replication mode during off-peak hours. Make sure that your application is configured to automatically reconnect to your RDS cluster. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).

## **Implementation**

MGR is a distributed replication mode that is developed based on the Paxos protocol. For more information, see [Introduction to the MGR mode](/help/en/rds/apsaradb-rds-for-mysql/introduction-to-the-mgr-mode).

## **Usage notes**

-   The MGR mode delivers lower performance than the asynchronous replication mode and consumes more memory resources than the asynchronous and semi-synchronous replication modes. Before you use the MGR mode, we recommend that you perform a test on performance-sensitive or resource-sensitive workloads.
    
-   To ensure the stability of the RDS clusters that use the MGR mode, the following parameter settings are used:
    
    ```
    disabled_storage_engines=MyISAM,BLACKHOLE,FEDERATED,ARCHIVE,MEMORY,XENGINE
    gtid_mode=ON
    enforce_gtid_consistency=ON
    log_slave_updates=ON
    binlog_format=ROW
    slave_preserve_commit_order=ON
    rpl_semi_sync_master_enabled=OFF
    rpl_semi_sync_slave_enabled=OFF
    master_info_repository=TABLE
    relay_log_info_repository=TABLE
    binlog_transaction_dependency_tracking=WRITESET
    transaction_write_set_extraction=XXHASH64
    slave_parallel_type=LOGICAL_CLOCK
    replication_communication_stack=MYSQL
    group_replication_single_primary_mode=ON
    group_replication_paxos_single_leader=ON
    group_replication_consistency=BEFORE_ON_PRIMARY_FAILOVER
    ```
    

## **Billing rules**

You are not charged for the usage of the MGR mode.

## **Procedure**

### Enable the MGR mode for a new RDS cluster

When you create an RDS cluster, set the **Parameter Template** parameter to **MySQL\_InnoDB\_8.0\_RDS Cluster Edition\_MGR Parameter Template**. After the RDS cluster is created, the MGR mode is enabled for the RDS cluster.

### **Change the replication mode of an existing RDS cluster to MGR**

In the **Instance Topology Management** section of the **Basic Information** page of the existing RDS cluster, click **Change Data Replication Mode**. In the dialog box that appears, select **MGR** for the Data Replication Mode parameter and click **confirm**.

**Note**

You can also change the MGR mode to the asynchronous or semi-synchronous replication mode.

## **FAQ**

Can I change the data replication mode of my RDS cluster from the MGR mode to the asynchronous or semi-synchronous replication mode?

Yes, you can change the data replication mode of your RDS cluster from the MGR mode to the asynchronous or semi-synchronous replication mode. You can switch between the asynchronous replication, semi-synchronous replication, and MGR modes. To change the replication mode of your RDS cluster, perform the following operations: Go the **Basic Information** page of your RDS cluster and click **Change Data Replication Mode** in the **Instance Topology Management** section. In the dialog box that appears, select the required replication mode.

Can the secondary nodes in my RDS cluster process read requests if the MGR mode is used?

Yes, the secondary nodes in your RDS cluster can process read requests when the MGR mode is used. The MGR mode uses the Paxos protocol to replicate data between nodes in your RDS cluster. If the secondary nodes in the RDS cluster are overloaded, the write performance of the primary node is affected. We recommend that you enable the database proxy feature to implement read/write splitting. The database proxy feature allows you to configure read weights and the replication latency threshold for the RDS cluster. This prevents the secondary nodes in the RDS cluster from being overloaded.

Does an RDS cluster that uses the MGR mode support the multi-primary mode?

No, the RDS cluster that uses the MGR mode does not support the multi-primary mode. The MGR mode is supported only for RDS clusters that contain one primary node. The stability of an RDS cluster in multi-primary mode is poor. Jitters or faults on a node affect the availability of the RDS cluster.

The memory capacity of my RDS cluster that uses the MGR mode must be greater than or equal to 8 GB. Why?

After the MGR mode is enabled, a cache that occupies approximately 1 GB of memory is maintained at the XCom layer to store XCom messages. The transaction authentication module of the MGR mode maintains an authentication information array, which occupies a specific amount of memory. Additional background threads are enabled when the MGR mode is used. The threads consume a specific amount of memory. If the memory capacity of your RDS cluster is less than 8 GB, an out of memory (OOM) error occurs when a large amount of memory is occupied. For example, a large number of queries are performed. Therefore, we recommend that you select an instance type that provides large amounts of memory resources for your RDS cluster with the MGR mode enabled.

If the MGR mode is enabled, should I select a general-purpose instance type or a dedicated instance type for my RDS cluster?

Additional memory is used when the MGR mode is enabled for your RDS cluster. Therefore, if the memory capacity of your RDS cluster ranges from 8 GB to 16 GB, we recommended that you select a general-purpose instance type. This prevents the memory from being consumed by the management system and increase the memory that is available for the RDS cluster.

If you purchase a large memory capacity, such as 32 GB, for your RDS cluster, we recommend that you select a dedicated instance type to experience better isolation and peak performance.

## **Related operations**

**Operation**

**Description**

[CreateDBInstance](/help/en/rds/api-create-an-instance)

Creates an instance. When you call the [CreateDBInstance](/help/en/rds/api-create-an-instance) operation to create an instance that runs RDS Cluster Edition and uses the MGR mode, you must set the **DBParamGroupId** parameter to **rpg-sys-01040407010400** and configure other parameters based on your business requirements.

[ModifyDBInstanceHAConfig](/help/en/rds/api-change-the-high-availability-mode-and-data-replication-mode)

Changes the data replication mode of an instance. When you call the [ModifyDBInstanceHAConfig](/help/en/rds/api-change-the-high-availability-mode-and-data-replication-mode) operation to change the data replication mode of an instance to MGR, you must set the **SyncMode** parameter to **Mgr** and configure other parameters based on your business requirements.
