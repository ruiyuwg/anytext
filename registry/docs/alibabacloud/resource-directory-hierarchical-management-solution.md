Resource Directory supports authentication at the resource level. You can use Resource Access Management (RAM) or CloudSSO to perform hierarchical management of resources in a resource directory.

## **Scenarios**

In most cases, the management accounts of resource directories for a large-scale group enterprise that has multiple subsidiaries are managed by the cloud management or O&M team of the enterprise. The cloud management team of the enterprise may hope to delegate specific management responsibilities to the administrator of each subsidiary. This way, the administrator of each subsidiary can independently manage its resources, which improves resource management efficiency and flexibility.

This topic provides an example to describe how to enable the administrator of each subsidiary of a company to manage its resources. In this example, Company Y is used. Company Y has two business departments: Business Department 1 and Business Department 2. Company Y wants to delegate management responsibilities to the O&M administrators of the business departments. This way, the O&M administrators can independently manage their account structures and employee permissions. The following table describes the details.

**Department**

**Administrator**

**Duty**

Security department

Mike

Mike is the administrator of the central security team of the company and is responsible for global and centralized management of security control policies.

Business Department 1

Alice

Alice is the O&M administrator of Business Department 1. Alice can create resource accounts and organizations, configure control policies, and configure notification contacts for members in the organizations only within Business Department 1. Alice cannot perform other operations.

Business Department 2

Bob

Bob is the O&M administrator of Business Department 2. Bob can create resource accounts and organizations, configure control policies, and configure notification contacts for members in the organizations only within Business Department 2. Bob cannot perform other operations.

## **Solutions**

Hierarchical management implements fine-grained control on permissions on resource scopes and operations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9852040171/5b982de0528lt.svg)

Resource Directory supports authentication at the resource level. You can specify operations in the `Action` element and resources in the `Resource` element in a policy to perform authentication at the resource level by using RAM. For more information, see the [Resource Directory](/help/en/resource-management/resource-directory/developer-reference/ram-authorization#section-5yg-uil-h9z) section in the RAM authorization topic.

You can select one of the following solutions based on your business requirements:

### **Solution 1: Use RAM to perform hierarchical management**

1.  Enable a resource directory.
    
    The administrator of Company Y needs to create an Alibaba Cloud account, complete enterprise real-name verification for the Alibaba Cloud account, and use the Alibaba Cloud account to enable a resource directory and create folders named `Business Department 1` and `Business Department 2` in the resource directory. The administrator of Company Y can be an employee in the financial department. For more information about how to enable a resource directory and create a folder in the resource directory, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory) and [Create a folder](/help/en/resource-management/resource-directory/user-guide/create-a-folder).
    
    The Alibaba Cloud account that is used to enable the resource directory is the management account of the resource directory.
    
2.  Create a RAM user named `Mike` and grant Mike the permissions to configure a global control policy.
    
    The administrator of Company Y uses the management account of the resource directory to log on to the [RAM console](https://ram.console.alibabacloud.com), creates a RAM user named `Mike`, creates an AccessKey pair for Mike, and then attaches the following custom policy to Mike. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user), [Create a custom policy](/help/en/ram/create-a-custom-policy), and [Grant permissions to RAM users](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    The custom policy has the following document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:*ControlPolicy*",
                    "resourcemanager:*ControlPolicies*"
                ],
                "Resource": [
                    "acs:resourcemanager:*:*:account/*",
                    "acs:resourcemanager:*:*:folder/*",
                    "acs:resourcemanager:*:*:policy/controlpolicy/*"
                ]
            },
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:GetResourceDirectory",
                    "resourcemanager:ListAccount*",
                    "resourcemanager:GetFolder*",
                    "resourcemanager:ListFolder*",
                    "resourcemanager:GetAccount",
                    "resourcemanager:GetControlPolicy*",
                    "resourcemanager:ListControlPolicies",
                    "resourcemanager:ListControlPolicyAttachmentsForTarget",
                    "resourcemanager:ListTargetAttachmentsForControlPolicy",
                    "resourcemanager:ListTagKeys",
                    "resourcemanager:ListTagValues"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
3.  Create a RAM user named `Alice` and grant Alice the management permissions on the `Business Department 1` folder.
    
    The administrator of Company Y uses the management account of the resource directory to log on to the [RAM console](https://ram.console.alibabacloud.com), creates a RAM user named `Alice`, creates an AccessKey pair for Alice, and then attaches the following custom policy to Alice. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user), [Create a custom policy](/help/en/ram/create-a-custom-policy), and [Grant permissions to RAM users](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    The custom policy has the following document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:GetResourceDirectory",
                    "resourcemanager:ListTagKeys",
                    "resourcemanager:ListTagValues"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:*Account*",
                    "resourcemanager:*Parent*",
                    "resourcemanager:*Folder*",
                    "resourcemanager:*Handshake*",
                    "resourcemanager:*Contact*",
                    "resourcemanager:*Members*",
                    "resourcemanager:*ControlPolicy*",
                    "resourcemanager:*ControlPolicies*",
                    "resourcemanager:*SendVerificationCodeFor*",
                    "resourcemanager:*BindSecureMobilePhone*"
                ],
                "Resource": [
                    "acs:resourcemanager:*:*:account/rd-3G****/r-Wm****/fd-bqp2FA****/*",  // The RDPath of the Business Department 1 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****/*",   // The RDPath of the Business Department 1 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****",     // The RDPath of the Business Department 1 folder.
                    "acs:resourcemanager:*:*:handshake/*",
                    "acs:resourcemanager:*:*:policy/controlpolicy/*",
                    "acs:resourcemanager:*:*:messagecontact/*"
                ]
            },
            {
                "Effect": "Deny",
                "Action": [
                    "resourcemanager:DeleteControlPolicy",
                    "resourcemanager:UpdateControlPolicy",
                    "resourcemanager:DisableControlPolicy",
                    "resourcemanager:EnableControlPolicy",
                    "resourcemanager:DeleteMessageContact",
                    "resourcemanager:UpdateMessageContact",
                    "resourcemanager:CancelMessageContactUpdate",
                    "resourcemanager:CancelHandshake"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
4.  Create a RAM user named `Bob` and grant Bob the management permissions on the `Business Department 2` folder.
    
    The administrator of Company Y uses the management account of the resource directory to log on to the [RAM console](https://ram.console.alibabacloud.com), creates a RAM user named `Bob`, creates an AccessKey pair for Bob, and then attaches the following custom policy to Bob. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user), [Create a custom policy](/help/en/ram/create-a-custom-policy), and [Grant permissions to RAM users](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    The custom policy has the following document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:GetResourceDirectory",
                    "resourcemanager:ListTagKeys",
                    "resourcemanager:ListTagValues"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:*Account*",
                    "resourcemanager:*Parent*",
                    "resourcemanager:*Folder*",
                    "resourcemanager:*Handshake*",
                    "resourcemanager:*Contact*",
                    "resourcemanager:*Members*",
                    "resourcemanager:*ControlPolicy*",
                    "resourcemanager:*ControlPolicies*",
                    "resourcemanager:*SendVerificationCodeFor*",
                    "resourcemanager:*BindSecureMobilePhone*"
                ],
                "Resource": [
                    "acs:resourcemanager:*:*:account/rd-3G****/r-Wm****/fd-bqp2FA****/*",  // The RDPath of the Business Department 2 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****/*",   // The RDPath of the Business Department 2 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****",     // The RDPath of the Business Department 2 folder.
                    "acs:resourcemanager:*:*:handshake/*",
                    "acs:resourcemanager:*:*:policy/controlpolicy/*",
                    "acs:resourcemanager:*:*:messagecontact/*"
                ]
            },
            {
                "Effect": "Deny",
                "Action": [
                    "resourcemanager:DeleteControlPolicy",
                    "resourcemanager:UpdateControlPolicy",
                    "resourcemanager:DisableControlPolicy",
                    "resourcemanager:EnableControlPolicy",
                    "resourcemanager:DeleteMessageContact",
                    "resourcemanager:UpdateMessageContact",
                    "resourcemanager:CancelMessageContactUpdate",
                    "resourcemanager:CancelHandshake"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
5.  Verify the result.
    
    Separately use the AccessKey pairs of `Mike`, `Alice`, and `Bob` to call the [API operations of Resource Directory](/help/en/resource-management/resource-directory/developer-reference/api-resourcedirectorymaster-2022-04-19-overview) to access resources on which Mike, Alice, and Bob have permissions in the resource directory. If `Alice` can perform operations on resources only within the `Business Department 1` folder and `Bob` can perform operations on resources only within the `Business Department 2` folder, the preceding configurations take effect.
    

### Solution 2: Use CloudSSO to perform hierarchical management

1.  Enable a resource directory.
    
    The administrator of Company Y needs to create an Alibaba Cloud account, complete enterprise real-name verification for the Alibaba Cloud account, and use the Alibaba Cloud account to enable a resource directory and create folders named `Business Department 1` and `Business Department 2` in the resource directory. The administrator of Company Y can be an employee in the financial department. For more information about how to enable a resource directory and create a folder in the resource directory, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory) and [Create a folder](/help/en/resource-management/resource-directory/user-guide/create-a-folder).
    
    The Alibaba Cloud account that is used to enable the resource directory is the management account of the resource directory.
    
2.  Create a CloudSSO user named `Mike` and grant Mike the permissions to configure a global control policy.
    
    The administrator of Company Y uses the management account of the resource directory to log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com), creates a CloudSSO user named `Mike`, specifies a logon password for Mike, creates an access configuration, and then provisions the access configuration for the management account of the resource directory for `Mike`. For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk), [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration), and [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory).
    
    The access configuration uses an inline policy that has the following document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:*ControlPolicy*",
                    "resourcemanager:*ControlPolicies*"
                ],
                "Resource": [
                    "acs:resourcemanager:*:*:account/*",
                    "acs:resourcemanager:*:*:folder/*",
                    "acs:resourcemanager:*:*:policy/controlpolicy/*"
                ]
            },
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:GetResourceDirectory",
                    "resourcemanager:ListAccount*",
                    "resourcemanager:GetFolder*",
                    "resourcemanager:ListFolder*",
                    "resourcemanager:GetAccount",
                    "resourcemanager:GetControlPolicy*",
                    "resourcemanager:ListControlPolicies",
                    "resourcemanager:ListControlPolicyAttachmentsForTarget",
                    "resourcemanager:ListTargetAttachmentsForControlPolicy",
                    "resourcemanager:ListTagKeys",
                    "resourcemanager:ListTagValues"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
3.  Create a CloudSSO user named `Alice` and grant Alice the management permissions on the `Business Department 1` folder.
    
    The administrator of Company Y uses the management account of the resource directory to log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com), creates a CloudSSO user named `Alice`, specifies a logon password for Alice, creates an access configuration, and then provisions the access configuration for the management account of the resource directory for `Alice`. For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk), [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration), and [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory).
    
    The access configuration uses an inline policy that has the following document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:GetResourceDirectory",
                    "resourcemanager:ListTagKeys",
                    "resourcemanager:ListTagValues"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:*Account*",
                    "resourcemanager:*Parent*",
                    "resourcemanager:*Folder*",
                    "resourcemanager:*Handshake*",
                    "resourcemanager:*Contact*",
                    "resourcemanager:*Members*",
                    "resourcemanager:*ControlPolicy*",
                    "resourcemanager:*ControlPolicies*",
                    "resourcemanager:*SendVerificationCodeFor*",
                    "resourcemanager:*BindSecureMobilePhone*"
                ],
                "Resource": [
                    "acs:resourcemanager:*:*:account/rd-3G****/r-Wm****/fd-bqp2FA****/*",  // The RDPath of the Business Department 1 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****/*",   // The RDPath of the Business Department 1 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****",     // The RDPath of the Business Department 1 folder.
                    "acs:resourcemanager:*:*:handshake/*",
                    "acs:resourcemanager:*:*:policy/controlpolicy/*",
                    "acs:resourcemanager:*:*:messagecontact/*"
                ]
            },
            {
                "Effect": "Deny",
                "Action": [
                    "resourcemanager:DeleteControlPolicy",
                    "resourcemanager:UpdateControlPolicy",
                    "resourcemanager:DisableControlPolicy",
                    "resourcemanager:EnableControlPolicy",
                    "resourcemanager:DeleteMessageContact",
                    "resourcemanager:UpdateMessageContact",
                    "resourcemanager:CancelMessageContactUpdate",
                    "resourcemanager:CancelHandshake"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
4.  Create a CloudSSO user named `Bob` and grant Bob the management permissions on the `Business Department 2` folder.
    
    The administrator of Company Y uses the management account of the resource directory to log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com), creates a CloudSSO user named `Bob`, specifies a logon password for Bob, creates an access configuration, and then provisions the access configuration for the management account of the resource directory for `Bob`. For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk), [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration), and [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory).
    
    The access configuration uses an inline policy that has the following document:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:GetResourceDirectory",
                    "resourcemanager:ListTagKeys",
                    "resourcemanager:ListTagValues"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "resourcemanager:*Account*",
                    "resourcemanager:*Parent*",
                    "resourcemanager:*Folder*",
                    "resourcemanager:*Handshake*",
                    "resourcemanager:*Contact*",
                    "resourcemanager:*Members*",
                    "resourcemanager:*ControlPolicy*",
                    "resourcemanager:*ControlPolicies*",
                    "resourcemanager:*SendVerificationCodeFor*",
                    "resourcemanager:*BindSecureMobilePhone*"
                ],
                "Resource": [
                    "acs:resourcemanager:*:*:account/rd-3G****/r-Wm****/fd-bqp2FA****/*",  // The RDPath of the Business Department 2 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****/*",   // The RDPath of the Business Department 2 folder.
                    "acs:resourcemanager:*:*:folder/rd-3G****/r-Wm****/fd-bqp2FA****",     // The RDPath of the Business Department 2 folder.
                    "acs:resourcemanager:*:*:handshake/*",
                    "acs:resourcemanager:*:*:policy/controlpolicy/*",
                    "acs:resourcemanager:*:*:messagecontact/*"
                ]
            },
            {
                "Effect": "Deny",
                "Action": [
                    "resourcemanager:DeleteControlPolicy",
                    "resourcemanager:UpdateControlPolicy",
                    "resourcemanager:DisableControlPolicy",
                    "resourcemanager:EnableControlPolicy",
                    "resourcemanager:DeleteMessageContact",
                    "resourcemanager:UpdateMessageContact",
                    "resourcemanager:CancelMessageContactUpdate",
                    "resourcemanager:CancelHandshake"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
5.  Verify the result.
    
    Use Alibaba Cloud Command Line Interface (Alibaba Cloud CLI) to log on to the CloudSSO user portal separately as the CloudSSO users `Mike`, `Alice`, and `Bob`. Then, run commands in Alibaba Cloud CLI to access resources on which Mike, Alice, and Bob have permissions in the resource directory. If `Alice` can perform operations on resources only within the `Business Department 1` folder and `Bob` can perform operations on resources only within the `Business Department 2` folder, the preceding configurations take effect. For information about how to use Alibaba Cloud CLI to log on to the CloudSSO user portal, see [Use Alibaba Cloud CLI to access CloudSSO and Alibaba Cloud resources](/help/en/cloudsso/user-guide/use-alibaba-cloud-cli-to-access-cloudsso-and-alibaba-cloud-resources).
    
    **Note**
    
    After you complete the configuration of the solution that uses CloudSSO to perform hierarchical management, you can use only CLI to perform operations on resources on which you have permissions. You cannot perform operations on the resources in the CloudSSO console.
    

## **References**

-   [Term](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#section-o5w-14l-nah)
    
-   [Resource Directory](/help/en/resource-management/resource-directory/developer-reference/ram-authorization#section-5yg-uil-h9z)
