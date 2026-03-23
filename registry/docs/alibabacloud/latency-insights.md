The latency insights feature of CloudDBA collects latency statistics for all commands and custom events in a Tair (Redis OSS-compatible) database. The statistics are accurate to the microsecond. You can use this feature to troubleshoot failures and performance degradation in Tair (Redis OSS-compatible) databases.

## Overview

Redis 2.8.13 introduced a latency monitoring feature. This feature uses an event-based mechanism to help you find and troubleshoot potential latency problems. It can only retrieve data from the last 160 seconds and stores only the event with the highest latency per second.

Latency insights is an advanced latency statistics feature provided by Tair (Redis OSS-compatible). It records the execution time of up to [27 events](#section-pnv-q5h-86y) and all Redis commands. It also saves all latency statistics from the last three days. Latency insights has the following features:

-   Persistent: supports data persistence and latency spike tracing.
    
-   High-precision: allows full events to be monitored within milliseconds.
    
-   High-performance: supports asynchronous implementations with minimal impact on performance.
    
-   Real-time: supports real-time data queries and aggregation operations.
    
-   Multidimensional: provides comprehensive latency data that allows you to analyze an instance based on events, time, and latency.
    

## Prerequisites

The Tair (Redis OSS-compatible) instance must use one of the following minor versions. For more information about how to update a minor version, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

-   Minor version 1.6.9 or later if the instance is a Tair (Enterprise Edition) [memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543) instance. If you want to collect statistics about Tair module commands, update the minor version to 1.7.28 or later.
    
-   Minor version 5.1.4 or later if the instance is a Redis Open-Source Edition 5.0 instance.
    
-   Minor version 0.1.15 or later if the instance is a Redis Open-Source Edition 6.0 instance.
    
-   Minor version 7.0.0.6 or later if the instance is a Redis Open-Source Edition 7.0 instance.
    

### **Billing**

This feature is available free of charge.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the navigation pane on the left, click **CloudDBA** > **Latency Insights**.
    
3.  On the **Latency Insights** page, select a time range and click **Search**. By default, statistics from the last 5 minutes are displayed.
    
    For cluster and read/write splitting instances, you can view the statistics for **Data Node** and **Proxy Node**.
    
    **Note**
    
    You can query data from the last three days. The selected time range cannot exceed one hour.
    
4.  Click an event name or a number in the list to view the trend of the corresponding metric over time.
    
    In the trend chart, you can also select the corresponding metrics to view their trends over time.
    
    **Note**
    
    Only commands or events that take longer than the specified threshold are recorded and displayed. If you encounter instance latency issues, see [Suggestions for handling common latency events](/help/en/redis/user-guide/suggestions-for-handling-common-latency-events#task-2267968).
    
    ![pqus](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6157139461/p384894.png)
    
    **Metric**
    
    **Description**
    
    Event
    
    The name of the event. Examples include ExpireCycle, EventLoop, Ping, Scan, Commands, and Info. For more information, see [Appendix: Common special events](#section-pnv-q5h-86y).
    
    Total
    
    The number of events.
    
    Average Latency (us)
    
    The average latency of the event, in microseconds (us).
    
    Maximum Latency (us)
    
    The maximum latency of the event, in microseconds (us).
    
    Aggregated count (< 1 ms)
    
    The aggregated count of events with a latency of less than 1 ms. Click the ![zhankai](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5878939461/p384814.png) icon to view statistics for smaller time ranges, such as <1 us, <2 us, <4 us, <8 us, <16 us, <32 us, <64 us, <128 us, <256 us, <512 us, and <1 ms.
    
    **Note**
    
    Counting rule: For example, <1 us counts events with a latency between 0 us and 1 us. <2 us counts events with a latency between 1 us and 2 us.
    
    <2ms
    
    <4ms
    
    ...
    
    \>33s
    
    The number of events in this latency range.
    
    **Note**
    
    Counting rule: For example, <2 ms counts events with a latency between 1 ms and 2 ms. >33s counts events with a latency greater than 33s.
    

## Appendix: Common special events

**Category**

**Event**

**Threshold**

**Description**

Memory eviction

EvictionDel

30 ms

The amount of time required to delete evicted keys in a specific eviction cycle.

EvictionLazyFree

30 ms

The amount of time that background threads take to release the memory in a specific eviction cycle.

EvictionCycle

30 ms

The amount of time required to perform an eviction. An eviction cycle involves the time required to select and delete data that you want to evict and the time spent on waiting for background threads.

Memory defragmentation

ActiveDefragCycle

100 ms

The amount of time required to defragment memory.

Rehash

Rehash

100 ms

The amount of time required to perform a rehash.

Data structure upgrade

ZipListConvertHash

30 ms

The amount of time required to convert a ziplist to a dictionary by means of hash encoding.

IntsetConvertSet

30 ms

The amount of time required to convert an intset to a set by means of set encoding.

ZipListConvertZset

30 ms

The amount of time required to convert a ziplist to a skiplist by means of ziplist encoding.

Append-only file (AOF)

AofWriteAlone

30 ms

The amount of time required to write an AOF as expected.

AofWrite

30 ms

The amount of time required to write an AOF. Each time an AOF is successfully written, an AofWrite event and one of the following three events are recorded: AofWriteAlone, AofWriteActiveChild, and AofWritePendingFsync.

AofFstat

30 ms

The amount of time required to obtain the information about an AOF.

AofRename

30 ms

The amount of time required to rename an AOF.

AofReWriteDiffWrite

30 ms

The amount of time consumed by an incremental AOF write performed by a parent process after its child process rewrites an AOF.

AofWriteActiveChild

30 ms

The amount of time required to write an AOF to a disk. Other child processes may write data to the disk when the AOF is written.

AofWritePendingFsync

30 ms

The amount of time required to write an AOF. A background process may be performing a fsync operation when the AOF is written.

Redis database (RDB) file

RdbUnlinkTempFile

50 ms

The amount of time required to delete a temporary RDB file after a bgsave child process is terminated.

Others

Commands

30 ms

The amount of time required to run a command that is not tagged with fast.

FastCommand

30 ms

The amount of time required to run a command that is tagged with fast and has the time complexity of O(1) or O(log N). For more information about such commands, see the [FastCommands](/help/en/das/user-guide/latency-insight#section-lls-fww-in4) section of this topic.

EventLoop

50 ms

The amount of time required to run a main event loop.

Fork

100 ms

The amount of time required to call a fork operation.

Transaction

50 ms

The actual amount of time consumed by a transaction.

PipeLine

50 ms

The amount of time consumed by a multi-threaded pipeline.

ExpireCycle

30 ms

The amount of time required to clear expired keys at a time.

ExpireDel

30 ms

The amount of time required to delete expired keys in a specific cycle for clearing the keys.

SlotRdbsUnlinkTempFile

30 ms

The amount of time required to delete a temporary RDB file from a slot after a bgsave child process is terminated.

LoadSlotRdb

100 ms

The amount of time required to load an RDB file from a slot.

SlotreplTargetcron

50 ms

The amount of time required to load an RDB file from a slot to a temporary database and then migrate the file to a destination database by using a child process.
