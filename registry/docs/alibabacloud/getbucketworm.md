You can call this operation to query the retention policy configured for the specified bucket.

**Note**

If the retention policy specified by the ID in the request does not exist, OSS returns 404.

## Usage notes

OSS supports the Write Once Read Many (WORM) strategy that prevents an object from being deleted or overwritten for a specified period of time. You can configure a time-based retention policy for a bucket. A retention policy has a retention period that ranges from one day to 70 years.

After a retention policy configured for a bucket is locked, you can read objects from or upload objects to the bucket. However, the retention policy and objects in the bucket cannot be deleted within the retention period. You can delete objects in the bucket only after the retention period expires.

## Request headers

A GetBucketWorm request contains only common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Response headers

The response to a GetBucketWorm request contains only common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Response elements

**Element**

**Type**

**Description**

WormConfiguration

Container

The root node.

Child nodes: WormId, State, RetentionPeriodInDays, and CreationDate

WormId

String

The ID of the retention policy.

State

String

The status of the retention policy.

Valid values:

-   InProgress: indicates that the retention policy is in the InProgress state. By default, a retention policy is in the InProgress state after it is created. The state remains valid for 24 hours.
    
-   Locked: indicates that the retention policy is in the Locked state.
    

RetentionPeriodInDays

Positive integer

The number of days for which objects can be retained.

CreationDate

String

The time when the retention policy is created.

## Examples

-   Sample request
    
    ```
    GET /? worm HTTP/1.1
    Date: Fri, 16 Oct 2020 11:18:32 GMT
    Host: BucketName.oss.aliyuncs.com
    Authorization: SignatureValue
    ```
    
-   Sample response
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 5374A2880232A65C2300****
    Date: Fri, 16 Oct 2020 11:18:32 GMT
    Content-Type: application/xml
    Content-Length: length
    <WormConfiguration>
      <WormId>1666E2CFB2B3418****</WormId>
      <State>Locked</State>
      <RetentionPeriodInDays>1</RetentionPeriodInDays>
      <CreationDate>2020-10-15T15:50:32</CreationDate>
    </WormConfiguration>
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetBucketWorm:

-   [Java](/help/en/oss/developer-reference/retention-policies-2)
    
-   [Python V2](/help/en/oss/developer-reference/compliance-retention-policy-for-python-sdk-v2)
    
-   [Go V2](/help/en/oss/developer-reference/compliance-retention-policy-for-go-sdk-v2)
    
-   [Node.js](/help/en/oss/developer-reference/retention-policies-4#undefined)
    
-   [C++](/help/en/oss/developer-reference/retention-policies#undefined)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-compliance-reserved-resources)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetBucketWorm operation, see [get-bucket-worm](/help/en/oss/developer-reference/get-bucket-worm).
