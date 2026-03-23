You can call this operation to query the transfer acceleration configurations of a bucket.

## Usage notes

-   Only the owner of a bucket or RAM users granted with the oss:PutBucketTransferAcceleration permission can initiate requests to query the transfer acceleration configurations of a bucket.
    
-   If transfer acceleration is not configured for the bucket to which you send the GetBucketTransferAcceleration request, no configurations are returned.
    

For more information about transfer acceleration, see [Transfer acceleration](/help/en/oss/user-guide/transfer-acceleration#concept-1813960) in the Developer Guide.

## Request structure

```
GET /?transferAcceleration HTTP/1.1
Date: GMT Date
Content-Length: ContentLength
Content-Type: application/xml
Host: BucketName.oss.aliyuncs.com
Authorization: SignatureValue
```

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

TransferAccelerationConfiguration

Container

N/A

The container used to store transfer acceleration configurations.

Enabled

String

true

The status of transfer acceleration Valid values:

-   true: indicates that transfer acceleration is enabled for the bucket.
    
-   false: indicates that transfer acceleration is disabled for the bucket.
    

For more information about other common response headers, such as x-oss-request-id and Date, contained in the response to a GetBucketTransferAcceleration request, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

-   Sample requests
    
    The following sample request is used to query the status of transfer acceleration of a bucket named examplebucket:
    
    ```
    GET /?transferAcceleration HTTP/1.1
    Date: Thu, 17 Apr 2025 13:08:38 GMT
    Content-Length：443
    Content-Type: application/xml
    Host: examplebucket.oss.aliyuncs.com
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=content-length,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
    ```
    
-   Sample responses
    
    The following response indicates that transfer acceleration is enabled for examplebucket:
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 534B371674E88A4D8906****
    Date: Fri , 30 Apr 2021 13:08:38 GMT
    <TransferAccelerationConfiguration>
     <Enabled>true</Enabled>
    </TransferAccelerationConfiguration>
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetBucketTransferAcceleration:

-   [Java](/help/en/oss/developer-reference/transfer-acceleration-3)
    
-   [Go V2](/help/en/oss/developer-reference/transfer-acceleration-1)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetBucketTransferAcceleration operation, see [get-bucket-transfer-acceleration](/help/en/oss/developer-reference/get-bucket-transfer-acceleration).

## Error codes

**Error code**

**HTTP status code**

**Description**

NoSuchTransferAccelerationConfiguration

404

The error message returned because transfer acceleration is not configured for the bucket.
