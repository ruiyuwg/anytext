AliyunDatasetAccReadOnlyAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunDatasetAccReadOnlyAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunDatasetAccReadOnlyAccess policy: **Read-only access to the Dataset Acceleration Service (DatasetAcc).**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 12:40:05 on September 27, 2022
    
-   Update time: 12:40:05 on September 27, 2022
    
-   Current version: v1
    

## **Policy content**

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "datasetacc:List*",
                "datasetacc:Describe*",
                "datasetacc:Get*",
                "datasetacc:Query*"
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
