Queries an asynchronous job.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeTask)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeTask)

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

hbr:DescribeTask

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

Token

string

No

The access token.

01W3ZZOQ

TaskId

string

No

The ID of the job.

t-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmvywqfey5njq

## Response parameters

Parameter

Type

Description

Example

object

Progress

integer

The progress of the job. Valid values: 0 to 100. Unit: percentage (%). If the job fails, the value -1 is returned.

100

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

CompletedTime

long

The time when the task was complete. The time is a UNIX timestamp. Unit: seconds.

1615607706

Result

string

The result of the job.

{}

Description

string

The status of the job. Valid values:

-   **created**: The job is created.
-   **expired**: The job expires.
-   **completed**: The job is completed.
-   **cancelled**: The job is canceled.

completed

UpdatedTime

long

The time when the job was updated. This value is a UNIX timestamp. Unit: seconds.

1615607706

Success

boolean

Indicates whether the call is successful.

-   true: The call is successful.
-   false: The call fails.

true

Code

string

HttpCode

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

Name

string

The name of the job.

InstallBackupClientsTask

CreatedTime

long

The time when the job was created. This value is a UNIX timestamp. Unit: seconds.

1615607706

## Examples

Sample success responses

`JSON`format

```
{
  "Progress": 100,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "CompletedTime": 1615607706,
  "Result": {},
  "Description": "completed",
  "UpdatedTime": 1615607706,
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "Name": "InstallBackupClientsTask",
  "CreatedTime": 1615607706
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
