This topic describes the instance types, memory capacity, connections, and bandwidth for Tair (Enterprise Edition) persistent memory-optimized instances.

## Instance types

The following tables list the specifications of individual shards. The overall performance of a cluster or read/write splitting instance can be calculated by using the following formula: Overall performance = Performance of a single shard × Number of shards.

**Note**

-   The Enterprise SSDs ([ESSDs](/help/en/ecs/user-guide/essds#concept-727754)) listed in these tables are provided for dedicated storage of system files, such as logs, backups of temporary files, and append-only files (AOFs). They are not intended for data storage.
    
-   For information about the differences between the direct connection mode and the proxy mode that are supported by cluster instances, see [Cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances).
    
-   You can adjust the number of shards for cluster instances that are deployed in cloud-native mode. For more information, see [Adjust the number of shards for a cluster instance](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards).
    

### Shard specifications for standard architecture and cluster architecture in direct connection mode

The following specifications apply to instances that use the standard architecture or the cluster architecture in direct connection mode.

Table 1. Shard specifications for standard architecture and cluster architecture in direct connection mode

**Specification name**

**Instance Type Code (for API calls)**

**CPU Cores**

**Persistent Memory (GB)**

ESSD (GB)

**Bandwidth**

**Maximum Connections**

**QPS (Reference)**

4 GB

tair.scm.standard.1m.4d

3

4

12

768 Mbps (96 MB/s)

20,000

100,000

8 GB

tair.scm.standard.2m.8d

3

8

24

768 Mbps (96 MB/s)

20,000

100,000

16 GB

tair.scm.standard.4m.16d

3

16

48

768 Mbps (96 MB/s)

20,000

100,000

32 GB

tair.scm.standard.8m.32d

3

32

96

768 Mbps (96 MB/s)

30,000

100,000

64 GB

tair.scm.standard.16m.64d

3

64

192

768 Mbps (96 MB/s)

30,000

100,000

**Note**

-   The 4 GB instance type is not supported for the cluster architecture in direct connection mode.
    
-   If you enable read/write splitting for a standard architecture instance, refer to the shard specifications for the read/write splitting architecture.
    

### Shard specifications for cluster architecture in proxy mode and read/write splitting architecture

The following specifications apply to instances that use the cluster architecture in proxy mode or the read/write splitting architecture.

Table 2. Shard specifications for cluster architecture in proxy mode and read/write splitting architecture

**Specification name**

**Instance Type Code (for API calls)**

**CPU Cores**

**Persistent Memory (GB)**

enterprise SSD (ESSD) (GB)

**Bandwidth**

**Maximum Connections**

**QPS (Reference)**

4 GB

tair.scm.with.proxy.standard.1m.4d

3

8

24

768 Mbps (96 MB/s)

20,000

100,000

8 GB

tair.scm.with.proxy.standard.2m.8d

3

8

24

768 Mbps (96 MB/s)

20,000

100,000

16 GB

tair.scm.with.proxy.standard.4m.16d

3

16

48

768 Mbps (96 MB/s)

20,000

100,000

32 GB

tair.scm.with.proxy.standard.8m.32d

3

32

96

768 Mbps (96 MB/s)

30,000

100,000

64 GB

tair.scm.with.proxy.standard.16m.64d

3

64

192

768 Mbps (96 MB/s)

30,000

100,000

**Note**

The 4 GB instance type is not supported for the cluster architecture in proxy mode.

## Performance details

**Architecture**

**Performance details**

[Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances)

The overall performance of the instance is the same as the performance listed in the instance type table.

[Cluster architecture (direct connection mode)](/help/en/redis/product-overview/cluster-master-replica-instances#section-dqj-mgc-4ir)

[Cluster architecture (proxy mode)](/help/en/redis/product-overview/cluster-master-replica-instances#section-h69-izd-531)

[Read/write splitting](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb)

Overall instance performance = Performance per shard × Number of shards.

**Note**

For an instance in cluster architecture with proxy mode, the maximum bandwidth is 16,384 Mbps (2,048 MB/s) and the maximum number of connections is 500,000.

For example, if an instance has four shards and each shard is of the tair.scm.with.proxy.standard.2m.8d instance type, the performance of each shard is:

-   CPU cores: 3
    
-   Bandwidth: 768 Mbps (96 MB/s)
    
-   Connections: 10,000
    

The overall performance of the instance is:

-   CPU cores: 12
    
-   Bandwidth: 3,072 Mbps (384 MB/s)
    
-   Maximum connections: 40,000
    

## CPU core details

To ensure service stability, the system reserves one CPU core to process background tasks . If the instance uses the cluster or read/write splitting architecture, one CPU core is reserved on each data shard or read-only node to process background tasks.

  

## Bandwidth description

-   Each bandwidth value in the preceding tables represents the maximum bandwidth of a single shard. The total bandwidth of a cluster or read/write splitting instance is the combined bandwidth of all shards in the instance.
    
-   The maximum bandwidth of a cluster instance in proxy mode or a read/write splitting instance is 16,384 Mbps (2,048 MB/s). After the upper limit is reached, the bandwidth cannot be increased even if you add more shards to the instance. Cluster instances in direct connection mode have no limits on the overall bandwidth.
    
-   The bandwidth applies to the upstream and downstream bandwidths. For example, if the overall bandwidth of an instance is 768 Mbps (96 MB/s), the upstream and downstream bandwidths of the instance are both 768 Mbps (96 MB/s).
    
-   The bandwidth limits of Tair and Redis Open-Source Edition refer to the data transfer capacity of individual shards within their respective distributed systems. The limits are generally independent of the network connection types used by clients to connect to the shards.
    

For information about the FAQ about bandwidth, see [FAQ about bandwidth](/help/en/redis/user-guide/faq-about-bandwidth).

## **Maximum connections details**

-   Proxy mode: The maximum number of connections for an instance is 500,000. The maximum number of connections does not increase beyond this limit, even if you add more shards or nodes.
    
-   Direct connection mode: The maximum number of connections for a single shard is 10,000. The maximum number of connections for an instance is the number of shards × 10,000.
    

## References

-   [Persistent Memory-Optimized Instance Performance Whitepaper](/help/en/redis/support/performance-white-paper-of-persistent-memory-optimized-instances)
    
-   [Supported commands and restrictions for Tair (Enterprise Edition)](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition)
