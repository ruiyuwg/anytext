This topic describes the instance types for Redis Open-Source Edition cloud native instances. This includes information about memory capacity, CPU performance, network bandwidth, maximum connections, and reference values for queries per second (QPS).

## Instance types

The following tables show the specifications for a single shard. The overall performance of an instance in cluster architecture or read/write splitting architecture is calculated as follows: Shard performance × Number of shards.

**Note**

-   The [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds#concept-727754) in the specifications is used only for system operations, such as storing logs, temporary backup files, and Append-only File (AOF) files. It is not used for data storage.
    
-   For more information about the differences between the direct connection mode and proxy mode for the cluster architecture, see [Cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb).
    
-   Cloud native instances in cluster architecture allow you to adjust the number of shard nodes. For more information, see [Adjust the number of shards for a cluster instance](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards#task-2022112).
    

### Shard specifications for non-cluster architecture (standard architecture)

Non-cluster architecture is also known as standard architecture. The following specifications apply to cloud native instances that use the standard architecture.

**Note**

If read/write splitting is enabled for a standard architecture instance, see [Shard specifications for read/write splitting architecture](#1c7b02bab98f3).

**Instance type name**

**Instance type code (for API calls)**

**CPU cores**

**Memory (GB)**

ESSD (GB)

**Bandwidth**

**Maximum connections**

**Reference QPS**

256 MB

redis.shard.micro.ce

3

0.25

1

192 Mbps (24 MB/s)

10,000

100,000

1 GB

redis.shard.small.2.ce

3

1

5

384 Mbps (48 MB/s)

10,000

100,000

2 GB

redis.shard.mid.2.ce

3

2

10

768 Mbps (96 MB/s)

10,000

100,000

4 GB

redis.shard.large.ce

3

4

20

768 Mbps (96 MB/s)

20,000

100,000

8 GB

redis.shard.xlarge.ce

3

8

40

768 Mbps (96 MB/s)

20,000

100,000

16 GB

redis.shard.2xlarge.ce

3

16

80

768 Mbps (96 MB/s)

20,000

100,000

24 GB

redis.shard.3xlarge.ce

3

24

120

768 Mbps (96 MB/s)

30,000

100,000

32 GB

redis.shard.4xlarge.ce

3

32

160

768 Mbps (96 MB/s)

30,000

100,000

64 GB

redis.shard.8xlarge.ce

3

64

320

768 Mbps (96 MB/s)

30,000

100,000

### Shard specifications for cluster architecture in direct connection mode

The following specifications apply to cloud native instances that use the cluster architecture in direct connection mode.

**Instance type name**

**Instance type code (for API calls)**

**CPU cores**

**Memory (GB)**

ESSD (GB)

**Bandwidth**

**Maximum connections**

**Reference QPS**

1 GB

redis.shard.small.ce

3

1

5

384 Mbps (48 MB/s)

10,000

100,000

2 GB

redis.shard.mid.ce

3

2

10

768 Mbps (96 MB/s)

10,000

100,000

4 GB

redis.shard.large.ce

3

4

20

768 Mbps (96 MB/s)

20,000

100,000

8 GB

redis.shard.xlarge.ce

3

8

40

768 Mbps (96 MB/s)

20,000

100,000

16 GB

redis.shard.2xlarge.ce

3

16

80

768 Mbps (96 MB/s)

20,000

100,000

24 GB

redis.shard.3xlarge.ce

3

24

120

768 Mbps (96 MB/s)

30,000

100,000

32 GB

redis.shard.4xlarge.ce

3

32

160

768 Mbps (96 MB/s)

30,000

100,000

64 GB

redis.shard.8xlarge.ce

3

64

320

768 Mbps (96 MB/s)

30,000

100,000

### Shard specifications for cluster architecture in proxy mode and read/write splitting architecture

The following specifications apply to cloud native instances that use the cluster architecture in proxy mode or the read/write splitting architecture.

**Instance type name**

**Instance type code (for API calls)**

**CPU cores**

**Memory (GB)**

ESSD (GB)

**Bandwidth**

**Maximum connections**

**Reference QPS**

1 GB

redis.shard.with.proxy.small.ce

3

1

5

384 Mbps (48 MB/s)

10,000

100,000

2 GB

redis.shard.with.proxy.mid.ce

3

2

10

768 Mbps (96 MB/s)

10,000

100,000

4 GB

redis.shard.with.proxy.large.ce

3

4

20

768 Mbps (96 MB/s)

20,000

100,000

8 GB

redis.shard.with.proxy.xlarge.ce

3

8

40

768 Mbps (96 MB/s)

20,000

100,000

16 GB

redis.shard.with.proxy.2xlarge.ce

3

16

80

768 Mbps (96 MB/s)

20,000

100,000

24 GB

redis.shard.with.proxy.3xlarge.ce

3

24

120

768 Mbps (96 MB/s)

30,000

100,000

32 GB

redis.shard.with.proxy.4xlarge.ce

3

32

160

768 Mbps (96 MB/s)

30,000

100,000

64 GB

redis.shard.with.proxy.8xlarge.ce

3

64

320

768 Mbps (96 MB/s)

30,000

100,000

## Performance details

**Architecture**

**Performance details**

[Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances#concept-qf3-kjh-tdb)

The overall performance of the instance is the same as the performance listed in the instance type table.

[Cluster architecture in direct connection mode](/help/en/redis/product-overview/cluster-master-replica-instances#section-dqj-mgc-4ir)

[Cluster architecture in proxy mode](/help/en/redis/product-overview/cluster-master-replica-instances#section-h69-izd-531)

[Read/write splitting feature](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb)

The overall performance of the instance is calculated as follows: Shard performance × Number of shards.

For example, if an instance has four shards of the redis.shard.with.proxy.small.ce type, the performance of each shard is as follows:

-   CPU cores: 2 working cores + 1 background core.
    
-   Bandwidth: 384 Mbps (48 MB/s).
    
-   Maximum connections: 10,000.
    
-   Reference QPS: 100,000.
    

The overall performance of the instance is as follows:

-   CPU cores: 12 cores.
    
-   Bandwidth: 1,536 Mbps (192 MB/s).
    
-   Maximum connections: 40,000.
    
-   Reference QPS: 400,000.
    

## CPU core details

The three cores are divided into two working cores and one background core. The working cores process user service requests. The background core handles non-service tasks such as persistence, accelerated expiration, performance analysis, and logging.

  

## Bandwidth details

-   The bandwidth values in the preceding tables are for a single shard. The total bandwidth of an instance in cluster architecture or read/write splitting architecture is the sum of the bandwidth of all shard nodes.
    
-   The maximum bandwidth for an instance in cluster architecture (proxy mode) or read/write splitting architecture is 16,384 Mbps (2,048 MB/s). After this limit is reached, the bandwidth does not increase even if you add more shards. The cluster architecture in direct connection mode does not have an overall bandwidth limit.
    
-   The bandwidth applies to both upstream and downstream traffic. For example, if an instance type has a bandwidth of 192 Mbps (24 MB/s), its upstream and downstream bandwidth are both 192 Mbps (24 MB/s).
    
-   The bandwidth limit for Tair and Redis Open-Source Edition refers to the bandwidth of shard nodes and is independent of the network connection type.
    

For more information, see [Bandwidth FAQ](/help/en/redis/user-guide/faq-about-bandwidth).

## Maximum connections details

-   Proxy mode: The maximum number of connections for an instance is 500,000. This limit does not increase even if you add more shards or nodes.
    
-   Direct connection mode: The maximum number of connections for a single shard is 10,000. The maximum number of connections for an instance is calculated as follows: Number of shards × 10,000.
    

## FAQ

#### Do Redis Open-Source Edition **instances of different types vary in running speed or performance?**

Yes. The 256 MB and 1 GB Redis Open-Source Edition instances have a bandwidth lower than 768 Mbps (96 MB/s). All Redis Open-Source Edition instances of 2 GB or larger have the same CPU and bandwidth specifications. They differ only in memory capacity.
