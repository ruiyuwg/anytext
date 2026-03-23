A snapshot-consistent group is an advanced data protection feature that enables you to create snapshots for multiple disks across one or more ECS instances in the same zone simultaneously. This ensures all snapshots capture the data state at the same point in time, providing both crash consistency and point-in-time consistency for backup data.

## **Scenarios**

Snapshot-consistent groups are typically used in the following scenarios:

-   Cluster file systems and database applications
    
    Business systems deployed on cluster file systems spanning multiple ECS instances often require point-in-time consistency and crash consistency—for databases or enterprise applications. For example, in a self-managed MySQL cluster where the database is distributed across multiple ECS instances and each instance uses multiple disks for data storage, you can use a snapshot-consistent group to ensure all disks are synchronized during a full cluster backup. This prevents recovery failures or data corruption caused by unsynchronized data.
    
-   Distributed application systems
    
    In large websites or collaborative systems with multiple interdependent applications, data may be distributed across different ECS instances but maintain strong logical dependencies. Snapshot-consistent groups let these systems quickly obtain consistent snapshots of all related disks before an upgrade, migration, or failback, ensuring uniformity and traceability of the system state.
    
-   Batch backup requirements
    
    When you need to periodically back up data for multiple ECS instances in the same zone—especially for applications sensitive to data timeliness—snapshot-consistent groups offer an efficient method. This approach maintains data consistency, simplifies management, and reduces operational risks.
    

## **Features**

The following table describes common features of snapshot-consistent groups.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9710293771/CAEQORiBgMDHlMm_rxkiIDJhNTdmZDFmYTZhMjQzMGJiY2E5MjU0ZTA0ZmIwNTNj4914705_20250218103150.896.svg)

**Feature**

**Description**

[Create Snapshot Consistency Group](/help/en/ecs/user-guide/create-a-snapshot-consistent-group#task-1997214)

You can create a snapshot-consistent group to simultaneously create snapshots for multiple disks across one or more ECS instances in the same zone.

[Create application-consistent snapshot](/help/en/ecs/user-guide/create-application-consistent-snapshots-in-the-ecs-console/)

If you have strict data consistency requirements, enable the application-consistent snapshot feature when creating a snapshot-consistent group. The system then creates either application-consistent snapshots or file system-consistent snapshots based on your configuration.

[Roll back disks using a snapshot-consistent group](/help/en/ecs/user-guide/roll-back-disks-by-using-a-snapshot-consistent-group)

If your system experiences a failure—such as a hardware or software issue—or if data is lost or becomes abnormal due to an accidental operation, you can roll back one or more disks using a snapshot-consistent group. This restores your disk data to its state before the incident and ensures data durability and business continuity.

[Modify and delete a snapshot-consistent group](/help/en/ecs/user-guide/modify-and-delete-a-snapshot-consistent-group)

You can update the name and description of a snapshot-consistent group. If a group is no longer needed, delete it along with its snapshots to avoid incurring further charges.

**Important**

Deleting a snapshot-consistent group also deletes all snapshots within it. Before deletion, confirm that you no longer need these snapshots. Deleted snapshots cannot be restored, and their data cannot be recovered. Proceed with caution.

## **Billing**

Creating a snapshot-consistent group is free. However, you incur storage fees for the snapshots created in the group, based on snapshot size and retention period. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).

## Limits

When using snapshot-consistent groups, note the following limits:

**Limitations**

**Description**

Disk type

-   Only ESSD series disks (ESSDs, ESSD AutoPL disks, ESSD Entry disks, and ESSD zone-redundant disks) support snapshot-consistent groups. The [multi-attach](/help/en/ecs/user-guide/enable-multi-attach) feature must be disabled for the disks.
    
    **Important**
    
    ESSD zone-redundant disks can be added to a snapshot-consistent group only with other disks of the same type.
    
-   Only ESSDs support application-consistent snapshots.
    
-   Local disks and elastic ephemeral disks do not support snapshot-consistent groups or application-consistent snapshots.
    

Other limits

-   The disks for which you want to create a snapshot-consistent group must be in the same zone.
    
-   Snapshots created using a snapshot-consistent group do not support custom retention periods. By default, the snapshots are permanently retained.
    
-   You can create a snapshot-consistent group for disks across multiple instances, but limits apply to the maximum number of disks and total disk capacity per group:
    
    -   **China (Hohhot), Thailand (Bangkok), South Korea (Seoul), Malaysia (Kuala Lumpur), UK (London), SAU (Riyadh - Partner Region), and UAE (Dubai)**: A snapshot-consistent group can contain up to 128 disks, and the total capacity cannot exceed 256 TiB.
        
    -   **Other regions**: A snapshot-consistent group can contain up to 16 disks, and the total capacity cannot exceed 32 TiB.
        
-   You cannot create application-consistent snapshots for disks across multiple instances in the ECS console.
    
-   Total concurrent quota: A maximum of 10 snapshot tasks—including manual snapshots, automatic snapshots, and snapshot-consistent group tasks—can run on a single disk at the same time. After the quota is reached, you cannot select the disk when you create a snapshot-consistent group.
