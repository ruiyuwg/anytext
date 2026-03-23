When your business faces predictable short-term spikes in read traffic from activities such as e-commerce sales promotions, data analytics, or report generation, insufficient read capacity can slow down your application's response time. To handle this scenario, PolarDB lets you temporarily add read-only nodes. For a subscription cluster, you can add one or more read-only nodes on demand and set a time for them to be automatically removed. This feature lets you elastically scale the read capacity of your cluster to handle peak business traffic. When the specified time is reached, the system automatically removes the temporary nodes and restores the original cluster configuration without requiring manual intervention.

## **Impact assessment**

Before you temporarily add nodes, assess the potential impact on your business to plan for the change.

#### **Service impact**

-   **Add temporary nodes**: Adding a temporary read-only node takes approximately 5 minutes. If you add multiple temporary read-only nodes at the same time, they are processed in parallel. The actual time required depends on factors such as the cluster payload and the number of databases and tables. The cluster is not affected during the node addition process.
    
-   **Delete temporary nodes**: When the node is automatically removed upon expiration, connections to that node will experience a transient disconnection. However, other nodes are not affected. If your application is connected to the cluster endpoint, PolarDB automatically blocks the deleted node, so you do not need to modify your application configuration.
    

#### **Node quantity limits**

-   **Enterprise Edition**:
    
    -   Cluster Edition: Supports up to 15 read-only nodes. You must retain at least one read-only node to ensure the high availability of the cluster. Therefore, you cannot delete the last read-only node.
        
    -   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/): Supports up to 63 read/write nodes and 15 read-only nodes (that is, global read-only nodes).
        
-   **Standard Edition**: Supports up to 7 read-only nodes.
    

#### **Node specification limits**

To ensure the stability and high availability of the cluster, the following limits apply to the specifications of primary and read-only nodes:

-   The memory of a new read-only node cannot be less than half of the primary node's memory.
    
-   New read-only nodes have minimum CPU core requirements. The rules are as follows:
    
    **Primary node CPU cores**
    
    **Minimum allowed CPU cores for read-only nodes**
    
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

The [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) is not subject to these restrictions.

#### **Other limits**

-   During the temporary node addition period, you can perform this operation only one more time.
    
-   During a temporary node addition, you cannot [delete nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#f36346849f9s2), [manually upgrade or downgrade](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster), [temporarily upgrade](/help/en/polardb/polardb-for-mysql/user-guide/temporary-upgrade), or terminate the cluster.
    

## **Scenarios**

Before you begin, ensure that the following prerequisites are met.

-   **Billing type**: The billing method for the target cluster must be **Subscription**.
    
-   **Cluster nodes**:
    
    -   To temporarily add read-only nodes:
        
        -   The cluster must have at least one read-only node. You cannot temporarily add nodes to a single-node cluster.
            
        -   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/): You cannot add temporary read-only nodes.
            
    -   To temporarily add read-only nodes with a columnstore index:
        
        -   The cluster must have at least one read-only node with a columnstore index.
            
-   **Cluster status**: The target cluster must be in the **Running** state, with no other configuration change tasks, such as adding nodes, deleting nodes, or minor version upgrades, in progress.
    
-   **Pending tasks**: There are no pending configuration change tasks, such as adding nodes, deleting nodes, or changing configurations.
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters** and select the **region** where the cluster is located.
    
2.  You can open the **Add/Remove Node** in one of the following two ways:
    
    -   For the target cluster, click **Add/Remove Node** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1023701.png)
        
    -   Click the ID of the target cluster to navigate to the **Basic Information** page. In the **Database Nodes** section, click **Add/Remove Node**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1023702.png)
        
3.  In the **Add/Remove Node** dialog box, you can select either **Temporarily Add Node** or **Temporarily Add IMCI Read-only Nodes** based on your requirements, and then click **OK**.
    
4.  On the **Temporary Upgrade** page, confirm the **Current Configuration** and **Expiration Time**. Click **Add Node** or **Add a Read-only IMCI Node** and select the node specifications.
    
    **Note**
    
    You can click this button multiple times to add multiple nodes at the same time.
    
5.  Set **Restore Point**: Specify a point in time for the system to automatically revert the specifications to their pre-upgrade state.
    
    -   The duration can be set from 1 hour to 14 days. For durations longer than 14 days, use [manual upgrade or downgrade](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster).
        
    -   The revert time cannot be later than one day before the cluster's expiration date. For example, if the cluster expires on January 10, the latest revert time for a temporary upgrade is January 9.
        
    -   You cannot modify the settings after they are configured. If performance is insufficient and you need to extend the duration, you can add another temporary node before the revert time. The **Restore Point** for this second addition cannot be earlier than the time set for the first one.
        
6.  Review the service agreements, click **Buy Now**, and complete the payment. After the payment is successful, the task of adding temporary nodes begins.
    

## Billing description

The cost of a temporary node increase is the price difference between the new and old specifications multiplied by a premium coefficient of 1.5. The formula is as follows:

Cost for N days per compute node = (Monthly subscription price of the corresponding specification / 30) × 1.5 × N.

## **Related operations**

### **Convert temporary nodes to permanent nodes**

If you want to keep the nodes after a temporary increase or perform operations such as a [manual upgrade or downgrade](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster), a [temporary upgrade](/help/en/polardb/polardb-for-mysql/user-guide/temporary-upgrade), or deleting the cluster, you can convert the temporary nodes to permanent nodes. This means the nodes will not be automatically deleted at the revert time.

-   **Manual conversion**: During the temporary node addition period, open the Add/Remove Nodes wizard again and perform the [Add Nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#title-lld-yzk-tvg) operation.
    
    **Note**
    
    This operation generates only a permanent billing order and does not cause a second service interruption.
    
-   **Conversion by scaling out storage space**: During the temporary node addition period, if you [manually scale out the cluster's storage space](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1), the system automatically converts the temporary nodes into permanent nodes. This means that from the time of the scale-out, you are billed based on the subscription price of the new specifications. Carefully evaluate this change before you scale out the storage.
    

### **View the expiration time of temporary nodes**

You can go to the **[Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)** > **Orders** > **My Orders** page, search by cluster ID to find the order with an order type of **Temporary Upgrade**, and click **Details** to view the information.

## Related APIs

**API**

**Description**

[TempModifyDBNode](/help/en/polardb/api-polardb-2017-08-01-tempmodifydbnode)

Temporarily adds nodes to a PolarDB cluster.

## **FAQ**

**What do I do if I receive an "insufficient resources" error when temporarily adding nodes?**

If the system displays the message **Insufficient Resources. Please Change The Region Or Zone And Try Again.** when you select a node specification during an upgrade, this indicates that the selected specification is sold out in the current zone. Solutions:

1.  Select similar specifications: Try selecting other specifications that are slightly lower.
    
2.  Change the zone: We recommend that you [manually change the zone](/help/en/polardb/polardb-for-mysql/user-guide/change-the-primary-zone-and-vswitch-of-a-cluster) to avoid encountering this issue during future upgrades or downgrades.
    

**What do I do if I receive a "no specification change" prompt when temporarily adding nodes?**

No nodes have been added. Click **Temporarily Add Node** or **Temporarily Add IMCI Read-only Nodes** to add a read-only node.

**How do I delete nodes or change compute node configurations for a cluster with temporarily added nodes?**

You cannot delete nodes or change compute node configurations for a cluster that has temporary nodes. You must first [convert the temporary nodes to permanent nodes](#2604147f8bbsz) before you can perform these operations.

**What do I do if I receive the error "Temporary upgrade expiration time cannot be earlier than: XXX" when temporarily adding nodes?**

After you temporarily add nodes, if performance is still insufficient, you can extend the duration by performing the temporary node addition operation only one more time before the scheduled restoration time. However, the new **Restore Point** cannot be earlier than the previously set time, which means the duration must be extended by at least another hour.

**My business has high write pressure. Can temporarily adding read-only nodes solve the problem?**

No. Read-only nodes only process read (`SELECT`) requests. The primary node handles all write operations (`INSERT/UPDATE/DELETE`). If write performance is the bottleneck, consider upgrading the specifications of the primary node instead of adding read-only nodes.
