Updates a role that has the data lake permissions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/DataLake/2020-07-10/UpdateRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/DataLake/2020-07-10/UpdateRole)

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

dlf:UpdateRole

update

\*All Resources

`*`

none

none

## Request syntax

```
PUT /api/metastore/auth/roles HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

body

object

No

The request body.

RoleName

string

No

The role name.

RoleInput

[RoleInput](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-roleinput)

No

The input information of the updated role.

## Response parameters

Parameter

Type

Description

Example

object

Response

RequestId

string

The request ID.

604E5919-C6FF-54CE-9C23-C5350E6F5415

Code

string

The status of the request.

OK

Message

string

The returned message.

.

Success

boolean

Indicates whether the request is successful. Valid values: true and false

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "604E5919-C6FF-54CE-9C23-C5350E6F5415",
  "Code": "OK",
  "Message": ".",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
