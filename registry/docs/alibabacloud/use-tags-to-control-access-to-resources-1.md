The Tag service can work with Resource Access Management (RAM) to implement finer-grained permission management. After you add tags to resources, you can create RAM custom policies, specify authorized tags in the policies, and attach the policies to RAM identities (RAM users or RAM roles). This way, the RAM identities can access and manage only the resources to which the tags are added. Tag-based authorization is more flexible and extensible. If new resources are added, you can edit resource tags without modifying policies. This topic describes how to use tags to control the access permissions of a RAM user.

## **Resource types that support tag-based** authorization

Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags#/functions). On the Tag page, click **Resource Types Supported by Tag** in the upper-right corner. On the page that appears, view the **Tag Ram Support** column to check whether a resource type supports tag-based authorization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5253735471/p945975.png)

## **P**rinciple

The following figure shows the logic of limiting RAM user permissions based on tags.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1930384671/CAEQIRiBgIDvgLGg9BgiIDE0OTdkNmE3YjllYzRmMjJiNmM4NTkxNDk2YTAwYjAw3963382_20230830144006.372.svg)

You can use the [Condition](/help/en/ram/policy-elements#section-jix-u0j-2ms) element to specify authorized tags in a custom policy. The following table lists the conditions that are supported by Tag.

**Condition**

**Description**

`acs:RequestTag/<tag-key>`

The tag that is passed in a request. This condition key indicates that you must specify the tag in the request when you call an API operation. `<tag-key>` specifies the tag key. Replace it with the actual value.

`acs:ResourceTag/<tag-key>`

The tag that is added to the requested resource. This condition key indicates that the resource on which you perform an operation must have the tag. `<tag-key>` specifies the tag key. Replace it with the actual value.

## **Procedure**

1.  Create tags and add them to resources.
    
    You can create tags and add them to resources on the [Tag page of the Resource Management console](https://resourcemanager.console.alibabacloud.com/tags), on the [Resource Search or Cross-account Resource Search page of the Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-center), or in the consoles of other Alibaba Cloud services. For information about how to create tags and add them to resources on the Tag page, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag) and [Add a tag](/help/en/resource-management/tag/user-guide/add-a-tag).
    
2.  Create a custom policy.
    
    Create a custom policy in the [RAM console](https://ram.console.alibabacloud.com/) and configure conditions for tag-based authorization in the Condition element of the policy. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy).
    
    For example, the following policy allows management operations on Elastic Compute Service (ECS) instances that have the tags `owner:alice` and `environment:production`.
    
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
    
3.  Create a RAM user and grant permissions to the RAM user.
    
    Create a RAM user in the [RAM console](https://ram.console.alibabacloud.com/) and add the custom policy to the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

## **Best practices**

**Alibaba Cloud service**

**Example of tag-based authorization**

ECS

-   [Use tags to enable RAM users to manage only authorized ECS instances](/help/en/resource-management/tag/use-cases/use-tags-to-control-access-to-ecs-resources-1)
    
-   [Use tags to grant access to ECS instances by group](/help/en/ram/use-cases/use-tags-to-grant-access-to-ecs-instances-by-group#task-acb-stx-ydb)
    
-   [Use tags to control the running of Cloud Assistant commands](/help/en/resource-management/tag/use-cases/use-tags-to-control-the-running-of-cloud-assistant-commands)
    

Elastic Container Instance

[Use tags to authenticate a RAM user](/help/en/eci/user-guide/use-tags-to-authenticate-a-ram-user#topic-1860121)

Auto Scaling

[Manage Auto Scaling resources by tag-based authentication](/help/en/auto-scaling/use-cases/tag-based-authentication#task-2376470)

Server Migration Center (SMC)

[Use tags to implement fine-grained access control](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control#task-2207105)

ApsaraDB RDS

[Use tags to grant access to ApsaraDB RDS instances by group](/help/en/ram/use-cases/use-tags-to-grant-access-to-apsaradb-rds-instances-by-group#concept-msq-pmm-qfb)
