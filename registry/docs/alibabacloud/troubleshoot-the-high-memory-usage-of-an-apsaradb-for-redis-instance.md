Insufficient memory in Tair (Redis OSS-compatible) may cause issues such as frequently evicted keys, increased response time, and an unstable number of queries per second (QPS). These issues may interrupt your workloads. If an instance is out of memory or if you receive a memory alert for the instance, you can refer to this topic to determine whether the memory usage is consistently high, whether the memory usage suddenly increases, or whether memory usage skew occurs. You can also resolve the issue by using strategies such as splitting large keys, setting expiration policies, and upgrading specifications.

## Symptoms of high memory usage

High memory usage can manifest in the following three scenarios:

-   The memory usage **remains high** for a long period of time. If the memory usage exceeds 95%, you must respond in a timely manner.
    
-   The memory usage is consistently low but **suddenly spikes to a high level**, even reaching 100%.
    
-   The overall memory usage of the instance is low, but the memory usage of a specific **data node** is **close to 100%**.
    

Take appropriate measures to reduce the memory usage based on the specific scenario.

## Solutions to consistently high memory usage

1.  Check whether the existing keys meet business requirements and delete unnecessary keys in a timely manner.
    
2.  Use the cache analytics feature to analyze the distribution of large keys and the time-to-live (TTL) of keys. For more information, see [Use the offline key analysis feature](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb).
    
    1.  Check whether proper TTL values are configured for keys.
        
        **Note**
        
        In the following example, no TTL values are configured for keys. We recommend that you configure proper TTL values on your client based on your business requirements.
        
        Figure 4. Key TTL distribution example ![Key的过期时间分布示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6643795161/p211023.png)
        
    2.  Evaluate large keys and split large keys on the client.
        
        Figure 5. Large key analysis example ![大Key分析示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6643795161/p211051.png)
        
3.  Configure a proper eviction policy or modify the value of the maxmemory-policy parameter based on your business requirements. For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).
    
    **Note**
    
    volatile-lru is the default eviction policy of Tair (Redis OSS-compatible). For more information, see [How does Tair (Redis OSS-compatible) evict data by default?](/help/en/redis/support/how-does-apsaradb-for-redis-evict-data-by-default#concept-e5v-hs5-ydb)
    
4.  Set the frequency of deleting expired keys to a proper value or modify the value of the hz parameter based on your business requirements. For more information, see [Adjust the frequency of background tasks](/help/en/redis/user-guide/change-the-frequency-of-background-tasks#task-2329999).
    
    **Note**
    
    We recommend that you set the hz parameter to a value that is smaller than 100. If this value is large, CPU utilization is affected. You can also configure dynamic frequency control for instances whose major version is 5.0 or later. For more information, see [Enable dynamic frequency control for background tasks](/help/en/redis/user-guide/enable-dynamic-frequency-control-for-background-tasks#task-2330857).
    
5.  If the memory usage is still high after you perform the preceding steps, consider upgrading the instance to a larger memory size to accommodate more data and improve overall performance. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
    
    **Note**
    
    Before you upgrade your instance, you can purchase a pay-as-you-go instance to test whether the specifications to which you want to upgrade meet the requirements of your workloads. You can release the pay-as-you-go instance after you complete the test. For more information, see [Release pay-as-you-go instances](/help/en/redis/user-guide/release-pay-as-you-go-instances#section-z79-42z-at1).
    

## Solutions to sudden increase in memory usage

### **Causes**

The memory usage may suddenly increase due to the following reasons:

-   A large amount of new data is written in a short period of time.
    
-   A large number of new connections are established in a short period of time.
    
-   Burst access generates a large amount of traffic that exceeds the network bandwidth, resulting in a backlog in the input and output buffers.
    
-   The client cannot keep up with the processing speed of Tair (Redis OSS-compatible), resulting in a backlog in the output buffer.
    

### **Solutions**

Identify the causes of the sudden increase in memory usage and use the suggested solutions to resolve the issue.

#### **Check whether a large amount of new data is written**

**Troubleshooting method:**

On the Performance Monitor page, check the **inbound traffic** and **write queries per second (QPS)** of the instance. If the inbound traffic and write QPS follow the same trend as the memory usage, the sudden increase in memory usage is caused by a large amount of written data.

**Solution:**

1.  Configure appropriate time-to-live (TTL) values for keys to automatically delete keys that are no longer needed, or manually delete unnecessary keys.
    
2.  Upgrade the instance specifications by increasing the memory capacity to mitigate the sudden increase in memory usage. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/).
    
3.  If your instance is a standard instance and the memory usage remains high after you increase the memory capacity, you can upgrade the instance to a cluster instance. This way, you can distribute data across multiple data shards to reduce the memory pressure on individual data shards. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/).
    

#### **Check whether a large number of new connections are created**

**Troubleshooting method:**

On the Performance Monitor page, view **the number of connections to the instance.** If the number of connections suddenly increases and follows the same trend as the memory usage**,** the sudden increase in memory usage is caused by a large number of new connections.

**Solution:**

1.  Check whether connection leaks exist.
    
2.  Configure connection timeout periods to automatically close idle connections. For more information, see [Specify a timeout period for client connections](/help/en/redis/user-guide/specify-a-timeout-period-for-client-connections).
    

#### **Check** whether sudden traffic spikes lead to backlog in the input and output buffers

**Troubleshooting method:**

1.  Check whether the inbound and outbound traffic usage of the instance reaches 100%.
    
2.  Run the `**MEMORY STATS**` command to check whether clients.normal occupies an excessive amount of memory.
    
    **Note**
    
    clients.normal reflects the total amount of memory that is used by the input and output buffers for all normal client connections.
    

**Solution:**

1.  Check the cause of traffic burst.
    
2.  Increase the network bandwidth of the instance. For more information, see [Manually increase the bandwidth of an instance](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance) and [Enable bandwidth auto scaling](/help/en/redis/user-guide/enable-bandwidth-auto-scaling).
    
3.  Upgrade the instance specifications to ensure optimal usage of the input and output buffers. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/).
    

#### **Check whether client-side performance issues lead to backlog in the output buffer**

**Troubleshooting method:**

In redis-cli, run the `**MEMORY DOCTOR**` command to view the value of `**big_client_buf**`. If big\_client\_buf is set to 1, at least one client has a large output buffer that consumes a significant amount of memory.

**Solution:**

Run the `**CLIENT LIST**` command to check which client has a large output buffer that consumes a significant amount of memory (`**omem**`). Check whether the client application has performance issues.

## Solutions to high memory usage of specific data nodes

### **Symptoms**

If the instance is a cluster instance, you may find that the memory usage of specific data shards is high based on the following symptoms:

-   You receive a memory usage alert from CloudMonitor. The alert message shows that the memory usage of a specific data node exceeds the threshold.
    
-   The instance diagnostic report shows that memory usage skew occurs.
    
-   On the Performance Monitor page, the overall memory usage of the instance is not high, but a specific data node has high memory usage.
    

### **Causes**

If the memory usage of the instance is low but the memory usage of a data node is high, memory usage skew occurs.

### **Solutions**

#### **Check whether large keys exist and split large keys**

**Identify large keys**

You can use the offline key analysis feature to identify large keys. For more information, see [Use the offline key analysis feature](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb).

For information about how to identify large keys, see [Identify and handle large keys and hotkeys](/help/en/redis/user-guide/identify-and-handle-large-keys-and-hotkeys/).

**Split large keys**

For example, you can split a HASH key that contains tens of thousands of members into multiple HASH keys that have the appropriate number of members. For cluster instances, you can split large keys to balance the memory usage across multiple data shards.

#### **Check whether hash tags are used**

If hash tags are used, consider splitting a hash tag into multiple hash tags based on your business requirements. This way, data is evenly distributed across different data nodes.

#### **Upgrade instance specifications**

Upgrading the instance specifications by increasing the memory allocated to each shard can serve as a temporary solution to prevent memory skew. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).

**Important**

-   The system initiates a precheck for data skew during instance specification change. If the instance type that you select cannot handle the data skew issue, the system reports an error. Select an instance type that has higher specifications and try again.
    
-   After you upgrade the instance specifications, memory usage skew may be alleviated. However, skew may also occur on bandwidth and CPU resources.
    

## Appendix 1: Memory usage of Tair (Redis OSS-compatible)

The memory usage of Tair (Redis OSS-compatible) is divided into three parts. The following table describes the memory usage.

**Memory usage**

**Description**

Memory consumed by link-related operations

Includes the memory consumed by the input buffer, the memory consumed by the output buffer, the memory consumed by the JIT overhead, the memory consumed by the Fake Lua Link, and the memory consumed to cache the executed Lua scripts. The memory consumption dynamically changes. You can run the INFO command to obtain the client cache information from the Clients column in the output.

**Note**

The memory consumed by the input buffer and output buffer is small and varies based on the number of connections from each client. When a client initiates range-based operations or when a client sends and receives large keys at low speeds, the memory consumed by the input buffer and output buffer increases. As a result, the memory that can be used to store data decreases, and out of memory (OOM) issues may occur.

Memory consumed by data

Includes the memory consumed to store field values. This part of memory consumption is a crucial object that needs to be analyzed.

Memory consumed by management operations

Includes the memory consumed by hash sets, the memory consumed by the replication buffer, and the memory consumed by the append-only file (AOF) buffer. The memory consumption remains stable within the range of 32 MB to 64 MB, which is small.

**Note**

A large number of keys, such as hundreds of millions, consume large amounts of memory.

**Note**

Most OOM issues occur due to inefficient management of dynamically acquired and released memory. For example, if a large number of requests are piled up due to throttling, the amount of dynamically acquired memory rapidly increases. OOM issues may also occur due to complex or inappropriate Lua scripts. The management of dynamically acquired and freed memory is enhanced in Tair (Enterprise Edition). We recommend that you use Tair (Enterprise Edition). For more information, see [Overview](/help/en/redis/product-overview/overview-1/#concept-2352921).

## Appendix 2: Other methods to check memory usage

### Use the MEMORY STATS command to view the memory usage

In redis-cli, run the MEMORY STATS command to query the memory usage of your instance.

The memory consumption of an instance consists of two major parts:

-   The memory consumed by business data. This part of memory consumption is a crucial object that needs to be analyzed.
    
-   The memory consumed by non-business data. This includes the memory consumed by the backlog buffer of master-replica replication and the memory consumed to initialize the Redis process.
    

Sample responses and parameters:

**Note**

In the following sample responses, the size of consumed memory is measured in bytes.

```
1) "peak.allocated" //The highest amount of memory that the Redis process has consumed since it was started. 
 2) (integer) 79492312
 3) "total.allocated" //The total number of bytes that are allocated to run the Redis process. This is the current total memory usage. 
 4) (integer) 79307776
 5) "startup.allocated" //The memory consumed by the Redis process at startup. 
 6) (integer) 45582592
 7) "replication.backlog" //The size of the replication backlog buffer. 
 8) (integer) 33554432
 9) "clients.slaves" //The size of the read and write buffer in all replica nodes for master-replica replication. 
10) (integer) 17266
11) "clients.normal" //The size of the read and write buffers in other clients that are connected to all data nodes except replica nodes. 
12) (integer) 119102
13) "aof.buffer" //The cache used for AOF persistence and the cache generated during AOF rewrite operations. 
14) (integer) 0
15) "db.0"  //The number of databases. 
16) 1) "overhead.hashtable.main" //The total memory consumed by the hash tables in the current database. This is the memory consumed to store metadata. 
    2) (integer) 144
    3) "overhead.hashtable.expires" //The memory consumed to store expired keys. 
    4) (integer) 0
17) "overhead.total" //The value of the overhead.total parameter is calculated based on the following formula: overhead.total = startup.allocated + replication.backlog + clients.slaves + clients.normal + aof.buffer + db. X. 
18) (integer) 79273616
19) "keys.count" //The total number of keys in the current instance.
20) (integer) 2
21) "keys.bytes-per-key" //The average size per key in the current instance. Formula: (total.allocated-startup.allocated)/keys.count. 
22) (integer) 16862592
23) "dataset.bytes" //The memory consumed by business data. 
24) (integer) 34160
25) "dataset.percentage" //The percentage of the memory consumed by business data. Formula: dataset.bytes × 100/(total.allocated - startup.allocated). 
26) "0.1012892946600914"
27) "peak.percentage" //The percentage of the current total memory usage to the historical peak memory usage. Formula: total.allocated × 100/peak.allocated. 
28) "99.767860412597656"
29) "fragmentation" //The memory fragmentation rate. 
30) "0.45836541056632996"
```

### Use the MEMORY DOCTOR command to view memory diagnostic suggestions

In redis-cli, run the MEMORY DOCTOR command to obtain memory diagnostic suggestions.

Figure 3. Diagnostic result example ![诊断结果示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6643795161/p225575.png)

After you run the MEMORY DOCTOR command, the diagnostic suggestions for your instance are provided from the following dimensions. You can make optimization decisions based on the diagnostic suggestions.

```
    int empty = 0;     /* Instance is empty or almost empty. */
    int big_peak = 0;       /* Memory peak is much larger than used mem. */
    int high_frag = 0;      /* High fragmentation. */
    int high_alloc_frag = 0;/* High allocator fragmentation. */
    int high_proc_rss = 0;  /* High process rss overhead. */
    int high_alloc_rss = 0; /* High rss overhead. */
    int big_slave_buf = 0;  /* Slave buffers are too big. */
    int big_client_buf = 0; /* Client buffers are too big. */
    int many_scripts = 0;   /* Script cache has too many scripts. */
```

### Use the MEMORY USAGE command to view the memory occupied by specified keys

In redis-cli, run the MEMORY USAGE command to query the memory consumed by specified keys. Unit: bytes.

Sample command:

```
MEMORY USAGE Key0089393003
```

Sample output:

```
(integer) 1000072
```

## References

-   [View performance monitoring data](/help/en/redis/user-guide/view-monitoring-data#task-645669)
    
-   [Overview](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb)
    
-   [Alerting settings](/help/en/redis/user-guide/alert-settings#concept-sj5-m2z-5db)
