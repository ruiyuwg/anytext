This topic describes the use scenarios and permissions of the service-linked role AliyunServiceRoleForPAIWorkspace and how to create and delete the role.

## Scenarios

Service-linked role AliyunServiceRoleForPAIWorkspace is used to grant permissions on EventBridge.

If you create a notification rule for a workspace of Machine Learning Platform for AI (PAI), PAI creates an event rule for a specified event bus in EventBridge. As such, you must first attach a service-linked role to PAI. This grants PAI the permissions to create event buses and event rules in EventBridge. For more information about workspace notifications, see [Create a notification rule](/help/en/pai/create-a-notification-rule#task-2253131). For more information about service-linked roles, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Overview

Role: AliyunServiceRoleForPAIWorkspace

Policy: AliyunServiceRolePolicyForPAIWorkspace

PAI can assume this role to access your EventBridge resources. The following section describes permission details:

```
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "eventbridge:PutEvents",
      "Resource": "*"
    },
    {
      "Action": "ram:DeleteServiceLinkedRole",
      "Resource": "*",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ram:ServiceName": "aiworkspace.pai.aliyuncs.com"
        }
      }
    }
  ],
  "Version": "1"
}
```

## Create the AliyunServiceRoleForPAIWorkspace role

The first time you create a notification rule for a workspace, the system automatically creates the AliyunServiceRoleForPAIWorkspace role.

## Delete the AliyunServiceRoleForPAIWorkspace role

Before you delete the AliyunServiceRoleForPAIWorkspace role, make sure that you no longer need to create or manage notification rules in PAI workspaces.

You can delete the AliyunServiceRoleForPAIWorkspace role in the Resource Access Management (RAM) console. For more information, see [Delete a RAM role](/help/en/ram/user-guide/delete-a-ram-role#task-188137).
