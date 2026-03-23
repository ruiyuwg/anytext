In PolarDB-X, if the amount of time used to execute an SQL statement on a PolarDB-X node or an ApsaraDB RDS for MySQL instance exceeds the timeout period, the execution times out. The default timeout period is 900 seconds, and you can adjust the timeout period. For specific slow SQL statements, the execution duration can exceed 900 seconds. For these slow SQL statements, PolarDB-X provides custom timeout hints that can be used to adjust the timeout period. You can use a custom timeout hint to specify a timeout period for SQL statements.

## Additional considerations

-   PolarDB-X allows you to customize a hint by using one of the following formats: `/*+TDDL:hint_command*/` and `/!+TDDL:hint_command*/`.
    
-   In the official MySQL command-line client, if you execute SQL statements that contain PolarDB-X custom hints in the `/*+TDDL:hint_command*/` format, add the -c parameter in the command that is used to log on to the client. If you do not add the -c parameter, the client deletes [MySQL comments](https://dev.mysql.com/doc/refman/5.6/en/comments.html) in SQL statements before it sends the SQL statements to servers for execution. The PolarDB-X custom hints that use the `/*+TDDL:hint_command*/` format are defined as MySQL comments. As a result, the PolarDB-X custom hints are deleted and cannot take effect. For more information, see [mysql client options](https://dev.mysql.com/doc/refman/5.6/en/mysql-command-options.html#option_mysql_comments).
    

## Syntax

Use the following syntax to specify a PolarDB-X custom timeout hint for SQL statements:

```
/*+TDDL:SOCKET_TIMEOUT(time)*/
```

Specify the value of SOCKET\_TIMEOUT in milliseconds. You can use this custom hint to change the timeout period for SQL statements based on your business requirements.

## Examples

Set the timeout period for an SQL statement to 40 seconds.

```
/*+TDDL:SOCKET_TIMEOUT(40000)*/SELECT * FROM t_item;
```

**Important**

A longer timeout period causes database resources to be occupied for a longer period of time. If a large number of long-running SQL statements exist within a period of time, a large number of database resources may be consumed. As a result, PolarDB-X cannot provide database services as expected. To resolve this issue, we recommend that you optimize long-running SQL statements.
