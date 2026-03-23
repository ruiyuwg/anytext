You can modify the properties of a dynamic table. This topic describes how to use the ALTER DYNAMIC TABLE statement.

## **Modify refresh tasks**

### **Pause a refresh task**

After you pause the task, all subsequent refresh tasks for the table will stop running.

```
-- auto_refresh_enable: Specifies whether to enable auto-refresh. false: Pauses auto-refresh.
ALTER DYNAMIC TABLE [IF EXISTS] [<schema_name>.]<table_name> SET (auto_refresh_enable = false);
```

### **Restart a refresh task**

You can restart a paused refresh task. After you restart the task, it resumes running based on the original refresh settings of the table.

```
-- auto_refresh_enable: Specifies whether to enable auto-refresh. true: Enables auto-refresh.
ALTER DYNAMIC TABLE [IF EXISTS] [<schema_name>.]<table_name> SET (auto_refresh_enable = true);
```

### **Modify the freshness time for refreshes**

You can modify the freshness time. The minimum value is 1 minute. The change takes effect immediately.

**Note**

Only dynamic tables created using the V3.1 syntax support this parameter.

```
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema_name>.]<table_name> SET (freshness='<num> {minutes | hours}');
```

### **Modify the computing resources and specifications for refreshes**

You can modify the computing resources for refreshes. You can choose either local instance resources (local) or Serverless resources (serverless). If you choose Serverless resources, you can also modify the computing specifications. You can increase or decrease the specifications for refreshes as needed. However, the specifications that an instance can use are limited. For more information, see the [Serverless Computing Guide](/help/en/hologres/user-guide/serverless-computing/).

**Note**

-   Only Hologres V4.0.7 and later support explicitly specifying warehouse\_name.
    

## V4.0.7 and later

```
-- Modify the computing resource for the refresh. You can choose local execution or serverless execution.
ALTER [DYNAMIC] TABLE [ IF EXISTS ] [<schema>.]<table_name> SET (['local' | 'serverless' | '<warehouse_name>'])

-- Modify the computing specifications for serverless execution.
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema>.]<table_name> SET (auto_refresh_guc_hg_experimental_serverless_computing_required_cores='<num>')
```

## V3.1

```
-- Modify the computing resource for the refresh. You can choose local execution or serverless execution.
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema_name>.]<table_name> 
SET (computing_resource ='[local|serverless]');

-- Modify the computing specifications for serverless execution.
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema_name>.]<table_name> 
SET (refresh_guc_hg_experimental_serverless_computing_required_cores='<num>');
```

## V3.0

```
-- Modify the refresh resource for a single table.
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema_name>.]<table_name> 
SET (<incremental/full>_guc_hg_computing_resource ='[local|serverless]');

-- If it is in serverless mode, you can also modify the serverless computing specifications.
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema_name>.]<table_name> 
SET (<incremental/full>_guc_hg_experimental_serverless_computing_required_cores='<num>');
```

### **Modify the refresh mode**

Starting from V3.1, you have more options for modifying the refresh mode:

-   Change the refresh mode from incremental refresh to full refresh. This is supported in V3.0 and later.
    
-   Change the refresh mode from auto-refresh to full refresh. This is supported in V3.1 and later.
    

**Important**

-   After you change the mode to full refresh, the original incremental refresh task stops. You must reconfigure the properties related to the refresh task as needed.
    
-   The system automatically cleans up the state table for incremental refreshes to reduce storage usage.
    
-   For a dynamic table with logical partitions, the change takes effect only for future partitions. For a non-partitioned dynamic table, the change takes effect immediately.
    

## V3.1 syntax

```
ALTER DYNAMIC TABLE <schema_name>.<table_name> SET (auto_refresh_mode = '<full/auto>');
```

## V3.0 syntax

```
ALTER DYNAMIC TABLE <schema_name>.<table_name> SET (refresh_mode = 'full');
```

### **Modify the active partition time range**

If a dynamic table has logical partitions, you can modify the time range of active partitions to adjust the scope of auto-refreshes.

**Note**

-   This feature is supported only in V3.1 and later.
    
-   The change takes effect only for future partitions. Existing partitions are not affected.
    

```
-- auto_refresh_partition_active_time: The time range for auto-refreshes. The change takes effect only for future partitions.
ALTER DYNAMIC TABLE [IF EXISTS] [<schema_name>.]<table_name> SET (auto_refresh_partition_active_time = '<num> {minutes | hours | days}');
```

### Modify a query definition and add columns

## V3.1 syntax

Starting from Hologres V3.1.18, you can modify the query definition of a dynamic table and add columns to the dynamic table by adding columns to the query.

```
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema_name>.]<table_name> 
AS
<query>; -- The new query definition.
```

-   Usage notes:
    
    -   The new query definition must meet the following requirements:
        
        -   The dynamic table generated by the new query must have a table schema that is compatible with the dynamic table generated by the original query. This includes the following requirements:
            
            -   Both tables must be partitioned tables or non-partitioned tables.
                
            -   The primary keys (PKs) of both tables must be the same.
                
            -   The distribution keys of both tables must be the same. You cannot modify the distribution key.
                
            -   The partition keys of both tables must be the same. You cannot modify the partition key.
                
            -   The clustering key, segment key, storage mode (such as column store or row-column hybrid store), dictionary encoding, and bitmap index of both tables must be the same.
                
            -   The field names of both tables must be the same. You cannot modify the field names.
                
            -   Fields with the same name must have the same data type and NULLABLE property.
                
        -   You can only add columns in the query. You cannot drop columns. When you add a column, existing data remains unchanged. The new column is populated with NULL values by default. The data is updated after the next refresh.
            
    -   After you modify the query definition, the refresh behavior is as follows:
        
        -   **Non-partitioned dynamic table**: The next refresh, whether it is an auto-refresh or a manual refresh, triggers a Refresh Overwrite.
            
        -   **Dynamic table with logical partitions**: Active partitions automatically trigger a Refresh Overwrite during the next auto-refresh. Historical partitions require a manual refresh.
            
        
        After you modify the query definition, if the query contains operators that are not supported by incremental refresh, the refresh behavior is as follows:
        
        **Refresh mode**
        
        **New query definition supports incremental refresh**
        
        **New query definition does not support incremental refresh**
        
        **auto\_refresh\_mode = 'auto'**
        
        The refresh\_mode specified during table creation is retained.
        
        The refresh\_mode automatically changes to full refresh.
        
        **auto\_refresh\_mode = 'incremental'**
        
        Incremental refresh is retained.
        
        The refresh fails. You must manually change the mode to full refresh.
        
        **auto\_refresh\_mode = 'full'**
        
        Full refresh is retained.
        
        Full refresh is retained.
        
-   Examples
    
    1.  Prepare the sample data.
        
        ```
        -- Prepare a source table.
        CREATE TABLE employees (
            department_id INT,
            employee_name VARCHAR
        );
        -- Insert data.
        INSERT INTO employees (department_id, employee_name) VALUES
        (1, 'John'),
        (1, 'Jane'),
        (1, 'John'),  -- Duplicate value
        (2, 'Alice'),
        (2, 'Bob'),
        (2, 'Alice'); -- Duplicate value
        
        -- Create a dynamic table.
        CREATE  DYNAMIC TABLE dt_employees
        WITH (
          -- Properties of the dynamic table
          freshness = '1 minutes', 
          auto_refresh_mode = 'auto',
          distribution_key = 'department_id'
        )
        AS 
        SELECT
            department_id
        FROM employees   
        GROUP BY department_id;
        
        -- Query data in the dynamic table.
        SELECT * FROM dt_employees;
        ```
        
    2.  Add a column to the dynamic table.
        
        ```
        -- Add a column.
        ALTER DYNAMIC TABLE dt_employees
        AS 
        SELECT
            department_id,
           STRING_AGG(DISTINCT employee_name, ', ') AS unique_employees
        FROM employees   
        GROUP BY department_id;
        ```
        
        After the statement is successfully executed, you can query the data in the dynamic table. The data in the new column is NULL.
        
        ```
        department_id	｜unique_employees
        -----------｜--------
        1	｜\N
        2	｜\N
        ```
        
        After the next refresh is successful, the data in the new column is refreshed.
        
        ```
        department_id	｜unique_employees
        -------------｜---------
        1	｜Jane, John
        2 ｜	Bob, Alice
        ```
        

## V3.0 syntax

Hologres V3.0 supports modifying a query definition. The syntax is as follows. Currently, only modifications in full refresh mode are supported. Modifications in incremental refresh mode are not.

**Note**

-   Modifying the query definition only changes the query definition of the table. It does not change the original field names or field properties.
    
-   Exercise caution when you modify a query definition. If the fields in the new query are inconsistent with the original fields, issues such as refresh errors or data inconsistency may occur.
    

```
ALTER DYNAMIC TABLE [IF EXISTS] [<schema>.]<table_name> SET (task_definition = $$<new_query>$$); 
```

**Note**

When you use the `ALTER DYNAMIC TABLE` statement to update a dynamic table, if the string is enclosed in single quotation marks (''), the Data Definition Language (DDL) of the dynamic table retrieved using the `HG_DUMP_SCRIPT` function is inconsistent with the DDL displayed in HoloWeb. This occurs because PostgreSQL identifies the input string as an identifier and truncates it to 128 characters using [TRUNCATE](/help/en/hologres/developer-reference/truncate). Therefore, you must replace the single quotation marks ('') with `$$ XXX $$`.

### **Modify the refresh start time**

You can modify the refresh start time. You can only change it to a specified time in the future. Only dynamic tables created in V3.0 support this syntax.

```
-- Modify the start time for a full auto-refresh.
ALTER DYNAMIC TABLE [IF EXISTS] [<schema_name>.]<table_name> SET (<incremental/full>_auto_refresh_schd_start_time = '<timestamptz>');
```

### **Modify the refresh interval**

You can modify the refresh interval of a dynamic table. The refresh task then runs at the new interval. Only dynamic tables created in V3.0 support this syntax.

```
-- Modify the refresh interval full_auto_refresh_interval. For example, '3 minutes' specifies an interval of three minutes.
ALTER DYNAMIC TABLE [IF EXISTS] [<schema_name>.]<table_name> SET (<incremental/full>_auto_refresh_interval = '[<num> { minutes | hours}]');
```

## **Modify dynamic table properties**

You can modify the following properties of a dynamic table. Properties that are not mentioned are not supported. For more information, see [ALTER TABLE](/help/en/hologres/developer-reference/alter-table).

**Note**

Hologres V3.1.20 and later support `ALTER DYNAMIC TABLE RENAME` and `ALTER DYNAMIC TABLE SET SCHEMA`. Versions earlier than Hologres V3.1.20 support `ALTER TABLE RENAME` and `ALTER TABLE SET SCHEMA`.

```
-- Rename the table. Hologres V3.1.20 and later support ALTER DYNAMIC TABLE RENAME.
ALTER DYNAMIC TABLE [IF EXISTS] <table_name> RENAME TO <new_name>;

-- Modify the dictionary.
ALTER DYNAMIC TABLE [<schema_name>].<table_name> SET (dictionary_encoding_columns = '[columnName{:[on|off|auto]}[,...]]'); 

-- Modify the bitmap.
ALTER DYNAMIC TABLE [<schema_name>].<table_name> SET (bitmap_columns = '[columnName{:[on|off]}[,...]]');

-- Modify the TTL.
ALTER DYNAMIC TABLE [<schema_name>].<table_name> SET (time_to_live_in_seconds = 'num');

-- Modify the schema.
ALTER DYNAMIC TABLE [IF EXISTS] [<schema_name>.]<table_name> SET SCHEMA <new_schema>;
```
