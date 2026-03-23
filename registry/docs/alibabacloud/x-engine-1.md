This topic describes the benefits, architecture, and scenarios of PolarDB X-Engine Edition.

## Challenges and requirements for archiving historical data

-   Challenges
    
    In most cases, new data is read or updated more frequently than historical data. Historical data such as messages or orders generated one year ago is seldom accessed. A large volume of data that is not often accessed or never accessed is stored in your database system as your business develops. This can cause the following issues:
    
    -   Historical data and new data are stored in the same database system. This can result in insufficient disk space.
        
    -   A large volume of data shares the memory, cache space, and disk IOPS resources of the database system. This can deteriorate the database performance.
        
    -   The operation to back up a large volume of data requires a long period of time and can fail. Even if the operation is successful, the storage of the backup files is an issue that needs to be solved.
        
    
    These issues can be resolved by archiving historical data. Historical data can be stored as files by using low-cost storage services, such as Object Storage Service (OSS) or Database Backup (DBS). In real business scenarios, historical data is not completely static. Historical data generated multiple months or years ago may be queried or updated in real time or occasionally. For example, historical data such as historical orders in Taobao or Tmall, historical messages in DingTalk, and historical Cainiao logistics orders can be queried within Alibaba Group.
    
-   Requirements
    
    To resolve the issues related to the reads and updates of historical data, X-Engine Edition can be used as a separate database to store only archived data. X-Engine Edition must meet the following requirements:
    
    -   It must provide a large storage capacity to save online data that is continuously generated. This way, you do not need to worry about the storage capacity.
        
    -   X-Engine Edition must provide the same interfaces as your online databases. For example, the archive database must support MySQL protocols in the same manner as the online databases. This ensures that your applications can access the online databases and X-Engine Edition and no modifications of your code are required.
        
    -   It must be cost-efficient. For example, you can compress data to reduce the consumed disk space and use low-cost storage media to store large volumes of data.
        
    -   It must provide read and write capabilities that meet the requirements of low-frequency reads and writes.
        
    

MySQL fails to provide a solution that meets all of the previous requirements, though MySQL is the most widely used open source database system in the world. Engines such as TokuDB and MyRocks provide high compression ratios. However, the volume of data that can be stored by using one of these engines is limited by the disk capacity of each physical machine.

## Solution: PolarDB X-Engine Edition

To address the preceding challenges and meets the requirements for storing archived data, PolarDB X-Engine Edition provides features that are developed based on the following technological innovations and breakthroughs:

-   X-Engine Edition is developed by Alibaba Cloud based on the log-structured merge-tree (LSM tree) architecture. X-Engine Edition provides powerful data compression capabilities that allow you to use archive databases at low costs. X-Engine Edition uses the LSM tree and the Zstandard (ZSTD) data compression algorithm to increase the data compression ratio. Compared with InnoDB, X-Engine Edition can reduce storage usage by up to 70%. For more information about X-Engine Edition, see [Introduction to X-Engine](/help/en/doc-detail/148660.html#concept-2377809). X-Engine Edition has limits, especially in terms of the compatibility with MySQL. For more information, see [Usage notes](/help/en/polardb/polardb-for-mysql/user-guide/instructions-for-use-x-engine#section-muz-tf4-sbh).
    
-   PolarDB supports online expansion of the storage capacity based on shared distributed storage. PolarDB connects computing resources and storage resources over a high-speed network and transmits data by using the remote direct memory access (RDMA) protocol. This eliminates the bottleneck of I/O performance. X-Engine Edition integrated in PolarDB provides these benefits.
    
    X-Engine Edition is integrated in PolarDB by using the following technological innovations. This enables PolarDB to run in a dual-engine architecture.
    
    -   The write-ahead logging (WAL) log streams of X-Engine Edition are combined with the redo log streams of InnoDB. This way, the same log streams and transmission channels are used to support InnoDB and X-Engine Edition. The management logic and the logic of interaction with the shared storage remain unchanged. This architecture can be reused by other engines that are introduced later.
        
    -   The I/O module of X-Engine Edition is adapted to Polar File System (PFS) of PolarDB InnoDB. This ensures that InnoDB and X-Engine Edition use the same distributed storage. Backups are accelerated based on the underlying distributed storage.
        

## Compute node architecture of X-Engine Edition

An X-Engine Edition cluster consists of one primary node and multiple read-only nodes. The primary node processes read and write requests. The cluster supports the dedicated and general-purpose specifications.

The multi-node architecture of X-Engine Edition ensures the high availability of PolarDB clusters. When the primary node in a cluster fails, the cluster can automatically fail over to a read-only node. Then, the read-only node serves as the new primary node. This ensures that the service availability is at least 99.99%. The following figure shows the multi-node architecture of X-Engine Edition.![多节点架构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8317530561/p359107.png)

## Benefits

-   X-Engine Edition provides a large storage capacity. Based on the 200-TB storage capacity and the compression capability, X-Engine Edition can store more than 500-TB raw data. X-Engine Edition uses a serverless architecture so that the storage capacity can automatically increase as the data volume increases. This way, you do not need to specify the storage capacity when you purchase a PolarDB cluster. You are charged for the actual storage capacity that you use.
    
-   PolarDB X-Engine Edition supports the official MySQL protocols. Compared to other solutions that back up historical data to NoSQL services such as HBase, X-Engine Edition allows applications to access online databases and X-Engine Edition without the need to modify the code.
    
-   X-Engine Edition uses the backup capability provided by the underlying distributed storage of PolarDB to back up a large volume of data in a short period. The backup files can be uploaded to and permanently stored in low-cost storage services, such as OSS.
    
-   The multi-node architecture of X-Engine Edition provides powerful data compression capabilities to reduce storage costs and ensure high availability of clusters. When the primary node in a cluster fails, the cluster can automatically fail over to a read-only node. Then, the read-only node serves as the new primary node. This ensures that the service availability is at least 99.99%.
    
-   The sysbench testing results show that this dual-engine storage mode causes only 20% performance deterioration compared with the single-engine mode. If your cluster has a large amount of data, such as hundreds of GBs or TBs, you can enable X-Engine Edition to slightly reduce the cluster performance in exchange for significant cost savings.
    

## Scenarios

PolarDB X-Engine Edition provides a large amount of storage capacity and can be used to store the historical data of multiple services. This ensures centralized storage and management for all historical data. X-Engine Edition is suitable for the following scenarios:

-   PolarDB X-Engine Edition is used to store the cold data of self-managed databases offline. The self-managed databases can be MySQL, TiDB, PostgreSQL, SQL Server, or other relational databases.
    
-   PolarDB X-Engine Edition is used to store the archived data for ApsaraDB RDS for MySQL or PolarDB for MySQL. You can migrate the historical data that is not often accessed to PolarDB for MySQL X-Engine Edition. This way, the storage space of online databases can be released to reduce costs and improve performance.
    
-   PolarDB X-Engine Edition is used as a relational database service that provides a large amount of storage capacity. This is applicable to scenarios in which a large volume of data needs to be written but the data is accessed at a low frequency, such as monitoring logs.
    

You can use Data Transmission Service (DTS) to continuously migrate data from the online databases to PolarDB X-Engine Edition in real time. You can also use Data Management (DMS) to periodically import online data to PolarDB X-Engine Edition. For more information about DTS and DMS, see [What is Data Transmission Service?](/help/en/dts/product-overview/what-is-data-transmission-service#concept-1917748) and [What is DMS?](/help/en/dms/product-overview/what-is-dms#task-1919582)

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459119061/p202946.png)

## Supported versions

The kernel version of your cluster meets one of the following requirements::

-   MySQL 8.0.1 whose revision version is 8.0.1.1.31 or later;
    
-   MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.
    

## Node specifications and pricing

X-Engine Edition supports the **General-purpose** and **Dedicated** specifications. For more information, see [Compute node specifications of PolarDB for MySQL Enterprise Edition](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes#concept-2035312).

For more information about the pricing of **X-Engine Edition**, see [Pay-as-you-go prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-pay-as-you-go-compute-nodes#concept-2035314).
