AliyunServiceRolePolicyForPAIABTest is the authorization policy dedicated to a service-linked role. The policy is automatically attached to a service role when the service role is created. Then, the service-linked role is authorized to access other cloud services. This policy is updated by the relevant Alibaba Cloud service. Do not attach this policy to a RAM identity other than a service-linked role.

## **Policy details**

-   Type: service system policy
    
-   Creation time: 08:34:14 on March 13, 2024
    
-   Update time: 08:34:14 on March 13, 2024
    
-   Current version: v1
    

## **Policy content**

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": "ram:DeleteServiceLinkedRole",
            "Resource": "*",
            "Effect": "Allow",
            "Condition": {
                "StringEquals": {
                    "ram:ServiceName": "abtest.pai.aliyuncs.com"
                }
            }
        },

        {
            "Effect": "Allow",
            "Action": [
                "odps:ActOnBehalfOfAnotherUser",
                "odps:ListProjects",
                "odps:ListTables"
            ],
            "Resource": "acs:odps:*:*:users/*"
        }
    
    ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Service-linked roles](/help/en/ram/user-guide/service-linked-roles)
