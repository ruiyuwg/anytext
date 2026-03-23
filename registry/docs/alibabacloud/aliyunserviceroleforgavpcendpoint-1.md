If your Global Accelerator (GA) instance is not assigned the AliyunServiceRoleForGaVpcEndpoint service-linked role and you specify an Elastic Compute Service (ECS) instance, Application Load Balancer (ALB) instance, Network Load Balancer (NLB) instance, a Classic Load Balancer (CLB) instance in a VPC, an elastic network interface (ENI), or a custom private IP address as an endpoint of the Global Accelerator instance, the system automatically creates the AliyunServiceRoleForGaVpcEndpoint service-linked role.

## Overview

AliyunServiceRoleForGaVpcEndpoint is a Global Accelerator service-linked role. If you want to specify an ECS instance, ALB instance, NLB instance, CLB instance, ENI, or custom private IP address as an endpoint of Global Accelerator, you must assign the service-linked role to Global Accelerator.

**Note**

A service-linked role is a Resource Access Management (RAM) role that is associated with an Alibaba Cloud service. In some cases, to use a feature of a cloud service, you must first acquire the permissions to access other cloud services. Service-linked roles simplify the authorization process and prevent accidental operations. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Permissions required to create the service-linked role

By default, an Alibaba Cloud account is authorized to create the AliyunServiceRoleForGaVpcEndpoint service-linked role. RAM users must be granted the following permissions to create the service-linked role:

```
{
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "vpcendpoint.ga.aliyuncs.com"
        }
      }
}
```

You can authorize a RAM user to create the service-linked role by using one of the following methods:

-   Attach the AliyunGlobalAccelerationFullAccess administrator policy to the RAM user. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    
    **Note**
    
    In most cases, the permissions to create the Global Accelerator service-linked role AliyunServiceRoleForGaVpcEndpoint are included in the AliyunGlobalAccelerationFullAccess administrator policy. If the RAM user has administrator permissions on Global Accelerator, the RAM user can create the AliyunServiceRoleForGaVpcEndpoint service-linked role for Global Accelerator.
    
-   Attach a custom policy to the RAM user. The following code block shows the content of the custom policy:
    
    ```
    {
          "Action": "ram:CreateServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "vpcendpoint.ga.aliyuncs.com"
            }
          }
    }
    ```
    
    For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb) and [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
    

## Create the service-linked role

When you specify an ECS instance, ALB instance, NLB instance, CLB instance, ENI, or custom private IP address as a Global Accelerator endpoint, the system determines whether Global Accelerator has the AliyunServiceRoleForGaVpcEndpoint service-linked role:

-   If the AliyunServiceRoleForGaVpcEndpoint service-linked role is not assigned to Global Accelerator, the system automatically creates the service-linked role and adds a policy named AliyunServiceRoleForGaVpcEndpoint to the service-linked role. The policy grants Global Accelerator the permissions to access ECS, ALB, NLB, CLB, ENI, and custom private IP addresses. The following code block shows the content of the policy:
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Resource": "*",
          "Action": [
            "ecs:CreateNetworkInterface",
            "ecs:DeleteNetworkInterface",
            "ecs:DescribeNetworkInterfaces",
            "ecs:ModifyNetworkInterfaceAttribute",
            "ecs:DescribeSecurityGroups",
            "ecs:CreateSecurityGroup",
            "ecs:AuthorizeSecurityGroup",
            "ecs:AuthorizeSecurityGroupEgress",
            "ecs:RevokeSecurityGroup",
            "ecs:RevokeSecurityGroupEgress",
            "ecs:JoinSecurityGroup",
            "ecs:LeaveSecurityGroup",
            "ecs:DeleteSecurityGroup",
            "ecs:DescribeSecurityGroupAttribute",
            "ecs:DescribeSecurityGroups",
            "ecs:DescribeSecurityGroupReferences",
            "ecs:ModifySecurityGroupAttribute",
            "ecs:ModifySecurityGroupEgressRule",
            "ecs:ModifySecurityGroupPolicy",
            "ecs:ModifySecurityGroupRule",
            "vpc:DescribeVSwitches"
          ]
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "vpcendpoint.ga.aliyuncs.com"
            }
          }
        }
      ]
    }
    ```
    
-   If the AliyunServiceRoleForGaVpcEndpoint service-linked role is assigned to Global Accelerator, the system does not re-create the service-linked role.
    

## Delete the service-linked role

The system does not automatically delete the Global Accelerator service-linked role AliyunServiceRoleForGaVpcEndpoint. If you want to delete the service-linked role, you must first delete the ECS instance, ALB instance, NLB instance, CLB instance, ENI, or custom private IP address that serves as an endpoint. For more information, see the following topics:

1.  [Delete an endpoint](/help/en/ga/user-guide/create-and-manage-the-endpoint-groups-of-intelligent-routing-listeners#section-81r-zee-no1)
    
2.  [Delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)
