This topic describes how to set a maintenance window for a PolarDB cluster so that your business is not affected during the maintenance process.

## Background information

To ensure the stability of PolarDB clusters, the backend system performs maintenance operations on the clusters from time to time. We recommend that you select a maintenance window within the off-peak hours of your business to minimize the impact on the business during the maintenance process.

## Considerations

-   Before the maintenance is performed on a PolarDB cluster, PolarDB sends SMS messages and emails to contacts listed in your Alibaba Cloud account.
    
-   To ensure the stability of a PolarDB cluster during the maintenance process, the cluster enters the Under Maintenance state before the specified maintenance window starts. When the cluster is in the Under Maintenance state, you can access data in the databases of the cluster. However, features that are related to configuration changes become unavailable in the console except for the account management, database management, and whitelisting features. For example, you cannot upgrade, downgrade, or restart the cluster. Query features such as performance monitoring are still available.
    
-   Within the maintenance window of a cluster, the cluster may experience one or two transient disconnections. Make sure that the application has an automatic reconnection mechanism. The cluster recovers to the normal state immediately after the disconnection.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region in which the cluster is deployed.
    
4.  Find the cluster and click its ID.
    
5.  On the **Basic Information** page, click **Modify** next to **Maintenance Window**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3576876471/p953393.png)
    
6.  In the Modify Maintenance Window dialog box, select a maintenance window, and click **OK**.
    

**Note**

-   To ensure the stability of PolarDB clusters, the backend system performs maintenance operations on the clusters from time to time. We recommend that you select a maintenance window within the off-peak hours of your business to minimize the impact on the business during the maintenance process.
    
-   Within the maintenance window of a cluster, the cluster may experience one or two transient disconnections. Make sure that the application has an automatic reconnection mechanism.
    

## Related API operations

**API operation**

**Description**

[CreateDBCluster](/help/en/polardb/polardb-for-mysql/api-createdbcluster#reference-nyk-pd5-xfb)

Creates a PolarDB cluster.

[ModifyDBClusterMaintainTime](/help/en/polardb/polardb-for-mysql/api-modifydbclustermaintaintime#reference-bkt-kjs-xfb)

Modifies the maintenance window for a PolarDB cluster.
