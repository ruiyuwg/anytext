The `dbms_sql.reset_trace_stats` stored procedure is used to reset the statistics of the SQL statement records in the `information_schema.sql_sharing` system table.

## **Syntax**

```
dbms_sql.reset_trace_stats()
```

## **Examples**

Reset the statistics of the SQL statement records in the `information_schema.sql_sharing` system table. Example:

```
call dbms_sql.reset_trace_stats();
```

View the reset statistics of the SQL statement records in the `information_schema.sql_sharing` system table.

```
select * from information_schema.sql_sharing\G
```

Sample result:

```
*************************** 1. row ***************************
              TYPE: SQL
            SQL_ID: 82t4dswtqjg02
       SCHEMA_NAME: test
       DIGEST_TEXT: SELECT * FROM `t` WHERE `c1` > ? AND `c1` < ?
           PLAN_ID: NULL
              PLAN: NULL
        PLAN_EXTRA: NULL
        ERROR_CODE: NULL
            REF_BY: SQL_TRACE(DEMAND)
   FIRST_LOAD_TIME: 2022-11-07 19:05:28
     LAST_HIT_TIME: 2022-11-07 19:17:24
        EXECUTIONS: 0
     SUM_WAIT_TIME: 0
     MIN_WAIT_TIME: 0
     MAX_WAIT_TIME: 0
     SUM_EXEC_TIME: 0
     MIN_EXEC_TIME: 0
     MAX_EXEC_TIME: 0
     SUM_ROWS_SENT: 0
     MIN_ROWS_SENT: 0
     MAX_ROWS_SENT: 0
 SUM_ROWS_EXAMINED: 0
 MIN_ROWS_EXAMINED: 0
 MAX_ROWS_EXAMINED: 0
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 0
  MIN_LOGICAL_READ: 0
  MAX_LOGICAL_READ: 0
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: {TRACE_ROW_ID:10}
*************************** 2. row ***************************
              TYPE: PLAN
            SQL_ID: 82t4dswtqjg02
       SCHEMA_NAME: test
       DIGEST_TEXT: NULL
           PLAN_ID: 5a4cvp4gjqgfj
              PLAN: /*+ NO_INDEX(`t`@`select#1`) */
        PLAN_EXTRA: {`t`@`select#1`:ALL}
        ERROR_CODE: 0
            REF_BY: SQL_TRACE(DEMAND)
   FIRST_LOAD_TIME: 2022-11-07 19:17:24
     LAST_HIT_TIME: 2022-11-07 19:17:24
        EXECUTIONS: 0
     SUM_WAIT_TIME: 0
     MIN_WAIT_TIME: 0
     MAX_WAIT_TIME: 0
     SUM_EXEC_TIME: 0
     MIN_EXEC_TIME: 0
     MAX_EXEC_TIME: 0
     SUM_ROWS_SENT: 0
     MIN_ROWS_SENT: 0
     MAX_ROWS_SENT: 0
 SUM_ROWS_EXAMINED: 0
 MIN_ROWS_EXAMINED: 0
 MAX_ROWS_EXAMINED: 0
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 0
  MIN_LOGICAL_READ: 0
  MAX_LOGICAL_READ: 0
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: NULL
*************************** 3. row ***************************
              TYPE: PLAN
            SQL_ID: 82t4dswtqjg02
       SCHEMA_NAME: test
       DIGEST_TEXT: NULL
           PLAN_ID: 463zszw4mbv3w
              PLAN: /*+ INDEX(`t`@`select#1` `i_c1`) */
        PLAN_EXTRA: {`t`@`select#1`:range}
        ERROR_CODE: 0
            REF_BY: SQL_TRACE(DEMAND)
   FIRST_LOAD_TIME: 2022-11-07 19:17:21
     LAST_HIT_TIME: 2022-11-07 19:17:21
        EXECUTIONS: 0
     SUM_WAIT_TIME: 0
     MIN_WAIT_TIME: 0
     MAX_WAIT_TIME: 0
     SUM_EXEC_TIME: 0
     MIN_EXEC_TIME: 0
     MAX_EXEC_TIME: 0
     SUM_ROWS_SENT: 0
     MIN_ROWS_SENT: 0
     MAX_ROWS_SENT: 0
 SUM_ROWS_EXAMINED: 0
 MIN_ROWS_EXAMINED: 0
 MAX_ROWS_EXAMINED: 0
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 0
  MIN_LOGICAL_READ: 0
  MAX_LOGICAL_READ: 0
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
```
