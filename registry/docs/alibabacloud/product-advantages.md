This topic describes the benefits of PolarDB.

## **Ecosystem compatibility**

**Ecosystem**

**Description**

MySQL

-   PolarDB for MySQL
    
    -   Fully compatible with open source MySQL and ApsaraDB RDS for MySQL
        
-   PolarDB-X
    
    -   Standard Edition: [Fully compatible with MySQL](/help/en/polardb/polardb-for-xscale/mysql-compatibility#62778bfd6e0t2).
        
    -   Enterprise Edition: [Highly compatible with MySQL](/help/en/polardb/polardb-for-xscale/mysql-compatibility#d72f3bc7eauwr).
        

PostgreSQL

PolarDB for PostgreSQL is fully compatible with PostgreSQL 11 and PostgreSQL 14. You can use PolarDB for PostgreSQL in the same way that you use PostgreSQL.

Oracle

PolarDB for PostgreSQL (Compatible with Oracle) is highly compatible with Oracle syntax. The share everything architecture is used to support common features of Oracle databases. The structure that is used by PolarDB for PostgreSQL (Compatible with Oracle) to organize files is the same as the structure that is used by Oracle. PolarDB for PostgreSQL (Compatible with Oracle) supports the common Oracle syntax, the multiversion concurrency control (MVCC) feature, and the native Oracle Call Interface (OCI). This way, you can migrate data from an Oracle database to a PolarDB for PostgreSQL (Compatible with Oracle) cluster in a few clicks. For more information, see [High compatibility](/help/en/polardb/polardb-for-oracle/high-compatibility).

## **High elasticity**

**Feature**

**Description**

Serverless

PolarDB for MySQL and PolarDB for PostgreSQL support the serverless billing method.

The serverless model provides dynamic and elastic resource scaling capabilities and a multi-node architecture for high-availability. The model supports extensive on-demand scaling that allows a single cluster to seamlessly scale from 0 to 1000 cores within seconds. This capability allows clusters to proficiently handle unexpected surges in workload demand to ensure smooth and uninterrupted business operations. For more information, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview).

Scaling within minutes

PolarDB for MySQL and PolarDB for PostgreSQL uses an architecture in which storage is decoupled from computing, and combines container virtualization and shared storage. This way, you can add or delete nodes within minutes. The storage capability is automatically scaled up. During the scale-up process, your services are not interrupted.

## **Cost-effectiveness**

**Feature**

**Description**

Flexible billing

PolarDB supports multiple billing methods. You can choose a billing method that suits your business requirements and minimizes costs.

-   For short-term use, we recommend that you choose the pay-as-you-go billing method. You can release your clusters when you no longer need them to stop further costs.
    
-   For long-term use, we recommend that you choose the subscription billing method. Longer subscription periods typically offer larger savings.
    
-   PolarDB supports the [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview) billing method. Serverless is suitable for users who have intermittent scheduled tasks and fluctuating or unpredictable workloads. If you select the serverless billing method for your cluster, PolarDB automatically scales the computing resources and expands the storage capacity based on your business requirements. This prevents idle resources and reduces instance O&M costs.
    

Pay-as-you-go storage space

PolarDB supports the pay-as-you-go billing method for storage space. You are charged only for the storage space that is used.

Smart-SSD

[Smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb) offers a high compression ratio that can reduce storage costs by 40% without affecting read/write performance.

Shared storage

Multiple nodes of a PolarDB cluster share one set of data. Each compute node does not need to store the same set of data. You are charged only for the compute nodes when you scale out the cluster. This significantly reduces your storage costs.

PolarProxy

PolarDB provides PolarProxy, which is a free proxy service, to manage all requests from applications to databases. PolarProxy is easy to use and maintain and delivers high availability and high performance. It supports advanced features such as automatic read/write splitting, load balancing, consistency levels, connection pool, and overload protection. For more information about PolarProxy for PolarDB for MySQL, see [PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/polarproxy-enterprise-edition-2).

Cold data archiving

PolarDB provides the cold data archiving feature. You can use this feature to archive data that is infrequently accessed and rarely updated to Object Storage Service (OSS). This can significantly reduce data storage costs. For more information about the cold data archiving feature for PolarDB for MySQL, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-cold-data).

## **High performance**

**Feature**

**Description**

Transaction and analysis performance

-   PolarDB for MySQL
    
    -   [OLTP](/help/en/polardb/polardb-for-mysql/oltp-performance/): The database engine that PolarDB uses has been optimized upon the open source engines. PolarDB also leverages capabilities like physical replication, Remote Direct Memory Access (RDMA), and shared distributed storage to deliver six times the performance of open source MySQL databases.
        
    -   [OLAP](/help/en/polardb/polardb-for-mysql/olap-performance/): PolarDB provides lightweight analysis acceleration capabilities such as [Elastic parallel query](/help/en/polardb/polardb-for-mysql/user-guide/elastic-parallel-query/) and [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). The analysis performance is increased by 400 times.
        
-   PolarDB for PostgreSQL
    
    -   PolarDB for PostgreSQL adopts leading hardware technologies, including the NVMe SSDs, and RDMA over Converged Ethernet (RoCE). The read-ahead, pre-extension, and rel\_size\_cache features are provided to reduce the number of I/O reads and writes and improve transaction performance. For more information, see [Performance White Paper](/help/en/polardb/polardb-for-postgresql/performance-white-paper-3/).
        
-   PolarDB-X
    
    -   PolarDB-X provides the clustered columnar index (CCI) feature. By default, a row-oriented table in PolarDB-X has primary key indexes and secondary indexes. A CCI is a secondary index that is built on top of a column-oriented structure and is valid for all columns in a row-oriented table. A table can contain both row-oriented data and column-oriented data. In addition, cost-based optimizers and vectorized operators are developed for HTAP, and a set of SQL engines is used to support HTAP. For more information, see [Performance White Paper](/help/en/polardb/polardb-for-xscale/performance-white-paper/).
        

Parameter optimization

All parameters that are used in PolarDB have been practiced and optimized by database experts of Alibaba Cloud. This ensures that the PolarDB cluster runs at its optimal configuration. PolarDB for MySQL provides the [High-performance parameter templates](/help/en/polardb/polardb-for-mysql/user-guide/high-performance-parameter-templates) feature that allows you to modify parameters to improve performance.

High-speed access

PolarDB can be used with other services that reside in the same region and communicate over an internal network. This reduces network latency, improves access speed, and saves Internet traffic fee.

Global consistency (high-performance mode)

PolarDB for MySQL provides the global consistency (high-performance mode) feature. It uses [Commit Timestamp Store (CTS)](/help/en/polardb/polardb-for-mysql/user-guide/cts) and RDMA network to provide global consistency (high-performance mode) at the kernel level. This ensures that strong consistency is implemented for all read requests that are forwarded to any read-only nodes in your cluster. For more information about global consistency (high-performance mode), see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/scc).

## **High availability**

**Feature**

**Description**

Multiple-zone deployment

PolarDB supports multi-zone deployment. Compared with single-zone clusters, multi-zone clusters can enhance disaster recovery capabilities and withstand data center-level faults. For more information about multi-zone deployment for PolarDB for MySQL, see [Multi-zone deployment architecture](/help/en/polardb/polardb-for-mysql/user-guide/multi-zone-deployment).

Region-level Multi-Site High Availability (MSHA)

PolarDB for MySQL and PolarDB-X support Global Database Network (GDN). A GDN consists of multiple PolarDB clusters that are deployed in multiple regions within a country. Data is synchronized across all clusters in a GDN, which enables geo-disaster recovery. All clusters handle read requests. For more information about GDN for PolarDB for MySQL, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-49).

Multi-node failover

The multi-node architecture of PolarDB ensures the high availability of PolarDB clusters. When the primary node in a cluster fails, the cluster can automatically fail over to a read-only node. Then, the read-only node serves as the new primary node. For more information about the multi-node architecture for PolarDB for MySQL, see [Multi-node deployment architecture](/help/en/polardb/polardb-for-mysql/user-guide/multi-node-deployment).

Backup within seconds and restore to a point in time

PolarDB provides data backup and restoration features to protect the core data of enterprises from risks, such as accidental data deletion, system vulnerabilities and ransomware, hardware failures, and natural disasters. For more information about the backup and restoration for PolarDB for MySQL, see [Back up and restore data](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).

Flashback query

PolarDB supports the flashback query feature. You can use flashback queries to efficiently retrieve data from a cluster, database, or data table at a specific time point in the past. For more information about the flashback query feature for PolarDB for MySQL, see [Flashback queries](/help/en/polardb/polardb-for-mysql/user-guide/flashback-queries).

## **High security**

**Feature**

**Description**

Access control

PolarDB provides multiple permission control and access control methods, such as IP address whitelists, security groups, and SQL firewalls, to ensure security. For more information about the access control for PolarDB for MySQL, see [Configure a whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-whitelist-for-a-cluster/).

Data security

PolarDB provides the Transparent Data Encryption (TDE) feature to encrypt and decrypt data files in real time. Data is encrypted before it is written to a disk and is decrypted when it is read from a disk to the memory. For more information about TDE for PolarDB for MySQL, see [Configure TDE](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster).

Data transmission encryption

PolarDB provides the Secure Sockets Layer (SSL) feature to improve data transmission security. SSL is used to encrypt network connections at the transport layer. This improves the security and integrity of the data that is transmitted. For more information about SSL for PolarDB for MySQL, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption).

Mask sensitive data

PolarDB for MySQL supports [Dynamic data masking](/help/en/polardb/polardb-for-mysql/user-guide/overview-55). If you want to authorize third parties to generate reports, analyze data, perform development and test activities, or perform other database-related operations, you may need to obtain the latest customer data from databases in the production environment in real time. To avoid disclosing personal information, data must be masked before it is provided to third parties. PolarDB uses PolarProxy to provide the dynamic data masking feature for masking sensitive data. When your application initiates a data query request, PolarDB masks the sensitive data that is queried before PolarDB returns the data to the application. To achieve this, you need to specify the database account, the database name, and the table or column that requires data masking before the data is queried. This way, you can obtain the real-time data that is masked by using the dynamic data masking feature. This ensures secure data access.

Always-confidential

PolarDB provides the always-confidential feature, which can prevent database or application services from accessing user data in plaintext. This prevents data and account leakage on the cloud, and prevents R&D and O&M personnel from stealing the data. For more information about the always-confidential feature for PolarDB for MySQL, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-6).

Security audit

PolarDB provides the SQL Explorer and Audit feature. The feature is developed based on the full request feature and the security audit feature. The feature is also integrated with the following features: search, SQL Explorer, security audit, and traffic playback and stress test. The feature helps you obtain information about the SQL statements that are executed. You can use the information to troubleshoot various performance issues, identify the sources of high risks, and check whether you need to upgrade your PolarDB cluster. For more information, see [SQL Insight and Stress Testing (New Version)](/help/en/das/user-guide/sql-explorer-and-audit-5/). For more information about security audit for PolarDB for MySQL, see [SQL Explorer and Audit](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit).
