## General

**What is PolarDB?**

[PolarDB](/help/en/polardb/polardb-for-oracle/what-is-polardb-for-oracle#concept-jpz-zb2-sdb) is a cloud-native relational database service that is 100% compatible with PostgreSQL. It is available in more than 10 regions and provides out-of-the-box online database capabilities. A PolarDB cluster supports up to 500 TB of storage by default.

> PolarStore (PSL4/PSL5) supports petabyte-scale storage. If you need storage at this scale, [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us) to reserve resources.

**Why does PolarDB outperform traditional databases?**

PolarDB can store hundreds of terabytes of data and provides high availability, high reliability, rapid elastic scaling, and lock-free backups. For details, see [Benefits](/help/en/polardb/polardb-for-oracle/benefits-1#concept-2083493).

**When was PolarDB released?**

PolarDB entered public preview in September 2017 and became commercially available in March 2018.

**What are clusters and nodes?**

PolarDB Cluster Edition uses a multi-node cluster architecture. A cluster has one primary node and multiple read-only nodes. You can deploy a cluster across zones but not across regions. Clusters are managed and billed at the cluster level. For more information, see [Glossary](/help/en/polardb/polardb-for-oracle/glossary-1#concept-2336415).

**Which programming languages does PolarDB support?**

Java, Python, PHP, Go, C, C++, .NET, and Node.js.

**Do I need to purchase PolarDB-X separately for sharding?**

Yes. PolarDB-X is a separate database middleware product. You need to purchase it in addition to PolarDB to implement sharding.

**Does PolarDB support table partitioning?**

Yes.

**Does PolarDB automatically include a partitioning mechanism?**

PolarDB performs partitioning at the storage layer. This is transparent to you.

## Billing

**What do PolarDB fees include?**

Storage space, compute nodes, backups (which include a free quota), and SQL Explorer (optional). For details, see [Specifications and pricing](/help/en/doc-detail/173281.html#concept-2559632).

**What counts as billable storage space?**

Database table files, index files, undo log files, redo log files, slow log files, and a small number of system files. For details, see [Specifications and pricing](/help/en/doc-detail/173281.html#concept-2559632).

## Cluster access and read/write splitting

**How do I set up read/write splitting?**

Use the cluster endpoint in your application. Splitting behavior depends on the read/write mode you configure. For details, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).

**How many read-only nodes can a cluster have?**

Up to 15. At least one read-only node is required for high availability.

**Why are loads unbalanced across my read-only nodes?**

This usually happens when there are too few connections to the read-only nodes, or when a read-only node is not included in the custom cluster endpoint configuration.

**What causes high or low loads on the primary node?**

High loads on the primary node typically result from:

-   Direct connections to the primary endpoint
    
-   The primary node accepting read requests
    
-   A high volume of transaction requests
    
-   High replication latency that routes requests to the primary node
    
-   Read-only node failures that redirect read requests to the primary node
    

A low load on the primary node typically means it is configured to reject read requests.

**How do I reduce the load on the primary node?**

-   **Use a cluster endpoint** instead of the primary endpoint. See [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).
    
-   **Enable transaction splitting** if heavy transaction workloads are driving up primary node pressure. This routes some queries within transactions to read-only nodes. See [Advanced options -- Transaction splitting](/help/en/polardb/polardb-for-postgresql/read-or-write-splitting-5).
    
-   **Lower the consistency level** if replication delay is routing requests to the primary node. For example, use eventual consistency. See [Advanced options -- Consistency level](/help/en/polardb/polardb-for-postgresql/read-or-write-splitting-5).
    
-   **Enable the offload reads from primary node feature** to reduce read requests routed to the primary node.
    

**Why can't I read data that I just inserted?**

Most likely a consistency level issue. PolarDB cluster endpoints support two consistency levels:

-   **Eventual consistency:** Does not guarantee that reads immediately see newly inserted data, whether in the same session (connection) or a different one.
    
-   **Session consistency:** Guarantees that you can read data inserted within the same session.
    

> Higher consistency levels reduce performance and increase pressure on the primary node. For most applications, session consistency is sufficient. For the few statements that require strong consistency, use the hint `/* FORCE_MASTER */`. For more information, see [Consistency level](/help/en/polardb/polardb-for-mysql/user-guide/consistency-levels#concept-vvz-lzg-1gb).

**How do I force an SQL statement to run on the primary node?**

When you use a cluster endpoint, add a routing hint before your SQL statement. For details, see [Custom route -- Hint](/help/en/polardb/polardb-for-postgresql/read-or-write-splitting-5).

-   `/* FORCE_MASTER */` routes the request to the primary node. Use this for read requests that need strong consistency.
    
-   `/* FORCE_SLAVE */` routes the request to a read-only node. Use this when the PolarDB proxy requires special syntax to route to a read-only node for correctness. For example, statements that call stored procedures or use multistatement are routed to the primary node by default.
    

> -   Hints have the highest routing priority. They are not constrained by consistency levels or transaction splitting. Evaluate them before use.
>     
> -   Do not include statements that change environment variables in hint statements, such as `/*FORCE_SLAVE*/ set names utf8;`. These statements may lead to unexpected query results.
>     

**Can I assign different endpoints to different services for isolation?**

Yes. Create multiple custom endpoints for different services. If the underlying nodes are different, the custom endpoints provide isolation and do not affect each other. For details on creating a custom endpoint, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).

**How do I create a separate single-node endpoint for one read-only node?**

You can create a single-node endpoint only when the read/write mode of the cluster endpoint is Read-only and the cluster has three or more nodes. For steps, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).

**Warning**

If the node behind a single-node endpoint fails, the endpoint may be unavailable for up to 1 hour. Do not use single-node endpoints in production environments.

**What is the maximum number of single-node endpoints in a cluster?**

It depends on cluster size. A 3-node cluster allows 1 single-node endpoint (for one of the read-only nodes). A 4-node cluster allows 2. The same pattern continues for larger clusters.

**Does the primary endpoint support read/write splitting?**

No. The primary endpoint connects only to the primary node and does not support read/write splitting. A small QPS load on read-only nodes is normal and unrelated to the primary endpoint.

## Management and maintenance

**Is there replication latency between the primary node and read-only nodes?**

Yes. There is a millisecond-level delay between the primary node and read-only nodes.

**What causes replication latency to increase?**

-   The primary node has a high write load and generates redo logs faster than read-only nodes can apply them.
    
-   Read-only nodes are overloaded and cannot dedicate enough resources to applying redo logs.
    
-   An I/O bottleneck slows down the reading and writing of redo logs.
    

**How do I maintain query consistency when there is replication latency?**

Use a cluster endpoint and choose an appropriate consistency level. The available levels, from highest to lowest, are session consistency and eventual consistency. For details, see [Configure the database proxy](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint#task-2556887).

**Can PolarDB guarantee a recovery point objective (RPO) of 0 when a single node fails?**

Not with the default configuration. You can achieve RPO = 0 by adjusting the `synchronous_commit` parameter. For default parameter values, see [Default cluster parameter values](/help/en/polardb/polardb-for-postgresql/default-values-of-cluster-parameters-1#concept-2264337).

**How do specification upgrades work, and what is the impact?**

During a specification upgrade (for example, from 2 cores and 8 GB of memory to 4 cores and 16 GB of memory), both the proxy and database nodes are upgraded to the new configuration. PolarDB uses a rolling upgrade to minimize impact. Each upgrade takes about 10 to 15 minutes, with service impact lasting no more than 30 seconds. During this window, 1 to 3 transient disconnections may occur. For details, see [Change specifications](/help/en/polardb/polardb-for-oracle/change-the-specifications-of-a-polardb-cluster#task-1580301).

**How long does it take to add a node, and will it affect services?**

About 5 minutes, with no impact on running services. For steps, see [Add a read-only node](/help/en/polardb/polardb-for-oracle/add-or-remove-a-read-only-node#task-1580301).

> After you add a new read-only node, new read/write splitting connections route requests to that node. Existing connections do not route to it automatically. You need to disconnect and reconnect, for example, by restarting the application.

**How long does a minor version upgrade take, and will it affect services?**

PolarDB uses a multi-node rolling upgrade. A version upgrade generally takes no more than 30 minutes. During the upgrade, the database proxy or the DB kernel engine restarts, which may cause transient disconnections. Perform the upgrade during off-peak hours and make sure your application has an automatic reconnection mechanism. For details, see [Minor version management](/help/en/polardb/polardb-for-oracle/version-management-2#task-2449714).

**How does automatic failover work?**

PolarDB uses an active-active high-availability cluster architecture. When the primary node fails, the system automatically elects a new primary from the read-only nodes. Each node has a failover priority that determines its likelihood of being elected. Nodes with the same priority have an equal chance of being selected. For details, see [Automatic and manual primary/secondary failover](/help/en/polardb/polardb-for-oracle/automatic-failover-and-manual-failover#task-2407462).

**What is the database proxy architecture, and how is its high availability ensured?**

The database proxy uses a dual-node high-availability architecture and distributes traffic evenly between two proxy nodes. If one proxy node fails, the system disconnects its connections and the remaining healthy node takes over all traffic. The failed node is rebuilt automatically. This process typically takes about 2 minutes, and the database cluster remains accessible throughout.

In rare cases, connections to a failed node may not be disconnected promptly and may become unresponsive. To handle this, configure a timeout policy on the client, such as the JDBC `socketTimeout` and `connectTimeout` parameters. This helps your application detect and terminate stalled connections quickly.

## Backup and recovery

**What backup method does PolarDB use?**

PolarDB uses snapshots for backups. For details, see [Backup method 2: Manual backup](/help/en/polardb/polardb-for-oracle/backup-method-2-manual-backup-1#task-1580301).

**How fast is database recovery?**

Recovery (cloning) from a backup snapshot takes about 40 minutes per TB. For point-in-time recovery, add the time to apply redo logs: about 20 to 70 seconds per GB. The total recovery time is the sum of both.

## Performance and capacity

**What is the maximum number of tables, and when might performance degrade?**

The maximum number of tables is limited by the number of files. For details, see [Limits](/help/en/polardb/polardb-for-mysql/limits#concept-tb5-rvk-xdb).

**Can table partitioning improve query performance?**

Yes. If a query can be limited to a specific partition, performance can be improved.

**Does PolarDB support creating 10,000 databases?**

Yes. The maximum number of databases is limited by the number of files. For details, see [Limits](/help/en/polardb/polardb-for-mysql/limits#concept-tb5-rvk-xdb).

**How are IOPS limited and isolated? Do cluster nodes compete for I/O?**

IOPS for each node is set according to its specifications and is independently isolated. Nodes do not compete for I/O with each other.

**Does a slow read-only node affect primary node performance?**

An overloaded read-only node or increased replication latency may slightly increase memory consumption on the primary node.

**What is the performance impact of enabling SQL Explorer?**

None. Enabling SQL Explorer (full SQL log audit) has no performance impact.

**What high-speed network protocol does PolarDB use?**

Dual 25 Gbps Remote Direct Memory Access (RDMA) connections between database compute nodes and storage nodes, and also between storage data replicas. This provides strong I/O performance with low latency and high throughput.

**What is the maximum bandwidth for an external connection to PolarDB?**

10 Gbit/s.

**What should I do if a node takes a long time to restart?**

The more files in your cluster, the longer a restart takes. You can speed up the restart by setting the `innodb_fast_startup` parameter to `ON`. For information about modifying parameters, see [Set cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

\[needs confirmation: the `innodb_fast_startup` parameter appears to be MySQL-specific and may not apply to PolarDB for PostgreSQL. The linked documentation also references PolarDB for MySQL. This entry may be cross-product contamination and should be reviewed by the content team.\]
