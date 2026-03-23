AliyunPAIEASFullAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunPAIEASFullAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunPAIEASFullAccess policy: **Provides full access to Platform for AI(PAI) Elastic Algorithm Service(EAS) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 02:35:24 on June 05, 2020
    
-   Update time: 03:21:59 on January 23, 2026
    
-   Current version: v4
    

## **Policy content**

```
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "eas:*",
      "Resource": "*"
    },
    {
        "Effect": "Allow",
        "Action": [
            "cdt:GetCdtInternetServiceStatus",
            "cdt:OpenCdtInternetService"
        ],
        "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "oss:ListBuckets",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "bssapi:DescribePricingModule",
        "bss:DescribeProduct"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "bssapi:GetPayAsYouGoPrice",
        "bss:DescribePrice"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "bssapi:ProductCode": [
            "learn"
          ],
          "bssapi:ProductType": [
            "learn_EasPayAsYouGo_public_intl",
            "learn_EasPayAsYouGo_public_cn"
          ]
        }
      }
    },
    {
      "Effect": "Allow",
      "Action": [
        "log:ListProject",
        "log:ListLogStores"
      ],
      "Resource": "*"
    },
    {
      "Action": [
        "log:Get*",
        "log:List*",
        "log:Query*"
      ],
      "Resource": "acs:log:*:*:project/*/logstore/pai_gw_access_log",
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Action": [
        "vpc:DescribeVpcs",
        "vpc:DescribeVSwitches",
        "ecs:DescribeSecurityGroups"
      ],
      "Resource": "*"
    },
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "eas.pai.aliyuncs.com"
        }
      }
    }
  ],
  "Version": "1"
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
