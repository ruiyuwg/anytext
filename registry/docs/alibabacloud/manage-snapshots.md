A snapshot is a point-in-time backup of a disk. Snapshots can be used to back up data, recover data after accidental operations on servers, recover data after network attacks, and create custom images. This topic describes how to create and delete snapshots, roll back disks based on snapshots, and create custom images based on snapshots in the Simple Application Server console.

## Usage notes

**Note**

Creating snapshots for Simple Application Server disks is free of charge.

-   You can create up to three snapshots for each simple application server.
    
-   The total number of snapshots you can retain in your Alibaba Cloud account is three times the number of servers you own, up to a maximum of 15.
    
-   When a server is released after its subscription expires, its snapshots are also deleted.
    
-   Snapshots created before you reset a server or replace its image are retained but cannot be used to roll back the server's disks.
    

## **Billing**

Creating snapshots for Simple Application Server disks is free of charge.

## Create a snapshot

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  Find the server for which you want to create a snapshot and click the server ID in the server card.
    
3.  Click the **Disk** tab.
    
4.  Find the system disk or data disk for which you want to create a snapshot and click **Create Snapshot** in the **Actions** column.
    
    If no data disk is mounted to your simple application server, you can create snapshots only for the system disk.
    
5.  In the **Create Snapshot** dialog box, confirm the disk information, enter a snapshot name, and then click **OK**.
    
    For best results, do not stop or restart the server during the snapshot creation process, which typically takes 10 to 30 minutes.
    
6.  Click the **Snapshots** page to view the snapshot information.
    

## Roll back a disk based on a snapshot

### **Limit**

After you reset a simple application server, you cannot roll back the disks of the server based on a snapshot that is created before you reset the server.

### **Note**

-   The rollback operation is irreversible. After a disk is rolled back, all data changes that you made from when the snapshot was created to when the disk is rolled back are lost. To prevent data loss caused by accidental operations, we recommend that you create a snapshot for a disk to back up the disk before you roll back the disk.
    
-   If the simple application server is in the Running state when you roll back the disk, the system stops the server before it rolls back the disk.
    

### **Steps**

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  Find the server for which you want to roll back a disk based on a snapshot, and click the server ID in the server card.
    
3.  Click the **Snapshot** tab.
    
4.  Find the snapshot that you want to use for the rollback operation and click **Roll Back** in the **Actions** column.
    
5.  In the **Roll Back Disk** dialog box, confirm the disk information and click **Confirm**.
    
6.  In the **Roll-back Tip** dialog box, confirm the disk information again and click **OK**.
    
7.  When you see **Rolled Back**, click **Start** to start the server.![06F5EB60-3298-4C5A-BB77-69246D2BFF3A](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9862884571/p994743.png)
    

## Delete a snapshot

**Warning**

If you delete a snapshot, you cannot restore the backup file of the data on the disk for a specific point in time. Make sure that you no longer need the snapshot before you delete it.

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  Find the server whose snapshot you want to delete and click the server ID in the server card.
    
3.  Click the **Snapshot** tab.
    
4.  Find the snapshot that you want to delete and click **Delete** in the **Actions** column.
    

## **FAQ**

### **Q1: Does a simple application server support automatic snapshot policies?**

A1: No. A simple application server does not support automatic snapshot policies. You must manually create snapshots. You can retain up to three snapshots for a single simple application server. The maximum number of snapshots that can be retained in an Alibaba Cloud account is three times the number of simple application servers created in the account and cannot exceed 15.

### **Q2: What do I do if I cannot use snapshots to roll back a simple application server after I reset the simple application server?**

A2: A snapshot created before you reset a simple application server or replace the image of the server cannot be used to roll back the server after you reset the server or replace the image of the server. However, you can use the following solution:

1.  Create a custom image based on the snapshot that was created before you reset the simple application server. For more information, see [Create a custom image](/help/en/simple-application-server/user-guide/create-a-custom-image).
    
2.  Reset the simple application server by using the custom image that you created. For more information, see [Reset a simple application server](/help/en/simple-application-server/user-guide/reset-a-simple-application-server).
    
    **Warning**
    
    To prevent data loss after the simple application server is reset, we recommend that you create a snapshot to back up data before you reset the server. For more information, see the [Create a snapshot](#section-fup-p30-12b) section of this topic.
    

## Related operations

You can create custom images based on snapshots to save the data of simple application servers. The custom images can be shared to Elastic Compute Service (ECS) or used to create simple application servers that have the same configurations. For more information about custom images, see [Overview of custom images](/help/en/simple-application-server/user-guide/overview-of-custom-images#concept-2022712).
