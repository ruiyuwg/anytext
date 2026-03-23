AliyunPAIReadOnlyAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunPAIReadOnlyAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunPAIReadOnlyAccess policy: **Provides read-only access to Platform of AI (PAI) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 04:39:59 on March 24, 2023
    
-   Update time: 09:43:14 on December 11, 2024
    
-   Current version: v5
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "paiplugin:List*",
        "paiplugin:Get*",
        "eas:Describe*",
        "eas:List*",
        "pai:List*",
        "pai:Get*",
        "paiitag:*Get*",
        "paiitag:List*",
        "paiitag:*PageView*",
        "paiitag:Query*",
        "paiitag:*Stat",
        "featurestore:Get*",
        "featurestore:List*",
        "paiabtest:Get*",
        "paiabtest:List*",
        "pailangstudio:Get*",
        "pailangstudio:List*"
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
      "Effect": "Allow",
      "Action": [
        "vpc:DescribeVpcs",
        "vpc:DescribeVSwitches",
        "ecs:DescribeSecurityGroups"
      ],
      "Resource": "*"
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
