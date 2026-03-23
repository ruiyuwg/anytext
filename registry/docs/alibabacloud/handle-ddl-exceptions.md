This topic describes how to handle data definition language (DDL) exceptions that occur when you use PolarDB-X 1.0.

## Introduction to the DDL principle

A DDL command of PolarDB-X 1.0 performs the corresponding DDL operations on all the table shardings. Failures can be divided into two types:

-   The DDL statement fails to be executed in a database sharding. DDL execution errors in database shardings may result in inconsistent table sharding schemas.
    
    Execution errors in database shardings may be reported due to various reasons, such as conflicts and insufficient disk space. For example, a conflict occurs when the table that you want to create already exists or the column that you want to add already exists.
    
-   The system does not respond to the execution for a long time. When you perform a DDL operation on a large table, the system may not respond to the DDL statement for a long time due to the long execution time in a database sharding.
    
    If the system does not respond for a long time, it is generally caused by the long execution time in a database sharding. For example, the DDL execution time in MySQL depends mostly on whether the operation is In-Place that directly modifies the source table, or Copy Table that copies table data. In-Place needs only to modify metadata. However, Copy Table needs to reconstruct the entire table and also involves log and buffer operations. For more information about the relationship between various operations and the two factors, see [Online DDL Operations](https://dev.mysql.com/doc/refman/5.7/en/innodb-online-ddl-operations.html) in the MySQL official documentation.
    

To determine whether a DDL operation is an In-place or Copy Table operation, you can view the return value of `rows affected` after the operation is complete. The following examples are provided:

-   Change the default value of a column. This operation is fast and does not affect the table data at all.
    
    ```
    Query OK, 0 rows affected (0.07 sec)
    ```
    
-   Add an index. This operation requires some time, but `0 rows affected` indicates that the table data is not copied.
    
    ```
    Query OK, 0 rows affected (21.42 sec)
    ```
    
-   Change the data type of a column. This operation takes a long time and needs to reconstruct all the data rows in the table.
    
    ```
    Query OK, 1671168 rows affected (1 min 35.54 sec)
    ```
    

Therefore, before you perform a DDL operation on a large table, perform the following steps to determine whether the operation is a fast or slow operation:

1.  Copy the schema to generate a cloned table.
2.  Insert some data.
3.  Perform the DDL operation on the cloned table.
4.  Check whether the value of `rows affected` is 0 after the operation is complete. A non-zero value indicates that this operation needs to reconstruct the entire table. In this case, you may need to consider performing this operation during off-peak hours of your business.

PolarDB-X 1.0 DDL operations distribute all the Structured Query Language (SQL) statements to all the database shardings for parallel execution. An execution failure on a database sharding does not affect other database shardings. In addition, PolarDB-X 1.0 provides the CHECK TABLE command to check the schema consistency of table shardings. Therefore, failed DDL operations can be performed again, and the errors reported on database shardings where the executed operations are successful do not affect the execution on other database shardings. You need only to make sure that all the table shardings ultimately have the same schema.

## Procedures for handling DDL failures

1.  Run the CHECK TABLE command to check the schema. If the returned result contains only one row and the status is normal, the table status is consistent. In this case, go to Step 2. Otherwise, go to Step 3.
2.  Run the SHOW CREATE TABLE command to check the schema. If the displayed schema is as expected after the DDL statement is executed, the DDL statement is executed. Otherwise, go to Step 3.
3.  Run the SHOW PROCESSLIST command to check the status of all the SQL statements that are being executed. If ongoing DDL operations exist, wait until these operations are complete. Then, perform Step 1 and Step 2 to check whether the schema is as expected. Otherwise, go to Step 4.
4.  Perform DDL operations again on PolarDB-X 1.0. If a `Lock conflict` error is reported, go to Step 5. Otherwise, go to Step 3.
5.  Run the RELEASE DBLOCK command to release the DDL operation lock. Then, go to Step 4.

Perform the following detailed operations:

1.  Check the schema consistency.
    
    Run the CHECK TABLE command to check the schema, as shown in the following example:
    
    ```
    mysql> check table `xxxx`;
    ```
    
    **Note** If no result is returned after you run CHECK TABLE on Data Management Service (DMS), try again in the command line.
    
    If the returned result contains only one row and the displayed status is OK, this indicates that the schemas are consistent, as shown in the following example:
    
    ```
    +----------------------------+-------+----------+----------+
    | TABLE                      | OP    | MSG_TYPE | MSG_TEXT |
    +----------------------------+-------+----------+----------+
    | TDDL5_APP.xxxx             | check | status   | OK       |
    +----------------------------+-------+----------+----------+
    1 row in set (0.05 sec)       
    ```
    
2.  Check the schema.
    
    Run the SHOW CREATE TABLE command to check the schema, as shown in the following example:
    
    ```
    mysql> show create table `xxxx`;
    ```
    
    If schemas are consistent and have no errors, you can consider that DDL statements have been executed. The following code provides an example of the returned result.
    
    ```
    +---------+------------------------------------------------------------------------------------------------------------------+
    | Table   | Create Table                                                                                                     |
    +---------+------------------------------------------------------------------------------------------------------------------+
    |  xxxx   | CREATE TABLE `xxxx` (
    `id` int(11) NOT NULL DEFAULT '0',
    `NAME` varchar(1024) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 dbpartition by hash(`id`) tbpartition by hash(`id`) tbpartitions 3                      |
    +---------+------------------------------------------------------------------------------------------------------------------+
    1 row in set (0.05 sec)    
    ```
    
3.  Observe the SQL statements that are being executed.
    
    Some DDL statements are executed at a low rate and the system does not respond to the DDL statements for a long time. In this case, you can run the SHOW PROCESSLIST command to observe the status of all the SQL statements that are being executed, as shown in the following example:
    
    ```
    mysql> SHOW PROCESSLIST WHERE COMMAND ! = 'Sleep';
    ```
    
    The following code provides an example of the returned result.
    
    ```
    +---------------+-----------+--------------------+-------------+---------+-----------------------------------------------------------------------+------------------------------------------------------------------------------------------------------+-----------+---------------+-----------+
    | ID            | USER      | DB                 | COMMAND     | TIME    | STATE                                                                 | INFO                                                                                                 | ROWS_SENT | ROWS_EXAMINED | ROWS_READ |
    +---------------+-----------+--------------------+-------------+---------+-----------------------------------------------------------------------+------------------------------------------------------------------------------------------------------+-----------+---------------+-----------+
    | 0-0-352724126 | ifisibhk0 | test_123_wvvp_0000 | Query       |      15 | Sending data                                                          | /*DRDS /42.120.74.88/ac47e5a72801000/ */select `t_item`.`detail_url`,SUM(`t_item`.`price`) from `t_i |      NULL |          NULL |      NULL |
    | 0-0-352864311 | cowxhthg0 | NULL               | Binlog Dump |      13 | Master has sent all binlog to slave; waiting for binlog to be updated | NULL                                                                                                 |      NULL |          NULL |      NULL |
    | 0-0-402714566 | ifisibhk0 | test_123_wvvp_0005 | Query       |      14 | Sending data                                                          | /*DRDS /42.120.74.88/ac47e5a72801000/ */select `t_item`.`detail_url`,`t_item`.`price` from `t_i      |      NULL |          NULL |      NULL |
    | 0-0-402714795 | ifisibhk0 | test_123_wvvp_0005 | Alter       |     114 | Sending data                                                          | /*DRDS /42.120.74.88/ac47e5a72801000/ */ALTER TABLE `Persons` ADD `Birthday` date                    |      NULL |          NULL |      NULL |
    ......
    +---------------+-----------+--------------------+-------------+---------+-----------------------------------------------------------------------+------------------------------------------------------------------------------------------------------+-----------+---------------+-----------+
    12 rows in set (0.03 sec)       
    ```
    
    The TIME column represents the number of seconds for which the command has been run. If a command is run for a long time, such as the command for which the ID is `0-0-402714795` in the example, you can run the KILL '0-0-402714795' command to cancel the slow command.
    
    **Note** In PolarDB-X 1.0, one logical SQL statement corresponds to multiple database sharding commands. Therefore, you may need to kill multiple commands to stop one logical DDL statement. You can determine the logical SQL statement to which the command belongs by using the INFO column in the result set of SHOW PROCESSLIST.
    
4.  Handle the `Lock conflict` error.
    
    PolarDB-X 1.0 adds a database lock before it performs a DDL operation. After the operation is complete, Distributed Relational Database Service (DRDS) releases the lock. The KILL DDL operation may cause that the lock is not released. In this case, If the DDL operation is performed again, the following error is reported:
    
    ```
    Lock conflict , maybe last DDL is still running
    ```
    
    In this case, run the RELEASE DBLOCK command to release this lock. After the command is canceled and the lock is released, you can choose to execute the DDL statement again during off-peak hours of your business or when the service is stopped.
    

## FAQ

-   Q: Why cannot DMS or other clients display the modified schema?
    
    A: To be compatible with the feature that some clients obtain the schema from the system table, such as COLUMNS or TABLES, PolarDB-X 1.0 creates a shadow database in RDS of your database sharding 0. The name of the shadow database is consistent with that of the PolarDB-X 1.0 logical database. The shadow base stores all the information about the logical database, such as the schema.
    
    DMS obtains the PolarDB-X 1.0 schema from the system table of the shadow database. When you troubleshoot DDL exceptions, the schema of a database sharding may be modified as expected, but the schema in the shadow database is not modified due to some reasons. In this case, you must connect to the shadow database and perform the DDL operation on the table again in the database.
    
    **Note** CHECK TABLE does not check whether the schema in the shadow database is consistent with that in the PolarDB-X 1.0 logical database.
    
-   Q: How to handle the error code, such as TDDL-4500 ERR\_PARSER, that occured when executing DDL statement?
    
    A: For more information about the common error codes returned by DRDS and provides solutions for them, see [Error codes](/help/en/polardb/polardb-for-xscale/error-codes-1#task40494).
