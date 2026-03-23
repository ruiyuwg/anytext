This topic describes how to view the error logs and slow query logs of an ApsaraDB RDS for MySQL instance in the ApsaraDB RDS console. You can use the logs to troubleshoot issues on the RDS instance.

**Note**

Logs in this topic refer to error logs and slow query logs. For more information about binary logs, see [Configure automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb) and [Download backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb).

For more information about how to view the logs of an RDS instance that runs a different database engine, see the following topics:

-   [View the logs of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/view-the-error-logs-of-an-apsaradb-rds-for-sql-server-instance#concept-ujc-hz4-ydb)
    
-   [View the logs of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance#concept-ujc-hz4-ydb)
    
-   [View the logs of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/manage-logs#concept-ujc-hz4-ydb)
    

## **Usage notes**

-   If the RDS instance resides in the China (Zhangjiakou) region, only the error logs that were generated over the most recent nine days are retained, and the slow query logs and slow query log details are retained for seven days.
    
-   Error logs do not include deadlock logs. To query deadlock logs, you can perform the following operations: In the left-side navigation pane of the details page of your RDS instance, choose **Autonomy Services** > **Diagnostics**. On the page that appears, click the Lock Analysis tab to view [deadlock logs](/help/en/rds/apsaradb-rds-for-mysql/use-the-deadlock-analysis-feature-for-an-apsaradb-rds-for-mysql-instance).
    

## Procedure

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Logs**.
    
3.  On the **Logs** page, click the Error Logs, Slow Log Details, or Slow Log Summary tab, select a time range, and click **OK**. The following table describes the tabs that are displayed on the Logs page.
    
    **Tab**
    
    **Description**
    
    Binlog Subscription
    
    Allows you to [subscribe to binary logs](/help/en/dts/user-guide/track-data-changes-from-an-apsaradb-rds-for-mysql-instance-1#concept-388493) by using Data Transmission Service (DTS).
    
    Error Logs
    
    Provides statistics about the database running errors that occurred over the most recent 30 days.
    
    Slow Log Details
    
    Provides details about the SQL statements that each took more than 1 second to execute over the most recent 7 days and removes duplicate SQL statements. You can modify the long\_query\_time parameter to change the threshold. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).
    
    **Note**
    
    This tab is refreshed once every minute.
    
    Slow Log Summary
    
    Provides a summary of the SQL statements that each took more than 1 second to execute over the most recent 7 days and allows you to export the summary as a report file. You can modify the long\_query\_time parameter to change the threshold. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).
    
    **Note**
    
    Slow query logs are not collected in real time and may show a latency of 6 hours to 8 hours.
    
    **Note**
    
    If an RDS instance resides in the China (Zhangjiakou) region, ApsaraDB RDS retains only the error logs that are generated over the most recent nine days and the details and summary of the slow query logs that are generated over the most recent seven days for the RDS instance.
