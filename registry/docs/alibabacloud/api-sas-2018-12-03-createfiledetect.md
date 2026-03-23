Pushes a file to the cloud for detection.

## Operation description

You can call this operation to push a file to the cloud for detection. Before you call this operation, make sure that the file is uploaded. You can call the CreateFileDetectUploadUrl operation to upload the file.

The HashKey parameter is included in all API operations that are related to the file detection feature. The parameter specifies the unique identifier of a file. Only MD5 hash values are supported. Before you call this operation, calculate the MD5 hash value of the file.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sas/2018-12-03/CreateFileDetect)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sas/2018-12-03/CreateFileDetect)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

yundun-sas:CreateFileDetect

create

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SourceIp

string

No

The source IP address of the request.

115.213.XX.XX

Type

integer

Yes

The type of the file. Valid values:

-   **0**: unknown files
-   **1**: binary files
-   **2**: webshell files
-   **4**: script files

**Note** If you do not know the type of the file, set this parameter to 0.

0

HashKey

string

Yes

The identifier of the file. Only MD5 hash values are supported.

0a212417e65c26ff133cfff28f6c\*\*\*\*

OssKey

string

No

The key of the file that is stored in the Object Storage Service (OSS) bucket. You can call the [CreateFileDetectUploadUrl](/help/en/security-center/developer-reference/api-sas-2018-12-03-createfiledetectuploadurl) operation to query the keys of files.

1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8\*\*\*\*

DownloadUrl

string

No

The URL that is used to download the file. You can specify this parameter to trigger file detection without the need to upload the file in advance.

https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx

Decompress

boolean

No

Whether to decompress or not. Valid values:

-   true: To decompress.
-   false: Not to decompress.

false

DecompressMaxLayer

integer

No

The maximum level of decompression when dealing with nested compressed files with multiple levels. The minimum value is 1, and the maximum value is 5. If the decompression level exceeds the maximum, the decompression operation will be terminated, but the detection of decompressed files will not be affected.

1

DecompressMaxFileCount

integer

No

The maximum number of files for decompression. The minimum value is 1, and the maximum value is 1000. If the decompression level exceeds the maximum, the decompression operation will be terminated, but the detection of decompressed files will not be affected.

100

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request, which is used to locate and troubleshoot issues.

7E0618A9-D5EF-4220-9471-C42B5E92719F

HashKey

string

The identifier of the file.

0a212417e65c26ff133cfff28f6c\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7E0618A9-D5EF-4220-9471-C42B5E92719F",
  "HashKey": "0a212417e65c26ff133cfff28f6c****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RequestTooFrequently

Request too frequently, please try again later

\-

400

GetFileError

Get file error, please check input params and file size, and make sure upload file success.

\-

400

InvalidDownloadUrl

Invalid file download URL.

\-

400

FileSizeOverLimit

File size over limit.

\-

403

NoPermission

caller has no permission

You are not authorized to do this operation.

500

ServerError

ServerError

\-

500

SystemBusy

System busy, please try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sas/2018-12-03/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-16

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/CreateFileDetect?updateTime=2024-04-16#workbench-doc-change-demo)

2023-05-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/CreateFileDetect?updateTime=2023-05-11#workbench-doc-change-demo)

2023-05-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/CreateFileDetect?updateTime=2023-05-11#workbench-doc-change-demo)
