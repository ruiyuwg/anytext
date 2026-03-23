When the usage of memory allocated by the system reaches the upper limit specified for a memcg, the system triggers memcg-level direct memory reclamation. Direct memory reclamation is a synchronous reclamation that occurs in the context of memory allocation and affects the performance of the current process. To resolve this issue, Alibaba Cloud Linux provides the backend asynchronous reclaim feature for memcgs. This feature is supported by Alibaba Cloud Linux 2 with kernel version `4.19.81-17.al7` and later and Alibaba Cloud Linux 3 with kernel version `5.10.134-12.al8` and later. This feature helps you dynamically and efficiently manage cgroup memory usage and prevent resource exhaustion.

**Warning**

-   Memory allocation in an existing memcg may recursively trigger the backend asynchronous reclamation of the parent cgroup.
    
-   When backend asynchronous reclamation is triggered, it starts from the memcg in which the feature is triggered and is continuously performed in the memcg from top to down in the cgroup hierarchy.
    
-   When the `memory.high` interface is specified to a value that is less than the value of the `memory.limit_in_bytes` interface, the values of the `memory.wmark_high` and `memory.wmark_low` interfaces are calculated based on the `memory.high` interface instead of the `memory.limit_in_bytes` interface.
    

## Interface description

**Interface**

**Description**

`memory.wmark_ratio`

Specifies whether to enable the memcg backend asynchronous reclaim feature and the memcg memory watermark that triggers asynchronous memory reclaim.

Unit: percent of the `memcg limit`.

Valid values: 0 to 100.

-   The default value is 0, which indicates that the memcg backend asynchronous reclaim feature is disabled.
    
-   When the value is not 0, the memcg backend asynchronous reclaim feature is enabled and a watermark is set.
    

`memory.wmark_high`

When the memcg memory usage exceeds the value of this interface, backend asynchronous reclamation is triggered.

A read-only interface.

-   The value of this interface is calculated by using the following formula: memory.wmark\_high = `memory.limit_in_bytes × memory.wmark_ratio/100`.
    
-   When the memcg backend asynchronous reclaim feature is disabled, the default value of the `memory.wmark_high` interface is the maximum value. This prevents the backend asynchronous reclaim feature from being triggered.
    
-   This interface file is not stored in the memcg root directory.
    

`memory.wmark_low`

When the memcg memory usage is less than the value of this interface, backend asynchronous reclamation is terminated.

A read-only interface.

-   The value of this interface is calculated by using the following formula: memory.wmark\_low = `memory.wmark_high - memory.limit_in_bytes × memory.wmark_scale_factor/10000`.
    
-   This interface file is not stored in the memcg root directory.
    

`memory.wmark_scale_factor`

Controls the difference between the `memory.wmark_high` value and the `memory.wmark_low` value.

Unit: 0.01 percent of the memcg memory upper limit (`memcg limit`).

Valid values: 1 to 1000.

-   This interface inherits the value of its parent group when the interface is created. The inherited value is 50, which indicates 0.50% of the memcg memory upper limit (`memcg limit`). This is also the default value.
    
-   This interface file is not stored in the memcg root directory.
    

## Configuration examples

1.  Create a test file.
    
    ```
    sudo mkdir /sys/fs/cgroup/memory/test/
    ```
    
2.  Specify the value of the `memory.limit_in_bytes` interface.
    
    In this example, the value is set to 1 GB.
    
    ```
    sudo sh -c 'echo 1G > /sys/fs/cgroup/memory/test/memory.limit_in_bytes'
    ```
    
3.  Specify the value of the `memory.wmark_ratio` interface.
    
    In this example, the value is set to 95%. The memory watermark in the `memcg` for the asynchronous reclaim feature is 95% of the memcg memory upper limit (`memcg limit`).
    
    ```
    sudo sh -c 'echo 95 > /sys/fs/cgroup/memory/test/memory.wmark_ratio'
    ```
    
4.  View the values of interfaces in the memcg.
    
    -   View the value of the `memory.wmark_scale_factor` interface.
        
        ```
        cat /sys/fs/cgroup/memory/test/memory.wmark_scale_factor
        ```
        
        The default value is 0.50% of the memcg memory limit (`memcg limit`). Sample return value: 50.
        
    -   View the value of the `memory.wmark_high` interface.
        
        ```
        cat /sys/fs/cgroup/memory/test/memory.wmark_high
        ```
        
    -   View the value of the `memory.wmark_low` interface.
        
        ```
        cat /sys/fs/cgroup/memory/test/memory.wmark_low
        ```
