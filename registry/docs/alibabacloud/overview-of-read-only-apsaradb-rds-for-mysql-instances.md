This topic provides an overview of read-only ApsaraDB RDS for MySQL instances. If your database system receives a small number of write requests but a large number of read requests, a single primary RDS instance may be overwhelmed by the read requests and your workloads may be interrupted. To offload read requests from the primary RDS instance, you can create one or more read-only RDS instances. Read-only RDS instances help increase the read capability of your database system and the throughput of your application.

For more information about read-only RDS instances that run different database engines, see the following topics:

-   [Overview of read-only ApsaraDB RDS for SQL Server instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances#concept-cst-z45-vdb)
    
-   [Overview of read-only ApsaraDB RDS for PostgreSQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb)
    

## Overview

When a read-only RDS instance is being created, the system replicates data from the secondary RDS instance to the read-only RDS instance. Each read-only RDS instance has the same data as the primary RDS instance. After the data on the primary RDS instance is updated, the system immediately replicates the data updates to all read-only RDS instances. You can specify a replication latency on each read-only RDS instance. For more information, see [Configure a data replication latency for a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/set-the-data-replication-latency-of-a-read-only-apsaradb-rds-for-mysql-instance#task-dk2-kjq-p2b).

For information about abnormal replication delays, see [What do I do if my read-only ApsaraDB RDS for MySQL instance synchronizes data from its primary instance at a latency?](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-my-read-only-apsaradb-rds-for-mysql-instance-synchronizes-data-from-its-primary-instance-at-a-latency)

## Prerequisites

The **primary RDS instance** must meet the following conditions:

-   The RDS instance runs MySQL 8.0, MySQL 5.7, or MySQL 5.6.
    
-   The RDS instance uses the subscription or pay-as-you-go billing method. You cannot create read-only RDS instances for serverless RDS instances.
    
-   The RDS instance runs RDS High-availability Edition.
    

**Note**

-   You can go to the **Basic Information** page of your RDS instance to obtain the preceding information.
    
-   RDS High-availability Edition and RDS Basic Edition are supported for read-only RDS instances. If you create a read-only RDS instance that runs RDS High-availability Edition, the read-only RDS instance uses the high availability (HA) architecture, and a primary read-only instance and a secondary read-only instance are provisioned. For more information, see [RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition).
    

## Scenarios

-   If a primary RDS instance is overloaded, you can create read-only RDS instances to offload read requests from the primary RDS instance.
    
-   If a primary RDS instance is temporarily unavailable due to backup or maintenance reasons, you can use read-only RDS instances to process read requests. This helps ensure business continuity.
    
-   In scenarios such as report analysis, you can use read-only RDS instances to query and analyze large amounts of data. This does not affect the primary RDS instance.
    
-   If the read/write splitting feature is used, you can use read-only RDS instances to prevent read/write lock contention and improve system performance and throughput.
    

## Billing rules

Read-only RDS instances are charged based on the pay-as-you-go or subscription billing method. For more information about the prices of read-only RDS instances, see [Instance types for read-only ApsaraDB RDS instances](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#reference-2352913).

## Usage notes

-   If the primary RDS instance uses the subscription billing method and you want to create a subscription read-only RDS instance, you can configure the read-only RDS instance to have the same subscription duration as the primary RDS instance.
    
-   If the primary RDS instance is locked due to expiration, you can still access the read-only RDS instances of the primary RDS instance. However, the status of the read-only RDS instances changes to **Running (Primary Instance Locked)**.
    
-   After the primary RDS instance is released, the subscription read-only RDS instances of the primary RDS instance are automatically refunded and released. However, the pay-as-you-go read-only RDS instances of the primary RDS instance are directly released.
    
-   When you release or unsubscribe from the last read-only RDS instance of the primary RDS instance for which the shared database proxy feature is enabled, the system automatically deletes the read/write splitting endpoint provided by the shared database proxy feature. If an application is connected to the RDS instance by using the read/write splitting endpoint, the application cannot access the RDS instance.
    

## Features

-   Billing method: Read-only RDS instances support both the pay-as-you-go billing method and the subscription billing method. The pay-as-you-go billing method is flexible and allows you to release your read-only RDS instances when you no longer need the instances. The subscription billing method is cost-effective for long-term commitments.
    
-   Regions and zones: Read-only RDS instances reside within the same region as the primary RDS instance, but can reside in different zones.
    
-   Specifications: The specifications of read-only RDS instances can differ from the specifications of the primary RDS instance. You can change the specifications of read-only RDS instances at any time. We recommend that you specify an instance type whose specifications are higher than or equal to the specifications supported by the instance type of the primary RDS instance. If the specifications of the read-only RDS instance are lower than the specifications of the primary RDS instance, the read-only RDS instance may encounter issues such as high latency and heavy load.
    
-   Storage type: Read-only RDS instances use the same storage type as the primary RDS instance.
    
-   Storage capacity: The storage capacity of a read-only RDS instance is greater than or equal to the storage capacity of the primary RDS instance.
    
-   Network types: The network types of read-only RDS instances can differ from the network type of the primary RDS instance. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-type-of-an-apsaradb-rds-for-mysql-instance#concept-zqv-gxx-wdb).
    
-   Account and database management: The accounts and databases on read-only RDS instances are synchronized from the primary RDS instance. You do not need to manage databases or accounts on read-only RDS instances.
    
-   Management of IP address whitelists: When you create a read-only RDS instance, the system replicates the IP address whitelists of the primary RDS instance to the read-only RDS instance. However, the IP address whitelists of the read-only RDS instance are independent of the IP address whitelists of the primary RDS instance. For more information about how to modify the IP address whitelists of a read-only RDS instance, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance).
    
-   Monitoring and alerting: Read-only RDS instances support monitoring and alerting. You can monitor near 20 metrics, such as disk usage, IOPS, number of connections, CPU utilization, and network traffic.
    
-   Primary/secondary switchover: Read-only RDS instances that run RDS High-availability Edition support primary/secondary switchover. You can view primary/secondary switchover logs of read-only RDS instances in the ApsaraDB RDS console.
    

## Limits

-   You can create up to 10 read-only RDS instances.
    
-   Instance backup: You cannot configure automatic backup policies or manually create backups for a read-only RDS instance because these operations are performed on the primary RDS instance. You can only configure a retention policy for binary log files of the read-only RDS instance. For more information, see [Delete the binary log files of an ApsaraDB RDS for MySQL instance](/help/en/doc-detail/96146.html#task-hsm-ycn-42b).
    
-   Instance restoration:
    
    -   Full data restoration (instance-level restoration): You cannot restore full data of a read-only RDS instance to a new RDS instance by using backup sets or to a specific point in time. For more information, see [Restore full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance).
        
    -   Restoration of individual databases and tables: You cannot restore individual databases or tables of a read-only RDS instance to the original RDS instance or a new RDS instance by using backup sets or to a specific point in time. For more information, see [Restore individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance).
        
-   Data migration: You cannot migrate data to read-only RDS instances.
    
-   Database management: You cannot create or delete databases on read-only RDS instances.
    
-   Account management: You cannot create or delete accounts, grant permissions to accounts, or change the passwords of accounts on read-only RDS instances.
    

## Create a read-only RDS instance

For more information, see [Create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance#concept-ghp-wq5-vdb).

## FAQs

-   After I create accounts on the primary RDS instance of my database system, can I manage the accounts on the read-only RDS instances?
    
    The accounts that are created on your primary RDS instance are synchronized to the read-only RDS instances. You cannot manage the accounts on the read-only RDS instances. The accounts have only the read permissions on the read-only RDS instances.
    
-   Can I pause the billing for my read-only RDS instances? Can I set the read weights of my read-only RDS instances to 0 to stop the billing?
    
    No, you cannot pause the billing for your read-only RDS instances. If you no longer need your read-only RDS instances, we recommend that you immediately release the instances. For more information, see [Release or unsubscribe from an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance#concept-r1p-jgj-wdb).
    
-   If the database proxy feature is disabled for my RDS instance, can I specify read weights for the read-only RDS instances that are attached to my RDS instance?
    
    No, you cannot specify read weights for the read-only RDS instances that are attached to your RDS instance if the database proxy feature is disabled for your RDS instance. You can configure the endpoints of the primary RDS instance and its read-only RDS instances in different applications to implement read/write splitting and load balancing.
    
-   When do I need to purchase read-only RDS instances that run RDS High-availability Edition?
    
    If your database system receives a large number of read requests, we recommend that you purchase read-only RDS instances that run RDS High-availability Edition to offload the read requests from your primary RDS instance. This helps ensure business stability.
    
-   If a secondary RDS instance is provisioned for my primary RDS instance, do I need to purchase read-only RDS instances that run RDS High-availability Edition?
    
    If your primary RDS instance needs to process a large number of read requests, we recommend that you purchase read-only RDS instances that run RDS High-availability Edition to offload the read requests from your primary RDS instance. The secondary RDS instance ensures the business availability whereas read-only RDS instances are used to implement read/write splitting and process read requests. If a large number of read requests exist, we recommend that you purchase read-only RDS instances that run RDS High-availability Edition.
    
-   How do I implement read/write splitting on an RDS Basic Edition instance?
    
    You cannot create read-only nodes for an RDS Basic Edition instance. To implement read/write splitting on the instance, you must upgrade the edition of the instance to High-availability Edition and then create read-only nodes for the instance. This way, read and write requests are automatically split to different nodes of the instance. For more information about how to upgrade the instance edition and how to create read-only nodes, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance) and [Create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance). After read-only nodes are created, you can adjust the read weight for the instance endpoint. For more information, see [Configure the read and write attributes and the read weight of a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).
