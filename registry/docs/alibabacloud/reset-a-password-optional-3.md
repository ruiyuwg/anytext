If you forget your account password, want to change your password, or did not set a password when you created an instance, you can use the password reset feature provided by ApsaraDB for MongoDB.

## Usage notes

-   Before you reset the password of an instance, check whether the instance is connected. This prevents service connections from being affected after the password is reset.
    
-   When you reset the password, the instance runs as expected.
    

## Limits

**Instance architecture**

**Account whose password can be reset**

Standalone instance

root

Replica set instance

root

Sharded cluster instance

-   root
    
-   The account created for a ConfigServer node.
    
    **Note**
    
    You cannot create an account for a ConfigServer node in a sharded cluster instance that uses cloud disks. Therefore, you cannot reset the password of the account.
    
-   The account created for a shard node.
    

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page, select the resource group and region to which the desired instance belongs.
    
4.  Click the ID of the instance or click **Manage** in the **Actions** column.
    
5.  Perform one of the following operations based on the instance architecture and the type of your account:
    
    -   Reset the password of the root account for a standalone instance, replica set instance, or sharded cluster instance.
        
        1.  In the left-side navigation pane of the instance details page, click **Accounts**.
            
        2.  Click **Reset Password** in the **Actions** column corresponding to the root account.
            
    -   Reset the password of a ConfigServer or shard node in a sharded cluster instance.
        
        **Note**
        
        If you have not applied for an endpoint for a ConfigServer or shard node, you must first apply for an endpoint for the ConfigServer or shard node. For more information, see [Apply for an endpoint for a shard or ConfigServer node](/help/en/mongodb/user-guide/apply-for-an-endpoint-for-a-shard#task-1941822).
        
        1.  In the left-side navigation pane of the instance details page, click **Accounts**.
            
        2.  Click **Reset Password** in the **Actions** column corresponding to the account whose password you want to reset.
            
    
6.  In the **Reset Password** panel, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Account**
    
    The account whose password you want to reset. The value of this parameter cannot be modified.
    
    **New Password**
    
    The new password. Specify the new password of the account based on the following rules:
    
    -   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. The following special characters are supported:
        
        !@#$%^&\*()\_+=
        
    -   The password must be 8 to 32 characters in length.
        
    
    **Confirm Password**
    
    Re-enter the new password.
    
7.  Click **OK**.
