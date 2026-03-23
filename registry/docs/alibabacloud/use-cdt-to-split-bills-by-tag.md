Splitting bills by tag in Cloud Data Transfer (CDT) enables fine-grained cost tracking and management. This capability improves budget control, increases billing transparency, simplifies financial reporting and auditing, and promotes cost optimization.

## Create and add tags to cloud resources

### **Console**

1.  To add tags:
    
    1.  Go to the [Resource Management console - Tag page](https://resourcemanager.console.alibabacloud.com/tags) and click **Create Tag**.
        
    2.  In the **Create Tag** dialog box, set the tag key and tag value. You can also click **Upload .xlsx File** to upload an Excel file that contains the tags. Click **Create**.
        
        > If you specify an existing tag key, only a new tag value is added to that key.
        
        -   **Tag Key**: Required. Select an existing tag key or enter a new one. You can perform a fuzzy search by prefix. You can specify up to 10 tag keys at a time. A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:` or contain `http://` or `https://`.
            
        -   **Tag Value**: Optional. A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` or contain `http://` or `https://`.
            
2.  To add tags to resources:
    
    -   When you create a resource, add a tag by selecting it from the list of tag keys and values in the service console.
        
    -   For existing resources, go to the [Resource Management console - Tag page](https://resourcemanager.console.alibabacloud.com/tags). In the tag list, find the target tag and click **Add To Resources** in the **Actions** column.
        
        -   To add the tag to resources across different services and regions, set ****Method to Specify Resources**** to **Select from Resource List** and select the resources from the list. You can filter resources by multiple conditions.
            
        -   To add the tag to resources of a specific service and in a specific region, set **Method to Specify Resources** to **Enter Resource IDs**. Then, select the target service and region, and enter the resource IDs. Separate multiple IDs with commas (,).
            
    
    > To remove a tag from resources, find the tag and click **View Resources** in the **Actions** column. On the **Resources** tab, remove the tag from the resources.
    

### **API**

-   Call the [TagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources) operation to create and attach tags to cloud resources.
    
-   Call the [UntagResources](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-untagresources) operation to detach tags from cloud resources.
    

## **Split bills by tag**

Enable [cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags), and enable the specific tags that you want to use for bill splitting. Then, view split bills based on these tags on pages such as **Cost Analysis** and **Bill Details** in the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com) console.

> If you do not enable any tags on the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page, no tags are displayed on the pages in Expenses and Costs. The Cost allocation tags page lists all tags that you have created. If a tag is not needed for cost allocation, leave it disabled.

1.  Go to the [Cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) page to enable cost allocation tags:
    
    -   The first time you use this feature, click **Next**, select the target tags, and follow the prompts to **Enable** them.
        
    -   Later, you can click **Enable** or **Disable** in the **Actions** column for a tag to set whether it is used for bill splitting.
        
2.  View split bills:
    
    -   On the **Split Bill** page
        
        > The first time you use the split bill feature, go to the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in Expenses and Costs and click **Activate Now**. This feature is free of charge. You can view the split bill data starting the day after you enable the feature.
        
        Go to the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in Expenses and Costs and view your resource costs.
        
        Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8184746371/p879708.png) button to export the split bill records. On the [Export Record](https://usercenter2-intl.console.alibabacloud.com/finance/export-record) page, download the exported file.
        
    -   On the **Cost Analysis** page
        
        > The first time you use the cost analysis feature, go to the [Cost Analysis](https://billing-cost-intl.aliyun.com/expense-manage/expense-analyze) page in Expenses and Costs and click **Activate for Free**. You can use the feature 48 hours after you enable it, provided that consumption data exists.
        
        Go to the [Cost Analysis](https://billing-cost-intl.aliyun.com/expense-manage/expense-analyze) page in Expenses and Costs. Set **Category** under **Analysis Dimension** to **Instance Tag** and view the costs of resources associated with specific tags.
        
    -   On the **Cost Centers** page
        
        Go to the [Cost Centers](https://billing-cost-intl.aliyun.com/finance/finance-unit/list) page in Expenses and Costs. Create cost centers as needed and [allocate resources to them by tag](/help/en/user-center/cost-center-1#5d67a34000y49).
        
        ![Assign cost center](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3691350071/p681007.png)
