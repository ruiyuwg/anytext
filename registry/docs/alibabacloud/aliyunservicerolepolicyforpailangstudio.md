AliyunServiceRolePolicyForPaiLangStudio is the authorization policy dedicated to a service-linked role. The policy is automatically attached to a service role when the service role is created. Then, the service-linked role is authorized to access other cloud services. This policy is updated by the relevant Alibaba Cloud service. Do not attach this policy to a RAM identity other than a service-linked role.

## **Policy details**

-   Type: service system policy
    
-   Creation time: 09:53:13 on November 28, 2023
    
-   Update time: 09:53:13 on November 28, 2023
    
-   Current version: v1
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "eas:CreateService",
        "eas:ListServices",
        "eas:DescribeService",
        "eas:DeleteService",
        "eas:UpdateService",
        "eas:StartService",
        "eas:StopService"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "oss:GetObject",
        "oss:PutObject",
        "oss:DeleteObject",
        "oss:ListParts",
        "oss:AbortMultipartUpload",
        "oss:ListObjects",
        "oss:ListBuckets",
        "oss:PutBucketCors",
        "oss:GetBucketCors",
        "oss:DeleteBucketCors"
      ],
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "oss:BucketTag/Product": "PaiLangStudio"
        }
      }
    },
    {
      "Action": [
        "paillmtrace:GetXtraceToken"
      ],
      "Resource": "*",
      "Effect": "Allow"
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "langstudio.pai.aliyuncs.com"
        }
      }
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
    
-   [Service-linked roles](/help/en/ram/user-guide/service-linked-roles)
