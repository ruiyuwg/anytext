Encrypts plaintext by using a symmetric key.

## Usage notes

-   Keys outside Key Management Service (KMS) instances: To perform cryptographic operations, use Alibaba Cloud SDK to call operations.
-   Keys in KMS instances: To perform cryptographic operations, use one of the following methods:
    -   Method 1 (recommended): Use KMS Instance SDK to call KMS Instance API operations. For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk/) and [KMS Instance API](/help/en/kms/key-management-service/developer-reference/kms-instance-api/).
    -   Method 2: Use Alibaba Cloud SDK to call operations. The authentication method supports only RAM roles whose trusted entities are Alibaba Cloud services. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).

## Limits

You can call this operation up to 750 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.

## Description

-   KMS uses the primary version of a specified key to encrypt data.
-   Only data of 6 KB or less can be encrypted. For example, you can call this operation to encrypt Rivest-Shamir-Adleman (RSA) keys, database passwords, or other sensitive information.
-   If you want to migrate encrypted data between regions, you can call the Encrypt operation to encrypt the data key plaintext that is transferred from the source region in the destination region. In this case, the data key ciphertext is generated in the destination region. You can also call the [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt) operation to decrypt the data key ciphertext in the destination region.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=Encrypt&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

Encrypt

The operation that you want to perform. Set the value to **Encrypt**.

KeyId

String

Yes

key-hzz630494463ejqjx\*\*\*\*

The ID, alias, or Alibaba Cloud Resource Name (ARN) of the key. For more information, see [Manage a key alias](/help/en/kms/key-management-service/user-guide/manage-a-key-alias).

**Note** When you access a key within another Alibaba Cloud account, you must enter the ARN of the key. The ARN of the key is in the `acs:kms:${region}:${account}:key/${keyid}` format.

Plaintext

String

Yes

SGVsbG8gd29y\*\*\*\*

The plaintext that you want to encrypt. The plaintext must be Base64 encoded.

EncryptionContext

Map

No

{"Example":"Example"}

The JSON string that consists of key-value pairs. If you configure this parameter, you must specify the same value for this parameter when you call the Decrypt operation. For more information, see [EncryptionContext](/help/en/kms/key-management-service/support/encryptioncontext).

DryRun

String

No

false

Specifies whether to perform a dry run. Valid values:

-   true
-   false (default)

A dry run is used for testing in API calls. You can perform a dry run to check whether you have the permissions to access the resources that you want to manage and whether the request parameters are correctly configured. If you set DryRun to true in the request, KMS always returns an error code that indicates the cause of the error. KMS may return the following error codes:

-   DryRunOperationError: The request passes the dry run. If you do not specify the DryRun parameter and retain the other parameter configurations to call the same operation, the operation will be performed.
-   ValidationError: A parameter value in the request is invalid.
-   AccessDeniedError: You do not have the permissions to access the resources that you want to manage.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

KeyVersionId

String

86a9efd9-3d16-4894-bd4f-1fc43f3f\*\*\*\*

The version ID of the key that is used to encrypt the plaintext. The primary version of the key is returned.

KeyId

String

key-hzz630494463ejqjx\*\*\*\*

The ID of the key. If KeyId is set to the alias or ARN of the key, the ID of the key is returned.

CiphertextBlob

String

DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK\*\*\*\*

The ciphertext of the data that is encrypted by using the primary version of the key.

RequestId

String

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The request ID.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=Encrypt
&KeyId=key-hzz630494463ejqjx****
&Plaintext=SGVsbG8gd29y****
&DryRun=false
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<EncryptResponse>
    <KeyVersionId>86a9efd9-3d16-4894-bd4f-1fc43f3f****</KeyVersionId>
    <KeyId>key-hzz630494463ejqjx****</KeyId>
    <CiphertextBlob>DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****</CiphertextBlob>
    <RequestId>475f1620-b9d3-4d35-b5c6-3fbdd941423d</RequestId>
</EncryptResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "KeyVersionId" : "86a9efd9-3d16-4894-bd4f-1fc43f3f****",
  "KeyId" : "key-hzz630494463ejqjx****",
  "CiphertextBlob" : "DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****",
  "RequestId" : "475f1620-b9d3-4d35-b5c6-3fbdd941423d"
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

404

Forbidden.KeyNotFound

The specified Key is not found.

The specified key does not exist.

404

Forbidden.AliasNotFound

The specified Alias is not found.

The specified alias is not found.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
