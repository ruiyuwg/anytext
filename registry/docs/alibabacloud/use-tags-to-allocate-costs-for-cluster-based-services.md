The costs of cluster-based services, such as Container Service for Kubernetes (ACK) and E-MapReduce (EMR), are allocated at the cluster level. For example, to allocate the costs of EMR clusters, you need to only add different tags to the clusters. Then, resources in the clusters automatically inherit the tags from the clusters. This way, resources in different clusters and fees incurred by the resources are separated based on tags. This topic describes how to use tags to allocate costs for this type of service.

## Background information

The cost allocation method of ACK is slightly different from that of EMR. Resources in an ACK cluster cannot automatically inherit custom tags from the cluster. However, the system adds a tag with the cluster ID to the resources to identify the relationships between the resources and the cluster. You need to allocate the costs for ACK based on custom tags and cluster IDs.

## Step 1: Add a tag to resources

You can use one of the following methods to add a tag to a resource:

-   Perform operations in a console: You can add tags to resources on the Tag page of the Resource Management console or in the consoles of Alibaba Cloud services.
    
-   Use an API operation: You can call the TagResources operation of the Tag service or the related operation of an Alibaba Cloud service to add a tag to a resource.
    
    -   For more information about the TagResources operation of the Tag service, see [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources).
        
    -   For more information about the related operation of an Alibaba Cloud service, see the documentation of the Alibaba Cloud service.
        
-   Use CloudOps Orchestration Service (OOS): You can use OOS to add tags to multiple resources at a time. For more information, see [Use OOS to add tags to multiple ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-tags-to-multiple-ecs-instances-at-a-time-1#task-2387657).
    

In this example, the tag `Project:SharedServices` is created and added to clusters in the EMR console to identify resources of public services in the infrastructure.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
    
2.  In the top navigation bar, select the region where your cluster resides and select a resource group based on your business requirements.
    
3.  Click **Create Cluster**. In the **Advanced Settings** section of the **Basic Configuration** step, find **Tags** and click **\+ Add Tag**.
    
    For more information about how to create a cluster, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
4.  Enter the tag key `Project` and tag value `SharedServices`.
    

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
        
    -   Select the tag value. In this example, the tag value `SharedServices` is selected.
        
    
    For more information, see [Allocate resources by using an automatic allocation rule](/help/en/user-center/rule-for-automatic-resource-allocation#18628d3050njy).
    
5.  View the automatically allocated resources.
    
    **Important**
    
    You can view the automatically allocated resources in the cost center one day after the rule is created.
    

## References

-   [View and export the split bills of cluster-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-cluster-based-services#task-2025553)
    
-   [Cost allocation tags](/help/en/user-center/cost-allocation-tags)
    
-   [Cost center](/help/en/user-center/cost-center-overview)
