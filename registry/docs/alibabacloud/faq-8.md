This topic lists the frequently asked questions (FAQ) about the In-Memory Column Index (IMCI) feature of PolarDB for MySQL.

## How do I use the IMCI feature of PolarDB for MySQL?

To use the IMCI feature to accelerate queries, you can perform the following steps:

1.  Add a read-only node with the IMCI feature enabled to your PolarDB for MySQL cluster. For more information, see [Add a read-only node with the IMCI feature enabled](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node#task-2175697).
    
2.  Add a columnstore index to the tables that you want to accelerate access to. To do this, you can use the `CREATE TABLE` or `ALTER TABLE` statement to add the `COLUMNAR=1` attribute to the `COMMENT` field of the table. After the columnstore index is ready, the optimizer automatically determines whether to use the columnstore index for queries based on the execution cost. For more information about the syntax, see [DDL syntax for creating a columnstore index when you create a table](/help/en/polardb/polardb-for-mysql/user-guide/execute-the-create-table-statement-to-create-an-imci#concept-2176899).
    
3.  The SQL statement must be forwarded to the column store node. The optimizer automatically uses the columnstore index for the query if the execution cost exceeds a specific threshold. For more information about automatic and manual request distribution, see [Configure a cluster endpoint to implement automatic request distribution between row store and column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution#concept-2177433).
    

## How do I check the status of a columnstore index?

After you use the `ALTER TABLE` statement to dynamically add a columnstore index to an existing table, the index is built asynchronously on the column store read-only node. You can connect to the cluster endpoint that has automatic request distribution enabled or connect directly to the column store node. Then, you can query the `INFORMATION_SCHEMA.IMCI_INDEXES` table to retrieve the build status of the columnstore index. Only columnstore indexes in the `COMMITTED` state can be used for queries. For a columnstore index that is being built, you can query the `INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS` table to retrieve information about the index build progress. For more information, see [View the index status](/help/en/polardb/polardb-for-mysql/user-guide/use-ddl-statements-to-dynamically-add-and-delete-an-imci#section-bny-o3v-22f).

**Note**

When you log on to a database using Data Management (DMS), you are connected to the primary endpoint of the cluster by default. To connect to a different cluster endpoint or directly to a column store node, follow these instructions:

-   Connect to a cluster endpoint.
    
    Log on to [DMS 5.0](https://dms.alibabacloud.com/new). On the **Add Instance** page, set **Entry Method** to Connection String and enter the cluster endpoint. For more information, see [Add an ApsaraDB instance](/help/en/dms/register-an-apsaradb-instance-1#multiTask2179).
    
-   Connect directly to a column store node.
    
    First, [create a custom cluster endpoint](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#section-7kj-t7m-y8f) for the target column store node. This custom endpoint must contain only the target column store node. Then, log on to [DMS 5.0](https://dms.alibabacloud.com/new). On the **Add Instance** page, set **Entry Method** to Connection String and enter the custom cluster endpoint of the column store read-only node. For more information, see [Add an ApsaraDB instance](/help/en/dms/register-an-apsaradb-instance-1#multiTask2179).
    

## How do I confirm that an SQL statement uses a columnstore index and view its execution plan?

You can use the `EXPLAIN` statement to view the execution plan of an SQL statement. If the execution plan contains `IMCI Execution Plan`, the SQL statement uses a columnstore index to accelerate the query. The following example shows a sample execution plan:

```
*************************** 1. row ***************************
IMCI Execution Plan (max_dop = 8, max_query_mem = 3435134976):
Project | Exprs: temp_table3.lineitem.L_ORDERKEY, temp_table3.SUM(lineitem.L_EXTENDEDPRICE * 1.00 - lineitem.L_DISCOUNT), temp_table3.orders.O_ORDERDATE, temp_table3.orders.O_SHIPPRIORITY
  Sort | Exprs: temp_table3.SUM(lineitem.L_EXTENDEDPRICE * 1.00 - lineitem.L_DISCOUNT) DESC,temp_table3.orders.O_ORDERDATE ASC
    HashGroupby | OutputTable(3): temp_table3 | Grouping: lineitem.L_ORDERKEY orders.O_ORDERDATE orders.O_SHIPPRIORITY | Output Grouping: lineitem.L_ORDERKEY, orders.O_ORDERDATE, orders.O_SHIPPRIORITY | Aggrs: SUM(lineitem.L_EXTENDEDPRICE * 1.00 - lineitem.L_DISCOUNT)
      HashJoin | HashMode: DYNAMIC | JoinMode: INNER | JoinPred: orders.O_ORDERKEY = lineitem.L_ORDERKEY
        HashJoin | HashMode: DYNAMIC | JoinMode: INNER | JoinPred: orders.O_CUSTKEY = customer.C_CUSTKEY
          CTableScan | InputTable(0): orders | Pred: (orders.O_ORDERDATE < 03/24/1995 00:00:00.000000)
          CTableScan | InputTable(1): customer | Pred: (customer.C_MKTSEGMENT = "BUILDING")
        CTableScan | InputTable(2): lineitem | Pred: (lineitem.L_SHIPDATE > 03/24/1995 00:00:00.000000)
1 row in set (0.04 sec)
```

The execution plan for an SQL statement that uses a columnstore index is a tree-like structure. Each layer represents an operator. Operators usually have a one-to-one correspondence with operations in the SQL statement. For example, the CTableScan operator indicates a scan on a table, the HashJoin operator corresponds to the JOIN part of the SQL statement, and the HashGroupby operator corresponds to the GROUP BY part. However, some operators, such as Sequence, are generated during query optimization and do not correspond to any statement in the original SQL.

## How to troubleshoot why the SQL execution plan does not use a column index / why queries do not use the column store / why the SQL execution plan does not change after a column store node is added / how to determine if a column index supports a specific SQL statement / why the 'Automatic Row/Column Store Query Routing' feature does not work?

After you add a column store node, you must add a columnstore index to the tables queried by the SQL statement. The SQL statement uses the columnstore index for the query only if the execution cost of the statement exceeds a specific threshold. In addition, the SQL statement must be forwarded to the column store node to use the IMCI feature for query acceleration. If an SQL statement cannot use a columnstore index for a query, you can follow these steps to troubleshoot the issue:

1.  Confirm that the SQL statement is forwarded to the column store node.
    
    You can use the [SQL Explorer](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit#task-1580371) feature to confirm whether the SQL statement is forwarded to the column store node.
    
    If you use a cluster endpoint and enable the automatic request distribution feature, the database proxy automatically forwards SQL statements with an estimated query cost that exceeds the `imci_ap_threshold` value to the column store node. You can also add the `/*FORCE_IMCI_NODES*/` hint before the SELECT keyword in the SQL statement to force the statement to be forwarded to the column store node. Example:
    
    ```
    /*FORCE_IMCI_NODES*/EXPLAIN SELECT COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
    
    For more information, see [Configure automatic request distribution between row store and column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes#task-2175779).
    
    **Note**
    
    You can also [create a new endpoint to connect directly to the column store node](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes#task-2175779). This ensures that SQL statements are always forwarded to the column store node for execution.
    
2.  Check whether the query execution cost is higher than the specified threshold.
    
    On the column store node, the optimizer estimates the cost of an SQL statement. If the estimated cost is higher than the specified threshold `cost_threshold_for_imci`, the columnstore index is used for the query. Otherwise, the existing row-store index is used.
    
    After you confirm that the SQL statement is forwarded to the column store node, if the execution plan still does not use the columnstore index when you run EXPLAIN, check whether the estimated cost is too low. You can query the `Last_query_cost` variable to retrieve the estimated execution cost of the previous SQL statement:
    
    ```
    EXPLAIN SELECT * FROM t1;
    SHOW STATUS LIKE 'Last_query_cost';
    ```
    
    If the estimated execution cost is lower than the preset `cost_threshold_for_imci` value, you can consider adjusting the `cost_threshold_for_imci` value. For example, you can use a hint to adjust the threshold for a single SQL statement:
    
    ```
    /*FORCE_IMCI_NODES*/EXPLAIN SELECT /*+ SET_VAR(cost_threshold_for_imci=0) */ COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
    
3.  Check whether all columns required by the SQL statement are covered by the columnstore index.
    
    You can use the built-in stored procedure `dbms_imci.check_columnar_index()` to [check whether a columnstore index is created for the tables in an SQL statement](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement#main-2260646). Example:
    
    ```
    CALL dbms_imci.check_columnar_index('SELECT COUNT(*) FROM t1 WHERE t1.a > 1');
    ```
    
    If the SQL statement is not fully covered by the columnstore index, calling this stored procedure returns the uncovered tables and columns. If it is fully covered, the stored procedure returns an empty result set.
    
4.  Check for unsupported SQL features.
    
    You can refer to [the list of limits](/help/en/polardb/polardb-for-mysql/user-guide/limits-3#main-2267620) to confirm whether a specific SQL feature supports the columnstore index.
    

If all the preceding checks pass, the SQL statement should use the columnstore index for the query.

## Can a column store node use a row-store index?

A column store read-only node is a regular read-only node that includes the IMCI feature. Therefore, a column store node can use both row-store and columnstore indexes. The optimizer selects the index based on the `cost_threshold_for_imci` threshold.

You can use a hint to set the query threshold for a single SQL statement to force the use of a columnstore index:

```
SELECT /*+ SET_VAR(cost_threshold_for_imci=0) */ COUNT(*) FROM t1 WHERE t1.a > 1;
```

You can also force an SQL statement not to use a columnstore index:

```
SELECT /*+ SET_VAR(USE_IMCI_ENGINE=OFF) */ COUNT(*) FROM t1 WHERE t1.a > 1;
```

## How do I add a suitable columnstore index for an SQL statement?

For an SQL statement to use a columnstore index for a query, all columns used in the statement must be covered by the columnstore index. If a column involved in the SQL statement is not covered, you can add it to the columnstore index using the `CREATE TABLE` or `ALTER TABLE` statement. PolarDB for MySQL provides a series of built-in stored procedures to assist with this operation.

You can use the `dbms_imci.columnar_advise()` stored procedure to obtain the required DDL statement for an SQL statement. If you build a columnstore index according to this DDL statement, the SQL statement will be fully covered by the columnstore index. For more information, see [Obtain the DDL statement for creating a columnstore index](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci#main-2260648).

```
dbms_imci.columnar_advise('<query_string>');
```

**Important**

If you use a Multi-master Cluster (Limitless) Edition, you must execute this stored procedure on a global read-only node. You can add `/*force_node='<Node ID>'*/` before the SQL statement to enforce execution on the global read-only node. Example: `/*force_node='pi-bpxxxxxxxx'*/ dbms_imci.columnar_advise('<query_string>')`.

You can use the `dbms_imci.columnar_advise_begin()`, `dbms_imci.columnar_advise_end()`, and `dbms_imci.columnar_advise()` interfaces to obtain the required DDL statements for a batch of SQL statements. For more information, see [Obtain DDL statements for creating columnstore indexes in batches](/help/en/polardb/polardb-for-mysql/user-guide/batch-obtain-the-ddl-statements-used-to-create-imcis#main-2260649).

## PolarDB for MySQL IMCI: **Does it support single-node parallel queries? If so, how can you** customize the degree of parallelism for a specific SQL statement**?**

Single-node parallel query is enabled by default. You can use `EXPLAIN` to view the execution plan. The `max_dop` field indicates the actual degree of parallelism used. To customize the degree of parallelism for a specific SQL statement, you can set the `imci_max_dop` parameter at the session level before you execute the SQL statement. Example:

```
set imci_max_dop=8; explain select xxxx
```

## What do I do if a column store node has high CPU or memory usage? How do I configure monitoring for it?

-   By default, a single SQL statement is executed concurrently and can use all available CPU resources. When multiple SQL statements are executed at the same time, the internal scheduler in the database schedules the SQL statements and dynamically reduces the CPU and memory limits for each statement. Therefore, column store nodes tend to have higher average CPU and memory usage compared to other nodes. You can adjust the `imci_max_dop` parameter to control the maximum degree of parallelism for a single SQL statement, which limits the number of CPU cores a single SQL statement can use.
    
-   We recommend that you set the CPU monitoring threshold to 70% of CPU usage and the memory monitoring threshold to 90% of memory usage.
    
-   PolarDB for MySQL allows nodes with different specifications within the same cluster. You can upgrade or downgrade the specifications of a column store node independently. We recommend that a column store node has at least 8 cores and 16 GB of memory.
    

## Is the IMCI feature supported in PolarDB for MySQL 5.6 and 5.7?

PolarDB for MySQL 5.6 and 5.7 do not support the IMCI feature. PolarDB for MySQL 8.0 supports the IMCI feature.

## What are the limits of the IMCI feature? Is it compatible with MySQL? Does it support full-text indexes?

The IMCI feature is fully compatible with MySQL. However, some less common query features, such as certain spatiotemporal expressions, full-text indexes, and some forms of correlated subqueries, are not yet fully supported. SQL statements that use these features cannot use a columnstore index and will fall back to using a row-store index for the query. For more information about the limits of the IMCI feature, see [Limits](/help/en/polardb/polardb-for-mysql/user-guide/limits-3#main-2267620).

## Can INSERT INTO SELECT and CREATE TABLE AS SELECT statements use a columnstore index?

`INSERT` and `CREATE` statements can be executed only on the primary (RW) node, whereas IMCI queries run on read-only nodes. Therefore, to use a columnstore index for `INSERT INTO SELECT` or `CREATE TABLE AS SELECT` statements, you must use the IMCI ETL feature. For more information, see [Use a columnstore index to accelerate ETL](/help/en/polardb/polardb-for-mysql/user-guide/etl-from-imci#concept-2252286).

## Is the IMCI feature free? Can I use it on a hot standby-disabled read-only node?

The IMCI feature itself is not charged separately. However, using the IMCI feature requires you to add a dedicated read-only node with IMCI enabled. You are charged for this new read-only node and for the extra storage that the columnstore indexes on your tables consume.

Hot standby-disabled read-only nodes do not support the IMCI feature.

## How much extra storage space does a columnstore index use?

A columnstore index organizes data by column, providing a compression ratio 3 to 10 times higher than a row store, but at the cost of increasing space usage by 10% to 30%.

## How do I view the storage space used by a columnstore index?

-   For cluster versions of PolarDB for MySQL 8.0.1.1.32 and earlier, you can query the `imci_columns` system table in `information_schema` to view the storage space and column compression ratio of a table with a columnstore index. For example, to view the storage space and compression ratio of the `test` table in the `test` database, you can run the following SQL statement:
    
    ```
    SELECT
      SCHEMA_NAME, TABLE_NAME,
      SUM(EXTENT_SIZE * TOTAL_EXTENT_COUNT) AS TOTAL_SIZE,
      SUM(EXTENT_SIZE * USED_EXTENT_COUNT) AS USED_SIZE,
      SUM(EXTENT_SIZE * FREE_EXTENT_COUNT) AS FREE_SIZE,
      SUM(RAW_DATA_SIZE) / SUM(FILE_SIZE) AS COMPRESS
    FROM
      information_schema.imci_columns
    WHERE SCHEMA_NAME = 'test' AND TABLE_NAME = 'test';
    ```
    
-   For cluster versions of PolarDB for MySQL 8.0.1.1.33 and later, you can query the `imci_data_files` system table in `information_schema` to view the storage space, and the `imci_columns` system table to view the column compression ratio. For example, to view the storage space and column compression ratio of the `test` table in the `test` database, you can run the following SQL statements:
    
    -   View the storage space used by the `test` table with a columnstore index. Run the following SQL statement:
        
        ```
        SELECT
            SCHEMA_NAME, TABLE_NAME,
            SUM(EXTENT_SIZE * TOTAL_EXTENT_COUNT) AS TOTAL_SIZE,
            SUM(EXTENT_SIZE * USED_EXTENT_COUNT) AS USED_SIZE,
            SUM(EXTENT_SIZE * FREE_EXTENT_COUNT) AS FREE_SIZE
        FROM
            INFORMATION_SCHEMA.IMCI_DATA_FILES
        WHERE SCHEMA_NAME = 'test' AND TABLE_NAME = 'test';
        ```
        
    -   View the column compression ratio. Run the following SQL statement:
        
        ```
        SELECT
            SCHEMA_NAME, TABLE_NAME,
             SUM(RAW_DATA_SIZE) / SUM(CMP_DATA_SIZE) AS COMPRESS_RATIO
        FROM
            INFORMATION_SCHEMA.IMCI_COLUMNS
        WHERE SCHEMA_NAME = 'test' AND TABLE_NAME = 'test';
        ```
        

The following table describes the parameters in the preceding SQL statements.

**Parameter**

**Description**

SCHEMA\_NAME

The database name.

TABLE\_NAME

The table name.

EXTENT\_SIZE

The size of an extent. Unit: bytes.

TOTAL\_EXTENT\_COUNT

The total number of extents.

USED\_EXTENT\_COUNT

The number of used extents.

FREE\_EXTENT\_COUNT

The number of free extents.

RAW\_DATA\_SIZE

The size of the column data before compression. Unit: bytes.

FILE\_SIZE

The size of the column data after compression. Unit: bytes.

**Note**

This parameter applies to versions of PolarDB for MySQL earlier than 8.0.1.1.33.

CMP\_DATA\_SIZE

The size of the column data after compression. Unit: bytes.

**Note**

This parameter applies to PolarDB for MySQL 8.0.1.1.33 and later.

## Why does instant DDL not take effect after I add a columnstore index?

-   In versions of PolarDB for MySQL earlier than 8.0.1.1.42 and 8.0.2.2.23, the instant column addition logic does not apply to operations that add columns to a table with a table-level IMCI. This is because these operations involve changes to the IMCI structure and require index data to be rebuilt.
    
-   In PolarDB for MySQL 8.0.1.1.42 and later, and 8.0.2.2.23 and later, instant DDL is supported on tables with a table-level IMCI. This feature is not compatible with the rebuild mode of earlier versions. You must set the `imci_enable_add_column_instant_ddl` parameter to **OFF**. You must also ensure that the table has a primary key.
    

## How do I view or delete a columnstore index added by AutoIndex?

```
SELECT * FROM  information_schema.imci_autoindex_executed;
```

The method for deleting a columnstore index that was automatically added by AutoIndex is the same as for deleting one that was added manually:

```
ALTER TABLE t1 comment 'columnar=0';
```

## Why does it take longer to add or remove columns using ALTER TABLE after a columnstore index is added?

When you add or remove columns, the table data is typically rebuilt. If the original table has a columnstore index, the index data must also be rebuilt along with the table data. The process of rebuilding the columnstore index data requires writing to the Redo log. Because a columnstore index usually covers many columns, the amount of Redo log data generated is proportional to the size of the original table data. This increases the I/O data volume compared to rebuilding a table without a columnstore index, which results in a longer execution time.

## Does adding a columnstore index affect write performance?

The impact of adding a columnstore index on write performance is generally within 5%. In a test that uses the Sysbench `oltp_insert workload` test set, write performance decreased by about 3% after a columnstore index was added.

## Which transaction isolation levels does the IMCI feature support?

Columnstore indexes support two transaction isolation levels: READ\_COMMITTED and REPEATABLE\_READ.

**Note**

-   For the REPEATABLE\_READ transaction isolation level, you must use a custom endpoint that contains only column store read-only nodes when you use the IMCI feature.
    
-   In versions of PolarDB for MySQL 8.0.1.1.40 and later, and 8.0.2.2.21 and later, some ecosystem tools such as Metabase BI may implicitly set the transaction isolation level to an unsupported one, such as READ\_UNCOMMITTED, in the query session. In such cases, you can run `SET imci_ignore_unsupported_isolation_level=ON` to force the use of READ\_COMMITTED. Alternatively, you can add a session variable setting to the ODBC/JDBC connection string. For example, in Metabase, you can add `session Variables=imci_ignore_unsupported_isolation_level='ON'` to the connection string.
    

## Does a columnstore index accelerate fuzzy searches?

Yes. A columnstore index performs exceptionally well in accelerating fuzzy search scenarios. It supports features such as LIKE PRUNER, NGRAM LIKE, and SMID LIKE. The columnstore full-text index feature also provides acceleration for fuzzy searches.
