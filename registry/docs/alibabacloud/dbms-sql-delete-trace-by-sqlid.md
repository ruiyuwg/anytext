You can use the [dbms\_sql.delete\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-delete-trace) stored procedure to delete templated SQL statements that do not need to be tracked by the SQL Trace feature based on specific SQL statements. You can also use the `dbms_sql.delete_trace_by_sqlid` stored procedure to delete templated SQL statements that do not need to be tracked by the SQL Trace feature based on SQL IDs.

## **Syntax**

```
dbms_sql.delete_trace_by_sqlid('<schema>', '<sql_id>')
```

## **Parameters**

**Parameter**

**Description**

schema

The name of the schema.

sql\_id

The ID of the SQL statement.

## **Precautions**

-   When the stored procedure is executed on the primary node, the execution of the stored procedure is permanently stored on the primary node, and the related execution records in the [mysql.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571716a0ub) table are deleted and synchronized to read-only nodes.
    
-   When the stored procedure is executed on read-only nodes, the execution of the stored procedure is not permanently stored on the nodes. The stored procedure can be executed only on the nodes. When you use a cluster endpoint to access a database, templated SQL statements are automatically routed to the primary node.
    

## **Examples**

You can execute the following statements to delete SQL statements that do not need to be tracked by the SQL Trace feature based on SQL IDs:

```
call dbms_sql.delete_trace_by_sqlid('test', '82t4dswtqjg02');
call dbms_sql.delete_trace_by_sqlid('test', polar_sql_id('select * from t where c1 > 1 and c1 < 10'));
call dbms_sql.delete_trace_by_sqlid('test', 'select * from t where c1 > 1 and c1 < 10');
```

After the preceding statements are executed as expected, required SQL statements are deleted.
