Hologres supports the ALTER TABLE syntax to modify certain table schemas, table properties, and column properties. However, ALTER TABLE does not support modifying properties that affect table storage. Starting from Hologres V3.1, you can use the REBUILD syntax to flexibly modify various table parameters. This topic describes how to use REBUILD in Hologres.

## **Syntax**

### **Command format**

```
ASYNC REBUILD TABLE [ IF EXISTS ] <table_name>
    [ WITH ( <rebuild_parameter> [= <value>] [, ... ] )]  
    <action> [, ... ];
    
WHERE action IS ONE OF:
    ADD [ COLUMN ] <column_name> <data_type> [ column_constraint [ ... ] ]
    ALTER [ COLUMN ] <column_name> [ SET DATA ] TYPE <data_type> [ USING <expression> ]
    ALTER [ COLUMN ] <column_name> SET DEFAULT <expression>
    ALTER [ COLUMN ] <column_name> DROP DEFAULT
    ALTER [ COLUMN ] <column_name> { SET | DROP } NOT NULL
    ALTER PRIMARY KEY (<column_name> [, ...])
    TO [LOGICAL] PARTITION [BY LIST(<column_name> [, <column_name>])]
    SET ( <parameter> [= <value>] [, ... ] )

WHERE rebuild_parameter IS ONE OF:
    keep_source
    binlog_mode
    rebuild_guc_<guc_name> = '<guc_value>'
```

### **Parameter description**

**Parameter**

**Subkey**

**Description**

ASYNC

Specifies that the REBUILD task runs asynchronously. After you run the command, the task's `query_id` is returned. You can use this `query_id` to monitor the task status. Synchronous execution is not supported.

table\_name

The name of the target table to rebuild.

column\_name

The name of a column in the target table.

data\_type

The data type of the column.

action

ADD COLUMN

Adds a column. You can add a NOT NULL column and set a default value.

ALTER COLUMN TYPE

Changes the data type of a column.

ALTER COLUMN SET/DROP DEFAULT

Sets or removes the default value for a column. The NULL values in existing data are not changed.

ALTER COLUMN SET/DROP NOT NULL

Sets or removes the NOT NULL constraint for a column.

ALTER PRIMARY KEY

Changes the primary key of the table. If the new primary key causes a data conflict, an error is reported during the asynchronous execution. Monitor the task execution status.

TO \[LOGICAL\] PARTITION

Converts the table to a logical or physical partitioned table. The following scenarios are supported:

-   Convert a standard table to a physical partitioned table. You must specify a partition key.
    
-   Convert a standard table to a logical partitioned table. You must specify a partition key.
    
-   Change the partition key of a physical partitioned table.
    
-   Convert a physical partitioned table to a logical partitioned table. You can optionally change the partition key.
    
-   Converting a logical partitioned table to a physical partitioned table is not supported.
    

SET ( <parameter> \[= <value>\])

Modifies table properties. Common scenarios include the following:

-   Change the distribution key (`distribution_key`).
    
-   Change the segment key (`event_time_column`).
    
-   Change the clustering key (`clustering_key`).
    
-   Change the table storage format (`orientation`): convert between row store, column store, and row-column hybrid store.
    
-   Change the `table_group` to which the table belongs.
    
-   All other table properties can be modified.
    
-   You do not need to use \`REBUILD\` to modify bitmap indexes (`bitmap_columns`) or dictionary-encoded columns (`dictionary_encoding_columns`). Use the \`ALTER TABLE\` syntax instead.
    

WITH (<rebuild\_parameter> \[= <value>\])

Sets parameters for the REBUILD task. Common parameters include the following:

-   \`keep\_source\`: No value is required. After the conversion, the source table is not deleted. The source table is renamed to `tmp_rebuild_old_<query_id>_<unique_id>_<table_name>`.
    
-   \`binlog\_mode\`: No value is required. You can run REBUILD on a table with binary logging enabled. For more information, see the [Usage examples](#18f9a25c108w9) section to avoid losing binary logging data.
    
-   `rebuild_guc_hg_computing_resource='serverless'`: Uses Serverless resources to run the REBUILD task. This prevents the task from occupying your instance resources and improves task stability.
    
-   `rebuild_guc_<guc_name>='<guc_value>'`: You can set other GUC parameters here. For more information, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters).
    

## **Usage notes**

-   Only asynchronous execution is supported. This prevents connections from being occupied for a long time.
    
-   After you submit a REBUILD task, the submission process completes quickly and returns the task's `query_id`. You can use this `query_id` to [view the execution status of the REBUILD task](#93aeaebf02hds). If the submission does not complete, this may be because many asynchronous scheduling tasks are running in the current instance. In this case, wait for the `query_id` to be returned before checking the task execution status.
    
-   Modifying table parameters with REBUILD involves data redistribution and consumes computing resources. Run REBUILD tasks during off-peak hours or use Serverless computing resources to ensure business stability.
    
-   During the execution of a REBUILD task, the table is in a read-only state for a period of time, and data cannot be written to it. Starting from Hologres V4.1, incremental updates based on Dynamic Table technology significantly reduce the read-only duration during a rebuild. The target table must meet the following requirements. Otherwise, write operations will be suspended for a long time:
    
    -   The target table has a primary key before the rebuild, and the new primary key includes the original primary key.
        
    -   The target table is a column-store or row-column hybrid store table before the rebuild.
        
    -   The target table does not contain generated columns after the rebuild.
        
    -   If the target table is a physical partitioned table before the rebuild, the partition key must remain unchanged after the rebuild.
        
    -   If the target table is a logical partitioned table after the rebuild, it can have only one partition key.
        
-   To reduce overhead, modify multiple parameters in a single REBUILD task.
    
-   After a physical partitioned table is rebuilt, properties for [dynamic partition management](/help/en/hologres/developer-reference/dynamic-partition-management) are not inherited. You must set them after the REBUILD task is complete. These properties include the following:
    
    -   The `auto_partitioning` property of the parent table.
        
    -   Properties of child tables, such as `keep_alive`.
        
    -   After a physical partitioned table is rebuilt, properties that were independently set for child tables are not inherited. The properties of the child tables become consistent with those of the parent table. Examples include `bitmap_columns` and `dictionary_encoding_columns`.
        
-   You cannot run REBUILD on tables in the following cases:
    
    -   Tables with specific column properties, such as column-store optimization for JSONB columns, or column constraints, such as vector fields.
        
    -   Tables with full-text indexes or global secondary indexes.
        
    -   Tables that contain columns of the Serial or Bigserial type.
        
    -   Tables that have Dynamic Table or materialized view dependencies are not supported. Tables that have standard view dependencies are supported.
        

## **Usage examples**

### **Run REBUILD on a table without binary logging enabled**

```
-- Create a table and import data
CREATE TABLE rebuild_test (
    a TEXT,
    b TEXT,
    ds TEXT
);

INSERT INTO rebuild_test VALUES ('1', '1', '2025-04-01'), ('2', '2', '2025-04-02'), ('3', '3', '2025-04-03');

-- Add a NOT NULL column and set a default value
ASYNC REBUILD TABLE rebuild_test ADD COLUMN c text NOT NULL DEFAULT 'a';

-- Change the primary key to column a
ASYNC REBUILD TABLE rebuild_test ALTER PRIMARY KEY (a);

-- Use Serverless resources to run the Rebuild task, set the distribution_key and clustering_key for the table, and change the storage format to row-column hybrid
ASYNC REBUILD TABLE rebuild_test 
WITH (
    rebuild_guc_hg_computing_resource = 'serverless'
)
SET (
    distribution_key = 'a',
    clustering_key = 'a',
    orientation = 'row,column'
);

-- Convert the non-partitioned table to a logical partitioned table, set the partition key to ds, and add the NOT NULL property to the ds column
ASYNC REBUILD TABLE rebuild_test 
    ALTER COLUMN ds SET NOT NULL,
    TO LOGICAL PARTITION BY LIST(ds);
```

### **Run REBUILD on a table with binary logging enabled**

REBUILD does not retain historical binary logging data. By default, you cannot run REBUILD on a table that has binary logging enabled. To run the task, you must specify the `binlog_mode` parameter and follow these steps. This ensures that the downstream client has fully consumed all historical binary logging data.

1.  Run REBUILD.
    
    ```
    ASYNC REBUILD TABLE rebuild_test 
    WITH (
      binlog_mode
    )
    <YOUR_ACTION>;
    ```
    
2.  For a REBUILD task with the `binlog_mode` parameter set, the task automatically pauses after the `set_readonly` step is complete. You can query the progress using the following SQL statement. At this point, the system has set the table to read-only. Data cannot be written to the table, which means no new binary logging data is generated.
    
    ```
    postgres=# SELECT step, status, progress FROM hologres.rebuild_progress('<query_id>');
                 step              | status | progress 
    -------------------------------+--------+----------
     prepare                       | done   | 1/1
     create_tmp_table              | done   | 1/1
     get_src_table_snapshot        | done   | 1/1
     insert                        | done   | 1/1
     set_readonly                  | done   | 1/1
     check_snapshot                |        | 0/1
     re-insert                     |        | -
     check_additional_child_table  |        | -
     create_additional_child_table |        | -
     insert_additional_child_table |        | -
     swap                          |        | 0/1
    (11 rows)
    ```
    
3.  Wait for the downstream client to finish consuming the existing binary logging data. Then, manually run the following SQL statement to resume the REBUILD task. While the task resumes, the source table remains read-only, and no new binary logging data is generated.
    
    ```
    RESUME '<query_id>';
    ```
    
    After the REBUILD task is successfully run, binary logging is automatically enabled for the new table. You can then restart the downstream binary logging consumption task and start consuming the binary logs of the new table from `lsn = 0`.
    

## **Monitoring and O&M**

### **View the execution status of a REBUILD task**

REBUILD tasks run asynchronously. After a task is submitted, the system returns a success status and a `query_id`. You must query the `hologres.rebuild_progress` system table to view the status of the asynchronous subtasks. The table is considered rebuilt only after all subtasks are successful. The command is as follows:

```
SELECT * FROM hologres.rebuild_progress('<rebuild_query_id>');
```

The columns of the system table and their descriptions are as follows:

**Column name**

**Description**

job\_name

The query\_id of the REBUILD task.

step\_id

The step ID. The subtasks of the REBUILD task are run sequentially based on this ID.

step

The step name:

-   prepare: Task preparation.
    
-   create\_tmp\_table: Create a temporary table.
    
-   get\_src\_table\_snapshot: Get a data snapshot of the source table.
    
-   insert: Import existing data into the temporary table.
    
-   set\_readonly: Set the table to be rebuilt to read-only and stop data writes.
    
-   check\_snapshot: Check whether the current data snapshot of the table is the same as the one obtained in the third step. If not, the `re-insert` step is performed.
    
-   re-insert: Import incremental data.
    
-   check\_additional\_child\_table: Check whether new child tables have been created by the user since the REBUILD task started. This applies only to physical partitioned tables.
    
-   create\_additional\_child\_table: Create potential new child tables for the temporary table. This applies only to physical partitioned tables.
    
-   insert\_additional\_child\_table: Import existing data into the new temporary child tables. This applies only to physical partitioned tables.
    
-   swap: Replace the source table with the temporary table.
    

status

The status of the subtask.

-   done: Completed.
    
-   doing: In progress.
    
-   NULL: This step does not need to be run, or it is not yet known whether this step needs to be run.
    
-   error: Failed. Check the error message in the message field.
    

progress

The progress of the subtask: `m/n`. \`n\` is the number of substeps to run (usually proportional to the number of partitions), and \`m\` is the number of substeps that have been run.

start\_time

The start time of the subtask.

end\_time

The end time of the subtask.

queryid

The query\_id of the subtask.

pid

The service process ID.

message

The message of the subtask. If an error occurs in the subtask, the error message is recorded in this field.

The following is an example of the result:

![opopo](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5239517471/p952547.png)

### **Stop and restart a REBUILD task**

-   Stop an asynchronous `REBUILD` task.
    
    ```
    SUSPEND '<query_id>';
    ```
    
-   Resumes an asynchronous task that was canceled by `CANCEL`.
    
    ```
    RESUME '<query_id>';
    ```
    

### **Handle REBUILD task exceptions**

If a REBUILD task is interrupted by an error, or if you manually run the SUSPEND command to pause the task, you can run the RESUME command to continue the task. You can also follow these steps to end the task and recover the source table.

-   Run the following command to clean up the temporary tables generated during the REBUILD process.
    
    ```
    CALL hg_clean_rebuild_tmp_tables('<query_id>');
    ```
    
-   If the source table was set to read-only by the REBUILD task before the task was interrupted, run the following command to remove the read-only state and resume write operations.
    
    ```
    ALTER TABLE <table_name> SET (readonly = false);
    ```
