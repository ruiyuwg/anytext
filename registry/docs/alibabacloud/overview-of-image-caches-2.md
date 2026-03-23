When you create an elastic container instance, you can use image caches to accelerate image pulling and reduce the instance startup time. This topic describes the basic features and billable items of image caches. This topic also describes how to create and use image caches.

## Feature description

Before you run containers, Elastic Container Instance must pull the specified images. Pulling large images over an unstable network requires an extended period of time when elastic container instances start. To accelerate the creation of elastic container instances, Elastic Container Instance provides the image cache feature. You can create a snapshot based on an image and then use the snapshot to create elastic container instances. This prevents or minimizes the downloads of images layers and accelerates the creation of instances.

For example, if you create an elastic container instance based on a Flink image that is about 386.26 MB in size on Docker Hub, preparing the image requires 50 seconds. If you use an image cache, preparing the image does not consume time. This significantly reduces the time that is required for starting the instance.

**Important**

The reduced amount of time due to use of image caches varies based on the number of the images that are used to create the elastic container instance, the sizes of the images, and the network conditions of the image repository.

## Methods to create an image cache

An image cache can be manually or automatically created.

**Important**

We recommend that you use automatically created image caches to save costs. If you want to use an image cache to accelerate the creation when you create an elastic container instance for the first time, you must manually create an image cache in advance.

### **Manually create an image cache**

You can configure parameters such as the name and size of the image cache based on your business requirements. The following figure shows how to manually create an image cache.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6369282671/CAEQTxiBgIDL.qDD0xkiIDRkYWQwM2M0MTcyMDQxMDhhZGVhMDRlMjJhMjhjNWMw4724951_20241022135932.472.svg)

-   A snapshot is created each time an image cache is created. Manually created image caches are managed by yourself.
    
-   During the creation of the image cache, the system creates a temporary elastic container instance and attaches a temporary performance level-1 (PL1) enhanced SSD (ESSD) to the temporary instance. The temporary instance provides 2 vCPUs and 4 GiB of memory. The temporary instance pulls specified images to store in the ESSD. Then, the system creates a snapshot of the ESSD. After the image cache is created, the temporary instance and ESSD are automatically released.
    
-   The instant image cache feature reduces the amount of time required to create an image cache. After you enable this feature, the system enables the instant access feature to create a temporary on-premises snapshot. Then, you can use the on-premises snapshot to create elastic container instances.
    
    **Note**
    
    After the on-premises snapshot is created, the system begins to create a standard snapshot. During the creation of the standard snapshot, you can use the image cache that corresponds to the on-premises snapshot to create elastic container instances. After the standard snapshot is created, the system removes the on-premises snapshot. Then, you can use the image cache that corresponds to the standard snapshot to create elastic container instances.
    
-   The image cache reuse feature can accelerate the creation of an image cache. If you enable this feature, the system automatically matches existing image caches when an image cache is created. If existing image caches have duplicate image layers with the image cache that you want to create, the system reuses the duplicate image layers to accelerate the creation of the new image cache.
    

### **Automatically create an image cache**

You can enable automatic match of image caches when you create an elastic container instance. Then, if no image cache is matched, the system automatically creates an image cache while the system creates the elastic container instance. The following figure shows how to automatically create an image cache.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6369282671/CAEQTxiBgICTgqjD0xkiIGM3MDk3Y2YzYmU0YzQ3ZjM4MTEyZDZiMmVjMWE0MTRj4724951_20241022135932.472.svg)

-   A snapshot is created each time an image cache is created. Automatically created image caches are managed by Alibaba Cloud.
    
-   During the creation of the image cache, the system creates a temporary elastic container instance. The temporary instance pulls specified images to store in the temporary storage space of the instance. Then, the system creates a snapshot of the temporary storage space. After the image cache is created, the temporary instance is automatically released.
    
    **Note**
    
    By default, each elastic container instance is assigned a temporary storage space of 30 GiB. If the image that you specify is greater than 30 GiB in size, you must specify an additional size for the temporary storage space. For more information, see [Scale up the temporary storage space](/help/en/eci/user-guide/increase-the-capacity-of-the-temporary-storage-space-1).
    

### **Comparison**

The following table compares manually created image caches with automatically created image caches.

**Item**

**Manually created image cache**

**Automatically created image cache**

Name

You can specify a name for the instance.

The system automatically generates a name in the format of `auto-create-for-instance ID`.

Size

The default value is 20 GiB. You can specify another value.

The default value is 30 GiB. If you specify a size for the temporary storage space when you create the elastic container instance, the size of the image cache is equal to the sum of 30 GiB and the size of the temporary storage space.

Retention period

By default, manually created image caches are permanently retained. You can also configure the retention period in days. Manually created image caches are automatically deleted after their retention periods elapse.

By default, the retention period is managed by Alibaba Cloud.

-   If the image caches are never used, they are automatically deleted 7 days after they are created.
    
-   If image caches are used, they are automatically deleted 30 days after they are last used.
    

Image cache reuse

You can enable this feature to reuse image layers that are duplicate on existing image caches and the image cache to be created. This accelerates the creation of the image cache.

Not supported

Instant image cache

You can enable this feature to create a temporary local snapshot and make the image cache instantly available.

Not supported

Quota

You can view the quota by calling the [ListUsage](/help/en/eci/developer-reference/api-eci-2018-08-08-listusage) API operation. You can also view the quota by logging on to Elastic Container Instance console and clicking **Privileges and Quotas** in the left-side navigation pane.

If the quota cannot meet your business requirements, submit a ticket to request a quota increase.

You can view the quota by calling the [ListUsage](/help/en/eci/developer-reference/api-eci-2018-08-08-listusage) API operation.

If the quota cannot meet your business requirements, submit a ticket to request a quota increase.

Elimination policy

By default, you can no longer manually create image caches when the number of existing image caches reaches the quota limit.

You can call the CreateImageCache or UpdateImageCache API operation and then set the EliminationStrategy parameter to LRU. This way, the system automatically deletes the least recently used (LRU) image caches when the number of existing image caches reaches the quota limit.

When the number of existing image caches reaches the quota limit, the system automatically deletes the least recently used image caches based on the LRU rule.

Cost of use

You are charged for creation and use of manually created image caches.

You are charged only for use, not for creation of automatically created image caches.

## Modes to use an image cache

You can use the image cache feature to accelerate the creation of an elastic container instance. If you want to use the image cache feature to create an elastic container instance, you can configure automatic match of image caches or specify an image cache to create the instance.

**Usage method**

**Description**

Configure automatic match of image caches

The system automatically matches the most suitable image cache. The system matches image caches in the following order:

1.  Searches for all qualified image caches in the region. The size of each image cache satisfies the size requirements of the temporary storage space of the elastic container instance.
    
2.  Selects the most suitable image cache based on the match policies. Image caches are matched based on the following attributes in descending order of priority: the match degree, size, and creation time of the image cache.
    
    -   Match degree: indicates how an image cache matches the elastic container instance in the image repository and version. The image cache that has the highest match degree is assigned the highest priority.
        
    -   Image cache size: indicates the size of the image cache. The image cache whose size is closest to the size of the elastic container instance is assigned the highest priority.
        
    -   Creation time: indicates the time when the image cache is created. The most recently created image cache is assigned the highest priority.
        

**Note**

If no image cache is matched, the system automatically creates an image cache when the system creates the elastic container instance. Images are pulled when the system creates the instance. We recommend that you configure the image pulling policy to IfNotPresent to prevent repeatedly downloading image layers and affecting the use of the image cache feature.

Specify an image cache

Specify the image cache that you want to use to create the elastic container instance. The image cache must be in the Ready state.

## Precautions

-   A single image cache can contain up to 20 images.
    
-   To create an image cache, you need to pull container images. Therefore, the creation period of the image cache depends on factors such as the number of the images to be pulled, the size of the image used to create the image cache, and network conditions.
    
-   When you manually create an image cache, the container image that you specify is used. When the system automatically creates an image cache, the container image that you declare in the elastic container instance is used.
    
    -   If you select a private image, which is not hosted in Alibaba Cloud Container Registry, you must provide the access credentials including the IP address, username, and password of the repository to which the private image belongs.
        
    -   If the image that you select, such as a Docker image, needs to be pulled over the Internet, you must configure an elastic IP address (EIP) or a NAT gateway for the elastic container instance. For more information, see [Enable Internet access for elastic container instances](/help/en/eci/user-guide/enable-internet-access#topic-1860106).
        
    -   If the image cannot be pulled due to some reasons such as a timeout error of the remote repository, we recommend that you use ACR to upload the image to an Alibaba Cloud image repository.
        
-   For manually created image caches, we recommend that you configure the retention period when you create the image caches to avoid unnecessary snapshot fees. For automatically created image caches, Alibaba Cloud manages the snapshots. You do not need to care for the retention period of the snapshots.
    
-   After an image cache is created, you can learn about the creation process of the image cache through the creation events of the image cache. The system can retain up to 50 latest creation events.
    

## Billing

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

For more information about billing of image caches, see [Image caches](/help/en/eci/product-overview/image-caches#topic-2240706).
