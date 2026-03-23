To allow a Resource Access Management (RAM) user to use the features of the EMR Serverless StarRocks console, log on to the RAM console using your Alibaba Cloud account and grant the required permissions to the RAM user.

## Background

Resource Access Management (RAM) is an Alibaba Cloud service for resource access control. For more information, see [What is RAM?](/help/en/ram/product-overview/what-is-ram#concept-oyr-zzv-tdb). Typical scenarios for using RAM in EMR Serverless StarRocks include the following:

-   Users: If multiple people in your organization, such as O&M staff, developers, or data analysts, need to use your EMR Serverless StarRocks instances, you can create a policy to grant them access. This prevents you from having to share a single AccessKey with multiple people.
    
-   User groups: You can create multiple user groups and attach different access policies to them to manage user permissions in batches. The procedure for granting permissions to a user group is the same as for an individual RAM user.
    

## Access policies and roles

-   System policies and roles
    
    -   The following policies are used by EMR Serverless StarRocks.
        
        **Policy Name**
        
        **Description**
        
        AliyunEMRStarRocksFullAccess
        
        Grants administrator permissions for EMR Serverless StarRocks, including all operations and features.
        
        AliyunEMRStarRocksReadOnlyAccess
        
        Grants read-only permissions for EMR Serverless StarRocks. This includes permissions to view the instance list and query instance details, but not to create, update, or modify instances.
        
        AliyunBSSOrderAccess
        
        Grants permissions to view, pay for, and cancel orders in the User Center. This is required to upgrade or downgrade instance configurations and renew instances in the management console.
        
        AliyunSLBFullAccess
        
        Grants permissions to manage Server Load Balancer (SLB). This permission is required to configure public or internal whitelists for StarRocks because it involves operating and managing SLB.
        
    -   The following roles are used by EMR Serverless StarRocks.
        
        Role Name
        
        Description
        
        AliyunEMRStarRocksAccessingOSSRole
        
        EMR Serverless StarRocks uses this role to access your data in OSS.
        
-   Custom policy
    
    If you are familiar with Alibaba Cloud service APIs and need fine-grained access control policies, you can create a custom policy. For more information, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb). When you create the policy, you must carefully design the policy script.
    

## Procedure

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the navigation pane on the left, choose **Identities** > **Users**.
    
3.  On the **Users** page, find the required RAM user, and click **Add Permissions** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
    
    You can also select multiple RAM users and click **Add Permissions** in the lower part of the page to grant permissions to the RAM users at a time.
    
4.  In the **Add Permissions** panel, select the required authorization scope, authorized entity, and permissions.
    
    **Parameter**
    
    **Description**
    
    **Resource Scope**
    
    -   **Account**: The permissions take effect within the current Alibaba Cloud account.
        
    -   **ResourceGroup**: The permissions take effect within the specified resource group.
        
    
    **Principal**
    
    The RAM user to whom you want to grant permissions.
    
    **Policy**
    
    In **System Policy**, enter StarRocks to search for access policies related to EMR Serverless StarRocks. Then, click the policy that you want to grant to the RAM user and select the permission. For detailed descriptions of each access policy, see [Policies and roles](#section-kw7-7xy-3kw).
    
5.  Click **Grant permissions**.
    
    After the permissions are granted, they take effect immediately. You can then use the authorized RAM user to [log on to the EMR Serverless console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/serverless/list) and perform related operations.
    

## **FAQ**

**Why can't a RAM user view the instance list and receive an authorization prompt?**

-   **Problem description**: After a RAM user logs on, they cannot view the instance list and the system displays an authorization prompt. The feature is unavailable even though the RAM user is attached with the `AliyunServiceRoleForEMRStarRocks` role and the access policy has not changed.
    
-   **Cause**:
    
    -   Resource group-level restriction.
        
        The `AliyunEMRStarRocksReadOnlyAccess` policy that is currently attached to the RAM user is granted at the **ResourceGroup**. However, the new authentication logic requires the policy to be granted at the **Account**.
        
    -   Insufficient permissions for the service-linked role.
        
        Although the RAM user is attached with the `AliyunServiceRoleForEMRStarRocks` role, the scope of this role's permissions does not cover the account-level authentication that is required for the `ram:GetRole` API operation.
        
-   **Solution**:
    
    -   Change the existing policy to the account level.
        
    -   Add an account-level custom policy.
        
        If you cannot change the existing policy, you can attach an additional account-level custom policy to the RAM user. The policy content is as follows.
        
        ```
        {
          "Action": ["ram:GetRole"],
          "Resource": "acs:ram:*:*:role/AliyunServiceRoleForEMRStarRocks",
          "Effect": "Allow"
        }
        ```
