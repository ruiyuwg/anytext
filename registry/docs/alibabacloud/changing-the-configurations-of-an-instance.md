This topic describes how to use the corresponding features in the ApsaraDB for MongoDB console to change the configurations of an existing instance to better meet your business requirements.

## Configuration change methods

Configuration change methods and change items vary based on instance categories. The following table describes the configuration change methods and change items for different instance categories.

**Configuration change method**

**Billing method**

**Change type**

**Change item**

[Change the configurations of a standalone instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-standalone-instance#task-1580779)

Subscription

Upgrade

The **Specification** and **Storage** values of an instance can be changed.

Downgrade

The **Specification** value of an instance can be changed.

Pay-as-you-go

-   Upgrade
    
-   Downgrade
    

The **Specification** and **Storage** values of an instance can be changed.

**Note**

-   When you change the value of the Storage parameter, you must make sure that the new specified storage capacity is greater than or equal to the existing storage capacity of the instance.
    
-   You cannot reduce the storage capacity of an instance. To reduce the storage capacity of the instance, you can create a new instance and then migrate data from the original instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    

[Change the configurations of a replica set instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-replica-set-instance#task-1580779)

Subscription

Upgrade

The **Active-standby Nodes**, **Read-only Nodes**, **Specifications**, and **Storage** values of an instance can be changed.

**Note**

-   When you change the value of the **Storage** parameter, you must make sure that the new specified storage capacity is greater than or equal to the existing storage capacity of the instance.
    
-   After the value of the **Storage** parameter is changed, the new storage capacity value is applicable to each node of the instance, not the total storage capacity of all nodes.
    

Downgrade

The **Active-standby Nodes**, **Read-only Nodes**, and **Specifications** values of an instance can be changed.

Pay-as-you-go

-   Upgrade
    
-   Downgrade
    

The **Active-standby Nodes**, **Read-only Nodes**, **Specifications**, and **Storage** values of an instance can be changed.

**Note**

-   When you change the value of the **Storage** parameter, you must make sure that the new specified storage capacity is greater than or equal to the existing storage capacity of the instance.
    
-   You cannot reduce the storage capacity of an instance. To reduce the storage capacity of the instance, you can create a new instance and then migrate data from the original instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   After the value of the **Storage** parameter is changed, the new storage capacity value is applicable to each node of the instance, not the total storage capacity of all nodes.
    

[Change the configurations of a sharded cluster instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-sharded-cluster-instance/#task-1580394)

Subscription

[Add a mongos node](/help/en/mongodb/user-guide/add-a-mongos-node#task-2102782)

When you add a mongos node, you can configure the **Instance Specifications** and **Quantity** parameters.

**Note**

A maximum of 32 mongos nodes can be added to a sharded cluster instance. If the sharded cluster instance already has three mongos nodes and you want to add more mongos nodes, you can add a maximum of 29 mongos nodes to the sharded cluster instance.

[Add a shard component](/help/en/mongodb/user-guide/add-a-shard-node#task-2102784)

When you add a shard component, you can configure the **Specifications**, **Quantity**, **Storage**, and **Read-only Nodes** parameters.

**Note**

-   A maximum of 32 shard components can be added to a sharded cluster instance. If the sharded cluster instance already has three shard components and you want to add more shard components, you can add a maximum of 29 shard components to the sharded cluster instance.
    
-   The **Specifications**, **Storage**, and **Read-only Nodes** values of the new shard component must be greater than or equal to the greatest values among existing shard components.
    
-   You cannot reduce the storage capacity of a shard component in an existing instance. To reduce the storage capacity of the component, you can create a new instance and then migrate data from the original instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   If read-only nodes are added when you create a shard component, the specified storage capacity value is applicable to the shard component and each read-only node.
    

[Change the configurations of one or more mongos nodes](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-mongos-nodes#task-2102785)

The **Instance Specifications** configurations of one or more mongos nodes can be changed.

[Change the configurations of one or more shard components](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-shard-nodes#task-2102786)

The **Instance Specifications**, **Storage Capacity**, and **Read-only Nodes** values of one or more shard components can be changed.

**Note**

-   When you change the value of the **Storage Capacity** parameter, you must make sure that the new specified storage capacity is greater than or equal to the existing storage capacity of the instance.
    
-   You cannot reduce the storage capacity of a shard component in an existing instance. To reduce the storage capacity of the component, you can create a new instance and then migrate data from the original instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   After the **Storage Capacity** value of a shard component is changed, the new storage capacity value is applicable to the shard component and each read-only node.
    

[Change the configurations of a ConfigServer component](/help/en/mongodb/user-guide/change-configserver-configuration)

You can change the **Instance Specifications** and **Storage Capacity** values of a ConfigServer component.

**Note**

-   The new specified storage capacity must be greater than or equal to the existing storage capacity of the ConfigServer component.
    
-   You cannot change the configurations of the ConfigServer component in a sharded cluster instance that uses local disks.
    

[Change the configurations of multiple mongos, shard, and ConfigServer components in batch](/help/en/mongodb/user-guide/change-the-configurations-of-multiple-mongos-shard-and-configserver-nodes-in-batch)

You can start a configuration change task for multiple mongos, shard, and ConfigServer components in a sharded cluster instance. The task involves the following operations:

-   Change the specifications and storage capacity of one or more shard components.
    
-   Change the specifications of one or more mongos nodes.
    
-   Change the specifications and storage capacity of the ConfigServer component.
    
    **Note**
    
    -   You cannot change the configurations of the ConfigServer component in a sharded cluster instance that uses local disks.
        
    -   Make sure that the limits on configuration changes for specified mongos, shard, and ConfigServer components are met.
        
    -   To change the number of read-only nodes in a shard component, you must change the configuration of the shard component.
        
    

Pay-as-you-go

[Add a mongos node](/help/en/mongodb/user-guide/add-a-mongos-node#task-2102782)

When you add a mongos node, you can configure the **Instance Specifications** and **Quantity** parameters.

**Note**

A maximum of 32 mongos nodes can be added to a sharded cluster instance. If the sharded cluster instance already has three mongos nodes and you want to add more mongos nodes, you can add a maximum of 29 mongos nodes to the sharded cluster instance.

[Add a shard component](/help/en/mongodb/user-guide/add-a-shard-node#task-2102784)

When you add a shard component, you can configure the **Specifications**, **Quantity**, and **Storage** parameters.

**Note**

-   A maximum of 32 shard components can be added to a sharded cluster instance. If the sharded cluster instance already has three shard components and you want to add more shard components, you can add a maximum of 29 shard components to the sharded cluster instance.
    
-   When you set the value of the **Storage** parameter, you must make sure that the new specified storage capacity is greater than or equal to the existing storage capacity of the instance.
    
-   You cannot reduce the storage capacity of a shard component in an existing instance. To reduce the storage capacity of the component, you can create a new instance and then migrate data from the original instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   If read-only nodes are added when you create a shard component, the specified storage capacity value is applicable to the shard component and each read-only node.
    

[Change the configurations of one or more mongos nodes](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-mongos-nodes#task-2102785)

The **Instance Specifications** configurations of one or more mongos nodes can be changed.

[Change the configurations of one or more shard components](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-shard-nodes#task-2102786)

The **Instance Specifications** and **Storage Capacity** values of one or more shard components can be changed.

**Note**

-   When you change the value of the **Storage Capacity** parameter, you must make sure that the new specified storage capacity is greater than or equal to the existing storage capacity of the instance.
    
-   You cannot reduce the storage capacity of a shard component in an existing instance. To reduce the storage capacity of the component, you can create a new instance and then migrate data from the original instance to the new instance. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
-   After the **Storage Capacity** value of a shard component is changed, the new storage capacity value is applicable to the shard component and each read-only node.
    

[Change the configurations of a ConfigServer component](/help/en/mongodb/user-guide/change-configserver-configuration)

You can change the **Instance Specifications** and **Storage Capacity** values of a ConfigServer component.

**Note**

-   The new specified storage capacity must be greater than or equal to the existing storage capacity of the ConfigServer component.
    
-   You cannot change the configurations of the ConfigServer component in a sharded cluster instance that uses local disks.
    

[Change the configurations of multiple mongos, shard, and ConfigServer components in batch](/help/en/mongodb/user-guide/change-the-configurations-of-multiple-mongos-shard-and-configserver-nodes-in-batch)

You can start a configuration change task for multiple mongos, shard, and ConfigServer components in a sharded cluster instance. The task involves the following operations:

-   Change the specifications and storage capacity of one or more shard components.
    
-   Change the specifications of one or more mongos nodes.
    
-   Change the specifications and storage capacity of the ConfigServer component.
    
    **Note**
    
    -   You cannot change the configurations of the ConfigServer component in a sharded cluster instance that uses local disks.
        
    -   Make sure that the limits on configuration changes for specified mongos, shard, and ConfigServer components are met.
        
    -   To change the number of read-only nodes in a shard component, you must change the configuration of the shard component.
        
    

[Release a mongos or shard component](/help/en/mongodb/user-guide/release-a-mongos-or-shard-node#task-2103666)

You can manually release a mongos or shard component.

**Note**

-   You can manually release a mongos node for a sharded cluster instance that has at least three mongos nodes, but you must make sure that the sharded cluster instance has at least two mongos nodes after the release.
    
-   You can manually release a shard component for a sharded cluster instance that has at least three shard components, but you must make sure that the sharded cluster instance has at least two shard components after the release.
    
-   Before you release a shard component from a sharded cluster instance, make sure that the data of the shard component can be offloaded onto the remaining shard components in the instance. Otherwise, the instance remains in the **Deleting Node** state after you attempt to release a shard component. In this case, you cannot perform operations such as resetting the password, switching node roles, modifying the node connection string, or modifying parameters.
    

## Other configuration change scenarios and methods

You may encounter the following configuration change scenarios:

-   Downgrade the storage capacity of an instance or a shard component.
    
-   Add the number of nodes to a standalone instance.
    
-   Change the architecture of an instance.
    
-   Change the storage engine of an instance from RocksDB or TerarkDB to WiredTiger.
    

When you encounter the preceding scenarios, you can perform the following steps to change the configurations of an instance:

1.  Create a new instance. For more information, see [Create a standalone instance](/help/en/mongodb/create-a-standalone-instance#task-hwt-zlx-p2b), [Create a replica set instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b), or [Create a sharded cluster instance](/help/en/mongodb/create-a-sharded-cluster-instance-1#task-g3q-hyq-w2b).
    
    **Note**
    
    -   If you want to decrease the storage capacity by creating a new instance, the storage capacity of the new instance must be greater than the storage capacity used by the original instance.
        
    -   If you want to change the number of nodes by creating another instance, you must create a replica set instance.
        
    -   If you want to change the instance architecture by creating another instance, you must choose an instance category specific to the desired architecture. For more information about the architecture of ApsaraDB for MongoDB, see [Service architecture](/help/en/mongodb/product-overview/architecture/#concept-lyt-gc5-xgb).
        
    -   Restore backup data to the new instance. For more information, see [Restore backup data to a new instance by point in time](/help/en/mongodb/user-guide/restore-backup-data-to-a-new-apsaradb-for-mongodb-instance-by-point-in-time#task342) or [Restore backup data to a new instance by backup point](/help/en/mongodb/user-guide/restore-backup-data-to-a-new-apsaradb-for-mongodb-instance-by-backup-point#task-tll-y3b-kfb).
        
    
2.  Migrate data from the original instance to the new instance. For more information about migration methods for different instance architectures, see [Data migration and synchronization](/help/en/mongodb/user-guide/data-migration-and-synchronization/#concept-ujv-lml-cgb).
    
3.  After you verify the functionality of the new instance, switch business from the original instance to the new instance.
    
4.  **Optional:** If you no longer need the original instance, release the instance by using one of the following methods:
    
    -   For a subscription instance, you cannot manually release the instance.
        
    -   For a pay-as-you-go instance, you can manually release the instance. For more information, see [Release an instance](/help/en/mongodb/user-guide/release-an-instance#task-vpq-mhm-j2b).
        

## **FAQ**

**Why is the performance of my instance not improve after the instance is upgraded?**

After the upgrade, you can view the new instance specifications to check whether the upgrade is successful on the **Basic Information** page of the instance in the ApsaraDB for MongoDB console. To query the details of instance performance after the upgrade, you can also view the **CPU Utilization** and **IOPS Utilization** values on the **Monitoring Data** page of the instance in the ApsaraDB for MongoDB console. In most cases, the values are significantly reduced after the upgrade.

**Note**

We recommend that you do not use the **Memory Usage** metric to determine whether instance performance is improved. The size of the WiredTiger cache varies based on the instance specifications. In most cases, the WiredTiger cache occupies at least 50% of the available instance memory.

It is reasonable that the memory usage of an instance is about 80%. If the actual memory usage exceeds the reasonable value, you can accelerate memory reclamation and enable TCMalloc to release memory at a higher speed. For more information, see [Troubleshoot high memory usage issues on an instance](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance#section-f7t-wc4-k2w).

**What do I do if the "There is not enough resource for your operation." error is returned for my instance?**

This error message indicates that the zone of the instance has insufficient resources when you upgrade the instance. You can change the existing instance specification to another specification or [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact technical support.

## References

For more information about MongoDB versions and storage engines, see [MongoDB versions and storage engines](/help/en/mongodb/product-overview/mongodb-versions-and-storage-engines#concept-qg2-xcr-52b).

For more information about how to upgrade the major version of an ApsaraDB for MongoDB instance, see [Upgrade the major version of an instance](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance#concept-ut5-fp4-fgb).
