Snapshots provide a data backup method that you can use to back up and restore disks. Before you perform critical operations that may affect the stability of a cloud computer, such as modifying the registry or key system files, you can create a snapshot. If a system failure occurs, you can use the snapshot to restore data. This topic describes how to use snapshots.

## Background information

A snapshot is a data file that captures the state of a disk at a specific point in time. You can use snapshots for data backup and restoration.

**Note**

The snapshot feature is in public preview and is free of charge. After the public preview ends, you are charged for using this feature. Billing details will be announced in advance. For more information, see the official announcement.

You can create snapshots manually or automatically.

-   Manual creation: You can create a snapshot at a specific point in time based on your business needs. When you create a snapshot, you can specify the disks to back up. If you grant local administrator permissions to end users, the end users can create, restore, and delete snapshots from the WUYING Terminal interface.
    
-   Automatic creation: By default, the system automatically creates snapshots for the system disk and data disks of each cloud computer. These snapshots are retained for only three days and then automatically deleted. You can also configure an automatic snapshot policy based on your needs. The system automatically creates snapshots in the following scenarios:
    
    **Important**
    
    If a custom snapshot policy is not configured and only the EDS default snapshot policy is used, the system-generated snapshots will be deleted along with the instance upon its release and cannot be recovered.
    
    -   If a cloud computer is associated with an automatic snapshot policy, the system creates snapshots at the time specified in the policy.
        
    -   Before an administrator upgrades a cloud computer or a custom image, the system automatically creates a snapshot to protect against upgrade failures. If the upgrade fails, the system automatically performs a rollback. If the upgrade is successful, the system deletes the system disk snapshot of the original cloud computer but retains the data disk snapshot.
        
    -   When you change the image of a cloud computer that was created from a custom image, the system automatically creates a snapshot if the original custom image has been deleted. After the image is changed, the system automatically deletes the snapshot.
        
    -   Before an end user upgrades a cloud computer from a client, the system automatically creates a snapshot to protect against upgrade failures. For this scenario, a maximum of three snapshots can be created for a cloud computer. These snapshots are retained for only three days and then automatically deleted.
        
    
    The following list describes the time when automatic snapshots are created:
    
    -   If no automatic snapshot policy is associated:
        
        -   For cloud computers in all regions that are created at or after 12:00 (UTC+8) on August 19, 2024: from 22:00 every day to 06:00 the next day.
            
        -   For cloud computers in the China (Hangzhou) region that are created after 17:42 (UTC+8) on June 7, 2024 and before 12:00 (UTC+8) on August 19, 2024: at 02:00 every day.
            
        -   For all other cloud computers: at 01:00 every day.
            
        -   To stop automatic snapshot creation, go to the **Snapshots** page, click the **Snapshot Management** tab, and turn off the **System Snapshot** switch.
            
            **Note**
            
            This feature is in invitational preview. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373) to request activation.
            
    -   If an automatic snapshot policy is associated: Snapshots are created at the time specified in the policy.
        
    

## Prerequisites

-   Before you create a snapshot, the cloud computer must be in the **Running** or **Stopped** state.
    
-   Before you restore data from a snapshot, the cloud computer must be in the **Stopped** state.
    

## **Create a manual snapshot**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Cloud Computers** page, find the cloud computer for which you want to create a snapshot and use one of the following methods to create the snapshot:
    
    -   In the **Actions** column, click the ⋮ icon and select **Create Snapshot**.
        
    -   Click the cloud computer ID to go to the details page. On the details page, click the **Snapshots** tab and then click **Create Snapshot**.
        
5.  In the **Create Snapshot** panel, set the following parameters and click **Create Snapshot**.
    
    **Parameter**
    
    **Description**
    
    Disk Scope
    
    Select the disks whose data you want to back up. Valid values: **System Disk and Data Disk**, **Only System Disk**, and **Only Data Disk**.
    
    Restore Point Name
    
    Enter a name for the restore point. The name must be 2 to 128 characters in length. It must start with an uppercase letter, a lowercase letter, or a Chinese character. It cannot start with `http://`, `https://`, or `auto`. The name can contain digits, colons (:), underscores (\_), periods (.), and hyphens (-).
    
    System Disk Snapshot Name
    
    Enter a name for the system disk snapshot. The name must be 2 to 127 characters in length and cannot start with `auto`.
    
    System Disk Description
    
    Enter a description for the system disk. The description can be up to 128 characters in length.
    
    Data Disk Snapshot Name
    
    Enter a name for the data disk snapshot. The name must be 2 to 127 characters in length and cannot start with `auto`.
    
    Data Disk Description
    
    Enter a description for the data disk. The description can be up to 128 characters in length.
    
    On the **Snapshots** tab, you can view the snapshot creation progress. When the status of the snapshot changes from **In Progress** to **Succeeded**, the snapshot is successfully created.
    

## **Create and associate an automatic snapshot policy**

After you create an automatic snapshot policy, you can associate it with specified cloud computers. The system then automatically creates snapshots for these cloud computers at the scheduled times.

1.  In the left-side navigation pane, choose **Operation & Maintenance** > **Snapshots**.
    
2.  In the top navigation bar, select a region.
    
3.  On the **Snapshots** page, click the **Automatic Snapshot Policy** tab and then click **Create Policy**.
    
4.  In the **Create Policy** panel, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Policy Name
    
    Enter a policy name that meets the requirements.
    
    Disk Scope
    
    -   System and data disks
        
    -   System disk only
        
    -   Data disk only
        
    
    Repeat Date
    
    Select the days of the week to execute the policy.
    
    Snapshot Creation Time
    
    Enter or select the time of day (UTC+8) to automatically create snapshots.
    
    Retention Period
    
    Enter the retention period for automatic snapshots. The value can be from 1 to 180 days.
    
    When the number of automatic snapshots for a cloud computer reaches the limit of 30, the system deletes the earliest snapshot to make room for the new one.
    
5.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
6.  In the top navigation bar, select a region.
    
7.  On the **Cloud Computers** page, find the cloud computer to which you want to associate an automatic snapshot policy, in the **Actions** column, click the ⋮ icon, and select **Change Automatic Snapshot Policy**.
    
8.  In the **Change Automatic Snapshot Policy** panel, select **Associate** in the **Automatic Snapshot Policy** section, select the created automatic snapshot policy, and click **OK**.
    
9.  In the confirmation dialog box, click **OK**.
    
    After you associate an automatic snapshot policy with a cloud computer, you can click the cloud computer ID and view the associated automatic snapshot policy on the **Details** tab.
    

## Restore data

If data is lost due to a system failure or an incorrect operation, you can use a snapshot to restore the disk data to the point in time when the snapshot was created.

**Warning**

Restoring a disk from a snapshot is an irreversible operation. After you restore a disk, it reverts to the state at the point in time when the snapshot was created. Data generated between the snapshot creation time and the current time is lost. Back up important data before you proceed. You can create a snapshot for the backup or manually back up data to another disk.

1.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
2.  In the top navigation bar, select a region.
    
3.  On the **Cloud Computers** page, find the cloud computer whose data you want to restore and click its ID.
    
4.  On the **Snapshots** tab, find the snapshot that you want to use to restore data and click **Restore Cloud Computer** in the **Actions** column.
    
    If a prompt appears, click **OK**. You can proceed to the next step after the cloud computer stops.
    
5.  In the **Restore Cloud Computer** panel, confirm the snapshot information and click **Restore Cloud Computer**.
    
    **Important**
    
    You can restore only one disk at a time. Do not perform other operations on the disk during the restoration. After you restore the disk, the entire disk reverts to the state at the point in time when the snapshot was created. The disk does not revert to the state of a specific partition or directory.
    
    After the disk data is restored, a message is displayed on the user interface. You can then verify the data restoration status.
    

## Delete a snapshot

You can manually delete a snapshot that you no longer need. You can delete both manually and automatically created snapshots. Automatically created snapshots are automatically deleted after the specified retention period ends.

**Warning**

Snapshots are region-specific. You must switch between regions to delete snapshots because they must be deleted separately in each region. After a snapshot is deleted, you cannot use it to restore data. This action cannot be undone. Proceed with caution.

You can delete a snapshot using one of the following methods.

-   Delete a snapshot on the **Cloud Computers** page
    
    1.  On the **Cloud Computers** page, find the cloud computer whose snapshot you want to delete and click its ID.
        
    2.  On the **Snapshots** tab, find the snapshot that you want to delete, click **Delete** in the **Actions** column, and then click **Confirm** in the confirmation dialog box.
        
-   Delete a snapshot on the **Snapshots** page
    
    On the **Snapshots** tab of the **Snapshots** page, find the snapshot to delete. In the **Actions** column, click **Delete**. In the confirmation dialog box, click **Confirm**.
    

## What to do next

If a snapshot is created from a system disk, you can use the snapshot to create a custom image. For more information, see [Create a custom image](/help/en/wuying-workspace/user-guide/create-an-image#task-1963850).
