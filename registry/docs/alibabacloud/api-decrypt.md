Decrypts ciphertext.

## Usage notes

This API can be called through either a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).

-   Shared gateway: Accesses KMS through public network or VPC domain names, using one of the following formats:
    
    -   Public network domain names: `kms.<REGION_ID>.aliyuncs.com`.
        
    -   VPC domain names: `kms-vpc.<REGION_ID>.aliyuncs.com`.
        
    
    This method requires enabling public network access. For instructions, see [Access KMS instance keys over the Internet](/help/en/kms/key-management-service/user-guide/access-keys-of-a-kms-instance-over-the-internet).
    
-   Dedicated gateway: Access KMS through the KMS private network domain names, following the format: `<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`.
    

## QPS Limits

-   When calling this API through a shared gateway: The API is rate-limited to 1000 queries per second (QPS) per Alibaba Cloud account. Exceeding this limit will result in throttling, which may impact your service. We recommend that you take note of the limit when you call this operation.
    
-   When calling this API through a dedicated gateway: The API's QPS limit per Alibaba Cloud account is determined by the compute performance specifications of your KMS instances. For more information on the compute performance specifications, see [Performance quota](/help/en/kms/key-management-service/product-overview/performance-data#p-xzi-pa6-wau).
    

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=Decrypt&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

Decrypt

The operation that you want to perform. Set the value to Decrypt.

CiphertextBlob

String

Yes

DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK\*\*\*\*

The ciphertext that you want to decrypt.

You can generate the ciphertext by calling the following operations:

-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/api-generatedatakey)
    
-   [Encrypt](/help/en/kms/key-management-service/developer-reference/api-encrypt)
    
-   [GenerateDataKeyWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/api-generatedatakeywithoutplaintext)
    

EncryptionContext

Map

No

{"Example":"Example"}

The JSON string that consists of key-value pairs.

**Note**

If you specify the EncryptionContext parameter when you call the [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/api-generatedatakey), [Encrypt](/help/en/kms/key-management-service/developer-reference/api-encrypt), or [GenerateDataKeyWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/api-generatedatakeywithoutplaintext) operation, you must specify the same value for this parameter when you call the Decrypt operation. For more information, see [EncryptionContext](/help/en/kms/key-management-service/support/encryptioncontext).

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

2ab1a983-7072-4bbc-a582-584b5bd8\*\*\*\*

The version ID of the key that is used to decrypt the ciphertext.

KeyId

String

202b9877-5a25-46e3-a763-e20791b5\*\*\*\*

The ID of the key that is used to decrypt the ciphertext.

The ID must be globally unique.

RequestId

String

207596a2-36d3-4840-b1bd-f87044699bd7

The request ID.

Plaintext

String

tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv\*\*\*\*

The plaintext that is generated after decryption.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=Decrypt
&CiphertextBlob=DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
&DryRun=false
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DecryptResponse>
    <KeyVersionId>2ab1a983-7072-4bbc-a582-584b5bd8****</KeyVersionId>
    <KeyId>202b9877-5a25-46e3-a763-e20791b5****</KeyId>
    <RequestId>207596a2-36d3-4840-b1bd-f87044699bd7</RequestId>
    <Plaintext>tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****</Plaintext>
</DecryptResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "KeyVersionId" : "2ab1a983-7072-4bbc-a582-584b5bd8****",
  "KeyId" : "202b9877-5a25-46e3-a763-e20791b5****",
  "RequestId" : "207596a2-36d3-4840-b1bd-f87044699bd7",
  "Plaintext" : "tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****"
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

400

UnsupportedOperation

This action is not supported.

The operation is not supported.

404

Forbidden.AliasNotFound

The specified Alias is not found.

The specified alias is not found.

404

Forbidden.KeyNotFound

The specified Key is not found.

The specified key does not exist.

409

Rejected.Disabled

The request was rejected because the key state is Disabled.

The request is denied because the key is disabled.

409

Rejected.PendingDeletion

The request was rejected because the key state is PendingDeletion.

The request is denied because the key is in the Pending Deletion state.

409

Rejected.Unavailable

The request was rejected because the key state is Unavailable.

The request is denied because the key is unavailable.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
