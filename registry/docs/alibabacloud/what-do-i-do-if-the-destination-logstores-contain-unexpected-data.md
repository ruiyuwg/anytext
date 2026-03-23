After you distribute transformed data to the destination LogStore, you may find unexpected data. This topic explains how to resolve this issue.

The source LogStore, named website\_log, contains 5,000 log entries: 1,000 with SourceIP 192.0.2.54, 1,000 with SourceIP 192.0.2.28, 1,000 with SourceIP 192.0.2.136, and 2,000 with other SourceIP values. You transform these logs and distribute them to different destination LogStores.

-   Transformation requirements
    
    -   Distribute log entries with SourceIP 192.0.2.54 to the 54\_log LogStore.
        
    -   Distribute log entries with SourceIP 192.0.2.28 to the 28\_log LogStore.
        
    -   Distribute log entries with SourceIP 192.0.2.136 to the 136\_log LogStore.
        
-   Expected results
    
    -   The 54\_log LogStore contains 1,000 log entries with SourceIP 192.0.2.54.
        
    -   The 28\_log LogStore contains 1,000 log entries with SourceIP 192.0.2.28.
        
    -   The 136\_log LogStore contains 1,000 log entries with SourceIP 192.0.2.136.
        
-   Transformation statements
    
    ```
    e_if(e_search("SourceIP==192.0.2.54"),    
      e_output(name="54-target",
                 project="sls-test",
                 logstore="54_log"))
    e_if(e_search("SourceIP==192.0.2.28"),
        e_output(name="28-target",
                 project="sls-test",
                 logstore="28_log"))
    e_if(e_search("SourceIP==192.0.2.136"),
        e_output(name="136-target",
                 project="sls-test",
                 logstore="136_log"))
    ```
    
-   Storage target![存储目标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2039709261/p284172.png)
    
-   Transformation results
    
    -   The LogStore named "54\_log" contains 3,000 entries, some of which have SourceIP values other than the expected 192.0.2.54.
        
    -   The 28\_log LogStore contains 1,000 log entries with SourceIP 192.0.2.28. This matches expectations.
        
    -   The 136\_log LogStore contains 1,000 log entries with SourceIP 192.0.2.136. This matches expectations.
        
-   Root Cause Analysis
    
    Simple Log Service distributes transformed logs in the following way: Logs that match an e\_output condition are sent to the specified destination LogStore. All other logs processed by the DSL, but not explicitly dropped, are sent to storage target 1 (in this case, the 54\_log LogStore). Storage target 1 is the default target.
    
-   Solution
    
    You can add \`e\_drop()\` to your transformation statements to discard logs that do not match any condition.
    
    ```
    e_if(e_search("SourceIP==192.0.2.54"),    
      e_output(name="54-target",
                 project="sls-test",
                 logstore="54_log"))
    e_if(e_search("SourceIP==192.0.2.28"),
        e_output(name="28-target",
                 project="sls-test",
                 logstore="28_log"))
    e_if(e_search("SourceIP==192.0.2.136"),
        e_output(name="136-target",
                 project="sls-test",
                 logstore="136_log"))
    e_drop()
    ```
