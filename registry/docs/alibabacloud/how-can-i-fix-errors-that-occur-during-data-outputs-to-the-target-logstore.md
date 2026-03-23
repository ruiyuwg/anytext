This topic describes common causes of errors that occur when data transformation results are written to a target Logstore and explains how to troubleshoot these errors.

## **How it works**

After log events are transformed, they are sent to a preconfigured target Logstore. The Log Service Domain-Specific Language (DSL) engine reads a batch of source logs at a time, which can range from one to nearly ten thousand entries. Instead of outputting each log immediately after transformation, the engine first stores the processed data in a cache. The engine outputs all transformed data at once only after the entire source batch is processed.![Target Logstore output error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3553749951/p59321.png)

Errors at this stage are typically caused by abnormal access to the target Logstore. Possible causes include the following:

-   The target Logstore configuration is incorrect.
    
-   The target Logstore information has changed.
    
-   A network error occurred.
    

Error impact:

-   If an error occurs while writing to the target Logstore, the data transformation job continuously retries the operation until it succeeds or you manually stop the job. If the retry succeeds, the job continues to run as normal with no data loss or duplication.
    
-   If an error occurs after some data has been written, the job saves a breakpoint and continues to retry the operation. For example, this can happen when two output targets are configured, and the write operation succeeds for one target but fails for the other. If the retry operation succeeds, no data loss or duplication occurs. If you stop and restart the job at this point, it resumes from the saved breakpoint. This prevents data loss but may cause data duplication.
    

## Common error troubleshooting

### **The target Logstore uses an invalid AccessKey.**

An invalid AccessKey can be caused by an invalid AccessKey ID or an invalid AccessKey secret.

-   Error log:
    
    ```
    # Invalid AccessKeyId
    {
      "errorCode": "Unauthorized", 
      "errorMessage": "AccessKeyId not found: LTAI****************"
    }
    # Invalid AccessKeySecret
    { 
      "errorCode": "SignatureNotMatch", 
      "errorMessage": "signature uJfAJbc0ji04gb+cXhh0qWt****= not match"
    }
    ```
    
-   Troubleshooting method:
    
    Check the job configuration to verify that the AccessKey ID and AccessKey secret for the target Logstore are valid and correct.
    

### **The target project does not exist**

-   Error log:
    
    ```
    {
      "errorCode": "ProjectNotExist", 
      "errorMessage": "The Project does not exist : your_project_name"
    }
    ```
    
-   Root cause:
    
    The error log shows the error `Project does not exist`, which has three possible causes:
    
    -   The target project name in the job configuration is incorrect.
        
    -   The target project name is correct, but the project was deleted while the data transformation job was running.
        
    
-   Troubleshooting method:
    
    -   Check whether the target project name in the job configuration is correct.
        
    -   Check whether the target project has been deleted.
        
-   The output target does not exist.
    
    Sample transformation rule:
    
    ```
    e_coutput("target1")
    ```
    
    -   Error log:
        
        ```
        {
          "errorMessage": "transform_data: output target target1 is not found in configurations"
        }
        ```
        
    -   Root cause:
        
        The preceding DSL rule outputs log events to `target1`, but the error log indicates that `target1 is not found in configurations`. This means that the configuration for the transformation rule does not define a target project and Logstore that are associated with `target1`.
        
    -   Troubleshooting method:
        
        Check the DSL rule configuration and ensure that all storage targets referenced in the rule are defined in the configuration.
        
    

### **The target Logstore information has changed**

-   Root cause:
    
    You may have configured the correct target Logstore information, and the job may have already processed some data. However, the target Logstore information changed during data transformation. As a result, the original configuration cannot be used to access the Logstore.
    
-   Error log:
    
    Changes to the target Logstore information typically occur in the following two scenarios:
    
    -   The target Logstore was deleted.
        
        ```
        {
          "errorMessage": "Logstore [logstore_name] does not exist."
        }
        ```
        
    -   The AccessKey for the target Logstore changed.
        
        ```
        # Invalid AccessKeyId
        {
          "errorCode": "Unauthorized", 
          "errorMessage": "AccessKeyId not found: LTAI****************"
        }
        # Invalid AccessKeySecret
        { 
          "errorCode": "SignatureNotMatch", 
          "errorMessage": "signature uJfAJbc0ji04gb+cXhh0qWt****= not match"
        }
        ```
        
    
-   Troubleshooting method:
    
    -   Check whether the target Logstore was deleted.
        
    -   Check whether the AccessKey for the target Logstore has changed.
        
-   Network error.
    
    -   Error log:
        
        ```
        {
          "errorCode": "LogRequestError",
          "errorMessage": "HTTPConnectionPool(host='your_host', port=80): Max retries exceeded with url: your_url (Caused by NewConnectionError: Failed to establish a new connection: [Errno 11001] getaddrinfo failed'"
        }
        ```
        
    -   Troubleshooting method:
        
        Check whether the network connection is stable.
