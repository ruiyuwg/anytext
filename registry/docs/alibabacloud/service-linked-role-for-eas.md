Elastic Algorithm Service (EAS) can assume the service-linked role AliyunServiceRoleForPaiEas to access other Alibaba Cloud services. Before you use EAS, you must assign the service-link role to EAS by using your Alibaba Cloud account. This topic describes the permissions that are provided by AliyunServiceRoleForPaiEas and how to delete the service-linked role.

## Background information

The service-linked role AliyunServiceRoleForPaiEas for EAS is a Resource Access Management (RAM) role that EAS can assume to access other Alibaba Cloud services to implement an EAS feature in specific scenarios. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

To implement specific features, EAS may need to access Object Storage Service (OSS), Simple Log Service, Elastic Compute Service (ECS), and Virtual Private Cloud (VPC) resources. You can assign the service-linked role AliyunServiceRoleForPaiEas to EAS. This way, EAS has the required permissions to access these services.

## Permissions provided by AliyunServiceRoleForPaiEas

AliyunServiceRoleForPaiEas has the permissions to access the following Alibaba Cloud services:

-   OSS
    
    ```
        {
          "Action": [
            "oss:GetObject",
            "oss:PutObject",
            "oss:DeleteObject",
            "oss:ListParts",
            "oss:AbortMultipartUpload",
            "oss:ListObjects",
            "oss:ListBuckets",
            "oss:PutBucketCors",
            "oss:GetBucketCors",
            "oss:DeleteBucketCors"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   Simple Log Service
    
    ```
        {
          "Action": [
            "log:CreateConfig",
            "log:GetConfig",
            "log:UpdateConfig",
            "log:DeleteConfig",
            "log:CreateMachineGroup",
            "log:GetMachineGroup",
            "log:DeleteMachineGroup",
            "log:ApplyConfigToGroup",
            "log:ListProject",
            "log:ListLogStores"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   ECS
    
    ```
        {
          "Action": [
            "ecs:CreateNetworkInterface",
            "ecs:DeleteNetworkInterface",
            "ecs:DescribeNetworkInterfaces",
            "ecs:CreateNetworkInterfacePermission",
            "ecs:DescribeNetworkInterfacePermissions",
            "ecs:DeleteNetworkInterfacePermission",
            "ecs:DescribeSecurityGroups"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   VPC
    
    ```
        {
          "Action": [
            "vpc:DescribeVSwitchAttributes",
            "vpc:DescribeVpcs",
            "vpc:DescribeVSwitches",
            "vpc:DescribeVpcAttribute"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    

## Delete the service-linked role AliyunServiceRoleForPaiEas

Deleting the service-linked role AliyunServiceRoleForPaiEas may affect the services that you deployed in EAS. Before you delete the service-linked role, make sure that you understand the impact. After you delete the service-linked role AliyunServiceRoleForPaiEas, you may be unable to update the services that you deployed in EAS, create VPC direct connections, or deliver the service log to Simple Log Service.

To delete the service-linked role AliyunServiceRoleForPaiEas, perform the following steps:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, enter AliyunServiceRoleForPaiEas in the search box. The RAM role named AliyunServiceRoleForPaiEas is displayed in the search result.
    
4.  Click **Delete Role** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5469538171/p806830.png)
    
5.  In the **Delete Role** dialog box, enter the name of the role you want to delete and click **Delete Role**.
    

If you cannot delete the service-linked role AliyunServiceRoleForPaiEas as a RAM user, see the "Why is the service-linked role of EAS not automatically created or deleted for RAM users?" section in the [FAQ about EAS](/help/en/pai/faq-about-eas#section-n7h-fbc-rw2) topic.
