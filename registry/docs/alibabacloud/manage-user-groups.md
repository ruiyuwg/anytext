When you configure a policy, you must specify the user group to which the policy applies. A user group can contain multiple users. You can add users to a group based on their account names, email addresses, mobile phone numbers, or organizational structure.

## Prerequisites

The identity source configuration is complete. For more information about the configuration methods, see [Identity Synchronization](/help/en/sase/user-guide/identity-synchronization/).

## Add a user group

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **User Group Management** tab, click **Create User Group**.
    
4.  In the **Create User Group** panel, configure the parameters. The following table describes the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1022020371/p813385.png)
    
    **Parameter**
    
    **Description**
    
    **User Group Name**
    
    The name of the user group.
    
    **Description**
    
    The description of the user group.
    
    **Group Scope**
    
    The scope of the user group. Valid values:
    
    -   **Organizational Structure**: If you set this parameter to **Organizational Structure**, the **Organizational Structure** information for which an identity source is configured and enabled is displayed. Select an organizational structure as needed.
        
    -   **Account Name**: If you set this parameter to **Account Name**, the **Configure** **Account Name** field appears.
        
    -   **Email Address**: If you set this parameter to **Email Address**, the **Configure** **Email Address** field appears.
        
    -   **Mobile Phone Number**: If you set this parameter to **Mobile Phone Number**, the **Configure** **Mobile Phone Number** field appears.
        
    
    **Configure Relationship**
    
    The relationship for the user group. Valid values:
    
    -   **Equal To**
        
    -   **Not Equal To**
        
    
5.  Click **OK**.
    
    The new user group is automatically added to the user group list.
    
    You can perform the following operations as needed:
    
    -   Edit: Click **Edit** to view or modify the user group information.
        
    -   Delete: Click **Delete** to remove the user group.
        
    

## What to do next

After you add a user group, you can use the group to specify the scope of a policy. For more information about how to configure policies, see [Configure a zero trust policy](/help/en/sase/user-guide/configure-a-zero-trust-policy#task-2037063) for private access.
