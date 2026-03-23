This topic describes how to create an ApsaraDB for MongoDB instance, connect to the instance, and read data from the instance or write data to the instance.

## **Deployment architectures**

ApsaraDB for MongoDB supports flexible deployment architectures to meet various business requirements.

**Architecture**

**Description**

**Scenarios**

[Standalone architecture](/help/en/mongodb/product-overview/standalone-instances)

A standalone instance provides only one StandAlone node that is used to read and write data.

Suitable for development, testing, training, learning, and scenarios where non-core enterprise data is stored.

[Replica set architecture](/help/en/mongodb/product-overview/replica-set-instances)

A replica set instance provides a primary node that supports read/write operations, one, three, or five secondary nodes for high availability, a hidden node, and zero to five optional read-only nodes. You can add or remove secondary nodes and read-only nodes based on your business requirements to better scale read performance.

Suitable for scenarios that require significantly more read operations than write operations or temporary burst activities.

[Sharded cluster architecture](/help/en/mongodb/product-overview/sharded-cluster-instances)

A sharded cluster instance consists of multiple replica sets (each replica set contains three nodes in primary/secondary mode and zero to five read-only nodes). It provides three components: mongos, shard, and ConfigServer. You can freely choose the number and specifications of mongos and shard components to infinitely scale performance and storage capacity, creating sharded cluster instances with different capabilities.

Suitable for scenarios that require highly concurrent read/write operations.

## **Billing methods**

**Billing method**

**Description**

Subscription

-   You complete the payment when you create an instance.
    
-   Subscription instances can be changed into pay-as-you-go instances. For more information, see [Change the billing method of an instance from subscription to pay-as-you-go](/help/en/mongodb/product-overview/switch-the-billing-method-from-subscription-to-pay-as-you-go#task-2279473).
    
-   If you want to use an instance for a long period of time, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are offered lower prices for longer subscription periods.
    

Pay-as-you-go

-   The system generates a bill and deducts the fee from your Alibaba Cloud account per hour. The amount is calculated based on the instance type and largest storage capacity of your instance at the time of billing.
    
    -   The billing cycle is 1 hour. If you use an instance for less than 1 hour, you are billed for 1 hour.
        
    -   If you change the storage capacity of your instance during a billing cycle, the system uses your largest storage capacity for billing.
        
        Example:
        
        Assume that the billing cycle is from 01:00:00 to 02:00:00 (UTC+8) and your instance storage capacity is 1 GB at 01:10:00, 8 GB at 01:20:00, and 2 GB at 01:50:00. In this case, you are charged for the 8 GB storage capacity in this billing cycle.
        
    -   In most cases, the system generates the bill in 1 to 3 hours after a billing cycle ends. The actual point in time when your bill is generated may vary.
        
        Example:
        
        Bills from 09:00:00 to 10:00:00 (UTC+8) are generated before 11:00:00.
        
-   Pay-as-you-go instances can be changed into subscription instances. For more information, see [Change the billing method of an instance from pay-as-you-go to subscription](/help/en/mongodb/product-overview/switch-the-billing-method-from-pay-as-you-go-to-subscription#concept-ejm-sbv-4fb).
    
-   Pay-as-you-go instances are ideal for short-time use. If you no longer need a pay-as-you-go instance, you can release it to reduce costs. For more information, see [Release an instance](/help/en/mongodb/user-guide/release-an-instance#task-vpq-mhm-j2b).
    
    **Important**
    
    After a pay-as-you-go instance is released, it is no longer charged.
    

## Procedure

1.  [Create an instance](/help/en/mongodb/getting-started/create-an-instance).
    
2.  [Configure a whitelist](/help/en/mongodb/getting-started/set-up-a-white-list).
    
3.  [Connect to the instance](/help/en/mongodb/getting-started/connection-instance).
    
4.  [Write data](/help/en/mongodb/getting-started/create-a-collection-and-write-data).
