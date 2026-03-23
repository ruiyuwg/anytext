Release a pay-as-you-go PolarDB for PostgreSQL (Compatible with Oracle) cluster to permanently delete the cluster and all its nodes.

> Subscription clusters cannot be manually released. A subscription cluster is automatically released when it expires.

## Prerequisites

Before you begin, ensure that you have:

-   A pay-as-you-go PolarDB cluster in the **Running** state
    

## Before you release a cluster

-   Releasing a cluster deletes **all nodes** in that cluster. To remove individual nodes without releasing the entire cluster, see [Add or remove nodes](/help/en/polardb/polardb-for-oracle/add-or-remove-a-read-only-node#task-1580301).
    
-   After a cluster is released, level-1 backups automatically become level-2 backups. View retained backups on the **Cluster Recycle Bin** page. To restore a released cluster, see [Restore a released cluster](/help/en/polardb/polardb-for-oracle/restore-a-released-cluster-1#task-2203574).
    

## Release a pay-as-you-go cluster

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  On the **Clusters** page, find the target cluster and choose **More** > **Release** in the **Actions** column.
    
4.  In the **Release Cluster** dialog box, select a backup retention policy and click **Release**.
    
    **Warning**
    
    If you delete all backup sets of the cluster, the cluster cannot be restored. Proceed with caution.
    
    **Backup retention policy**
    
    **Description**
    
    **When the cluster is released, the cluster data is automatically backed up, and all backup sets of the cluster are retained for a long period of time.**
    
    Retains all backups. The system runs an automatic backup task before releasing the cluster.
    
    **When the cluster is released, the cluster data is automatically backed up, and the latest backup set is retained for a long period of time.**
    
    Retains only the latest backup. The system runs an automatic backup task before releasing the cluster.
    
    **When the cluster is released, all backup sets of the cluster are deleted immediately.**
    
    Deletes all backups when the cluster is released.
    

## API reference

**API operation**

**Description**

[DescribeDBClusters](/help/en/polardb/polardb-for-oracle/api-describedbclusters-2#doc-api-polardb-DescribeDBClusters)

Queries a list of PolarDB clusters.

[DeleteDBCluster](/help/en/polardb/polardb-for-oracle/api-deletedbcluster-2#doc-api-polardb-DeleteDBCluster)

Deletes a PolarDB cluster.
