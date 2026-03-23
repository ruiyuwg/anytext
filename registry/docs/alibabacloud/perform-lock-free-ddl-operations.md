To prevent table locking issues when you change a database table schema, Data Management (DMS) provides the lockless schema change feature. This feature helps prevent business interruptions that can be caused by table locks and replication latency between primary and standby instances during native online Data Definition Language (DDL) operations. This topic describes how to perform a lockless schema change by submitting a lockless change ticket.

## Prerequisites

-   The database type is RDS for MySQL, PolarDB for MySQL, MyBase for MySQL, or another MySQL source.
    
    **Note**
    
    Other sources refer to databases from other cloud providers or self-managed databases.
    
-   The database engine is InnoDB, RocksDB, or X-Engine.
    
-   Binary logging is enabled for the database.
    
    **Note**
    
    -   For PolarDB for MySQL, binary logging is disabled by default. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging).
        
    -   The binary log format must be ROW. If the database previously used the MIXED format, you must change the format to ROW. Then, you must restart the database server or kill all old connections before you perform a lockless schema change in DMS.
        
    
-   the control mode of the instance must be Stable Change or Security Collaboration. For more information, see [View control modes](/help/en/dms/view-the-control-mode-of-an-instance#multiTask315).
    
-   Lockless schema change is [enabled for the instance](/help/en/dms/enable-the-lock-free-schema-change-feature#task-2058290).
    

## Notes

-   You must use a database account that has read/write permissions or a high-privilege database account. If the current database account has insufficient permissions, you can perform one of the following operations:
    
    -   Grant permissions to the database account. For more information, see [Manage database accounts and permissions](/help/en/dms/manage-user-permissions-on-mysql-databases#task-1940075).
        
        **Note**
        
        Grant the ALL PRIVILEGES permission or the following read/write permissions to the database account:
        
        ALTER, CREATE, DELETE, DROP, INDEX, INSERT, LOCK TABLES, SELECT, TRIGGER, UPDATE, REPLICATION CLIENT, and REPLICATION SLAVE.
        
    -   Change the database account. For more information, see [Edit instance information](/help/en/dms/modify-database-instances#multiTask2593).
        
-   Ensure that the database has sufficient disk space. A temporary table is created in the target database to copy data. Ensure that the available disk space is more than twice the size of the target table. Insufficient disk space can cause the instance to be locked. For more information, see [Database performance](/help/en/dms/view-the-performance-details-of-a-database-instance#multiTask938).
    
-   The target table must have a primary key or a unique key. During a lockless schema change, the primary key or unique key is used for segmented full data copying and subsequent incremental updates.
    
    **Note**
    
    If the target table has only a primary key or only a unique key, updating the key during the schema change will cause the task to fail.
    
-   The target table name cannot exceed 56 characters in length.
    
-   The lockless schema change feature in DMS is not supported for PolarDB-X (including PolarDB-X 1.0 and PolarDB-X 2.0), RDS for PostgreSQL, or other non-MySQL databases.
    
-   To modify the table schema, use the ALTER TABLE syntax. Syntaxes such as CREATE INDEX are not supported.
    
-   For PolarDB instances, the final lock time on the original table may be much longer than the table switch lock timeout. This is because long-running transactions on read-only nodes can affect the primary node after it acquires a lock. This prevents the DDL on the primary node from completing and can lead to extended table locks. You can avoid this by [modifying parameters](/help/en/polardb/polardb-for-mysql/user-guide/prevent-long-running-transactions-on-read-only-nodes-from-blocking-ddl-operations).
    

## Procedure

**Note**

The following steps use an instance in Security Collaboration mode as an example.

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  In the top navigation bar, choose **Database Development** > **Data Change** > **Lock-free Change**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the console and choose **All Features** > **Database Development** > **Data Change** > **Lockless Change**.
    
3.  Configure the lockless change ticket. The following table describes some of the parameters.
    
    For more information, see [Procedure](/help/en/dms/perform-lock-free-dml-operations#section-a4n-ywn-5ci).
    
    **Parameter**
    
    **Description**
    
    **Database**
    
    Search for and select one or more target databases.
    
    -   My Permissions: You can search for and select only databases for which you have change permissions.
        
    -   All: You can search for and select all databases, except for those with metadata access control enabled.
        
        **Note**
        
        If you do not have change permissions for the target database, choose **Security And Disaster Recovery (DBS)** > **Permission Center** > **Permission Ticket** in the top menu bar. On the Permission Ticket page, click **Request Permission** > **DB Permission** to request the required permissions.
        
    
    **Execution Method**
    
    Select an execution method for the ticket:
    
    -   Submitter Executes After Approval.
        
    -   Automatic Execution After Approval.
        
    -   Last Approver Executes.
        
    
    **Note**
    
    Administrators can modify the list of execution methods by choosing **Operations Management** > **Configuration Management**. For more information, see [Configuration Management](/help/en/dms/configuration-management#multiTask2952).
    
    **Affected Rows**
    
    The **estimated** number of data rows affected by this update.
    
    **Change SQL**
    
    Enter DDL statements, such as `ALTER TABLE` or `OPTIMIZE`.
    
    **Note**
    
    If you enter Data Manipulation Language (DML) statements, you are performing a lockless data change task. For more information, see [DML lockless change](/help/en/dms/perform-lock-free-dml-operations#multiTask1575).
    
4.  Click **Submit Ticket**.
    
    The system automatically performs an SQL precheck. If the precheck fails, click **Modify SQL** to modify the SQL statements based on the failure reason, and then submit the ticket again.
    
5.  After the ticket is approved, go to the **Execution** section on the ticket details page and click **Execute Change**.
    
6.  Configure the task execution parameters.
    
    **Configuration Item**
    
    **Description**
    
    **Execution Policy**
    
    -   **Execute Immediately**: The default option. The task is executed immediately after you click **Confirm Execution**.
        
    -   **Scheduled Execution**: Select a start time for the task. After you click **Confirm Execution**, the task runs at the specified time.
        
    
    **Note**
    
    The actual execution time of a scheduled task may have a margin of error of ±1 minute.
    
    **Specify End Time**
    
    Specify an end time for the task. If the task is not completed by the specified end time, the system stops executing the remaining SQL tasks. This prevents tasks from running during peak hours and affecting business operations.
    
    **Note**
    
    The actual end time of the task may have a margin of error of ±1 minute.
    
    **Enable Primary/Standby Check**
    
    Enabling this check ensures real-time data synchronization between the primary and standby instances, high availability, and fast recovery from failures.
    
    **Grayscale Type**
    
    The policy for executing SQL statements in batches.
    
    -   **No Grayscale**: DMS automatically executes all SQL statements in the task.
        
    -   **Pause After First SQL Statement Succeeds**: After the first SQL statement is successfully executed, DMS automatically pauses the task. To continue, click Retry. The remaining SQL statements are then executed at once without further pauses.
        
    -   **Pause After Each SQL Statement Succeeds**: The task pauses automatically after each SQL statement is executed. You must manually click Retry to execute the next SQL statement.
        
    
7.  Click **Confirm Execution**.
    
    While the DMS task is running, you can pause it at any time. When a paused task is restarted, it restarts from the beginning.
    
    -   In the **Execution** section, you can view the task execution status, task settings, details, and scheduling logs.
        
    -   You can also view the progress of the lockless change in **Operations Management** > **Task Management**. For more information, see [View the progress of a lockless change](/help/en/dms/view-the-progress-of-a-lock-free-change-task#task-2172603).
        
    

After you enable lockless schema change for an instance, the lockless method is also prioritized for the following types of schema change tickets and tasks that you execute on the instance:

-   [Schema Design](/help/en/dms/design-schemas#task-1962696)
    
-   [Schema Synchronization](/help/en/dms/synchronize-schemas#multiTask883)
    
-   [Shadow Table Synchronization](/help/en/dms/create-shadow-tables-for-synchronization#task-2053950)
    
-   [Empty Database Initialization](/help/en/dms/initialize-empty-databases#multiTask893)
    
-   [Table Consistency Correction](/help/en/dms/repair-table-inconsistency#multiTask891)
    
-   [Data Change](/help/en/dms/change-regular-data#multiTask2309)
    
-   [Task Orchestration](/help/en/dms/overview-15#task-2100623)
