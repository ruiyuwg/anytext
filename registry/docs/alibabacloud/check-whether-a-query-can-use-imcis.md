This topic describes how to use the `EXPLAIN` statement to determine whether to use in-memory column indexes (IMCIs) to accelerate SQL queries.

## Examples

In PolarDB for MySQL clusters, the execution plans for queries on data in columnar format are displayed in a horizontal tree format, which is different from the output format of the execution plans for queries on data in row-based format. You can execute the EXPLAIN statement to view the execution plan of SQL queries and determine whether to use IMCIs to accelerate the queries.

**SQL query example:**

```
EXPLAIN SELECT l_orderkey, SUM(l_extendedprice * (1 - l_discount)) AS revenue, o_orderdate, o_shippriority
FROM customer, orders, lineitem
WHERE c_mktsegment = 'BUILDING'
AND c_custkey = o_custkey
AND l_orderkey = o_orderkey
AND o_orderdate < date '1995-03-24'
AND l_shipdate > date '1995-03-24'
GROUP BY l_orderkey, o_orderdate, o_shippriority
ORDER BY revenue DESC, o_orderdate;
```

**Execution plan when the queried data is in row-based format:**

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

**Execution plan (in horizontal tree format) when the queried data is in columnar format:**

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

## **References**

An IMCI can access only the columns that the IMCI covers. If the tables or columns referenced in your SQL statement are not fully covered by the IMCI, the IMCI does not take effect.

-   To check whether an IMCI is created for a table referenced in a SQL statement, call the `dbms_imci.check_columnar_index()` stored procedure. The stored procedure can parse the SQL statement that you entered, obtain all columns referenced in the statement, and check whether the columns are covered by an IMCI. For more information, see [Check whether an IMCI is created for a table in a SQL statement](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement).
    
-   To obtain the DDL statement used to create an IMCI, call the `dbms_imci.columnar_advise()` stored procedure. The stored procedure can return the DDL statement used to create an IMCI based on the SQL statement that you entered. For more information, see [Obtain the DDL statement used to create an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci). After you execute the DDL statement, an IMCI is created to cover all columns referenced in the SQL statement.
    

## **FAQ**

### Why does an SQL query not use IMCIs for acceleration?

An SQL query uses IMCIs for acceleration only when the following conditions are met: A read-only column store node is added to the cluster, IMCIs are created on tables involved in the SQL query, the estimated execution cost of the SQL query exceeds the specified threshold, and the SQL query is forwarded to the read-only column store node. If an SQL query does not use IMCIs, you can perform the following steps to troubleshoot the issue:

1.  **Check whether the SQL query is forwarded to the read-only column store node.**
    
    -   Check whether the read-only column store node is included in the **selected nodes** of the cluster endpoint.
        
    -   Check whether the SQL query is forwarded to the read-only column store node by using the SQL Explorer feature. For more information, see [SQL Explorer](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit#task-1580371).
        
    
    PolarProxy forwards an SQL query to the read-only column store node only when the following conditions are met: The SQL query accesses the cluster by using the **cluster endpoint**, **Transactional/Analytical Processing Splitting** is enabled for the cluster endpoint, and the estimated execution cost of the SQL query exceeds the threshold specified by loose\_imci\_ap\_threshold or loose\_cost\_threshold\_for\_imci parameter. You can add a `/*FORCE_IMCI_NODES*/` hint before the `SELECT` keywords of the SQL statement to forcibly forward the SQL statement to the read-only column store node. For more information, see [Specify the thresholds for automatic request distribution](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes#title-lkg-bdx-yzy). Example:
    
    > The loose\_imci\_ap\_threshold parameter is used instead of the loose\_cost\_threshold\_for\_imci parameter in database engines whose minor version is 8.0.1.1.39 or later, or 8.0.2.2.23 or later.
    
    ```
    /*FORCE_IMCI_NODES*/EXPLAIN SELECT COUNT(*) FROM t1 WHERE t1.a > 1;
    ```
    
    > You can create a custom endpoint and associate the endpoint with the read-only column store node. This ensures that the SQL query is forwarded to the read-only column store node for execution. For more information, see [HTAP-based request distribution among row store and column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution).
    
2.  Check whether the **estimated execution cost** **of the SQL query is higher than the specified threshold.**
    
    On the column store node, the optimizer estimates the execution cost of the SQL query. If the estimated execution cost of the SQL query is higher than the threshold specified by the loose\_imci\_ap\_threshold or cost\_threshold\_for\_imci parameter, the optimizer uses IMCIs in the query. Otherwise, the optimizer uses the original row indexes in the query.
    
    If the `EXPLAIN` statement shows that the execution plan still does not use IMCIs after the SQL query is forwarded to the read-only column store node, compare the estimated execution cost with the specified threshold to determine whether IMCIs are not used because the estimated execution cost is excessively small. You can query the `Last_query_cost` value to obtain the estimated execution cost of the previous SQL statement. Example:
    
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
    

> If the SQL query still do not use IMCIs, you can consult [experts](/help/en/polardb/polardb-for-mysql/user-guide/imci-best-practices#8379a6d1a9wvb) or [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).

### **How do I create an appropriate IMCI for an SQL query?**

We recommend that you create an IMCI based on the columns involved in the SQL query. For more information, see [Check whether an IMCI is created for a table in an SQL statement](/help/en/polardb/polardb-for-mysql/user-guide/check-whether-the-imci-is-valid-for-all-columns-in-the-sql-statement#main-2260646).

An SQL query uses an IMCI only when the IMCI includes all columns involved in the SQL query. If the columns involved in an SQL query are not completely covered by IMCIs, you can use the `ALTER TABLE` statement to add IMCIs. PolarDB provides built-in stored procedures to assist in this operation.

**Note**

-   You can use the `dbms_imci.columnar_advise()` stored procedure to obtain the DDL statements used to create IMCIs for an SQL query. If you use the DDL statements to create IMCIs, you can ensure that the columns involved in the SQL query are fully included in the IMCIs. For more information, see [Obtain the DDL statement used to create an IMCI](/help/en/polardb/polardb-for-mysql/user-guide/obtain-the-ddl-statement-used-to-create-an-imci#main-2260648).
    
    ```
    dbms_imci.columnar_advise('<query_string>');
    ```
    
-   You can use the following stored procedures to obtain the DDL statements used to create IMCIs for a batch of SQL queries: `dbms_imci.columnar_advise_begin()`, `dbms_imci.columnar_advise_end()`, and `dbms_imci.columnar_advise()`. For more information, see [Batch obtain the DDL statements used to create IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/batch-obtain-the-ddl-statements-used-to-create-imcis#main-2260649).
