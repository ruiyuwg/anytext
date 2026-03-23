Fixed Plan is a unique optimization for the Hologres execution engine. This topic describes the conditions and parameter settings that an SQL statement must meet to use Fixed Plan.

## Background information

Fixed Plan is a unique optimization for the Hologres execution engine. A traditional SQL execution involves multiple components, such as an optimizer, a coordinator, a query engine, and a storage engine. Fixed Plan uses a shortcut path to optimize SQL execution, bypassing the overhead of the optimizer, coordinator, and parts of the query engine. It connects Fixed FrontEnd directly to Fixed Query Engine to significantly improve SQL execution efficiency. This is a key optimization method that supports high-throughput real-time writes and high-concurrency queries. For more information about Fixed Plan, see [Service architecture](/help/en/hologres/product-overview/architecture#concept-2175040).

In Hologres, Fixed Plan is used by default in the following scenarios:

-   Real-time data writes from Flink to Hologres.
    
-   Real-time data writes from DataWorks data integration to Hologres.
    
-   Data writes from Holo Client to Hologres.
    

For other write scenarios, you can configure the SQL statements to use Fixed Plan. For more information, see the following sections.

**Note**

In the preceding scenarios, SQL statements that meet the conditions use Fixed Plan by default. However, not all SQL statements in these scenarios necessarily meet the conditions to use Fixed Plan.

## Related GUC parameters

-   GUC list
    
    The following table describes the parameters for Fixed Plan. The value of each parameter can be on or off. All parameters are enabled by default in Holo Client and take effect at the session level.
    
    **GUC name**
    
    **Scenario**
    
    **Default value**
    
    **GUC change history**
    
    hg\_experimental\_enable\_fixed\_dispatcher
    
    Checks whether Fixed Plan is enabled for the instance.
    
    Supports Fixed Plan for single-record INSERT, UPDATE, DELETE, and PrefixScan query operations.
    
    on
    
    Not applicable.
    
    hg\_experimental\_enable\_fixed\_dispatcher\_for\_multi\_values
    
    Controls Fixed Plan for multi-record INSERT operations.
    
    **Note**
    
    Atomicity is not guaranteed. When you write multiple records at once, no error indicates that all records were written successfully. If an error occurs, only one error is reported. This might mean that no records were written, or that only some records were written. The application receives the error for the failed records and can retry the operation.
    
    on
    
    Starting from Hologres V1.3.35, this GUC parameter supports Fixed Plan for multi-record INSERT, UPDATE, and DELETE operations.
    
    hg\_experimental\_enable\_fixed\_dispatcher\_autofill\_series
    
    Enables Fixed Plan writes for tables that contain columns of the serial data type. Enable this parameter at the client session level.
    
    off
    
    Starting from Hologres V1.3.25, the default value of this GUC parameter is `on`.
    
    hg\_experimental\_enable\_fixed\_dispatcher\_for\_update
    
    Enables Fixed Plan for UPDATE operations. Enable this parameter at the client session level.
    
    off
    
    Starting from Hologres V1.3.25, `hg_experimental_enable_fixed_dispatcher_for_update` is deprecated. UPDATE statements that meet the conditions use Fixed Plan by default. However, to update multiple records, you must set `set hg_experimental_enable_fixed_dispatcher_for_multi_values =on`.
    
    hg\_experimental\_enable\_fixed\_dispatcher\_for\_delete
    
    Enables Fixed Plan for DELETE operations. Enable this parameter at the client session level.
    
    off
    
    Starting from Hologres V1.3.25, `hg_experimental_enable_fixed_dispatcher_for_delete` is deprecated. DELETE statements that meet the conditions use Fixed Plan by default. However, to delete multiple records, you must set `set hg_experimental_enable_fixed_dispatcher_for_multi_values =on`.
    
    hg\_experimental\_enable\_fixed\_dispatcher\_for\_scan
    
    Enables Fixed Plan for PrefixScan queries.
    
    **Note**
    
    A PrefixScan query provides only the first few columns of a composite primary key as filter conditions. Fixed Plan queries in PrefixScan scenarios are not supported for column-oriented tables.
    
    off
    
    Use Hologres V1.3.35 or later.
    
    hg\_experimental\_enable\_bhclient\_cache\_on\_session
    
    Changes the cache mode. Two modes are available.
    
    -   on: Uses the cached on session mode.
        
    -   off: Uses the cached on fe mode.
        
    
    **Note**
    
    The following list describes the differences between cached on session and cached on fe.
    
    -   cached on session: Each connection has its own Writer and Reader. This provides better throughput for a single connection but has a slower startup time. The startup time is required for the first read or write operation on each table.
        
    -   cached on fe: All connections on a frontend (FE) node share the same Writer and Reader. The Writer and Reader do not close when a connection is terminated. Therefore, there is no startup time.
        
    
    off
    
    Not applicable.
    
    hg\_experimental\_disable\_fixed\_planner\_conflict\_pk\_check
    
    Controls whether the column in the `INSERT INTO <table_name> VALUES (...) ON CONFLICT(<column>)` syntax can be a non-primary key field.
    
    -   false: Not supported.
        
    -   true: Supported.
        
        **Note**
        
        If this GUC parameter is set to true, the column can be a non-primary key field. However, when the [INSERT ON CONFLICT](/help/en/hologres/developer-reference/insert-on-conflict) statement is executed, data is still processed based on whether the primary key is duplicated (`ON CONFLICT(pk)`).
        
    
    false
    
    -   In Hologres V1.3 to V2.1.28, the field in `ON CONFLICT(<column>)` must be a primary key field.
        
    -   Starting from Hologres V2.1.29, this GUC parameter controls whether the field in `ON CONFLICT(<column>)` can be a non-primary key field.
        
    
-   Use GUC parameters
    
    -   Check whether a GUC parameter is enabled
        
        Run the show command to check whether a GUC parameter is enabled. The syntax is as follows:
        
        ```
        SHOW <GUC_name>;
        ```
        
        The following example shows how to use the command.
        
        ```
        -- Check whether Fixed Plan is enabled for the instance.
        SHOW hg_experimental_enable_fixed_dispatcher;
        ```
        
    -   Enable a GUC parameter
        
        -   Enable a GUC parameter at the session level
            
            Run the `set` command to set a GUC parameter at the session level. A session-level parameter is valid only for the current session and becomes invalid after the connection is terminated. Add the command before the SQL statement and execute them together. The syntax is as follows:
            
            ```
            SET <GUC_name> = <values>;
            ```
            
            GUC\_name is the name of the GUC parameter. values is the value of the GUC parameter.
            
            The following example shows how to use the command.
            
            ```
            -- Enable Fixed Plan for multi-record INSERT ON CONFLICT writes.
            SET hg_experimental_enable_fixed_dispatcher_for_multi_values = on;
            ```
            
        -   Enable a GUC parameter at the database level
            
            Run the `alter database xx set xxx` command to set a GUC parameter at the database level. The setting takes effect for the entire database after you run the command. You must reconnect to the database for the setting to take effect. The setting does not apply to new databases. You must set it again for new databases. The syntax is as follows:
            
            ```
            ALTER DATABASE <db_name> SET <GUC_name> = <values>;
            ```
            
            db\_name is the database name, GUC\_name is the name of the GUC parameter, and values is the value of the GUC parameter.
            
            The following example shows how to use the command.
            
            ```
            --Enable Fixed Plan at the DB level.
            ALTER DATABASE <db_name> SET hg_experimental_enable_fixed_dispatcher = on;
            ```
            

## Data type requirements

-   No column in the table can be of the MONEY or MONEY ARRAY type.
    
-   The following data types are supported for columns in data manipulation language (DML) operations, such as INSERT, UPDATE, and DELETE, and SELECT operations. For SELECT operations, this applies to both the target columns and the columns in the WHERE clause.
    
    -   BOOLEAN (alias: BOOL)
        
    -   SMALLINT
        
    -   INTEGER (aliases: INT or INT4)
        
    -   BIGINT (alias: INT8)
        
    -   FLOAT (alias: FLOAT4)
        
    -   DOUBLE PRECISION (alias: FLOAT8)
        
    -   CHAR(n)
        
    -   VARCHAR(n) (In Hologres V1.1.79 and later, the VARCHAR type can use Fixed Plan.)
        
    -   BYTEA
        
    -   JSON and JSONB
        
    -   TEXT (alias: VARCHAR)
        
    -   TIMESTAMP WITH TIME ZONE (alias: TIMESTAMPTZ)
        
    -   DATE
        
    -   TIMESTAMP
        
    -   DECIMAL (alias: NUMERIC)
        
    -   ROARINGBITMAP
        
    -   TIME (supported in Hologres V2.2 and later)
        
    -   TIMETZ (supported in Hologres V2.2 and later)
        
    -   Array types
        
        -   boolean\[\]
            
        -   smallint\[\]
            
        -   int4\[\]
            
        -   int8\[\]
            
        -   float4\[\]
            
        -   float8\[\]
            
        -   char(n)\[\]
            
        -   varchar(n)\[\]
            
        -   text\[\]
            

## INSERT scenarios

Starting from Hologres V3.2, the RETURNING clause is supported for Fixed Plan INSERT operations on tables with primary keys.

-   INSERT statement
    
    Fixed Plan supports the following INSERT clauses.
    
    ```
    -- Write a single record.
    INSERT INTO TABLE(col1,col2,col3..) VALUES(?,?,?..) ON conflict xxx;
    -- Write multiple records.
    INSERT INTO TABLE(col1,col2,col3..) VALUES(?,?,?..),(?,?,?..) ON conflict xxx;
    ```
    
    **Note**
    
    -   You can use the INSERT command to write data to internal tables, but not to foreign tables.
        
    -   You can use the INSERT command to write data to partitioned tables. In Hologres V1.3 and later, you can write data to parent tables of partitioned tables.
        
    -   In versions earlier than Hologres V3.2, the INSERT statement does not support the `RETURNING` keyword. This keyword is supported in Hologres V3.2 and later.
        
    
-   Single-record Insert on conflict
    
    -   The following scenarios are supported.
        
        -   Clauses without `on conflict` are supported.
            
        -   Clauses with `on conflict do nothing` are supported.
            
        -   For `on conflict do update`, you must update all non-primary key (PK) columns that are specified in the INSERT statement. You can choose whether to update the PK columns. The update must be in the `col = excluded.col` format. In Hologres V1.3 and later, you can update some of the non-PK columns, but the update must still be in the `col = excluded.col` format.
            
    -   The following examples show how to use the statement.
        
        ```
        BEGIN;
        CREATE TABLE test_insert_oneline (
            pk1 INT,
            pk2 INT,
            col1 INT,
            col2 INT,
            PRIMARY KEY (pk1, pk2)
        );
        COMMIT;
        
        -- Update all non-PK columns. This statement can use Fixed Plan.
        INSERT INTO test_insert_oneline
            VALUES (1, 2, 3, 4)
        ON CONFLICT (pk1, pk2)
            DO UPDATE SET
                col1 = excluded.col1, col2 = excluded.col2;
        
        -- Update all columns (including PK and non-PK columns). This statement can use Fixed Plan.
        INSERT INTO test_insert_oneline
            VALUES (1, 2, 3, 4)
        ON CONFLICT (pk1, pk2)
            DO UPDATE SET
                col1 = excluded.col1, col2 = excluded.col2, pk1 = excluded.pk1, pk2 = excluded.pk2;
        
        -- You must update all non-PK columns that are to be inserted. This example does not include col2. Fixed Plan is supported only in Hologres V1.3 and later.
        INSERT INTO test_insert_oneline
            VALUES (1, 2, 3, 4)
        ON CONFLICT (pk1, pk2)
            DO UPDATE SET
                col1 = excluded.col1;
        
        -- The update must be in the 'set col = excluded.col' format. Therefore, this statement cannot use Fixed Plan.
        INSERT INTO test_insert_oneline
            VALUES (1, 2, 3, 4)
        ON CONFLICT (pk1, pk2)
            DO UPDATE SET
                col1 = excluded.col1, col2 = 5;
        ```
        
-   Multi-record Insert on conflict
    
    -   The clause for a multi-record Insert on conflict operation is as follows.
        
        ```
        SET hg_experimental_enable_fixed_dispatcher_for_multi_values = ON;
        
        INSERT INTO TABLE (col1, col2, col3..)
            VALUES (?, ?, ?..), (?, ?, ?..)
        ON CONFLICT xxx;
        ```
        
        -   You must set the GUC parameter: `hg_experimental_enable_fixed_dispatcher_for_multi_values = on;`. Starting from Hologres 1.3.35, the default value of this parameter is `on`.
            
        -   Atomicity is not guaranteed. When you write multiple records at once, if no error is reported, all records are written successfully. If an error is reported, it is possible that no records were written, or that only some records were written.
            
    -   Another way to write a multi-record clause is as follows.
        
        ```
        SET hg_experimental_enable_fixed_dispatcher_for_multi_values = ON;
        
        INSERT INTO TABLE SELECT
            unnest(ARRAY[TRUE, FALSE, TRUE]::bool[]),
            unnest(ARRAY[1, 2, 3]::int4[]),
            unnest(ARRAY[1.11, 2.222, 3]::float4[])
        ON CONFLICT xxx;
        ```
        
        -   You must set the GUC parameter: `hg_experimental_enable_fixed_dispatcher_for_multi_values=on;`.
            
        -   The columns to be written cannot be of an array type.
            
        -   The ARRAY in the unnest function must be explicitly cast to the array type of the corresponding column.
            
        
        The following example shows how to use the statement.
        
        ```
        BEGIN;
        CREATE TABLE test_insert_multiline (
            pk1 int8,
            col1 float4,
            PRIMARY KEY (pk1)
        );
        COMMIT;
        
        -- Fixed Plan is supported.
        SET hg_experimental_enable_fixed_dispatcher_for_multi_values = ON;
        
        INSERT INTO test_insert_multiline
        SELECT
            unnest(ARRAY[1, 2, 3]::int8[]),
            unnest(ARRAY[1.11, 2.222, 3]::float4[])
        ON CONFLICT
            DO NOTHING;
        
        -- The ARRAY in unnest is not explicitly cast. Fixed Plan is not supported.
        INSERT INTO test_insert_multiline
        SELECT
            unnest(ARRAY[1, 2, 3]),
            unnest(ARRAY[1.11, 2.222, 3])
        ON CONFLICT
            DO NOTHING;
        
        -- The first column is int8, so it should be cast to int8[]. In this example, it is int4[]. Therefore, Fixed Plan is not supported.
        INSERT INTO test_insert_multiline
        SELECT
            unnest(ARRAY[1, 2, 3]::int4[]),
            unnest(ARRAY[1.11, 2.222, 3]::float4[])
        ON CONFLICT
            DO NOTHING;
        ```
        
-   Partial update scenarios
    
    Hologres supports partial updates of table columns based on the primary key. Fixed Plan also supports partial updates if the following conditions are met.
    
    -   The columns in the INSERT clause must correspond one-to-one with the columns in the UPDATE clause in both number and order.
        
    -   The update must be in the `col = excluded.col` format.
        
    
-   Conditional upsert
    
    To handle out-of-order input data for rows with the same PK, Hologres supports conditional `INSERT` or `UPDATE` statements that use Fixed Plan, similar to the HBase CheckAndPut interface. The following conditions must be met:
    
    -   Supported when inserting a single record. When inserting multiple records, you must set the GUC parameter: `set hg_experimental_enable_fixed_dispatcher_for_multi_values=on;`.
        
    -   The `where` clause supports only a single non-PK field. The comparison operator must be `=, <>, >, >=, <, <=, IS NULL, or IS NOT NULL`. You can use the `coalesce` function on this non-PK field.
        
    
    The following example shows how to use the statement.
    
    ```
    BEGIN;
    CREATE TABLE test_check_and_insert (
        pk INT,
        col INT,
        scn INT,
        PRIMARY KEY (pk)
    );
    COMMIT;
    
    -- Fixed Plan is supported.
    -- Compare the existing value of a column with a constant.
    INSERT INTO test_check_and_insert AS old
        VALUES (1, 1, 1)
    ON CONFLICT (pk)
        DO UPDATE SET
            col = excluded.col, scn = excluded.scn
        WHERE
            old.scn > 0;
    
    -- Compare the existing value of a column with the value to be written.
    INSERT INTO test_check_and_insert AS old
        VALUES (1, 1, 1)
    ON CONFLICT (pk)
        DO UPDATE SET
            col = excluded.col, scn = excluded.scn
        WHERE
            old.scn > excluded.scn;
    
    -- If the existing value might be null, use coalesce.
    INSERT INTO test_check_and_insert AS old
        VALUES (1, 1, 1)
    ON CONFLICT (pk)
        DO UPDATE SET
            col = excluded.col, scn = excluded.scn
        WHERE
            coalesce(old.scn, 3) > 2;
    
    INSERT INTO test_check_and_insert AS old
        VALUES (1, 1, 1)
    ON CONFLICT (pk)
        DO UPDATE SET
            col = excluded.col, scn = excluded.scn
        WHERE
            coalesce(old.scn, 3) > excluded.scn;
    
    -- Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_for_multi_values = ON;
    
    -- Compare the existing value of a column with a constant.
    INSERT INTO test_check_and_insert AS old
        VALUES (1, 1, 1), (2, 3, 4)
    ON CONFLICT (pk)
        DO UPDATE SET
            col = excluded.col, scn = excluded.scn
        WHERE
            old.scn > 3;
    
    -- The unnest syntax is also supported.
    INSERT INTO test_check_and_insert AS old
    SELECT
        unnest(ARRAY[5, 6, 7]::int[]),
        unnest(ARRAY[1, 1, 1]::int[]),
        unnest(ARRAY[1, 1, 1]::int[])
    ON CONFLICT (pk)
        DO UPDATE SET
            col = excluded.col,
            scn = excluded.scn
        WHERE
            old.scn > 3;
    ```
    
-   Default columns
    
    If a table contains a column with a default value, the following conditions must be met for Fixed Plan to be used.
    
    -   Supported when inserting a single record. When inserting multiple records, your Hologres instance must be V1.1.36 or later. If your instance version is earlier, upgrade your instance. You must also set the GUC parameter: `set hg_experimental_enable_fixed_dispatcher_for_multi_values=on;` .
        
    -   In Hologres V1.3 and later, Fixed Plan is supported for the `Insert on conflict` clause on tables with default columns. In earlier versions, Fixed Plan is not supported for the `Insert on conflict` clause on tables with default columns.
        
    
    The following example shows how to use the statement.
    
    ```
    BEGIN;
    CREATE TABLE test_insert_default (
        pk1 INT,
        col1 INT DEFAULT 99,
        PRIMARY KEY (pk1)
    );
    COMMIT;
    
    -- Fixed Plan is supported.
    INSERT INTO test_insert_default (pk1)
        VALUES (1);
    
    -- Supported in V1.1.36 and later.
    SET hg_experimental_enable_fixed_dispatcher_for_multi_values = ON;
    
    INSERT INTO test_insert_default (pk1)
        VALUES (1), (2), (3);
    ```
    
-   Serial columns
    
    If a table has an auto-incrementing serial column, the following conditions must be met for Fixed Plan to be used for single or multiple record writes.
    
    -   You must set the GUC parameter: `set hg_experimental_enable_fixed_dispatcher_autofill_series=on;`. Starting from Hologres V1.3.25, the default value of this GUC parameter is `on`.
        
    -   When inserting multiple records, you must also set the GUC parameter: `set hg_experimental_enable_fixed_dispatcher_for_multi_values=on;`.
        
    
    The following example shows how to use the statement.
    
    ```
    BEGIN;
    CREATE TABLE test_insert_serial (
        pk1 INT,
        col1 SERIAL,
        PRIMARY KEY (pk1)
    );
    COMMIT;
    
    -- Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_autofill_series = ON;
    
    INSERT INTO test_insert_serial (pk1)
        VALUES (1);
    
    -- Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_autofill_series = ON;
    
    SET hg_experimental_enable_fixed_dispatcher_for_multi_values = ON;
    
    INSERT INTO test_insert_serial (pk1)
        VALUES (1), (2), (3);
    ```
    

## UPDATE scenarios

-   UPDATE statement
    
    The following UPDATE clause can use Fixed Plan.
    
    ```
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    
    UPDATE TABLE SET col1 = ?,col2 = ? WHERE pk1 = ? AND pk2 = ?;
    ```
    
-   Use UPDATE scenarios
    
    The following conditions must be met for an UPDATE operation to use Fixed Plan.
    
    -   You can update internal tables, but not foreign tables. You can update child tables of partitioned tables, but not parent tables. The table must have a primary key (PK).
        
    -   You must set the GUC parameter: `hg_experimental_enable_fixed_dispatcher_for_update=on;`. Starting from Hologres V1.3.25, this parameter is deprecated. `UPDATE` statements that meet the conditions use Fixed Plan by default. However, to update multiple rows, you must set the GUC parameter: `set hg_experimental_enable_fixed_dispatcher_for_multi_values =on`.
        
    -   The columns in the `set` clause cannot be PKs.
        
    -   The where clause must contain all and only the PKs. In Hologres V1.3 and later, the last field in the where clause can be a non-PK field. For this non-PK field, the comparison operators `=, <>, >, >=, <, <=, IS NULL, and IS NOT NULL` and the `coalesce` function are supported.
        
    -   You can use `pk in (?,?,?) or pk = ANY()` to modify multiple records at a time. Example: `pk1 in (1,2) and pk2 = any('{3,4}') and pk3 = 5` modifies four records: `(1,3,5), (1,4,5), (2,3,5), and (2,4,5)`.
        
    -   Each column in the where clause can have only one condition. Identical conditions are treated as a single condition.
        
    
    The following example shows how to use the statement.
    
    ```
    BEGIN;
    CREATE TABLE test_update (
        pk1 INT,
        pk2 INT,
        col1 INT,
        col2 INT,
        PRIMARY KEY (pk1, pk2)
    );
    COMMIT;
    
    -- Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    
    UPDATE
        test_update
    SET
        col1 = 1,
        col2 = 2
    WHERE
        pk1 = 3
        AND pk2 = 4;
    
    -- Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    
    UPDATE
        test_update
    SET
        col1 = 1
    WHERE
        pk1 = 3
        AND pk2 = 4;
    
    -- Fixed Plan is supported (Hologres V1.3+, where clause with a non-PK field).
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    UPDATE test_update SET col1 = 1 WHERE pk1 = 3 AND pk2 = 4 AND col1 > 3;
    
    -- Fixed Plan is supported (Hologres V1.3+, where clause with a non-PK field and coalesce).
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    UPDATE test_update SET col1 = 1 WHERE pk1 = 3 AND pk2 = 4 AND coalesce(col1, 4) <> 1;
    
    -- Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    
    UPDATE
        test_update
    SET
        col1 = 1,
        col2 = 2
    WHERE
        pk1 IN (1, 2)
        AND pk2 = ANY ('{3,4}');
    
    -- Fixed Plan is supported (Hologres V1.3+, where clause with a non-PK field).
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    UPDATE test_update SET col1 = 1 WHERE pk1 IN (1, 2) AND pk2 = ANY('{3,4}') AND col1 > 3;
    
    -- pk1 has multiple filter conditions. Fixed Plan is not supported.
    UPDATE
        test_update
    SET
        col1 = 1,
        col2 = 2
    WHERE
        pk1 = 3
        AND pk1 = 4;
    
    -- pk1 has multiple filter conditions. Fixed Plan is not supported.
    UPDATE
        test_update
    SET
        col1 = 1,
        col2 = 2
    WHERE
        pk1 IN (1, 2)
        AND pk1 = 1;
    
    -- pk1 has multiple filter conditions, but the conditions are identical. Fixed Plan is supported.
    SET hg_experimental_enable_fixed_dispatcher_for_update = ON;
    
    UPDATE
        test_update
    SET
        col1 = 1,
        col2 = 2
    WHERE
        pk1 IN (1, 2)
        AND pk1 IN (1, 2)
        AND pk2 = 4;
    ```
    

## DELETE scenarios

-   DELETE statement
    
    The following DELETE clause can use Fixed Plan.
    
    ```
    SET hg_experimental_enable_fixed_dispatcher_for_delete = ON;
    
    DELETE FROM TABLE
    WHERE pk1 = ?
        AND pk2 = ?
        AND pk3 = ?;
    ```
    
-   Use DELETE scenarios
    
    The following conditions must be met for a DELETE operation to use Fixed Plan.
    
    -   You can delete from internal tables, but not from foreign tables. You can delete from child tables of partitioned tables, but not from parent tables. The table must have a primary key (PK).
        
    -   You must set the GUC parameter: `hg_experimental_enable_fixed_dispatcher_for_delete=on;`. Starting from Hologres V1.3.25, this parameter is deprecated. `DELETE` statements that meet the conditions use Fixed Plan by default. However, to delete multiple rows, you must set the GUC parameter: `set hg_experimental_enable_fixed_dispatcher_for_multi_values =on`.
        
    -   The `where` clause must contain all and only the PKs. Starting from Hologres V1.3, the last field in the `where` clause can be a non-PK field. For this non-PK field, the comparison operators `=, <>, >, >=, <, <=, IS NULL, and IS NOT NULL` and the `coalesce` function are supported.
        
    -   You can use `pk in (?,?,?) or pk = ANY()` to delete multiple records at a time. Example: `pk1 in (1,2) and pk2 = any('{3,4}') and pk3 = 5` deletes four records: `(1,3,5), (1,4,5), (2,3,5), and (2,4,5)`.
        
    -   Each column can have only one condition. Identical conditions are treated as a single condition.
        
    
    The following example shows how to use the statement.
    
    ```
    BEGIN;
    CREATE TABLE test_delete (
        pk1 INT,
        pk2 INT,
        col1 INT,
        col2 INT,
        PRIMARY KEY (pk1, pk2)
    );
    COMMIT;
    
    -- Fixed Plan is supported. For more scenarios, see the UPDATE examples.
    SET hg_experimental_enable_fixed_dispatcher_for_delete = ON;
    
    DELETE FROM test_delete
    WHERE pk1 = 1
        AND pk2 = 2;
    ```
    

## SELECT scenarios

-   SELECT statement
    
    The following SELECT clause can use Fixed Plan.
    
    ```
    SELECT
        col1,
        col2,
        col3,
    ...
    FROM
        TABLE
    WHERE
        pk1 = ?
        AND pk2 = ?
        AND pk3 = ?;
    ```
    
    -   You can select from internal tables, but not from foreign tables.
        
    -   You can select from child tables of partitioned tables, but not from parent tables.
        
    -   The table must have a primary key (PK).
        
    
-   Point query (key/value) scenarios
    
    The following conditions are supported for point query scenarios.
    
    -   The where clause must contain all and only the PKs.
        
    -   You can use `pk in (?,?,?) or pk = ANY()` to query multiple records at a time. Example: `pk1 in (1,2) and pk2 = any('{3,4}') and pk3 = 5` queries four records: `(1,3,5), (1,4,5), (2,3,5), and (2,4,5)`.
        
    -   Each column can have only one condition. Identical conditions are treated as a single condition.
        
    -   If there is a limit clause, the limit value must be `>0`.
        
    
    The following example shows how to use the statement.
    
    ```
    BEGIN;
    CREATE TABLE test_select (
        pk1 INT,
        pk2 INT,
        col1 INT,
        col2 INT,
        PRIMARY KEY (pk1, pk2)
    );
    CALL set_table_property ('test_select', 'orientation', 'row');
    COMMIT;
    
    -- Fixed Plan is supported.
    SELECT * FROM test_select WHERE pk1 = 1 AND pk2 = 2;
    ```
    
-   PrefixScan scenarios
    
    -   PrefixScan scenario clause
        
        A PrefixScan scenario is one where a table has a composite primary key, and the query uses only the first few columns of the primary key as filter conditions based on the left-most prefix matching principle. The query clause is as follows.
        
        ```
        SET hg_experimental_enable_fixed_dispatcher_for_scan = on;
        SELECT col1,col2,col3,... FROM TABLE WHERE pk1 = ? AND pk2 = ?;
        SELECT col1,col2,col3,... FROM TABLE WHERE pk1 = ? AND pk2 < ?;-- Starting from V1.1.48, range conditions are supported for the last PK column.
        SELECT col1,col2,col3,... FROM TABLE WHERE pk1 = ? AND pk2 BETWEEN ? AND ?;-- Starting from V1.1.48, range conditions are supported for the last PK column.                                
        ```
        
    -   Use PrefixScan
        
        The following conditions must be met to use PrefixScan.
        
        -   You must set the GUC parameter: `hg_experimental_enable_fixed_dispatcher_for_scan=on;`, and the instance must be Hologres V1.3.35 or later.
            
        -   The table must have a distribution key, and the `where` clause must include all distribution key columns.
            
        -   The `where` clause must contain only a prefix of the PK. Starting from Hologres V1.1.48, PrefixScan supports setting a range condition (with both an upper and a lower bound) for the last column of the primary key.
            
            **Note**
            
            Definition of Prefix: If the PK is `(pk1,pk2,pk3)`, then `(pk1),(pk1,pk2)` are prefixes.
            
        -   Only row-oriented tables (including row-column hybrid tables) support PrefixScan.
            
        -   Each column can have only one condition. Identical conditions are treated as a single condition.
            
        -   If there is a limit condition, the limit value must be greater than 0.
            
        
        **Note**
        
        PrefixScan returns all result rows at once. If the size of the result in bytes is larger than `hg_experimental_fixed_scan_bytesize_limit`, an error is reported: `scan result size larger than fixed scan size limit`. You can set the `hg_experimental_fixed_scan_bytesize_limit` parameter to a value that is more suitable for your scenario. The default value is 1048576, which is 1 MB.
        
        For example, assume the table PK is `(pk1,pk2,pk3,pk4)` and the distribution key is `pk1,pk3`.
        
        ```
        BEGIN;
        CREATE TABLE test_select_prefix (
            pk1 INT,
            pk2 INT,
            pk3 INT,
            pk4 INT,
            PRIMARY KEY (pk1, pk2, pk3, pk4)
        );
        CALL set_table_property ('test_select_prefix', 'orientation', 'row');
        CALL set_table_property ('test_select_prefix', 'distribution_key', 'pk1,pk3');
        COMMIT;
        
        -- Does not include all distribution keys. Cannot use Fixed Plan.
        SELECT * FROM test_select_prefix WHERE pk1 = ? AND pk2 = ?;
        -- Not a prefix of the PK. Cannot use Fixed Plan.
        SELECT * FROM test_select_prefix WHERE pk1 = ? AND pk3 = ?;
        
        -- Can use Fixed Plan.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = ON;
        
        SELECT * FROM test_select_prefix WHERE pk1 = ? AND pk2 = ? AND pk3 = ?;
        ```
        
        You can use `pk in (?,?,?)` or `pk = ANY()` to query multiple records at a time. The commands are as follows.
        
        ```
        pk1 IN (1,2) AND pk2 = 3 <=> scan(1,3),(2,3) two groups
        pk2 =any('{3,4}') AND pk1 IN (1,2) <=> scan(1,3),(1,4),(2,3),(2,4) four groups
        ```
        
    -   Example
        
        ```
        BEGIN;
        CREATE TABLE test_scan (
            pk1 INT,
            pk2 INT,
            pk3 INT,
            col1 INT,
            PRIMARY KEY (pk1, pk2, pk3)
        );
        CALL set_table_property ('test_scan', 'orientation', 'row');
        CALL set_table_property ('test_scan', 'distribution_key', 'pk1,pk2');
        COMMIT;
        
        INSERT INTO test_scan
            VALUES (1, 2, 3, 4);
        
        -- Fixed Plan is supported.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = ON;
        
        SELECT * FROM test_scan WHERE pk1 = 1 AND pk2 = 2;
        
        -- Fixed Plan is supported.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = ON;
        
        SELECT * FROM test_scan WHERE pk1 = 1 AND pk2 IN (2, 3);
        
        -- Fixed Plan is supported.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = ON;
        
        SELECT * FROM test_scan WHERE pk1 = ANY ('{3,4}') AND pk2 IN (2, 3);
        
        -- Fixed Plan is supported. The last PK column has a range condition. Supported in V1.1.48 and later.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = ON;
        
        SELECT * FROM test_scan WHERE pk1 = 1 AND pk2 = 1 AND pk3 > 1 AND pk3 < 4;
        
        -- Fixed Plan is supported. The last PK column has a range condition. Supported in V1.1.48 and later.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = ON;
        
        SELECT * FROM test_scan WHERE pk1 = 1 AND pk2 = 1 AND pk3 BETWEEN 1 AND 4;
        
        -- Does not include all distribution keys. Fixed Plan is not supported.
        SELECT * FROM test_scan WHERE pk1 = 1;
        
        -- Does not match the primary key prefix. Fixed Plan is not supported.
        SELECT * FROM test_scan WHERE pk2 = 2;
        ```
        
-   Paging scenarios
    
    Starting from Hologres V3.2, Fixed Plan supports paged queries in PrefixScan scenarios based on a partial primary key. The following examples show how to use this feature:
    
    **Note**
    
    -   By default, the results of a Prefix Scan are returned in ascending order of the primary key. In the following SQL statement, a PrefixScan is performed based on pk1 and pk2. The results are sorted in ascending order of pk3.
        
    -   To specify the return order, you can set the order of the columns corresponding to the [Clustering Key](/help/en/hologres/user-guide/clustering-key#section-26w-sn0-309) and specify the corresponding GUC parameter in the query. The results will be sorted by the clustering key. The fields of the clustering key must be identical to the primary key. In the following SQL statement, to return the results in descending order, you can manually specify the last item of the clustering key as `pk3:desc`.
        
    
    -   Sort paged results in ascending order
        
        ```
        -- Create a table.
        CREATE TABLE test_scan(
          pk1 INT, 
          pk2 INT, 
          pk3 INT, 
          col1 INT, 
          PRIMARY KEY(pk1, pk2, pk3)
        ) WITH (
          orientation = 'row',
          distribution_key = 'pk1,pk2',
          clustering_key = 'pk1:asc,pk2:asc,pk3:asc'
        );
        
        -- Write data.
        INSERT INTO test_scan VALUES (1,2,3,4),(1,2,5,6),(1,2,7,8);
        
        -- offset + limit is supported. Based on Prefix Scan, returns a specified number of rows starting from a specified row.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = on;
        -- By default, the results are sorted in ascending order of pk3.
        SELECT * FROM test_scan WHERE pk1 = 1 AND pk2 = 2 OFFSET 1 limit 2;
        ```
        
    -   Sort paged results in descending order
        
        ```
        -- Create a table.
        CREATE TABLE test_scan(
          pk1 INT, 
          pk2 INT, 
          pk3 INT, 
          col1 INT, 
          PRIMARY KEY(pk1, pk2, pk3)
        ) WITH (
          orientation = 'row',
          distribution_key = 'pk1,pk2',
          clustering_key = 'pk1:asc,pk2:asc,pk3:desc'
        );
        
        -- Write data.
        INSERT INTO test_scan VALUES (1,2,3,4),(1,2,5,6),(1,2,7,8);
        
        -- Enable the following two GUC parameters. The results will be sorted in descending order of pk3.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = on;
        SET hg_experimental_enable_fixed_dispatcher_for_clustering_key_scan = on;
        SELECT * FROM test_scan WHERE pk1 = 1 AND pk2 = 2 OFFSET 1 limit 2;
        ```
        

## COPY scenarios

Starting from Hologres 1.3.17, the `COPY` statement supports Fixed Plan. This feature is called Fixed Copy. For a comparison between COPY and Fixed Copy, see [Comparison of batch write modes](/help/en/hologres/use-cases/hologres-batch-write-best-practices#1b61aa68c4qlr).

For information about the parameter settings for Fixed Copy, see [COPY](/help/en/hologres/developer-reference/copy#section-pf1-5u6-yn6). The following example shows how to use the command.

```
COPY table_name (column0, column1, column2)
FROM
    STDIN WITH (
        format BINARY,
        stream_mode TRUE,
        on_conflict UPDATE);
```

Behavior for non-full column lists.

-   If the COPY operation writes to a subset of columns, it is a partial update. The behavior is as follows:
    
    ```
    CREATE TABLE t0 (
        id INT NOT NULL,
        name TEXT,
        age INT,
        PRIMARY KEY (id)
    );
    
    COPY t0 (id,
        name)
    FROM
        STDIN WITH (stream_mode TRUE, on_conflict UPDATE);
    
    -- The preceding COPY statement is equivalent to the following INSERT INTO statement.
    INSERT INTO t0 (id, name)
        VALUES (?, ?)
    ON CONFLICT (id)
        DO UPDATE SET id = excluded.id, name = excluded.name;
    ```
    
-   If the COPY operation writes to a subset of columns, and the columns not being written to have a default value attribute, the behavior is as follows:
    
    ```
    CREATE TABLE t0 (
        id INT NOT NULL,
        name TEXT,
        age INT DEFAULT 0,
        PRIMARY KEY (id)
    );
    
    COPY t0 (id,
        name)
    FROM
        STDIN WITH (stream_mode TRUE, on_conflict UPDATE);
    
    -- The preceding COPY statement is equivalent to the following INSERT INTO statement.
    -- If the id data does not exist, the age column is assigned the default value.
    -- If the id data already exists, the age column is not updated.
    INSERT INTO t0 (id, name, age)
        VALUES (?, ?, DEFAULT)
    ON CONFLICT (id)
        DO UPDATE SET id = excluded.id, name = excluded.name;
    ```
    

## Expression support in Fixed Plan

Starting from Hologres V3.2, Fixed Plan supports expressions in SQL statements for the following scenarios. For more information about PostgreSQL expressions, see [PostgreSQL Expressions](https://www.postgresql.org/docs/11/sql-expressions.html). Expressions are supported in all the following scenarios:

-   INSERT statement:
    
    -   Values clause.
        
    -   Insert On Conflict Do Update clause.
        
    -   Filter conditions in the Insert On Conflict Where clause.
        
    -   RETURNING clause.
        
-   SELECT statement
    
    SELECT fields.
    

### **Limits**

-   Only scalar expressions and functions are supported. Aggregate functions, window functions, and subqueries are not supported.
    
-   In an INSERT statement, expressions or functions in clauses other than the VALUES clause must be executable in HQE.
    
-   In a SELECT statement, only IMMUTABLE expressions or functions are supported, and the functions must support constant input parameters.
    
-   To use this feature, enable the following parameter:
    
    ```
    -- Enable at the session level.
    SET hg_experimental_enable_fixed_plan_expression = on;
    
    -- Enable at the DB level.
    ALTER DATABASE <db_name> SET hg_experimental_enable_fixed_plan_expression = on;
    ```
    

### **Examples**

-   Expressions are supported in the four sub-clauses of the INSERT statement
    
    ```
    -- Create a table.
    CREATE TABLE test_t (
        id INT PRIMARY KEY,
        col INT,
        ts TIMESTAMP
    )
    WITH (
        orientation = 'row',
        distribution_key = 'id'
    );
    
    -- Enable the GUC parameter.
    SET hg_experimental_enable_fixed_plan_expression = ON;
    
    -- The values clause contains an expression.
    INSERT INTO test_t VALUES (1, 1, now());
    
    -- The on conflict do update clause contains an expression.
    INSERT INTO test_t AS old 
        VALUES (1, 1, now())
        ON CONFLICT (id) 
        DO UPDATE SET col = excluded.col + old.col, ts = excluded.ts;
    
    -- The on conflict where clause contains an expression.
    INSERT INTO test_t AS old
        VALUES (1, 1, now())
        ON CONFLICT (id)
        DO UPDATE SET col = excluded.col + old.col, ts = excluded.ts
        WHERE excluded.ts > old.ts;
    
    -- The returning clause contains an expression.
    INSERT INTO test_t AS old
        VALUES (1, 1, now())
        ON CONFLICT (id)
        DO UPDATE SET col = excluded.col + old.col, ts = excluded.ts
        WHERE excluded.ts > old.ts
        RETURNING 2 * col, ts;
    ```
    
-   Expressions are supported in the SELECT fields of a SELECT statement
    
    -   Point query scenario based on all primary keys: This example shows how to extract a key value from a JSONB field.
        
        ```
        -- Create a table.
        CREATE TABLE test_t (
            id int PRIMARY KEY,
            ts TIMESTAMP NOT NULL,
            col JSONB
        )
        WITH (
            orientation = 'row',
            distribution_key = 'id'
        );
        
        -- The Select field contains an expression and supports Jsonb operators.
        SELECT
            (col ->> 'b')::int + (col ->> 'a')::int,
            date_trunc('day', ts)
        FROM
            test_t
        WHERE
            id = 1;
        ```
        
    -   Prefix scan scenario based on a partial primary key (Prefixscan).
        
        ```
        -- Create a table.
        CREATE TABLE test_t (
            id INT,
            ts TIMESTAMP NOT NULL,
            col JSONB,
            PRIMARY KEY (id, ts)
        )
        WITH (
            orientation = 'row',
            distribution_key = 'id'
        );
        
        -- Enable the GUC parameter.
        SET hg_experimental_enable_fixed_dispatcher_for_scan = TRUE;
        
        -- The Select field contains an expression.
        SELECT
            (col ->> 'b')::int + (col ->> 'a')::int,
            date_trunc('day', ts)
        FROM
            test_t
        WHERE
            id = 1;
        ```
        
-   For SELECT statements, if they contain non-IMMUTABLE scenarios or functions that do not support constant input parameters, they cannot be optimized by Fixed Plan.
    
    ```
    -- Create a table.
    CREATE TABLE test_t (
        id INT PRIMARY KEY,
        ts TIMESTAMP NOT NULL,
        col JSONB
    )
    WITH (
        orientation = 'row',
        distribution_key = 'id'
    );
    
    -- The random() function is not an immutable function expression. Fixed Plan is not supported.
    SELECT
        id + random()
    FROM
        test_t
    WHERE
        id = 1;
    
    -- The toString function does not support constant input parameters. Fixed Plan is not supported.
    SELECT
        toString (id)
    FROM
        test_t
    WHERE
        id = 1;
    ```
    

## Verify Fixed Plan

-   Update-type SQL statements, including INSERT, UPDATE, and DELETE operations, that are executed using Fixed Plan are displayed as the SDK type on the Real-time Import RPS panel in the console. Optimize real-time write operations such as INSERT, UPDATE, and DELETE to use Fixed Plan to improve data update efficiency. The following figure shows an example of the monitoring metrics: ![RPS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1701750761/p514374.png)
    
-   View the SQL execution plan by running the EXPLAIN command. If the returned execution plan contains a `FixedXXXNode`, Fixed Plan is triggered, as shown in the following figure. If an execution plan that contains a `FixedXXXNode` is not generated, check whether the conditions described in the preceding sections are met. ![验证fixedplan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8519158461/p402761.png)
    

## Performance tuning

If you have enabled Fixed Plan but still need to tune performance, you can use the following methods.

-   View the execution plan to identify performance bottlenecks in Fixed Plan: You can view the SQL execution plan (EXPLAIN) to analyze the time consumed in each phase of Fixed Plan and locate performance bottlenecks.
    
-   Hologres V1.1.49 and later are optimized for Fixed Plan point query scenarios, which can increase throughput by more than 30% for large-scale point queries. If needed, upgrade your instance to V1.1.49 or later.
    
-   Use reasonable batch sizes on the client. Holo Client automatically batches data. A batch size is the number of SQL commands executed at a time. In practice, performance is better when the batch size is 512 or a multiple of 512.
    

## **FAQ**

-   Issue 1: Connection error: `role/database does not exist.`
    
    -   Cause: The user or DB does not exist.
        
    -   Solution: Check the connection information and enter the correct username or DB name.
        
        Log on to the [Hologres management console](https://hologram.console.alibabacloud.com/#/instance), click **Actions** in the **Manage** column of the target instance, and then click **Database Management**. On the **Users** and **Database Authorization** pages, obtain and confirm the username or DB name.
        
-   Issue 2: An error is reported during data write: `the requested table name: xxx (id: xx, version: xx) mismatches the version of the table (id: xx, version: xx) from server.`
    
    -   Cause: The table metadata, such as adding a column, changed during the data write process. This caused the table version to change.
        
    -   Solution: Re-establish the connection. Fixed Plan will then fetch the new table metadata and perform the write operation.
