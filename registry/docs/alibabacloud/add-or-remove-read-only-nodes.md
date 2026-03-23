If read traffic increases and slows down your database response, you can add read-only nodes to scale out the read capability of your cluster. This increases throughput and reduces the load on the primary node (read/write node). Conversely, you can remove idle read-only nodes during off-peak periods to save costs. The PolarDB cluster endpoint automatically balances the load of read requests across read-only nodes, which simplifies connection management for your application.

## **Scope**

Before you begin, make sure that the following requirements are met.

-   **Billing method**: The billing method for the destination cluster must be **Subscription** or **Pay-as-you-go**.
    
-   **Cluster status**: The destination cluster must be in the **Running** state. This indicates that no other configuration changes are in progress, such as changing compute node specifications or performing minor version upgrades.
    

## **Impacts and limits**

Before you add or remove read-only nodes, evaluate the potential business impacts and limits to plan the change.

#### **Service impact**

-   **Adding a read-only node**: Adding a read-only node takes about 5 minutes. If you add multiple read-only nodes at the same time, they are processed in parallel. The actual time required depends on factors such as cluster load and the number of databases and tables. This process does not affect the cluster.
    
-   **Removing a read-only node**: When you remove a read-only node, connections to that node experience a transient disconnection. Other nodes are not affected. We recommend that you perform this operation during off-peak hours and ensure that your application has an automatic reconnection mechanism. If your application connects to the cluster endpoint, PolarDB automatically removes the deleted read-only node from the endpoint. You do not need to change your application configuration.
    

#### **Node quantity limits**

-   **Enterprise Edition**:
    
    -   Cluster Edition: Supports up to 15 read-only nodes. You must keep at least one read-only node to ensure high availability. Therefore, you cannot remove the last read-only node.
        
    -   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/): Supports up to 63 read/write nodes and 15 read-only nodes (global read-only nodes).
        
-   **Standard Edition**: Supports up to 7 read-only nodes.
    

#### **Node specification limits**

To ensure cluster stability and high availability, the following limits apply to the specifications of primary and read-only nodes:

-   The memory of a new read-only node cannot be less than half the memory of the primary node.
    
-   A minimum CPU core specification is required for new read-only nodes. The rules are as follows:
    
    **Primary node (read/write node) CPU specifications**
    
    **Minimum allowed CPU specifications for read-only nodes**
    
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
    
-   When you add a [column store index read-only node](/help/en/polardb/polardb-for-mysql/user-guide/imcis/), we recommend that its specifications are higher than those of the primary node (read/write node) because of its analytical workload characteristics.
    

## Add nodes

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters** and select the region where the cluster is located.
    
2.  You can use one of the following methods to open the **Add/Remove Node** wizard:
    
    -   For the destination cluster, click **Add/Remove Node** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1023701.png)
        
    -   Click the ID of the destination cluster to navigate to the **Basic Information** page. In the **Database Nodes** section, click **Add/Remove Node**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1023702.png)
        
3.  In the **Add/Remove Node** wizard, select **Add Node** (**Add Global Read-Only Node**) and click **OK**.
    
    **Note**
    
    You can also add other types of nodes in the dialog box, such as **Add Read-Write Node**, **Add AI Node**, **Add Read-only IMCI Node**, or **Add Search Node**.
    
    -   Only [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) clusters support adding **read/write nodes**. Other cluster editions do not support this feature.
        
    -   To add [column store index read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node), [AI nodes](/help/en/polardb/polardb-for-mysql/enable-the-polardb-for-ai-feature), or [search nodes](/help/en/polardb/polardb-for-mysql/user-guide/guidelines-for-using-polarsearch), ensure that your cluster meets the version requirements for the corresponding feature.
        
    
4.  On the **Upgrade/Downgrade** page, confirm your **Current Configuration**. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1028157.png) icon to add a node and select its specifications.
    
    **Note**
    
    You can click this button multiple times to add multiple nodes at the same time.
    
5.  Set the switchover time: Select when you want the configuration change to take effect.
    
    -   **Apply Immediately**: The change takes effect immediately.
        
    -   **Scheduled Switch**: Select a time within the next 24 hours. The change task will be completed within 30 minutes after the specified time. You can view or cancel the task on the [Scheduled Tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266) page.
        
6.  Read the terms of service, click **Buy Now**, and complete the payment. The task is then executed at the specified switchover time.
    
7.  (Optional) If you added other types of nodes, perform the following operations based on the node type:
    
    -   **Read/write node**: You can use the `CREATE DATABASE <name> [POLARDB_WRITE_NODE master_id];` statement to create a database on the new node. For more information, see [Instructions for Multi-master Clusters](/help/en/polardb/polardb-for-mysql/user-guide/usage-1#section-49a-ce9-1un).
        
    -   **AI node**: You can execute an AI SQL statement by adding `/*polar4ai*/` before the statement. For more scenarios, see [Data-Agent](/help/en/polardb/polardb-for-mysql/db-agent/).
        
    -   **Column store index read-only node**: You can create a columnstore index by adding the `COLUMNAR=1` comment to a table or a specific column. For more information, see [Add a columnstore index](/help/en/polardb/polardb-for-mysql/user-guide/instructions-for-using-column-index#15a5e2368fmex).
        
    -   **Search node**: You can use Elasticsearch-compatible REST APIs to create indexes and search data. For more information, see [Instructions for intelligent search](/help/en/polardb/polardb-for-mysql/user-guide/guidelines-for-using-polarsearch#cea2ac15c5k62).
        

## Remove nodes

#### **Notes**

## Read/write nodes

Before you remove a read/write node from a Multi-master Cluster, switch the endpoints of all databases on that node to other available read/write nodes. For more information, see [Instructions for Multi-master Clusters](/help/en/polardb/polardb-for-mysql/user-guide/usage-1#section-49a-ce9-1un).

**Important**

If you do not perform this operation, these databases become inaccessible. If this occurs, you can restore access by reassigning a read/write node to these databases using the `ALTER DATABASE <name> POLARDB_WRITE_NODE <new_master_id>;` statement.

1.  Query the distribution of databases on the read/write node.
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.INNODB_CC_GLOBAL_LOCK_INFO WHERE LOCK_MODE = 'SLS_X' AND MASTER_ID = <master_id>;
    ```
    
2.  Switch the endpoints of all databases or data objects returned by the preceding statement to other read/write nodes.
    
    **Note**
    
    The query result may contain information with the name `mysql/global_ddl_lock` and an `object` type of `Table`. This is internal information. You do not need to switch this object.
    
    ```
    ALTER DATABASE <name> POLARDB_WRITE_NODE <new_master_id>;
    ```
    

## AI nodes

-   After you remove the last AI node, the system immediately purges the node and its associated data, such as vector tables. After the node is removed, AI SQL statements sent to the cluster will not receive a response. Other SQL statements are not affected.
    
-   To prevent data loss, back up the necessary data before you remove the node to ensure data security and recoverability.
    

## Column store index read-only nodes

-   After you remove the last column store index read-only node, the cluster can no longer accelerate columnstore queries. If you want to use the columnstore index again to improve performance, you must add another column store node and wait for the columnstore index to be automatically rebuilt.
    
-   The **Cluster Endpoint** automatically removes failed nodes. You do not need to change your application configuration.
    

## Search nodes

-   After you remove all search nodes, the system immediately purges the nodes and their associated data. After the nodes are removed, REST API requests sent to the cluster will not receive a response. Other SQL statements are not affected.
    
-   To prevent data loss, back up the necessary data before you remove the nodes to ensure data security and recoverability. For more information, see [Data backup](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-to-store-and-restore-polarsearch-snapshots).
    

#### **Procedure**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters** and select the region where the cluster is located.
    
2.  Use one of the following methods to open the **Add/Remove Node** wizard:
    
    1.  In the **Actions** column of the destination cluster, click **Add/Remove Node**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1023701.png)
        
    2.  Click the ID of the destination cluster to open the **Basic Information** page. In the **Database Nodes** section, click **Add/Remove Node**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1023702.png)
        
3.  In the **Add/Remove Node** wizard, select an option, such as **Delete Node** (**Delete Global Read-Only Node**), **Delete Read-Write Node**, **Delete AI Node**, **Delete Read-only IMCI Node**, or **Delete Search Node**. Then, click **OK**.
    
4.  On the **Upgrade/Downgrade** page, confirm the **Current Configuration**. Click the minus icon ![减号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3828449951/p3601.png) next to the name of the destination node to remove it.
    
    **Note**
    
    You can select multiple nodes to remove at the same time.
    
5.  Set the switchover time. Select when the configuration change takes effect.
    
    -   **Apply Immediately**: The change task takes effect immediately.
        
    -   **Scheduled Switch**: Select a time within the next 24 hours. The change task will be completed within 30 minutes after the specified time. You can view or cancel the task on the [Scheduled Tasks](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266) page.
        
6.  Read the terms of service, click **Buy Now**, and complete the payment. After the payment is successful, the task is executed at the specified switchover time.
    

## Billing

Adding or removing nodes affects only the fees for compute nodes. Fees for storage space and other resources are not affected.

-   **Pay-as-you-go**
    
    -   New nodes are billed on an hourly basis from the time they are created until they are released.
        
    -   You can remove nodes at any time to stop billing.
        
-   **Subscription**
    
    -   When you add a node, you must pay for the period from the time of addition to the cluster's expiration date.
        
    -   When you remove a node, the system automatically calculates the remaining value and issues a refund. For more information, see [Refund amount calculation](/help/en/user-center/description-of-downgrade-refund-rules#f2ea67656brq7).
        

## **FAQ**

-   **What can I do if the "insufficient resources" message appears when I add a node?**
    
    If you receive the message **Insufficient resources. Please try again in another region or zone.** when you add a node, this means the selected specifications are sold out in the current zone. We recommend the following:
    
    1.  Select similar specifications: Try selecting a slightly lower specification.
        
    2.  Change the zone: We recommend that you [manually change the zone](/help/en/polardb/polardb-for-mysql/user-guide/change-the-primary-zone-and-vswitch-of-a-cluster) to prevent this issue from recurring during future configuration changes.
        
-   **Does a PolarDB** **cluster support adding read/write nodes?**
    
    Only [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) clusters support adding read/write nodes. This feature is not available for other editions. Ensure that your cluster is a Multi-master Cluster (Limitless) Edition cluster.
    
-   **What can I do if a "no specification change" message appears when I add or remove a node?**
    
    This message indicates that you have not yet added or removed any nodes. Follow the on-screen instructions to click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7943225671/p1028157.png) icon to add a node or click the minus icon ![减号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3828449951/p3601.png) next to the node name to remove it.
    
-   **What can I do if the** `**The number of DB nodes is incorrect.**` **message appears when I remove a node?**
    
    To ensure high availability (HA) and automatic failover, PolarDB Cluster Edition clusters require at least one read-only node.
    
-   **When removing nodes, can I keep only one primary node and one column store index read-only node?**
    
    No. You must have at least one regular read-only node before you can add or keep a column store index read-only node.
    
-   **My application has a high write load. Can adding read-only nodes solve this problem?**
    
    No. Read-only nodes only handle read (`SELECT`) requests. All write operations (`INSERT/UPDATE/DELETE`) are still processed by the primary node. If the bottleneck is write performance, consider upgrading the specifications of the primary node instead of adding read-only nodes.
    

## References

-   Impact of the number of nodes on performance: [Performance Testing (OLTP)](/help/en/polardb/polardb-for-mysql/oltp-performance-test#task-1580301)
    
-   Column-store index feature for read-only nodes: [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/)
    
-   Search node feature: [Intelligent search (PolarSearch)](/help/en/polardb/polardb-for-mysql/user-guide/intelligent-search-polarsearch/)
    
-   AI node feature: [PolarDB for AI](/help/en/polardb/polardb-for-mysql/polardb-for-ai/)
    

## Related API operations

**API**

**Description**

[CreateDBNodes](/help/en/polardb/api-polardb-2017-08-01-createdbnodes)

Adds nodes to a PolarDB cluster.

[DeleteDBNodes](/help/en/polardb/api-polardb-2017-08-01-deletedbnodes)

Removes nodes from a PolarDB cluster.
