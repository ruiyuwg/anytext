This topic describes how to restore a released PolarDB for PostgreSQL (Compatible with Oracle) cluster from the cluster recycle bin.

## Usage notes

-   To restore a released cluster from the recycle bin, make sure the cluster has at least one available backup set. If all backup sets of the cluster have been deleted, you cannot restore the cluster.
    
-   The data of all released clusters in the cluster recycle bin is asynchronously archived to level-2 backups at a rate of approximately 150 MB/s. For more information about backups, see [Backup and restoration](/help/en/polardb/polardb-for-oracle/backup-and-restoration-1/).
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Cluster Recycle Bin**.
    
3.  Select the **region** of the cluster you want to restore. In the cluster list, find the cluster and click **Restore Data to New Cluster** in its **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5158776471/p953205.png)
    
4.  On the [Custom Purchase](/help/en/polardb/polardb-for-oracle/purchase-a-pay-as-you-go-cluster-1) page, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   Subscription: an upfront payment model. You select and pay upfront for resources when you create a cluster. The longer the subscription duration, the larger the discount. This billing method is suitable for business services with predictable and consistent workloads over an extended time period.
        
    -   Pay-as-you-go: a postpaid model. You select resources but do not need to pay for them upfront when you create a cluster. You are charged based on your actual resource usage. This billing method is suitable for business services with fluctuating or unpredictable workloads.
        
    
    **Note**
    
    If the current billing method of your PolarDB cluster does not meet your business requirements, you can [change the billing method](/help/en/polardb/polardb-for-oracle/converting-billing-types/).
    
    **Region**
    
    The region of the cluster. You cannot change the region of a cluster after the cluster is created.
    
    **Note**
    
    -   To ensure optimal performance and security, make sure that the PolarDB cluster and the ECS instance from which you connect to the cluster are in the same region.
        
    -   You can deploy the PolarDB cluster and the ECS instance in the same zone or across different zones. Deploying them in the same zone can reduce network latency and improve access speed.
        
    
    **Creation Method**
    
    Select **Restore from Recycle Bin**.
    
    **Source Version**
    
    The version of the released cluster.
    
    **Deleted Clusters**
    
    The name of the released cluster.
    
    **Historical Backups**
    
    The backup set from which you want to restore the cluster.
    
    **Note**
    
    The **Historical Backups** field displays the backup time in UTC, while the backup list displays the backup time in the local system time. Make sure that you select the correct historical backup. For example, if the backup time displayed in the current backup list is `2020-05-08 10:00:00 (UTC+8)`, the corresponding historical backup time is `2020-05-08T02:00:00Z`.
    
    **Database Engine**
    
    The database engine version of the PolarDB cluster. The database engine version is the same as that of the released cluster and cannot be changed.
    
    **Database Edition**
    
    The edition of the PolarDB cluster. The edition is the same as that of the released cluster and cannot be changed.
    
    **Edition**
    
    The system automatically selects ****Cluster Edition (Recommended)****. Manual configuration is not required.
    
    **Specification**
    
    The system automatically selects **Dedicated**. Manual configuration is not required.
    
    **CPU Architecture**
    
    The CPU architecture of the PolarDB cluster. The CPU architecture is the same as that of the released cluster and cannot be changed.
    
    **Primary Zone**
    
    The primary zone where the cluster is deployed.
    
    -   A zone is an independent geographical location in a region. All zones in a region provide the performance level.
        
    -   You can deploy the PolarDB cluster and the ECS instance in the same zone or across different zones.
        
    
    **Network Type**
    
    Configure the VPC and vSwitch.
    
    The system automatically selects **VPC**. Manual configuration is not required. To ensure optimal performance and security, make sure that the PolarDB cluster and the ECS instance from which you connect to the cluster are in the same VPC.
    
    -   If you have an existing VPC that meets your network requirements, select it. For example, if you have created an ECS instance and the VPC where the ECS instance resides meets your network requirements, select this VPC.
        
    -   Otherwise, use the default VPC and the default vSwitch:
        
        -   Default VPC:
            
            -   Each region has only one default VPC.
                
            -   The CIDR block of the default VPC uses a 16-bit subnet mask. For example, the CIDR block of the default VPC can be 192.168.0.0/16. This CIDR block provides up to 65,536 private IP addresses.
                
            -   The default VPC does not consume the VPC quota allocated by Alibaba Cloud.
                
        -   Default vSwitch:
            
            -   Each zone has only one default vSwitch.
                
            -   The CIDR block of the default vSwitch uses a 20-bit subnet mask. For example, the CIDR block of the default vSwitch can be 192.168.0.0/20. This CIDR block provides up to 4,096 private IP addresses.
                
            -   The default vSwitch does not consume the vSwitch quota allocated by Alibaba Cloud.
                
    -   If the default VPC and vSwitch do not meet your requirements, you can create new ones. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575).
        
    
    **High Availability Mode**
    
    Select the high availability mode.
    
    -   **Dual AZ (Enable Hot Standby Storage Cluster)**: PolarDB deploys the primary cluster (which includes mutually backed-up compute nodes + primary storage) and a hot standby storage cluster within the same region. The clusters each maintain three data replicas (a total of 6 data replicas). This provides higher SLA reliability guarantees.
        
    -   **Single AZ (Disable Hot Standby Storage Cluster)**: Only the primary cluster is retained, with 3 data replicas. The storage cost per unit is half of the cost when the hot standby storage cluster is enabled. The cluster's SLA reliability is reduced compared to the dual AZ setup.
        
    
    **Note**
    
    For more information about the hot standby storage cluster and related solutions, see [High availability mode](/help/en/polardb/polardb-for-oracle/deploy-a-cluster-across-zones-and-change-the-primary-zone).
    
    **Secondary Zone**
    
    Select the secondary zone. This parameter is required only if you set **High Availability Mode** to **Dual AZ (Enable Hot Standby Storage Cluster)**. You can select **Automatically Allocated** for the automatical allocation of a secondary zone.
    
    **Nodes**
    
    By default, the cluster consists of one primary node and one read-only node. You can select two nodes (a primary node and a read-only node) or one node (a primary node) for the cluster.
    
    **PolarProxy Type**
    
    The system automatically selects **Dedicated Enterprise Edition**, which matches the dedicated cluster specifications. PolarProxy of this type exclusively occupies all allocated CPU resources to improve stability.
    
    **Storage Type**
    
    PolarDB supports two storage types: **PSL5** and **PSL4**:
    
    -   **PSL5**: the storage type supported in the PolarDB historical versions. It delivers higher performance, reliability and availability.
        
    -   **PSL4**: a new PolarDB storage type that uses the [smart-SSD](/help/en/polardb/polardb-for-oracle/glossary-1#concept-2336415) technology developed by Alibaba Cloud to compress and decompress data at the physical SSD level. It reduces storage costs per unit capacity while keeping the performance impact within manageable limits.
        
    
    **Note**
    
    You cannot change the storage type of an existing cluster. To change the storage type, you must create a new cluster with the desired storage type and then migrate data from the original cluster to the new one.
    
    For a detailed comparison of the two storage types, see [How do I choose between PSL4 and PSL5?](/help/en/polardb/polardb-for-oracle/comparison-between-psl4-and-psl5-1#concept-2144264).
    
    **Storage Billing Method**
    
    PolarDB supports the **Pay-as-you-go** and **Subscription** storage billing methods.
    
    -   **Pay-as-you-go**: This billing method uses a serverless approach. You do not need to select a specific storage capacity at the time of purchase. The storage automatically scales online as your data grows, and you are only charged based on the actual amount of storage space consumed by your data.
        
    -   **Subscription**: You prepay for the storage space when you purchase the cluster.
        
    
    **Note**
    
    This parameter is available only if you set **Billing Method** to **Subscription**.
    
    **Storage**
    
    The storage capacity you want to purchase for your cluster. The range of available storage space is 10 GB to 500 TB, with a minimum adjustment increment of 10 GB.
    
    **Note**
    
    This parameter is available only if you set **Billing Method** to **Subscription** and **Storage Billing Method** to **Subscription**.
    
5.  On the right side of the page, confirm that all configuration items (such as **Billing Method**, **Region**, **Creation Mode**, and **Resource Group**) meet your business requirements. Then, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Quantity**
    
    The number of clusters you want to purchase.
    
    **Note**
    
    -   You can create up to 50 clusters at a time. This is suitable for business scenarios such as batch server launches in gaming applications.
        
    -   An Alibaba Cloud account can purchase up to 50 clusters in total.
        
    
    **Duration**
    
    This configuration is required only if you set **Billing Method** to **Subscription**. You can also select whether to **Enable Auto-Renewal**.
    
    **Note**
    
    We recommend that you select **Enable Auto-Renewal** to prevent service interruptions caused by overdue payments.
    
    Review the total cost and the detailed breakdown of expenses (including compute specifications, storage, and network), and click **Buy Now**. By clicking this button, you acknowledge and agree to the service agreement and any product-specific terms you may have selected on the page, if applicable. On the **Payment** page, verify the information regarding your order, select a payment method, and then click **Pay**.
    
    It takes about 10 to 15 minutes to create the cluster after the purchase is complete. After this setup period, you can see the new cluster in the cluster list.
    
    **Note**
    
    -   When a node in the cluster is in the **Creating** state, the entire cluster may not yet be fully established. In this case, the cluster is unavailable. The cluster is available only when its status is **Running**.
        
    -   Make sure that you select the region where the cluster is deployed. Otherwise, the cluster is not displayed.
        
    

## Related API operations

**Operation**

**Description**

[CreateDBCluster](/help/en/polardb/polardb-for-oracle/api-createdbcluster-2#doc-api-polardb-CreateDBCluster)

Creates a PolarDB cluster.
