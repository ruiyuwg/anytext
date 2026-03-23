This topic describes SQL error codes, their trigger conditions, and solutions.

This type of error code uses the following format.

```
ODPS-01CCCCX:General description - Context-specific information
```

SQL errors include errors from the META (CCCC is 1000 to 1999), PROCESSOR (CCCC is 2000 to 2999), PARSER (CCCC is 3000 to 3999), and PLANNER (CCCC is 4000 to 4999) modules. The following sections describe the error codes.

## ODPS-0110011: Authorization exception

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: Insufficient permissions.
    
-   Solution: Based on the error message, contact the project owner to grant the required operation permission. For more information, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    

## ODPS-0110021: Invalid parameters

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid parameters.
    
-   Solution: Check and modify the input parameters to ensure that they meet the requirements.
    

## ODPS-0110031: Invalid object type

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid object type.
    
-   Solution: Check and modify the input object to ensure that it meets the object type requirements.
    

## ODPS-0110041: Invalid meta operation - AlreadyExistsException(message:Partition already exists, existed values:)

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: MaxCompute does not have a locking mechanism for the table being operated on. This error is caused by metadata contention. Performing multiple read and write operations on the same partition at the same time can cause this error.
    
-   Solution: Because MaxCompute does not have a locking mechanism, do not perform operations on the same table at the same time.
    

## ODPS-0110061: Failed to run ddltask - AlreadyExistsException(message:Partition already exists, existed values:)

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: MaxCompute does not have a locking mechanism for the table being operated on. This error is caused by metadata contention. Performing multiple read and write operations on the same partition at the same time can cause this error.
    
-   Solution: Because MaxCompute does not have a locking mechanism, do not perform operations on the same table at the same time.
    

## ODPS-0110061: Failed to run ddltask - SimpleLock conflict failure, add partition is already on-going

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: This error occurs when you add the same partition in batches. MaxCompute executes only the first command it receives to add the partition and ignores subsequent requests.
    
-   Solution: Avoid performing operations on the same partition at the same time.
    

## ODPS-0110061: Failed to run ddltask - Your project is not allowed to install the package

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: When you use dynamic data masking, this error occurs if you run the `install package aegis.aegis_package;` command without adding the MaxCompute project that requires data masking to the **masking project**.
    
-   Solution: Before you run the `install package aegis.aegis_package;` command, add the MaxCompute project that requires data masking to the **masking project**. For more information, see [Dynamic data masking](/help/en/maxcompute/security-and-compliance/dynamic-data-masking#section-dt5-onp-pwc).
    

## ODPS-0110999: Critical! Internal error happened in commit operation and rollback failed, possible breach of atomicity - Rename directory failed during DDLTask.

-   Module: META.
    
-   Severity level: 1.
    
-   Trigger condition: MaxCompute does not have concurrency control. Multiple tasks may be modifying this table. In this case, there is a small chance that a concurrency conflict occurs during the final META operation, which causes an execution exception. This can happen with both ALTER and INSERT operations.
    
-   Solution: Change this table to a partitioned table. Write the data inserted by each SQL statement into a separate partition. This method allows for concurrent operations.
    

## ODPS-0120011: Authorization exception

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: Insufficient permissions.
    
-   Solution: Based on the error message, contact the project owner to grant the required operation permission. For more information, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    

## ODPS-0120021: the delimitor must be the same in wm\_concat

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: The separators in the same group must be the same.
    
-   Solution: Unify the separator format to ensure that it is consistent.
    

## ODPS-0120031: Instance has been cancelled

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: The instance has been canceled.
    
-   Solution: You can run the `status <instance_id>;` command in the MaxCompute client to confirm the instance status.
    

## ODPS-0121011: Invalid regular expression pattern

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: The regular expression processing function in a built-in function received a regular expression that it does not recognize.
    
-   Solution: Change it to a regular expression that the function can recognize. For more information, see [RLIKE character matching](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb).
    

## ODPS-0121021: Regexec call failed

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: An error occurred during regular expression matching.
    
-   Solution: Confirm that the regular expression is valid. For more information, see [RLIKE character matching](/help/en/maxcompute/user-guide/regular-expressions#concept-ihp-ntf-vdb).
    

## ODPS-0121035: Illegal implicit type cast

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: A type conversion error occurred. This is usually an unsupported implicit type conversion error that is caused by a violation of implicit conversion rules.
    
-   Solution: For more information, see [Implicit type conversion and its scope](/help/en/maxcompute/user-guide/type-conversions#section-uhl-sml-vdb).
    

## ODPS-0121045: Unsupported return type

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: The return value is not supported.
    
-   Solution: Change to a supported return value.
    

## ODPS-0121055: Empty argument value

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: The parameter is empty or NULL.
    
-   Solution: Modify the input parameter.
    

## ODPS-0121065: Argument value out of range

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: The parameter value is incorrect and outside the allowed range.
    
-   Solution: Modify the parameter value.
    

## ODPS-0121075: Invalid number of arguments

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: The number of parameters is invalid.
    
-   Solution: Modify the number of parameters.
    

## ODPS-0121081: Illegal argument type

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: The primitive data type of the parameter is incorrect.
    
-   Solution: Modify the parameter type.
    

## ODPS-0121095: Invalid arguments

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: The input parameters are incorrect.
    
-   Solution: Modify the input parameters.
    

## ODPS-0121105: Constant argument value expected

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: A constant is expected, but a column name was entered.
    
-   Solution: Change the input to a constant.
    

## ODPS-0121115: Column reference expected

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: A column name is expected, but a constant was entered.
    
-   Solution: Change the input to a column name.
    

## ODPS-0121125: Unsupported function or operation

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: Unsupported user-defined function (UDF) or other operation.
    
-   Solution: Modify the UDF or change the operation.
    

## ODPS-0121145: Data overflow

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: Data overflow. The data exceeds the value range of the data type. This may be caused by an aggregate function or a division operation where the divisor is of the DECIMAL type and its value is 0. Examples include a data overflow caused by a summation function or a data overflow caused by `SELECT 1BD / 0BD;`.
    
-   Solution: Modify the operation that causes the data overflow.
    

## ODPS-0123049: buffer overflow

-   Module: PROCESSOR.
    
-   Severity level: 9.
    
-   Trigger condition: Memory overflow.
    
-   Solution: Check if there is an issue with the data. For example, there might be too much data that has the same key in a JOIN operation.
    

## ODPS-0123055: Script exception

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: Script exception.
    
-   Solution: If a user-defined function (UDF) error occurs, see [Class or dependency issues](/help/en/maxcompute/user-guide/faq-about-maxcompute-java-udfs#section-zty-hzo-krj) in the UDF FAQ to troubleshoot the issue.
    

## ODPS-0123065: Join exception

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: JOIN operation exception.
    
-   Solution: Modify the JOIN operation.
    

## ODPS-0123081: Invalid datetime string

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: DATETIME string exception.
    
-   Solution: Modify the DATETIME string.
    

## ODPS-0123091: Illegal type cast

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid type conversion. This is usually caused by an invalid explicit type conversion.
    
-   Solution: Modify the type conversion mechanism. For more information, see [Data type conversions](/help/en/maxcompute/user-guide/type-conversions#concept-wyb-sgl-vdb).
    

## ODPS-0123105: Job got killed

-   Module: PROCESSOR.
    
-   Severity level: 5.
    
-   Trigger condition: The job was aborted.
    
-   Solution: You can run the `status <instance_id>;` command in the MaxCompute client to confirm the instance status.
    

## ODPS-0123111: Format string does not match datetime string

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: The format string does not match the datetime string. The date format that you manually entered in the SQL statement does not meet the format requirements of MaxCompute, or a DATETIME-related built-in function was used incorrectly.
    
-   Solution: Modify the date format.
    

## ODPS-0123121: Mapjoin exception

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: A MAPJOIN exception occurred. This is usually caused by the small table in the MAPJOIN exceeding the system limit of 512 MB.
    
-   Solution: Modify the MAPJOIN operation.
    

## ODPS-0123131: User defined function exception

-   Module: PROCESSOR.
    
-   Severity level: 1.
    
-   Trigger condition: A user-defined function (UDF) exception occurred.
    
-   Solution: Modify the UDF.
    

## ODPS-0130013: Authorization exception

-   Module: PARSER.
    
-   Severity level: 3.
    
-   Trigger condition: Insufficient permissions. The security check failed.
    
-   Solution: Based on the error message, contact the project owner to grant the required operation permission. For more information, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    

## ODPS-0130031: Failed to drop table

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The source table was not found when deleting the table.
    
-   Solution: You can run the `show tables;` command in the MaxCompute client to confirm that the source table exists and its name is correct.
    

## ODPS-0130071: Semantic analysis exception - Invalid table alias or column reference

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: A syntax parsing exception occurred. The column name is incorrect. The corresponding column was not found.
    
-   Solution: You can run the `desc <table_name>;` command in the MaxCompute client to obtain the correct column name.
    

## ODPS-0130071: Semantic analysis exception - Invalid column reference

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: A syntax parsing exception occurred. A column reference error occurred. The corresponding column was not found.
    
-   Solution: You can run the `desc <table_name>;` command in the MaxCompute client to obtain the correct column name.
    

## ODPS-0130071: Semantic analysis exception - Expression not in GROUP BY key

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: A syntax parsing exception occurred. The columns read in the SELECT clause do not exactly match the columns in the GROUP BY clause.
    
-   Solution: Modify the SELECT statement to meet the syntax requirements. For more information, see [GROUP BY query (col\_list)](/help/en/maxcompute/user-guide/select-syntax#section-akw-f5f-ggb).
    

## ODPS-0130071: Semantic analysis exception - Partition not found

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: A syntax parsing exception occurred. The partition with the specified partition value was not found.
    
-   Solution: You can run the `show partitions <table_name>;` command in the MaxCompute client to query existing partition values. Then, change the partition in the statement to an existing partition.
    

## ODPS-0130071: Semantic analysis exception - SELECT DISTINCT and GROUP BY can not be in the same query

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: DISTINCT and GROUP BY cannot be in the same SELECT clause.
    
-   Solution: Modify the statement. Do not use DISTINCT and GROUP BY at the same time.
    

## ODPS-0130071: Semantic analysis exception - Cannot insert into target table because column number/types are different

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: When you insert data into the destination table, the number or types of columns in the source table and the destination table do not match.
    
-   Solution: Modify the statement to ensure that the number and types of columns in the source and destination tables match.
    

## ODPS-0130071: Semantic analysis exception - physical plan generation failed: java.lang.RuntimeException: Table(xxxx) is full scan with all partitions, please specify partition predicates

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Full table scans on partitioned tables are disabled for the project to which the table belongs. You must specify partition conditions.
    
-   Solution: If the current SQL statement requires a full table scan, you can add the \`set odps.sql.allow.fullscan=true;\` statement before the SQL statement and submit them together. A full table scan increases the amount of input data, which in turn increases costs.
    

## ODPS-0130071: Semantic analysis exception - physical plan generation failed: com.aliyun.odps.lot.cbo.FailFastException: instance count exceeds limit 99999

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The number of `instances` in a single job exceeds the upper limit of 100,000.
    
-   Solution: Adjust the `split size` to reduce concurrency. You can add the `set odps.sql.mapper.split.size=4096;` statement before the SQL statement and submit them together. This statement adjusts the size of the data that each Mapper reads from the table. The default unit is MB. You can control this variable to manage the input to the Map stage.
    

## ODPS-0130071: Semantic analysis exception - X type is not enabled in current mode

-   Symptom: When you call a built-in function, the following error message is returned.
    
    ```
    FAILED: ODPS-0130071:[1,27] Semantic analysis exception - TIMESTAMP type is not enabled in current mode. Please set odps.sql.type.system.odps2=true to use it.
    ```
    
-   Cause: The built-in function used in the SQL statement involves a 2.0 data type, such as TINYINT, SMALLINT, INT, FLOAT, VARCHAR, TIMESTAMP, or BINARY, but the 2.0 data type feature is not enabled for the project. This causes MaxCompute to fail the processing.
    
-   Solution: In the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db), enable the 2.0 data type feature using one of the following methods:
    
    -   Session level: Add the `set odps.sql.type.system.odps2=true;` statement before your SQL statement and submit them together.
        
    -   Project level: The project owner can configure the project as needed. The configuration takes effect in 10 to 15 minutes. The command is as follows.
        
        ```
        setproject odps.sql.type.system.odps2=true;
        ```
        
        After the command takes effect, run the SQL statement again.
        
        For more information about `setproject`, see [Project operations](/help/en/maxcompute/user-guide/project-operations#concept-qg3-s32-vdb). For more information about the considerations for enabling the project-level 2.0 data type switch, see [Data type version guide](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
        

## ODPS-0130071: Semantic analysis exception - wrong columns count X in data source, requires Y columns (includes dynamic partitions if any)

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: When you create a foreign table, the number of columns in the foreign table is inconsistent with the number of columns in the mapped source table. This causes the foreign table creation to fail.
    
-   Solution: Check the statement for creating the foreign table. Ensure that the number of columns in the foreign table is consistent with the number of columns in the mapped source table. For more information, see [Foreign tables](/help/en/maxcompute/user-guide/overview-11#concept-znp-tdb-wdb).
    

## ODPS-0130071: Semantic analysis exception - column X in source has incompatible type A with destination column Y, which has type B

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The data type of a column in the foreign table is inconsistent with the data type of the mapped column in the source table. This causes the foreign table creation to fail.
    
-   Solution: Check the statement for creating the foreign table. Ensure that the data type of each column in the foreign table is consistent with the data type of the mapped column in the source table. For more information, see [Foreign tables](/help/en/maxcompute/user-guide/overview-11#concept-znp-tdb-wdb).
    

## ODPS-0130071: Semantic analysis exception - max depth of expression is xxxx, which exceeds limit of 5000

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The arithmetic expression is too complex. This causes the number of nodes in the tree constructed from the expression to exceed the limit of 5,000.
    
-   Solution: Optimize the arithmetic expression.
    

## ODPS-0130071: Semantic analysis exception - function or view Y cannot be resolved

-   Symptom: When you call a built-in function, the following error message is returned.
    
    ```
    FAILED: ODPS-0130071:[1,8] Semantic analysis exception - function or view 'row_number' cannot be resolved
    ```
    
-   Cause: The name of the built-in function used in the SQL statement is incorrect or the function is missing parameters. This causes MaxCompute to fail the processing.
    
-   Solution: Check the function name and parameter names. Add input parameters as required by the function syntax. After you confirm that the names and syntax format are correct, run the SQL statement again.
    

## ODPS-0130081: Invalid UDF reference

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The UDF method signature is invalid.
    
-   Solution: Modify the signature information in the UDF code.
    

## ODPS-0130091: Invalid parameters

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The UDF input parameters are invalid.
    
-   Solution: Modify the UDF input parameters to ensure that they meet the requirements.
    

## ODPS-0130101: Ambiguous data type

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The data type is invalid.
    
-   Solution: Modify the data type.
    

## ODPS-0130111: Fuxi job failed - Data Set should contains exactly one row

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The dataset that was read does not meet the requirements. It can contain only one record.
    
-   Solution: Modify the dataset to ensure that it contains only one record.
    

## ODPS-0130111: Subquery partition pruning exception

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: An exception occurred during dynamic partition optimization for the subquery in the IN conditional statement.
    
-   Solution: Modify the IN conditional statement.
    

## ODPS-0130121: Invalid argument type

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid parameter type. This is usually because the parameter type received by the built-in function is incorrect.
    
-   Solution: Modify the parameter type.
    

## ODPS-0130121: Invalid argument type- invalid type X of argument m for function Y

-   Symptom: When you call a built-in function, the following error message is returned.
    
    ```
    FAILED: ODPS-0130121:[1,18] Invalid argument type - invalid type STRING of argument 1 for function all_match, expect ARRAY<T>
    ```
    
-   Cause: The actual input parameter type for the built-in function used in the SQL statement does not meet the function's syntax requirements. This causes MaxCompute to fail the processing.
    
-   Solution: Modify the input parameters according to the function's syntax requirements. Ensure that the data type meets the syntax requirements, and then run the SQL statement again.
    

## ODPS-0130131: Table not found

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The table does not exist. When you run a DDL or DML statement, the table being operated on does not exist.
    
-   Solution: You can run the `show tables;` command in the MaxCompute client to confirm the table name.
    

## ODPS-0130141: Illegal implicit type cast

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Disallowed implicit type conversion.
    
-   Solution: For more information, see [Implicit type conversion and its scope](/help/en/maxcompute/user-guide/type-conversions#section-uhl-sml-vdb).
    

## ODPS-0130151: Illegal data type

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid data type.
    
-   Solution: Modify the data type.
    

## ODPS-0130161

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: SQL syntax parsing error.
    
-   Solution: Ensure that the SQL syntax is correct and that supported features are used. For more information about specific scenarios, see [Handle errors for the compact command](/help/en/maxcompute/user-guide/update-and-delete#section-d1o-zyi-u88), [Handle circular reference errors in WITH clauses](/help/en/maxcompute/user-guide/select-syntax#section-f54-cbs-73c), [Handle errors with INTERVAL input parameters](/help/en/maxcompute/user-guide/interval-data-type#00d9c84fda20n), and [Handle bad.escape errors from incompatible SQL rewrites](/help/en/maxcompute/use-cases/rewrite-incompatible-sql-statements#section-bsv-p3d-5db).
    

## ODPS-0130171: Creating view exception

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: An exception occurred when creating the view.
    
-   Solution: Check and modify the statement for creating the view. For more information, see [Create or update a view](/help/en/maxcompute/user-guide/view-related-operations#section-jpr-4z1-wdb).
    

## ODPS-0130181: Window function exception

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Window function exception.
    
-   Solution: Check whether the window function meets the syntax requirements.
    

## ODPS-0130191: Invalid column or partition key

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid column or partition key.
    
-   Solution: You can run the `desc <table_name>;` or `show partitions <table_name>;` command in the MaxCompute client to confirm the validity of the column or partition.
    

## ODPS-0130201: View not found

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The view does not exist.
    
-   Solution: You can run the `show tables;` command in the MaxCompute client to check if the view name is correct.
    

## ODPS-0130211: Table or view already exists

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The table or view already exists.
    
-   Solution: Change the name of the table or view to be created.
    

## ODPS-0130221: Invalid number of arguments

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The number of parameters is invalid.
    
-   Solution: Modify the number of input parameters.
    

## ODPS-0130221: Invalid number of arguments - function Y needs m parameters, actually have n

-   Symptom: When you call a built-in function, the following error message is returned.
    
    ```
    FAILED: ODPS-0130221:[1,8] Invalid number of arguments - function from_utc_timestamp needs 2 parameters, actually have 1
    ```
    
-   Cause: The actual number of input parameters for the built-in function used in the SQL statement does not meet the function's syntax requirements. This causes MaxCompute to fail the processing.
    
-   Solution: Check the number of input parameters for the built-in function. Add or remove parameters to meet the function's syntax requirements. Then, run the SQL statement again.
    

## ODPS-0130231: Invalid view

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The view is invalid.
    
-   Solution: You can run the `show tables;` command in the MaxCompute client to check if the view name is correct.
    

## ODPS-0130241: Illegal union operation

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid UNION operation. This is usually caused by inconsistent numbers or types of columns on both sides of the UNION.
    
-   Solution: Modify the UNION statement to meet the syntax requirements. For more information, see [UNION](/help/en/maxcompute/user-guide/intersect-union-except-and-minus#section-jh0-60d-t18).
    

## ODPS-0130252: Cartesian product is not allowed

-   Module: PARSER.
    
-   Severity level: 2.
    
-   Trigger condition: Cartesian product is not supported.
    
-   Solution: MaxCompute does not support non-equi expressions in the join conditions of a JOIN operation.
    

## ODPS-0130261: Invalid schema

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid schema.
    
-   Solution: Modify the schema.
    

## ODPS-0130271: Partition does not exist

-   Module: PARSER.
    
-   Severity level: 1.
    
-   Trigger condition: The partition does not exist.
    
-   Solution: You can run the `show partitions <table_name>;` command in the MaxCompute client to query existing partition values. Then, change the partition in the statement to an existing partition.
    

## ODPS-0140011: Illegal type cast

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Disallowed explicit type conversion.
    
-   Solution: Modify the type conversion mechanism. For more information, see [Explicit type conversion](/help/en/maxcompute/user-guide/type-conversions#section-gvj-1jl-vdb).
    

## ODPS-0140021: Illegal implicit type cast

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Disallowed implicit type conversion.
    
-   Solution: Modify the type conversion mechanism. For more information, see [Implicit type conversion and its scope](/help/en/maxcompute/user-guide/type-conversions#section-uhl-sml-vdb).
    

## ODPS-0140031: Invalid column reference

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid column name.
    
-   Solution: You can run the `desc <table_name>;` command in the MaxCompute client to obtain the correct column name.
    

## ODPS-0140041: Invalid UDF reference

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: The UDF being used does not exist.
    
-   Solution: You can run the `list functions;` command in the MaxCompute client to view the correct UDF name.
    

## ODPS-0140051: Invalid function

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Invalid function.
    
-   Solution: You can run the `show functions;` or `list functions;` command in the MaxCompute client to view the correct function name.
    

## ODPS-0140061: Invalid parameters

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Input parameter exception.
    
-   Solution: Modify the input parameter.
    

## ODPS-0140071: Unsupported operator

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Unsupported operator.
    
-   Solution: Change to a supported operator. For more information, see [Operators](/help/en/maxcompute/user-guide/operator#concept-bll-pfl-vdb).
    

## ODPS-0140081: Unsupported join type

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: A small table (Left) outer joins a large table, or a large table (Right) outer joins a small table.
    
-   Solution: Change the join order.
    

## ODPS-0140105: Invalid multiple I/O

-   Module: PLANNER.
    
-   Severity level: 5.
    
-   Trigger condition: Multi-path output conflict.
    
-   Solution: Adjust the job to avoid multi-path output conflicts.
    

## ODPS-0140111: Unsupported col type in EXTRACT now

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: Column type not supported by EXTRACT.
    
-   Solution: Change to a supported column type.
    

## ODPS-0140133: Invalid structure

-   Module: PLANNER.
    
-   Severity level: 3.
    
-   Trigger condition: The data structure cannot be recognized.
    
-   Solution: Confirm that the data structure is valid.
    

## ODPS-0140151: Can not do topologic sort, the stages is not a DAG

-   Module: PLANNER.
    
-   Severity level: 1.
    
-   Trigger condition: An error occurred in the sorting algorithm.
    
-   Solution: Check that the sorting algorithm is correct.
    

## ODPS-0140178: Internal system failure

-   Module: PLANNER.
    
-   Severity level: 8.
    
-   Trigger condition: System exception.
    
-   Solution: Retry the operation.
    

## ODPS-1800001: Session exception - Failed to submit sub-query in session because:Prepaid project run out of free query quota

-   Module: Not applicable.
    
-   Severity level: Not applicable.
    
-   Trigger condition: This error occurs if you use Java Database Connectivity (JDBC) to connect to MaxCompute, run tasks on subscription resources, use the MCQA feature, and the number of jobs exceeds 500.
    
-   Solution: Modify the configuration for enabling the MCQA feature over JDBC. Set the alwaysFallback parameter to true. For more information, see [FAQ](/help/en/maxcompute/user-guide/maxcompute-query-acceleration#section-dlp-b5z-648).
