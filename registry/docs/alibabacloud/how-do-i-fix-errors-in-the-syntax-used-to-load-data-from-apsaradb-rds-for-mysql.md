If a transformation rule requires data to be pulled from ApsaraDB RDS for MySQL, errors may occur when the data is pulled or updated. This topic describes the errors and provides solutions.

After the transformation engine reads data from the source Logstore, it begins transforming the log events. If the transformation rule loads external resources—such as Object Storage Service (OSS), RDS, or other Logstores—errors can also occur during loading or refreshing.

## Use resource functions independently in the console

-   Transformation rule
    
    ```
    res_rds_mysql(address="xx",username="xx",password="xx",database="xx")
    ```
    
-   Error log
    
    ```
    aliyun.log.logexception.LogException: {"errorCode": "InvalidEtlConfig", "errorMessage": "ETL config doesn't pass security check, detail: invalid type detected: <class '_ast.Expr'>", "requestId": ""}
    ```
    
-   Troubleshooting method
    
    This error message indicates a syntax configuration error. It commonly occurs when you use the res\_rds\_mysql, res\_log\_LogStore\_pull, or res\_oss\_file function alone in the Simple Log Service console.
    
-   Solution
    
    Use the resource functions in combination with the e\_table\_map function because the resource functions cannot be independently used in the Simple Log Service console.
    

## Invalid parameter settings

-   Transformation rule
    
    ```
    e_table_map(res_rds_mysql(address="xx",username="xx",password="xx",database="xx"),field="processid",output_fields=["name","xixi"])
    ```
    
-   Error log
    
    ```
    When sql is not set, table must be set\nDetail: None
    ```
    
-   Troubleshooting method
    
    Check whether the table or sql parameter is configured.
    
-   Solution
    
    If the table parameter is not configured, you must specify an SQL statement to find the required table. If you do not specify the SQL statement in this situation, the required table cannot be found, and the data cannot be pulled. You must configure one of the table and sql parameters.
    

## Invalid output fields

-   Transformation rule
    
    ```
    e_table_map(res_rds_mysql(address="x",username="xx",password="xx",database="xx",table="test"),field="processid",output_fields=["name","xixi"])
    ```
    
-   Error log
    
    ```
    trans_comp_lookup: output field xixi doesn't exist in lookup table\nDetail: None
    ```
    
-   Troubleshooting method
    
    The fields in the output\_fields parameter do not exist in the required table.
    
-   Solution
    
    Verify the fields in the MySQL data table and enter the correct ones in output\_fields.
    

## Invalid parameter type settings

-   Transformation rule
    
    ```
    e_table_map(res_rds_mysql(address="xxx",username=1234,password="xx",database="xx",table="xx"),field="processid",output_fields=["name","xixi"])
    ```
    
-   Error log
    
    ```
    username not a string type\nInvalid Settings
    ```
    
-   Troubleshooting method
    
    The value of the username parameter is not of the string type.
    
-   Solution
    
    You can configure the correct data type.
    

## Network or permission errors

-   Transformation rule
    
    ```
    e_table_map(res_rds_mysql(address="xxx",username=xxx,password="xx",database="test999",table="xx"),field="processid",output_fields=["name","xixi"])
    ```
    
-   Error log 1
    
    ```
    message:  Database connection failed, cause: (1045, "Access denied for user 'user1'@'192.0.2.1' (using password: YES)")
    ```
    
-   Error log 2
    
    ```
    message:  Database connection failed, cause: (1049, "Unknown database 'test999')
    ```
    
-   Troubleshooting method
    
    Check whether the configurations are valid, the network is connected, or the required whitelist is configured on the required ApsaraDB RDS for MySQL instance. If a connection error occurs, the cause field in the error log contains the detailed cause of the error. You can troubleshoot the error based on the cause. Common errors include lack of permissions, incorrect passwords, and invalid addresses.
    
-   Solution
    
    Reconfigure the functions and restart the data transformation job.
    

## SQL syntax errors

-   Transformation rule
    
    ```
    e_table_map(res_rds_mysql(address="xxx",username=xxx,password="xx",database="xx",sql="inset into test values(1,"aini")",field="processid",output_fields=["name","xixi"]))
    ```
    
-   Error log
    
    ```
    \"errorMessage\": \"The sql_query field only supports database query syntax\\nInvalid Settings \\\"insert into test values(1,aini)\\\"\\nDetail: None\", \"requestId\": \"\"}
    ```
    
-   Troubleshooting method
    
    This is an SQL syntax error. Resource functions support only reading data from the database. An invalid SQL statement intended for writing to the database can also trigger a `fetch data error`. If this occurs, analyze the root cause of the error.
    
-   Solution
    
    Correct the SQL syntax. Resource functions support only SELECT.
    

## Continuous refresh errors

-   Transformation rule
    
    ```
    e_table_map(res_rds_mysql(address="xxx",username=xxx,password="xx",database="xx",table="test,field="processid",output_fields=["name","xixi"],refresh_interval=30))
    ```
    
-   Error log
    
    ```
    \"errorMessage\": \"Database connection failed, cause: (2003, \\\"Can't connect to MySQL server on 'rm-wz9z68i4itrk4v8d9yo.mysql.rds.aliyuncs.com' (timed out))
    ```
    
-   Troubleshooting method
    
    The error occurs because a specific whitelist of the required ApsaraDB RDS for MySQL instance is cleared. If an error such as a network interruption occurs during continuous transformation, the data transformation job is automatically retried. If an error such as revoked permissions or incorrectly deleted tables occurs, you must manually grant the permissions or restore the tables.
    
-   Solution
    
    Check whether the tables or permissions are changed in the databases on the ApsaraDB RDS for MySQL instance based on the cause of the error.
