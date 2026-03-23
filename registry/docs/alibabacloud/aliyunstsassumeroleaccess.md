AliyunSTSAssumeRoleAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunSTSAssumeRoleAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunSTSAssumeRoleAccess policy: **Provides access to the API AssumeRole of Security Token Service(STS).**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 04:52:09 on August 03, 2015
    
-   Update time: 16:48:07 on April 27, 2017
    
-   Current version: v1
    

## **Policy content**

```
{
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Effect": "Allow",
      "Resource": "*"
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
