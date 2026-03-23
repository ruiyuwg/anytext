This topic provides answers to some frequently asked questions about tags.

## Which Alibaba Cloud services support tag-based cost allocation?

For more information about the Alibaba Cloud services that support tag-based cost allocation, see the **Tag-based Cost Allocation Support** capability item in [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).

## How do I efficiently add tags to existing resources?

For existing resources that are not added to resource groups or to which no tags are added, use one of the following methods to efficiently add tags to these resources:

-   Resource Management console
    
    For more information, see [Add a custom tag](/help/en/resource-management/add-a-custom-tag#task-2537588).
    
-   Tag editor
    
    For more information, see [Manage tags](/help/en/resource-management/manage-tags#task-2537597).
    
-   Tag API operation
    
    For more information, see [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources).
    
-   OOS
    
    For more information, see [Use OOS to add tags to multiple ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-tags-to-multiple-ecs-instances-at-a-time-1#task-2387657).
    

## How do I view split bills?

You can view split bills in the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com). For more information, see the following topics:

-   [View split bills based on cost allocation tags](/help/en/resource-management/tag/use-cases/methods-to-view-split-bills#concept-1956182)
    
-   [View and export the split bills of instance-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-instance-based-services#task-2025553)
    
-   [View and export the split bills of shared services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-shared-services#task-2025553)
    
-   [View and export the split bills of cluster-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-cluster-based-services#task-2025553)
    

## How do I allocate costs for Alibaba Cloud services that cannot work with Tag?

You can use the following methods to allocate costs for services that cannot work with Tag:

-   For services that support resource groups, you can use resource groups to allocate costs.
    
    For more information, see [Allocate costs by resource group](/help/en/resource-management/resource-group/use-cases/view-billing-statements-by-resource-group#task-2404116).
    
-   For services that have the same cost ownership, you can configure resource allocation rules on the [Cost Center](https://usercenter2-intl.console.alibabacloud.com/finance/finance-unit/list) page in the Expenses and Costs console and allocate costs by cost center in split bills.
    
-   For other services, you can export bills on the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page in the Expenses and Costs console to your on-premises device. Then, split the bills based on items such as accounts and services in the exported Excel file.
    

## How do I modify the value of a tag that is added to multiple resources? How long does it require for the modification to take effect?

Use one of the following methods to modify the value of a tag that is added to multiple resources in the same region:

-   OOS
    
    For more information, see [Use OOS to modify a tag value of multiple resources at a time](/help/en/resource-management/tag/use-cases/use-oos-to-modify-a-tag-value-of-multiple-resources-1#task-2376771).
    
-   Tag editor
    
    For more information, see [Manage tags](/help/en/resource-management/manage-tags#task-2537597).
    
-   Tag API operation
    
    For more information, see [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources).
    

The modification immediately takes effect.

## Why am I unable to find my newly created resources on the Cost Centers page?

You can find your newly created resources on the Cost Center page one day later.

## Why does my cost center not contain unallocated resources, but my bills contain unallocated costs?

You can find your newly created cost centers in bill details one day later. You can view split bills on the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the Expenses and Costs console.

For information about how to allocate costs for Alibaba Cloud services, see the following topics:

-   Instance-based services: [Use tags to allocate costs for instance-based services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-instance-based-services#task-2025484) and [View and export the split bills of instance-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-instance-based-services#task-2025553)
    
-   Shared services: [Use tags to allocate costs for shared services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-shared-services#task-2025484) and [View and export the split bills of shared services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-shared-services#task-2025553)
    
-   Cluster-based services: [Use tags to allocate costs for cluster-based services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-cluster-based-services#task-2025484) and [View and export the split bills of cluster-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-cluster-based-services#task-2025553)
    

## Do the automatic allocation rules created for cost centers take effect on existing resources?

Yes, after you create automatic allocation rules for cost centers, the system automatically allocates resources to the cost centers based on the tags added to the resources, regardless of whether the resources are newly created resources or existing resources.
