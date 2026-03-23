This topic provides an overview of the billing methods and billable items of ApsaraDB RDS.

## Billing rules

### Subscription

-   Definition: This billing method lets you use resources of your choosing for a specified period of time on an upfront payment. Longer subscription periods offer more savings.
    
-   Scenarios: You have long-running, predictable workloads.
    
-   Billing method change: You can change the billing method of an RDS instance from subscription to pay-as-you-go. For more information, see [Change the billing method of an ApsaraDB RDS for MySQL instance from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-subscription-to-pay-as-you-go#task-2441126).
    
-   Specification changes: The price for a subscription RDS instance before and after a specification change may be different. You may need to pay the price difference or receive a refund. For more information, see [Specification changes](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).
    
-   Renewal: You need to renew an expired subscription RDS instance within a specific period of time if you want to continue using it. After this period of time, instance resources such as CPU cores, memory, and disks are released, and the data stored in the RDS instance is deleted. For more information, see [Renewal policy](/help/en/rds/product-overview/renewal-policy#concept-hql-dl2-vdb).
    

### Pay-as-you-go

-   Definition: This billing method allows you to use resources before you pay for them. After you create a pay-as-you-go RDS instance, fees for the instance are calculated based on the resources that you use and are automatically deducted from the balance of your Alibaba Cloud account every hour.
    
-   Scenarios: You have short-term workloads. If you no longer require a pay-as-you-go RDS instance, you can release the instance to reduce costs.
    
-   Billing method change: You can change the billing method of an RDS instance from pay-as-you-go to subscription. For more information, see [Change the billing method of an ApsaraDB RDS for MySQL instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-pay-as-you-go-to-subscription).
    
-   Specification changes: Pay-as-you-go RDS instances are billed on an hourly basis. If you change the specifications of a pay-as-you-go RDS instance, you are billed based on the price of the new specifications. For more information, see [Specification changes](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).
    
-   If your Alibaba Cloud account has overdue payments, RDS instances that do not use the subscription billing method and belong to your Alibaba Cloud account become overdue. For more information, see [Overdue payments](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb).
    

### Serverless

-   Definition: A serverless RDS instance is not billed based on instance types, but based on the actual amount of resources used each hour. Resources are measured in RDS Capacity Units (RCUs). For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless#concept-2187141).
    
-   Scenarios: You have intermittent or unpredictable workloads.
    
-   Billing method change: You cannot change the billing method of a serverless RDS instance.
    
-   Specification changes: The specifications of a serverless RDS instance cannot be manually changed. During the use of the instance, the system automatically scales the RCUs to suit your workloads.
    
-   If your Alibaba Cloud account has overdue payments, RDS instances that do not use the subscription billing method and belong to your Alibaba Cloud account become overdue. For more information, see [Overdue payments](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb).
    

## Basic billable items

The basic fee of an RDS instance consists of the fee for computing resources and the fee for storage resources.

**Billing of computing resources**

**Billable item**

**Description**

**Billing method**

Instance type

You are charged based on the instance type. The instance type determines the number of CPU cores and the size of memory that are provisioned.

-   Subscription
    
-   Pay-as-you-go
    

RCU

RCUs are the computing resources of serverless RDS instances. The performance of an RCU is equivalent to that of an RDS instance that runs RDS Basic Edition and has 2 GB of memory.

Serverless

**Billing of storage resources**

**Billable item**

**Description**

**Billing method**

Storage capacity

You are charged for the storage capacity that you purchase for the primary, secondary, read-only, and disaster recovery RDS instances in your database system. The price varies based on the storage type that you select. For more information, visit the [ApsaraDB RDS buy page](https://rdsbuy.console.alibabacloud.com/newCreate/rds/mysql).

-   Subscription
    
-   Pay-as-you-go
    

I/O burst

Only general Enterprise SSDs (ESSDs) support the I/O burst feature. After this feature is enabled, you are charged based on the burstable I/O operations. For more information, see [General ESSDs of ApsaraDB RDS for MySQL](/help/en/doc-detail/2545946.html).

Pay-as-you-go

Data archiving

Only general ESSDs support the data archiving feature. After this feature is enabled, you are charged based on the amount of data archived to the Object Storage Service (OSS) buckets. For more information, see [General ESSDs of ApsaraDB RDS for MySQL](/help/en/doc-detail/2545946.html).

Pay-as-you-go

**Note**

-   In addition to the preceding types of billable items, ApsaraDB RDS also provides value-added options. For more information, visit the [ApsaraDB RDS pricing page](https://rdsbuy.console.alibabacloud.com/pricing) or see [Billable items](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing#concept-qxr-pd2-vdb).
    
-   If you set the Billing Method parameter to Subscription, you must configure the Subscription Duration parameter. Longer subscription durations provide more savings.
    
-   Price inquiry: Go to the [ApsaraDB RDS buy page](https://rdsbuy.console.alibabacloud.com/newCreate/rds/mysql). Configure the basic parameters (such as Billing Method, Region, Database Engine, Edition, Architecture, Storage Type, Zone, Deployment Method, Instance Type, and Storage Capacity) and then check the price and applied discounts in the lower-right corner of the page.
    

## Billing details

If you want to view the billing details of an RDS instance, follow the instructions provided in [View your bills](/help/en/rds/product-overview/view-bills#concept-jkm-xl2-vdb). The details describe the costs categorized by different billable items, such as instance type, performance monitoring, and SQL audit.
