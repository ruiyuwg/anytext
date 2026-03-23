After you configure check items, DataWorks inspects events triggered by the check items within the current account. On the Workbench page of DataWorks, you can view the total number of check events, the number and ratio of events that fail checks, and the number and ratio of data development processes that are blocked. This helps you discover and handle check events at the earliest opportunity. This topic describes how to view and handle check events.

## Prerequisites

Check items are configured. For more information, see [Configure check items](/help/en/dataworks/user-guide/configuration-check-items).

## Background information

-   Check items are used to check nodes for violations against constraints before nodes are committed and deployed. This helps you reduce governance issues detected after data development. A check event is an event triggered by a check item.
    
-   DataWorks detects governance issues that are to be handled based on the governance items after nodes are committed and deployed. The health score is calculated based on the health assessment model provided by DataWorks and shows the governance grade of the current account. For more information about the health score, see [Quantitative assessment: health scores](/help/en/dataworks/user-guide/data-asset-governance/#0e82faf43bd96).
    
-   Data Asset Governance allows you to view check events from different dimensions, including **Global**, **Workspace**, and **Individual**.
    

## **Required permissions**

-   To view check events from the **Global** dimension, you must have one of the following permissions:
    
    -   An Alibaba Cloud account
        
    -   A Resource Access Management (RAM) user who has the `AliyunDataWorksfullAccess` policy
        
    -   A tenant administrator
        
    -   A tenant-level data governance administrator
        
-   To view check events from the **Workspace** dimension, you must have one of the following permissions:
    
    -   An Alibaba Cloud account
        
    -   A RAM user who has the `AliyunDataWorksfullAccess` policy
        
    -   A workspace administrator
        
    -   A tenant administrator
        
    -   A tenant-level data governance administrator
        
    -   A workspace-level data governance administrator
        
-   Other users can view check events only from the **Individual** dimension.
    

## **Usage notes**

Data Asset Governance allows you to handle check events of only MaxCompute, E-MapReduce (EMR), and Hologres data sources. For information about the types of data sources to which each check item can apply, check the **Range** column on each tab of the Knowledge page. For more information, see [Knowledge base](/help/en/dataworks/user-guide/system-settings).

**Note**

-   Before you can use a Hologres data source in Data Asset Governance, you must first collect metadata of Hologres in Data Map. For more information, see [Metadata collection](/help/en/dataworks/user-guide/metadata-collection/).
    
-   Hologres data sources are supported by Data Asset Governance only in the following regions: China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen).
    

## **View and handle check events**

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **Governance** > **Check Event**. The **Check Event** page appears.
    
3.  View and handle check events.
    
    On the **Check Event** page, you can view the statistics and details of check events within the current account from the **global**, **individual**, and **workspace** dimensions. You can also view the check events that block the subsequent data development processes and handle such events at the earliest opportunity. The following figure shows the check events on the **Check Event** page from the global dimension. The following table describes the sections on the Check Event page.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4971725371/p867633.png)
    
    **Section**
    
    **Description**
    
    ①
    
    In this section, you can select a dimension to view check events.
    
    -   **Global**: displays the check events of all DataWorks workspaces of the specified tenant.
        
    -   **Workspace**: displays the check events of the workspace of which the current account is the administrator. From this dimension, you can select a workspace from the **Workspace** drop-down list.
        
    -   **Individual**: displays the check events for data of the current account. In this case, the value of the Owner parameter is the name of the current account.
        
    
    **Note**
    
    For more information about permissions required by different dimensions, see [Required permissions](#509ac1ef26ijo).
    
    ②
    
    In this section, you can view statistics on the following metrics of the check events from the selected dimension: **the total number of check times**, **the number and ratio of events that fail the checks**, and **the number and ratio of data development processes that are blocked**. You can also view the **daily and monthly** growth and decline rates of each metric. This helps you obtain up-to-date information about the check events within your account.
    
    ③
    
    In this section, you can sort the statistics on check events by **Distribution by Check Result** and **Distribution by Check Type** in a pie chart. This helps you learn the proportions of check events in different states and dimensions.
    
    ④
    
    In this section, you can view different categories of check events on the **R&D**, **Storage**, **Computing**, **Quality**, and **Security** tabs. You can also filter the check events by **workspace** and **check status** to view event details, including the **check item name**, **operator**, **occurrence time**, **check object type**, and **check object**.
    
    **Note**
    
    We recommend that you pay attention to the events whose **check status** is **Failed**. Such check events may affect the data development processes and must be handled by governance engineers at the earliest opportunity.
    

## What to do next

After you handle a check event, choose **Governance** > **Check Event** in the left-side navigation pane to go to the Check Event page and check whether the check status of the event becomes **Passed**.
