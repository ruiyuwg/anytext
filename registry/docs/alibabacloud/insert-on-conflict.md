This topic describes how to use the INSERT ON CONFLICT statement in Hologres.

## Scenarios

The `INSERT ON CONFLICT` command is suitable for scenarios where you import data using SQL statements.

When you write data using Data Integration or Flink, you can configure the following settings to update or skip rows that have duplicate primary keys:

-   Import data using the Data Integration feature of DataWorks.
    
    Data Integration has a built-in `INSERT ON CONFLICT` feature. For more information about how this feature works, see [Hologres Writer](/help/en/dataworks/hologres-writer#concept-2446171). You can configure the following settings:
    
    -   For offline data synchronization, set the **Write Conflict Policy** to **Ignore** or **Replace**.
        
    -   For real-time data synchronization, you can set the **Write Conflict Policy** to **Ignore** or **Replace**.
        
    
    **Note**
    
    To update data during synchronization, you must set a primary key for the Hologres table.
    
-   Write data using Flink.
    
    When you write data using Flink, the default **write conflict policy** is `InsertOrIgnore`. This policy requires you to set a primary key for the Hologres table. It then retains the first data entry and ignores all subsequent duplicate entries. If you use the `ctas` syntax, the default **write conflict policy** is `InsertOrUpdate`, which replaces existing data.
    

## Command introduction

The INSERT ON CONFLICT statement inserts a row of data into specified columns. If a row with a duplicate primary key exists, the statement either updates the existing row or skips the insertion, which provides UPSERT (INSERT or UPDATE) functionality. The syntax of the `INSERT ON CONFLICT` statement is as follows.

```
INSERT INTO <table_name> [ AS <alias> ] [ ( <column_name> [, ...] ) ]
    {  VALUES ( { <expression> } [, ...] ) [, ...] | <query> }
    [ ON CONFLICT [ conflict_target ] conflict_action ]

where conflict_target is pk

    ON CONSTRAINT constraint_name

and conflict_action is one of:

    DO NOTHING
    DO UPDATE SET { <column_name> = { <expression> } |
                    ( <column_name> [, ...] ) = ( { <expression> } [, ...] ) |
                  } [, ...]
              [ WHERE condition ]
```

The following table describes the parameters.

**Parameter**

**Description**

table\_name

The name of the destination table into which data is inserted.

alias

An alias. This is an alternative name for the destination table.

column\_name

The name of a target column in the destination table.

DO NOTHING

InsertOrIgnore. If a row with a duplicate primary key exists when you insert a row into specified columns, the insertion is skipped.

DO UPDATE

InsertOrUpdate. If a row with a duplicate primary key exists when you insert a row into specified columns, the existing row is updated.

The following cases exist:

-   Update all columns: The data in all columns is updated. This is a full-row update.
    
-   Update specific columns: Only specified columns are updated. Missing columns are not updated.
    
-   To implement an InsertOrReplace operation where missing columns are filled with null values, you must manually pass null in the values. For more information, see the examples in this topic.
    

**Important**

-   If a column has a default value, DO UPDATE does not update that column. This results in lower performance.
    
-   To implement an InsertOrReplace operation using an SQL statement (INSERT ON CONFLICT) where missing columns are filled with `null`, you must pass `null` in the `insert` values. If you use a tool such as Flink or Data Integration and select InsertOrReplace, `null` values are automatically added for missing columns.
    

expression

The expression to be executed for the corresponding column. You can set the expression by referring to PostgreSQL.

Common expressions include `b=excluded.b` or the simplified (a, b, c) = ROW (excluded.\*). The left side of the equation specifies the columns to update. The right side specifies the insertion expression, which is the value from the VALUES or `SELECT` clause. The excluded keyword is an alias for the row proposed for insertion, not an alias for the source table. For example, consider `column_name = excluded.column_name`. column\_name is the name of the column in the destination table. If column\_name is the Nth column of the destination table, excluded.column\_name refers to the Nth column of the proposed insertion row. If you use excluded.\*, all columns from the proposed insertion row are selected. The order of columns must be the same as the order in the Data Definition Language (DDL) of the destination table.

## How it works

The INSERT ON CONFLICT feature works in the same way as the UPDATE statement. For more information, see [UPDATE](/help/en/hologres/developer-reference/update#concept-2426091). The update process varies slightly for different table storage formats, such as row-oriented, column-oriented, and row-column hybrid storage. This causes performance differences when you update tables that use different storage formats. Based on your business requirements, INSERT ON CONFLICT can be categorized as `InsertOrIgnore`, `InsertOrReplace`, or `InsertOrUpdate`. The following table describes the differences.

**Update mode**

**Description**

InsertOrIgnore

Ignores updates during writes. If the sink table has a primary key and a duplicate primary key is encountered during a real-time write, the later data is discarded. This is implemented using `insert on conflict do nothing`.

InsertOrUpdate

Updates data during writes. If the sink table has a primary key and a duplicate primary key is encountered during a real-time write, the data is updated based on the primary key. This mode includes full-row updates and partial-column updates. In a partial-column update, if an incoming row does not contain all columns, the missing columns are not updated. This is implemented using `insert on conflict do update`.

InsertOrReplace

Overwrites data during writes. If the sink table has a primary key and a duplicate primary key is encountered during a real-time write, the data is updated based on the primary key. If an incoming row does not contain all columns, the missing columns are filled with null values. This is implemented using `insert on conflict do update` and manually providing null values.

Based on how the UPDATE statement works, the update performance in different modes varies based on the table storage format:

-   The performance of different write modes for column-oriented tables is ranked as follows:
    
    -   Performance is highest if the sink table has no primary key.
        
    -   If the sink table has a primary key: `InsertOrIgnore > InsertOrReplace >= InsertOrUpdate (full row) > InsertOrUpdate (partial column)`.
        
-   The performance of different write modes for row-oriented tables is ranked as follows:
    
    `InsertOrReplace = InsertOrUpdate (full row) >= InsertOrUpdate (partial column) >= InsertOrIgnore`.
    

## Limits

-   The condition in the `INSERT ON CONFLICT` statement must include all primary keys.
    
-   When Hologres High-QPS Engine (HQE) executes an INSERT ON CONFLICT statement, it does not guarantee the order of operations. Therefore, you cannot achieve keep-first or keep-last semantics. The behavior is keep-any. In practice, if the data source contains duplicate primary keys that need to be removed, you can use keep-last semantics by running the following command:
    
    ```
    -- Keep the last of the duplicate rows.
    set hg_experimental_affect_row_multiple_times_keep_last = on;
    ```
    

## Examples

-   Example of how to use the `INSERT ON CONFLICT` statement:
    
    **Note**
    
    Starting from version 2.1.17, Hologres supports Serverless Computing. For large-scale offline imports, large ETL jobs, and high-volume foreign table queries, Serverless Computing uses extra serverless resources instead of your instance's resources. This improves stability and reduces out-of-memory (OOM) errors. You pay only for the tasks you run. For more information, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/). For usage instructions, see [Serverless Computing User Guide](/help/en/hologres/user-guide/serverless-computing/).
    
    1.  Prepare a table and data:
        
        ```
        begin ;
        create table test1 (
            a int NOT NULL PRIMARY KEY,
            b int,
            c int
        );
        commit ;
        
        insert into test1 values (1,2,3);
        ```
        
    2.  View examples for different scenarios:
        
        **Note**
        
        The following scenario examples are independent of each other. They are not sequential and are all based on the table and data created in the preceding step.
        
        -   Scenario 1: Implement an InsertOrIgnore operation. If a duplicate primary key exists, the row is not updated.
            
            ```
            INSERT INTO test1 (a, b, c) VALUES (1, 1, 1)
            ON CONFLICT (a)
            DO NOTHING;
            
            -- The data in the test1 table after the update is:
            a	b	c
            1	2	3
            ```
            
        -   Scenario 2: Implement an InsertOrUpdate operation for a full-row update. You can use one of the following methods:
            
            -   Method 1: List all columns in the `SET..EXCLUDED` clause.
                
                ```
                INSERT INTO test1 (a, b, c) VALUES (1, 1, 1)
                ON CONFLICT (a)
                DO UPDATE SET b = EXCLUDED.b, c = EXCLUDED.c;
                
                -- The data in the test1 table after the update is:
                a	b	c
                1	1	1
                ```
                
            -   Method 2: Use `ROW(EXCLUDED.*)` to update all columns.
                
                ```
                INSERT INTO test1 (a, b, c)VALUES (1, 1, 1)
                ON CONFLICT (a)
                DO UPDATE SET (a,b,c) = ROW(EXCLUDED.*);
                
                -- The data in the test1 table after the update is:
                a	b	c
                1	1	1
                ```
                
            
        -   Scenario 3: Implement an InsertOrUpdate operation for a partial-column update. Only specified columns are updated, and missing columns are not updated.
            
            ```
            -- To perform a partial-column update, list the columns that you want to update after SET.
            INSERT INTO test1 (a, b, c) VALUES (1, 1, 1)
            ON CONFLICT (a)
            DO UPDATE SET b = EXCLUDED.b;
            
            -- Column c in the table is not updated. The data in the test1 table after the update is:
            a	b	c
            1	1	3
            ```
            
        -   Scenario 4: Implement an InsertOrReplace operation. This overwrites the entire row. If columns are missing, they are filled with null values.
            
            ```
            -- To implement an InsertOrReplace operation where missing columns are filled with null, you must manually provide null in the insert values.
            INSERT INTO test1 (a, b,c) VALUES (1, 1,null)
            ON CONFLICT (a)
            DO UPDATE SET b = EXCLUDED.b,c = EXCLUDED.c;
            
            -- The data in the test1 table after the update is:
            a	b	c
            1	1	\N
            ```
            
        -   Scenario 5: Update data in the test1 table from another table named test2.
            
            ```
            -- Prepare the test2 table and data.
            CREATE TABLE test2 (
                d int NOT NULL PRIMARY KEY,
                e int,
                f int
            );
            INSERT INTO test2 VALUES (1, 5, 6);
            
            
            -- Replace rows in the test1 table with rows from the test2 table that have the same primary key.
            INSERT INTO test1 (a, b, c) SELECT d,e,f FROM test2 ON CONFLICT (a) DO UPDATE SET
            (a,b,c) = ROW (excluded.*);
            
            -- The data in the test1 table after the update is:
            a	b	c
            1	5	6
            
            -- Replace rows in the test1 table with rows from the test2 table that have the same primary key, but adjust the update mapping. Column e of test2 updates column c, and column f of test2 updates column b.
            INSERT INTO test1 (a, b, c) SELECT d,e,f FROM test2 ON CONFLICT (a) DO UPDATE SET
            (a,c,b) = ROW (excluded.*);
            -- The data in the test1 table after the update is:       
            a	b	c
            1	6	5
            ```
            
        
    
-   Optimization for the `INSERT ON CONFLICT` statement on row-oriented tables:
    
    Hologres optimizes updates for row-oriented tables. For the best performance, keep the order of columns in the UPDATE clause consistent with the order in the INSERT clause and perform a full-row update.
    
    ```
    INSERT INTO test1 (a, b, c) 
    SELECT
        d,e,f
    FROM
        test2
    ON CONFLICT (a)
        DO UPDATE SET
            a = excluded.a,
            b = excluded.b,
            c = excluded.c;
            
    INSERT INTO test1 (a, b, c)
    SELECT d,e,f FROM test2
    ON CONFLICT (a)
    DO UPDATE SET(a,b,c) = ROW (excluded.*)
    ```
    

## Common errors

-   Symptom
    
    One of the following three errors occurs when you execute the `INSERT ON CONFLICT` statement on a data source:
    
    -   Error 1: `duplicate key value violates unique constraint`.
        
    -   Error 2: `Update row with Key (xxx)=(yyy) multiple times`.
        
    -   Error 3 (OOM issue): `Total memory used by all existing queries exceeded memory limitation`.
        
    
-   Cause 1: The data source contains duplicate data.
    
    Hologres is compatible with PostgreSQL and uses standard PostgreSQL syntax. According to standard PostgreSQL semantics, the data source cannot contain duplicate data when you execute an `INSERT ON CONFLICT` statement. If the data source contains duplicate data, one of the preceding errors occurs.
    
    **Note**
    
    Duplicate data in the data source means that the data to be inserted contains duplicate rows, not that the data to be inserted has duplicates in the destination table.
    
    The following example shows an `INSERT ON CONFLICT` statement where the data to be inserted contains duplicate rows:
    
    ```
    INSERT INTO test1 VALUES (1, 2, 3), (1, 2, 3)
    ON CONFLICT (a) 
    DO UPDATE SET (a, b, c) = ROW (excluded.*);
    ```
    
    Solution:
    
    If the data source contains duplicate data, you can configure the following parameter to keep the last of the duplicate rows:
    
    ```
    set hg_experimental_affect_row_multiple_times_keep_last = on;
    ```
    
-   Cause 2: The data source contains duplicate data because the time to live (TTL) has expired.
    
    A table in the data source has a time to live (TTL) configured. Some data in the table has exceeded its TTL. Because the TTL cleanup is not instantaneous, the expired data might not be cleared immediately. This can lead to duplicate primary key (PK) data during an import, which causes an error.
    
    Solution:
    
    Starting from Hologres V1.3.23, you can use the following command to quickly fix duplicate PK data caused by an expired TTL. When you run this command, the system removes duplicate PK data from the table. The default cleanup policy is Keep Last, which keeps the last written row among the duplicates and removes the others.
    
    **Note**
    
    -   In principle, PKs should not be duplicated. Therefore, this command cleans up only duplicate PKs caused by an expired TTL.
        
    -   This command is available only in Hologres V1.3.23 and later. If your instance is an earlier version, you must upgrade your instance.
        
    
    ```
    call public.hg_remove_duplicated_pk('<schema>.<table_name>');
    ```
    
    Example: Assume that you have two tables. `tbl_1` is the destination table, and `tbl_2` is the source table with a TTL of `300s`. You want to update `tbl_1` with all data from `tbl_2`. After the TTL expires, duplicate primary keys appear in `tbl_2`, which causes an error.
    
    ```
    
    BEGIN;
    CREATE TABLE tbl_1 (
      a int NOT NULL PRIMARY KEY,
      b int,
      c int
    );
    CREATE TABLE tbl_2 (
      d int NOT NULL PRIMARY KEY,
      e int,
      f int
    );
    CALL set_table_property('tbl_2', 'time_to_live_in_seconds', '300'); 
    COMMIT;
    
    INSERT INTO tbl_1 VALUES (1, 1, 1), (2, 3, 4);
    INSERT INTO tbl_2 VALUES (1, 5, 6);
    -- After 300s, insert data into tbl_2 again.
    INSERT INTO tbl_2 VALUES (1, 3, 6);
    
    -- Replace rows in tbl_1 with rows from tbl_2 that have the same primary key. The update fails because of duplicate PKs caused by the expired TTL.
    INSERT INTO tbl_1 (a, b, c)
    SELECT
        d,e,f
    FROM
        tbl_2
    ON CONFLICT (a)
        DO UPDATE SET
            (a,b,c) = ROW (excluded.*);
    -- Error cause: ERROR: internal error: Duplicate keys detected when building hash table.
    
    -- Use the command to clean up duplicate PK data in tbl_2. The policy is keep last.
    call public.hg_remove_duplicated_pk('tbl_2');
    
    -- Import the data into tbl_1 again. The data is imported successfully.
    ```
    
-   Cause 3: The instance has insufficient memory resources to support the large-volume write task.
    
    Solution:
    
    -   Use the Serverless Computing feature of Hologres to run the large-volume write task. Hologres V2.1.17 and later support Serverless Computing. You can use this feature for large-scale offline data imports, large ETL jobs, and large-volume queries on foreign tables. Serverless Computing uses additional serverless resources to run these tasks instead of using your instance's resources. This eliminates the need to reserve extra computing resources for your instance. This approach significantly improves instance stability and reduces the probability of OOM errors. You are charged only for the individual tasks. For more information, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/) and [Guide to Serverless Computing](/help/en/hologres/user-guide/serverless-computing/).
        
    -   Follow the methods described in [Troubleshoot common OOM errors](/help/en/hologres/user-guide/faq-about-oom).
