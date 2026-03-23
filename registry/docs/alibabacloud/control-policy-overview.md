The Control Policy feature provided by the Resource Directory service enables you to manage the permission boundaries of the folders or members in a resource directory in a centralized manner. This feature is implemented based on the resource directory. You can use this feature to develop common or dedicated rules for access control. The Control Policy feature does not grant permissions but only defines permission boundaries. Before you use an account that is a member of your resource directory to access resources, you must grant the required permissions to the account by using the Resource Access Management (RAM) service.

## Scenarios

After an enterprise creates a resource directory and creates members in the resource directory for all departments, the enterprise must manage the use of these members. Otherwise, O&M rules may be violated, which results in security risks and superfluous costs. The resource directory provides the Control Policy feature. This feature enables the enterprise to formulate access control policies in a centralized manner by using the management account of the resource directory. The enterprise can then attach these policies to the folders and members in the resource directory. These policies control access to the resources of the members. This ensures security compliance and controllable costs. For example, the enterprise is not allowed to use a member to apply for domain names or delete log records.

## Types of access control policies

-   **System access control policy**
    
    Resource Directory provides only one system access control policy, which is FullAliyunAccess. You can view the system access control policy but cannot create, modify, or delete it. After you enable the Control Policy feature, the system attaches the system access control policy to all the folders and members in your resource directory by default. This policy allows all operations on all your cloud resources.
    
-   **Custom access control policy**
    
    Custom access control policies are customized by users. You can create, modify, or delete custom access control policies. After you create a custom access control policy, you must attach the policy to folders or members for the policy to take effect. If you no longer require the custom access control policy, you can detach it from the folders or members.
    

## How it works

The Control Policy feature works in the following way:

1.  Use the management account of your resource directory to enable the Control Policy feature. For more information, see [Enable the Control Policy feature](/help/en/resource-management/resource-directory/user-guide/enable-the-control-policy-feature#task-1936112).
    
    After the feature is enabled, the system attaches the system access control policy FullAliyunAccess to all the folders and members in your resource directory by default. This policy allows all operations on all your cloud resources. This prevents resource access failures caused by inappropriate control policy configurations.
    
2.  Use the management account of your resource directory to create a custom access control policy. For more information, see [Create a custom access control policy](/help/en/resource-management/resource-directory/user-guide/create-a-custom-access-control-policy#task-1936116).
    
3.  Use the management account of your resource directory to attach the newly created custom access control policy to folders or members in the resource directory. For more information, see [Attach a custom access control policy](/help/en/resource-management/resource-directory/user-guide/attach-a-custom-access-control-policy#task-1936121).
    
    Access control policies can be attached to all folders or members in your resource directory. If you attach a custom access control policy to a folder, this policy also applies to all subfolders of the folder. For example, you attach Policy A to a folder and Policy B to one of its subfolders. In this case, both policies apply to the subfolder and all members in the subfolder.
    
    **Note**
    
    We recommend that you first attach a custom access control policy to only a few folders or members to check whether the policy can take effect as expected. If the custom access control policy takes effect as expected, you can attach it to all the other folders or members in your resource directory.
    
4.  When a RAM user or RAM role of a member is used to access an Alibaba Cloud service, the system matches the access request with the custom access control policy and verifies the permissions of the RAM user or RAM role. The following descriptions provide details:
    
    -   The system matches the access request with custom access control policies level by level in reverse order based on the resource directory. The matching starts from the member that manages the resource the RAM user or RAM role wants to access.
        
    -   If a Deny statement in an access control policy is matched, the system terminates access control policy matching, does not verify the permissions of the RAM user or RAM role, and then denies the access request.
        
    -   If no Deny or Allow statements in an access control policy are matched, the system terminates access control policy matching, does not verify the permissions of the RAM user or RAM role, and then denies the access request.
        
    -   If no Deny statements in an access control policy are matched but an Allow statement in the access control policy is matched, the system matches the access request with the access control policies that are attached to an upper-level object. The matching ends when the Root folder is matched. If the Root folder passes the matching, the whole resource directory passes the matching. Then, the system verifies the permissions of the RAM user or RAM role. For more information, see [Policy evaluation process](/help/en/ram/policy-evaluation-process#concept-xgf-ldk-xdb).
        
    -   Access control policies do not apply to service-linked roles. For more information about service-linked roles, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).
        
    -   When you use a member, the system evaluates both the access control policies that are attached to the member and the access control policies that are attached to all its parent folders. This ensures that the access control policies that are attached to a folder take effect on all the members in the folder and all the members in the subfolders of the folder.
        
    
    **Important**
    
    Control policies apply to all RAM principals (users and roles) within a member account but do not apply to the owner of that account or any principals in the management account of the Resource Directory.
    

## Configure an existing custom access control policy to allow access from specific Alibaba Cloud services

Custom access control policies limit the permissions on access to the resources of the members to which the access control policies are attached. The permissions that are specified in the access control policies are prohibited. As a result, some Alibaba Cloud services may fail to access the resources.

Alibaba Cloud services may use service roles to access the resources of your account to implement some features. If the permissions of the service roles are prohibited by access control policies, some features of the services cannot be used. If this is exactly what you expect from the access control policies, no operations are required. Otherwise, perform the following steps:

1.  Determine the name of the service role used by the service for which you do not want to control access.
    
    You can log on to the [RAM console](https://ram.console.alibabacloud.com/roles) to view all the service roles of your account.
    
2.  Add the `"acs:PrincipalARN"` key to the `Condition` parameter in the document of the policy that controls the access from the service. Then, specify the determined role name for the key. The following code provides an example:
    
    ```
    {
        "Statement": [
            {
                "Action": [
                    "ram:UpdateUser"
                ],
                "Resource": "*",
                "Effect": "Deny",         
                "Condition": {
                    "StringNotLike": {
                        "acs:PrincipalARN":"acs:ram:*:*:role/<Name of the service role>"
                   }
               }
            }
        ],
        "Version": "1"
    }
    ```
    
    For more information about the syntax of access control policies, see [Languages of access control policies](/help/en/resource-management/resource-directory/user-guide/languages-of-access-control-policies#concept-xg5-51g-xdb).
    

## Limits

For more information, see [Limits on resource directories](/help/en/resource-management/product-overview/limits#section-lnl-jy1-dhb).

## Alibaba Cloud services that do not support the Control Policy feature

-   Microservices Engine (MSE) of a specific engine version supports the Control Policy feature.
    
    For more information about MSE engine versions, see [Edition features](/help/en/mse/product-overview/edition-features#concept-2109833).
    
-   The following applications and clusters in ApsaraMQ for RocketMQ do not support the Control Policy feature:
    
    -   The mq-http application does not support the Control Policy feature.
        
    -   The onsbroker application does not support the Control Policy feature in the following regions:
        
        -   UAE (Dubai).
            
        -   China (Shanghai): The sh-share9 and shvip-st21ujm8f01 clusters in this region do not support the Control Policy feature.
            
        -   China North 2 Ali Gov 1: The beijing.gov.vip.v0h0ovmfp02, beijing.gov.vip.nif1zmrlf02, and vip-cn-north-2-gov-1-45914plw301 clusters in this region do not support the Control Policy feature.
