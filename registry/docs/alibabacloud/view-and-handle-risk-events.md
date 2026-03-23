If CloudLens for EBS detects a risk on a cloud disk, such as when CloudLens for EBS detects that the disk reaches performance limits or that no snapshots are created for the disk to back up disk data, CloudLens for EBS reports a disk event. This way, you can take action at the earliest opportunity to handle the risk and ensure disk data security and that the disk runs as expected. This topic describes how to view and handle disk events that are reported by CloudLens for EBS for cloud disks.

## Prerequisites

CloudLens for EBS is enabled. For more information, see [Enable CloudLens for EBS](/help/en/ecs/user-guide/cloud-disk-analysis#section-4hu-fv2-whf).

## Procedure

1.  Log on to the [Elastic Block Storage (EBS) console](https://ebs.console.alibabacloud.com/home).
    
    **Note**
    
    The first time you log on to the EBS console, you must create a service-linked role for EBS as prompted. For more information, see [Service-linked role for EBS](/help/en/ecs/user-guide/service-linked-role-for-ebs#concept-2111015).
    
2.  In the left-side navigation pane, choose **EBS Lens** > **Cloud Disk Event**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
4.  On the **Cloud Disk Event** page, choose the **Event Type** and specify filter conditions, such as the disk ID and the time range.
    
5.  In the event list, find the event that you want to handle, click **Handle** in the **Actions** column, and then select an action based on the event type.
    

## References

-   You can call the [DescribeEvents](/help/en/ecs/developer-reference/api-ebs-2021-07-30-describeevents) operation to query disk events.
    
-   Disk risk events of specific types are already integrated into EventBridge, which works as an event hub of Alibaba Cloud event sources. You can use EventBridge to subscribe to EBS risk events or to filter and convert events. For more information, see [EBS events](/help/en/eventbridge/user-guide/block-storage-events).
