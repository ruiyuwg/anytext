The first time you use Secure Access Service Edge (SASE), you must authorize SASE to access the resources of other Alibaba Cloud services. This topic describes how to authorize SASE to access the resources of other Alibaba Cloud services.

## Prerequisites

-   SASE is activated.
    
-   An Alibaba Cloud account or a Resource Access Management (RAM) user that has permissions to create or delete service-linked roles is used.
    

## Background information

The first time you use SASE, Alibaba Cloud automatically creates the `AliyunServiceRoleForCsas` service-linked role for SASE to authorize SASE to access the resources of other related Alibaba Cloud services. You do not need to manually create or modify the service-linked role. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Procedure

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the **Welcome to Secure Access Service Edge (SASE)** dialog box, click **Create**.
    
    After you activate SASE, SASE prompts you to create a service-linked role when you log on to the SASE console for the first time.
    
    After you click **Create**, Alibaba Cloud automatically creates the `AliyunServiceRoleForCsas` service-linked role for SASE. You can view the service-linked role created for SASE on the **Roles** page of the [RAM console](https://ram.console.alibabacloud.com/roles). After the service-linked role is created, SASE can access the resources of Alibaba Cloud services such as Identity as a Service (IDaaS) and Smart Access Gateway (SAG).
    

## Service-linked role for SASE

The following section describes the service-linked role for SASE:

-   Role name: `AliyunServiceRoleForCsas`
    
-   Policy name: `AliyunServiceRolePolicyForCsas`
    
    **Note**
    
    This policy is a system policy. You are not allowed to change the name or modify the content of this policy.
    
-   Policy example:
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "ecs:DescribeInstances",
            "ecs:CreateSecurityGroup",
            "ecs:DeleteSecurityGroup",
            "ecs:AuthorizeSecurityGroup",
            "ecs:DescribeSecurityGroups",
            "ecs:DescribeSecurityGroupReferences",
            "ecs:ModifySecurityGroupPolicy",
            "ecs:ModifySecurityGroupRule",
            "ecs:ModifySecurityGroupEgressRule",
            "ecs:CreateNetworkInterface",
            "ecs:DeleteNetworkInterface",
            "ecs:DescribeNetworkInterfaces",
            "ecs:CreateNetworkInterfacePermission",
            "ecs:DescribeNetworkInterfacePermissions",
            "ecs:DeleteNetworkInterfacePermission",
            "ecs:AttachNetworkInterface",
            "ecs:DetachNetworkInterface",
            "ecs:RevokeSecurityGroup"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "rds:DescribeDBInstances",
            "rds:DescribeSecurityGroupConfiguration",
            "rds:ModifySecurityGroupConfiguration",
            "rds:DescribeDBInstanceIPArrayList",
            "rds:ModifySecurityIps"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "kvstore:DescribeInstances",
            "kvstore:DescribeGlobalDistributeCache",
            "kvstore:DescribeSecurityIps",
            "kvstore:ModifySecurityIps",
            "kvstore:DescribeSecurityGroupConfiguration",
            "kvstore:ModifySecurityGroupConfiguration"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "dds:DescribeDBInstances",
            "dds:DescribeSecurityIps",
            "dds:ModifySecurityIps",
            "dds:DescribeSecurityGroupConfiguration",
            "dds:ModifySecurityGroupConfiguration"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "polardb:DescribeDBClusters",
            "polardb:DescribeDBClusterAccessWhitelist",
            "polardb:ModifyDBClusterAccessWhitelist"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "vpc:DescribeVpcs",
            "vpc:DescribeVSwitches",
            "vpc:CreateVpc",
            "vpc:DeleteVpc",
            "vpc:CreateVSwitch",
            "vpc:DeleteVSwitch",
            "vpc:DescribeZones",
            "vpc:DescribePhysicalConnections",
            "vpc:DescribeVirtualBorderRouters",
            "vpc:DescribeVirtualBorderRoutersForPhysicalConnection",
            "vpc:DescribeVpnGateways",
            "vpc:DescribeVpnGateway",
            "vpc:DescribeCustomerGateways",
            "vpc:DescribeVpnConnections",
            "vpc:DescribeVpcAttribute",
            "vpc:DescribeRouteTables",
            "vpc:DescribeRouteTableList",
            "vpc:DescribeRouteEntryList"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "cen:DescribeCens",
            "cen:DescribeCenAttachedChildInstances",
            "cen:DescribeCenAttachedChildInstanceAttribute",
            "cen:AttachCenChildInstance",
            "cen:DetachCenChildInstance",
            "cen:GrantInstanceToCen",
            "cen:RevokeInstanceFromCen"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "smartag:CreateSmartAGTrafficService",
            "smartag:UpdateSmartAGTrafficService",
            "smartag:DeleteSmartAGTrafficSerivce",
            "smartag:ListSmartAGTrafficService",
            "smartag:DescribeSmartAccessGateways",
            "smartag:DescribeCloudConnectNetworks",
            "smartag:CreateCloudConnectNetwork",
            "smartag:ModifyCloudConnectNetwork",
            "smartag:DeleteCloudConnectNetwork",
            "smartag:CreateSmartAccessGatewaySoftware",
            "smartag:UpgradeSmartAccessGatewaySoftware",
            "smartag:DowngradeSmartAccessGatewaySoftware",
            "smartag:BindSmartAccessGateway",
            "smartag:UnbindSmartAccessGateway"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "log:PostLogStoreLogs",
            "log:GetProject",
            "log:ListProject",
            "log:GetLogStore",
            "log:ListLogStores",
            "log:CreateLogStore",
            "log:CreateProject",
            "log:GetIndex",
            "log:CreateIndex",
            "log:UpdateIndex",
            "log:CreateDashboard",
            "log:ClearLogStoreStorage",
            "log:UpdateLogStore",
            "log:UpdateDashboard",
            "log:CreateSavedSearch",
            "log:UpdateSavedSearch",
            "log:DeleteLogStore",
            "log:DeleteSavedSearch",
            "log:GetSavedSearch",
            "log:ListSavedSearch",
            "log:DeleteDashboard",
            "log:GetDashboard",
            "log:ListDashboard"
          ],
          "Resource": "acs:log:*:*:project/csas-project-*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "pvtz:DescribeZones",
            "pvtz:DescribeZoneInfo",
            "pvtz:DescribeZoneRecords"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "csas.aliyuncs.com"
            }
          }
        }
      ]
    }
    ```
    

## Delete the service-linked role

If you no longer need to use SASE, you can delete the `AliyunServiceRoleForCsas` service-linked role for SASE. Before you delete the AliyunServiceRoleForCsas service-linked role, you must release your SASE. After you release SASE, you can perform the following operations to delete the service-linked role for SASE in the RAM console.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles).
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  Search for and find the `AliyunServiceRoleForCsas` service-linked role of SASE and click **Delete Role** in the Actions column.
    
4.  In the **Delete Role** dialog box, enter the name of the role and click **Delete Role**.
    

## FAQ

Why is the system unable to automatically create the service-linked role for SASE when I use a RAM user?

If you want the system to automatically create or delete the service-linked role for SASE when you use a RAM user, you must grant the permissions specified by the following policy to the RAM user.

```
{
    "Statement": [
        {
            "Action": [
                "ram:CreateServiceLinkedRole"
            ],
            "Resource": "acs:ram:*:ID of your Alibaba Cloud account:role/*",
            "Effect": "Allow",
            "Condition": {
                "StringEquals": {
                    "ram:ServiceName": [
                        "csas.aliyuncs.com"
                    ]
                }
            }
        }
    ],
    "Version": "1"
}
```

**Note**

For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
