If the `loose_sql_trace_type` parameter is set to DEMAND, you can use the `dbms_sql.delete_trace` stored procedure to delete SQL statements that do not need to be tracked by the SQL Trace feature.

## **Syntax**

```
dbms_sql.delete_trace('<schema>', '<query>')
```

**Note**

After the stored procedure is executed, the constants in SQL statements that are being executed are automatically templated and form a template, SQL statements that match the templated SQL statement are deleted from the `mysql.sql_sharing` table, and subsequent SQL statements that match the template are not tracked by the SQL Trace feature.

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

You can execute the following statement to delete SQL statements that do not need to be tracked by the SQL Trace feature:

```
call dbms_sql.delete_trace('test', 'select * from t where c1 > 1 and c1 < 10');
```

If no outputs are returned, the required SQL statements are deleted.

After this stored procedure is executed, templated SQL statements that match a specified statement in a table are deleted. The table that contains the specified statement is named`mysql.sql_sharing.` ``The statement that SQL statements to be deleted match is SELECT * FROM `t` WHERE `c1` > ? AND `c1` < ?``
