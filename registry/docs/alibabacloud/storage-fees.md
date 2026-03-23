Storage fees are incurred for storing objects in an Object Storage Service (OSS) bucket. These fees are based on the storage class, size, and storage duration of the objects, and apply regardless of whether the objects are accessed.

## **Unit price**

This topic describes the billable items and payment methods for storage fees. For more information about the pricing of billable items, see [OSS Pricing](https://www.alibabacloud.com/product/oss/pricing).

The [OSS Pricing](https://www.alibabacloud.com/product/oss/pricing) page specifies the unit price for storage fees in `USD/GB/month`. However, for the pay-as-you-go method, fees are calculated as `Actual resource usage × Unit price per hour`. Therefore, to calculate your actual storage fees, you must first convert the monthly unit price to an hourly unit price in `USD/GB/hour`. For example, if the unit price for Standard (locally redundant storage) is `USD 0.0173/GB/month`, the hourly price is approximately `USD 0.000024/GB/hour (0.0173 ÷ 30 ÷ 24)`.

## Billable items

-   **Storage usage fees**
    
    OSS charges storage fees for objects in a bucket based on their storage class, [redundancy type](/help/en/oss/user-guide/overview-of-storage-redundancy-types/), size, and storage duration.
    
-   **Capacity Fee for Insufficient Duration**
    
    Some storage classes have a minimum storage duration. The minimum storage duration is 30 days for Infrequent Access (IA), 60 days for Archive, and 180 days for both Cold Archive and Deep Cold Archive. If an object in one of these storage classes is converted to another class or deleted before its minimum storage duration is met, an early deletion fee is charged.
    
    **Example**: If an IA object is overwritten or deleted in less than 30 days (720 hours), storage fees are charged for the remaining time (720 hours - actual storage duration). The same rule applies to Archive, Cold Archive, and Deep Cold Archive objects, but their minimum storage durations are different.
    

### **Storage usage for LRS**

**Billable item**

**Billable item code**

**Minimum billable size**

Standard LRS storage

Storage

None

(billed based on actual size)

Infrequent Access (IA) LRS storage

ChargedDatasize

64 KB

(Objects smaller than 64 KB are billed as 64 KB. Objects that are 64 KB or larger are billed based on their actual size.)

Archive LRS storage

ChargedDatasize

Cold Archive LRS storage

ChargedDatasizeCA

Deep Cold Archive LRS storage

ChargedDatasizeDeepCA

Because the IA, Archive, Cold Archive, and Deep Cold Archive storage classes have a minimum billable size of 64 KB, the billable storage usage in a bucket may be larger than the actual storage usage. For more information about the actual and billable storage usage for these storage classes, see [Obtain the storage usage of a bucket](/help/en/oss/developer-reference/query-the-storage-capacity-of-a-bucket-1).

### Storage Duration **Capacity (Zone-Redundant Storage)**

**Billable item**

**Billable item code**

**Minimum billable size**

Standard ZRS storage

StorageZRS

None

(billed based on actual size)

Infrequent Access (IA) ZRS storage

ChargedDatasizeZRS

64 KB

(Objects smaller than 64 KB are billed as 64 KB. Objects that are 64 KB or larger are billed based on their actual size.)

Archive ZRS storage

ChargedDataSizeArcZRS

### **Capacity for insufficient duration (locally redundant storage)**

**Billable item**

**Billable item code**

**Calculation method for minimum storage duration**

Infrequent Access LRS capacity stored for less than the minimum storage duration

LessthanMonthDatasize

The minimum storage duration starts from the Last-Modified time of the object in OSS.

Insufficient storage duration of Archive LRS capacity

LessthanMonthDatasize

Insufficient Cold Archive LRS capacity for the specified duration

EarlyDeletionCA

The minimum storage duration starts from the time the object was converted to the Cold Archive or Deep Cold Archive storage class.

Insufficient storage duration in Deep Cold Archive Storage (LRS)

EarlyDeletionDeepCA

To avoid early deletion fees, understand how the minimum storage duration is calculated for different storage classes. Ensure an object meets its minimum storage duration requirement before you convert its storage class or delete it. For more information, see [How do I avoid early deletion fees?](/help/en/oss/how-can-i-avoid-the-cost-of-insufficient-storage).

### Insufficient-duration capacity (zone-redundant storage)

**Billable item**

**Billable item code**

**Calculation method for minimum storage duration**

Infrequent Access ZRS storage for less than the minimum duration

LessthanMonthDatasizeZRS

The minimum storage duration starts from the Last-Modified time of the object in OSS.

Archive Storage (zone-redundant storage): Insufficient storage duration

LessthanMonthDatasizeArcZRS

## **Payment methods**

Different billing methods are supported for storage fees, depending on the object's storage class. The following 3 billing methods are supported: pay-as-you-go, storage plans, and Storage Capacity Units (SCUs).

### **Selection guide**

The following table describes the features and scenarios for each payment method to help you select the one that best suits your needs and reduces your storage costs.

**Payment method**

**Description**

**Features**

**Scenarios**

Pay-as-you-go

This is the default billing method for all billable items. You are billed for your actual usage after you use the resources.

Storage usage is unstable and difficult to predict.

Ideal for startups or new projects with unstable storage usage. Pay-as-you-go prevents resource waste. You pay only for what you use and can adjust resources as needed.

Storage plans

Storage plans are prepaid, discounted resource plans that can be used to offset fees for various storage billable items. When your bill is settled, usage is deducted from your plan first.

Storage usage for each storage class is stable and predictable.

If you are a large enterprise or have a long-running project with stable storage usage, you can use the corresponding resource plans to reduce storage costs. Storage plan sizes range from 40 GB to 20 PB.

[Storage Capacity Unit (SCU)](/help/en/oss/scu)

A subscription-based resource plan that can be used to offset fees for multiple storage billable items across various cloud products. You purchase SCUs in advance and use them to pay for your usage.

Can be used to offset fees for multiple OSS storage usage items and storage usage from other cloud storage products.

-   You incur fees for multiple types of storage usage when using OSS.
    
-   You also use other products such as NAS, Snapshot Service, and Cloud Backup.
    

### **Supported methods**

The following table lists the billing methods supported by each billable item in OSS.

**Billable item**

**Pay-as-you-go**

**Storage plan**

**Storage Capacity Unit (SCU)**

Standard ZRS storage

√

[Standard ZRS Storage Plan](https://common-buy-intl.aliyun.com/?commodityCode=oss_bag_intl&request=%7B%22ord_time%22:%221:Month%22,%22order_num%22:1,%22type%22:%22storage_std_zrs%22,%22region%22:%22cn-mainland%22,%22std_zrs_storage_intl_spec%22:%22100%22,%22pack%22:%22oss_bag_intl_20250214103942_0722%22%7D&regionId=cn-mainland)

√

Standard LRS storage

√

[Standard LRS Storage Plan](https://common-buy-intl.alibabacloud.com/?commodityCode=oss_bag_intl&request=%7B%22ord_time%22:%226:Month%22,%22order_num%22:1,%22type%22:%22storage_std_lrs%22,%22region%22:%22global%22,%22std_lrs_storage_intl_spec%22:%2240%22,%22pack%22:%22FPT_oss_bag_intl_absolute_1587092634%22%7D&regionId=global)

√

Infrequent Access (IA) ZRS storage

√

×

√

Infrequent Access (IA) LRS storage

√

[Infrequent Access (IA) LRS Storage Plan](https://common-buy-intl.alibabacloud.com/?commodityCode=oss_bag_intl&request=%7B%22ord_time%22:%221:Month%22,%22order_num%22:1,%22type%22:%22storage_ia_lrs%22,%22region%22:%22global%22,%22ia_lrs_storage_intl_spec%22:%22100%22,%22pack%22:%22FPT_oss_bag_intl_absolute_1587092500%22%7D&regionId=global)

√

Archive LRS storage

√

×

√

Cold Archive LRS storage

√

[Cold Archive LRS Storage Plan](https://common-buy-intl.aliyun.com/?commodityCode=oss_bag_intl&request=%7B%22ord_time%22:%221:Month%22,%22order_num%22:1,%22type%22:%22storage_coldarchive%22,%22region%22:%22cn-hongkong%22,%22coldarchive_storage_intl_spec%22:%22512000%22,%22pack%22:%22oss_bag_intl_20250217165456_0879%22%7D&regionId=cn-hongkong)

×

Deep Cold Archive LRS storage

√

×

×

Anywhere Bucket storage

√

×

×

Archive ZRS storage

√

×

×

Infrequent Access LRS storage shorter than the minimum duration

√

[Infrequent Access (IA) LRS Storage Plan](https://common-buy-intl.alibabacloud.com/?commodityCode=oss_bag_intl&request=%7B%22ord_time%22:%221:Month%22,%22order_num%22:1,%22type%22:%22storage_ia_lrs%22,%22region%22:%22global%22,%22ia_lrs_storage_intl_spec%22:%22100%22,%22pack%22:%22FPT_oss_bag_intl_absolute_1587092500%22%7D&regionId=global)

×

Minimum storage duration shortfall for Archive LRS

√

×

×

Cold Archive LRS Early Deletion Capacity

√

×

×

Deep Cold Archive LRS storage for less than the specified duration

√

×

×

The minimum storage duration for Infrequent Access ZRS is not met.

√

×

×

Archive Storage (zone-redundant storage) that does not meet the minimum storage duration

√

×

×

## **FAQ**

### After I purchase an IA LRS storage plan, why do I still receive a large bill for early deletion fees for IA LRS in a specific hourly billing cycle?

If IA objects are stored for a period significantly shorter than 720 hours, OSS calculates the entire early deletion fee at once. The purchased storage plan can offset only a portion of this fee. As a result, a large bill is generated in the hourly billing cycle after the data is converted to another storage class or deleted.

For example, assume you store 10 TB of data as IA LRS data at 06:00 on September 7, 2023. At 06:00 on September 8, 2023, 1 TB of the IA LRS data is moved to another storage class or deleted. In this case, the billable usage for this item (LessthanMonthDatasize) is 1 TB × (720 - 24) = 696 TB. If you purchase an with a capacity of 10 TB, the following rules apply:

-   If the bill for IA storage usage is generated first, the storage plan can offset 9 TB of IA storage usage and 1 TB of the early deletion usage. The excess early deletion usage (696 TB - 1 TB) is billed on a pay-as-you-go basis.
    
-   If the bill for the early deletion fee is generated first, the storage plan can offset 10 TB of the early deletion usage. The excess early deletion usage (696 TB - 10 TB) and the 9 TB of IA storage usage are billed on a pay-as-you-go basis.
    

### After I purchase an Archive LRS storage plan, why do I still receive a large bill for early deletion fees for Archive LRS in a specific hourly billing cycle?

If Archive objects are stored for a period significantly shorter than 1,440 hours, OSS calculates the entire early deletion fee at once. The purchased storage plan can offset only a portion of this fee. As a result, a large bill is generated in the hourly billing cycle after the data is converted to another storage class or deleted.

For example, assume you store 10 TB of data as Archive at 06:00 on September 7. At 06:00 on September 8, you convert the storage class of 1 TB of this data or delete it. The billable usage for the early deletion fee is 1 TB × (1,440 - 24) = 1,416 TB. Assume you purchased an Archive LRS storage plan with a capacity of 10 TB:

-   If the bill for Archive storage usage is generated first, the storage plan can offset 9 TB of Archive storage usage and 1 TB of the early deletion usage. The excess early deletion usage (1,416 TB - 1 TB) is billed on a pay-as-you-go basis.
    
-   If the bill for the early deletion fee is generated first, the storage plan can offset 10 TB of the early deletion usage. The excess early deletion usage (1,416 TB - 10 TB) and the 9 TB of Archive storage usage are billed on a pay-as-you-go basis.
    

### **Why are there recurring charges for capacity that does not meet the specified duration?**

For objects in the IA, Archive, Cold Archive, or Deep Cold Archive storage classes, if you convert their storage class or delete them before the minimum storage duration is met, an early deletion fee is charged.

-   If you delete an object in this scenario, the early deletion fee is charged only once.
    
-   If you overwrite an object in this scenario, you may be charged early deletion fees multiple times. For example, you upload an object to a bucket as an IA object. The minimum storage duration for IA objects is 30 days. If you upload an object with the same name (an overwrite operation) after 1 day, an early deletion fee for 29 days is charged. If you then overwrite or delete this object again after 3 more days, another early deletion fee for 27 days is charged.
    

## References

-   By default, OSS stores uploaded objects in the Standard storage class. If your business needs change, you can convert objects from the Standard storage class to the more cost-effective IA, Archive, Cold Archive, or Deep Cold Archive storage classes. For more information, see [Convert storage classes](/help/en/oss/user-guide/convert-storage-classes).
    
-   For billing examples of Infrequent Access (IA), Archive, Cold Archive, objects that are stored for less than the minimum storage duration, see [How are Objects billed when stored for less than the minimum storage duration?](/help/en/oss/billing-method-for-objects-whose-storage-duration-is-less-than-the-minimum-storage-duration#concept-2262827).
    
-   OSS charges storage fees for parts that are generated during a multipart upload based on the part's storage class, actual size, and storage duration. For more information, see [How are parts billed?](/help/en/oss/billing-method-for-parts#concept-2309827).
    
-   To query hourly metering data for OSS, see [OSS hourly data](/help/en/oss/query-oss-billing-data-generated-on-an-hourly-basis#reference-2093072).
    

-   To view detailed cost information, see [Query bills](/help/en/oss/query-bills#task-2191459).
