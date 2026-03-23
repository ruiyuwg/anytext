List the parts of an incomplete multipart upload for a specific object.

Before running `listpart`, get the upload ID from the `ls -m` command or from the response when you initiated the multipart upload task.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:ListParts` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The upload ID for the multipart upload task. Run `ossutil ls -m oss://bucketname/objectname` to find the upload ID for an incomplete upload. For more information, see [ls](/help/en/oss/developer-reference/ls#concept-303804)
    

## Usage notes

-   ossutil 1.6.16 and later: use `ossutil` directly as the binary name on any operating system.
    
-   ossutil earlier than 1.6.16: update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   For more information about multipart uploads, see [Multipart upload](/help/en/oss/user-guide/multipart-upload#concept-wzs-2gb-5db).
    

## Command syntax

```
ossutil listpart oss://bucketname/objectname uploadid
```

**Parameter**

**Description**

`bucketname`

Name of the bucket where the parts are stored.

`objectname`

Name of the object with an incomplete multipart upload.

`uploadid`

Upload ID that identifies the multipart upload task. The upload ID is returned when the multipart upload is initiated. You can use the upload ID to perform multipart upload operations, such as canceling and querying the multipart upload task.

## Examples

### List parts of an incomplete multipart upload

List the uploaded parts for `exampleobject.txt` in `examplebucket`:

```
ossutil listpart oss://examplebucket/exampleobject.txt 89A46B10E94A4ED5A7E9869F9409****
```

Expected output:

```
PartNumber      Etag                                    Size(Byte)      LastModifyTime
2               "BD106FED29B349A635BE289746DB****"      4443891         2021-07-21 09:01:33
3               "25DA5C7BB933DBD732B6C11111EB****"      4443891         2021-07-21 09:01:31
4               "AFDA91A8D4F476BAC972306873A3****"      4443891         2021-07-21 09:01:31
11              "2FFEE8D5049AB059D7EC801927BB****"      4443891         2021-07-21 09:01:32

total part count:4      total part size(MB):16.95


0.101978(s) elapsed
```

The output includes the following fields:

**Field**

**Description**

`PartNumber`

Part number assigned when the part was uploaded.

`Etag`

ETag of the part.

`Size(Byte)`

Size of the part in bytes.

`LastModifyTime`

Time when the part was last uploaded.

### List parts across accounts or regions

To access a bucket in a different region or owned by another Alibaba Cloud account, add the `-e`, `-i`, and `-k` options:

```
ossutil listpart oss://testbucket/testobject.txt 46C56B10E94A4ED6G8U9869F9409**** -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

This command lists parts for `testobject.txt` in `testbucket`, located in the China (Hangzhou) region and owned by a different Alibaba Cloud account.

**Option**

**Description**

`-e`

Endpoint of the region where the bucket is located.

`-i`

AccessKey ID of the target Alibaba Cloud account.

`-k`

AccessKey secret of the target Alibaba Cloud account.

For all available options, see [Common options](/help/en/oss/developer-reference/view-options).
