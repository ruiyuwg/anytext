Use the `getallpartsize` command to list all parts from incomplete multipart uploads in a bucket, including the size of each part and the total storage consumed.

**Important**

ossutil 1.0 is no longer updated. Migrate to [ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/) and use the [list-multipart-uploads](/help/en/oss/developer-reference/list-multipart-uploads) command instead.

## Prerequisites

Before you run this command, ensure that you have:

-   The `oss:ListParts` and `oss:ListMultipartUploads` permissions on the target bucket. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Usage notes

-   ossutil V1.6.16 and later use `ossutil` as the binary name on all operating systems. Earlier versions require a system-specific binary name. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   For background on multipart uploads, see [Multipart upload](/help/en/oss/user-guide/multipart-upload#concept-wzs-2gb-5db).
    

## Command syntax

```
ossutil getallpartsize oss://<bucket-name>
```

`<bucket-name>` is the name of the bucket to inspect.

## Examples

List all parts from incomplete multipart uploads in `examplebucket`:

```
ossutil getallpartsize oss://examplebucket
```

Output:

```
PartNumber      UploadId                                Size(Byte)      Path
1               F18A92392DFD4B3FA897C267829FE417        52428800        oss://examplebucket/exampleobject.txt
2               F18A92392DFD4B3FA897C267829FE417        52428800        oss://examplebucket/exampleobject.txt
3               F18A92392DFD4B3FA897C267829FE417        52428800        oss://examplebucket/exampleobject.txt
4               F18A92392DFD4B3FA897C267829FE417        52428800        oss://examplebucket/exampleobject.txt
5               F18A92392DFD4B3FA897C267829FE417        52428800        oss://examplebucket/exampleobject.txt
6               F18A92392DFD4B3FA897C267829FE417        52428800        oss://examplebucket/exampleobject.txt

total part count:6     total part size(MB):300.00
0.142115(s) elapsed
```

## Common options

To access a bucket in a different region, use `-e` to specify the endpoint. To access a bucket owned by a different Alibaba Cloud account, use `-i` for the AccessKey ID and `-k` for the AccessKey secret.

For example, to list parts in `testbucket` owned by another account in the China (Hangzhou) region:

```
ossutil getallpartsize oss://testbucket -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For the full list of options, see [Common options](/help/en/oss/developer-reference/view-options).
