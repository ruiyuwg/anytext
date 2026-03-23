This topic describes the basic operations that you can perform on CloudSSO users. The basic operations include creating a user, viewing user information, modifying basic information about a user, deleting a user, enabling or disabling the logon of a user, and resetting the password of a user.

## Create a user

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **User Management** > **User**.
    
3.  On the **User** page, click **Create User**.
    
4.  In the **Create User** panel, configure the parameters and click **OK**.
    
    -   **Username**: required. The username must be unique within the directory. The username can be up to 64 characters in length and can contain digits, letters, `at signs (@), underscores (_), hyphens (-), and periods (.)`.
        
    -   **Name**, **Display Name**, **Email Address**, and **Description**: optional. You can specify the parameters based on your business requirements.
        
    -   **Status**: By default, Status is turned on, which indicates that the logon of the user is enabled. You can turn off Status to disable the logon of the user. Users whose Status is set to Disabled cannot log on to the user portal.
        
    
5.  Click **Set Password** to set a password for the user.
    
    -   Manual: Select **Manual Input** and enter a password.
        
        The password must comply with the configured password policy. For more information, see [Configure a password policy](/help/en/cloudsso/user-guide/set-password-policy).
        
    -   Automatic: Select **System Generate**. The system automatically generates a password. You must promptly save the password.
        
    -   Specify whether to reset the password upon the next logon: If you select **The user must reset the password upon the next logon.**, the user must reset the password upon the next logon. Otherwise, the user does not need to reset the password upon the next logon.
        
6.  Click **OK**.
    

## View user information

On the **User** page, click the name of a user to view the information about the user.

-   On the page that appears, click the **Details** tab to view the basic information about the user and the multi-factor authentication (MFA) devices bound to the user.
    
-   Click the **Joined Groups** tab to view the groups to which the user is added.
    
-   Click the **Access Assignments** tab to view the accounts in your resource directory and access configurations that are specified for the user.
    
-   Click the **RAM User Provisioning** tab to view the information about RAM user provisioning. For more information, see [Overview of a RAM user provisioning](/help/en/cloudsso/user-guide/overview-of-a-ram-user-provisioning).
    

## Modify basic information about a user

**Note**

-   If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the basic information about the users that are synchronized by using SCIM.
    
-   Usernames cannot be modified.
    

1.  On the **User** page, click the name of a user.
    
2.  On the **Details** tab of the page that appears, click **Edit User** in the **Basic Information** section.
    
3.  In the **Edit User** panel, change the values of **Name**, **Display Name**, **Email Address**, and **Description**.
    
4.  Click **OK**.
    

## Delete a user

Before you delete a user, make sure that the user is not associated with the following resources. Otherwise, the deletion fails.

-   Multi-factor authentication (MFA) devices: You must unbind the MFA devices from the user. For more information, see [Unbind an MFA device](/help/en/cloudsso/user-guide/manage-mfa#section-75b-v8l-gnr).
    
-   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [Remove the existing access permissions on an account in a resource directory](/help/en/cloudsso/user-guide/remove-the-existing-access-permissions-on-an-account-in-a-resource-directory#task-2092358).
    
-   Groups: You must remove the user from groups. For more information, see [Remove a user from a group](/help/en/cloudsso/user-guide/perform-basic-operations-1#section-fsu-anv-6j3).
    

**Note**

If SCIM synchronization is enabled, you cannot delete the users that are synchronized by using SCIM.

1.  On the **User** page, find the user that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Delete User** message, click **OK**.
    

## Enable or disable the logon of a user

1.  On the **User** page, click the name of a user.
    
2.  On the **Details** tab of the page that appears, enable or disable the logon of the user in the **Basic Information** section.
    
    -   Enable the logon of the user
        
        1.  In the **Status** section, turn on the switch.
            
        2.  In the **Enabled** message, click **OK**.
            
    -   Disable the logon of the user
        
        1.  In the **Status** section, turn off the switch.
            
        2.  In the **Disabled** message, click **OK**.
            
        
        **Warning**
        
        Users in the Disabled state cannot log on to the CloudSSO user portal.
        

## Reset the password of a user

If a user forgets the password, the password expires, or the password poses security risks, a CloudSSO administrator can reset the password of the user. After you enable SSO logon, the password of a user cannot be reset.

**Warning**

After the password is reset, the CloudSSO administrator must notify the user of the new password. If the CloudSSO administrator does not notify the user of the new password, the user cannot log on to the Alibaba Cloud Management Console.

1.  On the **User** page, click the name of a user.
    
2.  On the **Details** tab of the page that appears, click **Reset Password**.
    
3.  In the **Reset Password** panel, enter the new password.
    
    -   Manual: Select **Manual Input** and enter a password.
        
        The password must comply with the configured password policy. For more information, see [Configure a password policy](/help/en/cloudsso/user-guide/set-password-policy).
        
    -   Automatic: Select **System Generate**. The system automatically generates a password. You must promptly save the password.
        
    -   Specify whether to reset the password upon the next logon: If you select **The user must reset the password upon the next logon.**, the user must reset the password upon the next logon. Otherwise, the user does not need to reset the password upon the next logon.
        
4.  Click **OK**.
    
5.  If you select System Generate when you reset the password, copy the new password and click **OK** in the **Password Reset** message.
