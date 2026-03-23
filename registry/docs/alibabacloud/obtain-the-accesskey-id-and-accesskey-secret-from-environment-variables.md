If you do not want to call Alibaba Cloud API operations by using SDKs, or your runtime environment does not support SDKs, you can use self-signed signatures to call Alibaba Cloud API operations. This topic describes the signature method V3 and how to call Alibaba Cloud API operations by using HTTP requests.

## **Usage notes**

-   If you are using the signature method V2, we recommend that you switch to the signature method V3.
    
-   The signature method V3 can be used to call API operations of Alibaba Cloud services that use SDKs provided by OpenAPI Explorer. Note that some cloud services use self-managed gateways, which may use a different authentication method than the one described in this topic. In this case, we recommend that you read the signature syntax and method of the relevant service before you call API operations by sending HTTP requests.
    
    -   For more information about the signature syntax and method, see [Request signatures](/help/en/sls/developer-reference/request-signatures).
        
    -   For more information about the signature syntax and method, see [Signature methods](/help/en/oss/developer-reference/oss-signature-mechanism-guide/).
        

## HTTP request syntax

The following table describes the components of an Alibaba Cloud API request.

Component

Required

Description

Example

Protocol

Yes

The protocol that is used to send the API request. You can read the API reference of each Alibaba Cloud service to obtain information about the protocol that is used. You can send a request over `HTTP` or `HTTPS`. To ensure data security, we recommend that you send requests over HTTPS. Valid values: `https://` and `http://`.

https://

Endpoint

Yes

The endpoint of the Alibaba Cloud service API. You can read the API reference of each Alibaba Cloud service to view the endpoints of a service in different regions.

ecs.cn-shanghai.aliyuncs.com

resource\_URI\_parameters

Yes

The URL of the resource that you want to access, including the resource path and the request parameters.

ImageId=win2019\_1809\_x64\_dtc\_zh-cn\_40G\_alibase\_20230811.vhd&RegionId=cn-shanghai

RequestHeader

Yes

The common request headers. In most cases, information such as the API version number, endpoint, and authentication information is included. For more information, see the "Request headers" section of this topic.

Authorization: ACS3-HMAC-SHA256 Credential=YourAccessKeyId,SignedHeaders=host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version,Signature=06563a9e1b43f5dfe96b81484da74bceab24a1d853912eee15083a6f0f3283c0

x-acs-action: RunInstances

host: ecs.cn-shanghai.aliyuncs.com

x-acs-date: 2023-10-26T09:01:01Z

x-acs-version: 2014-05-26

x-acs-content-sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

x-acs-signature-nonce: d410180a5abf7fe235dd9b74aca91fc0

RequestBody

Yes

The request parameters defined in the request body. You can obtain the request body in the metadata of the API. For more information, see [API metadata](/help/en/sdk/product-overview/openapi-metadata).

HTTPMethod

Yes

The request method. You can obtain the request method in the metadata of the API. For more information, see [API metadata](/help/en/sdk/product-overview/openapi-metadata).

POST

### RequestHeader

The following table describes the information that must be included in the common request headers when you call an Alibaba Cloud API operation.

Header

Type

Required

Description

Example

host

String

Yes

The endpoint of the Alibaba Cloud service API. For more information, see the [HTTP request syntax](#section-mqj-l8f-ak0) section of this topic.

ecs.cn-shanghai.aliyuncs.com

x-acs-action

String

Yes

The operation that you want to perform. You can search for the API operation that you want to call in [OpenAPI Portal](https://next.api.alibabacloud.com/home).

RunInstances

x-acs-content-sha256

String

Yes

The hash value of the request body. The hash value is encoded in Base16. The value of this parameter is the same as the value of the HashedRequestPayload parameter.

e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

x-acs-date

String

Yes

The timestamp of the request. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2018-01-01T12:00:00Z. The timestamp must be within 15 minutes before the request is sent.

2023-10-26T10:22:32Z

x-acs-signature-nonce

String

Yes

A unique and random number that is used to prevent replay attacks. You must use different numbers for different requests. This header applies only to the HTTP protocol.

3156853299f313e23d1673dc12e1703d

x-acs-version

String

Yes

The version number of the API. For more information about API version numbers, see the [How do I obtain the API version for x-acs-version](#4d1f23dbd9dgh) section of this topic.

2014-05-26

Authorization

String

Yes if the request is non-anonymous

The authentication information that is used to validate the request. Format: Authorization: **SignatureAlgorithm** Credential=**AccessKeyId**,SignedHeaders=**SignedHeaders**,Signature=**Signature**.

**SignatureAlgorithm**: the encryption method of the signature string. Set the value to ACS3-HMAC-SHA256.

**Credential**: the AccessKey ID provided to you by Alibaba Cloud. You can view your AccessKey ID in the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/manage/ak). For more information about how to create an AccessKey pair, see [Obtain an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair).

**SignedHeaders**: the names of the request headers that are used for signature calculation. We recommend that you use all common request headers except Authorization for signature calculation to improve security.

**Signature**: the signature string of the current request. For more information, see the "Signature method" section of this topic.

ACS3-HMAC-SHA256 Credential=YourAccessKeyId,SignedHeaders=host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version,Signature=06563a9e1b43f5dfe96b81484da74bceab24a1d853912eee15083a6f0f3283c0

x-acs-security-token

String

Yes if Security Token Service (STS) is used for authentication

The STS token. Set this header to the value of the SecurityToken parameter in the response of the **AssumeRole** operation.

## Signature method

API Gateway uses AccessKey IDs and AccessKey secrets to sign requests and authenticate requests. To ensure data integrity and security, API Gateway calculates a signature for each HTTP or HTTPS request and compares the signature with the one carried in the request to authenticate the caller identity.

**Important**

All requests and responses are encoded in **UTF-8**.

### Step 1: Construct a canonicalized request

Construct a canonicalized request based on the following pseudocode:

```
CanonicalRequest =
  HTTPRequestMethod + '\n' +    // The HTTP request method in uppercase letters.
  CanonicalURI + '\n' +         // The canonicalized uniform resource identifier (URI).
  CanonicalQueryString + '\n' + // The canonicalized query string.
  CanonicalHeaders + '\n' +     // The canonicalized request headers.
  SignedHeaders + '\n' +        // The request headers that are used for signature calculation.
  HashedRequestPayload // The hash value of the request body.
```

#### Request method (HTTPRequestMethod)

The HTTP request method in uppercase letters, such as GET or POST.

#### Canonicalized URI (CanonicalURI)

The canonicalized URI is the encoded resource path in the URL. The resource path is the part between the endpoint and the query string. The path includes the forward slash (`/`) that follows the endpoint but excludes the question mark (`?`) that precedes the query string. You must use a canonicalized URI for signature calculation. To construct a canonicalized URI, encode the strings separated by forward slashes (`/`) in UTF-8 based on [RFC 3986](http://tools.ietf.org/html/rfc3986). Encoding rules:

-   Letters, digits, hyphens (`-`), underscores (`_`), periods (`.`), and tildes (`~`) do not need to be encoded.
    
    Other characters must be percent-encoded in the following format: `%` + ASCII code of the characters in hexadecimal notation. For example, double quotation marks (`"`) are encoded as `%22`. The following table describes some special characters before and after encoding. Pay attention to these special characters.
    
    Before encoding
    
    > After encoding
    
    Space characters ( )
    
    > `%20`
    
    Asterisks (`*`)
    
    > `%2A`
    
    `%7E`
    
    > Titles (`~`)
    

If you use `java.net.URLEncoder` in the Java standard library, `encode` the strings based on the standard library. In the encoded strings, replace plus signs (`+`) with `%20`, asterisks (`*`) with `%2A`, and `%7E` with tildes (`~`). This way, you can obtain encoded strings that match the preceding encoding rules.

**Important**

If the API style is RPC, use a forward slash (`/`) as the value of the CanonicalURI parameter.

If the API style is ROA, encode the value of the `path` parameter in the metadata of the API operation and use the encoded value as the value of the CanonicalURI parameter. Example: `/api/v1/clusters`.

#### Canonicalized query string (CanonicalQueryString)

In the [API metadata](/help/en/sdk/product-overview/openapi-metadata#32c6c74961o1j), if the request parameters of an API request contain the `"in":"query"` position information, you need to concatenate the request parameters based on the following method:

1.  Sort all request parameters by parameter name in alphabetical order.
    
2.  Encode the parameter names and values in UTF-8 based on [RFC 3986](http://tools.ietf.org/html/rfc3986). The encoding rules are the same as those used to construct the canonicalized URI.
    
3.  Use an equal sign (`=`) to concatenate the encoded name and value of each parameter. For a parameter without a value, use an empty string as the parameter value.
    
4.  Use ampersands (`&`) to concatenate the encoded parameters in the order obtained in the previous step.
    

**Important**

-   [If the request parameters are in an array or object, convert the parameters to indexed key-value pairs](#722e0270fbuhw).
    
-   If the request parameters are in a JSON string, the order of the parameters in the JSON string does not affect the signature calculation.
    
-   If the query string is empty, use an empty string as the canonicalized query string.
    

Example:

```
ImageId=win2019_1809_x64_dtc_zh-cn_40G_alibase_20230811.vhd&RegionId=cn-shanghai
```

#### HashedRequestPayload

Use the hash function to convert the request body and encode the hash value in Base16 to generate the HashedRequestPayload. Then, change the value of `x-acs-content-sha256` in the [request header](#p-nvi-zbo-752) to the value of HashedRequestPayload. Pseudocode:

```
HashedRequestPayload = HexEncode(Hash(RequestBody))
```

-   In the [API metadata](/help/en/sdk/product-overview/openapi-metadata#32c6c74961o1j), if the request parameters contain the `"in": "body"` or `"in": "formData"` position information, specify the parameters in the request body.
    
    **Note**
    
    If the request does not have a body, set the value of RequestBody to an empty string.
    
    -   If the request parameters contain the `"in": "formData"` position information, concatenate them into a string in the following format: `key1=value1&key2=value2&key3=value3`, and add the Content-Type header and set it to `application/x-www-form-urlencoded`. For example, [if the request parameters are of the array or object type, convert their values to indexed key-value pairs](#722e0270fbuhw).
        
    -   If the request parameters contain the `"in": "body"` position information, add the Content-Type header to the request. The value of the Content-Type header specifies the type of request content. Example:
        
        -   If the request content is a JSON string, set the value of the Content-Type header to `application/json`.
            
        -   If the request content is a binary file stream, set the value of the Content-Type header to `application/octet-stream`.
            
-   Hash() specifies a hash function. Only the SHA-256 algorithm is supported.
    
-   HexEncode() encodes the hash value in Base16. This function returns an encoded hash value in the hexadecimal format in lowercase letters.
    

Sample value when the request body is empty:

```
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

#### Canonicalized headers (CanonicalHeaders)

Concatenate the parameters in the [request headers](#p-nvi-zbo-752) based on the following method:

1.  Filter out request headers that start with `x-acs-`, the `Host` header, and the `Content-Type` header.
    
2.  Convert the header names to lowercase and sort the headers in alphabetical order.
    
3.  Remove the spaces before and after the value of each header.
    
4.  Concatenate the header name and header value by using a colon (`:`), and append a line feed (`\n`) at the end of the name-value pair to form a canonicalized header entry.
    
5.  Concatenate multiple canonicalized header entries into a string.
    

**Note**

All request headers except the Authorization header must be used for signature calculation.

Pseudocode:

```
CanonicalHeaderEntry = Lowercase(HeaderName) + ':' + Trim(HeaderValue) + '\n'

CanonicalHeaders = 
    CanonicalHeaderEntry0 + CanonicalHeaderEntry1 + ... + CanonicalHeaderEntryN
```

Example:

```
host:ecs.cn-shanghai.aliyuncs.com
x-acs-action:RunInstances
x-acs-content-sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
x-acs-date:2023-10-26T10:22:32Z
x-acs-signature-nonce:3156853299f313e23d1673dc12e1703d
x-acs-version:2014-05-26
```

#### Signed headers (SignedHeaders)

Signed headers provide information about the common request headers used for signature calculation. The name of each signed header corresponds to the name of a canonicalized header. You can perform the following steps to construct signed headers:

-   Convert the names of the canonicalized headers to lowercase.
    
-   Sort the headers in alphabetical order and use semicolons (`;`) to separate the headers.
    

Pseudocode:

```
SignedHeaders = Lowercase(HeaderName0) + ';' + Lowercase(HeaderName1) + ... + Lowercase(HeaderNameN) 
```

Example:

```
host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version
```

### Step 2: Construct a string-to-sign

Construct a string-to-sign based on the following pseudocode:

```
StringToSign =
    SignatureAlgorithm + '\n' +
    HashedCanonicalRequest
```

-   SignatureAlgorithm
    
    Only the ACS3-HMAC-SHA256 algorithm is supported for signature calculation.
    
-   HashedCanonicalRequest
    
    The hash value of the canonicalized request. The following pseudocode shows how to generate the hash value:
    
    ```
    HashedCanonicalRequest = HexEncode(Hash(CanonicalRequest))
    ```
    
    -   Hash() specifies a hash function. Only the SHA-256 algorithm is supported.
        
    -   HexEncode() encodes the hash value in Base16. This function returns an encoded hash value in the hexadecimal format in lowercase letters.
        

Example:

```
ACS3-HMAC-SHA256
7ea06492da5221eba5297e897ce16e55f964061054b7695beedaac1145b1e259
```

### Step 3: Calculate the signature string

Calculate the signature string based on the following pseudocode:

```
Signature = HexEncode(SignatureMethod(Secret, StringToSign))
```

-   StringToSign: the string-to-sign that is constructed in Step 2. The value is encoded in UTF-8.
    
-   SignatureMethod: Specify HMAC-SHA256 as the signature algorithm.
    
-   Secret: the AccessKey secret.
    
-   HexEncode: the function that is used to encode values in Base16.
    

Example:

```
06563a9e1b43f5dfe96b81484da74bceab24a1d853912eee15083a6f0f3283c0
```

### Step 4: Add the signature string to the request

After you obtain the signature string, specify the Authorization header in the request in the following format: `Authorization:<**SignatureAlgorithm>** Credential=<**AccessKeyId>**,SignedHeaders=<**SignedHeaders>**,Signature=<**Signature>**`.

Example:

```
ACS3-HMAC-SHA256 Credential=YourAccessKeyId,SignedHeaders=host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version,Signature=06563a9e1b43f5dfe96b81484da74bceab24a1d853912eee15083a6f0f3283c0
```

## Signature examples

To help you understand the preceding signature method, this section provides the following sample code to completely implement the signature method in mainstream programming languages. The following sample code is provided only to help you understand the signature method and is not globally applicable. Alibaba Cloud provides SDKs for multiple programming languages and development frameworks. We recommend that you use Alibaba Cloud SDKs to initiate API requests and automatically generate signatures for the requests. You can develop applications on Alibaba Cloud without the need to manually calculate a signature.

**Important**

**Before you sign a request, read and understand the** [API metadata](/help/en/sdk/product-overview/openapi-metadata)**, the API request method, the request parameters, the request parameter types, and how parameters are passed. Otherwise, you may fail to sign requests.**

### Fixed parameter values

In this example, sample values are used to demonstrate how results are output in each step. You can use the sample values to simulate calculations, and compare your result with the result of this example to test the signature signing process.

Parameter

Example

AccessKeyID

YourAccessKeyId

AccessKeySecret

YourAccessKeySecret

x-acs-signature-nonce

3156853299f313e23d1673dc12e1703d

x-acs-date

2023-10-26T10:22:32Z

x-acs-action

RunInstances

x-acs-version

2014-05-26

host

ecs.cn-shanghai.aliyuncs.com

Operation-specific parameters

ImageId

win2019\_1809\_x64\_dtc\_zh-cn\_40G\_alibase\_20230811.vhd

RegionId

cn-shanghai

You can perform the following steps to sign a request:

1.  Construct a canonicalized request.
    

```
POST
/
ImageId=win2019_1809_x64_dtc_zh-cn_40G_alibase_20230811.vhd&RegionId=cn-shanghai
host:ecs.cn-shanghai.aliyuncs.com
x-acs-action:RunInstances
x-acs-content-sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
x-acs-date:2023-10-26T10:22:32Z
x-acs-signature-nonce:3156853299f313e23d1673dc12e1703d
x-acs-version:2014-05-26

host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

2.  Construct a string-to-sign.
    

```
ACS3-HMAC-SHA256
7ea06492da5221eba5297e897ce16e55f964061054b7695beedaac1145b1e259
```

3.  Calculate the signature string.
    

```
06563a9e1b43f5dfe96b81484da74bceab24a1d853912eee15083a6f0f3283c0
```

4.  Add the signature string to the request.
    

```
POST /?ImageId=win2019_1809_x64_dtc_zh-cn_40G_alibase_20230811.vhd&RegionId=cn-shanghai HTTP/1.1
Authorization: ACS3-HMAC-SHA256 Credential=YourAccessKeyId,SignedHeaders=host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version,Signature=06563a9e1b43f5dfe96b81484da74bceab24a1d853912eee15083a6f0f3283c0
x-acs-action: RunInstances
host: ecs.cn-shanghai.aliyuncs.com
x-acs-date: 2023-10-26T09:01:01Z
x-acs-version: 2014-05-26
x-acs-content-sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
x-acs-signature-nonce: d410180a5abf7fe235dd9b74aca91fc0
user-agent: AlibabaCloud (Mac OS X; x86_64) Java/1.8.0_352-b08 tea-util/0.2.6 TeaDSL/1
accept: application/json
```

### Java

**Note**

In this example, the JDK 1.8 runtime environment is used. Adjust the parameters based on your business requirements.

To use the signature method in Java, you must add the following Maven dependencies to the pom.xml file:

```
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.13</version>
</dependency>
<dependency>
     <groupId>com.google.code.gson</groupId>
     <artifactId>gson</artifactId>
     <version>2.9.0</version>
 </dependency>
```

```
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.http.client.methods.*;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class SignatureDemo {

    public static class SignatureRequest {
        // HTTP Method
        private final String httpMethod;
        // The request path.
        private final String canonicalUri;
        // endpoint
        private final String host;
        // API name
        private final String xAcsAction;
        // API version
        private final String xAcsVersion;
        // headers
        private final Map<String, String> headers = new TreeMap<>();
        // The byte array of the parameters in the body.
        private byte[] body;
        // The query string. 
        private final Map<String, Object> queryParam = new TreeMap<>();

        public SignatureRequest(String httpMethod, String canonicalUri, String host,
                                String xAcsAction, String xAcsVersion) {
            this.httpMethod = httpMethod;
            this.canonicalUri = canonicalUri;
            this.host = host;
            this.xAcsAction = xAcsAction;
            this.xAcsVersion = xAcsVersion;
            initHeader();
        }

        private void initHeader() {
            headers.put("host", host);
            headers.put("x-acs-action", xAcsAction);
            headers.put("x-acs-version", xAcsVersion);

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
            sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
            headers.put("x-acs-date", sdf.format(new Date()));
            headers.put("x-acs-signature-nonce", UUID.randomUUID().toString());
        }

        public String getHttpMethod() {
            return httpMethod;
        }

        public String getCanonicalUri() {
            return canonicalUri;
        }

        public String getHost() {
            return host;
        }

        public Map<String, String> getHeaders() {
            return headers;
        }

        public byte[] getBody() {
            return body;
        }

        public Map<String, Object> getQueryParam() {
            return queryParam;
        }

        public void setBody(byte[] body) {
            this.body = body;
        }

        public void setQueryParam(String key, Object value) {
            this.queryParam.put(key, value);
        }

        public void setHeaders(String key, String value) {
            this.headers.put(key, value);
        }
    }

    public static class SignatureService {
        private static final String ALGORITHM = "ACS3-HMAC-SHA256";

        /**
         * Calculate and generate a signature string
         */
        public static void getAuthorization(SignatureRequest signatureRequest,
                                            String accessKeyId, String accessKeySecret, String securityToken) {
            try {
                // Flatten the query parameters of the List and Map types.
                Map<String, Object> processedQueryParams = new TreeMap<>();
                processObject(processedQueryParams, "", signatureRequest.getQueryParam());
                signatureRequest.getQueryParam().clear();
                signatureRequest.getQueryParam().putAll(processedQueryParams);

                // Step 1: Construct a canonicalized request.
                String canonicalQueryString = buildCanonicalQueryString(signatureRequest.getQueryParam());

                // Calculate the hash value of the request body.
                String hashedRequestPayload = calculatePayloadHash(signatureRequest.getBody());
                signatureRequest.setHeaders("x-acs-content-sha256", hashedRequestPayload);

                // Add the security token if it exists.
                if (securityToken != null && !securityToken.isEmpty()) {
                    signatureRequest.setHeaders("x-acs-security-token", securityToken);
                }

                // Build the canonical headers and signed headers.
                CanonicalHeadersResult canonicalHeadersResult = buildCanonicalHeaders(signatureRequest.getHeaders());

                // Build the canonical request.
                String canonicalRequest = String.join("\n",
                        signatureRequest.getHttpMethod(),
                        signatureRequest.getCanonicalUri(),
                        canonicalQueryString,
                        canonicalHeadersResult.canonicalHeaders,
                        canonicalHeadersResult.signedHeaders,
                        hashedRequestPayload);

                System.out.println("canonicalRequest=========>\n" + canonicalRequest);

                // Step 2: Construct a string-to-sign.
                String hashedCanonicalRequest = sha256Hex(canonicalRequest.getBytes(StandardCharsets.UTF_8));
                String stringToSign = ALGORITHM + "\n" + hashedCanonicalRequest;
                System.out.println("stringToSign=========>\n" + stringToSign);

                // Step 3: Calculate the signature string.
                String signature = DatatypeConverter.printHexBinary(
                                hmac256(accessKeySecret.getBytes(StandardCharsets.UTF_8), stringToSign))
                        .toLowerCase();
                System.out.println("signature=========>" + signature);

                // Step 4: Specify the Authorization header.
                String authorization = String.format("%s Credential=%s,SignedHeaders=%s,Signature=%s",
                        ALGORITHM, accessKeyId, canonicalHeadersResult.signedHeaders, signature);

                System.out.println("authorization=========>" + authorization);
                signatureRequest.getHeaders().put("Authorization", authorization);
            } catch (Exception e) {
                throw new RuntimeException("Failed to generate authorization", e);
            }
        }

        /**
         * Handle parameters of the formData type. 
         */
        private static String formDataToString(Map<String, Object> formData) {
            Map<String, Object> tileMap = new HashMap<>();
            processObject(tileMap, "", formData);
            StringBuilder result = new StringBuilder();
            boolean first = true;
            String symbol = "&";
            for (Map.Entry<String, Object> entry : tileMap.entrySet()) {
                String value = String.valueOf(entry.getValue());
                if (value != null && !value.isEmpty()) {
                    if (first) {
                        first = false;
                    } else {
                        result.append(symbol);
                    }
                    result.append(percentCode(entry.getKey()));
                    result.append("=");
                    result.append(percentCode(value));
                }
            }

            return result.toString();
        }

        /**
         * Construct a canonicalized query string.
         */
        private static String buildCanonicalQueryString(Map<String, Object> queryParams) {
            return queryParams.entrySet().stream()
                    .map(entry -> percentCode(entry.getKey()) + "=" +
                            percentCode(String.valueOf(entry.getValue())))
                    .collect(Collectors.joining("&"));
        }

        /**
         * Calculate the hash value of the request body.
         */
        private static String calculatePayloadHash(byte[] body) throws Exception {
            if (body != null) {
                return sha256Hex(body);
            } else {
                return sha256Hex("".getBytes(StandardCharsets.UTF_8));
            }
        }

        /**
         * Build canonical headers.
         */
        private static CanonicalHeadersResult buildCanonicalHeaders(Map<String, String> headers) {
            List<Map.Entry<String, String>> signedHeaders = headers.entrySet().stream()
                    .filter(entry -> {
                        String key = entry.getKey().toLowerCase();
                        return key.startsWith("x-acs-") || "host".equals(key) || "content-type".equals(key);
                    })
                    .sorted(Map.Entry.comparingByKey())
                    .collect(Collectors.toList());

            StringBuilder canonicalHeaders = new StringBuilder();
            StringBuilder signedHeadersString = new StringBuilder();

            for (Map.Entry<String, String> entry : signedHeaders) {
                String lowerKey = entry.getKey().toLowerCase();
                String value = entry.getValue().trim();
                canonicalHeaders.append(lowerKey).append(":").append(value).append("\n");
                signedHeadersString.append(lowerKey).append(";");
            }

            if (signedHeadersString.length() > 0) {
                signedHeadersString.setLength(signedHeadersString.length() - 1); // Remove the trailing semicolon.
            }

            return new CanonicalHeadersResult(canonicalHeaders.toString(), signedHeadersString.toString());
        }

        private static class CanonicalHeadersResult {
            final String canonicalHeaders;
            final String signedHeaders;

            CanonicalHeadersResult(String canonicalHeaders, String signedHeaders) {
                this.canonicalHeaders = canonicalHeaders;
                this.signedHeaders = signedHeaders;
            }
        }

        /**
         * Process complex object parameters.
         */
        private static void processObject(Map<String, Object> map, String key, Object value) {
            if (value == null) {
                return;
            }

            if (key == null) {
                key = "";
            }

            if (value instanceof List<?>) {
                List<?> list = (List<?>) value;
                for (int i = 0; i < list.size(); ++i) {
                    processObject(map, key + "." + (i + 1), list.get(i));
                }
            } else if (value instanceof Map<?, ?>) {
                Map<?, ?> subMap = (Map<?, ?>) value;
                for (Map.Entry<?, ?> entry : subMap.entrySet()) {
                    processObject(map, key + "." + entry.getKey().toString(), entry.getValue());
                }
            } else {
                if (key.startsWith(".")) {
                    key = key.substring(1);
                }

                if (value instanceof byte[]) {
                    map.put(key, new String((byte[]) value, StandardCharsets.UTF_8));
                } else {
                    map.put(key, String.valueOf(value));
                }
            }
        }

        /**
         * Perform calculation by using the HMAC-SHA256 algorithm.
         */
        private static byte[] hmac256(byte[] secretKey, String str) throws Exception {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey, mac.getAlgorithm());
            mac.init(secretKeySpec);
            return mac.doFinal(str.getBytes(StandardCharsets.UTF_8));
        }

        /**
         * Calculate the hash value by using the SHA-256 algorithm.
         */
        private static String sha256Hex(byte[] input) throws Exception {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] digest = md.digest(input);
            return DatatypeConverter.printHexBinary(digest).toLowerCase();
        }

        /**
         * Perform URL encoding.
         */
        public static String percentCode(String str) {
            if (str == null) {
                return "";
            }
            try {
                return URLEncoder.encode(str, "UTF-8")
                        .replace("+", "%20")
                        .replace("*", "%2A")
                        .replace("%7E", "~");
            } catch (UnsupportedEncodingException e) {
                throw new RuntimeException("UTF-8 encoding not supported", e);
            }
        }
    }

    /**
     * A sample signature. You need to adjust the parameters in the main() method. 
     * API operations in the ROA and API operations in the RPC style differ only in the logic of the canonicalUri value. 
     * <p>
     * Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in) and encapsulate the information in the signature request (SignatureRequest). 
     *1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (queryParam). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
     *2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
     3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
     */
    public static void main(String[] args) throws IOException {
        // Obtain the AccessKey ID from the environment variable.
        String accessKeyId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        String accessKeySecret = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        String securityToken = System.getenv("ALIBABA_CLOUD_SECURITY_TOKEN");

        if (accessKeyId == null || accessKeySecret == null) {
            System.err.println("Please set the ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables.");
            return;
        }

        // Example 1: Call the DescribeInstanceStatus operation of Elastic Compute Service (ECS) in the RPC style (Parameter position: "in":"query"). 
        SignatureRequest signatureRequest = new SignatureRequest(
                "POST",
                "/",
                "ecs.cn-hangzhou.aliyuncs.com",
                "DescribeInstanceStatus",
                "2014-05-26"
        );
        signatureRequest.setQueryParam("RegionId", "cn-hangzhou");
        signatureRequest.setQueryParam("InstanceId", Arrays.asList("i-bp10igfmnyttXXXXXXXX", "i-bp1incuofvzxXXXXXXXX"));

        /*// Example 2: Call the RecognizeGeneral operation in the RPC style of OCR (Parameter position: "in":"body"). 
        SignatureRequest signatureRequest = new SignatureRequest(
                "POST",
                "/",
                "ocr-api.cn-hangzhou.aliyuncs.com",
                "RecognizeGeneral",
                "2021-07-07");
        signatureRequest.setBody(Files.readAllBytes(Paths.get("D:\\test.jpeg")));
        signatureRequest.setHeaders("content-type", "application/octet-stream");*/

        /*// Example 3: Call the TranslateGeneral operation of Machine Translation in the RPC style (Parameter position: "in": "formData" or "in":"body"). 
        String httpMethod = "POST";
        String canonicalUri = "/";
        String host = "mt.aliyuncs.com";
        String xAcsAction = "TranslateGeneral";
        String xAcsVersion = "2018-10-12";
        SignatureRequest signatureRequest = new SignatureRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);
        Map<String, Object> body = new HashMap<>();
        body.put("FormatType", "text");
        body.put("SourceLanguage", "zh");
        body.put("TargetLanguage", "en");
        body.put("SourceText", "Hello");
        body.put("Scene", "general");
        String formDataToString = SignatureService.formDataToString(body);
        signatureRequest.setBody(formDataToString.getBytes(StandardCharsets.UTF_8));
        signatureRequest.setHeaders("content-type", "application/x-www-form-urlencoded");*/

        /*// Construct a POST request for the CreateCluster operation of Container Service for Kubernetes (ACK) in the ROA style. 
        SignatureRequest signatureRequest = new SignatureRequest(
                "POST",
                "/clusters",
                "cs.cn-chengdu.aliyuncs.com",
                "CreateCluster",
                "2015-12-15");
        TreeMap<String, Object> body = new TreeMap<>();
        body.put("name", "Test");
        body.put("cluster_type", "ManagedKubernetes");
        body.put("kubernetes_version", "1.34.1-aliyun.1");
        body.put("region_id", "cn-chengdu");
        body.put("snat_entry", true);
        body.put("deletion_protection", true);
        body.put("proxy_mode", "ipvs");
        body.put("profile", "Default");
        body.put("timezone", "Asia/Shanghai");
        body.put("cluster_spec", "ack.pro.small");
        body.put("enable_rrsa", false);
        body.put("service_cidr", "192.168.0.0/16");
        body.put("zone_ids", Arrays.asList("cn-chengdu-b","cn-chengdu-b"));
        Gson gson = (new GsonBuilder()).disableHtmlEscaping().create();
        signatureRequest.setBody(gson.toJson(body).getBytes(StandardCharsets.UTF_8));
        signatureRequest.setHeaders("content-type", "application/json");*/

        /*// Construct a GET request for the DescribeClusterResources operation of ACK in the ROA style. 
        SignatureRequest signatureRequest = new SignatureRequest(
                "GET",
                "/clusters/" + SignatureService.percentCode("c299f90b63b************") + "/resources",
                "cs.cn-chengdu.aliyuncs.com",
                "DescribeClusterResources",
                "2015-12-15");
        signatureRequest.setQueryParam("with_addon_resources", true);*/

        /*// Construct a DELETE request for the DeleteCluster operation of ACK in the ROA style. 
        SignatureRequest signatureRequest = new SignatureRequest(
                "DELETE",
                "/clusters/" + SignatureService.percentCode("c299f90b63b************"),
                "cs.cn-chengdu.aliyuncs.com",
                "DeleteCluster",
                "2015-12-15");*/

        // Generate a signature.
        SignatureService.getAuthorization(signatureRequest, accessKeyId, accessKeySecret, securityToken);

        // Test if the API can be called successfully
        callApi(signatureRequest);
    }

    /**
     * For testing only
     */
    private static void callApi(SignatureRequest signatureRequest) {
        try {
            String url = "https://" + signatureRequest.getHost() + signatureRequest.getCanonicalUri();
            URIBuilder uriBuilder = new URIBuilder(url);

            // Specify the query parameters.
            for (Map.Entry<String, Object> entry : signatureRequest.getQueryParam().entrySet()) {
                uriBuilder.addParameter(entry.getKey(), String.valueOf(entry.getValue()));
            }
            HttpUriRequest httpRequest;
            switch (signatureRequest.getHttpMethod()) {
                case "GET":
                    httpRequest = new HttpGet(uriBuilder.build());
                    break;
                case "POST":
                    HttpPost httpPost = new HttpPost(uriBuilder.build());
                    if (signatureRequest.getBody() != null) {
                        httpPost.setEntity(new ByteArrayEntity(signatureRequest.getBody(), ContentType.create(signatureRequest.getHeaders().get("content-type"))));
                    }
                    httpRequest = httpPost;
                    break;
                case "DELETE":
                    httpRequest = new HttpDelete(uriBuilder.build());
                    break;
                default:
                    System.out.println("Unsupported HTTP method: " + signatureRequest.getHttpMethod());
                    throw new IllegalArgumentException("Unsupported HTTP method");
            }

            // Add request headers.
            for (Map.Entry<String, String> entry : signatureRequest.getHeaders().entrySet()) {
                httpRequest.addHeader(entry.getKey(), entry.getValue());
            }

            // Send a request.
            try (CloseableHttpClient httpClient = HttpClients.createDefault();
                 CloseableHttpResponse response = httpClient.execute(httpRequest)) {
                String result = EntityUtils.toString(response.getEntity(), "UTF-8");
                System.out.println("API Response: " + result);
            }
        } catch (IOException | URISyntaxException e) {
            throw new RuntimeException("Failed to call API", e);
        }
    }
}
```

### Python

**Note**

In this example, the Python 3.12.3 runtime environment is used. Adjust the parameters based on your business requirements.

You must manually install the pytz and requests libraries. Run the following commands on the terminal based on your Python version:

Python3

```
pip3 install pytz
pip3 install requests
```

```
import hashlib
import hmac
import json
import os
import uuid
from collections import OrderedDict
from datetime import datetime
from typing import Any, Dict, List, Optional, Union
from urllib.parse import quote_plus, urlencode

import pytz
import requests


class SignatureRequest:
    def __init__(
            self,
            http_method: str,
            canonical_uri: str,
            host: str,
            x_acs_action: str,
            x_acs_version: str
    ):
        self.http_method = http_method
        self.canonical_uri = canonical_uri
        self.host = host
        self.x_acs_action = x_acs_action
        self.x_acs_version = x_acs_version
        self.headers = self._init_headers()
        self.query_param = OrderedDict()  # type: Dict[str, Any]
        self.body = None  # type: Optional[bytes]

    def _init_headers(self) -> Dict[str, str]:
        current_time = datetime.now(pytz.timezone('Etc/GMT'))
        headers = OrderedDict([
            ('host', self.host),
            ('x-acs-action', self.x_acs_action),
            ('x-acs-version', self.x_acs_version),
            ('x-acs-date', current_time.strftime('%Y-%m-%dT%H:%M:%SZ')),
            ('x-acs-signature-nonce', str(uuid.uuid4())),
        ])
        return headers

    def sorted_query_params(self) -> None:
        """Sort query parameters by parameter name in alphabetical order and return the encoded string."""
        self.query_param = dict(sorted(self.query_param.items()))

    def sorted_headers(self) -> None:
        """Sort request headers by header name in alphabetical order and return the encoded string."""
        self.headers = dict(sorted(self.headers.items()))


def get_authorization(request: SignatureRequest) -> None:
    try:
        new_query_param = OrderedDict()
        process_object(new_query_param, '', request.query_param)
        request.query_param.clear()
        request.query_param.update(new_query_param)
        request.sorted_query_params()

        # Step 1: Construct a canonicalized request.
        canonical_query_string = "&".join(
            f"{percent_code(quote_plus(k))}={percent_code(quote_plus(str(v)))}"
            for k, v in request.query_param.items()
        )
        hashed_request_payload = sha256_hex(request.body or b'')
        request.headers['x-acs-content-sha256'] = hashed_request_payload

        if SECURITY_TOKEN:
            signature_request.headers["x-acs-security-token"] = SECURITY_TOKEN
        request.sorted_headers()

        filtered_headers = OrderedDict()
        for k, v in request.headers.items():
            if k.lower().startswith("x-acs-") or k.lower() in ["host", "content-type"]:
                filtered_headers[k.lower()] = v

        canonical_headers = "\n".join(f"{k}:{v}" for k, v in filtered_headers.items()) + "\n"
        signed_headers = ";".join(filtered_headers.keys())

        canonical_request = (
            f"{request.http_method}\n{request.canonical_uri}\n{canonical_query_string}\n"
            f"{canonical_headers}\n{signed_headers}\n{hashed_request_payload}"
        )
        print(canonical_request)

        # Step 2: Construct a string-to-sign.
        hashed_canonical_request = sha256_hex(canonical_request.encode("utf-8"))
        string_to_sign = f"{ALGORITHM}\n{hashed_canonical_request}"
        print(string_to_sign)

        # Step 3: Calculate the signature string.
        signature = hmac256(ACCESS_KEY_SECRET.encode("utf-8"), string_to_sign).hex().lower()

        # Step 4: Specify the Authorization header.
        authorization = f'{ALGORITHM} Credential={ACCESS_KEY_ID},SignedHeaders={signed_headers},Signature={signature}'
        request.headers["Authorization"] = authorization
    except Exception as e:
        print("Failed to get authorization")
        print(e)


def form_data_to_string(form_data: Dict[str, Any]) -> str:
    tile_map = OrderedDict()
    process_object(tile_map, "", form_data)
    return urlencode(tile_map)


def process_object(result_map: Dict[str, str], key: str, value: Any) -> None:
    if value is None:
        return

    if isinstance(value, (list, tuple)):
        for i, item in enumerate(value):
            process_object(result_map, f"{key}.{i + 1}", item)
    elif isinstance(value, dict):
        for sub_key, sub_value in value.items():
            process_object(result_map, f"{key}.{sub_key}", sub_value)
    else:
        key = key.lstrip(".")
        result_map[key] = value.decode("utf-8") if isinstance(value, bytes) else str(value)


def hmac256(key: bytes, msg: str) -> bytes:
    return hmac.new(key, msg.encode("utf-8"), hashlib.sha256).digest()


def sha256_hex(s: bytes) -> str:
    return hashlib.sha256(s).hexdigest()


def call_api(request: SignatureRequest) -> None:
    url = f"https://{request.host}{request.canonical_uri}"
    if request.query_param:
        url += "?" + urlencode(request.query_param, doseq=True, safe="*")

    headers = dict(request.headers)
    data = request.body

    try:
        response = requests.request(
            method=request.http_method, url=url, headers=headers, data=data
        )
        response.raise_for_status()
        print(response.text)
    except requests.RequestException as e:
        print("Failed to send request")
        print(e)


def percent_code(encoded_str: str) -> str:
    return encoded_str.replace("+", "%20").replace("*", "%2A").replace("%7E", "~")


# Obtain the AccessKey ID and AccessKey secret from environment variables.
ACCESS_KEY_ID = os.environ.get("ALIBABA_CLOUD_ACCESS_KEY_ID")
ACCESS_KEY_SECRET = os.environ.get("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
SECURITY_TOKEN = os.environ.get("ALIBABA_CLOUD_SECURITY_TOKEN")

ALGORITHM = "ACS3-HMAC-SHA256"

"""
This is a sample signature. During debugging, you can modify the value of the main function as needed. For example, if you want to call the SendSms operation, you can refer to Example 1 and modify the http_method, host, x_acs_action, x_acs_version, and query_param parameter values. 
Between ROA-style API operations and RPC-style API operations, only the canonicalUri parameter follows different value assignment logic. 

Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in) and encapsulate the information in the signature request (SignatureRequest). 
1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (queryParam). You do not need to specify the content-type parameter. Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body. Specify a value for content-type based on the actual scenario. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set content-type to application/x-www-form-urlencoded. 
"""
if __name__ == "__main__":
    # Example 1: Call an API operation in the RPC style (Parameter position: "in":"query")
    http_method = "POST"  # The request method, which can be obtained from the API metadata. We recommend that you use the POST method. 
    canonical_uri = "/"  # The resource path of an RPC-style API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
    host = "ecs.cn-hangzhou.aliyuncs.com"  # The endpoint of the cloud service.
    x_acs_action = "DescribeInstanceStatus"  # The API operation that you want to perform.
    x_acs_version = "2014-05-26"  # The version number of the API.
    signature_request = SignatureRequest(http_method, canonical_uri, host, x_acs_action, x_acs_version)
    # Request parameters for calling the DescribeInstanceStatus operation:
    # RegionId is defined as a string in the API metadata. It is a required parameter and the position is "in":"query".
    signature_request.query_param['RegionId'] = 'cn-hangzhou'
    # InstanceId is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
    signature_request.query_param['InstanceId'] = ["i-bp10igfmnyttXXXXXXXX", "i-bp1incuofvzxXXXXXXXX",
                                                   "i-bp1incuofvzxXXXXXXXX"]

    # # Example 2: Call an API operation in the RPC style (Parameter position: "in":"body")
    # http_method = "POST"
    # canonical_uri = "/"
    # host = "ocr-api.cn-hangzhou.aliyuncs.com"
    # x_acs_action = "RecognizeGeneral"
    # x_acs_version = "2021-07-07"
    # signature_request = SignatureRequest(http_method, canonical_uri, host, x_acs_action, x_acs_version)
    # # If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body. 
    # file_path = "D:\\test.png"
    # with open(file_path, 'rb') as file:
    #     # Read the image content as a byte array.
    #     signature_request.body = file.read()
    #     signature_request.headers["content-type"] = "application/octet-stream"

    // // Example 3: Call an API operation in the RPC style (Parameter position: "in": "formData" or "in":"body")
    # http_method = "POST"
    # canonical_uri = "/"
    # host = "mt.aliyuncs.com"
    # x_acs_action = "TranslateGeneral"
    # x_acs_version = "2018-10-12"
    # signature_request = SignatureRequest(http_method, canonical_uri, host, x_acs_action, x_acs_version)
    # # Request parameters for calling the TranslateGeneral operation:
    # # Context is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
    # signature_request.query_param['Context'] = 'Morning'
    # # The position of the FormatType, SourceLanguage, and TargetLanguage parameters in the metadata is defined as "in":"formData".
    # form_data = OrderedDict()
    # form_data["FormatType"] = "text"
    # form_data["SourceLanguage"] = "zh"
    # form_data["TargetLanguage"] = "en"
    # form_data["SourceText"] = "Hello"
    # form_data["Scene"] = "general"
    # signature_request.body = bytes(form_data_to_string(form_data), 'utf-8')
    # signature_request.headers["content-type"] = "application/x-www-form-urlencoded"

    # # Example 4: Send a POST request to call an ROA-style API operation
    # http_method = "POST"
    # canonical_uri = "/clusters"
    # host = "cs.cn-beijing.aliyuncs.com"
    # x_acs_action = "CreateCluster"
    # x_acs_version = "2015-12-15"
    # signature_request = SignatureRequest(http_method, canonical_uri, host, x_acs_action, x_acs_version)
    # If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body. 
    # body = OrderedDict()
    # body["name"] = "testDemo"
    # body["region_id"] = "cn-beijing"
    # body["cluster_type"] = "ExternalKubernetes"
    # body["vpcid"] = "vpc-2zeou1uod4ylaXXXXXXXX"
    # body["container_cidr"] = "172.16.1.0/20"
    # body["service_cidr"] = "10.2.0.0/24"
    # body["security_group_id"] = "sg-2ze1a0rlgeo7XXXXXXXX"
    # body["vswitch_ids"] = ["vsw-2zei30dhfldu8XXXXXXXX"]
    # signature_request.body = bytes(json.dumps(body, separators=(',', ':')), 'utf-8')
    # signature_request.headers["content-type"] = "application/json; charset=utf-8"

    # # Example 5: Send a GET request to call an ROA-style API operation
    # http_method = "GET"
    # # If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percent_code({Value of the path parameter}).
    # cluster_id_encode = percent_code("ca72cfced86db497cab79aa28XXXXXXXX")
    # canonical_uri = f"/clusters/{cluster_id_encode}/resources"
    # host = "cs.cn-beijing.aliyuncs.com"
    # x_acs_action = "DescribeClusterResources"
    # x_acs_version = "2015-12-15"
    # signature_request = SignatureRequest(http_method, canonical_uri, host, x_acs_action, x_acs_version)
    # signature_request.query_param['with_addon_resources'] = True

    # # Example 6: Send a DELETE request to call an ROA-style API operation
    # http_method = "DELETE"
    # # If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percent_code({Value of the path parameter}).
    # cluster_id_encode = percent_code("ca72cfced86db497cab79aa28XXXXXXXX")
    # canonical_uri = f"/clusters/{cluster_id_encode}"
    # host = "cs.cn-beijing.aliyuncs.com"
    # x_acs_action = "DeleteCluster"
    # x_acs_version = "2015-12-15"
    # signature_request = SignatureRequest(http_method, canonical_uri, host, x_acs_action, x_acs_version)

    get_authorization(signature_request)
    call_api(signature_request)
```

### Go

**Note**

In this example, the go1.22.2 runtime environment is used. Adjust the parameters based on your business requirements.

You must run the following commands on the terminal:

```
go get github.com/google/uuid
go get golang.org/x/exp/maps
```

```
package main

import (
	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"io"
	"os"
	"sort"

	"golang.org/x/exp/maps"

	"fmt"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/google/uuid"
)

type Request struct {
	httpMethod   string
	canonicalUri string
	host         string
	xAcsAction   string
	xAcsVersion  string
	headers      map[string]string
	body         []byte
	queryParam   map[string]interface{}
}

func NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion string) *Request {
	req := &Request{
		httpMethod:   httpMethod,
		canonicalUri: canonicalUri,
		host:         host,
		xAcsAction:   xAcsAction,
		xAcsVersion:  xAcsVersion,
		headers:      make(map[string]string),
		queryParam:   make(map[string]interface{}),
	}
	req.headers["host"] = host
	req.headers["x-acs-action"] = xAcsAction
	req.headers["x-acs-version"] = xAcsVersion
	req.headers["x-acs-date"] = time.Now().UTC().Format(time.RFC3339)
	req.headers["x-acs-signature-nonce"] = uuid.New().String()
	return req
}

// os.Getenv() specifies that an AccessKey ID and an AccessKey secret are obtained from environment variables. 
var (
	AccessKeyId     = os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
	AccessKeySecret = os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
	SecurityToken   = os.Getenv("ALIBABA_CLOUD_SECURITY_TOKEN")
	ALGORITHM       = "ACS3-HMAC-SHA256"
)

// A sample signature. You need to adjust the parameters in the main() method. 
// API operations in the ROA and API operations in the RPC style differ only in the logic of the canonicalUri value. 
// Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in) and encapsulate the information in the signature request (SignatureRequest). 
// 1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (queryParam). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
*2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
func main() {
	// Example 1: Call an API operation in the RPC style (Parameter position: "in":"query")
	httpMethod := "POST"                   // The HTTP request method. In most cases, you can use the POST or GET method to call an API operation in the RPC style. In this example, POST is used.
	canonicalUri := "/"                    // The resource path of an RPC API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
	host := "ecs.cn-hangzhou.aliyuncs.com" // The endpoint of the cloud service.
	xAcsAction := "DescribeInstanceStatus" // The API operation that you want to perform.
	xAcsVersion := "2014-05-26"            // The version number of the API.
	req := NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion)
	// Request parameters for calling the DescribeInstanceStatus operation:
	// RegionId is defined as a string in the API metadata. It is a required parameter and the position is "in":"query".
	req.queryParam["RegionId"] = "cn-hangzhou"
	// InstanceId is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
	instanceIds := []interface{}{"i-bp10igfmnyttXXXXXXXX", "i-bp1incuofvzxXXXXXXXX", "i-bp1incuofvzxXXXXXXXX"}
	req.queryParam["InstanceId"] = instanceIds

	// // Example 2: Call an API operation in the RPC style (Parameter position: "in":"body")
	// httpMethod := "POST"
	// canonicalUri := "/"
	// host := "ocr-api.cn-hangzhou.aliyuncs.com"
	// xAcsAction := "RecognizeGeneral"
	// xAcsVersion := "2021-07-07"
	// req := NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion)
	// Read the image file content.
	// filePath := "D:\\test.png"
	// bytes, err := os.ReadFile(filePath)
	// if err != nil {
	//     fmt.Println("Error reading file:", err)
	//     return
	// }
	// req.body = bytes
	// req.headers["content-type"] = "application/octet-stream"

	// // Example 3: Call an API operation in the RPC style (Parameter position: "in": "formData" or "in":"body")
	// httpMethod := "POST"
	// canonicalUri := "/"
	// host := "mt.aliyuncs.com"
	// xAcsAction := "TranslateGeneral"
	// xAcsVersion := "2018-10-12"
	// req := NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion)
	// // Request parameters for calling the TranslateGeneral operation:
	// // Context is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
	// req.queryParam["Context"] = "Morning"
	// // The position of the FormatType, SourceLanguage, and TargetLanguage parameters in the metadata is defined as "in":"formData".
	// body := make(map[string]interface{})
	// body["FormatType"] = "text"
	// body["SourceLanguage"] = "zh"
	// body["TargetLanguage"] = "en"
	// body["SourceText"] = "Hello"
	// body["Scene"] = "general"
	// str := formDataToString(body)
	// req.body = []byte(*str)
	// req.headers["content-type"] = "application/x-www-form-urlencoded"

	// // Construct a POST request for an API operation in the ROA style.
	// httpMethod := "POST"
	// canonicalUri := "/clusters"
	// host := "cs.cn-beijing.aliyuncs.com"
	// xAcsAction := "CreateCluster"
	// xAcsVersion := "2015-12-15"
	// req := NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion)
	// // Encapsulate the request parameters. If the request parameters in the metadata contain the "in": "body" position information, specify the parameters in the body.
	// body := make(map[string]interface{})
	// body["name"] = "testDemo"
	// body["region_id"] = "cn-beijing"
	// body["cluster_type"] = "ExternalKubernetes"
	// body["vpcid"] = "vpc-2zeou1uod4ylaXXXXXXXX"
	// body["container_cidr"] = "10.0.0.0/8"
	// body["service_cidr"] = "172.16.1.0/20"
	// body["security_group_id"] = "sg-2ze1a0rlgeo7XXXXXXXX"
	// vswitch_ids := []interface{}{"vsw-2zei30dhfldu8XXXXXXXX"}
	// body["vswitch_ids"] = vswitch_ids
	// jsonBytes, err := json.Marshal(body)
	// if err != nil {
	//     fmt.Println("Error marshaling to JSON:", err)
	//     return
	// }
	// req.body = []byte(jsonBytes)
	// req.headers["content-type"] = "application/json; charset=utf-8"

	// // Construct a GET request for a ROA API operation.
	// httpMethod := "GET"
	// // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percentCode({Value of the path parameter}).
	// canonicalUri := "/clusters/" + percentCode("c558c166928f9446dae400d106e124f66") + "/resources"
	// host := "cs.cn-beijing.aliyuncs.com"
	// xAcsAction := "DescribeClusterResources"
	// xAcsVersion := "2015-12-15"
	// req := NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion)
	// req.queryParam["with_addon_resources"] = "true"

	// // Construct a DELETE request for a ROA API operation.
	// httpMethod := "DELETE"
	// // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percentCode({Value of the path parameter}).
	// canonicalUri := "/clusters/" + percentCode("c558c166928f9446dae400d106e124f66")
	// host := "cs.cn-beijing.aliyuncs.com"
	// xAcsAction := "DeleteCluster"
	// xAcsVersion := "2015-12-15"
	// req := NewRequest(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion)

	// Sign the request.
	getAuthorization(req)
	// Call the API operation.
	error := callAPI(req)
	if error != nil {
		println(error.Error())
	}
}

func callAPI(req *Request) error {
	urlStr := "https://" + req.host + req.canonicalUri
	q := url.Values{}
	keys := maps.Keys(req.queryParam)
	sort.Strings(keys)
	for _, k := range keys {
		v := req.queryParam[k]
		q.Set(k, fmt.Sprintf("%v", v))
	}
	urlStr += "?" + q.Encode()
	fmt.Println(urlStr)

	httpReq, err := http.NewRequest(req.httpMethod, urlStr, strings.NewReader(string(req.body)))
	if err != nil {
		return err
	}

	for key, value := range req.headers {
		httpReq.Header.Set(key, value)
	}

	client := &http.Client{}
	resp, err := client.Do(httpReq)
	if err != nil {
		return err
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			return
		}
	}(resp.Body)
	var respBuffer bytes.Buffer
	_, err = io.Copy(&respBuffer, resp.Body)
	if err != nil {
		return err
	}
	respBytes := respBuffer.Bytes()
	fmt.Println(string(respBytes))
	return nil
}

func getAuthorization(req *Request) {
	// Flatten the query parameters of the List and Map types.
	newQueryParams := make(map[string]interface{})
	processObject(newQueryParams, "", req.queryParam)
	req.queryParam = newQueryParams
	// Step 1: Construct a canonicalized request.
	canonicalQueryString := ""
	keys := maps.Keys(req.queryParam)
	sort.Strings(keys)
	for _, k := range keys {
		v := req.queryParam[k]
		canonicalQueryString += percentCode(url.QueryEscape(k)) + "=" + percentCode(url.QueryEscape(fmt.Sprintf("%v", v))) + "&"
	}
	canonicalQueryString = strings.TrimSuffix(canonicalQueryString, "&")
	fmt.Printf("canonicalQueryString========>%s\n", canonicalQueryString)

	var bodyContent []byte
	if req.body == nil {
		bodyContent = []byte("")
	} else {
		bodyContent = req.body
	}
	hashedRequestPayload := sha256Hex(bodyContent)
	req.headers["x-acs-content-sha256"] = hashedRequestPayload

	if SecurityToken != "" {
		req.headers["x-acs-security-token"] = SecurityToken
	}

	canonicalHeaders := ""
	signedHeaders := ""
	HeadersKeys := maps.Keys(req.headers)
	sort.Strings(HeadersKeys)
	for _, k := range HeadersKeys {
		lowerKey := strings.ToLower(k)
		if lowerKey == "host" || strings.HasPrefix(lowerKey, "x-acs-") || lowerKey == "content-type" {
			canonicalHeaders += lowerKey + ":" + req.headers[k] + "\n"
			signedHeaders += lowerKey + ";"
		}
	}
	signedHeaders = strings.TrimSuffix(signedHeaders, ";")

	canonicalRequest := req.httpMethod + "\n" + req.canonicalUri + "\n" + canonicalQueryString + "\n" + canonicalHeaders + "\n" + signedHeaders + "\n" + hashedRequestPayload
	fmt.Printf("canonicalRequest========>\n%s\n", canonicalRequest)

	// Step 2: Construct a string-to-sign.
	hashedCanonicalRequest := sha256Hex([]byte(canonicalRequest))
	stringToSign := ALGORITHM + "\n" + hashedCanonicalRequest
	fmt.Printf("stringToSign========>\n%s\n", stringToSign)

	// Step 3: Calculate the signature string.
	byteData, err := hmac256([]byte(AccessKeySecret), stringToSign)
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
	signature := strings.ToLower(hex.EncodeToString(byteData))

	// Step 4: Specify the Authorization header.
	authorization := ALGORITHM + " Credential=" + AccessKeyId + ",SignedHeaders=" + signedHeaders + ",Signature=" + signature
	req.headers["Authorization"] = authorization
}

func hmac256(key []byte, toSignString string) ([]byte, error) {
	// Obtain the object on which the HMAC-SHA256 algorithm is implemented.
	h := hmac.New(sha256.New, key)
	// Construct a string-to-sign.
	_, err := h.Write([]byte(toSignString))
	if err != nil {
		return nil, err
	}
	// Calculate the hash value of the signature string and return the hash value.
	return h.Sum(nil), nil
}

func sha256Hex(byteArray []byte) string {
	// Obtain the object on which the SHA-256 algorithm is implemented.
	hash := sha256.New()
	// Write the signature string to the hash function.
	_, _ = hash.Write(byteArray)
	// Calculate the hash value of the signature string by using the SHA-256 algorithm and return the hash value as a string in the hexadecimal format in lowercase letters.
	hexString := hex.EncodeToString(hash.Sum(nil))

	return hexString
}

func percentCode(str string) string {
	// Replace specific characters.
	str = strings.ReplaceAll(str, "+", "%20")
	str = strings.ReplaceAll(str, "*", "%2A")
	str = strings.ReplaceAll(str, "%7E", "~")
	return str
}

func formDataToString(formData map[string]interface{}) *string {
	tmp := make(map[string]interface{})
	processObject(tmp, "", formData)
	res := ""
	urlEncoder := url.Values{}
	for key, value := range tmp {
		v := fmt.Sprintf("%v", value)
		urlEncoder.Add(key, v)
	}
	res = urlEncoder.Encode()
	return &res
}

// processObject: the objects on which recursion is performed. Complex objects such as maps and lists are recursively decomposed into key-value pairs.
func processObject(mapResult map[string]interface{}, key string, value interface{}) {
	if value == nil {
		return
	}

	switch v := value.(type) {
	case []interface{}:
		for i, item := range v {
			processObject(mapResult, fmt.Sprintf("%s.%d", key, i+1), item)
		}
	case map[string]interface{}:
		for subKey, subValue := range v {
			processObject(mapResult, fmt.Sprintf("%s.%s", key, subKey), subValue)
		}
	default:
		if strings.HasPrefix(key, ".") {
			key = key[1:]
		}
		if b, ok := v.([]byte); ok {
			mapResult[key] = string(b)
		} else {
			mapResult[key] = fmt.Sprintf("%v", v)
		}
	}
}
```

### **Node.js**

**Note**

In this example, the Node.js v20.13.1 runtime environment is used. Adjust the parameters based on your business requirements.

In this example, Node.js is used.

```
const crypto = require('crypto');
const fs = require('fs');

class Request {
    constructor(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion) {
        this.httpMethod = httpMethod;
        this.canonicalUri = canonicalUri || '/';
        this.host = host;
        this.xAcsAction = xAcsAction;
        this.xAcsVersion = xAcsVersion;
        this.headers = {};
        this.body = null;
        this.queryParam = {};
        this.initHeader();
    }

    initHeader() {
        const date = new Date();
        this.headers = {
            'host': this.host,
            'x-acs-action': this.xAcsAction,
            'x-acs-version': this.xAcsVersion,
            'x-acs-date': date.toISOString().replace(/\..+/, 'Z'),
            'x-acs-signature-nonce': crypto.randomBytes(16).toString('hex')
        }
    }
}

const ALGORITHM = 'ACS3-HMAC-SHA256';
const accessKeyId = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID;
const accessKeySecret = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET;
const securityToken = process.env.ALIBABA_CLOUD_SECURITY_TOKEN;
const encoder = new TextEncoder()

if (!accessKeyId || !accessKeySecret) {
    console.error('ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variables must be set.');
    process.exit(1);
}

function getAuthorization(signRequest) {
    try {
        newQueryParam = {};
        processObject(newQueryParam, "", signRequest.queryParam);
        signRequest.queryParam = newQueryParam;
        // Step 1: Construct a canonicalized request.
        const canonicalQueryString = Object.entries(signRequest.queryParam)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, value]) => `${percentCode(key)}=${percentCode(value)}`)
            .join('&');

        // The request body. If the request body is empty, such as in a GET request, use an empty string as the value of the RequestPayload parameter.
        const requestPayload = signRequest.body || encoder.encode('');
        const hashedRequestPayload = sha256Hex(requestPayload);
        signRequest.headers['x-acs-content-sha256'] = hashedRequestPayload;
        if (securityToken) {
            signRequest.headers['x-acs-security-token'] = securityToken;
        }

        // Convert all header names to lowercase.
        signRequest.headers = Object.fromEntries(
            Object.entries(signRequest.headers).map(([key, value]) => [key.toLowerCase(), value])
        );

        const sortedKeys = Object.keys(signRequest.headers)
            .filter(key => key.startsWith('x-acs-') || key === 'host' || key === 'content-type')
            .sort();
        // The request headers that are used for signature calculation. Use semicolons (;) to concatenate all the headers by lowercase header name in alphabetical order.
        const signedHeaders = sortedKeys.join(";")
        // Construct request headers. Concatenate multiple canonicalized request headers by lowercase header name in alphabetical order.
        const canonicalHeaders = sortedKeys.map(key => `${key}:${signRequest.headers[key]}`).join('\n') + '\n';

        const canonicalRequest = [
            signRequest.httpMethod,
            signRequest.canonicalUri,
            canonicalQueryString,
            canonicalHeaders,
            signedHeaders,
            hashedRequestPayload
        ].join('\n');
        console.log('canonicalRequest=========>\n', canonicalRequest);

        // Step 2: Construct a string-to-sign.
        const hashedCanonicalRequest = sha256Hex(encoder.encode(canonicalRequest));
        const stringToSign = `${ALGORITHM}\n${hashedCanonicalRequest}`;
        console.log('stringToSign=========>', stringToSign);

        // Step 3: Calculate the signature string.
        const signature = hmac256(accessKeySecret, stringToSign);
        console.log('signature=========>', signature);

        // Step 4: Specify the Authorization header.
        const authorization = `${ALGORITHM} Credential=${accessKeyId},SignedHeaders=${signedHeaders},Signature=${signature}`;
        console.log('authorization=========>', authorization);
        signRequest.headers['Authorization'] = authorization;
    } catch (error) {
        console.error('Failed to get authorization');
        console.error(error);
    }
}

async function callApi(signRequest) {
    try {
        let url = `https://${signRequest.host}${signRequest.canonicalUri}`;
        // Configure request parameters.
        if (signRequest.queryParam) {
            const query = new URLSearchParams(signRequest.queryParam);
            url += '?' + query.toString();
        }
        console.log('url=========>', url);

        // Configure request options.
        let options = {
            method: signRequest.httpMethod.toUpperCase(),
            headers: signRequest.headers
        };

        // Process the request body.
        if (signRequest.body && ['POST', 'PUT'].includes(signRequest.httpMethod.toUpperCase())) {
            options.body = signRequest.body;
        }
        return (await fetch(url, options)).text();
    } catch (error) {
        console.error('Failed to send request:', error);
    }
}

function percentCode(str) {
    return encodeURIComponent(str)
        .replace(/\+/g, '%20')
        .replace(/\*/g, '%2A')
        .replace(/~/g, '%7E');
}

function hmac256(key, data) {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(data, 'utf8');
    return hmac.digest('hex').toLowerCase();
}

function sha256Hex(bytes) {
    const hash = crypto.createHash('sha256');
    const digest = hash.update(bytes).digest('hex');
    return digest.toLowerCase();
}

function formDataToString(formData) {
    const tmp = {};
    processObject(tmp, "", formData);
    let queryString = '';
    for (let [key, value] of Object.entries(tmp)) {
        if (queryString !== '') {
            queryString += '&';
        }
        queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
    return queryString;
}

function processObject(map, key, value) {
    // No further processing is required for a null value.
    if (value === null) {
        return;
    }
    if (key === null) {
        key = "";
    }

    // If the value is of the Array type, traverse the array and perform recursion on each element.
    if (Array.isArray(value)) {
        value.forEach((item, index) => {
            processObject(map, `${key}.${index + 1}`, item);
        });
    } else if (typeof value === 'object' && value !== null) {
        // If the value is of the Object type, traverse the object and perform recursion on each key-value pair.
        Object.entries(value).forEach(([subKey, subValue]) => {
            processObject(map, `${key}.${subKey}`, subValue);
        });
    } else {
        // If a key starts with a period (.), remove the period (.) to maintain the continuity of keys.
        if (key.startsWith('.')) {
            key = key.slice(1);
        }
        map[key] = String(value);
    }
}

/**
 * A sample signature. You need to adjust the parameters in the main() method. 
 * API operations in the ROA and API operations in the RPC style differ only in the logic of the canonicalUri value. 
 *
 * Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in) and encapsulate the information in the signature request (SignatureRequest). 
 *1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (queryParam). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
 *2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
 3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
 */

// Example 1: Call an API operation in the RPC style (Parameter position: "in":"query")
const httpMethod = 'POST'; // The HTTP request method. In most cases, you can use the POST or GET method to call an API operation in the RPC style. In this example, POST is used.
const canonicalUri = '/'; // The resource path of an RPC API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
const host = 'ecs.cn-hangzhou.aliyuncs.com'; // endpoint
const xAcsAction = 'DescribeInstanceStatus'; // The API operation that you want to perform.
const xAcsVersion = '2014-05-26'; // The version number of the API.
const signRequest = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion, xAcsVersion);
// Request parameters for calling the DescribeInstanceStatus operation:
signRequest.queryParam = {
    // RegionId is defined as a string in the API metadata. It is a required parameter and the position is "in":"query".
    RegionId: 'cn-hangzhou',
    // InstanceId is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
    InstanceId: ["i-bp10igfmnyttXXXXXXXX", "i-bp1incuofvzxXXXXXXXX", "i-bp1incuofvzxXXXXXXXX"],
}


// // Example 2: Call an API operation in the RPC style (Parameter position: "in":"body")
// const httpMethod = 'POST';
// const canonicalUri = '/';
// const host = 'ocr-api.cn-hangzhou.aliyuncs.com';
// const xAcsAction = 'RecognizeGeneral';
// const xAcsVersion = '2021-07-07';
// const signRequest = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion, xAcsVersion);
// const filePath = 'D:\\test.png';
// const bytes = fs.readFileSync(filePath);
// // If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body.
// signRequest.body = bytes;
// signRequest.headers['content-type'] = 'application/octet-stream';


// // Example 3: Call an API operation in the RPC style (Parameter position: "in": "formData" or "in":"body")
// const httpMethod = 'POST'; // The HTTP request method. In most cases, you can use the POST or GET method to call an API operation in the RPC style. In this example, POST is used.
// const canonicalUri = '/'; // The resource path of an RPC API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
// const host = 'mt.aliyuncs.com'; // endpoint
// const xAcsAction = 'TranslateGeneral'; // The API operation that you want to perform.
// const xAcsVersion = '2018-10-12'; // The version number of the API.
// const signRequest = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion, xAcsVersion);
// // Request parameters for calling the TranslateGeneral operation:
// // Context is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
// signRequest.queryParam["Context"] = "Morning";
// // The position of the FormatType, SourceLanguage, and TargetLanguage parameters in the metadata is defined as "in":"formData".
// const formData = {
//     SourceLanguage: "zh",
//     TargetLanguage: "en",
//     FormatType: "text",
//     Scene: "general",
//     SourceText: 'Hello'
// }
// const str = formDataToString(formData)
// signRequest.body = encoder.encode(str);
// signRequest.headers['content-type'] = 'application/x-www-form-urlencoded';


// // Construct a POST request for a ROA API operation.
// const httpMethod = 'POST';
// const canonicalUri = '/clusters';
// const host = 'cs.cn-beijing.aliyuncs.com';
// const xAcsAction = 'CreateCluster';
// const xAcsVersion = '2015-12-15';
// const signRequest = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion, xAcsVersion);
// // If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body.
// const body = {
//     name: 'testDemo',
//     region_id: 'cn-beijing',
//     cluster_type: 'ExternalKubernetes',
//     vpcid: 'vpc-2zeou1uod4ylaf35teei9',
//     container_cidr: '10.0.0.0/8',
//     service_cidr: '172.16.3.0/20',
//     security_group_id: 'sg-2ze1a0rlgeo7dj37dd1q',
//     vswitch_ids: [
//         'vsw-2zei30dhfldu8ytmtarro'
//       ],
// }
// signRequest.body = encoder.encode(JSON.stringify(body));
// signRequest.headers['content-type'] = 'application/json';


// // Construct a GET request for a ROA API operation.
// const httpMethod = 'GET';
// // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percentCode({Value of the path parameter}).
// const canonicalUri = '/clusters/' + percentCode("c28c2615f8bfd466b9ef9a76c61706e96") + '/resources';
// const host = 'cs.cn-beijing.aliyuncs.com';
// const xAcsAction = 'DescribeClusterResources';
// const xAcsVersion = '2015-12-15';
// const signRequest = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion, xAcsVersion);
// signRequest.queryParam = {
//     with_addon_resources: true,
// }


// // Construct a DELETE request for a ROA API operation.
// const httpMethod = 'DELETE';
// // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percentCode({Value of the path parameter}).
// const canonicalUri = '/clusters/' + percentCode("c28c2615f8bfd466b9ef9a76c61706e96");
// const host = 'cs.cn-beijing.aliyuncs.com';
// const xAcsAction = 'DeleteCluster';
// const xAcsVersion = '2015-12-15';
// const signRequest = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion, xAcsVersion);

getAuthorization(signRequest);
// Call the API operation.
callApi(signRequest).then(r => {
    console.log(r);
}).catch(error => {
    console.error(error);
});
```

## PHP

**Note**

In this example, the PHP 7.4.33 runtime environment is used. Adjust the parameters based on your business requirements.

```
<?php

class SignatureDemo
{
    // The encryption algorithm.
    private $ALGORITHM;
    // Access Key ID
    private $AccessKeyId;
    // Access Key Secret
    private $AccessKeySecret;

    private $SecurityToken;

    public function __construct()
    {
        date_default_timezone_set('UTC'); // Set the time zone to GMT.
        $this->AccessKeyId = getenv('ALIBABA_CLOUD_ACCESS_KEY_ID'); // getenv() specifies that the AccessKey ID of the RAM user is obtained from the environment variables.
        $this->AccessKeySecret = getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET'); // getenv() specifies that the AccessKey secret of the RAM user is obtained from the environment variables.
        $this->SecurityToken = getenv('ALIBABA_CLOUD_SECURITY_TOKEN');
        $this->ALGORITHM = 'ACS3-HMAC-SHA256'; // Specify the encryption method.
    }

    /**
     * A sample signature. You need to adjust the parameters in the main() method. 
     * API operations in the ROA and API operations in the RPC style differ only in the logic of the canonicalUri value. 
     *
     * Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in) and encapsulate the information in the signature request (SignatureRequest). 
     *1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (queryParam). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
     *2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
     3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
     */
    public function main()
    {
        // Example 1: Call an API operation in the RPC style (Parameter position: "in":"query")
        $request = $this->createRequest('POST', '/', 'ecs.cn-hangzhou.aliyuncs.com', 'DescribeInstanceStatus', '2014-05-26');
        // Request parameters for calling the DescribeInstanceStatus operation:
        $request['queryParam'] = [
            // RegionId is defined as a string in the API metadata. It is a required parameter and the position is "in":"query".
            'RegionId' => 'cn-hangzhou',
            // InstanceId is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
            'InstanceId' => ["i-bp11ht4h2kdXXXXXXXX", "i-bp16maz3h3xgXXXXXXXX", "i-bp10r67hmslXXXXXXXX"]
        ];

        // // Example 2: Call an API operation in the RPC style (Parameter position: "in":"body")
        // $request = $this->createRequest('POST', '/', 'ocr-api.cn-hangzhou.aliyuncs.com', 'RecognizeGeneral', '2021-07-07');
        // // If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body. 
        // $filePath = 'D:\\test.png';
        // // Specify a binary file.
        // $fileResource = fopen($filePath, 'rb');
        // $request['body'] = stream_get_contents($fileResource); 
        // $request['headers']['content-type'] = 'application/octet-stream'; // Set Content-Type to application/octet-stream.
        // // Close the file.
        // fclose($fileResource);


        // // Example 3: Call an API operation in the RPC style (Parameter position: "in": "formData" or "in":"body")
        // $request = $this->createRequest('POST', '/', 'mt.aliyuncs.com', 'TranslateGeneral', '2018-10-12');
        // // Request parameters for calling the TranslateGeneral operation:
        // $request['queryParam'] = [
        //     // Context is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
        //     'Context' => 'Morning',
        // ];
        // $formData = [
        //     'FormatType' => 'text',
        //     'SourceLanguage' => 'zh',
        //     'TargetLanguage' => 'en',
        //     'SourceText' => 'Hello',
        //     'Scene' => 'general',
        // ];
        // $str = self::formDataToString($formData);
        // $request['body'] = $str;
        // $request['headers']['content-type'] = 'application/x-www-form-urlencoded';


        // // Construct a POST request for a ROA API operation.
        // $request = $this->createRequest('POST', '/clusters', 'cs.cn-beijing.aliyuncs.com', 'CreateCluster', '2015-12-15');
        // $bodyData = [
        //     'name' => 'Test cluster',
        //     'region_id' => 'cn-beijing',
        //     'cluster_type' => 'ExternalKubernetes',
        //     'vpcid' => 'vpc-2zeou1uod4ylaXXXXXXXX',
        //     'service_cidr' => '10.2.0.0/24',
        //     'security_group_id' => 'sg-2ze1a0rlgeo7XXXXXXXX',
        //     "vswitch_ids" => [
        //         "vsw-2zei30dhfldu8XXXXXXXX"
        //     ]
        // ];
        // $request['body'] = json_encode($bodyData, JSON_UNESCAPED_UNICODE);
        // $request['headers']['content-type'] = 'application/json; charset=utf-8'; 


        // // Construct a GET request for a ROA API operation.
        // // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying rawurlencode({Value of the path parameter}).
        // $cluster_id = 'c930976b3b1fc4e02bc09831dXXXXXXXX';
        // $canonicalUri = sprintf("/clusters/%s/resources", rawurlencode($cluster_id));
        // $request = $this->createRequest('GET', $canonicalUri, 'cs.cn-beijing.aliyuncs.com', 'DescribeClusterResources', '2015-12-15');
        // $request['queryParam'] = [
        //     'with_addon_resources' => true,
        // ];


        // // Construct a DELETE request for a ROA API operation.
        // $cluster_id = 'c930976b3b1fc4e02bc09831dXXXXXXXX';
        // $canonicalUri = sprintf("/clusters/%s", rawurlencode($cluster_id));
        // $request = $this->createRequest('DELETE', $canonicalUri, 'cs.cn-beijing.aliyuncs.com', 'DeleteCluster', '2015-12-15');

        $this->getAuthorization($request);
        // Call the API operation.
        $this->callApi($request);
    }

    private function createRequest($httpMethod, $canonicalUri, $host, $xAcsAction, $xAcsVersion)
    {
        $headers = [
            'host' => $host,
            'x-acs-action' => $xAcsAction,
            'x-acs-version' => $xAcsVersion,
            'x-acs-date' => gmdate('Y-m-d\TH:i:s\Z'),
            'x-acs-signature-nonce' => bin2hex(random_bytes(16)),
        ];
        return [
            'httpMethod' => $httpMethod,
            'canonicalUri' => $canonicalUri,
            'host' => $host,
            'headers' => $headers,
            'queryParam' => [],
            'body' => null,
        ];
    }

    private function getAuthorization(&$request)
    {
        $request['queryParam'] = $this->processObject($request['queryParam']);
        $canonicalQueryString = $this->buildCanonicalQueryString($request['queryParam']);
        $hashedRequestPayload = hash('sha256', $request['body'] ??  '');
        $request['headers']['x-acs-content-sha256'] = $hashedRequestPayload;

        if($this->SecurityToken){
            $request['headers']['x-acs-security-token'] = $this->SecurityToken;
        }

        $canonicalHeaders = $this->buildCanonicalHeaders($request['headers']);
        $signedHeaders = $this->buildSignedHeaders($request['headers']);

        $canonicalRequest = implode("\n", [
            $request['httpMethod'],
            $request['canonicalUri'],
            $canonicalQueryString,
            $canonicalHeaders,
            $signedHeaders,
            $hashedRequestPayload,
        ]);

        $hashedCanonicalRequest = hash('sha256', $canonicalRequest);
        $stringToSign = "{$this->ALGORITHM}\n$hashedCanonicalRequest";

        $signature = strtolower(bin2hex(hash_hmac('sha256', $stringToSign, $this->AccessKeySecret, true)));
        $authorization = "{$this->ALGORITHM} Credential={$this->AccessKeyId},SignedHeaders=$signedHeaders,Signature=$signature";

        $request['headers']['Authorization'] = $authorization;
    }

    private function callApi($request)
    {
        try {
            // Send the request by using cURL.
            $url = "https://" . $request['host'] . $request['canonicalUri'];

            // Add the request parameters to the URL.
            if (!empty($request['queryParam'])) {
                $url .= '?' . http_build_query($request['queryParam']);
            }

            echo $url;
            // Initialize a cURL session.
            $ch = curl_init();

            // Set cURL options.
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL certificate verification. This increases security risks. We recommend that you do not disable SSL certificate verification in production environments. ! !)
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the results but do not output the results.
            curl_setopt($ch, CURLOPT_HTTPHEADER, $this->convertHeadersToArray($request['headers'])); // Add request headers.

            // Set cURL options based on the request type.
            switch ($request['httpMethod']) {
                case "GET":
                    break;
                case "POST":
                    curl_setopt($ch, CURLOPT_POST, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $request['body']);
                    break;
                case "DELETE":
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
                    break;
                default:
                    echo "Unsupported HTTP method: " . $request['body'];
                    throw new Exception("Unsupported HTTP method");
            }

            // Send a request.
            $result = curl_exec($ch);

            // Check whether an error occurs.
            if (curl_errno($ch)) {
                echo "Failed to send request: " . curl_error($ch);
            } else {
                echo $result;
            }

        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        } finally {
            // Close the cURL session.
            curl_close($ch);
        }
    }

    function formDataToString($formData)
    {
        $res = self::processObject($formData);
        return http_build_query($res);
    }

    function processObject($value)
    {
        // No further processing is required for a null value.
        if ($value === null) {
            return;
        }
        $tmp = [];
        foreach ($value as $k => $v) {
            if (0 !== strpos($k, '_')) {
                $tmp[$k] = $v;
            }
        }
        return self::flatten($tmp);
    }

    private static function flatten($items = [], $delimiter = '.', $prepend = '')
    {
        $flatten = [];
        foreach ($items as $key => $value) {
            $pos = \is_int($key) ?  $key + 1 : $key;

            if (\is_object($value)) {
                $value = get_object_vars($value);
            }

            if (\is_array($value) && !empty($value)) {
                $flatten = array_merge(
                    $flatten,
                    self::flatten($value, $delimiter, $prepend . $pos . $delimiter)
                );
            } else {
                if (\is_bool($value)) {
                    $value = true === $value ?  'true' : 'false';
                }
                $flatten["$prepend$pos"] = $value;
            }
        }
        return $flatten;
    }


    private function convertHeadersToArray($headers)
    {
        $headerArray = [];
        foreach ($headers as $key => $value) {
            $headerArray[] = "$key: $value";
        }
        return $headerArray;
    }


    private function buildCanonicalQueryString($queryParams)
    {

        ksort($queryParams);
        // Build and encode query parameters
        $params = [];
        foreach ($queryParams as $k => $v) {
            if (null === $v) {
                continue;
            }
            $str = rawurlencode($k);
            if ('' !== $v && null !== $v) {
                $str .= '=' . rawurlencode($v);
            } else {
                $str .= '=';
            }
            $params[] = $str;
        }
        return implode('&', $params);
    }

    private function buildCanonicalHeaders($headers)
    {
        // Sort headers by key and concatenate them
        uksort($headers, 'strcasecmp');
        $canonicalHeaders = '';
        foreach ($headers as $key => $value) {
            $canonicalHeaders .= strtolower($key) . ':' . trim($value) . "\n";
        }
        return $canonicalHeaders;
    }

    private function buildSignedHeaders($headers)
    {
        // Build the signed headers string
        $signedHeaders = array_keys($headers);
        sort($signedHeaders, SORT_STRING | SORT_FLAG_CASE);
        return implode(';', array_map('strtolower', $signedHeaders));
    }
}

$demo = new SignatureDemo();
$demo->main();
```

## .NET

**Note**

In this example, the .NET 8.0.302 runtime environment is used. Adjust the parameters based on your business requirements.

```
using System.Globalization;
using System.Net;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using Newtonsoft.Json;

namespace SignatureDemo
{
    public class Request
    {
        public string HttpMethod { get; private set; }
        public string CanonicalUri { get; private set; }
        public string Host { get; private set; }
        public string XAcsAction { get; private set; }
        public string XAcsVersion { get; private set; }
        public SortedDictionary<string, object> Headers { get; private set; }
        public byte[]?  Body { get; set; }
        public Dictionary<string, object> QueryParam { get; set; }

        public Request(string httpMethod, string canonicalUri, string host, string xAcsAction, string xAcsVersion)
        {
            HttpMethod = httpMethod;
            CanonicalUri = canonicalUri;
            Host = host;
            XAcsAction = xAcsAction;
            XAcsVersion = xAcsVersion;
            Headers = [];
            QueryParam = [];
            Body = null;
            InitHeader();
        }

        private void InitHeader()
        {
            Headers["host"] = Host;
            Headers["x-acs-action"] = XAcsAction;
            Headers["x-acs-version"] = XAcsVersion;
            DateTime utcNow = DateTime.UtcNow;
            Headers["x-acs-date"] = utcNow.ToString("yyyy-MM-dd'T'HH:mm:ss'Z'", CultureInfo.InvariantCulture);
            Headers["x-acs-signature-nonce"] = Guid.NewGuid().ToString();
        }
    }

    public class Program
    {
        private static readonly string AccessKeyId = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_ID") ??  throw new InvalidOperationException("The environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is not specified.");
        private static readonly string AccessKeySecret = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_ACCESS_KEY_SECRET") ??  throw new InvalidOperationException("The environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is not specified.");
        private static readonly string?  SecurityToken = Environment.GetEnvironmentVariable("ALIBABA_CLOUD_SECURITY_TOKEN");
        private const string Algorithm = "ACS3-HMAC-SHA256";
        private const string ContentType = "content-type";

        /**
        * A sample signature. You need to adjust the parameters in the main() method. 
        * API operations in the ROA and API operations in the RPC style differ only in the logic of the canonicalUri value. 
        *
        * Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in) and encapsulate the information in the signature request (SignatureRequest). 
        *1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (queryParam). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
        *2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
        3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
        */
        public static void Main(string[] args)
        {
            // Example 1: Call an API operation in the RPC style (Parameter position: "in":"query")
            string httpMethod = "POST"; // The HTTP request method. In most cases, you can use the POST or GET method to call an API operation in the RPC style. In this example, POST is used.
            string canonicalUri = "/"; // The resource path of an RPC API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
            string host = "ecs.cn-hangzhou.aliyuncs.com"; // The endpoint of the cloud service.
            string xAcsAction = "DescribeInstanceStatus"; // The API operation that you want to perform.
            string xAcsVersion = "2014-05-26"; // The version number of the API.
            var request = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);
            // Request parameters for calling the DescribeInstanceStatus operation:
            // RegionId is defined as a string in the API metadata. It is a required parameter and the position is "in":"query".
            request.QueryParam["RegionId"] = "cn-hangzhou"; 
            // InstanceId is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
            List<string> instanceIds = ["i-bp10igfmnyttXXXXXXXX", "i-bp1incuofvzxXXXXXXXX", "i-bp1incuofvzxXXXXXXXX"];
            request.QueryParam["InstanceId"] = instanceIds; 

            // // Example 2: Call an API operation in the RPC style (Parameter position: "in":"body")
            // string httpMethod = "POST"; 
            // string canonicalUri = "/"; 
            // string host = "ocr-api.cn-hangzhou.aliyuncs.com"; 
            // string xAcsAction = "RecognizeGeneral"; 
            // string xAcsVersion = "2021-07-07"; 
            // var request = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);
            // // If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body. 
            // request.Body = File.ReadAllBytes(@"D:\test.png");
            // request.Headers["content-type"] = "application/octet-stream";


            // // Example 3: Call an API operation in the RPC style (Parameter position: "in": "formData" or "in":"body")
            // string httpMethod = "POST"; 
            // string canonicalUri = "/"; 
            // string host = "mt.aliyuncs.com"; 
            // string xAcsAction = "TranslateGeneral"; 
            // string xAcsVersion = "2018-10-12"; 
            // var request = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);
            // // Request parameters for calling the TranslateGeneral operation:
            // // Context is defined as a string in the API metadata. It is an optional parameter and the position is "in":"query".
            // request.QueryParam["Context"] = "Morning"; 
            // // The position of the FormatType, SourceLanguage, and TargetLanguage parameters in the metadata is defined as "in":"formData".
            // var body = new Dictionary<string, object>
            // {
            //     { "FormatType", "text" },
            //     { "SourceLanguage", "zh" },
            //     { "TargetLanguage", "en" },
            //     { "SourceText", "Hello" },
            //     { "Scene", "general" },
            // };
            // var str = FormDataToString(body);
            // request.Body = Encoding.UTF8.GetBytes(str);
            // request.Headers[ContentType] = "application/x-www-form-urlencoded";


            // // Construct a POST request for a ROA API operation.
            // String httpMethod = "POST";
            // String canonicalUri = "/clusters";
            // String host = "cs.cn-beijing.aliyuncs.com";
            // String xAcsAction = "CreateCluster"; 
            // String xAcsVersion = "2015-12-15"; 
            // Request request = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);
            // // The request body. Use JsonConvert to convert the request body into a JSON string.
            // var body = new SortedDictionary<string, object>
            // {
            //     { "name", "testDemo" },
            //     { "region_id", "cn-beijing" },
            //     { "cluster_type", "ExternalKubernetes" },
            //     { "vpcid", "vpc-2zeou1uod4ylaXXXXXXXX" },
            //     { "container_cidr", "10.0.0.0/8" },
            //     { "service_cidr", "172.16.1.0/20" },
            //     { "security_group_id", "sg-2ze1a0rlgeo7XXXXXXXX" },
            //     { "vswitch_ids", new List<string>{"vsw-2zei30dhfldu8XXXXXXXX"} },
            // };
            // string jsonBody = JsonConvert.SerializeObject(body, Formatting.None);
            // request.Body = Encoding.UTF8.GetBytes(jsonBody);
            // request.Headers[ContentType] = "application/json; charset=utf-8";

            // // Construct a GET request for a ROA API operation.
            // String httpMethod = "GET";
            // // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percentCode({Value of the path parameter}).
            // String canonicalUri = "/clusters/" + PercentCode("c81d501a467594eab873edbf2XXXXXXXX") + "/resources";
            // String host = "cs.cn-beijing.aliyuncs.com"; 
            // String xAcsAction = "DescribeClusterResources"; 
            // String xAcsVersion = "2015-12-15"; 
            // Request request = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);
            // request.QueryParam["with_addon_resources"]=true;

            // // Construct a DELETE request for a ROA API operation.
            // String httpMethod = "DELETE";
            // // If the value of the canonicalUri parameter contains the value of the path parameter, encode the value of the path parameter by specifying percentCode({Value of the path parameter}).
            // String canonicalUri = "/clusters/" + PercentCode("c81d501a467594eab873edbf2XXXXXXXX");
            // String host = "cs.cn-beijing.aliyuncs.com"; 
            // String xAcsAction = "DeleteCluster"; 
            // String xAcsVersion = "2015-12-15"; 
            // Request request = new Request(httpMethod, canonicalUri, host, xAcsAction, xAcsVersion);

            GetAuthorization(request);
            // Call the API operation.
            var result = CallApiAsync(request);
            Console.WriteLine($"result:{result.Result}");
        }

        private static async Task<string?> CallApiAsync(Request request)
        {
            try
            {
                // Create an HttpClient instance.
                using var httpClient = new HttpClient();

                // Construct a URL.
                string url = $"https://{request.Host}{request.CanonicalUri}";
                var uriBuilder = new UriBuilder(url);
                var query = new List<string>();

                // Configure request parameters.
                foreach (var entry in request.QueryParam.OrderBy(e => e.Key.ToLower()))
                {
                    string value = entry.Value?.ToString() ??  "";
                    query.Add($"{entry.Key}={Uri.EscapeDataString(value)}");
                }

                uriBuilder.Query = string.Join("&", query);
                Console.WriteLine(uriBuilder.Uri);
                var requestMessage = new HttpRequestMessage
                {
                    Method = new HttpMethod(request.HttpMethod),
                    RequestUri = uriBuilder.Uri,
                };

                // Configure request headers.
                foreach (var entry in request.Headers)
                {
                    if (entry.Key == "Authorization")
                    {
                        requestMessage.Headers.TryAddWithoutValidation("Authorization", entry.Value.ToString()); ;
                    }
                    else if (entry.Key == ContentType) // The value of the ContentType key must be consistent with that defined in the main method.
                    {
                        continue;
                    }
                    else
                    {
                        requestMessage.Headers.Add(entry.Key, entry.Value.ToString());
                    }
                }

                if (request.Body != null)
                {
                    HttpContent content = new ByteArrayContent(request.Body);
                    string contentType = request.Headers["content-type"].ToString();
                    content.Headers.ContentType = MediaTypeHeaderValue.Parse(contentType);
                    requestMessage.Content = content;
                }
                
                // Send a request.
                HttpResponseMessage response = await httpClient.SendAsync(requestMessage);
                // Read the content of the returned response.
                string result = await response.Content.ReadAsStringAsync();
                return result;
            }
            catch (UriFormatException e)
            {
                Console.WriteLine("Invalid URI syntax");
                Console.WriteLine(e.Message);
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine("Failed to send request");
                Console.WriteLine(e);
                return null;
            }
        }

        private static void GetAuthorization(Request request)
        {
            try
            {
                // Flatten the query parameters of the List and Map types.
                request.QueryParam = FlattenDictionary(request.QueryParam);

                // Step 1: Construct a canonicalized request.
                StringBuilder canonicalQueryString = new();
                foreach (var entry in request.QueryParam.OrderBy(e => e.Key.ToLower()))
                {
                    if (canonicalQueryString.Length > 0)
                    {
                        canonicalQueryString.Append('&');
                    }
                    canonicalQueryString.Append($"{PercentCode(entry.Key)}={PercentCode(entry.Value?.ToString() ??  "")}");
                }

                byte[] requestPayload = request.Body ??  Encoding.UTF8.GetBytes("");
                string hashedRequestPayload = Sha256Hash(requestPayload);
                request.Headers["x-acs-content-sha256"] = hashedRequestPayload;
                if (!string.IsNullOrEmpty(SecurityToken))
                {
                    request.Headers["x-acs-security-token"] = SecurityToken;
                }

                StringBuilder canonicalHeaders = new();
                StringBuilder signedHeadersSb = new();
                foreach (var entry in request.Headers.OrderBy(e => e.Key.ToLower()))
                {
                    if (entry.Key.StartsWith("x-acs-", StringComparison.CurrentCultureIgnoreCase) || entry.Key.Equals("host", StringComparison.OrdinalIgnoreCase) || entry.Key.Equals(ContentType, StringComparison.OrdinalIgnoreCase))
                    {
                        string lowerKey = entry.Key.ToLower();
                        string value = (entry.Value?.ToString() ??  "").Trim();
                        canonicalHeaders.Append($"{lowerKey}:{value}\n");
                        signedHeadersSb.Append($"{lowerKey};");
                    }
                }
                string signedHeaders = signedHeadersSb.ToString().TrimEnd(';');
                string canonicalRequest = $"{request.HttpMethod}\n{request.CanonicalUri}\n{canonicalQueryString}\n{canonicalHeaders}\n{signedHeaders}\n{hashedRequestPayload}";
                Console.WriteLine($"canonicalRequest:{canonicalRequest}");

                // Step 2: Construct a string-to-sign.
                string hashedCanonicalRequest = Sha256Hash(Encoding.UTF8.GetBytes(canonicalRequest));
                string stringToSign = $"{Algorithm}\n{hashedCanonicalRequest}";
                Console.WriteLine($"stringToSign:{stringToSign}");

                // Step 3: Calculate the signature string.
                string signature = HmacSha256(AccessKeySecret, stringToSign);

                // Step 4: Specify the Authorization header.
                string authorization = $"{Algorithm} Credential={AccessKeyId},SignedHeaders={signedHeaders},Signature={signature}";
                request.Headers["Authorization"] = authorization;
                Console.WriteLine($"authorization:{authorization}");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Failed to get authorization");
                Console.WriteLine(ex.Message);
            }
        }

        private static string FormDataToString(Dictionary<string, object> formData)
        {
            Dictionary<string, object> tileMap = FlattenDictionary( formData);
            
            StringBuilder result = new StringBuilder();
            bool first = true;
            string symbol = "&";

            foreach (var entry in tileMap)
            {
                string value = entry.Value?.ToString() ??  "";
                if (!string.IsNullOrEmpty(value))
                {
                    if (!first)
                    {
                        result.Append(symbol);
                    }
                    first = false;
                    result.Append(PercentCode(entry.Key));
                    result.Append("=");
                    result.Append(PercentCode(value));
                }
            }
            return result.ToString();
        }

        private static Dictionary<string, object> FlattenDictionary(Dictionary<string, object> dictionary, string prefix = "")
        {
            var result = new Dictionary<string, object>();
            foreach (var kvp in dictionary)
            {
                string key = string.IsNullOrEmpty(prefix) ?  kvp.Key : $"{prefix}.{kvp.Key}";

                if (kvp.Value is Dictionary<string, object> nestedDict)
                {
                    var nestedResult = FlattenDictionary(nestedDict, key);
                    foreach (var nestedKvp in nestedResult)
                    {
                        result[nestedKvp.Key] = nestedKvp.Value;
                    }
                }
                else if (kvp.Value is List<string> list)
                {
                    for (int i = 0; i < list.Count; i++)
                    {
                        result[$"{key}.{i + 1}"] = list[i];
                    }
                }
                else
                {
                    result[key] = kvp.Value;
                }
            }
            return result;
        }

        private static string HmacSha256(string key, string message)
        {
            using (var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(key)))
            {
                byte[] hashMessage = hmac.ComputeHash(Encoding.UTF8.GetBytes(message));
                return BitConverter.ToString(hashMessage).Replace("-", "").ToLower();
            }
        }

        private static string Sha256Hash(byte[] input)
        {
            byte[] hashBytes = SHA256.HashData(input);
            return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
        }

        private static string PercentCode(string str)
        {
            if (string.IsNullOrEmpty(str))
            {
                throw new ArgumentException("The specified string cannot be null or empty");
            }
            return Uri.EscapeDataString(str).Replace("+", "%20").Replace("*", "%2A").Replace("%7E", "~");
        }
    }
}
```

## Rust

**Note**

In this example, the rustc 1.82.0 runtime environment is used. Adjust the parameters based on your business requirements.

To use the signature method in Rust, you must add the following dependencies to the Cargo.toml file:

```
[dependencies]
serde = { version = "1.0" }
serde_json = "1.0"
rand = "0.8"
base64 = "0.21"
sha2 = "0.10"
chrono = "0.4"
hmac = "0.12"
hex = "0.4"
reqwest = { version = "0.11", features = ["json"] }
tokio = { version = "1", features = ["full"] }
percent-encoding = "2.1"
```

```
use core::str;
use std::collections::{BTreeMap, HashMap};
use std::env;
use std::time::{SystemTime, SystemTimeError};
use chrono::DateTime;
use hmac::{Hmac, Mac};
use percent_encoding::{NON_ALPHANUMERIC, utf8_percent_encode};
use rand::Rng;
use serde_json::{json, Value}; 
use std::borrow::Cow;    
use reqwest::{
    Client,
    header::{HeaderMap, HeaderValue}, Method, Response, StatusCode,
};
use sha2::{Digest, Sha256};
use base64::engine::general_purpose::STANDARD;
use base64::Engine;


// Generate an x-acs-date string.
pub fn current_timestamp() -> Result<u64, SystemTimeError> {
    Ok(SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)?
        .as_secs())
}
// Encode the string in URL.
pub fn percent_code(encode_str: &str) -> Cow<'_, str> {
    let encoded = utf8_percent_encode(encode_str, NON_ALPHANUMERIC)
        .to_string()
        .replace("+", "20%")
        .replace("%5F", "_")
        .replace("%2D", "-")
        .replace("%2E", ".")
        .replace("%7E", "~");
        
    Cow::Owned(encoded) // Return a Cow<str>, which can be a string or a string slice identified by &str.
}

fn flatten_target_ops(
    targets: Vec<HashMap<&str, &str>>,
    base_key: &str,
) -> Vec<(&'static str, &'static str)> {
    let mut result = Vec::new();

    for (idx, item) in targets.iter().enumerate() {
        let prefix = format!("{}.{}", base_key, idx + 1);

        for (&k, &v) in item {
            let key = format!("{}.{}", prefix, k);
            let key_static: &'static str = Box::leak(key.into_boxed_str());
            let value_static: &'static str = Box::leak(v.to_string().into_boxed_str());

            result.push((key_static, value_static));
        }
    }

    result
}

/// Calculate the value by using the SHA256 algorithm.
pub fn sha256_hex(message: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(message);
    format!("{:x}", hasher.finalize()).to_lowercase()
}
// HMAC SHA256
pub fn hmac256(key: &[u8], message: &str) -> Result<Vec<u8>, String> {
    let mut mac = Hmac::<Sha256>::new_from_slice(key)
        .map_err(|e| format!("use data key on sha256 fail:{}", e))?;
    mac.update(message.as_bytes());
    let signature = mac.finalize();
    Ok(signature.into_bytes().to_vec())
}
// Generate a unique random number for the signature.
pub fn generate_random_string(length: usize) -> String {
    const CHARSET: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    let mut rng = rand::thread_rng();
    (0..length)
        .map(|_| CHARSET[rng.gen_range(0..CHARSET.len())] as char)
        .collect()
}
pub fn generate_nonce() -> String {
    generate_random_string(32)
}
// Create canonicalized query parameters (after encoding).
pub fn build_sored_encoded_query_string(query_params: &[(&str, &str)]) -> String {
    let sorted_query_params: BTreeMap<_, _> = query_params.iter().copied().collect();
    let encoded_params: Vec<String> = sorted_query_params
        .into_iter()
        .map(|(k, v)| {
            let encoded_key = percent_code(k);
            let encoded_value = percent_code(v);
            format!("{}={}", encoded_key, encoded_value)
        })
        .collect();
    encoded_params.join("&")
}
// Read the response.
pub async fn read_response(result: Response) -> Result<(StatusCode, String), String> {
    let status = result.status();
    let data = result.bytes().await.map_err(|e| format!("Read response body failed: {}", e))?;
    let res = match str::from_utf8(&data) {
        Ok(s) => s.to_string(),
        Err(_) => return Err("Body contains non UTF-8 characters".to_string()),
    };
    Ok((status, res))
}
// Define the value type of FormData data.
#[derive(Debug, Clone)]
pub enum FormValue {
    String(String),
    Vec(Vec<String>),
    HashMap(HashMap<String, String>),
}
// Enumerate a set of body types to manage different body types in requests, including JSON, binary, and FormData bodies. 
pub enum RequestBody {
    Json(HashMap<String, Value>), // Json
    Binary(Vec<u8>), // Binary
    FormData(HashMap<String, FormValue>), //  FormData 
    None,
}
// Construct a canonicalized request.
pub async fn call_api(
    client: Client,
    method: Method,
    host: &str,
    canonical_uri: &str,
    query_params: &[(&str, &str)], 
    action: &str,
    version: &str,
    body: RequestBody,   
    access_key_id: &str,
    access_key_secret: &str,
) -> Result<String, String> {

    // Process the request body based on the body type and store the process content in the body_content variable. 
    let body_content = match &body { 
        RequestBody::Json(body_map) => json!(body_map).to_string(),  
        RequestBody::Binary(binary_data) => {
            STANDARD.encode(binary_data)
        },
        RequestBody::FormData(form_data) => {
            let params: Vec<String> = form_data
            .iter()
            .flat_map(|(k, v)| {
                match v {
                    FormValue::String(s) => {
                        vec![format!("{}={}", percent_code(k), percent_code(&s))]
                    },
                    FormValue::Vec(vec) => {
                        vec.iter()
                            .map(|s| format!("{}={}", percent_code(k), percent_code(s)))
                            .collect::<Vec<_>>()
                    },
                    FormValue::HashMap(map) => {
                        map.iter()
                            .map(|(sk, sv)| format!("{}={}", percent_code(sk), percent_code(sv)))
                            .collect::<Vec<_>>()
                    },
                }
            })
            .collect();
            params.join("&") 
        },
        RequestBody::None => String::new(),
    };
    
    // Calculate the x-acs-content-sha256 value for the request body and prepare the x-acs-date string, the x-acs-signature-nonce string, and the request header of the signature request.
    let hashed_request_payload = if body_content.is_empty() {
        sha256_hex("") 
    } else {
        sha256_hex(&body_content) 
    };
    // x-acs-date
    let now_time = current_timestamp().map_err(|e| format!("Get current timestamp failed: {}", e))?;
    let datetime = DateTime::from_timestamp(now_time as i64, 0).ok_or_else(|| format!("Get datetime from timestamp failed: {}", now_time))?;
    let datetime_str = datetime.format("%Y-%m-%dT%H:%M:%SZ").to_string();
    // x-acs-signature-nonce
    let signature_nonce = generate_nonce();
    println!("Signature Nonce: {}", signature_nonce);
    // The request header to sign.
    let sign_header_arr = &[
        "host",
        "x-acs-action",
        "x-acs-content-sha256",
        "x-acs-date",
        "x-acs-signature-nonce",
        "x-acs-version",
    ];
    let sign_headers = sign_header_arr.join(";");
    // 1. Construct a canonicalized request header.
    let mut headers = HeaderMap::new();
    headers.insert("Host", HeaderValue::from_str(host).unwrap());
    headers.insert("x-acs-action", HeaderValue::from_str(action).unwrap());
    headers.insert("x-acs-version", HeaderValue::from_str(version).unwrap());
    headers.insert("x-acs-date", HeaderValue::from_str(&datetime_str).unwrap());
    headers.insert("x-acs-signature-nonce", HeaderValue::from_str(&signature_nonce).unwrap());
    headers.insert("x-acs-content-sha256", HeaderValue::from_str(&hashed_request_payload).unwrap());
    // 2. Construct the request header of the signature request.
    let canonical_query_string = build_sored_encoded_query_string(query_params); // Encode and concatenate the parameters.
    println!("CanonicalQueryString: {}", canonical_query_string);
    let canonical_request = format!(
        "{}\n{}\n{}\n{}\n\n{}\n{}",
        method.as_str(),
        canonical_uri,
        canonical_query_string,
        sign_header_arr.iter().map(|&header| format!("{}:{}", header, headers[header].to_str().unwrap())).collect::<Vec<_>>().join("\n"),
        sign_headers,
        hashed_request_payload
    );
    println!("Canonical Request: {}", canonical_request);
    // 3. Calculate the SHA-256 hash value of the request header of the signature request.
    let result = sha256_hex(&canonical_request);
    // 4. Create a string-to-sign.
    let string_to_sign = format!("ACS3-HMAC-SHA256\n{}", result);
    // 5. Calculate the signature.
    let signature = hmac256(access_key_secret.as_bytes(), &string_to_sign)?;
    let data_sign = hex::encode(&signature);
    let auth_data = format!(
        "ACS3-HMAC-SHA256 Credential={},SignedHeaders={},Signature={}",
        access_key_id, sign_headers, data_sign
    );
    // 6. Build an Authorization header.
    headers.insert("Authorization", HeaderValue::from_str(&auth_data).unwrap());
    // Construct a URL to concatenate request parameters.
    let url: String;
    if !query_params.is_empty() {
        url = format!("https://{}{}?{}", host, canonical_uri,canonical_query_string);
    } else {
        url = format!("https://{}{}", host, canonical_uri);
    }        
    // Call the SDK to send a request.
    let response = send_request(
        &client,
        method,
        &url,
        headers,
        query_params,                
        &body,                      
        &body_content,                
    ) 
    .await?;
    
    // Read the response.
    let (_, res) = read_response(response).await?;
    Ok(res)
}

/// Send the request.
async fn send_request(
    client: &Client,
    method: Method,
    url: &str,
    headers: HeaderMap,
    query_params: &[(&str, &str)],     // Receive the query parameters.
    body: &RequestBody,                // Indicates the body type.
    body_content: &str,                // If the body is not empty, accept the body request parameter, such as FormData, Json, and Binary.
) -> Result<Response, String> {
    let mut request_builder = client.request(method.clone(), url);
    // Add request headers.
    for (k, v) in headers.iter() {
        request_builder = request_builder.header(k, v.clone());
    }
     // Add a request body.
     match body {
        RequestBody::Binary(_) => {
            request_builder = request_builder.header("Content-Type", "application/octet-stream");
            request_builder = request_builder.body(body_content.to_string()); // Change the value based on the scenario.
        }
        RequestBody::Json(_) => {
            // If the body is a map which is not empty, the body is converted to a JSON value stored in the body_content variable. In this case, specify application/json; charset=utf-8.
            if !body_content.is_empty() { 
                request_builder = request_builder.body(body_content.to_string());
                request_builder = request_builder.header("Content-Type", "application/json; charset=utf-8");
            }
        }
        RequestBody::FormData(_) => {
            // Configure the content-type variable for parameters whose position is formData.
            if !body_content.is_empty() { 
            request_builder = request_builder.header("Content-Type", "application/x-www-form-urlencoded");
            request_builder = request_builder.body(body_content.to_string());
            }
        }
        RequestBody::None => {
            request_builder = request_builder.body(String::new());
        }
    }
    // Construct a request
    let request = request_builder
        .build()
        .map_err(|e| format!("build request fail: {}", e))?;
    // Initiate the request.
    let response = client
        .execute(request)
        .await
        .map_err(|e| format!("execute request fail: {}", e))?;
    // The response parameters.
    Ok(response)
}


 /**
     * 
     * A sample signature. You need to adjust the parameters in the main() method. 
     * <p>
     * Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in). 
     * 1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (query_params). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
     * 2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
     * 3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
*/
#[tokio::main]
async fn main() {
    // Create an HTTP client.
    let client = Client::new();
    // env::var() specifies that the AccessKey ID and AccessKey secret are obtained from environment variables.
    let access_key_id = env::var("ALIBABA_CLOUD_ACCESS_KEY_ID").expect("Cannot get access key id.");
    let access_key_secret = env::var("ALIBABA_CLOUD_ACCESS_KEY_SECRET").expect("Cannot get access key id.");
    let access_key_id: &str = &access_key_id;
    let access_key_secret: &str = &access_key_secret;
    
    // Example 1: Send a POST request to call an RPC-style API operation (Parameter position: "in":"query")
    let method=Method::POST; // The request method.
    let host = "ecs.cn-hangzhou.aliyuncs.com"; // endpoint
    let canonical_uri = "/"; // The resource path of an RPC-style API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
    let action = "DescribeInstanceStatus"; // The API operation that you want to perform.
    let version = "2014-05-26"; // The version number of the API.
    let region_id = "cn-hangzhou";
    let instance_ids = vec![
        "i-bp11ht4XXXXXXXX",
        "i-bp16mazXXXXXXXX",
    ];
    let mut query: Vec<(&str, &str)> = Vec::new();
    query.push(("RegionId", region_id));
    for (index, instance_id) in instance_ids.iter().enumerate() {
        let key = format!("InstanceId.{}", index + 1); 
        query.push((Box::leak(key.into_boxed_str()), instance_id)); 
    }
    // The query parameters.
    let query_params: &[(&str, &str)] = &query;
    // Specify an empty body.
    let body = RequestBody:: None;
    
    // In a POST request for an RPC-style API operation, "in":"query" indicates that the query parameters contain complex data structures.
    // let method = Method::POST; // The request method.
    // let host = "tds.cn-shanghai.aliyuncs.com"; // endpoint
    // let canonical_uri = "/"; // The resource path of an RPC-API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
    // let action = "AddAssetSelectionCriteria"; // The name of the API operation.
    // let version = "2018-12-03"; // The version number of the API.
    // Custom parameters.
    // let mut target_op = HashMap::new();
    // target_op.insert("Operation", "add");
    // target_op.insert("Target", "i-2ze1j7ocdXXXXXXXX");
    // Configure the TargetOperationList parameter and assign map data to the parameter.
    // let target_operation_list = vec![target_op];
    // Tiling parameters.
    // let mut query = flatten_target_ops(target_operation_list, "TargetOperationList");
    // Common parameters.
    // query.push(("SelectionKey", "85a561b7-27d5-47ad-a0ec-XXXXXXXX"));
    // let query_params: &[(&str, &str)] = &query;
    // let body = RequestBody:: None;
    
    // Example 2: Send a POST request to call an RPC-style API operation (Parameter position: "in":"body")
    // let method = Method::POST; // The request method.
    // let host = "ocr-api.cn-hangzhou.aliyuncs.com";
    // let canonical_uri = "/";
    // let action = "RecognizeGeneral";
    // let version = "2021-07-07";
    // "in":"body" of a request parameter indicates a binary file. 
    // let binary_data = std::fs::read("<FILE_PATH>").expect("Failed to read the file"); // Replace <FILE_PATH> with the actual file path.
    // The body is binary.
    // let body = RequestBody::Binary(binary_data);
    // The query parameter is empty.
    // let query_params = &[];
 
    // Example 3: Send a POST request to call an RPC-style API operation (Parameter position: "in": "formData" or "in":"body")
    // let method = Method::POST; // The request method.
    // let host = "mt.aliyuncs.com";
    // let canonical_uri = "/";
    // let action = "TranslateGeneral";
    // let version = "2018-10-12";
    // // The position of the FormatType, SourceLanguage, and TargetLanguage parameters in the metadata is defined as "in":"formData".
    // let mut form_data = HashMap::new();  // If the body type is FormData(HashMap<String, FormValue>), you can set FormValue to Vec<String>, HashSet<String>, or HashMap<String, String>. If you want to specify more types, enumerate them in the FormValue parameter.
    // form_data.insert(String::from("FormatType"),FormValue::String(String::from("text")));
    // form_data.insert(String::from("SourceLanguage"),FormValue::String(String::from("zh")));
    // form_data.insert(String::from("TargetLanguage"),FormValue::String(String::from("en")));
    // form_data.insert(String::from("SourceText"),FormValue::String(String::from("Hello")));
    // form_data.insert(String::from("Scene"),FormValue::String(String::from("general")));
    // The query parameters.
    // let query_params = &[("Context", "Morning")];
    // The body is FormData and the position information is "in":"formdata".
    // let body = RequestBody::FormData(form_data);

    // Construct a POST request for the CreateClusteroperation in the ROA style to create a cluster.  
    // Specify constants for the API operation.
    // let method = Method::POST; // The request method.
    // let host = "cs.cn-hangzhou.aliyuncs.com";
    // let canonical_uri = "/clusters";
    // let action = "CreateCluster";
    // let version = "2015-12-15";
    // Specify the request body parameters.
    // let mut body_json = HashMap::new();  // If the body type is Json(HashMap<String, Value>), you can set Value to the following values: Value::String("test".to_string()) // String  Value::Number(serde_json::Number::from(42)) // Number  Value::Bool(true) // Boolean  Value::Null // Null  Value::Array(vec![Value::from(1), Value::from(2), Value::from(3)]) //Array json!({"nested_key": "nested_value"}).
    // body_json.insert(String::from("name"),json!("Test cluster"));
    // body_json.insert(String::from("region_id"),json!("cn-hangzhou"));
    // body_json.insert(String::from("cluster_type"),json!("ExternalKubernetes"));
    // body_json.insert(String::from("vpcid"),json!("vpc-2zeou1uodXXXXXXXX"));
    // body_json.insert(String::from("container_cidr"),json!("10.X.X.X/X"));
    // body_json.insert(String::from("service_cidr"),json!("10.X.X.X/X"));
    // body_json.insert(String::from("security_group_id"),json!("sg-2ze1a0rlgXXXXXXXX"));
    // body_json.insert(
    //     String::from("vswitch_ids"),
    //     Value::Array(vec![
    //         Value::from("vsw-2zei30dhflXXXXXXXX"),
    //         Value::from("vsw-2zei30dhflXXXXXXXX"),
    //         Value::from("vsw-2zei30dhflXXXXXXXX"),
    //     ]),
    // );
    // The query parameter is empty.
    // let query_params = &[];
    // The body type is JSON. 
    // let body = RequestBody::Json(body_json);

    // Construct a GET request for the DeleteCluster API operation in the ROA style to query resources associated with a specified cluster.
    // let method = Method::GET; // The request method.
    // let host = "cs.cn-hangzhou.aliyuncs.com"; // endpoint
    // //  Concatenated the values to form a resource path.
    // let uri = format!("/clusters/{}/resources", percent_code("ce196d21571a64be9XXXXXXXX").as_ref()); 
    // let canonical_uri = uri.as_str(); // The resource path, which is converted to a string slice identified by &Str.
    // let action = "DescribeClusterResources";   // The API operation that you want to perform.
    // let version = "2015-12-15"; // The version number of the API.
    // // Configure the query parameters.
    // let query_params = &[("with_addon_resources", if true { "true" } else { "false" })];  // "true" or "false"
    // Specify an empty body.
    // let body = RequestBody:: None;

    // Call the API operation in the ROA style to perform the delete operation.   API operation :DeleteCluster. Call the API operation to delete a pay-as-you-go cluster.
    // let method = Method::DELETE;
    // let host = "cs.cn-hangzhou.aliyuncs.com";
    // let uri = format!("/clusters/{}", percent_code("ce0138ff31ad044f8XXXXXXXX").as_ref()); 
    // let canonical_uri = uri.as_str(); // Convert the resource path to a string slice identified by &Str.
    // let action = "DeleteCluster";
    // let version = "2015-12-15";
    // // The query parameters.
    // let query_params = &[];
    // Specify an empty body.
    // let body = RequestBody:: None;
    
    // The API operation (SendSms) that is used to send text messages.
    // let method = Method::POST; // The request method.
    // let host = "dysmsapi.aliyuncs.com"; // endpoint
    // let canonical_uri = "/"; // The resource path of an RPC-API operation is empty. Therefore, a forward slash (/) is used as the value of the CanonicalURI parameter.
    // let action = "SendSms"; // The name of the API operation.
    // let version = "2017-05-25"; // The version number of the API.
    // let mut query: Vec<(&str, &str)> = Vec::new();
    // query.push(("PhoneNumbers", "<YOUR_PHONENUMBERS>"));
    // query.push(("TemplateCode", "<YOUR_TEMPLATECODE>"));
    // query.push(("SignName", "<YOUR_SIGNNAME>"));
    // query.push(("TemplateParam", "<YOUR_TEMPLATEPARAM>"));
    // // The query parameters.
    // let query_params: &[(&str, &str)] = &query;
    // Specify an empty body.
    // let body = RequestBody:: None;

    // Send the request.
    match call_api(
        client.clone(),
        method,                                                  // The request method. Valid values:  POST, GET, and DELETE.                                
        host,                                                    // The endpoint of the API operation.
        canonical_uri,                                           // The resource path.
        query_params,                                            // The position information about the query parameters, which is "in":"query" in this example.
        action,                                                  // The API operation.
        version,                                                 // The version number of the API operation.
        body,                                                    // The position information about the request body, which is "in":"body" in this example. Supported body types: Json, FormData, and Binary.
        access_key_id,                                           
        access_key_secret,
    )
    .await {
        Ok(response) => println!("Response: {}", response),
        Err(error) => eprintln!("Error: {}", error),
    }
}
```

## Shell

```
#!/bin/bash

accessKey_id="<YOUR-ACCESSKEY-ID>"
accessKey_secret="<YOUR-ACCESSKEY-SECRET>"
algorithm="ACS3-HMAC-SHA256"

# Request parameters -- Adjust the request parameters based on your business requirements.
httpMethod="POST"
host="dns.aliyuncs.com"
queryParam=("DomainName=example.com" "RRKeyWord=@")
action="DescribeDomainRecords"
version="2015-01-09"
canonicalURI="/"
# Parameters of the body or formData type can be specified in the body.
# If the parameter is a body, the body value is a JSON string: "{'key1':'value1','key2':'value2'}". You need to add content-type:application/json; charset=utf-8 to the headers used for signature calculation.
# If the parameter is a binary file, you do not need to modify the body. Add content-type:application/octet-stream to the headers used for signature calculation, and add --data-binary to the curl_command variable.
# If the parameter is a formData parameter, specify the body parameters in the format of "key1=value1&key2=value2", and add content-type:application/x-www-form-urlencoded to the headers used for signature calculation.
body=""

# Specify the time in the ISO 8601 standard in UTC.
utc_timestamp=$(date +%s)
utc_date=$(date -u -d @${utc_timestamp} +"%Y-%m-%dT%H:%M:%SZ") 
# Set the x-acs-signature-nonce header to a random number.
random=$(uuidgen | sed 's/-//g') 

# Add the request headers that are used for signature calculation.
headers="host:${host}
x-acs-action:${action}
x-acs-version:${version}
x-acs-date:${utc_date}
x-acs-signature-nonce:${random}"

# The UTL encoding function.
urlencode() {
    local string="${1}"
    local strlen=${#string}
    local encoded=""
    local pos c o

    for (( pos=0 ; pos<strlen ; pos++ )); do
        c=${string:$pos:1}
        case "$c" in
            [-_.~a-zA-Z0-9] ) o="${c}" ;;
            * )               printf -v o '%%%02X' "'$c"
        esac
        encoded+="${o}"
    done
    echo "${encoded}"
}

# Step 1: Construct a canonicalized request.
# Flatten all query parameters.
newQueryParam=()

# Traverse each raw query parameter.
for param in "${queryParam[@]}"; do
    # Check whether the value of a query parameter contains an equal sign (=). If the parameter value contains an equal sign (=), the parameter value is a key-value pair.
    if [[ "$param" == *"="* ]]; then
        # Split the parameter value into a key and value.
        IFS='=' read -r key value <<< "$param"

        # Encode the value in the URL format.
        value=$(urlencode "$value")

        # Check whether the value is a list. If the value is a list, the value is in parentheses ().
        if [[ "$value" =~ ^\(.+\)$ ]]; then
            # Remove the parentheses ().
            value="${value:1:-1}"

            # Use a specific internal field separator (IFS) to split values.
            IFS=' ' read -ra values <<< "$value"

            # Add an index for each value.
            index=1
            for val in "${values[@]}"; do
                # Remove double quotation marks (").
                val="${val%\"}"
                val="${val#\"}"

                # Add the query parameter to a new array.
                newQueryParam+=("$key.$index=$val")
                ((index++))
            done
        else
            # If the value is not a list, add the query parameter to the new array.
            newQueryParam+=("$key=$value")
        fi
    else
        # If the value is not in parentheses, add the query parameter to the new array without modifications.
        newQueryParam+=("$param")
    fi
done

# Process and sort new query parameters.
sortedParams=()
declare -A paramsMap
for param in "${newQueryParam[@]}"; do
    IFS='=' read -r key value <<< "$param"
    paramsMap["$key"]="$value"
done
# Sort query parameters by key.
for key in $(echo ${!paramsMap[@]} | tr ' ' '\n' | LC_ALL=C sort); do
    sortedParams+=("$key=${paramsMap[$key]}")
done

#1.1 Construct a canonicalized query string.
canonicalQueryString=""
first=true
for item in "${sortedParams[@]}"; do
    [ "$first" = true ] && first=false || canonicalQueryString+="&"
    # Check whether an equal sign (=) exists.
    if [[ "$item" == *=* ]]; then
        canonicalQueryString+="$item"
    else
        canonicalQueryString+="$item="
    fi
done

# 1.2 Process the request body.
hashedRequestPayload=$(echo -n "$body" | openssl dgst -sha256 | awk '{print $2}')
headers="${headers}
x-acs-content-sha256:$hashedRequestPayload"

# 1.3 Construct a canonicalized header.
canonicalHeaders=$(echo "$headers" | grep -E '^(host|content-type|x-acs-)' | while read line; do
    key=$(echo "$line" | cut -d':' -f1 | tr '[:upper:]' '[:lower:]')
    value=$(echo "$line" | cut -d':' -f2-)
    echo "${key}:${value}"
done | sort | tr '\n' '\n')

signedHeaders=$(echo "$headers" | grep -E '^(host|content-type|x-acs-)' | while read line; do
    key=$(echo "$line" | cut -d':' -f1 | tr '[:upper:]' '[:lower:]')
    echo "$key"
done | sort | tr '\n' ';' | sed 's/;$//')

# 1.4 Construct a canonicalized request.
canonicalRequest="${httpMethod}\n${canonicalURI}\n${canonicalQueryString}\n${canonicalHeaders}\n\n${signedHeaders}\n${hashedRequestPayload}"
echo -e "canonicalRequest=${canonicalRequest}"
echo "+++++++++++++++++++++++++++++++++++++++++++++++++++"

str=$(echo "$canonicalRequest" | sed 's/%/%%/g')
hashedCanonicalRequest=$(printf "${str}" | openssl sha256 -hex | awk '{print $2}')
# Step 2: Construct a string-to-sign.
stringToSign="${algorithm}\n${hashedCanonicalRequest}"
echo -e "stringToSign=$stringToSign"
echo "+++++++++++++++++++++++++++++++++++++++++++++++++++"

# Step 3: Calculate the signature string.
signature=$(printf "${stringToSign}" | openssl dgst -sha256 -hmac "${accessKey_secret}" | sed 's/^.* //')
echo -e "signature=${signature}"
echo "+++++++++++++++++++++++++++++++++++++++++++++++++++"

# Step 4: Specify the Authorization header.
authorization="${algorithm} Credential=${accessKey_id},SignedHeaders=${signedHeaders},Signature=${signature}"
echo -e "authorization=${authorization}"

# Construct a cURL command.
url="https://$host$canonicalURI"
curl_command="curl -X $httpMethod '$url?$canonicalQueryString'"

# Add the Authorization header.
IFS=$'\n'  # Use line feed (\n) as the new IFS.
for header in $headers; do
    curl_command="$curl_command -H '$header'"
done
curl_command+=" -H 'Authorization:$authorization'"
# If the body is a binary file, comment out the following line of code.
curl_command+=" -d '$body'"
# If the body is a binary file, uncomment the following line of code.
#curl_command+=" --data-binary @"/root/001.png" "

echo "$curl_command"
# Run the cURL command.
eval "$curl_command"
```

## C language

```
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <stdarg.h>
#include <stdint.h>
#include <openssl/hmac.h>
#include <openssl/evp.h>
#include <openssl/sha.h>
#include <openssl/rand.h>
#include <curl/curl.h>

// getenv() indicates that the AccessKey ID and AccessKey secret are obtained from environmental variables.
#define ACCESS_KEY_ID getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")
#define ACCESS_KEY_SECRET getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")
#define ALGORITHM "ACS3-HMAC-SHA256"
#define BUFFER_SIZE 4096

// A struct that is used to perform sorting.
typedef struct {
    char key[256];
    char value[256];
} KeyValuePair;

// A comparison function that sorts keys in lexicographic order.
int compare_pairs(const void *a, const void *b) {
    return strcmp(((const KeyValuePair *)a)->key, ((const KeyValuePair *)b)->key);
}

// Encode the value in the URL format.
char* percentEncode(const char* str) {
    if (str == NULL) {
        fprintf(stderr, "The input string cannot be null\n");
        return NULL;
    }
    size_t len = strlen(str);
    char* encoded = (char*)malloc(len * 3 + 1);
    if (encoded == NULL) {
        fprintf(stderr, "Failed to allocate memory resources\n");
        free(encoded); 
        return NULL;
    }
    char* ptr = encoded;
    for (size_t i = 0; i < len; i++) {
        unsigned char c = (unsigned char)str[i];
        if (isalnum(c) || c == '-' || c == '_' || c == '.' || c == '~') {
            *ptr++ = c;
        } else {
            ptr += sprintf(ptr, "%%%02X", c);
        }
    }
    *ptr = '\0'; 
    char* finalEncoded = malloc(strlen(encoded) + 1);
    if (finalEncoded) {
        char* fptr = finalEncoded;
        for (size_t j = 0; j < strlen(encoded); j++) {
            if (encoded[j] == '+') {
                strcpy(fptr, "%20");
                fptr += 3; 
            } else if (encoded[j] == '*') {
                strcpy(fptr, "%2A");
                fptr += 3;
            } else if (encoded[j] == '~') {
                *fptr++ = '~';
            } else {
                *fptr++ = encoded[j];
            }
        }
        *fptr = '\0'; 
    }

    free(encoded); 
    return finalEncoded;
}

/**
 * @brief: Encode query parameters in URL, sorts them by lexicographic order, and generates a canonicalized query string.
 * @param query_params: The original query string in the format of "key1=value1&key2=value2".
 * @return char*: The sorted and encoded canonicalized query string. The memory needs to be released by the caller.
 */
char* generate_sorted_encoded_query(const char* query_params) {
    if (query_params == NULL || strlen(query_params) == 0) {
        return strdup(""); // An empty string is returned if parameters are empty.
    }

    KeyValuePair pairs[100]; // A maximum of 100 key-value pairs are supported.
    int pair_count = 0;

    char* copy = strdup(query_params);
    if (!copy) {
        fprintf(stderr, "Failed to allocate memory resources\n");
        return NULL;
    }

    char* token = NULL;
    char* saveptr = NULL;
    token = strtok_r(copy, "&", &saveptr);

    while (token != NULL && pair_count < 100) {
        char* eq = strchr(token, '=');
        if (eq) {
            size_t key_len = eq - token;
            char key[256], value[256];

            strncpy(key, token, key_len);
            key[key_len] = '\0';

            const char* val = eq + 1;
            strncpy(value, val, sizeof(value) - 1);
            value[sizeof(value) - 1] = '\0';

            char* encoded_key = percentEncode(key);
            char* encoded_value = percentEncode(value);

            strncpy(pairs[pair_count].key, encoded_key, sizeof(pairs[pair_count].key));
            strncpy(pairs[pair_count].value, encoded_value, sizeof(pairs[pair_count].value));
            pair_count++;

            free(encoded_key);
            free(encoded_value);
        }
        token = strtok_r(NULL, "&", &saveptr);
    }

    free(copy);

    // Sort by key.
    qsort(pairs, pair_count, sizeof(KeyValuePair), compare_pairs);

    // Concatenate the sorted query strings.
    char* query_sorted = malloc(BUFFER_SIZE);
    if (!query_sorted) {
        fprintf(stderr, "Failed to allocate memory resources\n");
        return NULL;
    }
    query_sorted[0] = '\0';

    for (int i = 0; i < pair_count; ++i) {
        if (i == 0) {
            snprintf(query_sorted, BUFFER_SIZE, "%s=%s", pairs[i].key, pairs[i].value);
        } else {
            char temp[512];
            snprintf(temp, sizeof(temp), "&%s=%s", pairs[i].key, pairs[i].value);
            strncat(query_sorted, temp, BUFFER_SIZE - strlen(query_sorted) - 1);
        }
    }

    return query_sorted;
}

// Perform calculation by using the HMAC-SHA256 algorithm.
void hmac256(const char *key, const char *message, char *output) {
    unsigned char hmac[SHA256_DIGEST_LENGTH];
    unsigned int result_len;
    HMAC(EVP_sha256(), key, strlen(key), (unsigned char *)message, strlen(message), hmac, &result_len);
    for (int i = 0; i < SHA256_DIGEST_LENGTH; ++i) {
        sprintf(output + (i * 2), "%02x", hmac[i]);
    }
    output[SHA256_DIGEST_LENGTH * 2] = '\0';
}
// Calculate the hash value by using the SHA-256 algorithm.
void sha256_hex(const char *input, char *output) {
    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256((unsigned char *)input, strlen(input), hash);
    for (int i = 0; i < SHA256_DIGEST_LENGTH; ++i) {
        sprintf(output + (i * 2), "%02x", hash[i]);
    }
    output[SHA256_DIGEST_LENGTH * 2] = '\0';
}
// Generate the x-acs-signature-nonce string.
void generate_uuid(char *uuid, size_t size) {
    if (size < 37) { 
        fprintf(stderr, "Buffer size too small for UUID\n");
        return;
    }
    unsigned char random_bytes[16];
    RAND_bytes(random_bytes, sizeof(random_bytes));
    random_bytes[6] &= 0x0f; // Retain the highest four values.
    random_bytes[6] |= 0x40; // Set the version to 4.
    random_bytes[8] &= 0x3f; // Retain the highest two values.
    random_bytes[8] |= 0x80; // Set the variant to 10xx.
    snprintf(uuid, size,
             "%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x",
             random_bytes[0], random_bytes[1], random_bytes[2], random_bytes[3],
             random_bytes[4], random_bytes[5], random_bytes[6], random_bytes[7],
             random_bytes[8], random_bytes[9], random_bytes[10], random_bytes[11],
             random_bytes[12], random_bytes[13], random_bytes[14], random_bytes[15]);
}
// Upload the file.
size_t read_file(const char *file_path, char **buffer) {
    FILE *file = fopen(file_path, "rb");
    if (!file) {
        fprintf(stderr, "Cannot open file %s\n", file_path);
        return 0; // Failed to read the file.
    }
    fseek(file, 0, SEEK_END);
    size_t file_size = ftell(file);
    fseek(file, 0, SEEK_SET);

    *buffer = (char *)malloc(file_size);
    if (!*buffer) {
        fprintf(stderr, "Failed to allocate memory for file buffer\n");
        fclose(file);
        return 0; // Failed to read the file.
    }
    fread(*buffer, 1, file_size, file);
    fclose(file);
    return file_size; // Return the number of bytes that are read.
}
// Calculate the value of the Authorization header.
char* get_authorization(const char *http_method, const char *canonical_uri, const char *host,
                       const char *x_acs_action, const char *x_acs_version, const char *query_params,
                       const char *body, char *authorization_header,
                        char *hashed_payload, char *x_acs_date, char *uuid) {
    // Prepare the x-acs-signature-nonce string, the x-acs-date string, the x-acs-content-sha256 string, and the string-to-sign.
    generate_uuid(uuid, 37);
    // Specify the x-acs-date string in the yyyy-MM-ddTHH:mm:ssZ format, such as 2025-04-17T07:19:10Z.
    time_t now = time(NULL);
    struct tm *utc_time = gmtime(&now);
    strftime(x_acs_date, 64, "%Y-%m-%dT%H:%M:%SZ", utc_time);
    // The string-to-sign.
    char signed_headers[] = "host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version";
    // x-acs-content-sha256 
    sha256_hex(body ?  body : "", hashed_payload);
    printf("Generated x-acs-content-sha256: %s\n", hashed_payload);
    // 1. Construct a canonicalized request header.
    char canonical_headers[BUFFER_SIZE];
    snprintf(canonical_headers, sizeof(canonical_headers),
             "host:%s\nx-acs-action:%s\nx-acs-content-sha256:%s\nx-acs-date:%s\nx-acs-signature-nonce:%s\nx-acs-version:%s",
              host, x_acs_action, hashed_payload, x_acs_date, uuid, x_acs_version);
    printf("Canonical Headers:\n%s\n", canonical_headers);

    // 2. Construct a request header for the signature request.
    // Sort and encode the query string.
    char* sorted_query_params = generate_sorted_encoded_query(query_params);
    if (!sorted_query_params) {
      fprintf(stderr, "Failed to generate the sorted query string. \n");
      return NULL;
    }
    char canonical_request[BUFFER_SIZE];
    snprintf(canonical_request, sizeof(canonical_request),
         "%s\n%s\n%s\n%s\n\n%s\n%s",
         http_method,
         canonical_uri,
         sorted_query_params ?  sorted_query_params : "",
         canonical_headers,
         signed_headers,
         hashed_payload);
    printf("Canonical Request:\n%s\n", canonical_request);

    // 3. Calculate the hash value of the canonicalized request by using the SHA-256 algorithm.
    char hashed_canonical_request[SHA256_DIGEST_LENGTH * 2 + 1];
    sha256_hex(canonical_request, hashed_canonical_request);
    printf("hashedCanonicalRequest: %s\n", hashed_canonical_request);
    // 4. Create a string-to-sign. 
    char string_to_sign[BUFFER_SIZE];
    snprintf(string_to_sign, sizeof(string_to_sign), "%s\n%s", ALGORITHM, hashed_canonical_request);
    printf("stringToSign:\n%s\n", string_to_sign);
    // 5. Calculate the signature. 
    char signature[SHA256_DIGEST_LENGTH * 2 + 1];
    hmac256(ACCESS_KEY_SECRET, string_to_sign, signature);
    printf("Signature: %s\n", signature);
    // 6. Construct an Authorization header.
    snprintf(authorization_header, BUFFER_SIZE,
             "%s Credential=%s,SignedHeaders=%s,Signature=%s",
             ALGORITHM, ACCESS_KEY_ID, signed_headers, signature);
    printf("Authorization: %s\n", authorization_header);

    return sorted_query_params;
}
// Send a request.
void call_api(const char *http_method, const char *canonical_uri, const char *host,
              const char *x_acs_action, const char *x_acs_version, const char *query_params,
              const char *body,const char *content_type, size_t body_length) {
    // Obtain the parameter values required by the signature.
    char authorization_header[BUFFER_SIZE];
    char hashed_payload[SHA256_DIGEST_LENGTH * 2 + 1];
    char x_acs_date[64];
    char uuid[37];
    // 1. Initialize curl.
    CURL *curl = curl_easy_init();
    if (!curl) {
        fprintf(stderr, "curl_easy_init() failed\n");
        goto cleanup;
    }
    // 2. Calculate the signature. The sorted and encoded query string is returned.
    char *signed_query_params = get_authorization(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, authorization_header, hashed_payload, x_acs_date, uuid);
    // 3. Add request parameters. 
    char url[BUFFER_SIZE];
    if (signed_query_params && strlen(signed_query_params) > 0) {
        snprintf(url, sizeof(url), "https://%s%s?%s", host, canonical_uri, signed_query_params);
    } else {
        snprintf(url, sizeof(url), "https://%s%s", host, canonical_uri);
    }
    printf("Request URL: %s\n", url);
    // Release the memory.
    if (signed_query_params) {
        free(signed_query_params); // Release the memory.
    }

    // 4. Add request headers.
    struct curl_slist *headers = NULL;
    char header_value[BUFFER_SIZE];
    snprintf(header_value, sizeof(header_value), "Content-Type: %s", content_type);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "Authorization: %s", authorization_header);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "host: %s", host);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "x-acs-action: %s", x_acs_action);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "x-acs-content-sha256: %s", hashed_payload);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "x-acs-date: %s", x_acs_date);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "x-acs-signature-nonce: %s", uuid);
    headers = curl_slist_append(headers, header_value);
    snprintf(header_value, sizeof(header_value), "x-acs-version: %s", x_acs_version);
    headers = curl_slist_append(headers, header_value);
    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
    curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, http_method);
    curl_easy_setopt(curl, CURLOPT_URL, url);
    // Disable SSL verification in other curl settings, and add debugging information.
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, 0L);
    curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST, 0L);
    curl_easy_setopt(curl, CURLOPT_VERBOSE, 1L);
    // 5. Add  a request body.
    if (body) {
        curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, body_length); 
        if (strcmp(content_type, "application/octet-stream") == 0) {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body);
        } else if (strcmp(content_type, "application/x-www-form-urlencoded") == 0) {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body);
        } else if (strcmp(content_type, "application/json; charset=utf-8") == 0) {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, body);
        }
    }
    printf("RequestBody:%s\n",body);
    // 6. Send the request.
    CURLcode res = curl_easy_perform(curl);
    if (res != CURLE_OK) {
        fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
        goto cleanup;
    }
cleanup:
    if (headers) curl_slist_free_all(headers);
    if (curl) curl_easy_cleanup(curl);
}
/**
*
     * A sample signature. You need to adjust the parameters in the main() method. 
     * <p>
     * Obtain the request method (methods), request parameter names (name), request parameter types (type), and request parameter positions (in).
     *1. If the request parameters in the API metadata contain the "in":"query" position information, specify the parameters in the query string (query_params). Note: You can also specify this type of parameter in the body and set content-type to application/x-www-form-urlencoded. For more information, see Example 3. 
     *2. If the request parameters in the API metadata contain the "in": "body" position information, specify the parameters in the body and set MIME to application/octet-stream or application/json. Note: For RPC APIs, application/json is not recommended; use the method in Example 3 instead. 
     3. If the request parameters in the API metadata contain the "in": "formData" position information, specify the parameters in the body and set MIME to application/x-www-form-urlencoded. 
*/
int main() {
    // Set the response format to UTF-8.
    SetConsoleOutputCP(CP_UTF8);
    srand((unsigned int)time(NULL));

    /**
      * Example: Call an RPC-style API operation whose query parameters contain complex data structures (Parameter position: "in":"query")
    */   
    const char *http_method = "POST";
    const char *canonical_uri = "/";
    const char *host = "tds.cn-shanghai.aliyuncs.com";
    const char *x_acs_action = "AddAssetSelectionCriteria";
    const char *x_acs_version = "2018-12-03";

    // Configure the SelectionKey parameter to specify a string type.
    const char *selection_key = "85a561b7-27d5-47ad-a0ec-XXXXXXXX";
    // Configure the TargetOperationList parameter to specfy a list of objects.
    struct {
        const char *operation;
        const char *target;
    } targetOperation_list[] = {
        {"add", "i-2ze1j7ocdg9XXXXXXXX"},
        // You can add multiple entries.
        // {"add", "i-abc123xyzXXXXX"},
    };

    int count = sizeof(targetOperation_list) / sizeof(targetOperation_list[0]);
    KeyValuePair pairs[100]; // Store the original key and value.
    int pair_count = 0;

    for (int i = 0; i < count; ++i) {
      char op_key[128], target_key[128];
      snprintf(op_key, sizeof(op_key), "TargetOperationList.%d.Operation", i + 1);
      snprintf(target_key, sizeof(target_key), "TargetOperationList.%d.Target", i + 1);

      strncpy(pairs[pair_count].key, op_key, sizeof(pairs[pair_count].key));
      strncpy(pairs[pair_count].value, targetOperation_list[i].operation, sizeof(pairs[pair_count].value));
      pair_count++;

      strncpy(pairs[pair_count].key, target_key, sizeof(pairs[pair_count].key));
      strncpy(pairs[pair_count].value, targetOperation_list[i].target, sizeof(pairs[pair_count].value));
      pair_count++;
}
    // Add the SelectionKey parameter.
    snprintf(pairs[pair_count].key, sizeof(pairs[pair_count].key), "SelectionKey");
    snprintf(pairs[pair_count].value, sizeof(pairs[pair_count].value), "%s", selection_key);
    pair_count++;

    // Sorting and coding are performed by get_authorization().
    qsort(pairs, pair_count, sizeof(KeyValuePair), compare_pairs);

    // Construct the original query string (unencoded).
    char query_params[BUFFER_SIZE] = {0};
    for (int i = 0; i < pair_count; ++i) {
      if (i == 0) {
        snprintf(query_params, sizeof(query_params), "%s=%s", pairs[i].key, pairs[i].value);
     } else {
        char temp[512];
        snprintf(temp, sizeof(temp), "&%s=%s", pairs[i].key, pairs[i].value);
        strncat(query_params, temp, sizeof(query_params) - strlen(query_params) - 1);
    }
}
    const char *body = ""; // Specify an empty body.
    const char *content_type = "application/json; charset=utf-8";
    call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));

    /**
      * Example: Call an API operation in the RPC style (Parameter position: "in":"query")
    */
    // Specify the request parameters for the API operation.
    // const char *http_method = "POST";
    // const char *canonical_uri = "/";
    // const char *host = "ecs.cn-hangzhou.aliyuncs.com";
    // const char *x_acs_action = "DescribeInstanceStatus";
    // const char *x_acs_version = "2014-05-26";
    // // Configure the InstanceId parameter, which is optional. The value is an array.
    // const char *instance_ids[] = {
    //     "i-bp11ht4hXXXXXXXX",
    //     "i-bp16maz3XXXXXXXX"
    // };
    // // Concatenate the InstanceId array.
    // char InstanceId[BUFFER_SIZE];
    // snprintf(InstanceId, sizeof(InstanceId),
    //          "InstanceId.1=%s&InstanceId.2=%s",
    //         instance_ids[0],
    //         instance_ids[1]);
    // // Specify the query parameters. Required parameters: RegionId=cn-hangzhou and const char *query_params = "RegionId=cn-hangzhou".
    // char query_params[BUFFER_SIZE];
    // snprintf(query_params, sizeof(query_params),
    //          "%s&RegionId=cn-hangzhou", InstanceId);
    // const char *body = "";
    // const char *content_type = "application/json; charset=utf-8";
    // call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));

      /**
        * Example: Call an API operation in the RPC style (Parameter position: "in":"body")
      */
    // Declare the pointer for storing the file content read by the system.
    // char *body = NULL;
    // size_t body_length = read_file("<YOUR_FILE_PATH>", &body);
    // if (body_length > 0) {
    //   const char *http_method = "POST";
    //   const char *canonical_uri = "/";
    //   const char *host = "ocr-api.cn-hangzhou.aliyuncs.com";
    //   const char *x_acs_action = "RecognizeGeneral";
    //   const char *x_acs_version = "2021-07-07";
    //   const char *query_params = "";
    //   const char *content_type = "application/octet-stream";
    //   call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, body_length);
    //   free(body);
    // } else {
    //   fprintf(stderr, "File read error\n");
    // }

      /**
       * Example: Call an API operation in the RPC style (Parameter position: "in": "formData" or "in":"body")
       */
    // const char *http_method = "POST";
    // const char *canonical_uri = "/";
    // const char *host = "mt.aliyuncs.com";
    // const char *x_acs_action = "TranslateGeneral";
    // const char *x_acs_version = "2018-10-12";
    // char query_params[BUFFER_SIZE];
    // snprintf(query_params, sizeof(query_params), "Context=%s", "Morning");
    // const char *format_type = "text";
    // const char *source_language = "zh";
    // const char *target_language = "en";
    // const char *source_text = "Hello";
    // const char *scene = "general";
    // char body[BUFFER_SIZE];
    // snprintf(body, sizeof(body),
    // "FormatType=%s&SourceLanguage=%s&TargetLanguage=%s&SourceText=%s&Scene=%s",
    // percentEncode(format_type), percentEncode(source_language), percentEncode(target_language),
    // percentEncode(source_text), percentEncode(scene));
    // const char *content_type = "application/x-www-form-urlencoded";
    // printf("formdate_body: %s\n", body);
    // call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));

   // Example 3: Call an API operation in the RPC style (Parameter position: "in": "formData")
//    const char *http_method = "POST";
//    const char *canonical_uri = "/";
//    const char *host = "sasti.aliyuncs.com";
//    const char *x_acs_action = "AskTextToTextMsg";
//    const char *x_acs_version = "2020-05-12";
//    // query
//    const char *query_params = "";
//    // body
//    const char *Memory = "false";
//    const char *Stream = "true";
//    const char *ProductCode = "sddp_pre";
//    const char *Feature = "{}";
//    const char *Model = "yunsec-llm-latest";
//    const char *Type = "Chat";
//    const char *TopP = "0.9";
//    const char *Temperature = "0.01";
//    const char *Prompt = "Who are you";
//    const char *Application = "sddp_pre";
//    char body[BUFFER_SIZE];
//    snprintf(body, sizeof(body),
//            "Memory=%s&Stream=%s&ProductCode=%s&Feature=%s&Model=%s&Type=%s&TopP=%s&Temperature=%s&Prompt=%s&Application=%s",
//            Memory, Stream, ProductCode, Feature, Model, Type, TopP, Temperature, Prompt, Application);
//    const char *content_type = "application/x-www-form-urlencoded";
//    printf("formdate_body: %s\n", body);
//    call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));

      /**
        * Construct a POST request for an ROA-style API operation whose parameter position is "in" "body".
      */
//    const char *http_method = "POST";
//    const char *canonical_uri = "/clusters";
//    const char *host = "cs.cn-beijing.aliyuncs.com";
//    const char *x_acs_action = "CreateCluster";
//    const char *x_acs_version = "2015-12-15";
//    const char *query_params = "";
//    char body[BUFFER_SIZE];
//    snprintf(body, sizeof(body),
//             "{\"name\":\"%s\",\"region_id\":\"%s\",\"cluster_type\":\"%s\","
//             "\"vpcid\":\"%s\",\"container_cidr\":\"%s\","
//             "\"service_cidr\":\"%s\",\"security_group_id\":\"%s\","
//             "\"vswitch_ids\":[\"%s\"]}",
//             "Test cluster", "cn-beijing", "ExternalKubernetes",
//             "vpc-2zeou1uod4yXXXXXXXX", "10.X.X.X/XX",
//             "10.X.X.X/XX", "sg-2ze1a0rlgeXXXXXXXX",
//             "vsw-2zei30dhflXXXXXXXX");
//    const char *content_type = "application/json; charset=utf-8";
//    call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));

      /**
        * Construct a GET request for an API operation in the ROA style.
      */
//    const char *http_method = "GET";
//    char canonical_uri[BUFFER_SIZE];
//    snprintf(canonical_uri, sizeof(canonical_uri), "/clusters/%s/resources", percentEncode("cd1f5ba0dbfa144XXXXXXXX"));
//    const char *host = "cs.cn-beijing.aliyuncs.com";
//    const char *x_acs_action = "DescribeClusterResources";
//    const char *x_acs_version = "2015-12-15";
//    const char *query_params = "with_addon_resources=true";
//    const char *body = "";
//    const char *content_type = "";
//    call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));

      /**
        * Construct a DELETE request for an API operation in the ROA style.
      */
//    const char *http_method = "DELETE";
//    char canonical_uri[BUFFER_SIZE];
//    snprintf(canonical_uri, sizeof(canonical_uri), "/clusters/%s", percentEncode("cd1f5ba0dbfa144XXXXXXXX"));
//    const char *host = "cs.cn-beijing.aliyuncs.com";
//    const char *x_acs_action = "DeleteCluster";
//    const char *x_acs_version = "2015-12-15";
//    const char *query_params = "";
//    const char *body = "";
//    const char *content_type = "";
//    call_api(http_method, canonical_uri, host, x_acs_action, x_acs_version, query_params, body, content_type, strlen(body));



    // Store the generated values in variables.
    char authorization_header[BUFFER_SIZE];
    char hashed_payload[SHA256_DIGEST_LENGTH * 2 + 1];
    char x_acs_date[64];
    char uuid[37];
    return 0;
}

```

## **FAQ**

### **What do I do if a signature fails the verification and the "Specified signature does not match our calculation" or "The request signature does not conform to Aliyun standards" error message is returned?**

In most cases, a signature fails the verification because required operations are not performed during the signature calculation process. 

Common causes:

-   AccessKey configuration errors.
    
-   Incorrect parameter location: For example, passing query parameters in the request body.
    
-   The parameters in the canonicalized query string (CanonicalQueryString) are not sorted in alphabetical order.
    
-   The headers used for signature calculation (SignedHeaders) are not sorted in alphabetical order.
    
-   Spaces characters are not encoded to `%20`.
    
-   Parameters were URL-encoded more than once. During the signature calculation process, URL encoding should only be applied once to path parameters and the canonical query string. For example, if your error message shows multiple `%25` characters, it indicates that the `%` character itself has been incorrectly encoded.
    

Solution:

**Note**

Check whether the signature calculation result is correct on an on-premises machine. For more information, see the [Fixed parameter values](#d2ef1d540f7z3) section of this topic.

1.  First, compare whether the value of CanonicalRequest is the same as the result that you calculate on your on-premises machine. If not, refer to [Step 1: Construct a canonicalized request](#sectiondiv-799-06q-cmn) in this topic to locate the configuration differences between the sample code and your code.
    
2.  If the value of CanonicalRequest is the same as the result that you calculate on your on-premises machine, compare whether the value of StringToSign is the same as the result that you calculate on your on-premises machine. If they are inconsistent, there may be an error in your hash algorithm.
    
3.  If both the CanonicalRequest and StringToSign match, the problem is likely one of the following: your AccessKey secret is incorrect, or the encryption algorithm was implemented incorrectly.
    
4.  If the issue persists after checking all of the above, [request technical support](#40f7ea3f119g8).
    

### **How do I use Postman to perform debugging?**

If you cannot use Postman to call API operations, and you want to use Postman to perform debugging, perform the following steps:

1.  Use your own code or script to calculate the signature and generate the `Authorization` header value according to the signature mechanism.
    
2.  Copy all the request headers from your CanonicalHeaders (including the `Authorization` header you just generated) into the Headers tab in Postman. Example:
    
    **Key**
    
    **Example value**
    
    host
    
    dysmsapi.aliyuncs.com
    
    x-acs-action
    
    SendSms
    
    x-acs-content-sha256
    
    e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
    
    x-acs-date
    
    2025-04-16T07:45:55Z
    
    x-acs-signature-nonce
    
    315484d3-b129-4966-974a-699b7ee56647
    
    x-acs-version
    
    2017-05-25
    
    Authorization
    
    ACS3-HMAC-SHA256 Credential=testAccessKeyId,SignedHeaders=host;x-acs-action;x-acs-content-sha256;x-acs-date;x-acs-signature-nonce;x-acs-version,Signature=b37aac99faa507472778256374366b7a47ba48adbc484a53ad789db194658a2d
    
3.  Add the API parameters to Postman according to their type.
    
    **Note**
    
    The order of parameters must be identical to the order used when you calculated the signature.
    
    -   For query parameters, add them in the Params tab.
        
    -   For body parameters, add them in the Body tab.
        

### How do I pass the request parameters?

In the [API metadata](/help/en/sdk/product-overview/openapi-metadata), the `**in**` field specifies the location of each parameter, which determines how the parameter is passed in the request.

**Position**

**Description**

**content-type**

"in": "query"

Query parameters appear in the URL after the question mark (`?`). Each `key-value pair` is separated by an ampersand (`&`).

Optional. If provided, the value should be `application/json`.

"in": "formData"

Form parameters are sent in the request body. They must be concatenated into a string with the format `key1=value1&key2=value2&key3=value3`. Note: For complex types like `array` or `object`, you must "flatten" the `value` into indexed key-value pairs. For example, an `object` like `{"key":["value1","value2"]}` should be converted to `{"key.1":"value1","key.2":"value2"}`.

Required. The value must be application/x-www-form-urlencoded.

"in": "body"

Body parameters are passed directly in the request body.

Required. The value of Content-Type depends on the type of content being sent. For example:

-   If the request content is a JSON string, set the value of the Content-Type header to `application/json`.
    
-   If the request content is a binary file stream, set the value of the Content-Type header to `application/octet-stream`.
    

### According to the API metadata, the value of `style` is RPC or ROA.

The value of style affects only the value of the CanonicalURI parameter. If you set `style` to a value other than RPC and ROA, view the API metadata to check whether the `path` parameter is defined. If yes, set CanonicalURI to the value of `path`. If not, set CanonicalURI to a forward slash (`/`). For example, if the value of `path` is defined as `/api/v1/clusters` in the metadata of the API operation used to query ACK clusters, set CanonicalURI to `/api/v1/cluster`.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4936278371/p890897.png)

### **How do I pass parameters of the array or object type?**

When passing complex data types like an array or object, you must convert them into indexed key-value pairs.

Example 1: The `{"InstanceId":["i-bp10igfmnyttXXXXXXXX","i-bp1incuofvzxXXXXXXXX","i-bp1incuofvzxXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX","i-bp10igfmnyttXXXXXXXX"]}` should be converted to:

```
{
    "InstanceId.1": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.10": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.11": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.12": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.2": "i-bp1incuofvzxXXXXXXXX",
    "InstanceId.3": "i-bp1incuofvzxXXXXXXXX",
    "InstanceId.4": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.5": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.6": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.7": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.8": "i-bp10igfmnyttXXXXXXXX",
    "InstanceId.9": "i-bp10igfmnyttXXXXXXXX"
}
```

Example 2: `{"ImageId":"win2019_1809_x64_dtc_zh-cn_40G_alibase_20230811.vhd","RegionId":"cn-shanghai","Tag":[{"tag1":"value1","tag2":"value2"}]}` should be converted to:

```
{
    "ImageId":"win2019_1809_x64_dtc_zh-cn_40G_alibase_20230811.vhd",
    "RegionId":"cn-shanghai",
    "Tag.1.tag1":"value1",
    "Tag.1.tag2":"value2"
}
```

### **How do I obtain the** x-acs-version **value for an API version?**

1.  Log on to [OpenAPI Portal](https://next.api.alibabacloud.com/home) and select the API that you want to call. In example, the ECS API is used.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9034378371/p899736.png)
    
2.  View the recommended API version on the product homepage. For example, the recommended API version for ECS is 2014-05-26.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9034378371/p899739.png)
    

### **In self-signed mode, if I use the GET method to call an API operation during debugging and the call is successful, can I use the POST method to call the API operation?**

-   In most cases, you can use the POST or GET method to call an API operation in the RPC style.
    
-   However, you can use only method to call an API operation in the ROA style.
    

For more information about the request methods that can be used to call API operations, see [API metadata](/help/en/sdk/product-overview/openapi-metadata#32c6c74961o1j).

### **What do I do if the "You are not authorized to do this operation." error message is returned?**

Cause: The AccessKey pair used by the Resource Access Management (RAM) user does not have the permissions to call the API operation.

Solution: Refer to [What do I do if the "code 403. You are not authorized to do this operation. Action: xxxx" error message is returned?](/help/en/sdk/developer-reference/java-faq#e0dfb1fc8a5ib)

### **How do I obtain an AccessKey pair?**

An AccessKey pair is a permanent access credential that is provided by Alibaba Cloud to a user. An AccessKey pair consists of an AccessKey ID and an AccessKey secret. When you access Alibaba Cloud resources by calling API operations, the system authenticates the caller identity and request validity based on the AccessKey ID and signature generated based on the AccessKey secret. For more information about how to obtain an AccessKey pair, see [Create an AccessKey for a RAM user](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).

## **Contact us**

If you have questions during the signature calculation process, join the DingTalk group (ID: `147535001692`) to request technical support.

**Note**

Do not join this group for other questions.
