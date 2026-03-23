Verifies a signature by using an asymmetric key.

## Usage notes

-   Keys outside Key Management Service (KMS) instances: To perform cryptographic operations, use Alibaba Cloud SDK to call operations.
-   Keys in KMS instances: To perform cryptographic operations, use one of the following methods:
    -   Method 1 (recommended): Use KMS Instance SDK to call KMS Instance API operations. For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk/) and [KMS Instance API](/help/en/kms/key-management-service/developer-reference/kms-instance-api/).
    -   Method 2: Use Alibaba Cloud SDK to call operations. The authentication method supports only Resource Access Management (RAM) roles whose trusted entities are Alibaba Cloud services. For more information, see [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service).

## Limits

You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.

## Description

This operation supports only asymmetric keys for which **Usage** is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms.

KeySpec

Algorithm

Description

RSA\_2048

RSA\_PSS\_SHA\_256

RSASSA-PSS using SHA-256 and MGF1 with SHA-256

RSA\_2048

RSA\_PKCS1\_SHA\_256

RSASSA-PKCS1-v1\_5 using SHA-256

RSA\_3072

RSA\_PSS\_SHA\_256

RSASSA-PSS using SHA-256 and MGF1 with SHA-256

RSA\_3072

RSA\_PKCS1\_SHA\_256

RSASSA-PKCS1-v1\_5 using SHA-256

EC\_P256

ECDSA\_SHA\_256

ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest

EC\_P256K

ECDSA\_SHA\_256

ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest

EC\_SM2

SM2DSA

SM2 digital signature algorithm based on elliptic curves

**Note** When you calculate the SM2 signature based on GB/T 32918, **Digest** is used to calculate the digest value of the combination of Z(A) and M, rather than the SM3 digest value. M indicates the original message that you want to sign. Z(A) indicates the hash value for User A. The hash value is defined in GB/T 32918.

In this example, an asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the RSA\_PSS\_SHA\_256 signature algorithm are used to verify the `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==` signature value that is generated for the `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=` digest information.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=AsymmetricVerify&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

AsymmetricVerify

The operation that you want to perform. Set the value to **AsymmetricVerify**.

KeyId

String

Yes

5c438b18-05be-40ad-b6c2-3be6752c\*\*\*\*

The ID of the key. The ID must be globally unique.

**Note** You can also set this parameter to an alias that is bound to the key. For more information, see [Alias overview](/help/en/kms/key-management-service/support/overview).

KeyVersionId

String

Yes

2ab1a983-7072-4bbc-a582-584b5bd8\*\*\*\*

The version ID of the key. The ID must be globally unique.

Algorithm

String

Yes

RSA\_PSS\_SHA\_256

The signature algorithm.

Digest

String

Yes

ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy\*\*\*\*=

The digest that is generated for the original data by using a hash algorithm. The hash algorithm is specified by **Algorithm**.

**Note** The value must be encoded in Base64.

Value

String

Yes

M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq\*\*\*\*==

The signature value that you want to verify.

**Note** The value must be encoded in Base64.

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

5c438b18-05be-40ad-b6c2-3be6752c\*\*\*\*

The ID of the key. The ID must be globally unique.

**Note** If you set KeyId in the request to an alias, the ID of the key to which the alias is bound is returned.

Value

Boolean

true

Indicates whether the signature passed the verification.

RequestId

String

475f1620-b9d3-4d35-b5c6-3fbdd941423d

The request ID.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=AsymmetricVerify
&KeyId=5c438b18-05be-40ad-b6c2-3be6752c****
&KeyVersionId=2ab1a983-7072-4bbc-a582-584b5bd8****
&Algorithm=RSA_PSS_SHA_256
&Digest=ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy****=
&Value=M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==
&DryRun=false
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<AsymmetricVerifyResponse>
    <KeyVersionId>2ab1a983-7072-4bbc-a582-584b5bd8****</KeyVersionId>
    <KeyId>5c438b18-05be-40ad-b6c2-3be6752c****</KeyId>
    <Value>true</Value>
    <RequestId>475f1620-b9d3-4d35-b5c6-3fbdd941423d</RequestId>
</AsymmetricVerifyResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "KeyVersionId" : "2ab1a983-7072-4bbc-a582-584b5bd8****",
  "KeyId" : "5c438b18-05be-40ad-b6c2-3be6752c****",
  "Value" : true,
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

The specified parameter is not valid.

The specified parameter is invalid.

404

Forbidden.AliasNotFound

The specified Alias is not found.

The specified alias is not found.

404

Forbidden.KeyNotFound

The specified Key is not found.

The specified key does not exist.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
