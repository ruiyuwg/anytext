Call the InitiateBucketWorm operation to create a retention policy.

## Usage notes

-   Object Storage Service (OSS) supports the Write Once Read Many (WORM) feature. This feature prevents data from being deleted or modified. You can set a time-based retention policy for a bucket. The retention period can be from 1 day to 70 years.
    
-   If a time-based retention policy is not locked within 24 hours after it is created, the policy automatically becomes invalid. After the retention policy is locked, you can upload objects to and read objects from the bucket. However, you cannot delete the objects or the retention policy until the retention period expires. For more information about retention policies, see [Retention policies](/help/en/oss/user-guide/oss-retention-policies#concept-lnj-4rl-cfb).
    
-   You can configure versioning and a retention policy for the same bucket. The bucket must have versioning enabled.
    

## Request elements

**Name**

**Type**

**Required**

**Description**

InitiateWormConfiguration

Container

Yes

The root node.

Child node: RetentionPeriodInDays

RetentionPeriodInDays

Positive integer

Yes

The retention period for objects in days.

## SDKs

The following SDKs are available for this API:

-   [Java](/help/en/oss/developer-reference/retention-policies-2)
    
-   [Python V2](/help/en/oss/developer-reference/compliance-retention-policy-for-python-sdk-v2)
    
-   [Go V2](/help/en/oss/developer-reference/compliance-retention-policy-for-go-sdk-v2)
    
-   [Node.js](/help/en/oss/developer-reference/retention-policies-4#t1949581.html)
    
-   [C++](/help/en/oss/developer-reference/retention-policies#t1946318.html)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-compliance-reserved-resources)
    

## **ossutil**

For information about the corresponding ossutil command, see [initiate-bucket-worm](/help/en/oss/developer-reference/initiate-bucket-worm).

## Examples

-   Sample request
    
    ```
    POST /?worm HTTP/1.1
    Date: Thu, 17 Apr 2025 11:18:32 GMT
    Content-Length: 556
    Content-Type: application/xml
    Host: BucketName.oss.aliyuncs.com
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=content-length,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
    
    <InitiateWormConfiguration>
      <RetentionPeriodInDays>365</RetentionPeriodInDays>
    </InitiateWormConfiguration>
    ```
    
-   Sample response
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 5374A2880232A65C2300****
    x-oss-worm-id: 1666E2CFB2B3418****
    Date: Thu, 15 May 2014 11:18:32 GMT
    ```
