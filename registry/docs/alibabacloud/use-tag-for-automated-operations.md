After you add tags to resources, you can use CloudOps Orchestration Service (OOS) to implement automated O&M for the resources based on the tags.

## Scenarios

As the number of cloud resources of enterprises increases, O&M becomes more and more important to resources. However, manual O&M cannot meet the requirements of enterprises. You can use OOS to implement automated O&M. OOS provides the best practices of operations as code. This allows you to create templates from manuals such as O&M guides, user guides, and operation guides. Before you use OOS to implement automated O&M, you must use tags to categorize your resources from different dimensions. This way, OOS can identify the resources by tag during O&M. Therefore, the combination of the Tag service and OOS provides an optimal O&M solution for enterprises.

## Benefits

-   You can perform automated O&M on multiple resources at a time. For example, you can start, stop, or restart multiple Elastic Compute Service (ECS) instances at a time.
    
-   You can manage tags for multiple resources at a time. For example, you can add tags to or modify tags for multiple resources at a time.
    
-   You can use tags as a basis to implement operation orchestration from different dimensions. If you do not want to implement automated O&M for a resource, you do not need to modify the script for the orchestration task related to the resource. You only need to modify the tags added to the resource in the Resource Management console.
    

## Procedure

1.  Use tags of different business dimensions to identify resources for centralized management.
    
2.  Create a template in OOS and execute the template to implement automated O&M.
    

## Best practices

The following topics describe the best practices of using OOS to implement tag-based automated O&M:

-   [Use OOS to modify a tag value of multiple resources at a time](/help/en/resource-management/tag/use-cases/use-oos-to-modify-a-tag-value-of-multiple-resources-1)
    
-   [Use OOS to add tags to multiple ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-tags-to-multiple-ecs-instances-at-a-time-1)
    
-   [Use OOS to start multiple ECS instances with specific tags at a time](/help/en/resource-management/tag/use-cases/use-oos-to-start-multiple-ecs-instances-with-specific-tags-at-a-time)
    
-   [Use OOS to add multiple tags to resources at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-multiple-tags-to-resources-at-a-time)
    
-   [Use OOS to enable topics and groups in a Message Queue for Apache RocketMQ instance to inherit tags from the instance](/help/en/resource-management/tag/use-cases/use-oos-to-enable-topics-and-groups-in-apsaramq-for-rocketmq-instances-to-inherit-tags)
    
-   [Use OOS to inherit tags from ECS instances for the resources of the ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-enable-resources-of-the-ecs-instances-to-inherit-tags-at-a-time)
    
-   [Query ECS instances with a specific tag and add the ECS instances to security groups with the same tag](/help/en/resource-management/tag/use-cases/query-ecs-instances-based-on-tags-and-add-ecs-instances-to-security-groups-with-same-tags)
