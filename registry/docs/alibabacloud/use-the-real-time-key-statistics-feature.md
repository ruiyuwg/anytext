If the memory usage or CPU utilization of your Tair or Redis instance is high, you can use the **Top Key Statistics** feature to quickly find large keys and hot keys. This feature displays real-time and historical information about large keys and hot keys in an instance, such as keys with many elements, keys that use a large amount of memory, and frequently accessed hot keys. This information helps you resolve instance performance issues.

## Statistical and ranking mechanism for large keys and hot keys

To avoid consuming extra database resources, this feature collects statistics only on keys that clients have accessed through read or write operations. It retains and displays only the top keys for each key type and does not scan all keys in the database in real time. After an instance is restarted or a high availability (HA) switchover occurs, the collected top key information is cleared and the statistical process restarts. Therefore, **keys that have not been accessed for a long time may not be included in the statistics**. To obtain information about the memory usage and distribution of all keys in the database, you can use the [Offline Key Analysis](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb) feature.

**Key type**

**Applicable versions**

**Statistical mechanism**

**Display description**

Large key (by number of elements)

-   Redis Open-Source Edition 5.0 and later.
    
-   Tair (Enterprise Edition).
    

A key is counted as a large key when its number of elements, such as the number of fields in a Hash or members in a Set, reaches or exceeds the threshold. The default threshold is 2000. You can customize the threshold by [setting the](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/) `bigkey-threshold` parameter.

**Note**

If this parameter is not displayed in the parameter settings, you can [perform a minor version update](/help/en/redis/user-guide/update-the-minor-version) and try again.

A maximum of the top three large keys for each data type are displayed. If keys have the same number of elements, the key that was written first is prioritized.

**Note**

If the instance displays a total of only 3 large keys, you can [update the minor version](/help/en/redis/user-guide/update-the-minor-version) and retry.

Large key (by memory usage)

Cloud-native memory-optimized instances of Tair (Enterprise Edition) with minor version 25.6.0.0 or later.

-   A key is counted as a large key if its total memory usage exceeds the threshold. The default threshold is 500 MB. You can customize the threshold by [setting the](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/) `bigkey-mem-threshold` parameter.
    
-   A key is also counted as a large key if a single one of its elements uses more than 50 MB of memory.
    

A maximum of the top three keys are displayed. If keys are the same size, they are sorted in lexicographic order.

Hot key (by QPS)

-   Redis Open-Source Edition 5.0 and later.
    
-   Tair (Enterprise Edition).
    

A key is recorded as a hot key when its queries per second (QPS) exceeds 5000. You can customize the threshold by [setting the](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/) `hotkey-threshold` parameter.

At any given time, the system displays a maximum of the top 50 hot keys and shows their precise real-time QPS.

Hot key statistics have limited support in earlier minor versions. You can [upgrade to the latest minor version](/help/en/redis/user-guide/update-the-minor-version).

This is because in versions earlier than Redis Open-Source Edition 7.0.18, 6.0.2.9, and 5.5.2.9, or memory-optimized Tair 5.0.50 and 25.2.0.0: the QPS threshold for hot keys was fixed at 3000 and could not be adjusted. Only an approximate QPS range could be displayed, and Redis Open-Source Edition supported statistics for only 20 hot keys.

Hot key (by traffic)

Cloud-native memory-optimized instances of Tair (Enterprise Edition) with minor version 25.2.0.0 or later.

A key is recorded as a hot key if its access traffic exceeds 1 MB/s.

-   This feature is disabled by default. To enable it, you can [set the](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/) `#no_loose_high-cost-key-enabled` parameter to `yes`.
    
-   You can adjust the statistical threshold (in B/s) by [setting the](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/) `#no_loose_high-cost-key-traffic-bytes-threshold` parameter.
    
-   You can use the `#no_loose_high-cost-key-parse-hashtag` and `#no_loose_high-cost-key-parse-hashtag` parameters to [enable statistics for hashtags and prefixes](/help/en/redis/user-guide/parameter-support#d4bbe2f798016). This allows the system to identify situations where individual keys have low traffic, but the aggregated traffic of keys with the same hashtag or prefix exceeds the threshold. This feature requires an upgrade to version 25.9.1.0 or later.
    

At any given time, the system displays a maximum of the top 50 hot keys and shows their precise inbound and outbound traffic and access frequency.

**Note**

Statistics can be collected for keys that do not exist. If the data type is displayed as not-exist-key, it means the key does not exist but is frequently accessed.

This feature supports statistics for the following data structures:

-   Native Redis data structures: String, List, Hash, Set, Zset, and Stream
    
-   Tair-developed data structures: TairString, TairHash, TairGIS, TairBloom, TairDoc, TairCpc, TairZset, TairRoaring, TairTS, and TairSearch
    
    **Note**
    
    Persistent memory instances of Tair (Enterprise Edition) support statistics only for TairHash and TairString.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the navigation pane on the left, click **CloudDBA** > **Top Key Statistics**.
    
3.  Choose to query real-time or historical data.
    
    Figure 1. Key analysis![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4242833571/p983910.png)
    
    **Note**
    
    -   If the instance uses a cluster architecture or a read/write splitting architecture, select a node from the **Current Node** drop-down list to display its data.
        
    -   When you query historical data, you can query information about large keys and hot keys from the last four days. The maximum time range for a single query cannot exceed three hours.
        
    

## Related API operations

[DAS](/help/en/das/product-overview/what-is-das#concept-2419191) **API operations**

**Description**

[DescribeHotBigKeys](/help/en/das/api-describehotbigkeys#doc-api-DAS-DescribeHotBigKeys)

Gets real-time information about hot keys and large keys that are currently in memory.

[DescribeTopHotKeys](/help/en/das/api-describetophotkeys#doc-api-DAS-DescribeTopHotKeys)

Gets information about the top 20 hot keys over a period of time.

[DescribeTopBigKeys](/help/en/das/api-describetopbigkeys#doc-api-DAS-DescribeTopBigKeys)

Gets information about the top 20 large keys over a period of time.

[DescribeHotKeys](/help/en/das/api-describehotkeys#doc-api-DAS-DescribeHotKeys)

Gets information about the hot keys of a Redis instance.

## **FAQ**

-   Q: Why are String-type keys displayed under **Large key (by number of elements)**?
    
    A: In Redis Open-Source Edition and some earlier versions of Tair, keys of the String type are displayed if their length exceeds the threshold. The default threshold is 2000.
    

-   Q: Why is a key with very few elements, such as fewer than 10, displayed as a large key?
    
    A: There are two possible reasons.
    
    -   The key name itself is large. You can run the `memory usage key_name` command to check its size.
        
    -   The minor version of the instance is too old. For instances with a minor version earlier than 5.2.7, the default value of `bigkey-threshold` (the threshold for large key statistics) is 0. This causes keys with small memory usage to be displayed. You can [upgrade the minor version](/help/en/redis/user-guide/update-the-minor-version) to the latest version.
        

## References

-   If your business requires leaderboards with more than 100,000 elements that use the Zset data structure, consider using Tair's self-developed [exZset](/help/en/redis/developer-reference/tairzset-command) data structure.
    
    Using the TairJedis client, you can easily implement [leaderboards with a distributed architecture](/help/en/redis/use-cases/implementation-of-distributed-architecture-ranking-list-based-on-tairzset). You only need to manage a single key, and Tair automatically distributes the data and computing tasks across multiple sub-keys. This effectively prevents the creation of oversized keys and hot keys.
    
-   To troubleshoot high CPU utilization in a Redis instance, see [Troubleshoot high CPU utilization of an instance](/help/en/redis/user-guide/troubleshoot-high-cpu-utilization-on-an-apsaradb-for-redis-instance).
    
-   To troubleshoot high memory usage in a Redis instance, see [Troubleshoot high memory usage of an instance](/help/en/redis/user-guide/troubleshoot-the-high-memory-usage-of-an-apsaradb-for-redis-instance).
