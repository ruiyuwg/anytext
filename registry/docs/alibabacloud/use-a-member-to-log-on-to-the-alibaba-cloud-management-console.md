After you create a member in a resource directory or invite an Alibaba Cloud account to join a resource directory as a member, you can use the methods described in this topic to enable the member to log on to the Alibaba Cloud Management Console.

## Logon methods

**Logon method**

**Description**

**Applies To**

[Log on as a RAM role](#section-b2g-jvz-8ow)

An identity (such as a RAM user) in the management account temporarily assumes the ResourceDirectoryAccountAccessRole in a member account to gain access. This method provides centralized access control without managing separate credentials for each member account. To do this, you can use a RAM user within the management account, grant it the necessary permissions, and use that user to assume the ResourceDirectoryAccountAccessRole of a member.

-   Resource accounts created within a resource directory (no password).
    
-   Cloud accounts invited to join a resource directory.
    

[Log on as a RAM user](#section-rmp-svl-dhb)

After gaining initial access to a member account (for example, by assuming a role), you can create a dedicated RAM user within that member account for direct logon.

[Log on with an Alibaba Cloud account (not recommended)](#section-pjc-78t-hjn)

For members that are cloud accounts, you can use the usernames and logon passwords of the Alibaba Cloud accounts to log on directly to the console.

Alibaba Cloud accounts that are invited to join a resource directory. These members are cloud accounts.

[Log on as a CloudSSO user](#836a1762b6xj6)

CloudSSO provides centralized identity management and access control for multiple accounts in a resource directory. After you enable CloudSSO and grant permissions to a member in the resource directory, a CloudSSO user can log on to the CloudSSO user portal. The user can then access the member's resources based on the access configuration.

CloudSSO users

## **Procedure**

### **Log on as a RAM role**

1.  Create and grant permissions to a RAM user in the management account.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) with a management account.
        
    2.  Create a RAM user.
        
        In this example, the RAM username is Alice. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
        
    3.  Grant permissions to the RAM user (Alice).
        
        You must attach the following policies to the RAM user (Alice):
        
        -   AliyunSTSAssumeRoleAccess: The permission to call the AssumeRole operation of Security Token Service (STS).
            
        -   AliyunResourceDirectoryFullAccess: The permission to manage Resource Directory.
            
        
        **Note**
        
        If the RAM user (Alice) is used as an account administrator, you can directly grant the AdministratorAccess permission. This is a high-risk permission. Grant it with caution.
        
        For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
        
2.  Use the RAM user (Alice) to log on to the member account by assuming a RAM role.
    
    1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/) as the RAM user (Alice).
        
    2.  In the left-side navigation pane, choose **Resource Directory** > **Management**.
        
    3.  In the **Resource Organization View** or **Member List View**, find the member that you want to log on to and click **Log On** in the **Actions** column.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0155104471/p934206.png)
        
        After you log on, the management account's RAM user (Alice) assumes the target member's RAM role (ResourceDirectoryAccountAccessRole). The user can then perform operations that are within the scope of this role.
        

### **Log on as a RAM user**

1.  Log on to the member account by assuming a RAM role from the management account.
    
    For more information, see [Log on as a RAM role](#section-b2g-jvz-8ow).
    
2.  Create a RAM user within the member account.
    
    In this example, the RAM username is Tom. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
3.  Grant permissions to the RAM user (Tom).
    
    You must follow the principle of least privilege to grant the RAM user (Tom) permissions to access specific cloud resources. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
4.  Log on as the RAM user (Tom).
    
    For more information, see [Log on as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user#task-188189).
    

### **Log on with an Alibaba Cloud account (not recommended)**

**Important**

For security reasons, we do not recommend logging on with an Alibaba Cloud.

1.  Go to the [Sign In](https://account.alibabacloud.com/login/login.htm) page.
    
2.  Enter the username and password of the Alibaba Cloud account.
    
3.  Click **Sign in**.
    

### **Log on as a CloudSSO user**

You can configure the relevant settings in CloudSSO. For more information, see [Use CloudSSO to centrally manage the identities and permissions of multiple accounts](/help/en/resource-management/resource-directory/use-cases/use-cloudsso-to-implement-centralized-management-for-identities-and-permissions-of-multiple-accounts). Then, you can log on as the CloudSSO user. For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).

## **FAQ**

-   [What are the differences among a management account, a member, a resource account, a cloud account, a root user, and a RAM user?](/help/en/resource-management/resource-directory/support/what-are-the-differences-between-a-management-account-a-member-a-resource-account-an-alibaba-cloud-account-a-root-user-and-a-ram-user)
    
-   [Why am I unable to log on to a resource account as the root user (Alibaba Cloud account)?](/help/en/resource-management/resource-directory/support/why-can-t-a-resource-account-log-on-as-the-root-user-master-account)
    
-   [Why are some features of Resource Directory grayed out and unavailable to the root user (Alibaba Cloud account)?](/help/en/resource-management/resource-directory/support/why-are-many-functions-of-the-resource-directory-not-supported-by-the-root-user)
    
-   [How do I adjust the logon session duration for a member?](/help/en/resource-management/resource-directory/support/how-to-adjust-the-max-session-duration-for-member-accounts)
