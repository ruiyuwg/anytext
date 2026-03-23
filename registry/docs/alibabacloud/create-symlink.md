Use the `create-symlink` command to create a symbolic link that points to an object in Object Storage Service (OSS). Symbolic links work like shortcuts — they give you quick access to an object without duplicating it.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:PutObject` permission on the target bucket. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   ossutil 1.6.16 or later. Earlier versions require you to rename the binary based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## Command syntax

```
ossutil create-symlink cloud_url target_object
[--encoding-type <value>]
[--payer <value>]
```

**Parameter/Option**

**Description**

**Example**

`cloud_url`

The full OSS path of the symbolic link to create.

`oss://examplebucket/test.jpg`

`target_object`

The full OSS path of the object the symbolic link points to. The symbolic link and the target object must be in the same bucket.

`oss://examplebucket/exampleobject.jpg`

`--encoding-type`

The encoding method for object names in `cloud_url` and `target_object`. Valid value: `url`. If not specified, names are not encoded.

`url`

`--payer`

The payer for the request. Set to `requester` to have the requester pay traffic and request fees.

`requester`

## Usage notes

-   ossutil does not check whether the target object exists when creating a symbolic link. If the target object exists, the symbolic link points to it. If the target does not exist, the symbolic link points to nothing. To verify the target object exists, run the [ls](/help/en/oss/developer-reference/ls#section-q9u-n4s-3ah) command to list objects in the bucket.
    

**Important**

If the symbolic link name matches an existing symbolic link in the bucket, the existing symbolic link is overwritten.

## Examples

### Create a symbolic link in the root directory

Create a symbolic link named `test.jpg` in the root of `examplebucket`, pointing to `exampleobject.jpg` in the same bucket:

```
ossutil create-symlink oss://examplebucket/test.jpg oss://examplebucket/exampleobject.jpg
```

### Create a symbolic link in a subdirectory

Create a symbolic link named `example.jpg` in the `destfolder/` directory of `examplebucket`, pointing to `test.jpg` in the root of the same bucket. The requester pays all traffic and request fees:

```
ossutil create-symlink oss://examplebucket/destfolder/example.jpg oss://examplebucket/test.jpg --payer requester
```

### Expected output

A successful operation returns the elapsed time:

```
0.106744(s) elapsed
```

### Create a symbolic link across accounts or regions

To access a bucket in a different region or owned by a different Alibaba Cloud account, add the `-e`, `-i`, and `-k` options.

The following command creates a symbolic link named `testobject.png` pointing to `exampleobject.png` in `testbucket`, which is located in the China (Shanghai) region and owned by a different account:

```
ossutil create-symlink oss://testbucket/testobject.png oss://testbucket/exampleobject.png -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

**Option**

**Description**

`-e`

The endpoint of the region where the bucket is located.

`-i`

The AccessKey ID of the account that owns the bucket.

`-k`

The AccessKey secret of the account that owns the bucket.

For all available options, see [Common options](/help/en/oss/developer-reference/view-options).

## What's next

After creating a symbolic link, run the [read-symlink](/help/en/oss/developer-reference/read-symlink#concept-303813) or [stat](/help/en/oss/developer-reference/stat#concept-303806) command to query its details, such as the ETag value and last update time.
