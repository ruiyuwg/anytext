This topic describes the causes of resource data loading errors in data transformation rules and provides troubleshooting and resolution methods.

## Error handling mechanism

For more information about the error handling mechanism for resource loading errors, see [res\_log\_logstore\_pull](/help/en/sls/resource-functions#section-b3c-kth-p0t), [res\_rds\_mysql](/help/en/sls/resource-functions#section-49h-ufh-ptu), and [res\_oss\_file](/help/en/sls/resource-functions#section-mlb-osw-xzd).

## General troubleshooting

Using a resource function alone causes resource loading errors.

-   Sample transformation rules
    
    -   ```
        res_log_logstore_pull(endpoint="cn-shenzhen.log.aliyuncs.com",ak_id="xxx",
                ak_secret="xxx",project="etl-test-shenzhen",
                fields=["__source__"]),field="processid",output_fields=["xx"]
        ```
        
    -   ```
        res_rds_mysql(address="xx",username="xx",password="xx",database="xx")
        ```
        
    -   ```
        res_oss_file(endpoint='xx',ak_id="xx",ak_key="xx",bucket='xx', file='xx',format='xx',change_detect_interval=0)
        ```
        
-   Error log
    
    ```
    aliyun.log.logexception.LogException: {"errorCode": "InvalidEtlConfig", "errorMessage": "ETL config doesn't pass security check, detail: invalid type detected: <class '_ast.Expr'>", "requestId": ""}
    ```
    
-   Troubleshooting method
    
    The preceding error log indicates a syntax error in the transformation configuration. This occurs when you use only the res\_log\_logstore\_pull, res\_rds\_mysql, or res\_oss\_file function. Resource functions cannot be used alone.
    
-   Solution
    
    You can use the e\_table\_map function together with the resource function. For more information, see [Resource functions](/help/en/sls/resource-functions#concept-1597682).
    

## References

-   For errors that occur when pulling data from another LogStore, see [LogStore data (dimension table) loading errors](/help/en/sls/how-can-i-fix-errors-that-occur-when-i-pull-logstore-data#concept-2070600).
    
-   For errors that occur when pulling data from OSS, see [OSS data loading errors](/help/en/sls/how-can-i-fix-errors-that-occur-during-data-pulls-from-oss#concept-2070584).
    
-   For syntax errors that occur when pulling data from RDS, see [RDS MySQL data loading syntax errors](/help/en/sls/how-do-i-fix-errors-in-the-syntax-used-to-load-data-from-apsaradb-rds-for-mysql#concept-2070603).
