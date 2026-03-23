This topic describes how to manage users added in Data Lake Formation.

## View user list

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, click **Data Permission** > **User**, to view all RAM user information within the current account.
    

**Note**

The user management feature only supports RAM users or roles. The system automatically adds all RAM users within the current account. To manage RAM users, please go to the [RAM console](https://ram.console.alibabacloud.com/).

## View user details

On the **User** page, click the username to view the user's basic information, role information, and permission information.

### Add the current user to a role

1.  On the user details page, click the **Added Role** tab to view the user's existing role information.
    
2.  Click **Add Role** to add the current user to an existing DLF role, granting them the permissions of the selected role.
    

### View the permissions owned by the current user

On the user details page, click the **Permissions** tab to view the **Personal Permissions** and **Role Permissions** that the current user already has.

### Add permissions

1.  On the user details page, click the **Permissions** tab.
    
2.  Click the **Personal Permissions** tab, then click **Add Permission** to add data permission for the current user. For more information, see [Add permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization#7c026e6528ebf).
    
3.  Click **Role Permissions**, then click **Add Permission** to add data permission for existing roles.
