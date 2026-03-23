Deletes a RAM role.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeleteRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeleteRole)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RoleName

string

Yes

The name of the role.

The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).

ECSAdmin

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

898FAB24-7509-43EE-A287-086FE4C44394

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "898FAB24-7509-43EE-A287-086FE4C44394"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.RoleName.InvalidChars

The specified role name contains invalid characters.

The specified role name contains invalid characters.

400

InvalidParameter.RoleName.Length

The maximum length of the role name is exceeded.

The maximum length of the role name is exceeded.

404

EntityNotExist.Role

The role does not exist.

The role does not exist.

409

DeleteConflict.Role.Policy

The role cannot have any attached policies when you delete it.

The role cannot have any attached policies when you delete it.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
