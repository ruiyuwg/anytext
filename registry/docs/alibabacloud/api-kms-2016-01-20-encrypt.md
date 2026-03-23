Encrypts plaintext by using a symmetric CMK.

## Operation description

### Precautions

-   For information about the access policy required to allow a RAM user or RAM role to call this API operation, see [Resource Access Management](/help/en/kms/key-management-service/security-and-compliance/access-control/).
    
-   You can call this operation using a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).
    
    -   Shared gateway: You can access KMS over the Internet or a VPC. To use this method, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](/help/en/kms/key-management-service/user-guide/access-keys-of-a-kms-instance-over-the-internet).
        
    -   Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
        

### QPS limits

-   If you use a shared gateway to call this operation, the queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, the API call is throttled. This can affect your business. We recommend that you call this operation at a reasonable rate to avoid throttling.
    
-   If you use a dedicated gateway to call this operation, the QPS limit for a single user is subject to the computing performance specifications of your KMS instance. For more information, see [Performance metrics](/help/en/kms/key-management-service/product-overview/performance-data).
    

### Description

-   KMS encrypts the specified data using the primary version of a specified key.
    
-   You can encrypt a maximum of 6 KB of data, such as an RSA key, a database password, or other sensitive information.
    
-   If you migrate encrypted data from one region to another, you can call the Encrypt operation in the destination region to re-encrypt the plaintext data key from the source region. This generates a new encrypted data key. You can then call the [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt) operation to decrypt this new key in the destination region.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Kms/2016-01-20/Encrypt)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Kms/2016-01-20/Encrypt)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

KeyId

string

Yes

The ID of the key. You can also specify the alias or Amazon Resource Name (ARN) of the key. For more information about aliases, see [Manage aliases](/help/en/kms/key-management-service/user-guide/manage-a-key-alias).

**Note**

When you access a key in another Alibaba Cloud account, you must specify the ARN of the key. The ARN of a key is in the `acs:kms:${region}:${account}:key/${keyid}` format.

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

Plaintext

string

Yes

The plaintext to be encrypted. The plaintext must be Base64-encoded.

SGVsbG8gd29y\*\*\*\*

EncryptionContext

object

No

A JSON string that consists of key-value pairs. If you specify this parameter, you must specify the same parameter when you call the Decrypt operation. For more information, see [EncryptionContext](/help/en/kms/key-management-service/support/encryptioncontext).

{"Example":"Example"}

DryRun

string

No

Specifies whether to enable the dry run feature.

-   true: enables the dry run feature.
    
-   false (default): disables the dry run feature.
    

The dry run feature is used to test API calls and verify the permissions on the resources that you have and the validity of the request parameters. You can view the check results in the response.

-   DryRunOperationError: The permissions and parameters are valid. If you do not specify the DryRun parameter, the request is successful.
    
-   ValidationError: The parameters in the request are invalid.
    
-   AccessDeniedError: You are not authorized to perform this operation on the KMS resource.
    

false

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

KeyVersionId

string

The ID of the key version that is used to encrypt the plaintext. It is the primary version of the specified key.

86a9efd9-3d16-4894-bd4f-1fc43f3f\*\*\*\*

KeyId

string

The ID of the key. If you use an alias or an ARN of the key in the request, the ID of the key is returned.

1234abcd-12ab-34cd-56ef-12345678\*\*\*\*

CiphertextBlob

string

The ciphertext of the data that is encrypted using the primary version of the specified key.

DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK\*\*\*\*

RequestId

string

The ID of the request, which is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot issues.

475f1620-b9d3-4d35-b5c6-3fbdd941423d

## Examples

Success response

`JSON` format

```
{
  "KeyVersionId": "86a9efd9-3d16-4894-bd4f-1fc43f3f****",
  "KeyId": "1234abcd-12ab-34cd-56ef-12345678****",
  "CiphertextBlob": "DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****",
  "RequestId": "475f1620-b9d3-4d35-b5c6-3fbdd941423d"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The specified parameter is invalid.

An invalid value is specified for the parameter.

404

Forbidden.KeyNotFound

The specified Key is not found.

The error message returned because the specified CMK does not exist.

404

Forbidden.AliasNotFound

The specified Alias is not found.

The error message returned because the specified alias does not exist.

404

InvalidAccessKeyId.NotFound

The Access Key ID provided does not exist in our records.

See [Error Codes](https://api.alibabacloud.com/document/Kms/2016-01-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Kms/2016-01-20/Encrypt#workbench-doc-change-demo) for a complete list.
