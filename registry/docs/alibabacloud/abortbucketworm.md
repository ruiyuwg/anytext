Deletes an unlocked retention policy.

## Usage notes

By default, a time-based retention policy is in the InProgress state after the policy is created for a bucket. The state remains valid for 24 hours. Within the 24 hours, the retention policy protects the data in the bucket.

-   In the 24-hour window after the retention policy is enabled: If the retention policy is not locked, the bucket owner and authorized users can delete this policy. If the retention policy is locked, the protection period of the policy cannot be shortened and the policy cannot be deleted. The protection period can only be prolonged.
    
-   24 hours after the retention policy is enabled: If the retention policy is not locked, the policy becomes invalid.
    

If a bucket contains objects that are within the protection period, you cannot delete the bucket or its retention policy. If a bucket is deleted, the retention policy of the bucket is also deleted. Only the bucket owner can delete a bucket when the bucket is empty.

## OSS SDK

You can use OSS SDKs for the following programming languages to call AbortBucketWorm:

-   [Java](/help/en/oss/developer-reference/retention-policies-2)
    
-   [Python V2](/help/en/oss/developer-reference/compliance-retention-policy-for-python-sdk-v2)
    
-   [Go V2](/help/en/oss/developer-reference/compliance-retention-policy-for-go-sdk-v2)
    
-   [Node.js](/help/en/oss/developer-reference/retention-policies-4#undefined)
    
-   [C++](/help/en/oss/developer-reference/retention-policies#undefined)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-compliance-reserved-resources)
    

## **ossutil**

For information about the ossutil command that corresponds to the AbortBucketWorm operation, see [abort-bucket-worm](/help/en/oss/developer-reference/abort-bucket-worm).

## Examples

-   Sample requests
    
    ```
    DELETE /?worm HTTP/1.1
    Date: Mon, 3 Aug 2020 03:15:40 GMT
    Host: BucketName.oss.aliyuncs.com
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
    ```
    
-   Sample responses
    
    ```
    HTTP/1.1 204 NoContent
    Server: AliyunOSS
    Date: Tue, 22 Aug 2023 09:10:20 GMT
    Content-Length: 0
    Connection: keep-alive
    x-oss-request-id: 5C06A3B67B8B5A3DA422299D
    x-oss-server-time: 130
    ```
