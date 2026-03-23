Create a bucket in Object Storage Service (OSS). A bucket is a container for objects. Create a bucket before uploading objects to OSS.

## Usage notes

-   Creating a bucket requires the `oss:PutBucket` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   For ossutil 1.6.16 and later, use `ossutil` as the binary name on all operating systems. For earlier versions, update the binary name based on your operating system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   Starting from 10:00 (UTC+8) on October 13, 2025, OSS enables [Block Public Access](/help/en/oss/user-guide/block-public-access) by default for new buckets created through the API, OSS SDKs, or ossutil. This phased adjustment applies to all regions. For the schedule of each region, see [\[Official Announcement\] Adjustment to Public Access Blocking Configurations for Newly Created Buckets](https://www.alibabacloud.com/en/notice/block_public_access_enabled_by_default_for_buckets_created_by_calling_api_operations_using_oss_sdks_482). After Block Public Access is enabled, public access permissions such as public ACLs (public-read and public-read-write) and bucket policies that allow public access cannot be configured. To allow public access, disable this feature after bucket creation.
    

## Create a bucket by specifying options in the command

Command syntax

```
ossutil mb oss://bucketname
[--acl <value>]
[--storage-class <value>]
[--redundancy-type <value>]
```

The following table describes the parameters and options.

**Parameter/Option**

**Description**

bucketname

The name of the bucket. Bucket names must be globally unique within OSS. The name cannot be changed after creation.

\--acl

The access control list (ACL) of the bucket. Valid values:

-   `private` (default): Only the bucket owner can read and write objects in the bucket. Other users cannot access the objects.
-   `public-read`: Only the bucket owner can write objects. All users, including anonymous users, can read objects. Exercise caution with this setting. It may cause unauthorized data access and unexpected fees.
-   `public-read-write`: All users, including anonymous users, can read and write objects. This may cause unauthorized data access, unexpected fees, and potential legal risks from prohibited content uploads. Do not set this value unless necessary.

\--storage-class

The storage class of the bucket. Valid values:

-   `Standard` (default): For frequently accessed data.
-   `IA`: Infrequent Access. For data accessed about once or twice a month. Minimum storage period: 30 days. Minimum billable size: 64 KB. Objects are accessible in real time. Data retrieval fees apply.
-   `Archive`: For long-term data storage. Minimum storage period: 60 days. Minimum billable size: 64 KB. Restore objects before access. Restoration takes about 1 minute. Data retrieval fees apply.
-   `ColdArchive`: For rarely accessed long-term data. Minimum storage period: 180 days. Minimum billable size: 64 KB. Restore objects before access. Restoration time varies by object size and restoration mode. Data retrieval fees apply.

**Note**

OSS on CloudBox supports only the Standard storage class. For more information about storage classes, see [Storage classes](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb).

\--redundancy-type

The redundancy type of the bucket. Valid values:

-   `LRS` (default): Locally redundant storage. OSS stores copies of each object across different devices in the same zone. This ensures data reliability and availability even if two storage devices fail simultaneously.
-   `ZRS`: Zone-redundant storage. OSS stores copies of each object across multiple zones in the same region. Data remains accessible even if an entire zone becomes unavailable.

**Important**

-   ZRS is available in the following regions: China (Shenzhen), China (Beijing), China (Hangzhou), China (Shanghai), China (Hong Kong), Singapore, and Indonesia (Jakarta). ZRS increases storage costs and cannot be disabled after it is enabled. Exercise caution when selecting this redundancy type.
-   OSS on CloudBox does not support this parameter.

Examples

-   Create a bucket named examplebucket: If no region is specified, the bucket is created in the region mapped to the endpoint in the ossutil configuration file. For example, if the endpoint is `https://oss-cn-hangzhou.aliyuncs.com`, the bucket is created in China (Hangzhou).
    
    ```
      ossutil mb oss://examplebucket
    ```
    
-   Create a bucket named examplebucket with the ACL set to private, the storage class set to IA, and the redundancy type set to ZRS:
    
    ```
      ossutil mb oss://examplebucket --acl private --storage-class IA --redundancy-type ZRS
    ```
    
-   On success, the output is similar to:
    
    ```
      0.335189(s) elapsed
    ```
    

## Create a bucket based on an XML file specified in the command

Command syntax

```
ossutil mb oss://bucketname local_xml_file
```

The following table describes the parameters.

**Parameter**

**Description**

bucketname

The name of the bucket.

local\_xml\_file

The path to a local XML file that contains bucket configurations. Example: `localfile.xml`.

Examples

1.  Define bucket configurations in an XML file named `localfile.xml`:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <CreateBucketConfiguration>
           <StorageClass>IA</StorageClass>
           <DataRedundancyType>LRS</DataRedundancyType>
       </CreateBucketConfiguration>
    ```
    
2.  Create a bucket from the local XML file:
    
    ```
       ossutil mb oss://examplebucket localfile.xml
    ```
    

## Common options

To create a bucket in a different region, use the `-e` option to specify the endpoint of that region. To create a bucket under a different Alibaba Cloud account, use the `-i` option for the AccessKey ID and the `-k` option for the AccessKey secret.

For example, create a bucket named examplebucket in China (Shanghai) under a different Alibaba Cloud account:

```
ossutil mb oss://examplebucket -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For more information about common options, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).
