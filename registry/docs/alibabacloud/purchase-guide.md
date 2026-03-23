This topic describes how to select the configuration for an ApsaraDB RDS instance based on your business requirements when you create the instance.

## Introduction to RDS editions, storage types, instance families, and storage engines

Before you create an RDS instance, you must select the most cost-effective, stable configuration based on factors such as performance, prices, and workload. The RDS edition, storage type, and instance family that you select affect one another. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).

**Note**

If you want to create an RDS instance that runs MySQL 8.0, you must select a default storage engine.

-   RDS editions
    
    ApsaraDB RDS provides the following RDS editions: RDS Basic Edition, RDS High-availability Edition, and RDS Cluster Edition. The following table describes the RDS editions.
    
    **RDS edition**
    
    **Description**
    
    **Scenario**
    
    [RDS Basic Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#concept-nyq-cvw-5db)
    
    -   The database system consists of only a primary RDS instance. Computing is separated from storage.
        
    -   Read-only RDS instances are not supported.
        
    
    -   Personal learning
        
    -   Microsites
        
    -   Development and testing environments for small and medium-sized enterprises
        
    
    [RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745)
    
    -   The database system consists of a primary RDS instance and a secondary RDS instance. These instances work in high availability (HA) mode and support automatic failover. The secondary RDS instance cannot be directly accessed.
        
    -   You can create read-only RDS instances to increase the read capability of your database system. For more information, see [Create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance#concept-ghp-wq5-vdb).
        
    
    -   Production databases for large and medium-sized enterprises
        
    -   Databases that are used in industries such as the Internet, IoT, e-commerce, logistics, and gaming
        
    
    [RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#concept-vcs-h1c-5fb)
    
    -   The database system consists of a primary RDS instance and multiple secondary RDS instance. These instances work in HA mode and support automatic failover. The secondary RDS instances can be accessed. This increases the read capability of your database system.
        
    -   You can create multiple secondary RDS instances to increase the read capability of your database system.
        
    
    -   Production databases for large and medium-sized enterprises
        
    -   Databases that are used in industries such as Internet-based new retail and automobile manufacturing, and databases that are used for Enterprise Resource Planning (ERP) systems
        
    
-   Storage types
    
    ApsaraDB RDS provides three storage types: local SSD, standard SSD, and enhanced SSD (ESSD). All storage types meet the reliability, persistence, and read/write performance requirements that are specified in Alibaba Cloud service level agreement (SLA). The following table describes the storage types.
    
    **Storage type**
    
    **Description**
    
    ESSD
    
    ESSDs are developed by Alibaba Cloud based on the next-generation distributed block storage architecture. ESSDs deliver ultra high storage performance. ESSDs are integrated with 25 Gigabit Ethernet and remote direct memory access (RDMA) technologies. ESSDs can help you reduce one-way latencies and process up to 1 million read and write requests at random per second. ESSDs are provided in the following performance levels (PLs):
    
    -   PL1 ESSD: This is the basic PL of ESSDs.
        
    -   PL2 ESSD: A PL2 ESSD delivers IOPS and throughput that are approximately twice the IOPS and throughput delivered by a PL1 ESSD.
        
    -   PL3 ESSD: A PL3 ESSD of delivers IOPS that is up to 20 times the IOPS delivered by a PL1 ESSD. A PL3 ESSD also delivers throughput that is up to 11 times the throughput delivered by a PL1 ESSD. PL3 ESSDs are suitable for business scenarios in which highly concurrent requests must be processed with high I/O performance and at low read and write latencies.
        
    
    For more information about ESSD performance, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).
    
    Local SSD
    
    Local SSDs reside on the same physical host as the database engine of your RDS instance. You can store data in local SSDs to reduce I/O latencies.
    
    Standard SSD
    
    Standard SSDs are elastic block storage devices that are designed based on a distributed storage architecture. You can store data in standard SSDs to separate computing from storage.
    
    **Note**
    
    Standard SSDs are being phased out. We recommend that you use ESSDs. For more information, see [\[EOS/Discontinuation\] End of sale for the standard SSD storage type for specific database engines in ApsaraDB RDS from July 01, 2022](/help/en/rds/apsaradb-rds-for-mysql/end-of-sale-for-the-standard-ssd-storage-type-for-specific-database-engines-in-apsaradb-rds#concept-2079151).
    
-   Instance families
    
    ApsaraDB RDS provides various instance families based on the number of cores, memory capacity, number of connections, and IOPS. Each instance family includes multiple instance types. The following table describes the instance families.
    
    **Instance family**
    
    **Description**
    
    **Scenario**
    
    **Supported engine**
    
    Shared instance family
    
    -   Shared RDS instances enjoy dedicated memory and storage resources, but share CPU resources with the other shared instances that are deployed on the same physical host.
        
    -   CPU resources are highly reused among the shared RDS instances that are deployed on the same physical host. The reuse of CPU resources helps maximize cost-effectiveness.
        
    -   Shared RDS instances that are deployed on the same physical host may compete for resources.
        
    
    -   You want an inexpensive database option.
        
    -   You require high availability rather than high stability from your ApsaraDB RDS for SQL Server instance. The shared instance family is supported only for RDS instances that run SQL Server.
        
    
    SQL Server
    
    General-purpose instance family
    
    -   General-purpose RDS instances that use local disks enjoy dedicated memory resources, but share CPU and storage resources with the other general-purpose instances that are deployed on the same physical host.
        
    -   Storage resources of general-purpose RDS instances that use cloud disks are decoupled from compute resources (CPU cores and memory). You can independently scale storage resources.
        
    -   Among the CPU cores provided by a general-purpose RDS instance, some are dedicated to that instance, while the other cores are shared with the other general-purpose RDS instances that are deployed on the same physical host. In this case, contention for CPU resources occur less when compared with shared RDS instances.
        
    
    You do not require high stability for your databases.
    
    -   MySQL
        
    -   PostgreSQL
        
    -   SQL Server
        
    -   MariaDB
        
    
    Dedicated instance family
    
    -   Dedicated instances enjoy dedicated CPU and memory resources. The performance of a dedicated RDS instance is guaranteed and is not affected by the other instances that are deployed on the same physical host.
        
    -   In the dedicated instance family, dedicated host instance types have the highest specifications. A dedicated host RDS instance occupies all the resources of the physical host on which the RDS instance is deployed.
        
    
    Your databases are used as core systems in sectors such as finance, e-commerce, public services, and large and medium-sized Internet services.
    
    -   MySQL
        
    -   PostgreSQL
        
    -   SQL Server
        
    -   MariaDB
        
    
-   Storage engines
    
    If you want to create an RDS instance that runs MySQL 8.0, you can select one of the following storage engines:
    
    -   InnoDB: the default storage engine provided by open source MySQL. The InnoDB storage engine that is used for ApsaraDB RDS is reinforced by Alibaba Cloud.
        
    -   X-Engine: the storage engine developed by Alibaba Cloud. X-Engine is compatible with InnoDB. X-Engine outperforms InnoDB in terms of disk space usage and cost-effectiveness. X-Engine is more suitable for scenarios such as data archiving than InnoDB. For more information, see [Introduction to X-Engine](/help/en/doc-detail/148660.html#concept-2377809).
        

## Select configuration for an RDS instance

Perform the following steps to select a suitable configuration for an RDS instance:

1.  Select an RDS edition.
    
    We recommend that you select RDS High-availability Edition. If you select RDS High-availability Edition, your database system consists of a primary RDS instance and a secondary RDS instance to ensure high availability. RDS High-availability Edition is suitable for medium-sized enterprises and large-sized enterprises and for industries such as Internet, Internet of Things (IoT), online retail, logistics, and gaming.
    
    RDS Cluster Edition is suitable for core databases of large-sized enterprises and for finance, securities, and insurance industries that require high data security.
    
2.  Select a storage type.
    
    We recommend that you select a local SSD or an ESSD of a suitable performance level (PL) based on the IOPS and throughput requirements of your business. For more information about the differences between local SSDs, standard SSDs, and ESSDs, see [Features](/help/en/rds/product-overview/features-2#concept-2338477).
    
    The maximum IOPS of a standard SSD or an ESSD varies based on the instance type and the storage capacity. The following table lists the formulas that you can use to calculate the maximum IOPS of an RDS instance that uses standard SSDs or ESSDs.
    
    **Storage type**
    
    **ESSD**
    
    **Standard SSD**
    
    **PL**
    
    **PL3**
    
    **PL2**
    
    **PL1**
    
    **N/A**
    
    Formula
    
    (Unit: GB)
    
    min{1800 + 50 × Storage capacity, 1000000, Maximum IOPS for the instance type}
    
    min{1800 + 50 × Storage capacity, 100000, Maximum IOPS for the instance type}
    
    min{1800 + 50 × Storage capacity, 50000, Maximum IOPS for the instance type}
    
    min{1800 + 30 × Storage capacity, 25000, Maximum IOPS for the instance type}
    
    ![选择存储类型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2537688951/p102670.png)
3.  Select an instance type.
    
    The specifications of an instance type include the number of cores, memory capacity, maximum number of connections, and maximum IOPS. When you create an RDS instance, you can select one of the following instance type levels: entry level or enterprise level. Then, you can select an instance type based on your business requirements. The entry level provides the shared instance family and the general-purpose instance family. The enterprise level provides the dedicated instance family.
    
    ![选择实例规格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3537688951/p102671.png)
    
    **Note**
    
    If you select the standard SSD or ESSD storage type, the IOPS becomes **N/A** in the ApsaraDB RDS console. This is because ApsaraDB RDS calculates the IOPS based on the selected storage type. For more information, see [Select a storage type](#li-px0-mvq-wd1) in this section.
    
4.  Select a storage engine.
    
    If you want to create an RDS instance that runs MySQL, we recommend that you select X-Engine. X-Engine costs approximately 50% less than InnoDB but delivers comparable performance. For more information, see [Usage notes](/help/en/doc-detail/148404.html#concept-2364454).
    

## Check and modify the configuration of an RDS instance

After you create and start to use an RDS instance, we recommend that you continue to monitor the performance of the RDS instance for a specific period of time. This way, you can check whether the configuration of the RDS instance is suitable.

For example, if the memory usage is high, we recommend that you log on to the RDS instance to identify the causes of high memory usage. If no exceptions occur, you can modify the configuration of the RDS instance. If exceptions occur, you can modify the allocation of memory on the RDS instance. For more information, see the following topics:

-   [View monitoring information](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance#concept-sp4-jgl-jgb)
    
-   [Manage alerts](/help/en/rds/apsaradb-rds-for-mysql/configure-an-alert-rule-for-an-apsaradb-rds-for-mysql-instance#concept-ir2-twp-wdb)
    
-   [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)
    

## Create an ApsaraDB RDS instance

For more information about how to create an RDS instance, see the following topics:

-   [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb)
    
-   [Create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb)
    
-   [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance#concept-kzn-qcg-wdb)
    
-   [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance#concept-wzp-ncf-vdb)
    

## References

-   [Test results of ApsaraDB RDS instances that run MySQL 8.0](/help/en/rds/support/test-results-of-apsaradb-rds-instances-that-run-mysql-8#concept-2389067)
    
-   [Test results of ApsaraDB RDS instances that run MySQL 5.7](/help/en/rds/support/test-results-of-apsaradb-rds-instances-that-run-mysql-5#concept-z3p-byj-zgb)
    
-   [Test results of ApsaraDB RDS instances that run MySQL 5.6](/help/en/rds/support/test-results-of-apsaradb-rds-instances-that-run-mysql-5-1#concept-8031)
    
-   [Test results of ApsaraDB RDS instances that run PostgreSQL](/help/en/rds/support/test-results#concept-fll-zjd-ggb)
