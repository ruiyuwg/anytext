This topic provides an overview of read-only ApsaraDB RDS for SQL Server instances. If your database system receives a small number of write requests but a large number of read requests, a single primary RDS instance may be overwhelmed by the read requests, and your workloads may be interrupted. To offload read requests from the primary RDS instance, you can create one or more read-only RDS instances. Read-only RDS instances help increase the read capability of your database system and the throughput of your application. If your primary RDS instance meets specific requirements, the database system supports fast initialization of read-only RDS instances that belong to the primary RDS instance. This shortens the creation time of read-only RDS instances to minutes and ensures that the creation does not affect the I/O performance of the primary RDS instance.

## Overview

ApsaraDB RDS for SQL Server uses the Always On architecture of native SQL Server. In ApsaraDB RDS for SQL Server, physical replication is implemented to replicate a primary RDS instance and generate a read-only RDS instance. The data on the read-only RDS instance is the same as the data on the primary RDS instance. If the data on the primary RDS instance is updated, the updates are automatically synchronized to the read-only RDS instance.

**Note**

-   You can create read-only RDS instances for a primary RDS instance only when the primary RDS instance runs **SQL Server EE (Always On)**.
    
-   Each read-only RDS instance runs based on a single-node architecture. In this architecture, no secondary read-only RDS instances are provided as standbys for the read-only RDS instance.
    

The following figure shows the topology of the primary RDS instance and its read-only RDS instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4781319471/CAEQJRiBgIC89pTv.hgiIDk4OTVhYjZjNGJhOTQ4YjJiYjg4ZGYyZjUzNjQ1MDQ53963382_20230830144006.372.svg)

## Scenarios

-   If the primary RDS instance is overloaded, you can create read-only RDS instances to offload read requests from the primary RDS instance.
    
-   If the primary RDS instance is temporarily unavailable due to backup or maintenance reasons, read requests are forwarded to its read-only RDS instances to support some of your workloads.
    
-   You can use read-only RDS instances to query and analyze a large amount of data in scenarios such as report analysis. This does not affect the primary RDS instance.
    
-   In emergency disaster recovery scenarios, you can use read-only RDS instances as backups for the primary RDS instance. However, do not directly switch the workloads of the primary RDS instance over to a read-only RDS instance.
    

## Billing rules

You are charged for the read-only RDS instances that you create based on the subscription billing method or the pay-as-you-go billing method. For more information, see [Pricing](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#section-8h0-4ki-ap2).

**Note**

If the billing method of the primary RDS instance is serverless, you cannot create read-only RDS instances.

## Highlights

-   Billing methods: Read-only RDS instances support both the pay-as-you-go and subscription billing methods. The pay-as-you-go billing method is flexible and allows you to release your read-only RDS instances when the RDS instances are no longer needed. The subscription billing method is cost-effective for long-term commitments.
    
-   Regions and zones: Read-only RDS instances reside in the same region as the primary RDS instance, but can reside in different zones.
    
-   Instance specifications: The specifications of read-only RDS instances can differ from the specifications of the primary RDS instance. You can change the specifications of read-only RDS instances at any time. We recommend that you specify an instance type whose specifications are higher than or equal to the specifications of the instance type of the primary RDS instance. If the specifications of the read-only RDS instance are lower than the specifications of the primary RDS instance, the read-only RDS instance may encounter issues such as high latency and heavy load.
    
-   Network type: The network types of read-only RDS instances can differ from the network type of the primary RDS instance. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance).
    
-   Account and database management: The accounts and databases on read-only RDS instances are synchronized from the primary RDS instance. You do not need to manage databases or accounts on read-only RDS instances.
    
-   Management of IP address whitelists: When you create a read-only RDS instance, the system replicates the IP address whitelists of the primary RDS instance to the read-only RDS instance. However, the IP address whitelists of the read-only RDS instance are independent of the IP address whitelists of the primary RDS instance. If you want to modify the IP address whitelists of a read-only RDS instance, follow the instructions provided in [Configure an IP address whitelist](/help/en/rds/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance-1#concept-jvp-nwz-vdb).
    
-   Monitoring and alerting: Read-only RDS instances support monitoring and alerting. You can monitor near 20 metrics, such as disk usage, IOPS, number of connections, CPU utilization, and network traffic.
    
-   Number of read-only RDS instances: You can create up to seven read-only RDS instances for a primary RDS instance.
    
-   Fast initialization of read-only RDS instances: If your primary RDS instance meets specific requirements, the database system supports [fast initialization of read-only RDS instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances#5f2c4b391ej5t) that belong to the primary RDS instance.
    

## Limits

-   Instance backup: You cannot configure backup policies or manually create backups for read-only RDS instances. These are configured and created on the primary RDS instance. You cannot create temporary RDS instances from backup files or any point in time. You cannot overwrite RDS instances by using backup sets. After a read-only RDS instance is created, you cannot use backup sets to overwrite the primary RDS instance to restore data.
    
-   Data migration: You cannot migrate data to read-only RDS instances.
    
-   Database management: You cannot create or delete databases on read-only RDS instances.
    
-   Account management: You cannot create or delete accounts, grant permissions to accounts, or change the passwords of accounts on read-only RDS instances.
    

## **Appendix: Introduction to fast initialization of read-only RDS instances**

If your primary RDS instance runs SQL Server EE (Always On), your database system supports fast initialization of read-only RDS instances that belong to the primary RDS instance. The fast initialization capability helps shorten the time required to create read-only RDS instances from several hours or days to dozens of minutes. If you use the fast initialization capability, the resource allocation efficiency of your database system is improved, and your enterprise can deploy and scale services in an efficient manner.

### **Prerequisites**

If you want to use the fast initialization capability, your primary RDS instance must meet the following requirements:

-   The primary RDS instance runs SQL Server 2017 EE (Always On), SQL Server 2019 EE (Always On), or SQL Server 2022 EE (Always On).
    
-   The RDS cluster uses enhanced SSDs (ESSDs) or Premium ESSDs.
    
-   The number of databases in the primary RDS instance is less than 20.
    
-   The total size of databases in the primary RDS instance is greater than 200 GB.
    

### **Usage notes**

-   Before you create a read-only RDS instance, if the primary RDS instance has an ongoing backup task, you must wait until the backup is complete. This extends the period of time that is required to initialize the read-only RDS instance. For more information, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance).
    
-   Before you create a read-only RDS instance, make sure that the read-only RDS instance and its primary RDS instance reside in the same region.
    

### **Benefits**

-   Quick scale-out: If the data stored on the primary RDS instance is no more than 16 TB, read-only RDS instances can be created for the primary RDS instance within minutes regardless of the size of data stored on the primary RDS instance. This shortens the creation time of read-only RDS instances from several hours or days to minutes.
    
-   Less interference with the primary RDS instance: The fast initialization of read-only RDS instances does not affect the I/O performance of their primary RDS instance. This ensures the stable performance of the primary RDS instance.
    
-   Cost-effectiveness: You can use fast initialization to create read-only RDS instances at any time. You can release the created read-only RDS instances at any time after you use them. This helps reduce the costs of retaining read-only RDS instances for a long period of time.
    

### **Scenarios**

-   Accelerated data analysis: Use fast initialization of read-only RDS instances to migrate online analytical processing (OLAP) workloads, such as data analysis and report generation, to read-only RDS instances. This ensures that the performance of the primary RDS instance is not affected.
    
-   Isolated test environment: Deploy read-only RDS instances in an efficient manner in different testing phases to test features without any impacts on the performance in the production environment.
    
-   Manageable traffic spikes: Create read-only RDS instances in an efficient manner during peak hours to offload read requests from the primary RDS instance. This reduces the loads on the primary RDS instance.
    
-   Optimized data export: Run data export tasks on read-only RDS instances to avoid additional loads caused by data export on the primary RDS instance.
    
-   Convenient data sharing: Share database information with external partners or internal departments. In this case, you can create read-only RDS instances in an efficient manner to achieve secure data sharing.
    

## **References**

Create a read-only RDS instance. For more information, see [Create a read-only ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance).
