ApsaraDB RDS provides the following data storage types: enterprise SSDs (ESSDs), high-performance local disks, premium performance disks, and standard SSDs. This topic describes these storage types, highlights their differences, and offers purchasing recommendations.

## Introduction to storage types

**Storage type**

**Description**

**Supported engines**

ESSD

Enhanced SSDs (ESSDs) are ultra-high performance disks developed by Alibaba Cloud. ESSDs are based on the next-generation distributed block storage architecture. They use 25GE networks and Remote Direct Memory Access (RDMA) technology. An ESSD provides up to 1 million random read/write IOPS and lower one-way latency than a standard SSD. ESSDs are available at the following performance levels (PLs):

-   PL1 ESSD: A PL1 performance level ESSD.
    
-   PL2 ESSD: Compared with a PL1 ESSD, a PL2 ESSD provides approximately 2 times the IOPS and throughput.
    
-   PL3 ESSD: Compared with a PL1 ESSD, a PL3 ESSD provides up to 20 times the IOPS and 11 times the throughput. PL3 ESSDs are suitable for business scenarios that require extremely high concurrent I/O performance and stable read/write latency.
    

For more information about the performance of ESSDs, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).

MySQL, PostgreSQL, SQL Server, and MariaDB

High-performance local disk

High-performance local disks are intelligent local disks developed by ApsaraDB RDS. They are located on the same physical machine as the MySQL database. Data storage and read/write operations are completed locally. This provides high read/write I/O and low latency.

A high-performance local disk provides up to 150,000 IOPS, I/O latency as low as microseconds, and up to 16 TB of storage. The backup and recovery speed is 10 times faster than self-managed databases.

High-performance local disks are suitable for I/O-intensive applications or scenarios with high concurrent read/write operations, such as flash sales and high-frequency trading systems.

MySQL

Premium performance disk

Premium performance disks are compatible with almost all features of ESSDs. They also provide features such as I/O performance burst, Buffer Pool Extension (BPE), and data archiving.

-   I/O performance burst (Supported by MySQL, PostgreSQL): Allows the IOPS of a disk to exceed its maximum limit, providing higher I/O capability to handle workload bursts during peak hours.
    
-   Buffer Pool Extension (BPE) (supported by MySQL and PostgreSQL): This feature helps expand the cache pool size, improve disk I/O efficiency and system response speed, and implement cache acceleration. This improves the overall read/write performance of the RDS instance.
    
-   Data archiving: This feature is supported for MySQL, PostgreSQL. You can transfer infrequently accessed data to OSS, which reduces data storage costs by 80% compared to PL1 ESSDs. The feature is suitable for instances that contain tables that are infrequently accessed or modified.
    

For more information, see [Premium performance disks for RDS for MySQL](/help/en/rds/apsaradb-rds-for-mysql/premium-essd/), [Premium performance disks for RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-universal-cloud-disk-of-apsaradb-rds-for-postgresql/).

MySQL, PostgreSQL

Standard SSD

Standard SSDs are Elastic Block Storage devices based on a distributed storage architecture. They separate computing from storage.

**Note**

Standard SSDs are being phased out. We recommend that you use ESSDs. For more information, see [\[EOS/Discontinuation\] End of sale for the standard SSD storage type for specific database engines in ApsaraDB RDS from July 01, 2022](/help/en/rds/apsaradb-rds-for-mysql/end-of-sale-for-the-standard-ssd-storage-type-for-specific-database-engines-in-apsaradb-rds#concept-2079151).

MySQL, PostgreSQL, SQL Server, and MariaDB

For a performance comparison of these storage types, including metrics such as **maximum capacity per disk**, **maximum IOPS**, and **maximum throughput**, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance#concept-ytm-vwj-ydb).

**Note**

The reliability, durability, and read/write performance of these storage types comply with the product's Service-Level Agreement (SLA).

-   Premium Local SSDs: RDS instances that use this storage type are based on a primary/secondary [High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition) architecture. If the primary node fails, a primary/secondary switchover is completed within seconds.
    
-   Disks (standard SSDs, ESSDs, and premium performance disks): These are distributed disks that ensure data reliability through multi-replica redundancy. If the RDS instance is a High-availability Edition or Cluster Edition instance, it supports automatic switchover within seconds.
    

## View the storage type

You can view the storage type of an instance on its **Basic Information** page.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7992408961/p725990.png)

## Differences between storage types

**Note**

Currently, only High-availability Edition RDS instances that run MySQL support high-performance local disks.

**Item**

**ESSD**

**Premium performance disk**

**High-performance local disk**

I/O performance

**Note**

The speed and efficiency of a disk in processing data read/write requests. This includes IOPS, throughput, and access latency.

★★★★★

Offers a significant improvement over standard SSDs:

-   IOPS: Determined by the disk specifications and instance type.
    
-   I/O latency: 100 to 200 microseconds.
    

★★★★★★

Extends enterprise SSDs (ESSDs) with the [I/O performance burst](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst), [Buffer Pool Extension (BPE)](/help/en/rds/apsaradb-rds-for-mysql/buffer-pool-extension-bpe), and [data archiving](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function) features.

-   IOPS: Determined by the disk specifications and instance type.
    
-   I/O latency: 100 to 200 microseconds.
    

★★★★★

Offers low I/O latency and high performance:

-   IOPS: Determined by the instance type.
    
-   I/O latency: 10 to 50 microseconds.
    

Configuration flexibility

★★★★★

Many configuration options are available. Supports scaling out or scaling in disk space.

**Note**

Only some RDS instances that run MySQL or PostgreSQL and meet specific conditions support scaling in. For more information, see [Overview of instance configuration changes](/help/en/rds/apsaradb-rds-for-mysql/configuration-items-for-an-apsaradb-rds-for-mysql-instance) and [Change configurations](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).

★★★★★

Many configuration options are available. Supports scaling out or scaling in disk space.

**Note**

Only some RDS instances that run MySQL or PostgreSQL and meet specific conditions support scaling in. For more information, see [Overview of instance configuration changes](/help/en/rds/apsaradb-rds-for-mysql/configuration-items-for-an-apsaradb-rds-for-mysql-instance) and [Change configurations](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).

★★★★

Many configuration options are available. Disk space can be adjusted independently. However, for some instances that use high-performance local disks, the disk space is coupled with the instance type and cannot be adjusted separately.

Backup method

ESSD snapshot backup.

ESSD snapshot backup.

XtraBackup physical backup.

Speed of backup, read-only instance creation, and instance cloning operations

★★★★★

Takes seconds.

★★★★★

Takes seconds.

★★★

Depends on the disk size. These operations can take hours.

Scale-out duration

★★★★★

Online upgrade. Scales out in seconds.

★★★★★

Online upgrade. Scales out in seconds.

★★★★

Requires data copy. The process may take several hours.

Impact of scaling out

No impact.

No impact.

A transient connection occurs.

Data durability

★★★★★

99.9999999% data reliability. Supports single-node Basic Edition instances to reduce costs.

★★★★★

99.9999999% data reliability. Supports single-node Basic Edition instances to reduce costs.

★★★★

A hardware failure may cause data corruption. A secondary database is required for protection. The SLA for High-availability Edition instances that use local disks can reach 99.995%.

## **Purchase suggestions**

We recommend that you prioritize ESSDs.

## Product support

For information about the storage types and features supported by each instance type, see:

-   [Overview of ApsaraDB RDS for MySQL features](/help/en/doc-detail/317704.html)
    
-   [PostgreSQL Feature Overview](/help/en/rds/rds-postgresql-database-features/)
    
-   [Overview of ApsaraDB RDS for SQL Server features](/help/en/rds/features-6/)
    
-   [Overview of ApsaraDB RDS for MariaDB features](/help/en/rds/apsaradb-rds-for-mariadb/features-1#concept-2350238)
    

## FAQ

[FAQ about storage space](/help/en/rds/support/faq-about-storage-capacity#concept-ecy-fl4-hhb)
