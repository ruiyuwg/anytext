You can use a snapshot-consistent group to create snapshots for multiple cloud disks attached to one or more Elastic Compute Service (ECS) instances in the same zone. This ensures point-in-time consistency and crash consistency of data written to the disks. This topic describes how to create a snapshot-consistent group.

## Considerations

Before you create a snapshot-consistent group, review the following considerations.

**Notes**

**Description**

**Impact on performance**

During the first few seconds of snapshot creation, disk I/O may experience jitter (typically not exceeding 10%). When the upload progress is displayed in the **Progress** column in [ECS Console - Snapshots](https://ecs.console.alibabacloud.com/snapshot), the read and write performance will return to normal.

**Billing**

Creating a snapshot-consistent group is free. However, you incur storage fees for the snapshots created in the group, based on snapshot size and retention period. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).

**Limits**

-   The snapshot-consistent group feature supports only Enterprise SSD (ESSD) series disks (ESSDs, ESSD AutoPL disks, ESSD Entry disks, and ESSD ZRS disks), and the [multi-attach feature](/help/en/ecs/user-guide/enable-multi-attach) must be disabled for these disks.
    
    **Important**
    
    ESSD ZRS disks can be added to a snapshot-consistent group only with other ESSD ZRS disks.
    
-   You can create a snapshot-consistent group only for cloud disks in the same zone.
    
-   You cannot specify custom retention periods for snapshots created using a snapshot-consistent group. By default, the snapshots are retained until you manually delete them.
    
-   You can create a snapshot-consistent group across multiple ECS instances. However, each group has limits on the number of disks and total disk capacity:
    
    -   **China (Hohhot), Thailand (Bangkok), South Korea (Seoul),** **Malaysia (Kuala Lumpur)****,** **UK (London)****,** **SAU (Riyadh - Partner Region)****, and** **UAE (Dubai)**: A single snapshot-consistent group can contain up to 128 disks. The total capacity of the disks cannot exceed 256 TiB.
        
    -   **All other regions**: Up to 16 disks per group, with a total capacity limit of 32 TiB.
        
-   Total concurrent quota: A single disk can have a maximum of 10 ongoing snapshot tasks. These tasks include manual snapshots, automatic snapshots, and snapshot-consistent group tasks. If this quota is reached, you cannot select the disk when you create a snapshot-consistent group.
    

For more information about snapshot creation, see the [Considerations](/help/en/ecs/user-guide/create-a-snapshot#context-4zd-5j0-jkn) section.

## **Prerequisites**

-   ECS Snapshot is activated. For more information, see [Activate ECS Snapshot](/help/en/ecs/user-guide/activate-ecs-snapshot).
    
-   The ECS instances to which the disks are attached must be in the **Running** or **Stopped** state. The disks must be in the **In Use** state.
    

## Procedure

1.  Go to [ECS console - Snapshot-consistent Groups](https://ecs.console.alibabacloud.com/instanceSnapshot/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Snapshot-consistent Groups** tab, click **Create Snapshot-consistent Group**.
    
4.  In the **Create Snapshot** dialog box, set the parameters for the snapshot consistency group.
    
    **Parameter**
    
    **Description**
    
    **Resource Type**
    
    By default, the **Instance** option is selected, allowing you to select one or more cloud disks from an instance, create a snapshot consistency group, and then create snapshots for the disks in the group to ensure data consistency.
    
    **Note**
    
    You can also set **Resource Type** to **Cloud Disk** to create a snapshot for a single disk. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot).
    
    **Select Instances**
    
    Select one or more ECS instances for which you want to create the snapshot-consistent group.
    
    **Select Cloud Disks**
    
    On the instance, you can select the disks to include in a snapshot consistency group.
    
    **Note**
    
    You can select only ESSDs, ESSD AutoPL disks, ESSD Entry disks, and ESSD ZRS disks. ESSD ZRS disks can be added to a snapshot-consistent group only with other ESSD ZRS disks.
    
    **Snapshot-consistent Group Name**
    
    Enter a name for the snapshot-consistent group.
    
    (Optional) **Advanced Settings**
    
    **Application-consistent Snapshot**
    
    **Enable Application-consistent Snapshot**: By default, this option is not selected. Select it to enable the application-consistent snapshot feature.
    
    **Note**
    
    -   If your business requires strict data consistency, enable the application-consistent snapshot feature when you create the snapshot-consistent group. This feature ensures internal data consistency within applications. For more information, see [Create application-consistent snapshot](/help/en/ecs/user-guide/create-application-consistent-snapshots-in-the-ecs-console/#task-2058263).
        
    -   For limits on the application-consistent snapshot feature, see the [Limits](/help/en/ecs/user-guide/create-application-consistent-snapshots-in-the-ecs-console/#908b7059d7knx) section.
        
    
    **Description**
    
    Enter a description for the snapshot-consistent group to help with management.
    
    **Tag**
    
    Add tag key-value pairs to the snapshot-consistent group to help manage resources.
    
5.  Click **OK**.
    
6.  Optionally, on the Snapshot-consistent Groups tab, view the snapshot-consistent group in the list or click its ID to view snapshot details.
    

## References

-   You can call the following API operations:
    
    -   [CreateSnapshotGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshotgroup): creates a snapshot-consistent group.
        
    -   [DescribeSnapshotGroups](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describesnapshotgroups): queries information about snapshot-consistent groups.
        
    -   [ModifySnapshotGroup](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysnapshotgroup): modifies a snapshot-consistent group.
        
-   After you create a snapshot-consistent group, you can perform the following operations:
    
    -   Roll back disks using the snapshot-consistent group. For more information, see [Roll back disks using a snapshot-consistent group](/help/en/ecs/user-guide/roll-back-disks-by-using-a-snapshot-consistent-group#task-2038780).
        
    -   Use individual snapshots in the group to perform the following operations:
        
        -   [Roll Back a Cloud Disk Using a Snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot)
            
        -   [Create a disk from a snapshot](/help/en/ecs/user-guide/create-a-cloud-disk-using-a-snapshot).
            
        -   [Copy a snapshot](/help/en/ecs/user-guide/copy-a-snapshot).
            
        -   [Shared snapshot](/help/en/ecs/user-guide/share-a-snapshot)
            
        -   [Create a custom image from a snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot-1#concept-gpg-t5l-xdb).
            
-   To reduce snapshot storage costs, delete snapshot-consistent groups and their snapshots when no longer needed. For more information, see [Delete a snapshot-consistent group](/help/en/ecs/user-guide/modify-and-delete-a-snapshot-consistent-group#b7a89deb30nsn).
