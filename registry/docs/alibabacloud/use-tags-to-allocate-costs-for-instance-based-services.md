The costs of instance-based services, such as Elastic Compute Service (ECS), Server Load Balancer (SLB), and Elastic IP Address (EIP), can be allocated at the instance level. This topic describes how to use tags to allocate costs for this type of service.

## Step 1: Create a tag and add it to resources

In this example, the tag `Project:Game` is created and added to ECS instances on the Tag page of the Resource Management console to identify resources of the game project department.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**. On the **Tag** page, click **Create Tag**.
    
3.  In the **Create Tag** dialog box, enter the tag key `Project` and the tag value `Game`, and click **Create**.
    
4.  On the **Tag** page, find the newly created tag and click **Add to Resources** in the **Actions** column. In the **Add to Resources** dialog box, select the ECS instances to which you want to add the tag and click **Add**.
    
5.  In the [ECS console](https://ecs.console.alibabacloud.com), view the ECS instances to which the tag is added.
    
    ![实例型云产品绑定标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5617365371/p211957.png)
    

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
        
    -   Select the tag value. In this example, the tag value `Game` is selected.
        
    
    For more information, see [Allocate resources by using an automatic allocation rule](/help/en/user-center/rule-for-automatic-resource-allocation#18628d3050njy).
    
5.  View the automatically allocated resources.
    
    **Important**
    
    You can view the automatically allocated resources in the cost center one day after the rule is created.
    

## References

-   [View and export the split bills of instance-based services](/help/en/resource-management/tag/use-cases/view-and-export-the-split-bills-of-instance-based-services#task-2025553)
    
-   [Cost allocation tags](/help/en/user-center/cost-allocation-tags)
    
-   [Cost center](/help/en/user-center/cost-center-overview)
