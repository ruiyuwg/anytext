By default, ActionTrail records the events that are generated within your Alibaba Cloud account in the last 90 days. To query events that are generated more than 90 days ago, you must create a trail to deliver events to Simple Log Service or Object Storage Service (OSS) in advance. Then, you can log on to the Simple Log Service console or OSS console to query the delivered events.

## **Prerequisites**

A trail is created, and events are delivered to Simple Log Service or OSS. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail#task-2418644) and [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail#section-wru-sgc-0go).

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Trails**.
    
3.  On the **Trails** page, find the trail that you created, move the pointer over the information in the **Storage Service** column, and then click the name of the Simple Log Service Logstore or OSS bucket.
    
    -   Query events in the Simple Log Service console: Click the name of the Simple Log Service Logstore to query or analyze the events that are delivered to the Logstore in the Simple Log Service console.
        
    -   Query events in the OSS console: Click the name of the OSS bucket. Then, choose **Object Management** > **Objects**. Find the event storage path and download the events to your computer for analysis. For more information, see [What is the storage path of an event that is delivered to an OSS bucket?](/help/en/actiontrail/support/what-is-the-storage-path-of-an-event-that-is-delivered-to-an-oss-bucket).
        
    
    **Note**
    
    If you want to query and analyze the events that are delivered to an OSS bucket, you can import the events from the OSS bucket to Simple Log Service for query and analysis. For more information, see [Import data from OSS to Simple Log Service](/help/en/sls/import-data-from-oss-to-log-service) and [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis).
    

## **References**

-   [Use Simple Log Service to analyze events](/help/en/actiontrail/use-cases/use-log-service-to-analyze-events)
    
-   [Can I view global events in every region after I create a trail and specify an OSS bucket for event delivery?](/help/en/actiontrail/support/can-i-view-global-events-in-every-region-after-i-create-a-trail-and-specify-an-oss-bucket-for-event-delivery)
    
-   [What is the storage path of an event that is delivered to an OSS bucket?](/help/en/actiontrail/support/what-is-the-storage-path-of-an-event-that-is-delivered-to-an-oss-bucket)
    
-   [How can I use SQL statements to query ActionTrail events delivered to Simple Log Service?](/help/en/actiontrail/support/how-can-i-use-sql-statements-to-query-actiontrail-events-delivered-to-log-service)
