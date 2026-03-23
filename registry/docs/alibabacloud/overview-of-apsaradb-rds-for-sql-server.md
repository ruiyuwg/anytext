This topic provides an overview of ApsaraDB RDS for SQL Server and describes the related terms.

## Disclaimer

Some features or capabilities that are described in this topic may be unavailable. The specific terms and conditions in your commercial contract shall prevail. This topic serves as a user guide that is for reference only. Content in this topic is provided without warranty of any kind, expressed or implied.

## ApsaraDB RDS for SQL Server

ApsaraDB RDS supports the SQL Server database engine. ApsaraDB RDS for SQL Server is built on top of a high-availability architecture and supports the restoration of data to a specific point in time. These highlights enable ApsaraDB RDS for SQL Server to support various enterprise applications. In addition, ApsaraDB RDS for SQL Server includes **Microsoft-issued licenses**.

**Note**

The license for an ApsaraDB RDS for SQL Server instance is approved based on **the number of cores that are configured for the RDS instance**. You do not need to obtain a client access license.

For more information about the features that are supported by ApsaraDB RDS for SQL Server, see [Features](/help/en/rds/apsaradb-rds-for-sql-server/features#concept-2350232). The following table describes the advanced features.

**Feature**

**Description**

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-sql-server/configure-disk-encryption-for-an-apsaradb-rds-for-sql-server-instance#concept-2054813)

This feature encrypts the entire data disks of your RDS instance based on block storage. Your data cannot be accessed even if backup data leaks occur. This ensures your data security to the greatest extent. This feature does not interrupt your workloads. You can use the feature without the need to modify your application configurations.

[Transparent Data Encryption (TDE)](/help/en/rds/apsaradb-rds-for-sql-server/configure-tde-for-an-apsaradb-rds-for-sql-server-instance)

This feature performs real-time I/O encryption and decryption on data files. TDE encrypts sensitive data before the data is written to a disk and decrypts the data when the data is read from a disk to the memory. This prevents attackers from bypassing databases to read sensitive data from storage and improves the security of sensitive data in databases.

[Snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)

This feature provides faster restoration and supports a larger amount of backup data than the regular physical backup feature.

[Cross-region backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)

This feature automatically replicates backup files from the source region to the destination region. You can use this feature for regulatory compliance and disaster recovery.

[Read-only instance](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances)

If your database system receives a small number of write requests but a large number of read requests, your primary RDS instance may be overwhelmed by the read requests and your workloads may be interrupted. In this case, you can create one or more read-only RDS instances to offload read requests from the primary RDS instance. Read-only RDS instances help increase the read capability of your database system and the throughput of your application.

If the primary RDS instance meets specific requirements, the read-only RDS instances that are attached to the primary RDS instance can be initialized in a quick manner. This allows you to create a read-only RDS instances within minutes and does not affect the I/O performance of the primary RDS instance. For more information, see [Appendix: Introduction to fast initialization of read-only RDS instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-sql-server-instances#5f2c4b391ej5t).

[Read/write splitting](/help/en/rds/overview-of-read-or-write-splitting#concept-ptl-fl4-wdb)

After read-only RDS instances are created, you can enable the read-only routing endpoint and add the endpoint of the primary RDS instance and the read-only routing endpoint to your application. Your database system forwards write requests to the primary RDS instance and read requests to the read-only routing endpoint. Then, the read-only routing endpoint forwards the read requests to the read-only RDS instances based on the read weights of the read-only RDS instances.

[Instance parameter management](/help/en/rds/apsaradb-rds-for-sql-server/manage-instance-parameters-in-the-apsaradb-rds-console)

This feature allows you to modify the parameters of your RDS instance in the ApsaraDB RDS console or by calling API operations. You can also view the parameter modification history. This improves the O&M efficiency and user experience of the RDS instance.

[Data archiving to OSS](/help/en/rds/apsaradb-rds-for-sql-server/archive-data-to-an-oss-bucket)

This feature allows you to convert infrequently accessed online databases into cold storage databases on the Databases page of the ApsaraDB RDS console or by calling API operations. Cold data is stored in an OSS bucket at low costs. This helps separate hot data from cold data and reduce storage costs.

**Note**

-   To manage complex business, you can purchase a [support plan](https://www.alibabacloud.com/support/after-sales) to request support from enterprise instant messaging (IM) groups, technical account managers (TAMs), and service managers.
    
-   For more information about ApsaraDB RDS for SQL Server, visit the [ApsaraDB RDS for SQL Server product page](https://www.alibabacloud.com/product/apsaradb-for-rds-sql-server).
    

## Terms

-   instance: An RDS instance is a database process that consumes independent physical memory resources. You can specify a specific memory size, storage capacity, and database type for an RDS instance. The performance of an RDS instance varies based on the specified memory size. After an RDS instance is created, you can change its specifications or delete the instance.
    
-   database: A database is a logical unit that is created on an RDS instance. One RDS instance can have multiple databases. Each database must have a unique name on the RDS instance on which the database is created.
    
-   region and zone: Each region is a physical data center. Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and networks. For more information, see [Global infrastructure of Alibaba Cloud](https://www.alibabacloud.com/global-locations).
    

## General terms

**Term**

**Description**

on-premises database

A database that is deployed in a data center or a database that is not deployed on an ApsaraDB RDS instance.

ApsaraDB RDS for XX (XX represents one of the following database engines: MySQL, SQL Server, PostgreSQL, and MariaDB.)

ApsaraDB RDS with a specific database engine. For example, ApsaraDB RDS for SQL Server indicates an ApsaraDB RDS instance that runs SQL Server.

## **Getting started**

[Create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance)
