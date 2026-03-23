This topic describes how to create a range-hash partitioned table.

## Syntax

The following statement create a RANGE-HASH partitioned table. The first-level partition is RANGE \[COLUMNS\] type, and the second-level partition is HASH/KEY type.

```
CREATE TABLE [ schema. ]table_name
 table_definition
   PARTITION BY RANGE {(expr) | COLUMNS(column_list)}
   SUBPARTITION BY {[LINEAR] HASH(expr) [SUBPARTITIONS number]
   | [LINEAR] KEY [ALGORITHM={1 | 2}] (column_list)}
   (partition_definition [, partition_definition] ...);
```

Partition\_definition is:

```
 PARTITION partition_name
        VALUES LESS THAN {(expr | value_list) | MAXVALUE}
        (subpartition_definition [, subpartition_definition] ...)
```

And subpartition\_definition is:

```
SUBPARTITION subpartition_name
```

## Parameters

**Parameter**

**Description**

expr

Partition field expression, currently only supports INT type, does not support string type.

column\_list

The list of partition key columns. Expressions are not supported.

number

The number of subpartitions.

value

The boundary value of the partition.

value\_list

The list of the boundary values of the partitions. Used in RANGE COLUMNS().

MAXVALUE

The maximum value.

partition\_name

The name of the partition. The name must be unique within the same table.

subpartition\_name

The name of the subpartition. The name must be unique within the same table.

## Examples

-   The first-level partition uses the `RANGE (expr)` type. Here, the `expr` is the expression of the partition. Only the INT type is supported. The string type is not supported.
    
    ```
    CREATE TABLE sales_range_hash_1
    (
      s_id        varchar(20),
      dept_no     INT,
      part_no     INT,
      country     varchar(20),
      date        DATE,
      amount      INT,
      primary key (s_id, amount)
    )
    PARTITION BY RANGE (amount)
    SUBPARTITION BY KEY(s_id) SUBPARTITIONS 3
    (
      PARTITION p1 VALUES LESS THAN (1000),
      PARTITION p2 VALUES LESS THAN (2000),
      PARTITION p3 VALUES LESS THAN (3000),
      PARTITION p4 VALUES LESS THAN (4000)
    );
    ```
    
-   The first-level partition uses the `RANGE COLUMNS(column_list)` type. The `column_list` is the list of partition key columns. Expressions are not supported.
    
    ```
    CREATE TABLE sales_range_hash_2
    (
      s_id        varchar(20),
      dept_no     INT,
      part_no     INT,
      country     varchar(20),
      date        DATE,
      amount      INT,
      primary key (s_id, date)
    )
    PARTITION BY RANGE COLUMNS(date)
    SUBPARTITION BY KEY(s_id) SUBPARTITIONS 3
    (
      PARTITION p1 VALUES LESS THAN('2023-01-01'),
      PARTITION p2 VALUES LESS THAN('2023-02-01'),
      PARTITION p3 VALUES LESS THAN('2023-03-01'),
      PARTITION p4 VALUES LESS THAN('2023-04-01')
    );
    ```
