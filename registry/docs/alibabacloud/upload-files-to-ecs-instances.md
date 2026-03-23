You can use Cloud Assistant to upload a small file, such as a configuration file or script, to one or more Elastic Compute Service (ECS) instances. This method lets you distribute files across multiple instances without logging in to each one individually.

## Prerequisites

-   The target ECS instances are in the **Running** state.
    
-   The file you want to upload does not exceed 24 KB in size.
    
    **Important**
    
    The file must not exceed 24 KB in size. To upload a file larger than 24 KB, use an alternative method. For more information, see [Upload or download files](/help/en/ecs/user-guide/upload-a-file-from-on-premises-to-an-ecs-instance/).
    

## Procedure

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **ECS Instances** tab, find the instance to which you want to upload a file and click **Send File** in the Actions column.
    
    -   If the **Cloud Assistant Status** column shows **Not Installed**, install Cloud Assistant Agent on the instance as prompted.
        
    -   If the **Cloud Assistant Status** column shows **Abnormal**, restart Cloud Assistant Agent. If the Cloud Assistant Agent version is earlier than 1.0.2.569 on a Linux instance or 1.0.0.149 on a Windows instance, manually install a later version. For more information, see [Start, stop, or uninstall Cloud Assistant Agent](/help/en/ecs/user-guide/stop-and-uninstall-the-cloud-assistant-agent) or [Install Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent).
        
        **Note**
        
        To send a file to multiple instances at once, click **Send File** in the upper-right corner of the **ECS Cloud Assistant** page instead. This lets you select multiple target instances for a single file sending task.
        
4.  In the Send File panel, configure the following parameters in the **Command Information** section, and then click **Run**.
    
    **Parameter**
    
    **Description**
    
    **File**
    
    Required. Select an upload method and follow the on-screen instructions to upload the file.
    
    **File Name**
    
    Required. Enter a name for the file.
    
    **Important**
    
    If **Overwrite** is turned off, the name must be unique in the destination path on the target ECS instances.
    
    **Destination Path**
    
    Required. Specify an existing absolute path on the ECS instances where the file will be saved. Default values:
    
    -   Linux instances: `/root`
        
    -   Windows instances: `C:\Users\Administrator\Documents`
        
    
    **File Description**
    
    Enter a description to help identify the file.
    
    **User**
    
    Specify the user who owns the file.
    
    **Note**
    
    This parameter applies to Linux instances only.
    
    **User Group**
    
    Specify the user group that owns the file.
    
    **Note**
    
    This parameter applies to Linux instances only.
    
    **Permission**
    
    Set the file permissions using the same format as the chmod command.
    
    Default value: `0644`. This means the file owner has read and write permissions, while users in the same group and all other users have read-only permissions.
    
    **Note**
    
    This parameter applies to Linux instances only.
    
    **Overwrite**
    
    Specify whether to overwrite an existing file with the same name in the destination path.
    
    Turned off by default.
    
    **Timeout**
    
    Set the timeout period for the file sending task, in seconds. If the task exceeds this duration, Cloud Assistant forcefully stops the task process.
    
    Valid values: 10 to 86400. Default value: 60.
    
    **Tag**
    
    Add a tag to the file sending task for classification and management. **Tag Key**: the key of the tag. **Tag Value**: the value of the tag.
    

## View the execution result of a file sending task

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  Click the **File Sending Result** tab.
    
3.  In the task list, view the execution states, execution IDs, and destination paths of file sending tasks.
    
    You can perform the following actions for each file sending task in the Actions column:
    
    -   Click **View** to view the execution results of the task on each instance.
        
    -   Click **Export** to export the task execution results.
        
    -   Click **Send Again** to execute the task again with the same configuration.
        

## Related API operations

-   [SendFile](/help/en/ecs/api-sendfile#doc-api-Ecs-SendFile) -- Uses Cloud Assistant to send an on-premises file to one or more ECS instances.
    
-   [DescribeSendFileResults](/help/en/ecs/api-describesendfileresults#doc-api-Ecs-DescribeSendFileResults) -- Queries files sent by Cloud Assistant and the sending states.
