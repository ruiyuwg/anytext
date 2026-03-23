This topic describes the common error codes that may be returned in PolarDB-X and how to troubleshoot the errors.

## TDDL-1305 ERR\_UNKNOWN\_SAVEPOINT

-   Description: The error code returned because the specified savepoint does not exist.
    
-   Example: `ERR-CODE: [TDDL-1305][ERR_UNKNOWN_SAVEPOINT] SAVEPOINT ***** does not exist`
    
-   Note: When you execute the `ROLLBACK TO SAVEPOINT` or `RELEASE SAVEPOINT` statement in PolarDB-X, the error code TDDL-1305 is returned if the specified savepoint does not exist.
    
    We recommend that you check whether the savepoint that you specified in the SAVEPOINT statement is valid.
    

## TDDL-1094 ERR\_UNKNOWN\_THREAD\_ID

-   Description: The error code returned because the session ID specified in the KILL statement does not exist.
    
-   Example: `ERR-CODE: [TDDL-1094][ERR_UNKNOWN_THREAD_ID] Unknown thread id: *****`
    
-   Note: When you execute the `KILL` statement in PolarDB-X to terminate an SQL statement that is being executed, the error code TDDL-1094 is returned if the specified session ID does not exist or the SQL statement is terminated.
    
    We recommend that you execute the `SHOW PROCESSLIST` statement to query the session ID that corresponds to the SQL statement that is being executed, and execute the `KILL` statement only on the session whose ID exists in the returned result.
    

## TDDL-4006 ERR\_TABLE\_NOT\_EXIST

-   Description: The error code returned because the data table does not exist in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4006][ERR_TABLE_NOT_EXIST] Table '*****' doesn't exist.`
    
-   Note: The error code is returned if the data table does not exist in PolarDB-X, or PolarDB-X fails to load the metadata of the data table due to unidentified reasons.
    

## TDDL-4007 ERR\_CANNOT\_FETCH\_TABLE\_META

-   Description: The error code returned because PolarDB-X fails to load the metadata of the table.
    
-   Example: `ERR-CODE: [TDDL-4007][ERR_CANNOT_FETCH_TABLE_META] Table '*****' metadata cannot be fetched because Table '*****.*****' doesn't exist.`
    
-   Note: The error code is returned if PolarDB-X fails to query the metadata of the table. This error may occur due to one of the following reasons:
    
    -   The table is not created.
        
    -   The data of the table is inconsistent with the data in the metadatabase that is maintained.
        
    -   The table is deleted or renamed.
        
    
    If this error is returned, check whether the table of the specified name exists, or execute the `CHECK TABLE` statement to check whether the data of the table is consistent with the data in the metadatabase that is maintained by PolarDB-X. If the table is manually deleted or renamed, you can use the data restoration feature of PolarDB-X to restore data. If the error persists, contact technical support.
    

## TDDL-4018 ERR\_INVALID\_DDL\_PARAMS

-   Description: The error code returned because the DDL operation fails in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4018][ERR_INVALID_DDL_PARAMS] invalid '*****'.`
    
-   Note: The error code is returned if one or more parameters that you specify in the DDL statement are invalid. Check whether all parameters in the statement are valid. If the error persists after you verify that all parameters are valid, contact technical support.
    

## TDDL-4100 ERR\_ATOM\_NOT\_AVALILABLE

-   Description: The error code returned because a backend data node in PolarDB-X is unavailable.
    
-   Example: `ERR-CODE: [TDDL-4100][ERR_ATOM_NOT_AVALILABLE] Atom : ***** isNotAvailable`
    
-   Note: The error code TDDL-4100 is returned if PolarDB-X detects that a data node in the backend is not running as expected. In this scenario, access to the PolarDB-X instance is denied.
    
    If the error occurs, check whether all backend data nodes of the PolarDB-X instance are running as expected. When a data node in the backend recovers from an abnormal state, PolarDB-X automatically makes the data node available and allows applications to access the data node.
    

## TDDL-4101 ERR\_ATOM\_GET\_CONNECTION\_FAILED\_UNKNOWN\_REASON

-   Description: The error code returned because a compute node fails to connect to a data node in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4101][ERR_ATOM_GET_CONNECTION_FAILED_UNKNOWN_REASON] Get connection for db '*****' from pool failed. AppName:*****, Env:*****, UnitName:null. Message from pool: wait millis 5000, active 0, maxActive 5. You should look for the following logs which contains the real reason.`
    
-   Note: When PolarDB-X processes requests, PolarDB-X establishes asynchronous connections to data nodes. If a data node fails to connect to a compute node within a period of time and no error causes are returned for the asynchronous task, PolarDB-X returns the error code TDDL-4101 to the application.
    
    In most cases, the error occurs if an exception occurs on the backend data node. If the error persists after you troubleshoot the data nodes, contact technical support.
    

## TDDL-4102 ERR\_ATOM\_GET\_CONNECTION\_FAILED\_KNOWN\_REASON

-   Description: The error code returned because the connection from a compute node to a data node fails to establish in the PolarDB-X backend.
    
-   Example: `ERR-CODE: [TDDL-4102][ERR_ATOM_GET_CONNECTION_FAILED_KNOWN_REASON] Get connection for db '*****' failed because wait millis 5000, active 0, maxActive 5`
    
-   Note: The error code is returned if an error occurs when a compute node in PolarDB-X attempts to connect to a data node. The error causes are included in the error message. A data node in PolarDB-X may fail to connect due to one of the following causes:
    
    -   The number of connections on the backend data node has reached the threshold value.
        
    -   The connection from a compute node to the data node times out.
        
    -   The data node denies the connection.
        
    
    If the error persists after you troubleshoot the backend data nodes, contact technical support.
    

## TDDL-4103 ERR\_ATOM\_CONNECTION\_POOL\_FULL

-   Description: The error code returned because the connection pool for the backend data nodes of PolarDB-X is full.
    
-   Example: `ERR-CODE: [TDDL-4103][ERR_ATOM_CONNECTION_POOL_FULL] Pool of DB '*****' is full. Message from pool: wait millis 5000, active 5, maxActive 5. AppName:*****, Env:*****, UnitName:null.`
    
-   Note: The error code is returned if the backend connection pool of PolarDB-X is full. The error code TDDL-4103 may be returned due to one of the following causes:
    
    -   The execution of SQL statements sent from an application is slow, and the operation is performed over a connection for a long period of time. As a result, the number of available connections is insufficient.
        
    -   An application does not close the connections to a database. This causes connection leaks.
        
    -   A large number of cross-database queries are performed in parallel over a large number of connections. Cross-database queries include queries for aggregation and statistical analysis and queries in which the sharding key is not specified in the condition clause.
        
    
    We recommend that you resolve this issue by using the following methods.
    
    -   Use frameworks such as Spring JDBC and MyBatis to access databases.
        
    -   Optimize SQL queries based on the performance analysis reports and suggestions of database administrators.
        
    -   Use the read/write splitting feature of PolarDB-X to forward the cross-database queries to read-only nodes.
        
    -   Increase the specification of your PolarDB-X instance to improve the processing performance.
        
    -   Contact technical support to change the number of connections that can be supported by PolarDB-X.
        
    

## TDDL-4104 ERR\_ATOM\_CREATE\_CONNECTION\_TOO\_SLOW

-   Description: The error code returned because a timeout has occurred when the connection to a backend data node is established in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4104][ERR_ATOM_CREATE_CONNECTION_TOO_SLOW] Get connection for db '*****' from pool timeout. AppName:*****, Env:*****, UnitName:null. Message from pool: wait millis 5000, active 3, maxActive 5.`
    
-   Note: When PolarDB-X establishes connections to data nodes in an asynchronous manner, a connection timeout occurs if a large number of connections are established in a short period of time, or if the connection to a data node is established at a slow rate. In most cases, this error occurs if the backend data nodes process heavy workload. We recommend that you use the read/write splitting feature of PolarDB-X to balance the workload, or upgrade the specification of your instance.
    
    If the error persists after you troubleshoot the backend data nodes, contact technical support. If the error is caused because a large number of connections are established in a short period of time, we recommend that you contact technical support to change the minimum number of connections that are supported by PolarDB-X.
    

## TDDL-4105 ERR\_ATOM\_ACCESS\_DENIED

-   Description: The error code returned because the connection to a backend data node is rejected in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4105][ERR_ATOM_ACCESS_DENIED] DB '*****' Access denied for user '*****'@'*****'. AppName:*****, Env:*****, UnitName:null. Please contact DBA to check.`
    
-   Note: After you enter the username and the password to connect to a data node, this error is returned if the data node in PolarDB-X denies the connection. To resolve this issue, contact technical support.
    

## TDDL-4106 ERR\_ATOM\_DB\_DOWN

-   Description: The error code returned because a backend data node cannot be connected in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4106][ERR_ATOM_DB_DOWN] DB '*****' cannot be connected. AppName:*****, Env:*****, UnitName:null. It seems a very real possibility that this DB IS DOWN. Please contact DBA to check.`
    
-   Note: When PolarDB-X establishes a connection to a backend data node, this error is returned if the connection times out or the data node does not respond to the request. In most cases, this error occurs if a data node fails. To resolve this issue, contact technical support.
    

## TDDL-4108 ERR\_VARIABLE\_CAN\_NOT\_SET\_TO\_NULL\_FOR\_NOW

-   Description: The error code returned because the value of a variable is set to NULL.
    
-   Example: `ERR-CODE: [TDDL-4108][ERR_VARIABLE_CAN_NOT_SET_TO_NULL_FOR_NOW] System variable ***** can''t set to null for now;`
    
-   Note: You cannot execute the `SET` statement to set the value of a specific variable of a data node to NULL. If the value of a variable is set to NULL, PolarDB-X returns the error code TDDL-4108.
    

## TDDL-4200 ERR\_GROUP\_NOT\_AVALILABLE

-   Description: The error code returned because a data node in PolarDB-X is unavailable.
    
-   Example: `ERR-CODE: [TDDL-4200][ERR_GROUP_NOT_AVALILABLE] The TDDL Group ***** is running in fail-fast status, caused by this SQL:***** which threw a fatal exception as *****.`
    
-   Note: If you cannot access a data node in a database shard and no other data nodes are available in the shard, PolarDB-X changes the state of the database shard to fail-fast and returns the error code TDDL-4200.
    
    In most cases, this error occurs if a data node fails. We recommend that you troubleshoot the error based on the error information about the data node. After the failed data node recovers, PolarDB-X automatically recovers the data node from the fail-fast state.
    
    If the error TDDL-4200 persists after you troubleshoot the data nodes, contact technical support.
    

## TDDL-4201 ERR\_GROUP\_NO\_ATOM\_AVALILABLE

-   Description: The error code returned because no data nodes are available in the PolarDB-X database shard.
    
-   Example: `ERR-CODE: [TDDL-4201][ERR_GROUP_NO_ATOM_AVALILABLE] All weights of DBs in Group '*****' is 0. Weights is: *****.`
    
-   Note: If all data nodes in a database shard are unavailable or are in the fail-fast state, PolarDB-X returns the error code TDDL-4201.
    
    In most cases, this error occurs if all data nodes fail. Check the status of each backend data node to identify and resolve issues. If the error TDDL-4201 persists after you troubleshoot the data nodes, contact technical support.
    

## TDDL-4202 ERR\_SQL\_QUERY\_TIMEOUT

-   Description: The error code returned because a query in PolarDB-X times out.
    
-   Example: `ERR-CODE: [TDDL-4202][ERR_SQL_QUERY_TIMEOUT] Slow query leads to a timeout exception, please contact DBA to check slow sql. SocketTimout:*** ms, Atom:*****, Group:*****, AppName:*****, Env:*****, UnitName:null.`
    
-   Note: In PolarDB-X, this error is returned if the period of time that is required to execute an SQL statement on a backend data node exceeds the value of the socketTimeout parameter. By default, the timeout period specified by socketTimeout in PolarDB-X is 900 seconds.
    
    We recommend that you optimize SQL queries and create proper indexes on backend data nodes to improve the SQL query performance. If the optimized SQL query is still slow, you can use the following sample syntax to include a hint that sets the timeout period of the query in PolarDB-X: `/*TDDL:SOCKET_TIMEOUT=900000*/ SELECT * FROM dual;`. In the syntax, the value of the SOCKET\_TIMEOUT parameter is measured in milliseconds. For more information about how to use hints in PolarDB-X, see [How to specify a timeout period for an SQL statement](/help/en/polardb/polardb-for-xscale/how-to-specify-a-timeout-period-for-an-sql-statement#concept-2116694). If you want to permanently change the timeout period in PolarDB-X, contact technical support.
    

## TDDL-4203 ERR\_SQL\_QUERY\_MERGE\_TIMEOUT

-   Description: The error code returned because a timeout has occurred when you query distributed data in PolarDB-X.
    
-   Example: `ERR-CODE: [TDDL-4203][ERR_SQL_QUERY_MERGE_TIMEOUT] Slow sql query leads to a timeout exception during merging results, please optimize the slow sql. The the default timeout is *** ms. DB is *****`
    
-   Note: For queries on distributed data in PolarDB-X, the default timeout period is 900 seconds. The error code TDDL-4203 is returned if an SQL query is performed on multiple database shards and the time period that is required to perform the SQL query exceeds 900 seconds.
    
    We recommend that you optimize the SQL query by using the following methods.
    
    -   Include the shard key in the WHERE clause. This way, the SQL query is optimized to perform on a specific database shard.
        
    -   Check whether a proper index can be created on a backend data node. A proper index can improve the query performance of a database shard.
        
    -   Eliminate operations in distributed queries that require a long period of time, such as cross-database JOIN operations and data reordering operations. This can reduce the amount of resources consumed during data merges in PolarDB-X.
        
    
    If the optimized SQL query is still slow, you can use the following syntax to include a hint that sets the timeout period of the query in PolarDB-X: `/*TDDL:SOCKET_TIMEOUT=900000*/ SELECT * FROM dual;`. In the syntax, the value of the SOCKET\_TIMEOUT parameter is measured in milliseconds. For more information about how to use hints in PolarDB-X, see [How to specify a timeout period for an SQL statement](/help/en/polardb/polardb-for-xscale/how-to-specify-a-timeout-period-for-an-sql-statement#concept-2116694).
    

## TDDL-4400 ERR\_SEQUENCE

-   Description: The error code returned because a globally unique sequence fails to be processed.
    
-   Example: `ERR-CODE: [TDDL-4400][ERR_SEQUENCE] Sequence : All dataSource faild to get value!`
    
-   Note: This error is returned if a globally unique sequence fails to be processed. The error message returned is specified after `Sequence :`. In most cases, the error code TDDL-4400 is returned if a data node fails. As a result, you cannot access the table that corresponds to the sequence.
    
    We recommend that you check the status of each backend data node. If the error persists after you troubleshoot the backend data nodes, contact technical support.
    

## TDDL-4401 ERR\_MISS\_SEQUENCE

-   Description: The error code returned because the sequence does not exist.
    
-   Example: `ERR-CODE: [TDDL-4401][ERR_MISS_SEQUENCE] Sequence '*****' is not found`
    
-   Note: The sequence that you specify in the statement does not exist. We recommend that you execute the `SHOW SEQUENCES` statement to query the name of each sequence that you created in PolarDB-X and specify a valid sequence name.
    
    If the sequence that you specify does not exist, you can execute the following statement to create a sequence:
    
    ```
    CREATE SEQUENCE <sequence name> [ START WITH <numeric value> ] 
    [ INCREMENT BY <numeric value> ] [ MAXVALUE <numeric value> ] 
    [ CYCLE | NOCYCLE ]` 
    ```
    
    If the sequence that you specify exists and the error TDDL-4401 persists, contact technical support. For more information about how to use a sequence in PolarDB-X, see [Overview](/help/en/polardb/polardb-for-xscale/overview-83#multiTask4064).
    

## TDDL-4403 ERR\_MISS\_SEQUENCE\_TABLE\_ON\_DEFAULT\_DB

-   Description: The error code returned because the table that corresponds to the sequence does not exist.
    
-   Example: `ERR-CODE: [TDDL-4403][ERR_MISS_SEQUENCE_TABLE_ON_DEFAULT_DB] Sequence table is not in default db.`
    
-   Note: The table named sequence or sequence\_opt cannot be accessed from a database in the PolarDB-X backend. To troubleshoot the error, contact technical support.
    

## TDDL-4404 ERR\_SEQUENCE\_TABLE\_META

-   Description: The error code returned because the schema of the table that corresponds to the sequence is invalid.
    
-   Example: `ERR-CODE: [TDDL-4404][ERR_SEQUENCE_TABLE_META] the meta of sequence table is error, some columns missed`
    
-   Note: Specific fields are missing in the table that corresponds to the sequence. This includes the table named sequence or sequence\_opt. To troubleshoot the error, contact technical support.
    

## TDDL-4405 ERR\_INIT\_SEQUENCE\_FROM\_DB

-   Description: The error code returned because the sequence fails to be initialized.
    
-   Example: `ERR-CODE: [TDDL-4405][ERR_INIT_SEQUENCE_FROM_DB] init sequence manager error: *****`
    
-   Note: The error code TDDL-4405 is returned if the sequence that you want to use fails to be initialized. The error message returned is specified after init sequence manager error. We recommend that you check the status of each backend data node in PolarDB-X. If the error TDDL-4405 persists after you troubleshoot the backend data nodes, contact technical support.
    

## TDDL-4407 ERR\_OTHER\_WHEN\_BUILD\_SEQUENCE

-   Description: The error code returned because an error has occurred when the table that corresponds to the sequence is accessed.
    
-   Example: `ERR-CODE: [TDDL-4407][ERR_OTHER_WHEN_BUILD_SEQUENCE] error when build sequence: *****`
    
-   Note: An error occurs when the table that corresponds to the sequence is accessed. This includes the table named sequence or sequence\_opt. The error message returned is specified after error when build sequence.
    
    We recommend that you check the status of each backend data node in PolarDB-X. If the error TDDL-4407 persists after you troubleshoot the data nodes, contact technical support.
    

## TDDL-4408 ERR\_SEQUENCE\_NEXT\_VALUE

-   Description: The error code returned because a sequence value fails to be obtained.
    
-   Example: `ERR-CODE: [TDDL-4408][ERR_SEQUENCE_NEXT_VALUE] error when get sequence's next value, sequence is: *****, error: *****`
    
-   Note: An error occurs when you configure the AUTO\_INCREMENT attribute for the primary key of a table in PolarDB-X or use the `<Sequence name>.NEXTVAL` syntax to obtain a GUID. The error cause returned is specified after error:.
    
    The error code TDDL-4408 is returned if a backend data node fails. We recommend that you check the status of each backend data node and access load on each backend data node in PolarDB-X. If the error TDDL-4408 persists after you troubleshoot the backend data nodes, contact technical support.
    

## TDDL-4500 ERR\_PARSER

-   Description: The error code returned because the SQL statement fails to be parsed.
    
-   Example: `ERR-CODE: [TDDL-4500][ERR_PARSER] not support statement: '*****'`
    
-   Note: PolarDB-X supports the SQL syntax that complies with the SQL-92 standard and the extended syntax and functions supported by MySQL. Check whether the SQL statement that you executed complies with the standard SQL syntax and MySQL specifications supported by PolarDB-X.
    
    For more information about the standard SQL syntax, see [Standard SQL syntax](https://www.w3schools.com/sql/). For more information about SQL compatibility, see [Limits on SQL syntax](/help/en/polardb/polardb-for-xscale/limits-on-database-development#section-wfo-i12-fcg). If the SQL statement that you executed complies with the preceding syntax rules and the error TDDL-4500 persists, contact technical support.
    

## TDDL-4501 ERR\_OPTIMIZER

-   Description: The error code returned because the optimizer fails to convert an SQL statement.
    
-   Example: `ERR-CODE: [TDDL-4501][ERR_OPTIMIZER] optimize error by: Unknown column '*****' in 'order clause'`
    
-   Note: The optimizer of PolarDB-X converts an SQL statement to an internal syntax tree. If a logic error occurs in an SQL statement, the optimizer fails to convert the SQL statement. In this case, the error code TDDL-4501 is returned.
    
    We recommend that you check and modify the SQL statement based on the information that is specified after optimize error by. If the error TDDL-4501 persists after the SQL statement is modified, contact technical support.
    

## TDDL-4502 ERR\_OPTIMIZER\_MISS\_ORDER\_FUNCTION\_IN\_SELECT

-   Description: The error code returned because the ORDER BY clause contains a function that returns columns, but the SELECT clause does not contain the function.
    
-   Example: `` ERR-CODE: [TDDL-4502][ERR_OPTIMIZER_MISS_ORDER_FUNCTION_IN_SELECT] Syntax Error: orderBy/GroupBy Column ***** is not existed in select clause` ``
    
-   Note: In PolarDB-X, if the ORDER BY clause contains a function that returns columns, such as the RAND() function, the function must also be specified in the SELECT clause. If the SELECT clause does not contain the function, the error code TDDL-4502 is returned.
    
    We recommend that you include the function in the SELECT clause.
    

## TDDL-4504 ERR\_OPTIMIZER\_SELF\_CROSS\_JOIN

-   Description: The error code returned because the table fails to be joined to itself due to missing conditions.
    
-   Example: `ERR-CODE: [TDDL-4504][ERR_OPTIMIZER_SELF_CROSS_JOIN] self cross join case, add shard column filter on right table`
    
-   Note: When PolarDB-X performs a SELF JOIN query on a table, the error code TDDL-4504 is returned if the WHERE clause includes only the shard key of the left table or only the shard key of the right table.
    
    We recommend that you modify the SQL statement to include the shard key of the left table and the shard key of the right table.
    

## TDDL-4506 ERR\_MODIFY\_SHARD\_COLUMN

-   Description: The error code returned because the shard key of a table cannot be changed.
    
-   Example: `ERR-CODE: [TDDL-4506][ERR_MODIFY_SHARD_COLUMN] Column '*****' is a sharding key of table '*****', which is forbidden to be modified.`
    
-   Note: This error is returned when you attempt to change the shard key of a table. In PolarDB-X, you cannot change the shard key of a table on which a global secondary index (GSI) is created.
    
    We recommend that you replace the UPDATE statement with an INSERT statement and a DELETE statement that have the same effect as the UPDATE statement.
    

## TDDL-4508 ERR\_OPTIMIZER\_NOT\_ALLOWED\_SORT\_MERGE\_JOIN

-   Description: The error code returned because a sort-merge join cannot be performed.
    
-   Example: `ERR-CODE: [TDDL-4508][ERR_OPTIMIZER_NOT_ALLOWED_SORT_MERGE_JOIN] sort merge join is not allowed when missing equivalent filter`
    
-   Note: If the tables on which you want to perform a join operation are stored in different data nodes, PolarDB-X selects the sort-merge join algorithm. This algorithm can be used only if you specify an equality join condition for the left and right tables in the SQL statement. If the join conditions that you specify for the left and right tables do not contain an equality condition, PolarDB-X returns the error code TDDL-4508.
    
    We recommend that you modify the SQL statement to include an equality condition in the JOIN or WHERE clause.
    

## TDDL-4509 ERR\_OPTIMIZER\_ERROR\_HINT

-   Example: `ERR-CODE: [TDDL-4509][ERR_OPTIMIZER_ERROR_HINT] Hint Syntax Error: unexpected operation: *****.`
    
-   Note: This error is returned if the syntax of the hint that you include in the SQL statement cannot be parsed by PolarDB-X. For more information about the hint syntax, see [How to use hints](/help/en/polardb/polardb-for-xscale/how-to-use-hints#concept-2116687).
    

## TDDL-4510 ERR\_CONTAINS\_NO\_SHARDING\_KEY

-   Description: The error code returned because the shard key is missing in an SQL statement.
    
-   Example: `ERR-CODE: [TDDL-4510][ERR_CONTAINS_NO_SHARDING_KEY] Your SQL contains NO SHARDING KEY '*****' for table '*****', which is not allowed in DEFAULT.`
    
-   Note: This error is returned if full table scan is disabled and no shard key is specified in the SQL statement. By default, PolarDB-X enables full table scan when you create a table. If the full table scan feature is manually disabled, make sure that the shard key of the table is specified in each SQL statement that scans the data in the table.
    

## TDDL-4511 ERR\_INSERT\_CONTAINS\_NO\_SHARDING\_KEY

-   Description: The error code returned because a shard key is missing in the INSERT statement.
    
-   Example: `ERR-CODE: [TDDL-4511][ERR_INSERT_CONTAINS_NO_SHARDING_KEY] Your INSERT SQL contains NO SHARDING KEY '*****' for table '*****'.`
    
-   Note: In PolarDB-X, if you want to execute the INSERT statement to insert data in a sharded table, you must specify the value of the shard key of the table in the INSERT statement. This is optional for tables whose shard key is the auto-increment primary key. If the INSERT statement does not contain the shard key value, PolarDB-X returns the error code TDDL-4511.
    
    If this error occurs, we recommend that you include the value of the shard key in the INSERT statement.
    

## TDDL-4515 ERR\_CONNECTION\_CHARSET\_NOT\_MATCH

-   Description: The error code returned because the character set of the string that you specify is different from the character set of the database.
    
-   Example: `ERR-CODE: [TDDL-4515][ERR_CONNECTION_CHARSET_NOT_MATCH] Caused by MySQL's character_set_connection doesn't match your input charset. Partition DDL can only take ASCII or chinese column name. If you want use chinese table or column name, Make sure MySQL connection's charset support chinese character. Use "set names xxx" to set correct charset.`
    
-   Note: PolarDB-X supports Chinese characters for table names and column names. The character\_set\_connection parameter specifies the connection character set that is used by a PolarDB-X database. When you execute an SQL statement that contains Chinese characters, the error code TDDL-4515 is returned if the character\_set\_connection parameter is set to a value that does not support Chinese characters, such as latin1.
    
    You can execute the `SHOW VARIABLES LIKE 'character_set_connection'` statement to query the character set that is used for the connection between the PolarDB-X database and a MySQL client. You can execute the `SET NAMES` statement to change the character set of a PolarDB-X database. If you use Java Database Connectivity (JDBC) to connect to a PolarDB-X database, configure the characterEncoding parameter.
    

## TDDL-4517 ERR\_MODIFY\_SYSTEM\_TABLE

-   Description: The error code returned because system tables cannot be modified.
    
-   Example: `ERR-CODE: [TDDL-4617][ERR_MODIFY_SYSTEM_TABLE] Table '*****' is PolarDB-XSYSTEM TABLE, which is forbidden to be modified.`
    
-   Note: If you execute an SQL statement to modify the data of a PolarDB-X system table, the error code TDDL-4517 is returned. You cannot modify system tables such as sequence, sequence\_opt, and txc\_undo\_log. Make sure that the names of the system tables are not used as the table names for your database.
    

## TDDL-4520 ERR\_DML\_WITH\_SUBQUERY

-   Description: The error code returned because subqueries cannot be used in a DML statement.
    
-   Example: `ERR-CODE: [TDDL-4520][ERR_DML_WITH_SUBQUERY] DO NOT support UPDATE/DELETE with subQuery`
    
-   Note: PolarDB-X does not support subqueries in DML statements. If this error occurs, we recommend that you modify your SQL statements to ensure that no subqueries are included in the SQL statements.
    

## TDDL-4521 ERR\_INSERT\_SHARD

-   Description: The error code returned because a record is routed to multiple shards when the record is inserted.
    
-   Example: `ERR-CODE: [TDDL-4521][ERR_INSERT_SHARD] Cannot decide which group to insert`
    
-   Note: When you insert data, a record is routed to multiple shards. As a result, PolarDB-X cannot determine the shard to insert the record into. If this error occurs, contact technical support.
    

## TDDL-4523 ERR\_TODNF\_LIMIT\_EXCEED

-   Description: The error code returned because the maximum number of query conditions that can be specified in a WHERE clause has been reached.
    
-   Example: `ERR-CODE: [TDDL-4523][ERR_TODNF_LIMIT_EXCEED] toDnf has exceed the limit size`
    
-   Note: PolarDB-X performs expression conversions between conjunctive normal form (CNF) and disjunctive normal form (DNF) on the query conditions that are specified in the WHERE clause of an SQL statement. This optimizes the performance of condition deduction and calculation. To ensure stable optimization, PolarDB-X limits the number of query conditions to 2,000. If you want to specify more query conditions, set the DNF\_REX\_NODE\_LIMIT parameter to a larger value.
    

## TDDL-4524 ERR\_TOCNF\_LIMIT\_EXCEED

-   Description: The error code returned because the maximum number of query conditions that can be specified in a WHERE clause has been reached.
    
-   Example: `ERR-CODE: [TDDL-4524][ERR_TODNF_LIMIT_EXCEED] toCnf has exceed the limit size`
    
-   Note: PolarDB-X performs expression conversions between conjunctive normal form (CNF) and disjunctive normal form (DNF) on the query conditions that are specified in the WHERE clause of an SQL statement. This optimizes the performance of condition deduction and calculation. To ensure stable optimization, PolarDB-X limits the number of query conditions to 2,000. If you want to specify more query conditions, set the CNF\_REX\_NODE\_LIMIT parameter to a larger value.
    

## TDDL-4526 ERR\_FUNCTION\_NOT\_FOUND

-   Description: The error code returned because the function is not supported.
    
-   Example: `ERR-CODE: [TDDL-4526][ERR_FUNCTION_NOT_FOUND] No match found for function signature`
    
-   Note: This error is returned if the syntax of the function that you include in an SQL query is incorrect, or the function is invalid. We recommend that you check whether the number and type of parameters that you use to call the function in the SQL query are correct.
    

## TDDL-4527 ERR\_MODIFY\_SHARD\_COLUMN\_ON\_TABLE\_WITHOUT\_PK

-   Description: The error code returned because the database shard key cannot be changed on a table that does not have a primary key.
    
-   Example: `ERR-CODE: [TDDL-4527][ERR_MODIFY_SHARD_COLUMN_ON_TABLE_WITHOUT_PK]`
    
-   Note: In PolarDB-X, you cannot change a database shard key on a table that does not have a primary key.
    

## TDDL-4595 ERR\_UNKNOWN\_TZ

-   Description: The error code returned because the time zone settings are invalid.
    
-   Example: `ERR-CODE: [TDDL-4595][ERR_UNKNOWN_TZ]`
    
-   Note: We recommend that you check whether the syntax and format that you use to configure the time zone are valid.
    

## TDDL-4600 ERR\_FUNCTION

-   Description: The error code returned because the function fails to be called.
    
-   Example: `ERR-CODE: [TDDL-4600][ERR_FUNCTION] function compute error by Incorrect parameter count in the call to native function '*****'`
    
-   Note: This error is returned if the syntax or parameters of the function that you include in an SQL query are incorrect. We recommend that you check whether the number and type of parameters that you use to call the function in the SQL query are correct.
    

## TDDL-4601 ERR\_EXECUTOR

-   Example:
    
    ```
    ERR-CODE: [TDDL-4601][ERR_EXECUTOR] only one column is supported in 
    distinct aggregate
    ```
    
-   Note: The error code is returned because unexpected errors occur during the execution of SQL statements, which is usually related to backend MySQL exceptions.
    

## TDDL-4602 ERR\_CONVERTOR

-   Description: The error code returned because the data type fails to be converted.
    
-   Example: `ERR-CODE: [TDDL-4602][ERR_CONVERTOR] convertor error by Unsupported convert: [*****]`
    
-   Note: This error is returned if the data type fails to be converted when SQL queries are performed in PolarDB-X. Check whether the data used in the SQL queries requires implicit type conversion. We recommend that you use data of the same type for comparison and calculation.
    

## TDDL-4603 ERR\_ACCROSS\_DB\_TRANSACTION

-   Description: The error code returned because a cross-database transaction failed.
    
-   Example: `ERR-CODE: [TDDL-4603][ERR_ACCROSS_DB_TRANSACTION] Transaction accross db is not supported in current transaction policy, transaction node is: {0}, but this sql execute on: *****.`
    
-   Note: By default, PolarDB-X supports cross-database transactions. Check whether other transaction policies that may block cross-database transactions are specified.
    

## TDDL-4604 ERR\_CONCURRENT\_TRANSACTION

-   Description: The error code returned because nested transactions are not supported.
    
-   Example: `ERR-CODE: [TDDL-4604][ERR_CONCURRENT_TRANSACTION] Concurrent query is not supported on transaction group, transaction group is: {0}.`
    
-   Note: PolarDB-X does not support nested transactions. If you attempt to start more than two transactions at the same time over the same database connection, the error code TDDL-4604 is returned.
    
    We recommend that you do not use nested transactions when you develop applications. You can abstract transactions into a transaction framework at the application layer. This way, no nested transactions are generated.
    

## TDDL-4606 ERR\_QUERY\_CANCLED

-   Description: The error code returned because the execution of the SQL statement is canceled.
    
-   Example: `ERR-CODE: [TDDL-4606][ERR_QUERY_CANCLED] Getting connection is not allowed when query has been cancled, group is *****`
    
-   Note: If you execute the `KILL` statement to cancel the execution of an SQL statement, PolarDB-X returns the error code TDDL-4606 for the canceled SQL statement. If this error frequently occurs, check whether the KILL statement is executed on a client or a program.
    

## TDDL-4610 ERR\_CONNECTION\_CLOSED

-   Description: The error code returned because the connection has been closed.
    
-   Example: `ERR-CODE: [TDDL-4610][ERR_CONNECTION_CLOSED] connection has been closed`
    
-   Note: In scenarios in which an SQL statement in a transaction fails to be executed, or the `KILL` statement is executed to cancel the execution of the SQL statement in the transaction, the error code TDDL-4610 is returned if you execute other SQL statements over the same database connection.
    
    We recommend that you close the connection and establish a new database connection.
    

## TDDL-4612 ERR\_CHECK\_SQL\_PRIV

-   Description: The error code returned because the account does not have the required permissions to execute the SQL statement.
    
-   Example: `ERR-CODE: [TDDL-4612][ERR_CHECK_SQL_PRIV] check user ***** on db ***** sql privileges failed.`
    
-   Note: The new version of PolarDB-X provides a system that allows you to grant permissions to an account. This system is similar to the account and permission system in MySQL. Only the accounts that are granted the required permissions can execute the SQL statement. If the account that you use does not have the required permissions, PolarDB-X returns the error code TDDL-4612.
    
    We recommend that you check the permissions that the account have on the PolarDB-X instance. If the account does not have the required permissions, grant the permissions in the PolarDB-X console. For more information about PolarDB-X accounts and permission settings, see [Manage database accounts](/help/en/polardb/polardb-for-xscale/manage-database-accounts#task-2544542).
    

## TDDL-4614 ERR\_EXECUTE\_ON\_MYSQL

-   Description: The error code returned because an error has occurred when the SQL statement is executed on a data node.
    
-   Examples:
    
    ```
    ERR-CODE: [TDDL-4614][ERR_EXECUTE_ON_MYSQL] Error occurs when execute on  GROUP '*****': Duplicate entry '*****' for key 'PRIMARY'
    The error is returned if the SQL statement fails to execute on a data node in the PolarDB-X backend. The information about the error is included in the end of the error message. The following error messages may be returned:
     
    Duplicate entry '*****' for key 'PRIMARY'
    This error message is returned because a conflict has occurred on the primary key when you insert data. You must correct the data and execute the SQL statement again.
       
    The table '*****' is full
    This error message is returned because the temporary table used by the data node is full. You must modify the temporary tablespace or modify the SQL statement.
         
    Deadlock found when trying to get lock;
    This error message is returned because a deadlock has occurred on the data node. In most cases, a deadlock can occur if a large number of transaction conflicts occur during write operations.
    ```
    
-   Note: We recommend that you refer to the error message returned to troubleshoot the issue. For more information about the error messages related to SQL statements, see [MySQL 5.6 documentation](https://dev.mysql.com/doc/refman/5.6/en/error-handling.html). If the error TDDL-4614 persists after you troubleshoot your application or the data node, contact technical support.
    

## TDDL-4616 ERR\_UNKNOWN\_DATABASE

-   Description: The error code returned because the database name that you specify is invalid.
    
-   Example: `ERR-CODE: [TDDL-4616][ERR_UNKNOWN_DATABASE] Unknown database '*****'`
    
-   Note: PolarDB-X allows you to specify a database name in a DDL statement. If the database name that you specify does not correspond to a database name available in PolarDB-X, the error code TDDL-4616 is returned.
    
    We recommend that you change the database name in the DDL statement to ensure that the database name that you specify corresponds to a database in PolarDB-X.
    

## TDDL-4620 ERR\_FORBID\_EXECUTE\_DML\_ALL

Note: This error is returned if the DELETE or UPDATE statement that you execute in PolarDB-X does not include a WHERE clause in which the conditions are specified.

## TDDL-4633 ERR\_DB\_STATUS\_READ\_ONLY

-   Example: `ERR-CODE: [TDDL-4633][ERR_DB_STATUS_READ_ONLY] Database is read-only, only read sql are supported`
    
-   Note: This error is returned if the account that you use has only the read-only permissions on the database. Check whether the account that you use has only limited permissions.
    

## TDDL-4636 ERR\_DDL\_JOB\_ERROR

The error code returned because the DDL statement failed to execute.

Example:

```
ERR-CODE: [TDDL-4636][ERR_DDL_JOB_ERROR] xxxx
```

The error code is returned if the DDL statement failed to execute. For more information, see [Handle DDL exceptions](/help/en/polardb/polardb-for-xscale/handle-ddl-exceptions#concept-1825067).

## TDDL-4642 ERR\_UNKNOWN\_TABLE

The error code returned because the table does not exist in the database.

Example:

```
ERR-CODE: [TDDL-4642][ERR_UNKNOWN_TABLE] Unknown table XX.XX
```

Check whether the table exists in the current database.

## TDDL-4707 ERR\_OUT\_OF\_MEMORY

-   Description: The error code returned because the memory used by the temporary table has exceeded the limit.
    
-   Example: `ERR-CODE: [TDDL-4707][ERR_OUT_OF_MEMORY]`
    
-   Note: To ensure the stability of a database, PolarDB-X limits the memory that can be used by the temporary table for each query. If an excessive amount of data is retrieved by a query, the error code TDDL-4707 is returned. This way, you can enable the spill to disk feature or increase the memory that can be used by the temporary table for the query.
    

## TDDL-4709 ERR\_IVENTORY\_HINT\_NOT\_SUPPORT\_CROSS\_SHARD

-   Example: `ERR-CODE: [TDDL-4709][ERR_IVENTORY_HINT_NOT_SUPPORT_CROSS_SHARD]`
    
-   Note: In a flash sales scenario, the hot row optimization feature requires transactions to be executed on a single shard. If transactions are executed on multiple shards, the error code TDDL-4709 is returned. We recommend that you modify the business logic to ensure that transactions are executed on a single shard when the hot row optimization feature is enabled.
    

## TDDL-4994 ERR\_FLOW\_CONTROL

-   Description: The error code returned because the number of SQL requests has reached the limit.
    
-   Example: `ERR-CODE: [TDDL-4994][ERR_FLOW_CONTROL] [*****] flow control by *****`
    
-   Note: This error is returned if the number of SQL requests processed by PolarDB-X has reached the upper limit and the current request is rejected. We recommend that you check whether the peak value of the number of SQL requests is as expected. If the number of SQL requests decreases but the error TDDL-4994 persists, contact technical support.
    

## TDDL-4998 ERR\_NOT\_SUPPORT

-   Description: The error code returned because the feature is not supported.
    
-   Example: `ERR-CODE: [TDDL-4998][ERR_NOT_SUPPORT] ***** not support yet!`
    
-   Note: This error is returned if the SQL syntax or the feature that you use is not supported by PolarDB-X. If the SQL syntax or the feature is important, contact technical support.
    

## TDDL-5001 ERR\_TRANS

-   Description: The error code returned because a common transaction error has occurred.
    
-   Example: `ERR-CODE: [TDDL-5001][ERR_TRANS] Too many lines updated in statement.`
    
-   Note: Troubleshoot the error based on the error message.
    
    -   `Too many lines updated in statement`
        
        This error message is returned because the number of rows updated by the UPDATE statement in a transaction exceeds the upper limit of 1,000 rows. We recommend that you check the conditions that are specified in the WHERE clause of the UPDATE statement. If you need to update a large amount of data in a transaction, you can use the `/*TDDL:UNDO_LOG_LIMIT={number}*/` hint in PolarDB-X to change the upper limit.
        
    -   `Deferred execution is only supported in Flexible or XA Transaction`
        
        This error message is returned because the deferred execution feature is supported only for flexible transactions and extended architecture (XA) transactions. Before you commit a transaction that has the `/*TDDL:DEFER*/` hint in PolarDB-X, execute the `SET drds_transaction_policy = ***` statement to change the transaction policy of your PolarDB-X database.
        
    -   If other error messages are returned, contact technical support.
        

## TDDL-5002 ERR\_TRANS\_UNSUPPORTED

-   Description: The error code returned because the syntax or feature used in the transaction is not supported.
    
-   Example: `ERR-CODE: [TDDL-5002][ERR_TRANS_UNSUPPORTED] Table without primary keys is not supported.`
    
-   Note: The feature that you use in the transaction is not supported by PolarDB-X. If the feature is important, contact technical support.
    

## TDDL-5003 ERR\_TRANS\_LOG

-   Description: The error code returned because transaction logs cannot be accessed.
    
-   Example: `ERR-CODE: [TDDL-5003][ERR_TRANS_LOG] Failed to update transaction state: *****`
    
-   Note: If transactions are running in PolarDB-X, PolarDB-X accesses the transaction logs that are stored in the backend data nodes. This ensures the atomicity of distributed transactions. If PolarDB-X fails to read or write transaction logs, the error code TDDL-5003 is returned.
    
    In most cases, the error TDDL-5003 occurs if a backend data node fails. We recommend that you check the status of each backend data node and access load on each backend data node in PolarDB-X. If the error TDDL-5003 persists after you troubleshoot the backend data nodes, contact technical support.
    

## TDDL-5006 ERR\_TRANS\_COMMIT

-   Description: The error code returned because the transaction fails to be committed.
    
-   Example: `ERR-CODE: [TDDL-5006][ERR_TRANS_COMMIT] Failed to commit primary group *****: *****, TRANS_ID = *****`
    
-   Note: If an error occurs when PolarDB-Xcommits a transaction branch, the transaction is automatically rolled back. TRANS\_ID indicates the ID of the transaction. In most cases, the error TDDL-5006 occurs if a backend data node fails. We recommend that you check the status of each backend data node and access load on each backend data node in PolarDB-X. If the error TDDL-5006 persists after you troubleshoot the backend data nodes, contact technical support.
    

## TDDL-5008 ERR\_TRANS\_TERMINATED

-   Description: The error code returned because the transaction is terminated by the KILL statement or due to a timeout.
    
-   Example: `ERR-CODE: [TDDL-5008][ERR_TRANS_TERMINATED] Current transaction was killed or timeout. You may need to set a longer timeout value.`
    
-   Note: This error is returned if the transaction in PolarDB-X is terminated by the KILL statement or due to a timeout. The drds\_transaction\_timeout parameter specifies the timeout period of a transaction. If this error is returned due to a transaction timeout, we recommend that you execute the `SET drds_transaction_timeout = ***` statement to change the maximum execution time of a transaction in PolarDB-X. The unit of the drds\_transaction\_timeout value is milliseconds.
    

## TDDL-5010 ERR\_TRANS\_CONTINUE\_AFTER\_WRITE\_FAIL

-   Description: The error code returned because the execution or commit operation of the transaction is terminated due to a data write failure.
    
-   Example: `ERR-CODE: [TDDL-5010][ERR_TRANS_CONTINUE_AFTER_WRITE_FAIL] Cannot continue or commit transaction after writing failed`
    
-   Note: If a data write failure occurs on a distributed transaction in PolarDB-X, the execution of the transaction is terminated. In this scenario, you must roll back the transaction in the frontend to retry the transaction. You can also analyze slow transactions by using logs. For more information, see [Log analysis](/help/en/polardb/polardb-for-xscale/log-analysis-1#010d9a6046v3v).
    

## TDDL-5108 ERR\_CHECK\_PRIVILEGE\_FAILED\_ON\_TABLE

Note: The error code returned because the account does not have the required permissions on the table. Check the permissions that are granted to the account.

## TDDL-5119 ERR\_FILE\_CANNOT\_BE\_CREATE

Note: The error code returned because PolarDB-X does not support the `SELECT INTO OUTFILE` statement. If you need to use this statement, contact technical support.

## TDDL-5302 ERR\_GLOBAL\_SECONDARY\_INDEX\_UNSUPPORTED

Note: The error code returned because the GSI fails to be created on the table. This error may occur due to one of the following reasons: The table is a non-partitioned table or a broadcast table. The columns of the GSI do not contain the partition key of the table. If this error is caused by other reasons, contact technical support.

## TDDL-5306 ERR\_GLOBAL\_SECONDARY\_INDEX\_INSERT\_DUPLICATE\_VALUES

Note: The error code returned because a conflict has occurred on the primary key of the GSI table when you insert data. Check whether the primary key value of the data that you insert exist in the table.

## TDDL-5308 ERR\_GLOBAL\_SECONDARY\_INDEX\_MODIFY\_UNIQUE\_KEY

Note: The error code returned because a conflict has occurred on the unique key of the GSI table when you execute the DML statement. Check whether the unique key value of the data that you insert exist in the table.

## TDDL-5310 ERR\_GLOBAL\_SECONDARY\_INDEX\_ONLY\_SUPPORT\_XA

Note: The error code returned because GSIs are only supported in PolarDB-X when XA or Timestamp Oracle (TSO) is used as the distributed transaction policy. This error may occur if the default transaction policy is changed before you create a GSI. In this case, change the distributed transaction policy to XA or TSO and create a GSI again.

## TDDL-5313 ERR\_GLOBAL\_SECONDARY\_INDEX\_MODIFY\_GSI\_TABLE\_WITH\_DDL

Note: The error code returned because PolarDB-X does not support DDL operations on a GSI table. If you need to use this feature, contact technical support.

## TDDL-5316 ERR\_GLOBAL\_SECONDARY\_INDEX\_INDEX\_AND\_SHARDING\_COLUMNS\_NOT\_MATCH

Note: The error code returned because the partition key of the global index is not included in the index columns when you create a GSI in PolarDB-X. If the global index has multiple partition keys, such as the database shard key and the table partition key, all the keys must be specified in the index columns. For example, the error code TDDL-5316 is returned if you run `CREATE GLOBAL INDEX idx_1 ON t(a, b) DBPARTITION BY HASH(c)`. This is because the `ON t(a, b)` clause specifies a and b as the index columns, but the columns do not contain the partition key c of the global index. If this error is returned, check whether the index columns that you specify in the DDL statement contain all partitions of the global index.

## TDDL-5317 ERR\_GLOBAL\_SECONDARY\_INDEX\_CONTINUE\_AFTER\_WRITE\_FAIL

-   Example: `ERR-CODE: [TDDL-5317][ERR_GLOBAL_SECONDARY_INDEX_CONTINUE_AFTER_WRITE_FAIL] Cannot continue or commit transaction after writing global secondary index failed`
    
-   Note: If this error is returned when you execute a DML statement on a table for which a GSI is created, you cannot continue to commit the transaction that contains the failed DML statement. In this case, you must modify your business code and roll back the transaction. Then, you can start the transaction again.
    

## TDDL-5321 ERR\_GLOBAL\_SECONDARY\_INDEX\_BACKFILL\_DUPLICATE\_ENTRY

Note: The error code returned because a conflict has occurred on the primary key of the index table during data backfilling when you create a GSI. Check whether a duplicate value exists in the primary key column of the index table.

## TDDL-8007 ERR\_ABANDONED\_TASK

Note: The error code returned because the query is slow or has been running for more than 2 hours due to unknown reasons. PolarDB-X terminates the query and returns the error. We recommend that you optimize the slow query. If this error persists after you optimize the query, contact technical support.

## TDDL-8008 ERR\_EXECUTE\_SPILL

Note: The error code returned because an error has occurred when data is flushed to disks. If you query a large amount of data, the data in temporary tables is flushed to disks. To troubleshoot the error, contact technical support.

## TDDL-8011 ERR\_OUT\_OF\_SPILL\_SPACE

Note: The error code returned because the size of files generated in the temporary tables exceeds the maximum disk size used for data flushing. If you query a large amount of data, the data in temporary tables is flushed to disks. We recommend that you optimize the query and reduce the number of times that the temporary tables are used. If this error persists after you optimize the query, contact technical support.

## TDDL-8012 ERR\_OUT\_OF\_SPILL\_FD

Note: The error code returned because the number of files generated in the temporary tables exceeds the maximum number of file handles. If you query a large amount of data, the data in temporary tables is flushed to disks. Contact technical support to ensure that no file handle leak occurs. After you verify that no file handle leak occurs, you can increase the maximum number of file handles as needed.

## TDDL-8102 ERR\_PAGE\_TOO\_LARGE

Note: The error code returned because the amount of data to be processed in a batch exceeds the maximum value of remote procedure calls (RPCs). When massively parallel processing (MPP) is used for parallel computing, data is processed on compute nodes in batches. To troubleshoot this error, you can change the default value of CHUNK\_SIZE to a smaller value.

## TDDL-8103 ERR\_NO\_NODES\_AVAILABLE

Note: The error code returned because no compute node is available. When MPP is used for parallel computing, a compute node failure can occur. This can cause a failure in compute node scheduling. To troubleshoot this error, check whether each compute node runs as expected. If this error persists after you verify that each compute node runs as expected, contact technical support.

## TDDL-9301 ERR\_DUPLICATED\_PARTITION\_NAME

Note: The error code returned because the name of the partition that you specify in the DDL statement already exists.

## TDDL-9305 ERR\_PARTITION\_NAME\_NOT\_EXISTS

Note: The error code returned because the name of the partition that you specify in the DDL statement does not exist. Check whether the name of the partition is valid. You can execute the `SHOW CREATE TABLE` and `CHECK TABLE` statements to check whether the data in the partition is consistent with the metadata of the table. This error can occur if the data is inconsistent with the metadata. In this case, contact technical support.

## TDDL-10004 ERR\_X\_PROTOCOL\_RESULT

-   Example: `ERR-CODE: [TDDL-10004][ERR_X_PROTOCOL_RESULT] Should use chunk2chunk to fetch data`
    
-   Note: The error code returned because compute nodes fail to establish connections to data nodes. In PolarDB-X, compute nodes use private RPCs to communicate with data nodes. This error may occur due to multiple reasons. You can troubleshoot the error based on the error message. If you cannot identify the issue, contact technical support.
