Auto Scaling allows you to manage scaling groups by type and control access to scaling groups. You can grant permissions on a specific scaling group to Resource Access Management (RAM) users for fine-grained access control. You can also grant permissions on scaling groups based on tags. This topic describes how to control the access from RAM users to scaling groups by tag-based authentication. This allows different RAM users to obtain different permissions based on business requirements, which improves resource management efficiency and reduces the risks of information leakage.

## Background information

-   A tag is an identifier of a cloud resource. Tags allow you to categorize, search for, and aggregate cloud resources that have the same characteristics from different dimensions. For information about tags, see [Overview](/help/en/ecs/user-guide/label-overview#concept-jzp-qtd-zdb).
    
-   RAM allows you to manage user identities and cloud resource access and operation permissions based on policies. For more information, see [What is RAM?](/help/en/ram/product-overview/what-is-ram)
    

You can use tags as conditions in RAM policies to perform fine-grained access control on Auto Scaling resources.

The following figure shows how to use tags to manage resource access and operation permissions of RAM users, which is called tag-based authentication.![Logic of tag-based authentication](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8519306561/p438474.png)

## API operations that do not support tag-based authentication

If you attach tag-based policies to a RAM user, tag-based authentication is not supported when the RAM user calls the following API operations.

**Operation**

**Unsupported for tag-based authentication**

DescribeRegions

Yes

Operations that are related to scheduled tasks:

-   CreateScheduledTask
    
-   ModifyScheduledTask
    
-   DescribeScheduledTasks
    
-   DeleteScheduledTask
    

Yes

Operations that are related to event-triggered tasks:

-   CreateAlarm
    
-   DescribeAlarms
    
-   ModifyAlarm
    
-   EnableAlarm
    
-   DeleteAlarm
    

Yes

## Sample scenarios

The following scenarios are used to describe how to perform tag-based authentication.

For example, you have two scaling groups for game development, and the tags that are added to each scaling group contain the environment and team keys. You want to control access from a RAM user to the scaling groups.

**Scaling group**

**Name**

**Tag**

Scaling Group 1

asg-001

-   Tag 1 is **environment:test**, in which **environment** is the tag key and **test** is the tag value.
    
-   Tag 2 is **team:game1**, in which **team** is the tag key and **game1** is the tag value.
    

Scaling Group 2

asg-002

-   Tag 1 is **environment:dev**, in which **environment** is the tag key and **dev** is the tag value.
    
-   Tag 2 is **team:game2**, in which **team** is the tag key and **game2** is the tag value.
    

Scenario details:

-   **Scenario 1**: The RAM user cannot create scaling groups that have no tags. If the RAM user wants to create Scaling Group 1, `environment:test` and `team:game1` tags must be added during the creation. Otherwise, Scaling Group 1 fails to be created.
    
-   **Scenario 2**: The RAM user can query only resources in Scaling Group 1 that has tag `environment:test` and tag `team:game1`.
    
-   **Scenario 3**: The RAM user can operate only resources in Scaling Group 1 that has tag `environment:test` and tag `team:game1`. The RAM user cannot operate resources in Scaling Group 2 that has tag `environment:dev` and tag `team:game2`.
    

## Procedure

**Note**

Before you perform the following steps, make sure that a RAM user is created. For information about how to create a RAM user, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).

1.  Create two scaling groups.
    
    For more information, see [Manage scaling groups](/help/en/auto-scaling/user-guide/manage-scaling-groups#concept-25882-zh). Refer to [Sample scenarios](#section-od9-9p6-p0h) to create the scaling groups.
    
2.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
3.  Create custom policies.
    
    For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy-1#task-glf-vwf-xdb).
    
    You can define multiple tags in the `Condition` element of a custom policy. This helps limit access to Auto Scaling resources. The following table describes the tag-based conditions that you can specify in the Condition element.
    
    **Tag-based condition**
    
    **Description**
    
    `acs:RequestTag`
    
    API callers must include a specific tag in each API request.
    
    If an API request does not include tag-related parameters, the `acs:RequestTag` condition cannot be used. Otherwise, authentication fails.
    
    `acs:ResourceTag`
    
    API callers must add a specific tag to the specified resources.
    
    If an API request does not include a resource ID, the `acs:ResourceTag` condition cannot be used. Otherwise, authentication fails.
    
    **Sample custom policy:**
    
    ```
    {
        "Version": "1",
        "Statement": [
             {
               "Effect": "Allow",
               "Action": "ess:Create*",
               "Resource": "*",
               "Condition": {
                       "StringEquals": {
                            "acs:RequestTag/environment": "test",
                            "acs:RequestTag/team": "game1"
                       }
                  }
             },
             {
                "Effect": "Allow",
                "Action": "ess:Describle*",
                "Resource": "*",
                "Condition": {
                        "StringEquals": {
                        "acs:RequestTag/environment": "test",
                        "acs:RequestTag/team": "game1"
                        }
                  }
             },
             {
                "Action": "ess:*",
                "Effect": "Allow",
                "Resource": "*",
                "Condition": {
                    "StringEquals": {
                        "acs:ResourceTag/environment": "test",
                        "acs:ResourceTag/Team": "game1"
                      }
                  }
             },
             {
                "Effect": "Allow",
                "Action": [
                       "ess:Describe*",
                       "ess:List*",
                       "ess:DescribeRegions",
                       "ess:CreateScheduledTask",
                       "ess:ModifyScheduledTask",
                       "ess:DescribeScheduledTasks",
                       "ess:DeleteScheduledTask",
                       "ess:CreateAlarm",
                       "ess:DescribeAlarms",
                       "ess:ModifyAlarm",
                       "ess:EnableAlarm",
                       "ess:DeleteAlarm"
                    ],
        "Resource": "*"
          }
       ]
    }
    ```
    
    -   **Scenario 1: The RAM user cannot create a scaling group that has no tags**
        
        Scaling Group 1 can be created only after the RAM user adds tag `environment:test` and tag `team:game1` to Scaling Group 1 during the creation.
        
        Sample custom policy:
        
        ```
        {
            "Effect": "Allow",
            "Action": "ess:Create*",
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "acs:RequestTag/environment": "test",
                    "acs:RequestTag/team": "game1"
                }
            }
        }
        ```
        
    -   **Scenario 2: The RAM user can query only Scaling Group 1 that has tags**
        
        After tag `environment:test` and tag `team:game1` are added to Scaling Group 1, resources in Scaling Group 1 can be queried.
        
        Sample custom policy:
        
        ```
        {
            "Effect": "Allow",
            "Action": "ess:Describle*",
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "acs:RequestTag/environment": "test",
                    "acs:RequestTag/team": "game1"
                }
            }
        }
        ```
        
    -   **Scenario 3: The RAM user can operate only resources in Scaling Group 1**
        
        The RAM user can operate resources in Scaling Group 1 that has tag `environment:test` and tag `team:game1`. The RAM user cannot operate resources in Scaling Group 2 that has tag `environment:dev` and tag `team:game2`.
        
        Sample custom policy:
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Action": "ess:*",
                    "Effect": "Allow",
                    "Resource": "*",
                    "Condition": {
                        "StringEquals": {
                            "acs:ResourceTag/environment": "test",
                            "acs:ResourceTag/Team": "game1"
                        }
                    }
                },
                {
                    "Action": "ess:*",
                    "Effect": "Deny",
                    "Resource": "*",
                    "Condition": {
                        "StringEquals": {
                            "acs:ResourceTag/environment": "dev",
                            "acs:ResourceTag/team": "game2"
                        }
                    }
                },      
                {
                   "Effect": "Allow",
                   "Action": [
                           "ess:DescribeRegions",
                           "ess:CreateScheduledTask",
                           "ess:ModifyScheduledTask",
                           "ess:DescribeScheduledTasks",
                           "ess:DeleteScheduledTask",
                           "ess:CreateAlarm",
                           "ess:DescribeAlarms",
                           "ess:ModifyAlarm",
                           "ess:EnableAlarm",
                           "ess:DeleteAlarm"
                        ],
            "Resource": "*"
              }
           ]
        }
        ```
        
4.  Attach the preceding custom policies to the RAM user whose access you want to control.
    
    For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    
5.  Check whether the custom policies are in effect.
    
    -   **Create Scaling Group 1 as an authorized RAM user**
        
        -   If you add tag `environment:test` and tag `team:game1` to Scaling Group 1 when you create the scaling group, Scaling Group 1 can be created.
            
        -   If you do not add the preceding tags to Scaling Group 1 or you add other tags to Scaling Group 1 during the creation, Scaling Group 1 cannot be created. A message that indicates you do not have the required permissions appears, as shown in the following figure. ![资源级别鉴权执行结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7216345561/p437275.png)
            
    -   **Query scaling groups as an authorized RAM user**
        
        -   You can query Scaling Group 1 that has tag `environment:test` and tag `team:game1` even if you do not specify tags as filter conditions.
            
        -   If you query a scaling group that does not have tag `environment:test` and tag `team:game1`, null is returned.
            
        -   If you do not specify the scaling group that you want to query and search for only tag `environment:test` and `team:game1`, all the scaling groups that have the tags are returned.
            
    -   **Delete scaling groups as an authorized RAM user**
        
        -   Scaling Group 1 has tag `environment:test` and tag `team:game1`. You can delete Scaling Group 1.
            
        -   Scaling Group 2 does not have tag `environment:test` and tag `team:game1` or has other tags. When you delete Scaling Group 2, a message that indicates you do not have the required permissions appears, as shown in the following figure. ![资源级别鉴权执行结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7216345561/p437275.png)
            
    

## References

-   For information about how to create a scaling group by calling an API operation, see [CreateScalingGroup](/help/en/auto-scaling/developer-reference/api-createscalinggroup#doc-api-Ess-CreateScalingGroup). For information about how to query a scaling group by calling an API operation, see [DescribeScalingGroups](/help/en/auto-scaling/developer-reference/api-describescalinggroups#doc-api-Ess-DescribeScalingGroups). For information about how to delete a scaling group by calling an API operation, see [DeleteScalingGroup](/help/en/auto-scaling/developer-reference/api-deletescalinggroup#doc-api-Ess-DeleteScalingGroup).
    
-   For information about how to create a custom policy, see [CreatePolicy](/help/en/ram/developer-reference/api-ram-2015-05-01-createpolicy).
    
-   For information about how to grant permissions to RAM users, see [AttachPolicyToUser](/help/en/ram/developer-reference/api-ram-2015-05-01-attachpolicytouser).
    
-   For information about how to manage scaling groups by resource group, see [Use resource groups to manage scaling groups in a fine-grained manner](/help/en/auto-scaling/use-cases/fine-grained-management-of-scaling-groups-through-resource-groups).
    
-   For information about how to manage Auto Scaling resources by resource authentication, see [Manage Auto Scaling resources by resource authentication](/help/en/auto-scaling/use-cases/resource-level-authentication).
