Image caches accelerate image pulling and reduce the startup time of elastic container instances. This topic describes how to create, query, update, and delete an image cache.

## Create an image cache

You can manually create an image cache by using the Elastic Container Instance console or by calling an API operation.

**Note**

Elastic Container Instance supports automatic image cache creation. You can enable automatic match of image caches when you create an elastic container instance. Then, if no image cache is matched, the system automatically creates an image cache.

### **Precautions**

-   You are charged for the creation of image caches. We recommend that you learn relevant billing information in advance. For more information about billing of image caches, see [Image caches](/help/en/eci/product-overview/image-caches).
    
-   Before you create an image cache, you must estimate the total size of the images that you want to cache. If the total size of the images exceeds the specified cache size, the image cache cannot be created.
    
-   When you create an image cache, the system automatically creates an intermediate elastic container instance and a disk for the image cache. Do not delete the intermediate instance and the disk while the image cache is being created. If you delete the intermediate instance or the disk, the image cache cannot be created.
    
-   A temporary local snapshot and a specific number of regular snapshots are generated during the creation of the image cache. Do not delete these snapshots. If you delete these snapshots, the image cache becomes invalid.
    

### Create an image cache by calling an API operation

You can call the CreateImageCache API operation to create an image cache. The following table describes the parameters of the operation. For more information, see [CreateImageCache](/help/en/eci/developer-reference/api-eci-2018-08-08-createimagecache).

**Parameter**

**Type**

**Example**

**Description**

RegionId

string

cn-hangzhou

The region ID of the image cache.

SecurityGroupId

string

sg-uf66jeqopgqa9hdn\*\*\*\*

The ID of the security group.

VSwitchId

string

vsw-uf6h3rbwbm90urjwa\*\*\*\*

The vSwitch ID.

ImageCacheName

string

testcache

The name of the image cache.

Image.N

array

registry-vpc.cn-hangzhou.aliyuncs.com/eci\_open/nginx:1.15.10-perl

Container image N based on which the image cache is created.

ImageCacheSize

integer

20

The size of the image cache. Unit: GiB. Default value: 20.

RetentionDays

integer

7

The retention period of the image cache. When the specified retention period elapses, the image cache is deleted. Unit: days.

AutoMatchImageCache

boolean

false

Specifies whether to enable reuse of image layers. If you enable this feature and the image cache that you want to create and an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache. This accelerates the creation of the image cache. Default value: false.

Flash

boolean

true

Specifies whether to enable the instant image cache feature. This feature can accelerate the creation of image caches. Default value: false.

**Note**

When you create an image cache, you can configure AcrRegistryInfo parameters to pull images from a Container Registry Enterprise Edition instance without using a secret. For more information, see [Pull images from a Container Registry instance without using a secret](/help/en/eci/user-guide/pull-images-from-a-container-registry-enterprise-edition-instance-without-using-a-secret-2#topic-1986148).

### Create an image cache by using the Elastic Container Instance console

1.  In the left-side navigation pane of the [Elastic Container Instance console](https://eci.console.alibabacloud.com), click Image Cache. On the **Image Cache** page, click **Create Image Cache**.
    
2.  On the page that appears, configure parameters.
    
    Parameter description:
    
    -   Basic parameters: Configure parameters such as Region and Zone, Network Type, and Security Group to create an intermediate instance.
        
        **Important**
        
        If you want to pull images over the Internet and no NAT gateway is configured for the virtual private cloud (VPC), associate an elastic IP address (EIP) with the elastic container instance.
        
    -   Image Cache: Enter a name for the image cache, select the directory and version number of the image that is used to create the image cache, and configure the size and retention period of the image cache based on your requirements.
        
    -   Credential: If the image that is used to create the image cache is a private image, enter the address, username, and password of the image repository.
        
3.  Read and select Elastic Container Instance Terms of Service. Click **Create** and follow the on-screen instructions to complete the subsequent operations.
    
4.  Go back to the **Image Cache** page to view the new image cache.
    
    The creation progress of the image cache is displayed in the Status column. When the status changes to **Created**, the image cache is created. Click the ID of the image cache to go to the details page. View the basic information and events about the image cache.
    

## Query an image cache

After you create an image cache, you can query the information about the image cache. You can use the image cache if the image cache is in the Created (Ready) state.

You can use one of the following methods to query an image cache:

-   Call the DescribeImageCaches API operation. For more information, see [DescribeImageCaches](/help/en/eci/developer-reference/api-eci-2018-08-08-describeimagecaches).
    
-   In the [Elastic Container Instance console](https://eci.console.alibabacloud.com), go to the **Image Cache** page to view the information about the image cache such as its name and status. You can also click the ID of the image cache to view details such as events about the image cache.
    

## Update an image cache

If an image cache is in the Created (Ready) or UpdateFailed state, you can call the UpdateImageCache API operation to update the image cache, such as updating the container image, retention period, and image repository of the image cache. For more information, see [UpdateImageCache](/help/en/eci/developer-reference/api-eci-2018-08-08-updateimagecache).

## Delete an image cache

Image caches are snapshots. To retain image caches, you are charged for the snapshots. If you do not specify a retention period for an image cache, we recommend that you delete the image cache when it is no longer needed.

**Note**

The image caches that are automatically created by the system are managed by Alibaba Cloud. The image caches are automatically deleted after a period of time.

-   If the image caches are never used, they are automatically deleted 7 days after they are created.
    
-   If image caches are used, they are automatically deleted 30 days after they are last used.
    

You can use one of the following methods to delete an image cache:

-   Call the DeleteImageCache API operation. For more information, see [DeleteImageCache](/help/en/eci/developer-reference/api-eci-2018-08-08-deleteimagecache).
    
-   On the **Image Cache** page of the [Elastic Container Instance console](https://eci.console.alibabacloud.com), select the image cache that you want to delete and click **Delete Image Cache** below the image cache list.
