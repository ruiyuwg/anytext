AliyunServiceRolePolicyForNlb is the authorization policy dedicated to a service-linked role. The policy is automatically attached to a service role when the service role is created. Then, the service-linked role is authorized to access other cloud services. This policy is updated by the relevant Alibaba Cloud service. Do not attach this policy to a RAM identity other than a service-linked role.

## **Policy details**

-   Type: service system policy
    
-   Creation time: 02:59:15 on April 12, 2022
    
-   Update time: 09:58:38 on March 13, 2026
    
-   Current version: v8
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "ecs:CreateNetworkInterface",
        "ecs:JoinResourceGroup",
        "ecs:DeleteNetworkInterface",
        "ecs:DescribeNetworkInterfaces",
        "ecs:AttachNetworkInterface",
        "ecs:DetachNetworkInterface",
        "ecs:DescribeNetworkInterfaces",
        "ecs:ModifyNetworkInterfaceAttribute",
        "ecs:CreateNetworkInterfacePermission",
        "ecs:DescribeNetworkInterfacePermissions",
        "ecs:DeleteNetworkInterfacePermission",
        "ecs:AttachNetworkInterfacePermissions",
        "ecs:DetachNetworkInterfacePermissions",
        "ecs:AssignPrivateIpAddresses",
        "ecs:UnassignPrivateIpAddresses",
        "ecs:DescribeNetworkInterfaceAttribute",
        "ecs:CreateSecurityGroup",
        "ecs:DeleteSecurityGroup",
        "ecs:DescribeSecurityGroups",
        "ecs:DescribeSecurityGroupAttribute",
        "ecs:AuthorizeSecurityGroup",
        "ecs:AuthorizeSecurityGroupEgress",
        "ecs:RevokeSecurityGroup",
        "ecs:RevokeSecurityGroupEgress",
        "ecs:AuthorizeSecurityGroupPermission",
        "ecs:RevokeSecurityGroupPermission",
        "ecs:DeleteSecurityGroupPermission",
        "ecs:JoinSecurityGroupPermission",
        "ecs:DeleteSecurityGroupPermission",
        "ecs:LeaveSecurityGroupPermission",
        "ecs:DescribeSecurityGroupPermissions",
        "vpc:RemoveCommonBandwidthPackageIp",
        "vpc:AddCommonBandwidthPackageIp",
        "vpc:DeleteCommonBandwidthPackage",
        "vpc:CreateCommonBandwidthPackage",
        "vpc:DescribeCommonBandwidthPackages",
        "vpc:ModifyCommonBandwidthPackageSpec",
        "vpc:ModifyCommonBandwidthPackageChargeType",
        "vpc:ReleaseEipAddress",
        "vpc:AllocateEipAddress",
        "vpc:AssociateEipAddress",
        "vpc:UnassociateEipAddress",
        "vpc:DescribeEipAddresses",
        "vpc:ModifyEipAddressAttribute",
        "vpc:DeleteIpv6InternetBandwidth",
        "vpc:AllocateIpv6InternetBandwidth",
        "vpc:DescribeIpv6Addresses",
        "vpc:DescribeIpv6Gateways",
        "vpc:DescribeVSwitchAttributes",
        "vpc:MoveResourceGroup",
        "vpc:TagResources",
        "cas:DescribeCACertificate",
        "eipanycast:AllocateAnycastEipAddress",
        "eipanycast:ListAnycastEipAddresses",
        "eipanycast:AssociateAnycastEipAddress",
        "eipanycast:UnassociateAnycastEipAddress",
        "eipanycast:ReleaseAnycastEipAddress",
        "eipanycast:DescribeAnycastServerRegions",
        "quotas:GetProductQuota",
        "tag:TagResources",
        "tag:UntagResources"
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
          "ram:ServiceName": "nlb.aliyuncs.com"
        }
      }
    },
    {
      "Action": [
        "oss:GetBucketInfo",
        "oss:PutObject",
        "oss:GetObject",
        "oss:PutBucket",
        "oss:PutBucketVersioning",
        "oss:GetBucketVersioning",
        "oss:GetObjectVersion",
        "oss:PutBucketCors"
      ],
      "Effect": "Allow",
      "Resource": [
        "acs:oss:*:*:nlb-res-backup-*",
        "acs:oss:*:*:nlb-res-backup-*/*"
      ]
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Service-linked roles](/help/en/ram/user-guide/service-linked-roles)
