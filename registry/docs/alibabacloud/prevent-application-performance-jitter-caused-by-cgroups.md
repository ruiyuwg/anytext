Control groups (cgroups) allocate, manage, and monitor system resources on Linux. When the number or hierarchy depth of cgroups grows too large, the kernel spends excessive CPU time traversing cgroup structures, which degrades application performance.

## Symptoms

In container environments, this issue presents as:

-   **Intermittent latency spikes** -- applications occasionally experience a sudden increase in request latency.
    
-   **High kernel CPU usage** -- the `sys` metric (kernel CPU percentage) reaches 30% or higher on the container host.
    

Run the `top` command to check kernel CPU usage. In the following output, the `sy` value of 30.0% indicates the kernel is consuming a significant share of CPU time:

```
top - 16:21:19 up 22 days,  1:59,  3 users,  load average: 40.02, 30.02, 25.06
Tasks: 193 total,   3 running, 190 sleeping,   0 stopped,   0 zombie
%Cpu(s):  20.0 us,  30.0 sy,  0.0 ni, 45.0 id,  5.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem : 24130808 total,  2071424 free,  1832512 used, 20226872 buff/cache
KiB Swap:        0 total,        0 free,        0 used. 19737776 avail Mem
```

## Diagnosis

### Check the cgroup count

Run the following command to view cgroup states:

```
cat /proc/cgroups
```

The output lists each cgroup subsystem with four columns:

**Column**

**Description**

`subsys_name`

Cgroup controller name

`hierarchy`

ID of the cgroup hierarchy this controller is mounted on

`num_cgroups`

Number of cgroups using this controller

`enabled`

Whether this controller is enabled (`1`) or disabled (`0`)

Example output:

```
#subsys_name  hierarchy num_cgroups enabled
cpuset  2     200     1
cpu     2     200     1
cpuacct 2     200     1
blkio   6     62      1
memory  10    2040    1
devices 5     59      1
```

In this example, the memory controller has 2,040 cgroups, which is far above the recommended limit of 1,000.

### Profile kernel CPU usage with perf

To confirm that cgroup traversal is consuming CPU time, use `perf` to sample kernel activity.

1.  Install `perf`:
    
    ```
       yum install perf -y
    ```
    
2.  Sample system-wide activity for 10 seconds:
    
    ```
       perf record -a -g sleep 10
    ```
    
3.  View the results: If cgroups are causing the issue, the output shows memory cgroup functions dominating kernel CPU time:
    
    ```
       perf report
    ```
    
    ```
       31.04%  [kernel]  [k] memcg_stat_show
       18.61%  [kernel]  [k] memcg_sum_events.isra.22
        9.41%  [kernel]  [k] mem_cgroup_iter
        6.94%  [kernel]  [k] css_next_descendant_pre
        6.11%  [kernel]  [k] _find_next_bit
        3.96%  [kernel]  [k] mem_cgroup_usage.part.43
        1.75%  [kernel]  [k] find_next_bit
        1.38%  [kernel]  [k] mem_cgroup_node_nr_lru_pages
    ```
    

## Root cause

The `memcg_stat_show` function aggregates statistics across all memory cgroups. When the number of memory cgroups is excessively large, traversing them takes a long time and consumes significant kernel CPU. In the `perf` output above, `memcg_stat_show` alone accounts for 31% of CPU time.

Excessive `cpuacct` and `cpu` cgroups can also affect the Completely Fair Scheduler (CFS) and the load balancing mechanism of the Linux kernel.

## Prevention guidelines

To prevent cgroup-related performance jitter on your Alibaba Cloud Linux instances:

-   **Limit child cgroups per parent** -- create no more than 10 child cgroups within each cgroup.
    
-   **Limit total cgroup count** -- keep the total number of cgroups below 1,000 system-wide. The fewer cgroups, the better.
