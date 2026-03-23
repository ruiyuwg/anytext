AliyunNLBReadOnlyAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunNLBReadOnlyAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunNLBReadOnlyAccess policy: **Provides read-only access to Network Load Balancer(NLB) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 13:07:58 on July 05, 2022
    
-   Update time: 07:48:55 on September 28, 2022
    
-   Current version: v1
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "nlb:Describe*",
        "nlb:List*",
        "nlb:Get*"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": "cms:QueryMetricList",
      "Resource": "*",
      "Effect": "Allow"
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
