Filter usage details for billing by domain name, time range, and account. You can export these details and download them to your local computer for usage and cost analysis.

## Export usage details

**Note**

-   You can export summary usage data from the last 12 months. The maximum time range for a single export is one month.
    
-   Usage details are collected every 5 minutes and exported as an Excel file.
    

1.  Log on to the [CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left navigation pane, click **Usage**.
    
3.  Choose the **Details Export** tab and click **Create Task**.
    
4.  Set parameters such as **Task Name**, **Data Type**, and **Query Period** as needed, and then click **OK**.
    
    ![Export](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8722512461/p365705.png)
    
5.  After the export task is created, click **Download** to and save the report to view the details.
    
    ![Export](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6206020671/p365736.png)
    

## Related APIs

**API**

**Description**

[CreateUsageDetailDataExportTask](/help/en/cdn/api-createusagedetaildataexporttask#doc-api-Cdn-CreateUsageDetailDataExportTask)

Creates a task to export usage details to an Excel file.

[DescribeUserUsageDetailDataExportTask](/help/en/cdn/api-describeuserusagedetaildataexporttask#doc-api-Cdn-DescribeUserUsageDetailDataExportTask)

Queries the tasks for exporting 5-minute usage details of domain names under your account.

[DeleteUsageDetailDataExportTask](/help/en/cdn/api-deleteusagedetaildataexporttask#doc-api-Cdn-DeleteUsageDetailDataExportTask)

Deletes usage detail export tasks.
