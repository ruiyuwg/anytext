Obtains download links of files such as job reports.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/GetTempFileDownloadLink)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/GetTempFileDownloadLink)

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

hbr:GetTempFileDownloadLink

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

TempFileKey

string

Yes

The key that is used to download a file.

temp/1797733170015112/report/r-000jdzknbp39cnf9hs99/r-000jdzknbp39cnf9hs99-total.csv

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the request is successful.

200

Url

string

The download URL of the file.

https://a-hbr-temp-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/job-0007yg2i0m6705wdhgb6\_0.csv?Expires=1649406469&OSSAccessKeyId=LTAI\*\*\*\*\*\*\*\*\*\*\*\*&Signature=26%2BgjegCrRmMDCpS5jzyG4ivKU8%3D

Message

string

The message that is returned. If the request is successful, a value of successful is returned. If the request fails, an error message is returned.

successful

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request is successful.

-   true: The request is successful.
-   false: The request fails.

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Url": "https://a-hbr-temp-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/job-0007yg2i0m6705wdhgb6_0.csv?Expires=1649406469&OSSAccessKeyId=LTAI************&Signature=26%2BgjegCrRmMDCpS5jzyG4ivKU8%3D",
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
