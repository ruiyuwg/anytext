A service-linked role is a Resource Access Management (RAM) role whose trusted entity is an Alibaba Cloud service and is used to authorize access across Alibaba Cloud services. AliyunServiceRoleForEBS is a service-linked role provided by RAM for Elastic Block Storage (EBS). EBS can assume the role to obtain access to Elastic Compute Service (ECS) resources. This topic describes the AliyunServiceRoleForEBS service-linked role and how to manually delete the role.

For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Create AliyunServiceRoleForEBS

The first time you log on to the EBS console, you must create the AliyunServiceRoleForEBS service-linked role as prompted by the console. The following items describe the details of AliyunServiceRoleForEBS:

-   Role name: AliyunServiceRoleForEBS
    
-   Role policy: AliyunServiceRolePolicyForEBS
    
-   Policy content:
    
    ```
    {
        "Version": "1", 
        "Statement": [
            {
                "Action": "ecs:DescribeDisks", 
                "Resource": "*", 
                "Effect": "Allow"
            }
        ]
    }
    ```
    

## Delete AliyunServiceRoleForEBS

If your Alibaba Cloud account no longer requires the AliyunServiceRoleForEBS service-linked role, you can manually delete the role. For more information, see the "[Delete a service-linked role](/help/en/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)" section of the Service-linked roles topic.

**Note**

Before you delete an instance, make sure that your Alibaba Cloud account does not have dedicated block storage clusters, CloudLens for EBS, or replication pairs. Otherwise, AliyunServiceRoleForEBS cannot be deleted.
