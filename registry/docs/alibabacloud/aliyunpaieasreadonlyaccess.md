AliyunPAIEASReadOnlyAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunPAIEASReadOnlyAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunPAIEASReadOnlyAccess policy: **Provides read-only access to Platform for AI(PAI) Elastic Algorithm Service(EAS) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 10:33:25 on November 17, 2021
    
-   Update time: 03:02:57 on January 23, 2026
    
-   Current version: v3
    

## **Policy content**

```
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "eas:Describe*",
        "eas:List*"
      ],
      "Resource": "*"
    },
    {
        "Effect": "Allow",
        "Action": [
            "cdt:GetCdtInternetServiceStatus"
        ],
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
