You can use EBS Lens (CloudLens for EBS) in the EBS console to view disk monitoring data. This lets you track service fluctuations and resource usage in real time. This topic describes how to view disk performance data, disk events, and burst details for ESSD AutoPL disks.

## Enable CloudLens for EBS

When you log on to the CloudLens for EBS console for the first time, you must enable CloudLens for EBS as prompted.

1.  Log on to the [Elastic Block Storage (EBS) console](https://ebs.console.alibabacloud.com/home).
    
    **Note**
    
    The first time you log on to the EBS console, you must create a service-linked role for EBS as prompted. For more information, see [Service-linked role for EBS](/help/en/ecs/user-guide/service-linked-role-for-ebs#concept-2111015).
    
2.  In the left-side navigation pane, choose **EBS Lens** > **Cloud Disk Analysis**.
    
3.  On the CloudLens for EBS page, click **Enable Now** to enable CloudLens for EBS.
    

## View second-level monitoring data for disk performance

1.  Log on to the [Elastic Block Storage (EBS) console](https://ebs.console.alibabacloud.com/home).
    
    **Note**
    
    The first time you log on to the EBS console, you must create a service-linked role for EBS as prompted. For more information, see [Service-linked role for EBS](/help/en/ecs/user-guide/service-linked-role-for-ebs#concept-2111015).
    
2.  In the left-side navigation pane, choose **EBS Lens** > **Cloud Disk Analysis**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Disk Analysis** page, find the disk whose monitoring data you want to view and click **Monitor** in the **Actions** column.
    
5.  On the **Near Real-time Monitoring** page, you can view the monitoring data of the target disk within the specified time range.
    
    **Note**
    
    Second-level monitoring data has a latency of 1 to 5 minutes. When you query data, the data from the last 1 to 5 minutes may be zero, which indicates that the data values have not yet been retrieved.
    
    **Metric descriptions**
    
    **Data Metric**
    
    **Description**
    
    Throughput
    
    The amount of data successfully transferred by the disk within the query time range. The unit is MBps. Follow this metric if you deploy applications that require many sequential read and write operations.
    
    For an ESSD AutoPL disk, second-level monitoring displays the baseline and pre-provisioned throughput metrics. For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400).
    
    IOPS
    
    The number of input/output operations per second (IOPS) processed by the disk. This metric indicates the ability of the block storage to handle read and write operations. Follow this metric if you deploy transaction-intensive applications.
    
    For an ESSD AutoPL disk, second-level monitoring displays the baseline and pre-provisioned IOPS metrics. For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400).
    
    Average I/O size (read/write)
    
    The amount of data read or written by the disk per I/O operation. The unit is bytes. I/O size affects the throughput and efficiency of the storage system. Some systems may be optimized for transferring large blocks of data, while others may perform better with small block operations. Understanding and optimizing the I/O size based on your application can improve overall system performance.
    
    BPS watermark
    
    The ratio of the current disk throughput to the maximum disk throughput. When this ratio approaches 100%, the disk is transferring data at near its maximum capacity. A further increase in load may cause performance bottlenecks and affect application response speed. Monitoring this ratio helps you adjust the disk configuration or optimize your application to avoid potential performance issues.
    
    IOPS watermark
    
    The ratio of the current disk IOPS to the maximum disk IOPS. When this ratio approaches 100%, the disk is close to its limit for handling concurrent requests. This can lead to increased latency or failed requests. Monitoring this ratio helps you determine if the disk meets the real-time performance needs of your application. You can then make adjustments to maintain efficient and stable application performance.
    
    **Metric value descriptions**
    
    Second-level monitoring lets you query monitoring data from the last 5 minutes, 15 minutes, 1 hour, 6 hours, or 1 day. Each metric value is the maximum value of the monitoring data collected for the disk within a 5-second interval.
    
    -   Time range: 5 minutes or 15 minutes
        
        You can query only the maximum value of the disk monitoring data. The minimum granularity displayed in the data metric window is 5 seconds.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7729703571/p987072.png)
        
    -   Time range: 1 hour, 6 hours, or 1 day
        
        You can query the maximum, minimum, average, and total values of the disk monitoring data. The minimum granularity displayed in the data metric window depends on the time range. For example, if you query monitoring data from the last hour, the minimum granularity displayed is 10 seconds.
        
        -   Maximum value: The maximum value recorded during the 10-second interval.
            
        -   Minimum value: The minimum value recorded during the 10-second interval.
            
        -   Average value: The average value recorded during the 10-second interval.
            
        -   Total: The sum of all values recorded during the 10-second interval.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7729703571/p987287.png)
        
    

## View performance burst details for an ESSD AutoPL disk

If performance burst is enabled for your ESSD AutoPL disk, you can use EBS Lens to monitor burst details in real time, such as the burst time and burst count. For more information about ESSD AutoPL disks, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

1.  Log on to the [Elastic Block Storage (EBS) console](https://ebs.console.alibabacloud.com/home).
    
    **Note**
    
    The first time you log on to the EBS console, you must create a service-linked role for EBS as prompted. For more information, see [Service-linked role for EBS](/help/en/ecs/user-guide/service-linked-role-for-ebs#concept-2111015).
    
2.  In the left-side navigation pane, choose **EBS Lens** > **Cloud Disk Analysis**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Disk Analysis** page, find the ESSD AutoPL disk that you want to view and click **Monitor** in the **Actions** column.
    
5.  In the navigation pane on the left, click the **AutoPL Burst IO** tab.
    
6.  On the **AutoPL Burst IO** page, you can view the burst details of the ESSD AutoPL disk, such as the burst time and burst count.
    
    **Note**
    
    The latency for burst event queries and burst detail queries is less than 1 hour. This means that the latest available data is from one hour ago.
    

## View risk events for a single disk

Risk events show you which disks are currently at risk. These events remind you to take prompt action to ensure stable disk operation and data security.

1.  Log on to the [Elastic Block Storage (EBS) console](https://ebs.console.alibabacloud.com/home).
    
    **Note**
    
    The first time you log on to the EBS console, you must create a service-linked role for EBS as prompted. For more information, see [Service-linked role for EBS](/help/en/ecs/user-guide/service-linked-role-for-ebs#concept-2111015).
    
2.  In the left-side navigation pane, choose **EBS Lens** > **Cloud Disk Analysis**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Disk Analysis** page, find the disk whose risk events you want to view and click **Event** in the **Actions** column.
    
5.  On the **Cloud Disk Events** page, you can view the event notifications for the disk and take action based on the suggestions.
    
    For more information, see [Disk events](/help/en/ecs/user-guide/view-and-handle-risk-events#task-2229345) and [Disk event descriptions](/help/en/ecs/user-guide/risk-events-overview).
    

## References

-   You can also call the following API operations:
    
    -   Enable EBS Lens: [ApplyLensService](/help/en/ecs/api-applylensservice#doc-api-ebs-ApplyLensService)
        
    -   Query second-level monitoring data for a single disk: [DescribeDiskMonitorData](/help/en/ecs/api-describediskmonitordata1#doc-api-ebs-DescribeDiskMonitorData)
        
    -   Query second-level monitoring data for multiple disks: [DescribeDiskMonitorDataList (This API operation is being unpublished)](/help/en/ecs/api-describediskmonitordatalist#doc-api-ebs-DescribeDiskMonitorDataList)
        
    -   Query one or more created disks: [DescribeLensMonitorDisks](/help/en/ecs/developer-reference/api-ebs-2021-07-30-describelensmonitordisks)
        
-   You can also view minute-level monitoring information for a single disk, such as IOPS, throughput, and latency, in the ECS console. You can view other monitoring information, such as disk usage and inode usage, in CloudMonitor. For more information, see [View disk monitoring information](/help/en/ecs/user-guide/view-the-monitoring-data-of-a-disk).
