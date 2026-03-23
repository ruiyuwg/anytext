If you need to check whether the request sent to the server is correct and do not want to perform actual operations on cloud resources, you can simulate a call in Alibaba Cloud CLI.

## Description of the --dryrun option

To help you check whether the request parameters are valid, Alibaba Cloud CLI provides the `--dryrun` option. You can use this option to display and check requests. The `--dryrun` option is mutually exclusive with specific command line options. You cannot simulate calls when you use the following command line options:

-   `--pager`: aggregates the results of an operation that involves paging.
    
-   `--waiter`: polls the return results.
    

## **Example**

1.  Run the following command to check the request information generated when the `DescribeInstances` operation of Elastic Compute Service (ECS) is called. For more information about this operation, see [DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances).
    
    ```
    aliyun ecs DescribeInstances --dryrun
    ```
    
2.  The following sample code provides an example of returned results, including identity credential, region, and API version.
    
    ```
    Skip invoke in dry-run mode, request is:
    ------------------------------------
    POST /?AccessKeyId=AccesskeyId&Action=DescribeInstances&Format=JSON&RegionId=cn-hangzhou&Signature=ni5DWOuI9G0OnKKKB5gTNg%2BS0UU%3D&SignatureMethod=HMAC-SHA1&SignatureNonce=27373c2fcad641b28e355931f408f2ce&SignatureType=&SignatureVersion=1.0&Timestamp=2024-06-27T09%3A35%3A31Z&Version=2014-05-26 HTTPS/1.1
    Host: ecs.cn-hangzhou.aliyuncs.com
    Accept-Encoding: identity
    Content-Type: application/x-www-form-urlencoded
    x-acs-action: DescribeInstances
    x-acs-version: 2014-05-26
    x-sdk-client: golang/1.0.0
    x-sdk-core-version: 0.0.1
    x-sdk-invoke-type: common
    ```
