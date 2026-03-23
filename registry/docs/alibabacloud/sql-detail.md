The SQL detail feature in PolarDB for MySQL is used to perform detailed audit on the update and lock operations for databases and tables and automatically evict audit records.

## Background information

Updates (such as creating columns and indexes, adding columns and indexes, or deleting columns and indexes) and lock operations on databases and tables affect your business. The audit logs of relevant operations are critical to O&M personnel, who require usernames, client IP addresses, start time, and end time of such operations.

The audit log feature can be globally enabled and all SQL statements are audited. The audit overheads are very high. Sometimes even additional components are required to store records.

PolarDB for MySQL provides the SQL detail feature to perform detailed audit on the update and lock operations for databases and tables. This feature captures relevant records when a SQL statement starts to be executed and stores audit records in the system table. You can specify the retention period of audit records based on your business requirements. Records that exceed this retention period are automatically evicted. This feature incurs very low audit overheads. The storage capacity of a single audit record is 1 KB. For example, if the database table is updated 1,024 times in a single day and the retention period of audit records is 30 days, only 30 MB of storage space is consumed.

## Prerequisites

Your PolarDB for MySQL cluster meets one of the following requirements:

-   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.31 or later.
-   A cluster of PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.

For information about how to view the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Parameters

You can configure the following parameters in the console to enable the SQL detail feature and set the retention period of audit records. For more information about how to set parameters, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

Parameter

Level

Description

loose\_awr\_sqldetail\_enabled

Global

Specifies whether to enable the SQL detail feature. Default value: OFF. Valid values:

-   OFF
-   ON

loose\_awr\_sqldetail\_switch

Global

The operation type of the audit record. Valid values:

-   ddl: specifies whether to record DDL operations. Default value: ON. Valid values:
    -   ON
    -   OFF
-   lock\_db\_table: specifies whether to record LOCK DB and LOCK TABLE operations. Default value: ON. Valid values:
    -   ON
    -   OFF

loose\_awr\_sqldetail\_retention

Global

The retention period of audit records. Records that exceed this retention period are automatically evicted.

Valid values: 0 to 18446744073709551615. Default value: 2592000. Unit: seconds.

## Table format

The `sys.hist_sqldetail` system table is built in PolarDB for MySQL to store audit records. This table is automatically created when the system starts. You do not need to manually create the table. The table is in the following format:

```
CREATE TABLE `hist_sqldetail` (
  `Id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `State` varchar(16) COLLATE utf8mb4_bin DEFAULT NULL,
  `Thread_id` bigint(20) unsigned DEFAULT NULL,
  `Host` varchar(60) COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `User` varchar(32) COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `Client_ip` varchar(60) COLLATE utf8mb4_bin DEFAULT NULL,
  `Db` varchar(64) COLLATE utf8mb4_bin DEFAULT NULL,
  `Sql_text` mediumtext COLLATE utf8mb4_bin NOT NULL,
  `Server_command` varchar(32) COLLATE utf8mb4_bin DEFAULT NULL,
  `Sql_command` varchar(64) COLLATE utf8mb4_bin DEFAULT NULL,
  `Start_time` timestamp(6) NULL DEFAULT NULL,
  `Exec_time` bigint(20) DEFAULT NULL,
  `Wait_time` bigint(20) DEFAULT NULL,
  `Error_code` int(11) DEFAULT NULL,
  `Rows_sent` bigint(20) DEFAULT NULL,
  `Rows_examined` bigint(20) DEFAULT NULL,
  `Rows_affected` bigint(20) DEFAULT NULL,
  `Logical_read` bigint(20) DEFAULT NULL,
  `Phy_sync_read` bigint(20) DEFAULT NULL,
  `Phy_async_read` bigint(20) DEFAULT NULL,
  `Process_info` text COLLATE utf8mb4_bin,
  `Extra` text COLLATE utf8mb4_bin,
  `Create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `Update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`Id`),
  KEY `i_start_time` (`Start_time`),
  KEY `i_update_time` (`Update_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
```

The following table describes the parameters in the system table.

Parameter

Description

Id

The auto-increment ID.

State

The state in which the operation was recorded.

Thread\_id

The ID of the thread that executes the SQL statement.

Host

The user who executes the SQL statement.

User

The username that is used to execute the SQL statement.

Client\_ip

The IP address of the client that is used to execute the SQL statement.

Db

The name of the database on which the SQL statement is executed.

Sql\_text

The SQL statement that is executed.

Server\_command

The server command that is used to execute the SQL statement.

Sql\_command

The type of the SQL statement.

Start\_time

The time when the SQL statement started to be executed.

Exec\_time

The execution duration of the SQL statement. Unit: microseconds.

Wait\_time

The waiting time before the SQL statement is executed. Unit: microseconds.

Error\_code

The error code.

Rows\_sent

The number of returned rows.

Rows\_examined

The number of scanned rows.

Rows\_affected

The number of affected rows.

Logical\_read

The number of logical reads.

Phy\_sync\_read

The number of physical synchronous reads.

Phy\_async\_read

The number of physical asynchronous reads.

Process\_info

The processing information, which is an extended field.

Extra

Additional information, which is an extended field.

Create\_time

The time when the record was created.

Update\_time

The time when the record was updated.

## Examples

1.  Set the `loose_awr_sqldetail_enabled` parameter to ON in the console and execute the following statement on the database.
    
    ```
    create table t(c1 int);
    Query OK, 0 rows affected (0.02 sec)
    
    create table t(c1 int);
    ERROR 1050 (42S01): Table 't' already exists
    
    alter table t add column c2 int;
    Query OK, 0 rows affected (0.02 sec)
    Records: 0  Duplicates: 0  Warnings: 0
    
    lock tables t read;
    Query OK, 0 rows affected (0.00 sec)
    
    unlock tables;
    Query OK, 0 rows affected (0.00 sec)
    
    insert into t values(1, 2);
    Query OK, 1 row affected (0.00 sec)
    ```
    
2.  Execute the following statement to view the audit records in the `sys.hist_sqldetail` table:
    
    ```
    select * from sys.hist_sqldetail\G
    ```
    
    Sample result:
    
    ```
    *************************** 1. row ***************************
                Id: 1
             State: FINISH
         Thread_id: 18
              Host: localhost
              User: root
         Client_ip: 127.0.0.1
                Db: test
          Sql_text: create table t(c1 int)
    Server_command: Query
       Sql_command: create_table
        Start_time: 2023-01-13 16:18:21.840435
         Exec_time: 17390
         Wait_time: 318
        Error_code: 0
         Rows_sent: 0
     Rows_examined: 0
     Rows_affected: 0
      Logical_read: 420
     Phy_sync_read: 0
    Phy_async_read: 0
      Process_info: NULL
             Extra: NULL
       Create_time: 2023-01-13 16:18:22.391407
       Update_time: 2023-01-13 16:18:22.391407
    *************************** 2. row ***************************
                Id: 2
             State: FINISH
         Thread_id: 18
              Host: localhost
              User: root
         Client_ip: 127.0.0.1
                Db: test
          Sql_text: create table t(c1 int)
    Server_command: Query
       Sql_command: create_table
        Start_time: 2023-01-13 16:18:22.416321
         Exec_time: 822
         Wait_time: 229
        Error_code: 1050
         Rows_sent: 0
     Rows_examined: 0
     Rows_affected: 0
      Logical_read: 55
     Phy_sync_read: 0
    Phy_async_read: 0
      Process_info: NULL
             Extra: NULL
       Create_time: 2023-01-13 16:18:23.393071
       Update_time: 2023-01-13 16:18:23.393071
    *************************** 3. row ***************************
                Id: 3
             State: FINISH
         Thread_id: 18
              Host: localhost
              User: root
         Client_ip: 127.0.0.1
                Db: test
          Sql_text: alter table t add column c2 int
    Server_command: Query
       Sql_command: alter_table
        Start_time: 2023-01-13 16:18:34.123947
         Exec_time: 16420
         Wait_time: 245
        Error_code: 0
         Rows_sent: 0
     Rows_examined: 0
     Rows_affected: 0
      Logical_read: 778
     Phy_sync_read: 0
    Phy_async_read: 0
      Process_info: NULL
             Extra: NULL
       Create_time: 2023-01-13 16:18:34.394067
       Update_time: 2023-01-13 16:18:34.394067
    *************************** 4. row ***************************
                Id: 4
             State: FINISH
         Thread_id: 18
              Host: localhost
              User: root
         Client_ip: 127.0.0.1
                Db: test
          Sql_text: lock tables t read
    Server_command: Query
       Sql_command: lock_tables
        Start_time: 2023-01-13 16:19:49.891559
         Exec_time: 145
         Wait_time: 129
        Error_code: 0
         Rows_sent: 0
     Rows_examined: 0
     Rows_affected: 0
      Logical_read: 0
     Phy_sync_read: 0
    Phy_async_read: 0
      Process_info: NULL
             Extra: NULL
       Create_time: 2023-01-13 16:19:50.399585
       Update_time: 2023-01-13 16:19:50.399585
    *************************** 5. row ***************************
                Id: 5
             State: FINISH
         Thread_id: 18
              Host: localhost
              User: root
         Client_ip: 127.0.0.1
                Db: test
          Sql_text: unlock tables
    Server_command: Query
       Sql_command: unlock_tables
        Start_time: 2023-01-13 16:19:56.924648
         Exec_time: 98
         Wait_time: 0
        Error_code: 0
         Rows_sent: 0
     Rows_examined: 0
     Rows_affected: 0
      Logical_read: 0
     Phy_sync_read: 0
    Phy_async_read: 0
      Process_info: NULL
             Extra: NULL
       Create_time: 2023-01-13 16:19:57.400294
       Update_time: 2023-01-13 16:19:57.400294
    ```
    
    The preceding result shows that, the SQL detail feature only stores the audit records for DDL, LOCK DB, and LOCK TABLE operations, but not for DML operations. In addition, the SQL detail function records all captured information to the system table when the SQL statement starts to be executed, and automatically updates information such as the state after the SQL statement is executed.
