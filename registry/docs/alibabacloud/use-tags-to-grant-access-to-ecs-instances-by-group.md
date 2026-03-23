This topic describes how to use tags to grant Resource Access Management (RAM) users access to Elastic Compute Service (ECS) instances by group. After authorization, RAM users can view and manage only the tagged resources.

## **Scenario**

In this example, you have 10 ECS instances within your Alibaba Cloud account. You want to authorize the developer team to manage 5 instances and the operator team to manage the other 5 instances. You also want each team to view only the instances that you authorize each team to manage.

## Solution

-   Add a tag to the ECS instances for each team.
    
    Add a tag to the ECS instances of the developer team and another tag to the ECS instances of the operator team.
    
-   Group RAM users.
    
    Create a RAM user group for the developer team and another for the operator team. Then, add RAM users to the RAM user groups based on your business requirements.
    
-   Use tags to grant permissions to the RAM user groups.
    
    Create two custom policies and specify tags in the Condition element of the custom policies. Tags support the following condition keys for authorization. Then, attach the created custom policies to the RAM user groups based on your business requirements. This way, RAM users in the RAM user groups inherit the permissions of the RAM user groups.
    
    -   `acs:RequestTag/<tag-key>`: the tag that is passed in a request. This condition key indicates that you must specify the tag in the request when you call an API operation.
        
    -   `acs:ResourceTag/<tag-key>`: the tag that is added to the requested resource. This condition key indicates that the tag must be added to the resource on which you perform an operation.
        

The following table describes the details.

**Team**

**RAM user group**

**RAM policy**

**Tag**

The developer team

developer

policyForDevTeam

Tag key: team. Tag value: dev.

The operator team

operator

policyForOpsTeam

Tag key: team. Tag value: ops.

## Procedure

You can use an Alibaba Cloud account or a RAM user that has the AliyunRAMFullAccess and AliyunECSFullAccess permissions to perform the following operations.

1.  In the [ECS console](https://ecs.console.alibabacloud.com), create tags and add the tags to the ECS instances.
    
    Add the `team:dev` tag to five ECS instances and the `team:ops` tag to the other five ECS instances. For more information, see [Create or add tags](/help/en/ecs/user-guide/label-overview#section-yoy-sme-w01).
    
2.  In the [RAM console](https://ram.console.alibabacloud.com/), create RAM user groups.
    
    Create two RAM user groups named developer and operator for the developer and operator teams. For more information, see [Create a RAM user group](/help/en/ram/user-guide/create-a-user-group).
    
3.  In the [RAM console](https://ram.console.alibabacloud.com/), create RAM users and add the RAM users to the corresponding RAM user groups.
    
    Create a specific number of RAM users for each team based on business requirements and add the RAM users to the RAM user group developer or operator. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Add a RAM user to a RAM user group](/help/en/ram/user-guide/add-a-ram-user-to-a-ram-user-group).
    
4.  In the [RAM console](https://ram.console.alibabacloud.com/), create custom policies.
    
    Create two custom policies named policyForDevTeam and policyForOpsTeam. For more information, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb).
    
    Sample of the policyForDevTeam policy:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "ecs:*",
                "Resource": "*",
                "Condition": {
                    "StringEquals": {
                        "acs:RequestTag/team": [
                            "dev"
                        ]
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": "ecs:*",
                "Resource": "*",
                "Condition": {
                    "StringEquals": {
                        "acs:ResourceTag/team": [
                            "dev"
                        ]
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ecs:DescribeTags",
                    "ecs:ListTagResources"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Deny",
                "Action": [
                    "ecs:DeleteTags",
                    "ecs:UntagResources",
                    "ecs:CreateTags",
                    "ecs:TagResources"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
    Sample of the policyForOpsTeam policy:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "ecs:*",
                "Resource": "*",
                "Condition": {
                    "StringEquals": {
                        "acs:RequestTag/team": [
                            "ops"
                        ]
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": "ecs:*",
                "Resource": "*",
                "Condition": {
                    "StringEquals": {
                        "acs:ResourceTag/team": [
                            "ops"
                        ]
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ecs:DescribeTags",
                    "ecs:ListTagResources"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Deny",
                "Action": [
                    "ecs:DeleteTags",
                    "ecs:UntagResources",
                    "ecs:CreateTags",
                    "ecs:TagResources"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
    The following table describes the policies.
    
    **Policy document**
    
    **Description**
    
    ```
    {
    	"Effect": "Allow",
    	"Action": "ecs:*",
    	"Resource": "*",
    	"Condition": {
    		"StringEquals": {
    			"acs:RequestTag/team": [
    				"dev"
    			]
    		}
    	}
    }
    ```
    
    Allows you to search for ECS instances by using the `team:dev` tag.
    
    ```
    {
    	"Effect": "Allow",
    	"Action": "ecs:*",
    	"Resource": "*",
    	"Condition": {
    		"StringEquals": {
    			"acs:ResourceTag/team": [
    				"dev"
    			]
    		}
    	}
    }
    ```
    
    Allows you to manage the ECS instances to which the `team:dev` tag is added.
    
    ```
    {
    	"Effect": "Allow",
    	"Action": [
    		"ecs:DescribeTags",
    		"ecs:ListTagResources"
    	],
    	"Resource": "*"
    }
    ```
    
    Allows you to view all tags of ECS instances.
    
    **Note**
    
    If you do not need to view all tags, you can delete this policy document. After the deletion, you can search for ECS instances by manually entering the tag key and the tag value.
    
    ```
    {
    	"Effect": "Deny",
    	"Action": [
    		"ecs:DeleteTags",
    		"ecs:UntagResources",
    		"ecs:CreateTags",
    		"ecs:TagResources"
    	],
    	"Resource": "*"
    }
    ```
    
    Denies the operations of creating, adding, deleting, and removing tags.
    
    This prevents the RAM user to which this policy is attached from modifying the tag. If the RAM user modifies the tag on an ECS instance, the RAM user no longer has the related permissions on the ECS instance.
    
5.  Grant permissions to the RAM user groups.
    
    Attach the custom policy policyForDevTeam to the RAM user group developer and the custom policy policyForOpsTeam to the RAM user group operator. For more information, see [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group#task-187800).
    
    **Note**
    
    After the authorization, RAM users in the RAM user groups inherit the permissions of the RAM user groups.
    

## Verify the configuration results

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com) as a RAM user.
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Instance** page, click **Filter by Tag** next to the search box and select a tag key and a tag value.
    
    For example, a RAM user in the RAM user group developer can search for ECS instances on which they have permissions by using the `team:dev` tag. ![标签过滤](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8893686171/p304008.jpg)
    
    **Important**
    
    A RAM user can view the ECS instances to which a tag is added only after the RAM user selects the tag. Otherwise, the RAM user cannot view any ECS instances.
    
5.  View and manage the ECS instances on which you have permissions.
    

## References

You can use the procedure that is described in this topic to grant access to other ECS instances by group. The ECS resources include block storage devices, snapshots, images, security groups, elastic network interfaces (ENIs), dedicated hosts, and SSH key pairs.
