This topic describes how to view the Alibaba Cloud services that can work with the Tag service, including the resource types that support tags and the tag-related capability items.

## View the resource types that support tags and the tag-related capability items in the Resource Management console

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags). The Tag page appears.
    
2.  On the **Tag** page, click **Resource Types Supported by Tag** in the upper-right corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9048974471/p937652.png)
    
3.  View the resource types that support tags and the tag-related capability items.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9048974471/p937653.png)
    
    For more information about the tag-related capability items, see [Tag-related capability items](#section-ogv-nfo-fjq).
    

## View the resource types that support tags and the tag-related capability items by calling the related API operation

You can call the [ListSupportResourceTypes](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listsupportresourcetypes) operation to view the resource types that support tags and the tag-related capability items. For more information about the tag-related capability items, see [Tag-related capability items](#section-ogv-nfo-fjq).

## Tag-related capability items

**Tag-related capability item**

**Code of a tag-related capability item**

**Description**

Tag Console Support

TAG\_CONSOLE\_SUPPORT

Specifies whether a resource type is supported by the Resource Management console.

Cloud Resource Console Support

CLOUD\_RESOURCE\_CONSOLE\_SUPPORT

Specifies whether the console of a service supports tags.

Tag Ram Support

TAG\_RAM\_SUPPORT

Specifies whether tags can be used to verify the permissions of users on resources of a specific type.

Examples:

-   Elastic Container Instance
    
    For more information, see [Use tags to authenticate a RAM user](/help/en/eci/user-guide/use-tags-to-authenticate-a-ram-user#topic-1860121).
    
-   Elastic Compute Service (ECS)
    
    For more information, see [Use tags to authenticate a RAM user](/help/en/ecs/user-guide/label-overview) and [Authentication rules](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram).
    
-   Auto Scaling
    
    For more information, see [Manage Auto Scaling resources by tag-based authentication](/help/en/auto-scaling/use-cases/tag-based-authentication#task-2376470) and [Manage Auto Scaling resources by resource authentication](/help/en/auto-scaling/use-cases/resource-level-authentication#task-2376470).
    
-   Server Migration Center (SMC)
    
    For more information, see [Use tags to implement fine-grained access control](/help/en/smc/use-cases/use-tags-to-implement-fine-grained-access-control#task-2207105).
    

Cloud Resource API Support

CLOUD\_RESOURCE\_API\_SUPPORT

Specifies whether the API operations that are used to query resources support tags.

For example, the [DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) operation provided by ECS can be used to query the tags that are added to ECS instances.

Tag API Support

TAG\_API\_SUPPORT

Specifies whether a resource type is supported by tag-related API operations.

Tag-related API operations include the following operations:

-   [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources)
    
-   [UntagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-untagresources)
    
-   [ListTagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listtagresources)
    

Tag-based Cost Allocation Support

TAG\_BILL\_SUPPORT

Specifies whether tag-based cost allocation is supported.

For more information, see [Overview of tag-based cost allocation](/help/en/resource-management/tag/user-guide/overview-of-tag-based-cost-allocation#concept-1948858).

Createdby Tag-based Cost Allocation Support

CREATED\_BY\_TAG\_BILL\_SUPPORT

Specifies whether createdby tag-based cost allocation is supported.

For more information about createdby tags, see [Overview of createdby tags](/help/en/resource-management/tag/user-guide/overview-4#task-2117830).

CreatedBy Tag Console Support

CREATED\_BY\_TAG\_CONSOLE\_SUPPORT

Specifies whether the console of a service supports createdby tags.

Tag Policy Pre-event Detection Support

TAG\_POLICY\_PREVENTATIVE\_CHECK\_SUPPORT

Specifies whether the pre-event interception feature of tag policies is supported.

This feature enables the system to check whether a tag complies with the rules defined in a tag policy when you add the tag to a resource or when you create a resource. If the tag does not comply with the rules, the tag fails to be added to the resource. For more information, see [Perform automatic tag detection](/help/en/resource-management/tag/user-guide/perform-automatic-tag-detection#task-2186556).

Tag Policy-based Remediation Support

TAG\_POLICY\_CHECK\_REMEDIATION\_SUPPORT

Specifies whether the automatic remediation feature of tag policies is supported.

The automatic remediation feature enables the system to check whether the tags that are added to a resource comply with the rules defined in a tag policy and remediate the tags that do not comply with the rules.

Tag Policy-based Resource Group Tag Inheritance Support

TAG\_POLICY\_RG\_TAG\_INHERIT\_SUPPORT

Specifies whether resource group-based tag inheritance defined in a tag policy is supported.

If resource group-based tag inheritance is enabled in a tag policy, resources inherit tags from the resource groups to which they belong. For more information, see [Enable automatic tag inheritance from a resource group](/help/en/resource-management/tag/user-guide/enable-automatic-tag-inheritance-from-a-resource-group#task-2186558).
