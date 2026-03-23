Hologres does not support a separate `DROP PARTITION TABLE` syntax. Use the standard `DROP TABLE` statement to drop partitioned tables and individual partitions.

## Limits

When you drop a parent table, Hologres drops all its child tables by default.

## Syntax

Use `DROP TABLE` to drop partitioned tables, individual partitions, or regular tables. To drop a partitioned table, drop the parent table. To drop a single partition, drop the corresponding child table.

```
DROP TABLE [ IF EXISTS ] table_name [, ...];
```

**Note**

You can drop multiple tables at once by separating table names with commas.

## Parameters

**Parameter**

**Description**

`IF EXISTS`

Optional. If specified, the statement returns success whether or not the target table exists. If omitted, the statement returns an error when the target table does not exist: `ERROR: table "non_exist_table" does not exist`.

`table_name`

The name of the table to drop.

## Drop a partition from a partitioned table

To drop a single partition, run `DROP TABLE` on the child table that corresponds to that partition. Only that partition is removed. The parent table and other partitions remain unaffected.

### Detach before dropping

To detach the partition as an independent table before dropping it, first detach the partition, then drop the detached table:

1.  Detach the partition from the parent table:
    
    ```
    ALTER TABLE parent_table DETACH PARTITION child_table;
    ```
    
2.  Drop the detached table:
    
    ```
    DROP TABLE child_table;
    ```
    

After detaching, the partition becomes a standalone table that is no longer part of the partitioned table. For more information about the `DETACH PARTITION` clause, see [ALTER PARTITION TABLE](ALTER PARTITION TABLE_2263105.xdita#section_ynf_5el_htm).

## Examples

### Drop a single partition

The following statement drops one partition from a partitioned table:

```
DROP TABLE hologres_child2;
```

After execution, `hologres_child2` is removed from the partitioned table. The parent table and other child tables remain.

### Drop an entire partitioned table

The following statement drops a parent table along with all its partitions:

```
DROP TABLE hologres_parent;
```

Dropping the parent table also drops all its child tables by default.

## See also

-   [ALTER PARTITION TABLE](ALTER PARTITION TABLE_2263105.xdita#section_ynf_5el_htm)
