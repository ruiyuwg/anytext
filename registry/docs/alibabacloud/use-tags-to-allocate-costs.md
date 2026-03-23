In most cases, the managers of cloud resources need to split bills by business departments. This facilitates internal settlement. For example, your enterprise has only one Alibaba Cloud account, and all the enterprise resources are purchased by using this account. The financial department wants to allocate the costs of these resources from the cost center, department, and project dimensions. In this case, you can use the Tag service to add tags to your resources. Then, use the cost analysis feature provided by Alibaba Cloud to query bills from each dimension. This helps you manage costs based on tags.

## Background information

-   You can query the costs of your resources on the Cost Analysis page in the Expenses and Costs console about one day after you update tags for or add tags to your resources. For more information, see [Cost analysis](/help/en/user-center/cost-analysis-intl).
    
-   Many Alibaba Cloud services support tags. For more information, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).
    

## Step 1: Plan tags

Tags help you efficiently manage resources. You can use tags to mark resources from dimensions such as business attributes, owners, or costs. To plan an appropriate tag system, you can reference the tag design principles and examples provided in [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design#concept-1796690). You can plan the tags listed in the following table for your resources.

**Business dimension**

**Tag (**`**tag key:tag value**`**)**

Cost center

-   `costcenter:Beijing`
    
-   `costcenter:Shanghai`
    
-   `costcenter:Hangzhou`
    

Department

-   `department:Dev`
    
-   `department:Test`
    
-   `department:Ops`
    

Project

-   `project:project A`
    
-   `project:project B`
    

## Step 2: Create tags and add them to resources

Create tags and add them to resources.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**. On the Tag page, click **Create Tag**.
    
3.  In the **Create Tag** dialog box, create tags.
    
    Create different tags for resources that belong to different cost centers, departments, and projects based on the plan in [Step 1: Plan tags](#section-9gm-nmv-3ad).
    
4.  Click **Add Tags to Resources** in the upper part of the **Tag** page. In the dialog box that appears, select the resources to which you want to add tags and click **Add Tag**. In the **Add Tag** dialog box, select the tags that you want to add to the resources and click **OK**.
    
    For example, add the tags `costcenter:Beijing`, `department:Dev`, and `project:project A` to the resources that are used for Project A of the development department of the Beijing cost center.
    

**Note**

-   You can use CloudOps Orchestration Service (OOS) to add the tags to multiple resources at a time. For more information, see [Use OOS to add tags to multiple ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-tags-to-multiple-ecs-instances-at-a-time-1#task-2387657).
    
-   You can add tags to resources in the consoles of the Alibaba Cloud services that support tags. For more information, see the user guide of each cloud service.
    
-   You can add tags to resources by calling a Tag API operation. For more information, see [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources).
    

## **Step 3: Enable cost allocation tags**

Configure dimensions for cost analysis based on your business requirements, and specify cost allocation tags.

## Initial setup

1.  Go to the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page in the **Expenses and Costs** console.
    
2.  On the **Cost allocation tags** page, read the description of cost allocation tags and click **Next**.
    
3.  Specify the tags that are added in [Step 2: Create tags and add them to resources](#section-hdl-by0-uo2) as cost allocation tags and click **Next**.
    
4.  Click **Enable**.
    

## Ongoing management

1.  Go to the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page of the **Expenses and Costs** console.
    
2.  Find the tag you added in [Step 2: Create tags and add them to resources](#section-hdl-by0-uo2) and click **Enable** in the **Operations** column.
    

## Step 4: Query the costs of resources

Query the costs of resources based on the cost allocation tags.

1.  Go to the [Cost Analysis](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-analyze) page in the **Expenses and Costs** console. If you do not enable the cost analysis feature provided by Alibaba Cloud, enable the feature as prompted.
    
2.  On the Cost Analysis page, specify filter conditions to query the costs.
    
    -   Example 1: Query the costs of three `cost centers`
        
        1.  Select **Instance Tag** from the **Category** drop-down list.
            
        2.  Select `costcenter` from the Tag Key drop-down list.
            
        3.  Select **Month** from the **Time Unit** drop-down list.
            
        4.  Configure the start time and end time. The upper limit of the time range is 12 months.
            
    -   Example 2: Query the costs of a `project`
        
        1.  In the **Filters** section on the right, click **Tag**.
            
        2.  Select tags. For example, you can select the tag `project:project A` to query the costs of Project A.
            
            You can select multiple tags. The logical relationship between the tags is OR.
            
        3.  Click **Apply**.
            
    
3.  **(Optional)** Click **Export** in the upper-right corner of the bill. Then, a cost report is exported in the CSV format.
    

## **References**

-   [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design#concept-1796690)
    
-   [Cost allocation tags](/help/en/user-center/cost-allocation-tags)
    
-   [Cost analysis](/help/en/user-center/cost-analysis-intl)
