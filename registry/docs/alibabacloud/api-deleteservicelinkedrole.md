Deletes a service-linked role.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeleteServiceLinkedRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DeleteServiceLinkedRole)

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

AliyunServiceRoleForPolarDB

## Response parameters

Parameter

Type

Description

Example

object

DeletionTaskId

string

The ID of the deletion task.

task/acs-service-role/polardb.aliyuncs.com/AliyunServiceRoleForPolarDB/64c4f9cc-fac2-4692-ae1b-804ae4b9\*\*\*\*

RequestId

string

The request ID.

B595E5BF-FF5F-4E7F-B95A-B90FE242FEB6

## Examples

Sample success responses

`JSON`format

```
{
  "DeletionTaskId": "task/acs-service-role/polardb.aliyuncs.com/AliyunServiceRoleForPolarDB/64c4f9cc-fac2-4692-ae1b-804ae4b9****",
  "RequestId": "B595E5BF-FF5F-4E7F-B95A-B90FE242FEB6"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

EntityNotExist.Role

The role does not exist.

The role does not exist.

404

EntityNotExist.ServiceLinkedRole

This role exists but is not a Service Linked Role.

This role exists but is not a Service Linked Role.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
