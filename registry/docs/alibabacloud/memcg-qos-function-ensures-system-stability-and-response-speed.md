The memory control group (memcg) quality of service (QoS) feature is designed to manage memory resources and optimize memory usage in Linux operating systems. You can use the memcg QoS feature to lock a specific amount of memory to meet the requirements of critical services or applications. You can also use the feature to specify an upper limit on memory usage to prevent system instability caused by memory-consuming tasks. In community versions of the Linux kernel, the memcg QoS feature is supported only by the `cgroup v2` interface. In Alibaba Cloud Linux 2 starting with kernel version `4.19.91-18.al7` and Alibaba Cloud Linux 3, the memcg QoS feature is also supported by the `cgroup v1` interface.

## Background information

By default, the `memcg QoS` feature is enabled in the `cgroup v1` interface in the Alibaba Cloud Linux kernel. For more information about the `memcg QoS` feature, see `Documentation/admin-guide/cgroup-v2.rst`. You can obtain the kernel document from the Debuginfo package and source code package of Alibaba Cloud Linux. For more information, see [Use Alibaba Cloud Linux 2](/help/en/alinux/getting-started/use-alibaba-cloud-linux-2#task-2187336).

## Usage notes

When you use the memcg QoS feature of the `cgroup v1` interface, we recommend that you place your tasks in a memcg leaf node. Sample task path: /sys/fs/cgroup/memory/<intermediate node>/<leaf node>/tasks.

## Interface description

The following table describes the interfaces that implement the memcg QoS feature of the `cgroup v1` interface in the Alibaba Cloud Linux kernel.

**Interface**

**Description**

memory.min

Absolutely locks a specific amount of memory. Memory locked by this interface cannot be reclaimed even if the system has no other memory to reclaim. This guarantees that the processes in the cgroup can obtain the specified minimum amount of memory and prevents service performance degradation. This interface is suitable for services that need guaranteed minimum amount of resident memory to meet performance requirements.

You can perform the following read and write operations on the interface:

-   Read the size of locked memory from the interface.
    
-   Write the size of locked memory to the interface.
    

memory.low

Relatively locks a specific amount of memory. Memory locked by this interface may be partially reclaimed if the system has no other memory to reclaim. This way, the system can adjust memory allocation in a more reasonable manner when resources are insufficient. This interface is suitable for services that require basic protection but do not require absolute protection, such as non-critical business applications and background tasks.

You can perform the following read and write operations on the interface:

-   Read the size of locked memory from the interface.
    
-   Write the size of locked memory to the interface.
    

memory.high

Limits the memory usage. You can perform the following read and write operations on the interface:

-   Read the upper limit on memory usage from the interface.
    
-   Write the upper limit on memory usage to the interface.
    

## Examples

In Alibaba Cloud Linux 3, allocate memory or specify an upper limit on memory usage in the memcg mount directory, such as /sys/fs/cgroup/memory/.

**Note**

Run the following commands only as the root user.

Sample commands:

1.  Run the following command to create the test\_memcg directory:
    
    ```
    mkdir /sys/fs/cgroup/memory/test_memcg
    ```
    
2.  Absolutely lock a specific amount of memory.
    
    1.  Run the following command to absolutely lock 200 MB of memory:
        
        ```
        echo 209715200 > /sys/fs/cgroup/memory/test_memcg/memory.min
        ```
        
    2.  Run the following command to check whether 200 MB of memory is absolutely locked:
        
        ```
        cd /sys/fs/cgroup/memory/test_memcg
        cat memory.min
        ```
        
3.  Relatively lock a specific amount of memory.
    
    1.  Run the following command to relatively lock 200 MB of memory:
        
        ```
        echo 209715200 > /sys/fs/cgroup/memory/test_memcg/memory.low
        ```
        
    2.  Run the following command to check whether 200 MB of memory is relatively locked:
        
        ```
        cd /sys/fs/cgroup/memory/test_memcg
        cat memory.low
        ```
        
4.  Specify an upper limit on memory usage.
    
    1.  Run the following command to set the upper limit on memory usage to 1 GB:
        
        ```
        echo 1073741824 > /sys/fs/cgroup/memory/test_memcg/memory.high
        ```
        
    2.  Run the following command to check whether the upper limit on memory usage is set to 1 GB:
        
        ```
        cd /sys/fs/cgroup/memory/test_memcg
        cat memory.high
        ```
