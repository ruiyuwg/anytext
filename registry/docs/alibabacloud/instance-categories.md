This topic describes general-purpose and dedicated-disk instance categories of ApsaraDB for MongoDB.

## Categories

**Instance family**

**Description**

**Scenario**

General-purposes

-   General-purpose instances occupy dedicated memory and storage space, and shared CPU and I/O. Therefore, the instances may compete for resources.
    
-   CPU resources are highly reused among shared instances that are deployed on the same physical server. This maximizes cost-effectiveness.
    

-   Price-sensitive scenarios.
    
-   Scenarios that require a baseline level of performance stability.
    

Dedicated

-   Dedicated local-disk instances occupy dedicated memory, storage space, and CPU resources, but share I/O resources. Therefore, the instances may compete for I/O resources.
    
-   Dedicated cloud-disk instances occupy dedicated memory, storage space, and CPU and I/O resources. Therefore, the instances do not compete for resources. Dedicated cloud-disk instances also provide higher performance stability and is less affected by other instances that are deployed on the same physical server than dedicated local-disk instances.
    
-   Dedicated-host instances occupy all resources of a host and do not compete for resources.
    

Business scenarios where databases are used as core systems. The scenarios include providing finance, e-commerce, and large and medium-sized Internet services and handling government affairs.

The following figure shows the differences between general-purpose instances, dedicated local-disk instances, and dedicated cloud-disk instances.![实例规格族](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8664399371/p272662.png)

## Instance specifications

For more information about instance specifications such as the number of vCPUs, memory, storage capacity, maximum number of connections, and IOPS, see [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).

## Pricing

For more information about the pricing of each instance type, see [Billable items](/help/en/mongodb/product-overview/billable-items#concept-jww-bny-32b).

## Change instance specifications

For more information about how to change the specifications of an instance, see [Change the configurations of an instance](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302).
