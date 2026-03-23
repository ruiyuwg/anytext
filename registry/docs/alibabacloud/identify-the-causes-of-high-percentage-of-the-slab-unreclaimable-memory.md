This topic describes how to diagnose and resolve high `slab_unreclaimable` memory usage in a Linux Elastic Compute Service (ECS) instance.

## Problem description

When you run the `cat /proc/meminfo | grep "SUnreclaim"` command on a Linux instance to view the `SUnreclaim` value, you find that the SUnreclaim value is large (for example, `SUnreclaim: 6069340 kB`), which indicates a large amount of `slab_unreclaimable` memory. If the `slab_unreclaimable` memory takes up more than 10% of the total memory, the slab memory may leak.

## Cause

The Linux kernel's slab allocator reduces memory fragmentation by caching same-sized memory objects. The `slab_unreclaimable` portion of this cache holds memory that the kernel cannot free, even under pressure, because it contains active objects. For example, `dentry` and `inode` caches, which are vital for filesystem performance, are kept in this memory. If these caches grow excessively, the high `slab_unreclaimable` usage can trigger the Out-of-Memory (OOM) Killer.

## Solution

1.  Connect to the Linux instance to troubleshoot.
    
    For more information, see [Choose an ECS remote connection method](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Check the name of the slab that has the largest number of `objects` or the largest amount of memory and whose memory cannot be reclaimed:
    
    1.  View information about the slab that has the largest number of `objects` or has the largest amount of memory.
        
        ```
        slabtop -s -a
        ```
        
        In the command output, you can view and record the name (the value in the `NAME` column) of the slab that has the largest value in the `OBJ/SLAB` column.
        
    2.  Check if the slab memory is unreclaimable.
        
        In the following command, replace `<slab NAME>` with the name of the slab obtained in the previous step that has the largest value in the `OBJ/SLAB` column.
        
        ```
        cat /sys/kernel/slab/<slab NAME>/reclaim_account
        ```
        
        For example, you can run the following command to determine whether the slab named `kmalloc-192` has memory marked reclaimable.
        
        ```
        cat /sys/kernel/slab/kmalloc-192/reclaim_account
        ```
        
        If the slab memory is unreclaimable, 0 is displayed in the command output. If the slab memory is reclaimable, 1 is displayed in the command output.
        
    
3.  Identify the causes of the high percentage of the slab\_unreclaimable memory.
    
    You can use the crash tool to statically analyze or the perf tool to dynamically analyze the issue to identify the causes of slab memory leaks. In the example scenario in this topic, the slab named `kmalloc-192` has memory leaks.
    
    #### **Method 1: Use crash to perform static analysis**
    
    1.  Install the crash tool.
        
        ```
        sudo yum install crash -y
        ```
        
    2.  Iinstall the kernel-debuginfo tool.
        
        -   Alibaba Cloud Linux 3
            
            ```
            sudo yum install -y kernel-debuginfo-<kernel version> --enablerepo=alinux3-plus-debug
            ```
            
            **Note**
            
            Replace the `kernel version` with the actual kernel version of the system. Run the `uname -r` command to query the kernel version.
            
        -   Alibaba Cloud Linux 2
            
            ```
            sudo yum install kernel-debuginfo -y
            ```
            
    3.  Start the crash tool.
        
        ```
        sudo crash
        ```
        
    4.  Run the following command in crash to view memory statistics about `kmalloc-192`:
        
        ```
        kmem -S kmalloc-192
        ```
        
        If a large amount of memory statistical data is available, you can specify to view only the last few rows. For example, you can run the following command to view the last 10 rows of data:
        
        ```
        kmem -S kmalloc-192 | tail -n 10
        ```
        
        Sample command output:
        
        ```
            SLAB              MEMORY            NODE  TOTAL  ALLOCATED  FREE
          ffffea004c94e780  ffff88132539e000     0     42         29    13
          ffffea004cbef900  ffff88132fbe4000     0     42         40     2
          ffffea000a0e6280  ffff88028398a000     0     42         40     2
          ffffea004bfa8000  ffff8812fea00000     0     42         41     1
          ffffea006842b380  ffff881a10ace000     0     42         41     1
          ffffea0009e7dc80  ffff880279f72000     0     42         34     8
          ffffea004e67ae80  ffff881399eba000     0     42         40     2
          ffffea00b18d6f80  ffff882c635be000     0     42         42     0
        ```
        
        The command output indicates that the amount of free memory (the value in the `FREE` column) of `ffff88028398a000` is small, and the amount of allocated memory (the value in the `ALLOCATED` column) is large.
        
    5.  Run the following command in crash to view the memory data about `ffff88028398a000`:
        
        ```
        rd ffff88028398a000 512 -S
        ```
        
        If the command output contains a large amount of data, you can have the command output displayed in pages.
        
        For example, if the `put_cred_rcu` function repeats multiple times in the command output, you can check the source code of the Linux kernel and search for the `put_cred_rcu` function.
        
        ```
        void __put_cred(struct cred *cred)
        {
            call_rcu(&cred->rcu, put_cred_rcu);
        }
        ```
        
        The `put_cred_rcu` function is used to asynchronously release the `cred` struct. The presence of `put_cred_rcu` at the end of the `cred` struct indicates a slab memory leak in the kernel.
        
    
    #### **Method 2: Use perf to perform dynamic analysis**
    
    1.  Install the perf tool.
        
        ```
        sudo yum install perf -y
        ```
        
    2.  Use perf to dynamically obtain the memory that is not released in `kmalloc-192` at an interval of 200 seconds.
        
        ```
        sudo perf record -a -e kmem:kmalloc --filter 'bytes_alloc == 192' -e kmem:kfree --filter ' ptr != 0' sleep 200
        ```
        
    3.  Save the dynamically obtained data to a temporary file in the current directory.
        
        In this example, the temporary file is named testperf.txt.
        
        ```
        sudo perf script > testperf.txt
        ```
        
    4.  View the content of testperf.txt.
        
        ```
        cat testperf.txt
        ```
        
        You must manually identify the slab memory that contains no free memory (`free`) and then manually query the function that causes slab memory leaks in the source code of the Linux kernel.
        
    
4.  After you use tools such as crash and perf to determine the function call path or the affected kernel data structure related to the memory leaks, we recommend that you identify the specific sources of the memory leaks under the guidance of kernel developers or professional O&M personnel, and then resolve the memory leak issue.
    
    Consider the following solutions:
    
    -   Upgrade the kernel or patch.
        
    -   Adjust kernel parameters.
        
    -   Restart affected services or modules.
        
    -   Optimize applications or drivers.
        
    -   Restart the system.
        

## **References**

A slab memory leak reduces the available memory for applications on an instance and causes memory fragmentation. This can trigger the system's OOM Killer and cause system performance fluctuations.

-   [Mitigate Linux memory fragmentation](/help/en/alinux/support/solutions-to-memory-fragmentation-in-linux-operating-systems)
    
-   [How to resolve a memory leak in polkit in Alibaba Cloud Linux 2?](/help/en/alinux/support/solution-to-polkit-memory-leaks-in-alibaba-cloud-linux-2)
    
-   [Troubleshoot the OOM Killer](/help/en/alinux/support/causes-of-and-solutions-to-the-issue-of-oom-killer-being-triggered)
