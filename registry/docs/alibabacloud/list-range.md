This topic describes how to create a list-range partitioned table.

## Syntax

The following statement is used to create one or more list-range partitioned table where each partition may contain one or more subpartitions:

```
CREATE TABLE [ schema. ]table_name
 table_definition
   PARTITION BY LIST {(expr) | COLUMNS(column_list)}
   SUBPARTITION BY LIST(expr)
   (partition_definition [, partition_definition] ...);
```

`partition_definition` is:

```
 PARTITION partition_name
        VALUES IN (value_list)
        (subpartition_definition [, subpartition_definition] ...)
```

`subpartition_definition` is:

```
SUBPARTITION subpartition_name
      VALUES LESS THAN {value | MAXVALUE}
```

## Parameters

**Parameter**

**Description**

table\_name

The name of the table.

expr

The expression of the partition. It must be of the INT type. The string type is not supported.

column\_list

The list of partitions. It is used in LIST COLUMNS(). Expressions are not supported.

value

The boundary value of the partition.

value\_list

The list of the boundary values of the partitions. It is used in LIST COLUMNS().

MAXVALUE

The maximum value of the partition.

partition\_name

The name of the partition. The name must be unique within the table.

subpartition\_name

The name of the subpartition. The name must be unique within the table.

## Examples

Create a list-range partitioned table:

```
CREATE TABLE sales_list_range
(
  dept_no     INT,
  part_no     INT,
  country     varchar(20),
  date        DATE,
  amount      INT
)
PARTITION BY LIST (dept_no)
SUBPARTITION BY RANGE(amount)
(
  PARTITION p0 VALUES in (1, 2)(
    SUBPARTITION s0 VALUES LESS THAN(1000),
    SUBPARTITION s1 VALUES LESS THAN(2000),
    SUBPARTITION s2 VALUES LESS THAN(3000),
    SUBPARTITION s3 VALUES LESS THAN(MAXVALUE)
  ),
  PARTITION p1 VALUES in (3, 4)(
    SUBPARTITION s4 VALUES LESS THAN(1000),
    SUBPARTITION s5 VALUES LESS THAN(2000),
    SUBPARTITION s6 VALUES LESS THAN(2000),
    SUBPARTITION s7 VALUES LESS THAN(MAXVALUE)
  ),
  PARTITION p2 VALUES in (5, 6)(
    SUBPARTITION s8 VALUES LESS THAN(1000),
    SUBPARTITION s9 VALUES LESS THAN(2000),
    SUBPARTITION s10 VALUES LESS THAN(3000),
    SUBPARTITION s11 VALUES LESS THAN(MAXVALUE)
  )
);
```

Create a list columns-range partitioned table:

```
CREATE TABLE sales_list_columns_range
(
  dept_no     INT,
  part_no     INT,
  country     varchar(20),
  date        DATE,
  amount      INT
)
PARTITION BY LIST COLUMNS(country)
SUBPARTITION BY RANGE(month(date))
(
  PARTITION europe VALUES in ('FRANCE', 'ITALY')(
    SUBPARTITION q1_2012 VALUES LESS THAN(4),
    SUBPARTITION q2_2012 VALUES LESS THAN(7),
    SUBPARTITION q3_2012 VALUES LESS THAN(10),
    SUBPARTITION q4_2012 VALUES LESS THAN(13)
  ),
  PARTITION asia VALUES in ('INDIA', 'PAKISTAN')(
    SUBPARTITION q1_2013 VALUES LESS THAN(4),
    SUBPARTITION q2_2013 VALUES LESS THAN(7),
    SUBPARTITION q3_2013 VALUES LESS THAN(10),
    SUBPARTITION q4_2013 VALUES LESS THAN(13)
  ),
  PARTITION americas VALUES in ('US', 'CANADA')(
    SUBPARTITION q1_2014 VALUES LESS THAN(4),
    SUBPARTITION q2_2014 VALUES LESS THAN(7),
    SUBPARTITION q3_2014 VALUES LESS THAN(10),
    SUBPARTITION q4_2014 VALUES LESS THAN(13)
  )
);
```
