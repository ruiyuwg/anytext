You can query bucket information on the Overview page of the bucket, including basic information, storage usage, access traffic, and endpoints.

## Basic information

The Basic Information section displays basic bucket information, such as creation time and bucket-level feature settings. Bucket-level feature settings include versioning and Real-time Access of Archive Objects.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2605534171/p790788.png)

## Usage

The Usage section displays the storage usage, traffic statistics for the current month, number of requests for the current month, number of objects in the bucket, and number of parts in the bucket.

**Important**

The data in the Usage section is not updated in real time. A latency of 1 to 2 hours exists. All data is provided for reference only and is not used to calculate fees.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2605534171/p790792.png)

The following table describes each metric.

-   **Storage usage**: shows the storage usage of the current bucket. You can query the total storage usage of data in all storage classes (excluding the usage of Elastic Compute Service snapshots) or the storage usage of data in a specific storage class.
    
    **Storage usage**
    
    **Description**
    
    **Total Storage Capacity (Excluding ECS Snapshots)**
    
    The storage usage of objects in different storage classes in the bucket, excluding Elastic Compute Service (ECS) snapshots.
    
    **Standard (LRS)** or **Standard (ZRS)**
    
    The storage usage of Standard objects in the bucket. If the bucket is a Standard locally redundant storage (LRS) bucket, the **Standard (LRS)** storage usage is displayed. If the bucket is a Standard zone-redundant storage (ZRS) bucket, the **Standard (ZRS)** storage usage is displayed. For more information, see [Overview](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb).
    
    **IA (LRS)** or **IA (ZRS)**
    
    The storage usage of Infrequent Access (IA) objects in the bucket. Whether the IA (LRS) or IA (ZRS) storage usage is displayed depends on the storage redundancy type of the bucket.
    
    -   **Actual storage usage**: shows the actual storage usage of IA objects.
        
    -   **Billed storage usage**: shows the billed storage usage of IA objects. The minimum billable size for IA objects is 64 KB. Objects smaller than 64 KB are charged as 64 KB. If a bucket contains a large number of small objects, billed storage usage may be greater than actual storage usage. For more information, see [Overview](/help/en/oss/user-guide/overview-53/#section-t3z-lxt-tdb).
        
    
    **Archive** **(LRS)** or **Archive (ZRS)**
    
    The storage usage of Archive objects in the bucket. Whether the Archive (LRS) or Archive (ZRS) storage usage is displayed depends on the storage redundancy type of the bucket.
    
    -   **Actual storage usage**: shows the actual storage usage of Archive objects.
        
    -   **Billed storage usage**: shows the billed storage usage of Archive objects. The minimum billable size for Archive objects is 64 KB. Objects smaller than 64 KB are charged as 64 KB. If a bucket contains a large number of small objects, billed storage usage may be greater than actual storage usage. For more information, see [Overview](/help/en/oss/user-guide/overview-53/#section-v3z-lxt-tdb).
        
    
    **Cold Archive**
    
    The storage usage of Cold Archive objects in the bucket.
    
    -   **Actual storage usage**: shows the actual storage usage of Cold Archive objects.
        
    -   **Billed storage usage**: shows the billed storage usage of Cold Archive objects. The minimum billable size for Cold Archive objects is 64 KB. Objects smaller than 64 KB are charged as 64 KB. If a bucket contains a large number of small objects, billed storage usage may be greater than actual storage usage. For more information, see [Overview](/help/en/oss/user-guide/overview-53/#section-gc3-mvh-d7b).
        
    
    **Deep Cold Archive**
    
    The storage usage of Deep Cold Archive objects in the bucket.
    
    -   **Actual storage usage**: the actual storage usage of Deep Cold Archive objects.
        
    
    -   **Billed storage usage**: The billed storage usage of Deep Cold Archive objects. The minimum billable size for Deep Cold Archive objects is 64 KB. Objects smaller than 64 KB are charged as 64 KB. If a bucket contains a large number of small objects, billed storage usage may be greater than actual storage usage. For more information, see [Overview](/help/en/oss/user-guide/overview-53/#section-gc3-mvh-d7b).
        
    
-   **Traffic for the current month**: shows the total traffic of the bucket in the current month.
    
    -   **Outbound Traffic over Internet This Month**: shows the traffic generated in the current month for browsing or downloading objects in the bucket over the Internet.
        
    -   **Inbound Traffic Over Internet This Month**: shows the traffic generated in the current month for uploading data to the bucket over the Internet.
        
    -   **CDN Back-to-Origin Traffic This Month**: shows the origin traffic generated in the current month for browsing or download objects in the bucket over Content Delivery Network (CDN).
        
-   **Number of requests for the current month**: shows the total number of API calls on the bucket in the current month.
    
    -   **GET Requests This Month**: shows the number of all GET requests to the bucket in the current month. For more information, see [View the resource usage of a bucket](/help/en/oss/user-guide/view-the-resource-usage-of-a-bucket#table-p2o-dgw-84r).
        
    -   **PUT Requests This Month**: shows the number of all PUT requests to the bucket in the current month. For more information, see [View the resource usage of a bucket](/help/en/oss/user-guide/view-the-resource-usage-of-a-bucket#table-p2o-dgw-84r).
        
-   **Objects**: shows the number of objects in the current bucket.
    
-   **Parts**: shows the number of parts in the current bucket. Parts are generated by multipart uploads and resumable uploads. We recommend that you delete unnecessary parts by using lifecycle rules to reduce storage costs. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    

## Endpoints and domain names

The Port section displays endpoints and domain names of the bucket.

-   **Endpoint**: the endpoints that are used to access OSS. An endpoint is required to access OSS by using OSS SDKs for other OSS tools. For more information about endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   **Domain Name**: the domain names that are used to directly access the bucket. The domain names are in the `BucketName.Endpoint` format, where BucketName specifies the name of the bucket and Endpoint specifies the endpoint of the region in which the bucket is located. For more information about domain names of a bucket, see [OSS domain names](/help/en/oss/user-guide/oss-domain-names#concept-hh2-4tv-tdb).
    

![endpoint](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8624224861/p313316.jpg)

The following table describes the categories of endpoints and bucket domain names.

**Category**

**Endpoint**

**Bucket domain**

**Access over Internet**

The endpoint that is used to access OSS over the Internet.

The domain name that is used to access the bucket over the Internet.

**Access from ECS over the Classic Network (internal network)**

The endpoint that is used to access OSS over the classic network from an ECS instance in the same region. This type of access does not incur traffic fees.

The bucket domain name that is used to access the bucket over the classic network from an ECS instance in the same region. This type of access does not incur traffic fees.

**Access from ECS over the VPC (internal network)**

The endpoint that is used to access OSS over a virtual private cloud (VPC) from an ECS instance in the same region. This type of access does not incur traffic fees.

The bucket domain name that is used to access the bucket over a VPC from an ECS instance in the same region. This type of access does not incur traffic fees.

**Transfer Acceleration-based Access**

The acceleration endpoint. Before you use this acceleration endpoint, you must enable transfer acceleration for the bucket. For more information, see [Transfer acceleration](/help/en/oss/user-guide/transfer-acceleration#concept-1813960).

The OSS-accelerated domain name of the bucket. To have an OSS-accelerated domain name of the bucket, you must first enable transfer acceleration for the bucket.

**OSS-HDFS**

The endpoint that is used by OSS-HDFS to access OSS. Before you can use this endpoint, you must enable OSS-HDFS. For more information, see [Enable OSS-HDFS and grant access permissions](/help/en/oss/user-guide/enable-oss-hdfs-service#task-2201339).

The OSS-HDFS domain name that is used to access a bucket. To have a bucket domain name of this type, you must first enable OSS-HDFS for the bucket. For more information, see [Enable OSS-HDFS and grant access permissions](/help/en/oss/user-guide/enable-oss-hdfs-service#task-2201339).
