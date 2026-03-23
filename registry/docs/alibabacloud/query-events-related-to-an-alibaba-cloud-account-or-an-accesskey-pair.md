If you want to query the events of an Alibaba Cloud account or an AccessKey pair, you can use the system templates provided by the advanced event query feature of ActionTrail. The system templates include Events of Console Logons by Using Alibaba Cloud Account, Events of Access by Using AccessKey Pair of Alibaba Cloud Account, Events of Logons by Using RAM User without MFA, and Events of Failed Access by Using AccessKey Pair. This topic describes how to use a system template to query the details of console logon events by using an Alibaba Cloud account.

## Prerequisites

A trail is created, and events are delivered to Simple Log Service. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail) and [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail).

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Events** > **Advanced Event Query**.
    
3.  In the **Query Range** section, select the created trail from the **Trail** drop-down list.
    
4.  In the **Query Range** pane, click the **Template Library** tab and choose **System Template** > **Account-related or AccessKey Pair-related Events** > **Events of Console Logons by Using Alibaba Cloud Account**.
    
5.  On the **Events of Console Logons by Using Alibaba Cloud Account** tab, specify a time range to query events and click **Run**.
    
    **Note**
    
    -   By default, ActionTrail queries the events within seven days.
        
    -   You can click **Event Alert** on the right side of the tab to configure an alert for the current event. For more information, see [Create a custom alert rule](/help/en/actiontrail/user-guide/create-a-custom-alert-rule#task-2116011).
        
    -   You can modify the default SQL statement in the system template and click **Save** to save the template as a custom template for reuse in subsequent tasks.
        
    
6.  View the query results.
    
    -   Raw log
        
        On the **Raw Log** tab, find the event that you want to view and click **View Event Details** in the **Actions** column to view the basic information and JSON format of the event.
        
    -   Histogram
        
        On the **Query Histogram** tab, view the histograms of events.
        

## **References**

You can configure query conditions or SQL statements to query event details. For more information, see [Perform custom event queries](/help/en/actiontrail/user-guide/perform-advanced-event-queries-in-the-actiontrail-console).
