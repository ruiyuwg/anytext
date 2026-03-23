You must grant the relevant permissions to users before they can use Hologres for data analytics. This topic describes the permission policies of Hologres to help you grant permissions to different users based on the scenario and manage user permissions in a fine-grained manner.

## User authentication process in Hologres

Users are authenticated for different permissions based on the scenario when they use Hologres. For example, when a user purchases an instance, Alibaba Cloud performs Resource Access Management (RAM) authentication to check whether the user has the permission to purchase an instance in the Hologres console. The user must be granted the permission to purchase an instance.

The following figure shows the complete authentication flow for a user, from accessing Alibaba Cloud to using Hologres.![Hologres用户鉴权流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6608392161/p206160.png)

-   Manage Hologres instances: When you perform operations such as purchasing, managing, upgrading, downgrading, renewing, or shutting down instances in the Hologres console, Alibaba Cloud uses RAM to authenticate your account. This process verifies whether you have the required permissions. For more information, see [RAM authentication](#section-c2p-abb-3tm).
    
-   Connect to Hologres for development: When you connect to a Hologres instance to perform operations, Hologres authentication is performed to verify that you have the required permissions. For more information, see [Hologres authentication](#section-eih-623-kcf).
    
-   Use DataWorks: If you use DataWorks for Hologres development, DataWorks authentication is required in addition to Hologres authentication to ensure that you have the required operation permissions. For more information, see [DataWorks authentication](#section-gjl-9jf-cah).
    
-   Use MaxCompute: To use Hologres to accelerate queries on MaxCompute table data, the Hologres account that you use must also have permissions to access the corresponding MaxCompute project and tables. For more information, see [MaxCompute authentication](#section-nuh-p8c-foh).
    

## RAM authentication

[RAM](https://ram.console.alibabacloud.com/permissions) is a permission management system provided by Alibaba Cloud. RAM is used to control permissions of accounts. You can manage permissions on Hologres instances by granting different permissions to different RAM users, including the permissions to purchase and delete instances, upgrade or downgrade the configuration of instances, change the network type, and view instance information.

If a RAM user is not granted the required RAM permissions, the user cannot view instance details in the Hologres console. However, this does not affect the user's ability to connect to the Hologres instance. For more information about the RAM authorization flow, see [Grant access to Hologres for RAM users](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).

## Hologres authentication

Hologres is a real-time data warehouse compatible with PostgreSQL 11. Before you use a Hologres instance for development, authentication is performed at the following levels:

1.  Account authentication
    
    -   You can log on to the Hologres console using an Alibaba Cloud account or a RAM user.
        
    -   When you use tools such as psql or Java Database Connectivity (JDBC) to connect to a Hologres instance, use your AccessKey ID as the username and your AccessKey secret as the password.
        
    
    For more information about accounts, see [Account system](/help/en/hologres/security-and-compliance/overview-16#concept-1597881).
    
2.  User authentication
    
    After account authentication is successful, the system checks whether the account is a Hologres user when it connects to the instance. A user is created in the instance only after an administrator executes the `create user "xxx"` command. For more information about user concepts and how to create users, see [User concepts](/help/en/hologres/security-and-compliance/hologres-permission-model/#section-ya4-yyy-87e).
    
3.  Instance authentication
    
    After a user is created for you in a Hologres instance, you must be granted relevant permissions to perform operations. For more information about how to grant permissions to a user, see [Development permission models](/help/en/hologres/security-and-compliance/hologres-permission-model/#concept-2021277).
    

## DataWorks authentication

Hologres is deeply integrated with DataWorks. When you use DataWorks for Hologres development, the permission management systems of Hologres and DataWorks are partially compatible. Consider the following authorization requirements:

-   Accessing DataWorks requires project access permissions.
    
-   Developing in DataStudio requires the relevant permissions on the Hologres instance.
    
-   For other DataWorks operations, such as data integration and DataService Studio, DataWorks operation authentication is required in addition to Hologres authentication. For more information about DataWorks permissions, see [Appendix: Permissions of built-in workspace-level roles](/help/en/dataworks/user-guide/permissions-of-built-in-workspace-level-roles#concept-i53-vfm-hfb).
    

The following figure shows the DataWorks authentication flow.![DataWorks鉴权流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6608392161/p206199.png)

## MaxCompute authentication

When you use Hologres to accelerate queries on data in MaxCompute tables, the Hologres account that you use must have permissions to access the corresponding MaxCompute project and tables. The following figure shows the authentication flow for accelerating MaxCompute queries in Hologres.![MaxCompute鉴权流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6608392161/p206627.png)For frequently asked questions about MaxCompute permissions, see [MaxCompute permission FAQ](/help/en/hologres/support/permissions-on-maxcompute#concept-2024872).
