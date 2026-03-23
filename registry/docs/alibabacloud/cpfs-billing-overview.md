This topic describes the billable items, billing methods, pricing, and billing cycles for Cloud Parallel File Storage (CPFS) General-purpose Edition file systems.

## Billable items

CPFS General-purpose Edition file systems have two types of billable items:

-   Basic fees: **Storage capacity fees**. These fees apply to most users.
    
-   Value-added fees: These fees include **data flow bandwidth fees** for using the [Data flow](/help/en/cpfs/cpfsonecs/user-guide/data-flow-overview/) feature and **protocol service bandwidth fees** for using the [Protocol Service](/help/en/cpfs/cpfsonecs/user-guide/protocol-service-overview/) (the CPFS-NFS client) to access the file system.
    

**Important**

-   If you use the [CPFS-POSIX client](/help/en/cpfs/cpfsonecs/user-guide/mount-targets-for-posix-clients) to access a file system, the system automatically creates three **pay-as-you-go ECS instances** for client management when you create a POSIX mount target. The **charges** for these instances are billed through Elastic Compute Service (ECS). For more information, see [Instance type billing](/help/en/ecs/instance-types#concept-1937440).
    
-   If you use the data flow feature and enable the **AutoUpdate** feature, CPFS General-purpose Edition uses EventBridge to collect object modification events from the source OSS bucket. This process incurs **event fees**. The event service is in public preview and is **free of charge**. For more information, see [Billing of EventBridge](/help/en/eventbridge/product-overview/billing#concept-2485048).
    

**Billable items of CPFS General-purpose Edition**

For more information about billable items, see [Billable items of CPFS](/help/en/cpfs/cpfsonecs/product-overview/billable-items).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8546762671/CAEQTxiBgMD1puie0xkiIGViODA0OGI4ZjgyZjQzYzRiZmI0MDdhN2Q4MzBiYTE24156048_20240116135946.491.svg)

## **Billing method**

Only the pay-as-you-go billing method is supported.

## Product pricing

For more information about the pricing of billable items for CPFS General-purpose Edition, see [CPFS Pricing](https://www.alibabacloud.com/zh/product/cpfs/pricing?_p_lc=1#J_5231602900).

## Billing cycle

CPFS is billed hourly based on your provisioned capacity. A bill is generated 3 to 4 hours after a billing cycle ends, but the actual time may vary. For example, at 09:30, the system settles the fees for usage from 08:00 to 09:00.

**Important**

-   Due to system latency, the bill that you view at 09:30 may be for the fees generated from 05:30 to 06:30.
    
-   Bills for Alibaba Cloud CPFS are generated with a delay of 3 to 4 hours.
    

## Billing formula

CPFS fees are settled hourly. The formula is: Fee = Provisioned Capacity × Hourly Unit Price.

**Important**

The unit price for storage usage in [CPFS pricing](https://www.alibabacloud.com/zh/product/cpfs/pricing?_p_lc=1#J_5231602900) is specified in USD/GiB/month, but pay-as-you-go fees are calculated using the formula: `Provisioned Capacity × Hourly Unit Price`. Therefore, to calculate your actual storage usage fees, you must convert the monthly unit price from USD/GiB/month to an hourly rate. For example, if the unit price for a 100 MB/s/TiB baseline is `USD 0.1236/GiB/month`, the hourly unit price is approximately `USD 0.000172/GiB/hour (0.1236 ÷ 30 ÷ 24)`.

## References

-   [Overdue payments](/help/en/cpfs/cpfsonecs/product-overview/overdue-payments)
    
-   [Query bills](/help/en/cpfs/cpfsonecs/product-overview/query-bills)
    
-   [Billing FAQ](/help/en/cpfs/cpfsonecs/product-overview/billing-faq)
