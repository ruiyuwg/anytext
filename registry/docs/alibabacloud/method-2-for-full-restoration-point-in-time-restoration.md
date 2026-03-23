Point-in-time restoration (PITR) restores all historical data from a PolarDB cluster to a new cluster. After you verify the data in the new cluster, you can migrate the restored data back to the source cluster.

You can perform a full restoration in two ways: from a backup set or to a specific point in time. This topic describes how to restore a cluster to a specific point in time.

## Before you begin

**Item**

**Details**

**What is restored**

The new cluster contains the data and account information of the source cluster.

**What is not restored**

The new cluster does not contain the parameter settings of the source cluster. After the restoration completes, you must manually reconfigure any custom parameter settings.

**Available time range**

Depends on the log retention period specified in the backup settings. The default period is 7 days.

## Procedure

### Step 1: Open the Backup and Restoration page

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  Select the **Region** where the cluster is deployed.
    
4.  Click the cluster ID to open the cluster details page.
    
5.  In the left-side navigation pane, choose **Settings and Management** > **Backup and Restoration**.
    

### Step 2: Start the point-in-time restoration

Choose one of the following options based on where you want to restore the data:

-   **Same-region restore**: On the **Backup and Restoration** page, click **Point-in-time Restoration**.
    
-   **Cross-region restore**:
    
    1.  On the **Backup and Restoration** page, select the region that contains the backup data.
        
    2.  Click **Point-in-time Restoration**.
        

### Step 3: Select a product type

On the Clone Instance page, select a **Product Type** for the new cluster:

**Product type**

**Billing model**

**Subscription**

You pay for computing resources in advance when you create the database cluster.

**Pay-as-you-go**

You are not required to pay for computing resources in advance. You are charged for the computing resources that you use.

**Serverless**

Fees include compute node fees, storage capacity fees, backup storage fees (charged only when the free quota is exceeded), and SQL Explorer fees (optional). For more information, see [Serverless billing](/help/en/polardb/polardb-for-mysql/user-guide/billing-of-serverless-clusters).

### Step 4: Configure the cluster parameters

Set the following parameters on the Clone Instance page.

#### Restoration settings

**Parameter**

**Description**

**Operation Type**

Select **Restore to Point in Time**.

**Region**

Select the destination region for the restoration. If cross-region backup is enabled, you can restore data to the source region and the destination region. If cross-region backup is not enabled, the destination region is the same as the source cluster's region by default and does not need to be selected.

**Backup Timepoint**

Select the point in time to which you want to restore data. The range of available time points depends on the log retention period specified in the backup settings. The default period is 7 days.

#### Cluster configuration

**Parameter**

**Description**

**Primary Availability Zone**

Select the primary availability zone for the cluster. In regions that have two or more zones, PolarDB automatically replicates data to the secondary zone for disaster recovery.

**Compatibility**

Fixed to the compatibility version of the source cluster. You do not need to configure this parameter. For example, if the original cluster's compatibility is **MySQL 8.0** (fully compatible with MySQL 8.0), this parameter is also fixed to **MySQL 8.0**.

**Minor Version**

Select **8.0.1** or **8.0.2**. This parameter is valid only if the Compatibility parameter is set to **MySQL 8.0**.

**Edition**

Fixed to the edition of the source cluster. You do not need to configure this parameter. For example, if the source cluster is Cluster Edition, the edition of the new cluster is also fixed to Cluster Edition. For more information, see [Enterprise Edition product series](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series#concept-1948721).

**CPU Architecture**

Fixed to the CPU architecture of the source cluster. You do not need to configure this parameter.

**Specification Type**

PolarDB for MySQL Cluster Edition supports two specification types: **General Specification** and **Dedicated Specification**. **Dedicated**: Each cluster exclusively uses its allocated computing resources, such as CPUs, without sharing them with other clusters on the same server. This provides better performance stability and reliability. **General-purpose**: Different clusters on the same server share idle computing resources, such as CPUs. This resource multiplexing improves cost-effectiveness. For a detailed comparison, see [General-purpose and Dedicated specifications](/help/en/polardb/polardb-for-mysql/comparison-between-general-purpose-and-dedicated-compute-nodes#concept-2046333).

**Node Specification**

Select the node specification for the cluster. Different specifications offer different maximum storage capacities and performance levels. For more information, see [Enterprise Edition compute node specifications](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes#concept-2035312). To ensure the restored cluster runs properly, we recommend selecting a node specification that is the same as or higher than that of the source cluster.

**Initial Primary Nodes** / **Initial Read-only Nodes**

If your source cluster is Cluster Edition, the system displays one primary node and one read-only node by default. You can adjust the number of nodes as needed. If your source cluster is Multi-master Cluster (Limitless) Edition, the system creates two primary nodes with the same specifications by default. You do not need to configure this parameter.

**PolarProxy Type**

PolarDB supports two database proxy types: **Standard Enterprise** and **Dedicated Enterprise**. **Standard Enterprise**: For clusters with General-purpose specifications. It shares physical CPU resources and provides intelligent, second-level resource scaling based on business workloads. **Dedicated Enterprise**: For clusters with Dedicated specifications. It exclusively uses physical CPU resources and offers better performance stability. PolarProxy Enterprise Edition is currently free of charge. The future billing date is yet to be determined.

#### High availability settings

**Parameter**

**Description**

**Enable Hot Standby Cluster**

After you enable the hot standby storage cluster feature for a PolarDB cluster, a hot standby storage cluster is created in the secondary zone of the region in which the PolarDB cluster resides or in a different data center in the same zone. The hot standby storage cluster has independent storage resources. Whether the hot standby storage cluster has independent compute resources varies based on the high availability mode. When the PolarDB cluster in the primary zone fails, the hot standby storage cluster immediately takes over and handles read and write operations and storage tasks. For more information, see [High availability modes (hot standby clusters)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).

**Triple-zone Deployment with Strong Consistency**

Specifies whether to enable triple-zone deployment with strong consistency.

> Rules for changing high availability modes:

> You cannot directly change the high availability mode of a cluster from **Double Zones (Hot Standby Storage Cluster Enabled)** or **Double Zones (Hot Standby Storage and Compute Clusters Enabled)** to **Single Zone (Hot Standby Storage Cluster Disabled)**. You must purchase a new cluster with the **Single Zone (Hot Standby Storage Cluster Disabled)** mode and migrate the existing cluster using Data Transmission Service (DTS). For more information, see [Migrate data between PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-between-polardb-for-mysql-clusters).

> You can select the **Three Zones** high availability mode only when you purchase a new cluster. You cannot change the high availability mode of a cluster from Three Zones to other high availability modes and vice versa.

> You can manually change the high availability mode of a cluster from **Single Zone (Hot Standby Storage Cluster Disabled)** to a different high availability mode. For more information, see [High availability modes (hot standby clusters)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).

#### Serverless parameters

> The following parameters are available only when the product type is Serverless.

**Parameter**

**Description**

**Minimum Number of Read-only Nodes**

Set the minimum number of read-only nodes. Valid values: 0 to 15. To ensure high availability for the serverless cluster, set **Minimum Read-only Nodes** to 1.

**Maximum Number of Read-only Nodes**

Set the maximum number of read-only nodes. Valid values: 0 to 15. The number of read-only nodes automatically increases or decreases within the specified range based on the workload. For more information about the scaling policy, see [Auto scaling](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview).

**Minimum PCUs Per Node**

Set the minimum number of PCUs per node. Valid values: 0.25 PCU to 31 PCU.

**Maximum PCUs Per Node**

Set the maximum number of PCUs per node. Valid values: 1 PCU to 32 PCU.

**Enable No-activity Suspension**

If you enable **No-activity Suspension**, you must set the **Detection Period for No-activity Suspension**. The detection period can range from 5 minutes to 24 hours.

> Serverless uses PCUs for second-level billing and resource scaling. One PCU is equal to the service capability of about 1 core and 2 GB of memory. The PCUs of a node are dynamically adjusted within the specified range based on the workload. The minimum scaling unit is 0.5 PCU. **Example**: If you set **Minimum PCUs Per Node** to 2 PCU and **Maximum PCUs Per Node** to 16 PCU, the default specification for nodes in the serverless cluster is 2 PCU (about 2 cores and 4 GB of memory). When the system detects an increased workload, it automatically increases the number of PCUs for the primary or read-only nodes. Based on the settings, the number of PCUs can be increased to a maximum of only 16 PCU (about 16 cores and 32 GB of memory).

#### Storage settings

**Parameter**

**Description**

**Storage Type**

This follows the storage type configuration of the source cluster. If the source cluster uses an enterprise SSD (ESSD), you can only select an ESSD. If the source cluster uses PSL4 or PSL5, you can select PSL4 or PSL5.

**Storage Engine**

PolarDB supports two engine types: **InnoDB** and **InnoDB & X-Engine**. **InnoDB**: The InnoDB engine. **InnoDB & X-Engine**: A hybrid deployment of InnoDB and X-Engine. After you select this option, you can set the proportion of the high-compression engine. For more information, see [High-compression engine (X-Engine)](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition#concept-2010571). This parameter is not supported for PolarDB for MySQL Standard Edition.

**Storage Billing Method**

PolarDB supports two storage billing methods: **Pay-as-you-go** and **Subscription**. **Pay-as-you-go**: You do not need to select a capacity when you make a purchase. The storage automatically scales as your data grows, and you are charged only for the actual storage space used. For more information, see [Pricing for pay-by-capacity (pay-as-you-go)](/help/en/polardb/polardb-for-mysql/pay-as-you-go#concept-2233804). **Subscription**: You must pay for the storage space of the database cluster in advance when you purchase it. For more information, see [Pricing for pay-by-space (subscription)](/help/en/polardb/polardb-for-mysql/subscription#concept-2233805). When **Billing Method** is **Subscription**, **Storage Billing Method** can be set to **Pay-as-you-go** or **Subscription**. When **Billing Method** is **Pay-as-you-go**, this parameter is not supported, and the system defaults to pay-as-you-go storage.

**Storage Capacity**

The amount of storage capacity to pre-purchase for **Subscription**. The storage capacity ranges from 50 GB to 500 TB, with a minimum adjustment of 10 GB. This parameter is available only when **Storage Billing Method** is set to **Subscription**.

**Storage Cost**

You do not need to select a capacity when you make a purchase. PolarDB charges you hourly based on actual usage.

**Storage type details**

**ESSD types**

ESSDs are ultra-high performance disks developed by Alibaba Cloud. ESSDs use a next-generation distributed block storage architecture and support 25 Gigabit Ethernet networks and Remote Direct Memory Access (RDMA). Each ESSD has low one-way latency and can deliver up to 1 million random read/write IOPS. ESSDs are divided into the following categories:

-   **PL0 ESSD**: Basic performance level.
    
-   **PL1 ESSD**: Delivers 5x higher IOPS and approximately 2x higher throughput than PL0.
    
-   **PL2 ESSD**: Delivers approximately 2x higher IOPS and throughput than PL1.
    
-   **PL3 ESSD**: Delivers up to 10x higher IOPS and 5x higher throughput than PL2, ideal for scenarios requiring extreme concurrent I/O performance and stable low read/write latency.
    
-   **ESSD AutoPL disk**: Decouples IOPS from capacity, allowing flexible configuration and on-demand adjustments to reduce total cost of ownership (TCO).
    

**Important**

-   For ESSD performance details, see [ESSD](/help/en/ecs/user-guide/essds).
    
-   When a disk's storage space is full, the disk is locked and becomes read-only.
    
-   To avoid service disruption, you can [enable automatic ESSD storage expansion](/help/en/polardb/polardb-for-mysql/user-guide/auto-expand-essd-storage).
    

**PSL4 and PSL5 types**

PSL4 and PSL5 are storage types designed by PolarDB for different scenarios:

**Storage type**

**Features**

**Scenarios**

PSL5 (PolarStore Level 5)

A storage type supported in earlier versions of PolarDB. It is the default storage type for PolarDB clusters purchased before June 7, 2022. It provides better performance, reliability, and availability.

Business scenarios that require high performance and reliability, where the database is a core system. Such scenarios include finance, e-commerce, government services, and medium-to-large Internet businesses.

PSL4 (PolarStore Level 4)

PolarDB launched this new storage type that uses Alibaba's proprietary [smart-SSD](/help/en/polardb/polardb-for-mysql/terminology) technology. This technology compresses and decompresses data at the physical SSD disk layer. This lowers the storage price per unit of data while keeping the performance impact under control.

Application scenarios that require cost reduction and high cost-effectiveness.

> Storage type conversion rules:

> Some product series support [storage type upgrades](/help/en/polardb/polardb-for-mysql/how-to-choose-between-psl4-and-psl5), which means that PSL4 storage can be upgraded to PSL5 storage.

> Downgrading the storage type is not supported. You cannot downgrade PSL5 storage to PSL4 storage.

> To switch from PSL5 storage to PSL4 storage, you can purchase a new cluster and migrate the data from the original cluster to the new cluster using a migration tool such as DTS or the [major version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/) feature.

#### Networking settings

**Parameter**

**Description**

**Network Type**

Fixed to **VPC**. You do not need to configure this parameter.

**VPC** / **VSwitch**

Select the **VPC** and **VSwitch** for the cluster. We recommend that you select the same VPC and VSwitch as the source cluster. Make sure that the PolarDB cluster and the ECS instance that you want to connect to are in the same VPC. Otherwise, they cannot communicate over the internal network to achieve optimal performance.

#### Additional settings

**Parameter**

**Description**

**Enable Binary Logging**

Specifies whether to enable binary logging. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).

**Cluster Name**

Enter a name for the cluster. The name cannot start with `http://` or `https://` and must be 2 to 256 characters in length. If you leave this empty, the system automatically generates a cluster name. You can change the cluster name after the cluster is created.

**Inherit Tags from Source Cluster**

Specifies whether to inherit tags from the source cluster.

**Purchase Plan**

Select the subscription duration for the cluster. This parameter is available only when **Billing Method** is set to **Subscription**.

**Number**

Select the number of clusters to purchase.

### Step 5: Complete the purchase

After you configure the parameters, confirm the cluster configuration and fee, read and accept the terms of service, and then click **Buy Now**.

## What to expect after restoration

After you complete the purchase, keep the following points in mind:

-   **Cluster creation time**: It takes 10 to 15 minutes for the system to create the cluster.
    
-   **Cluster visibility**: The new cluster appears in the cluster list on the [PolarDB console](https://polardb.console.alibabacloud.com/). Make sure that you have selected the correct region in the upper-left corner of the page. Otherwise, you cannot view the created cluster.
    
-   **Cluster status**: If a node's status is **Creating**, the cluster is still being created and is unavailable. The cluster is ready for use only when its status changes to **Running**.
    
-   **Parameter settings**: The restored cluster does not inherit parameter settings from the source cluster. You must manually reconfigure any custom parameters.
    

## Related API operations

**API**

**Description**

[CreateDBCluster](/help/en/polardb/api-polardb-2017-08-01-createdbcluster)

You can call the CreateDBCluster operation to restore data to a PolarDB cluster. Set the parameters as follows: The **CreationOption** parameter must be set to **CloneFromPolarDB**. The **CloneDataPoint** parameter must be set to **PointInTime**. You must specify the point in time in UTC using the `YYYY-MM-DDThh:mm:ssZ` format.
