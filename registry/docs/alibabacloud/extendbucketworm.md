Extends the retention period of objects in an Object Storage Service (OSS) bucket whose retention policy is locked.

**Note**

If the retention policy ID specified in the request does not exist, OSS returns HTTP status code 404.

## Usage notes

By default, a time-based retention policy is in the InProgress state after the policy is created for a bucket. The state remains valid for 24 hours. Within the 24 hours, the retention policy protects the data in the bucket.

-   In the 24-hour window after the retention policy is enabled: If the retention policy is not locked, the bucket owner and authorized users can delete this policy. If the retention policy is locked, the protection period of the policy cannot be shortened and the policy cannot be deleted. The protection period can only be prolonged.
    
-   24 hours after the retention policy is enabled: If the retention policy is not locked, the policy becomes invalid.
    

If a bucket contains objects that are within the protection period, you cannot delete the bucket or its retention policy. If a bucket is deleted, the retention policy of the bucket is also deleted. Only the bucket owner can delete a bucket when the bucket is empty.

## Request elements

**Element**

**Type**

**Required**

**Example**

**Description**

ExtendWormConfiguration

Container

Yes

N/A

The root node.

Child nodes: RetentionPeriodInDays

wormId

String

Yes

1666E2CFB2B3418\*\*\*\*

The ID of the retention policy that is automatically generated when the InitiateBucketWorm operation is called.

RetentionPeriodInDays

Positive integer

Yes

366

The number of days for which objects must be retained.

Valid values: 1 to 25550.

## Examples

-   Sample requests
    
    ```
    POST /?wormId=1666E2CFB2B3418****&wormExtend HTTP/1.1
    Date: Thu, 17 Apr 2025 11:18:32 GMT
    Host: BucketName.oss.aliyuncs.com
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e 
    
    <ExtendWormConfiguration>
      <RetentionPeriodInDays>366</RetentionPeriodInDays>
    </ExtendWormConfiguration>
    ```
    
-   Sample responses
    
    ```
    HTTP/1.1 200 OK
    Server: AliyunOSS
    Date: Thu, 15 May 2014 11:18:32 GMT
    Content-Length: 0
    Connection: keep-alive
    x-oss-request-id: 5C06A3B67B8B5A3DA422299D
    x-oss-server-time: 122
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call the ExtendBucketWorm operation:

-   [Java](/help/en/oss/developer-reference/retention-policies-2)
    
-   [Python V2](/help/en/oss/developer-reference/compliance-retention-policy-for-python-sdk-v2)
    
-   [Go V2](/help/en/oss/developer-reference/compliance-retention-policy-for-go-sdk-v2)
    
-   [Node.js](/help/en/oss/developer-reference/retention-policies-4#undefined)
    
-   [C++](/help/en/oss/developer-reference/retention-policies#undefined)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-compliance-reserved-resources)
    

## **ossutil**

For information about the ossutil command that corresponds to the ExtendBucketWorm operation, see [extend-bucket-worm](/help/en/oss/developer-reference/extend-bucket-worm).
