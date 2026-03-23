Adds tags to a bucket or modifies the tags of a bucket.

## Usage notes

When you call the PutBucketTags operation, take note of the following items:

-   Only the owner of a bucket and authorized RAM users can configure tags for the bucket. If other users attempt to configure tags for the bucket, 403 Forbidden is returned with the error code AccessDenied.
    
-   You can configure up to 20 tags for a bucket. A tag is a key-value pair.
    
-   When you call PutBucketTags to add a tag to a bucket, the new tag overwrites the existing tag that has the same key.
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

PutBucketTags

oss:PutBucketTagging

Adds tags to or modifies the tags of a bucket.

## Request syntax

```
PUT /?tagging HTTP/1.1
Date: GMT Date
Content-Length: ContentLength
Authorization: SignatureValue
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
<?xml version="1.0" encoding="UTF-8"?>
<Tagging>
  <TagSet>
    <Tag>
      <Key>key1</Key>
      <Value>value1</Value>
    </Tag>
    <Tag>
      <Key>key2</Key>
      <Value>value2</Value>
    </Tag>
  </TagSet>
</Tagging>
```

## Request headers

A PutBucketTags request contains only common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request elements

**Element**

**Type**

**Required**

**Description**

Tagging

Container

Yes

The container used to store TagSet.

Child nodes: TagSet

Parent nodes: none

TagSet

Container

Yes

The container used to store a set of Tags.

Child nodes: Tag

Parent nodes: Tagging

Tag

Container

Yes

The container used to store the tag that you want to add or modify.

Child nodes: Key and Value

Parent nodes: TagSet

Key

STRING

Yes

The key of a tag.

-   A tag key is up to 64 bytes in length.
    
-   A tag key cannot start with `http://`, `https://`, or `Aliyun`.
    
-   A tag key must be UTF-8 encoded.
    
-   The value of the element cannot be empty.
    

Child nodes: none

Parent nodes: Tag

Value

STRING

No

The value of a tag.

-   A tag value is up to 128 bytes in length.
    
-   A tag value must be UTF-8 encoded.
    
-   This parameter can be left empty.
    

Child nodes: none

Parent nodes: Tag

## Response headers

The response to a PutBucketTags request contains only common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

-   Sample request
    
    ```
    PUT /?tagging
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    Date: Thu, 17 Apr 2025 11:49:13 GMT
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
    <Tagging>
      <TagSet>
        <Tag>
          <Key>testa</Key>
          <Value>testv1</Value>
        </Tag>
        <Tag>
          <Key>testb</Key>
          <Value>testv2</Value>
        </Tag>
      </TagSet>
    </Tagging>
    ```
    
-   Sample response
    
    ```
    200 (OK)
    content-length: 0
    server: AliyunOSS
    x-oss-request-id: 5C1B138A109F4E405B2D****
    date: Thu, 20 Dec 2018 11:59:06 GMT
    x-oss-server-time: 148
    connection: keep-alive
    ```
    

## OSS SDKs

You can use Object Storage Service (OSS) SDKs for the following programming languages to call the PutBucketTags operation:

-   [Java](/help/en/oss/developer-reference/bucket-tagging-4#section-pc6-9dz-682)
    
-   [Python V2](/help/en/oss/developer-reference/bucket-labels-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/v2-manage-bucket-tagging#undefined)
    
-   [C++](/help/en/oss/developer-reference/configure-bucket-tagging-1#section-5d1-tmc-9fr)
    
-   [Node.js](/help/en/oss/developer-reference/bucket-tagging-2#section-2g4-lka-aqj)
    
-   [.NET](/help/en/oss/developer-reference/bucket-tagging-1#concept-2482306)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-bucket-tagging)
    

## **ossutil**

For information about the ossutil command that corresponds to the PutBucketTags operation, see [put-bucket-tags](/help/en/oss/developer-reference/put-bucket-tags).
