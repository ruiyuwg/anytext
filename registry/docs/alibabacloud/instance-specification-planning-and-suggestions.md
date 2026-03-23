This topic describes how to plan the specifications of a StarRocks shared-nothing instance or shared-data instance. You can use the recommendations in this topic for references when you create a StarRocks instance.

## **Shared-nothing instance**

A StarRocks shared-nothing instance contains only frontend nodes (FEs) and backend nodes (BEs). This section describes how to plan the specifications of FEs and BEs.

### **Estimate the total number of CUs of BEs**

In a StarRocks shared-nothing instance, BEs are used to store data and execute computing tasks.

-   Formula
    
    ```
    Total number of CUs = Total number of rows to be scanned/CPU processing capacity/Expected response time × Queries per second (QPS)
    ```
    
    Parameter description:
    
    -   Total number of rows to be scanned: the total number of rows that are expected to be scanned by each SQL statement. Note that this parameter does not refer to the total number of rows in a single table, but is limited to the actual number of rows to be scanned.
        
    -   CPU processing capacity: The value dynamically changes based on the complexity of different SQL statements. In most cases, it ranges from 10 million rows per second to 100 million rows per second. The higher the SQL complexity, the fewer the number of rows processed.
        
    -   Expected response time: the expected execution time of an SQL statement. For example, an SQL statement is expected to return a result in 1 second.
        
    -   QPS: the number of SQL statements that are concurrently submitted per second. Example: 30 queries per second.
        
-   Sample data
    
    **Important**
    
    Formula-based estimates may not be sufficiently accurate, as different SQL complexities can lead to variations. In a production environment, it is necessary to combine the estimation result with the load testing results of actual business to evaluate the final required resources.
    
    **Total number of rows to be scanned**
    
    **SQL complexity**
    
    **CPU processing capacity (rows/second)**
    
    **Expected response time (seconds)**
    
    **QPS**
    
    **Estimated total number of CUs**
    
    **Estimated BE specifications**
    
    50 million
    
    High
    
    20 million
    
    2
    
    50
    
    63
    
    16 CUs × 4
    
    50 million
    
    Medium
    
    50 million
    
    1.5
    
    100
    
    67
    
    16 CUs × 5
    
    50 million
    
    Low
    
    100 million
    
    1
    
    200
    
    100
    
    32 CUs × 3
    
    1 billion
    
    High
    
    20 million
    
    5
    
    20
    
    200
    
    32 CUs × 7
    
    1 billion
    
    Medium
    
    50 million
    
    3
    
    50
    
    333
    
    64 CUs × 6
    
    1 billion
    
    Low
    
    100 million
    
    1
    
    80
    
    800
    
    64 CUs × 13
    
    30 billion
    
    High
    
    20 million
    
    30
    
    10
    
    500
    
    64 CUs × 8
    
    30 billion
    
    Medium
    
    50 million
    
    15
    
    20
    
    800
    
    64 CUs × 13
    
    30 billion
    
    Low
    
    100 million
    
    15
    
    20
    
    400
    
    64 CUs × 6
    
    300 billion
    
    High
    
    20 million
    
    60
    
    5
    
    2,083
    
    64 CUs × 33
    
    300 billion
    
    Medium
    
    50 million
    
    45
    
    10
    
    2,222
    
    64 CUs × 35
    
    300 billion
    
    Low
    
    100 million
    
    45
    
    10
    
    1,111
    
    64 CUs × 18
    

### **Estimate the storage space of BEs**

The total storage space required by a StarRocks instance is affected by the size of the original data, the number of data replicas, and the compression ratio of the data compression algorithm used.

-   Formula
    
    ```
    Total storage space required = Size of original data × Number of data replicas/Compression ratio of the data compression algorithm
    ```
    
    Parameter description:
    
    -   Size of original data: Size of a single row × Total number of data rows.
        
    -   Number of data replicas: In the StarRocks shared-nothing architecture, the number of replicas is 3 in most cases.
        
    -   Compression ratio of the data compression algorithm: StarRocks supports four data compression algorithms: zlib, Zstandard (zstd), LZ4, and Snappy (arranged in descending order of compression ratio). These data compression algorithms are capable of providing compression ratios of 3:1 to 5:1.
        
-   Sample data
    
    **Size of a single row (KB)**
    
    **Total number of data rows**
    
    **Number of data replicas**
    
    **Compression ratio of the data compression algorithm**
    
    **Estimated total storage space (GB)**
    
    50
    
    100,000,000
    
    3
    
    3
    
    4,768.37
    
    **Note**
    
    The estimated result in the preceding table is only for references. In a production environment, it is necessary to combine the estimation result with the load testing results of actual business to evaluate the final required resources.
    

#### **Estimate disk specifications of BEs**

Formula:

```
Total disk size of a single BE = Total storage space/Disk utilization/Number of BEs
```

Parameter description:

-   Total storage space: the total storage space of BEs estimated previously.
    
-   Disk utilization: A disk utilization of 80% is recommended. The remaining 20% space is reserved for computing.
    
-   Number of BEs: the number of BEs that is determined based on the estimation result of CUs.
    

For example, if the total storage space is 4,768 GB, the disk utilization is 80%, and the number of BEs is 11, the total disk size of a single BE is 541 GB. This result is calculated based on the following formula: `4768 GB/80%/11 = 541 GB`.

#### **Determine the number of disks**

The number of disks can be determined based on the performance of ESSDs and the total disk size of each node. To optimize the performance of a single disk, we recommend that you determine the number of ESSDs of PL1 based on information in the following table.

**Total disk size of a single BE**

**Disk type**

**Recommended number of disks**

<= 500 GB

ESSD PL1

1

500 GB - 1 TB

ESSD PL1

1 or 2

1 TB - 1.5 TB

ESSD PL1

2 or 3

1.5 TB - 2 TB

ESSD PL1

3 or 4

2 TB - 2.5 TB

ESSD PL1

4 or 5

2.5 TB - 3 TB

ESSD PL1

5 or 6

3 TB - 3.5 TB

ESSD PL1

6 or 7

3.5 TB - 4 TB

ESSD PL1

7 or 8

\> 4TB

ESSD PL1

8

Upper performance limits of different types of ESSDs:

-   ESSD PL0: The upper I/O performance is reached when the disk size is 320 GB.
    
-   ESSD PL1: The upper I/O performance is reached when the disk size is 460 GB.
    
-   ESSD PL2: The upper I/O performance is reached when the disk size is 1,260 GB.
    
-   ESSD PL3: The upper I/O performance is reached when the disk size is 7,760 GB.
    

Adjust the number of disks of other ESSD types to optimize the performance based on the preceding suggestions for ESSDs of PL1.

### **Estimate the specifications of FEs**

FEs are mainly used for metadata management, client connection management, query planning, and query scheduling.

The specifications of FEs can be roughly estimated based on the total number of CUs of BE. The following table lists the specific suggestions. A single data disk of an FE can be 100 GB in size. If the storage space is insufficient, you can resize the data disk separately.

**Total number of BE CUs**

**Scenario type**

**Recommended FE specifications**

< 120 CUs

Common

8 CUs × 3

120 CUs - 1000 CUs

Common

16 CUs × 3

1000 CUs - 3000 CUs

Common

32 CUs × 3

\>= 3000 CUs

Common

64 CUs × 3

**Note**

-   The estimated result in the preceding table is only for references. In a production environment, it is necessary to combine the estimation result with the load testing results of actual business to evaluate the final required resources.
    
-   In high-concurrency point query scenarios, we recommend that you increase the number of FEs. For example, you can increase the number to 5.
    

## **Shared-data instance**

A StarRocks shared-data instance contains only FEs and compute nodes (CNs).

### **Estimate the total number of CUs of CNs**

You can refer to [Estimate the total number of CUs of BEs](#5ac937324e2g8) for shared-nothing instances.

### **Estimate the storage space of CNs**

The storage space of CNs is mainly used to cache data.

-   Formula
    
    ```
    Total storage space required = Size of original data/Compression ratio of the data compression algorithm × Proportion of hot data
    ```
    
    Parameter description:
    
    -   Size of original data: Size of a single row × Total number of data rows.
        
    -   Compression ratio of the data compression algorithm: StarRocks supports four data compression algorithms: zlib, zstd, LZ4, and Snappy (arranged in descending order of compression ratio). These data compression algorithms are capable of providing compression ratios of 3:1 to 5:1.
        
    -   Proportion of hot data: You can evaluate the proportion of frequently queried hot data based on your business conditions. For example, the evaluation result may be a proportion of 50%. If you are uncertain about the specific proportion and expect the query performance of the shared-data instance to meet your requirements as much as possible, we recommend that you set the proportion to 100%, which indicates a complete data replica. The primary key index also occupies a certain amount of cache space. We recommend that you reserve a buffer of 20%. Therefore, we recommend that you set this value to 120%.
        
-   Sample data
    
    **Size of a single row (KB)**
    
    **Total number of data rows**
    
    **Compression ratio of the data compression algorithm**
    
    **Proportion of hot data**
    
    **Estimated total storage space (GB)**
    
    50
    
    100,000,000
    
    3
    
    120%
    
    1,907.35
    
    **Note**
    
    The estimated result in the preceding table is only for references. In a production environment, it is necessary to combine the estimation result with the load testing results of actual business to evaluate the final required resources.
    

You can refer to [Estimate disk specifications of BEs](#923df2c74c31a) for shared-nothing instances to estimate the size and number of disks for a single CN.

### **Estimate the specifications of FEs**

You can refer to [Estimate the specifications of FEs](#f0acfb2044csk) for shared-nothing instances.
