If the default OS parameters of a Linux system do not meet your workload requirements, you can customize OS settings at the node pool level to tune system performance. After you apply the custom parameters, the system updates the node configurations in batches. These changes apply immediately to existing nodes and are automatically inherited by new nodes added to the pool.

## Usage notes

This feature is supported only on [ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/), [ACK dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/), and [ACK Edge clusters](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1) running version 1.28 or later.

> Creation of new ACK dedicated clusters is no longer supported. To upgrade your cluster, see [Upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

**Important**

-   Dynamically modifying OS parameters can trigger Pod redeployment. Before you proceed, ensure your application is configured for high availability (HA).
    
-   Improperly adjusting OS parameters can alter kernel behavior, leading to performance degradation or node failures that impact your services. Thoroughly understand the purpose of each parameter and test all changes in a non-production environment before applying them to production.
    

## Configure node pool OS parameters

You can customize `sysctl` and Transparent Huge Pages (THP) parameters at the node pool level. While all parameters are configurable through files, a selection of [sysctl parameters](#10156b175blw6) and all [THP parameters](#598abe9500zht) can be set using the ACK console or OpenAPI.

### Configure using the console or OpenAPI

#### Console

Applying custom OS parameters changes the configuration of existing nodes and may impact your services. We recommend performing this operation during off-peak hours.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  In the node pool list, find the target node pool and choose **...** > **OS Configuration** in the **Actions** column.
    
4.  Carefully read the on-screen notes. Click **\+ Custom Parameters**, select parameters, and specify the target nodes. Set the **Maximum Number of Nodes to Repair per Batch** (maximum value is 10), then click **Submit**.
    

After you set the **Maximum Number of Nodes to Repair per Batch**, the OS configuration is applied to the nodes in batches. During this process, you can monitor the progress in the **Event History** section and control the execution with actions such as **pause**, **resume**, and **cancel**.

Pausing allows you to validate the upgraded nodes. If you pause the task, configuration of in-progress nodes completes, but the process does not continue to other nodes until you resume.

**Important**

Complete the configuration task promptly. Any paused task is automatically canceled after seven days, and all associated event and log information is deleted.

#### OpenAPI

In addition to the console, you can customize OS parameters using the [ModifyNodePoolNodeConfig](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-modifynodepoolnodeconfig) operation.

### Configure using a configuration file

ACK lets you write custom parameters to `/etc/sysctl.d/99-user-customized.conf`. This file is reserved for custom configurations applied during node initialization and restart. The `sysctl` parameters in this file take precedence upon node restart, overriding both OS defaults and settings applied through the console **OS Configuration** feature.

**Important**

Adjusting `sysctl` parameters changes how the Linux kernel operates and can lead to performance degradation or node failure, impacting your services. Fully assess the risks before making any changes.

#### Existing nodes

For existing nodes in the node pool, [log on to the node](/help/en/ecs/user-guide/connect-to-instance) and modify the configuration file. Then, run the following command to apply the changes immediately:

```
sysctl -p /etc/sysctl.d/99-user-customized.conf
```

**Example configuration file** (`/etc/sysctl.d/99-user-customized.conf`):

```
# Filesystem settings
fs.file-max = 2097152
fs.nr_open = 1048576

# Networking settings
net.core.somaxconn = 32768
net.ipv4.tcp_max_syn_backlog = 8096

# Memory / kernel settings
vm.max_map_count = 262144
```

Replace the parameter names and values with the ones you need for your workload.

#### New nodes (scale-out)

For new nodes added to the node pool through scaling (scale-out), you can add a script to the node pool's **User Data** field. This ensures that new nodes automatically use the custom parameter values.

In the **User Data** field of your node pool configuration, add a script to write the custom configuration to a file in the `/etc/sysctl.d/` directory. Replace `${sysctl_key}` and `${sysctl_value}` with the actual parameter and value.

```
#!/bin/bash
echo "${sysctl_key} = ${sysctl_value}" >> /etc/sysctl.d/99-user-customized.conf
sysctl -p /etc/sysctl.d/99-user-customized.conf
```

> For more information, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

### Verify that changes took effect

After you apply custom OS parameters, verify that the changes were applied to your nodes.

1.  Log on to a node in the node pool. For more information, see [Connect to an ECS instance](/help/en/ecs/user-guide/connect-to-instance).
    
2.  Run the `sysctl` command to check the current value of a parameter. For example: Expected output:
    
    ```
       sysctl fs.file-max
    ```
    
    ```
       fs.file-max = 2097152
    ```
    
3.  For THP parameters, read the corresponding sysfs file. For example:
    
    ```
       cat /sys/kernel/mm/transparent_hugepage/enabled
    ```
    
4.  In the ACK console, check the **Event History** section of the node pool for the configuration task status.
    

## sysctl parameter list

**Note**

-   In the following tables, the **Default Value** is the value that ACK sets by default when initializing a node pool.
    
-   For the valid range of values for these parameters, see the [Linux Kernel sysctl parameters](https://www.kernel.org/doc/Documentation/sysctl/fs.txt) documentation.
    
-   For parameters not listed here or not yet supported in the console or OpenAPI, you can modify them by following the steps in [Configure using a configuration file](#5098c3887a2c5).
    

### Filesystem parameters

These parameters control file handle limits, inotify watches, and filesystem behavior. Tune these settings for I/O-intensive workloads or applications that open large numbers of files.

**Field name**

**Description**

**Default value**

**Console or OpenAPI**

`fs.aio-max-nr`

The maximum number of asynchronous I/O operations.

65536

Yes

`fs.file-max`

The maximum number of file handles that the system can open.

2097152

Yes

`fs.inotify.max_user_watches`

The maximum number of inotify watches that a single user can create.

524288

Yes

`fs.inotify.max_user_instances`

The maximum number of inotify instances a single user can create. Limits resource usage per user.

16384

No

`fs.inotify.max_queued_events`

The maximum number of filesystem events that can be queued in the kernel.

16384

No

`fs.nr_open`

The maximum number of file descriptors that a single process can open. This value must be less than `fs.file-max`.

1048576

Yes

`fs.may_detach_mounts`

Allows the kernel to safely detach a mount point from a namespace even if it is still being accessed by a process, preventing the entire namespace from being locked.

1

No

### Networking parameters

These parameters govern socket buffers, connection queuing, TCP memory, and ARP cache behavior. Tune these settings for high-traffic or high-concurrency workloads.

**Field name**

**Description**

**Default value**

**Console or OpenAPI**

`net.core.netdev_max_backlog`

The maximum number of data packets that can be queued for processing when a network interface receives packets faster than the kernel can process them.

16384

Yes

`net.core.optmem_max`

The maximum size of the ancillary buffer for each network socket, in bytes.

20480

Yes

`net.core.rmem_max`

The maximum size of the receive buffer for each network socket, in bytes.

16777216

Yes

`net.core.wmem_max`

The maximum size of the send buffer for each network socket, in bytes.

16777216

Yes

`net.core.wmem_default`

The default size of the send buffer for each network socket, in bytes.

212992

Yes

`net.core.somaxconn`

The maximum number of connections that can be queued for a listening socket, controlling concurrent connection handling capacity.

32768

No

`net.ipv4.tcp_mem`

The amount of memory available to the TCP stack, measured in memory pages (typically 4 KB). This parameter consists of three integer values: the low threshold, the pressure threshold, and the high threshold. You must set these values in order.

Dynamically calculated based on total system memory.

Yes

`net.ipv4.tcp_wmem`

The minimum, default, and maximum sizes for the TCP send buffer, in bytes. This setting directly affects the network throughput and memory consumption of TCP connections.

4096 12582912 16777216

No

`net.ipv4.tcp_rmem`

The minimum, default, and maximum sizes for the TCP receive buffer, in bytes. This setting directly affects the network throughput and memory consumption of TCP connections.

4096 12582912 16777216

No

`net.ipv4.tcp_max_syn_backlog`

The maximum number of connection requests with an incomplete three-way handshake in the SYN queue.

8096

No

`net.ipv4.tcp_slow_start_after_idle`

Controls whether a TCP connection re-enters the slow start algorithm after being idle for a long period.

0

No

`net.ipv4.ip_forward`

Enables IPv4 packet forwarding, letting the system act as a router.

1

No

`net.ipv4.neigh.default.gc_thresh1`

The minimum number of entries to keep in the ARP cache. The system does not perform garbage collection if the number of entries is below this value.

System preset

Yes

`net.ipv4.neigh.default.gc_thresh2`

The soft limit for the maximum number of entries in the ARP cache. When the number of entries reaches this value, the system schedules garbage collection to run after a five-second delay.

1024

Yes

`net.ipv4.neigh.default.gc_thresh3`

The hard limit for the maximum number of entries in the ARP cache. The system immediately performs garbage collection when the number of entries reaches this value. If the number of entries consistently exceeds this limit, the garbage collection process runs continuously.

8192

Yes

`net.bridge.bridge-nf-call-iptables`

Enables bridged traffic to be processed by iptables rules, ensuring that network security policies are applied.

1

No

### Memory and kernel parameters

These parameters control process limits, thread counts, memory mapping, and kernel diagnostics. Tune these settings when your workloads require a large number of processes or threads, or when you need to adjust kernel behavior for stability.

**Field name**

**Description**

**Default value**

**Console or OpenAPI**

`kernel.pid_max`

The maximum Process ID (PID) that the system can assign.

4194303

Yes

`kernel.threads-max`

The maximum number of threads that the system can create.

504581

Yes

`kernel.softlockup_panic`

When enabled, the kernel triggers a panic and restarts the system if a soft lockup occurs, allowing the system to quickly restore its state.

1

No

`kernel.softlockup_all_cpu_backtrace`

When enabled, captures debugging information from all CPUs when a soft lockup is detected, aiding in diagnostics.

1

No

`vm.max_map_count`

The maximum number of memory map areas a single process can have. Limits excessive memory usage.

262144

No

`user.max_user_namespaces`

The maximum number of user namespaces a single user can create.

0

Yes

## THP parameter list

Transparent Huge Pages (THP) is a Linux kernel feature that automatically coalesces small memory pages (typically 4 KB) into larger ones (typically 2 MB or more). This process reduces Page Table Entry (PTE) overhead and the number of memory accesses, lessening pressure on the Translation Lookaside Buffer (TLB) and improving memory access efficiency.

**Note**

-   All of the following parameters can be configured through the ACK console or OpenAPI.
    
-   The default values for these parameters vary depending on the operating system and kernel version. For more information, see the [Linux Kernel THP parameters](https://docs.kernel.org/admin-guide/mm/transhuge.html) documentation.
    

**Field name**

**Description**

**Possible values**

`transparent_enabled`

Controls whether THP is enabled globally.

\- `always`: Enables THP system-wide.  
\- `never`: Disables THP system-wide.  
\- `madvise`: Enables THP only for memory regions marked with the `MADV_HUGEPAGE` flag via the `madvise()` system call.  
  

`transparent_defrag`

Controls whether the kernel performs memory defragmentation to create huge pages. When enabled, the system can merge small pages into a single huge page, which reduces the page table size and improves performance.

\- `always`: If a huge page cannot be allocated, the system pauses the allocation process and immediately attempts to reclaim and defragment memory. If enough contiguous free memory becomes available, the huge page allocation proceeds.  
\- `defer`: If a huge page cannot be allocated, the system allocates a standard 4 KB page instead. The `kswapd` and `kcompactd` kernel threads are woken up to reclaim and defragment memory in the background. Later, the `khugepaged` kernel thread can merge these 4 KB pages into a 2 MB huge page if enough contiguous memory is available.  
\- `madvise`: Allocation behaves like `always` only for memory regions marked with the `MADV_HUGEPAGE` flag via the `madvise()` system call. For all other memory regions, a page fault results in the allocation of a standard 4 KB page.  
\- `defer+madvise`: Allocation behaves like `always` for memory regions marked with `MADV_HUGEPAGE`. For all other memory regions, the allocation behavior is equivalent to `defer`.  
\- `never`: Prohibits all defragmentation efforts for huge pages.  
  
  
  

`khugepaged_defrag`

`khugepaged` is a kernel thread that manages and coalesces huge pages to reduce memory fragmentation and improve performance. It scans for scattered huge pages and merges them into contiguous blocks, improving memory utilization. Because this process involves locking operations in the memory path, and the `khugepaged` kernel thread might scan and convert pages at inopportune times, it can potentially impact application performance.

\- `0`: Disables `khugepaged` defragmentation.  
\- `1`: The `khugepaged` kernel thread periodically wakes up during system idle times to merge contiguous 4 KB pages into 2 MB huge pages.  

`khugepaged_alloc_sleep_millisecs`

The time, in milliseconds, that the `khugepaged` kernel thread waits before the next huge page allocation attempt after a failure. This prevents repeated allocation failures in a short period.

For more information, see [khugepaged defragmentation](/help/en/alinux/support/performance-tuning-method-related-to-transparent-large-page-thp-in#95896c5cd73ld).

`khugepaged_scan_sleep_millisecs`

The interval, in milliseconds, between each time the `khugepaged` kernel thread wakes up to scan memory.

`khugepaged_pages_to_scan`

The number of memory pages that the `khugepaged` kernel thread scans each time it wakes up.
