Generates the parameters and signature required for a file upload URL.

## Operation description

1.  You can directly upload a file to Object Storage Service (OSS) by using a form based on the returned value of this operation.
2.  For more information about how to upload a file to OSS by using a form, see OSS documentation.
3.  The system periodically deletes files that are uploaded to OSS.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateTempFileUploadUrl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateTempFileUploadUrl)

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

hbr:CreateTempFileUploadUrl

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

FileName

string

Yes

The name of the file to be uploaded.

file-list.txt

## Response parameters

Parameter

Type

Description

Example

object

Endpoint

string

The endpoint that is used to upload the file to OSS.

oss-cn-shenzhen.aliyuncs.com

RequestId

string

The ID of the request.

F4EEB401-DD21-588D-AE3B-1E835C7655E1

ExpireTime

long

The expiration time of the signature that is used to upload the file to OSS. This value is a UNIX timestamp. Unit: seconds.

1654326678

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

Code

string

The HTTP status code. The status code 200 indicates that the call is successful.

200

TempFileKey

string

The key that is used to upload the file to OSS.

temp/1440155109798732/upload/2022-07-29/49bed34c-b430-4e7e-89b1-4be2b734f95c/iaclone.diff

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

BucketName

string

The name of the OSS bucket to which the file is uploaded.

hbr-temp-bucket

OssAccessKeyId

string

The AccessKey ID that is used to upload the file to OSS.

LTAI\*\*\*\*Up

Policy

string

The policy that is used to upload the file to OSS.

eyJleH\*\*\*\*V19

Signature

string

The signature that is used to upload the file to OSS.

RmhI\*\*\*\*0A=

## Examples

Sample success responses

`JSON`format

```
{
  "Endpoint": "oss-cn-shenzhen.aliyuncs.com",
  "RequestId": "F4EEB401-DD21-588D-AE3B-1E835C7655E1",
  "ExpireTime": 1654326678,
  "Success": true,
  "Code": 200,
  "TempFileKey": "temp/1440155109798732/upload/2022-07-29/49bed34c-b430-4e7e-89b1-4be2b734f95c/iaclone.diff",
  "Message": "successful",
  "BucketName": "hbr-temp-bucket",
  "OssAccessKeyId": "LTAI****Up",
  "Policy": "eyJleH****V19",
  "Signature": "RmhI****0A="
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
