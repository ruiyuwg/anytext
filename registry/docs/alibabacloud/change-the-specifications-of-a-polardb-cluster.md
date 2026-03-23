You can change the specifications of a cluster based on your business requirements. This topic describes how to change the specifications of a PolarDB cluster.

## Prerequisites

The cluster does not have specifications change tasks that are in progress.

## Background information

PolarDB supports capacity scaling in three dimensions:

-   Scale-up or scale-down of the computing capacity: upgrades or downgrades the cluster specifications. This topic describes the details of the scaling capability.
    
-   Scale-in or scale-out of the computing capacity: adds or removes read-only nodes. For more information, see [Add or remove nodes](/help/en/polardb/polardb-for-oracle/add-or-remove-a-read-only-node).
    
-   Scale-in or scale-out of the storage capacity: automatically scales in or scales out the storage capacity in response to changes in the amount of data based on the storage type and billing method. For more information, see [Manually scale up storage capacity](/help/en/polardb/polardb-for-oracle/manually-scale-up-the-storage-capacity-of-a-cluster).
    

## Specifications change fees

For more information, see [Configuration change fees](/help/en/polardb/polardb-for-oracle/configuration-change-fees-1).

## Usage notes

-   For a PolarDB for PostgreSQL centralized cluster whose Database Edition is Enterprise Edition or Standard Edition, you can change the specifications of the cluster or an individual node in the cluster.
    
    **Note**
    
    When you change the specifications of an individual node in a cluster, make sure that at least one read-only node in the cluster has the same specifications as the primary node. You can configure the specifications of other nodes based on your business requirements.
    
-   For a PolarDB for PostgreSQL distributed cluster, you can only uniformly change the specifications of all compute nodes or data nodes in the cluster. You cannot change the specifications of a single compute node or data node, or the primary node or read-only node on a compute node or data node.
    
-   The amount of time required to change cluster specifications varies based on the number of compute nodes in the cluster. Approximately 5 minutes are required for each compute node. For example, if a cluster has two compute nodes, changing the cluster specifications requires approximately 10 minutes. The database load and the number of tables also affect the total amount of time required to change the cluster specifications.
    
-   When you change the cluster specifications, data stored in the cluster is not affected.
    
-   When you change the specifications of a cluster, your applications are temporarily disconnected from the cluster for up to 30 seconds. We recommend that you change the cluster specifications during off-peak hours and make sure that your applications can automatically reconnect to the cluster.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner of the console, select the region in which the cluster that you want to manage is deployed.
    
3.  Use one of the following methods to go to the **Change Configurations** page:
    
    -   Find the cluster whose specifications you want to change, and click **Change Configurations** in the **Actions** column. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9157876471/p953437.png)
        
    -   Click the ID of the cluster whose specifications you want to change. Then, in the Database Nodes section of the **Basic Information** page, click **Change Configurations**. ![Basic information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4703125261/p34579.png)
        
    
4.  Select **Upgrade** or **Downgrade** and click **OK**. ![Change configurations](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4703125261/p86676.png) 
    
    **Note**
    
    Only subscription clusters support **Temporary Upgrade**. For more information, see [Temporary upgrade](/help/en/polardb/polardb-for-oracle/temporary-upgrade-1#task-1580301).
    
5.  On the **Change Configurations** page, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Specification Type
    
    Select the new specifications type. By default, **Dedicated Specifications** is selected.
    
    Node Specifications
    
    Select the new specifications for the node.
    
    **Note**
    
    Make sure that at least one read-only node in the cluster has the same specifications as the primary node. You can configure the specifications for other read-only nodes based on your business requirements.
    
    Switching Time
    
    Set the **Switching Time** parameter to **Switch Now** or **Switch At.**
    
    If you select **Switch At**, you can select a point in time within the next 24 hours. The specifications are changed within 30 minutes after the specified point in time. You can go to the **Scheduled Tasks** page to view the detailed information of the task or cancel the task. For more information, see [Scheduled tasks](/help/en/polardb/polardb-for-oracle/view-or-cancel-a-scheduled-task)
    
6.  Read and select the **Terms of Service**. Then, click **Buy Now**.
    
7.  On the **Purchase** page, confirm the order information and click **Subscribe.**
    
    **Note**
    
    The new specifications take effect within 10 minutes.
    

## Related API operations

**Operation**

**Description**

[ModifyDBNodeClass](/help/en/polardb/polardb-for-oracle/api-modifydbnodeclass-2#doc-api-polardb-ModifyDBNodeClass)

Changes the node specifications of a PolarDB cluster.
