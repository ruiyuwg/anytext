Queries the data replication rules that are configured for a bucket.

## Request syntax

```
GET /?replication HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com 
Date: GMT Date
Authorization: SignatureValue
```

## Response parameters

Parameter

Type

Example

Description

ReplicationConfiguration

Container

N/A

The container that stores data replication configurations.

Parent nodes: none

Child nodes: Rule

Rule

Container

N/A

The container that stores the data replication rules.

Parent nodes: ReplicationConfiguration

Child nodes: Destination, HistoricalObjectReplication, Status, and ID

ID

String

test\_replication\_1

The ID of the data replication rule.

Parent nodes: Rule

Child nodes: none

PrefixSet

Container

N/A

The container that stores prefixes. You can specify up to 10 prefixes in each data replication rule.

Parent nodes: Rule

Child nodes: Prefix

Prefix

String

source1

The prefixes of the objects that are replicated to the destination bucket.

Parent nodes: PrefixSet

Child nodes: none

Action

String

PUT

The operations that are synchronized to the destination bucket.

You can set the Action parameter to one or more of the following operation types. Default value: ALL.

-   ALL: indicates that the PUT, DELETE, and ABORT operations are synchronized to the destination bucket.
    
-   PUT: indicates that write operations are synchronized to the destination bucket, including the PutObject, PostObject, AppendObject, CopyObject, PutObjectACL, InitiateMultipartUpload, UploadPart, UploadPartCopy, and CompleteMultipartUpload operations.
    

Parent nodes: Rule

Child nodes: none

Status

String

doing

The status of the data replication task.

Valid values:

-   starting: OSS creates a data replication task after a data replication rule is configured. In this case, the state of the task is starting.
    
-   doing: The state of a data replication task after a data replication rule takes effect. In this case, the state of the task is doing.
    
-   closing: OSS clears a data replication task after the corresponding data replication rule is deleted. In this case, the state of the task is closing.
    

Parent nodes: Rule

Child nodes: none

Destination

Container

N/A

The container that stores information about the destination bucket.

Parent nodes: Rule

Child nodes: Bucket and Location

Bucket

String

destbucket

The destination bucket to which data is replicated.

Parent nodes: Destination

Child nodes: none

Location

String

oss-cn-beijing

The region in which the destination bucket is located.

Parent nodes: Destination

Child nodes: none

TransferType

String

oss\_acc

The data transfer type that is used to transfer data in data replication. The TransferType parameter is contained in the response only when the value of the TransferType parameter is set to oss\_acc in the request.

Default value: internal. Valid values:

-   internal: the data transfer type that uses the default data transfer link of OSS.
    
-   oss\_acc: the link in which data transmission is accelerated. You can set the TransferType parameter to oss\_acc only when you create CRR rules.
    

HistoricalObjectReplication

String

disabled

Indicates whether historical data from the source bucket is replicated to the destination bucket before data replication is enabled. Default value: enabled.

Default value: disabled. Valid values:

-   enabled: indicates that historical data is replicated to the destination bucket.
    
-   disabled: indicates that historical data is not replicated to the destination bucket. Only data uploaded to the source bucket after data replication is enabled for the source bucket is replicated.
    

Parent nodes: Rule

Child nodes: none

SyncRole

String

aliyunramrole

The role that is used for data replication. The parameter is contained in the response only when the destination object is encrypted by using server-side encryption (SSE) that uses customer master keys (CMKs) managed by Key Management Service (KMS) for encryption (SSE-KMS).

RTC

Container

N/A

The container that stores the status of the RTC feature.

Parent nodes: Rule

Child nodes: Status

Status

String

enbaled

The status of the RTC feature. This parameter is included in the response only when the RTC feature is in the enabling or enabled state.

Default value: disabled. Valid values:

-   enabling
    
-   enabled
    
-   disabled
    

Parent nodes: RTC

Child nodes: none

## Examples

-   Sample request
    

```
GET /?replication HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com 
Date: Thu, 24 Sep 2015 15:39:15 GMT
Authorization: OSS qn6q**************:77Dv****************
```

-   Sample response
    

```
HTTP/1.1 200 OK
x-oss-request-id: 534B371674E88A4D8906**** 
Date: Thu, 24 Sep 2015 15:39:15 GMT
Content-Length: 186
Content-Type: application/xml 
Connection: close
Server: AliyunOSS
<?xml version="1.0" ?>
<ReplicationConfiguration>
  <Rule>
    <ID>test_replication_1</ID>
    <PrefixSet>
      <Prefix>source1</Prefix>
      <Prefix>video</Prefix>
    </PrefixSet>
    <Action>PUT</Action>
    <Destination>
      <Bucket>destbucket</Bucket>
      <Location>oss-cn-beijing</Location>
      <TransferType>oss_acc</TransferType>
    </Destination>
    <Status>doing</Status>
    <HistoricalObjectReplication>enabled</HistoricalObjectReplication>
    <SyncRole>aliyunramrole</SyncRole>
    <RTC>
      <Status>enabled</Status>
    </RTC>
  </Rule>  
</ReplicationConfiguration>
```

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetBucketReplication:

-   [Java](/help/en/oss/developer-reference/data-replication-1)
    
-   [Python](/help/en/oss/developer-reference/data-replication-3)
    
-   [Go V2](/help/en/oss/developer-reference/v2-data-replication)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetBucketReplication operation, see [get-bucket-replication](/help/en/oss/developer-reference/get-bucket-replication).

## Error codes

Error code

HTTP status code

Description

NoSuchBucket

404 NotFound

The error message returned because the specified bucket does not exist.

NoSuchReplicationConfiguration

404 NotFound

The error message returned because no data replication rules are configured for the specified bucket.
