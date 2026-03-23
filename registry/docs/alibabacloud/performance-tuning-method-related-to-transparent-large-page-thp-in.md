Transparent Huge Pages (THP) is a standard feature in the Linux kernel that automatically consolidates small memory pages (typically 4 KB) into larger ones (typically 2 MB or more). This process reduces the number of Page Table Entries (PTEs) to manage, which lessens pressure on the Translation Lookaside Buffer (TLB) and improves memory access efficiency. This document explains how to use THP to improve system performance on Alibaba Cloud Linux.

## **THP configurations**

In Alibaba Cloud Linux 2 with kernel version 4.19.81-17.2 and earlier, the `transparent_hugepage/enabled` setting defaulted to `madvise`. This setting, which selectively enables THP, differs from the default in major operating systems such as Red Hat Enterprise Linux 7, CentOS 7, and Amazon Linux 2. To improve compatibility with mainstream operating systems, the default THP configuration was changed to `always` starting from Alibaba Cloud Linux 2 kernel version 4.19.91-18. The `always` setting enables THP system-wide.

### **Global configuration**

In the Alibaba Cloud Linux kernel, you can configure THP through the `/sys/kernel/mm/transparent_hugepage/enabled` file. The available options are:

-   `always`
    
    THP is globally enabled.
    
-   `never`
    
    THP is globally disabled.
    
-   `madvise`
    
    THP is enabled only for memory regions specifically marked with the `MADV_HUGEPAGE` flag via the `madvise()` system call.
    
    **Note**
    
    When an application uses the `MADV_HUGEPAGE` flag, it signals to the kernel its intent to use huge pages for a specific memory region.
    

### **Defragmentation configuration**

In addition to the global settings, there are two other defragmentation configurations related to THP.

-   THP defragmentation: Merges scattered small pages in the system to create huge pages. This process helps reduce memory fragmentation and improve performance.
    
-   khugepaged defragmentation: The `khugepaged` daemon is a kernel thread responsible for managing and organizing huge pages to reduce memory fragmentation. It periodically scans memory and merges scattered small pages into contiguous huge pages, improving memory utilization and performance.
    

The `khugepaged` daemon works proactively in the background to create huge pages. The THP defragmentation (`defrag`) setting, by contrast, controls the strategy for allocation-time defragmentation. Both mechanisms aim to reduce memory fragmentation and improve performance. The details of each are described below.

#### **THP defragmentation**

This setting controls memory behavior during a page fault, specifically regarding Direct Reclaim, Background Reclaim, Direct Compaction, and Background Compaction. You can configure this setting by writing to the `/sys/kernel/mm/transparent_hugepage/defrag` file. The available options are:

-   `always`
    
    When the system cannot allocate a THP, it pauses the requesting process and waits for Direct Reclaim and Direct Compaction to complete. If enough contiguous free memory becomes available, the system proceeds to allocate the THP.
    
-   `defer`
    
    When the system cannot allocate a THP, it falls back to allocating a standard 4 KB page. It also wakes up the `kswapd` daemon for Background Reclaim and the `kcompactd` daemon for Background Compaction. After a period, if enough contiguous free memory is available, the `khugepaged` daemon merges the previously allocated 4 KB pages into a 2 MB THP.
    
-   `madvise`
    
    For memory regions marked with `MADV_HUGEPAGE` via the `madvise()` system call, the allocation behavior is equivalent to `always`. For all other memory regions, the system falls back to allocating a standard 4 KB page.
    
    **Note**
    
    In Alibaba Cloud Linux 2 with kernel version 4.19.81-17.2 and later, the system default for this setting is `madvise`.
    
-   `defer+madvise`
    
    For memory regions marked with `MADV_HUGEPAGE` via the `madvise()` system call, the allocation behavior is equivalent to `always`. For all other memory regions, the allocation behavior is `defer`.
    
-   never
    
    Disables allocation-time defragmentation.
    

#### **khugepaged defragmentation**

The following are important configurations for `khugepaged` defragmentation:

-   Enable or disable the feature
    
    The directory of the configuration file for enabling or disabling this feature is `/sys/kernel/mm/transparent_hugepage/khugepaged/defrag`. The available options are:
    
    -   `0`
        
        Disables `khugepaged` defragmentation.
        
    -   `1`
        
        When set to `1`, the `khugepaged` daemon periodically wakes up during system idle times to merge scattered 4 KB pages into contiguous 2 MB THPs.
        
        **Note**
        
        -   In Alibaba Cloud Linux 2 with kernel version 4.19.91-18 and later, the system default is `1`.
            
        -   This operation acquires locks in the memory path. Because the `khugepaged` daemon might start scanning and converting pages at suboptimal times, it can degrade application performance.
            
        
-   Retry interval
    
    The retry interval is the time the `khugepaged` daemon waits before its next allocation attempt after a THP allocation fails. This avoids repeated allocation failures in quick succession. The default value is `60000` milliseconds (60 seconds). The configuration file path is `/sys/kernel/mm/transparent_hugepage/khugepaged/alloc_sleep_millisecs`.
    
-   Scan Interval
    
    The scan interval is the time between each wakeup of the `khugepaged` daemon. The default value is `10000` milliseconds (10 seconds). The configuration file path is `/sys/kernel/mm/transparent_hugepage/khugepaged/scan_sleep_millisecs`.
    
-   Number of pages to scan
    
    This is the number of pages the `khugepaged` daemon scans each time it wakes up. The default value is 4096 pages. The configuration file path is `/sys/kernel/mm/transparent_hugepage/khugepaged/pages_to_scan`.
    

## THP **configuration** recommendations

### **Impact of using THP**

THP can improve system performance by increasing the Translation Lookaside Buffer (TLB) hit rate and reducing the overhead of accessing Page Table Entries (PTEs). THP is designed to reduce operational overhead, allowing users to benefit from performance improvements without needing to modify application code. However, THP resources are finite. When the system struggles to allocate THPs, it triggers mechanisms that can degrade performance. The default system configuration is not a one-size-fits-all solution; for many applications, it can degrade performance. For example:

-   If the THP defragmentation setting is `always`, the system performs synchronous Direct Reclaim or Direct Compaction under memory pressure. These blocking operations can cause significant latency and performance degradation.
    
-   If `khugepaged` defragmentation is enabled (`1`), the daemon acquires locks in the memory path when consolidating memory. If this is triggered at an inopportune time, it can harm the performance of a memory-sensitive application.
    
-   If you keep THP enabled but disable both defragmentation features, the memory allocation process may exhaust free page resources faster than with standard 4 KB pages. This can cause the system to enter memory reclamation and compaction sooner, leading to earlier performance degradation.
    

### **Configuration recommendations**

Based on the points above, the performance impact of THP is highly dependent on your workload. You must adjust the configuration based on your specific business, system, and application requirements. The following examples provide recommendations for common use cases.

**Important**

To prevent data loss, back up your configuration files or [Create a snapshot for a disk](/help/en/ecs/user-guide/create-a-snapshot) before you modify them.

-   For a balance between performance and stability, consider the experimental `defer+madvise` setting. This allows the kernel's Background Reclaim (`kswapd`), Background Compaction (`kcompactd`), and the `khugepaged` daemon to work together to find a balance between memory compaction and performance stability.
    
    ```
    sudo bash -c "echo 'defer+madvise' > /sys/kernel/mm/transparent_hugepage/defrag"
    ```
    
-   If you observe that the `khugepaged` daemon's CPU usage is high (approaching 100%), consider increasing its scan interval. For example, you can change it to 30 seconds with the following command.
    
    ```
    sudo sh -c 'echo 30000 > /sys/kernel/mm/transparent_hugepage/khugepaged/scan_sleep_millisecs'
    ```
    
    Alternatively, you can disable the `khugepaged` daemon directly.
    
    ```
    sudo sh -c 'echo 0 > /sys/kernel/mm/transparent_hugepage/khugepaged/defrag'
    ```
    
-   For specific scenarios where system stability is more critical than maximum throughput—such as database applications with a high volume of requests, latency-sensitive services, or workloads with frequent short-lived allocations—we recommend disabling THP. To disable THP at runtime, run the following command.
    
    ```
    sudo sh -c 'echo "never" > /sys/kernel/mm/transparent_hugepage/enabled'
    ```
    
    **Note**
    
    This command is only effective for the current runtime session. The setting reverts after a system reboot. To disable THP permanently, you must add a boot parameter to the kernel. Run the following commands sequentially as the root user.
    
    ```
    sudo grubby --args="transparent_hugepage=never" --update-kernel="/boot/vmlinuz-$(uname -r)"
    sudo reboot
    ```
    

## **Check THP usage**

You can check THP usage at both the system and process levels.

-   System level
    
    At the system level, THP parameters affect all processes. Run the following command to check THP usage across the system.
    
    ```
    cat /proc/meminfo | grep AnonHugePages
    ```
    
    An example of the system output is shown below.
    
    ```
    AnonHugePages:    614400 kB
    ```
    
    **Note**
    
    A non-zero value indicates that THPs are in use on the system.
    
-   Process level: At the process level, an application can use the `madvise()` system call with the `MADV_HUGEPAGE` flag to control THP usage for its own memory regions. This method allows an application to selectively use THP without affecting other processes. Run the following command to check the THP usage for a specific process.
    
    ```
    sudo cat /proc/<PID>/smaps | grep AnonHugePages
    ```
    
    **Note**
    
    Replace `<PID>` with the actual process ID.
    
    An example of the system output is shown below.
    
    ```
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    AnonHugePages:         0 kB
    ```
    

## References

-   For more information about the functionality and risks of THP, see [Transparent Hugepage Support](https://www.kernel.org/doc/html/latest/admin-guide/mm/transhuge.html).
    
-   Code Huge Page is a mechanism that uses the same consolidation principle as THP to map contiguous code segments into large memory regions (typically 2 MB or larger), which can reduce TLB misses. You can also use the Code Huge Page provided by Alibaba Cloud Linux to improve system performance. For more information, see [Huge Pages](/help/en/alinux/user-guide/hugetext).
    
-   For information on performance tuning methods for THP in Red Hat Enterprise Linux 7, see [Configuring Transparent Huge Pages](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/performance_tuning_guide/sect-red_hat_enterprise_linux-performance_tuning_guide-configuring_transparent_huge_pages).
