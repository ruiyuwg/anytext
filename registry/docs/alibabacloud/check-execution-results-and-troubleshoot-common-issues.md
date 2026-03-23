Executing a Cloud Assistant command is similar to running a command after logging in to an instance. A command succeeds only if all prerequisites are met. After running a command, check its execution result and status to verify that the operation completed successfully. If the execution fails, you can use the error message to diagnose and resolve the issue.

## Background information

A command can have different execution statuses and results due to various issues, such as missing dependencies on an ECS instance, network anomalies, command syntax errors, script debugging failures, or an abnormal instance state. You can view the error information in the execution results on the console or using an API to diagnose and resolve the issue.

## **View execution results**

## Console

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Command Execution Result** tab, view the command execution results.
    
    -   If the command was successful, view the output in the execution results.
        
        1.  Find the execution result with a **Successful** status.
            
        2.  In the **Actions** column, click **View**.
            
        3.  On the **Instances** page, go to the **Task Completed** tab to view the result.
            
            ![执行成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1110775571/p907694.png)
            
    -   If the command failed, view the error message in the execution results to diagnose and resolve the issue.
        
        1.  Find the command execution result with an **Execution Status** of **Execution failed**.
            
        2.  In the **Actions** column, click **View**.
            
        3.  On the **Execution failed** tab of the **Instances** page, view the error message.
            
            For common error messages and recommended solutions, see [Common execution failure errors and recommended solutions](#section-ar5-j06-zre).
            
            ![执行失败](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3494858471/p907695.png)
            
    -   View the output of a scheduled task.
        
        1.  Find the command execution result with an **Execution Status** of **Scheduled**.
            
        2.  In the **Actions** column, click **View**.
            
        3.  On the **Instances** page, view the command execution result.
            
    

## CLI

For instructions on how to use Alibaba Cloud CLI, see [Use Alibaba Cloud CLI to manage Alibaba Cloud resources](/help/en/cloud-shell/use-alibaba-cloud-cli-to-manage-alibaba-cloud-resources).

1.  Obtain the command execution ID (InvokeId) from the response of the [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand#DAS) or [InvokeCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-invokecommand#DAS) operation.
    
2.  Enter the InvokeId and the region ID (RegionId) of the ECS instance to query the command execution result. The following example uses the China (Shanghai) region. For the IDs of other regions, see [Regions and zones](/help/en/ecs/user-guide/regions-and-zones#concept-2459516).
    
    -   Call the `DescribeInvocations` operation to view the execution status of the command.
        
        ```
        aliyun ecs DescribeInvocations --RegionId cn-shanghai --InvokeId t-sh054h*****
        ```
        
    -   Call the `DescribeInvocationResults` operation to view the execution result of the command.
        
        ```
        aliyun ecs DescribeInvocationResults --RegionId cn-shanghai  --InvokeId t-sh054h******
        ```
        

## API

1.  Obtain the command execution ID (InvokeId) from the response of the [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand#DAS) or [InvokeCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-invokecommand#DAS) operation.
    
2.  In the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations#DAS) or [DescribeInvocationResults](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocationresults#DAS) operation, enter the InvokeId and the [region ID](/help/en/ecs/user-guide/regions-and-zones#concept-2459516) of the ECS instance to query the command execution result.
    

## Execution failure errors and recommended solutions

### **Common errors**

**Error code**

**Error message**

**Recommended solution**

InstanceNotRunning

The instance was not in the running state when the task was created.

Make sure that the instance is running.

InstanceRestarted

The instance was restarted during task execution.

Do not restart the instance during task execution.

ClientNotRunning

The Cloud Assistant Agent is not running.

The Cloud Assistant Agent is stopped or not installed. Start or install the Cloud Assistant Agent.

1.  Check whether the Cloud Assistant Agent process is running.
    
    -   For Linux, run the following command.
        
        ```
        ps -ef |grep aliyun-service
        ```
        
    -   For Windows, check whether the aliyun\_assist\_service process exists in Task Manager.
        
2.  If the process does not exist, start the Cloud Assistant Agent.
    
    -   For Linux, run the following command.
        
        ```
        # For Linux systems that support systemctl
        systemctl start aliyun.service
        
        # For Linux systems that do not support systemctl
        /etc/init.d/aliyun-service start
        ```
        
    -   For Windows, start the Aliyun Assist Service in the Services Manager.
        

**Note**

If the Cloud Assistant Agent still fails to start, you can reinstall it. For more information, see [Install the Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#concept-wtg-32x-ydb).

ClientNetworkBlocked

The network environment of the instance is abnormal.

1.  Run the following command to check network connectivity. If the ID of the current instance is returned, the network is connected.
    
    ```
    curl https://{region-id}.axt.aliyun.com/luban/api/instance/instance-id
    ```
    
2.  If the ID of the current instance is not returned, check the security group, firewall, DNS settings, and route table for network issues. You must allow outbound traffic on TCP port 443, TCP port 80, and UDP port 53 over the internal network to ensure that Cloud Assistant can access the following addresses:
    
    -   https://_{region-id}_.axt.aliyun.com:443/
        
    -   http://100.100.100.200:80/
        
    -   http://aliyun-client-assist-_{region-id}_.oss-_{region-id}_\-internal.aliyuncs.com
        
        The OSS bucket that stores the Cloud Assistant Agent installation package is private. Only the installation package file has public-read permissions. Therefore, if an "AccessDenied" message is returned when you verify the connectivity of this domain name, it indicates that the domain name is accessible.
        

**Note**

-   _{region-id}_ is the region where the instance resides. For example, the region ID for China (Hangzhou) is `cn-hangzhou`.
    
-   For the domain names and IP addresses of Cloud Assistant servers in each region, see [Fine-grained configurations](/help/en/ecs/user-guide/configure-network-permissions-for-the-cloud-assistant-agent#section-ta7-uw0-olp).
    

SecurityGroupRuleDenied

A security group rule denies access to the Cloud Assistant service.

-   View the security group ID and the Cloud Assistant service IP address that are denied access in the ErrorInfo field. Then, modify the security group rule to allow access to the Cloud Assistant service.
    
-   For more information about the configuration, see [Configure network permissions for the Cloud Assistant Agent](/help/en/ecs/user-guide/configure-network-permissions-for-the-cloud-assistant-agent).
    

ClientNotResponse

The Cloud Assistant Agent did not respond.

Check the logs of the Cloud Assistant Agent.

1.  Open the log file of the Cloud Assistant Agent. The default paths of the log file are as follows.
    
    -   Linux: /usr/local/share/aliyun-assist/<Cloud Assistant version number>/log/aliyun\_assist\_main.log
        
    -   Windows: C:\\ProgramData\\aliyun\\assist\\<Cloud Assistant version number>\\log\\aliyun\_assist\_main.log
        
2.  Check whether the corresponding command execution ID exists in the log.
    
    -   If the ID exists, check the context for exceptions, such as whether the Cloud Assistant command has finished executing and whether the result was reported successfully.
        
    -   If the ID does not exist, run the command again. If the command still fails, restart the Cloud Assistant Agent.
        
        -   For Linux, run the following command.
            
            ```
            # For Linux systems that support systemctl
            systemctl restart aliyun.service
            
            # For Linux systems that do not support systemctl
            /etc/init.d/aliyun-service restart
            ```
            
        -   For Windows, start the Aliyun Assist Service in the Services Manager.
            

ClientNeedUpgrade

The Cloud Assistant Agent needs to be upgraded to support the specified feature.

-   View the feature and the minimum supported version number in the ErrorInfo field. Upgrade the Cloud Assistant Agent to at least the specified version.
    

-   Enable automatic updates for the Cloud Assistant Agent or manually upgrade the Cloud Assistant Agent. For more information, see [Upgrade or disable automatic updates for the Cloud Assistant Agent](/help/en/ecs/user-guide/upgrade-or-disable-upgrades-for-the-cloud-assistant-agent#task-1958118).
    

ClientNotOnline

The Cloud Assistant Agent is not connected to the server.

Restart the Cloud Assistant Agent. For more information, see [Stop and uninstall the Cloud Assistant Agent](/help/en/ecs/user-guide/stop-and-uninstall-the-cloud-assistant-agent#task-1958116).

DeliveryTimeout

The Cloud Assistant server failed to send the task to the Cloud Assistant Agent.

The Cloud Assistant command has not been sent to the instance. Run the command again.

ExecutionTimeout

The command execution timed out.

Extend the command execution timeout period as needed.

-   When you create and run a command in the console, the default value for **Timeout** is 60 seconds. You should set this parameter to an appropriate value.
    
-   If you call the [RunCommand](/help/en/ecs/api-runcommand#doc-api-Ecs-RunCommand) operation to run a command, the default value of the Timeout parameter is 60 seconds. You can set it to an appropriate value.
    
-   If you call the [CreateCommand](/help/en/ecs/api-createcommand#doc-api-Ecs-CreateCommand) operation to create a command and then call the [InvokeCommand](/help/en/ecs/api-invokecommand#doc-api-Ecs-InvokeCommand) operation to run it, the default value of the Timeout parameter is 60 seconds. You can set it to an appropriate value when you create the command. You can also call the [ModifyCommand](/help/en/ecs/api-modifycommand#doc-api-Ecs-ModifyCommand) operation to change the value after the command is created.
    

ExecutionException

An exception occurred during command execution.

View the detailed error message in the ErrorInfo field.

ExitCodeNonzero

The command finished executing, but the exit code of the command process is not 0.

Check the script content and the output of the command.

ClientRestarted

The task was interrupted because the Cloud Assistant Agent was restarted.

Run the command again after the restart is complete. You can view the running status of the Cloud Assistant Agent in the Cloud Assistant console or by calling the [DescribeCloudAssistantStatus](/help/en/ecs/api-describecloudassistantstatus) operation.

InstanceReleased

The instance was released during command execution.

The command cannot be executed because the instance was released during execution.

DirectoryNotExists

The specified working directory does not exist in the instance.

Create the specified working directory in the instance, and then run the command.

### **Running commands**

**Error code**

**Error message**

**Recommended solution**

ClientIsUpgrading

The Cloud Assistant Agent is being upgraded.

Run the command again after the upgrade is complete. You can view the running status of the Cloud Assistant Agent in the Cloud Assistant console or by calling the [DescribeCloudAssistantStatus](/help/en/ecs/api-describecloudassistantstatus) operation.

InstanceDeregistered

The managed instance has been unregistered.

The command cannot be executed because the managed instance was already unregistered.

InvalidSystemBuiltInParameter

The built-in environment parameter is invalid.

The specified built-in environment parameter is not supported. For more information about built-in environment parameters, see the description of the `CommandContent` parameter in [RunCommand](/help/en/ecs/api-runcommand).

DefaultWorkingDirectoryNotAvailable

The default working directory in the instance is not available.

Check the default working directory in the instance:

-   For a Linux instance, the default directory is the home directory of the administrator (root user), which is `/root`.
    
-   For a Windows instance, the default directory is where the Cloud Assistant Agent process is located, such as `C:\Windows\System32`.
    

You can also specify a working directory when you run the command. You can specify the directory in the Cloud Assistant console or using the `WorkingDir` parameter of the [RunCommand](/help/en/ecs/api-runcommand) operation.

CommandNotApplicable

The command type is not applicable to the specified instance.

The operating systems supported by each command type are as follows:

-   RunBatScript: Batch (BAT) commands for Windows instances.
    
-   RunPowerShellScript: PowerShell commands for Windows instances.
    
-   RunShellScript: Shell commands for Linux instances.
    

InvalidCommandText

The command content is invalid.

Check the command content. The content can be in plaintext or Base64-encoded.

CommandContentDecodeError

Failed to decode the command content.

If the command content is Base64-encoded, check whether the encoding is correct.

AccountNotExists

The specified user does not exist in the instance.

Create the specified user in the instance before you run the command.

-   For Linux ECS instances, commands are run as the root user by default.
    
-   For Windows ECS instances, commands are run as the System user by default.
    

You can also specify another existing user to run the command. You can specify the user in the Cloud Assistant console or using the `Username` parameter of the [RunCommand](/help/en/ecs/api-runcommand) operation.

### **Running scheduled commands**

**Error code**

**Error message**

**Recommended solution**

BadCronExpression

The specified cron expression is invalid.

Modify the cron expression. For more information, see [Clock-based scheduling](/help/en/ecs/user-guide/cron-expressions#Cron).

CronExpressionExpired

The cron expression has expired. The corresponding scheduled task will not be executed.

Do not specify an expired cron expression when you run the command.

InvalidGMTOffsetForTimezone

The format of the GMT offset time zone specified in the cron expression is invalid.

Check the format of the GMT offset time zone.

The supported GMT range is GMT-12:59 to GMT+14:59. The minute can be any value from 0 to 59. Leading zeros are not supported for the hour.

InvalidGMTOffsetHourForTimezone

The GMT offset hour value specified in the cron expression is invalid.

Check the hour value of the GMT offset time zone.

The supported GMT range is GMT-12:59 to GMT+14:59. Leading zeros are not supported for the hour.

InvalidGMTOffsetMinuteForTimezone

The GMT offset minute value specified in the cron expression is invalid.

Check the minute value of the GMT offset time zone.

The minute can be any value from 0 to 59.

TimezoneInformationCorrupt

The Cloud Assistant Agent cannot parse the time zone information because the time zone file is corrupted or for other reasons.

-   For Linux instances, check whether the corresponding time zone file exists in the `/usr/share/zoneinfo` directory. For example, `/usr/share/zoneinfo/Asia/Shanghai` is the time zone file for China/Shanghai.
    
-   For Windows instances, check whether the corresponding time zone file exists in the registry, such as `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones`.
    

**Note**

If the corresponding time zone file does not exist, create the correct time zone file before you run the command.

InvalidRateExpression

The Rate expression is invalid.

Modify the Rate expression. For more information, see [Fixed interval execution](/help/en/ecs/user-guide/cron-expressions#Rate).

RateFrequencyTooLarge

The scheduled execution frequency specified in the Rate expression is too high.

The scheduled execution frequency cannot be longer than 7 days.

InvalidAtExpression

The timestamp (At expression) is invalid.

Modify the timestamp. For more information, see [Run a command only once at a specified time](/help/en/ecs/user-guide/cron-expressions#c3f1d3e0ff0mn).

AtExpressionExpired

The timestamp (At expression) has expired. The corresponding scheduled task will not be executed.

Do not specify an expired timestamp when you run the command.

### **Running commands in containers**

**Error code**

**Error message**

**Recommended solution**

InvalidContainerName

The container name is invalid.

The container name must start with a digit or a letter. It can contain only digits, uppercase and lowercase letters, periods (.), underscores (\_), and hyphens (-). The name cannot exceed 255 characters in length.

UnsupportedContainerRuntime

The container runtime included in the container ID is not supported.

Only containers that are managed by Kubernetes through the Container Runtime Interface (CRI) and run on [docker](https://www.docker.com/), [containerd](https://containerd.io/), or [cri-o](https://cri-o.io/) container runtimes are supported.

InvalidContainerId

The container ID is invalid.

Only 64-bit hexadecimal strings are supported. You can add the `docker://`, `containerd://`, or `cri-o://` prefix to specify the container runtime.

ContainerConnectFailed

Cannot connect to the container.

Check whether the container is running. You can use `kubectl` or the Cloud Assistant Agent to view the container status. A `State` of `Running` indicates that the container is running. For more information, see [Use Cloud Assistant to run commands in a container](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).

-   If the container is running, check the container runtime. Only containers that are managed by Kubernetes through the CRI and run on docker, containerd, or cri-o container runtimes are supported.
    
-   If the container runtime meets the Cloud Assistant limits, check whether the command run in the container meets the requirements. For more information, see [Limits](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers#section-jek-y0z-uwr).
    

ContainerStateAbnormal

The container status is abnormal.

Check the container status. You can run commands using Cloud Assistant only on running containers. You can use `kubectl` or the Cloud Assistant Agent to view the container status. A `State` of `Running` indicates that the container is running. For more information, see [Use Cloud Assistant to run commands in a container](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).

ContainerNotFound

The container does not exist.

Check whether a container with the specified name or ID exists.

**Method 1: Use kubectl**

```
kubectl --namespace <specified namespace> describe pod <specified pod>
```

**Method 2: Use the Cloud Assistant Agent**

```
aliyun-service list-containers --source cri --all
```

For more information, see [Use Cloud Assistant to run commands in a container](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).

ContainerNameDuplicated

The node has containers with the same name. The container on which to run the command cannot be identified.

-   When you specify a container name to run a command, the node cannot have containers with the same name.
    
-   Specify the container ID to run the command. You can use kubectl or the Cloud Assistant Agent to view the container ID. For more information, see [Use Cloud Assistant to run commands in a container](/help/en/ecs/user-guide/use-cloud-assistant-to-run-commands-in-containers).
    

ContainerNameAndIdNotMatch

The container ID and container name do not match.

The specified container ID and container name do not correspond to the same container. Check whether the container ID and container name are correct.

### **Running commands as a non-default user (System) on a Windows instance**

The following issues may occur when you run commands as a non-default user (not System) on a Windows instance.

**Error code**

**Error message**

**Recommended solution**

UserOrPasswordInvalid

The username or password is incorrect.

The username or the password for the user is incorrect. For more information about usernames and passwords, see [Encrypted parameters](/help/en/oos/getting-started/manage-encryption-parameters) and [Set a regular user to run Cloud Assistant commands](/help/en/ecs/user-guide/run-cloud-assistant-commands-as-a-regular-user).

QueryParameterStoreFailed

Failed to pull parameters from Parameter Store.

Check whether the corresponding password information exists in the parameter store of CloudOps Orchestration Service. For more information, see [Encrypted parameters](/help/en/oos/getting-started/manage-encryption-parameters).

InstanceRoleInvalid

The instance role is not granted to the instance.

Call the [DescribeInstanceRamRole](/help/en/ecs/api-describeinstanceramrole) operation to check whether the corresponding RAM role exists on the instance.

### Stopping commands

**Error code**

**Error message**

**Recommended solution**

TerminationException

Failed to stop the task.

View the detailed error message in the ErrorInfo field, or retry stopping the task.

### **Sending files**

**Error code**

**Error message**

**Recommended solution**

FileAlreadyExists

A file with the same name exists in the same path.

You can resolve this issue in one of the following ways:

-   Delete the file with the same name from the path.
    
-   Allow overwriting the file with the same name in the same path.
    
    -   Cloud Assistant console: When you upload the file, enable **Overwrite**.
        
    -   OpenAPI: When you call the [SendFile](/help/en/ecs/api-sendfile) operation, set the Overwrite parameter to true.
        

Change the destination path or the name of the file that you want to send.

FileNameInvalid

The file name is invalid.

Adjust the file name to comply with the file naming conventions of the Windows or Linux operating system.

-   Cloud Assistant console: When you upload the file, make sure that the **File Name** meets the requirements**.**
    
-   OpenAPI: When you call the [SendFile](/help/en/ecs/api-sendfile) operation, make sure that the Name parameter meets the requirements**.**
    

FilePathInvalid

The file path is invalid.

Adjust the file path to comply with the file path conventions of the Windows or Linux operating system.

-   Cloud Assistant console: When you upload the file, make sure that the **Destination Path** meets the file path requirements.
    
-   OpenAPI: When you call the [SendFile](/help/en/ecs/api-sendfile) operation, make sure that the TargetDir parameter meets the file path requirements.
    

FileAuthorityInvalid

The file permissions are invalid.

Adjust the file permissions. This setting takes effect only on Linux instances and is configured in the same way as the chmod command.

UserGroupNotExists

The specified user group does not exist in the instance.

The default user group is root. Create the corresponding user group in the Linux instance.

Example command: `groupadd <groupname>`. `<groupname>` is the name of the user group to be created.

## **FAQ**

**Q:** **Why do I see garbled characters when I use Cloud Assistant to run a PowerShell script on a Windows server and the output contains Chinese characters****?**

A: This occurs because the PowerShell environment used by Cloud Assistant does not default to UTF-8. As a result, non-ASCII characters, such as Chinese, are misinterpreted and appear garbled.

There are two solutions:

1.  **Modify the script content**: At the beginning of your script, add code to force UTF-8 output encoding.
    
    > In Windows Server 2022 environments, Cloud Assistant handles Chinese character encoding correctly by default, so you do not need to set the UTF-8 encoding.
    
    Add the following code at the beginning of your PowerShell script:
    
    ```
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    
    Write-Output "Testing Chinese output..."
    ```
    
2.  **Modify the bootstrap program**: In the advanced options of Cloud Assistant, modify the underlying command that runs the script to automatically set the encoding before execution.
    
    Enter the following code in the **Luncher** field for the Cloud Assistant command:
    
    ```
    powershell -command [Console]::OutputEncoding=[System.Text.Encoding]::UTF8;{{ACS::ScriptFileName|Ext(.ps1)}};exit $LastExitCode
    ```
    
    With this setting, UTF-8 encoding is automatically applied to all PowerShell scripts executed in this task, eliminating the need to modify individual script files.
