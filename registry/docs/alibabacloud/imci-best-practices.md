This topic simulates a business production environment characterized by large datasets to describe how to improve the performance of single-table queries and multiple-table queries in the environment by using the In-Memory Column Index (IMCI) feature.

## **What is the IMCI feature?**

The IMCI feature stores all columns or specific columns of a table in the columnar storage format on a PolarDB read-only node. The feature enables the cluster to use a hybrid storage model that combines row and columnar storage. PolarDB also optimized the query optimizer to work effectively with the columnar storage format and added new execution operators to manage columnar storage in a more efficient manner. This significantly improves the performance of data analysis and complex queries that involve large-scale datasets. For more information, see [What is the IMCI feature?](/help/en/polardb/polardb-for-mysql/user-guide/overview-29).

## **Procedure**

### **Preparations**

Simulate the business production environment for testing.

-   Cluster
    
    -   Database edition: Enterprise Edition.
        
    -   Edition: Cluster Edition (Dedicated)
        
    -   Database engine: 8.0.1.1.45.2.
        
    -   Hot standby storage cluster feature: enabled.
        
    -   Compute node specifications: 32 cores, 256 GB of memory (polar.mysql.x8.4xlarge). One primary node and one read-only node (hot standby).
        
    -   Storage type: PSL5.
        
    -   Parameter template: MySQL\_InnoDB\_8.0\_ Standard Edition\_Default parameter template.
        
-   Data
    
    100 GB TPC-H benchmark testing data.
    
    ```
    -- Query the number of rows and size of tables in a database. 
    +----------+----------+-----------+-----------------+
    | Database | Table    | Rows      | Total Size (GB) |
    +----------+----------+-----------+-----------------+
    | tpch     | customer |  13179406 |            2.59 |
    | tpch     | lineitem | 590446240 |           87.52 |
    | tpch     | nation   |        25 |            0.00 |
    | tpch     | orders   | 142929780 |           18.70 |
    | tpch     | part     |  19354445 |            3.11 |
    | tpch     | partsupp |  67862725 |           20.45 |
    | tpch     | region   |         5 |            0.00 |
    | tpch     | supplier |    986923 |            0.17 |
    +----------+----------+-----------+-----------------+
    ```
    
    **Note**
    
    -   The number of rows and size of tables in a database are affected by various factors such as indexes, storage engines, statistical information, and system tables. Therefore, the actual output may differ from the preceding query result.
        
    -   The TPC-H performance test described in this topic is implemented based on the TPC-H benchmark test but cannot meet all requirements of the TPC-H benchmark test. Therefore, the test results cannot be compared with the published results of the TPC-H benchmark test.
        
    

### Configure IMCIs

Add a read-only IMCI node. In this example, a read-only IMCI node of 32 cores and 256 GB memory (polar.mysql.x8.4xlarge) is added. The read-only node has the same specifications as the primary node. For more information, see [Add a read-only IMCI node](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node).

### **Single-table queries**

1.  Simulate the inefficient execution of SQL queries in your business. Execute the following single-table SQL queries when the IMCI is not configured, and record the execution durations.
    
    ## Single-table scanning and filtering
    
    ```
    SELECT * FROM lineitem WHERE L_COMMENT > 'aaaaaaaa' AND L_COMMENT < 'aaaaaaz';
    ```
    
    ```
    -- Sample result
    Empty set (8 min 47.29 sec)
    ```
    
    ## Single-column aggregation (AGG)
    
    ```
    SELECT SUM(L_DISCOUNT) from lineitem;
    ```
    
    ```
    -Sample result
    +-----------------+
    | SUM(L_DISCOUNT) |
    +-----------------+
    |     30001636.44 |
    +-----------------+
    1 row in set (2 min 6.64 sec)
    ```
    
    ## Grouped aggregation (GROUP BY)
    
    ```
    SELECT AVG(L_DISCOUNT) FROM lineitem WHERE L_SHIPDATE <= date '1998-12-01' - interval '90' day GROUP BY L_RETURNFLAG, L_LINESTATUS;
    ```
    
    ```
    -- Sample result
    +-----------------+
    | AVG(L_DISCOUNT) |
    +-----------------+
    |        0.049998 |
    |        0.050001 |
    |        0.050002 |
    |        0.049985 |
    +-----------------+
    4 rows in set (6 min 28.96 sec)
    ```
    
    ## Pagination (ORDER BY and LIMIT)
    
    ```
    SELECT L_ORDERKEY, SUM(L_QUANTITY) FROM lineitem GROUP BY L_ORDERKEY ORDER BY SUM(L_QUANTITY) DESC LIMIT 1000000, 100;
    ```
    
    ```
    -- Sample result
    +------------+-----------------+
    | L_ORDERKEY | SUM(L_QUANTITY) |
    +------------+-----------------+
    |   25226310 |          244.00 |
    |     ...    |            ...  |
    |  494738146 |          244.00 |
    +------------+-----------------+
    100 rows in set (12 min 24.22 sec)
    ```
    
2.  Create an IMCI. For more information, see [Create an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/use-ddl-statements-to-dynamically-add-and-delete-an-imci#title-jn0-j9v-cn6).
    
    ```
    ALTER TABLE lineitem COMMENT 'COLUMNAR=1 lineitem';
    ```
    
    ```
    -- Sample result
    Query OK, 0 rows affected (0.05 sec)
    Records: 0  Duplicates: 0  Warnings: 0
    ```
    
3.  View the building progress of the IMCI. Wait until the IMCI is created. For more information, see [View the building progress of IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/view-ddl-execution-speed-and-build-progress-for-imcis).
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS;
    ```
    
    ```
    -- The IMCI is being built. 
    +-------------+------------+---------------------+---------------------+-------------+----------+------------------+--------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    | SCHEMA_NAME | TABLE_NAME | CREATED_AT          | STARTED_AT          | FINISHED_AT | STATUS   | APPROXIMATE_ROWS | SCANNED_ROWS | SCAN_SECOND | SORT_ROUNDS | SORT_SECOND | BUILD_ROWS | BUILD_SECOND | AVG_SPEED | SPEED_LAST_SECOND | ESTIMATE_SECOND |
    +-------------+------------+---------------------+---------------------+-------------+----------+------------------+--------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    | tpch        | lineitem   | 2024-10-21 13:44:02 | 2024-10-21 13:44:02 |             | Building | 590446240        | 36718757(6%) | 19          | 0           | 0           | 0(0%)      | 0            | 1848522   | 0                 | 299             |
    +-------------+------------+---------------------+---------------------+-------------+----------+------------------+--------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    1 row in set, 1 warning (0.00 sec)
    ```
    
    ```
    -- The IMCI is created. 
    +-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    | SCHEMA_NAME | TABLE_NAME | CREATED_AT          | STARTED_AT          | FINISHED_AT         | STATUS       | APPROXIMATE_ROWS | SCANNED_ROWS    | SCAN_SECOND | SORT_ROUNDS | SORT_SECOND | BUILD_ROWS | BUILD_SECOND | AVG_SPEED | SPEED_LAST_SECOND | ESTIMATE_SECOND |
    +-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    | tpch        | lineitem   | 2024-10-21 13:44:02 | 2024-10-21 13:44:02 | 2024-10-21 13:50:11 | Safe to read | 590446240        | 600037902(100%) | 369         | 0           | 0           | 0(0%)      | 0            | 1625058   | 0                 | 0               |
    +-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    1 row in set, 1 warning (0.00 sec)
    ```
    
4.  Execute the single-table queries on the `lineitem` table on which the IMCI is created, and record the execution durations.
    
    ## Single-table scanning and filtering
    
    ```
    SELECT * FROM lineitem WHERE L_COMMENT > 'aaaaaaaa' AND L_COMMENT < 'aaaaaaz';
    ```
    
    ```
    -- Sample result
    Empty set (1.47 sec)
    ```
    
    ## Single-column aggregation (AGG)
    
    ```
    SELECT SUM(L_DISCOUNT) from lineitem;
    ```
    
    ```
    -- Sample result
    +-----------------+
    | SUM(L_DISCOUNT) |
    +-----------------+
    |     30001636.44 |
    +-----------------+
    1 row in set (0.06 sec)
    ```
    
    ## Grouped aggregation (GROUP BY)
    
    ```
    SELECT AVG(L_DISCOUNT) FROM lineitem WHERE L_SHIPDATE <= date '1998-12-01' - interval '90' day GROUP BY L_RETURNFLAG, L_LINESTATUS;
    ```
    
    ```
    -- Sample result
    +-----------------+
    | AVG(L_DISCOUNT) |
    +-----------------+
    |        0.050001 |
    |        0.050002 |
    |        0.049985 |
    |        0.049998 |
    +-----------------+
    4 rows in set (2.54 sec)
    ```
    
    ## Pagination (ORDER BY and LIMIT)
    
    ```
    SELECT L_ORDERKEY, SUM(L_QUANTITY) FROM lineitem GROUP BY L_ORDERKEY ORDER BY SUM(L_QUANTITY) DESC LIMIT 1000000, 100;
    ```
    
    ```
    -- Sample result
    +------------+-----------------+
    | L_ORDERKEY | SUM(L_QUANTITY) |
    +------------+-----------------+
    |  299074498 |          244.00 |
    |     ...    |            ...  |
    |  168679332 |          244.00 |
    +------------+-----------------+
    100 rows in set (12.80 sec)
    ```
    
5.  Compare the query execution durations (unit: seconds).
    
    **Query type**
    
    **PolarDB IMCI**
    
    **PolarDB row index**
    
    Single-table scanning and filtering
    
    1.47
    
    527.29
    
    Single-column aggregation (AGG)
    
    0.06
    
    126.64
    
    Grouped aggregation (GROUP BY)
    
    2.54
    
    388.96
    
    Pagination (ORDER BY and LIMIT)
    
    12.80
    
    744.22
    
    The preceding data shows that the execution efficiency of single-table SQL queries is significantly improved after the IMCI is created.
    
    **Note**
    
    The preceding data serves as a reference benchmark for evaluating SQL execution efficiency, rather than an absolute standard. The specific execution duration of SQL queries is dynamically affected by various factors, including the cluster configurations, the current number of connections, the number of concurrent queries, and the real-time load on system resources.
    

### **Multi-table queries and subqueries**

1.  Simulate the inefficient execution of SQL queries in your business. Execute the following SQL queries on tables or columns not fully included in the IMCIs and record the execution durations.
    
    **Note**
    
    -   In the following examples, an IMCI is created only for the `lineitem` table. An IMCI is not created for other tables.
        
    -   If the tables or columns involved in an SQL query are not fully included in IMCIs, IMCIs do not take effect for the SQL query.
        
    -   If you do not know whether the tables or columns involved in an SQL query are fully included in IMCIs, you can call the `dbms_imci.check_columnar_index('<query_string>');` stored procedure to check whether an IMCI is created for the tables specified in the SQL statement. PolarDB also provides stored procedures to help you retrieve or bulk-retrieve DDL statements used to create IMCIs. You can quickly create IMCIs by using the retrieved DDL statements. For more information, see [DDL tools for IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imci-ddl-helper/).
        
    
    ## Multi-table join (JOIN)
    
    ```
    SELECT
      COUNT(l3.L_DISCOUNT)
    FROM
      (
        (
          (
            (
              (
                nation n1 STRAIGHT_JOIN nation n2 on n1.N_NATIONKEY = n2.N_NATIONKEY
              )
              STRAIGHT_JOIN supplier on n2.N_NATIONKEY = supplier.S_NATIONKEY and S_SUPPKEY < 2000
            )
            STRAIGHT_JOIN lineitem AS l1 on l1.L_SUPPKEY = supplier.S_SUPPKEY
          )
          STRAIGHT_JOIN lineitem AS l2 on l1.L_ORDERKEY = l2.L_ORDERKEY and l1.L_LINENUMBER = l2.L_LINENUMBER
        )
        STRAIGHT_JOIN lineitem AS l3 on l2.L_ORDERKEY = l3.L_ORDERKEY and l2.L_LINENUMBER = l3.L_LINENUMBER
      )
    GROUP BY 
      n1.N_NAME;
    ```
    
    The query exceeds the maximum execution duration and is stopped. The maximum execution duration is 7,200 seconds.
    
    ## Query with a subquery
    
    ```
    SELECT 
      O_ORDERPRIORITY, COUNT(*) as ORDER_COUNT 
    FROM
      orders
    WHERE
      O_ORDERDATE >= '1995-01-01' AND
      O_ORDERDATE < date_add('1995-01-01', interval '3' month) AND
      EXISTS 
        (
          SELECT * FROM lineitem WHERE L_ORDERKEY = O_ORDERKEY AND L_COMMITDATE < L_RECEIPTDATE
        )
    GROUP BY 
      O_ORDERPRIORITY
    ORDER BY
      O_ORDERPRIORITY;
    ```
    
    ```
    -- Sample output
    +-----------------+-------------+
    | O_ORDERPRIORITY | ORDER_COUNT |
    +-----------------+-------------+
    | 1-URGENT        |     1028353 |
    | 2-HIGH          |     1030059 |
    | 3-MEDIUM        |     1028615 |
    | 4-NOT SPECIFIED |     1028496 |
    | 5-LOW           |     1029615 |
    +-----------------+-------------+
    5 rows in set (4 min 9.51 sec)
    ```
    
    ## Multi-table join with subqueries
    
    ```
    SELECT 
      C_NAME, C_CUSTKEY, O_ORDERKEY, O_ORDERDATE, O_TOTALPRICE, SUM(L_QUANTITY)
    FROM 
      (
        SELECT * FROM orders WHERE O_ORDERKEY IN 
          (
            SELECT L_ORDERKEY FROM lineitem GROUP BY L_ORDERKEY HAVING SUM(L_QUANTITY) > 300
          ) 
      ) AS tmp, customer, lineitem 
    WHERE 
      C_CUSTKEY = O_CUSTKEY AND 
      O_ORDERKEY = L_ORDERKEY
    GROUP BY 
      C_NAME, 
      C_CUSTKEY, 
      O_ORDERKEY, 
      O_ORDERDATE, 
      O_TOTALPRICE
    ORDER BY 
      O_TOTALPRICE DESC, 
      O_ORDERDATE;
    ```
    
    ```
    +--------------------+-----------+------------+-------------+--------------+-----------------+
    | C_NAME             | C_CUSTKEY | O_ORDERKEY | O_ORDERDATE | O_TOTALPRICE | SUM(L_QUANTITY) |
    +--------------------+-----------+------------+-------------+--------------+-----------------+
    | Customer#011472112 |  11472112 |  458304292 | 1998-02-05  |    591036.15 |          322.00 |
    |        ...         |     ...   |     ...    |     ...     |       ...    |            ...  |
    | Customer#003777694 |   3777694 |  470363105 | 1997-04-06  |    349914.00 |          302.00 |
    | Customer#009446411 |   9446411 |  592379937 | 1995-12-29  |    343496.05 |          304.00 |
    +--------------------+-----------+------------+-------------+--------------+-----------------+
    6398 rows in set (12 min 46.15 sec)
    ```
    
2.  Batch add IMCIs for the tables in the `tpch` database.
    
    ```
    CREATE COLUMNAR INDEX FOR TABLES IN tpch;
    ```
    
    ```
    -- Sample output
    +------------+-------------------+
    | Table_Name | Result            |
    +------------+-------------------+
    | customer   | Ok                |
    | lineitem   | Skip by no change |
    | nation     | Ok                |
    | orders     | Ok                |
    | part       | Ok                |
    | partsupp   | Ok                |
    | region     | Ok                |
    | supplier   | Ok                |
    +------------+-------------------+
    8 rows in set (56.74 sec)
    ```
    
3.  View the building progress of the IMCI. Wait until the IMCI is created. For more information, see [View the building progress of IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/view-ddl-execution-speed-and-build-progress-for-imcis).
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS;
    ```
    
    ```
    -- The IMCIs are created. 
    +-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    | SCHEMA_NAME | TABLE_NAME | CREATED_AT          | STARTED_AT          | FINISHED_AT         | STATUS       | APPROXIMATE_ROWS | SCANNED_ROWS    | SCAN_SECOND | SORT_ROUNDS | SORT_SECOND | BUILD_ROWS | BUILD_SECOND | AVG_SPEED | SPEED_LAST_SECOND | ESTIMATE_SECOND |
    +-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    | tpch        | region     | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | Safe to read | 5                | 5(100%)         | 0           | 0           | 0           | 0(0%)      | 0            | 150       | 0                 | 0               |
    | tpch        | lineitem   | 2024-10-21 14:36:13 | 2024-10-21 14:36:13 | 2024-10-21 14:42:23 | Safe to read | 590446240        | 600037902(100%) | 370         | 0           | 0           | 0(0%)      | 0            | 1620776   | 0                 | 0               |
    | tpch        | supplier   | 2024-10-21 14:44:16 | 2024-10-21 14:44:16 | 2024-10-21 14:44:17 | Safe to read | 986923           | 1000000(100%)   | 1           | 0           | 0           | 0(0%)      | 0            | 784971    | 0                 | 0               |
    | tpch        | part       | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | 2024-10-21 14:43:38 | Safe to read | 19354445         | 20000000(100%)  | 11          | 0           | 0           | 0(0%)      | 0            | 1784854   | 0                 | 0               |
    | tpch        | customer   | 2024-10-21 14:43:19 | 2024-10-21 14:43:19 | 2024-10-21 14:43:27 | Safe to read | 13179406         | 15000000(100%)  | 7           | 0           | 0           | 0(0%)      | 0            | 2051651   | 0                 | 0               |
    | tpch        | nation     | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | Safe to read | 25               | 25(100%)        | 0           | 0           | 0           | 0(0%)      | 0            | 739       | 0                 | 0               |
    | tpch        | partsupp   | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | 2024-10-21 14:44:16 | Safe to read | 67862725         | 80000000(100%)  | 49          | 0           | 0           | 0(0%)      | 0            | 1620131   | 0                 | 0               |
    | tpch        | orders     | 2024-10-21 14:43:27 | 2024-10-21 14:43:27 | 2024-10-21 14:44:27 | Safe to read | 142929780        | 150000000(100%) | 59          | 0           | 0           | 0(0%)      | 0            | 2501701   | 0                 | 0               |
    +-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
    8 rows in set, 1 warning (0.00 sec)
    ```
    
4.  Execute multi-table queries and queries with subqueries on the `tpch` database on which IMCIs are created and record the execution durations.
    
    ## Multi-table join (JOIN)
    
    ```
    SELECT
      COUNT(l3.L_DISCOUNT)
    FROM
      (
        (
          (
            (
              (
                nation n1 STRAIGHT_JOIN nation n2 on n1.N_NATIONKEY = n2.N_NATIONKEY
              )
              STRAIGHT_JOIN supplier on n2.N_NATIONKEY = supplier.S_NATIONKEY and S_SUPPKEY < 2000
            )
            STRAIGHT_JOIN lineitem AS l1 on l1.L_SUPPKEY = supplier.S_SUPPKEY
          )
          STRAIGHT_JOIN lineitem AS l2 on l1.L_ORDERKEY = l2.L_ORDERKEY and l1.L_LINENUMBER = l2.L_LINENUMBER
        )
        STRAIGHT_JOIN lineitem AS l3 on l2.L_ORDERKEY = l3.L_ORDERKEY and l2.L_LINENUMBER = l3.L_LINENUMBER
      )
    GROUP BY 
      n1.N_NAME;
    ```
    
    ```
    +----------------------+
    | COUNT(l3.L_DISCOUNT) |
    +----------------------+
    |                56930 |
    |                 ...  |
    |                49995 |
    +----------------------+
    25 rows in set (6.25 sec)
    ```
    
    ## Query with a subquery
    
    ```
    SELECT 
      O_ORDERPRIORITY, COUNT(*) as ORDER_COUNT 
    FROM
      orders
    WHERE
      O_ORDERDATE >= '1995-01-01' AND
      O_ORDERDATE < date_add('1995-01-01', interval '3' month) AND
      EXISTS 
        (
          SELECT * FROM lineitem WHERE L_ORDERKEY = O_ORDERKEY AND L_COMMITDATE < L_RECEIPTDATE
        )
    GROUP BY 
      O_ORDERPRIORITY
    ORDER BY
      O_ORDERPRIORITY;
    ```
    
    ```
    -- Sample output
    +-----------------+-------------+
    | O_ORDERPRIORITY | ORDER_COUNT |
    +-----------------+-------------+
    | 1-URGENT        |     1028353 |
    | 2-HIGH          |     1030059 |
    | 3-MEDIUM        |     1028615 |
    | 4-NOT SPECIFIED |     1028496 |
    | 5-LOW           |     1029615 |
    +-----------------+-------------+
    5 rows in set (2.49 sec)
    ```
    
    ## Multi-table join with subqueries
    
    ```
    SELECT 
      C_NAME, C_CUSTKEY, O_ORDERKEY, O_ORDERDATE, O_TOTALPRICE, SUM(L_QUANTITY)
    FROM 
      (
        SELECT * FROM orders WHERE O_ORDERKEY IN 
          (
            SELECT L_ORDERKEY FROM lineitem GROUP BY L_ORDERKEY HAVING SUM(L_QUANTITY) > 300
          ) 
      ) AS tmp, customer, lineitem 
    WHERE 
      C_CUSTKEY = O_CUSTKEY AND 
      O_ORDERKEY = L_ORDERKEY
    GROUP BY 
      C_NAME, 
      C_CUSTKEY, 
      O_ORDERKEY, 
      O_ORDERDATE, 
      O_TOTALPRICE
    ORDER BY 
      O_TOTALPRICE DESC, 
      O_ORDERDATE; 
    ```
    
    ```
    -- Sample output
    +--------------------+-----------+------------+-------------+--------------+-----------------+
    | C_NAME             | C_CUSTKEY | O_ORDERKEY | O_ORDERDATE | O_TOTALPRICE | SUM(L_QUANTITY) |
    +--------------------+-----------+------------+-------------+--------------+-----------------+
    | Customer#011472112 |  11472112 |  458304292 | 1998-02-05  |    591036.15 |          322.00 |
    |        ...         |     ...   |     ...    |     ...     |       ...    |            ...  |
    | Customer#003777694 |   3777694 |  470363105 | 1997-04-06  |    349914.00 |          302.00 |
    | Customer#009446411 |   9446411 |  592379937 | 1995-12-29  |    343496.05 |          304.00 |
    +--------------------+-----------+------------+-------------+--------------+-----------------+
    6398 rows in set (16.16 sec)
    ```
    
5.  Compare the query execution durations (unit: seconds).
    
    **Query type**
    
    **PolarDB IMCI**
    
    **PolarDB row index**
    
    Multi-table join (JOIN)
    
    6.25
    
    \>7200
    
    Query with a subquery
    
    2.49
    
    249.51
    
    Multi-table join with subqueries
    
    16.16
    
    766.15
    
    The preceding data shows that after IMCIs are created on the tables, the execution efficiency of multi-table queries and queries with subqueries is significantly improved.
    
    **Note**
    
    The preceding data serves as a reference benchmark for evaluating SQL execution efficiency, rather than an absolute standard. The specific execution duration of SQL queries is dynamically affected by various factors, including the cluster configurations, the current number of connections, the number of concurrent queries, and the real-time load on system resources.
    

### **Request distribution among row store and IMCI nodes**

By default, requests to a cluster by using the **cluster endpoint** is automatically distributed among row store and IMCI nodes after you add read-only IMCI nodes to the cluster. Automatic request distribution is suitable for business scenarios in which analytical processing (OLAP) and online transaction processing (OLTP) requests originate from the same application. The system can automatically distribute OLAP and OLTP requests to IMCI nodes and row store nodes based on the number of scanned rows. If OLAP and OLTP requests originate from different applications, you can configure different endpoints for the applications, and add row store nodes and IMCI nodes to the **selected nodes** of the endpoints. For more information, see [HTAP-based request distribution among row store and IMCI nodes](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution-among-row-store-and-column-store-nodes/).

The following figure shows the automatic and manual request distribution processes among row store and IMCI nodes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3272356471/CAEQOhiBgICOtciWtBkiIGY2NTUzYmU2MWZjNjQ3ZmY4N2MwYTA2ZWZkMjM1NTg24703512_20241016105825.650.svg)

### **Advanced usage**

For more information, see [Advanced IMCI usage](/help/en/polardb/polardb-for-mysql/user-guide/imci-advanced-use/).

## Configure the sort key for an IMCI

> For more information, see [Configure sort keys for IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imci-based-data-sorting).

The IMCI data is organized by row groups. By default, each row group contains 64,000 rows of data. In each row group, each column is packed into column data blocks. The column data blocks are built in parallel based on the primary key order of the raw row data, which results in an overall unordered state. To improve query performance, you can configure a sort key to sort the data of the column data blocks.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4272356471/CAEQLxiBgIDh67i.mRkiIGU4OTE3Y2Q3MjA1MjRhMTk5MTgwMzllYjU4OWQ4OTE04703512_20241017161450.564.svg)

1.  Set the `imci_enable_pack_order_key` parameter to ON to enable IMCI data sorting.
    
    **Note**
    
    -   The default value of the `imci_enable_pack_order_key` parameter is ON. If you have not modified this parameter, skip this step.
        
    -   To ensure compatibility with MySQL configuration files, all parameters in the [PolarDB console](https://polardb.console.alibabacloud.com/) console is prefixed with **loose\_**. If you want to modify the `imci_enable_pack_order_key` parameter in the [PolarDB console](https://polardb.console.alibabacloud.com/), specify the MySQL-compatible version that has the **loose\_** prefix, which is **loose\_imci\_enable\_pack\_order\_key**. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).
        
    
2.  Execute the following SQL query and record the execution duration when no sort key is specified for the IMCI.
    
    ```
    SELECT
      L_SHIPMODE,
      SUM(CASE
          WHEN O_ORDERPRIORITY = '1-URGENT' OR O_ORDERPRIORITY = '2-HIGH'
          THEN 1
          ELSE 0
          END) AS high_line_count,
      SUM(CASE
          WHEN O_ORDERPRIORITY <> '1-URGENT' AND O_ORDERPRIORITY <> '2-HIGH'
          THEN 1
          ELSE 0
          END) AS low_line_count
    FROM
        orders,
        lineitem
    WHERE
        O_ORDERKEY = L_ORDERKEY
        AND L_SHIPMODE in ('MAIL', 'SHIP')
        AND L_COMMITDATE <  L_RECEIPTDATE
        AND L_SHIPDATE < L_COMMITDATE
        AND L_RECEIPTDATE >= date '1994-01-01'
        AND L_RECEIPTDATE < date '1994-01-01' + interval '1' year
    GROUP BY
        L_SHIPMODE
    ORDER BY
        L_SHIPMODE; 
    ```
    
    ```
    -- Sample result
    +------------+-----------------+----------------+
    | L_SHIPMODE | high_line_count | low_line_count |
    +------------+-----------------+----------------+
    | MAIL       |          623115 |         934713 |
    | SHIP       |          622979 |         934534 |
    +------------+-----------------+----------------+
    2 rows in set (4.35 sec)
    ```
    
3.  Add the `order_key` attribute to the `lineitem` table to create an IMCI with ordered data.
    
    ```
    ALTER TABLE lineitem COMMENT='COLUMNAR=1 order_key=L_RECEIPTDATE,L_SHIPMODE';
    ```
    
4.  Wait until the ordered IMCI data is built. For more information, see [Time consumption](/help/en/polardb/polardb-for-mysql/user-guide/imci-based-data-sorting#title-kus-tmn-5g2).
    
5.  Re-execute the SQL query in the second step and record the execution duration.
    
    ```
    -- Sample result
    +------------+-----------------+----------------+
    | L_SHIPMODE | high_line_count | low_line_count |
    +------------+-----------------+----------------+
    | MAIL       |          623115 |         934713 |
    | SHIP       |          622979 |         934534 |
    +------------+-----------------+----------------+
    2 rows in set (0.88 sec)
    ```
    
6.  Compare the query execution durations (unit: seconds).
    
    **Ordered dataset**
    
    **Unordered dataset**
    
    0.88
    
    4.35
    
    **Note**
    
    The preceding data serves as a reference benchmark for evaluating SQL execution efficiency, rather than an absolute standard. The specific execution duration of SQL queries is dynamically affected by various factors, including the cluster configurations, the current number of connections, the number of concurrent queries, and the real-time load on system resources.
    

## Enable the serverless feature on a read-only IMCI node

> For more information, see [Enable the serverless feature on a read-only column store node](/help/en/polardb/polardb-for-mysql/user-guide/serverless-enables-auto-scaling-of-read-only-column-store-nodes).

The serverless feature provides dynamic scaling capabilities to PolarDB clusters. Each node in a cluster can be scaled up within seconds to handle sudden increases in workloads without affecting business operations. When workloads decrease, nodes can be scaled down to save costs. For more information about the serverless feature, see [Overview about the serverless feature](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview).

If your business loads significantly fluctuate, or if you are concerned that the current cluster configuration cannot handle a sudden increase in business loads, you can **enable serverless** in the **Basic Information** > **Database Nodes** section of the cluster. For more information, see [Enable the serverless feature for a fixed-specification cluster](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters).

## **More information**

### **Refunding**

The IMCI feature is provided free of charge. However, you are charged when you use read-only IMCI nodes. Read-only IMCI nodes are billed as common compute nodes. For more information about the billing rules, see [Billing rules for compute nodes](/help/en/polardb/polardb-for-mysql/billing-methods/). IMCIs also occupy storage space. For information about the billing rules for storage, see [Billing rules for storage](/help/en/polardb/polardb-for-mysql/billing-methods-for-storage/).

**Note**

The IMCI data is organized in a columnar format and allows for a higher compression ratio. Compared with row storage, this can achieve a compression ratio of 3 to 10 times and occupies approximately 10% to 30% of the storage space that row storage requires. As a result, the amount of data that can be stored in the same storage space increases by 10% to 30%.

### Performance

-   **Query performance**
    
    -   The IMCI feature can accelerate complex queries by up to 100 times.
        
    -   The traditional OLAP database service ClickHouse and IMCI-enabled PolarDB for MySQL cluster each has their own advantages. IMCI-enabled PolarDB for MySQL excels in scenarios such as the SCAN and AGGREGATE operations on tables and the JOIN operation. In the future, the IMCI feature of PolarDB for MySQL will continue to be optimized and make breakthroughs in terms of aggregation acceleration and window functions.
        
    
    **Note**
    
    For more information, see [Performance improvement](/help/en/polardb/polardb-for-mysql/user-guide/overview-29#title-07q-mun-kqj).
    
-   **Write performance**
    
    The write performance is degraded by less than 5% after IMCIs are created. If you use the sysbench test set to test the `oltp_insert workload`, the write performance decreases by approximately 3% after IMCIs are created.
    

### **Expert service**

If you have questions about IMCIs, join DingTalk group 27520023189 for technical support. You can consult with experts in the group to obtain answers to your questions.

### **FAQ**

#### Why does an SQL query not use IMCIs for acceleration?

An SQL query uses IMCIs for acceleration only when the following conditions are met: A read-only IMCI node is added to the cluster, IMCIs are created on tables involved in the SQL query, the estimated execution cost of the SQL query exceeds the specified threshold, and the SQL query is forwarded to the read-only IMCI node. If an SQL query does not use IMCIs, you can perform the following steps to troubleshoot the issue:

1.  **Check whether the SQL query is forwarded to the read-only IMCI node.**
    
    -   Check whether the read-only IMCI node is included in the **selected nodes** of the cluster endpoint.
        
    -   Check whether the SQL query is forwarded to the read-only IMCI node by using the SQL Explorer feature. For more information, see [SQL Explorer](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit#task-1580371).
        
    
    PolarProxy forwards an SQL query to the read-only IMCI node only when the following conditions are met: The SQL query accesses the cluster by using the **cluster endpoint**, **Transactional/Analytical Processing Splitting** is enabled for the cluster endpoint, and the estimated execution cost of the SQL query exceeds the threshold specified by loose\_imci\_ap\_threshold or loose\_cost\_threshold\_for\_imci parameter. You can add a `/*FORCE_IMCI_NODES*/` hint before the `SELECT` keywords of the SQL statement to forcibly forward the SQL statement to the read-only IMCI node. For more information, see [Specify the thresholds for automatic request distribution](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes#title-lkg-bdx-yzy). Example:
    
    > The loose\_imci\_ap\_threshold parameter is used instead of the loose\_cost\_threshold\_for\_imci parameter in database engines whose minor version is 8.0.1.1.39 or later, or 8.0.2.2.23 or later.
    
    ```
    /*FORCE_IMCI_NODES*/EXPLAIN SELECT COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
    
    > You can create a custom endpoint and associate the endpoint with the read-only IMCI node. This ensures that the SQL query is forwarded to the read-only IMCI node for execution. For more information, see [HTAP-based request distribution among row store and IMCI nodes](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution).
    
2.  Check whether the **estimated execution cost** **of the SQL query is higher than the specified threshold.**
    
    On the IMCI node, the optimizer estimates the execution cost of the SQL query. If the estimated execution cost of the SQL query is higher than the threshold specified by the loose\_imci\_ap\_threshold or cost\_threshold\_for\_imci parameter, the optimizer uses IMCIs in the query. Otherwise, the optimizer uses the original row indexes in the query.
    
    If the `EXPLAIN` statement shows that the execution plan still does not use IMCIs after the SQL query is forwarded to the read-only IMCI node, compare the estimated execution cost with the specified threshold to determine whether IMCIs are not used because the estimated execution cost is excessively small. You can query the `Last_query_cost` value to obtain the estimated execution cost of the previous SQL statement. Example:
    
    ```
    -- Execute the EXPLAIN statement to view the execution plan of an SQL query.
    EXPLAIN SELECT * FROM t1;
    -- Obtain the estimated execution cost of the previous SQL query.
    SHOW STATUS LIKE 'Last_query_cost';
    ```
    
    > If you use the cluster endpoint to connect to the cluster, we recommend that you add the `/*ROUTE_TO_LAST_USED*/` hint before the `SHOW STATUS LIKE 'Last_query_cost'` statement to ensure that the estimated execution cost of the previous statement can be found on the correct node. Example: `/*ROUTE_TO_LAST_USED*/SHOW STATUS LIKE 'Last_query_cost';`
    
    If the estimated execution cost of the SQL query is less than the specified threshold, you can adjust the loose\_imci\_ap\_threshold or loose\_cost\_threshold\_for\_imci value. You can also use a `HINT` to adjust the execution cost threshold for a single SQL query. Example:
    
    ```
    /*FORCE_IMCI_NODES*/EXPLAIN SELECT /*+ SET_VAR(cost_threshold_for_imci=0) */ COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
    
3.  **Check whether the tables or columns involved in the SQL query are completely included in the IMCIs.**
    
    You can call the built-in stored procedure `dbms_imci.check_columnar_index('<query_string>')` to check whether IMCIs are created for tables or columns in an SQL statement. For more information, see [Check whether an IMCI is created for a table in an SQL statement](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement#main-2260646). Example:
    
    ```
    CALL dbms_imci.check_columnar_index('SELECT COUNT(*) FROM t1 WHERE t1.a > 1');
    ```
    
    If the tables or columns involved in the SQL query are not completely included in IMCIs, the stored procedure returns the tables and columns that are not included in the IMCIs. In this case, you must create IMCIs for the returned tables and columns. If the tables or columns involved in the SQL query are completely included in IMCIs, the stored procedure returns an empty result set.
    
4.  **Check whether the SQL query supports IMCIs.**
    
    View the IMCI usage limits to determine whether the SQL query supports IMCIs. For more information, see [IMCI usage limits](/help/en/polardb/polardb-for-mysql/user-guide/limits-3#main-2267620).
    

> If the SQL query still do not use IMCIs, you can consult [experts](#8379a6d1a9wvb) or [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).

#### **How do I create an appropriate IMCI for an SQL query?**

We recommend that you create an IMCI based on the columns involved in the SQL query. For more information, see [Check whether an IMCI is created for a table in an SQL statement](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement#main-2260646).

An SQL query uses an IMCI only when the IMCI includes all columns involved in the SQL query. If the columns involved in an SQL query are not completely covered by IMCIs, you can use the `ALTER TABLE` statement to add IMCIs. PolarDB provides built-in stored procedures to assist in this operation.

**Note**

-   You can use the `dbms_imci.columnar_advise()` stored procedure to obtain the DDL statements used to create IMCIs for an SQL query. If you use the DDL statements to create IMCIs, you can ensure that the columns involved in the SQL query are fully included in the IMCIs. For more information, see [Obtain the DDL statement used to create an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci#main-2260648).
    
    ```
    dbms_imci.columnar_advise('<query_string>');
    ```
    
-   You can use the following stored procedures to obtain the DDL statements used to create IMCIs for a batch of SQL queries: `dbms_imci.columnar_advise_begin()`, `dbms_imci.columnar_advise_end()`, and `dbms_imci.columnar_advise()`. For more information, see [Batch obtain the DDL statements used to create IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/batch-obtain-the-ddl-statements-used-to-create-imcis#main-2260649).
