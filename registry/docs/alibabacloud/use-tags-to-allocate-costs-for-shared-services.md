The costs of shared services, such as Alibaba Cloud CDN (CDN), Object Storage Service (OSS), and Internet Shared Bandwidth, are allocated at a finer-grained level rather than the instance level. For example, the costs of CDN are allocated at the domain name level, those of OSS are allocated at the bucket level, and those of Internet Shared Bandwidth are allocated at the elastic IP address (EIP) level. This topic describes how to use tags to allocate costs for this type of service.

## Step 1: Add a tag to resources

You can use one of the following methods to add a tag to a resource:

-   Perform operations in a console: You can add tags to resources on the Tag page of the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags) or in the consoles of Alibaba Cloud services.
    
-   Use an API operation: You can call the TagResources operation of the Tag service or the related operation of an Alibaba Cloud service to add a tag to a resource.
    
    -   For more information about the TagResources operation of the Tag service, see [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources).
        
    -   For more information about the related operation of an Alibaba Cloud service, see the documentation of the Alibaba Cloud service.
        
-   Use CloudOps Orchestration Service (OOS): You can use OOS to add tags to multiple resources at a time. For more information, see [Use OOS to add tags to multiple ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-tags-to-multiple-ecs-instances-at-a-time-1#task-2387657).
    

In this example, the tag `Project:Entertainment` is created and added to buckets in the OSS console to identify resources of the entertainment project department.

1.  Log on to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Buckets**.
    
3.  On the Buckets page, find the bucket to which you want to add a tag, move the pointer over the icon in the Tag column, and then click **Edit**.
    
4.  On the page that appears, click **Create Tag** in the **Bucket Tagging** section.
    
5.  Enter a tag key and a tag value, and click **Save**. In this example, the tag key is `Project` and the tag value is `Entertainment`.
    
6.  View the tag that is added to the bucket.
    
    ![查看Bucket标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0717365371/p228331.png)
    

## **Step 2: Enable the cost allocation tag**

You can view a tag on pages such as the Split Bill page and the Cost Center page in the Expenses and Costs console only after you enable the tag as a cost allocation tag. In this example, the cost allocation tag whose tag key is `Project` is enabled.

1.  Go to the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page in the **Expenses and Costs** console. If you do not enable the cost allocation tag feature, enable the feature as prompted.
    
2.  On the **Cost allocation tags** page, find the tag and enable it as a cost allocation tag.
    
    **Important**
    
    You can view the tag on the Cost allocation tags page in the Expenses and Costs console one day after the tag is added to resources.
    

## Step 3: Create a rule for automatically allocating resources to a cost center

On the Cost Center page in **Expenses and Costs** console, create a rule to automatically allocate resources to a cost center based on the cost allocation tag.

1.  Go to the [Cost Center](https://usercenter2-intl.console.alibabacloud.com/finance/finance-unit/list) page in the **Expenses and Costs** console. If you do not enable the cost center feature, enable the feature as prompted.
    
2.  On the **Cost Center** page, click the **+** icon in the left-side navigation tree to create a cost center.
    
3.  If no rule is available in the cost center, click **Create Rule**. Otherwise, click **Edit** to edit the existing rule.
    
4.  Configure a rule to automatically allocate resources to the cost center based on the cost allocation tag.
    
    -   Select **Tag** for Condition.
        
    -   Select the tag key. In this example, the tag key `Project` is selected.
        
    -   Select the tag value. In this example, the tag value `Entertainment` is selected.
        
    
    For more information, see [Allocate resources by using an automatic allocation rule](/help/en/user-center/rule-for-automatic-resource-allocation#18628d3050njy).
    
5.  View the automatically allocated resources.
    
    **Important**
    
    You can view the automatically allocated resources in the cost center one day after the rule is created.
    

## References

-   [View and export the split bills of shared services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-shared-services#task-2025553)
    
-   [Cost allocation tags](/help/en/user-center/cost-allocation-tags)
    
-   [Cost center](/help/en/user-center/cost-center-overview)
