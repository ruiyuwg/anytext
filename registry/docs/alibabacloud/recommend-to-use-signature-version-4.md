Include a V4 signature in the `Authorization` request header to authenticate requests to OSS. The OSS SDK handles this automatically—implement the V4 signature algorithm yourself only if you cannot use the SDK.

## SDK signature implementation

Before building the V4 signature algorithm yourself, review how the OSS SDK implements it. The following table lists the V4 signer source files for each SDK.

**SDK**

**V4 signature implementation**

[Java](https://github.com/aliyun/aliyun-oss-java-sdk)

[OSSV4Signer.java](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/main/java/com/aliyun/oss/internal/signer/OSSV4Signer.java)

[Python](https://github.com/aliyun/alibabacloud-oss-python-sdk-v2)

[v4.py](https://github.com/aliyun/alibabacloud-oss-python-sdk-v2/blob/master/alibabacloud_oss_v2/signer/v4.py)

[Go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2)

[v4.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/oss/signer/v4.go)

[JavaScript](https://github.com/ali-sdk/ali-oss)

[client.js](https://github.com/ali-sdk/ali-oss/blob/master/lib/client.js#L175)

[PHP](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2)

[SignerV4.php](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2/blob/master/src/Signer/SignerV4.php)

[C#](https://github.com/aliyun/alibabacloud-oss-csharp-sdk-v2)

[SignerV4.cs](https://github.com/aliyun/alibabacloud-oss-csharp-sdk-v2/blob/master/src/AlibabaCloud.OSS.V2/Signer/SignerV4.cs)

[Android](https://github.com/aliyun/aliyun-oss-android-sdk)

[OSSV4Signer.java](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/main/java/com/alibaba/sdk/android/oss/signer/OSSV4Signer.java)

[Swift](https://github.com/aliyun/alibabacloud-oss-swift-sdk-v2)

[SignerV4.swift](https://github.com/aliyun/alibabacloud-oss-swift-sdk-v2/blob/master/Sources/OSS/Signer/SignerV4.swift)

[Objective-C](https://github.com/aliyun/aliyun-oss-ios-sdk)

[OSSV4Signer.m](https://github.com/aliyun/aliyun-oss-ios-sdk/blob/master/AliyunOSSSDK/Signer/OSSV4Signer.m)

[C++](https://github.com/aliyun/aliyun-oss-cpp-sdk)

[SignerV4.cc](https://github.com/aliyun/aliyun-oss-cpp-sdk/blob/master/sdk/src/signer/SignerV4.cc)

[C](https://github.com/aliyun/aliyun-oss-c-sdk)

[oss\_auth.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk/oss_auth.c#L797)

## Authorization request header

Include an `Authorization` header in every OSS request. OSS calculates the expected signature and compares it with the value in this header—matching signatures mean the request is authenticated.

The header format is:

```
Authorization: OSS4-HMAC-SHA256 Credential=<AccessKeyId>/<SignDate>/<SignRegion>/oss/aliyun_v4_request, AdditionalHeaders=<AdditionalHeadersVal>, Signature=<SignatureVal>
```

**Component**

**Description**

`OSS4-HMAC-SHA256`

The signature algorithm: OSS V4 (`OSS4`) using `HMAC-SHA256`.

`Credential`

Your AccessKey ID and signing scope. Format: `<AccessKeyId>/<SignDate>/<SignRegion>/oss/aliyun_v4_request`.

`AdditionalHeaders`

Lowercase header names of optional headers included in signing, sorted lexicographically and separated by semicolons. Example: `content-disposition;content-length`.

`Signature`

The calculated signature: 64 lowercase hexadecimal digits representing a 256-bit value. Example: `3938**********************************dcdc`.

`Credential` sub-fields:

**Sub-field**

**Description**

`AccessKeyId`

Your AccessKey ID.

`SignDate`

The signature date in `YYYYMMDD` format.

`SignRegion`

The [region ID](/help/en/oss/user-guide/regions-and-endpoints) of the endpoint, such as `cn-hangzhou`.

`oss`

Fixed string identifying Object Storage Service (OSS).

`aliyun_v4_request`

Fixed string identifying the V4 signature version.

## Signature calculation

The V4 signature requires three steps: build a canonical request, derive a string-to-sign from it, then compute the signature using a derived signing key.

### Helper functions

Implement the following functions before starting. They are used throughout the signing process.

**Function**

**Description**

`Lowercase()`

Convert a string to lowercase.

`Trim()`

Remove leading and trailing whitespace from a string.

`URI-encode()`

Percent-encode each byte using uppercase hex. Do not encode unreserved characters (`A–Z`, `a–z`, `0–9`, `-`, `_`, `.`, `~`). Do not encode forward slashes (`/`) in the URI path.

`SHA256Hash()`

Return the SHA-256 hash of the input.

`HMAC-SHA256(key, data)`

Compute HMAC using SHA-256. The key is a byte array, not a hex string.

`HEX()`

Encode a byte array as lowercase hexadecimal.

### Signing flow

```
CanonicalRequest  =  HTTPVerb + "\n" + CanonicalURI + "\n" + CanonicalQueryString + "\n"
                   + CanonicalHeaders + "\n" + AdditionalHeaders + "\n" + HashedPayload

StringToSign  =  "OSS4-HMAC-SHA256" + "\n" + TimeStamp + "\n" + Scope + "\n"
               + HEX(SHA256Hash(CanonicalRequest))

DateKey              =  HMAC-SHA256("aliyun_v4" + SK, Date)
DateRegionKey        =  HMAC-SHA256(DateKey, Region)
DateRegionServiceKey =  HMAC-SHA256(DateRegionKey, "oss")
SigningKey           =  HMAC-SHA256(DateRegionServiceKey, "aliyun_v4_request")

Signature  =  HEX(HMAC-SHA256(SigningKey, StringToSign))
```

### Step 1: Construct a canonical request

A canonical request is a standardized string that captures the essential parts of the HTTP request.

```
HTTPVerb + "\n" +
CanonicalURI + "\n" +
CanonicalQueryString + "\n" +
CanonicalHeaders + "\n" +
AdditionalHeaders + "\n" +
HashedPayload
```

**HTTPVerb**

The HTTP method: `PUT`, `GET`, `POST`, `HEAD`, `DELETE`, or `OPTIONS`.

**CanonicalURI**

The URI-encoded resource path, excluding the query string. Do not encode forward slashes (`/`).

**Target**

**Resource path**

**CanonicalURI**

OSS service

`/`

`URI-encode("/")`

Bucket

`/examplebucket/`

`URI-encode("/examplebucket/")`

Object

`/examplebucket/exampleobject`

`URI-encode("/examplebucket/exampleobject")`

**CanonicalQueryString**

URI-encoded query parameters sorted lexicographically by encoded name. Sorting happens after encoding.

-   Connect each name and value with `=`. Separate parameters with `&`.
    
-   If no query parameters exist, use an empty string (`""`).
    

Examples:

**Input**

**CanonicalQueryString**

`prefix=somePrefix&marker=someMarker&max-keys=20`

`URI-encode("marker")+"="+URI-encode("someMarker")+"&"+URI-encode("max-keys")+"="+URI-encode("20")+"&"+URI-encode("prefix")+"="+URI-encode("somePrefix")`

`?acl` (name only, no value)

`URI-encode("acl")`

(no query parameters)

`""`

**CanonicalHeaders**

A newline-terminated list of request headers that participate in signing. Each line has the format:

```
Lowercase(<HeaderName>) + ":" + Trim(<value>) + "\n"
```

Headers fall into three categories:

**Category**

**Headers**

Always required

`x-oss-content-sha256` (only `UNSIGNED-PAYLOAD` is currently supported)

Included when present

`Content-Type`, `Content-MD5`, and all `x-oss-*` headers (e.g., `x-oss-date`, `x-oss-security-token`)

Optional (sign if listed in `AdditionalHeaders`)

Any additional headers you choose to include

The `x-oss-date` value must use ISO 8601 format, such as `20231203T121212Z`. When accessing OSS with a Security Token Service (STS) temporary credential, pass the security token as `x-oss-security-token:<token>`.

Example:

```
content-disposition:attachment
content-length:3
content-md5:ICy5YqxZB1uWSwcVLSNLcA==
content-type:text/plain
x-oss-content-sha256:UNSIGNED-PAYLOAD
x-oss-date:20250328T101048Z
```

**AdditionalHeaders**

Lowercase header names of any optional headers included in signing, sorted lexicographically and separated by semicolons. This must match the `AdditionalHeaders` field in the `Authorization` header. Do not list required headers here.

Example: `content-disposition;content-length`

**HashedPayload**

The SHA-256 hash of the request body. Only `UNSIGNED-PAYLOAD` is currently supported.

### Step 2: Construct a string-to-sign

```
"OSS4-HMAC-SHA256" + "\n" +
TimeStamp + "\n" +
Scope + "\n" +
HEX(SHA256Hash(CanonicalRequest))
```

**Parameter**

**Description**

`OSS4-HMAC-SHA256`

Fixed value. The signature algorithm identifier.

`TimeStamp`

The current UTC time in ISO 8601 format, such as `20250320T083322Z`.

`Scope`

`<SignDate>/<SignRegion>/oss/aliyun_v4_request`. Binds the signature to a specific date, region, and service.

`HEX(SHA256Hash(CanonicalRequest))`

The SHA-256 hash of the canonical request, encoded as lowercase hex.

`Scope` sub-fields:

**Sub-field**

**Description**

`SignDate`

The signing date in `YYYYMMDD` format.

`SignRegion`

The [region ID](/help/en/oss/user-guide/regions-and-endpoints), such as `cn-hangzhou`.

`oss`

Fixed string for the service name.

`aliyun_v4_request`

Fixed string for the signature version.

### Step 3: Calculate the signature

**Step 3a — Derive the signing key:**

```
DateKey              = HMAC-SHA256("aliyun_v4" + SK, Date)
DateRegionKey        = HMAC-SHA256(DateKey, Region)
DateRegionServiceKey = HMAC-SHA256(DateRegionKey, "oss")
SigningKey           = HMAC-SHA256(DateRegionServiceKey, "aliyun_v4_request")
```

**Variable**

**Description**

`SK`

Your AccessKey Secret.

`Date`

The signing date in `YYYYMMDD` format. Must match `SignDate` in the scope.

`Region`

The region ID, such as `cn-hangzhou`. Must match `SignRegion` in the scope.

**Step 3b — Calculate the signature:**

```
Signature = HEX(HMAC-SHA256(SigningKey, StringToSign))
```

## Signature calculation example

This example demonstrates the full signing process for a `PutObject` request.

### Input parameters

**Parameter**

**Value**

AccessKeyId

`LTAI****************`

AccessKeySecret

`yourAccessKeySecret`

Timestamp

`20250411T064124Z`

Bucket

`examplebucket`

Object

`exampleobject`

Region

`cn-hangzhou`

### Step 1: Canonical request

```
PUT
/examplebucket/exampleobject

content-disposition:attachment
content-length:3
content-md5:ICy5YqxZB1uWSwcVLSNLcA==
content-type:text/plain
x-oss-content-sha256:UNSIGNED-PAYLOAD
x-oss-date:20250411T064124Z

content-disposition;content-length
UNSIGNED-PAYLOAD
```

### Step 2: String-to-sign

```
OSS4-HMAC-SHA256
20250411T064124Z
20250411/cn-hangzhou/oss/aliyun_v4_request
c46d96390bdbc2d739ac9363293ae9d710b14e48081fcb22cd8ad54b63136eca
```

### Step 3: Signature

**SigningKey** (shown in hexadecimal for readability — different parameter combinations produce different values):

```
3543b7686e65eda71e5e5ca19d548d78423c37e8ddba4dc9d83f90228b457c76
```

**Signature:**

```
053edbf550ebd239b32a9cdfd93b0b2b3f2d223083aa61f75e9ac16856d61f23
```
