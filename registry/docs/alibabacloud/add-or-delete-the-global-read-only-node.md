As your workloads continue to grow, you may increase the number of primary nodes in your multi-master cluster. In this case, a global read-only node can be helpful as it can read data from all primary nodes to facilitate the handling of cross-database requests. This topic describes the architecture and core advantages of the global read-only node of a Multi-master Cluster (Limitless) cluster.

## **Architecture**

![全局RO](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9932130761/p515931.png)

All data files in a multi-master cluster are stored in PolarStore and made accessible to the global read-only node through the distributed file system, PolarFileSystem. You can connect to the global read-only node through the global read-only endpoint. It takes advantage of the read/write splitting feature of PolarProxy to automatically identify SQL statements that involve multiple nodes and read data from the involved nodes.

## **Core advantages**

-   **Reduced costs**
    
    Previously, you had to purchase a separate PolarDB for MySQL cluster to store data on the primary nodes of your existing cluster in one place and process cross-database requests. In addition, you had to purchase multiple Data Transmission Service (DTS) synchronization links to synchronize data from the primary nodes to the new cluster.
    
    With the global read-only node feature, you only need to add a global read-only node to your existing Multi-master Cluster (Limitless) cluster to process cross-database requests. Because the global read-only node can access the data on the primary nodes of the existing cluster through PolarStore, neither an additional cluster nor any DTS synchronization link is required.
    
-   **Low latency**
    
    While it generally takes seconds to synchronize data through DTS, the latency of the global read-only data is only tens of milliseconds. This greatly improves the timeliness of cross-database queries.
    

## **Supported versions**

This feature is available only for Multi-master Cluster (Limitless) edition clusters that run PolarDB for MySQL 8.0.

## **Billing**

You are charged only for the compute node. For more information, see [Pay-as-you-go prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-pay-as-you-go-compute-nodes) and [Subscription prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-subscription-compute-nodes).

## **Usage**

### **Add a global read-only node**

Adding a global read-only node in a multi-master cluster is the same as adding a common read-only node in other types of cluster. For more information, see [Add a read-only node](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#section-zb3-yhd-lfb).

### **Query data across databases**

A global read-only node can directly access data on all primary nodes, and thus can handle cross-database queries. Here is a sample cross-database query: `select * from db1.tbl1 t1, db2.tbl2 t2 where t1.id=t2.id;`. You can adjust the node configurations according to your business needs. For more information, see [Manually change the specifications of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster).

### **Remove a global read-only node**

You can remove a global read-only node that is no longer needed. For more information, see [Remove a read-only node](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#section-fkk-13d-lfb).

**Warning**

The global read-only endpoint will be deleted along with the removal of the global read-only node. You will not be able to query data across nodes through the cluster endpoint. Remember to reconnect through the cluster endpoint to primary nodes to ensure service continuity.

## Add a global read-only column store node

You can add a global read-only column store node after you change the value of the `loose_polar_enable_imci_with_mm` parameter to `ON`. For more information about the parameter, see [Parameter configuration](/help/en/polardb/polardb-for-mysql/user-guide/parameter-configuration/). For more information about how to add a read-only column store node, see [Add a read-only IMCI node](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node).
