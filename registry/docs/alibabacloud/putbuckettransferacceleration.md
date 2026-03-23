You can call this operation to configure transfer acceleration for a bucket. After you enable transfer acceleration for a bucket, users worldwide can access objects more quickly. The transfer acceleration feature is applicable to scenarios where data needs to be transferred over long geographical distances. This feature can also be used to download or upload objects that are gigabytes or terabytes in size.

## Usage notes

-   After you enable transfer acceleration for a bucket, you can use an accelerate endpoint in addition to the default endpoint to access the bucket. The access speed is accelerated only when you use the accelerate endpoint.
    
-   You are charged for the transfer acceleration fees when you use the accelerate endpoint to access a bucket. For more information, see [Transfer acceleration fees](/help/en/oss/transfer-acceleration-fees#concept-2558603).
    

For more information about transfer acceleration, see [Transfer acceleration](/help/en/oss/user-guide/transfer-acceleration#concept-1813960).

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

PutBucketTransferAcceleration

oss:PutBucketTransferAcceleration

Configures transfer acceleration for a bucket.

## Request structure

```
PUT /?transferAcceleration HTTP/1.1
Date: GMT Date
Content-Length: ContentLength
Content-Type: application/xml
Host: BucketName.oss.aliyuncs.com
Authorization: SignatureValue
```

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

TransferAccelerationConfiguration

Container

Yes

N/A

The container used to store transfer acceleration configurations.

Enabled

String

Yes

true

Specifies whether to enable transfer acceleration for the bucket. Valid values:

-   true: indicates that the request is sent to enable transfer acceleration for the bucket.
    
-   false: indicates that the request is sent to disable transfer acceleration for the bucket.
    

**Important**

Transfer acceleration takes effect within 30 minutes after it is enabled.

For more information about the common request headers contained in a PutBucketTransferAcceleration request, such as Authorization and Content-Length, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Response headers

All headers contained in the response to a PutBucketTransferAcceleration request are common response headers, such as x-oss-request-id and Date. For more information about the common response headers, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

-   Sample requests
    
    The following sample request is used to enable transfer acceleration for a bucket named examplebucket:
    
    ```
    PUT /?transferAcceleration HTTP/1.1
    Date: Fri, 30 Apr 2021 13:08:38 GMT
    Content-Length: 443
    Content-Type: application/xml
    Host: examplebucket.oss.aliyuncs.com
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=content-length,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
    <TransferAccelerationConfiguration>
      <Enabled>true</Enabled>
    </TransferAccelerationConfiguration>
    ```
    
-   Sample responses
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 534B371674A4D890****
    Date: Thu, 17 Apr 2025 13:08:38 GMT
    Content-Length: 443
    Connection: keep-alive
    Server: AliyunOSS
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call PutBucketTransferAcceleration:

-   [Java](/help/en/oss/developer-reference/transfer-acceleration-3)
    
-   [Go V2](/help/en/oss/developer-reference/transfer-acceleration-1)
    

## **ossutil**

For information about the ossutil command that corresponds to the PutBucketTransferAcceleration operation, see [put-bucket-transfer-acceleration](/help/en/oss/developer-reference/put-bucket-transfer-acceleration).

## Error codes

**Error code**

**HTTP status code**

**Description**

AccessDenied

404

The error message returned because you are not authorized to perform the PutBucketTransferAcceleration operation. Only users granted with the oss:PutBucketTransferAcceleration permission can configure transfer acceleration for the bucket.

MalformedXML

400

The error message returned because the request is not in a valid XML format. For example, the Enabled field in the request is set to a value other than true or false.
