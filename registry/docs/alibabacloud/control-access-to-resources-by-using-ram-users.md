Alibaba Cloud Resource Access Management (RAM) provides powerful, fine-grained permission management features. This is ideal for scenarios where multiple departments or roles in an enterprise need to access Elastic Compute Service (ECS) resources. To protect sensitive information and critical business processes, you can assign different access permissions based on the specific responsibilities of each department or role. Implementing a permission separation policy improves management efficiency and reduces the risk of information leaks. This topic describes how to control access to ECS resources by managing the permissions of RAM users.

## **Scenario description**

Suppose your company uses ECS to host applications and services. Managers lead the IT architecture planning and have full control over all ECS resources. Their key responsibilities include creating resources, adjusting resource allocation, and configuring security policies. Developers are responsible for continuous project iteration and feature innovation. They also deploy projects to ECS instances. Operations and Maintenance (O&M) engineers are responsible for ensuring normal system operations. They maintain existing services by creating snapshots, creating images, and running scripts.

Based on the needs of these three roles, the following permission plan is designed:

-   Managers: Have full permissions for ECS operations, such as creating and deleting ECS instances and modifying security group rules.
    
-   Developers: Can view information about all ECS instances but cannot modify any settings. They can also log on to ECS instances to perform operations.
    
-   O&M engineers: Have permission to create certain resources, such as snapshots and images, and run scripts. They do not have permission to delete resources.
    

## **Procedure**

### **1\. Create RAM users**

Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/) using your Alibaba Cloud account. Create three RAM users: Manager, Developer, and Operator. This lets you assign appropriate permissions to different personnel. When you create the RAM users, select Console Logon. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).

### **2\. Create access policies**

Create three custom policies to implement more fine-grained access control and management. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb).

## Manager\_Policy

This policy is for managers (Manager). It grants full permissions for ECS operations.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": "ecs:*",
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "vpc:CheckCanAllocateVpcPrivateIpAddress",
                "vpc:DescribeVpcs",
                "vpc:DescribeVSwitches",
                "bss:ModifyAgreementRecord"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]
}
```

## Developer\_Policy

This policy is for developers (Developer). It grants permission to view certain resources but not to create or modify them. It also allows remote connections to ECS instances through Workbench.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:List*",
                "ecs:Describe*",
                "vpc:DescribeVpcs",
                "vpc:DescribeVSwitches",
                "ecs-workbench:LoginInstance"
            ],
            "Resource": "*"
        }
    ]
}
```

## Operator\_Policy

This policy is for O&M engineers (Operator). It grants permission to view certain resources and to create images, create snapshots, and run commands.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "ecs:Describe*",
                "ecs:AttachDisk",
                "ecs:CreateSnapshot",
                "ecs:CreateImage",
                "ecs:RunCommand",
                "vpc:DescribeVpcs",
                "vpc:DescribeVSwitches"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```

### **3\. Grant permissions to RAM users**

Assign different custom policies to the RAM users to precisely control their access to and operations on specific resources. If a RAM user performs an abnormal operation, you can also revoke the authorization or narrow the permission scope to respond to and handle the threat. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

**RAM user**

**Access policy to grant**

Manager

Manager\_Policy

Developer

Developer\_Policy

Operator

Operator\_Policy

### **4\. Test the access control**

1.  Go to the [RAM user logon page](https://signin.aliyun.com). Log on as each of the three RAM users that you created.
    
2.  Go to the [ECS console](https://ecs.console.alibabacloud.com). Perform operations, such as viewing the ECS instance list, creating an ECS instance, and creating an image, to verify that the access control is effective.
    
    ## Manager
    
    -   Can view the ECS instance list.
        
    -   Can create ECS instances.
        
    -   Can delete ECS instances.
        
    -   Can create images.
        
    
    ## Developer
    
    -   Can view the ECS instance list.
        
    -   Does not have permission to create ECS instances.
        
    -   Does not have permission to create images.
        
    -   Can use Workbench to remotely connect to and log on to an ECS instance. After logging on, the developer can use commands to deploy projects to the instance.
        
    
    ## Operator
    
    -   Can view the ECS instance list.
        
    -   Does not have permission to create ECS instances.
        
    -   Can create images.
        
    

## References

-   RAM is an Alibaba Cloud service that lets you manage user identities and resource access permissions. For more information, see [What is RAM?](/help/en/ram/product-overview/what-is-ram)
    
-   You can view the multi-factor authentication (MFA) methods, instructions, and limits for RAM users. For more information, see [MFA for RAM users](/help/en/ram/user-guide/what-is-multi-factor-authentication).
    
-   ECS provides several custom policies. For more information, see [Custom policies](/help/en/ecs/user-guide/custom-policies-for-ecs).
    
-   You can use Workbench to log on to an ECS instance. For more information, see [Connect to an instance by using Workbench](/help/en/ecs/user-guide/workbench-overview/).
