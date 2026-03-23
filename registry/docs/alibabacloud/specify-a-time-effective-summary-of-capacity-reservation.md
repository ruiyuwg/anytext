A scheduled capacity reservation allows you to reserve resources in a private pool and have access to the resources starting from a specific point in time to run business.

## Process

Scheduled capacity reservations are classified into capacity reservations with Savings Plan and capacity reservations for subscription resources based on the type of resources that require guaranteed access to the resources.

## **Process of using a capacity reservation with Savings Plan**

A capacity reservation with Savings Plan is used to ensure that pay-as-you-go instances can be created. The following section describes the usage process:

1.  You purchase a capacity reservation with Savings Plan and specify the attributes, such as the zone, instance type, and effective time, of the capacity reservation.
    
2.  The capacity reservation with Savings Plan takes effect at a specified point in time. You can then use the reserved capacity in the private pool that is associated with the capacity reservation to create pay-as-you-go instances during the validity period of the capacity reservation. The hourly fees of the pay-as-you-go instances are offset by the associated savings plan.
    

**Note**

Savings plans are used to offset the costs of the computing resources (vCPUs and memory), images, system disks, data disks (including disk capacity, performance provision, and performance burst), and public bandwidths of instances. Other instance resources are billed based on actual usage. For more information, see [Overview](/help/en/ecs/user-guide/what-is-savings-plan#concept-1950740).

4.  If a capacity reservation with Savings Plan that is in effect is released manually or on expiration, the system no longer reserves resources.
    

**Note**

After the capacity reservation with Savings Plan is released, the created pay-as-you-go instances can run as expected. The associated savings plan stops offsetting the fees of the instances, and the instances are billed based on the pay-as-you-go billing method.

The following figure shows how to use a capacity reservation with Savings Plan to reserve resources for two instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3484123771/CAEQMRiBgMDu0vCpnRkiIDM2YmEwNDBiYzRkNjQ0ZDViYTdkNmQ3NjVlNzBkNjll4010311_20230919172540.441.svg)

### **Process of using a capacity reservation for subscription resources**

A capacity reservation for subscription resources is used to ensure that subscription instances can be created. The following section describes the usage process:

1.  You purchase a capacity reservation for subscription resources and specify the attributes, such as the zone, instance type, and effective time of the capacity reservation.
    
2.  Alibaba Cloud receives an order for the capacity reservation for subscription resources, starts stocking, and then sends you an effective notification after stocking is complete.
    
3.  You receive an effective notification. During the validity period of the capacity reservation, you use the private pool capacity to create subscription instances. You must pay upfront for the instances.
    

**Note**

The capacity reservation for subscription resources ensures that subscription instances can be created, but it does not guarantee that operations such as configuration changes and renewals of existing instances can be performed. The instance subscription duration must be at least one month.

5.  If the private pool capacity is exhausted or the validity period elapses, the system stops reserving resources.
    

The following figure shows how to use a capacity reservation for subscription resources to reserve resources for two subscription instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3484123771/CAEQMRiBgMCMl_2pnRkiIDNhNWM1MTE3MDNhMzQ3MDQ4YTZjZGNkZDdjZDI2Mzky4010311_20230919101104.511.svg)

## Billing method

**Time period**

**Capacity reservation with Savings Plan**

**Capacity reservations for subscription resources**

When purchasing

Currently, only No Upfront savings plans are supported. You do not need to pay upfront when you purchase a capacity reservation.

You do not need to pay upfront when you purchase a capacity reservation.

When using

-   You are charged for the No Upfront savings plan.
    
-   The savings plan is used to offset the fees of the idle capacity and the fees of pay-as-you-go instances.
    
-   The savings plan can be used to offset the fees only for the computing resources (vCPUs and memory), system disks, and public bandwidths of pay-as-you-go instances. If you created pay-as-you-go instances that include other resources, you are charged for the resources based on the actual usage.
    

-   If the idle capacity is available, you are charged for the capacity based on the pay-as-you-go billing method.
    
-   When you create subscription instances, you must pay upfront for the instances.
    

## Limits

-   Specific regions and instance types support scheduled capacity reservations. For more information, see the Create Resource Reservation page.
    
-   You cannot release capacity reservations for subscription resources or inactive capacity reservations with Savings Plan.
    

## Usage examples

As a company continues to expand and the internal service platform needs to continuously provide services for more employees, the company plans to migrate the platform to the cloud.

Requirements:

-   Sufficient instances must be created to meet business requirements during migration to the cloud.
    
-   The platform needs to be upgraded regularly. During the upgrade, specific instances need to be released and re-created. The instances must be re-created as expected.
    

Solution:

1.  Plan the required resources such as the required instance types, the capacity of the private pools, and whether instances are created across regions.
    
2.  Purchase a capacity reservation with Savings Plan and specify the effective time based on the project plan.
    
3.  Perform the migration. The capacity reservation with Savings Plan takes effect as scheduled, and the private pool capacity helps you successfully create instances.
    
4.  After the migration is complete, the capacity reservation with Savings Plan guarantees the resource provisioning during the validity period. When you perform an automated upgrade, the capacity of the corresponding private pool becomes idle after the instances are released. You can continue to use the capacity to ensure that the instances are created as expected.
    
5.  If you need more temporary resources, use the resources in the public pool to take advantage of the elasticity of cloud resources. If you need more stable resources, purchase an immediate capacity reservation.
