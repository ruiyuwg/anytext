You can set partitions or subpartitions to the read-only mode, which can protect data from DML operations accidentally performed by users or executed by triggers.

The following figure illustrates read-only partitions.![Read-only partitions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0149550661/p433353.png)

## Syntax

-   Create a read-only partition when you create a table.
    
    ```
    CREATE TABLE [IF NOT EXISTS] [schema.]table_name
        table_definition [READ {ONLY | WRITE}]
        partition_options;
    ```
    
    Description of partition\_options:
    
    ```
    PARTITION BY
        { RANGE{(expr) | COLUMNS(column_list)} }
        [(partition_definition [, partition_definition] ...)]
    ```
    
    Description of partition\_definition:
    
    ```
        PARTITION partition_name
            [VALUES LESS THAN {expr | MAXVALUE}]
            [READ {ONLY | WRITE}]
            [[STORAGE] ENGINE [=] engine_name]
            [COMMENT [=] 'string' ]
            [DATA DIRECTORY [=] 'data_dir']
            [INDEX DIRECTORY [=] 'index_dir']
            [MAX_ROWS [=] max_number_of_rows]
            [MIN_ROWS [=] min_number_of_rows]
            [TABLESPACE [=] tablespace_name]
    ```
    
-   Create a read-only partition when you modify a table.
    
    ```
    ALTER TABLE tbl_name
        [alter_option [, alter_option] ...]
        [partition_options]
    ```
    
    Description of partition\_options:
    
    ```
    partition_options:
        partition_option [partition_option] ...
    ```
    
    Description of partition\_option:
    
    ```
    partition_option: {
        ADD PARTITION (partition_definition)
    ```
    
    Description of partition\_definition:
    
    ```
        PARTITION partition_name
            [VALUES LESS THAN {expr | MAXVALUE}]
            [READ {ONLY | WRITE}]
            [[STORAGE] ENGINE [=] engine_name]
            [COMMENT [=] 'string' ]
            [DATA DIRECTORY [=] 'data_dir']
            [INDEX DIRECTORY [=] 'index_dir']
            [MAX_ROWS [=] max_number_of_rows]
            [MIN_ROWS [=] min_number_of_rows]
            [TABLESPACE [=] tablespace_name]
    ```
    
    Description of alter\_option:
    
    ```
    alter_option: {
        table_options
      | ADD [COLUMN] col_name column_definition
            [FIRST | AFTER col_name]
      | ADD [COLUMN] (col_name column_definition,...)
      | ADD {INDEX | KEY} [index_name]
            [index_type] (key_part,...) [index_option] ...
      | ADD {FULLTEXT | SPATIAL} [INDEX | KEY] [index_name]
            (key_part,...) [index_option] ...
      | ADD [CONSTRAINT [symbol]] PRIMARY KEY
            [index_type] (key_part,...)
            [index_option] ...
      | ADD [CONSTRAINT [symbol]] UNIQUE [INDEX | KEY]
            [index_name] [index_type] (key_part,...)
            [index_option] ...
      | ADD [CONSTRAINT [symbol]] FOREIGN KEY
            [index_name] (col_name,...)
            reference_definition
      | ADD [CONSTRAINT [symbol]] CHECK (expr) [[NOT] ENFORCED]
      | DROP {CHECK | CONSTRAINT} symbol
      | ALTER {CHECK | CONSTRAINT} symbol [NOT] ENFORCED
      | ALGORITHM [=] {DEFAULT | INSTANT | INPLACE | COPY}
      | ALTER [COLUMN] col_name {
            SET DEFAULT {literal | (expr)}
          | SET {VISIBLE | INVISIBLE}
          | DROP DEFAULT
        }
      | ALTER INDEX index_name {VISIBLE | INVISIBLE}
      | CHANGE [COLUMN] old_col_name new_col_name column_definition
            [FIRST | AFTER col_name]
      | [DEFAULT] CHARACTER SET [=] charset_name [COLLATE [=] collation_name]
      | CONVERT TO CHARACTER SET charset_name [COLLATE collation_name]
      | {DISABLE | ENABLE} KEYS
      | {DISCARD | IMPORT} TABLESPACE
      | DROP [COLUMN] col_name
      | DROP {INDEX | KEY} index_name
      | DROP PRIMARY KEY
      | DROP FOREIGN KEY fk_symbol
      | FORCE
      | LOCK [=] {DEFAULT | NONE | SHARED | EXCLUSIVE}
      | MODIFY [COLUMN] col_name column_definition
            [FIRST | AFTER col_name]
      | ORDER BY col_name [, col_name] ...
      | RENAME COLUMN old_col_name TO new_col_name
      | RENAME {INDEX | KEY} old_index_name TO new_index_name
      | RENAME [TO | AS] new_tbl_name
      | {WITHOUT | WITH} VALIDATION
    }
    ```
    

## Parameters

 

Parameter

Description

table\_name

The name of the table.

expr

The expression of partition key columns.

column\_list

The list of partition key columns. Expressions are not supported.

MAXVALUE

The maximum value in the partition.

partition\_name

The name of the partition. The name must be unique within the table.

engine\_name

The name of the storage engine.

table\_options

The table options.

col\_name

The name of the column.

## Usage notes

You cannot modify the data in read-only partitions. If you perform data modification operations, the following error message is returned: `ERROR HY000: Data in a read-only partition or subpartition cannot be modified.`. The data modification operations include DML statements, such as INSERT, UPDATE, and DELETE, and DDL operations that results in data change in tables.

However, adding columns to a table is allowed, because this operation does not change the read-only property of the existing data in the table. Example:

```
ALTER TABLE [schema.]table_name ADD col_new varchar(100) DEFAULT 'i am not empty';
```

## Examples

Create a table named `t1` whose partitions are all read-only partitions.

```
CREATE TABLE t1 (
  id INT,
  year_col INT
) READ ONLY
PARTITION BY RANGE (year_col) (
  PARTITION p0 VALUES LESS THAN (2001),
  PARTITION p1 VALUES LESS THAN (2010),
  PARTITION p2 VALUES LESS THAN (2020)
);
```

Create a read-only partition for the `t1` table.

```
ALTER TABLE t1 ADD PARTITION (PARTITION p3 values LESS THAN (2030));
Query OK, 0 rows affected (0.22 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

Check the created read-only partition.

```
SHOW CREATE TABLE t1;
+-------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Table | Create Table                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
+-------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| t1    | CREATE TABLE `t1` (
  `id` int(11) DEFAULT NULL,
  `year_col` int(11) DEFAULT NULL
) /*!99990 800020201 READ ONLY */ ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
/*!50100 PARTITION BY RANGE (`year_col`)
(PARTITION p0 VALUES LESS THAN (2001) ENGINE = InnoDB,
 PARTITION p1 VALUES LESS THAN (2010) ENGINE = InnoDB,
 PARTITION p2 VALUES LESS THAN (2020) ENGINE = InnoDB,
 PARTITION p3 VALUES LESS THAN (2030) ENGINE = InnoDB) */ |
+-------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)
```

Create both read-only partitions and read/write partitions for the `t1` table.

```
CREATE TABLE t1 (
    id INT,
    year_col INT
) READ WRITE
PARTITION BY RANGE (year_col) (
    PARTITION p0 VALUES LESS THAN (2001) READ ONLY,
    PARTITION p1 VALUES LESS THAN (2010),
    PARTITION p2 VALUES LESS THAN (2020) READ ONLY
);
```

## View read-only partitions

You can use the SHOW CREATE TABLE statement to view information about read-only partitions of a table.

```
show create table t1;
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Table | Create Table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| t1    | CREATE TABLE `t1` (
  `id` int(11) DEFAULT NULL,
  `year_col` int(11) DEFAULT NULL
) /*!99990 800020201 READ WRITE */ ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
/*!50100 PARTITION BY RANGE (`year_col`)
(PARTITION p0 VALUES LESS THAN (2001) */ /*!99990 800020201  READ ONLY */
/*!50100  ENGINE = InnoDB,
 PARTITION p1 VALUES LESS THAN (2010) ENGINE = InnoDB,
 PARTITION p2 VALUES LESS THAN (2020) */ /*!99990 800020201  READ ONLY */
/*!50100  ENGINE = InnoDB) */ |
+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.01 sec)
```
