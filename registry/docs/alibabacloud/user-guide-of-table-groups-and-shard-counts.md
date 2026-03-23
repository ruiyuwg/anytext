In high-throughput scenarios such as real-time analytics and log collection, handling a large volume of concurrent read/write requests is common. Properly configuring Table Groups and the shard count is crucial for effective data distribution, load balancing, and optimizing query, storage, and computation performance. This guide will explain how to manage Table Groups and data sharding in Hologres.

## **Configuration recommendations**

Hologres offers flexible configuration for Table Groups and shards, providing greater flexibility than similar products for customizing schemas. This flexibility, combined with your understanding of your business workloads, allows you to fully leverage the high-performance capabilities of Hologres. Follow these principles when configuring Table Groups:

-   **Default is best:** Unless absolutely necessary, use the default Table Group. For more information about specifications, see [Instance management](/help/en/hologres/user-guide/instance-management/#concept-2042629).
    
-   **Large instances (> 256 CUs):** Consider multiple Table Groups for load balancing.
    
    -   Large data volumes: Create a separate Table Group with a higher shard count.
        
    -   Many small tables: Create a separate Table Group with a lower shard count to reduce query startup overhead.
        
-   **Joins:** Tables requiring joins must reside in the same Table Group.
    
-   **Avoid per-Table Groups:** Do not create a separate Table Group for each table.
    
-   **Consider workers & scaling:** Set the shard count as a multiple of the number of Workers for balanced resource allocation and future scale-out.
    
-   **Cannot modify existing:** The shard count of an existing Table Group cannot be modified. Create a new Table Group if changes are needed.
    
-   **Avoid excessive shards:** High shard counts can lead to allocation failures and increased overhead. Starting from Hologres V2.0, to prevent allocation failures due to excessive shards, Hologres imposes default caps. If the total shard count exceeds the instance cap, you will receive a "too many shards in this instance" error.
    
    -   Max shard count per Table Group = Default shard count per Table Group \* 2
        
    -   Max total shard count per instance = Default shard count per Table Group \* 8
        
    -   You can disable these caps using the following command. But this is not recommended as it can hinder compute resource allocation.
        
        ```
        set hg_experimental_enable_shard_count_cap =off;
        ```
        
    -   The following table lists the shard count limits.
        
        **Instance specifications**
        
        **Default compute nodes**
        
        **Default shards (for V0.10.31 and later)**
        
        **Maximum shards per Table Group (for V2.0 and later)**
        
        **Maximum shards per instance (for V2.0 and later)**
        
        32 CUs
        
        2
        
        20
        
        40 (20 × 2)
        
        160 (20 × 8)
        
        64 CUs
        
        4
        
        40
        
        80 (40 × 2)
        
        320 (40 × 8)
        
        96 CUs
        
        6
        
        60
        
        120 (60 × 2)
        
        480 (60 × 8)
        
        128 CUs
        
        8
        
        80
        
        160 (80 × 2)
        
        640 (80 × 8)
        
        160 CUs
        
        10
        
        80
        
        160 (80 × 2)
        
        640 (80 × 8)
        
        192 CUs
        
        12
        
        80
        
        160 (80 × 2)
        
        640 (80 × 8)
        
        256 CUs
        
        16
        
        120
        
        240 (120 × 2)
        
        960 (120 × 8)
        
        384 CUs
        
        24
        
        160
        
        320 (160 × 2)
        
        1280 (160 × 8)
        
        512 CUs
        
        32
        
        160
        
        320 (160 × 2)
        
        1280 (160 × 8)
        
        ...
        
        ...
        
        M
        
        M × 2
        
        M × 8
        

## Permissions

-   Only a superuser can create, modify, or delete a Table Group, and move a table to a different Table Group (known as resharding). To promote a regular user to a superuser, run the following statement as a superuser:
    
    ```
    -- Replace "Alibaba Cloud account ID" with UID. If you use a RAM user, add the prefix "p4_" to the account ID.
    ALTER USER "Alibaba Cloud account ID" SUPERUSER; 
    ```
    
-   To place a new table into a specified Table Group, a user must have permissions to create tables.
    

## Get Table Group metadata

1.  View the default Table Group.
    
    ```
    SELECT * FROM hologres.hg_table_group_properties
    WHERE tablegroup_name IN (
      SELECT tablegroup_name FROM hologres.hg_table_group_properties
      WHERE property_key = 'is_default_tg' AND property_value = '1'
    );
    ```
    
    Result:
    
    **Note**
    
    In the result, `is_default_tg` indicates the default Table Group, and `shard_count` represents the shards.
    
    ```
    tablegroup_name |   property_key   | property_value
    -----------------+------------------+----------------
     test_tg_default | tg_version       | 1
     test_tg_default | table_num        | 1               
     test_tg_default | is_default_tg    | 1               
     test_tg_default | shard_count      | 3
     test_tg_default | replica_count    | 1
     test_tg_default | created_manually | 0
    (6 rows)
    ```
    
2.  View all Table Groups in the current database.
    
    ```
    SELECT tablegroup_name
    FROM hologres.hg_table_group_properties GROUP BY tablegroup_name;
    ```
    
    Result:
    
    ```
    tablegroup_name
    -----------------
     test_tg_default
    (1 row)
    ```
    
3.  View the shard count of a Table Group.
    
    ```
    SELECT property_value AS shard_count
    FROM hologres.hg_table_group_properties
    WHERE property_key = 'shard_count' AND tablegroup_name ='<tg_name>';
    ```
    
    Result:
    
    ```
    shard_count
    -------------
     3
    (1 row)
    ```
    
4.  View the tables in a Table Group.
    
    ```
    SELECT table_namespace AS schema_name, table_name
    FROM hologres.hg_table_properties
    WHERE property_key = 'table_group' AND property_value = '<tg_name>';
    ```
    
    Result:
    
    ```
    schema_name | table_name
    -------------+------------
     public      | a
    (1 row)
    ```
    
5.  View the Table Group for a table.
    
    ```
    SELECT property_value AS table_group_name
    FROM hologres.hg_table_properties
    WHERE property_key = 'table_group' AND table_name = '<table_name>';
    ```
    
    Result:
    
    ```
    table_group_name
    ------------------
     test_tg_default
    (1 row)
    ```
    

## Create a Table Group

If you have a new workload or need to create a Table Group with a new shard count, use the following command.

**Note**

-   When you create a new Table Group, existing tables remain in their original Table Group.
    
-   The original Table Group becomes invalid only after all its tables and data have been moved to a new Table Group or deleted.
    

```
CALL HG_CREATE_TABLE_GROUP ('<new_tg_name>', <shard_count>);
```

Parameters:

**Parameter**

**Type**

**Description**

new\_tg\_name

Text

The Table Group name.

shard\_count

INT4

The shard count for the Table Group.

Example:

```
-- Create a new Table Group named tg_8 with a shard count of 8.
CALL HG_CREATE_TABLE_GROUP ('tg_8', 8);
```

## Modify the default Table Group

When you create a new database, the instance has a default Table Group with a default shard count. If a database has multiple Table Group, you can change the default one to ensure new tables are automatically placed in it.

**Note**

This command is supported on Hologres V0.9 and later. If your instance is on a version earlier than V0.9, upgrade it first.

```
CALL HG_UPDATE_DATABASE_PROPERTY ('default_table_group', '<tg_name>');
```

Description:

**Parameter**

**Type**

**Description**

tg\_name

TEXT

The name of the Table Group to set as the default. Its shard count becomes the new default.

Example:

```
-- Set the new Table Group as the default. New tables will use this table group by default (for V0.9 and later).
CALL HG_UPDATE_DATABASE_PROPERTY ('default_table_group', 'tg_8');
```

## Assign a new table to a specific Table Group

Syntax:

```
BEGIN;
CREATE TABLE table_name (
    col type,
  ....
);
CALL SET_TABLE_PROPERTY('table_name', 'table_group', '<tg_name>');
COMMIT;
```

Parameters:

**Parameter**

**Type**

**Description**

table\_name

TEXT

The name of the new table.

tg\_name

TEXT

The name of the Table Group. After you set this parameter, the shard count of this Table Group is used.

Example:

```
-- Create a table named tbl1 and assign it to the Table Group tg_8.
BEGIN;
CREATE TABLE tbl1 (
    col1 text
);
CALL SET_TABLE_PROPERTY('tbl1', 'table_group', 'tg_8');
COMMIT;
```

## **Resharding: Move a table to a different Table Group**

Shards enhance data processing concurrency, and an appropriate shard count improves query and write performance. In most cases, the default shard count is sufficient and requires no modification.

Scaling up an instance (e.g., from 32 to 128 CUs) does not automatically adjust the shard count for existing databases. For optimal performance, it's recommended to manually increase the shard count for these databases. New databases created on the instance will automatically adopt the default shard count corresponding to the current instance specifications. For more information, see [Overview of instance specifications](/help/en/hologres/user-guide/overview-of-instance-specifications).

After scaling, use the following method to manually adjust the shard count and re-insert the data.

-   Non-partitioned and physical partitioned tables: Use either the `REBUILD` syntax or a built-in stored procedure.
    
-   Logical partitioned tables: Use the `REBUILD` syntax, which automatically performs sequential execution for each partition.
    

### **Reshard via REBUILD**

Starting from Hologres V3.1, you can use the `REBUILD` command to modify table properties, including assigning a table to a new Table Group. The `REBUILD` command runs the migration task asynchronously and allows you to monitor its progress in real time. For more information, see [REBUILD (Beta)](/help/en/hologres/developer-reference/holores-rebuild).

### **Reshard using a stored procedure**

Hologres V0.10 supports using a built-in stored procedure for resharding, which automatically rebalances the data after you modify the shard count. You can move the original table and its data to the new shards without having to recreate the table and re-import the data. This simplifies the process and helps achieve optimal performance.

-   Limitations
    
    -   Resharding requires Hologres V0.10 and later. Go to the **Instance Details** page in the Hologres console to check your instance version. If your instance version is earlier than V0.10, [upgrade your instance](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or [get online support](/help/en/hologres/support/obtain-online-support-for-hologres).
        
    -   Resharding applies at the table level. When resharding a table, stop all writes to it. Reads on the table are not affected. Starting from V1.1, you can use `set table readonly` to enable automatic failover for real-time write tasks.
        
    -   Resharding consumes CPU resources and increases storage usage during the process. We recommend performing this operation during off-peak hours.
        
    -   Disable table binlog before resharding and re-enable it after resharding is complete. For more information, see [Subscribe to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).
        
    -   Hologres does not support resharding for tables containing `SERIAL` fields. Attempting to reshard such a table will result in an error. For tables with `DEFAULT` values, resharding will remove the `DEFAULT` attribute.
        
    -   The table you intend to reshard must be independent of any other objects, such as views. If dependencies exist, they must be deleted before resharding. Failure to do so will result in the error: `"ERROR: resharding table xxx can not executed because other objects depend on it."`.
        
    -   you can now reshard tables with view dependencies. To enable this functionality, enable the GUC parameter: `set hg_experimental_hg_insert_overwrite_enable_view=on;`.
        
    -   Resharding applies only to the Simple Permission Model (SPM). For more information about Hologres permission models, see [Hologres permission model](/help/en/hologres/security-and-compliance/hologres-permission-model/).
        
    -   Resharding does not preserve automatic partitioning properties of a table.
        
    -   In Hologres V2.0 and later, resharding preserves column comments. If your instance is on a version earlier than V2.0, back up the column comments before resharding and manually restore them after the operation is complete.
        
-   Syntax
    
    -   For V2.0.24+: It's recommended to use HoloWeb for resharding. See [Table resharding](/help/en/hologres/user-guide/table-resharding).
        
    -   For versions earlier than V2.0.24: Run the following commands to assign a table to a new Table Group. If your instance is on a version earlier than V0.10, upgrade it first.
        
    
    **Note**
    
    -   Create the new Table Group before attempting to move tables to it. See [Create a Table Group](#section-71k-cqc-ejt).
        
    -   Halt all write operations on the table during resharding. Read operations are unaffected.
        
    -   Hologres automatically deletes the original Table Group once all its associated tables have been reassigned. If you intend to retain multiple Table Groups, ensure each is configured with an appropriate shard count.
        
    -   For a partitioned table, operations only need to be performed on the parent table.
        
    -   To move a table from Table Group A to Table Group B on a virtual warehouse instance, the migration task must be run by the leader Virtual Warehouse (W) of Table Group B. Additionally, virtual Warehouse W must have access permissions to Table Group A. This is achieved by loading Virtual Warehouse W into Table Group A as a follower virtual warehouse. For more information about how to grant permissions, see [Authorize a compute group to access data](/help/en/hologres/user-guide/grant-permissions-on-table-groups-that-are-loaded-to-virtual-warehouses).
        
    
    ```
    -- For V1.1 and later:
    CALL HG_MOVE_TABLE_TO_TABLE_GROUP('<table_name>','<new_table_group_name>');
    
    -- For V0.10 and later:
    CALL HG_UPDATE_TABLE_SHARD_COUNT('<table_name>','<new_table_group_name>');
    ```
    
-   Parameters
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    table\_name
    
    The table name. To re-assign multiple tables, run the command for each table. For a partitioned table, specify the parent table name.
    
    new\_table
    
    table\_group\_name
    
    The name of the new Table Group.
    
    new\_tg
    
-   **Handle exceptions**
    
    Table resharding is a lengthy, multi-step process that can be interrupted by exceptions like OOM or manual termination. If an interruption occurs, the original table remains in a read-only state, and a temporary table named `<initial_table_name>_xxxxxxxx` appears in the database. Follow these steps to resolve the issue:
    
    -   If your Hologres instance is on a version earlier than V2.0.24, [upgrade it](/help/en/hologres/user-guide/instance-upgrades#task-2148158).
        
    -   If your Hologres instance is on V2.0.24 or later:
        
        -   HoloWeb: Either continue or cancel resharding. For more information, see [Table Resharding](/help/en/hologres/user-guide/table-resharding).
            
        -   SQL commands: Follow these steps:
            
            1.  To continue the resharding, resolve the interruption and run the `HG_MOVE_TABLE_TO_TABLE_GROUP` command again.
                
            2.  To cancel the resharding and restore the initial state, run the following commands in order:
                
                ```
                -- Cancel the readonly property of the original table.
                CALL set_table_property('<schema_name>.<table_name>','readonly','false');
                
                -- Clear the temporary table.
                  -- Get the name of the temporary table (partitioned table).
                SELECT schema_name,target_temp_table_name FROM hologres.hg_resharding_properties WHERE reshard_table_name = <schema_name>.<table_name> AND is_parent_table IS TRUE;
                  -- Get the name of the temporary table (non-partitioned table).
                SELECT schema_name,target_temp_table_name FROM hologres.hg_resharding_properties WHERE reshard_table_name = <schema_name>.<table_name> AND is_parent_table IS FALSE AND is_sub_table IS FALSE;
                  -- Clear the temporary table.
                DROP TABLE IF EXISTS <schema_name>.<target_temp_table_name>;
                
                -- Clear the system table. The system table records the resharding progress of the current table. If you want to cancel the task, you must clear the corresponding data from the system table.
                CALL hologres.hg_internal_clear_resharding_properties('<schema_name>.<table_name>'); 
                ```
                
        
    

## Delete a Table Group

Before deleting a Table Group, remove all associated tables and run the following command:

```
CALL HG_DROP_TABLE_GROUP('<tg_name>');
```

Example:

```
-- Delete the Table Group named tg_8.
CALL HG_DROP_TABLE_GROUP('tg_8');
```

## **View the skew relationship between shards and workers**

If shards are unevenly distributed among workers, it can lead to resource skew, resulting in imbalanced loads and inefficient resource utilization. Starting from Hologres V1.3, you can use the `worker_info` system view to query the relationships between Workers, Table Groups, and shards within the current database. For details, see [Relationship between shard counts and worker compute nodes](/help/en/hologres/user-guide/basic-concepts#section-mhi-603-s9x). and [Query the shard allocation among workers](/help/en/hologres/user-guide/query-the-shard-allocation-among-workers#task-2255914).

## Best practices

Table Group is an advanced feature. In most cases, we do not recommend creating new Table Groups or modifying the shard count. If you have different business requirements, you can plan your Table Groups according to best practices. See [Best practices for setting table groups](/help/en/hologres/user-guide/best-practices-for-specifying-table-groups#concept-2479327).

## FAQ

Resharding is a complex process that involves multiple steps, such as creating temporary tables, making the table read-only, writing to the target table, changing table names, and recording the synchronization status. If an exception occurs during any step, use the following methods to troubleshoot.

The `internal error: Get rundown is not allowed in recovering state.` error indicates that the table is in a read-only state, which blocks `INSERT`, `UPDATE`, and `DELETE` operations. This state is a protective measure that Hologres applies when a complex operation like resharding is interrupted, to prevent data inconsistency.

1.  Find all read-only tables.
    
    ```
    select * from hologres.hg_table_properties where property_key ='readonly' and property_value='true';
    ```
    
2.  Disable the read-only state.
    
    ```
    call set_table_property('<table_name>','readonly','false');
    ```
    
    Replace table\_name with the fully qualified name of the affected table. After this command succeeds, your table will accept write operations again.
