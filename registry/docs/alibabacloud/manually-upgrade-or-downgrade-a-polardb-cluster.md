If your workload changes periodically or you need to make planned adjustments to specifications, you can manually upgrade or downgrade the specifications (CPU and memory) of the compute nodes in a PolarDB cluster. This helps you meet performance requirements and control costs.

## **Assess the impact of an upgrade or downgrade**

Before you manually upgrade or downgrade a cluster, you must assess the potential impact on your services and create a change plan.

#### **Service impact**

An upgrade or downgrade operation on a PolarDB cluster triggers a node restart. This causes transient disconnections and brief performance fluctuations. The impact depends on whether the cluster supports [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/) and whether binary logging is enabled.

-   If the cluster does not support [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/), a transient disconnection of about 20 to 30 seconds may occur during the specification change. Before you perform the switch, ensure that your application has a reconnection mechanism.
    
-   If the cluster supports [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/), the specification change may cause a transient disconnection of about 5 to 10 seconds if binary logging is enabled. If binary logging is disabled, performance may drop to zero for 1 to 3 seconds, but connections and transactions will not be interrupted.
    

**Important**

-   **Change duration**: The change task takes about 5 minutes per compute node. For example, changing two nodes takes about 10 minutes. The actual duration depends on factors such as cluster workload and the number of databases and tables.
    
-   **Data latency**: During the change, the data synchronization latency of read-only nodes may be higher than usual.
    
-   **Data security**: An upgrade or downgrade only adjusts compute node resources. It does not affect any existing data in the cluster.
    
-   **Restart order**: When you upgrade or downgrade the primary node and read-only nodes at the same time, the system restarts the read-only nodes first, and then restarts the primary node. No primary/standby switchover occurs during this process.
    

#### **Node specification limits**

To ensure cluster stability and high availability, the following limits apply to the specifications of primary and read-only nodes:

-   At least one read-only node must have the same specifications as the primary node.
    
-   A read-only node with [hot standby enabled](/help/en/polardb/polardb-for-mysql/user-guide/configure-hot-standby-nodes) must have the same specifications as the primary node.
    
-   The memory of a read-only node cannot be less than half the memory of the primary node.
    
-   The minimum number of CPU cores for a read-only node is determined by the following rules:
    
    **Primary node CPU specifications**
    
    **Minimum CPU specifications for read-only nodes**
    
    2
    
    2
    
    4
    
    4
    
    8
    
    4
    
    16
    
    8
    
    32
    
    16
    
    64
    
    32
    
    88
    
    64
    
    120
    
    64
    

**Note**

-   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) clusters are not subject to the preceding limits.
    
-   Because of their analytical workload characteristics, [In-Memory Column Index (IMCI) read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) should have higher specifications than the primary node.
    

## **Scope**

Before you start, ensure that the following prerequisites are met.

-   **Billing method**: The target cluster must be a **Subscription** or **Pay-as-you-go** cluster.
    
-   **Cluster status**: The target cluster must be in the **Running** state, and no other configuration change tasks, such as adding nodes, deleting nodes, or performing minor version upgrades, are in progress.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters** and select the **region** where your cluster is located.
    
2.  You can navigate to the **Change Configurations** page in one of the following ways:
    
    -   Click **Change Configurations** in the **Actions** column of the target cluster.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7807776671/p1022880.png)
        
    -   Click the ID of the target cluster to go to the **Basic Information** page. In the **Database Nodes** section, click **Change Configurations**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7807776671/p1023387.png)
        
3.  In the **Change Configuration** dialog box, select the **Upgrade** or **Downgrade** option, and then click **OK**.
    
4.  On the **Upgrade/Downgrade** page, review the **Current Configuration** and configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Sub-series**
    
    Select the target specification series, including **General Specification** and **Dedicated Specification**.
    
    **Node**
    
    Select new specifications for the nodes to be changed. You can change the specifications for the entire cluster or set them for each node individually.
    
    **Note**
    
    Make sure that one read-only node has the same specifications as the primary node. You can configure the specifications for all other nodes as needed.
    
    **Switchover Time**
    
    Select a time to change the configurations.
    
    -   **Switch Now**: The change task takes effect immediately.
        
    -   **Scheduled Switch**: Select a point in time within the next 24 hours. The change task will be completed within 30 minutes after the selected time. You can view or cancel the task on the [Scheduled Tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266) page.
        
    
5.  Read and agree to the Terms of Service, click **Buy Now**, and complete the payment. After the payment is successful, the task is executed at the scheduled switchover time.
    

## Billing

Upgrading or downgrading a cluster affects the billing. The rules vary depending on the cluster's billing method.

-   **Pay-as-you-go**: After a successful upgrade or downgrade, you are charged hourly based on the price of the new specifications.
    
-   **Subscription**:
    
    -   Upgrade: You must pay the price difference between the new and old specifications for the remaining subscription period.
        
    -   Downgrade: The system automatically calculates the remaining value and issues a refund. For more information, see [Refund amount calculation](/help/en/user-center/description-of-downgrade-refund-rules#f2ea67656brq7).
        

## Related API operations

**API**

**Description**

[ModifyDBNodeClass](/help/en/polardb/api-polardb-2017-08-01-modifydbnodeclass)

Changes the specifications of a PolarDB cluster node.

[ModifyDBNodesClass](/help/en/polardb/api-polardb-2017-08-01-modifydbnodesclass)

Changes the specifications of a single node in a PolarDB cluster.

## **FAQ**

**What do I do if an "insufficient resources" message appears when I change configurations?**

If you receive the message **Insufficient Resources. Please Change The Region Or Zone And Try Again.** when you select node specifications, it indicates that the selected specifications are unavailable in the current zone. You can perform one of the following operations:

1.  Select similar specifications: Select other specifications that are slightly lower or higher.
    
2.  Change the zone: [Manually change the zone](/help/en/polardb/polardb-for-mysql/user-guide/change-the-primary-zone-and-vswitch-of-a-cluster) to prevent similar resource shortages in the future.
