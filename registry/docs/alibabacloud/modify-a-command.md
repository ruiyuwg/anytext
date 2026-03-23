After creating a Cloud Assistant command, you can modify its name and description, or start, delete, and clone the command in the Elastic Compute Service (ECS) console.

## Procedure

1.  Go to [ECS console - ECS Cloud Assistant](https://ecs.console.alibabacloud.com/cloud-assistant/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the **My Commands** tab and perform the available operations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0286033371/p881957.png)
    
    **Operation**
    
    **Description**
    
    Modify the name and description of a command
    
    Hover over the command name that you want to modify, and click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6128152261/p7167.png) icon. In the dialog box that appears, specify the new command name and description, then click **OK**.
    
    Execute a command
    
    Find the target command and click **Run** in the **Actions** column. Adjust the execution plan, timeout, and other parameters as needed. Choose the ECS instance or managed instance where the command will run. For details on parameters, refer to [Create and run a command](/help/en/ecs/user-guide/use-the-immediate-execution-feature).
    
    Delete a command
    
    You can view the **Maximum Number of Cloud Assistant Commands** that you can store within an Alibaba Cloud region in the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs/quotas?regionId=cn-hangzhou). We recommend that you regularly purge commands to ensure sufficient command quota.
    
    -   To delete a single command: Find the Cloud Assistant command you want to remove and click **Delete** in the **Actions** column.
        
    -   To delete multiple commands: Select the Cloud Assistant commands that you want to delete, and then click **Delete Command** at the bottom of the page.
        
    
    Clone a command
    
    Find the target command and click **Clone** in the **Actions** column. Cloning creates a new version of a Cloud Assistant command, allowing you to retain or modify the information of the command, such as its name, description, type, content, execution path, or timeout. For more information on parameters, see [Create and run a command](/help/en/ecs/user-guide/use-the-immediate-execution-feature).
    

## References

-   For information about operations such as stopping the command execution and modifying the command content, see [Modify the execution information of a task](/help/en/ecs/user-guide/modify-task-execution-information).
    
-   [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand)
    
-   [InvokeCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-invokecommand#DAS)
    
-   [DeleteCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletecommand)
    
-   [ModifyCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifycommand)
