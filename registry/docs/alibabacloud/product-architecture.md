Tair (Redis OSS-compatible) provides two instance architectures -- standard and cluster -- each with an optional read/write splitting mode. Choose an architecture based on your data volume, throughput requirements, and read/write ratio.

## Key concepts

A Tair instance is built from the following components:

**Component**

**Description**

**Node**

The smallest unit of a Tair deployment. Each node runs a Redis-compatible process.

**Shard**

A grouping of nodes that stores a subset of data. In a cluster instance, data is partitioned across multiple shards.

**Master node**

The node that handles write operations within a shard or standard instance.

**Replica node**

A copy of the master node that provides failover capability. If the master node fails, workloads switch over to the replica node.

**Read-only node**

An additional node that serves read traffic only. Available when read/write splitting is enabled.

**Proxy node**

A routing layer that distributes read and write requests to the appropriate nodes. Used in cluster proxy mode and read/write splitting configurations.

## Choose an architecture

The following table summarizes the differences between standard and cluster architectures.

**Dimension**

**Standard architecture**

**Cluster architecture**

**Internal structure**

One master node and one or more replica nodes

Multiple shards, each with its own master node and one or more replica nodes

**Data partitioning**

No. All data resides on a single shard.

Yes. Data is distributed across shards.

**Best for**

Small data volumes with stable query rates

Large data volumes, high QPS, or throughput-intensive workloads

**Read/write splitting**

Supported. Add read-only nodes and proxy nodes.

Supported. Add read-only nodes per shard.

> Both architectures allow you to dynamically enable read/write splitting.

## Standard architecture

A standard instance uses a master-replica architecture. The master node handles all read and write operations, while the replica node maintains a real-time copy of the data. If the master node fails, workloads switch over to the replica node to maintain high availability.

![Standard architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6404787371/CAEQMhiBgMCCyq.RoxkiIDA1ZjUyZWIxNzE1ZTQyZmM4NTE4N2FlYjI4YzNmZGM14709878_20241015150645.808.svg)

**When to use the standard architecture:**

-   Your data fits on a single instance.
    
-   Your query rate is stable and does not exceed single-node capacity.
    
-   You need persistent storage with high availability.
    

### Standard architecture with read/write splitting

When read traffic exceeds the capacity of the master node, enable read/write splitting to scale read performance. A standard read/write splitting instance adds multiple proxy nodes and read-only nodes to the base master-replica pair.

-   **Proxy nodes** route write requests to the master node and distribute read requests across the master node and read-only nodes.
    
-   **Read-only nodes** serve read traffic, offloading the master node.
    

![Standard architecture with read/write splitting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6404787371/CAEQMhiBgMC.y6.RoxkiIGYzNmViNTU5OTVmMzQ2YzNhOTk1ZmNjNGQxNzE1ZjY04188031_20240125115407.788.svg)

**When to use this configuration:**

-   High QPS with a read-heavy workload.
    
-   Persistent storage on instances.
    

## Cluster architecture

In a cluster instance, data is partitioned across multiple shards. Each shard uses a multi-node master-replica architecture, which provides both horizontal scalability and high availability.

![Cluster architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6404787371/CAEQMhiBgMCbwq.RoxkiIGEyZDE2MDljZDcxOTQyMDdiNTk3NWI5M2M4MjE0YTM14707971_20241014100011.613.svg)

**When to use the cluster architecture:**

-   Large data volumes that exceed single-node capacity.
    
-   High QPS requirements.
    
-   Throughput-intensive workloads that benefit from parallel processing across shards.
    

### Cluster architecture with read/write splitting

For cluster instances where read traffic exceeds the performance limit of the master node in individual shards, enable read/write splitting. Each shard switches from a standard master-replica configuration to a read/write splitting architecture, with dedicated read-only nodes to handle read traffic.

![Cluster architecture with read/write splitting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6404787371/CAEQMhiBgIDvwq.RoxkiIGYyN2VmZjFjOGQyMzRmMzA5MjVlYjRhOTA1NDIwYzI14707971_20241014100011.613.svg)

**When to use this configuration:**

-   Read traffic exceeds the performance limit of the master node within individual shards.
    
-   Overall read performance needs to scale beyond what master nodes alone can handle.
    

## Editions, series types, and engine versions

Architecture is one of several dimensions that define a Tair instance. The following dimensions also apply:

**Dimension**

**Examples**

**Edition**

Redis Open-Source Edition, Tair (Enterprise Edition)

**Series type**

DRAM-based instances

**Engine version**

Redis 5.0, Redis 7.0

The architecture descriptions on this page apply across all editions, series types, and engine versions. For detailed specifications of each architecture, see the following topics:

-   [Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances#concept-qf3-kjh-tdb)
    
-   [Cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances)
    
-   [Read/write splitting](/help/en/redis/product-overview/read-or-write-splitting-instances-1)
