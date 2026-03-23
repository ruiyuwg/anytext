Use `read-symlink` to retrieve metadata about a symbolic link in OSS, including its ETag, last modified time, and the target object it points to.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:GetObject` permission on the symbolic link. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304)
    

## Command syntax

```
ossutil read-symlink oss://bucketname/objectname [--encoding-type <value>] [--payer <value>]
```

**Parameter**

**Required**

**Description**

**Example**

`bucketname`

Yes

The name of the bucket.

`examplebucket`

`objectname`

Yes

The name of the symbolic link.

`test.jpg`

`--encoding-type`

No

The encoding method for the symbolic link name. Valid value: `url`. If not specified, the name is not encoded.

`url`

`--payer`

No

The party that pays for the request. Set to `requester` when the bucket owner wants the requester to cover traffic and request fees.

`requester`

## Examples

### Query a symbolic link

The following command retrieves metadata for a symbolic link named `test.jpg` in `examplebucket`:

```
ossutil read-symlink oss://examplebucket/test.jpg
```

A successful response includes the ETag, last modified time, and the target object the symbolic link points to:

```
Etag                    : 938F26218CE422CBEEE0B6543A2B2D
Last-Modified           : 2021-04-21 18:00:13 +0800 CST
X-Oss-Symlink-Target    : example.jpg
0.217317(s) elapsed
```

In this output, `X-Oss-Symlink-Target: example.jpg` shows that `test.jpg` points to `example.jpg`.

### Query a non-symlink object

If the target object is not a symbolic link, `NotSymlink` is returned.

Use this to verify whether an object is a symlink before processing it.

## Common options

To access a bucket in a different region, add `-e` to specify the bucket's endpoint. To use credentials from a different Alibaba Cloud account, add `-i` for the AccessKey ID and `-k` for the AccessKey secret.

The following command retrieves metadata for `testobject.png` in `testbucket`, which is in the China (Shanghai) region and belongs to a different account:

```
ossutil read-symlink oss://testbucket/testobject.png -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).

## What's next

-   To create a symbolic link, see [Create symbolic links](/help/en/oss/user-guide/configure-symbolic-links#task-dcg-tgd-5fb).
