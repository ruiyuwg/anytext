This topic describes how to pay for MaxCompute standard computing resources by subscription.

## Background

MaxCompute offers subscription-based computing resources, which reserve a specific portion of resources and are paid for in advance. Subscription computing resources are categorized into multi-zone high availability (HA) computing resources and standard computing resources, catering to tasks such as SQL, MapReduce, Spark, and MaxFrame.

-   Specifications type: Multi-zone HA computing resource
    
    Multi-zone HA computing resources can be dynamically allocated across multiple zones to facilitate job execution. These resources are available for subscription purchase. After purchasing, MaxCompute allocates redundant computing resources across multiple zones to fulfill the compute unit (CU) requirements of the purchase. In case of a zone-level disruption, computing resources automatically transition from the affected zone to another zone.
    
    **Note**
    
    -   These resources are ideal for intra-zone disaster recovery solutions. Binding multi-zone HA computing resources with projects that have data storage disaster recovery enabled ensures no data loss and swift job recovery in the event of a zone-level failure. For more information, see [Zone-disaster Recovery](/help/en/maxcompute/user-guide/disaster-recovery-in-the-same-city).
        
    -   Multi-zone HA computing resources are not compatible with the use of additional elastic reserved computing resources (billed hourly).
        
    -   The resource unit is the Compute Unit (CU), with 1 CU equivalent to 4 GB of memory and 1 CPU core.
        
    
-   Specifications type: Standard computing resource
    
    Standard computing resources refer to the computing resources within a single zone and support the purchase of subscription-based computing resources. After purchasing the desired specifications, MaxCompute reserves the specified quantity of resources for your exclusive use.
    
    **Note**
    
    -   For stable task volumes, we recommend that you combine subscription reserved computing resources for low-resource consumption tasks with pay-as-you-go resources for high-resource consumption tasks based on I/O. This strategy ensures the availability of CU resources during task execution.
        
    -   The managed storage subscription (storage plan 160, storage plan 320, storage plan 600) is no longer available for new purchases and was discontinued at **00:00:00 on Tuesday, October 31, 2023** (UTC+8). We recommend that you switch to standard computing resources as soon as possible.
        
    
-   Specifications type: Non-reserved computing resource
    
    After purchasing the specified resources, a fixed number is not set aside. Instead, an elastic resource pool with a range of \[0, purchased quantity\] is provided. When initiating a task, MaxCompute allocates resources from the idle portion of the total resource pool. If idle resources are ample, up to the maximum CU quantity purchased may be allocated. Conversely, if the total resource pool is in high demand, 0 CU may be allocated. MaxCompute ensures a 50% computing capacity of the non-reserved computing resources purchased throughout the day (one day of computing capacity = resource quantity × 24 hours).
    
    **Note**
    
    The option for non-reserved computing resources is no longer available for new purchases and was discontinued at **00:00:00 on Tuesday, October 31, 2023** (UTC+8). We recommend that you switch to standard computing resources as soon as possible.
    

After purchasing subscription computing resources, you can manage and observe resources through the MaxCompute console. For more information, see [Resource observation](/help/en/maxcompute/user-guide/resource-observation).

## Pricing of computing resources

The following table shows the price for 1 CU of computing resource:

**Type**

**Public cloud price**

**Note**

Multi-zone HA computing resources

USD 28.6/CU/month

Real-name verified accounts are eligible for the following discounts:

-   15% off for 1-year subscription duration
    
-   30% off for 2-year subscription duration
    
-   50% off for 3-year subscription duration
    
-   60% off for 4-year subscription duration
    
-   65% off for 5-year subscription duration
    

Standard computing resources

USD 22/CU/month
