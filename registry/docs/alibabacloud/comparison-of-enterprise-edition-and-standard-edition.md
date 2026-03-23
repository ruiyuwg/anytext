PolarDB for MySQL Enterprise Edition and Standard Edition are different in the following features: cluster management, scaling, high performance, backup and restoration, high availability, high security, connection management, cost-effectiveness, monitoring and optimization, DB for AI, and data migration and synchronization. This topic describes the differences between the two editions in the preceding features to help you choose the edition that best suits your business requirements.

## **Feature differences**

**Category**

**Feature**

**Description**

**Enterprise Edition**

**Standard Edition**

Cluster management

x86 architecture

The x86 architecture is paired with Intel processors and complemented by high-performance network infrastructure. The architecture delivers a comprehensive enhancement in overall performance and stability to meet the demanding requirements of enterprise-level applications that require high stability and computing power.

Supported

Supported

YiTian ARM architecture

The ARM architecture uses YiTian 710 chips that are developed by Alibaba Cloud and 25 Gigabit Ethernet smart network interface cards (NICs) to provide strong computing power.

Not supported

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.1.

Cluster Edition clusters that contain one primary node and multiple read-only nodes

PolarDB uses a distributed cluster architecture. A Cluster Edition cluster contains one primary node and up to 15 read-only nodes. The database engine layer consists of multiple nodes. The primary node processes read and write requests, and the read-only nodes process only read requests. Cluster Edition uses the active-active failover method between the primary node and read-only nodes. This method ensures the high availability of databases.

Up to 15 read-only nodes

Up to 7 read-only nodes

[Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-edition-database-or-table)

PolarDB for MySQL Multi-master Cluster (Limitless) Edition clusters are developed based on a multi-master architecture that contains multiple primary nodes and read-only nodes. To improve the overall concurrent read and write capabilities of such clusters, the architecture supports concurrent data writes to databases from different compute nodes and allows you to dynamically switch the primary nodes of the databases within seconds.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Not supported

[GDN](/help/en/polardb/polardb-for-mysql/user-guide/global-database-network/)

A global database network (GDN) consists of multiple PolarDB clusters that are deployed in multiple regions within a country. Data is replicated across all clusters in a GDN. Each cluster in the GDN processes read requests and provides geo-disaster recovery capabilities. Write requests may be forwarded to the primary cluster.

Supported

Not supported

[X-Engine Edition](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition)

X-Engine Edition is developed by Alibaba Cloud based on the log-structured merge-tree (LSM tree) architecture. X-Engine Edition provides powerful data compression capabilities that allow you to use archive databases at low costs. X-Engine Edition uses the LSM-tree architecture and the Zstandard (ZSTD) data compression algorithm to increase the data compression ratio. Compared with InnoDB, X-Engine Edition can reduce storage usage by up to 70%.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

[Cluster recycle](/help/en/polardb/polardb-for-mysql/user-guide/pricing-2)

The cluster recycle bin stores released PolarDB clusters. You can restore a released cluster in the cluster recycle bin to a new cluster, or delete backup sets of the released cluster.

Supported

Supported

[Parameter management](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters)

After you create a PolarDB cluster, you can modify the parameters and nodes of the cluster in the PolarDB console and export the modified parameters as a template. You can apply the template to clusters that are deployed in the same region for easy parameter modification.

Supported

Supported

[Version management](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version)

The architecture of a PolarDB cluster consists of the following layers: PolarProxy, the database engine, and the distributed storage. You can individually update PolarProxy or the database engine or update them together.

Supported

Supported

Scaling

[Add or remove read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes)

After you create a PolarDB cluster, you can manually add read-only nodes that have the required specifications or remove read-only nodes that you no longer require.

Supported

Supported

[Specification change](/help/en/polardb/polardb-for-mysql/user-guide/overview-1)

You can change the specifications of a PolarDB cluster online without the need to lock the cluster. The cluster specification change feature supports the following types of scaling: scale-up or scale-down of computing power, scale-in or scale-out of computing power, and scale-in or scale-out of storage.

Supported

Supported

[Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview)

Serverless clusters enable resource scaling depending on your workloads and free you from complex resource evaluation and O&M.

Supported

Supported

High performance

[IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29)

PolarDB for MySQL releases the In-Memory Column Index (IMCI) feature suitable for online analytical processing (OLAP) scenarios that involve a large amount of data and complex queries. PolarDB for MySQL provides the IMCI feature to create a one-stop hybrid transaction/analytical processing (HTAP) solution that implements integrated real-time transaction processing and data analysis capabilities. PolarDB for MySQL allows you to use only one system to meet the requirements of online transaction processing (OLTP) and OLAP scenarios.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

[ePQ](/help/en/polardb/polardb-for-mysql/user-guide/overview-22)

The elastic parallel query (ePQ) feature supports two parallel engines: single-node elastic parallel query and multi-node elastic parallel query. Single-node elastic parallel query is equivalent to the original parallel query feature. Multi-node elastic parallel query supports adaptive scheduling across nodes in a cluster.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.1.

[Optimizations of SQL queries](/help/en/polardb/polardb-for-mysql/user-guide/query-rewrite/)

PolarDB supports multiple methods to optimize SQL queries such as subquery decorrelation, left join elimination, join condition pushdown, cost-based query transformation, computing pushdown, Partial Result Cache (PTRC), and IN predicate conversion.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

[Execution optimization of SQL DDL statements](/help/en/polardb/polardb-for-mysql/user-guide/optimization-of-ddl-execution/)

PolarDB supports the following methods to optimize the execution of DDL statements: instant ADD COLUMN, parallel DDL, DDL I/O performance optimization, faster TRUNCATE/DROP TABLE, nonblocking DDL, DDL physical replication optimization, async metadata lock replication, prevention of long-running transactions on read-only nodes from blocking DDL operations, preemptible DDL, and viewing of the execution status of DDL statements and metadata locks.

Supported

Supported

[High concurrency optimization](/help/en/polardb/polardb-for-mysql/user-guide/high-concurrency-optimization/)

PolarDB supports the following optimization capabilities for high-concurrency scenarios: Concurrency Control (CCL), inventory hints, statement queue, and hot row optimization.

Supported

Supported

[Transaction system optimization](/help/en/polardb/polardb-for-mysql/user-guide/overview-40)

PolarDB for MySQL provides a new transaction system named PolarTrans, which uses Commit Timestamp Store (CTS) to improve the read and write performance of databases in highly concurrent OLTP scenarios. PolarTrans uses the existing network infrastructure and works together with the Remote Direct Memory Access (RDMA) technology to provide the global consistency (high-performance mode) feature.

Supported

Supported

**Note**

This feature is supported only when the storage class is PSL4 of PSL5.

[Partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-46)

PolarDB partitioned tables are fully compatible with the syntax and features of the native MySQL. PolarDB partitioned tables provide higher performance than the native MySQL, and support more partition types and combinations. This way, you can use partitioned tables in a convenient, easy, and efficient manner.

Supported

Supported

Backup and restoration

[Backup and restoration](/help/en/polardb/polardb-for-mysql/user-guide/overview-72)

PolarDB supports data backup and physical log backup. Data backup is the process of creating a backup set of all data in a cluster at a specific point in time. A data backup is a full backup. Log backup is the process of recording the new data after a backup set is created. A log backup is an incremental backup. You can restore your PolarDB cluster or a specific table in your cluster to any point in time by using a full data backup set and the redo logs generated after the backup set is created.

Supported

Supported

[Flashback query](/help/en/polardb/polardb-for-mysql/user-guide/flashback-queries)

PolarDB for MySQL allows you to use the flashback query feature to retrieve data from clusters, databases, and tables as the data was generated at a past point in time in an efficient manner.

Supported

Supported

[Database and table restoration](/help/en/polardb/polardb-for-mysql/overall-process-and-estimated-time)

The database and table restoration feature of PolarDB does not overwrite or delete existing databases or tables in the cluster, or directly write data to existing databases or tables in the cluster. The feature creates new databases or tables in the cluster. You can specify new database names or table names during a restoration process to restore backup data from db1 to db2.

Supported

Supported

High availability

Single-zone high availability

The multi-node architecture ensures the high availability of PolarDB clusters. When the primary node in a cluster fails, the cluster can automatically fail over to a read-only node. Then, the read-only node serves as the new primary node.

Supported

Supported

[Multi-zone high availability](/help/en/polardb/polardb-for-mysql/user-guide/multi-zone-deployment)

PolarDB for MySQL allows you to deploy a cluster across multiple zones. Compared with single-zone clusters, multi-zone clusters can enhance disaster recovery capabilities and withstand data center-level faults. You can deploy a cluster across multiple zones and change the primary zone.

Supported

Supported

[Failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/overview-28)

PolarDB provides the failover with hot standby feature. You can enable hot standby for the read-only nodes in your cluster to improve the failover speed and implement transaction status preservation.

Supported

Supported

High security

[Account management](/help/en/polardb/polardb-for-mysql/user-guide/overview-21)

You can manage Alibaba Cloud console accounts and database accounts.

Supported

Supported

[Cluster whitelists](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist)

After you create a PolarDB for MySQL cluster, you must configure IP whitelists for the cluster, and create an account used to log on to the cluster. Only IP addresses in the IP whitelists or Elastic Compute Service (ECS) instances in the security groups of the cluster can access the cluster.

Supported

Supported

[SSL encryption for transmission links](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption)

To improve the security of data transmission, you must enable SSL encryption and install SSL certificates that are issued by certificate authorities (CAs) to the required applications. SSL is used to encrypt connections at the transport layer and enhance the security and integrity of the transmitted data. However, SSL encryption increases the round-trip time.

Supported

Supported

[TDE](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster)

Transparent data encryption (TDE) allows you to perform real-time I/O encryption and decryption on data files. Data is encrypted before it is written to the disk and is decrypted when it is read from the disk to the memory. After you enable TDE for your cluster, the size of data files in your cluster does not increase. You can use TDE without the need to modify the configurations of your application.

Supported

Supported

[SQL firewall](/help/en/polardb/polardb-for-mysql/user-guide/overview-47)

PolarDB PolarProxy provides the SQL firewall feature. This feature can identify SQL statements to be allowed and blocked after you configure blacklist and whitelist rules.

Supported

Supported

[Dynamic data masking](/help/en/polardb/polardb-for-mysql/user-guide/overview-55)

If you want to authorize third parties to generate reports, analyze data, perform development and test activities, or perform other database-related operations, you may need to obtain the latest customer data from databases in the production environment in real time. To avoid disclosing personal information, data must be masked before it is provided to third parties.

Supported

Supported

[PolarDB Always-confidential](/help/en/polardb/polardb-for-mysql/user-guide/overview-6)

PolarDB for MySQL provides the PolarDB Always-confidential feature to implement strong data security by using end-to-end encryption. Data is encrypted on the user side before being sent to the database management system, making the plaintext data invisible to the database server.

Supported

Supported

Connection management

[Connection pool](/help/en/polardb/polardb-for-mysql/user-guide/connection-pools)

PolarDB supports session-level connection pools and transaction-level connection pools. You can select a connection pool type based on your business requirements. Connection pools help reduce the database connection overheads by eliminating the need to repeatedly establish a large number of connections.

Supported

Supported

[Persistent connection](/help/en/polardb/polardb-for-mysql/user-guide/persistent-connections)

PolarDB supports the persistent connection feature to prevent temporary service interruptions or connection failures. The issues can be caused by O&M activities, such as specification upgrades, switchovers, and minor version updates. The issues can also be caused by anomalies such as server malfunctions. Persistent connections can improve the high availability of PolarDB.

Supported

Supported

[Consistency levels](/help/en/polardb/polardb-for-mysql/user-guide/consistency-levels)

PolarDB provides three consistency levels to meet different consistency requirements. The three consistency levels are eventual consistency, session consistency, and global consistency.

Supported

Supported

[Global consistency (high-performance mode)](/help/en/polardb/polardb-for-mysql/user-guide/scc)

PolarDB for MySQL provides global consistency (high-performance mode). PolarTrans uses CTS and RDMA to provide global consistency (high-performance mode) at the kernel level. This ensures that strong consistency is implemented for all read requests that are forwarded to any read-only nodes in your cluster.

Supported

Supported

**Note**

This feature is supported only when the storage class is PSL4 of PSL5.

Cost-effectiveness

[Cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/overview-cold-data)

PolarDB for MySQL allows you to archive cold data that is rarely updated, added, modified, or read to Object Storage Service (OSS). This greatly reduces data storage costs.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

[Data compression](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition)

X-Engine Edition is developed by Alibaba Cloud based on the LSM-tree architecture. X-Engine Edition provides powerful data compression capabilities that allow you to use archive databases at low costs.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

[OSS foreign table](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-foreign-tables-to-access-oss-data)

PolarDB for MySQL allows you to archive cold data that is rarely updated, added, modified, or read to OSS. This greatly reduces data storage costs.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Monitoring and optimization

[Diagnosis](/help/en/polardb/polardb-for-mysql/user-guide/diagnosis)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of Database Autonomy Service (DAS) and provides various features to view the diagnostics and optimization results of databases. The features include autonomy center, session management, real-time monitoring, storage analysis, deadlock analysis, diagnostic reports, and performance insight.

Supported

Supported

[Autonomy center](/help/en/polardb/polardb-for-mysql/user-guide/autonomy-center)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS and allows you to use the autonomy center to enable the autonomy service. After the autonomy service is enabled, DAS automatically performs root cause analysis, provides suggestions, and then performs optimizations and fixes issues when an exception occurs in a database. Optimizations are allowed based on your authorization.

Supported

Supported

[Session management](/help/en/polardb/polardb-for-mysql/user-guide/session-management)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS and allows you to use the session management feature to view the session statistics of a cluster.

Supported

Supported

[Real-time monitoring](/help/en/polardb/polardb-for-mysql/user-guide/real-time-monitoring)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS and allows you to use the real-time monitoring feature to obtain the QPS, TPS, and network traffic of a cluster.

Supported

Supported

[Spatial analysis](/help/en/polardb/polardb-for-mysql/user-guide/storage-analysis)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS. The storage analysis feature allows you to view the storage overview for a cluster. For example, you can view the number of available days of storage, the status of tablespace usage, fragmentation percentage, and exception analysis results.

Supported

Supported

[Deadlock analysis](/help/en/polardb/polardb-for-mysql/user-guide/deadlock-analysis)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS and allows you to use the deadlock analysis feature to analyze the most recent deadlock on a database and check the analysis details.

Supported

Supported

[Diagnostic reports](/help/en/polardb/polardb-for-mysql/user-guide/diagnostic-reports)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS and allows you to customize the creation conditions for diagnostic reports and view diagnostic reports.

Supported

Supported

[Performance insight](/help/en/polardb/polardb-for-mysql/user-guide/performance-insight-new)

The diagnosis feature provided by PolarDB for MySQL integrates specific features of DAS. You can use the performance insight (new) feature to aggregate the statistics on SQL statements, rapidly evaluate the workloads in your cluster, identify the root causes of performance issues, and seek appropriate solutions. This improves the stability of your cluster.

Supported

Supported

[Performance monitoring](/help/en/polardb/polardb-for-mysql/user-guide/view-performance-monitoring-data)

The PolarDB console allows you to monitor various performance metrics and view monitoring data at intervals of seconds. You can monitor the status of your cluster and identify faults based on the monitoring data.

Supported

Supported

[Slow SQL query](/help/en/polardb/polardb-for-mysql/user-guide/slow-sql-query)

PolarDB for MySQL provides the slow SQL analysis feature. The feature allows you to view slow log trends and statistics. You can also obtain the diagnostic results and suggestions on how to fix slow SQL queries.

Supported

Supported

[SQL Explorer and Audit](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit)

The SQL Explorer feature in PolarDB for MySQL is upgraded to the SQL Explorer and Audit feature. The SQL Explorer and Audit feature is provided by DAS. The feature is developed based on the full request feature and the security audit feature. The feature also integrates the following features: search, SQL Explorer, security audit, and traffic playback and stress test. The feature helps you obtain information about the SQL statements that are executed. You can use the information to troubleshoot various performance issues and identify the sources of high risks.

Supported

Supported

DB for AI

[PolarDB for AI](/help/en/polardb/polardb-for-mysql/user-guide/overview-41)

PolarDB for AI leverages various MLOps and built-in models to make PolarDB a one-stop database service that integrates data, features, and models.

Supported

**Note**

This feature is supported only for PolarDB for MySQL 8.0.

Not supported

Data migration and synchronization

[Migration of data from an ApsaraDB RDS instance to a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/overview-43)

You can migrate data from an ApsaraDB RDS instance to a PolarDB cluster without endpoint changes.

Supported

Supported

[Migration of data from a self-managed MySQL database to a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-from-a-self-managed-mysql-database-to-a-polardb-for-mysql-cluster)

You can migrate data from a self-managed MySQL database to a PolarDB cluster.

Supported

Supported
