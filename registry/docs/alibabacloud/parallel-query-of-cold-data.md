This topic describes how to use the [Elastic Parallel Query (ePQ)](/help/en/polardb/polardb-for-mysql/user-guide/overview-22) feature in a PolarDB for MySQL cluster to optimize query performance on cold data.

## Background information

As the volume of data stored in Object Storage Service (OSS) tables increases, the query performance on OSS tables degrades, which significantly affects the user experience. You can use the [ePQ](/help/en/polardb/polardb-for-mysql/user-guide/overview-22) feature to resolve the issue. The ePQ feature significantly accelerates query execution by increasing the number of threads, which optimizes the query process, enhances data retrieval efficiency, and ensures quick access to the required information.

## Description

You can perform parallel query execution only on cold data in the CSV format. The parallel query execution feature assigns different tasks to independent workers. The workers scan the CSV data in the OSS tables in parallel, which significantly improves the query speed. The following table describes the working mechanism.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7638504271/p818582.png)

## **Supported versions**

The cluster must meet the following version and edition requirements:

-   Single-node parallel query execution on cold data:
    
    -   Database engine: MySQL 8.0.1 whose revision version is 8.0.1.1.34 or later.
        
    -   Edition: Enterprise Edition/.
        
-   Single-node parallel query execution on cold data:
    
    -   Database engine: MySQL 8.0.2 whose revision version is 8.0.2.2.24 or later.
        
    -   Edition: Enterprise Edition.
        
-   Multi-mode parallel query execution on cold data:
    
    -   Database engine: MySQL 8.0.2 whose revision version is 8.0.2.2.24 or later.
        
    -   Edition: Enterprise Edition.
        

## Prerequisites

-   A connection to the cluster is established. For more information, see [Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301).
    
-   The cold data archiving feature is enabled for the cluster. For more information, see [Enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving#section-ilh-r7f-rmi).
    
-   The ePQ feature is enabled. For more information, see [Enable elastic parallel query](/help/en/polardb/polardb-for-mysql/user-guide/quick-start).
    
-   Cold data on which you want to perform parallel query execution is in the CSV format.
    
-   The **loose\_csv\_max\_oss\_threads** parameter is set to a value greater than or equal to 2.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7638504271/p819586.png)
    

**Note**

The **loose\_csv\_max\_oss\_threads** parameter specifies the maximum number of OSS threads that can be run in parallel on a node. The valid values of the **loose\_csv\_max\_oss\_threads** parameter are 1 to 100. The default value is 1. If you use the default value, you cannot perform parallel query execution on cold data. By default, a single OSS thread consumes 128 MB of memory. Increase the value of the **loose\_csv\_max\_oss\_threads** parameter based on the remaining memory of the cluster.

## Usage

**Note**

In these examples, tests based on the TPC-H benchmark are performed. However, the tests do not meet all requirements of a TPC-H benchmark test. Therefore, the test results are incomparable with the published TPC-H benchmark test results. For more information, see [TPC-H dataset](/help/en/analyticdb/analyticdb-for-mysql/product-overview/tpc-h-dataset#concept-2427711).

To enable parallel query execution on cold data, enable the ePQ feature and configure the **loose\_csv\_max\_oss\_threads** parameter to an appropriately large value.

Example: Archive a table named `lineitem` to OSS.

```
mysql> show create table lineitem;
*************************** 1. row ***************************
       Table: lineitem
Create Table: CREATE TABLE `lineitem` (
  `l_orderkey` int(11) NOT NULL,
  `l_partkey` int(11) NOT NULL,
  `l_suppkey` int(11) NOT NULL,
  `l_linenumber` int(11) NOT NULL,
  `l_quantity` decimal(10,2) NOT NULL,
  `l_extendedprice` decimal(10,2) NOT NULL,
  `l_discount` decimal(10,2) NOT NULL,
  `l_tax` decimal(10,2) NOT NULL,
  `l_returnflag` char(1) NOT NULL,
  `l_linestatus` char(1) NOT NULL,
  `l_shipDATE` date NOT NULL,
  `l_commitDATE` date NOT NULL,
  `l_receiptDATE` date NOT NULL,
  `l_shipinstruct` char(25) NOT NULL,
  `l_shipmode` char(10) NOT NULL,
  `l_comment` varchar(44) NOT NULL
) ENGINE=CSV DEFAULT CHARSET=utf8 /*!99990 800020204 NULL_MARKER='NULL' */ CONNECTION='default_oss_server'

1 row in set (0.00 sec)
```

You can use multiple methods to enable parallel query execution. For example, you can add a `hint` in your query to enable parallel query execution. To determine whether parallel query execution is enabled, execute the EXPLAIN statement and check whether `Parallel scan` is displayed in the `Extra` column. If it is displayed in the column, parallel query execution is enabled. The number of workers represents the degree of parallelism.

### **Serial query execution**

Execute the EXPLAIN statement and check whether `Parallel scan` is displayed in the `Extra` column. If it is not displayed in the column, parallel query execution is disabled.

```
mysql> explain SELECT
    ->     sum(l_extendedprice * l_discount) AS revenue
    -> FROM
    ->     lineitem
    -> WHERE
    ->     l_shipdate >= date '1994-01-01'
    ->     AND l_shipdate < date '1994-01-01' + interval '1' year
    ->     AND l_discount between 0.05 - 0.01 AND 0.05 + 0.01
    ->     AND l_quantity < 24;

+----+-------------+----------+------------+------+---------------+------+---------+------+----------+----------+-------------+
| id | select_type | table    | partitions | type | possible_keys | key  | key_len | ref  | rows     | filtered | Extra       |
+----+-------------+----------+------------+------+---------------+------+---------+------+----------+----------+-------------+
|  1 | SIMPLE      | lineitem | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 61560489 |     0.41 | Using where |
+----+-------------+----------+------------+------+---------------+------+---------+------+----------+----------+-------------+

1 row in set, 1 warning (1.23 sec)
```

The preceding output indicates that the aggregate calculation and scanning of the table are sequentially performed in one thread. Parallel query execution is disabled.

### **Parallel query execution**

If you add a `hint`(/\*+ PARALLEL(4) \*/) in the query to enable parallel query execution, the execution plan indicates that parallel query execution is performed on the `lineitem` table. The `Parallel scan` (4 workers) information displayed in the `Extra` column in the execution plan indicates that the query is executed in parallel by four worker threads.

```
mysql> explain SELECT /*+ PARALLEL(4) */
    ->     sum(l_extendedprice * l_discount) AS revenue
    -> FROM
    ->     lineitem
    -> WHERE
    ->     l_shipdate >= date '1994-01-01'
    ->     AND l_shipdate < date '1994-01-01' + interval '1' year
    ->     AND l_discount between 0.05 - 0.01 AND 0.05 + 0.01
    ->     AND l_quantity < 24;
+----+-------------+-------------+------------+------+---------------+------+---------+------+----------+----------+----------------------------------------+
| id | select_type | table       | partitions | type | possible_keys | key  | key_len | ref  | rows     | filtered | Extra                                  |
+----+-------------+-------------+------------+------+---------------+------+---------+------+----------+----------+----------------------------------------+
|  1 | SIMPLE      | <gather1.1> | NULL       | ALL  | NULL          | NULL | NULL    | NULL |        4 |   100.00 | NULL                                   |
|  1 | SIMPLE      | lineitem    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 15390122 |     0.41 | Parallel scan (4 workers); Using where |
+----+-------------+-------------+------------+------+---------------+------+---------+------+----------+----------+----------------------------------------+

2 rows in set, 1 warning (2.17 sec)
```

The preceding output indicates that four workers are enabled on the current node. This means that parallel query execution is performed. The overall query speed is four times that of single-thread queries.

### **Multi-node parallel query**

The execution plan shows that `Parallel scan` is used in the query for the `lineitem` table. Each node uses four workers, and a total of two nodes and eight workers are used for parallel execution. The `Extra` column shows the number of workers and the number of nodes.

```
mysql> explain SELECT /*+ PARALLEL(4) */
    ->     sum(l_extendedprice * l_discount) AS revenue
    -> FROM
    ->     lineitem
    -> WHERE
    ->     l_shipdate >= date '1994-01-01'
    ->     AND l_shipdate < date '1994-01-01' + interval '1' year
    ->     AND l_discount between 0.05 - 0.01 AND 0.05 + 0.01
    ->     AND l_quantity < 24;
+----+-------------+-------------+------------+------+---------------+------+---------+------+----------+----------+-------------------------------------------------------+
| id | select_type | table       | partitions | type | possible_keys | key  | key_len | ref  | rows     | filtered | Extra                                                 |
+----+-------------+-------------+------------+------+---------------+------+---------+------+----------+----------+-------------------------------------------------------+
|  1 | SIMPLE      | <gather1.1> | NULL       | ALL  | NULL          | NULL | NULL    | NULL |        1 |   100.00 | NULL                                                  |
|  1 | SIMPLE      | lineitem    | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 59986051 |     0.41 | Parallel scan (8 workers); MPP (2 nodes); Using where |
+----+-------------+-------------+------------+------+---------------+------+---------+------+----------+----------+-------------------------------------------------------+

2 rows in set, 1 warning (0.00 sec)
```

The preceding output indicates that two nodes and eight threads are used for parallel query. Multi-node parallel query execution is enabled, and the overall query speed is eight times the speed of a single-thread query.
