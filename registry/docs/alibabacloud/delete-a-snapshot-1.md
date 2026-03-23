If you no longer require one or more snapshots or the maximum number of snapshots is reached, you can delete snapshots to free up storage space and prevent unnecessary charges. You can manually delete snapshots, configure snapshots to be automatically deleted when the snapshots expire, and configure automatic snapshots to be automatically deleted when the source disks are released. Source disks are the cloud disks for which automatic snapshots are created.

## **Considerations**

-   Deleted snapshots cannot be restored and the snapshot data cannot be recovered. Proceed with caution.
    
-   Deleted snapshots do not affect the cloud disks that are created from the snapshots.
    
-   If you created data disks from a snapshot, you can use the data disks as expected, but you can no longer re-initialize the disks after you delete the snapshot. For information about how to re-initialize a data disk, see [Re-initialize data disk](/help/en/ecs/user-guide/re-initialize-a-data-disk).
    
-   If you created custom images from a snapshot, you must delete the images before you can delete the snapshot. After you delete the custom images, you can no longer use the images to create Elastic Compute Service (ECS) instances or re-initialize the system disks of ECS instances that are created from the images. For information about how to re-initialize the system disk of an ECS instance, see [Re-initialize system disk (reset OS)](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb).
    
-   You are charged for snapshots by region, and you can delete snapshots in only one region at a time. After you delete snapshots in a region, you are charged lower snapshot fees in the region. To delete all snapshots in all regions in your account, switch between regions and delete snapshots region by region. You can view the regions in which snapshots are available on the Overview page in the ECS console. For more information, see the [View snapshot sizes in all or a single region](/help/en/ecs/user-guide/view-the-snapshot-size#section-o26-o3h-ts6) section of the "View the snapshot size" topic.
    

## **Limits**

The following snapshots cannot be manually deleted or automatically deleted on expiration or when the source disks are released:

-   Shared snapshots. You must unshare a shared snapshot before you can delete the snapshot. For information about how to unshare a snapshot, see the [Share snapshot](/help/en/ecs/user-guide/share-a-snapshot#a8e9d760d9fi3) section of the "Share a snapshot" topic.
    
-   Snapshots from which custom images are created. If you no longer require the custom images, you must delete the images before you can delete the snapshots. For information about how to delete a custom image, see [Delete a custom image](/help/en/ecs/user-guide/delete-a-custom-image#concept-azs-5bt-xdb).
    
-   Snapshots created by Cloud Backup. To delete snapshots created by Cloud Backup, go to the [ECS Instance Backup](https://hbr.console.alibabacloud.com/#/cloud/ebs?linkRef=ecs_old) page in the Cloud Backup console. For more information, see [Back up an ECS instance](/help/en/cloud-backup/user-guide/back-up-ecs-instances).
    

## **Procedure**

You can manually delete a snapshot, configure a snapshot to be automatically deleted when the snapshot expires, and configure automatic snapshots to be automatically deleted when the source disks are released.

### **Manually delete a snapshot**

1.  Go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Disk Snapshots** tab, find the snapshot that you want to delete and click **Delete Snapshot** in the **Actions** column.
    
4.  In the **Delete Snapshot** dialog box, follow the on-screen instructions to delete the snapshot.
    
    #### **Snapshot not associated with resources**
    
    If the snapshot is not associated with resources, such as cloud disks or custom images, perform the following steps to delete the snapshot.
    
    1.  Select **I understand that snapshots cannot be restored and the snapshot data cannot be retrieved after the snapshots are deleted.**
        
    2.  Click **Confirm**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5059365371/p889507.png)
    
    #### Snapshot from which cloud disks are created
    
    If you created cloud disks from a snapshot, you can forcefully delete the snapshot.
    
    **Important**
    
    After you forcefully delete the snapshot, you can use the data disks that are created from the snapshot as expected, but you can no longer re-initialize the data disks. For information about how to re-initialize a data disk, see [Re-initialize a data disk](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb).
    
    1.  Read the notes. If you accept the risks, select **I am aware of the risks and want to delete the snapshots.** Then, click **Next**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5059365371/p889510.png)
        
    2.  Follow the on-screen instructions to delete the snapshot.
        
    
    **Note**
    
    If you no longer require the cloud disks, you can release the disks on the Block Storage page, and then delete the snapshot on the Disk Snapshots tab. For information about how to release a cloud disk, see [Release a disk](/help/en/ecs/user-guide/release-a-disk).
    
    #### Snapshot from which custom images are created
    
    If you created custom images from a snapshot, you must delete the images before you can delete the snapshot.
    
    **Important**
    
    After you delete the custom images, you can use the ECS instances that are created from the images, but you can no longer re-initialize the system disks of the instances. For information about how to re-initialize the system disk of an ECS instance, see [Re-initialize system disk (reset OS)](/help/en/ecs/user-guide/re-initialize-a-system-disk#concept-stg-xd3-ydb). For information about how to delete a custom image, see [Delete a custom image](/help/en/ecs/user-guide/delete-a-custom-image).
    
    Click **Images** to go to the Custom Images tab of the Images page. Delete the custom images. Then, go back to the Disk Snapshots tab to delete the snapshot.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5059365371/p889528.png)
    

### **Configure a snapshot to be automatically deleted when the snapshot expires**

When you create a snapshot or an automatic snapshot policy, you must configure the **Retention Period** parameter to specify a retention period for the created snapshot. After the retention period of a snapshot ends, the snapshot expires and is automatically deleted. For information about how to create a snapshot and an automatic snapshot policy, see [Create snapshot manually](/help/en/ecs/user-guide/create-a-snapshot) and [Create policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1).

**Important**

If the **Delete Automatic Snapshots While Releasing Disk** attribute is enabled for a cloud disk that has automatic snapshots, and the disk is released before the automatic snapshots expire, the automatic snapshots are automatically deleted when the disk is released. If the cloud disk is a system disk, the automatic snapshots of the disk are also automatically deleted when the system disk is replaced.

-   If the snapshot is about to be released in three days, **Released After {days} Days** is displayed in the **Retention Period** column corresponding to the snapshot on the Disk Snapshots tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5059365371/p894042.png)
    
-   If you configured a retention period in days for a snapshot, you can extend the retention period before the snapshot expires to retain the snapshot for a longer period of time. For more information, see [Extend snapshot retention period](/help/en/ecs/user-guide/extend-the-snapshot-retention-period).
    

### **Configure automatic snapshots to be automatically deleted when the source disks are released**

If the **Delete Automatic Snapshots While Releasing Disk** attribute is enabled for a cloud disk, the automatic snapshots of the disk are automatically deleted when the disk is manually released or when the disk is automatically released together with the ECS instance to which the disk is attached. If the cloud disk is a system disk, the automatic snapshots of the disk are also automatically deleted when the system disk is replaced. For more information, see the [Enable automatic snapshots to be released with the disk](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#1abb5dfb98d4a) section of the "Configure an automatic snapshot policy for a cloud disk" topic.

**Important**

If the retention period of an automatic snapshot of a cloud disk ends before the disk is released, the snapshot expires and is automatically deleted when the retention period ends.

## References

-   Before you delete snapshots, identify and delete relevant automatic snapshot policies in each region based on your business requirements to ensure that no subsequent automatic snapshots are created based on the policies. For more information, see [Delete policy](/help/en/ecs/user-guide/delete-an-automatic-snapshot-policy#task-1443760).
    
-   You can call the following API operations:
    
    -   [DeleteSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-deletesnapshot): deletes a snapshot.
        
    -   [ModifyDiskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskattribute): modifies the attributes of a cloud disk, including the Delete Automatic Snapshots While Releasing Disk attribute (DeleteAutoSnapshot).
