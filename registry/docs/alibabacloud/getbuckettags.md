You can call this operation to query the tags configured for a bucket.

## Request syntax

```
GET /? tagging
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## **Notes**

The permission of `oss:GetBucketTagging` is required to get the tagging information of the bucket by calling GetBucketTags operation. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Response elements

**Element**

**Type**

**Description**

Tagging

Container

The container that stores the returned tags of the bucket.

Parent node: None

**Note**

If no tags are configured for the bucket, an XML message body is returned in which the Tagging element is empty.

TagSet

Container

The container that stores the returned tags of the bucket.

Parent node: None

Tag

Container

The container that stores a returned tag of the bucket.

Parent node: TagSet

Key

String

The key to a tag.

Parent node: Tag

Value

String

The value of a tag.

Parent node: Tag

## Examples

-   Sample request
    
    ```
    GET /? tagging
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    Date: Tue, 20 Dec 2018 13:09:13 GMT
    Authorization: OSS qn6q**************:77Dv****************
    ```
    
-   Sample response
    
    ```
    200 (OK)
    content-length: 237
    server: AliyunOSS
    x-oss-request-id: 5C1B2D24B90AD5490CFE368E
    date: Thu, 20 Dec 2018 13:12:21 GMT
    content-type: application/xml
    <? xml version="1.0" encoding="UTF-8"? >
    <Tagging>
      <TagSet>
        <Tag>
          <Key>testa</Key>
          <Value>value1-test</Value>
        </Tag>
        <Tag>
          <Key>testb</Key>
          <Value>value2-test</Value>
        </Tag>
      </TagSet>
    </Tagging>
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to GetBucketTags operation;

-   [Java](/help/en/oss/developer-reference/bucket-tagging-4#section-asr-38j-dqu)
    
-   [Python](/help/en/oss/developer-reference/bucket-tagging-3#section-asr-38j-dqu)
    
-   [Go V2](/help/en/oss/developer-reference/v2-manage-bucket-tagging#undefined)
    
-   [C++](/help/en/oss/developer-reference/configure-bucket-tagging-1#concept-2342190)
    
-   [Node.js](/help/en/oss/developer-reference/bucket-tagging-2#section-3d6-80k-crf)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetBucketTags operation, see [get-bucket-tags](/help/en/oss/developer-reference/get-bucket-tags).

## Error codes

**Error code**

**HTTP status code**

**Description**

NoSuchBucket

404

The error message returned because the specified bucket does not exist.

AccessDenied

403

The error message returned because you have no permissions to query the tags configured for the bucket. Only the bucket owner can query the tags configured for a bucket.
