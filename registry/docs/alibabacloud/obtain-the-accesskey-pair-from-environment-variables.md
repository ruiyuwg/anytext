This topic describes how to send HTTP requests to call Alibaba Cloud API operations in the remote procedure call (RPC) style.

**Important**

The request syntax and signature method V2 are discontinued. Use the [request syntax and signature method V3](/help/en/sdk/product-overview/v3-request-structure-and-signature).

## HTTP request syntax

The following table describes the components of an Alibaba Cloud API request in the RPC style.

Component

Required

Description

Example

Protocol

Yes

The request protocol. You can view the protocols supported by the API in the [API metadata](/help/en/sdk/product-overview/openapi-metadata). If the API supports both `HTTP` and `HTTPS`, we recommend that you use HTTPS for higher security.

https://

Endpoint

Yes

The endpoint of the Alibaba Cloud service API. API references that list the endpoints of each Alibaba Cloud service are available. You can view the endpoints of a service in different regions in these API references.

ecs.cn-hangzhou.aliyuncs.com

Common request parameters

Yes

The common parameters that must be included in all Alibaba Cloud API requests. For more information, see the [Common request parameters](#sectiondiv-qq5-utu-r7a) section of this topic.

Action

Operation-specific request parameters

No

The request parameters that are specific to the API operation. You can view the request parameters in the [API metadata](/help/en/sdk/product-overview/openapi-metadata) or in [OpenAPI Explorer](https://next.api.alibabacloud.com/api?spm=a2chm.17658522.apicard.3.243c362biYOLVw).

RegionId

HTTPMethod

Yes

The request method. You can view the request methods supported by the API in the [API metadata](/help/en/sdk/product-overview/openapi-metadata).

GET

## **Common request parameters**

The following table describes the parameters that must be included in each API request.

Parameter

Type

Required

Description

Example

Action

String

Yes

The operation that you want to perform. You can search for the API operation that you want to perform in [OpenAPI Explorer](https://next.api.alibabacloud.com/api?spm=a2chm.17658522.apicard.3.243c362biYOLVw).

CreateInstance

Version

String

Yes

The version of the API. You can view the API version of the service that you want to access in [OpenAPI Explorer](https://next.api.alibabacloud.com/api?spm=a2chm.17658522.apicard.3.243c362biYOLVw). For example, you can view the API version of [Short Message Service (SMS)](https://next.api.alibabacloud.com/product/Dysmsapi) in OpenAPI Explorer. The API version is 2017-05-25.

2014-05-26

Format

String

No

The format in which the response is returned. Valid values: JSON and XML. Default value: XML.

JSON

AccessKeyId

String

Yes

The AccessKey ID provided to you by Alibaba Cloud. You can view your AccessKey ID in the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/manage/ak). For more information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).

yourAccessKeyId

SignatureNonce

String

Yes

A unique, random number used to prevent network replay attacks. We recommend that you use different numbers for different requests. The length of the numbers is not limited.

15215528852396

Timestamp

String

Yes

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The timestamp is valid for 31 minutes. You must send requests within 31 minutes after the timestamp is generated. For example, `2018-01-01T12:00:00Z` specifies 20:00:00 on January 1, 2018 in UTC+8.

2018-01-01T12:00:00Z

SignatureMethod

String

Yes

The encryption method of the signature string. Set the value to `HMAC-SHA1`.

HMAC-SHA1

SignatureVersion

String

Yes

The version number of the signature encryption algorithm. Set the value to `1.0`.

1.0

Signature

String

Yes

The signature string of the current request. For more information, see [Signatures](#27fbaf11b6a17).

Pc5WB8gokVn0xfeu%2FZV%2BiNM1dgI%3D

## **Parameter passing**

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
    

**Note**

If the request parameters are in a JSON string, the order of the parameters in the JSON string does not affect the signature calculation.

## Signature method

You must sign all API requests to ensure security. Alibaba Cloud uses the request signature to verify the identity of the API caller. This section describes how to calculate signatures.

### Step 1: Construct a canonicalized query string

1\. Concatenate the [common request parameters](#sectiondiv-qq5-utu-r7a) and [operation-specific parameters](#p-r1m-izt-tr1) in alphabetical order of parameter keys, excluding the `Signature` common request parameter. Pseudocode:

```
// Concatenate the common request parameters and operation-specific parameters in alphabetical order of parameter keys.
params = merged(publicParams,apiReuqestParams)
sortParams = sorted(params.keys())
```

2\. Encode the `sortParams` keys and values in UTF-8 based on [RFC 3986](https://tools.ietf.org/html/rfc3986). Use an equal sign (=) to concatenate each encoded request parameter and its value.

Encoding rules:

-   Uppercase letters, lowercase letters, digits, hyphens `(-)`, underscores `(_)`, periods `(.)`, and tildes `(~)` do not need to be encoded.
    
-   Other ASCII characters must be encoded in the %XY format. XY represents the ASCII code of the characters in hexadecimal notation. For example, double quotation marks (`"`) are encoded as `%22`. The following table describes some special characters before and after encoding. Pay attention to these special characters.
    
    Before encoding
    
    After encoding
    
    Space characters ()
    
    `%20`
    
    Asterisks (`*`)
    
    `%2A`
    
    `%7E`
    
    Titles (`~`)
    

Pseudocode:

```
encodeURIComponentParam = encodeURIComponent(sortParams.key) + "=" + encodeURIComponent(sortParams.value)
```

3\. Use ampersands (`&`) to concatenate the encoded request parameters into a `canonicalized query string`. Sort the parameters in the same order as Step 1. Pseudocode:

```
CanonicalizedQueryString = encodeURIComponentParam1 + "&" + encodeURIComponentParam2 + ... + encodeURIComponentParamN
```

### Step 2: Construct a string-to-sign and calculate the signature string

Create a string-to-sign (`StringToSign`). The following pseudocode shows how to construct a string-to-sign:

```
stringToSign =
  HTTPMethod + "&" + // HTTPMethod specifies the HTTP method that is used to send a request, such as GET. 
  encodeURIComponent("/") + "&" + // encodeURIComponent specifies the encoding method that is used in the second step of Step 1.
  encodeURIComponent(CanonicalizedQueryString) // CanonicalizedQueryString specifies the canonicalized query string that is obtained in Step 1.
```

### **Step 3: Calculate the signature string**

Calculate the signature value by using the `string-to-sign` and the AccessKey secret of the specified AccessKey ID. You must follow [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt) and use the `HMAC-SHA1` algorithm. Pseudocode:

```
signature = Base64(HMAC_SHA1(AccessKeySecret + "&", UTF_8_Encoding_Of(stringToSign)))
```

Where:

-   Base64() is the encoding calculation function.
    
-   HMAC\_SHA1() is the function for generating the HMAC\_SHA1 value. Its return value is the raw data that is encoded instead of a hexadecimal string.
    
-   UTF\_8\_Encoding\_Of() is the function for UTF-8 encoding
    

### **Step 4: Add the signature string to the request**

Encode the calculated signature value according to [RFC 3986](https://tools.ietf.org/html/rfc3986) and add the it as the value for the Signature parameter in the request. The final request URL will look like this: Pseudocode:

```
https://endpoint/?sortParams.key1=sortParams.value1&sortParams.key2=sortParams.value2&...&sortParams.keyN=sortParams.valueN&Signature=signature
```

## Signature examples

## Fixed parameter values

In this example, the [DescribeDedicatedHosts](https://next.api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHosts?lang=JAVA) operation of Elastic Compute Service (ECS) is called to query the details of one or more dedicated hosts. Each step shows the expected result based on the sample values. You can use the sample values to simulate calculations, and compare your result with the result of this example to test the signature signing process.

Parameter

Sample value

Endpoint

ecs.cn-beijing.aliyuncs.com

Action

DescribeDedicatedHosts

Version

2014-05-26

Format

JSON

AccessKeyId

testid

AccessKeySecret

testsecret

SignatureNonce

edb2b34af0af9a6d14deaf7c1a5315eb

Timestamp

2023-03-13T08:34:30Z

Operation-specific request parameters

Parameter

Sample value

RegionId

cn-beijing

To calculate the signature string, perform the following steps:

1.  Construct a canonicalized query string.
    
    ```
    AccessKeyId=testid&Action=DescribeDedicatedHosts&Format=JSON&RegionId=cn-beijing&SignatureMethod=HMAC-SHA1&SignatureNonce=edb2b34af0af9a6d14deaf7c1a5315eb&SignatureVersion=1.0&Timestamp=2023-03-13T08%3A34%3A30Z&Version=2014-05-26
    ```
    
2.  Construct a `string-to-sign`.
    
    ```
    GET&%2F&AccessKeyId%3Dtestid%26Action%3DDescribeDedicatedHosts%26Format%3DJSON%26RegionId%3Dcn-beijing%26SignatureMethod%3DHMAC-SHA1%26SignatureNonce%3Dedb2b34af0af9a6d14deaf7c1a5315eb%26SignatureVersion%3D1.0%26Timestamp%3D2023-03-13T08%253A34%253A30Z%26Version%3D2014-05-26
    ```
    
3.  Calculate the signature string. In this example, the AccessKey secret is `testsecret`. Signature string:
    
    ```
    9NaGiOspFP5UPcwX8Iwt2YJXXuk=
    ```
    
4.  Initiate the request. Obtain the complete URL in the format of `[protocol][endpoint]?[common request parameters][operation-specific parameters]`.
    
    ```
    https://ecs.cn-beijing.aliyuncs.com/?AccessKeyId=testid&Action=DescribeDedicatedHosts&Format=JSON&Signature=9NaGiOspFP5UPcwX8Iwt2YJXXuk%3D&SignatureMethod=HMAC-SHA1&SignatureNonce=edb2b34af0af9a6d14deaf7c1a5315eb&SignatureVersion=1.0&Timestamp=2023-03-13T08%3A34%3A30Z&Version=2014-05-26&RegionId=cn-beijing
    ```
    
    You can use a tool such as cURL or Wget to send an HTTP request to call the `DescribeDedicatedHosts` operation. This operation is used to query the information about one or more dedicated hosts.
    

## Java

**Note**

In this example, the Java 8 runtime environment is used. Adjust the parameters based on your business requirements.

To use the signature method in Java, you must add the following Maven dependencies to the pom.xml file:

```
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.13</version>
</dependency>
```

```
import org.apache.http.client.methods.*;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.*;

public class Demo {
    private static final String ACCESS_KEY_ID = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    private static final String ACCESS_KEY_SECRET = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");

    public static class SignatureRequest {
        public final String httpMethod;
        public final String host;
        public final String action;
        public final String version;
        public final String canonicalUri = "/";
        public TreeMap<String, Object> headers = new TreeMap<>();
        public TreeMap<String, Object> queryParams = new TreeMap<>();
        public TreeMap<String, Object> body = new TreeMap<>();
        public TreeMap<String, Object> allParams = new TreeMap<>();
        public byte[] bodyByte;

        public SignatureRequest(String httpMethod, String host, String action, String version) {
            this.httpMethod = httpMethod;
            this.host = host;
            this.action = action;
            this.version = version;
            setExtendedHeaders();
        }

        public void setExtendedHeaders() {
            headers.put("AccessKeyId", ACCESS_KEY_ID);
            headers.put("Format", "JSON");
            headers.put("SignatureMethod", "HMAC-SHA1");
            headers.put("SignatureVersion", "1.0");
            headers.put("SignatureNonce", UUID.randomUUID().toString());
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'")
            format.setTimeZone(new SimpleTimeZone(0, "GMT"));
            headers.put("Timestamp", format.format(new Date()));
            headers.put("Action", action);
            headers.put("Version", version);
        }

        public void getAllParams() {
            allParams.putAll(headers);
            if (!queryParams.isEmpty()) {
                allParams.putAll(queryParams);
            }
            if (!body.isEmpty()) {
                allParams.putAll(body);
            }
        }
    }

    public static void main(String[] args) throws IOException {
        // Example 1: Send an API request without a body.
        String httpMethod = "POST";
        String endpoint = "dysmsapi.aliyuncs.com";
        String action = "SendSms";
        String version = "2017-05-25";
        SignatureRequest signatureRequest = new SignatureRequest(httpMethod, endpoint, action, version);
        signatureRequest.queryParams.put("PhoneNumbers", "123XXXXXXXX");
        signatureRequest.queryParams.put("SignName", "XXXXXXX");
        signatureRequest.queryParams.put("TemplateCode", "XXXXXXX");
        signatureRequest.queryParams.put("TemplateParam", "XXXXXXX");

        // Example 2: Send an API request with a body.
        String httpMethod = "POST";
        String endpoint = "mt.aliyuncs.com";
        String action = "TranslateGeneral";
        String version = "2018-10-12";
        SignatureRequest signatureRequest = new SignatureRequest(httpMethod, endpoint, action, version);
        TreeMap<String, Object> body = new TreeMap<>();
        body.put("FormatType", "text");
        body.put("SourceLanguage", "zh");
        body.put("TargetLanguage", "en");
        body.put("SourceText", "Hello");
        body.put("Scene", "general");
        signatureRequest.body = body;
        String formDataToString = formDataToString(body);
        signatureRequest.bodyByte = formDataToString.getBytes(StandardCharsets.UTF_8);
        signatureRequest.headers.put("content-type", "application/x-www-form-urlencoded");*/

        /*// Example 3: Send an API request whose body is a binary file.
        String httpMethod = "POST";
        String endpoint = "ocr-api.cn-hangzhou.aliyuncs.com";
        String action = "RecognizeGeneral";
        String version = "2021-07-07";
        SignatureRequest signatureRequest = new SignatureRequest(httpMethod, endpoint, action, version);
        signatureRequest.bodyByte = Files.readAllBytes(Paths.get("D:\\test.png"));
        signatureRequest.headers.put("content-type", "application/octet-stream");*/

        // Calculate the signature string.
        calculateSignature(signatureRequest);

        // Send a request to test whether the signature string is valid.
        callApi(signatureRequest);
    }

    private static void calculateSignature(SignatureRequest signatureRequest) {
        // Merge header, queryParam, and body into a map that is used to construct a canonicalized query string.
        signatureRequest.getAllParams();

        // Construct a canonicalized query string.
        StringBuilder canonicalQueryString = new StringBuilder();
        signatureRequest.allParams.entrySet().stream().map(entry -> percentEncode(entry.getKey()) + "="
                + percentEncode(String.valueOf(entry.getValue()))).forEachOrdered(queryPart -> {
            if (canonicalQueryString.length() > 0) {
                canonicalQueryString.append("&");
            }
            canonicalQueryString.append(queryPart);
        });
        System.out.println("canonicalQueryString:" + canonicalQueryString);

        // Create a string-to-sign.
        String stringToSign = signatureRequest.httpMethod + "&" + percentEncode(signatureRequest.canonicalUri) + "&" + percentEncode(String.valueOf(canonicalQueryString));
        System.out.println("stringToSign:" + stringToSign);
        // Calculate the signature string.
        String signature = generateSignature(ACCESS_KEY_SECRET, stringToSign);
        System.out.println("signature:" + signature);
        signatureRequest.allParams.put("Signature", signature);
    }

    private static void callApi(SignatureRequest signatureRequest) {
        try {
            String url = String.format("https://%s/", signatureRequest.host);
            URIBuilder uriBuilder = new URIBuilder(url);
            for (Map.Entry<String, Object> entry : signatureRequest.allParams.entrySet()) {
                uriBuilder.addParameter(entry.getKey(), String.valueOf(entry.getValue()));
            }
            HttpUriRequest httpRequest;
            switch (signatureRequest.httpMethod) {
                case "GET":
                    httpRequest = new HttpGet(uriBuilder.build());
                    break;
                case "POST":
                    HttpPost httpPost = new HttpPost(uriBuilder.build());
                    if (signatureRequest.bodyByte != null) {
                        httpPost.setEntity(new ByteArrayEntity(signatureRequest.bodyByte, ContentType.create((String) signatureRequest.headers.get("content-type"))));
                    }
                    httpRequest = httpPost;
                    break;
                default:
                    System.out.println("Unsupported HTTP method: " + signatureRequest.httpMethod);
                    throw new IllegalArgumentException("Unsupported HTTP method");
            }
            try (CloseableHttpClient httpClient = HttpClients.createDefault(); CloseableHttpResponse response = httpClient.execute(httpRequest)) {
                String result = EntityUtils.toString(response.getEntity(), StandardCharsets.UTF_8);
                System.out.println(result);
            } catch (IOException e) {
                System.out.println("Failed to send request");
                throw new RuntimeException(e);
            }
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

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
                result.append(percentEncode(entry.getKey()));
                result.append("=");
                result.append(percentEncode(value));
            }
        }

        return result.toString();
    }

    private static void processObject(Map<String, Object> map, String key, Object value) {
        // No further processing is required for a null value.
        if (value == null) {
            return;
        }
        if (key == null) {
            key = "";
        }
        // If the value is of the List type, traverse the list and perform recursion on each element.
        if (value instanceof List<?>) {
            List<?> list = (List<?>) value;
            for (int i = 0; i < list.size(); ++i) {
                processObject(map, key + "." + (i + 1), list.get(i));
            }
        } else if (value instanceof Map<?, ?>) {
            // If the value is of the Map type, traverse the map and perform recursion on each key-value pair.
            Map<?, ?> subMap = (Map<?, ?>) value;
            for (Map.Entry<?, ?> entry : subMap.entrySet()) {
                processObject(map, key + "." + entry.getKey().toString(), entry.getValue());
            }
        } else {
            // If a key starts with a period (.), remove the period (.) to maintain the continuity of keys.
            if (key.startsWith(".")) {
                key = key.substring(1);
            }
            // If a value is in the byte[] format, convert the value to a string encoded in UTF-8.
            if (value instanceof byte[]) {
                map.put(key, new String((byte[]) value, StandardCharsets.UTF_8));
            } else {
                // Convert the values of other types to strings.
                map.put(key, String.valueOf(value));
            }
        }
    }

    public static String generateSignature(String accessSecret, String stringToSign) {
        try {
            // Create an HMAC-SHA1 key.
            SecretKeySpec signingKey = new SecretKeySpec((accessSecret + "&").getBytes(StandardCharsets.UTF_8), "HmacSHA1");
            // Create and initialize a Mac instance
            Mac mac = Mac.getInstance("HmacSHA1");
            mac.init(signingKey);
            // Calculate the signature string by using the HMAC-SHA1 algorithm.
            byte[] rawHmac = mac.doFinal(stringToSign.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(rawHmac);
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            System.out.println("Failed to generate HMAC-SHA1 signature");
            throw new RuntimeException(e);
        }
    }

    public static String percentEncode(String str) {
        if (str == null) {
            throw new IllegalArgumentException("The specified string cannot be null.");
        }
        try {
            return URLEncoder.encode(str, StandardCharsets.UTF_8.name()).replace("+", "%20").replace("*", "%2A").replace("%7E", "~");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("UTF-8 encoding is not supported.", e);
        }
    }
}
```

## Python

**Note**

In this example, the Python 3.12.3 runtime environment is used. Adjust the parameters based on your business requirements.

To run the sample code, you must install the requests library:

```
pip install requests
```

```
import base64
import hashlib
import hmac
import os
import urllib.parse
import uuid
from collections import OrderedDict
from datetime import datetime, UTC
from typing import Dict, Any

import requests

# Obtain the AccessKey pair from environment variables.
ACCESS_KEY_ID = os.environ.get("ALIBABA_CLOUD_ACCESS_KEY_ID")
ACCESS_KEY_SECRET = os.environ.get("ALIBABA_CLOUD_ACCESS_KEY_SECRET")


class SignatureRequest:
    """
    A class to construct and manage RPC API requests.
    """

    def __init__(self, http_method: str, host: str, action: str, version: str):
        """
        Initializes the SignatureRequest object.

        Args:
            http_method: The HTTP request method (such as GET and POST).
            host: The API service endpoint.
            action: The API operation name.
            version: The API version.
        """
        self.http_method = http_method.upper()
        self.host = host
        self.action = action
        self.version = version
        self.canonical_uri = "/" # RPC APIs use the root path.
        self.headers: Dict[str, Any] = OrderedDict() # The request headers.
        self.query_params: Dict[str, Any] = OrderedDict() # The query parameters.
        self.body: Dict[str, Any] = OrderedDict() # The equest body.
        self.body_byte: bytes = b"" # The bytes of the request body.
        self.all_params: Dict[str, Any] = OrderedDict() # A collection of all parameters.
        self.set_headers()

    def set_headers(self) -> None:
        """
        Sets the required common headers for an RPC request.
        """
        "AccessKeyId": "<ak id>", //The AccessKey ID.
        ->format('JSON')  // Specifies the response format.
        self.headers["SignatureMethod"] = "HMAC-SHA1" # The signature algorithm.
        self.headers["SignatureVersion"] = "1.0" # The signature version.
        self.headers["SignatureNonce"] = "{" + str(uuid.uuid4()) + "}" # The random anti-replay string.
        self.headers["Timestamp"] = datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ") # The timestamp.
        self.headers["Action"] =self.action# The API name.
        self.headers["Version"] =self.version# The API version number.

    def set_content_type(self, content_type):
        self.headers["Content-Type"] = content_type

    def get_all_params(self) -> None:
        """
        Collect and sort all request parameters.
        """
        # Merge all parameters: headers, query_params, and body.
        self.all_params.update(self.headers)
        if self.query_params:
            self.all_params.update(self.query_params)
        if self.body:
            self.body_byte = form_data_to_string(body).encode("utf-8")
            self.all_params.update(self.body)

        # Sort parameters by key in ASCII order.
        self.all_params = OrderedDict(sorted(self.all_params.items()))


def calculate_signature(signature_request: SignatureRequest) -> None:
    """
    Calculate the signature of an RPC request

    Args:
        signature_request: The SignatureRequest object.
    """
    signature_request.get_all_params() # Collect and sort all request parameters.

    # Construct a canonicalized query string.
    canonical_query_string = "&".join(
        f"{percent_encode(k)}={percent_encode(v)}"
        for k, v in signature_request.all_params.items()
    )
    print(f"canonicalQueryString:{canonical_query_string}")

    # Construct a string-to-sign: HTTP method + canonical URI + canonicalized query string.
    string_to_sign = (
        f"{signature_request.http_method}&"
        f"{percent_encode(signature_request.canonical_uri)}&"
        f"{percent_encode(canonical_query_string)}"
    )
    print(f"stringToSign:{string_to_sign}")

    # Generate the signature.
    signature = generate_signature(ACCESS_KEY_SECRET, string_to_sign)
    signature_request.all_params["Signature"] = signature # Add the signature to the parameter.


def form_data_to_string(form_data: Dict[str, Any]) -> str:
    """
    Convert a form data dictionary to a URL-encoded string.

    Args:
        form_data: The form data dictionary.

    Returns:
        A URL-encoded string.
    """
    tile_map: Dict[str, Any] = {}

    def process_object(key: str, value: Any) -> None:
        """
        Recursively flattens nested structures.

        Args:
            key: The parameter key.
            value: the parameter value
        """
        if value is None:
            return
        if isinstance(value, list):
            # Process list-type parameters.
            for i, item in enumerate(value):
                process_object(f"{key}.{i + 1}", item)
        elif isinstance(value, dict):
            # Process dictionary-type parameters.
            for k, v in value.items():
                process_object(f"{key}.{k}", v)
        else:
            # Remove the leading dot.
            clean_key = key[1:] if key.startswith(".") else key
            # Process byte data and regular data.
            tile_map[clean_key] = value.decode("utf-8") if isinstance(value, bytes) else str(value)

    # Process all form data.
    for k, v in form_data.items():
        process_object(k, v)

    # URL-encode and join.
    encoded_items = [
        f"{percent_encode(k)}={percent_encode(v)}"
        for k, v in tile_map.items() if v
    ]

    return "&".join(encoded_items)


def generate_signature(access_secret: str, string_to_sign: str) -> str:
    """
    Generate a signature using the HMAC-SHA1 algorithm.

    Args:
        access_key_secret: The AccessKey secret.
        string_to_sign: The string to be signed.

    Returns:
        A Base64-encoded signature.
    """
    try:
        # he signing key is the AccessKey secret appended with an ampersand (&).
        signing_key = (access_secret + "&").encode("utf-8")
        # Calculate the signature using the HMAC-SHA1 algorithm.
        signature = hmac.new(signing_key, string_to_sign.encode("utf-8"), hashlib.sha1).digest()
        # Base64-encode the signature result.
        return base64.b64encode(signature).decode("utf-8")
    except Exception as e:
        print(f"Failed to generate HMAC-SHA1 signature: {e}")
        raise


def percent_encode(s: str) -> str:
    """
    Percent-encodes a string according to RFC 3986.

    Args:
        s: The string to encode.

    Returns:
        The encoded string.
    """
    if s is None:
        raise ValueError("Input string cannot be None")
    # URL-encode using UTF-8, but keep tildes (~) unencoded.
    encoded = urllib.parse.quote(s.encode("utf-8"), safe=b"~")
    # Replace special character encodings.
    return encoded.replace("+", "%20").replace("*", "%2A")


def call_api(signature_request: SignatureRequest) -> None:
    """
    Send the API request.
    """
    url = f"https://{signature_request.host}/"

    # Construct request parameters.
    params = {k: str(v) for k, v in signature_request.all_params.items()}

    # Prepare request arguments.
    request_kwargs = {
        "params": params
    }

    # Add request body data (if any).
    if signature_request.body_byte:
        request_kwargs["data"] = signature_request.body_byte
        headers = {"Content-Type": signature_request.headers.get("Content-Type")}
        request_kwargs["headers"] = headers

    try:
        # Use requests.request to handle different HTTP methods uniformly.
        response = requests.request(
            method=signature_request.http_method,
            url=url,
            **request_kwargs
        )

        print(f"Request URL: {response.url}")
        print(f"Response: {response.text}")

    except requests.RequestException as e:
        print(f"HTTP request failed: {e}")
        raise
    except Exception as e:
        print(f"Failed to send request: {e}")
        raise


if __name__ == "__main__":
    # Example 1: Request with no body. Content-Type is optional. If passed, use application/json.
    signature_request = SignatureRequest(
        http_method="POST",
        host="dysmsapi.aliyuncs.com",
        action="SendSms",
        version="2017-05-25"
    )
    # query_params are used to configure query parameters.
    signature_request.query_params["SignName"] = "******"
    signature_request.query_params["TemplateCode"] = "SMS_******"
    signature_request.query_params["PhoneNumbers"] = "******"
    signature_request.query_params["TemplateParam"] = "{'code':'1234'}"

    # Example 2: Request with a form data body. Content-Type must be application/x-www-form-urlencoded.
    """
    signature_request = SignatureRequest(
        http_method="POST",
        host="mt.aliyuncs.com",
        action="TranslateGeneral",
        version="2018-10-12"
    )
    body = {
        "FormatType": "text",
        "SourceLanguage": "zh",
        "TargetLanguage": "en",
        "SourceText": "Hello",
        "Scene": "general"
    }
    signature_request.body = body
    signature_request.set_content_type("application/x-www-form-urlencoded")
    """

    Example 3: Upload a binary file stream. Content-Type must be application/octet-stream.
    """
    signature_request = SignatureRequest(
        http_method="POST",
        host="ocr-api.cn-hangzhou.aliyuncs.com",
        action="RecognizeGeneral",
        version="2021-07-07"
    )
    with open("D:\\test.jpeg", "rb") as f:
        signature_request.body_byte = f.read()
    signature_request.set_content_type("application/octet-stream")
    """

    # Calculate the signature.
    calculate_signature(signature_request)

    # Send the API request.
    call_api(signature_request)
```

## **References**

For more information about the difference between RPC-style APIs and ROA-style APIs, see [API styles](/help/en/sdk/product-overview/openapi-style#7fea5a600fk7v).
