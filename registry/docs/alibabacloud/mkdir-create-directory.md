Use the `mkdir` command to create a directory in an Object Storage Service (OSS) bucket.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:GetObject` and `oss:PutObject` permissions on the bucket. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Syntax

```
ossutil mkdir oss://<bucket>/<dir_name> [flags]
```

Brackets (`[]`) indicate optional parameters.

## Parameters

**Parameter**

**Type**

**Description**

`bucket`

string

The name of the bucket.

`dir_name`

string

The name of the directory to create.

`--encoding-type`

string

The encoding of the directory name. Valid value: `url`. If not specified, the directory name is not encoded.

`--request-payer`

string

The payer of the traffic and request fees. Set to `requester` when pay-by-requester is enabled on the bucket.

For all available flags, see [Command-line options](/help/en/oss/command-line-options).

## Examples

### Create a single-level directory

```
ossutil mkdir oss://examplebucket/dir
```

### Create a multi-level directory

```
ossutil mkdir oss://examplebucket/dir1/dir2
```
