This topic describes how to use ActionTrail's system templates to retrieve and view log information about network and data security events.

## Prerequisites

Make sure that you have created a trail and delivered events to Simple Log Service (SLS). For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail) and [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail).

## Background information

Following network and data security best practices lets you continuously and dynamically monitor your Alibaba Cloud resources, obtain real-time information about their security and compliance status, and effectively reduce network security risks.

To help you detect high-risk actions, ActionTrail provides multiple query templates that are based on network and data security best practices. You can use the advanced event query feature to quickly use these templates to monitor and audit high-risk access events. The supported events include trail changes, audit trail stops, RAM role changes, and the disabling of Cloud Firewall.

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Events** > **Advanced Event Query**.
    
3.  In the **Query Range** section, select the created trail from the **Trail** drop-down list.
    
4.  On the **Template Library** tab in the **Query Range** section, choose **System Template** > **Network/Data Security Protection Events** > **Trail Change Events**.
    
5.  On the **Trail Change Events** tab, specify a time range to query events and click **Run**.
    
    **Note**
    
    -   By default, ActionTrail queries the events within seven days.
        
    -   You can click **Event Alert** on the right side of the tab to configure an alert for the current event. For more information, see [Create a custom alert rule](/help/en/actiontrail/user-guide/create-a-custom-alert-rule#task-2116011).
        
    -   You can modify the default SQL statement in the system template and click **Save** to save the template as a custom template for reuse in subsequent tasks.
        
    
6.  View the query results.
    
    -   Raw Log
        
        On the **Raw Log** tab, find the event that you want to view and click **View Event Details** in the **Actions** column. Then, you can view the basic information about the event and the event records.
        
        **Note**
        
        In this example, the View Event Details panel shows that a Resource Access Management (RAM) user enabled the trail at 11:06:40 on January 10, 2024 in the China (Zhangjiakou) region.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8598829071/p757583.png)
        
    -   Query Histogram
        
        On the **Query Histogram** tab, view the histograms of events.
        

## **References**

You can also query event details by setting filter conditions or specifying SQL statements. For more information, see [Perform custom event queries](/help/en/actiontrail/user-guide/perform-advanced-event-queries-in-the-actiontrail-console).
