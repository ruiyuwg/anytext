This topic describes common HTTP request and response headers.

## Common request headers

In Object Storage Service (OSS), common HTTP request headers are used for RESTful APIs. These request headers can be used in all OSS requests. The following table describes the request headers.

**Header**

**Type**

**Example**

**Description**

Authorization

String

OSS4-HMAC-SHA256 Credential=\*\*\*\*

The authentication information that you want to use to verify the validity of the non-anonymous request. For more information about how to calculate the Authorization header, see [(Recommended) Include a V4 signature in the Authorization header](/help/en/oss/developer-reference/recommend-to-use-signature-version-4).

By default, this header is left empty.

Content-Length

String

556

The content length of an HTTP request that is defined in RFC 2616. For more information, visit [RFC 2616](https://www.ietf.org/rfc/rfc2616.txt).

By default, this header is left empty.

Content-Type

String

application/xml

The content type of an HTTP request that is defined in RFC 2616. For more information, visit [RFC 2616](https://www.ietf.org/rfc/rfc2616.txt).

By default, this header is left empty.

Date

String

Sun, 05 Sep 2021 23:00:00 GMT

The time when the request was created. The time must be the GMT time specified in HTTP 1.1.

By default, this header is left empty.

Host

String

oss-example.oss-cn-hangzhou.aliyuncs.com

The domain name. The format is `BucketName.Endpoint`. Example: `oss-example.oss-cn-hangzhou.aliyuncs.com`.

By default, this header is left empty.

x-oss-security-token

String

CAISowJ1q6Ft5B2yfSjIr5feHsPhtYh3+pONd2uCglI3dvxVt7DB1Tz2IHxMdHJsCeAcs/Q0lGFR5/sflqJIRoReREvCUcZr8sy2SqEGos2T1fau5Jko1be0ewHKeQKZsebWZ+LmNpy/Ht6md1HDkAJq3LL+bk/Mdle5MJqP+/kFC9MMRVuAcCZhDtVbLRcYgq18D3bKMuu3ORPHm3fZCFES2jBxkmRi86+ysIP+phPVlw/90fRH5dazcJW0Zsx0OJo6Wcq+3+FqM6DQlTNM6hwNtoUO1fYUommb54nDXwQIvUjfbtC5qIM/cFVLAYEhALNBofTGkvl1h/fejYyfyWwWYbkFCHiPFNr9kJCUSbr4a4sjF6zyPnPWycyCLYXleLzhxPWd/2kagAF6qLNY5paXF18NyRP0PISqxlWBuSQldMS3avlblTFB7apY8CUiAQcSY3uDYUhuxU+KFBxpGaq8c1SU5ARo+1JBA5nXhFlY2nbDnWONxa0mvNvE3XJ0FZJnDS7WBHyOMjC8nmw2GfaQ4bxQ0D2+20yrDNevWSSqnwh0qXMI3zY5\*\*\*\*

This header is required only when you use temporary access credentials to access OSS resources. Otherwise, you can leave this header empty. For more information about how to obtain a security token, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#main-107864).

## Common response headers

In OSS, common HTTP response headers are used for RESTful APIs. These response headers can be used in all the OSS requests. The following table describes the response headers.

**Header**

**Type**

**Example**

**Description**

Content-Length

String

556

The content length of an HTTP request that is defined in RFC 2616. For more information, visit [RFC 2616](https://www.ietf.org/rfc/rfc2616.txt).

By default, this header is left empty.

Connection

Enumeration

keep-alive

The connection status between the client and the OSS server.

Valid values: keep-alive and close.

By default, this header is left empty.

Date

String

Sun, 05 Sep 2021 23:00:00 GMT

The time when the request was created. The time must be the GMT time specified in HTTP 1.1.

By default, this header is left empty.

ETag

String

5B3C1A2E053D763E1B002CC607C5A0FE1\*\*\*\*

The entity tag (ETag) that is created to identify the content of the object when the object is created. If an object is created by using a PutObject request, the ETag of the object is the MD5 hash of the object content. If an object is created by using other methods, the ETag is a unique value generated based on a specific algorithm. The ETag of an object can be used to check whether the object content is modified.

By default, this header is left empty.

Server

String

AliyunOSS

The server that generates a response.

Default value: AliyunOSS.

x-oss-request-id

String

534B371674E88A4D8906\*\*\*\*

The UUID used to identify the request. If an issue occurs, contact technical support and provide the request ID to identify and resolve the issue. For more information about how to obtain a request ID, see [Obtain request IDs](/help/en/oss/user-guide/obtain-request-ids#concept-2087584).

By default, this header is left empty.
