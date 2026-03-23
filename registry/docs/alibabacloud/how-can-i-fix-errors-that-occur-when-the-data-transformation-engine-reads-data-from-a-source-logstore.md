This topic describes the causes of read errors that occur when the data transformation service reads data from a source Logstore and explains how to troubleshoot these errors.

After the data transformation engine starts, it reads data from the source Logstore. During the transformation process, the engine continuously reads data in a stream.![Source Logstore read error](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0553749951/p59308.png)

Errors at this stage occur mainly because the source Logstore is inaccessible. Possible causes include the following:

-   Incorrect source Logstore configuration.
    
-   The source Logstore information has changed.
    
-   A network error.
    

Error impact:

-   If a read error occurs, the data transformation job retries the operation until it succeeds or you manually stop the job. After a successful retry, the job resumes normal operation.
    
-   The job saves the last successful breakpoint and continues to retry the operation. After a successful retry, the job resumes reading from the saved breakpoint. This process prevents data loss or duplication.
    

## Troubleshoot common errors

-   The AccessKey ID and AccessKey secret configured for the source Logstore are invalid.
    
    -   Error log:
        
        ```
        {
          "errorCode": "Unauthorized", 
          "errorMessage": "AccessKeyId not found: LTAI****************"
        }
        { 
          "errorCode": "SignatureNotMatch", 
          "errorMessage": "signature uJfAJbc0ji04gb+cXhh0qWt****= not match"
        }
        ```
        
    -   Troubleshooting:
        
        Verify that the AccessKey ID and AccessKey secret for the source Logstore are correct.
        
-   The source Logstore information has changed.
    
    The source Logstore was configured correctly, and the data transformation job was running. However, if the Logstore information changes during the process, the job can no longer access the Logstore using the original configuration.
    
    -   Error log:
        
        The source Logstore information can change in the following ways:
        
        -   The source Logstore is deleted.
            
            ```
            {
              "errorMessage": "Logstore [logstore_name] does not exist."
            }
            ```
            
        -   The AccessKey for the source Logstore is changed.
            
            ```
            {
              "errorCode": "Unauthorized", 
              "errorMessage": "AccessKeyId not found: LTAI****************"
            }
            { 
              "errorCode": "SignatureNotMatch", 
              "errorMessage": "signature uJfAJbc0ji04gb+cXhh0qWt****= not match"
            }
            ```
            
        
    -   Troubleshooting:
        
        -   Verify whether the source Logstore was deleted.
            
        -   Verify whether the AccessKey for the source Logstore has changed.
            
    
-   Network error.
    
    -   Error log:
        
        ```
        {
          "errorCode": "LogRequestError",
          "errorMessage": "HTTPConnectionPool(host='your_host', port=80): Max retries exceeded with url: your_url (Caused by NewConnectionError: Failed to establish a new connection: [Errno 11001] getaddrinfo failed'"
        }
        ```
        
    -   Troubleshooting:
        
        Verify your network connection.
        
-   Data cannot be read from the source Logstore.
    
    This issue does not generate an error message. For more information, see [Troubleshoot common errors](/help/en/sls/troubleshooting-overview#section-8q0-aw4-iz6).
