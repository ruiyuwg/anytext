This topic describes how to query resources to which a specific tag is added. You can use the methods provided in this topic to query resources.

## Query resources on the Tag page of the Resource Management console

For an Alibaba Cloud service that supports tags, you can query resources by tag on the Tag page of the Resource Management console.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**.
    
3.  Click **My Tags** or **System Tags** in the upper part of the **Tag** page.
    
4.  Find the desired tag and click **View Resources** in the **Actions** column to view the resources to which the tag is added.
    

## Query resources in the consoles of Alibaba Cloud services

For an Alibaba Cloud service that supports tags, you can query resources by tag in the console of the service. In this example, the Elastic Compute Service (ECS) console is used to query resources.

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Instances** page, click **Filter by Tag** and select a tag key and a tag value to view the ECS instances to which the tag is added.
    

## Query resources by calling a tag-related API operation

For an Alibaba Cloud service that supports tags, you can use a Tag API operation or a tag-related API operation provided by the service to query resources. The following descriptions provide details:

-   Tag API operation: Call the [ListTagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listtagresources) operation. Configure the request parameter `Tags` to query the resources to which the tags specified by this parameter are added.
    
-   Tag-related API operations provided by Alibaba Cloud services: Call the tag-related API operation provided by each service to query the resources to which specific tags are added. For more information, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).
