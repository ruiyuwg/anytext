ActionTrail allows you to monitor and record events that are generated within your Alibaba Cloud account. If you want to query events that are generated 90 days ago, you must create a trail in advance to deliver events to Simple Log Service, Object Storage Service (OSS), or MaxCompute. You can also create a data backfill task to deliver events of the last 90 days to Simple Log Service for long-term storage. This topic describes how to query the details of an event in ActionTrail.

## Prerequisites

-   Simple Log Service, OSS, or MaxCompute is activated. For more information, see [Activate Simple Log Service](/help/en/sls/getting-started#section-j4p-xt3-arc), [Activate OSS](/help/en/oss/user-guide/console-quick-start#23ea35a057g4k), and [Activate MaxCompute](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks).
    
    **Note**
    
    You are not charged for activating Simple Log Service, OSS, or MaxCompute. You are charged for storing events in Simple Log Service, OSS, or MaxCompute and using the query and analysis feature. For more information, see [Billing overview](/help/en/sls/billing-overview#concept-2086667), [Billing overview](/help/en/oss/billing-overview), and [Overview](/help/en/maxcompute/product-overview/overview-31).
    
-   The permissions to use the backfill feature are obtained. To obtain the permissions, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    

## **Step 1: Create a trail**

This section describes how to create a single-account trail to deliver events to Simple Log Service.

**Note**

You can also create a multi-account trail or create a single-account trail to deliver events to OSS or MaxCompute. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail#task-2418644) and [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail#task-2462362).

1.  Log on to the [ActionTrail console](https://actiontrail.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Trails**.
    
3.  In the top navigation bar, select the region where you want to create a single-account trail.
    
    **Note**
    
    The region that you select is the home region of the trail that you want to create.
    
4.  On the **Trails** page, click **Create Trail**.
    
5.  On the **Create Trail** page, configure parameters.
    
    -   In the **Basic Information** section, configure the basic information about the trail.
        
        **Note**
        
        By default, the trail delivers events in all regions. We recommend that you set **Management Event** to **All**. This way, the trail delivers all types of events that occur in all regions. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail#task-2418644).
        
    -   In the **Event Delivery** section, configure parameters to deliver events to Simple Log Service within the current Alibaba Cloud account.
        
        **Parameter**
        
        **Description**
        
        **Logstore Region**
        
        The region where the Logstore resides.
        
        **Project Name**
        
        The name of the project.
        
        **Note**
        
        The project name is shared by all Alibaba Cloud users and must be unique.
        
        -   If you select **New Log Service Project**, the system automatically creates a project. You must specify a name for the project. The system also automatically creates a Logstore for the project.
            
        -   If you select **Existing Log Service Project**, you must select an existing project from the Project Name drop-down list.
            
            For more information about how to create a project in Simple Log Service, see [Getting Started](/help/en/sls/getting-started#concept-gpw-x2w-ydb).
            
        
    
6.  Click **Confirm**.
    

## **Step 2:** (Optional) Create a data backfill task

You can create a trail to deliver only events that are generated after the trail is created. If you want to store events that are generated within the last 90 days, you must create a data backfill task to deliver events that are generated within the last 90 days.

**Note**

To use the backfill feature, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).

For more information about the backfill feature, see [Create a data backfill task](/help/en/actiontrail/user-guide/create-a-historical-event-delivery-task#task-2035471).

1.  In the left-side navigation pane, click **Backfill**.
    
2.  In the top navigation bar, select the region where you want to create a data backfill task.
    
    **Note**
    
    The region that you select must be the same as the region where the associated trail is created.
    
3.  On the **Backfill** page, click **Create Task**.
    
4.  On the **Create Task** page, select the trail for which you want to create a data backfill task.
    
    **Note**
    
    After you select the trail, the following information is automatically entered: the region from which the trail delivers events, the region where the Simple Log Service project resides, the name of the Simple Log Service project, and the information about the Simple Log Service Logstore.
    
5.  In the message that appears, click **Confirm**.
    
    After you create a data backfill task, you can view the associated trail, the historical events that can be delivered, the delivery status, the time when the task is created, and the time when the task is complete on the **Backfill** page.
    

## **Step 3: Query events by using the advanced event query feature**

1.  In the left-side navigation pane, click **Trails**.
    
2.  On the **Trails** page, find the required trail and turn on the switch in the **Advanced Event Query** column.
    
3.  On the **Default** tab of the **Custom Template** page, configure query conditions.
    
    -   Simple query
        
        In **Simple Mode**, configure query conditions as prompted.
        
    -   SQL query
        
        Turn off **Simple Mode** and specify a SQL statement.
        
        **Note**
        
        -   For more information about the SQL syntax for advanced event queries and sample queries, see [SQL statements in advanced event queries](/help/en/actiontrail/user-guide/sql-statements-for-advanced-queries).
            
        -   If the simple query mode cannot meet your business requirements, use the SQL query mode. In this case, you can configure query conditions as prompted in **Simple Mode** and turn off **Simple Mode**. The configured query conditions in **Simple Mode** are automatically converted into an SQL statement. Then, you can configure a custom SQL statement.
            
        
4.  Specify a time range to query events and click **Run**.
    
    **Note**
    
    -   By default, ActionTrail queries the events within seven days.
        
    -   You can click **Event Alert** on the right side of the tab to configure an alert for the current event. For more information, see [Create a custom alert rule](/help/en/actiontrail/user-guide/create-a-custom-alert-rule#task-2116011).
        
    -   You can modify the default SQL statement in the system template and click **Save** to save the template as a custom template for reuse in subsequent tasks.
        
    
5.  View the query results.
    
    -   Raw log
        
        On the **Raw Log** tab, find the event that you want to view and click **View Event Details** in the **Actions** column to view the basic information and JSON format of the event.
        
    -   Histogram
        
        On the **Query Histogram** tab, view the histograms of events.
        

## What to do next

After you create a trail to deliver events to Simple Log Service, OSS, or MaxCompute, you can query and analyze the events in the Simple Log Service, OSS, or MaxCompute console. For more information, see the following topics:

-   [Query events in the Simple Log Service or OSS console](/help/en/actiontrail/user-guide/query-events-in-the-log-service-or-oss-console#task-2407107)
    
-   [Use Simple Log Service to analyze events](/help/en/actiontrail/use-cases/use-log-service-to-analyze-events#task-1957352)
    
-   [Import data from OSS to Log Service](/help/en/sls/import-data-from-oss-to-log-service)
    
-   [DataWorks](/help/en/maxcompute/user-guide/query-editor-in-the-maxcompute-console)
    

## **References**

-   For more information about how to query and analyze event details, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis).
    
-   For more information about how to download events to your on-premises computer for analysis, see [Download events](/help/en/actiontrail/use-cases/download-actiontrail-events).
    
-   When you query and analyze events, errors may occur. For more information, see [FAQ about query and analysis](/help/en/sls/user-guide/faq-about-query-and-analysis).
