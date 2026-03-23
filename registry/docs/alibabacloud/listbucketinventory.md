ListBucketInventory retrieves all inventory tasks for a bucket in batches.

## **Notes**

To call ListBucketInventory to retrieve all inventory tasks from a bucket in batches, you must have the `oss:GetBucketInventory` permission. For more information, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

**Note**

-   A single request retrieves a maximum of 100 inventory configuration items. To retrieve more than 100 items, send multiple requests. Retain the token from each request to use as the parameter for the next request.
    
-   When calling this operation, ensure you have sufficient permissions to manage inventory tasks for the bucket. The bucket owner has this permission by default. If you lack this permission, request it from the bucket owner.
    

## Request syntax

-   With continuation-token
    
    ```
    GET /?inventory&continuation-token=xxx HTTP/1.1
    ```
    
-   Form without a continuation token
    
    ```
    GET /?inventory HTTP/1.1
    ```
    

## Response elements

**Name**

**Type**

**Description**

InventoryConfiguration

Container

Container for inventory configuration parameters.

IsTruncated

Boolean

Indicates whether all inventory tasks are listed.

Valid values: true or false

-   If false, all inventory tasks in the bucket are listed.
    
-   If true, not all inventory tasks in the bucket are listed. Use the value of the NextContinuationToken field as the continuation-token parameter for the next list request to get the next page of inventory configurations.
    

NextContinuationToken

String

If IsTruncated in the response is true and NextContinuationToken is not empty, use this field as the continuation-token parameter for the next list request.

Id

String

The user-specified inventory name. This name must be globally unique within the current bucket.

IsEnabled

Boolean

Indicates whether the inventory is enabled.

Valid values: true or false

-   If set to true, the inventory feature takes effect.
    
-   If set to false, no inventory is generated.
    

Filter

Container

The prefix for inventory filtering. After specifying a prefix, the inventory filters objects that match the prefix setting.

Prefix

String

The matching prefix for the filtering rule.

Parent node: Filter

Destination

Container

Container for information about inventory results.

OSSBucketDestination

Container

Information about the bucket where exported inventory results are stored.

Parent node: Destination

Format

String

The file format of the exported inventory file.

Valid value: CSV

Parent node: OSSBucketDestination

AccountId

String

The AccountId granted by the bucket owner.

Parent node: OSSBucketDestination

RoleArn

String

The role name to which the bucket owner grants operation permissions.

Format: acs:ram::uid:role/rolename

Parent node: OSSBucketDestination

Bucket

String

The bucket that stores the exported inventory files.

Parent node: OSSBucketDestination

Prefix

String

The storage path prefix for inventory files.

Parent node: OSSBucketDestination

Encryption

Container

The encryption method for inventory files.

Valid values: SSE-OSS, SSE-KMS, or Null

Parent node: OSSBucketDestination

SSE-OSS

Container

Container for the SSE-OSS encryption method.

Parent node: Encryption

SSE-KMS

Container

Container for the key used in the SSE-KMS encryption method.

Parent node: Encryption

KeyId

String

The KMS key ID.

Parent node: SSE-KMS

Schedule

Container

Container for inventory export cycle information.

Frequency

String

The export cycle for inventory files.

Valid values: Daily or Weekly

Parent node: Schedule

IncludedObjectVersions

String

Indicates whether to include object version information in the inventory.

Valid values: All or Current

-   If All, export all object version information.
    
-   If Current, export only the current object version information.
    

OptionalFields

Container

Container for configuration items to include in inventory results.

Field

Container

Configuration items included in inventory results.

Optional configuration items: Size, LastModifiedDate, TransitionTime, ETag, StorageClass, IsMultipartUploaded, EncryptionStatus, ObjectAcl, TaggingCount, ObjectType, Crc64

Parent node: OptionalFields

IncrementalInventory

Container

Configuration information for incremental inventory.

IsEnabled

Boolean

Indicates whether incremental inventory is enabled.

Valid values:

-   true: enabled
    
-   false: disabled
    

If true, the incremental inventory feature is enabled and is not affected by an upper-level enable=false setting.

Parent node: IncrementalInventory

Schedule

Container

The export cycle for incremental inventory.

Parent node: IncrementalInventory

Frequency

Positive integer

The export frequency for incremental inventory, in seconds.

The system currently uses a fixed cycle of 600 seconds. Each cycle automatically creates a directory prefix and generates a corresponding manifest file and multiple CSV files produced within that cycle. Custom frequency settings are not supported.

Parent node: Schedule

OptionalFields

Container

Set the configuration items to include in the incremental inventory.

Parent node: IncrementalInventory

Field

String

Configuration items included in the incremental inventory.

Parent node: OptionalFields

-   SequenceNumber: The serial number. Each record's SequenceNumber is unique. Records under the same bucket and object can be sorted by SequenceNumber, which usually ensures that sorted records follow a chronological order.
    
-   RecordType: Event type: CREATE, UPDATE\_METADATA, DELETE
    
    -   CREATE: All upload methods that occur under the selected prefix, such as Put/Post/Append/MultipartUpload/Copy.
        
    -   UPDATE\_METADATA: All metadata updates under the selected prefix are recorded in this type.
        
    -   DELETE: All deletion methods for files under the selected prefix, such as DeleteObject/DeleteMultipleObjects, DeleteMarker generation after versioning is enabled, and lifecycle deletion. Deletions include DeleteMarker and permanent deletion. Permanent deletion records only retain the core fields: `Bucket`, `Key`, `SequenceNumber`, `RecordType`, `RecordTimestamp`, and `VersionId`. All other columns are empty (null).
        
-   RecordTimestamp: The timestamp in Greenwich Mean Time (GMT) with millisecond precision. Example: "2024-08-25 18:08:01.024".
    
-   Requester: The Alibaba Cloud ID or Principal ID of the requester.
    
-   RequestId: The unique ID of the request.
    
-   SourceIp: The source IP address of the requester.
    
-   Key: The name of the object in the bucket, URL-encoded.
    
-   VersionId: The version ID of the object. This field appears only when the configured inventory rule is to export all versions.
    
    -   If versioning is not enabled for the bucket configured in the inventory rule, this field appears empty.
        
    -   If versioning is enabled for the bucket configured in the inventory rule, this field displays the object's VersionId.
        
-   IsDeleteMarker: Indicates whether the object version is a delete marker. This field appears only when the configured inventory rule is to export all versions.
    
    -   If versioning is not enabled for the bucket configured in the inventory rule, this field defaults to false.
        
    -   If versioning is enabled for the bucket configured in the inventory rule and the object is a delete marker, this field displays true. If the object is not a delete marker, this field displays false.
        
-   Size: The size of the object.
    
-   StorageClass: The storage class of the object.
    
-   LastModifiedDate: The last modified time of the object.
    
-   ETag: The ETag value of the object, used to identify the object's content. An ETag is created when an object is generated to identify its content.
    
    -   For objects created using the [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) interface, the ETag value is the MD5 hash of its content.
        
    -   For objects created by other methods, the ETag value is a unique value generated based on specific calculation rules, but it is not the MD5 hash of its content.
        
-   IsMultipartUploaded: Indicates whether the object was uploaded using multipart upload.
    
-   ObjectType: The object type.
    
-   ObjectAcl: The access control list (ACL) of the object.
    
-   Crc64: The CRC-64 of the object.
    
-   EncryptionStatus: Indicates whether the object is encrypted.
    

## Examples

-   Request example
    
    ```
      GET /?inventory HTTP/1.1
      Host: BucketName.oss.aliyuncs.com
      Date: Fri, 24 Feb 2012 03:55:00 GMT
      Authorization: authorization string
      Content-Type: text/plain
    ```
    
-   Response example
    
    ```
      HTTP/1.1 200 OK
      x-oss-request-id: 56594298207FB304438516F9
      Date: Sat, 30 Apr 2016 23:29:37 GMT
      Content-Type: application/xml
      Content-Length: length
      Connection: close
      Server: AliyunOSS
    
      <?xml version="1.0" encoding="UTF-8"?>
      <ListInventoryConfigurationsResult>
         <InventoryConfiguration>
            <Id>report1</Id>
            <IsEnabled>true</IsEnabled>
            <Destination>
               <OSSBucketDestination>
                  <Format>CSV</Format>
                  <AccountId>1000000000000000</AccountId>
                  <RoleArn>acs:ram::1000000000000000:role/AliyunOSSRole</RoleArn>
                  <Bucket>acs:oss:::destination-bucket</Bucket>
                  <Prefix>prefix1</Prefix>
               </OSSBucketDestination>
            </Destination>
            <Schedule>
               <Frequency>Daily</Frequency>
            </Schedule>
            <Filter>
               <Prefix>prefix/One</Prefix>
            </Filter>
            <IncludedObjectVersions>All</IncludedObjectVersions>
            <OptionalFields>
               <Field>Size</Field>
               <Field>LastModifiedDate</Field>
               <Field>ETag</Field>
               <Field>StorageClass</Field>
               <Field>IsMultipartUploaded</Field>
               <Field>EncryptionStatus</Field>
            </OptionalFields>
         </InventoryConfiguration>
         <InventoryConfiguration>
            <Id>report2</Id>
            <IsEnabled>true</IsEnabled>
            <Destination>
               <OSSBucketDestination>
                  <Format>CSV</Format>
                  <AccountId>1000000000000000</AccountId>
                  <RoleArn>acs:ram::1000000000000000:role/AliyunOSSRole</RoleArn>
                  <Bucket>acs:oss:::destination-bucket</Bucket>
                  <Prefix>prefix2</Prefix>
               </OSSBucketDestination>
            </Destination>
            <Schedule>
               <Frequency>Daily</Frequency>
            </Schedule>
            <Filter>
               <Prefix>prefix/Two</Prefix>
            </Filter>
            <IncludedObjectVersions>All</IncludedObjectVersions>
            <OptionalFields>
               <Field>Size</Field>
               <Field>LastModifiedDate</Field>
               <Field>ETag</Field>
               <Field>StorageClass</Field>
               <Field>IsMultipartUploaded</Field>
               <Field>EncryptionStatus</Field>
            </OptionalFields>
         </InventoryConfiguration>
         <InventoryConfiguration>
            <Id>report3</Id>
            <IsEnabled>true</IsEnabled>
            <Destination>
               <OSSBucketDestination>
                  <Format>CSV</Format>
                  <AccountId>1000000000000000</AccountId>
                  <RoleArn>acs:ram::1000000000000000:role/AliyunOSSRole</RoleArn>
                  <Bucket>acs:oss:::destination-bucket</Bucket>
                  <Prefix>prefix3</Prefix>
               </OSSBucketDestination>
            </Destination>
            <Schedule>
               <Frequency>Daily</Frequency>
            </Schedule>
            <Filter>
               <Prefix>prefix/Three</Prefix>
            </Filter>
            <IncludedObjectVersions>All</IncludedObjectVersions>
            <OptionalFields>
               <Field>Size</Field>
               <Field>LastModifiedDate</Field>
               <Field>ETag</Field>
               <Field>StorageClass</Field>
               <Field>IsMultipartUploaded</Field>
               <Field>EncryptionStatus</Field>
            </OptionalFields>
         </InventoryConfiguration>
          ...
         <IsTruncated>true</IsTruncated>
         <NextContinuationToken>...</NextContinuationToken> 
      </ListInventoryConfigurationsResult>
    ```
    

## SDK

The SDKs for this interface are as follows:

-   [Java](/help/en/oss/developer-reference/bucket-inventory-5)
    
-   [Python V2](/help/en/oss/developer-reference/bucket-inventory-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/v2-bucket-inventory)
    
-   [Node.js](/help/en/oss/developer-reference/bucket-inventory-1)
    
-   [C++](/help/en/oss/developer-reference/bucket-inventory-4#undefined)
    
-   [.NET](/help/en/oss/developer-reference/bucket-inventory-2)
    

## **Command line tool ossutil**

For more information about the ossutil command corresponding to the ListBucketInventory API, see [list-bucket-inventory](/help/en/oss/developer-reference/list-bucket-inventory).
