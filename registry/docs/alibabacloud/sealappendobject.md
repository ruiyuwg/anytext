Call the SealAppendObject operation to stop appending content to an Appendable Object. After this operation is called, the object becomes non-appendable. This lets you use a lifecycle rule to change the object's storage class to Cold Archive or Deep Cold Archive to reduce storage costs. Before you seal an Appendable Object, you can change its storage class only to Infrequent Access (IA) or Archive Storage.

**Important**

To call the SealAppendObject operation, [submit a ticket](https://smartservice.console.alibabacloud.com/service/list) to request access.

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Description**

SealAppendObject

`oss:SealAppendObject`

Stops appending content to an Appendable Object and changes its state to non-appendable.

## **Relationship with other operations**

**Operation**

**Description**

[HeadObject](/help/en/oss/developer-reference/headobject#reference-bgh-cbw-wdb)

For an object that has been sealed using the SealAppendObject operation, HeadObject returns the x-oss-sealed-time header. Otherwise, this header is not returned.

[GetObject](/help/en/oss/developer-reference/getobject)

For an object that has been sealed using the SealAppendObject operation, GetObject returns the x-oss-sealed-time header. Otherwise, this header is not returned.

[Lifecycle](/help/en/oss/user-guide/overview-54/)

By default, the lifecycle service does not support changing the storage class of an Appendable Object to Cold Archive or Deep Cold Archive. However, for a sealed Appendable Object, you can change its storage class to Cold Archive or Deep Cold Archive.

## **Request syntax**

```
POST /ObjectName?seal&position=Position HTTP/1.1
Host: BucketName.oss.aliyuncs.com
Content-Length: 0
Date: GMT Date
Authorization: SignatureValue
```

## **Request parameters**

**Name**

**Type**

**Required**

**Description**

seal

string

Yes

Used to initiate a SealAppendObject operation.

position

string

Yes

Specifies the expected length of the object when you call the SealAppendObject operation. OSS checks whether this length matches the actual length of the object. If the lengths do not match, the request fails and the PositionNotEqualToLength error is returned.

## Request headers

This operation uses only common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## **Response headers**

**Response header**

**Type**

**Example**

**Description**

**x-oss-sealed-time**

string

Wed, 07 May 2025 23:00:00 GMT

The time in GMT when the SealAppendObject operation was first performed on the object. This timestamp does not change even if the operation is performed again.

## **Examples**

### **Request example**

```
POST /test.jpg?seal&position=344606 HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Date: Wed, 07 May 2025 23:00:00 GMT
Content-Length: 0
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250507/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3****
```

### **Response example**

```
HTTP/1.1 200 OK
x-oss-request-id: 559CC9BDC755F95A6448****
x-oss-object-type: Appendable
x-oss-storage-class: Standard
x-oss-sealed-time: Wed, 07 May 2025 23:00:00 GMT
Date: Wed, 07 May 2025 23:00:00 GMT
Last-Modified: Mon, 07 Apr 2025 07:32:52 GMT
ETag: "fba9dede5f27731c9771645a3986****"
Content-Length: 344606
Content-Type: image/jpg
Connection: keep-alive
Server: AliyunOSS
```

## **Error codes**

**Error code**

**HTTP status code**

**Description**

AppendSealedObjectNotAllowed

409

The SealAppendObject operation is performed on a non-Appendable Object.

PositionNotEqualToLength

409

The value of the position parameter in the request is different from the actual length of the file.
