This topic describes how to create a range partitioned table.

## Syntax

The following statement is used to create one or more range partitioned tables. Data is partitioned by range boundary. Time boundaries are often used. Partition boundaries must be incremental.

```
CREATE TABLE ... PARTITION BY RANGE {(expr)  COLUMNS(column_list)}
(partition_definition [, partition_definition] ...);
```

partition\_definition is:

```
PARTITION partition_name
       VALUES LESS THAN {(value  value_list)  MAXVALUE}
```

## Parameters

**Parameter**

**Description**

expr

The expression of the partition. It must be of the INT type. The string type is not supported.

column\_list

The list of partition key columns. Expressions are not supported.

value

The boundary value of the partition.

value\_list

The list of the boundary values of the partitions. It is used in RANGE COLUMNS().

MAXVALUE

The maximum value of the partition.

partition\_name

The name of the partition. The name must be unique within the table.

## Description

Range partitions support single-column partition keys.

Range partitions support expressions.

Range partitions support the extended data type of RANGE COLUMNS.

-   RANGE COLUMNS does not support expressions, but supports columns.
    
-   RANGE COLUMNS supports multi-column partition keys.
    
-   RANGE COLUMNS supports partition keys of the following data types: INT, string types, DATE, and DATETIME.
    

## Examples

Create a range partitioned table:

```
CREATE TABLE sales_range
(
  dept_no     INT,
  part_no     INT,
  country     varchar(20),
  date        DATE,
  amount      INT
)
PARTITION BY RANGE(amount)
(
  PARTITION p0 VALUES LESS THAN(1000),
  PARTITION p1 VALUES LESS THAN(2000),
  PARTITION p2 VALUES LESS THAN(3000),
  PARTITION p3 VALUES LESS THAN(MAXVALUE)
);
```

Create a range columns partitioned table:

```
CREATE TABLE sales_range_columns
(
  dept_no     INT,
  part_no     INT,
  country     varchar(20),
  create_date        DATE,
  amount      INT
)
PARTITION BY RANGE COLUMNS(create_date)
(
  PARTITION p1 VALUES LESS THAN('2023-01-01'),
  PARTITION p2 VALUES LESS THAN('2023-02-01'),
  PARTITION p3 VALUES LESS THAN('2023-03-01'),
  PARTITION p4 VALUES LESS THAN('2023-04-01')
);

CREATE TABLE sales_range_columns
(
  dept_no     INT,
  part_no     INT,
  country     varchar(20),
  date        DATE,
  amount      INT
)
PARTITION BY RANGE COLUMNS(dept_no, part_no)
(
  PARTITION p1 VALUES LESS THAN(1000, MAXVALUE),
  PARTITION p2 VALUES LESS THAN(2000, MAXVALUE),
  PARTITION p3 VALUES LESS THAN(3000, MAXVALUE),
  PARTITION p4 VALUES LESS THAN(4000, MAXVALUE)
);
```
