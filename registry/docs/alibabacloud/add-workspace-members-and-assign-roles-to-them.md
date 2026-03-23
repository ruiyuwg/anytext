Sharing an Alibaba Cloud account for team collaboration poses significant security risks. Instead, add RAM users as workspace members and assign them different roles. This enables fine-grained access control, which ensures data security and standardizes development workflows.

## How it works

DataWorks member management is based on the Alibaba Cloud RAM and role-based access control (RBAC) models. The core principles are as follows:

-   **Member identity**: Members in a workspace are RAM users under your Alibaba Cloud account. DataWorks does not create or store user identities.
    
-   **Role authorization**: You grant permissions to members within a workspace by assigning them roles, such as administrator, developer, and O&M.
    
-   **Permission mapping**: DataWorks role permissions are mapped to the permissions of the underlying compute engine. For example, if you grant the developer role in DataWorks to a member, the system automatically grants the corresponding read and write permissions to that member in the attached MaxCompute project. Understanding this mapping is key to configuring permissions correctly.
    

For more information about the DataWorks permission system, see [Overview of the DataWorks permission system](/help/en/dataworks/user-guide/overview-of-the-dataworks-permission-management-system#concept-2103062).

## **Permissions**

To perform this operation, you must have the **Workspace Manager** role in the workspace.

> An Alibaba Cloud account is granted the Workspac Manager role by default for all workspaces that it creates.

## Add and manage members and roles

1.  Go to the [DataWorks Management Center](https://dataworks.console.aliyun.com/product/ms_menu), find the target workspace, and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Workspace Members and Roles**. Then, click **Add Members** in the upper-right corner.
    
3.  **(Optional)** To create a new RAM user, click **RAM console** in the prompt at the top of the dialog box to go to the RAM console and [create a RAM user](/help/en/dataworks/prepare-a-ram-user-10#task-1563880).
    
4.  Select the accounts to add, move them to the **Selected Accounts** list, set roles and click **Confirm** to grant permissions.
    
    **Important**
    
    -   RAM users with different workspace roles have different permissions on DataWorks features. For more information about preset workspace roles, see [Workspace-level access control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-a8e-2is-wju).
        
    -   A RAM user with the Workspace Administrator role has all permissions in the workspace.
        
    
    ![添加工作空间成员](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9154800671/p537424.png)
    
5.  After adding members to the workspace, you can view and manage them in the **Workspace Members** list. You can modify a member's role in the **Role** column and remove a member in the **Actions** column. The project owner cannot be removed.
    

## **Recommendations for production environments**

-   **Principle of least privilege**: Do not grant the **Workspace Manager** role to developers or O&M engineers. Instead, assign specific roles such as **Development**, **O&M**, or **Deploy** based on their responsibilities.
    
-   **Regular reviews**: The project owner should regularly review the **Workspace Members** list to promptly remove members who have left the company or changed positions and to clean up unnecessary permissions.
    
-   **Risks of administrator permissions**: The **Workspace Manager** role grants all permissions, including the ability to manage members and modify workspace configurations. A misoperation by an administrator or a compromised account can have a severe impact on the entire project. This role should be strictly limited to one or two core owners.
    

## Next steps

After you add members and assign them roles, you can use the following resources to learn the basics of DataWorks:

-   For a quick start tutorial, see [Comprehensive: Website user profile analysis](/help/en/dataworks/user-guide/simple-user-profile-analysis/).
    
-   For more tutorials, see [Product tutorials](/help/en/dataworks/user-guide/dataworks-tutorials-overview/#concept-2245269).
    

## **FAQ**

-   **Q: Why can't I find the RAM user I want to add in the "Available Accounts" list?**  
    A: First, ensure that the RAM user has been created in the Alibaba Cloud RAM console. Then, in the Add Members dialog box, click the **Refresh** button to retrieve the latest list of RAM users.
    
-   **Q: Why can't I remove a specific workspace member?**  
    A: You cannot remove the **project owner** of a workspace. The project owner is typically the Alibaba Cloud account that created the workspace and has full permissions for it.
