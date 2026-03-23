This topic provides answers to frequently asked questions about PolarDB for PostgreSQL (Compatible with Oracle).

## Basic questions

-   Q: What is PolarDB?
    
    A: PolarDB is a relational database cloud service deployed in data centers across more than 10 regions worldwide, providing a ready-to-use online database service. PolarDB supports three independent engines that are 100% compatible with MySQL, 100% compatible with PostgreSQL, and highly compatible with Oracle syntax. It offers a storage capacity of up to 200 TB. For more information, see [What is PolarDB for PostgreSQL (Compatible with Oracle)?](/help/en/polardb/polardb-for-oracle/what-is-polardb-for-oracle#concept-jpz-zb2-sdb).
    
-   Q: Why is the cloud-native database PolarDB better than traditional databases?
    
    A: Compared to traditional databases, the cloud-native database PolarDB can store hundreds of terabytes of data, provides high availability and reliability, and supports features such as fast elastic scaling and lock-free backups. For more information, see [Benefits](/help/en/polardb/polardb-for-oracle/benefits-1#concept-2083493).
    
-   Q: When was PolarDB released and when did it become commercially available?
    
    A: PolarDB was released for public preview in September 2017 and became commercially available in March 2018.
    
-   Q: What are clusters and nodes?
    
    A: PolarDB Cluster Edition uses a multi-node cluster architecture. A cluster contains one primary node and multiple read-only nodes. A single PolarDB cluster can span multiple zones but not multiple regions. Management and billing are performed at the cluster level. For more information, see [Glossary](/help/en/polardb/polardb-for-oracle/glossary-1#concept-2336415).
    
-   Q: What programming languages are supported?
    
    A: PolarDB supports programming languages such as Java, Python, PHP, Go, C, C++, .NET, and Node.js.
    
-   Q: After purchasing PolarDB, do I still need to purchase PolarDB-X database middleware for sharding?
    
    A: Yes, you do.
    
-   Q: Does PolarDB support table partitioning?
    
    A: Yes, it does.
    
-   Q: Can I change the region of a PolarDB cluster after I purchase it?
    
    A: No, you cannot. The region of a cluster cannot be changed after purchase.
    
-   Q: Does PolarDB automatically include a partitioning mechanism?
    
    A: Yes. PolarDB partitions data at the storage layer. This process is transparent to users.
    
-   Q: How does the Single Node series ensure service availability and data reliability?
    
    A: The Single Node series is a database product that provides a single compute node for specific purposes. Although it has only one node, the Single Node series ensures high service availability and data reliability using technologies such as second-level compute scheduling and distributed multi-replica storage.
    
-   Q: How do I purchase a single-node PolarDB cluster?
    
    A: The Single Node product series is no longer available. However, you can purchase a single-node PolarDB cluster by setting **Number Of Nodes** to 0 when you create the cluster.
    

## Fees

-   Q: What do the fees for PolarDB include?
    
    A: Fees for PolarDB include charges for storage space, compute nodes, backups (which include a free quota), and SQL Explorer (optional). For more information, see [Specifications and pricing](/help/en/doc-detail/173281.html#concept-2559632).
    
-   Q: What does the billable storage space include?
    
    A: Billable storage space includes database table files, index files, undo log files, Redo log files, slow log files, and a small number of system files. For more information, see [Specifications and pricing](/help/en/doc-detail/173281.html#concept-2559632).
    
-   Q: How do I use a PolarDB storage plan?
    
    A: You can use a storage plan to offset the storage fees for both subscription and pay-as-you-go clusters. For example, if you have three clusters that each use 40 GB of storage (for a total of 120 GB), these three clusters can share a 100 GB storage plan. The remaining 20 GB is billed on a pay-as-you-go basis. For more information, see [Purchase a storage plan](/help/en/polardb/polardb-for-oracle/purchase-a-storage-plan#task-2038073).
    
-   Q: What is the fee for adding a read-only node?
    
    A: The price of a read-only node is the same as the price of the primary node. For more information, see [Compute node pricing details](/help/en/polardb/polardb-for-postgresql/billing-rules-of-pay-as-you-go-compute-nodes#concept-2035314).
    
-   Q: Does adding a read-only node double the storage capacity?
    
    A: No, it does not. PolarDB uses a compute-storage decoupled architecture. The read-only nodes that you purchase are computing resources, so adding them does not increase storage capacity.
    
    Storage space is serverless. You do not need to select a capacity when you purchase a cluster. The storage space automatically scales as your data grows, and you are charged only for the amount of data stored. Each cluster specification has a maximum storage capacity. To increase the maximum storage capacity, you must [change the configuration](/help/en/polardb/polardb-for-oracle/change-the-specifications-of-a-polardb-cluster#task-1580301).
    
-   Q: How do I stop a pay-as-you-go cluster from incurring fees?
    
    A: If you no longer need the cluster, you can [release it](/help/en/polardb/polardb-for-oracle/release-a-cluster-1). After the cluster is released, it stops incurring fees.
    
-   Q: Can I change the specifications of a cluster during a temporary upgrade?
    
    A: No, you cannot change all specifications. During a temporary upgrade (when the cluster status is \`running\`), [manual upgrades](/help/en/polardb/polardb-for-oracle/change-the-specifications-of-a-polardb-cluster) are supported. However, manual downgrades, automatic upgrades or downgrades, and [adding or deleting nodes](/help/en/polardb/polardb-for-oracle/add-or-remove-a-read-only-node) are not supported.
    
-   Q: What is the public bandwidth of PolarDB? Are there any fees?
    
    A: PolarDB does not have a public bandwidth limit. The limit depends on the bandwidth of the SLB service that you use. Internet connections to PolarDB are free of charge.
    
-   Q: Why are there still daily charges for a subscription cluster?
    
    A: The billable items for PolarDB include compute nodes (primary and read-only nodes), storage space, data backup (charged only if the free quota is exceeded), SQL Explorer (optional), and Global Database Network (GDN) (optional). For more information, see the [Billing overview](/help/en/polardb/polardb-for-oracle/billable-items). A subscription means that you prepay the fees for the cluster's compute nodes when you create the cluster. The fees for storage space, data backup, and SQL Explorer are not included in the subscription. As you use the database, storage fees are deducted from your account on an hourly basis based on the storage space that the cluster uses. Therefore, you still receive pay-as-you-go bills even if you use the subscription billing method.
    
-   Q: Is there an extra charge for one-click migration from RDS to PolarDB?
    
    A: No, the one-click migration process is free. You are charged only for the RDS instance and the PolarDB cluster.
    
-   Q: Why am I still charged for storage space after deleting data from a PolarDB table using `delete`?
    
    A: The `delete` command only marks the data for deletion. It does not release the tablespace.
    

## Cluster access (read/write splitting)

-   Q: How do I implement read/write splitting for PolarDB?
    
    A: You can use the cluster endpoint in your application to implement read/write splitting based on the configured read/write mode. For more information, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).
    
-   Q: What is the maximum number of read-only nodes that a PolarDB cluster can support?
    
    A: PolarDB uses a distributed cluster architecture. A cluster contains one primary node and up to 15 read-only nodes. At least one read-only node is required to ensure high availability.
    
-   Q: What causes load imbalance among read-only nodes?
    
    A: Load imbalance among read-only nodes can be caused by a small number of connections to the read-only nodes or by a read-only node not being included when a custom cluster endpoint was created.
    
-   Q: What causes a high or low load on the primary node?
    
    A: A high load on the primary node can be caused by direct connections to the primary endpoint, the primary node accepting read requests, many transaction requests, high primary/secondary replication latency that causes requests to be routed to the primary node, or read requests being routed to the primary node because a read-only node is abnormal.
    
    A low load on the primary node may occur if the "offload reads from primary node" option is enabled.
    
-   Q: How do I reduce the load on the primary node?
    
    A: You can use the following methods to reduce the load on the primary node:
    
    -   Use a cluster endpoint to connect to the PolarDB cluster. For more information, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).
        
    -   If the primary node is under pressure due to many transactions, you can enable the transaction splitting feature in the console to route some queries in transactions to read-only nodes. For more information, see [Transaction splitting](/help/en/polardb/polardb-for-oracle/transaction-splitting#task-2038574).
        
    -   If requests are routed to the primary node due to replication latency, you can consider lowering the consistency level (for example, using eventual consistency). For more information, see [Consistency level](/help/en/polardb/polardb-for-oracle/consistency-levels-1#concept-vvz-lzg-1gb).
        
    -   If the primary node accepts read requests, it may also lead to a high load. You can enable the "offload reads from primary node" feature in the console to reduce the number of read requests routed to the primary node.
        
    
-   Q: Why can't I read data that was just inserted?
    
    A: This issue may be caused by the consistency level configuration. The cluster endpoint of PolarDB supports the following consistency levels:
    
    -   Eventual consistency: Does not guarantee that you can immediately read newly inserted data, regardless of whether it is in the same session or a different session.
        
    -   Session consistency: Guarantees that you can read data inserted within the same session.
        
    
    **Note**
    
    The higher the consistency level, the lower the performance and the greater the pressure on the primary node. Choose the consistency level with caution. For most application scenarios, session consistency can ensure that services work properly. For a few statements that require strong consistency, you can use the `/* FORCE_MASTER */` hint. For more information, see [Consistency level](/help/en/polardb/polardb-for-oracle/consistency-levels-1#concept-vvz-lzg-1gb).
    
-   Q: How do I force an SQL statement to be executed on the primary node?
    
    A: When you use a cluster endpoint, you can add `/* FORCE_MASTER */` or `/* FORCE_SLAVE */` before an SQL statement to force its routing direction. For more information, see [Best practices for selecting a consistency level](/help/en/polardb/polardb-for-oracle/consistency-levels-1#section-m51-kx3-tu4).
    
    -   `/* FORCE_MASTER */` forces the request to be routed to the primary node. This can be used for scenarios with a few read requests that require high consistency.
        
    -   `/* FORCE_SLAVE */` forces the request to be routed to a read-only node. This can be used in a few scenarios where the PolarProxy requires special syntax to be routed to a read-only node to ensure correctness. For example, calls to stored procedures and the use of multi-statement are routed to the primary node by default.
        
    
    **Note**
    
    -   The hint has the highest routing priority and is not constrained by the consistency level or transaction splitting. Evaluate its use before implementation.
        
    -   Do not include statements that modify GUC parameters in the hint statement, such as /\*FORCE\_SLAVE\*/ set enable\_hashjoin = off;. Such statements may cause unexpected query results.
        
    
-   Q: Can I assign different endpoints to different services? Can these endpoints be isolated from each other?
    
    A: Yes, you can. You can create multiple custom endpoints for different services. If the underlying nodes are different, the custom endpoints provide isolation and do not affect each other. For more information about how to create a custom endpoint, see [Create a custom cluster endpoint](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#section-kbe-khk-20f).
    
-   Q: If there are multiple read-only nodes, how do I create a single-node endpoint for a specific read-only node?
    
    A: You can create a single-node endpoint only when the read/write mode of the cluster endpoint is Read-only and the cluster has three or more nodes. For detailed steps, see [Create a custom cluster endpoint](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#section-kbe-khk-20f).
    
    **Warning**
    
    After you create a single-node endpoint, if the node fails, the endpoint may be unavailable for up to one hour. Do not use it in a production environment.
    
-   Q: What is the maximum number of single-node endpoints that can be created in a cluster?
    
    A: If your cluster has three nodes, you can create a single-node endpoint for only one of the read-only nodes. If the cluster has four nodes, you can create separate single-node endpoints for two of the read-only nodes, and so on.
    
-   Q: I only use the primary endpoint, but read-only nodes also have a load. Does the primary endpoint also support read/write splitting?
    
    A: No, it does not. The primary endpoint does not support read/write splitting and always connects only to the primary node. It is normal for read-only nodes to have a small amount of QPS, which is unrelated to the primary endpoint.
    

## Management and maintenance

-   Q: Is there replication latency between the primary node and the read-only nodes?
    
    A: Yes, there is a millisecond-level latency between them.
    
-   Q: What causes increased replication latency?
    
    A: The following situations can cause increased replication latency:
    
    -   The primary node has a high write load and generates too many Redo logs for the read-only nodes to apply in time.
        
    -   The read-only nodes have an excessively high load, which preempts too many resources that were originally allocated for applying Redo logs.
        
    -   An I/O bottleneck causes slow reading and writing of Redo logs.
        
    
-   Q: How do I ensure query consistency when there is replication latency?
    
    A: You can use a cluster endpoint and select an appropriate consistency level. The consistency levels from highest to lowest are session consistency, and eventual consistency. For more information, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).
    
-   Q: Can a recovery point objective (RPO) of 0 be guaranteed in the event of a single-node failure?
    
    A: Yes, it can.
    
-   Q: How are specification upgrades (for example, from 2 cores and 8 GB to 4 cores and 16 GB) implemented on the backend? What is the impact on my business?
    
    A: Both the proxy and the database nodes of PolarDB must be upgraded to the new configuration. A rolling upgrade of multiple nodes is used to minimize the impact on your business. Each upgrade takes about 10 to 15 minutes. The impact on your business lasts for no more than 30 seconds. During this period, one to three transient connections may occur. For more information, see [Change the configuration](/help/en/polardb/polardb-for-oracle/change-the-specifications-of-a-polardb-cluster#task-1580301).
    
-   Q: How long does it take to add a node? Will it affect my business?
    
    A: Adding a node takes about five minutes and does not impact your business. For more information about how to add a node, see [Add a read-only node](/help/en/polardb/polardb-for-oracle/add-or-remove-a-read-only-node#task-1580301).
    
    **Note**
    
    After a read-only node is added, new read/write splitting connections forward requests to that node. Read/write splitting connections that were established before the new read-only node was added do not forward requests to it. You must disconnect and re-establish these connections, for example, by restarting the application.
    
-   Q: How long does it take to upgrade to the latest minor version? Will it affect my business?
    
    A: PolarDB uses a rolling upgrade of multiple nodes to minimize the impact on your business. A version upgrade usually takes no more than 30 minutes. During the upgrade, the database proxy or the database kernel engine is restarted, which may cause transient database connections. We recommend that you perform the upgrade during off-peak hours and make sure your application has an automatic reconnection mechanism. For more information, see [Minor version management](/help/en/polardb/polardb-for-oracle/version-management-2#task-2449714).
    
-   Q: How does automatic failover work?
    
    A: PolarDB uses an active-active high-availability cluster architecture. Automatic failover occurs between the primary node and the read-only nodes. The system automatically elects a new primary node. Each node in PolarDB has a failover priority, which determines the probability of it being elected as the new primary node during a failover. If multiple nodes have the same priority, they have the same probability of being elected as the primary node. For more information, see [Automatic or manual primary/secondary failover](/help/en/polardb/polardb-for-oracle/automatic-failover-and-manual-failover#task-2407462).
    
-   Q: What is the architecture of the database proxy? Does it have a failover mechanism? How is its high availability ensured?
    
    A: The database proxy uses a dual-node, high-availability architecture. Traffic is evenly distributed between the two proxy nodes. The system continuously checks the health of the proxy nodes. If a node failure is detected, connections to that node are disconnected, and the remaining healthy node automatically takes over all traffic to ensure service continuity. The system then automatically rebuilds and recovers the faulty proxy node. This process usually takes about two minutes. During this time, the database cluster remains accessible.
    
    In rare cases, connections to the faulty node may not be disconnected in time and can no longer respond to requests. To handle such situations, we recommend that you configure a reasonable timeout policy on the client, such as `socketTimeout` and `connectTimeout` for JDBC. This allows the application layer to promptly detect and terminate suspended connections, which improves the system's fault tolerance and response efficiency.
    

## Backup and recovery

-   Q: What backup method does PolarDB use?
    
    A: PolarDB uses snapshots for backups. For more information, see [Backup method 2: Manual backup](/help/en/polardb/polardb-for-oracle/backup-method-2-manual-backup-1#task-1580301).
    
-   Q: How fast is database recovery?
    
    A: Currently, the speed of recovery (cloning) from a backup set (snapshot) is 40 minutes per terabyte (TB). If you restore to a point in time, the time required to apply Redo logs must also be included. The recovery speed for applying Redo logs is about 20 to 70 seconds per gigabyte (GB). The total recovery time is the sum of these two parts.
    

## Performance and capacity

-   Q: What is the maximum number of tables? At what number of tables might performance degrade?
    
    A: The maximum number of tables is limited by the number of files. For more information, see [Limits](/help/en/polardb/polardb-for-oracle/limits#concept-2559627).
    
-   Q: Can table partitioning improve the query performance of PolarDB?
    
    A: Yes. In general, if a query can be confined to a specific partition, performance can be improved.
    
-   Q: Can PolarDB support the creation of 10,000 databases? What is the maximum number of databases?
    
    A: Yes, PolarDB supports the creation of 10,000 databases. The maximum number of databases is limited by the number of files. For more information, see [Limits](/help/en/polardb/polardb-for-oracle/limits#concept-2559627).
    
-   Q: How are IOPS limited and isolated? Will there be I/O contention among multiple PolarDB cluster nodes?
    
    A: The IOPS for each node in a PolarDB cluster is set based on its specifications. The IOPS of each node are isolated and do not affect each other. Therefore, there is no I/O contention among nodes.
    
-   Q: Will the slow performance of a read-only node affect the primary node?
    
    A: Yes. If a read-only node has a high load or increased replication latency, it may slightly increase the memory consumption of the primary node.
    
-   Q: What is the performance impact of enabling SQL Explorer (full SQL log audit)?
    
    A: There is no performance impact.
    
-   Q: What high-speed network protocol does PolarDB use?
    
    A: PolarDB uses dual 25 Gbps RDMA technology between database compute nodes and storage nodes, and between multiple replicas of stored data. This provides high I/O performance with low latency and high throughput.
    
-   Q: What is the bandwidth limit for external connections to PolarDB?
    
    A: The bandwidth limit for Internet connections to PolarDB is 10 Gbit/s.
