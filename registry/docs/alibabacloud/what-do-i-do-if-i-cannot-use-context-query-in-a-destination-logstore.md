After you distribute transformed data to the destination Logstore, you may fail to use context query in the Logstore. To use context query in this situation, you must disable the filtering of context information in the configuration of the data transformation task.

-   Cause
    
    When fields are added to or deleted from raw logs during data transformation, log groups are reassembled, and the context information of logs in the log groups may become invalid. In this case, Simple Log Service filters out all context information of logs. As a result, you cannot use context query in the destination Logstore.
    
-   Solution
    
    When you create a data transformation task or modify an existing data transformation task, specify `system.control.filter_pack_id:false` in **Advanced Parameter Settings** to disable the filtering of context information. ![config](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8483649361/p368683.png)
    
    -   Parameter description: specifies whether to filter out the context information of logs.
        
    -   Valid values:
        
        -   true: This is the default value. If you use this value, Simple Log Service filters out the context information, and you cannot use context query in the destination Logstore.
            
        -   false: If you use this value, Simple Log Service tries to retain context information as it was, and you can use context query in the destination Logstore. If a data transformation task is used only to replicate data, the context information of raw logs is retained as it was.
            
    

For more information, see [Contextual query](/help/en/sls/contextual-query#task-xj1-sqc-ry).
