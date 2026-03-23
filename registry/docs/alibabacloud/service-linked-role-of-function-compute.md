Function Compute uses the service-linked role **AliyunServiceRoleForFC** to access other Alibaba Cloud services on your behalf. The system policy **AliyunServiceRolePolicyForFC** is attached to this role.

Function Compute 3.0 supports binding AliyunServiceRoleForFC to functions, granting each function only the permissions it needs based on the principle of least privilege.

## When this role is required

-   **VPC networking**: Configure VPCs, vSwitches, or elastic network interfaces (ENIs) to improve data security and enable network communication within VPCs.
    
-   **Container image deployment**: Access a Container Registry repository to pull images for creating image-based functions.
    
-   **Event-driven messaging**: Access message services such as ApsaraMQ, Simple Message Queue (formerly MNS), EventBridge, and Function Flow. Function Compute monitors events from these sources and triggers function execution when a new message or event arrives.
    
-   **Log management**: Configure Simple Log Service permissions to automatically collect function execution logs. This supports log search, analysis, and visualization for faster troubleshooting.
    

## Policy content

The AliyunServiceRolePolicyForFC policy grants permissions to access specific Alibaba Cloud services, including Virtual Private Cloud (VPC), Elastic Compute Service, Simple Log Service, and Container Registry. These permissions enable features such as connecting functions to VPCs, downloading container images, reclaiming resources, and exporting logs.

```
{
    "Version": "1",
    "Statement": [
        {
            "Action": [
                "vpc:DescribeVSwitchAttributes",
                "vpc:DescribeVpcAttribute"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "ecs:CreateNetworkInterface",
                "ecs:DeleteNetworkInterface",
                "ecs:DescribeNetworkInterfaces",
                "ecs:CreateNetworkInterfacePermission",
                "ecs:DeleteNetworkInterfacePermission",
                "ecs:DescribeNetworkInterfacePermissions"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "cr:PullRepository",
                "cr:GetArtifactTag",
                "cr:GetAuthorizationToken",
                "cr:GetRepository",
                "cr:GetRepositoryTag",
                "cr:GetRepoTagManifest",
                "cr:GetRepositoryManifest",
                "cr:GetInstanceVpcEndpoint",
                "cr:GetInstance",
                "cr:GetNamespace",
                "cr:GetArtifactBuildRule",
                "cr:CreateArtifactBuildTask"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "fc:InvokeFunction",
                "eventbridge:PutEvents",
                "mq:PUB",
                "mq:OnsInstanceBaseInfo",
                "mns:SendMessage",
                "mns:PublishMessage",
                "fnf:ReportTaskSucceeded",
                "fnf:ReportTaskFailed"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "log:CreateProject",
                "log:CreateLogStore",
                "log:GetProject",
                "log:GetLogStore",
                "log:DeleteProject",
                "log:DeleteLogStore",
                "log:GetLogStoreLogs"
            ],
            "Resource": [
                "acs:log:*:*:project/aliyun-fc-*",
                "acs:log:*:*:project/*/logstore/function-log*"
            ],
            "Effect": "Allow"
        },
        {
            "Action": [
                "log:PostLogStoreLogs"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Action": [
                "ram:GetRole"
            ],
            "Resource": "*",
            "Effect": "Allow"
        },
        {
            "Effect": "Allow",
            "Action": "ram:DeleteServiceLinkedRole",
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "ram:ServiceName": "fc.aliyuncs.com"
                }
            }
        }
    ]
}
```

## Create the service-linked role

When you log on to the [Function Compute 3.0 console](https://fc.console.alibabacloud.com/overview), the system checks whether AliyunServiceRoleForFC already exists. If not, a prompt asks whether to create the role. After you confirm, the system automatically creates AliyunServiceRoleForFC and attaches the AliyunServiceRolePolicyForFC policy.

After creation, verify the role through any of these methods:

-   View the role on the Roles page in the RAM console.
    
-   Call the [ListRoles](/help/en/ram/developer-reference/api-ram-2015-05-01-listroles) API operation.
    
-   Log on to the [Function Compute 3.0 console](https://fc.console.alibabacloud.com/overview) again. A successful logon confirms the role exists.
    

## Delete the service-linked role

**Warning**

After you delete AliyunServiceRoleForFC, the [Function Compute 3.0 console](https://fc.console.alibabacloud.com/overview) cannot function as expected. Exercise caution.

To delete the service-linked role in the RAM console:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, find the RAM role that you want to delete and click **Delete Role** in the **Actions** column.
    
4.  In the **Delete Role** dialog box, enter the name of the role and click **Delete Role**.
    
    When you delete a service-linked role, RAM checks whether any cloud resources are using the role. If one or more resources depend on the role, deletion fails. Check the displayed message to identify the resources, remove them, and then retry deletion.
    

## RAM user permissions for managing the service-linked role

To create or delete the service-linked role as a RAM user, grant the RAM user the `ram:CreateServiceLinkedRole` and `ram:DeleteServiceLinkedRole` permissions from your Alibaba Cloud account. Alternatively, attach the AliyunRAMFullAccess policy to the RAM user.

The following JSON shows a sample custom policy that allows a RAM user to create and delete the service-linked role for Function Compute:

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ram:CreateServiceLinkedRole",
                "ram:DeleteServiceLinkedRole"
            ],
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "ram:ServiceName": "fc.aliyuncs.com"
                }
            }
        }
    ]
}
```
