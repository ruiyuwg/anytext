You can execute the CREATE PARTITION TABLE statement to create a partitioned table. This topic describes how to use the CREATE PARTITION TABLE statement.

## Description

**Note**

Unless otherwise stated, parent tables mentioned in this topic refer to parent partitioned tables, and child tables refer to child partitioned tables.

A parent table is partitioned into different child tables based on partition key values. Data in the child tables is publicly available. Before you can use a partitioned table, you must create child tables in advance. You can execute the `CREATE PARTITION TABLE` statement to create a partitioned table. You can also enable [dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management) for a table to automatically create child tables.

Child tables of a partitioned table are stored in different files. To query data in a partitioned table, you must specify a partition. This way, the system does not need to scan all the partitions in the table and can quickly locate the desired file. This improves the efficiency. In most cases, a fact table is divided into different partitions by date. A child table of a partitioned table is equivalent to a non-partitioned table in metadata storage. Therefore, a large number of partitions cause the volume of metadata to increase and result in a large number of small files and fragments.

If your data source is a database, we recommend that you do not use partitioned tables. If you use partitioned tables in this scenario, excessive partitions may waste I/O resources. To resolve this issue and implement index-based query acceleration, you can specify the commonly used partition fields to constitute the segment key.

## Limits

-   Hologres allows you to import data to a child table rather than a parent table.
    
    **Note**
    
    Realtime Compute for Apache Flink allows you to import data to a parent table in Hologres in real time. For more information, see [Write data to a partitioned Hologres sink table in real time](/help/en/hologres/user-guide/hologres-result-table#section-7av-gr2-kws).
    
-   Each partitioning rule can be used to create only one partitioned table.
    
-   The `PARTITION BY` clause supports only `list partitioning`. The partition key must be a single column.
    
-   If a partitioned table has a primary key, the partition key must be a subset of the primary key.
    

## Usage notes

-   If the number of data records in a single day is less than 100 million, we recommend that you do not use the date as a partitioning condition and do not create a partitioned table by date. Otherwise, the size of each partition is small and queries are not significantly accelerated. We recommend that you specify a coarser granularity.
    
-   If you need to frequently replace the data of a partition by performing TRUNCATE or DROP operations, we recommend that you use partitioned tables. If you use partitioned tables in this scenario, you can perform TRUNCATE or DROP operations in a more efficient manner, without the need to scan a large amount of data.
    

## Create a partitioned table

### Syntax

You can use the following statements to create a partitioned table:

```
-- Create a parent table.
CREATE TABLE [IF NOT EXISTS] [<schema_name>.]<table_name>  ([
  {
   <column_name> <column_type> [ <column_constraints>, [...]]
   | <table_constraints>
   [, ...]
  }
])
PARTITION BY LIST(<column_name>);

-- Create child tables.
CREATE TABLE [IF NOT EXISTS] [<schema_name>.]<table_name> PARTITION OF <parent_table>
  FOR VALUES IN (<string_literal>);
```

### Parameters

The following table describes the parameters in the preceding syntax.

**Parameter**

**Description**

if not exists

Specifies that if a table with the same name already exists, the system does not return an error message but notifies you that the table already exists.

schema\_name

The name of the schema in which the table resides. If you create a parent table and child tables in the same schema, you do not need to specify a schema name. If you create a parent table and child tables across schemas, you must specify a schema name.

table\_name

The name of the parent table or the child table that you want to create.

column\_name

The name of the column that you want to create in the new table.

column\_type

The data type of the column.

column\_constraints

The name of the column constraint.

table\_constraints

The name of the table constraint.

parent\_table

The name of the parent table of the child table.

string\_literal

The partition key.

Columns of the TEXT, VARCHAR, and INT data types can be used as partition key columns. In Hologres V1.3.22 and later, columns of the DATE data type can be used as partition key columns.

### Examples

-   Example 1: Create a parent table that does not have a primary key and its child tables in the public schema.
    
    -   Syntax supported in Hologres V2.1 and later:
        
        ```
        BEGIN;
        CREATE TABLE public.hologres_parent (
            a TEXT,
            b INT,
            c TIMESTAMP,
            d TEXT
        )
        PARTITION BY LIST (a) 
        WITH (orientation = 'column');
        CREATE TABLE public.hologres_child1 PARTITION OF public.hologres_parent FOR VALUES IN ('v1');
        CREATE TABLE public.hologres_child2 PARTITION OF public.hologres_parent FOR VALUES IN ('v2');
        CREATE TABLE public.hologres_child3 PARTITION OF public.hologres_parent FOR VALUES IN ('v3');
        COMMIT;
        ```
        
    -   Syntax supported in all Hologres versions:
        
        ```
        BEGIN;
        CREATE TABLE public.hologres_parent(
          a TEXT, 
          b INT, 
          c TIMESTAMP, 
          d TEXT
        ) 
          PARTITION BY LIST(a);
        CALL set_table_property('public.hologres_parent', 'orientation', 'column');           
        CREATE TABLE public.hologres_child1 PARTITION OF public.hologres_parent FOR VALUES IN('v1');
        CREATE TABLE public.hologres_child2 PARTITION OF public.hologres_parent FOR VALUES IN('v2');
        CREATE TABLE public.hologres_child3 PARTITION OF public.hologres_parent FOR VALUES IN('v3');
        COMMIT;
        ```
        
    
-   Example 2: Create a parent table that has a primary key and its child tables in the public schema.
    
    Syntax supported in Hologres V2.1 and later:
    
    ```
    BEGIN;
    CREATE TABLE public.hologres_parent_2 (
        a TEXT,
        b INT,
        c TIMESTAMP,
        d TEXT,
        ds TEXT,
        PRIMARY KEY (ds, b)
    )
    PARTITION BY LIST (ds) 
    WITH (orientation = 'column');
    CREATE TABLE public.holo_child_1 PARTITION OF public.hologres_parent_2 FOR VALUES IN ('20201215');
    CREATE TABLE public.holo_child_2 PARTITION OF public.hologres_parent_2 FOR VALUES IN ('20201216');
    CREATE TABLE public.holo_child_3 PARTITION OF public.hologres_parent_2 FOR VALUES IN ('20201217');
    COMMIT;
    ```
    
    Syntax supported in all Hologres versions:
    
    ```
    BEGIN;
    CREATE TABLE public.hologres_parent_2(
      a TEXT , 
      b INT, 
      c TIMESTAMP, 
      d TEXT,
      ds TEXT,
      primary key(ds,b)
      )
      PARTITION BY LIST(ds);
    CALL set_table_property('public.hologres_parent_2', 'orientation', 'column');
    CREATE TABLE public.holo_child_1 PARTITION OF public.hologres_parent_2 FOR VALUES IN('20201215');
    CREATE TABLE public.holo_child_2 PARTITION OF public.hologres_parent_2 FOR VALUES IN('20201216');
    CREATE TABLE public.holo_child_3 PARTITION OF public.hologres_parent_2 FOR VALUES IN('20201217');
    COMMIT;
    ```
    

## Query all child tables

You can query all child tables of a parent table by using one of the following methods:

-   Query all child tables of a parent table in a visualized manner by using HoloWeb.
    
-   Query all child tables of a parent table by executing the following SQL statement. In the SQL statement, change parent\_table\_name based on your business requirements.
    
    ```
    SELECT
        nmsp_parent.nspname AS parent_schema,
        parent.relname      AS parent,
        nmsp_child.nspname  AS child_schema,
        child.relname       AS child
    FROM pg_inherits
        JOIN pg_class parent            ON pg_inherits.inhparent = parent.oid
        JOIN pg_class child             ON pg_inherits.inhrelid   = child.oid
        JOIN pg_namespace nmsp_parent   ON nmsp_parent.oid  = parent.relnamespace
        JOIN pg_namespace nmsp_child    ON nmsp_child.oid   = child.relnamespace
    WHERE parent.relname='parent_table_name'; 
    ```
    

## Rules on property settings for a parent table and its child tables

The following table describes the rules on property settings that apply when a child table is attached to a parent table. The following rules apply:

-   Must be consistent with the parent table: A property of the child table must be consistent with that of the parent table. Otherwise, an error is reported when the child table is attached to the parent table. In this case, we recommend that you create a child table using the [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like#section-f7y-rtd-0uw) statement.
    
-   Not need to be consistent with the parent table: A property of the child table can be different from that of the parent table. If the property of the child table is not explicitly specified, the child table inherits the corresponding property setting of the parent table. If the property of the child table is explicitly specified, the property setting of the child table is retained.
    
-   Must include the indexed columns of the parent table: The indexed columns of the child table must include those of the parent table. Columns that are not specified as indexed columns for the parent table can be explicitly specified for the child table.
    

**Category**

**Table property**

**Description**

**Whether a child table created by executing the CREATE TABLE PARTITION OF statement inherits the property setting from its parent table**

**Rule that applies when a child table is attached to a parent table**

Table property

orientation

The storage format of the table.

Yes

Must be consistent with the parent table.

table\_group

The table group to which the table belongs. This property also specifies the shard count for the table group.

Yes

Must be consistent with the parent table.

time\_to\_live\_in\_seconds

The time-to-live (TTL) of the data in the table.

Yes

Not need to be consistent with the parent table.

-   If this property is not specified for the child table, the child table inherits the property setting from its parent table.
    
-   If this property is specified for the child table, the specified property setting is retained.
    

Index

primary key

The primary key of the table.

Yes

Must be consistent with the parent table.

distribution\_key

The distribution key of the table.

Yes

Must be consistent with the parent table.

clustering\_key

The clustering key of the table.

Yes

Must be consistent with the parent table.

event\_time\_column

The event time column of the table.

Yes

Must be consistent with the parent table.

bitmap\_columns

The dictionary encoding columns of the table.

Yes

Not need to be consistent with the parent table.

dictionary\_encoding\_columns

The field indexes of the table.

Yes

Not need to be consistent with the parent table.

binlog\_level

Specifies whether to enable binary logging.

Yes

Must be consistent with the parent table.

proxima\_vectors

The indexes used to perform vector searches on the table.

Yes

Must be consistent with the parent table.

Column constraint

nullable

The NOT NULL constraint.

Yes

Must be consistent with the parent table.

default value

The default value.

Yes

Must be consistent with the parent table.

## References

-   The dynamic partitioning feature of Hologres automatically creates and manages child tables based on the dynamic partitioning rules that you configure when you create a partitioned table. You do not need to configure all partitions when you create the partitioned table. For more information, see [Dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management).
    
-   You can execute the `ALTER PARTITION TABLE` statement to modify partitions. For more information, see [ALTER PARTITION TABLE](/help/en/hologres/developer-reference/alter-partition-table).
    
-   You can execute the `DROP PARTITION TABLE` statement to drop partitioned tables. For more information, see [DROP PARTITION TABLE](/help/en/hologres/developer-reference/drop-partition-table).
