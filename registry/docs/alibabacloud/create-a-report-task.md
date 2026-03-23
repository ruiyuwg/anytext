You can use a resource usage report to check resource usage, estimate usage trends, and analyze resource costs. If the resource usage is high, you can upgrade resources to improve performance. If the resource usage is low, you can downgrade or release resources to reduce costs.

## Prerequisites

If you use a RAM user to perform this operation, make sure that the system policy AliyunCloud MonitorFullAccess is attached to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/cms/cloudmonitor-1-0/user-guide/grant-permissions-to-a-ram-user#task-2535876).

## Background information

For information about the billing of the resource usage report feature, see [Billing of the resource usage report feature](/help/en/cms/product-overview/billing-of-the-resource-usage-report-feature#concept-2081546).

## Procedure

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Hybrid Cloud Monitoring** > **Resource Usage Report**.
    
3.  On the **Resource Usage Report** page, click **Create Report Task**.
    
4.  In the **Create/Modify Report Task** panel, configure the parameters for the report task. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    The frequency at which the report task is run. Valid values:
    
    -   Only Once
        
    -   Weekly
        
    -   Monthly
        
    
    **Name**
    
    The name of the report task.
    
    **Description**
    
    The description of the report task.
    
    **Time Range**
    
    The time when a resource usage report is generated. Valid values:
    
    -   If you select **Only Once**, you can select a time range from 1 to 31 days to run the report task. A report is generated on the day after the specified end date. Only data of the last one month can be queried.
        
    -   If you select **Weekly**, you can select a time range from Monday to Sunday of each week to run the report task. A report is generated on the day after the specified end day.
        
    -   If you select **Monthly**, the report task is run from the first day to the last day of each month. A report is generated on the first day of the next month.
        
        **Note**
        
        If you select **Monthly**, you do not need to configure the **Time Range** parameter. Cloud Monitor automatically generates a resource usage report each month based on the report task.
        
    
    **Tag**
    
    The tags of the report task.
    
    You only need to specify a tag key. You do not need to specify a tag value. Cloud Monitor automatically generates a tag value and queries statistics based on the tag value. For example, a tag whose key is App and values are Group1 and Group2 is added to an Elastic Compute Service (ECS) instance. You only need to add the tag key App in a report task. Then, the generated resource usage report contains the following columns of data: `App:Group1` and `App:Group2`.
    
    You can specify up to three tags. Separate multiple tags with commas (,).
    
    **Product**
    
    The Alibaba Cloud services that are supported by the resource usage report feature.
    
5.  Click **Confirm**.
    
6.  In the **Confirm** message, click **Confirm**.
