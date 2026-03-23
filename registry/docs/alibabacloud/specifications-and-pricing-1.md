This topic describes the specifications and pricing of , including billing methods, billing items, and the pricing of compute nodes, storage space, data backups, and SQL Explorer.

## Billing methods

PolarDB supports the following billing methods:

-   Subscription
    
    If you use the subscription billing method, you must pay for a compute cluster when you create the cluster. The compute cluster consists of one primary node and one read-only node. You are charged for the consumed storage space by hour. The charges are deducted from your account balance on an hourly basis.
    
-   Pay-as-you-go
    
    If you use the pay-as-you-go billing method, you pay for the resources after you use them. You are charged for the compute clusters and the consumed storage space by hour. The charges are deducted from your account balance on an hourly basis.
    

## Billing items

The following table describes the billing items of PolarDB clusters.

**Billing item**

**Description**

[Compute cluster that has a primary node and one or more read-only nodes](#section-srd-t3m-rj2)

**Subscription** or **pay-as-you-go**.

[Storage space](#section-m0p-xpk-gya)

-   **Pay-as-you-go**.
-   You can also purchase **storage packages** by using the subscription billing method. For more information, see [Purchase a storage plan](/help/en/polardb/polardb-for-postgresql/purchase-a-storage-plan-1#task-1580301).

[SQL Explorer](#section-0y0-zdr-j0z)

After you enable SQL Explorer, the billing method is specified as **pay-as-you-go**. For more information, see [️SQL Explorer](/help/en/polardb/polardb-for-postgresql/sql-explorer-1#task-2311142).

[Back up data](/help/en/polardb/polardb-for-postgresql/overview-backup-and-restoration#concept-2203108)

In PolarDB, the backup feature is available for free. You are charged for only the storage of backup files. For more information, see [Overview](/help/en/polardb/polardb-for-postgresql/overview-backup-and-restoration#concept-2203108).

## Compute node pricing

All the nodes in PolarDB clusters are dedicated nodes. The CPU, memory, storage, and I/O resources allocated to a node are dedicated to this node. This improves the stability and reliability of the node. The following table describes the node specifications that are available in PolarDB.

Table 1. node specifications

**Node type**

**CPU and memory**

**Maximum storage capacity**

**Maximum number of connections**

**Internal bandwidth**

**Maximum number of IOPS**

**I/O bandwidth**

polar.pg.x4.medium

2 cores

8 GB

5 TB

400

1 Gbps

16,000

1 Gbps

polar.pg.x4.large

4 cores

16 GB

10 TB

800

10 Gbps

64,000

4 Gbps

polar.pg.x4.xlarge

8 cores

32 GB

10 TB

1,600

10 Gbps

128,000

8 Gbps

polar.pg.x8.xlarge

8 cores

64 GB

30 TB

3,200

10 Gbps

160,000

10 Gbps

polar.pg.x8.2xlarge

16 cores

128 GB

50 TB

6,400

10 Gbps

256,000

16 Gbps

polar.pg.x8.4xlarge

32 cores

256 GB

50 TB

12,800

10 Gbps

384,000

24 Gbps

polar.o.x8.8xlarge

64 cores

512 GB

100 TB

25,600

10 Gbps

409,600

24 Gbps

polar.pg.x8.12xlarge

88 cores

710 GB

100 TB

36,000

25 Gbps

512,000

32 Gbps

**Note**

-   A cluster that has 2 CPU cores and 8 GB memory provides the basic specifications that are required in tests, trials, and other light load scenarios. We recommend that you do not use the clusters of this type in heavy-load production environments. In production environments, we recommend that you use a cluster that has 8 CPU cores and 32 GB memory or higher specifications.
-   If you have higher storage requirements, you can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact after-sales services to increase the maximum storage capacity to 100 TB.

**Note**

-   The preceding table lists the prices of a single node. By default, a PolarDB cluster consists of a primary node and a read-only node.
-   You can select a node type for the primary node when you create a cluster. The same type will be automatically applied to read-only nodes.
-   The maximum number of input/output operations per second (IOPS) is a theoretical value.
-   The maximum number of connections for a cluster varies based on the node specifications of the cluster. If you add nodes to a cluster, the number of connections for the cluster does not change.
-   If you require higher computing performance and larger storage space, for example, 100 TB,you can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact after-sales services.

## Storage space pricing

Storage space refers to the space that is occupied by data files, index files, log files, and temporary files. Log files are divided into online logs and archived logs.

**Note** After you purchase a PolarDB cluster, the system automatically generates the files that are required for regular database operations. The files include the preceding files and occupy some storage space.

**Pay-as-you-go**

Storage resources are provisioned in a serverless architecture. Therefore, you do not need to specify the storage capacity when you create clusters. The storage capacity of the clusters is automatically increased when the amount of data increases. You are charged for only the storage space that you use. On the **Overview** page in the PolarDB console, you can view the storage space that you use.

-   Chinese mainland: USD 0.00077/GB/hour
-   China (Hong Kong) and regions outside China: USD 0.00085/GB/hour

**Note** The maximum storage capacity varies based on cluster specifications. If you use 90% of the maximum storage capacity, the system sends SMS messages and emails to you on a daily basis. If you need to increase the maximum storage capacity, upgrade your cluster specifications. For more information, see [Change specifications](/help/en/polardb/polardb-for-postgresql/change-specifications#task-1580301).

**Subscription**

If the data size is large, we recommend that you purchase [storage packages](/help/en/polardb/polardb-for-mysql/purchase-a-storage-plan#concept-1375373). Compared with the pay-as-you-go billing method, subscription-based storage packages offer additional discounts. Higher discounts are provided for larger storage packages. To purchase a storage package, click [Purchase a storage package](https://common-buy-intl.alibabacloud.com/?spm=a2c4g.11186623.2.16.57703d6e3905Rw&commodityCode=polardb_package#/buy).

## Data backup pricing

The backup and restoration features of PolarDB are free. Only storage fees are charged. In PolarDB, the storage fees are calculated based on the storage space that is occupied by the backup files of data and logs and the retention periods of these backup files.

**Backup type**

**Free quota**

**Billing method**

Level-1 backups

Used database storage space × 50%

You can view the used database storage space of a cluster on the **Overview** page of the cluster in the PolarDB console.

Storage fee per hour = (Total physical storage of level-1 backups - Free quota) × Unit price per hour

-   You can use level-1 backups for free within the free quota.
-   Figure 1 shows the **total physical storage of level-1 backups**.![Total physical storage of level-1 backups](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6123538761/p103440.png)

For example, if the total physical storage of level-1 backups is 700 GB and the used database storage space is 1,000 GB, the storage fee per hour is USD 0.0928.

The fee is calculated based on the following formula: \[700 GB - (1,000 GB × 50%)\] × USD 0.000464 = USD 0.0928.

Level-2 backups

None

Storage fee per hour = Total physical storage of level-2 backups × Unit price per hour

For example, if the total physical storage of level-2 backups is 1,000 GB, the storage fee per hour is USD 0.0325.

The fee is calculated based on the following formula: 1,000 GB × USD 0.0000325 = USD 0.0325.

Log backup

100 GB

Storage fee per hour = (Total physical storage of log backups - 100 GB) × Unit price per hour

For example, if the total physical storage of log backups is 1,000 GB, the storage fee per hour is USD 0.02925.

The fee is calculated based on the following formula: (1,000 GB - 100 GB) × USD 0.0000325 = USD 0.02925.

## SQL Explorer pricing

You are charged for SQL Explorer based on the storage space that is consumed by audit logs.

-   Chinese mainland: USD 0.0013/GB/hour
-   China (Hong Kong) and regions outside China: USD 0.0019/GB/hour

**Note** The storage space that is consumed by audit logs is billed on only a pay-as-you-go basis.

## FAQ

-   What is the price if I add a read-only node?
    
    The price of a read-only node is the same as that of the primary node. For more information, see [Compute node pricing](#section-srd-t3m-rj2).
    
-   Is the storage capacity doubled after I add a read-only node?
    
    No, the storage capacity is not doubled after you add a read-only node. PolarDB uses an architecture where computing is decoupled from storage. The read-only nodes that you purchase are used for computing. If you add read-only nodes to your cluster, the storage capacity of the cluster does not change.
    
    Storage resources are provisioned in a serverless architecture. Therefore, you do not need to specify the storage capacity when you create clusters. The storage capacity of the clusters is automatically increased when the amount of data increases. You are charged for only the storage space that you use. The maximum storage capacity for each cluster varies based on the cluster specifications. If you need to increase the maximum storage capacity, upgrade your cluster specifications. For more information, see [Change the specifications of a cluster](/help/en/polardb/polardb-for-postgresql/change-specifications#task-1580301).
