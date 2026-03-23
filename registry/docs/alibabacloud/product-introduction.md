PolarDB is a next-generation, cloud-native relational database developed by Alibaba Cloud. It uses a storage-compute decoupled architecture that combines software and hardware advantages. PolarDB provides a database service that offers elasticity in seconds, high performance, high availability, security, reliability, and mass storage. The service is 100% compatible with MySQL and PostgreSQL ecosystems and highly compatible with Oracle syntax. It supports both centralized and distributed deployments. Compared with self-managed databases, PolarDB delivers up to 6 times the transactional performance and 400 times the analytical performance of open source databases at 50% of the total cost of ownership (TCO).

With PolarDB, you can choose the database engine that best suits your application and maintain compatibility with the underlying database engine.

**PolarDB** **database**

**Ecosystem compatibility**

**Service architecture**

**Product form**

[PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/what-is-polardb-for-mysql-enterprise-edition)

100% compatible with MySQL

Shared storage, compute-storage decoupled

Public cloud, Apsara Stack Enterprise, DBStack

[PolarDB for PostgreSQL](/help/en/polardb/polardb-for-postgresql/what-is-polardb-pg-enterprise)

100% compatible with PostgreSQL, [highly compatible with Oracle syntax](/help/en/polardb/polardb-for-oracle/high-compatibility)

[PolarDB for Xscale](/help/en/polardb/polardb-for-xscale/what-is-polardb-for-xscale)

-   Centralized (Standard Edition): [100% compatible with MySQL](/help/en/polardb/polardb-for-xscale/mysql-compatibility#62778bfd6e0t2)
    
-   Distributed (Enterprise Edition): [Highly compatible with MySQL](/help/en/polardb/polardb-for-xscale/mysql-compatibility#d72f3bc7eauwr)
    

Shared-nothing, [integrated centralized and distributed architecture](/help/en/polardb/polardb-for-xscale/overview-6)

## **Benefits**

**Ecosystem compatibility**

-   100% compatible with MySQL and PostgreSQL ecosystems.
    
-   Highly compatible with Oracle syntax and provides an end-to-end solution for migrating from Oracle. The migration process supports zero downtime with controllable risks and predictable progress, as proven by over 500 customer cases.
    
-   Whether in a centralized or distributed deployment, PolarDB easily integrates with existing systems to help you smoothly upgrade your enterprise databases.
    

**High performance**

-   Transactional processing (TP) performance is up to 6 times that of open source databases.
    
-   Online analytical processing (OLAP) performance is up to 400 times that of open source databases. It provides complex query acceleration and real-time analytics capabilities, such as parallel query and columnstore indexes.
    

**High availability**

-   Supports single-zone, dual-zone, three-zone (RPO=0), and multi-level high availability configurations across regions to prevent failures and ensure data security.
    
-   Provides a Service-Level Agreement (SLA) of up to 99.995% availability.
    

**Mass storage**

-   PolarDB for MySQL and PolarDB for PostgreSQL: Support up to 500 TB of storage.
    
-   PolarDB for Xscale: Supports petabytes of storage.
    

**Easy to scale**

-   Provides an intelligent proxy that supports multiple read consistency levels.
    
-   Supports serverless elastic scaling and linear scaling for distributed deployments.
    
-   Uses low-latency physical replication technology for efficient and stable replication between nodes.
    

**Security**

-   Access control: Resource Access Management (RAM) users, IP whitelists, security groups, and Virtual Private Clouds (VPCs).
    
-   Data security: Transparent Data Encryption (TDE), backup and recovery, and flashback query.
    
-   Transmission security: Secure Sockets Layer (SSL) encryption.
    

## **Service architecture**

## PolarDB for MySQL

PolarDB for MySQL clusters are designed based on cloud-native concepts. They combine the stability, high performance, and scalability of commercial databases with the simplicity, openness, and rapid iteration of open source cloud databases. The compute-storage decoupled architecture leverages both software and hardware advantages to provide a database service that offers elasticity in seconds, high performance, security, reliability, and mass storage.

![产品概述-流程图 (8)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9761446471/p948256.jpg)

-   **Database proxy (Proxy)**
    
    The database proxy is a network proxy service between the database and your application. It forwards all requests from the application to the database. The proxy layer provides security authentication and advanced features such as automatic read/write splitting, load balancing, consistency levels, connection pooling, persistent connections, and overload protection.
    
-   **Database compute nodes**
    
    -   PolarDB uses a multi-node cluster architecture. Cluster Edition clusters that contain one primary node and multiple read-only nodes consist of one read/write node and multiple read-only nodes. [Multi-master Cluster](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/)s have multiple read/write nodes and multiple read-only nodes.
        
    -   Active-active failover is used between read/write nodes and read-only nodes to provide high availability for the database service.
        
    -   Compute nodes provide the SQL engine for the database and are available in General-purpose and Dedicated specifications.
        
-   **Shared distributed storage**
    
    Multiple compute nodes share a single copy of data instead of each storing its own. This greatly reduces storage costs. Based on distributed block storage and a file system, storage capacity can be smoothly scaled online. This design avoids the storage capacity limits of a single database server and can handle data volumes of up to hundreds of terabytes.
    

## PolarDB for PostgreSQL

PolarDB for PostgreSQL clusters support both centralized and distributed forms:

-   **Centralized**
    
    Designed based on cloud-native concepts, it combines the stability, high performance, and scalability of commercial databases with the simplicity, openness, and rapid iteration of open source cloud databases. The compute-storage decoupled architecture leverages both software and hardware advantages to provide a database service that offers elasticity in seconds, high performance, security, reliability, and mass storage.
    
-   **Distributed**
    
    This is a distributed database built on a centralized PolarDB for PostgreSQL cluster. It uses a two-layer architecture of compute nodes (CNs) and data nodes (DNs) to achieve distributed scalability with compute-storage decoupling. It also supports the existing features of centralized PolarDB for PostgreSQL clusters to meet the diverse performance and reliability needs of enterprise businesses.
    

**Centralized (Enterprise Edition and Standard Edition)**

![产品概述-流程图 (8)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9761446471/p948256.jpg)

-   **Database proxy (Proxy)**
    
    The database proxy is a network proxy service between the database and your application. It forwards all requests from the application to the database. The proxy layer provides security authentication and advanced features such as automatic read/write splitting, load balancing, consistency levels, connection pooling, persistent connections, and overload protection.
    
-   **Database compute nodes**
    
    -   PolarDB uses a multi-node cluster architecture. Cluster Edition clusters that contain one primary node and multiple read-only nodes consist of one read/write node and multiple read-only nodes.
        
    -   Active-active failover is used between read/write nodes and read-only nodes to provide high availability for the database service.
        
    -   Compute nodes provide the SQL engine for the database and are available in General-purpose and Dedicated specifications.
        
-   **Shared distributed storage**
    
    Multiple compute nodes share a single copy of data instead of each storing its own. This greatly reduces storage costs. Based on distributed block storage and a file system, storage capacity can be smoothly scaled online. This design avoids the storage capacity limits of a single database server and can handle data volumes of up to hundreds of terabytes.
    

**Distributed**

![产品概述-流程图 (18)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9761446471/p948516.jpg)

-   **Database nodes**
    
    -   The architecture consists of CNs and DNs. CNs are compute nodes responsible for cluster metadata management and distributed plan generation. DNs are data nodes responsible for storing actual data shards.
        
    -   Each CN and DN uses a centralized architecture with compute-storage decoupling. It supports a database proxy and a mode with one primary node and multiple read-only nodes. It also provides high-availability failover for compute nodes within CNs and DNs. You can add read-only nodes (ROs) to scale out the read capability of a single CN or DN.
        
-   **Distributed features**
    
    -   Supports manual sharding and horizontal scaling capabilities, mainly for business scenarios with data volumes of less than 1 PB.
        
    -   Ensures consistency for distributed transactions.
        
    -   Supports dual-zone deployment. The primary zone hosts the working cluster, and the secondary zone hosts the hot standby cluster.
        
    -   Provides 24/7 zero-downtime capabilities for configuration changes, upgrades, and maintenance. You can add heterogeneous CNs and DNs to the cluster.
        

## PolarDB for Xscale

In a PolarDB for Xscale cluster, data nodes (DNs) are separated into a centralized form that is fully compatible with a standalone database (100% compatible with MySQL 5.7 and 8.0). When business growth requires a distributed scale-out, the architecture can be upgraded in-place to a distributed form. The distributed components can seamlessly connect to the original data nodes without data migration or application-side modifications. This lets you benefit from the availability and scalability of a distributed system.

**Centralized (Standard Edition)**

![产品概述-流程图 (11)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9761446471/p948359.jpg)

-   **Data Node (DN)**
    
    DNs are responsible for data persistence. They provide high reliability and strong consistency based on the Paxos consensus protocol with a majority vote. The self-developed [Lizard distributed transaction engine system](/help/en/polardb/polardb-for-xscale/lizard-transaction-system) offers more reliable high availability and an approximately 35% performance improvement compared with the native MySQL distributed engine.
    
-   **Multi-replica architecture**
    
    To ensure strong consistency (RPO=0) among replicas, the system uses the Paxos consensus protocol with a majority vote. Each write operation must be confirmed by more than half of the nodes. Even if one node fails, the cluster can still provide services. The Paxos algorithm guarantees strong consistency among replicas, which completely resolves the issue of replica inconsistency. Replicas can be divided into the following roles:
    
    -   Leader
        
        The Leader processes client requests and makes decisions. It must maintain logs to ensure data consistency and recoverability.
        
    -   Follower
        
        A Follower executes instructions from the Leader. If the Leader fails or becomes inaccessible, a Follower can be elected as the new Leader.
        
    -   Logger
        
        Similar to a Follower, a Logger provides only majority protocol services and does not provide data services. If the Leader fails or becomes inaccessible, a Logger participates in the election vote. It may be elected as the Leader for a short time but will not provide data services. After most Followers have caught up with the protocol logs, the Logger voluntarily steps down as Leader.
        
    -   Learner
        
        A Learner can only passively receive system status information and cannot participate in voting or decision-making. This role avoids impacting the system.
        

**Distributed (Enterprise Edition)**

![产品概述-流程图 (9)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9761446471/p948258.jpg)

-   **Global Meta Service (GMS)**
    
    GMS maintains globally strongly consistent system metadata, such as tables, schemas, and statistics. It also manages security information, such as accounts and permissions, and provides a global timestamp service (TSO).
    
-   **Compute Node (CN)**
    
    The CN is the entry point of the system. It has a stateless design and includes modules such as an SQL parser, optimizer, and executor. It is responsible for distributed data routing, computation, and dynamic scheduling. It handles the coordination of the two-phase commit (2PC) protocol for distributed transactions, distributed DDL execution, and global index maintenance. It also provides enterprise-level features such as the three-role mode.
    
-   **Data Node (DN)**
    
    The DN is responsible for data persistence for row-store data. It provides high reliability and strong consistency based on the Paxos consensus protocol with a majority vote. It also uses Multi-Version Concurrency Control (MVCC) to maintain the visibility of distributed transactions. In addition, it provides computation pushdown capabilities to meet the requirements of a distributed environment, such as pushing down Project, Filter, Join, and Aggregation computations.
    
-   **Columnar node**
    
    This node provides persistent columnstore indexes. It builds columnstore indexes based on Object Storage Service (OSS) and consumes binary logs of distributed transactions in real time to meet real-time update needs. In conjunction with compute nodes, it provides snapshot-consistent query capabilities for columnstore data.
    
-   **Change Data Capture (CDC) node**
    
    This node provides incremental subscription capabilities that are fully compatible with the MySQL binary log format and protocol. It also supports primary/secondary replication that is compatible with the MySQL replication protocol.
    

## **Videos**

## **How to use** PolarDB

You can manage PolarDB clusters to perform operations such as creating clusters, databases, and accounts in the following ways:

-   [Console](https://yaochi.console.aliyun.com/overview): Provides a graphical web interface for easy operation.
    
-   [API](/help/en/polardb/developer-reference/): All operations available in the console can be performed using APIs.
    
-   [SDK](/help/en/polardb/download-sdk): All operations available in the console can be performed using SDKs.
    
-   [CLI](/help/en/cli/what-is-alibaba-cloud-cli): All operations available in the console can be performed using the CLI.
    

## **Quick guide**

**PolarDB** **database**

**Billing**

**User Guide**

**Whitepapers**

[PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/what-is-polardb-for-mysql-enterprise-edition)

[Product Billing](/help/en/polardb/polardb-for-mysql/polardb-mysql-product-billing/)

[User Guide](/help/en/polardb/polardb-for-mysql/user-guide/)

[Performance Whitepapers](/help/en/polardb/polardb-for-mysql/performance-white-paper-4/)

[PolarDB for PostgreSQL](/help/en/polardb/polardb-for-postgresql/what-is-polardb-pg-enterprise)

[Product Billing](/help/en/polardb/polardb-for-postgresql/billable-items-3)

-   [O&M Guide](/help/en/polardb/polardb-for-postgresql/overview-4)
    
-   [Self-developed kernel features](/help/en/polardb/polardb-for-postgresql/features-2)
    
-   [Plugin Guide](/help/en/polardb/polardb-for-postgresql/list-of-supported-plug-ins)
    
-   [Spatio-temporal engine (GanosBase)](/help/en/polardb/polardb-for-postgresql/overview-51)
    

[Performance Whitepapers](/help/en/polardb/polardb-for-postgresql/performance-white-paper-3/)

[PolarDB for PostgreSQL (Compatible with Oracle)](/help/en/polardb/polardb-for-oracle/what-is-polardb-for-oracle)

[Product Billing](/help/en/polardb/polardb-for-oracle/billable-items)

-   [O&M Guide](/help/en/polardb/polardb-for-oracle/overview-90)
    
-   [Self-developed kernel features](/help/en/polardb/polardb-for-oracle/self-developed-kernel-capability-oracle/)
    
-   [Plugin Guide](/help/en/polardb/polardb-for-oracle/list-of-supported-plug-ins-for-oracle)
    
-   [Spatio-temporal engine (GanosBase)](/help/en/polardb/polardb-for-oracle/overview-93)
    

-   [Performance Whitepapers](/help/en/polardb/polardb-for-oracle/performance-white-paper-1)
    
-   [Technical Whitepapers](/help/en/polardb/polardb-for-oracle/product-introduction-5)
    

[PolarDB for Xscale](/help/en/polardb/polardb-for-xscale/what-is-polardb-for-xscale)

[Billing overview](/help/en/polardb/polardb-for-xscale/pricing-of-polardb-x)

[User Guide](/help/en/polardb/polardb-for-xscale/user-guide-2/)

-   [Performance Whitepapers](/help/en/polardb/polardb-for-xscale/performance-white-paper/)
    
-   [Technical Whitepapers](/help/en/polardb/polardb-for-xscale/industry-trends-and-background)
