In large enterprises, managing permissions for employees is often delegated to subsidiaries or business units. This approach reduces the workload of the central operations team. You can designate a CloudSSO user as a permission administrator for a specific department and restrict them to granting access only to users within that department. This setup enables delegated administration.

## **Prerequisites**

-   You have created a resource directory and configured an organizational structure for your enterprise.
    
    For more information, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory), [Create a folder](/help/en/resource-management/resource-directory/user-guide/create-a-folder), [Create a member](/help/en/resource-management/resource-directory/user-guide/create-a-member), and [Invite an Alibaba Cloud account to join a resource directory](/help/en/resource-management/resource-directory/user-guide/invite-an-alibaba-cloud-account-to-join-a-resource-directory).
    
-   You have activated CloudSSO and created a directory.
    
    For more information, see [Enable CloudSSO](/help/en/cloudsso/user-guide/enable-cloudsso) and [Create a CloudSSO directory](/help/en/cloudsso/user-guide/create-the-cloudsso-directory).
    
-   You must perform the operations in this topic as a CloudSSO administrator.
    
    A CloudSSO administrator can be the management account used to activate CloudSSO or a Resource Access Management (RAM) user in that account with the AliyunCloudSSOFullAccess policy attached.
    

## **Procedure**

This topic provides an example of how to create a CloudSSO user named Dept-1-Admin and designate them as the permission administrator for a folder named Dept-1. The administrator can only manage permissions for member accounts within the Dept-1 folder.

1.  Create a CloudSSO user named Dept-1-Admin and set a logon password for the user.
    
    For more information, see the "Create a user" section in the [Perform basic operations](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk) topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943549.png)
    
2.  Create an access configuration named Dept-1-Access.
    
    For more information, see [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943565.png)
    
    For this scenario, configure only an inline policy. The following two examples demonstrate different levels of delegated permissions. You can select the one that best suits your requirements.
    
    ## Example 1
    
    The CloudSSO user Dept-1-Admin cannot manage (create, modify, or delete) other CloudSSO users. They can only grant other CloudSSO users access to specified member accounts.
    
    This policy grants the read permissions needed to view information about member accounts, CloudSSO users, and access configurations, and permissions to grant access scoped to a specific RDPath.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "resourcemanager:GetResourceDirectory",
            "resourcemanager:ListParents",
            "resourcemanager:ListChildrenForParent",
            "resourcemanager:ListAncestors",
            "resourcemanager:ListAccountRecordsForParent",
            "resourcemanager:GetFolder",
            "resourcemanager:GetAccount",
            "resourcemanager:ListAuthorizedFolders",
            "resourcemanager:ListAccounts",
            "resourcemanager:ListAccountsForParent",
            "resourcemanager:ListFoldersForParent"
          ],
          "Resource": "*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "ram:ListPolicies",
            "ram:GetPolicyVersion",
            "ram:ListPolicyVersions",
            "ram:GetPolicy"
          ],
          "Resource": "acs:ram:*:system:policy/*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "cloudsso:Get*",
            "cloudsso:List*",
            "cloudsso:CheckRDFeaturePrerequisite"
          ],
          "Resource": "*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "cloudsso:CreateAccessAssignment",
            "cloudsso:DeleteAccessAssignments",
            "cloudsso:DeprovisionAccessConfiguration",
            "cloudsso:ProvisionAccessConfiguration",
            "cloudsso:CreateUserProvisioning",
            "cloudsso:DeleteUserProvisioning",
            "cloudsso:GetUserProvisioningRdAccountStatistics",
            "cloudsso:GetUserProvisioning",
            "cloudsso:UpdateUserProvisioning",
            "cloudsso:GetUserProvisioningStatistics",
            "cloudsso:PreCheckForCreateUserProvisioning",
            "cloudsso:DeleteUserProvisioningEvent",
            "cloudsso:GetUserProvisioningEvent",
            "cloudsso:RetryUserProvisioningEvent",
            "cloudsso:GetTask",
            "cloudsso:GetTaskStatus"
          ],
          "Resource": "*",
          "Condition": {
            "StringLike": {
              "acs:RDManageScope": [
                "rd-3G****/r-Wm****/fd-Ca2****Q3Y/*"
              ]
            }
          }
        }
      ]
    }
    ```
    
    ## Example 2
    
    The CloudSSO user Dept-1-Admin can manage (create, modify, or delete) other CloudSSO users and grant access to specified member accounts.
    
    This policy grants the read permissions needed to view information about member accounts, CloudSSO users, and access configurations; write permissions to manage CloudSSO users; and permissions to grant access scoped to a specific RDPath. This policy does not include permissions to manage CloudSSO user groups.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "resourcemanager:GetResourceDirectory",
            "resourcemanager:ListParents",
            "resourcemanager:ListChildrenForParent",
            "resourcemanager:ListAncestors",
            "resourcemanager:ListAccountRecordsForParent",
            "resourcemanager:GetFolder",
            "resourcemanager:GetAccount",
            "resourcemanager:ListAuthorizedFolders",
            "resourcemanager:ListAccounts",
            "resourcemanager:ListAccountsForParent",
            "resourcemanager:ListFoldersForParent"
          ],
          "Resource": "*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "ram:ListPolicies",
            "ram:GetPolicyVersion",
            "ram:ListPolicyVersions",
            "ram:GetPolicy"
          ],
          "Resource": "acs:ram:*:system:policy/*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "cloudsso:Get*",
            "cloudsso:List*",
            "cloudsso:CheckRDFeaturePrerequisite",
            "cloudsso:CreateUser",
            "cloudsso:UpdateUser",
            "cloudsso:UpdateUserStatus",
            "cloudsso:DeleteUser",
            "cloudsso:ResetUserPassword",
            "cloudsso:DeleteMFADeviceForUser",
            "cloudsso:UpdateUserMFAAuthenticationSettings"
          ],
          "Resource": "*"
        },
        {
          "Effect": "Allow",
          "Action": [
            "cloudsso:CreateAccessAssignment",
            "cloudsso:DeleteAccessAssignments",
            "cloudsso:DeprovisionAccessConfiguration",
            "cloudsso:ProvisionAccessConfiguration",
            "cloudsso:CreateUserProvisioning",
            "cloudsso:DeleteUserProvisioning",
            "cloudsso:GetUserProvisioningRdAccountStatistics",
            "cloudsso:GetUserProvisioning",
            "cloudsso:UpdateUserProvisioning",
            "cloudsso:GetUserProvisioningStatistics",
            "cloudsso:PreCheckForCreateUserProvisioning",
            "cloudsso:DeleteUserProvisioningEvent",
            "cloudsso:GetUserProvisioningEvent",
            "cloudsso:RetryUserProvisioningEvent",
            "cloudsso:GetTask",
            "cloudsso:GetTaskStatus"
          ],
          "Resource": "*",
          "Condition": {
            "StringLike": {
              "acs:RDManageScope": [
                "rd-3G****/r-Wm****/fd-Ca2****Q3Y/*"
              ]
            }
          }
        }
      ]
    }
    ```
    
    **Important**
    
    The `acs:RDManageScope` condition key in the inline policy specifies the RDPath of the folder or member account the delegated administrator can manage.
    
    -   `rd-******/r-*****/fd-***** _/_*`: specifies all member accounts in the specified folder.
        
    -   `rd-******/r-*****/fd-*****/123******`: specifies a specific member account.
        
    
    In the preceding policy examples, `rd-3G****/r-Wm****/fd-Ca2****Q3Y` is the RDPath of the Dept-1 folder. Replace it with the actual RDPath of your target folder. For information about how to view an RDPath, see [View the basic information of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder) and [View the information of a member](/help/en/resource-management/resource-directory/user-guide/view-the-detailed-information-of-a-member).
    
3.  Grant access permissions to the Dept-1-Admin user.
    
    For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943646.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943653.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943654.png)
    

## **Verify the result**

1.  Log on to the CloudSSO user portal as the Dept-1-Admin user.
    
    For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943664.png)
    
2.  Grant access permissions on a member account in the Dept-1 folder.
    
    If you can successfully assign permissions to member accounts within the Dept-1 folder but fail to assign permissions to accounts in other folders, the delegation is configured correctly.
    
    **Note**
    
    The delegated administrator can view the entire resource directory tree. However, they can assign permissions only to the member accounts within the folder they are authorized to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2831784471/p943667.png)
