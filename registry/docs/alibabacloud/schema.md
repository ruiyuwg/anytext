This topic describes the table schemas and related fields of the `mysql.sql_sharing` and `information_schema.sql_sharing` tables used by the SQL Trace feature.

## **mysql.sql\_sharing**

The `sql_sharing` table is an InnoDB system table in a PolarDB for MySQL database. The table is used to store specified SQL statements that need to be tracked. The following example shows the schema of the sql\_sharing table.

**Note**

The `sql_sharing` table is automatically created by the system upon startup.

```
CREATE TABLE `sql_sharing` (
  `Id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Sql_id` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `Schema_name` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `Type` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `Digest_text` longtext COLLATE utf8_bin,
  `Plan_id` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `Plan` text COLLATE utf8_bin,
  `Version` int(11) unsigned DEFAULT NULL,
  `Create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `Update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `Extra_info` longtext COLLATE utf8_bin,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `sqlid_schema_type` (`Sql_id`,`Schema_name`,`Type`)
) /*!50100 TABLESPACE `mysql` */ ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
```

The following table describes the fields that are included in the table schema.

**Field**

**Description**

Id

The auto-increment ID of a data row in the `mysql.sql_sharing` table.

Sql\_id

The ID of the templated SQL statement.

Schema\_name

The name of the schema on which SQL statements are executed.

Type

The features that use the record.

Digest\_text

The content of the templated SQL statement.

Plan\_id

The ID of the execution plan.

Plan

The name of the execution plan.

Version

The version number of the record in the system.

Create\_time

The time when the record is inserted.

Update\_time

The time when the record is updated.

Extra\_info

The additional information recorded by the system.

## **information\_schema.sql\_sharing**

The `sql_sharing` memory table in the `information_schema` database is used to record the execution plan of SQL statements that are tracked by the SQL Trace feature and collect statistics on the execution of the SQL statements. The table has the following schema.

**Note**

The `sql_sharing` table is automatically created by the system upon startup.

```
CREATE TEMPORARY TABLE `SQL_SHARING` (
  `TYPE` varchar(16) DEFAULT NULL,
  `SQL_ID` varchar(64) DEFAULT NULL,
  `SCHEMA_NAME` varchar(64) DEFAULT NULL,
  `DIGEST_TEXT` varchar(2048) DEFAULT NULL,
  `PLAN_ID` varchar(64) DEFAULT NULL,
  `PLAN` varchar(1024) DEFAULT NULL,
  `PLAN_EXTRA` varchar(1024) DEFAULT NULL,
  `ERROR_CODE` bigint(21) DEFAULT NULL,
  `REF_BY` varchar(512) DEFAULT NULL,
  `FIRST_LOAD_TIME` datetime DEFAULT NULL,
  `LAST_HIT_TIME` datetime DEFAULT NULL,
  `EXECUTIONS` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_WAIT_TIME` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_WAIT_TIME` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_WAIT_TIME` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_EXEC_TIME` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_EXEC_TIME` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_EXEC_TIME` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_ROWS_SENT` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_ROWS_SENT` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_ROWS_SENT` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_ROWS_EXAMINED` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_ROWS_EXAMINED` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_ROWS_EXAMINED` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_ROWS_AFFECTED` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_ROWS_AFFECTED` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_ROWS_AFFECTED` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_LOGICAL_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_LOGICAL_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_LOGICAL_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_PHY_SYNC_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_PHY_SYNC_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_PHY_SYNC_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `SUM_PHY_ASYNC_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MIN_PHY_ASYNC_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `MAX_PHY_ASYNC_READ` bigint(21) unsigned NOT NULL DEFAULT '0',
  `EXTRA` varchar(1024) DEFAULT NULL
) ENGINE=MEMORY DEFAULT CHARSET=utf8;
```

The following table describes the fields that are included in the table schema.

**Field**

**Description**

TYPE

The type of the record. Valid values:

-   **SQL**: the templated SQL statement.
    
-   **PLAN**: the execution plan generated when the templated SQL statement is being executed.
    

SQL\_ID

The ID of the templated SQL statement.

SCHEMA\_NAME

The name of the schema on which SQL statements are executed.

DIGEST\_TEXT

The content of the templated SQL statement.

PLAN\_ID

The ID of the execution plan.

PLAN

The name of the execution plan.

PLAN\_EXTRA

The additional information, such as which method is used to access the table and whether to use the prepared statement protocol to execute the templated SQL statement on the table. You can scan full table, select index range, and use the same index to access the table.

ERROR\_CODE

The error code.

REF\_BY

The feature that uses SQL statements or the execution plan. Valid values:

-   **SQL\_TRACE**: All statements are tracked.
    
-   **SQL\_TRACE(DEMAND)**: Specified SQL statements are tracked.
    

FIRST\_LOAD\_TIME

The time when SQL statements and execution plan are first recorded in memory.

LAST\_HIT\_TIME

The time when SQL statements and execution plan were last executed.

EXECUTIONS

The total executions of the templated SQL statement.

SUM\_WAIT\_TIME

The wait time required to execute SQL statements. (Unit: microseconds)

MIN\_WAIT\_TIME

The minimum wait time. (Unit: microseconds)

MAX\_WAIT\_TIME

The maximum wait time. (Unit: microseconds)

SUM\_EXEC\_TIME

The total amount of time required to execute SQL statements. (Unit: microseconds)

MIN\_EXEC\_TIME

The minimum execution time. (Unit: microseconds)

MAX\_EXEC\_TIME

The maximum execution time. (Unit: microseconds)

SUM\_ROWS\_SENT

The total number of returned rows.

MIN\_ROWS\_SENT

The minimum number of returned rows.

MAX\_ROWS\_SENT

The maximum number of returned rows.

SUM\_ROWS\_EXAMINED

The total number of scanned rows.

MIN\_ROWS\_EXAMINED

The minimum number of scanned rows.

MAX\_ROWS\_EXAMINED

The maximum number of scanned rows.

SUM\_ROWS\_AFFECTED

The total number of affected rows.

MIN\_ROWS\_AFFECTED

The minimum number of affected rows.

MAX\_ROWS\_AFFECTED

The maximum number of affected rows.

SUM\_LOGICAL\_READ

The total number of logical reads.

MIN\_LOGICAL\_READ

The minimum number of logical reads.

MAX\_LOGICAL\_READ

The maximum number of logical reads.

SUM\_PHY\_SYNC\_READ

The total number of physical synchronous reads.

MIN\_PHY\_SYNC\_READ

The minimum number of physical synchronous reads.

MAX\_PHY\_SYNC\_READ

The maximum number of physical synchronous reads.

SUM\_PHY\_ASYNC\_READ

The total number of physical asynchronous reads.

MIN\_PHY\_ASYNC\_READ

The minimum number of physical asynchronous reads.

MAX\_PHY\_ASYNC\_READ

The maximum number of physical asynchronous reads.

EXTRA

The additional information.

## Example

The SQL Trace feature is used to trace query records and display these records by using the `information_schema.sql_sharing` table. For example, when `loose_sql_trace_type` is set to `ALL`, you can execute the following SQL statement in the database to view the trace results.

Execute the following statements:

```
CREATE TABLE t AS WITH RECURSIVE t(c1, c2, c3) AS (SELECT 1, 1, 1 UNION ALL SELECT c1+1, c2 + 1, c3 + 1 FROM t WHERE c1 < 100) SELECT c1, c2, c3 FROM t;
CREATE index i_c1 ON t(c1);
SELECT  COUNT(*) FROM t;
```

Sample result:

```
+----------+
| count(*) |
+----------+
|      100 |
+----------+
```

You can execute the following statement to query the trace information of the tracked SQL statements and statistics on the execution plan of the SQL statements in the `information_schema.sql_sharing` system table:

```
SELECT * FROM information_schema.sql_sharing;
```

Sample result:

```
*************************** 1. row ***************************
              TYPE: SQL
            SQL_ID: 83qmtgr8d6rwn
       SCHEMA_NAME: test
       DIGEST_TEXT: SELECT * FROM `t` WHERE `c2` < ?
           PLAN_ID: NULL
              PLAN: NULL
        PLAN_EXTRA: NULL
        ERROR_CODE: NULL
            REF_BY: SQL_TRACE
   FIRST_LOAD_TIME: 2022-11-07 19:04:30
     LAST_HIT_TIME: 2022-11-07 19:04:30
        EXECUTIONS: 1
     SUM_WAIT_TIME: 184
     MIN_WAIT_TIME: 184
     MAX_WAIT_TIME: 184
     SUM_EXEC_TIME: 417
     MIN_EXEC_TIME: 417
     MAX_EXEC_TIME: 417
     SUM_ROWS_SENT: 2
     MIN_ROWS_SENT: 2
     MAX_ROWS_SENT: 2
 SUM_ROWS_EXAMINED: 100
 MIN_ROWS_EXAMINED: 100
 MAX_ROWS_EXAMINED: 100
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 101
  MIN_LOGICAL_READ: 101
  MAX_LOGICAL_READ: 101
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: NULL
*************************** 2. row ***************************
              TYPE: PLAN
            SQL_ID: 83qmtgr8d6rwn
       SCHEMA_NAME: test
       DIGEST_TEXT: NULL
           PLAN_ID: 5a4cvp4gjqgfj
              PLAN: /*+ NO_INDEX(`t`@`select#1`) */
        PLAN_EXTRA: {`t`@`select#1`:ALL}
        ERROR_CODE: 0
            REF_BY: SQL_TRACE
   FIRST_LOAD_TIME: 2022-11-07 19:04:30
     LAST_HIT_TIME: 2022-11-07 19:04:30
        EXECUTIONS: 1
     SUM_WAIT_TIME: 184
     MIN_WAIT_TIME: 184
     MAX_WAIT_TIME: 184
     SUM_EXEC_TIME: 417
     MIN_EXEC_TIME: 417
     MAX_EXEC_TIME: 417
     SUM_ROWS_SENT: 2
     MIN_ROWS_SENT: 2
     MAX_ROWS_SENT: 2
 SUM_ROWS_EXAMINED: 100
 MIN_ROWS_EXAMINED: 100
 MAX_ROWS_EXAMINED: 100
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 101
  MIN_LOGICAL_READ: 101
  MAX_LOGICAL_READ: 101
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: NULL
*************************** 3. row ***************************
              TYPE: SQL
            SQL_ID: cvdqw6ncsmwgh
       SCHEMA_NAME: test
       DIGEST_TEXT: CREATE TABLE `t` AS WITH RECURSIVE `t` ( `c1` , `c2` , `c3` ) AS ( SELECT ?, ... UNION ALL SELECT `c1` + ?  , `c2` + ?  , `c3` + ?  FROM `t` WHERE `c1` < ?  ) SELECT `c1` , `c2` , `c3` FROM `t`
           PLAN_ID: NULL
              PLAN: NULL
        PLAN_EXTRA: NULL
        ERROR_CODE: NULL
            REF_BY: SQL_TRACE
   FIRST_LOAD_TIME: 2022-11-07 19:04:15
     LAST_HIT_TIME: 2022-11-07 19:04:15
        EXECUTIONS: 1
     SUM_WAIT_TIME: 376
     MIN_WAIT_TIME: 376
     MAX_WAIT_TIME: 376
     SUM_EXEC_TIME: 10679
     MIN_EXEC_TIME: 10679
     MAX_EXEC_TIME: 10679
     SUM_ROWS_SENT: 0
     MIN_ROWS_SENT: 0
     MAX_ROWS_SENT: 0
 SUM_ROWS_EXAMINED: 200
 MIN_ROWS_EXAMINED: 200
 MAX_ROWS_EXAMINED: 200
 SUM_ROWS_AFFECTED: 100
 MIN_ROWS_AFFECTED: 100
 MAX_ROWS_AFFECTED: 100
  SUM_LOGICAL_READ: 1089
  MIN_LOGICAL_READ: 1089
  MAX_LOGICAL_READ: 1089
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: NULL
*************************** 4. row ***************************
              TYPE: SQL
            SQL_ID: btcj0kh12wx26
       SCHEMA_NAME: test
       DIGEST_TEXT: CREATE INDEX `i_c1` ON `t` ( `c1` )
           PLAN_ID: NULL
              PLAN: NULL
        PLAN_EXTRA: NULL
        ERROR_CODE: NULL
            REF_BY: SQL_TRACE
   FIRST_LOAD_TIME: 2022-11-07 19:04:21
     LAST_HIT_TIME: 2022-11-07 19:04:21
        EXECUTIONS: 1
     SUM_WAIT_TIME: 295
     MIN_WAIT_TIME: 295
     MAX_WAIT_TIME: 295
     SUM_EXEC_TIME: 8620
     MIN_EXEC_TIME: 8620
     MAX_EXEC_TIME: 8620
     SUM_ROWS_SENT: 0
     MIN_ROWS_SENT: 0
     MAX_ROWS_SENT: 0
 SUM_ROWS_EXAMINED: 0
 MIN_ROWS_EXAMINED: 0
 MAX_ROWS_EXAMINED: 0
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 761
  MIN_LOGICAL_READ: 761
  MAX_LOGICAL_READ: 761
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: NULL
```
