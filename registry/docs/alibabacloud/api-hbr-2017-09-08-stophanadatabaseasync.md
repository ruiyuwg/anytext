Stops an SAP HANA database.

## Operation description

To start the database again, call the StartHanaDatabaseAsync operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/StopHanaDatabaseAsync)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/StopHanaDatabaseAsync)

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

hbr:StopHanaDatabaseAsync

update

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

VaultId

string

Yes

The ID of the backup vault.

v-0006wkn\*\*\*\*\*\*gzkn

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-000dw\*\*\*\*\*\*45ijer

DatabaseName

string

Yes

The database name.

BWP

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

CD8B903B-DE8F-5969-9414-B2C634D504D9

TaskId

string

The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.

t-0007o3vqfukgd3y5bxxr

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "CD8B903B-DE8F-5969-9414-B2C634D504D9",
  "TaskId": "t-0007o3vqfukgd3y5bxxr",
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
