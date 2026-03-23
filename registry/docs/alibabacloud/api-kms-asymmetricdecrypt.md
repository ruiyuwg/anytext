Decrypts data by using an asymmetric key.

## Usage notes

-   Keys outside Key Management Service (KMS) instances: To perform cryptographic operations, use Alibaba Cloud SDK to call operations.
-   Keys in KMS instances: To perform cryptographic operations, use one of the following methods:
    -   Method 1 (recommended): Use KMS Instance SDK to call KMS Instance API operations. For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk/) and [KMS Instance API](/help/en/kms/key-management-service/developer-reference/kms-instance-api/).
    -   Method 2: Use Alibaba Cloud SDK to call operations. The authentication method supports only Resource Access Management (RAM) roles whose trusted entities are Alibaba Cloud services. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).

## Limits

You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.

## Description

This operation supports only asymmetric keys for which **Usage** is set to **ENCRYPT/DECRYPT**. The following table lists supported encryption algorithms.

KeySpec

Algorithm

Description

Maximum length in bytes

RSA\_2048

RSAES\_OAEP\_SHA\_256

RSAES-OAEP using SHA-256 and MGF1 with SHA-256

256

RSA\_2048

RSAES\_OAEP\_SHA\_1

RSAES-OAEP using SHA1 and MGF1 with SHA1

256

RSA\_3072

RSAES\_OAEP\_SHA\_256

RSAES-OAEP using SHA-256 and MGF1 with SHA-256

384

RSA\_3072

RSAES\_OAEP\_SHA\_1

RSAES-OAEP using SHA1 and MGF1 with SHA1

384

EC\_SM2

SM2PKE

SM2 public key encryption algorithm based on elliptic curves

6144

In this example, an asymmetric key whose ID is `hzz630494463ejqjx****` andversion ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the `RSAES_OAEP_SHA_1` algorithm are used to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==`.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=AsymmetricDecrypt&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

AsymmetricDecrypt

The operation that you want to perform. Set the value to **AsymmetricDecrypt**.

CiphertextBlob

String

Yes

BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W\*\*\*\*==

The Base64-encoded ciphertext that you want to decrypt.

**Note** You can call the [AsymmetricEncrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricencrypt) operation to generate ciphertext.

KeyId

String

Yes

key-hzz630494463ejqjx\*\*\*\*

The ID, alias, or Alibaba Cloud Resource Name (ARN) of the key. For more information, see [Manage a key alias](/help/en/kms/key-management-service/user-guide/manage-a-key-alias).

**Note** When you access a key within another Alibaba Cloud account, you must enter the ARN of the key. The ARN of the key is in the `acs:kms:${region}:${account}:key/${keyid}` format.

KeyVersionId

String

Yes

2ab1a983-7072-4bbc-a582-584b5bd8\*\*\*\*

The version ID of the key. The ID must be globally unique.

Algorithm

String

Yes

RSAES\_OAEP\_SHA\_1

The decryption algorithm.

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

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

KeyVersionId

String

2ab1a983-7072-4bbc-a582-584b5bd8\*\*\*\*

The version ID of the key that is used to encrypt the plaintext.

KeyId

String

key-hzz630494463ejqjx\*\*\*\*

The ID of the key. If KeyId is set to the alias or ARN of the key, the ID of the key is returned.

RequestId

String

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The request ID.

Plaintext

String

SGVsbG8gd29ybGQ=

The Base64-encoded plaintext that is generated after decryption.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=AsymmetricDecrypt
&CiphertextBlob=BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==
&KeyId=key-hzz630494463ejqjx****
&KeyVersionId=2ab1a983-7072-4bbc-a582-584b5bd8****
&Algorithm=RSAES_OAEP_SHA_1
&DryRun=false
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<AsymmetricDecryptResponse>
    <KeyVersionId>2ab1a983-7072-4bbc-a582-584b5bd8****</KeyVersionId>
    <KeyId>key-hzz630494463ejqjx****</KeyId>
    <RequestId>475f1620-b9d3-4d35-b5c6-3fbdd941423d</RequestId>
    <Plaintext>SGVsbG8gd29ybGQ=</Plaintext>
</AsymmetricDecryptResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "KeyVersionId" : "2ab1a983-7072-4bbc-a582-584b5bd8****",
  "KeyId" : "key-hzz630494463ejqjx****",
  "RequestId" : "475f1620-b9d3-4d35-b5c6-3fbdd941423d",
  "Plaintext" : "SGVsbG8gd29ybGQ="
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

400

Rejected.UnsupportedOperation

Unsupported operation.

The operation is not supported.

404

Forbidden.AliasNotFound

The specified Alias is not found.

The specified alias is not found.

404

Forbidden.KeyNotFound

The specified Key is not found.

The specified key does not exist.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
