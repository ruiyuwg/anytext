This topic describes how to migrate data from MySQL to Hologres and explains the differences in query statements and functions after the migration. This information helps you complete your data migration more quickly.

## Data migration methods

The following table lists the available data migration methods, their applicable scenarios, and related documentation.

**Note**

For Extract, Transform, Load (ETL) processing, you can use Flink to read MySQL data and write it to Hologres.

**Migration Category**

**Scenarios**

**Documentation**

Offline sync for a single table

Use this method to sync data from a single MySQL table to Hologres offline.

[Sync a single MySQL table to Hologres offline](/help/en/hologres/user-guide/use-batch-sync-nodes-of-dataworks-to-synchronize-data-from-databases-to-hologres#task-1935426)

Real-time sync for a single table

Enable MySQL binary logging (Binlog) to sync data from a single table to Hologres in real time.

[Sync a single MySQL table to Hologres in real time](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-mysql-10#task-2013003)

Real-time sync for an entire database

Sync an entire MySQL database to Hologres in real time.

[Sync an entire MySQL database to Hologres in real time](/help/en/dataworks/user-guide/configure-and-manage-a-real-time-synchronization-node-1#task-2473945)

Sync solution

Data Integration supports sync solutions. You can configure sync rules to sync data to the target data source in real time in a single operation.

Sync solutions support batch syncing of multiple tables within a database and integrated full and incremental data sync. This process syncs the full data first, and then syncs incremental data in real time.

[Sync solution to Hologres](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-mysql-5#task-2013003)

## Data type mapping

Refer to the following table for the data type mappings when migrating from MySQL to Hologres. For more information about data types, see [Data type reference](/help/en/hologres/developer-reference/data-types#concept-1597919).

Note the following when mapping data types from MySQL to Hologres:

-   Hologres has three integer types: SMALLINT (2 bytes), INTEGER (4 bytes), and BIGINT (8 bytes). MySQL has five: TINYINT (1 byte), SMALLINT (2 bytes), MEDIUMINT (3 bytes), INT (4 bytes), and BIGINT (8 bytes). Map the MySQL type to a Hologres type with an equal or greater byte size.
    
-   Hologres does not support unsigned integers. When you map unsigned fields, you must account for potential overflow. If the values in the source field exceed the range of the target type, map the field to a larger integer type in Hologres.
    
-   Use the TEXT type in Hologres to replace TINYTEXT, TEXT, MEDIUMTEXT, and LONGTEXT in MySQL.
    
-   Floating-point types such as DECIMAL, NUMERIC, DOUBLE, and FLOAT can be mapped directly.
    
-   MySQL DATETIME, which does not have a time zone and uses the YYYY-MM-DD HH:MM:SS format, maps to `TIMESTAMPTZ` (TIMESTAMP WITH TIME ZONE) by default. To use a time zone-free TIMESTAMP type, you must specify it explicitly in your sync configuration or table creation statement.
    

**MySQL data type**

**Hologres data type after migration**

BIGINT

BIGINT

BIGINT(20) UNSIGNED

TEXT

`BINARY(n)`

BYTEA

BIT

BOOLEAN

`CHAR(n)`, `CHARACTER(n)`

`CHAR(n)`, `CHARACTER(n)`

DATE

DATE

DATETIME

`TIMESTAMPTZ (TIMESTAMP WITH TIME ZONE)`

`DECIMAL(p,s)`, `DEC(p,s)`

`DECIMAL(p,s)`, `DEC(p,s)`

DOUBLE

DOUBLE PRECISION

FLOAT

REAL

INT, INTEGER

INT, INTEGER

MEDIUMINT

INTEGER

`NUMERIC(p,s)`

`NUMERIC(p,s)`

SMALLINT

SMALLINT

TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB

BYTEA

TINYINT

SMALLINT

TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT

TEXT

TIME

`TIME [WITHOUT TIME ZONE]`

TIMESTAMP

`TIMESTAMP [WITH TIME ZONE]`

`VARBINARY(n)`, `VARBINARY(max)`

BYTEA

`VARCHAR(n)`

`VARCHAR(n)`

`VARCHAR(max)`

TEXT

## Query syntax

The query syntax for MySQL and Hologres differs in the following aspects.

-   **Quotation marks**
    
    Hologres is case-insensitive. To enforce case sensitivity, you must wrap identifiers in double quotation marks ("").
    
    For example, replace ``select `A` from b`` with `select "A" from b`.
    
-   **Filter conditions**
    
    Hologres requires exact type matching in filter conditions and does not perform implicit type conversion by default. For example:
    
    -   Sample code:
        
        ```
        SELECT * FROM business_module WHERE ds = 20210329;
        ```
        
    -   Problem:
        
        If the ds field is of the TEXT type in Hologres and 20210329 is an INTEGER value, this query returns a type mismatch error:
        
        ```
        operator does not exist: text = integer;
        ```
        
    -   Solution:
        
        You can create custom type casts in Hologres, as shown in the following example:
        
        ```
        CREATE CAST (TEXT AS INTEGER) WITH INOUT AS IMPLICIT; 
        CREATE CAST (TEXT AS BIGINT) WITH INOUT AS IMPLICIT; 
        CREATE CAST (TEXT AS DECIMAL) WITH INOUT AS IMPLICIT; 
        CREATE CAST (TEXT AS TIMESTAMP) WITH INOUT AS IMPLICIT; 
        CREATE CAST (NUMERIC AS TEXT) WITH INOUT AS IMPLICIT;
        ```
        
-   **Pagination**
    
    MySQL uses the `limit 0,10` syntax. In Hologres, you must use the standard `offset 0 limit 10` syntax.
    
-   **Sorting**
    
    MySQL uses `desc nulls first asc nulls first` for sorting. The default sorting behavior in Hologres is `desc nulls first asc nulls last`.
    
    To ensure consistent behavior, you must manually adjust your Hologres queries to use `order by XXX desc nulls last`.
    
-   **Grouping**
    
    Hologres does not support GROUP BY on non-exact types such as FLOAT or DOUBLE by default. To resolve this, you can convert these columns to the DECIMAL type or configure the following parameter.
    
    **Note**
    
    This feature requires Hologres V0.10 or later. If your instance runs an earlier version, join the Hologres DingTalk group to contact technical support for an upgrade. For more information about obtaining support, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
    ```
    set hg_experimental_enable_double_equivalent=on;--session level
    alter database XXX set hg_experimental_enable_double_equivalent=on;--database-wide
    ```
    
-   **Union**
    
    The UNION operator requires that the columns in the queries have matching data types. For example:
    
    -   Sample code:
        
        ```
        SELECT project_id FROM tableA union ALL select project_id from tableB;
        ```
        
    -   Problem:
        
        If the project\_id column in tableA is of the BIGINT type and the project\_id column in tableB is of the TEXT type, MySQL performs an implicit type conversion before returning the query results. However, executing this SQL statement in Hologres causes an error. The following error message is returned:
        
        ```
        UNION types bigint and text cannot be matched;
        ```
        
    -   Solution:
        
        You must explicitly cast the data types in UNION operations:
        
        ```
        SELECT project_id FROM tableA union ALL select cast(project_id as bigint) from tableB; 
        ```
        

## Function usage

Hologres supports most PostgreSQL-compatible functions. For more information, see [PostgreSQL-compatible functions](/help/en/hologres/query-the-storage-sizes-of-tables-and-databases#concept-2036585). Note the following differences between the functions in MySQL and Hologres.

-   **Division by zero**
    
    -   Problem:
        
        In MySQL, a division by 0 operation returns NULL. In Hologres, the same operation returns an error:
        
        ```
        ERROR: division by zero;
        ```
        
    -   Solution:
        
        -   ```
            select a / b from table;
            convert to select a / NULLIF(b,0) from table;
            ```
            
        -   In Hologres V1.3.21 and later, you can set the following Grand Unified Configuration (GUC) parameter to prevent division by `0` from causing an error. If you encounter issues, see [Common Upgrade Preparation Failure Errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group to provide feedback. For more information about obtaining support, see [How do I obtain additional online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
            
            ```
            --Create the MySQL compatibility extension (requires Superuser; run once per database)
            create extension if not exists mysql_compatible;
            --Enable division-by-zero tolerance (allows DQL queries to proceed without error)
            set mysql_compatible.enable = on;
            ```
            
            Examples:
            
            ```
            --Create the MySQL compatibility extension (requires Superuser; run once per database)
            create extension if not exists mysql_compatible;
            
            --Scenario 1: Constant division of same type
            set mysql_compatible.enable = on;
            select 1/0;
            
            
            --Scenario 2: Constant division with type conversion
            set mysql_compatible.enable = on;
            select 1.0/0;
            
            --Scenario 3: Dividend is a column variable
            set mysql_compatible.enable = on;
            select sum(c) / 0 from (select generate_series(1,100) as c) as t;
            
            
            --Scenario 4: Divisor is a column variable
            set mysql_compatible.enable = on;
            select max(c)/sum(d) from (select generate_series(1,101) as c, generate_series(-50,50) as d) as t;
            
            --Scenario 5: Tolerate division by zero during INSERT
            create table if not exists test_insert_divide_by_zero(c1 int);
            set mysql_compatible.strict_mode = off;
            set mysql_compatible.enable = on;
            insert into test_insert_divide_by_zero select 100 / 0.0;
            ```
            
-   **Integer division**
    
    -   Problem:
        
        When you divide two integers that result in a remainder, MySQL returns a decimal value, whereas Hologres returns an integer and truncates the remainder.
        
        For example, 5 divided by 2 returns 2.5 in MySQL but 2 in Hologres.
        
    -   Solution:
        
        To obtain the same result as in MySQL, you must explicitly cast one of the integers to a floating-point type:
        
        ```
        select 1/2::FLOAT;
        ```
        
-   **IF function**
    
    Hologres does not support the IF function. You must use the CASE WHEN expression instead.
    
-   **IFNULL function**
    
    You can replace the MySQL IFNULL function with the `COALESCE(x,y)` function in Hologres.
    
-   **LENGTH function**
    
    You can replace the MySQL LENGTH function with the `CHAR_LENGTH(string)` function in Hologres.
    

## **FAQ**

### **Inconsistent COUNT DISTINCT results for multiple columns between MySQL and Hologres**

-   Root cause
    
    In MySQL, the `count(distinct column_1, column_2, ...)` expression excludes rows where any of the specified columns contain a NULL value.
    
    In Hologres, the `count(distinct(column_1, column_2, ...))` expression includes rows even if some of the specified columns contain NULL values.
    
-   Solution
    
    To replicate the MySQL behavior in Hologres, you can rewrite the query as `count(distinct column_1 || column_2 || ...)`.
    
-   Example
    
    ```
    CREATE TABLE count_distinct_test (
      a text,
      b text
    );
    
    INSERT INTO count_distinct_test VALUES ('a', 'b'), ('a', NULL), (NULL, 'b'), ('a', 'b');
    
    -- Hologres multi-column COUNT DISTINCT
    SELECT count(distinct(a, b)::text) FROM count_distinct_test;
    
    -- Result
     count 
    -------
         3
    (1 row)
    
    -- Hologres query matching MySQL behavior
    SELECT count(distinct a||b) FROM count_distinct_test;
    
    -- Result
     count 
    -------
         1
    (1 row)
    ```
