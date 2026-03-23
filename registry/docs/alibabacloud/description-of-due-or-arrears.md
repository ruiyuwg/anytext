When a PolarDB cluster expires or a payment becomes overdue, you can renew the cluster or recharge your account to unlock the cluster. The solution varies based on the billing method of the cluster.

**Warning**

Service interruptions may occur when your cluster expires or a payment becomes overdue. The system notifies you of these issues at the earliest opportunity. When you receive the notifications, we recommend that you immediately recharge your account or renew the cluster to prevent service interruptions.

## Suggestions

-   To avoid impact on your business, we recommend that you [manually renew](/help/en/polardb/polardb-for-mysql/renewal-description#41fd1c37416gz) your subscription cluster before it expires, or enable [auto-renewal](/help/en/polardb/polardb-for-mysql/renewal-description#0b90a73bc0vjh).
    
-   Make sure that your account has sufficient balance.
    

## Solutions

## Subscription clusters

**Time**

**Cluster status**

**Billing details**

**How to restore the cluster**

From the first day to the 15th day after the cluster expires

The cluster runs normally.

-   [Compute nodes](/help/en/polardb/polardb-for-mysql/compute-nodes): free of charge. The renewal starts from the expiration date.
    
-   [Storage space](/help/en/polardb/polardb-for-mysql/storage-space):
    
    -   If your storage uses the subscription billing method, you are not charged. The renewal starts from the expiration date.
        
        **Note**
        
        If the purchased storage capacity is exhausted during this period and a storage scale-up is triggered, you are charged for the corresponding storage space.
        
    -   If your storage uses the pay-as-you-go billing method, you are charged based on the corresponding billing rules.
        
-   [Backup storage beyond the free quota](/help/en/polardb/polardb-for-mysql/backup-storage-beyond-free-quota): If the backup storage of the cluster exceeds the free quota, you are charged based on the corresponding billing rules. Otherwise, you are not charged.
    
-   [SQL Explorer](/help/en/polardb/polardb-for-mysql/sql-insight-optional) and [cold data archiving](/help/en/polardb/polardb-for-mysql/cold-data-archiving-optional): If these features are enabled for your cluster, you are charged based on the corresponding billing rules. Otherwise, you are not charged.
    

You can [manually renew](/help/en/polardb/polardb-for-mysql/renewal-description#41fd1c37416gz) the cluster to prevent it from stopping and being locked.

From the 16th day to the 30th day after the cluster expires

The cluster is locked and becomes unavailable.

-   [Compute nodes](/help/en/polardb/polardb-for-mysql/compute-nodes), [storage space](/help/en/polardb/polardb-for-mysql/storage-space), and [SQL Explorer](/help/en/polardb/polardb-for-mysql/sql-insight-optional): free of charge.
    
-   [Backup storage beyond the free quota](/help/en/polardb/polardb-for-mysql/backup-storage-beyond-free-quota): If the backup storage of the cluster exceeds the free quota, you are charged based on the corresponding billing rules. Otherwise, you are not charged.
    
-   [Cold data archiving](/help/en/polardb/polardb-for-mysql/cold-data-archiving-optional): If this feature is enabled for your cluster, you are charged based on the corresponding billing rules. Otherwise, you are not charged.
    

If the cluster is locked, you can [manually renew](/help/en/polardb/polardb-for-mysql/renewal-description#41fd1c37416gz) the cluster. After that, the cluster is unlocked and runs as expected.

On the 31st day after the cluster expires

The cluster is released.

The following data retention policies apply after the cluster is released:

-   If the [backup retention policy](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#title-rvc-zg3-j9b) of your cluster is **When the cluster is released, the cluster data is automatically backed up, and the latest backup set is retained for a long period of time** or **When the cluster is released, the cluster data is automatically backed up, and all backup sets of the cluster are retained for a long period of time**, the cluster data is retained and moved to the [cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/pricing-2#concept-2065856) when the cluster is released. You are charged for the data storage.
    
-   If the [backup retention policy](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#title-rvc-zg3-j9b) of your cluster is **When the cluster is released, all backup sets of the cluster are deleted immediately**, no data of the cluster is retained when the cluster is released. The data cannot be restored. You are not charged additional fees.
    

If the cluster is moved to the [cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/pricing-2#concept-2065856) after being released, you can [restore the released cluster](/help/en/polardb/polardb-for-mysql/user-guide/restore-a-released-cluster#task-2065860) by using a backup set in the cluster recycle bin.

## Pay-as-you-go and serverless clusters

If your Alibaba Cloud account has overdue payments, all pay-as-you-go clusters and serverless clusters that belong to your Alibaba Cloud account become overdue.

**Time**

**Cluster status**

**Billing details**

**How to restore the cluster**

From the first day to the 15th day after the cluster becomes overdue

The cluster runs normally.

The cluster is billed normally based on the billing rules of [billable items](/help/en/polardb/polardb-for-mysql/billing-item/).

You can [add funds](https://usercenter2-intl.console.alibabacloud.com/finance/fund-management/recharge) to your Alibaba Cloud account to prevent the cluster from being shut down and locked.

From the 16th day to the 30th day after the cluster becomes overdue

The cluster is locked and becomes unavailable.

-   [Compute nodes](/help/en/polardb/polardb-for-mysql/compute-nodes), [storage space](/help/en/polardb/polardb-for-mysql/storage-space), and [SQL Explorer](/help/en/polardb/polardb-for-mysql/sql-insight-optional): free of charge.
    
-   [Backup storage beyond the free quota](/help/en/polardb/polardb-for-mysql/backup-storage-beyond-free-quota): If the backup storage of the cluster exceeds the free quota, you are charged based on the corresponding billing rules. Otherwise, you are not charged.
    
-   [Cold data archiving](/help/en/polardb/polardb-for-mysql/cold-data-archiving-optional): If this feature is enabled for your cluster, you are charged based on the corresponding billing rules. Otherwise, you are not charged.
    

You can [add funds](https://usercenter2-intl.console.alibabacloud.com/finance/fund-management/recharge) to your Alibaba Cloud account. After you add funds to your account, the cluster is unlocked and returns to normal.

**Note**

Before you add funds, check the [payment methods](https://billingnew.console.alibabacloud.com/#/account/overview) of your Alibaba Cloud account.

On the 31st day after the cluster becomes overdue

The cluster is released.

The following data retention policies apply after the cluster is released:

-   If the [backup retention policy](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#title-rvc-zg3-j9b) of your cluster is **When the cluster is released, the cluster data is automatically backed up, and the latest backup set is retained for a long period of time** or **When the cluster is released, the cluster data is automatically backed up, and all backup sets of the cluster are retained for a long period of time**, the cluster data is retained and moved to the [cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/pricing-2#concept-2065856) when the cluster is released. You are charged for the data storage.
    
-   If the [backup retention policy](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#title-rvc-zg3-j9b) of your cluster is **When the cluster is released, all backup sets of the cluster are deleted immediately**, no data of the cluster is retained when the cluster is released. The data cannot be restored. You are not charged additional fees.
    

If the cluster is moved to the [cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/pricing-2#concept-2065856) after being released, you can [restore the released cluster](/help/en/polardb/polardb-for-mysql/user-guide/restore-a-released-cluster#task-2065860) by using a backup set in the cluster recycle bin.

## **FAQ**

### **Will a** **subscription** **cluster incur fees after it expires?**

Fees may be incurred. The fees depend on the storage payment type and usage, backup storage usage, value-added feature usage, and the backup policy of the cluster. For more information, see [Subscription clusters](#e66c927a31uby).

If you no longer need a subscription cluster, we recommend that you release the related resources to avoid additional fees.

### Why do I still receive bills after I release or unsubscribe from my cluster**?**

This issue may be caused by one of the following reasons:

-   The PolarDB cluster has pay-as-you-go billable items for which billing is delayed. As a result, bills are still generated even after you release or unsubscribe from the PolarDB cluster.
    
    -   Subscription clusters have pay-as-you-go billable items. For example, if the **storage billing method** of a subscription cluster is **pay-as-you-go**, the generated storage bills are delayed.
        
    -   The bills generated for pay-as-you-go clusters are delayed.
        
        **Note**
        
        You can view the generated **pay-as-you-go** bills of your cluster in the PolarDB console. For more information, see [View your bills](/help/en/polardb/polardb-for-mysql/expense-bill).
        
-   If you set the **backup policy** to **When the cluster is released, the cluster data is automatically backed up, and the latest backup set is retained for a long period of time**, fees are generated for backups that are retained for a long period of time even after you release for unsubscribe from the cluster. To avoid the preceding costs, delete the backup sets from the [recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/cluster-recycle-bin/). For more information, see [Delete a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster).
    

### The storage space is not used up but **the cluster is locked. Why?**

If your cluster uses the ESSD storage type, after the storage space of an ESSD is exhausted (3 GB of storage space is reserved to avoid data loss due to insufficient storage space), the disk is locked. In this case, the disk handles only read operations. You can [configure automatic storage scaling for ESSDs](/help/en/polardb/polardb-for-mysql/user-guide/auto-expand-essd-storage) or [manually scale up storage capacity](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1).

For more frequently asked questions, see [FAQ](/help/en/polardb/polardb-for-mysql/calculation-package/).
