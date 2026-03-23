A Resource Access Management (RAM) role's trust policy defines which principals (RAM users, roles, or services) are allowed to assume the role. You can modify this policy to change who can assume the role. This topic provides examples for setting the principal to an Alibaba Cloud account, an Alibaba Cloud service, or an identity provider (IdP).

## Background information

When you create a RAM role, you must define its principals in a trust policy. While you typically don't need to change this policy after creation, you may need to update it to grant or revoke assumption permissions.

**Warning**

Modifying a role's trust policy can have a significant impact on your applications. Principals that are removed from the policy will lose the ability to assume the role, which can cause service interruptions. We recommend that you test all changes in a non-production environment before applying them to production.

## Procedure

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click the name of the target RAM role.
    
4.  On the **Trust Policy** tab, click **Edit Trust Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7703165371/p883072.png)
    
5.  In the code editor, modify the JSON policy document and click **OK**.
    

## Example 1: Change the trusted entity of a RAM role to an Alibaba Cloud account

To allow principals in an Alibaba Cloud account to assume a role, specify the `RAM` key in the `Principal` element. You can specify the entire account, a specific RAM user, or another RAM role.

-   **To allow all RAM users and roles in an account to assume the role**
    
    The following policy allows any RAM user or role in account 123456789012\*\*\*\* to assume the role.
    
    ```
    {
        "Statement": [
            {
                "Action": "sts:AssumeRole",
                "Effect": "Allow",
                "Principal": {
                    "RAM": [
                        "acs:ram::123456789012****:root"
                    ]
                }
            }
        ],
        "Version": "1"
    }
    ```
    
-   **To allow only a specific RAM user to assume the role**
    
    This example allows only the RAM user named `testuser` in account 123456789012\*\*\*\* to assume the role.
    
    ```
                "Principal": {
                    "RAM": [
                        "acs:ram::123456789012****:user/testuser"
                    ]
                }                   
    ```
    
    **Note**
    
    Before you edit the trust policy, make sure that a RAM user named `testuser` is created.
    
-   **To allow only a specific RAM role to assume the role**
    
    This example allows only the RAM role named `testrole` in account 123456789012\*\*\*\* to assume the role.
    
    ```
                "Principal": {
                    "RAM": [
                        "acs:ram::123456789012****:role/testrole"                
                    ]
                }                                 
    ```
    
    **Note**
    
    Before you edit the trust policy, make sure that a RAM role named `testrole` is created.
    

## Example 2: Change the trusted entity of a RAM role to an Alibaba Cloud service

To allow an Alibaba Cloud service to assume a role on your behalf, specify the service principal name (such as ecs.aliyuncs.com) in the `Service` key of the `Principal` element.

The following policy allows Elastic Compute Service (ECS) to assume the role.

```
{
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
                "Service": [
                    "ecs.aliyuncs.com"
                ]
            }
        }
    ],
    "Version": "1"
}
```

**Note**

You cannot edit the trust policy of a service-linked role. The policy is predefined and managed by the linked Alibaba Cloud service. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Example 3: Change the trusted entity of a RAM role to an IdP

To allow users from an IdP to assume a role, specify the ARN of the SAML or OIDC provider in the `Federated` key of the `Principal` element.

The following policy allows users federated from the SAML provider `testprovider` in account 123456789012\*\*\*\* to assume the role.

```
{
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Effect": "Allow",
            "Principal": {
                "Federated": [
                    "acs:ram::123456789012****:saml-provider/testprovider"
                ]
            },
            "Condition":{
                "StringEquals":{
                    "saml:recipient":"https://signin.alibabacloud.com/saml-role/sso"
                }
            }
        }
    ],
    "Version": "1"
}
```
