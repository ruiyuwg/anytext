You can enable the initiative alert feature or create custom alert rules. When a condition specified for an alert rule is met, the system sends alert notifications to all alert contacts in your alert contact group.

## Background information

The monitoring and alerting feature of ApsaraDB RDS is implemented by using CloudMonitor. CloudMonitor allows you to configure metrics and alert rules. When a condition specified for an alert rule is met, CloudMonitor sends alert notifications to all alert contacts in your alert contact group by sending emails. You can manage the alert contact group. When an alert is triggered, the system can notify alert contacts in the alert contact group at the earliest opportunity.

## Method 1: Enable the initiative alert feature

If you turn on Initiative Alert, an alerting mechanism is quickly created for your RDS instance. This allows you to obtain the exceptions of key metrics at the earliest opportunity.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Monitoring and Alerts**.
    
3.  On the page that appears, click the **Alerts** tab. Then, turn on **Initiative Alert**.
    
    The metrics and alert rules displayed on the page prevail.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1024934471/p747568.png)
    

## Method 2: Create a custom alert rule

Aftrer you call the custom monitoring operation to report metrics, you can configure [alert rules](https://cloudmonitor.console.alibabacloud.com/alert-onekey) for custom metrics. If the value of a metric reaches the specified threshold, alert notifications are sent by using the specified method. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).

## Manage an alert rule

After you create an alert rule, you can modify, disable, enable, or delete the alert rule. You can also view the historical alerts and handle exceptions at the earliest opportunity. For more information, see [Manage alert rules](/help/en/cms/cloudmonitor-1-0/user-guide/modify-an-alert-rule).
