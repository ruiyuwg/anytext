Subscription is a billing method that allows you to use resources only after you pay for them. The subscription billing method reserves resources for you and is more cost-effective than the pay-as-you-go billing method for long-term use in most business scenarios.

## Description

**Item**

**Description**

Use scenarios

The subscription billing method is suitable for the following business scenarios:

-   The usage period of resources can be estimated.
    
-   Resource usage remains relatively stable.
    
-   Resources need to be reserved in advance for long-term use.
    

Billing rules

-   Compute unit (CU) fees = Number of CUs × Unit price of CUs × Subscription duration.
    
-   Enterprise SSD (ESSD) fees = ESSD capacity × Unit price of ESSD capacity × Subscription duration.
    
-   Backend node (BE) fees = Unit price of BE specifications × Number of BEs × Subscription duration.
    

Billing cycle

The billing cycle is the subscription period measured based on the UTC+8 time zone. The billing cycle starts when a subscription instance is created or renewed and ends at 00:00:00 on the day after the expiration date. The start time is accurate to the second.

Renewal

An E-MapReduce (EMR) Serverless StarRocks instance is immediately suspended after the instance expires. Seven days (168 hours) after the instance is suspended, the system automatically releases the instance. After the instance is released, you cannot renew it. You can renew an instance before the instance expires or is released. For more information, see [Renewal policy](/help/en/emr/emr-serverless-starrocks/product-overview/renewal-description).

## Billing information

**Important**

You can obtain the actual price on the buy page.

For information about billable items, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).

## Billing examples

### StarRocks shared-nothing instances (**standard specifications**)

The following table provides an example on how to calculate the total fees of a StarRocks shared-nothing instance. In this example, the instance resides in the China (Hangzhou) region, is of the **standard edition**, and uses the **standard specifications** for BEs. The number of CUs used by each BE is 8, and the number of BEs is 3.

Sample resource configurations:

-   Frontend node (FE) computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    
-   BE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    

**Billing component**

**Fee (USD)**

-   Total number of CUs: 48 (24 + 24)
    
-   Unit price of CUs: USD 24.30 per CU-month
    
-   Total ESSD capacity: 600 GB (300 + 300)
    
-   Disk type: ESSD PL1
    
-   Unit price of ESSD capacity: USD 0.1530 per GB-month
    
-   Subscription duration: 1 month
    

Total fees = CU fees + ESSD fees = 1,166.4 + 91.8‬ = 1,258.2

-   CU fees = Number of CUs × Unit price of CUs × Subscription duration = (24 + 24) × 24.30 × 1 = 1,166.4
    
-   ESSD fees = ESSD capacity × Unit price of ESSD capacity × Subscription duration = (300 + 300) × 0.1530 × 1 = 91.8
    

### StarRocks shared-nothing instances (**high-performance storage specifications**)

The following table provides an example on how to calculate the total fees of a StarRocks shared-nothing instance. In this example, the instance resides in the China (Beijing) region, is of the **standard edition**, and uses the **high-performance storage specifications** for BEs. The BE specifications are **16 cores and 64 GiB of memory + 1 × 1,788 GiB local SSD**, and the number of BEs is 3.

Sample resource configurations:

-   FE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    
-   BE computing resources: 48 cores and 192 GiB of memory, storage resources: local SSDs with 5,364 GiB
    

**Billing component**

**Fee (USD)**

-   FE computing resources: 24 CUs
    
-   Unit price of CUs: USD 24.30 per CU-month
    
-   Total ESSD capacity: 300 GB
    
-   BE specifications: 16 cores and 64 GiB of memory + 1 × 1,788 GiB local SSD
    
-   Unit price of BE specifications: USD 576.59 per month
    
-   Number of BEs: 3
    
-   Disk type: ESSD PL1
    
-   Unit price of ESSD capacity: USD 0.1530 per GB-month
    
-   Subscription duration: 1 month
    

Total fees = CU fees + ESSD fees + BE fees = 583.2 + 45.9 + 1,702.77 = 2,331.87

-   CU fees = Number of CUs × Unit price of CUs × Subscription duration = 24 × 24.30 × 1 = 583.2
    
-   ESSD fees = ESSD capacity × Unit price of ESSD capacity × Subscription duration = 300 × 0.1530 × 1 = 45.9
    
-   BE fees = Unit price of BE specifications × Number of BEs × Subscription duration = 567.59 × 3 × 1 = 1,702.77
    

### StarRocks shared-data instances

The following table provides an example on how to calculate the total fees of a StarRocks shared-data instance. In this example, the instance resides in the China (Hangzhou) region and is of the **standard edition**, the number of CUs used by each compute node (CN) is 8, and the number of CNs is 3.

Sample resource configurations:

-   FE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    
-   CN computing resources: 24 CUs, storage resources: ESSD PL1 (recommended ) with 150 GB
    

**Billing component**

**Fee (USD)**

-   Total number of CUs: 48 (24 + 24)
    
-   Unit price of CUs: USD 24.30 per CU-month
    
-   Total ESSD capacity: 450 GB (300 + 150)
    
-   Disk type: ESSD PL1
    
-   Unit price of ESSD capacity: USD 0.1530 per GB-month
    
-   Unit price for data storage: USD 0.000036041667 per GB-hour
    
-   Usage duration: 1 month
    

Total fees = CU fees + ESSD fees = 1,166.4 + 68.85 ‬= 1,235.25

-   CU fees = Number of CUs × Unit price of CUs × Usage duration = (24 + 24) × 24.30 × 1 = 1,166.4
    
-   ESSD fees = ESSD capacity × Unit price of ESSD capacity × Usage duration = (300 + 150) × 0.1530 × 1 = 68.85
    

**Important**

The fees for data storage vary based on the actual usage.

## **References**

Before your subscription instance expires, you must renew the subscription to ensure that you can continuously use your instance as expected. For more information about renewal, see [Renewal policy](/help/en/emr/emr-serverless-starrocks/product-overview/renewal-description).
