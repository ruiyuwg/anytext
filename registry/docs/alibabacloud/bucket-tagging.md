Use the `bucket-tagging` command to add, modify, query, or delete tags on an OSS bucket. Bucket tags are key-value pairs that help you organize buckets—for example, to filter buckets by project, environment, or team, and to apply access control policies or allocate costs selectively.

## Prerequisites

Before you begin, ensure that you have:

-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, rename the binary based on your operating system. See [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   The required RAM permissions: To grant these permissions to a RAM user, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
    -   Add or modify tags: `oss:PutBucketTagging`
        
    -   Query tags: `oss:GetBucketTagging`
        
    -   Delete tags: `oss:DeleteBucketTagging`
        

For background on bucket tagging concepts, see [Manage bucket tags](/help/en/oss/user-guide/manage-bucket-tags#concept-1925905).

## Add or modify tags

Only the bucket owner and RAM users with `PutBucketTags` permission can add or modify tags. Other users receive `403 Forbidden` with error code `AccessDenied`.

**Syntax**

```
ossutil bucket-tagging --method put oss://<bucket-name> <key>#<value> [<key>#<value> ...]
```

**Parameters**

**Parameter**

**Description**

`<bucket-name>`

The name of the bucket.

`<key>#<value>`

A tag key-value pair, separated by `#`. Both key and value must be UTF-8 encoded. Repeat to add multiple tags.

**Tag key constraints:**

-   Max length: 64 characters
    
-   Cannot be blank
    
-   Cannot start with `http://`, `https://`, or `Aliyun`
    

**Tag value constraints:**

-   Max length: 128 characters
    
-   Can be blank
    

> If the specified tag does not exist, it is added to the bucket. If the specified tag already exists, the existing tag is overwritten.

**Example**

Add two tags to `examplebucket`:

```
ossutil bucket-tagging --method put oss://examplebucket tag1#test1 tag2#test2
```

Sample output:

```
0.300600(s) elapsed
```

## Query tags

**Syntax**

```
ossutil bucket-tagging --method get oss://<bucket-name>
```

**Example**

```
ossutil bucket-tagging --method get oss://examplebucket
```

Sample output:

```
index     tag key       tag value
---------------------------------------------------
0         "tag1"        "test1"
1         "tag2"        "test2"

0.283359(s) elapsed
```

The output lists all tags on the bucket. Each row shows the tag's sequential index (starting at 0), key, and value.

## Delete tags

**Syntax**

```
ossutil bucket-tagging --method delete oss://<bucket-name>
```

> ossutil deletes all tags on the bucket. To delete specific tags only, use the [DeleteBucketTags](/help/en/oss/developer-reference/deletebuckettags#concept-261821) API operation.

**Example**

```
ossutil bucket-tagging --method delete oss://examplebucket
```

Sample output:

```
0.530750(s) elapsed
```

## Cross-account and cross-region usage

To operate on a bucket in a different region or owned by a different Alibaba Cloud account, add the following options:

**Option**

**Description**

`-e <endpoint>`

Endpoint of the region where the bucket is located

`-i <AccessKey ID>`

AccessKey ID of the target account

`-k <AccessKey secret>`

AccessKey secret of the target account

**Example**

Add tags to `examplebucket` in the China (Hangzhou) region, owned by a different account:

```
ossutil bucket-tagging --method put oss://examplebucket tag1#test1 -e oss-cn-hangzhou.aliyuncs.com -i <yourAccessKeyID> -k <yourAccessKeySecret>
```

For all available options, see [Common options](/help/en/oss/developer-reference/view-options).
