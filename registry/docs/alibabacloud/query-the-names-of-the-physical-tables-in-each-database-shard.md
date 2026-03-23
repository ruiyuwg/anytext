This topic describes the hint syntax and how to use hints.

Hints are supplementary to the SQL syntax and play a crucial role in relational databases. Hints allow you to choose execution methods for SQL statements by using the corresponding syntax. This allows you to optimize the execution of SQL statements. PolarDB-X provides a special hint syntax.

## Syntax

```
/*+TDDL: hint_command [hint_command ...]*/
    
/!+TDDL: hint_command [hint_command ...]*/
```

**Note** In the MySQL command-line client, you may need to execute an SQL statement that contains a PolarDB-X hint in the format of /\*+TDDL:hint\_command\*/. In this case, add the -c parameter to the logon command. Otherwise, the client deletes the custom PolarDB-X hint before the client sends the SQL statement to the server for execution. This is because the hint is in the format of a [MySQL comment](https://dev.mysql.com/doc/refman/5.6/en/comments.html). As a result, the custom PolarDB-X hint does not take effect. For more information, see [mysql client options](https://dev.mysql.com/doc/refman/5.6/en/mysql-command-options.html#option_mysql_comments).

## Examples

```
# Query the names of the physical tables in each database shard.
/*+TDDL:scan()*/SHOW TABLES;
   
# Route a query to Database Shard 0000 of a read-only ApsaraDB RDS instance.    
/*+TDDL:node(0) slave()*/SELECT * FROM t1;

# Set the workload type to analytical processing (AP).
/*+TDDL:WORKLOAD=AP*/SELECT * FROM t1;
```

PolarDB-X allows you to use a hint that contains multiple hint commands in an SQL statement.

```
SELECT /*+TDDL:node(0) slave()*/ ...;
```

PolarDB-X has the following limits on using hints that contain multiple hint commands:

```
# A single SQL statement cannot contain multiple hints.
SELECT /*+TDDL:node(0)*/ /*+TDDL:slave()*/ ...;
    
# A hint cannot contain duplicate hint commands. 
SELECT /*+TDDL:node(0) node(1)*/ ...;  
```
