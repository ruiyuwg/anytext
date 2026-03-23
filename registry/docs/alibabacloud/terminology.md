This topic describes terms that you may encounter when you use the cloud-native database PolarDB.

## Region

The geographic location of a data center.

## Zone

A zone is a physical area within a region that has an independent power supply and network. Network latency is lower for instances that are in the same zone.

## Cluster

PolarDB uses a multi-node cluster architecture. A cluster has one primary node and multiple read-only nodes. A single PolarDB cluster can be deployed across zones but not across regions.

## Global Database Network

A global database network (GDN) is a network of multiple PolarDB database clusters that are distributed across different regions. The data in all clusters in the network is synchronized and consistent. For more information, see [Global Database Network (GDN)](/help/en/polardb/polardb-for-oracle/global-database-gdn/).

## Primary Cluster

In a global database network (GDN), only one cluster has read and write permissions. This cluster is the primary cluster.

## Secondary Cluster

In a global database network (GDN), a secondary cluster is a subordinate cluster that synchronizes data from the primary cluster.

## Node

A PolarDB cluster consists of multiple physical nodes. The nodes in a cluster are categorized into two types: primary nodes and read-only nodes. Nodes of the same type are peers and have the same specifications.

## Primary node

A PolarDB cluster has only one primary node, which is also known as a read/write node.

## Read-only node

A PolarDB cluster can have up to 15 read-only nodes.

## Cluster zone

The zones where the data of a cluster is distributed. For disaster recovery, the cluster data is automatically replicated across two zones. Nodes can be migrated only between these two zones.

## Primary zone

The zone where the primary node of a PolarDB cluster is located.

## Failover

Failover, also known as a primary/standby switch, is the process of promoting a read-only node to the primary node. For more information, see [Automatic or manual failover](/help/en/polardb/polardb-for-oracle/automatic-failover-and-manual-failover).

## Specifications

The resource configuration of each node in a PolarDB cluster, such as 8 cores and 64 GB. For more information, see [Specifications and pricing](/help/en/doc-detail/173281.html#concept-2559632).

## Endpoint

An endpoint, also known as an access point, defines the entry point for accessing a database. Each cluster provides multiple endpoints, and each endpoint can connect to one or more nodes. For example, the primary endpoint always points to the primary node, and the cluster endpoint provides read/write splitting by connecting to the primary node and multiple read-only nodes. An endpoint contains database link properties, such as the read/write status, node list, load balancing, and consistency level.

## Address

An address is the representation of an endpoint on a specific network plane. An endpoint can have both a private network address and a public network address. An address contains network properties, such as a domain name, IP address, virtual private cloud (VPC), and vSwitch.

## Primary Endpoint

The endpoint of the primary node. If a failover occurs, the system automatically redirects the endpoint to the new primary node.

## Cluster Endpoint

A cluster endpoint integrates multiple nodes in a cluster to provide a unified read/write address. It can be configured as read-only or read/write. A cluster endpoint provides features such as automatic scaling, read/write splitting, load balancing, and consistency coordination. For more information, see [View or apply for an endpoint](/help/en/polardb/polardb-for-oracle/view-or-apply-for-an-endpoint).

## Eventual Consistency

The default consistency level for read-only mode. With eventual consistency, a PolarDB cluster provides optimal performance. For more information, see [Consistency levels](/help/en/polardb/polardb-for-oracle/consistency-levels-1).

## Session Consistency

Also known as causal consistency, this is the default consistency level for read/write mode. It provides session-level read consistency, which meets the needs of most application scenarios. For more information, see [Consistency levels](/help/en/polardb/polardb-for-oracle/consistency-levels-1).

## Global Consistency

Also known as strong consistency or cross-session consistency, this is the highest level of consistency. It guarantees consistency across sessions but increases the load on the primary database. This level is not suitable when replication delay is high. For more information, see [Global consistency](/help/en/polardb/polardb-for-oracle/global-consistency).

## Transaction Splitting

A configuration item for the cluster endpoint. This feature splits read requests (SELECT queries) within a transaction and sends them to read-only nodes. This reduces the load on the primary node while ensuring consistency. For more information, see [Transaction splitting](/help/en/polardb/polardb-for-oracle/transaction-splitting).

## Offload Reads from Primary Node

A configuration item for the cluster endpoint. This feature sends SQL queries to read-only nodes to reduce the load on the primary node and ensure its stability without compromising consistency. For more information, see [Features](/help/en/polardb/polardb-for-oracle/features/).

## Private domain name (Private Address)

To reserve the connection address (domain name) of an original database, PolarDB works with PrivateZone to allow each internal network address of the PolarDB primary endpoint and cluster endpoint to be bound to a private domain name. The private domain name is effective only in the specified VPC within the current region. For more information, see [Private domain names](/help/en/polardb/polardb-for-oracle/private-domain-names).

## Snapshot Backup

A method for backing up PolarDB data. Currently, snapshot backup is the only supported backup method. For more information, see [Backup and recovery](/help/en/polardb/polardb-for-oracle/backup-and-restoration-1/).

## Level-1 Backup

A backup file that is stored locally. Level-1 backups are stored directly in the distributed storage cluster. They offer the fastest backup and recovery speeds but at a higher cost. For more information, see [Backup and recovery](/help/en/polardb/polardb-for-oracle/backup-and-restoration-1/).

## Level-2 Backup

A backup file that is stored in other offline storage media. All data in level-2 backups comes from level-1 backups. Level-2 backups can be permanently retained. They are low-cost but have slower recovery speeds. For more information, see [Backup and recovery](/help/en/polardb/polardb-for-oracle/backup-and-restoration-1/).

## Log Backup

A backup of the redo logs of a database that is used for point-in-time restore (PITR). To ensure data security and prevent data loss from operational errors, log backups are retained for at least 7 days. Log backups use low-cost offline storage. For more information, see [Backup and recovery](/help/en/polardb/polardb-for-oracle/backup-and-restoration-1/).

## Storage Capacity

The space occupied by data files, index files, log files (online logs and archived logs), and temporary files.

**Note**

After you purchase a PolarDB cluster, the system automatically creates the files that are required for database operations. These files, including the types listed above, occupy some storage space.

## Smart-SSD

Smart-SSD is a high-compression technology at the physical hard disk layer. SSDs are embedded with a dedicated FPGA/ASIC compression chip. This chip compresses and decompresses data in real time during data reads and writes, which greatly reduces data storage costs. Smart-SSDs are also optimized for PolarDB scenarios and provide performance that is nearly identical to standard, non-compressed hard disks. Smart-SSDs provide standard disk access interfaces and are completely transparent to applications, requiring no adaptation. This technology is used in the PSL4 storage class of PolarDB.

## Hot standby storage cluster

A hot standby storage cluster is deployed in a secondary zone or a different data center within the same zone as the PolarDB cluster. It has independent storage capabilities and is used for failover with hot standby. If the entire PolarDB cluster or the primary zone becomes unavailable, the hot standby storage cluster is quickly promoted to the primary node to handle the read and write operations of the cluster. If you disable the hot standby storage cluster, the Service-Level Agreement (SLA) of the cluster is reduced.
