PolarDB offers two storage classes to suit different business needs: PSL4 and PSL5. They differ in price, data reliability, and performance. This topic explains these differences to help you choose the right storage class for your workload.

## Comparison and guidance

### At a glance

**Dimension**

**PSL4 (PolarStore Level 4)**

**PSL5 (PolarStore Level 5)**

**Cost**

Lower price per GB (approximately 34% less than PSL5)

Higher price per GB

**Data durability**

99.9999999% (nine 9s)

99.99999999% (ten 9s)

**Performance**

Same maximum storage capacity and I/O bandwidth as PSL5; lower IOPS limits

Higher IOPS limits

**Technology**

Uses Alibaba's proprietary [smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb) technology to compress and decompress data at the physical SSD disk layer

Default storage class for PolarDB clusters purchased before June 7, 2022

**Best for**

Cost-sensitive workloads that require high cost-effectiveness

Mission-critical systems that require the highest performance and reliability

### How to choose

-   **Choose PSL5** if your database serves as a core system and you need the highest levels of performance, reliability, and availability. Typical scenarios include finance, e-commerce, government services, and medium-to-large Internet businesses.
    
-   **Choose PSL4** if your priority is reducing storage costs while maintaining acceptable performance. PSL4 uses Alibaba's proprietary [smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb) technology, which compresses and decompresses data at the physical SSD disk layer. This lowers the storage price per unit of data while keeping the performance impact under control.
    

### Storage class conversion rules

**Note**

-   Some product series support storage class upgrades, which means that PSL4 storage can be upgraded to PSL5 storage.
    
-   Downgrading the storage class is not supported. You cannot downgrade PSL5 storage to PSL4 storage.
    
-   To switch from PSL5 storage to PSL4 storage, you can purchase a new cluster and migrate the data from the original cluster to the new cluster using a migration tool such as DTS or the [major version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/) feature.
    

## Pricing

The following tables list storage prices by billing method, storage class, and deployment mode. Multi-zone deployment modes (Dual-zone and Three-zone) share the same price within each storage class and region.

**Note**

For PSL4 storage, a 4-core CPU is allocated for data compression for each TB of data. The cost of this CPU is included in the storage fee, and no extra charges are incurred.

## Subscription

**Storage class**

**Deployment mode**

**The Chinese mainland (USD/GB/month)**

**China (Hong Kong) and other regions (USD/GB/month)**

PSL4

Dual-zone deployment (hot standby storage cluster enabled)

0.2308

0.2569

PSL4

Dual-zone deployment (hot standby storage and compute clusters enabled)

0.2308

0.2569

PSL4

Three-zone deployment (hot standby storage cluster and logger node enabled)

0.2308

0.2569

PSL4

Single zone (hot standby storage cluster disabled)

0.1154

0.1285

PSL5

Dual-zone deployment (hot standby storage cluster enabled)

0.3492

0.3892

PSL5

Dual-zone deployment (hot standby storage and compute clusters enabled)

0.3492

0.3892

PSL5

Three-zone deployment (hot standby storage cluster and logger node enabled)

0.3492

0.3892

PSL5

Single zone (hot standby storage cluster disabled)

0.1746

0.1946

## Pay-as-you-go

**Storage class**

**Deployment mode**

**The Chinese mainland (USD/GB/hour)**

**China (Hong Kong) and other regions (USD/GB/hour)**

PSL4

Dual-zone deployment (hot standby storage cluster enabled)

0.000486

0.000542

PSL4

Dual-zone deployment (hot standby storage and compute clusters enabled)

0.000486

0.000542

PSL4

Three-zone deployment (hot standby storage cluster and logger node enabled)

0.000486

0.000542

PSL4

Single zone (hot standby storage cluster disabled)

0.000243

0.000271

PSL5

Dual-zone deployment (hot standby storage cluster enabled)

0.000748

0.000834

PSL5

Dual-zone deployment (hot standby storage and compute clusters enabled)

0.000748

0.000834

PSL5

Three-zone deployment (hot standby storage cluster and logger node enabled)

0.000748

0.000834

PSL5

Single zone (hot standby storage cluster disabled)

0.000374

0.000417

## Serverless

**Storage class**

**Deployment mode**

**The Chinese mainland (USD per GB-hour)**

**China (Hong Kong) and other regions (USD per GB-hour)**

PSL4

Dual-zone deployment (hot standby storage cluster enabled)

0.000486

0.000486

PSL4

Dual-zone deployment (hot standby storage and compute clusters enabled)

0.000486

0.000486

PSL4

Three-zone deployment (hot standby storage cluster and logger node enabled)

0.000486

0.000486

PSL4

Single zone (hot standby storage cluster disabled)

0.000243

0.000243

PSL5

Dual-zone deployment (hot standby storage cluster enabled)

0.000748

0.000748

PSL5

Dual-zone deployment (hot standby storage and compute clusters enabled)

0.000748

0.000748

PSL5

Three-zone deployment (hot standby storage cluster and logger node enabled)

0.000748

0.000748

PSL5

Single zone (hot standby storage cluster disabled)

0.000374

0.000374

## Data reliability

PSL5 provides a higher level of data durability than PSL4. If data durability is your top concern, choose PSL5.

**Storage class**

**Data durability**

PSL5

99.99999999% (ten 9s)

PSL4

99.9999999% (nine 9s)

## Performance

### Storage capacity and bandwidth

For the same compute node specifications, PSL4 and PSL5 have the same maximum storage capacity and I/O bandwidth limit. However, their input/output operations per second (IOPS) limits are different. For more information, see [Enterprise Edition compute node specifications](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes) and [Standard Edition compute node specifications](/help/en/polardb/polardb-for-mysql/specifications-of-compute-nodes-3).

### Performance comparison

A test was run on a Dedicated cluster with 8 cores and 64 GB of memory. The backend storage options tested were Enterprise Edition PSL5, Enterprise Edition PSL4, and Standard Edition PL1 disks. The test measured the maximum queries per second (QPS) for several scenarios in the IOBOUND payload pattern. The data volume was approximately 800 GB to 1 TB. The following figure shows the test results.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1036723371/p873125.png)

## Upgrade the storage class

If PSL4 storage no longer meets your business requirements, you can manually upgrade it to PSL5 storage in the PolarDB console.

### Prerequisites

Your PolarDB for MySQL cluster must meet the following requirements:

-   Billing method: Subscription and pay-as-you-go
    
    **Note**
    
    Serverless clusters do not support storage class upgrades.
    
-   Edition: Enterprise Edition
    
-   Product series: Cluster Edition
    
-   Storage class: PSL4
    

### Procedure

**Important**

-   After you upgrade the storage class, the related fees are calculated based on the billing method for the cluster's storage. For more information, see [Billing of configuration changes](/help/en/polardb/polardb-for-mysql/change-configuration).
    
-   The storage class cannot be downgraded from PSL5 to PSL4. Carefully evaluate your requirements before you perform the upgrade.
    

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Cluster List**. Select the region of the target cluster and click its ID to open the **Cluster Details** page.
    
2.  On the **Cluster Details** page, in the **Database Distributed Storage** section, click **Upgrade Storage Class**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1331587471/p957910.png)
