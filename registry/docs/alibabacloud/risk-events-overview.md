This topic describes the types of events that can be reported by CloudLens for Elastic Block Storage (EBS), descriptions of events, and suggestions on how to handle different events.

## **Event attributes**

**Event attribute**

**Description**

EventName

The name of the system event.

ResourceId

The ID of the cloud disk associated with the event.

ResourceType

The type of the resource associated with the event. Example: Clouddisk.

Description

The description of the event.

EventType

The type of the event. Valid values:

-   Notification: an event that is triggered based on usage and can be immediately closed after the event is reported.
    
-   Alert: an event that is triggered based on usage and must be manually closed.
    
-   System exception: a critical event that is triggered by an underlying issue and affects disk usage.
    

EventLevel

The level of the event. Valid values:

-   Critical: Critical
    
-   Warn: Warning
    
-   Info: Notice
    

EventId

The event ID, which is unique for each resource.

EventStatus

The status of the event. Valid values:

-   Active
    
-   Recovered
    

StartTime

The start time of the event.

EndTime

The end time of the event.

RecommendAction

The action recommended for the event. Valid values:

-   ModifyDiskSpec: changes the disk specification.
    
-   CreateSnapshot: creates a snapshot for the disk.
    
-   ResizeDisk: resizes the disk.
    
-   AdjustProvision: changes the provisioned performance values of the disk.
    
-   ModifyInstanceSpec: changes the interface type of the instance to which the disk is attached.
    

RecommendParam

Parameter used in processing the event. For example, this parameter is set to a recommended provisioned value when the system processes a Cost Optimization event.

**Note**

To query the attributes of a specific event, go to the [cloud disk events](/help/en/ecs/user-guide/view-and-handle-risk-events) page in the EBS console or call the [DescribeEvents](/help/en/ecs/developer-reference/api-ebs-2021-07-30-describeevents) operation.

## **Event handling suggestions**

The following table describes the suggestions on how to handle different events.

**Event name**

**Description**

**Report frequency**

**Event type**

**Event level**

**Suggestion**

**Whether the event status is recovered**

Data Protection

You did not create snapshots for a cloud disk for an extended period of time. In this case, you may be unable to restore the cloud disk to the most recent state in the event of ransomware, which may cause data loss.

Every morning

Alert

Warn

[Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot).

After the cloud disk is restored, the system pushes a new event in the **Recovered** state for the cloud disk the next morning. The **Active** event that was pushed remains.

Cost Optimization

-   If the provisioned performance value such as 1,000 IOPS on a cloud disk is higher than the actual workload such as 800 IOPS, you are charged based on the higher performance level, which causes cost wastes.
    
-   If the provisioned performance value such as 1,000 IOPS on a cloud disk is lower than the actual workload such as 1,200 IOPS, cloud disk performance frequently bursts to process excess I/O requests, which increases the total cost.
    

You can change the provisioned values to balance performance and cost. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

Once a week

Alert

Info

-   [Modify the performance configurations of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk).
    
-   [Change disk category](/help/en/ecs/user-guide/change-the-category-of-a-disk).
    

After the cloud disk is restored, no events of the same type are pushed.

I/O Hangs on cloud Disks

An I/O hang occurred when the operating system became unstable or experienced downtime due to the excessively high read/write I/O latency of file systems on a disk.

Real time

SystemException

Warn

View the performance metrics of disks to identify the cause. For more information, see [View the monitoring data of a disk](/help/en/ecs/user-guide/view-the-monitoring-data-of-a-disk). For information about how an Alibaba Cloud Linux operating system detects I/O hangs, see [Detect I/O hangs of file systems and block layers](/help/en/alinux/user-guide/detect-i-or-o-hangs-of-file-systems-and-block-layers#task-2420551).

After the disk is restored, the system pushes a new event in the **Recovered** state for the disk. The **Active** events that were pushed remains.

Specification Mismatch Between the Instance and Disks

The total specifications of disks on an instance exceed the upper limit supported by the instance type. The maximum disk performance may be limited by the instance type.

For example, if an ECS instance has a maximum IOPS of 60,000 and a disk that has a maximum IOPS of 100,000 is attached to the instance, the performance of the disk is limited by the instance type.

-   Cloud disk specifications: see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance#section-0hu-6dh-p6f).
    
-   Instance type: see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    

From 12: 00 to 15: 00 every day

Alert

Warn

When the total performance of disks on an instance exceeds the performance upper limit supported by the instance type, issues such as slow data processing and long response latency may occur.

We recommend changing the instance type based on your business requirements. For more information, see [Upgrade the instance types of subscription instances](/help/en/ecs/user-guide/upgrade-the-instance-types-of-subscription-instances) and [Change the instance type of a pay-as-you-go instance](/help/en/ecs/user-guide/change-the-instance-type-of-a-pay-as-you-go-instance).

After the disk is restored, no events of the same type are pushed.

Total IOPS of Disks Reached Maximum IOPS per Instance

The total number of IOPS of cloud disks attached to an instance reached the upper limit for the instance.

For example, the maximum IOPS of an ECS instance is 60,000 and two cloud disks are attached to the instance. The IOPS of a cloud disk is 10,000 and the IOPS of the other cloud disk is 51,000. The total real-time IOPS of the cloud disks on the instance reaches the maximum IOPS of the instance.

-   Disk IOPS: see the [View the near real-time monitoring data of a disk](/help/en/ecs/user-guide/cloud-disk-analysis#section-oau-oi2-9fn) section of the "Analyze disks" topic.
    
-   Maximum IOPS for an instance: see the descriptions of the **disk baseline IOPS and burst IOPS** in the Instance type specifications table of the [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) topic.
    

Within 5 minutes after the event is triggered. Latency is measured in minutes.

Notification

Warn

When the event is triggered, another event in the **Recovered** state is reported to remind you that the issue occurs on the current disks, regardless of whether the Active event is handled.

Total BPS of Disks Reached Maximum BPS per Instance

The total bytes per second (BPS) of cloud disks on your instance reached the upper limit for the instance.

For example, the maximum BPS of an ECS instance is 150 MB/s, and two disks are attached to the instance. The BPS of a disk is 100 MB/s, and the BPS of the other disk is 60 MB/s. In this case, the total real-time BPS (160 MB/s) of the disks exceeds the maximum BPS for the instance.

-   Disk BPS: see the [View the near real-time monitoring data of a disk](/help/en/ecs/user-guide/cloud-disk-analysis#section-oau-oi2-9fn) section of the "Analyze disks" topic.
    
-   Maximum BPS for an instance: see the descriptions of the **disk baseline bandwidth and disk burst bandwidth** in the Instance type specifications table of the [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) topic.
    

Notification

Warn

IOPS of a Disk Reached Maximum IOPS per Instance

The IOPS of your disk reached the upper limit for the instance.

For example, an ECS instance has a maximum IOPS of 60,000, several disks are attached to the instance, and one disk has the IOPS of 70,000. In this case, the real-time IOPS of the disks exceeds the maximum IOPS for the instance.

-   Disk IOPS: see the [View the near real-time monitoring data of a disk](/help/en/ecs/user-guide/cloud-disk-analysis#section-oau-oi2-9fn) section of the "Analyze disks" topic.
    
-   Maximum IOPS of an instance: see the descriptions of the **disk baseline IOPS and burst IOPS** in the Instance type specifications table of the [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) topic.
    

Notification

Warn

BPS of a Disk Reached Maximum BPS per Instance

The BPS of your disk reached the upper limit for the instance.

For example, the maximum BPS of an ECS instance is 150 MB/s, several disks are attached to the instance, and the BPS of one disk is 160 MB/s. In this case, the real-time BPS of the disks exceeds the upper limit of the BPS for the instance.

-   Disk BPS: see the [View the near real-time monitoring data of a disk](/help/en/ecs/user-guide/cloud-disk-analysis#section-oau-oi2-9fn) section of the "Analyze disks" topic.
    
-   Maximum BPS of an instance: see the descriptions of the **disk baseline bandwidth and disk burst bandwidth** in the Instance type specifications table of the [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families) topic.
    

Notification

Warn

IOPS of a Disk Reached Maximum IOPS per Disk

The IOPS of your disk reached the upper limit for the disk.

-   Disk IOPS: see the [View the near real-time monitoring data of a disk](/help/en/ecs/user-guide/cloud-disk-analysis#section-oau-oi2-9fn) section of the "Analyze disks" topic.
    
-   Maximum IOPS of a disk: see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance#section-0hu-6dh-p6f).
    

Notification

Warn

Issues such as slow data processing and high response latency may occur on the cloud disk. For information about the performance metrics of different disk categories, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance#concept-ytm-vwj-ydb).

-   View the performance metrics of the cloud disk. For more information, see [View the monitoring data of a disk](/help/en/ecs/user-guide/view-the-monitoring-data-of-a-disk#concept-hvt-zkj-ydb).
    
-   Reduce the read/write IOPS of the cloud disk or change the disk category to support higher performance. For more information, see [Change disk category](/help/en/ecs/user-guide/change-the-category-of-a-disk).
    
-   Extend the disk capacity to improve the performance of the cloud disk. For information about how to resize a disk, see [Overview](/help/en/ecs/user-guide/overview-19#concept-e1g-44g-ydb).
    

BPS of a Disk Reached Maximum BPS per Disk

The BPS of your disk reached the upper limit for the cloud disk.

-   Disk BPS: see the [View the near real-time monitoring data of a disk](/help/en/ecs/user-guide/cloud-disk-analysis#section-oau-oi2-9fn) section of the "Analyze disks" topic.
    
-   Maximum BPS of a disk: see the [Performance of cloud disks](/help/en/ecs/user-guide/block-storage-performance#section-0hu-6dh-p6f) section of the "Block storage performance" topic.
    

Notification

Warn

Non-4K-Aligned Read/Write Operation

Read/write operations on your disk are not 4K-aligned, which may affect disk I/O performance.

**Note**

If read/write operations in partitions on the disk are not 4K-aligned, the disk may perform a read-modify-write operation across two 4K sectors. As a result, a read/write operation may involve multiple I/O operations, which degrades the performance of the disk.

12:00 every day

Notification

Info

To resolve the preceding issue, see [What do I do if the disk I/O load is high on a Linux instance?](/help/en/ecs/support/troubleshooting-and-solution-for-high-disk-i-o-load-in-linux-system#b33c3640b9hi0).

Slow I/O Operations on Disks

Your disk has slow I/O operations that take 1 second or longer to complete.

Real time

Notification

Warn

The slow I/O issue may affect applications that depend on disk performance and cause issues, such as slow website loading. We recommend that you check whether your business is affected at the earliest opportunity.

Disk I/O Burst

Disk I/O bursts occurred on your disk, which may generate performance burst fees.

For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

Every 1 hour

Notification

Info

Check whether burstable I/Os of the cloud disk meet your business expectations.

Burst Performance Fee Cap on Disks

Your disk has a performance burst and the total amount of I/O bursts triggered [burst performance fee cap rules](/help/en/ecs/user-guide/essd-autopl-disks#3578bf1e7fjns).

Every 1 hour

Notification

Info

Although the burst performance fee cap rules can help reduce performance burst fees, we recommend that you check whether burst I/Os meet your actual requirements to prevent unexpected costs.
