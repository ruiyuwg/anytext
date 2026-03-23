Generated columns are special columns whose values are computed from other columns in the same table. They fall into two categories: stored generated columns and virtual generated columns. Starting with Hologres V3.1, stored generated columns are supported. These columns are automatically computed during data writes or updates and consume actual storage space. Virtual generated columns are not currently supported. This topic describes how to use stored generated columns in Hologres.

## **Scenarios**

-   Automate calculations for required fields, eliminating the need to manually implement calculation logic.
    
-   Ensure data consistency by preventing inconsistencies caused by human error or flawed code logic.
    
-   Optimize query performance. For high-frequency queries, reading from a stored generated column performs as efficiently as reading from a regular column.
    
-   Simplify business logic by reducing SQL complexity for common, fixed data transformation operations.
    

Using generated columns appropriately for your business needs significantly improves development efficiency and ensures data reliability.

## **Syntax**

Declare a generated column using the GENERATED ALWAYS AS clause and specify that it is a stored generated column by adding the STORED keyword.

-   Create a table that contains a generated column.
    
    ```
    CREATE TABLE generated_col_t (
        [...,]
        col1 INT,
        col2 INT GENERATED ALWAYS AS (col1 + 1) STORED
    );
    ```
    
-   Create a logical partitioned table that contains a generated column and use the generated column as the partition key.
    
    ```
    CREATE TABLE generated_col_logical_part (
        a TEXT,
        b INT,
        ts TIMESTAMP NOT NULL,
        d TIMESTAMP GENERATED ALWAYS AS (date_trunc('day', ts)) STORED NOT NULL
    )
    LOGICAL PARTITION BY LIST(d);
    ```
    

## **Notes**

-   When you use CREATE TABLE
    
    -   Only IMMUTABLE functions or expressions are supported when defining a generated column. Non-IMMUTABLE functions such as CURRENT\_DATE and RANDOM are not supported.
        
    -   When you define a generated column, its expression cannot reference other generated columns, nor can you define the `default` keyword for it.
        
    -   When creating a partitioned table, you can set the partition key of a [logical partitioned table](/help/en/hologres/developer-reference/create-logical-partition-table) to a generated column. You cannot set the partition key of a [physical partitioned table](/help/en/hologres/developer-reference/create-partition-table) to a generated column. However, any regular column in a partitioned table can be a generated column.
        
    -   You cannot define generated columns when creating a foreign table using CREATE FOREIGN TABLE.
        
    -   You can configure a generated column as various types of Hologres indexes, including primary key, distribution key, segment key, cluster index, bitmap index, and dictionary-encoded column.
        
-   When you use ALTER TABLE
    
    -   Generated columns do not support the ADD operation.
        
    -   You can drop a generated column. However, before dropping the generated column, you must retain all columns it references.
        
    -   You cannot modify the data type of a generated column or of any column it references. To do so, use the REBUILD feature. For more information, see [REBUILD](/help/en/hologres/developer-reference/holores-rebuild).
        
    -   You can rename a generated column.
        
-   When you use DML or DQL
    
    -   When you write or update data in a table with a generated column, you can either omit the generated column or use the `default` keyword. You cannot directly assign a value to the generated column.
        
    -   When updating data, you cannot update a generated column or any column it references if either is configured as a distribution key.
        
    -   If a table’s primary key includes a generated column, the primary key must also include all columns referenced by that generated column to support data updates using Fixed Plan.
        
    -   When performing a partial column update using Fixed Plan, if a generated column references multiple regular columns, you cannot update only a subset of those referenced columns.
        
    -   Other operations support tables with generated columns. These include read and write operations executed by the HQE engine, read and write operations executed by Fixed Plan, and Copy operations.
        
-   Other operations
    
    -   You can use CREATE TABLE LIKE with source tables that contain generated columns. However, to retain the generated column properties, you must enable the `hg_experimental_enable_create_table_like_properties` parameter.
        
    -   When using CREATE TABLE AS, source tables with generated columns are not supported.
        
    -   To modify table parameters for a table that contains a generated column, use the REBUILD syntax. This includes migrating the table to another table group. For more information, see [REBUILD](/help/en/hologres/developer-reference/holores-rebuild). The HG\_MOVE\_TABLE\_TO\_TABLE\_GROUP syntax is not supported for migrating a table’s table group.
        
    -   To perform an INSERT OVERWRITE operation on a table with a generated column, you must use the native INSERT OVERWRITE syntax supported in Hologres V3.1. The original `hg_insert_overwrite` syntax is no longer supported. For more information about the syntax, see [INSERT OVERWRITE](/help/en/hologres/developer-reference/insert-overwrite#e893d9f91fiwf).
        

## **Examples**

1.  Create a table with a generated column.
    
    ```
    CREATE TABLE generated_col_t (
        id INT PRIMARY KEY,
        col1 INT,
        col2 INT GENERATED ALWAYS AS (col1 + 1) STORED
    );
    ```
    
2.  Import data.
    
    -   You can import data into all non-generated columns. The following examples show how:
        
        ```
        INSERT INTO generated_col_t VALUES (1, 1);
        INSERT INTO generated_col_t(id, col1) VALUES (2, 2);
        ```
        
        The query `SELECT * FROM generated_col_t;` returns the following result.
        
        ```
        id	col1	col2
        1	1	2
        2	2	3
        ```
        
    -   You can use the `default` keyword for the generated column during data import. The following examples show how:
        
        ```
        INSERT INTO generated_col_t VALUES (3, 3, default);
        INSERT INTO generated_col_t(id, col1, col2) VALUES (4, 4, default);
        ```
        
        The query `SELECT * FROM generated_col_t;` returns the following result.
        
        ```
        id	col1	col2
        4	4	5
        2	2	3
        3	3	4
        1	1	2
        ```
        
    -   You **cannot** import data by specifying a value for the generated column. The following examples show this:
        
        ```
        INSERT INTO generated_col_t VALUES (5, 5, 6);
        INSERT INTO generated_col_t(id, col1, col2) VALUES (6, 6, 7);
        ```
        
        The following result is returned.
        
        ![a1 - 副本](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0860466471/p951656.png)
        
3.  Update data.
    
    -   You can update data in non-generated columns. The following example shows how:
        
        ```
        UPDATE generated_col_t SET col1 = 2 WHERE id = 1;
        ```
        
        The query `SELECT * FROM generated_col_t;` returns the following result.
        
        ```
        id	col1	col2
        2	2	3
        3	3	4
        4	4	5
        1	2	3     -- The data in this column has changed
        ```
        
    -   You can use the `default` keyword for the generated column when you update data. The following example shows how:
        
        ```
        UPDATE generated_col_t SET col1 = 3, col2 = default WHERE id = 2;
        ```
        
        The query `SELECT * FROM generated_col_t;` returns the following result.
        
        ```
        id	col1	col2
        3	3	4
        2	3	4    -- The data in this column has changed
        4	4	5
        1	2	3
        ```
        
    -   You **cannot** update data by specifying a value for the generated column. The following example shows this:
        
        ```
        UPDATE generated_col_t SET col2 = 4 WHERE id = 3;
        ```
        
        The following result is returned.
        
        ![777](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0860466471/p951664.png)
        

You can use the following SQL query to verify whether a function is `IMMUTABLE` for specific parameter types. For example, the `TO_CHAR` function is `IMMUTABLE` only when the input is of the `TIMESTAMP WITH TIME ZONE` type. Therefore, when using this function in a generated column, ensure that the parameter types match.

```
SELECT n.nspname AS "Schema",
  p.proname AS "Name",
  pg_catalog.pg_get_function_result(p.oid) AS "Result data type",
  pg_catalog.pg_get_function_arguments(p.oid) AS "Argument data types",
 CASE p.prokind
  WHEN 'a' THEN 'agg'
  WHEN 'w' THEN 'window'
  WHEN 'p' THEN 'proc'
  ELSE 'func'
 END AS "Type",
 CASE
  WHEN p.provolatile = 'i' THEN 'immutable'
  WHEN p.provolatile = 's' THEN 'stable'
  WHEN p.provolatile = 'v' THEN 'volatile'
 END AS "Volatility",
 CASE
  WHEN p.proparallel = 'r' THEN 'restricted'
  WHEN p.proparallel = 's' THEN 'safe'
  WHEN p.proparallel = 'u' THEN 'unsafe'
 END AS "Parallel",
 pg_catalog.pg_get_userbyid(p.proowner) AS "Owner",
 CASE WHEN prosecdef THEN 'definer' ELSE 'invoker' END AS "Security",
 pg_catalog.array_to_string(p.proacl, E'\n') AS "Access privileges",
 l.lanname AS "Language",
 p.prosrc AS "Source code",
 pg_catalog.obj_description(p.oid, 'pg_proc') AS "Description"
FROM pg_catalog.pg_proc p
     LEFT JOIN pg_catalog.pg_namespace n ON n.oid = p.pronamespace
     LEFT JOIN pg_catalog.pg_language l ON l.oid = p.prolang
-- Target function
WHERE p.proname OPERATOR(pg_catalog.~) '^(TO_CHAR)$' COLLATE pg_catalog.default
  AND pg_catalog.pg_function_is_visible(p.oid)
ORDER BY 1, 2, 4;
```
