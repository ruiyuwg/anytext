The cluster recycle bin stores released PolarDB clusters. This topic describes the principles, retention periods, and billing for the cluster recycle bin of PolarDB.

## **Precautions**

If you choose to retain the long-term retention backup set when you manually [release a cluster](/help/en/polardb/polardb-for-mysql/user-guide/release-a-cluster), the backup set is automatically moved to the cluster recycle bin.

After a backup set is moved to the cluster recycle bin, the retention rules vary based on the cluster edition:

-   For Enterprise Edition clusters, level-1 backups are asynchronously converted into level-2 backups at a rate of about 150 MB/s. A [small fee](#e87488f5cd9no) is charged.
    
-   For Standard Edition clusters, a [small fee](#e87488f5cd9no) is charged for level-1 backups.
    

For clusters in the cluster recycle bin, you can [restore a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/restore-a-released-cluster) or [permanently delete a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster).

**Note**

-   Retaining backups may incur a small fee. You can delete backups at any time to save costs.
    
-   If your Alibaba Cloud account has an overdue payment, the backup recovery feature for PolarDB clusters in the cluster recycle bin is disabled. After you settle the payment, the feature is automatically re-enabled.
    
-   If your Alibaba Cloud account has an overdue payment for more than 14 days, the system automatically releases the backup sets in the cluster recycle bin. The related data is permanently deleted and cannot be recovered.
    

## **Retention periods**

After a cluster enters the cluster recycle bin, its backup files can be retained for a maximum period of 7,300 days.

## **Billing**

Backup retention rules vary by edition:

-   For Enterprise Edition clusters, no fees are charged for level-1 backups in the cluster recycle bin. Fees are charged only after the level-1 backups are converted into level-2 backups.
    
-   For Standard Edition clusters, a small fee is charged for level-1 backups.
    

**Edition**

**Region**

**Price (USD/GB/hour)**

**Enterprise Edition**

The Chinese mainland

0.0000325

China (Hong Kong) and regions outside China

0.0000455

**Standard Edition**

The Chinese mainland

0.0000325

China (Hong Kong) and regions outside China

0.0000455

## **FAQ**

Q: How do I configure the cluster recycle bin to retain only the most recent full backup set?

A: The "Keep only the latest full backup" option cannot be set for released PolarDB clusters in the recycle bin. You can delete excess backup sets in one of the following two ways:

1.  Manually [delete backups](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster#title-x1p-btw-wjb). You must keep at least one backup. Otherwise, the cluster cannot be recovered.
    
2.  Call API operations to batch delete backups as follows:
    
    1.  Call [DescribeDBClustersWithBackups](/help/en/polardb/polardb-for-mysql/api-describedbclusterswithbackups#title) to retrieve the \`DBClusterId\` of PolarDB clusters that contain backup sets.
        
    2.  Call [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups#title) with the \`DBClusterId\` to retrieve the backup set ID (\`BackupId\`).
        
    3.  Finally, call [DeleteBackup](/help/en/polardb/polardb-for-mysql/api-deletebackup#title) with the \`DBClusterId\` and \`BackupId\` to delete the backup set.
        

Q: How do I keep only the latest full backup set in the cluster recycle bin?

A: You cannot configure a released PolarDB cluster in the recycle bin to retain only the latest full backup set. You can delete extra backup sets using one of the following two methods:

1.  Manually [delete backups](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster#title-x1p-btw-wjb). You must keep at least one backup set to ensure that the cluster can be recovered.
    
2.  Call API operations to delete backup sets in batches. The procedure is as follows:
    
    1.  Call [DescribeDBClustersWithBackups](/help/en/polardb/polardb-for-mysql/api-describedbclusterswithbackups#title) to retrieve the ID (DBClusterId) of the PolarDB cluster that contains the backup sets.
        
    2.  Call [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups#title) with the cluster ID to retrieve the corresponding backup set ID (BackupId).
        
    3.  Finally, call [DeleteBackup](/help/en/polardb/polardb-for-mysql/api-deletebackup#title) with the cluster ID and backup set ID to delete the backup set.
