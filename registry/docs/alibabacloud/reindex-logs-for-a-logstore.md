Simple Log Service provides the reindexing feature that you can use to configure or modify indexes for historical data. You can reindex the logs of a specified time range in a Logstore based on the most recent indexing rules. This topic describes how to reindex data in the Simple Log Service console.

## Prerequisites

The indexing feature is enabled. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).

## Limits

-   You can reindex only the data that is generated within 15 minutes to 30 days earlier than the current time.
    
-   You can create up to 10 reindexing tasks.
    
-   Only one reindexing task can run at a time.
    

## Billing

-   If the current Logstore uses the pay-by-ingested-data billing mode, you are not charged for reindexing data. For more information, see [Pay-by-ingested-data](/help/en/sls/billing-per-amount-of-data-written#main-2351526).
    
-   If the current Logstore uses the pay-by-feature billing mode, you are charged for reindexing data based on the index traffic and storage. Index traffic fees are generated only once, and storage fees are generated on an hourly basis. The unit prices of the billable items are the same regardless of whether you create indexes or reindex data. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   After you delete a reindexing task, the new indexes are also deleted. You are no longer charged for storing the indexes.
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  In the left-side navigation pane, click **Log Storage**. In the **Logstores** list, click the Logstore that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5148375171/p768903.png)
    
4.  Choose **Index Attributes** > **Recreate**.
    
    ![重建索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8020753561/p439140.png)
    
5.  In the **Reindex** panel, click **Create Task**.
    
6.  Configure the **Task Name**, **Start At**, and **End Time** parameters based on your business requirements. Then, click **OK**.
    
    The **Start At** and **End Time** parameters specify the time range of data to reindex. The time values specify when Simple Log Service receives the data. The start time and end time must be within 15 minutes to 30 days earlier than the current time.
    
    After you create the task, you can view the reindexing progress. When the progress reaches 100%, the reindexing task is complete. If the progress is always 0%, click **Refresh** in the upper-right corner of the **Reindex** panel.
    
    **Important**
    
    If historical data already has indexes, the new indexes overwrite the original indexes.
    

## What to do next

After you create a reindexing task, you can perform the following operations:

-   Stop the reindexing task.
    
    In the **Reindex** panel, click **Stop** to stop the reindexing task.
    
    **Warning**
    
    After you stop a reindexing task, you can delete the task but cannot start it again. Proceed with caution.
    
-   Delete the reindexing task.
    
    In the **Reindex** panel, click **Delete** to delete the reindexing task.
    
    **Warning**
    
    After you delete a reindexing task, the new indexes are also deleted. Proceed with caution.
