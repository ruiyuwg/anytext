This topic describes causes of common latency events and provides suggestions for handling these events.

## Background information

Redis 2.8.13 introduced a new feature called latency monitoring to help identify and troubleshoot possible latency issues. The latency monitoring feature allows you to collect data generated only within the last 160 seconds and access only events that have the highest latency within each second.

Tair (Redis OSS-compatible) provides the advanced [latency insights](/help/en/redis/user-guide/latency-insights#task-2202504) feature. This feature can record up to 27 events and execution durations of all commands, and save all latency statistics within the last three days. For more information about events and their latency thresholds, see [Common special events](/help/en/redis/user-guide/latency-insights#section-pnv-q5h-86y).

## Common latency events

**Event**

**Description**

**Possible cause**

**Suggestion**

EvictionCycle

The amount of time consumed for an eviction cycle, which includes the amount of time required to select and delete data and the waiting time of background threads.

This event may be influenced by multiple factors. You need to analyze the EvictionDel and EvictionLazyFree events to determine the cause.

-   Check your business data and optimize the data.
    
-   If evictions frequently occur, we recommend that you scale up your instance to prevent evictions triggered when the occupied memory exceeds the Maxmemory setting.
    

EvictionDel

The amount of time consumed to delete keys during an eviction cycle.

This event occurs when large keys are evicted.

-   We recommend that you do not use large keys.
    
-   Enable asynchronous eviction by setting lazyfree-lazy-eviction to yes.
    
-   If evictions frequently occur, we recommend that you scale up your instance to prevent evictions triggered when the occupied memory exceeds the Maxmemory setting.
    

EvictionLazyFree

The amount of time consumed waiting for background threads to release memory.

This event occurs when the system waits for background threads to release memory until the memory usage is below the Maxmemory setting or the release ends. This occurs if no appropriate keys can be evicted and background threads are releasing memory by such means as deleting large keys.

-   Modify the memory eviction policy by specifying the maxmemory-policy parameter.
    
-   If evictions frequently occur, we recommend that you scale up your instance to prevent evictions triggered when the occupied memory exceeds the Maxmemory setting.
    

ExpireCycle

The amount of time consumed for a key expiration cycle.

This event occurs when large keys are deleted.

-   We recommend that you do not use large keys.
    
-   Enable asynchronous eviction by setting lazyfree-lazy-expire to yes.
    
-   We recommend that you regularly clear expired data in the console.
    

ExpireDel

The amount of time consumed to delete keys during a key expiration cycle.

This event occurs when large keys are deleted.

AofWrite

The amount of time consumed to write data to append-only files (AOFs). Each time data is successfully written to AOFs, the AofWrite event and one of the AofWriteAlone, AofWriteActiveChild, and AofWritePendingFsync events are recorded.

This event may be influenced by multiple factors. You need to analyze the AofWriteAlone, AofWriteActiveChild, and AofWritePendingFsync events to determine the cause.

If data persistence is not required, disable AOF persistence by setting appendonly to no.

AofWriteAlone

The amount of time consumed for an AOF write.

This event occurs when a large amount of data is written or disk-related performance bottlenecks exist.

AofWriteActiveChild

The amount of time consumed to write data to AOFs, during which data is also written to disks by other child processes.

This event occurs when data is written to disks by other child processes during data writes to AOFs.

AofWritePendingFsync

The amount of time consumed to write data to AOFs, during which fsync operations are performed by background processes.

This event occurs when fsync operations are performed by background processes during data writes to AOFs.

Commands

The amount of time consumed for regular commands that are not labeled as fast.

This event occurs when specific commands are run, such as the KEYS command that traverses all data.

-   View slow query logs to identify commands that take long. For more information, see [Query slow query logs](/help/en/redis/user-guide/view-slow-logs#concept-nw5-xmv-rfb).
    
-   Analyze offline keys to check whether large keys exist. For more information, see [Use the offline key analysis feature](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb).
    

FastCommand

The amount of time consumed for commands that are labeled as fast. The time complexity of fast commands is O(1) or O(log N).

This event occurs when specific commands are run on large keys, such as the `GET` command that copies large amounts of data.

Fork

The amount of time consumed to call fork().

This event occurs during AOF rewrites.

If the event is caused by AOF rewrites and data persistence is not required, disable AOF persistence by setting appendonly to no.

## References

-   [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb)
    
-   [Identify and handle large keys and hotkeys](/help/en/redis/user-guide/identify-and-handle-large-keys-and-hotkeys/#task-2109272)
    
-   [Use the real-time key statistics feature](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature#task-2096542)
    
-   [Clear data](/help/en/redis/user-guide/delete-data#concept-hzt-444-tdb)
    
-   [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb)
