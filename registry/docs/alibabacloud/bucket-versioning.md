Run the `bucket-versioning` command to enable, suspend, or query versioning on an OSS bucket. With versioning enabled, objects that are overwritten or deleted are saved as previous versions, letting you recover from accidental data loss.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:PutBucketVersioning` permission to configure versioning
    
-   The `oss:GetBucketVersioning` permission to query versioning status
    
-   ossutil 1.6.16 or later (earlier versions require an OS-specific binary name)
    

For permission setup, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip). For an overview of versioning, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

## Enable versioning

```
ossutil bucket-versioning --method put oss://examplebucket enabled
```

**Command syntax:**

```
ossutil bucket-versioning --method put oss://bucketname versioning
```

**Parameter**

**Description**

`bucketname`

Name of the bucket

`versioning`

Versioning status. Valid values: `enabled`, `suspended`

When you upload an object to a versioning-enabled bucket, OSS generates a random string as a globally unique version ID for that object.

**Important**

Once versioning is enabled, it cannot be reverted to the unversioned state. You can suspend versioning, but not disable it completely.

Expected output:

```
0.261209(s) elapsed
```

For details on how objects behave in a versioning-enabled bucket, see [Manage objects in a versioning-enabled bucket](/help/en/oss/user-guide/manage-objects-in-a-versioning-enabled-bucket#concept-xw4-bxs-zgb).

## Suspend versioning

```
ossutil bucket-versioning --method put oss://examplebucket suspended
```

When you upload an object to a versioning-suspended bucket, OSS assigns a version ID of `null` to the uploaded object.

Expected output:

```
0.261209(s) elapsed
```

For details on how objects behave in a versioning-suspended bucket, see [Manage objects in a versioning-suspended bucket](/help/en/oss/user-guide/manage-objects-in-a-versioning-suspended-bucket#concept-anp-wvq-dgb).

## Query the versioning status

```
ossutil bucket-versioning --method get oss://examplebucket
```

Sample outputs:

**Status**

**Output**

Enabled

`bucket versioning status:Enabled`

Suspended

`bucket versioning status:Suspended`

Unversioned (default)

`bucket versioning status:Null`

Full sample outputs including timing:

Enabled:

```
bucket versioning status:Enabled

0.218001(s) elapsed
```

Suspended:

```
bucket versioning status:Suspended

0.168791(s) elapsed
```

Unversioned:

```
bucket versioning status:Null

0.158691(s) elapsed
```

## Cross-account and cross-region usage

To manage a bucket in a different region or under a different Alibaba Cloud account, add the following options:

**Option**

**Description**

`-e`

Endpoint of the region where the bucket is located

`-i`

AccessKey ID of the target account

`-k`

AccessKey secret of the target account

Example — enable versioning on `examplebucket` in China (Hangzhou) under a different account:

```
ossutil bucket-versioning --method put oss://examplebucket enabled -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For all available options, see [Common options](/help/en/oss/developer-reference/view-options).

## What's next

-   **Upload objects**: Versioning-enabled buckets assign a globally unique version ID to each uploaded object. See [Upload objects](/help/en/oss/developer-reference/upload-objects-6#concept-1937458).
    
-   **Download a specific version**: Specify a version ID to download a particular version of an object. See [Download objects](/help/en/oss/developer-reference/download-objects-5#concept-1937459).
    
-   **Restore a previous version**: Copy a previous version to make it the current version. See [Copy objects](/help/en/oss/developer-reference/copy-objects-4#concept-1937460).
