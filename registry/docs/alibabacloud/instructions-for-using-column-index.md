In-memory column index (IMCI) provides a simple solution to accelerate complex and time-consuming SQL statements in your business. Refer to [Quick start](#0399df617egg8) to configure the HTAP load processing capability of your cluster. Additionally, refer to [Advanced usage](#016f8fe07e6ov) to customize IMCI to meet specific business requirements.

## **Quick start**

### **1\. Add a read-only IMCI node**

Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/), select the region where your cluster is located, and find the target cluster in the **Clusters** list. In the **Actions** column, select **Add/Remove Node** to add a read-only IMCI node.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6366852471/p931499.png)

**Note**

-   If you have already added read-only IMCI nodes when purchasing the cluster, skip this step.
    
-   Your cluster must meet the version requirements for IMCI. For more information, see [Add a read-only column store node](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node).
    

### **2\. Configure** request distribution among row store and IMCI nodes

You can choose automatic or manual request distribution to use IMCI.

-   [Automatic request distribution among row store and IMCI nodes](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes): If your application sends requests to access both OLAP and OLTP services, you can configure automatic distribution of read requests based on the estimated execution cost (number of rows scanned by a request) to route them to either read-only IMCI nodes or read-only row store nodes.
    
-   [Manual request distribution among row store and IMCI nodes](/help/en/polardb/polardb-for-mysql/user-guide/manual-request-distribution-among-row-store-and-column-store-nodes): If different applications are used to send requests for OLAP and OLTP services, you can configure different cluster endpoints for the applications, and then associate row store and IMCI nodes with different cluster endpoints to distribute the requests.
    

## Automatic request distribution among row store and IMCI nodes

Go to the cluster details page, in the **Database Connections** section, set Transactional/Analytical Processing Splitting of the **Cluster Endpoint** to **On**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4379503471/p931690.png)

**Note**

-   **After you turn on this feature, it takes effect on new connections****. Reconnect to the cluster after you enable the feature.**
    
-   DMS uses the **primary endpoint** by default. If you [use DMS to connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#161fcd1edfvlr), you must [change the connection method to using a cluster endpoint](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#ad4dbf398czi8).
    
-   The default estimated execution cost (number of rows scanned) for automatic request distribution is 50,000. You can [adjust this parameter](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes#title-lkg-bdx-yzy) based on your actual business requirements.
    

## Manual request distribution among row store and IMCI nodes

Go to the cluster details page, in the **Database Connections** section, create a custom endpoint. The cluster can contain only **Read-only IMCI Nodes** as **service nodes**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4379503471/p931709.png)

### **3\. Add IMCIs**

You can use manual or automatic methods to add IMCIs to your business tables.

**Important**

All columns involved in a SQL statement must be covered by the IMCI to accelerate the query.

## Manually add IMCIs

IMCI provides comprehensive DDL statements to support adding or removing IMCIs for your business tables:

**DDL Syntax**

**Examples**

[Create IMCIs when you create a table](/help/en/polardb/polardb-for-mysql/user-guide/execute-the-create-table-statement-to-create-an-imci)

```
-- Add IMCI for a specific column
CREATE TABLE <table_name>(
  <column_name_1> INT COMMENT 'COLUMNAR=1',
  <column_name_2> VARCHAR(100)
) ENGINE InnoDB;

-- Add IMCI for the entire table
CREATE TABLE <table_name>(
  <column_name_1> INT,
  <column_name_2> VARCHAR(100)
) ENGINE InnoDB COMMENT 'COLUMNAR=1';
```

[Execute DDL statements to dynamically create and delete an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/use-ddl-statements-to-dynamically-add-and-delete-an-imci)

```
-- Add IMCI for a specific column
ALTER TABLE <table_name> MODIFY COLUMN <column_name_1> INT COMMENT 'COLUMNAR=1';
               
-- Add IMCI for the entire table
ALTER TABLE <table_name> COMMENT 'COLUMNAR=1';
```

[Manage table-level IMCIs by using DDL statements](/help/en/polardb/polardb-for-mysql/user-guide/library-level-column-store-index-ddl-syntax)

```
-- Add IMCI for an entire table
CREATE COLUMNAR INDEX ON <db_name>.<table_name>;

-- Add IMCI for an entire database
CREATE COLUMNAR INDEX FOR TABLES IN <db_name>;
```

**Note**

-   When adding IMCIs, you can keep the original comments. For example: `ALTER TABLE <table_name> COMMENT 'COLUMNAR=1 <original comment>';`.
    
-   By default, when IMCIs are added in batches at the database/table level, the table comment is modified to `'COLUMNAR=1 <original comment>'`.
    

## Automatically add IMCIs

The [automatic acceleration (AutoIndex)](/help/en/polardb/polardb-for-mysql/user-guide/automatic-non-sense-speed-autoindex) feature provided by IMCI can automatically create IMCIs based on your slow SQL statements, significantly improving the execution speed of slow SQL statements without requiring you to deeply understand each slow SQL statement for optimization. As the application workload changes, the automatic IMCI acceleration feature continuously monitors and adjusts the IMCI strategy to ensure that the PolarDB cluster maintains optimal performance.

You only need to **Enable** the automatic IMCI-based query acceleration feature on the PolarDB cluster details page:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4379503471/p931607.png)

### **(Optional) 4. Check the IMCI build progress**

After manually adding IMCI, you need to [view DDL execution speed and build progress for IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/view-ddl-execution-speed-and-build-progress-for-imcis). After the IMCI build is complete, the queries can be accelerated.

```
SELECT * FROM INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS;
```

For example, you can confirm whether the IMCI has been built by checking if the `STATUS` is `Safe to read`.

```
+-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
| SCHEMA_NAME | TABLE_NAME | CREATED_AT          | STARTED_AT          | FINISHED_AT         | STATUS       | APPROXIMATE_ROWS | SCANNED_ROWS    | SCAN_SECOND | SORT_ROUNDS | SORT_SECOND | BUILD_ROWS | BUILD_SECOND | AVG_SPEED | SPEED_LAST_SECOND | ESTIMATE_SECOND |
+-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
| tpch        | lineitem   | 2024-10-21 13:44:02 | 2024-10-21 13:44:02 | 2024-10-21 13:50:11 | Safe to read | 590446240        | 600037902(100%) | 369         | 0           | 0           | 0(0%)      | 0            | 1625058   | 0                 | 0               |
+-------------+------------+---------------------+---------------------+---------------------+--------------+------------------+-----------------+-------------+-------------+-------------+------------+--------------+-----------+-------------------+-----------------+
1 row in set, 1 warning (0.00 sec)
```

### **(Optional) 5.** Check if SQL statements use IMCI

The IMCI execution plan is output in a horizontal tree format, which is significantly different from the row store execution plan output format. You can [use the EXPLAIN statement to determine whether to use IMCIs to accelerate SQL queries](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-a-query-can-use-imcis). See the following examples:

## **IMCI execution plan (horizontal tree format)**

```
+----+----------------------------+----------+--------+--------+-----------------------------------------------------------------------------+
| ID | Operator                   | Name     | E-Rows | E-Cost | Extra Info                                                                  |
+----+----------------------------+----------+--------+--------+-----------------------------------------------------------------------------+
|  1 | Select Statement           |          |        |        | IMCI Execution Plan (max_dop = 4, max_query_mem = 858993459)                |
|  2 | └─Sort                     |          |        |        | Sort Key: revenue DESC,o_orderdate ASC                                      |
|  3 |   └─Hash Groupby           |          |        |        | Group Key: (lineitem.L_ORDERKEY, orders.O_ORDERDATE, orders.O_SHIPPRIORITY) |
|  4 |     └─Hash Join            |          |        |        | Join Cond: orders.O_ORDERKEY = lineitem.L_ORDERKEY                          |
|  5 |       ├─Hash Join          |          |        |        | Join Cond: customer.C_CUSTKEY = orders.O_CUSTKEY                            |
|  6 |       │ ├─Table Scan       | customer |        |        | Cond: (C_MKTSEGMENT = "BUILDING")                                           |
|  7 |       │ └─Table Scan       | orders   |        |        | Cond: (O_ORDERDATE < 03/24/1995)                                            |
|  8 |       └─Table Scan         | lineitem |        |        | Cond: (L_SHIPDATE > 03/24/1995)                                             |
+----+----------------------------+----------+--------+--------+-----------------------------------------------------------------------------+
8 rows in set (0.01 sec)
```

## **Row store execution plan**

```
+----+-------------+----------+------------+------+--------------------+------------+---------+-----------------------------+--------+----------+----------------------------------------------+
| id | select_type | table    | partitions | type | possible_keys      | key        | key_len | ref                         | rows   | filtered | Extra                                        |
+----+-------------+----------+------------+------+--------------------+------------+---------+-----------------------------+--------+----------+----------------------------------------------+
|  1 | SIMPLE      | customer | NULL       | ALL  | PRIMARY            | NULL       | NULL    | NULL                        | 147630 |    10.00 | Using where; Using temporary; Using filesort |
|  1 | SIMPLE      | orders   | NULL       | ref  | PRIMARY,ORDERS_FK1 | ORDERS_FK1 | 4       | tpch100g.customer.C_CUSTKEY |     14 |    33.33 | Using where                                  |
|  1 | SIMPLE      | lineitem | NULL       | ref  | PRIMARY            | PRIMARY    | 4       | tpch100g.orders.O_ORDERKEY  |      4 |    33.33 | Using where                                  |
+----+-------------+----------+------------+------+--------------------+------------+---------+-----------------------------+--------+----------+----------------------------------------------+
3 rows in set, 1 warning (0.00 sec)
```

## Auxiliary tools

When using IMCI to query complex SQL statements, you need to [check whether all columns in the SQL statement are covered by IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement). If you find columns that are not covered by IMCI, you can [obtain the DDL statement used to create an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci), or [batch obtain the DDL statements used to create IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/batch-obtain-the-ddl-statements-used-to-create-imcis). After executing the obtained DDL statements, ensure that all columns in the SQL statement are covered by IMCIs for query acceleration.

The built-in stored procedures in PolarDB clusters are as follows:

-   The stored procedure to [check whether an IMCI is created for a table in an SQL statement](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement): `dbms_imci.check_columnar_index('<query_string>');`.
    
-   The stored procedures to [obtain the DDL statement used to create an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci): `dbms_imci.columnar_advise('<query_string>');` and `dbms_imci.columnar_advise_by_columns('<query_string>');`.
    
-   The stored procedures to [batch obtain the DDL statements used to create IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/batch-obtain-the-ddl-statements-used-to-create-imcis): `dbms_imci.columnar_advise_begin();`, `dbms_imci.columnar_advise_show();`, and `dbms_imci.columnar_advise_end();`.
    

## **FAQ**

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
    

> If the SQL query still do not use IMCIs, see [Instructions](#) or [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us) for assistance.

For more information, see [IMCI FAQ](/help/en/polardb/polardb-for-mysql/user-guide/faq-8).

## **Advanced usage**

Use the following features to optimize the use of IMCI.

**Feature**

**Description**

[Configure sort keys for IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imci-based-data-sorting)

The basic organizational unit of IMCI data is the row group. In each row group, each column is packed into column data blocks. The column data blocks are built in parallel based on the primary key order of the raw row data, which results in an overall unordered state. To improve query performance, you can configure a sort key to sort the data of the column data blocks.

[Efficiently analyze JSON-formatted data](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-json-real-time-analysis-and-stream-computing-scheme)

IMCI integrates a series of related features such as [Column-oriented storage for JSON-formatted data](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-json-real-time-analysis-and-stream-computing-scheme#09571c02), [Virtual columns](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-json-real-time-analysis-and-stream-computing-scheme#173cb008), [Instant DDL](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-json-real-time-analysis-and-stream-computing-scheme#1e62e5cb), and [Extended maximum number of columns in a table](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-json-real-time-analysis-and-stream-computing-scheme#4f26332f) to handle massive structured and semi-structured data analysis scenarios.

[Use IMCI to accelerate ETL](/help/en/polardb/polardb-for-mysql/user-guide/etl-from-imci)

The ETL (Extract Transform Load) feature allows you to use IMCI on read-write (RW) nodes. The `SELECT` requests in SQL statements on read-write (RW) nodes are sent to read-only IMCI nodes and accelerated using IMCI. After reading the data, the system transfers the data back to the read-write (RW) node through the internal network and writes it to the target table.

[Enable the serverless feature on a read-only column store node](/help/en/polardb/polardb-for-mysql/user-guide/serverless-enables-auto-scaling-of-read-only-column-store-nodes)

The Serverless feature automatically scales the cluster based on business workload. A cluster is automatically scaled up during peak hours to handle traffic spikes. During off-peak hours, the cluster is automatically scaled down to reduce costs.

[Use hybrid plans to accelerate wide table queries](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries)

Hybrid Plan refers to a query method that uses both column indexes and row indexes in the same query statement. Hybrid Plan significantly improves the speed of wide table queries. In the execution plan, statements suitable for IMCIs are executed through IMCIs to obtain intermediate results that only contain primary key information. Finally, the required column information is queried and output by combining the primary key with the InnoDB primary index.

[Use multi-node MPP to accelerate mass data analysis](/help/en/polardb/polardb-for-mysql/user-guide/use-multi-machine-mpp-to-speed-up-mass-data-analysis)

For complex queries on massive data, a single read-only IMCI node may no longer meet performance requirements. You can use multi-node parallel processing for query acceleration.

## **Related information**

If you are interested in how IMCIs work, you can refer to the following documents for a deeper understanding:

-   PolarDB IMCI [paper published in SIGMOD2023](https://dl.acm.org/doi/10.1145/3589785)
    
-   [Technical architecture of IMCI](/help/en/polardb/polardb-for-mysql/user-guide/technical-background-and-architecture-of-column-store-index)
    
-   [TopK operator implementation in IMCI](/help/en/polardb/polardb-for-mysql/user-guide/implementation-of-topk-operator-in-column-store-index)
    
-   [Use Hash Match to perform IMCI-enabled operations](/help/en/polardb/polardb-for-mysql/user-guide/implementation-of-hashmatch-in-column-store-index)
    
-   [Use GroupJoin to perform IMCI-enabled operations](/help/en/polardb/polardb-for-mysql/user-guide/implementation-of-groupjoin)
    
-   [Filter data by using IMCI](/help/en/polardb/polardb-for-mysql/user-guide/query-pruning-optimization-technology)
