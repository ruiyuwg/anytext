Native flashback queries or restores data at a specific point in time using standard SQL. When an `UPDATE` or `DELETE` runs without a `WHERE` clause, retrieve the original data in seconds -- no binary log replay, no backup restoration, and no additional database instances required.

Run a single `SELECT ... AS OF TIMESTAMP` statement to view historical data or copy it back into your table.

## Prerequisites

-   RDS instance runs MySQL 8.0 on RDS Basic Edition, RDS High-availability Edition, or RDS Cluster Edition.
    
-   Minor engine version is 20210930 or later. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
-   `innodb_rds_flashback_task_enabled` is set to `ON`.
    
-   `innodb_undo_retention` is set to a value greater than `0` (in seconds).
    

## Syntax

The `AS OF TIMESTAMP` clause extends standard `SELECT` syntax:

```
SELECT ... FROM table_name
  AS OF TIMESTAMP expression;
```

The timestamp expression accepts multiple formats:

**Format**

**Example**

String literal

`'2020-11-11 00:00:00'`

Function call

`now()`

Subquery

`(SELECT now())`

Date arithmetic

`DATE_SUB(now(), INTERVAL 1 minute)`

## Parameters

All four parameters have global scope.

**Parameter**

**Type**

**Default**

**Valid values**

**Description**

`innodb_rds_flashback_task_enabled`

BOOLEAN

`OFF`

`ON`, `OFF`

Enables or disables native flashback. To fully disable, also set `innodb_undo_retention` to `0`.

`innodb_undo_retention`

INTEGER

`0`

0--172800

Retention period for undo records, in seconds. Higher values allow queries further into the past but consume more undo tablespace.

`innodb_undo_space_supremum_size`

INTEGER

`10240`

0--524288

Maximum disk space for the undo tablespace, in MB. When reached, undo records are forcefully deleted regardless of `innodb_undo_retention`.

`innodb_undo_space_reserved_size`

INTEGER

`0`

0--20480

Reserved disk space for the undo tablespace, in MB. Takes effect only when `innodb_undo_retention` is greater than `0`. Higher values preserve more undo records but may decrease instance performance. Set to `0` unless you have a specific need.

> To disable native flashback completely, set both `innodb_rds_flashback_task_enabled` to `OFF` and `innodb_undo_retention` to `0`.

## Query historical data

The following example recovers data after an accidental bulk update.

1.  Record the current timestamp and verify the table contents:
    

```
MySQL [mytest]> select now();
+---------------------+
| now()               |
+---------------------+
| 2020-10-14 15:44:09 |
+---------------------+
1 row in set (0.00 sec)

MySQL [mytest]> select * from mt1;
+----+------+
| id | c1   |
+----+------+
|  1 |    1 |
|  2 |    2 |
|  3 |    3 |
|  4 |    4 |
|  5 |    5 |
+----+------+
5 rows in set (0.00 sec)
```

1.  An accidental update overwrites all rows:
    

```
MySQL [mytest]> update mt1 set c1 = 100;
Query OK, 5 rows affected (0.00 sec)
Rows matched: 5  Changed: 5  Warnings: 0

MySQL [mytest]> select * from mt1;
+----+------+
| id | c1   |
+----+------+
|  1 |  100 |
|  2 |  100 |
|  3 |  100 |
|  4 |  100 |
|  5 |  100 |
+----+------+
5 rows in set (0.00 sec)
```

1.  Use `AS OF TIMESTAMP` to query data before the update:
    

```
MySQL [mytest]> select * from mt1 AS OF timestamp '2020-10-14 15:44:09';
+----+------+
| id | c1   |
+----+------+
|  1 |    1 |
|  2 |    2 |
|  3 |    3 |
|  4 |    4 |
|  5 |    5 |
+----+------+
5 rows in set (0.00 sec)
```

If the specified timestamp falls outside the undo retention period, the query returns error 7545:

```
MySQL [mytest]> select * from mt1 AS OF timestamp '2020-10-13 14:44:09';
ERROR 7545 (HY000): The snapshot to find is out of range
```

## Restore data from a point in time

After verifying the historical data, restore it by copying it into a new table and swapping the table names.

1.  Create a temporary table with the same schema as the original:
    

```
MySQL [mytest]> create table mt1_tmp like mt1;
Query OK, 0 rows affected (0.03 sec)
```

1.  Insert the historical data into the temporary table:
    

```
MySQL [mytest]> insert into mt1_tmp
             -> select * from mt1 AS OF
             -> TIMESTAMP '2020-10-14 15:44:09';
Query OK, 5 rows affected (0.01 sec)
Records: 5  Duplicates: 0  Warnings: 0
```

1.  Verify the data in the temporary table:
    

```
MySQL [mytest]> select * from mt1_tmp;
+----+------+
| id | c1   |
+----+------+
|  1 |    1 |
|  2 |    2 |
|  3 |    3 |
|  4 |    4 |
|  5 |    5 |
+----+------+
5 rows in set (0.00 sec)
```

1.  Stop all reads and writes to the original table, then swap the table names:
    

```
MySQL [mytest]> rename table mt1 to mt1_bak,
             -> mt1_tmp to mt1;
Query OK, 0 rows affected (0.02 sec)
```

1.  Verify the restored data:
    

```
MySQL [mytest]> select * from mt1;
+----+------+
| id | c1   |
+----+------+
|  1 |    1 |
|  2 |    2 |
|  3 |    3 |
|  4 |    4 |
|  5 |    5 |
+----+------+
5 rows in set (0.01 sec)
```

## Limitations

-   Supported only for InnoDB tables.
    
-   Consumes additional undo tablespace. Control storage usage through `innodb_undo_space_supremum_size`.
    
-   Returns data at the closest available point in time to the specified timestamp. Exact matches are not guaranteed.
    
-   Tables on which DDL operations have been performed cannot be queried or restored. For example, a dropped table cannot be recovered through native flashback.
    
-   Powered by AliSQL and relies on InnoDB undo records. Once undo records are purged -- either by exceeding the retention period or the undo tablespace size limit -- the corresponding historical data is no longer accessible.
