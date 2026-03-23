You can use a role to grant the same set of permissions to multiple users. A role is a set of permissions. Role-based authorization helps simplify the authorization process and reduce permission management costs. If you want to grant the same set of permissions to multiple users, we recommend that you use role-based authorization. This topic describes the role types that are supported by MaxCompute and the operations that you can perform on different types of roles.

## Role types

MaxCompute provides administrator roles and resource roles.

-   Administrator role: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
    
-   Resource role: You can grant resource-related permissions but not management-related permissions to resource roles.
    

## Built-in roles

MaxCompute provides two administrator roles, Super\_Administrator and Admin, at the project level and at the tenant level.

**Role level**

**Role name**

**Role type**

**Role description**

Project level

Super\_Administrator

Administrator

A built-in administrator role that is provided by MaxCompute. This role has the operation permissions on all resources in a project and all management permissions. For more information about the permissions, see [Permissions of project-level administrator roles](#section-s7j-sgy-0nz).

The project owner or users that are assigned the Super\_Administrator role can assign the Super\_Administrator role to other users.

Admin

Administrator

A built-in administrator role that is provided by MaxCompute. This role has the operation permissions on all resources in a project and some basic management permissions. For more information about the permissions, see [Permissions of project-level administrator roles](#section-s7j-sgy-0nz).

The project owner can assign the Admin role to other users in the project. A user that is assigned the Admin role cannot assign the Admin role to other users, configure security policies for the project, modify the authentication models of the project, or modify the permissions of the Admin role.

Tenant level

Super\_Administrator

Administrator

A built-in administrator role that is provided by MaxCompute. This role has all the permissions that an Alibaba Cloud account has on MaxCompute, except for the permissions to create a project, delete a project, and activate the MaxCompute service.

Admin

Administrator

A built-in administrator role that is provided by MaxCompute. This role has the permissions to manage all objects and network connections.

Project owners have all permissions on the projects that are created by themselves. Only the owner of a project has the permissions to access objects in the project. Other users cannot access the objects in the project unless they are granted the required permissions by the project owner.

## Custom roles

MaxCompute allows you to customize administrator roles and resource roles based on your business requirements, and classify and manage users based on roles.

**Role level**

**Role name**

**Role type**

**Role description**

Project level

Custom role

Administrator and resource

A custom role of MaxCompute. You can customize an administrator role and grant management permissions on a project to this role. You can also customize a resource role and grant permissions on object resources in a project to this role.

Tenant level

Custom role

Resource

A custom role of MaxCompute. You can customize a resource role and grant permissions on object resources such as quotas, network links, and projects to this resource role.

## Role management operations

The following table describes the role management operations that are supported by MaxCompute.

**Role level**

**Section**

**Operation**

**Performed by**

**Operation platform**

Project level

[Create a project-level role](#section-ona-hui-5nw)

Create a project-level role.

A project owner or a user that is assigned a built-in project-level role

-   [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db)
    
-   [MaxCompute Studio](/help/en/maxcompute/user-guide/develop-and-submit-an-sql-script#task-2460353)
    
-   [DataWorks console](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    

[Query project-level roles](#section-0n6-syv-t5f)

Query the roles in a project.

[Drop a project-level role](#section-9hg-6dp-ypx)

Drop a role in a project.

## Permissions of project-level administrator roles

The following table describes the permissions of project-level administrator roles.

**Permission type**

**Object**

**Operation**

**Description**

**Project owner**

**Super\_Administrator**

**Admin**

Project security configuration

Project

SetSecurityConfiguration

Configure security settings for a project.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Project

GetSecurityConfiguration

Query the security settings of a project.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Management of protected projects

Project

AddTrustedProject

Add a protected project.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Project

RemoveTrustedProject

Remove a protected project.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Project

ListTrustedProjects

Query protected projects.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

User management

Project

AddUser

Add a user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

RemoveUser

Remove a user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

ListUsers

Query users.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

ListUserRoles

Query the roles that are assigned to a user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Role management

Project

CreateRole

Create a role.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

DescribeRole

View the permissions of a role.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

AlterRole

Modify the attributes of a role.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

DropRole

Drop a role.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Project

ListRoles

Query roles.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Permission management by using a role

Role

GrantRole

Assign a role to a user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Role

RevokeRole

Revoke a role from a user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Role

ListRolePrincipals

Query the users that are assigned a specific role.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Package management

Project

CreatePackage

Create a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Project

ShowPackages

View packages.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Package

DescribePackage

View the details of a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Package

DropPackage

Drop a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Package

InstallPackage

Install a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Package

UninstallPackage

Uninstall a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Package

AllowInstallPackage

Allow a package to be installed and used in other projects.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Package

DisallowInstallPackage

Revoke the permissions for a package to be installed and used in other projects.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Package

AddPackageResource

Add a resource to a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Package

RemovePackageResource

Remove a resource from a package.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png)

Label management

Table

GrantLabel

Grant permissions to a role or user by using labels.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Table

RevokeLabel

Revoke the permissions that are granted by using labels from a role or user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Table

ShowLabelGrants

Query the permissions that are granted to a role or user by using labels.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Table

SetDataLabel

Configure labels for a role or user.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

Clearance of expired permissions

Project

ClearExpiredGrants

Clear information about expired permissions.

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png)

**Note**

In the preceding table, ![已开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278574.png) indicates that the role has the permission, and ![未开通](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7721950861/p278576.png) indicates that the role does not have the permission.

## Create a project-level role

You can create a role in a MaxCompute project.

**Important**

After you create a role, you must assign the role to a user to which you want to grant permissions. Then, the user has the permissions of the role. For more information, see [Assign a role to a user](/help/en/maxcompute/user-guide/perform-access-control-based-on-project-level-roles#section-pw4-w3i-5ir).

-   Syntax
    
    ```
    create role <role_name> [privilegeproperties("type"="admin|resource")];
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    role\_name
    
    Yes
    
    The name of the role that you want to create. The name must be unique within a project. When you specify a name for the role, take note of the following items:
    
    -   The name must start with a letter.
        
    -   The name can contain only letters and digits.
        
    -   The name must be 1 to 64 characters in length.
        
    
    You can run the `list roles;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the existing roles in a project.
    
    privilegeproperties
    
    No
    
    The type of the role that you want to create.
    
    -   `"type"="admin"`: An administrator role is created. You can grant permissions to this type of role only by using policies.
        
    -   `"type"="resource"`: A resource role is created. If you do not specify this parameter, a resource role is created by default. You can grant permissions to resource roles by using ACLs or policies.
        
    
-   Examples
    
    -   Create a resource role named Worker. Sample statement:
        
        ```
        create role Worker;
        ```
        
    -   Create an administrator role named sale\_admin. Sample statement:
        
        ```
         create role sale_admin privilegeproperties("type"="admin");
        ```
        

## Query project-level roles

You can query the existing roles in a MaxCompute project.

-   Syntax
    
    ```
    list roles;
    ```
    
-   Examples
    
    Query the existing roles in a MaxCompute project. Sample statement:
    
    ```
    list roles;
    ```
    
    The following result is returned:
    
    ```
    admin
    super_administrator
    worker
    ```
    

## Drop a project-level role

You can drop a role from a MaxCompute project.

-   Syntax
    
    ```
    drop role <role_name>;
    ```
    
-   Precautions
    
    When you drop a role, MaxCompute checks whether the role is assigned to users. If the role is assigned to users, the role cannot be dropped. You can drop the role only after you revoke the role from all users that are assigned the role. For more information about how to revoke a role from a user, see [Revoke a role from a user](/help/en/maxcompute/user-guide/perform-access-control-based-on-project-level-roles#section-38s-hr9-6a3).
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    role\_name
    
    Yes
    
    The name of the role that you want to drop.
    
    You can run the `list roles;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the existing roles in a project.
    
-   Examples
    
    Drop the Worker role.
    
    ```
    drop role Worker;
    ```
    

## Delete permissions of a role

After a role is dropped from a MaxCompute project, the permissions of the role, such as the permissions related to ACL-based access control, policy-based access control, and label-based access control, are not deleted from the project. If a role that has the same name as the dropped role is created in the project, the role inherits the permissions of the dropped role. To resolve this issue, MaxCompute allows you to delete permissions of the role. If specific permissions of the dropped role, such as the permissions related to ACL-based access control, policy-based access control, and label-based access control still exist in the project, the project owner or the user that is assigned the Admin or Super\_Administrator role can delete permissions of a role. Sample command:

-   Syntax
    
    ```
    purge privs from role <role_name>;
    ```
    
-   Parameters
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    role\_name
    
    Yes
    
    The name of the role that you want to drop.
    
    You can run the `list roles;` command on the [MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db) to query the existing roles in a project.
    
    **Note**
    
    When you delete the permissions of a role, make sure that the role is dropped. If the role is not dropped, the error message `"Principal <role_name> still exist in the project"` appears when you run the purge privs from role <role\_name>; command.
    

## What to do next

-   After you plan and create a role, you can grant the required permissions to the role based on your business requirements. For more information, see [Perform access control based on project-level roles](/help/en/maxcompute/user-guide/perform-access-control-based-on-project-level-roles#concept-2159759).
    
-   After you create a role, you must assign the role to a user to which you want to grant permissions. Then, the user has the permissions of the role. For more information, see [Assign a role to a user](/help/en/maxcompute/user-guide/perform-access-control-based-on-project-level-roles#section-pw4-w3i-5ir).
