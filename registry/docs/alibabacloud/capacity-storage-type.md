This topic describes the specifications of Tair disk-based instances, including memory capacity, maximum connections, and bandwidth.

## Instance types

The following table lists the specifications of a single shard.

-   For an instance that uses the standard architecture, the overall performance is the same as the performance of a single shard.
    
-   For an instance that uses the cluster architecture, the overall performance is the performance of a single shard × the number of shards.
    
    **Note**
    
    -   Starting May 8, 2024, when you create a new instance or upgrade an instance type, the maximum number of connections per shard for disk-based instances is increased to 60,000 or more. For more information, see the following table.
        
    -   Starting March 14, 2025, Tair will upgrade the following instance types: ESSD-based instances of 32C - 128GB or higher (**tair.essd.standard.8xlarge**, **tair.essd.standard.13xlarge**, and **tair.essd.standard.16xlarge**) and SSD-based instances of 32C - 256GB (**tair.localssd.c1m8.8xlarge** and **tair.localssd.c1m8.with.proxy.8xlarge**). When you create a new instance or upgrade an instance type, the maximum number of connections per shard is increased to 100,000.
        
    -   The available instance types vary based on the region, zone, and actual inventory.
        
    

### **ESSD-based shard specifications**

ESSD-based instances support only the [standard architecture](/help/en/redis/product-overview/standard-master-replica-instances) and do not support the cluster architecture.

**Instance type name**

**Instance type code (for API)**

**CPU cores**

**Memory (GB)**

**Optional storage PL and capacity (GB)**

**Maximum connections**

**Bandwidth**

4C - 16GB

tair.essd.standard.xlarge

4

16

PL1: 60 to 250

60,000

1,500 Mbps (187.5 MB/s)

8C - 32GB

tair.essd.standard.2xlarge

8

32

PL1: 60 to 500

PL2: 470 to 1000

60,000

2,000 Mbps (250 MB/s)

16C - 64GB

tair.essd.standard.4xlarge

16

64

PL1: 60 to 1000

PL2: 470 to 2000

PL3: 1270 to 4000

60,000

3,000 Mbps (375 MB/s)

32C - 128GB

tair.essd.standard.8xlarge

32

128

PL2: 470 to 4000

PL3: 1270 to 8000

100,000

5,000 Mbps (625 MB/s)

64C - 256GB

tair.essd.standard.16xlarge

64

256

PL2: 470 to 8000

PL3: 1270 to 16000

100,000

8,000 Mbps (1,000 MB/s)

**Note**

ESSD PL3 (Performance Level 3) provides better performance than PL2 and PL1. For more information, see [ESSD](/help/en/ecs/user-guide/essds#concept-727754).

### **SSD-based shard specifications for standard architecture and cluster architecture in direct connection mode**

The following specifications apply to SSD-based instances that use the standard architecture or the cluster architecture in direct connection mode. For more information about SSDs, see [Local disks](/help/en/ecs/user-guide/local-disks).

**Instance type name**

**Instance type code (for API)**

**CPU cores**

**Memory (GB)**

**Storage capacity (GB)**

**Maximum connections**

**Bandwidth**

4C-32GB

tair.localssd.c1m8.xlarge

4

32

640

60,000

1,500 Mbps (187.5 MB/s)

8C-64GB

tair.localssd.c1m8.2xlarge

8

64

1,280

60,000

2,500 Mbps (312.5 MB/s)

16C-128GB

tair.localssd.c1m8.4xlarge

16

128

2,560

60,000

5,000 Mbps (625 MB/s)

32C-256GB

tair.localssd.c1m8.8xlarge

32

256

5,120

100,000

10,000 Mbps (1,250 MB/s)

### SSD-based shard specifications for cluster architecture in proxy mode

The following specifications apply to SSD-based instances that use the cluster architecture in proxy mode.

**Instance type name**

**Instance type code (for API)**

**CPU cores**

**Memory (GB)**

**Storage capacity (GB)**

**Maximum connections**

**Bandwidth**

4C-32GB

tair.localssd.c1m8.with.proxy.xlarge

4

32

640

60,000

1,500 Mbps (187.5 MB/s)

8C-64GB

tair.localssd.c1m8.with.proxy.2xlarge

8

64

1,280

60,000

2,500 Mbps (312.5 MB/s)

16C-128GB

tair.localssd.c1m8.with.proxy.4xlarge

16

128

2,560

60,000

5,000 Mbps (625 MB/s)

32C-256GB

tair.localssd.c1m8.with.proxy.8xlarge

32

256

5,120

100,000

10,000 Mbps (1,250 MB/s)

## Performance description

**Architecture**

**Performance description**

[Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances)

The overall performance of the instance is the same as the performance specified in the instance type tables.

[Cluster architecture in direct connection mode](/help/en/redis/product-overview/cluster-master-replica-instances#section-dqj-mgc-4ir)

[Cluster architecture in proxy mode](/help/en/redis/product-overview/cluster-master-replica-instances#section-h69-izd-531)

Overall instance performance = Performance of a single shard × Number of shards.

**Note**

For an instance that uses the cluster architecture in proxy mode, the maximum bandwidth is 16,384 Mbps (2,048 MB/s) and the maximum number of connections is 500,000.

For example, if an instance has four shards and the shard instance type is **tair.localssd.c1m8.xlarge**, the performance of each shard is as follows:

-   CPU cores: 4
    
-   Memory: 32 GB
    
-   SSD capacity: 640 GB
    
-   Connections: 60,000
    
-   Bandwidth: 1,500 Mbps (187.5 MB/s)
    

Then, the overall performance of the instance is as follows:

-   CPU cores: 16
    
-   Memory: 128 GB
    
-   SSD capacity: 2,560 GB
    
-   Connections: 240,000
    
-   Bandwidth: 6,000 Mbps (750 MB/s)
    

## CPU core description

To ensure service stability, the system reserves one CPU core to process background tasks. If an instance uses the cluster or read/write splitting architecture, one CPU core is reserved for each data shard or read-only node to process background tasks.

  

## Bandwidth description

-   Each bandwidth value in the preceding tables represents the maximum bandwidth of a single shard. The total bandwidth of a cluster or read/write splitting instance is the combined bandwidth of all shards in the instance.
    
-   The maximum bandwidth of a cluster instance in proxy mode or a read/write splitting instance is 16,384 Mbps (2,048 MB/s). After the upper limit is reached, the bandwidth cannot be increased even if you add more shards to the instance. Cluster instances in direct connection mode have no limits on the overall bandwidth.
    
-   The bandwidth applies to the upstream and downstream bandwidths. For example, if the overall bandwidth of an instance is 768 Mbps (96 MB/s), the upstream and downstream bandwidths of the instance are both 768 Mbps (96 MB/s).
    
-   The bandwidth limits of Tair and Redis Open-Source Edition refer to the data transfer capacity of individual shards within their respective distributed systems. The limits are generally independent of the network connection types used by clients to connect to the shards.
    

For information about the FAQ about bandwidth, see [FAQ about bandwidth](/help/en/redis/user-guide/faq-about-bandwidth).

## Connection calculation rules

**Category**

**Description**

Maximum connections

-   Proxy mode: The maximum number of connections for an instance is 500,000. After this limit is reached, the maximum number of connections does not increase even if you add more shards.
    
-   Direct connection mode: The maximum number of connections for an instance is the maximum connections of a single shard × the number of shards.
    

## **Discontinued instance types**

Some instance types are discontinued, but you can continue to use the instances that you have purchased. This section provides information about the connection limits, bandwidth, and reference QPS values for the discontinued instance types.

**Expand to view details**

ESSD-based:

**Instance type name**

**Instance type code (for API)**

**CPU cores**

**Memory (GB)**

**Optional storage PL and capacity (GB)**

**Maximum connections**

**Bandwidth**

52C - 192GB

tair.essd.standard.13xlarge

52

192

PL2: 470 to 6000

PL3: 1270 to 12000

100,000

8,000 Mbps (1,000 MB/s)

## References

-   [Performance Whitepaper for Disk-based (ESSD) Instances](/help/en/redis/support/performance-white-paper-of-essd-based-instances)
    
-   [Performance Whitepaper for Disk-based (SSD) Instances](/help/en/redis/support/disk-ssd-performance-white-paper)
    
-   [Supported commands and restrictions for Tair](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition)
