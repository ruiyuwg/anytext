Attaches an instance Resource Access Management (RAM) role to Elastic Compute Service (ECS) instances.

## Operation description

You can call the [DescribeInstanceRamRole](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceramrole) operation to query the [instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance) that are attached to ECS instances.

**Note** If an ECS instance already has an instance RAM role, an error is returned when you attach another instance RAM role to the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachInstanceRamRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/AttachInstanceRamRole)

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

ecs:AttachInstanceRamRole

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*Role

`acs:ram:{#regionId}:{#accountId}:role/{#roleName}`

none

-   ram:PassRole

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

RamRoleName

string

Yes

The name of the instance RAM role. You can call the [ListRoles](/help/en/ram/api-listroles) operation provided by RAM to query the instance RAM roles that you created.

testRamRoleName

InstanceIds

string

Yes

The IDs of ECS instances. You can specify 1 to 100 ECS instances.

\[“i-bp14ss25xca5ex1u\*\*\*\*”, “i-bp154z5o1qjalfse\*\*\*\*”, “i-bp10ws62o04ubhvi\*\*\*\*”…\]

Policy

string

No

The additional policy. When you attach an instance RAM role to instances, you can specify an additional policy to further limit the permissions of the role. For more information, see [Policy overview](/help/en/ram/policy-overview). The value of this parameter must be 1 to 1,024 characters in length.

{"Statement": \[{"Action": \["\*"\],"Effect": "Allow","Resource": \["\*"\]}\],"Version":"1"}

## Response parameters

Parameter

Type

Description

Example

object

RamRoleName

string

The name of the instance RAM role.

testRamRoleName

RequestId

string

The request ID.

D9553E4C-6C3A-4D66-AE79-9835AF705639

TotalCount

integer

The total number of instances to which you attempted to attach the instance RAM role.

1

FailCount

integer

The number of instances to which the instance RAM role failed to be attached.

0

AttachInstanceRamRoleResults

array<object>

Details about the results of attaching the instance RAM role.

AttachInstanceRamRoleResult

object

The type of the instance RAM role.

Code

string

Indicates whether the instance RAM role was attached. If the instance RAM role was attached, 200 is returned. If the instance RAM role failed to be attached, any other value is returned. For more information, see the "Error codes" section.

200

Message

string

Indicates whether the instance RAM role was attached. If the instance RAM role was attached, success is returned. If the instance RAM role failed to be attached, any other value is returned. For more information, see the "Error codes" section.

success

InstanceId

string

The ID of the instance.

i-bp10ws62o04ubhvi\*\*\*\*

Success

boolean

Indicates whether the instance RAM role was attached.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RamRoleName": "testRamRoleName",
  "RequestId": "D9553E4C-6C3A-4D66-AE79-9835AF705639",
  "TotalCount": 1,
  "FailCount": 0,
  "AttachInstanceRamRoleResults": {
    "AttachInstanceRamRoleResult": [
      {
        "Code": 200,
        "Message": "success",
        "InstanceId": "i-bp10ws62o04ubhvi****",
        "Success": true
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidInstanceIds.Malformed

The specified instanceIds are not valid.

Multiple specified instance IDs are invalid.

403

InvalidNetworkType.MismatchRamRole

Ram role cannot be applied to instances of Classic network type.

Instance RAM roles can be used only for instances of the VPC type, not for instances of the classic network type.

403

InvalidUser.PassRoleForbidden

The RAM user does not have the privilege to pass a RAM role.

The RAM user is not authorized to pass a RAM role.

404

InvalidInstanceId.NotFound

The specified instanceId does not exist.

The specified instance does not exist.

404

InvalidRamRole.NotFound

The specified RAMRoleName does not exist.

The specified RamRoleName parameter does not exist.

404

InvalidRamRole.NotEcsRole

The specified ram role is not authorized for ecs, please check your role policy.

The specified RAM role is not authorized to use ECS. Check your role policies.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachInstanceRamRole?updateTime=2024-12-17#workbench-doc-change-demo)

2023-07-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/AttachInstanceRamRole?updateTime=2023-07-10#workbench-doc-change-demo)
