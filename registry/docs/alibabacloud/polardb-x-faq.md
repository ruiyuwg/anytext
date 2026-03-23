This topic provides answers to frequently asked questions about PolarDB-X DDL.

## **What should I do when the number of PolarDB-X 2.0 databases exceeds the limit of 32?**

You can connect to the database using a high-privilege account and execute SET GLOBAL MAX\_LOGICAL\_DB\_COUNT=64; to increase the limit.

## **How can I identify abnormal DDL operations in PolarDB-X 2.0?**

You can use the following statements for verification:

```
SHOW FULL DDL; 
SHOW FULL physical_processlist WHERE info !='';
```

## **What is the maximum number of records that can be inserted in a batch operation in PolarDB-X?**

You can evaluate based on the following information:

-   Storage capacity calculation principles:
    
    -   In the InnoDB engine, INT(4 Byte), BIGINT(8 Byte), DECIMAL(4 Byte), DATETIME(8 Byte).
        
    -   VARCHAR(N): UTF8 character set uses 3 bytes per character, UTF8MB4 uses 4 bytes per character.
        
    -   Special fields need separate evaluation: TEXT/BLOB/LONGTEXT and other large object types. For example: Some character type designs are not reasonable, such as Group\_ID set to VARCHAR(1024), when it actually only stores a number 0. Estimation should be based on maximum storage per row.
        
        Example: Assuming the maximum storage space occupied by all fields in a table row is: 8+8+8+8+8+8+255+255+255+1024+4+64+8=1913 bytes. Based on the 16M batch insert method of PolarDB-X CN computation layer, the recommendations are as follows:
        
        -   Calculating with 1M, (1024×1024)/1913 ≈ 548. Therefore, it is recommended to control the number of records in a single batch to less than 500 to avoid exceeding the limit.
            
        -   With 16M, 500×16=8000 records. When max\_allowed\_packet=16M, inserting 8000 records in a single batch is a relatively reasonable and safe range.
            
        
        In summary, the actual number of batch inserts should be reasonably estimated based on the actual byte usage per row and the max\_allowed\_packet parameter. Choose an appropriate number of batch inserts while ensuring performance and safety.
        
-   Other factors affecting insertion performance:
    
    -   InnoDB buffer pool size.
        
    -   Disk IOPS capability, network bandwidth (in distributed database scenarios).
        
    -   Redo log buffer (innodb\_log\_buffer\_size) flushing mechanism.
        
-   Parameter setting recommendations:
    
    -   It is recommended to adjust the `max_allowed_packet` parameter to its maximum value.
        
    -   It is recommended to adjust `innodb_log_buffer_size` to between 32M and 128M, and find the optimal insertion response time through multiple tests. Setting this parameter appropriately can prevent InnoDB from frequently flushing logs to disk before transaction commits, thereby improving transaction processing performance.
        

## **PolarDB-X DDL execution error: \[ERR\_REPARTITION\_TABLE\_WITH\_GSI\] can not alter table repartition when gsi table is not public?**

**Cause:**

The GSI index status is incorrect. You can use SHOW GLOBAL INDEX FROM xxx; to further confirm the index status. Only PUBLIC and ABSENT states support DDL operations on the target table. Other states indicate that the GSI index is still being created and other DDL operations cannot be performed.

**Solutions:**

1.  First execute `SHOW DDL;` to check if there are any remaining DDL operations blocking.
    
2.  If there are remaining DDL operations, you can wait for the DDL operations to complete. If the [SHOW GLOBAL INDEX](/help/en/polardb/polardb-for-xscale/show-global-index) status is not PUBLIC or ABSENT, you can consider using CANCEL DDL JOB\_ID; to cancel the GSI creation. Then re-execute the required DDL operation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8508772571/p978362.png)
    

## **What should I do when encountering errors like** `**find incorrect column xxx**`**/**`**Out of range value for column xxx**`**/**`**Data too Long for column xxx**` **when executing DDL in PolarDB-X 2.0?**

If a field's type is DECIMAL(10, 0), it can store integers with up to 9 digits (with 0 decimal places). After executing DDL, if the field type becomes DECIMAL(5, 4), it can store integers with at most 1 digit and 4 decimal places. In this case, if the original DECIMAL(10, 0) column contains any integers greater than or equal to 10, executing the DDL will result in an error.

### **How should I handle partial shard update failures when executing ALTER TABLE MODIFY/CHANGE COLUMN statements in PolarDB-X?**

In PolarDB-X, there are two ways to handle this: forward execution and reverse execution.

Example

1.  Create the following table structure and insert some records:
    
    ```
    CREATE TABLE `t1` (
     `id` bigint(20) NOT NULL AUTO_INCREMENT,
     `c2` varchar(16) DEFAULT NULL,
     PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4
    PARTITION BY KEY(`id`)
    PARTITIONS 32;
    
    INSERT INTO t1 VALUES (1, "1");
    INSERT INTO t1 VALUES (2, "abc");
    ```
    
2.  In strict SQL\_MODE mode, perform a MODIFY COLUMN DDL on table t1 to change the c2 column from varchar to a numeric type:
    
    ```
    SET sql_mode="strict_trans_tables"; 
    ALTER TABLE t1 MODIFY COLUMN c2 INT;
    ```
    
3.  Because one shard contains an invalid value like `"abc"`, the change will fail on that shard in strict SQL\_MODE mode. The DDL will report an error:
    
    ```
    ...Not all physical DDLs have been executed successfully: 32 expected, 31 done, 1 failed...Incorrect integer value...
    ```
    

In the above example scenario, PolarDB-X cannot handle it automatically. The handling methods are as follows:

-   Forward execution: Fix the data in the failed shard and continue with the DDL.
    
-   Reverse execution: If some business processes cannot modify existing invalid data, you need to revert the changes in the shards that were successfully executed.
    
    ## Forward execution
    
    1.  Correct the invalid data: Fix the invalid values in the table according to the DDL, for example:
        
        ```
        UPDATE t1 SET c2=0 WHERE id=2;
        ```
        
    2.  Execute `SHOW DDL` to obtain the `JOB_ID` of the failed DDL:
        
        ```
        --------------------+----------------+---------------+----------+--------------+-----------+--------------------------+--------------------------+-----------------+----------------------------+------------------------------+----------------------+-----------------------+---------------+| JOB_ID            |OBJECT_SCHEMA   |  OBJECT_NAME  | ENGINE   |  DDL_TYPE    |  STATE    |  TOTAL_BACKFILL_PROGRESS | CURRENT_PHY_DDL_PROGRESS |   PROGRESS      |    START_TIME              |     END_TIME                 |     ELAPSED_TIME(MS）|      PHY_PROCESS      |    CANCELABLE |--------------------+----------------+---------------+----------+--------------+-----------+--------------------------+--------------------------+-----------------+----------------------------+------------------------------+----------------------+-----------------------+--------------+| 166113736846543257|    testdb      |      t1       |  DAG     |  ALTER_TABLE |  PAUSED   |  --                      |      96%                 |        33%      |    2023-11-14 14:01:11:585 |     2023-11-14 14:01:11:910  |        3325          |                       |     false    |--------------------+----------------+---------------+----------+--------------+-----------+--------------------------+--------------------------+-----------------+----------------------------+------------------------------+----------------------+-----------------------+--------------+
        ```
        
    3.  Continue executing this DDL:
        
        ```
        CONTINUE DDL 1661145277907759104;
        ```
        
    
    ## Reverse execution
    
    **Note**
    
    Reverse execution is only applicable to abnormal scenarios where ALTER TABLE MODIFY COLUMN results in partial success/failure at the shard level. The limitations are as follows:
    
    -   Automatic rollback capability for this scenario is provided in version 5.4.18 of PolarDB-X instances. It is recommended to upgrade to this version or later.
        
    -   Only applicable to PolarDB-X 2.0 instances.
        
    -   The ALTER statement only includes operations to change column types, not operations such as renaming.
        
    -   It must be a case where some shards succeed and some fail, not including scenarios where all succeed or all fail. That is, the error message must contain information like `32 expected, 31 done, 1 failed`, where the number of failures must be greater than 0 and less than the expected number.
        
    -   The execution algorithm does not specify the use of OMC (OMC is only used when the DDL statement explicitly sets ALGORITHM=OMC; if not specified, it is not used).
        
    
    1.  Execute `SHOW DDL` to obtain the `JOB_ID` of the failed DDL:
        
        ```
        --------------------+----------------+---------------+----------+--------------+-----------+--------------------------+--------------------------+-----------------+----------------------------+------------------------------+----------------------+-----------------------+---------------+| JOB_ID            |OBJECT_SCHEMA   |  OBJECT_NAME  | ENGINE   |  DDL_TYPE    |  STATE    |  TOTAL_BACKFILL_PROGRESS | CURRENT_PHY_DDL_PROGRESS |   PROGRESS      |    START_TIME              |     END_TIME                 |     ELAPSED_TIME(MS）|      PHY_PROCESS      |    CANCELABLE |--------------------+----------------+---------------+----------+--------------+-----------+--------------------------+--------------------------+-----------------+----------------------------+------------------------------+----------------------+-----------------------+--------------+| 166113736846543257|    testdb      |      t1       |  DAG     |  ALTER_TABLE |  PAUSED   |  --                      |      96%                 |        33%      |    2023-11-14 14:01:11:585 |     2023-11-14 14:01:11:910  |        3325          |                       |     false    |--------------------+----------------+---------------+----------+--------------+-----------+--------------------------+--------------------------+-----------------+----------------------------+------------------------------+----------------------+-----------------------+--------------+
        ```
        
    2.  Cancel the current DDL task:
        
        ```
        DELETE FROM metadb.ddl_engine WHERE job_id=166113736846543257;
         
        DELETE FROM metadb.ddl_engine_task WHERE job_id=166113736846543257;
        ```
        
        **Note**
        
        Note that this step requires a high-privilege account to execute.
        
    3.  After cancellation, execute SHOW DDL to verify that the task no longer exists.
        
    4.  Please note that at this point the table is in an inconsistent state and must be addressed promptly. `CHECK TABLE` can be used to observe:
        
        ```
        CHECK TABLE t1; 
        +----------------------+-------+----------+--------------------------------+----------------------------------------------------------------+ | TABLE                | OP    | MSG_TYPE | MSG_TEXT                                                                                        |+----------------------+-------+----------+-------------------------------- ----------------------------------------------------------------+ |testdb.t1:Topology    | check | Error    | Table 'testdb_P00001_GROUP.t1 _EZ5p_00010' find incorrect columns 'c2', please recreate table   |                                           ||testdb.t1:Columns     | check | Error    | Table 'testdb_P00000_GROUP.t1 _EZ5p_00000' find incorrect columns 'c2', please recreate table   |+----------------------+-------+----------+-------------------------------- ----------------------------------------------------------------+ 2 rows in set (0.03 sec)
        ```
        
    5.  Execute the reverse ALTER TABLE statement:
        
        ```
        ALTER TABLE t1 MODIFY COLUMN c2 varchar(16);
        ```
        
        **Note**
        
        At this point, you can also modify the column to another type, not necessarily the original type. For example, if reducing a field from varchar(16) to varchar(12) fails, you can directly try adjusting it to varchar(14 restoring the original length.
        
    6.  Perform `CHECK TABLE` again. At this point, the table is in a consistent state:
        
        ```
        CHECK TABLE t1; 
        +--------------------+-------+----------+------------+ | TABLE              | OP    | MSG_TYPE | MSG_TEXT   |+----------------------+-------+----------+----------+ | testdb.t1:Topology | CHECK | status   | OK         || testdb.t1:Columns  | CHECK | status   | OK         |+--------------------+-------+----------+------------+ 2 rows in set (0.02 sec)
        ```
