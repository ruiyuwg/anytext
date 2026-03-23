You can add tags to Elastic Compute Service (ECS) instances, specify tags in custom Resource Access Management (RAM) policies, and attach the policies to RAM users based on your business requirements. This way, the RAM users can view and manage only authorized ECS instances.

## **Background information**

You can use tags to manage the resource access and operation permissions of RAM users. This indicates that you can implement RAM user authentication based on tags. The following figure shows how to implement the authentication.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5435463771/CAEQIRiBgIDvgLGg9BgiIDE0OTdkNmE3YjllYzRmMjJiNmM4NTkxNDk2YTAwYjAw3963382_20230830144006.372.svg)

You can specify tags in the [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms) element of a custom policy. Tags support the following condition keys:

-   `acs:RequestTag/<tag-key>`: the tag that is passed in a request. This condition key indicates that you must specify the tag in the request when you call an API operation.
    
-   `acs:ResourceTag/<tag-key>`: the tag that is added to the requested resource. This condition key indicates that the tag must be added to the resource on which you perform an operation.
    

## Procedure

This section describes how to enable the RAM user Alice to view and manage only the ECS instances to which the `owner:alice` and `environment:production` tags are added.

**Note**

During the authorization process, the ECS instances can work as expected.

Perform the following steps by using an account administrator:

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) and create a RAM user named Alice.
    
    For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
2.  Add tags to ECS instances.
    
    In this example, the `owner:alice` and `environment:production` tags are added to ECS instances.
    
    You can use one of the following methods to add tags:
    
    -   Add tags to ECS instances on the [Tag page of the Resource Management console](https://resourcemanager.console.alibabacloud.com/tags). For more information, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag) and [Add a tag](/help/en/resource-management/tag/user-guide/add-a-tag).
        
    -   Add tags to ECS instances in the [ECS console](https://ecs.console.alibabacloud.com). For more information, see [Create and attach tags](/help/en/ecs/user-guide/label-overview#section-yoy-sme-w01).
        
    
3.  Create a custom policy named UseTagAccessRes in the [RAM console](https://ram.console.alibabacloud.com/).
    
    The following code provides the document of the policy. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy-1#task-glf-vwf-xdb).
    
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
                        "acs:ResourceTag/owner": [
                            "alice"
                        ],
                        "acs:ResourceTag/environment": [
                            "production"
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
                        "acs:RequestTag/owner": [
                            "alice"
                        ],
                        "acs:RequestTag/environment": [
                            "production"
                        ]
                    }
                }
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ecs:List*",
                    "ecs:DescribeInstanceStatus",
                    "ecs:DescribeInstanceVncUrl",
                    "ecs:DescribeInstanceAutoRenewAttribute",
                    "ecs:DescribeInstanceRamRole",
                    "ecs:DescribeInstanceTypeFamilies",
                    "ecs:DescribeInstanceTypes",
                    "ecs:DescribeInstanceAttachmentAttributes",
                    "ecs:DescribeInstancesFullStatus",
                    "ecs:DescribeInstanceHistoryEvents",
                    "ecs:DescribeInstanceMonitorData",
                    "ecs:DescribeInstanceMaintenanceAttributes",
                    "ecs:DescribeInstanceModificationPrice",
                    "ecs:DescribeA*",
                    "ecs:DescribeC*",
                    "ecs:DescribeD*",
                    "ecs:DescribeE*",
                    "ecs:DescribeH*",
                    "ecs:DescribeIm*",
                    "ecs:DescribeInv*",
                    "ecs:DescribeK*",
                    "ecs:DescribeL*",
                    "ecs:DescribeM*",
                    "ecs:DescribeN*",
                    "ecs:DescribeP*",
                    "ecs:DescribeR*",
                    "ecs:DescribeS*",
                    "ecs:DescribeT*",
                    "ecs:DescribeZ*",
                    "vpc:DescribeVpcs",
                    "vpc:DescribeVSwitches"
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
    
    The following table describes the configurations in the policy.
    
    **Configuration**
    
    **Description**
    
    ```
    {
    	"Effect": "Allow",
    	"Action": "ecs:*",
    	"Resource": "*",
    	"Condition": {
    		"StringEquals": {
    			"acs:RequestTag/owner": "alice",
    			"acs:RequestTag/environment": "production"
    		}
    	}
    }
    ```
    
    Allows the filtering of ECS instances based on the `owner:alice` and `environment:production` tags.
    
    ```
    {
    	"Effect": "Allow",
    	"Action": "ecs:*",
    	"Resource": "*",
    	"Condition": {
    		"StringEquals": {
    			"acs:ResourceTag/owner": [
    				"alice"
    			],
    			"acs:ResourceTag/environment": [
    				"production"
    			]
    		}
    	}
    }
    ```
    
    Allows management operations on ECS instances to which the `owner:alice` and `environment:production` tags are added.
    
    ```
    {
                "Effect": "Allow",
                "Action": [
                    "ecs:List*",
                    "ecs:DescribeInstanceStatus",
                    "ecs:DescribeInstanceVncUrl",
                    "ecs:DescribeInstanceAutoRenewAttribute",
                    "ecs:DescribeInstanceRamRole",
                    "ecs:DescribeInstanceTypeFamilies",
                    "ecs:DescribeInstanceTypes",
                    "ecs:DescribeInstanceAttachmentAttributes",
                    "ecs:DescribeInstancesFullStatus",
                    "ecs:DescribeInstanceHistoryEvents",
                    "ecs:DescribeInstanceMonitorData",
                    "ecs:DescribeInstanceMaintenanceAttributes",
                    "ecs:DescribeInstanceModificationPrice",
                    "ecs:DescribeA*",
                    "ecs:DescribeC*",
                    "ecs:DescribeD*",
                    "ecs:DescribeE*",
                    "ecs:DescribeH*",
                    "ecs:DescribeIm*",
                    "ecs:DescribeInv*",
                    "ecs:DescribeK*",
                    "ecs:DescribeL*",
                    "ecs:DescribeM*",
                    "ecs:DescribeN*",
                    "ecs:DescribeP*",
                    "ecs:DescribeR*",
                    "ecs:DescribeS*",
                    "ecs:DescribeT*",
                    "ecs:DescribeZ*",
                    "vpc:DescribeVpcs",
                    "vpc:DescribeVSwitches"
                ],
                "Resource": "*"
            }
    ```
    
    Allows the viewing of information about the ECS instances.
    
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
    
    This prevents the RAM user to which this policy is attached from modifying the tags. If the RAM user modifies the tags on an ECS instance, the RAM user no longer has the related permissions on the ECS instance.
    
4.  Attach the created policy to the RAM user Alice in the [RAM console](https://ram.console.alibabacloud.com/).
    
    Select **Account** for **Resource Scope**, the RAM user Alice for **Principal**, and the custom policy UseTagAccessRes for **Policy**. For more information, see [Grant permissions to RAM users](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

## **Verify the result**

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com) as the RAM user Alice.
    
    For more information, see [Log on as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select the region in which the ECS instances reside.
    
4.  On the **Instances** page, click **Filter by Tag** on the right side of the search box, and select the `owner:alice` and `environment:production` tags.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2509858071/p747938.png)
    
    **Important**
    
    The RAM user can view the ECS instances to which the tags are added only after the RAM user selects the tags. If no tag is selected, the RAM user cannot view any ECS instances.
    
5.  View and manage only ECS instances to which the `owner:alice` and `environment:production` tags are added.
    

## **References**

For information about RAM authentication rules for ECS, see [Elastic Compute Service: RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram).
