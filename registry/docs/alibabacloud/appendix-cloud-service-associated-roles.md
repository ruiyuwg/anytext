After you activate PAI-Lingjun AI Computing Service and create Lingjun connections, you can use Lingjun connections to access other Alibaba Cloud services. For example, you can access virtual private clouds (VPCs), create Express Connect circuits, and create elastic network interfaces (ENIs). This topic describes the scenarios in which the service-linked role AliyunServiceRoleForEfloVcc of Lingjun connections is used. This topic also describes how to delete the service-linked role.

## Background information

The service-linked role named AliyunServiceRoleForEfloVcc is a Resource Access Management (RAM) role that is created for Lingjun connections to access other Alibaba Cloud services to implement specific features. For more information about service-linked roles, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Role description

-   Role name: AliyunServiceRoleForEfloVcc
    
-   Policy:
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "ecs:CreateNetworkInterface",
            "ecs:AttachNetworkInterface",
            "ecs:DetachNetworkInterface",
            "ecs:DeleteNetworkInterface",
            "ecs:DescribeNetworkInterfaces",
            "ecs:CreateSecurityGroup",
            "ecs:DeleteSecurityGroup",
            "ecs:AuthorizeSecurityGroup",
            "ecs:AuthorizeSecurityGroupEgress",
            "ecs:RevokeSecurityGroup",
            "ecs:RevokeSecurityGroupEgress",
            "ecs:DescribeSecurityGroups",
            "ecs:DescribeSecurityGroupAttribute",
            "ecs:ModifyInstanceAttribute"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "vpc:DescribeVpcs",
            "vpc:DescribeVSwitches",
            "vpc:ConfirmPhysicalConnection",
            "vpc:CreateVirtualBorderRouter",
            "vpc:DeleteVirtualBorderRouter",
            "vpc:DescribeVirtualBorderRouters",
            "vpc:CreateBgpGroup",
            "vpc:DeleteBgpGroup",
            "vpc:DescribeBgpGroups",
            "vpc:CreateBgpPeer",
            "vpc:DeleteBgpPeer",
            "vpc:DescribeBgpPeers",
            "cen:AttachCenChildInstance",
            "cen:DetachCenChildInstance",
            "vpc:DescribeRouteEntryList",
            "vpc:AddBgpNetwork",
            "vpc:DeleteBgpNetwork",
            "vpc:DescribeBgpNetworks",
            "vpc:TerminatePhysicalConnection",
            "vpc:RecoverPhysicalConnection",
            "vpc:DeletePhysicalConnection",
            "vpc:OpenPhysicalConnectionService",
            "vpc:GetPhysicalConnectionServiceStatus",
            "vpc:DescribePhysicalConnections",
            "vpc:CreatePhysicalConnectionOccupancyOrder",
            "vpc:UpdateVirtualPhysicalConnection",
            "vpc:CreateRouterInterface",
            "vpc:DeleteRouterInterface",
            "vpc:DeactivateRouterInterface",
            "vpc:DescribeRouterInterfaces",
            "vpc:DescribeRouteTableList",
            "vpc:CreateRouteEntries",
            "vpc:DeleteRouteEntries",
            "vpc:CreateRouteEntry",
            "vpc:DeleteRouteEntry",
            "vpc:DescribeGrantRulesToCen",
            "vpc:GrantInstanceToCen",
            "vpc:RevokeInstanceFromCen",
            "vpc:CreatePhysicalConnectionNew",
            "vpc:ModifyVirtualBorderRouterAttribute",
            "vpc:AssociatePhysicalConnectionToVirtualBorderRouter",
            "vpc:UnassociatePhysicalConnectionFromVirtualBorderRouter",
            "bssapi:SetRenewal",
            "vpc:CancelPhysicalConnection"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "cen:CreateTransitRouterRouteEntry",
            "cen:ListTransitRouterRouteEntries",
            "cen:DeleteTransitRouterRouteEntry",
            "cen:ResolveAndRouteServiceInCen",
            "cen:DescribeRouteServicesInCen",
            "cen:DeleteRouteServiceInCen",
            "cen:CreateTransitRouterVbrAttachment",
            "cen:DeleteTransitRouterVbrAttachment",
            "cen:ListTransitRouterVbrAttachments",
            "cen:ListTransitRouterVpcAttachments",
            "cen:DisableTransitRouterRouteTablePropagation",
            "cen:EnableTransitRouterRouteTablePropagation",
            "cen:ListTransitRouterRouteTablePropagations",
            "cen:AssociateTransitRouterAttachmentWithRouteTable",
            "cen:DissociateTransitRouterAttachmentFromRouteTable",
            "cen:ListTransitRouterRouteTableAssociations",
            "cen:ListTransitRouterRouteTables",
            "cen:ListTransitRouters",
            "cen:ListTransitRouterAvailableResource",
            "cen:ResolveAndRouteServiceInCen",
            "cen:DescribeRouteServicesInCen",
            "cen:DeleteRouteServiceInCen",
            "cen:DescribeCenAttachedChildInstances",
            "cen:DescribeCenAttachedChildInstanceAttribute",
            "cen:DescribeCens"
          ],
          "Resource": "*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "ros:ListStacks",
            "ros:GetStack",
            "ros:ListStackEvents",
            "ros:ListStackResources",
            "ros:GetStackResource",
            "ros:CreateStack",
            "ros:DeleteStack",
            "ros:PreviewStack"
          ],
          "Resource": [
            "*"
          ],
          "Effect": "Allow"
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "vcc.eflo.aliyuncs.com"
            }
          }
        }
      ]
    }
    ```
    

## Create the AliyunServiceRoleForEfloVcc role

When you create a Lingjun cluster for the first time, you must click **Confirm Authorization** in the [Network Configurations](/help/en/pai/user-guide/create-a-cluster#section-fps-ysg-mm5) step. Then, the system automatically creates the service-linked role **AliyunServiceRoleForEfloVcc**.

## Delete the AliyunServiceRoleForEfloVcc role

Before you delete the service-linked role **AliyunServiceRoleForEfloVcc**, you must release all Lingjun connections that assume this role.

-   A Lingjun connection is automatically released when the Lingjun connection expires.
    
-   For more information, see the "Delete a service-linked role" section of the [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q) topic.
