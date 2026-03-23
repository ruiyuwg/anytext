You can use Dynamic Tables for efficient and cost-effective automatic data flow and layering. This topic describes the scope and limits of Dynamic Tables.

## **Incremental refresh**

If a Dynamic Table is set to the incremental refresh mode, the supported features and limits are as follows:

### **Limits**

-   **Resource usage**
    
    Starting from V3.1, new tables use serverless resources by default for refresh tasks. If serverless is not enabled for the instance, the system automatically switches to local resources. Tables created in V3.0 continue to use the refresh resources that were set when the table was created and do not automatically switch to serverless.
    
-   **Base table limits**
    
    -   Only Hologres internal tables, Paimon foreign tables, and other Dynamic Tables are supported. You must have access permissions for the corresponding base table to create a Dynamic Table.
        
    -   V3.1: By default, data from the base table is incrementally consumed using the Stream method. Compared with the binary logging method, the Stream method provides better performance and incurs no extra storage costs. If your base table used binary logging before V3.1, disable binary logging promptly to avoid extra storage costs. For more information about how to disable binary logging, see [Subscribe to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs).
        
    -   V3.0: When you create an incremental Dynamic Table, binary logging must be enabled for the base table. It does not need to be enabled for dimension tables. For more information about how to enable binary logging, see [Subscribe to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs).
        
-   **Query limits**
    
    -   Supported scenarios:
        
        -   Any scalar expression
            
        -   WHERE conditions
            
        -   Subqueries
            
        -   Common Table Expression (CTE)
            
        -   GROUP BY
            
        -   CUBE
            
        -   GROUPING SETS
            
        -   HAVING statements
            
        -   Agg Filter
            
        -   UNION ALL
            
        -   UNNEST
            
    -   Unsupported scenarios:
        
        -   Window functions
            
        -   IN subqueries
            
        -   EXISTS or NOT EXISTS
            
        -   EXCEPT or INTERSECT
            
        -   ORDER BY
            
        -   LIMIT or OFFSET
            
    -   Multi-table JOINs:
        
        -   V3.0 supports only dimension table equi-JOINs (INNER JOIN or LEFT JOIN) and must use the `FOR SYSTEM_TIME AS OF PROCTIME()` method. Multi-table dual-stream JOINs are not supported. For more information, see [Dimension table JOIN statements](/help/en/flink/realtime-flink/developer-reference/join-statements-for-dimension-tables).
            
            **Note**
            
            A dimension table JOIN has the following semantics: Each data record is joined only with the latest version of the dimension table data at that time. This means the JOIN operation occurs only at the processing time. If data in the dimension table changes (is added, updated, or deleted) after the JOIN operation, the joined dimension table data is not updated.
            
        -   Starting from V3.0.26, multi-table dual-stream JOINs are supported. These are regular JOINs in online analytical processing (OLAP) or dual-stream JOINs in Flink, including INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN. For more information, see [Create dynamic table](/help/en/hologres/user-guide/create-dynamic-table).
            
    -   Functions: Aggregate functions such as COUNT, SUM, MIN/MAX, and COUNT DISTINCT are supported. Functions executed by the Parallel Query Engine (PQE) are not supported. The following table describes more supported functions.
        
        **Function name**
        
        **Syntax**
        
        **Dynamic Table example**
        
        **Supported versions**
        
        RB\_BUILD\_AGG
        
        ```
        RB_BUILD_AGG(<column>)
        ```
        
        **Note**
        
        The column parameter supports the int32 and int64 data types. For more information, see [RoaringBitmap functions](/help/en/hologres/developer-reference/roaringbitmap-function).
        
        ```
        CREATE DYNAMIC TABLE daily_uv PARTITION BY list (day) 
          WITH (
            freshness = '5 minutes', 
            refresh_mode = 'incremental') 
          AS 
          SELECT day,
                 game_id,
                 gameversion,
                 RB_BUILD_AGG(user_id) AS user_rb
            FROM base_table GROUP BY day, game_id, gameversion;
        ```
        
        V3.1 and later.
        
        STRING\_AGG
        
        ```
        STRING_AGG([DISTINCT] column_expr, const_expr)
        ```
        
        **Note**
        
        -   Parameter types: column\_expr must be of the TEXT, CHAR, or VARCHAR type. const\_expr must be a TEXT constant.
            
        -   The ORDER BY clause is not supported.
            
        -   Starting from Hologres V3.1.10, `STRING_AGG([DISTINCT]` is supported.
            
        
        ```
        CREATE DYNAMIC TABLE string_agg_test_dt  
          WITH (
            freshness = '3 minutes', 
            refresh_mode = 'incremental') 
          AS 
          SELECT day,
                 STRING_AGG(gameversion, ',') AS gameversion_list
            FROM base_table GROUP BY day;
        ```
        
        -   V3.1 and later.
            
        -   Starting from V3.1.10, `STRING_AGG([DISTINCT]` is supported.
            
        
        ARRAY\_AGG
        
        ```
        ARRAY_AGG([DISTINCT] expr)
        ```
        
        **Note**
        
        -   expr parameter types: BOOL, all numeric types, TEXT, and BYTEA are supported.
            
        -   The ORDER BY clause is not supported.
            
        -   Starting from Hologres V3.1.10, `ARRAY_AGG([DISTINCT]` is supported.
            
        
        ```
        CREATE DYNAMIC TABLE array_agg_test_dt  
          WITH (
            freshness = '3 minutes', 
            refresh_mode = 'incremental') 
          AS 
          SELECT day,
                 ARRAY_AGG(gameversion) AS gameversion_list
            FROM base_table GROUP BY day;
        ```
        
        -   V3.1 and later.
            
        -   Starting from V3.1.10, `ARRAY_AGG([DISTINCT]` is supported.
            
        
        ANY\_VALUE
        
        In an aggregate query that includes `GROUP BY`, this function returns a random value from each group. The result is non-deterministic.
        
        ```
        ANY_VALUE(expr)
        ```
        
        The input parameter for `ANY_VALUE` supports only the INT and BINARY types.
        
        ```
        CREATE  DYNAMIC TABLE dt_t0
        WITH (
          -- Dynamic Table properties
          freshness = '1 minutes', 
          auto_refresh_mode = 'auto'
        )
        AS 
        SELECT a,any_value(c),SUM(b) FROM t0 GROUP BY a;
        ```
        
        V3.1.5 and later.
        
    -   Starting from V3.1, you can set a Dynamic Table as a logical partition. Partition-related properties and partition management settings are supported.
        

## **Full refresh**

If a Dynamic Table is set to the full refresh mode, the supported features and limits are as follows:

### **Supported features**

-   Base table support: This is the same as for regular Hologres tables. Hologres internal tables and foreign tables (such as MaxCompute, DLF, and Paimon) are supported as base tables for Dynamic Tables. You must have access permissions for the corresponding base table to create a Dynamic Table. For more information, see [Dynamic Table permissions](/help/en/hologres/dynamic-table-permission).
    
-   Query support: The full refresh mode supports all functions, SQL expressions, and data types that Hologres supports.
    
-   Refresh resource support: By default, serverless resources are used to execute refresh tasks. You can also switch to the resources of the current instance.
    

### **Limits**

You cannot convert a table from the full refresh mode to the incremental refresh mode.

## **General limits**

### **Dynamic Table limits**

-   The Hologres instance must be V3.0 or later.
    
-   Dynamic Table property limits: You cannot set a primary key or default field values. The engine automatically infers the table index. You can also manually set the index if needed.
    
-   Only the full refresh and incremental refresh modes are supported. The supported scope and limits differ for each mode. For more information, see [Full refresh](#2280a76744t7d) and [Incremental refresh](#f632abdbdeosp).
    

### **Limits on DDL, DML, and other operations on Dynamic Tables**

**Operation**

**Supported**

CREATE DYNAMIC TABLE

Yes

RENAME DYNAMIC TABLE

Yes

RENAME DYNAMIC TABLE Column

Yes

SELECT

Yes

Refresh

-   You can refresh non-partitioned tables and child partitions.
    
-   You cannot refresh parent partitions.
    

DROP DYNAMIC TABLE

Yes

DROP DYNAMIC TABLE Column

No

TRUNCATE DYNAMIC TABLE

No

DML (INSERT/UPDATE/DELETE) DYNAMIC TABLE

No

ADD Column

No

Resharding

No

**Note**

Resharding the base table is not supported.

CREATE TABLE AS/LIKE

No

### **Permission requirements for using Dynamic Tables**

**Operation**

**Permission requirements**

CREATE DYNAMIC TABLE

-   Create Table permission.
    
-   Select permission on the base table.
    

ALTER DYNAMIC TABLE

-   Create Table permission.
    
-   Select permission on the base table.
    

DROP DYNAMIC TABLE

Table Owner of the Dynamic Table.

SELECT DYNAMIC TABLE

Select permission on the Dynamic Table.

REFRESH DYNAMIC TABLE

DML permission on the Dynamic Table.

**Note**

You cannot refresh parent partitions.

For more information about how to grant permissions on a Dynamic Table, see [Hologres permission model](/help/en/hologres/security-and-compliance/hologres-permission-model/).

## **Effects of base table operations on Dynamic Tables**

**Base table operation**

**Dynamic Table behavior**

RENAME <basetable\_name>

-   Queries on the Dynamic Table execute normally.
    
-   Refresh operations fail.
    

RENAME <column\_name\_not\_used\_by\_dynamic\_table>

-   Queries on the Dynamic Table execute normally.
    
-   Refresh operations execute normally.
    

RENAME <column\_name\_used\_by\_dynamic\_table>

-   Queries on the Dynamic Table execute normally.
    
-   Refresh operations execute normally.
    

DROP <basetable\_name>

-   The DROP operation fails.
    
-   The Dynamic Table executes normally.
    

DROP <basetable\_name> CASCADE

The Dynamic Table is also deleted, and the task is canceled.

DROP <column\_not\_used\_by\_dynamic\_table>

-   Queries on the Dynamic Table execute normally.
    
-   Refresh operations execute normally.
    

DROP <column\_used\_by\_dynamic\_table>

The DROP operation fails.

TRUNCATE <basetable\_name>

-   If you TRUNCATE the base table before a Dynamic Table refresh, a query on the Dynamic Table returns data.
    
-   If you TRUNCATE the base table after a Dynamic Table refresh, a query on the Dynamic Table returns no data.
    

INSERT/DELETE/UPDATE/UPSERT <basetable\_name>

You can perform INSERT, DELETE, UPDATE, or UPSERT operations on a dynamic table.
