Using a Resource Access Management (RAM) user instead of your Alibaba Cloud account is a critical security best practice. Because the Alibaba Cloud account has unrestricted permissions, we strongly recommend you do not use it for daily tasks after you complete creating your RAM user as an administrator.

## Why use a RAM user instead of an Alibaba Cloud account?

The following table compares an **Alibaba Cloud account** with a **Resource Access Management (RAM) user** in terms of identity and permissions. RAM is an Alibaba Cloud service that lets you manage user identities and resource access permissions. For more information, see [What is Resource Access Management?](/help/en/ram/product-overview/what-is-ram). The table also includes our recommendations.

**Item**

**Alibaba Cloud account**

**RAM user**

Identity role

The owner of resources. Has full ownership of all assets and the highest permissions.

A user of resources and services. Permissions are granted by the Alibaba Cloud account. A RAM user usually corresponds to a specific person or application.

Owns cloud resources

Yes

No. Resources are owned by the Alibaba Cloud account.

Default permissions

Full permissions. Cannot be restricted.

No permissions by default. Must be granted permissions by the Alibaba Cloud account.

Recommended use

Only for key management operations, such as authorization, payment, and account management.

Daily development, O&M, deployment, and other tasks.

**Note**

RAM users cannot view Alibaba Cloud account data or manage any configurations in the Account Center.

**Best practices for account security**

1.  Create a RAM user with administrator privileges specifically for daily management and technical operations.
    
2.  Use your Alibaba Cloud account only when absolutely necessary. Securely store its password and related credentials, such as multi-factor authentication (MFA) credentials.
    
3.  Perform all daily operations using the RAM administrator user. This prevents exposing your Alibaba Cloud account in daily work environments.
    

## Create a RAM user with administrator permissions

Follow these steps to log on with your **Alibaba Cloud account** and create a RAM user to act as an administrator.

### **Quick create**

1.  Use your **Alibaba Cloud account** to log on to the [RAM console](https://ram.console.alibabacloud.com). On the **Overview** page, click **QuickStart** > **Account Administrator**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829085.png)
    
2.  Review the configuration parameters for the **Account Administrator** and click **Perform**.
    
    By default, this account administrator has console access enabled and the AdministratorAccess system policy attached. This policy grants permissions to manage all Alibaba Cloud resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829090.png)
    
3.  After the configuration is complete, save the RAM username and logon password for this account administrator.
    

**Note**

After the account administrator is created, you can modify its configuration parameters in the corresponding menu of the RAM console.

### **Manual create**

**Create a RAM user**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com) with your Alibaba Cloud account. In the navigation pane on the left, choose **Identities** > **Users**. Then, click **Create User**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829101.png)
    
2.  Enter the information for the RAM user.
    
    -   **Logon Name**: Enter a name for the administrator, such as administrator.
        
    -   **Display Name**: Enter an alias for easy identification, such as Administrator.
        
    -   **Access Mode**: Select an access mode. If you select OpenAPI Access, proceed with caution. See [Best practices for using access credentials to access Alibaba Cloud OpenAPI](/help/en/ram/use-cases/best-practices-for-using-access-credentials-to-access-alibaba-cloud-openapi).
        
    -   **Multi-Factor Authentication (MFA)**: Select the required option for **Enable MFA**. See [Attach an MFA device to a RAM user](/help/en/ram/user-guide/bind-an-mfa-device-to-a-ram-user).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829217.png)
        
3.  Follow the on-screen instructions to complete the security authentication.
    

**Grant permissions to the RAM user**

1.  On the **Users** page, find the target RAM user and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829114.png)
    
2.  In the **Grant Permission** panel, attach the system **Policy** named AdministratorAccess to the RAM user. This policy grants permissions to manage all Alibaba Cloud resources.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4571527271/p829123.png)
    

## Log on with the RAM user

1.  **Log out of your Alibaba Cloud account immediately.**
    
2.  **Log on to the console with the RAM user.** Go to the [RAM user logon page](https://signin.alibabacloud.com/login.htm). Enter the RAM **Username**, click **Next**, enter the RAM **Password**, and click **Log On**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7120896571/p998724.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7120896571/p998730.png)
    
3.  From now on, use this RAM administrator user for all daily tasks, such as cloud resource management, development, and Operations and Maintenance (O&M).
    

## FAQ

### **What are the main differences between this RAM user and Alibaba Cloud account?**

-   The primary difference is the **source and management of permissions**. An **Alibaba Cloud account** has the ultimate, built-in permissions that cannot be revoked or restricted by any other account. A **RAM user**'s permissions are granted by the Alibaba Cloud account and can be modified, revoked, or disabled at any time.
    
-   If the credentials of a RAM administrator are compromised, log on with your Alibaba Cloud account to delete or disable the RAM user, mitigating the risk. However, if your Alibaba Cloud account is compromised, all your resources and permissions are at risk.
    
-   In addition, certain high-level operations, such as identity verification, modifying account information, and closing an account, still require the Alibaba Cloud account. RAM users do not have the permissions for these operations.
