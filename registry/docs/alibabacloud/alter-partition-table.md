Use the `ALTER TABLE` statement to modify a partitioned table in Hologres. You can rename a partitioned table, attach an independent table as a child partition, or detach an existing child partition from its parent.

## Syntax

```
ALTER TABLE [IF EXISTS] table_name RENAME TO new_table_name;
ALTER TABLE [IF EXISTS] table_name ATTACH PARTITION new_partition_name FOR VALUES IN (<string_literal>);
ALTER TABLE [IF EXISTS] table_name DETACH PARTITION partition_name;
```

## Parameters

**Parameter**

**Description**

`RENAME`

Renames the partitioned table.

`ATTACH PARTITION new_partition_name FOR VALUES IN (<string_literal>)`

Attaches an existing table to a partitioned table as a child partition. The table must match the partition policy and partition key of the parent table. Additional constraints apply — see [Limits](#section-8a6cba26).

`DETACH PARTITION partition_name`

Detaches a partition from a partitioned table. The detached partition becomes a standalone, independent table with no relationship to the former parent.

## Limits

### Column requirements

Before attaching a table, verify that it meets these column requirements:

-   The table must have the same number of columns as the parent partitioned table.
    
-   The data type of each column must match the corresponding column in the parent table.
    
-   The table must satisfy all NOT NULL constraints defined on the parent table. For a list partition that does not accept NULL values, add a NOT NULL constraint to the partition key column, unless the primary key is an expression.
    

### Property rules when attaching a child partition

When you attach a table to a partitioned table, Hologres validates property compatibility between the child table and the parent table at attach time. If a required property does not match, the attach operation fails immediately and returns an error.

Three compatibility rules apply:

-   **Must be consistent:** The child table property must match the parent table property. If it does not match, the attach operation fails and you must create a new child table with the correct property value.
    
-   **Need not be consistent:** The child table property can differ from the parent table property. If the property is not specified on the child table, the child table inherits the value from the parent table. If the property is specified, the specified value is kept.
    
-   **Must include indexed columns of the parent table:** The child table must index all columns that the parent table indexes. The child table can index additional columns that the parent table does not index.
    

The following table lists all properties and the rules that apply when attaching a child partition:

**Category**

**Property**

**Description**

**Inherited by `CREATE TABLE PARTITION OF`**

**Rule when attaching**

**Retained after detaching**

Table property

`orientation`

Storage format of the table

Yes

Must be consistent

Yes

Table property

`table_group`

Table group that the table belongs to; also determines the shard count

Yes

Must be consistent

Yes

Table property

`time_to_live_in_seconds`

Time-to-live (TTL) period of the table

Yes

Need not be consistent. If not specified on the child table, inherits from the parent table. If specified, the specified value is kept.

Yes

Index

`primary key`

Primary key of the table

Yes

Must be consistent

Yes

Index

`distribution key`

Distribution key of the table

Yes

Must be consistent

Yes

Index

`clustering_key`

Clustered index: specifies columns and their storage order

Yes

Must be consistent

Yes

Index

`event_time_column`

Segment key of the table

Yes

Must be consistent

Yes

Index

`bitmap_columns`

Bitmap indexes of the table

Yes

Must include indexed columns of the parent table

Yes

Index

`dictionary_encoding_columns`

Dictionary-encoded columns of the table

Yes

Must include indexed columns of the parent table

Yes

Index

`binlog_level`

Whether binary logging is enabled

Yes

Must be consistent

Yes

Index

`proxima_vectors`

Vector indexes of the table

Yes

Must include indexed columns of the parent table

Yes

Column constraint

`nullable`

NOT NULL constraint

Yes

Must be consistent

Yes

Column constraint

`default value`

Default value constraint

Yes

Must be consistent

Yes

## Examples

### Basic operations

The following examples show how to rename a partitioned table, attach a partition, and detach a partition.

```
-- Rename a partitioned table.
alter table holo_test rename to my_holo_test;

-- Attach the table named my_table as a partition of the table named holo_table.
alter table holo_table attach partition my_table for values in ('2015');

-- Detach the child partitioned table holo_test from the parent partitioned table all_test.
alter table all_test detach partition holo_test;
```

### Replace an existing child partition

Use a transaction to atomically replace an existing child partition with new data. This pattern detaches the old partition, renames it as a backup, renames the new table to take its place, and then attaches the new partition — all within a single transaction block.

**Step 1: Create and populate the replacement table.**

```
-- Create a temporary table.
begin;
drop table if exists "table_20210101_new";
CREATE TABLE "table_20210101_new" (
  "colA" integer NOT NULL,
  "colB" text NOT NULL,
  "colC" numeric(38,10) NOT NULL,
  "ds" text NOT NULL,
  "process_time" timestamptz NOT NULL DEFAULT now()
);
call set_table_property('table_20210101_new', 'orientation','column');
call set_table_property('table_20210101_new', 'distribution_key','"colA"');
call set_table_property('table_20210101_new', 'event_time_column','process_time');
commit;

--- Import data to the temporary table.
insert into "table_20210101_new" select * from ...;
```

**Step 2: Swap the old partition for the new one.**

```
--- Replace an existing child partitioned table with the temporary table.
begin;
-- Detach an existing child partitioned table from the parent partitioned table and make the child partitioned table an independent table.
ALTER TABLE table_parent DETACH PARTITION table_20210101;
-- Rename the independent table.
ALTER TABLE table_20210101 RENAME to table_20210101_backup;
-- Rename the temporary table as the original child partitioned table.
ALTER TABLE table_20210101_new RENAME to table_20210101;
-- Attach the new child partitioned table to the parent partitioned table.
ALTER TABLE table_parent ATTACH PARTITION table_20210101 FOR VALUES in ("20210101");
commit;
```
