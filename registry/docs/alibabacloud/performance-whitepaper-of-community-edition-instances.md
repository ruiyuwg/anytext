This topic provides the performance test results for Tair memory-optimized, Redis Open-Source Edition instances. It also describes the test environment, tools, and methods.

## **Test results**

This section provides performance test metrics for more than ten basic Redis commands, such as SET and GET.

**Command**

**Tair memory-optimized**

**Redis Open-Source Edition**

**QPS**

**Average Latency**

**99th Percentile Latency**

**QPS**

**Average Latency**

**99th Percentile Latency**

SET

282,656

0.45

0.86

142,376

0.45

0.72

GET

519,761

0.24

0.36

204,690

0.31

0.47

ZADD

208,169

0.62

1.14

113,135

0.57

0.78

ZSCORE

463,904

0.27

0.40

170,163

0.37

0.54

HSET

260,069

0.49

1.03

124,613

0.51

0.97

HGET

494,603

0.25

0.37

188,903

0.34

0.52

LPUSH

286,324

0.44

0.84

153,269

0.42

0.59

LINDEX

414,070

0.30

0.45

157,568

0.40

0.58

SADD

292,738

0.44

0.86

140,155

0.45

0.63

SISMEMBER

531,139

0.24

0.34

181,492

0.35

0.52

EVALSHA

214,303

0.60

1.12

101,136

0.63

0.91

Description of test metrics:

-   Queries Per Second (QPS): The number of read and write operations processed per second.
    
-   Average Latency: The average latency of operations, in milliseconds (ms).
    
-   99th Percentile Latency: The maximum latency for 99% of operations, in milliseconds (ms). For example, a value of 0.5 ms means that 99% of requests are processed within 0.5 ms.
    

**Note**

-   The test results are the average values from multiple tests run on multiple instances across multiple zones.
    
-   The latency in the test results is the end-to-end delay. It includes the queuing time for data packets on both the database and the stress testing client.
    
-   The test results are affected by many uncontrollable factors. An error margin of approximately 10% is reasonable.
    
-   The test results reflect single-command tests on new instances only. For stress testing in a production environment, use your specific business scenario.
    
-   The test results show the peak performance of the instances. Do not run instances at peak load in a production environment.
    

## Test environment

### Database

**Environment context**

**Description**

Region and zone

China (Beijing) Zone L, China (Hangzhou) Zone K, China (Shanghai) Zone N, and China (Shenzhen) Zone C.

**Note**

This test was performed in multiple regions. This report shows only the average performance level of the preceding zones.

Instance architecture

Standard architecture (dual-replica). Clusters are not enabled. For more information, see [Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances).

**Note**

Performance of other architectures:

-   Cluster architecture in proxy mode: If the requested keys are evenly distributed, the performance is no less than n times that of the standard architecture.
    
-   Cluster architecture in direct connection mode: If the requested keys are evenly distributed, the performance is equal to n times that of the standard architecture.
    
-   Read/write splitting architecture: The write performance is slightly lower than that of the standard architecture because of more replication traffic. The read performance is no less than n times that of the standard architecture.
    

n is the number of shards in a cluster architecture or the total number of nodes in a read/write splitting architecture.

Instance version

This test is compatible with Redis 7.0. The version usually has little impact on the results.

Instance type

The following instance types were tested:

-   Tair memory-optimized 8 GB (tair.rdb.8g)
    
-   Redis Open-Source Edition 8 GB (redis.shard.xlarge.ce)
    

The test results are not significantly affected by the instance type. For more information about instance types, see [Instance types and FAQ](/help/en/redis/product-overview/overview-4/).

### Test client

**Test environment**

**Description**

Device for deploying the stress testing tool

An [Elastic Computing Service](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome) (ECS) instance with the ecs.g7.8xlarge instance type. For more information, see [Instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

Region and zone

The same region and zone as the instance.

Operating system

Alibaba Cloud Linux 3.

Network

The client is in the same virtual private cloud (VPC) as the Tair instance and connects to the Tair instance over the VPC.

## Test tool

The tests use the open-source [**resp-benchmark**](https://github.com/tair-opensource/resp-benchmark) tool from the Tair team.

-   Tests for common commands, such as SET and GET, are consistent with those in redis-benchmark. For complex commands, a test mode that more closely simulates real-world business scenarios is used.
    
-   The multi-threaded capability is enabled by default to maximize the request pressure on the server and prevent the stress testing client from becoming a performance bottleneck.
    

> If you use redis-benchmark, use Redis 7.0 or later because this version provides optimized multi-threaded support for the benchmark tool.

### Installation method

```
pip install resp-benchmark==0.1.7
```

**Note**

After installation, run the `resp-benchmark --help` command for more details about the configuration items, or visit its [GitHub homepage](https://github.com/tair-opensource/resp-benchmark).

## **Test examples**

**Important**

-   Before each test, clear the database to avoid interference from existing data.
    
-   If you do not specify the number of connections, resp-benchmark automatically selects a suitable number. To measure data under peak load, manually adjust the number of connections. For example, set the number of connections to 128 by adding the `-c 128` parameter. A low number of connections results in insufficient test pressure and a low QPS. A high number of connections may exceed the DB's processing capacity, which causes data packets to queue in the network link for a long time and results in high latency. Because many factors have an impact, a fixed number of connections cannot be provided. Common settings are 32, 64, 128, 192, and 256. Adjust the number as needed based on your test results.
    

The following sections provide test examples for each command:

-   SET
    
    This metric represents the performance of the SET command.
    
    This example tests the SET command. The key range is 0 to 10,000,000, which means the generated key names are from `key_0000000000` to `key_0009999999`. The value size is 64 bytes, and the test duration is 20 seconds.
    
    ```
    resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "SET {key uniform 10000000} {value 64}"
    ```
    
-   GET
    
    This metric represents the performance of the GET command.
    
    1.  Prepare the data. The key range is 0 to 10,000,000, and the value size is 64 bytes.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 --load -c 256 -P 10 -n 10000000 "SET {key sequence 10000000} {value 64}"
        ```
        
    2.  This example tests the GET command. The test duration is 20 seconds.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "GET {key uniform 10000000}"
        ```
        
    
-   ZADD
    
    This metric represents the performance of the ZADD command.
    
    This example tests the write performance of the ZADD command. The key range is 0 to 1,000, and the score range is 0 to 70,000. Each key has a maximum of 10,000 members. The test duration is 20 seconds.
    
    ```
    resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "ZADD {key uniform 1000} {rand 70000} {key uniform 10000}"
    ```
    
-   ZSCORE
    
    This metric represents the performance of the ZSCORE command.
    
    1.  Prepare the data. The key range is 0 to 1,000, and the score range is 0 to 70,000. Each key has a maximum of 10,007 members.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 --load -c 256 -P 10 -n 10007000 "ZADD {key sequence 1000} {rand 70000} {key sequence 10007}"
        ```
        
    2.  This example tests the ZSCORE command. The test duration is 20 seconds.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "ZSCORE {key uniform 1000} {key uniform 10007}"
        ```
        
    
-   HSET
    
    This metric represents the performance of the HSET command.
    
    This example tests the HSET command. The key range is 0 to 1,000, and the field range is 0 to 10,000. The value of each field is 64 bytes. The test duration is 20 seconds.
    
    ```
    resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "HSET {key uniform 1000} {key uniform 10000} {value 64}"
    ```
    
-   HGET
    
    This metric represents the performance of the HGET command.
    
    1.  Prepare the data. The key range is 0 to 1,000. Each key contains 10,007 fields. The value of each field is 64 bytes.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 --load -c 256 -P 10 -n 10007000 "HSET {key sequence 1000} {key sequence 10007} {value 64}"
        ```
        
    2.  This example tests the HGET command. The test duration is 20 seconds.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "HGET {key uniform 1000} {key uniform 10007}"
        ```
        
    
-   LPUSH
    
    This metric represents the performance of the LPUSH command.
    
    This example tests the LPUSH command. The key range is 0 to 1,000, the value size is 64 bytes, and the test duration is 20 seconds.
    
    ```
    resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "LPUSH {key uniform 1000} {value 64}"
    ```
    
-   LINDEX
    
    This metric represents the performance of the LINDEX command.
    
    1.  Prepare the data. The key range is 0 to 1,000. Each key contains 10,000 elements, and the size of each element is 64 bytes.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 --load -c 256 -P 10 -n 10000000 "LPUSH {key sequence 1000} {value 64}"
        ```
        
    2.  This example tests the LINDEX command. The test duration is 20 seconds.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "LINDEX {key uniform 1000} {rand 10000}"
        ```
        
    
-   SADD
    
    This metric represents the performance of the SADD command.
    
    This example tests the SADD command. The key range is 0 to 1,000, the value size is 64 bytes, and the test duration is 20 seconds.
    
    ```
    resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "SADD {key uniform 1000} {value 64}"
    ```
    
-   SISMEMBER
    
    This metric represents the performance of the SISMEMBER command.
    
    1.  Prepare the data. The key range is 0 to 1,000. Each key contains 10,007 members, and the size of each member is 64 bytes.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 --load -c 256 -P 10 -n 10007000 "SADD {key sequence 1000} {key sequence 10007}"
        ```
        
    2.  This example tests the SISMEMBER command. The test duration is 20 seconds.
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "SISMEMBER {key uniform 1000} {key uniform 10007}"
        ```
        
    
-   EVALSHA
    
    This metric represents the performance of running the SET command using EVALSHA. The key range for the SET command is from 0 to 10,000,000, and the value size is 64 bytes.
    
    1.  Load the Lua script:
        
        ```
        redis-cli -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 SCRIPT LOAD "return redis.call('SET', KEYS[1], ARGV[1])"
        ```
        
    2.  Test the command for 20 seconds:
        
        ```
        resp-benchmark -h r-bp1u****8qyvemv2em.redis.rds.aliyuncs.com -p 6379 -s 20 "EVALSHA d8f2fad9f8e86a53d2a6ebd960b33c4972cacc37 1 {key uniform 10000000} {value 64}"
        ```
