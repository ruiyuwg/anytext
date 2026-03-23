AliyunNLBFullAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunNLBFullAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunNLBFullAccess policy: **Provides full access to Network Load Balancer(NLB) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 13:08:15 on July 05, 2022
    
-   Update time: 13:08:15 on July 05, 2022
    
-   Current version: v1
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "nlb:*",
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "ecs:DescribeInstances",
        "ecs:DescribeNetworkInterfaces",
        "eci:DescribeContainerGroups",
        "cms:QueryMetricList",
        "vpc:DescribeVpcs",
        "vpc:DescribeVSwitches"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": "ram:CreateServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": [
            "nlb.aliyuncs.com"
          ]
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
