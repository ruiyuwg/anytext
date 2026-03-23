To query and analyze the key status changes and operations of various resources throughout their lifecycle, you can use the system templates provided by the advanced event query feature in ActionTrail. The system templates include Create Events and Delete Events for Web Application Firewall (WAF), Delete Events for certificates of Key Management Service (KMS), and Create Events and Delete Events for Resource Access Management (RAM) roles. This topic describes how to query the details of a key creation event of KMS by using ActionTrail.

## Prerequisites

A trail is created, and events are delivered to Simple Log Service. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail) and [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail).

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Events** > **Advanced Event Query**.
    
3.  In the **Query Range** section, select the created trail from the **Trail** drop-down list.
    
4.  On the **Template Library** tab in the **Query Range** section, choose **System Template** > **Resource Lifecycle-related Events** > **Key Management Service** > **Kms Key** > **Create Events**.
    
    **Note**
    
    You can configure up to 30 query conditions at a time.
    
5.  On the **Resource Lifecycle-related Events** tab, specify a time range to query events and click **Run**.
    
    **Note**
    
    -   By default, ActionTrail queries the events within seven days.
        
    -   You can click **Event Alert** on the right side of the tab to configure an alert for the current event. For more information, see [Create a custom alert rule](/help/en/actiontrail/user-guide/create-a-custom-alert-rule#task-2116011).
        
    -   You can modify the default SQL statement in the system template and click **Save** to save the template as a custom template for reuse in subsequent tasks.
        
    
6.  View the query results.
    
    -   Raw Log
        
        On the **Raw Log** tab, find the event that you want to view and click **View Event Details** in the **Actions** column.
        
        **Note**
        
        The View Event Details panel shows that a RAM user created a key at 15:35:58 on January 16, 2024 in the China (Hangzhou) region.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4076159071/p759866.png)
        
    -   Query Histogram
        
        On the **Query Histogram** tab, view the histograms of events.
        

## **References**

You can configure query conditions or SQL statements to query event details. For more information, see [Perform custom event queries](/help/en/actiontrail/user-guide/perform-advanced-event-queries-in-the-actiontrail-console).
