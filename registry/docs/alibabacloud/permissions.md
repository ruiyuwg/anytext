To ensure data security in a MaxCompute project, the project owner or users with authorization permissions must manage the permissions of project members. This ensures that permissions are neither too broad nor too narrow. This topic describes the permission management system of MaxCompute.

## Permission system

**Category**

**Description**

Principals

MaxCompute supports the following principals:

-   Users: include Alibaba Cloud accounts, RAM users, and RAM roles. MaxCompute lets you manage users. For example, you can add, delete, and query users. For more information about how to manage users, see [User planning and management](/help/en/maxcompute/user-guide/user-planning-and-management#concept-kvw-stz-vdb).
    
-   Roles: MaxCompute has built-in administrator roles and supports custom roles. MaxCompute lets you manage custom roles. For example, you can add, delete, and query custom roles. For more information about how to manage roles, see [Role planning](/help/en/maxcompute/user-guide/role-planning#concept-r4v-qzz-vdb).
    

Objects

MaxCompute supports fine-grained access control on objects such as projects, tables, models, resources, functions, and instances. You can manage user operation permissions in a fine-grained manner based on the authorization solutions that MaxCompute provides. For more information about the permissions on each object, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).

Access control

MaxCompute provides the following authorization solutions to meet different authorization requirements:

-   [ACL-based access control](/help/en/maxcompute/user-guide/acl-based-access-control#concept-2159749): Grants a user or role the operation permissions on projects, tables, models, resources, functions, or instances.
    
-   [Policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1#concept-2478724): Grants a role the operation permissions on projects, tables, models, resources, functions, or instances. After the role is assigned to a user, the user is granted the related permissions.
    
-   [Download permission control](/help/en/maxcompute/user-guide/download-control#concept-2159750): Grants a user or role the permissions to download tables, functions, or resources.
    
-   [Label-based access control](/help/en/maxcompute/user-guide/label-based-access-control#concept-nq3-zz1-wdb): Provides access control for sensitive data. Users or roles can access data only within their permitted access level. If they need to access highly sensitive data, you must grant them label-based permissions.
    
-   [Access resources across projects using packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb): For scenarios that require cross-project resource access, you can package the resources that need to be accessed and allow other projects to install the package.
    

Role-based authorization

To grant the same operation permissions to multiple users, you can use role-based authorization to simplify the process. For more information about role-based authorization operations, see [Project-level role authorization](/help/en/maxcompute/user-guide/perform-access-control-based-on-project-level-roles#concept-2159759).

User authorization

You can grant permissions to users in the following ways:

-   Direct authorization: Suitable for granting permissions to individual users on a case-by-case basis.
    
-   Role-based authorization: Suitable for granting the same operation permissions to multiple users.
    

For more information about user authorization operations, see [Manage user permissions using commands](/help/en/maxcompute/user-guide/manage-user-permissions-by-using-commands#concept-2159763).

Get permission information

View the permission information of project members to check whether the granted permissions have taken effect. For more information about how to view permission information, see [Query permission information](/help/en/maxcompute/user-guide/query-permissions-by-using-maxcompute-sql#concept-dqq-xf1-wdb).

**Note**

DataWorks also has its own permission system. If you maintain a MaxCompute project using DataWorks, you can use the user and role management features of DataWorks to assign roles for permission management. For more information about the relationship between DataWorks and MaxCompute permissions, see [Permission relationship between MaxCompute and DataWorks](#section-u7s-ys0-vv0).

## Authentication process

When a MaxCompute user performs an operation on a MaxCompute object, the user must be authenticated. The resource owner, an Alibaba Cloud account, has the highest level of permissions. The resource owner can perform all operations and grant management permissions to RAM users or RAM roles. The Alibaba Cloud account and users with management permissions can then grant permissions to other users. This process determines which users receive permissions, on which objects, and for which specific operations.

Based on the object and the specific operation, the MaxCompute authentication process is divided into RAM authentication and MaxCompute service authentication. The following figure shows the authentication flow for different user operations.![MaxCompute权限模型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8823266761/p551807.png)

### RAM authentication

When a user needs to activate services, purchase resources, or manage quotas, projects, or tenants in the MaxCompute console, Alibaba Cloud performs RAM authentication to verify that the user has the required permissions. If the user does not have the permissions, the operations cannot be performed.

-   For a list of operations that require RAM authentication, see [RAM permissions](/help/en/maxcompute/user-guide/ram-permissions#task-2249832).
    
-   For more information about how to grant system policies to RAM users or RAM roles, see [Manage the permissions of a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

### MaxCompute service authentication

-   **Authentication for operations at the MaxCompute project level**
    
    Operation permissions at the MaxCompute project level include permissions for project-level object operations and project-level management operations.
    
    -   Project-level object operation permissions: These include permissions to perform operations on projects and objects within projects, such as projects (Project), tables (Table), models (Model), functions (Function), and resources (Resource). Examples of these operations include CreateTable, CreateModel, CreateInstance, and SelectTable. For more information, see [List of permissions on projects and objects in projects](/help/en/maxcompute/user-guide/maxcompute-permissions#section-yzi-e4i-g3z).
        
    -   Project-level management permissions: These include permissions for configuring project security, managing project-level user and role permissions, managing packages, controlling label-based permissions, and clearing expired permissions. For more information, see [List of project management permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#section-jtj-n48-oez).
        
    
    The authentication process for operations at the MaxCompute project level is as follows:
    
    1.  User authentication. For more information about user authentication, see [User authentication](/help/en/maxcompute/user-guide/user-authentication#concept-zql-zj4-vdb).
        
        -   You can log on to the MaxCompute console using an Alibaba Cloud account, which can be a primary account or a RAM user.
            
        -   When you use a tool such as odpscmd or JDBC to connect to MaxCompute, an AccessKey ID and an AccessKey secret are required.
            
        -   When a user connects to MaxCompute, the system determines whether the account is a user of the current project. A user can initiate operations in a project only after an administrator adds the user to the project by running the `add user "xxx"` command.
            
    2.  Request source check (IP check): The system checks the IP address whitelist. For more information, see [Manage IP address whitelists](/help/en/maxcompute/security-and-compliance/manage-ip-address-whitelists#task-2330709).
        
    3.  Project status check: The system checks whether the project is in the Normal state.
        
    4.  MaxCompute permission check: After a user is added to a project, the user must be granted the required operation permissions to perform operations within the permitted scope. These permissions can be granted using various authorization solutions, such as [ACL-based access control](/help/en/maxcompute/user-guide/acl-based-access-control#concept-2159749), [Policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1#concept-2478724), [Download permission control](/help/en/maxcompute/user-guide/download-control#concept-2159750), [Label-based access control](/help/en/maxcompute/user-guide/label-based-access-control#concept-nq3-zz1-wdb), and [accessing resources across projects using packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb). For more information about how to manage project-level users, see [Manage user permissions using commands](/help/en/maxcompute/user-guide/manage-user-permissions-by-using-commands#concept-2159763).
        
    
-   **Authentication for operations at the MaxCompute tenant level**
    
    Operation permissions at the MaxCompute tenant level include permissions for tenant-level object operations and tenant-level management operations.
    
    -   Tenant-level object operation permissions include permissions on tenant-level objects such as quotas and network connections (NetworkLink). Examples of these operations include \`use quota\` and \`CreateNetworkLink\`. For a list of operations, see [List of permissions on objects in a tenant](/help/en/maxcompute/user-guide/maxcompute-permissions#section-a7e-5m3-9cl).
        
        Tenant-level object operations also allow one account to manage multiple Project objects, which simplifies permission management.
        
    -   Tenant-level management permissions are for managing users and roles at the tenant level. This includes adding or deleting tenant-level users, creating or deleting tenant-level roles, viewing lists of tenant-level users or roles and their permissions, granting tenant-level roles to users, revoking tenant-level roles from users, adding tenant-level roles to projects, and removing tenant-level roles from projects.
        
    
    When a user needs to perform these operations, MaxCompute authenticates the user to verify that the user has the required permissions. If the user does not have the permissions, the operations cannot be performed.
    

## Authorization flows

The common authorization flows in MaxCompute are as follows.

-   Flow 1: Directly grant a user the operation permissions on objects
    
    After the project owner or a user with a built-in administrator role adds the target user to the MaxCompute project, a user with authorization permissions grants the target user operation permissions on objects using the ACL-based access control solution.
    
    ![为用户授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3078670561/p381898.png)
    
-   Flow 2: Grant multiple users the operation permissions on objects based on a role
    
    After the project owner or a user with a built-in administrator role adds the target users and a role to the MaxCompute project, a user with authorization permissions grants operation permissions on objects to the target role using the ACL, Policy, or Download permission control solution. Then, the role is assigned to the target users.
    
    ![通过角色为用户授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4078670561/p381951.png)
    
-   Flow 3: Directly grant a user the permissions to access highly sensitive data
    
    After the project owner or a user with a built-in administrator role adds the target user to the MaxCompute project, the project owner or a user with the Admin role can set a permitted access level for the target user. In addition, when the user needs to access certain highly sensitive data, the project owner or Admin user can also grant the target user permissions to access the highly sensitive data using the label-based access control solution.
    
    ![授予访问高敏感级数据的权限](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4078670561/p383068.png)
    
-   Flow 4: Grant multiple users the permissions to access highly sensitive data based on a role
    
    After the project owner or a user with a built-in administrator role adds the target users to the MaxCompute project, the project owner or a user with the Admin role can set a permitted access level for the target users. When multiple users need to access the same highly sensitive data, you can create a target role. The project owner or a user with the Admin role can grant the role permissions to access the highly sensitive data using the label-based access control solution. Then, the role is assigned to the users.
    
    ![通过角色为用户授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4078670561/p383092.png)
    
-   Flow 5: Access resources across projects and directly grant users in the target project permissions to access resources within a package
    
    The owner of the project to which the resources belong creates a package and adds the resources. Then, the owner permits the target project to install the package. The owner of the target project installs the package and grants permissions to users using the ACL-based or label-based access control solution.
    
    ![为用户授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3078670561/p383097.png)
    
-   Flow 6: Access resources across projects and grant users permissions to access resources within a package based on a role
    
    The owner of the project to which the resources belong creates a package and adds the resources. Then, the owner permits the target project to install the package. The owner of the target project installs the package, grants permissions to a role using the ACL-based or label-based access control solution, and then assigns the role to users.
    
    ![通过角色为用户授权](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3078670561/p383117.png)
    

## Permission relationship between MaxCompute and DataWorks

Before you can understand the permission relationship between MaxCompute and DataWorks, you must understand the relationship between MaxCompute projects and DataWorks workspaces:

-   When you create a DataWorks workspace in **Basic Mode**, a MaxCompute project is attached.
    
-   When you create a DataWorks workspace in **Standard Mode**, a MaxCompute development (\_dev) project and a MaxCompute production (Prod) project are attached.
    

You also need to set the **MaxCompute visitor identity**, which determines the account-level access policy for the MaxCompute project.

Managing permissions using the MaxCompute permission system does not affect user operations in the DataWorks UI. DataWorks provides a visual interface to manage MaxCompute project permissions. However, assigning roles to users in DataWorks may affect their permissions to perform operations on MaxCompute resources.

Both DataWorks and MaxCompute use the concepts of users and roles. The relationship between their permissions is as follows:

-   Roles and role permissions
    
    DataWorks provides preset MaxCompute roles to grant project members the required permissions on MaxCompute resources during data development. The following table describes the relationship between MaxCompute roles and preset DataWorks roles.
    
    **Mapping**
    
    **Permission description**
    
    **DataWorks role or identity**
    
    **MaxCompute role**
    
    **Permission on data in the DataWorks development environment and the associated MaxCompute project**
    
    **Permission on data in the DataWorks production environment and the associated MaxCompute project**
    
    **Description of permissions in DataWorks**
    
    Workspace Administrator
    
    Role\_Project\_Admin
    
    -   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and has `Read` permissions on the `packages` in the project.
        
    -   DataWorks: This role has permissions to perform data development operations and deploy tasks to the production environment.
        
    
    No permissions by default. You must request the required permissions in Security Center.
    
    A user with the Workspace Administrator role is the administrator of a workspace. The administrator has permissions to manage the basic properties, data sources, compute engine configurations, and members of the workspace and can assign the Workspace Administrator, Development, O&M, Deploy, or Visitor role to workspace members.
    
    Development
    
    Role\_Project\_Dev
    
    -   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and has `Read` permissions on the `packages` in the project.
        
    -   DataWorks: This role has permissions to perform data development operations but does not have permissions to deploy tasks to the production environment.
        
    
    No permissions by default. You must request the required permissions in Security Center.
    
    A user with the Development role has permissions to create workflows, script files, resources, user-defined functions (UDFs), tables, and deployment tasks, and delete tables, but does not have permissions to perform deployment operations.
    
    O&M
    
    Role\_Project\_Pe
    
    This role has all permissions on the project and the functions, resources, instances, and jobs in the project, Read permissions on the packages in the project, and Read and Describe permissions on the tables in the project.
    
    **Note**
    
    The O&M role has permissions on the MaxCompute compute engine but does not have permissions to run nodes in the DataWorks console.
    
    No permissions by default. You must request the required permissions in Security Center.
    
    The O&M role has deployment and online O&M permissions that are granted by the Workspace Administrator role but does not have permissions to perform data development operations.
    
    Deploy
    
    Role\_Project\_Deploy
    
    No permissions by default.
    
    No permissions by default. You must request the required permissions in Security Center.
    
    The Deploy role has similar permissions to the O&M role, except for online O&M permissions.
    
    Visitor
    
    Role\_Project\_Guest
    
    No permissions by default.
    
    No permissions by default. You must request the required permissions in Security Center.
    
    A user with the Visitor role has permissions to view data but does not have permissions to modify workflows or code.
    
    Security Manager
    
    Role\_Project\_Security
    
    No permissions by default.
    
    No permissions by default. You must request the required permissions in Security Center.
    
    The Security Manager role can be used only in Data Security Guard and has permissions to configure sensitive data identification rules and audit data risks in Data Security Guard.
    
    Data Analyst
    
    Role\_Project\_Data\_Analyst
    
    -   MaxCompute: This role has the `CreateInstance` and `CreateTable` permissions in the project.
        
    -   DataWorks: This role has permissions to view models in [Data Modeling](/help/en/dataworks/user-guide/overview-15) and permissions to view and use the features in [DataAnalysis](/help/en/dataworks/user-guide/data-analysis-overview/).
        
    
    No permissions by default. You must request the required permissions in Security Center.
    
    This role has permissions only on [DataAnalysis](/help/en/dataworks/user-guide/data-analysis-overview/#concept-270168).
    
    Model Designer
    
    Pole\_Project\_Erd
    
    No permissions by default.
    
    No permissions by default. You must request the required permissions in Security Center.
    
    This role has permissions to view models in [Data Modeling](/help/en/dataworks/user-guide/overview-15#concept-2090781) and modify parameter configurations in Data Warehouse Planning, Data Standard, Dimensional Modeling, and Data Metric. This role does not have permissions to publish models.
    
    Data Governance Administrator
    
    Role\_Project\_Data\_Governance
    
    No permissions by default.
    
    No permissions by default. You must request the required permissions in Security Center.
    
    This role has permissions only on [Data Governance Center](/help/en/dataworks/user-guide/data-governance-center/). This role can be used to view and manage detected data governance issues, configure data governance plans, and enable check items. This role does not have permissions on operations such as data development and O&M.
    
    Workspace owner (Alibaba Cloud account)
    
    Project Owner
    
    This identity is the owner of the project and has all permissions on the project.
    
    The same permissions as in the development environment.
    
    None.
    
    None
    
    Super\_Administrator
    
    This role is the super administrator of the project and has management permissions on the project and all permissions on all types of resources in the project.
    
    The same permissions as in the development environment.
    
    None.
    
    None
    
    Admin
    
    When you create a project, the system creates an Admin role for this project and grants the role permissions to access all objects in the project, manage users or roles, and grant permissions to users or roles. Compared with the Project Owner role, the Admin role does not have permissions to perform the following operations: assign the Admin role to users, configure security policies for the project, modify the authentication model for the project, and modify the permissions of the Admin role. The Project Owner role can assign the Admin role to a user and authorize the user to manage security configurations.
    
    The same permissions as in the development environment.
    
    None.
    
    None
    
    Role\_Project\_Scheduler
    
    No permissions by default.
    
    -   MaxCompute: This role has all permissions on the project and the tables, functions, resources, instances, and jobs in the project, and has Read permissions on the packages in the project.
        
    -   DataWorks: This role is used as the identity of committing tasks to the production environment for scheduling.
        
        **Note**
        
        If you specify a RAM user or RAM role as the **default access identity** when you add a MaxCompute project to a workspace in the production environment as a data source, the RAM user or RAM role is granted the permissions that are the same as those of the Role\_Project\_Scheduler role of the MaxCompute project. For information about how to specify the default access identity, see the [Add a data source](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb60400bb) section in Add a new MaxCompute data source.
        
    
    The identity is used to schedule and run MaxCompute tasks in the production environment.
    
-   Users and user permissions
    
    -   In a DataWorks workspace, the workspace owner must be an Alibaba Cloud account, and the workspace members must be RAM users that belong to the same Alibaba Cloud account as the workspace. You can use the [Workspace Management](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693) feature in DataWorks to add users and assign roles to them.
        
    -   In a MaxCompute project, an Alibaba Cloud account can be the project owner or a project member. A RAM user of an Alibaba Cloud account can also be a project member. You can run the `add user xxx;` command to add a user. You can also run the `add role xxx;` and `grant role xxx to user xxx;` commands to add a role and attach it to a user.
        
    
    The following figure shows the relationship between users and permissions in different workspace modes and supported visitor identities.
    
    ![用户与权限关系](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3078670561/p383617.png)
    
    **Note**
    
    The MaxCompute permissions corresponding to DataWorks roles are fixed. If a user is granted MaxCompute role permissions through a DataWorks role and is then granted other MaxCompute permissions using the command line, the user's permissions in MaxCompute will be inconsistent with the permissions displayed in DataWorks.
