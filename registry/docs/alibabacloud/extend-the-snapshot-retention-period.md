If you set a custom retention period for a snapshot, you can extend the period before the snapshot expires.

**Note**

When a snapshot has 3 days left in its retention period, the **Retention Period** column in the snapshot list highlights the message **Released After xx days**.

## **Limits**

-   You cannot extend the retention period of snapshots that are permanently retained.
    
-   You cannot extend the retention period of Cloud Backup snapshots in the ECS console. Instead, go to the Cloud Backup console and [extend the retention period of a backup point](/help/en/cloud-backup/user-guide/back-up-ecs-instances#9a572ca1fd1p6).
    
-   You cannot extend the retention period of shared snapshots.
    
-   You cannot extend the retention period of archived snapshots.
    
-   You can only extend the retention period of a snapshot. You cannot shorten it.
    

## **Considerations**

-   Alibaba Cloud charges standard snapshot storage fees in each region based on the snapshot size and retention period. Extending the retention period of a snapshot increases storage costs. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1#p-2mp-k57-qza).
    
-   If the **Delete Automatic Snapshots While Releasing Disk** attribute is enabled for a disk, its automatic snapshots are deleted when the disk is released, even if the snapshot retention period has not expired. A disk can be released manually, released with its instance, or released when you replace the operating system. For more information, see [Enable automatic snapshots to be released with the disk](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#1abb5dfb98d4a).
    

## **Procedure**

1.  Go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Disk Snapshots** tab, find the snapshot that you want to modify. Use one of the following methods to extend its retention period.
    
    -   In the **Actions** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7509987661/p482638.png)** > **Extend Retention Period**.
        
    -   In the **Retention Period** column, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4321177371/p900277.png) icon.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4321177371/p900276.png)
        
4.  Extend the retention period of the snapshot, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0081567371/p772578.png)
    

## **References**

-   You can also call the [ModifySnapshotAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysnapshotattribute) API operation to extend the retention period of a snapshot.
    
-   To avoid unnecessary storage costs, periodically delete snapshots that you no longer need. For more information, see [Delete a snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1#task-1478465).
