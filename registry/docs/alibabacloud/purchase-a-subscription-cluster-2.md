Create a PolarDB for PostgreSQL (Compatible with Oracle) cluster in the PolarDB console.

## Prerequisites

Before you begin, ensure that you have:

-   [An Alibaba Cloud account](/help/en/polardb/polardb-for-oracle/register-and-log-on-to-an-alibaba-cloud-account-2#concept-k5l-p4q-tdb)
    

## JDBC driver compatibility

PolarDB for PostgreSQL (Compatible with Oracle) supports the 64-bit DATE type that is compatible with Oracle. This feature requires PolarDB JDBC driver 42.2.9.1.2 or later. Otherwise, precision loss may occur. For more information, see [64-bit DATE types](/help/en/polardb/polardb-for-oracle/64-bit-date-types#task-2276555).

## Procedure

### Step 1: Select billing and region

1.  Go to the [PolarDB Custom Purchase](https://polardb-buy.alibabacloud.com) page.
    
2.  Select a **Billing Method**.
    
    **Note**
    
    You can [change the billing method](/help/en/polardb/polardb-for-oracle/converting-billing-types/) at any time.
    
    **Billing method**
    
    **How it works**
    
    **Best for**
    
    **Subscription**
    
    Pay upfront for a fixed term. Longer terms receive larger discounts.
    
    Predictable, steady workloads
    
    **Pay-as-you-go**
    
    Pay based on actual resource usage with no upfront commitment.
    
    Fluctuating or unpredictable workloads
    
3.  Select a **Region**. Deploying the PolarDB cluster in the same zone as your ECS instance further reduces network latency.
    
    **Important**
    
    The region cannot be changed after the cluster is created. Deploy your PolarDB cluster in the same region as the Elastic Compute Service (ECS) instance that runs your application. Otherwise, the cluster and instance can only communicate over the Internet, which degrades performance. For more information, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
    

### Step 2: Select a creation method

Select a **Creation Method**.

**Method**

**Description**

**Create Primary Cluster**

Creates a new PolarDB cluster.

**Restore from Recycle**

Restores a deleted cluster from a backup. Configure **Source Version**, **Deleted Clusters**, and **Backup History** to select the backup set to restore.

**Note**

You can select other options to create clusters of other database engines.

### Step 3: Configure the engine

Set the following engine and edition parameters.

**Parameter**

**Value**

**Database Engine**

**PolarDB for PostgreSQL (Compatible with Oracle) 2.0**

**Database Edition**

**Enterprise Edition**

**Edition**

**Cluster Edition (Recommended)** (default)

**Specification**

**Dedicated**

**CPU Architecture**

**x86** (default)

For compute node specifications, see [Specifications of compute nodes](/help/en/polardb/polardb-for-oracle/specifications-of-compute-nodes-2).

### Step 4: Configure networking

1.  Select a **Primary Zone**. A zone is an independent physical location within a region. All zones in a region provide the same level of service performance.
    
2.  Configure the **Network Type**. The network type is fixed as **VPC**. Select a VPC and vSwitch for the cluster.
    
    -   **Use an existing VPC**: If your ECS instance is already in a VPC that meets your requirements, select that VPC to enable internal network communication.
        
    -   **Use the default VPC and vSwitch**: If no existing VPC meets your needs, use the defaults: | Resource | Details | |---|---| | Default VPC | Uses a 16-bit subnet mask (for example, 192.168.0.0/16) with up to 65,536 private IP addresses. Does not count against your VPC quota. | | Default vSwitch | Uses a 20-bit subnet mask (for example, 192.168.0.0/20) with up to 4,096 private IP addresses. Does not count against your vSwitch quota. |
        
    -   **Create a custom VPC**: For specific networking requirements, [create a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
        

### Step 5: Set the high-availability mode

Select a **High-availability Mode**.

**Mode**

**Data replicas**

**Storage cost**

**Description**

**Enable Hot Standby Storage Cluster**

Two data replicas

Standard

Deploys the primary cluster and a hot standby storage cluster in the same region for higher SLA reliability.

**Disable Hot Standby Storage Cluster**

Three replicas

Half of the enabled mode

Deploys only the primary cluster. Delivers lower SLA.

For more information, see [High-availability mode](/help/en/polardb/polardb-for-oracle/deploy-a-cluster-across-zones-and-change-the-primary-zone).

If you select **Enable Hot Standby Storage Cluster**, configure a **Secondary Zone**. **Automatically Allocated** is supported.

### Step 6: Configure nodes and storage

1.  Select the **Node specifications** for compute nodes. See [Specifications of compute nodes](/help/en/polardb/polardb-for-oracle/specifications-of-compute-nodes-2).
    
2.  Set the number of **Nodes**. By default, the cluster has one primary node and one read-only node. The cluster must have one primary node. Add at least one read-only node to ensure high availability.
    
3.  Select a **Storage Type**.
    
    **Important**
    
    The storage type cannot be changed after the cluster is created. To switch storage types, create a new cluster and migrate your data. For a detailed comparison, see [How to choose between PSL4 and PSL5](/help/en/polardb/polardb-for-postgresql/comparison-between-psl4-and-psl5#concept-2144264).
    
    **Storage type**
    
    **Description**
    
    **Can change later**
    
    **PSL5**
    
    Higher performance, reliability, and availability. Supported in historical versions of PolarDB.
    
    No
    
    **PSL4**
    
    Uses [smart-SSD](/help/en/polardb/polardb-for-postgresql/glossary#concept-2336415) technology to compress and decompress data at the physical SSD level, reducing storage costs while maintaining high performance.
    
    No
    
4.  (Subscription only) Select a **Storage Billing Method**. This parameter is available only when **Billing Method** is set to **Subscription**. For more information, see [Billing rules for storage](/help/en/polardb/polardb-for-postgresql/overview-70).
    
    **Storage billing method**
    
    **Description**
    
    **Pay-as-you-go**
    
    Storage capacity scales dynamically. You are charged for actual usage.
    
    **Subscription**
    
    Purchase a specific amount of storage capacity upfront.
    
5.  (Subscription only) Set the **Storage Capacity**. This parameter is available only when both **Billing Method** and **Storage Billing Method** are set to **Subscription**. Valid values: 10 GB to 500 TB. The value must be a multiple of 10 GB.
    

### Step 7: Configure advanced options (optional)

**Parameter**

**Description**

**Cluster Name**

Select **Auto-generated** or **Custom**. Auto-generated names can be modified after creation. Custom names must be 2 to 256 characters and cannot start with `http://` or `https://`.

**Resource Group**

Select a resource group from your [created resource groups](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb). A resource group is a logical container for managing related resources. Each resource belongs to only one resource group. For more information, see [Classify resources into resource groups and grant permissions on the resource groups](/help/en/resource-management/resource-group/use-cases/use-ram-to-create-and-authorize-resource-groups#task-d2j-wdk-xdb).

**Enable TDE**

Enable Transparent Data Encryption (TDE) to encrypt the data files of your cluster. TDE is transparent to applications and requires no code changes. However, TDE degrades cluster performance by 5% to 10%.

**Note**

TDE cannot be disabled after it is enabled. TDE depends on Key Management Service (KMS). After enabling TDE, configure a service role to [authorize PolarDB to access KMS](/help/en/polardb/polardb-for-oracle/authorize-polardb-to-access-kms).

### Step 8: Confirm and pay

1.  On the right side of the page, verify that all parameters (**Billing Method**, **Region**, **Resource Group**, and others) are correct.
    
2.  Set the **Quantity** (number of clusters to purchase).
    
    **Note**
    
    -   You can create a maximum of 50 clusters at a time.
        
    -   You can purchase a maximum of 50 clusters with your Alibaba Cloud account.
        
    
3.  (Subscription only) Set the **Duration** and specify whether to enable **Auto-renewal**.
    
    **Note**
    
    Enable **Auto-renewal** to prevent service interruptions from overdue payments.
    
4.  Review the total cost and detailed cost breakdown (compute specifications, storage, and network). Read the terms of service. If you agree, click **Buy Now**.
    
5.  On the **Payment** page, confirm the order and payment method, and click **Subscribe**.
    

## Verify the cluster

The cluster is created within 10 to 15 minutes after payment. View the cluster on the **Clusters** page.

**Note**

-   If nodes in the cluster are in the **Creating** state, the cluster is still being provisioned and is unavailable. The cluster becomes available when its status changes to **Running**.
    
-   Select the correct region to view the cluster.
    

## Related APIs

**API**

**Description**

[Create a cluster](/help/en/polardb/api-polardb-2017-08-01-createdbcluster)

Creates a database cluster.

[Query a list of clusters](/help/en/polardb/api-polardb-2017-08-01-describedbclusters)

Retrieves a list of clusters.

[View the detailed attributes of a PolarDB cluster](/help/en/polardb/api-polardb-2017-08-01-describedbclusterattribute)

Retrieves the detailed attributes of a specified PolarDB cluster.

[Query the auto-renewal status of a cluster](/help/en/polardb/api-polardb-2017-08-01-describeautorenewattribute)

Queries the auto-renewal status of a subscription PolarDB cluster.

[Configure the auto-renewal status for a subscription cluster](/help/en/polardb/api-polardb-2017-08-01-modifyautorenewattribute)

Configures the auto-renewal status for a subscription PolarDB cluster.
