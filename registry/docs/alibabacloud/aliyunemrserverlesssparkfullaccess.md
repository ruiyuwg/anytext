AliyunEMRServerlessSparkFullAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunEMRServerlessSparkFullAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunEMRServerlessSparkFullAccess policy: **Provides full access to EMR Serverless Spark via Management Console.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 11:59:59 on November 21, 2023
    
-   Update time: 11:59:59 on November 21, 2023
    
-   Current version: v1
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "emr-serverless-spark:*",
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "oss:ListBuckets",
        "dlf:DescribeRegions",
        "dlf:GetRegionStatus",
        "dlf:ListCatalogs",
        "dlf:ListDatabases",
        "dlf:ListTables",
        "emr:GetApmData",
        "emr:QueryApmGrafanaData",
        "bss:ModifyAgreementRecord"
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
          "ram:ServiceName": "spark.emr-serverless.aliyuncs.com"
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
