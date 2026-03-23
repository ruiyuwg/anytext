This topic describes the billable items for PolarDB clusters.

The following figure shows the approximate fee proportion for each billable item of a PolarDB cluster.

![Proportion](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4611572161/p182065.png)

Table 1. Billable items

**Billable item**

**Description**

**Supported billing methods**

Compute nodes

-   Compute nodes include primary and read-only nodes.
    
-   The fees for compute nodes vary based on the region, node specifications, and usage duration.
    

-   Pay-as-you-go
    
-   Subscription
    

**Note**

-   For more information about purchasing compute nodes, see [Overview of purchase methods](/help/en/polardb/polardb-for-oracle/overview-69#concept-2035282).
    
-   For information about compute node specifications and their billing rules, see [Compute node specifications](/help/en/polardb/polardb-for-oracle/specifications-of-compute-nodes-2#concept-2035312) and [Compute node billing rules](/help/en/polardb/polardb-for-postgresql/billing-rules-of-pay-as-you-go-compute-nodes#concept-2035314).
    

Storage space

-   Storage space is used to store data files, index files, log files (online and archived logs), and temporary files. You are charged for the storage space that you use.
    
-   The fees for storage space vary based on the data volume and storage duration.
    

-   Pay-as-you-go
    

**Note**

-   For information about storage billing rules, see [Overview](/help/en/polardb/polardb-for-oracle/overview-73#concept-2035316).
    

Backup storage space (charged only when the free quota is exceeded)

-   PolarDB provides a free quota for backup storage. You are charged for any usage that exceeds this quota.
    
-   The fees for backup storage vary based on the storage capacity and retention period.
    

-   Pay-as-you-go
    

**Note**

-   The subscription billing method is not available for backup storage space. If you purchase a subscription cluster, the subscription applies only to compute nodes. You may still be charged for other items, such as backup storage space.
    
-   For information about the billing rules for data backups, see [Pay-as-you-go rules](/help/en/polardb/polardb-for-oracle/billing-rules-of-backup-storage-that-exceeds-the-free-quota#section-8fg-lci-gya).
    

SQL Explorer (optional)

-   SQL Explorer is a value-added service that provides features such as security audit and performance diagnostics. If you enable this feature, you are charged for the storage of its audit logs.
    
-   The fees for SQL Explorer vary based on the storage capacity and retention period of audit logs.
    

-   Pay-as-you-go
    

**Note**

-   The subscription billing method is not available for SQL Explorer. If you purchase a subscription cluster, the subscription applies only to compute nodes. You may still be charged for other items, such as fees for SQL Explorer.
    
-   For information about the billing rules for SQL Explorer, see [SQL Explorer billing rules (optional)](/help/en/polardb/polardb-for-oracle/pricing-of-sql-explorer-optional#concept-2035318).
