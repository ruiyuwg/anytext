When you use self-managed resource groups in Elastic Algorithm Service (EAS), EAS can assume the `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role to access other cloud services. Before you use EAS self-managed resource groups, you must assign the service-link role to EAS by using your Alibaba Cloud account. This topic describes the permissions that are provided by the `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role and how to delete the role.

## **Background**

The `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role is a Resource Access Management (RAM) role that EAS can assume to access other Alibaba Cloud services when using self-managed resource groups. EAS uses the role to implement features in specific scenarios. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

To implement specific features, EAS may need to access Object Storage Service (OSS), Simple Log Service, Elastic Compute Service (ECS), and Virtual Private Cloud (VPC) resources. You can assign the `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role to EAS to authorize EAS to access the cloud services.

## Permissions provided by AliyunServiceRoleForPaiEasManageCustomerClusters

The `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role has permissions to access the following cloud services:

-   PrivateLink
    
    ```
    {
          "Action": [
            "privatelink:OpenPrivateLinkService",
            "privatelink:CheckProductOpen",
            "privatelink:ListVpcEndpointServices",
            "privatelink:CreateVpcEndpoint",
            "privatelink:ListVpcEndpoints",
            "privatelink:UpdateVpcEndpointAttribute",
            "privatelink:GetVpcEndpointAttribute",
            "privatelink:ListVpcEndpointSecurityGroups",
            "privatelink:AttachSecurityGroupToVpcEndpoint",
            "privatelink:DetachSecurityGroupFromVpcEndpoint",
            "privatelink:AddZoneToVpcEndpoint",
            "privatelink:RemoveZoneFromVpcEndpoint",
            "privatelink:ListVpcEndpointZones",
            "privatelink:DeleteVpcEndpoint"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   VPC
    
    ```
    {
          "Action": [
            "vpc:DescribeVpcs",
            "vpc:DescribeVpcAttribute",
            "vpc:DescribeVSwitches",
            "vpc:DescribeVSwitchAttributes"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   ECS
    
    ```
    {
          "Action": [
            "ecs:DescribeSecurityGroups",
            "ecs:CreateSecurityGroup",
            "ecs:DeleteSecurityGroup",
            "ecs:AuthorizeSecurityGroup",
            "ecs:AuthorizeSecurityGroupEgress",
            "ecs:RevokeSecurityGroup",
            "ecs:RevokeSecurityGroupEgress"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   Container Service for Kubernetes (ACK)
    
    ```
    {
          "Action": [
            "cs:DescribeClusterDetail",
            "cs:DescribeClusterUserKubeconfig"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    
-   Simple Log Service
    
    ```
    {
          "Action": [
            "log:GetIndex",
            "log:GetConfig",
            "log:GetLogStore",
            "log:GetProject",
            "log:GetLogStoreLogs",
            "log:GetMachineGroup",
            "log:CreateConfig",
            "log:CreateIndex",
            "log:CreateLogStore",
            "log:CreateMachineGroup",
            "log:CreateProject",
            "log:DeleteConfig",
            "log:DeleteIndex",
            "log:DeleteLogStore",
            "log:DeleteMachineGroup",
            "log:DeleteProject",
            "log:ApplyConfigToGroup"
          ],
          "Resource":  [
            "acs:log:*:*:project/*/logstore/eas-*",
            "acs:log:*:*:project/eas-*"
          ],
          "Effect": "Allow"
        }
    ```
    
-   Alibaba Cloud DNS PrivateZone
    
    ```
    {
          "Action": [
            "pvtz:AddZone",
            "pvtz:BindZoneVpc",
            "pvtz:AddZoneRecord",
            "pvtz:DeleteZone"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
    ```
    

## Delete the AliyunServiceRoleForPaiEasManageCustomerClusters service-linked role

When you delete the `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role, the services that you deployed in EAS may be affected. Before you delete the service-linked role, make sure that you understand the impact. After you delete the `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role, you may be unable to deploy or update services by using the self-managed resource groups in EAS, or use the services that are deployed in the self-managed resource groups.

Perform the following steps to delete the `AliyunServiceRoleForPaiEasManageCustomerClusters` service-linked role:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, enter `AliyunServiceRoleForPaiEasManageCustomerClusters` in the search box. The RAM role named `AliyunServiceRoleForPaiEasManageCustomerClusters` is displayed in the search result.
    
4.  On the **Roles** page, find the RAM role that you want to delete and click **Delete Role** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5731834171/p788894.png)
    
5.  In the **Delete Role** dialog box, enter the name of the RAM role to confirm the deletion and click **Delete Role**.
