A presigned URL embeds a V4 signature and all required authentication parameters directly in the URL, letting you grant temporary access to OSS resources without sharing your access credentials. This topic describes how to construct a presigned URL using the V4 signature algorithm.

> Treat presigned URLs as bearer tokens. Anyone who has the URL can perform the specified operation until it expires. Share presigned URLs only with intended recipients, and use short expiration times for sensitive operations.

## Use OSS SDKs to generate presigned URLs

OSS SDKs handle signature calculation automatically. Use an SDK unless you have a specific reason to implement signing manually.

The following table lists the V4 signing implementation for each SDK.

**SDK**

**Example**

**Sample code**

Java

[Configure a client](/help/en/oss/developer-reference/initialization-3)

[OSSV4Signer.java](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/main/java/com/aliyun/oss/internal/signer/OSSV4Signer.java)

PHP

[Configure a client](/help/en/oss/developer-reference/initialization-3)

[SignerV4.php](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2/blob/master/src/Signer/SignerV4.php)

Node.js

[Initialization](/help/en/oss/initialization-10)

[signatureUrlV4.js](https://github.com/ali-sdk/ali-oss/blob/master/lib/common/object/signatureUrlV4.js)

Browser.js

[Initialization](/help/en/oss/developer-reference/initialization)

—

Python

[Initialization](/help/en/oss/initialization-2)

[auth.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/oss2/auth.py#L551)

Go

[Configure an OSSClient instance](/help/en/oss/initialization-9#undefined)

[v4.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/oss/signer/v4.go#302)

Objective-C

[Initialization](/help/en/oss/developer-reference/initialization-8)

[OSSV4Signer.m](https://github.com/aliyun/aliyun-oss-ios-sdk/blob/master/AliyunOSSSDK/Signer/OSSV4Signer.m)

C++

[Initialization](/help/en/oss/developer-reference/initialization-12)

[SignerV4.cc](https://github.com/aliyun/aliyun-oss-cpp-sdk/blob/master/sdk/src/signer/SignerV4.cc#L333)

C

[Initialization](/help/en/oss/developer-reference/initialization-5)

[oss\_auth.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk/oss_auth.c#L371)

## Presigned URL structure

A presigned URL carries all authentication information as query parameters. The following example shows the structure (line breaks added for readability):

```
https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject
  ?x-oss-additional-headers=host
  &x-oss-credential=LTAI********************/20241203/cn-hangzhou/oss/aliyun_v4_request
  &x-oss-date=20241203T034420Z
  &x-oss-expires=86400
  &x-oss-signature=70c542eaf652ac291c0c343d63ac24ede41c0526661d9d4c63c0906a2686160c
  &x-oss-signature-version=OSS4-HMAC-SHA256
```

> The forward slashes (`/`) in `x-oss-credential` are shown here for readability. In the actual request, URI-encode them as `%2F`. For example: `&x-oss-credential=LTAI********************%2F20241203%2Fcn-hangzhou%2Foss%2Faliyun_v4_request`

### Query parameters

**Parameter**

**Type**

**Required**

**Example value**

**Description**

`x-oss-signature-version`

String

Yes

`OSS4-HMAC-SHA256`

The signature algorithm version. Set to `OSS4-HMAC-SHA256`.

`x-oss-credential`

String

Yes

`LTAI*...*/20241203/cn-hangzhou/oss/aliyun_v4_request`

The credential scope used to calculate the signature. Format: `<AccessKeyId>/<date>/<region>/oss/aliyun_v4_request`. See the field breakdown below.

`x-oss-date`

String

Yes

`20241203T034420Z`

The time the URL was signed, in ISO 8601 UTC format. Used as the timestamp in the string to sign. Must match the `date` field in the derived signing key.

`x-oss-expires`

Integer

Yes

`86400`

The validity period of the URL in seconds, calculated from `x-oss-date`. Valid ranges: 1–604,800 seconds (7 days) for an AccessKey pair; 1–43,200 seconds (12 hours) for Security Token Service (STS) temporary access credentials.

`x-oss-additional-headers`

String

No

`host`

Additional headers to include in the signature. All header names must be lowercase and sorted alphabetically; multiple headers are separated by semicolons.

`x-oss-signature`

String

Yes

`77Dv...`

The computed signature. Not included in the signature calculation itself.

`x-oss-security-token`

String

No

`CAIS...`

The STS security token. Required only when signing with STS temporary access credentials.

**\`x-oss-credential\` field breakdown**

**Field**

**Description**

**Example value**

`AccessKeyId`

Your AccessKey ID

`LTAI********************`

`date`

The date the request is initiated (YYYYMMDD)

`20241203`

`region`

The region where the resource resides

`cn-hangzhou`

`oss`

The service name. Fixed value: `oss`

`oss`

`aliyun_v4_request`

The signature version descriptor. Fixed value: `aliyun_v4_request`

`aliyun_v4_request`

**Request receipt time constraint**

OSS validates that the time it receives the request (T) satisfies:

```
(x-oss-date − 15 minutes)  ≤  T  ≤  (x-oss-date + x-oss-expires)
```

Requests received outside this window are rejected.

## How it works

The V4 presigned URL signing process follows the same three-step approach as Authorization header signing, with these differences:

-   The `x-oss-content-sha256` payload hash header is not used. Replace it with the fixed string `UNSIGNED-PAYLOAD`.
    
-   The `x-oss-signature` parameter is not included in the signature calculation.
    
-   If a query parameter key matches a header being signed but the values differ, OSS returns an error. If a key has multiple values, all values are compared.
    
-   When using STS temporary access credentials, include `x-oss-security-token` in the query string.
    

![Signature calculation flow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6502094571/CAEQORiBgMDOgObRrxkiIGIxYzUwNDhlZDQ2MzQwZjg4MTIyZjY1YzcwZTI4N2Q34179394_20240119144811.026.svg)

### **Step 1: Create a canonical request**

#### **Format**

Construct a canonical string from the request in this format:

```
HTTP Verb + "\n" +
Canonical URI + "\n" +
Canonical Query String + "\n" +
Canonical Headers + "\n" +
Additional Headers + "\n" +
Hashed Payload
```

**Component**

**Description**

**HTTP Verb**

The HTTP method: `PUT`, `GET`, `POST`, `HEAD`, `DELETE`, or `OPTIONS`.

**Canonical URI**

The URI-encoded path from the domain name to the query string. Do not encode forward slashes (`/`) in the path itself. Format by resource: bucket + object → `/examplebucket/exampleobject`; bucket only → `/examplebucket/`; object name only → `/`.

**Canonical Query String**

URI-encode each key and value separately. Sort parameters alphabetically by encoded key name. If a key has no value, include only the key. If there are no query parameters, use an empty string followed by a line feed.

**Canonical Headers**

Lowercase header names and trimmed values, each on its own line (`key:value\n`), sorted alphabetically. Must include headers specified in Additional Headers, plus any of `Content-Type`, `Content-MD5`, and `x-oss-*` headers present in the request. The request timestamp goes in `x-oss-date` (ISO 8601 UTC). Use `UNSIGNED-PAYLOAD` instead of `x-oss-content-sha256`.

**Additional Headers**

The lowercase, alphabetically sorted header names to include in the signature, separated by semicolons.

**Hashed Payload**

Fixed value: `UNSIGNED-PAYLOAD`.

#### **Example**

```
"GET\n" +
UriEncode(<Resource>) + "\n" +
UriEncode(<QueryParam1>) + "=" + UriEncode(<Value>) + "&" + UriEncode(<QueryParam2>) + "\n" +
Lowercase(<HeaderName1>) + ":" + Trim(<value>) + "\n" + Lowercase(<HeaderName2>) + ":" + Trim(<value>) + "\n\n" +
Lowercase(<AdditionalHeaderName1>) + ";" + Lowercase(<AdditionalHeaderName2>) + "\n" +
UNSIGNED-PAYLOAD
```

### **Step 2: Create a string to sign**

## Format

Concatenate the following to form the string to sign:

```
"OSS4-HMAC-SHA256" + "\n" +
dateTimeStr + "\n" +
dateStr + "/" + region + "/oss/aliyun_v4_request" + "\n" +
SHA256Hex(canonicalRequest)
```

**Component**

**Description**

**Example value**

`OSS4-HMAC-SHA256`

The signing algorithm identifier. Fixed value.

`OSS4-HMAC-SHA256`

`dateTimeStr`

The signing time in ISO 8601 UTC format.

`20241203T034420Z`

`dateStr`

The credential scope: `<date>/<region>/oss/aliyun_v4_request`.

`20241203/cn-hangzhou/oss/aliyun_v4_request`

`SHA256Hex(canonicalRequest)`

The SHA-256 hash of the canonical request from Step 1.

—

## Example

```
String stringToSign = "OSS4-HMAC-SHA256\n" +
    dateTimeStr + "\n" +
    dateStr + "/cn-hangzhou/oss/aliyun_v4_request\n" +
    DigestUtils.sha256Hex(canonicalRequest);
```

### **Step 3: Calculate the signature**

**Derive the signing key** using nested HMAC-SHA256 operations:

```
signingKey = HMAC-SHA256(
               HMAC-SHA256(
                 HMAC-SHA256(
                   HMAC-SHA256("aliyun_v4" + accessKeySecret, dateStr),
                   region),
                 "oss"),
               "aliyun_v4_request")
```

**Compute the signature**:

```
signature = Hex(HMAC-SHA256(signingKey, stringToSign))
```

## Complete example: generate a presigned GET URL

The following Java example calculates a V4 signature and builds a presigned URL for downloading an object. Replace the placeholder values (`examplebucket`, `exampleobject`, `cn-hangzhou`) with your actual values before running.

**Important**

Set the `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables before running this example. Do not hardcode credentials in your code.

```
import com.aliyun.oss.common.utils.BinaryUtil;
import org.apache.commons.codec.digest.DigestUtils;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URL;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.TimeZone;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Load credentials from environment variables
        String accessKeyId     = System.getenv("OSS_ACCESS_KEY_ID");
        String accessKeySecret = System.getenv("OSS_ACCESS_KEY_SECRET");

        // Get the current UTC time
        ZonedDateTime now = ZonedDateTime.now(TimeZone.getTimeZone("UTC").toZoneId());
        String dateStr     = now.format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String dateTimeStr = now.format(DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'"));

        // Step 1: Build the canonical request
        String canonicalRequest =
            "GET\n" +
            "/examplebucket/exampleobject\n" +
            "x-oss-additional-headers=host" +
                "&x-oss-credential=" + accessKeyId + "%2F" + dateStr + "%2Fcn-hangzhou%2Foss%2Faliyun_v4_request" +
                "&x-oss-date=" + dateTimeStr +
                "&x-oss-expires=86400" +
                "&x-oss-signature-version=OSS4-HMAC-SHA256\n" +
            "host:examplebucket.oss-cn-hangzhou.aliyuncs.com\n" +
            "\n" +
            "host\n" +
            "UNSIGNED-PAYLOAD";
        System.out.println("canonicalRequest:\n" + canonicalRequest);

        // Step 2: Build the string to sign
        String stringToSign =
            "OSS4-HMAC-SHA256\n" +
            dateTimeStr + "\n" +
            dateStr + "/cn-hangzhou/oss/aliyun_v4_request\n" +
            DigestUtils.sha256Hex(canonicalRequest);

        // Step 3: Derive the signing key and compute the signature
        byte[] dateKey              = hmacSHA256(("aliyun_v4" + accessKeySecret).getBytes(), dateStr);
        byte[] dateRegionKey        = hmacSHA256(dateKey, "cn-hangzhou");
        byte[] dateRegionServiceKey = hmacSHA256(dateRegionKey, "oss");
        byte[] signingKey           = hmacSHA256(dateRegionServiceKey, "aliyun_v4_request");

        String signature = BinaryUtil.toHex(hmacSHA256(signingKey, stringToSign));
        System.out.println("signature: " + signature);

        // Step 4: Assemble the presigned URL
        String endpoint    = "https://examplebucket.oss-cn-hangzhou.aliyuncs.com";
        String objectKey   = "exampleobject";
        String queryString =
            "x-oss-additional-headers=host" +
            "&x-oss-credential=" + accessKeyId + "%2F" + dateStr + "%2Fcn-hangzhou%2Foss%2Faliyun_v4_request" +
            "&x-oss-date=" + dateTimeStr +
            "&x-oss-expires=86400" +
            "&x-oss-signature=" + signature +
            "&x-oss-signature-version=OSS4-HMAC-SHA256";

        URL url = new URL(endpoint + "/" + objectKey + "?" + queryString);
        System.out.println("url: " + url);
    }

    public static byte[] hmacSHA256(byte[] key, String data) {
        try {
            SecretKeySpec secretKeySpec = new SecretKeySpec(key, "HmacSHA256");
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(secretKeySpec);
            return mac.doFinal(data.getBytes());
        } catch (Exception e) {
            throw new RuntimeException("Failed to calculate HMAC-SHA256", e);
        }
    }
}
```

**Sample output**

```
signature: eee300fa39f52127a02af5f9bb86c0fd8b6776fc19101d9a6a7982c9d0edcc04
url: https://examplebucket.oss-cn-hangzhou.aliyuncs.com/exampleobject?x-oss-additional-headers=host&x-oss-credential=LTAI********************%2F20241203%2Fcn-hangzhou%2Foss%2Faliyun_v4_request&x-oss-date=20241203T032307Z&x-oss-expires=86400&x-oss-signature=eee300fa39f52127a02af5f9bb86c0fd8b6776fc19101d9a6a7982c9d0edcc04&x-oss-signature-version=OSS4-HMAC-SHA256
```

## What's next

-   [Download or preview objects using presigned URLs](/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects) — use a presigned GET URL to share objects without exposing credentials.
    
-   [Object uploads by using presigned URLs](/help/en/oss/user-guide/upload-files-using-presigned-urls) — use a presigned PUT URL to let clients upload directly to OSS.
    
-   [Garbled characters when previewing .txt objects](/help/en/oss/user-guide/garbled-characters-appear-when-you-preview-an-object-in-the-txt-format-online) — troubleshoot encoding issues when using a presigned URL to preview plain-text objects in a browser.
