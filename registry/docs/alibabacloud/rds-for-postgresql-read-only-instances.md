This topic provides an overview of read-only ApsaraDB RDS for PostgreSQL instances. If your database system receives a small number of write requests but a large number of read requests, a single primary RDS instance may be overwhelmed by the read requests. You can create one or more read-only RDS instances to offload read requests from the primary RDS instance. Read-only RDS instances help increase the read capability of your database system and the throughput of your application.

## Overview

When you create a read-only RDS instance, the system replicates data from the secondary RDS instance to the read-only RDS instance. This prevents interruptions to your workloads that are run on the primary RDS instance. If the data on the primary RDS instance is updated, the updates are automatically synchronized to all read-only RDS instances.

**Note**

-   If the primary RDS instance uses Premium Local SSDs, you can create up to 5 read-only RDS instances. If the primary RDS instance uses cloud disks, you can create up to 32 read-only RDS instances.
    
-   If the primary RDS instance uses Premium Local SSDs, its read-only RDS instances run in a high-availability architecture.
    
-   If the primary RDS instance uses cloud disks, its read-only RDS instances run in a single-node architecture. In this architecture, no secondary RDS instances are provided as standbys for read-only RDS instances. To ensure service availability, we recommend that you purchase more than one read-only RDS instance and use libpq or Java Database Connectivity (JDBC) to implement automatic failovers. For more information, see [Implement automatic failover and read/write splitting](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-failover-and-read-or-write-splitting#task-2558115). You can also use the database proxy feature to implement automatic read/write splitting. For more information, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies#concept-2191078)
    

The following figure shows the topology of the primary RDS instance and its read-only RDS instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1514472671/CAEQTxiBgMD95Pmu0xkiIGE4MDBiODRhN2Y2YzQxZjY4ZTU3NTRjNzM2ZGZkMWEy3963382_20230830144006.372.svg)

## Scenarios

-   If the primary RDS instance is overloaded, you can create read-only RDS instances to process read requests. This helps offload the read requests from the primary RDS instance.
    
-   If a primary RDS instance is temporarily unavailable due to backup or maintenance reasons, you can use read-only RDS instances to process read requests. This helps ensure business continuity.
    
-   You can use read-only RDS instances to query and analyze a large amount of data in scenarios such as report analysis. This does not affect the primary RDS instance.
    
-   If the read/write splitting feature is used, you can use read-only RDS instances to prevent read/write lock contention and improve the system performance and throughput.
    

## Billing rules

Read-only RDS instances support the subscription and pay-as-you-go billing methods. For more information about the fee for a subscription read-only RDS instance, visit the ApsaraDB RDS buy page. For more information about the fee for a pay-as-you-go read-only RDS instance, see [Instance types for read-only ApsaraDB RDS instances](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#reference-2352913).

## Highlights

-   Regions and zones: Read-only RDS instances reside within the same region as the primary RDS instance but can reside in different zones.
    
-   Network type: The network types of read-only RDS instances can be different from the network type of the primary RDS instance. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance#concept-zqv-gxx-wdb).
    
-   Account and database management: The accounts and databases on read-only RDS instances are synchronized from the primary RDS instance. You do not need to manage databases or accounts on read-only RDS instances.
    
-   Management of IP address whitelists: When you create a read-only RDS instance, the system automatically replicates the IP address whitelists of the primary RDS instance to the read-only RDS instance. However, the IP address whitelists of the read-only RDS instance are independent of the IP address whitelists of the primary RDS instance. If you want to modify the IP address whitelists of a read-only RDS instance, you can follow the instructions provided in [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#concept-sfx-kdg-wdb).
    
-   Monitoring and alerting: You can monitor the performance metrics of a read-only RDS instance. The metrics include the disk usage, IOPS, number of connections, and CPU utilization. The monitoring data of the metrics is provided in charts.
    
-   Read/write splitting: The read/write splitting feature works with the database proxy feature to allow the system to forward write requests to the primary RDS instance and read requests to the read-only RDS instances. This reduces the loads on the primary RDS instance. For more information about how to enable the database proxy feature for a primary RDS instance, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies#concept-2191078)
    
-   Number of read-only RDS instances: If the primary RDS instance uses cloud disks, you can create up to 32 read-only RDS instances. If the primary RDS instance uses Premium Local SSDs, you can create up to 5 read-only RDS instances.
    

## Usage notes

-   Data backup: You cannot configure backup policies or manually create backups for read-only RDS instances. These operations are performed on primary RDS instances.
    
-   Data migration: You cannot migrate data to read-only RDS instances.
    
-   Database management: You cannot create or delete databases.
    
-   Account management: You cannot create accounts, grant permissions to accounts, change the passwords of accounts, or delete accounts on read-only RDS instances.
    
-   Specifications and storage capacity:
    
    -   If the primary RDS instance uses cloud disks, the storage capacity of a read-only RDS instance must be greater than or equal to the storage capacity of the primary RDS instance. If the memory capacity of the primary RDS instance is greater than the memory capacity of a read-only RDS instance, the read-only RDS instance restarts during the specification change of the primary RDS instance.
        
    -   If the primary RDS instance uses Premium Local SSDs, the specifications and storage capacity of its read-only RDS instances cannot be lower than the specifications and storage capacity of the primary RDS instance.
        
-   If a read-only RDS instance encounters unexpected errors, such as failures to replicate database engine settings, the system rebuilds the read-only RDS instance.
    
-   After the primary RDS instance is released, the subscription read-only RDS instances of the primary RDS instance are automatically refunded and released, and the pay-as-you-go read-only RDS instances of the primary RDS instance are directly released.
    

## FAQ

-   Can I change the billing method of a read-only RDS instance?
    
    Yes, you can change the billing method of a read-only RDS instance. For more information, see [Switch an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-from-pay-as-you-go-to-subscription#concept-gtz-lbj-wdb) or [Change the billing method from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-postgresql/package-year-package-month-to-pay-by-volume#task-2441126).
    
-   If I change the configuration of a read-only RDS instance, release the read-only RDS instance, or change the billing method of the read-only RDS instance, does the primary RDS instance to which the read-only RDS instance is attached is affected?
    
    No, the primary RDS instance is not affected.
    
-   After I create accounts on my primary RDS instance, can I manage the accounts on the read-only RDS instances of my primary RDS instance?
    
    No, you cannot manage the accounts on the read-only RDS instances. The accounts that are created on your primary RDS instance are synchronized to the read-only RDS instances and and have only read permissions on the read-only RDS instances.
    
-   Can a read-only RDS instance be converted into a regular RDS instance, such as a disaster recovery RDS instance?
    
    No, a read-only RDS instance cannot be converted into a regular RDS instance.
    
-   Can I back up the data of a read-only RDS instance? Do read-only RDS instances support automatic backup?
    
    You do not need to back up read-only RDS instances. Backups are performed on the primary RDS instance. In ApsaraDB RDS for PostgreSQL, snapshot backups are used, and no performance overhead is caused on the primary RDS instance.
    
-   Do read-only RDS instances support parallel replication?
    
    In ApsaraDB RDS for PostgreSQL, physical replication is used to synchronize data. Physical replication uses WAL files for data synchronization and playback, which is more efficient than parallel replication.
    
-   How are transaction logs deleted?
    
    After the WAL files of an RDS instance are backed up, AliPG clears the transaction logs during checkpointing.
    
-   How do I determine whether replication is normal based on the latency of data replication for a read-only RDS instance?
    
    In most cases, if the latency of data replication for a read-only RDS instance is less than or equal to 1 second, the data replication is implemented as expected. If the latency of data replication for a read-only RDS instance is greater than 1 second, the data is replicated at a specific latency, and disconnection may occur.
    
-   What causes a replication latency between a primary RDS instance and a read-only RDS instance?
    
    The following section describes the common causes and solutions:
    
    -   Cause: The specifications of the primary RDS instance are higher than the specifications of the read-only RDS instance.
        
        Solution: Upgrade the specifications of the read-only RDS instance. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance#concept-efl-pln-wdb).
        
    -   Cause: The `max_standby_streaming_delay` parameter is improperly configured. For more information, see [Modify the parameters of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance).
        
        Solution: Modify the value of the `max_standby_streaming_delay` parameter.
        
        -   If you set this parameter to a small value, the latency at which a read-only RDS instance replicates data from its primary RDS instance is reduced. However, if the value of the parameter is excessively small, the transactions executed on the read-only RDS instance may be canceled.
            
        -   If the value is excessively large, replication latency may occur.
