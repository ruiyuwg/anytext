If you need to grant the same permissions to multiple users, you can use roles for authorization. A role allows you to define a set of permissions. Role-based authorization can simplify the workflow and reduce management costs. This topic describes how to manage roles in Data Lake Formation (DLF).

**Important**

RAM users must have the admin (data lake administrator) or super\_administrator (super administrator) permissions to perform role-related operations.

## View the role list

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, choose **Data Permission** > **Role** to view role list information.
    
    System built-in roles:
    
    -   admin (data lake administrator): Has all database permissions and authorization permissions in DLF.
        
    -   super\_administrator (super administrator): Has all database permissions and authorization permissions in DLF and can modify admin users.
        

## Create a role

1.  On the **Role** page, click **Create Role**.
    
2.  Enter **Role Name**, **Role Display Name**, and **Description**, and click **OK**.
    

## **Assign users to a role**

On the **Role** page, click **Add User** in the **Actions** column of the role to assign users to the role. For more information, see [Add permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization#7c026e6528ebf).

## **Grant permissions to a role**

On the **Role** page, click **Add Permission** in the **Actions** column of the role to grant database permissions to the role. For more information, see [Add permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization#7c026e6528ebf).
