This topic describes how to view the monitoring data of cloud disks attached to Elastic Compute Service (ECS) instances to effectively monitor system performance and stability.

## Background information

Disk performance is measured by using the following metrics:

-   IOPS: measures the number of read and write operations that an Elastic Block Storage (EBS) device can process per second. High IOPS is essential for transaction-intensive applications.
    
-   Throughput: measures the amount of data transferred per second. Unit: MB/s. High throughput is essential for applications that require a large number of sequential read and write operations.
    
-   Latency: measures the amount of time that is required for an EBS device to process an I/O request. Unit: seconds, milliseconds, or microseconds. High latency may cause performance to degrade or lead to errors in applications that require low latency.
    
-   Disk usage: measures the percentage of used disk capacity to the total disk capacity. It is an important metric for measuring disk resource utilization. High disk usage may cause performance degradation or errors in applications.
    
-   Inode usage: measures the percentage of used inodes to the total number of inodes. Inodes are data structures used in Linux file systems to manage file metadata such as filenames and timestamps. If inodes are used up, you cannot create new files even if disk space is available.
    
-   Burst I/Os: measures the number of burst I/Os. If the performance burst feature is enabled (by default) and performance bursts on Enterprise SSD (ESSD) AutoPL disks, burst performance fees incur and are related to the total number of burst I/Os per hour. For information about billing, see [Performance burst fee cap rules](/help/en/ecs/user-guide/essd-autopl-disks#3578bf1e7fjns).
    

For information about the performance of different cloud disk categories, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance#concept-ytm-vwj-ydb).

## View the IOPS, throughput, and latency metrics of a cloud disk

## Minute-level monitoring

You can view the minute-level monitoring data of a cloud disk, such as IOPS, throughput, and latency, in the ECS console.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the cloud disk whose monitoring data you want to view and click the disk ID to go to the **Basic Information** tab of the disk details page.
    
4.  Click the **Monitoring** tab.
    
5.  In the time range section, click the ![时间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8585546761/p552423.png) icon and specify the start time and end time of the time range for query.
    
    ![设置时间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8585546761/p552426.png)
    
6.  Move the pointer over a point in time in the charts to view the metrics.
    
    ![指标信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8585546761/p552427.png)
    

## Near real-time monitoring

Compared with the ECS console, which displays the minute-level monitoring data of each cloud disk, [CloudLens for EBS](/help/en/ecs/user-guide/what-is-a-piece-of-data-is-stored-insight/) collects near-real-time monitoring data of cloud disks. You can monitor the finer-grained performance changes of cloud disks by using [Cloud Disk Analysis](/help/en/ecs/user-guide/cloud-disk-analysis) in the EBS console.

**Note**

The first time you use CloudLens for EBS, [activate CloudLens for EBS](/help/en/ecs/user-guide/cloud-disk-analysis#section-4hu-fv2-whf) as prompted.

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
        
    

## View the disk usage, read/write bytes, read/write requests, and inode usage metrics of a cloud disk

**Note**

Make sure that you have [installed the CloudMonitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp#task-1950491) on your ECS instance.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Go to the details page of the instance to which the destination cloud disk is attached.
    
4.  Choose **Monitoring** > **OS Monitoring**.
    
5.  View the metrics in the **Disk Metric** section.
    
    **Note**
    
    Operating system metrics are collected once every 15 seconds. For more information, see [Operating system monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/operating-system-monitoring#concept-gdq-tgc-5db).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7021828471/p927442.png)
    
6.  (Optional) Configure alert rules for the cloud disk. For more information, see [Monitoring hosts](/help/en/cms/cloudmonitor-1-0/user-guide/monitoring-host#task-1962984).
    
    **Note**
    
    You can configure alert rules based on your business scenarios. If the values of disk metrics meet alert conditions, alerts are triggered and CloudMonitor sends alert notifications to help you identify and handle exceptions at the earliest opportunity.
    

## View the number of burst I/Os of an ESSD AutoPL disk

## EBS console

**Note**

The first time you use CloudLens for EBS, [activate CloudLens for EBS](/help/en/ecs/user-guide/cloud-disk-analysis#section-4hu-fv2-whf) as prompted.

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
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7021828471/p927503.png)

## ECS console

You can view the number of burst I/Os of an ESSD AutoPL disk within a specific time range in the ECS console.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the cloud disk whose monitoring data you want to view and click the disk ID to go to the **Basic Information** tab of the disk details page.
    
4.  Click the **Monitoring** tab.
    
5.  In the **CloudLens for EBS** section, click the ![时间](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8585546761/p552423.png) icon and specify the start time and end time of the time range for query.
    
    **Note**
    
    The query time range cannot exceed 6 hours.
    
6.  You can move the pointer over a point in time in the chart to view the number of burst I/Os.
    
    ![1da9c82fa8e6873318f5f4f553b429f5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5152005271/p838607.png)
    

## References

-   You can call the [DescribeDiskMonitorData](/help/en/ecs/api-describediskmonitordata#doc-api-Ecs-DescribeDiskMonitorData) operation to query the monitoring data of a cloud disk, such as the read/write IOPS, read/write bandwidth, and read/write latency, over a specific period of time.
    
-   If the performance requirements of your applications or workloads change or the storage capacity of cloud disks is insufficient, you may need to change the disk categories or extend the disks to meet your business requirements and improve performance. For more information, see [Change disk category](/help/en/ecs/user-guide/change-the-category-of-a-disk#task-2473687) or [Overview](/help/en/ecs/user-guide/overview-19#concept-e1g-44g-ydb).
