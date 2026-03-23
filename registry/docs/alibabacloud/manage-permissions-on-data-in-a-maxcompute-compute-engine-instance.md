DataWorks grants MaxCompute compute engine permissions to Resource Access Management (RAM) users by mapping predefined or custom workspace roles to compute engine roles in the development environment. A RAM user who is assigned a workspace role obtains the permissions of the mapped compute engine role. By default, RAM users have no permissions in the production environment. This topic describes the basic permissions of predefined roles, the background of MaxCompute permission control, and how to obtain permissions.

## Background information

DataWorks provides predefined workspace roles and supports custom workspace roles. These roles control user access to workspace-level modules and permissions for the compute engine project in the development environment. You can grant permissions for the compute engine project in the development environment to both predefined and custom roles through default or manual authorization.

**Note**

-   An Alibaba Cloud account has full permissions on all cloud resources that it owns. The permission controls described in this topic apply mainly to RAM users.
    
-   For predefined roles, only RAM users with the workspace Developer or Admin role can create nodes and run table creation commands in DataWorks Data Studio.
    

## Workflow

**No.**

**Goal**

**Related document**

1

Understand the basic permissions of predefined DataWorks roles.

-   [Basic permissions of predefined roles](#section-vvq-8b3-5i1)
    
-   [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693)
    

2

Understand how DataWorks workspace members get compute engine permissions.

[How RAM users get compute engine permissions](#section-lot-via-isj)

3

Understand the permission controls that administrators can apply to the production environment.

[MaxCompute data permission control](#section-uip-ztf-9qm)

4

Understand how to view compute engine permissions using commands.

[View MaxCompute engine permissions](#section-fb9-s3n-ege)

## Notes

-   In a standard mode workspace, a RAM user does not have permissions for the production project by default. To query tables in the production environment, the RAM user must request permissions in the **Security Center**. For more information, see [MaxCompute data access control](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910).
    
-   In a basic mode workspace, a RAM user has all permissions on the project by default. Therefore, data permission control cannot be implemented.
    

## Basic permissions of predefined roles

By default, predefined workspace-level roles in DataWorks have access permissions on the compute engine project in the development environment but cannot directly access the compute engine project in the production environment. This means users with these roles can directly access tables, resources, and functions in the development environment, but not in the production environment.

**Note**

For predefined roles, only RAM users with the workspace Developer or Admin role can create nodes in DataWorks Data Studio to run commands that operate on tables, resources, and functions.

**Scenario**

**Description**

MaxCompute compute engine permissions for the development environment

The DataWorks role-based access control (RBAC) system maps to the MaxCompute RBAC system. When a DataWorks workspace member is granted a predefined workspace role, the member is also granted the permissions of the mapped compute engine role.

MaxCompute compute engine permissions for the production environment

By default, RAM users cannot perform operations directly in the production environment.

Neither predefined nor custom DataWorks workspace roles have MaxCompute engine permissions for the production environment. To perform operations in this environment, such as accessing rows in MaxCompute tables, you must request permissions in the **Security Center**. For more information, see [MaxCompute data access control](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910).

**Note**

For predefined roles, only RAM users with the workspace Developer or Admin role can create nodes in DataWorks Data Studio to run table creation commands.

## How RAM users get compute engine permissions

To ensure the security of production data, DataWorks controls how RAM users access MaxCompute tables in standard mode workspaces.

-   Obtain permissions on the development project (automatic authorization):
    
    -   Workspace members are granted compute engine project permissions when they are assigned a predefined role. For more information, see [Scenario 1: Granting permissions using a predefined workspace-level role](#section-q7n-h8a-4jw).
        
    -   Workspace members are granted compute engine project permissions when they are assigned a custom role. For more information, see [Scenario 2: Granting permissions using a custom workspace role](#section-q7n-h8a-4jw).
        
-   You must manually request permissions on the production project in the **Security Center**. The following table describes the scenarios. For more information, see [MaxCompute data access control](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910).
    
    **Scenario**
    
    **Description**
    
    A user in the development environment accesses a table in the production environment within the same workspace
    
    ![场景1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9464518661/p373552.png)
    
    If a DataWorks RAM user is not added as a production compute engine access identity, the user cannot directly perform operations on tables in the production environment of the workspace from the Data Studio interface. If the RAM user needs permissions on production tables, the user must submit a request in the [Security Center](/help/en/dataworks/user-guide/overview-22#concept-2065894). After the request is approved, the user can perform the related operations on the tables from the Data Studio interface.
    
    A user in a development or production environment accesses a table in a development or production environment of another workspace
    
    ![场景2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8464518661/p373551.png)
    
    By default, a RAM user who is not a member of a workspace cannot access development or production tables across projects from the Data Studio interface. To perform operations on development or production tables across projects, the RAM user must submit a request in the [Security Center](/help/en/dataworks/user-guide/overview-22#concept-2065894). After the request is approved, the user can perform the related operations on the tables from the Data Studio interface.
    

## MaxCompute data permission control

If a RAM user needs to access production data, an approval process is required. Administrators can control permissions for the production environment.![安全中心](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1765245461/p369729.png)

1.  The Security Center has a built-in approval flow for permissions on production tables.
    
2.  The [Approval Center](/help/en/dataworks/approval-center-overview#concept-2095438) supports custom approval flows.
    

## View MaxCompute engine permissions

In a MaxCompute SQL node, you can run the following statements to query your permission information.

-   `show grants`: Views your own access permissions.
    
-   `show grants for <username>`: Views the access permissions of a specified user. Only workspace administrators can run this command.
    

## Appendix: Workspace role authorization process

### Scenario 1: Granting permissions using a predefined workspace-level role

-   Implementation: When a RAM user is added to a workspace and granted a predefined workspace role, a MaxCompute underlying role is automatically assigned to the user. This grants the user the permissions that correspond to the underlying role. For more information about the mappings between predefined roles and underlying roles, see [Appendix: Mappings between predefined workspace-level roles and MaxCompute engine permissions](/help/en/dataworks/user-guide/mappings-between-the-built-in-workspace-level-roles-of-dataworks-and-the-roles-of-maxcompute#task-2176942).
    
-   For example, a workspace administrator adds a RAM user as a workspace member and grants the user the **Developer** role.
    
    **Note**
    
    For information about how to add members and grant permissions, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-zgu-m2y-drl).
    
    ![授予预设角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1955245461/p348695.png)
    

After the member is added, the RAM user has specific permissions in DataWorks and the MaxCompute compute engine. The following list describes the operations that the RAM user can perform in DataWorks and the MaxCompute compute engine.

-   In DataWorks, a RAM user who is granted the **Developer** role can develop and submit code. However, they cannot publish the code directly to the production environment. Publishing code to the production environment requires O&M permissions. The **Project Owner**, **Admin**, and **O&M** roles have this permission.
    
-   In the MaxCompute engine, when a RAM user is granted the **Developer** role, the user is also granted the **Role\_Project\_Dev** role. This role grants some permissions on the development project and its tables.
    
    **Note**
    
    -   When a RAM user is granted the predefined Admin role, the user has more DataWorks feature permissions but still cannot directly access production tables.
        
    -   The RAM users mentioned here refer to RAM users that are not specified as non-scheduling compute engine access identities (production project MaxCompute access identities).
        
    

### Scenario 2: Granting permissions using a custom workspace role

Example: A user with workspace administrator permissions adds a RAM user as a workspace member and grants the RAM user a custom DataWorks workspace role.![授予自定义角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1955245461/p348694.png)When you create a custom DataWorks workspace role, you can specify whether to map this role to a MaxCompute compute engine role. After the role is created, you can associate it with a member when you add the member. After the member is added, the RAM user has specific permissions in DataWorks and the MaxCompute compute engine. The following list describes the operations that the RAM user can perform in DataWorks and the MaxCompute compute engine.

**Note**

For information about how to create a custom DataWorks role, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-c7g-oln-h94). For information about how to add members and grant permissions, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-zgu-m2y-drl).

-   In DataWorks: If a RAM user is granted a custom DataWorks role, the user can access only the modules for which the custom role has permissions.
    
-   In the MaxCompute compute engine:
    
    -   If the custom DataWorks role is not mapped to a compute engine permission, the RAM user has no operation permissions on the MaxCompute compute engine and cannot run commands to perform operations such as queries.
        
    -   If the custom DataWorks role is mapped to a compute engine permission, the RAM user has the permissions of the mapped compute engine role. The user's operation permissions are the same as those of the mapped MaxCompute compute engine role.
        

**Note**

By default, a RAM user added as a workspace member has no operation permissions in the production environment, unless the user is specified as the scheduling engine access identity (production project MaxCompute access identity). To operate on and access production tables, the user must request permissions in the **Security Center**. For more information, see [Request permissions on a table in the new Security Center](/help/en/dataworks/request-permissions-on-tables#section-ljm-d44-985). For more information about MaxCompute access identities, see [Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-qxa-30s-zlr).

## FAQ

For information about common permission-related errors, see [FAQ about permission management](/help/en/maxcompute/user-guide/faq-about-permission-management#concept-2144472).

## Appendix: Query permission information using MaxCompute SQL

MaxCompute lets you use SQL statements to query permission information about users, roles, and objects. For more information, see [Query permission information using MaxCompute SQL](/help/en/maxcompute/user-guide/query-permissions-by-using-maxcompute-sql#concept-dqq-xf1-wdb).

## What to do next

MaxCompute lets you access resources across projects. Therefore, in DataWorks, developers can directly access resources in the production environment from the Data Studio interface. For more information about how workspace members can access resources across projects, see [Resource access and permissions for MaxCompute in workspaces of different modes](/help/en/dataworks/user-guide/data-access-behaviors-in-and-access-permissions-on-maxcompute-compute-engine-instances-of-workspaces-in-different-modes#task-2256116).
