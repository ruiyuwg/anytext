After a custom rule is triggered, a Function Compute function in the custom rule evaluates resources, calls the PutEvaluations operation of Cloud Config, and then returns the evaluation result. After you execute a custom rule, the evaluation result shows no data. To troubleshoot the issue, use one of the following methods:

-   Use ActionTrail
    
    Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com) and use the **event query** feature to view the invocation records of the [PutEvaluations](/help/en/cloud-config/latest/putevaluations#doc-api-Config-PutEvaluations) operation.
    
    If the invocation records of the [PutEvaluations](/help/en/cloud-config/latest/putevaluations#doc-api-Config-PutEvaluations) operation exist after you execute a custom rule, the custom rule was executed and no resources were matched. Otherwise, the custom rule failed to be executed.
    
    **Note** Select the **Singapore (Singapore)** region.
    
-   Use Function Compute
    
    If the logging feature is enabled for the function, you can view the invocation records of the [PutEvaluations](/help/en/cloud-config/latest/putevaluations#doc-api-Config-PutEvaluations) operation. For more information about how to enable the logging feature for a function, see [Configure logging](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#multiTask2691).
    
    After you execute a custom rule, print logs on the **Code** tab and view the invocation records of the [PutEvaluations](/help/en/cloud-config/latest/putevaluations#doc-api-Config-PutEvaluations) operation on the **Logs** tab. If the invocation records of the [PutEvaluations](/help/en/cloud-config/latest/putevaluations#doc-api-Config-PutEvaluations) operation exist, the custom rule was executed and no resources were matched. Otherwise, the custom rule failed to be executed.
