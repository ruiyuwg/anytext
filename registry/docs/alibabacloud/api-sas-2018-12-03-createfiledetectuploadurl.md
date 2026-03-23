Queries the parameters that are required to upload a file for detection.

## Operation description

You can call this operation to query the parameters that are required to upload a file for detection. If the value of the response parameter FileExist is true, the file that you want to upload for detection already exists in the cloud. In this case, you can directly push the file for detection. If the value of the response parameter FileExist is false, you must use the form upload method to upload the file to the specified Object Storage Service (OSS) bucket based on the response parameters of this operation.

The form upload method is provided by OSS. For more information, see [Form upload](/help/en/oss/developer-reference/form-upload-1).

The HashKey parameter is included in all API operations that are related to the file detection feature. The parameter specifies the unique identifier of a file. Only MD5 hash values are supported. Before you call this operation, calculate the MD5 hash value of the file.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sas/2018-12-03/CreateFileDetectUploadUrl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sas/2018-12-03/CreateFileDetectUploadUrl)

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

yundun-sas:CreateFileDetectUploadUrl

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

HashKeyList

array

No

The identifiers of files. Only MD5 hash values are supported.

**Note** You must specify at least one of the **HashKeyList** and **HashKeyContextList** parameters.

string

No

The identifier of the file. Only MD5 hash values are supported.

0a212417e65c26ff133cfff28f6c\*\*\*\*

Type

integer

Yes

The type of the file. Valid values:

-   **0**: unknown file
-   **1**: binary file
-   **2**: webshell file
-   **4**: script file

**Note** If you do not know the type of the file, set this parameter to **0**.

0

HashKeyContextList

array<object>

No

The hash values of files.

**Note** You must specify at least one of the **HashKeyList** and **HashKeyContextList** parameters.

object

No

HashKey

string

No

The hash value of the file.

30319dd5cee8f894766e479cac170da0

FileSize

integer

No

The size of the file. Unit: bytes.

2698557

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request, which is used to locate and troubleshoot issues.

09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F

UploadUrlList

array<object>

An array consisting of the parameters that are required to upload a file.

UploadUrList

object

PublicUrl

string

The public endpoint of the URL to which the file is uploaded.

http://example.com

InternalUrl

string

The internal endpoint of the URL to which the file is uploaded.

http://example.com

Expire

string

The timestamp when the values of the parameters expire. Unit: milliseconds.

1658562101370

Context

object

The signature information.

AccessId

string

The AccessKey ID that is used to access the OSS bucket.

yourAccessKeyID

Policy

string

The policy that poses limits on file upload. For example, the policy can limit the size of the file.

eyJleHBpcmF0aW9uIjoiMjAyMi0wNy0yM1QxMDo1ODoxMC43NTNaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMjA5NzE1MjBdLFsiZXEiLCIka2V5IiwiMS8yMDIyLzA2LzIzLzE4LzU4LzE2NTU5ODE4OTA3NTM4NTc2MjFkNS1kN2E1LTQ5YzAtOGJjZi0yMTMyY2JiYTdmYzMi\*\*\*\*

Signature

string

The signature that is used to upload the file.

wDhPgVdnY/bkKFYcYFl+4crl\*\*\*\*

OssKey

string

The key of the file that is used after the file is uploaded to the OSS bucket.

1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8\*\*\*\*

FileExist

boolean

Indicates whether the file exists in the cloud. Valid values:

-   **true**: The file exists in the cloud. You do not need to upload the file.
-   **false**: The file does not exist in the cloud. You must upload the file.

false

HashKey

string

The identifier of the file.

0a212417e65c26ff133cfff28f6c\*\*\*\*

Code

string

The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.

200

Message

string

The error message returned.

successful

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F",
  "UploadUrlList": [
    {
      "PublicUrl": "http://example.com",
      "InternalUrl": "http://example.com",
      "Expire": 1658562101370,
      "Context": {
        "AccessId": "yourAccessKeyID",
        "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMi0wNy0yM1QxMDo1ODoxMC43NTNaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMjA5NzE1MjBdLFsiZXEiLCIka2V5IiwiMS8yMDIyLzA2LzIzLzE4LzU4LzE2NTU5ODE4OTA3NTM4NTc2MjFkNS1kN2E1LTQ5YzAtOGJjZi0yMTMyY2JiYTdmYzMi****",
        "Signature": "wDhPgVdnY/bkKFYcYFl+4crl****",
        "OssKey": "1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****"
      },
      "FileExist": false,
      "HashKey": "0a212417e65c26ff133cfff28f6c****",
      "Code": 200,
      "Message": "successful"
    }
  ]
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

InvalidApiDetectType

Unsupported Api Detect Type.

The file type is not supported.

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

2023-06-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/CreateFileDetectUploadUrl?updateTime=2023-06-19#workbench-doc-change-demo)

2022-08-22

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/CreateFileDetectUploadUrl?updateTime=2022-08-22#workbench-doc-change-demo)

2022-08-22

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Sas/2018-12-03/CreateFileDetectUploadUrl?updateTime=2022-08-22#workbench-doc-change-demo)
