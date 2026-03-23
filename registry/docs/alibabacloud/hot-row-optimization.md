Hot rows (hotsopt rows) are data rows in a database that are frequently modified. In high-concurrency scenarios, updating hot rows causes severe row lock contention and long wait times, which degrades system performance. To address this issue, PolarDB provides innovative optimizations at the database kernel level that greatly improve system performance.

## Overview

Hot rows present the following challenges:

-   When a transaction updates a data row, it locks the row until the transaction is committed or rolled back. During this time, only one transaction can update the row, and other transactions must wait. This means that update requests for a single hot row are executed sequentially. Traditional database and table sharding strategies provide limited performance improvements in this scenario.
    
-   In E-commerce, promotions such as purchase limits and flash sales are common. These events can cause many update requests for hot rows to arrive at the database system in a very short period. This leads to severe row lock contention and long wait times, which degrades system performance. If an update request has to wait for a long time, it can significantly impact the business.
    

Simply improving hardware cannot meet these low-latency demands. Therefore, PolarDB provides innovative optimizations at the database kernel level. The system automatically identifies update requests for hot rows and groups update operations on the same data row that occur within a specific time interval. These groups are then processed in parallel using a pipeline. These optimizations greatly improve system performance.

## **Technical solution**

-   From sequential processing to pipeline processing
    
    Parallel processing is a direct way to improve database system performance. However, it is difficult to fully parallelize update operations on the same hot row. PolarDB uses an innovative pipeline processing method to maximize the parallelism of hot row update operations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5194003671/CAEQTxiBgMDtz6fg0xkiIGQzZDRkYzgxNTNhMTRkMGVhMmRjYWI1ZmU2NTNlZmVh4581316_20240813171459.328.svg)
    
    SQL statements for hot row updates are marked with `autocommit` or [COMMIT\_ON\_SUCCESS](/help/en/polardb/polardb-for-mysql/user-guide/inventory-hints#section-lxc-jax-cp9). The optimized MySQL kernel layer automatically detects update operations with these marks. Within a certain time interval, it collects the update operations and hashes them into buckets based on the primary key or `unique key`. The update operations that are `hashed` to the same bucket are grouped and submitted for processing in the order they arrived.
    
    To process these update operations using a pipeline, two execution units are used to group them. When the first group is collected and ready for commit, the second group immediately starts collecting update operations. When the second group is collected and ready for commit, the first group has already been committed and begins collecting a new batch of update operations. The two groups alternate, executing in parallel.
    
    Multi-core CPUs are now very common. This pipeline processing method can make full use of hardware resources, increase CPU utilization, and improve the parallel processing capability of the database system. This maximizes the throughput of the database system.
    
-   Eliminate waiting when requesting row locks
    
    To ensure data consistency, a lock is placed on a data row when it is updated. If the lock request cannot be granted immediately, the request enters a waiting state. This not only increases processing latency but also triggers deadlock detection, which consumes extra resources.
    
    As mentioned earlier, update operations on the same data row are grouped in chronological order. The first update operation in a group is the Leader. It reads the target data row and locks it. Subsequent update operations are Followers. When a Follower requests a lock on the target data row, if it finds that the Leader already holds the lock on the row, it can acquire the lock immediately without waiting.
    
    This optimization reduces the number of lock requests and the time overhead for row locks. The overall performance of the database system is significantly improved.
    
-   Reduce B-tree index traversals
    
    MySQL manages data using B-tree indexes. Each query must traverse the index to locate the target data row. The larger the data table and the more index levels it has, the longer the traversal takes.
    
    In the grouping mechanism mentioned earlier, only the Leader of each group traverses the index to locate the data row. Then, the updated data row is cached in memory (Row Cache). After the Followers in the same group successfully acquire the lock, they can directly retrieve the target data row from memory without traversing the index again.
    
    This reduces the overall number of index traversals and the time overhead.
    

## Prerequisites

-   Your PolarDB cluster runs one of the following versions:
    
    -   PolarDB for MySQL 5.6, with a minor engine version of 20200601 or later.
        
    -   MySQL 5.7 with a minor engine version of 5.7.1.0.17 or later.
        
    -   MySQL 8.0 with a minor engine version of 8.0.1.1.10 or later.
        
-   [Binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging) is enabled.
    
-   The cluster parameter **rds\_ic\_reduce\_hint\_enable** is disabled.
    
    -   For MySQL 5.6 and MySQL 8.0, the cluster parameter is disabled by default.
        
    -   For PolarDB for MySQL 5.7, this parameter is enabled by default. Before you enable the hot row optimization feature, you must [change the parameter value](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301) to OFF.
        
    
    **Note**
    
    For compatibility with MySQL configuration files, all cluster parameters in the [PolarDB console](https://polardb.console.alibabacloud.com/) are prefixed with **loose\_**. To modify the **rds\_ic\_reduce\_hint\_enable** parameter in the [PolarDB console](https://polardb.console.alibabacloud.com/), you must select the parameter with the **loose\_** prefix: **loose\_rds\_ic\_reduce\_hint\_enable**.
    

## Limits

The hot row optimization feature is not used in the following scenarios:

-   The table that contains the hot rows is a partitioned table.
    
-   A trigger is defined on the table that contains the hot rows.
    
-   The statement queue is used for the hot rows.
    
-   If global binary logging is enabled but session-level binary logging is disabled, `UPDATE` statements do not use the hot row optimization feature.
    

## How to use

1.  Enable the hot row optimization feature.
    
    In the [PolarDB console](https://polardb.console.alibabacloud.com/), you can [configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301) to enable or disable the hot row optimization feature.
    
    **Parameter**
    
    **Description**
    
    **hotspot**
    
    The switch for the hot row optimization feature. Valid values:
    
    1.  **ON**: enabled.
        
    2.  **OFF** (default): disabled.
        
    
    **Note**
    
    For compatibility with MySQL configuration files, all cluster parameters in the [PolarDB console](https://polardb.console.alibabacloud.com/) are prefixed with **loose\_**. To modify the **hotspot** parameter in the [PolarDB console](https://polardb.console.alibabacloud.com/), you must select the parameter with the **loose\_** prefix: **loose\_hotspot**.
    
2.  Use hint syntax to enable the hot row optimization feature.
    
    **Hint**
    
    **Required**
    
    **Description**
    
    [COMMIT\_ON\_SUCCESS](/help/en/polardb/polardb-for-mysql/user-guide/inventory-hints#section-lxc-jax-cp9)
    
    Required
    
    Commits the transaction if the update is successful.
    
    [ROLLBACK\_ON\_FAIL](/help/en/polardb/polardb-for-mysql/user-guide/inventory-hints#section-lxc-jax-cp9)
    
    Optional
    
    Rolls back the transaction if the update fails.
    
    [TARGET\_AFFECT\_ROW(1)](/help/en/polardb/polardb-for-mysql/user-guide/inventory-hints#section-lxc-jax-cp9)
    
    Optional
    
    Explicitly specifies that the request updates only one row. If this condition is not met, the update fails.
    
    **Note**
    
    Because a hint automatically commits the transaction, it must be included in the last SQL statement of the transaction.
    
    Example: Update the value of the `c` column in the `sbtest` table.
    
    ```
    UPDATE /*+ COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL TARGET_AFFECT_ROW(1) */ sbtest SET c = c + 1 WHERE id = 1;
    ```
    

## **Related operations**

### **Custom parameter configuration**

You cannot modify the following parameters in the [PolarDB console](https://polardb.console.alibabacloud.com/). To modify them, navigate to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas). Find the quota named **PolarDB hotspot row parameter adjustment** and click **Apply** in the **Actions** column.

**Parameter**

**Description**

**hotspot\_for\_autocommit**

Specifies whether to use the hot row optimization feature for `UPDATE` statements in `autocommit` mode. Valid values:

-   **ON**: enabled.
    
-   **OFF** (default): disabled.
    

**hotspot\_update\_max\_wait\_time**

The wait time for a Leader to wait for Followers to join the group during a Group Update.

-   Unit: microsecond (us).
    
-   Default value: 100 us.
    

**hotspot\_lock\_type**

Specifies whether to use a new type of row lock during a Group Update. Valid values:

-   **ON**: enabled.
    
-   **OFF** (default): disabled.
    

**Note**

-   If this parameter is enabled, when an update operation requests a row lock on the same hot row, it obtains the lock immediately without waiting. This improves performance.
    
-   New type of row lock: Refers to the lock described above that is obtained immediately without waiting.
    

### **View parameter configurations**

Run the following command to view the parameter configurations for the hot row optimization feature.

```
SHOW variables LIKE "hotspot%";
```

Sample result:

```
+------------------------------+-------+
|Variable_name                 | Value |
+------------------------------+-------+
|hotspot                       | OFF   |
|hotspot_for_autocommit        | OFF   |
|hotspot_lock_type             | OFF   |
|hotspot_update_max_wait_time  | 100   |
+------------------------------+-------+
```

### **View usage**

Run the following command to view the usage of the hot row optimization feature.

```
SHOW GLOBAL status LIKE 'Group_update%';
```

## Performance testing

### **Test tool**

Sysbench is an open-source, cross-platform performance testing tool. It is primarily used for database benchmarks, such as for MySQL, and system performance tests for components such as the CPU, memory, I/O, and threads. It supports multi-threaded testing and uses Lua scripts to flexibly control test logic. It is suitable for scenarios such as database performance evaluation and stress testing.

### **Test data table and test statement**

-   Table definition
    
    ```
    CREATE TABLE sbtest (id INT UNSIGNED NOT NULL, c BIGINT UNSIGNED NOT NULL, PRIMARY KEY (id));
    ```
    
-   Test statement
    
    ```
    UPDATE /*+ COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL TARGET_AFFECT_ROW(1) */ sbtest SET c = c + 1 WHERE id = 1;
    ```
    

### **Test results**

## PolarDB for MySQL 5.6

**Test scenario**

One hot row and an 8-core CPU.

**Test result**

In a scenario with one hot row and an 8-core CPU, the performance on inventory hot spots improves by nearly 50 times under high concurrency after the hot row optimization feature is enabled.

**Test data (QPS)**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4194003671/p1003766.png)

**Concurrency**

**1**

**8**

**16**

**32**

**64**

**128**

**256**

**512**

**1024**

Hot row optimization disabled

1365.31

1863.94

1866.6

1862.64

1867.32

1832.51

1838.31

1819.52

1833.2

Hot row optimization enabled

1114.79

7000.19

12717.32

22029.48

43096.06

61349.7

83098.69

90860.94

87689

## PolarDB for MySQL 5.7

**Test scenario**

One hot row and an 8-core CPU.

**Test result**

In a scenario with one hot row and an 8-core CPU, the performance on inventory hot spots improves by nearly 35 times under high concurrency after the hot row optimization feature is enabled.

**Test data**

## QPS

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4194003671/p1003767.png)

**Concurrency**

**1**

**8**

**16**

**32**

**64**

**128**

**256**

**512**

**1024**

Hot row optimization disabled

1348.49

1892.29

1889.77

1895.86

1875.2

1850.26

1843.62

1849.92

1835.68

Hot row optimization enabled

1104.9

6886.89

12485.17

16003.23

16460.31

16548.86

27920.89

47893.96

66500.92

## lat95th (95th percentile latency)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4194003671/p1003768.png)

**Concurrency**

**1**

**8**

**16**

**32**

**64**

**128**

**256**

**512**

**1024**

Hot row optimization disabled

0.9

5.47

9.91

18.95

36.89

73.13

164.45

297.92

590.56

Hot row optimization enabled

1.08

1.44

1.58

3.25

5.28

9.56

12.08

13.22

18.28

## PolarDB for MySQL 8.0

**Test scenario**

One hot row and an 8-core CPU.

**Test result**

In a scenario with one hot row and an 8-core CPU, the performance on inventory hot spots improves by nearly 26 times under high concurrency after the hot row optimization feature is enabled.

**Test data**

## QPS

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4194003671/p1003769.png)

**Concurrency**

**1**

**8**

**16**

**32**

**64**

**128**

**256**

**512**

**1024**

Hot row optimization disabled

1559.14

2103.82

2116.4

2082.1

2079.74

2031.64

1993.09

1977.6

1983.61

Hot row optimization enabled

1237.28

7443.04

12244.19

15529.52

23041.15

33931.18

53924.24

54598.6

50988.22

## **lat95th (95th percentile latency)**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4194003671/p1003770.png)

**Concurrency**

**1**

**8**

**16**

**32**

**64**

**128**

**256**

**512**

**1024**

Hot row optimization disabled

0.8

5

8.9

17.32

33.12

66.84

153.02

287.38

549.52

Hot row optimization enabled

0.97

1.34

1.89

3.19

4.82

5.88

7.17

13.46

28.16

### **Appendix: Performance testing steps**

1.  Prepare an ECS instance and [install Sysbench](/help/en/polardb/polardb-for-mysql/oltp-performance-test#title-hbk-mf4-3k4).
    
2.  Place the following `oltp_inventory.lua` in the `src/lua` folder of the Sysbench source code.
    
    ```
    #!/usr/bin/env sysbench
    -- it is to test inventory_hotspot performance
    
    sysbench.cmdline.options= {
        inventory_hotspot = {"enable ali inventory hotspot", 'off'},
        tables = {"table number", 1},
        table_size = {"table size", 1},
        oltp_skip_trx = {'skip trx', true},
        hotspot_rows = {'hotspot row number', 1}
    }
    
    
    function cleanup()
        drv = sysbench.sql.driver()
        con = drv:connect()
        for i = 1, sysbench.opt.tables do
            print(string.format("drop table sbtest%d ...", i))
            drop_table(drv, con, i)
        end
    end
    
    function drop_table(drv, con, table_id)
        local query
        query = string.format("drop table if exists sbtest%d ", table_id)
        con:query(query)
    end
    
    function create_table(drv, con, table_id)
        local query
        query = string.format("CREATE TABLE sbtest%d (id INT UNSIGNED NOT NULL, c BIGINT UNSIGNED NOT NULL, PRIMARY KEY (id))", table_id)
        con:query(query)
        for i=1, sysbench.opt.table_size do
            con:query("INSERT INTO sbtest" .. table_id .. "(id, c) values (" ..i.. ", 1)")
        end
    end
    
    function prepare()
        drv = sysbench.sql.driver()
        con = drv:connect()
        for i = 1, sysbench.opt.tables do
            print(string.format("Creating table sbtest%d ...", i))
            create_table(drv, con, i)
        end
    end
    
    function thread_init()
        drv = sysbench.sql.driver()
        con = drv:connect()
        begin_query = 'BEGIN'
        commit_query = 'COMMIT'
    end
    
    function event()
        local table_name
        table_name = "sbtest" .. sysbench.rand.uniform(1, sysbench.opt.tables)
        local min_line = math.min(sysbench.opt.table_size, sysbench.opt.hotspot_rows)
        local row_id = sysbench.rand.uniform(1, min_line)
    
        if not sysbench.opt.oltp_skip_trx then
            con:query(begin_query)
        end
    
        if (sysbench.opt.inventory_hotspot == "on") then
            con:query("UPDATE COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL TARGET_AFFECT_ROW 1 " .. table_name .. " SET c=c+1 WHERE id =" .. row_id)
        else
            con:query("UPDATE " .. table_name .. " SET c=c+1 WHERE id = " .. row_id)
        end
    
        if not sysbench.opt.oltp_skip_trx then
            if (sysbench.opt.inventory_hotspot == "on") then
                con:query(commit_query)
            end
        end
    end
    
    function thread_done()
       con:disconnect()
    end
    ```
    
3.  [Connect to the cluster using the command line](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#50dd39d098s6g).
    
4.  Run the Sysbench test.
    
    1.  Prepare the data.
        
        ```
        sysbench --hotspot_rows=1 --histogram=on --mysql-user=<user> --inventory_hotspot=on --mysql-host=<host> --threads=1 --report-interval=1 --mysql-password=<password> --tables=1 --table-size=1 --oltp_skip_trx=true --db-driver=mysql --percentile=95 --time=300 --mysql-port=<port> --events=0 --mysql-db=<database> oltp_inventory prepare
        ```
        
    2.  Run the test.
        
        ```
        sysbench --db-driver=mysql --mysql-host=<host> --mysql-port=<port> --mysql-user=<user> --mysql-password=<password> --mysql-db=<database> --range-selects=0 --table_size=25000 --tables=250 --events=0 --time=600 --rand-type=uniform --threads=<threads> oltp_read_only run
        ```
        
    
    **Input parameters**
    
    **Parameter**
    
    **Description**
    
    mysql-host
    
    The cluster endpoint.
    
    mysql-port
    
    The port of the cluster endpoint.
    
    mysql-user
    
    The username for the cluster.
    
    mysql-password
    
    The password for the cluster user.
    
    mysql-db
    
    The database name.
    
    **Output parameters**
    
    **Parameter**
    
    **Displayed content**
    
    **Description**
    
    tables
    
    Number of data tables
    
    The total number of data tables that are used in the test.
    
    table\_size
    
    Number of rows in the data table
    
    The number of records in each table.
    
    Data size
    
    The size of the data in the table, displayed in storage units such as MB or GB.
    
    threads
    
    Number of concurrent threads
    
    The number of configured threads.
    
    Thread status
    
    The real-time running status of the threads.
