The Data Lifecycle Management (DLM) feature automatically archives cold data by periodically transferring infrequently used data from PolarStore to the low-cost Object Storage Service (OSS). This reduces storage costs and improves database efficiency.

## Applicability

-   Your cluster must run PolarDB for MySQL 8.0.2 with a minor version of 8.0.2.2.9 or later.
    
    To check your cluster version, see [Query the version number](/help/en/doc-detail/423885.html#section-7p8-757-iyh).
    
    **Note**
    
    If your cluster runs PolarDB for MySQL 8.0.2 with a minor version of 8.0.2.2.11.1 or later, the DLM feature does not record binary logs.
    
-   Before using a DLM policy, you must first [enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving#task-2274745).
    
    **Note**
    
    If you do not enable cold data archiving, the following error is reported:
    
    ```
    ERROR 8158 (HY000): [Data Lifecycle Management] DLM storage engine is not support. The value of polar_dlm_storage_mode is OFF.
    ```
    

## Limits

-   The DLM feature supports only partitioned tables that use the **RANGE COLUMN** partitioning method and do not contain subpartitions.
    
-   You cannot use the DLM feature on partitioned tables that have a [global secondary index (GSI)](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index#main-2261525).
    
-   PolarDB for MySQL does not support modifying DLM policies. To change a policy, delete the existing policy and create a new one.
    
-   If a DLM policy exists on a table, do not perform Data Definition Language (DDL) operations that cause the table schemas of the archived table and the source table to become inconsistent. Examples include adding or removing columns or modifying column types. Such operations can prevent subsequently archived data from being parsed. Before performing these DDL operations, delete the DLM policy from the table. To use automatic data archiving later, create a new DLM policy and specify an archived table name that differs from all previously used names.
    
-   We recommend using the [interval range partitioning](/help/en/polardb/polardb-for-mysql/user-guide/interval-range-partitioning/) feature to automatically extend partitions. At the same time, use the DLM feature to archive data from infrequently used partitions to OSS.
    
    **Note**
    
    Only clusters that run PolarDB for MySQL 8.0.2 with a minor version of 8.0.2.2.0 or later support interval range partitioning.
    

-   Specify the DLM feature when you use `CREATE TABLE` or `ALTER TABLE`.
    
-   DLM policies are not displayed when you run `SHOW CREATE TABLE`. You can view information about all DLM policies on your tables in the [mysql.dlm\_policies table](/help/en/polardb/polardb-for-mysql/user-guide/table-formats#section-grv-n9e-72m).
    

## Notes

-   After cold data is archived, the archived table on OSS is read-only and has poor query performance. Test the archived data in advance to confirm that the query performance meets your requirements.
    
-   After a partition from a partitioned table is archived to OSS, the data in the archived partition is read-only. You cannot perform DDL operations on the partitioned table.
    
-   When you perform a backup operation, data that has been transferred to OSS is not backed up. Data on OSS does not support point-in-time restore (PITR).
    

## Syntax

### Create a DLM policy

-   **Create a DLM policy with CREATE TABLE**
    
    ```
    CREATE TABLE [IF NOT EXISTS] tbl_name
        (create_definition,...)
        [table_options]
        [partition_options]
        [dlm_add_options]
    
    dlm_add_options:
        DLM ADD
            [(dlm_policy_definition [, dlm_policy_definition] ...)]
    
    dlm_policy_definition:
        POLICY policy_name
        [TIER TO TABLE/TIER TO PARTITION/TIER TO NONE]
        [ENGINE [=] engine_name]
        [STORAGE SCHEMA_NAME [=] storage_schema_name]
        [STORAGE TABLE_NAME [=] storage_table_name]
        [STORAGE [=] OSS]
        [READ ONLY]
        [COMMENT 'comment_string']
        [EXTRA_INFO 'extra_info']
        ON [(PARTITIONS OVER num)]           
    ```
    
-   **Create a DLM policy with ALTER TABLE**
    
    ```
    ALTER TABLE tbl_name
        [alter_option [, alter_option] ...]
        [partition_options]
        [dlm_add_options]
    
    dlm_add_options:
        DLM ADD
            [(dlm_policy_definition [, dlm_policy_definition] ...)]
    
    dlm_policy_definition:
        POLICY policy_name
        [TIER TO TABLE/TIER TO PARTITION/TIER TO NONE]
        [ENGINE [=] engine_name]
        [STORAGE SCHEMA_NAME [=] storage_schema_name]
        [STORAGE TABLE_NAME [=] storage_table_name]
        [STORAGE [=] OSS]
        [READ ONLY]
        [COMMENT 'comment_string']
        [EXTRA_INFO 'extra_info']
        ON [(PARTITIONS OVER num)]      
    ```
    

**DLM policy parameters**

**Parameter**

**Required**

**Description**

tbl\_name

Yes

The table name.

policy\_name

Yes

The policy name.

TIER TO TABLE

Yes

Archive to a table.

TIER TO PARTITION

Yes

Archive a partition to OSS.

**Note**

-   This feature is in canary release. To use this feature, go to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas), find the quota by its ID `polardb_mysql_hybrid_partition`, and click **Request** in the Actions column to enable it.
    
-   You can only archive partitions from partitioned tables in clusters that run PolarDB for MySQL 8.0.2 with a revision of 8.0.2.2.17 or later to OSS.
    
-   When you use this feature, make sure that the total number of partitions in the partitioned table does not exceed 8,192.
    

TIER TO NONE

Yes

Directly delete the data that needs to be archived.

engine\_name

No

The engine where the archived data is stored. Currently, you can only archive data to the CSV storage engine.

storage\_schema\_name

No

When archiving to a table, this is the database where the table is located. The default is the database of the current table.

storage\_table\_name

No

When archiving to a table, this is the name of the table. You can specify a table name. The default is `<current_table_name>_<current_DLM_policy_name>`.

STORAGE \[=\] OSS

No

The archived data is stored in the OSS engine. This is the default.

READ ONLY

No

The archived data is read-only. This is the default.

comment\_string

No

A comment for the DLM policy.

extra\_info

No

The OSS\_FILE\_FILTER information on the destination OSS table.

**Note**

-   You can only archive partitions from partitioned tables in Enterprise Edition clusters that run PolarDB for MySQL 8.0.2 with a revision of 8.0.2.2.25 or later to OSS.
    
-   This feature takes effect only when the destination table does not exist. In this case, the system uses the OSS\_FILE\_FILTER parameter in EXTRA\_INFO to automatically generate the [FILE\_FILTER](/help/en/polardb/polardb-for-mysql/user-guide/oss-file-filter-query-acceleration#7d49dc4369v0y) property when creating the destination OSS table. It also automatically generates filter data during archiving. If the destination table already exists, the existing file filter is used.
    

The format of `EXTRA_INFO` is `{"oss_file_filter":"field_filter[,field_filter]"}`, where the format of `field_filter` is:

```
field_filter := field_name[:filter_type]
filter_type := bloom
```

ON (PARTITIONS OVER num)

Yes

Archives data when the number of partitions is greater than num.

### Modify a DLM policy

-   Enable a DLM policy.
    
    ```
    ALTER TABLE table_name DLM ENABLE POLICY [(dlm_policy_name [, dlm_policy_name] ...)]
    ```
    
-   Disable a DLM policy.
    
    ```
    ALTER TABLE table_name DLM DISABLE POLICY [(dlm_policy_name [, dlm_policy_name] ...)]
    ```
    
-   Delete a DLM policy.
    
    ```
    ALTER TABLE table_name DLM DROP POLICY [(dlm_policy_name [, dlm_policy_name] ...)]
    ```
    

In these commands, `table_name` is the name of the current table, and `dlm_policy_name` is the name of the policy to modify. You can specify multiple policy names.

### Execute a DLM policy

-   Execute the DLM policies on all tables in the current cluster.
    
    ```
    CALL dbms_dlm.execute_all_dlm_policies();
    ```
    
-   Execute the DLM policies on a single table.
    
    ```
    CALL dbms_dlm.execute_table_dlm_policies('database_name', 'table_name');
    ```
    
    In this command, `database_name` is the name of the database where the table is located, and `table_name` is the name of the table.
    

You can use the **mysql event** feature to execute DLM policies during your cluster's O&M window. This avoids affecting database performance by running DLM during peak business hours and lets you periodically transfer expired data to reduce your database storage fees. The syntax for executing a DLM policy with an EVENT is:

```
CREATE
    EVENT
    [IF NOT EXISTS]
    event_name
    ON SCHEDULE schedule
    [COMMENT 'comment']
    DO event_body;

schedule: {
  EVERY interval
  [STARTS timestamp [+ INTERVAL interval] ...]
}

interval:
    quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
              WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
              DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}

event_body: {
      CALL dbms_dlm.execute_all_dlm_policies();
    | CALL dbms_dlm.execute_table_dlm_policies('database_name', 'table_name');
}
```

The following table describes the parameters.

**Parameter**

**Required**

**Description**

event\_name

Yes

The name of the current EVENT.

schedule

Yes

The execution time and interval for the current EVENT.

comment

No

A comment for the current EVENT.

event\_body

Yes

The content that the current EVENT executes. Set this to the statement that executes the DLM policy.

**Note**

-   When you use `CALL dbms_dlm.execute_all_dlm_policies()`, the current EVENT executes all DLM policies on the cluster. Therefore, you need to create one EVENT per cluster.
    
-   When you use `CALL dbms_dlm.execute_table_dlm_policies('database_name', 'table_name');`, the current EVENT only executes the DLM policies on a specific table. Therefore, you need to create a corresponding EVENT for each table with a DLM policy to archive its data at the specified time.
    

interval

Yes

The execution interval for the EVENT.

timestamp

Yes

The time to start executing the EVENT.

database\_name

Yes

The database name.

table\_name

Yes

The table name.

For more information about the MySQL EVENT feature, see the [official MySQL EVENT documentation](https://dev.mysql.com/doc/refman/8.0/en/create-event.html).

For usage examples, see [Cold data archiving to OSS examples](#section-q3r-ibt-h4d).

## Examples

### **Archive data from a partitioned table to an OSS external table**

1.  **Create a DLM policy**
    
    The following example creates a partitioned table named `sales`. This table uses the `order_time` column as the partition key and divides partitions by time interval. The table has two policies: INTERVAL and DLM.
    
    -   **INTERVAL policy**: When inserted data exceeds the partition range, a new partition is automatically created with a time interval of one year.
        
    -   **DLM policy**: The table is defined to have only three partitions. When the number of partitions exceeds three and the DLM policy is executed:
        
        -   If the OSS external table `sales_history` does not exist, a new OSS external table named `sales_history` is created, and cold data is transferred to the `sales_history` external table.
            
        -   If the `sales_history` external table exists and the `sales_history` table is in the built-in OSS space, cold data is directly transferred to the `sales_history` external table.
            
    
    **Note**
    
    Creating an `INTERVAL RANGE` partitioned table has certain prerequisites. For more information about using **INTERVAL**, see [PolarDB INTERVAL](/help/en/polardb/polardb-for-mysql/user-guide/interval-range-partitioning/).
    
    1.  Create the `sales` table with a DLM policy.
        
        ```
        CREATE TABLE `sales` (
          `id` int DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime NOT NULL,
           PRIMARY KEY (`order_time`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        PARTITION BY RANGE  COLUMNS(order_time) INTERVAL(YEAR, 1)
        (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = InnoDB)
        DLM ADD POLICY test_policy TIER TO TABLE ENGINE=CSV STORAGE=OSS READ ONLY
        STORAGE TABLE_NAME = 'sales_history' EXTRA_INFO '{"oss_file_filter":"id,name:bloom"}' ON (PARTITIONS OVER 3);
        ```
        
        The DLM policy for this table is named `test_policy`. When the number of partitions exceeds three, cold data from the current table is transferred to OSS in CSV format. The archived table is named `sales_history` and is read-only. If the archived OSS table does not exist, an OSS table is automatically created, and an OSS\_FILE\_FILTER is created on the `id` and `name` columns.
        
    2.  The DLM policy for the current table is stored in the `mysql.dlm_policies` system table. You can view the details of the DLM policy in this table. For more information about the `mysql.dlm_policies` table, see [Table schema description](/help/en/polardb/polardb-for-mysql/user-guide/table-formats#concept-2283598). View the schema information of the `mysql.dlm_policies` table.
        
        ```
        mysql> SELECT * FROM mysql.dlm_policies\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
                           Id: 3
                 Table_schema: test
                   Table_name: sales
                  Policy_name: test_policy
                  Policy_type: TABLE
                 Archive_type: PARTITION COUNT
                 Storage_mode: READ ONLY
               Storage_engine: CSV
                Storage_media: OSS
          Storage_schema_name: test
           Storage_table_name: sales_history
              Data_compressed: OFF
         Compressed_algorithm: NULL
                      Enabled: ENABLED
              Priority_number: 10300
        Tier_partition_number: 3
               Tier_condition: NULL
                   Extra_info: {"oss_file_filter": "id,name:bloom,order_time"}
                      Comment: NULL
        1 row in set (0.03 sec)      
        ```
        
        Currently, the `sales` table has three partitions, so data archiving is not performed.
        
    3.  Insert 3,000 test records into the `sales` partitioned table to ensure the data exceeds the current partition definition. This triggers the **INTERVAL** policy to automatically create new partitions.
        
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
        
    4.  At this point, the **INTERVAL** policy is triggered to automatically create new partitions. This increases the number of partitions in the `sales` table, and the table schema changes to:
        
        ```
        mysql> SHOW CREATE TABLE sales\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************       
              Table: sales
        Create Table: CREATE TABLE `sales` (  
          `id` int(11) DEFAULT NULL,  
          `name` varchar(20) DEFAULT NULL,  
          `order_time` datetime NOT NULL,  
           PRIMARY KEY (`order_time`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        /*!50500 PARTITION BY RANGE  COLUMNS(order_time) */ 
        /*!99990 800020200 INTERVAL(YEAR, 1) */
        /*!50500 (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20230101000000 VALUES LESS THAN ('2023-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20240101000000 VALUES LESS THAN ('2024-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20250101000000 VALUES LESS THAN ('2025-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20260101000000 VALUES LESS THAN ('2026-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20270101000000 VALUES LESS THAN ('2027-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20280101000000 VALUES LESS THAN ('2028-01-01 00:00:00') ENGINE = InnoDB) */
        1 row in set (0.03 sec)
        ```
        
        New partitions have been created, and the number of partitions is greater than three. This meets the execution condition of the DLM policy, so data can be archived.
        
2.  **Execute the DLM policy**
    
    1.  You can execute the DLM policy directly with an SQL statement, or you can execute it periodically using MySQL's EVENT feature. For example, assume that starting from October 11, 2022, your cluster's O&M window begins at 1:00 AM every day. The DLM policy will then run at 1:00 AM daily. Create the corresponding execution EVENT as follows:
        
        ```
        CREATE EVENT dlm_system_base_event
               ON SCHEDULE EVERY 1 DAY
            STARTS '2022-10-11 01:00:00'
            do CALL 
        dbms_dlm.execute_all_dlm_policies();
        ```
        
        After 1:00 AM, this EVENT executes the DLM policies on all tables.
        
    2.  Run the following command to view the schema information of the `sales` table.
        
        ```
        mysql> SHOW CREATE TABLE sales\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************;
               Table: sales
        Create Table: CREATE TABLE `sales` (  
          `id` int(11) DEFAULT NULL,  
          `name` varchar(20) DEFAULT NULL,  
          `order_time` datetime NOT NULL,  
           PRIMARY KEY (`order_time`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        /*!50500 PARTITION BY RANGE  COLUMNS(order_time) */ 
        /*!99990 800020200 INTERVAL(YEAR, 1) */
        /*!50500 (PARTITION _p20260101000000 VALUES LESS THAN ('2026-01-01 00:00:00') ENGINE = InnoDB,
        PARTITION _p20270101000000 VALUES LESS THAN ('2027-01-01 00:00:00') ENGINE = InnoDB, 
        PARTITION _p20280101000000 VALUES LESS THAN ('2028-01-01 00:00:00') ENGINE = InnoDB) */
        1 row in set (0.03 sec)
        ```
        
        The table now has only three partitions remaining.
        
    3.  You can view the execution records of the DLM policy in the `mysql.dlm_progress` table. For the definition of the `dlm_progress` table, see [Table schema description](/help/en/polardb/polardb-for-mysql/user-guide/table-formats#concept-2283598). Run the following command to view the schema information of the `mysql.dlm_progress` table.
        
        ```
        mysql> SELECT * FROM mysql.dlm_progress\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************;
                          Id: 1
                Table_schema: test
                  Table_name: sales
                 Policy_name: test_policy
                 Policy_type: TABLE
              Archive_option: PARTITIONS OVER 3
              Storage_engine: CSV
               Storage_media: OSS
             Data_compressed: OFF
        Compressed_algorithm: NULL
          Archive_partitions: p20200101000000, p20210101000000, p20220101000000, _p20230101000000, _p20240101000000, _p20250101000000
               Archive_stage: ARCHIVE_COMPLETE
          Archive_percentage: 0
          Archived_file_info: null
                  Start_time: 2024-07-26 17:56:20
                    End_time: 2024-07-26 17:56:50
                  Extra_info: null
        1 row in set (0.00 sec)
        ```
        
        The partitions that store infrequently used cold data, including **p20200101000000**, **p20210101000000**, **p20220101000000**, **\_p20230101000000**, **\_p20240101000000**, and **\_p20250101000000**, have been transferred to the OSS external table.
        
    4.  Run the following command to view the schema of the OSS external table.
        
        ```
        mysql> SHOW CREATE TABLE sales_history\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************;
               Table: sales_history
        Create Table: CREATE TABLE `sales_history` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime DEFAULT NULL,
           PRIMARY KEY (`order_time`)
        ) /*!99990 800020213 STORAGE OSS */ ENGINE=CSV DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci /*!99990 800020204 NULL_MARKER='NULL' */ /*!99990 800020223 OSS META=1 */ /*!99990 800020224 OSS_FILE_FILTER='id,name:bloom,order_time' */
        1 row in set (0.15 sec)
        ```
        
        The table becomes a CSV table with data stored in the OSS engine. The method for querying it is the same as for a local table. The specified columns have been added to the OSS\_FILE\_FILTER. Because `order_time` is the partition key, an OSS\_FILE\_FILTER is also automatically created for it.
        
    5.  Query the data on the `sales` and `sales_history` tables respectively.
        
        ```
        SELECT COUNT(*) FROM sales;
        +----------+
        | count(*) |
        +----------+
        |      984 |
        +----------+
        1 row in set (0.01 sec)
        
        SELECT COUNT(*) FROM sales_history;
        +----------+
        | count(*) |
        +----------+
        |     2016 |
        +----------+
        1 row in set (0.57 sec)           
        ```
        
        You can see that the total number of records is 3,000, which matches the amount of data initially inserted into the `sales` table.
        
    6.  Query the OSS external table using OSS\_FILE\_FILTER (the OSS\_FILE\_FILTER switch must be enabled):
        
        ```
        mysql> explain select * from sales_history where id = 9;
        +----+-------------+---------------+------------+------+---------------+------+---------+------+------+----------+-----------------------------------------------------------------------------+
        | id | select_type | table         | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                                                       |
        +----+-------------+---------------+------------+------+---------------+------+---------+------+------+----------+-----------------------------------------------------------------------------+
        |  1 | SIMPLE      | sales_history | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 2016 |    10.00 | Using where; With pushed engine condition (`test`.`sales_history`.`id` = 9) |
        +----+-------------+---------------+------------+------+---------------+------+---------+------+------+----------+-----------------------------------------------------------------------------+
        1 row in set, 1 warning (0.59 sec)
        
        mysql>  select * from sales_history where id = 9;
        +------+----------------+---------------------+
        | id   | name           | order_time          |
        +------+----------------+---------------------+
        |    9 | 2531826@stiven | 2019-07-04 00:00:00 |
        +------+----------------+---------------------+
        1 row in set (0.19 sec)
        ```
        

### **Archive partitions from a partitioned table to OSS**

1.  **Create a DLM policy**
    
    The following example creates a partitioned table named `sales`. This table uses the `order_time` column as the partition key and divides partitions by time interval. The table has two policies: INTERVAL and DLM.
    
    -   **INTERVAL policy**: When inserted data exceeds the partition range, a new partition is automatically created with a time interval of one year.
        
    -   **DLM policy**: The table is defined to have only three partitions. When the number of partitions exceeds three, executing the DLM policy directly transfers the older partitions to OSS.
        
    
    1.  Create the `sales` table.
        
        ```
        CREATE TABLE `sales` (
          `id` int DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime NOT NULL,
           PRIMARY KEY (`order_time`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        PARTITION BY RANGE  COLUMNS(order_time) INTERVAL(YEAR, 1)
        (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = InnoDB)
        DLM ADD POLICY policy_part2part TIER TO PARTITION ENGINE=CSV STORAGE=OSS READ ONLY ON (PARTITIONS OVER 3);
        ```
        
        The DLM policy for this table is named `policy_part2part`. When the number of partitions exceeds three, the old partitions are transferred to OSS.
        
    2.  View the DLM policy in the `mysql.dlm_policies` table.
        
        ```
        SELECT * FROM mysql.dlm_policies\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
                           Id: 2
                 Table_schema: test
                   Table_name: sales
                  Policy_name: policy_part2part
                  Policy_type: PARTITION
                 Archive_type: PARTITION COUNT
                 Storage_mode: READ ONLY
               Storage_engine: CSV
                Storage_media: OSS
          Storage_schema_name: NULL
           Storage_table_name: NULL
              Data_compressed: OFF
         Compressed_algorithm: NULL
                      Enabled: ENABLED
              Priority_number: 10300
        Tier_partition_number: 3
               Tier_condition: NULL
                   Extra_info: null
                      Comment: NULL
        1 row in set (0.03 sec)
        ```
        
    3.  Use the `proc_batch_insert` stored procedure to insert test data into the `sales` partitioned table. This triggers the INTERVAL policy to automatically create new partitions.
        
        ```
        CALL proc_batch_insert(1, 3000, 'sales');
        ```
        
        The following result indicates that the data was inserted successfully:
        
        ```
        Query OK, 1 row affected, 1 warning (0.99 sec)
        ```
        
    4.  Run the following command to view the schema information of the `sales` table.
        
        ```
        SHOW CREATE TABLE sales \G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
               Table: sales
        Create Table: CREATE TABLE `sales` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime DEFAULT NULL,
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
        1 row in set (0.03 sec)
        ```
        
2.  **Execute the DLM policy**
    
    1.  Execute the DLM policy with the following command.
        
        ```
        CALL dbms_dlm.execute_all_dlm_policies();
        ```
        
    2.  View the DLM execution record in the `mysql.dlm_progress` table.
        
        ```
        SELECT * FROM mysql.dlm_progress \G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
                          Id: 4
                Table_schema: test
                  Table_name: sales
                 Policy_name: policy_part2part
                 Policy_type: PARTITION
              Archive_option: PARTITIONS OVER 3
              Storage_engine: CSV
               Storage_media: OSS
             Data_compressed: OFF
        Compressed_algorithm: NULL
          Archive_partitions: p20200101000000, p20210101000000, p20220101000000, _p20230101000000, _p20240101000000, _p20250101000000
               Archive_stage: ARCHIVE_COMPLETE
          Archive_percentage: 100
          Archived_file_info: null
                  Start_time: 2023-09-11 18:04:39
                    End_time: 2023-09-11 18:04:40
                  Extra_info: null
        1 row in set (0.02 sec)
        ```
        
    3.  Run the following command to view the schema information of the `sales` table.
        
        ```
        SHOW CREATE TABLE sales \G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
               Table: sales
        Create Table: CREATE TABLE `sales` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime DEFAULT NULL,
           PRIMARY KEY (`order_time`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci CONNECTION='default_oss_server'
        /*!99990 800020205 PARTITION BY RANGE  COLUMNS(order_time) */ /*!99990 800020200 INTERVAL(YEAR, 1) */
        /*!99990 800020205 (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = CSV,
         PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = CSV,
         PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = CSV,
         PARTITION _p20230101000000 VALUES LESS THAN ('2023-01-01 00:00:00') ENGINE = CSV,
         PARTITION _p20240101000000 VALUES LESS THAN ('2024-01-01 00:00:00') ENGINE = CSV,
         PARTITION _p20250101000000 VALUES LESS THAN ('2025-01-01 00:00:00') ENGINE = CSV,
         PARTITION _p20260101000000 VALUES LESS THAN ('2026-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20270101000000 VALUES LESS THAN ('2027-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20280101000000 VALUES LESS THAN ('2028-01-01 00:00:00') ENGINE = InnoDB) */
        1 row in set (0.03 sec)
        ```
        
        The queried table schema information shows that the `p20200101000000`, `p20210101000000`, `p20220101000000`, `_p20230101000000`, `_p20240101000000`, and `_p20250101000000` partitions in the `sales` partitioned table have all been transferred to OSS. Only the three hot data partitions `_p20260101000000`, `_p20270101000000`, and `_p20280101000000` remain in the InnoDB engine. The `sales` table has become a hybrid partitioned table. For information about how to query data in a hybrid partitioned table, see [Query a hybrid partition](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#section-ca2-pfj-gp3).
        

### **Directly delete cold data**

1.  **Create a DLM policy**
    
    The following example creates a partitioned table named `sales`. This table uses the `order_time` column as the partition key and divides partitions by time interval. The table has two policies: INTERVAL and DLM.
    
    -   **INTERVAL policy**: When inserted data exceeds the partition range, a new partition is automatically created with a time interval of one year.
        
    -   **DLM policy**: The table is defined to have only three partitions. When the number of partitions exceeds three and the DLM policy is executed, the cold data is directly deleted.
        
    
    1.  Create the `sales` table with a DLM policy.
        
        ```
        CREATE TABLE `sales` (
          `id` int DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime DEFAULT NULL,
           PRIMARY KEY (`order_time`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        PARTITION BY RANGE  COLUMNS(order_time) INTERVAL(YEAR, 1)
        (PARTITION p20200101000000 VALUES LESS THAN ('2020-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p20210101000000 VALUES LESS THAN ('2021-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p20220101000000 VALUES LESS THAN ('2022-01-01 00:00:00') ENGINE = InnoDB)
        DLM ADD POLICY test_policy TIER TO NONE ON (PARTITIONS OVER 3);
        ```
        
        The DLM policy for this table is named `test_policy`, and its execution condition is that the number of partitions is greater than three. When the DLM policy is executed, it directly deletes the cold data.
        
    2.  Run the following command to view the `mysql.dlm_policies` table.
        
        ```
        SELECT * FROM mysql.dlm_policies\G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
                           Id: 4
                 Table_schema: test
                   Table_name: sales
                  Policy_name: test_policy
                  Policy_type: NONE
                 Archive_type: PARTITION COUNT
                 Storage_mode: NULL
               Storage_engine: NULL
                Storage_media: NULL
          Storage_schema_name: NULL
           Storage_table_name: NULL
              Data_compressed: OFF
         Compressed_algorithm: NULL
                      Enabled: ENABLED
              Priority_number: 50000
        Tier_partition_number: 3
               Tier_condition: NULL
                   Extra_info: null
                      Comment: NULL
        1 row in set (0.01 sec)
        ```
        
    3.  Insert test data into the `sales` partitioned table to trigger the **INTERVAL** policy to automatically create new partitions. Use the `proc_batch_insert` stored procedure to insert new data. The table schema is as follows:
        
        ```
        CALL proc_batch_insert(1, 3000, 'sales');
        Query OK, 1 row affected, 1 warning (0.99 sec)
        ```
        
    4.  Run the following command to view the schema information of the `sales` table.
        
        ```
        SHOW CREATE TABLE sales \G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
               Table: sales
        Create Table: CREATE TABLE `sales` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime DEFAULT NULL,
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
        1 row in set (0.03 sec)
        ```
        
2.  **Execute the DLM policy**
    
    1.  Execute the DLM policy directly with the following command.
        
        ```
        CALL dbms_dlm.execute_all_dlm_policies();
        ```
        
    2.  While the DLM policy is executing, view the data in the `mysql.dlm_progress` table.
        
        ```
        SELECT * FROM mysql.dlm_progress \G
        ```
        
        The table shows the following result:
        
        ```
        *************************** 1. row ***************************
                          Id: 1
                Table_schema: test
                  Table_name: sales
                 Policy_name: test_policy
                 Policy_type: NONE
              Archive_option: PARTITIONS OVER 3
              Storage_engine: NULL
               Storage_media: NULL
             Data_compressed: OFF
        Compressed_algorithm: NULL
          Archive_partitions: p20200101000000, p20210101000000, p20220101000000, _p20230101000000, _p20240101000000, _p20250101000000
               Archive_stage: ARCHIVE_COMPLETE
          Archive_percentage: 100
          Archived_file_info: null
                  Start_time: 2023-01-09 17:31:24
                    End_time: 2023-01-09 17:31:24
                  Extra_info: null
        1 row in set (0.03 sec)
        ```
        
        The partitions that store infrequently used cold data, including `p20200101000000`, `p20210101000000`, `p20220101000000`, `_p20230101000000`, `_p20240101000000`, and `_p20250101000000`, have been deleted.
        
    3.  The `sales` table schema is as follows:
        
        ```
        SHOW CREATE TABLE sales \G
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
               Table: sales
        Create Table: CREATE TABLE `sales` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime DEFAULT NULL,
           PRIMARY KEY (`order_time`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        /*!50500 PARTITION BY RANGE  COLUMNS(order_time) */ /*!99990 800020200 INTERVAL(YEAR, 1) */
        /*!50500 (PARTITION _p20260101000000 VALUES LESS THAN ('2026-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20270101000000 VALUES LESS THAN ('2027-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20280101000000 VALUES LESS THAN ('2028-01-01 00:00:00') ENGINE = InnoDB) */
        1 row in set (0.02 sec)
        ```
        

### **Create or delete a DLM policy with ALTER TABLE**

-   Create a DLM policy with `ALTER TABLE`.
    
    ```
    ALTER TABLE t DLM ADD POLICY test_policy TIER TO TABLE ENGINE=CSV STORAGE=OSS READ ONLY
    STORAGE TABLE_NAME = 'sales_history' ON (PARTITIONS OVER 3);
    ```
    
    The DLM policy for table `t` is named `test_policy`, and its execution condition is that the number of partitions is greater than three. When this DLM policy is executed and the number of partitions is greater than three, data from the old partitions in table `t` is archived to OSS. The archived table on OSS is named `sales_history`.
    
-   Enable the `test_policy` DLM policy on table `t`.
    
    ```
    ALTER TABLE t DLM ENABLE POLICY test_policy;
    ```
    
-   Disable the `test_policy` DLM policy on table `t`.
    
    ```
    ALTER TABLE t DLM DISABLE POLICY test_policy;
    ```
    
-   Delete the `test_policy` DLM policy from table `t`.
    
    ```
    ALTER TABLE t DLM DROP POLICY test_policy;
    ```
    

## Handle execution errors

A DLM policy may fail to execute due to configuration issues. When this happens, the error record is stored in the `mysql.dlm_progress` table. View the error record with the following command:

```
SELECT * FROM mysql.dlm_progress WHERE Archive_stage = "ARCHIVE_ERROR";
```

Find the error details in the **Extra\_info** field. After you confirm the cause of the error, delete the current record or change the **Archive\_stage** of the current record to **ARCHIVE\_COMPLETE**. Then, manually execute the DLM policy with the `call dbms_dlm.execute_all_dlm_policies;` command, or wait for it to run automatically in the next execution cycle.

**Note**

For data security, if a policy's execution record has a status of **ARCHIVE\_ERROR**, the policy does not run automatically again. The policy continues only after you confirm the cause of the failure and modify the corresponding record.
