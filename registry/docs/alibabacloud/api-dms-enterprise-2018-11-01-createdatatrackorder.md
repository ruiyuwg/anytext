Creates a data tracking ticket.

## Operation description

This operation is available only for instances that are managed in Security Collaboration mode.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/CreateDataTrackOrder)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/CreateDataTrackOrder)

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

dms:CreateDataTrackOrder

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

Comment

string

Yes

The purpose or objective of the data tracking ticket. This parameter is used to help reduce unnecessary communication.

test

RelatedUserList

array

No

The IDs of the operators that are related to the ticket.

string

No

The ID of an operator that is related to the ticket.

123\*\*\*

Param

object

Yes

The parameters of the ticket.

DbId

string

Yes

The ID of the database. You can call the [SearchDatabases](/help/en/dms/api-searchdatabase) operation to query the ID of the database.

**Note** You can call this operation to create a data tracking ticket for only physical databases. This operation is not applicable to logical databases.

123\*\*\*

JobStartTime

string

Yes

The start time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 00:00:00

JobEndTime

string

Yes

The end time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 10:00:00

TableNames

array

Yes

The names of the tables for which you want to track data operations.

string

No

The name of a table for which you want to track data operations.

table2

TrackTypes

array

Yes

The types of data operations that you want to track.

string

No

A type of data operation that you want to track. Valid values:

-   **INSERT**
-   **UPDATE**
-   **DELETE**

INSERT

Tid

long

No

The ID of the tenant. You can call the [GetUserActiveTenant](/help/en/dms/api-getuseractivetenant) operation to query the tenant ID.

3\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response schema.

RequestId

string

The request ID.

283C461F-11D8-48AA-B695-DF092DA32AF3

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

CreateOrderResult

array

The IDs of the data tracking tickets.

OrderIds

long

The ID of the data tracking ticket.

12\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "283C461F-11D8-48AA-B695-DF092DA32AF3",
  "Success": true,
  "ErrorMessage": "UnknownError",
  "ErrorCode": "UnknownError",
  "CreateOrderResult": [
    0
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dms-enterprise/2018-11-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
