Hologres provides cross-region snapshot replication (geo-redundancy). This feature automatically copies backup snapshots from the source region of an instance to an availability zone in another region. It supports scenarios such as regulatory compliance and disaster recovery. This topic describes how to perform cross-region backups and data recovery in Hologres.

## **Limits**

-   Cross-region snapshot replication depends on the backup and recovery feature, which is supported only in Hologres V1.3 or later.
    
    **Note**
    
    If your instance is running a version earlier than V1.3, [upgrade your instance](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk support group for assistance. For more information, see [How do I obtain more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   When an instance is released, its backup snapshots are also released.
    
-   Cross-region snapshot replication is not supported if storage encryption is enabled for the instance.
    
-   After you enable cross-region snapshot replication, the system automatically triggers a cross-region backup after a backup snapshot is created in the source region of the instance.
    
-   Supported regions:
    
    -   Cross-region backup is supported between the following regions: China (Hangzhou), China (Shanghai), China (Beijing), and China (Shenzhen).
        
    -   Cross-region backup is supported between Singapore and Malaysia (Kuala Lumpur).
        
    -   Cross-region backup is supported between China (Hong Kong) and Singapore.
        

## **Billing**

After you enable cross-region snapshot replication, the system automatically copies backup snapshots from the source region of the instance to an availability zone in the destination region. This process incurs two types of fees, both of which are billed based on the destination region:

-   Backup set storage fee
    
-   Cross-region snapshot network transmission fee
    

For more information, see [Billing overview](/help/en/hologres/product-overview/pay-as-you-go).

## **Feature overview**

### **Cross-region backup**

Cross-region backup copies your instance data to a different region. If a disaster occurs in the source region, you can quickly create a new instance in another region using the backup snapshot to restore your services.

**Note**

Cross-region backup works by copying local backup snapshots to a remote region. Therefore, you must have a local backup snapshot before you can perform a cross-region backup. For more information, see [Local backup and recovery](/help/en/hologres/user-guide/backup).

-   Scenario: Ensures data integrity against accidental deletion, data loss, or regional failures.
    
-   Backup type: Each backup is a full data backup.
    
-   Backup method: Supports manual backup and scheduled periodic rules.
    
-   Backup speed: Depends on the data volume of the instance.
    
-   Instance type: Supports compute group and general-purpose instances. Read-only replica instances and shared clusters (Lakehouse Acceleration Edition) are not supported.
    
-   Cost: Incurs storage fees for backup data and cross-region network transmission fees.
    

### **Recovery**

You can use a cross-region backup snapshot to quickly restore a new instance in a remote region.

-   Recoverable regions and zones: You can recover data only in supported regions. For more information, see [Region limits](#f56ace7ad2us7).
    
-   Recovery scope: You can restore data from a specific snapshot timestamp.
    
-   Recovery speed: Depends on the snapshot data volume.
    
-   Cost: The recovery process does not incur additional fees. However, you are charged for the compute and storage resources when you purchase the new instance.
    

The following flowchart shows how periodic backup rules generate snapshots in the local region's availability zone and how a new instance is restored in an availability zone in a different region.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5070323771/CAEQUxiBgICJ19.T4RkiIDVlZDNiMDM2Y2I5YTRhYTBiODRjNjRjYjk2MGI1NWM55053803_20250415143513.661.svg)

## **Access the feature**

1.  Log in to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) and click **Instances**.
    
2.  On the **Instances** page, click the instance name. The **Instance Details** page opens.
    
    > Alternatively, click **Manage** in the **Actions** column of the target instance to go to the instance **Details** page.
    
3.  In the left navigation pane, click **Backup and Disaster Recovery** and then select the **Cross-region Backup** tab.
    

## **Create a cross-region backup**

After accessing the **Cross-region Backup** tab via the [feature access path](#278a390e71gnt), follow these steps.

1.  Click **Edit** next to **Cross-region Backup Settings** to open the **Cross-region Snapshot Copy Settings** dialog box.
    
2.  Enable **Cross-region Snapshot Copy** and configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Destination Region Settings**
    
    **Destination Region**
    
    Select the region and availability zone where the replicated snapshots will be stored. After a snapshot is generated, the system automatically copies it to the specified availability zone in the destination region.
    
    **Note**
    
    Cross-region snapshot replication does not affect the original backup snapshots in the instance's source region. Both sets of snapshots coexist.
    
    **Zone**
    
    **Snapshot Clearing Settings**
    
    **Retained Automatic Snapshots**
    
    Set the number of replicated snapshots to retain for snapshots generated automatically on a schedule.
    
    **Retained Manual Snapshots**
    
    Set the number of replicated snapshots to retain for manually created snapshots.
    
    **Compliance Commitment Regarding Cross-border Data Transfers**
    
    Read and check the relevant agreements.
    
3.  Click **OK** to complete the setup.
    

## **Manage backups**

### **View cross-region snapshot list**

**Note**

The speed of a cross-region snapshot backup depends on the data volume of the instance and the network transmission speed. The wait time varies based on specific conditions.

After you open the **Cross-region Backup** tab by following the [feature access path](#278a390e71gnt), click the **Snapshots** tab to view your cross-region backup snapshots.

**Column**

**Description**

Snapshot ID

The ID generated after a snapshot is created.

Backup start and end time

The start and end times of the backup job.

Snapshot granularity

The granularity of the snapshot. Currently, only instance-level full snapshots are supported.

Snapshot region

The destination region configured for cross-region snapshot replication.

Snapshot size

The storage size of the snapshot.

Snapshot data timestamp

The historical point in time that the snapshot represents.

Creation method

-   Periodic creation: Snapshots generated by automatic scheduled tasks.
    
-   Manual creation: Snapshots created manually.
    

Backup type

The backup type. Currently, only instance-level full snapshots are supported.

Snapshot type

The instance type associated with the snapshot, including General-purpose and Compute Group. During recovery, you can only use snapshots that match the target instance type.

Status

The status of the snapshot job.

Remarks

Remarks for the backup snapshot.

Alternatively, log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) and click **Snapshots** in the navigation pane on the left to view all snapshots in the current region, including cross-region snapshots.

### **Disable cross-region backup**

If you no longer need cross-region backup, you can disable it. Follow the steps in [Create a cross-region backup](#ed5f64212be1j) and turn off the **Cross-region Snapshot Copy** switch in the **Cross-region Snapshot Copy Settings** dialog box.

**Important**

-   After you disable cross-region snapshot replication, new cross-region backup snapshots are no longer generated and you will not incur additional network transmission fees. However, existing cross-region snapshots are not automatically deleted and must be deleted manually.
    
-   When an instance is released, all of its backup snapshots, including those in the source region and other regions, are deleted.
    

## **Data recovery**

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) and click **Snapshots** in the left navigation pane to go to the **Snapshots** page.
    
2.  Click the **Restore Instance** button.
    
3.  On the **Clone Instance** page, select the **Instance ID** (defaults to the source instance ID), **Instance Type**, **Snapshot ID** (selected by time), **Computing Resources**, storage resource (**Standard Storage** or **Infrequent Access**), and **Resource Group**, enter the **Instance Name**, check the **Service Agreement**, and click **Buy Now**.
    
    After a successful payment, the new instance automatically creates a backup.
