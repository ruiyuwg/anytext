Prints the content of an object in a bucket to stdout.

**Important**

Use this command for text objects (such as TXT files). Binary objects produce unreadable output.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:GetObject` permission on the target object. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304)
    

## Command syntax

```
ossutil cat oss://bucketname/objectname [--payer <value>] [--version-id <value>]
```

**Parameter**

**Description**

`bucketname`

The bucket name.

`objectname`

The object name.

`--payer`

The request payer. Set to `requester` to charge traffic and request fees to the requester instead of the bucket owner.

`--version-id`

The version ID of the object. Applies only to versioning-enabled or versioning-suspended buckets.

## Examples

**Example 1: View object content (bucket without versioning)**

```
ossutil cat oss://examplebucket/test.txt
```

Output:

```
My Website Home Page.

0.088092(s) elapsed
```

**Example 2: View a specific version of an object**

To view a specific version of an object, pass the version ID with `--version-id`. To list all versions of an object, see [ls](/help/en/oss/developer-reference/ls#concept-303804).

```
ossutil cat oss://examplebucket/exampleobject.txt --version-id CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3****
```

Output:

```
Hello World.

0.044820(s) elapsed
```

**Example 3: View object content across accounts or regions**

To access a bucket in a different region, add `-e` to specify the endpoint. To access a bucket owned by a different Alibaba Cloud account, add `-i` for the AccessKey ID and `-k` for the AccessKey secret.

```
ossutil cat oss://examplebucket1/exampleobject1.txt -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

## Common options

**Option**

**Description**

`-e`

Endpoint of the target region (e.g., `oss-cn-shanghai.aliyuncs.com`)

`-i`

AccessKey ID of the target Alibaba Cloud account

`-k`

AccessKey secret of the target Alibaba Cloud account

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
