This topic describes the specifications of memory-optimized Tair (Enterprise Edition) instances that use the cluster architecture. These specifications include memory capacity, connections, bandwidth, and queries per second (QPS) reference values.

## Instance types

[2 shards](#ad271a264dyrr), [4 shards](#227b7e16d00xl), [8 shards](#3fe5b69b96kdd), [16 shards](#5d50e87434t3p), [32 shards](#fbe40271ec2ap), [64 shards](#fba0fd36963vm), [128 shards](#fbf3a03687mp6), and [256 shards](#5174afaa28udl).

-   ### 2 shards
    
    This instance type series has 2 shards and 12 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    2 GB cluster edition (2 shards)
    
    redis.amber.logic.sharding.1g.2db.0rodb.6proxy.multithread
    
    1
    
    360,000
    
    60,000
    
    1,536 Mbps (192 MB/s)
    
    768 Mbps (96 MB/s)
    
    480,000
    
    4 GB cluster edition (2 shards)
    
    redis.amber.logic.sharding.2g.2db.0rodb.6proxy.multithread
    
    2
    
    360,000
    
    60,000
    
    1,536 Mbps (192 MB/s)
    
    768 Mbps (96 MB/s)
    
    480,000
    
-   ### 4 shards
    
    This instance type series has 4 shards and 24 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    8 GB cluster edition (4 shards)
    
    redis.amber.logic.sharding.2g.4db.0rodb.12proxy.multithread
    
    2
    
    500,000
    
    120,000
    
    3,072 Mbps (384 MB/s)
    
    768 Mbps (96 MB/s)
    
    960,000
    
-   ### 8 shards
    
    This instance type series has 8 shards and 48 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    16 GB cluster edition (8 shards)
    
    redis.amber.logic.sharding.2g.8db.0rodb.24proxy.multithread
    
    2
    
    500,000
    
    240,000
    
    6,144 Mbps (768 MB/s)
    
    768 Mbps (96 MB/s)
    
    1,920,000
    
    32 GB cluster edition (8 shards)
    
    redis.amber.logic.sharding.4g.8db.0rodb.24proxy.multithread
    
    4
    
    500,000
    
    240,000
    
    6,144 Mbps (768 MB/s)
    
    768 Mbps (96 MB/s)
    
    1,920,000
    
    64 GB cluster edition (8 shards)
    
    redis.amber.logic.sharding.8g.8db.0rodb.24proxy.multithread
    
    8
    
    500,000
    
    240,000
    
    6,144 Mbps (768 MB/s)
    
    768 Mbps (96 MB/s)
    
    1,920,000
    
    128 GB cluster edition (8 shards)
    
    redis.amber.logic.sharding.16g.8db.0rodb.24proxy.multithread
    
    16
    
    500,000
    
    240,000
    
    6,144 Mbps (768 MB/s)
    
    768 Mbps (96 MB/s)
    
    1,920,000
    
-   ### 16 shards
    
    This instance type series has 16 shards and 96 CPU cores, with 6 CPU cores per shard.
    
    **Specification Name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    32 GB cluster edition (16 shards)
    
    redis.amber.logic.sharding.2g.16db.0rodb.48proxy.multithread
    
    2
    
    500,000
    
    480,000
    
    12,288 Mbps (1,536 MB/s)
    
    768 Mbps (96 MB/s)
    
    3,840,000
    
    128 GB cluster edition (16 shards)
    
    redis.amber.logic.sharding.8g.16db.0rodb.48proxy.multithread
    
    8
    
    500,000
    
    480,000
    
    12,288 Mbps (1,536 MB/s)
    
    768 Mbps (96 MB/s)
    
    3,840,000
    
    256 GB cluster edition (16 shards)
    
    redis.amber.logic.sharding.16g.16db.0rodb.48proxy.multithread
    
    16
    
    500,000
    
    480,000
    
    12,288 Mbps (1,536 MB/s)
    
    768 Mbps (96 MB/s)
    
    3,840,000
    
-   ### 32 shards
    
    This instance type series has 32 shards and 192 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    64 GB cluster edition (32 shards)
    
    redis.amber.logic.sharding.2g.32db.0rodb.96proxy.multithread
    
    2
    
    500,000
    
    960,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    7,680,000
    
    512 GB cluster edition (32 shards)
    
    redis.amber.logic.sharding.16g.32db.0rodb.96proxy.multithread
    
    16
    
    500,000
    
    960,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    7,680,000
    
-   ### 64 shards
    
    This instance type series has 64 shards and 384 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    128 GB cluster edition (64 shards)
    
    redis.amber.logic.sharding.2g.64db.0rodb.192proxy.multithread
    
    2
    
    500,000
    
    1,920,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    15,360,000
    
    256 GB cluster edition (64 shards)
    
    redis.amber.logic.sharding.4g.64db.0rodb.192proxy.multithread
    
    4
    
    500,000
    
    1,920,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    15,360,000
    
    1024 GB cluster edition (64 shards)
    
    redis.amber.logic.sharding.16g.64db.0rodb.192proxy.multithread
    
    16
    
    500,000
    
    1,920,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    15,360,000
    
-   ### 128 shards
    
    This instance type series has 128 shards and 768 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    2048 GB cluster edition (128 shards)
    
    redis.amber.logic.sharding.16g.128db.0rodb.384proxy.multithread
    
    16
    
    500,000
    
    3,840,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    30,720,000
    
-   ### 256 shards
    
    This instance type series has 256 shards and 1,536 CPU cores, with 6 CPU cores per shard.
    
    **Instance type name**
    
    **Instance type code (for API calls)**
    
    **Memory per shard (GB)**
    
    Proxy mode
    
    **Maximum connections**
    
    Direct connection mode
    
    **Maximum connections**
    
    **Total bandwidth**
    
    **Bandwidth per shard**
    
    **QPS reference**
    
    4096 GB cluster edition (256 shards)
    
    redis.amber.logic.sharding.16g.256db.0rodb.768proxy.multithread
    
    16
    
    500,000
    
    7,680,000
    
    16,384 Mbps (2,048 MB/s)
    
    768 Mbps (96 MB/s)
    
    61,440,000
    

## Notes about CPU cores

To ensure service stability, the system reserves a CPU core to process background tasks. In a [cluster instance](/help/en/redis/product-overview/cluster-master-replica-instances-1#concept-2348302) or a [read/write splitting instance](/help/en/redis/product-overview/read-or-write-splitting-instances#concept-2348477), the system reserves a CPU core for each shard or read replica to process background tasks.

  

## Bandwidth calculation rules

-   The bandwidth value in the table is the total bandwidth for the entire instance, which is the sum of the bandwidth of all shards or nodes in the instance. The maximum bandwidth for each shard is 768 Mbps (96 MB/s).
    
-   When a cluster instance uses the default database proxy endpoint, the maximum bandwidth is 16,384 Mbps (2,048 MB/s). After this limit is reached, the bandwidth does not increase even if you add more shards.
    
    **Note**
    
    To handle high network traffic, you can enable direct connection mode. For more information, see [Enable direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode) (for cluster instances only). After you enable direct connection mode, the total bandwidth is limited to the maximum bandwidth per shard × the number of shards. For example, for a 128-shard cluster instance where each shard has more than 1 GB of memory, the total bandwidth is 12,288 MB/s after you enable direct connection mode.
    
-   Bandwidth applies to both upstream and downstream traffic. If an instance type has a bandwidth of 768 Mbps (96 MB/s), both its upstream and downstream bandwidth are 768 Mbps (96 MB/s).
    
    **Note**
    
    If your instance experiences burst or planned traffic peaks, you can adjust the instance bandwidth as needed. For more information, see [Manually increase the bandwidth of an instance](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance).
    
-   The bandwidth limits for Tair and Redis refer to the bandwidth of the shard nodes. The limits are independent of the network connection type.
    

For more information, see [FAQ about bandwidth](/help/en/redis/user-guide/faq-about-bandwidth).

## Maximum connections

-   Proxy mode: The maximum number of connections for an instance is 500,000. After this limit is reached, the maximum number of connections does not increase even if you add more shards or nodes.
    
    **Note**
    
    For instances created before March 1, 2020, the maximum number of connections in proxy mode is 200,000.
    
    When you use PUBSUB subscription commands, BLOCK commands, or transaction commands in proxy mode, the proxy creates dedicated backend connections for clients. In this case, connections cannot be aggregated. The maximum number of connections is limited by the maximum connections of a single shard. The upper limit is the same as the threshold for the direct connection mode.
    
-   Direct connection mode: The maximum number of connections for a single shard is 30,000. The maximum number of connections for an instance is the number of shards × 30,000.
    

  

## FAQ

-   Why is the actual bandwidth of my instance different from the bandwidth described in this topic?
    
    The bandwidths of specific instance types may be adjusted after the service is upgraded. If the actual bandwidth of your instance is different from that described in this topic, you can change the configurations of your instance by selecting the same instance type to update the bandwidth. The price of your instance remains unchanged after the configuration change. For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
    
-   Why am I unable to write data to a cluster instance when instance memory is not exhausted?
    
    This is because the instance contains exhausted shards. Redis uses the hash algorithm to evenly write data to different shards. If the instance contains large keys, resources are unevenly distributed in the instance and the shards that house these large keys may even be exhausted. In this case, specific write requests to the instance may fail.
    
    You can use the **Performance monitoring** feature to check and optimize the performance of each shard. For more information, see [View the performance metrics of nodes in a Tair cluster instance](/help/en/redis/support/how-do-i-view-the-performance-metrics-such-as-memory-usage-of-each-child-node-in-an-apsaradb-for-redis-cluster-instance).
    
-   Does **8proxy** in the **redis.logic.sharding.1g.8db.0rodb.8proxy.default** instance class represent 8 proxy nodes?
    
    **8proxy** in the instance class does not represent the number of proxy nodes. You do not need to be concerned with the specific number of proxy nodes. We ensure that the computing power and bandwidth of the proxy nodes meet the requirements specified in the specification table.
