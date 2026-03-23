This topic describes how to change the configurations of an existing ApsaraDB for MongoDB sharded cluster instance.

## Limits

-   The architecture or storage engine of a sharded cluster instance cannot be changed. For example, a sharded cluster instance cannot be changed into a replica set instance.
    
-   The operations on the nodes of a sharded cluster instance are subject to the following limits.
    
    **Operation**
    
    **Limits**
    
    Add a shard node
    
    The specifications of the new shard node must be higher than or equal to the highest specifications among all the shard nodes of the sharded cluster instance.
    
    For example, if the shard node with the highest configurations in the sharded cluster instance has 10 GB of storage capacity, the storage capacity of the new shard must be greater than or equal to 10 GB.
    
    Change the specifications of a shard node
    
    -   The new storage capacity that you specify must be greater than or equal to the existing storage capacity of the shard nodes.
        
    -   The new number of read-only nodes that you specify must be greater than or equal to the maximum number of read-only nodes among the shard nodes.
        
    -   You cannot increase the number of read-only nodes in a subscription sharded cluster instance that you are downgrading.
        
    
    Change the specifications of the ConfigServer node
    
    The new storage capacity that you specify is greater than or equal to the existing storage capacity of the ConfigServer node whose configurations you want to change in the instance.
    
    -   The configurations of the ConfigServer node in a sharded cluster instance that uses local disks cannot be changed.
        
    
    Change the configurations of multiple mongos, shard, and ConfigServer nodes in batch
    
    Take note of the limits on the specific mongos, shard, and ConfigServer nodes when you change the configurations of the nodes.
    
    **Note**
    
    -   The configurations of the ConfigServer node in a sharded cluster instance that uses local disks cannot be changed.
        
    -   To change the number of read-only nodes in a shard node, you must change the configuration of the shard node.
        
    
    Release a mongos node
    
    A mongos node can be removed from a sharded cluster instance that has at least three mongos nodes.
    
    **Note**
    
    At least two mongos nodes must be retained for a sharded cluster instance.
    
    Release a shard node
    
    -   A shard node can be removed from a cluster instance that has at least three shard nodes.
        
        **Note**
        
        At least two shard nodes must be retained for a sharded cluster instance.
        
    
    Before you release a shard node, make sure that the ApsaraDB for MongoDB balancer is enabled. For more information, see [Manage the ApsaraDB for MongoDB balancer](/help/en/mongodb/use-cases/manage-the-apsaradb-for-mongodb-balancer).
    
    The following factors affect the actual time consumed to release the node: the amount of data on the shard node, balancing windows, and jumbo chunks.
    
    **Note**
    
    For more information about balancing windows and jumbo chunks, see [Balancing Windows](https://www.mongodb.com/docs/manual/tutorial/manage-sharded-cluster-balancer/#schedule-the-balancing-window) and [Jumbo Chunks](https://www.mongodb.com/docs/manual/core/sharding-data-partitioning/#indivisible-jumbo-chunks).
    
    Make sure that the remaining shard nodes have sufficient storage space.
    
    When the shard node is released, the data on the shard node is migrated to the remaining shard nodes. If the storage space of the remaining shard nodes is full, the instance is automatically locked to avoid data loss.
    
    If the `duplicated key` error is reported when the data on the shard node is migrated to the remaining shard nodes, check whether records with the same unique index field value exist.
    
    For example, different shard nodes may store two documents with different shard keys but the same primary key.
    
    **Note**
    
    The `duplicated key` error is returned when orphaned documents exist in the database. We recommend that you delete the orphaned documents before you release the shard node. For more information, see the "Preparations" section of the [Configure one-way data synchronization between ApsaraDB for MongoDB instances (sharded cluster architecture)](/help/en/mongodb/user-guide/configure-one-way-data-synchronization-between-apsaradb-for-mongodb-sharded-cluster-instance#section-ljy-zdn-fv7) topic.
    

## Billing rules

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## Usage notes

-   During a configuration change, one or two disconnections may occur. Each disconnection lasts about 30 seconds. To prevent a configuration change from interrupting your workloads, we recommend that you change configurations at a time that has minimal impact on your business.
    
    **Important**
    
    If you change only the storage capacity of an instance, the system performs the corresponding operation based on whether your host has sufficient storage resources.
    
    -   If your host has sufficient storage resources, the system scales up the storage capacity on your host without the need for cross-host migrations or failovers. Disconnections do not occur during the scale-up process. The scale-up task is immediately executed to completion. You do not need to wait for the maintenance window.
        
    -   If your host does not have sufficient storage resources, cross-host migrations and failovers are required. Disconnections may occur during the scale-up process. The scale-up task is executed during the specified maintenance window.
        
    
-   The amount of time required to perform a configuration change depends on factors such as the network conditions, task queue status, and data size. We recommend that you change the configurations of a sharded cluster instance during off-peak hours and make sure that your application can automatically reconnect to the instance.
    
-   If the minor version of a sharded cluster instance expires or is no longer maintained, ApsaraDB for MongoDB automatically updates the minor version of the instance to the latest version during a configuration change. This ensures that the sharded cluster instance can provide higher performance and stability.
    

## Configuration change overview

**Change type**

**Change item**

[Add a mongos node](/help/en/mongodb/user-guide/add-a-mongos-node#task-2102782)

When you add a mongos node, you can set **Instance Specifications** and **Quantity**.

**Note**

A maximum of 32 mongos nodes can be added to each sharded cluster instance. If the sharded cluster instance already has three mongos nodes and you want to add more mongos nodes, you can add a maximum of 29 mongos nodes to the sharded cluster instance.

[Add a shard node](/help/en/mongodb/user-guide/add-a-shard-node#task-2102784)

When you add a shard node, you can set **Instance Specifications**, **Quantity**, **Storage**, and **Read-only Nodes**.

**Note**

-   A maximum of 32 shard nodes can be added to each sharded cluster instance. If the sharded cluster instance already has three shard nodes and you want to add more shard nodes, you can add a maximum of 29 shard nodes to the sharded cluster instance.
    
-   The **Specifications** and **Storage** values of the new shard node must be greater than or equal to the greatest values among existing shard nodes.
    
-   You cannot decrease the storage capacity of a shard node in an existing instance. To decrease the storage capacity of the node, you can create an instance and then migrate data from the existing instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   If read-only nodes are added when you create a shard node, the specified storage space value is applied to the shard node and each read-only node.
    

[Change the configurations of one or more mongos nodes](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-mongos-nodes#task-2102785)

The **Instance Specifications** values of one or more mongos nodes can be changed.

[Change the configurations of one or more shard nodes](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-shard-nodes#task-2102786)

The **Instance Specifications**, **Storage Capacity**, and **Read-only Nodes** values of a shard node can be changed.

**Note**

-   When you change the value of the **Storage Capacity** parameter, make sure that the new value is greater than or equal to the greatest storage capacity among all shard nodes of the sharded cluster instance.
    
-   If you scale up only the storage capacity and the hosts that hold the nodes of the instance have sufficient resources, local scale-up is performed and no data migration or switchover between instances is required. Therefore, the new configurations take effect immediately after the scale-up is completed, instead of within the specified maintenance window.
    
-   You cannot decrease the storage capacity of a shard node in an existing instance. To decrease the storage capacity of the node, you can create an instance and then migrate data from the existing instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   After the **Storage Capacity** value of a shard node is changed, the new storage capacity is applied to the shard node and each read-only node.
    

[Change the configurations of the ConfigServer node in a sharded cluster instance](/help/en/mongodb/user-guide/change-configserver-configuration)

You can change the specifications and storage capacity of the ConfigServer node.

**Note**

-   The new storage capacity must be greater than or equal to the existing storage capacity of the ConfigServer node.
    
-   The configurations of the ConfigServer node in a sharded cluster instance that uses local disks cannot be changed.
    

[Change the configurations of multiple mongos, shard, and ConfigServer nodes in batch](/help/en/mongodb/user-guide/change-the-configurations-of-multiple-mongos-shard-and-configserver-nodes-in-batch)

You can start a configuration change task for multiple mongos, shard, and ConfigServer nodes in a sharded cluster instance at a time. The task involves the following operations:

-   Change the specifications and storage capacity of one or more shard nodes.
    
-   Change the specifications of one or more mongos nodes.
    
-   Change the specifications and storage capacity of the ConfigServer node.
    

**Note**

-   The configurations of the ConfigServer node in a sharded cluster instance that uses local disks cannot be changed.
    
-   Take note of the limits on the specific mongos, shard, and ConfigServer nodes when you change the configurations of the nodes.
    
-   To change the number of read-only nodes in a shard node, you must change the configuration of the shard node.
    

[Release a mongos or shard node](/help/en/mongodb/user-guide/release-a-mongos-or-shard-node#task-2103666)

You can manually release a mongos or shard node.

**Important**

Before you release a shard node from a sharded cluster instance, make sure that the data of the shard node can be offloaded onto the remaining shard nodes in the instance. Otherwise, the instance remains in the **Deleting Node** state. In this case, you cannot perform operations related to the databases, accounts, and network of the instance. For more information about how to view the disk usage of a shard node, see [Basic monitoring](/help/en/mongodb/user-guide/basic-monitoring).
