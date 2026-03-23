This topic describes the billing rules of image caches and provides billing examples.

## Description

You can use image caches to accelerate image pulling and reduce the startup time of elastic container instances. Image caches are classified into manually created image caches and automatically created image caches. The following table describes the billing rules of the different types of image caches.

**Phase**

**Manually created image cache**

**Automatically created image cache**

Create an image cache

Billable items:

-   Temporary resources (the elastic container instance and the disk that are used to create an image cache)
    
-   The snapshot
    

Free of charge

Use an image cache

Billable item: the disk.

If the image cache exceeds 30 GiB in size, you must expand the temporary storage space. You are charged for the extra space.

**Note**

After the image cache is created, you can view its size in the creation event information. For more information, see [Overview of image caches](/help/en/eci/user-guide/overview-of-image-caches-2#topic-2131957).

### Manually created image cache

-   Create an image cache
    
    Billable item
    
    Description
    
    References
    
    Temporary resources (the elastic container instance and the disk that are used to create the image cache)
    
    When you manually create an image cache, the system automatically creates a temporary elastic container instance and attaches a temporary performance level-1 (PL1) Enterprise SSD (ESSD) to the temporary instance. The temporary instance provides 2 vCPUs and 4 GiB of memory. Then, you can use the temporary instance and ESSD to create the image cache. After you create the image cache, the instance and the ESSD are automatically released. You are no longer charged for the released resources.
    
    -   **Billing method**: pay-as-you-go.
        
    -   **Billing formula**: Price = (Unit price of vCPUs × 2 + Unit price of memory × 4 + Unit price of disks × Storage capacity of the disk) × Running duration of the instance.
        
    -   **Formula description**:
        
        -   Unit price
            
            -   vCPUs: USD 0.0000077 per second.
                
            -   Memory (GiB): USD 0.00000096 per second.
                
            -   Disk: Refer to the information on the Storage tab on the Pricing tab of the [Elastic Compute Service buy page](https://www.alibabacloud.com/product/ecs).
                
        -   Storage capacity of the disk: This value is equal to the size of the image cache.
            
        -   Running duration of the instance: The running duration of the instance varies based on the size of the image cache. To create the image cache, the temporary elastic container instance must pull an image. The temporary instance requires a longer period of time to pull an image that has a larger size. As a result, the running duration of the temporary instance is longer if you create an image cache that has a larger size.
            
    
    -   [Billing of elastic container instances](/help/en/eci/product-overview/elastic-container-instances#topic-2240704)
        
    -   [Block storage devices](/help/en/ecs/block-storage-devices#concept-1937442)
        
    
    Snapshots
    
    One image cache corresponds to one snapshot. The lifecycle of the snapshot is the same as the lifecycle of the image cache. You must pay the snapshot storage fee to retain the image cache.
    
    [Snapshots](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb)
    
-   Use an image cache
    
    Billable item
    
    Description
    
    References
    
    Disks
    
    If you use a manually created image cache to create an elastic container instance, the system automatically attaches a pay-as-you-go PL1 ESSD to the instance. If no PL1 ESSD is available, an ultra disk is attached. The storage capacity of the disk is equal to the size of the image cache. The disk is created and released together with the instance. You are charged for the elastic container instance and the disk.
    
    [Block storage devices](/help/en/ecs/block-storage-devices#concept-1937442)
    

### Automatically created image cache

When you create an elastic container instance, you can enable automatic match of image caches. If no image cache is matched, the system creates a matched image cache during the instance creation.

When you use an automatically created image cache to create an elastic container instance, you may be charged for the additional capacity of the temporary storage space based on the size of the image cache.

Billable item

Description

Additional capacity of the temporary storage space

If the image cache that you used to create the elastic container instance is greater than 30 GiB in size, increase the capacity of the temporary storage space of the elastic container instance. You are charged for the elastic container instance and the additional capacity of the temporary storage space.

[Temporary storage space](/help/en/eci/product-overview/temporary-storage-space#topic-2241359)

## Billing examples

**Note**

The following examples are provided only for reference. The actual prices in your bills take precedence.

### Example 1: Create and use a manually created image cache

For example, you create an image cache whose size is 40 GiB in the China (Hangzhou) region and retain the image cache for 3 days. When you create the image cache, you disable the instant image cache feature and the temporary elastic container instance runs for 5 minutes (300 seconds). The storage capacity of the snapshot that corresponds to the image cache is 2 GiB.

You are charged for the following resources when you create the image cache:

-   Temporary resource: (0.0000077 × 2 + 0.00000096 × 4 + 0.05/100/3,600 × 40) × 300 = USD 0.007449.
    
-   Snapshot: 0.02/30 × 2 × 3 = USD 0.004.
    

Total creation price = Temporary resource price + Snapshot price = 0.007449 + 0.004 = USD 0.011449.

If you use the image cache to create an elastic container instance and the instance runs for 3 hours, you are charged for the instance and disk. The disk price is equal to the usage fees of the image cache. Price = 0.05/100 × 40 × 3 = USD 0.06.

### Example 2: Use an automatically created image cache

For example, you create Elastic Container Instance A in the China (Hangzhou) region. The image that you use to create the instance is not greater than 30 GiB in size. When you create the instance, you enable automatic match of image caches. If no image cache is matched, the system automatically creates an image cache. You are not charged for the automatically created image cache.

If you create Elastic Container Instance B based on the image cache, you are charged only for the elastic container instance.
