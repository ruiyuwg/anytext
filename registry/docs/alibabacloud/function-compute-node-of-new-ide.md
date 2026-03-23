DataWorks provides Function Compute nodes that allow you to use custom code to implement different business requirements. Function Compute nodes support periodic scheduling. This facilitates the running of scheduled tasks. In addition, Function Compute nodes can work together with other types of nodes to help build a complete data processing process. This topic describes how to create and use a Function Compute node.

## **Prerequisites**

-   The RAM user that you want to use is added to your workspace.
    
    If you want to use a RAM user to develop tasks, you must add the RAM user to your workspace as a member and assign the **Develop** or **Workspace Administrator** role to the RAM user. The Workspace Administrator role has more permissions than necessary. Exercise caution when you assign the Workspace Administrator role. For more information about how to add a member and assign roles to the member, see [Add workspace members and assign roles to them](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A serverless resource group is associated with your workspace. For more information, see the topics in the [Use serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) directory.
    
-   A Function Compute node is created before you develop a task on the node. For more information, see [Create a task node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Limits**

-   Limits on features: DataWorks allows you to invoke only event functions. If you want to periodically schedule an event processing function in DataWorks, you must create an event function rather than an HTTP function to process event requests in Function Compute. For information about more function types, see [Function type selection](/help/en/functioncompute/fc-2-0/product-overview/overview-30#section-jbn-mhz-1rp).
    
-   Limits on regions: You can use the features provided by Function Compute only in the workspaces that are created in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Hong Kong), Singapore, UK (London), US (Silicon Valley), US (Virginia), Germany (Frankfurt), Australia (Sydney), and India (Mumbai).
    

## **Precautions**

-   When you use a Function Compute node, you must invoke the event function to be executed based on the service that you created. You may not obtain the list of created services when you want to select a service. This issue may occur due to one of the following reasons:
    
    -   Your current account has overdue payments. In this case, top up your account and refresh the node configuration page to try again.
        
    -   Your account does not have the required permissions to obtain the service list. In this case, contact the Alibaba Cloud account to grant you the **fc:ListServices** permission or attach the **AliyunFCFullAccess** policy to your account. After the authorization is complete, refresh the node configuration page to try again. For more information, see [Manage permissions on the DataWorks services and the entities in the DataWorks console by using RAM policies](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#section-l7c-l71-hfv).
        
-   When you invoke a function to run a Function Compute node in DataWorks, if the running duration of the node exceeds one hour, set the Invocation Method parameter to Asynchronous Invocation for the node. For more information about asynchronous invocations, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-34#task-2134862).
    
-   If you develop a Function Compute node as a RAM user, the following system policies or custom policies must be attached to the RAM user.
    
    Policy type
    
    Description
    
    System policy
    
    Attach the `AliyunFCFullAccess`, `AliyunFCReadOnlyAccess`, and `AliyunFCInvocationAccess` policies to the RAM user. For more information about system policies, see [System policies](/help/en/functioncompute/fc-2-0/security-and-compliance/policies#section-gwn-ep0-3jg).
    
    Custom policy
    
    Grant the RAM user all the following permissions by using [custom policies](/help/en/functioncompute/fc-2-0/security-and-compliance/policies#section-fch-g6j-9qp) when you use **Function Compute 3.0**:
    
    -   `fc:GetAsyncTask`
        
    -   `fc:StopAsyncTask`
        
    -   `fc:GetService`
        
    -   `fc:ListServices`
        
    -   `fc:GetFunction`
        
    -   `fc:InvokeFunction`
        
    -   `fc:ListFunctions`
        
    -   `fc:GetFunctionAsyncInvokeConfig`
        
    -   `fc:ListServiceVersions`
        
    -   `fc:ListAliases`
        
    -   `fc:GetAlias`
        
    -   `fc:ListFunctionAsyncInvokeConfigs`
        
    -   `fc:GetStatefulAsyncInvocation`
        
    -   `fc:StopStatefulAsyncInvocation`
        
    
    When you use **Function Compute 2.0**, you do not need to grant the `fc:GetAsyncTask` and `fc:StopAsyncTask` permissions to the RAM user by using [custom policies](/help/en/functioncompute/fc-2-0/security-and-compliance/policies#section-fch-g6j-9qp).
    
    **Note**
    
    For information about more policies of Function Compute and sample policies, see the following topic or section:
    
    -   [Policies and sample policies](/help/en/functioncompute/fc-2-0/security-and-compliance/policies#title-eye-1au-lpu)
        
    -   [Sample policies](/help/en/functioncompute/fc/policies-and-sample-policies#section-x7q-4bn-yat)
        
    

## **1\. Use a Function Compute node to develop a task**

1.  On the configuration tab of the Function Compute node, configure the parameters that are described in the following table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1837872471/p855133.png)
    
    **Parameter**
    
    **Description**
    
    **Select Version Or Alias**
    
    Select the version or alias of the service that you want to use for subsequent function invocation. If you select Default Version, the Version parameter is displayed, and the value of the Version parameter is fixed as **LATEST**.
    
    -   Service version
        
        Function Compute provides the service-level versioning feature, which allows you to release one or more versions for a service. A version is similar to a service snapshot that contains the information such as the service settings, and the code and settings of functions that belong to the service. A version does not contain trigger information. When you release a version, the system generates a snapshot for the service and assigns a version number that is associated with the snapshot for future use. For more information about how to release a version, see [Manage versions](/help/en/functioncompute/fc-2-0/user-guide/manage-versions#task-2259910).
        
    -   Version alias
        
        Function Compute allows you to create an alias for a service version. An alias points to a specific version of a service. You can use an alias to perform version release, rollback, or canary release with ease. An alias is dependent on a service or a version. When you use an alias to access a service or function, Function Compute parses the alias into the version to which the alias points. This way, the invoker does not need to know the specific version to which the alias points. For information about how to create an alias, see [Manage aliases](/help/en/functioncompute/fc-2-0/user-guide/manage-aliases#task-2259911).
        
    
    **Select Function**
    
    Select a function that you want to invoke to run the Function Compute node. If no function is available, create a function. For more information, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#section-b9y-zn1-5wr).
    
    **Note**
    
    DataWorks allows you to invoke only **event functions**. If you want to periodically schedule an event processing function in DataWorks, you must create an event function rather than an HTTP function to process event requests in Function Compute. For information about more function types, see [Function type selection](/help/en/functioncompute/fc-2-0/product-overview/overview-30#section-jbn-mhz-1rp).
    
    In this example, the `para_service_01_by_time_triggers` function is selected. When you create such a function, use the sample code for **triggering a function at a scheduling time**. Code logic:
    
    ```
    import json
    import logging
    
    logger = logging.getLogger()
    
    def handler(event, context):
        logger.info('event: %s', event)
    
        # Parse the json
        evt = json.loads(event)
        triggerName = evt["triggerName"]
        triggerTime = evt["triggerTime"]
        payload = evt["payload"]
    
        logger.info('triggerName: %s', triggerName)
        logger.info("triggerTime: %s", triggerTime)
        logger.info("payload: %s", payload)
    
        return 'Timer Payload: ' + payload
    ```
    
    For more information about the sample code of other functions, see [Sample code](/help/en/functioncompute/fc-2-0/sample-code#concept-2243760).
    
    **Invocation Method**
    
    The method to invoke a function. Valid values:
    
    -   [Synchronous Invocation](/help/en/functioncompute/fc-2-0/user-guide/synchronous-invocations#task-2134831): When you synchronously invoke a function, an event directly triggers the function, and Function Compute executes the function and waits for a response. After the function is invoked, Function Compute returns the execution results of the function.
        
    -   [Asynchronous Invocation](/help/en/functioncompute/fc-2-0/user-guide/overview-34#task-2134862): When you asynchronously invoke a function, Function Compute immediately returns a response after the request is persisted instead of returning a response only after the request execution is complete.
        
        -   If your function has the logic that is time-consuming, resource-consuming, or error-prone, you can use this method to allow your programs to respond to traffic spikes in an efficient and reliable manner.
            
        -   We recommend that you use this method for Function Compute tasks of which the running duration exceeds one hour.
            
    
    **Variable**
    
    Assign values to the variables in the function based on your business requirements. The data in this field corresponds to the content on the Create New Test Event tab of the Configure Test Parameters panel for the function in the Function Compute console. To go to the Configure Test Parameters panel, go to the details page of the function in the Function Compute console and choose **Test Function** > **Configure Test Parameters** on the Code tab.
    
    In this example, assign the following parameters to the variables as values in the `para_service_01_by_time_triggers` function. The `${}` format is used to define the `bizdate` variable. You need to assign a value to the variable.
    
    ```
    {
        "payload": "payload1",
        "triggerTime": "${bizdate}",
        "triggerName": "triggerName1"
    }
    ```
    
2.  After you develop a task based on the Function Compute node, configure scheduling properties for the node to enable the system to periodically schedule the task. For more information, see [Scheduling configurations](/help/en/dataworks/user-guide/node-scheduling/).
    

## **2\. Deploy the Function Compute node and perform O&M operations**

1.  After the node code and scheduling properties are configured, deploy the Function Compute node to the production environment. For more information, see [Node or workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
2.  After the deployment is complete, go to the **Auto Triggered Nodes** page in **Operation Center** to view the node that is deployed and perform O&M operations on the node. The system periodically runs the node based on the scheduling properties that you configure. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
