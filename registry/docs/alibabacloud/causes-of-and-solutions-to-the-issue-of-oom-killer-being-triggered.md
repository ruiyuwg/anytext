When a Linux operating system runs low on memory, it first triggers memory reclamation to free up memory for other processes. If memory reclamation cannot resolve the low memory condition, the system invokes the Out of Memory Killer (OOM Killer) to forcibly terminate a process. This frees up memory and relieves memory pressure. This topic describes the causes of OOM Killer events on an Alibaba Cloud Linux operating system and their solutions.

## Problem description

The following log snippet is an example of an OOM Killer event on an Alibaba Cloud Linux operating system. The `test` process triggered the OOM Killer.

```
565 [Sat Sep 11 12:24:42 2021] test invoked oom-killer: gfp_mask=0x62****(GFP_HIGHUSER_MOVABLE|__GFP_ZERO), nodemask=(null), order=0, oom_score_adj=0
566 [Sat Sep 11 12:24:42 2021] test cpuset=/ mems_allowed=0
567 [Sat Sep 11 12:24:42 2021] CPU: 1 PID: 29748 Comm: test Kdump: loaded Not tainted 4.19.91-24.1.al7.x86_64 #1
568 [Sat Sep 11 12:24:42 2021] Hardware name: Alibaba Cloud Alibaba Cloud ECS, BIOS e62**** 04/01/2014
```

## Potential causes

The OOM Killer is triggered by insufficient memory. This issue occurs for two main reasons: insufficient global memory on the instance or insufficient memory within a cgroup. The following table describes common scenarios and causes for OOM Killer events:

**Cause**

**Scenario example**

Insufficient cgroup memory

In the following log example, the OOM Killer is triggered for the cgroup `/mm_test`, which contains the `test` process.

```
[Wed Sep  8 18:01:32 2021] test invoked oom-killer: gfp_mask=0x240****(GFP_KERNEL), nodemask=0, order=0, oom_score_adj=0
[Wed Sep  8 18:01:32 2021] Task in /mm_test killed as a result of limit of /mm_test
[Wed Sep  8 18:01:32 2021] memory: usage 204800kB, limit 204800kB, failcnt 26
```

Cause: The memory usage of the `/mm_test` cgroup reached its limit (200 MB), which triggered the OOM Killer..

Insufficient parent cgroup memory

In the following log example, the `test` process belongs to the cgroup `/mm_test/2`, but the OOM Killer is triggered because its parent cgroup, `/mm_test`, reached its memory limit.

```
[Fri Sep 10 16:15:14 2021] test invoked oom-killer: gfp_mask=0x240****(GFP_KERNEL), nodemask=0, order=0, oom_score_adj=0
[Fri Sep 10 16:15:14 2021] Task in /mm_test/2 killed as a result of limit of /mm_test
[Fri Sep 10 16:15:14 2021] memory: usage 204800kB, limit 204800kB, failcnt 1607
```

Cause: The OOM Killer was triggered because the parent cgroup `/mm_test` reached its 200 MB memory limit, even though the child cgroup `/mm_test/2` had not.

Insufficient global memory

In the following log example, `limit of host` indicates that the instance has insufficient global memory. The logs show that the free memory (`free`) on memory node 0 has fallen below the low watermark (`low`).

```
[Sat Sep 11 12:24:42 2021] test invoked oom-killer: gfp_mask=0x62****(GFP_HIGHUSER_MOVABLE|__GFP_ZERO), nodemask=(null), order=0,
[Sat Sep 11 12:24:42 2021] Task in /user.slice killed as a result of limit of host
[Sat Sep 11 12:24:42 2021] Node 0 DMA32 free:155160kB min:152412kB low:190512kB high:228612kB
[Sat Sep 11 12:24:42 2021] Node 0 Normal free:46592kB min:46712kB low:58388kB high:70064kB
```

Cause: The amount of free memory on the instance is smaller than the lower limit of free memory, and memory reclamation cannot resolve the issue of insufficient memory.

Insufficient memory on a memory node

In the following log example, several key lines indicate the problem:

-   `limit of host` indicates that a memory node ran out of memory.
    
-   The instance has two memory nodes: Node 0 and Node 1.
    
-   The free memory (`free`) on Node 1 is below its low watermark (`low`).
    
-   The instance still has a large amount of total free memory (`free:4111496`).
    

```
[Sat Sep 11 09:46:24 2021] main invoked oom-killer: gfp_mask=0x62****(GFP_HIGHUSER_MOVABLE|__GFP_ZERO), nodemask=(null), order=0, oom_score_adj=0
[Sat Sep 11 09:46:24 2021] main cpuset=mm_cpuset mems_allowed=1
[Sat Sep 11 09:46:24 2021] Task in / killed as a result of limit of host
[Sat Sep 11 09:46:24 2021] Mem-Info:
[Sat Sep 11 09:46:24 2021] active_anon:172 inactive_anon:4518735 isolated_anon:
    free:4111496 free_pcp:1 free_cma:0
[Sat Sep 11 09:46:24 2021] Node 1 Normal free:43636kB min:45148kB low:441424kB high:837700kB
[Sat Sep 11 09:46:24 2021] Node 1 Normal: 856*4kB (UME) 375*8kB (UME) 183*16kB (UME) 184*32kB (UME) 87*64kB (ME) 45*128kB (UME) 16*256kB (UME) 5*512kB (UE) 14*1024kB (UME) 0     *2048kB 0*4096kB = 47560kB
[Sat Sep 11 09:46:24 2021] Node 0 hugepages_total=360 hugepages_free=360 hugepages_surp=0 hugepages_size=1048576kB
[Sat Sep 11 09:46:24 2021] Node 0 hugepages_total=0 hugepages_free=0 hugepages_surp=0 hugepages_size=2048kB
[Sat Sep 11 09:46:24 2021] Node 1 hugepages_total=360 hugepages_free=360 hugepages_surp=0 hugepages_size=1048576kB
[Sat Sep 11 09:46:25 2021] Node 1 hugepages_total=0 hugepages_free=0 hugepages_surp=0 hugepages_size=2048kB
```

Cause: In a Non-Uniform Memory Access (NUMA) architecture, an operating system can have multiple memory nodes. You can run the cat /proc/buddyinfo command to view information about the nodes. If the `cpuset.mems` parameter restricts a cgroup to use memory from only specific nodes, the OOM Killer can be triggered even if the instance has sufficient free memory overall.

Insufficient buddy system memory due to memory fragmentation

The log entries show the following:

-   The OOM Killer was triggered during the `order=3` memory allocation stage.
    
-   The free memory (`free`) on memory node 0 is still above the low watermark (`low`).
    
-   The buddy system for memory node 0 has no available memory blocks of the required size (`0*32kB (M)`).
    

```
[Sat Sep 11 15:22:46 2021] insmod invoked oom-killer: gfp_mask=0x60****(GFP_KERNEL), nodemask=(null), order=3, oom_score_adj=0
[Sat Sep 11 15:22:46 2021] insmod cpuset=/ mems_allowed=0
[Sat Sep 11 15:22:46 2021] Task in /user.slice killed as a result of limit of host
[Sat Sep 11 15:22:46 2021] Node 0 Normal free:23500kB min:15892kB low:19864kB high:23836kB active_anon:308kB inactive_anon:194492kB active_file:384kB inactive_file:420kB unevi    ctable:0kB writepending:464kB present:917504kB managed:852784kB mlocked:0kB kernel_stack:2928kB pagetables:9188kB bounce:0kB
[Sat Sep 11 15:22:46 2021] Node 0 Normal: 1325*4kB (UME) 966*8kB (UME) 675*16kB (UME) 0*32kB (M) 0*64kB 0*128kB 0*256kB 0*512kB 0*1024kB 0*2048kB 0*4096kB =
```

Cause: The system triggers the OOM Killer when memory fragmentation prevents the buddy system from finding a contiguous memory block of the requested size, even if total free memory is sufficient.

**Note**

The buddy system in Linux is a kernel mechanism for memory management. It mitigates memory fragmentation and efficiently allocates and deallocates memory blocks of various sizes.

## Solutions

Follow these steps to resolve the issue based on its cause.

### Insufficient memory in a cgroup or parent cgroup

Evaluate the processes currently consuming memory on your instance and terminate any unnecessary processes to free up memory. If your workload requires more memory, upgrade the instance to increase its memory capacity.

1.  Upgrade the instance.
    
    For more information, see [Overview of instance configuration changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db).
    
2.  After upgrading, manually adjust the cgroup's memory limit.
    
    ```
    sudo bash -c 'echo <value> > /sys/fs/cgroup/memory/<cgroup_name>/memory.limit_in_bytes'
    ```
    
    Replace `<value>` with the new memory limit for the cgroup in bytes and `<cgroup_name>` with the name of your cgroup.
    

### Insufficient global memory

If you encounter insufficient global memory, investigate the following areas:

-   Check the `slab_unreclaimable` memory usage.
    
    ```
    cat /proc/meminfo | grep "SUnreclaim"
    ```
    
    `slab_unreclaimable` is memory that the system cannot reclaim. If it accounts for more than 10% of the total memory, this may indicate a slab memory leak. If you suspect a memory leak, troubleshoot it manually. For detailed instructions, see [What do I do if an instance has a high percentage of slab\_unreclaimable memory?](/help/en/alinux/support/identify-the-causes-of-high-percentage-of-the-slab-unreclaimable-memory#task-2118313) If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    
-   Check the `systemd` memory usage.
    
    ```
    cat /proc/1/status | grep "RssAnon"
    ```
    
    When the kernel triggers the OOM Killer, it skips process 1 (`systemd`). Therefore, `systemd` memory usage should typically not exceed 200 MB. If you observe abnormally high usage, try updating the `systemd` tools to a newer version.
    
-   Review the performance of Transparent Huge Pages (THP).
    
    Enabling Transparent Huge Pages (THP) can cause memory bloating, which may lead to OOM Killer events. You can tune THP to mitigate this issue. For more information, see [How do I use THP to tune performance in Alibaba Cloud Linux?](/help/en/alinux/support/performance-tuning-method-related-to-transparent-large-page-thp-in)
    

### Insufficient memory on a memory node

To resolve an OOM Killer event caused by insufficient memory on a specific memory node, reconfigure the `cpuset.mems` interface to allow the cgroup to use memory from other available nodes.

1.  Identify the memory nodes in your system.
    
    ```
    cat /proc/buddyinfo
    ```
    
2.  Configure the `cpuset.mems` parameter.
    
    ```
    sudo bash -c 'echo <value> > /sys/fs/cgroup/cpuset/<cgroup_name>/cpuset.mems'
    ```
    
    Replace `<value>` with the corresponding memory node numbers and `<cgroup_name>` with the name of your cgroup.
    
    For example, if your system has three nodes (Node 0, Node 1, and Node 2) and you want the cgroup to use memory from Node 0 and Node 2, set `<value>` to `0,2`.
    

### Insufficient buddy system memory due to memory fragmentation

To resolve OOM Killer events caused by memory fragmentation, perform memory compaction during off-peak hours. To initiate memory compaction, run the following command:

```
sudo bash -c 'echo 1 > /proc/sys/vm/compact_memory'
```
