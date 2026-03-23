This topic describes the memory-optimized (cloud-native edition) instance types for Tair (Enterprise Edition). It includes information about memory capacity, connections, bandwidth, and reference queries per second (QPS) values.

## Instance types

The following table lists the specifications for a single shard. For instances that use the cluster or read/write splitting architecture, the overall performance is calculated by multiplying the shard performance by the number of shards.

**Note**

-   The [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds#concept-727754) in the specifications is used only for system operations, such as storing logs, temporary backup files, and Append-Only Files (AOFs). It is not used for data storage.
    
-   For more information about the differences between the direct connection mode and the proxy mode, see [Cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances).
    
-   Cloud-native cluster architecture instances allow you to adjust the number of shard nodes. For more information, see [Adjust the number of cluster shards](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards).
    

### Shard specifications for standard architecture and cluster architecture in direct connection mode

The following specifications apply to instances that use the standard architecture or the cluster architecture in direct connection mode.

Table 1. Shard specifications for standard architecture and cluster architecture in direct connection mode

**Specification Name**

**Specification Code (for API)**

CPU Cores

**Memory (GB)**

enterprise SSD (ESSD) (GB)

**Bandwidth**

**Maximum Connections**

**Reference QPS**

1 GB

tair.rdb.1g

7

1

5

768 Mbps (96 MB/s)

30,000

300,000

2 GB

tair.rdb.2g

7

2

10

768 Mbps (96 MB/s)

30,000

300,000

4 GB

tair.rdb.4g

7

4

20

768 Mbps (96 MB/s)

40,000

300,000

8 GB

tair.rdb.8g

7

8

40

768 Mbps (96 MB/s)

40,000

300,000

16 GB

tair.rdb.16g

7

16

80

768 Mbps (96 MB/s)

40,000

300,000

24 GB

tair.rdb.24g

7

24

120

768 Mbps (96 MB/s)

50,000

300,000

32 GB

tair.rdb.32g

7

32

160

768 Mbps (96 MB/s)

50,000

300,000

64 GB

tair.rdb.64g

7

64

320

768 Mbps (96 MB/s)

50,000

300,000

**Note**

If read/write splitting is enabled for a standard architecture instance, refer to the shard specifications for the read/write splitting architecture.

### Shard specifications for cluster architecture in proxy mode and read/write splitting architecture

The following specifications apply to instances that use the cluster architecture in proxy mode or the read/write splitting architecture.

Table 2. Shard specifications for cluster architecture in proxy mode and read/write splitting architecture

**Specification Name**

**Specification Code (for API)**

CPU Cores

**Memory (GB)**

ESSD (GB)

**Bandwidth**

**Maximum Connections**

**Reference QPS**

1 GB

tair.rdb.with.proxy.1g

7

1

5

768 Mbps (96 MB/s)

30,000

300,000

2 GB

tair.rdb.with.proxy.2g

7

2

10

768 Mbps (96 MB/s)

30,000

300,000

4 GB

tair.rdb.with.proxy.4g

7

4

20

768 Mbps (96 MB/s)

40,000

300,000

8 GB

tair.rdb.with.proxy.8g

7

8

40

768 Mbps (96 MB/s)

40,000

300,000

16 GB

tair.rdb.with.proxy.16g

7

16

80

768 Mbps (96 MB/s)

40,000

300,000

24 GB

tair.rdb.with.proxy.24g

7

24

120

768 Mbps (96 MB/s)

50,000

300,000

32 GB

tair.rdb.with.proxy.32g

7

32

160

768 Mbps (96 MB/s)

50,000

300,000

64 GB

tair.rdb.with.proxy.64g

7

64

320

768 Mbps (96 MB/s)

50,000

300,000

## Performance details

**Architecture**

**Performance details**

[Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances)

The overall performance of the instance is the same as the performance listed in the instance type table.

[Cluster architecture in direct connection mode](/help/en/redis/product-overview/cluster-master-replica-instances#section-dqj-mgc-4ir)

[Cluster architecture in proxy mode](/help/en/redis/product-overview/cluster-master-replica-instances#section-h69-izd-531)

[Read/write splitting](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb)

Overall instance performance = Shard performance × Number of shards.

**Note**

For instances that use the cluster architecture in proxy mode, the maximum bandwidth is 16,384 Mbps (2,048 MB/s) and the maximum number of connections is 500,000.

For example, if an instance has four shards of the tair.rdb.with.proxy.1g type, the performance of each shard is:

-   CPU cores: 4 working cores + 3 background cores.
    
-   Bandwidth: 768 Mbps (96 MB/s).
    
-   Connections: 30,000.
    

The overall performance of the instance is:

-   CPU cores: 28.
    
-   Bandwidth: 3,072 Mbps (384 MB/s).
    
-   Maximum connections: 120,000.
    

## CPU core details

The 7 cores are divided into 4 working cores and 3 background cores. Working cores process user service requests. Background cores handle background tasks such as persistence, expiration acceleration, App Performance Analytics, and logs.

  

## Bandwidth details

-   The bandwidth value in the preceding tables is for a single shard. The total bandwidth of an instance that uses the cluster or read/write splitting architecture is the sum of the bandwidths of all shard nodes.
    
-   The maximum bandwidth for the cluster architecture in proxy mode and the read/write splitting architecture is 16,384 Mbps (2,048 MB/s). The bandwidth does not increase beyond this limit, even if you add more shards. The cluster architecture in direct connection mode does not have an overall bandwidth limit.
    
-   Bandwidth applies to both upstream and downstream traffic. For example, if the total bandwidth of an instance type is 768 Mbps (96 MB/s), both its upstream and downstream bandwidth are 768 Mbps (96 MB/s).
    
-   The bandwidth limit for Tair and Redis Open-Source Edition refers to the bandwidth of shard nodes, regardless of the network connectivity type.
    

For more information about bandwidth, see [Bandwidth FAQ](/help/en/redis/user-guide/faq-about-bandwidth).

## Maximum connections details

-   Proxy mode: The maximum number of connections for an instance is 500,000. The maximum number of connections does not increase beyond this limit, even if you add more shards or nodes.
    
-   Direct connection mode: The maximum number of connections for a single shard is 30,000. The maximum number of connections for an instance is calculated by multiplying the number of shards by 30,000.
    

## References

-   [Memory-optimized](/help/en/redis/product-overview/dram-based-instances)
    
-   [Performance Whitepapers for Redis Open-Source Edition, Redis Yitian Edition, and Memory-optimized Tair](/help/en/redis/support/performance-whitepaper-of-community-edition-instances)
