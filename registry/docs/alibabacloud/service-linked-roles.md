This topic describes the AliyunServiceRoleForNis service-linked role for Network Intelligence Service (NIS) and how to delete the service-linked role.

## Background information

A service-linked role is a Resource Access Management (RAM) role that can be assumed by the linked service. An Alibaba Cloud service may need to access other services to use a specific feature. Before you access a service, make sure that you are authorized to access the service. Service-linked roles simplify the authorization process and prevent user errors. For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

NIS must acquire specific permissions before NIS can access Elastic Compute Service (ECS) resources, such as the permissions to obtain a list of commands that are supported by Cloud Assistant and the permissions to use Cloud Assistant to run commands and obtain the execution results. Therefore, you must create the service-linked role AliyunServiceRoleForNis for NIS to acquire the required permissions.

## Create the service-linked role

When you use NIS, if the service-linked role AliyunServiceRoleForNis does not exist, the system automatically creates the service-linked role and attaches the policy AliyunServiceRolePolicyForNis to the service-linked role. This allows NIS to access ECS resources. The following code block shows the content of the policy:

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "ecs:InvokeCommand",
        "ecs:StopInvocation",
        "ecs:DescribeCloudAssistantStatus",
        "ecs:DescribeCommands",
        "ecs:DescribeInvocations",
        "ecs:DescribeInvocationResults"
      ],
      "Resource": [
          "acs:ecs:*:*:instance/*",
          "acs:ecs:*:*:command/cmd-ACS-SLB-Diagnosis*"
      ],
      "Effect": "Allow"
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "nis.aliyuncs.com"
        }
      }
    }
  ]
}
```

## Delete the service-linked role

To delete the service-linked role AliyunServiceRoleForNis, perform the following steps:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, find the service-linked role AliyunServiceRoleForNis. Then, click **Delete Role** in the **Actions** column.
    
4.  In the dialog box that appears, enter the role name and click **Delete Role**.
    

**Important**

After you delete the service-linked role AliyunServiceRoleForNis, the system automatically recreates the role when you use the diagnostics feature that is provided by NIS.

## FAQ

Why cannot the system automatically create the service-linked role AliyunServiceRoleForNis when I use a RAM user?

The system can automatically create and delete the service-linked role AliyunServiceRoleForNis only if the RAM user is granted the required permissions. If the system does not automatically create the service-linked role AliyunServiceRoleForNis, you must attach the following policy to the RAM user. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-2149286).

```
{
  "Statement": [
    {
      "Action":"ram:CreateServiceLinkedRole",
                  "Resource":"*",
                  "Effect":"Allow",
                  "Condition":{
                     "StringEquals":{
                        "ram:ServiceName":"nis.aliyuncs.com"
        }
      }
    }
  ],
  "Version": "1"
}
```
