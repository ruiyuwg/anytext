This topic describes how to view audit logs on ApsaraDB for MongoDB.

## Prerequisites

Before the official launch of the audit log feature, the free trial edition was activated for the instance.

**Note** Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and new applications for the free trial edition have ended. For more information, see [\[Notice\] On official launch of the pay-as-you-go audit log feature and no more application for the free trial edition](/help/en/mongodb/product-overview/notice-official-launch-of-the-pay-as-you-go-audit-log-feature-and-end-of-application-for-the-free-trial-edition#concept-2001907).

## View audit logs

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances** based on the instance type.
    
3.  In the upper-left corner of the page, select the resource group and region to which the instance belongs.
    
4.  Click the ID of an instance, or click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the **Actions** column corresponding to the instance and select **Manage**.
    
5.  In the left-side navigation pane of the instance details page, choose **Data Security** > **Audit Logs**.
    
6.  On the **Mongo audit log center** page, query the details of audit logs. By default, the audit logs of **15 minutes (relative)** are displayed.
    
    You can click **Refresh** in the upper-right corner of the **Mongo audit log center** page to set the refresh frequency of audit logs.
    
    -   **Once**
        
        Specifies to immediately refresh audit logs.
        
    -   **Auto Refresh**
        
        Specifies to refresh audit logs every **15 seconds**, **60 seconds**, **5 minutes**, or **15 minutes**.
        
        **Note**
        
        If you do not want to use the auto-refresh interval specified by this parameter, choose **Refresh** > **Close** to clear the current parameter setting, and then reset this parameter.
        
    

## FAQ

Why do I view only 2,000 audit log entries?

The **Mongo audit log center** page of the ApsaraDB for MongoDB console displays a maximum of 2,000 audit log entries. To view more audit log entries, log on to the [Log Service console](https://sls.console.alibabacloud.com). For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).
