You can use the `dbms_sql.reload_trace` stored procedure to load templated SQL statements in the `mysql.sql_sharing` table to the `information_schema.sql_sharing` table.

## **Syntax**

```
dbms_sql.reload_trace()
```

## **Example**

You can execute the following statement to load templated SQL statements in the `mysql.sql_sharing` table to the `information_schema.sql_sharing` table:

```
call dbms_sql.reload_trace();
```

You can execute the following statement to query templated SQL statements that are loaded to the `information_schema.sql_sharing` table:

```
select * from information_schema.sql_sharing\G
```

The following output is returned:

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
     LAST_HIT_TIME: NULL
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
```
