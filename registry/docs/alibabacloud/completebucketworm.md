Locks a retention policy.

## Usage notes

By default, a time-based policy is in the InProgress state after the policy is created for a bucket. The policy remains in this state for 24 hours. Within the 24 hours, the retention policy protects the data in the bucket.

-   In the 24-hour window after the retention policy is enabled: If the retention policy is not locked, the bucket owner and authorized users can delete this policy. If the retention policy is locked, the policy cannot be deleted and the retention period specified by the retention policy can only be extended.
    
-   24 hours after the retention policy is enabled: If the retention policy is not locked, the policy becomes invalid.
    

## Examples

-   Sample request
    
    ```
    POST /?wormId=xxx HTTP/1.1
    Date: GMT Date
    Host: BucketName.oss.aliyuncs.com
    Authorization: SignatureValue
    ```
    
-   Sample response
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 534B371674E88A4D8906****
    Date: Fri, 24 Feb 2017 03:15:40 GMT
    Content-Length: 0
    Connection: keep-alive
    Server: AliyunOSS
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call CompleteBucketWorm:

-   [Java](/help/en/oss/developer-reference/retention-policies-2)
    
-   [Python V2](/help/en/oss/developer-reference/compliance-retention-policy-for-python-sdk-v2)
    
-   [Go V2](/help/en/oss/developer-reference/compliance-retention-policy-for-go-sdk-v2)
    
-   [Node.js](/help/en/oss/developer-reference/retention-policies-4#undefined)
    
-   [C++](/help/en/oss/developer-reference/retention-policies#undefined)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-compliance-reserved-resources)
    

## **ossutil**

For information about the ossutil command that corresponds to the CompleteBucketWorm operation, see [complete-bucket-worm](/help/en/oss/developer-reference/complete-bucket-worm).
