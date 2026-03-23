When your business faces predictable, short-term traffic spikes, such as during e-commerce sales promotions or online events, your database might experience performance bottlenecks due to insufficient computing resources. Permanently upgrading the specifications for these spikes can lead to resource waste after the traffic subsides. The temporary upgrade feature of PolarDB lets you temporarily increase the compute specifications (CPU and memory) of a subscription cluster for a specified period. The specifications automatically revert to their original state at a specified time, which helps you handle short-term business peaks.

## **Impact assessment of specification changes**

Before you perform a temporary upgrade, assess its potential impact on your business and create a change plan.

#### **Service impact**

PolarDB cluster specification changes trigger node restarts, which cause transient connections and brief performance fluctuations. The impact depends on whether the cluster supports [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/) and whether binary logging (Binlog) is enabled.

-   If the cluster does not support [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/), a transient connection interruption of about 20 to 30 seconds may occur during the specification change. Before the switch, make sure that your application has a reconnection mechanism.
    
-   If the cluster supports [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/failover-with-hot-standby-in-seconds/), a transient connection interruption of about 5 to 10 seconds may occur during the specification change if Binlog is enabled. If Binlog is disabled, performance may drop to zero for 1 to 3 seconds, but connections are not interrupted and transactions do not break.
    

**Important**

-   **Change duration**: The change task takes about 5 minutes per compute node. For example, changing two nodes takes about 10 minutes. The actual duration is affected by factors such as cluster workload and the number of databases and tables.
    
-   **Data latency**: During the change, data synchronization latency on read-only nodes may be longer than during normal operations.
    
-   **Data security**: Specification changes adjust only compute node resources and do not affect existing data in the cluster.
    
-   **Restart order**: When you change the specifications of the primary node and read-only nodes at the same time, the system restarts the read-only nodes first, and then the primary node. No primary/standby switchover occurs during this process.
    

#### **Node specification limits**

To ensure cluster stability and high availability, the following limits apply to the specifications of primary and read-only nodes:

-   At least one read-only node must have the same specifications as the primary node.
    
-   Read-only nodes with [hot standby enabled](/help/en/polardb/polardb-for-mysql/user-guide/configure-hot-standby-nodes) must have the same specifications as the primary node.
    
-   The memory of a read-only node cannot be less than half the memory of the primary node.
    
-   The number of CPU cores for read-only nodes is subject to a minimum requirement. The rules are as follows:
    
    **CPU cores of the primary node**
    
    **Minimum CPU cores for a read-only node**
    
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

[Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) clusters are not subject to the preceding limits.

#### **Other limits**

-   During a temporary upgrade, you can perform only one more temporary upgrade.
    
-   During a temporary upgrade, you cannot [manually downgrade specifications](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#2a144b38a8qep), [add or remove nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes), [temporarily add nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-temporary-nodes), use [automatic scaling](/help/en/polardb/polardb-for-mysql/user-guide/automatically-change-specifications/), or unsubscribe from the cluster.
    

## **Applicability**

Before you start, complete the following checks.

-   **Billing method**: The target cluster must be a **Subscription** cluster.
    
-   **Cluster status**: The target cluster must be in the **Running** state and have no other configuration change tasks in progress, such as adding or deleting nodes, or performing minor version upgrades.
    
-   **Pending tasks**: The cluster must not have any pending configuration change tasks, such as adding or deleting nodes, or changing configurations.
    
-   **Service-linked role authorization**: The **AliyunServiceRoleForPolarDB** service-linked role for PolarDB must be created under your Alibaba Cloud account.
    
    Click to view how to check whether the PolarDB service-linked role is created
    
    1.  Use your Alibaba Cloud account to go to the **Identity Management** > **Roles** list in the [RAM console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Fram.console.alibabacloud.com%2Froles&lang=zh).
        
    2.  Check whether a service-linked role named **AliyunServiceRoleForPolarDB** exists in the role list. The following figure shows an example:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8867321471/p922504.png)
        
        1.  If it exists, skip this check.
            
        2.  If it does not exist, continue with the following steps.
            
    3.  Click **Create Role**. On the **Create Role** page, click **Create Service-Linked Role** in the upper-right corner.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8867321471/p922507.png)
        
    4.  On the **Create Service-Linked Role** page, set **Trusted Service** to **AliyunServiceRoleForPolarDB** and click **Create Service-Linked Role** to complete the creation.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4348776671/p1022955.png)
        
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters** and select the region where the cluster is located.
    
2.  Open the **Change Configurations (Subscription)** dialog box using one of the following methods:
    
    -   Click **Change Configurations** in the **Actions** column of the target cluster.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7807776671/p1022880.png)
        
    -   Click the target cluster ID to go to the **Basic Information** page. In the **Database Nodes** section, click **Change Configurations**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7807776671/p1023387.png)
        
3.  In the **Change Configurations (Subscription)** dialog box, select **Temporary Upgrade** and click **OK**.
    
4.  On the **Temporary Upgrade** page, confirm the **Current Configuration** and **Expiration Time**, and set the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Sub-series**
    
    Select the target specification edition, including **General Specification** and **Dedicated Specification**.
    
    **Node**
    
    Select the target specifications for the node to be upgraded (primary or read-only).
    
    **Note**
    
    Make sure one read-only node has the same specifications as the primary node. You can configure the specifications for other nodes.
    
    **Restore Point**
    
    Set a specific time when the system will automatically restore the specifications to the state before the upgrade.
    
    **Note**
    
    -   The minimum duration is 1 hour and the maximum is 14 days. For periods longer than 14 days, use a [manual specification change](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster).
        
    -   The restore time cannot be later than one day before the cluster's expiration date. For example, if the cluster expires on January 10, the latest restore time for a temporary upgrade is January 9.
        
    -   This setting cannot be changed after it is set. If performance is insufficient and you need to extend the time, you can perform one more upgrade before the restore time is reached. The **Restore Point** set for the second upgrade cannot be earlier than the first.
        
    
5.  Read the terms of service, click **Buy Now**, and complete the payment. After the payment is successful, the upgrade task starts.
    

## Billing

The fee for a temporary upgrade is based on the price difference between the new and original specifications, multiplied by a premium coefficient of 1.5. The formula is as follows:

Fee for a temporary upgrade of a compute node for N days = (Monthly price of new specifications - Monthly price of original specifications) / 30 × 1.5 × N.

## **Related operations**

### **Convert a temporary upgrade to a permanent upgrade**

To keep the upgraded specifications permanently, or to perform operations such as [adding or removing nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes), [temporarily adding nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-temporary-nodes), using [automatic scaling](/help/en/polardb/polardb-for-mysql/user-guide/automatically-change-specifications/), or unsubscribing from the cluster, you can convert the temporary upgrade to a permanent one. This prevents the specifications from being automatically downgraded at the restore time. You can perform the conversion in one of the following ways:

-   **Manual conversion**: During the temporary upgrade period, return to the change configuration page and perform a [manual specification change](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster) to the current specifications.
    
    **Note**
    
    This operation generates only a permanent billing order and does not cause a second service interruption.
    
-   **Conversion by scaling out storage space**: If you [manually scale out the cluster's storage space](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1) during the temporary upgrade period, the system automatically converts the temporary compute specifications to permanent ones. This means that from the moment of the scale-out, you are billed at the subscription price of the new specifications. Carefully evaluate this change before you scale out the storage.
    

### **View the expiration time of a temporary upgrade**

Go to the **[Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview)** > **Subscription Orders** > **My Orders** page. Search for the cluster by its ID, find the order of the **Temporary Upgrade** type, and click **Details** to view the order information.

## Related API operations

**API**

**Description**

[TempModifyDBNode](/help/en/polardb/api-polardb-2017-08-01-tempmodifydbnode)

Temporarily upgrades a PolarDB cluster.

## **FAQ**

**What can I do if the "Insufficient resources" message is displayed during a temporary upgrade?**

If you select specific node specifications during the upgrade and the system displays the **Insufficient resources. Please change the region or zone and try again.** message, this indicates that the selected target specifications are sold out in the current zone. You can perform the following operations:

1.  Select similar specifications: Try to select other specifications that are slightly lower.
    
2.  Change the zone: We recommend that you [manually change the zone](/help/en/polardb/polardb-for-mysql/user-guide/change-the-primary-zone-and-vswitch-of-a-cluster) to prevent resource insufficiency issues in future specification changes.
    

**What can I do if the "`The operation is not permitted due to loss polardb service linked role.`" message is displayed during a temporary upgrade?**

This error occurs because your current account has not been granted the **AliyunServiceRoleForPolarDB** service-linked role for PolarDB. For more information, see [Service-linked role authorization](#53c0af856dxnb) in the "Prerequisites" section.

**What can I do if the "The expiration time of the temporary upgrade cannot be earlier than: XXX" message is displayed during a temporary upgrade?**

After a temporary upgrade, if the performance is still insufficient and you need to extend the upgrade duration, you can perform only one more upgrade before the original restore time. However, the **Restore Point** set for the second upgrade cannot be earlier than the restore time of the first upgrade. This means that you must extend the duration by at least one hour.

**How can I downgrade, add nodes to, or remove nodes from a cluster during a temporary upgrade?**

Operations such as downgrading, adding nodes, or removing nodes are not supported during a temporary upgrade. You must first [convert the temporary upgrade to a permanent upgrade](#2604147f8bbsz) before you can perform these operations.
