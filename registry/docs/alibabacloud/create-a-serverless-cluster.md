This topic describes how to create a serverless cluster. Instead of setting fixed specifications for compute nodes, you set a scaling range for the number of read-only nodes and the PolarDB Capacity Units (PCUs) per node. The system then automatically adjusts the number of PCUs and read-only nodes based on the workload.

**Note**

-   If you have a PolarDB for MySQL cluster, you can enable the serverless feature directly. For more information, see [Enable the serverless feature for a cluster with defined specifications](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters#main-2305694).
    
-   If you have another database and want to use the serverless feature, you can use Data Transmission Service (DTS) to migrate your data to a new serverless cluster. For more information, see [Overview of data migration solutions](/help/en/polardb/polardb-for-mysql/user-guide/overview-32#concept-nvg-y1z-zgb).
    

## Prerequisites

You have an Alibaba Cloud account. For more information, see [Register and log on to an Alibaba Cloud account](/help/en/polardb/polardb-for-mysql/user-guide/register-and-log-on-to-an-alibaba-cloud-account#concept-k5l-p4q-tdb).

## Usage notes

-   The **Database Engine** does not support MySQL 5.6.
    
-   The **CPU Architecture** is fixed to X86. Yitian ARM is not supported.
    

## Step 1: Basic configuration

Configure the basic settings. These settings include purchase details, such as the billing method, region, and zone, and resource specifications, such as the database engine and resource scaling range.

**Configuration**

**Description**

**Billing Method**

**Serverless**

****Region****

Select a region that is close to you to reduce network latency. You cannot change the region after the cluster is created. For more information, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).

**Note**

Make sure that the PolarDB cluster and the ECS instance to which you want to connect are in the same region. Otherwise, they cannot use the internal network for communication. This degrades performance.

**Creation Method**

**Create Primary Cluster**

**Database Engine**

Select a MySQL engine version as needed. For a comparison of versions, see [Feature comparison of PolarDB for MySQL 5.6, 5.7, and 8.0](/help/en/polardb/polardb-for-mysql/version-comparison).

-   **MySQL 5.7**
    
-   **MySQL 8.0.2**
    
-   **MySQL 8.0.1**
    

**Edition**

Select a product edition as needed. For a comparison of editions, see [Comparison between Enterprise Edition and Standard Edition](/help/en/polardb/polardb-for-mysql/comparison-of-enterprise-edition-and-standard-edition).

-   **Enterprise Edition**
    
-   **Standard Edition**
    

**Primary Zone**

A zone is an independent physical area within a region. There is no significant difference between zones.

**Note**

-   You can create the PolarDB cluster and the ECS instance in the same zone or in different zones.
    
-   You only need to select the primary zone. The system automatically selects a secondary zone.
    

**Network Type**

Configure the virtual private cloud (VPC) and vSwitch.

-   If an existing VPC meets your network requirements, select the VPC. For example, if you have an existing ECS instance and the VPC to which the ECS instance belongs meets your network requirements, select the VPC.
    
-   Otherwise, use the default VPC and the default vSwitch:
    
    -   Default VPC:
        
        -   The default VPC is unique within the selected region.
            
        -   The CIDR block of the default VPC uses a 16 bit subnet mask, such as 192.168.0.0/16, and provides up to 65,536 private IP addresses.
            
        -   The default VPC does not count against your VPC quota.
            
    -   Default vSwitch:
        
        -   The default vSwitch is unique within the selected zone.
            
        -   The CIDR block of the default vSwitch uses a 20 bit subnet mask, such as 192.168.0.0/20, and provides up to 4,096 private IP addresses.
            
        -   The default vSwitch does not count against the vSwitch quota in a VPC.
            
-   If the default VPC and vSwitch do not meet your requirements, create a custom VPC and vSwitch. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
    

**Note**

Make sure the PolarDB cluster is in the same VPC as the ECS instance you want to connect to. Otherwise, they cannot communicate over the internal network, which prevents optimal performance.

**High-availability Mode**

PolarDB provides multiple high availability modes. After you enable the hot standby storage cluster feature for a PolarDB cluster, a hot standby storage cluster is created in the secondary zone of the region in which the PolarDB cluster resides or in a different data center in the same zone. The hot standby storage cluster has independent storage resources. Whether the hot standby storage cluster has independent compute resources varies based on the high availability mode. When the PolarDB cluster in the primary zone fails, the hot standby storage cluster immediately takes over and handles read and write operations and storage tasks.

**Note**

-   For more information about the hot standby storage cluster and related solutions, see [High availability modes (hot standby clusters)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).
    
-   Rules for changing high availability modes:
    
    -   You cannot directly change the high availability mode of a cluster from **Double Zones (Hot Standby Storage Cluster Enabled)** or **Double Zones (Hot Standby Storage and Compute Clusters Enabled)** to **Single Zone (Hot Standby Storage Cluster Disabled)**.
        
        For such change of the high availability mode, we recommend that you purchase a new cluster and select the **Single Zone (Hot Standby Storage Cluster Disabled)** high availability mode for the cluster. Then, migrate the existing cluster to the new cluster by using Data Transmission Service (DTS). For information about how to migrate an existing cluster to a new cluster, see [Migrate data between PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-between-polardb-for-mysql-clusters).
        
    -   You can select the **Three Zones** high availability mode only when you purchase a new cluster. You cannot change the high availability mode of a cluster from Three Zones to other high availability modes and vice versa.
        
-   You can manually change the high availability mode of a cluster from **Single Zone (Hot Standby Storage Cluster Disabled)** to a different high availability mode. For more information, see [High availability modes (hot standby clusters)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).
    

**Set** **the scaling range for** **the serverless cluster**

-   **Minimum Read-only Nodes**: Set the minimum number of read-only nodes that can be added. Valid values: 0 to 15.
    
-   **Maximum Read-only Nodes**: Set the maximum number of read-only nodes that can be added. Valid values: 0 to 15.
    

**Note**

-   The number of read-only nodes automatically increases or decreases within the specified range based on the workload. For more information about the scaling policy, see [Auto scaling](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview#9801ca239f4pr).
    
-   To ensure high availability for the serverless cluster, set **Minimum Read-only Nodes** to 1.
    

-   **Minimum PCUs Per Node**: Set the minimum number of PCUs per node in the cluster. Valid values: 0.25 PCU to 31 PCU.
    
-   **Maximum PCUs Per Node**: Set the maximum number of PCUs per node in the cluster. Valid values: 1 PCU to 32 PCU.
    

**Note**

-   Serverless uses PCUs for second-level billing and resource scaling. One PCU is equal to the service capability of about 1 core and 2 GB of memory. The PCUs of a node are dynamically adjusted within the specified range based on the workload. The minimum scaling unit is 0.5 PCU.
    
-   Example: If you set **Minimum PCUs Per Node** to 2 PCU and **Maximum PCUs Per Node** to 16 PCU, the default specification for nodes in the serverless cluster is 2 PCU (about 2 cores and 4 GB of memory). When the system detects an increased workload, it automatically increases the number of PCUs for the primary or read-only nodes. Based on the settings, the number of PCUs can be increased to a maximum of only 16 PCU (about 16 cores and 32 GB of memory).
    

**Enable No-activity Suspension**

If your database has no service requests during certain periods, you can enable the automatic start and stop feature. After you enable this feature, if no service is connected to the cluster within the specified **Detection Period For No-activity Suspension**, the cluster automatically enters the suspended state. During the suspension, you are still charged for storage space on a pay-as-you-go basis. If any service connects to the cluster, the cluster starts immediately.

**Note**

You cannot set the **Detection Period For No-activity Suspension** on the purchase page. The detection period is set to 60 minutes by default. After you purchase the cluster, you can modify this parameter on the cluster details page. For more information, see [Set automatic or manual start and stop for a serverless cluster](/help/en/polardb/polardb-for-mysql/user-guide/set-automatic-manual-start-stop-serverless-cluster).

**Storage Class**

-   **Enterprise Edition** supports two storage classes: **PSL5** and **PSL4**.
    
    -   **PSL5**: The storage class supported in earlier versions of PolarDB. It is the default storage class for PolarDB clusters purchased before June 7, 2022. It provides better performance, reliability, and availability.
        
    -   **PSL4**: A new storage class for PolarDB. It uses the [smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb) technology developed by Alibaba Cloud to compress and decompress data at the physical SSD level. This lowers the storage price per unit of data while keeping the performance impact under control.
        
-   **Standard Edition** supports **PSL5**, **PSL4**, and **ESSD**:
    
    -   **PSL5**: The storage class supported in earlier versions of PolarDB. It is the default storage class for PolarDB clusters purchased before June 7, 2022. It provides better performance, reliability, and availability.
        
    -   **PSL4**: A new storage class for PolarDB. It uses the [smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb) technology developed by Alibaba Cloud to compress and decompress data at the physical SSD level. This lowers the storage price per unit of data while keeping the performance impact under control.
        
    -   **ESSD**: A new ultra-high performance disk product from Alibaba Cloud. Based on a next-generation distributed block storage architecture, ESSDs use 25GE networks and RDMA technology to provide up to 1 million random read/write IOPS and lower one-way latency per disk. ESSDs are available in the following PLs:
        
        -   PL0 ESSD: An ESSD at PL0.
            
        -   PL1 ESSD: Compared to a PL0 ESSD, a PL1 ESSD provides 5 times the IOPS and about 2 times the throughput.
            
        -   PL2 ESSD: Compared to a PL1 ESSD, a PL2 ESSD provides about 2 times the IOPS and throughput.
            
        -   PL3 ESSD: Compared to a PL2 ESSD, a PL3 ESSD provides up to 10 times the IOPS and 5 times the throughput. It is suitable for business scenarios that require extremely high concurrent I/O performance and stable read/write latency.
            
        -   ESSD AutoPL disk: Compared to PL0, PL1, PL2, and PL3 ESSDs, an ESSD AutoPL disk decouples IOPS from capacity. This allows for flexible configuration and on-demand adjustments, which reduces the total cost of ownership (TCO).
            
            **Important**
            
            -   For more information about the performance of ESSDs, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).
                
            -   When the storage space of a disk is full, the disk is locked and becomes read-only. 3 GB of space is reserved to prevent data corruption caused by a full disk.
                
            
            When you select **ESSD AutoPL disk**, you can configure **Provisioned IOPS for AutoPL Disk** to increase the IOPS from the initial maximum of 50,000. The maximum value for provisioned IOPS is 50,000. This means the theoretical maximum total IOPS for an ESSD AutoPL disk is 100,000.
            

**Note**

-   You can [change the performance of an ESSD disk](/help/en/polardb/polardb-for-mysql/user-guide/change-the-performance-of-an-essd-cloud-disk).
    
-   If you need to use PSL4 storage while the cluster uses PSL5 storage, we recommend that you purchase a new cluster and migrate data from the original cluster to the new cluster by using a migration tool (such as DTS) or the [major version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/) feature.
    

## Step 2: Advanced options (optional)

Advanced options include the cluster name, resource group, and case sensitivity of table names.

**Configuration**

**Description**

**Cluster Name**

-   **Auto-generated**: The system automatically generates a cluster name. You can change the name after the cluster is created.
    
-   **Custom**: Enter a cluster name. The name must meet the following requirements:
    
    -   It cannot start with `http://` or `https://`.
        
    -   It must be 2 to 256 characters in length.
        
        If you leave this empty, the system automatically generates a cluster name. You can change the name after the cluster is created.
        

**Resource Group**

Select a target resource group that you have [created](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).

**Note**

A resource group is a container that manages a set of related resources under a single Alibaba Cloud account. A resource can belong to only one resource group. For more information, see [Resource groups and permissions](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups#task-d2j-wdk-xdb).

**Time Zone**

Set the time zone for the cluster. The default is **UTC+08:00**.

**Table Name Case Sensitivity**

Set whether table names in the cluster are case-sensitive.

-   **Case-insensitive (default)**
    
-   **Case-sensitive**
    

**Note**

-   You cannot change this parameter after the cluster is created. Choose carefully.
    
-   If your on-premises database is case-sensitive, select **Case-sensitive** to simplify data migration.
    

## Step 3: Confirm the order

Confirm the cluster configuration and specify the quantity. Ensure that the configurations meet your requirements.

1.  Review the selected configurations.
    
2.  Set the **Quantity** for the cluster. The default is 1.
    
    **Note**
    
    You can create up to 50 clusters at a time. This is useful for scenarios such as launching multiple game servers in batches.
    
3.  Read the Terms of Service, Service Level Agreement, and any applicable product-specific terms.
    
4.  Click **Buy Now**.
    
    After the purchase is successful, it takes 10 to 15 minutes to create the cluster. You can then view the new cluster in the cluster list.
    
    **Note**
    
    -   If the cluster status is **Creating**, it means the cluster is still being created and is unavailable. The cluster is available only when its status changes to **Running**.
        
    -   Ensure that you select the correct region. Otherwise, the cluster you created will not be visible.
