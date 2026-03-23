Hologres provides a table recycle bin feature. When you delete a table using the `DROP TABLE` command, it is automatically moved to the recycle bin. This lets you restore deleted tables and prevent data loss from accidental operations.

## **Limits**

-   The table recycle bin feature is available only for Hologres instances V3.1 and later.
    
-   Tables in the recycle bin still consume memory. Therefore, do not enable the recycle bin feature for tables that have vector indexes. For more information, see [Proxima Graph index usage guide](/help/en/hologres/user-guide/guide-on-vector-processing).
    

## **How it works**

When you delete internal tables, partitioned tables (both parent and child tables), or dynamic tables with the `DROP TABLE [CASCADE]` or `DROP DYNAMIC TABLE [CASCADE]` command, Hologres automatically moves them to the table recycle bin.

Tables in the recycle bin are stored in a separate schema named `hg_recyclebin`. The table name, data, properties, and indexes are retained.

**Note**

-   Tables are not moved to the recycle bin if you run the TRUNCATE or INSERT OVERWRITE command.
    
-   Foreign tables, views, and materialized views are not moved to the recycle bin.
    
-   If a time-to-live (TTL) is set for a table, the TTL remains in effect in the recycle bin. The system periodically clears table data based on the TTL.
    

## **Enable or disable the recycle bin**

```
-- Enable the recycle bin for the database.
ALTER DATABASE <db_name> SET hg_enable_recyclebin = ON; 

-- Disable the recycle bin for the database.
ALTER DATABASE <db_name> SET hg_enable_recyclebin = OFF; 
```

**Note**

-   The table recycle bin feature is enabled by default for new and existing instances of V3.1 or later.
    
-   After you disable the recycle bin, you can still recover or purge tables that are already in it. However, any tables that you delete after disabling the feature are not moved to the recycle bin.
    
-   Only the superuser of the current instance can run this SQL command. The command only needs to be run once for each DB.
    

## **Recover tables**

You can use the following command to recover a deleted table. If a table with the same name exists, you can specify the `table_id` (supported in V3.1.18 and later) or `id` (supported in all versions) to identify the table that you want to recover.

```
RECOVER TABLE <table_name>;

-- If a table with the same name exists, specify the table_id to recover it (for V3.1.18 and later).
RECOVER TABLE <table_name> WITH (table_id = xxxx); 

-- General syntax (for all versions).
RECOVER TABLE <table_name> [WITH (id = xxxx)];
```

Note the following:

-   **When you recover a table**
    
    The table data, properties, and indexes, such as the primary key (PK), clustering key, and segment key, are recovered. If the table has a TTL set, the TTL remains in effect, and the system periodically clears data based on the TTL.
    
-   **Before you recover a table**
    
    -   If a table with the same name already exists in the schema, you must delete or rename the existing table. Otherwise, the RECOVER command fails. However, if the existing table has a PK or clustering key, you must move it to a different schema before you run the RECOVER command. For more information, see [Examples](#bafce2612b79d).
        
    -   The recovery operation fails if the schema to which the table belongs has been deleted.
        
-   **For partitioned tables**
    
    -   A recovered child table becomes a standard table. You must manually [attach](/help/en/hologres/developer-reference/alter-partition-table) it to the parent table.
        
    -   If you recover a parent table, both the parent and its child tables are restored to their original partitioned structure. You do not need to manually attach the child tables.
        
    -   If dynamic partitioning was enabled on a parent table, it is not automatically configured after recovery. You must enable it manually. For more information, see [Dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management).
        
-   **For dynamic tables**
    
    -   A recovered dynamic table becomes a standard table. You can query its data, but the table no longer refreshes automatically. If you require the auto-refresh capability, you must recreate the dynamic table. For more information, see [ALTER DYNAMIC TABLE](/help/en/hologres/developer-reference/alter-dynamic-table).
        
    -   Recovering a base table does not recover its dependent dynamic table.
        
-   **For cascading scenarios**
    
    When you use the `DROP TABLE xxx CASCADE` command to delete a table, its dependent objects, such as views and materialized views, are also deleted. When you recover the table, only the target table is recovered. The views, materialized views, and dynamic tables are not recovered. Dependent dynamic tables are also not recovered.
    
    For example, assume a dynamic table depends on view1, and view1 depends on table1. The `DROP TABLE table1 CASCADE` command deletes both the dynamic table and view1. After you run the RECOVER command, the dynamic table and view1 are not recovered and must be recreated manually.
    
-   **Permissions to recover a table**
    
    You need specific permissions to run the RECOVER command. For more information, see [Permissions](#31f6f75ebfypz).
    

## **Manage the recycle bin**

### **Supported operations**

The following operations are supported for tables in the recycle bin:

-   RECOVER (recover a table) and PURGE (purge a table).
    
-   View table details using `hologres.hg_recyclebin`.
    

### **View table details**

You can run the following statement to view the details of tables in the recycle bin:

**Note**

Table owners can view only the tables that they own in the recycle bin. They cannot see tables owned by other users. A superuser can view all tables in the recycle bin.

```
SELECT * FROM hologres.hg_recyclebin;
```

The following table describes the parameters in the returned information.

**Parameter name**

**Description**

table\_id

The unique ID of the table in the recycle bin. It is used to identify the table.

schema\_name

The schema where the table was located before it was deleted.

table\_name

The name of the deleted table.

table\_owner

The owner of the table before it was deleted.

dropby

The user who deleted the table.

drop\_time

The time when the table was deleted.

### **Check the storage of tables in the recycle bin**

-   You can use the following syntax to check the storage of a table in the recycle bin. The `table_id` parameter is not required. If the schema name and table name are not unique, you can use `table_id` to specify a table.
    
    ```
    -- View the storage size of a table in the recycle bin.
    SELECT hologres.hg_recyclebin_relation_size('<schema_name.table_name>'[,<table_id>]);
    
    -- Use the following syntax to return a value with a unit.
    SELECT PG_SIZE_PRETTY(hologres.hg_recyclebin_relation_size('<schema_name.table_name>'[,<table_id>]));
    ```
    
    The following examples show how to use the syntax:
    
    ```
    -- Assume that the deleted table is named tbl1 and belongs to the public schema.
    SELECT hologres.hg_recyclebin_relation_size('public.tbl1');
    
    -- If multiple tables in the recycle bin have the same schema and table name, use table_id to specify a specific table. For example:
    SELECT hologres.hg_recyclebin_relation_size('public.tbl1', 42);
    ```
    
-   You can view the storage occupied by the table recycle bin of each DB using monitoring metrics.
    
    Starting from V3.1.32, V3.2.12, and V4.0.2, Hologres provides storage monitoring metrics for the table recycle bin. You can use these metrics to view the storage of the recycle bin in each DB.
    

### **Set the retention period for the recycle bin**

By default, tables in the recycle bin are retained for one day. After this period, the system automatically purges the tables, and they cannot be recovered. You can [enable or disable the recycle bin](#a5b4629d5dumn). You can also use the following syntax to change the retention period as needed.

```
ALTER DATABASE <db_name> SET hg_recyclebin_retention_days = 5; -- Change the retention period of the table to 5 days.
```

**Note**

-   Storage fees are still charged for tables in the recycle bin.
    
-   The retention period is measured in days. The minimum value is 1, and the maximum is 10.
    
-   Only a superuser can run this statement. The statement takes effect at the DB level.
    

### **Purge tables from the recycle bin**

You can manually purge tables from the recycle bin using the PURGE command. The commands are as follows:

```
-- Purge a single table.
purge TABLE {table_name};

-- Purge all tables from the recycle bin. This command must be run by a superuser.
CALL hologres.hg_purge_all_tables();
```

**Note**

-   After the command runs successfully, the table is immediately deleted. It cannot be found in the recycle bin or recovered.
    
-   You can purge only tables. You cannot purge dependent dynamic tables.
    
-   Permissions to purge tables: You need specific permissions to run the PURGE command. For more information, see [Permissions](#31f6f75ebfypz).
    

## **Delete a table and bypass the recycle bin**

By default, tables deleted with the `DROP TABLE` or `DROP Dynamic Table [CASCADE]` command are moved to the recycle bin. To bypass the recycle bin and permanently delete a table, you can use the following command:

```
DROP TABLE <table_name> [CASCADE] FORCE;
```

## **Permissions**

### **Query permissions in the recycle bin**

-   Table owners can view only their own deleted tables, not tables deleted by other users.
    
-   Superusers can view all tables in the recycle bin.
    

### **Permissions to delete, recover, and purge tables in the recycle bin**

-   **Delete a Table**
    
    Only superusers, users in the Developer or Admin user group (SPM/SLPM), and table owners (standard PostgreSQL authorization model) can run the `DROP` command to move a table to the recycle bin.
    
-   **Purging tables**
    
    Only superusers, users in the Developer or Admin user group (SPM/SLPM), and table owners (standard PostgreSQL authorization model) can run the `PURGE` command to purge a table from the recycle bin.
    
-   **Table recovery**
    
    Only superusers, users in the Developer or Admin user group (SPM/SLPM), table owners (standard PostgreSQL authorization model), and the user who deleted the table can run the `RECOVER` command to recover a table.
    

**Note**

-   In the SPM/SLPM [permission models](/help/en/hologres/security-and-compliance/hologres-permission-model/#section-7zq-3e6-ya6), only users who were in the Developer or Admin user group before a table was moved to the recycle bin can manage that table in the recycle bin. A user who is added to the Developer or Admin user group after the table is moved to the recycle bin cannot manage the table.
    
-   When you switch from SPM/SLPM to expert mode, only a Superuser can revert and purge tables in the recycle bin.
    

**Special example:**

If user1 is the owner of schema1 and user2 is the owner of schema1.table2, user1 can delete schema1 and schema1.table2. However, user1 cannot access schema1.table2 because user2 has not granted the required permissions to user1.

```
-- 1. user1 creates schema1 and grants the CREATE permission on the schema to user2.
CREATE SCHEMA schema1;
GRANT CREATE ON SCHEMA schema1 TO "BASIC$user2";

-- 2. user2 creates schema1.table2 and becomes the table owner.
CREATE TABLE schema1.table2(id INT);

-- user1 can delete schema1 and all its objects, including table2, but cannot view table2.
SELECT * FROM schema1.table2; 
# ERROR:  permission denied for table table2

DROP SCHEMA schema1 CASCADE; 
# DROP CASCADES TO TABLE schema1.table2
# DROP SCHEMA
```

To recover table2, you have two options:

-   user1, who deleted the table, can recover the tables in schema1.
    
-   user2, the table owner, can recover the table.
    

## **Examples**

### Delete a table and then recover it from the recycle bin

#### **Example 1: Delete and recover a standard table**

1.  Create a standard table and delete it.
    
    ```
    CREATE TABLE tbl1 (
      id INT NOT NULL)
    WITH (
        orientation = 'column',
        distribution_key = 'id',
        clustering_key = 'id',
        event_time_column = 'id');
    INSERT INTO tbl1 SELECT i  FROM GENERATE_SERIES(1, 1000000) i;
    DROP TABLE tbl1;
    ```
    
2.  View the recycle bin to confirm that the table is present.
    
    ```
    SELECT * FROM hologres.hg_recyclebin;
    ```
    
    The result is as follows:
    
    ```
    table_id | schema_name | table_name |   table_owner   |    dropby   |   drop_time        
    ---------+-------------+------------+-----------------+-------------+-----------------------
           14| public      | tbl1       | xx_developer  | 1365xxxxxxxx| 2025-04-17 19:23:10+08
    (1 row)
    ```
    
    View the storage of the table:
    
    ```
    SELECT (hologres.hg_recyclebin_relation_size('tbl1')/1024)::text||'KB' AS hg_recyclebin_relation_size;
    ```
    
    The storage result is as follows:
    
    ```
    hg_recyclebin_relation_size 
    -----------------------------
                          1336KB
    (1 row)
    ```
    
3.  Recover the table.
    
    ```
    -- Recover all data and properties of the standard table tbl1, including the PK and clustering key.
    RECOVER TABLE tbl1;  
    ```
    

#### **Example 2: Delete and recover a partitioned table**

1.  Create a partitioned table with a parent table and child tables.
    
    ```
    CREATE TABLE tbl2_parent(id INT) PARTITION BY list (id);
    CREATE TABLE tbl2_child_1 PARTITION OF tbl2_parent FOR VALUES IN (1);
    CREATE TABLE tbl2_child_2 PARTITION OF tbl2_parent FOR VALUES IN (2);
    ```
    
2.  Delete and recover one of the child tables. The recovered child table becomes a standard table. You must manually attach it to the original partitioned parent table.
    
    ```
    -- Delete a partitioned child table.
    DROP TABLE tbl2_child_1;
    
    -- The partitioned child table is moved to the recycle bin.
    SELECT * FROM hologres.hg_recyclebin;
    ```
    
    The result is as follows:
    
    ```
    table_id | schema_name |  table_name  |   table_owner    |   dropby  |       drop_time        
    ----------+-------------+--------------+------------------+-----------+------------------------
           16 | public      | tbl2_child_1 | xx_developer   | 1365xxxxx | 2025-04-17 19:33:30+08
    (1 row)
    ```
    
    Recover the partitioned child table and check its structure. The table is now a standard table, not a partitioned child table.
    
    ```
    RECOVER TABLE tbl2_child_1;  
    SELECT hg_dump_script('tbl2_child_1');
    ```
    
    The result is as follows:
    
    ```
     hg_dump_script                        
    --------------------------------------------------------------
     BEGIN;                                                      +
                                                                 +
     /*                                                          +
     DROP TABLE public.tbl2_child_1;                             +
     */                                                          +                   
     CREATE TABLE public.tbl2_child_1 (                          +
         id INTEGER                                              +
     ) WITH (                                                    +
     orientation = 'column',                                     +
     storage_format = 'orc',                                     +
     table_group = 'xxxx_tg_default',                            +
     table_storage_mode = 'any',                                 +
     time_to_live_in_seconds = '3153600000'                      +
     );                                                          +
                                                                 +
                                                                 +
                                                                 +
     COMMENT ON TABLE public.tbl2_child_1 IS NULL;               +
     ALTER TABLE public.tbl2_child_1 OWNER TO "xx_developer";    +
                                                                 +
                                                                 +
     END;                                                        +
     
    (1 row)
    ```
    
3.  Delete the partitioned parent table. After recovery, it is restored as a partitioned table.
    
    ```
    -- Delete the partitioned parent table.
    DROP TABLE tbl2_parent CASCADE;
    
    -- View the recycle bin. The parent table and its child table are moved to the recycle bin.
    SELECT * FROM hologres.hg_recyclebin;                   
    ```
    
    The following is the result:
    
    ```
    table_id | schema_name |  table_name  |   table_owner |      dropby   |       drop_time        
    ---------+-------------+--------------+---------------+---------------+------------------------
          17 | public      | tbl2_child_2 | xx_developer | 1365xxxxxxxx | 2025-04-17 19:41:04+08
          15 | public      | tbl2_parent  | xx_developer | 1365xxxxxxxx | 2025-04-17 19:41:04+08
    ```
    
    You can recover the partitioned parent table.
    
    ```
    RECOVER TABLE tbl2_parent; 
    ```
    
    You can run the following statement in a [PSQL client](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres) to view the DDL of the partitioned parent table.
    
    ```
    \d+ tbl2_parent;
    ```
    
    The child table is also recovered.
    
    ```
                              Partitioned table "public.tbl2_parent"
     Column |  Type   | Collation | Nullable | Default | Storage | Stats target | Description
    --------+---------+-----------+----------+---------+---------+--------------+-------------
     id     | integer |           |          |         | plain   |              |
    Partition key: LIST (id)
    Partitions: tbl2_child_2 FOR VALUES IN (2)
    ```
    

#### **Example 4: Recover a table with a conflicting name**

-   If you delete a table and then create a new table with the same name, the recovery of the deleted table fails. You must first rename the existing table.
    
    1.  Create and delete tbl6.
        
        ```
        CREATE TABLE tbl6(id INT);
        -- Delete the table. The table is moved to the recycle bin.
        DROP TABLE tbl6;
        ```
        
    2.  Create a new table that is also named tbl6 and try to recover the deleted table.
        
        ```
        CREATE TABLE tbl6(id INT);
        RECOVER TABLE tbl6;   
        ```
        
        The recovery fails because a table with the same name already exists. You must delete or rename the existing table.
        
        ```
        ERROR:  Table public.tbl6 already exists
        ```
        
    3.  Rename the existing table tbl6 to tbl6\_rename, and then recover the original tbl6. The recovery now succeeds.
        
        ```
        ALTER TABLE tbl6 rename to tbl6_rename;
        RECOVER TABLE tbl6; 
        ```
        
-   If the new table with the same name also has the same PK and clustering key as the deleted table, renaming it does not resolve the conflict. You must move the new table to a different schema or delete it to recover the original table.
    
    1.  Create the table tbl1 and then execute the deletion.
        
        ```
        -- Create a table and set a PK and a clustering key.
        CREATE TABLE tbl1 (
            col1 INT,
            col2 INT,
            col3 INT,
            PRIMARY KEY (col1, col2)
        )
        WITH (
            clustering_key = 'col1'
        );
        -- Delete the table.
        DROP TABLE  tbl1;
        
        -- Recreate a table with the same name, and set a PK and a clustering key.
        CREATE TABLE tbl1 (
            col1 INT,
            col2 INT,
            col3 INT,
            PRIMARY KEY (col1, col2)
        )
        WITH (
            clustering_key = 'col1'
        );
        
        -- View the recycle bin.
        SELECT * FROM  hologres.hg_recyclebin;
        ```
        
        The result is as follows.
        
        ```
        table_id | schema_name | table_name |   table_owner    |      dropby      |       drop_time        
        ----------+-------------+------------+------------------+------------------+------------------------
               493497 | public      | tbl1         | 13659371xxx| 13659371xxx | 2025-04-17 20:11:08+08
        ```
        
    2.  Attempting to recover the tbl1 table directly from the recycle bin fails.
        
        ```
        -- Recover the deleted table from the recycle bin. An error is reported and the recovery fails.
        RECOVER  TABLE tbl1;
        ```
        
        The error is as follows.
        
        ```
        ERROR: Table public.tbl1 already exists
        ```
        
    3.  Renaming the tbl1 table and then trying to recover it also fails.
        
        ```
        -- Rename the existing table.
        ALTER TABLE tbl1 RENAME TO tbl2;
        
        -- The recovery still fails because the existing table has a PK and a clustering key.
        RECOVER  TABLE tbl1;
        ```
        
        The following error message is returned.
        
        ```
        ERROR: relation "tbl1_pkey" already EXISTS IN SCHEMA "public" 
        ```
        
    4.  Move the tbl1 table to another schema and then recover it. The recovery then succeeds.
        
        ```
        CREATE SCHEMA test;
        ALTER TABLE tbl2 SET SCHEMA test;
        
        -- The recovery is successful.
        RECOVER  TABLE tbl1;
        ```
        

### **Delete a table and bypass the recycle bin**

```
-- Delete a standard table without moving it to the recycle bin.
CREATE TABLE tbl1(id INT);
DROP TABLE tbl1 FORCE;   
```

### **Purge a table from the recycle bin**

```
CREATE TABLE tbl1(id INT);
DROP TABLE tbl1;
-- Purge the table from the recycle bin.
PURGE TABLE tbl1; 
```
