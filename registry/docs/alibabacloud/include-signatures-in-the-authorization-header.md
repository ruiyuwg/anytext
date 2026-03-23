In Object Storage Service (OSS), the most common method to provide authentication information is by using the HTTP Authorization header. Except for POST requests and requests that are signed by using query parameters, all OSS operations use the Authorization header for authentication. This topic describes how to use the V1 signature algorithm to include a signature in the Authorization header.

**Important**

We recommend that you use the V4 signature algorithm, which provides better security. For more information, see [Include a V4 signature in the Authorization header (recommended)](/help/en/oss/developer-reference/recommend-to-use-signature-version-4).

## **Use OSS SDKs to automatically implement V1 signatures**

OSS SDKs support the automatic implementation of V1 signatures. When you use OSS SDKs, you do not need to add signatures to requests. For more information about the signature implementation for a specific programming language, see the sample code of OSS SDK for that programming language. The following table provides references to the sample code that is used to sign requests initiated by using OSS SDKs for different programming languages.

**SDK**

**Sample code**

Java

[OSSV1Signer.java](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/main/java/com/aliyun/oss/internal/signer/OSSV1Signer.java)

PHP

[SignerV1.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/src/OSS/Signer/SignerV1.php)

Node.js

[client.js](https://github.com/ali-sdk/ali-oss/blob/master/lib/client.js#L147)

Browser.js

Python

[auth.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/oss2/auth.py#L77)

.Net

[OssRequestSigner.cs](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/sdk/Util/OssRequestSigner.cs)

Android

[OSSUtils.java](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/main/java/com/alibaba/sdk/android/oss/common/utils/OSSUtils.java)

Go

[v1.go](https://github.com/aliyun/alibabacloud-oss-go-sdk-v2/blob/master/oss/signer/v1.go)

iOS

[OSSModel.m](https://github.com/aliyun/aliyun-oss-ios-sdk/blob/master/AliyunOSSSDK/OSSModel.m)

C++

[SignerV1.cc](https://github.com/aliyun/aliyun-oss-cpp-sdk/blob/master/sdk/src/signer/SignerV1.cc)

C

[oss\_auth.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk/oss_auth.c)

Ruby

[util.rb](https://github.com/aliyun/aliyun-oss-ruby-sdk/blob/master/lib/aliyun/oss/util.rb)

## Calculation of the Authorization header

### Calculation method

```
Authorization = "OSS " + AccessKeyId + ":" + Signature
Signature = base64(hmac-sha1(AccessKeySecret,
            VERB + "\n"
            + Content-MD5 + "\n" 
            + Content-Type + "\n" 
            + Date + "\n" 
            + CanonicalizedOSSHeaders
            + CanonicalizedResource))
```

### Parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

AccessKeyId

String

Yes

LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The AccessKey pair of the account that you want to use to access OSS resources. An AccessKey pair consists of an AccessKey ID and AccessKey secret.

-   For more information about how to obtain the AccessKey pair of an Alibaba Cloud account or a RAM user, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#task-2245479).
    
-   For more information about how to obtain the AccessKey pair provided by Security Token Service (STS) for a temporarily authorized account, see [Use temporary credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb).
    

AccessKeySecret

String

Yes

yourAccessKeySecret

x-oss-security-token

String

No

CAIS\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The security token issued by STS. This parameter is required only if you use STS to construct a signature for the Authorization Header. For more information about how to obtain a security token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#main-107864).

VERB

Enumeration

Yes

PUT

The method of the HTTP request, such as PUT, GET, POST, HEAD, DELETE, or OPTIONS.

\\n

String

No

\\n

The line feed.

Content-MD5

String

No

eB5e\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The MD5 hash of the requested content. The message content (without headers) is calculated to obtain an MD5 hash, which is a 128-bit number. This number is encoded in Base64 to generate the Content-MD5 value. For more information, visit [RFC 2616 Content-MD5](https://www.ietf.org/rfc/rfc2616.txt).

The request header can be used to check the validity of a message. The message content is valid if the received message content is the same as the content that is sent. This parameter can be left empty.

For more information about how to calculate the value of Content-MD5, see [Calculation of Content-MD5](#section-i74-k35-5w4).

Content-Type

String

No

application/octet-stream

The type of the request content. This parameter can be left empty.

**Note**

If you do not specify Content-Type when you calculate a signature, you do not need to specify this parameter afterwards when you upload an object by using the signature.

Date

String

Yes

Sun, 22 Nov 2015 08:16:38 GMT

The time when the operation is performed. The value of this parameter must be in UTC. This parameter cannot be left empty. The value of the parameter is calculated from the Date header or x-oss-date header of the request. When the two headers exist at the same time, x-oss-date takes precedence.

**Important**

If the difference between the time that is specified by the Date header in a request and the time on the server when the request is received is greater than 15 minutes, OSS rejects the request and returns the HTTP status code 403.

CanonicalizedOSSHeaders

String

No

x-oss-meta-a:a\\nx-oss-meta-b:b\\nx-oss-meta-c:c\\n

The HTTP headers that are prefixed with `x-oss-` and arranged in alphabetical order. This parameter can be left empty.

-   If CanonicalizedOSSHeaders is left empty, you do not need to add the `\n` delimiter at the end of the header.
    
-   If CanonicalizedOSSHeaders includes only one header, the `\n` delimiter must be added at the end of the header. Example: `x-oss-meta-a\n`.
    
-   If CanonicalizedOSSHeaders includes multiple headers, you must add the `\n` delimiter at the end of each header. Example: `x-oss-meta-a:a\nx-oss-meta-b:b\nx-oss-meta-c:c\n`.
    

For more information about how to construct CanonicalizedOSSHeaders, see the [Creation of CanonicalizedOSSHeaders](#section-w2k-sw2-xdb) section of this topic.

CanonicalizedResource

String

Yes

examplebucket

The OSS resource that you want to access. This parameter cannot be left empty.

For more information about how to construct CanonicalizedResource, see the [Creation of CanonicalizedResource](#section-rvv-dx2-xdb) section of this topic.

### Examples

-   Example 1 (including all parameters)
    
    **Request**
    
    **Formula**
    
    **Signature string**
    
    PUT /nelson HTTP/1.0 Content-MD5: eB5e\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Content-Type: text/html Date: Wed, 28 Dec 2022 10:27:41 GMT Host: examplebucket.oss-cn-hangzhou.aliyuncs.com x-oss-meta-author: alice x-oss-meta-magic: abracadabra
    
    Signature = base64(hmac-sha1(AccessKeySecret,VERB + "\\n" + Content-MD5 + "\\n"+ Content-Type + "\\n" + Date + "\\n" + CanonicalizedOSSHeaders+ CanonicalizedResource))
    
    PUT\\n eB5e\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\\n text/html\\n Wed, 28 Dec 2022 10:27:41 GMT\\n x-oss-meta-magic:abracadabra\\nx-oss-meta-author:alice\\n/examplebucket/nelson
    
    If the AccessKey ID is LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* and the AccessKey secret is yourAccessKeySecret, you can run the following Python code to calculate the signature.
    
    ```
    import hmac
    import hashlib
    import base64
    
    h = hmac.new("yourAccessKeySecret".encode('utf-8'),
                 "PUT\nODBGOERFMDMzQTczRUY3NUE3NzA5QzdFNUYzMDQxNEM\ntext/html\nWed, 28 Dec 2022 10:27:41 GMT\nx-oss-meta-magic:abracadabra\nx-oss-meta-author:alice\n/oss-example/nelson".encode('utf-8'), hashlib.sha1)
    signature =  base64.encodebytes(h.digest())
    print(signature)
    ```
    
    The calculated signature is `J9Nl3b+xdEKNQGWFhhZpjSLm****`. The following example shows the final request that includes the Authorization header:
    
    ```
    PUT /nelson HTTP/1.0
    Authorization:OSS LTAI****************:J9Nl************************
    Content-Md5: eB5e********************
    Content-Type: text/html
    Date: Wed, 28 Dec 2022 10:27:41 GMT
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    x-oss-meta-author: alice
    x-oss-meta-magic: abracadabra
    ```
    
-   Example 2 (excluding the optional parameters Content-MD5 and Content-Type)
    
    **Request**
    
    **Formula**
    
    **Signature string**
    
    PUT /nelson HTTP/1.0 Date: Wed, 28 Dec 2022 09:56:32 GMT Host: examplebucket.oss-cn-hangzhou.aliyuncs.com x-oss-meta-author: alice x-oss-meta-magic: abracadabra
    
    Signature = base64(hmac-sha1(AccessKeySecret,VERB + "\\n" + "\\n"+ "\\n" + Date + "\\n" + CanonicalizedOSSHeaders+ CanonicalizedResource))
    
    PUT\\n\\n\\nWed, 28 Dec 2022 09:56:32 GMT\\n x-oss-meta-magic:abracadabra\\nx-oss-meta-author:alice\\n/examplebucket/nelson
    
    If the AccessKey ID is LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* and the AccessKey secret is KZo1\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*, you can run the following Python code to calculate the signature:
    
    ```
    import hmac
    import hashlib
    import base64
    
    h = hmac.new("KZo1**************************".encode('utf-8'),
                 "PUT\n\n\nWed, 28 Dec 2022 09:56:32 GMT\nx-oss-meta-magic:abracadabra\nx-oss-meta-author:alice\n/oss-example/nelson".encode('utf-8'), hashlib.sha1)
    signature =  base64.encodebytes(h.digest())
    print(signature)
    ```
    
    The calculated signature is `Mhb1************************`. The following example shows the final request that includes the Authorization header:
    
    ```
    PUT /nelson HTTP/1.0
    Authorization:OSS LTAI****************:Mhb1************************
    Date: Wed, 28 Dec 2022 09:56:32 GMT
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    x-oss-meta-author: alice
    x-oss-meta-magic: abracadabra
    ```
    

### Additional information

-   If the imported AccessKey ID does not exist or is not activated, 403 Forbidden is returned with the InvalidAccessKeyId error code. If the imported AccessKey ID is activated but OSS determines that a signature error occurs in the request, 403 Forbidden is returned with the correct signature string in the response to verify the encryption. You can check whether the signature string is correct based on the response.
    
    Sample response:
    
    ```
    <?xml version="1.0" ?>
    <Error>
     <Code>
         SignatureDoesNotMatch
     </Code>
     <Message>
         The request signature we calculated does not match the signature you provided. Check your key and signing method.
     </Message>
     <StringToSignBytes>
         47 45 54 0a 0a 0a 57 65 64 2c 20 31 31 20 4d 61 79 20 32 30 31 31 20 30 37 3a 35 39 3a 32 35 20 47 4d 54 0a 2f 75 73 72 65 61 6c 74 65 73 74 3f 61 63 6c
     </StringToSignBytes>
     <RequestId>
         1E446260FF9B****
     </RequestId>
     <HostId>
         oss-cn-hangzhou.aliyuncs.***
     </HostId>
     <SignatureProvided>
         y5H7yzPsA/tP4+0tH1HHvPEwUv8=
     </SignatureProvided>
     <StringToSign>
         GET
    Wed, 11 May 2011 07:59:25 GMT
    /examplebucket?acl
     </StringToSign>
     <OSSAccessKeyId>
         AKIAIVAKMSMOY7VO****
     </OSSAccessKeyId>
    </Error>
    ```
    
-   If the format of the Authorization value in the request is invalid, 400 Bad Request is returned with the InvalidArgument error code.
    
-   The date and time in all OSS requests must be in UTC that is specified in HTTP/1.1. The date is in the following format:
    
    ```
    date1 = 2DIGIT SP month SP 4DIGIT; day month year (e.g., 02 Jun 1982)
    ```
    
    **Note**
    
    In the preceding date format, `day` uses two digits. Therefore, `Jun 2`, `2 Jun 1982`, and `2-Jun-1982` are all invalid date formats.
    
    -   If the Date header is not specified or is in an invalid format in a signed request, 403 Forbidden is returned with the AccessDenied error code.
        
    -   If the difference between the time specified by the Date header in a request and the time on the server when the request is received is greater than 15 minutes, 403 Forbidden is returned with the RequestTimeTooSkewed error code.
        

## Creation of CanonicalizedOSSHeaders

All HTTP headers prefixed with `x-oss-` are called CanonicalizedOSSHeaders. You can perform the following steps to create CanonicalizedOSSHeaders:

1.  Convert the names of all HTTP request headers prefixed with `x-oss-` into lowercase letters. For example, convert `X-OSS-Meta-Name: TaoBao` into `x-oss-meta-name: TaoBao`.
    
2.  If the request is sent by using a temporary access credential obtained from STS, you must add the obtained security-token value to the signature string in the `x-oss-security-token:security-token` format.
    
    **Note**
    
    For more information about how to configure STS, see [Use temporary access credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb). You can call the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) operation or use [STS SDKs for various programming languages](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb) to obtain temporary access credentials. Temporary access credentials contain a security token and a temporary AccessKey pair. An AccessKey pair consists of an AccessKey ID and an AccessKey secret.
    
3.  Sort all HTTP request headers in alphabetical order.
    
4.  Delete all spaces on each side of the delimiter between each header and the header value. For example, convert `x-oss-meta-name: TaoBao` into `x-oss-meta-name:TaoBao`.
    
5.  Separate all headers with the `\n` delimiter to create CanonicalizedOSSHeaders.
    

## Creation of CanonicalizedResource

The OSS resources that are required in a request are called CanonicalizedResource. You can perform the following operations to construct CanonicalizedResource:

-   If the resource contains a bucket and an object, set CanonicalizedResource to /BucketName/ObjectName.
    
-   If the resource contains a bucket, set CanonicalizedResource to /BucketName/.
    
-   If the resource does not contain a bucket or an object, set CanonicalizedResource to a forward slash (/).
    
-   If the resource contains subresources, sort all subresources in alphabetical order and separate them with ampersands (`&`). Add a question mark (`?`) and the subresource string at the end of the CanonicalizedResource string. The created CanonicalizedResource is in the following format: `/BucketName/ObjectName?acl&uploadId=UploadId`.
    
    OSS supports the following types of subresources:
    
    -   Resource identifiers, such as acl, uploads, location, cors, logging, website, referer, lifecycle, delete, append, tagging, objectMeta, uploadId, partNumber, security-token, position, img, style, styleName, replication, replicationProgress, replicationLocation, cname, bucketInfo, comp, qos, live, status, vod, startTime, endTime, symlink, x-oss-process, callback, and callback-var. For more information, see [PutBucket](/help/en/oss/developer-reference/putbucket#reference-wdh-fj5-tdb) and [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
        
        **Important**
        
        Resource identifiers are case-sensitive.
        
    -   Response headers, such as response-content-language, response-expires, response-cache-control, response-content-disposition, and response-content-encoding. For more information, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
        
    -   Image processing (IMG) implementation modes, such as `x-oss-process`. For more information, see [Overview](/help/en/oss/user-guide/overview-17/#concept-2333980).
        
    -   Access control fields that start with `x-oss-ac-*`, such as x-oss-ac-source-ip, x-oss-ac-subnet-mask, x-oss-ac-vpc-id, and x-oss-ac-forward-allow. For more information, see [Create a signed URL by using signature V1](/help/en/oss/developer-reference/ddd-signatures-to-urls#concept-xqh-2df-xdb).
        
        **Note**
        
        After you use CanonicalizedResource that contains x-oss-ac-source-ip to generate a signature, remove x-oss-ac-source-ip from the query parameters in the request to prevent IP address leaks.
        

## Signature calculation rules

-   The signature string that is used to calculate the signature must be encoded in `UTF-8`. A signature string that contains Chinese characters must be encoded in `UTF-8`. The encoded signature string is used together with the `AccessKeySecret` parameter to calculate the final signature string.
    
-   The HMAC-SHA1 method that is specified in [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt) is used to calculate the signature. In this method, Key indicates the AccessKey secret.
    
-   `Content-Type` and `Content-MD5` can be left unspecified in a request. However, if OSS needs to verify the signature of the request and the values of these two headers are empty, replace the empty values with line feeds (`\n`).
    
-   Non-standard HTTP headers prefixed with `x-oss-` must be added to the signature string. Other non-standard HTTP headers are ignored by OSS. For example, the x-oss-meta-magic header in the following signature examples must be included in the signature string.
    
    **Note**
    
    Headers prefixed with `x-oss-` in the signature string must comply with the following conventions:
    
    -   The names of headers must be in lowercase.
        
    -   The headers must be sorted in alphabetical order.
        
    -   No space exists before or after the colon (:) that separates each header name and value.
        
    -   Each header is followed by a line feed (\\n). If no header is specified, leave CanonicalizedOSSHeaders empty.
        
    

## Calculation of Content-MD5

In the following examples, the string "123456789" is used to show how to calculate the Content-MD5 value of the request content.

-   Correct calculation
    
    1.  Calculate the MD5 hash of the string, which is a 128-bit binary array.
        
    2.  Encode the binary array (instead of the 32-bit string) in Base64.
        
    
    The following Python code provides an example on how to calculate the Content-MD5 value:
    
    ```
    >>> import base64,hashlib
    >>> hash = hashlib.md5()
    >>> hash.update("0123456789")   // If you use Python 3, change this line to hash.update(b"0123456789"). 
    >>> base64.b64encode(hash.digest())
    'eB5e********************'
    ```
    
    Call hash.digest() to calculate the 128-bit binary array.
    
    ```
    >>> hash.digest()
    'x\x1e^$]i\xb5f\x97\x9b\x86\xe2\x8d#\xf2\xc7'
    ```
    
-   Incorrect calculation
    
    **Note**
    
    A common incorrect operation is to encode the calculated 32-bit string in Base64 to obtain the Content-MD5 value.
    
    ```
    # Call hash.hexdigest() to obtain a 32-bit plaintext string. 
    >>> hash.hexdigest()
    '781e5e245d69b566979b86e28d23f2c7'
    # The following sample code provides an example of the result of encoding an incorrect MD5 hash in Base64: 
    >>> base64.b64encode(hash.hexdigest())
    'NzgxZTVlMjQ1ZDY5YjU2Njk3OWI4NmUyOGQyM2YyYzc='
    ```
