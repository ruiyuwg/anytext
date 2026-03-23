You can create Cloud Assistant commands to perform routine tasks on Elastic Compute Service (ECS) instances. These tasks include running automated O&M scripts, polling processes, resetting user passwords, installing or uninstalling software, updating applications, and installing patches. The Cloud Assistant commands can be batch or PowerShell commands for Windows instances and shell commands for Linux instances. You can specify custom parameters as variables in the Cloud Assistant commands.

## Limits

-   You can retain 500 to 50,000 Cloud Assistant commands in an Alibaba Cloud region. This quota may increase based on your ECS usage. You can apply for a quota increase. For information about how to view and increase resource quotas, see [Manage quotas](/help/en/ecs/user-guide/quota-management). The commands that you create are counted against the Cloud Assistant command quota of your account.
    
    **Note**
    
    Enter a detailed reason for the quota increase application to increase the approval rate.
    
-   The maximum size of a Base64-encoded command script is 18 KB.
    

## **Procedure**

## Create a command in the ECS console

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  In the top navigation bar, select a region and resource group in which to create a Cloud Assistant command.
    
    **Note**
    
    After you select a resource group to which you want to add the command, you can manage permissions on the command at the resource group level. You can attach required Resource Access Management (RAM) policies to resource groups to manage permissions at the resource group level. For information about RAM policies and how to manage permissions at the resource group level, see the [Cloud Assistant command-specific sample custom policies](/help/en/ecs/user-guide/use-ram-to-implement-permission-control#e61242906capy) section of the "Use RAM to implement permission control" topic and [Classify resources into resource groups and grant permissions on the resource groups](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups).
    
    ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png)
    
3.  In the upper-right corner of the **ECS Cloud Assistant** page, click **Create/Run Command**.
    
4.  In the **Command Information** section of the Create Command panel, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Command Source**
    
    Select a command source.
    
    -   **Enter Command Content**: Create a command.
        
    -   **Select Saved Command**: Select an existing command.
        
    
    **Command Type**
    
    Select a command type.
    
    -   For Linux instances, select **Shell**, **Python**, or **Perl**.
        
    -   For Windows instances, select **Bat** or **PowerShell**.
        
    
    **Command content**
    
    Enter or paste the command content.
    
    For information about shell commands, see [View the system configurations of ECS instances](/help/en/ecs/user-guide/view-instance-configurations#concept-2417790).
    
    When you create a command, make sure that the syntax, logic, and algorithm of the command are correct.
    
    For example, to archive a file to the /backup directory (`mkdir /backup`) that you created on an instance, enter the following shell command:
    
    ```
    #!/bin/bash 
    OF=/backup/my-backup-$(date +%Y%m%d).tgz
    tar -cf $OF {{file}}
    ```
    
    **Note**
    
    In the preceding sample command, `{{file}}` is a custom parameter. When you run the command, you can set the custom parameter to the name of the file that you want to archive. Example: /app/usrcredential. You can use custom parameters in scenarios in which dynamic values and values that are shared across multiple commands are required. We recommend that you specify custom parameters for sensitive data or data that changes together with the environment, such as AccessKey pairs, instance IDs, authorization codes, time parameters, and critical system files.
    
    **Use Parameters**
    
    Specify whether to use parameters.
    
    If you turn on **Use Parameters**, specify custom parameters in the `{{key}}` format in the **Command content** field.
    
    **Note**
    
    You can specify up to 20 custom parameters in a single Cloud Assistant command.
    
    You can specify built-in environment parameters as custom parameters. When you run the command, the parameters are automatically specified by Cloud Assistant. You can specify the following built-in environment parameters:
    
    -   `{{ACS::RegionId}}`: the ID of the region.
        
    -   `{{ACS::AccountId}}`: the unique identifier (UID) of the Alibaba Cloud account.
        
    -   `{{ACS::InstanceId}}`: the ID of the instance.
        
        **Note**
        
        If you want to run the command on multiple instances and specify the `{{ACS::InstanceId}}` parameter as a built-in environment parameter, make sure that the version of Cloud Assistant Agent is not earlier than the following versions. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
        
        -   Linux: 2.2.3.309
            
        -   Windows: 2.1.3.309
            
        
    -   `{{ACS::InstanceName}}`: the name of the instance.
        
        **Note**
        
        If you want to run the command on multiple instances and specify the `{{ACS::InstanceName}}` parameter as a built-in environment parameter, make sure that the version of Cloud Assistant Agent is not earlier than the following versions. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
        
        -   Linux: 2.2.3.344
            
        -   Windows: 2.1.3.344
            
        
    -   `{{ACS::InvokeId}}`: the ID of the command task.
        
        **Note**
        
        If you want to specify the `{{ACS::InvokeId}}` parameter as a built-in environment parameter, make sure that the version of Cloud Assistant Agent is not earlier than the following versions. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
        
        -   Linux: 2.2.3.309
            
        -   Windows: 2.1.3.309
            
        
    -   `{{ACS::CommandId}}`: the ID of the command.
        
        **Note**
        
        If you want to specify the `{{ACS::CommandId}}` parameter as a built-in environment parameter when you call the [RunCommand](/help/en/ecs/api-runcommand#doc-api-Ecs-RunCommand) operation, make sure that the version of Cloud Assistant Agent is not earlier than the following versions. For more information, see [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).
        
        -   Linux: 2.2.3.309
            
        -   Windows: 2.1.3.309
            
        
    
    **Execution Plan**
    
    Select a command execution plan.
    
    -   **Immediate execution**: The command is immediately run after you click **Run** or **Run and Save**.
        
    -   **After the next startup of the system**: The command is run the next time the associated instances are started after you click **Run** or **Run and Save**.
        
    -   **After each system startup**: The command is run each time the associated instances are started after you click **Run** or **Run and Save**.
        
    -   **Run on Schedule**: The command is run at a specific interval, at a specific time, or on a schedule after you click **Run** or **Run and Save**. The following execution schedule options are available:
        
        -   **Run at Fixed Interval**: Use a rate expression to specify an interval at which you want to run the command. You can specify the interval in seconds, minutes, hours, or days. This option is suitable for scenarios in which you want to execute command execution tasks at a fixed interval.
            
            **Note**
            
            When you specify an interval, take note of the following limits:
            
            -   The specified interval can range from 60 seconds to 7 days and must be longer than the timeout period of the scheduled task.
                
            -   The interval is the amount of time that elapses between two consecutive executions. The interval is irrelevant to the amount of time that is required to run the command once. For example, you set the interval to 5 minutes, and the command requires 2 minutes to run once. Each time the command is run, the system waits for 3 minutes before it reruns the command.
                
            -   After you create a task, the task does not immediately run. For example, you set the interval to 5 minutes and create a task to run the command. The task runs 5 minutes after it is created.
                
            
        -   **Run Only Once at Specified Time**: Specify a point in time and a time zone to run the command only once.
            
            For example, if you set the **Execution time** parameter to **May 17, 2022, 17:30:50** and the **Time Zone** parameter to **(GMT+08:00) Asia/Shanghai**, the command was run only once at 17:30:50 on May 17, 2022 (UTC+8).
            
        -   **Run on Clock-based Schedule Cron Expression**: Use a cron expression to specify a schedule on which you want to run the command. Specify a schedule that is accurate to seconds, minutes, hours, day of the month, month, day of the week, or year, and select a time zone from the Time Zone drop-down list. The system calculates the schedule based on the cron expression and the time zone and runs the command as scheduled. This option provides flexibility and is suitable for scenarios in which you want to execute command tasks on a schedule. For more information about cron expressions, see [Cron expressions](/help/en/ecs/user-guide/cron-expressions#concept-64769-zh).
            
            **Note**
            
            The minimum interval must be 10 seconds or longer and cannot be shorter than the timeout period of scheduled executions.
            
            For example, if you set the **Execution Frequency** parameter to **0 0 12 ? \* WED 2022** and the **Time Zone** parameter to **(GMT+08:00) Asia/Shanghai**, the system runs the command at 12:00:00 every Wednesday in 2022 (UTC+8).
            
    
    **Command Name**
    
    Enter a name for the command.
    
    **Command Description**
    
    Enter a description for the command. We recommend that you enter identifiable information, such as the purpose of the command, to facilitate management and maintenance.
    
    **Username**
    
    Specify a username that you want to use to run the command on ECS instances.
    
    For security reasons, we recommend that you run Cloud Assistant commands as a regular user based on the principle of least privilege. For more information, see [Run Cloud Assistant commands as a regular user](/help/en/ecs/user-guide/run-cloud-assistant-commands-as-a-regular-user#task-2041769).
    
    By default, Cloud Assistant commands are run by the root user on Linux instances and by the system user on Windows instances.
    
    **Execution Path**
    
    Specify an execution path for the command. Different default execution paths are provided based on the operating system of instances on which the command is run.
    
    -   For Linux instances, the default execution path is the /home directory of the root user.
        
    -   For Windows instances, the default execution path is C:\\Windows\\system32.
        
    
    **Timeout**
    
    Specify a **timeout period** for running the command on instances. If a task that runs the command times out, Cloud Assistant forcefully terminates the task process.
    
    Unit: seconds. Default value: 60. Minimum value: 10. If you set the **Timeout** parameter to a value that is smaller than 10, the system changes the value to 10 to ensure that the command can be run.
    
    **Tag**
    
    Specify a tag that you want to add to the command for subsequent classification and management. **Tag key**: the key of the tag. **Tag value**: the value of the tag.
    
    **Note**
    
    -   If you select instances and click **Run and Save**, the system adds the tag to the command and the command execution task.
        
    -   If you select instances and click **Run**, the system adds the tag only to the command.
        
    
5.  In the **Select Instance** and **Select Managed Instances** sections, select the instances on which you want to run the command.
    
    **Note**
    
    A managed instance is an instance that is not provided by Alibaba Cloud but is managed by Cloud Assistant. For more information, see [Alibaba Cloud managed instances](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud#task-2036164).
    
6.  Click **Save**.
    

## Create a command by using Alibaba Cloud CLI

### **Sample request**

Call the CreateCommand operation to create a Cloud Assistant command named update that is used to update the operating system of instances.

```
aliyun ecs CreateCommand --RegionId 'cn-hangzhou' \
--CommandContent 'eXVtIHVwZGF0ZSAteQ==' \
--Type 'RunShellScript' \
--Name 'update' \
--Description 'update' \
--output cols=CommandId
```

**Note**

The values that are enclosed in single quotation marks ('') are sample values of the parameters. Specify the parameters based on actual conditions.

The following table describes the main parameters. For more information about the parameters, see [CreateCommand](/help/en/ecs/api-createcommand#doc-api-Ecs-CreateCommand).

**Parameter**

**Example**

**Description**

RegionId

cn-hangzhou

The ID of the region in which you want to create the command.

Name

update

The name of the command.

Type

RunShellScript

The type of the command.

-   For Linux instances, set this parameter to RunShellScript.
    
-   For Windows instances, set this parameter to RunBatScript or RunPowerShellScript.
    

CommandContent

eXVtIHVwZGF0ZSAteQ==

The Base64-encoded content of the command.

Description

update

The description of the command.

### **Sample response**

```
CommandId
---------
c-hz018qng4on****
```

## What to do next

After you create a command, you can view the details of the command on the **My Commands** tab. You can run a command on specific instances. For more information, see [Run a command](/help/en/ecs/user-guide/run-a-command#concept-e5q-x3t-q2b).

**Note**

If you turn on Use Parameters when you create a command, you must enter parameter values in the **Command Parameters** fields when you run the command.

## References

You can call an API operation to create a Cloud Assistant command. For more information, see [CreateCommand](/help/en/ecs/api-createcommand#doc-api-Ecs-CreateCommand).
