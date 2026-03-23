A secret policy is a resource-based policy for Key Management Service (KMS) secrets. Secret policies are used to control access to KMS secrets and determine which Alibaba Cloud accounts, Resource Access Management (RAM) users, and RAM roles have permissions to manage or use KMS secrets. Every KMS secret must have exactly one secret policy. This topic describes the details of secret policies.

## **Relationship between secret policies and RAM policies**

Secret policies allow you to specify Resource Access Management (RAM) users and RAM roles within the current Alibaba Cloud account to which a secret belongs as administrators or users of the secret. RAM users and RAM roles within other Alibaba Cloud accounts can be specified only as users.

You can also configure identity-based policies in RAM. The policies determine which Alibaba Cloud accounts, RAM users, and RAM roles can manage or use specific secrets. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user), [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role), and [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/).

When an Alibaba Cloud account, a RAM user, or a RAM role sends a request to access KMS resources by using Alibaba Cloud CLI, in the Alibaba Cloud Management Console, or by calling API operations, the system determines whether to allow the request based on a policy-based evaluation process. The following figure shows the process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3154324771/CAEQUxiBgMDfivKB5RkiIDM2Y2FhMzlkOTQ0ZjQyZWI4MmU2NjZkZGJkNGRlYzE44321841_20240327182443.669.svg)

The system determines the final result based on the following principles:

-   If Allow is returned but Explicit Deny is not returned in Result A or Result B, RAM users or RAM roles of the current Alibaba Cloud account can manage or use the secret.
    
    **Note**
    
    The current Alibaba Cloud account of a secret is the Alibaba Cloud account that is used to create the secret. You can view the creator of a secret by using one of the following methods:
    
    -   Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). On the **Secrets** page, go to the secret details page and view the value of **Created By**.
        
    -   Via an API operation: Call the [DescribeSecret](/help/en/kms/key-management-service/developer-reference/api-describesecret) operation. The creator is the value of the `Creator` parameter in the response.
        
    
-   If Allow is returned in both Result A and Result B, RAM users or RAM roles of other Alibaba Cloud accounts can use the secret.
    

Take note of the following information:

-   If you want to allow RAM users or RAM roles of the current Alibaba Cloud account to manage or use a secret, you need to only configure a secret policy in KMS or a policy in RAM to allow the RAM users or RAM roles to manage or use the secret.
    
-   If you want to allow RAM users and RAM roles of other Alibaba Cloud accounts to use a secret, you must configure both a secret policy in KMS and a policy in RAM to allow the RAM users or RAM roles to use the secret.
    

## **Usage notes**

-   Only secrets in KMS instances support secret policies. You can configure a secret policy when you create a secret or modify the secret policy after the secret is created. For more information, see [Manage and use generic secrets](/help/en/kms/key-management-service/user-guide/manage-and-use-generic-secrets) and [Configure a secret policy](/help/en/kms/key-management-service/security-and-compliance/modify-a-secret-policy).
    
-   When you grant permissions to a Resource Access Management (RAM) user or Resource Access Management (RAM) role from another Alibaba Cloud Account, your KMS instance's **Access Management Quota** is consumed. The amount of consumed quota is based on the number of external Alibaba Cloud Accounts. If you later revoke this cross-account access and no other resources from the instance are shared with that account, the consumed quota is released after approximately 5 minutes.
    
-   Secret policies apply only if secrets are accessed by using an endpoint of KMS. If you use the endpoint of a KMS instance to access secrets, the permission policies configured in application access points (AAPs) that are associated with the KMS instance apply.
    
-   The content of a secret policy cannot exceed 32,768 bytes in length and must be in the JSON format.
    

## **Secret policy description**

A secret policy contains the following content:

-   Version: the version of the secret policy. Set the value to 1.
    
-   Statement: the statement of the secret policy. Each secret policy contains one or more statements. Each statement contains the following parameters.
    
    -   Sid
        
        Optional. The statement identifier of a custom statement. The value can be up to 128 characters in length and can contain letters, digits, and the following special characters: \_ / + = . @ -
        
    -   Effect
        
        Required. Specifies whether to allow or deny the permissions in the statement. Valid values are `Allow` and `Deny`.
        
    -   Principal
        
        Required. The authorization principal of the policy. The following principals are supported:
        
        -   The current Alibaba Cloud account.
            
        -   RAM users and RAM roles of the current Alibaba Cloud account.
            
        -   RAM users and RAM roles of other Alibaba Cloud accounts.
            
            **Important**
            
            If you grant a RAM user or RAM role of other Alibaba Cloud accounts permissions to use a secret, you must use the Alibaba Cloud account of the RAM user or RAM role to grant the RAM user or RAM role permissions to use the secret in RAM.
            
            For more information, see [Use RAM to manage access to KMS resources](/help/en/kms/key-management-service/security-and-compliance/use-ram-to-manage-access-to-kms-resources/), [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user), and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
            
    -   Action
        
        Required. The API operation that you want to allow or deny. The value must start with kms:. The following content describes the permission scope. If you specify permissions outside the scope, the permissions do not take effect.
        
        **Permissions**
        
        ```
        "Action": [
                        "kms:List*",
                        "kms:Describe*",
                        "kms:PutSecretValue",
                        "kms:Update*",
                        "kms:DeleteSecret",
                        "kms:RestoreSecret",
                        "kms:RotateSecret",
                        "kms:TagResource",
                        "kms:UntagResource"
                        "kms:GetSecretValue"
                    ]
        ```
        
    -   Resource
        
        Required. The value must be `*`, which represents the current secret.
        
    -   Condition
        
        Optional. Specifies the conditions under which the policy takes effect. The Condition element is a condition block that contains one or more conditions. Each condition consists of a condition operator, a condition key, and a condition value. For more information, see [Policy elements](/help/en/ram/policy-elements#section-jix-u0j-2ms).
        
        The format is `"Condition": {"condition operator": {"condition key": "condition value"}}`.
        
        -   `condition operator`: For more information, see [Condition Operator Types](/help/en/ram/policy-elements#section-jix-u0j-2ms).
            
        -   `condition key` and `condition value`: The condition keys and values supported by a key policy. For more information, see [Policy Condition Keys](/help/en/kms/key-management-service/security-and-compliance/condition-key).
