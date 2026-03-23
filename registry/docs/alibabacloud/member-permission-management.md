DataWorks provides a comprehensive permission management system for you to manage product-level permissions and module-level permissions. The module-level permissions are classified into permissions to perform operations in the DataWorks console and permissions to use DataWorks service modules. DataWorks allows you to use RAM policies to manage product-level permissions and the permissions to perform operations in the DataWorks console. DataWorks also allows you to use role-based access control (RBAC) to manage permissions on service modules. This topic describes the DataWorks permission management system.

## Overview

The following figure shows the structure of the DataWorks permission management system based on management granularities.

![权限管控体系](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2936753761/p520565.png)

**Permission management method**

**Authorization method**

**Effective scope in DataWorks**

**References**

RAM policy-based authorization

Attach a policy to a user (RAM user or RAM role) to grant the user the permissions that are defined in the policy.

-   User: A user can be a RAM user or a RAM role.
    
-   Policy: A policy can be a built-in policy or a custom policy.
    

-   Product-level permissions: Manage DataWorks, purchase resources, and activate DataWorks services. For example, you can activate DataWorks services of an advanced edition.
    
-   Module-level permissions: Manage workspaces, resource groups, and alert contacts in the DataWorks console.
    

[RAM policy-based authorization](/help/en/ram/policy-overview#concept-tfz-4wf-xdb)

RBAC

Assign a role to a user (RAM user or RAM role) to authorize the user to perform operations in specific DataWorks service modules.

-   User: A user can be a RAM user or a RAM role.
    
-   Role: A role can be a workspace-level or global-level role.
    
-   Permission: Permissions to access and use DataWorks workspace-level service modules and permissions to access and manage DataWorks global-level service modules.
    

-   DataWorks global-level service modules
    
-   DataWorks workspace-level service modules
    

-   [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693)
    
-   [Manage permissions on global-level services](/help/en/dataworks/user-guide/manage-permissions-on-global-level-services#task-2173738)
    
-   [Appendix 2: Distinguish between workspace-level service modules and global-level service modules](/help/en/dataworks/user-guide/overview-of-the-dataworks-permission-management-system#section-qwx-dzz-7qw)
    

**Note**

This topic describes the basic information about the DataWorks permission management system. For information about fine-grained permission management for users in different scenarios, see [Best practices for managing permissions of RAM users](/help/en/dataworks/user-guide/best-practices-for-managing-permissions-of-ram-users#task-2252607).

## **Precautions**

By default, Alibaba Cloud accounts and RAM users to which the **AdministratorAccess** policy is attached have higher permissions.

## Product-level permission management

DataWorks allows you to use RAM policies to manage product-level permissions. You can attach a built-in policy or a custom policy to a RAM user to implement DataWorks permission management.

**Permission management method**

**Operation type**

**Description**

**References**

RAM policy-based authorization

Allow

You can attach the following system policies that are provided by DataWorks to RAM users:

-   AliyunDataWorksFullAccess. After this policy is attached to a RAM user, the RAM user can manage DataWorks services on behalf of the Alibaba Cloud account, but the RAM user cannot purchase services.
    
-   AliyunBSSOrderAccess. After this policy is attached to a RAM user, the RAM user can perform various operations in the DataWorks console. For example, the RAM user can purchase resources, activate services, or renew a service.
    

[Use system policies and custom policies to manage permissions on the DataWorks services](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#section-fth-ylc-4zx)

Deny

You can create a custom policy and attach the policy to a specified RAM user. Permission management scope:

-   Prohibit RAM users from performing operations in DataWorks.
    
-   Prohibit RAM users from calling API operations.
    
-   Prohibit RAM users from accessing DataWorks service modules.
    

## Module-level permission management: Permissions to perform operations in the DataWorks console

DataWorks allows you to use RAM policies to manage the permissions to perform operations in the [DataWorks console](https://workbench.data.aliyun.com/console).

**Permission management method**

**Managed entity**

**Operation**

**References**

RAM policy-based authorization

Workspace

You can perform various operations such as creating, disabling, or deleting a workspace on the **Workspaces** page.

[Use custom policies to manage permissions on the entities in the DataWorks console in a fine-grained manner](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#section-b8n-ckp-aii)

Exclusive resource group

You can perform various operations such as creating an exclusive resource group and configuring the network of the exclusive resource group on the **Resource Groups** page.

Alert

You can perform various operations such as configuring information about an alert contact on the **Alerts** page.

## Module-level permission management: Permissions to use DataWorks service modules

DataWorks service modules are classified into global- and workspace-level service modules based on their usage scope. DataWorks provides global- and workspace-level roles that you can use to manage permissions on the global- and workspace-level service modules. For more information, see [Appendix 1: Division of global-level roles and workspace-level roles](/help/en/dataworks/user-guide/overview-of-the-dataworks-permission-management-system#section-du8-sek-bgu). DataWorks allows you to use RBAC to manage permissions on service modules.

**Permission management method**

**Managed entity**

**Description**

**References**

RBAC

Workspace-level service modules

-   Allow a user to perform operations in workspace-level service modules. After a user (RAM user or RAM role) is assigned a workspace-level role, the user is authorized to perform operations in specific DataWorks workspace-level service modules.
    
-   Prohibit a user from accessing specific workspace-level service modules, such as the data development module DataStudio.
    

**Note**

DataWorks provides built-in workspace-level roles that are granted fixed permissions. DataWorks also allows you to create custom workspace-level roles.

[Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693)

Global-level service modules

-   Allow a user to perform operations in global-level service modules. After a user (RAM user or RAM role) is assigned a global-level role, the user is authorized to perform operations in specific DataWorks global-level service modules.
    
-   Prohibit a user from accessing specific global-level service modules, such as Data Map or Data Security Guard.
    

**Note**

DataWorks provides built-in global-level roles. DataWorks also allows you to create custom global-level roles to control whether a specific role has the data read and write permissions on a specific global-level service module.

[Manage permissions on global-level services](/help/en/dataworks/user-guide/manage-permissions-on-global-level-services#task-2173738)

## Appendix 1: Division of global-level roles and workspace-level roles

DataWorks provides built-in global-level and workspace-level roles. You can assign these built-in roles to users to grant the users the required permissions on specific service modules. You can also create custom global-level or workspace-level roles based on your business requirements. The following figure shows the relationship among users, roles, and permissions.![RBAC权限模型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4405640761/p428180.png)

**Note**

-   Among all types of roles, only the **tenant administrator** role, which is a global-level role, has permissions on all service modules.
    
-   The **tenant member** role is automatically assigned to all RAM users that belong to an Alibaba Cloud account.
    
-   A custom global-level role has a higher permission priority than the **tenant member** role.
    

For example, RAM User A that belongs to an Alibaba Cloud account is automatically assigned the **tenant member** role, and can access **Data Map**. If the tenant administrator creates a custom global-level role that does not have permissions on **Data Map**, and assigns the custom global-level role to RAM User A, RAM User A cannot access Data Map.

## Appendix 2: Distinguish between workspace-level service modules and global-level service modules

If a drop-down list from which you can select a workspace is displayed after you enter a page of a service module, the module is a workspace-level service module. For example, **Data Integration** and **DataStudio** are workspace-level service modules.![DataStudio](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2725272361/p302860.png)

If no drop-down list from which you can select a workspace is displayed after you enter a page of a service module, the module is a global-level module. For example, **Data Security Guard** and **Data Map** are global-level service modules.![数据地图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7514841371/p302862.png)
