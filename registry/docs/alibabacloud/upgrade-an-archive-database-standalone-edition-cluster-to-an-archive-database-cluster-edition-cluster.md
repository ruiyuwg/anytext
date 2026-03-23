Archive Database Edition includes Archive Database Standalone Edition and Archive Database Cluster Edition (currently called X-Engine Edition). This topic describes how to upgrade an Archive Database Standalone Edition cluster to an Archive Database Cluster Edition cluster.

## Background information

You cannot purchase Archive Database Standalone Edition clusters. However, you can continue to use existing Archive Database Standalone Edition clusters. You can upgrade an Archive Database Standalone Edition cluster to an Archive Database Cluster Edition cluster of Dedicated. For more information about Archive Database Cluster Edition, see [X-Engine Edition](/help/en/doc-detail/195661.html#concept-2010571).

## Precautions

-   If an Archive Database Standalone Edition cluster is upgraded to an Archive Database Cluster Edition cluster, the nodes in the cluster automatically restart. In most cases, the restart takes three to five minutes based on the redo logs that accumulate before the upgrade. In extreme cases, the restart may take up to 30 minutes. During this period, your business is unavailable. Exercise caution when you perform this upgrade. We recommend that you perform this upgrade during off-peak hours.
-   After the upgrade is successful, all nodes in the cluster continue to use the primary endpoint. To use a cluster endpoint, you must configure the cluster endpoint on your own.
-   After an Archive Database Standalone Edition cluster is upgraded to an Archive Database Cluster Edition cluster, it cannot be rolled back to an Archive Database Standalone Edition cluster. If required, we recommend that you add nodes. After you add nodes, existing nodes are not restarted. The operations of adding and removing nodes and precautions are consistent with those of Cluster Edition. For more information, see [Add or remove read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#task-1580301).

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
2.  In the upper-left corner of the console, select the region in which the cluster that you want to manage is deployed.
3.  Open the **Change Configurations** dialog box by using one of the following methods:
    
    -   Method 1:
        
        On the **Clusters** page, find the cluster that you want to manage and click **Upgrade to Archive Database Cluster Edition** in the **Actions** column. ![Upgrade to Archive Database Cluster Edition](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0726343461/p361072.png)
        
    -   Method 2:
        1.  On the **Clusters** page, click the ID of the cluster.
        2.  In the **Database Nodes** section of the **Basic Information** page, click **Upgrade to Archive Database Cluster Edition**. ![Upgrade to Archive Database Cluster Edition](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0726343461/p361073.png)
    
4.  Click **\+ Add a read-only node**, specify **Switching Time**, read and accept the terms of service, and then click **Buy Now**.
    
    **Note**
    
    -   If you want to add multiple nodes to your PolarDB for MySQL cluster at a time, click **\+ Add a read-only node** again to add more nodes.
    -   You can set **Switching Time** to **Switch Now** or **Switch At**. If you select **Switch At**, you can specify a point in time within the following 24 hours. The nodes will be added within 30 minutes after the specified point in time. You can view the details about the scheduled task on the **Scheduled Tasks** page, or cancel the task. For more information, see [View or cancel a scheduled task](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266).
    
5.  On the **Purchase** page, confirm the order information and click **Purchase**.
