If a task no longer meets your business requirements, you can modify its execution information, such as the command content, scheduled execution, and the associated Elastic Compute Service (ECS) or managed instances. This topic describes how to modify task execution information in the Cloud Assistant console.

## **Limits**

You can modify task execution information only if the following conditions are met:

-   The task runs according to one of the following execution plans: **Run on Schedule**, **After the next startup of the system**, or **After each system startup**.
    
-   You can modify tasks only in the following execution statuses:
    
    -   Pending: The command is being verified or sent. The overall task state is Pending if the task is in the Pending state on at least one instance.
        
    -   Running: The command is running on the instances. The overall task state is Running if the task is in the Running state on at least one instance.
        
    -   Scheduled: The scheduled command is sent and is waiting to run. The overall task state is Scheduled if the task is in the Scheduled state on at least one instance.
        
    -   Stopping: The task is being stopped. The overall task state is Stopping if the task is in the Stopping state on at least one instance.
        
-   Before you modify task execution information, such as the command content, custom parameters, and execution frequency, the associated ECS instances or managed instances must meet the following conditions:
    
    -   The instances are in the **Running** state.
        
    -   Cloud Assistant Agent is installed on the instances. For more information, see [Install agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
        
    -   The Cloud Assistant Agent version is one of the following versions or later. This condition does not apply if you only add ECS instances or managed instances to the task.
        
        -   Linux: 2.2.3.541
            
        -   Windows: 2.1.3.541
            
            If the `InvalidOperation.CloudAssistantVersionUnsupported` error code is returned when you modify the task, you must upgrade Cloud Assistant Agent to the latest version. For more information, see [Upgrade or disable automatic upgrades for Cloud Assistant Agent](/help/en/ecs/user-guide/upgrade-or-disable-upgrades-for-the-cloud-assistant-agent#task-1958118).
            
-   When you add ECS instances or managed instances to a scheduled task, the total number of instances cannot exceed 100.
    
-   If you modify the command content (`CommandContent`) and created the task by calling the [InvokeCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-invokecommand) or [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand) operation with the `KeepCommand` parameter set to `true`, a new command is created and permanently retained. This new command consumes your Cloud Assistant command quota.
    
-   You can save from 500 to 50,000 Cloud Assistant commands in an Alibaba Cloud region. This quota may increase based on your ECS usage. You can also request a quota increase. For more information about how to query and increase quotas, see [Manage ECS quotas](/help/en/ecs/user-guide/quota-management).
    
-   If a task is for a public Cloud Assistant command, you cannot modify the command content (`CommandContent`).
    
-   A Resource Access Management (RAM) user must have the required permissions to modify task execution information. For more information, see [Modify the execution information of a scheduled task](/help/en/ecs/user-guide/use-ram-to-implement-permission-control#248cb15924jsk).
    

## **Procedure**

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Command Execution Results** tab, find the task you want to modify and click **Modify Execution Information** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2756801171/p765806.png)
    
4.  In the **Modify Execution Information** panel, you can modify the execution parameters.
    
    1.  Parameters related to the command content.
        
        **Modify Command Content** is enabled by default. You can modify the command content.
        
        **Use Parameters** is disabled by default. If you enable this option, you can specify built-in environment parameters as custom parameters. When the command runs, you do not need to manually assign values to the parameters. Cloud Assistant automatically replaces the parameters with the corresponding environment values, such as instance IDs and region IDs.
        
    2.  You can select a **Execution Schedule** and set its parameters.
        
        **Note**
        
        If the task's execution plan is **After the next startup of the system** or **After each system startup**, you cannot select a scheduled execution method.
        
        **Scheduled Execution Method**
        
        **Description**
        
        **Run at Fixed Interval**
        
        Set the **Execution Frequency** to a value from 60 seconds to 7 days. This setting uses a rate expression, and the value must be greater than the timeout specified for the task.
        
        **Run Only Once at Specified Time**
        
        Set the execution time and time zone.
        
        **Run on Clock-based Schedule**
        
        Set the **Execution Frequency** to a value that is at least 10 seconds and is also greater than or equal to the timeout specified for the task. This setting is based on a cron expression.
        
    3.  In the **Select Instance** and **Select Managed Instances** sections, you can select the instances to add to the task.
        
5.  Click **Modify**.
    
    After the task is modified, it runs based on the new information.
    

## **References**

You can also modify task execution information by calling the [ModifyInvocationAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinvocationattribute) API.
