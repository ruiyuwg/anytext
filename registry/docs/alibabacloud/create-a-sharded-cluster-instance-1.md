This topic shows you how to create an ApsaraDB for MongoDB instance.

## Prerequisites

You have [created an Alibaba Cloud account](/help/en/account/sign-up-with-alibaba-cloud).

## **Billing**

You are charged for a MongoDB instance based on its specifications and storage. For more information, see [Billable items](/help/en/mongodb/product-overview/billable-items).

### **Free trial**

Alibaba Cloud offers free trials for ApsaraDB for MongoDB replica set instances. If you are an enterprise user who uses ApsaraDB for MongoDB for the first time, you can go to the [All Free Tier Products Available](https://www.alibabacloud.com/free?tags=database) page to apply for a trial. If you are not a first-time user of ApsaraDB for MongoDB, follow the steps described in this topic to create a replica set instance in the ApsaraDB for MongoDB console.

## **Procedure**

## Replica set

This section shows you how to create a pay-as-you-go MongoDB 8.0 replica set instance. For detailed instructions, see [Create a replica set instance](/help/en/mongodb/user-guide/create-a-replica-set-instance).

1.  Go to the [ApsaraDB for MongoDB buy page](https://common-buy-intl.alibabacloud.com/dds/postpay).
    
2.  On the buy page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Product Type
    
    Select the instance architecture based on your business needs.
    
    Replica Set (pay-as-you-go)
    
    Region
    
    Select the deployment region for the instance.
    
    China (Hangzhou)
    
    Deployment Type/Zone Type
    
    Select the deployment type of the instance.
    
    Single-zone
    
    Zone
    
    Select the zone where the instance resides.
    
    Hangzhou Zone J
    
    Engine Version
    
    Select a [MongoDB version](/help/en/mongodb/product-overview/release-notes-1/) as needed.
    
    MongoDB 8.0
    
    Active-standby Nodes
    
    Select the number of nodes for the replica set.
    
    Three Nodes Replicaset
    
    Read-only Nodes
    
    Select the number of [read-only nodes](/help/en/mongodb/product-overview/read-only-nodes) for the replica set.
    
    No Read-only Node
    
    Storage Engine
    
    Fixed to **Wired Tiger**.
    
    Wired Tiger
    
    Storage Type
    
    Select the [storage type](/help/en/mongodb/product-overview/storage-types) for the replica set instance.
    
    ESSD PL1
    
    Encryption Type
    
    Select whether to enable [disk encryption](/help/en/mongodb/user-guide/disk-encryption).
    
    No Encryption
    
    Resource Group
    
    Select a resource group to manage the instance.
    
    Default Resource Group
    
    Tag
    
    Attach [tags](/help/en/mongodb/user-guide/tag-management/) to the instance.
    
    None
    
    Network Type
    
    Fixed to **VPC**.
    
    VPC
    
    VPC
    
    Select the VPC for the instance. We recommend selecting the same VPC as your ECS instance for private network access.
    
    You can use the **Default VPC**. If the **Default VPC** is not available, select an existing VPC or create one in the [VPC console](https://vpc.console.alibabacloud.com/vpc//vpcs).
    
    Default VPC
    
    vSwitch
    
    Select the vSwitch for the instance.
    
    You can use the **Default Switch**. If the **Default Switch** is not available, select an existing vSwitch or create one in the [VPC console](https://vpc.console.alibabacloud.com/vpc//vpcs).
    
    Default vSwitch
    
    Category
    
    Select the specification category of the instance.
    
    Dedicated
    
    Specifications
    
    Select the [specifications](/help/en/mongodb/product-overview/replica-set-instance-types), which determines CPU and memory resources.
    
    2 Cores, 8 GB (Dedicated)
    
    Storage
    
    Select the storage capacity of the instance.
    
    20 GB
    
    Username
    
    Fixed to **root**.
    
    root
    
    Set Password
    
    Select **Set Now**.
    
    If you select **Set Later**, [reset the password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance) before you connect to the instance.
    
    Set Now
    
    Password
    
    Enter the password for the root account and confirm it.
    
    **This password is for demonstration only. Do not use it in production.**
    
    PassWord123!
    
    Instance Name
    
    Specify a custom name for the instance.
    
    Test instance
    
    Quantity
    
    Select the number of instances with the same configuration to create.
    
    1
    
3.  Click **Buy Now**.
    
4.  Confirm the **Parameters** and click **Activate Now**.
    
5.  On the Activated page, click **Console** to go to the Instances page. The new instance appears in the instance list.
    
    It takes about 10 to 15 minutes to create the instance. If the instance does not appear in the list, refresh the page later.
    

## Sharded cluster

This section shows you how to create a pay-as-you-go MongoDB 8.0 sharded cluster instance. For detailed instructions, see [Create a sharded cluster instance](/help/en/mongodb/user-guide/create-a-sharded-cluster-instance).

1.  Go to the [ApsaraDB for MongoDB buy page](https://common-buy-intl.alibabacloud.com/ddssharding/postpay).
    
2.  On the buy page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Product Type
    
    Select the instance architecture based on your business needs.
    
    Sharded Cluster (pay-as-you-go)
    
    Region
    
    Select the deployment region for the instance.
    
    China (Hangzhou)
    
    Zone Type
    
    Select the deployment type of the instance.
    
    Single-zone
    
    Zone
    
    Select the zone where the instance resides.
    
    Hangzhou Zone J
    
    Protocol Type
    
    Fixed to **MongoDB**.
    
    MongoDB
    
    Engine Version
    
    Select a [MongoDB version](/help/en/mongodb/product-overview/release-notes-1/) as needed.
    
    MongoDB 8.0
    
    Storage Engine
    
    Fixed to **Wired Tiger**.
    
    Wired Tiger
    
    Storage Type
    
    Select the [storage type](/help/en/mongodb/product-overview/storage-types) for the instance as needed.
    
    ESSD PL1
    
    Encryption Type
    
    Specify whether to enable [disk encryption](/help/en/mongodb/user-guide/disk-encryption).
    
    No Encryption
    
    Category
    
    Select the specification category of the instance.
    
    Dedicated
    
    Resource Group
    
    Select a resource group to manage the instance.
    
    Default Resource Group
    
    Tag
    
    Attach [tags](/help/en/mongodb/user-guide/tag-management/) to the instance.
    
    None
    
    Network Type
    
    Fixed to **VPC**.
    
    VPC
    
    VPC
    
    Select the VPC for the instance. We recommend selecting the same VPC as your ECS instance for private network access.
    
    You can use the **Default VPC**. If the **Default VPC** is not available, select an existing VPC or create one in the [VPC console](https://vpc.console.alibabacloud.com/vpc//vpcs).
    
    Default VPC
    
    vSwitch
    
    Select the vSwitch for the instance.
    
    You can use the **Default Switch**. If the **Default Switch** is not available, select an existing vSwitch or create one in the [VPC console](https://vpc.console.alibabacloud.com/vpc//vpcs).
    
    Default vSwitch
    
    Mongos Specification
    
    Select the [specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types) for the Mongos components.
    
    2 Cores, 8 GB (Dedicated)
    
    Mongos Quantity
    
    Select the number of Mongos components.
    
    2
    
    Shard Specifications
    
    Select the [specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types) for the Shard components.
    
    2 Cores, 8 GB (Dedicated)
    
    Shard Storage
    
    Select the storage capacity of the shard component.
    
    20 GB
    
    Shard Read-only Nodes
    
    Select the number of [read-only nodes](/help/en/mongodb/product-overview/read-only-nodes) for each shard.
    
    No Read-only Node
    
    Shard Quantity
    
    Select the number of shard components.
    
    2
    
    ConfigServer Specification
    
    Select the [specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types) for the ConfigServer components.
    
    4 Cores, 8 GB (Dedicated)
    
    ConfigServer Storage
    
    Select the storage capacity of the Configserver component.
    
    20 GB
    
    Username
    
    Fixed to **root**.
    
    root
    
    Set Password
    
    Select **Set Now**.
    
    If you select **Set Later**, [reset the password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance) before you connect to the instance.
    
    Set Now
    
    Password
    
    Enter the password for the root account and confirm it.
    
    **This password is for demonstration only. Do not use it in production.**
    
    PassWord123!
    
    Instance Name
    
    Specify a custom name for the instance.
    
    Test instance
    
3.  Click **Buy Now**.
    
4.  Confirm the **Parameters** and click **Activate Now**.
    
5.  On the Activated page, click **Console** to go to the Instances page. The new instance appears in the instance list.
    
    It takes about 10 to 15 minutes to create the instance. If the instance does not appear in the list, refresh the page later.
    

## Standalone

This section shows you how to create a pay-as-you-go MongoDB 4.0 standalone instance. For detailed instructions, see [Create a standalone instance](/help/en/mongodb/user-guide/create-a-standalone-instance-1).

1.  Go to the [ApsaraDB for MongoDB buy page](https://common-buy-intl.alibabacloud.com/dds/postpay).
    
2.  On the buy page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Product Type
    
    Select the instance architecture based on your business needs.
    
    Replica Set (pay-as-you-go)
    
    Region
    
    Select the deployment region for the instance.
    
    China (Hangzhou)
    
    Deployment Type/Zone Type
    
    Select the deployment type of the instance.
    
    Single-zone
    
    Zone
    
    Select the zone where the instance resides.
    
    Hangzhou Zone G
    
    Engine Version
    
    Select **MongoDB 4.0**.
    
    MongoDB 4.0
    
    Active-standby Nodes
    
    Select the number of nodes for the replica set.
    
    Standalone
    
    Read-only Nodes
    
    Fixed to **No Read-only Node**.
    
    No Read-only Node
    
    Storage Engine
    
    Fixed to **Wired Tiger**.
    
    Wired Tiger
    
    Storage Type
    
    Fixed to **ESSD PL1**.
    
    ESSD PL1
    
    Resource Group
    
    Select a resource group to manage the instance.
    
    Default Resource Group
    
    Tag
    
    Attach [tags](/help/en/mongodb/user-guide/tag-management/) to the instance.
    
    None
    
    Network Type
    
    Fixed to **VPC**.
    
    VPC
    
    VPC
    
    Select the VPC for the instance. We recommend selecting the same VPC as your ECS instance for private network access.
    
    You can use the **Default VPC**. If the **Default VPC** is not available, select an existing VPC or create one in the [VPC console](https://vpc.console.alibabacloud.com/vpc//vpcs).
    
    Default VPC
    
    vSwitch
    
    Select the vSwitch for the instance.
    
    You can use the **Default Switch**. If the **Default Switch** is not available, select an existing vSwitch or create one in the [VPC console](https://vpc.console.alibabacloud.com/vpc//vpcs).
    
    Default vSwitch
    
    Category
    
    Fixed to **General-purpose**.
    
    General-purpose
    
    Specifications
    
    Select the [specifications](/help/en/mongodb/product-overview/standalone-instance-types), which determines CPU and memory resources.
    
    4 Cores, 8 GB (General)
    
    Storage
    
    Select the storage capacity of the instance.
    
    20 GB
    
    Username
    
    Fixed to **root**.
    
    root
    
    Set Password
    
    Select **Set Now**.
    
    If you select **Set Later**, [reset the password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance) before you connect to the instance.
    
    Set Now
    
    Password
    
    Enter the password for the root account and confirm it.
    
    **This password is for demonstration only. Do not use it in production.**
    
    PassWord123!
    
    Instance Name
    
    Specify a custom name for the instance.
    
    Test instance
    
    Quantity
    
    Select the number of instances with the same configuration to create.
    
    1
    
3.  Click **Buy Now**.
    
4.  Confirm the **Parameters** and click **Activate Now**.
    
5.  On the Activated page, click **Console** to go to the Instances page. The new instance appears in the instance list.
    
    It takes about 10 to 15 minutes to create the instance. If the instance does not appear in the list, refresh the page later.
    

## **Next step**

[Configure a whitelist](/help/en/mongodb/getting-started/set-up-a-white-list)
