Hologres V3.1 supports logical partitioned tables. Compared with physical partitioned tables, logical partitioned tables can effectively solve stability issues that may arise from having too many tables and metadata expansion. This topic describes how to migrate data from a physical partitioned table to a logical partitioned table.

## **Scenarios**

We recommend that you migrate data from a physical partitioned table to a logical partitioned table in the following scenarios:

-   A table group contains a large number of child partitioned tables (such as, more than 10,000) in physical partitioned tables, resulting in a large metadata scale.
    
-   A large number of partitions are added every day, with frequent DDL operations.
    

## **Migration solutions**

### **Solution 1: Verify with dual writing before migrating business**

Using this solution for partitioned table migration can minimize the impact on your business and ensure business stability. The process is as follows:

1.  Stop the data import task for the original physical partitioned table, create a new logical partitioned table, and complete the migration of existing data. For more information, see [Existing data migration](#d76da62a55u2g).
    
    -   If the table structure does not need to be changed and the data volume is moderate, we recommend that you use the CLONE syntax.
        
    -   If the table structure needs to be changed, or the data volume is large and data migration pressure is high, we recommend that you use the manual migration method.
        
2.  Create a data import task for the new logical partitioned table, and start data import tasks for both the new and old partitioned tables to implement dual writing.
    
3.  Verify the new logical partitioned table for business use.
    
4.  Migrate the business using one of the following two methods:
    
    -   (Recommended) Directly perform queries on the new logical partitioned table by changing the target table name in the query task to the name of the new logical partitioned table and adding partition filter conditions as needed.
        
    -   Use RENAME to change the name of the new logical partitioned table to the name of the original physical partitioned table, modify the write and query tasks for the original child partitioned tables to write data to and query data from the parent table, and add partition filter conditions. The statements are as follows:
        
        ```
        BEGIN;
        ALTER TABLE <source_table_name> RENAME TO <source_table_name_archive>;
        ALTER TABLE <target_table_name> RENAME TO <source_table_name>;
        COMMIT;
        ```
        
5.  Adapt O&M tasks to the new logical partitioned table.
    

### **(Not recommended) Solution 2: Perform quick migration**

If you can accept a longer change time window and allow some read and write tasks to fail, you can use the REBUILD syntax for migration. The process is as follows:

1.  Stop the data import task for the original physical partitioned table.
    
2.  Use the REBUILD syntax to complete the migration of existing data. For more information, see [REBUILD syntax](#d6f904bef6vnx).
    
3.  Modify the import task and start it.
    
4.  Adapt query tasks to the new logical partitioned table.
    
5.  Adapt O&M tasks to the new logical partitioned table.
    

## **Partitioned table migration**

### **Table structure conversion**

Compared with a physical partitioned table, a logical partitioned table involves the following conversion operations in terms of table creation statements:

-   The LOGICAL keyword and the NOT NULL constraint for the partition key need to be added to the DDL statement.
    
-   (Optional) A physical partitioned table supports only one partition key, while a logical partitioned table supports up to two partition keys. You can increase the number of partition keys as needed.
    

The following sample code provides an example:

-   Create a physical partitioned table:
    
    ```
    BEGIN;
    CREATE TABLE user_profile (
        a TEXT,
        b TEXT,
        ds TEXT
    )
    PARTITION BY LIST (ds);
    CREATE TABLE user_profile_202503 PARTITION OF user_profile FOR VALUES IN ('202503');
    CREATE TABLE user_profile_202504 PARTITION OF user_profile FOR VALUES IN ('202504');
    COMMIT;
    ```
    
-   Create a logical partitioned table:
    
    -   Keep one partition key.
        
        ```
        CREATE TABLE user_profile_lp_1 (
            a TEXT,
            b TEXT,
            ds TEXT NOT NULL)
        LOGICAL PARTITION BY LIST (ds);
        ```
        
    -   Change the ds field to the yy and mm fields to indicate the year and month, keeping two partition keys.
        
        ```
        CREATE TABLE user_profile_lp_2 (
            a TEXT,
            b TEXT,
            yy TEXT NOT NULL,
            mm TEXT NOT NULL)
        LOGICAL PARTITION BY LIST (yy, mm);
        ```
        

### **Table mapping**

In terms of table properties and partition properties, the mappings between logical partitioned tables and physical partitioned tables are shown in the following table.

**Note**

If the original physical partitioned table uses a field of a non-time type such as TEXT as the partition key and uses the dynamic partition management feature, automatic cleanup of expired data (`partition_expiration_time`) and cold storage of expired data (`partition_keep_hot_window`) are not supported.

**Module**

**Feature**

**Physical partitioned table**

**Logical partitioned table**

Dynamic partition management for the parent table

Enable dynamic partition management

auto\_partitioning\_enable

No corresponding parameter, and no need to pay attention.

Time unit

auto\_partitioning\_time\_unit

No need for separate configuration. Only time-type partitions are supported.

Time zone

auto\_partitioning\_time\_zone

No corresponding parameter, and no need to pay attention.

Number of pre-created partitions

auto\_partitioning\_num\_precreate

No corresponding parameter, and no need to pay attention.

Number of historical partitions to retain

auto\_partitioning\_num\_retention

Automatic cleanup upon expiration is implemented through partition\_expiration\_time.

Number of hot partitions to retain

auto\_partitioning\_num\_hot

Automatic conversion to cold storage upon expiration is implemented through partition\_keep\_hot\_window.

Scheduling time for dynamic partition management

auto\_partitioning\_schd\_start\_time

No corresponding parameter, and no need to pay attention.

Date and time format for child tables

auto\_partitioning\_time\_format

No corresponding parameter, and no need to pay attention.

Child table (partition) management

Whether to retain a child table

keep\_alive

keep\_alive

Whether to keep a child table in cold/hot storage

storage\_mode

storage\_mode

Binary log

Binary log switch for a parent table

binlog\_level

binlog\_level

Binary log lifecycle for a parent table

binlog\_ttl

binlog\_ttl

Dynamically manage binary logs by partition

Not supported.

partition\_generate\_binlog\_window

Binary log switch for partitions

Inherits from the parent table. Modification is not supported.

generate\_binlog

Binary log lifecycle for partitions

Child tables support modification.

Inherits from the parent table. Modification is not supported.

Index and other table properties

Partition bitmap\_columns

Child tables support modification.

Inherits from the parent table. Modification is not supported.

Partition dictionary\_encoding\_columns

Child tables support modification.

Inherits from the parent table. Modification is not supported.

Other table properties such as orientation and table\_group

Inherits from the parent table. Modification is not supported.

Inherits from the parent table. Modification is not supported.

Other indexes such as primary key, distribution\_key, and clustering\_key

Inherits from the parent table. Modification is not supported.

Inherits from the parent table. Modification is not supported.

### **Existing data migration**

#### CLONE

If your table structure does not need to be changed and the data volume is moderate, we recommend that you use the CLONE syntax.

**Note**

-   This statement automatically creates a new logical partitioned table and copies the data from the original table to the new table with identical table structure. The original physical partitioned table is not deleted.
    
-   If the original table has real-time write tasks:
    
    -   Before CLONE, it is recommended to manually stop the real-time write tasks.
        
    -   After CLONE is completed, it is recommended to create new real-time write tasks to write data from the data source to both tables simultaneously, to ensure that the data in both tables is consistent and complete.
        
-   After migration is complete, thoroughly verify the data and functionality of both the new and old partitioned tables, complete the adaptation of import tasks, query tasks, and O&M tasks, and then clean up the original physical partitioned table.
    

Sample statement:

```
CALL hg_clone_to_logical_partition('user_profile', 'user_profile_logical');
```

If you are migrating a large amount of data and the operation takes a long time, it is recommended to use the ASYNC command to execute the task in the background. After the command is successfully submitted, it will return the query\_id corresponding to the CALL. You can use this query\_id to further check the execution status of the asynchronous task in [Get query insights](/help/en/hologres/user-guide/query-insights).

```
SET statement_timeout = 0;
ASYNC CALL hg_clone_to_logical_partition('user_profile', 'user_profile_logical');
```

#### **Manual migration**

If your table structure needs to be changed, or the data volume is large and data migration pressure is high, we recommend that you use the manual migration method for more flexible control over the migration pace.

**Note**

-   This method requires manually creating a new logical partitioned table and copying data from the original table to the new table. Since the table is created manually, you can flexibly optimize table properties and control the migration pace.
    
-   If the original table has real-time write tasks:
    
    -   Before importing data, it is recommended to manually stop the real-time write tasks.
        
    -   After data import is complete, it is recommended to create new real-time write tasks to write data from the data source to both tables simultaneously, to ensure that the data in both tables is consistent and complete.
        
-   After migration is complete, thoroughly verify the data and functionality of both the new and old partitioned tables, complete the adaptation of import tasks, query tasks, and O&M tasks, and then clean up the original physical partitioned table.
    

Migration steps:

1.  Create a table.
    
    For more information, see [Create a logical partitioned table](#b7756c37b7p8v) in this topic.
    
2.  Import historical data. hg\_insert\_overwrite is recommended.
    
    ```
    CALL hg_insert_overwrite('logical_partition_table', '{20250601, 20250602}'::text[], 'SELECT * FROM tb');
    ```
    

#### **REBUILD syntax (not recommended)**

If you can accept a longer change time window and allow some read and write tasks to fail, you can use the REBUILD syntax for migration. For more information, see [REBUILD](/help/en/hologres/developer-reference/holores-rebuild).

Take note of the following points:

-   When you use the REBUILD feature to migrate a partitioned table, the table name of the logical partitioned table after migration remains unchanged. The name of the original physical partitioned table will be changed to `tmp_rebuild_old_<query_id>_<unique_id>_<table_name>`.
    
-   After migration is complete, you need to further adapt the remaining items, including import tasks, query tasks, and O&M tasks.
    
-   Before adaptation work is completed, related tasks may generate errors due to compatibility issues. Therefore, this method is not recommended for migrating partitioned tables.
    

Sample statements:

```
-- Add the NOT NULL constraint to the partition field.
ASYNC REBUILD TABLE user_profile ALTER ds SET NOT NULL;

-- Convert the physical partitioned table to a logical partitioned table and retain the original physical partitioned table.
ASYNC REBUILD TABLE user_profile WITH (keep_source) TO logical partition;
```

### **Import task adaptation**

-   If the data import task for the original physical partitioned table is to import data to the parent table (through Fixed Plan), no task modification is needed.
    
-   If the data import task for the original physical partitioned table is to import data to child tables, the following adaptations are needed:
    
    -   Delete statements for creating new child tables. Logical partitioned tables do not have physical child tables, so manual creation is not needed.
        
    -   Change the child table name in the import task to the parent table name of the logical partitioned table.
        

#### **Scenario 1: Create a child table (partition) and import data**

```
-- Import task for the original physical partitioned table
CREATE TABLE user_profile_202505 PARTITION OF user_profile FOR VALUES IN ('202505');
INSERT INTO user_profile_202505 SELECT a, b, ds FROM <source_table> WHERE ds = '202505';

-- Import task for the new logical partitioned table
INSERT INTO user_profile_lp_1 SELECT a, b, ds FROM <source_table> WHERE ds = '202505';
```

#### **Scenario 2: Refresh data in a child table (partition)**

**Note**

If the original physical partitioned table uses the stored procedure `hg_insert_overwrite` to implement child table refresh and refreshes multiple child tables at once, it is recommended to split the task by partition for serial execution after migrating data to a logical partitioned table and using the native INSERT OVERWRITE syntax. For more information, see [INSERT OVERWRITE](/help/en/hologres/developer-reference/insert-overwrite).

```
-- Refresh task for the original physical partitioned table (creating a temporary table to implement INSERT OVERWRITE)
-- Create a temporary table and import data.
CREATE TABLE tmp_user_profile_202505(a text, b text, ds text);
INSERT INTO tmp_user_profile_202505 SELECT a, b, ds FROM <source_table> WHERE ds = '202505';

-- RENAME the temporary table and ATTACH it to the parent table.
BEGIN;
DROP TABLE IF EXISTS user_profile_202505;
ALTER TABLE tmp_user_profile_202505 RENAME TO user_profile_202505;
ALTER TABLE user_profile ATTACH PARTITION user_profile_202505 FOR VALUES IN ('202505');
COMMIT;

-- Refresh task for the original physical partitioned table (using the hg_insert_overwrite command)
CALL hg_insert_overwrite('user_profile' , '202505', $$SELECT a, b, mm FROM <source_table> WHERE ds='202505'$$);

-- Refresh task for the new logical partitioned table (using native Insert Overwrite syntax)
INSERT OVERWRITE user_profile_lp_1 PARTITION (ds = '202505') SELECT a, b, ds FROM <source_table> WHERE ds='202505';
```

### **Query task adaptation**

-   If the data query task for the original physical partitioned table is to query the parent table, no task modification is needed.
    
-   If the data query task for the original physical partitioned table is to query a child table, it needs to be changed to query the parent table with added partition filter conditions. Example:
    
    ```
    -- Query task for the original physical partitioned table 
    SELECT * FROM user_profile_202504;
    
    -- Query task for the logical partitioned table
    SELECT * FROM user_profile_lp_1 WHERE ds = '202504';
    ```
    

### **O&M task adaptation**

There may also be differences in daily O&M tasks between the original physical partitioned table and the new logical partitioned table. Some scenario comparisons are as follows.

**Query category**

**Physical partitioned table**

**Logical partitioned table**

**Description**

Query parent table DDL

Function `hg_dump_script`

No difference

Query parent table properties

System table `hologres.hg_table_properties`

No difference

Query partition list

[Query all child tables](/help/en/hologres/developer-reference/create-partition-table#section-08f-6jm-jvg)

System table `hologres.hg_list_logical_partition`

Different

Query partition properties

System table `hologres.hg_table_properties`

System table `hologres.hg_logical_partitioned_table_properties`

Different

Query parent table storage

System table `hg_table_storage_status`

System table `hg_partition_file_status`

Different
