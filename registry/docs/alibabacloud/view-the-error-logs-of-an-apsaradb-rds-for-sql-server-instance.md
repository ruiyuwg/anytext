This topic describes how to view the error logs of an ApsaraDB RDS for SQL Server instance in the ApsaraDB RDS console or by using SQL statements. You can use the error logs to identify issues. You can also clean up the error logs of an RDS instance to release the disk space in the ApsaraDB RDS console or by calling an API operation. In addition, if a primary/secondary switchover occurs, you can monitor the switchover status by viewing the primary/secondary switchover logs of an RDS instance in the ApsaraDB RDS console.

## View error logs

### **Method 1: View error logs in the ApsaraDB RDS console**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Logs**.
    
3.  On the **Error Logs** tab, select a time range to search for error logs.
    
    **Tab**
    
    **Description**
    
    **Error Logs**
    
    Provides logs on events that occurred over the last month. The events include custom events and specific system events.
    
    **Note**
    
    To view error logs that has been generated **for more than a month**, see [Method 2: View error logs by using SQL statements](#be9445ea31gvy).
    

### **Method 2: View error logs by using SQL statements**

-   If your RDS instance runs **SQL Server 2016 or earlier**, call the `sp_rds_read_error_logs` stored procedure to obtain error logs.
    
    ```
    -- Example 1: Return all error logs.
    EXEC sp_rds_read_error_logs;
    
    -- Example 2: View the error logs in log file N that contains the error keyword.
    EXEC sp_rds_read_error_logs <n>, 1 ,'error';
    ```
    
-   If your RDS instance runs **SQL Server 2017 or later**, call the `sp_readerrorlog` stored procedure to obtain error logs. For more information, see [Microsoft documentation](https://learn.microsoft.com/zh-cn/sql/relational-databases/system-stored-procedures/sp-readerrorlog-transact-sql?view=sql-server-ver16).
    
    ```
    EXEC sp_readerrorlog;
    ```
    

## **Clean up error logs**

You can clean up the error logs of an RDS instance to release the disk space in the ApsaraDB RDS console or by calling an API operation. For error logs that have been uploaded to an Object Storage Service (OSS) bucket, you can still view the error logs in the ApsaraDB RDS console, which are not affected by the cleanup operation. For more information, see [ModifyDBInstanceConfig](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifydbinstanceconfig-sqlserver).

**Note**

RDS instances that run SQL Server 2008 R2 do not support the cleanup operation.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Logs**.
    
3.  On the **Error Logs** tab, click **Clean Disk Space Occupied by Error Logs**.
    
4.  Click **OK**.
    
    You can view disk usage on the **Monitoring and Alerts** page. For more information, see [View storage usage](/help/en/rds/apsaradb-rds-for-sql-server/troubleshoot-insufficient-storage-space-issues-on-an-apsaradb-rds-for-sql-server-instance#section-ea3-whw-77j).
    

## View primary/secondary switchover logs

**Note**

You can view primary/secondary switchover logs only when the primary RDS instance runs SQL Server 2008 R2 with local disks.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Primary/Secondary Switching Logs** section of the page that appears, select a time range and view the primary/secondary switchover logs that are generated over the selected time range.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105838961/p726845.png)
    

## **References**

-   For more information about the scenarios of automatic primary/secondary switchovers and how to perform a primary/secondary switchover, see [Switch workloads over between primary and secondary ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-sql-server-instances#concept-ftz-42j-wdb).
    
-   For more information about transaction logs, see [Shrink the transaction logs of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/how-do-i-shrink-the-transaction-logs-of-an-apsaradb-rds-for-sql-server-instance) and [PurgeDBInstanceLog](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-purgedbinstancelog-sqlserver).
    
-   For more information about how to generate and download log backup files, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb) and [Download data backup files and log backup files](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance#concept-yjb-pn4-ydb).
