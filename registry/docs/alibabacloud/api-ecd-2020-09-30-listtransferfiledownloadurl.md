Retrieves the download URLs for transferred files.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ecd/2020-09-30/ListTransferFileDownloadUrl)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ecd/2020-09-30/ListTransferFileDownloadUrl)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

TaskId

string

No

The task ID.

trt-hffhi4nmqoi4\*\*\*\*

FileIds

array

No

The list of file IDs to query.

string

No

The ID of the file to query.

trf-i4pz8emx2k2fr\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response elements.

RequestId

string

The request ID.

F1F01499-8F3D-5657-91AD-48177EB\*\*\*\*

Urls

array<object>

The list of download URL information for the files.

object

Information about a file download URL.

FileId

string

The file ID.

trf-i4pz8emx2k2fr\*\*\*\*

Url

string

The download URL of the file.

http://xxsy-transfer.oss-cn-beijing.aliyuncs.com/xxxx

Status

string

The status of the file.

**Valid values:**

-   UPLOADING :
    
    The file is being uploaded.
    
-   DELETING :
    
    The file is being deleted.
    
-   DELETED :
    
    The file is deleted.
    
-   UPLOADED :
    
    The file is uploaded.
    

DELETED

FileName

string

The name of the file.

document.txt

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F1F01499-8F3D-5657-91AD-48177EB****",
  "Urls": [
    {
      "FileId": "trf-i4pz8emx2k2fr****",
      "Url": "http://xxsy-transfer.oss-cn-beijing.aliyuncs.com/xxxx",
      "Status": "DELETED",
      "FileName": "document.txt"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ecd/2020-09-30/ListTransferFileDownloadUrl#workbench-doc-change-demo) for a complete list.
