Attaches a permission policy to an object, which can be a RAM user, RAM user group, or RAM role. After you attach a permission policy to an object, the object has the operation permissions on the resources in a specific resource group or within a specific Alibaba Cloud account.

## Operation description

In this example, the policy `AdministratorAccess` is attached to the RAM user `alice@demo.onaliyun.com` and takes effect only for resources in the `rg-9gLOoK****` resource group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/AttachPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/AttachPolicy)

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

The effective scope of the permission policy. Valid values:

-   ID of a resource group: indicates that the permission policy takes effect for the resources in the resource group.
-   ID of the Alibaba Cloud account to which the authorized object belongs: indicates that the permission policy takes effect for the resources within the Alibaba Cloud account.

rg-9gLOoK\*\*\*\*

PolicyType

string

Yes

The type of the permission policy. Valid values:

-   Custom
-   System

System

PolicyName

string

Yes

The name of the permission policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphens (-).

AdministratorAccess

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

-   If you want to attach the permission policy to a RAM user, specify the name in the @.onaliyun.com format. indicates the name of the RAM user, and indicates the alias of the Alibaba Cloud account to which the RAM user belongs.
-   If you want to attach the permission policy to a RAM user group, specify the name in the @group..onaliyun.com format. indicates the name of the RAM user group, and indicates the alias of the Alibaba Cloud account to which the RAM user group belongs.
-   If you want to attach the permission policy to a RAM role, specify the name in the @role..onaliyunservice.com format. indicates the name of the RAM role, and indicates the alias of the Alibaba Cloud account to which the RAM role belongs.

**Note** The alias of an Alibaba Cloud account is a part of the default domain name. You can call the [GetDefaultDomain](/help/en/ram/developer-reference/api-getdefaultdomain) operation to obtain the alias of an Alibaba Cloud account.

alice@demo.onaliyun.com

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

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
