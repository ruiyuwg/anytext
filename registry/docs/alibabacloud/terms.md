This topic describes the terminology of Tair (Redis OSS-compatible) to help you better understand and use Tair databases.

**Term**

**Description**

instance ID

A basic unit of Tair (Redis OSS-compatible). Each instance corresponds to a user space. Tair has limits on instance configurations, such as the number of connections, bandwidth, and CPU power. The limits vary based on different instance types. You can view the list of your instance IDs in the console.

data sharding

Tair (or Redis) data is partitioned into separate segments, which are stored across different data shards to enhance the performance and scalability of the instance.

-   The [standard architecture](/help/en/redis/product-overview/standard-master-replica-instances) consists of a single shard in a master-replica setup, indicating that all data is stored in one shard (the master node). It supports up to 9 replica nodes.
    
-   The [cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances) supports between 2 to 256 shards, with data typically distributed evenly across these shards.
    
    **Note**
    
    In the cluster architecture, the entire database space is divided into 16,384 slots, with each data shard responsible for storing and processing data associated with specific slots. For example, in a cluster instance with three data shards, the first shard handles slots \[0, 5460\], the second shard handles slots \[5461, 10922\], and the third shard handles slots \[10923, 16383\].
    
    Each data shard supports one master node and up to four replica nodes, and all nodes within a shard have the same specifications.
    

instance type and node

-   **High Availability**: uses a master-replica architecture in which two or more nodes are deployed to provide high service reliability.
    
    -   **Master node**: serves your workloads and handles read and write requests.
        
    -   **Replica node**: does not provide services externally and is only intended for high availability (HA). If the master node fails, the system switches workloads over to the replica node that has the most complete and up-to-date data within 30 seconds. This ensures smooth business operations.
        
    -   **Read replica**: handles read requests and provides disaster recovery capabilities. Read replicas are available only in the read/write splitting architecture.
        
-   **Standalone**: contains only a single data node. No replica nodes are provided to synchronize data in real time. Standalone instances are suitable for cache-only scenarios that do not require high data reliability. Standalone instances are available at a relatively low price.
    

primary (secondary) zone node

This term applies to instances deployed across multiple zones. In normal cases, the master node, referred to as the **primary zone node**, is deployed in the primary zone. Replica nodes, referred to as **secondary zone nodes**, are deployed in the secondary zone. For more information, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones).

-   If one master node and two replica nodes are configured for an instance, one master node and one replica node are deployed in the primary zone. The other replica node is deployed in the secondary zone.
    
-   If one master node and three or more replica nodes are configured for an instance, you must deploy at least one master node and one replica node in the primary zone. Then, you can deploy the remaining replica nodes in the primary zone or the secondary zone based on your business requirements.
    

deployment mode

-   **Cloud-native**: uses a new-generation management architecture that provides better scalability and elasticity. This architecture allows more flexible specification configuration.
    
-   **Classic**: uses the conventional management architecture.
    

For more information, see [Comparison between cloud-native instances and classic instances](/help/en/redis/product-overview/comparison-between-tair-instances-that-cloud-native-and-classic).

storage medium

Tair instances support three storage mediums. The storage mediums have the following features and use scenarios:

-   Redis Open-Source Edition: stores data in memory to provide high-performance and low-latency services.
    
    Redis Open-Source Edition is suitable for the use scenarios of open source Redis.
    
-   [DRAM-based instance](/help/en/redis/product-overview/dram-based-instances): stores data in memory and uses a multi-threaded model. A DRAM-based instance provides approximately three times the performance of a Redis Open-Source Edition instance that has the same specifications. DRAM-based instances support features such as semi-synchronous replication, point-in-time recovery (PITR), and Global Distributed Cache, and provide multiple enhanced data modules to simplify development.
    
    DRAM-based instances are suitable for scenarios that require ultra-high performance or active geo-redundancy.
    
-   [Persistent memory-optimized instance](/help/en/redis/product-overview/persistent-memory-optimized-instances-1): stores data in persistent memory to provide command-level persistence capabilities.
    
    Persistent memory-optimized instances are suitable for scenarios that require high performance and data consistency.
    
-   [ESSD/SSD-based instance](/help/en/redis/product-overview/essd-based-instances-1): stores data in Enterprise SSDs (ESSDs) or standard SSDs to provide command-level persistence capabilities and massive storage capacity. An ESSD/SSD-based instance delivers approximately 60% of the performance of a Redis Open-Source Edition instance at a cost as low as 15% of a Redis Open-Source Edition instance.
    
    ESSD/SSD-based instances are suitable for scenarios that require moderate performance and high cost-effectiveness.
    

version compatibility

Tair is compatible with Redis versions such as Redis 7.0, Redis 6.0, Redis 5.0, and Redis 4.0.

eviction policy

The eviction policy that is used in Tair is the same as the eviction policy of Redis. For more information, see [Key eviction](https://valkey.io/topics/lru-cache/).

DB

Database. Tair supports 256 databases (DB 0 to DB 255). By default, data is written to DB 0. You cannot modify the total number of databases.
