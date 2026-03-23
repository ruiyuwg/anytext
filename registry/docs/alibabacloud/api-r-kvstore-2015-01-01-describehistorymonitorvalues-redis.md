Queries the performance monitoring data of a Tair (Redis OSS-compatible) instance.

## Operation description

You can also query the performance monitoring data of an instance in the Tair console. For more information, see [Metrics](/help/en/redis/user-guide/metrics) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeHistoryMonitorValues)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeHistoryMonitorValues)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

kvstore:DescribeHistoryMonitorValues

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

-   kvstore:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2022-11-06T00:00:00Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time. Specify the time in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** You can query the monitoring data of the previous month. The maximum time range that you can specify for a query is seven days.

2022-11-06T00:30:00Z

IntervalForHistory

string

Yes

This parameter is deprecated. Set the value to `01m`.

The **interval at which a query is performed** is automatically determined based on the start time and end time of the query. For example, if the query time range is less than or equal to 10 minutes, data is aggregated at a frequency of every 5 seconds and the results are returned at 5-second intervals.

**Note**-   The query result is aligned with the data aggregation frequency. If the specified StartTime value does not coincide with a point in time for data aggregation, the system returns the latest point in time for data aggregation as the first point in time. For example, if you set the StartTime parameter to 2022-01-20T12:01:48Z, the first point in time returned is 2022-01-20T12:01:45Z.
-   If the number of data shards is greater than or equal to 32, the minimum data aggregation frequency is 1 minute.

01m

MonitorKeys

string

No

The monitoring metrics. Separate the metrics with commas (,). Take CpuUsage as an example:

-   Cluster or read/write splitting instances
    
    -   To query the overall CPU utilization of all data nodes, specify **CpuUsage$db**.
    -   To query the CPU utilization of a single data node, specify **CpuUsage** and NodeId.
-   Standard master-replica instances: Specify only **CpuUsage**.
    

For more information about monitoring metrics and their descriptions, see [Additional description of MonitorKeys](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis).

**Note**-   This parameter is empty by default, which indicates that the UsedMemory and quotaMemory metrics are returned.
-   To ensure query efficiency, we recommend that you specify no more than five metrics for a single node at a time, and specify only a single metric when you query aggregate metrics.

memoryUsage

NodeId

string

No

The ID of the node in the instance. You can set this parameter to query the data of a specified node.

-   This parameter is available only for read/write splitting or cluster instances of Tair.
    
-   You can call the [DescribeLogicInstanceTopology](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describelogicinstancetopology-redis) operation to query node IDs.
    

r-bp1zxszhcgatnx\*\*\*\*-db-0#1679\*\*\*\*

NodeRole

string

No

If you want to query the metrics of the read replicas in a cloud-native read/write splitting instance, you must set this parameter to **READONLY** and specify **NodeId**.

**Note** In other cases, you do not need to specify this parameter or you can set this parameter to **MASTER**.

READONLY

### Additional description of MonitorKeys

When you call the operation, you must specify the parameters in the **MonitorKeys** column of the following table. The system returns submetrics. General monitoring metrics and command-related monitoring metrics are available for instances.

#### [](#general-monitoring-metrics)General monitoring metrics

In this example, the CpuUsage metric is used to describe how to use a general monitoring metric.

-   Cluster or read/write splitting instances:
    
    -   To query the overall CPU utilization of all data nodes, you must specify **CpuUsage$db**.
    -   To query the CPU utilization of all proxy nodes, you must specify **CpuUsage$proxy**.
    -   To query the CPU utilization of a single data node or proxy node, you must specify **CpuUsage** and NodeId.
-   Standard master-replica instances: Specify only **CpuUsage**.
    

**MonitorKeys**

**Submetric**

**Unit**

**Description**

**Applicable scope**

CpuUsage

CpuUsage

%

The CPU utilization. Valid values: 0 to 100.

**Note** If the RedisCpuUsage parameter is specified or returned for your instance in the previous request, you can continue to use the parameter.

-   DB
    
-   Database aggregation
    
-   Proxy
    
-   Proxy node aggregation
    

MemoryUsage

memoryUsage

%

The memory usage.

-   DB
    
-   Database aggregation
    

quotaMemory

quotaMemory

Bytes

The total memory of the data shard.

-   DB
    
-   DB aggregation
    

UsedMemory

UsedMemory

Bytes

The amount of used memory, which includes the memory consumed by data and cache.

-   DB
    
-   DB aggregation
    

Tair\_PmemUsage

PmemUsage

%

The Persistent Memory (PMem) usage, the amount of PMem used, and the total amount of PMem.

These submetrics are available only for persistent memory-optimized instances.

-   DB
    
-   DB aggregation
    

Tair\_Pmem

PmemUsed

Bytes

PmemQuota

Bytes

Redis\_DetailedSpaceUsage

ins\_size

MB

The total disk space used by the instance, the disk space used by data files such as append-only files (AOFs) and Redis Database (RDB) files, and the disk space used by logs such as active logs. These submetrics are available only for DRAM-based instances that are deployed in classic (local disk-based) mode.

-   DB
    
-   DB aggregation
    

data\_size

MB

log\_size

MB

Redis\_Memory\_Monitor

used\_memory\_rss

Bytes

The physical memory used by the process, which is the memory allocated by the operating system to Tair.

-   DB
    

used\_memory\_lua

Bytes

The amount of memory used by Lua scripts.

used\_memory\_startup

Bytes

The amount of memory used by Tair during startup.

lazyfree\_pending\_objects

Counts

The number of keys pending to be reclaimed when Tair performs lazy free operations.

used\_memory\_overhead

Bytes

The amount of memory that is used to support the internal mechanisms of Tair for maintaining datasets, including the output buffers, query buffers, and AOFs for all clients.

used\_memory\_dataset

Bytes

The amount of memory used by data.

UsedQPS

TotalQps

Counts/s

The total number of requests per second, including both read and write requests.

-   DB
    
-   DB aggregation
    
-   Proxy
    
-   Proxy aggregation
    

GetQps

Counts/s

The number of read requests per second and the number of write requests per second. These submetrics are available only for instances that run Redis 4.0 or later.

PutQps

Counts/s

OtherOps

Counts/s

The number of non-read/write requests per second, such as PING, INFO, SELECT, and AUTH requests. For instances that contain proxy nodes, the OtherOps submetric indicates only the number of INFO requests per second.

ConnectionUsage

connectionUsage

%

The connection usage, which is calculated by using the following formula: Number of used connections/Number of total supported connections. When the client connects to the cluster instance by using a private endpoint, this submetric is meaningful.

-   DB
    
-   DB aggregation
    

UsedConnection

ConnCount

Counts

The number of used connections.

QPSUsage

qpsUsage

%

The queries per second (QPS) usage.

-   DB
    

IntranetIn

InFlow

KB/s

The inbound and outbound traffic rates.

-   DB
    
-   DB aggregation
    
-   Proxy
    
-   Proxy aggregation
    

IntranetOut

OutFlow

KB/s

IntranetInRatio

intranetInRatio

%

The inbound and outbound traffic usage.

-   DB
    
-   DB aggregation
    

IntranetOutRatio

intranetOutRatio

%

Redis\_Avg\_Rt\_Monitor

AvgRt

us

The average response time of all commands, which indicates the average time that is measured from the time when a data node receives a command to the time when the data node returns the command output.

-   This metric for a DB node does not include the response time of the proxy node and load balancing.
-   This metric for a proxy node includes the response time of the DB and proxy nodes but not the time for load balancing.

-   DB
    
-   DB aggregation
    
-   Proxy
    
-   Proxy aggregation
    

Redis\_Max\_Rt\_Monitor

MaxRt

us

The maximum latency for commands, which indicates the maximum time period from the time when the replica node receives a command to the time when the replica node returns the command output.

-   This metric for a DB node does not include the response time of the proxy node and load balancing.
-   This metric for a proxy node includes the response time of the DB and proxy nodes but not the time for load balancing.

Redis\_Basic\_Monitor

Keys

Counts

The total number of keys, which indicates the number of primary keys stored in the instance.

-   DB
    
-   DB aggregation
    

Expires

Counts

The number of keys that has a time to live (TTL) value configured. This submetric displays the instantaneous value when data is collected.

ExpiredKeys

Counts

The total number of expired keys.

EvictedKeys

Counts

The total number of evicted keys.

ExpiredKeysPerSecond

Counts/s

The number of keys that are expired per second.

EvictedKeysPerSecond

Counts/s

The number of keys that are evicted per second.

inmem\_keys

Counts

These submetics are available only for hybrid-storage instances (phased out). You can ignore these submetrics.

swapped\_keys

Counts

Hit\_Rate\_Monitor

hit\_rate

%

The hit ratio of keys, which is calculated by using the following formula: Total key hits/(Total key hits + Total key misses).

-   DB
    
-   DB aggregation
    

hit

Counts

The number of key hits per second.

miss

Counts

The number of key misses per second.

evicted\_keys\_per\_sec

Counts

The number of keys that are evicted per second.

DiskUsage

disk\_usage

%

The disk space usage, the size of the input buffer, the size of the output buffer, and the monitoring metrics related to disk performance. These submetics are available only for ESSD/SSD-based instances.

-   DB
    

RocksDBConn

Tair\_Connection\_Monitor

Bytes

Tair\_Connection\_Monitor

Bytes

Tair\_Disk\_Monitor

Submetrics such as io\_bandwidth\_kbps, iops, and iops\_usage

UsedConnection

ConnectionUsage

%

The connection usage, which is calculated by using the following formula: Number of used connections/Number of total supported connections. When the client connects to the cluster or read/write splitting instance by using a proxy node, this submetric is meaningful.

-   Proxy
    
-   Proxy aggregation
    

UsedConnection

Counts

The number of used connections.

NewUserConnQps

Counts/s

The number of connections that are established per second from clients to proxy nodes.

Redis\_Package\_Monitor

request

Byte

The average bytes of a single request.

-   Proxy
    

response

Byte

The average bytes of a single response.

request\_max

Byte

The maximum bytes of a single request.

response\_max

Byte

The maximum bytes of a single response.

RedisProxyConn

RedisUsedConnection

Counts

The number of connections that are established from proxy nodes to data nodes.

NewDBConnQps

Counts/s

The number of connections that are established per second from proxy nodes to data nodes.

DisconnectDBConn

Counts

The cumulative number of disconnections from proxy nodes to data nodes.

DisconnectUserConn

Counts

The cumulative number of disconnections from clients to proxy nodes.

TotalCalls

TotalRefusedCommands

Counts

The cumulative number of rejected commands.

TotalCallsPerSecCalls

Counts/s

The QPS.

TotalCallsPerSecRetryCalls

Counts/s

The number of request retries per second.

TotalCallsPerSecRetryFailed

Counts/s

The number of failed requests per second.

**Command-related monitoring metrics (expand to view the metrics)**

Command-related monitoring metrics are supported only when you query a specific database. When you query the monitoring data of a specific database, you must specify the **MonitorKeys** and NodeId parameters.

**Note** Monitoring metrics related to extended data structures of Tair are available only for DRAM-based instances that are deployed in classic (local-disk based) mode.

**MonitorKeys**

**Submetric**

**Unit**

**Description**

Redis\_Keys\_Monitor

del, dump, exists, expire, expireat, move, persist, pexpire, pexpireat, pttl, randomkey, rename, renamenx, restore, sort, ttl, type, and scan

Counts/s

The monitoring information about the use of key-value related commands, such as the number of times that **DEL** and **EXISTS** are executed per second.

Redis\_String\_Monitor

append, bitcount, bitop, decr, decrby, get, getbit, getrange, getset, incr, incrby, incrbyfloat, mget, mset, msetnx, psetex, set, setbit, setex, setnx, setrange, and strlen

Counts/s

The monitoring information about the use of string-related commands, such as the number of times APPEND and MGET are executed per second.

Redis\_Hashes\_Monitor

hdel, hexists, hget, hgetall, hincrby, hincrbyfloat, hkeys, hlen, hmget, hmset, hset, hsetnx, hvals, and hscan

Counts/s

The monitoring information about the use of hash-related commands, such as the number of times HGET and HDEL are executed per second.

Redis\_Lists\_Monitor

blpop, brpop, brpoplpush, lindex, linsert, llen, lpop, lpush, lpushx, lrange, lrem, lset, ltrim, rpop, rpoplpush, rpush, and rpushx

Counts/s

The monitoring information about the use of list-related commands, such as the number of times BLPOP and BRPOP are executed per second.

Redis\_Sets\_Monitor

sadd, scard, sdiff, sdiffstore, sinter, sinterstore, sismember, smembers, smove, spop, srandmember, srem, sunion, sunionstore, and sscan

Counts/s

The monitoring information about the use of set-related commands, such as the number of times that **SADD** and **SCARD** are executed per second.

Redis\_Zset\_Monitor

zadd, zcard, zcount, zincrby, zrange, zrangebyscore, zrank, zrem, zremrangebyrank, zremrangebyscore, zrevrange, zrevrangebyscore, zrevrank, zscore, zunionstore, zinterstore, zscan, zrangebylex, zlexcount, zremrangebylex, zpopmin, zpopmax, bzpopmin, and bzpopmax

Counts/s

The monitoring information about the use of zset-related commands, such as the number of times that **ZADD** and **ZCARD** are executed per second.

Redis\_Hyperlog\_Monitor

pfadd, pfcount, and pfmerge

Counts/s

The monitoring information about the use of HyperLogLog-related commands, such as the number of times that **PFADD** and **PFCOUNT** are executed per second.

Redis\_Pub\_Sub\_Monitor

psubscribe, publish, pubsub, punsubscribe, subscribe, and unsubscribe

Counts/s

The monitoring information about the use of commands related to the Pub/Sub command group, such as the number of times that **PUBLISH** and **SUBSCRIBE** are executed per second.

Redis\_Transaction\_Monitor

discard, exec, multi, unwatch, and watch

Counts/s

The monitoring information about the use of transaction-related commands, such as the number of times that **WATCH** and **MULTI** are executed per second.

Redis\_Scripting\_Monitor

eval, evalsha, and script

Counts/s

The monitoring information about the use of scripting-related commands, such as the number of times that **EVAL** and **EVALSHA** are executed per second.

Calls\_Monitor

flushall\_calls, flushdb\_calls, and keys\_calls

Counts

The cumulative number of times that **FLUSHALL**, **FLUSHDB**, **KEYS** are executed per second.

Redis\_Connection\_Monitor

auth, echo, ping, quit, and select

Counts/s

The monitoring information about the use of connection-related commands, such as the number of times **AUTH** and **ECHO** are executed per second.

Redis\_Server\_Monitor

bgsave, client, command, config, dbsize, debug, flushall, flushdb, info, monitor, slowlog, and time

Counts/s

The monitoring information about the use of server-related commands, such as the number of times **BGSAVE** and **CONFIG** are executed per second.

Redis\_TairDoc\_Monitor

jsondel, jsonget, jsonmget, jsonset, jsontype, jsonnumincrby, jsonstrappend, jsonstrlen, jsonarrappend, jsonarrpop, jsonarrinsert, jsonarrlen, and jsonarrtrim

Counts/s

The monitoring information about the use of Doc-related commands, such as the number of times **JSON.SET** and **JSON.GET** are executed per second.

Redis\_TairHash\_Monitor

exhset, exhsetnx, exhmset, exhexpireat, exhexpire, exhmsetwithopts, exhpexpireat, exhpexpire, exhpttl, exhttl, exhver, exhsetver, exhincrby, exhincrbyfloat, exhget, exhgetwithver, exhmget, exhdel, exhlen, exhexists, exhkeys, exhvals, exhgetall, exhmgetwithver, exhsterlen, and exhscan

Counts/s

The monitoring information about the use of exHash-related commands, such as the number of times **EXHSET** and **EXHMSET** are executed per second.

Redis\_TairString\_Monitor

cas, cad, exset, exget, exsetver, exincrby, exincrbyfloat, excas, and excad

Counts/s

The monitoring information about the use of exString-related commands, such as the number of times **EXSET** and **EXGET** are executed per second.

Redis\_TairGis\_Monitor

gisadd, gisget, gisdel, gissearch, giscontains, gisintersects, and gisgetall

Counts/s

The monitoring information about the use of GIS-related commands, such as the number of times **GIS.ADD**, **GIS.GET**, and **GIS.DEL** are executed per second.

Redis\_TairBloom\_Monitor

bfadd, bfmadd, bfexists, bfmexists, bfinsert, bfreserve, and bfdebug

Counts/s

The monitoring information about the use of Bloom-related commands, such as the number of times **BF.RESERVE** and **BF.ADD** are executed per second.

## Response parameters

Parameter

Type

Description

Example

object

MonitorHistory

string

The monitoring information returned in the JSON format. For more information, see [View performance monitoring data](/help/en/redis/user-guide/view-monitoring-data).

-   Only metrics whose values are not 0 are returned. This improves data transmission efficiency. Metrics that are not displayed are represented by the **0** default value.
    
-   The query result is aligned with the data aggregation frequency. If the specified time range to query is less than or equal to 10 minutes and the data is aggregated once every 5 seconds, query results are returned at an interval of 5 seconds. If the specified StartTime value does not coincide with a point in time for data aggregation, the system returns the latest point in time for data aggregation as the first point in time. For example, if you set the StartTime parameter to 2022-01-20T12:01:48Z, the first point in time returned is 2022-01-20T12:01:45Z.
    

"{\\"2022-11-06T00:00:00Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:05Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:10Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:15Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:20Z\\":{\\"memoryUsage\\":\\"6.67\\"},\\"2022-11-06T00:00:25Z\\":{\\"memoryUsage\\":\\"6.67\\"}}"

RequestId

string

The ID of the request.

F0997EE8-F4C2-4503-9168-85177ED7\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "MonitorHistory": {
    "2022-11-06T00:00:00Z": {
      "memoryUsage": 6.67
    },
    "2022-11-06T00:00:05Z": {
      "memoryUsage": 6.67
    },
    "2022-11-06T00:00:10Z": {
      "memoryUsage": 6.67
    },
    "2022-11-06T00:00:15Z": {
      "memoryUsage": 6.67
    },
    "2022-11-06T00:00:20Z": {
      "memoryUsage": 6.67
    },
    "2022-11-06T00:00:25Z": {
      "memoryUsage": 6.67
    }
  },
  "RequestId": "F0997EE8-F4C2-4503-9168-85177ED7****"
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidStartTime.Malformed

The Specified parameter "StartTime" is not valid.

400

InvalidEndTime.Malformed

The Specified parameter "EndTime" is not valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeHistoryMonitorValues?updateTime=2025-03-25#workbench-doc-change-demo)

2024-05-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeHistoryMonitorValues?updateTime=2024-05-08#workbench-doc-change-demo)
