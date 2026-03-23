When you collect logs, the logs must be of the same type. If the logs are different types, you can use the `Schema-On-Write` and `Schema-On-Read` approaches to process and collect the logs.

## **Background information**

Java logs are program logs that contain normal information and errors such as stack exceptions. Java logs can be of the following types:

-   Multi-line WARNING logs
    
-   Single-line INFO logs
    
-   Key-value DEBUG logs
    

```
[2018-10-01T10:30:31,000] [WARNING] java.lang.Exception: another exception happened
    at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
    at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
    at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
[2018-10-01T10:30:32,000] [INFO] info something
[2018-10-01T10:30:33,000] [DEBUG] key:value key2:value2
```

## **Solutions**

-   `Schema-On-Write`
    
    -   **Scenario**: If you are familiar with the types of logs that you want to collect and want to format the logs when you collect the logs, you can use this approach.
        
    -   **Description**: You must apply multiple Logtail configurations to the logs that you want to collect and specify different regular expressions for the Logtail configurations. This way, you can collect different types of logs. By default, you can use only one Logtail configuration to collect logs from a log file. You can also use multiple Logtail configurations to collect logs from a log file. For more information, see [How do I collect multiple copies of logs in a file?](/help/en/sls/what-do-i-do-if-i-want-to-use-multiple-logtail-configurations-to-collect-logs-from-a-log-file#concept-2180900)
        
-   `Schema-On-Read`
    
    -   **Scenario**: If you want to analyze up to tens of millions of logs of different types and format the logs when you query and analyze the logs, you can use this approach.
        
    -   **Description**: You must use a regular expression that can match common fields of the required logs.
        
        1.  For example, if you want to collect multi-line logs, you can specify a regular expression in which the timestamp and level of the logs are specified to match the beginning of the first line of a log, and the rest of the log is included in the message field. For this example, you can specify `[2018-10-01T10:30:32,000] [INFO]` as the regular expression and the value of the message field is `info something`.
            
        2.  If you want to analyze the content in the message field, you must create an index for the message field and use a regular expression to extract the content that you want to analyze from the message field. For more information about how to create indexes, see [Create indexes](/help/en/sls/create-indexes). For more information about the extraction based on regular expressions, see [e\_regex](/help/en/sls/value-extraction-functions#section-1rn-crw-ur9).
