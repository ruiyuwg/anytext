This topic answers the frequently asked questions (FAQs) about MaxCompute permission management.

**Category**

**FAQ**

Authorization solutions

-   [How do I read data across projects?](#section-c96-1kp-p62)
    
-   [Can the owner of a MaxCompute project be changed to a RAM user?](#section-xx5-884-49b)
    
-   [What are the limitations of the Admin role compared to the project owner?](#section-uzu-pbp-3gu)
    

Granting permissions to users

-   [When I request permissions on a production environment table for a RAM user, the authorization fails. How do I solve this issue?](#section-7ui-k46-hau)
    
-   [How do I grant a user permissions to operate a table?](#section-4kd-ccg-2lf)
    
-   [What are objects and actions in permission management?](#section-7je-q4n-1kq)
    
-   [How can a RAM user access a project created by another Alibaba Cloud account?](#section-uex-2wq-zrt)
    
-   [How do I obtain a tenant ID (tenant\_id)?](#93f0ab2309ial)
    
-   [An error "FAILED: Invalid account Name xxxxxx" is reported when I grant permissions to a user. How do I solve this issue?](#section-61x-lep-pdx)
    
-   [An error "FAILED: lack of account provider, principalName xxxxxx" is reported when I grant permissions to a user. How do I solve this issue?](#section-uy4-2sm-zqe)
    

Permission errors

-   [I have the permission to query a view in MaxCompute. Why is an error reported, indicating that another user does not have permissions, when I query the view?](#section-myw-c5j-55j)
    
-   [An error "You have NO privilege to do the restricted operation on xxx Access Mode is AllDenied" is reported when I run a job. How do I solve this issue?](#section-ezb-hmk-gu7)
    
-   [An error "failed to check policy format: invalid Action value - odps:" is reported when I create a custom role for the Resource resource type. How do I solve this issue?](#f938f06eaethc)
    

## How do I read data across projects?

You can use packages to read data across projects. A package is a mechanism for sharing data and resources across projects and is primarily used for cross-project user authorization. A project administrator can package the required objects and grant permissions on them. Other projects can then install this package. After the installation, the administrators of those projects can manage the package and grant permissions to users within their own projects.

For more information, see [Access resources across projects based on packages](/help/en/maxcompute/user-guide/cross-project-resource-access-based-on-packages#concept-oq1-qk1-wdb) and [Permission control for packages](/help/en/maxcompute/user-guide/access-control-for-packages#concept-2054026).

## Can the owner of a MaxCompute project be changed to a RAM user?

No. The project owner cannot be changed. The person who creates the project is the project owner. The project owner can grant the Admin role to a Resource Access Management (RAM) user.

## What are the limitations of the Admin role compared to the project owner?

Compared to the project owner, a user with the Admin role cannot perform the following operations:

-   Users with the Admin role cannot assign the Admin permission to other users.
    
-   You cannot modify the project's security configuration.
    
-   A project authorization model cannot be modified.
    
-   The Admin role permissions cannot be modified.
    

## When I request permissions on a production environment table for a RAM user, the authorization fails. How do I solve this issue?

-   Symptom
    
    When you use an Alibaba Cloud account to grant permissions on a table in the production environment to a RAM user, the following error is returned.
    
    ```
    class java.lang.IllegalArgumentException: AccessId should not be empty.
    ```
    
-   Cause
    
    The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user are not configured.
    
-   Solution
    
    Log on to the [RAM console](https://ram.console.alibabacloud.com/) using an Alibaba Cloud account or as a RAM user. Confirm that the **AccessKey ID** and **AccessKey Secret** are configured.
    

## How do I grant a user permissions to operate a table?

The project owner or a user with the Super\_Administrator or Admin role must perform the authorization. You can use the access control list (ACL) authorization method (`grant`) to grant a user the required permissions to operate a table. The following command is an example.

```
GRANT UPDATE ON TABLE project_name TO ram$bob@aliyun.com:Allen;
```

For more information about authorization, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).

## How do I grant permissions to a RAM user?

The authorization must be performed by an Alibaba Cloud account or a user with the Super\_Administrator or Admin role. For more information about authorization, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).

## What are objects and actions in permission management?

MaxCompute authorization involves three elements:

-   Subject: The user or role to which permissions are granted.
    
-   Object: The target object on which a user or role is granted permissions, such as a project, table, model, function, resource, or instance.
    
-   Action: The operation that a user or role is granted permission to perform on the target object, such as reading, writing, or querying a table.
    

For more information, see [ACL-based access control](/help/en/maxcompute/user-guide/acl-based-access-control#concept-2159749).

## How can a RAM user access a project created by another Alibaba Cloud account?

Assume that there are two Alibaba Cloud accounts: Account A and Account B. Account A has a RAM user named C (ram\_user\_1). User C needs to access a MaxCompute project created by Account B.

Account B must add Account A to its project and grant the MaxCompute Super\_Administrator role to Account A. Then, Account A can log on to Account B's project and run the `add user ram$A:ram_user_1;` command to add User C to the project.

## **How do I obtain a** tenant ID (tenant\_id)**?**

To specify the scope of authorized resources at the tenant level, you can specify the tenant in the access policy. To do this, you must first obtain the tenant ID. Follow these steps:

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) and select a region in the top-left corner.
    
2.  In the navigation pane on the left, choose **Manage Configurations** > **Tenants** .
    
3.  On the **Tenants** page, click the **Tenant Property** tab.
    
4.  On the **Tenant Property** tab, obtain the **Tenant ID:**.
    

## An error "FAILED: Invalid account Name xxxxxx" is reported when I grant permissions to a user. How do I solve this issue?

-   Symptom
    
    When you grant permissions to a user, the following error is returned.
    
    ```
    FAILED: Invalid account Name xxxxxx
    ```
    
-   Cause
    
    The username in the authorization statement is invalid.
    
-   Solution
    
    Confirm that the username is correct. You can run the `list users;` command to retrieve the user list for the current project. When you grant permissions, copy the username directly from the list to avoid spelling errors that would make the username invalid.
    

## An error "FAILED: lack of account provider, principalName xxxxxx" is reported when I grant permissions to a user. How do I solve this issue?

-   Symptom
    
    When you grant permissions to a user, the following error is returned.
    
    ```
    FAILED: lack of account provider, principalName xxxxxx
    ```
    
-   Cause
    
    The username in the authorization statement is invalid, or the current project's account system does not support RAM.
    
-   Solution
    
    Log on to the MaxCompute [client](/help/en/maxcompute/user-guide/maxcompute-client#concept-dvj-dzw-5db). Run the `list accountproviders;` command to check if the account system for the MaxCompute project supports RAM. If RAM is not in the returned result, run the `add accountprovider ram;` command to add support for the RAM account system. Run the `list accountproviders;` command again to confirm that RAM support is added. If the error persists even though the project supports RAM, confirm that the username is correct. You can run the `list users;` command to retrieve the user list for the current project. When you grant permissions, copy the username directly from the list to avoid spelling errors that would make the username invalid.
    

## I have the permission to query a view in MaxCompute. Why is an error reported, indicating that another user does not have permissions, when I query the view?

-   Symptom
    
    In MaxCompute, ViewA references Table B. User A has permission to query ViewA. When User A queries ViewA, an error is reported that indicates User B (the view owner) does not have permission to query Table B.
    
-   Cause
    
    If the view owner is missing the SELECT permission on the table referenced by the view, the view becomes unavailable. This typically happens if the view owner is changed and the new owner is not promptly granted the SELECT permission on the referenced table. It can also happen if the owner of the referenced table revokes the SELECT permission from the view owner. Therefore, even if User A has permission to query ViewA, the query fails.
    
-   Solution
    
    Check whether the view owner has lost the SELECT permission on the referenced table. The command is as follows.
    
    ```
    show grants for <user_name>;  -- user_name is the username of the view owner
    ```
    
    If the permission is lost, grant the SELECT permission on the referenced table to the view owner again. The view can then be used.
    

## An error "You have NO privilege to do the restricted operation on xxx Access Mode is AllDenied" is reported when I run a job. How do I solve this issue?

-   Cause
    
    The project is disabled.
    
-   Solution
    
    -   Check whether your account has an overdue payment or whether the subscription order for the subscription quota associated with the project has expired. If your account has an overdue payment or the order has expired, the project is automatically restored to the Normal state after you add funds to your account or renew the subscription. The restoration may take 2 to 30 minutes, depending on the number of your orders and projects.
        
    -   If the project was not disabled because of an overdue payment or an expired order, it may have been manually disabled. You can resume the project on the **Projects** page in the MaxCompute console. To navigate to the page, choose **Manage Configurations** in the navigation pane on the left. .
        

## An error "failed to check policy format: invalid Action value - odps:<Action>" is reported when I create a custom role for the Resource resource type. How do I solve this issue?

-   Symptom
    
    When you use the [policy authorization](/help/en/maxcompute/user-guide/policy-based-access-control-1) feature to create a role named test\_role for the Resource resource type and grant the CreatePackage permission to the role, you write the following policy:
    
    ```
    {
        "Statement":[
            {
                "Action":[
                    "odps:CreatePackage"
                    ],
                    "Effect":"Allow",
                    "Resource":[
                        "acs:odps:*:projects/test_project/authorization",
                        "acs:odps:*:projects/test_project/authorization/packages/*",
                        "acs:odps:*:projects/test_project/authorization/packages/*/*/*" 
                        ]
            }
        ],
        "Version":"1"
    }
    ```
    
    The following error is returned.
    
    ```
    Create role test_role error: [400] com.aliyun.odps.OdpsException: failed to check policy format: invalid Action value - odps:CreatePackage
    ```
    
-   Cause
    
    MaxCompute does not support granting project management permissions to a role of the Resource resource type. The CreatePackage permission is a project management permission. For more information about project management permissions, see [List of project management permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#section-jtj-n48-oez).
    
-   Solution
    
    When you create a custom role that includes project management permissions, switch the role type to **Admin** (management type). Then, the role can be created. For more information about role planning, see [Role planning](/help/en/maxcompute/user-guide/role-planning).
