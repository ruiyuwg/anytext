Instead of passing authentication information in the `Authorization` header, you can embed it directly in the URL as query string parameters. This lets you share a time-limited link to an Object Storage Service (OSS) resource without exposing your access credentials.

**Important**

Use the V4 signature algorithm for better security. See [Include a V4 signature in a URL (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls).

## Use an SDK to generate signed URLs

OSS SDKs handle V1 signing automatically. If you use an SDK, you do not need to construct the signature manually. The following table lists the signing implementation and usage examples for each supported language.

**SDK**

**Signing implementation**

**Usage example**

Java

[OSSV1Signer.java](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/main/java/com/aliyun/oss/internal/signer/OSSV1Signer.java)

[Java](/help/en/oss/developer-reference/download-using-a-presigned-url#concept-32016-zh)

PHP

[SignerV1.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/src/OSS/Signer/SignerV1.php)

[PHP](/help/en/oss/developer-reference/download-objects-using-a-signed-url-generated-with-oss-sdk-for-phpa-signed-url-generated-with-oss-sdk-for-php#concept-32106-zh)

Node.js

[signatureUrl.js](/help/en/oss/developer-reference/add-signatures-to-urls)

[Node.js](/help/en/oss/developer-reference/authorized-access-3#concept-32077-zh)

Browser.js

[Browser.js](/help/en/oss/developer-reference/authorize-access-6#concept-303922)

—

Python

[auth.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/oss2/auth.py#L108)

[Python](/help/en/oss/developer-reference/authorized-access#concept-32033-zh)

Android

[ObjectURLPresigner.java](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/main/java/com/alibaba/sdk/android/oss/internal/ObjectURLPresigner.java)

[Android](/help/en/oss/developer-reference/authorize-access#concept-32046-zh)

iOS

[OSSClient.m](https://github.com/aliyun/aliyun-oss-ios-sdk/blob/master/AliyunOSSSDK/OSSClient.m#L1983)

[iOS](/help/en/oss/developer-reference/authorize-access-4#concept-32059-zh)

Go

[v1.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/oss/signer/v1.go)

[Go](/help/en/oss/authorize-access-5#concept-59670-zh)

C++

[SignerV1.cc](/help/en/oss/developer-reference/include-signatures-in-the-authorization-header#concept-aml-vv2-xdb)

[C++](/help/en/oss/developer-reference/authorized-access-4#concept-32139-zh)

C

[oss\_auth.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk/oss_auth.c#L371)

[C](/help/en/oss/developer-reference/authorized-access-1#concept-32139-zh)

.NET

[OssClient.cs](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/sdk/OssClient.cs#L1832)

[.NET](/help/en/oss/developer-reference/upload-objects-using-presigned-urls-generated-with-sdk-for-net#concept-32093-zh)

Ruby

[bucket.rb](https://github.com/aliyun/aliyun-oss-ruby-sdk/blob/master/lib/aliyun/oss/bucket.rb#L622)

[Ruby](/help/en/oss/developer-reference/authorized-access-2)

## Construct a signed URL manually

To build a signed URL yourself, you need:

-   An AccessKey ID and AccessKey secret, or temporary access credentials from Security Token Service (STS)
    
-   The bucket name and object path of the target resource
    
-   The intended HTTP method (`GET`, `PUT`, and so on)
    
-   The expiration time as a Unix timestamp
    

### URL format

A V1 signed URL has this structure:

```
https://<bucket>.oss-<region>.aliyuncs.com/<object>?OSSAccessKeyId=<key-id>&Expires=<unix-timestamp>&Signature=<encoded-signature>
```

To use temporary access credentials from STS, append the `security-token` parameter:

```
https://<bucket>.oss-<region>.aliyuncs.com/<object>?OSSAccessKeyId=<key-id>&Expires=<unix-timestamp>&Signature=<encoded-signature>&security-token=<sts-token>
```

To restrict access by IP address or virtual private cloud (VPC), include the corresponding access-control parameters:

```
https://<bucket>.oss-<region>.aliyuncs.com/<object>?OSSAccessKeyId=<key-id>&Expires=<unix-timestamp>&Signature=<encoded-signature>&x-oss-ac-subnet-mask=32
```

### URL parameters

**Parameter**

**Type**

**Required**

**Description**

`OSSAccessKeyId`

String

Yes

The AccessKey ID used to sign the URL.

`Expires`

Numeric

Yes

The expiration time as a Unix timestamp (seconds since 1970-01-01 00:00:00 UTC). OSS rejects requests received after this time. For example, if the current time is `1141889060` and you want the URL valid for 60 seconds, set this to `1141889120`. The OSS console default validity period is 3,600 seconds and the maximum is 32,400 seconds. See [Use object URLs](/help/en/oss/user-guide/share-objects-by-url#task-2025983) to change the validity period.

`Signature`

String

Yes

The URL-encoded, Base64-encoded HMAC-SHA1 signature. See [Signing formula](#section-f58a8fc0) below.

`security-token`

String

No

The security token from STS. Required only when using temporary access credentials. See [Use temporary access credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb). You can call the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) operation or use [STS SDKs for various programming languages](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb) to obtain temporary access credentials. Temporary access credentials contain a security token and a temporary AccessKey pair (AccessKey ID + AccessKey secret).

`x-oss-ac-source-ip`

String

No

The IP address or CIDR block. Used only at signature generation time — do not include in the URL itself. Must be used together with `x-oss-ac-subnet-mask`.

`x-oss-ac-subnet-mask`

Numeric

No

The subnet mask length (number of leading 1-bits). OSS performs a bitwise AND on the request's source IP and this mask to verify the signature. If this parameter is tampered with, signature verification fails.

`x-oss-ac-vpc-id`

String

No

The VPC ID. OSS verifies that the request originates from the specified VPC, and also checks the source IP or CIDR block.

`x-oss-ac-forward-allow`

Boolean

No

Whether to use the `X-Forwarded-For` header for signature verification when the request is forwarded. Valid values: `true`, `false` (default). Setting this to `true` exposes the request header to potential tampering.

### Signing formula

The `Signature` parameter uses the same algorithm as the `Authorization` header, with one difference: replace the `Date` header with `Expires` in the string to sign. You can still include `Date` in the request, but do not include it in the signature string.

```
Signature = urlencode(base64(hmac-sha1(AccessKeySecret,
              VERB + "\n"
              + CONTENT-MD5 + "\n"
              + CONTENT-TYPE + "\n"
              + EXPIRES + "\n"
              + CanonicalizedOSSHeaders
              + CanonicalizedResource)))
```

For `CONTENT-MD5`, `CONTENT-TYPE`, and `CanonicalizedOSSHeaders`, follow the same rules as [signature V1](/help/en/oss/developer-reference/include-signatures-in-the-authorization-header#concept-aml-vv2-xdb).

> If `Signature`, `Expires`, or `OSSAccessKeyId` appears multiple times in the URL, OSS uses the first value. When OSS receives a request, it checks `Expires` first, then verifies the `Signature`.

### Python example

The following example computes a V1 signature for a `GET` request using only the required parameters.

```
import base64
import hmac
import hashlib
from urllib.parse import quote

access_key_secret = "yourAccessKeySecret"
string_to_sign = "GET\n\n\n1141889120\n/examplebucket/oss-api.pdf"

h = hmac.new(
    access_key_secret.encode('utf-8'),
    string_to_sign.encode('utf-8'),
    hashlib.sha1
)

signature = quote(base64.b64encode(h.digest()).decode('utf-8'))
print(signature)
```

Replace the placeholder values:

**Placeholder**

**Description**

`yourAccessKeySecret`

Your AccessKey secret

`1141889120`

The expiration Unix timestamp

`/examplebucket/oss-api.pdf`

The CanonicalizedResource (`/<bucket>/<object>`)

## Security considerations

If you use a signed URL to share data, the data can be accessed by all Internet users that have the URL within the URL validity period. We recommend that you assess data risks in advance.

To reduce unauthorized access risks:

-   Restrict access by IP address or VPC using `x-oss-ac-source-ip`, `x-oss-ac-subnet-mask`, and `x-oss-ac-vpc-id`.
    
-   Do not include the URL signature in both the URL and the `Authorization` header for the same request — OSS rejects such requests.
    

## Usage notes

-   For PUT requests, the OSS SDK computes an MD5 hash of the request body and includes it in the signed URL. The MD5 hash of the uploaded content must match; otherwise, the PUT request fails. To verify the MD5 hash, include the `Content-MD5` header in the request.
    
-   `x-oss-ac-source-ip` is used only at signature generation time. Do not include it in the URL you distribute.
    

## Troubleshooting

**Why am I getting a 403 AccessDenied error?**

Check for these common causes:

-   One or more of `OSSAccessKeyId`, `Expires`, or `Signature` is missing from the URL. All three are required (order does not matter).
    
-   The request arrived after the `Expires` timestamp, or the timestamp is in an invalid format. Verify that your system clock is synchronized and that the `Expires` value is a valid Unix timestamp in the future.
    

**Why am I getting a 400 InvalidArgument error?**

OSS does not allow a signature in both the URL and the `Authorization` header for the same request. Remove the signature from one location.

## What's next

-   [Include a V4 signature in a URL (recommended)](/help/en/oss/developer-reference/add-signatures-to-urls)
    
-   [Include signatures in the Authorization header](/help/en/oss/developer-reference/include-signatures-in-the-authorization-header#concept-aml-vv2-xdb)
    
-   [Use temporary access credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb)
    
-   [Use object URLs](/help/en/oss/user-guide/share-objects-by-url#task-2025983)
