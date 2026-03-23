Alibaba Cloud allows you to use tags and cost centers to allocate the costs of resources on the cloud to different project teams or business departments. In addition, you can sort cost relationships and establish a cost structure for the resources, which facilitates cost management on the cloud.

## Background information

Before you use tags to allocate costs, take note of the following items:

-   Your enterprise must be willing to implement resource management and cost management. The cost allocation operation is approved by senior leaders. To understand the cost information of your enterprise, you must sort and manage resources.
    
-   To ensure that cost allocation-related tags are added to all your resources, some required regulations and rules must be established for your enterprise.
    

The following Alibaba Cloud services are required for cost allocation:

-   Tag
    
    Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management.
    
-   Cloud Config
    
    Cloud Config is a specialized service that is used to evaluate resources. Cloud Config tracks configuration changes of your resources and evaluates configuration compliance. Cloud Config can help you evaluate numerous resources and maintain the continuous compliance of your cloud infrastructure. You can use Cloud Config to find the resources to which no tags are added.
    

## Requirements for cost allocation

The requirements shown in the following figure must be met for cost allocation.

![规范性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7821270161/p170491.png)

-   **Normativity**
    
    An enterprise can understand the cost information of resources only if the costs of these resources are visible to the enterprise. To visualize the costs, you must provide the business, financial, and O&M departments with reports that have the following characteristics:
    
    -   Clear and unified dimensions.
        
    -   Correct relationships among resources. For example, a resource belongs to the correct resource group, or correct tags are added to the resource.
        
    -   Specific tag policies. For more information, see [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design#concept-1796690).
        
    -   Appropriate access control policies. For more information, see [Policy overview](/help/en/ram/policy-overview#concept-tfz-4wf-xdb).
        
-   **Accountability**
    
    Accountability lays a foundation for refined resource management. To ensure the reliability and accuracy of tag-based data, accountability must be combined with the management regulations of enterprises.
    
-   **Continuous optimization**
    
    Cost allocation is a persistent process. It shows the actual costs of resources from the organization or business dimension. Each resource needs to be managed by using tags throughout its whole lifecycle. This requires continuous cooperation among related departments within an enterprise.
    

## Cost allocation method

1.  Plan tags for resources from the organization or business dimension.
    
    For example, you can plan tags for resources from the following dimensions:
    
    -   Project
        
    -   Cost center
        
    -   Environment
        
    -   Application
        
    -   Department
        
    
    ![标签分账](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7821270161/p170490.png)
    
    For more information about the principles and suggestions used to plan tags, see [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design#concept-1796690).
    
2.  Create tags and add them to resources.
    
    Create tags and add them to resources in the Resource Management console, consoles of Alibaba Cloud services, or by using the related API operations. You can use the following methods to create tags and add them to resources:
    
    -   Add tags to resources when you create the resources (recommended)
        
        Only some Alibaba Cloud services support this method. For more information, see the documentation of each Alibaba Cloud service.
        
    -   Add tags to existing resources
        
        For more information, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag) and [Add a tag](/help/en/resource-management/tag/user-guide/add-a-tag).
        
3.  Enable cost allocation tags.
    
    If you enable the [cost allocation tag](https://usercenter2-intl.console.alibabacloud.com/finance/tags) feature and specify tags as cost allocation tags, you can query split bills based on the tags on pages such as the Cost Analysis page and the Bill Details page in the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com). If you enable the cost allocation tag feature but do not specify tags as cost allocation tags, you cannot view any tags in the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com). For more information, see [Cost allocation tags](/help/en/user-center/cost-allocation-tags).
    
4.  Query split bills.
    
    Query split bills based on cost allocation tags in the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com). For more information, see [Query split bills based on cost allocation tags](/help/en/resource-management/tag/use-cases/methods-to-view-split-bills#concept-1956182).
    
5.  Optional. Check whether cost allocation tags are added to all resources.
    
    Use Cloud Config to query the resources to which no cost allocation tags are added. For more information, see [Use Cloud Config to search for resources to which specific tags are not added](/help/en/resource-management/tag/use-cases/use-cloud-config-to-search-for-resources-to-which-specific-tags-are-not-added#task-2038610).
    

## Best practices

-   [Use tags to manage costs](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs)
    
-   [Use tags to allocate the costs of OSS buckets](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-the-costs-of-oss-buckets#task-1919211)
    
-   [Query split bills of elastic container instances based on tags](/help/en/resource-management/tag/use-cases/query-split-bills-of-elastic-container-instances-based-on-tags)
    
-   [Use tags to allocate costs for instance-based services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-instance-based-services#task-2025484)
    
-   [Use tags to allocate costs for shared services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-shared-services#task-2025484)
    
-   [Use tags to allocate costs for cluster-based services](/help/en/resource-management/tag/use-cases/use-tags-to-allocate-costs-for-cluster-based-services#task-2025484)
    
-   [View and export the split bills of instance-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-instance-based-services#task-2025553)
    
-   [View and export the split bills of shared services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-shared-services#task-2025553)
    
-   [View and export the split bills of cluster-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-cluster-based-services#task-2025553)
    

## Limits

**Dimension**

**Item**

**Limit**

Tag

Maximum number of tags that can be added to a single resource

20

Tag key

A tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.

Tag key

A tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

Adding tags to resources

Each tag key on a resource can have only one tag value. If you attempt to add a tag that has the same key as an existing tag, the value of the existing tag is overwritten.

For example, the `city:shanghai` tag is added to a resource. If you add the `city:newyork` tag to the resource, the `city:shanghai` tag is automatically removed from the resource.

Cost center

Effective scope of automatic allocation rules

Automatic allocation rules take effect only on resources that are not allocated to a cost center.

Maximum number of automatic allocation rules that are allowed

Only one automatic allocation rule can be configured for each cost center.

Time required before you can query resource costs by tag or cost center in a split bill after you add tags to resources and create cost centers for resources

The billing details are updated one day after you purchase resources. You can query resource costs by tag in a bill 1 hour after you add tags to resources. You can query resource costs by cost center in a bill one day after you create cost centers for resources.

Time required before resources can be allocated to the related cost center after you create an automatic allocation rule for the cost center

After you create an automatic allocation rule for a cost center, the rule takes effect on the cost center at 23:00 every day. You can check whether your resources are allocated to the related cost center one day after you create an automatic allocation rule.

Split bill

Update cycle of a split bill

T+1

**Note**

The split bills of OSS are updated two days after you purchase OSS resources.

Update cycle of tags in a split bill

1 hour

Time required before you can query resource costs by tag after you add tags to resources

T+1
