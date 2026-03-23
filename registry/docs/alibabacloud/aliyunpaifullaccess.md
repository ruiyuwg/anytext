AliyunPAIFullAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunPAIFullAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunPAIFullAccess policy: **Provides full access to Platform of AI (PAI) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 04:16:51 on March 24, 2023
    
-   Update time: 03:15:41 on July 01, 2025
    
-   Current version: v6
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "pai:*",
        "paiplugin:*",
        "eas:*",
        "paiflow:*",
        "paidesigner:*",
        "paidlc:*",
        "paidsw:*",
        "paiimage:*",
        "paicodesource:*",
        "paidataset:*",
        "paitrainingservice:*",
        "paimodel:*",
        "paicomponentmanagement:*",
        "paiautoml:*",
        "paillmtrace:*",
        "pailangstudio:*",
        "paiartlab:*",
        "paiexperiment:*",
        "paiworkspace:*",
        "paiitag:*",
        "featurestore:*",
        "paiabtest:*",
        "pairec:*"
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
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
