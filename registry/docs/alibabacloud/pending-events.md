PolarDB-X 1.0 allows you to manage pending events. If pending events occur, the system uses emails, messages in the console, or SMS messages to notify you to handle the events in a timely manner. This topic describes how to use the console to view and handle pending events.

## Background information

PolarDB-X 1.0 pending events are divided into the following types:

-   Operations and maintenance (O&M) events: For O&M events such as modifications of network settings, you can schedule the operation time. The O&M system automatically performs the operation at the scheduled time.
-   Notification events: For notification events such as version upgrades, you must manually handle the events after you receive the corresponding messages.

## Procedure

1.  Log on to the [PolarDB for Xscale console](https://drds.console.alibabacloud.com/).
2.  In the left-side navigation pane, click Pending Events.
    
    **Note** If the Pending Events page does not list events, no pending O&M events need to be handled for your instances.
    
3.  On the Pending Events page, click the tab based on the event type and select the region where your instances are deployed. In the section that lists the instances, you can view the details of the pending events.
    
    -   If you do not specify the operation time for an O&M event, the system automatically performs the corresponding O&M operation at the default time.
        
        To change the operation time, perform the following steps:
        
        1.  On the Pending Events page, select the instance for which you want to change the operation time.
        2.  Click Custom Operation Time. In the dialog box that appears, specify the operation time.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8651810061/p149164.png)
        3.  Click Confirm.
        
    -   You must manually handle notification events. After you handle a notification event, log on to the console to confirm that the event is not displayed on the Pending Events page.
        
        **Note** To view the events that have been handled, log on to the console. Then, in the left-side navigation pane, click Historical Events.
