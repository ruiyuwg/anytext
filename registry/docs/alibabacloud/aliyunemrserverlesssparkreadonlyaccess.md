AliyunEmrServerlessSparkReadOnlyAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunEmrServerlessSparkReadOnlyAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunEmrServerlessSparkReadOnlyAccess policy: **Provides read only access to EMR Serverless Spark via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 17:59:38 on November 20, 2023
    
-   Update time: 17:59:38 on November 20, 2023
    
-   Current version: v1
    

## **Policy content**

```
{
    "Statement": [
        {
            "Action": [
                "emr-serverless-spark:Get*",
                "emr-serverless-spark:List*",
                "emr-serverless-spark:Query*",
                "emr-serverless-spark:Is*",
                "emr-serverless-spark:Check*"
                ],
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
