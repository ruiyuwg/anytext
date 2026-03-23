Queries the progress of a data replication task of a bucket.

## Request syntax

```
GET /?replicationProgress&rule-id=RuleId HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

All headers in a GetBucketReplicationProgress request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

rule-id

String

Yes

The ID of the data replication rule. You can call the GetBucketReplication operation to query the ID.

## Response headers

All headers in the response to a GetBucketReplicationProgress request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Response parameters

**Parameter**

**Type**

**Description**

ReplicationProgress

Container

The container that is used to store the progress of data replication tasks.

Parent nodes: none

Child nodes: Rule

Rule

Container

The container that stores the progress of the data replication task corresponding to each data replication rule.

Parent nodes: ReplicationConfiguration

Child nodes: ID, Destination, Status, and Progress

ID

String

The ID of the data replication rule.

Parent nodes: Rule

Child nodes: none

PrefixSet

Container

The container that stores prefixes. You can specify up to 10 prefixes in each data replication rule.

Parent nodes: Rule

Child nodes: Prefix

Prefix

String

The prefix that is used to specify the object to replicate. Only objects that match the prefix are replicated to the destination bucket.

Parent nodes: PrefixSet

Child nodes: none

Action

String

The operations that are synchronized to the destination bucket.

You can set Action to one or more of the following operation types. Default value: ALL.

-   ALL: PUT, DELETE, and ABORT operations are synchronized to the destination bucket.
    
-   PUT: Write operations are synchronized to the destination bucket, including PutObject, PostObject, AppendObject, CopyObject, PutObjectACL, InitiateMultipartUpload, UploadPart, UploadPartCopy, and CompleteMultipartUpload.
    

Parent nodes: Rule

Child nodes: none

Destination

Container

The container that stores information about the destination bucket.

Parent nodes: Rule

Child nodes: Bucket and Location

Bucket

String

The destination bucket to which the data is replicated.

Parent nodes: Destination

Child nodes: none

Location

String

The region in which the destination bucket is located.

Parent nodes: Destination

Child nodes: none

TransferType

String

The data transfer type that is used to transfer data in data replication.

-   internal: the data transfer type that uses the default data transfer link of Object Storage Service (OSS).
    
-   oss\_acc: the link in which data transmission is accelerated. You can set the TransferType parameter to oss\_acc only when you create CRR rules.
    

HistoricalObjectReplication

String

Indicates whether historical data from the source bucket is replicated to the destination bucket before data replication is enabled.

Default value: enabled. Valid values:

-   enabled: indicates that historical data is replicated to the destination bucket.
    
-   disabled: indicates that historical data is not replicated to the destination bucket. Only data uploaded to the source bucket after data replication is enabled for the source bucket is replicated.
    

Progress

Container

The container that stores the progress of the data replication task. This parameter is returned only when the data replication task is in the doing state.

Parent nodes: Rule

Child nodes: HistoricalObject and NewObject

HistoricalObject

String

The percentage of the replicated historical data. This element is valid only when HistoricalObjectReplication is set to enabled.

Parent nodes: Progress

Child nodes: none

NewObject

String

The time used to determine whether data is replicated to the destination bucket. Data that is written to the source bucket before the time is replicated to the destination bucket. The value of this element is in the GMT format.

Example: Thu, 24 Sep 2015 15:39:18 GMT.

Parent nodes: Progress

Child nodes: none

## Description

-   Sample requests
    
    ```
    GET /?replicationProgress&rule-id=test_replication_1 HTTP/1.1
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    Date: Thu, 24 Sep 2015 15:39:15 GMT
    Authorization: OSS qn6q**************:77Dv****************
    ```
    
-   Sample responses
    
    **Note**
    
    The TransferType parameter is contained in the XML body of the response only when the value of TransferType is set to oss\_acc in the request.
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 534B371674E88A4D8906****
    Date: Thu, 24 Sep 2015 15:39:15 GMT
    Content-Length: 234
    Content-Type: application/xml
    Connection: close
    Server: AliyunOSS
    
    <?xml version="1.0" ?>
    <ReplicationProgress>
     <Rule>
       <ID>test_replication_1</ID>
       <PrefixSet>
        <Prefix>source_image</Prefix>
        <Prefix>video</Prefix>
       </PrefixSet>
       <Action>PUT</Action>
       <Destination>
        <Bucket>target-bucket</Bucket>
        <Location>oss-cn-beijing</Location>
        <TransferType>oss_acc</TransferType>
       </Destination>
       <Status>doing</Status>
       <HistoricalObjectReplication>enabled</HistoricalObjectReplication>
       <Progress>
        <HistoricalObject>0.85</HistoricalObject>
        <NewObject>2015-09-24T15:28:14.000Z </NewObject>
       </Progress>
     </Rule>
    </ReplicationProgress>
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetBucketReplicationProgress:

-   [Java](/help/en/oss/developer-reference/data-replication-1)
    
-   [Python](/help/en/oss/developer-reference/data-replication-3)
    
-   [Go V2](/help/en/oss/developer-reference/v2-data-replication)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetBucketReplicationProgress operation, see [get-bucket-replication-progress](/help/en/oss/developer-reference/get-bucket-replication-progress).

## Error codes

**Error code**

**HTTP status code**

**Description**

NoSuchBucket

404 NotFound

The error message returned because the specified bucket does not exist.

NoSuchReplicationRule

404 NotFound

The error message returned because the specified rule ID does not exist.

NoSuchReplicationConfiguration

404 NotFound

The error message returned because no data replication rules are configured for the specified bucket.

TooManyReplicationRules

400 BadRequest

The error message returned because more than one data replication rule is configured in the request.

You can configure only one data replication rule in a single request.
