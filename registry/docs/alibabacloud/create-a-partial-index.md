You can [create a partial index when you create a partitioned table](#7a5c9f1076o2n) or [create a partial index on an existing partitioned table](#891abaf076hgd).

## **Create a partial index when you create a partitioned table**

### **Syntax**

```
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] table_name
    [(create_definition,...)]
    [table_options]
    partition_options
     ...
```

`create_definition` is:

```
{
    col_name column_definition
  | {INDEX | KEY} [index_name] [index_type] (key_part,...)
      [index_option] [partial_partition_option]
      ...
}
```

`partial_partition_option` is:

```
([PARTITION partition_name0[(SUBPARTITION subpartition_name0[, ...])]][,...]
 )
```

For information about other parameters in the syntax, see [CREATE TABLE](https://dev.mysql.com/doc/refman/8.0/en/create-table.html).

### **Parameters**

**Parameter**

**Description**

table\_name

The table name.

col\_name

The column name.

partition\_name0

The partition name.

**Note**

You can specify multiple partitions. Separate multiple partition names with commas (,).

subpartition\_name0

The subpartition name.

**Note**

You can specify multiple subpartitions. Separate multiple subpartition names with commas (,).

### **Examples**

-   Create a partial index on a partition
    
    The following sample code shows how to create a partitioned table named `orders` and then create a partial index named `o_ind_dp(dept_no, part_no)` on the `orders_202212` partition of December and a partial index named `o_ind_amout(amount, order_id)` on other historical partitions:
    
    ```
    CREATE TABLE orders
    (
      order_id    INT,
      dept_no     INT,
      part_no     INT,
      country     varchar(20),
      date        DATE,
      amount      INT,
      Primary Key(order_id),
      KEY o_ind_dp(dept_no, part_no) (partition orders_202212),
      KEY o_ind_amout(amount, order_id) 
       (partition orders_202201,
        partition orders_202202,
        partition orders_202203,
        partition orders_202204,
        partition orders_202205,
        partition orders_202206,
        partition orders_202207,
        partition orders_202208,
        partition orders_202209,
        partition orders_202210,
        partition orders_202211
       )
    )
    PARTITION BY RANGE(month(date))
    (
      PARTITION orders_202201 VALUES LESS THAN(2),
      PARTITION orders_202202 VALUES LESS THAN(3),
      PARTITION orders_202203 VALUES LESS THAN(4),
      PARTITION orders_202204 VALUES LESS THAN(5),
      PARTITION orders_202205 VALUES LESS THAN(6),
      PARTITION orders_202206 VALUES LESS THAN(7),
      PARTITION orders_202207 VALUES LESS THAN(8),
      PARTITION orders_202208 VALUES LESS THAN(9),
      PARTITION orders_202209 VALUES LESS THAN(10),
      PARTITION orders_202210 VALUES LESS THAN(11),
      PARTITION orders_202211 VALUES LESS THAN(12),
      PARTITION orders_202212 VALUES LESS THAN(13)
    );
    ```
    
-   Create a partial index on a subpartition
    
    The following sample code shows how to create a [LIST-RANGE](/help/en/polardb/polardb-for-mysql/user-guide/list-range) subpartitioned table named `tenants` and create a partial index named `ind_id` on all subpartitions of the `p0` partition and on the `p1_1`, `p1_2`, and `p1_3` subpartitions of the `p1` partition, and then create a partial index named `ind_date` on the `p0_1` and `p0_2` subpartitions of the `p0` partition and on the `p1_1` and `p1_2` subpartitions of the `p1` partition.
    
    ```
    CREATE TABLE tenants (
      id INT,
      date DATE,
      count INT,
      KEY ind_id (id)  (
        partition p0, 
        partition p1 (subpartition p1_1, subpartition p1_2, subpartition p1_3)
      ), 
      KEY ind_date (date) (
        partition p0 (subpartition p0_1,  subpartition p0_2),
        partition p1 (subpartition p1_1, subpartition p1_2)
      )
    ) PARTITION BY LIST COLUMNS(id)
      SUBPARTITION BY RANGE (month(date))(
      PARTITION p0 VALUES IN (1, 2, 3, 4, 5) (
        SUBPARTITION p0_1 VALUES LESS THAN(4),
        SUBPARTITION p0_2 VALUES LESS THAN(7),
        SUBPARTITION p0_3 VALUES LESS THAN(10),
        SUBPARTITION p0_4 VALUES LESS THAN(13)
      ),
      PARTITION p1 VALUES IN (11, 12, 13, 14, 15) (
        SUBPARTITION p1_1 VALUES LESS THAN(4),
        SUBPARTITION p1_2 VALUES LESS THAN(7),
        SUBPARTITION p1_3 VALUES LESS THAN(10),
        SUBPARTITION p1_4 VALUES LESS THAN(13)
      )
    );
    ```
    

## **Create a partial index on an existing partitioned table**

### **Syntax**

```
CREATE [UNIQUE] INDEX index_name
    [index_type]
    ON table_name (key_part,...)
    [index_option]
    [algorithm_option | lock_option | partial_partition_option] ... 
```

`partial_partition_option` is:

```
([PARTITION partition_name0[(SUBPARTITION subpartition_name0[, ...])]][,...]
  )
```

For information about other parameters in the syntax, see [CREATE INDEX](https://dev.mysql.com/doc/refman/8.0/en/create-index.html).

### **Parameters**

**Parameter**

**Description**

index\_name

The index name.

table\_name

The table name.

partition\_name0

The partition name.

**Note**

You can specify multiple partitions. Separate multiple partition names with commas (,).

subpartition\_name0

The subpartition name.

**Note**

You can specify multiple subpartitions. Separate multiple subpartition names with commas (,).

### **Examples**

-   Create a partial index on a partition
    
    The following sample code shows how to create a partial index named `o_part_id` on the `orders_202201` partition of the `orders` partitioned table:
    
    ```
    CREATE INDEX o_part_id ON orders(part_no, order_id) (partition orders_202201);
    ```
    
    You can also execute the `ALTER TABLE ADD KEY` statement to create the partial index in the preceding example.
    
    ```
    ALTER TABLE orders ADD KEY o_part_id(part_no, order_id) (partition orders_202201);
    ```
    
-   Create a partial index on a subpartition
    
    The following sample code shows how to create a partial index named `ind_count` on all subpartitions of the `p0` partition and on the `p1_1` subpartition of the `p1` partition in the `tenants` partitioned table:
    
    ```
    CREATE INDEX ind_count ON tenants(count) (partition p0, partition p1 (subpartition p1_1));
    ```
    
    You can also execute the `ALTER TABLE ADD KEY` statement to create the partial index in the preceding example.
    
    ```
    ALTER TABLE tenants ADD KEY ind_count(count) (partition p0, partition p1 (subpartition p1_1));
    ```
