Resource Assurance helps you query, reserve, purchase, and use resources. Resource Assurance provides you with real-time insights into resource provision and allows you to make resource reservations and plans by using private pools. This topic describes the billing methods of resource assurances and provides examples on how resource assurances are billed.

## Billing methods

You can purchase elasticity assurances, immediate capacity reservations, or scheduled capacity reservations to reserve resources that match specific attributes in private pools for different scenarios. For more information, see [Overview](/help/en/ecs/user-guide/overview-29#concept-1997477).

The following table describes the billing methods that are supported by resource assurances.

**Reservation type**

**Billing method**

**Description**

**References**

**Immediate or Scheduled Elasticity Assurance**

Elasticity Assurance

Purchased elasticity assurances cannot be released manually. You are charged the following fees for an elasticity assurance:

-   Assurance fee. This fee is charged when you purchase an elasticity assurance. An elasticity assurance reserves resources in a private pool. During the term of the elasticity assurance, you can create pay-as-you-go instances from the reserved resources (reserved capacity) in the private pool at any time.
    
-   Instance fee. You are charged for the pay-as-you-go instances that are created in the reserved capacity on an hourly basis.
    
    **Note**
    
    You can also apply existing savings plans or regional reserved instances that have matching attributes to offset pay-as-you-go instance fees.
    

[Overview of Elasticity Assurance](/help/en/ecs/user-guide/overview-of-elasticity-assurance#concept-1999478)

**Immediate Capacity Reservation**

Immediate Capacity Reservation

An immediate capacity reservation is billed at the pay-as-you-go rate of the specified instance type regardless of whether you create pay-as-you-go instances in the reserved capacity. Billing starts when the capacity reservation is created, and continues until the capacity reservation is manually released or automatically released on expiration.

**Note**

-   Before you use an immediate capacity reservation to create pay-as-you-go instances, you are charged only for the reserved capacity of the specified instance type. After you use an immediate capacity reservation to create pay-as-you-go instances, you are charged based on the instance configurations, including computing resources, disks, and public bandwidth.
    
-   After a private pool is configured for a purchased instance, the fees for the storage capacity of the instance immediately start being deducted by the fees of the compute resources (vCPU and memory capacity). For more information, see [Configure a private pool for existing instances](/help/en/ecs/user-guide/configure-a-private-pool-for-existing-instances).
    

[Overview of immediate capacity reservations](/help/en/ecs/user-guide/overview-of-immediate-capacity-reservation#concept-1999512)

**Scheduled Capacity Reservation**

Capacity Reservation with Savings Plan

-   When you purchase a capacity reservation with Savings Plan, you can select only the No Upfront payment option for the savings plan. No upfront payment is required.
    
-   When you use a capacity reservation with Savings Plan to create pay-as-you-go instances:
    
    -   You are charged for the No Upfront savings plan.
        
    -   The savings plan is applied to reduce your bills for the pay-as-you-go instances and the unused reserved capacity.
        
    -   If the pay-as-you-go instances include non-computing resources such as system disks and public bandwidth, the savings plan is applied only to the computing resources (vCPUs and memory) of the instances and cannot be applied to other resources. You are charged for the other resources based on the actual rates.
        

[Overview of scheduled capacity reservations](/help/en/ecs/user-guide/specify-a-time-effective-summary-of-capacity-reservation)

Capacity Reservation for Subscription Resources

-   When you purchase a capacity reservation for subscription resources, you do not need to pay upfront.
    
-   When you use a capacity reservation for subscription resources:
    
    -   For unused reserved capacity, you are charged only at the pay-as-you-go rate of the instance type.
        
    -   When you create subscription instances in the reserved capacity of the capacity reservation, you are charged subscription instance fees.
        

[Overview of Scheduled Capacity Reservation](/help/en/ecs/user-guide/specify-a-time-effective-summary-of-capacity-reservation)

## Billing examples

This section provides examples on how elasticity assurances and capacity reservations are billed. The prices on this page are provided only for reference. The actual prices are displayed on the [Pricing tab of the Elastic Compute Service (ECS) product page](https://www.alibabacloud.com/zh/product/ecs#pricing).

### Elasticity assurances

-   **Scenario**: You purchased an elasticity assurance for one instance and created an instance in the reserved capacity for a promotion event.
    
    -   Assurance fee for the elasticity assurance: USD 100
        
    -   Term of the elasticity assurance: one month
        
    -   Quantity of instances: 1
        
    -   Pay-as-you-go instance price: USD 10 per hour
        
    -   Instance usage (in hours): 6 hours
        
-   **Billed amount**: Total fee = Assurance fee for the elasticity assurance + Fee for pay-as-you-go resources
    
    -   Assurance fee for the elasticity assurance: USD 100
        
    -   Fee for pay-as-you-go resources: USD 10 per hour × 6 hours = USD 60
        
    -   Total fee: USD 100 + USD 60 = USD 160
        
    
    **Note**
    
    -   During the term of an elasticity assurance, you can infinitely create or release pay-as-you-go instances in the reserved capacity.
        
    -   Elasticity assurances are automatically released when they expire, but instances that are created in the reserved capacity are not released.
        
    -   The instances continue to work as expected and are billed at pay-as-you-go rates.
        
    

### Immediate capacity reservations

-   **Scenario**: You purchased an immediate capacity reservation for two instances. The capacity reservation was provisioned for 4 hours. You created Instance A in the reserved capacity, used the instance for 3 hours, and then released the instance.
    
    -   Pay-as-you-go instance price: USD 10 per hour
        
    -   Term of the immediate capacity reservation: 4 hours
        
    -   Usage of Instance A (in hours): 3 hours
        
    -   Usage of Instance B (in hours): 1 hour
        
-   **Billed amount**: Total fee = Fee for the immediate capacity reservation + Fee for pay-as-you-go resources
    
    Fee for the immediate capacity reservation = Fee for unused reserved capacity + Fee for used reserved capacity. You are not charged for the used reserved capacity.
    
    -   Fee for the pay-as-you-go resources of Instance A: USD 10 per hour × 3 hours = USD 30
        
    -   Fee for unused reserved capacity for Instance A: USD 10 per hour × 1 hour = USD 10
        
    -   Fee for the pay-as-you-go resources of Instance B: USD 10 per hour × 1 hour = USD 10
        
    -   Fee for unused reserved capacity for Instance B: USD 10 per hour × 3 hours = USD 30
        
    -   Fee for the immediate capacity reservation = USD 10 + USD 30 = USD 40
        
    -   Fee for pay-as-you-go resources: USD 30 + USD 10 = USD 40
        
    -   Total fee: USD 40 + USD 40 = USD 80
        

### Capacity reservations with Savings Plan

-   **Scenario**: You purchased a capacity reservation with Savings Plan for one instance and created a pay-as-you-go instance in the reserved capacity.
    
    -   Fee for the No Upfront savings plan: USD 1,000
        
    -   Fee for data disks: USD 500
        

-   **Billed amount**: Total fee = Fee for the No Upfront savings plan + Fee for resource usage that is not covered by the savings plan
    
    -   Fee for the No Upfront savings plan: USD 1,000
        
    -   Fee for resource usage that is not covered by the savings plan: USD 500
        
    -   Total fee: USD 1,000 + USD 500 = USD 1,500
        
    
    **Note**
    
    The effective time of the capacity reservation with Savings Plan must be at least three days later than the creation time and can be up to one year later than the creation time.
    
    -   The savings plan can be applied to reduce bills for the unused reserved capacity and the created pay-as-you-go instance.
        
    -   If you release the capacity reservation before the savings plan expires, you can continue to apply the savings plan to eligible pay-as-you-go instances or immediate capacity reservations.
        
    

### Capacity reservations for subscription resources

-   **Scenario**: You purchased a 7-day capacity reservation for subscription resources for 10 instances and created eight subscription instances in the reserved capacity.
    
    -   Pay-as-you-go instance price: USD 10 per hour
        
    -   Subscription instance price: USD 4,800 per month
        
    -   Usage of the instances: 1 month
        
    -   Term of the capacity reservation for subscription resources: seven days
        

-   **Billed amount**: Total fee = Fee for the capacity reservation for subscription resources + Fee for subscription resources
    
    -   Fee for the capacity reservation for subscription resources: (10 - 8) × 7 × 24 hours × USD 10 per hour = USD 3,360
        
    -   Fee for subscription resources: USD 4,800 per month × 8 × 1 month = USD 38,400
        
    -   Total fee: USD 3,360 + USD 38,400 = USD 41,760
        

**Note**

-   You cannot cancel effective capacity reservations for subscription resources.
    
-   If you create subscription instances only in a part of the reserved capacity during the term of the capacity reservation for subscription resources, you are charge for the unused reserved capacity at the pay-as-you-go rate. You are not charged for the used reserved capacity.
    

## References

-   [Purchase a resource reservation](/help/en/ecs/user-guide/purchase-a-resource-reservation#task-1997486)
    
-   [Use a private pool to create instances](/help/en/ecs/user-guide/use-a-private-pool-to-create-instances#task-2001647)
