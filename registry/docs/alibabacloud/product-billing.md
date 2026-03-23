This topic describes the billing methods and billable items of PolarDB.

## **Billing method**

### Subscription

-   Definition: This billing method lets you use resources of your choosing for a specified period of time on an upfront payment.
    
-   Scenarios: You want to use a cluster for a long period of time. Longer subscription periods offer more savings.
    
-   Billing method change: You can change the billing method of a cluster from subscription to pay-as-you-go. For more information, see [Switch compute billing method from subscription to pay-as-you-go](/help/en/polardb/polardb-for-mysql/change-the-billing-method-from-subscription-to-pay-as-you-go), [Switch the compute billing method from subscription to pay-as-you-go](/help/en/polardb/polardb-for-postgresql/change-the-billing-method-from-subscription-to-pay-as-you-go), and [Change the billing method from subscription to pay-as-you-go](/help/en/polardb/polardb-for-postgresql/change-the-billing-method-from-subscription-to-pay-as-you-go).
    
-   Specification changes: The price for a subscription cluster before and after a specification change may be different. You may need to pay the price difference or receive a refund. For more information, see [Specification changes](/help/en/polardb/change-configuration).
    
-   Renewal: You need to renew an expired subscription cluster within a specific period of time if you want to continue using it. After this period of time, cluster resources such as CPU cores, memory, and disks are released. For more information, see [Renewal](/help/en/polardb/renewal-description).
    

**Note**

PolarDB-X does not support configuration upgrade or downgrade during renewal.

### Pay-as-you-go

-   Definition: You are not charged when you create a cluster by using this billing method. After the cluster is created and started, Alibaba Cloud automatically deducts the relevant fees from the account on an hourly basis based on the resource consumption and usage of the instance.
    
-   Scenarios: You want to use a cluster for less than one month and release the instance after it is no longer used.
    
-   Billing method change: You can change the billing method of a cluster from pay-as-you-go to subscription. For more information, see [Switch the compute billing method from pay-as-you-go to subscription](/help/en/polardb/polardb-for-mysql/change-the-billing-method-of-a-cluster-from-pay-as-you-go-to-subscription), [Change the billing method of a cluster from pay-as-you-go to subscription](/help/en/polardb/polardb-for-postgresql/change-the-billing-method-from-pay-as-you-go-to-subscription), and [Change the billing method of a cluster from pay-as-you-go to subscription](/help/en/polardb/polardb-for-oracle/change-the-billing-method-from-pay-as-you-go-to-subscription).
    
-   Specification changes: Pay-as-you-go clusters are billed on an hourly basis. After the specifications of a pay-as-you-go cluster are changed, the cluster is billed based on the new specifications. For more information, see [Specification changes](/help/en/polardb/change-configuration).
    
-   Overdue payments: If your Alibaba Cloud account has overdue payments, all clusters that belong to the account and do not use the subscription billing method become overdue. For more information, see [Overdue payments](/help/en/polardb/description-of-arrears).
    

### Serverless

-   Definition: The Serverless billing method allows a cluster to be billed based on the actual amount of resources used each hour, which is cost-effective. For more information, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview).
    
-   Scenarios: You have intermittent or unpredictable workloads.
    
-   Specification changes: The specifications of a serverless cluster cannot be manually changed. The system automatically scales the PCUs to suit your workloads.
    
-   Overdue payments: If your Alibaba Cloud account has overdue payments, all clusters that belong to the account and do not use the subscription billing method become overdue. For more information, see [Overdue payments](/help/en/polardb/description-of-arrears).
    

## **Billable items**

The basic fee of a PolarDB cluster consists of the fee for computing resources and the fee for storage resources.

**Billable item**

**Description**

**Billing method**

Compute nodes

-   Compute nodes include primary and read-only nodes.
    
-   You are charged for compute nodes based on the region, specifications, and usage duration.
    

-   Subscription
    
-   Pay-as-you-go
    

PCU

PCU stands for PolarDB Capacity Unit. One PCU is approximately equal to the capacity of 1 core and 2 GB of memory. In a PolarDB serverless cluster, resources are scaled based on PCUs. The minimum scaling step is 0.5 PCUs.

Serverless

Storage space

-   Storage space is used to store cluster data files, index files, log files, and temporary files. Log files include online and archived logs. You are charged for the storage space that your cluster uses.
    
-   The fee varies based on the volume of stored data and the retention period of data.
    

-   Subscription
    
-   Pay-as-you-go
    
-   Pay-as-you-go + storage plans
    

Backup storage space (charged only when the free quota is exceeded)

-   Backup files consume storage space. PolarDB provides a free storage quota for backup files. If the actual storage usage exceeds the quota, you are charged for the excess storage consumed by backup files.
    
-   The fee varies based on the size of the data backup files and the retention period of the files.
    

-   Pay-as-you-go
    

**Note**

In addition to the preceding types of billable items, PolarDB also provides value-added options. For more information, see [the billable items of each edition](#2018702a2664f).

### **References**

-   [PolarDB for MySQL Enterprise Edition billable items](/help/en/polardb/polardb-for-mysql/enterprise-billing-item-overview)
    
-   [PolarDB-X billable items](/help/en/polardb/polardb-for-xscale/billing-item)
    
-   [PolarDB for PostgreSQL Enterprise Edition billable items](/help/en/polardb/polardb-for-postgresql/billable-items-3)
    
-   [PolarDB for PostgreSQL (Compatible with Oracle) billable items](/help/en/polardb/polardb-for-oracle/billable-items)
    

## Billing details

For more information about how to view the billing details of each cluster, see [Query bills](/help/en/polardb/query-bill).

## Payment and refund

You can use one of the following payment methods to purchase a PolarDB cluster:

-   Balance in your Alibaba Cloud account
    
-   Online payment
    
    You cannot use credit cards to pay for subscription clusters that are created by calling the [CreateDBInstance](/help/en/polardb/api-createdbinstance-1) operation.
    
-   Vouchers
    
    Make sure that your voucher is in the **Available** state and the order type is **General**. You can log on to the [Alibaba Cloud User Center](https://usercenter2-intl.console.alibabacloud.com/), and choose **All Menus** **\>** **Cards/Coupons** **\>** **Vouchers**.
    

**Note**

-   Vouchers are used to offset resource usage fees before bills are generated. If the Vouchers that you use can cover the fees, the system does not deduct the amount from your account balance.
    
-   After you purchase a PolarDB cluster, you can view the resource usage and bills. For more information, see [Query bills](/help/en/polardb/query-bill).
