Detaches instance Resource Access Management (RAM) roles from Elastic Compute Service (ECS) instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachInstanceRamRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DetachInstanceRamRole)

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

ecs:DetachInstanceRamRole

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*Role

`acs:ram:{#regionId}:{#accountId}:role/{#roleName}`

none

none

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

No

The name of the instance RAM role. You can call the [ListRoles](/help/en/ram/api-listroles) operation of RAM to query the names of available instance RAM roles.

RamRoleTest

InstanceIds

string

Yes

The IDs of ECS instances. You can specify 1 to 100 instance IDs.

\["i-bp67acfmxazb4p\*\*\*\*", "i-bp67acfmxazb5p\*\*\*\*", "i-bp67acfmxazb6p\*\*\*\*"…\]

## Response parameters

Parameter

Type

Description

Example

object

RamRoleName

string

The name of the instance RAM role.

RamRoleTest

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of ECS instances from which you attempted to detach instance RAM roles.

1

FailCount

integer

The number of ECS instances from which instance RAM roles failed to be detached.

0

DetachInstanceRamRoleResults

array<object>

The results of the instance RAM role detachment, which include the names of the instance RAM roles and the IDs of the ECS instances from which you attempted to detach the instance RAM roles.

DetachInstanceRamRoleResult

object

Code

string

Indicates whether the instance RAM role was detached. If 200 is returned, the instance RAM role was detached. If any other value is returned, the instance RAM role failed to be detached. For more information, see the "Error codes" section.

200

Message

string

Indicates whether the instance RAM role was detached. If success is returned, the instance RAM role was detached. If any other value is returned, the instance RAM role failed to be detached. For more information, see the "Error codes" section.

Success

InstanceId

string

The ID of the ECS instance from which you attempted to detach the instance RAM role.

i-bp67acfmxazb4p\*\*\*\*

Success

boolean

Indicates whether the instance RAM role was detached.

true

InstanceRamRoleSets

array<object>

The name of the instance RAM role and the ID of the ECS instance.

InstanceRamRoleSet

object

RamRoleName

string

The name of the instance RAM role.

RamRoleTest

InstanceId

string

The ID of the ECS instance.

i-bp67acfmxazb4p\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RamRoleName": "RamRoleTest",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 1,
  "FailCount": 0,
  "DetachInstanceRamRoleResults": {
    "DetachInstanceRamRoleResult": [
      {
        "Code": 200,
        "Message": "Success",
        "InstanceId": "i-bp67acfmxazb4p****",
        "Success": true,
        "InstanceRamRoleSets": {
          "InstanceRamRoleSet": [
            {
              "RamRoleName": "RamRoleTest",
              "InstanceId": "i-bp67acfmxazb4p****"
            }
          ]
        }
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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DetachInstanceRamRole?updateTime=2024-12-17#workbench-doc-change-demo)
