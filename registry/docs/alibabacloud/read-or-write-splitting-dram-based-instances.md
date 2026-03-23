This topic describes the specifications of memory-optimized Tair (Enterprise Edition) instances that use a read/write splitting architecture. These specifications include the number of read replicas, memory capacity, maximum connections, bandwidth, and reference values for queries per second (QPS).

## Instance specifications

**Specification**

**InstanceClass (for API calls)**

**CPU cores**

**I/O threads**

**Read-only nodes**

**Bandwidth (MB/s)**

Maximum connections ( proxy mode )

**Reference QPS**

1 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.small.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

2 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.mid.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

4 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.stand.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

8 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.large.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

16 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.2xlarge.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

32 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.4xlarge.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

64 GB read/write splitting edition (2 replicas, including 1 read replica)

redis.amber.logic.splitrw.8xlarge.1db.1rodb.6proxy.multithread

12

4

1

192

60,000

480,000

1 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.small.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

2 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.mid.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

4 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.stand.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

8 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.large.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

16 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.2xlarge.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

32 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.4xlarge.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

64 GB read/write splitting edition (4 replicas, including 3 read replicas)

redis.amber.logic.splitrw.8xlarge.1db.3rodb.12proxy.multithread

24

4

3

384

120,000

960,000

1 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.small.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

2 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.mid.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

4 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.stand.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

8 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.large.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

16 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.2xlarge.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

32 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.4xlarge.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

64 GB read/write splitting edition (6 replicas, including 5 read replicas)

redis.amber.logic.splitrw.8xlarge.1db.5rodb.18proxy.multithread

36

4

5

576

480,000

1,440,000

## Notes about CPU cores

To ensure service stability, the system reserves a CPU core to process background tasks. In a [cluster instance](/help/en/redis/product-overview/cluster-master-replica-instances-1#concept-2348302) or a [read/write splitting instance](/help/en/redis/product-overview/read-or-write-splitting-instances#concept-2348477), the system reserves a CPU core for each shard or read replica to process background tasks.

  

## Bandwidth calculation rules

-   The bandwidth values in the table represent the total bandwidth for an entire instance, which is the sum of the bandwidth of all shards or nodes in the instance.
    
-   The maximum total bandwidth for a read/write splitting instance is 2,048 MB/s. The bandwidth does not increase beyond this limit, even if you select an instance type with more nodes.
    
-   The bandwidth value applies to both upstream and downstream bandwidth. For example, if an instance type has a bandwidth of 96 MB/s, both its upstream and downstream bandwidth are 96 MB/s.
    
    **Note**
    
    If your instance experiences unexpected or planned traffic surges, you can adjust the instance bandwidth. For more information, see [Manually increase the bandwidth of an instance](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance#task-s5f-jy4-kgb).
    
-   The bandwidth limits for Tair and Redis refer to the bandwidth of the shards, regardless of the network connection type.
    

For more information about bandwidth, see the [Bandwidth FAQ](/help/en/redis/user-guide/faq-about-bandwidth).

## Maximum connections details

Proxy mode: The maximum number of connections for an instance is 480,000. The maximum number of connections does not increase beyond this limit, even if you add more shards or nodes.

**Note**

For instances created before March 1, 2020, the maximum number of connections in proxy mode is 200,000.

When you use PUBSUB, BLOCK, or transaction commands in proxy mode, the proxy creates a dedicated backend connection for the client connection. These connections cannot be aggregated. Therefore, the maximum number of connections is limited by the connection limit of a single data shard, which is 30,000.
