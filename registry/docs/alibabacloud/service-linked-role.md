This topic describes the service-linked role AliyunServiceRoleForNatgw for NAT Gateway and how to delete the service-linked role.

## Background

A service-linked role is a Resource Access Management (RAM) role that can be assumed by the linked service. An Alibaba Cloud service may need to access other services to use a specific feature. Before you access a service, make sure that you are authorized to access the service. Service-linked roles simplify the authorization process and avoid user errors. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Create a service-linked role.

When you create an enhanced NAT gateway that does not have a service-linked role, the system automatically creates the service-linked role AliyunServiceRoleForNatgw for the NAT gateway. Then, the system attaches the permission policy AliyunServiceRolePolicyForNatgw to the role. This allows the NAT gateway to access other resources on Alibaba Cloud. The following section shows the content of the permission policy:

**Note** When you create a standard NAT gateway, the system does not automatically create the service-linked role AliyunServiceRoleForNatgw for the NAT gateway.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "vpc:DescribeVSwitchAttributes"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "ecs:CreateNetworkInterface",
                "ecs:CreateSecurityGroup",
                "ecs:AuthorizeSecurityGroup",
                "ecs:RevokeSecurityGroup",
                "ecs:DeleteSecurityGroup",
                "ecs:JoinSecurityGroup",
                "ecs:DeleteSecurityGroup",
                "ecs:LeaveSecurityGroup",
                "ecs:DescribeSecurityGroups",
                "ecs:AttachNetworkInterface",
                "ecs:DetachNetworkInterface",
                "ecs:DeleteNetworkInterface",
                "ecs:DescribeNetworkInterfaces",
                "ecs:CreateNetworkInterfacePermission",
                "ecs:DescribeNetworkInterfacePermissions",
                "ecs:DeleteNetworkInterfacePermission",
                "ecs:CreateSecurityGroupPermission",
                "ecs:AuthorizeSecurityGroupPermission",
                "ecs:RevokeSecurityGroupPermission",
                "ecs:DeleteSecurityGroupPermission",
                "ecs:JoinSecurityGroupPermission",
                "ecs:DeleteSecurityGroupPermission",
                "ecs:LeaveSecurityGroupPermission",
                "ecs:DescribeSecurityGroupPermissions",
                "ecs:AttachNetworkInterfacePermissions",
                "ecs:DetachNetworkInterfacePermissions",
                "ecs:AssignPrivateIpAddresses",
                "ecs:UnassignPrivateIpAddresses",
                "ecs:DescribeNetworkInterfaceAttribute"
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
                    "ram:ServiceName": "nat.aliyuncs.com"
                }
            }
        }
    ]
}
```

## Delete a service-linked role

If you want to delete the service-linked role AliyunServiceRoleForNatgw for NAT Gateway, you must first delete the NAT gateway. For more information, see the following topics:

1.  [Delete an Internet NAT gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#section-jlc-o9d-xo8)
2.  [Delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)

## FAQ

Why is the service-linked role AliyunServiceRoleForNatgw for NAT Gateway not automatically created for a RAM user?

The service-linked role AliyunServiceRoleForNatgw for NAT Gateway is automatically created or deleted only if the RAM user has the required permissions. To acquire the permissions to create the service-linked role AliyunServiceRoleForNatgw for NAT Gateway, you must attach the following policy to the RAM user:

```
{
  "Statement": [
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "nat.aliyuncs.com"
        }
      }
    }
  ],
  "Version": "1"
}
```

## Related topics

-   [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621)
