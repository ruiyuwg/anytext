This topic describes the Warm Buffer Pool feature of PolarDB, including its mechanism, benefits, and usage notes.

## **Background information**

PolarDB for MySQL provides the Warm Buffer Pool feature. When the primary node is manually restarted or restarted due to exceptions, the data retained in the buffer pool can be used to speed up the restart and ensure consistent performance.

## **Prerequisites**

-   The PolarDB cluster runs MySQL 8.0.2, and its revision version is 8.0.2.1.0 or later. For information about how to view the version number of your cluster, see the "Query the engine version" section of [Engine versions](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).
    
-   The table compression feature is not enabled.
    

## **How it works**

The Warmer Buffer Pool feature in PolarDB for MySQL uses the shared memory in Linux. The InnoDB buffer pool in the physical hosts are separated from the PolarDB process to allow the primary node to be quickly restarted.

The following figure shows the architecture of the feature.

![warmbp.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8454299861/p694058.jpg)

-   The control information of the buffer pool and pages, as well as the data in the pages are stored in memory allocated from the shared memory. They are independent of the PolarDB process.
    
-   If an independent buffer pool already exists, PolarDB can be attached with it.
    
-   PolarDB can fix the buffer pool that becomes inconsistent after a node crash and make it consistent.
    
-   When a primary node is manually restarted, PolarDB can save the main information of the transactions. This way, the restart can be significantly faster because the rollback at shutdown and the restoration at startup are both skipped.
    
-   mysqlshm is a buffer pool management tool provided by PolarDB for MySQL. You can use it to perform O&M operations on the buffer pools, such as querying the configurations and releasing buffer pools.
    

## **Benefits**

When the primary node of your cluster is restarted, the Warmer Buffer Pool feature can speed up the process and ensure consistent performance.

-   **Faster speed**: Warmer Buffer Pool significantly reduces the time needed when the primary node is manually restarted or restarted due to exceptions. The effect is especially prominent when the primary node uses a large buffer pool and handles large numbers of write operations and large transactions. In these scenarios, a primary node restart may take minutes. Warmer Buffer Pool can speed it up to seconds.
    
-   **Consistent performance**: Warmer Buffer Pool eliminates the need of warming up the buffer pool during a restart, because the recently used data is not moved back and forth between the buffer pool and node memory. This way, no performance deterioration occurs after the restart.
    
    Example:
    
    The following figure shows the throughput of a 50 GB buffer pool during a restart with and without Warmer Buffer Pool enabled. The sysbench OLTP read-only workloads are used for the test.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8454299861/p694162.png)Result analysis:
    
    -   When Warm Buffer Pool is not enabled (indicated by the orange line), the throughput is only 2% of the normal level immediately after the restart. It gradually goes back to normal after about 200 seconds.
        
    -   When Warm Buffer Pool is enabled (indicated by the blue line), the throughput does not deteriorate during the restart.
        

## **Usage notes**

### **Parameter description**

**Parameter**

**Type**

**Level**

**Description**

innodb\_buf\_shm\_key

Integer

Global

The unique identifier of each PolarDB process.

-   Valid values: 0 to 264\-1.
    
-   Default value: 0. It indicates that Warm Buffer Pool is disabled.
    

innodb\_buf\_shm\_base\_addr

Integer

Global

The base offset of the virtual memory address of the shared buffer pool. The shared memory is mapped to the virtual memory space of PolarDB based on the address.

-   Valid values: 0x300000000000 to 264\-1.
    
-   Default value: 0x567800000000.
    

innodb\_buf\_page\_desc\_free\_list\_size

Integer

Global

The number of pages reserved for assigning descriptors for compressed pages.

-   Valid values: 8 to 128.
    
-   Default value: 16.
    

innodb\_buf\_free\_zip\_pages

Integer

Global

The method to handle compressed pages.

-   Valid values: 1 and 2.
    
    -   1: release the compressed pages when the node restarts due to exceptions.
        
    -   2: force release the compressed pages during the restart.
        
-   Default value: 1.
    

innodb\_buffer\_pool\_parallel\_scan\_threads

Integer

Global

The number of threads for paralleled scan.

-   Valid values: 0 to 512.
    
-   Default value: 4.
    

innodb\_buf\_shm\_huge\_page

Bool

Global

Specifies whether to enable large pages when the system allocates shared memory.

-   Default values: ON and OFF.
    
-   Default value: ON.
    

innodb\_fast\_shutdown

Integer

Global

The InnoDB shutdown mode.

-   Valid values: 0, 1, 2, and 3. The larger the value, the shorter the time needed for a shutdown. The value 3 is added by PolarDB for MySQL. When the parameter is set to 3, the shutdown process is the same as when the value 2 is used, without rolling back the uncommitted transactions.
    
-   Default value: 1.
    

### **Status parameter**

The following table describes the valid values of the innodb\_shared\_buffer\_pool\_status parameter which indicates the status of the Warm Buffer Pool feature.

**Value**

**Description**

Using process private memory

The Warm Buffer Pool feature is disabled. The private memory is used.

Allocate from shared memory

PolarDB uses memory allocated from the shared memory.

Attach to clean shutdown shared memory

PolarDB is connected to a buffer pool that is cleared and shut down.

Attach to abnormal shutdown shared memory

PolarDB is connected to the buffer pool that crashed.

### **mysqlshm**

PolarDB for MySQL provides the mysqlshm tool for managing the Warm Buffer Pool feature.

```
Usage: mysqlshm -k key [options]
   -h, Display this help and exit.
   -k, The shared memory key  [REQUIRED]
   -i, Prinf the basic info of shared memory
   -f, Free the shared memory
```

### **Procedure**

#### **Manual restart**

1.  Set the **inndb\_buf\_shm\_key** parameter in my.cnf to a non-zero value. Then, start the PolarDB cluster.
    
    After the cluster is started, check the **innodb\_shared\_buffer\_pool\_status** parameter. The value should be **Allocate from shared memory**.
    
2.  Set the **innodb\_fast\_shutdown** parameter to 3.
    
3.  Restart the primary node.
    
4.  After the restart, check the **innodb\_shared\_buffer\_pool\_status** parameter. The value should be **Attach to clean shutdown shared memory**.
    

#### **Restart due to exceptions**

1.  Set the **inndb\_buf\_shm\_key** parameter in my.cnf to a non-zero value. Then, start the PolarDB cluster.
    
2.  After the cluster is started, check the **innodb\_shared\_buffer\_pool\_status** parameter. The value should be **Allocate from shared memory**.
    

2.  Terminate the mysqld process to simulate a node crash.
    
3.  Wait for the node to restart.
    
    After the primary node is restarted, check the **innodb\_shared\_buffer\_pool\_status** parameter. The value should be **Attach to abnormal shutdown shared memory**.
