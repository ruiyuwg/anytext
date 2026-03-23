Pay-as-you-go is a billing method that allows you to use resources before you pay for the resources. If you use the pay-as-you-go billing method, you are charged based on the amount of resources that you use. Bills are generated and fees are deducted from your account balance at the end of each billing cycle. You can use resources on-demand and do not need to purchase a large number of resources in advance.

## Description

**Item**

**Description**

Use scenarios

The pay-as-you-go billing method is suitable for the following scenarios:

-   Resource usage fluctuates.
    
-   Temporary use of resources is required.
    

Billing rules

-   Compute unit (CU) fees = Number of CUs × Unit price of CUs × Usage duration.
    
-   Enterprise SSD (ESSD) fees = ESSD capacity × Unit price of ESSD capacity × Usage duration.
    
-   Backend node (BE) fees = Unit price of BE specifications × Number of BEs × Usage duration.
    
-   Data storage fees = Storage resources × Unit price of storage resources × Usage duration.
    

Billing cycle

Bills are generated on an hourly basis at the top of every hour (UTC+8). A new billing cycle starts after the bills are settled.

Change of the billing method from pay-as-you-go to subscription

You can change the billing method of a pay-as-you-go StarRocks instance to subscription. For more information, see [Change the billing method from pay-as-you-go to subscription](/help/en/emr/emr-serverless-starrocks/product-overview/pay-as-you-go-package).

## Billing information

**Important**

You can obtain the actual price on the buy page.

For more information, see [Billable items](/help/en/emr/emr-serverless-starrocks/product-overview/billable-items).

## Billing examples

### **StarRocks shared-nothing instances (standard specifications)**

The following table provides an example on how to calculate the total fees of a StarRocks shared-nothing instance. In this example, the instance resides in the China (Hangzhou) region and uses the **standard specifications** for BEs, the number of CUs used by each BE is 8, and the number of BEs is 3.

Sample resource configurations:

-   FE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    
-   BE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    

**Billing component**

**Fee (USD)**

-   Total number of CUs: 48 (24 + 24)
    
-   Unit price of CUs: USD 0.050617 per CU per hour
    
-   Total ESSD capacity: 600 GB (300 + 300)
    
-   Disk type: ESSD PL1
    
-   Unit price of ESSD capacity: USD 0.00031900 per GB-hour
    
-   Usage duration: 1 hour
    

Total fees = CU fees + ESSD fees = 2.429616 + 0.1914 = 2.621016

-   CU fees = Number of CUs × Unit price of CUs × Usage duration = (24 + 24) × 0.050617 × 1 = 2.429616
    
-   ESSD fees = ESSD capacity × Unit price of ESSD capacity × Usage duration = (300 + 300) × 0.00031900 × 1 = 0.1914
    

### **StarRocks shared-nothing instances (high-performance storage specifications)**

The following table provides an example on how to calculate the total fees of a StarRocks shared-nothing instance. In this example, the instance resides in the China (Beijing) region and uses the **high-performance storage specifications** for BEs, the BE specifications are **16 cores, 64 GiB of memory, and a local SSD with 1,788 GiB**, and the number of BEs is 3.

Sample resource configurations:

-   FE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    
-   BE computing resources: 48 cores and 192 GiB of memory, storage resources: local SSDs with 5,364 GiB
    

**Billing component**

**Fee (USD)**

-   Number of CUs for FEs: 24
    
-   Unit price of CUs: USD 0.050617 per CU per hour
    
-   Total ESSD capacity of FEs: 300 GB
    
-   BE specifications: 16 cores, 64 GiB of memory, and a local SSD with 1,788 GiB
    
-   Unit price of BE specifications: USD 1.18 per hour
    
-   Number of BEs: 3
    
-   Disk type: ESSD PL1
    
-   Unit price of ESSD capacity: USD 0.00031900 per GB-hour
    
-   Usage duration: 1 hour
    

Total fees = CU fees + ESSD fees + BE fees = 1.214808 + 0.0957 + 3.54 = 4.850508

-   CU fees = Number of CUs × Unit price of CUs × Usage duration = 24 × 0.050617 × 1 = 1.214808
    
-   ESSD fees = ESSD capacity × Unit price of ESSD capacity × Usage duration = 300 × 0.00031900 × 1 = 0.0957
    
-   BE fees = Unit price of BE specifications × Number of BEs × Usage duration = 1.18 × 3 × 1 = 3.54
    

### **StarRocks shared-data instances**

The following table provides an example on how to calculate the total fees of a StarRocks shared-data instance. In this example, the instance resides in the China (Hangzhou) region and is of the **standard** edition, the number of CUs used by each compute node (CN) is 8, and the number of CNs is 3.

Sample resource configurations:

-   FE computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 300 GB
    
-   CN computing resources: 24 CUs, storage resources: ESSD PL1 (recommended) with 150 GB
    

**Billing component**

**Fee (USD)**

-   Total number of CUs: 48 (24 + 24)
    
-   Unit price of CUs: USD 0.050617 per CU per hour
    
-   Total ESSD capacity: 450 GB (300 + 150)
    
-   Disk type: ESSD PL1
    
-   Unit price of ESSD capacity: USD 0.00031900 per GB-hour
    
-   Unit price for data storage: USD 0.000036041667 per GB-hour
    
-   Usage duration: 1 hour
    

Total fees = CU fees + ESSD fees = 2.429616 + 0.14355 = 2.573166

-   CU fees = Number of CUs × Unit price of CUs × Usage duration = (24 + 24) × 0.050617 × 1 = 2.429616
    
-   ESSD fees = ESSD capacity × Unit price of ESSD capacity × Usage duration = (300 + 150) × 0.00031900 × 1 = 0.14355
    

**Important**

The fees for data storage vary based on the actual usage.

## **References**

If you want to use a pay-as-you-go instance for a long period of time, you can change the billing method of the instance from pay-as-you-go to subscription and specify the subscription period based on your needs to reduce costs. For more information, see [Change the billing method from pay-as-you-go to subscription](/help/en/emr/emr-serverless-starrocks/product-overview/pay-as-you-go-package).
