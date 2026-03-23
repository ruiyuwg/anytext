DataWorks provides a comprehensive permission management system for **product management** and **service usage**. DataWorks provides global-level and workspace-level roles that you can use to manage permissions on global-level and workspace-level services. This topic describes how DataWorks uses the role-based access control (RBAC) model to manage permissions on services.

**Note**

Product management permissions in DataWorks are the permissions that are required for users to perform operations in the DataWorks console. For example, you must be granted product management permissions if you want to create, disable, or delete a workspace on the **Workspaces** page, create or configure an exclusive resource group on the **Resource Groups** page, and configure an alert contact on the **Alert Contacts** page. DataWorks uses RAM policies to manage product management permissions. For more information, see [Manage permissions on the DataWorks product and the entities in the DataWorks console by using RAM policies](/help/en/dataworks/user-guide/manage-permissions-on-the-dataworks-services-and-the-entities-in-the-dataworks-console-by-using-ram-policies#task-2154716).

## Global-level and workspace-level services

After you log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the page of a DataWorks service, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9384145461/p303837.png) icon in the upper-left corner of the page. All services of DataWorks that are shown in the following figure are displayed. ![DataWoks界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2725272361/p303050.png)You can click a service to go to the page of the service. On the page of a service, you can determine whether the service is a workspace-level or global-level service in the following way:

-   If the workspace name is displayed in the top navigation bar, the service is a workspace-level service, such as **DataStudio**.
    
-   If the workspace name is not displayed in the top navigation bar, the service is a global-level service, such as **Data Map**.
    

**Note**

For information about how to differentiate a workspace-level service from a global-level service, see the [Appendix: Distinguish between workspace-level services and global-level services](#section-0fd-sq9-0x9) section in this topic.

## Global-level and workspace-level roles

The permissions on services in DataWorks are managed based on the RBAC model. DataWorks provides global-level and workspace-level roles that you can use to manage permissions on global-level and workspace-level services. Assigning a role to a user (either a RAM user or a RAM role) grants that user the permissions associated with the role for specific services.

Key terms:

-   Users: include RAM users and RAM roles.
    
-   Roles: include workspace-level and global-level roles.
    
-   Permissions: include permissions on workspace-level and global-level services.
    

DataWorks provides built-in global-level and workspace-level roles. You can assign these built-in roles to users to grant the users permissions on specific services. You can also create custom global-level or workspace-level roles based on your business requirements. The following figure shows the relationship among users, roles, and permissions.![RBAC权限模型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4405640761/p428180.png)

**Note**

-   Among all types of roles, only the **tenant administrator** role, which is a global-level role, has permissions on all services.
    
-   The **tenant member** role is automatically assigned to all RAM users that belong to an Alibaba Cloud account.
    
-   A custom global-level role has a higher permission priority than the **tenant member** role.
    

For example, RAM User A that belongs to an Alibaba Cloud account is automatically assigned the **tenant member** role, and can access **Data Map**. If the tenant administrator creates a custom global-level role that does not have permissions on **Data Map** and assigns the custom global-level role to RAM User A, RAM User A cannot access Data Map.

## Permissions of global-level roles

DataWorks provides the following global-level roles: tenant administrator, tenant member, tenant security administrator, data directory administrator, metadata collection administrator, and data governance administrator. The following table describes the permissions of the global-level roles.

**Role**

**Permission**

**Authorized by**

**Description**

**Tenant administrator**

Permissions on all DataWorks services, excluding the permissions to perform operations in the [DataWorks console](https://workbench.data.aliyun.com/console?#/)

Tenant owner (Alibaba Cloud account), RAM user to which the AliyunDataWorksFullAccess policy is attached, user that has the **AdministratorAccess** permission, and RAM user that is assigned the **tenant administrator** role. The RAM user that is assigned the **tenant administrator** role can assign the tenant administrator role to other RAM users.

This role has full permissions in DataWorks and can perform operations on all DataWorks services.

**Tenant member**

Same permissions as the Develop role:

-   Read-only permissions on Data Security Guard
    
-   Regular permissions on Security Center, excluding all audit permissions
    
-   Regular permissions on Data Map, excluding the permissions of the data directory administrator and metadata collection administrator roles
    
-   Regular permissions on DataAnalysis
    
-   Regular permissions on Approval Center, excluding the permissions to manage request processing policies
    

No authorization is required. All RAM users that belong to an Alibaba Cloud account are automatically assigned the **tenant member** role.

All RAM users and RAM roles that belong to an Alibaba Cloud account are automatically assigned the **tenant member** role.

**Tenant security administrator**

All permissions on Security Center, Approval Center, and Data Security Guard

The **tenant administrator** can assign the **tenant security administrator** role to a RAM user.

This role is used to manage the security configurations in a workspace.

**Data governance administrator**

Regular permissions and management permissions on **Data Governance Center**, excluding the permissions to activate a service or create, enable, and disable a check item

The **tenant administrator** can assign the **data governance administrator** role to a user.

This role is used to manage Data Governance Center.

**Data directory administrator**

Regular permissions on **Data Map** and permissions to manage **data directories** in **Data Map**

The **tenant administrator** can assign the **data directory administrator** role to a user.

This role is used to manage data directories in Data Map.

**Metadata collection administrator**

Regular permissions on **Data Map** and **metadata collection** permissions

The **tenant administrator** can assign the **metadata collection administrator** role to a user.

This role is used to manage metadata collection in Data Map.

## Permissions of workspace-level roles

DataWorks provides a variety of built-in workspace-level roles, and allows you to create custom workspace-level roles based on your business requirements.

-   Built-in workspace-level roles
    
    DataWorks provides the following built-in workspace-level roles: **Workspace Owner**, **Data Analyst**, **Workspace Administrator**, **Develop**, **O&M**, **Deploy**, **Visitor**, **Security Administrator**, and **Model Designer**.
    
    **Note**
    
    The owner of a workspace is always the Alibaba Cloud account, even if a RAM user under that account is the one who creates the workspace. The **Workspace Owner** role cannot be assigned to other users. For more information about the permissions of built-in workspace-level roles on workspace-level services, see [Permissions of built-in workspace-level roles](/help/en/dataworks/user-guide/permissions-of-built-in-workspace-level-roles#concept-i53-vfm-hfb).
    
-   Custom workspace-level roles
    
    DataWorks allows you to create a custom workspace-level role and grant the role the permissions on workspace-level services. For information about how to create a custom workspace-level role, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-c7g-oln-h94).
    

Permissions of workspace-level roles take effect for the following two types of objects: DataWorks services and compute engines. Permissions on a compute engine include the permissions to add, delete, modify, and query an item such as table or resource in the compute engine. The following table describes the permissions of built-in and custom workspace-level roles on these two types of objects.

**Object**

**Built-in role**

**Custom role**

DataWorks services

DataWorks predefines the permissions of each built-in workspace-level role on workspace-level services. For more information, see [Permissions of built-in workspace-level roles](/help/en/dataworks/user-guide/permissions-of-built-in-workspace-level-roles#concept-i53-vfm-hfb).

When you create a custom workspace-level role, you must specify the permissions of the role on workspace-level services.

MaxCompute compute engine

-   MaxCompute compute engine in the development environment:
    
    By default, built-in workspace-level roles have specified permissions on a MaxCompute compute engine in the development environment. Users that are assigned built-in workspace-level roles can access MaxCompute tables in the development environment.
    
    For more information about the permissions of each built-in workspace-level role on a MaxCompute compute engine in the development environment, see the [Appendix: Mappings between DataWorks built-in workspace-level roles and MaxCompute roles](#section-af4-9hc-3w1) section in this topic.
    
-   MaxCompute compute engine in the production environment:
    
    Built-in workspace-level roles do not have permissions on a MaxCompute compute engine in the production environment. To access MaxCompute tables in the production environment, users must apply for the permissions in Security Center. For more information, see [Manage permissions on MaxCompute](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910).
    

If you map a custom workspace-level role to a MaxCompute role when you create the custom workspace-level role, the custom workspace-level role has the permissions of the mapped MaxCompute role.

E-MapReduce (EMR) compute engine

When you register an EMR cluster to a DataWorks workspace, you can configure mappings between workspace members and Lightweight Directory Access Protocol (LDAP) accounts of the EMR cluster to allow the workspace members to have the permissions of the mapped LDAP accounts on the related EMR compute engine. For more information, see [DataStudio (old version): Associate an EMR computing resource](/help/en/dataworks/user-guide/register-emr-cluster-to-dataworks).

Cloudera's Distribution including Apache Hadoop (CDH) compute engine

When you register a CDH cluster to a DataWorks workspace, you can configure mappings between workspace members and Linux or Kerberos accounts of the CDH cluster to allow the workspace members to have the permissions of the mapped Linux or Kerberos accounts on the related CDH compute engine. For more information, see [Manage workspaces](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-qon-33v-rmd).

Other types of compute engines

Permissions are not granted directly to DataWorks roles. Instead, access is determined by the scheduling access identity (such as a database username and password) that is configured when the data source is added to the workspace. All users assigned a workspace role use this shared identity to run tasks.

Summary:

-   DataWorks provides built-in workspace-level roles that have been mapped to roles of the data source that you added to a workspace. This way, the built-in workspace-level roles have the permissions of the mapped roles. This allows users that are assigned built-in workspace-level roles to perform specified operations on the related compute engine.
    
-   DataWorks supports custom workspace-level roles. When you create a custom workspace-level role, you can map the custom workspace-level role to a role of a compute engine. This way, the custom workspace-level role has specified permissions on the compute engine.
    

After you assign a workspace-level role to a user, the user has permissions on both DataWorks services and compute engines. In the following example, MaxCompute is used to describe how permissions are granted to users that are assigned built-in and custom workspace-level roles.

-   **Scenario 1: Assign a built-in workspace-level role to a user**
    
    A RAM user is added to a DataWorks workspace as a member by a user that is assigned the Workspace Administrator role, and the RAM user is assigned the **Develop** role, which is a built-in workspace-level role.
    
    **Note**
    
    For information about how to add a workspace member and grant permissions to the workspace member, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-zgu-m2y-drl).
    
    ![授予预设角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1955245461/p348695.png)After the RAM user is added to the DataWorks workspace as a member and is assigned the Develop role, the RAM user has specified permissions on DataWorks services and the MaxCompute compute engine for which the related MaxCompute data source is added to the workspace.
    
    -   DataWorks: After the **Develop** role is assigned to the RAM user, the RAM user can develop and commit the code of a node in the workspace but cannot deploy the code of the node to the production environment. Only the **Workspace Owner**, **Workspace Administrator**, and **O&M** roles have permissions to deploy the code of a node to the production environment.
        
    -   MaxCompute: After the **Develop** role is assigned to the RAM user, the **Role\_Project\_Dev** role of the MaxCompute compute engine is assigned to the RAM user. The Role\_Project\_Dev role has specified permissions on the MaxCompute project that runs on the MaxCompute compute engine in the development environment and tables in the project.
        
        **Note**
        
        -   You can assign the Workspace Administrator role to a RAM user to grant the RAM user various permissions on DataWorks. However, the RAM user still cannot access tables in the production environment.
            
        -   The RAM user refers to a RAM user that is not specified as an identity used to access a MaxCompute project in the production environment.
            
        
    
-   **Scenario 2: Assign a custom workspace-level role to a user**
    
    A RAM user is added to a DataWorks workspace as a member by a user that is assigned the Workspace Administrator role, and the RAM user is assigned a custom workspace-level role. ![授予自定义角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1955245461/p348694.png)When you create a custom workspace-level role, you can specify whether this role is mapped to a role of the MaxCompute compute engine for which the related MaxCompute data source is added to the workspace. After the custom workspace-level role is assigned to the RAM user, the RAM user has specified permissions on DataWorks services and the MaxCompute compute engine.
    
    **Note**
    
    For more information about how to create a custom workspace-level role, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-c7g-oln-h94). For more information about how to add a workspace member and grant permissions to the workspace member, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-zgu-m2y-drl).
    
    -   DataWorks: After the custom workspace-level role is assigned to the RAM user, the RAM user is granted permissions on the DataWorks services on which the custom workspace-level role can perform operations.
        
    -   MaxCompute:
        
        -   If the custom workspace-level role is not mapped to a role of the MaxCompute compute engine, the RAM user does not have permissions on the MaxCompute compute engine. The RAM user cannot run commands to query objects in the MaxCompute project that runs on the MaxCompute compute engine.
            
        -   If the custom workspace-level role is mapped to a role of the MaxCompute compute engine, the RAM user has the permissions of the mapped MaxCompute role.
            
    
    **Note**
    
    If a RAM user is specified as the scheduling access identity of a MaxCompute compute engine in the production environment, the RAM user can perform operations on or access tables in the MaxCompute compute engine. In other scenarios, a RAM user cannot perform operations on or access tables in the MaxCompute compute engine in the production environment even after the RAM user is added to the workspace as a member. If you want the RAM user to perform operations on or access tables in the MaxCompute compute engine in the production environment, the RAM user must apply for the required permissions in **Security Center**. For more information about how to apply for permissions, see the [Request permissions on tables in Security Center (latest version)](/help/en/dataworks/request-permissions-on-tables#section-ljm-d44-985) section in the "Request permissions on tables" topic. For information about the identities that can be used to access a MaxCompute compute engine, see [Manage workspaces](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-qxa-30s-zlr).
    

## Appendix: Mappings between DataWorks built-in workspace-level roles and MaxCompute roles

The following table describes the mappings between DataWorks built-in workspace-level roles and MaxCompute roles. The following table also describes the permissions of each role in the development and production environments.

**DataWorks workspace member role**

**MaxCompute role**

**Permission on data in the DataWorks development environment and the related MaxCompute project**

**Permission on data in the DataWorks production environment and the related MaxCompute project**

**Description of permissions in DataWorks**

Workspace Administrator

Role\_Project\_Admin

-   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, the `Read` permissions on the `packages` in the project, and management permissions on the tables, functions, resources, and instances, including permissions to create tables, functions, resources, and instances.
    
-   DataWorks: This role has permissions to perform data development operations and deploy tasks to the production environment.
    

No permissions by default. You must apply for the required permissions in [Security Center](/help/en/dataworks/security-center#concept-pml-qmz-xgb).

A Workspace Administrator manages the workspace's settings and members. This includes configuring properties, data sources, and compute engines, as well as assigning roles (such as Develop, O&M, Deploy, and Visitor) to other members.

Develop

Role\_Project\_Dev

-   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and the `Read` permissions on the `packages` in the project.
    
-   DataWorks: This role has permissions to perform data development operations, but does not have permissions to deploy tasks to the production environment.
    

Can create and manage development assets, including workflows, scripts, resources, UDFs, and tables. This role can create deployment packages but cannot execute the deployment to the production environment.

O&M

Role\_Project\_Pe

This role has all permissions on the project and the functions, resources, instances, and jobs in the project, the Read permissions on the packages in the project, and the Read and Describe permissions on the tables in the project.

**Note**

The O&M role has permissions on the MaxCompute compute engine, but does not have permissions to run nodes in the DataWorks console.

A user with the O&M role has deployment and online O&M permissions that are granted by the Workspace Administrator role, but does not have permissions to perform data development operations.

Deploy

Role\_Project\_Deploy

No permissions by default.

A user with the Deploy role has similar permissions to the O&M role, except for online O&M permissions.

Data Analyst

Role\_Project\_Data\_Analyst

No permissions by default.

By default, a user with the Data Analyst role has permissions only on DataAnalysis.

Visitor

Role\_Project\_Guest

No permissions by default.

A user with the Visitor role has permissions to view data, but does not have permissions to modify workflows or code.

Security Administrator

Role\_Project\_Security

No permissions by default.

A user with the Security Administrator role can be used only in Data Security Guard and has permissions to configure sensitive data identification rules and audit data risks in Data Security Guard.

Model Designer

Role\_Project\_Erd

No permissions by default.

A user with the Model Designer role has permissions to view models and modify parameter configurations in Data Warehouse Planning, Data Standard, Dimensional Modeling, and Data Metric, but does not have permissions to publish models.

N/A

Project Owner

This identity is the owner of the project and has all permissions on the project.

This role has the same permissions in the production environment as in the development environment.

N/A

N/A

Super\_Administrator

This role is the super administrator of the project and has management permissions on the project and all permissions on all types of resources in the project.

This role has the same permissions in the production environment as in the development environment.

N/A

N/A

Admin

When you create a project, the system creates an Admin role for this project and grants the role permissions to access all objects in the project, manage users or roles, and grant permissions to users or roles. In contrast to the Project Owner role, the Admin role does not have permissions to perform the following operations: assign the Admin role to users, configure security policies for the project, modify the authentication model for the project, and modify the permissions of the Admin role. The Project Owner role can assign the Admin role to a user and authorize the user to manage security configurations.

This role has the same permissions in the production environment as in the development environment.

N/A

## Appendix: Distinguish between workspace-level services and global-level services

For a workspace-level service, such as **DataStudio**, the workspace name is displayed in the top navigation bar.![DataStudio](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6496333371/p302860.png)

For a global-level service, such as **Data Map**, the workspace name is not displayed in the top navigation bar.![数据地图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6496333371/p302862.png)
