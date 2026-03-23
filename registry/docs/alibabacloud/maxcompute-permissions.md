This topic describes the permissions that MaxCompute supports.

## Background

MaxCompute provides fine-grained access control for projects, quotas, network connections, and objects within projects, such as tables, models, functions, resources, and instances. You can also control Tunnel downloads, access to sensitive data, and cross-project access. To ensure object security, you can grant specific permissions on objects in a project to users based on their operation scope.

Authorization involves the following three elements.

**Permission element**

**Description**

Subject

The principal is the [user or role](/help/en/maxcompute/user-guide/users-and-permissions#concept-v1c-zzx-5db) to which permissions are granted.

Note:

-   The grantee must be added to the MaxCompute project.
    
-   If you use an Alibaba Cloud account to grant permissions, you can grant permissions to RAM users of the account and to other Alibaba Cloud accounts.
    
-   If you use a RAM user to grant permissions, you can grant permissions only to other RAM users that belong to the same Alibaba Cloud account. You cannot grant permissions to other accounts.
    

**Note**

An authorizer is a [user](/help/en/maxcompute/user-guide/users-and-permissions#concept-v1c-zzx-5db) who performs authorization operations. The authorizer can perform these operations only if they have the capability to grant permissions on the target objects and actions.

Object

Objects in a MaxCompute tenant.

-   Networklink: a network connection. It is primarily used for [the network connection process](/help/en/maxcompute/user-guide/network-connection-process/#section-qug-auu-qn2).
    
-   [Quota](/help/en/maxcompute/product-overview/quota#concept-2112938): a computing resource queue.
    

Objects or behaviors in a MaxCompute project.

-   [Objects](#table-q6m-nx4-193)
    
    -   [Project](/help/en/maxcompute/product-overview/project#concept-th4-4v1-5db): a MaxCompute project.
        
    -   [Table](/help/en/maxcompute/product-overview/table#concept-nbg-my1-5db): a table or view in a MaxCompute project.
        
        In MaxCompute, a view is a virtual table. The permission operations for views are the same as for tables. If a view owner does not have the SELECT permission on the table that the view references, the view is unavailable.
        
    -   [Model](/help/en/maxcompute/user-guide/maxcompute-model): A model in a MaxCompute project.
        
    -   [Function](/help/en/maxcompute/product-overview/function#concept-tsg-whb-5db): a user-defined function (UDF) in a MaxCompute project.
        
    -   [Resource](/help/en/maxcompute/product-overview/resource#concept-fqd-ygb-5db): a resource that is uploaded to a MaxCompute project, such as a JAR or ZIP file.
        
    -   [Instance](/help/en/maxcompute/product-overview/task-instance#concept-vpx-s3b-5db): an instance that is generated when a MaxCompute job runs.
        
-   [Behavior](#table-wx9-fxf-krq)
    
    -   [Tunnel download](/help/en/maxcompute/user-guide/download-control#concept-2159750): Download tables, functions, resources, or instances.
        
    -   [Column-level sensitive data](/help/en/maxcompute/user-guide/label-based-access-control#concept-nq3-zz1-wdb): Access sensitive data in a table or a column of a table.
        
    -   [Package](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb): Access resources across projects.
        
    -   Management permission control: Perform an action on a permission resource.
        

Action

The actions depend on the object type. Different object types support different actions. For example, you can perform read, write, and query operations on tables.

## Permissions on objects in a tenant

The following table describes the permissions on objects in a MaxCompute tenant.

**Object**

**Action**

**Description**

**Supported authorizers**

**Authorization method**

Networklink

List

View a list of all types of network connection objects.

-   Project owner
    
-   Users with the Super\_Administrator or Admin role
    

Grant permissions to roles: [Policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1#concept-2478724).

CreateNetworklink

Create a network connection object (Networklink) in a tenant.

Describe

Read the metadata of a network connection object.

Drop

Delete a network connection object.

All

All of the preceding permissions on network connection objects.

Quota

Usage

Quota is primarily used to authenticate the `use quota` feature.

-   Project owner
    
-   Users with the Super\_Administrator or Admin role
    

## Permissions on projects and objects in projects

The permissions on MaxCompute projects and objects in projects are described in the following tables.

-   Objects
    
    The following table describes the permissions on objects in MaxCompute projects.
    
    **Object**
    
    **Action**
    
    **Description**
    
    **Supported principals**
    
    **Authorization method**
    
    **Resource description**
    
    Project
    
    Read
    
    View information about the project itself. This does not include any objects in the project.
    
    Project owner
    
    Not supported
    
    acs:odps:\*:projects/<project\_name>
    
    Write
    
    Update information about the project itself. This does not include any objects in the project.
    
    List
    
    Allows you to query all types of objects in a project. For example, `SHOW TABLES;`, `SHOW FUNCTIONS;`, or `SHOW MODELS;`.
    
    -   Project owner
        
    -   Users with the Super\_Administrator or Admin role
        
    
    -   Grant permissions to users or roles: [ACL-based access control](/help/en/maxcompute/user-guide/acl-based-access-control#concept-2159749)
        
    -   Grant permissions to roles: [Policy-based access control](/help/en/maxcompute/user-guide/policy-based-access-control-1#concept-2478724)
        
    
    CreateTable
    
    Allows you to create a table in a project. For example, `CREATE TABLE <table_name>...;`.
    
    CreateModel
    
    Creates a model in a project, for example, `CREATE Model <model_name>...;`.
    
    CreateInstance
    
    Create an instance in the project, which means running a job.
    
    CreateFunction
    
    Allows you to create a function in a project. For example, `CREATE FUNCTION <function_name> ...;`.
    
    CreateResource
    
    Allows you to add a resource to a project. For example, you can run the `add file|archive|py|jar <local_file>... ;` or `add table <table_name> ...;` command to add a resource.
    
    All
    
    All of the preceding permissions on the project.
    
    Schema
    
    Describe
    
    Allows you to read the metadata of a schema, including the creation time, modification time, and owner. For example, you can run the `DESC SCHEMA <schema_name>;` command.
    
    **Note**
    
    This permission does not include the metadata of tables, resources, and functions in the schema.
    
    -   Project owner
        
    -   Schema owner
        
    -   Users with the Super\_Adminstrator or Admin role
        
    
    acs:odps:\*:projects/<project\_name>/schemas/<schema\_name>
    
    Alter
    
    Allows you to modify the metadata of a schema, including the owner and comments. For example, you can run the `ALTER Schema <schema_name> CHANGEOWNER TO <new_owner>;` or
    
    `ALTER Schema <schema_name> SET COMMENT '<new_comment>';`.
    
    **Note**
    
    This permission does not include modifying the metadata of tables, resources, and functions in the schema.
    
    Drop
    
    Drop a schema. For example, `DROP SCHEMA <schema_name>;`.
    
    List
    
    Allows you to query all types of objects in a schema. Examples include `SHOW TABLES;`, `SHOW FUNCTIONS;`, and `SHOW MODELS;`.
    
    CreateTable
    
    Allows you to create a table in a schema. For example, `CREATE TABLE <table_name>...;`.
    
    CreateModel
    
    Creates a model in a schema. For example, `CREATE Model <model_name>...;`.
    
    CreateFunction
    
    Allows you to create a user-defined function in a schema. For example, you can run the `CREATE FUNCTION <function_name>...;` command.
    
    CreateResource
    
    Adds resources to a schema. For example, `add file|archive|py|jar <local_file>...;` or `add table <table_name> ...;`.
    
    All
    
    All of the preceding permissions on the schema.
    
    Table
    
    Describe
    
    Allows you to read the metadata of a table, including the table schema, creation time, modification time, and table data size. For example, you can run the `DESC <table_name>;` command.
    
    -   Table owner
        
    -   Project owner
        
    -   Schema owner
        
    -   Users with the Super\_Administrator role
        
    -   Users with the Admin role (cannot change the table owner)
        
    
    -   Before the three-layer model is enabled:
        
        acs:odps:\*:projects/<project\_name>/tables/<table\_name>
        
    -   After the three-layer model is enabled:
        
        acs:odps:\*:projects/<project\_name>/schemas/<schema\_name>/tables/<table\_name>
        
    
    Select
    
    Allows you to query the data of a table. For example, you can run the `SELECT * FROM <table_name>;` command.
    
    Alter
    
    Allows you to modify the metadata of a table, such as changing the table owner, the table name, or a column name, and adding or deleting partitions. For example, you can run the `ALTER TABLE <table_name> ADD IF NOT EXISTS PARTITION ...;` command.
    
    Update
    
    Allows you to update the data of a table. For example, you can run the `INSERT INTO|OVERWRITE TABLE <table_name> ...;`, `UPDATE <table_name> SET ...;`, or `DELETE FROM <table_name> WHERE ...;` command.
    
    Drop
    
    Allows you to drop a table. For example, you can run the `DROP TABLE <table_name>;` command.
    
    ShowHistory
    
    Allows you to query the backup data of a table. For example, you can run the `SHOW HISTORY FOR TABLE <table_name>;` command.
    
    All
    
    All of the preceding permissions on the table.
    
    Model
    
    Describe
    
    Reads model metadata, including the model type, version, description, and creation time. For example, `DESC <model_name>...;`
    
    -   Model owner
        
    -   Project owner
        
    -   Schema owner
        
    -   Users with the Super\_Administrator role
        
    -   Users with the Admin role (cannot change the model owner)
        
    
    -   Before the three-layer model is enabled: acs:odps:\*:projects/<project\_name>/models/<model\_name>
        
    -   After the three-layer model is enabled: acs:odps:\*:projects/<project\_name>/schemas/<schema\_name>/models/<model\_name>
        
    
    Execute
    
    Invoke a model. This includes specifying a model in an AI function for inference.
    
    Alter
    
    Modifies the metadata of a model, including adding a new model version or modifying the default version. For example, `ALTER Model <model_name>...;` .
    
    Drop
    
    Deletes a model. For example: `DROP MODEL <table_name>;`.
    
    All
    
    All of the preceding permissions on the model.
    
    Function
    
    Read
    
    Read the program file of a MaxCompute UDF.
    
    -   Function owner
        
    -   Project owner
        
    -   Schema owner
        
    -   Users with the Super\_Administrator or Admin role
        
    
    -   Before the three-layer model is enabled: acs:odps:\*:projects/<project\_name>/registration/functions/<functions\_name>
        
    -   After the three-layer model is enabled: acs:odps:\*:projects/<project\_name>/schemas/<schema\_name>/registration/functions/<functions\_name>
        
    
    Write
    
    Update a UDF.
    
    Delete
    
    Allows you to delete a UDF. For example, you can run the `DROP FUNCTION <function_name>;` command.
    
    Execute
    
    Allows you to call a UDF. For example, you can run the `SELECT <function_name> FROM ...;` command.
    
    All
    
    All of the preceding permissions on the function.
    
    Resource
    
    Read
    
    Read a resource.
    
    -   Resource owner
        
    -   Project owner
        
    -   Users with the Super\_Administrator or Admin role
        
    
    -   Before the three-layer model is enabled: acs:odps:\*:projects/<project\_name>/resources/<resources\_name>
        
    -   After the three-layer model is enabled: acs:odps:\*:projects/<project\_name>/schemas/<schema\_name>/resources/<resources\_name>
        
    
    Write
    
    Update a resource.
    
    Delete
    
    Allows you to delete a resource. For example, you can run the `DROP RESOURCE <resource_name>;` command.
    
    All
    
    All of the preceding permissions on the resource.
    
    External Volume
    
    CreateVolume
    
    Create an external volume.
    
    -   External volume owner
        
    -   Project owner
        
    -   Users with the Super\_Administrator or Admin role
        
    
    acs:odps:\*:projects/<project\_name>/volumes/<volume\_name>
    
    Read
    
    Read data from an external volume.
    
    Write
    
    Update data in an external volume.
    
    Delete
    
    Allows you to delete an external volume. For example, you can run the `vfs -rm -r <volume_path>;` command.
    
    All
    
    All of the preceding permissions on an external volume.
    
    Instance
    
    Read
    
    Read an instance.
    
    -   Project owner
        
    -   Users with the Super\_Administrator or Admin role
        
    
    acs:odps:\*:projects/<project\_name>/instances/\*
    
    Write
    
    Update an instance.
    
    All
    
    All of the preceding permissions on an instance.
    
    **Note**
    
    -   The CreateTable permission on a project and the Select, Alter, Update, and Drop permissions on tables in the project require the CreateInstance permission on the project.
        
        If you have the Select, Alter, Update, or Drop permission on a table but do not have the CreateInstance permission on the project, you cannot perform the corresponding operation. For example, to query a table in Project B from Project A, you must have the CreateInstance permission on Project A and the Select permission on the table in Project B.
        
    -   After the three-layer model is enabled for a project, the resource URI of a table, function, or resource includes the schema level. The original resource URI format `acs:odps:*:projects/<project_name>/tables/<table_name>` represents only resources in the `default` schema. It is equivalent to `acs:odps:*:projects/<project_name>/schemas/default/tables/<table_name>`. We recommend that you adjust the resource URI as needed.
        
    
-   Behaviors
    
    The following table describes the permissions on behaviors related to objects in a MaxCompute project.
    
    **Object**
    
    **Action**
    
    **Description**
    
    **Grantors**
    
    **Authorization method**
    
    Table, Function, Resource, Instance
    
    Download
    
    Download table data, resources, functions, or instances using Tunnel.
    
    -   Project owner
        
    -   Users with the Super\_Administrator role
        
    
    [Download access control](/help/en/maxcompute/user-guide/download-control#concept-2159750)
    
    Label
    
    N/A
    
    Read column-level sensitive data.
    
    -   Project owner
        
    -   Users with the Admin role
        
    
    [Label-based access control](/help/en/maxcompute/user-guide/label-based-access-control#concept-nq3-zz1-wdb)
    
    Package
    
    Read
    
    Package objects and their permissions in a project to grant cross-project access.
    
    -   Project owner
        
    -   Users with the Admin role
        
    
    [Cross-project resource access based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb)
    

## Project management permissions

-   The following table lists the actions that are associated with MaxCompute management permissions.
    
    **Permission type**
    
    **Action list**
    
    **Description**
    
    Project security configuration
    
    SetSecurityConfiguration
    
    Set security configurations for a project.
    
    GetSecurityConfiguration
    
    View the security configurations of a project.
    
    SetProperty
    
    Set an IP address whitelist for a project.
    
    Policy management
    
    PutPolicy
    
    Update a policy.
    
    GetPolicy
    
    View a policy.
    
    AddPolicyStatments
    
    Add policy statements.
    
    RemovePolicyStatments
    
    Remove policy statements.
    
    Account Provider management
    
    AddAccountProviders
    
    Add an account provider.
    
    RemoveAccountProviders
    
    Remove an account provider.
    
    ListAccountProviders
    
    List account providers.
    
    Trusted Projects management
    
    AddTrustedProjects
    
    Add trusted projects.
    
    RemoveTrustedProjects
    
    Remove trusted projects.
    
    ListTrustedProjects
    
    List trusted projects.
    
    Principal management
    
    AddUser
    
    Add a user.
    
    RemoveUser
    
    Remove a user.
    
    ListUsers
    
    List users.
    
    ListUserRoles
    
    List the roles of a user.
    
    Role Management
    
    CreateRole
    
    Create a role.
    
    DescribeRole
    
    View a role.
    
    AlterRole
    
    Modify the properties of a role.
    
    DropRole
    
    Delete a role.
    
    ListRoles
    
    List roles.
    
    Role authorization
    
    GrantRole
    
    Grant a role to a user.
    
    RevokeRole
    
    Revoke a role from a user.
    
    ListRolePrincipals
    
    View the list of users that are granted a role.
    
    Package management
    
    CreatePackage
    
    Create a package.
    
    DescribePackage
    
    View a package.
    
    DropPackage
    
    Delete a package.
    
    ShowPackages
    
    List packages.
    
    InstallPackage
    
    Install a package.
    
    UninstallPackage
    
    Uninstall a package.
    
    AllowInstallPackage
    
    Allow other projects to use a package.
    
    DisallowInstallPackage
    
    Disallow other projects from using a package.
    
    AddPackageResource
    
    Add a resource to a package.
    
    RemovePackageResource
    
    Remove a resource from a package.
    
    Label authorization control
    
    GrantLabel
    
    Grant label permissions.
    
    RevokeLabel
    
    Revoke label permissions.
    
    ShowLabelGrants
    
    View label permissions.
    
    SetDataLabel
    
    Set a data label for a user or role.
    
    ACL authorization control
    
    GrantPrivs
    
    Grant ACL permissions.
    
    RevokePrivs
    
    Revoke ACL permissions.
    
    ShowAclGrants
    
    View ACL permissions.
    
    Clear expired permissions
    
    ClearExpiredGrants
    
    Clear expired permissions.
    
-   Resource categories for management permissions:
    
    **Note**
    
    In the following resource URIs, the `acs:odps:*:projects/<project_name>/` part is omitted. Only the part that follows `<project_name>/` is provided.
    
    **Permission object category**
    
    **Resource URI**
    
    **Description**
    
    Project security configuration
    
    authorization/configurations/security\_configuration
    
    project security\_configuration
    
    authorization/configurations/policy
    
    project policy
    
    authorization/configurations/security\_policy
    
    project security\_policy
    
    authorization/configurations/protected\_exception
    
    project protected\_exception
    
    Project
    
    authorization
    
    Management objects, such as account providers and trusted projects in a project.
    
    Project Principal
    
    authorization/users
    
    Project user.
    
    Project role
    
    authorization/roles/resource/<role\_name>
    
    Project resource role.
    
    authorization/roles/administrator/<role\_name>
    
    Project administrator role.
    
    authorization/roles/super\_administrator/super\_administrator
    
    Built-in super\_administrator role of a project.
    
    Project resource
    
    authorization/objecttype/objectname
    
    Resources such as Table, Volume, and Job.
    
    Package management
    
    authorization/packages/<projectname>.<packagename>
    
    Package-related permissions.
    
    Package resource
    
    authorization/packageresources/projectname.packagename/objecttype/objectname
    
    Resource in a package.
    
    Usage notes:
    
    -   For users, URIs can specify only user categories, not specific users, because usernames are involved.
        
    -   For roles, URIs can specify a specific role.
        
    -   To distinguish semantic differences between packages and the resources within them, the URI format for packages is `packages/projectname.packagename`, and the URI format for resources within packages is `packageresources/projectname.packagename/objecttype/objectname`. This lets you use `packages/*` to represent all packages and `packageresources/*` to represent all resources across all packages.
        
-   The following table lists the management permissions.
    
    **Permission type**
    
    **Permission**
    
    **Action**
    
    **Resource**
    
    Project security configuration permissions
    
    Set security configurations.
    
    ```
    SetSecurityConfiguration
    ```
    
    ```
    projects/<project_name>/authorization/configurations/security_configuration
    ```
    
    View security configurations.
    
    ```
    GetSecurityConfiguration
    ```
    
    Set a policy.
    
    ```
    PutPolicy
    ```
    
    ```
    projects/<project_name>/authorization/configurations/policy
    ```
    
    View a policy.
    
    ```
    GetPolicy
    ```
    
    Set protected\_exception.
    
    ```
    PutPolicy
    ```
    
    ```
    projects/<project_name>/authorization/configurations/protected_exception
    ```
    
    View protected\_exception.
    
    ```
    GetPolicy
    ```
    
    Set security\_policy.
    
    ```
    PutPolicy
    ```
    
    ```
    projects/<project_name>/authorization/configurations/security_policy
    ```
    
    View security\_policy.
    
    ```
    GetPolicy
    ```
    
    Project Account Provider management
    
    Add an account provider.
    
    ```
    AddAccountProvider
    ```
    
    ```
    projects/<project_name>/authorization
    ```
    
    Delete an account provider.
    
    ```
    RemoveAccountProvider
    ```
    
    List account providers.
    
    ```
    ListAccountProviders
    ```
    
    Project Trusted Projects management
    
    Add trusted projects.
    
    ```
    AddTrustedProjects
    ```
    
    ```
    projects/<project_name>/authorization
    ```
    
    Delete trusted projects.
    
    ```
    RemoveTrustedProjects
    ```
    
    List trusted projects.
    
    ```
    ListTrustedProjects
    ```
    
    Project Principal management
    
    Add a user.
    
    ```
    AddUser
    ```
    
    ```
    projects/<project_name>/authorization/users
    ```
    
    Delete a user.
    
    ```
    RemoveUser
    ```
    
    List users.
    
    ```
    ListUsers
    ```
    
    List user roles.
    
    ```
    ListUserRoles
    ```
    
    Project role management
    
    Add a resource role.
    
    ```
    CreateRole
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource
    ```
    
    View a resource role.
    
    ```
    DescribeRole
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    Delete a resource role.
    
    ```
    DropRole
    ```
    
    Add an administrator role.
    
    N/A
    
    **Note**
    
    Only a project owner or a user with the Super\_Administrator role can create an administrator role and grant permissions to the role.
    
    Delete an administrator role.
    
    View an administrator role.
    
    ```
    DescribeRole
    ```
    
    ```
    projects/<project_name>/authorization/roles/administrator/<role_name>
    ```
    
    List roles.
    
    ```
    ListRoles
    ```
    
    ```
    projects/<project_name>/authorization/roles
    ```
    
    Project role Policy management
    
    Set a policy for a resource role.
    
    ```
    PutPolicy
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    View the policy of a resource role.
    
    ```
    GetPolicy
    ```
    
    Add policy statements for a resource role.
    
    ```
    AddPolicyStatments
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    Remove policy statements from a resource role.
    
    ```
    RemovePolicyStatments
    ```
    
    Set a policy for an administrator role.
    
    N/A
    
    **Note**
    
    Only a project owner or a user with the Super\_Administrator role can create an administrator role and grant permissions to the role.
    
    View the policy of an administrator role.
    
    ```
    GetPolicy
    ```
    
    ```
    projects/<project_name>/authorization/roles/administrator/<role_name>
    ```
    
    Add policy statements for an administrator role.
    
    N/A
    
    **Note**
    
    Only a project owner or a user with the Super\_Administrator role can create an administrator role and grant permissions to the role.
    
    Remove policy statements from an administrator role.
    
    Role authorization and viewing
    
    Grant a resource role to a user.
    
    ```
    GrantRole
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    Revoke a resource role from a user.
    
    ```
    RevokeRole
    ```
    
    Grant an administrator role to a user.
    
    ```
    GrantRole
    ```
    
    ```
    projects/<project_name>/authorization/roles/administrator/<role_name>
    ```
    
    Revoke an administrator role from a user.
    
    ```
    RevokeRole
    ```
    
    Grant the Super\_Administrator role to a user.
    
    N/A
    
    **Note**
    
    Only a project owner or a user with the Super\_Administrator role can grant or revoke the Super\_Administrator role.
    
    Revoke the Super\_Administrator role from a user.
    
    View the list of users that are granted a resource role.
    
    ```
    ListRolePrincipals
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    View the list of users that are granted an administrator role.
    
    ```
    ListRolePrincipals
    ```
    
    ```
    projects/<project_name>/authorization/roles/administrator/<role_name>
    ```
    
    View the list of users that are granted the Super\_Administrator role.
    
    ```
    ListRolePrincipals
    ```
    
    ```
    projects/<project_name>/authorization/roles/super_administrator/super_administrator
    ```
    
    View the list of roles that are granted to a user.
    
    ```
    ListPrincipalRoles
    ```
    
    ```
    projects/<project_name>/authorization/principals/users
    ```
    
    Package management
    
    Create a package.
    
    ```
    CreatePackage
    ```
    
    ```
    projects/<project_name>/authorization/packages
    ```
    
    List packages.
    
    ```
    ShowPackages
    ```
    
    View a package.
    
    ```
    DescribePackage
    ```
    
    ```
    projects/<project_name>/authorization/packages/<package_creater_project_name>.<package_name>
    ```
    
    Delete a package.
    
    ```
    DropPackage
    ```
    
    Install a package.
    
    ```
    InstallPackage
    ```
    
    ```
    projects/<project_name>/authorization/packages/<package_creater_project_name>.<package_name>
    ```
    
    Uninstall a package.
    
    ```
    UninstallPackage
    ```
    
    Allow other projects to use a package.
    
    ```
    AllowInstallPackage
    ```
    
    ```
    projects/<project_name>/authorization/packages/<package_creator_project_name>.<package_name>
    ```
    
    Disallow other projects from using a package.
    
    ```
    DisallowInstallPackage
    ```
    
    Add a resource to a package.
    
    ```
    AddPackageResource
    ```
    
    ```
    projects/<project_name>/authorization/packages/<package_creator_project_name>.<package_name>
    ```
    
    Remove a resource from a package.
    
    ```
    RemovePackageResource
    ```
    
    Label permission control
    
    Grant label permissions on resources in a project.
    
    ```
    GrantLabel
    ```
    
    ```
    projects/<project_name>/authorization/schemas/*/tables/*
    ```
    
    **Note**
    
    You can use an asterisk (\*) to specify all resources. For example, you can use `tables/*` to specify all tables in a project.
    
    Revoke label permissions on resources in a project.
    
    ```
    RevokeLabel
    ```
    
    View label permissions on resources in a project.
    
    ```
    ShowLabelGrants
    ```
    
    Grant label permissions on package resources.
    
    ```
    GrantLabel
    ```
    
    ```
    projects/<project_name>/authorization/packageresources/<package_creator_project_name>.<package_name>/<resource_relative_id>
    ```
    
    Revoke label permissions on resources in a package.
    
    ```
    RevokeLabel
    ```
    
    View label permissions on resources in a package.
    
    ```
    ShowLabelGrants
    ```
    
    View label permissions for a user.
    
    ```
    ShowLabelGrants
    ```
    
    ```
    projects/<project_name>/authorization/users
    ```
    
    View label permissions for a role.
    
    ```
    ShowLabelGrants
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    **Note**
    
    You cannot grant, set, or view label permissions for administrator roles.
    
    Set a data label for a user or role
    
    Set a data label for a user.
    
    ```
    SetDataLabel
    ```
    
    ```
    projects/<project_name>/authorization/users
    ```
    
    Set a data label for a role.
    
    ```
    SetDataLabel
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    ACL permission control
    
    Grant ACL permissions on resources in a project.
    
    ```
    GrantPrivs
    ```
    
    ```
    projects/<project_name>/authorization/<resource_relative_id>
    ```
    
    **Note**
    
    -   You can control the `actions` for ACL authorization.
        
        Policies support string collection operations such as `StringIntersectSetEmpty(IgnoreCase)/StringIntersectSetNotEmpty(IgnoreCase)/StringSubSet(IgnoreCase)/StringNotSubSet(IgnoreCase)`. You can use these operators in a policy to apply constraints to the Actions collection using the `acs:Privileges` condition key.
        
        For example, the following policy denies the user `odpsxxxx@aliyun.com` from granting the `Download` or `Select` permission on all tables in the `prj1` project:
        
        ```
        {
        "Action":[
        "odps:GrantPrivs"],
        "Effect":"Deny",
        "Principal":"aliyun$odpsxxxx@aliyun.com",
        "Resource":"acs:odps::projects/prj1/authorization/acl/tables/*",
        "Condition":{
        "IntersectionSetNotNull":{
        "acs:Privileges":["Download","Select"]
        }
        }
        }
        ```
        
    -   For a project, the `resource_relative_id` is `projects/<project_name>`.
        
    
    Revoke ACL permissions on resources in a project.
    
    ```
    RevokePrivs
    ```
    
    View ACL permissions on resources in a project.
    
    ```
    ShowAclGrants
    ```
    
    Grant ACL permissions on package resources.
    
    ```
    GrantPrivs
    ```
    
    ```
    projects/<project_name>/authorization/packageresources/<package_creater_project_name>.<package_name>/<resource_relative_id>
    ```
    
    Revoke ACL permissions on package resources.
    
    ```
    RevokePrivs
    ```
    
    View ACL permissions on package resources.
    
    ```
    ShowAclGrants
    ```
    
    View ACL permissions for a user.
    
    ```
    ShowAclGrants
    ```
    
    ```
    projects/<project_name>/authorization/users
    ```
    
    View ACL permissions for a resource role.
    
    ```
    ShowAclGrants
    ```
    
    ```
    projects/<project_name>/authorization/roles/resource/<role_name>
    ```
    
    Clear expired permissions
    
    Clear expired permissions.
    
    ```
    ClearExpiredGrants
    ```
    
    ```
    projects/<project_name>/authorization
    ```
