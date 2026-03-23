Generates a random data key that is used to encrypt on-premises data.

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
    

## Description

This operation creates a random data key, encrypts the data key by using a key, and returns the plaintext and ciphertext of the data key. You can use the data key plaintext to encrypt on-premises data without using KMS. You must store the data ciphertext together with the data key ciphertext. You can obtain the data key plaintext from Plaintext in the response and the data key ciphertext from CiphertextBlob in the response.

The key that you specify in the request is used to only encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the data key. Therefore, you must store the data key ciphertext in persistent storage.

We recommend that you encrypt on-premises data by performing the following steps:

1\. Call the GenerateDataKey operation to obtain a data key that is used for data encryption.

2\. Use the data key plaintext that you obtain to encrypt on-premises data without using KMS. Then, delete the data key plaintext from the memory.

3\. Store the data ciphertext together with the data key ciphertext that you obtain.

We recommend that you decrypt on-premises data by performing the following steps:

-   Call the [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt) operation to decrypt the locally stored data key ciphertext. The data key plaintext is returned.
    
-   Use the data key plaintext to decrypt on-premises data and then delete the data key plaintext from the memory.
    

In this example, a random data key is generated for a key whose ID is `key-hzz630494463ejqjx****`.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=GenerateDataKey&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

GenerateDataKey

The operation that you want to perform. Set the value to GenerateDataKey.

KeyId

String

Yes

key-hzz630494463ejqjx\*\*\*\*

The ID, alias, or Alibaba Cloud Resource Name (ARN) of the key. For more information, see [Manage a key alias](/help/en/kms/key-management-service/user-guide/manage-a-key-alias).

**Note**

When you access a key within another Alibaba Cloud account, you must enter the ARN of the key. The ARN of the key is in the `acs:kms:${region}:${account}:key/${keyid}` format.

KeySpec

String

No

AES\_256

The type of the data key that you want to generate. Valid values:

-   AES\_256: a 256-bit symmetric key.
    
-   AES\_128: a 128-bit symmetric key.
    

**Note**

We recommend that you use KeySpec or NumberOfBytes to specify the length of a data key. If none of the parameters are specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.

NumberOfBytes

Integer

No

256

The length of the data key that you want to generate. Unit: bytes.

Valid values: 1 to 1024.

Default value:

-   If KeySpec is set to AES\_256, the default value of NumberOfBytes is 32.
    
-   If KeySpec is set to AES\_128, the default value of NumberOfBytes is 16.
    

EncryptionContext

Map

No

{"Example":"Example"}

The JSON string that consists of key-value pairs.

If you configure this parameter, an equivalent value is required when you call the [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt) operation. For more information, see [EncryptionContext](/help/en/kms/key-management-service/support/encryptioncontext).

DryRun

String

No

false

Specifies whether to perform a dry run. Valid values:

-   true
    
-   false (default)
    

A dry run is used for testing in API calls. You can perform a dry run to check whether you have the permissions to access the resources that you want to manage and whether the request parameters are correctly configured. If you set DryRun to true in the request, KMS always returns an error code that indicates the cause of the error. KMS may return the following error codes:

-   DryRunOperationError: The request passes the dry run. If you do not configure the DryRun parameter and retain the other parameter configurations to call the same operation, the operation will be performed.
    
-   ValidationError: A parameter value in the request is invalid.
    
-   AccessDeniedError: You do not have the permissions to access the resources that you want to manage.
    

For more information about common request parameters, see [Common parameters](/help/en/kms/key-management-service/common-parameters-1).

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

KeyVersionId

String

2ab1a983-7072-4bbc-a582-584b5bd8\*\*\*\*

The version ID of the key. The ID must be globally unique.

KeyId

String

key-hzz630494463ejqjx\*\*\*\*

The ID of the key. If KeyId is set to the alias or ARN of the key, the ID of the key is returned.

CiphertextBlob

String

ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS\*\*\*\*

The ciphertext of the data key that is encrypted by using the primary version of the key.

RequestId

String

7021b6ec-4be7-4d3c-8a68-1e85d4d515a0

The request ID.

Plaintext

String

QmFzZTY0IGVuY29kZWQgcGxhaW50\*\*\*\*

The Base64-encoded plaintext of the data key.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=GenerateDataKey
&KeyId=key-hzz630494463ejqjx****
&KeySpec=AES_256
&NumberOfBytes=256
&DryRun=false
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<GenerateDataKeyResponse>
    <KeyVersionId>2ab1a983-7072-4bbc-a582-584b5bd8****</KeyVersionId>
    <KeyId>key-hzz630494463ejqjx****</KeyId>
    <CiphertextBlob>ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****</CiphertextBlob>
    <RequestId>7021b6ec-4be7-4d3c-8a68-1e85d4d515a0</RequestId>
    <Plaintext>QmFzZTY0IGVuY29kZWQgcGxhaW50****</Plaintext>
</GenerateDataKeyResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "KeyVersionId" : "2ab1a983-7072-4bbc-a582-584b5bd8****",
  "KeyId" : "key-hzz630494463ejqjx****",
  "CiphertextBlob" : "ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****",
  "RequestId" : "7021b6ec-4be7-4d3c-8a68-1e85d4d515a0",
  "Plaintext" : "QmFzZTY0IGVuY29kZWQgcGxhaW50****"
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
