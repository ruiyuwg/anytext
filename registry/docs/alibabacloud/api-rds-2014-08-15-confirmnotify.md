Marks the notifications of an instance within your Alibaba Cloud account as confirmed.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#feature-description)[](#)Feature description

After you call the [QueryNotify](/help/en/rds/developer-reference/api-rds-2014-08-15-querynotify) operation to query notifications for an instance, you can call this operation to mark the notifications as confirmed.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ConfirmNotify)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ConfirmNotify)

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

rds:ConfirmNotify

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

Confirmor

long

Yes

The ID of the Alibaba Cloud account that is used to confirm the notification. You can set this parameter to **0**, which indicates that the notification is confirmed by the system.

0

NotifyIdList

array

Yes

The notification IDs.

NotifyIdList

long

Yes

The ID of the notification that needs to be confirmed. You can call the QueryNotify operation to query the notification ID for an instance.

100000

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

6919FA39-04CF-571F-A6B0-DCC7AECB4170

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6919FA39-04CF-571F-A6B0-DCC7AECB4170"
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidNotifyId

No auth to confirm record

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
