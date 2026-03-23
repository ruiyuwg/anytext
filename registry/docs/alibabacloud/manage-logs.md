This topic describes how to manage the error logs and slow query logs of an ApsaraDB RDS MariaDB instance through the ApsaraDB for RDS console.

**Note** For more information about how to manage binary logs, see [Back up an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/back-up-an-apsaradb-rds-for-mariadb-instance#concept-l1m-xgn-ydb) and [Download the log backup files of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/download-the-log-backup-files-of-an-apsaradb-rds-for-mariadb-instance#concept-yjb-pn4-ydb).

## Procedure

1.  Log on to the [ApsaraDB for RDS console](https://rds.console.alibabacloud.com/).
2.  In the upper-left corner of the console, select the region where the target RDS instance resides.
3.  Find the target RDS instance and click its ID.
4.  In the left-side navigation pane, click Logs.
5.  On the Logs page that appears, click the Error Log, Slow Query Log or Slow Query Log Summary tab, select a time range, and click Search.
    
    Tab
    
    Description
    
    Error Log
    
    Records database running errors that occurred within the last month.
    
    Slow Query Log
    
    Records SQL statements that each took more than 1 second to run within the last month. Duplicate SQL statements are deleted. You can change this 1-second threshold by reconfiguring the long\_query\_time parameter. For more information, see [Reconfigure parameters for an RDS MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/set-instance-parameters#concept-lfl-xmn-wdb).
    
    Slow Query Log Summary
    
    Provides statistics and analysis reports on SQL statements that each took more than 1 second to run within the last month. You can change this 1-second threshold by reconfiguring the long\_query\_time parameter. For more information, see [Reconfigure parameters for an RDS MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/set-instance-parameters#concept-lfl-xmn-wdb).
