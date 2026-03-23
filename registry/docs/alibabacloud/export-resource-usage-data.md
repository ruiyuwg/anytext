Alibaba Cloud CDN allows you to export the resource usage data of all your accelerated domain names by day or by month. Usage data is categorized based on billable items and exported to a PDF file.

## Export usage data by day or by month

**Note** You can export data by day or by month up to the last 12 months.

-   Export usage data by day: You can export usage data of the current day or a day within the last 355 days.
-   Export usage data by month: You can export usage data of the current month or a month within the last 11 months.

1.  Log on to the [Alibaba Cloud CDN](https://cdn.console.alibabacloud.com) console.
    
2.  In the left-side navigation pane, click **Usage**.
    
3.  On the **Export Bills** tab, select **Select Date** or **Select Month**, select a date or a month, and then click **Create Export Task**.
    
    ![Create an export task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1396178561/p365734.png)
    
4.  After the export task is completed, click **Download**.

## Related API operations

**API operation**

**Description**

[CreateUserUsageDataExportTask](/help/en/cdn/api-createusagedetaildataexporttask#doc-api-Cdn-CreateUsageDetailDataExportTask)

Creates a task to export resource usage details to an Excel file.

[DescribeUserUsageDataExportTask](/help/en/cdn/api-describeuserusagedataexporttask#doc-api-Cdn-DescribeUserUsageDataExportTask)

Queries export tasks that were created within the last three months. The tasks were used to export resource usage data.

[DeleteUserUsageDataExportTask](/help/en/cdn/api-deleteuserusagedataexporttask#doc-api-Cdn-DeleteUserUsageDataExportTask)

Deletes a task that was used to export usage data.
