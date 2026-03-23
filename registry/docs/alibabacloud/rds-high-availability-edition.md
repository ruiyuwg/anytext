This topic describes RDS High-availability Edition for ApsaraDB RDS for MySQL.

RDS High-availability Edition is a widely used edition. RDS instances of this edition are deployed in a primary/secondary architecture to deliver highly available services. This edition is suitable for more than 80% of use cases in various industries, such as Internet, IoT, online retail, logistics, and gaming.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4804877961/p725901.png)

**Note**

The secondary RDS instance serves as a standby for the primary RDS instance and is inaccessible to outside services.

## Topology

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6133472671/CAEQTxiBgID7yOCu0xkiIGFlMmU1MmI3NGIwNTRiNDNiOGVlZGEyOTgwZTdjZjhm4030942_20231010134311.456.svg)

## Benefits

-   High availability
    
    In RDS High-availability Edition, the mode that is used to synchronize the data of the primary RDS instance to the secondary RDS instance varies based on the parameter template that you select. The asynchronous or synchronous mode is used to synchronize data. If the primary instance becomes inaccessible, your database system fails over to the secondary instance.
    
    In RDS High-availability Edition, the primary and secondary RDS instances can be deployed in the same zone or different zones in the same region. If the primary and secondary RDS instances are deployed in different zones, cross-zone disaster recovery can be implemented, and the availability of your database system is improved.
    
    **Note**
    
    -   If the secondary instance becomes inaccessible, data of the primary instance is backed up in real time. When a backup is near completion, the FLUSH TABLE WITH READ LOCK (FTWRL) statement is executed. This triggers a global lock that is held for up to 5 seconds. When the global lock is held, the primary instance is in read-only mode.
        
    -   If you select the default parameter template, the semi-synchronous mode is used. If you select an asynchronous parameter template or a high-performance parameter template, the asynchronous mode is used.
        
    -   In asynchronous mode, after an update that is initiated by your application is complete on a primary instance, the log is synchronized to the secondary instance. After the secondary instance receives the log, the update transaction is considered committed. Your database system does not need to wait for the log to be replayed. If the secondary RDS instance is unavailable or a network interruption occurs between the primary and secondary RDS instances, the semi-synchronous mode is degrades to the asynchronous mode.
        
    -   In synchronous mode, after an add, delete, or modify operation that is initiated by your application is complete on a primary instance, the primary instance immediately responds to the application. At the same time, the primary instance replicates the added, deleted, or modified data to the secondary instance. In asynchronous mode, the workloads on the primary instance run as expected even if the secondary instance is unavailable. However, if the primary instance is unavailable, errors may occur due to data inconsistencies between the primary and secondary instances.
        
    
-   Comprehensive functionality
    
    RDS High-availability Edition provides a complete suite of features, such as auto scaling, backup and restoration, performance optimization, read/write splitting, and SQL Explorer. The SQL Explorer feature stores the logs of all executed statements for up to five years. You can use the logs to trace operations performed on your databases, which helps ensure the security of your data.
    

## Limits

For performance purposes, the primary and secondary RDS instances must be deployed in the same region.

## Upgrade the RDS edition of an RDS instance to RDS High-availability Edition

RDS instances that run RDS Basic Edition are deployed in a standalone architecture. Due to the lack of a hot standby, your workloads may experience extended periods of downtime when the RDS instance fails. This also happens when you change the specifications or upgrade the database engine. If you require high service availability, we recommend that you use RDS High-availability Edition.

You can directly purchase RDS High-availability Edition or upgrade the RDS edition of an RDS instance that runs RDS Basic Edition to RDS High-availability Edition. The upgrade is convenient as you do not need to migrate data to a new RDS instance or reclaim the original RDS instance. If your RDS instance runs MySQL 5.7 or MySQL 8.0 on RDS Basic Edition, you can upgrade the RDS edition to RDS High-availability Edition in the ApsaraDB RDS console. For more information, see [Upgrade the RDS edition from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition#task-2326701).

## Create an RDS instance

For more information about how to create an RDS instance that runs RDS High-availability Edition, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).

## FAQ

-   Can I establish a direct connection to my secondary RDS instance?
    
    No, direct connections cannot be established to secondary RDS instances. Direct connections can only be established to the primary RDS instance. A secondary RDS instance serves as a standby and cannot be accessed externally.
    
-   Can I downgrade an RDS instance from RDS High-availability Edition to RDS Basic Edition?
    
    No, you cannot downgrade an RDS instance from RDS High-availability Edition to RDS Basic Edition. If you want to downgrade an RDS instance from RDS High-availability Edition to RDS Basic Edition, you can purchase an RDS instance that runs RDS Basic Edition and migrate the data of your original RDS instance to the new RDS instance. Then, release your original RDS instance. For more information, see [Migrate data between RDS instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-instances#concept-610471).
    
-   How do I change the data replication mode of my RDS instance on RDS High-availability Edition?
    
    For more information, see [Query and change the data replication mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-data-replication-mode-of-an-apsaradb-rds-for-mysql-instance#concept-dq5-xfj-wdb).
    
-   I am using RDS High-availability Edition. Is the data replication mode changed to the asynchronous mode if the secondary RDS instance handles heavier workloads than the primary RDS instance?
    
    Yes, if the secondary RDS instance handles heavier workloads than the primary RDS instance, the data replication mode is changed to the asynchronous mode. For more information, see [Data replication modes](/help/en/rds/apsaradb-rds-for-mysql/change-the-data-replication-mode-of-an-apsaradb-rds-for-mysql-instance#section-51i-39c-nks).
