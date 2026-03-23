Use the `object-tagging` command to add, modify, query, or delete tags on OSS objects. Tags let you classify objects and apply lifecycle rules or storage class transitions to objects that share the same tag.

## Usage notes

-   To add or modify tags, you need the `oss:PutObjectTagging` permission. To query tags, you need `oss:GetObjectTagging`. To delete tags, you need `oss:DeleteObjectTagging`. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   For ossutil 1.6.16 and later, use `ossutil` directly as the binary name — no OS-specific renaming needed. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   For background on object tagging, see [Tag objects](/help/en/oss/user-guide/object-tagging-8#concept-zxf-jpy-pgb).
    

## Syntax

```
ossutil object-tagging oss://bucketname[/prefix] [key#value ...]
    --method <put|get|delete>
    [--encoding-type url]
    [-r, --recursive]
    [--payer requester]
    [--version-id <value>]
```

## Parameters

**Parameter/Option**

**Required**

**Description**

`bucketname`

Yes

The name of the bucket.

`prefix`

No

A prefix to match object names, such as a directory path or filename prefix.

`key#value`

Conditional

A tag expressed as a key-value pair using `#` as the separator. For example: `env#prod`. Separate multiple tags with spaces: `env#prod tier#hot`. Required when `--method` is `put`.

`--method`

Yes

The operation to perform. Valid values: `put` (add or modify), `get` (query), `delete` (remove).

`--encoding-type`

No

Encoding method for the prefix. Valid value: `url`. If omitted, the prefix is not encoded.

`-r, --recursive`

No

Apply the operation to all objects matching the prefix, not just a single object.

`--version-id`

No

The version ID of the object. Applies only to versioning-enabled or versioning-suspended buckets.

`--payer`

No

Set to `requester` to charge the requester (instead of the bucket owner) for request and traffic fees.

### Tag key and value constraints

**Tag key:**

-   Up to 128 characters, case-sensitive.
    
-   Allowed characters: letters, digits, spaces, and `+=._:/`.
    
-   Each object supports up to 10 tags. All tag keys on the same object must be unique.
    

**Tag value:**

-   Up to 256 characters, case-sensitive.
    
-   Allowed characters: letters, digits, spaces, and `+=._:/`.
    

## Add or modify object tags

Only the bucket owner and RAM users with the `oss:PutObjectTagging` permission can add or modify tags.

If the specified tag key does not exist on the object, the tag is added. If the key already exists, the existing tag is overwritten.

**Add a tag to a single object**

```
ossutil object-tagging --method put oss://examplebucket/exampleobject.txt tagkey#tagvalue
```

**Add multiple tags to a single object**

```
ossutil object-tagging --method put oss://examplebucket/exampleobject.txt tagkey1#tagvalue1 tagkey2#tagvalue2
```

**Add tags to all objects with a given prefix**

```
ossutil object-tagging --method put oss://examplebucket/test -r tagkey3#tagvalue3 tagkey4#tagvalue4 tagkey5#tagvalue5
```

**Add a tag to a specific version of an object**

To list all versions of an object, use the [ls command](/help/en/oss/developer-reference/ls#concept-303804).

```
ossutil object-tagging --method put oss://examplebucket/exampleobject.txt tagkey6#tagvalue6 --version-id CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3****
```

On success, the following output is returned to indicate the time used to configure tagging:

```
0.106852(s) elapsed
```

## Query object tags

Only the bucket owner and RAM users with the `oss:GetObjectTagging` permission can query tags.

**Query tags on a single object**

```
ossutil object-tagging --method get oss://examplebucket/exampleobject.txt
```

Expected output:

```
object index   tag index      tag key   tag value       object
---------------------------------------------------------------------------
1              0              "tagkey"  "tagvalue"      oss://examplebucket/exampleobject.txt

0.068156(s) elapsed
```

**Query tags on all objects with a given prefix**

```
ossutil object-tagging --method get oss://examplebucket/test -r
```

Expected output:

```
object index   tag index      tag key   tag value       object
---------------------------------------------------------------------------
1              0              "tagkey3" "tagvalue3"     oss://examplebucket/test
1              1              "tagkey4" "tagvalue4"     oss://examplebucket/test
1              2              "tagkey5" "tagvalue5"     oss://examplebucket/test

0.093040(s) elapsed
```

## Delete object tags

Only the bucket owner and RAM users with the `oss:DeleteObjectTagging` permission can delete tags.

**Delete tags from a single object**

```
ossutil object-tagging --method delete oss://examplebucket/exampleobject.txt
```

**Delete tags from all objects with a given prefix**

```
ossutil object-tagging --method delete oss://examplebucket/test -r
```

On success, the following output is returned to indicate the time used to delete tags:

```
0.148970(s) elapsed
```

## Common options

To target a bucket in a different region, add `-e` with the bucket's endpoint. To use a different Alibaba Cloud account, add `-i` with the AccessKey ID and `-k` with the AccessKey secret.

The following example adds a tag to an object in `testbucket`, which is in the China (Shanghai) region and owned by a different account:

```
ossutil object-tagging --method put oss://testbucket/exampletest.png tagkey7#tagvalue7 -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For all available options, see [Common options](/help/en/oss/developer-reference/view-options).
