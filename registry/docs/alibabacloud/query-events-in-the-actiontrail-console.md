By default, ActionTrail records the events that are generated within your Alibaba Cloud account in the last 90 days. This topic describes how to query events in the ActionTrail console.

## limits

-   In the ActionTrail console, you can query only the events that are delivered by single-account trails. You can perform queries at most twice per second. You cannot query the events that are delivered by multi-account trails in the ActionTrail console. To query such events, go to the required Object Storage Service (OSS) bucket or Simple Log Service Logstore. For more information, see [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail#section-wru-sgc-0go).
    
-   You can use the event query feature to query only the events that are generated in the current region in the last 90 days.
    
    -   To query the events that were generated in the current region 90 days ago, you must create a single-account trail to deliver the events to OSS or Simple Log Service. Otherwise, you cannot query the events that were generated 90 days ago. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail#task-2418644).
        
    -   To query the events that were generated in multiple regions 90 days ago or filter and query events based on multiple conditions, you can use the advanced event query feature. For more information, see [Perform custom event queries](/help/en/actiontrail/user-guide/perform-advanced-event-queries-in-the-actiontrail-console#task-2041634).
        
-   After an event is generated within your Alibaba Cloud account, you must wait 10 minutes before you can query the event in the ActionTrail console.
    

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Events** > **Event Query**.
    
3.  In the top navigation bar, select the region of the event that you want to query from the drop-down list.
    
4.  On the **Event Detail Query** page, enter query conditions, specify a time range, and then click the ![查询按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9854518661/p282855.png) icon.
    
    **Note**
    
    -   You can configure the following query conditions to query events: Read/Write Type, Operator, Service Name, Event Name, Resource Type, Resource Name, AccessKey ID, Sensitive Operation, and Event ID.
        
    -   You can query global events only in the **Singapore** region.
        
    
5.  Find the event that you want to query and click **View Event Details** in the Actions column to view the event details and event code.
    
    **Note**
    
    For more information about event fields, see [Management event structure](/help/en/actiontrail/user-guide/management-event-structure#concept-28819-zh).
