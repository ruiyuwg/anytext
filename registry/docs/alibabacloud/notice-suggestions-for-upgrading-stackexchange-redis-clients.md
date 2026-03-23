In February 2024, the [StackExchange.Redis](https://github.com/StackExchange/StackExchange.Redis) community fixed a bug that caused timeout errors when the StackExchange.Redis client was used to access Tair（Redis OSS-compatible） instances in proxy mode that have multi-database support enabled. You can update StackExchange.Redis to 2.7.20 or later to resolve the issue.

## **Details**

### **Impact scope**

A timeout error occurs if all of the following conditions are met:

-   The version of the StackExchange.Redis client is earlier than 2.7.20.
    
-   The Tair instance is a **cluster instance in proxy mode** or a **read/write splitting instance**.
    
-   The **SELECT** command is used to switch between multiple databases.
    

### **Sample error**

```
1. StackExchange.Redis.RedisTimeoutException: Timeout performing xxx (5000ms), inst: 0, qu: 0, qs: 0, aw: False, rs: ReadAsync, ws: Idle, in: 0, in-pipe: 0, out-pipe: 0, serverEndpoint: XX.XX.XX.XX:6379, mgr: 10 of 10 available, clientName: 67c80fdab92d, PerfCounterHelperkeyHashSlot: 11235, IOCP: (Busy=0,Free=1000,Min=12,Max=1000), WORKER: (Busy=18,Free=32749,Min=12,Max=32767), v: xx.y.xx.xxx (Please take a look at this article for some common client-side issues that can cause timeouts: https://stackexchange.github.io/StackExchange.Redis/Timeouts)
2. Multiple databases are not supported on this server; cannot switch to database
```

### Cause

Open source Redis clusters do not support multiple databases. You cannot run the **SELECT** command after you switch your instance from the master-replica architecture to the cluster architecture. However, Tair（Redis OSS-compatible） instances in proxy mode support multiple databases. The proxy mode allows you to run the **SELECT** command in a cluster or read/write splitting instance to switch to another database. You can use this feature to upgrade a standalone instance to a cluster or read/write splitting instance. For more information, see [Features of proxy nodes](/help/en/redis/product-overview/features-of-proxy-nodes).

StackExchange.Redis versions earlier than 2.7.20 misidentify proxy nodes of Alibaba Cloud Tair as clusters. As a result, the **SELECT** command cannot be run. This issue has been fixed in StackExchange.Redis 2.7.20.

## **Solution**

Update StackExchange.Redis to [2.7.20](https://www.nuget.org/packages/StackExchange.Redis/2.7.20) or later.

## **References**

-   [Issues#2642](https://github.com/StackExchange/StackExchange.Redis/issues/2642)
    
-   [PR#2646](https://github.com/StackExchange/StackExchange.Redis/pull/2646)
    
-   [Features of proxy nodes](/help/en/redis/product-overview/features-of-proxy-nodes)
    
-   [Use a client to connect to an ApsaraDB for Redis instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance)
