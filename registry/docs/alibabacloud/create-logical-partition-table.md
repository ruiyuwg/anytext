Hologres supports logical partition tables starting with version 3.1. In a logical partition table, the parent table is a physical table, and child tables are logical concepts. This topic describes how to use the CREATE LOGICAL PARTITION TABLE statement.

## **Limits**

-   Only Hologres instances running version 3.1 or later support logical partition tables.
    
-   Logical partitioned tables support only `LIST` partitioning and allow you to specify a partition key consisting of up to two columns.
    
-   Supported data types for partition keys include INT, TEXT, VARCHAR, DATE, TIMESTAMP, and TIMESTAMPTZ.
    
-   Partition keys must be defined as NOT NULL.
    
-   The partition key of a logical partitioned table supports [generated columns](/help/en/hologres/user-guide/hologres-generate-columns).
    
-   A single logical partition table supports up to 5,200 partitions. A database supports up to 200,000 logical partitions in total.
    
-   When you write data to a logical partition table, Hologres automatically creates the required partitions. The following limits and recommendations apply:
    
    -   Optimize your data ingestion jobs and data quality. Avoid dirty data—for example, avoid timestamps that do not fall at midnight when using daily partitions. This helps prevent excessive partition growth.
        
    -   Write data to partitions sequentially. Avoid writing to many partitions simultaneously.
        
    -   Batch import jobs for a single table have the following limits:
        
        -   During batch import, a single job supports importing up to 50 partitions. If you exceed this limit, Hologres returns the error: `Bulkload partition count exceed limit, partition count is xxx, limit is xxx`.
            
        -   When using Fixed Plan to import data, if a single table writes to more than 30 partitions simultaneously, new partition write requests trigger throttling. Hologres waits several seconds before automatically submitting the request.
            
        -   When using Fixed Plan to import data, if a single table writes to more than 100 partitions simultaneously, new partition write requests fail with the error: `mem partition count exceed reject limit`.
            
    -   To avoid overloading a worker node due to too many unpersisted partitions, each worker node enforces the following limits:
        
        -   If the number of unpersisted partitions exceeds 500, new partition write requests trigger throttling. Hologres waits several seconds before automatically submitting the request.
            
        -   If the number of unpersisted partitions exceeds 5,000, new partition write requests fail with the error: `mem partition count exceed reject limit`.
            
        -   Note: An “unpersisted partition” is a partition written to memory but not yet flushed to disk. The count includes user partitions × shard count × index count per table. Shard count includes replica shards. Therefore, this limit depends on shard distribution and how the table is distributed across nodes in the instance.
            

## **Important notes**

-   Avoid creating partitions with very small data volumes—for example, less than 100 million rows. Small partitions reduce query acceleration benefits and increase the risk of generating many small files. Use coarser-grained partitions instead.
    
-   If you frequently replace all data in a partition—for example, using TRUNCATE or INSERT OVERWRITE—use a partitioned table. For this scenario, TRUNCATE and INSERT OVERWRITE perform better because they avoid large-scale delete operations.
    
-   The TRUNCATE statement does not generate binary logs (Binlog). To disable Binlog generation for a session, run: `SET hg_experimental_generate_binlog = off`.
    
-   You do not manually create or delete partitions for logical partition tables. Partitions exist only when they contain data. When all data in a partition is deleted, the partition is automatically removed.
    
    **Note**
    
    Because Hologres cleans up data asynchronously, partitions are also removed asynchronously.
    
-   To modify the table properties of a logical partitioned table, use the [REBUILD](/help/en/hologres/developer-reference/holores-rebuild) syntax. The backend automatically splits tasks and executes them sequentially by partition. Specifically, to perform Resharding operations on a logical partitioned table—for example, modifying the table’s Table Group—do not use the original HG\_MOVE\_TABLE\_TO\_TABLE\_GROUP stored procedure. For more information, see [Table Group and Shard Count Operation Guide](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts#section-vg2-9jh-7ih).
    

## **Create a logical partition table**

### **Syntax**

**Note**

The partitions that exist for a logical partition table depend on the data in the table. You do not manually create or delete partitions.

```
-- Create a logical partition parent table
CREATE TABLE [IF NOT EXISTS] [<schema_name>.]<table_name>  ([
  {
   <column_name> <column_type> [ <column_constraints>, [...]]
   | <table_constraints>
   [, ...]
  }
])
LOGICAL PARTITION BY LIST(<partition_column_1> [, <partition_column_2>])
[WITH(
  <property_name> = <property_value>
 [, ...]
)];
```

### **Parameters**

**Parameter Name**

**Description**

schema\_name

The name of the schema that contains the table.

Omit this parameter if you create the parent and child tables in the same schema. Specify it if you create them across schemas.

table\_name

The name of the parent partition table to create.

column\_name

The name of a column to create in the new table.

column\_type

The data type of the column.

column\_constraints

The name of a column constraint.

table\_constraints

The name of a table constraint.

partition\_column

The partition key for the logical partition table. You can specify one or two columns.

property\_name

The name of a table property to set for the logical partition table.

property\_value

The value to assign to the table property.

### **Table properties**

The parent table of a logical partition table supports the following table properties.

**Note**

The parent table is a physical table, and partitions are logical concepts. Therefore, you cannot set the following properties for individual partitions.

**Property**

**Description**

partition\_expiration\_time

The time after which partition data expires and is cleaned up asynchronously.

-   By default, no expiration time is set. Data is never cleaned up automatically.
    
-   You can set values such as `'30 day'` or `'12 month'`. We recommend using the same time unit as your partition key.
    

**Note**

This property applies only to tables with a single partition key, and only to time-based partition keys.

partition\_keep\_hot\_window

The duration for which partition data remains in hot storage. After this period expires, the partition data is asynchronously moved to cold storage. For more information about hot and cold storage, see [Data Tiering Storage](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data).

-   By default, all data remains hot. No automatic move to cold storage occurs.
    
-   You can set values such as `'30 day'` or `'12 month'`. We recommend using the same time unit as your partition key.
    

**Note**

This property applies only to tables with a single partition key, and only to time-based partition keys.

partition\_require\_filter

Whether queries on the parent table require a partition filter condition. Valid values:

-   `TRUE`: A partition filter condition is required. Queries without one fail.
    
-   `FALSE` (default): A partition filter condition is optional. You can query the parent table directly.
    

binlog\_level

Specifies whether binary logging is enabled for the parent table. For more information about the binary logging feature, see [Subscribe to Hologres Binary Logging](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs). Default value: none. Valid values:

-   `'none'` (default): Binlog is disabled.
    
-   `'replica'`: Binlog is enabled.
    

binlog\_ttl

The time-to-live (TTL) for Binlog data, in seconds. Default is 2592000 (30 days).

partition\_generate\_binlog\_window

The time window within which data generates Binlog. Only data in partitions created within “current time minus this value” generates Binlog.

-   By default, no time window is set. All data in the parent table generates Binlog.
    
-   You can set values such as `'3 day'` or `'12 hour'`. We recommend using the same time unit as your partition key.
    

**Note**

This property applies only to tables with a single partition key, and only to time-based partition keys.

Other important properties, such as indexes

Logical partition tables support indexes such as distribution\_key and clustering\_key, and other important properties such as orientation and time\_to\_live\_in\_seconds.

For details about properties, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables#section-n50-wsw-wnc). You can refer to the [Scenario-Based Table Creation Optimization Guide](/help/en/hologres/user-guide/guide-on-scenario-specific-table-creation-and-tuning) to set appropriate values for index-related table properties.

Logical partitioned tables do not support the dynamic partition management properties of the original physical partitioned tables. For more information, see [Dynamic Partition Management](/help/en/hologres/developer-reference/dynamic-partition-management).

### **Partition properties**

Partitions in a logical partition table support the following properties. You can use [ALTER LOGICAL PARTITION TABLE](/help/en/hologres/developer-reference/alter-logical-partition-table) to modify these properties.

**Partition Properties**

**Description**

keep\_alive

Whether the partition is automatically cleaned up. Valid values:

-   TRUE: The partition is never cleaned up automatically. It ignores the parent table’s partition\_expiration\_time setting.
    
-   FALSE (default): The partition follows the parent table’s partition\_expiration\_time setting and is cleaned up when expired.
    

This property takes effect only if the parent table has partition\_expiration\_time set.

storage\_mode

Whether the partition uses a specific storage class. By default, this property is not set. When unset, the partition follows the parent table’s partition\_keep\_hot\_window setting. Valid values:

-   'hot': The partition stays in hot storage. It ignores the parent table’s partition\_keep\_hot\_window setting.
    
-   'cold': The partition stays in cold storage. It ignores the parent table’s partition\_keep\_hot\_window setting.
    

generate\_binlog

Whether the partition generates Binlog. By default, this property is not set. When unset, the partition follows the parent table’s partition\_generate\_binlog\_window setting. Valid values:

-   'on': The partition generates Binlog. It ignores the parent table’s partition\_generate\_binlog\_window setting.
    
-   'off': The partition does not generate Binlog. It ignores the parent table’s partition\_generate\_binlog\_window setting.
    

### **Examples**

-   Use a regular column ds as the partition key.
    
    ```
    CREATE TABLE public.hologres_logical_parent_1 (
        a TEXT,
        b INT,
        c TIMESTAMP,
        ds DATE NOT NULL,
        PRIMARY KEY (b, ds)) 
    LOGICAL PARTITION BY LIST (ds) 
    WITH (
        orientation = 'column',
        distribution_key = 'b',
        partition_expiration_time = '30 day', 
        partition_keep_hot_window = '15 day', 
        partition_require_filter = TRUE,
        binlog_level = 'replica',
        partition_generate_binlog_window = '3 day'
    );
    ```
    
-   Use a generated column ds as the partition key.
    
    ```
    CREATE TABLE public.hologres_logical_parent_2 (
        a TEXT,
        b INT,
        c TIMESTAMP,
        ds TIMESTAMP GENERATED ALWAYS AS (date_trunc('day', c)) STORED NOT NULL,
        PRIMARY KEY (b, ds)) 
    LOGICAL PARTITION BY LIST (ds) 
    WITH (
        orientation = 'column',
        distribution_key = 'b',
        partition_expiration_time = '30 day', 
        partition_keep_hot_window = '15 day', 
        partition_require_filter = TRUE,
        binlog_level = 'replica',
        partition_generate_binlog_window = '3 day'
    );
    ```
    
-   Use two columns as partition keys.
    
    ```
    CREATE TABLE public.hologres_logical_parent_3 (
        a TEXT,
        b INT,
        yy TEXT NOT NULL,
        mm TEXT NOT NULL)
    LOGICAL PARTITION BY LIST (yy, mm) 
    WITH (
        orientation = 'column',
        distribution_key = 'b',
        partition_require_filter = TRUE
    );
    ```
    

## **Data management for logical partition tables**

When managing data in logical partition tables, the following locks apply:

-   Batch import or update for a specified partition, or TRUNCATE for a specified partition: Partition lock. Other partitions remain unaffected.
    
-   Batch import or update without specifying a partition, TRUNCATE without specifying a partition, or any DELETE: Table lock. Other data management operations wait until the lock is released.
    
-   Data write, update, or delete using Fixed Plan: Row lock. These operations conflict with batch import, update, or delete operations on partitions or tables. They do not conflict with other Fixed Plan operations.
    

### **Data management for the parent table**

Data write, update, and cleanup operations for the parent table work exactly like those for standard tables. The Hologres storage engine automatically creates or removes partitions based on your data.

-   Write data to the parent table.
    
    ```
    INSERT INTO public.hologres_logical_parent_2 
    VALUES 
        ('a', 1, '2025-03-16 10:00:00'), 
        ('b', 2, '2025-03-17 11:00:00'), 
        ('c', 3, '2025-03-18 12:00:00'), 
        ('d', 4, '2025-03-19 13:00:00'), 
        ('e', 5, '2025-03-20 14:00:00');
    ```
    
-   Clean up data in the parent table.
    
    ```
    -- Clean up using DELETE
    DELETE FROM public.hologres_logical_parent_2 WHERE ds = '2025-03-20';
    
    -- Clean up using TRUNCATE
    SET hg_experimental_generate_binlog = off;
    TRUNCATE public.hologres_logical_parent_2;
    ```
    

### **Data management for partitions**

You can also manage data for specific partitions in a logical partition table.

-   Import data into a logical partition. If incoming data does not match the specified partition, Hologres skips the mismatched rows without error.
    
    ```
    -- Import into a specified partition
    INSERT INTO public.hologres_logical_parent_1 
    PARTITION (ds = '2025-03-16')
    VALUES 
        ('a', 1, '2025-03-16 10:00:00', '2025-03-16');
    
    -- Skip mismatched rows silently
    INSERT INTO public.hologres_logical_parent_1 
    PARTITION (ds = '2025-03-16')
    VALUES 
        ('a', 1, '2025-03-16 10:00:00', '2025-03-16'), 
        ('b', 2, '2025-03-17 11:00:00', '2025-03-17');
    ```
    
-   Clean up partition data.
    
    Automatic routing for TRUNCATE on a specified partition is not supported in compute group DML. Use the leader compute group to run TRUNCATE.
    
    ```
    -- Clean up using DELETE
    DELETE FROM public.hologres_logical_parent_1 WHERE ds = '2025-03-16' or ds = '2025-03-17';
    
    -- Clean up using TRUNCATE
    SET hg_experimental_generate_binlog = off;
    TRUNCATE public.hologres_logical_parent_1 PARTITION (ds = '2025-03-16') PARTITION (ds = '2025-03-17');
    ```
    
-   Overwrite a partition using INSERT OVERWRITE.
    
    Hologres version 3.1 and later support the native INSERT OVERWRITE syntax, which you can use to perform INSERT OVERWRITE operations on logical partition tables. For more information, see [INSERT OVERWRITE](/help/en/hologres/developer-reference/insert-overwrite).
    
    **Important**
    
    INSERT OVERWRITE is a synchronous operation. If you specify multiple logical partitions, Hologres processes them in parallel. This increases CPU and memory usage. To overwrite multiple partitions, split the operation into separate tasks and run them sequentially.
    

## **Query logical partition tables**

Unlike physical partition tables, logical partition tables let you configure the partition\_require\_filter property. If you set this property to `TRUE`, queries must include a partition filter condition.

-   Query a logical partition table with a partition filter condition.
    
    ```
    SELECT * FROM public.hologres_logical_parent_1 WHERE ds = '2025-03-16';
    ```
    
-   Query a logical partition table without a partition filter condition. This requires the parent table’s partition\_require\_filter property to be set to `FALSE`.
    
    ```
    SELECT * FROM public.hologres_logical_parent_1;
    ```
    

## **Other operations**

Hologres provides the following system tables and functions to query metadata for logical partition tables.

-   **hologres.hg\_table\_properties:** View table properties.
    
-   **hologres.hg\_list\_logical\_partition('<table\_name>'):** List all partitions in a logical partition table.
    
-   **hologres.hg\_logical\_partitioned\_table\_properties:** List all logical partitions and their properties in the current instance.
    
-   **hologres.hg\_partition\_file\_status('<table\_name>'):** Query hot and cold storage sizes and file counts for all partitions in a logical partition table. Supported in Hologres version 3.1.4 and later.
    

Examples:

-   Determine whether a table is a logical partition table.
    
    ```
    SELECT
        *
    FROM
        hologres.hg_table_properties
    WHERE
        table_name = '<table_name>'
        AND property_key = 'is_logical_partitioned_table'
        AND property_value = 'true';
    ```
    
-   List all logical partitions for a table.
    
    ```
    SELECT * FROM hologres.hg_list_logical_partition ('<schema_name>.<table_name>');
    ```
    
-   List all logical partition property configurations for a table.
    

Note: This query shows only configurations that differ between child partitions and the parent table. An empty result means no special configuration exists for child partitions.

```
SELECT
    *
FROM
    hologres.hg_logical_partitioned_table_properties
WHERE 
    table_namespace = '<schema_name>'
    AND table_name = '<table_name>'
ORDER BY partition DESC;
```

-   View current hot and cold storage sizes and file counts for all logical partitions in a table.
    
    ```
    SELECT * FROM hologres.hg_partition_file_status ('<schema_name>.<table_name>');
    ```
    

In addition to the system tables described earlier, logical partitions—as physical tables—are also compatible with other Hologres [system tables](/help/en/hologres/developer-reference/system-tables) and support the same metadata query methods as standard tables. Example:

-   View the DDL for a logical partition table.
    
    ```
    SELECT hg_dump_script('<schema_name>.<table_name>');
    ```
    
-   View parent table properties.
    
    ```
    SELECT
        *
    FROM
        hologres.hg_table_properties
    WHERE 
        table_namespace = '<schema_name>'
        AND table_name = '<table_name>';
    ```
    
-   View the largest partition for a logical partition table.
    
    **Note**
    
    Because data cleanup and partition cleanup are asynchronous, max\_pt may return incorrect results if the largest partition has been emptied. To avoid this, use INSERT OVERWRITE to delete data instead of other methods.
    
    ```
    SELECT MAX_PT('<schema_name>.<table_name>');
    ```
    
-   Check whether the number of partitions exceeds the limit.
    
    Call the stored procedure `check_logical_partition_count()` to check whether any logical partition table in the current instance exceeds the partition limit.
    
    ```
    CREATE OR REPLACE PROCEDURE check_logical_partition_count()
    LANGUAGE 'plpgsql'
    AS $$
    DECLARE
        table_max_partition_count bigint;
        table_partition_count bigint;
        exceeded_logical_partition_limit boolean;
        row_record record;
    BEGIN
        SELECT substring(result FROM '^[^:]*: (\d+)')::INTEGER INTO table_max_partition_count
            FROM hg_admin_command('get_global_flag', 'flag=table_max_partition_count') AS result;
    
        RAISE NOTICE 'table_max_partition_count=%', table_max_partition_count;
    
        FOR row_record IN
            SELECT table_namespace, table_name
                FROM hologres.hg_table_properties
                WHERE property_key = 'is_logical_partitioned_table' AND (property_value = 'true' OR property_value = 't')
        LOOP
            SELECT count(*) INTO table_partition_count
                FROM hologres.hg_list_logical_partition(quote_ident(row_record.table_namespace) || '.' || quote_ident(row_record.table_name));
            IF table_partition_count > table_max_partition_count THEN
                RAISE NOTICE 'table %.% partition count exceeds limit (% > %)', row_record.table_namespace, row_record.table_name, table_partition_count, table_max_partition_count;
            END IF;
        END LOOP;
    END;
    $$;
    
    CALL check_logical_partition_count();
    ```
    

## **References**

-   [ALTER LOGICAL PARTITION TABLE](/help/en/hologres/developer-reference/alter-logical-partition-table)
    
-   [DROP LOGICAL PARTITION TABLE](/help/en/hologres/developer-reference/drop-logical-partition-table)
    
-   [Migrate a physical partition table to a logical partition table](/help/en/hologres/developer-reference/migrating-a-physical-partition-table-to-a-logical-partition-table)
