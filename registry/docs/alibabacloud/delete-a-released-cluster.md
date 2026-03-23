The Cluster Recycle stores released PolarDB clusters. You can restore a cluster in the Cluster Recycle to a new cluster, or delete backup sets of the cluster. This topic describes how to delete the backup sets of released clusters. In this example, PolarDB for MySQL clusters are used.

## Precautions

-   Released clusters in the cluster recycle bin must have at least one backup set. If all the backup sets of a cluster have been deleted, you cannot restore the released cluster.
    
-   After a cluster is released, all level-1 backups in the cluster recycle bin are asynchronously archived to level-2 backups at a rate of approximately 150 MB/s. For more information about backups, see [Data backup](/help/en/polardb/polardb-for-mysql/user-guide/overview-72#section-ca4-lzl-054).
    

## Delete a backup

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster to which you want to connect is deployed.
    
3.  In the left-side navigation pane, click **Cluster Recycle**.
    
4.  Find the cluster that you want to manage, and click the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4132729951/p102763.png) icon next to the cluster to show a list of backup sets.
    
5.  Find the backup set that you want to delete, and click **Delete Backup** in the **Actions** column.
    
    ![删除备份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4132729951/p102770.png)
    
    **Warning**
    
    If you delete all the backup sets of a cluster in the **Cluster Recycle Bin**, the cluster cannot be restored. Proceed with caution.
    
6.  In the message that appears, click **OK**.
