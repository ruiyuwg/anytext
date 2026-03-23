Create a PolarDB for MySQL cluster with preconfigured defaults using the **Quick Purchase** page in the PolarDB console. Cluster creation typically takes 10 to 15 minutes.

For full control over every configuration option, use the [Custom Purchase](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster) tab instead.

## Prerequisites

-   An Alibaba Cloud account. For details, see [Register and log on to an Alibaba Cloud account](/help/en/polardb/polardb-for-mysql/user-guide/register-and-log-on-to-an-alibaba-cloud-account#concept-k5l-p4q-tdb).
    
-   Logged on to the PolarDB console.
    

## Step 1: Configure basic settings

Go to the [**Quick Purchase**](https://polardb-buy.alibabacloud.com/fastBuy/Postpaid?spm=5176.polardb-buy.0.0.cab1454aQni7sg) page of the PolarDB console. Configure the following settings. For any parameter not listed here, keep the default value.

### Billing Method

Select a billing method:

**Billing method**

**Payment model**

**Specifications**

**Best for**

**Subscription**

Pay upfront. Longer durations offer greater discounts.

Fixed

Consistent, long-term workloads

**Pay-as-you-go**

Postpaid. Charged based on actual resource usage.

Fixed

Development, testing, or flexible workloads

[**Serverless**](/help/en/polardb/polardb-for-mysql/user-guide/serverless/)

Postpaid. PolarDB dynamically scales resources based on workload demand.

Auto-scaled

Fluctuating or unpredictable workloads

> You can switch the billing method after cluster creation. For more information, see [Switch between billing methods](/help/en/polardb/polardb-for-mysql/conversion-payment-type).

### Region

Select the region where you want to deploy the PolarDB cluster.

> Deploy the PolarDB cluster in the same region as the Elastic Compute Service (ECS) instance it will connect to. Cross-region communication is limited to the Internet, which degrades performance.

### Database Engine

Select the MySQL version for the cluster:

-   MySQL 8.0.1
    
-   MySQL 8.0.2
    

> For PolarDB for MySQL clusters, you can purchase only clusters that run MySQL 8.0. If you want to purchase a cluster that runs another MySQL version, click the **Custom Purchase** tab in the upper-left corner.

### Database Edition

Select the cluster edition:

-   **Enterprise Edition**
    
-   **Standard Edition**
    

> This parameter is required only when **Billing Method** is set to **Subscription** or **Pay-as-you-go**. For feature differences, see [Differences between Enterprise Edition and Standard Edition](/help/en/polardb/polardb-for-mysql/comparison-of-enterprise-edition-and-standard-edition).

### Network Type

Select the VPC and vSwitch for the PolarDB cluster.

-   If you have a VPC that meets your network requirements, select that VPC and its associated vSwitch. For example, select the same VPC as your ECS instance.
    
-   If you have not created a VPC, use the default VPC and vSwitch.
    

### Deployment Mode (optional)

Choose the number of nodes and the corresponding high-availability (HA) mode. This parameter is required only when **Billing Method** is set to **Subscription** or **Pay-as-you-go**. For more information, see [High-availability mode (hot standby storage cluster)](/help/en/polardb/polardb-for-mysql/user-guide/cluster-hot-standby).

**Deployment mode**

**Nodes**

****Hot Standby Storage Cluster****

**Details**

**Single-node Deployment**

1 (primary only)

Disabled

Contains only one primary node.

**Dual-node Deployment**

2 (1 primary + 1 read-only)

Disabled

Contains one primary node and one read-only node.

**Cross-zone HA**

2 (1 primary + 1 read-only)

Enabled; **Triple-zone Deployment with Strong Consistency**: Off

Data is distributed across multiple zones. Both the primary and secondary zones store a full copy of the data.

### Node Type

Select the compute node specifications for the cluster. For additional specifications, click the **Custom Purchase** tab in the upper-left corner.

### Storage Capacity (optional)

Set the storage capacity for the cluster.

> This parameter is required only when **Billing Method** is set to **Subscription** or **Pay-as-you-go** and **Database Edition** is set to **Standard Edition**.

## Step 2: Configure advanced settings (optional)

**Setting**

**Description**

**Resource Group**

Select a resource group. A resource group lets you manage related resources centrally. Each resource belongs to only one resource group. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).

**Parameter Template**

Select a custom or default system parameter template. The drop-down list displays all available [parameter templates](/help/en/polardb/polardb-for-mysql/user-guide/apply-a-parameter-template#task-2056643) in the current region.

**Time Zone**

Set the time zone for the cluster. Default: **UTC+08:00**.

**Table Name Case Sensitivity**

Specify whether table names are case-sensitive. Select **Not Case-sensitive (Default)**, or select **Case-sensitive** if your on-premises database uses case-sensitive table names (to facilitate data migration).

**Warning**

The **Table Name Case Sensitivity** setting cannot be changed after the cluster is created. Configure this parameter carefully.

## Step 3: Set the quantity and confirm the order

1.  **Review your configuration.** Confirm that all settings -- including **Billing Method**, **Region**, **Deployment Mode**, and **Resource Group** -- meet your requirements.
    
2.  **Set the quantity.** If **Billing Method** is set to **Subscription**, also specify the subscription duration and whether to enable **Auto-renewal**. > **Note:** > - You can create up to 50 clusters at a time, which is useful for scenarios such as deploying multiple game servers simultaneously. > - You can have a maximum of 50 clusters per Alibaba Cloud account. > - Enable **Auto-renewal** to prevent service interruptions caused by missed manual renewals.
    
3.  **Agree to the Terms of Service.** Read and agree to the Alibaba Cloud Terms of Service and User Agreement.
    
4.  **Check the prices.** Review the total price and the component prices for computing, storage, and network resources.
    
5.  **Pay the bill.** On the **Purchase** page, confirm your order and payment method, then click **Purchase**.
    
6.  **Wait for the cluster to be created.** After payment, wait 10 to 15 minutes, then check the **Clusters** page for your new cluster. > **Note:** > - If nodes in the cluster are in the **Creating** state, the cluster is still being provisioned. The cluster is ready when its status changes to **Running**. > - Make sure you have selected the correct region. Otherwise, the cluster will not appear in the list.
    

## What's next

After your cluster is in the **Running** state, connect to it and start using it. For more information, see [Connect to a database](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/).
