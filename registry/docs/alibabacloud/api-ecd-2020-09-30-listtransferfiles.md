Queries the file information of a file transmission task.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ListTransferFiles)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ListTransferFiles)

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

ecd:ListTransferFiles

get

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

TaskId

string

No

The ID of the transmission task.

trt-03tdwg4tcuwdzv\*\*\*\*

MaxResults

integer

No

The number of entries to return on each page.

Maximum value: 100.

Default value: 20.

20

NextToken

string

No

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

RequestId

string

The ID of the request.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

NextToken

string

The returned value of `NextToken` is a pagination token, which can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResults

integer

The number of entries to return on each page.

Maximum value: 100.

Default value: 20.

20

Files

array<object>

The files.

File

object

The information about the file.

IconUrl

string

The URL of the file icon.

**Note**

-   For image file types (.png, .jpg, .jpeg, .gif, .webp, and .svg), the URL of the specific image is returned.
    
-   For other file types, the URL of the default image is returned.
    

https://app-center-icon-pre-hangzhou.oss-cn-hangzhou.aliyuncs.com/tenant\*\*\*\*

Status

string

The file status.

Valid values:

-   DELETING
-   DELETED
-   UPLOADED

DELETED

Type

string

The file type.

txt

Size

string

The file size.

10853079

OssFileName

string

The name of the object stored in OSS.

**Note**

-   A value is returned for this parameter only when the object is stored in a custom OSS bucket.

Id

string

The file ID.

trf-a213msf\*\*\*\*

Name

string

The file name.

OssFilePath

string

The path of the object in the OSS bucket.

**Note**

-   A value is returned for this parameter only when the object is stored in a custom OSS bucket.

transfer/1244234/\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "MaxResults": 20,
  "Files": [
    {
      "IconUrl": "https://app-center-icon-pre-hangzhou.oss-cn-hangzhou.aliyuncs.com/tenant****",
      "Status": "DELETED",
      "Type": "txt",
      "Size": 10853079,
      "OssFileName": "",
      "Id": "trf-a213msf****",
      "Name": "",
      "OssFilePath": "transfer/1244234/****"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
