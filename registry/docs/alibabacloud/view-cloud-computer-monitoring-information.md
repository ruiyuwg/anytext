Monitoring the utilization of core resources and network data operations of cloud computers or shared cloud computers helps you comprehensively understand the usage and health status of cloud computer resources. This topic describes how to view the metric information of cloud computers.

## Prerequisites

You must obtain the permissions to view or operate cloud computers. For more information, see [Overview](/help/en/wuying-workspace/user-guide/overview-7#task-2225403).

## View metrics

Metric graphs visually display the metric changes of cloud computers within specific time intervals.

#### **On the Cloud Computer Monitoring page**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Performance Monitoring & Diagnosis**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Performance Monitoring & Diagnosis** page, select one of the following methods based on your business requirements.
    
    ## Cloud computers
    
    1.  On the **Performance Monitoring & Diagnosis** page, click **Cloud Computer**.
        
    2.  In the **Actions** column of the target cloud computer, click **Performance Monitoring**.
        
    3.  On the **Performance Monitoring** page, select a time interval or specify a custom time interval to view the graphs of metrics such as Load Score, CPU Usage, Memory Usage, and disk-related parameters during the time interval.
        
    
    ## **Shared cloud computers**
    
    1.  On the **Performance Monitoring & Diagnosis** page, click **Shares**.
        
    2.  In the **Actions** column of the target cloud computer, click **Graphs**.
        
    3.  On the **Monitoring Details** page, select a time interval or specify a custom time interval to view the graphs of metrics such as Load Score, CPU Usage, Memory Usage, and disk-related parameters during the time interval.
        
    
    ## **Top 50 Resources**
    
    1.  On the **Performance Monitoring & Diagnosis** page, click **Top 50 Resources**.
        
    2.  In the **Actions** column of the target cloud computer, click **Graphs**.
        
    3.  On the **Monitoring Details** page, select a time interval or specify a custom time interval to view the graphs of metrics such as Load Score, CPU Usage, Memory Usage, and disk-related parameters during the time interval.
        
    

#### **On the cloud computer details page**

**Limits**: Shared cloud computers are not supported.

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Computers** page, click the ID of the target cloud computer.
    
5.  On the **Performance Monitoring** tab of the cloud computer details page, select a time interval or specify a custom time interval to view the graphs of metrics such as CPU Usage, Memory Usage, and disk-related parameters during the time interval.
    

## Restart a cloud computer

When metric exceptions occur on a cloud computer, we recommend that you restart the cloud computer.

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Performance Monitoring & Diagnosis**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Performance Monitoring & Diagnosis** page, click the **Cloud Computer**, **Shares**, or **Top 50 Resources** tab. Find the cloud computer that you want to restart. Then click **Restart** in the **Actions** column. In the message that appears, click **Confirm**.
    
    -   If you want to restart multiple cloud computers at the same time, perform the following operations: Select the cloud computers that you want to restart and click **Restart** in the lower part of the page.
        
    
    **Warning**
    
    Before you restart a cloud computer, you can notify the connected end users to save their files to prevent data loss. For more information, see [Send messages](#sc-send-message).
    

## Export cloud computer resource data

You can export cloud computer resource data as an XLSX file and download it to your local computer. The data includes but is not limited to cloud computer ID/name, specifications/system, purchase method, CPU usage, memory usage, system disk usage, data disk usage, and GPU memory usage. The specific data depends on your actual situation.

You can export the data by performing the following steps:

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Performance Monitoring & Diagnosis**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  Select an export option based on your requirements.
    
    ## Export selected (one or more)
    
    1.  On the **Performance Monitoring & Diagnosis** page, click the **Cloud Computer**, **Shares**, or **Top 50 Resources** tab.Select the target cloud computers and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939681571/p934137.png) icon in the upper-right corner.
        
    2.  In the export task dialog box, select **Export Selected** and click **Confirm**.
        
    
    ## Export all
    
    1.  On the **Performance Monitoring & Diagnosis** page, click the **Cloud Computer**, Shares **Resources**, or **Top 50 Resources** tab and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939681571/p934137.png) icon in the upper-right corner.
        
    2.  In the **Export Cloud Computers** dialog box, select **Export All** and click **Confirm**.
        
    
4.  In the export task dialog box that appears in the upper-right corner, click **Viewing export records**.
    
    **Note**
    
    If the dialog box disappears before you click it, you can open the sidebar on the right side of the console and click the export records icon to view historical export records and download the corresponding files.
    
5.  In **Export Records**, wait until the **Status** changes to **Export Success**, and then click **Download** in the Actions column.
    

## Send messages

Before you restart a cloud computer, you can send messages to the cloud computer to remind the connected end users of the upcoming restart. This allows end users to save files to prevent data loss.

**Note**

Before you send messages, take note of the following requirements:

-   The cloud computer must be a Windows cloud computer that uses the Adaptive Streaming Protocol (ASP). The image of the cloud computer must be a system image of V 1.0.0 or later or a custom image created based on a system image of V 1.0.0 or later.
    
-   The clients used by end users must be the Windows client or macOS client of V 5.0.0 or later.
    

1.  In the left-side navigation pane, choose **Monitoring & Alerts** > **Performance Monitoring & Diagnosis**.
    
2.  In the upper-left corner of the top navigation bar, select a region.
    
3.  On the **Performance Monitoring & Diagnosis** page, click the **Cloud Computer**, **Shares** or **Top 50 Resources** tab. Select the cloud computers to which you want to send messages and click **Send Message** in the lower part of the page.
    
4.  In the **Send Message** dialog box, configure the **Subject** and **Messages** parameters and click **Confirm**.
    
    After you send a message, the message sent notification appears in the console. The cloud computer receives and displays the message that you sent.
    

## FAQ

### **What should I do if an alert rule is configured but no alerts are sent to the designated contacts?**

The CloudMonitor agent collects specific data on cloud computers. By default, the agent is disabled. To enable it and resolve missing metrics, perform the following steps:

1.  Press the shortcut keys `Win+R` on your cloud computer, and enter `services.msc` in the **Run** window. Then, press Enter to open the **Services** window.
    
2.  In the **Services** window, find the service named `argusagent service`, right-click the service, and select **Properties**.
    
3.  On the **General** tab, set the **Startup type** parameter to **Automatic**. If the service is not running, click **Start** in the **Service status** section and then click **OK**.
