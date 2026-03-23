Queries the download and parsing progress of data tracking logs.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/QueryDataTrackResultDownloadStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/QueryDataTrackResultDownloadStatus)

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

dms:QueryDataTrackResultDownloadStatus

none

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

OrderId

long

Yes

The ID of the ticket. You can call the [ListOrders](/help/en/dms/api-listorders) operation to query the ID of the ticket.

11\*\*\*\*

DownloadKeyId

string

Yes

The ID of the download key, which is used to identify the parsing progress of data tracking logs. You can call the DownloadDataTrackResult operation to query the ID of the key.

e23dd7ec-a19f-4a69-8eb3-8ffd26e6\*\*\*\*

Tid

long

No

The ID of the tenant. You can call the [GetUserActiveTenant](/help/en/dms/api-getuseractivetenant) or [ListUserTenants](/help/en/dms/api-listusertenants) operation to query the ID of the tenant.

1\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response schema.

RequestId

string

The ID of the request.

0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931

Success

boolean

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
-   **false**: The request failed.

true

ErrorMessage

string

The error message returned if the request failed.

UnknownError

ErrorCode

string

The error code returned if the request failed.

UnknownError

StatusResult

object

The information about the download progress.

DownloadStatus

string

The status of the download task. Valid values:

-   **INIT**: The download task is being initialized.
-   **LISTING**: The download task is in a transient intermediate state during the initialization.
-   **DOWNLOADING**: The download task is being processed.
-   **DOWNLOAD\_SUCCESS**: The download task was successfully processed.
-   **DOWNLOAD\_FAIL**: The download task failed.

DOWNLOAD\_SUCCESS

DownloadUrl

string

The URL that is used to download data tracking logs. This parameter is returned only when the value of DownloadStatus is DOWNLOAD\_SUCCESS.

https://idbsaasstore.oss-cn-zhangjiakou.aliyuncs.com/\*\*\*\*\_REDO\_31201\_207.zip?Expires=1682239593&OSSAccessKeyId=\*\*\*\*&Signature=\*\*\*\*

StatusDesc

string

The description of the state.

SUCCESS

TotalCount

long

The total number of entries returned.

69

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931",
  "Success": true,
  "ErrorMessage": "UnknownError",
  "ErrorCode": "UnknownError",
  "StatusResult": {
    "DownloadStatus": "DOWNLOAD_SUCCESS",
    "DownloadUrl": "https://idbsaasstore.oss-cn-zhangjiakou.aliyuncs.com/****_REDO_31201_207.zip?Expires=1682239593&OSSAccessKeyId=****&Signature=****\n",
    "StatusDesc": "SUCCESS",
    "TotalCount": 69
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dms-enterprise/2018-11-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
