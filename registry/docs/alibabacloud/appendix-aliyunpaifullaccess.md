If you want to grant all permissions on Platform for AI (PAI) to a Resource Access Management (RAM) user, you can attach the AliyunPAIFullAccess system policy to the RAM user. This topic describes how to attach the AliyunPAIFullAccess system policy to a RAM user.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Grant Permission** panel, configure the parameters. Take note of the following parameters:
    
    -   **Resource Scope**: Select **Account**.
        
    -   **Policy**: Select **System Policy** from the drop-down list and select **AliyunPAIFullAccess** in the system policy list.
        
        **Important**
        
        A RAM user to which the system policy is attached has the permissions to purchase, create, and delete all types of resources and has administrator permissions on all workspaces. Proceed with caution.
        
5.  Click **Grant permissions**.
    
6.  Click **Close**.
