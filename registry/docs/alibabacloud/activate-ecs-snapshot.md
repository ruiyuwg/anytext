You must activate the Alibaba Cloud Elastic Compute Service (ECS) Snapshot service before you can create snapshots.

## Billing

You are not charged for activating the ECS Snapshot service. After you create snapshots, by default, you are charged for standard snapshot storage based on the snapshot size and storage duration in different regions. Hourly bills are generated on the hour per region. Keep an eye on your snapshot size and snapshot fees. For more information about snapshot billing, see [Snapshots](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).

## Procedure

1.  Visit [ECS Console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the **Activate Snapshot Service** dialog box, read the notes and the Alibaba Cloud Product and Service Agreement (Snapshot), select **I have read and agreed to Alibaba Cloud Product and Service Agreement (Snapshot)**, and then click **Activate**.
    

## References

-   After you activate the Snapshot service, you can create snapshots for disks based on your business requirements.
    
    -   Create a snapshot for a single cloud disk. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
        
    -   Batch create snapshots for multiple cloud disks to ensure the point-in-time consistency and crash consistency of the data on the cloud disks. For more information, see [Create a snapshot-consistent group](/help/en/ecs/user-guide/create-a-snapshot-consistent-group#task-1997214).
        
    -   Perform the following operations to periodically create snapshots for a single cloud disk:
        
        1.  [Create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1).
            
        2.  [Configure an automatic snapshot policy for a cloud disk](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy).
            
-   You cannot disable the Snapshot service after activating the service. For information about how to stop the billing of snapshots, see [Stop the billing for snapshots](/help/en/ecs/snapshots-1#73dc0e3b321dj).
