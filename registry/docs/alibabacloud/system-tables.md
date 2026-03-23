This topic describes the system tables in Hologres and how to use these tables.

## Overview

The following table describes the system tables in Hologres.

**Table name**

**Description**

[hologres.hg\_table\_properties](#section-eo9-rt7-6kb)

Contains information about all tables in the current database and the properties of these tables.

[pg\_catalog.pg\_tables](#section-eu4-0a7-24n)

Contains the information about relations among objects such as tables and views.

[pg\_catalog.pg\_locks](#section-0nj-0dx-8t1)

Contains the lock information about tables.

[pg\_catalog.pg\_class](#section-01p-hgi-gjj)

Contains information such as the relationships between tables. This table is the PostgreSQL metadata table and is typically used together with other PostgreSQL system tables.

[hologres\_statistic.hg\_table\_statistic](#section-92s-oxs-jes)

Contains statistics of Hologres. The data is shared among multiple nodes.

[pg\_catalog.pg\_stats](#section-gsh-eq4-0ed)

Contains statistics of PostgreSQL. The data is used by the planner on a single node.

[pg\_catalog.pg\_roles](#section-2kf-e6e-a64)

Contains roles in Hologres instances and their permissions.

[information\_schema.role\_table\_grants](#section-dg4-a06-jpy)

Contains the permissions that are granted to roles on objects such as tables and views.

## Limits

-   A table whose name starts with `hg` is a Hologres system table. A table whose name starts with `pg` is a PostgreSQL system table. You cannot query data by joining PostgreSQL system tables with Hologres internal tables that you created. You cannot import data from the PostgreSQL system tables to the Hologres internal tables.
    
    **Note**
    
    In Hologres V1.3.22 and later, you can query data by joining PostgreSQL system tables with Hologres internal tables that you created, and you can import data from the PostgreSQL system tables to the Hologres internal tables. If you want to perform these operations, upgrade your Hologres instance to V1.3.22 or later.
    
-   In Hologres, the object identifier (OID) field in a system table specifies the unique identifier of the relation among objects such as tables, indexes, and views. PostgreSQL is a standalone system, whereas Hologres is a distributed system. A Hologres instance has multiple FE nodes. In most cases, OID values of all FE nodes are different. If query results contain OID values, the OID values may be inconsistent.
    

## hologres.hg\_table\_properties

The hologres.hg\_table\_properties system table contains information about all tables in the current database and the properties of these tables. The following table describes the columns in the hologres.hg\_table\_properties system table.

**Column**

**Description**

table\_namespace

The name of the schema to which the table belongs. Hologres provides the following system schemas:

-   hologres: contains Hologres system tables.
    
-   hologres\_statistic: contains tables that are used to store statistics.
    
-   pg\_catalog: contains PostgreSQL metadata tables.
    

table\_name

The name of the table. Hologres provides the following system tables:

-   hologres.hg\_insert\_progress\_stats: contains the execution progress information of the INSERT statement.
    
-   hologres.hg\_table\_properties: contains the indexes and properties of tables.
    
-   hologres.hg\_table\_group\_properties: contains the metadata of the table group.
    
-   hologres\_statistic.hg\_table\_statistic: contains statistics of tables.
    
-   pg\_catalog.pg\_stat\_activity: contains the running data about queries.
    

property\_key

The property of the table. The table has the following properties:

-   table\_id: the ID of the table. Each table is assigned an ID for identification purposes.
    
-   clustering\_index\_id: the ID of the clustering key.
    
-   clustering\_index\_name: the name of the clustering key.
    
-   lifecycle\_in\_days: the time-to-live (TTL) of the table. If the value is \-1, the table is permanently valid. Hologres does not allow you to change the value.
    
-   storage\_format: the storage format of table data. For row-oriented tables, the value is sst. For column-oriented tables in Hologres V0.10 or later, the value is orc by default.
    
-   table\_group: the name of the table group to which the table belongs.
    
-   schema\_version: the version of the table.
    
-   primary\_key: the primary key of the table.
    
-   orientation: the storage mode of the table. Valid values:
    
    -   row: row-oriented storage.
        
    -   column: column-oriented storage.
        
    -   row,column: hybrid row-column storage. Hologres V1.1 and later support this storage mode.
        
-   distribution\_key: the distribution key that is specified for the table.
    
-   dictionary\_encoding\_columns: the dictionary mapping that is specified for the table.
    
-   bitmap\_columns: the bitmap index that is specified for the table.
    
-   clustering\_key: the clustering key that is specified for the table.
    
-   create\_time: the time when the table was created.
    
-   last\_ddl\_time: the time when the DDL statement was last executed.
    
-   storage\_mode: the tiered storage property of the table. Valid values:
    
    -   hot: standard storage.
        
    -   cold: Ingrequent Access (IA) storage.
        

property\_value

The value of the table property.

## pg\_catalog.pg\_tables

The pg\_catalog.pg\_tables system table contains metadata of tables. The following table describes the columns in the pg\_catalog.pg\_tables system table.

**Column**

**Description**

schemaname

The name of the schema to which the table belongs. In addition to the schemas that you created, Hologres provides the following system schemas:

-   hologres: contains Hologres system tables.
    
-   pg\_catalog: contains PostgreSQL metadata tables.
    
-   information\_schema: contains views of the current database.
    

tablename

The table name.

tableowner

The owner of the table. Valid values:

-   holo\_admin: the system account, which is the owner of system tables. The value cannot be changed.
    
-   developer: the account with the simple permission model (SPM) or schema-level permission model (SLPM) enabled.
    

tablespace

This column is not applicable in Hologres.

hasindexes

The value is true if the table has or had an index.

hasrules

The value is true if the table has or had a rule.

hastriggers

The value is true if the table has or had a trigger.

rowsecurity

The value is true if the table has a security rule enabled. This column is not applicable in Hologres.

## pg\_catalog.pg\_locks

The pg\_catalog.pg\_locks system table contains the runtime lock information and is typically used to identify whether a lock exists if a DDL statement or a query cannot be executed. The following table describes the columns in the pg\_catalog.pg\_locks system table.

**Column**

**Description**

locktype

The type of the lock. Valid values:

-   relation: table lock.
    
-   extend, page, tuple, transactionid, virtualxid, object, and userlock: PostgreSQL lock. These values are not applicable in Hologres.
    
-   advisory: DDL lock.
    

database

The OID of the database in which the object resides.

relation

The OID of the table. If the object is not a table or part of a table, the column has null values.

page

This column is not applicable in Hologres.

tuple

This column is not applicable in Hologres.

virtualxid

The virtual ID of the transaction. If the object is not a virtual transaction ID, this column has null values.

transactionid

The ID of the transaction. If the object is not a transaction ID, this column has null values.

classid

The OID of the system table that contains the object. If the object is not a regular database object, this column has null values. This column is not applicable in Hologres.

objid

This column is not applicable in Hologres.

objsubid

This column is not applicable in Hologres.

virtualtransaction

The ID of the transaction that is holding or awaiting the lock. This column is not applicable in Hologres.

pid

The ID of the server process that is holding or awaiting the lock. You can query process information in the [pg\_catalog.pg\_stat\_activity](/help/en/hologres/user-guide/manage-queries#section-gnd-zky-4q7) table.

mode

The lock mode of the process. The lock modes include a shared lock and an exclusive lock.

granted

-   If the lock is held, the value is true.
    
-   If the lock is awaited, the value is false.
    

fastpath

-   If the lock is obtained by using a fast path, the value is true.
    
-   If the lock is obtained from the main lock table, the value is false.
    

This column is not applicable in Hologres.

## pg\_catalog.pg\_class

The pg\_catalog.pg\_class system table contains all PostgreSQL system information. The following table describes the columns in the pg\_catalog.pg\_class system table.

**Column**

**Description**

oid

The unique identifier of the relation among objects such as tables, indexes, and views.

**Note**

PostgreSQL is a standalone system, whereas Hologres is a distributed system. A Hologres instance has multiple FE nodes. In most cases, OID values of all FE nodes are different. If query results contain OID values, the OID values may be inconsistent.

relname

The name of the relation among objects such as tables, indexes, and views.

relnamespace

The OID of the schema that contains the relation.

reltype

This column is not applicable in Hologres.

reloftype

This column is not applicable in Hologres.

relowner

The owner of the relation.

relam

This column is not applicable in Hologres.

relfilenode

This column is not applicable in Hologres.

reltablespace

This column is not applicable in Hologres.

relpages

This column is not applicable in Hologres.

reltuples

The number of rows in the table. This is only an estimated number used by the planner. You can change the value by using VACUUM statements, ANALYZE statements, or DDL statements. This column is used to specify the number of rows of statistics in Hologres.

relallvisible

The number of pages that are marked all-visible in the visibility map of the table. This is only an estimated number used by the planner. You can change the value by using VACUUM statements, ANALYZE statements, or DDL statements. This column is used to specify the version of statistics in Hologres.

reltoastrelid

This column is not applicable in Hologres.

relhasindex

The value is true if the table has or had an index.

relisshared

The value is true if the table is shared across all databases in the cluster. Only specific system tables such as the pg\_catalog.pg\_database system table are shared. This column is not applicable in Hologres.

relpersistence

Valid values:

-   p: the permanent table.
    
-   u: the unlogged table.
    
-   t: the temporary table.
    

relkind

Valid values:

-   r: the ordinary table.
    
-   i: the index.
    
-   S: the sequence.
    
-   v: the view.
    
-   m: the materialized view.
    
-   c: the composite type.
    
-   t: the TOAST table.
    
-   f: the foreign table.
    

relnatts

The number of columns in the table. System columns are excluded.

relchecks

The number of check constraints on the table. This column is not applicable in Hologres.

relhasoids

The value is true if an OID is generated for each row of the relation. This column is not applicable in Hologres.

relhaspkey

The value is true if the table has or had a primary key.

relhasrules

The value is true if the table has or had a rule. This column is not applicable in Hologres.

relhastriggers

The value is true if the table has or had a trigger. This column is not applicable in Hologres.

relhassubclass

The value is true if the table has or had an inherited child table.

relispopulated

This column is not applicable in Hologres.

relreplident

This column is not applicable in Hologres.

relfrozenxid

This column is not applicable in Hologres.

relminmxid

This column is not applicable in Hologres.

relacl

The access permissions.

reloptions

The property of the table. For example, the autovacuum\_enabled=false string indicates that the auto-vacuum and auto-analyze features are disabled for the table.

## hologres\_statistic.hg\_table\_statistic

The hologres\_statistic.hg\_table\_statistic system table contains statistics of Hologres. The following table describes the columns in the hologres\_statistic.hg\_table\_statistic system table.

**Column**

**Description**

unique\_name

The unique identifier of the table.

schema\_version

The version of the table.

statistic\_version

The version of statistics.

statistics

The content of statistics, which is encoded in Base64.

schema\_name

The name of the schema to which the table belongs.

table\_name

The name of the table.

total\_rows

The total number of rows in the table.

sample\_rows

The number of rows that are sampled for the statistics.

nattr

The number of columns in the table.

used\_attrs

The column that is used for the ANALYZE statement.

histogram\_attrs

The column that contains statistics of histograms.

ndv\_attrs

The column that contains statistics of distinct values.

user\_name

The user who executes the ANALYZE statement or uses the auto-analyze feature.

analyze\_timestamp

The time when the ANALYZE statement is executed or the time when the auto-analyze feature is used.

analyze\_cost

The amount of time consumed by the ANALYZE statement or the auto-analyze feature.

analyze\_count

The number of times that the ANALYZE statement is executed or the number of times that the auto-analyze feature is used.

## pg\_catalog.pg\_stats

The pg\_catalog.pg\_stats system table contains statistics of PostgreSQL. The following table describes the columns in the pg\_catalog.pg\_stats system table.

**Column**

**Description**

schemaname

The name of the schema.

tablename

The name of the table.

attname

The name of the column.

inherited

If the value of this column is true, this column includes an inherited subcolumn.

null\_frac

The fraction of columns that have null values.

avg\_width

The average width in bytes of the entries of the column.

n\_distinct

-   The estimated number of distinct values in the column if the value is greater than zero.
    
-   The number of distinct values divided by the number of rows if the value is less than zero. The negative form is used when the ANALYZE statement indicates that the number of distinct values is likely to increase as the table data grows. The positive form is used when the column seems to have a fixed number of distinct values.
    

For example, -1 indicates a unique column in which the number of distinct values is the same as the number of rows.

most\_common\_vals

A list of the most common values in the column. This column has null values if no values in this column are common.

most\_common\_freqs

A list of the frequencies of the most common values. The value is calculated by dividing the number of occurrences of each common value by the total number of rows. This column has null values if the most\_common\_vals column has null values.

histogram\_bounds

A list of values that divide the values of the column into groups of approximately equal values. If the most\_common\_vals column exists, the values in the most\_common\_vals column are omitted from this histogram calculation.

correlation

This column is not applicable in Hologres.

most\_common\_elems

A list of non-null element values that most often appear within the values of the column.

most\_common\_elem\_freqs

A list of the frequencies of the most common element values. It is the fraction of rows that contain at least one instance of the given value. This column has null values if the most\_common\_elems column has null values.

elem\_count\_histogram

This column is not applicable in Hologres.

## pg\_catalog.pg\_roles

The pg\_catalog.pg\_roles system table contains roles in Hologres instances and their permissions. The following table describes the columns in the pg\_catalog.pg\_roles system table.

**Column**

**Description**

rolname

The name of the role.

rolsuper

Indicates whether the role has permissions of a superuser. Valid values:

-   f: The role does not have permissions of a superuser.
    
-   t: The role has permissions of a superuser.
    

rolinherit

Indicates whether the role can inherit permissions of another role if the role is a member of another role. Valid values:

-   f: The role cannot inherit permissions of another role.
    
-   t: The role can inherit permissions of another role.
    

rolcreaterole

Indicates whether the role can create more roles. Valid values:

-   f: The role cannot create more roles.
    
-   t: The role can create more roles.
    

rolcreatedb

Indicates whether the role can create databases. Valid values:

-   f: The role cannot create databases.
    
-   t: The role can create databases.
    

rolcanlogin

Indicates whether the role can connect to instances. Valid values:

-   f: The role cannot connect to instances.
    
-   t: The role can connect to instances.
    

rolreplication

This column is not applicable in Hologres.

rolconnlimit

The maximum number of concurrent connections the role can establish. If the value is -1, the maximum number of concurrent connections is not configured in Hologres.

rolpassword

This column is not applicable in Hologres.

rolvaliduntil

This column is not applicable in Hologres.

rolbypassrls

This column is not applicable in Hologres.

rolconfig

This column is not applicable in Hologres.

oid

The unique ID of the role.

## information\_schema.role\_table\_grants

The information\_schema.role\_table\_grants table contains the permissions granted to roles on objects such as tables and views in Hologres instances. The following table describes the columns in the information\_schema.role\_table\_grants table.

**Column**

**Description**

grantor

The role of the authorizer.

grantee

The role of the authorized party.

table\_catalog

The name of the database.

table\_schema

The name of the schema.

table\_name

The name of the table.

privilege\_type

The type of the granted permission. Valid values:

-   SELECT
    
-   INSERT
    
-   UPDATE
    
-   DELETE
    
-   TRUNCATE
    
-   REFERENCES
    
-   TRIGGER
    

is\_grantable

The value is `YES` if the permission can be granted. Otherwise, the value is `NO`.

with\_hierarchy

The value is `YES` if the type of the permission is SELECT. Otherwise, the value is `NO`.

## Common SQL statements

Some common statements can be executed in psql, which is a PostgreSQL client application. For more information, see [psql](http://www.postgres.cn/docs/11/app-psql.html). You can use the following common SQL statements based on your business requirements.

### Query indexes and properties of a table in Hologres

```
SELECT * FROM hologres.hg_table_properties where table_name = '<tablename>';
```

The tablename parameter specifies the name of the table.

### Query the DDL statements that are used to create a table and a view

```
select hg_dump_script('<tablename>'); -- Query the DDL statement that is used to create a table.
select hg_dump_script('<viewname>');  -- Query the DDL statement that is used to create a view.
```

**Note**

If the preceding statements fail to be executed, you must execute the following statement to install an extension in the database:

```
create extension hg_toolkit;
```

### Query the endpoint of an instance

To query the endpoint of an instance, you can use the Hologres console or execute the following statement:

```
show hg_frontend_endpoints;
```

### Query all databases in the current instance

```
SELECT
    d.datname AS "Name",
    pg_catalog.pg_get_userbyid(d.datdba) AS "Owner",
    pg_catalog.pg_encoding_to_char(d.encoding) AS "Encoding",
    d.datcollate AS "Collate",
    d.datctype AS "Ctype",
    pg_catalog.array_to_string(d.datacl, E'\n') AS "Access privileges"
FROM
    pg_catalog.pg_database d
WHERE
    d.datname != 'postgres'
    AND d.datname != 'template0'
    AND d.datname != 'template1'
ORDER BY
    1;
```

### Query all user mappings in the current database

```
SELECT
    um.srvname AS "Server",
    um.usename AS "User name"
FROM
    pg_catalog.pg_user_mappings um
WHERE
    um.srvname != 'query_log_store_server'
ORDER BY
    1,
    2;
```

### Query all schemas in the current database

```
SELECT
    n.nspname AS "Name",
    pg_catalog.pg_get_userbyid(n.nspowner) AS "Owner"
FROM
    pg_catalog.pg_namespace n
WHERE
    n.nspname !~ '^pg_'
    AND n.nspname <> 'information_schema'
    AND n.nspname != 'hologres'
    AND n.nspname != 'hologres_sample'
    AND n.nspname != 'hologres_statistic'
    AND n.nspname !~ '^hg_'
    AND n.nspname !~ '^holo_'
ORDER BY
    1;
```

### Query all internal tables, foreign tables, and views in the current database

```
SELECT
    n.nspname AS "Schema",
    c.relname AS "Name",
    CASE c.relkind
    WHEN 'r' THEN
        'table'
    WHEN 'v' THEN
        'view'
    WHEN 'm' THEN
        'materialized view'
    WHEN 'i' THEN
        'index'
    WHEN 'S' THEN
        'sequence'
    WHEN 's' THEN
        'special'
    WHEN 'f' THEN
        'foreign table'
    WHEN 'p' THEN
        'partitioned table'
    WHEN 'I' THEN
        'partitioned index'
    END AS "Type",
    pg_catalog.pg_get_userbyid(c.relowner) AS "Owner"
FROM
    pg_catalog.pg_class c
    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE
    c.relkind IN ('r', 'p', 'v', 'm', 'S', 'f', '')
    AND n.nspname <> 'pg_catalog'
    AND n.nspname <> 'information_schema'
    AND n.nspname !~ '^pg_toast'
    AND pg_catalog.pg_table_is_visible(c.oid)
ORDER BY
    1,
    2;
```

### Query all tables (excluding system tables) in the current schema and the owners of these tables

```
-- Query all tables in the current database. System tables are included.
SELECT * FROM pg_tables


-- Query all tables in the current schema and the owners of these tables. System tables are excluded.
SELECT  n.nspname as "Schema"
        ,c.relname as "Name"
        ,CASE c.relkind WHEN 'r' THEN 'table' WHEN 'v' THEN 'view' WHEN 'm' THEN 'materialized view' WHEN 'i' THEN 'index' WHEN 'S' THEN 'sequence' WHEN 's' THEN 'special' WHEN 'f' THEN 'foreign table' WHEN 'p' THEN 'partitioned table' WHEN 'I' THEN 'partitioned index' END as "Type"
        ,pg_catalog.pg_get_userbyid(c.relowner) as "Owner"
FROM    pg_catalog.pg_class c
LEFT JOIN pg_catalog.pg_namespace n
ON      n.oid = c.relnamespace
WHERE   c.relkind IN ('r','p','v','m','S','f','')
and     n.nspname <> 'pg_catalog'
and     n.nspname <> 'information_schema'
and     n.nspname !~ '^pg_toast'
and     pg_catalog.pg_table_is_visible(c.oid)
ORDER BY 1, 2;
            
```

### Query all child tables to which a parent table corresponds

```
-- Query child tables to which a parent table corresponds by specifying partition key values.
SELECT  c.oid::pg_catalog.regclass
        ,c.relkind
        ,pg_catalog.pg_get_expr(c.relpartbound, c.oid)
FROM    pg_catalog.pg_class c
        ,pg_catalog.pg_inherits i
WHERE   c.oid = i.inhrelid
AND     i.inhparent::pg_catalog.regclass = 'parent_table_name'::pg_catalog.regclass
ORDER BY pg_catalog.pg_get_expr(c.relpartbound, c.oid) = 'DEFAULT'
;



-- Query child tables to which a parent table corresponds without specifying partition key values.
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

### Query the creation time and parent tables of all child tables

```
select
        cn.nspname as child_schema_name,c.relname as child_table_name,
        pn.nspname as parent_schema_name,p.relname as parent_table_name,
        to_timestamp(cp.property_value::bigint) as create_time
from pg_inherits i
left join pg_class p on p.oid=i.inhparent
left join pg_namespace pn on pn.oid = p.relnamespace
left join pg_class c on c.oid=i.inhrelid
left join pg_namespace cn on cn.oid = c.relnamespace
left join hologres.hg_table_properties cp on cp.property_key='create_time' and cp.table_namespace=pn.nspname and cp.table_name = c.relname;
```

### Query all foreign tables and the MaxCompute tables to which the foreign tables correspond

```
SELECT  n.nspname
        ,c.relname
        ,s.srvname
        ,pg_catalog.array_to_string(
            ARRAY(
                SELECT pg_catalog.quote_ident(option_name) || ' ' || pg_catalog.quote_literal(option_value) FROM pg_catalog.pg_options_to_table(ftoptions)
            )
            ,', '
        )
FROM    pg_catalog.pg_foreign_table f
        ,pg_catalog.pg_foreign_server s
        ,pg_catalog.pg_class c
        ,pg_catalog.pg_namespace n
WHERE   s.oid = f.ftserver
and     c.oid = f.ftrelid
and     c.relnamespace = n.oid
and     n.nspname not in ('hologres', 'hologres_statistic', 'pg_catalog', 'pg_toast')
;
            
```

### Query all views in the current database

```
SELECT
    n.nspname AS "Schema",
    c.relname AS "Name",
    CASE c.relkind
    WHEN 'r' THEN
        'table'
    WHEN 'v' THEN
        'view'
    WHEN 'm' THEN
        'materialized view'
    WHEN 'i' THEN
        'index'
    WHEN 'S' THEN
        'sequence'
    WHEN 's' THEN
        'special'
    WHEN 'f' THEN
        'foreign table'
    WHEN 'p' THEN
        'partitioned table'
    WHEN 'I' THEN
        'partitioned index'
    END AS "Type",
    pg_catalog.pg_get_userbyid(c.relowner) AS "Owner"
FROM
    pg_catalog.pg_class c
    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE
    c.relkind IN ('v', '')
    AND n.nspname <> 'pg_catalog'
    AND n.nspname <> 'information_schema'
    AND n.nspname !~ '^pg_toast'
    AND pg_catalog.pg_table_is_visible(c.oid)
ORDER BY
    1,
    2;
```

### Query the views that depend on a table

```
select * from information_schema.view_table_usage where table_name = '<table_name>';
```

### Query comments on a table and comments on fields in a table

-   Query comments on fields in a table.
    
    ```
    SELECT a.attname as Column,
      pg_catalog.format_type(a.atttypid, a.atttypmod) as "Type",
      a.attnotnull as "Nullable",
      pg_catalog.col_description(a.attrelid, a.attnum) as "Description"
    FROM pg_catalog.pg_attribute a
    WHERE a.attnum > 0 AND NOT a.attisdropped AND a.attrelid = '<schema.tablename>'::regclass::oid
    ORDER BY a.attnum;
    ```
    
    In this example, schema.tablename indicates `{Schema name}.{Table name}`.
    
-   Query comments and related information about a table, such as the table owner.
    
    ```
    SELECT n.nspname as "Schema",
      c.relname as "Name",
      CASE c.relkind WHEN 'r' THEN 'table' WHEN 'v' THEN 'view' WHEN 'm' THEN 'materialized view' WHEN 'i' THEN 'index' WHEN 'S' THEN 'sequence' WHEN 's' THEN 'special' WHEN 'f' THEN 'foreign table' WHEN 'p' THEN 'table' WHEN 'I' THEN 'index' END as "Type",
      pg_catalog.pg_get_userbyid(c.relowner) as "Owner",
      pg_catalog.pg_size_pretty(pg_catalog.pg_table_size(c.oid)) as "Size",
      pg_catalog.obj_description(c.oid, 'pg_class') as "Description"
    FROM pg_catalog.pg_class c
         LEFT JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
    WHERE c.relkind IN ('r','p','v','m','S','f','')
          AND n.nspname <> 'pg_catalog'
          AND n.nspname <> 'information_schema'
          AND n.nspname !~ '^pg_toast'
      AND pg_catalog.pg_table_is_visible(c.oid)
    ORDER BY 1,2;
    
    
    -- The following result is returned:
                            List of relations
     Schema | Name | Type  |      Owner       |  Size   | Description
    --------+------+-------+------------------+---------+-------------
     public | a    | table | 1365937xxxx | xxxx bytes | abcdef
    (1 row)
    ```
    
-   Query comments on a specified table.
    
    ```
    select pg_catalog.obj_description('<tablename>'::regclass::oid, 'pg_class') as "Description";
    
    -- The following result is returned:
    Description
    ------------
    abcdef
    ```
    
    In this example, tablename indicates the name of the table whose comments you want to query.
    

### Query all users and roles in a database

```
SELECT
    r.rolname,
    r.rolsuper,
    r.rolinherit,
    r.rolcreaterole,
    r.rolcreatedb,
    r.rolcanlogin,
    r.rolconnlimit,
    r.rolvaliduntil,
    ARRAY (
        SELECT
            b.rolname
        FROM
            pg_catalog.pg_auth_members m
            JOIN pg_catalog.pg_roles b ON (m.roleid = b.oid)
        WHERE
            m.member = r.oid) AS memberof,
    r.rolreplication,
    r.rolbypassrls
FROM
    pg_catalog.pg_roles r
WHERE
    r.rolname !~ '^pg_'
    AND r.rolname != 'holo_admin'
ORDER BY
    1;
```

### Query all extensions in a database

```
SELECT
    e.extname AS "Name",
    e.extversion AS "Version",
    n.nspname AS "Schema",
    c.description AS "Description"
FROM
    pg_catalog.pg_extension e
    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = e.extnamespace
    LEFT JOIN pg_catalog.pg_description c ON c.objoid = e.oid
        AND c.classoid = 'pg_catalog.pg_extension'::pg_catalog.regclass
WHERE
    e.extname != 'hg_admin_cmd'
    AND e.extname != 'holo_dump_stat'
    AND e.extname != 'holo_funcs'
    AND e.extname != 'holo_link'
    AND e.extname != 'holo_system_admin'
    AND e.extname != 'holo_dump_stat'
    AND e.extname != 'query_log'
    AND e.extname != 'plpgsql'
ORDER BY
    1;
```

### Query the permissions of an account

```
SELECT * FROM pg_roles where rolname='<uid>'
```

### Query all users of an instance and their permissions

```
SELECT  r.rolname
        ,r.rolsuper
        ,r.rolinherit
        ,r.rolcreaterole
        ,r.rolcreatedb
        ,r.rolcanlogin
        ,r.rolconnlimit
        ,r.rolvaliduntil
        ,ARRAY(
            SELECT b.rolname FROM pg_catalog.pg_auth_members m JOIN pg_catalog.pg_roles b ON (m.roleid = b.oid) WHERE m.member = r.oid
        ) as memberof
        ,r.rolreplication
        ,r.rolbypassrls
FROM    pg_catalog.pg_roles r
WHERE   r.rolname !~ '^pg_'
ORDER BY 1;
```

### Query all tables on which a user has permissions

```
SELECT current_database()::information_schema.sql_identifier AS table_catalog,
    nc.nspname::information_schema.sql_identifier AS table_schema,
    c.relname::information_schema.sql_identifier AS table_name,
        CASE
            WHEN nc.oid = pg_my_temp_schema() THEN 'LOCAL TEMPORARY'::text
            WHEN c.relkind = ANY (ARRAY['r'::"char", 'p'::"char"]) THEN 'BASE TABLE'::text
            WHEN c.relkind = 'v'::"char" THEN 'VIEW'::text
            WHEN c.relkind = 'f'::"char" THEN 'FOREIGN'::text
            ELSE NULL::text
        END::information_schema.character_data AS table_type,
        CASE
            WHEN (c.relkind = ANY (ARRAY['r'::"char", 'p'::"char"])) OR (c.relkind = ANY 
(ARRAY['v'::"char", 'f'::"char"])) AND (pg_relation_is_updatable(c.oid::regclass, false) 
& 8) = 8 THEN 'YES'::text
            ELSE 'NO'::text
        END::information_schema.yes_or_no AS is_insertable_into,
        CASE
            WHEN t.typname IS NOT NULL THEN 'YES'::text
            ELSE 'NO'::text
        END::information_schema.yes_or_no AS is_typed,
    NULL::character varying::information_schema.character_data AS commit_action
   FROM pg_namespace nc
     JOIN pg_class c ON nc.oid = c.relnamespace
     LEFT JOIN (pg_type t
     JOIN pg_namespace nt ON t.typnamespace = nt.oid) ON c.reloftype = t.oid
  WHERE (c.relkind = ANY (ARRAY['r'::"char", 'v'::"char", 'f'::"char", 'p'::"char"])) AND 
NOT pg_is_other_temp_schema(nc.oid) AND (pg_has_role('<USERID>', c.relowner, 'USAGE'::text)
 OR has_table_privilege('<USERID>', c.oid, 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'::text)
 OR has_any_column_privilege('<USERID>', c.oid, 'SELECT, INSERT, UPDATE, REFERENCES'::text));
```

### Query all users who have permissions on a table

```
select rolname from pg_roles where has_table_privilege(rolname, '<schemaname>.<tablename>',
 'SELECT,INSERT,UPDATE,DELETE,TRUNCATE,REFERENCES,TRIGGER');
            
```
