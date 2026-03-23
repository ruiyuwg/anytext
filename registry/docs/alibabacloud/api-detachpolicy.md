Detaches a permission policy from an object. After you detach a policy from an object, the object does not have the operation permissions on the current resource group or the resources within the current account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DetachPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/DetachPolicy)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ResourceGroupId

string

Yes

The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.

This parameter specifies the resource group or Alibaba Cloud account for which you want to revoke permissions.

rg-9gLOoK\*\*\*\*

PolicyType

string

Yes

The type of the permission policy. Valid values:

-   Custom
-   System

Custom

PolicyName

string

Yes

The name of the permission policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).

OSS-Administrator

PrincipalType

string

Yes

The type of the object to which you want to attach the permission policy. Valid values:

-   IMSUser: RAM user
-   IMSGroup: RAM user group
-   ServiceRole: RAM role

IMSUser

PrincipalName

string

Yes

The name of the object to which you want to attach the permission policy.

alice@demo.onaliyun.com

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

697852FB-50D7-44D9-9774-530C31EAC572

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "697852FB-50D7-44D9-9774-530C31EAC572"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.PolicyType

The specified policy type is invalid.

The specified policy type is invalid.

404

EntityNotExist.Policy

The policy does not exist.

The policy does not exist.

404

EntityNotExists.ResourceGroup

The specified resource group does not exist. You must first create a resource group.

The specified resource group does not exist. You must first create a resource group.

409

Invalid.ResourceGroup.Status

You cannot perform an operation on a resource group that is being created or deleted.

You cannot perform an operation on a resource group that is being created or deleted.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
