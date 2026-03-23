After you create a trail, you can deliver only events that are generated after the trail is created. If you want to query and analyze the events that are generated before the trail is created, you can create a data backfill task to deliver events that are generated within the last 90 days. This topic describes how to create a data backfill task in the ActionTrail console.

## Prerequisites

-   The permissions to use the backfill feature is obtained. To obtain the permissions to use the backfill feature, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) or ask your sales manager to add your account to the whitelist of users who can use the backfill feature.
    
-   A trail is created in the current region. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail#task-2418644).
    

## Limits

-   Events can be delivered only to Simple Log Service.
    
-   Only one data backfill task can be run at a time within an Alibaba Cloud account.
    

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Backfill**.
    
3.  In the top navigation bar, select the region where you want to create a data backfill task.
    
    **Note**
    
    This region must be the same as the region where the trail resides.
    
4.  On the **Backfill** page, click **Create Task**.
    
5.  On the **Create Task** page, select the trail for which you want to create a data backfill task.
    
    **Note**
    
    After you select the trail, the following information is automatically entered: the region from which the trail delivers events, the region where the Simple Log Service project resides, the name of the Simple Log Service project, and the information about the Simple Log Service Logstore.
    
6.  Click **Confirm**.
    
    After you create a task, you can view the trail, the time range of the historical events that can be delivered, the delivery status, the time when the task is created, and the time when the task is complete on the **Data Backup** page.
    
    **Note**
    
    -   A data backfill task delivers only the events whose type and region are the same as those you specified when you created the trail. For example, Trail A is created and used to collect the write events generated in the China (Hangzhou) region, and a data backfill task that is associated with Trail A is created. In this case, the data backfill task can be used to deliver the write events that are generated in the China (Hangzhou) region in the last 90 days to the specified delivery destination.
        
    -   A data backfill task delivers only the events that are generated in the time range from 90 days before the current time to 5 minutes after the trail that is associated with the task takes effect. For example, you create Trail A 40 days before you create a data backfill task that is associated with Trail A. In this case, the task delivers only the events that are generated in the last 50 days before Trail A is created.
        
    

## What to do next

After the data backfill task is created, events are stored in the JSON format in the Simple Log Service Logstore that is configured for your trail. You can query and analyze the events in the Logstore. For more information about how to view and analyze events in Simple Log Service, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis).

## References

-   You can query and download the events of the last 90 days in the ActionTrail console. For more information, see [Query events in the ActionTrail console](/help/en/actiontrail/user-guide/query-events-in-the-actiontrail-console).
    
-   You can download the results of event query or analysis to your on-premises computer in the Simple Log Service console. For more information, see [Download logs](/help/en/sls/download-logs).
