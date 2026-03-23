This topic describes how to use bitmap indexes in Hologres.

## Overview

In Hologres, the `bitmap_columns` property specifies a bitmap index. This property uses an index schema that is independent of data storage. You can use the bitmap\_columns property to accelerate equivalent comparisons based on a bitmap vector structure. Bitmap indexes can help filter data that equals a specified value in a stored file. Therefore, the bitmap\_columns property is applicable to point queries. The following syntax is used to set a bitmap index:

```
-- Syntax supported by Hologres V2.1 and later
CREATE TABLE <table_name> (...) WITH (bitmap_columns = '[<columnName>{:[on|off]}[,...]]');

-- Syntax supported by all Hologres versions
CREATE TABLE <table_name> (...);
CALL set_table_property('<table_name>', 'bitmap_columns', '[<columnName>{:[on|off]}[,...]]');
```

**Parameter**

**Description**

table\_name

The name of the table.

columnName

The name of the column.

on

Indicates that a bitmap index is created for the current column.

off

Indicates that no bitmap index is created for the current column.

## Usage notes

-   We recommend that you specify a bitmap index for an equivalent query column. This way, Hologres can quickly locate the number of the row where the data that meets the filter conditions resides. If you specify a bitmap index for columns with high cardinality, additional storage overheads occur. Columns with high cardinality indicate that the columns contain less duplicate data.
    
-   We recommend that you do not specify a bitmap index for each column in a table. This is because if you specify a bitmap index for each column in a table, additional storage overheads occur, and write performance is affected.
    
-   We recommend that you do not create bitmap indexes for columns whose JSON-formatted data is stored as the TEXT data type.
    

## Limits

-   Only column-oriented tables and row-column hybrid tables support bitmap indexes. Row-oriented tables do not support bitmap indexes.
    
-   The columns specified by the bitmap\_columns property can be null.
    
-   By default, all columns of the TEXT data type in a column-oriented table are specified as bitmap index columns.
    
-   You can execute the statement for modifying a bitmap index column outside of a transaction block. The modified column does not immediately take effect. Bitmap indexes are asynchronously built and deleted at the backend. For more information, see [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#concept-2463316).
    
-   You can set `bitmap_columns` only to `on` or `off`. The value `auto` is invalid for `bitmap_columns` in Hologres V2.0 and later.
    

## How it works

Bitmap indexes are different from distribution keys and clustering keys and are independent of data storage. After you specify a bitmap index for a column, Hologres generates a binary string for the value in the column. A binary string corresponds to a value in the bitmap index column. If a query hits the bitmap index, Hologres quickly locates the number of the row where the data resides. However, the bitmap index still results in overheads. Take note of the following items:

-   If columns with high cardinality exist in a table, after you specify a bitmap index for a column, Hologres generates a binary string for the value in the column. If many distinct values are involved, a sparse array is generated and a large amount of storage resources are consumed.
    
-   If you specify a bitmap index for each column in a wide table, when data is written, Hologres generates a binary string for each value in the columns of the table. This causes system overheads, which affect write performance.
    

To sum up, bitmap indexes can be used to reduce the data query time at the cost of storage. Bitmap indexes are cost-effective for columns in which data is evenly distributed.![位图索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2987526761/p530555.png)

The following example shows how to use the `EXPLAIN` statement to check whether the query hits the bitmap index. If the execution plan contains the `Bitmap Filter` operator, the query hits the bitmap index.

-   Syntax supported by Hologres V2.1 and later:
    
    ```
    CREATE TABLE bitmap_test (
        uid int NOT NULL,
        name text NOT NULL,
        gender text NOT NULL,
        class text NOT NULL,
        PRIMARY KEY (uid)
    )
    WITH (
        bitmap_columns = 'gender,class'
    );
    
    INSERT INTO bitmap_test VALUES 
    (1,'Bob','Male','Class 1'),
    (2,'Eric','Male','Class 3'),
    (3,'Ada','Female','Class 2'),
    (4,'Joyce','Female','Class 2'),
    (5,'Leo','Male','Class 2'),
    (6,'Steve','Male','Class 3'),
    (7,'Dora','Female','Class 1');
    
    explain SELECT * FROM bitmap_test where gender='Male' AND  class='Class 1';
    ```
    
-   Syntax supported by all Hologres versions:
    
    ```
    begin;
    create table bitmap_test (
      uid int not null,
      name text not null,
      gender text not null,
      class text not null,
      PRIMARY KEY (uid)
    );
    call set_table_property('bitmap_test', 'bitmap_columns', 'gender,class');
    commit;
    
    INSERT INTO bitmap_test VALUES
    (1,'Bob','Male','Class 1'),
    (2,'Eric','Male','Class 3'),
    (3,'Ada','Female','Class 2'),
    (4,'Joyce','Female','Class 2'),
    (5,'Leo','Male','Class 2'),
    (6,'Steve','Male','Class 3'),
    (7,'Dora','Female','Class 1');
    
    explain SELECT * FROM bitmap_test where gender='Male' AND  class='Class 1';
    ```
    

The execution plan contains the `Bitmap Filter` operator. This indicates that the query hits the bitmap index.

## Differences between bitmap indexes and clustering keys

-   Similarity:
    
    Bitmap indexes and clustering keys are used to filter data in files.
    
-   Differences:
    
    Bitmap indexes are used to locate data by using file numbers. Therefore, bitmap indexes are more suitable for equivalent queries. Clustering keys are used to sort data in files. Therefore, clustering keys are more suitable for range queries.
    
    Compared with bitmap indexes, clustering keys have a higher priority. If you specify the clustering key and the bitmap index for the same column, the query optimizer preferentially uses the clustering key to match the files. The following statements provide an example:
    
    -   Syntax supported by Hologres V2.1 and later:
        
        ```
        -- Specify the uid, class, and date columns as the clustering key and the text column as the bitmap index.
        
        CREATE TABLE ck_bit_test (
            uid int NOT NULL,
            name text NOT NULL,
            class text NOT NULL,
            date text NOT NULL,
            PRIMARY KEY (uid)
        )
        WITH (
            clustering_key = 'uid,class,date',
            bitmap_columns = 'name,class,date'
        );
        INSERT INTO ck_bit_test VALUES 
        (1,'Bob','1','2022-10-19'),
        (2,'Eric,'3','2022-10-19'),
        (3,'Ada','2','2022-10-20'),
        (4,'Joyce','2','2022-10-20'),
        (5,'Leo,'2','2022-10-18'),
        (6,'Steve','3','2022-10-17'),
        (7,'Dora','3','2022-10-20');
        ```
        
    -   Syntax supported by all Hologres versions:
        
        ```
        -- -- Specify the uid, class, and date columns as the clustering key and the text column as the bitmap index.
        begin;
        create table ck_bit_test (
          uid int not null,
          name text not null,
          class text not null,
          date text not null,
          PRIMARY KEY (uid)
        );
        call set_table_property('ck_bit_test', 'clustering_key', 'uid,class,date');
        call set_table_property('ck_bit_test', 'bitmap_columns', 'name,class,date');
        commit;
        
        INSERT INTO ck_bit_test VALUES
        (1,'Bob','1','2022-10-19'),
        (2,'Eric,'3','2022-10-19'),
        (3,'Ada','2','2022-10-20'),
        (4,'Joyce','2','2022-10-20'),
        (5,'Leo,'2','2022-10-18'),
        (6,'Steve','3','2022-10-17'),
        (7,'Dora','3','2022-10-20');
        ```
        
    
    -   If you query the `uid, class, and date` columns, the SQL query statement complies with the leftmost matching principle, and the query hits the clustering key. The clustering key instead of the bitmap index is used even in equivalent queries.
        
        ```
        SELECT * FROM clustering_test WHERE uid = '3' AND class ='2' AND date > '2022-10-17';
        ```
        
        The following figure shows that the execution plan contains the `Cluster Filter` operator instead of the `Bitmap Filter` operator. This indicates that the clustering key instead of the bitmap index is used in the query.![执行计划2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0429515761/p530585.png)
        
    -   If you query the `uid, class, and date` columns and the query of the `class` column is a range query, the leftmost matching principle does not work during the query after data in the range specified in the SQL statement is matched. In this case, the query of the `date` column cannot hit the clustering key because the query statement does not follow the leftmost matching principle. If you specify a bitmap index for the `date` column, the bitmap index is used in the query.
        
        ```
        SELECT * FROM clustering_test WHERE uid = '3' AND class >'2' AND date = '2022-10-17';
        ```
        
        The following figure shows that the execution plan contains both the `Cluster Filter` operator and the `Bitmap Filter` operator. This indicates that the clustering key is used in the query of the `uid and class` columns and that the bitmap index is used in the query of the `date` column.![执行计划3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0429515761/p530588.png)
        
    

## Examples

-   Syntax supported by Hologres V2.1 and later:
    
    ```
    CREATE TABLE tbl (
        a text NOT NULL,
        b text NOT NULL
    )
    WITH (
        bitmap_columns = 'a:on,b:off'
    );
    
    -- Modify the bitmap_columns property.
    ALTER TABLE tbl SET (bitmap_columns = 'a:off');-- The ALTER TABLE statement supports the modification of the bitmap_columns property only for all columns.
    ```
    
-   Syntax supported by all Hologres versions:
    
    ```
    // Create a table named tbl and set the bitmap index.
    begin; create table tbl (
      a text not null,
      b text not null
    );
    call set_table_property('tbl', 'bitmap_columns', 'a:on,b:off');
    commit;
    
    
    -- Modify the bitmap index.
    call set_table_property('tbl', 'bitmap_columns', 'a:off');-- Modify the bitmap_columns property for all columns. Delete the bitmap index specified for Column a.
    call update_table_property('tbl', 'bitmap_columns', 'b:off');-- Modify the bitmap_columns property for Column b. Delete the bitmap index specified for Column b and retain the bitmap index specified for Column a.
    ```
    

## References

For more information about the DDL statements for Hologres internal tables, see the following topics:

-   [CREATE TABLE](/help/en/hologres/developer-reference/create-tables)
    
-   [CREATE TABLE AS](/help/en/hologres/developer-reference/create-table-as)
    
-   [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like)
    
-   [ALTER TABLE](/help/en/hologres/developer-reference/alter-table)
    
-   [DROP TABLE](/help/en/hologres/developer-reference/drop-table)
