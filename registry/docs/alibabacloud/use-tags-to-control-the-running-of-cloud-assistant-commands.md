You can run Cloud Assistant commands only on Elastic Compute Service (ECS) instances with specific tags by using a RAM role or as a RAM user. If you run the commands on ECS instances to which specific tags are not added, the commands fail to run. This topic describes how to run Cloud Assistant commands on ECS instances with specific tags as a RAM user. This topic also provides examples of the custom policies that can be used and common issues and solutions to the issues.

## Procedure

1.  Create a RAM user by using an Alibaba Cloud account or a RAM user that has administrative permissions.
    
    For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Create custom policies by using the Alibaba Cloud account or the RAM user that has administrative permissions.
    
    This topic provides the following examples to show how to create custom policies:
    
    -   [Policy 1: Allow a RAM user to run commands on and transfer files to only ECS instances with specific tags](#section-cpd-hlp-9jw)
        
    -   [Policy 2: Allow a RAM user to query the tags that are added to ECS instances, query ECS instances, and manage Cloud Assistant commands](#section-3br-v1z-vdk)
        
    
    For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286).
    
3.  Attach the custom policies to the created RAM user by using the Alibaba Cloud account or the RAM user that has administrative permissions.
    
    For more information, see [Grant permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
4.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/#/cloudAssistant/region/cn-hangzhou/) as the created RAM user and go to the Cloud Assistant page to test whether the permissions defined in the custom policies are granted to the RAM user.
    
    -   If you run a command on ECS instances to which the `user:alice` tag is not added, the command fails to run.
        
    -   If you run a command on ECS instances to which the `user:alice` tag is added, the command is successfully run.
        
    
    For information about how to log on to the Alibaba Cloud Management Console as a RAM user, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user#task-2170094).
    

## Policy 1: Allow a RAM user to run commands on and transfer files to only ECS instances with specific tags

This policy allows a RAM user to run a Cloud Assistant command on and transfer files to only ECS instances to which the `user:alice` tag is added.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:InvokeCommand",
                "ecs:RunCommand",
                "ecs:StopInvocation",
                "ecs:SendFile"
            ],
            "Resource": "acs:ecs:*:*:instance/*",
            "Condition": {
                "StringEquals": {
                    "acs:ResourceTag/user": "alice"
                }
            }
        },
        {
            "Effect": "Allow",
            "Action": [
                "ecs:InvokeCommand",
                "ecs:RunCommand",
                "ecs:StopInvocation",
                "ecs:SendFile"
            ],
            "Resource": "acs:ecs:*:*:command/*"
        }
    ]
}
```

## Policy 2: Allow a RAM user to query the tags that are added to ECS instances, query ECS instances, and manage Cloud Assistant commands

This policy only allows a RAM user to query the tags that are added to ECS instances, query ECS instances, and manage Cloud Assistant commands.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:DescribeTag*",
                "ecs:DescribeInstance*",
                "ecs:DescribeCommands",
                "ecs:CreateCommand",
                "ecs:DeleteCommand",
                "ecs:ModifyCommand",
                "ecs:DescribeInvocationResults",
                "ecs:DescribeSendFileResults",
                "ecs:DescribeInstances",
                "ecs:DescribeCloudAssistantStatus",
                "ecs:DescribeInvocations",
                "ecs:DescribeResourceByTags",
                "ecs:DescribeTagKeys",
                "ecs:DescribeTags",
                "ecs:ListTagResources",
                "ecs:DescribeManagedInstances"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "oos:ListSecretParameters",
            "Resource": "*"
        }
    ]
}
```

## Common issues and solutions to the issues

If the custom policies do not take effect, you must check whether the Effect element for the following permissions is set to Allow:

`["ecs:InvokeCommand","ecs:RunCommand", "ecs:StopInvocation","ecs:SendFile"]`.

If the Effect element for these permissions is set to Allow, you must remove these permissions from the custom policies.

```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecs:InvokeCommand",
                "ecs:RunCommand",
                "ecs:StopInvocation",
                "ecs:SendFile"
            ],
            "Resource": "*"
        }
    ]
}
```
