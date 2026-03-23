ApsaraDB for Lindorm (Lindorm) provides a wide table engine named LindormTable for large amounts of semi-structured data and structured data. LindormTable is a distributed storage system and is compatible with the standard APIs of multiple open source software and services, such as Apache HBase, Apache Phoenix, and Apache Cassandra. This topic describes the similarities and differences between Lindorm, Apache HBase, and Apache Cassandra.

    

Capability

Lindorm

Apache HBase

Apache Cassandra

**Core features**

Data models

Lindorm supports multiple data models such as wide tables, time series, searches, and files. You can use multiple types of clients and multiple APIs to access wide tables.

Only wide tables are supported.

Only wide tables are supported.

Access APIs

Lindorm supports the HBase API, Cassandra Query Language (CQL), and Phoenix SQL and provides data interoperability. For example, data that is written into Lindorm by using the HBase API can be queried by using CQL.

Apache HBase supports the HBase API and Phoenix SQL.

Cassandra CQL

SQL

Lindorm supports standard Java Database Connectivity (JDBC) protocols and is compatible with Apache Phoenix. Lindorm provides higher stability and performance.

Apache HBase requires external components to support Phoenix.

Apache Cassandra supports simple SQL dialects.

Data types

Lindorm supports various data types.

Apache HBase supports only the BYTE\[\] type.

Apache Cassandra supports various data types.

TTL

Lindorm supports the enterprise-grade time-to-live (TTL) feature. You can specify TTL values based on various granularities, such as tables, columns, and cells.

Table-level TTL and cell-level TTL are supported.

Only table-level TTL is supported.

Strong consistency

Lindorm supports multiple consistency levels such as strong consistency and eventual consistency.

Supported

Not supported

Global secondary indexes

Lindorm provides built-in global secondary indexes. This helps make queries transparent, improves performance, and allows you to configure redundancy for non-index key columns based on your business requirements.

Apache HBase requires external components to support global secondary indexes. In this case, the configuration process is complex.

Apache Cassandra supports global secondary indexes. Strong consistency of data is not ensured.

Multi-dimensional searches

LindormTable is integrated with LindormSearch and supports unified access capabilities. For example, Lindorm can store large amounts of data and supports multi-dimensional queries and full-text searches. For more information, see [Features](/help/en/doc-detail/174663.html#topic6324 "Indexes can be used to accelerate database queries. The wide table engine LindormTable supports a new index type that is called search index in addition to high-performance native secondary indexes. Search indexes are used in complex multi-dimensional query scenarios, including scenarios such as word segmentation, fuzzy queries, aggregate analysis, and sorting and paging. This topic describes the features and scenarios of search indexes.").

Not supported

Not supported

**Performance**

Throughput

The throughput of a Lindorm instance is seven times that of an open source Apache HBase instance. For more information, see [Analyze benchmark results](/help/en/lindorm/user-guide/test-results-1#topic53 "This topic describes the results of the throughput, response latency, compression rate benchmark tests that are performed between Lindorm and open source HBase.").

N/A

N/A

Response latency

The P99 latency of a Lindorm instance is 1/10 of that of an open source Apache HBase instance. For more information, see [Analyze benchmark results](/help/en/lindorm/user-guide/test-results-1#topic53 "This topic describes the results of the throughput, response latency, compression rate benchmark tests that are performed between Lindorm and open source HBase.").

N/A

N/A

**Cost**

Storage cost

Lindorm supports various storage specifications such as Performance, Standard, and Capacity. The storage cost of Lindorm is 80% lower than the cost of self-managed cloud disks.

Apache HBase supports self-managed disks that are developed based on cloud disks or local disks. Disks of this type incur high costs and do not support scaling.

Apache Cassandra supports self-managed disks that are developed based on cloud disks or local disks. Disks of this type incur high costs and do not support scaling.

Compute-storage separation

Supported. Storage resources and computing resources can be separately scaled.

Not supported

Not supported

Data compression

Lindorm provides a built-in optimized compression algorithm. The data compression ratio can exceed 10:1, which is more than 50% higher than the compression ratio that is provided by Snappy.

Apache HBase supports Snappy, LZ4, and LZO. The compression ratio is not high.

Apache Cassandra supports Snappy and LZ4. The compression ratio is not high.

Encoding

Lindorm provides adaptive encoding for data types. This helps ensure a high compression ratio and allows you to perform fast queries without the need for decoding.

Apache HBase supports DIFF. The compression effect is moderate, and the encoded data cannot be retrieved.

Not supported

Hot and cold data separation

Hot data and cold data are automatically stored in tiered storage. Lindorm uses high-compression and low-cost media to store cold data. This helps reduce the storage cost by 80% and improve the query performance for hot data by 15%. For more information, see [Hot data and cold data separation](/help/en/doc-detail/174661.html#topic7172 "The wide table engine service (LindormTable) provided by Lindorm can automatically separate hot data and cold data based on your requirements. Cold data can be archived in cold storage provided by LindormTable, and hot data can be archived in hot storage provided by LindormTable.").

Not supported

Not supported

**Scalability and elasticity**

Minimum number of nodes

N/A

At least 3 nodes

At least 3 nodes

Scalability

High scalability. An instance can be scaled out to contain several thousands of nodes.

High scalability. An instance can be scaled out to contain several thousands of nodes.

Moderate scalability. An instance can be scaled out to contain about 100 nodes. If this limit is exceeded, the performance bottleneck of the instance can be reached.

Elasticity

N/A

Moderate elasticity. Resources can be manually scaled out within a few minutes.

Low elasticity. Data must be migrated before a scale-out operation is performed. A scale-out operation requires hours to complete.

**Reliability**

Active-active redundancy

Supported. Lindorm supports advanced capabilities such as automatic failover and dual-cluster deployment for concurrent request processing. You can deploy a Lindorm instance and a self-managed Apache HBase or Apache Cassandra instance in primary/secondary mode.

Failover is not supported.

Apache Cassandra supports active-active redundancy but requires three replicas.

Strong consistency across data centers

An instance can be deployed across data centers. This way, data center-level disaster recovery can be performed and strong data consistency is ensured.

Not supported

Not supported

Backup and restoration

Lindorm allows you to back up more than 100 TB of data to Object Storage Service (OSS) and provides advanced capabilities such as a recovery time objective (RTO) of less than 30 minutes, on-demand backup, and point-in-time restoration. The RTO is ensured regardless of the amount of data. For more information, see [Enable data backup and restoration](/help/en/lindorm/user-guide/backup-and-restoration#concept-2558920 "LindormTable supports data backup and restoration. The feature can store data in Object Storage Service (OSS) based on a data ecosystem service named Data Transport. The feature can back up full data and synchronize incremental data in real time to meet the requirements of data backup and restoration.").

Apache HBase provides limited support for data backup and restoration.

Apache Cassandra provides limited support for data backup and restoration.

Active geo-redundancy

Supported. You can use Lindorm to deploy databases across regions and units and synchronize data based on your business requirements.

Not supported

Apache Cassandra provides moderate support for the active geo-redundancy feature.

**Multitenancy and security**

Authentication and ACL

Lindorm supports username and password authentication and ACLs to authenticate user identities. For more information, see [User management](/help/en/doc-detail/174671.html#topic2090 "Lindorm supports user authentication. A user needs to provide only their username and password to pass user authentication. The password is stored as ciphertext on the server and transmitted as ciphertext during the authentication process. This ensures that the password cannot be used by other users if the password is intercepted during the authentication process. This topic describes how to use the cluster management system to manage users.").

Not supported

Supported

Resource isolation

Lindorm provides the resource group feature to allow you to physically isolate resources among tenants.

Not supported

Not supported

Quota

Lindorm supports global quotas for tenants, including request quotas and storage quotas.

Apache HBase supports only server-based quotas.

Not supported

At-rest encryption

Supported. Lindorm uses Key Management Service (KMS) to manage keys and encrypts all data and logs.

Apache HBase provides limited support for at-rest encryption.

Not supported

Remote procedure call (RPC) blacklist

Supported. You can limit the number of RPC calls.

Not supported

Not supported

Audit

This feature is scheduled for release and will be available in future versions.

Not supported

Not supported

**Advanced features**

FeedStream API

Lindorm provides the FeedStream feature to help you improve the development efficiency and overall performance of your system in social networking instant messaging (IM) scenarios.

Not supported

Not supported

Table recycle bin

After a data table is deleted, it is moved to the recycle bin. You can recover the data table to prevent unexpected data loss.

Not supported

Not supported

Cascading splitting

Regions can be continuously split without the need to wait for the compaction process to be complete. This helps improve the scaling and load balancing capabilities.

Not supported

Not supported

Discrete TTL

Lindorm allows you to retain data of multiple time ranges.

Not supported

Not supported

**O&M and diagnostics**

O&M tools

Lindorm provides a GUI-based cluster management tool that allows you to manage tables, namespaces, groups, and ACLs. For more information, see [Log on to the cluster management system](/help/en/lindorm/user-guide/log-in-to-the-cluster-management-system#topic1125 "You can use the cluster management system to view the resource usage of a Lindorm cluster and centrally manage the data that is stored in the cluster. This topic describes how to log on to the cluster management system in the Lindorm console.").

HBase Shell

CLI-based tools that do not provide GUIs

Data queries

Lindorm provides a cluster management system that allows you to run SQL queries in a graphical interface. For more information, see [Query data](/help/en/lindorm/user-guide/data-query#topic1501 "The Lindorm wide table engine allows you to query data stored in wide tables by executing SQL statements in the cluster management system. This topic describes how to use the cluster management system to query data in wide tables."). Lindorm also supports HBase Shell and CQLsh.

HBase Shell

CQLsh

**Ecosystem**

Data migration

Lindorm supports online, cross-version, automated, and efficient data migration from each version of Apache HBase or Apache Cassandra. During the migration process, your application is not affected, and you do not need to modify the code of the application. For more information, see [Introduction to LTS (formerly known as BDS)](/help/en/lindorm/user-guide/bds-introduction#topic-2637838).

Only offline migration is supported.

Only offline migration is supported.

Data synchronization from MySQL databases

Lindorm provides Lindorm Tunnel Service (LTS). You can use LTS to import full data and synchronize incremental data in a MySQL database to Lindorm. For more information about LTS, see [Introduction to LTS (formerly known as BDS)](/help/en/lindorm/user-guide/bds-introduction#topic-2637838).

Apache HBase does not provide dedicated tools and does not support online incremental synchronization. You need to use third-party tools to migrate data from MySQL databases.

Apache Cassandra does not provide dedicated tools and does not support online incremental synchronization. You need to use third-party tools to migrate data from MySQL databases.

Spark analysis

Lindorm is deeply integrated with Apache Spark. For example, you can use Spark SQL to analyze data in Lindorm, synchronize incremental data from Lindorm to Apache Spark, and then return the analysis result data that is generated offline to Lindorm.

No improvements are made. Data integration requires large numbers of development resources.

No improvements are made. Data integration requires large numbers of development resources.

MaxCompute

Lindorm is integrated with MaxCompute. You can archive incremental data in Lindorm to MaxCompute.

Data integration requires large numbers of development resources.

Data integration requires large numbers of development resources.

Log Service

Lindorm allows you to subscribe to real-time data from Log Service and import the data to Lindorm. For more information about LTS, see [Introduction to LTS (formerly known as BDS)](/help/en/lindorm/user-guide/bds-introduction#topic-2637838).

Data integration requires large numbers of development resources.

Data integration requires large numbers of development resources.

**Service capabilities**

Service level agreement (SLA)

Lindorm provides SLA guarantees. Lindorm ensures up to 99.9% service availability for single-cluster deployment and 99.99% service availability for dual-cluster deployment.

N/A

N/A

O&M cost

Lindorm provides fully managed services. This way, you do not need to focus on complex database O&M operations.

N/A

N/A

Technical team

An expert team that consists of multiple Apache Project Management Committee (PMC) members and committers provides technical support.

N/A

N/A

Practical experience

Lindorm is known for providing services in the previous nine years during the Tmall Double 11 Shopping Festival. Tens of thousands of Lindorm instances are deployed to support the business of Alibaba Group.

N/A

N/A
