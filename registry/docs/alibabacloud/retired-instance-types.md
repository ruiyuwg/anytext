You can no longer purchase new instances of some Tair (Redis OSS-compatible) specifications. You can continue to use your existing instances. This topic describes the connection limits, bandwidth, and queries per second (QPS) reference values for these retired specifications.

## Standard Edition for zone-disaster recovery

**Specification**

**InstanceClass (for API calls)**

**Maximum connections**

**Bandwidth (MB/s)**

**QPS reference**

1 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb1g.1db.0rodb.4proxy.default

10000

10

80000

2 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb2g.1db.0rodb.4proxy.default

10000

16

80000

4 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb4g.1db.0rodb.4proxy.default

10000

24

80000

8 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb8g.1db.0rodb.4proxy.default

10000

24

80000

16 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb16g.1db.0rodb.4proxy.default

10000

32

80000

32 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb32g.1db.0rodb.4proxy.default

10000

32

80000

64 GB zone-disaster recovery instance

redis.logic.sharding.drredissdb64g.1db.0rodb.4proxy.default

10000

48

80000

## Cluster Edition (dual-replica)

**Specification**

**InstanceClass (for API calls)**

**Shards**

**Maximum connections**

**Bandwidth (MB/s)**

**QPS reference**

1 GB cluster instance (2 shards)

redis.logic.sharding.512m.2db.0rodb.4proxy.default

2

20000

48

200000

1 GB cluster instance (4 shards)

redis.logic.sharding.256m.4db.0rodb.4proxy.default

4

40000

96

400000

2 GB cluster instance (4 shards)

redis.logic.sharding.512m.4db.0rodb.4proxy.default

4

40000

96

400000

2 GB cluster instance (8 shards)

redis.logic.sharding.256m.8db.0rodb.8proxy.default

8

80000

192

800000

4 GB cluster instance (8 shards)

redis.logic.sharding.512m.8db.0rodb.8proxy.default

8

80000

192

800000

4 GB cluster instance (16 shards)

redis.logic.sharding.256m.16db.0rodb.16proxy.default

16

160000

384

1600000

8 GB cluster instance (16 shards)

redis.logic.sharding.512m.16db.0rodb.16proxy.default

16

160000

384

1600000

8 GB cluster instance (32 shards)

redis.logic.sharding.256m.32db.0rodb.32proxy.default

32

320000

768

3200000

16 GB cluster instance (32 shards)

redis.logic.sharding.512m.32db.0rodb.32proxy.default

32

320000

768

3200000

16 GB cluster instance

redis.sharding.small.default

8

80000

768

640000

32 GB cluster instance

redis.sharding.mid.default

8

80000

768

640000

64 GB cluster instance

redis.sharding.large.default

8

80000

768

640000

128 GB cluster instance

redis.sharding.2xlarge.default

16

160000

1536

1280000

256 GB cluster instance

redis.sharding.4xlarge.default

16

160000

1536

1280000

512 GB cluster instance

redis.sharding.8xlarge.default

32

320000

2048

2560000

## Cluster Edition for zone-disaster recovery

**Specification**

**InstanceClass (for API calls)**

**Shards**

**Maximum connections**

**Bandwidth (MB/s)**

**QPS reference**

16 GB cluster instance for zone-disaster recovery

redis.logic.sharding.drredismdb16g.8db.0rodb.8proxy.default

8

80000

768

640000

32 GB cluster instance for zone-disaster recovery

redis.logic.sharding.drredismdb32g.8db.0rodb.8proxy.default

8

80000

768

640000

64 GB cluster instance for zone-disaster recovery

redis.logic.sharding.drredismdb64g.8db.0rodb.8proxy.default

8

80000

768

640000

128 GB cluster instance for zone-disaster recovery

redis.logic.sharding.drredismdb128g.16db.0rodb.16proxy.default

16

160000

1536

1280000

256 GB cluster instance for zone-disaster recovery

redis.logic.sharding.drredismdb256g.16db.0rodb.16proxy.default

16

160000

1536

1280000

512 GB cluster instance for zone-disaster recovery

redis.logic.sharding.drredismdb512g.32db.0rodb.32proxy.default

32

320000

2048

2560000

## Calculation rules for bandwidth values

-   Each bandwidth value in the preceding table represents the maximum bandwidth for an instance of the corresponding instance type, which is the combined bandwidth of all shards or nodes in the instance.
    
-   The bandwidth applies to the upstream and downstream bandwidths. For example, if the bandwidth of an instance is 80 Mbps (10 MB/s), the upstream and downstream bandwidths of the instance are both 80 Mbps (10 MB/s).
    
    **Note**
    
    If your instance has unexpected or scheduled traffic peaks, you can adjust the bandwidth of the instance. For more information, see [Manually increase the bandwidth of an instance](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance#task-s5f-jy4-kgb).
    
-   The bandwidth limits of Tair and Redis Open-Source Edition refer to the data transfer capacity of individual shards within their respective distributed systems. The limits are generally independent of the network connection types used by clients to connect to the shards.
    

For information about the FAQ about bandwidth, see [FAQ about bandwidth](/help/en/redis/user-guide/faq-about-bandwidth).

## FAQ

Q: The zone-disaster recovery specifications for Tair (Redis OSS-compatible) are retired. How can I create an instance that supports zone-disaster recovery?

A: The zone-disaster recovery architecture for Tair (Redis OSS-compatible) has been upgraded. When you create an instance, you can set **Zone Type** to **Dual-zone** and specify a **Primary Zone** and a **Secondary Zone**.
