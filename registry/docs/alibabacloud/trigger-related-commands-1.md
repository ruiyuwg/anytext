This topic describes trigger-related commands in Function Compute Command Line Interface (fcli).

## Prerequisites

In the folder where the executable file is located, run the `fcli shell` command to enter the interactive mode.

## Create a trigger (mkt)

### **Commands**

-   `-r string` or `--invocation-role string`: sets the trigger role.
    
-   `-s string` or `--source-arn string`: specifies the Alibaba Cloud Resource Name (ARN) of the event source, for example, acs:oss:cn-shanghai:12345678:myBucketName.
    
-   `-c string` or `--trigger-config string`: sets the trigger configuration file.
    
-   `-t string` or `--type string`: specifies the trigger type. Default value: oss.
    

### **Examples**

-   Create an Object Storage Service (OSS) trigger
    
    ```
    >>> mkt myFunction/myFunctionTrigger -t oss -r acs:ram::12345678:role/AliyunOSSEventNotificationRole -s acs:oss:cn-shanghai:12345678:myOssBucket -c code/ossTrigger.yaml
    //The YAML file contains the following triggerConfig content:
        events:
            - oss:ObjectCreated:PutObject
            - oss:ObjectRemoved:DeleteObject
        filter:
            key:
                prefix: myPrefix
                suffix: mySuffix                   
    ```
    
-   Create an HTTP trigger
    
    ```
    >>> mkt myFunction/myFunctionTrigger -t http  -c code/httpTrigger.yaml
    //The YAML file contains the following triggerConfig content:
      authType: anonymous
      methods:
        - GET                   
    ```
    

## Update a trigger (upt)

-   `-r string` or `--invocation-role string`: sets the trigger role.
    
-   `-s string` or `--source-arn string`: specifies the Alibaba Cloud Resource Name (ARN) of the event source, for example, acs:oss:cn-shanghai:12345678:myBucketName.
    
-   `-c string` or `--trigger-config string`: sets the trigger configuration file.
    
-   `-t string` or `--type string`: specifies the trigger type. Default value: oss.
    

```
>>> upt myFunction/myFunctionTrigger -t oss -r acs:ram::account_id:role/AliyunOSSEventNotificationRole -s acs:oss:cn-region:account_id:bucketName -c code/trigger.yaml                   
```

## References

-   [List files in the current directory (ls)](/help/en/functioncompute/fc-2-0/common-commands#section-m2t-xkm-gyc)
    
-   [View resource details (info)](/help/en/functioncompute/fc-2-0/common-commands#section-9tp-yjp-gmy)
    
-   [Delete resources (rm)](/help/en/functioncompute/fc-2-0/common-commands#section-bh0-a3h-cc1)
