AliSQL is an independent MySQL branch that is developed by Alibaba Cloud. AliSQL provides all the features of MySQL. AliSQL also provides enterprise-grade features, such as backup and restoration, monitoring, performance optimization, and read-only instances. This topic outlines the features that are provided by AliSQL. This topic also provides a comparison between AliSQL and other MySQL versions.

## Introduction to AliSQL

AliSQL is an independent MySQL branch that is developed by Alibaba Cloud. AliSQL provides all the features of the MySQL Community Edition. AliSQL also provides some similar features that you can find in the MySQL Enterprise Edition. These similar features include enterprise-grade backup and restoration, thread pool, and parallel query. In addition, AliSQL provides Oracle-compatible features, such as the Sequence engine.

## Version support

**Category**

**Feature**

**Description**

**MySQL 8.0**

**MySQL 5.7**

**MySQL 5.6**

Functionality

[Native Flashback](/help/en/rds/apsaradb-rds-for-mysql/native-flashback#concept-2144202)

The native flashback feature lets you query or restore the data at a specified point in time by executing SQL statements. This way, you can obtain the historical data at your earliest opportunity after accidental operations.

Supported

Not supported

Not supported

[Thread Pool](/help/en/rds/apsaradb-rds-for-mysql/thread-pool#concept-1697903)

The thread pool feature separates threads from sessions. If many sessions are created on your ApsaraDB RDS for MySQL instance, the system can run a small number of threads to process the tasks in all active sessions.

Supported

Supported

Supported

[Statement Outline](/help/en/rds/apsaradb-rds-for-mysql/statement-outline#concept-1664234)

The statement outline feature allows the system to stably run query plans using optimizer hints and index hints. You can install the DBMS\_OUTLN package to use this feature.

Supported

Supported

Not supported

[Sequence Engine](/help/en/rds/apsaradb-rds-for-mysql/sequence-engine#concept-1697905)

The Sequence engine simplifies the generation of sequence values on your RDS instance.

Supported

Supported

Supported

[Returning](/help/en/rds/apsaradb-rds-for-mysql/returning#task-2315489)

The returning feature allows DML statements to return result sets. You can install the DBMS\_TRANS package to use this feature.

Supported

Not supported

Not supported

[EncDB](/help/en/rds/apsaradb-rds-for-mysql/always-confidential-database-public-preview/)

The always-confidential feature encrypts the data columns that you want to protect in your RDS instance. This prevents unauthorized users from accessing the plaintext of the protected data columns using software and tools on the cloud platform.

Not supported

Supported

Not supported

Performance

[Fast Query Cache](/help/en/rds/apsaradb-rds-for-mysql/fast-query-cache#concept-2460422)

The fast query cache is a query cache that is developed by Alibaba Cloud based on the native MySQL query cache. The fast query cache uses a new design and a new implementation mechanism to increase the query performance of your RDS instance.

Not supported

Supported

Not supported

[Binlog in Redo](/help/en/rds/apsaradb-rds-for-mysql/binlog-in-redo#task-2554699)

The Binlog in Redo feature allows the system to write binary logs to the redo log file when transactions are committed. This reduces the operations on the disk and increases the performance of your RDS instance.

Supported

Not supported

Not supported

[Statement Queue](/help/en/rds/apsaradb-rds-for-mysql/statement-queue#task-2315487)

The statement queue feature allows statements to queue in the same bucket. These statements may be executed on the same resources. For example, these statements are executed on the same row of a table. This feature reduces the overheads that are caused by potential conflicts.

Supported

Supported

Not supported

[Inventory Hint](/help/en/rds/apsaradb-rds-for-mysql/inventory-hint#concept-2381921)

The inventory hint feature can be used in combination with the returning feature and the statement queue feature to commit and roll back transactions at fast speeds. This increases the throughput of your application.

Supported

Supported

Supported

[Binlog Parallel Flush](/help/en/rds/apsaradb-rds-for-mysql/binlog-parallel-flush)

The Binlog Parallel Flush feature allows the system to write binary logs in parallel when transactions are committed. This reduces performance bottlenecks in high-concurrency scenarios and improves the write performance of your RDS instance.

Supported

Not supported

Not supported

Stability

[Faster DDL](/help/en/rds/apsaradb-rds-for-mysql/faster-ddl#task-2558080)

The faster DDL feature provides an optimized buffer pool management mechanism. This mechanism reduces the impact of DDL operations on the performance of your RDS instance. This mechanism also increases the number of concurrent DDL operations that are allowed.

Supported

Supported

Supported

[Statement Concurrency Control](/help/en/rds/apsaradb-rds-for-mysql/sql-throttling#concept-1663731)

The concurrency control (CCL) feature allows the system to control the concurrency of statements based on syntax rules. You can install the DBMS\_CCL package to use this feature.

Supported

Supported

Not supported

[Performance Agent](/help/en/rds/apsaradb-rds-for-mysql/performance-agent#concept-2426207)

The performance agent feature is provided as an extension for MySQL. This feature is used to calculate and analyze the performance metrics of your RDS instance.

Supported

Supported

Supported

[Purge Large File Asynchronously](/help/en/rds/apsaradb-rds-for-mysql/purge-large-file-asynchronously#task-1942041)

The Purge Large File Asynchronously feature allows the system to asynchronously delete files from your RDS instance. This ensures the stability of your RDS instance.

Supported

Supported

Supported

[Performance Insight](/help/en/rds/apsaradb-rds-for-mysql/performance-insight-1#task-1909611)

The performance insight feature supports load monitoring, association analysis, and performance optimization at the instance level. You can evaluate the loads on your RDS instance and resolve performance issues. This increases the stability of your RDS instance.

Supported

Supported

Not supported

[Commit optimization for large transactions](/help/en/rds/apsaradb-rds-for-mysql/binlog-cache-free-flush)

The binlog cache free flush feature is supported. This feature optimizes the commitment of large transactions to prevent excessive latencies in writing binary logs, prevents your RDS instance from becoming unresponsive, and ensures that your RDS instance remains stable and writable.

Supported

Not supported

Not supported

High security

[Recycle Bin](/help/en/rds/apsaradb-rds-for-mysql/recycle-bin#concept-1680887)

The recycle bin feature allows the system to temporarily store deleted tables. It also lets you specify a retention period within which you can retrieve the deleted tables. You can install the DBMS\_RECYCLE package to use this feature.

Supported

Not supported

Not supported

## Features

**Category**

**Feature**

**MySQL Community Edition**

**Enterprise Edition**

**AliSQL (MySQL 5.7 and MySQL 8.0)**

**ApsaraDB RDS for MySQL**

Enterprise-grade value-added services

[24/7 support](https://www.alibabacloud.com/zh/services/list)

Not supported

✓

✓

✓

[Emergency troubleshooting](https://www.alibabacloud.com/zh/services/list)

Not provided

✓

✓

✓

[Expert support](https://www.alibabacloud.com/zh/services/list)

Not supported

✓

✓

✓

MySQL features

[MySQL Database Server](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb)

✓

✓

✓

✓

MySQL Connectors

✓

✓

Supported for public versions

Supported for public versions

MySQL Replication

✓

✓

✓

✓

MySQL Router

✓

✓

MaxScale supported for MySQL 8.0

Single-tenant database proxy

MySQL Partitioning

✓

✓

✓

✓

[Storage Engine](/help/en/doc-detail/148660.html#concept-2377809)

InnoDB

MyISAM

NDB

InnoDB

MyISAM

NDB

InnoDB

X-Engine

InnoDB

X-Engine

Oracle Compatibility

[Sequence Engine](/help/en/rds/apsaradb-rds-for-mysql/sequence-engine#concept-1697905)

Not provided

Not provided

Supported for MySQL 8.0

Supported for MySQL 8.0

MySQL Enterprise Monitor

[Enterprise Dashboard](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance#concept-sp4-jgl-jgb)

Not provided

✓

Under development

Enhanced Monitor

[Query Analyzer](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb)

Not supported

✓

Under development

Performance Insight

[Replication Monitor](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance#concept-sp4-jgl-jgb)

Not provided

✓

Under development

✓

[Enhanced OS Metrics](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance#concept-sp4-jgl-jgb)

Not supported

Not provided

Not supported

Enhanced Monitor

MySQL Enterprise Backup

[Hot backup for InnoDB](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb)

Not provided

✓

✓

✓

[Full, Incremental, Partial, Optimistic Backups](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb)

Not supported

✓

✓

Database- and table-level backup supported

[Full, Partial, Selective, Hot Selective restore](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb)

Not supported

✓

✓

Database- and table-level restoration supported

[Point-In-Time-Recovery](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb)

Not available

✓

✓

✓

[Cross-Region Backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443)

Not supported

Not supported

Not supported

Cross-region backup supported

[Recycle bin](/help/en/rds/apsaradb-rds-for-mysql/recycle-bin#concept-1680887)

Not provided

Not supported

Supported for MySQL 8.0

Supported for MySQL 8.0

[Flashback](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb)

Not supported

Not provided

✓

✓

MySQL Enterprise Security

[Enterprise TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#concept-jrp-dw4-ydb)

Local key replacement supported

✓

BYOK-based TDE and key rotation supported

BYOK-based TDE and key rotation supported

[Enterprise Disk Data Encryption at Rest](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#concept-jrp-dw4-ydb)

Not supported

Not supported

Not supported

BYOK-based disk encryption supported

[Enterprise Encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb)

SSL

✓

SSL

SSL

[SQL Explorer](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb)

Not supported

✓

️SQL Insights

SQL Insights

SM4 encryption algorithm

Not provided

Not supported

✓

✓

[EncDB](/help/en/rds/apsaradb-rds-for-mysql/always-confidential-database-public-preview/)

Not supported

Not supported

Supported for MySQL 5.7

Supported for MySQL 5.7

MySQL Enterprise Scalability

[Thread Pool](/help/en/rds/apsaradb-rds-for-mysql/thread-pool#concept-1697903)

Not provided

✓

Supported for MySQL 8.0

Supported for MySQL 8.0

[Enterprise Readonly Request Extention](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb)

Not provided

Not supported

✓

Read-only instances supported

MySQL Enterprise Reliability

[Statement Outline](/help/en/rds/apsaradb-rds-for-mysql/statement-outline#concept-1664234)

Not supported

Not supported

✓

✓

[Inventory Hint](/help/en/rds/apsaradb-rds-for-mysql/inventory-hint#concept-2381921)

Not provided

Not supported

✓

✓

[Statement Concurrency Control](/help/en/rds/apsaradb-rds-for-mysql/sql-throttling#concept-1663731)

Not supported

Not available

✓

✓

[Hot SQL Firewall](/help/en/rds/product-overview/high-security#concept-rvl-gy5-tdb)

Not supported

Not supported

✓

✓

MySQL Enterprise High-Availability

[Enterprise Automatic Failover Switch](/help/en/rds/product-overview/high-availability-and-disaster-recovery#concept-c3s-4y5-tdb)

Not provided

Not provided

Third-party high-availability mechanism required

RDS High-availability Edition

[Multi-Source Replication](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb)

✓

✓

✓

Highly available read-only instances supported

## **References**

-   [Lifecycles of major engine versions](/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description)
    
-   [Release notes for AliSQL](/help/en/rds/apsaradb-rds-for-mysql/release-notes-for-alisql)
