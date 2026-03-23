To ensure the stability of AnalyticDB for MySQL clusters, the backend system of AnalyticDB for MySQL maintains clusters at irregular intervals. We recommend that you set the maintenance window to the off-peak hours of your business to avoid impacts on your business.

## Precautions

-   Before the maintenance starts, AnalyticDB for MySQL clusters send SMS messages or emails to notify the contacts that are specified for your Alibaba Cloud account.
-   During the maintenance window, you can access databases, manage accounts and databases, and configure IP address whitelists for clusters.
-   During the maintenance window, network jitters may occur and affect your write and query operations. Make sure that your applications are configured with automatic reconnection policies.
-   During the maintenance window, clusters may experience connectivity issues. Make sure that your applications are configured with automatic reconnection policies.

## Procedure

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/).
2.  In the upper-left corner of the page, select the region where the cluster resides.
3.  In the left-side navigation pane, click Clusters.
4.  Click the Data Warehouse Edition (V3.0) tab.
5.  Find the cluster and click its Cluster ID.
6.  In the Configuration Information section of the Cluster Information page, click the ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8677105261/p279170.png) icon next to Maintenance Window.
7.  Select a maintenance window and click OK.
    
    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6763584261/p279172.png)
    
    **Note** The maintenance window is displayed in UTC+8. The default maintenance window is from 10:00 to 11:00 for Data Lakehouse Edition (V3.0) clusters and from 12:00 to 13:00 for Data Warehouse Edition (V3.0) clusters.
