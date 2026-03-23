In the cluster and read/write splitting architectures of Tair (Redis OSS-compatible), the proxy server (Proxy) handles request forwarding, load balancing, and failover to simplify your client-side logic. The proxy also supports advanced features such as multiple databases (DBs) and caching hot spot data. A solid understanding of how the proxy server routes requests and handles specific commands can help you design more efficient business systems.

## Introduction to the proxy

The proxy server is a component that uses a single-node architecture in a Tair instance. It does not consume resources from data shards and implements load balancing and failover through multiple proxy nodes.

**Proxy features**

**Description**

Cluster instance usage pattern conversion

Proxy nodes allow you to use a cluster instance in the same manner as you use a standard instance. Proxy supports multi-key operations across slots for commands such as **DEL**, **EXISTS**, **MGET**, **MSET**, **SDIFF**, and **UNLINK**. For more information, see [Commands supported by instances in proxy mode](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances#76652bd051keb).

When a standard architecture cannot support your business growth, you can migrate data from the standard architecture to a cluster architecture with a proxy without changing your code. This significantly reduces business transformation costs.

Load balancing and routing

The proxy establishes persistent connections with backend data shards, balances loads, and forwards requests. For more information about the forwarding rules, see [Routing methods of proxy nodes](#section-ak2-bl0-yts).

Manage read-only node traffic

The proxy detects the status of read-only nodes in real time. When the following situations occur, the proxy performs traffic control actions:

-   The read-only node is in an abnormal state: The proxy reduces the service weight of the node. If the proxy fails to connect to the node multiple times, it stops the node's service. This means traffic is no longer forwarded to the node. The proxy re-enables the node after the issue is fixed.
    
-   The read-only node is performing a full synchronization: The proxy temporarily stops the node's service until the full synchronization is complete.
    

[Proxy Query Cache](#b7defbda8biry)

After you enable the proxy query cache (Proxy Query Cache) feature, the proxy caches requests for hot keys and their responses. When the proxy receives the same request within the cache validity period, it directly returns the result to the client without interacting with backend data shards. This helps mitigate access skew caused by many read requests for hot keys.

**Note**

You can set the **query\_cache\_enabled** [parameter](/help/en/redis/user-guide/parameter-support) to enable this feature, which is supported only by Tair memory-optimized and persistent memory-optimized instances.

Support for multiple databases (DBs)

In cluster mode, native Redis and Cluster clients do not support multiple databases (DBs). They use only the default database `0` and do not support the `SELECT` command. However, you can access the cluster instance through a proxy to use multiple databases (DBs) and the `SELECT` command. By default, a cluster instance provides 256 DBs.

**Note**

If you use the StackExchange.Redis client, please use StackExchange.Redis 2.7.20 or a later version. Otherwise, an error will occur. For more information, see the [StackExchange.Redis Upgrade Announcement](/help/en/redis/product-overview/notice-suggestions-for-upgrading-stackexchange-redis-clients).

**Note**

Due to the evolution of the proxy, the number of proxies does not directly represent their processing capacity. Alibaba Cloud ensures that the ratio of proxies in a cluster instance type meets the requirements specified in the instance type description.

## Proxy routing rules

**Note**

For more information about commands, see [Command overview](/help/en/redis/developer-reference/overview-3/#concept-ztj-rpn-tdb).

**Architecture**

**Routing rule**

**Description**

Cluster architecture

Basic routing rules

-   For commands that operate on a single key, the proxy sends the request to the corresponding data shard based on the key's slot.
    
-   For commands that operate on multiple keys, if the keys are stored on different data shards, the proxy splits the command into multiple commands and sends them to the respective shards.
    
    **Note**
    
    Starting from minor version 5.0.1 of Redis Open-Source Edition 5.0, and in versions 6.0, 7.0, and later, the Proxy splits commands at the slot level, which is consistent with the Redis community.
    
    However, in minor versions of Redis Open-Source Edition 5.0 earlier than 5.0.1, and in versions 4.0 and 2.8, the Proxy splits commands at the shard level. When these instances are upgraded to Redis Open-Source Edition 5.0 or later, the change in the command splitting rule may cause an increase in queries per second (QPS) and a slight increase in traffic. However, because the Proxy delivers commands using pipelining, the impact on performance is relatively small.
    

Specific command routing rules

-   Publish/subscribe commands
    
    For publish/subscribe commands such as PUBLISH and SUBSCRIBE, the proxy performs a hash calculation on the channel name and routes the command to the corresponding data shard. Although Pub/Sub commands do not write data to the database, they still consume some memory and resources. Resource consumption is mainly in client connections, subscription state management, and message buffers.
    
    For example, if a channel belongs to data shard 1, clients that subscribe to this channel will use the memory, CPU, and network bandwidth of data shard 1.
    
    **Note**
    
    On the [Performance Monitoring](/help/en/redis/user-guide/view-monitoring-data#task-645669) page in the console, you can select **Data node** and set the custom monitoring item to **Pub/Sub Monitoring Group** to view monitoring information for Publish/Subscribe (Pub/Sub) commands for each data shard (by default, the first data shard is displayed).
    
-   Alibaba Cloud proprietary commands
    
    When you use commands developed by Alibaba Cloud, such as IINFO and ISCAN, if you specify a data shard ID using the idx parameter, the Proxy sends these commands to the specified data shard. For more information, see [Self-developed Proxy commands](/help/en/redis/developer-reference/in-house-commands-for-tair-instances-in-proxy-mode#concept-2353538).
    

Read/write splitting architecture

Basic routing rules

-   Write requests: The proxy forwards them directly to the primary node (Master).
    
-   Read requests: The proxy distributes read requests evenly among the primary node and read-only nodes. Custom control is not supported. For example, in an instance with three read-only nodes, the read weight for the primary node and each of the three read-only nodes is 25%.
    
    **Note**
    
    SLOWLOG and DBSIZE are also considered read commands.
    

Specific command routing rules

-   SCAN commands
    
    When you execute HSCAN, SSCAN, or ZSCAN commands, the proxy first calculates the key's slot. Then, it determines the target node using a modulo operation to evenly distribute requests to the primary node and read-only nodes.
    
-   Alibaba Cloud proprietary commands
    
    When using commands developed in-house by Alibaba Cloud, such as RIINFO and RIMONITOR, you can use the ro\_slave\_idx parameter to forward the command to a specific read-only node, and the idx parameter to forward it to a specific data shard. For more information, see [Proxy commands developed in-house by Alibaba Cloud](/help/en/redis/developer-reference/in-house-commands-for-tair-instances-in-proxy-mode#concept-2353538).
    
-   Other commands
    
    The proxy forwards transaction commands (MULTI or EXEC), Lua script commands (EVAL or EVALSHA), SCAN, INFO, and publish/subscribe commands (such as PUBLISH and SUBSCRIBE) to the primary node.
    

## **Proxy query cache**

Proxy nodes can cache requests that contain **hot keys** and their query results. When the proxy receives the **same request** within the cache validity period, it returns the result directly to the client without interacting with backend data shards. This feature can mitigate or prevent skewed access performance caused by read requests for hot keys.

-   This hot key is the same as the **hot key (QPS)** in the [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature) feature. It is identified by the database kernel based on sorting and statistical algorithms. By default, a key is considered hot if its queries per second (QPS) exceeds 5,000. You can also customize this threshold using the `bigkey-threshold` parameter.
    
-   If a hot key is modified during its cache validity period, the changes are not synchronized to the cache. This means that subsequent requests may read dirty data from the cache until the cache expires. To address this, you can shorten the cache validity period as needed.
    

**Note**

-   Proxy nodes do not cache the entire hot key. Instead, they cache the request that contains the hot key and its corresponding query result.
    
-   This feature is available only for Tair memory-optimized and persistent memory-optimized instances that use the cluster architecture proxy mode or the read/write splitting architecture.
    

#### **Scenarios**

This feature is suitable for scenarios such as top search lists, popular user profiles, and game announcements, where the application can tolerate slightly outdated data.

#### **Feature architecture**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0756625671/CAEQTxiBgMCHjqqI2BkiIDMxNzU3ZjFhYjVmNjQ2MTE5MTVmYzJmY2RiYzIxODg45635834_20250829133105.826.svg)

#### **How to use**

This feature is disabled by default. You can set the **query\_cache\_enabled** [parameter](/help/en/redis/user-guide/parameter-support) to enable this feature.

#### **View detailed instructions**

**Parameter**

**Description**

query\_cache\_enabled

The proxy node query cache feature. When enabled, the proxy node caches requests and query results for hot keys. If the same request is received within the validity period, the proxy node directly returns the result to the client without interacting with the backend data shards.

**Important**

The key-value pairs of hot keys cached on the proxy node are not updated during the validity period. Before you enable this feature, confirm that your business can tolerate eventual consistency for the data within the cache validity period.

-   query\_cache\_enabled: Specifies whether to enable this feature. Valid values are **0** (disable, default) and **1** (enable).
    
-   query\_cache\_expire: The validity period of the cached data. The unit is milliseconds. The range is \[100-60000\]. The default is 1000.
    
    -   If cached data is modified during its validity period, the changes are not synchronized to the cache. This means that the same read request will retrieve dirty data from the cache until the cache expires.
        
    -   You need to carefully evaluate the value of this parameter based on your specific business scenario and tolerance for dirty data. Setting this value too low reduces the cache hit rate, while setting it too high causes clients to read dirty data for a longer period.
        
-   query\_cache\_mode: The working mode of the proxy node query cache feature. Valid values:
    
    -   **0** (default): Caches only the hot keys pushed by data shards.
        
    -   **1**: Caches all keys and evicts them based on the Least Recently Used (LRU) algorithm.
        
        Because the cache space of a proxy node is limited (100 MB per thread), if you set this parameter to 1, the proxy node will evict keys according to the LRU algorithm. This may reduce the cache hit rate and cause a decrease in overall performance.
        

query\_cache\_expire

query\_cache\_mode

You can use Tair's self-developed **QUERYCACHE KEYS**, **QUERYCACHE INFO**, and **QUERYCACHE LISTALL** commands to view the usage of the proxy query cache.

#### **View usage**

#### **QUERYCACHE KEYS**

Command format: `QUERYCACHE KEYS`

Command description: Queries all cached hot keys in the proxy node. It returns the database name and key name for each hot key.

Example:

```
QUERYCACHE KEYS
```

Response example:

```
1) 1) (integer) 0
   2) "key:000000000003"
2) 1) (integer) 0
   2) "key:000000000001"
3) 1) (integer) 0
   2) "key:000000000002"
4) 1) (integer) 0
   2) "key:000000000000"
```

#### **QUERYCACHE INFO**

Command format: `QUERYCACHE INFO`

Command description: Retrieves the running status of the proxy query cache.

Example:

```
QUERYCACHE INFO
```

Example:

```
1) "put_qps:4.00"
2) "get_qps:16570.00"
3) "hit_rate:99.98"
4) "memory_size:180"
5) "query_count:4"
6) "bandwidth_limit_query_cnt:0"
7) "qps_limit_query_cnt:0"
```

Sample output:

-   put\_qps: The number of writes per second from a data node to Querycache.
    
-   get\_qps: The number of reads per second from a client to Querycache.
    
-   hit\_rate: The cache hit rate.
    
-   memory\_size: The amount of memory used by cached data, in bytes.
    
-   query\_count: The number of cached queries.
    
-   **bandwidth\_limit\_query\_cnt**: The number of times access to Querycache is throttled due to bandwidth limits. This limit is disabled by default.
    
-   **qps\_limit\_query\_cnt**: The number of times access to Querycache is throttled due to queries per second (QPS) limits. This limit is disabled by default.
    

#### **QUERYCACHE LISTALL**

Command format: `QUERYCACHE LISTALL`

Command description: Retrieves all cached request commands.

Example:

```
QUERYCACHE LISTALL
```

Response example:

```
1) 1) (integer) 0
   2) "*2\r\n$3\r\nGET\r\n$16\r\nkey:000000000000\r\n"
   3) (integer) 668
2) 1) (integer) 0
   2) "*2\r\n$3\r\nGET\r\n$16\r\nkey:000000000001\r\n"
   3) (integer) 668
3) 1) (integer) 0
   2) "*2\r\n$3\r\nGET\r\n$16\r\nkey:000000000003\r\n"
   3) (integer) 668
4) 1) (integer) 0
   2) "*2\r\n$3\r\nGET\r\n$16\r\nkey:000000000002\r\n"
   3) (integer) 667
```

Response description: The information for each request command consists of three lines: the database name, the full content of the request command in the format specified by the [Redis protocol](https://valkey.io/topics/protocol/), and the remaining time to live (TTL) in milliseconds.

## Connection usage

Typically, the proxy processes requests by establishing persistent connections with data shards. When a request includes the following commands, the proxy creates extra connections on the corresponding data shards based on the command's processing needs. In this case, connections cannot be aggregated. The maximum number of connections for the instance is limited by a single data shard. For information about the limit of a single shard, see the specific instance type. Use these commands reasonably to avoid exceeding the connection limit.

**Note**

In proxy mode, Redis Community Edition instances have a connection limit of 10,000 per data shard. (Enterprise Edition) instances have a connection limit of 30,000 per data shard.

-   Blocking commands: BRPOP, BRPOPLPUSH, BLPOP, BZPOPMAX, BZPOPMIN, BLMOVE, BLMPOP, and BZMPOP.
    
-   Transaction commands: MULTI, EXEC, and WATCH.
    
-   MONITOR commands: MONITOR, IMONITOR, and RIMONITOR.
    
-   Subscription commands: SUBSCRIBE, UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, SSUBSCRIBE, and SUNSUBSCRIBE.
    

## FAQ

-   Can I forward Lua scripts that perform only read operations to read replicas?
    
    Yes, you can forward Lua scripts that perform only read operations to read replicas. However, the following requirements must be met:
    
    -   A read-only account is used. For more information, see [Create and manage accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb).
        
    -   The readonly\_lua\_route\_ronode\_enable parameter is set to 1 for your Tair instance. A value of 1 indicates that Lua scripts that perform only read operations are routed to read replicas. For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).
        
    
-   Q: What is the difference between proxy mode and direct connection mode, and which mode is recommended?
    
    A: Proxy mode is recommended. The modes are introduced and compared as follows:
    
    -   Proxy mode: Client requests are forwarded by proxy nodes to data shards. This mode lets you use features such as load balancing, read/write splitting, failover, [proxy query cache](/help/en/redis/user-guide/use-read-write-splitting-to-mitigate-issues-caused-by-hotkeys#task-2078219), and persistent connections.
        
    -   Direct connection mode: You can bypass the proxy and directly access backend data shards using a direct connection address. This is similar to connecting to a native Redis cluster. Compared with proxy mode, direct connection mode saves the time required to process requests through the proxy and can improve the response speed of the Redis service to some extent.
        
    
-   Q: If a backend data shard becomes abnormal, how are data reads and writes affected?
    
    A: Data shards use a primary/secondary high-availability architecture. When a primary node fails, the system automatically performs a primary/secondary failover to ensure high service availability. In the rare scenario that a data shard becomes abnormal, the impact on data and the optimization solutions are as follows.
    
    **Scenario**
    
    **Impact and optimization solution**
    
    Figure 1. Multi-key command scenario![多Key命令场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1994766261/p282261.png)
    
    -   Impact:
        
        A client sends four requests through four connections. When data shard 2 is abnormal, only request 1 (GET Key1) can read data normally. Other requests that access data shard 2 will time out.
        
    -   Optimization solution:
        
        -   Reduce the frequency of using multi-key commands such as MGET, or reduce the number of keys in a single request. This prevents the entire request from failing due to a single abnormal data shard.
            
        -   Reduce the frequency of using transaction commands or reduce the size of transactions. This prevents the entire transaction from failing due to a failed sub-transaction.
            
    
    Figure 2. Single-connection scenario![单连接场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1994766261/p282325.png)
    
    -   Impact:
        
        A client sends two separate requests through a single connection. When data shard 2 is abnormal, request 2 (GET Key2) will time out. Because request 1 (GET Key1) and request 2 share the same connection, request 1 also fails to return normally.
        
    -   Optimization solution:
        
        -   Avoid or reduce the use of pipeline.
            
        -   Avoid using single-connection clients and instead use clients with a connection pool, as described in the [Client Program Connection Tutorial](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#section-bqv-lkc-5db) (you must set a reasonable timeout and connection pool size).
