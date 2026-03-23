Storage capacity units (SCUs) are subscription storage resource plans that can be used to offset capacity fees for various storage resources, such as cloud disks, snapshots, and Object Storage Service (OSS) resources. This topic describes the billing methods, offset rules, and refund rules of SCUs.

## Billing

SCUs use the subscription billing method and are billed based on their capacity and validity periods. SCUs support only the All Upfront payment option. You must make a full payment at purchase. The following formula is used to calculate the amount that you need to pay upfront for an SCU:

**Amount = SCU price × Validity period**

-   **SCU price**: Go to the Pricing tab of the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs) to view the SCU price schedule.
    
-   **Validity period**: You select a period of one month, two months, three months, six months, one year, three years, or five years as the validity period for an SCU. You can receive some discounts for SCUs with a validity period of one or more years.
    

For example, to purchase a 2-month, 100 GB SCU in the China (Beijing) region at a price of USD 23 per month, you must pay USD 46 upfront, which is calculated by using the following formula: Amount **=** USD 23 per month **×** 2 months **=** USD 46.

## Purchase and use an SCU

-   For information about how to purchase an SCU, see [Purchase an SCU](/help/en/scu/purchase-an-scu).
    
-   After you purchase an SCU in a region, the SCU is automatically applied to offset pay-as-you-go fees for eligible cloud disks and snapshots in the region. If the capacity of the cloud disks and snapshots exceeds the capacity of the SCU, you are charged for the overage at the pay-as-you-go rates.
    

## Offset rules

### Offset factors (deduction factors)

The following table describes the deduction factors that apply when SCUs are used to offset storage fees for different categories of cloud disks and snapshots in the China (Beijing) region. You can go to the Pricing tab of the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs) to view the deduction factors for other Alibaba Cloud storage services and in other regions.

**Category**

**Deduction factor**

**Description**

Basic disk

1

Each GiB of basic disk capacity consumes 1 GB of SCU capacity.

Ultra disk

1

Each GiB of ultra disk capacity consumes 1 GB of SCU capacity.

Standard SSD

1

Each GiB of standard SSD capacity consumes 1 GB of SCU capacity.

PL0 Enterprise SSD (ESSD)

0.5

Each GiB of PL0 ESSD capacity consumes 0.5 GB of SCU capacity.

PL1 ESSD

1

Each GiB of PL1 ESSD capacity consumes 1 GB of SCU capacity.

PL2 ESSD

2

Each GiB of PL2 ESSD capacity consumes 2 GB of SCU capacity.

PL3 ESSD

4

Each GiB of PL3 ESSD capacity consumes 4 GB of SCU capacity.

Standard snapshot

0.08

Each GB of standard snapshots consumes 0.08 GB of SCU capacity.

### Offset order

-   Cloud disks
    
    Only SCUs can offset pay-as-you-go storage fees for cloud disks to reduce usage costs. Cloud disks are first matched to SCUs for fee offsets. The capacity of the cloud disks that is not covered by the SCUs is billed at pay-as-you-go rates. For more information about billing for cloud disks, see [Block storage devices](/help/en/ecs/block-storage-devices).
    
-   Snapshots
    
    You can use SCUs to offset pay-as-you-go storage fees for snapshots to reduce usage costs. Snapshots are first matched to SCUs for storage fee offsets. The capacity of the snapshots that is not covered by the SCUs is billed at pay-as-you-go rates. For more information about billing for snapshots, see [Snapshots](/help/en/ecs/snapshots-1).
    

### Examples

#### Use SCUs to offset storage fees for cloud disks

-   Example 1: You have 10 TiB of PL1 ESSDs and a 10 TB SCU.
    
    The PL1 ESSDs require 10 TB (= 10 TB × 1) of SCU capacity. The SCU can offset all pay-as-you-go fees for the PL1 ESSDs.
    
-   Example 2: You have 10 TiB of PL0 ESSDs, 5 TiB of PL1 ESSDs, and a 10 TB SCU.
    
    The ESSDs require 10 TB (= 10 TB × 0.5 + 5 TB × 1) of SCU capacity. The SCU can offset all pay-as-you-go fees for the ESSDs.
    
-   Example 3: You have 1 TiB of PL3 ESSDs, 2 TiB of PL2 ESSDs, 2 TiB of PL1 ESSDs, and a 10 TB SCU.
    
    The ESSDs require 10 TB (= 1 TB × 4 + 2 TB × 2 + 2 TB × 1) of SCU capacity. The SCU can offset all pay-as-you-go fees for the ESSDs.
    
-   Example 4: You have 12 TiB of standard SSDs and a 10 TB SCU.
    
    The standard SSDs require 12 TB (= 12 TB × 1) of SCU capacity. The SCU can offset the pay-as-you-go fees for 10 TiB of standard SSDs, and you are charged for the remaining 2 TiB of standard SSDs at the pay-as-you-go rate.
    

#### Use SCUs to offset storage fees for snapshots

Assume that in January 2022, you had 500 GB of snapshots and a 35 GB SCU.

1.  The 35 GB SCU can offset storage fees for 437.5 GiB (= 35 GB/0.08) of snapshots.
    
2.  You are charged for the remaining 62.5 GB (= 500 GB - 437.5 GB) of snapshots at the pay-as-you-go rate.
    

## Expiration

After an SCU expires, you cannot use it to offset pay-as-you-go fees for storage resources. If you have no other SCUs in the same region as the expired SCU, the pay-as-you-go storage resources are billed on a pay-as-you-go basis.

## Renewal or upgrade

SCUs cannot be renewed or upgraded. You can purchase multiple SCUs based on your storage usage.

-   If an SCU cannot cover all the bills of pay-as-you-go storage resources, you can purchase more SCUs.
    
-   If an SCU is about to expire, you can purchase more SCUs and specify a time for them to take effect.
    

## References

-   [PurchaseStorageCapacityUnit](/help/en/ecs/developer-reference/api-ecs-2014-05-26-purchasestoragecapacityunit): purchases one or more SCUs.
    
-   [ModifyStorageCapacityUnitAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifystoragecapacityunitattribute): changes the name or modifies the description of an SCU.
    
-   [DescribeStorageCapacityUnits](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describestoragecapacityunits): queries the details of one or more SCUs, including the capacity and state of SCUs.
    

## FAQ

Refer to [What is a storage capacity unit (SCU)?](/help/en/ecs/billing-faq#section-emy-jk9-ezz) and find the answers to frequently asked questions about SCUs.
