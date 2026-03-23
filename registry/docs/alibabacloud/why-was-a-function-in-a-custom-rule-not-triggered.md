To troubleshoot the issue that may occur when you create a custom rule or re-execute a custom rule, perform the following steps:

## Procedure

1.  Enable the logging feature for the function. This way, you can view the execution logs of the function.
    
    For more information about how to enable the logging feature, see [Configure logging](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#multiTask2691).
    
2.  On the **Logs** tab, check whether the invocation record exists.
    
    -   If the invocation record exists, the function in the custom rule was triggered.
        
    -   If the invocation record does not exist, the function was not triggered or failed to be triggered. Perform [Step 3](#step-lj9-9m3-wg9).
        
    
3.  To check whether the function in the custom rule was triggered, call the [GetConfigRule](/help/en/cloud-config/latest/getconfigrule#doc-api-Config-GetConfigRule) operation if you use an ordinary account or call the [GetAggregateConfigRule](/help/en/cloud-config/latest/getaggregateconfigrule#doc-api-Config-GetAggregateConfigRule) operation if you use a management account or a member account.
    
    -   If the value of the **LastFailedEvaluationTimestamp** parameter is empty or earlier than the point in time when the custom rule was executed to evaluate the resources, the function was not triggered. Wait for a few minutes and call the function to query the value again.
        
    -   If the value of the **LastFailedEvaluationTimestamp** parameter is later than the point in time when the custom rule was executed to evaluate the resources, view the values of the **LastErrorCode** and **LastErrorMessage** parameters to obtain the failure cause and solution.
        
        **LastErrorCode**
        
        **LastErrorMessage**
        
        **Cause**
        
        **Solution**
        
        ComponentClientException
        
        InvalidArgument
        
        The **Request Type** parameter of the function is set to **HTTP Requests**.
        
        1.  Delete the function whose **Request Type** parameter is set to **HTTP Requests**.
            
            For more information, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-9jy-hkj-g8s).
            
        2.  Create a function and set the **Request Type** parameter of the function to **Event Requests**.
            
            For more information, see [Create a function](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-b9y-zn1-5wr).
            
        
        AccessDenied
        
        The RAM user does not have the required permissions.
        
        Make sure that you grant the required permissions on Function Compute to the RAM user that is used to create the custom rule.
        
        ServiceNotFound
        
        The service that you configured in the custom rule does not exist.
        
        1.  Delete the custom rule that has a function whose Alibaba Cloud Resource Name (ARN) is invalid.
            
            For more information, see [Delete a rule](/help/en/cloud-config/latest/delete-a-rule#task-2066840).
            
        2.  Create a custom rule, configure a function in the custom rule, and then specify a valid ARN for the function.
            
            For more information, see [Create a custom rule based on Function Compute](/help/en/cloud-config/latest/create-a-custom-rule#task-2422933).
            
        
        FunctionNotFound
        
        The function that you configured in the custom rule does not exist.
        
        1.  Delete the custom rule that has a function whose Alibaba Cloud Resource Name (ARN) is invalid.
            
            For more information, see [Delete a rule](/help/en/cloud-config/latest/delete-a-rule#task-2066840).
            
        2.  Create a custom rule, configure a function in the custom rule, and then specify a valid ARN for the function.
            
            For more information, see [Create a custom rule based on Function Compute](/help/en/cloud-config/latest/create-a-custom-rule#task-2422933).
            
        
        ComponentServerException
        
        InternalServerError
        
        An error occurred in Function Compute.
        
        [Submit a ticket](https://smartservice.console.alibabacloud.com) to contact the technical support of Function Compute.
        
        Timeout
        
        The operation to evaluate resources by using the function timed out.
        
        Execute the custom rule to manually re-evaluate resources.
        
        For more information, see [Manually re-evaluate resources](/help/en/cloud-config/latest/manually-re-evaluate-resources#task-2066840).
