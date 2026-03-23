You can execute the INSERT statement to insert new rows into a specific table. This topic describes how to use the INSERT statement in Hologres.

## Syntax

You can insert one or more rows specified by value expressions, or zero or more rows resulting from a query into a table in Hologres. The INSERT statement uses the following syntax:

```
INSERT INTO <schema>.<table> [( <column> [, ...] )]
   VALUES ( {<expression>}  [, ...] )
   [, ...] | <query>}
```

The following table describes the parameters in the INSERT statement.

**Parameter**

**Description**

schema

The name of the schema in which the table resides.

table

The name of the table into which you want to insert data.

If you use Realtime Compute for Apache Flink to write data to Hologres, you can specify a parent table. The data is automatically written to its child tables. In Hologres V1.3 and later, you can execute the INSERT statement that complies with the syntax for using a fixed plan to directly write data to the parent table. For more information, see [Accelerate SQL execution with Fixed Plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947).

column

The name of the column into which you want to insert data.

You can qualify the name of the column by using a subfield name or an array subscript. If you insert data only into some fields of a composite column, the other fields are left null.

expression

The expression or value that is assigned to the corresponding column.

query

The SELECT statement that provides the rows to be inserted. For more information about the syntax of the SELECT statement, see [SELECT](/help/en/hologres/developer-reference/select#concept-1663833).

The INSERT statement supports only the following data write methods:

-   `insert into values`:
    
    ```
    INSERT INTO holo2mysqltest (cate_id, cate_name) VALUES
        (3, 'true'),
        (3, 'fale'),
        (3, 'trxxue'),
        (3, 'x'),
        (4, 'The Dinner Game');
    ```
    
-   insert into select:
    
    ```
    insert into test2
    select * from test1;
    ```
    

## How it works

The storage models of Hologres tables include row-oriented storage, column-oriented storage, and row-column hybrid storage. The three storage models share the same write principle.

The INSERT statement is executed to write data to write-ahead logs (WAL) in Append Only mode and update the data to the memory table in real time. This ensures that data is visible in real time. However, the memory table has a fixed size. If the memory table is full, Hologres switches to a new memory table, and triggers the asynchronous flush process at the backend to gradually flush the data to files. The files are stored in Pangu. During the flush process, a large number of small files are generated. Hologres merges these small files and sorts them at the backend. This process is called compaction. To accelerate the data write process, Hologres writes the data at the backend, and then compresses and sorts the data when the asynchronous compaction is performed. Therefore, the storage usage increases significantly during the data write process. After the data write process and the compaction process are complete, the storage usage decreases.

Row-oriented tables, column-oriented tables, and row-column hybrid tables use different index formats for the memory table in the memory and use different processes to flush data to files.

-   Row-oriented tables: Data is flushed to row-oriented files in the SST format.
    
-   Column-oriented tables: Data is flushed to column-oriented files in the ORC format.
    
-   Row-column hybrid tables: Data is flushed to row-oriented files in the SST format and column-oriented files in the ORC format. During the flush process, data consistency is ensured. A success message is returned only if the data is flushed to both row-oriented files and column-oriented files. If row-column hybrid storage is used, data is stored in duplicate. This increases storage overheads.
    

## Limits

-   If you insert data into a parent table, make sure that the data is inserted into a child table of the parent table. The value of the partitioned field in the data to be inserted must be the same as the partitioned field value of the child table.
    
-   You can customize the order in which the names of the columns are listed. If you use the `insert into select` method to insert data, make sure that the data types of the required columns are consistent with those of the columns that you query.
    

## Examples

-   Insert data to an internal table.
    
    ```
    CREATE TABLE  holotest (
        a int,
        b bigint,
        c bool,
        e decimal(38,10),
        f text,
        g timestamp,
        h timestamptz,
        i jsonb,
        j int[]
    );
    
    INSERT INTO holotest VALUES (1,9223372036854775807,false,123.123456789123,'john','2020-01-01 01:01:01.123456',
    '2004-10-19 10:23:54+08','{"a":2}',ARRAY[1, 2, 3, 4]);
    ```
    
-   Insert data of table a to table b.
    
    ```
    CREATE TABLE holotest2(
        a int,
        b bigint,
        c bool);
    
    INSERT INTO holotest2 (a,b,c) SELECT a,b,c FROM holotest;
    ```
    
-   Insert data to a partitioned table.
    
    ```
    -- Create a parent table that does not have a primary key and its child tables in the public schema.
    begin;
    create table public.hologres_parent(
      a text,
      b int,
      c timestamp,
      d text
    )
      partition by list(a);
    call set_table_property('public.hologres_parent', 'orientation', 'column');
    
    create table public.hologres_2022 partition of public.hologres_parent for values in('2022');
    
    create table public.hologres_2021 partition of public.hologres_parent for values in('2021');
    
    create table public.hologres_2020 partition of public.hologres_parent for values in('2020');
    commit;
    
    -- Insert data to a child table.
    INSERT INTO public.hologres_2022 values('2022',1,now(),'a')
    ```
    

## FAQ

-   Question 1: Why does the monitoring metric storage usage increase significantly when I write data but then decrease after the data is written?
    
    Based on the data write principle, to accelerate the data write process, Hologres writes the data at the backend, and then compresses and sorts the data when the asynchronous compaction is performed. Therefore, the storage usage increases significantly during the data write process. After the data write process and the compaction process are complete, the storage usage decreases.
    
-   Question 2: Why does the latency increase if multiple `INSERT` statements are executed in parallel on the same table?
    
    If the `INSERT` statement is executed on a table without using a fixed plan, the table is locked. Parallel execution of `INSERT` statements increases the lock wait duration, resulting in increased latency.
    
-   Question 3: Why is the error message `ERROR: no partition of relation "<table_name>" found for row` returned when I write data to a parent table?
    
    -   Problem description: The error message `ERROR: no partition of relation "<table_name>" found for row` is returned when I write data to a parent table.
        
    -   Cause: No child table exists.
        
    -   Solution: Before you write data, you must create a child table by executing the following statement:
        
        ```
        create table <child_table_name> partition of <parent_table_name> for values in (<value>);
        ```
        
-   Question 4: Why is the error message `Currently inserting into parent table is not supported` returned when I import data?
    
    -   Problem description: The error message `Currently inserting into parent table is not supported` is returned when I import data.
        
    -   Cause: The table to which you want to insert data is a parent table. Hologres does not support you to write data to a parent table.
        
    -   Solution: Create a child table to write data to the child table.
