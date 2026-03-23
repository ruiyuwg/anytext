You can use restore points to back up and restore data on cloud computers. For example, you can create restore points before you perform high-risk operations such as modifying critical system files. If a system failure occurs or a misoperation is performed, you can use the restore points to restore data. This topic describes how to use system and custom restore points to back up and restore data.

**Important**

In this topic, the macOS client of Alibaba Cloud Workspace V7.9 is used as an example. The actual use case may vary based on the Alibaba Cloud Workspace client that you use. If the client that you use is outdated, update the client to the latest version.

## Background information

-   Custom restore points: You can create custom restore points at a specific point in time to back up data in specific disks based on your business requirements.
    
-   System restore points: By default, the system automatically creates restore points for the system disk and data disk of each cloud computer every day. The restore points are retained for only three days and are automatically deleted upon expiration.
    
    The system also automatically creates restore points for cloud computers in the following scenarios:
    
    -   For cloud computers to which an automatic snapshot policy is attached, the system automatically creates restore points based on the time specified by the policy. For more information, see [Create and apply an automatic snapshot policy](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#p-i7m-wna-zko).
        
    -   Before the administrator updates a cloud computer or custom image, the system automatically creates a restore point. This way, the system can automatically roll back when the update fails. If the update is successful, the restore point of the system disk of the original cloud computer is deleted and the restore point of the data disk is retained.
        
    -   When you change the image of a cloud computer, the system automatically creates a restore point if the image is a custom image that has been deleted. After the image is changed, the system automatically deletes the restore point.
        
    -   Before you update a cloud computer by using a client, the system automatically creates a restore point. This way, the system can automatically roll back when the update fails. In this scenario, up to three restore points can be created for a cloud computer. The restore points are retained for three days.
        
    

For more information about restore points, see [Use snapshots (public preview)](/help/en/wuying-workspace/user-guide/use-snapshots-public-preview#task-2013589).

## Usage notes

-   Custom restore points of cloud computers in a cloud computer share cannot be created by using a client.
    
-   Custom restore points of a cloud computer that is assigned to multiple end users cannot be created by using a client.
    
-   Up to four custom restore points can be created for each cloud computer.
    
-   Only cloud computers in the **Stopped** state can be restored by using a restore point.
    

## Back up data

You can create custom restore points to back up data.

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Restore Points** tab.
    
3.  Click the **Custom Restore Points** tab and then click **Create Custom Restore Points**.
    
4.  In the **Create Custom Restore Points** dialog box, select the disk that you want to back up, specify a name for the restore point, and then click **OK**.
    
    You can view the creation progress and status of the restore point on the **Custom Restore Points** tab.
    

## Restore data

When data on a disk is lost due to a system failure or an operation error, you can use a restore point or restore the initial image to restore data.

#### **Use a restore point**

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Restore Points** tab.
    
3.  On the **System Restore Points** or **Custom Restore Points** tab, find a restore point based on your business requirements and click **Restore**.
    
    **Warning**
    
    The restore operation is irreversible. After you restore data on a disk, the disk is restored to the state at the time point when the restore point is created. Data that is generated between the creation time of the restore point and the current time is lost. Make sure that you back up important data before you restore a disk.
    
4.  In the message that appears, click **Confirm Restore**.
    

#### **Restore the initial image**

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Images** tab.
    
3.  On the **Images** tab, click **Restore Initial Image**.
    
    **Note**
    
    This feature is available only when the Windows client or macOS client of Alibaba Cloud Workspace V7.9 or later is used.
    
4.  Read the usage notes in the message that appears, and click **OK**.
    
    **Warning**
    
    The restore operation is irreversible. After you restore the initial image, all data on the cloud computer is replaced by the data stored in the initial image. You must back up important data in advanced. We recommend that you create custom restore points to back up data.
    

## View restore point-based restoration records

Each time you use a restore point to restore the data of a cloud computer, the operations are recorded.

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Restore Points** tab.
    
3.  On the **Restore Points** tab, click **View Restoration History**.
    
    On the page that appears, details about each restore point-based restoration record are displayed, including the type, name, and creation time of the restore point, the time when the restore point is used to restore data, and the disk for which the restore point is created.
    

## Delete a custom restore point

Elastic Desktop Service (EDS) Enterprise allows you to create up to four custom restore points for each cloud computer. If you want to create more than four custom restore points, we recommend that you delete the existing restore points that you no longer require.

1.  Log on to an Alibaba Cloud Workspace terminal.
    
2.  Move the pointer over the card of the cloud computer you want to manage and click **Manage**. Then, click the **Restore Points** tab.
    
3.  On the **Custom Restore Points** tab, find the restore point you want to delete and click **Delete**.
    
4.  In the message that appears, click **Confirm Delete**.
