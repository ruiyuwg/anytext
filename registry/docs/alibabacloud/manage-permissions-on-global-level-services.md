DataWorks allows you to grant different permissions on global-level services to members in a tenant by assigning the members different tenant-level roles. DataWorks provides built-in tenant-level roles and allows you to create custom tenant-level roles. This topic describes the tenant-level roles that can be used to manage permissions on global-level services and the basic operations that can be performed to manage permissions of tenant members on global-level services.

## Background information

If no workspace name is displayed in the top navigation bar of a page of a DataWorks service, the service is a global-level service, such as **Data Map**.

-   DataWorks provides identities such as tenant-level members and roles. If you want to access a global-level service as a RAM user, the RAM user must be assigned the required tenant-level role.
    
    DataWorks provides built-in tenant-level roles. For example, DataWorks provides a built-in tenant-level role for which permissions on category viewing and management in Data Map are defined, and you can assign the role to a member to control whether the member has the related permissions.
    
-   If the built-in tenant-level roles cannot meet your business requirements, you can create a custom tenant-level role and assign the role to a RAM user. This way, you can control the permissions of the RAM user on a specific global-level service.
    
    For example, you can create a custom tenant-level role to deny access to Data Map and assign the role to a RAM user. This way, the RAM user cannot access Data Map. For more information, see [Tenant-level roles that can be used to manage permissions on global-level services](#section-jja-swz-xie).
    

Permission management on global-level services in DataWorks is performed based on the role-based access control (RBAC) model. After you assign a tenant-level role to a RAM user, the RAM user is granted the permissions of the role on the related DataWorks service. For more information, see [Overview of the DataWorks permission management system](/help/en/dataworks/user-guide/overview-of-the-dataworks-permission-management-system#concept-2103062).

## Limits

-   Only workspaces of DataWorks Enterprise Edition support custom tenant-level roles. For more information, see [Differences among DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336). If your workspace is not of DataWorks Enterprise Edition, you can upgrade DataWorks to this edition. For more information, see [Billing of DataWorks editions](/help/en/dataworks/billing-of-dataworks-advanced-editions#concept-265329).
    
-   You can manage tenant-level roles by using an Alibaba Cloud account, the Tenant Administrator role, or a RAM user to which the AliyunDataWorksFullAccess or AdministratorAccess policy is attached.
    

## Tenant-level roles that can be used to manage permissions on global-level services

By default, RAM users are members of a DataWorks tenant, and tenant members can access most tenant-level services but cannot perform service management operations. You can use a built-in or custom tenant-level role to control whether a user has management permissions on a tenant-level service. You can also use a custom tenant-level role to control whether a user has read and write permissions on a specific global-level service.

### Built-in tenant-level roles

The following table describes the built-in tenant-level roles that are provided by DataWorks and the permissions of each role.

**Role**

**Permission description**

Tenant Owner

This role has the highest permissions on DataWorks. By default, a tenant owner is an Alibaba Cloud account and can only be an Alibaba Cloud account.

-   This role has the highest permissions on DataWorks and can be used to assign other roles to tenant members.
    
-   This role has the permissions to view data, read data from, write data to, and manage data in all global-level services of DataWorks.
    

Tenant Administrator

-   This role has the highest permissions on tenant-level services and can be used to assign other roles to tenant members.
    
-   This role has the permissions to view data, read data from, write data to, and manage data in all global-level services of DataWorks.
    

**Note**

This role does not have permissions to perform control and management operations in the DataWorks console. For information about the permissions to perform control and management operations in the DataWorks console, see [Manage permissions on the DataWorks services and the entities in the DataWorks console by using RAM policies](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#task-2154716).

Tenant User

By default, all RAM users and roles within the Alibaba Cloud account that is used to log on to the DataWorks console are assigned this role to act as members within the current DataWorks tenant.

-   This role has the permissions to view data, read data from, and write data to tenant-level services.
    
-   By default, this role does not have permissions to perform service management operations.
    

Security Administrator

-   All permissions on Security Center, including view, read, write, and management permissions.
    
-   Permissions to configure custom approval policies in Approval Center.
    
-   All permissions on Data Security Guard, including view, read, write, and management permissions.
    

Compliance Manager

-   Permissions to detect cross-border data transmission risks.
    
-   Permissions to review self-evaluation requests for cross-border data transmission.
    

OpenPlatform Administrator

This role has read and write permissions on the developer backend.

Data Governance Administrator

This role has read and write permissions on Data Governance Center. This role also has permissions to view governance assessment reports, detected data governance issues, and check events, and perform related rectification operations.

**Note**

Some operations in Data Governance Center require the roles and permissions of the related services. For more information, see [Overview of Data Governance Center](/help/en/dataworks/user-guide/overview-8).

Custom tenant-level role

You can use a custom tenant-level role to control whether a user has management permissions on a specific tenant-level service.

### Custom tenant-level roles

DataWorks allows you to create custom tenant-level roles and control whether the roles have permissions on specific global-level services. The following table describes the global-level services that allow you to use custom tenant-level roles to control permissions.

**Global-level service**

**Permission setting**

Data Security Guard

-   No Permissions: Deny access to Data Security Guard.
    
-   Available: all read-only permissions and all management permissions.
    

Data Map

-   No Permissions: Deny access to Data Map.
    
-   Available: regular permissions.
    

**Note**

For information about how to manage access permissions on metadata, such as prohibiting the display of metadata of a project and display of a table and prohibiting a user that is not a workspace member from accessing tables in a project, see [Appendix: Overview of permission management in Data Map](/help/en/dataworks/user-guide/overview-of-permission-management-in-data-map#task-2240187).

Data Governance Center

-   No Permissions: Deny access to Data Governance Center.
    
-   Available: regular permissions and data governance permissions.
    

DataAnalysis

-   No Permissions: Deny access to DataAnalysis.
    
-   Available: regular permissions.
    

Approval Center

-   No Permissions: Deny access to Approval Center.
    
-   Available: regular permissions and permissions to manage approval processes.
    

Security Center

-   No Permissions: Deny access to Security Center.
    
-   Available: regular permissions.
    

## Manage tenant-level roles

By default, all RAM users within the Alibaba Cloud account that is used to log on to the DataWorks console are members within the current tenant and have permissions to access all global-level services. You can assign tenant-level roles to RAM users to control whether the RAM users can access specific global-level services and to grant the RAM users the management permissions on global-level services.

### Step 1: Go to the Tenant Members and Roles page

1.  [Go to the SettingCenter page](/help/en/dataworks/user-guide/overview-of-features-in-settingcenter#section-5kh-fdv-bvs).
    
2.  In the left-side navigation pane of the **Management Center** page, click **Tenant Members and Roles**.
    

### Step 2: (Optional) Create a custom tenant-level role

You cannot change the permissions of the built-in tenant-level roles. If the built-in tenant-level roles do not meet your business requirements for permission management, you can create custom tenant-level roles and control the permissions of the roles on specific global-level services on the **Tenant Roles** tab of the Tenant Members and Roles page.

1.  Click **Create Custom Role** on the **Tenant Roles** tab of the Tenant Members and Roles page.
    
2.  In the Create Custom Role dialog box, specify a name for the role and configure permission settings on global-level services for the role.
    
3.  Click **Create**.
    
    **Note**
    
    If the Created message appears, the custom tenant-level role is created. You can assign the role to a member in subsequent operations.
    

### Step 3: Assign tenant-level roles to a member or manage tenant-level roles assigned to a member

1.  Click the **Tenant Members** tab.
    
2.  In the **Role** column of a member, assign tenant-level roles to the member or remove the assigned tenant-level roles from the member.
