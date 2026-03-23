This topic describes how to change the storage period of metric data for pay-as-you-go and subscription Managed Service for Prometheus instances, respectively.

## Pay-as-you-go

The default storage duration of metric data is 90 days. To store data for a longer period, go to the **Storage Duration** tab and modify the **Storage Duration** parameter. To do this, perform the following steps.

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home)
    
2.  In the navigation pane on the left, click **Integration Management**.
    
3.  On the **Integrated Environments** tab, select the target environment.
    
4.  On the page for the target environment, click the name of a Prometheus instance.
    
5.  Click the **Storage Duration** tab and change the storage period. Then, click **Save**.
    

## Subscription

For subscription instances, you can adjust the metric storage duration by changing the instance specifications. The procedure is as follows:

1.  Log on to the [Managed Service for Prometheus console](https://cloudmonitor.console.alibabacloud.com/prom/instances/#/home).
    
2.  On the **Instances** page, select a region from the top menu bar and find the target instance. In the **Actions** column, choose **Service Change** > **Upgrade Configurations**. On the subscription page, select a new storage duration.
    

## **Reference**

[Instance billing](/help/en/prometheus/product-overview/billing-description/)
