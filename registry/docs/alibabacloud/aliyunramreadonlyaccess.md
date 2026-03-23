AliyunRAMReadOnlyAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunRAMReadOnlyAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunRAMReadOnlyAccess policy: **Provides read-only access to Resource Access Management(RAM) via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 16:15:45 on April 28, 2015
    
-   Update time: 10:03:48 on December 03, 2025
    
-   Current version: v3
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "ram:Get*",
        "ram:List*",
        "ram:GenerateCredentialReport"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Effect": "Allow",
      "Action": [
        "accessanalyzer:Get*",
        "accessanalyzer:List*"
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
