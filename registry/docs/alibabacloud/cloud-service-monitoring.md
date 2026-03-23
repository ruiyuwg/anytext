Cloud Monitor automatically retrieves the resources of cloud services that belong to the current Alibaba Cloud account. You can view the monitoring charts of each cloud service. You can also configure alert rules to monitor resources. If an alert is triggered based on the alert rules, Cloud Monitor sends an alert notification to you. This way, you are notified of the status of your resources at the earliest opportunity.

## Background information

The monitoring data that is displayed on the monitoring page varies with cloud services. For example, on the monitoring page of Server Load Balancer (SLB), you can view the instance list and monitoring charts. You can also configure alert rules.

## View the monitoring data

On the monitoring page of a cloud service, you can view the status of resources and the usage of metrics.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Cloud Service Monitoring**.
    
3.  On the **Cloud Service Monitoring** page, select a cloud service.
    
4.  On the monitoring page of the cloud service, click **Monitoring Charts** in the **Actions** column of a resource.
    
    On the page that appears, you can view the monitoring charts of the resource.
    
    **Note**
    
    When you query the monitoring data, make sure that you select a time range no longer than 30 days. Monitoring data is retained for at least 30 days, but data integrity cannot be guaranteed for the monitoring data that has been retained for more than 30 days.
    

## Configure an alert rule

On the monitoring page of a cloud service, you can configure alert rules for resources. When an alert is triggered based on the configured alert rules, Cloud Monitor sends an alert notification to you.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Cloud Service Monitoring**.
    
3.  On the **Cloud Service Monitoring** page, select a cloud service. Based on your requirements, you can configure alert rules for **Metric Monitoring** or **Quota Monitoring**.
    
    -   **Metric Monitoring**: Click the name of the target cloud service to go to the list page of the cloud service.
        
        1.  Click **Alert Rules** in the **Actions** column of the target resource.
            
        2.  On the **Alert Rules** page, click **Create Alert Rule**.
            
        3.  In the **Create Alert Rule** panel, configure parameters for the alert rule.
            
        4.  Click **Confirm**.
            
    -   **Quota Monitoring**: Click the name of the target cloud service to go to the list page of the cloud service. Based on your requirements, you can select alert rules for **General Quota** or **API Rate Limit** resources.
        
        1.  Click **Alert Rules** in the **Actions** column of the target resource, or click **Global Alert Rules** in the upper-right corner.
            
            **Note**
            
            Global Alert Rules: These are alert rules configured for all resource quotas of the target cloud service.
            
        2.  Click **Create Alert Rule** and configure parameters for the alert rule.
            
        3.  Click **Confirm**.
            
    
    **Note**
    
    For more information about how to configure parameters for an alert rule, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule#task-1920117).
    

## View alert rules

On the monitoring page of a cloud service, you can view all alert rules that are configured for resources.

1.  Log on to the [Cloud Monitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Cloud Resource Monitoring** > **Cloud Service Monitoring**.
    
3.  On the **Cloud Service Monitoring** page, select a cloud service. You can choose to view alert rules for **Metric Monitoring** or **Quota Monitoring**. Click the name of the target cloud service to go to the list page of the cloud service.
    
4.  On the list page of the cloud service, click **Alert Rules** in the **Actions** column of the target cloud service resource instance.
    

## References

[Cloud service metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491)

[Quota monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/quota-monitoring)
