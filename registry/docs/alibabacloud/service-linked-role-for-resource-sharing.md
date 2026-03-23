This topic describes the use scenarios, policies, and creation of the service-linked role AliyunServiceRoleForResourceSharing for the Resource Sharing service.

## Scenarios

The Resource Sharing service uses the AliyunServiceRoleForResourceSharing role to obtain the organizational structure of a resource directory and implement resource sharing within the resource directory based on the organizational structure.

For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621 "A trusted Alibaba Cloud service can assume a Resource Access Management (RAM) role to access other Alibaba Cloud services. RAM roles that a trusted Alibaba Cloud service can assume are classified into two types: normal service role and service-linked role. This topic describes service-linked roles.").

## Role description

Role name: AliyunServiceRoleForResourceSharing.

Policy: AliyunServiceRolePolicyForResourceSharing.

Permissions: This role allows Resource Sharing to access the organizational structure of your resource directory.

```
 {
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "resourcemanager:GetResourceDirectory",
                "resourcemanager:GetFolder",
                "resourcemanager:ListFoldersForParent",
                "resourcemanager:ListAccountsForParent",
                "resourcemanager:ListAccounts"
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
                    "ram:ServiceName": "resourcesharing.aliyuncs.com"
                }
            }
        }
    ]
}
```

## Create the service-linked role for Resource Sharing

When you enable resource sharing, the system creates the service-linked role AliyunServiceRoleForResourceSharing. For more information, see [Enable resource sharing](/help/en/resource-management/resource-sharing/user-guide/enable-resource-sharing#task-2139126 "You can share your resources with all members in your resource directory, all members in a specific folder in your resource directory, or a specific member in your resource directory only after you enable resource sharing.").
