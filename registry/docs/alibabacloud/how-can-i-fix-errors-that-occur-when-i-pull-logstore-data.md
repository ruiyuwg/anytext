If a transformation rule involves loading resources from other LogStores, resource loading or refresh errors may occur. This document describes common errors that occur when obtaining data from other LogStores and provides troubleshooting methods.

After the data transformation engine successfully reads data from the source LogStore, it begins processing the log events. If the transformation rule involves loading external resources such as OSS, RDS, or other LogStores, resource loading or refresh errors can occur.

Impact of errors:

-   During log event transformation, log events that conflict with a transformation rule result in an error and are discarded. The transformed output does not include these log events.
    
-   The data transformation job discards log events that conflict with the transformation rule but continues to process other log events. It does not retry the failed events.
    
-   If multiple events are split from a single source event, and one of them is discarded due to an error, all other events split from the same source event are also discarded.
    
    **Note**
    
    Before output, these events are associated in a tree structure and are not independent.
    

## Missing required parameters

-   Transformation rule
    
    ```
    e_table_map(res_log_logstore_pull(endpoint="cn-shenzhen.log.aliyuncs.com",ak_id="xxx",
            ak_secret="xxx",project="etl-test-shenzhen",
            fields=["__source__"]),field="processid",output_fields=["__source__"])
    ```
    
-   Error log
    
    ```
    error when calling : res_log_logstore_pull\nDetail: res_log_logstore_pull() missing 1 required positional argument: 'logstore'", "requestId": "
    ```
    
-   Troubleshooting
    
    The error message `missing 1 required positional argument` appears because the required `logstore` parameter is missing. You can check your rule for any missing parameters.
    
-   Solution
    
    You can reconfigure the orchestration syntax and add the missing parameter.
    

## Primary key maintenance is set but the delete\_data parameter is not

-   Transformation rule
    
    ```
    e_table_map(res_log_logstore_pull(endpoint="xx",ak_id="xxx",
            ak_secret="xxx",project="etl-test-shenzhen",logstore="rds-mysql-test",
            fields=["__source__"],primary_keys="cid"),field="processid",output_fields=["__source__"])
    ```
    
-   Error log
    
    ```
    when setting parameter primart_keys,need set delete_data\nDetail: None
    ```
    
-   Troubleshooting
    
    This error occurs because the `delete_data` parameter is not set when the `primary_keys` parameter is set. The `primary_keys` and `delete_data` parameters must be configured together.
    
-   Solution
    
    You can configure both the primary\_keys and delete\_data parameters, and then restart the data transformation service.
    

## Target LogStore does not exist

-   Transformation rule
    
    ```
    e_table_map(res_log_logstore_pull(endpoint="xx",ak_id="xxx",
            ak_secret="xxx",project="etl-test-shenzhen",logstore="pull_logstore_test9900881",
            fields=["__source__"],primary_keys="cid"),field="processid",output_fields=["__source__"])
    ```
    
-   Error log
    
    ```
    message:  fetch data get errors:{"errorCode": "LogStoreNotExist", "errorMessage": "logstore pull_logstore_test9900881 does not exist", "requestId": "5D7227AA269948500404B777"},retrytimes=2
    ```
    
-   Troubleshooting
    
    The preceding error log appears when the configured target LogStore does not exist.
    
-   Solution
    
    You can check if the target LogStore exists. Then, reconfigure the orchestration syntax with the correct LogStore name.
    

## Incorrect AccessKey configuration

-   Transformation rule
    
    ```
    e_table_map(res_log_logstore_pull(
            endpoint="cn-hangzhou.log.aliyuncs.com",
            ak_id="xx",
            ak_secret="xx",
            project="sls-test",
            logstore="pull_logstore_test",
            fields=[("id", "new_id"), "name", "status"],
            from_time="begin"), "name", "new_id")
    ```
    
-   Error log
    
    ```
    message:  fetch data get errors:{"errorCode": "SignatureNotMatch", "errorMessage": "signature gdaL/nWSRtve5FOB+QqHO/sBdnA= not match", "requestId": "5D760261ED35D40AA4AB1953"},retrytimes=1
    ```
    
    ```
    message:  fetch data get errors:{"errorCode": "Unauthorized", "errorMessage": "AccessKeyId not found: xx", "requestId": "5D7602A01808F9EAA6EB0E2B"},retrytimes=3
    ```
    
-   Troubleshooting
    
    When the preceding errors occur, you can check if the AccessKey parameters in the orchestration syntax are correct. These errors occur if the \`ak\_secret\` and \`ak\_id\` values do not match, or if the \`ak\_id\` does not exist.
    
-   Solution
    
    You can reconfigure the correct AccessKey parameters and restart the data transformation job.
    

## Insufficient AccessKey permissions

-   Transformation rule
    
    ```
    e_table_map(res_log_logstore_pull(
            endpoint="cn-hangzhou.log.aliyuncs.com",
            ak_id="xx",
            ak_secret="xx",
            project="sls-test",
            logstore="pull_logstore_test",
            fields=[("id", "new_id"), "name", "status"],
            from_time="begin"), "name", "new_id")
    ```
    
-   Error log
    
    ```
    message:  fetch data get errors:{"errorCode": "Unauthorized", "errorMessage": "denied by sts or ram, action: log:ListShards, resource: acs:log:cn-hangzhou:1654218965343050:...}
    ```
    
-   Troubleshooting
    
    The `Unauthorized` error message usually indicates insufficient permissions. You can check if the configured AccessKey has read and write permissions on the target LogStore.
    
-   Solution
    
    You can check the AccessKey permissions. If the permissions are insufficient, grant the required permissions.
    

## Incorrect endpoint

-   Transformation rule
    
    ```
    e_table_map(res_log_logstore_pull(
            endpoint="xxx",
            ak_id="xx",
            ak_secret="xx",
            project="sls-test",
            logstore="pull_logstore_test",
            fields=[("id", "new_id"), "name", "status"],
            from_time="begin"), "name", "new_id")
    ```
    
-   Error log
    
    ```
    message:  fetch data get errors:{"errorCode": "ProjectNotExist", "errorMessage": "The Project does not exist : ali-sls-etl-regression-test", "requestId": "5D760AB12ECD0722AA1DD681"}
    ```
    
    ```
    message:  fetch data get errors:{"errorCode": "LogRequestError", "errorMessage": "HTTPConnectionPool(host='ali-sls-etl-regression-test.xx', port=80): Max retries exceeded with url: /logstores/pull_logstore_test/shards (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f968a298ef0>: Failed to establish a new connection: [Errno -2] Name or service not known))
    ```
    
-   Troubleshooting
    
    The `ProjectNotExist` or `LogRequestError` errors usually occur because the endpoint is incorrect. This can cause a connection error, or the connection is established but the required project is not found at the endpoint.
    
-   Solution
    
    You can configure the correct endpoint. For more information, see [Endpoints](/help/en/sls/developer-reference/service-entrance).
