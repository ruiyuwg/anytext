When a Linux operating system runs for an extended period of time, memory fragmentation may occur. This document describes several methods to mitigate this problem.

## Problem description

Services deployed on an instance may occasionally experience long response times or extended system call durations. The `sys` CPU usage metric may also increase. In the buddy system, you may observe a shortage of high-order memory (memory blocks with an `order` greater than 3). For example, the output of the `cat /proc/buddyinfo` command might look like the following. Starting from the fourth column, each column represents the number of free pages for a specific `order` in the buddy system.

```
cat /proc/buddyinfo 
Node 0, zone      DMA      1      0      0   1   2    1    1     0     1      1     3 
Node 0, zone    DMA32   3173    856    529   0   0    0    0     0     0      0     0 
Node 0, zone   Normal  19030   8688   7823   0   0    0    0     0     0      0     0
```

## Possible cause

When a Linux system runs for a long time, large, contiguous blocks of physical memory gradually break down into smaller, non-contiguous blocks. If a service then requests a large block of contiguous memory, the kernel initiates a time-consuming memory compaction process. This process can cause performance jitters. Typically, memory fragmentation produces a kernel stack trace similar to the following:

```
0xffffffff8118f9cb compaction_alloc  ([kernel.kallsyms])
0xffffffff811c88a9 migrate_pages  ([kernel.kallsyms])
0xffffffff811901ee compact_zone  ([kernel.kallsyms])
0xffffffff8119041b compact_zone_order  ([kernel.kallsyms])
0xffffffff81190735 try_to_compact_pages  ([kernel.kallsyms])
0xffffffff81631cb4 __alloc_pages_direct_compact  ([kernel.kallsyms])
0xffffffff811741d5 __alloc_pages_nodemask  ([kernel.kallsyms])
0xffffffff811b5a79 alloc_pages_current  ([kernel.kallsyms])
0xffffffff811c0005 new_slab  ([kernel.kallsyms])
0xffffffff81633848 __slab_alloc  ([kernel.kallsyms])
0xffffffff811c5291 __kmalloc_node_track_caller  ([kernel.kallsyms])
0xffffffff8151a8c1 __kmalloc_reserve.isra.30  ([kernel.kallsyms])
0xffffffff8151b7cd alloc_sib  ([kernel.kallsyms])
0xffffffff815779e9 sk_stream_alloc_skb  ([kernel.kallsyms])
0xffffffff8157872d tcp_sendmsg  ([kernel.kallsyms])
0xffffffff815a26b4 inet_sendmsg  ([kernel.kallsyms])
0xffffffff81511017 sock_aio_write  ([kernel.kallsyms])
0xffffffff811df729 do_sync_readv_writev  ([kernel.kallsyms])
0xffffffff811e0cfe do_readv_writev  ([kernel.kallsyms])
```

## Solutions

Use the following methods to mitigate Linux memory fragmentation:

-   Adjust the min watermark
    
    In most cases, set the min watermark to 1% to 3% of total memory. A value of 2% is a good starting point. This triggers asynchronous reclaim earlier when memory resources become scarce. To adjust the min watermark, run the following command:
    
    ```
    sysctl -w vm.min_free_kbytes = memtotal_kbytes * 2%
    ```
    
    In this command, `memtotal_kbytes * 2%` represents 2% of your instance's total memory in kilobytes.
    
-   Adjust the gap between the min and low watermarks
    
    Adjust the gap between the min watermark and the low watermark using the `watermark_scale_factor` kernel parameter. This helps the system handle burst memory allocation requests more effectively. By default, the gap is 0.1% of the total memory, and the minimum allowed gap is half the size of the min watermark. To adjust the `watermark_scale_factor`, run the following command:
    
    ```
    sysctl -w vm.watermark_scale_factor = value
    ```
    
    In this command, `value` is a multiplier that adjusts the gap between the `min watermark` and `low watermark`.
    
-   Periodically perform memory compaction
    
    During off-peak hours for your services, manually trigger asynchronous `memory compaction`. To trigger this process, run the following command:
    
    ```
    echo 1 > /proc/sys/vm/compact_memory
    ```
    
-   Periodically drop the cache
    
    If the previous methods do not resolve the issue, consider dropping the cache during off-peak hours. This operation frees memory pages, making them available for reallocation. Dropping the cache effectively mitigates memory fragmentation, but it can cause temporary performance jitters. Perform this action during a planned maintenance window. To manually drop the cache, run the following command:
    
    ```
    echo 3 > /proc/sys/vm/drop_caches
    ```
