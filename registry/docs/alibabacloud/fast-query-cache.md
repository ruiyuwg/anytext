The fast query cache is a query cache developed by Alibaba Cloud based on the native MySQL query cache. It uses a new design and implementation mechanism to improve your database query performance.

## Prerequisites

-   Your RDS instance runs MySQL 5.7 with a minor engine version of 20200331 or later.
    
-   The dedicated proxy service is disabled for your RDS instance. For more information, see [Disable the dedicated proxy service for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/disable-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2021036).
    

## Background information

A query cache is a mechanism that improves performance by caching query result sets. Its core principles are:

-   Caching result sets: For qualified queries, the results are directly cached, avoiding repeated SQL analysis, optimization, and execution processes, reducing CPU overhead.
    
-   Performance goal: By reducing computing resource consumption, significantly improving response time for high-frequency simple queries.
    

#### **Drawbacks of the native MySQL Query Cache**

The native MySQL query cache performs poorly in high concurrency scenarios due to design flaws, including the following issues:

-   Poor concurrency processing. If multiple CPU cores are configured, a larger number of concurrent queries may result in lower performance.
    
-   Poor memory management, with low memory utilization and delayed reclamation, causing memory waste.
    
-   If the cache hit ratio is low, query performance does not increase and may even significantly decrease.
    

Due to these issues, the native MySQL Query Cache has been completely removed in MySQL 8.0 and was disabled by default in earlier versions.

#### Innovative improvements in Alibaba Cloud Fast Query Cache

The Alibaba Cloud database team redesigned and implemented Fast Query Cache to address the drawbacks of the native Query Cache, with the following core optimizations:

**Improvement area**

**Specific measures**

Concurrency performance optimization

Removed global locks, adopted lock-free design and sharding mechanism, enabling multi-core parallel processing and eliminating lock contention.

Memory management optimization

Introduced dynamic memory allocation, allocating memory as needed, combined with intelligent reclamation policies to reduce fragmentation and improve utilization.

Dynamic cache policy tuning

Real-time monitoring of cache hit ratio and business scenarios, dynamically adjusting cache policies (such as eviction strategies, cache validity period) to prevent invalid caches from occupying resources.

Write operation compatibility

Through incremental invalidation mechanism, only partially invalidating affected query caches, reducing the impact of write operations on the cache.

The fast query cache can be used in a wide range of business scenarios to improve query performance. However, the native MySQL query cache does not provide the same level of support.

## Enable the fast query cache

You can enable the fast query cache by configuring the **query\_cache\_type** and **query\_cache\_size** parameters in the ApsaraDB RDS console.

**Parameter**

**Description**

**query\_cache\_type**

The switch that is used to control the fast query cache. Valid values:

-   0: disables the fast query cache. This is the default value.
    
-   1: enables the fast query cache. You can use the SQL\_NO\_CACHE option to skip the caching for SQL statements.
    
-   2: disables the fast query cache. You can use the SQL\_CACHE option to cache the texts and result sets of only the specified SQL statements.
    

**query\_cache\_size**

The size of the memory space that is allocated to the fast query cache. Valid values: 0 to 10485760000. The value must be a multiple of 1024. Unit: bytes.

The fast query cache occupies extra memory space. When you configure the fast query cache, we recommend that you also reconfigure the **innodb\_buffer\_pool\_size** parameter:

1.  Set the **innodb\_buffer\_pool\_size** parameter to 90% of the original value of this parameter. The reduced 10% of memory space is used as the query cache size that is specified by the **query\_cache\_size** parameter. For example, if the original value of the innodb\_buffer\_pool\_size parameter is **{DBInstanceClassMemory\*7/10}**, set this parameter to **{DBInstanceClassMemory\*63/100}**. For more information, see [Change the size of the InnoDB buffer pool](/help/en/rds/apsaradb-rds-for-mysql/change-the-size-of-the-innodb-buffer-pool-for-an-apsaradb-rds-for-mysql-instance#concept-2475308).
    
2.  Set the **query\_cache\_size** parameter. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).
    
    -   If you can accurately estimate the result set size, you can set the **query\_cache\_size** parameter to a value that is equal to `20% of the result set size`.
        
    -   If you cannot accurately estimate the result set size, you can set the **query\_cache\_size** parameter to a value that is equal to `10% of the value of the innodb_buffer_pool_size parameter`.
        
    
    **Note**
    
    When you change the specifications of your RDS instance, the value of the **query\_cache\_size** parameter does not change based on the new specifications. After the specification change is applied, you must immediately reconfigure this parameter.
    
3.  Set the **query\_cache\_type** parameter to **1**. This allows you to enable the fast query cache. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).
    

## Performance comparison

Compare the queries per second (QPS) with different query cache configurations under the same conditions in various test cases. These query cache configurations are QC-OFF (no query cache is enabled), MySQL-QC (the native MySQL query cache is enabled), and Fast-QC (the fast query cache is enabled).

-   Test environment: a dedicated RDS instance with 4 CPU cores and 8 GB of memory
    
-   Test tool: Sysbench
    
-   Test data size: 250 MB (25 tables in total, 40,000 records per table)
    
-   Scenario 1: All hits (read-only)
    
    The oltp\_point\_select script is used. Execute only the POINT SELECT statements that are based on primary keys. Additionally, make sure that you set the query cache size to 512 MB. This size is greater than the test data size and allows the cache hit ratio to reach 100%. In this test case, focus on how much the QPS increases based on the number of concurrent queries.
    
    Table 1. QPS for read queries with a cache hit ratio of 100%
    
    **Number of concurrent queries**
    
    **QC-OFF**
    
    **MySQL-QC (QPS increase compared with QC-OFF)**
    
    **Fast-QC (QPS increase compared with QC-OFF)**
    
    1
    
    8,093
    
    8,771 (8.38%)
    
    9,261 (14.43%)
    
    8
    
    62,262
    
    65,686 (5.50%)
    
    75,313 (20.96%)
    
    16
    
    97,083
    
    73,027 (-24.78%)
    
    139,323 (43.51%)
    
    32
    
    97,337
    
    60,567 (-37.78%)
    
    200,978 (106.48%)
    
    64
    
    106,283
    
    60,216 (-43.34%)
    
    221,659 (108.56%)
    
    128
    
    107,781
    
    62,844 (-41.69%)
    
    231,409 (114.70%)
    
    256
    
    106,694
    
    63,832 (-40.17%)
    
    222,187 (108.25%)
    
    512
    
    101,733
    
    64,866 (-36.24%)
    
    203,789 (100.32%)
    
    1,024
    
    89,548
    
    62,291 (-30.44%)
    
    203,542 (127.30%)
    
    ![全部命中](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0306047061/p96444.png)
    
    **Note**
    
    Based on the test result, as the number of concurrent queries increases, the QPS of the native MySQL query cache significantly decreases. However, the QPS of the fast query cache does not decrease and can even increase by up to 100%.
    
-   Scenario 2: High hit rate (read-only)
    
    The test scenario is Sysbench oltp\_read\_only. The use case includes range queries that return multiple records. When the Query Cache is set to 512 MB, the memory is relatively sufficient, and the hit rate can exceed 80%. This test focuses on performance improvements under various concurrent loads.
    
    Table 2. QPS for read queries with a cache hit ratio higher than 80%
    
    **Number of concurrent queries**
    
    **QC-OFF**
    
    **MySQL-QC (QPS increase compared with QC-OFF)**
    
    **Fast-QC (QPS increase compared with QC-OFF)**
    
    1
    
    5099
    
    6467 (26.83%)
    
    7022 (37.71%)
    
    8
    
    28782
    
    28651 (-0.46%)
    
    45017 (56.41%)
    
    16
    
    35333
    
    31099 (-11.98%)
    
    66770 (88.97%)
    
    32
    
    34864
    
    27610 (-20.81%)
    
    67623 (93.96%)
    
    64
    
    35503
    
    27518 (-22.49%)
    
    75981 (114.01%)
    
    128
    
    35744
    
    27733 (-22.41%)
    
    80396 (124.92%)
    
    256
    
    35685
    
    27738 (-22.27%)
    
    80925 (126.78%)
    
    512
    
    35308
    
    27398 (-22.40%)
    
    79323 (124.66%)
    
    1024
    
    34044
    
    26861 (-22.10%)
    
    75742 (122.48%)
    
    ![高命中率](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0306047061/p96455.png)
    
    **Note**
    
    Based on the test result, as the number of concurrent queries increases, the QPS of the native MySQL query cache significantly decreases. However, the QPS of the fast query cache continues to increase, and can even increase by more than 100% at its peak.
    
-   Test case 3: Test the QPS for read queries with a cache hit ratio of about 10%
    
    The oltp\_read\_only script is used. Run queries including range queries that each return multiple records. Additionally, make sure that you set the query cache size to 16 MB. This size results in insufficient memory space and the deletion of a large amount of cached data. This allows the cache hit ratio to decrease to about 10%. In this test case, focus on how much the QPS decreases based on the number of concurrent queries.
    
    Table 3. QPS for read queries with a cache hit ratio of about 10%
    
    **Number of concurrent queries**
    
    **QC-OFF**
    
    **MySQL-QC (QPS increase compared with QC-OFF)**
    
    **Fast-QC (QPS increase compared with QC-OFF)**
    
    1
    
    5,004
    
    4,727 (-5.54%)
    
    5,199 (3.90%)
    
    8
    
    28,795
    
    22,542 (-21.72%)
    
    28,578 (-0.75%)
    
    16
    
    35455
    
    24,064 (-32.13%)
    
    35,682 (0.64%)
    
    32
    
    34,526
    
    21,330 (-38.22%)
    
    35,871 (3.90%)
    
    64
    
    35,514
    
    19,791 (-44.27%)
    
    36,051 (1.51%)
    
    128
    
    35,983
    
    19,519 (-45.75%)
    
    36,253 (0.75%)
    
    256
    
    35,695
    
    19,168 (-46.30%)
    
    36,337 (1.80%)
    
    512
    
    35,182
    
    18,420 (-47.64%)
    
    35,972 (2.25%)
    
    1,024
    
    33,915
    
    20,168 (-40.53%)
    
    34,546 (1.86%)
    
    ![低命中率](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1306047061/p96458.png)
    
    **Note**
    
    Based on the test result, the QPS of the native MySQL query cache significantly decreases, with performance loss approaching 50% at most. However, the Fast Query Cache optimizes low hit ratio scenarios and causes almost no additional performance loss.
    
-   Test case 4: Test the QPS for read and write queries.
    
    The oltp\_read\_write script is used. Run transactions that contain updates to tables. These frequent updates result in the deletion of cached data. Consequently, the configured query cache is considered invalid. In this test case, focus on how much the QPS decreases based on the number of concurrent queries.
    
    Table 4. QPS for read and write queries
    
    **Number of concurrent queries**
    
    **QC-OFF**
    
    **Fast-QC (QPS increase compared with QC-OFF)**
    
    1
    
    4,152
    
    4,098 (-1.30%)
    
    8
    
    21,359
    
    21,195 (-0.77%)
    
    16
    
    26,020
    
    25,548 (-1.81%)
    
    32
    
    27,595
    
    26,996 (-2.17%)
    
    64
    
    29,229
    
    28,733 (-1.70%)
    
    128
    
    29,265
    
    28,828 (-1.49%)
    
    256
    
    29,911
    
    29,616 (-0.99%)
    
    512
    
    29,148
    
    28,816 (-1.14%)
    
    1,024
    
    29,204
    
    28,824 (-1.30%)
    
    ![读写混合](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1306047061/p96466.png)
    
    **Note**
    
    Based on the test result, as the number of concurrent read and write queries increases, the QPS of the fast query cache decreases only by a small amount.
    

## Practice guidelines

#### **Scenarios**

Fast Query Cache is primarily used to improve performance in read-intensive scenarios. It is recommended for environments where reads significantly outnumber writes:

-   Business operations that are primarily query-based with low write frequency (such as e-commerce product detail pages, report queries).
    
-   Using `SQL_CACHE` to explicitly enable caching for specific tables (such as tables with high read-to-write ratios). You can also view table-level read-to-write ratios through the TABLE\_STATISTICS table and explicitly enable Fast Query Cache using the SQL\_CACHE keyword for tables with high read-to-write ratios. For information about querying the TABLE\_STATISTICS table, see [Performance Insight](/help/en/rds/apsaradb-rds-for-mysql/performance-insight-1#task-1909611).
    

Not recommended for:

-   Write-intensive scenarios (such as high-frequency transaction systems): Frequent cache invalidation may cause performance degradation.
    
-   Scenarios requiring high data real-time accuracy (such as stock market quotes): Cached data may be inconsistent with real-time data.
    
-   Before enabling globally, it is recommended to check the InnoDB Buffer Pool hit ratio (hit ratio = 1 - Innodb\_buffer\_pool\_reads/Innodb\_buffer\_pool\_read\_requests). If the hit ratio is below 80%, enabling Fast Query Cache is not recommended.
    

#### Cache usage method (**Query\_cache\_type****)**

The **query\_cache\_type** parameter supports session-level modification. Users can flexibly configure it based on actual business scenarios. Please refer to the following recommendations:

**Parameter value**

**Description**

**Applicable scenarios**

0

Globally disable Fast Query Cache

Write-intensive scenarios or extremely low cache hit ratio scenarios

1

Globally enable, automatically cache all qualified queries

Read-intensive scenarios with low data update frequency

2

Only enable caching for queries with explicit `SQL_CACHE` keyword

Large data volume, unstable access patterns, or scenarios requiring fine-grained control

#### Cache size (**Query\_cache\_size****) settings**

The **query\_cache\_size** is closely related to SQL queries. If the cache contains queries that return multiple records, the cache may need to be several times larger than the data volume. If SQL queries do not include range queries, you can refer to the following test to evaluate the relationship between data volume and **query\_cache\_size**.

-   Test environment: a dedicated RDS instance with 4 CPU cores and 8 GB of memory (innodb\_buffer\_pool\_size = 6 GB)
    
-   Test tool: Sysbench
    
-   Test data size: 10 GB (100 tables in total, 400,000 records per table)
    

Test case: Specify different cache sizes by using the query\_cache\_size parameter and execute the oltp\_point\_select script for each cache size. Make sure that 64 threads concurrently run to query data. In this case, the test data includes 20% hot data. This way, you can obtain the impacts of different cache sizes (**query\_cache\_size**) on the QPS. The actual result set size is 2.5 GB based on the test data size.

Table 5. QPS with different cache sizes

**query\_cache\_size (MB)**

**QC-OFF**

**Fast-QC hit ratio**

**Fast-QC (QPS increase compared with QC-OFF)**

64

98,236

22%

99,440 (1.23%)

128

98,236

45%

114,155 (16.21%)

256

98,236

72%

140,668 (43.19%)

512

98,236

82%

151,260 (53.98%)

1,024

98,236

84%

153,866 (56.63%)

2,048

98,236

87%

159,597 (62.46%)

4,096

98236

92%

169,412 (72.45%)

The performance of the fast query cache does not decrease regardless of the value of the **query\_cache\_size** parameter. Specifically, the fast query cache provides significantly higher performance than the native MySQL query cache for primary key queries regardless of the cache hit ratio. In some circumstances, the performance can even increase by more than 90%. If the cache hit ratio is less than 90%, the fast query cache provides higher performance than the native MySQL query cache and saves many CPU resources for range queries and for the queries that contain the `ORDER BY` clause.
