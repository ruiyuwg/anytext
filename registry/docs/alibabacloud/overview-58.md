PolarDB offers three billing methods: subscription, pay-as-you-go, and [serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview). These methods are designed to meet your needs in different scenarios.

## **Scenarios**

**Billing method**

**Scenario**

Subscription

-   Predictable resource usage duration.
    
-   Heavy workloads that have infrequent and small fluctuations.
    

Pay-as-you-go

-   Unpredictable resource usage duration.
    
-   Temporary, sudden, and unpredictable workloads.
    
-   Light workloads that have infrequent and small fluctuations.
    

Serverless

-   Individual developers.
    
-   Limited use of databases in scenarios such as development and staging environments.
    
-   Inconsistent and unpredictable workloads in scenarios such as the Internet of Things (IoT) and edge computing.
    
-   Fluctuating and unpredictable workloads or business scenarios.
    

## **Comparison analysis**

**Category**

**Subscription**

**Pay-as-you-go**

**Serverless**

Payment type

Subscription (upfront)

**Note**

Some billable items support only the pay-as-you-go billing method. For more information, see [Billable items](/help/en/polardb/polardb-for-mysql/billing-item/).

Pay-as-you-go (post-paid)

Pay-as-you-go (post-paid)

Compute node resource type

Defined specifications

Defined specifications

Dynamic resources

Billing cycle

Billed based on the **Duration** that you select.

Charged per second and billed on an hourly basis.

Charged per second and billed on an hourly basis.

Switching of the billing method

Can be switched to the pay-as-you-go (post-paid) billing method.

**Note**

The transform rules vary based on the Edition. For more information, see [Switch billing methods](/help/en/polardb/polardb-for-mysql/conversion-payment-type).

Can be switched to the subscription (upfront) billing method.

**Note**

The transform rules vary based on the Edition. For more information, see [Switch billing methods](/help/en/polardb/polardb-for-mysql/conversion-payment-type).

Not supported

## **Change configurations**

When you change the configuration of a cluster, the system calculates the fees based on the cluster's billing method and the changes. For more information, see [Change configurations](/help/en/polardb/polardb-for-mysql/change-configuration).

**Billing method**

**Billing details**

Subscription

When you change the configuration, the system calculates fees based on the changes.

-   If you upgrade or add nodes, the system calculates the additional fees.
    
-   If you downgrade or delete nodes, the system calculates the refund.
    

Pay-as-you-go

After you change the configuration, you are charged hourly based on the price of the new configuration.

Serverless

Configuration changes are not supported. Compute node resources are automatically adjusted based on the service payload.

## **Expiration or overdue payments**

Service interruptions may occur if a cluster subscription expires or a payment is overdue. The system sends a notification for these events. To prevent service interruptions, you must immediately add funds to your Alibaba Cloud account or renew the cluster. For more information, see [Expiration and overdue payments](/help/en/polardb/polardb-for-mysql/description-of-due-or-arrears).

## **Bills**

The commodity codes for each billing type are as follows:

-   Subscription: polardb\_sub\_intl
    
-   Pay-as-you-go: polardb\_payg\_intl
    
-   Serverless: polardb\_serverless\_public\_intl
    

For more information about how to view bills, see [Bills](/help/en/polardb/polardb-for-mysql/expense-bill).

## **FAQ**

### **Why do I still receive bills after I purchase a** subscription **cluster?**

This may be because of one of the following reasons:

-   The **Storage Payment Method** is set to **Pay-as-you-go**.
    
-   Your backup storage usage exceeds the free quota. For more information, see [Backup storage (beyond the free quota)](/help/en/polardb/polardb-for-mysql/backup-storage-beyond-free-quota).
    
-   You are using [SQL Explorer](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit) or [cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/cold-data-archiving/).
    

These items are billed on a pay-as-you-go basis. The fees are calculated based on your actual storage usage and retention period. You can view the details on the [Bills](/help/en/polardb/polardb-for-mysql/expense-bill) page.

### **Why do I still receive bills after I release or unsubscribe from my cluster?**

If you still receive bills after you release or unsubscribe from a PolarDB cluster, it may be for one of the following reasons:

-   The PolarDB cluster has pay-as-you-go items, and the bills for these items are delayed. Therefore, you may still receive bills after you release or unsubscribe from the PolarDB cluster.
    
    -   A subscription cluster can include pay-as-you-go billable items. For example, if the **Storage Payment Method** is set to **Pay-as-you-go**, the bills for storage are delayed.
        
    -   The bills for pay-as-you-go clusters are delayed.
        
        **Note**
        
        You can view the pay-as-you-go bills for your cluster in the PolarDB console. For more information, see [Bills](/help/en/polardb/polardb-for-mysql/expense-bill).
        
-   If your **backup policy** is set to **When the cluster is released, the cluster data is automatically backed up, and the latest backup set is retained for a long period of time.**, you will incur backup storage costs when you release a PolarDB cluster. You can delete these backup sets from the [cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/cluster-recycle-bin/) to avoid these costs. For more information, see [Permanently delete a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster).
    

### How is a serverless cluster billed?

A serverless cluster is billed per second based on the average number of PolarDB Capacity Units (PCUs) that are used. For more information, see [Billing rules for serverless compute nodes](/help/en/polardb/polardb-for-mysql/compute-nodes#9a511f773a97a).

### How do I migrate a non-serverless cluster (subscription or pay-as-you-go) to a serverless cluster?

You can migrate a non-serverless cluster to a serverless cluster using Data Transmission Service (DTS). For more information, see [Migrate data between PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-between-polardb-for-mysql-clusters).

### Can I upgrade a non-serverless cluster (subscription or pay-as-you-go) to a serverless cluster?

You can enable the serverless feature on a non-serverless cluster (subscription or pay-as-you-go). For more information, see [Serverless feature for clusters with defined specifications](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters).
