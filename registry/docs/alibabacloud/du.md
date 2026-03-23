The `du` command reports the total storage size of all objects in a bucket or directory.

## Syntax

```
ossutil du oss://bucketname[/prefix] [--payer requester] [--all-versions] [--block-size <value>]
```

**Parameter/Option**

**Description**

`bucketname`

The name of the bucket.

`prefix`

A directory path or object name prefix to scope the query.

`--payer`

The request payer. Set to `requester` to charge the requester for traffic and requests instead of the bucket owner.

`--all-versions`

Reports the total size of all object versions. Without this option, only current versions are counted.

`--block-size`

The unit for the reported size. Valid values: `KB`, `MB`, `GB`, `TB`. Without this option, size is reported in bytes. Requires ossutil 1.7.3 or later.

## Prerequisites

Before you begin, ensure that you have the required Resource Access Management (RAM) permissions:

**Scope**

**Required permissions**

Current versions only

`oss:ListObjects`, `oss:ListParts`, `oss:ListMultipartUploads`

All versions

`oss:ListObjectVersions`, `oss:ListParts`, `oss:ListMultipartUploads`

For permission setup, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

> For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, specify the OS-specific binary name. See [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

## Examples

### Query the total size of all versions in a bucket

```
ossutil du oss://examplebucket --all-versions
```

Output:

```
storage class   object count            sum size(byte)
----------------------------------------------------------
Standard        12                       132115210
Archive         1                        814
----------------------------------------------------------
total object count: 13                          total object sum size: 132116024
total part count:   0                           total part sum size:   0

total du size(byte):132116024

0.382978(s) elapsed
```

The bucket contains 13 objects (12 Standard and 1 Archive) with a total size of 132,116,024 bytes.

### Query the total size of current versions in a directory

```
ossutil du oss://examplebucket/dir/ --block-size GB
```

Output:

```
storage class   object count            sum size(byte)
----------------------------------------------------------
Standard        5                       232277
----------------------------------------------------------
total object count: 5                           total object sum size: 232277
total part count:   0                           total part sum size:   0

total du size(GB):0.0002

0.078757(s) elapsed
```

The `dir/` directory contains 5 Standard objects with a total size of 0.0002 GB.

### Query the total size of all versions with a prefix

To query all versions of objects whose names start with `test` and display the result in KB:

```
ossutil du oss://examplebucket/test --all-versions --block-size KB
```

Output:

```
storage class   object count            sum size(byte)
----------------------------------------------------------
Standard        4                       439425
----------------------------------------------------------
total object count: 4                           total object sum size: 439425
total part count:   0                           total part sum size:   0

total du size(KB):448.1455

0.126340(s) elapsed
```

4 Standard objects match the `test` prefix, with a total size of 448.1455 KB.

### Query a bucket in another region or account

Use `-e` to specify an endpoint when the bucket is in a different region, and `-i`/`-k` to supply credentials for a different Alibaba Cloud account.

```
ossutil du oss://testbucket --all-versions -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For all common options, see [Common options](/help/en/oss/developer-reference/view-options).
