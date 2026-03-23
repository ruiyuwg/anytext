Modifies the name or description of a specific security group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySecurityGroupAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifySecurityGroupAttribute)

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

ecs:ModifySecurityGroupAttribute

update

\*SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SecurityGroupId

string

Yes

The security group ID.

sg-bp67acfmxazb4p\*\*\*\*

Description

string

No

The new description of the security group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

By default, the parameter is empty, which indicates that the description remains unchanged.

TestDescription

SecurityGroupName

string

No

The new name of the security group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

By default, the parameter is empty, which indicates that the name remains unchanged.

SecurityGroupTestName

RegionId

string

Yes

The region ID of the security group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidSecurityGroupName.Malformed

Specified security group name is not valid.

The specified SecurityGroupName parameter is invalid. This parameter is empty by default. If you specify a security group name, the name must be 2 to 128 characters in length and start with a letter. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-) and cannot start with http:// or https. The security group name is displayed in the ECS console.

400

InvalidSecurityGroupDiscription.Malformed

Specified security group description is not valid.

The specified security group description is invalid.

400

InvalidParameter

Invalid Parameter.

\-

400

InvalidSecurityGroupName.Malformed

The specified parameter SecurityGroupName is not valid.

The specified SecurityGroupName parameter is not valid. This parameter is empty by default. If you specify a security group name, the name must be 2 to 128 characters in length and start with a letter. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-) and cannot start with http:// or https. The security group name is displayed in the ECS console.

403

InvalidOperation.ResourceManagedByCloudProduct

%s

You cannot modify security groups managed by cloud services.

404

InvalidSecurityGroupId.NotFound

The specified SecurityGroupId does not exist.

The specified security group does not exist in this account. Check whether the security group ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupAttribute?updateTime=2025-03-12#workbench-doc-change-demo)

2023-08-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifySecurityGroupAttribute?updateTime=2023-08-31#workbench-doc-change-demo)
