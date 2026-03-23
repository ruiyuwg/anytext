As the data volume in partitioned tables grows, historical data (cold data) can consume significant storage space and increase storage costs. To reduce costs while retaining access to this data, you can use a Data Lifecycle Management (DLM) policy. This policy automatically archives older partitions into the highly compressed X-Engine format. This feature lets you separate hot and warm data at the partition level. Hot data remains in high-performance InnoDB partitions, while warm data is archived to X-Engine, which significantly reduces storage costs. The archived data still supports DML writes and online DDL changes, ensuring business continuity.

## How it works

The automatic archiving feature for partitioned tables relies on the Data Lifecycle Management (DLM) policy that you define on the table. The workflow is as follows:

1.  **Define a policy**: You can define a DLM policy when you create a table (`CREATE TABLE`) or modify a table (`ALTER TABLE`). The core of the policy is a condition that you specify. For example, you can set a rule that when the number of partitions exceeds N, the oldest partitions are marked for archiving.
    
2.  **Trigger execution**: The policy is not triggered automatically in real-time. You must execute the archive task using one of the following methods:
    
    -   **Manually execute**: Call the system stored procedure to immediately execute all defined DLM policies.
        
    -   **Scheduled task**: Create an `EVENT` to automatically call the stored procedure and execute the policy according to a preset schedule, such as daily at midnight.
        
3.  **Execute archive**: When the policy is executed, the system identifies the partitions that meet the archive conditions. The system then changes the storage engine of these partitions from InnoDB to X-Engine online to complete the archiving process.
    

## Scope

Before you use this feature, ensure that your cluster meets these conditions:

-   Cluster Edition product series:
    
    -   Archive to the X-Engine row store format: MySQL 8.0.2 revision 8.0.1.1.31 or later.
        
    -   Archive to the X-Engine [column-oriented table](/help/en/polardb/polardb-for-mysql/user-guide/columnar-table-overview) format: MySQL 8.0.2 revision 8.0.2.2.23 or later.
        
-   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) product series: MySQL 8.0.2 revision 8.0.2.0.6 or later.
    

## Configure and Execute Partition Archiving

This section guides you through the entire process, from creating an archive policy to executing and verifying it.

### Process Overview

1.  **Create a DLM archive policy**: Define archive rules for the target partitioned table.
    
2.  **Execute the DLM archive policy**: Trigger the archiving process manually or with a scheduled task.
    
3.  **View archive status and results**: Verify that the partitions are successfully converted to the X-Engine storage engine.
    

### Step 1: Create a DLM Archive Policy

Define archive rules for partitioned tables to specify when and which partitions to archive to X-Engine. You can add a policy when you create a new table or add a policy to an existing table.

-   **Method 1: Define a policy when creating a new table**
    
    Use the `DLM ADD POLICY` clause at the end of a `CREATE TABLE` statement. The following example creates a `sales` table. This table uses the `order_time` column as the partition key and creates partitions based on time intervals. The table also has two policies: **INTERVAL** and **DLM**.
    
    -   **INTERVAL policy**: If the inserted data exceeds the existing partition range, new partitions that span a one-year interval are automatically created.
        
    -   **DLM policy**: This policy, named `policy_part2part`, specifies that when the total number of partitions exceeds 3, the oldest partitions are archived to X-Engine.
        
    
    ```
    CREATE TABLE `sales` (
      `id` int DEFAULT NULL,
      `name` varchar(20) DEFAULT NULL,
      `order_time` datetime NOT NULL,
      primary key (order_time)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    PARTITION BY RANGE  COLUMNS(order_time) INTERVAL(YEAR, 1)
    (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = InnoDB)
    DLM ADD POLICY policy_part2part TIER TO PARTITION ENGINE=XENGINE READ WRITE ON (PARTITIONS OVER 3);
    ```
    
-   **Method 2: Add a policy to an existing table**
    
    Use the `ALTER TABLE` statement to add a DLM policy to an existing partitioned table. For more information, see [Create or delete DLM policies using ALTER TABLE](/help/en/polardb/polardb-for-mysql/user-guide/usage-4#1b78bcff78pxg).
    
    ```
    ALTER TABLE sales
    DLM ADD POLICY policy_part2part TIER TO PARTITION ENGINE=XENGINE ON (PARTITIONS OVER 3);
    ```
    
    **Syntax description**: `ON (PARTITIONS OVER N)` is the core of the policy. `N` represents the number of the newest partitions that you want to keep in the InnoDB engine. When the total number of partitions exceeds `N`, the oldest partitions beyond that limit are marked for archiving.
    

#### **Insert Test Data**

1.  Use the `proc_batch_insert` stored procedure to insert test data into the `sales` partitioned table. This triggers the **INTERVAL** policy to automatically create new partitions.
    
    ```
    DROP PROCEDURE IF EXISTS proc_batch_insert;
    delimiter $$
    CREATE PROCEDURE proc_batch_insert(IN begin INT, IN end INT, IN name VARCHAR(20))
    BEGIN
    SET @insert_stmt = concat('INSERT INTO ', name, ' VALUES(? , ?, ?);');
    PREPARE stmt from @insert_stmt;
    WHILE begin <= end DO
    SET @ID1 = begin;
    SET @NAME = CONCAT(begin+begin*281313, '@stiven');
    SET @TIME = from_days(begin + 737600);
    EXECUTE stmt using @ID1, @NAME, @TIME;
    SET begin = begin + 1;
    END WHILE;
    END;
    $$
    delimiter ;
    
    CALL proc_batch_insert(1, 3000, 'sales');
    ```
    
    The result shows that the data is inserted successfully:
    
    ```
    Query OK, 1 row affected (0.50 sec)
    ```
    
2.  Execute the following command to view the `sales` table schema.
    
    ```
    SHOW CREATE TABLE sales \G
    ```
    
    The table schema is returned as follows. All partitions use the InnoDB engine:
    
    ```
    mysql> SHOW CREATE TABLE sales \G
    *************************** 1. row ***************************
           Table: sales
    Create Table: CREATE TABLE `sales` (
      `id` int(11) DEFAULT NULL,
      `name` varchar(20) DEFAULT NULL,
      `order_time` datetime NOT NULL,
      PRIMARY KEY (`order_time`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    /*!50500 PARTITION BY RANGE  COLUMNS(order_time) */ /*!99990 800020200 INTERVAL(YEAR, 1) */
    /*!50500 (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20230101000000 VALUES LESS THAN ('2023-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20240101000000 VALUES LESS THAN ('2024-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20250101000000 VALUES LESS THAN ('2025-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20260101000000 VALUES LESS THAN ('2026-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20270101000000 VALUES LESS THAN ('2027-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20280101000000 VALUES LESS THAN ('2028-01-01 00:00:00') ENGINE = InnoDB) */
    ```
    

### Step 2: Execute the DLM Archive Policy

Trigger the defined archive policy to start the partition engine conversion process. You can choose to execute the policy manually or set up a scheduled task as needed.

-   **Method 1: Scheduled execution (recommended)**: For production environments that require regular data archiving, you can use the MySQL `EVENT` feature. This lets you automatically execute the policy during off-peak hours, such as daily at midnight, for automated operations and maintenance (O&M).
    
    The following example creates an event that, starting from 2026-02-01, automatically executes all DLM policies daily at 01:00.
    
    ```
    CREATE EVENT dlm_system_base_event
           ON SCHEDULE EVERY 1 DAY
        STARTS '2026-02-01 01:00:00'
        do CALL 
    dbms_dlm.execute_all_dlm_policies();
    ```
    
-   **Method 2: Manual immediate execution**: This method is suitable for one-time archive tasks or for scenarios that require a manual retry after you troubleshoot an issue.
    
    You can directly call the following stored procedure to immediately trigger all defined DLM policies.
    
    ```
    CALL dbms_dlm.execute_all_dlm_policies();
    ```
    

### Step 3: View Archive Status and Results

Monitor the progress of the archive task. After the task is complete, verify that the storage engine of the partitions has changed.

1.  **View policy definition**
    
    Query the `mysql.dlm_policies` system table to confirm that the policy was created successfully.
    
    ```
    SELECT * FROM mysql.dlm_policies WHERE Table_schema = 'your_database' AND Table_name = 'sales'\G
    ```
    
    The result is returned as follows:
    
    ```
    *************************** 1. row ***************************
                       Id: 1
             Table_schema: your_database
               Table_name: sales
              Policy_name: policy_part2part
              Policy_type: PARTITION
             Archive_type: PARTITION COUNT
             Storage_mode: READ WRITE
           Storage_engine: XENGINE
            Storage_media: DISK
      Storage_schema_name: NULL
       Storage_table_name: NULL
          Data_compressed: ON
     Compressed_algorithm: Zstandard
                  Enabled: ENABLED
          Priority_number: 200
    Tier_partition_number: 3
           Tier_condition: NULL
               Extra_info: {"oss_file_filter": "order_time"}
                  Comment: NULL
    ```
    
    **Key field descriptions**:
    
    **Field**
    
    **Description**
    
    `Table_schema`, `Table_name`
    
    The database and table name to which the policy belongs.
    
    `Policy_name`
    
    The custom name of the policy.
    
    `Storage_engine`
    
    The target storage engine for archiving, which is `XENGINE` here.
    
    `Tier_partition_number`
    
    The number of InnoDB partitions defined to retain in the policy, which is `N` in `PARTITIONS OVER N`.
    
2.  **View execution progress**
    
    To track the task status, query the `mysql.dlm_progress` system table during or after policy execution.
    
    ```
    SELECT * FROM mysql.dlm_progress WHERE Table_schema = 'your_database' AND Table_name = 'sales' ORDER BY Id DESC LIMIT 1\G
    ```
    
    The result is returned as follows:
    
    ```
    *************************** 1. row ***************************
                      Id: 1
            Table_schema: your_database
              Table_name: sales
             Policy_name: policy_part2part
             Policy_type: PARTITION
          Archive_option: PARTITIONS OVER 3
          Storage_engine: XENGINE
           Storage_media: DISK
         Data_compressed: ON
    Compressed_algorithm: Zstandard
      Archive_partitions: p20200101000000, p20210101000000, p20220101000000, _p20230101000000, _p20240101000000, _p20250101000000
           Archive_stage: ARCHIVE_COMPLETE
      Archive_percentage: 100
      Archived_file_info: null
              Start_time: 2026-02-06 10:50:00
                End_time: 2026-02-06 10:50:00
              Extra_info: null
    ```
    
    **Key field descriptions**:
    
    **Field**
    
    **Description**
    
    `Archive_partitions`
    
    The list of partitions archived in this task.
    
    `Archive_stage`
    
    The current status of the archive task. `ARCHIVE_COMPLETE` indicates success, and `ARCHIVE_ERROR` indicates failure.
    
    `Archive_percentage`
    
    The task completion percentage.
    
    `Start_time`, `End_time`
    
    The start and end times of the task.
    
    `Extra_info`
    
    Extra information. This field records detailed error reasons, especially when `Archive_stage` is `ARCHIVE_ERROR`.
    
3.  **Verify the table schema**
    
    After the archive task completes, use the `SHOW CREATE TABLE` command to view the table schema. Confirm that the `ENGINE` of old partitions has changed to `XENGINE`.
    
    ```
    SHOW CREATE TABLE sales\G
    ```
    
    The result is returned as follows:
    
    ```
    *************************** 1. row ***************************
           Table: sales
    Create Table: CREATE TABLE `sales` (
      `id` int(11) DEFAULT NULL,
      `name` varchar(20) DEFAULT NULL,
      `order_time` datetime NOT NULL,
      PRIMARY KEY (`order_time`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    /*!99990 800020216 PARTITION BY RANGE  COLUMNS(order_time) */ /*!99990 800020200 INTERVAL(YEAR, 1) */
    /*!99990 800020216 (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = XENGINE,
     PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = XENGINE,
     PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = XENGINE,
     PARTITION _p20230101000000 VALUES LESS THAN ('2023-01-01 00:00:00') ENGINE = XENGINE,
     PARTITION _p20240101000000 VALUES LESS THAN ('2024-01-01 00:00:00') ENGINE = XENGINE,
     PARTITION _p20250101000000 VALUES LESS THAN ('2025-01-01 00:00:00') ENGINE = XENGINE,
     PARTITION _p20260101000000 VALUES LESS THAN ('2026-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20270101000000 VALUES LESS THAN ('2027-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION _p20280101000000 VALUES LESS THAN ('2028-01-01 00:00:00') ENGINE = InnoDB) */
    ```
    

## Going Live

-   **Policy design**: Choose an appropriate value for `N` in the `PARTITIONS OVER N` clause based on your business scenario. For example, for order data, you might retain the most recent six months of data in InnoDB partitions to ensure query performance. For log data, you might retain only the most recent 30 days of data.
    
-   **Monitoring and alerting**: Set up monitoring for the `Archive_stage` field in the `mysql.dlm_progress` table. If the status changes to `ARCHIVE_ERROR`, immediately trigger an alert so that you can promptly resolve the issue.
