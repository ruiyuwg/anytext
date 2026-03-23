This topic describes the permission system of Data Lake Formation (DLF) and how to grant permissions to Resource Access Management (RAM) users so that they can properly use the features of DLF.

The permissions of DLF are divided into two main categories: RAM permissions and DLF data permissions. You generally need to pass these two levels of permission verification before you can correctly access data resources.

-   RAM permissions: control the access to all DLF API operations and determine whether RAM users can access certain DLF API operations or pages.
    
-   DLF data permissions: control the access and use of DLF internal resources, including databases, tables, columns, functions, and data catalogs. They also control the management of data permissions.
    

## Layer 1: API operation permissions for RAM users

This layer controls the access permissions on all DLF API operations and determines whether RAM users can access certain DLF API operations or pages. The following two built-in authorization policies are provided in the [RAM console](https://ram.console.alibabacloud.com/policies):

-   AliyunDLFFullAccess: defines the permissions to call all DLF API operations.
    
-   AliyunDLFReadOnlyAccess: defines the permissions to call all DLF read-only API operations, such as List and Get API operations. However, it does not grant the permissions to call other API operations such as Create and Delete.
    
    **Important**
    
    SubmitQuery API calls are considered write operations. To successfully call the SubmitQuery API operation, attach the `AliyunDLFFullAccess` policy to RAM users.
    

You can also customize RAM authorization policies based on your access control requirements to implement more fine-grained access control at the API operation level.

## Layer 2: DLF fine-grained data permissions

This layer controls the permissions to access and use DLF internal resources, including databases, tables, columns, functions, and data catalogs. It also controls permissions to manage roles, users, and permissions.

**Note**

-   The second layer mainly controls data permissions, which are divided into two categories: "DLF fine-grained data permissions" and "DLF-DSS coarse-grained data permissions for RAM users". An OR relationship exists between the two categories. As long as a user passes one of the two data permission verifications, the user has the data permission. Otherwise, if both data permission verifications fail, the user does not have the data permission.
    
-   The verification of permissions on data resources, such as databases, tables, columns, functions, and data catalogs, takes effect only after you turn on the data catalog permission control switch. Fine-grained data permission verification is performed on permissions for managing roles, users, and permissions, regardless of whether the data catalog permission control switch is turned on.
    

To make it easier for administrators to manage data permissions, DLF provides two types of built-in data permission administrators. You can find these two roles by choosing Data Permission > Role and add specific users to the roles:

-   admin (data lake administrator): has all the data permissions and authorization permissions in DLF.
    
-   super\_administrator (super administrator): has all the data permissions and authorization permissions in DLF and can modify admin users.
    

For information about more fine-grained permission settings, see [Overview](/help/en/dlf/dlf-1-0/user-guide/overview).

### Layer 2: DLF-DSS coarse-grained data permissions for RAM users

This layer controls the permissions to access and use DLF internal resources, including databases, tables, columns, functions, and data catalogs. It also controls the permissions to manage roles, users, and permissions. The following two built-in authorization policies are provided in the RAM console:

-   AliyunDLFDSSFullAccess: indicates the permissions to access all fine-grained DLF resources.
    
-   AliyunDLFDSSReadOnlyAccess: indicates the read-only permissions on all fine-grained DLF resources, such as List, Get, Select, and Execute.
    

**Note**

-   Currently, DLF-DSS coarse-grained data permissions for RAM users are not applicable to many scenarios. These permissions are mainly used to quickly establish mutual trust between Alibaba Cloud services. We recommend that you use DLF fine-grained data permissions for fine-grained data permission management.
    
-   The verification of permissions on data resources, such as databases, tables, columns, functions, and data catalogs, takes effect only after you turn on the data catalog permission control switch. The verification of DLF-DSS coarse-grained data permissions is performed on permissions for managing roles, users, and permissions, regardless of whether the data catalog permission control switch is turned on.
    
-   If a RAM user is granted AdministratorAccess, the RAM user has all DLF-DSS permissions, which is equivalent to AliyunDLFDSSFullAccess.
    

## **Common scenarios**

-   A RAM user requires permissions such as metadata query and does not need to perform data permission management.
    
    -   Grant the RAM user the permissions on API operations at layer one, and grant the built-in authorization policies AliyunDLFFullAccess or AliyunDLFReadOnlyAccess as required.
        
-   A RAM user needs to manage DLF data permissions and perform fine-grained data authorization.
    
    -   Step 1: Grant the RAM user the permissions on API operations at layer one, and grant the built-in authorization policies AliyunDLFFullAccess or AliyunDLFReadOnlyAccess as required.
        
    -   Step 2: Turn on the permission control switch for the desired data catalog. For more information, see [Configure permissions](/help/en/dlf/dlf-1-0/user-guide/configure-permissions).
        
    -   Step 3 (Optional) : If you use a service such as E-MapReduce (EMR) to query and modify data, turn on the DLF-Auth permission switch in the EMR cluster.
        
    -   Step 4: Grant the RAM user the required data permissions in the following ways:
        
        -   Grant the admin or super\_administrator permissions to the RAM user by using your Alibaba Cloud account. Then, the RAM user has all data permissions and authorization management permissions and can perform authorization management. For more information, see [Role management](/help/en/dlf/dlf-1-0/user-guide/manage-roles).
            
        -   Grant all permissions on a database to the RAM user. For more information, see [Add permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization).
            
        -   Grant permissions on a table or column to the RAM user. For more information, see [Add permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization).
            

## FAQ about permissions

-   Question 1: An error message appears during access to a page, indicating that the RAM user has no permission to call the DLF API operation.
    
    Symptom: The page prompts that the RAM user needs to be granted the dlf:xxx permission on DLF API operations. DLF has built-in AliyunDLFFullAccess and AliyunDLFReadOnlyAccess permissions in the RAM console. You can grant the RAM user these permissions based on business requirements.
    
-   Question 2: The system prompts no resource permissions during authorization.
    
    Symptom: When a RAM user grants permissions, the system prompts that the user does not have DLF permissions.
    
    -   Grant authorization permissions on the corresponding resources to the user. You can also grant corresponding roles to the user. For more information, see [Add permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization).
        
    -   Grant the user the admin or super\_administrator role of DLF. For more information, see [Role management](/help/en/dlf/dlf-1-0/user-guide/manage-roles).
        
    -   Grant the user DLF-DSS permissions. Example:
        
        -   dlf-dss:BatchGrantPermissions + dlf-dss:SelectTable indicates that the user can grant Select permissions on all tables to other users.
            
    
-   Question 3: A RAM user has no permissions to call permission-related API operations, such as listPermissions and listRoles.
    
    Symptom: An error occurs when a RAM user calls a permission-related API operation. For example, when a RAM user performs permission query or role management, the system prompts that the user does not have the corresponding operation permission. The error code is NoPermission. You can solve this issue in the following ways:
    
    -   Grant the user the admin or super\_administrator role of DLF. For more information, see [Role management](/help/en/dlf/dlf-1-0/user-guide/manage-roles).
        
    -   Grant the user DLF-DSS permissions. DLF has built-in AliyunDLFDSSFullAccess and AliyunDLFDSSReadOnlyAccess permissions in the RAM console. Examples:
        
        -   dlf-dss:ListRoles indicates that the user can view all roles in DLF.
            
        -   dlf-dss:ListPermissions indicates that the user can view all granted permissions in DLF.
