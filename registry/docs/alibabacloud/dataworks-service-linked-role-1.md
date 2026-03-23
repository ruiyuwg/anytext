When you use an exclusive resource group for the first time, you must grant DataWorks permissions to access other Alibaba Cloud products. After the authorization is complete, the system automatically creates a service-linked role named `AliyunServiceRoleForDataWorks`. This role is used by DataWorks to access your resources in other Alibaba Cloud products. This topic describes how to view the details of the role.

## Background

For more information about service-linked roles, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Introduction to AliyunServiceRoleForDataWorks

-   Role name: AliyunServiceRoleForDataWorks
    
-   Role purpose: To allow DataWorks to access your resources in other cloud products, such as [Elastic Computing Service (ECS)](/help/en/ecs/user-guide/what-is-ecs), [virtual private cloud (VPC)](/help/en/vpc/what-is-vpc), [File Storage NAS](/help/en/nas/product-overview/what-is-nas), [Container Registry (ACR)](/help/en/acr/product-overview/what-is-container-registry), [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute), and [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss).
    
-   Attached role policy: **AliyunServiceRolePolicyForDataWorks**
    
-   Policy details:
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) and choose **Identity Management** > **Roles** to view the details of the service-linked role.
        
    2.  Click the name of the service-linked role. On the **Permission Management** tab, you can view the details of the attached system policy. The policy includes permissions for the following products:
        
        -   Access permissions for Elastic Computing Service (ECS)
            
            ```
            {
              "Version": "1",
              "Statement": [
                {
                  "Action": [
                    "ecs:AttachNetworkInterface",
                    "ecs:AuthorizeSecurityGroup",
                    "ecs:AuthorizeSecurityGroupEgress",
                    "ecs:CreateNetworkInterface",
                    "ecs:CreateNetworkInterfacePermission",
                    "ecs:CreateSecurityGroup",
                    "ecs:DeleteNetworkInterface",
                    "ecs:DeleteNetworkInterfacePermission",
                    "ecs:DeleteSecurityGroup",
                    "ecs:DescribeNetworkInterfacePermissions",
                    "ecs:DescribeNetworkInterfaces",
                    "ecs:DescribeSecurityGroupAttribute",
                    "ecs:DescribeSecurityGroupReferences",
                    "ecs:DescribeSecurityGroups",
                    "ecs:DetachNetworkInterface",
                    "ecs:JoinSecurityGroup",
                    "ecs:LeaveSecurityGroup",
                    "ecs:ModifyNetworkInterfaceAttribute",
                    "ecs:ModifySecurityGroupAttribute",
                    "ecs:ModifySecurityGroupPolicy",
                    "ecs:ModifySecurityGroupRule",
                    "ecs:RevokeSecurityGroup",
                    "ecs:RevokeSecurityGroupEgress",
                    "ecs:AssignIpv6Addresses",
                    "ecs:UnassignIpv6Addresses"
                  ],
                  "Resource": "*",
                  "Effect": "Allow"
                }
              ]
            }
            ```
            
        -   Access permissions for virtual private cloud (VPC)
            
            ```
            {
              "Version": "1",
              "Statement": [
                {
                  "Action": [
                    "vpc:DescribeVpcs",
                    "vpc:DescribeVpcAttribute",
                    "vpc:DescribeVSwitches",
                    "vpc:DescribeVSwitchAttributes",
                    "vpc:CreateVpc",
                    "vpc:CreateVSwitch"
                  ],
                  "Resource": "*",
                  "Effect": "Allow"
                }
              ]
            }
            ```
            
        -   Access permissions for File Storage NAS
            
            ```
            {
              "Version": "1",
              "Statement": [
                {
                  "Action": [
                    "nas:DescribeFileSystems",
                    "nas:DescribeMountTargets",
                    "nas:CreateMountTarget",
                    "nas:ModifyMountTarget",
                    "nas:DescribeProtocolMountTarget"
                  ],
                  "Effect": "Allow",
                  "Resource": "*"
                }
              ]
            }
            ```
            
        -   Access permissions for Container Registry (ACR)
            
            ```
            {
              "Version": "1",
              "Statement": [
                {
                  "Action": [
                    "cr:ListNamespace",
                    "cr:ListRepository",
                    "cr:GetAuthorizationToken",
                    "cr:ListInstanceEndpoint",
                    "cr:PullRepository",
                    "cr:PushRepository",
                    "cr:GetInstance",
                    "cr:GetInstanceVpcEndpoint",
                    "cr:ListInstance",
                    "cr:ListInstanceDomain",
                    "cr:GetRepository",
                    "cr:GetRepositoryLayers",
                    "cr:ListRepositoryTag",
                    "cr:GetNamespace",
                    "cr:GetRepoTag",
                    "cr:CreateInstanceVpcEndpointLinkedVpc",
                    "cr:GetInstanceEndpoint"
                  ],
                  "Resource": "*",
                  "Effect": "Allow"
                }
              ]
            }
            ```
            
        -   Access permissions for MaxCompute
            
            ```
            {
              "Version": "1",
              "Statement": [
                {
                  "Action": [
                    "odps:GetImage",
                    "odps:AddImage",
                    "odps:RemoveImage"
                  ],
                  "Resource": "*",
                  "Effect": "Allow"
                }
              ]
            }
            ```
            
        -   Access permissions for Object Storage Service (OSS)
            
            ```
            {
              "Version": "1",
              "Statement": [
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
                    "oss:DeleteBucketCors",
                    "oss:GetBucketInfo",
                    "oss:ListBuckets"
                  ],
                  "Resource": "*",
                  "Effect": "Allow"
                }
              ]
            }
            ```
            
        -   Control permissions for DataWorks resources
            
            ```
            {
              "Version": "1",
              "Statement": [
                {
                  "Action": [
                    "dataworks:ListTagResources",
                    "dataworks:TagResources",
                    "dataworks:UntagResources",
                    "dataworks:ChangeResourceManagerResourceGroup"
                  ],
                  "Resource": "*",
                  "Effect": "Allow"
                }
              ]
            }
            ```
