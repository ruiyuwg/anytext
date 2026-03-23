If the `loose_sql_trace_type` parameter is set to DEMAND, you can use the `dbms_sql.add_trace` stored procedure to specify SQL statements that need to be tracked by the SQL Trace feature.

## **Syntax**

```
dbms_sql.add_trace('<schema>', '<query>')
```

**Note**

After the stored procedure is executed, the constants in SQL statements that are being executed are automatically templated and form a template. The SQL statements that match the template are tracked by the SQL Trace feature.

## **Parameters**

**Parameter**

**Description**

schema

The name of the schema.

query

The SQL statement that is being executed.

## **Precautions**

-   When the stored procedure is executed on the primary node, the execution of the stored procedure is permanently stored on the primary node, and the related execution records in the [mysql.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571716a0ub) table are deleted and synchronized to read-only nodes.
    
-   When the stored procedure is executed on read-only nodes, the execution of the stored procedure is not permanently stored on the nodes. The stored procedure can be executed only on the nodes. When you use a cluster endpoint to access a database, templated SQL statements are automatically routed to the primary node.
    

## **Example**

You can execute the following statement to specify SQL statements that need to be tracked by the SQL Trace feature:

```
call dbms_sql.add_trace('test', 'select * from t where c1 > 1 and c1 < 10');
```

You can execute the following statement to query the execution records of the tracked SQL statements in the `mysql.sql_sharing` system table:

```
select * from mysql.sql_sharing\G
```

The following output is returned:

```
*************************** 1. row ***************************
         Id: (id number)
     Sql_id: 82t4dswtqjg02
Schema_name: test
       Type: SQL_TRACE
Digest_text: SELECT * FROM `t` WHERE `c1` > ? AND `c1` < ?
    Plan_id: NULL
       Plan: NULL
    Version: 0
Create_time: 2022-11-07 19:05:27.980605
Update_time: 2022-11-07 19:05:27.980605
 Extra_info: NULL
```

The preceding output indicates that the constants in the tracked SQL statements are automatically templated and form a template.

You can execute the following SQL statements that match the template:

```
select * from  t where c1 > 1 and c1 < 10;
select * from  t where c1 > 1 and c1 < 100;
```

You can execute the following statement to query the trace information of the tracked SQL statements and statistics on the execution plan of the SQL statements in the `information_schema.sql_sharing` system table:

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
     LAST_HIT_TIME: 2022-11-07 19:17:24
        EXECUTIONS: 2
     SUM_WAIT_TIME: 363
     MIN_WAIT_TIME: 179
     MAX_WAIT_TIME: 184
     SUM_EXEC_TIME: 925
     MIN_EXEC_TIME: 438
     MAX_EXEC_TIME: 487
     SUM_ROWS_SENT: 106
     MIN_ROWS_SENT: 8
     MAX_ROWS_SENT: 98
 SUM_ROWS_EXAMINED: 108
 MIN_ROWS_EXAMINED: 8
 MAX_ROWS_EXAMINED: 100
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 122
  MIN_LOGICAL_READ: 19
  MAX_LOGICAL_READ: 103
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
        EXECUTIONS: 1
     SUM_WAIT_TIME: 184
     MIN_WAIT_TIME: 184
     MAX_WAIT_TIME: 184
     SUM_EXEC_TIME: 487
     MIN_EXEC_TIME: 487
     MAX_EXEC_TIME: 487
     SUM_ROWS_SENT: 98
     MIN_ROWS_SENT: 98
     MAX_ROWS_SENT: 98
 SUM_ROWS_EXAMINED: 100
 MIN_ROWS_EXAMINED: 100
 MAX_ROWS_EXAMINED: 100
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 103
  MIN_LOGICAL_READ: 103
  MAX_LOGICAL_READ: 103
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
        EXECUTIONS: 1
     SUM_WAIT_TIME: 179
     MIN_WAIT_TIME: 179
     MAX_WAIT_TIME: 179
     SUM_EXEC_TIME: 438
     MIN_EXEC_TIME: 438
     MAX_EXEC_TIME: 438
     SUM_ROWS_SENT: 8
     MIN_ROWS_SENT: 8
     MAX_ROWS_SENT: 8
 SUM_ROWS_EXAMINED: 8
 MIN_ROWS_EXAMINED: 8
 MAX_ROWS_EXAMINED: 8
 SUM_ROWS_AFFECTED: 0
 MIN_ROWS_AFFECTED: 0
 MAX_ROWS_AFFECTED: 0
  SUM_LOGICAL_READ: 19
  MIN_LOGICAL_READ: 19
  MAX_LOGICAL_READ: 19
 SUM_PHY_SYNC_READ: 0
 MIN_PHY_SYNC_READ: 0
 MAX_PHY_SYNC_READ: 0
SUM_PHY_ASYNC_READ: 0
MIN_PHY_ASYNC_READ: 0
MAX_PHY_ASYNC_READ: 0
             EXTRA: NULL
```

**Conclusions**

The preceding outputs indicate that the preceding SQL statements that match the template correspond to the following execution plans: `i_c1` index range scans and full table scans.
