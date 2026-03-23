AliyunServiceRolePolicyForNlbClone is the authorization policy dedicated to a service-linked role. The policy is automatically attached to a service role when the service role is created. Then, the service-linked role is authorized to access other cloud services. This policy is updated by the relevant Alibaba Cloud service. Do not attach this policy to a RAM identity other than a service-linked role.

## **Policy details**

-   Type: service system policy
    
-   Creation time: 10:32:40 on February 27, 2024
    
-   Update time: 10:32:40 on February 27, 2024
    
-   Current version: v1
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "ros:CreateTemplateScratch",
        "ros:GetTemplateScratch",
        "ros:GenerateTemplateByScratch",
        "ros:DeleteTemplateScratch",
        "ros:PreviewStack",
        "ros:CreateStack",
        "ros:DeleteStack",
        "ros:GetStack",
        "ros:ListStacks",
        "ros:ListStackResources",
        "ros:GetStackResource",
        "ros:ListStackEvents"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "nlb:CreateLoadBalancer",
        "nlb:DeleteLoadBalancer",
        "nlb:UpdateLoadBalancerAttribute",
        "nlb:GetLoadBalancerAttribute",
        "nlb:ListLoadBalancers",
        "nlb:AttachCommonBandwidthPackageToLoadBalancer",
        "nlb:DetachCommonBandwidthPackageFromLoadBalancer",
        "nlb:EnableLoadBalancerIpv6Internet",
        "nlb:DisableLoadBalancerIpv6Internet",
        "nlb:UpdateLoadBalancerProtection",
        "nlb:CreateListener",
        "nlb:DeleteListener",
        "nlb:GetListenerAttribute",
        "nlb:ListListeners",
        "nlb:GetListenerHealthStatus",
        "nlb:UpdateListenerAttribute",
        "nlb:StartListener",
        "nlb:StopListener",
        "nlb:ListServerGroupServers",
        "nlb:ListServerGroups",
        "nlb:CreateServerGroup",
        "nlb:DeleteServerGroup",
        "nlb:UpdateServerGroupAttribute",
        "nlb:UpdateServerGroupServersAttribute",
        "nlb:AddServersToServerGroup",
        "nlb:RemoveServersFromServerGroup",
        "nlb:ListTagResources",
        "nlb:UntagResources",
        "nlb:TagResources",
        "nlb:DescribeZones",
        "nlb:GetJobStatus"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "slb:CreateAccessControlList",
        "slb:AddAccessControlListEntry",
        "slb:AddTags",
        "slb:TagResources",
        "slb:AddBackendServers",
        "slb:AddVServerGroupBackendServers",
        "slb:UploadServerCertificate",
        "slb:CreateDomainExtension",
        "slb:CreateLoadBalancerHTTPListener",
        "slb:CreateLoadBalancerHTTPSListener",
        "slb:CreateLoadBalancerTCPListener",
        "slb:CreateLoadBalancerUDPListener",
        "slb:StartLoadBalancerListener",
        "slb:CreateLoadBalancer",
        "slb:CreateMasterSlaveServerGroup",
        "slb:CreateRules",
        "slb:SetRule",
        "slb:CreateTLSCipherPolicy",
        "slb:ListTLSCipherPolicies",
        "slb:CreateVServerGroup",
        "slb:AddVServerGroupBackendServers",
        "slb:Describe*",
        "slb:DeleteAccessControlList",
        "slb:RemoveBackendServers",
        "slb:RemoveVServerGroupBackendServers",
        "slb:DeleteServerCertificate",
        "slb:DeleteDomainExtension",
        "slb:DeleteLoadBalancerListener",
        "slb:CancelOrder",
        "slb:DeleteLoadBalancer",
        "slb:DeleteMasterSlaveServerGroup",
        "slb:DeleteRules",
        "slb:DeleteTLSCipherPolicy",
        "slb:DeleteVServerGroup",
        "slb:ListTagResources"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "vpc:DescribeVpcs",
        "vpc:DescribeVSwitches"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "ecs:Describe*"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
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
          "ram:ServiceName": "clone.nlb.aliyuncs.com"
        }
      }
    },
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "nlb.aliyuncs.com"
        }
      }
    },
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "eipaccess.slb.aliyuncs.com"
        }
      }
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Service-linked roles](/help/en/ram/user-guide/service-linked-roles)
