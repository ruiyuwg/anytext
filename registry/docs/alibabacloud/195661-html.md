PolarDB for MySQL provides the following editions: Cluster Edition, and Multi-master Cluster (Limitless) . This topic describes the architectures, benefits, and the typical usage scenarios of these editions.

The following table compares the typical usage scenarios of different editions.

**Edition**

**Description**

**Scenario**

Cluster Edition

Cluster Edition is developed based on an architecture in which computing is decoupled from storage. It provides faster scaling, larger storage capacity, and lower replication latency.

-   Production databases for large and medium enterprises.
    
-   Databases used in industries such as Internet, IoT, e-commerce, logistics, and gaming.
    
-   Core databases in the finance, securities, and insurance industries that require high data security.
    

Multi-master Cluster (Limitless) Edition

Multi-master Cluster (Limitless) Edition is developed based on a multi-master architecture that contains multiple primary and read-only nodes. All data in a cluster is stored in PolarStore, a shared storage pool. Each primary node uses PolarFileSystem to access data in PolarStore. You can access all nodes in a cluster by using the cluster endpoint. PolarProxy automatically forwards SQL statements to the required primary node.

-   Multi-master Cluster (Limitless) is suitable for high-concurrency read and write scenarios such as multi-tenancy, gaming, and e-commerce.
    

### Cluster Edition

Cluster Edition is developed based on an architecture in which computing is decoupled from storage. It provides faster scaling, larger storage capacity, and lower replication latency.

-   One primary node and multiple read-only nodes
    
    PolarDB uses a distributed cluster-based architecture. A Cluster Edition cluster consists of one primary node and 0 to 15 read-only nodes. Multiple nodes constitute the engine layer of the database. The primary node processes read and write requests, and the read-only nodes process only read requests. Cluster Edition uses the active-active failover method between the primary node and read-only nodes. This method ensures high availability of databases.
    
-   PolarStore
    
    Multiple compute nodes share one set of data, eliminating the need for each compute node to maintain a copy of the data. This significantly reduces storage costs. Cluster Edition uses a distributed storage and file system. This lets you seamlessly expand the storage capacity of your databases to hundreds of terabytes, without being restricted by the capabilities of individual database servers.
    
-   Compute and storage decoupling
    
    Cluster Edition decouples computing from storage to let you easily scale clusters as your business grows. Compute nodes store only metadata, while data files and redo logs are stored in PolarStore. Only metadata that is related to redo logs needs to be synchronized among compute nodes. This reduces the replication latency between the primary node and read-only nodes. If the primary node is faulty, a read-only node can quickly take over as the primary node.
    
-   Read/write splitting
    
    Cluster Edition comes with the read/write splitting feature that is implemented based on PolarProxy, so that it can perform transparent, high-availability, and adaptive load balancing. The read/write splitting feature automatically forwards SQL requests to each node of Cluster Edition based on cluster endpoints, allowing clusters to process large amounts of concurrent requests in an aggregated manner. For more information, see [Read/write splitting](/help/en/polardb/polardb-for-mysql/user-guide/read-or-write-splitting-2#concept-hbh-m45-j2b).
    
-   High-speed network connections
    
    Data is transmitted among compute nodes and storage nodes of a cluster by using the Remote Direct Memory Access (RDMA) protocol over high-speed networks. I/O is no longer a limiting factor to database performance.
    
-   Data reliability and consistency
    
    The data on storage nodes has multiple replicas, which ensures data reliability. In addition, the Parallel-Raft protocol is used to ensure data consistency among these replicas.
    

**Architecture**

The following figure shows the architecture of Cluster Edition.![Architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9679579061/p861.png)

**Supported engine versions**

Cluster Edition supports the following kernel versions: PolarDB for MySQL 5.6, 5.7, and 8.0.

**Scenarios**

-   Production databases for large and medium enterprises.
    
-   Databases used in industries such as Internet, IoT, e-commerce, logistics, and gaming.
    
-   Core databases in the finance, securities, and insurance industries that require high data security.
    

**Node specifications and pricing**

Cluster Edition supports Dedicated and General-purpose specifications. For more information, see [Billable items](/help/en/polardb/polardb-for-mysql/enterprise-billing-item-overview#concept-zbj-4pg-tdb).

### Multi-master Cluster (Limitless) Edition

Multi-master Cluster (Limitless) provides PolarDB for MySQL, which is developed based on a multi-master architecture that contains multiple primary nodes and read-only nodes to improve the concurrent read and write capabilities.

**Architecture**

The following figure shows the architecture of Multi-master Cluster (Limitless) .![Multi-master cluster (database/table) architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3739178461/p374173.png)

All data files in a cluster are stored in PolarStore. Each primary node uses PolarFileSystem to access data in PolarStore. You can access all nodes in a cluster by using the cluster endpoint. The database proxy automatically forwards SQL statements to the required primary node.

**Supported engine versions**

Only PolarDB for MySQL 8.0 supports Multi-master Cluster (Limitless) .

**Benefits**

-   Write scale-out in seconds
    
    Concurrent data writes to databases on up to 32 compute nodes are supported. Databases can be scheduled to different compute nodes within seconds, improving the overall read/write capabilities of clusters for concurrent requests.
    
-   Multi-master backup (no secondary nodes)
    
    If a primary node fails, failover to another low-traffic primary node can be completed within seconds. The absence of secondary nodes saves the resources occupied specially for failover, which can halve your TCO.
    
-   Global read-only node
    
    You can read data written to all primary nodes from the global read-only node to execute requests that involve multiple database.
    

**Scenarios**

Multi-master Cluster (Limitless) is suitable for high-concurrency read and write scenarios such as multi-tenancy, gaming, and e-commerce.

-   Multitenancy in SaaS: high concurrency and load balancing between tenants
    
    Multi-master Cluster (Limitless) can implement load balancing by switching over databases of tenants across different primary nodes or adding new primary nodes to handle traffic bursts.
    
-   Global gaming server and e-commerce scenarios: scaling in minutes to cater to fast-growing business
    
    Multi-master Cluster (Limitless) supports scale-out in seconds and provide the transparent routing feature. They can be combined with the middleware or business-based database and table sharding solution to shorten the scale-out process from days to minutes.
    
-   Games deployed on different servers: better performance and scalability
    
    When a game is attracting large numbers of players, databases can be switched over to new primary nodes to implement load balancing. When the game is past its prime, databases can be aggregated to a few primary nodes to reduce operating costs.
    

**Node specifications and pricing**

Multi-master Cluster (Limitless) supports Dedicated and General-purpose specifications. For more information, see [Compute node specifications of PolarDB for MySQL Enterprise Edition](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes#concept-2035312).

For more information about the billing of Multi-master Cluster (Limitless) , see [Billable items](/help/en/polardb/polardb-for-mysql/enterprise-billing-item-overview#concept-zbj-4pg-tdb).
