If you want to query events that are generated more than 90 days ago in multiple regions, you can configure filtering conditions or SQL statements to perform custom event queries. This topic describes how to perform custom event queries in the ActionTrail console.

## Prerequisites

A trail is created, and events are delivered to Simple Log Service. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail) or [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail).

## Scenarios

You can perform custom event queries in simple query mode or SQL query mode. In simple query mode, you can query events in a visual manner. In SQL query mode, you can query events based on SQL statements that are converted from conditions in simple query mode.

**Mode**

**Query method**

**Description**

**Example**

Simple query

Single-condition query

You can query events by using filter conditions such as the service name, region, event name, account type, read/write type, resource name, resource type, and operator.

To query all events of Key Management Service (KMS) within a specific period of time, set **Service Name** to **Key Management Service (Kms)**.

Multi-condition query

You can specify multiple services or regions for one service to query events.

To query KMS events that are generated in the China (Hangzhou) and China (Shanghai) regions, set **Service Name** to **Key Management Service (Kms)** and **Region** to **China (Hangzhou)** and **China (Shanghai)**.

SQL query

Keyword-based query

You can enter a keyword in the text box based on your business requirements.

To query all write events, enter `* AND event.eventRW: Write` in the text box.

Single-condition query

You can specify a filter condition in the Who, What, Which, Where, or Other category to query events.

To query all events of KMS within a specific period of time, enter `* AND event.serviceName: Kms` in the text box.

Multi-condition query

You can specify multiple filter conditions in the Who, What, Which, Where, and Other categories to query events.

To query events that are generated for operations performed by User Alex in ActionTrail, enter `* AND event.serviceName: Actiontrail AND event.userIdentity.userName: Alex` in the text box.

NOT operator-based query

You can specify multiple filter conditions and change the operator in front of a filter condition that you want to exclude to NOT.

To query events that are generated for operations performed by all users except Alex in ActionTrail, enter `* AND event.serviceName: Actiontrail NOT event.userIdentity.userName: Alex` in the text box.

## Procedure

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Events** > **Advanced Event Query**.
    
3.  In the **Query Range** section, select the created trail from the **Trail** drop-down list.
    
4.  On the **Default** tab of the **Custom Template** page, configure query conditions.
    
    -   Simple query
        
        In **Simple Mode**, configure query conditions as prompted.
        
    -   SQL query
        
        Turn off **Simple Mode** and specify a SQL statement.
        
        **Note**
        
        -   For more information about the SQL syntax for advanced event queries and sample queries, see [SQL statements in advanced event queries](/help/en/actiontrail/user-guide/sql-statements-for-advanced-queries).
            
        -   If the simple query mode cannot meet your business requirements, use the SQL query mode. In this case, you can configure query conditions as prompted in **Simple Mode** and turn off **Simple Mode**. The configured query conditions in **Simple Mode** are automatically converted into an SQL statement. Then, you can configure a custom SQL statement.
            
        
5.  Specify a time range to query events and click **Run**.
    
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

-   You can use a system template to query events related to accounts or AccessKey pairs, best practices for network and data security, or resource lifecycle. For more information, see [Query events of an Alibaba Cloud account or an AccessKey pair](/help/en/actiontrail/user-guide/query-events-related-to-an-alibaba-cloud-account-or-an-accesskey-pair), [Query events related to network and data security best practices](/help/en/actiontrail/user-guide/querying-events-related-to-network-and-data-security-best-practices), and [Query resource lifecycle events](/help/en/actiontrail/user-guide/query-resource-lifecycle-events).
    
-   You can query events that are generated more than 90 days ago. For more information, see [Query events in the Simple Log Service or OSS console](/help/en/actiontrail/user-guide/query-events-in-the-log-service-or-oss-console).
