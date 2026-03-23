Removes multiple roles from a single user.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/DataLake/2020-07-10/RevokeRolesFromUser)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/DataLake/2020-07-10/RevokeRolesFromUser)

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

dlf:RevokeRolesFromUser

delete

\*All Resources

`*`

none

none

## Request syntax

```
POST /api/metastore/auth/roles/revokeroles HTTP/1.1
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

The HTTP request body, in the JSON format.

RoleNames

[ListString](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-liststring)

Yes

The RAM roles to be revoked from the RAM user.

User

[Principal](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-principal)

Yes

The RAM user from whom you want to revoke roles. Format:

-   RAM roles: acs:ram::\[accountId\]:role/\[roleName\].
-   RAM user: acs:ram::\[accountId\]:user/\[userName\].

## Response parameters

Parameter

Type

Description

Example

object

Returns the message body.

RequestId

string

The request ID.

B7F4B621-E41E-4C84-B97F-42B5380A32BB

Code

string

The returned message.

OK

Message

string

The response message.

.

Success

boolean

Indicates whether the request was successful. Valid values: Valid values:

-   true: The request was successful.
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B7F4B621-E41E-4C84-B97F-42B5380A32BB",
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
