This topic describes how to create a new PolarDB for MySQL cluster by cloning the data of a source PolarDB for MySQL cluster.

## Precautions

PolarDB for MySQL Enterprise Edition and Standard Edition support different cloning features.

**PolarDB for MySQL** **Edition**

**Precautions**

PolarDB for MySQL Enterprise Edition

-   The following data **can be cloned**:
    
    -   Cluster account information.
        
    -   The transparent data encryption (TDE) configurations can be cloned if the source cluster has TDE enabled.
        
-   The following data **cannot be cloned**:
    
    -   Parameter settings.
        
    -   The whitelist configurations of the source cluster.
        
    -   Secure sockets layer (SSL) configurations.
        
-   Only the data that exists in the source cluster before the clone operation starts is cloned.
    

PolarDB for MySQL Standard Edition

-   The following data **can be cloned**:
    
    -   Cluster account information.
        
    -   Parameter settings.
        
    -   The whitelist configurations of the source cluster.
        
    -   The transparent data encryption (TDE) configurations can be cloned if the source cluster has TDE enabled.
        
-   The following data **cannot be cloned**:
    
    -   Secure sockets layer (SSL) configurations.
        
-   Only data that exists in the source cluster before the clone operation starts is cloned.
    

## Procedure

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner, select the region of the cluster. In the cluster list, find the cluster.
    
2.  Click **More** > **Clone Data to New Cluster** in the **Actions** column of the cluster.
    
3.  On the page that appears, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Product Type**
    
    The billing method of the new cluster. Valid values: **Subscription** and **Pay-as-you-go**.
    
    -   **Subscription**: When you create a cluster, you need to make a payment for the use of the cluster for a specific period of time.
        
    -   **Pay-as-you-go**: When you create clusters, you do not need to make a payment first. You are charged for the computing and storage resources that you use.
        
    
    **Clone Source Type**
    
    The type of the clone source. The default value is Current Cluster. Use the default setting.
    
    **Region**
    
    The region where the new cluster is deployed. By default, the new cluster is deployed in the same region as that of the source cluster. For example, if the source cluster is deployed in the **China (Hangzhou)** region, the region of the new cluster is automatically set to **China (Hangzhou)**. Keep the default setting.
    
    **Primary Zone**
    
    -   A zone is an independent geographical location in a region. All zones in a region provide the same level of service performance.
        
    -   You can deploy your PolarDB for MySQL cluster and ECS instance in the same zone or in different zones.
        
    
    **Network Type**
    
    Only **VPC** is supported. Keep the default setting.
    
    **VPC**
    
    **VSwitch**
    
    Select a virtual private cloud (VPC) and a vSwitch from the drop-down lists. If you do not have a VPC, create a VPC and a vSwitch. To create a VPC and a vSwitch, visit the [VPCs](https://vpc.console.alibabacloud.com) page.
    
    **Note**
    
    Make sure that the PolarDB for MySQL cluster is deployed in the same VPC as the ECS instance. Otherwise, the cluster and the ECS instance cannot communicate with each other over the internal network to provide optimal performance.
    
    **Compatibility**
    
    By default, the new cluster has the same compatibility as that of the source cluster. For example, if the **compatibility** of the source cluster is MySQL 8.0, the **compatibility** of the new cluster is MySQL 8.0. In this case, you do not need to change this parameter value.
    
    **Edition**
    
    By default, the edition of the new cluster is the same as that of the source cluster. For example, if the value of the **Edition** parameter for the source cluster is **Cluster**, the value of the **Edition** parameter for the new cluster is also **Cluster**. In this case, you do not need to select the value of this parameter.
    
    **Node Specification**
    
    Select a **node specification**. The maximum storage capacity and performance of clusters vary based on node specifications. For more information, see [Compute node specifications of PolarDB for MySQL Enterprise Edition](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes#concept-2035312).
    
    **Nodes**
    
    -   If your source cluster is of **Cluster Edition (Recommended)**, the cluster consists of one primary node and one read-only node by default. You can select two nodes (a primary node and a read-only node) or one node (a primary node).
        
    -   If your source cluster is of **Multi-master Cluster (Limitless)**, the system creates two primary nodes with the same specifications by default. In this case, you do not need to configure this parameter.
        
    
    **PolarProxy Type**
    
    PolarDB provides two PolarProxy types: **Standard Enterprise Edition** and **Dedicated Enterprise Edition**.
    
    -   The **Standard Enterprise Edition** option is available for General-purpose clusters. This PolarProxy type shares CPU resources and provides smart elastic scaling capabilities within seconds based on business loads.
        
    -   The **Dedicated Enterprise Edition** option is available for Dedicated clusters. This PolarProxy type occupies all allocated CPU resources and provides better stability.
        
    
    **Note**
    
    The PolarProxy Enterprise Edition is available free of charge but may be charged in the future.
    
    **Enable Hot Standby Cluster**
    
    PolarDB provides multiple high availability modes. After you enable the hot standby storage cluster feature for a PolarDB cluster, a hot standby storage cluster is created in the secondary zone of the region in which the PolarDB cluster resides or in a different data center in the same zone. The hot standby storage cluster has independent storage resources. Whether the hot standby storage cluster has independent compute resources varies based on the high availability mode. When the PolarDB cluster in the primary zone fails, the hot standby storage cluster immediately takes over and handles read and write operations and storage tasks.
    
    **Note**
    
    -   For more information about the hot standby storage cluster and related solutions, see [High availability modes (hot standby clusters)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).
        
    -   Rules for changing high availability modes:
        
        -   You cannot directly change the high availability mode of a cluster from **Double Zones (Hot Standby Storage Cluster Enabled)** or **Double Zones (Hot Standby Storage and Compute Clusters Enabled)** to **Single Zone (Hot Standby Storage Cluster Disabled)**.
            
            For such change of the high availability mode, we recommend that you purchase a new cluster and select the **Single Zone (Hot Standby Storage Cluster Disabled)** high availability mode for the cluster. Then, migrate the existing cluster to the new cluster by using Data Transmission Service (DTS). For information about how to migrate an existing cluster to a new cluster, see [Migrate data between PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-between-polardb-for-mysql-clusters).
            
        -   You can select the **Three Zones** high availability mode only when you purchase a new cluster. You cannot change the high availability mode of a cluster from Three Zones to other high availability modes and vice versa.
            
    -   You can manually change the high availability mode of a cluster from **Single Zone (Hot Standby Storage Cluster Disabled)** to a different high availability mode. For more information, see [High availability modes (hot standby clusters)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).
        
    
    **Storage Type**
    
    Select a storage type that aligns with that of the source cluster. If the source clusters uses the ESSD storate type, you can only select ESSD. If the source cluster uses the PSL4 or PSL5 storage type, you can select PSL4 or PSL5.
    
    ESSDs are ultra-high performance disks developed by Alibaba Cloud. ESSDs use a next-generation distributed block storage architecture and support 25 Gigabit Ethernet networks and Remote Direct Memory Access (RDMA). Each ESSD has low one-way latency and can deliver up to 1 million random read/write IOPS. ESSDs are provided at the following performance levels (PLs):
    
    -   PL0 ESSD: A PL0 ESSD delivers the basic performance of an ESSD.
        
    -   PL1 ESSD: A PL1 ESSD delivers IOPS that is five times that delivered by a PL0 ESSD and throughput that is approximately twice that delivered by the PL0 ESSD.
        
    -   PL2 ESSD: A PL2 ESSD delivers IOPS and throughput that are approximately twice the IOPS and throughput delivered by a PL1 ESSD.
        
    -   PL3 ESSD: A PL3 ESSD delivers IOPS that is up to ten times that delivered by a PL2 ESSD and throughput that is up to five times that delivered by the PL2 ESSD. The ESSDs are suitable for business scenarios in which highly concurrent requests must be processed with high I/O performance and at low read and write latencies.
        
    -   ESSD AutoPL disk: Compared with an ESSD at one of the preceding PLs, an ESSD AutoPL disk decouples IOPS and storage, gives you the flexibility to configure IOPS and storage, and allows you to make some adjustments as needed. This reduces the overall Total Cost of Ownership (TCO).
        
        **Important**
        
        -   For more information about the performance of ESSDs, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).
            
        -   After the storage of an ESSD is exhausted, the disk is locked. In this case, the disk handles only read operations.
            
        
    
    The following table describes the PSL4 and PSL5 storage types.
    
    **Storage type**
    
    **Feature**
    
    **Scenario**
    
    PSL5
    
    PSL5 is the storage type supported by historical versions of PolarDB and the default storage type for PolarDB clusters purchased before June 7, 2022. It delivers higher performance, reliability, and availability.
    
    Scenarios that require high performance and reliability and use databases as the core of business systems, such as the finance, e-commerce, and public service sectors, and large and medium-sized Internet services.
    
    PSL4
    
    PSL4 is a new storage type introduced by PolarDB. It uses the Alibaba-developed [Smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb) technology to compress and decompress data at the physical SSD disk level. It reduces the storage price without compromising performance.
    
    Scenarios where cost-effectiveness is prioritized.
    
    **Note**
    
    If you select **ESSD AutoPL**, you can configure the **Provisioned IOPS for AutoPL Disks** parameter to increase the input/output operations per second (IOPS) of the ESSD AutoPL disks from the initial maximum value of 50,000. The maximum value of the parameter is 50,000. Therefore, the maximum IOPS of an ESSD AutoPL disk can reach 100,000 in theory.
    
    **Storage Engine**
    
    PolarDB provides two engine types: **InnoDB** and **InnoDB & X-Engine**.
    
    -   **InnoDB**: deploys only the InnoDB storage engine.
        
    -   **InnoDB & X-Engine:**: deploys both InnoDB and X-Engine. After you select this option, specify the ratio of X-Engine Memory Usage. For more information, see [X-Engine Edition](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition#concept-2010571).
        
    
    **Storage Billing Method**
    
    PolarDB supports the **Pay-as-you-go** and **Subscription** storage billing methods.
    
    -   **Pay-as-you-go**: The storage capacity is provided based on a serverless architecture. This way, you do not need to specify the storage capacity when you purchase clusters. The storage capacity of the clusters can be automatically scaled up as the volume of data increases. You are charged for the actual data volume. For more information, see [Pay-as-you-go](/help/en/polardb/polardb-for-mysql/pay-as-you-go#concept-2233804).
        
    -   **Subscription**: You must purchase a specific amount of storage capacity when you create the cluster. For more information, see [Subscription](/help/en/polardb/polardb-for-mysql/subscription#concept-2233805).
        
    
    **Note**
    
    If the **Billing Method** parameter is set to **Subscription**, you can select **Pay-as-you-go** or **Subscription** as the value of **Storage Billing Method**. If the **Billing Method** parameter is set to **Pay-as-you-go**, you cannot change the default value of this parameter, which is Pay-as-you-go.
    
    **Storage Capacity**
    
    The amount of storage capacity that you want to purchase for your cluster. The storage capacity ranges from 50 GB to 500 TB, in 10 GB increments.
    
    **Note**
    
    This parameter is valid only when **Storage Billing Method** is set to **Subscription**.
    
    **Storage Cost**
    
    The storage cost. You do not need to change this parameter value. You are charged on an hourly basis based on the actual storage that you use. For more information, see [Billing items](/help/en/polardb/polardb-for-mysql/enterprise-billing-item-overview#concept-zbj-4pg-tdb).
    
    **Note**
    
    You do not need to specify the storage capacity when you create a cluster. The system scales the storage capacity when the amount of data is increased or decreased.
    
    **Enable Binary Logging**
    
    Specifies whether to select **Enable Binary Logging**. For more information about binary logging, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).
    
    **Cluster Name**
    
    The name of the cluster. The name must meet the following requirements:
    
    -   It cannot start with `http://` or `https://`.
        
    -   It must be 2 to 256 characters in length.
        
    
    If this parameter is left empty, the system automatically generates a cluster name. You can change the cluster name after the cluster is created.
    
    **Purchase Plan**
    
    This parameter is supported only when the value of the **Billing Method** parameter is **Subscription**.
    
    **Number**
    
    Valid values: 1 to 50. Default value: 1.
    
4.  Read and accept the Terms of Service, and complete the rest of the steps based on the **billing method** of the cluster.
    
    -   **Pay-as-you-go**
        
        Click **Buy Now**.
        
    -   **Subscription**
        
        1.  Click **Buy Now**.
            
        2.  On the **Purchase** page, confirm the order and the payment method, and then click Subscribe.
            
    
    **Note**
    
    After you complete the payment, it requires 1 to 5 minutes to create the cluster. Then, you can view the new cluster on the **Clusters** page.
