This topic describes the specifications of memory-optimized Tair (Enterprise Edition) instances that use a standard architecture. These specifications include memory capacity, maximum connections, bandwidth, and reference values for queries per second (QPS).

## Instance specifications

**Specification name**

**Specification code (for API calls)**

**CPU cores**

**I/O threads**

**Memory (GB)**

**Bandwidth**

**Maximum connections**

**QPS reference value**

1 GB master-replica

redis.amber.master.small.multithread

6

4

1

768 Mbps (96 MB/s)

30,000

240,000

2 GB master-replica

redis.amber.master.mid.multithread

6

4

2

768 Mbps (96 MB/s)

30,000

240,000

4 GB master-replica

redis.amber.master.stand.multithread

6

4

4

768 Mbps (96 MB/s)

40,000

240,000

8 GB master-replica

redis.amber.master.large.multithread

6

4

8

768 Mbps (96 MB/s)

40,000

240,000

16 GB master-replica

redis.amber.master.2xlarge.multithread

6

4

16

768 Mbps (96 MB/s)

40,000

240,000

32 GB master-replica

redis.amber.master.4xlarge.multithread

6

4

32

768 Mbps (96 MB/s)

50,000

240,000

64 GB master-replica

redis.amber.master.8xlarge.multithread

6

4

64

768 Mbps (96 MB/s)

50,000

240,000

## Notes about CPU cores

To ensure service stability, the system reserves a CPU core to process background tasks. In a [cluster instance](/help/en/redis/product-overview/cluster-master-replica-instances-1#concept-2348302) or a [read/write splitting instance](/help/en/redis/product-overview/read-or-write-splitting-instances#concept-2348477), the system reserves a CPU core for each shard or read replica to process background tasks.

  

## Bandwidth calculation rules

-   The bandwidth value in the table represents the total bandwidth for an instance, which is the sum of the bandwidths of all shards or nodes in the instance.
    
-   The bandwidth value applies to both upstream and downstream traffic. For example, if an instance has a bandwidth of 768 Mbps (96 MB/s), its upstream and downstream bandwidths are both 768 Mbps (96 MB/s).
    
    **Note**
    
    If your instance experiences burst or planned traffic peaks, you can adjust the instance bandwidth as needed. For more information, see [Manually increase the bandwidth of an instance](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance).
    
-   The bandwidth limit for Tair and Redis instances applies to the bandwidth of shard nodes and is independent of the network connection type.
    

For more information about bandwidth, see the [Bandwidth FAQ](/help/en/redis/user-guide/faq-about-bandwidth).

## FAQ

Why is the maximum number of connections for my instance different from the number described in this document?

The maximum number of connections for some instance types may change after a product upgrade. If the maximum number of connections for your instance is different from what is described in this document, you can change the instance configuration to update the bandwidth. When you change the configuration, select the current instance type as the target. For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
