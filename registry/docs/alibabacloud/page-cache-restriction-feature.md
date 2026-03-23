The Page Cache Limit feature is provided in Alibaba Cloud Linux 3 starting with kernel version `5.10.134-14` to resolve system instability issues that are caused by unlimited page cache usage, such as business jitters and unexpected out-of-memory (OOM) errors.

## Background information

In the kernel, memory is allocated and a direct memory reclaim is triggered on a memory control group (memcg) when an upper limit for memory that is specified by the memcg is reached. The memory reclaim may affect the performance of the current process. The [memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim) feature is provided to resolve this issue. However, the feature is not quite effective for burst memory requests. When specific jobs such as the Spark framework are running, a large amount of memory is used as page cache. Most pages in the page cache are dirty pages. Dirty pages are reclaimed slowly. As a result, the kernel may be unable to get enough memory to continue operating and OOM errors unexpectedly occur. To ensure business stability and prevent unexpected OOM errors, page cache usage must be limited.

Alibaba Cloud Linux 3 provides the Page Cache Limit feature to limit page cache usage for memcgs, including root memcgs. You can use the Page Cache Limit feature to specify a limit for page cache usage and asynchronously or synchronously reclaim excess page cache when the limit is exceeded. This prevents larger-than-expected amounts of memory from being used for page cache and improves system stability and reliability.

## Interfaces

**Interface**

**Description**

/sys/kernel/mm/pagecache\_limit/enabled

The switch that controls whether to enable the Page Cache Limit feature globally in the kernel. Valid values: 0 and 1. Default value: 0.

-   1: enables the Page Cache Limit feature globally.
    
-   0: disables the Page Cache Limit feature globally.
    

/sys/fs/cgroup/memory/<Memcg directory name>/memory.pagecache\_limit.enable

The switch that controls whether to enable the Page Cache Limit feature for a specific memcg. Valid values: 0 and 1. Default value: 0.

-   1: enables the Page Cache Limit feature for the memcg.
    
-   0: disables the Page Cache Limit feature for the memcg.
    

/sys/fs/cgroup/memory/<Memcg directory name>/memory.pagecache\_limit.size

The maximum page cache usage of a specific memcg. Unit: bytes. Valid values: 0 to the `memory.limit_in_bytes` value that you specify for the memcg. Default value: 0.

-   0: disables the Page Cache Limit feature for the memcg regardless of whether the global switch and memcg-specific switch for the feature are turned on.
    
-   Non-zero value: limits the page cache usage of the memcg to this value.
    
    **Note**
    
    The page cache usage of a memcg is the sum of the page cache usages of all child memcgs in the memcg.
    

/sys/fs/cgroup/memory/<Memcg directory name>/memory.pagecache\_limit.sync

Controls whether to perform asynchronous or synchronous reclaim when the memcg exceeds the limit for page cache usage. Valid values: 0 and 1. Default value: 0.

> If a task burst generates many Page Caches faster than the asynchronous workqueue can reclaim them, the number of Page Caches may temporarily exceed the `pagecache_limit`.

-   0: performs asynchronous reclaim. The system creates workqueues to perform asynchronous reclaim in the background. This reduces impacts on main threads.
    
    **Note**
    
    Workqueue is a mechanism that is used across the kernel to manage and execute asynchronous jobs (background tasks). The system offloads reclaim tasks to background threads by adding the tasks to workqueues to asynchronously reclaim page cache.
    
-   1: performs synchronous reclaim. Synchronous reclaim tasks run in the context of the current process to block the process and directly reclaim page cache. As a result, the performance of the process may fluctuate.
    

## **How the feature works**

After you enable the Page Cache Limit feature, the feature works on memcgs based on the following principles:

1.  When page cache is allocated to a memcg process, the feature determines whether the current memcg exceeds the limit for page cache usage, and traverses upwards from the memcg to check the `memory.pagecache_limit` values of parent memcgs hierarchically. If the memory.pagecache\_limit value of a parent memcg is 0, the Page Cache Limit feature is disabled for the parent memcg. Page cache usage is not limited for the parent memcg and its child memcgs.
    
2.  If the current memcg exceeds the limit for page cache usage, the feature determines whether to perform synchronous or asynchronous reclaim based on the `memory.pagecache_limit.sync` value.
    
3.  The feature reclaims page cache.
    
    -   Synchronous reclaim: By default, only unmapped file pages can be reclaimed. When the kernel performs more than four scans, mapped file pages can also be reclaimed.
        
    -   Asynchronous reclaim: By default, unmapped and mapped file pages can be reclaimed. When the kernel performs more than two scans, dirty pages can be reclaimed.
        
        **Note**
        
        The following memory pages are available:
        
        -   Unmapped file pages: memory pages that are not mapped to files. In most cases, the pages are private regions of memory that hold temporary data and processes and are not persisted to disks.
            
        -   Mapped file pages: memory pages that are mapped to files. These pages allow processes to read and write file data in memory, which enables random access to files.
            
        -   Dirty pages: mapped file pages that are modified. When processes write data to mapped file pages, the pages are marked dirty. The mark indicates that file copies in memory are modified and different from the files on disks. Dirty pages are periodically written back to disks to ensure data persistence.
            
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5507553671/CAEQTBiBgICVi9SZ3hgiIDM3YTlkOTBlZjhjYTQyYzg4NDZkOWU1N2JlMjkzZGI04018235_20230922174727.061.svg)

## Example on how to configure the interfaces

In this example, a 20 MiB page cache is created and page cache usage is limited to 10 MiB. After you enable the Page Cache Limit feature, verify whether the feature works as expected.

1.  Connect to an Elastic Compute Service (ECS) instance.
    
    For more information, see [Use Workbench to log on to a Linux instance](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#task-2367667).
    
2.  Enable the Page Cache Limit feature globally.
    
    ```
    sudo sh -c 'echo 1 > /sys/kernel/mm/pagecache_limit/enabled'
    ```
    
3.  Enable the Page Cache Limit feature and limit the page cache usage for a specific memcg.
    
    1.  Create a memcg directory. Example: `/sys/fs/cgroup/memory/test/`.
        
        ```
        sudo mkdir -p /sys/fs/cgroup/memory/test/
        ```
        
    2.  Specify a limit for page cache usage for the memcg.
        
        In this example, the page cache usage limit of the memcg is set to 10,485,760 bytes (approximately equal to 10 MiB).
        
        ```
        sudo sh -c 'echo 10485760 > /sys/fs/cgroup/memory/test/memory.pagecache_limit.size'
        ```
        
    3.  Configure a page cache reclaim scheme for the memcg.
        
        -   To use the asynchronous reclaim scheme, run the following command:
            
            ```
            sudo sh -c 'echo 0 > /sys/fs/cgroup/memory/test/memory.pagecache_limit.sync'
            ```
            
        -   To use the synchronous reclaim scheme, run the following command:
            
            ```
            sudo sh -c 'echo 1 > /sys/fs/cgroup/memory/test/memory.pagecache_limit.sync'
            ```
            
    4.  Enable the Page Cache Limit feature for the memcg.
        
        ```
        sudo sh -c 'echo 1 > /sys/fs/cgroup/memory/test/memory.pagecache_limit.enable'
        ```
        
4.  Create a page cache.
    
    1.  Install the `libcgroup` package.
        
        The `cgexec` command is required to create a page cache. In most cases, the `cgexec` command is provided as part of the libcgroup package and needs to be installed. If the `cgexec` command is unavailable in your system, install the libcgroup package.
        
        ```
        sudo yum install libcgroup-tools
        ```
        
    2.  Create a page cache.
        
        In this example, the `dd` command is used to create a 20-MiB page cache by writing a 1-MiB block 20 times in a row.
        
        ```
        sudo dd if=/dev/zero of=./testfile bs=1M count=20 oflag=direct
        sudo cgexec -g "memory:test" cat ./testfile > /dev/null
        ```
        
5.  Check whether the Page Cache Limit feature works as expected.
    
    1.  Run the following command to check the page cache usage:
        
        ```
        grep cache /sys/fs/cgroup/memory/test/memory.stat
        ```
        
        The following command output is returned.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1321169961/p724272.png)
        
        In the preceding command output, `cache` indicates that page cache usage is limited to 10,543,104 bytes (approximately equal to 10 MiB).
        
    2.  Check whether the Page Cache Limit feature reclaims page cache as expected.
        
        ```
        cat /sys/fs/cgroup/memory/test/memory.exstat
        ```
        
        The following command output is returned.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2321169961/p724273.png)
        
        In the preceding command output, `pagecache_limit_reclaimed_kb` indicates that 10,108 KB (approximately equal to 10 MiB) of page cache is reclaimed.
        
        The verification results show that a 20-MiB page cache is created and page cache usage is limited to 10 MiB. When page cache usage exceeds the limit, 10 MiB of page cache is reclaimed by the Page Cache Limit feature as expected.
        
        **Note**
        
        If the `pagecache_limit_reclaimed_kb` value is higher than expected, this may be because an improper amount of data that is read ahead or prefetched during a sequential read operation results in excessive reclaim of page cache. We recommend that you run the `echo 128 | sudo tee /sys/block/<Disk device name>/queue/read_ahead_kb` command to configure the read\_ahead\_kb parameter for the disk. In this example, `vda` is used as the disk device name. The read\_ahead\_kb parameter specifies the number of kilobytes for the kernel to read ahead or prefetch during a sequential read operation. Then, verify the Page Cache feature again.
