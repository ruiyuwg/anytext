Use the user and role management features in Security Center to apply fine-grained access control to your resources. This ensures that only authorized users can manage or access them.

## Prerequisites

An instance has been created. For more information, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance#task-2285387).

## **Roles and users**

### **Roles**

EMR Serverless StarRocks provides the following built-in roles. Each role has different responsibilities and purposes.

**Role name**

**Description**

`db_admin`

Responsible for database management tasks, such as creating and modifying database objects.

`public`

This is a global role. All users are automatically assigned to this role by default without requiring separate authorization.

It provides basic permissions to ensure users can access public resources.

`user_admin`

Responsible for user account management tasks, such as creating and modifying users, and granting permissions.

### **User introduction**

EMR Serverless StarRocks provides the following user types.

**User type**

**Description**

**Super administrator**

A user with the `user_admin` role, or both the `user_admin` and `db_admin` roles, is considered a super administrator. The system provides a default super administrator account named admin.

**Regular user**

A user with only the default `public` role, or with the `db_admin` role attached, is a regular user.

## **User management**

### **Add a user**

1.  Go to the StarRocks Manager page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select the desired region.
        
    4.  Click StarRocks Manager, or click **Connect** in the Actions column for the target instance.
        
        For more information, see [Connect to a StarRocks instance using EMR StarRocks Manager](/help/en/emr/emr-serverless-starrocks/use-sql-editor-to-operate-a-starrocks-instance).
        
2.  In the navigation pane on the left, choose **Security Center** > **User Management**.
    
3.  On the **User Management** page, click **Create User**.
    
4.  In the dialog box that appears, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **User Source**
    
    The identity authentication method. The following user sources are supported:
    
    -   **Custom**: Applies to the built-in user management of StarRocks. This option lets you create new users.
        
    -   **RAM User**: Applies to scenarios where you connect to DLF. This option lets you use an existing Resource Access Management (RAM) user for identity authentication.
        
        **Note**
        
        -   Applicable versions: This feature is supported only for StarRocks instances of version 3.2 and later.
            
        -   Not applicable to: [DLF 1.0 (Legacy)](/help/en/dlf/dlf-1-0/product-overview/product-introduction/).
            
        
    
    **Username**
    
    -   **Custom**: Enter a custom username. The username must be 2 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (\_).
        
    -   **RAM User**: An existing RAM user is used for identity authentication. If you have not created a RAM user, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
        
    
    **Password** and **Confirm Password**
    
    Enter a custom password. The password must be 8 to 30 characters in length and contain uppercase letters, lowercase letters, digits, and special characters, such as at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^), asterisks (\*), underscores (\_), plus signs (+), and hyphens (-).
    
    **Roles**
    
    Assign built-in or custom roles to the new user.
    
    **Note**
    
    Follow the principle of least privilege. Grant only the minimum required permissions to avoid security risks from excessive authorization.
    

### **Grant permissions to a user**

You must grant the new user permissions to operate on specific resources.

1.  On the **User Management** page, click **Add Permission** in the Actions column for the target user.
    
2.  On the **Permissions** tab, click **Add Permission**.
    
3.  In the **Add Permission** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Resource**
    
    The following resources are supported:
    
    -   **Catalog**: Manages access permissions for the internal data catalog of StarRocks. This ensures that users can operate only on the internal databases and tables within their authorized scope.
        
    -   **External Data Catalogs**: Manages access permissions for external data catalogs. This ensures that users can access only the external data sources within their authorized scope, such as Hive, Iceberg, and Hudi.
        
    -   **Database**: Controls user permissions to create, modify, delete, or query specific databases.
        
    -   **Table**: Implements table-level permission management. This restricts user operations to create, retrieve, update, and delete data in specific tables.
        
    -   **Views**: Manages user permissions for views. This ensures that users can view or operate only on the views within their authorized scope.
        
    -   **Materialized View**: Supports access control for materialized views. Users can selectively manage or access specific materialized views.
        
    
    **Permission**
    
    The corresponding permissions are as follows:
    
    -   **Data Catalog**: ALL, USAGE, CREATE DATABASE, DROP, ALTER.
        
    -   **Data Catalog (External)**: ALL, USAGE, CREATE DATABASE, DROP, ALTER.
        
    -   **Database**: ALL, ALTER, DROP, CREATE TABLE, CREATE VIEW, CREATE FUNCTION, CREATE MATERIALIZED VIEW, CREATE PIPE.
        
    -   **Table**: ALL, ALTER, DROP, SELECT, INSERT, UPDATE, EXPORT, DELETE.
        
    -   **View**: ALL, SELECT, ALTER, DROP.
        
    -   **Materialized View**: ALL, SELECT, ALTER, REFRESH, DROP.
        
    

### **Edit and delete users**

-   Edit a user: A user with the required permissions can click **Modify user**, **Change Password**, or **Add Permission** in the **Actions** column for the target user to change the user's description, password, and assigned roles and permissions.
    
-   Delete a user:
    
    -   Built-in user: The admin user cannot be deleted.
        
    -   Custom user: A user with the required permissions can click **Delete** in the **Actions** column for the target user.
        

## **Role management**

### **Create a role**

If the built-in roles do not meet your needs, you can create a custom role. Custom roles provide more fine-grained access control. This helps you meet security requirements or handle complex scenarios, such as dynamic permission adjustments.

1.  On the StarRocks Manager page, choose **Security Center** > **Roles**.
    
2.  On the **Roles** page, click **Create Role**.
    
3.  In the **Create Role** dialog box, enter a description and click **OK**.
    

### **Grant permissions to a role**

You can grant specific permissions to new roles and adjust the permissions of existing ones. This provides the flexibility to meet the permission management needs of different business scenarios.

1.  On the **Roles** page, click **Add Permission** in the Actions column for the target role.
    
2.  On the **Permissions** tab, click **Add Permission**.
    
3.  In the **Add Permission** panel, select a resource and its corresponding permissions, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Resource**
    
    The following resources are supported:
    
    -   **Data Catalog**: Manages access permissions for the internal data catalog of StarRocks. This ensures that the current role can operate only on the internal databases and tables within its authorized scope.
        
    -   **Data Catalog (External)**: Manages access permissions for external data catalogs. This ensures that the current role can access only the external data sources within its authorized scope, such as Hive, Iceberg, and Hudi.
        
    -   **Database**: Controls the permissions of the current role to create, modify, delete, or query specific databases.
        
    -   **Table**: Implements table-level permission management. This restricts the operations of the current role to create, retrieve, update, and delete data in specific tables.
        
    -   **View**: Manages the permissions of the current role for views. This ensures that the current role can view or operate only on the views within its authorized scope.
        
    -   **Materialized View**: Supports access control for materialized views. The current role can selectively manage or access specific materialized views.
        
    
    **Permission**
    
    The corresponding permissions are as follows:
    
    -   **Data Catalog**: ALL, USAGE, CREATE DATABASE, DROP, ALTER.
        
    -   **Data Catalog (External)**: ALL, USAGE, CREATE DATABASE, DROP, ALTER.
        
    -   **Database**: ALL, ALTER, DROP, CREATE TABLE, CREATE VIEW, CREATE FUNCTION, CREATE MATERIALIZED VIEW, CREATE PIPE.
        
    -   **Table**: ALL, ALTER, DROP, SELECT, INSERT, UPDATE, EXPORT, DELETE.
        
    -   **View**: ALL, SELECT, ALTER, DROP.
        
    -   **Materialized View**: ALL, SELECT, ALTER, REFRESH, DROP.
        
    

### **Edit and delete roles**

-   Edit a role:
    
    -   System role: You cannot edit a system role or modify its permissions.
        
    -   Custom role: A user with the required permissions can click **Modify** or **Add Permission** in the **Actions** column for the target role to change the role's description and its assigned users and permissions.
        
-   Delete a role:
    
    -   Built-in role: Built-in roles cannot be deleted.
        
    -   Custom role: A user with the required permissions can click **Delete** in the **Actions** column for the target role.
        

## **Scenarios**

The following sections describe the procedures for two common scenarios.

### **Create a user and grant permissions**

1.  On the EMR StarRocks Manager page, choose **Security Center** > ****User Management****.
    
2.  Create a user.
    
    1.  On the **User Management** page, click **Create User**.
        
    2.  In the dialog box that appears, configure the parameters and click **OK**.
        
        For more information about the parameters, see the table in the [Add a user](#929881d550gwu) section.
        
3.  Grant permissions to the new user.
    
    1.  On the **User Management** page, click **Add Permission** in the Actions column for the new user.
        
    2.  On the **Permissions** tab, click **Add Permission**.
        
    3.  In the **Add Permission** panel, select a resource and its corresponding permissions, and then click **OK**.
        

### **Create a new role and assign it to an existing user**

If the built-in roles do not meet your needs, you can create a custom role. Custom roles provide more fine-grained access control. This helps you meet security requirements or handle complex scenarios, such as dynamic permission adjustments.

1.  On the EMR StarRocks Manager page, choose **Security Center** > **Roles**.
    
2.  Create a role.
    
    1.  On the **Roles** page, click **Create Role**.
        
    2.  In the **Create Role** dialog box, enter a description and click **OK**.
        
3.  Add permissions to the new role.
    
    1.  On the **Roles** page, click **Add Permission** in the Actions column for the new role.
        
    2.  On the **Permissions** tab, click **Add Permission**.
        
    3.  In the **Add Permission** panel, select a resource and its corresponding permissions, and then click **OK**.
        
4.  Assign the role to an existing user.
    
    1.  Click the User List tab.
        
    2.  On the **Users** tab, click **Create User**.
        
    3.  In the **Create User** panel, select the target user and click **OK**.
        

## **References**

To view SQL query information, analyze execution plans, and troubleshoot SQL issues for an instance, see [Diagnosis and analysis](/help/en/emr/emr-serverless-starrocks/diagnostics-and-analytics/).
