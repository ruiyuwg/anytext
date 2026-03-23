After you enable createdby tags, you can view the tags in the Resource Management console, the console of a related Alibaba Cloud service, or the Expenses and Costs console.

## Background information

For information about the Alibaba Cloud services that support createdby tags, see [Alibaba Cloud services that support createdby tags](/help/en/resource-management/tag/user-guide/overview-4#section-14u-091-u51).

## View createdby tags in the Resource Management console

You can view the createdby tag of a resource on the Tag page of the Resource Management console 5 minutes to 10 minutes after the resource is created.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**.
    
3.  Click the **System Tags** tab and view createdby tags. The key of createdby tags is `acs:tag:createdby`.
    
    ![在标签控制台查看创建者标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1781534471/p487979.jpg)
    
4.  Click **View Resources** in the **Actions** column that corresponds to a createdby tag to view the resources to which the tag is added.
    

## View createdby tags in the console of a related Alibaba Cloud service

You can view the createdby tag of a resource in the console of the Alibaba Cloud service to which the resource belongs 5 minutes to 10 minutes after the resource is created. For more information, see the documentation of the service.

The following figure shows how to view the createdby tag of an Elastic Compute Service (ECS) instance in the ECS console.

![ECS实例的创建者标签](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6532323661/p487960.jpg)

## View createdby tags in the Expenses and Costs console

If you create a resource 24 hours after you enable createdby tags, you can view the createdby tag of the resource on the following pages of the Expenses and Costs console and allocate the costs of the resource based on the tag.

-   [Cost Analysis page](https://usercenter2-intl.console.alibabacloud.com/expense-manage/expense-analyze)
    
-   [Details page of a bill](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance)
    
-   [Split Bill page](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill)
    

**Note**

If you enable [cost allocation tags](https://usercenter2-intl.console.alibabacloud.com/finance/tags) and specify a type of tag as cost allocation tags, you can view only this type of tag on the related pages of the Expenses and Costs console. If you enable cost allocation tags but do not specify tags as cost allocation tags, you cannot view any tags in the Expenses and Costs console.
