This topic describes the benefits of PolarDB for PostgreSQL(Compatible with Oracle).

## Ease of use

PolarDB for PostgreSQL(Compatible with Oracle) is highly compatible with the Oracle syntax. If you want to migrate your services from Oracle databases to PolarDB for PostgreSQL(Compatible with Oracle), you do not need to modify your code or applications or need only to make a few minor modifications.

## Cost efficiency

-   Separation of computing and storage: Compute nodes share storage resources. You only pay for compute nodes when you add read-only nodes, which greatly reduces scale-out costs.
-   Serverless storage: You do not need to manually configure storage space, because the storage space is automatically scaled based on the data volume. You only need to pay for the database capacity that you have used.

## High performance

-   With an improved database kernel, PolarDB supports physical replication, RDMA protocol, and shared distributed storage, which greatly improves performance.
-   A PolarDB cluster contains one primary node and up to 15 read-only nodes. The cluster meets performance requirements in high concurrency scenarios, particularly suitable for scenarios where read requests are far more than write requests.
-   A PolarDB cluster shares storage among the primary node and read-only nodes. To apply data changes to nodes in the cluster, you only need to change data once.

## Storage capacity for hundreds of terabytes of data

PolarDB uses distributed block storage and a file system to allow automatic scale-up of database storage capacity, regardless of the storage capacity of each node. This enables your database to handle up to hundreds of terabytes of data.

## High availability, reliability, and data security

-   Supports shared distributed storage to eliminate data inconsistency in the secondary database caused by asynchronous primary-secondary replication. This ensures zero data loss if a single point of failure occurs in a database cluster.
-   Supports a multi-zone architecture. Data replicas are available across multiple zones for database disaster recovery and backup.
-   Provides various security measures for your database access, storage, and management. These measures include setting an IP whitelist for database access, using VPC for network isolation, and creating multiple replicas for data storage.

## Rapid elastic scaling to handle workload spikes

-   Configuration upgraded or downgraded within 5 minutes
    
    PolarDB supports rapid CPU and memory expansion by using container virtualization and shared distributed block storage.
    
-   Nodes added or removed within 5 minutes
    
    PolarDB can dynamically add or remove nodes to help you improve performance and reduce costs. You can use cluster endpoints to mask changes at the underlying layer. In this case, applications are unaware of the addition or removal of nodes.
    

## Lock-free backup

Based on the snapshot technology of underlying distributed storage, PolarDB requires only a few minutes to back up a database with TB-level data. During the entire backup process, no lock is required, which delivers higher efficiency and minimizes the negative impact.

## Cross-node parallel execution

PolarDB for PostgreSQL(Compatible with Oracle) supports the cross-node parallel execution feature. After you enable this feature, an SQL query can be run on multiple nodes in parallel. This way, you can fully take advantage of the hardware resources of all the compute nodes, such as CPUs, memory, and network resources. This improves the performance of analytical queries. For more information, see [Cross-node parallel execution](/help/en/polardb/polardb-for-oracle/elastic-parallel-query-o-1/#concept-2077889).
