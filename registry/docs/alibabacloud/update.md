You can execute the UPDATE statement to update the data of rows in specified columns that meet the specified condition in a table. This topic describes how to use the UPDATE statement in Hologres.

## Syntax

The UPDATE statement uses the following syntax:

```
UPDATE <table> [ * ] [ [ AS ] <alias> ]
    SET { <column> = { <expression> } |
          ( <column> [, ...] ) = ( { <expression> } [, ...] ) } [, ...]
    [ FROM <from_list> ]
    [ WHERE <condition> ]
```

The following table describes the parameters in the syntax.

**Parameter**

**Description**

table

The name of the table that you want to update.

alias

The substitute name for the table that you want to update.

column

The name of the column in the table that you want to update.

expression

The expression to assign an updated value to a column.

from\_list

The name of the column in the source table.

condition

The condition that rows to be updated must meet.

## How it works

In Hologres, each table has a data file, a primary key index file, and a tag file. For more information about a primary key index file, see [PK](/help/en/hologres/user-guide/primary-key#task-2274825). Tag files are mainly used in scenarios where data is to be deleted or updated by using the DELETE, UPDATE, INSERT ON CONFLICT, or another statement. The following sample SQL statements are used to describe how the UPDATE statement works in Hologres:

```
create table update_test (
col1 text NOT NULL PRIMARY KEY,
col2 text
);

UPDATE update_test SET col2 = 'tom' where col1 = 'a1';
```

During data updates, the data is first written to the memory table (Mem Table) and then asynchronously flushed to files. If a row-oriented table is used, the new data is directly flushed to a new file, and then the old data is merged during the compaction process. If a column-oriented table is used, the system builds a tag table in memory and then performs flush operations. The tag table records the file ID and row ID of the data to be deleted. The new data is flushed to a new file, and the tag table is flushed to a tag file. Hologres performs compaction on the tag file and data files, clears old data, and then merges new data during the compaction at the backend. To accelerate the data update process, Hologres writes the data at the backend, and then compresses and sorts the data when asynchronous compaction is performed. Therefore, the storage usage increases during the data update process. After the data update process and the compaction process are complete, the storage usage decreases.

Based on the principle of data updates, a column-oriented table always involves data recording and reverse query processes on the data in the tag table. Therefore, `the update efficiency of a row-oriented table is higher than that of a column-oriented table`.

### Result table with a primary key

If a primary key is specified for a table, the row identifier (RID) can be located based on a primary key value in the primary key index file, and then the data files can be located based on the RID. This is also true during updates. You can quickly filter out the files to be updated based on the primary key to reduce file scans. If no primary key is available, full table updates are likely performed. This affects the performance. For more information, see [PK](/help/en/hologres/user-guide/primary-key#task-2274825).

### Partial updates

Partial updates indicate that only specified columns are updated. Partial updates are unique to Hologres and can meet different business requirements. Partial updates share the same principle as entire-row updates, except the differences described in the following section:

-   If row-oriented tables are used, data of partial updates is written in Append Only mode because the tables use the log-structured merge (LSM) structure.
-   If column-oriented tables are used, empty columns are queried before data is written to the columns. This results in great resource consumption.
-   If row-column hybrid tables are used, empty columns also need to be queried first. The empty columns are queried based on row-oriented files during partial updates for row-column hybrid tables. This reduces resource consumption compared with partial updates for column-oriented tables.

Therefore, the performance of partial updates is sorted in the following way in descending order: `row-oriented storage > row-column hybrid storage > column-oriented storage`.

**Note** In this section, SQL statements are processed by using fixed plans, and the performance of partial updates is sorted in the following way in descending order: `row-oriented storage > row-column hybrid storage > column-oriented storage`. However, if SQL statements are not processed by using fixed plans, partial updates are equivalent to joining two tables, and the performance of partial updates is sorted in the following way in descending order: `column-oriented storage > row-column hybrid storage > row-oriented storage`.

The following examples show partial updates:

```
-- Example of a partial update:
create table update_test2 (
col1 text NOT NULL PRIMARY KEY,
col2 text,
col3 text
);

INSERT INTO update_test2 VALUES ('a1','a2','a3'),('a11','a22','a33');

-- Partial update by using the UPDATE statement:
UPDATE update_test2 SET col2 = 'tom' where col1 = 'a1';

-- Partial update by using the INSERT ON CONFLICT statement:
INSERT INTO update_test2 (col1,col2) VALUES ('a1','tom')
ON CONFLICT(col1) DO UPDATE
SET col2 = EXCLUDED.col2;

-- Result of the partial update:
 col1 | col2 | col3
------+------+------
 a1   | tom  | a3
 a11  | a22  | a33
(2 rows)
                
```

## Limits

-   The UPDATE statement does not update distribution keys.
-   The UPDATE statement updates child tables but not parent tables.
-   We recommend that you use fixed plans to optimize execution efficiency. For more information, see [UPDATE statement](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#section-4zq-q31-0xc).

## Sample statements

The following example shows how to use the UPDATE statement in Hologres:

```
CREATE TABLE update_test (
  a text primary key, 
  b int not null, 
  c text not null, 
  d text);  

INSERT INTO update_test VALUES ('b1', 10, '', '');

UPDATE update_test SET b = b + 10 where a = 'b1';
UPDATE update_test SET c = 'new_' || a, d = null where b = 20;
UPDATE update_test SET (b,c,d) = (1, 'test_c', 'test_d'); 

CREATE TABLE tmp(a int);
INSERT INTO tmp VALUES (2);
UPDATE update_test SET b = tmp.a FROM tmp;
```

For more information about the UPDATE statement, see [UPDATE](https://www.postgresql.org/docs/9.1/sql-update.html).

## FAQ

Why does the monitoring metric storage usage increase when I execute an UPDATE statement but then decrease after the update operations are complete? ![FAQ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6591647761/p535904.png)

Based on the principle of the UPDATE statement, Hologres tags old data during the execution of the UPDATE statement and flushes new data to new small files. Hologres merges these small files during compaction at the backend. During compaction, old data is cleared, and new data is merged. To accelerate the data update process, Hologres writes the data at the backend, and then compresses and sorts the data when asynchronous compaction is performed. This causes the storage usage to increase during the data update process. After the data update process and the compaction process are complete, the storage usage decreases. For more information, see [How it works](#section-aoa-707-afr).
