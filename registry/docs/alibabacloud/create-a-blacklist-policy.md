Cloud Monitor blocks alert notifications based on the blacklist policy that you configure. To block alert notifications when the value of a metric that belongs to a cloud service reaches the threshold that you specify, add the metric to a blacklist policy.

## Background information

Cloud Monitor allows you to create blacklist policies only based on threshold metrics. You cannot create blacklist policies based on system events. For more information about the cloud services and the thresholds of the metrics that are supported by Cloud Monitor, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

## **Create a blacklist policy**

**Prerequisites**: A threshold-based alert rule is created. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-2093449).

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Blacklists**.
    
3.  On the **Alert Blacklists** page, click **Create Blacklist Policy**.
    
4.  In the **Create Blacklist Policy** panel, configure parameters of the blacklist policy. The following table describes the parameters.
    
    Table 1. Parameters of a blacklist policy
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the blacklist policy.
    
    **Product**
    
    The name of the cloud service.
    
    **Associated Resources**
    
    The resources that are associated with the specified cloud service.
    
    **Metrics**
    
    The metrics that are used to monitor the specified resources.
    
    -   If you select a metric, the blacklist policy takes effect only on the selected metric.
        
    -   If you do not select a metric, the blacklist policy takes effect on all metrics.
        
    
    **Effective Scope**
    
    The effective scope of the blacklist policy. Valid values:
    
    -   **User**: The blacklist policy takes effect only within the current Alibaba Cloud account.
        
    -   **Group**: The blacklist policy takes effect only within the specified application groups. If you select this option, you must specify one or more application groups.
        
        Make sure that one or more application groups are created. For more information, see [Create an application group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-application-group#task-2000412).
        
    
    **Effective Period**
    
    The time range within which the blacklist policy is effective.
    
    -   If you select **Specify Time Range**, you must specify the time range type and a time range. The blacklist policy is effective only within the specified time range. Valid values of **Time Range Type**:
        
        -   **Absolute Time Range**: The blacklist policy is effective only within the time range that you specify. You must specify the start time and end time of the time range.
            
        -   **Relative Time Range (Daily Cycle)**: The blacklist policy is effective within the specified time range every day. You can also specify the start date and end date of a date range within which the blacklist policy is effective.
            
    -   If you select **Permanent**, the blacklist policy is permanently effective.
        
    
    **Note**
    
    You can specify only one time range for each blacklist policy. If you want blacklist policies to be effective within multiple time ranges, you must create multiple blacklist policies and specify different time ranges for the blacklist policies.
    
5.  Click **OK**.
    

## Modify a blacklist policy

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Blacklists**.
    
3.  On the **Alert Blacklists** page, find the blacklist policy that you want to modify and click **Edit** in the **Actions** column.
    
4.  In the **Edit Blacklist Policy** panel, modify the parameters of the blacklist policy. The following table describes the parameters.
    
    For more information about how to configure a blacklist policy, see [Parameters of a blacklist policy](#f4251d40311r6).
    
5.  Click **OK**.
    

## Disable a blacklist policy

You can disable only the blacklist policies that are in the Enabled state. After you disable a blacklist policy, the blacklist policy no longer takes effect.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Blacklists**.
    
3.  On the **Alert Blacklists** page, find the blacklist policy that you want to disable and click **Disable** in the **Actions** column.
    
4.  In the message that appears, click **Confirm**.
    

## Enable a blacklist policy

You can enable only the blacklist policies that are in the Disabled state. After you enable a blacklist policy, the blacklist policy takes effect again.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Blacklists**.
    
3.  On the **Alert Blacklists** page, find the blacklist policy that you want to enable and click **Enable** in the **Actions** column.
    
4.  In the message that appears, click **Confirm**.
    

## Delete a blacklist policy

After a blacklist policy is deleted, alert notifications are no longer blocked based on the blacklist policy. If an alert is triggered, notifications are sent based on the alert rule.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Alerts** > **Alert Blacklists**.
    
3.  On the **Alert Blacklists** page, find the blacklist policy that you want to delete and click **Delete** in the **Actions** column.
    
4.  In the **Confirm deletion** message, click **Delete**.
